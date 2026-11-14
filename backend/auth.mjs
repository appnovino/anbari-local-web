import { createHash, randomBytes, randomUUID, scrypt, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import { transaction } from './database.mjs';
import { emailAddress, fail, fieldText } from './input.mjs';

const derive = promisify(scrypt);
const dummyHash = Buffer.alloc(64);
const dummySalt = Buffer.alloc(16);
const passwordCost = { N: 32768, r: 8, p: 3, maxmem: 64 * 1024 * 1024 };
const lifetime = "interval '30 days'";

export const digest = value => createHash('sha256').update(value).digest('hex');

function passwordValue(value) {
  if (typeof value !== 'string' || value.length < 12 || value.length > 256) fail(400, 'invalid_password');
  return value;
}

export async function hashPassword(value) {
  const salt = randomBytes(16);
  const hash = await derive(passwordValue(value), salt, 64, passwordCost);
  return 's2:' + salt.toString('hex') + ':' + hash.toString('hex');
}

export async function createSession(db, user) {
  const token = randomBytes(32).toString('base64url');
  const { rows: [session] } = await db.query(
    'INSERT INTO sessions(token_hash,user_id,expires_at) VALUES ($1,$2,now()+' + lifetime + ') RETURNING expires_at AS "expiresAt"',
    [digest(token), user.id],
  );
  return { user, token, expiresAt: session.expiresAt };
}

export async function register(db, body) {
  const email = emailAddress(body.email);
  const name = fieldText(body.name, 'name', 100);
  const hash = await hashPassword(body.password);
  return transaction(db, async client => {
    const { rows: [user] } = await client.query(
      'INSERT INTO users(id,email,name,password_hash) VALUES ($1,$2,$3,$4) ON CONFLICT(email) DO NOTHING RETURNING id,email,name',
      [randomUUID(), email, name, hash],
    );
    if (!user) fail(409, 'email_in_use');
    return createSession(client, user);
  });
}

export async function passwordUser(db, email, rawPassword, lock = false) {
  const password = passwordValue(rawPassword);
  const { rows: [row] } = await db.query(
    'SELECT id,email,name,password_hash FROM users WHERE email=$1' + (lock ? ' FOR UPDATE' : ''), [email]);
  const parts = row?.password_hash.split(':');
  const upgraded = !row || parts[0] === 's2';
  const [salt, hash] = parts ? parts.slice(-2).map(value => Buffer.from(value, 'hex')) : [dummySalt, dummyHash];
  const candidate = await derive(password, salt, 64, upgraded ? passwordCost : {});
  if (!timingSafeEqual(candidate, hash) || !row) fail(401, 'invalid_credentials');
  if (!upgraded) {
    const newSalt = randomBytes(16);
    const newHash = await derive(password, newSalt, 64, passwordCost);
    await db.query('UPDATE users SET password_hash=$2 WHERE id=$1 AND password_hash=$3',
      [row.id, 's2:' + newSalt.toString('hex') + ':' + newHash.toString('hex'), row.password_hash]);
  }
  return { id: row.id, email: row.email, name: row.name };
}

export async function login(db, body) {
  const email = emailAddress(body.email);
  return transaction(db, async client =>
    createSession(client, await passwordUser(client, email, body.password, true)));
}

export async function changePassword(db, user, sessionHash, body) {
  const verified = await passwordUser(db, user.email, body.password);
  if (verified.id !== user.id) fail(401, 'invalid_credentials');
  if (body.password === body.newPassword) fail(400, 'password_unchanged');
  const hash = await hashPassword(body.newPassword);
  return transaction(db, async client => {
    await client.query('SELECT id FROM users WHERE id=$1 FOR UPDATE', [user.id]);
    const active = await client.query(
      'SELECT 1 FROM sessions WHERE token_hash=$1 AND user_id=$2 AND expires_at>now()', [sessionHash, user.id]);
    if (!active.rowCount) fail(401, 'authentication_required');
    await client.query('UPDATE users SET password_hash=$2 WHERE id=$1', [user.id, hash]);
    await client.query('DELETE FROM sessions WHERE user_id=$1', [user.id]);
    return createSession(client, user);
  });
}

export async function authenticate(db, authorization) {
  if (typeof authorization !== 'string' || !/^Bearer [A-Za-z0-9_-]{43}$/.test(authorization)) {
    fail(401, 'authentication_required');
  }
  const sessionHash = digest(authorization.slice(7));
  const { rows: [user] } = await db.query(
    'SELECT u.id,u.email,u.name FROM sessions s JOIN users u ON u.id=s.user_id WHERE s.token_hash=$1 AND s.expires_at>now()',
    [sessionHash],
  );
  if (!user) fail(401, 'authentication_required');
  return { user, sessionHash };
}
