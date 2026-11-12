// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 979; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.RecipeHub = function ({
        shop: e,
        products: o,
        onSaved: w,
        onClose: z,
        onProduce: k,
      }) {
        const { colors: v } = (0, h.useTheme)(),
          [D, R] = (0, t.useState)(null),
          [B, P] = (0, t.useState)(null),
          [_, H] = (0, t.useState)(''),
          [V, W] = (0, t.useState)(!1),
          [F, A] = (0, t.useState)(null),
          [G, M] = (0, t.useState)(''),
          [T, O] = (0, t.useState)({}),
          E = (0, t.useMemo)(
            () =>
              o
                .map(
                  (e) =>
                    e.id +
                    ':' +
                    e.stock +
                    ':' +
                    (e.avgCost ?? e.costPrice ?? ''),
                )
                .join('|'),
            [o],
          ),
          q = () =>
            (0, u.getRecipes)(e).then(
              (e) => {
                (P(e), H(''));
              },
              (e) => {
                (H((0, s.message)(e)), P((e) => e ?? []));
              },
            );
        (0, t.useEffect)(() => {
          D || q();
        }, [e.id, E, D]);
        const Q = (0, t.useMemo)(() => {
          const e = (B || []).slice(),
            t = (e) =>
              e.ready <= 0 && 0 === e.makeable
                ? 0
                : null === e.makeable
                  ? 1
                  : 2;
          return e.sort(
            (e, n) => t(e) - t(n) || e.name.localeCompare(n.name, 'fa'),
          );
        }, [B]);
        if (D)
          return (0, C.jsx)(
            a.RecipeEditor,
            {
              shop: e,
              product: D,
              products: o,
              onSaved: w,
              closeOnSave: !D.id,
              onClose: () => R(null),
            },
            D.id || 'new',
          );
        const U = Q.filter((e) => 0 === e.makeable && e.ready <= 0).length,
          J = (e) => {
            const t = o.find((t) => t.id === e);
            t && R(t);
          };
        async function K(t) {
          const n = (0, l.shortages)(t, t.yield > 1 ? t.yield : 1);
          if (n.length)
            try {
              (await (0, p.addToBuy)(
                e,
                n.map((e) => ({
                  name: e.name,
                  productId: e.ingredientId,
                  quantity: e.short,
                  unit: e.unit,
                })),
              ),
                O((e) => ({ ...e, [t.productId]: !0 })));
            } catch (e) {
              H((0, s.message)(e));
            }
        }
        const N = (e, t, n) => {
          const o =
              'good' === t
                ? v.success + '26'
                : 'bad' === t
                  ? v.danger + '22'
                  : 'accent' === t
                    ? v.accentSoft
                    : 'warn' === t
                      ? v.warningSoft
                      : v.soft,
            i =
              'good' === t
                ? v.success
                : 'bad' === t
                  ? v.danger
                  : 'accent' === t
                    ? v.accent
                    : 'warn' === t
                      ? v.warning
                      : v.text;
          return (0, C.jsx)(r.default, {
            testID: n,
            style: [L.pill, { backgroundColor: o }],
            children: (0, C.jsx)(f.Copy, {
              style: {
                fontSize: 12,
                color: i,
                fontFamily: 'Vazirmatn_600SemiBold',
              },
              children: e,
            }),
          });
        };
        return (0, C.jsxs)(i.ScrollView, {
          testID: 'recipe-hub',
          keyboardShouldPersistTaps: 'handled',
          contentContainerStyle: {
            gap: 14,
            paddingBottom: 24,
            width: '100%',
            maxWidth: 720,
            alignSelf: 'center',
          },
          children: [
            (0, C.jsxs)(r.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
              },
              children: [
                (0, C.jsxs)(r.default, {
                  style: {
                    flex: 1,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 8,
                  },
                  children: [
                    (0, C.jsx)(f.PageTitle, {
                      title: (0, x.L)(
                        '\u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a \u0648 \u0645\u0646\u0648',
                      ),
                      sub: Q.length
                        ? [
                            (0, x.L)('{n} \u062f\u0633\u062a\u0648\u0631', {
                              n: (0, b.formatGrouped)(Q.length),
                            }),
                            U
                              ? (0, x.L)(
                                  '{n} \u06a9\u0645\u200c\u0645\u0648\u0627\u062f',
                                  { n: (0, b.formatGrouped)(U) },
                                )
                              : '',
                          ]
                            .filter(Boolean)
                            .join('\u060c ')
                        : (0, x.L)(
                            '\u0628\u0631\u0627\u06cc \u0647\u0631 \u0686\u06cc\u0632\u06cc \u06a9\u0647 \u0645\u06cc\u200c\u0633\u0627\u0632\u06cc\u060c \u06cc\u06a9 \u0628\u0627\u0631 \u0628\u0646\u0648\u06cc\u0633 \u0627\u0632 \u0686\u0647 \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                          ),
                      style: { flexShrink: 1 },
                    }),
                    (0, C.jsx)(n.default, {
                      testID: 'recipe-help',
                      accessibilityRole: 'button',
                      accessibilityLabel: (0, x.L)(
                        '\u0631\u0627\u0647\u0646\u0645\u0627',
                      ),
                      onPress: () => W(!0),
                      style: [
                        L.help,
                        { backgroundColor: v.soft, borderColor: v.line },
                      ],
                      children: (0, C.jsx)(f.Copy, {
                        style: {
                          fontSize: 16,
                          fontFamily: 'Vazirmatn_700Bold',
                          color: v.muted,
                        },
                        children: '\u061f',
                      }),
                    }),
                  ],
                }),
                (0, C.jsx)(f.Button, {
                  secondary: !0,
                  onPress: z,
                  children: (0, x.L)('\u0628\u0633\u062a\u0646'),
                }),
              ],
            }),
            Q.map((e) => {
              const t = (0, l.recipeUnitCost)(e),
                o =
                  e.lines.length > 0 &&
                  e.lines.every((e) => void 0 !== e.avgCost) &&
                  !t.missing.length,
                i = o ? (0, l.profitPercent)(e.price, t.total) : void 0,
                s = 0 === e.makeable,
                a = s ? (0, l.shortages)(e, e.yield > 1 ? e.yield : 1) : [];
              return (0, C.jsxs)(
                r.default,
                {
                  testID: 'recipe-item-' + e.productId,
                  style: [
                    L.card,
                    { backgroundColor: v.surface, borderColor: v.line },
                  ],
                  children: [
                    (0, C.jsxs)(n.default, {
                      accessibilityRole: 'button',
                      onPress: () => J(e.productId),
                      style: { gap: 4 },
                      children: [
                        (0, C.jsxs)(r.default, {
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 8,
                          },
                          children: [
                            (0, C.jsx)(f.Copy, {
                              style: {
                                flex: 1,
                                fontSize: 17,
                                fontFamily: 'Vazirmatn_700Bold',
                              },
                              numberOfLines: 1,
                              children: e.name,
                            }),
                            e.ready > 0 &&
                              N(
                                (0, x.L)(
                                  '\u0622\u0645\u0627\u062f\u0647: {n}',
                                  { n: (0, b.formatGrouped)(e.ready) },
                                ),
                                'accent',
                                'recipe-ready-' + e.productId,
                              ),
                          ],
                        }),
                        (0, C.jsx)(f.Copy, {
                          style: { fontSize: 12, color: v.muted },
                          children: [
                            void 0 !== e.price
                              ? (0, x.L)('\u0641\u0631\u0648\u0634 {amount}', {
                                  amount: (0, j.money)(e.price),
                                })
                              : (0, x.L)(
                                  '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0646\u062f\u0627\u0631\u062f',
                                ),
                            1 !== e.yield
                              ? (0, x.L)(
                                  '\u0627\u06cc\u0646 \u062f\u0633\u062a\u0648\u0631 \u0628\u0631\u0627\u06cc {n} \u0639\u062f\u062f',
                                  { n: (0, b.formatGrouped)(e.yield) },
                                )
                              : '',
                          ]
                            .filter(Boolean)
                            .join('\u060c '),
                        }),
                      ],
                    }),
                    (0, C.jsxs)(r.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        flexWrap: 'wrap',
                        gap: 6,
                      },
                      children: [
                        o &&
                          N(
                            (0, x.L)(
                              '\u0647\u0632\u06cc\u0646\u0647 {amount}',
                              { amount: (0, j.money)(Math.round(t.total)) },
                            ),
                            'plain',
                            'recipe-cost-' + e.productId,
                          ),
                        void 0 !== i &&
                          N(
                            (0, x.L)('\u0633\u0648\u062f {n}\u066a', {
                              n: i.toLocaleString((0, x.numberLocale)()),
                            }),
                            i < 0 ? 'bad' : 'good',
                            'recipe-profit-' + e.productId,
                          ),
                        e.lines.length
                          ? null !== e.makeable &&
                            N(
                              (0, x.L)(
                                '\u0645\u06cc\u200c\u0634\u0648\u062f \u0633\u0627\u062e\u062a: {n}',
                                { n: (0, b.formatGrouped)(e.makeable) },
                              ),
                              s ? 'warn' : 'accent',
                              'recipe-makeable-' + e.productId,
                            )
                          : N(
                              (0, x.L)(
                                '\u0647\u0646\u0648\u0632 \u0645\u0627\u062f\u0647\u200c\u0627\u06cc \u0646\u062f\u0627\u0631\u062f',
                              ),
                              'warn',
                            ),
                      ],
                    }),
                    !!a.length &&
                      (0, C.jsxs)(r.default, {
                        testID: 'recipe-short-' + e.productId,
                        style: [
                          L.short,
                          {
                            backgroundColor: v.warningSoft,
                            borderColor: v.warningBorder,
                          },
                        ],
                        children: [
                          (0, C.jsx)(f.Copy, {
                            style: {
                              flex: 1,
                              fontSize: 13,
                              lineHeight: 21,
                              color: v.text,
                            },
                            children: (0, c.shortageLine)(a[0]),
                          }),
                          T[e.productId]
                            ? (0, C.jsx)(f.Copy, {
                                style: { fontSize: 12, color: v.accent },
                                children: (0, x.L)(
                                  '\u062f\u0631 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f \u2713',
                                ),
                              })
                            : (0, C.jsx)(n.default, {
                                testID: 'recipe-tobuy-' + e.productId,
                                accessibilityRole: 'button',
                                onPress: () => {
                                  K(e);
                                },
                                style: {
                                  minHeight: 36,
                                  justifyContent: 'center',
                                  paddingHorizontal: 6,
                                },
                                children: (0, C.jsx)(f.Copy, {
                                  style: {
                                    fontSize: 13,
                                    color: v.accent,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: (0, x.L)(
                                    '\u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
                                  ),
                                }),
                              }),
                        ],
                      }),
                    (0, C.jsxs)(r.default, {
                      style: { flexDirection: 'row-reverse', gap: 8 },
                      children: [
                        (0, C.jsxs)(n.default, {
                          testID: 'recipe-make-' + e.productId,
                          accessibilityRole: 'button',
                          disabled: !e.lines.length,
                          onPress: () => A(e),
                          style: ({ pressed: t }) => [
                            L.action,
                            {
                              flex: 1.4,
                              backgroundColor: v.accent,
                              opacity: e.lines.length ? (t ? 0.85 : 1) : 0.45,
                            },
                          ],
                          children: [
                            (0, C.jsx)(m.Icon, {
                              name: 'bolt',
                              size: 18,
                              color: v.onAccent,
                            }),
                            (0, C.jsx)(f.Copy, {
                              style: {
                                fontSize: 15,
                                color: v.onAccent,
                                fontFamily: 'Vazirmatn_700Bold',
                              },
                              children: (0, x.L)(
                                '\u0633\u0627\u062e\u062a\u0645',
                              ),
                            }),
                          ],
                        }),
                        (0, C.jsx)(n.default, {
                          testID: 'recipe-edit-' + e.productId,
                          accessibilityRole: 'button',
                          onPress: () => J(e.productId),
                          style: ({ pressed: e }) => [
                            L.action,
                            {
                              flex: 1,
                              backgroundColor: v.soft,
                              opacity: e ? 0.85 : 1,
                            },
                          ],
                          children: (0, C.jsx)(f.Copy, {
                            style: {
                              fontSize: 15,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: (0, x.L)(
                              '\u0648\u06cc\u0631\u0627\u06cc\u0634',
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                },
                e.productId,
              );
            }),
            (0, C.jsxs)(n.default, {
              testID: 'recipe-new',
              accessibilityRole: 'button',
              onPress: () =>
                R({
                  id: '',
                  name: '',
                  detail: '',
                  stock: 0,
                  unit: 'piece',
                  kind: 'made',
                }),
              style: ({ pressed: e }) => [
                L.newItem,
                {
                  backgroundColor: Q.length ? v.soft : v.accent,
                  borderColor: Q.length ? v.line : v.accent,
                  opacity: e ? 0.85 : 1,
                },
              ],
              children: [
                (0, C.jsx)(m.Icon, {
                  name: 'plus',
                  size: 22,
                  color: Q.length ? v.accent : v.onAccent,
                }),
                (0, C.jsx)(f.Copy, {
                  style: {
                    fontSize: 16,
                    color: Q.length ? v.accent : v.onAccent,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, x.L)(
                    '\u062f\u0633\u062a\u0648\u0631 \u062a\u0627\u0632\u0647',
                  ),
                }),
              ],
            }),
            null !== B &&
              !Q.length &&
              (0, C.jsxs)(r.default, {
                style: { gap: 8 },
                children: [
                  (0, C.jsx)(f.Copy, {
                    style: { fontSize: 13, color: v.muted },
                    children: (0, x.L)(
                      '\u0645\u062b\u0644\u0627\u064b \u0627\u06cc\u0646\u200c\u0637\u0648\u0631\u06cc\u061b \u0628\u0632\u0646 \u062a\u0627 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0627\u0633\u0645 \u0634\u0631\u0648\u0639 \u06a9\u0646\u06cc',
                    ),
                  }),
                  I.map((e) =>
                    (0, C.jsxs)(
                      n.default,
                      {
                        testID: 'recipe-example-' + e.name,
                        accessibilityRole: 'button',
                        onPress: () =>
                          R({
                            id: '',
                            name: (0, x.L)(e.name),
                            detail: '',
                            stock: 0,
                            unit: 'piece',
                            kind: 'made',
                          }),
                        style: ({ pressed: e }) => [
                          L.card,
                          L.example,
                          {
                            borderColor: v.line,
                            backgroundColor: v.soft,
                            opacity: e ? 0.7 : 0.6,
                          },
                        ],
                        children: [
                          (0, C.jsxs)(r.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: 8,
                            },
                            children: [
                              (0, C.jsx)(f.Copy, {
                                style: {
                                  flex: 1,
                                  fontSize: 16,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                  color: v.muted,
                                },
                                children: (0, x.L)(e.name),
                              }),
                              (0, C.jsx)(r.default, {
                                style: [L.tag, { borderColor: v.muted }],
                                children: (0, C.jsx)(f.Copy, {
                                  style: { fontSize: 11, color: v.muted },
                                  children: (0, x.L)(
                                    '\u0646\u0645\u0648\u0646\u0647',
                                  ),
                                }),
                              }),
                            ],
                          }),
                          (0, C.jsx)(f.Copy, {
                            style: {
                              fontSize: 12,
                              color: v.muted,
                              lineHeight: 20,
                            },
                            children:
                              (0, x.L)(e.who) + ': ' + (0, x.L)(e.items),
                          }),
                        ],
                      },
                      e.name,
                    ),
                  ),
                ],
              }),
            !!G &&
              (0, C.jsx)(f.Copy, {
                testID: 'recipe-made-notice',
                style: { color: v.accent, textAlign: 'center' },
                children: G,
              }),
            !!_ &&
              (0, C.jsx)(f.Copy, {
                accessibilityRole: 'alert',
                style: { color: v.danger, textAlign: 'center' },
                children: _,
              }),
            (0, C.jsxs)(y.Sheet, {
              visible: V,
              title: (0, x.L)(
                '\u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a \u0628\u0647 \u0686\u0647 \u062f\u0631\u062f\u06cc \u0645\u06cc\u200c\u062e\u0648\u0631\u062f\u061f',
              ),
              onClose: () => W(!1),
              children: [
                (0, C.jsx)(f.Copy, {
                  style: { fontSize: 13, lineHeight: 23 },
                  children: (0, x.L)(
                    '\u0627\u06af\u0631 \u0686\u06cc\u0632\u06cc \u0645\u06cc\u200c\u0633\u0627\u0632\u06cc \u0648 \u0645\u06cc\u200c\u0641\u0631\u0648\u0634\u06cc\u060c \u06cc\u06a9 \u0628\u0627\u0631 \u0628\u0646\u0648\u06cc\u0633 \u0627\u0632 \u0686\u0647 \u0645\u0648\u0627\u062f\u06cc \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u06a9\u0646\u062f \u0633\u0627\u062e\u062a \u0647\u0631 \u0639\u062f\u062f \u0686\u0642\u062f\u0631 \u062e\u0631\u062c \u062f\u0627\u0631\u062f \u0648 \u0686\u0642\u062f\u0631 \u0633\u0648\u062f \u0645\u06cc\u200c\u06a9\u0646\u06cc.',
                  ),
                }),
                S.map((e, t) =>
                  (0, C.jsxs)(
                    r.default,
                    {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'flex-start',
                        gap: 10,
                      },
                      children: [
                        (0, C.jsx)(r.default, {
                          style: [L.step, { backgroundColor: v.accent }],
                          children: (0, C.jsx)(f.Copy, {
                            style: {
                              fontSize: 12,
                              color: v.onAccent,
                              fontFamily: 'Vazirmatn_700Bold',
                            },
                            children: (t + 1).toLocaleString(
                              (0, x.numberLocale)(),
                            ),
                          }),
                        }),
                        (0, C.jsx)(f.Copy, {
                          style: { flex: 1, fontSize: 13, lineHeight: 23 },
                          children: (0, x.L)(e),
                        }),
                      ],
                    },
                    t,
                  ),
                ),
                (0, C.jsxs)(r.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 10,
                  },
                  children: [
                    (0, C.jsx)(m.Icon, {
                      name: 'bolt',
                      size: 20,
                      color: v.accent,
                    }),
                    (0, C.jsx)(f.Copy, {
                      style: { flex: 1, fontSize: 13, lineHeight: 23 },
                      children: (0, x.L)(
                        '\u0627\u06af\u0631 \xab\u0633\u0627\u062e\u062a\u0645\xbb \u0646\u0632\u0646\u06cc \u0647\u0645 \u0645\u0634\u06a9\u0644\u06cc \u0646\u06cc\u0633\u062a: \u0628\u0627 \u0647\u0631 \u0641\u0631\u0648\u0634\u060c \u0645\u0648\u0627\u062f \u0647\u0645\u0627\u0646 \u062a\u0639\u062f\u0627\u062f \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0632 \u0627\u0646\u0628\u0627\u0631 \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                      ),
                    }),
                  ],
                }),
              ],
            }),
            F &&
              (0, C.jsx)(c.RecipeMakeSheet, {
                shop: e,
                info: F,
                onProduce: k,
                onClose: () => A(null),
                onQueued: (e) => {
                  (M(
                    (0, x.L)(
                      '{n} {name} \u0633\u0627\u062e\u062a\u0647 \u0634\u062f \u2713',
                      { n: (0, b.formatGrouped)(e), name: F.name },
                    ),
                  ),
                    P((t) =>
                      (t || []).map((t) =>
                        t.productId === F.productId
                          ? { ...t, ready: t.ready + e }
                          : t,
                      ),
                    ));
                },
                onFailed: (e) => {
                  (M(''), H((0, s.message)(e)), q());
                },
                onConfirmed: () => {
                  (w(), q());
                },
              }),
          ],
        });
      }));
    var t = _r(d[0]),
      n = e(_r(d[1])),
      o = e(_r(d[2])),
      r = e(_r(d[3])),
      i = _r(d[4]),
      l = _r(d[5]),
      s = _r(d[6]),
      a = _r(d[7]),
      c = _r(d[8]),
      u = _r(d[9]),
      p = _r(d[10]),
      f = _r(d[11]),
      y = _r(d[12]),
      m = _r(d[13]),
      h = _r(d[14]),
      x = _r(d[15]),
      b = _r(d[16]),
      j = _r(d[17]),
      C = _r(d[18]);
    const I = [
        {
          who: '\u06a9\u0627\u0641\u0647',
          name: '\u0644\u0627\u062a\u0647',
          items:
            '\u06f1\u06f8 \u06af\u0631\u0645 \u0642\u0647\u0648\u0647\u060c \u06f2\u06f0\u06f0 \u0645\u06cc\u0644\u06cc\u200c\u0644\u06cc\u062a\u0631 \u0634\u06cc\u0631\u060c \u06f1 \u0644\u06cc\u0648\u0627\u0646',
        },
        {
          who: '\u0631\u0633\u062a\u0648\u0631\u0627\u0646',
          name: '\u06a9\u0628\u0627\u0628 \u06a9\u0648\u0628\u06cc\u062f\u0647',
          items:
            '\u06f2\u06f0\u06f0 \u06af\u0631\u0645 \u06af\u0648\u0634\u062a \u0686\u0631\u062e\u200c\u06a9\u0631\u062f\u0647\u060c \u06f5\u06f0 \u06af\u0631\u0645 \u067e\u06cc\u0627\u0632\u060c \u06f1 \u0646\u0627\u0646',
        },
      ],
      S = [
        '\u0627\u0633\u0645 \u0645\u062d\u0635\u0648\u0644 \u0648 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634\u0634 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
        '\u0645\u0648\u0627\u062f \u0644\u0627\u0632\u0645 \u0631\u0627 \u0627\u0632 \u0627\u0646\u0628\u0627\u0631 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u061b \u0627\u06af\u0631 \u0646\u06cc\u0633\u062a\u060c \u0647\u0645\u0627\u0646\u200c\u062c\u0627 \u0627\u0636\u0627\u0641\u0647\u200c\u0627\u0634 \u06a9\u0646. \u0627\u06af\u0631 \u06cc\u06a9 \u062f\u0633\u062a\u0648\u0631 \u0686\u0646\u062f \u062a\u0627 \u0645\u06cc\u200c\u062f\u0647\u062f (\u0645\u062b\u0644\u0627\u064b \u06f2\u06f4 \u06a9\u06cc\u06a9)\u060c \u0647\u0645\u0627\u0646 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
        '\u0647\u0631 \u0628\u0627\u0631 \u06a9\u0647 \u0633\u0627\u062e\u062a\u06cc\u060c \xab\u0633\u0627\u062e\u062a\u0645\xbb \u0631\u0627 \u0628\u0632\u0646: \u0645\u0648\u0627\u062f \u0627\u0632 \u0627\u0646\u0628\u0627\u0631 \u06a9\u0645 \u0648 \u0645\u062d\u0635\u0648\u0644 \u0622\u0645\u0627\u062f\u0647\u0654 \u0641\u0631\u0648\u0634 \u0645\u06cc\u200c\u0634\u0648\u062f.',
      ];
    const L = o.default.create({
      newItem: {
        minHeight: 56,
        borderRadius: 16,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        borderWidth: 1,
      },
      card: {
        gap: 10,
        padding: 14,
        borderRadius: 18,
        borderWidth: o.default.hairlineWidth,
      },
      example: { borderStyle: 'dashed', borderWidth: 1 },
      pill: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
      tag: {
        paddingHorizontal: 8,
        paddingVertical: 1,
        borderRadius: 8,
        borderWidth: 1,
      },
      short: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 10,
        paddingVertical: 6,
        borderRadius: 12,
        borderWidth: o.default.hairlineWidth,
      },
      action: {
        minHeight: 44,
        borderRadius: 14,
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
      },
      help: {
        width: 32,
        height: 32,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: o.default.hairlineWidth,
      },
      step: {
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 1,
      },
    });
  },
  979,
  [
    2, 232, 17, 99, 380, 978, 415, 977, 980, 519, 613, 407, 539, 385, 382, 311,
    434, 435, 338,
  ],
);
