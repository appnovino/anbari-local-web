// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 984; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ModelPage = function ({
        group: e,
        movements: P,
        canManage: B,
        canEditPrices: T,
        canSeeSellPrice: R,
        canSeeBuyPrice: _,
        onSaveVariant: M,
        onSetStock: F,
        onBulkPrice: V,
        onRefresh: O,
        onSelect: W,
        onAddVariants: A,
        onReceive: H,
        onClose: E,
        onRenamed: q,
      }) {
        const { colors: U } = (0, S.useTheme)(),
          [X, G] = (0, l.useState)({}),
          Q = (e) => e.version || 0,
          Z = e.variants.map((e) =>
            X[e.id] && Q(X[e.id]) > Q(e) ? X[e.id] : e,
          ),
          J = { ...e, variants: Z },
          K = Z.find((e) => e.photo) || Z[0],
          [N, Y] = (0, l.useState)(!1),
          $ = (0, l.useRef)(!1),
          [ee, te] = (0, l.useState)(''),
          [le, se] = (0, l.useState)(''),
          ne = (0, l.useRef)(null),
          [oe, ie] = (0, l.useState)(!1),
          [re, ae] = (0, l.useState)({}),
          [ce, de] = (0, l.useState)([]),
          [ue, he] = (0, l.useState)({}),
          [me, ye] = (0, l.useState)(''),
          [pe, xe] = (0, l.useState)(''),
          [ge, fe] = (0, l.useState)(!1),
          [je, Le] = (0, l.useState)(null),
          [be, Ce] = (0, l.useState)({}),
          [Se, we] = (0, l.useState)(null),
          [Ie, ve] = (0, l.useState)(!1),
          [De, ke] = (0, l.useState)(!1),
          [ze, Pe] = (0, l.useState)(null),
          [Be, Te] = (0, l.useState)(null),
          Re = { price: R, costPrice: _ },
          Me = T && (R || _),
          Fe = (0, m.modelAxes)(J),
          Ve = oe ? 128 : 76,
          [Oe, We] = (0, w.useColorBlocks)(Fe.colors, Ve),
          Ae = R
            ? [
                ...new Set(Z.map((e) => e.price).filter((e) => void 0 !== e)),
              ].sort((e, t) => e - t)
            : [],
          [He, Ee] = (0, c.useGridPrices)((0, h.pricesDiffer)(Z)),
          qe = (0, m.recentModelMovements)(Z, P),
          Ue = je && (Z.find((e) => e.id === je.id) || je),
          Xe = B && !!Ue && 'made' !== Ue.kind && !Ue.archivedAt,
          Ge = (e) =>
            (0, D.tomanToInput)(e).toLocaleString((0, I.numberLocale)(), {
              maximumFractionDigits: 20,
            }),
          Qe = (() => {
            try {
              return (0, m.modelBulkPriceChanges)(Z, ue, Re).length > 0;
            } catch {
              return !0;
            }
          })(),
          Ze = (() => {
            if (!je || !Ue) return !1;
            try {
              return (
                (Me && (0, m.modelPriceChanges)([je], be, Re).length > 0) ||
                (Xe && null !== Se && (0, u.parseCount)(Se) !== Ue.stock)
              );
            } catch {
              return !0;
            }
          })(),
          Je = (() => {
            try {
              return Xe && null !== Se && (0, u.parseCount)(Se) < Ue.stock;
            } catch {
              return !1;
            }
          })();
        function Ke(e) {
          G((t) => ({ ...t, [e.id]: e }));
        }
        function Ne(e) {
          const t = e instanceof Error ? e.message : '';
          (te(
            'missing_variant_value' === t
              ? (0, I.L)(
                  '\u0633\u0627\u06cc\u0632 \u06cc\u0627 \u0631\u0646\u06af \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f.',
                )
              : 'missing_model_name' === t
                ? (0, I.L)(
                    '\u0646\u0627\u0645 \u0645\u062f\u0644 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
                  )
                : 'duplicate_model_variant' === t
                  ? (0, I.L)(
                      '\u0627\u06cc\u0646 \u062a\u0631\u06a9\u06cc\u0628 \u0633\u0627\u06cc\u0632 \u0648 \u0631\u0646\u06af \u0627\u0632 \u0642\u0628\u0644 \u0648\u062c\u0648\u062f \u062f\u0627\u0631\u062f.',
                    )
                  : 'invalid_model_price' === t
                    ? (0, I.L)(
                        '\u0642\u06cc\u0645\u062a \u0631\u0627 \u0628\u0627 \u0639\u062f\u062f \u0635\u0641\u0631 \u06cc\u0627 \u0628\u06cc\u0634\u062a\u0631 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f.',
                      )
                    : (0, C.errorText)(e),
          ),
            ne.current?.scrollTo({ y: 0, animated: !0 }));
        }
        async function Ye(e, t = '') {
          if ($.current) return;
          (($.current = !0), Y(!0), te(''), se(''));
          let l = !1;
          try {
            (await e(), t && se(t));
          } catch (e) {
            ((l = !0), Ne(e));
          } finally {
            try {
              await O();
            } catch (e) {
              l || Ne(e);
            }
            (($.current = !1), Y(!1));
          }
        }
        async function $e(e) {
          await Ye(
            async () => {
              (await (0, m.saveModelChanges)(
                (0, m.completeModelAxis)(J, e, 'size' === e ? me : pe),
                M,
                Ke,
              ),
                'size' === e ? ye('') : xe(''));
            },
            (0, I.L)('\u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.'),
          );
        }
        async function et(e) {
          if (!$.current) {
            (($.current = !0), Y(!0), te(''));
            try {
              const t = await (0, b.pickPhotoSource)(e);
              t && (ke(!1), Pe(t));
            } catch (e) {
              Ne(e);
            } finally {
              (($.current = !1), Y(!1));
            }
          }
        }
        (0, l.useEffect)(() => {
          oe && !Object.keys(re).length && de(Z);
        }, [e.variants, X, oe, re]);
        const tt = (e, l) => {
          const s = ce.find((t) => t.id === e.id) || e,
            n =
              re[e.id]?.[l] ??
              (void 0 === s[l] ? '' : String((0, D.tomanToInput)(s[l]))),
            o =
              'price' === l
                ? (0, I.L)('\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634')
                : (0, I.L)('\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f');
          return (0, k.jsxs)(i.default, {
            style: { width: '100%', gap: 2 },
            children: [
              (0, k.jsx)(y.Copy, { style: z.small, children: o }),
              (0, k.jsx)(t.MoneyInput, {
                shown: !0,
                decimals: (0, D.moneyDecimals)(),
                testID: 'model-' + l + '-' + e.id,
                accessibilityLabel: o + '\u060c ' + e.name,
                value: n,
                editable: !N,
                selectTextOnFocus: !0,
                placeholder: (0, I.L)(
                  '\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a',
                ),
                onChange: (t) =>
                  ae((s) => ({ ...s, [e.id]: { ...s[e.id], [l]: t } })),
                style: z.priceInput,
              }),
            ],
          });
        };
        return (0, k.jsxs)(k.Fragment, {
          children: [
            (0, k.jsxs)(a.ScrollView, {
              ref: ne,
              testID: 'model-page',
              keyboardShouldPersistTaps: 'handled',
              contentContainerStyle: {
                gap: 14,
                paddingBottom: 28,
                width: '100%',
                maxWidth: 760,
                alignSelf: 'center',
              },
              children: [
                (0, k.jsxs)(i.default, {
                  style: y.common.between,
                  children: [
                    (0, k.jsx)(y.PageTitle, {
                      title: e.model,
                      sub: (0, I.L)(
                        '{s} \u0633\u0627\u06cc\u0632\u060c {c} \u0631\u0646\u06af\u060c {n} \u0645\u0648\u0631\u062f',
                        {
                          s: Fe.sizes
                            .filter(Boolean)
                            .length.toLocaleString((0, I.numberLocale)()),
                          c: Fe.colors
                            .filter(Boolean)
                            .length.toLocaleString((0, I.numberLocale)()),
                          n: Z.length.toLocaleString((0, I.numberLocale)()),
                        },
                      ),
                      style: { flex: 1 },
                    }),
                    B &&
                      (0, k.jsx)(y.Button, {
                        testID: 'model-rename',
                        secondary: !0,
                        disabled: N || oe,
                        onPress: () => {
                          (te(''), Te(e.model));
                        },
                        children: (0, I.L)(
                          '\u062a\u063a\u06cc\u06cc\u0631 \u0646\u0627\u0645',
                        ),
                      }),
                    (0, k.jsx)(y.Button, {
                      secondary: !0,
                      disabled: N,
                      onPress: E,
                      children: (0, I.L)('\u0628\u0633\u062a\u0646'),
                    }),
                  ],
                }),
                (0, k.jsxs)(y.Card, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 14,
                  },
                  children: [
                    (0, k.jsxs)(i.default, {
                      style: { width: 100, gap: 4 },
                      children: [
                        (0, k.jsxs)(i.default, {
                          children: [
                            (0, k.jsx)(p.ProductPhoto, {
                              product: K,
                              height: 100,
                            }),
                            B &&
                              (0, k.jsx)(s.default, {
                                testID: 'model-photo-edit',
                                accessibilityRole: 'button',
                                accessibilityLabel: K.photo
                                  ? (0, I.L)(
                                      '\u062a\u063a\u06cc\u06cc\u0631 \u0639\u06a9\u0633',
                                    )
                                  : (0, I.L)(
                                      '\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633',
                                    ),
                                disabled: N || oe,
                                onPress: () => {
                                  (te(''), ke(!0));
                                },
                                style: [
                                  z.camera,
                                  {
                                    backgroundColor: U.surface,
                                    borderColor: U.line,
                                    opacity: N || oe ? 0.4 : 1,
                                  },
                                ],
                                children: (0, k.jsx)(f.Icon, {
                                  name: 'camera',
                                  size: 20,
                                  color: U.text,
                                }),
                              }),
                          ],
                        }),
                        (0, k.jsx)(y.Copy, {
                          style: z.small,
                          children: K.photo
                            ? (0, I.L)(
                                '\u062a\u063a\u06cc\u06cc\u0631 \u0639\u06a9\u0633',
                              )
                            : (0, I.L)('\u0639\u06a9\u0633 \u0645\u062f\u0644'),
                        }),
                      ],
                    }),
                    (0, k.jsxs)(i.default, {
                      style: { flex: 1, gap: 4 },
                      children: [
                        (0, k.jsx)(y.Copy, {
                          style: { fontSize: 12, color: U.muted },
                          children: (0, I.L)(
                            '\u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0644',
                          ),
                        }),
                        (0, k.jsx)(y.Copy, {
                          testID: 'model-total',
                          style: {
                            fontSize: 26,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: e.stock.toLocaleString(
                            (0, I.numberLocale)(),
                          ),
                        }),
                        (0, k.jsx)(x.BrandTag, { brand: K.brand }),
                        !!Ae.length &&
                          (0, k.jsx)(y.Copy, {
                            style: { fontSize: 12, color: U.muted },
                            children:
                              1 === Ae.length
                                ? (0, D.money)(Ae[0], { full: !0 })
                                : (0, I.L)('{a} \u062a\u0627 {b}', {
                                    a: (0, D.money)(Ae[0], {
                                      full: !0,
                                      hint: !1,
                                    }),
                                    b: (0, D.money)(Ae[Ae.length - 1], {
                                      full: !0,
                                      hint: !1,
                                    }),
                                  }),
                          }),
                      ],
                    }),
                  ],
                }),
                !!ee &&
                  (0, k.jsx)(y.Copy, {
                    testID: 'model-error',
                    accessibilityRole: 'alert',
                    style: { color: U.danger },
                    children: ee,
                  }),
                !!le &&
                  (0, k.jsx)(y.Copy, {
                    testID: 'model-notice',
                    accessibilityLiveRegion: 'polite',
                    style: { color: U.accent },
                    children: le,
                  }),
                ['size', 'color'].map(
                  (e) =>
                    (0, m.missingVariants)(J, e).length > 0 &&
                    (0, k.jsxs)(
                      y.Card,
                      {
                        testID: 'model-missing-' + e,
                        style: { borderColor: U.warning, gap: 8 },
                        children: [
                          (0, k.jsx)(y.Copy, {
                            style: { color: U.warning },
                            children:
                              'size' === e
                                ? (0, I.L)(
                                    '\u0633\u0627\u06cc\u0632 \u0627\u06cc\u0646 \u0645\u062f\u0644 \u0645\u0634\u062e\u0635 \u0646\u0634\u062f\u0647',
                                  )
                                : (0, I.L)(
                                    '\u0631\u0646\u06af \u0627\u06cc\u0646 \u0645\u062f\u0644 \u0645\u0634\u062e\u0635 \u0646\u0634\u062f\u0647',
                                  ),
                          }),
                          (0, k.jsx)(y.Copy, {
                            style: { fontSize: 12 },
                            children:
                              'size' === e
                                ? (0, I.L)(
                                    '\u0628\u0631\u0627\u06cc \u0631\u062f\u06cc\u0641 \xab\u2014\xbb \u0633\u0627\u06cc\u0632 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f (\u0645\u062b\u0644\u0627\u064b XL \u06cc\u0627 \u06f4\u06f2).',
                                  )
                                : (0, I.L)(
                                    '\u0628\u0631\u0627\u06cc \u0633\u062a\u0648\u0646 \xab\u2014\xbb \u0631\u0646\u06af \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f.',
                                  ),
                          }),
                          B &&
                            (0, k.jsxs)(k.Fragment, {
                              children: [
                                (0, k.jsx)(y.Input, {
                                  testID: 'model-missing-' + e + '-input',
                                  accessibilityLabel:
                                    'size' === e
                                      ? (0, I.L)(
                                          '\u062a\u0639\u06cc\u06cc\u0646 \u0633\u0627\u06cc\u0632',
                                        )
                                      : (0, I.L)(
                                          '\u062a\u0639\u06cc\u06cc\u0646 \u0631\u0646\u06af',
                                        ),
                                  value: 'size' === e ? me : pe,
                                  onChangeText: 'size' === e ? ye : xe,
                                  editable: !N && !oe,
                                  maxLength: 20,
                                  placeholder:
                                    'size' === e
                                      ? (0, I.L)(
                                          '\u0645\u062b\u0644\u0627\u064b XL \u06cc\u0627 \u06f4\u06f2',
                                        )
                                      : (0, I.L)(
                                          '\u0645\u062b\u0644\u0627\u064b \u0622\u0628\u06cc',
                                        ),
                                }),
                                (0, k.jsx)(y.Button, {
                                  testID: 'model-set-' + e,
                                  disabled:
                                    N || oe || !('size' === e ? me : pe).trim(),
                                  onPress: () => $e(e),
                                  children:
                                    'size' === e
                                      ? (0, I.L)(
                                          '\u062a\u0639\u06cc\u06cc\u0646 \u0633\u0627\u06cc\u0632',
                                        )
                                      : (0, I.L)(
                                          '\u062a\u0639\u06cc\u06cc\u0646 \u0631\u0646\u06af',
                                        ),
                                }),
                              ],
                            }),
                        ],
                      },
                      e,
                    ),
                ),
                B &&
                  (0, k.jsx)(y.Button, {
                    testID: 'model-receive',
                    disabled: N || oe,
                    onPress: H,
                    children: (0, I.L)(
                      '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0645\u0648\u062c\u0648\u062f\u06cc',
                    ),
                  }),
                (0, k.jsxs)(y.Card, {
                  testID: 'model-grid',
                  style: { gap: 8, padding: 10 },
                  children: [
                    (0, k.jsx)(y.Copy, {
                      children: (0, I.L)(
                        '\u0645\u0648\u062c\u0648\u062f\u06cc \u0647\u0631 \u062e\u0627\u0646\u0647',
                      ),
                    }),
                    oe
                      ? (0, k.jsxs)(y.Copy, {
                          style: { fontSize: 12, color: U.muted },
                          children: [
                            (0, I.L)(
                              '\u0642\u06cc\u0645\u062a \u0647\u0631 \u062e\u0627\u0646\u0647',
                            ),
                            ' \xb7 ',
                            (0, D.currencyUnit)(),
                          ],
                        })
                      : (0, k.jsxs)(i.default, {
                          style: [y.common.between, { flexWrap: 'wrap' }],
                          children: [
                            (0, k.jsx)(y.Copy, {
                              style: {
                                fontSize: 12,
                                color: U.muted,
                                flexShrink: 1,
                              },
                              children: (0, I.L)(
                                '\u0631\u0648\u06cc \u0647\u0631 \u062e\u0627\u0646\u0647 \u0628\u0632\u0646 \u062a\u0627 \u0647\u0645\u0627\u0646 \u0633\u0627\u06cc\u0632 \u0648 \u0631\u0646\u06af \u0628\u0627\u0632 \u0634\u0648\u062f.',
                              ),
                            }),
                            R &&
                              (0, k.jsxs)(i.default, {
                                style: y.common.row,
                                children: [
                                  (0, k.jsx)(y.Copy, {
                                    style: z.small,
                                    children: (0, I.L)(
                                      '\u0646\u0645\u0627\u06cc\u0634 \u0642\u06cc\u0645\u062a',
                                    ),
                                  }),
                                  (0, k.jsx)(o.default, {
                                    testID: 'model-price-toggle',
                                    value: He,
                                    onValueChange: Ee,
                                    trackColor: {
                                      false: U.soft,
                                      true: U.accent,
                                    },
                                    thumbColor: U.surface,
                                    activeThumbColor: U.surface,
                                  }),
                                ],
                              }),
                          ],
                        }),
                    (0, k.jsx)(i.default, {
                      onLayout: We,
                      style: { gap: 12 },
                      children: Oe.map((e, t) =>
                        (0, k.jsxs)(
                          i.default,
                          {
                            style: [
                              z.block,
                              t > 0 && {
                                borderTopWidth: n.default.hairlineWidth,
                                borderTopColor: U.line,
                                paddingTop: 12,
                              },
                            ],
                            children: [
                              !!(0, w.blockLabel)(Oe, t) &&
                                (0, k.jsx)(y.Copy, {
                                  style: { fontSize: 12, color: U.muted },
                                  children: (0, w.blockLabel)(Oe, t),
                                }),
                              (0, k.jsxs)(i.default, {
                                style: z.row,
                                children: [
                                  (0, k.jsx)(i.default, { style: z.head }),
                                  e.map((e) =>
                                    (0, k.jsx)(
                                      i.default,
                                      {
                                        style: {
                                          width: Ve,
                                          alignItems: 'center',
                                        },
                                        children: (0, k.jsx)(y.Copy, {
                                          style: z.small,
                                          children: e || '\u2014',
                                        }),
                                      },
                                      'h' + e,
                                    ),
                                  ),
                                ],
                              }),
                              Fe.sizes.map((t) =>
                                (0, k.jsxs)(
                                  i.default,
                                  {
                                    style: z.row,
                                    children: [
                                      (0, k.jsx)(i.default, {
                                        style: z.head,
                                        children: (0, k.jsx)(y.Copy, {
                                          style: {
                                            fontSize: 14,
                                            fontFamily: 'Vazirmatn_700Bold',
                                          },
                                          children: (0, I.localDigits)(
                                            t || '\u2014',
                                          ),
                                        }),
                                      }),
                                      e.map((e) => {
                                        const l = (0, h.findVariant)(J, t, e);
                                        return (0, k.jsx)(
                                          i.default,
                                          {
                                            style: {
                                              width: Ve,
                                              alignItems: 'center',
                                              gap: 4,
                                            },
                                            children: l
                                              ? oe
                                                ? (0, k.jsxs)(i.default, {
                                                    style: [
                                                      z.editBox,
                                                      { borderColor: U.line },
                                                    ],
                                                    children: [
                                                      (0, k.jsx)(y.Copy, {
                                                        style: z.small,
                                                        children: (0, I.L)(
                                                          '\u0645\u0648\u062c\u0648\u062f\u06cc: {n}',
                                                          {
                                                            n: (0,
                                                            I.localDigits)(
                                                              l.stock,
                                                            ),
                                                          },
                                                        ),
                                                      }),
                                                      R && tt(l, 'price'),
                                                      _ && tt(l, 'costPrice'),
                                                    ],
                                                  })
                                                : (0, k.jsxs)(s.default, {
                                                    testID:
                                                      'model-cell-' + l.id,
                                                    accessibilityRole: 'button',
                                                    accessibilityLabel: l.name,
                                                    disabled: N,
                                                    onPress: () => (
                                                      Le(l),
                                                      Ce({}),
                                                      we(null),
                                                      ve(!1),
                                                      te(''),
                                                      void se('')
                                                    ),
                                                    style: ({ pressed: e }) => [
                                                      z.box,
                                                      He && R && { height: 68 },
                                                      {
                                                        backgroundColor:
                                                          l.stock > 0
                                                            ? U.surface
                                                            : U.soft,
                                                        borderColor:
                                                          l.stock > 0
                                                            ? U.accent
                                                            : U.line,
                                                        opacity: e ? 0.8 : 1,
                                                      },
                                                    ],
                                                    children: [
                                                      He &&
                                                        R &&
                                                        (0, k.jsx)(y.Copy, {
                                                          testID:
                                                            'model-cell-price-' +
                                                            l.id,
                                                          numberOfLines: 1,
                                                          style: [
                                                            z.price,
                                                            { color: U.muted },
                                                          ],
                                                          children:
                                                            void 0 !== l.price
                                                              ? (0,
                                                                D.shortMoney)(
                                                                  l.price,
                                                                )
                                                              : (0, I.L)(
                                                                  '\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a',
                                                                ),
                                                        }),
                                                      (0, k.jsx)(y.Copy, {
                                                        style: {
                                                          fontSize: 17,
                                                          fontFamily:
                                                            'Vazirmatn_700Bold',
                                                          color:
                                                            l.stock > 0
                                                              ? U.text
                                                              : U.muted,
                                                        },
                                                        children:
                                                          l.stock.toLocaleString(
                                                            (0,
                                                            I.numberLocale)(),
                                                          ),
                                                      }),
                                                    ],
                                                  })
                                              : (0, k.jsx)(y.Copy, {
                                                  style: { color: U.muted },
                                                  children: '\u2014',
                                                }),
                                          },
                                          t + '|' + e,
                                        );
                                      }),
                                    ],
                                  },
                                  'r' + t,
                                ),
                              ),
                            ],
                          },
                          'b' + t,
                        ),
                      ),
                    }),
                  ],
                }),
                (R || _) &&
                  (0, k.jsxs)(y.Card, {
                    testID: 'model-prices',
                    style: { gap: 12 },
                    children: [
                      (0, k.jsx)(y.Copy, {
                        accessibilityRole: 'header',
                        children: (0, D.swapUnit)(
                          (0, I.L)(
                            '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627 (\u062a\u0648\u0645\u0627\u0646)',
                          ),
                        ),
                      }),
                      !oe &&
                        (0, k.jsxs)(k.Fragment, {
                          children: [
                            ['price', 'costPrice']
                              .filter((e) => Re[e])
                              .map((e) => {
                                const l = (0, m.modelPriceSummary)(Z, e),
                                  s =
                                    'price' === e
                                      ? (0, I.L)(
                                          '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                                        )
                                      : (0, I.L)(
                                          '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                                        ),
                                  n =
                                    void 0 === l.min
                                      ? (0, I.L)(
                                          '\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a',
                                        ) +
                                        ' - ' +
                                        (0, I.L)(
                                          '\u0627\u06cc\u0646 \u06a9\u0627\u062f\u0631 \u0628\u0627\u06cc\u062f \u067e\u0631 \u0634\u0648\u062f',
                                        )
                                      : (0, I.L)(
                                          '\u0627\u0632 {a} \u062a\u0627 {b}',
                                          { a: Ge(l.min), b: Ge(l.max) },
                                        );
                                return (0, k.jsxs)(
                                  i.default,
                                  {
                                    style: { gap: 4 },
                                    children: [
                                      (0, k.jsx)(y.Copy, { children: s }),
                                      (0, k.jsx)(t.MoneyInput, {
                                        shown: !0,
                                        decimals: (0, D.moneyDecimals)(),
                                        testID:
                                          'price' === e
                                            ? 'model-price-all'
                                            : 'model-cost-all',
                                        accessibilityLabel: s,
                                        value:
                                          ue[e] ??
                                          (void 0 === l.value
                                            ? ''
                                            : Ge(l.value)),
                                        onChange: (t) =>
                                          he((l) => ({ ...l, [e]: t })),
                                        editable: Me && !N,
                                        selectTextOnFocus: !0,
                                        placeholder: n,
                                        placeholderTextColor: l.missing
                                          ? U.warning
                                          : U.muted,
                                        style: l.missing
                                          ? { borderColor: U.warning }
                                          : void 0,
                                      }),
                                      l.missing > 0 &&
                                        void 0 !== l.min &&
                                        (0, k.jsx)(y.Copy, {
                                          style: {
                                            fontSize: 12,
                                            color: U.warning,
                                          },
                                          children: (0, I.L)(
                                            '{n} \u0645\u0648\u0631\u062f \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a',
                                            {
                                              n: (0, I.localDigits)(l.missing),
                                            },
                                          ),
                                        }),
                                    ],
                                  },
                                  e,
                                );
                              }),
                            Me &&
                              (0, k.jsxs)(k.Fragment, {
                                children: [
                                  (0, k.jsx)(y.Button, {
                                    testID: 'model-apply-all',
                                    disabled: N || !Qe,
                                    onPress: async function () {
                                      await Ye(
                                        async () => {
                                          const e = (0,
                                          m.modelBulkPriceChanges)(Z, ue, Re);
                                          for (const {
                                            field: t,
                                            value: l,
                                          } of e)
                                            (await V(t, 'set', l),
                                              he((e) => {
                                                const l = { ...e };
                                                return (delete l[t], l);
                                              }));
                                        },
                                        (0, I.L)(
                                          '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627 \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.',
                                        ),
                                      );
                                    },
                                    children: (0, I.L)(
                                      '\u062b\u0628\u062a \u0628\u0631\u0627\u06cc \u0647\u0645\u0647\u0654 \u0633\u0627\u06cc\u0632\u0647\u0627 \u0648 \u0631\u0646\u06af\u200c\u0647\u0627',
                                    ),
                                  }),
                                  !N &&
                                    !Qe &&
                                    (0, k.jsx)(y.Copy, {
                                      testID: 'model-apply-all-hint',
                                      style: { fontSize: 12, color: U.muted },
                                      children: (0, I.L)(
                                        '\u0642\u06cc\u0645\u062a \u062a\u0627\u0632\u0647 \u0631\u0627 \u062f\u0631 \u06a9\u0627\u062f\u0631 \u0628\u0646\u0648\u06cc\u0633 \u062a\u0627 \u0628\u0631\u0627\u06cc \u0647\u0645\u0647 \u062b\u0628\u062a \u0634\u0648\u062f.',
                                      ),
                                    }),
                                  (0, k.jsx)(y.Button, {
                                    testID: 'model-edit-prices',
                                    secondary: !0,
                                    disabled: N,
                                    onPress: function () {
                                      (de(Z),
                                        ae({}),
                                        fe(!1),
                                        ie(!0),
                                        te(''),
                                        se(''));
                                    },
                                    children: (0, I.L)(
                                      '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0642\u06cc\u0645\u062a\u200c\u0647\u0627',
                                    ),
                                  }),
                                ],
                              }),
                          ],
                        }),
                      Me &&
                        oe &&
                        (0, k.jsxs)(k.Fragment, {
                          children: [
                            (0, k.jsx)(y.Button, {
                              testID: 'model-save-prices',
                              disabled: N,
                              onPress: async function () {
                                await Ye(
                                  async () => {
                                    const e = (0, m.modelPriceChanges)(
                                      ce,
                                      re,
                                      Re,
                                    );
                                    (await (0, m.saveModelChanges)(
                                      e,
                                      M,
                                      (e) => {
                                        (Ke(e),
                                          ae((t) => {
                                            const l = { ...t };
                                            return (delete l[e.id], l);
                                          }),
                                          de((t) =>
                                            t.map((t) =>
                                              t.id === e.id ? e : t,
                                            ),
                                          ));
                                      },
                                    ),
                                      ie(!1),
                                      ae({}));
                                  },
                                  (0, I.L)(
                                    '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627 \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.',
                                  ),
                                );
                              },
                              children: (0, I.L)(
                                '\u0630\u062e\u06cc\u0631\u0647\u0654 \u0642\u06cc\u0645\u062a\u200c\u0647\u0627',
                              ),
                            }),
                            (0, k.jsx)(y.Button, {
                              secondary: !0,
                              disabled: N,
                              onPress: () => {
                                (ie(!1), ae({}), fe(!1));
                              },
                              children: (0, I.L)(
                                '\u0627\u0646\u0635\u0631\u0627\u0641',
                              ),
                            }),
                            (0, k.jsxs)(s.default, {
                              testID: 'model-percent-open',
                              accessibilityRole: 'button',
                              accessibilityState: { expanded: ge },
                              disabled: N,
                              onPress: () => fe((e) => !e),
                              style: [y.common.between, { minHeight: 44 }],
                              children: [
                                (0, k.jsx)(y.Copy, {
                                  children: (0, I.L)(
                                    '\u062a\u063a\u06cc\u06cc\u0631 \u062f\u0631\u0635\u062f\u06cc \u0642\u06cc\u0645\u062a\u200c\u0647\u0627',
                                  ),
                                }),
                                (0, k.jsx)(y.Copy, {
                                  children: ge ? '\u2212' : '+',
                                }),
                              ],
                            }),
                            ge &&
                              (0, k.jsxs)(i.default, {
                                testID: 'model-percent-controls',
                                style: { gap: 10 },
                                children: [
                                  ['price', 'costPrice']
                                    .filter((e) => Re[e])
                                    .map((e) =>
                                      (0, k.jsxs)(
                                        i.default,
                                        {
                                          style: { gap: 6 },
                                          children: [
                                            (0, k.jsx)(y.Copy, {
                                              style: z.small,
                                              children:
                                                'price' === e
                                                  ? (0, I.L)(
                                                      '\u062a\u063a\u06cc\u06cc\u0631 \u062f\u0631\u0635\u062f\u06cc \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                                                    )
                                                  : (0, I.L)(
                                                      '\u062a\u063a\u06cc\u06cc\u0631 \u062f\u0631\u0635\u062f\u06cc \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                                                    ),
                                            }),
                                            (0, k.jsx)(i.default, {
                                              style: {
                                                flexDirection: 'row',
                                                direction: 'ltr',
                                                gap: 10,
                                                alignItems: 'center',
                                              },
                                              children: [-10, 10].map((t) =>
                                                (0, k.jsx)(
                                                  i.default,
                                                  {
                                                    style: { flex: 1 },
                                                    children: (0, k.jsx)(
                                                      y.Button,
                                                      {
                                                        testID:
                                                          'model-' +
                                                          e +
                                                          '-percent-' +
                                                          t,
                                                        secondary: !0,
                                                        disabled:
                                                          N ||
                                                          !!Object.keys(re)
                                                            .length ||
                                                          !Z.some(
                                                            (t) =>
                                                              void 0 !== t[e],
                                                          ),
                                                        onPress: () =>
                                                          Ye(
                                                            () =>
                                                              V(
                                                                e,
                                                                'percent',
                                                                t,
                                                              ),
                                                            (0, I.L)(
                                                              '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627 \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.',
                                                            ),
                                                          ),
                                                        children: (0,
                                                        I.localDigits)(
                                                          (t > 0 ? '+' : '') +
                                                            t +
                                                            '%',
                                                        ),
                                                      },
                                                    ),
                                                  },
                                                  t,
                                                ),
                                              ),
                                            }),
                                          ],
                                        },
                                        e,
                                      ),
                                    ),
                                  (0, k.jsx)(y.Copy, {
                                    style: { fontSize: 12, color: U.muted },
                                    children: (0, I.L)(
                                      '\u062a\u063a\u06cc\u06cc\u0631 \u062f\u0631\u0635\u062f\u06cc \u0641\u0642\u0637 \u0631\u0648\u06cc \u0642\u06cc\u0645\u062a\u200c\u0647\u0627\u06cc \u062b\u0628\u062a\u200c\u0634\u062f\u0647 \u0627\u0639\u0645\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                                    ),
                                  }),
                                  !!Object.keys(re).length &&
                                    (0, k.jsx)(y.Copy, {
                                      style: { fontSize: 12, color: U.warning },
                                      children: (0, I.L)(
                                        '\u0627\u0628\u062a\u062f\u0627 \u0642\u06cc\u0645\u062a\u200c\u0647\u0627\u06cc \u0648\u06cc\u0631\u0627\u06cc\u0634\u200c\u0634\u062f\u0647 \u0631\u0627 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646\u06cc\u062f.',
                                      ),
                                    }),
                                ],
                              }),
                          ],
                        }),
                    ],
                  }),
                B &&
                  (0, k.jsx)(y.Button, {
                    testID: 'model-add-variants',
                    secondary: !0,
                    disabled: N || oe,
                    onPress: A,
                    children: (0, I.L)(
                      '\u0627\u0641\u0632\u0648\u062f\u0646 \u0633\u0627\u06cc\u0632 \u06cc\u0627 \u0631\u0646\u06af',
                    ),
                  }),
                (0, k.jsxs)(y.Card, {
                  testID: 'model-recent',
                  children: [
                    (0, k.jsx)(y.Copy, {
                      accessibilityRole: 'header',
                      children: (0, I.L)(
                        '\u0622\u062e\u0631\u06cc\u0646 \u06af\u0631\u062f\u0634\u200c\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0645\u062f\u0644',
                      ),
                    }),
                    qe.length
                      ? qe.map((e) => {
                          const t = Z.find((t) => t.id === e.productId);
                          return (0, k.jsxs)(
                            i.default,
                            {
                              style: [
                                y.common.between,
                                {
                                  borderTopWidth: 1,
                                  borderColor: U.line,
                                  paddingTop: 9,
                                },
                              ],
                              children: [
                                (0, k.jsxs)(i.default, {
                                  style: { flex: 1, gap: 2 },
                                  children: [
                                    (0, k.jsx)(y.Copy, {
                                      children:
                                        'count' === e.kind
                                          ? (0, u.countText)(e)
                                          : ('received' === e.kind
                                              ? (0, I.L)(
                                                  '\u0648\u0631\u0648\u062f',
                                                )
                                              : 'sold' === e.kind
                                                ? (0, I.L)(
                                                    '\u0641\u0631\u0648\u0634',
                                                  )
                                                : 'waste' === e.kind
                                                  ? (0, I.L)(
                                                      '\u062f\u0648\u0631\u0631\u06cc\u0632',
                                                    )
                                                  : (0, I.L)(
                                                      '\u0645\u0635\u0631\u0641',
                                                    )) +
                                            ' ' +
                                            e.quantity.toLocaleString(
                                              (0, I.numberLocale)(),
                                            ),
                                    }),
                                    (0, k.jsx)(y.Copy, {
                                      style: z.small,
                                      children:
                                        [
                                          t.size && (0, I.localDigits)(t.size),
                                          t.color,
                                        ]
                                          .filter(Boolean)
                                          .join('\u060c ') || t.name,
                                    }),
                                    (0, k.jsx)(y.Copy, {
                                      style: { fontSize: 11, color: U.muted },
                                      children:
                                        (0, v.formatMoment)(
                                          e.timestamp,
                                          e.timeZone,
                                        ) ||
                                        (0, I.L)(
                                          '\u0628\u062f\u0648\u0646 \u062a\u0627\u0631\u06cc\u062e',
                                        ),
                                    }),
                                  ],
                                }),
                                !1 !== e.tracksStock &&
                                  'made' !== t.kind &&
                                  (0, k.jsx)(y.Copy, {
                                    style: { writingDirection: 'ltr' },
                                    children:
                                      void 0 === e.stockAfter
                                        ? '\u2014'
                                        : e.stockAfter.toLocaleString(
                                            (0, I.numberLocale)(),
                                          ),
                                  }),
                              ],
                            },
                            e.id,
                          );
                        })
                      : (0, k.jsx)(y.Copy, {
                          style: { color: U.muted },
                          children: (0, I.L)(
                            '\u0647\u0646\u0648\u0632 \u06af\u0631\u062f\u0634\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647.',
                          ),
                        }),
                  ],
                }),
              ],
            }),
            je &&
              Ue &&
              (0, k.jsx)(j.Sheet, {
                visible: !0,
                title: (0, I.L)(
                  '{qty} \u0639\u062f\u062f\u060c \u0633\u0627\u06cc\u0632 {size}\u060c \u0631\u0646\u06af {color}',
                  {
                    qty: (0, I.localDigits)(Ue.stock),
                    size: (0, I.localDigits)(Ue.size || '\u2014'),
                    color: Ue.color || '\u2014',
                  },
                ),
                onClose: () => {
                  N || Le(null);
                },
                children: (0, k.jsxs)(i.default, {
                  testID: 'model-cell-editor',
                  style: { gap: 12 },
                  children: [
                    (0, k.jsxs)(i.default, {
                      style: { gap: 4 },
                      children: [
                        (0, k.jsx)(y.Copy, {
                          children: (0, I.L)(
                            '\u0645\u0648\u062c\u0648\u062f\u06cc',
                          ),
                        }),
                        (0, k.jsx)(t.QuantityInput, {
                          testID: 'model-cell-stock',
                          accessibilityLabel: (0, I.L)(
                            '\u0645\u0648\u062c\u0648\u062f\u06cc',
                          ),
                          value: Se ?? String(Ue.stock),
                          onChange: we,
                          editable: Xe && !N,
                          maxLength: 18,
                          selectTextOnFocus: !0,
                        }),
                      ],
                    }),
                    Je &&
                      (0, k.jsx)(y.Segmented, {
                        items: [
                          {
                            value: 'sold',
                            label: (0, I.L)('\u0634\u0645\u0627\u0631\u0634'),
                            testID: 'model-cell-stock-sold',
                          },
                          {
                            value: 'waste',
                            label: (0, I.L)(
                              '\u062f\u0648\u0631\u0631\u06cc\u0632',
                            ),
                            testID: 'model-cell-stock-waste',
                          },
                        ],
                        value: Ie ? 'waste' : 'sold',
                        onChange: (e) => {
                          N || ve('waste' === e);
                        },
                      }),
                    ['price', 'costPrice']
                      .filter((e) => Re[e])
                      .map((e) => {
                        const l =
                          'price' === e
                            ? (0, I.L)(
                                '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0627\u06cc\u0646 \u062e\u0627\u0646\u0647',
                              )
                            : (0, I.L)(
                                '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0627\u06cc\u0646 \u062e\u0627\u0646\u0647',
                              );
                        return (0, k.jsxs)(
                          i.default,
                          {
                            style: { gap: 4 },
                            children: [
                              (0, k.jsx)(y.Copy, { children: l }),
                              (0, k.jsx)(t.MoneyInput, {
                                shown: !0,
                                decimals: (0, D.moneyDecimals)(),
                                testID: 'model-cell-edit-' + e,
                                accessibilityLabel: l,
                                value:
                                  be[je.id]?.[e] ??
                                  (void 0 === je[e] ? '' : Ge(je[e])),
                                onChange: (t) =>
                                  Ce((l) => ({
                                    ...l,
                                    [je.id]: { ...l[je.id], [e]: t },
                                  })),
                                editable: Me && !N,
                                selectTextOnFocus: !0,
                                placeholder: (0, I.L)(
                                  '\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a',
                                ),
                              }),
                            ],
                          },
                          e,
                        );
                      }),
                    !!ee &&
                      (0, k.jsx)(y.Copy, {
                        accessibilityRole: 'alert',
                        style: { color: U.danger },
                        children: ee,
                      }),
                    (Me || Xe) &&
                      (0, k.jsx)(y.Button, {
                        testID: 'model-cell-save',
                        disabled: N || !Ze,
                        onPress: async function () {
                          je &&
                            Ue &&
                            (await Ye(
                              async () => {
                                const e = Me
                                  ? (0, m.modelPriceChanges)([je], be, Re)
                                  : [];
                                if (
                                  (Xe && null !== Se && (0, u.parseCount)(Se),
                                  null !== Se && (!Xe || je.stock !== Ue.stock))
                                )
                                  throw (Le(Ue), Error('stock_changed'));
                                const t =
                                  Xe && null !== Se
                                    ? (0, u.countChanges)(
                                        [{ ...Ue, label: Ue.name }],
                                        { [je.id]: Se },
                                        { [je.id]: Ie },
                                      )
                                    : [];
                                let l = Ue;
                                if (
                                  (e.length &&
                                    ((l = await M(je, e[0].patch)),
                                    Ke(l),
                                    Le(l),
                                    Ce({})),
                                  t.length)
                                ) {
                                  const e = await F(l, (0, u.countDrafts)(t));
                                  (e && Ke(e), we(null));
                                }
                                Le(null);
                              },
                              (0, I.L)(
                                '\u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.',
                              ),
                            ));
                        },
                        children: (0, I.L)('\u0630\u062e\u06cc\u0631\u0647'),
                      }),
                    (0, k.jsx)(y.Button, {
                      testID: 'model-cell-close',
                      secondary: !0,
                      disabled: N,
                      onPress: () => Le(null),
                      children: (0, I.L)('\u0628\u0633\u062a\u0646'),
                    }),
                    (0, k.jsx)(s.default, {
                      testID: 'model-cell-details',
                      accessibilityRole: 'link',
                      disabled: N,
                      onPress: () => {
                        (Le(null), W(Ue));
                      },
                      style: {
                        minHeight: 44,
                        justifyContent: 'center',
                        alignSelf: 'center',
                      },
                      children: (0, k.jsx)(y.Copy, {
                        style: {
                          fontSize: 12,
                          color: U.accent,
                          textDecorationLine: 'underline',
                        },
                        children: (0, I.L)(
                          '\u062c\u0632\u0626\u06cc\u0627\u062a \u06a9\u0627\u0645\u0644',
                        ),
                      }),
                    }),
                  ],
                }),
              }),
            (0, k.jsxs)(j.Sheet, {
              visible: null !== Be,
              title: (0, I.L)('\u0646\u0627\u0645 \u0645\u062f\u0644'),
              onClose: () => {
                N || Te(null);
              },
              children: [
                (0, k.jsx)(y.Input, {
                  testID: 'model-rename-input',
                  accessibilityLabel: (0, I.L)(
                    '\u0646\u0627\u0645 \u0645\u062f\u0644',
                  ),
                  value: Be || '',
                  maxLength: 100,
                  editable: !N,
                  onChangeText: Te,
                }),
                (0, k.jsx)(y.Copy, {
                  style: { fontSize: 12, color: U.muted },
                  children: (0, I.L)(
                    '\u0646\u0627\u0645 \u0647\u0645\u0647\u0654 \u0633\u0627\u06cc\u0632\u0647\u0627 \u0648 \u0631\u0646\u06af\u200c\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0645\u062f\u0644 \u0639\u0648\u0636 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  ),
                }),
                !!ee &&
                  (0, k.jsx)(y.Copy, {
                    accessibilityRole: 'alert',
                    style: { color: U.danger },
                    children: ee,
                  }),
                (0, k.jsx)(y.Button, {
                  testID: 'model-rename-save',
                  disabled: N || !Be?.trim(),
                  onPress: async function () {
                    if (null === Be) return;
                    const e = Be;
                    let t = '';
                    (await Ye(
                      async () => {
                        const l = (0, m.renameModel)(J, e);
                        (await (0, m.saveModelChanges)(l, M, Ke),
                          Te(null),
                          (t = l[0]?.patch.model || ''));
                      },
                      (0, I.L)('\u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.'),
                    ),
                      t && q?.(t));
                  },
                  children: (0, I.L)('\u0630\u062e\u06cc\u0631\u0647'),
                }),
              ],
            }),
            (0, k.jsxs)(j.Sheet, {
              visible: De,
              title: (0, I.L)('\u0639\u06a9\u0633 \u0645\u062f\u0644'),
              onClose: () => {
                N || ke(!1);
              },
              children: [
                (0, k.jsx)(y.Button, {
                  testID: 'model-photo-camera',
                  disabled: N,
                  onPress: () => et(!0),
                  children: (0, I.L)(
                    '\u06af\u0631\u0641\u062a\u0646 \u0639\u06a9\u0633',
                  ),
                }),
                (0, k.jsx)(y.Button, {
                  testID: 'model-photo-gallery',
                  secondary: !0,
                  disabled: N,
                  onPress: () => et(!1),
                  children: (0, I.L)(
                    '\u0627\u0646\u062a\u062e\u0627\u0628 \u0627\u0632 \u06af\u0627\u0644\u0631\u06cc',
                  ),
                }),
                !!ee &&
                  (0, k.jsx)(y.Copy, {
                    accessibilityRole: 'alert',
                    style: { color: U.danger },
                    children: ee,
                  }),
              ],
            }),
            ze &&
              (0, k.jsx)(L.PhotoCropper, {
                source: ze,
                name: e.model,
                maxChars: 7e5,
                onCancel: () => Pe(null),
                onSave: async (e) => {
                  te('');
                  try {
                    (Ke(await M(Z[0], { photo: e })),
                      Pe(null),
                      se(
                        (0, I.L)(
                          '\u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.',
                        ),
                      ),
                      await O());
                  } catch (e) {
                    throw (Ne(e), e);
                  }
                },
              }),
          ],
        });
      }));
    var t = r(d[0]),
      l = r(d[1]),
      s = e(r(d[2])),
      n = e(r(d[3])),
      o = e(r(d[4])),
      i = e(r(d[5])),
      a = r(d[6]),
      c = r(d[7]),
      u = r(d[8]),
      h = r(d[9]),
      m = r(d[10]),
      y = r(d[11]),
      p = r(d[12]),
      x = r(d[13]),
      f = r(d[14]),
      j = r(d[15]),
      L = r(d[16]),
      b = r(d[17]),
      C = r(d[18]),
      S = r(d[19]),
      w = r(d[20]),
      I = r(d[21]),
      v = r(d[22]),
      D = r(d[23]),
      k = r(d[24]);
    const z = n.default.create({
      row: { flexDirection: 'row-reverse', alignItems: 'center', gap: 6 },
      head: { width: 56, alignItems: 'center', justifyContent: 'center' },
      block: { gap: 6 },
      box: {
        width: 72,
        minHeight: 50,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 3,
      },
      price: { fontSize: 10, lineHeight: 15, textAlign: 'center' },
      small: { fontSize: 12 },
      priceInput: {
        width: '100%',
        minHeight: 44,
        minWidth: 0,
        paddingHorizontal: 4,
        paddingVertical: 6,
        fontSize: 13,
        textAlign: 'center',
      },
      editBox: {
        width: '100%',
        gap: 4,
        padding: 6,
        borderWidth: 1,
        borderRadius: 12,
      },
      camera: {
        position: 'absolute',
        top: 4,
        right: 4,
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  },
  984,
  [
    614, 2, 232, 17, 240, 99, 380, 982, 717, 453, 817, 407, 628, 585, 385, 539,
    775, 634, 690, 382, 715, 311, 440, 435, 338,
  ],
);
