// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 22; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, _r, i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var t = e(_r(d[0])),
      u = e(_r(d[1])),
      n = function (e, n) {
        if ((void 0 === n && (n = 1), null != e)) {
          if ('string' == typeof e && (0, t.default)(e)) return e;
          var r = (0, u.default)(e);
          if (null != r)
            return (
              'rgba(' +
              ((r >> 16) & 255) +
              ',' +
              ((r >> 8) & 255) +
              ',' +
              (255 & r) +
              ',' +
              ((((r >> 24) & 255) / 255) * n).toFixed(2) +
              ')'
            );
        }
      };
  },
  22,
  [23, 24],
);
