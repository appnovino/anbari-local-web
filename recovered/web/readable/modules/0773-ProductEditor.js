// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 773; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ProductEditor = function ({
        product: e,
        categories: i,
        onSave: _,
        onClose: T,
        onStock: E,
        businessType: R,
        canSeeBuyPrice: U = !0,
        canSeeSellPrice: N = !0,
        onArchiveAsNew: A,
        focusPrice: H = !1,
        inPage: M = !1,
      }) {
        const { colors: W } = (0, S.useTheme)(),
          B = 'IRT' !== (0, L.shownCurrency)(),
          V = (e) => (void 0 === e ? '' : String((0, L.tomanToInput)(e))),
          O = (0, n.useLayoutMode)(),
          X = e.id || 'new',
          [Q] = (0, t.useState)(() => w.take(X, O)),
          [K, q] = (0, t.useState)(
            () =>
              Q?.details ?? {
                ...e,
                unit: e.unit || 'piece',
                kind: e.kind || 'simple',
              },
          ),
          [G, J] = (0, t.useState)(() => Q?.price ?? V(e.price)),
          [Y, Z] = (0, t.useState)(() => Q?.costPrice ?? V(e.costPrice)),
          [$, ee] = (0, t.useState)(
            () => Q?.packSize ?? (e.packSize ? String(e.packSize) : ''),
          ),
          [te, ne] = (0, t.useState)(
            () =>
              Q?.contentSize ?? (e.contentSize ? String(e.contentSize) : ''),
          ),
          [ie, oe] = (0, t.useState)(!1),
          [ae, le] = (0, t.useState)(() => Q?.extra ?? !1),
          [se, re] = (0, t.useState)(!1),
          [ce, de] = (0, t.useState)(''),
          [ue, he] = (0, t.useState)(
            () =>
              Q?.tiers ??
              (e.salePrices || [])
                .slice(0, u.SALE_PRICES_MAX)
                .map((e, t) => ({
                  id: t + 1,
                  name: e.name,
                  price: V(e.price),
                  stored: e.price,
                })),
          ),
          [pe, me] = (0, t.useState)(0),
          xe = (0, t.useRef)(new Map());
        (0, t.useEffect)(() => {
          if (!pe) return;
          const e = setTimeout(() => xe.current.get(pe)?.focus(), 80);
          return () => clearTimeout(e);
        }, [pe]);
        const fe = (e) =>
            52 * (ue.length - 1 - e) +
            60 +
            (ue.length < u.SALE_PRICES_MAX ? 70 : 0),
          ge = (e, t, n) =>
            he((i) => i.map((i) => (i.id === e ? { ...i, [t]: n } : i))),
          ye = (e, t = e.length) => {
            const n = new Set(
              e
                .filter((e) => e.name.trim())
                .map((e) => (0, d.normalizeName)(e.name)),
            );
            let i = '';
            for (const o of [...e.slice(0, t), void 0]) {
              const e = u.DEFAULT_TIER_NAMES.find(
                (e) =>
                  !n.has((0, d.normalizeName)(e)) &&
                  !n.has((0, d.normalizeName)((0, z.L)(e))),
              );
              ((i = e ? (0, z.L)(e) : ''),
                o && !o.name.trim() && n.add((0, d.normalizeName)(i)));
            }
            return i;
          },
          je = (e) => ye(ue, e),
          be = (0, t.useRef)(Math.max(0, ...ue.map((e) => e.id)) + 1),
          [Se, Ie] = (0, t.useState)(null);
        (0, t.useEffect)(() => {
          w.put(X, O, {
            details: K,
            price: G,
            costPrice: Y,
            packSize: $,
            contentSize: te,
            extra: ae,
            tiers: ue,
          });
        });
        const ve = (e, t) => q((n) => ({ ...n, [e]: t }));
        async function Ce() {
          (oe(!0), de(''));
          try {
            const e = await (0, j.pickPhotoSource)();
            e && Ie(e);
          } catch (e) {
            de((0, v.errorText)(e));
          } finally {
            oe(!1);
          }
        }
        const Pe = (0, t.useRef)(!1);
        async function ke() {
          if (!Pe.current) {
            ((Pe.current = !0), oe(!0));
            try {
              const t = (e, t) => {
                  if (void 0 !== t && e === V(t)) return t;
                  const n = e;
                  return n && Number.isFinite(Number(n))
                    ? B
                      ? (0, L.inputToToman)(Number(n))
                      : Number(n)
                    : void 0;
                },
                n = ue.flatMap((e, n) => {
                  const i = t(e.price, e.stored);
                  return void 0 === i
                    ? []
                    : [{ name: e.name.trim() || je(n), price: i }];
                }),
                i = n.map((e) => (0, d.normalizeName)(e.name));
              if (
                N &&
                (new Set(i).size < i.length ||
                  i.some(
                    (e) =>
                      e ===
                        (0, d.normalizeName)(
                          '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                        ) ||
                      e ===
                        (0, d.normalizeName)(
                          (0, z.L)(
                            '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                          ),
                        ),
                  ))
              )
                return void de(
                  (0, z.L)(
                    '\u0646\u0627\u0645 \u062f\u0648 \u0642\u06cc\u0645\u062a \u06cc\u06a9\u06cc \u0627\u0633\u062a\u061b \u06cc\u06a9\u06cc \u0631\u0627 \u0639\u0648\u0636 \u06a9\u0646.',
                  ),
                );
              await _({
                ...K,
                ...((0, P.isCountUnit)(K.unit) && te
                  ? {
                      contentSize: (0, k.parseQuantity)(te),
                      contentUnit: K.contentUnit || 'l',
                    }
                  : { contentSize: void 0, contentUnit: void 0 }),
                ...(N
                  ? { price: t(G, e.price), salePrices: n, salePricesAll: !0 }
                  : { salePrices: void 0 }),
                ...(U ? { costPrice: t(Y, e.costPrice) } : {}),
                ...($
                  ? {
                      packSize: (0, k.parseQuantity)($),
                      packUnit: K.packUnit || 'carton',
                    }
                  : { packSize: void 0, packUnit: void 0 }),
              });
            } catch (e) {
              e instanceof Error && 'kind_change_blocked' === e.message
                ? (re(!0), de(D.notebookFa.kindBlocked))
                : e instanceof Error && 'unit_change_blocked' === e.message
                  ? de(
                      (0, z.L)(
                        '\u0648\u0627\u062d\u062f \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u062f\u06cc\u06af\u0631 \u0639\u0648\u0636 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0686\u0648\u0646 \u0628\u0631\u0627\u06cc\u0634 \u0645\u0648\u062c\u0648\u062f\u06cc \u06cc\u0627 \u0648\u0631\u0648\u062f \u0648 \u0641\u0631\u0648\u0634 \u062b\u0628\u062a \u0634\u062f\u0647 \u0627\u0633\u062a\u061b \u0639\u062f\u062f\u0647\u0627\u06cc \u0642\u0628\u0644\u06cc \u0628\u0627 \u0648\u0627\u062d\u062f \u062a\u0627\u0632\u0647 \u0627\u0634\u062a\u0628\u0627\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f. \u0627\u06af\u0631 \u0648\u0627\u062d\u062f \u062f\u06cc\u06af\u0631\u06cc \u0644\u0627\u0632\u0645 \u0627\u0633\u062a\u060c \u06a9\u0627\u0644\u0627\u06cc \u062a\u0627\u0632\u0647\u200c\u0627\u06cc \u0628\u0627 \u0647\u0645\u0627\u0646 \u0648\u0627\u062d\u062f \u0628\u0633\u0627\u0632.',
                      ),
                    )
                  : de((0, v.errorText)(e));
            } finally {
              ((Pe.current = !1), oe(!1));
            }
          }
        }
        const De = N || U,
          ze = 'maker' === R || 'both' === R;
        return (0, F.jsxs)(s.default, {
          style: { flexShrink: 1, gap: 10 },
          children: [
            !M &&
              (0, F.jsx)(h.Copy, {
                style: [h.common.title, { fontSize: 20, lineHeight: 30 }],
                children: e.id ? I.fa.productDetails : I.fa.newProduct,
              }),
            (0, F.jsxs)(c.KeyboardScrollView, {
              keyboardShouldPersistTaps: 'handled',
              style: { flexShrink: 1 },
              contentContainerStyle: { gap: 12, paddingBottom: 8 },
              children: [
                (0, F.jsxs)(p.FormCard, {
                  testID: 'product-basics',
                  children: [
                    (0, F.jsxs)(s.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'flex-start',
                        gap: 12,
                      },
                      children: [
                        (0, F.jsxs)(s.default, {
                          style: { width: 84, gap: 4, alignItems: 'center' },
                          children: [
                            (0, F.jsxs)(o.default, {
                              testID: 'catalog-photo',
                              accessibilityRole: 'button',
                              accessibilityLabel: I.fa.choosePhoto,
                              disabled: ie,
                              onPress: () => {
                                Ce();
                              },
                              style: ({ pressed: e }) => ({
                                width: 84,
                                height: 84,
                                borderRadius: 16,
                                overflow: 'hidden',
                                borderWidth: l.default.hairlineWidth,
                                borderColor: W.line,
                                opacity: ie ? 0.5 : e ? 0.85 : 1,
                              }),
                              children: [
                                (0, F.jsx)(f.ProductPhoto, {
                                  product: K,
                                  height: 84,
                                }),
                                (0, F.jsx)(s.default, {
                                  pointerEvents: 'none',
                                  style: {
                                    position: 'absolute',
                                    left: 5,
                                    bottom: 5,
                                    width: 28,
                                    height: 28,
                                    borderRadius: 14,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: W.accent,
                                    borderWidth: 2,
                                    borderColor: W.surface,
                                  },
                                  children: (0, F.jsx)(x.Icon, {
                                    name: 'camera',
                                    size: 14,
                                    color: W.onAccent,
                                  }),
                                }),
                              ],
                            }),
                            K.photo
                              ? (0, F.jsx)(o.default, {
                                  testID: 'catalog-photo-remove',
                                  accessibilityRole: 'button',
                                  hitSlop: 6,
                                  onPress: () => ve('photo', ''),
                                  children: (0, F.jsx)(h.Copy, {
                                    style: {
                                      fontSize: 12,
                                      lineHeight: 19,
                                      color: W.danger,
                                    },
                                    children: I.fa.removePhoto,
                                  }),
                                })
                              : (0, F.jsx)(h.Copy, {
                                  numberOfLines: 1,
                                  style: {
                                    fontSize: 11,
                                    lineHeight: 18,
                                    color: W.muted,
                                  },
                                  children: I.fa.choosePhoto,
                                }),
                          ],
                        }),
                        (0, F.jsx)(p.Field, {
                          label: I.fa.productName,
                          style: { flex: 1, minWidth: 0 },
                          children: (0, F.jsx)(h.Input, {
                            testID: 'catalog-name',
                            value: K.name,
                            maxLength: 100,
                            onChangeText: (e) => ve('name', e),
                          }),
                        }),
                      ],
                    }),
                    (0, F.jsxs)(p.Field, {
                      label: I.fa.category,
                      children: [
                        (0, F.jsx)(h.Input, {
                          testID: 'catalog-category',
                          value: K.category || '',
                          maxLength: 60,
                          onChangeText: (e) => ve('category', e),
                          placeholder: I.fa.categoryPlaceholder,
                        }),
                        i.length > 0 &&
                          (0, F.jsx)(s.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              flexWrap: 'wrap',
                              gap: 6,
                              paddingTop: 2,
                            },
                            children: i.map((e) =>
                              (0, F.jsx)(
                                p.Pill,
                                {
                                  label: e,
                                  active: K.category === e,
                                  onPress: () => ve('category', e),
                                },
                                e,
                              ),
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
                (0, F.jsxs)(p.FormCard, {
                  testID: 'product-units',
                  children: [
                    (0, F.jsx)(p.Field, {
                      label: D.notebookFa.unit,
                      children: (0, F.jsx)(C.UnitInput, {
                        value: '',
                        onChange: () => {},
                        unit: K.unit || 'piece',
                        onUnitChange: (e) => q((t) => ({ ...t, unit: e })),
                        selectorOnly: !0,
                      }),
                    }),
                    (0, P.isCountUnit)(K.unit) &&
                      (0, F.jsx)(p.Field, {
                        testID: 'product-content',
                        label: (0, z.L)(
                          '\u0647\u0631 {unit} \u0686\u0642\u062f\u0631\u0647\u061f',
                          { unit: (0, y.unitName)(K.unit) },
                        ),
                        hint: (0, z.L)(
                          '\u0628\u0631\u0627\u06cc \u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a\u061b \u0645\u062b\u0644\u0627\u064b \u0634\u06cc\u0631 \u06f1\u066b\u06f5 \u0644\u06cc\u062a\u0631',
                        ),
                        children: (0, F.jsx)(C.UnitInput, {
                          testID: 'product-content-size',
                          value: te,
                          onChange: ne,
                          unit: K.contentUnit || 'l',
                          allowedUnits: P.CONTENT_UNITS,
                          onUnitChange: (e) =>
                            q((t) => ({ ...t, contentUnit: e })),
                        }),
                      }),
                    ze &&
                      (0, F.jsxs)(s.default, {
                        style: { flexDirection: 'row-reverse', gap: 8 },
                        children: [
                          (0, F.jsx)(p.Pill, {
                            label: D.notebookFa.simpleProduct,
                            active: 'simple' === K.kind,
                            onPress: () => q((e) => ({ ...e, kind: 'simple' })),
                          }),
                          (0, F.jsx)(p.Pill, {
                            label: D.notebookFa.madeProduct,
                            active: 'made' === K.kind,
                            onPress: () => q((e) => ({ ...e, kind: 'made' })),
                          }),
                        ],
                      }),
                  ],
                }),
                De &&
                  (0, F.jsxs)(p.FormCard, {
                    testID: 'product-prices',
                    children: [
                      (0, F.jsxs)(s.default, {
                        style: { flexDirection: 'row-reverse', gap: 10 },
                        children: [
                          N &&
                            (0, F.jsx)(p.Field, {
                              label: ue.length
                                ? (0, z.L)(
                                    '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 (\u067e\u06cc\u0634\u200c\u0641\u0631\u0636)',
                                  )
                                : (0, z.L)(
                                    '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                                  ),
                              style: { flex: 1, minWidth: 0 },
                              children: (0, F.jsx)(C.MoneyInput, {
                                shown: !0,
                                decimals: (0, L.moneyDecimals)(),
                                testID: 'catalog-price',
                                autoFocus:
                                  'price' === H ||
                                  (!0 === H && void 0 === e.price),
                                value: G,
                                onChange: J,
                              }),
                            }),
                          U &&
                            (0, F.jsx)(p.Field, {
                              label: (0, z.L)(
                                '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                              ),
                              style: { flex: 1, minWidth: 0 },
                              children: (0, F.jsx)(C.MoneyInput, {
                                shown: !0,
                                decimals: (0, L.moneyDecimals)(),
                                testID: 'catalog-cost',
                                autoFocus:
                                  'cost' === H ||
                                  (!0 === H && void 0 !== e.price),
                                value: Y,
                                onChange: Z,
                              }),
                            }),
                        ],
                      }),
                      N &&
                        ue.length > 0 &&
                        (0, F.jsxs)(s.default, {
                          testID: 'catalog-tiers',
                          style: { gap: 8 },
                          children: [
                            ue.map((e, t) =>
                              (0, F.jsxs)(
                                s.default,
                                {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 6,
                                  },
                                  children: [
                                    (0, F.jsx)(h.Input, {
                                      testID: 'catalog-tier-name-' + (t + 1),
                                      onFocus: () => (0, c.revealRoom)(fe(t)),
                                      value: e.name,
                                      maxLength: 30,
                                      placeholder: je(t),
                                      onChangeText: (t) => ge(e.id, 'name', t),
                                      style: {
                                        flex: 1,
                                        minWidth: 0,
                                        paddingHorizontal: 10,
                                      },
                                    }),
                                    (0, F.jsx)(s.default, {
                                      style: { flex: 1.15, minWidth: 0 },
                                      children: (0, F.jsx)(C.MoneyInput, {
                                        shown: !0,
                                        decimals: (0, L.moneyDecimals)(),
                                        suffix: null,
                                        testID: 'catalog-tier-price-' + (t + 1),
                                        onFocus: () => (0, c.revealRoom)(fe(t)),
                                        ref: (t) => {
                                          t
                                            ? xe.current.set(e.id, t)
                                            : xe.current.delete(e.id);
                                        },
                                        value: e.price,
                                        onChange: (t) => ge(e.id, 'price', t),
                                      }),
                                    }),
                                    (0, F.jsx)(o.default, {
                                      testID: 'catalog-tier-remove-' + (t + 1),
                                      accessibilityRole: 'button',
                                      accessibilityLabel:
                                        (0, z.L)(
                                          '\u062d\u0630\u0641 \u0627\u06cc\u0646 \u0642\u06cc\u0645\u062a',
                                        ) +
                                        '\u060c ' +
                                        (e.name.trim() || je(t)),
                                      hitSlop: 6,
                                      onPress: () =>
                                        he((t) =>
                                          t.filter((t) => t.id !== e.id),
                                        ),
                                      style: ({ pressed: e }) => ({
                                        width: 32,
                                        height: 44,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: e ? 0.5 : 1,
                                      }),
                                      children: (0, F.jsx)(x.Icon, {
                                        name: 'close',
                                        size: 16,
                                        color: W.muted,
                                      }),
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                            (0, F.jsx)(s.default, {
                              testID: 'catalog-tier-hint',
                              children: (0, F.jsx)(p.FieldHint, {
                                children: (0, z.L)(
                                  '\u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u0633\u06cc\u0633\u062a\u0645 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0627\u0633\u062a\u061b \u0642\u06cc\u0645\u062a\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631 \u0641\u0642\u0637 \u0647\u0646\u06af\u0627\u0645 \u0635\u062f\u0648\u0631 \u0641\u0627\u06a9\u062a\u0648\u0631 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
                                ),
                              }),
                            }),
                          ],
                        }),
                      N &&
                        (ue.length < u.SALE_PRICES_MAX
                          ? (0, F.jsxs)(o.default, {
                              testID: 'catalog-price-more',
                              accessibilityRole: 'button',
                              accessibilityLabel: (0, z.L)(
                                '\u0627\u0641\u0632\u0648\u062f\u0646 \u0642\u06cc\u0645\u062a \u062f\u06cc\u06af\u0631',
                              ),
                              onPress: () => {
                                const e = be.current++;
                                (he((t) =>
                                  t.length >= u.SALE_PRICES_MAX
                                    ? t
                                    : [...t, { id: e, name: ye(t), price: '' }],
                                ),
                                  me(e));
                              },
                              style: ({ pressed: e }) => ({
                                minHeight: 46,
                                borderRadius: 14,
                                borderWidth: 1,
                                borderColor: W.accent,
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 8,
                                paddingHorizontal: 14,
                                backgroundColor: e
                                  ? W.accentSoft
                                  : 'transparent',
                              }),
                              children: [
                                (0, F.jsx)(x.Icon, {
                                  name: 'plus',
                                  size: 18,
                                  color: W.accent,
                                }),
                                (0, F.jsx)(h.Copy, {
                                  style: {
                                    fontSize: 15,
                                    lineHeight: 24,
                                    color: W.accent,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: (0, z.L)(
                                    '\u0627\u0641\u0632\u0648\u062f\u0646 \u0642\u06cc\u0645\u062a \u062f\u06cc\u06af\u0631',
                                  ),
                                }),
                              ],
                            })
                          : (0, F.jsx)(s.default, {
                              testID: 'catalog-price-max',
                              children: (0, F.jsx)(p.FieldHint, {
                                children: (0, z.L)(
                                  '\u0647\u0631 \u06a9\u0627\u0644\u0627 \u062d\u062f\u0627\u06a9\u062b\u0631 {n} \u0642\u06cc\u0645\u062a \u062f\u0627\u0631\u062f.',
                                  {
                                    n: (0, z.localDigits)(
                                      u.SALE_PRICES_MAX + 1,
                                    ),
                                  },
                                ),
                              }),
                            })),
                    ],
                  }),
                (0, F.jsxs)(p.FormCard, {
                  style: { paddingVertical: ae ? 14 : 6, gap: 12 },
                  children: [
                    (0, F.jsx)(p.MoreToggle, {
                      testID: 'product-extra',
                      label: I.fa.extraDetails,
                      open: ae,
                      onPress: () => le((e) => !e),
                    }),
                    ae &&
                      (0, F.jsxs)(s.default, {
                        style: { gap: 14 },
                        children: [
                          (0, F.jsx)(s.default, {
                            style: { flexDirection: 'row-reverse', gap: 8 },
                            children: ['brand', 'size', 'color'].map((e) =>
                              (0, F.jsx)(
                                p.Field,
                                {
                                  label:
                                    'brand' === e ? I.fa.productBrand : I.fa[e],
                                  style: { flex: 1, minWidth: 0 },
                                  children: (0, F.jsx)(h.Input, {
                                    testID: 'catalog-' + e,
                                    value: K[e] || '',
                                    maxLength: 60,
                                    onChangeText: (t) => ve(e, t),
                                    style: { paddingHorizontal: 10 },
                                  }),
                                },
                                e,
                              ),
                            ),
                          }),
                          (0, F.jsx)(p.Field, {
                            label: (0, z.L)(
                              '\u0645\u062f\u0644\u060c \u0628\u0631\u0627\u06cc \u06af\u0631\u0648\u0647 \u0633\u0627\u06cc\u0632 \u0648 \u0631\u0646\u06af',
                            ),
                            hint: (0, z.L)(
                              '\u0647\u0645\u0647 \u0633\u0627\u06cc\u0632\u0647\u0627 \u0648 \u0631\u0646\u06af\u200c\u0647\u0627\u06cc \u06cc\u06a9 \u0645\u062f\u0644\u060c \u06cc\u06a9 \u0646\u0627\u0645 \u0645\u062f\u0644 \u062f\u0627\u0631\u0646\u062f \u0648 \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u06cc\u06a9 \u06a9\u0627\u0631\u062a \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
                            ),
                            children: (0, F.jsx)(h.Input, {
                              testID: 'catalog-model',
                              value: K.model || '',
                              maxLength: 100,
                              onChangeText: (e) => ve('model', e),
                              placeholder: (0, z.L)(
                                '\u0645\u062b\u0644\u0627\u064b \u06a9\u0641\u0634 Nike Hyper X',
                              ),
                            }),
                          }),
                          (0, F.jsx)(p.Field, {
                            testID: 'product-pack',
                            label: D.notebookFa.pack,
                            children: (0, F.jsxs)(s.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                gap: 8,
                              },
                              children: [
                                (0, F.jsx)(s.default, {
                                  style: { flex: 1, minWidth: 0 },
                                  children: (0, F.jsx)(C.QuantityInput, {
                                    value: $,
                                    onChange: ee,
                                    placeholder: (0, z.localDigits)(
                                      '\u06f1\u06f2',
                                    ),
                                  }),
                                }),
                                (0, F.jsx)(s.default, {
                                  style: { flex: 1, minWidth: 0 },
                                  children: (0, F.jsx)(C.UnitInput, {
                                    value: '',
                                    onChange: () => {},
                                    unit: K.packUnit || 'carton',
                                    onUnitChange: (e) =>
                                      q((t) => ({ ...t, packUnit: e })),
                                    selectorOnly: !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, F.jsx)(p.Field, {
                            label: I.fa.barcode,
                            children: (0, F.jsx)(h.Input, {
                              value: K.barcode || '',
                              maxLength: 128,
                              onChangeText: (e) => ve('barcode', e),
                            }),
                          }),
                          (0, F.jsx)(p.Field, {
                            label: I.fa.details,
                            children: (0, F.jsx)(h.Input, {
                              value: K.detail,
                              maxLength: 200,
                              multiline: !0,
                              onChangeText: (e) => ve('detail', e),
                              style: {
                                minHeight: 72,
                                textAlignVertical: 'top',
                              },
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
                (0, F.jsxs)(s.default, {
                  testID: 'product-stock-line',
                  style: { gap: 4, paddingHorizontal: 4 },
                  children: [
                    (0, F.jsxs)(s.default, {
                      style: [h.common.between, { flexWrap: 'wrap' }],
                      children: [
                        (0, F.jsxs)(h.Copy, {
                          style: { fontFamily: 'Vazirmatn_600SemiBold' },
                          children: [
                            I.fa.stock,
                            ': ',
                            (0, y.stockLabel)(e.stock, (0, y.unitName)(e.unit)),
                          ],
                        }),
                        !!e.id &&
                          (0, F.jsx)(o.default, {
                            accessibilityRole: 'button',
                            onPress: E,
                            style: ({ pressed: e }) => ({
                              minHeight: 36,
                              paddingHorizontal: 14,
                              borderRadius: 999,
                              justifyContent: 'center',
                              borderWidth: 1,
                              borderColor: W.accent,
                              backgroundColor: e ? W.accentSoft : 'transparent',
                            }),
                            children: (0, F.jsx)(h.Copy, {
                              style: {
                                fontSize: 14,
                                lineHeight: 22,
                                color: W.accent,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: I.fa.changeStock,
                            }),
                          }),
                      ],
                    }),
                    (0, F.jsx)(p.FieldHint, {
                      children: I.fa.stockMovementOnly,
                    }),
                  ],
                }),
              ],
            }),
            !!ce && (0, F.jsx)(p.FormError, { children: ce }),
            se &&
              A &&
              (0, F.jsx)(h.Button, {
                secondary: !0,
                onPress: A,
                children: D.notebookFa.archiveCreate,
              }),
            M
              ? (0, F.jsx)(h.Button, {
                  testID: 'catalog-save',
                  disabled: ie,
                  onPress: ke,
                  children: I.fa.saveProduct,
                })
              : (0, F.jsxs)(s.default, {
                  style: h.common.row,
                  children: [
                    (0, F.jsx)(s.default, {
                      style: { flex: 2 },
                      children: (0, F.jsx)(h.Button, {
                        testID: 'catalog-save',
                        disabled: ie,
                        onPress: ke,
                        children: I.fa.saveProduct,
                      }),
                    }),
                    (0, F.jsx)(s.default, {
                      style: h.common.flex,
                      children: (0, F.jsx)(h.Button, {
                        secondary: !0,
                        onPress: T,
                        children: I.fa.cancelVoice,
                      }),
                    }),
                  ],
                }),
            Se &&
              (0, F.jsx)(
                b.PhotoCropper,
                {
                  source: Se,
                  name: K.name,
                  onCancel: () => Ie(null),
                  onSave: (e) => {
                    (ve('photo', e), Ie(null));
                  },
                },
                Se.uri,
              ),
          ],
        });
      }));
    var t = r(_d[0]),
      n = r(_d[1]),
      i = r(_d[2]),
      o = e(r(_d[3])),
      l = e(r(_d[4])),
      s = e(r(_d[5])),
      c = r(_d[6]),
      d = r(_d[7]),
      u = r(_d[8]),
      h = r(_d[9]),
      p = r(_d[10]),
      x = r(_d[11]),
      f = r(_d[12]),
      y = r(_d[13]),
      j = r(_d[14]),
      b = r(_d[15]),
      S = r(_d[16]),
      I = r(_d[17]),
      v = r(_d[18]),
      C = r(_d[19]),
      P = r(_d[20]),
      k = r(_d[21]),
      D = r(_d[22]),
      z = r(_d[23]),
      L = r(_d[24]),
      F = r(_d[25]);
    const w = (0, i.layoutCarry)();
  },
  773,
  [
    2, 481, 482, 232, 17, 99, 480, 439, 441, 407, 774, 385, 628, 585, 634, 775,
    382, 492, 690, 614, 432, 431, 580, 311, 435, 338,
  ],
);
