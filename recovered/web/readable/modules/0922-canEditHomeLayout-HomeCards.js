// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 922; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'canEditHomeLayout', {
        enumerable: !0,
        get: function () {
          return q;
        },
      }),
      (_e.HomeCards = function ({
        shop: e,
        businessType: i,
        role: v,
        summary: S,
        state: G,
        onSelect: $,
        onToday: J,
        onData: Y,
        pro: Q = !1,
        canWrite: X = !1,
        canNote: Z = !1,
        onAdd: ee,
        onActivity: te,
        userName: oe,
        menuSheet: se,
        onMenuSheet: ne,
        onLowStock: ie,
        shortcuts: le = {},
        prices: re = { sell: !0, buy: !0 },
        onFixTask: ae,
        free: de,
        startInvoice: ce,
        attention: ue,
      }) {
        const { colors: ye } = (0, C.useTheme)(),
          he = (0, w.useDesktop)(),
          me = he ? { height: '100%', minHeight: 170 } : void 0,
          fe = q(e, v),
          [ge, pe] = (0, n.useState)(null),
          [xe, be] = (0, n.useState)(!1),
          je = fe && xe,
          [ke, we] = (0, n.useState)(!1),
          [ve, Ce] = (0, n.useState)(''),
          { width: Se } = (0, u.default)(),
          Le = (0, K.useSwr)(
            e ? (0, K.scoped)(e.id, 'notebook-shop') : null,
            () => (0, L.readNotebookShop)(e),
          ),
          Fe = (0, L.uniqueCards)(Le.data?.settings?.homeCards),
          He =
            Array.isArray(Le.data?.settings?.homeCards) &&
            L.OLD_DEFAULT_LAYOUTS.includes(
              Le.data.settings.homeCards.join(','),
            ),
          De = i || Le.data?.businessType || void 0,
          Ie = e
            ? He || !Fe.length
              ? (0, L.defaultCards)(De)
              : Fe
            : (0, L.defaultCards)(i),
          Oe = (0, n.useMemo)(
            () =>
              (0, O.readHomeLayout)(
                e ? Le.data?.settings?.homeCards : void 0,
                Ie,
              ),
            [
              e?.id,
              JSON.stringify(Le.data?.settings?.homeCards ?? null),
              Ie.join(','),
            ],
          ),
          ze = e ? e.id : null,
          Ee = ge && ge.key === ze ? ge.layout : null,
          Te = (e) => pe(e ? { key: ze, layout: e } : null),
          Ae = Ee || Oe,
          We = (0, O.layoutCards)(Ae),
          Me = (0, O.accountsKey)(Ae.hiddenKeys),
          Pe =
            Me.filter && le.ledger
              ? {
                  ...le,
                  ledger: () =>
                    F.ledgerEntries.open({
                      screen: 'contacts',
                      filter: Me.filter,
                    }),
                }
              : le;
        ((0, n.useEffect)(() => {
          e && Ee && (0, O.sameLayout)(Ee, Oe) && Te(null);
        }, [e?.id, Ee, (0, O.writeHomeLayout)(Oe).join(',')]),
          (0, n.useEffect)(() => {
            fe || be(!1);
          }, [fe]));
        const Re = (0, K.useSwr)(
            e && We.includes('ledger')
              ? (0, K.scoped)(e.id, 'ledger-summary')
              : null,
            () => (0, L.readLedgerSummary)(e),
          ),
          Be = Re.data ?? null,
          Ke = !!Re.error,
          Ne = (0, t.useShopDay)(e?.timezone),
          qe = (0, K.useSwr)(
            e
              ? (0, K.scoped)(
                  e.id,
                  'insight:' +
                    (0, R.localeLang)() +
                    ':' +
                    Ne +
                    ':' +
                    (0, f.insightSlot)(),
                )
              : null,
            () => (0, L.readInsight)(e),
          ),
          Ue = (0, K.useSwr)(e ? (0, K.scoped)(e.id, 'summary:7') : null, () =>
            (0, L.readSummary)(e, 7),
          ),
          Ve = (e) => 'hidden_by_owner' === e || 'feature_not_in_plan' === e,
          Ge = e
            ? Ve(qe.errorCode) || Ve(Ue.errorCode)
              ? 'hidden'
              : qe.data
                ? 'ready'
                : Ue.data
                  ? 'fallback'
                  : 'loading'
            : 'local',
          $e = (0, n.useMemo)(
            () =>
              e && 'fallback' !== Ge
                ? null
                : (0, f.localDailyInsight)({
                    summary: e
                      ? Ue.data || null
                      : (0, p.summarizeLocal)(
                          G.movements,
                          7,
                          new Date(),
                          G.products,
                        ),
                    products: G.products,
                    movements: G.movements,
                    timezone: e?.timezone,
                  }),
            [e?.id, e?.timezone, Ge, Ue.data, G.products, G.movements, Ne],
          ),
          Je = 'ready' === Ge ? qe.data || null : $e;
        (0, n.useMemo)(
          () =>
            Je && 'loading' !== Ge
              ? (0, A.homeTasks)({
                  products: G.products,
                  coverage: Je.stats,
                  sell: re.sell,
                  buy: re.buy,
                })
              : [],
          [Je, Ge, G.products, re.sell, re.buy],
        );
        async function Ye(t) {
          if (!(0, O.sameLayout)(t, Ae) && (Te(t), e)) {
            (we(!0), Ce(''));
            try {
              (await (0, L.patchNotebookSettings)(e, {
                homeCards: (0, O.writeHomeLayout)(t),
              }),
                await Le.reload());
            } catch (e) {
              Ce(
                e instanceof Error
                  ? (0, R.L)(
                      '\u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f ({error})',
                      { error: e.message },
                    )
                  : (0, R.L)(
                      '\u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f.',
                    ),
              );
            } finally {
              we(!1);
            }
          }
        }
        const Qe = G.products.filter((e) => !e.archivedAt),
          Xe = [...Qe].slice(-4).reverse(),
          Ze = {
            fontSize: 16,
            lineHeight: 24,
            fontFamily: 'Vazirmatn_600SemiBold',
          },
          et = {
            fontSize: 22,
            lineHeight: 30,
            fontFamily: 'Vazirmatn_700Bold',
          },
          tt = { fontSize: 11, lineHeight: 18, color: ye.muted },
          ot = { fontSize: 12, lineHeight: 18, color: ye.muted };
        function st(e, t, o) {
          return (0, N.jsxs)(c.default, {
            style: { alignItems: 'center' },
            children: [
              o && (0, N.jsx)(j.Icon, { name: o, size: 20, color: ye.text }),
              (0, N.jsx)(x.Copy, {
                style: et,
                children: e.toLocaleString((0, R.numberLocale)()),
              }),
              (0, N.jsx)(x.Copy, { style: tt, children: t }),
            ],
          });
        }
        function nt(e, t, o, s = !1, n = '') {
          return (0, N.jsxs)(c.default, {
            testID: e,
            style: {
              flex: 1,
              minWidth: 0,
              gap: 0,
              padding: 10,
              borderRadius: 12,
              backgroundColor: ye.soft,
            },
            children: [
              (0, N.jsx)(x.Copy, { numberOfLines: 1, style: ot, children: t }),
              (0, N.jsx)(x.Copy, {
                adjustsFontSizeToFit: !0,
                numberOfLines: o.unit && o.value.length > 10 ? void 0 : 1,
                style: {
                  fontSize: o.unit ? (0, z.compactSize)(o.value) : 17,
                  lineHeight: 30,
                  fontFamily: 'Vazirmatn_700Bold',
                  color: s ? ye.danger : ye.text,
                },
                children: o.value,
              }),
              !!o.unit &&
                (0, N.jsx)(x.Copy, {
                  numberOfLines: 1,
                  style: ot,
                  children: o.unit,
                }),
              !!n &&
                (0, N.jsx)(x.Copy, {
                  style: [ot, { fontSize: 11 }],
                  children: n,
                }),
            ],
          });
        }
        const it = void 0 !== S.revenue || void 0 !== S.costTotal,
          lt = (e, t = !1) =>
            it && !t
              ? { value: (0, B.moneyShort)(Number(e) || 0), unit: '' }
              : { value: '\u2014', unit: '' },
          rt = (e) => ({
            value: (0, y.formatGrouped)(Number(e) || 0),
            unit: P.notebookFa.units.piece,
          }),
          at = (e) =>
            (0, N.jsxs)(x.Card, {
              testID: 'home-today',
              style: [{ gap: 10 }, e],
              children: [
                (0, N.jsxs)(c.default, {
                  style: x.common.between,
                  children: [
                    (0, N.jsx)(x.Copy, {
                      style: Ze,
                      children: P.notebookFa.cards.today,
                    }),
                    it &&
                      (0, N.jsx)(x.Copy, {
                        style: ot,
                        children: (0, B.currencyUnit)(),
                      }),
                  ],
                }),
                (0, N.jsxs)(l.default, {
                  testID: 'home-today-money',
                  accessibilityRole: 'button',
                  accessibilityLabel: `${P.notebookFa.revenue} ${P.notebookFa.costLabel}`,
                  onPress: Y,
                  style: ({ pressed: e }) => ({
                    flexDirection: 'row-reverse',
                    gap: 8,
                    opacity: e ? 0.85 : 1,
                  }),
                  children: [
                    nt(
                      'home-today-revenue',
                      P.notebookFa.revenue,
                      lt(S.revenue, (0, s.revenueIncomplete)(S)),
                    ),
                    nt(
                      'home-today-cost',
                      P.notebookFa.costLabel,
                      lt(S.costTotal, (0, s.profitIncomplete)(S)),
                    ),
                  ],
                }),
                (0, N.jsxs)(l.default, {
                  testID: 'home-today-units',
                  accessibilityRole: 'button',
                  accessibilityLabel: `${P.notebookFa.flowIn} ${P.notebookFa.flowOut}`,
                  onPress: J,
                  style: ({ pressed: e }) => ({
                    flexDirection: 'row-reverse',
                    gap: 8,
                    opacity: e ? 0.85 : 1,
                  }),
                  children: [
                    nt(
                      'home-today-in',
                      P.notebookFa.flowIn,
                      rt(S.received),
                      !1,
                      (0, z.measuredText)(S.receivedMeasured),
                    ),
                    nt(
                      'home-today-out',
                      P.notebookFa.flowOut,
                      rt(S.sold),
                      !1,
                      (0, z.measuredText)(S.soldMeasured),
                    ),
                  ],
                }),
                it && (0, N.jsx)(o.UnknownCostNote, { summary: S }),
              ],
            });
        function dt(t) {
          const o = me;
          return 'today' === t || 'flow' === t
            ? at(o)
            : 'week' === t
              ? (0, N.jsx)(z.HomeSummaryCard, { shop: e, state: G })
              : 'recent' === t
                ? (0, N.jsx)(_.ActivityCard, {
                    shop: e,
                    state: G,
                    onMore: te,
                    onSelect: $,
                    canNote: Z,
                  })
                : 'ledger' === t
                  ? (0, N.jsx)(x.Card, {
                      style: o,
                      children: (0, N.jsxs)(l.default, {
                        accessibilityRole: 'button',
                        onPress: () =>
                          F.ledgerEntries.open({ screen: 'contacts' }),
                        style: { gap: 14 },
                        children: [
                          (0, N.jsx)(x.Copy, {
                            style: Ze,
                            children: P.ledgerFa.whoOwes,
                          }),
                          Be
                            ? (0, N.jsxs)(N.Fragment, {
                                children: [
                                  (0, N.jsxs)(c.default, {
                                    style: [
                                      x.common.row,
                                      { justifyContent: 'space-around' },
                                    ],
                                    children: [
                                      st(
                                        Be.theyOweMe || 0,
                                        P.ledgerFa.theyOweMe,
                                      ),
                                      st(Be.iOwe || 0, P.ledgerFa.iAmInDebt),
                                    ],
                                  }),
                                  (0, N.jsxs)(x.Copy, {
                                    style: tt,
                                    children: [
                                      P.ledgerFa.chequeThisWeek,
                                      ': ',
                                      (0, B.money)(Be.chequesDue7Days || 0, {
                                        full: !0,
                                      }),
                                    ],
                                  }),
                                ],
                              })
                            : Ke
                              ? (0, N.jsxs)(c.default, {
                                  style: {
                                    gap: 6,
                                    padding: 10,
                                    borderRadius: 12,
                                    backgroundColor: ye.soft,
                                  },
                                  children: [
                                    (0, N.jsx)(x.Copy, {
                                      style: { fontSize: 12, lineHeight: 18 },
                                      children: P.ledgerFa.proGate,
                                    }),
                                    (0, N.jsx)(x.Copy, {
                                      style: tt,
                                      children: P.ledgerFa.viewPro,
                                    }),
                                  ],
                                })
                              : (0, N.jsx)(x.Copy, {
                                  style: ot,
                                  children: P.ledgerFa.loading,
                                }),
                        ],
                      }),
                    })
                  : (0, N.jsxs)(x.Card, {
                      style: o,
                      children: [
                        (0, N.jsx)(x.Copy, {
                          style: Ze,
                          children: P.notebookFa.cards.fresh,
                        }),
                        Xe.slice(0, 3).map((e) =>
                          (0, N.jsxs)(
                            l.default,
                            {
                              accessibilityRole: 'button',
                              onPress: () => $(e),
                              style: x.common.row,
                              children: [
                                (0, N.jsx)(c.default, {
                                  style: { width: 38 },
                                  children: (0, N.jsx)(k.ProductPhoto, {
                                    product: e,
                                    height: 38,
                                  }),
                                }),
                                (0, N.jsx)(x.Copy, {
                                  numberOfLines: 1,
                                  style: [
                                    x.common.flex,
                                    { fontSize: 15, lineHeight: 24 },
                                  ],
                                  children: e.name,
                                }),
                                (0, N.jsx)(x.Copy, {
                                  style: {
                                    fontSize: 0 !== e.stock ? 15 : 12,
                                    lineHeight: 24,
                                    color: 0 !== e.stock ? void 0 : ye.danger,
                                  },
                                  children:
                                    0 !== e.stock
                                      ? e.stock.toLocaleString(
                                          (0, R.numberLocale)(),
                                        )
                                      : (0, R.L)(h.OUT_OF_STOCK),
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                        !Xe.length &&
                          (0, N.jsx)(x.Copy, {
                            style: ot,
                            children: P.notebookFa.freshEmpty,
                          }),
                      ],
                    });
        }
        const ct = (0, T.homeKeyInfo)(Pe),
          ut = (0, I.widgetInfo)(),
          yt = {
            'w:expenses': Pe.expenses,
            'w:payments': Pe.ledger,
            'w:activity': te,
            'w:cheques': Pe.cheques,
            'w:reminders': Pe.reminders,
            'w:sales': Pe.reports || Y,
            'w:low': ie,
          },
          ht = (t) =>
            'w:sales' === t ||
            'w:low' === t ||
            ('w:activity' === t ? !!e : !!yt[t]),
          mt = (e) => O.HOME_CARDS.includes(e),
          ft = (e) =>
            'invoice' === e
              ? !!ce
              : 'keys' === e
                ? ct.length > 0
                : !(0, O.isHomeWidget)(e) || ht(e),
          gt = (e) =>
            'insight' === e
              ? (0, R.L)(
                  '\u062a\u062d\u0644\u06cc\u0644 \u0647\u0648\u0634\u0645\u0646\u062f',
                )
              : 'invoice' === e
                ? (0, R.L)(
                    '\u0634\u0631\u0648\u0639 \u0641\u0627\u06a9\u062a\u0648\u0631',
                  )
                : 'keys' === e
                  ? (0, R.L)(
                      '\u06a9\u0644\u06cc\u062f\u0647\u0627\u06cc \u0645\u06cc\u0627\u0646\u200c\u0628\u0631',
                    )
                  : (0, O.isHomeWidget)(e)
                    ? ut[e].name
                    : P.notebookFa.cards[e],
          pt = {
            today: 'clock',
            flow: 'clock',
            week: 'chart',
            recent: 'list',
            fresh: 'inventory',
            ledger: 'user',
          },
          xt = (e) =>
            'insight' === e
              ? 'ai'
              : 'invoice' === e
                ? 'receipt'
                : 'keys' === e
                  ? 'grid'
                  : (0, O.isHomeWidget)(e)
                    ? ut[e].icon
                    : pt[e],
          bt = (e) => {
            Ye(e);
          },
          jt = Ae.blocks.filter(
            (e) => ft(e) && (je || Qe.length > 0 || !mt(e)),
          ),
          kt = (e, t) => {
            const o = jt.indexOf(e),
              s = jt[o + t];
            return s ? () => bt((0, O.swapBlocks)(Ae, e, s)) : void 0;
          },
          wt = de
            ? (0, N.jsx)(T.FreePlanLine, {
                left: de.left,
                limit: de.limit,
                onPlans: de.onPlans,
              })
            : null,
          vt =
            'hidden' === Ge
              ? (0, N.jsxs)(c.default, {
                  style: { gap: 10 },
                  children: [
                    (0, N.jsx)(c.default, {
                      style: x.common.between,
                      children: (0, N.jsx)(x.Copy, {
                        testID: 'home-greeting',
                        style: [
                          x.common.flex,
                          {
                            fontSize: 20,
                            lineHeight: 30,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                        ],
                        children: (0, f.greetingText)(oe),
                      }),
                    }),
                    wt,
                  ],
                })
              : (0, N.jsx)(E.InsightCard, {
                  insight: Je,
                  loading: 'loading' === Ge,
                  stored: 'ready' === Ge,
                  userName: oe,
                  tasks: wt || void 0,
                });
        function Ct(t) {
          return 'insight' === t
            ? vt
            : 'invoice' === t
              ? ce || null
              : 'keys' === t
                ? (0, N.jsx)(T.HomeShortcuts, {
                    handlers: Pe,
                    columns: he ? 'all' : 4,
                    hidden: (0, O.gridHiddenKeys)(Ae.hiddenKeys),
                    editing: je,
                    onHide: (e) => bt((0, O.hideKey)(Ae, e)),
                  })
                : (0, O.isHomeWidget)(t)
                  ? (0, N.jsx)(I.HomeWidgetCard, {
                      kind: t,
                      shop: e,
                      state: G,
                      summary: S,
                      revenueUnknown: (0, s.revenueIncomplete)(S),
                      chequesOn: !!Pe.cheques,
                      onOpen: yt[t],
                    })
                  : dt(t);
        }
        const St = (e, t) =>
          'insight' === e
            ? 0
            : 'invoice' === e
              ? 40
              : 'keys' === e
                ? 80
                : 160 + 80 * t;
        function Lt(e, t, o) {
          const s = Ct(e);
          if (!s) return null;
          const n = e.replace(':', '-');
          return 'keys' === e
            ? (0, N.jsx)(
                V,
                {
                  delay: St(e, t),
                  style: o,
                  children: (0, N.jsxs)(c.default, {
                    style: { gap: 8 },
                    children: [
                      je &&
                        (0, N.jsx)(U, {
                          testID: 'home-edit-block-keys',
                          name: gt(e),
                          onEarlier: kt(e, -1),
                          onLater: kt(e, 1),
                        }),
                      s,
                    ],
                  }),
                },
                e,
              )
            : (0, N.jsx)(
                V,
                {
                  delay: St(e, t),
                  style: o,
                  children: (0, N.jsx)(D.EditFrame, {
                    editing: je,
                    name: gt(e),
                    seed: t,
                    testID: 'home-edit-block-' + n,
                    onRemove: () => bt((0, O.removeBlock)(Ae, e)),
                    onEarlier: kt(e, -1),
                    onLater: kt(e, 1),
                    children: s,
                  }),
                },
                e,
              );
        }
        const Ft = Se >= 700 ? 3 : 2;
        function Ht(e, t = 0) {
          const o = [];
          let s = [];
          const n = () => {
            if (!s.length) return;
            const n = s;
            s = [];
            for (let s = 0; s < n.length; s += Ft) {
              const i = n.slice(s, s + Ft);
              o.push(
                (0, N.jsxs)(
                  c.default,
                  {
                    style: {
                      flexDirection: 'row-reverse',
                      gap: 10,
                      alignItems: 'stretch',
                    },
                    children: [
                      i.map((o) =>
                        Lt(o, t + e.indexOf(o), { flex: 1, minWidth: 0 }),
                      ),
                      Array.from({ length: Ft - i.length }, (e, t) =>
                        (0, N.jsx)(
                          c.default,
                          { style: { flex: 1 } },
                          'pad' + t,
                        ),
                      ),
                    ],
                  },
                  'row-' + i.join('-'),
                ),
              );
            }
          };
          return (
            e.forEach((e, i) => {
              !(0, O.isHomeWidget)(e) || I.WIDE_WIDGETS.includes(e)
                ? (n(), o.push(Lt(e, t + i)))
                : s.push(e);
            }),
            n(),
            o
          );
        }
        const Dt = [
            !!e &&
              re.buy &&
              (0, N.jsx)(W.RecipePriceAlerts, { shop: e }, 'recipe-alerts'),
            !!e &&
              'owner' === v &&
              (0, N.jsx)(M.LiveAgentEntry, { shop: e, role: v }, 'live-agent'),
          ],
          It = (0, N.jsx)(
            V,
            {
              delay: 160,
              children: (0, N.jsxs)(x.Card, {
                children: [
                  (0, N.jsx)(x.Copy, {
                    style: Ze,
                    children: P.notebookFa.emptyTitle,
                  }),
                  (0, N.jsx)(x.Copy, {
                    style: { fontSize: 13, lineHeight: 22, color: ye.muted },
                    children: P.notebookFa.emptyBody,
                  }),
                  (0, N.jsx)(x.Button, {
                    testID: 'home-empty-add',
                    onPress: () => ee?.(),
                    children: P.notebookFa.emptyAction,
                  }),
                ],
              }),
            },
            'empty',
          ),
          Ot = (() => {
            let e = 0;
            for (; e < jt.length && O.HOME_TOP.includes(jt[e]); ) e++;
            return e;
          })(),
          zt = 0 === Qe.length && !je,
          _t = [
            ...(!Ae.blocks.includes('insight') && wt
              ? [(0, N.jsx)(c.default, { children: wt }, 'free')]
              : []),
            ...Ht(jt.slice(0, Ot)),
            ...Dt,
            ...(zt ? [It] : []),
          ],
          Et = (e, t, o, s) =>
            (0, N.jsx)(V, { delay: 160 + 80 * o, style: s, children: t }, e),
          Tt = { height: '100%' },
          At = zt ? [] : We,
          Wt = he && !!ue,
          Mt = Wt
            ? Et(
                'attention',
                (0, N.jsxs)(c.default, {
                  testID: 'desk-attention-row',
                  style: {
                    flexDirection: 'row-reverse',
                    gap: 16,
                    alignItems: 'flex-start',
                  },
                  children: [
                    At.includes('recent') &&
                      (0, N.jsx)(c.default, {
                        style: { flex: 1.7, minWidth: 0 },
                        children: dt('recent'),
                      }),
                    (0, N.jsx)(c.default, {
                      style: { flex: 1, minWidth: 0 },
                      children: ue,
                    }),
                  ],
                }),
                0,
              )
            : null,
          Pt = At.filter(
            (e) => 'week' !== e && 'ledger' !== e && !(Wt && 'recent' === e),
          ).map((e, t) => Et(e, dt(e), t, Tt)),
          Rt = At.includes('week') ? Et('week', dt('week'), 2) : void 0,
          Bt = (Q && At.includes('ledger') ? ['ledger'] : []).map((e, t) =>
            Et(e, dt(e), 3 + t, Tt),
          ),
          Kt = jt.slice(Ot),
          Nt = Ht(Kt.filter(O.isHomeWidget), Ot),
          qt = (e) => ({
            id: e,
            name: gt(e),
            icon: xt(e),
            onAdd: () => bt((0, O.addBlock)(Ae, e)),
          }),
          Ut = je
            ? [
                {
                  title: (0, R.L)('\u0648\u06cc\u062c\u062a\u200c\u0647\u0627'),
                  rows: O.HOME_WIDGETS.filter(
                    (e) => !Ae.blocks.includes(e) && ht(e),
                  ).map(qt),
                },
                {
                  title: (0, R.L)('\u06a9\u0627\u0631\u062a\u200c\u0647\u0627'),
                  rows: O.HOME_CARDS.filter(
                    (e) =>
                      !(
                        Ae.blocks.includes(e) ||
                        ('ledger' === e && !Pe.ledger)
                      ),
                  ).map(qt),
                },
                {
                  title: (0, R.L)(
                    '\u0628\u0627\u0644\u0627\u06cc \u0635\u0641\u062d\u0647',
                  ),
                  rows: O.HOME_TOP.filter(
                    (e) => !Ae.blocks.includes(e) && ft(e),
                  ).map(qt),
                },
                {
                  title: (0, R.L)('\u06a9\u0644\u06cc\u062f\u0647\u0627'),
                  rows: ct
                    .filter((e) =>
                      (0, O.gridHiddenKeys)(Ae.hiddenKeys).includes(e.key),
                    )
                    .map((e) => ({
                      id: 'k:' + e.key,
                      name: e.label,
                      icon: e.icon,
                      onAdd: () => bt((0, O.showKey)(Ae, e.key)),
                    })),
                },
              ]
            : [];
        return (0, N.jsxs)(c.default, {
          style: { gap: 16 },
          children: [
            je && (0, N.jsx)(H.EditBar, { saving: ke, onDone: () => be(!1) }),
            _t,
            he && !je
              ? (0, N.jsxs)(c.default, {
                  style: { gap: 20 },
                  children: [
                    Nt,
                    Mt,
                    Pt.length || Rt || Bt.length
                      ? (0, N.jsx)(b.DesktopHome, {
                          cards: Pt,
                          graph: Rt,
                          secondary: Bt,
                        })
                      : null,
                  ],
                })
              : (0, N.jsx)(c.default, {
                  style: { gap: 14 },
                  children: Ht(Kt, Ot),
                }),
            je && (0, N.jsx)(H.AddList, { groups: Ut }),
            !!ve &&
              (0, N.jsx)(x.Copy, {
                accessibilityRole: 'alert',
                style: { color: ye.danger, fontSize: 13, lineHeight: 20 },
                children: ve,
              }),
            (0, N.jsx)(H.HomeMenuSheet, {
              visible: se,
              handlers: Pe,
              onClose: () => ne(!1),
              onEdit: fe ? () => be(!0) : void 0,
            }),
          ],
        });
      }));
    var t = r(d[0]),
      o = r(d[1]),
      s = r(d[2]),
      n = r(d[3]),
      i = e(r(d[4])),
      l = e(r(d[5])),
      c = e(r(d[6])),
      u = e(r(d[7])),
      y = r(d[8]),
      h = r(d[9]),
      f = r(d[10]),
      p = r(d[11]),
      x = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      k = r(d[15]),
      w = r(d[16]),
      v = r(d[17]),
      C = r(d[18]),
      S = r(d[19]),
      L = r(d[20]),
      F = r(d[21]),
      H = r(d[22]),
      D = r(d[23]),
      I = r(d[24]),
      O = r(d[25]),
      z = r(d[26]),
      _ = r(d[27]),
      E = r(d[28]),
      T = r(d[29]),
      A = r(d[30]),
      W = r(d[31]),
      M = r(d[32]),
      P = r(d[33]),
      R = r(d[34]),
      B = r(d[35]),
      K = r(d[36]),
      N = r(d[37]);
    const q = (e, t) =>
      'owner' === t || 'manager' === t || !e || (0, S.isFullStaff)(t, e.access);
    function U({ testID: e, name: t, onEarlier: o, onLater: s }) {
      const { colors: n } = (0, C.useTheme)();
      return (0, N.jsxs)(c.default, {
        testID: e,
        style: { flexDirection: 'row-reverse', alignItems: 'center', gap: 6 },
        children: [
          (0, N.jsx)(x.Copy, {
            numberOfLines: 1,
            style: {
              flex: 1,
              minWidth: 0,
              fontSize: 12,
              lineHeight: 18,
              color: n.muted,
              fontFamily: 'Vazirmatn_600SemiBold',
            },
            children: t,
          }),
          [
            {
              icon: 'up',
              run: o,
              label: (0, R.L)(
                '\u062c\u0627\u0628\u0647\u200c\u062c\u0627\u06cc\u06cc \u0628\u0647 \u0628\u0627\u0644\u0627\u062a\u0631',
              ),
              id: '-earlier',
            },
            {
              icon: 'down',
              run: s,
              label: (0, R.L)(
                '\u062c\u0627\u0628\u0647\u200c\u062c\u0627\u06cc\u06cc \u0628\u0647 \u067e\u0627\u06cc\u06cc\u0646\u200c\u062a\u0631',
              ),
              id: '-later',
            },
          ].map((o) =>
            (0, N.jsx)(
              l.default,
              {
                testID: e + o.id,
                accessibilityRole: 'button',
                accessibilityLabel: o.label + ' \u2014 ' + t,
                accessibilityState: { disabled: !o.run },
                disabled: !o.run,
                hitSlop: 6,
                onPress: o.run,
                style: ({ pressed: e }) => ({
                  width: 28,
                  height: 28,
                  borderRadius: 14,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: n.surface,
                  borderWidth: 1,
                  borderColor: n.line,
                  opacity: o.run ? (e ? 0.7 : 1) : 0.35,
                }),
                children: (0, N.jsx)(j.Icon, {
                  name: o.icon,
                  size: 14,
                  color: n.text,
                }),
              },
              o.id,
            ),
          ),
        ],
      });
    }
    function V({ delay: e, style: t, children: o }) {
      const s = (0, v.useRise)(e);
      return (0, N.jsx)(i.default.View, { style: [t, s], children: o });
    }
  },
  922,
  [
    611, 845, 456, 2, 92, 232, 99, 257, 434, 433, 457, 455, 407, 923, 385, 628,
    481, 924, 382, 473, 519, 888, 925, 928, 929, 931, 841, 932, 935, 926, 927,
    936, 937, 580, 311, 435, 489, 338,
  ],
);
