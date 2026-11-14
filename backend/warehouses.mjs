import { randomUUID } from 'node:crypto';
import { fail, fieldText } from './input.mjs';
import { bump } from './shops.mjs';

export async function createWarehouse(client, shop, body) {
  const { rows: [result] } = await client.query(
    'INSERT INTO warehouses(shop_id,id,name) VALUES ($1,$2,$3) RETURNING id,name',
    [shop.id, randomUUID(), fieldText(body.name, 'name', 120)],
  );
  await bump(client, shop.id);
  return { ...result, primary: false };
}

export async function assertWarehouses(client, shopId, ids) {
  if (!ids.length) return;
  const { rowCount } = await client.query(
    'SELECT id FROM warehouses WHERE shop_id=$1 AND id=ANY($2::uuid[])', [shopId, ids],
  );
  if (rowCount !== ids.length) fail(404, 'warehouse_not_found');
}

export async function updateStock(client, shopId, line) {
  const args = [shopId, line.warehouseId, line.productId, line.quantity];
  if (line.quantity.startsWith('-')) {
    const { rowCount } = await client.query(
      `UPDATE warehouse_stock SET stock=stock+$4::numeric
       WHERE shop_id=$1 AND warehouse_id=$2 AND product_id=$3 AND stock+$4::numeric>=0`, args,
    );
    if (!rowCount) fail(409, 'insufficient_stock');
  } else {
    await client.query(
      `INSERT INTO warehouse_stock(shop_id,warehouse_id,product_id,stock) VALUES ($1,$2,$3,$4)
       ON CONFLICT (shop_id,warehouse_id,product_id) DO UPDATE SET stock=warehouse_stock.stock+excluded.stock`, args,
    );
  }
}
