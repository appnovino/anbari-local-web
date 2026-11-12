// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 972; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.rankBigButtonProducts = p),
      (_e.BigButtons = function ({ products: e, movements: h, onAdd: b }) {
        const { colors: y } = (0, a.useTheme)(),
          x = p(e, h);
        return x.length
          ? (0, f.jsxs)(o.default, {
              style: { gap: 6 },
              children: [
                (0, f.jsx)(l.Copy, {
                  style: { fontSize: 13, fontFamily: 'Vazirmatn_600SemiBold' },
                  children: c.notebookW5Fa.topItems,
                }),
                (0, f.jsx)(n.ScrollView, {
                  horizontal: !0,
                  ...u.noSwipe,
                  showsHorizontalScrollIndicator: !1,
                  keyboardShouldPersistTaps: 'handled',
                  contentContainerStyle: {
                    flexDirection: 'row-reverse',
                    gap: 8,
                    flexGrow: 1,
                  },
                  children: x.map((e) =>
                    (0, f.jsxs)(
                      t.default,
                      {
                        testID: 'big-product-' + e.id,
                        accessibilityRole: 'button',
                        onPress: () => b(e),
                        style: ({ pressed: e }) => ({
                          width: 104,
                          padding: 6,
                          gap: 4,
                          borderRadius: 14,
                          borderWidth: 1,
                          borderColor: y.line,
                          backgroundColor: e ? y.soft : y.surface,
                        }),
                        children: [
                          (0, f.jsx)(s.ProductPhoto, {
                            product: e,
                            height: 44,
                          }),
                          (0, f.jsx)(l.Copy, {
                            numberOfLines: 1,
                            style: { fontSize: 11, textAlign: 'center' },
                            children: e.name,
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            })
          : null;
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      n = r(d[2]),
      s = r(d[3]),
      l = r(d[4]),
      a = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      f = r(d[8]);
    function p(e, t, o = 12) {
      const n = new Map();
      for (const e of t)
        'sold' === e.kind && n.set(e.productId, (n.get(e.productId) || 0) + 1);
      return e
        .filter((e) => !e.archivedAt)
        .sort(
          (e, t) =>
            (n.get(t.id) || 0) - (n.get(e.id) || 0) ||
            Number('made' === t.kind) - Number('made' === e.kind) ||
            e.name.localeCompare(t.name, 'fa'),
        )
        .slice(0, o);
    }
  },
  972,
  [232, 99, 380, 628, 407, 382, 580, 384, 338],
);
