// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 99; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function o(e) {
      if (e && e.__esModule) return e;
      var o = {};
      return (
        e &&
          Object.keys(e).forEach(function (n) {
            var t = Object.getOwnPropertyDescriptor(e, n);
            Object.defineProperty(
              o,
              n,
              t.get
                ? t
                : {
                    enumerable: !0,
                    get: function () {
                      return e[n];
                    },
                  },
            );
          }),
        (o.default = e),
        o
      );
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }));
    var n = e(r(_d[0])),
      t = o(r(_d[1])),
      d = e(r(_d[2])),
      l = o(r(_d[3])),
      s = e(r(_d[4])),
      u = e(r(_d[5])),
      p = e(r(_d[6])),
      S = e(r(_d[7])),
      R = e(r(_d[8])),
      c = e(r(_d[9])),
      h = e(r(_d[10])),
      f = r(_d[11]),
      v = [
        'hrefAttrs',
        'onLayout',
        'onMoveShouldSetResponder',
        'onMoveShouldSetResponderCapture',
        'onResponderEnd',
        'onResponderGrant',
        'onResponderMove',
        'onResponderReject',
        'onResponderRelease',
        'onResponderStart',
        'onResponderTerminate',
        'onResponderTerminationRequest',
        'onScrollShouldSetResponder',
        'onScrollShouldSetResponderCapture',
        'onSelectionChangeShouldSetResponder',
        'onSelectionChangeShouldSetResponderCapture',
        'onStartShouldSetResponder',
        'onStartShouldSetResponderCapture',
      ],
      C = Object.assign(
        {},
        l.defaultProps,
        l.accessibilityProps,
        l.clickProps,
        l.focusProps,
        l.keyboardProps,
        l.mouseProps,
        l.touchProps,
        l.styleProps,
        { href: !0, lang: !0, onScroll: !0, onWheel: !0, pointerEvents: !0 },
      ),
      y = (e) => (0, s.default)(e, C),
      b = t.forwardRef((e, o) => {
        var l = e.hrefAttrs,
          s = e.onLayout,
          c = e.onMoveShouldSetResponder,
          C = e.onMoveShouldSetResponderCapture,
          b = e.onResponderEnd,
          M = e.onResponderGrant,
          P = e.onResponderMove,
          w = e.onResponderReject,
          _ = e.onResponderRelease,
          j = e.onResponderStart,
          O = e.onResponderTerminate,
          k = e.onResponderTerminationRequest,
          T = e.onScrollShouldSetResponder,
          D = e.onScrollShouldSetResponderCapture,
          E = e.onSelectionChangeShouldSetResponder,
          L = e.onSelectionChangeShouldSetResponderCapture,
          q = e.onStartShouldSetResponder,
          A = e.onStartShouldSetResponderCapture,
          G = (0, n.default)(e, v),
          z = t.useContext(h.default),
          I = t.useRef(null),
          W = (0, f.useLocaleContext)().direction;
        ((0, u.default)(I, s),
          (0, R.default)(I, {
            onMoveShouldSetResponder: c,
            onMoveShouldSetResponderCapture: C,
            onResponderEnd: b,
            onResponderGrant: M,
            onResponderMove: P,
            onResponderReject: w,
            onResponderRelease: _,
            onResponderStart: j,
            onResponderTerminate: O,
            onResponderTerminationRequest: k,
            onScrollShouldSetResponder: T,
            onScrollShouldSetResponderCapture: D,
            onSelectionChangeShouldSetResponder: E,
            onSelectionChangeShouldSetResponderCapture: L,
            onStartShouldSetResponder: q,
            onStartShouldSetResponderCapture: A,
          }));
        var $ = 'div',
          B = null != e.lang ? (0, f.getLocaleDirection)(e.lang) : null,
          H = e.dir || B,
          N = H || W,
          V = y(G);
        if (
          ((V.dir = H),
          (V.style = [x.view$raw, z && x.inline, e.style]),
          null != e.href && (($ = 'a'), null != l))
        ) {
          var F = l.download,
            J = l.rel,
            K = l.target;
          (null != F && (V.download = F),
            null != J && (V.rel = J),
            'string' == typeof K &&
              (V.target = '_' !== K.charAt(0) ? '_' + K : K));
        }
        var Q = (0, S.default)(V),
          U = (0, p.default)(I, Q, o);
        return ((V.ref = U), (0, d.default)($, V, { writingDirection: N }));
      });
    b.displayName = 'View';
    var x = c.default.create({
        view$raw: {
          alignContent: 'flex-start',
          alignItems: 'stretch',
          backgroundColor: 'transparent',
          border: '0 solid black',
          boxSizing: 'border-box',
          display: 'flex',
          flexBasis: 'auto',
          flexDirection: 'column',
          flexShrink: 0,
          listStyle: 'none',
          margin: 0,
          minHeight: 0,
          minWidth: 0,
          padding: 0,
          position: 'relative',
          textDecoration: 'none',
          zIndex: 0,
        },
        inline: { display: 'inline-flex' },
      }),
      M = b;
  },
  99,
  [16, 2, 5, 100, 101, 102, 104, 106, 108, 17, 115, 73],
);
