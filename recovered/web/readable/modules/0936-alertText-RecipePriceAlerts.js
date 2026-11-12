// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 936; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.alertText = h),
      (_e.RecipePriceAlerts = function ({ shop: e }) {
        const { colors: f } = (0, a.useTheme)(),
          [y, x] = (0, t.useState)([]);
        return (
          (0, t.useEffect)(() => {
            let t = !0;
            return (
              (0, l.getRecipeAlerts)(e).then(
                (n) => {
                  if (t) {
                    x(n);
                    for (const t of n)
                      (0, l.markRecipeAlertSeen)(e, t.id).catch(() => {});
                  }
                },
                () => {},
              ),
              () => {
                t = !1;
              }
            );
          }, [e.id]),
          y.length
            ? (0, p.jsx)(o.default, {
                testID: 'recipe-price-alerts',
                style: { gap: 8 },
                children: y
                  .slice(0, 3)
                  .map((e) =>
                    (0, p.jsxs)(
                      o.default,
                      {
                        testID: 'recipe-price-alert-' + e.id,
                        style: {
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 10,
                          padding: 12,
                          borderRadius: 16,
                          borderWidth: 1,
                          borderColor: f.warningBorder,
                          backgroundColor: f.warningSoft,
                        },
                        children: [
                          (0, p.jsx)(c.Icon, {
                            name: 'bolt',
                            size: 18,
                            color: f.warning,
                          }),
                          (0, p.jsxs)(o.default, {
                            style: { flex: 1, gap: 2 },
                            children: [
                              (0, p.jsx)(s.Copy, {
                                style: {
                                  fontSize: 14,
                                  lineHeight: 22,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: h(e),
                              }),
                              (0, p.jsx)(s.Copy, {
                                style: { fontSize: 12, color: f.muted },
                                children: (0, u.L)(
                                  '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646.',
                                ),
                              }),
                            ],
                          }),
                          (0, p.jsx)(n.default, {
                            accessibilityRole: 'button',
                            onPress: () =>
                              x((t) => t.filter((t) => t.id !== e.id)),
                            style: {
                              minHeight: 40,
                              paddingHorizontal: 8,
                              justifyContent: 'center',
                            },
                            children: (0, p.jsx)(s.Copy, {
                              style: { fontSize: 13, color: f.accent },
                              children: (0, u.L)('\u062f\u06cc\u062f\u0645'),
                            }),
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
              })
            : null
        );
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      l = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      a = r(d[6]),
      u = r(d[7]),
      f = r(d[8]),
      p = r(d[9]);
    function h(e) {
      return (0, u.L)(
        '{ingredient} \u06af\u0631\u0627\u0646 \u0634\u062f\u061b \u0647\u0632\u06cc\u0646\u0647\u0654 {product} {before} \u2190 {after}',
        {
          ingredient: e.ingredientName,
          product: e.productName,
          before: (0, f.formatGrouped)(Math.round(e.oldUnitCost)),
          after: (0, f.formatGrouped)(Math.round(e.newUnitCost)),
        },
      );
    }
  },
  936,
  [2, 232, 99, 519, 407, 385, 382, 311, 434, 338],
);
