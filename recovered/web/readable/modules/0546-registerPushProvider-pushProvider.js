// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 546; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.registerPushProvider = function (t) {
        n.some((n) => n.name === t.name) || n.push(t);
      }),
      (e.pushProvider = async function () {
        for (const t of n) if (await t.available().catch(() => !1)) return t;
        return null;
      }));
    const n = [];
  },
  546,
  [],
);
