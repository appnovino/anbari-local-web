// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 981; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.VariantEditor = function ({
        products: e,
        initialModel: D,
        receiveOnly: k = !1,
        canSeeBuyPrice: _,
        onCreate: P,
        onReceive: R,
        onRefresh: E,
        onClose: T,
      }) {
        const { colors: A } = (0, j.useTheme)(),
          M = (0, S.useSafeAreaInsets)(),
          [O, V] = (0, t.useState)(D || ''),
          [B, H] = (0, t.useState)(k ? 'stock' : 'define'),
          W = (0, t.useMemo)(
            () => (0, u.groupModels)(e).get((0, d.normalizeName)(O)),
            [e, O],
          ),
          [X, F] = (0, t.useState)(() => W?.sizes || []),
          [N, Z] = (0, t.useState)(() => W?.colors || []),
          G = (0, f.mostCommonPrice)(W?.variants || []),
          Q = _
            ? (0, f.mostCommonPrice)(W?.variants || [], 'costPrice')
            : void 0,
          [q, J] = (0, t.useState)(''),
          [K, U] = (0, t.useState)(''),
          [Y, $] = (0, t.useState)(() =>
            void 0 === G ? '' : String((0, h.tomanToInput)(G)),
          ),
          [ee, te] = (0, t.useState)(() =>
            void 0 === Q ? '' : String((0, h.tomanToInput)(Q)),
          ),
          [ne, re] = (0, t.useState)(''),
          se = (0, t.useRef)(!1),
          ie = (0, t.useRef)(!1);
        (0, t.useEffect)(() => {
          (se.current || $(void 0 === G ? '' : String((0, h.tomanToInput)(G))),
            ie.current ||
              te(void 0 === Q ? '' : String((0, h.tomanToInput)(Q))));
        }, [W?.key, G, Q]);
        const [le, ae] = (0, t.useState)({}),
          [oe, ce] = (0, t.useState)(!1),
          [de, ue] = (0, t.useState)(''),
          [he, fe] = (0, t.useState)(''),
          [ge, ye] = (0, t.useState)({}),
          [pe, xe] = (0, t.useState)([]),
          [me, je] = (0, t.useState)(!1),
          Se = (0, t.useRef)(!1);
        (0, t.useEffect)(() => {
          W &&
            (F((e) => (e.length ? e : W.sizes)),
            Z((e) => (e.length ? e : W.colors)));
        }, [W?.key]);
        const Ce = W && (0, L.countSignature)(W.variants);
        (0, t.useEffect)(() => {
          ye({});
        }, [Ce]);
        const ve = (e) => ge[e.id] ?? e.stock,
          be = (e) => !!e && 'made' !== e.kind,
          Le = (e) => {
            const t = le[e.id]?.trim();
            if (void 0 === le[e.id] || !t) return '';
            try {
              return (0, L.parseCount)(t) === ve(e) ? '' : 'changed';
            } catch {
              return 'invalid';
            }
          },
          Ie = (X.length || 1) * (N.length || 1),
          we = (X.length ? X : ['']).reduce(
            (e, t) =>
              e +
              (N.length ? N : ['']).filter((e) => {
                return ((n = t), (s = e), !(W && (0, u.findVariant)(W, n, s)));
                var n, s;
              }).length,
            0,
          ),
          ze = (e, t, n) =>
            e.includes(t)
              ? e.filter((e) => e !== t)
              : e.length < n
                ? [...e, t]
                : e,
          De = (e, t) => !!W && ('size' === e ? W.sizes : W.colors).includes(t);
        async function ke() {
          if ((ue(''), fe(''), O.trim()))
            if (X.length || N.length)
              if (Ie > u.MAX_VARIANTS_PER_CALL)
                ue(
                  (0, b.L)(
                    '\u062d\u062f\u0627\u06a9\u062b\u0631 {n} \u062a\u0631\u06a9\u06cc\u0628 \u0633\u0627\u06cc\u0632 \u0648 \u0631\u0646\u06af \u062f\u0631 \u0647\u0631 \u0628\u0627\u0631.',
                    { n: (0, b.localDigits)(String(u.MAX_VARIANTS_PER_CALL)) },
                  ),
                );
              else {
                ce(!0);
                try {
                  (await P({
                    model: O.trim(),
                    sizes: X,
                    colors: N,
                    ...(Y ? { price: (0, f.parseModelPrice)(Y) } : {}),
                    ...(_ && ee
                      ? { costPrice: (0, f.parseModelPrice)(ee) }
                      : {}),
                    ...(ne.trim() ? { brand: ne.trim() } : {}),
                  }),
                    H('stock'));
                } catch (e) {
                  ue(
                    e instanceof Error && 'invalid_model_price' === e.message
                      ? (0, b.L)(
                          '\u0642\u06cc\u0645\u062a \u0631\u0627 \u0628\u0627 \u0639\u062f\u062f \u0635\u0641\u0631 \u06cc\u0627 \u0628\u06cc\u0634\u062a\u0631 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f.',
                        )
                      : (0, C.errorText)(e),
                  );
                } finally {
                  ce(!1);
                }
              }
            else
              ue(
                (0, b.L)(
                  '\u062d\u062f\u0627\u0642\u0644 \u06cc\u06a9 \u0633\u0627\u06cc\u0632 \u06cc\u0627 \u0631\u0646\u06af \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                ),
              );
          else
            ue(
              (0, b.L)(
                '\u0646\u0627\u0645 \u0645\u062f\u0644 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
              ),
            );
        }
        const Pe = W && (0, L.countSignature)(W.variants, (e) => ve(e));
        (0, t.useEffect)(() => {
          if (!me || Se.current) return;
          if (!W) return (xe([]), void je(!1));
          const e = (0, L.recheckChanges)(
            pe,
            Object.fromEntries(W.variants.filter(be).map((e) => [e.id, ve(e)])),
          );
          e.stale && (xe(e.changes), e.changes.length || je(!1));
        }, [Ce, Pe, oe]);
        const Re = (e, t, s, i, l = !1) =>
            (0, w.jsx)(
              n.default,
              {
                testID: i,
                accessibilityRole: 'button',
                accessibilityState: { selected: t, disabled: l },
                disabled: l,
                onPress: s,
                style: ({ pressed: e }) => [
                  z.chip,
                  {
                    backgroundColor: t ? A.accent : A.soft,
                    borderColor: t ? A.accent : A.line,
                    opacity: l ? 0.6 : e ? 0.85 : 1,
                  },
                ],
                children: (0, w.jsx)(y.Copy, {
                  style: {
                    fontSize: 13,
                    color: t ? A.onAccent : A.text,
                    writingDirection: /^[A-Z0-9]/.test(e) ? 'ltr' : void 0,
                  },
                  children: (0, b.localDigits)(e),
                }),
              },
              i,
            ),
          Ee = W ? (0, f.modelAxes)(W) : { sizes: [''], colors: [''] },
          Te = Ee.sizes,
          Ae = Ee.colors,
          [Me, Oe] = (0, v.useColorBlocks)(Ae, 84),
          [Ve, Be] = (0, c.useGridPrices)(
            !!W && (0, u.pricesDiffer)(W.variants.filter(be)),
          );
        return (0, w.jsxs)(l.default, {
          style: { flex: 1 },
          children: [
            (0, w.jsxs)(o.ScrollView, {
              testID: 'variant-editor',
              style: { flex: 1 },
              keyboardShouldPersistTaps: 'handled',
              contentContainerStyle: {
                gap: 14,
                paddingBottom: 28,
                width: '100%',
                maxWidth: 760,
                alignSelf: 'center',
              },
              children: [
                (0, w.jsxs)(l.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 10,
                  },
                  children: [
                    (0, w.jsx)(y.PageTitle, {
                      title:
                        'define' === B
                          ? (0, b.L)(
                              '\u0633\u0627\u06cc\u0632 \u0648 \u0631\u0646\u06af',
                            )
                          : (0, b.L)(
                              '\u0645\u0648\u062c\u0648\u062f\u06cc \u0647\u0631 \u0633\u0627\u06cc\u0632',
                            ),
                      sub:
                        'define' === B
                          ? (0, b.L)(
                              '\u06cc\u06a9 \u0645\u062f\u0644\u060c \u0647\u0645\u0647 \u0633\u0627\u06cc\u0632\u0647\u0627 \u0648 \u0631\u0646\u06af\u200c\u0647\u0627\u061b \u0647\u0631 \u06a9\u062f\u0627\u0645 \u0645\u0648\u062c\u0648\u062f\u06cc \u062c\u062f\u0627 \u062f\u0627\u0631\u062f.',
                            )
                          : W?.model,
                      style: { flex: 1 },
                    }),
                    (0, w.jsx)(y.Button, {
                      secondary: !0,
                      onPress: () => T(W?.model),
                      children: (0, b.L)('\u0628\u0633\u062a\u0646'),
                    }),
                  ],
                }),
                'define' === B &&
                  (0, w.jsxs)(w.Fragment, {
                    children: [
                      (0, w.jsxs)(y.Card, {
                        style: { gap: 10 },
                        children: [
                          (0, w.jsx)(y.Copy, {
                            style: z.label,
                            children: (0, b.L)(
                              '\u0646\u0627\u0645 \u0645\u062f\u0644',
                            ),
                          }),
                          (0, w.jsx)(y.Input, {
                            testID: 'variant-model',
                            value: O,
                            maxLength: 100,
                            editable: !D,
                            onChangeText: V,
                            placeholder: (0, b.L)(
                              '\u0645\u062b\u0644\u0627\u064b \u06a9\u0641\u0634 Nike Hyper X',
                            ),
                          }),
                          !D &&
                            (0, w.jsxs)(w.Fragment, {
                              children: [
                                (0, w.jsx)(y.Copy, {
                                  style: z.label,
                                  children: (0, b.L)(
                                    '\u0628\u0631\u0646\u062f (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                                  ),
                                }),
                                (0, w.jsx)(y.Input, {
                                  testID: 'variant-brand',
                                  value: ne,
                                  maxLength: 60,
                                  onChangeText: re,
                                  placeholder: (0, b.L)(
                                    '\u0645\u062b\u0644\u0627\u064b Nike',
                                  ),
                                }),
                              ],
                            }),
                        ],
                      }),
                      (0, w.jsxs)(y.Card, {
                        style: { gap: 10 },
                        children: [
                          (0, w.jsx)(y.Copy, {
                            style: z.label,
                            children: (0, b.L)(
                              '\u0633\u0627\u06cc\u0632\u0647\u0627',
                            ),
                          }),
                          (0, w.jsx)(l.default, {
                            style: z.row,
                            children: [
                              [
                                'shoes',
                                (0, b.L)(
                                  '\u06a9\u0641\u0634 \u06f3\u06f6 \u062a\u0627 \u06f4\u06f6',
                                ),
                              ],
                              [
                                'clothes',
                                (0, b.L)(
                                  '\u0644\u0628\u0627\u0633 XS \u062a\u0627 3XL',
                                ),
                              ],
                              [
                                'pants',
                                (0, b.L)(
                                  '\u0634\u0644\u0648\u0627\u0631 \u06f2\u06f8 \u062a\u0627 \u06f4\u06f0',
                                ),
                              ],
                              [
                                'kids',
                                (0, b.L)(
                                  '\u0628\u0686\u06af\u0627\u0646\u0647 \u06f1 \u062a\u0627 \u06f8',
                                ),
                              ],
                            ].map(([e, t]) =>
                              (0, w.jsxs)(
                                n.default,
                                {
                                  testID: 'variant-preset-' + e,
                                  accessibilityRole: 'button',
                                  onPress: () => {
                                    return (
                                      (t = u.SIZE_PRESETS[e]),
                                      void F((e) =>
                                        (0, u.sortSizes)([...e, ...t]).slice(
                                          0,
                                          u.MAX_SIZES,
                                        ),
                                      )
                                    );
                                    var t;
                                  },
                                  style: ({ pressed: e }) => [
                                    z.preset,
                                    {
                                      borderColor: A.accent,
                                      opacity: e ? 0.8 : 1,
                                    },
                                  ],
                                  children: [
                                    (0, w.jsx)(p.Icon, {
                                      name: 'plus',
                                      size: 14,
                                      color: A.accent,
                                    }),
                                    (0, w.jsx)(y.Copy, {
                                      style: { fontSize: 12, color: A.accent },
                                      children: t,
                                    }),
                                  ],
                                },
                                e,
                              ),
                            ),
                          }),
                          (0, w.jsx)(l.default, {
                            style: z.row,
                            children: X.map((e) =>
                              Re(
                                e,
                                !0,
                                () => F((t) => t.filter((t) => t !== e)),
                                'variant-size-' + e,
                                De('size', e),
                              ),
                            ),
                          }),
                          (0, w.jsxs)(l.default, {
                            style: { flexDirection: 'row-reverse', gap: 8 },
                            children: [
                              (0, w.jsx)(l.default, {
                                style: { flex: 1 },
                                children: (0, w.jsx)(y.Input, {
                                  testID: 'variant-size-input',
                                  value: q,
                                  maxLength: 20,
                                  onChangeText: J,
                                  placeholder: (0, b.L)(
                                    '\u0633\u0627\u06cc\u0632 \u062f\u06cc\u06af\u0631\u060c \u0645\u062b\u0644\u0627\u064b \u06f4\u06f2\u066b\u06f5',
                                  ),
                                  onSubmitEditing: () => {
                                    const e = (0, u.cleanVariantValue)(q);
                                    (e &&
                                      F((t) =>
                                        (0, u.sortSizes)(
                                          ze(
                                            t.filter((t) => t !== e),
                                            e,
                                            u.MAX_SIZES,
                                          ),
                                        ),
                                      ),
                                      J(''));
                                  },
                                }),
                              }),
                              (0, w.jsx)(y.Button, {
                                secondary: !0,
                                onPress: () => {
                                  const e = (0, u.cleanVariantValue)(q);
                                  (e &&
                                    F((t) =>
                                      (0, u.sortSizes)(
                                        ze(
                                          t.filter((t) => t !== e),
                                          e,
                                          u.MAX_SIZES,
                                        ),
                                      ),
                                    ),
                                    J(''));
                                },
                                children: (0, b.L)(
                                  '\u0627\u0641\u0632\u0648\u062f\u0646',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, w.jsxs)(y.Card, {
                        style: { gap: 10 },
                        children: [
                          (0, w.jsx)(y.Copy, {
                            style: z.label,
                            children: (0, b.L)(
                              '\u0631\u0646\u06af\u200c\u0647\u0627 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                            ),
                          }),
                          (0, w.jsx)(l.default, {
                            style: z.row,
                            children: [
                              ...new Set([...u.COLOR_PRESETS, ...N]),
                            ].map((e) =>
                              Re(
                                e,
                                N.includes(e),
                                () => Z((t) => ze(t, e, u.MAX_COLORS)),
                                'variant-color-' + e,
                                De('color', e),
                              ),
                            ),
                          }),
                          (0, w.jsxs)(l.default, {
                            style: { flexDirection: 'row-reverse', gap: 8 },
                            children: [
                              (0, w.jsx)(l.default, {
                                style: { flex: 1 },
                                children: (0, w.jsx)(y.Input, {
                                  testID: 'variant-color-input',
                                  value: K,
                                  maxLength: 20,
                                  onChangeText: U,
                                  placeholder: (0, b.L)(
                                    '\u0631\u0646\u06af \u062f\u06cc\u06af\u0631',
                                  ),
                                }),
                              }),
                              (0, w.jsx)(y.Button, {
                                secondary: !0,
                                onPress: () => {
                                  const e = (0, u.cleanVariantValue)(K);
                                  (e &&
                                    Z((t) =>
                                      t.includes(e)
                                        ? t
                                        : ze(t, e, u.MAX_COLORS),
                                    ),
                                    U(''));
                                },
                                children: (0, b.L)(
                                  '\u0627\u0641\u0632\u0648\u062f\u0646',
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, w.jsx)(y.Card, {
                        style: { gap: 10 },
                        children: (0, w.jsxs)(l.default, {
                          style: { flexDirection: 'row-reverse', gap: 10 },
                          children: [
                            (0, w.jsxs)(l.default, {
                              style: { flex: 1 },
                              children: [
                                (0, w.jsx)(y.Copy, {
                                  style: z.label,
                                  children: (0, b.L)(
                                    '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                                  ),
                                }),
                                (0, w.jsx)(x.MoneyInput, {
                                  testID: 'variant-price',
                                  value: Y,
                                  shown: !0,
                                  decimals: (0, h.moneyDecimals)(),
                                  onChange: (e) => {
                                    ((se.current = !0), $(e));
                                  },
                                }),
                              ],
                            }),
                            _ &&
                              (0, w.jsxs)(l.default, {
                                style: { flex: 1 },
                                children: [
                                  (0, w.jsx)(y.Copy, {
                                    style: z.label,
                                    children: (0, b.L)(
                                      '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                                    ),
                                  }),
                                  (0, w.jsx)(x.MoneyInput, {
                                    testID: 'variant-cost',
                                    value: ee,
                                    shown: !0,
                                    decimals: (0, h.moneyDecimals)(),
                                    onChange: (e) => {
                                      ((ie.current = !0), te(e));
                                    },
                                  }),
                                ],
                              }),
                          ],
                        }),
                      }),
                      !!de &&
                        (0, w.jsx)(y.Copy, {
                          accessibilityRole: 'alert',
                          style: { color: A.danger },
                          children: de,
                        }),
                      (0, w.jsx)(y.Button, {
                        testID: 'variant-create',
                        disabled: oe || !we,
                        onPress: () => {
                          ke();
                        },
                        children: we
                          ? (0, b.L)(
                              '\u0633\u0627\u062e\u062a {n} \u0645\u0648\u0631\u062f \u062c\u062f\u06cc\u062f',
                              { n: we.toLocaleString((0, b.numberLocale)()) },
                            )
                          : (0, b.L)(
                              '\u0647\u0645\u0647 \u0627\u06cc\u0646 \u0633\u0627\u06cc\u0632\u0647\u0627 \u0627\u0632 \u0642\u0628\u0644 \u0647\u0633\u062a',
                            ),
                      }),
                      !!W &&
                        (0, w.jsx)(y.Button, {
                          secondary: !0,
                          onPress: () => H('stock'),
                          children: (0, b.L)(
                            '\u0631\u0641\u062a\u0646 \u0628\u0647 \u0648\u0631\u0648\u062f \u0645\u0648\u062c\u0648\u062f\u06cc',
                          ),
                        }),
                    ],
                  }),
                'stock' === B &&
                  (0, w.jsxs)(w.Fragment, {
                    children: [
                      !W &&
                        (0, w.jsx)(y.Card, {
                          children: (0, w.jsx)(y.Copy, {
                            style: { color: A.muted },
                            children: (0, b.L)(
                              '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc\u2026',
                            ),
                          }),
                        }),
                      !!W &&
                        (0, w.jsxs)(y.Card, {
                          testID: 'variant-stock-grid',
                          style: { gap: 8, padding: 10 },
                          children: [
                            (0, w.jsxs)(l.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: 8,
                              },
                              children: [
                                (0, w.jsx)(y.Copy, {
                                  style: {
                                    fontSize: 12,
                                    color: A.muted,
                                    lineHeight: 21,
                                    flexShrink: 1,
                                  },
                                  children: (0, b.L)(
                                    '\u0639\u062f\u062f \u0648\u0627\u0642\u0639\u06cc \u0647\u0631 \u062e\u0627\u0646\u0647 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
                                  ),
                                }),
                                (0, w.jsxs)(l.default, {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 6,
                                  },
                                  children: [
                                    (0, w.jsx)(y.Copy, {
                                      style: { fontSize: 12, color: A.muted },
                                      children: (0, b.L)(
                                        '\u0646\u0645\u0627\u06cc\u0634 \u0642\u06cc\u0645\u062a',
                                      ),
                                    }),
                                    (0, w.jsx)(i.default, {
                                      testID: 'variant-price-toggle',
                                      value: Ve,
                                      onValueChange: Be,
                                      trackColor: {
                                        false: A.soft,
                                        true: A.accent,
                                      },
                                      thumbColor: A.surface,
                                      activeThumbColor: A.surface,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, w.jsx)(l.default, {
                              onLayout: Oe,
                              style: { gap: 12 },
                              children: Me.map((e, t) =>
                                (0, w.jsxs)(
                                  l.default,
                                  {
                                    style: [
                                      z.block,
                                      t > 0 && {
                                        borderTopWidth: s.default.hairlineWidth,
                                        borderTopColor: A.line,
                                        paddingTop: 12,
                                      },
                                    ],
                                    children: [
                                      !!(0, v.blockLabel)(Me, t) &&
                                        (0, w.jsx)(y.Copy, {
                                          style: {
                                            fontSize: 12,
                                            color: A.muted,
                                          },
                                          children: (0, v.blockLabel)(Me, t),
                                        }),
                                      (0, w.jsxs)(l.default, {
                                        style: z.gridRow,
                                        children: [
                                          (0, w.jsx)(l.default, {
                                            style: z.gridHead,
                                          }),
                                          e.map((e) =>
                                            (0, w.jsx)(
                                              l.default,
                                              {
                                                style: z.gridCell,
                                                children: (0, w.jsx)(y.Copy, {
                                                  numberOfLines: 1,
                                                  style: {
                                                    fontSize: 12,
                                                    fontFamily:
                                                      'Vazirmatn_600SemiBold',
                                                  },
                                                  children:
                                                    e ||
                                                    (0, b.L)(
                                                      '\u062a\u0639\u062f\u0627\u062f',
                                                    ),
                                                }),
                                              },
                                              'h' + e,
                                            ),
                                          ),
                                        ],
                                      }),
                                      Te.map((t) =>
                                        (0, w.jsxs)(
                                          l.default,
                                          {
                                            style: z.gridRow,
                                            children: [
                                              (0, w.jsx)(l.default, {
                                                style: z.gridHead,
                                                children: (0, w.jsx)(y.Copy, {
                                                  style: {
                                                    fontSize: 14,
                                                    fontFamily:
                                                      'Vazirmatn_700Bold',
                                                  },
                                                  children: (0, b.localDigits)(
                                                    t || '\u2014',
                                                  ),
                                                }),
                                              }),
                                              e.map((e) => {
                                                const n = (0, u.findVariant)(
                                                  W,
                                                  t,
                                                  e,
                                                );
                                                return (0, w.jsxs)(
                                                  l.default,
                                                  {
                                                    style: z.gridCell,
                                                    children: [
                                                      Ve &&
                                                        be(n) &&
                                                        (0, w.jsx)(y.Copy, {
                                                          testID:
                                                            'variant-count-price-' +
                                                            n.id,
                                                          numberOfLines: 1,
                                                          style: [
                                                            z.price,
                                                            { color: A.muted },
                                                          ],
                                                          children:
                                                            void 0 !== n.price
                                                              ? (0,
                                                                h.shortMoney)(
                                                                  n.price,
                                                                )
                                                              : '\u2014',
                                                        }),
                                                      be(n)
                                                        ? (0, w.jsx)(
                                                            x.QuantityInput,
                                                            {
                                                              testID:
                                                                'variant-count-' +
                                                                n.id,
                                                              value:
                                                                le[n.id] ??
                                                                String(ve(n)),
                                                              selectTextOnFocus:
                                                                !0,
                                                              onChange: (e) =>
                                                                ae((t) => ({
                                                                  ...t,
                                                                  [n.id]: e,
                                                                })),
                                                              style: [
                                                                {
                                                                  width: 76,
                                                                  minWidth: 0,
                                                                  paddingHorizontal: 4,
                                                                  textAlign:
                                                                    'center',
                                                                  minHeight: 44,
                                                                },
                                                                !!Le(n) && {
                                                                  borderWidth: 2,
                                                                  borderColor:
                                                                    'invalid' ===
                                                                    Le(n)
                                                                      ? A.danger
                                                                      : A.accent,
                                                                },
                                                              ],
                                                            },
                                                          )
                                                        : (0, w.jsx)(y.Copy, {
                                                            style: {
                                                              color: A.muted,
                                                              textAlign:
                                                                'center',
                                                            },
                                                            children: '\u2014',
                                                          }),
                                                    ],
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
                      !k &&
                        (0, w.jsx)(y.Button, {
                          secondary: !0,
                          onPress: () => H('define'),
                          children: (0, b.L)(
                            '\u0627\u0641\u0632\u0648\u062f\u0646 \u0633\u0627\u06cc\u0632 \u06cc\u0627 \u0631\u0646\u06af',
                          ),
                        }),
                    ],
                  }),
              ],
            }),
            'stock' === B &&
              (0, w.jsxs)(l.default, {
                style: {
                  gap: 8,
                  paddingTop: 10,
                  paddingBottom: Math.max(M.bottom, 12),
                  width: '100%',
                  maxWidth: 760,
                  alignSelf: 'center',
                },
                children: [
                  !!de &&
                    (0, w.jsx)(y.Copy, {
                      accessibilityRole: 'alert',
                      style: { color: A.danger },
                      children: de,
                    }),
                  !!he &&
                    (0, w.jsx)(y.Copy, {
                      accessibilityRole: 'alert',
                      children: he,
                    }),
                  (0, w.jsx)(y.Button, {
                    testID: 'variant-receive',
                    disabled: oe || !W,
                    onPress: function () {
                      if ((ue(''), fe(''), !W)) return;
                      let e;
                      try {
                        e = (0, L.countChanges)(
                          W.variants
                            .filter(be)
                            .map((e) => ({
                              id: e.id,
                              name: e.name,
                              label:
                                [e.color, e.size && (0, b.localDigits)(e.size)]
                                  .filter(Boolean)
                                  .join('\u060c ') || e.name,
                              stock: ve(e),
                            })),
                          le,
                        );
                      } catch {
                        return void ue(
                          (0, b.L)(
                            '\u062a\u0639\u062f\u0627\u062f \u06cc\u06a9\u06cc \u0627\u0632 \u062e\u0627\u0646\u0647\u200c\u0647\u0627 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a.',
                          ),
                        );
                      }
                      e.length
                        ? (xe(e), je(!0))
                        : ue(
                            (0, b.L)(
                              '\u0647\u06cc\u0686 \u0639\u062f\u062f\u06cc \u062a\u063a\u06cc\u06cc\u0631 \u0646\u06a9\u0631\u062f\u0647.',
                            ),
                          );
                    },
                    children: (0, b.L)(
                      '\u062b\u0628\u062a \u0645\u0648\u062c\u0648\u062f\u06cc',
                    ),
                  }),
                ],
              }),
            (0, w.jsx)(I.StockChangeConfirm, {
              visible: me,
              changes: pe,
              busy: oe,
              error: de,
              onConfirm: function (e) {
                if (Se.current) return;
                if (!W) return (xe([]), void je(!1));
                const t = (0, L.recheckChanges)(
                  pe,
                  Object.fromEntries(
                    W.variants.filter(be).map((e) => [e.id, ve(e)]),
                  ),
                );
                if (t.stale)
                  return (xe(t.changes), void (t.changes.length || je(!1)));
                ((Se.current = !0),
                  ce(!0),
                  ue(''),
                  fe(''),
                  (async () => {
                    let n = 0;
                    try {
                      for (let s = 0; s < e.length; s += 20) {
                        const i = e.slice(s, s + 20),
                          l = new Set(i.map((e) => e.productId));
                        (await R(i),
                          (n += i.length),
                          ye((e) => ({
                            ...e,
                            ...Object.fromEntries(
                              t.changes
                                .filter((e) => l.has(e.id))
                                .map((e) => [e.id, e.after]),
                            ),
                          })),
                          xe((e) => e.filter((e) => !l.has(e.id))),
                          ae((e) =>
                            Object.fromEntries(
                              Object.entries(e).filter(([e, n]) => {
                                const s = t.changes.find((t) => t.id === e);
                                if (!s || !l.has(e)) return !0;
                                try {
                                  return (0, L.parseCount)(n) !== s.after;
                                } catch {
                                  return !0;
                                }
                              }),
                            ),
                          ));
                      }
                      (je(!1),
                        fe(
                          (0, b.L)(
                            '{n} \u0645\u0648\u0631\u062f \u062b\u0628\u062a \u0634\u062f.',
                            { n: n.toLocaleString((0, b.numberLocale)()) },
                          ),
                        ));
                    } catch (e) {
                      (ue((0, C.errorText)(e)),
                        e instanceof Error &&
                          'stock_changed' === e.message &&
                          E?.().catch(() => {}));
                    } finally {
                      ((Se.current = !1), ce(!1));
                    }
                  })());
              },
              onEdit: () => je(!1),
            }),
          ],
        });
      }));
    var t = r(_d[0]),
      n = e(r(_d[1])),
      s = e(r(_d[2])),
      i = e(r(_d[3])),
      l = e(r(_d[4])),
      o = r(_d[5]),
      c = r(_d[6]),
      d = r(_d[7]),
      u = r(_d[8]),
      h = r(_d[9]),
      f = r(_d[10]),
      y = r(_d[11]),
      p = r(_d[12]),
      x = r(_d[13]),
      j = r(_d[14]),
      S = r(_d[15]),
      C = r(_d[16]),
      v = r(_d[17]),
      b = r(_d[18]),
      L = r(_d[19]),
      I = r(_d[20]),
      w = r(_d[21]);
    const z = s.default.create({
      label: { fontSize: 12, fontFamily: 'Vazirmatn_600SemiBold' },
      row: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 8 },
      chip: {
        minWidth: 46,
        minHeight: 40,
        paddingHorizontal: 12,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      preset: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 6,
        paddingHorizontal: 12,
        minHeight: 38,
        borderRadius: 12,
        borderWidth: 1,
        borderStyle: 'dashed',
      },
      gridRow: { flexDirection: 'row-reverse', alignItems: 'center', gap: 6 },
      gridHead: { width: 56, alignItems: 'center', justifyContent: 'center' },
      gridCell: { width: 84, alignItems: 'center', justifyContent: 'center' },
      price: {
        fontSize: 10,
        lineHeight: 15,
        textAlign: 'center',
        maxWidth: 84,
      },
      block: { gap: 6 },
    });
  },
  981,
  [
    2, 232, 17, 240, 99, 380, 982, 439, 453, 435, 817, 407, 385, 614, 382, 342,
    690, 715, 311, 717, 983, 338,
  ],
);
