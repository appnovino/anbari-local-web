// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 104; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var e,
      t = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var u = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                u.get
                  ? u
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[0])),
      n = r(_d[1]),
      u = (e = n) && e.__esModule ? e : { default: e };
    function o() {
      for (var e = arguments.length, n = new Array(e), o = 0; o < e; o++)
        n[o] = arguments[o];
      return t.useMemo(() => (0, u.default)(...n), [...n]);
    }
  },
  104,
  [2, 105],
);
