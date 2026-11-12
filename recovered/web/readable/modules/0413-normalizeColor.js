// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 413; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, _r, i, _a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.normalizeColor = function (e, r = 1) {
        if (null == e) return;
        if ('string' == typeof e && n(e)) return e;
        const o = (0, t.default)(e);
        if ('number' == typeof o) {
          return `rgba(${(o >> 16) & 255},${(o >> 8) & 255},${255 & o},${((((o >> 24) & 255) / 255) * r).toFixed(2)})`;
        }
      }));
    var e,
      r = _r(d[0]),
      t = (e = r) && e.__esModule ? e : { default: e };
    const n = (e) =>
      'currentcolor' === e ||
      'currentColor' === e ||
      'inherit' === e ||
      0 === e.indexOf('var(');
  },
  413,
  [24],
);
