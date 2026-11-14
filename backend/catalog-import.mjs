import { idempotent } from './documents.mjs';
import { fail } from './input.mjs';
import { editCatalog } from './shops.mjs';

export async function importProducts(client, shop, user, body, key) {
  const { rows } = body;
  if (!Array.isArray(rows) || rows.length < 1 || rows.length > 100) fail(400, 'invalid_catalog_import');
  return idempotent(client, shop.id, key, ['catalog-import', user.id, rows], async () => {
    for (const row of rows) {
      if (!row || typeof row !== 'object' || Array.isArray(row)) fail(400, 'invalid_catalog_import');
      await editCatalog(client, shop, 'products', { name: row.name, sku: row.sku });
    }
    return { imported: rows.length };
  });
}
