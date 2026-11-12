// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 148; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return _;
        },
      }));
    var t = e(r(d[0])),
      u = e(r(d[1])),
      n = r(d[2]),
      l = e(r(d[3])),
      c = e(r(d[4])),
      f = r(d[5]),
      o = e(r(d[6]));
    function _(e) {
      var t = (0, f.useReducer)((e) => e + 1, 0)[1],
        c = (0, f.useRef)(null),
        o = (0, f.useMemo)(
          () =>
            new u.default(e, () => (null == c.current ? void 0 : c.current())),
          [e],
        );
      v(o);
      var _ = (0, f.useCallback)(
          (u) => {
            (o.setNativeView(u),
              (c.current = () => {
                t();
              }));
            var l = b(u),
              f = [];
            for (var _ in e) {
              var s = e[_];
              s instanceof n.AnimatedEvent &&
                s.__isNative &&
                (s.__attach(l, _), f.push([_, s]));
            }
            return () => {
              c.current = null;
              for (var e = 0, t = f; e < t.length; e++) {
                var u = t[e],
                  n = u[0];
                u[1].__detach(l, n);
              }
            };
          },
          [e, o],
        ),
        h = (0, l.default)(_);
      return [s(o), h];
    }
    function s(e) {
      return (0, t.default)(
        (0, t.default)({}, e.__getValue()),
        {},
        { collapsable: !1 },
      );
    }
    function v(e) {
      var t = (0, f.useRef)(null),
        u = (0, f.useRef)(!1);
      ((0, f.useEffect)(() => {
        c.default.API.flushQueue();
      }),
        (0, o.default)(
          () => (
            (u.current = !1),
            () => {
              u.current = !0;
            }
          ),
          [],
        ),
        (0, o.default)(() => {
          if ((e.__attach(), null != t.current)) {
            var n = t.current;
            (n.__restoreDefaultValues(), n.__detach(), (t.current = null));
          }
          return () => {
            u.current ? e.__detach() : (t.current = e);
          };
        }, [e]));
    }
    function b(e) {
      return 'object' == typeof e &&
        'function' == typeof (null == e ? void 0 : e.getScrollableNode)
        ? e.getScrollableNode()
        : e;
    }
  },
  148,
  [11, 149, 150, 165, 155, 2, 103],
);
