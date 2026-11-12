// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 173; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var t = e(r(_d[0])),
      n = (function (e) {
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
      })(r(_d[1])),
      u = e(r(_d[2])),
      f = e(r(_d[3])),
      o = n.forwardRef((e, f) =>
        n.createElement(
          u.default,
          (0, t.default)({ scrollEventThrottle: 1e-4 }, e, { ref: f }),
        ),
      ),
      c = (0, f.default)(o);
  },
  173,
  [96, 2, 174, 147],
);
