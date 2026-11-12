// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 816; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.canPrice = function (e) {
        if (!e) return !1;
        if ('owner' === e.role || 'manager' === e.role) return !0;
        const t = 'staff' === e.role ? e.access : null;
        return !(!t?.do.catalog || !t.see.sellPrice);
      }),
      (_e.canPriceCost = function (e) {
        if (!e) return !1;
        if ('owner' === e.role || 'manager' === e.role) return !0;
        const t = 'staff' === e.role ? e.access : null;
        return !(!t?.do.catalog || !t.see.buyPrice);
      }),
      (_e.PriceFixSheet = function ({
        shop: e,
        visible: p,
        lines: y,
        onAccount: j = !1,
        cost: C = !1,
        onSaved: P,
        onClose: S,
      }) {
        const { colors: I } = (0, a.useTheme)(),
          [v, w] = (0, t.useState)({}),
          [D, z] = (0, t.useState)({}),
          [_, H] = (0, t.useState)(''),
          U = { fontSize: 12, lineHeight: 18, color: I.muted };
        async function W(t) {
          if (!t.productId) return;
          H('');
          const n = Number(
            (0, u.latinDigits)(v[t.id] || '').replace(/[^0-9]/g, ''),
          );
          if (n > 0)
            try {
              (await b(e, t.productId, n, C),
                z((e) => ({ ...e, [t.id]: !0 })),
                P(t.productId, n));
            } catch (e) {
              H(
                (0, d.L)(
                  '\u0642\u06cc\u0645\u062a \xab{name}\xbb \u062b\u0628\u062a \u0646\u0634\u062f: {reason}',
                  { name: t.name, reason: (0, s.message)(e) },
                ),
              );
            }
          else
            H(
              C
                ? (0, d.L)(
                    '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \xab{name}\xbb \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u0639\u062f\u062f \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0635\u0641\u0631 \u0628\u0627\u0634\u062f.',
                    { name: t.name },
                  )
                : (0, d.L)(
                    '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \xab{name}\xbb \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u0639\u062f\u062f \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0635\u0641\u0631 \u0628\u0627\u0634\u062f.',
                    { name: t.name },
                  ),
            );
        }
        return (0, L.jsx)(c.Sheet, {
          visible: p,
          title: C
            ? (0, d.L)(
                '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631',
              )
            : (0, d.L)(
                '\u0642\u06cc\u0645\u062a\u200c\u06af\u0630\u0627\u0631\u06cc \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631',
              ),
          onClose: S,
          children: (0, L.jsxs)(o.default, {
            testID: 'receipt-price-fix',
            style: { gap: 8 },
            children: [
              (0, L.jsx)(l.Copy, {
                style: { fontSize: 13, lineHeight: 22, color: I.warning },
                children: C
                  ? (0, d.L)(
                      '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u062b\u0628\u062a \u0634\u062f\u0647\u200c\u0627\u0646\u062f\u061b \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0647\u0631 \u0648\u0627\u062d\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633. \u0631\u0648\u06cc \u062e\u0648\u062f \u06a9\u0627\u0644\u0627 \u0647\u0645 \u0630\u062e\u06cc\u0631\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                    )
                  : (0, d.L)(
                      '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u062e\u062a\u0647 \u0634\u062f\u0647\u200c\u0627\u0646\u062f\u061b \u062a\u0627 \u0642\u06cc\u0645\u062a\u0634\u0627\u0646 \u0631\u0627 \u0646\u06af\u0630\u0627\u0631\u06cc\u060c \u0645\u0628\u0644\u063a \u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0648 \u0641\u0631\u0648\u0634 \u0622\u0646 \u0631\u0648\u0632 \u06a9\u0627\u0645\u0644 \u0646\u06cc\u0633\u062a.',
                    ),
              }),
              j &&
                (0, L.jsx)(l.Copy, {
                  testID: 'receipt-price-fix-account',
                  style: { fontSize: 12.5, lineHeight: 21, color: I.muted },
                  children: C
                    ? (0, d.L)(
                        '\u0627\u06cc\u0646 \u062e\u0631\u06cc\u062f \u0631\u0648\u06cc \u062d\u0633\u0627\u0628 \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u062b\u0628\u062a \u0634\u062f\u0647\u061b \u0645\u0628\u0644\u063a \u0627\u06cc\u0646 \u0631\u062f\u06cc\u0641 \u0628\u0647 \u062d\u0633\u0627\u0628 \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f (\xab\u0642\u06cc\u0645\u062a\u200c\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0631\u06cc\u062f\xbb \u062f\u0631 \u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628).',
                      )
                    : (0, d.L)(
                        '\u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0631\u0648\u06cc \u062d\u0633\u0627\u0628 \u0634\u062e\u0635 \u062b\u0628\u062a \u0634\u062f\u0647\u061b \u0642\u06cc\u0645\u062a \u0631\u0648\u06cc \u06a9\u0627\u0644\u0627 \u0645\u06cc\u200c\u0646\u0634\u06cc\u0646\u062f \u0648 \u0641\u0631\u0648\u0634\u200c\u0647\u0627\u06cc \u0628\u0639\u062f\u06cc \u0631\u0627 \u062f\u0631\u0633\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f\u060c \u0648\u0644\u06cc \u0645\u0628\u0644\u063a \u0647\u0645\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0648 \u062d\u0633\u0627\u0628 \u0634\u062e\u0635 \u0639\u0648\u0636 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                      ),
                }),
              y.map((e) => {
                const t = !!D[e.id];
                return (0, L.jsxs)(
                  o.default,
                  {
                    testID: 'receipt-price-fix-item',
                    style: {
                      gap: 8,
                      paddingHorizontal: 12,
                      paddingVertical: 10,
                      borderRadius: 12,
                      borderWidth: 1,
                      borderColor: I.line,
                      backgroundColor: I.surface,
                    },
                    children: [
                      (0, L.jsx)(o.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 8,
                        },
                        children: (0, L.jsxs)(o.default, {
                          style: { flex: 1, minWidth: 0 },
                          children: [
                            (0, L.jsx)(l.Copy, {
                              numberOfLines: 1,
                              style: {
                                fontSize: 14,
                                lineHeight: 22,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: e.name,
                            }),
                            (0, L.jsxs)(l.Copy, {
                              numberOfLines: 1,
                              style: U,
                              children: [
                                `${e.quantity.toLocaleString((0, d.numberLocale)())} ${x.notebookFa.units[e.unit || 'piece'] || e.unit || ''} ${C ? (0, d.L)('\u062e\u0631\u06cc\u062f') : (0, d.L)('\u0641\u0631\u0648\u0634')} \xb7 `,
                                (0, L.jsx)(l.Copy, {
                                  style: [
                                    U,
                                    { color: t ? I.success : I.warning },
                                  ],
                                  children: t
                                    ? (0, d.L)(
                                        '\u0642\u06cc\u0645\u062a \u062b\u0628\u062a \u0634\u062f',
                                      )
                                    : C
                                      ? (0, d.L)(
                                          '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0646\u062f\u0627\u0631\u062f',
                                        )
                                      : (0, d.L)(
                                          '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0646\u062f\u0627\u0631\u062f',
                                        ),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      !t &&
                        !!e.productId &&
                        (0, L.jsxs)(o.default, {
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 8,
                          },
                          children: [
                            (0, L.jsx)(o.default, {
                              style: { flex: 1, minWidth: 0 },
                              children: (0, L.jsx)(f.MoneyInput, {
                                value: v[e.id] || '',
                                placeholder: C
                                  ? (0, d.L)(
                                      '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0647\u0631 \u0648\u0627\u062d\u062f',
                                    )
                                  : (0, d.L)(
                                      '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0647\u0631 \u0648\u0627\u062d\u062f',
                                    ),
                                onChange: (t) =>
                                  w((n) => ({ ...n, [e.id]: t })),
                              }),
                            }),
                            (0, L.jsx)(h.SmallKey, {
                              testID: 'receipt-price-fix-save',
                              kind: 'primary',
                              label: (0, d.L)(
                                '\u062b\u0628\u062a \u0642\u06cc\u0645\u062a',
                              ),
                              disabled: !v[e.id],
                              onPress: () => W(e),
                            }),
                          ],
                        }),
                    ],
                  },
                  e.id,
                );
              }),
              !!_ &&
                (0, L.jsx)(l.Copy, {
                  accessibilityRole: 'alert',
                  style: { fontSize: 13, lineHeight: 21, color: I.danger },
                  children: _,
                }),
              (0, L.jsx)(o.default, {
                style: {
                  borderTopWidth: n.default.hairlineWidth,
                  borderColor: I.line,
                  paddingTop: 8,
                },
                children: (0, L.jsx)(h.SmallKey, {
                  testID: 'receipt-price-fix-done',
                  label: (0, d.L)('\u062a\u0645\u0627\u0645'),
                  onPress: S,
                }),
              }),
            ],
          }),
        });
      }));
    var t = r(_d[0]),
      n = e(r(_d[1])),
      o = e(r(_d[2])),
      s = r(_d[3]),
      l = r(_d[4]),
      c = r(_d[5]),
      a = r(_d[6]),
      d = r(_d[7]),
      u = r(_d[8]),
      p = r(_d[9]),
      f = r(_d[10]),
      h = r(_d[11]),
      y = r(_d[12]),
      x = r(_d[13]),
      L = r(_d[14]);
    async function b(e, t, n, o = !1) {
      const { product: l } = await (0, s.request)(
          (0, s.shopPath)(e, '/products/' + encodeURIComponent(t)),
        ),
        c = o
          ? (0, p.modelUpdateBody)(
              l,
              { costPrice: n },
              { price: 'price' in l, costPrice: !0 },
            )
          : (0, p.modelUpdateBody)(
              l,
              { price: n },
              { price: !0, costPrice: 'costPrice' in l },
            );
      await (0, s.request)(
        (0, s.shopPath)(e, '/products/' + encodeURIComponent(t)),
        'PUT',
        c,
        { key: (0, y.idempotencyKey)() },
      );
    }
  },
  816,
  [2, 17, 99, 415, 407, 539, 382, 311, 440, 817, 614, 517, 519, 580, 338],
);
