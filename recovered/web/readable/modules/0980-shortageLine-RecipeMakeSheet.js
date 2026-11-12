// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 980; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.shortageLine = v),
      (_e.RecipeMakeSheet = function ({
        shop: e,
        info: L,
        onProduce: w,
        onClose: z,
        onQueued: D,
        onConfirmed: M,
        onFailed: R,
      }) {
        const { colors: _ } = (0, k.useTheme)(),
          P = L.yield > 1 ? L.yield : 1,
          [B, q] = (0, t.useState)(String(P)),
          [F, T] = (0, t.useState)(!1),
          [G, H] = (0, t.useState)(''),
          [N, O] = (0, t.useState)(!1);
        let W = 0;
        try {
          W = (0, l.parseQuantity)(B);
        } catch {
          W = 0;
        }
        const V = W > 0 ? (0, s.shortages)(L, W) : [],
          A = (0, s.makeableFrom)(L),
          Q = (0, s.recipeUnitCost)(L),
          K = L.lines.every((e) => void 0 !== e.avgCost) && !Q.missing.length,
          U = (e) => {
            const t = Math.max(0, Math.round(1e3 * (W + (e ? 1 : -1))) / 1e3);
            (q(String(t || '')), O(!1));
          },
          E =
            L.yield > 1 ? [L.yield, 2 * L.yield, 3 * L.yield] : [1, 5, 10, 20];
        async function J() {
          try {
            (await (0, h.addToBuy)(
              e,
              V.map((e) => ({
                name: e.name,
                productId: e.ingredientId,
                quantity: e.short,
                unit: e.unit,
              })),
            ),
              O(!0));
          } catch (e) {
            H((0, p.message)(e));
          }
        }
        async function X() {
          if (!(W > 0) || F) return;
          (T(!0), H(''));
          const t = [
              {
                name: L.name,
                productId: L.productId,
                quantity: W,
                kind: 'received',
              },
            ],
            n = (0, m.idempotencyKey)(),
            o = V.map((e) => ({
              productId: e.ingredientId,
              name: e.name,
              unit: e.unit || 'piece',
              stock: Math.round(1e3 * (e.need - e.short)) / 1e3,
              wanted: e.need,
              after: Math.round(1e3 * -e.short) / 1e3,
            }));
          try {
            await (0, C.withOversell)(
              async (o) => {
                if (w) {
                  const { queued: e, confirmed: n } = w(t, o || void 0);
                  return (await e, D(W), z(), void n.then(M, R));
                }
                (await (0, p.request)(
                  (0, p.shopPath)(e, '/movements'),
                  'POST',
                  {
                    drafts: t,
                    source: 'production',
                    ...(0, C.oversellMark)(o),
                  },
                  { key: n },
                ),
                  D(W),
                  z(),
                  M());
              },
              { verb: 'save', known: o },
            );
          } catch (e) {
            H((0, p.message)(e));
          } finally {
            T(!1);
          }
        }
        const Y = (e, t, o, s = !1) =>
          (0, I.jsx)(n.default, {
            testID: e,
            accessibilityRole: 'button',
            accessibilityLabel:
              '\u2212' === t
                ? (0, c.L)('\u06cc\u06a9\u06cc \u06a9\u0645\u062a\u0631')
                : (0, c.L)('\u06cc\u06a9\u06cc \u0628\u06cc\u0634\u062a\u0631'),
            disabled: s,
            onPress: o,
            style: ({ pressed: e }) => ({
              width: 52,
              height: 52,
              borderRadius: 26,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: _.soft,
              borderWidth: 1,
              borderColor: _.line,
              opacity: s ? 0.4 : e ? 0.8 : 1,
            }),
            children: (0, I.jsx)(x.Copy, {
              style: {
                fontSize: 26,
                lineHeight: 30,
                fontFamily: 'Vazirmatn_700Bold',
              },
              children: t,
            }),
          });
        return (0, I.jsx)(b.Sheet, {
          visible: !0,
          title: (0, c.L)('\u0633\u0627\u062e\u062a\u0645: {name}', {
            name: L.name,
          }),
          onClose: z,
          children: (0, I.jsxs)(o.default, {
            testID: 'recipe-make-sheet',
            style: { gap: 14 },
            children: [
              (0, I.jsx)(x.Copy, {
                style: { fontSize: 15, fontFamily: 'Vazirmatn_700Bold' },
                children: (0, c.L)(
                  '\u0686\u0646\u062f \u062a\u0627 \u0633\u0627\u062e\u062a\u06cc\u061f',
                ),
              }),
              (0, I.jsx)(j.StepperRow, {
                testID: 'recipe-make-stepper',
                style: { gap: 12, justifyContent: 'center' },
                minus: Y('recipe-make-minus', '\u2212', () => U(!1), W <= 1),
                plus: Y('recipe-make-plus', '+', () => U(!0)),
                children: (0, I.jsx)(x.Input, {
                  testID: 'recipe-make-count',
                  ltr: !0,
                  value: B,
                  onChangeText: (e) => {
                    (q(e), O(!1));
                  },
                  keyboardType: 'decimal-pad',
                  inputMode: 'decimal',
                  selectTextOnFocus: !0,
                  style: {
                    width: 120,
                    fontSize: 26,
                    textAlign: 'center',
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                }),
              }),
              (0, I.jsx)(j.NumberLine, {
                style: { gap: 8, justifyContent: 'center', flexWrap: 'wrap' },
                children: E.map((e) =>
                  (0, I.jsx)(
                    n.default,
                    {
                      testID: 'recipe-make-chip-' + e,
                      accessibilityRole: 'button',
                      onPress: () => {
                        (q(String(e)), O(!1));
                      },
                      style: {
                        minHeight: 36,
                        paddingHorizontal: 14,
                        borderRadius: 18,
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: W === e ? _.accent : _.line,
                        backgroundColor: W === e ? _.accentSoft : _.surface,
                      },
                      children: (0, I.jsx)(x.Copy, {
                        style: { fontSize: 13 },
                        children: (0, u.formatGrouped)(e),
                      }),
                    },
                    e,
                  ),
                ),
              }),
              null !== A &&
                (0, I.jsx)(x.Copy, {
                  style: { fontSize: 12, color: _.muted, textAlign: 'center' },
                  children:
                    A > 0
                      ? (0, c.L)(
                          '\u0628\u0627 \u0645\u0648\u0627\u062f \u0645\u0648\u062c\u0648\u062f \u062a\u0627 {n} \u062a\u0627 \u0645\u06cc\u200c\u0634\u0648\u062f \u0633\u0627\u062e\u062a',
                          { n: (0, u.formatGrouped)(A) },
                        )
                      : (0, c.L)(
                          '\u0628\u0627 \u0645\u0648\u0627\u062f \u0645\u0648\u062c\u0648\u062f \u0641\u0639\u0644\u0627\u064b \u0646\u0645\u06cc\u200c\u0634\u0648\u062f \u0633\u0627\u062e\u062a',
                        ),
                }),
              W > 0 &&
                (0, I.jsxs)(o.default, {
                  testID: 'recipe-make-uses',
                  style: {
                    gap: 6,
                    padding: 12,
                    borderRadius: 14,
                    backgroundColor: _.soft,
                  },
                  children: [
                    (0, I.jsx)(x.Copy, {
                      style: { fontSize: 13, color: _.muted },
                      children: (0, c.L)(
                        '\u0627\u0632 \u0627\u0646\u0628\u0627\u0631 \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f:',
                      ),
                    }),
                    L.lines.map((e) => {
                      const t = (0, s.lineNeed)(e, W, L.yield),
                        n = V.find((t) => t.ingredientId === e.ingredientId);
                      return (0, I.jsxs)(
                        o.default,
                        {
                          style: {
                            flexDirection: 'row-reverse',
                            justifyContent: 'space-between',
                            gap: 8,
                          },
                          children: [
                            (0, I.jsx)(x.Copy, {
                              style: {
                                flex: 1,
                                fontSize: 14,
                                color: n ? _.danger : _.text,
                              },
                              children: e.name,
                            }),
                            (0, I.jsx)(x.Copy, {
                              style: {
                                fontSize: 14,
                                color: n ? _.danger : _.text,
                              },
                              children: S(t) + ' ' + (0, f.unitName)(e.unit),
                            }),
                          ],
                        },
                        e.ingredientId,
                      );
                    }),
                    K &&
                      (0, I.jsx)(x.Copy, {
                        testID: 'recipe-make-cost',
                        style: { fontSize: 12, color: _.muted },
                        children: (0, c.L)(
                          '\u0647\u0632\u06cc\u0646\u0647\u0654 \u0627\u06cc\u0646 \u0633\u0627\u062e\u062a: {amount}',
                          { amount: (0, y.money)(Math.round(Q.total * W)) },
                        ),
                      }),
                  ],
                }),
              !!V.length &&
                (0, I.jsxs)(o.default, {
                  testID: 'recipe-make-short',
                  style: {
                    gap: 8,
                    padding: 12,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderColor: _.warningBorder,
                    backgroundColor: _.warningSoft,
                  },
                  children: [
                    V.map((e) =>
                      (0, I.jsx)(
                        x.Copy,
                        {
                          style: { fontSize: 14, lineHeight: 22 },
                          children: v(e),
                        },
                        e.ingredientId,
                      ),
                    ),
                    N
                      ? (0, I.jsx)(x.Copy, {
                          testID: 'recipe-make-listed',
                          style: { color: _.accent },
                          children: (0, c.L)(
                            '\u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f \u0627\u0636\u0627\u0641\u0647 \u0634\u062f \u2713',
                          ),
                        })
                      : (0, I.jsx)(x.Button, {
                          testID: 'recipe-make-tobuy',
                          secondary: !0,
                          onPress: () => {
                            J();
                          },
                          children: (0, c.L)(
                            '\u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
                          ),
                        }),
                  ],
                }),
              !!G &&
                (0, I.jsx)(x.Copy, {
                  accessibilityRole: 'alert',
                  style: { color: _.danger },
                  children: G,
                }),
              (0, I.jsx)(x.Button, {
                testID: 'recipe-make-save',
                disabled: !(W > 0) || F,
                onPress: () => {
                  X();
                },
                children:
                  W > 0
                    ? (0, c.L)(
                        '\u062b\u0628\u062a \u0633\u0627\u062e\u062a {n} \u0639\u062f\u062f',
                        { n: (0, u.formatGrouped)(W) },
                      )
                    : (0, c.L)('\u062b\u0628\u062a \u0633\u0627\u062e\u062a'),
              }),
            ],
          }),
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      s = r(d[3]),
      l = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      y = r(d[7]),
      p = r(d[8]),
      m = r(d[9]),
      h = r(d[10]),
      f = r(d[11]),
      x = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      C = r(d[15]),
      k = r(d[16]),
      I = r(d[17]);
    const S = (e) => (0, u.formatGrouped)(Math.round(1e3 * e) / 1e3);
    function v(e) {
      return (0, c.L)(
        '{name} \u06a9\u0645 \u0627\u0633\u062a\u061b {quantity} {unit} \u062f\u06cc\u06af\u0631 \u0644\u0627\u0632\u0645',
        { name: e.name, quantity: S(e.short), unit: (0, f.unitName)(e.unit) },
      );
    }
  },
  980,
  [
    2, 232, 99, 978, 431, 311, 434, 435, 415, 519, 613, 585, 407, 539, 617, 779,
    382, 338,
  ],
);
