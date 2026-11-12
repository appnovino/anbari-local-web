// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 866; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'PRICE_MISSING_TEXT', {
        enumerable: !0,
        get: function () {
          return U;
        },
      }),
      (_e.ProductPage = function ({
        product: e,
        movements: _,
        canManage: X,
        canSeeBuyPrice: Z = !0,
        canSeeSellPrice: J = !0,
        onEdit: Y,
        onEditPrice: ee,
        onStock: te,
        onDelete: ie,
        onRecipe: ne,
        onExpiry: se,
        onPhoto: re,
        onSetStock: le,
        onPack: oe,
        onRefresh: ce,
        live: ae,
        onClose: de,
        inPage: ue = !1,
      }) {
        const { colors: ye } = (0, D.useTheme)(),
          [pe, he] = (0, p.useState)(''),
          fe = _.filter((t) => t.productId === e.id)
            .slice()
            .reverse(),
          [me, xe] = (0, T.useConfirm)(),
          [be, ge] = (0, p.useState)('summary'),
          [je, Ce] = (0, p.useState)(!1),
          Se = $(Z),
          {
            insight: Le,
            failed: Pe,
            reload: ve,
          } = (0, F.useProductInsight)(
            e,
            _,
            [Se.buyPrice, Se.sellPrice, Se.profit].map(Number).join(''),
          ),
          [ke, De] = (0, p.useState)(null),
          [we, Ie] = (0, p.useState)(!1),
          [ze, Be] = (0, p.useState)(!1),
          [Te, Re] = (0, p.useState)(''),
          Oe = (e) => e?.version || 0,
          We = ae?.id === e.id,
          Fe = We && Oe(ae) >= Oe(e) ? ae : e,
          He = 'made' === Fe.kind,
          Ne = Fe.stock,
          Me = X && !He && !!le && !!e.id && We && !Fe.archivedAt,
          Ve = (0, V.useDeliveries)(e.id, 'deliveries' === be, Oe(Fe)),
          [Ae, Ee] = (0, p.useState)(!1),
          Ue = (0, p.useRef)(!1);
        (0, p.useEffect)(() => {
          (De(null), Ie(!1), Be(!1), Re(''), ge('summary'), Ce(!1));
        }, [e.id]);
        const qe = (() => {
            if (null === ke) return Ne;
            try {
              return (0, h.parseCount)(ke);
            } catch {
              return;
            }
          })(),
          Ge = qe ?? Ne,
          Qe = (() => {
            if (!Me || null === ke) return [];
            try {
              return (0, h.countChanges)(
                [{ id: e.id, name: e.name, label: e.name, stock: Ne }],
                { [e.id]: ke },
                { [e.id]: ze },
              );
            } catch {
              return [];
            }
          })(),
          Ke = Qe[0] && 'received' !== Qe[0].kind;
        const $e = (e) => {
            const t = Math.max(0, Ge);
            (Ie(!1),
              De(
                String(
                  e
                    ? (0, f.addQuantity)(t, 1)
                    : Math.max(0, (0, f.subQuantity)(t, 1)),
                ),
              ));
          },
          Xe = (e, t, s, l = !1, o = !1) =>
            (0, E.jsx)(i.default, {
              testID: e,
              accessibilityRole: 'button',
              accessibilityLabel: t,
              disabled: l,
              onPress: s,
              style: ({ pressed: e }) => ({
                minWidth: 36,
                height: 36,
                paddingHorizontal: o ? 12 : 0,
                borderRadius: 12,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: e ? ye.accentSoft : ye.soft,
                borderWidth: n.default.hairlineWidth,
                borderColor: ye.line,
                opacity: l ? 0.4 : 1,
              }),
              children: (0, E.jsx)(j.Copy, {
                style: {
                  fontSize: o ? 13 : 18,
                  lineHeight: o ? 20 : 22,
                  color: o ? ye.text : ye.accent,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: t,
              }),
            }),
          Ze = He ? null : (0, H.packSplit)(Ge, Fe.packSize),
          Je = (0, E.jsx)(j.Copy, {
            testID: 'product-stock',
            style: {
              fontSize: He ? 15 : (0, u.isOutOfStock)(Ge) ? 17 : 22,
              lineHeight: 32,
              fontFamily: 'Vazirmatn_700Bold',
              color:
                (!(0, u.isOutOfStock)(Ge) && !(0, u.isNegativeStock)(Ge)) || He
                  ? Qe.length
                    ? ye.accent
                    : ye.text
                  : ye.danger,
            },
            children: He
              ? (0, y.makeableText)(Fe)
              : (0, y.stockLabel)(Ge, (0, y.unitName)(e.unit)),
          }),
          [Ye, et] = (0, p.useState)(null),
          [tt, it] = (0, p.useState)(!1),
          [nt, st] = (0, p.useState)(!1),
          [rt, lt] = (0, p.useState)('');
        async function ot(e) {
          if (!nt && re) {
            (st(!0), lt(''));
            try {
              const t = await (0, v.pickPhotoSource)(e);
              if (!t) return;
              (it(!1), et(t));
            } catch (e) {
              lt((0, I.errorText)(e));
            } finally {
              st(!1);
            }
          }
        }
        const ct = (e, t, s, l) =>
            (0, E.jsxs)(i.default, {
              testID: e,
              accessibilityRole: 'button',
              disabled: nt,
              onPress: () => {
                ot(l);
              },
              style: ({ pressed: e }) => ({
                flex: 1,
                minHeight: 104,
                borderRadius: 16,
                borderWidth: n.default.hairlineWidth,
                borderColor: ye.line,
                backgroundColor: e ? ye.accentSoft : ye.soft,
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                opacity: nt ? 0.6 : 1,
              }),
              children: [
                (0, E.jsx)(P.Icon, { name: t, size: 28, color: ye.accent }),
                (0, E.jsx)(j.Copy, {
                  style: { fontSize: 14, fontFamily: 'Vazirmatn_600SemiBold' },
                  children: s,
                }),
              ],
            }),
          at = Le?.see || $(Z),
          dt = !Le && !Pe,
          ut = Z && !1 !== at.buyPrice,
          yt = J && !1 !== at.sellPrice,
          pt = { fontSize: 11, lineHeight: 17, color: ye.muted },
          ht = {
            fontSize: 15,
            lineHeight: 24,
            fontFamily: 'Vazirmatn_700Bold',
          },
          ft = (e = 44) =>
            (0, E.jsx)(s.default, {
              style: {
                width: e,
                height: 16,
                marginVertical: 4,
                borderRadius: 6,
                backgroundColor: ye.soft,
              },
            }),
          mt = (e, t, i) =>
            dt
              ? ft()
              : (0, E.jsx)(j.Copy, {
                  testID: i,
                  numberOfLines: 1,
                  style: [ht, t ? { color: t } : null],
                  children: e ?? '\u2014',
                }),
          xt = (e, t) => {
            if (dt) return ft();
            if (void 0 === e) return mt(void 0);
            const i = (0, O.shortMoney)(e),
              n = i.indexOf(' ');
            return (0, E.jsxs)(j.Copy, {
              numberOfLines: 1,
              style: [ht, t ? { color: t } : null],
              children: [
                n > 0 ? i.slice(0, n) : i,
                n > 0 &&
                  (0, E.jsx)(j.Copy, {
                    style: {
                      fontSize: 11,
                      lineHeight: 24,
                      color: t || ye.muted,
                    },
                    children: ' ' + i.slice(n + 1),
                  }),
              ],
            });
          },
          bt = (e, t, i) =>
            (0, E.jsxs)(
              j.Card,
              {
                testID: e,
                style: { flex: 1, minWidth: 0, padding: 10, gap: 2 },
                children: [
                  i,
                  (0, E.jsx)(j.Copy, {
                    numberOfLines: 1,
                    style: pt,
                    children: t,
                  }),
                ],
              },
              e,
            ),
          gt = Le?.sales,
          jt = !He && gt ? (0, H.daysOfStock)(Ne, gt.sold, gt.days) : null,
          Ct = Le?.usualBuy,
          St = Le?.lastBuy,
          Lt = St && Ct ? (0, H.pctChange)(Ct, St.price) : null,
          Pt = Le ? (0, H.priceTrend)(Le.months) : null,
          vt = (0, E.jsxs)(s.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 10,
            },
            children: [
              (0, E.jsx)(i.default, {
                testID: 'product-photo-edit',
                accessibilityRole: 'button',
                accessibilityLabel:
                  X && re
                    ? (0, B.L)(
                        '\u062a\u063a\u06cc\u06cc\u0631 \u0639\u06a9\u0633',
                      )
                    : e.name,
                disabled: !X || !re,
                onPress: () => {
                  (lt(''), it(!0));
                },
                style: { width: 40 },
                children: (0, E.jsx)(S.ProductPhoto, {
                  product: e,
                  height: 40,
                }),
              }),
              (0, E.jsxs)(s.default, {
                style: { flex: 1, minWidth: 0 },
                children: [
                  !ue &&
                    (0, E.jsx)(j.Copy, {
                      numberOfLines: 1,
                      style: [j.common.title, { fontSize: 18, lineHeight: 28 }],
                      children: e.name,
                    }),
                  (0, E.jsx)(j.Copy, {
                    numberOfLines: 1,
                    style: { fontSize: 12, lineHeight: 18, color: ye.muted },
                    children: [
                      e.category || w.fa.uncategorized,
                      e.barcode
                        ? (0, B.L)('\u0628\u0627\u0631\u06a9\u062f {code}', {
                            code: e.barcode,
                          })
                        : '',
                    ]
                      .filter(Boolean)
                      .join((0, B.partSep)()),
                  }),
                ],
              }),
              !ue &&
                (0, E.jsx)(j.Button, {
                  secondary: !0,
                  onPress: de,
                  children: (0, B.L)('\u0628\u0633\u062a\u0646'),
                }),
            ],
          }),
          kt = (e, t) =>
            (0, E.jsx)(
              i.default,
              {
                testID: 'product-tab-' + e,
                accessibilityRole: 'tab',
                accessibilityState: { selected: be === e },
                onPress: () => ge(e),
                style: ({ pressed: t }) => ({
                  paddingHorizontal: 11,
                  minHeight: 36,
                  borderRadius: 999,
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderColor: be === e ? ye.accent : ye.line,
                  backgroundColor:
                    be === e ? ye.accentSoft : t ? ye.soft : ye.surface,
                }),
                children: (0, E.jsx)(j.Copy, {
                  numberOfLines: 1,
                  style: {
                    fontSize: 13,
                    lineHeight: 20,
                    color: be === e ? ye.accent : ye.text,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: t,
                }),
              },
              e,
            ),
          Dt = (e) =>
            e.map((e, t) =>
              (0, E.jsxs)(
                s.default,
                {
                  testID: 'product-supplier',
                  style: [
                    j.common.between,
                    t
                      ? {
                          borderTopWidth: n.default.hairlineWidth,
                          borderColor: ye.line,
                          paddingTop: 10,
                        }
                      : null,
                  ],
                  children: [
                    (0, E.jsxs)(s.default, {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        (0, E.jsxs)(s.default, {
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 6,
                          },
                          children: [
                            (0, E.jsx)(j.Copy, {
                              numberOfLines: 1,
                              style: {
                                flexShrink: 1,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: e.name,
                            }),
                            e.cheapest &&
                              (0, E.jsx)(s.default, {
                                style: {
                                  paddingHorizontal: 8,
                                  borderRadius: 999,
                                  backgroundColor: ye.accentSoft,
                                },
                                children: (0, E.jsx)(j.Copy, {
                                  style: {
                                    fontSize: 11,
                                    lineHeight: 18,
                                    color: ye.accent,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: (0, B.L)(
                                    '\u0627\u0631\u0632\u0627\u0646\u200c\u062a\u0631\u06cc\u0646',
                                  ),
                                }),
                              }),
                          ],
                        }),
                        (0, E.jsx)(j.Copy, {
                          style: pt,
                          children:
                            (0, B.L)('{n} \u0628\u0627\u0631', {
                              n: q(e.count),
                            }) +
                            (0, B.partSep)() +
                            (0, B.L)('\u0622\u062e\u0631\u06cc\u0646: {date}', {
                              date: Q(e.lastDay),
                            }),
                        }),
                      ],
                    }),
                    void 0 !== e.lastPrice &&
                      (0, E.jsx)(j.Copy, {
                        style: {
                          fontSize: 14,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: G(e.lastPrice),
                      }),
                  ],
                },
                e.contactId || e.name,
              ),
            ),
          wt = (t) => {
            if ('count' === t.kind) return '';
            const i = e.unit;
            if (!(0, W.measureOf)(i))
              return ' ' + t.quantity.toLocaleString((0, B.numberLocale)());
            const n =
              J &&
              'sold' === t.kind &&
              !t.correctsMovementId &&
              void 0 !== t.revenueTotal &&
              null !== t.revenueTotal
                ? '\u060c ' +
                  (0, O.money)(t.revenueTotal, { full: !0, hint: !1 })
                : '';
            return ' ' + (0, W.measureText)(Math.abs(t.quantity), i) + n;
          },
          It = new Date().toDateString(),
          zt = fe.filter(
            (e) => e.timestamp && new Date(e.timestamp).toDateString() === It,
          ),
          Bt = { flexBasis: '45%', flexGrow: 1 },
          Tt =
            void 0 !== Fe.avgCost && Number.isFinite(Fe.avgCost)
              ? Math.round(Fe.avgCost)
              : void 0,
          Rt = (e, t, i) =>
            (0, E.jsxs)(s.default, {
              style: [{ flex: 1, minWidth: 0, gap: 2 }, i],
              children: [
                (0, E.jsx)(j.Copy, {
                  numberOfLines: 1,
                  style: pt,
                  children: e,
                }),
                t,
              ],
            }),
          Ot = (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsxs)(s.default, {
                testID: 'product-stats',
                style: { flexDirection: 'row-reverse', gap: 8 },
                children: [
                  bt(
                    'product-stat-sold',
                    (0, B.L)(
                      '\u0641\u0631\u0648\u0634 {n} \u0631\u0648\u0632',
                      { n: q(gt?.days || 30) },
                    ),
                    mt(gt ? q(gt.sold) : void 0),
                  ),
                  at.sellPrice &&
                    bt(
                      'product-stat-revenue',
                      (0, B.L)('\u062f\u0631\u0622\u0645\u062f'),
                      xt(gt?.revenue),
                    ),
                  at.profit &&
                    bt(
                      'product-stat-profit',
                      (0, B.L)('\u0633\u0648\u062f'),
                      xt(
                        gt?.profit,
                        void 0 !== gt?.profit && gt.profit < 0
                          ? ye.danger
                          : ye.success,
                      ),
                    ),
                  !He &&
                    bt(
                      'product-stat-left',
                      (0, B.L)(
                        '\u062a\u0627 \u062a\u0645\u0627\u0645 \u0634\u062f\u0646',
                      ),
                      mt(
                        gt
                          ? null === jt
                            ? '\u2014'
                            : (0, B.L)('{n} \u0631\u0648\u0632', { n: q(jt) })
                          : void 0,
                      ),
                    ),
                ],
              }),
              Pe &&
                !Le &&
                (0, E.jsx)(i.default, {
                  testID: 'product-insight-retry',
                  accessibilityRole: 'button',
                  onPress: () => ve(),
                  children: (0, E.jsxs)(j.Copy, {
                    style: pt,
                    children: [
                      (0, B.L)(
                        '\u062e\u0644\u0627\u0635\u0647\u0654 \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u0627\u0644\u0627\u0646 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0646\u06cc\u0633\u062a.',
                      ),
                      ' ',
                      (0, E.jsx)(j.Copy, {
                        style: { fontSize: 11, color: ye.accent },
                        children: (0, B.L)(
                          '\u062f\u0648\u0628\u0627\u0631\u0647',
                        ),
                      }),
                    ],
                  }),
                }),
              (at.sellPrice || at.buyPrice) &&
                (0, E.jsxs)(j.Card, {
                  testID: 'product-price-card',
                  style: { gap: 10 },
                  children: [
                    (0, E.jsxs)(s.default, {
                      style: j.common.between,
                      children: [
                        (0, E.jsx)(j.Copy, {
                          style: { fontFamily: 'Vazirmatn_700Bold' },
                          children: (0, B.L)(
                            '\u0642\u06cc\u0645\u062a \u062f\u0631 \u06f6 \u0645\u0627\u0647',
                          ),
                        }),
                        (0, E.jsxs)(s.default, {
                          style: { flexDirection: 'row-reverse', gap: 10 },
                          children: [
                            at.sellPrice &&
                              (0, E.jsx)(j.Copy, {
                                style: { fontSize: 12, color: ye.accent },
                                children:
                                  '\u2501 ' +
                                  (0, B.L)('\u0641\u0631\u0648\u0634'),
                              }),
                            at.buyPrice &&
                              (0, E.jsx)(j.Copy, {
                                style: { fontSize: 12, color: ye.warning },
                                children:
                                  '\u2501 ' +
                                  (0, B.L)('\u062e\u0631\u06cc\u062f'),
                              }),
                          ],
                        }),
                      ],
                    }),
                    Le
                      ? Le.months.some(
                          (e) =>
                            'number' == typeof e.buy ||
                            'number' == typeof e.sell,
                        )
                        ? (0, E.jsx)(N.PriceChart, {
                            months: Le.months,
                            showBuy: at.buyPrice,
                            label: K,
                          })
                        : (0, E.jsx)(j.Copy, {
                            style: pt,
                            children: (0, B.L)(
                              '\u0647\u0646\u0648\u0632 \u062e\u0631\u06cc\u062f \u06cc\u0627 \u0641\u0631\u0648\u0634\u06cc \u0628\u0627 \u0642\u06cc\u0645\u062a \u062b\u0628\u062a \u0646\u0634\u062f\u0647.',
                            ),
                          })
                      : (0, E.jsx)(s.default, {
                          style: {
                            height: 96,
                            borderRadius: 12,
                            backgroundColor: ye.soft,
                          },
                        }),
                    (0, E.jsxs)(s.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        flexWrap: 'wrap',
                        columnGap: 10,
                        rowGap: 10,
                      },
                      children: [
                        at.buyPrice &&
                          Rt(
                            (0, B.L)(
                              '\u062e\u0631\u06cc\u062f \u0622\u062e\u0631',
                            ),
                            dt
                              ? ft()
                              : (0, E.jsxs)(s.default, {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 4,
                                  },
                                  children: [
                                    (0, E.jsx)(j.Copy, {
                                      testID: 'product-last-buy',
                                      numberOfLines: 1,
                                      style: ht,
                                      children: St ? G(St.price) : '\u2014',
                                    }),
                                    null !== Lt &&
                                      0 !== Lt &&
                                      (0, E.jsx)(j.Copy, {
                                        style: {
                                          fontSize: 12,
                                          color:
                                            Lt > 0 ? ye.danger : ye.success,
                                        },
                                        children:
                                          (Lt > 0 ? '\u25b2' : '\u25bc') +
                                          q(Math.abs(Lt)) +
                                          '\u066a',
                                      }),
                                  ],
                                }),
                            Bt,
                          ),
                        at.buyPrice &&
                          Rt(
                            (0, B.L)(
                              '\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                            ),
                            (0, E.jsx)(j.Copy, {
                              testID: 'product-avg-cost',
                              numberOfLines: 1,
                              style: ht,
                              children: void 0 === Tt ? '\u2014' : G(Tt),
                            }),
                            Bt,
                          ),
                        at.buyPrice &&
                          Rt(
                            (0, B.L)(
                              '\u062e\u0631\u06cc\u062f \u0645\u0639\u0645\u0648\u0644',
                            ),
                            mt(
                              void 0 !== Ct ? G(Ct) : void 0,
                              void 0,
                              'product-usual-buy',
                            ),
                            Bt,
                          ),
                        at.sellPrice &&
                          Rt(
                            (0, B.L)(
                              '\u0641\u0631\u0648\u0634 \u0627\u0644\u0627\u0646',
                            ),
                            (0, E.jsx)(j.Copy, {
                              numberOfLines: 1,
                              style: ht,
                              children:
                                void 0 === e.price ? '\u2014' : G(e.price),
                            }),
                            at.buyPrice ? Bt : void 0,
                          ),
                      ],
                    }),
                    at.sellPrice &&
                      !!e.salePrices?.length &&
                      (0, E.jsx)(j.Copy, {
                        testID: 'product-sale-tiers',
                        numberOfLines: 2,
                        style: pt,
                        children: e.salePrices
                          .map((e) => `${e.name} ${G(e.price)}`)
                          .join(' \xb7 '),
                      }),
                    Pt &&
                      (0, E.jsxs)(j.Copy, {
                        testID: 'product-trend',
                        style: {
                          fontSize: 12,
                          lineHeight: 20,
                          color: ye.muted,
                        },
                        children: [
                          (0, B.L)('\u0627\u0632 {month} {changes}.', {
                            month: K(Pt.since),
                            changes: [
                              null === Pt.buy
                                ? ''
                                : 0 === Pt.buy
                                  ? (0, B.L)(
                                      '\u062e\u0631\u06cc\u062f \u062b\u0627\u0628\u062a \u0645\u0627\u0646\u062f\u0647',
                                    )
                                  : Pt.buy > 0
                                    ? (0, B.L)(
                                        '\u062e\u0631\u06cc\u062f {n}\u066a \u06af\u0631\u0627\u0646\u200c\u062a\u0631 \u0634\u062f\u0647',
                                        { n: q(Pt.buy) },
                                      )
                                    : (0, B.L)(
                                        '\u062e\u0631\u06cc\u062f {n}\u066a \u0627\u0631\u0632\u0627\u0646\u200c\u062a\u0631 \u0634\u062f\u0647',
                                        { n: q(-Pt.buy) },
                                      ),
                              null === Pt.sell
                                ? ''
                                : 0 === Pt.sell
                                  ? (0, B.L)(
                                      '\u0641\u0631\u0648\u0634 \u062b\u0627\u0628\u062a \u0645\u0627\u0646\u062f\u0647',
                                    )
                                  : Pt.sell > 0
                                    ? (0, B.L)(
                                        '\u0641\u0631\u0648\u0634 {n}\u066a \u06af\u0631\u0627\u0646\u200c\u062a\u0631',
                                        { n: q(Pt.sell) },
                                      )
                                    : (0, B.L)(
                                        '\u0641\u0631\u0648\u0634 {n}\u066a \u0627\u0631\u0632\u0627\u0646\u200c\u062a\u0631',
                                        { n: q(-Pt.sell) },
                                      ),
                            ]
                              .filter(Boolean)
                              .join('\u060c '),
                          }),
                          at.profit && void 0 !== e.price && void 0 !== Ct
                            ? ' ' +
                              (0, B.L)(
                                '\u0633\u0648\u062f \u0647\u0631 {unit}: {money}.',
                                {
                                  unit: (0, y.unitName)(e.unit),
                                  money: (0, O.money)(e.price - Ct, {
                                    full: !0,
                                    hint: !1,
                                  }),
                                },
                              )
                            : '',
                        ],
                      }),
                  ],
                }),
              !!Le?.suppliers.length &&
                (0, E.jsxs)(j.Card, {
                  style: { gap: 10 },
                  children: [
                    (0, E.jsxs)(s.default, {
                      style: j.common.between,
                      children: [
                        (0, E.jsx)(j.Copy, {
                          style: { fontFamily: 'Vazirmatn_700Bold' },
                          children: (0, B.L)(
                            '\u0627\u0632 \u06a9\u062c\u0627 \u0645\u06cc\u200c\u062e\u0631\u06cc',
                          ),
                        }),
                        Le.suppliers.length > 2 &&
                          (0, E.jsx)(i.default, {
                            accessibilityRole: 'button',
                            onPress: () => ge('suppliers'),
                            children: (0, E.jsx)(j.Copy, {
                              style: { fontSize: 12, color: ye.accent },
                              children: (0, B.L)('\u0647\u0645\u0647 ({n})', {
                                n: q(Le.suppliers.length),
                              }),
                            }),
                          }),
                      ],
                    }),
                    Dt(Le.suppliers.slice(0, 2)),
                  ],
                }),
            ],
          }),
          Wt = (0, E.jsxs)(E.Fragment, {
            children: [
              (0, E.jsxs)(s.default, {
                style: j.common.row,
                children: [
                  (0, E.jsxs)(j.Card, {
                    style: { flex: 1, padding: 12 },
                    children: [
                      (0, E.jsx)(j.Copy, {
                        style: pt,
                        children: (0, O.swapUnit)(w.fa.salePrice),
                      }),
                      (0, E.jsx)(j.Copy, {
                        children:
                          void 0 === e.price
                            ? w.fa.noPriceValue
                            : (0, O.money)(e.price, { full: !0 }),
                      }),
                    ],
                  }),
                  at.buyPrice &&
                    (0, E.jsxs)(j.Card, {
                      style: { flex: 1, padding: 12 },
                      children: [
                        (0, E.jsx)(j.Copy, {
                          style: pt,
                          children: (0, O.swapUnit)(w.fa.costPrice),
                        }),
                        (0, E.jsx)(j.Copy, {
                          children:
                            void 0 === e.costPrice
                              ? w.fa.noPriceValue
                              : (0, O.money)(e.costPrice, { full: !0 }),
                        }),
                      ],
                    }),
                ],
              }),
              at.sellPrice &&
                !!e.salePrices?.length &&
                (0, E.jsx)(s.default, {
                  testID: 'product-tier-cards',
                  style: {
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap',
                    gap: 10,
                  },
                  children: e.salePrices.map((e, t) =>
                    (0, E.jsxs)(
                      j.Card,
                      {
                        style: {
                          flexGrow: 1,
                          flexBasis: 140,
                          minWidth: 0,
                          padding: 12,
                        },
                        children: [
                          (0, E.jsx)(j.Copy, { style: pt, children: e.name }),
                          (0, E.jsx)(j.Copy, {
                            children: (0, O.money)(e.price, { full: !0 }),
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              X &&
                ee &&
                (0, E.jsx)(j.Button, {
                  testID: 'product-edit-price',
                  secondary: !0,
                  onPress: ee,
                  children: (0, B.L)(
                    '\u062a\u063a\u06cc\u06cc\u0631 \u0642\u06cc\u0645\u062a',
                  ),
                }),
              Le &&
                Le.months.some(
                  (e) => 'number' == typeof e.buy || 'number' == typeof e.sell,
                ) &&
                (0, E.jsxs)(j.Card, {
                  testID: 'product-month-prices',
                  style: { gap: 8 },
                  children: [
                    (0, E.jsxs)(s.default, {
                      style: j.common.between,
                      children: [
                        (0, E.jsx)(j.Copy, {
                          style: pt,
                          children: (0, B.L)('\u0645\u0627\u0647'),
                        }),
                        (0, E.jsxs)(s.default, {
                          style: { flexDirection: 'row-reverse', gap: 16 },
                          children: [
                            at.buyPrice &&
                              (0, E.jsx)(j.Copy, {
                                style: [pt, { width: 96, textAlign: 'left' }],
                                children: (0, B.L)('\u062e\u0631\u06cc\u062f'),
                              }),
                            at.sellPrice &&
                              (0, E.jsx)(j.Copy, {
                                style: [pt, { width: 96, textAlign: 'left' }],
                                children: (0, B.L)('\u0641\u0631\u0648\u0634'),
                              }),
                          ],
                        }),
                      ],
                    }),
                    Le.months
                      .slice()
                      .reverse()
                      .map((e) =>
                        (0, E.jsxs)(
                          s.default,
                          {
                            style: [
                              j.common.between,
                              {
                                borderTopWidth: n.default.hairlineWidth,
                                borderColor: ye.line,
                                paddingTop: 8,
                              },
                            ],
                            children: [
                              (0, E.jsx)(j.Copy, { children: K(e) }),
                              (0, E.jsxs)(s.default, {
                                style: {
                                  flexDirection: 'row-reverse',
                                  gap: 16,
                                },
                                children: [
                                  at.buyPrice &&
                                    (0, E.jsx)(j.Copy, {
                                      style: { width: 96, textAlign: 'left' },
                                      children:
                                        'number' == typeof e.buy
                                          ? G(e.buy)
                                          : '\u2014',
                                    }),
                                  at.sellPrice &&
                                    (0, E.jsx)(j.Copy, {
                                      style: { width: 96, textAlign: 'left' },
                                      children:
                                        'number' == typeof e.sell
                                          ? G(e.sell)
                                          : '\u2014',
                                    }),
                                ],
                              }),
                            ],
                          },
                          e.key,
                        ),
                      ),
                  ],
                }),
              (0, E.jsx)(L.ProductExpiry, {
                product: Fe,
                movements: _,
                canEdit: X && !!se && We && !Fe.archivedAt,
                onSave: se,
              }),
              X &&
                'made' === e.kind &&
                ne &&
                (0, E.jsx)(j.Button, {
                  secondary: !0,
                  onPress: ne,
                  children: z.notebookW5Fa.recipe,
                }),
            ],
          }),
          _t = (0, E.jsx)(j.Card, {
            style: { gap: 10 },
            children: dt
              ? (0, E.jsxs)(E.Fragment, { children: [ft(140), ft(100)] })
              : Le?.suppliers.length
                ? Dt(Le.suppliers)
                : (0, E.jsx)(j.Copy, {
                    style: pt,
                    children: (0, B.L)(
                      '\u0647\u0646\u0648\u0632 \u062e\u0631\u06cc\u062f\u06cc \u0628\u0627 \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u062b\u0628\u062a \u0646\u0634\u062f\u0647. \u062f\u0631 \xab\u062f\u0631\u06cc\u0627\u0641\u062a\xbb \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646 \u062a\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0628\u06cc\u0627\u06cc\u062f.',
                    ),
                  }),
          }),
          Ft = (0, E.jsxs)(j.Card, {
            testID: 'product-deliveries',
            style: { gap: 10 },
            children: [
              (0, E.jsx)(j.Copy, {
                style: { fontFamily: 'Vazirmatn_700Bold' },
                children: (0, B.L)(
                  '\u0647\u0645\u0647\u0654 \u0648\u0631\u0648\u062f\u06cc\u200c\u0647\u0627\u060c \u062a\u0627\u0632\u0647\u200c\u062a\u0631\u06cc\u0646 \u0628\u0627\u0644\u0627',
                ),
              }),
              null === Ve.list
                ? Ve.failed
                  ? (0, E.jsx)(i.default, {
                      testID: 'product-deliveries-retry',
                      accessibilityRole: 'button',
                      onPress: Ve.retry,
                      children: (0, E.jsxs)(j.Copy, {
                        style: pt,
                        children: [
                          (0, B.L)(
                            '\u0641\u0647\u0631\u0633\u062a \u0648\u0631\u0648\u062f\u06cc\u200c\u0647\u0627 \u0627\u0644\u0627\u0646 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0646\u06cc\u0633\u062a.',
                          ),
                          ' ',
                          (0, E.jsx)(j.Copy, {
                            style: { fontSize: 11, color: ye.accent },
                            children: (0, B.L)(
                              '\u062f\u0648\u0628\u0627\u0631\u0647',
                            ),
                          }),
                        ],
                      }),
                    })
                  : (0, E.jsxs)(E.Fragment, {
                      children: [ft(160), ft(120), ft(140)],
                    })
                : Ve.list.length
                  ? Ve.list.map((t, i) =>
                      (0, E.jsxs)(
                        s.default,
                        {
                          testID: 'product-delivery',
                          style: [
                            j.common.between,
                            { alignItems: 'flex-start' },
                            i
                              ? {
                                  borderTopWidth: n.default.hairlineWidth,
                                  borderColor: ye.line,
                                  paddingTop: 10,
                                }
                              : null,
                          ],
                          children: [
                            (0, E.jsxs)(s.default, {
                              style: { flex: 1, minWidth: 0 },
                              children: [
                                (0, E.jsx)(j.Copy, {
                                  numberOfLines: 1,
                                  style: {
                                    fontSize: 14,
                                    lineHeight: 22,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children:
                                    (0, b.formatMoment)(t.occurredAt) ||
                                    Q(t.occurredAt.slice(0, 10)),
                                }),
                                (0, E.jsxs)(j.Copy, {
                                  numberOfLines: 1,
                                  style: [
                                    pt,
                                    !t.supplier && { fontStyle: 'italic' },
                                  ],
                                  children: [
                                    t.supplier ||
                                      (0, B.L)(
                                        '\u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u062b\u0628\u062a \u0646\u0634\u062f\u0647',
                                      ),
                                    t.receiptNo
                                      ? (0, B.partSep)() +
                                        (0, B.L)(
                                          '\u0631\u0633\u06cc\u062f \u062e\u0631\u06cc\u062f {no}',
                                          {
                                            no: (0, B.localDigits)(
                                              String(t.receiptNo),
                                            ),
                                          },
                                        )
                                      : '',
                                  ],
                                }),
                              ],
                            }),
                            (0, E.jsxs)(s.default, {
                              style: { alignItems: 'flex-start', gap: 2 },
                              children: [
                                (0, E.jsx)(j.Copy, {
                                  numberOfLines: 1,
                                  style: { fontSize: 14, lineHeight: 22 },
                                  children:
                                    q(t.quantity) +
                                    ' ' +
                                    (0, y.unitName)(e.unit),
                                }),
                                Ve.seeBuy &&
                                  (0, E.jsx)(j.Copy, {
                                    testID: 'product-delivery-price',
                                    numberOfLines: 1,
                                    style:
                                      void 0 === t.unitCost
                                        ? pt
                                        : {
                                            fontSize: 14,
                                            lineHeight: 22,
                                            fontFamily: 'Vazirmatn_700Bold',
                                          },
                                    children:
                                      void 0 === t.unitCost
                                        ? (0, B.L)(
                                            '\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a',
                                          )
                                        : (0, B.L)(
                                            '\u0647\u0631 {unit} {money}',
                                            {
                                              unit: (0, y.unitName)(e.unit),
                                              money: G(t.unitCost),
                                            },
                                          ),
                                  }),
                              ],
                            }),
                          ],
                        },
                        t.id,
                      ),
                    )
                  : (0, E.jsx)(j.Copy, {
                      style: pt,
                      children: (0, B.L)(
                        '\u0647\u0646\u0648\u0632 \u0648\u0631\u0648\u062f\u06cc\u200c\u0627\u06cc \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u062b\u0628\u062a \u0646\u0634\u062f\u0647. \u0647\u0631 \u0628\u0627\u0631 \u06a9\u0627\u0644\u0627 \u0628\u0631\u0633\u062f\u060c \u062a\u0627\u0631\u06cc\u062e\u060c \u062a\u0639\u062f\u0627\u062f\u060c \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0648 \u0641\u0631\u0648\u0634\u0646\u062f\u0647\u200c\u0627\u0634 \u0627\u06cc\u0646\u062c\u0627 \u0645\u06cc\u200c\u0622\u06cc\u062f.',
                      ),
                    }),
              !!Ve.next &&
                (0, E.jsx)(j.Button, {
                  testID: 'product-deliveries-more',
                  secondary: !0,
                  disabled: Ve.busy,
                  onPress: Ve.more,
                  children: (0, B.L)(
                    '\u0648\u0631\u0648\u062f\u06cc\u200c\u0647\u0627\u06cc \u0642\u062f\u06cc\u0645\u06cc\u200c\u062a\u0631',
                  ),
                }),
              null !== Ve.list &&
                Ve.failed &&
                (0, E.jsx)(j.Copy, {
                  accessibilityRole: 'alert',
                  style: { fontSize: 12, color: ye.danger },
                  children: (0, B.L)(
                    '\u0641\u0647\u0631\u0633\u062a \u0648\u0631\u0648\u062f\u06cc\u200c\u0647\u0627 \u0627\u0644\u0627\u0646 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0646\u06cc\u0633\u062a.',
                  ),
                }),
            ],
          }),
          Ht = (0, E.jsxs)(j.Card, {
            children: [
              (0, E.jsx)(j.Copy, {
                children: zt.length
                  ? (0, B.L)(
                      '\u06af\u0631\u062f\u0634 \u0627\u0645\u0631\u0648\u0632',
                    )
                  : w.fa.recentProductMovements,
              }),
              (zt.length ? zt : fe.slice(0, 5)).map((e) =>
                (0, E.jsxs)(
                  s.default,
                  {
                    style: [
                      j.common.between,
                      {
                        borderTopWidth: 1,
                        borderColor: ye.line,
                        paddingTop: 9,
                      },
                    ],
                    children: [
                      (0, E.jsxs)(s.default, {
                        style: { flex: 1 },
                        children: [
                          (0, E.jsxs)(j.Copy, {
                            numberOfLines: 1,
                            children: [
                              'count' === e.kind
                                ? (0, h.countText)(e)
                                : 'sale_return' === e.kind
                                  ? (0, B.L)(
                                      '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u0641\u0631\u0648\u0634',
                                    )
                                  : 'purchase_return' === e.kind
                                    ? (0, B.L)(
                                        '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u062e\u0631\u06cc\u062f',
                                      )
                                    : 'received' === e.kind
                                      ? w.fa.received
                                      : 'waste' === e.kind
                                        ? x.kindChip.waste
                                        : w.fa.sold,
                              wt(e),
                            ],
                          }),
                          (0, E.jsxs)(j.Copy, {
                            style: { fontSize: 11, color: ye.muted },
                            children: [
                              (0, b.formatMoment)(e.timestamp, e.timeZone) ||
                                w.fa.undatedMovement,
                              e.actorName
                                ? '\u060c ' +
                                  w.fa.recordedBy.replace('{name}', e.actorName)
                                : '',
                            ],
                          }),
                        ],
                      }),
                      !He &&
                        (0, E.jsx)(j.Copy, {
                          style: {
                            writingDirection: 'ltr',
                            fontSize:
                              void 0 !== e.stockAfter && e.stockAfter <= 0
                                ? 11
                                : void 0,
                            color:
                              void 0 !== e.stockAfter && e.stockAfter <= 0
                                ? ye.danger
                                : void 0,
                          },
                          children:
                            void 0 === e.stockAfter
                              ? '\u2014'
                              : e.stockAfter <= 0
                                ? (0, B.L)(u.OUT_OF_STOCK)
                                : e.stockAfter.toLocaleString(
                                    (0, B.numberLocale)(),
                                  ),
                        }),
                    ],
                  },
                  e.id,
                ),
              ),
              !fe.length &&
                (0, E.jsx)(j.Copy, {
                  style: { color: ye.muted },
                  children: w.fa.noHistory,
                }),
            ],
          });
        return (0, E.jsxs)(s.default, {
          style: { flexShrink: 1, gap: 12 },
          children: [
            xe,
            vt,
            (0, E.jsxs)(c.ScrollView, {
              keyboardShouldPersistTaps: 'handled',
              style: { flexShrink: 1 },
              contentContainerStyle: { gap: 12, paddingBottom: 6 },
              children: [
                (0, E.jsxs)(j.Card, {
                  style: { padding: 12, gap: 8 },
                  children: [
                    (0, E.jsxs)(s.default, {
                      style: j.common.between,
                      children: [
                        (0, E.jsxs)(s.default, {
                          style: { flexShrink: 1 },
                          children: [
                            (0, E.jsx)(j.Copy, {
                              style: pt,
                              children: (0, B.L)(
                                '\u0645\u0648\u062c\u0648\u062f\u06cc',
                              ),
                            }),
                            (0, E.jsxs)(s.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                alignItems: 'baseline',
                                gap: 6,
                                flexWrap: 'wrap',
                              },
                              children: [
                                Me && we
                                  ? (0, E.jsx)(R.QuantityInput, {
                                      testID: 'product-stock-input',
                                      autoFocus: !0,
                                      selectTextOnFocus: !0,
                                      value: ke ?? String(Ne),
                                      onChange: De,
                                      onSubmitEditing: () => Ie(!1),
                                      onBlur: () => {
                                        (Ie(!1), void 0 === qe && De(null));
                                      },
                                      style: {
                                        width: 96,
                                        minWidth: 0,
                                        minHeight: 40,
                                        paddingHorizontal: 4,
                                        textAlign: 'center',
                                        fontSize: 18,
                                      },
                                    })
                                  : Me
                                    ? (0, E.jsx)(i.default, {
                                        accessibilityRole: 'button',
                                        accessibilityLabel: w.fa.stockNow,
                                        onPress: () => Ie(!0),
                                        children: Je,
                                      })
                                    : Je,
                                Ze &&
                                  (0, E.jsx)(j.Copy, {
                                    testID: 'product-stock-packs',
                                    style: { fontSize: 13, color: ye.muted },
                                    children:
                                      '= ' +
                                      q(Ze.packs) +
                                      ' ' +
                                      (0, y.unitName)(Fe.packUnit) +
                                      (Ze.rest
                                        ? ' ' +
                                          (0, B.L)('\u0648 {n} {unit}', {
                                            n: q(Ze.rest),
                                            unit: (0, y.unitName)(e.unit),
                                          })
                                        : ''),
                                  }),
                              ],
                            }),
                          ],
                        }),
                        (0, E.jsxs)(s.default, {
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 6,
                          },
                          children: [
                            Me &&
                              (0, E.jsx)(C.StepperRow, {
                                testID: 'product-stock-stepper',
                                style: { gap: 6 },
                                minus: Xe(
                                  'product-stock-minus',
                                  '\u2212',
                                  () => $e(!1),
                                  Ge <= 0,
                                ),
                                plus: Xe('product-stock-plus', '+', () =>
                                  $e(!0),
                                ),
                              }),
                            X && Xe('product-edit', w.fa.edit, Y, !1, !0),
                          ],
                        }),
                      ],
                    }),
                    void 0 !== Fe.contentSize &&
                      Fe.contentUnit &&
                      (0, E.jsxs)(s.default, {
                        testID: 'product-content-hint',
                        children: [
                          (0, E.jsx)(j.Copy, {
                            style: { fontSize: 12 },
                            children: (0, B.L)(
                              '\u0647\u0631 {unit} = {size} {contentUnit}',
                              {
                                unit: (0, y.unitName)(Fe.unit),
                                size: Fe.contentSize.toLocaleString(
                                  (0, B.numberLocale)(),
                                ),
                                contentUnit: (0, y.unitName)(Fe.contentUnit),
                              },
                            ),
                          }),
                          !He &&
                            (0, E.jsx)(j.Copy, {
                              style: pt,
                              children:
                                '\u2248 ' +
                                (Ge * Fe.contentSize).toLocaleString(
                                  (0, B.numberLocale)(),
                                  { maximumFractionDigits: 3 },
                                ) +
                                ' ' +
                                (0, y.unitName)(Fe.contentUnit),
                            }),
                        ],
                      }),
                    Ke &&
                      (0, E.jsx)(s.default, {
                        testID: 'product-stock-kind',
                        children: (0, E.jsx)(j.Segmented, {
                          height: 34,
                          items: [
                            {
                              value: 'sold',
                              label: x.kindChip.count,
                              testID: 'product-stock-kind-sold',
                            },
                            {
                              value: 'waste',
                              label: x.kindChip.waste,
                              testID: 'product-stock-kind-waste',
                            },
                          ],
                          value: ze ? 'waste' : 'sold',
                          onChange: (e) => Be('waste' === e),
                        }),
                      }),
                    (0, E.jsxs)(s.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 6,
                        flexWrap: 'wrap',
                      },
                      children: [
                        (0, E.jsx)(y.BrandTag, { brand: e.brand }),
                        (0, E.jsx)(y.ProductTags, {
                          product: e,
                          canSeeBuyPrice: ut,
                          canSeeSellPrice: yt,
                        }),
                        !He &&
                          (0, E.jsx)(s.default, {
                            style: { flex: 1 },
                            children: (0, E.jsx)(M.PackChip, {
                              product: Fe,
                              onPress:
                                X && oe && We && !Fe.archivedAt
                                  ? () => Ce(!0)
                                  : void 0,
                            }),
                          }),
                      ],
                    }),
                    !!e.detail &&
                      (0, E.jsx)(j.Copy, {
                        style: { fontSize: 12 },
                        children: e.detail,
                      }),
                  ],
                }),
                Qe.length > 0 &&
                  Qe[0].before < 0 &&
                  (0, E.jsx)(j.Copy, {
                    testID: 'product-stock-explain',
                    style: { fontSize: 12, lineHeight: 20, color: ye.muted },
                    children: (0, B.L)(
                      '\u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0632 {before} \u0628\u0647 {after} \u0645\u06cc\u200c\u0631\u0633\u062f: {qty} {unit} \u0634\u0645\u0627\u0631\u0634 \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f.',
                      {
                        before: '\u2066' + q(Qe[0].before) + '\u2069',
                        after: q(Qe[0].after),
                        qty: q(Qe[0].quantity),
                        unit: (0, y.unitName)(e.unit),
                      },
                    ),
                  }),
                Qe.length > 0 &&
                  (0, E.jsx)(j.Button, {
                    testID: 'product-stock-save',
                    disabled: Ae,
                    onPress: function () {
                      const t = Qe[0];
                      if (Ue.current || !le || !Me || !t) return;
                      ((Ue.current = !0), Ee(!0), Re(''));
                      const i = t.after;
                      le((0, h.countDrafts)([t]), i)
                        .then(
                          () => {
                            (De((e) => {
                              if (null === e) return e;
                              try {
                                return (0, h.parseCount)(e) === i ? null : e;
                              } catch {
                                return e;
                              }
                            }),
                              Be(!1),
                              (0, m.showToast)(
                                (0, h.stockToastText)(
                                  t.kind,
                                  t.quantity,
                                  (0, y.unitName)(e.unit),
                                  e.name,
                                  t.after,
                                ),
                              ),
                              ve());
                          },
                          (e) => {
                            (Re((0, I.errorText)(e)),
                              e instanceof Error &&
                                'stock_changed' === e.message &&
                                ce?.().catch(() => {}));
                          },
                        )
                        .finally(() => {
                          ((Ue.current = !1), Ee(!1));
                        });
                    },
                    children:
                      ze && Ke
                        ? (0, B.L)('\u062b\u0628\u062a')
                        : (0, B.L)(
                            '\u062b\u0628\u062a \u0634\u0645\u0627\u0631\u0634',
                          ),
                  }),
                !!Te &&
                  (0, E.jsx)(j.Copy, {
                    accessibilityRole: 'alert',
                    style: { color: ye.danger },
                    children: Te,
                  }),
                (0, d.missingPriceParts)(e, ut, yt) &&
                  (0, E.jsxs)(s.default, {
                    testID: 'product-price-missing',
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 8,
                    },
                    children: [
                      (0, E.jsx)(j.Copy, {
                        style: {
                          flex: 1,
                          fontSize: 12,
                          lineHeight: 20,
                          color: ye.warning,
                        },
                        children: (0, B.L)(
                          U[(0, d.missingPriceParts)(e, ut, yt)],
                        ),
                      }),
                      X &&
                        ee &&
                        (0, E.jsx)(i.default, {
                          testID: 'product-set-price',
                          accessibilityRole: 'button',
                          onPress: ee,
                          style: ({ pressed: e }) => ({
                            paddingHorizontal: 12,
                            minHeight: 32,
                            borderRadius: 999,
                            justifyContent: 'center',
                            backgroundColor: ye.accentSoft,
                            opacity: e ? 0.8 : 1,
                          }),
                          children: (0, E.jsx)(j.Copy, {
                            style: {
                              fontSize: 12,
                              color: ye.accent,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: (0, B.L)(
                              '\u062b\u0628\u062a \u0642\u06cc\u0645\u062a',
                            ),
                          }),
                        }),
                    ],
                  }),
                (0, E.jsxs)(s.default, {
                  accessibilityRole: 'tablist',
                  style: {
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap',
                    gap: 6,
                  },
                  children: [
                    kt('summary', (0, B.L)('\u062e\u0644\u0627\u0635\u0647')),
                    kt(
                      'prices',
                      (0, B.L)('\u0642\u06cc\u0645\u062a\u200c\u0647\u0627'),
                    ),
                    kt(
                      'deliveries',
                      (0, B.L)(
                        '\u0648\u0631\u0648\u062f\u06cc\u200c\u0647\u0627',
                      ),
                    ),
                    kt(
                      'suppliers',
                      (0, B.L)(
                        '\u0641\u0631\u0648\u0634\u0646\u062f\u0647\u200c\u0647\u0627',
                      ),
                    ),
                    kt('moves', (0, B.L)('\u06af\u0631\u062f\u0634')),
                  ],
                }),
                'summary' === be
                  ? Ot
                  : 'prices' === be
                    ? Wt
                    : 'deliveries' === be
                      ? Ft
                      : 'suppliers' === be
                        ? _t
                        : Ht,
                X &&
                  (0, E.jsxs)(s.default, {
                    style: j.common.row,
                    children: [
                      (0, E.jsx)(s.default, {
                        style: j.common.flex,
                        children: (0, E.jsx)(j.Button, {
                          onPress: te,
                          children: w.fa.changeStock,
                        }),
                      }),
                      (0, E.jsx)(s.default, {
                        style: j.common.flex,
                        children: (0, E.jsx)(j.DangerLink, {
                          testID: 'product-delete',
                          onPress: () =>
                            me({
                              title: w.fa.deleteProduct,
                              text: w.fa.deleteConfirm,
                              ok: (0, B.L)(
                                '\u0628\u0644\u0647\u060c \u062d\u0630\u0641 \u06a9\u0646',
                              ),
                              run: () => {
                                Promise.resolve(ie()).catch((e) =>
                                  he((0, I.errorText)(e)),
                                );
                              },
                            }),
                          children: w.fa.deleteProduct,
                        }),
                      }),
                    ],
                  }),
                !!pe &&
                  (0, E.jsx)(j.Copy, {
                    accessibilityRole: 'alert',
                    style: { color: ye.danger },
                    children: pe,
                  }),
                !tt &&
                  !!rt &&
                  (0, E.jsx)(j.Copy, {
                    accessibilityRole: 'alert',
                    style: { color: ye.danger },
                    children: rt,
                  }),
              ],
            }),
            oe &&
              (0, E.jsx)(M.PackSheet, {
                visible: je,
                product: Fe,
                onClose: () => Ce(!1),
                onSave: oe,
              }),
            (0, E.jsx)(l.Modal, {
              visible: tt,
              transparent: !0,
              animationType: 'fade',
              onRequestClose: () => it(!1),
              children: (0, E.jsxs)(s.default, {
                style: {
                  flex: 1,
                  backgroundColor: '#08090bbb',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 20,
                },
                children: [
                  (0, E.jsx)(A.Backdrop, {
                    testID: 'product-photo-backdrop',
                    label: w.fa.dismiss,
                    locked: nt,
                    onClose: () => it(!1),
                  }),
                  (0, E.jsx)(o.PullCard, {
                    onClose: () => it(!1),
                    enabled: !nt,
                    style: { width: '100%', maxWidth: 420 },
                    children: (0, E.jsxs)(j.Card, {
                      testID: 'product-photo-popup',
                      style: { backgroundColor: ye.bg },
                      children: [
                        (0, E.jsxs)(s.default, {
                          style: j.common.between,
                          children: [
                            (0, E.jsx)(j.Copy, {
                              style: j.common.title,
                              children: (0, B.L)(
                                '\u0639\u06a9\u0633 \u06a9\u0627\u0644\u0627',
                              ),
                            }),
                            (0, E.jsx)(i.default, {
                              testID: 'product-photo-close',
                              accessibilityRole: 'button',
                              accessibilityLabel: w.fa.dismiss,
                              onPress: () => it(!1),
                              style: {
                                width: 36,
                                height: 36,
                                borderRadius: 10,
                                borderWidth: n.default.hairlineWidth,
                                borderColor: ye.line,
                                backgroundColor: ye.soft,
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                              children: (0, E.jsx)(P.Icon, {
                                name: 'close',
                                size: 18,
                                color: ye.text,
                              }),
                            }),
                          ],
                        }),
                        (0, E.jsx)(s.default, {
                          style: {
                            width: '100%',
                            maxWidth: 220,
                            alignSelf: 'center',
                          },
                          children: (0, E.jsx)(S.ProductPhoto, {
                            product: e,
                            height: 180,
                          }),
                        }),
                        (0, E.jsxs)(s.default, {
                          style: { flexDirection: 'row-reverse', gap: 10 },
                          children: [
                            ct(
                              'product-photo-camera',
                              'camera',
                              (0, B.L)(
                                '\u06af\u0631\u0641\u062a\u0646 \u0639\u06a9\u0633',
                              ),
                              !0,
                            ),
                            ct(
                              'product-photo-gallery',
                              'photo',
                              (0, B.L)(
                                '\u0627\u0646\u062a\u062e\u0627\u0628 \u0627\u0632 \u06af\u0627\u0644\u0631\u06cc',
                              ),
                              !1,
                            ),
                          ],
                        }),
                        nt && (0, E.jsx)(t.default, { color: ye.text }),
                        !!rt &&
                          (0, E.jsx)(j.Copy, {
                            accessibilityRole: 'alert',
                            style: { color: ye.danger },
                            children: rt,
                          }),
                      ],
                    }),
                  }),
                ],
              }),
            }),
            Ye &&
              (0, E.jsx)(
                k.PhotoCropper,
                {
                  source: Ye,
                  name: e.name,
                  onCancel: () => et(null),
                  onSave: async (e) => {
                    (await re?.(e), et(null));
                  },
                },
                e.id + Ye.uri,
              ),
          ],
        });
      }));
    var t = e(r(_d[0])),
      i = e(r(_d[1])),
      n = e(r(_d[2])),
      s = e(r(_d[3])),
      l = r(_d[4]),
      o = r(_d[5]),
      c = r(_d[6]),
      d = r(_d[7]),
      u = r(_d[8]),
      y = r(_d[9]),
      p = r(_d[10]),
      h = r(_d[11]),
      f = r(_d[12]),
      m = r(_d[13]),
      x = r(_d[14]),
      b = r(_d[15]),
      j = r(_d[16]),
      C = r(_d[17]),
      S = r(_d[18]),
      L = r(_d[19]),
      P = r(_d[20]),
      v = r(_d[21]),
      k = r(_d[22]),
      D = r(_d[23]),
      w = r(_d[24]),
      I = r(_d[25]),
      z = r(_d[26]),
      B = r(_d[27]),
      T = r(_d[28]),
      R = r(_d[29]),
      O = r(_d[30]),
      W = r(_d[31]),
      _ = r(_d[32]),
      F = r(_d[33]),
      H = r(_d[34]),
      N = r(_d[35]),
      M = r(_d[36]),
      V = r(_d[37]),
      A = r(_d[38]),
      E = r(_d[39]);
    const U = {
        both: '\u0642\u06cc\u0645\u062a \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u062b\u0628\u062a \u0646\u0634\u062f\u0647\u061b \u0633\u0648\u062f\u0634 \u062f\u0631 \u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627 \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
        buy: '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u062b\u0628\u062a \u0646\u0634\u062f\u0647\u061b \u0633\u0648\u062f\u0634 \u062f\u0631 \u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627 \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
        sell: '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u062b\u0628\u062a \u0646\u0634\u062f\u0647\u061b \u0641\u0631\u0648\u0634 \u0648 \u0633\u0648\u062f\u0634 \u062f\u0631 \u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627 \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
      },
      q = (e) =>
        e.toLocaleString((0, B.numberLocale)(), { maximumFractionDigits: 3 }),
      G = (e) =>
        'IRT' === (0, O.shownCurrency)()
          ? (0, O.fullToman)(e)
          : (0, O.money)(e, { full: !0, hint: !1 }),
      Q = (e) => {
        try {
          return new Date(e + 'T12:00:00').toLocaleDateString(
            (0, B.dateLocale)(),
            { day: 'numeric', month: 'long' },
          );
        } catch {
          return e;
        }
      },
      K = (e) =>
        'jalali' === (0, b.calendarKind)()
          ? (0, b.calMonthNames)()[e.month - 1]
          : (0, b.calMonthNames)()[
              new Date(Date.parse(e.from + 'T12:00:00') + 864e6).getMonth()
            ];
    function $(e) {
      const t = _.activeShop,
        i = t?.access?.see;
      return t && 'owner' !== t.role && 'manager' !== t.role
        ? 'staff' === t.role && i
          ? {
              buyPrice: i.buyPrice,
              sellPrice: i.sellPrice,
              profit: i.buyPrice && i.sellPrice && i.profit,
            }
          : { buyPrice: e, sellPrice: !0, profit: !1 }
        : { buyPrice: !0, sellPrice: !0, profit: !0 };
    }
  },
  866,
  [
    217, 232, 17, 99, 381, 515, 380, 452, 433, 585, 2, 717, 431, 525, 692, 440,
    407, 617, 628, 867, 385, 634, 775, 382, 492, 690, 580, 311, 534, 614, 435,
    459, 415, 868, 870, 871, 872, 873, 533, 338,
  ],
);
