// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 694; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ProductSuggest = function ({
        products: e,
        value: b,
        productId: y,
        draft: h,
        onPick: j,
        attached: x = !1,
        showCreate: C = !0,
      }) {
        const { colors: S } = (0, n.useTheme)(),
          v = (0, l.suggestProducts)(e, b),
          P = y ? e.find((e) => e.id === y) : void 0,
          L = { products: e, movements: [] },
          w = h ? (0, l.tryPreviewBalance)(L, h) : void 0,
          k =
            w &&
            'after' in w &&
            (w.after < 0 || (w.isNew && 'sold' === h?.kind));
        return (0, p.jsxs)(t.default, {
          style: { gap: 6 },
          children: [
            !!b.trim() &&
              !P &&
              (C || v.length > 0) &&
              (0, p.jsxs)(t.default, {
                style: {
                  borderWidth: 1,
                  borderColor: S.line,
                  borderRadius: 12,
                  borderTopLeftRadius: x ? 0 : 12,
                  borderTopRightRadius: x ? 0 : 12,
                  marginTop: x ? -1 : 0,
                  overflow: 'hidden',
                },
                children: [
                  v.map((e) =>
                    (0, p.jsxs)(
                      o.default,
                      {
                        accessibilityRole: 'button',
                        onPress: () => j(e),
                        style: [
                          u.common.between,
                          {
                            paddingHorizontal: 12,
                            paddingVertical: 9,
                            borderBottomWidth: 1,
                            borderColor: S.line,
                            backgroundColor: S.surface,
                          },
                        ],
                        children: [
                          (0, p.jsx)(u.Copy, {
                            numberOfLines: 1,
                            style: { flex: 1 },
                            children: e.name,
                          }),
                          (0, p.jsx)(u.Copy, {
                            style: { fontSize: 11, color: S.muted },
                            children:
                              0 !== e.stock
                                ? s.fa.currentStock.replace(
                                    '{count}',
                                    e.stock.toLocaleString(
                                      (0, f.numberLocale)(),
                                    ),
                                  )
                                : (0, f.L)(c.OUT_OF_STOCK),
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                  C &&
                    (0, p.jsx)(o.default, {
                      testID: 'create-new-product',
                      accessibilityRole: 'button',
                      onPress: () => j(void 0),
                      style: {
                        paddingHorizontal: 12,
                        paddingVertical: 10,
                        backgroundColor: S.soft,
                      },
                      children: (0, p.jsx)(u.Copy, {
                        style: { fontSize: 12 },
                        children: s.fa.createNewProduct.replace(
                          '{name}',
                          b.trim(),
                        ),
                      }),
                    }),
                ],
              }),
            P &&
              (0, p.jsxs)(t.default, {
                style: u.common.between,
                children: [
                  (0, p.jsx)(u.Copy, {
                    style: { fontSize: 11, color: S.muted },
                    children: s.fa.selectedProduct,
                  }),
                  (0, p.jsx)(o.default, {
                    accessibilityRole: 'button',
                    onPress: () => j(void 0),
                    children: (0, p.jsx)(u.Copy, {
                      style: { fontSize: 11, color: S.muted },
                      children: s.fa.changeProduct,
                    }),
                  }),
                  (0, p.jsx)(u.Copy, {
                    style: { fontSize: 11 },
                    children: s.fa.currentStock.replace(
                      '{count}',
                      P.stock.toLocaleString((0, f.numberLocale)()),
                    ),
                  }),
                ],
              }),
            w &&
              ('error' in w
                ? (0, p.jsx)(u.Copy, {
                    accessibilityRole: 'alert',
                    style: { fontSize: 11, color: S.danger },
                    children: s.fa.productChanged,
                  })
                : !k &&
                  (0, p.jsx)(u.Copy, {
                    testID: 'balance-preview',
                    style: { fontSize: 12, color: S.muted },
                    children: s.fa.balancePreview
                      .replace(
                        '{before}',
                        w.before.toLocaleString((0, f.numberLocale)()),
                      )
                      .replace(
                        '{after}',
                        w.after.toLocaleString((0, f.numberLocale)()),
                      ),
                  })),
          ],
        });
      }));
    var o = e(r(d[0])),
      t = e(r(d[1])),
      l = r(d[2]),
      n = r(d[3]),
      c = r(d[4]),
      s = r(d[5]),
      u = r(d[6]),
      f = r(d[7]),
      p = r(d[8]);
  },
  694,
  [232, 99, 439, 382, 433, 492, 407, 311, 338],
);
