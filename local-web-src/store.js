/* Durable local-only state. The original extracted build is never modified. */
(function (g) {
  'use strict';
  const KEY = 'anbari-local-workspace-v1';
  const encode = (value) => JSON.stringify(value, (_, v) =>
    v instanceof Map ? { $anbari: 'Map', entries: [...v] } :
    v instanceof Set ? { $anbari: 'Set', entries: [...v] } : v);
  const decode = (value) => JSON.parse(value, (_, v) =>
    v?.$anbari === 'Map' ? new Map(v.entries) :
    v?.$anbari === 'Set' ? new Set(v.entries) : v);
  let database;
  async function open() {
    if (!g.indexedDB) return null;
    if (!database) database = new Promise((resolve, reject) => {
      const request = g.indexedDB.open(KEY, 1);
      request.onupgradeneeded = () => request.result.createObjectStore('workspace');
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => { database = null; reject(request.error); };
      request.onblocked = () => { database = null; reject(Error('local_storage_blocked')); };
    });
    return database;
  }
  async function read() {
    const db = await open();
    if (!db) {
      const raw = g.localStorage.getItem(KEY);
      return raw ? decode(raw) : null;
    }
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('workspace', 'readonly');
      const request = transaction.objectStore('workspace').get('current');
      transaction.oncomplete = () => {
        try { resolve(request.result ? decode(request.result) : null); }
        catch (error) { reject(error); }
      };
      transaction.onerror = transaction.onabort = () => reject(transaction.error || Error('local_storage_error'));
    });
  }
  async function write(value, expectedGeneration) {
    const raw = encode(value), db = await open();
    if (!db) {
      const current = g.localStorage.getItem(KEY);
      if (expectedGeneration !== undefined && (current ? decode(current).generation || 0 : 0) !== expectedGeneration) throw Error('local_workspace_changed');
      g.localStorage.setItem(KEY, raw); return;
    }
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('workspace', 'readwrite');
      const objectStore = transaction.objectStore('workspace');
      let failure;
      const request = objectStore.get('current');
      request.onsuccess = () => {
        try {
          const current = request.result ? decode(request.result) : null;
          if (expectedGeneration !== undefined && (current?.generation || 0) !== expectedGeneration) throw Error('local_workspace_changed');
          objectStore.put(raw, 'current');
        } catch (error) { failure=error;transaction.abort(); }
      };
      transaction.oncomplete = () => resolve();
      transaction.onerror = transaction.onabort = () => reject(failure || transaction.error || Error('local_storage_error'));
    });
  }
  g.AnbariLocalStore = { read, write, encode, decode, clone: (v) => decode(encode(v)), key: KEY };
})(globalThis);
