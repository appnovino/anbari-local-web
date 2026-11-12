// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 877; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.CalmPrompts = function ({ prompts: e, onPlans: t }) {
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsx)(j, { prompts: e, onPlans: t }),
            (0, y.jsx)(L, { prompts: e }),
          ],
        });
      }));
    var t = e(r(d[0])),
      s = e(r(d[1])),
      o = e(r(d[2])),
      l = r(d[3]),
      n = r(d[4]),
      i = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      f = r(d[8]),
      h = r(d[9]),
      b = r(d[10]),
      x = r(d[11]),
      y = r(d[12]);
    const p = (e) => e.toLocaleString((0, x.numberLocale)());
    function j({ prompts: e, onPlans: t }) {
      const { colors: s } = (0, u.useTheme)(),
        i = (0, c.useSafeAreaInsets)(),
        j = e.free,
        L = 'out' === j?.step,
        D = j?.counts || { limit: 0, used: 0, left: 0 },
        k = e.closeFree;
      return (0, y.jsx)(l.Modal, {
        visible: !!j,
        transparent: !0,
        animationType: 'fade',
        onRequestClose: k,
        children: (0, y.jsxs)(o.default, {
          style: [
            I.backdrop,
            { paddingTop: i.top + 16, paddingBottom: i.bottom + 16 },
          ],
          children: [
            (0, y.jsx)(b.Backdrop, {
              testID: 'free-usage-backdrop',
              label: L
                ? (0, x.L)('\u0628\u0639\u062f\u0627\u064b')
                : (0, x.L)('\u0627\u062f\u0627\u0645\u0647'),
              onClose: k,
            }),
            (0, y.jsx)(n.PullCard, {
              onClose: k,
              style: I.box,
              children: (0, y.jsxs)(f.Card, {
                testID: 'free-usage-popup',
                style: { padding: 18, gap: 14 },
                children: [
                  (0, y.jsxs)(o.default, {
                    style: f.common.between,
                    children: [
                      (0, y.jsx)(o.default, {
                        style: [I.badge, { backgroundColor: s.accentSoft }],
                        children: (0, y.jsx)(h.Icon, {
                          name: 'bolt',
                          size: 22,
                          color: s.accent,
                        }),
                      }),
                      (0, y.jsx)(b.CloseX, {
                        testID: 'free-usage-close',
                        onPress: k,
                      }),
                    ],
                  }),
                  (0, y.jsx)(C, { used: D.used, limit: D.limit }),
                  L
                    ? (0, y.jsx)(f.Copy, {
                        accessibilityRole: 'header',
                        testID: 'free-usage-text',
                        style: I.title,
                        children: (0, x.L)(
                          '{limit} \u06a9\u0627\u0631 \u0627\u0645\u062a\u062d\u0627\u0646\u06cc\u200c\u0627\u062a \u062a\u0645\u0648\u0645 \u0634\u062f. \u0628\u0627 \u0627\u0634\u062a\u0631\u0627\u06a9\u060c \u06a9\u0627\u0631 \u0646\u0627\u0645\u062d\u062f\u0648\u062f \u062f\u0627\u0631\u06cc.',
                          { limit: p(D.limit) },
                        ),
                      })
                    : (0, y.jsxs)(y.Fragment, {
                        children: [
                          (0, y.jsx)(f.Copy, {
                            accessibilityRole: 'header',
                            testID: 'free-usage-text',
                            style: I.title,
                            children: (0, x.L)(
                              '\u0627\u0632 {limit} \u06a9\u0627\u0631 \u0627\u0645\u062a\u062d\u0627\u0646\u06cc\u060c {used} \u062a\u0627\u0634\u0648 \u0627\u0646\u062c\u0627\u0645 \u062f\u0627\u062f\u06cc\u061b {left} \u062a\u0627\u06cc \u062f\u06cc\u06af\u0647 \u0645\u0648\u0646\u062f\u0647.',
                              {
                                limit: p(D.limit),
                                used: p(D.used),
                                left: p(D.left),
                              },
                            ),
                          }),
                          (0, y.jsx)(f.Copy, {
                            style: [I.body, { color: s.muted }],
                            children: (0, x.L)(
                              '\u0627\u06cc\u0646 \u0637\u0631\u062d \u0631\u0627\u06cc\u06af\u0627\u0646\u0647 \u06a9\u0647 \u0628\u0627 \u0628\u0631\u0646\u0627\u0645\u0647 \u0622\u0634\u0646\u0627 \u0628\u0634\u06cc\u061b \u0627\u06af\u0647 \u062f\u0648\u0633\u062a \u062f\u0627\u0631\u06cc \u0627\u0632 \u0628\u062e\u0634 \u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u0647\u0627 \u0627\u0634\u062a\u0631\u0627\u06a9 \u062a\u0647\u06cc\u0647 \u06a9\u0646.',
                            ),
                          }),
                        ],
                      }),
                  (0, y.jsxs)(o.default, {
                    style: f.common.row,
                    children: [
                      (0, y.jsx)(o.default, {
                        style: f.common.flex,
                        children: (0, y.jsx)(f.Button, {
                          testID: L
                            ? 'free-usage-later'
                            : 'free-usage-continue',
                          secondary: !0,
                          onPress: k,
                          children: L
                            ? (0, x.L)('\u0628\u0639\u062f\u0627\u064b')
                            : (0, x.L)('\u0627\u062f\u0627\u0645\u0647'),
                        }),
                      }),
                      (0, y.jsx)(o.default, {
                        style: f.common.flex,
                        children: (0, y.jsx)(f.Button, {
                          testID: 'free-usage-buy',
                          onPress: () => {
                            (k(), t());
                          },
                          children: (0, x.L)(
                            '\u062e\u0631\u06cc\u062f \u0627\u0634\u062a\u0631\u0627\u06a9',
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
    }
    function C({ used: e, limit: t }) {
      const { colors: s } = (0, u.useTheme)(),
        l = (0, x.L)('{used} \u0627\u0632 {limit}', {
          used: p(e),
          limit: p(t),
        });
      return t <= 0
        ? null
        : t > 10
          ? (0, y.jsx)(o.default, {
              accessible: !0,
              accessibilityLabel: l,
              testID: 'free-usage-meter',
              style: [I.bar, { backgroundColor: s.soft }],
              children: (0, y.jsx)(o.default, {
                style: {
                  width: `${Math.round((e / t) * 100)}%`,
                  height: '100%',
                  borderRadius: 5,
                  backgroundColor: s.brand[1],
                },
                children: (0, y.jsx)(i.BrandFill, { radius: 5 }),
              }),
            })
          : (0, y.jsx)(o.default, {
              accessible: !0,
              accessibilityLabel: l,
              testID: 'free-usage-meter',
              style: { flexDirection: 'row-reverse', gap: 6 },
              children: Array.from({ length: t }, (t, l) =>
                (0, y.jsx)(
                  o.default,
                  {
                    style: [
                      I.cell,
                      l < e
                        ? { backgroundColor: s.accent, borderColor: s.accent }
                        : { backgroundColor: s.soft, borderColor: s.line },
                    ],
                  },
                  l,
                ),
              ),
            });
    }
    function L({ prompts: e }) {
      const { colors: s } = (0, u.useTheme)(),
        i = (0, c.useSafeAreaInsets)(),
        p = e.rating;
      return (0, y.jsx)(l.Modal, {
        visible: !!p,
        transparent: !0,
        animationType: 'fade',
        onRequestClose: e.ratingLater,
        children: (0, y.jsxs)(o.default, {
          style: [
            I.backdrop,
            {
              justifyContent: 'flex-end',
              backgroundColor: '#08090b80',
              paddingTop: i.top + 16,
              paddingBottom: Math.max(i.bottom, 12) + 12,
            },
          ],
          children: [
            (0, y.jsx)(b.Backdrop, {
              testID: 'rating-backdrop',
              label: (0, x.L)('\u0628\u0639\u062f\u0627\u064b'),
              onClose: e.ratingLater,
            }),
            (0, y.jsx)(n.PullCard, {
              onClose: e.ratingLater,
              style: I.box,
              children: (0, y.jsxs)(f.Card, {
                testID: 'rating-prompt',
                style: { padding: 18, gap: 12 },
                children: [
                  (0, y.jsxs)(o.default, {
                    style: f.common.between,
                    children: [
                      (0, y.jsx)(o.default, {
                        style: [I.badge, { backgroundColor: s.accentSoft }],
                        children: (0, y.jsx)(h.Icon, {
                          name: 'star',
                          active: !0,
                          size: 22,
                          color: s.accent,
                        }),
                      }),
                      (0, y.jsx)(t.default, {
                        testID: 'rating-close',
                        accessibilityRole: 'button',
                        accessibilityLabel: (0, x.L)(
                          '\u0628\u0633\u062a\u0646',
                        ),
                        onPress: e.ratingLater,
                        hitSlop: 8,
                        style: ({ pressed: e }) => [
                          I.close,
                          {
                            backgroundColor: s.soft,
                            borderColor: s.line,
                            opacity: e ? 0.8 : 1,
                          },
                        ],
                        children: (0, y.jsx)(h.Icon, {
                          name: 'close',
                          size: 20,
                          color: s.text,
                        }),
                      }),
                    ],
                  }),
                  (0, y.jsx)(f.Copy, {
                    accessibilityRole: 'header',
                    style: I.title,
                    children: (0, x.L)(
                      '\u0646\u0638\u0631\u062a \u062f\u0631\u0628\u0627\u0631\u0647\u0654 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0686\u06cc\u0647\u061f',
                    ),
                  }),
                  (0, y.jsx)(f.Copy, {
                    style: [I.body, { color: s.muted }],
                    children: (0, x.L)(
                      '\u0627\u06af\u0647 \u0648\u0642\u062a \u062f\u0627\u0631\u06cc\u060c \u062a\u0648\u06cc \u06a9\u0627\u0641\u0647\u200c\u0628\u0627\u0632\u0627\u0631 \u0628\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0627\u0645\u062a\u06cc\u0627\u0632 \u0628\u062f\u0647 \u0648 \u0646\u0638\u0631\u062a \u0631\u0648 \u0628\u0646\u0648\u06cc\u0633. \u0647\u0631 \u0646\u0638\u0631\u06cc\u060c \u062e\u0648\u0628 \u06cc\u0627 \u0628\u062f\u060c \u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u0647 \u0628\u0647\u062a\u0631\u0634 \u06a9\u0646\u06cc\u0645.',
                    ),
                  }),
                  (0, y.jsxs)(o.default, {
                    style: f.common.row,
                    children: [
                      (0, y.jsx)(o.default, {
                        style: f.common.flex,
                        children: (0, y.jsx)(f.Button, {
                          testID: 'rating-later',
                          secondary: !0,
                          onPress: e.ratingLater,
                          children: (0, x.L)('\u0628\u0639\u062f\u0627\u064b'),
                        }),
                      }),
                      (0, y.jsx)(o.default, {
                        style: f.common.flex,
                        children: (0, y.jsx)(f.Button, {
                          testID: 'rating-open',
                          onPress: e.ratingOpen,
                          children: (0, x.L)(
                            '\u0627\u0645\u062a\u06cc\u0627\u0632 \u0645\u06cc\u200c\u062f\u0645',
                          ),
                        }),
                      }),
                    ],
                  }),
                  p?.offerNever &&
                    (0, y.jsx)(t.default, {
                      testID: 'rating-never',
                      accessibilityRole: 'button',
                      onPress: e.ratingNever,
                      style: ({ pressed: e }) => ({
                        minHeight: 44,
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: e ? 0.7 : 1,
                      }),
                      children: (0, y.jsx)(f.Copy, {
                        style: {
                          fontSize: 13,
                          lineHeight: 22,
                          color: s.muted,
                          textDecorationLine: 'underline',
                        },
                        children: (0, x.L)(
                          '\u062f\u06cc\u06af\u0647 \u0646\u067e\u0631\u0633',
                        ),
                      }),
                    }),
                ],
              }),
            }),
          ],
        }),
      });
    }
    const I = s.default.create({
      backdrop: {
        flex: 1,
        backgroundColor: '#08090bb3',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 16,
      },
      box: { width: '100%', maxWidth: 420 },
      badge: {
        width: 44,
        height: 44,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
      },
      close: {
        width: 36,
        height: 36,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: s.default.hairlineWidth,
      },
      title: { fontSize: 17, lineHeight: 29, fontFamily: 'Vazirmatn_700Bold' },
      body: { fontSize: 14, lineHeight: 24 },
      cell: {
        flex: 1,
        height: 10,
        borderRadius: 4,
        borderWidth: s.default.hairlineWidth,
      },
      bar: { height: 10, borderRadius: 5, overflow: 'hidden' },
    });
  },
  877,
  [232, 17, 99, 381, 515, 410, 342, 382, 407, 385, 533, 311, 338],
);
