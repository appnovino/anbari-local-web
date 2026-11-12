// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 839; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'reportFa', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }),
      Object.defineProperty(_e, 'DEFAULT_REPORT_DAYS', {
        enumerable: !0,
        get: function () {
          return F;
        },
      }),
      (_e.SalesReport = function ({
        variant: e,
        shop: G,
        state: M,
        demoState: V,
        testID: B = 'income' === e ? 'income' : 'report',
        expensePreview: W,
        onEditProduct: E,
        onSavePrice: A,
      }) {
        const { colors: q } = (0, f.useTheme)(),
          K = (0, p.useDesktop)(),
          [Y, J] = (0, r.useState)(F),
          [Q, X] = (0, r.useState)('money'),
          [Z, ee] = (0, r.useState)(null),
          [te, oe] = (0, r.useState)(!!V && 0 === M.products.length),
          [re, ne] = (0, r.useState)('top'),
          [se, ie] = (0, r.useState)(null),
          [le, ae] = (0, r.useState)(null),
          de = (0, t.useShopDay)(G?.timezone),
          ce = K && 'report' === e,
          ue = te && V ? V : M,
          pe = (0, r.useMemo)(
            () =>
              G
                ? null
                : (0, d.summarizeLocal)(
                    ue.movements,
                    Y,
                    new Date(),
                    ue.products,
                  ),
            [G?.id, ue.movements, ue.products, Y, de],
          ),
          me = (0, v.useSwr)(
            G ? (0, v.scoped)(G.id, 'summary:' + Y) : null,
            () => (0, h.readSummary)(G, Y),
          );
        (0, r.useEffect)(() => {
          (ee(null), ae(null));
        }, [Y]);
        const fe = (0, r.useRef)(de);
        (0, r.useEffect)(() => {
          fe.current !== de && ((fe.current = de), me.reload());
        }, [de]);
        const he =
            'feature_not_in_plan' === me.errorCode
              ? y.notebookFa.summaryLocked
              : 'hidden_by_owner' === me.errorCode
                ? y.notebookFa.summaryHidden
                : me.error
                  ? y.notebookFa.summaryFailed
                  : '',
          ye = G ? (me.data ?? null) : pe,
          ge = ye?.days || [],
          xe = (0, r.useRef)(!1);
        (0, r.useEffect)(() => {
          if (ye && !xe.current) {
            xe.current = !0;
            try {
              const e = 'anbari:tab-ready:summary';
              if (
                (performance.measure(e, 'anbari:tab:data'),
                '1' === localStorage.getItem('anbari.perf'))
              ) {
                const t = performance.getEntriesByName(e, 'measure'),
                  o = t[t.length - 1];
                o &&
                  console.debug(
                    '[anbari perf]',
                    e,
                    Math.round(o.duration) + 'ms',
                  );
              }
            } catch {}
          }
        }, [ye]);
        const ve = (0, r.useMemo)(
            () =>
              'report' === e
                ? (0, d.lowStockList)(ue.products, ue.alarmRules)
                : [],
            [e, ue.products, ue.alarmRules],
          ),
          be = ve.length
            ? { items: ve, title: T.lowTitle, note: T.lowNote, mode: 'alarm' }
            : {
                items: 'report' === e ? (0, d.outOfStockList)(ue.products) : [],
                title: T.outTitle,
                note: T.outNote,
                mode: 'out',
              },
          je = { fontSize: 12, lineHeight: 18, color: q.muted },
          Ce = {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Vazirmatn_700Bold',
          },
          Ie = 'income' === e ? T.income : T.sales,
          Se = (e) =>
            e.from && e.from !== e.date
              ? (0, w.L)('{from} \u062a\u0627 {to}', {
                  from: P(e.from),
                  to: P(e.date),
                })
              : _(e.date),
          $e = (t) =>
            'income' === e
              ? `${Se(t)}: ${T.income} ${(0, l.money)(t.revenue, { day: t.date })}\u060c ${T.cogs} ${(0, l.money)(t.cost, { day: t.date, hint: !1 })}\u060c ${T.profit} ${(0, l.money)(t.profit, { day: t.date, hint: !1 })}`
              : `${Se(t)}: ${T.sales} ${(0, l.money)(t.revenue, { day: t.date })}\u060c ${T.profit} ${(0, l.money)(t.profit, { day: t.date, hint: !1 })}\u060c ${T.inShort} ${(0, i.formatGrouped)(t.receivedUnits)}\u060c ${T.outShort} ${(0, i.formatGrouped)(t.soldUnits)}`,
          we = ye
            ? 1 === Y && 1 === ge.length
              ? [
                  { ...ye.previous, date: (0, d.shiftDate)(ge[0].date, -1) },
                  ge[0],
                ]
              : 365 === Y
                ? (0, j.bucketDays)(ge, 7, [
                    'revenue',
                    'cost',
                    'profit',
                    'receivedUnits',
                    'soldUnits',
                  ])
                : ge
            : [],
          De = 'units' === Q && 'report' === e,
          ke = De
            ? [
                {
                  key: 'in',
                  label: T.received,
                  kind: 'area',
                  values: we.map((e) => e.receivedUnits),
                },
                {
                  key: 'out',
                  label: T.out,
                  kind: 'dashed',
                  values: we.map((e) => e.soldUnits),
                },
              ]
            : [
                {
                  key: 'sales',
                  label: Ie,
                  kind: 'area',
                  values: we.map((e) =>
                    (0, l.displayAmount)(e.revenue, e.date),
                  ),
                },
                {
                  key: 'cost',
                  label: T.cost,
                  kind: 'dashed',
                  values: we.map((e) => (0, l.displayAmount)(e.cost, e.date)),
                },
                {
                  key: 'profit',
                  label: T.profit,
                  kind: 'signed',
                  values: we.map((e) => (0, l.displayAmount)(e.profit, e.date)),
                },
              ],
          Le = we.findIndex((e) => e.date === Z),
          ze = we.length ? we[Le >= 0 ? Le : we.length - 1] : null;
        function Te(e, t, { chip: o = !1 } = {}) {
          const r = (0, i.percentChange)(e, t);
          if (null === r)
            return o
              ? null
              : (0, z.jsx)(c.Copy, {
                  numberOfLines: 1,
                  style: je,
                  children: '\u2014',
                });
          const n = r >= 0,
            l = 0 === r ? q.muted : n ? q.success : q.danger,
            d = N(r, Y);
          return (0, z.jsxs)(s.default, {
            accessible: !0,
            accessibilityLabel: d,
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 3,
              alignSelf: 'flex-end',
              ...(o
                ? {
                    paddingHorizontal: 10,
                    paddingVertical: 3,
                    borderRadius: 12,
                    backgroundColor:
                      0 === r ? q.soft : n ? q.success + '1f' : q.danger + '1f',
                  }
                : {}),
            },
            children: [
              0 !== r &&
                (0, z.jsx)(m.Icon, {
                  name: n ? 'up' : 'down',
                  size: o ? 14 : 12,
                  color: l,
                }),
              (0, z.jsx)(c.Copy, {
                numberOfLines: 1,
                style: [
                  je,
                  {
                    color: l,
                    ...(o
                      ? { fontSize: 13, fontFamily: 'Vazirmatn_600SemiBold' }
                      : {}),
                  },
                ],
                children: o
                  ? d
                  : (0, w.L)('{p}\u066a', {
                      p: (0, i.formatGrouped)(Math.abs(r), 0),
                    }),
              }),
            ],
          });
        }
        const Fe = (
            e,
            t,
            o,
            r,
            { incomplete: n = !1, previousIncomplete: s = !1, tone: i } = {},
          ) => {
            const d = (0, l.shortParts)(o);
            return {
              key: e,
              label: t,
              value: d.value,
              unit: d.unit,
              now: o,
              before: s ? NaN : r,
              incomplete: n,
              tone: i,
              full: (0, l.money)(o, { full: !0, hint: !1 }),
            };
          },
          Oe = (e, t, o, r, n = '') => ({
            key: e,
            label: t,
            value: (0, i.formatGrouped)(o, o % 1 ? 1 : 0),
            unit: y.notebookFa.units.piece,
            now: o,
            before: r,
            extra: n,
          });
        const He = ye?.top || [],
          Pe = He[0]?.revenue || 0,
          Re = ye?.low || [],
          Ue = ye?.business?.customers || [],
          Ne = !(
            !(0, x.measuredText)(ye?.totals.receivedMeasured) &&
            !(0, x.measuredText)(ye?.totals.soldMeasured)
          ),
          Ge = se
            ? (0, S.priceFixItems)(se, { missing: ye?.missing || [] })
            : [],
          Me = (e) => (0, i.formatCompactToman)(e),
          Ve = (e) =>
            (0, z.jsx)(s.default, {
              style: {
                width: 24,
                height: 24,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: e ? q.soft : q.accent,
              },
              children: (0, z.jsx)(c.Copy, {
                style: {
                  fontSize: 12,
                  lineHeight: 18,
                  fontFamily: 'Vazirmatn_600SemiBold',
                  color: e ? q.text : q.onAccent,
                },
                children: (0, i.formatGrouped)(e + 1, 0),
              }),
            }),
          Be = { gap: 10, padding: 16 },
          We = ze
            ? De
              ? `${Se(ze)}: ${T.received} ${(0, i.formatGrouped)(ze.receivedUnits)}\u060c ${T.out} ${(0, i.formatGrouped)(ze.soldUnits)}`
              : $e(ze)
            : void 0,
          Ee = ye
            ? (0, z.jsx)(z.Fragment, {
                children: (0, z.jsxs)(c.Card, {
                  testID: `${B}-chart-card`,
                  style: { gap: 14, padding: 16 },
                  children: [
                    (function () {
                      if (!ye) return null;
                      const e = (0, o.profitIncomplete)(ye.totals),
                        t = ye.totals.profit,
                        r = (0, l.shortParts)(t),
                        n = t < 0,
                        d =
                          !e &&
                          !(0, o.revenueIncomplete)(ye.totals) &&
                          ye.totals.revenue > 0
                            ? Math.round((t / ye.totals.revenue) * 100)
                            : null;
                      return (0, z.jsxs)(s.default, {
                        testID: `${B}-hero`,
                        style: { gap: 4 },
                        children: [
                          (0, z.jsxs)(s.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              justifyContent: 'space-between',
                              alignItems: 'flex-start',
                              gap: 8,
                            },
                            children: [
                              (0, z.jsxs)(s.default, {
                                style: { flex: 1, minWidth: 0, gap: 2 },
                                children: [
                                  (0, z.jsx)(c.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      fontSize: 14,
                                      lineHeight: 22,
                                      color: q.muted,
                                    },
                                    children: U(Y),
                                  }),
                                  (0, z.jsxs)(s.default, {
                                    style: {
                                      flexDirection: 'row-reverse',
                                      alignItems: 'baseline',
                                      gap: 6,
                                      flexWrap: 'wrap',
                                    },
                                    children: [
                                      (0, z.jsx)(c.Copy, {
                                        testID: `${B}-hero-profit`,
                                        numberOfLines: 1,
                                        adjustsFontSizeToFit: !0,
                                        style: {
                                          fontSize: 34,
                                          lineHeight: 46,
                                          fontFamily: 'Vazirmatn_700Bold',
                                          color: e
                                            ? q.warning
                                            : n
                                              ? q.danger
                                              : q.success,
                                        },
                                        children: e
                                          ? '\u2014'
                                          : '\u200e' + (n ? '' : '+') + r.value,
                                      }),
                                      !e &&
                                        (0, z.jsx)(c.Copy, {
                                          numberOfLines: 1,
                                          style: {
                                            fontSize: 14,
                                            lineHeight: 22,
                                            color: q.muted,
                                          },
                                          children: r.unit,
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                              !e &&
                                (0, z.jsx)(s.default, {
                                  style: {
                                    alignItems: 'flex-start',
                                    gap: 4,
                                    paddingTop: 4,
                                  },
                                  children:
                                    null !== d &&
                                    (0, z.jsx)(c.Copy, {
                                      numberOfLines: 1,
                                      style: je,
                                      children: (0, w.L)(
                                        '\u062d\u0627\u0634\u06cc\u0647\u0654 \u0633\u0648\u062f {p}\u066a',
                                        { p: (0, i.formatGrouped)(d, 0) },
                                      ),
                                    }),
                                }),
                            ],
                          }),
                          e
                            ? (0, z.jsx)(c.Copy, {
                                style: [je, { color: q.warning }],
                                children: (0, w.L)(
                                  '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0628\u0639\u0636\u06cc \u06a9\u0627\u0644\u0627\u0647\u0627 \u062b\u0628\u062a \u0646\u0634\u062f\u0647\u061b \u0633\u0648\u062f \u06a9\u0627\u0645\u0644 \u0646\u06cc\u0633\u062a.',
                                ),
                              })
                            : Te(
                                t,
                                (0, o.profitIncomplete)(ye.previous)
                                  ? NaN
                                  : ye.previous.profit,
                                { chip: !0 },
                              ),
                        ],
                      });
                    })(),
                    'report' === e &&
                      (0, z.jsx)(u.Chips, {
                        value: Q,
                        onChange: (e) => X(e),
                        items: [
                          {
                            value: 'money',
                            label: T.chartMoney,
                            testID: `${B}-metric-sales`,
                          },
                          {
                            value: 'units',
                            label: T.chartUnits,
                            testID: `${B}-metric-in`,
                          },
                        ],
                      }),
                    (0, z.jsx)(b.TrendChart, {
                      testID: `${B}-chart`,
                      emptyText: T.empty,
                      series: ke,
                      keys: we.map((e) => e.date),
                      labels: we.map((e) => {
                        return (
                          (t = e.date),
                          1 === Y
                            ? t === we[we.length - 1]?.date
                              ? T.today
                              : (0, w.L)('\u062f\u06cc\u0631\u0648\u0632')
                            : 7 === Y
                              ? H(t).toLocaleDateString((0, w.numberLocale)(), {
                                  weekday: 'short',
                                })
                              : 365 === Y
                                ? H(t).toLocaleDateString((0, w.dateLocale)(), {
                                    month: 'short',
                                  })
                                : P(t)
                        );
                        var t;
                      }),
                      picked: Z,
                      onPick: ee,
                      height: ce ? 280 : K ? 220 : 176,
                      a11y: We,
                    }),
                    !De &&
                      (0, o.profitIncomplete)(ye.totals) &&
                      (0, z.jsx)(c.Copy, {
                        style: je,
                        children: (0, w.L)(
                          '\u0646\u0645\u0648\u062f\u0627\u0631 \u0641\u0642\u0637 \u0645\u0628\u0644\u063a\u200c\u0647\u0627\u06cc \u062f\u0627\u0631\u0627\u06cc \u0642\u06cc\u0645\u062a \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f\u061b \u062c\u0645\u0639 \u06a9\u0644 \u06a9\u0627\u0645\u0644 \u0646\u06cc\u0633\u062a.',
                        ),
                      }),
                    De &&
                      Ne &&
                      (0, z.jsx)(c.Copy, {
                        testID: `${B}-chart-count-note`,
                        style: je,
                        children: T.countOnly,
                      }),
                    !!ze &&
                      (0, z.jsx)(s.default, {
                        style: {
                          paddingVertical: 10,
                          paddingHorizontal: 12,
                          borderRadius: 12,
                          backgroundColor: q.soft,
                        },
                        children: (0, z.jsx)(c.Copy, {
                          testID: `${B}-day`,
                          style: [
                            je,
                            { color: q.text, fontSize: 13, lineHeight: 21 },
                          ],
                          children: De
                            ? `${Se(ze)}: ${T.received} ${(0, i.formatGrouped)(ze.receivedUnits)}\u060c ${T.out} ${(0, i.formatGrouped)(ze.soldUnits)}`
                            : $e(ze),
                        }),
                      }),
                  ],
                }),
              })
            : null,
          Ae = ye
            ? (0, z.jsx)(z.Fragment, {
                children: (0, z.jsxs)(s.default, {
                  style: { gap: 8 },
                  children: [
                    (0, z.jsx)(s.default, {
                      testID: `${B}-kpis`,
                      style: {
                        flexDirection: 'row-reverse',
                        flexWrap: 'wrap',
                        gap: 8,
                      },
                      children: (function () {
                        if (!ye) return [];
                        const t = ye.totals,
                          r = ye.previous,
                          n = ye.business,
                          s = (0, o.revenueIncomplete)(t),
                          i = (0, o.profitIncomplete)(t),
                          l = [],
                          d = (e, t) => (t > 0 ? e / t : 0);
                        return (
                          'income' === e
                            ? (l.push(
                                Fe('income', T.income, t.revenue, r.revenue, {
                                  incomplete: s,
                                  previousIncomplete: (0, o.revenueIncomplete)(
                                    r,
                                  ),
                                }),
                              ),
                              l.push(
                                Fe('cogs', T.cogs, t.cost, r.cost, {
                                  incomplete: i,
                                  previousIncomplete: (0, o.profitIncomplete)(
                                    r,
                                  ),
                                }),
                              ),
                              l.push(
                                Fe('profit', T.profit, t.profit, r.profit, {
                                  incomplete: i,
                                  previousIncomplete: (0, o.profitIncomplete)(
                                    r,
                                  ),
                                  tone: t.profit < 0 ? q.danger : void 0,
                                }),
                              ))
                            : (l.push(
                                Fe('sales', T.sales, t.revenue, r.revenue, {
                                  incomplete: s,
                                  previousIncomplete: (0, o.revenueIncomplete)(
                                    r,
                                  ),
                                }),
                              ),
                              l.push(
                                Fe(
                                  'profit',
                                  T.grossProfit,
                                  t.profit,
                                  r.profit,
                                  {
                                    incomplete: i,
                                    previousIncomplete: (0, o.profitIncomplete)(
                                      r,
                                    ),
                                    tone: t.profit < 0 ? q.danger : void 0,
                                  },
                                ),
                              )),
                          n &&
                            (l.push({
                              ...Oe(
                                'invoices',
                                T.invoices,
                                n.invoices,
                                n.previousInvoices,
                              ),
                              unit: (0, w.L)(
                                '\u0641\u0627\u06a9\u062a\u0648\u0631',
                              ),
                            }),
                            l.push(
                              Fe(
                                'average',
                                T.average,
                                d(t.revenue, n.invoices),
                                d(r.revenue, n.previousInvoices),
                                {
                                  incomplete: s || !n.invoices,
                                  previousIncomplete: (0, o.revenueIncomplete)(
                                    r,
                                  ),
                                },
                              ),
                            ),
                            'report' === e &&
                              l.push(
                                Fe(
                                  'purchases',
                                  T.purchases,
                                  n.purchases,
                                  n.previousPurchases,
                                ),
                              )),
                          'report' === e &&
                            (l.push(
                              Oe(
                                'received',
                                T.received,
                                t.receivedUnits,
                                r.receivedUnits,
                                (0, x.measuredText)(t.receivedMeasured),
                              ),
                            ),
                            l.push(
                              Oe(
                                'out',
                                T.out,
                                t.soldUnits,
                                r.soldUnits,
                                (0, x.measuredText)(t.soldMeasured),
                              ),
                            )),
                          l
                        );
                      })().map(function (e) {
                        const t = le === e.key && !!e.full && !e.incomplete,
                          o = ce ? '12%' : K ? '23%' : '47%';
                        return (0, z.jsxs)(
                          n.default,
                          {
                            testID: `${B}-kpi-${e.key}`,
                            disabled: !e.full || e.incomplete,
                            accessibilityRole: e.full ? 'button' : void 0,
                            accessibilityHint: e.full ? T.tapFull : void 0,
                            onPress: () => ae(t ? null : e.key),
                            style: ({ pressed: e }) => ({
                              flexGrow: 1,
                              flexBasis: o,
                              minWidth: ce ? 128 : 0,
                              paddingVertical: 12,
                              paddingHorizontal: 12,
                              borderRadius: 16,
                              gap: 2,
                              backgroundColor: q.surface,
                              borderWidth: 1,
                              borderColor: t ? q.accent : q.line,
                              opacity: e ? 0.85 : 1,
                            }),
                            children: [
                              (0, z.jsx)(c.Copy, {
                                numberOfLines: 1,
                                style: je,
                                children: e.label,
                              }),
                              t
                                ? (0, z.jsx)(c.Copy, {
                                    testID: `${B}-kpi-${e.key}-full`,
                                    numberOfLines: 2,
                                    style: {
                                      fontSize: 15,
                                      lineHeight: 24,
                                      fontFamily: 'Vazirmatn_700Bold',
                                      color: e.tone || q.text,
                                    },
                                    children: e.full,
                                  })
                                : (0, z.jsxs)(s.default, {
                                    style: {
                                      flexDirection: 'row-reverse',
                                      alignItems: 'baseline',
                                      gap: 4,
                                    },
                                    children: [
                                      (0, z.jsx)(c.Copy, {
                                        numberOfLines: 1,
                                        adjustsFontSizeToFit: !0,
                                        style: {
                                          flexShrink: 1,
                                          fontSize: 22,
                                          lineHeight: 32,
                                          fontFamily: 'Vazirmatn_700Bold',
                                          color: e.incomplete
                                            ? q.warning
                                            : e.tone || q.text,
                                        },
                                        children: e.incomplete
                                          ? '\u2014'
                                          : e.value,
                                      }),
                                      !e.incomplete &&
                                        (0, z.jsx)(c.Copy, {
                                          numberOfLines: 1,
                                          style: [
                                            je,
                                            { fontSize: 11, flexShrink: 1 },
                                          ],
                                          children: e.unit,
                                        }),
                                    ],
                                  }),
                              (0, z.jsx)(s.default, {
                                style: {
                                  flexDirection: 'row-reverse',
                                  justifyContent: 'flex-start',
                                },
                                children: e.incomplete
                                  ? (0, z.jsx)(c.Copy, {
                                      numberOfLines: 1,
                                      style: [je, { color: q.warning }],
                                      children: (0, w.L)(
                                        '\u0642\u06cc\u0645\u062a \u0646\u0627\u0642\u0635',
                                      ),
                                    })
                                  : Te(e.now, e.before),
                              }),
                              !!e.extra &&
                                (0, z.jsx)(c.Copy, {
                                  testID: `${B}-kpi-${e.key}-measured`,
                                  style: [je, { fontSize: 11 }],
                                  children: e.extra,
                                }),
                            ],
                          },
                          e.key,
                        );
                      }),
                    }),
                    (0, z.jsx)(C.UnknownCostNote, {
                      summary: ye,
                      onChip:
                        'report' === e && ye.missing?.length ? ie : void 0,
                    }),
                    !!G &&
                      (0, k.expensesAllowedFor)(G) &&
                      ge.length > 0 &&
                      (0, z.jsx)(D.ExpenseNetLine, {
                        shop: G,
                        from: ge[0].date,
                        to: ge[ge.length - 1].date,
                        profit: ye.totals.profit,
                        incomplete: (0, o.profitIncomplete)(ye.totals),
                        testID: B,
                        preview: W,
                      }),
                  ],
                }),
              })
            : null,
          qe = (0, z.jsx)(z.Fragment, {
            children: (0, z.jsxs)(c.Card, {
              testID: `${B}-top`,
              style: [Be, K && !ce ? { flex: 1 } : null],
              children: [
                (0, z.jsx)(u.Chips, {
                  value: re,
                  onChange: ne,
                  items: [
                    {
                      value: 'top',
                      label: T.bestSellers,
                      testID: `${B}-sellers-top`,
                    },
                    {
                      value: 'low',
                      label: T.worstSellers,
                      testID: `${B}-sellers-low`,
                    },
                  ],
                }),
                (0, z.jsxs)(s.default, {
                  style: { gap: 0 },
                  children: [
                    (0, z.jsx)(c.Copy, {
                      style: Ce,
                      children: 'top' === re ? T.topTitle : T.worstTitle,
                    }),
                    (0, z.jsx)(c.Copy, {
                      style: je,
                      children: 'top' === re ? T.topNote : T.worstNote,
                    }),
                  ],
                }),
                'top' === re
                  ? He.length
                    ? He.map((e, t) =>
                        (0, z.jsxs)(
                          s.default,
                          {
                            style: { gap: 6 },
                            children: [
                              (0, z.jsxs)(s.default, {
                                style: {
                                  flexDirection: 'row-reverse',
                                  alignItems: 'center',
                                  gap: 10,
                                },
                                children: [
                                  Ve(t),
                                  (0, z.jsx)(c.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      flex: 1,
                                      fontSize: 14,
                                      lineHeight: 22,
                                    },
                                    children: e.name,
                                  }),
                                  (0, z.jsx)(c.Copy, {
                                    style: {
                                      fontSize: 14,
                                      lineHeight: 22,
                                      fontFamily: 'Vazirmatn_600SemiBold',
                                    },
                                    children: `${(0, l.shortParts)(e.revenue).value} ${(0, l.shortParts)(e.revenue).unit}`,
                                  }),
                                ],
                              }),
                              (0, z.jsx)(s.default, {
                                style: {
                                  height: 6,
                                  borderRadius: 3,
                                  backgroundColor: q.soft,
                                  overflow: 'hidden',
                                  flexDirection: 'row-reverse',
                                  marginRight: 34,
                                },
                                children: (0, z.jsx)(s.default, {
                                  style: {
                                    width: `${Pe > 0 ? Math.max(2, (e.revenue / Pe) * 100) : 0}%`,
                                    height: 6,
                                    borderRadius: 3,
                                    backgroundColor: q.accent,
                                    opacity: t ? 0.55 : 1,
                                  },
                                }),
                              }),
                            ],
                          },
                          e.productId || t,
                        ),
                      )
                    : (0, z.jsx)(c.Copy, { style: je, children: T.noTop })
                  : Re.length
                    ? Re.map((e, t) => {
                        return (0, z.jsxs)(
                          s.default,
                          {
                            testID: `${B}-low-seller`,
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 10,
                              paddingTop: t ? 10 : 0,
                              borderTopWidth: t ? 1 : 0,
                              borderColor: q.line,
                            },
                            children: [
                              Ve(t),
                              (0, z.jsx)(c.Copy, {
                                numberOfLines: 1,
                                style: {
                                  flex: 1,
                                  fontSize: 14,
                                  lineHeight: 22,
                                },
                                children: e.name,
                              }),
                              (0, z.jsx)(c.Copy, {
                                numberOfLines: 1,
                                style: {
                                  fontSize: 13,
                                  lineHeight: 20,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                  color: e.quantity > 0 ? q.text : q.muted,
                                },
                                children:
                                  e.quantity > 0
                                    ? ((o = e.quantity),
                                      (r = e.unit),
                                      `${(0, i.formatGrouped)(o)} ${y.notebookFa.units[r || 'piece']}` +
                                        (e.revenue > 0
                                          ? ' \xb7 ' + Me(e.revenue)
                                          : ''))
                                    : (0, w.L)('{n} \u0641\u0631\u0648\u0634', {
                                        n: (0, i.formatGrouped)(0),
                                      }),
                              }),
                            ],
                          },
                          e.productId,
                        );
                        var o, r;
                      })
                    : (0, z.jsx)(c.Copy, { style: je, children: T.noWorst }),
              ],
            }),
          }),
          Ke =
            Ue.length > 0 &&
            (0, z.jsxs)(c.Card, {
              testID: `${B}-customers`,
              style: [Be, K && !ce ? { flex: 1 } : null],
              children: [
                (0, z.jsxs)(s.default, {
                  style: { gap: 0 },
                  children: [
                    (0, z.jsx)(c.Copy, {
                      style: Ce,
                      children: T.customersTitle,
                    }),
                    (0, z.jsx)(c.Copy, {
                      style: je,
                      children: T.customersNote,
                    }),
                  ],
                }),
                Ue.map((e, t) =>
                  (0, z.jsxs)(
                    n.default,
                    {
                      testID: `${B}-customer`,
                      accessibilityRole: 'button',
                      disabled: !G,
                      onPress: () =>
                        L.ledgerEntries.open({
                          screen: 'contact',
                          contactId: e.contactId,
                        }),
                      style: ({ pressed: e }) => ({
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 10,
                        paddingTop: t ? 10 : 0,
                        borderTopWidth: t ? 1 : 0,
                        borderColor: q.line,
                        opacity: e ? 0.8 : 1,
                      }),
                      children: [
                        Ve(t),
                        (0, z.jsxs)(s.default, {
                          style: { flex: 1, minWidth: 0 },
                          children: [
                            (0, z.jsx)(c.Copy, {
                              numberOfLines: 1,
                              style: { fontSize: 14, lineHeight: 22 },
                              children: e.name,
                            }),
                            (0, z.jsx)(c.Copy, {
                              numberOfLines: 1,
                              style: [je, { fontSize: 11 }],
                              children: (0, w.L)(
                                '{n} \u0641\u0627\u06a9\u062a\u0648\u0631',
                                { n: (0, i.formatGrouped)(e.count, 0) },
                              ),
                            }),
                          ],
                        }),
                        (0, z.jsx)(c.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 14,
                            lineHeight: 22,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: `${(0, l.shortParts)(e.revenue).value} ${(0, l.shortParts)(e.revenue).unit}`,
                        }),
                      ],
                    },
                    e.contactId,
                  ),
                ),
              ],
            }),
          Ye =
            'report' === e &&
            (0, z.jsxs)(s.default, {
              style: {
                flexDirection: K ? 'row-reverse' : 'column',
                gap: 14,
                alignItems: K ? 'flex-start' : 'stretch',
              },
              children: [qe, Ke],
            });
        return (0, z.jsxs)(s.default, {
          style: { gap: 14 },
          children: [
            !!V &&
              !G &&
              (0, z.jsx)(c.Segmented, {
                value: te,
                onChange: (e) => {
                  (oe(e), ee(null));
                },
                items: [!0, !1].map((e) => ({
                  value: e,
                  label: e ? T.demoData : T.myData,
                  testID: `${B}-${e ? 'demo' : 'real'}`,
                })),
              }),
            (0, z.jsxs)(s.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
              },
              children: [
                (0, z.jsx)(u.Chips, {
                  numberLine: !0,
                  style: { flex: 1 },
                  label: 'income' === e ? T.incomeTitle : T.reportTitle,
                  value: Y,
                  onChange: (e) => {
                    (J(e), ee(null));
                  },
                  items: O.map((e) => ({
                    value: e,
                    label: R(e),
                    testID: `${B}-days-${e}`,
                  })),
                }),
                !!G &&
                  (0, z.jsx)(c.IconKey, {
                    size: 34,
                    icon: 'refresh',
                    testID: `${B}-refresh`,
                    accessibilityLabel: T.refresh,
                    onPress: () => {
                      me.reload();
                    },
                  }),
              ],
            }),
            ye
              ? (0, z.jsxs)($.RevealEach, {
                  children: [
                    !!he &&
                      (0, z.jsx)(c.Copy, {
                        accessibilityRole: 'alert',
                        style: je,
                        children: he,
                      }),
                    !ce && Ee,
                    ce && Ae,
                    !ce && Ae,
                    'income' === e &&
                      (0, z.jsxs)(c.Card, {
                        testID: `${B}-table`,
                        style: { padding: 0, gap: 0, overflow: 'hidden' },
                        children: [
                          (0, z.jsx)(c.Copy, {
                            style: [
                              Ce,
                              {
                                paddingHorizontal: 16,
                                paddingTop: 14,
                                paddingBottom: 8,
                              },
                            ],
                            children: T.lastDays,
                          }),
                          (0, z.jsx)(s.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              paddingHorizontal: 16,
                              paddingVertical: 8,
                              backgroundColor: q.soft,
                              gap: 10,
                            },
                            children: [T.date, T.income, T.profit].map((e, t) =>
                              (0, z.jsx)(
                                c.Copy,
                                {
                                  numberOfLines: 1,
                                  style: [
                                    je,
                                    {
                                      flex: 1,
                                      textAlign: t ? 'left' : 'right',
                                    },
                                  ],
                                  children: e,
                                },
                                e,
                              ),
                            ),
                          }),
                          ge
                            .slice(-7)
                            .reverse()
                            .map((e) => {
                              const t = (0, l.shortParts)(e.profit, e.date),
                                r = (0, l.shortParts)(e.revenue, e.date);
                              return (0, z.jsxs)(
                                s.default,
                                {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    paddingHorizontal: 16,
                                    paddingVertical: 11,
                                    borderTopWidth: 1,
                                    borderColor: q.line,
                                    gap: 10,
                                  },
                                  children: [
                                    (0, z.jsx)(c.Copy, {
                                      numberOfLines: 1,
                                      style: {
                                        flex: 1,
                                        fontSize: 13,
                                        lineHeight: 20,
                                      },
                                      children: P(e.date),
                                    }),
                                    (0, z.jsx)(c.Copy, {
                                      numberOfLines: 1,
                                      style: {
                                        flex: 1,
                                        fontSize: 13,
                                        lineHeight: 20,
                                        textAlign: 'left',
                                      },
                                      children: (0, o.revenueIncomplete)(e)
                                        ? '\u2014'
                                        : `${r.value} ${r.unit}`,
                                    }),
                                    (0, z.jsx)(c.Copy, {
                                      numberOfLines: 1,
                                      style: {
                                        flex: 1,
                                        fontSize: 13,
                                        lineHeight: 20,
                                        textAlign: 'left',
                                        fontFamily: 'Vazirmatn_600SemiBold',
                                        color: (0, o.profitIncomplete)(e)
                                          ? q.warning
                                          : e.profit < 0
                                            ? q.danger
                                            : e.profit > 0
                                              ? q.success
                                              : q.text,
                                      },
                                      children: (0, o.profitIncomplete)(e)
                                        ? '\u2014'
                                        : `${e.profit > 0 ? '+' : ''}${t.value} ${t.unit}`,
                                    }),
                                  ],
                                },
                                e.date,
                              );
                            }),
                        ],
                      }),
                    ce
                      ? (0, z.jsxs)(s.default, {
                          testID: `${B}-desk-row`,
                          style: {
                            flexDirection: 'row-reverse',
                            gap: 14,
                            alignItems: 'flex-start',
                          },
                          children: [
                            (0, z.jsx)(s.default, {
                              style: { flex: 1.55, minWidth: 0 },
                              children: Ee,
                            }),
                            (0, z.jsxs)(s.default, {
                              style: { flex: 1, minWidth: 0, gap: 14 },
                              children: [qe, Ke],
                            }),
                          ],
                        })
                      : Ye,
                    'report' === e &&
                      (0, z.jsxs)(c.Card, {
                        testID: `${B}-low`,
                        style: Be,
                        children: [
                          (0, z.jsxs)(s.default, {
                            testID: `${B}-low-${be.mode}`,
                            style: { gap: 0 },
                            children: [
                              (0, z.jsx)(c.Copy, {
                                style: Ce,
                                children: be.title,
                              }),
                              (0, z.jsx)(c.Copy, {
                                style: je,
                                children: be.note,
                              }),
                            ],
                          }),
                          be.items.length
                            ? be.items.map((e, t) =>
                                (0, z.jsxs)(
                                  s.default,
                                  {
                                    style: {
                                      flexDirection: 'row-reverse',
                                      alignItems: 'center',
                                      gap: 10,
                                      paddingTop: t ? 10 : 0,
                                      borderTopWidth: t ? 1 : 0,
                                      borderColor: q.line,
                                    },
                                    children: [
                                      (0, z.jsx)(s.default, {
                                        style: {
                                          width: 8,
                                          height: 8,
                                          borderRadius: 4,
                                          backgroundColor:
                                            e.stock <= 0 ? q.danger : q.warning,
                                        },
                                      }),
                                      (0, z.jsx)(c.Copy, {
                                        numberOfLines: 1,
                                        style: {
                                          flex: 1,
                                          fontSize: 14,
                                          lineHeight: 22,
                                        },
                                        children: e.name,
                                      }),
                                      (0, z.jsx)(c.Copy, {
                                        style: {
                                          fontSize: 13,
                                          lineHeight: 20,
                                          fontFamily: 'Vazirmatn_600SemiBold',
                                          color:
                                            e.stock <= 0 ? q.danger : q.text,
                                        },
                                        children:
                                          e.stock <= 0
                                            ? T.outOfStock
                                            : `${(0, i.formatGrouped)(e.stock)} ${y.notebookFa.units[e.unit || 'piece']}`,
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              )
                            : (0, z.jsx)(c.Copy, {
                                style: je,
                                children: T.outEmpty,
                              }),
                        ],
                      }),
                  ],
                })
              : (0, z.jsx)(c.Card, {
                  children: (0, z.jsx)(c.Copy, {
                    style: je,
                    children: he || y.notebookFa.summaryLoading,
                  }),
                }),
            (0, z.jsx)(I.MissingPriceSheet, {
              visible: !!se,
              kind: se,
              items: Ge,
              total: (0, S.summaryFixTotal)(se || 'sale', ye?.totals),
              products: M.products,
              testID: B,
              onClose: () => ie(null),
              onSave: A,
              onEditor: E
                ? (e, t) => {
                    (ie(null), E(e, t));
                  }
                : void 0,
              onRefresh: G
                ? () => {
                    const e = (0, v.scoped)(G.id, 'summary:' + Y);
                    return (e && v.swrStore.invalidate(e), me.reload());
                  }
                : void 0,
            }),
          ],
        });
      }));
    var t = _r(_d[0]),
      o = _r(_d[1]),
      r = _r(_d[2]);
    _r(_d[3]);
    var n = e(_r(_d[4])),
      s = e(_r(_d[5])),
      i = _r(_d[6]),
      l = _r(_d[7]),
      d = _r(_d[8]),
      c = _r(_d[9]),
      u = _r(_d[10]),
      p = _r(_d[11]),
      m = _r(_d[12]),
      f = _r(_d[13]),
      h = _r(_d[14]),
      y = _r(_d[15]),
      x = _r(_d[16]),
      v = _r(_d[17]),
      b = _r(_d[18]),
      j = _r(_d[19]),
      C = _r(_d[20]),
      I = _r(_d[21]),
      S = _r(_d[22]),
      $ = _r(_d[23]),
      w = _r(_d[24]),
      D = _r(_d[25]),
      k = _r(_d[26]),
      L = _r(_d[27]),
      z = _r(_d[28]);
    const T = (0, w.localized)({
        reportTitle:
          '\u06af\u0632\u0627\u0631\u0634 \u0641\u0631\u0648\u0634 \u0648 \u0627\u0646\u0628\u0627\u0631',
        incomeTitle: '\u062f\u0631\u0622\u0645\u062f \u0648 \u0633\u0648\u062f',
        days: '\u0631\u0648\u0632',
        refresh:
          '\u062a\u0627\u0632\u0647\u200c\u0633\u0627\u0632\u06cc \u06af\u0632\u0627\u0631\u0634',
        sales: '\u0641\u0631\u0648\u0634',
        grossProfit: '\u0633\u0648\u062f \u0646\u0627\u062e\u0627\u0644\u0635',
        received: '\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
        out: '\u062e\u0631\u0648\u062c \u06a9\u0627\u0644\u0627',
        income: '\u062f\u0631\u0622\u0645\u062f',
        cogs: '\u0628\u0647\u0627\u06cc \u06a9\u0627\u0644\u0627\u06cc \u0641\u0631\u0648\u062e\u062a\u0647\u200c\u0634\u062f\u0647',
        profit: '\u0633\u0648\u062f',
        inShort: '\u0648\u0631\u0648\u062f',
        outShort: '\u062e\u0631\u0648\u062c',
        get toman() {
          return (0, l.swapUnit)((0, w.L)('\u062a\u0648\u0645\u0627\u0646'));
        },
        more: '\u0628\u06cc\u0634\u062a\u0631',
        less: '\u06a9\u0645\u062a\u0631',
        than: '\u0627\u0632 {n} \u0631\u0648\u0632 \u0642\u0628\u0644',
        countOnly:
          '\u0641\u0642\u0637 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0639\u062f\u062f\u06cc\u061b \u06a9\u06cc\u0644\u0648\u060c \u0645\u062a\u0631 \u0648 \u0644\u06cc\u062a\u0631 \u062c\u062f\u0627 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
        empty:
          '\u062f\u0631 \u0627\u06cc\u0646 \u0628\u0627\u0632\u0647 \u0686\u06cc\u0632\u06cc \u0628\u0631\u0627\u06cc \u0646\u0645\u0627\u06cc\u0634 \u062b\u0628\u062a \u0646\u0634\u062f\u0647 \u0627\u0633\u062a.',
        topTitle:
          '\u067e\u0631\u0641\u0631\u0648\u0634\u200c\u062a\u0631\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627',
        topNote:
          '\u0628\u0631 \u0627\u0633\u0627\u0633 \u0645\u0628\u0644\u063a \u0641\u0631\u0648\u0634 \u062f\u0631 \u0627\u06cc\u0646 \u0628\u0627\u0632\u0647',
        noTop:
          '\u062f\u0631 \u0627\u06cc\u0646 \u0628\u0627\u0632\u0647 \u0641\u0631\u0648\u0634\u06cc \u0628\u0627 \u0642\u06cc\u0645\u062a \u062b\u0628\u062a \u0646\u0634\u062f\u0647.',
        bestSellers: '\u067e\u0631\u0641\u0631\u0648\u0634\u200c\u0647\u0627',
        worstSellers:
          '\u06a9\u0645\u200c\u0641\u0631\u0648\u0634\u200c\u0647\u0627',
        worstTitle:
          '\u06a9\u0645\u200c\u0641\u0631\u0648\u0634\u200c\u062a\u0631\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627',
        worstNote:
          '\u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0645\u0648\u062c\u0648\u062f \u0628\u0627 \u06a9\u0645\u062a\u0631\u06cc\u0646 \u0641\u0631\u0648\u0634 \u062f\u0631 \u0627\u06cc\u0646 \u0628\u0627\u0632\u0647',
        noWorst:
          '\u06a9\u0627\u0644\u0627\u06cc\u06cc \u0628\u0627 \u0645\u0648\u062c\u0648\u062f\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647.',
        lowTitle:
          '\u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0631\u0648 \u0628\u0647 \u0627\u062a\u0645\u0627\u0645',
        lowNote:
          '\u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u0631\u0627\u0628\u0631 \u06cc\u0627 \u06a9\u0645\u062a\u0631 \u0627\u0632 \u062d\u062f \u0647\u0634\u062f\u0627\u0631',
        outOfStock: '\u0639\u062f\u0645 \u0645\u0648\u062c\u0648\u062f\u06cc',
        outTitle: '\u0646\u0627\u0645\u0648\u062c\u0648\u062f\u0647\u0627',
        outNote:
          '\u0647\u06cc\u0686 \u0647\u0634\u062f\u0627\u0631\u06cc \u0641\u0639\u0627\u0644 \u0646\u06cc\u0633\u062a\u061b \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u062a\u0645\u0627\u0645 \u0634\u062f\u0647\u200c\u0627\u0646\u062f',
        outEmpty:
          '\u0647\u0645\u0647\u0654 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0645\u0648\u062c\u0648\u062f\u06cc \u062f\u0627\u0631\u0646\u062f.',
        lastDays: '\u06f7 \u0631\u0648\u0632 \u0627\u062e\u06cc\u0631',
        date: '\u062a\u0627\u0631\u06cc\u062e',
        demoData: '\u0646\u0645\u0648\u0646\u0647',
        myData: '\u062f\u0627\u062f\u0647\u200c\u0647\u0627\u06cc \u0645\u0646',
        cost: '\u0628\u0647\u0627\u06cc \u06a9\u0627\u0644\u0627',
        purchases: '\u062e\u0631\u06cc\u062f \u06a9\u0627\u0644\u0627',
        invoices:
          '\u062a\u0639\u062f\u0627\u062f \u0641\u0627\u06a9\u062a\u0648\u0631 \u0641\u0631\u0648\u0634',
        average:
          '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0647\u0631 \u0641\u0627\u06a9\u062a\u0648\u0631',
        margin: '\u062d\u0627\u0634\u06cc\u0647\u0654 \u0633\u0648\u062f',
        customersTitle:
          '\u0628\u0647\u062a\u0631\u06cc\u0646 \u0645\u0634\u062a\u0631\u06cc\u200c\u0647\u0627',
        customersNote:
          '\u0628\u0631 \u0627\u0633\u0627\u0633 \u062c\u0645\u0639 \u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0628\u0627\u0632\u0647',
        chartMoney: '\u0645\u0628\u0644\u063a',
        chartUnits: '\u062a\u0639\u062f\u0627\u062f \u06a9\u0627\u0644\u0627',
        tapFull:
          '\u0628\u0631\u0627\u06cc \u062f\u06cc\u062f\u0646 \u0639\u062f\u062f \u06a9\u0627\u0645\u0644 \u0628\u0632\u0646',
        today: '\u0627\u0645\u0631\u0648\u0632',
        week: '\u0647\u0641\u062a\u0647',
        month: '\u0645\u0627\u0647',
        quarter: '\u06f3 \u0645\u0627\u0647',
        year: '\u0633\u0627\u0644',
      }),
      F = 30,
      O = [1, 7, 30, 90, 365];
    function H(e) {
      const [t, o, r] = e.split('-').map(Number);
      return new Date(t, o - 1, r, 12);
    }
    const _ = (e) =>
        H(e).toLocaleDateString((0, w.dateLocale)(), {
          weekday: 'long',
          day: 'numeric',
          month: 'long',
        }),
      P = (e) =>
        H(e).toLocaleDateString((0, w.dateLocale)(), {
          day: 'numeric',
          month: 'short',
        }),
      R = (e) =>
        1 === e
          ? T.today
          : 7 === e
            ? T.week
            : 30 === e
              ? T.month
              : 90 === e
                ? T.quarter
                : T.year,
      U = (e) =>
        1 === e
          ? (0, w.L)('\u0633\u0648\u062f \u0627\u0645\u0631\u0648\u0632')
          : 365 === e
            ? (0, w.L)(
                '\u0633\u0648\u062f \u06cc\u06a9 \u0633\u0627\u0644 \u0627\u062e\u06cc\u0631',
              )
            : (0, w.L)(
                '\u0633\u0648\u062f {n} \u0631\u0648\u0632 \u0627\u062e\u06cc\u0631',
                { n: (0, i.faDigits)(e) },
              );
    function N(e, t) {
      const o = {
        p: (0, i.formatGrouped)(Math.abs(e), 0),
        n: (0, i.faDigits)(t),
      };
      return 1 === t
        ? e >= 0
          ? (0, w.L)(
              '{p}\u066a \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u062f\u06cc\u0631\u0648\u0632',
              o,
            )
          : (0, w.L)(
              '{p}\u066a \u06a9\u0645\u062a\u0631 \u0627\u0632 \u062f\u06cc\u0631\u0648\u0632',
              o,
            )
        : e >= 0
          ? (0, w.L)(
              '{p}\u066a \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 {n} \u0631\u0648\u0632 \u0642\u0628\u0644',
              o,
            )
          : (0, w.L)(
              '{p}\u066a \u06a9\u0645\u062a\u0631 \u0627\u0632 {n} \u0631\u0648\u0632 \u0642\u0628\u0644',
              o,
            );
    }
  },
  839,
  [
    611, 456, 2, 94, 232, 99, 434, 435, 455, 407, 840, 481, 385, 382, 519, 580,
    841, 489, 846, 847, 845, 848, 849, 657, 311, 850, 623, 527, 338,
  ],
);
