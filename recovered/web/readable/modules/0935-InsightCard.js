// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 935; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.InsightCard = function ({
        insight: e,
        stored: b = !1,
        loading: L = !1,
        actions: C,
        footer: I,
        tasks: D,
      }) {
        const { colors: w } = (0, u.useTheme)(),
          z = (0, h.useDesktop)(),
          S = { fontSize: 11.5, lineHeight: 18, color: w.muted },
          v =
            !e || L
              ? (0, x.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u062a\u062d\u0644\u06cc\u0644\u2026',
                )
              : b
                ? (0, s.updatedLabel)(e.generatedAt)
                : (0, x.L)(
                    '\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0627\u0644\u0627\u0646',
                  ),
          _ = (0, j.jsxs)(n.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 8,
            },
            children: [
              (0, j.jsx)(n.default, {
                style: {
                  width: 28,
                  height: 28,
                  borderRadius: 10,
                  backgroundColor: w.accent,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: (0, j.jsx)(c.Icon, {
                  name: 'ai',
                  size: 16,
                  color: w.onAccent,
                }),
              }),
              (0, j.jsx)(o.Copy, {
                accessibilityRole: 'header',
                numberOfLines: 1,
                style: {
                  flex: 1,
                  minWidth: 0,
                  fontSize: 15,
                  lineHeight: 24,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: (0, x.L)(
                  '\u062a\u062d\u0644\u06cc\u0644 \u0647\u0648\u0634\u0645\u0646\u062f',
                ),
              }),
              (0, j.jsx)(o.Copy, {
                testID: 'home-insight-updated',
                numberOfLines: 1,
                style: S,
                children: v,
              }),
              C,
            ],
          }),
          F = (e, t = 10) =>
            (0, j.jsx)(n.default, {
              style: {
                width: e,
                height: t,
                borderRadius: 5,
                backgroundColor: w.soft,
              },
            });
        if (!e || L)
          return (0, j.jsxs)(o.Card, {
            testID: 'home-insight',
            accessibilityLabel: (0, x.L)(
              '\u062f\u0631 \u062d\u0627\u0644 \u062a\u062d\u0644\u06cc\u0644 \u0641\u0631\u0648\u0634\u06af\u0627\u0647',
            ),
            style: {
              gap: 12,
              padding: 14,
              borderWidth: 1,
              borderColor: w.accent,
            },
            children: [
              _,
              (0, j.jsx)(n.default, {
                style: { flexDirection: 'row-reverse', gap: 8 },
                children: [0, 1, 2].map((e) =>
                  (0, j.jsxs)(
                    n.default,
                    {
                      style: { flex: 1, gap: 6 },
                      children: [F('60%'), F('85%', 16)],
                    },
                    e,
                  ),
                ),
              }),
              (0, j.jsxs)(n.default, {
                style: { gap: 8 },
                children: [F('92%', 12), F('70%', 12)],
              }),
            ],
          });
        const { stats: T } = e,
          W = !1 !== T.salesKnown,
          O =
            ('ai' === e.source ? e.thought : (0, s.ruleThought)(T)) ||
            (0, x.L)(s.INSIGHT_FALLBACK.thought),
          [k, G] = (0, s.insightLines)(O),
          B = (e, t) => {
            const s = W ? (0, l.percentChange)(e, t) : null;
            if (null === s) return null;
            const h = s >= 0,
              u = 0 === s ? w.muted : h ? w.success : w.danger,
              f = (0, l.formatGrouped)(Math.abs(s), 0);
            return (0, j.jsxs)(n.default, {
              accessible: !0,
              accessibilityLabel: h
                ? (0, x.L)(
                    '{n}\u066a \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644',
                    { n: f },
                  )
                : (0, x.L)(
                    '{n}\u066a \u06a9\u0645\u062a\u0631 \u0627\u0632 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644',
                    { n: f },
                  ),
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 2,
              },
              children: [
                0 !== s &&
                  (0, j.jsx)(c.Icon, {
                    name: h ? 'up' : 'down',
                    size: 11,
                    color: u,
                  }),
                (0, j.jsx)(o.Copy, {
                  style: [S, { color: u, fontFamily: 'Vazirmatn_600SemiBold' }],
                  children:
                    0 === s
                      ? (0, x.L)(
                          '\u0628\u062f\u0648\u0646 \u062a\u063a\u06cc\u06cc\u0631',
                        )
                      : (0, x.L)('{n}\u066a', { n: f }),
                }),
              ],
            });
          },
          V = (e, t, l, s) =>
            (0, j.jsxs)(n.default, {
              testID: e,
              style: { flex: 1, minWidth: 0, gap: 1 },
              children: [
                (0, j.jsx)(o.Copy, { numberOfLines: 1, style: S, children: t }),
                l,
                !!s &&
                  (0, j.jsx)(n.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      columnGap: 6,
                    },
                    children: s,
                  }),
              ],
            }),
          H = (e) => {
            if (null === e || !W) return { value: '\u2014', unit: '' };
            e = (0, y.localAmount)(e);
            const t = Math.abs(e),
              [n, s] =
                t >= 1e9
                  ? [
                      1e9,
                      (0, y.shopUnitText)(
                        (0, x.L)(
                          '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f \u062a\u0648\u0645\u0627\u0646',
                        ),
                      ),
                    ]
                  : t >= 1e6
                    ? [
                        1e6,
                        (0, y.shopUnitText)(
                          (0, x.L)(
                            '\u0645\u06cc\u0644\u06cc\u0648\u0646 \u062a\u0648\u0645\u0627\u0646',
                          ),
                        ),
                      ]
                    : t >= 1e4
                      ? [
                          1e3,
                          (0, y.shopUnitText)(
                            (0, x.L)(
                              '\u0647\u0632\u0627\u0631 \u062a\u0648\u0645\u0627\u0646',
                            ),
                          ),
                        ]
                      : [
                          1,
                          (0, y.shopUnitText)(
                            (0, x.L)('\u062a\u0648\u0645\u0627\u0646'),
                          ),
                        ],
              o = Math.round((e / n) * 10) / 10;
            return {
              value: (0, l.formatGrouped)(o, Number.isInteger(o) ? 0 : 1),
              unit: s,
            };
          },
          A = (e, t) =>
            (0, j.jsx)(o.Copy, {
              testID: e + '-amount',
              numberOfLines: 1,
              adjustsFontSizeToFit: !0,
              style: {
                fontSize: 17,
                lineHeight: 26,
                fontFamily: 'Vazirmatn_700Bold',
                color: (t ?? 0) < 0 ? w.danger : w.text,
              },
              children: H(t).value,
            }),
          R = (e) =>
            H(e).unit
              ? (0, j.jsx)(o.Copy, {
                  numberOfLines: 1,
                  style: S,
                  children: H(e).unit,
                })
              : null,
          M = (0, j.jsx)(n.default, {
            style: {
              width: t.default.hairlineWidth,
              alignSelf: 'stretch',
              backgroundColor: w.line,
            },
          }),
          K = (0, j.jsxs)(n.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'stretch',
              gap: 10,
              paddingVertical: 8,
              paddingHorizontal: 10,
              borderRadius: 14,
              backgroundColor: w.accentSoft,
            },
            children: [
              V(
                'home-insight-sales',
                (0, x.L)('\u0641\u0631\u0648\u0634 \u06f7 \u0631\u0648\u0632'),
                A('home-insight-sales', T.sales7),
                (0, j.jsxs)(j.Fragment, {
                  children: [R(T.sales7), B(T.sales7, T.salesPrev7)],
                }),
              ),
              M,
              V(
                'home-insight-profit',
                (0, x.L)('\u0633\u0648\u062f \u06f7 \u0631\u0648\u0632'),
                A('home-insight-profit', T.profitKnown ? T.profit7 : null),
                T.profitKnown
                  ? (0, j.jsxs)(j.Fragment, {
                      children: [R(T.profit7), B(T.profit7, T.profitPrev7)],
                    })
                  : (0, j.jsx)(o.Copy, {
                      numberOfLines: 1,
                      style: [S, { color: w.warning }],
                      children: (0, x.L)(
                        '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0646\u0627\u0642\u0635',
                      ),
                    }),
              ),
              M,
              V(
                'home-insight-top',
                (0, x.L)('\u067e\u0631\u0641\u0631\u0648\u0634'),
                (0, j.jsx)(o.Copy, {
                  numberOfLines: 2,
                  style: {
                    fontSize: 13.5,
                    lineHeight: 22,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: T.top || '\u2014',
                }),
              ),
            ],
          }),
          P = (e, t, l, s, h) =>
            (0, j.jsxs)(n.default, {
              testID: e,
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'flex-start',
                gap: 8,
                ...(h
                  ? { padding: 10, borderRadius: 12, backgroundColor: h }
                  : {}),
              },
              children: [
                (0, j.jsx)(n.default, {
                  style: { marginTop: 3 },
                  children: (0, j.jsx)(c.Icon, { name: t, size: 15, color: s }),
                }),
                (0, j.jsx)(o.Copy, {
                  style: {
                    flex: 1,
                    minWidth: 0,
                    fontSize: 13.5,
                    lineHeight: 23,
                    color: w.text,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: l,
                }),
              ],
            }),
          U = (0, s.learnProgress)(T),
          N = U
            ? (0, j.jsxs)(n.default, {
                testID: 'home-insight-learn',
                accessible: !0,
                accessibilityLabel: (0, x.L)(
                  '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u062f\u0631 \u062d\u0627\u0644 \u0634\u0646\u0627\u062e\u062a\u0646 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u0627\u0633\u062a: {n} \u0627\u0632 {total} \u0631\u0648\u0632',
                  {
                    n: (0, l.formatGrouped)(U.days, 0),
                    total: (0, l.formatGrouped)(U.total, 0),
                  },
                ),
                style: {
                  gap: 6,
                  paddingTop: 10,
                  borderTopWidth: t.default.hairlineWidth,
                  borderTopColor: w.line,
                },
                children: [
                  (0, j.jsxs)(n.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 8,
                    },
                    children: [
                      (0, j.jsx)(o.Copy, {
                        numberOfLines: 1,
                        style: [
                          S,
                          {
                            flex: 1,
                            minWidth: 0,
                            color: w.text,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                        ],
                        children: (0, x.L)(
                          '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u062f\u0631 \u062d\u0627\u0644 \u0634\u0646\u0627\u062e\u062a\u0646 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u0627\u0633\u062a',
                        ),
                      }),
                      (0, j.jsx)(o.Copy, {
                        testID: 'home-insight-learn-count',
                        numberOfLines: 1,
                        style: [
                          S,
                          {
                            fontFamily: 'Vazirmatn_600SemiBold',
                            color: w.accent,
                          },
                        ],
                        children: (0, x.L)(
                          '{n} \u0627\u0632 {total} \u0631\u0648\u0632',
                          {
                            n: (0, l.formatGrouped)(U.days, 0),
                            total: (0, l.formatGrouped)(U.total, 0),
                          },
                        ),
                      }),
                    ],
                  }),
                  (0, j.jsx)(p.NumberLine, {
                    style: { gap: 4 },
                    children: Array.from({ length: U.total }, (e, t) =>
                      (0, j.jsx)(
                        n.default,
                        {
                          testID:
                            t < U.days
                              ? 'home-insight-learn-day-on'
                              : 'home-insight-learn-day-off',
                          style: {
                            flex: 1,
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: t < U.days ? w.accent : w.line,
                          },
                        },
                        t,
                      ),
                    ),
                  }),
                  (0, j.jsx)(o.Copy, {
                    style: S,
                    children: (0, x.L)(
                      '{n} \u0631\u0648\u0632 \u0628\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u06a9\u0627\u0631 \u06a9\u0646 \u062a\u0627 \u062a\u062d\u0644\u06cc\u0644\u062a \u062f\u0642\u06cc\u0642 \u0634\u0648\u062f.',
                      { n: (0, l.formatGrouped)(U.total, 0) },
                    ),
                  }),
                ],
              })
            : null,
          q = (0, j.jsxs)(n.default, {
            testID: 'home-insight-thought',
            style: { gap: 8 },
            children: [
              P('home-insight-tip', G ? 'chart' : 'bulb', k, w.accent),
              !!G &&
                P('home-insight-suggestion', 'bulb', G, w.accent, w.accentSoft),
              'ai' === e.source &&
                (0, j.jsx)(o.Copy, {
                  style: [S, { alignSelf: 'flex-start' }],
                  children: (0, x.L)(
                    '\u0628\u0627 \u0647\u0648\u0634 \u0645\u0635\u0646\u0648\u0639\u06cc',
                  ),
                }),
              N,
            ],
          });
        return (0, j.jsx)(f.Spark, {
          radius: 20,
          children: (0, j.jsxs)(o.Card, {
            testID: 'home-insight',
            style: { gap: 12, padding: 14, borderWidth: 0 },
            children: [
              _,
              D,
              z
                ? (0, j.jsxs)(n.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      gap: 20,
                      alignItems: 'center',
                    },
                    children: [
                      (0, j.jsx)(n.default, {
                        style: { flex: 5, minWidth: 0 },
                        children: K,
                      }),
                      (0, j.jsx)(n.default, {
                        style: { flex: 6, minWidth: 0 },
                        children: q,
                      }),
                    ],
                  })
                : (0, j.jsxs)(j.Fragment, { children: [K, q] }),
              I,
            ],
          }),
        });
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      l = r(d[2]),
      s = r(d[3]),
      o = r(d[4]),
      c = r(d[5]),
      h = r(d[6]),
      u = r(d[7]),
      f = r(d[8]),
      p = r(d[9]),
      x = r(d[10]),
      y = r(d[11]),
      j = r(d[12]);
  },
  935,
  [17, 99, 434, 457, 407, 385, 481, 382, 410, 617, 311, 435, 338],
);
