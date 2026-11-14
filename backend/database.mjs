import { readFile } from 'node:fs/promises';
import { Pool } from 'pg';

export function connectDatabase(connectionString, max = 8) {
  const pool = new Pool({
    connectionString,
    max,
    connectionTimeoutMillis: 5000,
    statement_timeout: 15000,
    idle_in_transaction_session_timeout: 20000,
  });
  pool.on('error', error => console.error('Novino idle database connection failed', { code: error.code ?? 'unexpected' }));
  return pool;
}

export async function transaction(db, run) {
  const client = await db.connect();
  let discard;
  try {
    await client.query('BEGIN');
    const result = await run(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    try { await client.query('ROLLBACK'); }
    catch (rollbackError) { discard = rollbackError; }
    throw error;
  } finally {
    client.release(discard);
  }
}

export async function migrate(db) {
  const migrations = [
    '001_core.sql', '002_workflows.sql', '003_attachments.sql', '004_warehouses.sql', '005_payroll.sql',
    '006_integrations.sql', '007_report_totals.sql', '008_platform_admins.sql', '009_shop_bank_account.sql',
  ];
  await transaction(db, async client => {
    await client.query('SELECT pg_advisory_xact_lock(160791237)');
    await client.query("SET LOCAL statement_timeout='120s'");
    await client.query('CREATE TABLE IF NOT EXISTS novino_migrations (version integer PRIMARY KEY)');
    const { rows } = await client.query('SELECT version FROM novino_migrations');
    const applied = new Set(rows.map(row => row.version));
    for (const [index, name] of migrations.entries()) {
      const version = index + 1;
      if (applied.has(version)) continue;
      await client.query(await readFile(new URL('./migrations/' + name, import.meta.url), 'utf8'));
      await client.query('INSERT INTO novino_migrations (version) VALUES ($1)', [version]);
    }
  });
}
