// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 345; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'SafeAreaView', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var e = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        return (
          t &&
            Object.keys(t).forEach(function (r) {
              var n = Object.getOwnPropertyDescriptor(t, r);
              Object.defineProperty(
                e,
                r,
                n.get
                  ? n
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[r];
                      },
                    },
              );
            }),
          (e.default = t),
          e
        );
      })(_r(_d[0])),
      r = t(_r(_d[1])),
      n = t(_r(_d[2])),
      o = _r(_d[3]);
    function d() {
      return (
        (d = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var n in r)
                  ({}).hasOwnProperty.call(r, n) && (t[n] = r[n]);
              }
              return t;
            }),
        d.apply(null, arguments)
      );
    }
    const u = {
      top: 'additive',
      left: 'additive',
      bottom: 'additive',
      right: 'additive',
    };
    function f(t, e, r) {
      switch (r) {
        case 'maximum':
          return Math.max(e, t);
        case 'additive':
          return e + t;
        default:
          return e;
      }
    }
    const l = e.forwardRef(({ style: t = {}, mode: l, edges: c, ...p }, s) => {
      const b = (0, o.useSafeAreaInsets)(),
        h = e.useMemo(
          () =>
            null == c
              ? u
              : Array.isArray(c)
                ? c.reduce((t, e) => ((t[e] = 'additive'), t), {})
                : c,
          [c],
        ),
        v = e.useMemo(() => {
          const e = r.default.flatten(t);
          if ('margin' === l) {
            const {
                margin: r = 0,
                marginVertical: n = r,
                marginHorizontal: o = r,
                marginTop: d = n,
                marginRight: u = o,
                marginBottom: l = n,
                marginLeft: c = o,
              } = e,
              p = {
                marginTop: f(b.top, d, h.top),
                marginRight: f(b.right, u, h.right),
                marginBottom: f(b.bottom, l, h.bottom),
                marginLeft: f(b.left, c, h.left),
              };
            return [t, p];
          }
          {
            const {
                padding: r = 0,
                paddingVertical: n = r,
                paddingHorizontal: o = r,
                paddingTop: d = n,
                paddingRight: u = o,
                paddingBottom: l = n,
                paddingLeft: c = o,
              } = e,
              p = {
                paddingTop: f(b.top, d, h.top),
                paddingRight: f(b.right, u, h.right),
                paddingBottom: f(b.bottom, l, h.bottom),
                paddingLeft: f(b.left, c, h.left),
              };
            return [t, p];
          }
        }, [
          h.bottom,
          h.left,
          h.right,
          h.top,
          b.bottom,
          b.left,
          b.right,
          b.top,
          l,
          t,
        ]);
      return e.createElement(n.default, d({ style: v }, p, { ref: s }));
    });
  },
  345,
  [2, 17, 99, 343],
);
