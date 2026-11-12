// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 147; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
      u = e(r(_d[1])),
      n = e(r(_d[2])),
      f = e(r(_d[3]));
    (r(_d[4]), r(_d[5]));
    var l = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (u) {
              var n = Object.getOwnPropertyDescriptor(e, u);
              Object.defineProperty(
                t,
                u,
                n.get
                  ? n
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[u];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[6])),
      o = ['style'];
    function c(e) {
      return l.forwardRef((c, d) => {
        var s = (0, n.default)(c),
          y = s[0],
          p = s[1],
          _ = (0, f.default)(p, d),
          b = y.passthroughAnimatedPropExplicitValues,
          v = y.style,
          O = null != b ? b : {},
          j = O.style,
          P = (0, u.default)(O, o),
          h = [v, j];
        return l.createElement(
          e,
          (0, t.default)({}, y, P, { style: h, ref: _ }),
        );
      });
    }
  },
  147,
  [96, 16, 148, 166, 17, 99, 2],
);
