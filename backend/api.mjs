import { createServer } from 'node:http';
import { isIP } from 'node:net';
import { attachmentColumns, deleteAttachment, readAttachment, uploadAttachment } from './attachments.mjs';
import { authenticate, changePassword, digest, login, register } from './auth.mjs';
import { postDocument, returnDocument, reverseDocument, summary } from './documents.mjs';
import { ApiError, emailAddress, fail, fieldText, identifier } from './input.mjs';
import { createEmployee, payrollColumns, recordPayroll, reversePayroll } from './payroll.mjs';
import { takeLimit } from './service-limits.mjs';
import { addMember, createShop, editCatalog, listShops, removeMember, updateShop, withShop } from './shops.mjs';
import { assertWarehouses, createWarehouse } from './warehouses.mjs';
import { chequeColumns, createCheque, createTask, taskColumns, transitionCheque, updateTask } from './workflows.mjs';
import { serveWeb } from './web.mjs';

const MAX_JSON_BYTES = 256 * 1024;
const MAX_UPLOAD_BYTES = 3 * 1024 * 1024;
const WINDOW_MS = 15 * 60 * 1000;

async function jsonBody(request, limit) {
  if (!/^application\/json(?:\s*;|$)/i.test(request.headers['content-type'] ?? '')) fail(415, 'json_required');
  if (Number(request.headers['content-length']) > limit) fail(413, 'body_too_large');
  const chunks = [];
  let bytes = 0;
  for await (const chunk of request.iterator({ destroyOnReturn: false })) {
    bytes += chunk.length;
    if (bytes > limit) {
      request.resume();
      fail(413, 'body_too_large');
    }
    chunks.push(chunk);
  }
  let result;
  try { result = JSON.parse(Buffer.concat(chunks).toString('utf8')); }
  catch { fail(400, 'invalid_json'); }
  if (!result || typeof result !== 'object' || Array.isArray(result)) fail(400, 'invalid_json_object');
  return result;
}

function respond(response, status, data) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(JSON.stringify(data));
}

function page(url) {
  const limit = url.searchParams.get('limit') ?? '100';
  const offset = url.searchParams.get('offset') ?? '0';
  if (!/^\d{1,3}$/.test(limit) || +limit < 1 || +limit > 100 || !/^\d{1,7}$/.test(offset)) {
    fail(400, 'invalid_pagination');
  }
  return [Number(limit), Number(offset)];
}

async function listed(client, sql, args) {
  const { rows: items } = await client.query(sql, args);
  return { items };
}

export function createApi(db, {
  allowRegistration = false, trustLoopbackProxy = false, intelligence = null, sms = null, billing = null, maxRequests = 48,
  readLimit = 180, writeLimit = 60,
} = {}) {
  const routes = [];
  const route = (method, path, run, { publicRoute = false, status = 200 } = {}) => {
    routes.push({ method, pattern: new RegExp('^' + path + '$'), run, publicRoute, status });
  };
  const shopRoute = (method, suffix, access, run, status = 200) => {
    route(method, '/v1/shops/([^/]+)' + suffix, async (context, rawShop, ...args) => {
      return withShop(db, identifier(rawShop), context.user, access, (client, shop) => run(client, shop, context, ...args));
    }, { status });
  };
  let attempts = new Map();
  let resetAt = 0;
  let pendingAuth = 0;
  let pendingAI = 0;
  let pendingRequests = 0;
  let pendingUploads = 0;
  const traffic = new Map();
  let nextSweep = 0;
  function limitApi(ip, method) {
    const now = Date.now();
    if (now >= nextSweep) {
      for (const [key, entry] of traffic) if (now - entry.at >= 60000) traffic.delete(key);
      nextSweep = now + 60000;
    }
    const read = ['GET', 'HEAD'].includes(method);
    const rate = read ? readLimit : writeLimit;
    const key = (read ? 'r:' : 'w:') + ip;
    const entry = traffic.get(key);
    if (!entry && traffic.size >= 10000) fail(429, 'api_rate_limited');
    const available = entry ? Math.min(rate, entry.tokens + (now - entry.at) * rate / 60000) : rate;
    if (available < 1) fail(429, 'api_rate_limited');
    traffic.set(key, { tokens: available - 1, at: now });
  }
  function limitAuth(ip) {
    if (Date.now() >= resetAt) {
      attempts = new Map();
      resetAt = Date.now() + WINDOW_MS;
    }
    const count = attempts.get(ip) ?? 0;
    if (count >= 60 || (!count && attempts.size >= 10000)) fail(429, 'too_many_auth_attempts');
    attempts.set(ip, count + 1);
  }
  async function authAttempt(ip, run) {
    limitAuth(ip);
    if (pendingAuth >= 4) fail(429, 'too_many_auth_attempts');
    pendingAuth += 1;
    try { return await run(); }
    finally { pendingAuth -= 1; }
  }
  function clientAddress(request) {
    const socket = request.socket.remoteAddress;
    const forwarded = request.headers['x-real-ip'];
    if (trustLoopbackProxy && ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(socket) &&
        typeof forwarded === 'string' && isIP(forwarded)) return forwarded;
    return socket;
  }

  route('GET', '/healthz', async () => {
    try { await db.query('SELECT 1'); }
    catch { fail(503, 'database_unavailable'); }
    return { ok: true };
  }, { publicRoute: true });
  route('POST', '/v1/auth/register', async ({ body, ip }) => {
    if (!allowRegistration) fail(403, 'registration_closed');
    return authAttempt(ip, () => register(db, body));
  }, { publicRoute: true, status: 201 });
  route('POST', '/v1/auth/login', ({ body, ip }) => authAttempt(ip, async () => {
    await takeLimit(db, 'password-account', digest(emailAddress(body.email)), 900, 12);
    return login(db, body);
  }), { publicRoute: true });
  route('GET', '/v1/auth/methods', () => ({ password: true, sms: Boolean(sms), registration: allowRegistration }), { publicRoute: true });
  for (const purpose of ['link', 'login']) {
    for (const step of ['request', 'confirm']) {
      route('POST', '/v1/auth/sms/' + purpose + '/' + step, ({ user, body, ip }) => {
        if (!sms) fail(503, 'sms_unavailable');
        return authAttempt(ip, () => sms[step === 'request' ? 'issue' : 'confirm'](purpose, user, body, ip));
      }, { publicRoute: purpose === 'login' });
    }
  }
  route('GET', '/v1/auth/session', ({ user }) => ({ user }));
  route('POST', '/v1/auth/password', ({ user, sessionHash, body, ip }) =>
    authAttempt(ip, async () => {
      await takeLimit(db, 'password-change', user.id, 900, 5);
      return changePassword(db, user, sessionHash, body);
    }));
  route('GET', '/v1/admin/overview', async ({ user }) => {
    const allowed = await db.query('SELECT 1 FROM platform_admins WHERE user_id=$1', [user.id]);
    if (!allowed.rowCount) fail(403, 'platform_admin_required');
    const { rows: [counts] } = await db.query(`SELECT
      (SELECT count(*) FROM users) AS accounts,
      (SELECT count(*) FROM shops) AS shops,
      (SELECT count(*) FROM shop_subscriptions WHERE expires_at>now()) AS subscriptions`);
    return {
      counts,
      integrations: { ai: Boolean(intelligence), sms: Boolean(sms), billing: Boolean(billing) },
      limits: { readPerMinute: readLimit, writePerMinute: writeLimit, concurrent: maxRequests },
    };
  });
  route('POST', '/v1/auth/logout', async ({ sessionHash }) => {
    await db.query('DELETE FROM sessions WHERE token_hash=$1', [sessionHash]);
    return { ok: true };
  });
  route('PATCH', '/v1/me', async ({ user, body }) => {
    const name = fieldText(body.name, 'name', 100);
    const { rows: [updated] } = await db.query('UPDATE users SET name=$2 WHERE id=$1 RETURNING id,email,name', [user.id, name]);
    return { user: updated };
  });
  route('GET', '/v1/shops', ({ user }) => listShops(db, user));
  route('POST', '/v1/shops', ({ user, body }) => createShop(db, user, body), { status: 201 });
  shopRoute('GET', '', 'read', (_client, shop) =>
    ({ id: shop.id, name: shop.name, role: shop.role, revision: shop.revision, pointsPerSale: shop.points_per_sale }));
  shopRoute('PATCH', '', 'owner', (client, shop, { body }) => updateShop(client, shop, body));
  shopRoute('GET', '/sync', 'read', (_client, shop) => ({ revision: shop.revision }));
  shopRoute('GET', '/billing', 'owner', async (client, shop) => {
    const { rows: [subscription] } = await client.query(
      'SELECT expires_at AS "expiresAt",expires_at>now() AS active FROM shop_subscriptions WHERE shop_id=$1', [shop.id],
    );
    return { ready: Boolean(billing), plan: billing?.plan ?? null, subscription: subscription ?? null };
  });
  route('POST', '/v1/shops/([^/]+)/billing/checkout', ({ user, key }, id) => {
    if (!billing) fail(503, 'billing_unavailable');
    return billing.checkout(identifier(id), user, key);
  }, { status: 201 });
  shopRoute('GET', '/billing/payments/([^/]+)', 'owner', (client, shop, _context, id) => {
    if (!billing) fail(503, 'billing_unavailable');
    return billing.status(client, shop.id, identifier(id));
  });
  shopRoute('GET', '/billing/payments', 'owner', (client, shop, { url }) => {
    if (!billing) fail(503, 'billing_unavailable');
    return billing.history(client, shop.id, ...page(url));
  });
  route('GET', '/v1/billing/zibal/callback', ({ url }) => {
    if (!billing) fail(503, 'billing_unavailable');
    return billing.callback(identifier(url.searchParams.get('order')), url.searchParams.get('trackId'));
  }, { publicRoute: true });
  shopRoute('GET', '/members', 'owner', (client, shop) => listed(client,
    'SELECT u.id,u.name,u.email,m.role FROM memberships m JOIN users u ON u.id=m.user_id WHERE m.shop_id=$1 ORDER BY u.name,u.id',
    [shop.id]));
  shopRoute('POST', '/members', 'owner', (client, shop, { body }) => addMember(client, shop, body), 201);
  shopRoute('DELETE', '/members/([^/]+)', 'owner', (client, shop, _context, id) =>
    removeMember(client, shop, identifier(id)));
  shopRoute('GET', '/warehouses', 'read', (client, shop, { url }) => listed(client,
    'SELECT id,name,(id=shop_id) AS "primary" FROM warehouses WHERE shop_id=$1 ORDER BY (id=shop_id) DESC,name,id LIMIT $2 OFFSET $3',
    [shop.id, ...page(url)]));
  shopRoute('POST', '/warehouses', 'owner', (client, shop, { body }) => createWarehouse(client, shop, body), 201);
  shopRoute('GET', '/warehouses/([^/]+)/stock', 'read', async (client, shop, { url }, rawId) => {
    const id = identifier(rawId);
    await assertWarehouses(client, shop.id, [id]);
    return listed(client,
      `SELECT p.id AS "productId",p.name,p.sku,COALESCE(s.stock,0.000) AS stock FROM products p
       LEFT JOIN warehouse_stock s ON s.shop_id=p.shop_id AND s.product_id=p.id AND s.warehouse_id=$2
       WHERE p.shop_id=$1 ORDER BY p.name,p.id LIMIT $3 OFFSET $4`, [shop.id, id, ...page(url)]);
  });

  for (const table of ['products', 'contacts']) {
    const columns = table === 'products' ? 'id,name,sku,stock,version' : 'id,name,phone,balance,points,version';
    shopRoute('GET', '/' + table, 'read', (client, shop, { url }) => listed(client,
      `SELECT ${columns} FROM ${table} WHERE shop_id=$1 ORDER BY name,id LIMIT $2 OFFSET $3`, [shop.id, ...page(url)]));
    shopRoute('POST', '/' + table, 'write', (client, shop, { body }) => editCatalog(client, shop, table, body), 201);
    shopRoute('PUT', '/' + table + '/([^/]+)', 'write', (client, shop, { body }, id) =>
      editCatalog(client, shop, table, body, identifier(id)));
  }
  shopRoute('GET', '/documents', 'read', (client, shop, { url }) => {
    const contactId = url.searchParams.get('contactId');
    return listed(client,
      `SELECT id,kind,contact_id AS "contactId",amount,balance_delta AS "balanceDelta",point_delta AS "pointDelta",
              reverses_id AS "reversesId",return_of_id AS "returnOfId",note,created_at AS "createdAt"
       FROM documents WHERE shop_id=$1 AND ($4::uuid IS NULL OR contact_id=$4)
       ORDER BY created_at DESC,id DESC LIMIT $2 OFFSET $3`,
      [shop.id, ...page(url), contactId ? identifier(contactId) : null]);
  });
  shopRoute('GET', '/documents/([^/]+)', 'read', async (client, shop, _context, rawId) => {
    const args = [shop.id, identifier(rawId)];
    const { rows: [document] } = await client.query(
      `SELECT id,kind,contact_id AS "contactId",amount,balance_delta AS "balanceDelta",point_delta AS "pointDelta",
              reverses_id AS "reversesId",return_of_id AS "returnOfId",note,created_at AS "createdAt"
       FROM documents WHERE shop_id=$1 AND id=$2`, args,
    );
    if (!document) fail(404, 'document_not_found');
    const { rows: movements } = await client.query(
      'SELECT product_id AS "productId",warehouse_id AS "warehouseId",quantity_delta AS quantity,unit_price AS "unitPrice" FROM stock_movements WHERE shop_id=$1 AND document_id=$2 ORDER BY product_id,quantity_delta',
      args,
    );
    const { rows: attachments } = await client.query(
      `SELECT ${attachmentColumns} FROM attachments WHERE shop_id=$1 AND document_id=$2 ORDER BY created_at,id`, args,
    );
    return { ...document, movements, attachments };
  });
  shopRoute('POST', '/documents/([^/]+)/attachments', 'write', (client, shop, { user, body, key }, documentId) =>
    uploadAttachment(client, shop, user, identifier(documentId), body, key), 201);
  shopRoute('GET', '/documents/([^/]+)/attachments/([^/]+)', 'read', (client, shop, _context, documentId, id) =>
    readAttachment(client, shop, identifier(documentId), identifier(id)));
  shopRoute('DELETE', '/documents/([^/]+)/attachments/([^/]+)', 'write', (client, shop, _context, documentId, id) =>
    deleteAttachment(client, shop, identifier(documentId), identifier(id)));
  shopRoute('GET', '/products/([^/]+)/movements', 'read', (client, shop, { url }, id) => listed(client,
    `SELECT m.document_id AS "documentId",m.warehouse_id AS "warehouseId",m.quantity_delta AS quantity,m.unit_price AS "unitPrice",d.created_at AS "createdAt"
     FROM stock_movements m JOIN documents d ON d.shop_id=m.shop_id AND d.id=m.document_id
     WHERE m.shop_id=$1 AND m.product_id=$2 ORDER BY d.created_at DESC,d.id DESC,m.warehouse_id LIMIT $3 OFFSET $4`,
    [shop.id, identifier(id), ...page(url)]));
  shopRoute('POST', '/documents', 'write', (client, shop, { user, body, key }) =>
    postDocument(client, shop, user, body, key), 201);
  shopRoute('POST', '/documents/([^/]+)/reverse', 'write', (client, shop, { user, body, key }, id) =>
    reverseDocument(client, shop, user, identifier(id), body, key), 201);
  shopRoute('POST', '/documents/([^/]+)/returns', 'write', (client, shop, { user, body, key }, id) =>
    returnDocument(client, shop, user, identifier(id), body, key), 201);
  shopRoute('GET', '/cheques', 'read', (client, shop, { url }) => listed(client,
    `SELECT ${chequeColumns} FROM cheques WHERE shop_id=$1 ORDER BY due_on,id LIMIT $2 OFFSET $3`, [shop.id, ...page(url)]));
  shopRoute('POST', '/cheques', 'write', (client, shop, { user, body, key }) =>
    createCheque(client, shop, user, body, key), 201);
  shopRoute('POST', '/cheques/([^/]+)/(settle|bounce|cancel)', 'write', (client, shop, { user, body, key }, id, action) =>
    transitionCheque(client, shop, user, identifier(id), action, body, key), 201);
  for (const kind of ['reminders', 'shopping-list']) {
    shopRoute('GET', '/' + kind, 'read', (client, shop, { url }) => listed(client,
      `SELECT ${taskColumns} FROM tasks WHERE shop_id=$1 AND kind=$2 ORDER BY created_at DESC,id DESC LIMIT $3 OFFSET $4`,
      [shop.id, kind, ...page(url)]));
    shopRoute('POST', '/' + kind, 'write', (client, shop, { body }) => createTask(client, shop, kind, body), 201);
    shopRoute('PATCH', '/' + kind + '/([^/]+)', 'write', (client, shop, { body }, id) =>
      updateTask(client, shop, kind, identifier(id), body));
  }
  shopRoute('GET', '/reports/summary', 'read', (client, shop) => summary(client, shop.id));
  shopRoute('GET', '/payroll/employees', 'owner', (client, shop, { url }) => listed(client,
    'SELECT id,name FROM employees WHERE shop_id=$1 ORDER BY name,id LIMIT $2 OFFSET $3', [shop.id, ...page(url)]));
  shopRoute('POST', '/payroll/employees', 'owner', (client, shop, { body }) => createEmployee(client, shop, body), 201);
  shopRoute('GET', '/payroll/payments', 'owner', (client, shop, { url }) => listed(client,
    `SELECT ${payrollColumns} FROM payroll_payments WHERE shop_id=$1 ORDER BY created_at DESC,id DESC LIMIT $2 OFFSET $3`,
    [shop.id, ...page(url)]));
  shopRoute('POST', '/payroll/employees/([^/]+)/payments', 'owner', (client, shop, { user, body, key }, id) =>
    recordPayroll(client, shop, user, identifier(id), body, key), 201);
  shopRoute('POST', '/payroll/payments/([^/]+)/reverse', 'owner', (client, shop, { user, body, key }, id) =>
    reversePayroll(client, shop, user, identifier(id), body, key), 201);
  shopRoute('GET', '/club/([^/]+)', 'read', async (client, shop, _context, id) => {
    const { rows: [contact] } = await client.query('SELECT id,points FROM contacts WHERE shop_id=$1 AND id=$2', [shop.id, identifier(id)]);
    if (!contact) fail(404, 'contact_not_found');
    return contact;
  });
  shopRoute('GET', '/ai/status', 'read', () => ({ ready: typeof intelligence?.parseInvoice === 'function' }));
  route('POST', '/v1/shops/([^/]+)/ai/invoices/parse', async ({ user, body }, rawShop) => {
    const shopId = identifier(rawShop);
    await withShop(db, shopId, user, 'write', () => {});
    if (typeof intelligence?.parseInvoice !== 'function') fail(503, 'intelligence_unavailable');
    const input = fieldText(body.text, 'text', 20000);
    if (pendingAI >= 2) fail(429, 'intelligence_busy');
    pendingAI++;
    try {
      await takeLimit(db, 'ai-shop', shopId, 86400, intelligence.dailyLimit ?? 10);
      await takeLimit(db, 'ai-global', 'all', 86400, intelligence.globalDailyLimit ?? 100);
      return { draft: await intelligence.parseInvoice({ shopId, userId: user.id, text: input }) };
    } finally { pendingAI--; }
  }, { status: 201 });

  const server = createServer({ requestTimeout: 20000, headersTimeout: 10000, connectionsCheckingInterval: 1000 }, async (request, response) => {
    if (pendingRequests >= maxRequests) {
      request.resume();
      return respond(response, 503, { error: { code: 'server_busy' } });
    }
    pendingRequests++;
    let upload = false;
    try {
      const url = new URL(request.url, 'http://localhost');
      if (serveWeb(request, response, url.pathname)) return;
      const ip = clientAddress(request);
      if (url.pathname.startsWith('/v1/')) limitApi(ip, request.method);
      const match = routes.find(candidate => candidate.method === request.method && candidate.pattern.test(url.pathname));
      if (!match) fail(404, 'route_not_found');
      const session = match.publicRoute ? {} : await authenticate(db, request.headers.authorization);
      if (request.method === 'POST' && url.pathname.endsWith('/attachments')) {
        if (pendingUploads >= 4) fail(429, 'uploads_busy');
        pendingUploads++;
        upload = true;
      }
      const body = ['POST', 'PATCH', 'PUT'].includes(request.method) && url.pathname !== '/v1/auth/logout'
        ? await jsonBody(request, upload ? MAX_UPLOAD_BYTES : MAX_JSON_BYTES) : undefined;
      const context = { ...session, body, url, ip, key: request.headers['idempotency-key'] };
      const args = match.pattern.exec(url.pathname).slice(1);
      const result = await match.run(context, ...args);
      if (url.pathname === '/v1/billing/zibal/callback' && request.headers.accept?.includes('text/html')) {
        response.writeHead(303, {
          Location: '/?payment=' + encodeURIComponent(result.id),
          'Cache-Control': 'no-store',
          'Referrer-Policy': 'no-referrer',
        });
        return response.end();
      }
      respond(response, match.status, result);
    } catch (error) {
      request.resume();
      if (error instanceof ApiError) {
        if (error.message === 'api_rate_limited') response.setHeader('Retry-After', '60');
        return respond(response, error.status, { error: { code: error.message } });
      }
      if (error.code === '23505') return respond(response, 409, { error: { code: 'duplicate_record' } });
      if (error.code === '22003') return respond(response, 409, { error: { code: 'numeric_limit_reached' } });
      if (['53300', '57014', '57P01', 'ECONNREFUSED'].includes(error.code)) return respond(response, 503, { error: { code: 'server_busy' } });
      console.error('Novino request failed', { code: error.code ?? 'unexpected' });
      respond(response, 500, { error: { code: 'internal_error' } });
    } finally {
      pendingRequests--;
      if (upload) pendingUploads--;
    }
  });
  return server;
}
