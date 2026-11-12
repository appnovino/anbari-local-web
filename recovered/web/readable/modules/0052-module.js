// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 52; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function (t, u) {
        if (
          'string' == typeof u &&
          !(0, n.default)(u) &&
          u.indexOf('image-set(') > -1
        )
          return f.map(function (t) {
            return u.replace(/image-set\(/g, t + 'image-set(');
          });
      }));
    var t,
      u = r(d[0]),
      n = (t = u) && t.__esModule ? t : { default: t };
    var f = ['-webkit-', ''];
  },
  52,
  [53],
);
