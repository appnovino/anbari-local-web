import { createBilling } from './billing.mjs';
import { createKavenegar, createOpenAI, createZibal } from './providers.mjs';
import { createSms } from './sms.mjs';

export function envInt(env, name, fallback, min, max) {
  const value = env[name] ? Number(env[name]) : fallback;
  if (!Number.isSafeInteger(value) || value < min || value > max) throw new Error('Invalid ' + name);
  return value;
}

function required(env, name) {
  if (!env[name]?.trim()) throw new Error('Missing ' + name);
  return env[name].trim();
}

export function integrations(db, env) {
  let sms, billing, intelligence;
  if (env.NOVINO_SMS_ENABLED === 'true') {
    const secret = required(env, 'NOVINO_SMS_SECRET');
    if (Buffer.byteLength(secret) < 32) throw new Error('Invalid NOVINO_SMS_SECRET');
    sms = createSms(db, createKavenegar(required(env, 'KAVENEGAR_API_KEY'), required(env, 'KAVENEGAR_OTP_TEMPLATE')), {
      secret, dailyLimit: envInt(env, 'NOVINO_SMS_DAILY_LIMIT', 100, 1, 10000),
    });
  }
  if (env.NOVINO_ZIBAL_ENABLED === 'true') {
    const origin = required(env, 'NOVINO_PUBLIC_ORIGIN');
    let url;
    try { url = new URL(origin); } catch { throw new Error('Invalid NOVINO_PUBLIC_ORIGIN'); }
    if (url.protocol !== 'https:' || url.origin !== origin.replace(/\/$/, '')) throw new Error('Invalid NOVINO_PUBLIC_ORIGIN');
    billing = createBilling(db, createZibal(required(env, 'ZIBAL_MERCHANT')), {
      origin: url.origin, amountRial: envInt(env, 'NOVINO_PLAN_AMOUNT_RIAL', null, 1001, 1e12),
      durationDays: envInt(env, 'NOVINO_PLAN_DURATION_DAYS', 30, 1, 365),
    });
  }
  if (env.NOVINO_AI_ENABLED === 'true') {
    intelligence = Object.assign(createOpenAI(required(env, 'OPENAI_API_KEY'), required(env, 'OPENAI_MODEL')), {
      dailyLimit: envInt(env, 'NOVINO_AI_SHOP_DAILY_LIMIT', 10, 1, 1000),
      globalDailyLimit: envInt(env, 'NOVINO_AI_GLOBAL_DAILY_LIMIT', 100, 1, 10000),
    });
  }
  return { sms, billing, intelligence };
}
