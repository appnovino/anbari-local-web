import assert from 'node:assert/strict';
import { once } from 'node:events';
import { randomUUID } from 'node:crypto';
import { test } from 'node:test';
import { Pool } from 'pg';
import { migrate } from '../backend/database.mjs';
import { createApi } from '../backend/api.mjs';
import { createBilling } from '../backend/billing.mjs';
import { createSms } from '../backend/sms.mjs';
import { createKavenegar, createOpenAI, createZibal } from '../backend/providers.mjs';

async function fixture(t, services = () => ({})) {
  const connectionString = process.env.NOVINO_TEST_DATABASE_URL;
  assert.ok(connectionString, 'Set NOVINO_TEST_DATABASE_URL to an isolated PostgreSQL database');
  const schema = 'test_' + randomUUID().replaceAll('-', '');
  const admin = new Pool({ connectionString });
  t.after(() => admin.end());
  await admin.query('CREATE SCHEMA ' + schema);
  const db = new Pool({ connectionString, options: '-c search_path=' + schema });
  t.after(async () => {
    await db.end();
    const cleanup = new Pool({ connectionString });
    try { await cleanup.query('DROP SCHEMA ' + schema + ' CASCADE'); }
    finally { await cleanup.end(); }
  });
  await migrate(db);
  await migrate(db);
  const server = createApi(db, { allowRegistration: true, ...services(db) });
  server.listen(0, '127.0.0.1');
  t.after(() => new Promise(resolve => server.close(resolve)));
  await once(server, 'listening');
  const origin = 'http://127.0.0.1:' + server.address().port;
  async function call(path, { method = 'GET', body, token, key, status = 200 } = {}) {
    const headers = {};
    if (token) headers.authorization = 'Bearer ' + token;
    if (key) headers['idempotency-key'] = key;
    if (body !== undefined) headers['content-type'] = 'application/json';
    const response = await fetch(origin + path, { method, headers, body: JSON.stringify(body) });
    const result = await response.json();
    if (status !== null) assert.equal(response.status, status, JSON.stringify(result));
    return result;
  }
  const post = (path, body, options = {}) => call(path, { method: 'POST', body, status: 201, ...options });
  return { db, call, post, origin };
}

test('real PostgreSQL API persists tenant-scoped, atomic inventory and accounting', async t => {
  const { call, post, origin } = await fixture(t);
  const home = await fetch(origin);
  assert.equal(home.status, 200);
  assert.match(home.headers.get('content-security-policy'), /connect-src 'self'/);
  assert.match(await home.text(), /\/app\.mjs/);
  assert.match((await fetch(origin + '/app.mjs')).headers.get('content-type'), /javascript/);
  assert.equal((await fetch(origin + '/backend/.env')).status, 404);
  const password = 'a-local-test-password';
  const owner = await post('/v1/auth/register', { email: 'owner@example.com', name: 'Owner', password });
  const outsider = await post('/v1/auth/register', { email: 'other@example.com', name: 'Other', password });
  const token = owner.token;
  const shop = await post('/v1/shops', { name: 'انبار آزمایشی' }, { token });
  const root = '/v1/shops/' + shop.id;
  await call(root + '/products', { status: 401 });
  await call(root + '/products', { token: outsider.token, status: 404 });
  const contact = await post(root + '/contacts', { name: 'Customer' }, { token });
  const product = await post(root + '/products', { name: 'چای', sku: 'TEA' }, { token });
  await post(root + '/members', { email: 'other@example.com', role: 'viewer' }, { token });
  await post(root + '/products', { name: 'Unauthorized' }, { token: outsider.token, status: 403 });
  await call(root + '/products', { token: outsider.token });
  const record = (kind, fields, key, status = 201) => post(root + '/documents', { kind, ...fields }, { token, key, status });
  const lines = (quantity, unitPrice) => [{ productId: product.id, quantity, unitPrice }];
  await record('purchase', { contactId: contact.id, lines: lines(10, 200) }, 'buy');
  const saleData = { contactId: contact.id, lines: lines(3, 1000) };
  const [sale, retry] = await Promise.all([record('sale', saleData, 'sell'), record('sale', saleData, 'sell')]);
  assert.equal(sale.id, retry.id);
  await record('sale', { ...saleData, lines: lines(1, 1000) }, 'sell', 409);
  await record('sale', { ...saleData, lines: lines(8, 1000) }, 'no-stock', 409);
  assert.equal((await call(root + '/products', { token })).items[0].stock, '7.000');
  assert.equal((await call(root + '/contacts', { token })).items[0].balance, '1000');
  assert.equal((await call(root + '/club/' + contact.id, { token })).points, '3');
  await record('receipt', { contactId: contact.id, amount: 400 }, 'receipt');
  assert.equal((await call(root + '/contacts', { token })).items[0].balance, '600');
  await post(root + '/documents/' + sale.id + '/reverse', {}, { token, key: 'reverse' });
  await post(root + '/documents/' + sale.id + '/reverse', {}, { token, key: 'again', status: 409 });
  const secondDevice = await call('/v1/auth/login', { method: 'POST', body: { email: 'owner@example.com', password } });
  assert.equal((await call(root + '/products', { token: secondDevice.token })).items[0].stock, '10.000');
  assert.equal((await call(root + '/club/' + contact.id, { token })).points, '0');
  const report = await call(root + '/reports/summary', { token });
  assert.equal(report.sales, '0');
  assert.equal(report.receipts, '400');
  const partialSale = await record('sale', { contactId: contact.id, lines: lines(4, 1000) }, 'partial-sale');
  const returnPath = root + '/documents/' + partialSale.id + '/returns';
  const returnData = { lines: [{ productId: product.id, quantity: '1.500' }] };
  const returned = await post(returnPath, returnData, { token, key: 'partial-return' });
  assert.equal(returned.amount, '1500');
  assert.equal((await post(returnPath, returnData, { token, key: 'partial-return' })).id, returned.id);
  await post(returnPath, { lines: [{ productId: product.id, quantity: 3 }] }, { token, key: 'over-return', status: 409 });
  assert.equal((await call(root + '/products', { token })).items[0].stock, '7.500');
  assert.equal((await call(root + '/reports/summary', { token })).sales, '2500');
  await post(root + '/documents/' + partialSale.id + '/reverse', {}, { token, key: 'after-return', status: 409 });

  const cheque = await post(root + '/cheques', {
    contactId: contact.id, number: 'TEST123', amount: 300, direction: 'incoming', dueOn: '2026-12-15',
  }, { token, key: 'cheque' });
  const settled = await post(root + '/cheques/' + cheque.id + '/settle', {}, { token, key: 'clear-cheque' });
  assert.ok(settled.documentId);
  await post(root + '/cheques/' + cheque.id + '/settle', {}, { token, key: 'clear-again', status: 409 });
  await post(root + '/documents/' + settled.documentId + '/reverse', {}, { token, key: 'direct-reverse', status: 409 });
  assert.equal((await call(root + '/reports/summary', { token })).receipts, '700');

  const reminder = await post(root + '/reminders', { title: 'Check expiry', dueAt: '2026-12-16T10:00:00.000Z' }, { token });
  await call(root + '/reminders/' + reminder.id, { method: 'PATCH', body: { done: true }, token });
  assert.equal((await call(root + '/reminders', { token })).items[0].done, true);
  const item = await post(root + '/shopping-list', { title: 'Tea', quantity: '2.500' }, { token });
  await call(root + '/shopping-list/' + item.id, { method: 'PATCH', body: { done: true }, token });
  assert.equal((await call(root + '/shopping-list', { token })).items[0].quantity, '2.500');
  const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+aV4cAAAAASUVORK5CYII=';
  const attachment = await post(root + '/documents/' + partialSale.id + '/attachments', {
    name: 'receipt.png', mediaType: 'image/png', content: png,
  }, { token, key: 'attachment' });
  assert.equal(Object.hasOwn(attachment, 'content'), false);
  const attachmentPath = root + '/documents/' + partialSale.id + '/attachments/' + attachment.id;
  assert.equal((await call(attachmentPath, { token })).content, png);
  const foreignShop = await post('/v1/shops', { name: 'Other shop' }, { token: outsider.token });
  await call(attachmentPath.replace(shop.id, foreignShop.id), { token: outsider.token, status: 404 });
  await call(attachmentPath, { token: outsider.token, method: 'DELETE', status: 403 });
  await call(attachmentPath, { token, method: 'DELETE' });
  await call(attachmentPath, { token, status: 404 });
  const { movements } = await call(root + '/documents/' + partialSale.id, { token });
  assert.equal(movements[0].quantity, '-4.000');
  const lostStock = await Promise.all([
    record('sale', { lines: lines(5, 1000) }, 'race-a', null),
    record('sale', { lines: lines(5, 1000) }, 'race-b', null),
  ]);
  assert.equal(lostStock.filter(item => item.kind === 'sale').length, 1);
  assert.equal(lostStock.filter(item => item.error?.code === 'insufficient_stock').length, 1);
  assert.equal((await call(root + '/products', { token })).items[0].stock, '2.500');
  const primaryWarehouse = (await call(root + '/warehouses', { token })).items[0];
  const secondaryWarehouse = await post(root + '/warehouses', { name: 'Secondary' }, { token });
  const transfer = await record('transfer', {
    fromWarehouseId: primaryWarehouse.id, toWarehouseId: secondaryWarehouse.id, lines: [{ productId: product.id, quantity: 2 }],
  }, 'transfer');
  assert.equal(transfer.movements.length, 2);
  const stocks = id => call(root + '/warehouses/' + id + '/stock', { token });
  assert.equal((await stocks(primaryWarehouse.id)).items[0].stock, '0.500');
  assert.equal((await stocks(secondaryWarehouse.id)).items[0].stock, '2.000');
  assert.equal((await call(root + '/products', { token })).items[0].stock, '2.500');
  await record('sale', { lines: lines(1, 1000) }, 'default-no-stock', 409);
  await record('sale', { lines: lines(1, 1000), warehouseId: secondaryWarehouse.id }, 'secondary-sale');
  assert.equal((await stocks(secondaryWarehouse.id)).items[0].stock, '1.000');
  await post(root + '/documents/' + transfer.id + '/reverse', {}, { token, key: 'reverse-used-transfer', status: 409 });
  const worker = await post(root + '/payroll/employees', { name: 'Test worker' }, { token });
  const payrollBody = { period: '2026-11', earnings: 1000, deductions: 100 };
  const payrollPath = root + '/payroll/employees/' + worker.id + '/payments';
  await post(payrollPath, payrollBody, { token: outsider.token, key: 'forbidden-payroll', status: 403 });
  const payroll = await post(payrollPath, payrollBody, { token, key: 'payroll' });
  assert.equal(payroll.net, '900');
  assert.equal((await post(payrollPath, payrollBody, { token, key: 'payroll' })).id, payroll.id);
  await post(payrollPath, payrollBody, { token, key: 'already-paid-period', status: 409 });
  assert.equal((await call(root + '/reports/summary', { token })).expenses, '900');
  await post(root + '/documents/' + payroll.documentId + '/reverse', {}, { token, key: 'direct-payroll-reverse', status: 409 });
  await post(root + '/payroll/payments/' + payroll.id + '/reverse', {}, { token, key: 'reverse-payroll' });
  assert.equal((await call(root + '/reports/summary', { token })).expenses, '0');
  const parts = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Tehran',
    year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
  const day = Object.fromEntries(parts.map(part => [part.type, part.value]));
  const today = [day.year, day.month, day.day].join('-');
  assert.deepEqual(await call(root + '/reports/summary?from=' + today + '&to=' + today, { token }),
    await call(root + '/reports/summary', { token }));
  await call(root + '/reports/summary?from=2026-02-30&to=2026-03-01', { token, status: 400 });
  assert.equal((await call(root + '/ai/status', { token })).ready, false);
  await post(root + '/ai/invoices/parse', { text: 'Tea' }, { token, status: 503 });
  await call('/v1/auth/logout', { method: 'POST', token });
  await call(root + '/products', { token, status: 401 });
});

test('admin access, session revocation and bounded request quota', async t => {
  const { call, post, db, origin } = await fixture(t, () => ({ readLimit: 180, writeLimit: 12 }));
  assert.equal((await fetch(origin + '/admin')).status, 200);
  await call('/v1/admin/overview', { status: 401 });
  const password = 'old-test-password';
  const user = await post('/v1/auth/register', { email: 'admin@example.test', name: 'Admin', password });
  await call('/v1/admin/overview', { token: user.token, status: 403 });
  await db.query('INSERT INTO platform_admins(user_id) VALUES($1)', [user.user.id]);
  const admin = await call('/v1/admin/overview', { token: user.token });
  assert.deepEqual(admin.integrations, { ai: false, sms: false, billing: false });
  assert.equal(admin.counts.accounts, '1');
  const changed = await post('/v1/auth/password', { password, newPassword: 'changed-test-password' },
    { token: user.token, status: 200 });
  await call('/v1/admin/overview', { token: user.token, status: 401 });
  await call('/v1/admin/overview', { token: changed.token });
  const replies = await Promise.all(Array.from({ length: 18 }, () => fetch(origin + '/v1/shops', {
    method: 'POST', headers: { Authorization: 'Bearer ' + changed.token, 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Quota test' }),
  })));
  assert.ok(replies.some(response => response.status === 429 && response.headers.get('retry-after')));
  assert.ok(replies.some(response => response.status === 201));
  await Promise.all(replies.map(response => response.arrayBuffer()));
});

test('configured services enforce SMS proof, Zibal reconciliation and AI limits', async t => {
  let code, providerOrder, providerAmount, billing, smsCalls = 0, verifyCalls = 0, bankCalls = 0;
  let providerReady = false;
  const providerFetch = async (url, options) => {
    const address = new URL(url);
    assert.equal(options.redirect, 'error');
    assert.ok(options.signal);
    if (address.hostname === 'api.kavenegar.com') {
      assert.equal(address.pathname, '/v1/test-key/verify/lookup.json');
      assert.equal(options.body.get('receptor'), '09123456789');
      assert.equal(options.body.get('template'), 'novino-code');
      code = options.body.get('token');
      smsCalls++;
      return Response.json({ return: { status: 200 }, entries: [{ messageid: 42 }] });
    }
    const payload = JSON.parse(options.body);
    if (address.hostname === 'gateway.zibal.ir') {
      if (address.pathname === '/v1/request') {
        bankCalls++;
        providerOrder = payload.orderId;
        providerAmount = payload.amount;
        assert.equal(payload.amount, 123000);
        assert.equal(payload.callbackUrl, 'https://novino.example/v1/billing/zibal/callback?order=' + providerOrder);
        return Response.json({ result: 100, trackId: 123456 });
      }
      assert.equal(payload.trackId, 123456);
      if (address.pathname === '/v1/verify') {
        verifyCalls++;
        return Response.json({ result: 201 });
      }
      return Response.json({ result: 100, status: 1, orderId: providerOrder,
        refNumber: '1234512345', amount: providerReady ? providerAmount : providerAmount + 10 });
    }
    assert.equal(address.href, 'https://api.openai.com/v1/responses');
    assert.equal(options.headers.Authorization, 'Bearer test-ai');
    assert.equal(payload.store, false);
    assert.equal(payload.text.format.type, 'json_schema');
    return Response.json({ status: 'completed', output: [{ type: 'message', content: [{
      type: 'output_text', text: '{"lines":[{"name":"Tea","quantity":"2","unitPriceToman":12000}]}',
    }] }] });
  };
  const { call, post, db, origin } = await fixture(t, pool => {
    billing = createBilling(pool, createZibal('test-merchant', providerFetch), {
      origin: 'https://novino.example', amountRial: 123000, durationDays: 30,
    });
    return {
      billing,
      sms: createSms(pool, createKavenegar('test-key', 'novino-code', providerFetch), { secret: 'local-test-secret', dailyLimit: 2 }),
      intelligence: Object.assign(createOpenAI('test-ai', 'test-model', providerFetch), { dailyLimit: 1 }),
    };
  });
  const password = 'a-long-test-password';
  const { token } = await post('/v1/auth/register', { email: 'owner@example.test', name: 'Owner', password });
  const other = await post('/v1/auth/register', { email: 'other@example.test', name: 'Other', password });
  const shop = await post('/v1/shops', { name: 'Shop' }, { token });
  const root = '/v1/shops/' + shop.id;
  const link = '/v1/auth/sms/link';
  const login = '/v1/auth/sms/login';
  const smsPost = (path, body, options = {}) => post(path, body, { status: 200, ...options });
  const unknown = await smsPost(login + '/request', { phone: '09123450000' });
  assert.ok(unknown.challengeId);
  assert.equal(smsCalls, 0);
  const linkRequest = await smsPost(link + '/request', { phone: '۰۹۱۲۳۴۵۶۷۸۹', password }, { token });
  const linkCode = { challengeId: linkRequest.challengeId, code };
  await smsPost(link + '/confirm', linkCode, { token: other.token, status: 401 });
  await smsPost(link + '/confirm', { ...linkCode, code: '000000' }, { token, status: 401 });
  assert.equal((await smsPost(link + '/confirm', linkCode, { token })).phone, '09123456789');
  await smsPost(link + '/confirm', linkCode, { token, status: 401 });
  const loginRequest = await smsPost(login + '/request', { phone: '+989123456789' });
  const loginCode = { challengeId: loginRequest.challengeId, code };
  const outcomes = await Promise.all([smsPost(login + '/confirm', loginCode, { status: null }),
    smsPost(login + '/confirm', loginCode, { status: null })]);
  assert.equal(outcomes.filter(result => result.token).length, 1);
  assert.equal(smsCalls, 2);

  const checkout = () => post(root + '/billing/checkout', { amountRial: 1 }, { token, key: 'one-payment' });
  const [payment, retry] = await Promise.all([checkout(), checkout()]);
  assert.equal(payment.id, retry.id);
  assert.equal(bankCalls, 1);
  await call(root + '/billing/payments/' + payment.id, { token: other.token, status: 404 });
  const callback = '/v1/billing/zibal/callback?order=' + payment.id;
  await call(callback + '&trackId=999&success=1', { status: 404 });
  assert.equal(verifyCalls, 0);
  assert.equal((await call(callback + '&trackId=123456&success=1')).status, 'pending');
  assert.equal((await call(root + '/billing', { token })).subscription, null);
  providerReady = true;
  await db.query("UPDATE subscription_payments SET next_check_at=now()-interval '1 second' WHERE id=$1", [payment.id]);
  await Promise.all([billing.recover(), billing.recover()]);
  const paid = await call(root + '/billing', { token });
  assert.equal(paid.subscription.active, true);
  assert.equal((await call(root + '/billing/payments', { token })).items[0].status, 'paid');
  assert.equal((await call(callback + '&trackId=123456&success=1')).status, 'paid');
  const browserReturn = await fetch(origin + callback + '&trackId=123456', {
    headers: { Accept: 'text/html' }, redirect: 'manual',
  });
  assert.equal(browserReturn.status, 303);
  assert.equal(browserReturn.headers.get('location'), '/?payment=' + payment.id);
  assert.equal((await call(root + '/billing', { token })).subscription.expiresAt, paid.subscription.expiresAt);
  assert.equal(verifyCalls, 2);

  const draftPath = root + '/ai/invoices/parse';
  const draft = await post(draftPath, { text: 'Two tea at 12000 toman' }, { token });
  assert.equal(draft.draft.lines[0].unitPriceToman, 12000);
  await post(draftPath, { text: 'Another invoice' }, { token, status: 429 });
  assert.deepEqual((await call(root + '/documents', { token })).items, []);
});
