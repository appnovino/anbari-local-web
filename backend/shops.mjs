import { randomUUID } from 'node:crypto';
import { transaction } from './database.mjs';
import { emailAddress, fail, fieldText, integer } from './input.mjs';

export async function createShop(db, user, body) {
  const id = randomUUID();
  const name = fieldText(body.name, 'name', 120);
  return transaction(db, async client => {
    await client.query('INSERT INTO shops(id,name) VALUES ($1,$2)', [id, name]);
    await client.query('INSERT INTO warehouses(shop_id,id,name) VALUES ($1,$1,$2)', [id, 'انبار اصلی']);
    await client.query("INSERT INTO memberships(shop_id,user_id,role) VALUES ($1,$2,'owner')", [id, user.id]);
    return { id, name, role: 'owner', revision: '0' };
  });
}

export async function listShops(db, user) {
  const { rows: items } = await db.query(
    'SELECT s.id,s.name,s.revision,m.role FROM memberships m JOIN shops s ON s.id=m.shop_id WHERE m.user_id=$1 ORDER BY s.created_at,s.id',
    [user.id],
  );
  return { items };
}

export async function withShop(db, shopId, user, access, run) {
  return transaction(db, async client => {
    // Membership changes take this same lock before updating permissions.
    if (access !== 'read') await client.query('SELECT id FROM shops WHERE id=$1 FOR UPDATE', [shopId]);
    const { rows: [shop] } = await client.query(
      'SELECT s.*,m.role FROM shops s JOIN memberships m ON m.shop_id=s.id WHERE s.id=$1 AND m.user_id=$2',
      [shopId, user.id],
    );
    if (!shop) fail(404, 'shop_not_found');
    if (access === 'owner' && shop.role !== 'owner') fail(403, 'owner_required');
    if (access === 'write' && shop.role === 'viewer') fail(403, 'write_access_required');
    return run(client, shop);
  });
}

export async function addMember(client, shop, body) {
  const email = emailAddress(body.email);
  const role = body.role;
  if (!['staff', 'viewer'].includes(role)) fail(400, 'invalid_role');
  const { rows: [user] } = await client.query('SELECT id,name,email FROM users WHERE email=$1', [email]);
  if (!user) fail(404, 'account_not_found');
  const { rowCount } = await client.query(
    `INSERT INTO memberships(shop_id,user_id,role) VALUES ($1,$2,$3)
     ON CONFLICT(shop_id,user_id) DO UPDATE SET role=excluded.role WHERE memberships.role<>'owner'`,
    [shop.id, user.id, role],
  );
  if (!rowCount) fail(409, 'owner_role_cannot_change');
  await bump(client, shop.id);
  return { ...user, role };
}

export async function removeMember(client, shop, id) {
  const { rowCount } = await client.query(
    "DELETE FROM memberships WHERE shop_id=$1 AND user_id=$2 AND role<>'owner'", [shop.id, id],
  );
  if (!rowCount) fail(404, 'member_not_found');
  await bump(client, shop.id);
  return { ok: true };
}

export async function bump(client, shopId) {
  await client.query('UPDATE shops SET revision=revision+1 WHERE id=$1', [shopId]);
}

export async function updateShop(client, shop, body) {
  const name = body.name === undefined ? shop.name : fieldText(body.name, 'name', 120);
  const points = body.pointsPerSale === undefined ? shop.points_per_sale :
    String(integer(body.pointsPerSale, 'points_per_sale', { zero: true, max: 1000000 }));
  const { rows: [result] } = await client.query(
    'UPDATE shops SET name=$2,points_per_sale=$3,revision=revision+1 WHERE id=$1 RETURNING id,name,revision,points_per_sale AS "pointsPerSale"',
    [shop.id, name, points],
  );
  return result;
}

export async function editCatalog(client, shop, table, body, id) {
  const product = table === 'products';
  const name = fieldText(body.name, 'name', 160);
  const field = product ? 'sku' : 'phone';
  const secondary = fieldText(body[field], field, 80, true);
  const columns = product ? 'id,name,sku,stock,version' : 'id,name,phone,balance,points,version';
  let result;
  if (id) {
    const version = fieldText(body.version, 'version', 19);
    if (!/^\d{1,19}$/.test(version) || BigInt(version) > 9223372036854775807n) fail(400, 'invalid_version');
    result = await client.query(
      `UPDATE ${table} SET name=$3,${field}=$4,version=version+1
       WHERE shop_id=$1 AND id=$2 AND version=$5 RETURNING ${columns}`,
      [shop.id, id, name, secondary, version],
    );
    if (!result.rowCount) {
      const current = await client.query(`SELECT 1 FROM ${table} WHERE shop_id=$1 AND id=$2`, [shop.id, id]);
      if (!current.rowCount) fail(404, 'record_not_found');
      fail(409, 'version_conflict');
    }
  } else {
    result = await client.query(
      `INSERT INTO ${table}(shop_id,id,name,${field}) VALUES ($1,$2,$3,$4) RETURNING ${columns}`,
      [shop.id, randomUUID(), name, secondary],
    );
  }
  await bump(client, shop.id);
  return result.rows[0];
}
