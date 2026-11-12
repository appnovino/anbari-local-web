// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 236; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      u = e(r(d[2]));
    function l(e, l) {
      var f = (0, u.default)(() => new Map()),
        c = (0, u.default)(() => (n, u) => {
          var c = f.get(n);
          (null != c && c(), null == u && (f.delete(n), (u = () => {})));
          var o = (0, t.addEventListener)(n, e, u, l);
          return (f.set(n, o), o);
        });
      return (
        (0, n.default)(
          () => () => {
            (f.forEach((e) => {
              e();
            }),
              f.clear());
          },
          [f],
        ),
        c
      );
    }
  },
  236,
  [235, 103, 107],
);
