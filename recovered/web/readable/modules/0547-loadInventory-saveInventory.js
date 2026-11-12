// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 547; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.loadInventory = async function () {
        const n = await t();
        try {
          return await new Promise((t, o) => {
            const s = n
              .transaction('state', 'readonly')
              .objectStore('state')
              .get('current');
            ((s.onsuccess = () => {
              try {
                t(s.result ? (0, e.validateStored)(s.result) : null);
              } catch (e) {
                o(e);
              }
            }),
              (s.onerror = () => o(s.error)));
          });
        } finally {
          n.close();
        }
      }),
      (_e.saveInventory = async function (e) {
        const n = await t();
        try {
          await new Promise((t, o) => {
            const s = n.transaction('state', 'readwrite');
            (s.objectStore('state').put(e, 'current'),
              (s.oncomplete = () => t()),
              (s.onerror = () => o(s.error)),
              (s.onabort = () => o(s.error)));
          });
        } finally {
          n.close();
        }
      }));
    var e = r(d[0]);
    function t() {
      return new Promise((e, t) => {
        const n = indexedDB.open('anbar-inventory', 1);
        ((n.onupgradeneeded = () => n.result.createObjectStore('state')),
          (n.onerror = () => t(n.error)),
          (n.onsuccess = () => e(n.result)));
      });
    }
  },
  547,
  [548],
);
