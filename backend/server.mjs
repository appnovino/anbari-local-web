import { once } from 'node:events';
import { createApi } from './api.mjs';
import { connectDatabase, migrate } from './database.mjs';
import { envInt, integrations } from './config.mjs';
import { cleanExpired } from './service-limits.mjs';

async function main(env) {
  if (!env.DATABASE_URL) throw new Error('DATABASE_URL is required');
  const port = Number(env.NOVINO_PORT ?? 8080);
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Invalid NOVINO_PORT');
  const host = env.NOVINO_HOST ?? '127.0.0.1';
  const db = connectDatabase(env.DATABASE_URL, envInt(env, 'NOVINO_DB_POOL_MAX', 8, 2, 32));
  try {
    await migrate(db);
    const services = integrations(db, env);
    const server = createApi(db, {
      ...services,
      maxRequests: envInt(env, 'NOVINO_MAX_REQUESTS', 48, 8, 256),
      readLimit: envInt(env, 'NOVINO_API_READ_LIMIT', 180, 12, 3000),
      writeLimit: envInt(env, 'NOVINO_API_WRITE_LIMIT', 60, 6, 1000),
      allowRegistration: env.NOVINO_ALLOW_REGISTRATION === 'true',
      trustLoopbackProxy: env.NOVINO_TRUST_LOOPBACK_PROXY === 'true',
    });
    server.listen(port, host);
    await once(server, 'listening');
    console.log('Novino API listening on %s:%d', host, port);
    let recovery = Promise.resolve(), cleaning = Promise.resolve();
    let recovering = false, cleaningNow = false;
    const recoverTimer = services.billing && setInterval(() => {
      if (recovering) return;
      recovering = true;
      recovery = services.billing.recover().catch(() => console.error('Novino payment recovery failed'))
        .finally(() => { recovering = false; });
    }, 15000);
    const cleanupTimer = setInterval(() => {
      if (cleaningNow) return;
      cleaningNow = true;
      cleaning = cleanExpired(db).catch(() => console.error('Novino database cleanup failed'))
        .finally(() => { cleaningNow = false; });
    }, 60000);
    function stop() {
      clearInterval(recoverTimer);
      clearInterval(cleanupTimer);
      const timeout = setTimeout(() => process.exit(1), 20000).unref();
      server.close(async error => {
        try {
          await Promise.all([recovery, cleaning]);
          await db.end();
          process.exitCode = error ? 1 : 0;
        } catch {
          process.exitCode = 1;
        }
        finally {
          clearTimeout(timeout);
        }
      });
    }
    process.once('SIGINT', stop);
    process.once('SIGTERM', stop);
  } catch (error) {
    await db.end();
    throw error;
  }
}

main(process.env).catch(error => {
  const detail = error.code || (/^(Invalid|Missing) [A-Z0-9_]+$/.test(error.message) || error.message === 'DATABASE_URL is required'
    ? error.message : 'unexpected_error');
  console.error('Unable to start Novino API:', detail);
  process.exitCode = 1;
});
