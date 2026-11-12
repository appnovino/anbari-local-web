// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 108; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      if (e && e.__esModule) return e;
      var n = {};
      return (
        e &&
          Object.keys(e).forEach(function (t) {
            var u = Object.getOwnPropertyDescriptor(e, t);
            Object.defineProperty(
              n,
              t,
              u.get
                ? u
                : {
                    enumerable: !0,
                    get: function () {
                      return e[t];
                    },
                  },
            );
          }),
        (n.default = e),
        n
      );
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var n = e(r(_d[0])),
      t = e(r(_d[1])),
      u = {},
      o = 0;
    function l(e, l) {
      void 0 === l && (l = u);
      var d,
        c,
        s =
          ((d = () => o++),
          null == (c = n.useRef(null)).current && (c.current = d()),
          c.current),
        S = n.useRef(!1);
      (n.useEffect(
        () => (
          t.attachListeners(),
          () => {
            t.removeNode(s);
          }
        ),
        [s],
      ),
        n.useEffect(() => {
          var n = l,
            u = n.onMoveShouldSetResponder,
            o = n.onMoveShouldSetResponderCapture,
            d = n.onScrollShouldSetResponder,
            c = n.onScrollShouldSetResponderCapture,
            f = n.onSelectionChangeShouldSetResponder,
            p = n.onSelectionChangeShouldSetResponderCapture,
            h = n.onStartShouldSetResponder,
            R = n.onStartShouldSetResponderCapture,
            v =
              null != u ||
              null != o ||
              null != d ||
              null != c ||
              null != f ||
              null != p ||
              null != h ||
              null != R,
            b = e.current;
          v
            ? (t.addNode(s, b, l), (S.current = !0))
            : S.current && (t.removeNode(s), (S.current = !1));
        }, [l, e, s]),
        n.useDebugValue({ isResponder: e.current === t.getResponderNode() }),
        n.useDebugValue(l));
    }
  },
  108,
  [2, 109],
);
