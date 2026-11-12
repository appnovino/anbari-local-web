// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 225; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return _;
        },
      }));
    var t = e(r(_d[0])),
      n = e(r(_d[1])),
      u = (function (e) {
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
      })(r(_d[2])),
      o = e(r(_d[3])),
      l = e(r(_d[4])),
      s = e(r(_d[5])),
      f = e(r(_d[6])),
      c = [
        'animationType',
        'children',
        'onDismiss',
        'onRequestClose',
        'onShow',
        'transparent',
        'visible',
      ],
      d = 0,
      v = [],
      p = {};
    function b() {
      if (0 !== v.length) {
        var e = v[v.length - 1];
        v.forEach((t) => {
          t in p && p[t](t === e);
        });
      }
    }
    function h(e) {
      e in p && (p[e](!1), delete p[e]);
      var t = v.indexOf(e);
      -1 !== t && (v.splice(t, 1), b());
    }
    function y(e, t) {
      (h(e), v.push(e), (p[e] = t), b());
    }
    var _ = u.forwardRef((e, v) => {
      var p = e.animationType,
        b = e.children,
        _ = e.onDismiss,
        E = e.onRequestClose,
        O = e.onShow,
        j = e.transparent,
        w = e.visible,
        C = void 0 === w || w,
        D = (0, n.default)(e, c),
        M = u.useMemo(() => d++, []),
        P = u.useState(!1),
        R = P[0],
        S = P[1],
        k = u.useCallback(() => {
          (h(M), _ && _());
        }, [M, _]),
        q = u.useCallback(() => {
          (y(M, S), O && O());
        }, [M, O]);
      return (
        u.useEffect(() => () => h(M), [M]),
        u.createElement(
          o.default,
          null,
          u.createElement(
            l.default,
            { animationType: p, onDismiss: k, onShow: q, visible: C },
            u.createElement(
              f.default,
              { active: R },
              u.createElement(
                s.default,
                (0, t.default)({}, D, {
                  active: R,
                  onRequestClose: E,
                  ref: v,
                  transparent: j,
                }),
                b,
              ),
            ),
          ),
        )
      );
    });
  },
  225,
  [96, 16, 2, 226, 227, 228, 229],
);
