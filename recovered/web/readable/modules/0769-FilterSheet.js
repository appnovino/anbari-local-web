// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 769; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.FilterSheet = function ({
        visible: e,
        stock: C,
        expiringCount: S = 0,
        category: w,
        sort: L,
        sorts: _ = (0, c.catalogSorts)(),
        categories: k,
        brand: B = '',
        brands: D = [],
        onStock: z,
        onCategory: v,
        onBrand: P,
        onSort: F,
        onManage: H,
        onPriceAdjust: I,
        onClose: W,
      }) {
        const { colors: V } = (0, p.useTheme)(),
          A = (0, f.useSafeAreaInsets)(),
          [M, R] = (0, t.useState)(!1),
          $ = {
            newest: (0, h.L)(
              '\u062a\u0627\u0632\u0647\u200c\u062a\u0631\u06cc\u0646',
            ),
            priceDown: (0, h.L)(
              '\u0642\u06cc\u0645\u062a: \u0632\u06cc\u0627\u062f \u0628\u0647 \u06a9\u0645',
            ),
            stockDown: y.fa.sorts.stockDown,
            stockUp: y.fa.sorts.stockUp,
            name: y.fa.sorts.name,
          },
          T =
            M || D.length <= b ? D : D.filter((e, t) => t < b || e.brand === B),
          U = (e, t, o) =>
            (0, j.jsx)(
              n.default,
              {
                accessibilityRole: 'radio',
                accessibilityState: { selected: t },
                onPress: o,
                style: {
                  minHeight: 38,
                  paddingHorizontal: 13,
                  borderRadius: 12,
                  borderWidth: 1,
                  borderColor: t ? V.accentActive : V.line,
                  backgroundColor: t ? V.accent : V.surface,
                  justifyContent: 'center',
                },
                children: (0, j.jsx)(x.Copy, {
                  style: { fontSize: 12, color: t ? V.onAccent : V.text },
                  children: e,
                }),
              },
              e,
            );
        return (0, j.jsx)(s.Modal, {
          visible: e,
          transparent: !0,
          animationType: 'fade',
          onRequestClose: W,
          children: (0, j.jsxs)(o.default, {
            style: { flex: 1, alignItems: 'flex-end' },
            children: [
              (0, j.jsx)(u.Backdrop, {
                testID: 'filter-backdrop',
                color: '#08090b66',
                onClose: W,
              }),
              (0, j.jsx)(l.PullCard, {
                onClose: W,
                style: { flex: 1, width: '88%', maxWidth: 390, minHeight: 0 },
                children: (0, j.jsxs)(x.Card, {
                  testID: 'filter-sheet',
                  style: {
                    flex: 1,
                    minHeight: 0,
                    borderRadius: 0,
                    padding: 20,
                    paddingTop: A.top + 20,
                    paddingBottom: A.bottom + 8,
                    gap: 18,
                  },
                  children: [
                    (0, j.jsxs)(o.default, {
                      style: x.common.between,
                      children: [
                        (0, j.jsx)(x.Copy, {
                          style: x.common.title,
                          children: (0, h.L)(
                            '\u0641\u06cc\u0644\u062a\u0631\u0647\u0627',
                          ),
                        }),
                        (0, j.jsx)(x.Button, {
                          secondary: !0,
                          onPress: W,
                          children: (0, h.L)('\u0628\u0633\u062a\u0646'),
                        }),
                      ],
                    }),
                    (0, j.jsxs)(i.ScrollView, {
                      style: { flex: 1, minHeight: 0 },
                      contentContainerStyle: {
                        gap: 20,
                        paddingBottom: 30,
                        paddingHorizontal: 4,
                      },
                      children: [
                        (0, j.jsxs)(o.default, {
                          testID: 'filter-sorts',
                          style: { gap: 9 },
                          children: [
                            (0, j.jsx)(x.Copy, {
                              style: { fontFamily: 'Vazirmatn_600SemiBold' },
                              children: (0, h.L)(
                                '\u0645\u0631\u062a\u0628\u200c\u0633\u0627\u0632\u06cc',
                              ),
                            }),
                            (0, j.jsx)(o.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                flexWrap: 'wrap',
                                gap: 8,
                              },
                              children: _.map((e) =>
                                U($[e], L === e, () => F(e)),
                              ),
                            }),
                          ],
                        }),
                        (0, j.jsxs)(o.default, {
                          style: { gap: 9 },
                          children: [
                            (0, j.jsx)(x.Copy, {
                              style: { fontFamily: 'Vazirmatn_600SemiBold' },
                              children: (0, h.L)(
                                '\u0648\u0636\u0639\u06cc\u062a \u0645\u0648\u062c\u0648\u062f\u06cc',
                              ),
                            }),
                            (0, j.jsxs)(o.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                flexWrap: 'wrap',
                                gap: 8,
                              },
                              children: [
                                ['all', 'out', 'noPrice'].map((e) =>
                                  U(y.fa.stockFilters[e], C === e, () => z(e)),
                                ),
                                (S > 0 || 'expiring' === C) &&
                                  U(
                                    `${y.fa.stockFilters.expiring} (${S.toLocaleString((0, h.numberLocale)())})`,
                                    'expiring' === C,
                                    () => z('expiring'),
                                  ),
                              ],
                            }),
                          ],
                        }),
                        P &&
                          D.length > 0 &&
                          (0, j.jsxs)(o.default, {
                            testID: 'filter-brands',
                            style: { gap: 9 },
                            children: [
                              (0, j.jsx)(x.Copy, {
                                style: { fontFamily: 'Vazirmatn_600SemiBold' },
                                children: (0, h.L)('\u0628\u0631\u0646\u062f'),
                              }),
                              (0, j.jsxs)(o.default, {
                                style: {
                                  flexDirection: 'row-reverse',
                                  flexWrap: 'wrap',
                                  gap: 8,
                                },
                                children: [
                                  U((0, h.L)('\u0647\u0645\u0647'), !B, () =>
                                    P(''),
                                  ),
                                  T.map((e) =>
                                    U(
                                      `${e.brand} (${e.count.toLocaleString((0, h.numberLocale)())})`,
                                      B === e.brand,
                                      () => P(e.brand),
                                    ),
                                  ),
                                  T.length < D.length &&
                                    U(
                                      (0, h.L)(
                                        '\u0628\u06cc\u0634\u062a\u0631\u2026',
                                      ),
                                      !1,
                                      () => R(!0),
                                    ),
                                ],
                              }),
                            ],
                          }),
                        (0, j.jsxs)(o.default, {
                          style: { gap: 9 },
                          children: [
                            (0, j.jsx)(x.Copy, {
                              style: { fontFamily: 'Vazirmatn_600SemiBold' },
                              children: (0, h.L)(
                                '\u062f\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc',
                              ),
                            }),
                            (0, j.jsxs)(o.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                flexWrap: 'wrap',
                                gap: 8,
                              },
                              children: [
                                U(y.fa.allCategories, !w, () => v('')),
                                k.map((e) => U(e, w === e, () => v(e))),
                                U(
                                  y.fa.uncategorized,
                                  '__uncategorized' === w,
                                  () => v('__uncategorized'),
                                ),
                              ],
                            }),
                            H &&
                              (0, j.jsx)(x.Button, {
                                secondary: !0,
                                onPress: H,
                                children: y.fa.manageCategories,
                              }),
                          ],
                        }),
                        I &&
                          (0, j.jsx)(x.Button, {
                            secondary: !0,
                            onPress: I,
                            children: (0, h.L)(
                              '\u062a\u063a\u06cc\u06cc\u0631 \u06af\u0631\u0648\u0647\u06cc \u0642\u06cc\u0645\u062a\u200c\u0647\u0627',
                            ),
                          }),
                      ],
                    }),
                  ],
                }),
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
      i = r(d[5]),
      c = r(d[6]),
      f = r(d[7]),
      p = r(d[8]),
      x = r(d[9]),
      u = r(d[10]),
      y = r(d[11]),
      h = r(d[12]),
      j = r(d[13]);
    const b = 8;
  },
  769,
  [2, 232, 99, 381, 515, 380, 701, 342, 382, 407, 533, 492, 311, 338],
);
