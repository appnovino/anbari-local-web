// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 105; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    function n() {
      for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++)
        t[o] = arguments[o];
      return function (n) {
        t.forEach((t) => {
          null != t &&
            ('function' != typeof t
              ? 'object' != typeof t
                ? console.error(
                    'mergeRefs cannot handle Refs of type boolean, number or string, received ref ' +
                      String(t),
                  )
                : (t.current = n)
              : t(n));
        });
      };
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      r(d[0]));
  },
  105,
  [2],
);
