import { createHmac, randomInt, randomUUID, timingSafeEqual } from 'node:crypto';
import { createSession, digest, passwordUser } from './auth.mjs';
import { transaction } from './database.mjs';
import { fail, identifier } from './input.mjs';
import { takeLimit } from './service-limits.mjs';

function normalizedPhone(raw) {
  if (typeof raw !== 'string' || raw.length > 24) fail(400, 'invalid_phone');
  const phone = raw.trim().replace(/[۰-۹٠-٩]/g, c => String(c.charCodeAt(0) & 15)).replace(/^(\+98|0098|98)/, '0');
  if (!/^09\d{9}$/.test(phone)) fail(400, 'invalid_phone');
  return phone;
}

export function createSms(db, provider, { secret, dailyLimit }) {
  const proof = (id, code) => createHmac('sha256', secret).update(id + ':' + code).digest();
  return {
    async issue(purpose, user, body, ip) {
      const phone = normalizedPhone(body.phone);
      await takeLimit(db, 'sms-ip', digest(ip ?? ''), 3600, 12);
      await takeLimit(db, 'sms-phone', digest(phone), 900, 2);
      if (purpose === 'link') {
        await takeLimit(db, 'sms-account', user.id, 3600, 4);
        await passwordUser(db, user.email, body.password);
      }
      const { rows: [existing] } = await db.query(`SELECT u.id, a.user_id IS NOT NULL AS admin
        FROM users u LEFT JOIN platform_admins a ON a.user_id=u.id WHERE u.phone=$1`, [phone]);
      const challengeId = randomUUID();
      if (purpose === 'login' && (!existing || existing.admin)) return { challengeId, expiresIn: 300 };
      if (purpose === 'link' && existing && existing.id !== user.id) fail(409, 'phone_in_use');
      await takeLimit(db, 'sms-global', 'all', 86400, dailyLimit);
      const code = String(randomInt(100000, 1000000));
      await db.query(
        `INSERT INTO sms_challenges(id,user_id,phone,purpose,proof,expires_at)
         VALUES($1,$2,$3,$4,$5,now()+interval '5 minutes')`,
        [challengeId, purpose === 'link' ? user.id : existing.id, phone, purpose, proof(challengeId, code)],
      );
      if (!await provider.sendCode(phone, code)) {
        await db.query('DELETE FROM sms_challenges WHERE id=$1', [challengeId]);
        if (purpose === 'link') fail(502, 'sms_send_unavailable');
      }
      return { challengeId, expiresIn: 300 };
    },
    async confirm(purpose, user, body, ip) {
      const id = identifier(body.challengeId);
      if (typeof body.code !== 'string' || !/^\d{6}$/.test(body.code)) fail(400, 'invalid_sms_code');
      await takeLimit(db, 'sms-confirm-ip', digest(ip ?? ''), 900, 40);
      const result = await transaction(db, async client => {
        if (purpose === 'link') await client.query('SELECT id FROM users WHERE id=$1 FOR UPDATE', [user.id]);
        const { rows: [challenge] } = await client.query(
          `UPDATE sms_challenges SET attempts=attempts+1
           WHERE id=$1 AND purpose=$2 AND NOT consumed AND attempts<5 AND expires_at>now()
             AND ($2='login' OR user_id=$3) RETURNING user_id,phone,proof`, [id, purpose, user?.id ?? null],
        );
        if (!challenge || !timingSafeEqual(challenge.proof, proof(id, body.code))) return null;
        await client.query('UPDATE sms_challenges SET consumed=true WHERE id=$1', [id]);
        if (purpose === 'link') {
          await client.query('UPDATE users SET phone=$2 WHERE id=$1', [user.id, challenge.phone]);
          await client.query("UPDATE sms_challenges SET consumed=true WHERE user_id=$1 AND purpose='link' AND NOT consumed", [user.id]);
          return { phone: challenge.phone };
        }
        const { rows: [account] } = await client.query(`SELECT id,email,name FROM users WHERE id=$1 AND phone=$2
          AND NOT EXISTS (SELECT 1 FROM platform_admins WHERE user_id=users.id) FOR UPDATE`,
          [challenge.user_id, challenge.phone]);
        return account ? createSession(client, account) : null;
      });
      if (!result) fail(401, 'sms_code_invalid_or_expired');
      return result;
    },
  };
}
