import { randomUUID } from 'node:crypto';
import { idempotent } from './documents.mjs';
import { fail, fieldText } from './input.mjs';
import { bump } from './shops.mjs';

export const attachmentColumns = 'id,name,media_type AS "mediaType",octet_length(content) AS "size",created_at AS "createdAt"';
const signatures = new Map([
  ['image/png', Buffer.from('89504e470d0a1a0a', 'hex')],
  ['image/jpeg', Buffer.from('ffd8ff', 'hex')],
  ['application/pdf', Buffer.from('%PDF-')],
]);

export function uploadAttachment(client, shop, user, documentId, body, key) {
  return idempotent(client, shop.id, key, ['attachment', user.id, documentId, body], async () => {
    const name = fieldText(body.name, 'name', 180);
    if (/[\\/\u0001-\u001f]/.test(name)) fail(400, 'invalid_filename');
    const signature = signatures.get(body.mediaType);
    if (!signature) fail(415, 'unsupported_attachment_type');
    if (typeof body.content !== 'string' || body.content.length > 2796204 || !/^[A-Za-z0-9+/]+={0,2}$/.test(body.content)) {
      fail(400, 'invalid_attachment');
    }
    const content = Buffer.from(body.content, 'base64');
    if (content.length > 2097152 || content.toString('base64') !== body.content ||
        !content.subarray(0, signature.length).equals(signature)) fail(400, 'invalid_attachment');
    const doc = await client.query('SELECT 1 FROM documents WHERE shop_id=$1 AND id=$2', [shop.id, documentId]);
    if (!doc.rowCount) fail(404, 'document_not_found');
    const { rows: [count] } = await client.query(
      'SELECT count(*)::int AS total FROM attachments WHERE shop_id=$1 AND document_id=$2', [shop.id, documentId],
    );
    if (count.total >= 10) fail(409, 'attachment_limit_reached');
    const { rows: [usage] } = await client.query(
      'SELECT coalesce(sum(octet_length(content)),0) AS bytes FROM attachments WHERE shop_id=$1', [shop.id],
    );
    if (Number(usage.bytes) + content.length > 100 * 1024 * 1024) fail(409, 'shop_attachment_quota');
    const { rows: [attachment] } = await client.query(
      `INSERT INTO attachments(shop_id,document_id,id,name,media_type,content)
       VALUES($1,$2,$3,$4,$5,$6) RETURNING ${attachmentColumns}`,
      [shop.id, documentId, randomUUID(), name, body.mediaType, content],
    );
    await bump(client, shop.id);
    return { ...attachment, createdAt: attachment.createdAt.toISOString() };
  });
}

export async function readAttachment(client, shop, documentId, id) {
  const { rows: [result] } = await client.query(
    `SELECT ${attachmentColumns},content FROM attachments WHERE shop_id=$1 AND document_id=$2 AND id=$3`,
    [shop.id, documentId, id],
  );
  if (!result) fail(404, 'attachment_not_found');
  return { ...result, content: result.content.toString('base64') };
}

export async function deleteAttachment(client, shop, documentId, id) {
  const deleted = await client.query(
    'DELETE FROM attachments WHERE shop_id=$1 AND document_id=$2 AND id=$3', [shop.id, documentId, id],
  );
  if (!deleted.rowCount) fail(404, 'attachment_not_found');
  await bump(client, shop.id);
  return { ok: true };
}
