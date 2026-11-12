// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 525; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.showToast = function (e, t = 'done') {
        ((w = { id: v++, text: e, tone: t }), j());
      }),
      (_e.ToastHost = function () {
        const { colors: e } = (0, f.useTheme)(),
          I = (0, c.useSafeAreaInsets)(),
          V = (0, h.useReducedMotion)(),
          [_] = (0, t.useState)(() => v++),
          [, z] = (0, t.useState)(0),
          [C, T] = (0, t.useState)(null),
          E = (0, t.useRef)(new n.default.Value(0)).current;
        (0, t.useEffect)(() => {
          R.push(_);
          const e = () => z((e) => e + 1);
          return (
            y.add(e),
            j(),
            () => {
              (y.delete(e), R.splice(R.indexOf(_), 1), j());
            }
          );
        }, [_]);
        const O = R[R.length - 1] === _ ? w : null;
        return (
          (0, t.useEffect)(() => {
            const e = !1;
            if (O) {
              (T(O),
                E.setValue(V ? 1 : 0),
                V ||
                  n.default
                    .timing(E, {
                      toValue: 1,
                      duration: 220,
                      easing: o.default.out(o.default.cubic),
                      useNativeDriver: e,
                    })
                    .start());
              const t = setTimeout(() => S(O.id), 3500);
              return () => clearTimeout(t);
            }
            V
              ? T(null)
              : n.default
                  .timing(E, {
                    toValue: 0,
                    duration: 180,
                    easing: o.default.in(o.default.cubic),
                    useNativeDriver: e,
                  })
                  .start(({ finished: e }) => {
                    e && T(null);
                  });
          }, [O?.id, V]),
          C
            ? (0, b.jsx)(u.default, {
                pointerEvents: 'box-none',
                style: [
                  l.default.absoluteFill,
                  { zIndex: 1e3, elevation: 1e3 },
                ],
                children: (0, b.jsx)(n.default.View, {
                  pointerEvents: 'box-none',
                  style: {
                    paddingTop: Math.max(I.top, 8) + 4,
                    paddingHorizontal: 16,
                    alignItems: 'center',
                    opacity: E,
                    transform: [
                      {
                        translateY: E.interpolate({
                          inputRange: [0, 1],
                          outputRange: [-24, 0],
                        }),
                      },
                    ],
                  },
                  children: (0, b.jsxs)(s.default, {
                    testID: 'toast',
                    accessibilityRole: 'alert',
                    accessibilityLiveRegion: 'polite',
                    onPress: () => S(C.id),
                    style: {
                      width: '100%',
                      maxWidth: 480,
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 10,
                      paddingHorizontal: 14,
                      paddingVertical: 12,
                      borderRadius: 16,
                      backgroundColor: e.surface,
                      borderWidth: l.default.hairlineWidth,
                      borderColor: e.line,
                      shadowColor: '#000',
                      shadowOpacity: 0.14,
                      shadowRadius: 16,
                      shadowOffset: { width: 0, height: 6 },
                      elevation: 6,
                    },
                    children: [
                      (0, b.jsx)(u.default, {
                        style: {
                          width: 26,
                          height: 26,
                          borderRadius: 13,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor:
                            'wait' === C.tone ? e.soft : e.success,
                        },
                        children: (0, b.jsx)(p.Icon, {
                          name: 'wait' === C.tone ? 'clock' : 'check',
                          size: 16,
                          color: 'wait' === C.tone ? e.text : e.onSuccess,
                        }),
                      }),
                      (0, b.jsx)(x.Copy, {
                        numberOfLines: 2,
                        style: {
                          flex: 1,
                          fontSize: 14,
                          lineHeight: 22,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: C.text,
                      }),
                    ],
                  }),
                }),
              })
            : null
        );
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2]));
    r(d[3]);
    var s = e(r(d[4])),
      l = e(r(d[5])),
      u = e(r(d[6])),
      c = r(d[7]),
      f = r(d[8]),
      h = r(d[9]),
      p = r(d[10]),
      x = r(d[11]),
      b = r(d[12]);
    let w = null,
      v = 1;
    const y = new Set(),
      R = [],
      j = () => y.forEach((e) => e());
    function S(e) {
      w?.id === e && ((w = null), j());
    }
  },
  525,
  [2, 92, 196, 94, 232, 17, 99, 342, 382, 414, 385, 407, 338],
);
