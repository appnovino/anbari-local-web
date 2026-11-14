import { fail } from './input.mjs';

export async function takeLimit(db, scope, subject, seconds, maximum) {
  const { rowCount } = await db.query(
    `INSERT INTO service_limits(scope,subject,bucket,expires_at)
     SELECT $1,$2,b,to_timestamp((b+1)*$3::bigint)
     FROM (SELECT floor(extract(epoch FROM now())/$3::bigint)::bigint) AS slot(b)
     ON CONFLICT (scope,subject,bucket) DO UPDATE SET uses=service_limits.uses+1
     WHERE service_limits.uses < $4`, [scope, subject, seconds, maximum],
  );
  if (!rowCount) fail(429, 'service_limit_reached');
}

export async function cleanExpired(db) {
  for (const [table, key] of [['sessions', 'token_hash'], ['sms_challenges', 'id'], ['service_limits', 'ctid']]) {
    await db.query(`DELETE FROM ${table} WHERE ${key} IN
      (SELECT ${key} FROM ${table} WHERE expires_at<now() ORDER BY expires_at LIMIT 500)`);
  }
}
