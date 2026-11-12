// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 428; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.readOffline = async function (t) {
        try {
          const n = await c('readonly', (n) => n.get(t));
          return void 0 === n ? null : n;
        } catch {
          return null;
        }
      }),
      (e.writeOffline = async function (t, n) {
        try {
          await c('readwrite', (o) => {
            o.put(n, t);
          });
        } catch {}
      }),
      (e.removeOffline = async function (t) {
        try {
          await c('readwrite', (n) => {
            n.delete(t);
          });
        } catch {}
      }),
      (e.clearOffline = async function (t) {
        try {
          if (!t)
            return void (await c('readwrite', (t) => {
              t.clear();
            }));
          const n = (await c('readonly', (t) => t.getAllKeys())) || [];
          await c('readwrite', (o) => {
            for (const c of n) ('string' == typeof c && t(c)) || o.delete(c);
          });
        } catch {}
      }));
    const t = 'anbari-offline',
      n = 'kv';
    let o = null;
    function c(c, l) {
      return (
        'undefined' == typeof indexedDB
          ? Promise.reject(Error('no_indexeddb'))
          : ((o ??= new Promise((c, l) => {
              const s = indexedDB.open(t, 1);
              ((s.onupgradeneeded = () => s.result.createObjectStore(n)),
                (s.onerror = () => {
                  ((o = null), l(s.error));
                }),
                (s.onsuccess = () => c(s.result)));
            })),
            o)
      ).then(
        (t) =>
          new Promise((o, s) => {
            const u = t.transaction(n, c),
              f = l(u.objectStore(n));
            ((u.oncomplete = () => o(f ? f.result : void 0)),
              (u.onerror = () => s(u.error)),
              (u.onabort = () => s(u.error)));
          }),
      );
    }
  },
  428,
  [],
);
