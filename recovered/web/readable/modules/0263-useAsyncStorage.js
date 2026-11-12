// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 263; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useAsyncStorage = function (e) {
        return {
          getItem: (...t) => u.default.getItem(e, ...t),
          setItem: (...t) => u.default.setItem(e, ...t),
          mergeItem: (...t) => u.default.mergeItem(e, ...t),
          removeItem: (...t) => u.default.removeItem(e, ...t),
        };
      }));
    var e,
      t = r(d[0]),
      u = (e = t) && e.__esModule ? e : { default: e };
  },
  263,
  [259],
);
