// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 885; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'ADD_TILE', {
        enumerable: !0,
        get: function () {
          return C;
        },
      }),
      Object.defineProperty(_e, 'AddTileContext', {
        enumerable: !0,
        get: function () {
          return z;
        },
      }),
      (_e.StartInvoiceButton = function ({
        draftKey: e,
        products: n,
        onPress: C,
        onReceive: B,
        testID: D,
        refresh: I,
      }) {
        const H = (0, t.useContext)(z),
          { colors: S } = (0, f.useTheme)(),
          L = (0, b.useDesktop)(),
          [v, k] = (0, t.useState)(0),
          _ = (0, x.basketDraftKey)(e, 'sale'),
          [w, R] = (0, t.useState)(0),
          F = (0, x.basketDraftKey)(e, 'receive'),
          [O, P] = (0, t.useState)(0);
        if (
          ((0, t.useEffect)(() => {
            let e = !0;
            return (
              Promise.all([s.default.getItem(_), s.default.getItem(F)])
                .then(([t, l]) => {
                  e &&
                    (k((0, x.openCartCount)(t, n)),
                    R((0, x.openCartCount)(l, n)),
                    P((0, x.openCartTotal)(t, l, n)));
                })
                .catch(() => {}),
              () => {
                e = !1;
              }
            );
          }, [_, F, n, I]),
          B)
        ) {
          const e = (e, t, n) =>
              e > 0
                ? (0, j.jsx)(o.default, {
                    testID: t,
                    style: {
                      minWidth: 24,
                      paddingHorizontal: 7,
                      borderRadius: 12,
                      alignItems: 'center',
                      backgroundColor: n,
                    },
                    children: (0, j.jsx)(u.Copy, {
                      style: {
                        fontSize: 12,
                        lineHeight: 22,
                        color: S.onBrand === n ? S.brand[1] : S.onBrand,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: (0, y.localDigits)(e),
                    }),
                  })
                : null,
            t = (0, y.L)(
              '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0641\u0631\u0648\u0634',
            ),
            n = (0, y.L)(
              '\u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0631\u06cc\u062f',
            ),
            s = (0, j.jsx)(h.Spark, {
              radius: 16,
              style: { flex: 1, minWidth: 0 },
              children: (0, j.jsx)(l.default, {
                testID: D,
                accessibilityRole: 'button',
                accessibilityLabel:
                  v > 0
                    ? t +
                      '\u060c ' +
                      (0, y.L)(
                        '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u0628\u0627\u0632: {n}',
                        { n: (0, y.localDigits)(v) },
                      )
                    : t,
                onPress: C,
                style: {
                  minHeight: 52,
                  borderRadius: 16,
                  overflow: 'hidden',
                  backgroundColor: S.brand[1],
                },
                children: ({ pressed: n }) =>
                  (0, j.jsxs)(o.default, {
                    style: {
                      minHeight: 52,
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 8,
                      paddingHorizontal: 12,
                    },
                    children: [
                      (0, j.jsx)(h.BrandFill, { radius: 16, pressed: n }),
                      (0, j.jsx)(o.default, {
                        children: (0, j.jsx)(c.Icon, {
                          name: 'cart',
                          size: 19,
                          color: S.onBrand,
                        }),
                      }),
                      (0, j.jsx)(u.Copy, {
                        numberOfLines: 1,
                        style: {
                          flex: 1,
                          fontSize: 15,
                          lineHeight: 26,
                          color: S.onBrand,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: t,
                      }),
                      e(v, D + '-count', S.onBrand + '24'),
                    ],
                  }),
              }),
            }),
            f = (0, j.jsxs)(l.default, {
              testID: D + '-receive',
              accessibilityRole: 'button',
              accessibilityLabel:
                w > 0
                  ? n +
                    '\u060c ' +
                    (0, y.L)(
                      '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u0628\u0627\u0632: {n}',
                      { n: (0, y.localDigits)(w) },
                    )
                  : n,
              onPress: B,
              style: ({ pressed: e }) => ({
                flex: 1,
                minWidth: 0,
                minHeight: 52,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
                paddingHorizontal: 12,
                borderRadius: 16,
                borderWidth: 1.5,
                borderColor: S.accent,
                backgroundColor: e ? S.accentSoft : S.surface,
              }),
              children: [
                (0, j.jsx)(c.Icon, {
                  name: 'download',
                  size: 19,
                  color: S.accent,
                }),
                (0, j.jsx)(u.Copy, {
                  numberOfLines: 1,
                  style: {
                    flex: 1,
                    fontSize: 15,
                    lineHeight: 26,
                    color: S.accent,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: n,
                }),
                w > 0 &&
                  (0, j.jsx)(o.default, {
                    testID: D + '-receive-count',
                    style: {
                      minWidth: 24,
                      paddingHorizontal: 7,
                      borderRadius: 12,
                      alignItems: 'center',
                      backgroundColor: S.accentSoft,
                    },
                    children: (0, j.jsx)(u.Copy, {
                      style: {
                        fontSize: 12,
                        lineHeight: 22,
                        color: S.accent,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: (0, y.localDigits)(w),
                    }),
                  }),
              ],
            });
          return H
            ? (0, j.jsxs)(o.default, {
                testID: D + '-split',
                style: { flex: 1, minWidth: 0, minHeight: H, gap: 8 },
                children: [s, f],
              })
            : (0, j.jsxs)(o.default, {
                testID: D + '-split',
                style: [
                  { flexDirection: 'row-reverse', gap: 8 },
                  L
                    ? { alignSelf: 'flex-end', width: '100%', maxWidth: 520 }
                    : null,
                ],
                children: [s, f],
              });
        }
        const W = (0, y.L)(
            '\u0634\u0631\u0648\u0639 \u0641\u0627\u06a9\u062a\u0648\u0631',
          ),
          V =
            O > 0
              ? (0, y.L)(
                  '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u0628\u0627\u0632: {n}',
                  { n: (0, y.localDigits)(O) },
                )
              : '';
        return H
          ? (0, j.jsx)(h.Spark, {
              radius: 22,
              style: { flex: 1, minWidth: 0 },
              children: (0, j.jsx)(l.default, {
                testID: D,
                accessibilityRole: 'button',
                accessibilityLabel: V ? W + '\u060c ' + V : W,
                onPress: C,
                style: {
                  flex: 1,
                  minHeight: H,
                  borderRadius: 22,
                  overflow: 'hidden',
                  backgroundColor: S.brand[1],
                },
                children: ({ pressed: e }) =>
                  (0, j.jsxs)(o.default, {
                    style: {
                      flex: 1,
                      minHeight: H,
                      padding: 18,
                      justifyContent: 'space-between',
                      gap: 12,
                    },
                    children: [
                      (0, j.jsx)(h.BrandFill, { radius: 22, pressed: e }),
                      (0, j.jsxs)(o.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: 8,
                        },
                        children: [
                          (0, j.jsx)(o.default, {
                            style: {
                              width: 46,
                              height: 46,
                              borderRadius: 23,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: S.onBrand + '24',
                            },
                            children: (0, j.jsx)(c.Icon, {
                              name: 'cart',
                              size: 24,
                              color: S.onBrand,
                            }),
                          }),
                          !!V &&
                            (0, j.jsx)(o.default, {
                              testID: D + '-count',
                              style: {
                                paddingHorizontal: 10,
                                borderRadius: 10,
                                backgroundColor: S.onBrand + '1f',
                              },
                              children: (0, j.jsx)(u.Copy, {
                                numberOfLines: 1,
                                style: {
                                  fontSize: 12,
                                  lineHeight: 22,
                                  color: S.onBrand,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: V,
                              }),
                            }),
                        ],
                      }),
                      (0, j.jsx)(o.default, {
                        style: { gap: 2 },
                        children: (0, j.jsx)(u.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 20,
                            lineHeight: 32,
                            color: S.onBrand,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: W,
                        }),
                      }),
                    ],
                  }),
              }),
            })
          : (0, j.jsx)(h.Spark, {
              radius: 16,
              style: L
                ? { alignSelf: 'flex-end', width: '100%', maxWidth: 420 }
                : void 0,
              children: (0, j.jsx)(l.default, {
                testID: D,
                accessibilityRole: 'button',
                accessibilityLabel: V ? W + '\u060c ' + V : W,
                onPress: C,
                style: {
                  minHeight: 52,
                  borderRadius: 16,
                  overflow: 'hidden',
                  backgroundColor: S.brand[1],
                },
                children: ({ pressed: e }) =>
                  (0, j.jsxs)(o.default, {
                    style: {
                      minHeight: 52,
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 10,
                      paddingHorizontal: 16,
                    },
                    children: [
                      (0, j.jsx)(h.BrandFill, { radius: 16, pressed: e }),
                      (0, j.jsx)(o.default, {
                        children: (0, j.jsx)(c.Icon, {
                          name: 'cart',
                          size: 20,
                          color: S.onBrand,
                        }),
                      }),
                      (0, j.jsx)(u.Copy, {
                        numberOfLines: 1,
                        style: {
                          flex: 1,
                          fontSize: 16,
                          lineHeight: 26,
                          color: S.onBrand,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: W,
                      }),
                      !!V &&
                        (0, j.jsx)(o.default, {
                          testID: D + '-count',
                          style: {
                            paddingHorizontal: 10,
                            borderRadius: 10,
                            backgroundColor: S.onBrand + '1f',
                          },
                          children: (0, j.jsx)(u.Copy, {
                            numberOfLines: 1,
                            style: {
                              fontSize: 12,
                              lineHeight: 22,
                              color: S.onBrand,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: V,
                          }),
                        }),
                      L &&
                        (0, j.jsx)(p.KeyCap, {
                          tone: 'onBrand',
                          children: 'N',
                        }),
                    ],
                  }),
              }),
            });
      }));
    var t = r(d[0]),
      n = r(d[1]),
      l = e(r(d[2])),
      o = e(r(d[3])),
      s = e(r(d[4])),
      c = r(d[5]),
      u = r(d[6]),
      f = r(d[7]),
      h = r(d[8]),
      y = r(d[9]),
      x = r(d[10]),
      b = r(d[11]),
      p = r(d[12]),
      j = r(d[13]);
    const C = 112,
      z = (0, n.carryContext)((0, t.createContext)(0));
  },
  885,
  [2, 381, 232, 99, 258, 385, 407, 382, 410, 311, 886, 481, 531, 338],
);
