// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 321; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.buildAsyncRequire = function () {
        const t = new Map();
        return async function (c) {
          if (t.has(c)) return t.get(c);
          const u = (0, n.loadBundleAsync)(c).catch((n) => {
            throw (t.delete(c), n);
          });
          return (t.set(c, u), u);
        };
      }));
    var n = r(d[0]);
  },
  321,
  [322],
);
