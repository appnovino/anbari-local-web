// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 323; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.buildUrlForBundle = function (e) {
        if (/^https?:\/\//.test(e)) return e;
        const { url: t } = (0, u.default)();
        return t ? new URL(e, t).toString() : `//${e.replace(/^\/+/, '')}`;
      }));
    var e,
      t = r(d[0]),
      u = (e = t) && e.__esModule ? e : { default: e };
  },
  323,
  [324],
);
