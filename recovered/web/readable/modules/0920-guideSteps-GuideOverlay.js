// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 920; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.guideSteps = x),
      (_e.GuideOverlay = function ({ info: t, tab: w, setTab: j }) {
        const { colors: C, mode: v } = (0, c.useTheme)(),
          L = (0, r.useSafeAreaInsets)(),
          I = (0, l.default)(),
          S = p(),
          k = I.width / S,
          R = I.height / S,
          z = (0, e.useMemo)(() => x(t), [t.lowItem]),
          [M, _] = (0, e.useState)(0),
          [H, B] = (0, e.useState)(null),
          D = z[Math.min(M, z.length - 1)],
          E = M >= z.length - 1,
          F = 'undefined' != typeof document,
          P = (0, e.useRef)(-1),
          T = h.howToGreens['dark' === v ? 'dark' : 'light'];
        ((0, e.useEffect)(() => {
          D.tab && w !== D.tab && j(D.tab);
        }, [M]),
          (0, e.useEffect)(() => {
            if (!F) return void B(null);
            let t = !0,
              e = 0;
            const o = () => {
              if (!t) return;
              const o = document.querySelector(`[data-testid="${D.target}"]`);
              if (o) {
                const t = o.getBoundingClientRect(),
                  i =
                    !D.target.startsWith('tab-') &&
                    (t.top < 70 || t.bottom > window.innerHeight - 130);
                (P.current !== M || (i && e < 6)) &&
                  ((P.current = M),
                  e++,
                  o.scrollIntoView({
                    block: 'center',
                    behavior: e > 1 ? 'auto' : 'smooth',
                  }));
                const n = o.getBoundingClientRect(),
                  l = p(),
                  s = {
                    left: n.left / l,
                    top: n.top / l,
                    width: n.width / l,
                    height: n.height / l,
                  };
                s.width > 0 &&
                  B((t) =>
                    t &&
                    Math.abs(t.x - s.left) < 1 &&
                    Math.abs(t.y - s.top) < 1 &&
                    Math.abs(t.w - s.width) < 1 &&
                    Math.abs(t.h - s.height) < 1
                      ? t
                      : { x: s.left, y: s.top, w: s.width, h: s.height },
                  );
              } else B(null);
            };
            o();
            const i = setInterval(o, 250);
            return () => {
              ((t = !1), clearInterval(i));
            };
          }, [M, F, D.target]));
        const V = 'rgba(8,9,11,0.6)',
          O = H
            ? {
                x: Math.max(4, H.x - 8),
                y: Math.max(4, H.y - 8),
                w: Math.min(k - 8, H.w + 16),
                h: H.h + 16,
              }
            : null,
          W = E ? 250 : 220,
          G = !O || O.y + O.h + W + 16 < R,
          N = O
            ? G
              ? O.y + O.h + 14
              : Math.max(64 + L.top, O.y - 14 - W)
            : void 0,
          A = (0, f.L)('{i} \u0627\u0632 {n}', {
            i: (M + 1).toLocaleString((0, f.numberLocale)()),
            n: z.length.toLocaleString((0, f.numberLocale)()),
          });
        return (0, y.jsx)(b.GuidePortal, {
          children: (0, y.jsxs)(n.default, {
            testID: 'guide',
            pointerEvents: 'box-none',
            style: [
              { position: 'absolute' },
              { top: 0, left: 0, right: 0, bottom: 0 },
              F && { zIndex: 1e3 },
            ],
            children: [
              O
                ? (0, y.jsxs)(y.Fragment, {
                    children: [
                      (0, y.jsx)(n.default, {
                        style: {
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: 0,
                          height: O.y,
                          backgroundColor: V,
                        },
                      }),
                      (0, y.jsx)(n.default, {
                        style: {
                          position: 'absolute',
                          left: 0,
                          right: 0,
                          top: O.y + O.h,
                          bottom: 0,
                          backgroundColor: V,
                        },
                      }),
                      (0, y.jsx)(n.default, {
                        style: {
                          position: 'absolute',
                          left: 0,
                          width: O.x,
                          top: O.y,
                          height: O.h,
                          backgroundColor: V,
                        },
                      }),
                      (0, y.jsx)(n.default, {
                        style: {
                          position: 'absolute',
                          left: O.x + O.w,
                          right: 0,
                          top: O.y,
                          height: O.h,
                          backgroundColor: V,
                        },
                      }),
                      (0, y.jsx)(n.default, {
                        pointerEvents: 'auto',
                        style: {
                          position: 'absolute',
                          left: O.x,
                          top: O.y,
                          width: O.w,
                          height: O.h,
                          borderRadius: 18,
                          borderWidth: 3,
                          borderColor: '#5eead4',
                          shadowColor: '#5eead4',
                          shadowOpacity: 0.8,
                          shadowRadius: 14,
                        },
                      }),
                    ],
                  })
                : (0, y.jsx)(n.default, {
                    style: {
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      backgroundColor: V,
                    },
                  }),
              !!t.onLogin &&
                (0, y.jsx)(o.default, {
                  testID: 'guide-signin',
                  accessibilityRole: 'button',
                  onPress: t.onLogin,
                  hitSlop: 8,
                  style: ({ pressed: t }) => ({
                    position: 'absolute',
                    top: L.top + 12,
                    left: 16,
                    height: 40,
                    paddingHorizontal: 18,
                    borderRadius: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: C.surface,
                    borderWidth: 1.5,
                    borderColor: C.accent,
                    opacity: t ? 0.8 : 1,
                    shadowColor: '#000',
                    shadowOpacity: 0.2,
                    shadowRadius: 8,
                    elevation: 4,
                  }),
                  children: (0, y.jsx)(u.Copy, {
                    style: {
                      fontSize: 14,
                      lineHeight: 22,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: (0, f.L)('\u0648\u0631\u0648\u062f'),
                  }),
                }),
              (0, y.jsx)(n.default, {
                testID: 'guide-bubble',
                pointerEvents: 'box-none',
                style: {
                  position: 'absolute',
                  left: 12,
                  right: 12,
                  ...(void 0 !== N
                    ? { top: N }
                    : { top: 0, bottom: 0, justifyContent: 'center' }),
                  alignItems: 'center',
                },
                children: (0, y.jsxs)(n.default, {
                  style: {
                    width: '100%',
                    maxWidth: 420,
                    borderRadius: 24,
                    overflow: 'hidden',
                    backgroundColor: C.surface,
                    shadowColor: '#000',
                    shadowOpacity: 0.28,
                    shadowRadius: 18,
                    elevation: 8,
                  },
                  children: [
                    (0, y.jsxs)(n.default, {
                      style: {
                        paddingHorizontal: 18,
                        paddingTop: 14,
                        paddingBottom: 12,
                        gap: 6,
                        backgroundColor: T[1],
                      },
                      children: [
                        (0, y.jsx)(s.LinearGradient, {
                          pointerEvents: 'none',
                          colors: [...T],
                          start: { x: 1, y: 0 },
                          end: { x: 0, y: 1 },
                          style: i.default.absoluteFill,
                        }),
                        (0, y.jsxs)(n.default, {
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                          },
                          children: [
                            (0, y.jsx)(n.default, {
                              accessibilityLabel: A,
                              style: { flexDirection: 'row-reverse', gap: 5 },
                              children: z.map((t, e) =>
                                (0, y.jsx)(
                                  n.default,
                                  {
                                    style: {
                                      height: 6,
                                      width: e === M ? 22 : 6,
                                      borderRadius: 3,
                                      backgroundColor:
                                        e <= M
                                          ? '#ffffff'
                                          : 'rgba(255,255,255,.4)',
                                    },
                                  },
                                  e,
                                ),
                              ),
                            }),
                            !E &&
                              (0, y.jsx)(o.default, {
                                testID: 'guide-skip',
                                accessibilityRole: 'button',
                                onPress: t.onNotebook,
                                hitSlop: 10,
                                children: (0, y.jsx)(u.Copy, {
                                  style: {
                                    fontSize: 13,
                                    lineHeight: 20,
                                    color: '#ffffff',
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                    opacity: 0.9,
                                  },
                                  children: (0, f.L)(
                                    '\u0631\u062f \u06a9\u0631\u062f\u0646',
                                  ),
                                }),
                              }),
                          ],
                        }),
                        (0, y.jsx)(u.Copy, {
                          accessibilityRole: 'header',
                          style: {
                            fontSize: 21,
                            lineHeight: 32,
                            fontFamily: 'Vazirmatn_700Bold',
                            color: '#ffffff',
                          },
                          children: D.title,
                        }),
                      ],
                    }),
                    (0, y.jsxs)(n.default, {
                      style: { padding: 18, paddingTop: 14, gap: 14 },
                      children: [
                        (0, y.jsx)(u.Copy, {
                          style: {
                            fontSize: 15,
                            lineHeight: 26,
                            color: C.muted,
                          },
                          children: D.body,
                        }),
                        (0, y.jsx)(o.default, {
                          testID: 'guide-next',
                          accessibilityRole: 'button',
                          onPress: () => {
                            E ? t.onNotebook() : _((t) => t + 1);
                          },
                          style: ({ pressed: t }) => ({
                            height: 50,
                            borderRadius: 16,
                            backgroundColor: C.accent,
                            alignItems: 'center',
                            justifyContent: 'center',
                            transform: [{ scale: t ? 0.98 : 1 }],
                          }),
                          children: (0, y.jsx)(u.Copy, {
                            style: {
                              fontSize: 16,
                              lineHeight: 24,
                              color: C.onAccent,
                              fontFamily: 'Vazirmatn_700Bold',
                            },
                            children: E
                              ? (0, f.L)(
                                  '\u0628\u0632\u0646 \u0628\u0631\u06cc\u0645',
                                )
                              : (0, f.L)('\u0628\u0639\u062f\u06cc'),
                          }),
                        }),
                        E &&
                          (0, y.jsx)(o.default, {
                            testID: 'guide-want',
                            accessibilityRole: 'button',
                            onPress: t.onWant,
                            hitSlop: 8,
                            style: { alignItems: 'center', marginTop: -4 },
                            children: (0, y.jsx)(u.Copy, {
                              style: {
                                fontSize: 14,
                                lineHeight: 22,
                                color: C.accent,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: (0, f.L)(
                                '\u0633\u0627\u062e\u062a \u0645\u063a\u0627\u0632\u0647\u0654 \u062e\u0648\u062f\u0645',
                              ),
                            }),
                          }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }));
    var e = _r(d[0]);
    _r(d[1]);
    var o = t(_r(d[2])),
      i = t(_r(d[3])),
      n = t(_r(d[4])),
      l = t(_r(d[5])),
      s = _r(d[6]),
      r = _r(d[7]),
      u = _r(d[8]),
      h = _r(d[9]),
      c = _r(d[10]),
      f = _r(d[11]),
      b = _r(d[12]),
      y = _r(d[13]);
    const p = () => {
      if ('undefined' == typeof document) return 1;
      const t = Number(getComputedStyle(document.documentElement).zoom);
      return t > 0 ? t : 1;
    };
    function x(t) {
      return [
        {
          tab: 'inventory',
          target: 'tab-inventory',
          title: (0, f.L)(
            '\u0627\u06cc\u0646 \u0645\u0648\u062c\u0648\u062f\u06cc\u200c\u062a\u0647',
          ),
          body: t.lowItem
            ? (0, f.L)(
                '\u0645\u0648\u062c\u0648\u062f\u06cc \u0648 \u0642\u06cc\u0645\u062a \u0647\u0631 \u06a9\u0627\u0644\u0627 \u062c\u0644\u0648\u06cc \u0686\u0634\u0645\u062a\u0647. \xab{item}\xbb \u062f\u0627\u0631\u0647 \u062a\u0645\u0648\u0645 \u0645\u06cc\u200c\u0634\u0647\u061b \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0632\u0648\u062f\u062a\u0631 \u062e\u0628\u0631\u062a \u0645\u06cc\u200c\u06a9\u0646\u0647.',
                { item: t.lowItem },
              )
            : (0, f.L)(
                '\u0645\u0648\u062c\u0648\u062f\u06cc \u0648 \u0642\u06cc\u0645\u062a \u0647\u0631 \u06a9\u0627\u0644\u0627 \u062c\u0644\u0648\u06cc \u0686\u0634\u0645\u062a\u0647\u061b \u0647\u0631 \u0641\u0631\u0648\u0634 \u062e\u0648\u062f\u0634 \u0627\u0632 \u0627\u0646\u0628\u0627\u0631 \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0647.',
              ),
        },
        {
          target: 'tab-add',
          title: (0, f.L)(
            '\u0627\u0632 \u0627\u06cc\u0646\u062c\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646',
          ),
          body: (0, f.L)(
            '\u0641\u0631\u0648\u0634 \u06cc\u0627 \u062e\u0631\u06cc\u062f \u0631\u0648 \u0628\u0627 \u062f\u06a9\u0645\u0647\u0654 \u0633\u0628\u0632 \xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \u062b\u0628\u062a \u06a9\u0646: \u0628\u0646\u0648\u06cc\u0633\u060c \u0627\u0632 \xab\u0627\u062e\u06cc\u0631\u0627\u064b\xbb \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u060c \u06cc\u0627 \u0641\u0642\u0637 \u0628\u06af\u0648 \xab\u062f\u0647 \u062a\u0627 \u0634\u06cc\u0631 \u0641\u0631\u0648\u062e\u062a\u0645\xbb.',
          ),
        },
        {
          tab: 'home',
          target: 'home-shortcut-learn',
          title: (0, f.L)(
            '\u062f\u0631\u0633\u200c\u0647\u0627\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0627\u06cc\u0646\u062c\u0627\u0633\u062a',
          ),
          body: (0, f.L)(
            '\u0647\u0631 \u0648\u0642\u062a \u0633\u0624\u0627\u0644\u06cc \u062f\u0627\u0634\u062a\u06cc\u060c \xab\u0622\u0645\u0648\u0632\u0634\xbb \u062a\u0648\u06cc \u062f\u0627\u0634\u0628\u0648\u0631\u062f \u062f\u0631\u0633\u200c\u0647\u0627\u06cc \u06a9\u0648\u062a\u0627\u0647 \u0648\u06cc\u062f\u06cc\u0648\u06cc\u06cc \u062f\u0627\u0631\u0647.',
          ),
        },
      ];
    }
  },
  920,
  [2, 94, 232, 17, 99, 257, 411, 342, 407, 558, 382, 311, 921, 338],
);
