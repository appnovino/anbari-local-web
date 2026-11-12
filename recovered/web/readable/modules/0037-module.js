// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 37; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.default = function (s, u) {
        if (
          'string' == typeof u &&
          !(0, t.isPrefixedValue)(u) &&
          -1 !== u.indexOf('cross-fade(')
        )
          return n.map(function (t) {
            return u.replace(f, t + 'cross-fade(');
          });
      }));
    var t = r(d[0]),
      f = /cross-fade\(/g,
      n = ['-webkit-', ''];
  },
  37,
  [38],
);
