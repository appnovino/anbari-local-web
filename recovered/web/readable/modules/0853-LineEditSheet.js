// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 853; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.LineEditSheet = function ({
        start: e,
        product: F,
        busy: w,
        error: k,
        onClose: _,
        onSave: B,
        onRemove: P,
        salePriceEditable: q = !0,
      }) {
        const { colors: H } = (0, I.useTheme)(),
          [N, R] = (0, t.useState)(() => (e ? (0, D.draftOf)(e) : null)),
          [M, U] = (0, t.useState)(!1);
        if (!e || !N) return null;
        const V = (e) => R((t) => (t ? { ...t, ...e } : t)),
          W = (0, D.lineFixBody)(e, N),
          O = (e) => j.activityUnits[e] || e,
          A = Number(N.quantity.replace(/[^\d.]/g, '')) || 0,
          E = (e) =>
            (0, S.jsx)(n.default, {
              testID: e > 0 ? 'line-edit-plus' : 'line-edit-minus',
              accessibilityRole: 'button',
              accessibilityLabel:
                e > 0
                  ? (0, v.L)(
                      '\u06cc\u06a9\u06cc \u0628\u06cc\u0634\u062a\u0631',
                    )
                  : (0, v.L)('\u06cc\u06a9\u06cc \u06a9\u0645\u062a\u0631'),
              disabled: w || (e < 0 && !(A > 1)),
              hitSlop: 4,
              onPress: () =>
                V({ quantity: (0, D.stepQuantity)(N.quantity, e) }),
              style: ({ pressed: t }) => ({
                width: 40,
                height: 40,
                borderRadius: 20,
                alignItems: 'center',
                justifyContent: 'center',
                ...(e > 0
                  ? { backgroundColor: t ? H.accentActive : H.accent }
                  : {
                      borderWidth: 1,
                      borderColor: H.line,
                      backgroundColor: t ? H.soft : H.surface,
                      opacity: A > 1 ? 1 : 0.4,
                    }),
              }),
              children:
                e > 0
                  ? (0, S.jsx)(y.Icon, {
                      name: 'plus',
                      size: 18,
                      color: H.onAccent,
                    })
                  : (0, S.jsx)(s.Copy, {
                      style: { fontSize: 20, lineHeight: 24, color: H.text },
                      children: '\u2212',
                    }),
            }),
          Q =
            'sold' === e.kind &&
            !!(0, b.measureOf)(e.baseUnit) &&
            N.unit === e.baseUnit,
          T = 'sold' === e.kind && !q && void 0 !== F?.price,
          G = Number(N.price.replace(/[^\d.]/g, '')),
          J =
            void 0 !== e.price && '' !== N.price && Number.isFinite(G) && A > 0
              ? G * A
              : void 0;
        return (0, S.jsx)(o.Sheet, {
          visible: !0,
          title: (0, v.L)(
            '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u062b\u0628\u062a',
          ),
          onClose: () => {
            w || _();
          },
          busy: w,
          children: (0, S.jsxs)(l.default, {
            testID: 'line-edit',
            style: { gap: 16 },
            children: [
              (0, S.jsx)(s.Copy, {
                testID: 'line-edit-kind',
                style: { fontSize: 12, lineHeight: 18, color: H.muted },
                children: z(e.kind),
              }),
              (0, S.jsxs)(l.default, {
                style: { gap: 6 },
                children: [
                  (0, S.jsx)(p.FieldLabel, {
                    children: (0, v.L)(
                      '\u0646\u0627\u0645 \u06a9\u0627\u0644\u0627',
                    ),
                  }),
                  (0, S.jsx)(s.Input, {
                    testID: 'line-edit-name',
                    accessibilityLabel: (0, v.L)(
                      '\u0646\u0627\u0645 \u06a9\u0627\u0644\u0627',
                    ),
                    value: N.name,
                    maxLength: 100,
                    editable: !w && !M,
                    onChangeText: (e) => V({ name: e }),
                  }),
                ],
              }),
              Q
                ? (0, S.jsx)(f.WeightBox, {
                    testID: 'line-edit-weight',
                    unit: e.baseUnit,
                    allowMoney: !1,
                    price:
                      void 0 !== e.price && '' !== N.price && Number.isFinite(G)
                        ? G
                        : void 0,
                    showPrices: void 0 !== e.price,
                    value: N.quantity,
                    onChange: (e) => V({ quantity: e.quantity }),
                  })
                : (0, S.jsxs)(l.default, {
                    testID: 'line-edit-amount-row',
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'flex-end',
                      gap: 12,
                      flexWrap: 'wrap',
                    },
                    children: [
                      (0, S.jsxs)(l.default, {
                        style: { gap: 6 },
                        children: [
                          (0, S.jsx)(p.FieldLabel, {
                            children: (0, v.L)(
                              '\u062a\u0639\u062f\u0627\u062f',
                            ),
                          }),
                          (0, S.jsx)(c.StepperRow, {
                            testID: 'line-edit-stepper',
                            style: { gap: 6 },
                            minus: E(-1),
                            plus: E(1),
                            children: (0, S.jsx)(x.QuantityInput, {
                              testID: 'line-edit-quantity',
                              accessibilityLabel: (0, v.L)(
                                '\u062a\u0639\u062f\u0627\u062f',
                              ),
                              value: N.quantity,
                              editable: !w && !M,
                              onChange: (e) => V({ quantity: e }),
                              style: {
                                width: 64,
                                minHeight: 40,
                                height: 40,
                                paddingHorizontal: 4,
                                textAlign: 'center',
                                fontSize: 17,
                                fontFamily: 'Vazirmatn_700Bold',
                              },
                            }),
                          }),
                        ],
                      }),
                      (0, S.jsxs)(l.default, {
                        style: { gap: 6, flex: 1, minWidth: 120 },
                        children: [
                          (0, S.jsx)(p.FieldLabel, {
                            children: (0, v.L)('\u0648\u0627\u062d\u062f'),
                          }),
                          e.units.length > 1
                            ? (0, S.jsx)(h.Chips, {
                                testID: 'line-edit-unit',
                                label: (0, v.L)('\u0648\u0627\u062d\u062f'),
                                value: N.unit,
                                onChange: (t) =>
                                  R((n) =>
                                    n ? (0, D.withFixUnit)(n, t, e.kind, F) : n,
                                  ),
                                items: e.units.map((e) => ({
                                  value: e,
                                  label: O(e),
                                  testID: 'line-edit-unit-' + e,
                                })),
                              })
                            : (0, S.jsx)(l.default, {
                                style: { height: 40, justifyContent: 'center' },
                                children: (0, S.jsx)(s.Copy, {
                                  testID: 'line-edit-unit-word',
                                  style: {
                                    fontSize: 15,
                                    lineHeight: 24,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: O(N.unit),
                                }),
                              }),
                        ],
                      }),
                    ],
                  }),
              void 0 !== e.price &&
                (0, S.jsxs)(l.default, {
                  style: { gap: 6 },
                  children: [
                    (0, S.jsx)(p.FieldLabel, {
                      children: (0, v.L)(
                        '\u0642\u06cc\u0645\u062a \u0647\u0631 {unit}',
                        { unit: O(N.unit) },
                      ),
                    }),
                    T
                      ? (0, S.jsx)(l.default, {
                          style: { height: 40, justifyContent: 'center' },
                          children: (0, S.jsx)(s.Copy, {
                            testID: 'line-edit-price-text',
                            style: {
                              fontSize: 15,
                              lineHeight: 24,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children:
                              '' !== N.price && Number.isFinite(G)
                                ? (0, L.money)(G, { hint: !1 })
                                : '\u2014',
                          }),
                        })
                      : (0, S.jsx)(x.MoneyInput, {
                          testID: 'line-edit-price',
                          accessibilityLabel: (0, v.L)(
                            '\u0642\u06cc\u0645\u062a \u0647\u0631 {unit}',
                            { unit: O(N.unit) },
                          ),
                          value: N.price,
                          editable: !w && !M,
                          onChange: (e) => V({ price: e }),
                        }),
                    'sold' === e.kind &&
                      !T &&
                      !!F &&
                      N.unit === (F.unit || 'piece') &&
                      (0, S.jsx)(C.PriceChoice, {
                        testID: 'line-edit-price-choice',
                        product: F,
                        price:
                          '' !== N.price && Number.isFinite(G) ? G : void 0,
                        disabled: w || M,
                        onPick: (e, t) => V({ price: String(t) }),
                      }),
                    void 0 !== J &&
                      !Q &&
                      (0, S.jsxs)(l.default, {
                        testID: 'line-edit-total',
                        style: s.common.between,
                        children: [
                          (0, S.jsx)(s.Copy, {
                            style: {
                              fontSize: 13,
                              lineHeight: 22,
                              color: H.muted,
                            },
                            children: (0, v.L)('\u062c\u0645\u0639'),
                          }),
                          (0, S.jsx)(s.Copy, {
                            style: {
                              fontSize: 15,
                              lineHeight: 24,
                              fontFamily: 'Vazirmatn_700Bold',
                            },
                            children: (0, L.money)(J, { hint: !1 }),
                          }),
                        ],
                      }),
                  ],
                }),
              (0, S.jsx)(u.MovementDate, {
                id: 'line-edit-date',
                value: N.at,
                onChange: (e) => V({ at: e ?? new Date().toISOString() }),
              }),
              !!k &&
                (0, S.jsx)(s.Copy, {
                  testID: 'line-edit-error',
                  accessibilityRole: 'alert',
                  style: { color: H.danger },
                  children: k,
                }),
              M
                ? (0, S.jsxs)(l.default, {
                    testID: 'line-edit-confirm',
                    style: {
                      gap: 10,
                      padding: 14,
                      borderRadius: 16,
                      borderWidth: 1,
                      borderColor: H.danger,
                      backgroundColor: H.surface,
                    },
                    children: [
                      (0, S.jsx)(s.Copy, {
                        style: { fontFamily: 'Vazirmatn_700Bold' },
                        children: (0, v.L)(
                          '\u0627\u06cc\u0646 \u062b\u0628\u062a \u062d\u0630\u0641 \u0634\u0648\u062f\u061f',
                        ),
                      }),
                      (0, S.jsx)(s.Copy, {
                        style: { fontSize: 13, lineHeight: 21, color: H.muted },
                        children: (0, v.L)(
                          '\u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u062f. \u062b\u0628\u062a \u062f\u0631 \u062a\u0627\u0631\u06cc\u062e\u0686\u0647 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f \u0648 \u06a9\u0646\u0627\u0631\u0634 \xab\u062d\u0630\u0641 \u0634\u062f\xbb \u0646\u0648\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                        ),
                      }),
                      (0, S.jsxs)(l.default, {
                        style: { flexDirection: 'row-reverse', gap: 10 },
                        children: [
                          (0, S.jsx)(l.default, {
                            style: s.common.flex,
                            children: (0, S.jsx)(s.Button, {
                              danger: !0,
                              testID: 'line-edit-remove-yes',
                              disabled: w,
                              onPress: P,
                              children: (0, v.L)(
                                '\u0628\u0644\u0647\u060c \u062d\u0630\u0641 \u0634\u0648\u062f',
                              ),
                            }),
                          }),
                          (0, S.jsx)(l.default, {
                            style: s.common.flex,
                            children: (0, S.jsx)(s.Button, {
                              secondary: !0,
                              testID: 'line-edit-remove-no',
                              disabled: w,
                              onPress: () => U(!1),
                              children: (0, v.L)('\u0646\u0647'),
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : (0, S.jsxs)(l.default, {
                    style: { gap: 10 },
                    children: [
                      (0, S.jsx)(s.Button, {
                        testID: 'line-edit-save',
                        disabled: w || !W || 'invalid' === W,
                        onPress: () => {
                          W && 'invalid' !== W && B(W);
                        },
                        children: w
                          ? (0, v.L)(
                              '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
                            )
                          : (0, v.L)('\u062b\u0628\u062a'),
                      }),
                      (0, S.jsx)(s.DangerLink, {
                        testID: 'line-edit-remove',
                        onPress: () => {
                          w || U(!0);
                        },
                        children: (0, v.L)(
                          '\u062d\u0630\u0641 \u0627\u06cc\u0646 \u062b\u0628\u062a',
                        ),
                      }),
                    ],
                  }),
            ],
          }),
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      l = e(r(d[2])),
      s = r(d[3]),
      o = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      h = r(d[7]),
      y = r(d[8]),
      p = r(d[9]),
      x = r(d[10]),
      f = r(d[11]),
      b = r(d[12]),
      j = r(d[13]),
      L = r(d[14]),
      v = r(d[15]),
      I = r(d[16]),
      C = r(d[17]),
      D = r(d[18]),
      S = r(d[19]);
    const z = (e) =>
      'sold' === e
        ? (0, v.L)('\u0641\u0631\u0648\u0634')
        : 'received' === e
          ? (0, v.L)('\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627')
          : 'used' === e
            ? (0, v.L)('\u0645\u0635\u0631\u0641 \u0634\u062f')
            : (0, v.L)('\u062f\u0648\u0631\u0631\u06cc\u0632');
  },
  853,
  [
    2, 232, 99, 407, 539, 617, 691, 840, 385, 774, 614, 834, 459, 458, 435, 311,
    382, 799, 463, 338,
  ],
);
