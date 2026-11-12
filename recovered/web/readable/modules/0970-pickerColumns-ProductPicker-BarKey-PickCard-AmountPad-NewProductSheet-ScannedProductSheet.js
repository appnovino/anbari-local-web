// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 970; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'pickerColumns', {
        enumerable: !0,
        get: function () {
          return V;
        },
      }),
      (_e.ProductPicker = function ({
        visible: e,
        products: b,
        movements: j,
        sale: C,
        priceOf: z,
        lastPrice: v,
        inInvoice: w,
        onDone: T,
        onClose: R,
        onVoiceAdd: B,
        onNewLine: H,
        newInInvoice: A = [],
        showCost: q = !0,
      }) {
        const { colors: O } = (0, k.useTheme)(),
          Q = (0, h.useSafeAreaInsets)(),
          { width: $ } = (0, l.default)(),
          [K, X] = (0, t.useState)({}),
          [J, Y] = (0, t.useState)(''),
          [Z, ee] = (0, t.useState)(''),
          [te, ne] = (0, t.useState)(null),
          [oe, ie] = (0, t.useState)(!1),
          [se, re] = (0, t.useState)(!1),
          [le, ae] = (0, u.useToast)(),
          ce = (0, t.useRef)({ code: '', at: 0 }),
          [de, ue] = (0, t.useState)(null),
          pe = !C && !!H;
        function he(e) {
          const t = e.trim(),
            n = Date.now();
          if (!t || t.length > 128) return;
          if (ce.current.code === t && n - ce.current.at < 700) return;
          ce.current = { code: t, at: n };
          const o = b.find((e) => e.barcode === t && !e.archivedAt);
          o
            ? ((0, d.scanBeep)(),
              (0, L.isMeasured)(o)
                ? ne(o)
                : (X((e) => (0, L.stepPick)(e, o.id, 1)),
                  (0, u.tapFeel)(),
                  ae(
                    (0, f.L)(
                      '{name} +{n} \u0627\u0636\u0627\u0641\u0647 \u0634\u062f',
                      { name: o.name, n: (0, f.localDigits)(1) },
                    ),
                  )))
            : ae(
                (0, f.L)(
                  '\u0627\u06cc\u0646 \u0628\u0627\u0631\u06a9\u062f \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u0646\u06cc\u0633\u062a',
                ),
              );
        }
        async function me() {
          if (!se)
            if (B && (0, p.voiceAddReady)()) {
              (re(!0), ie(!1));
              try {
                const e = await B((e) => {
                    (ee(''), Y(e));
                  }),
                  t = (0, L.addToPicks)({}, e, b).added;
                (X((t) => (0, L.addToPicks)(t, e, b).picks),
                  t &&
                    ((0, u.tapFeel)('success'),
                    ae(
                      (0, f.L)(
                        '+{n} \u0627\u0636\u0627\u0641\u0647 \u0634\u062f',
                        { n: (0, f.localDigits)(t) },
                      ),
                    )));
              } catch {
                ae(
                  (0, f.L)(
                    '\u0635\u062f\u0627 \u0634\u0646\u06cc\u062f\u0647 \u0646\u0634\u062f\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646',
                  ),
                );
              } finally {
                re(!1);
              }
            } else
              ae(
                (0, f.L)(
                  '\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0627 \u0635\u062f\u0627 \u0628\u0647\u200c\u0632\u0648\u062f\u06cc',
                ),
              );
        }
        const ye = (0, t.useMemo)(
            () => (0, D.rankBigButtonProducts)(b, j, Number.MAX_SAFE_INTEGER),
            [b, j],
          ),
          fe = (0, t.useMemo)(() => {
            const e = new Map();
            for (const t of ye)
              t.category && e.set(t.category, (e.get(t.category) || 0) + 1);
            return [...e.entries()].sort((e, t) => t[1] - e[1]).map(([e]) => e);
          }, [ye]),
          ge = (0, t.useMemo)(() => {
            const e = (0, y.normalizeName)(J.trim()),
              t = J.trim();
            return ye.filter(
              (n) =>
                (!Z || n.category === Z) &&
                (!e ||
                  (0, y.normalizeName)(n.name).includes(e) ||
                  (!!n.barcode && n.barcode === t)),
            );
          }, [ye, J, Z]),
          xe = V(Math.min($, 1040)),
          be = (0, L.pickedSummary)(K, ye, C, v);
        function je() {
          (X({}), Y(''), ee(''), ne(null), ie(!1), ue(null), R());
        }
        function Se(e) {
          (0, L.isMeasured)(e)
            ? ne(e)
            : (X((t) => (0, L.stepPick)(t, e.id, 1)), (0, u.tapFeel)());
        }
        const Ce = Math.max(Q.top, $ >= 700 ? 24 : 0) + 8,
          Ie = (0, t.useMemo)(() => {
            const e = [];
            for (let t = 0; t < ge.length; t += xe) e.push(ge.slice(t, t + xe));
            return e;
          }, [ge, xe]);
        return (0, F.jsx)(x.PageModal, {
          visible: e,
          animationType: 'slide',
          onRequestClose: je,
          children: (0, F.jsxs)(s.default, {
            testID: 'product-picker',
            style: { flex: 1, backgroundColor: O.bg, paddingTop: Ce },
            children: [
              (0, F.jsxs)(s.default, {
                style: {
                  width: '100%',
                  maxWidth: 1040,
                  alignSelf: 'center',
                  flex: 1,
                },
                children: [
                  (0, F.jsxs)(s.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 10,
                      paddingHorizontal: 16,
                      paddingBottom: 8,
                    },
                    children: [
                      (0, F.jsx)(o.default, {
                        testID: 'picker-close',
                        accessibilityRole: 'button',
                        accessibilityLabel: (0, f.L)(
                          '\u0628\u0633\u062a\u0646',
                        ),
                        onPress: je,
                        hitSlop: 6,
                        style: ({ pressed: e }) => ({
                          width: 40,
                          height: 40,
                          borderRadius: 20,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: O.soft,
                          opacity: e ? 0.7 : 1,
                        }),
                        children: (0, F.jsx)(S.Icon, {
                          name: 'close',
                          size: 20,
                          color: O.text,
                        }),
                      }),
                      (0, F.jsx)(I.Copy, {
                        accessibilityRole: 'header',
                        style: {
                          flex: 1,
                          fontSize: 19,
                          lineHeight: 30,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: (0, f.L)(
                          '\u0627\u0641\u0632\u0648\u062f\u0646 \u06a9\u0627\u0644\u0627',
                        ),
                      }),
                    ],
                  }),
                  (0, F.jsxs)(s.default, {
                    style: { paddingHorizontal: 16, gap: 8 },
                    children: [
                      (0, F.jsxs)(s.default, {
                        testID: 'picker-bar',
                        style: {
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 8,
                        },
                        children: [
                          (0, F.jsxs)(s.default, {
                            style: {
                              flexGrow: 1,
                              flexShrink: 1,
                              maxWidth: 360,
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              height: 40,
                              paddingHorizontal: 12,
                              gap: 6,
                              borderRadius: 20,
                              backgroundColor: O.soft,
                            },
                            children: [
                              (0, F.jsx)(S.Icon, {
                                name: 'search',
                                size: 16,
                                color: O.muted,
                              }),
                              (0, F.jsx)(i.default, {
                                testID: 'picker-search',
                                value: J,
                                onChangeText: Y,
                                placeholder: (0, f.L)(
                                  '\u062c\u0633\u062a\u200c\u0648\u062c\u0648',
                                ),
                                placeholderTextColor: O.muted,
                                returnKeyType: 'search',
                                autoCorrect: !1,
                                onSubmitEditing: () => {
                                  (1 !== ge.length &&
                                    ge[0]?.barcode !== J.trim()) ||
                                    (Se(ge[0]), Y(''));
                                },
                                style: {
                                  flex: 1,
                                  minWidth: 0,
                                  height: 40,
                                  padding: 0,
                                  fontSize: 14,
                                  color: O.text,
                                  textAlign: 'right',
                                  fontFamily: 'Vazirmatn_400Regular',
                                  outlineStyle: 'none',
                                },
                              }),
                            ],
                          }),
                          (0, F.jsx)(W, {
                            testID: 'picker-scan',
                            icon: 'scan',
                            label: oe
                              ? (0, f.L)(
                                  '\u0628\u0633\u062a\u0646 \u0627\u0633\u06a9\u0646',
                                )
                              : (0, f.L)(
                                  '\u0627\u0633\u06a9\u0646 \u0628\u0627\u0631\u06a9\u062f',
                                ),
                            on: oe,
                            onPress: () => ie((e) => !e),
                          }),
                          (0, F.jsx)(W, {
                            testID: 'picker-voice',
                            icon: 'mic',
                            label: se
                              ? (0, f.L)(
                                  '\u062f\u0631 \u062d\u0627\u0644 \u0634\u0646\u06cc\u062f\u0646\u2026',
                                )
                              : (0, f.L)('\u0635\u062f\u0627'),
                            on: se,
                            onPress: () => {
                              me();
                            },
                          }),
                          pe &&
                            (0, F.jsx)(W, {
                              testID: 'picker-new-product',
                              icon: 'plus',
                              label: (0, f.L)(
                                '\u0645\u062d\u0635\u0648\u0644 \u062c\u062f\u06cc\u062f',
                              ),
                              onPress: () => {
                                (ie(!1), ue(J.trim()));
                              },
                            }),
                        ],
                      }),
                      oe &&
                        (0, F.jsxs)(s.default, {
                          testID: 'picker-scanner',
                          style: { gap: 4 },
                          children: [
                            (0, F.jsx)(c.Scanner, {
                              active: oe && !te,
                              onScan: (e) => he(e),
                              height: 130,
                            }),
                            (0, F.jsx)(I.Copy, {
                              style: { fontSize: 11, color: O.muted },
                              children: (0, f.L)(
                                '\u06a9\u0627\u0644\u0627\u0647\u0627 \u0631\u0627 \u067e\u0634\u062a\u200c\u0633\u0631\u0647\u0645 \u0627\u0633\u06a9\u0646 \u06a9\u0646\u061b \u0647\u0631 \u0628\u0627\u0631 \u06cc\u06a9\u06cc \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                              ),
                            }),
                          ],
                        }),
                      fe.length > 0 &&
                        (0, F.jsx)(a.ScrollView, {
                          horizontal: !0,
                          ...P.noSwipe,
                          showsHorizontalScrollIndicator: !1,
                          keyboardShouldPersistTaps: 'handled',
                          style: { flexGrow: 0 },
                          contentContainerStyle: {
                            flexDirection: 'row-reverse',
                            gap: 6,
                            flexGrow: 1,
                          },
                          children: ['', ...fe].map((e) => {
                            const t = Z === e;
                            return (0, F.jsx)(
                              o.default,
                              {
                                testID: 'picker-category-' + (e || 'all'),
                                accessibilityRole: 'button',
                                accessibilityState: { selected: t },
                                onPress: () => ee(e),
                                style: ({ pressed: e }) => ({
                                  height: 34,
                                  paddingHorizontal: 14,
                                  borderRadius: 17,
                                  justifyContent: 'center',
                                  borderWidth: 1,
                                  borderColor: t ? O.accent : O.line,
                                  backgroundColor: t ? O.accentSoft : O.surface,
                                  opacity: e ? 0.75 : 1,
                                }),
                                children: (0, F.jsx)(I.Copy, {
                                  numberOfLines: 1,
                                  style: {
                                    fontSize: 13,
                                    lineHeight: 20,
                                    color: t ? O.accent : O.text,
                                  },
                                  children: e || (0, f.L)('\u0647\u0645\u0647'),
                                }),
                              },
                              e || 'all',
                            );
                          }),
                        }),
                    ],
                  }),
                  ge.length
                    ? (0, F.jsx)(n.default, {
                        testID: 'picker-grid',
                        renderScrollComponent: a.pullScrollComponent,
                        data: Ie,
                        keyExtractor: (e) => e.map((e) => e.id).join('|'),
                        extraData: K,
                        keyboardShouldPersistTaps: 'handled',
                        keyboardDismissMode: 'on-drag',
                        initialNumToRender: 6,
                        maxToRenderPerBatch: 6,
                        windowSize: 7,
                        removeClippedSubviews: !0,
                        getItemLayout: (e, t) => ({
                          length: 214,
                          offset: 214 * t,
                          index: t,
                        }),
                        contentContainerStyle: {
                          padding: 16,
                          paddingTop: 10,
                          paddingBottom: 24,
                        },
                        renderItem: ({ item: e }) =>
                          (0, F.jsxs)(s.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              gap: N,
                              height: _,
                              marginBottom: N,
                            },
                            children: [
                              e.map((e) =>
                                (0, F.jsx)(
                                  E,
                                  {
                                    product: e,
                                    pick: K[e.id],
                                    price: z(e),
                                    already: w(e.id),
                                    onTap: Se,
                                    onStep: (e, t) =>
                                      X((n) => (0, L.stepPick)(n, e, t)),
                                  },
                                  e.id,
                                ),
                              ),
                              Array.from({ length: xe - e.length }, (e, t) =>
                                (0, F.jsx)(
                                  s.default,
                                  { style: { flex: 1 } },
                                  'pad' + t,
                                ),
                              ),
                            ],
                          }),
                      })
                    : (0, F.jsxs)(s.default, {
                        style: { padding: 24, gap: 12, alignItems: 'center' },
                        children: [
                          (0, F.jsx)(I.Copy, {
                            style: { textAlign: 'center', color: O.muted },
                            children: J.trim()
                              ? (0, f.L)(
                                  '\u06a9\u0627\u0644\u0627\u06cc\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u0646\u0627\u0645 \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f.',
                                )
                              : (0, f.L)(
                                  '\u0647\u0646\u0648\u0632 \u06a9\u0627\u0644\u0627\u06cc\u06cc \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u0646\u06cc\u0633\u062a.',
                                ),
                          }),
                          pe &&
                            !!J.trim() &&
                            (0, F.jsx)(o.default, {
                              testID: 'picker-new-from-search',
                              accessibilityRole: 'button',
                              onPress: () => ue(J.trim()),
                              style: ({ pressed: e }) => ({
                                minHeight: 40,
                                paddingHorizontal: 16,
                                borderRadius: 20,
                                justifyContent: 'center',
                                borderWidth: 1,
                                borderColor: O.accent,
                                backgroundColor: O.accentSoft,
                                opacity: e ? 0.75 : 1,
                              }),
                              children: (0, F.jsx)(I.Copy, {
                                numberOfLines: 2,
                                style: {
                                  fontSize: 14,
                                  lineHeight: 22,
                                  textAlign: 'center',
                                  color: O.accent,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: (0, f.L)(
                                  '+ \u0627\u0641\u0632\u0648\u062f\u0646 \xab{name}\xbb \u0628\u0647\u200c\u0639\u0646\u0648\u0627\u0646 \u0645\u062d\u0635\u0648\u0644 \u062c\u062f\u06cc\u062f',
                                  { name: J.trim() },
                                ),
                              }),
                            }),
                        ],
                      }),
                  (0, F.jsx)(s.default, {
                    style: {
                      paddingHorizontal: 16,
                      paddingTop: 10,
                      paddingBottom: Math.max(12, Q.bottom + 8),
                      borderTopWidth: 1,
                      borderColor: O.line,
                      backgroundColor: O.surface,
                    },
                    children: (0, F.jsxs)(o.default, {
                      testID: 'picker-done',
                      accessibilityRole: 'button',
                      disabled: !be.count,
                      onPress: function () {
                        const e = K;
                        (X({}), Y(''), ee(''), ie(!1), T(e));
                      },
                      style: ({ pressed: e }) => ({
                        minHeight: 52,
                        borderRadius: 16,
                        paddingHorizontal: 16,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 10,
                        backgroundColor: be.count ? O.accent : O.soft,
                        opacity: e ? 0.85 : 1,
                      }),
                      children: [
                        (0, F.jsx)(I.Copy, {
                          style: {
                            fontSize: 15,
                            fontFamily: 'Vazirmatn_700Bold',
                            color: be.count ? O.onAccent : O.muted,
                          },
                          children: be.count
                            ? (0, f.L)(
                                '\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0641\u0627\u06a9\u062a\u0648\u0631',
                              )
                            : (0, f.L)(
                                '\u0631\u0648\u06cc \u06a9\u0627\u0644\u0627 \u0628\u0632\u0646 \u062a\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u0648\u062f',
                              ),
                        }),
                        be.count > 0 &&
                          (0, F.jsxs)(I.Copy, {
                            testID: 'picker-summary',
                            style: {
                              fontSize: 14,
                              fontFamily: 'Vazirmatn_600SemiBold',
                              color: O.onAccent,
                            },
                            children: [
                              (0, f.L)('{n} \u0642\u0644\u0645', {
                                n: (0, f.localDigits)(be.count),
                              }),
                              be.total > 0 ? ' \xb7 ' + M(be.total) : '',
                            ],
                          }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, F.jsx)(u.Toast, {
                toast: le,
                bottom: Math.max(12, Q.bottom + 8) + 70,
              }),
              null !== de &&
                H &&
                (0, F.jsx)(U, {
                  name: de,
                  taken: [...b, ...A],
                  showCost: q,
                  onAdd: (e) => {
                    (H(e),
                      ue(null),
                      Y(''),
                      (0, u.tapFeel)('success'),
                      ae(
                        (0, f.L)(
                          '\xab{name}\xbb \u0628\u0647 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0627\u0636\u0627\u0641\u0647 \u0634\u062f\u061b \u0628\u0627 \u062b\u0628\u062a \u062e\u0631\u06cc\u062f \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f',
                          { name: e.name },
                        ),
                      ));
                  },
                  onClose: () => ue(null),
                }),
              te &&
                (0, F.jsx)(G, {
                  product: te,
                  value: K[te.id],
                  price: C ? { value: z(te), show: void 0 !== z(te) } : void 0,
                  onApply: (e) => {
                    (X((t) => {
                      const n = { ...t };
                      return (delete n[te.id], e ? { ...n, [te.id]: e } : n);
                    }),
                      e &&
                        ((0, u.tapFeel)(),
                        ae(
                          (0, f.L)(
                            '{name} \u0627\u0636\u0627\u0641\u0647 \u0634\u062f',
                            { name: te.name },
                          ),
                        )),
                      ne(null));
                  },
                  onClose: () => ne(null),
                }),
            ],
          }),
        });
      }),
      (_e.BarKey = W),
      Object.defineProperty(_e, 'PickCard', {
        enumerable: !0,
        get: function () {
          return E;
        },
      }),
      (_e.AmountPad = G),
      (_e.NewProductSheet = U),
      (_e.ScannedProductSheet = function ({
        code: e,
        taken: n,
        sale: o,
        showPrice: i,
        showCost: l,
        busy: a,
        error: c,
        onMake: d,
        onClose: u,
      }) {
        const { colors: p } = (0, k.useTheme)(),
          [h, x] = (0, t.useState)(''),
          [b, C] = (0, t.useState)(''),
          [D, v] = (0, t.useState)(''),
          w = (0, L.nameTaken)(h, n, y.normalizeName),
          P = !!h.trim() && !w && !a,
          T = (e) =>
            (0, F.jsx)(I.Copy, {
              style: { fontSize: 12, color: p.muted },
              children: e,
            });
        const R =
            i &&
            (0, F.jsxs)(
              s.default,
              {
                style: { gap: 6 },
                children: [
                  T(
                    (0, f.L)(
                      '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0647\u0631 \u0639\u062f\u062f (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                    ),
                  ),
                  (0, F.jsx)(z.MoneyInput, {
                    testID: 'scanned-product-price',
                    value: D,
                    onChange: v,
                  }),
                ],
              },
              'price',
            ),
          B =
            l &&
            (0, F.jsxs)(
              s.default,
              {
                style: { gap: 6 },
                children: [
                  T(
                    (0, f.L)(
                      '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0647\u0631 \u0639\u062f\u062f (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                    ),
                  ),
                  (0, F.jsx)(z.MoneyInput, {
                    testID: 'scanned-product-cost',
                    value: b,
                    onChange: C,
                  }),
                ],
              },
              'cost',
            );
        return (0, F.jsx)(j.Sheet, {
          visible: !0,
          title: (0, f.L)(
            '\u0627\u06cc\u0646 \u0628\u0627\u0631\u06a9\u062f \u062f\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u06cc\u0633\u062a',
          ),
          onClose: u,
          busy: a,
          children: (0, F.jsxs)(s.default, {
            testID: 'scanned-product',
            style: { gap: 10 },
            children: [
              (0, F.jsx)(I.Copy, {
                style: { fontSize: 13, lineHeight: 22, color: p.muted },
                children: (0, f.L)(
                  '\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u06cc \u0628\u0633\u0627\u0632\u06cc\u200c\u0627\u0634\u061f \u0646\u0627\u0645 \u0648 \u0642\u06cc\u0645\u062a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u06a9\u0627\u0644\u0627 \u0633\u0627\u062e\u062a\u0647 \u0648 \u0628\u0647 \u0647\u0645\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                ),
              }),
              (0, F.jsxs)(s.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 8,
                  paddingHorizontal: 12,
                  minHeight: 40,
                  borderRadius: 12,
                  backgroundColor: p.soft,
                },
                children: [
                  (0, F.jsx)(S.Icon, {
                    name: 'scan',
                    size: 16,
                    color: p.muted,
                  }),
                  (0, F.jsx)(I.Copy, {
                    style: { fontSize: 12, color: p.muted },
                    children: (0, f.L)('\u0628\u0627\u0631\u06a9\u062f'),
                  }),
                  (0, F.jsx)(I.Copy, {
                    testID: 'scanned-product-code',
                    numberOfLines: 1,
                    style: {
                      flex: 1,
                      fontSize: 14,
                      textAlign: 'left',
                      writingDirection: 'ltr',
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: e,
                  }),
                ],
              }),
              (0, F.jsxs)(s.default, {
                style: { gap: 6 },
                children: [
                  T((0, f.L)('\u0646\u0627\u0645 \u06a9\u0627\u0644\u0627')),
                  (0, F.jsx)(I.Input, {
                    testID: 'scanned-product-name',
                    value: h,
                    maxLength: 100,
                    onChangeText: x,
                    placeholder: (0, f.L)(
                      '\u0645\u062b\u0644\u0627\u064b \u062e\u0648\u062f\u06a9\u0627\u0631 \u0622\u0628\u06cc',
                    ),
                  }),
                  w &&
                    (0, F.jsx)(I.Copy, {
                      testID: 'scanned-product-taken',
                      style: { fontSize: 12, color: p.danger },
                      children: (0, f.L)(
                        '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u0647\u0633\u062a\u061b \u0627\u0632 \u0641\u0647\u0631\u0633\u062a \u0627\u0646\u062a\u062e\u0627\u0628\u0634 \u06a9\u0646',
                      ),
                    }),
                ],
              }),
              o ? [R, B] : [B, R],
              !!c &&
                (0, F.jsx)(I.Copy, {
                  testID: 'scanned-product-error',
                  accessibilityRole: 'alert',
                  style: { fontSize: 12, color: p.danger },
                  children: c,
                }),
              (0, F.jsx)(I.Button, {
                testID: 'scanned-product-make',
                disabled: !P,
                onPress: function () {
                  if (!P) return;
                  const e = l ? K(b) : void 0,
                    t = i ? K(D) : void 0;
                  d({
                    name: h.trim(),
                    ...(void 0 !== t ? { price: t } : {}),
                    ...(void 0 !== e ? { costPrice: e } : {}),
                  });
                },
                children: a
                  ? (0, f.L)(
                      '\u062f\u0631 \u062d\u0627\u0644 \u0633\u0627\u062e\u062a\u2026',
                    )
                  : (0, f.L)(
                      '\u0633\u0627\u062e\u062a \u06a9\u0627\u0644\u0627 \u0648 \u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0641\u0627\u06a9\u062a\u0648\u0631',
                    ),
              }),
            ],
          }),
        });
      }));
    var t = r(_d[0]),
      n = e(r(_d[1]));
    r(_d[2]);
    var o = e(r(_d[3])),
      i = e(r(_d[4])),
      s = e(r(_d[5])),
      l = e(r(_d[6])),
      a = r(_d[7]),
      c = r(_d[8]),
      d = r(_d[9]),
      u = r(_d[10]),
      p = r(_d[11]),
      h = r(_d[12]),
      y = r(_d[13]),
      f = r(_d[14]),
      x = r(_d[15]),
      b = r(_d[16]),
      j = r(_d[17]),
      S = r(_d[18]),
      C = r(_d[19]),
      I = r(_d[20]),
      k = r(_d[21]),
      D = r(_d[22]),
      L = r(_d[23]),
      z = r(_d[24]),
      v = r(_d[25]),
      w = r(_d[26]),
      P = r(_d[27]),
      T = r(_d[28]),
      R = r(_d[29]),
      B = r(_d[30]),
      H = r(_d[31]),
      F = r(_d[32]);
    const A = (e) => Math.round(e).toLocaleString((0, f.numberLocale)()),
      M = (e) => A((0, H.localAmount)(e)),
      _ = 206,
      N = 8,
      q = (e) => w.notebookFa.units[e] || e,
      V = (e) => (e < 360 ? 2 : e < 600 ? 3 : e < 820 ? 4 : e < 1100 ? 5 : 6),
      O = (e, t) =>
        !e.unit && (0, R.measureOf)(t.unit)
          ? (0, R.measureText)(e.quantity, t.unit)
          : `${(0, f.localDigits)(String(e.quantity))} ${q(e.unit || t.unit || 'piece')}`;
    function W({ testID: e, icon: t, label: n, on: i, onPress: s }) {
      const { colors: l } = (0, k.useTheme)();
      return (0, F.jsxs)(o.default, {
        testID: e,
        accessibilityRole: 'button',
        accessibilityState: { selected: !!i },
        onPress: s,
        style: ({ pressed: e }) => ({
          flexShrink: 0,
          height: 40,
          paddingHorizontal: 12,
          borderRadius: 20,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 5,
          borderWidth: 1,
          borderColor: i ? l.accent : l.line,
          backgroundColor: i ? l.accentSoft : l.surface,
          opacity: e ? 0.75 : 1,
        }),
        children: [
          (0, F.jsx)(S.Icon, {
            name: t,
            size: 17,
            color: i ? l.accent : l.text,
          }),
          (0, F.jsx)(I.Copy, {
            numberOfLines: 1,
            style: {
              fontSize: 13,
              lineHeight: 20,
              color: i ? l.accent : l.text,
            },
            children: n,
          }),
        ],
      });
    }
    const E = (0, t.memo)(function ({
      product: e,
      pick: t,
      price: n,
      already: i,
      highlight: l = !1,
      onTap: a,
      onStep: c,
    }) {
      const { colors: d } = (0, k.useTheme)(),
        u = !!t,
        p = (0, L.isMeasured)(e),
        h = q(e.unit || 'piece'),
        y = Number.isFinite(e.stock)
          ? (0, f.L)('\u0645\u0648\u062c\u0648\u062f\u06cc {n}', {
              n:
                (0, f.localDigits)(String(Math.round(1e3 * e.stock) / 1e3)) +
                (e.unit && 'piece' !== e.unit ? ' ' + h : ''),
            })
          : '',
        x = (t) =>
          (0, F.jsx)(o.default, {
            testID: `picker-${t > 0 ? 'plus' : 'minus'}-${e.id}`,
            accessibilityRole: 'button',
            accessibilityLabel:
              t > 0
                ? (0, f.L)('\u06cc\u06a9\u06cc \u0628\u06cc\u0634\u062a\u0631')
                : (0, f.L)('\u06cc\u06a9\u06cc \u06a9\u0645\u062a\u0631'),
            hitSlop: 4,
            onPress: () => c(e.id, t),
            style: ({ pressed: e }) => ({
              width: 34,
              height: 32,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: d.accent,
              opacity: e ? 0.7 : 1,
            }),
            children: (0, F.jsx)(I.Copy, {
              style: {
                fontSize: 18,
                lineHeight: 24,
                color: d.onAccent,
                fontFamily: 'Vazirmatn_700Bold',
              },
              children: t > 0 ? '+' : '\u2212',
            }),
          });
      return (0, F.jsxs)(o.default, {
        testID: 'picker-card-' + e.id,
        accessibilityRole: 'button',
        accessibilityLabel: e.name,
        accessibilityState: { selected: u },
        onPress: () => a(e),
        style: ({ pressed: e }) => ({
          flex: 1,
          minWidth: 0,
          padding: 6,
          gap: 3,
          borderRadius: 16,
          borderWidth: u || l ? 2 : 1,
          borderColor: u || l ? d.accent : d.line,
          backgroundColor: e ? d.soft : l ? d.accentSoft : d.surface,
        }),
        children: [
          (0, F.jsxs)(s.default, {
            children: [
              (0, F.jsx)(b.ProductPhoto, { product: e, height: 78 }),
              u &&
                (0, F.jsx)(s.default, {
                  testID: 'picker-badge-' + e.id,
                  style: {
                    position: 'absolute',
                    top: 4,
                    left: 4,
                    minWidth: 26,
                    height: 26,
                    paddingHorizontal: 6,
                    borderRadius: 13,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: d.accent,
                  },
                  children: (0, F.jsx)(I.Copy, {
                    style: {
                      fontSize: 13,
                      lineHeight: 20,
                      color: d.onAccent,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: p
                      ? '\u2713'
                      : (0, f.localDigits)(String(t.quantity)),
                  }),
                }),
              i > 0 &&
                !u &&
                (0, F.jsx)(s.default, {
                  testID: 'picker-in-invoice-' + e.id,
                  style: {
                    position: 'absolute',
                    top: 4,
                    left: 4,
                    paddingHorizontal: 6,
                    borderRadius: 9,
                    backgroundColor: l ? d.accent : d.soft,
                  },
                  children: (0, F.jsx)(I.Copy, {
                    style: {
                      fontSize: 10,
                      lineHeight: 18,
                      color: l ? d.onAccent : d.muted,
                    },
                    children: (0, f.L)(
                      '\u062f\u0631 \u0641\u0627\u06a9\u062a\u0648\u0631 {n}',
                      { n: (0, f.localDigits)(String(i)) },
                    ),
                  }),
                }),
            ],
          }),
          (0, F.jsx)(I.Copy, {
            numberOfLines: 2,
            style: {
              fontSize: 12,
              lineHeight: 19,
              minHeight: 38,
              fontFamily: 'Vazirmatn_600SemiBold',
            },
            children: e.name,
          }),
          (0, F.jsx)(I.Copy, {
            numberOfLines: 1,
            style: {
              fontSize: 12,
              lineHeight: 18,
              fontFamily: 'Vazirmatn_700Bold',
            },
            children: void 0 !== n ? M(n) + (p ? ' / ' + h : '') : ' ',
          }),
          (0, F.jsx)(I.Copy, {
            numberOfLines: 1,
            style: {
              fontSize: 10,
              lineHeight: 16,
              color: e.stock <= 0 ? d.danger : d.muted,
            },
            children: y,
          }),
          (0, F.jsx)(s.default, { style: { flex: 1 } }),
          u
            ? p
              ? (0, F.jsxs)(s.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 32,
                  },
                  children: [
                    (0, F.jsx)(I.Copy, {
                      numberOfLines: 1,
                      style: {
                        flex: 1,
                        fontSize: 12,
                        color: d.accent,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: O(t, e),
                    }),
                    (0, F.jsx)(o.default, {
                      testID: 'picker-remove-' + e.id,
                      accessibilityRole: 'button',
                      accessibilityLabel: (0, f.L)(
                        '\u0628\u0631\u062f\u0627\u0634\u062a\u0646',
                      ),
                      onPress: () => c(e.id, -t.quantity),
                      hitSlop: 6,
                      style: {
                        width: 30,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      children: (0, F.jsx)(S.Icon, {
                        name: 'close',
                        size: 16,
                        color: d.muted,
                      }),
                    }),
                  ],
                })
              : (0, F.jsx)(C.StepperRow, {
                  testID: 'picker-stepper-' + e.id,
                  minus: x(-1),
                  plus: x(1),
                  style: { justifyContent: 'space-between', height: 32 },
                  children: (0, F.jsx)(I.Copy, {
                    testID: 'picker-count-' + e.id,
                    style: { fontSize: 15, fontFamily: 'Vazirmatn_700Bold' },
                    children: (0, f.localDigits)(String(t.quantity)),
                  }),
                })
            : (0, F.jsx)(s.default, {
                style: {
                  height: 32,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: d.accentSoft,
                },
                children: (0, F.jsx)(I.Copy, {
                  style: {
                    fontSize: 12,
                    color: d.accent,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: p
                    ? (0, f.L)('\u0645\u0642\u062f\u0627\u0631')
                    : (0, f.L)('+ \u0627\u0641\u0632\u0648\u062f\u0646'),
                }),
              }),
        ],
      });
    });
    function G({ product: e, value: t, onApply: n, onClose: o, price: i }) {
      return i && (0, R.measureOf)(e.unit)
        ? (0, F.jsx)(Q, {
            product: e,
            value: t,
            onApply: n,
            onClose: o,
            price: i,
          })
        : (0, F.jsx)($, { product: e, value: t, onApply: n, onClose: o });
    }
    function Q({ product: e, value: n, onApply: o, onClose: i, price: l }) {
      const a = e.unit || 'piece',
        c = n
          ? n.unit && n.unit !== a
            ? (() => {
                try {
                  return String((0, B.convertFixed)(n.quantity, n.unit, a));
                } catch {
                  return '';
                }
              })()
            : String(n.quantity)
          : '',
        [d, u] = (0, t.useState)({ quantity: c, mode: 'weight' }),
        p = Number(d.quantity),
        h = Number.isFinite(p) && p >= 0.001;
      return (0, F.jsx)(j.Sheet, {
        visible: !0,
        title: e.name,
        onClose: i,
        children: (0, F.jsxs)(s.default, {
          testID: 'picker-amount',
          style: { gap: 12 },
          children: [
            (0, F.jsx)(T.WeightBox, {
              testID: 'picker-weight',
              unit: a,
              price: l.value,
              showPrices: l.show,
              value: c,
              onChange: u,
            }),
            (0, F.jsxs)(s.default, {
              style: { flexDirection: 'row-reverse', gap: 10 },
              children: [
                (0, F.jsx)(s.default, {
                  style: { flex: 2 },
                  children: (0, F.jsx)(I.Button, {
                    testID: 'picker-amount-ok',
                    disabled: !h,
                    onPress: () =>
                      o({
                        quantity: p,
                        ...('money' === d.mode && void 0 !== d.money
                          ? { said: d.money }
                          : {}),
                      }),
                    children: (0, f.L)('\u062a\u0623\u06cc\u06cc\u062f'),
                  }),
                }),
                !!n &&
                  (0, F.jsx)(s.default, {
                    style: { flex: 1 },
                    children: (0, F.jsx)(I.Button, {
                      secondary: !0,
                      onPress: () => o(null),
                      children: (0, f.L)(
                        '\u0628\u0631\u062f\u0627\u0634\u062a\u0646',
                      ),
                    }),
                  }),
              ],
            }),
          ],
        }),
      });
    }
    function $({ product: e, value: n, onApply: i, onClose: l }) {
      const { colors: a } = (0, k.useTheme)(),
        c = e.unit || 'piece',
        d = (0, L.smallUnit)(c),
        [u, p] = (0, t.useState)(n?.unit || c),
        [h, y] = (0, t.useState)(n ? String(n.quantity) : ''),
        x =
          'g' === u || 'ml' === u
            ? ['100', '250', '500', '750']
            : 'm' === u
              ? ['1', '2', '5', '10']
              : ['0.25', '0.5', '1', '2'],
        b = Number((0, z.normalizeQuantityText)(h)),
        S = Number.isFinite(b) && b >= 0.001;
      return (0, F.jsx)(j.Sheet, {
        visible: !0,
        title: e.name,
        onClose: l,
        children: (0, F.jsxs)(s.default, {
          testID: 'picker-amount',
          style: { gap: 12 },
          children: [
            !!d &&
              (0, F.jsx)(I.Segmented, {
                value: u,
                onChange: p,
                items: [
                  { value: c, label: q(c), testID: 'picker-unit-own' },
                  { value: d, label: q(d), testID: 'picker-unit-small' },
                ],
              }),
            (0, F.jsx)(s.default, {
              testID: 'picker-quick',
              style: { ...C.NUMBER_LINE, flexWrap: 'wrap', gap: 8 },
              children: x.map((e) =>
                (0, F.jsx)(
                  o.default,
                  {
                    testID: 'picker-quick-' + e,
                    accessibilityRole: 'button',
                    onPress: () => y(e),
                    style: ({ pressed: t }) => ({
                      minWidth: 64,
                      height: 40,
                      paddingHorizontal: 12,
                      borderRadius: 12,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: h === e ? a.accent : a.line,
                      backgroundColor: h === e ? a.accentSoft : a.surface,
                      opacity: t ? 0.75 : 1,
                    }),
                    children: (0, F.jsx)(I.Copy, {
                      style: { fontSize: 14 },
                      children: (0, f.localDigits)(e.replace('.', '\u066b')),
                    }),
                  },
                  e,
                ),
              ),
            }),
            (0, F.jsxs)(s.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
              },
              children: [
                (0, F.jsx)(s.default, {
                  style: { flex: 1 },
                  children: (0, F.jsx)(I.Input, {
                    testID: 'picker-amount-input',
                    value: h,
                    onChangeText: (e) => y((0, z.normalizeQuantityText)(e)),
                    keyboardType: 'decimal-pad',
                    inputMode: 'decimal',
                    placeholder: (0, f.L)('\u0645\u0642\u062f\u0627\u0631'),
                  }),
                }),
                (0, F.jsx)(I.Copy, { style: { fontSize: 14 }, children: q(u) }),
              ],
            }),
            (0, F.jsxs)(s.default, {
              style: { flexDirection: 'row-reverse', gap: 10 },
              children: [
                (0, F.jsx)(s.default, {
                  style: { flex: 2 },
                  children: (0, F.jsx)(I.Button, {
                    testID: 'picker-amount-ok',
                    disabled: !S,
                    onPress: () =>
                      i({ quantity: b, ...(u !== c ? { unit: u } : {}) }),
                    children: (0, f.L)('\u062a\u0623\u06cc\u06cc\u062f'),
                  }),
                }),
                !!n &&
                  (0, F.jsx)(s.default, {
                    style: { flex: 1 },
                    children: (0, F.jsx)(I.Button, {
                      secondary: !0,
                      onPress: () => i(null),
                      children: (0, f.L)(
                        '\u0628\u0631\u062f\u0627\u0634\u062a\u0646',
                      ),
                    }),
                  }),
              ],
            }),
          ],
        }),
      });
    }
    const K = (e) => {
      const t = Number(e);
      return '' !== e.trim() && Number.isFinite(t) && t > 0 ? t : void 0;
    };
    function U({ name: e, taken: n, showCost: o, onAdd: i, onClose: l }) {
      const { colors: a } = (0, k.useTheme)(),
        [c, d] = (0, t.useState)(e.slice(0, 100)),
        [u, p] = (0, t.useState)('1'),
        [h, x] = (0, t.useState)(''),
        [b, S] = (0, t.useState)(''),
        C = Number((0, z.normalizeQuantityText)(u)),
        D = (0, L.nameTaken)(c, n, y.normalizeName),
        P = !!c.trim() && !D && Number.isFinite(C) && C >= 0.001,
        T = (e) =>
          (0, F.jsx)(I.Copy, {
            style: { fontSize: 12, color: a.muted },
            children: e,
          });
      return (0, F.jsx)(j.Sheet, {
        visible: !0,
        title: (0, f.L)(
          '\u0645\u062d\u0635\u0648\u0644 \u062c\u062f\u06cc\u062f',
        ),
        onClose: l,
        children: (0, F.jsxs)(s.default, {
          testID: 'new-product',
          style: { gap: 10 },
          children: [
            (0, F.jsx)(I.Copy, {
              style: { fontSize: 12, color: a.muted },
              children: (0, f.L)(
                '\u06a9\u0627\u0644\u0627\u06cc\u06cc \u06a9\u0647 \u0647\u0646\u0648\u0632 \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u0646\u06cc\u0633\u062a\u061b \u0628\u0627 \u062b\u0628\u062a \u0627\u06cc\u0646 \u062e\u0631\u06cc\u062f \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
              ),
            }),
            (0, F.jsxs)(s.default, {
              style: { gap: 6 },
              children: [
                T((0, f.L)('\u0646\u0627\u0645 \u06a9\u0627\u0644\u0627')),
                (0, F.jsx)(I.Input, {
                  testID: 'new-product-name',
                  value: c,
                  maxLength: 100,
                  onChangeText: d,
                  placeholder: (0, f.L)(
                    '\u0645\u062b\u0644\u0627\u064b \u062e\u0648\u062f\u06a9\u0627\u0631 \u0622\u0628\u06cc',
                  ),
                }),
                D &&
                  (0, F.jsx)(I.Copy, {
                    testID: 'new-product-taken',
                    style: { fontSize: 12, color: a.danger },
                    children: (0, f.L)(
                      '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u0647\u0633\u062a\u061b \u0627\u0632 \u0641\u0647\u0631\u0633\u062a \u0627\u0646\u062a\u062e\u0627\u0628\u0634 \u06a9\u0646',
                    ),
                  }),
              ],
            }),
            (0, F.jsxs)(s.default, {
              style: { gap: 6 },
              children: [
                T((0, f.L)('\u062a\u0639\u062f\u0627\u062f')),
                (0, F.jsx)(z.QuantityInput, {
                  testID: 'new-product-qty',
                  value: u,
                  onChange: p,
                  placeholder: (0, f.L)('\u062a\u0639\u062f\u0627\u062f'),
                }),
              ],
            }),
            o &&
              (0, F.jsxs)(F.Fragment, {
                children: [
                  (0, F.jsxs)(s.default, {
                    style: { gap: 6 },
                    children: [
                      T(
                        (0, f.L)(
                          '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0647\u0631 \u0639\u062f\u062f',
                        ),
                      ),
                      (0, F.jsx)(z.MoneyInput, {
                        testID: 'new-product-cost',
                        value: h,
                        onChange: x,
                      }),
                      (0, F.jsx)(I.Copy, {
                        testID: 'buy-price-hint',
                        style: { fontSize: 11, color: a.muted },
                        children: (0, v.buyPriceHint)(w.notebookFa.units.piece),
                      }),
                    ],
                  }),
                  (0, F.jsxs)(s.default, {
                    style: { gap: 6 },
                    children: [
                      T(
                        (0, f.L)(
                          '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0647\u0631 \u0639\u062f\u062f (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                        ),
                      ),
                      (0, F.jsx)(z.MoneyInput, {
                        testID: 'new-product-price',
                        value: b,
                        onChange: S,
                      }),
                    ],
                  }),
                ],
              }),
            (0, F.jsx)(I.Button, {
              testID: 'new-product-add',
              disabled: !P,
              onPress: function () {
                if (!P) return;
                const e = o ? K(h) : void 0,
                  t = o ? K(b) : void 0;
                i({
                  name: c.trim(),
                  unit: 'piece',
                  quantity: C,
                  ...(void 0 !== e ? { costPrice: e } : {}),
                  ...(void 0 !== t ? { price: t } : {}),
                });
              },
              children: (0, f.L)(
                '\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0641\u0627\u06a9\u062a\u0648\u0631',
              ),
            }),
          ],
        }),
      });
    }
  },
  970,
  [
    2, 97, 94, 232, 242, 99, 257, 380, 827, 830, 971, 595, 342, 439, 311, 515,
    628, 539, 385, 617, 407, 382, 972, 464, 614, 833, 580, 384, 834, 459, 432,
    435, 338,
  ],
);
