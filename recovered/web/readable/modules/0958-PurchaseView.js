// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 958; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PurchaseView = function ({
        shop: e,
        purchaseId: s,
        head: h,
        startAdding: R = !1,
        timeZone: T,
        onClose: V,
        onChange: B,
        pick: O = w.pickInvoicePhoto,
      }) {
        const { colors: W } = (0, y.useTheme)(),
          k = (0, u.useSafeAreaInsets)(),
          [F, M] = (0, S.useConfirm)(),
          [A, E] = (0, t.useState)(null),
          [K, N] = (0, t.useState)(''),
          [X, G] = (0, t.useState)(!1),
          [q, U] = (0, t.useState)(!1),
          [Z, J] = (0, t.useState)(''),
          [Q, Y] = (0, t.useState)(null),
          $ = (0, t.useRef)(0),
          ee = (0, t.useRef)(!1);
        async function te() {
          const t = ++$.current;
          N('');
          try {
            const o = await (0, P.getPurchaseView)(e, s);
            t === $.current && E(o);
          } catch (e) {
            t === $.current && N((0, H.invoicePhotoError)(e));
          }
        }
        (0, t.useEffect)(() => {
          (E(null), (ee.current = !1), te());
        }, [e.id, s]);
        const oe =
            (0, D.mayAddInvoicePhoto)(e) && !(A?.corrected ?? h?.corrected),
          ne = A?.photos || [],
          le = A?.photoCount ?? h?.photoCount ?? 0,
          ie = le >= D.MAX_INVOICE_PHOTOS;
        function se(e) {
          (E(e), B?.(e));
        }
        async function re(t) {
          (G(!1), J(''), U(!0));
          try {
            const o = await O(t);
            if (!o) return;
            (se(await (0, P.addPurchasePhoto)(e, s, o.dataUrl)),
              (0, C.showToast)(
                (0, p.L)(
                  '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0627\u0636\u0627\u0641\u0647 \u0634\u062f',
                ),
              ));
          } catch (e) {
            J((0, H.invoicePhotoError)(e));
          } finally {
            U(!1);
          }
        }
        (0, t.useEffect)(() => {
          R && A && !ee.current && ((ee.current = !0), oe && !ie && G(!0));
        }, [R, A]);
        const ae = A || h,
          de = ae
            ? (0, D.purchaseTitle)(ae)
            : (0, p.L)('\u062e\u0631\u06cc\u062f'),
          ce = (A?.lines || []).map((e) => ({
            line: e,
            text: (0, D.purchaseLine)(e),
          })),
          he = ce.filter((e) => !e.line.corrected),
          ue =
            A && void 0 !== A.totalToman && !he.some((e) => !e.text.priced)
              ? he.reduce((e, t) => e + (t.line.purchaseTotal ?? 0), 0)
              : void 0,
          pe = A ? (0, D.purchasePaid)(A) : '',
          ye = ae ? (0, D.purchaseBy)(ae) : '',
          ge = { fontSize: 12.5, lineHeight: 20, color: W.muted };
        return (0, v.jsxs)(i.default, {
          testID: 'purchase-view',
          style: {
            flex: 1,
            backgroundColor: W.bg,
            paddingTop: Math.max(14, k.top + 6),
          },
          children: [
            M,
            (0, v.jsxs)(i.default, {
              style: [
                f.common.between,
                { paddingHorizontal: 16, paddingBottom: 8 },
              ],
              children: [
                (0, v.jsx)(f.Copy, {
                  accessibilityRole: 'header',
                  numberOfLines: 1,
                  style: {
                    flexShrink: 1,
                    fontSize: 20,
                    lineHeight: 30,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: de,
                }),
                (0, v.jsx)(L.SmallKey, {
                  testID: 'purchase-close',
                  label: (0, p.L)('\u0628\u0633\u062a\u0646'),
                  onPress: V,
                }),
              ],
            }),
            (0, v.jsxs)(c.ScrollView, {
              contentContainerStyle: {
                width: '100%',
                maxWidth: 720,
                alignSelf: 'center',
                padding: 14,
                paddingTop: 4,
                gap: 14,
                paddingBottom: k.bottom + 32,
              },
              children: [
                ae &&
                  (0, v.jsxs)(f.Card, {
                    testID: 'purchase-head',
                    style: { gap: 4, padding: 16 },
                    children: [
                      (0, v.jsxs)(i.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 10,
                        },
                        children: [
                          (0, v.jsx)(i.default, {
                            style: {
                              width: 40,
                              height: 40,
                              borderRadius: 12,
                              alignItems: 'center',
                              justifyContent: 'center',
                              backgroundColor: W.success + '1f',
                            },
                            children: (0, v.jsx)(x.Icon, {
                              name: 'inventory',
                              size: 20,
                              color: W.success,
                            }),
                          }),
                          (0, v.jsxs)(i.default, {
                            style: { flex: 1, minWidth: 0 },
                            children: [
                              (0, v.jsx)(f.Copy, {
                                numberOfLines: 2,
                                style: {
                                  fontSize: 17,
                                  lineHeight: 27,
                                  fontFamily: 'Vazirmatn_700Bold',
                                },
                                children: (0, D.purchaseName)(ae),
                              }),
                              (0, v.jsx)(f.Copy, {
                                style: ge,
                                children: (0, D.purchaseWhen)(ae.occurredAt, T),
                              }),
                            ],
                          }),
                        ],
                      }),
                      !!ye &&
                        (0, v.jsx)(f.Copy, {
                          testID: 'purchase-by',
                          style: [ge, { paddingTop: 6 }],
                          children: ye,
                        }),
                      !!pe &&
                        (0, v.jsx)(f.Copy, {
                          style: [ge, { color: W.text }],
                          children: pe,
                        }),
                      !!ae.corrected &&
                        (0, v.jsx)(f.Copy, {
                          style: [ge, { color: W.danger }],
                          children: (0, p.L)(
                            '\u0627\u06cc\u0646 \u062e\u0631\u06cc\u062f \u0644\u063a\u0648 \u0634\u062f\u0647 \u0648 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u0634 \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a.',
                          ),
                        }),
                    ],
                  }),
                !!K &&
                  (0, v.jsxs)(i.default, {
                    style: { gap: 8 },
                    children: [
                      (0, v.jsx)(f.Copy, {
                        accessibilityRole: 'alert',
                        testID: 'purchase-error',
                        style: {
                          fontSize: 13,
                          lineHeight: 22,
                          color: W.danger,
                        },
                        children: (0, p.L)(
                          '\u062e\u0631\u06cc\u062f \u0628\u0627\u0632 \u0646\u0634\u062f: {reason}',
                          { reason: K },
                        ),
                      }),
                      (0, v.jsx)(L.SmallKey, {
                        testID: 'purchase-retry',
                        label: (0, p.L)(
                          '\u062a\u0644\u0627\u0634 \u062f\u0648\u0628\u0627\u0631\u0647',
                        ),
                        onPress: te,
                      }),
                    ],
                  }),
                !A &&
                  !K &&
                  (0, v.jsx)(o.default, {
                    color: W.accent,
                    style: { paddingVertical: 16 },
                  }),
                A &&
                  (0, v.jsxs)(i.default, {
                    testID: 'purchase-photos',
                    style: { gap: 8 },
                    children: [
                      (0, v.jsxs)(i.default, {
                        style: [
                          f.common.between,
                          { paddingHorizontal: 4, alignItems: 'baseline' },
                        ],
                        children: [
                          (0, v.jsx)(f.Copy, {
                            style: {
                              fontSize: 15,
                              lineHeight: 24,
                              fontFamily: 'Vazirmatn_700Bold',
                            },
                            children: (0, p.L)(
                              '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                            ),
                          }),
                          le > 0 &&
                            (0, v.jsx)(f.Copy, {
                              style: ge,
                              children: (0, p.L)('{n} \u0627\u0632 {max}', {
                                n: (0, p.localDigits)(String(le)),
                                max: (0, p.localDigits)(
                                  String(D.MAX_INVOICE_PHOTOS),
                                ),
                              }),
                            }),
                        ],
                      }),
                      ne.length > 0 &&
                        (0, v.jsx)(i.default, {
                          style: {
                            flexDirection: 'row-reverse',
                            flexWrap: 'wrap',
                            gap: 10,
                          },
                          children: ne.map((e, t) =>
                            (0, v.jsxs)(
                              n.default,
                              {
                                testID: 'purchase-photo',
                                accessibilityRole: 'imagebutton',
                                accessibilityLabel: (0, p.L)(
                                  '\u062f\u06cc\u062f\u0646 \u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631 {n} \u062f\u0631 \u0627\u0646\u062f\u0627\u0632\u0647\u0654 \u0628\u0632\u0631\u06af',
                                  { n: (0, p.localDigits)(String(t + 1)) },
                                ),
                                onPress: () => Y(t),
                                style: ({ pressed: e }) => ({
                                  width: '48%',
                                  flexGrow: 1 === ne.length ? 1 : 0,
                                  borderRadius: 14,
                                  borderWidth: l.default.hairlineWidth,
                                  borderColor: W.line,
                                  overflow: 'hidden',
                                  opacity: e ? 0.85 : 1,
                                }),
                                children: [
                                  (0, v.jsx)(b.ProductPhoto, {
                                    product: {
                                      name: (0, p.L)(
                                        '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                                      ),
                                      photo: e.url,
                                    },
                                    height: 1 === ne.length ? 300 : 180,
                                    fit: 'contain',
                                  }),
                                  ne.length > 1 &&
                                    (0, v.jsx)(i.default, {
                                      style: {
                                        position: 'absolute',
                                        top: 6,
                                        right: 6,
                                        paddingHorizontal: 8,
                                        borderRadius: 8,
                                        backgroundColor: W.surface,
                                      },
                                      children: (0, v.jsx)(f.Copy, {
                                        style: {
                                          fontSize: 11.5,
                                          lineHeight: 19,
                                          fontFamily: 'Vazirmatn_600SemiBold',
                                        },
                                        children: (0, p.L)(
                                          '\u0635\u0641\u062d\u0647\u0654 {n}',
                                          {
                                            n: (0, p.localDigits)(
                                              String(t + 1),
                                            ),
                                          },
                                        ),
                                      }),
                                    }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      !!A.photosHidden &&
                        (0, v.jsx)(f.Copy, {
                          testID: 'purchase-photos-hidden',
                          style: ge,
                          children: (0, p.L)(
                            '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0647\u0633\u062a\u061b \u062f\u06cc\u062f\u0646\u0634 \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u06a9\u0633\u06cc \u0627\u0633\u062a \u06a9\u0647 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u062f.',
                          ),
                        }),
                      oe &&
                        !ie &&
                        (ne.length
                          ? (0, v.jsx)(L.SmallKey, {
                              testID: 'purchase-photo-add',
                              icon: 'camera',
                              label: q
                                ? (0, p.L)(
                                    '\u062f\u0631 \u062d\u0627\u0644 \u0622\u0645\u0627\u062f\u0647 \u06a9\u0631\u062f\u0646 \u0639\u06a9\u0633\u2026',
                                  )
                                : (0, p.L)(
                                    '\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                                  ),
                              disabled: q,
                              onPress: () => G(!0),
                            })
                          : (0, v.jsxs)(n.default, {
                              testID: 'purchase-photo-add',
                              accessibilityRole: 'button',
                              accessibilityLabel: (0, p.L)(
                                '\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                              ),
                              accessibilityState: { disabled: q, busy: q },
                              disabled: q,
                              onPress: () => G(!0),
                              style: ({ pressed: e }) => ({
                                minHeight: 132,
                                borderRadius: 14,
                                borderWidth: 1.5,
                                borderStyle: 'dashed',
                                borderColor: W.accent,
                                backgroundColor: e ? W.accentSoft : W.soft,
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 6,
                                padding: 12,
                              }),
                              children: [
                                q
                                  ? (0, v.jsx)(o.default, { color: W.accent })
                                  : (0, v.jsx)(x.Icon, {
                                      name: 'camera',
                                      size: 28,
                                      color: W.accent,
                                    }),
                                (0, v.jsx)(f.Copy, {
                                  style: {
                                    fontSize: 15,
                                    lineHeight: 24,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: (0, p.L)(
                                    '\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                                  ),
                                }),
                                (0, v.jsx)(f.Copy, {
                                  style: [ge, { textAlign: 'center' }],
                                  children: q
                                    ? (0, p.L)(
                                        '\u062f\u0631 \u062d\u0627\u0644 \u0622\u0645\u0627\u062f\u0647 \u06a9\u0631\u062f\u0646 \u0639\u06a9\u0633\u2026',
                                      )
                                    : (0, p.L)(
                                        '\u0627\u0632 \u0641\u0627\u06a9\u062a\u0648\u0631 \u06a9\u0627\u063a\u0630\u06cc \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0639\u06a9\u0633 \u0628\u06af\u06cc\u0631\u06cc\u062f \u062a\u0627 \u0647\u0645\u06cc\u0646\u200c\u062c\u0627 \u0628\u0645\u0627\u0646\u062f.',
                                      ),
                                }),
                              ],
                            })),
                      oe &&
                        ie &&
                        (0, v.jsx)(f.Copy, {
                          style: ge,
                          children: (0, p.L)(
                            '\u0627\u06cc\u0646 \u062e\u0631\u06cc\u062f {max} \u0639\u06a9\u0633 \u062f\u0627\u0631\u062f \u0648 \u062c\u0627\u06cc \u0639\u06a9\u0633 \u062f\u06cc\u06af\u0631\u06cc \u0646\u06cc\u0633\u062a.',
                            {
                              max: (0, p.localDigits)(
                                String(D.MAX_INVOICE_PHOTOS),
                              ),
                            },
                          ),
                        }),
                      !oe &&
                        !ne.length &&
                        !A.photosHidden &&
                        (0, v.jsx)(f.Copy, {
                          style: ge,
                          children: (0, p.L)(
                            '\u0639\u06a9\u0633\u06cc \u0627\u0632 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0627\u06cc\u0646 \u062e\u0631\u06cc\u062f \u06af\u0630\u0627\u0634\u062a\u0647 \u0646\u0634\u062f\u0647.',
                          ),
                        }),
                      !!Z &&
                        (0, v.jsx)(f.Copy, {
                          testID: 'purchase-photo-error',
                          accessibilityRole: 'alert',
                          style: {
                            fontSize: 13,
                            lineHeight: 21,
                            color: W.danger,
                          },
                          children: Z,
                        }),
                    ],
                  }),
                A &&
                  (0, v.jsxs)(i.default, {
                    style: { gap: 8 },
                    children: [
                      (0, v.jsxs)(i.default, {
                        style: [
                          f.common.between,
                          { paddingHorizontal: 4, alignItems: 'baseline' },
                        ],
                        children: [
                          (0, v.jsx)(f.Copy, {
                            style: {
                              fontSize: 15,
                              lineHeight: 24,
                              fontFamily: 'Vazirmatn_700Bold',
                            },
                            children: (0, p.L)(
                              '\u06a9\u0627\u0644\u0627\u0647\u0627',
                            ),
                          }),
                          (0, v.jsx)(f.Copy, {
                            style: ge,
                            children: (0, p.L)('{n} \u0642\u0644\u0645', {
                              n: (0, p.localDigits)(String(A.lines.length)),
                            }),
                          }),
                        ],
                      }),
                      (0, v.jsxs)(f.Card, {
                        testID: 'purchase-lines',
                        style: { padding: 0, gap: 0 },
                        children: [
                          ce.map(({ line: e, text: t }, o) =>
                            (0, v.jsxs)(
                              i.default,
                              {
                                testID: 'purchase-line',
                                style: [
                                  f.common.row,
                                  {
                                    paddingHorizontal: 14,
                                    paddingVertical: 10,
                                    alignItems: 'flex-start',
                                    borderTopWidth: o
                                      ? l.default.hairlineWidth
                                      : 0,
                                    borderColor: W.line,
                                    opacity: e.corrected ? 0.55 : 1,
                                  },
                                ],
                                children: [
                                  (0, v.jsxs)(i.default, {
                                    style: { flex: 1, minWidth: 0 },
                                    children: [
                                      (0, v.jsx)(f.Copy, {
                                        style: {
                                          fontSize: 14.5,
                                          lineHeight: 23,
                                          fontFamily: 'Vazirmatn_600SemiBold',
                                          textDecorationLine: e.corrected
                                            ? 'line-through'
                                            : 'none',
                                        },
                                        children: e.name,
                                      }),
                                      (0, v.jsx)(f.Copy, {
                                        style: ge,
                                        children: t.amount,
                                      }),
                                    ],
                                  }),
                                  (0, v.jsx)(f.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      flexShrink: 0,
                                      fontSize: 14,
                                      lineHeight: 23,
                                      fontFamily: t.priced
                                        ? 'Vazirmatn_700Bold'
                                        : 'Vazirmatn_400Regular',
                                      color: t.priced ? W.text : W.warning,
                                    },
                                    children: t.total,
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                          void 0 !== ue &&
                            (0, v.jsxs)(i.default, {
                              style: [
                                f.common.between,
                                {
                                  paddingHorizontal: 14,
                                  paddingVertical: 12,
                                  borderTopWidth: l.default.hairlineWidth,
                                  borderColor: W.line,
                                  backgroundColor: W.soft,
                                },
                              ],
                              children: [
                                (0, v.jsx)(f.Copy, {
                                  style: {
                                    fontSize: 14,
                                    lineHeight: 22,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: (0, p.L)(
                                    '\u062c\u0645\u0639 \u062e\u0631\u06cc\u062f',
                                  ),
                                }),
                                (0, v.jsx)(f.Copy, {
                                  testID: 'purchase-total',
                                  style: {
                                    fontSize: 15,
                                    lineHeight: 24,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                  children: (0, z.invoiceTomanLong)(ue),
                                }),
                              ],
                            }),
                        ],
                      }),
                      he.some((e) => !e.text.priced) &&
                        void 0 !== A.totalToman &&
                        (0, v.jsx)(f.Copy, {
                          style: ge,
                          children: (0, p.L)(
                            '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0628\u0639\u0636\u06cc \u06a9\u0627\u0644\u0627\u0647\u0627 \u062b\u0628\u062a \u0646\u0634\u062f\u0647\u061b \u0627\u0632 \u0635\u0641\u062d\u0647\u0654 \u0647\u0645\u0627\u0646 \u06a9\u0627\u0644\u0627 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f \u062a\u0627 \u062c\u0645\u0639 \u062e\u0631\u06cc\u062f \u06a9\u0627\u0645\u0644 \u0634\u0648\u062f.',
                          ),
                        }),
                    ],
                  }),
                A &&
                  (0, v.jsx)(I.ReturnBlock, {
                    shop: e,
                    document: A,
                    onDone: () => {
                      te();
                    },
                  }),
              ],
            }),
            (0, v.jsx)(j.Sheet, {
              visible: X,
              title: (0, p.L)(
                '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
              ),
              onClose: () => G(!1),
              children: (0, v.jsxs)(i.default, {
                style: { gap: 4 },
                children: [
                  (0, v.jsx)(L.SheetRow, {
                    testID: 'purchase-photo-camera',
                    icon: 'camera',
                    title: (0, p.L)('\u062f\u0648\u0631\u0628\u06cc\u0646'),
                    hint: (0, p.L)(
                      '\u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0627\u0632 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0639\u06a9\u0633 \u0628\u06af\u06cc\u0631\u06cc\u062f',
                    ),
                    onPress: () => {
                      re(!0);
                    },
                  }),
                  (0, v.jsx)(L.SheetRow, {
                    testID: 'purchase-photo-gallery',
                    icon: 'photo',
                    title: (0, p.L)(
                      '\u0627\u0632 \u06af\u0627\u0644\u0631\u06cc',
                    ),
                    hint: (0, p.L)(
                      '\u0639\u06a9\u0633\u06cc \u06a9\u0647 \u0642\u0628\u0644\u0627\u064b \u06af\u0631\u0641\u062a\u0647\u200c\u0627\u06cc\u062f',
                    ),
                    onPress: () => {
                      re(!1);
                    },
                  }),
                ],
              }),
            }),
            (0, v.jsx)(_, {
              photos: ne,
              index: Q,
              onIndex: Y,
              canRemove: (t) =>
                !!ne[t] && (0, D.mayRemoveInvoicePhoto)(e, ne[t]),
              onRemove: function (t) {
                const o = ne[t];
                o &&
                  (Y(null),
                  F({
                    title: (0, p.L)(
                      '\u062d\u0630\u0641 \u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                    ),
                    text: (0, p.L)(
                      '\u0627\u06cc\u0646 \u0639\u06a9\u0633 \u0627\u0632 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0627\u06cc\u0646 \u062e\u0631\u06cc\u062f \u062d\u0630\u0641 \u0634\u0648\u062f\u061f \u06a9\u0627\u0644\u0627\u0647\u0627 \u0648 \u0645\u0628\u0644\u063a \u062e\u0631\u06cc\u062f \u062a\u063a\u06cc\u06cc\u0631\u06cc \u0646\u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.',
                    ),
                    ok: (0, p.L)('\u062d\u0630\u0641'),
                    tone: 'danger',
                    run: async () => {
                      J('');
                      try {
                        (se(await (0, P.deletePurchasePhoto)(e, s, o.id)),
                          (0, C.showToast)(
                            (0, p.L)(
                              '\u0639\u06a9\u0633 \u062d\u0630\u0641 \u0634\u062f',
                            ),
                          ));
                      } catch (e) {
                        J((0, H.invoicePhotoError)(e));
                      }
                    },
                  }));
              },
            }),
            (0, v.jsx)(C.ToastHost, {}),
          ],
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2])),
      l = e(r(d[3])),
      i = e(r(d[4])),
      s = e(r(d[5])),
      c = r(d[6]),
      h = r(d[7]),
      u = r(d[8]),
      p = r(d[9]),
      y = r(d[10]),
      f = r(d[11]),
      x = r(d[12]),
      j = r(d[13]),
      b = r(d[14]),
      S = r(d[15]),
      C = r(d[16]),
      L = r(d[17]),
      I = r(d[18]),
      z = r(d[19]),
      D = r(d[20]),
      P = r(d[21]),
      w = r(d[22]),
      H = r(d[23]),
      v = r(d[24]);
    function _({ photos: e, index: t, onIndex: o, canRemove: n, onRemove: l }) {
      const { colors: c } = (0, y.useTheme)(),
        x = (0, u.useSafeAreaInsets)(),
        { height: j } = (0, s.default)(),
        S = null !== t && !!e[t],
        I = t ?? 0,
        z = Math.max(
          240,
          j - Math.max(14, x.top + 6) - Math.max(14, x.bottom + 6) - 56 - 64,
        );
      return (0, v.jsxs)(h.PageModal, {
        visible: S,
        animationType: 'fade',
        onRequestClose: () => o(null),
        children: [
          (0, v.jsxs)(i.default, {
            testID: 'purchase-photo-full',
            style: {
              flex: 1,
              backgroundColor: c.bg,
              paddingTop: Math.max(14, x.top + 6),
              paddingBottom: Math.max(14, x.bottom + 6),
              paddingHorizontal: 12,
              gap: 8,
            },
            children: [
              (0, v.jsxs)(i.default, {
                style: [f.common.between, { height: 48 }],
                children: [
                  (0, v.jsx)(f.Copy, {
                    style: {
                      fontSize: 16,
                      lineHeight: 25,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children:
                      e.length > 1
                        ? (0, p.L)(
                            '\u0635\u0641\u062d\u0647\u0654 {n} \u0627\u0632 {all}',
                            {
                              n: (0, p.localDigits)(String(I + 1)),
                              all: (0, p.localDigits)(String(e.length)),
                            },
                          )
                        : (0, p.L)(
                            '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                          ),
                  }),
                  (0, v.jsx)(L.SmallKey, {
                    testID: 'purchase-photo-full-close',
                    label: (0, p.L)('\u0628\u0633\u062a\u0646'),
                    onPress: () => o(null),
                  }),
                ],
              }),
              S &&
                (0, v.jsx)(b.ProductPhoto, {
                  product: {
                    name: (0, p.L)(
                      '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                    ),
                    photo: e[I].url,
                  },
                  height: z,
                  fit: 'contain',
                }),
              (0, v.jsxs)(i.default, {
                style: {
                  flexDirection: 'row-reverse',
                  gap: 8,
                  height: 48,
                  alignItems: 'center',
                },
                children: [
                  e.length > 1 &&
                    (0, v.jsx)(L.SmallKey, {
                      grow: !0,
                      testID: 'purchase-photo-prev',
                      label: (0, p.L)('\u0642\u0628\u0644\u06cc'),
                      disabled: 0 === I,
                      onPress: () => o(I - 1),
                    }),
                  e.length > 1 &&
                    (0, v.jsx)(L.SmallKey, {
                      grow: !0,
                      testID: 'purchase-photo-next',
                      label: (0, p.L)('\u0628\u0639\u062f\u06cc'),
                      disabled: I >= e.length - 1,
                      onPress: () => o(I + 1),
                    }),
                  S && n(I) && (0, v.jsx)(R, { onPress: () => l(I) }),
                ],
              }),
            ],
          }),
          (0, v.jsx)(C.ToastHost, {}),
        ],
      });
    }
    function R({ onPress: e }) {
      const { colors: t } = (0, y.useTheme)();
      return (0, v.jsx)(n.default, {
        testID: 'purchase-photo-remove',
        accessibilityRole: 'button',
        onPress: e,
        hitSlop: 4,
        style: ({ pressed: e }) => ({
          flexGrow: 1,
          flexBasis: 0,
          height: 40,
          borderRadius: 12,
          paddingHorizontal: 12,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: l.default.hairlineWidth,
          borderColor: t.danger,
          backgroundColor: e ? t.soft : 'transparent',
        }),
        children: (0, v.jsx)(f.Copy, {
          numberOfLines: 1,
          style: {
            fontSize: 14,
            lineHeight: 22,
            color: t.danger,
            fontFamily: 'Vazirmatn_600SemiBold',
          },
          children: (0, p.L)(
            '\u062d\u0630\u0641 \u0627\u06cc\u0646 \u0639\u06a9\u0633',
          ),
        }),
      });
    }
  },
  958,
  [
    2, 217, 232, 17, 99, 257, 380, 515, 342, 311, 382, 407, 385, 539, 628, 534,
    525, 517, 818, 956, 957, 519, 634, 791, 338,
  ],
);
