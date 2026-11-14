import { randomUUID } from 'node:crypto';
import { digest } from './auth.mjs';
import { decimalQuantity, fail, fieldText, identifier, integer, quantityMillis } from './input.mjs';
import { assertWarehouses, updateStock } from './warehouses.mjs';

const stockKinds = new Set(['purchase', 'sale', 'adjustment', 'transfer']);
const contactKinds = new Set(['receipt', 'payment', 'redemption']);
const kinds = new Set([...stockKinds, ...contactKinds, 'expense']);

function parseDocument(body, shop) {
  const kind = body.kind;
  if (!kinds.has(kind)) fail(400, 'invalid_kind');
  const contactId = body.contactId == null ? null : identifier(body.contactId);
  if (contactKinds.has(kind) && !contactId) fail(400, 'contact_required');
  if (['expense', 'adjustment', 'transfer'].includes(kind) && contactId) fail(400, 'unexpected_contact');
  const note = fieldText(body.note, 'note', 1000, true);
  let amount = 0n;
  let quantity = 0n;
  let movements = [];
  if (stockKinds.has(kind)) {
    if (!Array.isArray(body.lines) || !body.lines.length || body.lines.length > 100) fail(400, 'invalid_lines');
    const products = new Set();
    const transfer = kind === 'transfer';
    const warehouseId = transfer ? identifier(body.fromWarehouseId) :
      body.warehouseId == null ? shop.id : identifier(body.warehouseId);
    const destinationId = transfer ? identifier(body.toWarehouseId) : null;
    if (warehouseId === destinationId) fail(400, 'same_warehouse');
    movements = body.lines.flatMap(line => {
      if (!line || typeof line !== 'object' || Array.isArray(line)) fail(400, 'invalid_line');
      const productId = identifier(line.productId);
      if (products.has(productId)) fail(400, 'duplicate_product');
      products.add(productId);
      const units = quantityMillis(line.quantity, kind === 'adjustment');
      const unitPrice = kind === 'adjustment' || transfer ? 0n : integer(line.unitPrice, 'unit_price', { zero: true });
      amount += (units * unitPrice + 500n) / 1000n;
      quantity += units;
      const movement = { productId, warehouseId, quantity: decimalQuantity(kind === 'sale' || transfer ? -units : units), unitPrice: String(unitPrice) };
      return transfer ? [movement, { ...movement, warehouseId: destinationId, quantity: decimalQuantity(units) }] : [movement];
    });
  } else if (kind !== 'redemption') {
    amount = integer(body.amount, 'amount');
  }
  const balance = {
    sale: amount, purchase: -amount, receipt: -amount, payment: amount,
  }[kind] ?? 0n;
  const points = kind === 'redemption' ? -integer(body.points, 'points') :
    kind === 'sale' ? quantity * BigInt(shop.points_per_sale) / 1000n : 0n;
  return {
    kind, contactId, amount: String(amount), note, movements,
    balance: String(contactId ? balance : 0n), points: String(contactId ? points : 0n), reversesId: null,
  };
}

export async function idempotent(client, shopId, key, request, run) {
  if (typeof key !== 'string' || !/^[\w.:-]{1,128}$/.test(key)) fail(400, 'idempotency_key_required');
  const hash = digest(JSON.stringify(request, (_name, value) => {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return value;
    return Object.fromEntries(Object.keys(value).sort().map(name => [name, value[name]]));
  }));
  const args = [shopId, key];
  const { rows: [receipt] } = await client.query(
    'SELECT request_hash,response FROM operation_receipts WHERE shop_id=$1 AND operation_key=$2', args,
  );
  if (receipt) {
    if (receipt.request_hash !== hash) fail(409, 'operation_key_conflict');
    return receipt.response;
  }
  const result = await run();
  await client.query(
    'INSERT INTO operation_receipts(shop_id,operation_key,request_hash,response) VALUES ($1,$2,$3,$4)',
    [...args, hash, JSON.stringify(result)],
  );
  return result;
}

export async function save(client, shopId, actorId, record) {
  const id = randomUUID();
  const { contactId, balance, points, kind, amount, note, reversesId = null, returnOfId = null, movements } = record;
  await assertWarehouses(client, shopId, [...new Set(movements.map(line => line.warehouseId))]);
  if (contactId) {
    const update = await client.query(
      'UPDATE contacts SET balance=balance+$3::numeric,points=points+$4::bigint WHERE shop_id=$1 AND id=$2 AND points+$4::bigint>=0',
      [shopId, contactId, balance, points],
    );
    if (!update.rowCount) {
      const exists = await client.query('SELECT 1 FROM contacts WHERE shop_id=$1 AND id=$2', [shopId, contactId]);
      if (!exists.rowCount) fail(404, 'contact_not_found');
      fail(409, 'insufficient_points');
    }
  }
  const { rows: [document] } = await client.query(
    `INSERT INTO documents(shop_id,id,actor_id,kind,contact_id,amount,balance_delta,point_delta,note,reverses_id,return_of_id)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
     RETURNING id,kind,contact_id AS "contactId",amount,balance_delta AS "balanceDelta",point_delta AS "pointDelta",
               note,reverses_id AS "reversesId",return_of_id AS "returnOfId",created_at AS "createdAt"`,
    [shopId, id, actorId, kind, contactId, amount, balance, points, note, reversesId, returnOfId],
  );
  for (const line of movements) {
    const product = await client.query(
      'UPDATE products SET stock=stock+$3::numeric WHERE shop_id=$1 AND id=$2 AND stock+$3::numeric>=0',
      [shopId, line.productId, line.quantity],
    );
    if (!product.rowCount) {
      const exists = await client.query('SELECT 1 FROM products WHERE shop_id=$1 AND id=$2', [shopId, line.productId]);
      if (!exists.rowCount) fail(404, 'product_not_found');
      fail(409, 'insufficient_stock');
    }
    await updateStock(client, shopId, line);
    await client.query(
      'INSERT INTO stock_movements(shop_id,document_id,product_id,quantity_delta,unit_price,warehouse_id) VALUES ($1,$2,$3,$4,$5,$6)',
      [shopId, id, line.productId, line.quantity, line.unitPrice, line.warehouseId],
    );
  }
  await client.query('UPDATE shops SET revision=revision+1 WHERE id=$1', [shopId]);
  return { ...document, createdAt: document.createdAt.toISOString(), movements };
}

export function postDocument(client, shop, user, body, key) {
  return idempotent(client, shop.id, key, ['document', user.id, body], () =>
    save(client, shop.id, user.id, parseDocument(body, shop)));
}

export function reverseDocument(client, shop, user, id, body, key) {
  return idempotent(client, shop.id, key, ['reverse', user.id, id, body], async () => {
    const { rows: [original] } = await client.query(
      `SELECT kind, contact_id, amount, -balance_delta AS balance, -point_delta AS points,
              EXISTS (SELECT 1 FROM documents r WHERE r.shop_id=d.shop_id AND (r.reverses_id=d.id OR r.return_of_id=d.id))
              OR EXISTS (SELECT 1 FROM cheques c WHERE c.shop_id=d.shop_id AND c.document_id=d.id)
              OR EXISTS (SELECT 1 FROM payroll_payments p WHERE p.shop_id=d.shop_id AND p.document_id=d.id) AS linked
       FROM documents d WHERE shop_id=$1 AND id=$2`, [shop.id, id],
    );
    if (!original) fail(404, 'document_not_found');
    if (['reversal', 'sale-return', 'purchase-return'].includes(original.kind) || original.linked) fail(409, 'cannot_reverse');
    const { rows: movements } = await client.query(
      'SELECT product_id AS "productId", warehouse_id AS "warehouseId", -quantity_delta AS quantity, unit_price AS "unitPrice" FROM stock_movements WHERE shop_id=$1 AND document_id=$2 ORDER BY product_id, -quantity_delta',
      [shop.id, id],
    );
    return save(client, shop.id, user.id, {
      kind: 'reversal', contactId: original.contact_id, amount: original.amount,
      balance: original.balance, points: original.points, movements, reversesId: id,
      note: fieldText(body.note, 'note', 1000, true),
    });
  });
}

export function returnDocument(client, shop, user, id, body, key) {
  return idempotent(client, shop.id, key, ['return', user.id, id, body], async () => {
    const { rows: [original] } = await client.query(
      `SELECT kind,contact_id,point_delta,
              EXISTS (SELECT 1 FROM documents r WHERE r.shop_id=d.shop_id AND r.reverses_id=d.id) AS reversed
       FROM documents d WHERE shop_id=$1 AND id=$2`, [shop.id, id],
    );
    if (!original) fail(404, 'document_not_found');
    if (!['purchase', 'sale'].includes(original.kind) || original.reversed) fail(409, 'cannot_return');
    if (!Array.isArray(body.lines) || !body.lines.length || body.lines.length > 100) fail(400, 'invalid_lines');
    const { rows } = await client.query(
      `SELECT m.product_id,m.warehouse_id,abs(m.quantity_delta) AS quantity,m.unit_price,
        COALESCE((SELECT SUM(abs(r.quantity_delta)) FROM stock_movements r JOIN documents d
          ON r.shop_id=d.shop_id AND r.document_id=d.id
          WHERE d.shop_id=m.shop_id AND d.return_of_id=$2 AND r.product_id=m.product_id),0) AS returned
       FROM stock_movements m WHERE m.shop_id=$1 AND m.document_id=$2`, [shop.id, id],
    );
    const lines = new Map(rows.map(row => [row.product_id, row]));
    const total = rows.reduce((sum, row) => sum + quantityMillis(row.quantity), 0n);
    const previous = rows.reduce((sum, row) => sum + (Number(row.returned) ? quantityMillis(row.returned) : 0n), 0n);
    const sale = original.kind === 'sale';
    const seen = new Set();
    let returned = 0n;
    let amount = 0n;
    const movements = body.lines.map(line => {
      const productId = identifier(line?.productId);
      if (seen.has(productId)) fail(400, 'duplicate_product');
      seen.add(productId);
      const source = lines.get(productId);
      if (!source) fail(400, 'product_not_on_document');
      const quantity = quantityMillis(line.quantity);
      const already = Number(source.returned) ? quantityMillis(source.returned) : 0n;
      if (already + quantity > quantityMillis(source.quantity)) fail(409, 'return_exceeds_quantity');
      const price = BigInt(source.unit_price);
      const value = units => (units * price + 500n) / 1000n;
      amount += value(already + quantity) - value(already);
      returned += quantity;
      return { productId, warehouseId: source.warehouse_id, quantity: decimalQuantity(sale ? quantity : -quantity), unitPrice: source.unit_price };
    });
    const earned = BigInt(original.point_delta);
    const points = previous * earned / total - (previous + returned) * earned / total;
    return save(client, shop.id, user.id, {
      kind: original.kind + '-return', contactId: original.contact_id, amount: String(amount),
      balance: String(original.contact_id ? (sale ? -amount : amount) : 0n),
      points: String(points), movements, returnOfId: id, note: fieldText(body.note, 'note', 1000, true),
    });
  });
}

export async function summary(client, shopId, from = null, to = null) {
  let source = 'shop_report_totals WHERE shop_id=$1';
  const params = [shopId];
  if (from !== null || to !== null) {
    const day = value => {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(value ?? '') || value < '1900-01-01' || value > '9998-12-31') fail(400, 'invalid_report_range');
      const date = new Date(value + 'T00:00:00Z');
      if (!Number.isFinite(date.valueOf()) || date.toISOString().slice(0, 10) !== value) fail(400, 'invalid_report_range');
      return date.valueOf();
    };
    const span = day(to) - day(from);
    if (span < 0 || span >= 366 * 86400000) fail(400, 'invalid_report_range');
    params.push(from, to);
    source = `(
      SELECT COALESCE(original.kind, d.kind) AS kind,
             CASE WHEN d.reverses_id IS NULL THEN d.amount ELSE -d.amount END AS amount
      FROM documents d
      LEFT JOIN documents original ON original.shop_id=d.shop_id AND original.id=d.reverses_id
      WHERE d.shop_id=$1 AND d.created_at >= ($2::date::timestamp AT TIME ZONE 'Asia/Tehran')
        AND d.created_at < (($3::date+1)::timestamp AT TIME ZONE 'Asia/Tehran')
    ) AS dated_documents`;
  }
  const { rows: [result] } = await client.query(
    `SELECT
      COALESCE(SUM(amount) FILTER (WHERE kind='sale'),0) - COALESCE(SUM(amount) FILTER (WHERE kind='sale-return'),0) AS sales,
      COALESCE(SUM(amount) FILTER (WHERE kind='purchase'),0) - COALESCE(SUM(amount) FILTER (WHERE kind='purchase-return'),0) AS purchases,
      COALESCE(SUM(amount) FILTER (WHERE kind='receipt'),0) AS receipts,
      COALESCE(SUM(amount) FILTER (WHERE kind='payment'),0) AS payments,
      COALESCE(SUM(amount) FILTER (WHERE kind='expense'),0) AS expenses
    FROM ${source}`, params,
  );
  return result;
}
