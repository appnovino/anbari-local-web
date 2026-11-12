// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 977; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.RecipeEditor = function ({
        shop: e,
        product: D,
        products: k,
        onClose: z,
        onSaved: _,
        closeOnSave: U = !1,
      }) {
        const [P] = (0, n.useState)(() => k.map((e) => ({ ...e }))),
          { colors: F } = (0, f.useTheme)(),
          [N, R] = (0, n.useState)(D.version || 1),
          [W, q] = (0, n.useState)([]),
          [B, E] = (0, n.useState)(!D.id),
          [T, H] = (0, n.useState)(''),
          [M, Q] = (0, n.useState)(!1),
          [A, O] = (0, n.useState)(null),
          [V, G] = (0, n.useState)({}),
          [Y, J] = (0, n.useState)([]),
          [K, X] = (0, n.useState)(D.name || ''),
          [Z, $] = (0, n.useState)(''),
          [ee, te] = (0, n.useState)(D.id),
          [ne, ie] = (0, n.useState)([]),
          [oe, se] = (0, n.useState)(!1),
          [re, le] = (0, n.useState)('1'),
          [ae, ce] = (0, n.useState)(String(m.DEFAULT_MARGIN)),
          de = !D.id;
        function ue(e) {
          (R(e.version),
            le(String(e.recipeYield || 1)),
            E(
              Object.prototype.hasOwnProperty.call(e, 'extraCosts') ||
                (e.items.length > 0 &&
                  e.items.every((e) =>
                    Object.prototype.hasOwnProperty.call(e, 'avgCost'),
                  )),
            ),
            e.extraCosts &&
              J(
                e.extraCosts.map((e) => ({
                  label: e.label,
                  amount: String(e.amount),
                })),
              ),
            q(e.items.map((e) => ({ ...e, quantity: String(e.quantity) }))));
        }
        async function me() {
          ue(await (0, j.getRecipe)(e, D.id));
        }
        (0, n.useEffect)(() => {
          D.id && me().catch((e) => H((0, x.message)(e)));
        }, [e.id, D.id]);
        const ye = [...P, ...ne]
            .filter((e) => 'made' !== e.kind && e.id !== D.id && !e.archivedAt)
            .map((e) => V[e.id] || e),
          pe = (e) => ye.find((t) => t.id === e.ingredientId),
          he = (e) => {
            const t = pe(e);
            return (0, u.recipeStockQuantity)(
              { quantity: (0, l.parseQuantity)(e.quantity), unit: e.unit },
              t || { unit: e.stockUnit || 'piece' },
            );
          },
          ge = (e) => {
            const t = pe(e);
            return e.avgCost ?? t?.avgCost ?? t?.costPrice;
          },
          fe = (e) => {
            const t = ge(e);
            if (void 0 !== t && e.ingredientId)
              try {
                return he(e) * t;
              } catch {
                return;
              }
          };
        let xe = 1;
        try {
          xe = (0, l.parseQuantity)(re);
        } catch {
          xe = 1;
        }
        const je = (0, n.useMemo)(() => {
            const e = W.filter((e) => e.ingredientId),
              t = e.filter((e) => void 0 === ge(e)).map((e) => e.name),
              n = e.reduce((e, t) => e + (fe(t) || 0), 0) / xe,
              i = Y.reduce((e, t) => e + (Number(t.amount) || 0), 0);
            return { materials: n, other: i, total: n + i, missing: t };
          }, [W, Y, k, V, ne, xe]),
          be = de ? (Z ? Number(Z) : void 0) : D.price,
          Ce = void 0 === be || je.missing.length ? void 0 : be - je.total,
          Ie = je.missing.length ? void 0 : (0, m.profitPercent)(be, je.total),
          Le = Number(ae),
          Se = je.missing.length
            ? void 0
            : (0, m.suggestedPrice)(
                je.total,
                Number.isFinite(Le) ? Le : m.DEFAULT_MARGIN,
              );
        function ve(e, t) {
          (se(!1), q((n) => n.map((n, i) => (i === e ? { ...n, ...t } : n))));
        }
        function we(e, t) {
          (se(!1), J((n) => n.map((n, i) => (i === e ? { ...n, ...t } : n))));
        }
        function De(e, t) {
          const n = t.unit || 'piece',
            i = w(n);
          ve(e, {
            ingredientId: t.id,
            name: t.name,
            stockUnit: n,
            unit: i === n ? void 0 : i,
            avgCost: void 0,
            contentInput: '',
            creating: !1,
            quantity: '',
          });
        }
        async function ke(t) {
          const n = W[t],
            i = n.newUnit || 'piece',
            o = n.newCost ? Number(n.newCost) : void 0;
          (H(''), O('new-' + t));
          try {
            const s = (0, x.randomUUID)();
            await (0, j.createProduct)(
              e,
              s,
              {
                name: n.name.trim(),
                kind: 'simple',
                unit: i,
                ...(void 0 !== o ? { costPrice: o } : {}),
              },
              (0, x.randomUUID)(),
            );
            const r = {
              id: s,
              name: n.name.trim(),
              detail: '',
              stock: 0,
              unit: i,
              kind: 'simple',
              version: 1,
              ...(void 0 !== o ? { costPrice: o } : {}),
            };
            (ie((e) => [...e, r]), De(t, r), _?.());
          } catch (e) {
            H((0, x.message)(e));
          } finally {
            O(null);
          }
        }
        async function ze(t) {
          if (t.ingredientId && t.unit) {
            (H(''), O(t.ingredientId));
            try {
              const n = (0, l.parseQuantity)(t.contentInput || ''),
                i = pe(t);
              if (!i?.version) throw Error('version_conflict');
              const o = await (0, j.putProductContent)(
                e,
                i.id,
                i.version,
                n,
                t.unit,
              );
              (G((e) => ({
                ...e,
                [i.id]: {
                  ...i,
                  version: o.version,
                  contentSize: n,
                  contentUnit: t.unit,
                },
              })),
                _?.());
            } catch (e) {
              H((0, x.message)(e));
            } finally {
              O(null);
            }
          }
        }
        async function Ue() {
          try {
            if ((H(''), se(!1), W.length > 30)) throw Error('recipe_limit');
            if (de && !K.trim()) throw Error('recipe_name');
            const t = W.filter((e) => e.ingredientId || e.name.trim()),
              n = t.find((e) => !e.ingredientId);
            if (n) throw Error('recipe_pick:' + n.name.trim());
            const i = t.map((e) => {
                try {
                  (0, l.parseQuantity)(e.quantity);
                } catch {
                  throw Error('recipe_amount:' + e.name);
                }
                return (
                  he(e),
                  {
                    ingredientId: e.ingredientId || '',
                    quantity: (0, l.parseQuantity)(e.quantity),
                    ...(e.unit ? { unit: e.unit } : {}),
                  }
                );
              }),
              o = B
                ? Y.filter((e) => e.label.trim() || e.amount).map((e) => {
                    if (!e.label.trim()) throw Error('recipe_cost_label');
                    return {
                      label: e.label.trim().slice(0, 40),
                      amount: Number(e.amount) || 0,
                    };
                  })
                : void 0;
            Q(!0);
            let s = ee,
              r = N;
            if (
              (s ||
                ((s = (0, x.randomUUID)()),
                await (0, j.createProduct)(
                  e,
                  s,
                  {
                    name: K.trim(),
                    kind: 'made',
                    unit: 'piece',
                    ...(void 0 !== be ? { price: be } : {}),
                  },
                  (0, x.randomUUID)(),
                ),
                te(s),
                (r = (await (0, j.getRecipe)(e, s)).version),
                R(r)),
              !(xe > 0) || xe > 1e5)
            )
              throw Error('recipe_yield');
            (ue(await (0, j.putRecipe)(e, s, r, i, (0, x.randomUUID)(), o, xe)),
              _?.(),
              se(!0),
              U && z());
          } catch (e) {
            const t = e instanceof Error ? e.message : '',
              [n, i] = t.split(':');
            if (
              e instanceof x.ApiError &&
              [
                'version_conflict',
                'policy_conflict',
                'hidden_by_owner',
                'forbidden',
              ].includes(t) &&
              ee
            )
              try {
                (await me(), H(C.notebookW5Fa.updatedRetry));
              } catch (e) {
                H((0, x.message)(e));
              }
            else
              H(
                'invalid_recipe' === t
                  ? C.notebookW5Fa.recipeInvalid
                  : 'recipe_limit' === t
                    ? C.notebookW5Fa.recipeLimit
                    : 'recipe_name' === n
                      ? (0, I.L)(
                          '\u0627\u0633\u0645 \u0645\u062d\u0635\u0648\u0644 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
                        )
                      : 'recipe_pick' === n
                        ? (0, I.L)(
                            '\xab{name}\xbb \u0631\u0627 \u0627\u0632 \u0641\u0647\u0631\u0633\u062a \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646 \u06cc\u0627 \u0628\u0647 \u0627\u0646\u0628\u0627\u0631 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646.',
                            { name: i || '' },
                          )
                        : 'recipe_amount' === n
                          ? (0, I.L)(
                              '\u0645\u0642\u062f\u0627\u0631 \xab{name}\xbb \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
                              { name: i || '' },
                            )
                          : 'recipe_cost_label' === n
                            ? (0, I.L)(
                                '\u0628\u0631\u0627\u06cc \u0647\u0631 \u0647\u0632\u06cc\u0646\u0647 \u06cc\u06a9 \u0627\u0633\u0645 \u0628\u0646\u0648\u06cc\u0633\u060c \u0645\u062b\u0644\u0627\u064b \xab\u0645\u0627\u0644\u06cc\u0627\u062a\xbb.',
                              )
                            : 'recipe_yield' === n
                              ? (0, I.L)(
                                  '\u0628\u0646\u0648\u06cc\u0633 \u0627\u06cc\u0646 \u062f\u0633\u062a\u0648\u0631 \u0628\u0631\u0627\u06cc \u0686\u0646\u062f \u0639\u062f\u062f \u0627\u0633\u062a.',
                                )
                              : (0, x.message)(e),
              );
          } finally {
            Q(!1);
          }
        }
        const Pe = (e) => ({
            minHeight: 36,
            paddingHorizontal: 14,
            borderRadius: 18,
            borderWidth: 1,
            borderColor: e ? F.accent : F.line,
            backgroundColor: e ? F.accentSoft : F.surface,
            alignItems: 'center',
            justifyContent: 'center',
          }),
          Fe = { fontSize: 16, fontFamily: 'Vazirmatn_700Bold' };
        return (0, L.jsxs)(s.ScrollView, {
          testID: 'recipe-editor',
          keyboardShouldPersistTaps: 'handled',
          contentContainerStyle: {
            gap: 12,
            paddingBottom: 24,
            width: '100%',
            maxWidth: 720,
            alignSelf: 'center',
          },
          children: [
            (0, L.jsxs)(o.default, {
              style: h.common.between,
              children: [
                (0, L.jsxs)(o.default, {
                  style: { flex: 1, gap: 2 },
                  children: [
                    (0, L.jsx)(h.Copy, {
                      style: h.common.title,
                      children: de
                        ? (0, I.L)(
                            '\u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a \u062c\u062f\u06cc\u062f',
                          )
                        : D.name,
                    }),
                    (0, L.jsx)(h.Copy, {
                      style: { color: F.muted, fontSize: 13 },
                      children: de
                        ? (0, I.L)(
                            '\u0627\u0633\u0645\u060c \u0645\u0648\u0627\u062f \u0644\u0627\u0632\u0645 \u0648 \u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
                          )
                        : C.notebookW5Fa.recipe,
                    }),
                  ],
                }),
                (0, L.jsx)(h.Button, {
                  secondary: !0,
                  onPress: z,
                  children: C.notebookW5Fa.close,
                }),
              ],
            }),
            de &&
              (0, L.jsxs)(h.Card, {
                style: { gap: 10 },
                children: [
                  (0, L.jsx)(h.Copy, {
                    style: Fe,
                    children: (0, I.L)(
                      '\u0627\u0633\u0645\u0634 \u0686\u06cc\u0647\u061f',
                    ),
                  }),
                  (0, L.jsx)(h.Input, {
                    testID: 'recipe-name',
                    value: K,
                    onChangeText: (e) => {
                      (se(!1), X(e));
                    },
                    placeholder: (0, I.L)(
                      '\u0645\u062b\u0644\u0627\u064b \u0634\u0645\u0639 \u0648\u0627\u0646\u06cc\u0644\u06cc',
                    ),
                    maxLength: 100,
                    autoFocus: !0,
                  }),
                  (0, L.jsx)(h.Copy, {
                    style: { fontSize: 13, color: F.muted },
                    children: (0, I.L)(
                      '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0647\u0631 \u0639\u062f\u062f (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                    ),
                  }),
                  (0, L.jsx)(b.MoneyInput, {
                    testID: 'recipe-price',
                    value: Z,
                    onChange: (e) => {
                      (se(!1), $(e));
                    },
                  }),
                ],
              }),
            (0, L.jsxs)(h.Card, {
              style: { gap: 10 },
              children: [
                (0, L.jsxs)(o.default, {
                  style: { gap: 2 },
                  children: [
                    (0, L.jsx)(h.Copy, {
                      style: Fe,
                      children: (0, I.L)(
                        '\u0645\u0648\u0627\u062f \u0644\u0627\u0632\u0645',
                      ),
                    }),
                    (0, L.jsx)(h.Copy, {
                      style: { fontSize: 12, color: F.muted },
                      children:
                        1 === xe
                          ? (0, I.L)(
                              '\u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a \u06f1 \u0639\u062f\u062f. \u0645\u062b\u0644\u0627\u064b \u0634\u0645\u0639: \u06f2\u06f0\u06f0 \u06af\u0631\u0645 \u067e\u0627\u0631\u0627\u0641\u06cc\u0646 \u0648 \u06f1 \u0641\u062a\u06cc\u0644\u0647\u061b \u063a\u0630\u0627: \u06f2\u06f5\u06f0 \u06af\u0631\u0645 \u0628\u0631\u0646\u062c \u0648 \u06f1\u06f5\u06f0 \u06af\u0631\u0645 \u06af\u0648\u0634\u062a.',
                            )
                          : (0, I.L)(
                              '\u0628\u0631\u0627\u06cc \u06a9\u0644 \u062f\u0633\u062a\u0648\u0631 ({n} \u0639\u062f\u062f)\u061b \u0647\u0632\u06cc\u0646\u0647\u0654 \u0647\u0631 \u0639\u062f\u062f \u0631\u0627 \u062e\u0648\u062f\u0645 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u06a9\u0646\u0645.',
                              { n: xe.toLocaleString((0, I.numberLocale)()) },
                            ),
                    }),
                  ],
                }),
                (0, L.jsxs)(o.default, {
                  testID: 'recipe-yield',
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 8,
                  },
                  children: [
                    (0, L.jsx)(h.Copy, {
                      style: { fontSize: 13 },
                      children: (0, I.L)(
                        '\u0627\u06cc\u0646 \u062f\u0633\u062a\u0648\u0631 \u0628\u0631\u0627\u06cc',
                      ),
                    }),
                    (0, L.jsx)(o.default, {
                      style: { width: 90 },
                      children: (0, L.jsx)(b.QuantityInput, {
                        testID: 'recipe-yield-input',
                        value: re,
                        onChange: (e) => {
                          (se(!1), le(e));
                        },
                      }),
                    }),
                    (0, L.jsx)(h.Copy, {
                      style: { fontSize: 13 },
                      children: (0, I.L)('\u0639\u062f\u062f'),
                    }),
                  ],
                }),
                !W.length &&
                  (0, L.jsx)(h.Copy, {
                    style: { color: F.muted, fontSize: 13 },
                    children: (0, I.L)(
                      '\u0647\u0646\u0648\u0632 \u0645\u0627\u062f\u0647\u200c\u0627\u06cc \u0627\u0636\u0627\u0641\u0647 \u0646\u0634\u062f\u0647.',
                    ),
                  }),
                W.map((e, n) => {
                  const s = pe(e),
                    l = s?.unit || e.stockUnit || 'piece',
                    m = e.unit || l,
                    y =
                      s &&
                      (0, c.isCountUnit)(l) &&
                      c.CONTENT_UNITS.includes(m) &&
                      !s.contentSize;
                  let f,
                    j = '';
                  try {
                    s && m !== l && e.quantity && (f = he(e));
                  } catch (e) {
                    y || (j = (0, x.message)(e));
                  }
                  const v = fe(e),
                    w = e.name.trim(),
                    D = e.ingredientId ? [] : (0, r.suggestProducts)(ye, w, 5),
                    k = D.some(
                      (e) =>
                        (0, r.normalizeName)(e.name) ===
                        (0, r.normalizeName)(w),
                    );
                  return (0, L.jsxs)(
                    o.default,
                    {
                      testID: 'recipe-row-' + n,
                      style: {
                        gap: 8,
                        padding: 12,
                        borderRadius: 14,
                        borderWidth: 1,
                        borderColor: F.line,
                        backgroundColor: F.surface,
                      },
                      children: [
                        e.ingredientId
                          ? (0, L.jsxs)(o.default, {
                              style: h.common.between,
                              children: [
                                (0, L.jsxs)(o.default, {
                                  style: { flex: 1, gap: 2 },
                                  children: [
                                    (0, L.jsx)(h.Copy, {
                                      style: {
                                        fontSize: 15,
                                        fontFamily: 'Vazirmatn_600SemiBold',
                                      },
                                      children: e.name,
                                    }),
                                    s &&
                                      (0, L.jsx)(h.Copy, {
                                        style: {
                                          fontSize: 12,
                                          color:
                                            s.stock < 0 ? F.danger : F.muted,
                                        },
                                        children: (0, I.L)(
                                          '\u062f\u0631 \u0627\u0646\u0628\u0627\u0631: {quantity} {unit}',
                                          {
                                            quantity: s.stock.toLocaleString(
                                              (0, I.numberLocale)(),
                                            ),
                                            unit: (0, p.unitName)(l),
                                          },
                                        ),
                                      }),
                                  ],
                                }),
                                (0, L.jsx)(i.default, {
                                  testID: 'recipe-remove-' + n,
                                  accessibilityRole: 'button',
                                  accessibilityLabel: C.notebookW5Fa.removeLine,
                                  onPress: () => {
                                    (se(!1),
                                      q((e) => e.filter((e, t) => t !== n)));
                                  },
                                  style: {
                                    minHeight: 44,
                                    minWidth: 44,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  },
                                  children: (0, L.jsx)(h.Copy, {
                                    style: { color: F.danger, fontSize: 18 },
                                    children: '\u2715',
                                  }),
                                }),
                              ],
                            })
                          : (0, L.jsxs)(o.default, {
                              style: { gap: 6 },
                              children: [
                                (0, L.jsxs)(o.default, {
                                  style: h.common.row,
                                  children: [
                                    (0, L.jsx)(o.default, {
                                      style: h.common.flex,
                                      children: (0, L.jsx)(h.Input, {
                                        testID: 'recipe-ingredient-' + n,
                                        value: e.name,
                                        onChangeText: (e) =>
                                          ve(n, { name: e, creating: !1 }),
                                        placeholder: (0, I.L)(
                                          '\u0627\u0633\u0645 \u0645\u0627\u062f\u0647\u060c \u0645\u062b\u0644\u0627\u064b \u067e\u0627\u0631\u0627\u0641\u06cc\u0646',
                                        ),
                                        maxLength: 100,
                                        autoFocus: !0,
                                      }),
                                    }),
                                    (0, L.jsx)(i.default, {
                                      accessibilityRole: 'button',
                                      accessibilityLabel:
                                        C.notebookW5Fa.removeLine,
                                      onPress: () => {
                                        (se(!1),
                                          q((e) =>
                                            e.filter((e, t) => t !== n),
                                          ));
                                      },
                                      style: {
                                        minHeight: 44,
                                        minWidth: 44,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      },
                                      children: (0, L.jsx)(h.Copy, {
                                        style: {
                                          color: F.danger,
                                          fontSize: 18,
                                        },
                                        children: '\u2715',
                                      }),
                                    }),
                                  ],
                                }),
                                D.map((e) =>
                                  (0, L.jsxs)(
                                    i.default,
                                    {
                                      testID: 'recipe-pick-' + n + '-' + e.id,
                                      accessibilityRole: 'button',
                                      onPress: () => De(n, e),
                                      style: ({ pressed: e }) => [
                                        h.common.between,
                                        {
                                          minHeight: 44,
                                          paddingHorizontal: 12,
                                          borderRadius: 12,
                                          backgroundColor: e
                                            ? F.soft
                                            : F.accentSoft,
                                        },
                                      ],
                                      children: [
                                        (0, L.jsx)(h.Copy, {
                                          style: {
                                            fontFamily: 'Vazirmatn_600SemiBold',
                                          },
                                          children: e.name,
                                        }),
                                        (0, L.jsx)(h.Copy, {
                                          style: {
                                            fontSize: 12,
                                            color: F.muted,
                                          },
                                          children: (0, I.L)(
                                            '\u062f\u0631 \u0627\u0646\u0628\u0627\u0631: {quantity} {unit}',
                                            {
                                              quantity: e.stock.toLocaleString(
                                                (0, I.numberLocale)(),
                                              ),
                                              unit: (0, p.unitName)(e.unit),
                                            },
                                          ),
                                        }),
                                      ],
                                    },
                                    e.id,
                                  ),
                                ),
                                !!w &&
                                  !k &&
                                  !e.creating &&
                                  D.length > 0 &&
                                  (0, L.jsx)(i.default, {
                                    testID: 'recipe-create-' + n,
                                    accessibilityRole: 'button',
                                    onPress: () =>
                                      ve(n, {
                                        creating: !0,
                                        newUnit: e.newUnit || 'kg',
                                      }),
                                    style: {
                                      minHeight: 40,
                                      justifyContent: 'center',
                                    },
                                    children: (0, L.jsx)(h.Copy, {
                                      style: { fontSize: 13, color: F.accent },
                                      children: (0, I.L)(
                                        '+ \xab{name}\xbb \u0631\u0627 \u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646 \u0645\u0627\u062f\u0647\u0654 \u062a\u0627\u0632\u0647 \u0628\u0647 \u0627\u0646\u0628\u0627\u0631 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646',
                                        { name: w },
                                      ),
                                    }),
                                  }),
                                !!w &&
                                  !k &&
                                  !e.creating &&
                                  !D.length &&
                                  (0, L.jsxs)(o.default, {
                                    testID: 'recipe-missing-' + n,
                                    style: {
                                      gap: 8,
                                      padding: 10,
                                      borderRadius: 12,
                                      backgroundColor: F.soft,
                                    },
                                    children: [
                                      (0, L.jsx)(h.Copy, {
                                        style: { fontSize: 13, lineHeight: 22 },
                                        children: (0, I.L)(
                                          '\xab{name}\xbb \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u0646\u06cc\u0633\u062a. \u0627\u0636\u0627\u0641\u0647\u200c\u0627\u0634 \u06a9\u0646\u06cc\u0645\u061f',
                                          { name: w },
                                        ),
                                      }),
                                      (0, L.jsx)(h.Button, {
                                        testID: 'recipe-create-' + n,
                                        onPress: () =>
                                          ve(n, {
                                            creating: !0,
                                            newUnit: e.newUnit || 'kg',
                                          }),
                                        children: (0, I.L)(
                                          '\u0628\u0644\u0647\u060c \u0628\u0647 \u0627\u0646\u0628\u0627\u0631 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646',
                                        ),
                                      }),
                                    ],
                                  }),
                                e.creating &&
                                  (0, L.jsxs)(o.default, {
                                    testID: 'recipe-new-' + n,
                                    style: {
                                      gap: 8,
                                      padding: 10,
                                      borderRadius: 12,
                                      backgroundColor: F.soft,
                                    },
                                    children: [
                                      (0, L.jsx)(h.Copy, {
                                        style: { fontSize: 13 },
                                        children: (0, I.L)(
                                          '\xab{name}\xbb \u0631\u0627 \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u0628\u0627 \u0686\u0647 \u0648\u0627\u062d\u062f\u06cc \u0646\u06af\u0647 \u0645\u06cc\u200c\u062f\u0627\u0631\u06cc\u061f',
                                          { name: w },
                                        ),
                                      }),
                                      (0, L.jsx)(o.default, {
                                        style: {
                                          flexDirection: 'row-reverse',
                                          flexWrap: 'wrap',
                                          gap: 8,
                                        },
                                        children: S.map((t) =>
                                          (0, L.jsx)(
                                            i.default,
                                            {
                                              testID:
                                                'recipe-new-unit-' +
                                                n +
                                                '-' +
                                                t,
                                              accessibilityRole: 'button',
                                              accessibilityState: {
                                                selected:
                                                  (e.newUnit || 'kg') === t,
                                              },
                                              onPress: () =>
                                                ve(n, { newUnit: t }),
                                              style: Pe(
                                                (e.newUnit || 'kg') === t,
                                              ),
                                              children: (0, L.jsx)(h.Copy, {
                                                style: { fontSize: 13 },
                                                children: (0, p.unitName)(t),
                                              }),
                                            },
                                            t,
                                          ),
                                        ),
                                      }),
                                      B &&
                                        (0, L.jsxs)(L.Fragment, {
                                          children: [
                                            (0, L.jsx)(h.Copy, {
                                              style: {
                                                fontSize: 12,
                                                color: F.muted,
                                              },
                                              children: (0, I.L)(
                                                '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0647\u0631 {unit} (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                                                {
                                                  unit: (0, p.unitName)(
                                                    e.newUnit || 'kg',
                                                  ),
                                                },
                                              ),
                                            }),
                                            (0, L.jsx)(b.MoneyInput, {
                                              testID: 'recipe-new-cost-' + n,
                                              value: e.newCost || '',
                                              onChange: (e) =>
                                                ve(n, { newCost: e }),
                                            }),
                                          ],
                                        }),
                                      (0, L.jsxs)(o.default, {
                                        style: h.common.row,
                                        children: [
                                          (0, L.jsx)(o.default, {
                                            style: h.common.flex,
                                            children: (0, L.jsx)(h.Button, {
                                              testID: 'recipe-new-save-' + n,
                                              disabled: !!A || M,
                                              onPress: () => {
                                                ke(n);
                                              },
                                              children: (0, I.L)(
                                                '\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0627\u0646\u0628\u0627\u0631',
                                              ),
                                            }),
                                          }),
                                          (0, L.jsx)(o.default, {
                                            style: h.common.flex,
                                            children: (0, L.jsx)(h.Button, {
                                              secondary: !0,
                                              onPress: () =>
                                                ve(n, { creating: !1 }),
                                              children: (0, I.L)(
                                                '\u0627\u0646\u0635\u0631\u0627\u0641',
                                              ),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                        !!e.ingredientId &&
                          (0, L.jsxs)(L.Fragment, {
                            children: [
                              (0, L.jsx)(h.Copy, {
                                style: { fontSize: 12, color: F.muted },
                                children: (0, I.L)(
                                  '\u0686\u0642\u062f\u0631 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a\u061f',
                                ),
                              }),
                              (0, L.jsx)(b.UnitInput, {
                                testID: 'recipe-quantity-' + n,
                                value: e.quantity,
                                onChange: (e) => ve(n, { quantity: e }),
                                unit: m,
                                baseUnit: l,
                                allowedUnits: s ? (0, u.recipeUnits)(s) : [l],
                                onUnitChange: (e) =>
                                  ve(n, {
                                    unit: e === l ? void 0 : e,
                                    contentInput: '',
                                  }),
                              }),
                            ],
                          }),
                        y &&
                          (0, L.jsxs)(o.default, {
                            testID: 'recipe-content-' + n,
                            style: { gap: 4 },
                            children: [
                              (0, L.jsx)(h.Copy, {
                                children: (0, I.L)(
                                  '\u0647\u0631 {unit} {name} \u0686\u0646\u062f {contentUnit} \u0627\u0633\u062a\u061f',
                                  {
                                    unit: (0, p.unitName)(l),
                                    name: s.name,
                                    contentUnit: (0, p.unitName)(m),
                                  },
                                ),
                              }),
                              (0, L.jsxs)(o.default, {
                                style: h.common.row,
                                children: [
                                  (0, L.jsx)(o.default, {
                                    style: h.common.flex,
                                    children: (0, L.jsx)(b.QuantityInput, {
                                      testID: 'recipe-content-size-' + n,
                                      value: e.contentInput || '',
                                      onChange: (e) =>
                                        ve(n, { contentInput: e }),
                                    }),
                                  }),
                                  (0, L.jsx)(h.Copy, {
                                    children: (0, p.unitName)(m),
                                  }),
                                  (0, L.jsx)(h.Button, {
                                    testID: 'recipe-content-save-' + n,
                                    disabled: !!A || M,
                                    onPress: () => {
                                      ze(e);
                                    },
                                    children: (0, I.L)(
                                      '\u0630\u062e\u06cc\u0631\u0647',
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        (void 0 !== f || (B && void 0 !== v)) &&
                          (0, L.jsx)(h.Copy, {
                            testID:
                              void 0 !== f
                                ? 'recipe-stock-hint-' + n
                                : 'recipe-cost-' + n,
                            style: { color: F.muted, fontSize: 12 },
                            children: [
                              void 0 !== f
                                ? (0, I.L)(
                                    '= {quantity} {unit} \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc',
                                    {
                                      quantity: f.toLocaleString(
                                        (0, I.numberLocale)(),
                                      ),
                                      unit: (0, p.unitName)(l),
                                    },
                                  )
                                : '',
                              B && void 0 !== v
                                ? (0, I.L)(
                                    '\u0647\u0632\u06cc\u0646\u0647: {amount}',
                                    { amount: (0, t.money)(v) },
                                  )
                                : '',
                            ]
                              .filter(Boolean)
                              .join(' \xb7 '),
                          }),
                        !!j &&
                          (0, L.jsx)(h.Copy, {
                            accessibilityRole: 'alert',
                            style: { color: F.danger },
                            children: j,
                          }),
                      ],
                    },
                    n,
                  );
                }),
                (0, L.jsx)(h.Button, {
                  testID: 'recipe-add-ingredient',
                  secondary: !0,
                  disabled: W.length >= 30,
                  onPress: () => {
                    (se(!1), q((e) => [...e, { name: '', quantity: '' }]));
                  },
                  children: '+ ' + C.notebookW5Fa.addIngredient,
                }),
              ],
            }),
            B &&
              (0, L.jsxs)(h.Card, {
                style: { gap: 10 },
                children: [
                  (0, L.jsxs)(o.default, {
                    style: { gap: 2 },
                    children: [
                      (0, L.jsx)(h.Copy, {
                        style: Fe,
                        children: (0, I.L)(
                          '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631',
                        ),
                      }),
                      (0, L.jsx)(h.Copy, {
                        style: { fontSize: 12, color: F.muted },
                        children: (0, I.L)(
                          '\u0628\u0631\u0627\u06cc \u0647\u0631 \u06f1 \u0639\u062f\u062f\u061b \u0645\u062b\u0644 \u0628\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc\u060c \u06af\u0627\u0632 \u0648 \u0628\u0631\u0642\u060c \u0627\u0631\u0633\u0627\u0644 \u06cc\u0627 \u0645\u0627\u0644\u06cc\u0627\u062a.',
                        ),
                      }),
                    ],
                  }),
                  Y.map((e, t) =>
                    (0, L.jsxs)(
                      o.default,
                      {
                        testID: 'recipe-extra-' + t,
                        style: h.common.row,
                        children: [
                          (0, L.jsx)(o.default, {
                            style: { flex: 1 },
                            children: (0, L.jsx)(h.Input, {
                              testID: 'recipe-extra-label-' + t,
                              value: e.label,
                              onChangeText: (e) => we(t, { label: e }),
                              placeholder: (0, I.L)(
                                '\u0627\u0633\u0645 \u0647\u0632\u06cc\u0646\u0647',
                              ),
                              maxLength: 40,
                            }),
                          }),
                          (0, L.jsx)(o.default, {
                            style: { flex: 1.2 },
                            children: (0, L.jsx)(b.MoneyInput, {
                              testID: 'recipe-extra-amount-' + t,
                              value: e.amount,
                              onChange: (e) => we(t, { amount: e }),
                            }),
                          }),
                          (0, L.jsx)(i.default, {
                            accessibilityRole: 'button',
                            accessibilityLabel: C.notebookW5Fa.removeLine,
                            onPress: () => {
                              (se(!1), J((e) => e.filter((e, n) => n !== t)));
                            },
                            style: {
                              minHeight: 44,
                              minWidth: 36,
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                            children: (0, L.jsx)(h.Copy, {
                              style: { color: F.danger, fontSize: 18 },
                              children: '\u2715',
                            }),
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                  Y.length < 10 &&
                    (0, L.jsxs)(o.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        flexWrap: 'wrap',
                        gap: 8,
                      },
                      children: [
                        v
                          .filter(
                            (e) => !Y.some((t) => t.label === (0, I.L)(e)),
                          )
                          .map((e) =>
                            (0, L.jsx)(
                              i.default,
                              {
                                testID: 'recipe-extra-add-' + e,
                                accessibilityRole: 'button',
                                onPress: () => {
                                  (se(!1),
                                    J((t) => [
                                      ...t,
                                      { label: (0, I.L)(e), amount: '' },
                                    ]));
                                },
                                style: Pe(!1),
                                children: (0, L.jsx)(h.Copy, {
                                  style: { fontSize: 13 },
                                  children: '+ ' + (0, I.L)(e),
                                }),
                              },
                              e,
                            ),
                          ),
                        (0, L.jsx)(i.default, {
                          testID: 'recipe-extra-add',
                          accessibilityRole: 'button',
                          onPress: () => {
                            (se(!1),
                              J((e) => [...e, { label: '', amount: '' }]));
                          },
                          style: Pe(!1),
                          children: (0, L.jsx)(h.Copy, {
                            style: { fontSize: 13 },
                            children: (0, I.L)(
                              '+ \u0647\u0632\u06cc\u0646\u0647\u0654 \u062f\u06cc\u06af\u0631',
                            ),
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            B &&
              (0, L.jsxs)(h.Card, {
                testID: 'recipe-summary',
                style: { gap: 8 },
                children: [
                  (0, L.jsxs)(o.default, {
                    style: h.common.between,
                    children: [
                      (0, L.jsx)(h.Copy, {
                        children: (0, I.L)(
                          '\u0645\u0648\u0627\u062f \u0644\u0627\u0632\u0645',
                        ),
                      }),
                      (0, L.jsx)(h.Copy, {
                        children: (0, t.money)(je.materials),
                      }),
                    ],
                  }),
                  je.other > 0 &&
                    (0, L.jsxs)(o.default, {
                      style: h.common.between,
                      children: [
                        (0, L.jsx)(h.Copy, {
                          children: (0, I.L)(
                            '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u062f\u06cc\u06af\u0631',
                          ),
                        }),
                        (0, L.jsx)(h.Copy, {
                          children: (0, t.money)(je.other),
                        }),
                      ],
                    }),
                  (0, L.jsxs)(o.default, {
                    style: h.common.between,
                    children: [
                      (0, L.jsx)(h.Copy, {
                        style: { fontFamily: 'Vazirmatn_700Bold' },
                        children: C.notebookW5Fa.recipeCost,
                      }),
                      (0, L.jsx)(h.Copy, {
                        testID: 'recipe-total',
                        style: { fontFamily: 'Vazirmatn_700Bold' },
                        children: (0, t.money)(je.total),
                      }),
                    ],
                  }),
                  void 0 !== be &&
                    (0, L.jsxs)(o.default, {
                      style: h.common.between,
                      children: [
                        (0, L.jsx)(h.Copy, {
                          children: (0, I.L)(
                            '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                          ),
                        }),
                        (0, L.jsx)(h.Copy, { children: (0, t.money)(be) }),
                      ],
                    }),
                  void 0 !== Ce &&
                    (0, L.jsxs)(o.default, {
                      style: h.common.between,
                      children: [
                        (0, L.jsx)(h.Copy, { children: C.notebookW5Fa.margin }),
                        (0, L.jsx)(h.Copy, {
                          style: { color: Ce < 0 ? F.danger : F.text },
                          children: (0, t.money)(Ce),
                        }),
                      ],
                    }),
                  void 0 !== Ie &&
                    (0, L.jsxs)(o.default, {
                      style: h.common.between,
                      children: [
                        (0, L.jsx)(h.Copy, {
                          children: (0, I.L)('\u0633\u0648\u062f \u066a'),
                        }),
                        (0, L.jsx)(h.Copy, {
                          testID: 'recipe-profit-percent',
                          style: {
                            color: Ie < 0 ? F.danger : F.success,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: (0, I.L)('{n}\u066a', {
                            n: Ie.toLocaleString((0, I.numberLocale)()),
                          }),
                        }),
                      ],
                    }),
                  void 0 !== Se &&
                    (0, L.jsxs)(o.default, {
                      testID: 'recipe-suggested',
                      style: {
                        gap: 8,
                        paddingTop: 6,
                        borderTopWidth: 1,
                        borderColor: F.line,
                      },
                      children: [
                        (0, L.jsxs)(o.default, {
                          style: h.common.between,
                          children: [
                            (0, L.jsx)(h.Copy, {
                              style: { flex: 1 },
                              children: (0, I.L)(
                                '\u0642\u06cc\u0645\u062a \u067e\u06cc\u0634\u0646\u0647\u0627\u062f\u06cc \u0628\u0627 {n}\u066a \u0633\u0648\u062f',
                                {
                                  n: (Number.isFinite(Le)
                                    ? Le
                                    : m.DEFAULT_MARGIN
                                  ).toLocaleString((0, I.numberLocale)()),
                                },
                              ),
                            }),
                            (0, L.jsx)(h.Copy, {
                              testID: 'recipe-suggested-price',
                              style: { fontFamily: 'Vazirmatn_700Bold' },
                              children: (0, t.money)(Se),
                            }),
                          ],
                        }),
                        (0, L.jsxs)(y.NumberLine, {
                          style: { gap: 8, flexWrap: 'wrap' },
                          children: [
                            [30, 40, 50].map((e) =>
                              (0, L.jsx)(
                                i.default,
                                {
                                  testID: 'recipe-margin-' + e,
                                  accessibilityRole: 'button',
                                  onPress: () => ce(String(e)),
                                  style: Pe(ae === String(e)),
                                  children: (0, L.jsx)(h.Copy, {
                                    style: { fontSize: 13 },
                                    children: (0, I.L)('{n}\u066a', {
                                      n: e.toLocaleString(
                                        (0, I.numberLocale)(),
                                      ),
                                    }),
                                  }),
                                },
                                e,
                              ),
                            ),
                            (0, L.jsx)(o.default, {
                              style: { width: 80 },
                              children: (0, L.jsx)(b.QuantityInput, {
                                testID: 'recipe-margin-input',
                                value: ae,
                                onChange: ce,
                              }),
                            }),
                          ],
                        }),
                        de &&
                          (0, L.jsx)(h.Button, {
                            secondary: !0,
                            testID: 'recipe-use-suggested',
                            onPress: () => {
                              (se(!1), $(String(Se)));
                            },
                            children: (0, I.L)(
                              '\u0647\u0645\u06cc\u0646 \u0642\u06cc\u0645\u062a \u0631\u0627 \u0628\u06af\u0630\u0627\u0631',
                            ),
                          }),
                      ],
                    }),
                  !!je.missing.length &&
                    (0, L.jsx)(h.Copy, {
                      style: { fontSize: 12, color: F.muted, lineHeight: 20 },
                      children: (0, I.L)(
                        '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0627\u06cc\u0646\u200c\u0647\u0627 \u0631\u0627 \u0646\u062f\u0627\u0631\u06cc\u0645 \u0648 \u062f\u0631 \u0647\u0632\u06cc\u0646\u0647 \u062d\u0633\u0627\u0628 \u0646\u0634\u062f: {names}',
                        { names: je.missing.join('\u060c ') },
                      ),
                    }),
                ],
              }),
            (0, L.jsx)(h.Copy, {
              style: { fontSize: 12, color: F.muted, lineHeight: 20 },
              children: (0, I.L)(
                '\u0628\u0627 \xab\u0633\u0627\u062e\u062a\u0645\xbb\u060c \u0641\u0631\u0648\u0634\u060c \xab\u0645\u0635\u0631\u0641 \u0634\u062f\xbb \u06cc\u0627 \xab\u062f\u0648\u0631\u0631\u06cc\u0632\xbb \u0627\u06cc\u0646 \u0645\u062d\u0635\u0648\u0644\u060c \u0645\u0648\u0627\u062f \u0628\u0627\u0644\u0627 \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0632 \u0627\u0646\u0628\u0627\u0631 \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f.',
              ),
            }),
            !!T &&
              (0, L.jsx)(h.Copy, {
                accessibilityRole: 'alert',
                style: { color: F.danger },
                children: T,
              }),
            oe &&
              (0, L.jsx)(h.Copy, {
                testID: 'recipe-saved',
                style: { color: F.accent },
                children: (0, I.L)(
                  '\u0630\u062e\u06cc\u0631\u0647 \u0634\u062f \u2713',
                ),
              }),
            (0, L.jsx)(h.Button, {
              testID: 'recipe-save',
              disabled:
                M ||
                !!A ||
                !W.some((e) => e.ingredientId) ||
                W.some((e) => {
                  const t = pe(e);
                  return (
                    t &&
                    (0, c.isCountUnit)(t.unit) &&
                    e.unit &&
                    c.CONTENT_UNITS.includes(e.unit) &&
                    !t.contentSize
                  );
                }),
              onPress: () => {
                Ue();
              },
              children: M
                ? (0, I.L)(
                    '\u062f\u0631 \u062d\u0627\u0644 \u0630\u062e\u06cc\u0631\u0647\u2026',
                  )
                : C.notebookW5Fa.saveRecipe,
            }),
          ],
        });
      }));
    var t = _r(d[0]),
      n = _r(d[1]),
      i = e(_r(d[2])),
      o = e(_r(d[3])),
      s = _r(d[4]),
      r = _r(d[5]),
      l = _r(d[6]),
      c = _r(d[7]),
      u = _r(d[8]),
      m = _r(d[9]),
      y = _r(d[10]),
      p = _r(d[11]),
      h = _r(d[12]),
      f = _r(d[13]),
      x = _r(d[14]),
      j = _r(d[15]),
      b = _r(d[16]),
      C = _r(d[17]),
      I = _r(d[18]),
      L = _r(d[19]);
    const S = ['kg', 'g', 'l', 'ml', 'piece'],
      v = [
        '\u0645\u0627\u0644\u06cc\u0627\u062a',
        '\u0627\u0631\u0633\u0627\u0644',
        '\u0628\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc',
        '\u062f\u0633\u062a\u0645\u0632\u062f',
      ],
      w = (e) => ('kg' === e ? 'g' : 'l' === e ? 'ml' : e);
  },
  977,
  [
    435, 2, 232, 99, 380, 439, 431, 432, 430, 978, 617, 585, 407, 382, 415, 519,
    614, 580, 311, 338,
  ],
);
