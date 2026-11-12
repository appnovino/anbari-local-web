// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 238; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return w;
        },
      }));
    var t = e(r(_d[0])),
      n = e(r(_d[1])),
      o = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var o = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                o.get
                  ? o
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
      })(r(_d[2])),
      f = e(r(_d[3])),
      u = e(r(_d[4])),
      d = e(r(_d[5])),
      s = ['style'],
      l =
        d.default &&
        window.CSS &&
        window.CSS.supports &&
        window.CSS.supports('top: constant(safe-area-inset-top)')
          ? 'constant'
          : 'env',
      c = o.forwardRef((e, f) => {
        var d = e.style,
          l = (0, n.default)(e, s);
        return o.createElement(
          u.default,
          (0, t.default)({}, l, { ref: f, style: [p.root, d] }),
        );
      });
    c.displayName = 'SafeAreaView';
    var p = f.default.create({
        root: {
          paddingTop: l + '(safe-area-inset-top)',
          paddingRight: l + '(safe-area-inset-right)',
          paddingBottom: l + '(safe-area-inset-bottom)',
          paddingLeft: l + '(safe-area-inset-left)',
        },
      }),
      w = c;
  },
  238,
  [96, 16, 2, 17, 99, 26],
);
