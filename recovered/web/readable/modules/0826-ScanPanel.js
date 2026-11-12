// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 826; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ScanPanel = function ({
        products: e,
        allowedKinds: H = ['received', 'sold'],
        startKind: M,
        businessType: A,
        role: V,
        showPrice: Q = !1,
        editSalePrice: U = Q,
        onDirtyChange: K,
        onConfirm: E,
      }) {
        const { colors: N } = (0, x.useTheme)(),
          { height: G } = (0, u.default)(),
          [J, X] = (0, n.useState)(''),
          [Y, Z] = (0, n.useState)(''),
          [$, ee] = (0, n.useState)('1'),
          [te, ie] = (0, n.useState)(
            M && H.includes(M) ? M : H[0] || 'received',
          ),
          [ne, oe] = (0, n.useState)(0),
          [re, se] = (0, n.useState)(''),
          [ae, le] = (0, n.useState)(),
          [ce, de] = (0, n.useState)(),
          [ue, he] = (0, n.useState)('piece'),
          [fe, pe] = (0, n.useState)(''),
          ge = 'received' === te ? Q : 'sold' === te && U,
          [ye, me] = (0, n.useState)(''),
          [be, xe] = (0, n.useState)(),
          [je, ve] = (0, n.useState)(!0),
          [Se, Ce] = (0, n.useState)(!1),
          Le = (0, n.useRef)(!1),
          we = (0, n.useRef)(!1);
        function Ie(t, n = !1) {
          if (Le.current) return;
          if (!(t = t.trim()) || t.length > 128 || /[\x00-\x1f]/.test(t))
            return void se(v.fa.scanInvalid);
          ((Le.current = !0),
            (we.current = !1),
            n && (0, p.scanBeep)(),
            (0, T.noteLookup)());
          const o =
            e.find((e) => e.barcode === t && !e.archivedAt) ||
            e.find((e) => e.barcode === t);
          (X(t),
            Z(o?.name || ''),
            de(o?.id),
            he(o?.unit || 'piece'),
            ee('sold' === te && o && (0, R.measureOf)(o.unit) ? '' : '1'),
            xe(void 0),
            pe(''),
            se(''),
            K?.(!0));
        }
        function De() {
          (X(''), Z(''), de(void 0), pe(''), se(''), K?.(!1));
        }
        (0, n.useEffect)(() => {
          const e = o.default.addEventListener('change', (e) =>
            ve('active' === e),
          );
          return () => e.remove();
        }, []);
        const ke = J ? e.find((e) => e.barcode === J) : void 0,
          ze = ce ? e.find((e) => e.id === ce) : void 0,
          Pe = ze || ke,
          Re =
            'sold' === te &&
            !!Pe &&
            !!(0, R.measureOf)(Pe.unit) &&
            ue === (Pe.unit || 'piece'),
          We = (0, q.boxPrice)(fe) ?? Pe?.price,
          Be = !!J && !ke,
          Te = Number((0, L.normalizeQuantityText)($) || 0),
          qe = ze || ke,
          Oe = J ? Math.min(150, 0.19 * G) : Math.min(280, 0.38 * G),
          Fe = (e) =>
            (0, O.jsx)(s.default, {
              testID: e > 0 ? 'scan-plus' : 'scan-minus',
              accessibilityRole: 'button',
              accessibilityLabel:
                e > 0
                  ? (0, D.L)(
                      '\u06cc\u06a9\u06cc \u0628\u06cc\u0634\u062a\u0631',
                    )
                  : (0, D.L)('\u06cc\u06a9\u06cc \u06a9\u0645\u062a\u0631'),
              disabled: e < 0 && !(Te > 1),
              onPress: () => {
                (ee((0, z.stepQuantity)($, e)), K?.(!0));
              },
              hitSlop: 4,
              style: ({ pressed: t }) => ({
                width: 42,
                height: 42,
                borderRadius: 21,
                alignItems: 'center',
                justifyContent: 'center',
                ...(e > 0
                  ? { backgroundColor: t ? N.accentActive : N.accent }
                  : {
                      borderWidth: 1,
                      borderColor: N.line,
                      backgroundColor: t ? N.soft : N.surface,
                      opacity: Te > 1 ? 1 : 0.4,
                    }),
              }),
              children:
                e > 0
                  ? (0, O.jsx)(W.Icon, {
                      name: 'plus',
                      size: 18,
                      color: N.onAccent,
                    })
                  : (0, O.jsx)(b.Copy, {
                      style: { fontSize: 20, lineHeight: 24, color: N.text },
                      children: '\u2212',
                    }),
            }),
          He = (e, t) =>
            (0, O.jsx)(c.default, {
              style: [
                {
                  position: 'absolute',
                  width: 30,
                  height: 30,
                  borderColor: N.accent,
                },
                e,
                t,
              ],
            }),
          Me =
            'received' === te
              ? (0, D.L)(
                  '\u0686\u0646\u062f \u062a\u0627 \u0622\u0645\u062f\u061f',
                )
              : 'sold' === te
                ? (0, D.L)(
                    '\u0686\u0646\u062f \u062a\u0627 \u0641\u0631\u0648\u062e\u062a\u06cc\u061f',
                  )
                : (0, D.L)('\u0686\u0646\u062f \u062a\u0627\u061f'),
          Ae = (0, O.jsxs)(O.Fragment, {
            children: [
              (0, O.jsxs)(c.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 10,
                },
                children: [
                  (0, O.jsx)(b.Copy, {
                    style: [b.common.title, { flexShrink: 1 }],
                    numberOfLines: 1,
                    children: (0, D.L)(
                      '\u0627\u0633\u06a9\u0646 \u0628\u0627\u0631\u06a9\u062f',
                    ),
                  }),
                  (0, O.jsx)(c.default, {
                    testID: 'scan-count',
                    style: {
                      paddingHorizontal: 12,
                      borderRadius: 14,
                      backgroundColor: N.accentSoft,
                    },
                    children: (0, O.jsxs)(b.Copy, {
                      style: {
                        fontSize: 13,
                        lineHeight: 26,
                        color: N.accent,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: [
                        ne.toLocaleString((0, D.numberLocale)()),
                        ' ',
                        v.fa.scannedCount,
                      ],
                    }),
                  }),
                ],
              }),
              !J &&
                (0, O.jsx)(b.Copy, {
                  style: [b.common.small, { color: N.muted }],
                  children: (0, D.L)(
                    '\u0628\u0627\u0631\u06a9\u062f \u06cc\u0627 \u06a9\u06cc\u0648\u0622\u0631 \u0631\u0627 \u062c\u0644\u0648\u06cc \u062f\u0648\u0631\u0628\u06cc\u0646 \u0628\u06af\u06cc\u0631\u061b \u0647\u0631 \u06a9\u0627\u0644\u0627 \u06cc\u06a9 \u0628\u0648\u0642.',
                  ),
                }),
              (0, O.jsx)(w.MovementKindPicker, {
                value: te,
                onChange: ie,
                allowed: H,
                businessType: A,
                role: V,
                labels: { sold: (0, D.L)('\u0641\u0631\u0648\u0634') },
                strong: !0,
              }),
              (0, O.jsxs)(c.default, {
                testID: 'scan-camera',
                style: { borderRadius: 22, overflow: 'hidden' },
                children: [
                  (0, O.jsx)(f.Scanner, {
                    height: Oe,
                    active: !J && je,
                    onScan: (e) => Ie(e, !0),
                    plain: !0,
                    onLive: Ce,
                  }),
                  !J &&
                    Se &&
                    (0, O.jsxs)(c.default, {
                      pointerEvents: 'none',
                      style: {
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        top: 0,
                        height: Oe,
                      },
                      children: [
                        (0, O.jsxs)(c.default, {
                          style: {
                            position: 'absolute',
                            left: '12%',
                            right: '12%',
                            top: '16%',
                            bottom: '16%',
                          },
                          children: [
                            He(
                              { top: 0, right: 0 },
                              {
                                borderTopWidth: 4,
                                borderRightWidth: 4,
                                borderTopRightRadius: 12,
                              },
                            ),
                            He(
                              { top: 0, left: 0 },
                              {
                                borderTopWidth: 4,
                                borderLeftWidth: 4,
                                borderTopLeftRadius: 12,
                              },
                            ),
                            He(
                              { bottom: 0, right: 0 },
                              {
                                borderBottomWidth: 4,
                                borderRightWidth: 4,
                                borderBottomRightRadius: 12,
                              },
                            ),
                            He(
                              { bottom: 0, left: 0 },
                              {
                                borderBottomWidth: 4,
                                borderLeftWidth: 4,
                                borderBottomLeftRadius: 12,
                              },
                            ),
                          ],
                        }),
                        (0, O.jsx)(c.default, {
                          style: {
                            position: 'absolute',
                            left: '8%',
                            right: '8%',
                            top: '50%',
                            height: 3,
                            borderRadius: 2,
                            backgroundColor: N.accent,
                            shadowColor: N.accent,
                            shadowOpacity: 0.9,
                            shadowRadius: 10,
                            shadowOffset: { width: 0, height: 0 },
                          },
                        }),
                      ],
                    }),
                ],
              }),
              !!ye &&
                !J &&
                (0, O.jsxs)(c.default, {
                  testID: 'scan-last',
                  accessibilityLiveRegion: 'polite',
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 8,
                    padding: 10,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: N.success + '73',
                    backgroundColor: N.success + '1f',
                  },
                  children: [
                    (0, O.jsx)(W.Icon, {
                      name: 'check',
                      size: 16,
                      color: N.success,
                    }),
                    (0, O.jsxs)(b.Copy, {
                      numberOfLines: 1,
                      style: {
                        flex: 1,
                        fontSize: 13.5,
                        color: N.success,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: [
                        (0, D.L)('\u062b\u0628\u062a \u0634\u062f'),
                        ': ',
                        ye,
                      ],
                    }),
                  ],
                }),
              !J && (0, O.jsx)(y.ManualCode, { onScan: Ie }),
              J
                ? (0, O.jsxs)(c.default, {
                    testID: Be ? 'scan-new-card' : 'scan-card',
                    style: {
                      padding: 14,
                      gap: 10,
                      borderRadius: 20,
                      borderWidth: Be ? 1.5 : l.default.hairlineWidth,
                      borderColor: Be ? N.warningBorder : N.line,
                      backgroundColor: N.surface,
                    },
                    children: [
                      Be
                        ? (0, O.jsxs)(c.default, {
                            style: { gap: 6 },
                            children: [
                              (0, O.jsx)(c.default, {
                                style: {
                                  alignSelf: 'flex-end',
                                  paddingHorizontal: 10,
                                  borderRadius: 10,
                                  backgroundColor: N.warningSoft,
                                },
                                children: (0, O.jsx)(b.Copy, {
                                  style: {
                                    fontSize: 12.5,
                                    lineHeight: 24,
                                    color: N.warning,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                  children: (0, D.L)(
                                    '\u0627\u06cc\u0646 \u0628\u0627\u0631\u06a9\u062f \u0647\u0646\u0648\u0632 \u06a9\u0627\u0644\u0627 \u0646\u062f\u0627\u0631\u062f',
                                  ),
                                }),
                              }),
                              (0, O.jsx)(b.Copy, {
                                testID: 'scan-code',
                                style: {
                                  color: N.muted,
                                  fontSize: 12,
                                  writingDirection: 'ltr',
                                  textAlign: 'right',
                                },
                                children: J,
                              }),
                              (0, O.jsx)(b.Input, {
                                testID: 'scan-name',
                                accessibilityLabel: v.fa.productName,
                                value: Y,
                                maxLength: 100,
                                onChangeText: (e) => {
                                  (Z(e), de(void 0), K?.(!0));
                                },
                                placeholder: (0, D.L)(
                                  '\u0646\u0627\u0645 \u06a9\u0627\u0644\u0627\u060c \u0645\u062b\u0644\u0627\u064b \u062f\u0648\u063a \u06f1.\u06f5 \u0644\u06cc\u062a\u0631\u06cc',
                                ),
                              }),
                              (0, O.jsx)(C.ProductSuggest, {
                                products: e,
                                value: Y,
                                productId: ce,
                                draft:
                                  Y && F($)
                                    ? {
                                        name: Y,
                                        quantity: F($),
                                        kind: te,
                                        barcode: J,
                                        productId: ce,
                                      }
                                    : void 0,
                                onPick: (e) => {
                                  (Z(e?.name || Y),
                                    de(e?.id),
                                    e && he(e.unit || 'piece'),
                                    K?.(!0));
                                },
                              }),
                            ],
                          })
                        : (0, O.jsxs)(c.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 12,
                            },
                            children: [
                              (0, O.jsx)(c.default, {
                                style: {
                                  width: 52,
                                  height: 52,
                                  borderRadius: 14,
                                  overflow: 'hidden',
                                  backgroundColor: N.soft,
                                },
                                children:
                                  ke &&
                                  (0, O.jsx)(B.ProductPhoto, {
                                    product: ke,
                                    height: 52,
                                  }),
                              }),
                              (0, O.jsxs)(c.default, {
                                style: { flex: 1, minWidth: 0, gap: 2 },
                                children: [
                                  (0, O.jsx)(b.Copy, {
                                    numberOfLines: 2,
                                    style: {
                                      fontSize: 17,
                                      lineHeight: 28,
                                      fontFamily: 'Vazirmatn_700Bold',
                                    },
                                    children: Y,
                                  }),
                                  (0, O.jsxs)(b.Copy, {
                                    numberOfLines: 1,
                                    style: { fontSize: 12.5, color: N.muted },
                                    children: [
                                      (0, D.L)(
                                        '\u0645\u0648\u062c\u0648\u062f\u06cc',
                                      ),
                                      ' ',
                                      (0, D.localDigits)(
                                        String(ke?.stock ?? 0),
                                      ),
                                      ' ',
                                      I.notebookFa.units[ke?.unit || 'piece'],
                                    ],
                                  }),
                                  (0, O.jsx)(b.Copy, {
                                    testID: 'scan-code',
                                    style: {
                                      color: N.muted,
                                      fontSize: 11.5,
                                      writingDirection: 'ltr',
                                      textAlign: 'right',
                                    },
                                    children: J,
                                  }),
                                ],
                              }),
                            ],
                          }),
                      Re && Pe
                        ? (0, O.jsx)(P.WeightBox, {
                            testID: 'scan-weight',
                            unit: Pe.unit || 'piece',
                            price: We,
                            showPrices: Q || void 0 !== Pe.price,
                            value: $,
                            onChange: (e) => {
                              (ee(e.quantity),
                                xe(
                                  void 0 !== e.unitPrice && e.quantity
                                    ? {
                                        quantity: e.quantity,
                                        price: e.unitPrice,
                                      }
                                    : void 0,
                                ),
                                K?.(!0));
                            },
                          })
                        : (0, O.jsxs)(c.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: 10,
                            },
                            children: [
                              (0, O.jsx)(b.Copy, {
                                style: { fontSize: 14, color: N.muted },
                                children: Me,
                              }),
                              (0, O.jsx)(k.StepperRow, {
                                testID: 'scan-stepper',
                                style: { gap: 6 },
                                minus: Fe(-1),
                                plus: Fe(1),
                                children: (0, O.jsx)(L.QuantityInput, {
                                  testID: 'scan-quantity',
                                  accessibilityLabel: v.fa.quantity,
                                  value: $,
                                  onChange: (e) => {
                                    (ee(e), K?.(!0));
                                  },
                                  placeholder: '',
                                  style: {
                                    width: 60,
                                    minHeight: 42,
                                    height: 42,
                                    paddingHorizontal: 4,
                                    textAlign: 'center',
                                    fontSize: 18,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                }),
                              }),
                            ],
                          }),
                      (0, O.jsxs)(c.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          flexWrap: 'wrap',
                          alignItems: 'center',
                          gap: 8,
                        },
                        children: [
                          !Re &&
                            (0, O.jsx)(c.default, {
                              style: { minWidth: 120 },
                              children: (0, O.jsx)(L.UnitInput, {
                                selectorOnly: !0,
                                value: $,
                                onChange: ee,
                                unit: ue,
                                baseUnit: (ze || ke)?.unit,
                                onUnitChange: he,
                                packSize: (ze || ke)?.packSize,
                                packUnit: (ze || ke)?.packUnit,
                              }),
                            }),
                          ge &&
                            (0, O.jsx)(c.default, {
                              style: { flex: 1, minWidth: 140 },
                              children: (0, O.jsx)(L.MoneyInput, {
                                testID: 'scan-price',
                                accessibilityLabel:
                                  'received' === te
                                    ? (0, D.L)(
                                        '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                                      )
                                    : (0, D.L)(
                                        '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                                      ),
                                value: fe,
                                onChange: (e) => {
                                  (pe(e), K?.(!0));
                                },
                                placeholder:
                                  'received' === te
                                    ? (0, D.L)(
                                        '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                                      )
                                    : (0, D.L)(
                                        '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                                      ),
                              }),
                            }),
                        ],
                      }),
                      ge &&
                        'sold' === te &&
                        !!qe &&
                        ue === (qe.unit || 'piece') &&
                        (0, O.jsx)(_.PriceChoice, {
                          testID: 'scan-price-choice',
                          product: qe,
                          price: (0, q.boxPrice)(fe),
                          onPick: (e, t) => {
                            (pe('default' === e ? '' : String(t)), K?.(!0));
                          },
                        }),
                      (0, O.jsx)(t.MovementDate, { value: ae, onChange: le }),
                      (0, O.jsx)(b.Button, {
                        testID: 'scan-next',
                        disabled: !Y.trim(),
                        onPress: async function () {
                          if (!we.current)
                            try {
                              const e = (0, q.boxPrice)(fe),
                                t =
                                  ge && void 0 !== e
                                    ? 'received' === te
                                      ? { unitCost: e }
                                      : 'sold' === te
                                        ? { unitPrice: e }
                                        : {}
                                    : {},
                                n =
                                  Re && be && be.quantity === $
                                    ? { unitPrice: be.price }
                                    : void 0,
                                o = {
                                  name: Y.trim(),
                                  quantity: (0, S.parseQuantity)($),
                                  kind: te,
                                  unit: ue,
                                  barcode: J,
                                  productId: ce,
                                  timestamp: ae,
                                  ...t,
                                  ...n,
                                };
                              ((we.current = !0),
                                await E(o),
                                me(
                                  Y.trim() +
                                    '\u060c ' +
                                    (Re
                                      ? (0, R.measureText)(o.quantity, ue)
                                      : (0, D.localDigits)($) +
                                        ' ' +
                                        I.notebookFa.units[ue || 'piece']),
                                ),
                                xe(void 0),
                                oe((e) => e + 1),
                                De(),
                                setTimeout(() => {
                                  Le.current = !1;
                                }, 1e3));
                            } catch (e) {
                              ((we.current = !1), se((0, j.errorText)(e)));
                            }
                        },
                        children:
                          Be && !ce
                            ? (0, D.L)(
                                '\u0633\u0627\u062e\u062a \u06a9\u0627\u0644\u0627 \u0648 \u062b\u0628\u062a',
                              )
                            : (0, D.L)(
                                '\u062b\u0628\u062a \u0648 \u0627\u0633\u06a9\u0646 \u0628\u0639\u062f\u06cc',
                              ),
                      }),
                      (0, O.jsx)(b.Button, {
                        ghost: !0,
                        onPress: () => {
                          (De(), (Le.current = !1));
                        },
                        children: v.fa.skipScan,
                      }),
                    ],
                  })
                : null,
              Be &&
                (0, O.jsx)(b.Copy, {
                  style: [
                    b.common.small,
                    { color: N.muted, textAlign: 'center' },
                  ],
                  children: (0, D.L)(
                    '\u06a9\u0627\u0644\u0627 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0628\u0627\u0631\u06a9\u062f \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u062f\u0641\u0639\u0647\u0654 \u0628\u0639\u062f \u0628\u0627 \u06cc\u06a9 \u0628\u0648\u0642 \u0634\u0646\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  ),
                }),
              !!re &&
                (0, O.jsx)(b.Copy, {
                  accessibilityRole: 'alert',
                  style: { color: N.danger },
                  children: re,
                }),
            ],
          });
        return (0, O.jsx)(h.KeyboardScrollView, {
          testID: 'scanner-page',
          style: { flex: 1 },
          keyboardShouldPersistTaps: 'handled',
          contentContainerStyle: [b.common.gap, { paddingBottom: 12 }],
          children: Ae,
        });
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = e(r(d[2])),
      s = e(r(d[3])),
      l = e(r(d[4])),
      c = e(r(d[5])),
      u = e(r(d[6])),
      h = r(d[7]),
      f = r(d[8]),
      p = r(d[9]),
      y = r(d[10]),
      b = r(d[11]),
      x = r(d[12]),
      j = r(d[13]),
      v = r(d[14]),
      S = r(d[15]),
      C = r(d[16]),
      L = r(d[17]),
      w = r(d[18]),
      I = r(d[19]),
      D = r(d[20]),
      k = r(d[21]),
      z = r(d[22]),
      P = r(d[23]),
      R = r(d[24]),
      W = r(d[25]),
      B = r(d[26]),
      T = r(d[27]),
      _ = r(d[28]),
      q = r(d[29]),
      O = r(d[30]);
    function F(e) {
      try {
        return (0, S.parseQuantity)(e);
      } catch {
        return;
      }
    }
  },
  826,
  [
    691, 2, 203, 232, 17, 99, 257, 480, 827, 830, 828, 407, 382, 690, 492, 439,
    694, 614, 696, 580, 311, 617, 831, 834, 459, 385, 628, 566, 799, 464, 338,
  ],
);
