// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 247; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
    var n = e(r(_d[0])),
      l = e(r(_d[1])),
      s = r(_d[2]),
      t = (function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        return (
          e &&
            Object.keys(e).forEach(function (l) {
              var s = Object.getOwnPropertyDescriptor(e, l);
              Object.defineProperty(
                n,
                l,
                s.get
                  ? s
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[l];
                      },
                    },
              );
            }),
          (n.default = e),
          n
        );
      })(s),
      o = e(r(_d[3])),
      u = e(r(_d[4])),
      d = e(r(_d[5])),
      c = e(r(_d[6])),
      y = [
        'activeOpacity',
        'children',
        'delayPressIn',
        'delayPressOut',
        'delayLongPress',
        'disabled',
        'focusable',
        'onHideUnderlay',
        'onLongPress',
        'onPress',
        'onPressIn',
        'onPressOut',
        'onShowUnderlay',
        'rejectResponderTermination',
        'style',
        'testOnly_pressed',
        'underlayColor',
      ];
    function f(e, n) {
      return {
        child: { opacity: null != e ? e : 0.85 },
        underlay: { backgroundColor: void 0 === n ? 'black' : n },
      };
    }
    function P(e) {
      return (
        null != e.onPress ||
        null != e.onPressIn ||
        null != e.onPressOut ||
        null != e.onLongPress
      );
    }
    function b(e, d) {
      var b = e.activeOpacity,
        O = e.children,
        h = e.delayPressIn,
        v = e.delayPressOut,
        _ = e.delayLongPress,
        j = e.disabled,
        L = e.focusable,
        C = e.onHideUnderlay,
        E = e.onLongPress,
        S = e.onPress,
        k = e.onPressIn,
        I = e.onPressOut,
        w = e.onShowUnderlay,
        M = e.rejectResponderTermination,
        R = e.style,
        U = e.testOnly_pressed,
        H = e.underlayColor,
        T = (0, l.default)(e, y),
        D = (0, s.useRef)(null),
        x = (0, o.default)(d, D),
        A = (0, s.useState)(!0 === U ? f(b, H) : null),
        N = A[0],
        q = A[1],
        z = (0, s.useCallback)(() => {
          P(e) && (q(f(b, H)), null != w && w());
        }, [b, w, e, H]),
        B = (0, s.useCallback)(() => {
          !0 !== U && P(e) && (q(null), null != C && C());
        }, [C, e, U]),
        F = (0, s.useMemo)(
          () => ({
            cancelable: !M,
            disabled: j,
            delayLongPress: _,
            delayPressStart: h,
            delayPressEnd: v,
            onLongPress: E,
            onPress: S,
            onPressStart(e) {
              (z(), null != k && k(e));
            },
            onPressEnd(e) {
              (B(), null != I && I(e));
            },
          }),
          [_, h, v, j, E, S, k, I, M, z, B],
        ),
        G = (0, u.default)(D, F),
        J = t.Children.only(O);
      return t.createElement(
        c.default,
        (0, n.default)({}, T, G, {
          accessibilityDisabled: j,
          focusable: !j && !1 !== L,
          pointerEvents: j ? 'box-none' : void 0,
          ref: x,
          style: [p.root, R, !j && p.actionable, N && N.underlay],
        }),
        t.cloneElement(J, { style: [J.props.style, N && N.child] }),
      );
    }
    var p = d.default.create({
        root: { userSelect: 'none' },
        actionable: { cursor: 'pointer', touchAction: 'manipulation' },
      }),
      O = t.memo(t.forwardRef(b));
    O.displayName = 'TouchableHighlight';
    var h = O;
  },
  247,
  [96, 16, 2, 104, 220, 17, 99],
);
