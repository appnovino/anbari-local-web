// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 412; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (_e.getLinearGradientBackgroundImage = s));
    var t,
      e = r(_d[0]),
      n = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        return (
          t &&
            Object.keys(t).forEach(function (n) {
              var o = Object.getOwnPropertyDescriptor(t, n);
              Object.defineProperty(
                e,
                n,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    },
              );
            }),
          (e.default = t),
          e
        );
      })(r(_d[1])),
      o = r(_d[2]),
      u = (t = o) && t.__esModule ? t : { default: t },
      l = r(_d[3]);
    function c({ colors: t, locations: o, startPoint: l, endPoint: c, ...d }) {
      const [{ height: h, width: f }, y] = n.useState({ height: 1, width: 1 }),
        b = n.useMemo(() => s(t, o, l, c, f, h), [t, o, l, c, f, h]);
      return (0, e.jsx)(u.default, {
        ...d,
        style: [d.style, { backgroundImage: b }],
        onLayout: (t) => {
          const { width: e, height: n } = t.nativeEvent.layout;
          (y((t) =>
            e !== t.width || n !== t.height ? { height: n, width: e } : t,
          ),
            d.onLayout && d.onLayout(t));
        },
      });
    }
    function s(t, e, n, o, u = 1, l = 1) {
      const c = h(t, e);
      return `linear-gradient(${d(u, l, n, o)}deg, ${c.join(', ')})`;
    }
    function d(t, e, n, o) {
      const [u = [0, 0], l = [0, 0]] = (() => {
        let t = [0, 0];
        Array.isArray(n) &&
          (t = [null != n[0] ? n[0] : 0, null != n[1] ? n[1] : 0]);
        let e = [0, 1];
        return (
          Array.isArray(o) &&
            (e = [null != o[0] ? o[0] : 0, null != o[1] ? o[1] : 1]),
          [t, e]
        );
      })();
      ((u[0] *= t), (l[0] *= t), (u[1] *= e), (l[1] *= e));
      const c = l[1] - u[1],
        s = l[0] - u[0];
      return 90 + (180 * Math.atan2(c, s)) / Math.PI;
    }
    function h(t, e) {
      return t.map((t, n) => {
        const o = (0, l.normalizeColor)(t);
        if (e && e[n]) {
          return `${o} ${100 * Math.max(0, Math.min(1, e[n]))}%`;
        }
        return o;
      });
    }
  },
  412,
  [338, 2, 99, 413],
);
