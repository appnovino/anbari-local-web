const name = 'novino-offline-v1';
let opening;
const encoder = new TextEncoder();
const decoder = new TextDecoder();

function database() {
  opening ??= new Promise((resolve, reject) => {
    const request = indexedDB.open(name, 1);
    request.onupgradeneeded = () => {
      request.result.createObjectStore('data');
      request.result.createObjectStore('queue', { keyPath: ['account', 'key'] }).createIndex('account', 'account');
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
  return opening;
}

async function access(store, mode, run) {
  const db = await database();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, mode);
    const request = run(tx.objectStore(store));
    tx.oncomplete = () => resolve(request.result);
    tx.onabort = () => reject(tx.error ?? new Error('offline_storage_unavailable'));
  });
}

async function storageKey(account) {
  const id = JSON.stringify(['key', account]);
  const read = () => access('data', 'readonly', store => store.get(id));
  const existing = await read();
  if (existing) return existing;
  const candidate = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
  try { await access('data', 'readwrite', store => store.add(candidate, id)); }
  catch (error) {
    const concurrent = await read();
    if (concurrent) return concurrent;
    throw error;
  }
  return candidate;
}

async function encrypt(account, address, value) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const cipher = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: encoder.encode(address) },
    await storageKey(account), encoder.encode(JSON.stringify(value)));
  return { iv, cipher };
}

async function decrypt(account, address, entry) {
  const plain = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: entry.iv, additionalData: encoder.encode(address) },
    await storageKey(account), entry.cipher);
  return JSON.parse(decoder.decode(plain));
}

const contextId = account => JSON.stringify(account);
const pendingId = (account, key) => JSON.stringify([account, key]);

export async function saveSnapshot(account, path, value) {
  const id = JSON.stringify([account, path]);
  const entry = await encrypt(account, id, { value, savedAt: Date.now() });
  await access('data', 'readwrite', store => store.put(entry, id));
}

export async function readSnapshot(account, path) {
  const id = JSON.stringify([account, path]);
  const entry = await access('data', 'readonly', store => store.get(id));
  if (!entry) return undefined;
  try {
    const { value, savedAt } = await decrypt(account, id, entry);
    return Date.now() - savedAt <= 24 * 60 * 60000 ? value : undefined;
  } catch { return undefined; }
}

export async function queueDocument(account, key, path, body) {
  const id = contextId(account);
  const sealed = await encrypt(account, pendingId(id, key), { path, body, createdAt: Date.now(), state: 'pending' });
  await access('queue', 'readwrite', store => store.add({ account: id, key, ...sealed }));
}

export async function queuedDocuments(account) {
  const id = contextId(account);
  const entries = await access('queue', 'readonly', store => store.index('account').getAll(id));
  const readable = await Promise.all(entries.map(async entry => {
    try { return { ...await decrypt(account, pendingId(id, entry.key), entry), key: entry.key }; }
    catch { return null; }
  }));
  return readable.filter(Boolean).sort((a, b) => a.createdAt - b.createdAt);
}

export async function rejectDocument(account, item, error) {
  const id = contextId(account);
  const { key, ...data } = item;
  const sealed = await encrypt(account, pendingId(id, key), { ...data, state: 'rejected', error });
  await access('queue', 'readwrite', store => {
    const request = store.get([id, key]);
    request.onsuccess = () => {
      if (request.result) store.put({ account: id, key, ...sealed });
    };
    return request;
  });
}

export function dropDocument(account, key) {
  return access('queue', 'readwrite', store => store.delete([contextId(account), key]));
}
