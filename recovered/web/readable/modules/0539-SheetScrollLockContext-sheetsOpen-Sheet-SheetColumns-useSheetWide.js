// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 539; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'SheetScrollLockContext', {
        enumerable: !0,
        get: function () {
          return I;
        },
      }),
      Object.defineProperty(_e, 'sheetsOpen', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      (_e.Sheet = function ({
        visible: e,
        title: C,
        onClose: v,
        children: S,
        wide: L = !1,
        onSubmit: M,
        busy: _ = !1,
        footer: z,
      }) {
        const { colors: H, mode: K } = (0, x.useTheme)(),
          O = (0, t.useDesktop)(),
          W = (0, f.useSafeInsets)(),
          F = (0, h.useKeyboardVisible)(),
          G = O && L,
          N = (0, s.useRef)(null),
          q = (0, s.useRef)(M);
        ((q.current = M),
          (0, s.useEffect)(() => {
            if (!e || !G || 'undefined' == typeof document) return;
            const t = (e) => {
              if ('Enter' !== e.key || (!e.ctrlKey && !e.metaKey) || !q.current)
                return;
              const t = N.current;
              t?.contains?.(document.activeElement) &&
                (e.preventDefault(), q.current());
            };
            return (
              document.addEventListener('keydown', t, !0),
              () => document.removeEventListener('keydown', t, !0)
            );
          }, [e, G]));
        const A = (0, s.useRef)(new Set()),
          [J, Q] = (0, s.useState)(!1),
          U = !1,
          X = (0, s.useRef)(new o.default.Value(0)).current,
          Y = (0, s.useRef)(480),
          Z = (0, s.useRef)({ onClose: v, busy: _ });
        Z.current = { onClose: v, busy: _ };
        const $ = () => {};
        (0, s.useEffect)(() => {}, [e]);
        const ee = (0, s.useRef)(() => !1),
          te = (0, s.useRef)(!0),
          ne = (0, s.useRef)(e);
        ((ne.current = e),
          (0, s.useEffect)(
            () => (
              (te.current = !0),
              () => {
                te.current = !1;
              }
            ),
            [],
          ));
        const re = () =>
            o.default
              .spring(X, {
                toValue: 0,
                bounciness: 0,
                speed: 18,
                useNativeDriver: !0,
              })
              .start(),
          se =
            ((0, R.usePullDown)({
              enabled: () => U,
              move: (e) => X.setValue(e),
              end: (e, t) => {
                (0, k.swipeDownGoesBack)(e, t, Y.current)
                  ? o.default
                      .timing(X, {
                        toValue: Y.current + 60,
                        duration: 200,
                        easing: l.default.out(l.default.cubic),
                        useNativeDriver: !0,
                      })
                      .start(() => {
                        (Z.current.onClose(),
                          setTimeout(() => {
                            te.current && ne.current && re();
                          }, 260));
                      })
                  : re();
              },
            }),
            X.interpolate({
              inputRange: [0, 480],
              outputRange: [1, 0],
              extrapolate: 'clamp',
            }),
            (0, s.useCallback)((e, t) => {
              (t ? A.current.add(e) : A.current.delete(e),
                Q(A.current.size > 0));
            }, []));
        return (
          (0, s.useEffect)(() => {
            e || (A.current.clear(), Q(!1));
          }, [e]),
          (0, s.useEffect)(() => {
            if (e)
              return (
                T++,
                B.forEach((e) => e()),
                () => {
                  (T--, B.forEach((e) => e()));
                }
              );
          }, [e]),
          (0, D.jsx)(n.Modal, {
            visible: e,
            transparent: !0,
            animationType: 'none',
            onShow: $,
            onRequestClose: v,
            children: (0, D.jsx)(w.SwipeBack, {
              enabled: !_ && !J,
              topRef: ee,
              onBack: v,
              children: (0, D.jsxs)(i.default, {
                behavior: h.keyboardBehavior,
                style: {
                  flex: 1,
                  justifyContent: O ? 'center' : 'flex-end',
                  alignItems: 'center',
                  backgroundColor: '#08090ba6',
                  padding: O ? 16 : 0,
                  paddingTop: Math.max(O ? 16 : 0, W.top + 8),
                },
                children: [
                  false,
                  (0, D.jsx)(E.Backdrop, {
                    testID: 'sheet-backdrop',
                    onClose: v,
                    locked: _,
                  }),
                  (0, D.jsxs)(o.default.View, {
                    ref: N,
                    onLayout: (e) => {
                      Y.current = e.nativeEvent.layout.height;
                    },
                    style: [
                      (0, j.glassStyle)(K, 'web'),
                      !1,
                      {
                        width: '100%',
                        maxWidth: G ? 1e3 : O ? 620 : 470,
                        maxHeight: G ? '92%' : '88%',
                        flexShrink: 1,
                        padding: G ? 24 : 16,
                        paddingTop: G ? 18 : 10,
                        paddingBottom:
                          O || F ? (G ? 22 : 16) : Math.max(16, W.bottom + 12),
                        borderTopLeftRadius: 28,
                        borderTopRightRadius: 28,
                        borderBottomLeftRadius: O ? 28 : 0,
                        borderBottomRightRadius: O ? 28 : 0,
                        gap: 14,
                      },
                      null,
                    ],
                    children: [
                      (0, D.jsxs)(c.default, {
                        testID: 'sheet-pull',
                        style: { gap: 14, paddingTop: 0, marginTop: 0 },
                        children: [
                          !G &&
                            (0, D.jsx)(c.default, {
                              accessibilityElementsHidden: !0,
                              style: {
                                width: 42,
                                height: 5,
                                borderRadius: 3,
                                backgroundColor: H.glassMuted,
                                opacity: 0.55,
                                alignSelf: 'center',
                                marginBottom: 2,
                              },
                            }),
                          (0, D.jsxs)(c.default, {
                            style: {
                              flexDirection: 'row',
                              direction: 'ltr',
                              alignItems: 'center',
                              gap: 12,
                            },
                            children: [
                              (0, D.jsx)(u.default, {
                                testID: 'dialog-close',
                                accessibilityRole: 'button',
                                accessibilityLabel: y.fa.dismiss,
                                onPress: v,
                                style: {
                                  width: 36,
                                  height: 36,
                                  borderRadius: 18,
                                  backgroundColor: H.soft,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  borderWidth: 1,
                                  borderColor: H.glassHighlight,
                                },
                                children: (0, D.jsx)(p.Icon, {
                                  name: 'close',
                                  color: H.text,
                                  size: 20,
                                }),
                              }),
                              (0, D.jsx)(b.Copy, {
                                style: {
                                  flex: 1,
                                  fontSize: 18,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: C,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, D.jsx)(I.Provider, {
                        value: se,
                        children: (0, D.jsx)(V.Provider, {
                          value: G,
                          children: (0, D.jsx)(h.KeyboardScrollView, {
                            nestedScrollEnabled: !0,
                            scrollEnabled: !J,
                            style: { flexGrow: 0, flexShrink: 1 },
                            contentContainerStyle: {
                              gap: 14,
                              paddingBottom: 2,
                            },
                            showsVerticalScrollIndicator: !1,
                            children: S,
                          }),
                        }),
                      }),
                      !!z &&
                        (0, D.jsx)(c.default, {
                          testID: 'sheet-footer',
                          style: { flexShrink: 0, gap: 10 },
                          children: z,
                        }),
                    ],
                  }),
                  G && (0, D.jsx)(P, { submit: !!M }),
                ],
              }),
            }),
          })
        );
      }),
      (_e.SheetColumns = function ({ items: e, gap: t = 14 }) {
        if (!(0, s.useContext)(V))
          return (0, D.jsx)(D.Fragment, {
            children: e.map(([e], t) =>
              (0, D.jsx)(s.Fragment, { children: e }, t),
            ),
          });
        const n = (n) =>
          (0, D.jsx)(c.default, {
            style: { flex: 1, minWidth: 0, gap: t },
            children: e
              .filter((e) => e[1] === n)
              .map(([e], t) => (0, D.jsx)(s.Fragment, { children: e }, t)),
          });
        return (0, D.jsxs)(c.default, {
          testID: 'sheet-columns',
          style: {
            flexDirection: 'row-reverse',
            gap: 28,
            alignItems: 'flex-start',
          },
          children: [n('start'), n('end')],
        });
      }),
      Object.defineProperty(_e, 'useSheetWide', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]),
      s = r(d[2]),
      o = e(r(d[3])),
      l = e(r(d[4])),
      i = e(r(d[5]));
    r(d[6]);
    var u = e(r(d[7])),
      c = e(r(d[8])),
      f = r(d[9]),
      h = r(d[10]),
      p = r(d[11]),
      b = r(d[12]),
      x = r(d[13]),
      y = r(d[14]),
      j = r(d[15]),
      C = r(d[16]),
      v = r(d[17]),
      S = r(d[18]),
      w = r(d[19]),
      R = r(d[20]),
      k = r(d[21]),
      E = r(d[22]),
      D = r(d[23]);
    (0, C.ensureModalStacking)();
    const I = (0, n.carryContext)((0, s.createContext)(() => {}));
    let T = 0;
    const B = new Set(),
      L = {
        count: () => T,
        subscribe: (e) => (
          B.add(e),
          () => {
            B.delete(e);
          }
        ),
      },
      V = (0, n.carryContext)((0, s.createContext)(!1));
    function P({ submit: e }) {
      const { colors: t } = (0, x.useTheme)(),
        n = (e, n) =>
          (0, D.jsxs)(
            c.default,
            {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 6,
              },
              children: [
                (0, D.jsx)(v.KeyCaps, { keys: e }),
                (0, D.jsx)(b.Copy, {
                  style: { fontSize: 11.5, lineHeight: 18, color: t.muted },
                  children: n,
                }),
              ],
            },
            n,
          );
      return (0, D.jsx)(c.default, {
        testID: 'sheet-hints',
        style: {
          marginTop: 12,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 16,
          paddingHorizontal: 14,
          paddingVertical: 6,
          borderRadius: 12,
          backgroundColor: t.surface,
          borderWidth: 1,
          borderColor: t.line,
        },
        children: [
          n(['Tab'], (0, S.L)('\u0641\u06cc\u0644\u062f \u0628\u0639\u062f')),
          e ? n(['Ctrl', 'Enter'], (0, S.L)('\u062b\u0628\u062a')) : null,
          n(['Esc'], (0, S.L)('\u0628\u0633\u062a\u0646')),
        ],
      });
    }
    const M = () => (0, s.useContext)(V);
  },
  539,
  [
    481, 381, 2, 92, 196, 224, 94, 232, 99, 540, 480, 385, 407, 382, 492, 541,
    535, 531, 311, 515, 380, 384, 533, 338,
  ],
);
