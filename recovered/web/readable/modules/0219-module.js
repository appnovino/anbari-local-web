// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 219; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
          return p;
        },
      }));
    var t = e(r(_d[0])),
      n = e(r(_d[1])),
      s = r(_d[2]),
      o = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var s = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                s.get
                  ? s
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
      })(s),
      l = e(r(_d[3])),
      u = e(r(_d[4])),
      c = e(r(_d[5])),
      d = e(r(_d[6])),
      f = [
        'activeOpacity',
        'delayPressIn',
        'delayPressOut',
        'delayLongPress',
        'disabled',
        'focusable',
        'onLongPress',
        'onPress',
        'onPressIn',
        'onPressOut',
        'rejectResponderTermination',
        'style',
      ];
    function y(e, c) {
      var y = e.activeOpacity,
        b = e.delayPressIn,
        p = e.delayPressOut,
        O = e.delayLongPress,
        v = e.disabled,
        _ = e.focusable,
        j = e.onLongPress,
        L = e.onPress,
        h = e.onPressIn,
        k = e.onPressOut,
        C = e.rejectResponderTermination,
        E = e.style,
        R = (0, n.default)(e, f),
        S = (0, s.useRef)(null),
        D = (0, l.default)(c, S),
        I = (0, s.useState)('0s'),
        M = I[0],
        w = I[1],
        T = (0, s.useState)(null),
        N = T[0],
        x = T[1],
        A = (0, s.useCallback)(
          (e, t) => {
            (x(e), w(t ? t / 1e3 + 's' : '0s'));
          },
          [x, w],
        ),
        G = (0, s.useCallback)(
          (e) => {
            A(null != y ? y : 0.2, e);
          },
          [y, A],
        ),
        q = (0, s.useCallback)(
          (e) => {
            A(null, e);
          },
          [A],
        ),
        z = (0, s.useMemo)(
          () => ({
            cancelable: !C,
            disabled: v,
            delayLongPress: O,
            delayPressStart: b,
            delayPressEnd: p,
            onLongPress: j,
            onPress: L,
            onPressStart(e) {
              var t =
                null != e.dispatchConfig
                  ? 'onResponderGrant' === e.dispatchConfig.registrationName
                  : 'keydown' === e.type;
              (G(t ? 0 : 150), null != h && h(e));
            },
            onPressEnd(e) {
              (q(250), null != k && k(e));
            },
          }),
          [O, b, p, v, j, L, h, k, C, G, q],
        ),
        B = (0, u.default)(S, z);
      return o.createElement(
        d.default,
        (0, t.default)({}, R, B, {
          accessibilityDisabled: v,
          focusable: !v && !1 !== _,
          pointerEvents: v ? 'box-none' : void 0,
          ref: D,
          style: [
            P.root,
            !v && P.actionable,
            E,
            null != N && { opacity: N },
            { transitionDuration: M },
          ],
        }),
      );
    }
    var P = c.default.create({
        root: {
          transitionProperty: 'opacity',
          transitionDuration: '0.15s',
          userSelect: 'none',
        },
        actionable: { cursor: 'pointer', touchAction: 'manipulation' },
      }),
      b = o.memo(o.forwardRef(y));
    b.displayName = 'TouchableOpacity';
    var p = b;
  },
  219,
  [96, 16, 2, 104, 220, 17, 99],
);
