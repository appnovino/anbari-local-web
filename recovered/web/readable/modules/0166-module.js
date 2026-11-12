// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 166; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    var n = r(d[0]);
    function t() {
      for (var t = arguments.length, u = new Array(t), f = 0; f < t; f++)
        u[f] = arguments[f];
      return (0, n.useCallback)(
        (n) => {
          for (var t = 0, f = u; t < f.length; t++) {
            var l = f[t];
            null != l && ('function' == typeof l ? l(n) : (l.current = n));
          }
        },
        [...u],
      );
    }
  },
  166,
  [2],
);
