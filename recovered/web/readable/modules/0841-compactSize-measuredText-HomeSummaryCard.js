// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 841; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.compactSize = function (e) {
        return e.length <= 4
          ? 22
          : e.length <= 6
            ? 18
            : e.length <= 10
              ? 15
              : 13;
      }),
      (_e.measuredText = F),
      (_e.HomeSummaryCard = function ({
        shop: e,
        state: s,
        testID: m = 'home-summary',
      }) {
        const { colors: $ } = (0, b.useTheme)(),
          [w, I] = (0, n.useState)(7),
          [z, D] = (0, n.useState)(null),
          _ = (0, t.useShopDay)(e?.timezone),
          H = (0, n.useMemo)(
            () =>
              e
                ? null
                : (0, c.summarizeLocal)(s.movements, w, new Date(), s.products),
            [e?.id, s.movements, s.products, w, _],
          ),
          U = (0, v.useSwr)(
            e ? (0, v.scoped)(e.id, 'summary:' + w) : null,
            () => (0, x.readSummary)(e, w),
          );
        (0, n.useEffect)(() => {
          D(null);
        }, [e?.id, w]);
        const B = (0, n.useRef)(_);
        (0, n.useEffect)(() => {
          B.current !== _ && ((B.current = _), U.reload());
        }, [_]);
        const G =
            'feature_not_in_plan' === U.errorCode
              ? k.notebookFa.summaryLocked
              : 'hidden_by_owner' === U.errorCode
                ? k.notebookFa.summaryHidden
                : U.error
                  ? k.notebookFa.summaryFailed
                  : '',
          M = e ? (U.data ?? null) : H,
          N = M?.days || [],
          T = null !== z && z < N.length ? z : N.length - 1,
          V = N[T],
          P = { fontSize: 12, lineHeight: 18, color: $.muted };
        function O(e, t) {
          const o = (0, i.percentChange)(e, t);
          if (null === o)
            return (0, S.jsx)(p.Copy, {
              numberOfLines: 1,
              style: P,
              children: '\u2014',
            });
          const n = o >= 0,
            s = 0 === o ? $.muted : n ? $.accent : $.danger,
            d = (0, i.formatGrouped)(Math.abs(o), 0),
            u =
              7 === w
                ? n
                  ? (0, j.L)(
                      '{n}\u066a \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644',
                      { n: d },
                    )
                  : (0, j.L)(
                      '{n}\u066a \u06a9\u0645\u062a\u0631 \u0627\u0632 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644',
                      { n: d },
                    )
                : n
                  ? (0, j.L)(
                      '{n}\u066a \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u06f3\u06f0 \u0631\u0648\u0632 \u0642\u0628\u0644',
                      { n: d },
                    )
                  : (0, j.L)(
                      '{n}\u066a \u06a9\u0645\u062a\u0631 \u0627\u0632 \u06f3\u06f0 \u0631\u0648\u0632 \u0642\u0628\u0644',
                      { n: d },
                    );
          return (0, S.jsxs)(l.default, {
            accessible: !0,
            accessibilityLabel: u,
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 2,
            },
            children: [
              (0, S.jsx)(p.Copy, {
                numberOfLines: 1,
                style: [P, { color: s }],
                children: (0, j.L)('{n}\u066a', { n: d }),
              }),
              0 !== o &&
                (0, S.jsx)(y.Icon, {
                  name: n ? 'up' : 'down',
                  size: 12,
                  color: s,
                }),
            ],
          });
        }
        function R(e, t, o, n, s, i = !1, d = !1, c = '') {
          return (0, S.jsxs)(
            l.default,
            {
              testID: `${m}-${e}`,
              style: {
                flexGrow: 1,
                flexBasis: '45%',
                minWidth: 0,
                gap: 0,
                paddingVertical: 10,
                paddingHorizontal: 8,
                borderRadius: 12,
                backgroundColor: $.soft,
              },
              children: [
                (0, S.jsx)(p.Copy, { numberOfLines: 1, style: P, children: t }),
                d
                  ? (0, S.jsx)(p.Copy, {
                      style: {
                        fontSize: 20,
                        lineHeight: 30,
                        fontFamily: 'Vazirmatn_700Bold',
                        color: $.warning,
                      },
                      children: '\u2014',
                    })
                  : (0, S.jsx)(u.MoneyLine, {
                      testID: `${m}-${e}-amount`,
                      toman: n,
                      danger: i ? $.danger : void 0,
                      style: {
                        fontSize: 17,
                        lineHeight: 30,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                    }),
                !!c && !d && (0, S.jsx)(p.Copy, { style: P, children: c }),
                d
                  ? (0, S.jsx)(p.Copy, {
                      style: [P, { color: $.warning }],
                      children: (0, j.L)(
                        '\u0642\u06cc\u0645\u062a \u0646\u0627\u0642\u0635',
                      ),
                    })
                  : O(n, s),
              ],
            },
            e,
          );
        }
        const E = (e, t) =>
          7 === w
            ? L(e).toLocaleDateString((0, j.numberLocale)(), {
                weekday: 'narrow',
              })
            : (N.length - 1 - t) % 5 == 0
              ? L(e).toLocaleDateString((0, j.numberLocale)(), {
                  day: 'numeric',
                })
              : '';
        return (0, S.jsxs)(p.Card, {
          testID: m,
          style: { gap: 14 },
          children: [
            (0, S.jsxs)(l.default, {
              style: p.common.between,
              children: [
                (0, S.jsxs)(l.default, {
                  style: { gap: 0 },
                  children: [
                    (0, S.jsx)(p.Copy, {
                      style: {
                        fontSize: 16,
                        lineHeight: 24,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: k.notebookFa.summaryTitle,
                    }),
                    (0, S.jsx)(p.Copy, {
                      style: P,
                      children: (0, d.currencyUnit)(),
                    }),
                  ],
                }),
                (0, S.jsx)(p.Segmented, {
                  numberLine: !0,
                  height: 34,
                  style: { width: 136 },
                  value: w,
                  onChange: (e) => I(e),
                  items: [
                    { value: 7, label: k.notebookFa.period7, testID: `${m}-7` },
                    {
                      value: 30,
                      label: k.notebookFa.period30,
                      testID: `${m}-30`,
                    },
                  ],
                }),
              ],
            }),
            M
              ? (0, S.jsxs)(S.Fragment, {
                  children: [
                    (0, S.jsxs)(l.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        flexWrap: 'wrap',
                        gap: 8,
                      },
                      children: [
                        R(
                          'sales',
                          k.notebookFa.kpiSales,
                          (0, i.formatCompactParts)(M.totals.revenue),
                          M.totals.revenue,
                          (0, o.revenueIncomplete)(M.previous)
                            ? NaN
                            : M.previous.revenue,
                          !1,
                          (0, o.revenueIncomplete)(M.totals),
                          (0, d.usdHint)(M.totals.revenue),
                        ),
                        R(
                          'profit',
                          k.notebookFa.kpiProfit,
                          (0, i.formatCompactParts)(M.totals.profit),
                          M.totals.profit,
                          (0, o.profitIncomplete)(M.previous)
                            ? NaN
                            : M.previous.profit,
                          M.totals.profit < 0,
                          (0, o.profitIncomplete)(M.totals),
                          (0, d.usdHint)(M.totals.profit),
                        ),
                        R(
                          'sold',
                          (0, j.L)(
                            '\u062a\u0639\u062f\u0627\u062f \u0641\u0631\u0648\u0634',
                          ),
                          ((0, i.formatGrouped)(M.totals.soldUnits),
                          k.notebookFa.units.piece),
                          M.totals.soldUnits,
                          M.previous.soldUnits,
                          !1,
                          !1,
                          F(M.totals.soldMeasured),
                        ),
                        R(
                          'received',
                          k.notebookFa.kpiReceived,
                          ((0, i.formatGrouped)(M.totals.receivedUnits),
                          k.notebookFa.units.piece),
                          M.totals.receivedUnits,
                          M.previous.receivedUnits,
                          !1,
                          !1,
                          F(M.totals.receivedMeasured),
                        ),
                      ],
                    }),
                    (0, S.jsx)(h.UnknownCostNote, { summary: M }),
                    (0, o.profitIncomplete)(M.totals) &&
                      (0, S.jsx)(p.Copy, {
                        style: P,
                        children: (0, j.L)(
                          '\u0646\u0645\u0648\u062f\u0627\u0631 \u0648 \u067e\u0631\u0641\u0631\u0648\u0634\u200c\u0647\u0627 \u0641\u0642\u0637 \u0628\u0631 \u0627\u0633\u0627\u0633 \u0642\u06cc\u0645\u062a\u200c\u0647\u0627\u06cc \u062b\u0628\u062a\u200c\u0634\u062f\u0647\u200c\u0627\u0646\u062f.',
                        ),
                      }),
                    (0, S.jsx)(f.BarChart, {
                      axis: !1,
                      keepLast: !0,
                      plot: C,
                      emptyText: k.notebookFa.noSales,
                      detailLines: 1,
                      detailGap: 14,
                      testID: `${m}-chart`,
                      detailTestID: `${m}-day`,
                      highlightKey: V?.date,
                      onSelect: (e) => D(N.findIndex((t) => t.date === e)),
                      formatValue: d.displayParts,
                      data: N.map((e, t) => ({
                        key: e.date,
                        label: E(e.date, t),
                        value: (0, d.displayAmount)(e.revenue, e.date),
                        a11y: `${k.notebookFa.kpiSales} ${(0, d.money)(e.revenue, { day: e.date })}`,
                        sub: `${L(e.date).toLocaleDateString((0, j.dateLocale)(), { weekday: 'long', day: 'numeric', month: 'long' })}: ${k.notebookFa.kpiSales} ${(0, d.money)(e.revenue, { day: e.date })}\u060c ${k.notebookFa.kpiProfit} ${(0, d.money)(e.profit, { day: e.date, hint: !1 })}`,
                      })),
                    }),
                    (0, S.jsxs)(l.default, {
                      style: { gap: 6 },
                      children: [
                        (0, S.jsx)(p.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: k.notebookFa.topSellers,
                        }),
                        M.top.length
                          ? M.top
                              .slice(0, 3)
                              .map((e, t) =>
                                (0, S.jsxs)(
                                  l.default,
                                  {
                                    style: p.common.between,
                                    children: [
                                      (0, S.jsx)(p.Copy, {
                                        numberOfLines: 1,
                                        style: {
                                          flex: 1,
                                          fontSize: 13,
                                          lineHeight: 20,
                                        },
                                        children: `${(0, i.formatGrouped)(t + 1, 0)}. ${e.name}`,
                                      }),
                                      (0, S.jsx)(p.Copy, {
                                        style: {
                                          fontSize: 13,
                                          lineHeight: 20,
                                          fontFamily: 'Vazirmatn_600SemiBold',
                                        },
                                        children: (0, i.formatCompactToman)(
                                          e.revenue,
                                        ),
                                      }),
                                    ],
                                  },
                                  e.productId || t,
                                ),
                              )
                          : (0, S.jsx)(p.Copy, {
                              style: P,
                              children: k.notebookFa.noSales,
                            }),
                      ],
                    }),
                  ],
                })
              : (0, S.jsx)(p.Copy, {
                  style: P,
                  children: G || k.notebookFa.summaryLoading,
                }),
          ],
        });
      }));
    var e,
      t = r(_d[0]),
      o = r(_d[1]),
      n = r(_d[2]),
      s = r(_d[3]),
      l = (e = s) && e.__esModule ? e : { default: e },
      i = r(_d[4]),
      d = r(_d[5]),
      u = r(_d[6]),
      c = r(_d[7]),
      m = r(_d[8]),
      p = r(_d[9]),
      y = r(_d[10]),
      f = r(_d[11]),
      h = r(_d[12]),
      b = r(_d[13]),
      x = r(_d[14]),
      v = r(_d[15]),
      k = r(_d[16]),
      j = r(_d[17]),
      S = r(_d[18]);
    const C = 112;
    function F(e) {
      const t = m.UNITS.filter((t) => e?.[t]).map(
        (t) => `${(0, i.formatGrouped)(e[t])} ${k.notebookFa.units[t]}`,
      );
      return t.length ? '+ ' + t.join(' \xb7 ') : '';
    }
    function L(e) {
      const [t, o, n] = e.split('-').map(Number);
      return new Date(t, o - 1, n, 12);
    }
  },
  841,
  [
    611, 456, 2, 99, 434, 435, 842, 455, 432, 407, 385, 843, 845, 382, 519, 489,
    580, 311, 338,
  ],
);
