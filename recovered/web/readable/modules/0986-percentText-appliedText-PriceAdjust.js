// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 986; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.percentText = k),
      Object.defineProperty(_e, 'appliedText', {
        enumerable: !0,
        get: function () {
          return P;
        },
      }),
      (_e.PriceAdjust = function ({
        shop: e,
        categories: p,
        version: L,
        onClose: F,
        onApplied: v,
      }) {
        const { colors: w } = (0, c.useTheme)(),
          [R, _] = (0, t.useState)('10'),
          [A, B] = (0, t.useState)('price'),
          [I, T] = (0, t.useState)('all'),
          [D, H] = (0, t.useState)(''),
          [M, V] = (0, t.useState)(100),
          [z, N] = (0, t.useState)(null),
          [O, U] = (0, t.useState)(L),
          [E, $] = (0, t.useState)(''),
          [Q, q] = (0, t.useState)(!1),
          [G, J] = (0, t.useState)(null),
          [K, X] = (0, h.useConfirm)(),
          Y = (e) => ({
            percent: Number(R),
            field: A,
            scope: I,
            ...('category' === I ? { category: D } : {}),
            roundTo: M,
            dryRun: e,
            version: O,
          });
        async function Z(t) {
          try {
            if ('category' === I && !D)
              return void $(b.notebookW5Fa.chooseCategory);
            (q(!0), $(''), J(null));
            const o = await (0, y.adjustPrices)(e, Y(t), (0, u.randomUUID)());
            (void 0 !== o.revision && U(o.revision),
              t ? N(o) : (N(null), J(o.count), v?.()));
          } catch (t) {
            const o = t instanceof Error ? t.message : '';
            if (
              t instanceof u.ApiError &&
              ('version_conflict' === o ||
                'policy_conflict' === o ||
                'hidden_by_owner' === o ||
                'forbidden' === o)
            )
              try {
                const t = await (0, y.readInventoryRevision)(e);
                (U(t.revision), N(null), $(b.notebookW5Fa.updatedRetry));
              } catch (e) {
                $((0, u.message)(e));
              }
            else $((0, u.message)(t));
          } finally {
            q(!1);
          }
        }
        return (0, C.jsxs)(l.ScrollView, {
          keyboardShouldPersistTaps: 'handled',
          contentContainerStyle: { gap: 12, paddingBottom: 20 },
          children: [
            X,
            (0, C.jsxs)(n.default, {
              style: s.common.between,
              children: [
                (0, C.jsx)(s.Copy, {
                  style: s.common.title,
                  children: b.notebookW5Fa.priceAdjust,
                }),
                (0, C.jsx)(s.Button, {
                  secondary: !0,
                  onPress: F,
                  children: b.notebookW5Fa.close,
                }),
              ],
            }),
            (0, C.jsxs)(s.Card, {
              style: { gap: 12 },
              children: [
                (0, C.jsx)(s.Copy, { children: b.notebookW5Fa.percent }),
                (0, C.jsx)(j.StepperRow, {
                  testID: 'price-adjust-stepper',
                  minus: (0, C.jsx)(o.default, {
                    testID: 'price-adjust-minus',
                    accessibilityRole: 'button',
                    accessibilityLabel: (0, f.L)(
                      '\u06a9\u0645 \u06a9\u0631\u062f\u0646',
                    ),
                    onPress: () => {
                      (_(W(R, -1)), N(null), J(null));
                    },
                    style: {
                      minWidth: 48,
                      minHeight: 48,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: w.soft,
                      borderRadius: 12,
                    },
                    children: (0, C.jsx)(s.Copy, { children: '\u2212' }),
                  }),
                  plus: (0, C.jsx)(o.default, {
                    testID: 'price-adjust-plus',
                    accessibilityRole: 'button',
                    accessibilityLabel: (0, f.L)(
                      '\u0632\u06cc\u0627\u062f \u06a9\u0631\u062f\u0646',
                    ),
                    onPress: () => {
                      (_(W(R, 1)), N(null), J(null));
                    },
                    style: {
                      minWidth: 48,
                      minHeight: 48,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: w.soft,
                      borderRadius: 12,
                    },
                    children: (0, C.jsx)(s.Copy, { children: '\uff0b' }),
                  }),
                  style: { gap: 10 },
                  children: (0, C.jsx)(n.default, {
                    style: s.common.flex,
                    children: (0, C.jsx)(s.Input, {
                      value: R,
                      keyboardType: 'decimal-pad',
                      onChangeText: (e) => {
                        (_(k(e)), N(null), J(null));
                      },
                    }),
                  }),
                }),
                (0, C.jsx)(n.default, {
                  style: s.common.row,
                  children: [
                    { id: 'price', label: b.notebookW5Fa.sellPrice },
                    { id: 'costPrice', label: b.notebookW5Fa.buyPrice },
                  ].map((e) =>
                    (0, C.jsx)(
                      s.Button,
                      {
                        secondary: A !== e.id,
                        onPress: () => {
                          (B(e.id), N(null));
                        },
                        children: e.label,
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, C.jsxs)(n.default, {
                  style: s.common.row,
                  children: [
                    (0, C.jsx)(s.Button, {
                      secondary: 'all' !== I,
                      onPress: () => {
                        (T('all'), N(null));
                      },
                      children: b.notebookW5Fa.allProducts,
                    }),
                    (0, C.jsx)(s.Button, {
                      secondary: 'category' !== I,
                      onPress: () => {
                        (T('category'), N(null));
                      },
                      children: b.notebookW5Fa.category,
                    }),
                  ],
                }),
                'category' === I &&
                  (0, C.jsx)(n.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      flexWrap: 'wrap',
                      gap: 7,
                    },
                    children: p.map((e) =>
                      (0, C.jsx)(
                        o.default,
                        {
                          onPress: () => {
                            (H(e), N(null));
                          },
                          style: {
                            padding: 10,
                            minHeight: 44,
                            borderRadius: 12,
                            backgroundColor: D === e ? w.accentSoft : w.soft,
                          },
                          children: (0, C.jsx)(s.Copy, { children: e }),
                        },
                        e,
                      ),
                    ),
                  }),
                (0, C.jsx)(s.Copy, { children: b.notebookW5Fa.rounding }),
                (0, C.jsx)(j.NumberLine, {
                  style: { flexWrap: 'wrap', gap: 7 },
                  children: S.map((e) =>
                    (0, C.jsx)(
                      o.default,
                      {
                        onPress: () => {
                          (V(e), N(null));
                        },
                        style: {
                          minHeight: 44,
                          padding: 10,
                          borderRadius: 12,
                          backgroundColor: M === e ? w.accentSoft : w.soft,
                        },
                        children: (0, C.jsx)(s.Copy, {
                          children: (0, x.shopUnitText)(
                            (0, f.L)('{n} \u062a\u0648\u0645\u0627\u0646', {
                              n: (0, x.localAmount)(e).toLocaleString(
                                (0, f.numberLocale)(),
                              ),
                            }),
                          ),
                        }),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, C.jsx)(s.Button, {
              disabled: Q,
              onPress: () => {
                Z(!0);
              },
              children: b.notebookW5Fa.preview,
            }),
            z &&
              (0, C.jsxs)(s.Card, {
                style: { gap: 8 },
                children: [
                  (0, C.jsx)(s.Copy, {
                    style: { fontFamily: 'Vazirmatn_600SemiBold' },
                    children: (0, f.L)(
                      '{n} \u06a9\u0627\u0644\u0627\u06cc \u062f\u0631\u06af\u06cc\u0631',
                      { n: z.count.toLocaleString((0, f.numberLocale)()) },
                    ),
                  }),
                  z.examples.map((e) => {
                    const t = e.before?.[A],
                      o = e.after ?? e.afterValues?.[A];
                    return (0, C.jsxs)(
                      n.default,
                      {
                        style: s.common.between,
                        children: [
                          (0, C.jsx)(s.Copy, {
                            numberOfLines: 1,
                            style: { flex: 1 },
                            children: e.name,
                          }),
                          (0, C.jsx)(s.Copy, {
                            children:
                              void 0 === t || void 0 === o
                                ? b.notebookW5Fa.pricesHidden
                                : `${(0, x.localAmount)(t).toLocaleString((0, f.numberLocale)())} \u2190 ${(0, x.localAmount)(o).toLocaleString((0, f.numberLocale)())}`,
                          }),
                        ],
                      },
                      e.id,
                    );
                  }),
                  (0, C.jsx)(s.Button, {
                    disabled: Q || 0 === z.count,
                    onPress: function () {
                      K({
                        title: b.notebookW5Fa.priceAdjust,
                        text: b.notebookW5Fa.confirmPriceAdjust,
                        ok: b.notebookW5Fa.apply,
                        tone: 'accent',
                        run: () => {
                          Z(!1);
                        },
                      });
                    },
                    children: b.notebookW5Fa.apply,
                  }),
                ],
              }),
            null !== G &&
              (0, C.jsx)(s.Copy, {
                testID: 'price-adjust-done',
                accessibilityRole: 'alert',
                style: {
                  color: w.success,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: P(G),
              }),
            !!E &&
              (0, C.jsx)(s.Copy, {
                accessibilityRole: 'alert',
                style: { color: w.danger },
                children: E,
              }),
          ],
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2])),
      l = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      y = r(d[7]),
      p = r(d[8]),
      b = r(d[9]),
      h = r(d[10]),
      f = r(d[11]),
      j = r(d[12]),
      x = r(d[13]),
      C = r(d[14]);
    const S = [1, 100, 500, 1e3, 5e3, 1e4];
    function k(e) {
      return (
        (/^\s*[-\u2212\u2010\u2013]/.test(e) ? '-' : '') +
        (0, p.normalizeQuantityText)(e)
      );
    }
    const P = (e) =>
        (0, f.L)(
          '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627 \u0628\u0647\u200c\u0631\u0648\u0632 \u0634\u062f ({n} \u06a9\u0627\u0644\u0627)',
          { n: e.toLocaleString((0, f.numberLocale)()) },
        ),
      W = (e, t) => String(Math.min(500, Math.max(-90, (Number(e) || 0) + t)));
  },
  986,
  [2, 232, 99, 380, 407, 382, 415, 519, 614, 580, 534, 311, 617, 435, 338],
);
