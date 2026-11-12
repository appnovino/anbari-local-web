// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 790; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useReceiptOffer = C),
      (_e.ReceiptPhotoPrompt = function ({
        shop: e,
        floating: D = !1,
        testID: z = 'receipt-photo-prompt',
        pick: R = x.pickInvoicePhoto,
      }) {
        const { colors: v } = (0, u.useTheme)(),
          P = C(e?.id),
          [O, _] = (0, t.useState)(!1),
          [$, k] = (0, t.useState)(!1),
          [H, A] = (0, t.useState)(''),
          [F, W] = (0, t.useState)(null);
        if (
          ((0, t.useEffect)(() => {
            (A(''), F && P?.purchaseId !== F.purchaseId && W(null));
          }, [P?.purchaseId]),
          !P || !e)
        )
          return null;
        const N = F?.purchaseId === P.purchaseId ? F : null;
        async function B(t) {
          (_(!1), A(''), k(!0));
          try {
            const o = await R(t);
            if (!o || !e || !P) return;
            const s = await (0, j.addPurchasePhoto)(e, P.purchaseId, o.dataUrl);
            (W({
              purchaseId: s.id,
              receiptNo: s.receiptNo,
              url: s.photos[s.photos.length - 1]?.url,
              count: s.photoCount,
            }),
              S.receiptOffer.photoAdded(s.id, s.photoCount));
          } catch (e) {
            A((0, I.invoicePhotoError)(e));
          } finally {
            k(!1);
          }
        }
        const E = D
          ? {
              shadowColor: '#000',
              shadowOpacity: 0.15,
              shadowRadius: 14,
              shadowOffset: { width: 0, height: 6 },
              elevation: 6,
            }
          : null;
        return (0, L.jsxs)(l.default, {
          testID: z,
          accessibilityLiveRegion: 'polite',
          style: [
            {
              gap: 10,
              padding: 12,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: N ? v.success : v.accent,
              backgroundColor: v.surface,
            },
            E,
          ],
          children: [
            (0, L.jsxs)(l.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'flex-start',
                gap: 10,
              },
              children: [
                (0, L.jsx)(l.default, {
                  style: {
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: N ? v.success + '1f' : v.accentSoft,
                  },
                  children: (0, L.jsx)(f.Icon, {
                    name: N ? 'check' : 'receipt',
                    size: 19,
                    color: N ? v.success : v.accent,
                  }),
                }),
                (0, L.jsx)(l.default, {
                  style: { flex: 1, minWidth: 0, gap: 2 },
                  children: N
                    ? (0, L.jsxs)(L.Fragment, {
                        children: [
                          (0, L.jsx)(h.Copy, {
                            testID: `${z}-saved`,
                            style: {
                              fontSize: 14,
                              lineHeight: 22,
                              fontFamily: 'Vazirmatn_700Bold',
                            },
                            children:
                              N.count > 1
                                ? (0, c.L)(
                                    '{n} \u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0631\u0648\u06cc \u0631\u0633\u06cc\u062f \u062e\u0631\u06cc\u062f {no} \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f',
                                    {
                                      n: w(N.count),
                                      no: (0, c.localDigits)(
                                        String(N.receiptNo),
                                      ),
                                    },
                                  )
                                : (0, c.L)(
                                    '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0631\u0648\u06cc \u0631\u0633\u06cc\u062f \u062e\u0631\u06cc\u062f {no} \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f',
                                    {
                                      no: (0, c.localDigits)(
                                        String(N.receiptNo),
                                      ),
                                    },
                                  ),
                          }),
                          (0, L.jsx)(h.Copy, {
                            style: {
                              fontSize: 12.5,
                              lineHeight: 20,
                              color: v.muted,
                            },
                            children: (0, c.L)(
                              '\u062f\u0631 \xab\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u062b\u0628\u062a\u200c\u0634\u062f\u0647\xbb\u060c \u0628\u062e\u0634 \xab\u062e\u0631\u06cc\u062f\xbb \u067e\u06cc\u062f\u0627\u06cc\u0634 \u0645\u06cc\u200c\u06a9\u0646\u06cc.',
                            ),
                          }),
                        ],
                      })
                    : (0, L.jsxs)(L.Fragment, {
                        children: [
                          (0, L.jsx)(h.Copy, {
                            numberOfLines: 2,
                            style: {
                              fontSize: 12.5,
                              lineHeight: 20,
                              color: v.muted,
                            },
                            children: (0, S.offerTitle)(P),
                          }),
                          (0, L.jsx)(h.Copy, {
                            testID: `${z}-text`,
                            style: {
                              fontSize: 14.5,
                              lineHeight: 23,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: (0, c.L)(
                              '\u0627\u06af\u0631 \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0641\u0627\u06a9\u062a\u0648\u0631 \u062f\u0627\u0631\u0646\u060c \u0647\u0645\u06cc\u0646 \u0627\u0644\u0627\u0646 \u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0631\u0648 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646',
                            ),
                          }),
                        ],
                      }),
                }),
                (0, L.jsx)(s.default, {
                  testID: `${z}-close`,
                  accessibilityRole: 'button',
                  accessibilityLabel: (0, c.L)('\u0628\u0633\u062a\u0646'),
                  hitSlop: 8,
                  onPress: () => S.receiptOffer.close(),
                  style: ({ pressed: e }) => ({
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: e ? v.soft : 'transparent',
                  }),
                  children: (0, L.jsx)(f.Icon, {
                    name: 'close',
                    size: 16,
                    color: v.muted,
                  }),
                }),
              ],
            }),
            (0, L.jsxs)(l.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
              },
              children: [
                N?.url &&
                  (0, L.jsx)(l.default, {
                    testID: `${z}-thumb`,
                    style: { width: 44, borderRadius: 10, overflow: 'hidden' },
                    children: (0, L.jsx)(y.ProductPhoto, {
                      product: {
                        name: (0, c.L)(
                          '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                        ),
                        photo: N.url,
                      },
                      height: 44,
                    }),
                  }),
                (0, L.jsxs)(s.default, {
                  testID: `${z}-add`,
                  accessibilityRole: 'button',
                  accessibilityState: { disabled: $, busy: $ },
                  disabled: $,
                  onPress: () => _(!0),
                  style: ({ pressed: e }) => ({
                    flex: 1,
                    minWidth: 0,
                    height: 46,
                    borderRadius: 12,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                    paddingHorizontal: 12,
                    backgroundColor: N
                      ? e
                        ? v.line
                        : v.soft
                      : e
                        ? v.accentActive
                        : v.accent,
                    borderWidth: N ? n.default.hairlineWidth : 0,
                    borderColor: v.line,
                    opacity: $ ? 0.7 : 1,
                  }),
                  children: [
                    $
                      ? (0, L.jsx)(o.default, {
                          size: 'small',
                          color: N ? v.text : v.onAccent,
                        })
                      : (0, L.jsx)(f.Icon, {
                          name: 'camera',
                          size: 18,
                          color: N ? v.text : v.onAccent,
                        }),
                    (0, L.jsx)(h.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 14.5,
                        lineHeight: 22,
                        color: N ? v.text : v.onAccent,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: $
                        ? (0, c.L)(
                            '\u062f\u0631 \u062d\u0627\u0644 \u0641\u0631\u0633\u062a\u0627\u062f\u0646 \u0639\u06a9\u0633\u2026',
                          )
                        : N
                          ? (0, c.L)(
                              '\u0639\u06a9\u0633 \u0635\u0641\u062d\u0647\u0654 \u0628\u0639\u062f',
                            )
                          : (0, c.L)(
                              '\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                            ),
                    }),
                  ],
                }),
              ],
            }),
            !!H &&
              (0, L.jsx)(h.Copy, {
                testID: `${z}-error`,
                accessibilityRole: 'alert',
                style: { fontSize: 13, lineHeight: 21, color: v.danger },
                children: H,
              }),
            (0, L.jsx)(p.Sheet, {
              visible: O,
              title: (0, c.L)(
                '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
              ),
              onClose: () => _(!1),
              children: (0, L.jsxs)(l.default, {
                style: { gap: 4 },
                children: [
                  (0, L.jsx)(b.SheetRow, {
                    testID: `${z}-camera`,
                    icon: 'camera',
                    title: (0, c.L)('\u062f\u0648\u0631\u0628\u06cc\u0646'),
                    hint: (0, c.L)(
                      '\u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0627\u0632 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0639\u06a9\u0633 \u0628\u06af\u06cc\u0631',
                    ),
                    onPress: () => {
                      B(!0);
                    },
                  }),
                  (0, L.jsx)(b.SheetRow, {
                    testID: `${z}-gallery`,
                    icon: 'photo',
                    title: (0, c.L)(
                      '\u0627\u0632 \u06af\u0627\u0644\u0631\u06cc',
                    ),
                    hint: (0, c.L)(
                      '\u0639\u06a9\u0633\u06cc \u06a9\u0647 \u0642\u0628\u0644\u0627\u064b \u06af\u0631\u0641\u062a\u0647\u200c\u0627\u06cc',
                    ),
                    onPress: () => {
                      B(!1);
                    },
                  }),
                ],
              }),
            }),
          ],
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      s = e(r(d[2])),
      n = e(r(d[3])),
      l = e(r(d[4])),
      c = r(d[5]),
      u = r(d[6]),
      h = r(d[7]),
      f = r(d[8]),
      p = r(d[9]),
      y = r(d[10]),
      x = r(d[11]),
      b = r(d[12]),
      j = r(d[13]),
      I = r(d[14]),
      S = r(d[15]),
      L = r(d[16]);
    function C(e) {
      const [o, s] = (0, t.useState)(() => S.receiptOffer.get());
      return (
        (0, t.useEffect)(() => S.receiptOffer.subscribe(s), []),
        o && o.shopId === e ? o : null
      );
    }
    const w = (e) => e.toLocaleString((0, c.numberLocale)());
  },
  790,
  [
    2, 217, 232, 17, 99, 311, 382, 407, 385, 539, 628, 634, 517, 519, 791, 792,
    338,
  ],
);
