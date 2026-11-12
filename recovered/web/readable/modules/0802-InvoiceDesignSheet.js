// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 802; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.InvoiceDesignSheet = function ({
        shop: e,
        value: z,
        shopName: P,
        preview: T,
        onSaved: B,
        onClose: N,
      }) {
        const H = (0, x.invoiceDesignLabels)(),
          { colors: W } = (0, w.useTheme)(),
          _ = (0, u.useSafeAreaInsets)(),
          [O, M] = (0, t.useState)(z || { theme: 'classic' }),
          [V, q] = (0, t.useState)(!1),
          [A, F] = (0, t.useState)(''),
          [$, E] = (0, t.useState)(''),
          [G, J] = (0, t.useState)(null),
          K = (0, t.useRef)(!1),
          Q = (e) => {
            (M((t) => ({ ...t, ...e })), F(''));
          };
        async function U(t) {
          if (!K.current) {
            ((K.current = !0), q(!0), E(''), F(''));
            try {
              (await (0, b.patchNotebookSettings)(e, { invoice: t }),
                M(t),
                B(t),
                F(H.saved));
            } catch (e) {
              E((0, j.message)(e));
            } finally {
              ((K.current = !1), q(!1));
            }
          }
        }
        async function X(e) {
          try {
            E('');
            const t = await (0, I.pickPhotoSource)();
            t && J({ field: e, source: t });
          } catch (e) {
            E((0, j.message)(e));
          }
        }
        const Y = [
            ['brandName', H.brandName, 60],
            ['address', H.address, 160],
            ['phone', H.phoneLine, 40],
            ['footer', H.footerNote, 120],
          ],
          Z = [
            ...('custom' === O.theme
              ? []
              : [
                  ['phone', H.phoneLine, 40],
                  ['address', H.address, 160],
                ]),
            ['nationalId', H.nationalId, 20],
            ['economicId', H.economicId, 20],
            ['postalCode', H.postalCode, 10],
            ['registrationNo', H.registrationNo, 20],
          ],
          ee = (e) =>
            'nationalId' === e ||
            'economicId' === e ||
            'postalCode' === e ||
            'registrationNo' === e;
        const te = (0, y.invoiceLayoutOf)(O);
        return (0, k.jsxs)(l.Modal, {
          visible: !0,
          transparent: !0,
          animationType: 'slide',
          onRequestClose: () => {
            V || N();
          },
          children: [
            (0, k.jsxs)(i.default, {
              style: {
                flex: 1,
                backgroundColor: '#0008',
                justifyContent: 'flex-end',
                paddingTop: _.top + 20,
              },
              children: [
                (0, k.jsx)(v.Backdrop, {
                  testID: 'invoice-design-backdrop',
                  locked: V,
                  onClose: N,
                }),
                (0, k.jsx)(n.PullCard, {
                  testID: 'invoice-design-sheet',
                  enabled: !V,
                  onClose: N,
                  style: {
                    maxHeight: '95%',
                    width: '100%',
                    maxWidth: 650,
                    alignSelf: 'center',
                    backgroundColor: W.bg,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    padding: 16,
                    paddingBottom: _.bottom + 16,
                  },
                  children: (0, k.jsxs)(c.ScrollView, {
                    keyboardShouldPersistTaps: 'handled',
                    contentContainerStyle: { gap: 14 },
                    children: [
                      (0, k.jsx)(v.PopupHeader, {
                        testID: 'invoice-design-close',
                        title: H.design,
                        titleStyle: {
                          fontSize: 20,
                          fontFamily: 'Vazirmatn_400Regular',
                        },
                        disabled: V,
                        onClose: N,
                      }),
                      (0, k.jsxs)(i.default, {
                        style: { gap: 6 },
                        children: [
                          (0, k.jsx)(C.Copy, {
                            style: {
                              fontSize: 14,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: H.layout,
                          }),
                          (0, k.jsx)(C.Segmented, {
                            items: y.invoiceLayouts.map((e) => ({
                              value: e,
                              label: H.layouts[e],
                              testID: 'invoice-layout-' + e,
                            })),
                            value: te,
                            onChange: (e) => {
                              V || U({ ...O, layout: e });
                            },
                          }),
                          (0, k.jsx)(C.Copy, {
                            style: {
                              fontSize: 12,
                              lineHeight: 20,
                              color: W.muted,
                            },
                            children: H.layoutHints[te],
                          }),
                        ],
                      }),
                      'formal' === te &&
                        (0, k.jsxs)(i.default, {
                          testID: 'invoice-formal-fields',
                          style: { gap: 10 },
                          children: [
                            (0, k.jsx)(C.Copy, {
                              style: { fontSize: 15 },
                              children: H.sellerInfo,
                            }),
                            Z.map(([e, t, o]) =>
                              (0, k.jsxs)(
                                i.default,
                                {
                                  style: { gap: 4 },
                                  children: [
                                    (0, k.jsx)(C.Copy, { children: t }),
                                    (0, k.jsx)(C.Input, {
                                      testID: 'invoice-design-' + e,
                                      accessibilityLabel: t,
                                      value: O[e] || '',
                                      maxLength: o,
                                      editable: !V,
                                      onChangeText: (t) => Q({ [e]: t }),
                                      multiline: 'address' === e,
                                      keyboardType:
                                        'address' === e
                                          ? 'default'
                                          : ee(e)
                                            ? 'number-pad'
                                            : 'phone-pad',
                                      ltr: 'address' !== e,
                                    }),
                                  ],
                                },
                                e,
                              ),
                            ),
                            (0, k.jsxs)(s.default, {
                              testID: 'invoice-design-taxRow',
                              accessibilityRole: 'switch',
                              accessibilityState: {
                                checked: !!O.taxRow,
                                disabled: V,
                              },
                              disabled: V,
                              onPress: () => Q({ taxRow: !O.taxRow }),
                              style: {
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                gap: 10,
                                paddingVertical: 6,
                              },
                              children: [
                                (0, k.jsx)(i.default, {
                                  style: {
                                    width: 40,
                                    height: 24,
                                    borderRadius: 12,
                                    padding: 3,
                                    backgroundColor: O.taxRow
                                      ? W.accent
                                      : W.line,
                                    alignItems: O.taxRow
                                      ? 'flex-start'
                                      : 'flex-end',
                                  },
                                  children: (0, k.jsx)(i.default, {
                                    style: {
                                      width: 18,
                                      height: 18,
                                      borderRadius: 9,
                                      backgroundColor: W.bg,
                                    },
                                  }),
                                }),
                                (0, k.jsx)(C.Copy, {
                                  style: { flex: 1, fontSize: 13 },
                                  children: H.taxRow,
                                }),
                              ],
                            }),
                            (0, k.jsx)(C.Button, {
                              testID: 'invoice-formal-save',
                              disabled: V,
                              onPress: function () {
                                const e = { ...O };
                                for (const t of [
                                  'nationalId',
                                  'economicId',
                                  'postalCode',
                                  'registrationNo',
                                ]) {
                                  const o = (0, p.latinDigits)(
                                    O[t] || '',
                                  ).trim();
                                  if (!/^[0-9]*$/.test(o))
                                    return void E(H.idsDigits);
                                  o ? (e[t] = o) : delete e[t];
                                }
                                e.postalCode && 10 !== e.postalCode.length
                                  ? E(H.postalLength)
                                  : U(e);
                              },
                              children: (0, h.L)(
                                '\u0630\u062e\u06cc\u0631\u0647',
                              ),
                            }),
                          ],
                        }),
                      (0, k.jsx)(i.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          flexWrap: 'wrap',
                          gap: 10,
                        },
                        children: L.map((e) => {
                          const t = (0, f.resolveInvoiceTheme)({
                            ...O,
                            theme: e,
                          });
                          return (0, k.jsxs)(
                            s.default,
                            {
                              testID: 'invoice-theme-' + e,
                              accessibilityRole: 'radio',
                              accessibilityLabel: H.themes[e],
                              accessibilityState: {
                                checked: O.theme === e,
                                disabled: V,
                              },
                              disabled: V,
                              onPress: () => {
                                'custom' === e
                                  ? (Q({ theme: e }), U({ ...O, theme: e }))
                                  : U({ ...O, theme: e });
                              },
                              style: {
                                width: '47%',
                                padding: 7,
                                borderRadius: 12,
                                borderWidth: 2,
                                borderColor: O.theme === e ? W.accent : W.line,
                                gap: 6,
                              },
                              children: [
                                (0, k.jsxs)(i.default, {
                                  style: {
                                    backgroundColor: t.paper,
                                    borderColor: t.line,
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    overflow: 'hidden',
                                  },
                                  children: [
                                    (0, k.jsxs)(i.default, {
                                      style: {
                                        backgroundColor: t.headerBg,
                                        padding: 7,
                                        flexDirection: 'row-reverse',
                                        gap: 5,
                                        alignItems: 'center',
                                      },
                                      children: [
                                        'custom' === e &&
                                          O.logo &&
                                          (0, k.jsx)(o.default, {
                                            source: { uri: O.logo },
                                            style: { width: 24, height: 24 },
                                          }),
                                        (0, k.jsx)(C.Copy, {
                                          numberOfLines: 1,
                                          style: {
                                            fontSize: 11,
                                            color: t.headerInk,
                                            flex: 1,
                                          },
                                          children:
                                            ('custom' === e && O.brandName) ||
                                            P,
                                        }),
                                      ],
                                    }),
                                    (0, k.jsx)(i.default, {
                                      style: {
                                        height: 7,
                                        backgroundColor: t.tableHeadBg,
                                      },
                                    }),
                                    [0, 1].map((e) =>
                                      (0, k.jsxs)(
                                        i.default,
                                        {
                                          style: {
                                            flexDirection: 'row-reverse',
                                            padding: 4,
                                            gap: 4,
                                            borderTopWidth: 1,
                                            borderColor: t.line,
                                          },
                                          children: [
                                            (0, k.jsx)(C.Copy, {
                                              numberOfLines: 1,
                                              style: {
                                                fontSize: 9,
                                                lineHeight: 15,
                                                flex: 3,
                                                color: t.ink,
                                              },
                                              children:
                                                T.lines[e]?.name ||
                                                (0, h.L)(
                                                  '\u06a9\u0627\u0644\u0627',
                                                ),
                                            }),
                                            (0, k.jsx)(C.Copy, {
                                              style: {
                                                fontSize: 9,
                                                lineHeight: 15,
                                                flex: 1,
                                                color: t.muted,
                                              },
                                              children:
                                                T.lines[e]?.quantity ||
                                                '\u2014',
                                            }),
                                            (0, k.jsx)(C.Copy, {
                                              numberOfLines: 1,
                                              style: {
                                                fontSize: 9,
                                                lineHeight: 15,
                                                flex: 2,
                                                color: t.ink,
                                              },
                                              children:
                                                T.lines[e]?.total || '\u2014',
                                            }),
                                          ],
                                        },
                                        e,
                                      ),
                                    ),
                                    (0, k.jsx)(i.default, {
                                      style: {
                                        height: 9,
                                        backgroundColor: t.payableBg,
                                      },
                                    }),
                                  ],
                                }),
                                (0, k.jsx)(C.Copy, {
                                  style: { fontSize: 12, textAlign: 'center' },
                                  children: H.themes[e],
                                }),
                              ],
                            },
                            e,
                          );
                        }),
                      }),
                      'custom' === O.theme &&
                        (0, k.jsxs)(i.default, {
                          style: { gap: 12 },
                          children: [
                            (0, k.jsx)(C.Copy, {
                              style: { fontSize: 17 },
                              children: H.customTitle,
                            }),
                            Y.map(([e, t, o]) =>
                              (0, k.jsxs)(
                                i.default,
                                {
                                  style: { gap: 4 },
                                  children: [
                                    (0, k.jsx)(C.Copy, { children: t }),
                                    (0, k.jsx)(C.Input, {
                                      testID: 'invoice-design-' + e,
                                      accessibilityLabel: t,
                                      value: O[e] || '',
                                      maxLength: o,
                                      editable: !V,
                                      onChangeText: (t) => Q({ [e]: t }),
                                      multiline:
                                        'address' === e || 'footer' === e,
                                      keyboardType:
                                        'phone' === e ? 'phone-pad' : 'default',
                                    }),
                                  ],
                                },
                                e,
                              ),
                            ),
                            ['logo', 'signature'].map((e) =>
                              (0, k.jsxs)(
                                i.default,
                                {
                                  style: { gap: 6 },
                                  children: [
                                    (0, k.jsx)(C.Copy, { children: H[e] }),
                                    !!O[e] &&
                                      (0, k.jsx)(o.default, {
                                        source: { uri: O[e] },
                                        resizeMode: 'contain',
                                        style: {
                                          width: 'logo' === e ? 100 : 240,
                                          height: 'logo' === e ? 100 : 80,
                                          alignSelf: 'center',
                                        },
                                      }),
                                    (0, k.jsx)(C.Button, {
                                      secondary: !0,
                                      disabled: V,
                                      onPress: () => {
                                        X(e);
                                      },
                                      children:
                                        'logo' === e
                                          ? H.pickLogo
                                          : H.pickSignature,
                                    }),
                                    !!O[e] &&
                                      (0, k.jsx)(C.Button, {
                                        secondary: !0,
                                        disabled: V,
                                        onPress: () => Q({ [e]: void 0 }),
                                        children:
                                          'logo' === e
                                            ? H.removeLogo
                                            : (0, h.L)(
                                                '\u062d\u0630\u0641 \u0627\u0645\u0636\u0627 \u06cc\u0627 \u0645\u0647\u0631',
                                              ),
                                      }),
                                  ],
                                },
                                e,
                              ),
                            ),
                            (0, k.jsx)(C.Copy, { children: H.accent }),
                            (0, k.jsx)(i.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                gap: 10,
                                flexWrap: 'wrap',
                              },
                              children: R.map((e, t) =>
                                (0, k.jsx)(
                                  s.default,
                                  {
                                    accessibilityRole: 'radio',
                                    accessibilityLabel:
                                      H.accent + ' ' + (0, h.L)(D[t]),
                                    accessibilityState: {
                                      checked: (O.accent || R[0]) === e,
                                    },
                                    disabled: V,
                                    onPress: () => Q({ accent: e }),
                                    style: {
                                      width: 42,
                                      height: 42,
                                      borderRadius: 21,
                                      backgroundColor: e,
                                      borderWidth: 3,
                                      borderColor:
                                        (O.accent || R[0]) === e
                                          ? W.text
                                          : W.bg,
                                    },
                                  },
                                  e,
                                ),
                              ),
                            }),
                            (0, k.jsx)(C.Button, {
                              testID: 'invoice-design-save',
                              disabled: V,
                              onPress: () => {
                                U(O);
                              },
                              children: (0, h.L)(
                                '\u0630\u062e\u06cc\u0631\u0647',
                              ),
                            }),
                          ],
                        }),
                      !!A &&
                        (0, k.jsx)(C.Copy, {
                          accessibilityLiveRegion: 'polite',
                          style: { color: W.success },
                          children: A,
                        }),
                      !!$ &&
                        (0, k.jsx)(C.Copy, {
                          accessibilityRole: 'alert',
                          style: { color: W.danger },
                          children: $,
                        }),
                      (0, k.jsx)(C.Button, {
                        secondary: !0,
                        disabled: V,
                        onPress: N,
                        children: (0, h.L)('\u0628\u0633\u062a\u0646'),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            G &&
              (0, k.jsx)(S.PhotoCropper, {
                source: G.source,
                name: H[G.field],
                aspect: 'signature' === G.field ? 3 : 1,
                outputWidth: 'signature' === G.field ? 600 : 256,
                maxChars: 12e4,
                minSourceSide: 1,
                onCancel: () => J(null),
                onSave: (e) => {
                  (Q({ [G.field]: e }), J(null));
                },
              }),
          ],
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      s = e(r(d[2])),
      i = e(r(d[3])),
      l = r(d[4]),
      n = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      h = r(d[8]),
      p = r(d[9]),
      y = r(d[10]),
      f = r(d[11]),
      x = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      C = r(d[15]),
      v = r(d[16]),
      S = r(d[17]),
      I = r(d[18]),
      w = r(d[19]),
      k = r(d[20]);
    const L = ['classic', 'teal', 'navy', 'warm', 'mono', 'custom'],
      R = ['#087f73', '#182c49', '#996238', '#111111', '#7c3c83', '#b32940'],
      D = [
        '\u0633\u0628\u0632',
        '\u0633\u0631\u0645\u0647\u200c\u0627\u06cc',
        '\u0642\u0647\u0648\u0647\u200c\u0627\u06cc',
        '\u0645\u0634\u06a9\u06cc',
        '\u0628\u0646\u0641\u0634',
        '\u0642\u0631\u0645\u0632',
      ];
  },
  802,
  [
    2, 168, 232, 99, 381, 515, 380, 342, 311, 440, 476, 803, 804, 519, 415, 407,
    533, 775, 634, 382, 338,
  ],
);
