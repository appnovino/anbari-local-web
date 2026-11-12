// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 223; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return h;
        },
      }));
    var t = e(r(_d[0])),
      n = e(r(_d[1])),
      l = r(_d[2]),
      u = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var l = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                l.get
                  ? l
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
      })(l),
      f = e(r(_d[3])),
      d = e(r(_d[4])),
      c = e(r(_d[5])),
      o = ['children', 'style', 'imageStyle', 'imageRef'],
      s = {},
      y = (0, l.forwardRef)((e, l) => {
        var y = e.children,
          h = e.style,
          b = void 0 === h ? s : h,
          _ = e.imageStyle,
          v = e.imageRef,
          p = (0, n.default)(e, o),
          O = d.default.flatten(b),
          j = O.height,
          w = O.width;
        return u.createElement(
          c.default,
          { ref: l, style: b },
          u.createElement(
            f.default,
            (0, t.default)({}, p, {
              ref: v,
              style: [
                { width: w, height: j, zIndex: -1 },
                d.default.absoluteFill,
                _,
              ],
            }),
          ),
          y,
        );
      });
    y.displayName = 'ImageBackground';
    var h = y;
  },
  223,
  [96, 16, 2, 168, 17, 99],
);
