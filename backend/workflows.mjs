import { randomUUID } from 'node:crypto';
import { idempotent, save } from './documents.mjs';
import { decimalQuantity, fail, fieldText, identifier, integer, quantityMillis } from './input.mjs';
import { bump } from './shops.mjs';

export const chequeColumns = `id,contact_id AS "contactId",number,amount,direction,due_on::text AS "dueOn",
  status,document_id AS "documentId",created_at AS "createdAt"`;
export const taskColumns = 'id,title,due_at AS "dueAt",quantity,done,created_at AS "createdAt"';

function date(value, field, format) {
  if (typeof value !== 'string' || !format.test(value)) fail(400, 'invalid_' + field);
  const stamp = new Date(value);
  if (!Number.isFinite(stamp.getTime()) || stamp.toISOString().slice(0, 10) !== value.slice(0, 10)) {
    fail(400, 'invalid_' + field);
  }
  return stamp;
}

export function createCheque(client, shop, user, body, key) {
  return idempotent(client, shop.id, key, ['cheque', user.id, body], async () => {
    const contactId = identifier(body.contactId);
    const number = fieldText(body.number, 'number', 64);
    const amount = String(integer(body.amount, 'amount'));
    const direction = body.direction;
    if (!['incoming', 'outgoing'].includes(direction)) fail(400, 'invalid_direction');
    date(body.dueOn, 'due_on', /^\d{4}-\d{2}-\d{2}$/);
    const contact = await client.query('SELECT 1 FROM contacts WHERE shop_id=$1 AND id=$2', [shop.id, contactId]);
    if (!contact.rowCount) fail(404, 'contact_not_found');
    const { rows: [cheque] } = await client.query(
      `INSERT INTO cheques(shop_id,id,contact_id,number,amount,direction,due_on)
       VALUES($1,$2,$3,$4,$5,$6,$7) RETURNING ${chequeColumns}`,
      [shop.id, randomUUID(), contactId, number, amount, direction, body.dueOn],
    );
    await bump(client, shop.id);
    return { ...cheque, createdAt: cheque.createdAt.toISOString() };
  });
}

export function transitionCheque(client, shop, user, id, action, body, key) {
  return idempotent(client, shop.id, key, ['cheque-transition', user.id, id, action, body], async () => {
    const { rows: [cheque] } = await client.query(
      'SELECT contact_id,number,amount,direction,status FROM cheques WHERE shop_id=$1 AND id=$2',
      [shop.id, id],
    );
    if (!cheque) fail(404, 'cheque_not_found');
    if (cheque.status !== 'pending') fail(409, 'cheque_already_processed');
    const status = { settle: 'cleared', bounce: 'bounced', cancel: 'cancelled' }[action];
    let documentId = null;
    if (action === 'settle') {
      const incoming = cheque.direction === 'incoming';
      const document = await save(client, shop.id, user.id, {
        kind: incoming ? 'receipt' : 'payment',
        contactId: cheque.contact_id,
        amount: cheque.amount,
        balance: incoming ? '-' + cheque.amount : cheque.amount,
        points: '0',
        note: fieldText(body.note, 'note', 1000, true) ?? cheque.number,
        movements: [],
      });
      documentId = document.id;
    } else {
      await bump(client, shop.id);
    }
    const { rows: [result] } = await client.query(
      `UPDATE cheques SET status=$3,document_id=$4 WHERE shop_id=$1 AND id=$2 RETURNING ${chequeColumns}`,
      [shop.id, id, status, documentId],
    );
    return { ...result, createdAt: result.createdAt.toISOString() };
  });
}

export async function createTask(client, shop, kind, body) {
  const title = fieldText(body.title, 'title', 200);
  const dueAt = kind === 'reminders' ? date(body.dueAt, 'due_at', /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d{1,3})?Z$/) : null;
  const quantity = kind === 'shopping-list' ? decimalQuantity(quantityMillis(body.quantity)) : null;
  const { rows: [task] } = await client.query(
    `INSERT INTO tasks(shop_id,id,kind,title,due_at,quantity) VALUES ($1,$2,$3,$4,$5,$6) RETURNING ${taskColumns}`,
    [shop.id, randomUUID(), kind, title, dueAt, quantity],
  );
  await bump(client, shop.id);
  return task;
}

export async function updateTask(client, shop, kind, id, body) {
  if (typeof body.done !== 'boolean') fail(400, 'invalid_done');
  const { rows: [task] } = await client.query(
    `UPDATE tasks SET done=$4 WHERE shop_id=$1 AND kind=$2 AND id=$3 RETURNING ${taskColumns}`,
    [shop.id, kind, id, body.done],
  );
  if (!task) fail(404, 'task_not_found');
  await bump(client, shop.id);
  return task;
}
