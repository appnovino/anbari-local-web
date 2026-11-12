// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 731; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ReferralCard = function ({ shop: e }) {
        const { colors: C } = (0, u.useTheme)(),
          { data: L, error: S } = (0, h.useReferral)(
            e && 'staff' !== e.role ? e : null,
          ),
          [z, w] = (0, t.useState)(''),
          D = (0, t.useRef)(!1);
        if (
          ((0, t.useEffect)(() => {
            if (L && !D.current) {
              D.current = !0;
              try {
                const e = 'anbari:tab-ready:referral';
                if (
                  (performance.measure(e, 'anbari:tab:profile'),
                  '1' === localStorage.getItem('anbari.perf'))
                ) {
                  const t = performance.getEntriesByName(e, 'measure'),
                    n = t[t.length - 1];
                  n &&
                    console.debug(
                      '[anbari perf]',
                      e,
                      Math.round(n.duration) + 'ms',
                    );
                }
              } catch {}
            }
          }, [L]),
          !e || !['owner', 'manager'].includes(e.role))
        )
          return null;
        const R = L?.needed || 5,
          _ = L?.rewardMonths || 2,
          v = (L?.joined || 0) % R,
          F = L ? (0, h.referralLink)(L) : '';
        function I(e) {
          (n.default.setString(e),
            w((0, b.L)('\u06a9\u067e\u06cc \u0634\u062f.')));
        }
        const N = L?.cash,
          B = L?.friendPercent || 0,
          H = [
            (0, b.L)(
              '\u06a9\u062f \u06cc\u0627 \u0644\u06cc\u0646\u06a9\u062a \u0631\u0627 \u062f\u0631 \u0628\u06cc\u0648\u060c \u0627\u0633\u062a\u0648\u0631\u06cc \u06cc\u0627 \u0628\u0631\u0627\u06cc \u062f\u0648\u0633\u062a\u0627\u0646\u062a \u0628\u0641\u0631\u0633\u062a.',
            ),
            B
              ? (0, b.L)(
                  '\u062f\u0648\u0633\u062a\u062a \u0628\u0627 \u06a9\u062f \u062a\u0648 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 {p}\u066a \u062a\u062e\u0641\u06cc\u0641 \u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f.',
                  { p: (0, y.faNumber)(B) },
                )
              : (0, b.L)(
                  '\u062f\u0648\u0633\u062a\u062a \u0628\u0627 \u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0648 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u0634 \u0631\u0627 \u0645\u06cc\u200c\u0633\u0627\u0632\u062f.',
                ),
            ...(N
              ? [
                  (0, b.L)(
                    '\u0627\u0632 \u0647\u0631 \u067e\u0631\u062f\u0627\u062e\u062a \u062f\u0648\u0633\u062a\u062a\u060c \u0647\u0631 \u0645\u0627\u0647 {c}\u066a \u0646\u0642\u062f \u0628\u0647 \u062d\u0633\u0627\u0628\u062a \u0648\u0627\u0631\u06cc\u0632 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                    { c: (0, y.faNumber)(N.percent) },
                  ),
                ]
              : []),
            (0, b.L)(
              '\u0628\u0627 \u0647\u0631 {n} \u062f\u0648\u0633\u062a\u060c {m} \u0645\u0627\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633 \u0647\u0645 \u0647\u062f\u06cc\u0647 \u0645\u06cc\u200c\u06af\u06cc\u0631\u06cc.',
              { n: (0, y.faNumber)(R), m: (0, y.faNumber)(_) },
            ),
          ],
          V = (e, t, n) =>
            (0, j.jsxs)(o.default, {
              testID: n,
              style: {
                flex: 1,
                minWidth: 90,
                gap: 2,
                padding: 10,
                borderRadius: 12,
                backgroundColor: C.surface,
                borderWidth: i.default.hairlineWidth,
                borderColor: C.line,
              },
              children: [
                (0, j.jsx)(c.Copy, {
                  style: { fontSize: 11, lineHeight: 18, color: C.muted },
                  children: e,
                }),
                (0, j.jsx)(c.Copy, {
                  style: {
                    fontSize: 15,
                    lineHeight: 24,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: t,
                }),
              ],
            });
        return (0, j.jsxs)(j.Fragment, {
          children: [
            (0, j.jsxs)(c.Card, {
              testID: 'referral-card',
              style: { padding: 0, overflow: 'hidden', borderColor: C.accent },
              children: [
                (0, j.jsx)(s.LinearGradient, {
                  pointerEvents: 'none',
                  colors: [C.accentSoft, C.surface],
                  start: { x: 0.5, y: 0 },
                  end: { x: 0.5, y: 0.6 },
                  style: i.default.absoluteFill,
                }),
                (0, j.jsxs)(o.default, {
                  style: { padding: 18, gap: 16 },
                  children: [
                    (0, j.jsxs)(o.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 12,
                      },
                      children: [
                        (0, j.jsx)(o.default, {
                          style: {
                            width: 52,
                            height: 52,
                            borderRadius: 16,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: C.accent,
                          },
                          children: (0, j.jsx)(f.Icon, {
                            name: 'gift',
                            size: 28,
                            color: C.onAccent,
                          }),
                        }),
                        (0, j.jsxs)(o.default, {
                          style: { flex: 1, gap: 2 },
                          children: [
                            (0, j.jsx)(c.Copy, {
                              accessibilityRole: 'header',
                              style: {
                                fontSize: 19,
                                lineHeight: 30,
                                fontFamily: 'Vazirmatn_700Bold',
                              },
                              children: (0, b.L)(
                                '\u06a9\u062f \u0645\u0639\u0631\u0641 \u0645\u0646',
                              ),
                            }),
                            (0, j.jsx)(c.Copy, {
                              style: {
                                fontSize: 13,
                                lineHeight: 22,
                                color: C.muted,
                              },
                              children: N
                                ? (0, b.L)(
                                    '\u0647\u0631 \u0645\u0627\u0647 {c}\u066a \u0627\u0632 \u067e\u0631\u062f\u0627\u062e\u062a \u062f\u0648\u0633\u062a\u0627\u0646\u06cc \u06a9\u0647 \u0628\u0627 \u06a9\u062f \u062a\u0648 \u0628\u06cc\u0627\u06cc\u0646\u062f\u060c \u0646\u0642\u062f \u0645\u0627\u0644 \u062a\u0648\u0633\u062a.',
                                    { c: (0, y.faNumber)(N.percent) },
                                  )
                                : (0, b.L)(
                                    '\u0647\u0631 {n} \u0646\u0641\u0631\u06cc \u06a9\u0647 \u0628\u0627 \u0644\u06cc\u0646\u06a9 \u062a\u0648 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0646\u0646\u062f\u060c {m} \u0645\u0627\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633 \u0628\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9\u062a \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                                    {
                                      n: (0, y.faNumber)(R),
                                      m: (0, y.faNumber)(_),
                                    },
                                  ),
                            }),
                          ],
                        }),
                      ],
                    }),
                    !L &&
                      !S &&
                      (0, j.jsx)(c.Copy, {
                        style: { color: C.muted },
                        children: (0, b.L)(
                          '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                        ),
                      }),
                    !L &&
                      !!S &&
                      (0, j.jsx)(c.Copy, {
                        accessibilityRole: 'alert',
                        style: { fontSize: 13, color: C.danger },
                        children: S,
                      }),
                    L &&
                      (0, j.jsxs)(j.Fragment, {
                        children: [
                          (0, j.jsxs)(l.default, {
                            testID: 'referral-code',
                            accessibilityRole: 'button',
                            accessibilityLabel: (0, b.L)(
                              '\u06a9\u067e\u06cc \u06a9\u062f',
                            ),
                            onPress: () => I(L.code),
                            style: ({ pressed: e }) => ({
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: 10,
                              paddingHorizontal: 14,
                              paddingVertical: 10,
                              borderRadius: 14,
                              borderWidth: 1,
                              borderStyle: 'dashed',
                              borderColor: C.accent,
                              backgroundColor: C.surface,
                              opacity: e ? 0.85 : 1,
                            }),
                            children: [
                              (0, j.jsx)(c.Copy, {
                                style: { fontSize: 12, color: C.muted },
                                children: (0, b.L)(
                                  '\u06a9\u062f \u0645\u0639\u0631\u0641 \u062a\u0648 \xb7 \u0628\u0632\u0646 \u062a\u0627 \u06a9\u067e\u06cc \u0634\u0648\u062f',
                                ),
                              }),
                              (0, j.jsx)(c.Copy, {
                                selectable: !0,
                                style: {
                                  fontSize: 22,
                                  lineHeight: 32,
                                  letterSpacing: 3,
                                  writingDirection: 'ltr',
                                  fontFamily: 'Vazirmatn_700Bold',
                                },
                                children: L.code,
                              }),
                            ],
                          }),
                          (0, j.jsx)(c.Copy, {
                            selectable: !0,
                            testID: 'referral-link',
                            style: {
                              fontSize: 12,
                              lineHeight: 20,
                              color: C.muted,
                              writingDirection: 'ltr',
                              textAlign: 'center',
                            },
                            children: F,
                          }),
                          (0, j.jsxs)(o.default, {
                            style: { flexDirection: 'row-reverse', gap: 10 },
                            children: [
                              (0, j.jsx)(o.default, {
                                style: c.common.flex,
                                children: (0, j.jsx)(c.Button, {
                                  testID: 'referral-share',
                                  onPress: async function () {
                                    if (!L) return;
                                    const e = (0, b.L)(
                                      '\u0628\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0645\u0648\u062c\u0648\u062f\u06cc \u0648 \u0641\u0631\u0648\u0634 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u0631\u0627 \u0631\u0627\u062d\u062a \u062b\u0628\u062a \u06a9\u0646. \u0628\u0627 \u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9 \u062b\u0628\u062a\u200c\u0646\u0627\u0645 \u06a9\u0646:',
                                    );
                                    {
                                      const t =
                                        'undefined' != typeof navigator
                                          ? navigator
                                          : null;
                                      if (t?.share) {
                                        try {
                                          await t.share({
                                            title: (0, b.L)(
                                              '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
                                            ),
                                            text: e,
                                            url: F,
                                          });
                                        } catch {}
                                        return;
                                      }
                                      return void I(F);
                                    }
                                  },
                                  children: (0, b.L)(
                                    '\u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u06af\u0630\u0627\u0631\u06cc',
                                  ),
                                }),
                              }),
                              (0, j.jsx)(o.default, {
                                style: c.common.flex,
                                children: (0, j.jsx)(c.Button, {
                                  testID: 'referral-copy',
                                  secondary: !0,
                                  onPress: () => I(F),
                                  children: (0, b.L)(
                                    '\u06a9\u067e\u06cc \u0644\u06cc\u0646\u06a9',
                                  ),
                                }),
                              }),
                            ],
                          }),
                          !!z &&
                            (0, j.jsx)(c.Copy, {
                              accessibilityRole: 'alert',
                              style: {
                                fontSize: 13,
                                color: C.success,
                                textAlign: 'center',
                              },
                              children: z,
                            }),
                          N &&
                            (0, j.jsxs)(o.default, {
                              style: { gap: 8 },
                              children: [
                                (0, j.jsx)(c.Copy, {
                                  style: {
                                    fontSize: 14,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: (0, b.L)(
                                    '\u067e\u0627\u062f\u0627\u0634 \u0646\u0642\u062f\u06cc \u062a\u0648',
                                  ),
                                }),
                                (0, j.jsxs)(o.default, {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    flexWrap: 'wrap',
                                    gap: 8,
                                  },
                                  children: [
                                    V(
                                      (0, b.L)(
                                        '\u0627\u06cc\u0646 \u0645\u0627\u0647',
                                      ),
                                      (0, x.planMoney)(N.thisMonth, {
                                        full: !0,
                                        hint: !1,
                                      }),
                                      'referral-cash-month',
                                    ),
                                    V(
                                      (0, b.L)(
                                        '\u0645\u0627\u0646\u062f\u0647 \u0628\u0631\u0627\u06cc \u0648\u0627\u0631\u06cc\u0632',
                                      ),
                                      (0, x.planMoney)(N.unpaid, {
                                        full: !0,
                                        hint: !1,
                                      }),
                                      'referral-cash-unpaid',
                                    ),
                                    V(
                                      (0, b.L)(
                                        '\u062f\u0648\u0633\u062a\u0627\u0646\u06cc \u06a9\u0647 \u062e\u0631\u06cc\u062f\u0646\u062f',
                                      ),
                                      (0, y.faNumber)(N.payingFriends),
                                      'referral-cash-friends',
                                    ),
                                  ],
                                }),
                                'owner' === e.role &&
                                  (0, j.jsx)(p.BankAccountForm, {
                                    shop: e,
                                    hint: (0, b.L)(
                                      '\u067e\u0627\u062f\u0627\u0634 \u0647\u0631 \u0645\u0627\u0647 \u0628\u0647 \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0648\u0627\u0631\u06cc\u0632 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                                    ),
                                  }),
                              ],
                            }),
                          (0, j.jsxs)(o.default, {
                            style: { gap: 8 },
                            children: [
                              (0, j.jsxs)(o.default, {
                                style: c.common.between,
                                children: [
                                  (0, j.jsx)(c.Copy, {
                                    style: {
                                      fontSize: 14,
                                      fontFamily: 'Vazirmatn_600SemiBold',
                                    },
                                    children: (0, b.L)(
                                      '\u0647\u062f\u06cc\u0647\u0654 \u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633: {x} \u0627\u0632 {n} \u0646\u0641\u0631',
                                      {
                                        x: (0, y.faNumber)(v),
                                        n: (0, y.faNumber)(R),
                                      },
                                    ),
                                  }),
                                  L.rewardsEarned > 0 &&
                                    (0, j.jsx)(c.Copy, {
                                      style: {
                                        fontSize: 12,
                                        color: C.success,
                                        fontFamily: 'Vazirmatn_600SemiBold',
                                      },
                                      children: (0, b.L)(
                                        '\u062a\u0627 \u062d\u0627\u0644\u0627 {m} \u0645\u0627\u0647 \u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633 \u0647\u062f\u06cc\u0647 \u06af\u0631\u0641\u062a\u06cc',
                                        { m: (0, y.faNumber)(L.monthsEarned) },
                                      ),
                                    }),
                                ],
                              }),
                              (0, j.jsx)(o.default, {
                                testID: 'referral-progress',
                                accessibilityRole: 'progressbar',
                                accessibilityValue: { min: 0, max: R, now: v },
                                style: { flexDirection: 'row-reverse', gap: 6 },
                                children: Array.from({ length: R }, (e, t) =>
                                  (0, j.jsx)(
                                    o.default,
                                    {
                                      style: {
                                        flex: 1,
                                        height: 10,
                                        borderRadius: 5,
                                        backgroundColor:
                                          t < v ? C.accent : C.soft,
                                        borderWidth: i.default.hairlineWidth,
                                        borderColor: t < v ? C.accent : C.line,
                                      },
                                    },
                                    t,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, j.jsxs)(o.default, {
                      style: {
                        gap: 10,
                        paddingTop: 12,
                        borderTopWidth: i.default.hairlineWidth,
                        borderTopColor: C.line,
                      },
                      children: [
                        (0, j.jsx)(c.Copy, {
                          style: {
                            fontSize: 14,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: (0, b.L)(
                            '\u0686\u0637\u0648\u0631 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f\u061f',
                          ),
                        }),
                        H.map((e, t) =>
                          (0, j.jsxs)(
                            o.default,
                            {
                              style: c.common.row,
                              children: [
                                (0, j.jsx)(o.default, {
                                  style: {
                                    width: 24,
                                    height: 24,
                                    borderRadius: 12,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: C.accentSoft,
                                  },
                                  children: (0, j.jsx)(c.Copy, {
                                    style: {
                                      fontSize: 12,
                                      lineHeight: 20,
                                      color: C.accent,
                                      fontFamily: 'Vazirmatn_700Bold',
                                    },
                                    children: (0, y.faNumber)(t + 1),
                                  }),
                                }),
                                (0, j.jsx)(c.Copy, {
                                  style: {
                                    flex: 1,
                                    fontSize: 13,
                                    lineHeight: 22,
                                  },
                                  children: e,
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            L &&
              !!S &&
              (0, j.jsx)(c.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 12, lineHeight: 18, color: C.muted },
                children: S,
              }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1]));
    r(d[2]);
    var l = e(r(d[3])),
      i = (e(r(d[4])), e(r(d[5]))),
      o = e(r(d[6])),
      s = r(d[7]),
      c = r(d[8]),
      f = r(d[9]),
      u = r(d[10]),
      h = r(d[11]),
      y = r(d[12]),
      p = r(d[13]),
      x = r(d[14]),
      b = r(d[15]),
      j = r(d[16]);
  },
  731,
  [
    2, 205, 94, 232, 215, 17, 99, 411, 407, 385, 382, 488, 502, 732, 435, 311,
    338,
  ],
);
