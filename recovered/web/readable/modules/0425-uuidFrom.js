// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 425; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.uuidFrom = function (t, n) {
        if (t && 'function' == typeof t.randomUUID)
          try {
            return t.randomUUID.call(t);
          } catch {}
        if (t && 'function' == typeof t.getRandomValues) {
          const n = new Uint8Array(16);
          (t.getRandomValues.call(t, n),
            (n[6] = (15 & n[6]) | 64),
            (n[8] = (63 & n[8]) | 128));
          const o = Array.from(n, (t) => t.toString(16).padStart(2, '0')).join(
            '',
          );
          return `${o.slice(0, 8)}-${o.slice(8, 12)}-${o.slice(12, 16)}-${o.slice(16, 20)}-${o.slice(20)}`;
        }
        return n();
      }));
  },
  425,
  [],
);
