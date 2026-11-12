// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 831; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.recentProducts = W),
      (_e.stepQuantity = q),
      (_e.AddEntry = function (e) {
        const _ = { ...e, unit: e.unit || 'piece' },
          { colors: N } = (0, H.useTheme)(),
          { top: T } = W(_.state, 12),
          [V, E] = (0, t.useState)(0),
          A = _.productId
            ? _.state.products.find((e) => e.id === _.productId)
            : void 0,
          Q = r.notebookFa.units[_.unit] || _.unit,
          O = 'received' === _.kind && _.produce.on,
          U = Number((0, v.normalizeQuantityText)(_.quantity) || 0),
          K = _.price ? Number(_.price) : A?.price,
          G =
            'sold' === _.kind &&
            void 0 !== K &&
            U > 0 &&
            (!A || (A.unit || 'piece') === _.unit)
              ? K * U
              : void 0,
          J =
            'sold' === _.kind &&
            !!A &&
            !!(0, F.measureOf)(A.unit) &&
            _.unit === (A.unit || 'piece'),
          X = () => {
            _.quantity.trim() || _.onQuantity('1');
          },
          Y = (e) => {
            (_.onPick(e),
              ('sold' === _.kind && (0, F.measureOf)(e.unit)) || X(),
              i.default.dismiss());
          },
          [Z, $] = (0, t.useState)('weight'),
          ee =
            A ||
            _.state.products.find(
              (e) =>
                !e.archivedAt &&
                (0, l.normalizeName)(e.name) === (0, l.normalizeName)(_.name),
            ),
          te =
            _.canManage &&
            'received' === _.kind &&
            !O &&
            !!_.name.trim() &&
            (0, L.needsBuyPriceHint)(ee),
          ie = (e) =>
            void 0 !== e
              ? (0, u.localAmount)(e).toLocaleString((0, c.numberLocale)())
              : '',
          ne = {
            minHeight: 40,
            height: 40,
            paddingVertical: 6,
            borderRadius: 12,
            fontSize: 15,
          },
          oe = (e = 1, t = !1) =>
            (0, B.jsx)(m.Field, {
              label: O
                ? (0, c.L)(
                    '\u0647\u0632\u06cc\u0646\u0647\u0654 \u062a\u0648\u0644\u06cc\u062f \u0647\u0631 \u0648\u0627\u062d\u062f',
                  )
                : (0, c.L)('\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f'),
              style: { flex: e, minWidth: 0 },
              children: (0, B.jsx)(v.MoneyInput, {
                testID: 'manual-cost',
                value: _.cost,
                placeholder: ie(A?.costPrice),
                onChange: _.onCost,
                style: t ? ne : void 0,
              }),
            }),
          se = (e = 1, t = !1) =>
            (0, B.jsx)(m.Field, {
              label: (0, c.L)(
                '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
              ),
              style: { flex: e, minWidth: 0 },
              children: (0, B.jsx)(v.MoneyInput, {
                testID: 'manual-price',
                value: _.price,
                placeholder: ie(A?.price),
                onChange: _.onPrice,
                style: t ? ne : void 0,
              }),
            }),
          ae = _.canEditSalePrice ?? _.canManage,
          le =
            'sold' === _.kind && ae
              ? se(1, !0)
              : _.canManage
                ? 'received' === _.kind
                  ? oe(1, !0)
                  : null
                : _.showPrices && 'sold' === _.kind && void 0 !== K
                  ? (0, B.jsxs)(s.default, {
                      style: { flex: 1, minWidth: 0, gap: 4 },
                      children: [
                        (0, B.jsx)(m.FieldLabel, {
                          children: (0, c.L)(
                            '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                          ),
                        }),
                        (0, B.jsx)(s.default, {
                          style: { height: 40, justifyContent: 'center' },
                          children: (0, B.jsx)(y.Copy, {
                            style: {
                              fontSize: 15,
                              lineHeight: 24,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: (0, u.money)(K, { hint: !1 }),
                          }),
                        }),
                      ],
                    })
                  : null,
          re = [
            'piece' !== _.unit ? Q : '',
            'received' !== _.kind || O ? '' : _.supplier.trim(),
            (_.timestamp && (0, h.formatMoment)(_.timestamp)) || '',
          ]
            .filter(Boolean)
            .join(' \xb7 '),
          de = (e) =>
            (0, B.jsx)(n.default, {
              testID: e > 0 ? 'manual-plus' : 'manual-minus',
              accessibilityRole: 'button',
              accessibilityLabel:
                e > 0
                  ? (0, c.L)(
                      '\u06cc\u06a9\u06cc \u0628\u06cc\u0634\u062a\u0631',
                    )
                  : (0, c.L)('\u06cc\u06a9\u06cc \u06a9\u0645\u062a\u0631'),
              disabled: _.busy || (e < 0 && !(U > 1)),
              onPress: () => _.onQuantity(q(_.quantity, e)),
              hitSlop: 4,
              style: ({ pressed: t }) => ({
                width: 38,
                height: 38,
                borderRadius: 19,
                alignItems: 'center',
                justifyContent: 'center',
                ...(e > 0
                  ? { backgroundColor: t ? N.accentActive : N.accent }
                  : {
                      borderWidth: 1,
                      borderColor: N.line,
                      backgroundColor: t ? N.soft : N.surface,
                      opacity: U > 1 ? 1 : 0.4,
                    }),
              }),
              children:
                e > 0
                  ? (0, B.jsx)(f.Icon, {
                      name: 'plus',
                      size: 18,
                      color: N.onAccent,
                    })
                  : (0, B.jsx)(y.Copy, {
                      style: { fontSize: 20, lineHeight: 24, color: N.text },
                      children: '\u2212',
                    }),
            }),
          ce = Math.max(3, Math.min(8, Math.floor(((V || 760) + 8) / 136))),
          ue = (e) =>
            (0, B.jsxs)(
              n.default,
              {
                testID: 'quick-pick-' + e.id,
                accessibilityRole: 'button',
                accessibilityLabel: e.name,
                onPress: () => Y(e),
                style: ({ pressed: e }) => ({
                  flex: 1,
                  minWidth: 0,
                  padding: 6,
                  gap: 4,
                  borderRadius: 14,
                  borderWidth: o.default.hairlineWidth,
                  borderColor: N.line,
                  backgroundColor: e ? N.accentSoft : N.soft,
                }),
                children: [
                  (0, B.jsx)(b.ProductPhoto, { product: e, height: 56 }),
                  (0, B.jsx)(y.Copy, {
                    numberOfLines: 2,
                    style: {
                      fontSize: 12.5,
                      lineHeight: 19,
                      minHeight: 38,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: e.name,
                  }),
                  Number.isFinite(e.stock) &&
                    (0, B.jsx)(y.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 10.5,
                        lineHeight: 16,
                        color: e.stock <= 0 ? N.danger : N.muted,
                      },
                      children: (0, c.L)(
                        '\u0645\u0648\u062c\u0648\u062f\u06cc {n}',
                        {
                          n: (Math.round(1e3 * e.stock) / 1e3).toLocaleString(
                            (0, c.numberLocale)(),
                          ),
                        },
                      ),
                    }),
                ],
              },
              e.id,
            );
        return (0, B.jsxs)(y.Card, {
          testID: 'add-entry',
          style: { padding: 16, gap: 16 },
          children: [
            (0, B.jsxs)(s.default, {
              style: { gap: 12 },
              children: [
                (0, B.jsxs)(s.default, {
                  style: y.common.between,
                  children: [
                    (0, B.jsx)(y.Copy, {
                      accessibilityRole: 'header',
                      style: {
                        fontSize: 16,
                        lineHeight: 26,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: (0, c.L)(
                        '\u062b\u0628\u062a \u0633\u0631\u06cc\u0639',
                      ),
                    }),
                    _.onScan
                      ? (0, B.jsxs)(n.default, {
                          testID: 'add-scan',
                          accessibilityRole: 'button',
                          accessibilityLabel: (0, c.L)(
                            '\u0628\u0627\u0631\u06a9\u062f \u0648 \u06a9\u06cc\u0648\u0622\u0631',
                          ),
                          onPress: _.onScan,
                          hitSlop: 4,
                          style: ({ pressed: e }) => ({
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 6,
                            minHeight: 36,
                            paddingHorizontal: 12,
                            borderRadius: 18,
                            borderWidth: 1.5,
                            borderColor: N.accent,
                            backgroundColor: e ? N.accentSoft : 'transparent',
                          }),
                          children: [
                            (0, B.jsx)(f.Icon, {
                              name: 'scan',
                              size: 18,
                              color: N.accent,
                            }),
                            (0, B.jsx)(y.Copy, {
                              style: {
                                fontSize: 13.5,
                                lineHeight: 22,
                                color: N.accent,
                                fontFamily: 'Vazirmatn_700Bold',
                              },
                              children: (0, c.L)(
                                '\u0628\u0627\u0631\u06a9\u062f \u0648 \u06a9\u06cc\u0648\u0622\u0631',
                              ),
                            }),
                          ],
                        })
                      : (0, B.jsx)(f.Icon, {
                          name: 'cart',
                          size: 20,
                          color: N.accent,
                        }),
                  ],
                }),
                (0, B.jsx)(k.MovementKindPicker, {
                  strong: !0,
                  value: _.kind,
                  onChange: _.onKind,
                  allowed: _.allowedKinds,
                  businessType: _.businessType,
                  role: _.role,
                  produce: _.produce,
                  labels: { sold: (0, c.L)('\u0641\u0631\u0648\u0634') },
                }),
              ],
            }),
            (0, B.jsxs)(s.default, {
              style: { gap: 8 },
              children: [
                (0, B.jsxs)(s.default, {
                  style: { zIndex: 2 },
                  children: [
                    (0, B.jsxs)(s.default, {
                      style: { justifyContent: 'center' },
                      children: [
                        (0, B.jsx)(y.Input, {
                          ref: _.nameRef,
                          testID: 'product-name',
                          accessibilityLabel: p.fa.productName,
                          value: _.name,
                          maxLength: 100,
                          onChangeText: (e) => {
                            (_.onName(e), e.trim() && X());
                          },
                          placeholder: p.fa.productName,
                          style: {
                            minHeight: 44,
                            height: 44,
                            paddingVertical: 8,
                            borderRadius: 22,
                            paddingRight: 42,
                          },
                        }),
                        (0, B.jsx)(s.default, {
                          pointerEvents: 'none',
                          style: {
                            position: 'absolute',
                            right: 14,
                            top: 0,
                            bottom: 0,
                            justifyContent: 'center',
                          },
                          children: (0, B.jsx)(f.Icon, {
                            name: 'search',
                            size: 18,
                            color: N.muted,
                          }),
                        }),
                      ],
                    }),
                    (0, B.jsx)(j.ProductSuggest, {
                      attached: !0,
                      products: _.state.products,
                      value: _.name,
                      productId: _.productId,
                      draft: _.previewDraft,
                      onPick: (e) => {
                        (_.onPick(e), i.default.dismiss());
                      },
                    }),
                  ],
                }),
                !_.name.trim() &&
                  T.length > 0 &&
                  (0, B.jsxs)(s.default, {
                    style: { gap: 6 },
                    children: [
                      (0, B.jsx)(y.Copy, {
                        style: { fontSize: 11, lineHeight: 16, color: N.muted },
                        children: (0, c.L)(
                          '\u0627\u062e\u06cc\u0631\u0627\u064b',
                        ),
                      }),
                      _.wide
                        ? (0, B.jsx)(s.default, {
                            testID: 'quick-pick-recents',
                            onLayout: (e) => E(e.nativeEvent.layout.width),
                            style: { gap: 8 },
                            children: ((e) => {
                              const t = e.slice(0, 2 * ce),
                                i = [];
                              for (let e = 0; e < t.length; e += ce)
                                i.push(t.slice(e, e + ce));
                              return i;
                            })(T).map((e, t) =>
                              (0, B.jsxs)(
                                s.default,
                                {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    gap: 8,
                                  },
                                  children: [
                                    e.map(ue),
                                    Array.from(
                                      { length: ce - e.length },
                                      (e, t) =>
                                        (0, B.jsx)(
                                          s.default,
                                          {
                                            style: {
                                              flex: 1,
                                              padding: 6,
                                              borderWidth:
                                                o.default.hairlineWidth,
                                              borderColor: 'transparent',
                                            },
                                          },
                                          'pad' + t,
                                        ),
                                    ),
                                  ],
                                },
                                t,
                              ),
                            ),
                          })
                        : (0, B.jsx)(a.ScrollView, {
                            testID: 'quick-pick-recents',
                            horizontal: !0,
                            ...M.noSwipe,
                            showsHorizontalScrollIndicator: !1,
                            keyboardShouldPersistTaps: 'handled',
                            style: { flexGrow: 0, direction: 'rtl' },
                            contentContainerStyle: {
                              flexDirection: 'row-reverse',
                              gap: 8,
                            },
                            children: T.slice(0, 10).map((e) =>
                              (0, B.jsxs)(
                                n.default,
                                {
                                  testID: 'quick-pick-' + e.id,
                                  accessibilityRole: 'button',
                                  accessibilityLabel: e.name,
                                  onPress: () => Y(e),
                                  style: ({ pressed: e }) => ({
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 6,
                                    height: 36,
                                    minHeight: 36,
                                    paddingStart: 4,
                                    paddingEnd: 12,
                                    borderRadius: 18,
                                    borderWidth: o.default.hairlineWidth,
                                    borderColor: N.line,
                                    backgroundColor: e ? N.accentSoft : N.soft,
                                  }),
                                  children: [
                                    (0, B.jsx)(s.default, {
                                      style: {
                                        width: 28,
                                        height: 28,
                                        borderRadius: 14,
                                        overflow: 'hidden',
                                      },
                                      children: (0, B.jsx)(b.ProductPhoto, {
                                        product: e,
                                        height: 28,
                                      }),
                                    }),
                                    (0, B.jsx)(y.Copy, {
                                      style: {
                                        fontSize: 13,
                                        lineHeight: 20,
                                        fontFamily: 'Vazirmatn_600SemiBold',
                                      },
                                      children: e.name,
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                    ],
                  }),
                _.choice.options.length > 0 &&
                  (0, B.jsx)(I.BrandChoice, {
                    name: _.choice.family,
                    options: _.choice.options,
                    selectedId: _.productId,
                    newBrand: _.newBrand,
                    testKey: 'manual',
                    onPick: _.onBrand,
                    onNewBrand: _.onNewBrand,
                  }),
              ],
            }),
            (0, B.jsxs)(s.default, {
              style: { gap: 8 },
              children: [
                J && A
                  ? (0, B.jsx)(R.WeightBox, {
                      testID: 'add-entry-weight',
                      unit: A.unit || 'piece',
                      price: K,
                      value: _.quantity,
                      showPrices: _.canManage || _.showPrices,
                      onChange: (e) => {
                        ($(e.mode),
                          _.onQuantity(e.quantity),
                          _.onExactPrice?.(
                            void 0 !== e.unitPrice && e.quantity
                              ? { quantity: e.quantity, price: e.unitPrice }
                              : void 0,
                          ));
                      },
                    })
                  : (0, B.jsxs)(s.default, {
                      testID: 'add-entry-amount-row',
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'flex-end',
                        gap: 12,
                      },
                      children: [
                        (0, B.jsxs)(s.default, {
                          style: { gap: 4, flexShrink: 0 },
                          children: [
                            (0, B.jsxs)(n.default, {
                              testID: 'add-entry-unit',
                              accessibilityRole: 'button',
                              accessibilityLabel:
                                (0, c.L)('\u0648\u0627\u062d\u062f') + ' ' + Q,
                              onPress: _.onDetails,
                              hitSlop: 6,
                              style: {
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                gap: 4,
                                minHeight: 20,
                              },
                              children: [
                                (0, B.jsx)(m.FieldLabel, {
                                  children: (0, c.L)(
                                    '\u062a\u0639\u062f\u0627\u062f',
                                  ),
                                }),
                                (0, B.jsx)(y.Copy, {
                                  style: {
                                    fontSize: 13,
                                    lineHeight: 20,
                                    color: N.accent,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: Q,
                                }),
                                (0, B.jsx)(f.Icon, {
                                  name: 'down',
                                  size: 12,
                                  color: N.accent,
                                }),
                              ],
                            }),
                            (0, B.jsx)(x.StepperRow, {
                              testID: 'add-entry-stepper',
                              style: { gap: 6 },
                              minus: de(-1),
                              plus: de(1),
                              children: (0, B.jsx)(v.QuantityInput, {
                                testID: 'product-quantity',
                                accessibilityLabel: (0, c.L)(
                                  '\u062a\u0639\u062f\u0627\u062f',
                                ),
                                value: _.quantity,
                                onChange: _.onQuantity,
                                placeholder: '',
                                style: {
                                  width: 56,
                                  ...ne,
                                  paddingHorizontal: 4,
                                  textAlign: 'center',
                                  fontSize: 17,
                                  fontFamily: 'Vazirmatn_700Bold',
                                },
                              }),
                            }),
                          ],
                        }),
                        le,
                      ],
                    }),
                'sold' === _.kind &&
                  !!A &&
                  ae &&
                  (A.unit || 'piece') === _.unit &&
                  (0, B.jsx)(D.PriceChoice, {
                    testID: 'manual-price-choice',
                    side: 'flex-start',
                    product: A,
                    price: (0, w.boxPrice)(_.price),
                    disabled: _.busy,
                    onPick: _.onPickPrice,
                  }),
                te &&
                  (0, B.jsx)(y.Copy, {
                    testID: 'buy-price-hint',
                    style: { fontSize: 11, lineHeight: 18, color: N.muted },
                    children: (0, L.buyPriceHint)(Q),
                  }),
                void 0 !== G &&
                  !J &&
                  (_.canManage || _.showPrices) &&
                  (0, B.jsxs)(s.default, {
                    testID: 'add-entry-total',
                    style: y.common.between,
                    children: [
                      (0, B.jsx)(y.Copy, {
                        style: { fontSize: 13, lineHeight: 22, color: N.muted },
                        children: (0, c.L)('\u062c\u0645\u0639'),
                      }),
                      (0, B.jsx)(y.Copy, {
                        style: {
                          fontSize: 15,
                          lineHeight: 24,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: (0, u.money)(G, { hint: !1 }),
                      }),
                    ],
                  }),
              ],
            }),
            (0, B.jsxs)(s.default, {
              style: { gap: 12 },
              children: [
                (0, B.jsx)(m.MoreToggle, {
                  testID: 'manual-more',
                  label:
                    r.notebookFa.moreDetails +
                    (!_.details && re ? ' \xb7 ' + re : ''),
                  open: _.details,
                  onPress: _.onDetails,
                }),
                _.details &&
                  (0, B.jsxs)(s.default, {
                    testID: 'add-entry-details',
                    style: { gap: 12 },
                    children: [
                      (0, B.jsx)(m.Field, {
                        label: (0, c.L)('\u0648\u0627\u062d\u062f'),
                        children: (0, B.jsx)(v.UnitInput, {
                          selectorOnly: !0,
                          testID: 'product-quantity',
                          value: _.quantity,
                          onChange: _.onQuantity,
                          unit: _.unit,
                          baseUnit: A?.unit || _.unit,
                          onUnitChange: _.onUnit,
                          packSize: A?.packSize,
                          packUnit: A?.packUnit,
                        }),
                      }),
                      _.canManage && 'received' === _.kind && se(),
                      'received' === _.kind &&
                        !O &&
                        (0, B.jsx)(S.SupplierPick, {
                          shop: _.shop,
                          value: _.supplier,
                          onChange: _.onSupplier,
                        }),
                      'received' === _.kind &&
                        (0, B.jsxs)(s.default, {
                          style: { gap: 8 },
                          children: [
                            (0, B.jsx)(m.FieldLabel, {
                              children: r.notebookFa.expiry,
                            }),
                            _.expiry
                              ? (0, B.jsxs)(B.Fragment, {
                                  children: [
                                    (0, B.jsx)(C.JalaliDateField, {
                                      id: 'manual-expiry',
                                      dateOnly: !0,
                                      value: (0, z.isoToParts)(_.expiry),
                                      onChange: (e) =>
                                        _.onExpiry((0, z.partsToIso)(e)),
                                    }),
                                    (0, B.jsx)(y.Button, {
                                      secondary: !0,
                                      onPress: () => _.onExpiry(void 0),
                                      children: r.notebookW5Fa.removeExpiry,
                                    }),
                                  ],
                                })
                              : (0, B.jsx)(y.Button, {
                                  testID: 'manual-expiry-toggle',
                                  secondary: !0,
                                  onPress: () =>
                                    _.onExpiry((0, h.localParts)().date),
                                  children: r.notebookW5Fa.addExpiry,
                                }),
                          ],
                        }),
                      J && ae && se(),
                      _.canManage && 'sold' === _.kind && oe(),
                      _.canManage &&
                        ('used' === _.kind || 'waste' === _.kind) &&
                        (0, B.jsxs)(s.default, {
                          style: [y.common.row, { alignItems: 'flex-start' }],
                          children: [oe(), se()],
                        }),
                      (0, B.jsxs)(s.default, {
                        style: { gap: 8 },
                        children: [
                          (0, B.jsx)(m.FieldLabel, {
                            children: (0, c.L)(
                              '\u062a\u0627\u0631\u06cc\u062e',
                            ),
                          }),
                          (0, B.jsxs)(n.default, {
                            testID: 'manual-date',
                            accessibilityRole: 'button',
                            accessibilityLabel: p.fa.movementTime,
                            onPress: _.onDate,
                            style: ({ pressed: e }) => ({
                              alignSelf: 'flex-end',
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 8,
                              height: 40,
                              paddingHorizontal: 14,
                              borderRadius: 20,
                              borderWidth: o.default.hairlineWidth,
                              borderColor: N.line,
                              backgroundColor: e ? N.line : N.soft,
                            }),
                            children: [
                              (0, B.jsx)(f.Icon, {
                                name: 'clock',
                                color: N.text,
                                size: 16,
                              }),
                              (0, B.jsx)(y.Copy, {
                                style: { fontSize: 14, lineHeight: 22 },
                                children: _.timestamp
                                  ? (0, h.formatMoment)(_.timestamp) ||
                                    p.fa.invalidDate
                                  : (0, c.L)(
                                      '\u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627',
                                    ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
            (!!_.shortage || !!_.error || !!_.success) &&
              (0, B.jsxs)(s.default, {
                style: { gap: 8 },
                children: [
                  !!_.shortage &&
                    (0, B.jsx)(y.Copy, {
                      testID: 'manual-shortage',
                      accessibilityRole: 'alert',
                      style: { color: N.danger, fontSize: 12, lineHeight: 20 },
                      children: _.shortage,
                    }),
                  !!_.error &&
                    (0, B.jsx)(y.Copy, {
                      accessibilityRole: 'alert',
                      style: { color: N.danger, fontSize: 13, lineHeight: 22 },
                      children: _.error,
                    }),
                  !!_.success &&
                    (0, B.jsxs)(s.default, {
                      testID: 'manual-success',
                      accessibilityRole: 'alert',
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 8,
                        paddingHorizontal: 12,
                        paddingVertical: 8,
                        borderRadius: 12,
                        backgroundColor: N.success + '1f',
                        borderWidth: o.default.hairlineWidth,
                        borderColor: N.success,
                      },
                      children: [
                        (0, B.jsx)(s.default, {
                          style: {
                            width: 22,
                            height: 22,
                            borderRadius: 11,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: N.success,
                          },
                          children: (0, B.jsx)(f.Icon, {
                            name: 'check',
                            size: 14,
                            color: N.onSuccess,
                          }),
                        }),
                        (0, B.jsx)(y.Copy, {
                          style: { flex: 1, fontSize: 13, lineHeight: 22 },
                          children: _.success,
                        }),
                      ],
                    }),
                ],
              }),
            (0, B.jsxs)(s.default, {
              style: { gap: 8 },
              children: [
                (0, B.jsx)(y.Button, {
                  testID: 'add-manual',
                  disabled: _.busy || _.choice.pending || !!_.shortage,
                  onPress: _.onSave,
                  children:
                    _.saveLabel +
                    (J && U > 0
                      ? ' \xb7 ' +
                        ('money' === Z
                          ? (0, F.measureText)(U, _.unit)
                          : void 0 !== G && (_.canManage || _.showPrices)
                            ? (0, u.money)(G, { full: !0, hint: !1 })
                            : (0, F.measureText)(U, _.unit))
                      : ''),
                }),
                !!_.priceNote &&
                  (0, B.jsx)(y.Copy, {
                    testID: 'manual-price-note',
                    style: { fontSize: 11, lineHeight: 18, color: N.warning },
                    children: _.priceNote,
                  }),
                !_.details &&
                  !!_.timestamp &&
                  (0, B.jsx)(y.Copy, {
                    style: {
                      fontSize: 11,
                      lineHeight: 18,
                      color: N.muted,
                      textAlign: 'center',
                    },
                    children:
                      (0, h.formatMoment)(_.timestamp) || p.fa.invalidDate,
                  }),
                _.shop && (0, B.jsx)(P.ReceiptPhotoPrompt, { shop: _.shop }),
              ],
            }),
          ],
        });
      }));
    var t = _r(d[0]),
      i = e(_r(d[1])),
      n = e(_r(d[2])),
      o = e(_r(d[3])),
      s = e(_r(d[4])),
      a = _r(d[5]),
      l = _r(d[6]),
      r = _r(d[7]),
      c = _r(d[8]),
      u = _r(d[9]),
      h = _r(d[10]),
      p = _r(d[11]),
      y = _r(d[12]),
      m = _r(d[13]),
      f = _r(d[14]),
      x = _r(d[15]),
      b = _r(d[16]),
      j = _r(d[17]),
      I = _r(d[18]),
      k = _r(d[19]),
      v = _r(d[20]),
      S = _r(d[21]),
      C = _r(d[22]),
      z = _r(d[23]),
      P = _r(d[24]),
      D = _r(d[25]),
      w = _r(d[26]),
      L = _r(d[27]),
      H = _r(d[28]),
      M = _r(d[29]),
      R = _r(d[30]),
      F = _r(d[31]),
      B = _r(d[32]);
    function W(e, t = 10) {
      const i = new Map();
      for (const t of e.movements) {
        const e = Date.parse(t.timestamp || '') || 0;
        e > (i.get(t.productId) || 0) && i.set(t.productId, e);
      }
      const n = [...i.entries()].sort((e, t) => t[1] - e[1]).map((e) => e[0]);
      return {
        last: i,
        top: n
          .map((t) => e.products.find((e) => e.id === t && !e.archivedAt))
          .filter((e) => !!e)
          .slice(0, t),
      };
    }
    function q(e, t) {
      const i = Number((0, v.normalizeQuantityText)(e) || 0);
      return t < 0
        ? i > 1
          ? String(Math.max(1, Math.round(1e3 * (i - 1)) / 1e3))
          : e
        : String(Math.round(1e3 * (i + 1)) / 1e3);
    }
  },
  831,
  [
    2, 207, 232, 17, 99, 380, 439, 580, 311, 435, 440, 492, 407, 774, 385, 617,
    628, 694, 695, 696, 614, 832, 619, 529, 790, 799, 464, 833, 382, 384, 834,
    459, 338,
  ],
);
