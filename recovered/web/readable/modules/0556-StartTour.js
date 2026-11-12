// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 556; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.StartTour = function ({ shop: e, name: f, onEnter: p, start: x }) {
        const { colors: V } = (0, b.useTheme)(),
          B = (0, h.useSafeAreaInsets)(),
          { height: F, width: T } = (0, c.default)(),
          [P, W] = (0, t.useState)(
            'plans' === x ? { kind: 'plans' } : { kind: 'slide', index: 0 },
          ),
          M = (0, t.useRef)(new i.default.Value(1)).current,
          { data: E } = (0, z.useBilling)(),
          O = (0, t.useMemo)(
            () =>
              (E?.plans || [])
                .filter((e) => 'standard' === e.id || 'pro' === e.id)
                .sort(
                  (e, t) => ('pro' === e.id ? 1 : 0) - ('pro' === t.id ? 1 : 0),
                ),
            [E],
          ),
          [U, N] = (0, t.useState)('pro'),
          [q, Q] = (0, t.useState)(1),
          [G, X] = (0, t.useState)(null),
          [Z, J] = (0, t.useState)(!1),
          [K, Y] = (0, t.useState)(''),
          [$, ee] = (0, t.useState)(0),
          te = (0, t.useRef)(null);
        function ne(e) {
          i.default
            .timing(M, { toValue: 0, duration: 110, useNativeDriver: !1 })
            .start(() => {
              (W(e),
                Y(''),
                i.default
                  .timing(M, { toValue: 1, duration: 180, useNativeDriver: !1 })
                  .start());
            });
        }
        const ie = H.length + 1,
          oe = 'slide' === P.kind ? P.index + 1 : ie;
        async function le() {
          if (!Z) {
            (J(!0), Y(''));
            try {
              const t = await (0, L.buyWithBazaar)(
                e,
                U,
                q,
                (0, L.bazaarLaunchQuote)(G),
                (0, L.bazaarDynamicQuote)(G),
              );
              'activated' === t
                ? ((0, z.notifyBillingChanged)(), p())
                : ('unsupported' !== t && 'expired' !== t) ||
                  (ee((e) => e + 1), Y((0, L.bazaarRetryText)(t)));
            } catch (e) {
              Y(e instanceof Error ? e.message : (0, j.message)(e));
            } finally {
              J(!1);
            }
          }
        }
        async function re() {
          if (C.fromBazaar) await le();
          else if (!Z) {
            (J(!0),
              Y(''),
              (te.current?.planId === U && te.current?.months === q) ||
                (te.current = {
                  key: (0, j.randomUUID)(),
                  planId: U,
                  months: q,
                }));
            try {
              const t = await (0, j.request)(
                (0, j.shopPath)(e, '/billing/checkout'),
                'POST',
                { planId: U, months: q },
                { key: te.current.key },
              );
              if (t.activated) return ((0, z.notifyBillingChanged)(), void p());
              if (
                t.redirectUrl &&
                'number' == typeof t.amountToman &&
                t.amountToman !== ae
              )
                return (
                  (te.current = null),
                  Y(
                    (0, w.L)(
                      '\u0642\u06cc\u0645\u062a \u0639\u0648\u0636 \u0634\u062f (\u0645\u0647\u0644\u062a \u062a\u062e\u0641\u06cc\u0641 \u062a\u0645\u0627\u0645 \u0634\u062f). \u0645\u0628\u0644\u063a \u062a\u0627\u0632\u0647 \u0631\u0627 \u0628\u0628\u06cc\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \xab\u062e\u0631\u06cc\u062f \u0648 \u0634\u0631\u0648\u0639\xbb \u0631\u0627 \u0628\u0632\u0646.',
                    ),
                  ),
                  void ee((e) => e + 1)
                );
              t.redirectUrl &&
                ('undefined' != typeof window
                  ? window.location.assign(t.redirectUrl)
                  : await o.default.openURL(t.redirectUrl));
            } catch (e) {
              ((te.current = null),
                Y(
                  e instanceof Error && 'billing_not_configured' === e.message
                    ? (0, w.L)(
                        '\u067e\u0631\u062f\u0627\u062e\u062a \u0622\u0646\u0644\u0627\u06cc\u0646 \u0631\u0648\u06cc \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647 \u0647\u0646\u0648\u0632 \u0648\u0635\u0644 \u0646\u06cc\u0633\u062a\u061b \u0631\u0648\u06cc \u0633\u0627\u06cc\u062a \u0627\u0635\u0644\u06cc \u0647\u0645\u06cc\u0646 \u062f\u06a9\u0645\u0647 \u0628\u0647 \u062f\u0631\u06af\u0627\u0647 \u0628\u0627\u0646\u06a9 \u0645\u06cc\u200c\u0631\u0648\u062f.',
                      )
                    : (0, j.message)(e),
                ));
            } finally {
              J(!1);
            }
          }
        }
        ((0, t.useEffect)(() => {
          if ('offer' !== P.kind) return;
          let t = !0;
          return (
            X(null),
            (0, j.request)((0, j.shopPath)(e, '/billing/quote'), 'POST', {
              planId: U,
              months: q,
            })
              .then((e) => {
                t && X(e);
              })
              .catch((e) => {
                t && Y((0, j.message)(e));
              }),
            () => {
              t = !1;
            }
          );
        }, [P.kind, U, q, e.id, $]),
          (0, t.useEffect)(() => {
            if (!C.fromBazaar) return;
            let t = !0;
            return (
              (0, L.recoverBazaarPurchases)(e).then((e) => {
                e && t && ((0, z.notifyBillingChanged)(), p());
              }),
              () => {
                t = !1;
              }
            );
          }, [e.id]));
        const ae = G
            ? C.fromBazaar && !(0, L.bazaarDiscountQuote)(G)
              ? G.originalAmountToman
              : G.finalAmountToman
            : 0,
          se = Math.min(T - (T < 380 ? 32 : 44), 440),
          de = (e, t, n, i = !1) =>
            (0, I.jsx)(l.default, {
              testID: n,
              accessibilityRole: 'button',
              disabled: i || Z,
              onPress: t,
              style: ({ pressed: e }) => ({
                height: 56,
                borderRadius: 16,
                backgroundColor: V.accent,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: i || Z ? 0.5 : 1,
                transform: [{ scale: e ? 0.98 : 1 }],
              }),
              children: (0, I.jsx)(y.Copy, {
                style: {
                  fontSize: 17,
                  lineHeight: 24,
                  fontFamily: 'Vazirmatn_700Bold',
                  color: V.onAccent,
                },
                children: Z
                  ? (0, w.L)(
                      '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645\u2026',
                    )
                  : e,
              }),
            }),
          ce = (e, t, n) =>
            (0, I.jsx)(l.default, {
              testID: n,
              accessibilityRole: 'button',
              onPress: t,
              hitSlop: 8,
              style: { alignItems: 'center', paddingVertical: 10 },
              children: (0, I.jsx)(y.Copy, {
                style: { fontSize: 14, lineHeight: 22, color: V.muted },
                children: e,
              }),
            }),
          ue = (e) => e.periods.find((e) => e.months === q),
          fe = (e) =>
            1 === e
              ? (0, w.L)('\u06cc\u06a9\u200c\u0645\u0627\u0647\u0647')
              : 3 === e
                ? (0, w.L)('\u0633\u0647\u200c\u0645\u0627\u0647\u0647')
                : (0, w.L)('\u06cc\u06a9\u200c\u0633\u0627\u0644\u0647'),
          he =
            (!C.fromBazaar || E?.launch?.percent === S.BAZAAR_LAUNCH_PERCENT) &&
            !!E?.launch &&
            (E.launch.months || [1]).includes(1),
          ye = C.fromBazaar && !!E && !E.bazaarCheckout,
          ge = (
            E?.free?.monthly_record_limit ?? R.FREE_RECORD_LIMIT
          ).toLocaleString((0, w.numberLocale)()),
          me = (0, I.jsx)(y.Copy, {
            testID: 'tour-free-note',
            style: {
              fontSize: 13,
              lineHeight: 22,
              color: V.muted,
              textAlign: 'center',
              paddingBottom: 2,
            },
            children: (0, w.L)(
              '\u0645\u06cc\u200c\u062a\u0648\u0646\u06cc \u0631\u0627\u06cc\u06af\u0627\u0646 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc: {n} \u06a9\u0627\u0631\u060c \u0642\u0628\u0644 \u0627\u0632 \u062e\u0631\u06cc\u062f\u061b \xab\u0628\u0639\u062f\u0627\u064b\xbb \u0631\u0648 \u0628\u0632\u0646.',
              { n: ge },
            ),
          }),
          pe = (() => {
            if ('slide' === P.kind) {
              const e = H[P.index];
              return (0, I.jsxs)(s.default, {
                style: { alignItems: 'center', gap: 22 },
                children: [
                  (0, I.jsx)(v, { step: e.key, width: se }),
                  (0, I.jsxs)(s.default, {
                    style: { gap: 8, maxWidth: 440, width: '100%' },
                    children: [
                      0 === P.index &&
                        !!f &&
                        (0, I.jsx)(y.Copy, {
                          style: {
                            fontSize: 14,
                            lineHeight: 22,
                            color: V.accent,
                            fontFamily: 'Vazirmatn_700Bold',
                            textAlign: 'center',
                          },
                          children: (0, w.L)(
                            '{name}\u060c \u0627\u0646\u0628\u0627\u0631\u062a \u0622\u0645\u0627\u062f\u0647\u200c\u0633\u062a!',
                            { name: f },
                          ),
                        }),
                      (0, I.jsx)(y.Copy, {
                        accessibilityRole: 'header',
                        style: {
                          fontSize: 25,
                          lineHeight: 38,
                          fontFamily: 'Vazirmatn_700Bold',
                          textAlign: 'center',
                        },
                        children: e.title,
                      }),
                      (0, I.jsx)(y.Copy, {
                        style: {
                          fontSize: 16,
                          lineHeight: 28,
                          color: V.muted,
                          textAlign: 'center',
                        },
                        children: e.body,
                      }),
                    ],
                  }),
                ],
              });
            }
            if ('choice' === P.kind)
              return (0, I.jsxs)(s.default, {
                style: {
                  gap: 16,
                  maxWidth: 480,
                  alignSelf: 'center',
                  width: '100%',
                },
                children: [
                  (0, I.jsx)(y.Copy, {
                    accessibilityRole: 'header',
                    style: {
                      fontSize: 23,
                      lineHeight: 36,
                      fontFamily: 'Vazirmatn_700Bold',
                      textAlign: 'center',
                    },
                    children: (0, w.L)(
                      '\u062f\u0641\u062a\u0631\u0686\u0647 \u06cc\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc\u061f',
                    ),
                  }),
                  (0, I.jsxs)(s.default, {
                    style: {
                      borderRadius: 20,
                      overflow: 'hidden',
                      borderWidth: a.default.hairlineWidth,
                      borderColor: V.line,
                      backgroundColor: V.surface,
                    },
                    children: [
                      (0, I.jsxs)(s.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          backgroundColor: V.soft,
                        },
                        children: [
                          (0, I.jsx)(y.Copy, {
                            style: [D.head, { color: V.muted }],
                            children: (0, w.L)(
                              '\ud83d\udcd2 \u062f\u0641\u062a\u0631\u0686\u0647',
                            ),
                          }),
                          (0, I.jsx)(y.Copy, {
                            style: [D.head, { color: V.accent }],
                            children: (0, w.L)(
                              '\u2728 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
                            ),
                          }),
                        ],
                      }),
                      A.map(([e, t], n) =>
                        (0, I.jsxs)(
                          s.default,
                          {
                            style: {
                              flexDirection: 'row-reverse',
                              borderTopWidth: a.default.hairlineWidth,
                              borderTopColor: V.line,
                            },
                            children: [
                              (0, I.jsx)(y.Copy, {
                                style: [D.cell, { color: V.muted }],
                                children: e,
                              }),
                              (0, I.jsx)(y.Copy, {
                                style: [
                                  D.cell,
                                  { fontFamily: 'Vazirmatn_600SemiBold' },
                                ],
                                children: t,
                              }),
                            ],
                          },
                          n,
                        ),
                      ),
                    ],
                  }),
                  !C.fromBazaar &&
                    (0, I.jsx)(y.Copy, {
                      style: {
                        fontSize: 14,
                        lineHeight: 23,
                        color: V.success,
                        textAlign: 'center',
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: (0, w.L)(
                        '\u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f\u062a: \u0627\u06af\u0647 \u0631\u0627\u0636\u06cc \u0646\u0628\u0648\u062f\u06cc\u060c \u062f\u0631 {n} \u0631\u0648\u0632 \u0627\u0648\u0644 \u067e\u0648\u0644\u062a \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0647 (\u0645\u0646\u0647\u0627\u06cc {fee}\u066a \u06a9\u0627\u0631\u0645\u0632\u062f \u0648 \u0645\u0627\u0644\u06cc\u0627\u062a).',
                        {
                          n: (E?.refundDays || 7).toLocaleString(
                            (0, w.numberLocale)(),
                          ),
                          fee: (E?.refundFee ?? 10).toLocaleString(
                            (0, w.numberLocale)(),
                          ),
                        },
                      ),
                    }),
                ],
              });
            if ('plans' === P.kind)
              return (0, I.jsxs)(s.default, {
                style: {
                  gap: 14,
                  maxWidth: 520,
                  alignSelf: 'center',
                  width: '100%',
                },
                children: [
                  (0, I.jsx)(y.Copy, {
                    accessibilityRole: 'header',
                    style: {
                      fontSize: 23,
                      lineHeight: 36,
                      fontFamily: 'Vazirmatn_700Bold',
                      textAlign: 'center',
                    },
                    children: (0, w.L)(
                      '\u0637\u0631\u062d\u062a \u0631\u0648 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
                    ),
                  }),
                  !E &&
                    (0, I.jsx)(y.Copy, {
                      style: { textAlign: 'center', color: V.muted },
                      children: (0, w.L)(
                        '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                      ),
                    }),
                  (0, I.jsx)(s.default, {
                    accessibilityRole: 'radiogroup',
                    style: {
                      flexDirection: 'row-reverse',
                      padding: 4,
                      gap: 4,
                      borderRadius: 16,
                      backgroundColor: V.soft,
                    },
                    children: [1, 3, 12].map((e) => {
                      const t = q === e,
                        n = (0, _.savingsPercent)(
                          O.find((e) => e.id === U),
                          e,
                        );
                      return (0, I.jsxs)(
                        l.default,
                        {
                          testID: 'tour-period-' + e,
                          accessibilityRole: 'radio',
                          accessibilityState: { selected: t },
                          onPress: () => Q(e),
                          style: {
                            flex: 1,
                            minHeight: 52,
                            borderRadius: 12,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: t ? V.surface : 'transparent',
                            borderWidth: t ? 1.5 : 0,
                            borderColor: V.accent,
                          },
                          children: [
                            (0, I.jsx)(y.Copy, {
                              style: {
                                fontSize: 14,
                                lineHeight: 22,
                                fontFamily: t
                                  ? 'Vazirmatn_700Bold'
                                  : 'Vazirmatn_500Medium',
                              },
                              children: fe(e),
                            }),
                            n > 0
                              ? (0, I.jsx)(y.Copy, {
                                  style: {
                                    fontSize: 10,
                                    lineHeight: 16,
                                    color: V.success,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: (0, w.L)(
                                    '{n}\u066a \u0635\u0631\u0641\u0647\u200c\u062c\u0648\u06cc\u06cc',
                                    {
                                      n: n.toLocaleString(
                                        (0, w.numberLocale)(),
                                      ),
                                    },
                                  ),
                                })
                              : null,
                          ],
                        },
                        e,
                      );
                    }),
                  }),
                  O.map((e) => {
                    const t = U === e.id;
                    return (0, I.jsxs)(
                      l.default,
                      {
                        testID: 'tour-plan-' + e.id,
                        accessibilityRole: 'radio',
                        accessibilityState: { selected: t },
                        onPress: () => N(e.id),
                        style: {
                          borderRadius: 20,
                          borderWidth: t ? 2 : 1,
                          borderColor: t ? V.accent : V.line,
                          backgroundColor: V.surface,
                          padding: 16,
                          gap: 6,
                        },
                        children: [
                          (0, I.jsxs)(s.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                            },
                            children: [
                              (0, I.jsxs)(y.Copy, {
                                style: {
                                  fontSize: 18,
                                  lineHeight: 28,
                                  fontFamily: 'Vazirmatn_700Bold',
                                },
                                children: [
                                  'pro' === e.id
                                    ? (0, w.L)('\u067e\u0644\u0627\u0633')
                                    : (0, w.L)(
                                        '\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f',
                                      ),
                                  'pro' === e.id ? '  \u26a1' : '',
                                ],
                              }),
                              (0, I.jsx)(s.default, {
                                style: {
                                  width: 24,
                                  height: 24,
                                  borderRadius: 12,
                                  borderWidth: 2,
                                  borderColor: t ? V.accent : V.line,
                                  backgroundColor: t ? V.accent : 'transparent',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                },
                                children:
                                  t &&
                                  (0, I.jsx)(m.Icon, {
                                    name: 'check',
                                    size: 14,
                                    color: V.onAccent,
                                  }),
                              }),
                            ],
                          }),
                          (() => {
                            const t = ue(e);
                            if (!t) return null;
                            const n = (0, _.perMonth)(t.total_toman, q);
                            return (0, I.jsxs)(I.Fragment, {
                              children: [
                                (0, I.jsxs)(y.Copy, {
                                  style: {
                                    fontSize: 24,
                                    lineHeight: 36,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                  children: [
                                    (0, k.planMoney)(n, { full: !0, hint: !1 }),
                                    (0, I.jsx)(y.Copy, {
                                      style: { fontSize: 13, color: V.muted },
                                      children:
                                        ' ' +
                                        (0, w.L)(
                                          '\u062f\u0631 \u0645\u0627\u0647',
                                        ),
                                    }),
                                  ],
                                }),
                                q > 1 &&
                                  (0, I.jsxs)(y.Copy, {
                                    style: {
                                      fontSize: 12,
                                      lineHeight: 20,
                                      color: V.muted,
                                    },
                                    children: [
                                      (0, w.L)(
                                        '\u0645\u062c\u0645\u0648\u0639 {amount}',
                                        {
                                          amount: (0, k.planMoney)(
                                            t.total_toman,
                                            { full: !0, hint: !1 },
                                          ),
                                        },
                                      ),
                                      t.savings_toman > 0
                                        ? ' \xb7 ' +
                                          (0, w.L)(
                                            '{n}\u066a \u0635\u0631\u0641\u0647\u200c\u062c\u0648\u06cc\u06cc',
                                            {
                                              n: (0, _.savingsPercent)(
                                                e,
                                                q,
                                              ).toLocaleString(
                                                (0, w.numberLocale)(),
                                              ),
                                            },
                                          )
                                        : '',
                                    ],
                                  }),
                              ],
                            });
                          })(),
                          (0, I.jsxs)(y.Copy, {
                            style: {
                              fontSize: 13,
                              lineHeight: 21,
                              color: V.muted,
                            },
                            children: [
                              (0, w.L)(
                                '\u0631\u0648\u0632\u06cc {n} \u062b\u0628\u062a \u0628\u0627 \u0635\u062f\u0627',
                                {
                                  n: e.ai_daily_limit.toLocaleString(
                                    (0, w.numberLocale)(),
                                  ),
                                },
                              ),
                              ' \xb7 ',
                              e.member_limit > 1
                                ? (0, w.L)(
                                    '\u0635\u0627\u062d\u0628 \u0645\u063a\u0627\u0632\u0647 + {n} \u0647\u0645\u06a9\u0627\u0631',
                                    {
                                      n: (e.member_limit - 1).toLocaleString(
                                        (0, w.numberLocale)(),
                                      ),
                                    },
                                  )
                                : (0, w.L)(
                                    '\u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u062e\u0648\u062f\u062a',
                                  ),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    );
                  }),
                ],
              });
            const e = O.find((e) => e.id === U),
              t =
                !(C.fromBazaar && !(0, L.bazaarDiscountQuote)(G)) &&
                !!G &&
                G.discountPercent > 0,
              n = ae;
            return (0, I.jsxs)(s.default, {
              style: {
                gap: 14,
                maxWidth: 480,
                alignSelf: 'center',
                width: '100%',
                alignItems: 'center',
              },
              children: [
                (0, I.jsx)(s.default, {
                  style: {
                    width: 120,
                    height: 120,
                    borderRadius: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: V.accentSoft,
                  },
                  children: (0, I.jsx)(y.Copy, {
                    style: { fontSize: 60, lineHeight: 76 },
                    children: t || q > 1 ? '\ud83c\udf81' : '\u2705',
                  }),
                }),
                (0, I.jsx)(y.Copy, {
                  accessibilityRole: 'header',
                  style: {
                    fontSize: 23,
                    lineHeight: 36,
                    fontFamily: 'Vazirmatn_700Bold',
                    textAlign: 'center',
                  },
                  children: t
                    ? (0, w.L)(
                        '\u06cc\u0647 \u062e\u0628\u0631 \u062e\u0648\u0628! {p}\u066a \u062a\u062e\u0641\u06cc\u0641 \u0628\u0631\u0627\u06cc \u062a\u0648',
                        {
                          p: G.discountPercent.toLocaleString(
                            (0, w.numberLocale)(),
                          ),
                        },
                      )
                    : q > 1 && e && (ue(e)?.discount_percent || 0) > 0
                      ? (0, w.L)(
                          '\u0627\u0646\u062a\u062e\u0627\u0628 \u0647\u0648\u0634\u0645\u0646\u062f\u0627\u0646\u0647! {n}\u066a \u0635\u0631\u0641\u0647\u200c\u062c\u0648\u06cc\u06cc',
                          {
                            n: (0, _.savingsPercent)(e, q).toLocaleString(
                              (0, w.numberLocale)(),
                            ),
                          },
                        )
                      : (0, w.L)(
                          '\u0622\u0645\u0627\u062f\u0647\u200c\u0627\u06cc\u061f',
                        ),
                }),
                t &&
                  (0, I.jsx)(y.Copy, {
                    style: {
                      fontSize: 15,
                      lineHeight: 25,
                      color: V.muted,
                      textAlign: 'center',
                    },
                    children:
                      'launch' === G.discountSource
                        ? (0, w.L)(
                            '\u0628\u0647\u200c\u062e\u0627\u0637\u0631 \u0627\u0641\u062a\u062a\u0627\u062d \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc\u060c \u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f \u06cc\u06a9\u200c\u0645\u0627\u0647\u0647\u200c\u0627\u062a \u0628\u0627 \u062a\u062e\u0641\u06cc\u0641 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0647.',
                          )
                        : (0, w.L)(
                            '\u062a\u062e\u0641\u06cc\u0641 \u0631\u0648\u06cc \u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f\u062a \u0627\u0639\u0645\u0627\u0644 \u0634\u062f.',
                          ),
                  }),
                (0, I.jsxs)(s.default, {
                  style: {
                    width: '100%',
                    borderRadius: 20,
                    borderWidth: 2,
                    borderColor: V.accent,
                    backgroundColor: V.surface,
                    padding: 18,
                    gap: 6,
                    alignItems: 'center',
                  },
                  children: [
                    (0, I.jsxs)(y.Copy, {
                      style: {
                        fontSize: 15,
                        lineHeight: 24,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: [
                        'pro' === e?.id
                          ? (0, w.L)('\u067e\u0644\u0627\u0633')
                          : (0, w.L)(
                              '\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f',
                            ),
                        ' \xb7 ',
                        fe(q),
                      ],
                    }),
                    !G &&
                      !K &&
                      (0, I.jsx)(y.Copy, {
                        style: { color: V.muted },
                        children: (0, w.L)(
                          '\u062f\u0631 \u062d\u0627\u0644 \u0645\u062d\u0627\u0633\u0628\u0647\u2026',
                        ),
                      }),
                    G &&
                      t &&
                      (0, I.jsx)(y.Copy, {
                        style: {
                          fontSize: 16,
                          lineHeight: 24,
                          color: V.muted,
                          textDecorationLine: 'line-through',
                        },
                        children: (0, k.planMoney)(G.originalAmountToman, {
                          full: !0,
                          hint: !1,
                        }),
                      }),
                    G &&
                      (0, I.jsx)(y.Copy, {
                        testID: 'tour-final-price',
                        style: {
                          fontSize: 30,
                          lineHeight: 44,
                          fontFamily: 'Vazirmatn_700Bold',
                          color: t ? V.success : V.text,
                        },
                        children: (0, k.planMoney)(n, { full: !0, hint: !1 }),
                      }),
                    G &&
                      !t &&
                      q > 1 &&
                      !!e &&
                      (ue(e)?.savings_toman || 0) > 0 &&
                      (0, I.jsx)(y.Copy, {
                        style: {
                          fontSize: 13,
                          lineHeight: 22,
                          color: V.success,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: (0, w.L)(
                          '{amount} \u06a9\u0645\u062a\u0631 \u0627\u0632 \u067e\u0631\u062f\u0627\u062e\u062a \u0645\u0627\u0647\u200c\u0628\u0647\u200c\u0645\u0627\u0647',
                          {
                            amount: (0, k.planMoney)(ue(e).savings_toman, {
                              full: !0,
                              hint: !1,
                            }),
                          },
                        ),
                      }),
                  ],
                }),
                G &&
                  !t &&
                  q > 1 &&
                  he &&
                  (0, I.jsx)(l.default, {
                    testID: 'tour-try-monthly',
                    accessibilityRole: 'button',
                    onPress: () => Q(1),
                    style: {
                      padding: 12,
                      borderRadius: 16,
                      borderWidth: 1,
                      borderStyle: 'dashed',
                      borderColor: V.accent,
                      backgroundColor: V.accentSoft,
                      width: '100%',
                    },
                    children: (0, I.jsx)(y.Copy, {
                      style: {
                        fontSize: 13,
                        lineHeight: 22,
                        color: V.accent,
                        textAlign: 'center',
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: (0, w.L)(
                        '\u06cc\u0627 \u06cc\u06a9\u200c\u0645\u0627\u0647\u0647 \u0628\u0627 {p}\u066a \u062a\u062e\u0641\u06cc\u0641 \u0627\u0641\u062a\u062a\u0627\u062d\u06cc\u0647 \u0634\u0631\u0648\u0639 \u06a9\u0646',
                        {
                          p: (E?.launch?.percent || 30).toLocaleString(
                            (0, w.numberLocale)(),
                          ),
                        },
                      ),
                    }),
                  }),
                ye &&
                  (0, I.jsx)(y.Copy, {
                    testID: 'tour-bazaar-off',
                    style: {
                      fontSize: 13,
                      lineHeight: 22,
                      color: V.muted,
                      textAlign: 'center',
                    },
                    children: (0, w.L)(
                      '\u062e\u0631\u06cc\u062f \u0628\u0627 \u06a9\u0627\u0641\u0647\u200c\u0628\u0627\u0632\u0627\u0631 \u0627\u0644\u0627\u0646 \u0631\u0648\u06cc \u0633\u0631\u0648\u0631 \u0645\u0627 \u0641\u0639\u0627\u0644 \u0646\u06cc\u0633\u062a\u061b \u067e\u0648\u0644\u06cc \u06a9\u0645 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u06a9\u0645\u06cc \u0628\u0639\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646.',
                    ),
                  }),
                !C.fromBazaar &&
                  (0, I.jsx)(y.Copy, {
                    style: {
                      fontSize: 13,
                      lineHeight: 22,
                      color: V.muted,
                      textAlign: 'center',
                    },
                    children: (0, w.L)(
                      '\u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f\u062a: \u0627\u06af\u0647 \u0631\u0627\u0636\u06cc \u0646\u0628\u0648\u062f\u06cc\u060c \u062f\u0631 {n} \u0631\u0648\u0632 \u0627\u0648\u0644 \u067e\u0648\u0644\u062a \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0647 (\u0645\u0646\u0647\u0627\u06cc {fee}\u066a \u06a9\u0627\u0631\u0645\u0632\u062f \u0648 \u0645\u0627\u0644\u06cc\u0627\u062a).',
                      {
                        n: (E?.refundDays || 7).toLocaleString(
                          (0, w.numberLocale)(),
                        ),
                        fee: (E?.refundFee ?? 10).toLocaleString(
                          (0, w.numberLocale)(),
                        ),
                      },
                    ),
                  }),
              ],
            });
          })(),
          xe =
            'slide' === P.kind
              ? (0, I.jsx)(I.Fragment, {
                  children: de(
                    P.index === H.length - 1
                      ? (0, w.L)(
                          '\u062e\u0628\u060c \u062d\u0627\u0644\u0627 \u0686\u06cc\u061f',
                        )
                      : (0, w.L)('\u0627\u062f\u0627\u0645\u0647'),
                    () =>
                      ne(
                        P.index < H.length - 1
                          ? { kind: 'slide', index: P.index + 1 }
                          : { kind: 'choice' },
                      ),
                    'tour-next',
                  ),
                })
              : 'choice' === P.kind
                ? (0, I.jsxs)(I.Fragment, {
                    children: [
                      de(
                        (0, w.L)(
                          '\u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0645\u06cc\u200c\u062e\u0648\u0627\u0645\u0634',
                        ),
                        () => ne({ kind: 'plans' }),
                        'tour-want',
                      ),
                      ce(
                        (0, w.L)(
                          '\u0641\u0639\u0644\u0627\u064b \u0631\u0627\u06cc\u06af\u0627\u0646 \u0627\u0645\u062a\u062d\u0627\u0646 \u0645\u06cc\u200c\u06a9\u0646\u0645 ({n} \u06a9\u0627\u0631 \u0627\u0645\u062a\u062d\u0627\u0646\u06cc)',
                          { n: ge },
                        ),
                        p,
                        'tour-notebook',
                      ),
                    ],
                  })
                : 'plans' === P.kind
                  ? (0, I.jsxs)(I.Fragment, {
                      children: [
                        me,
                        de(
                          (0, w.L)('\u0627\u062f\u0627\u0645\u0647'),
                          () => ne({ kind: 'offer' }),
                          'tour-plans-next',
                          !O.length,
                        ),
                        ce(
                          (0, w.L)('\u0628\u0639\u062f\u0627\u064b'),
                          p,
                          'tour-later',
                        ),
                      ],
                    })
                  : (0, I.jsxs)(I.Fragment, {
                      children: [
                        me,
                        !C.fromBazaar &&
                          !!G &&
                          100 !== G.discountPercent &&
                          (0, I.jsx)(n.VpnNote, { testID: 'tour-vpn-note' }),
                        de(
                          (0, w.L)(
                            '\u062e\u0631\u06cc\u062f \u0648 \u0634\u0631\u0648\u0639',
                          ),
                          () => {
                            re();
                          },
                          'tour-buy',
                          !G || ye,
                        ),
                        ce(
                          (0, w.L)('\u0628\u0639\u062f\u0627\u064b'),
                          p,
                          'tour-later',
                        ),
                      ],
                    });
        return (0, I.jsxs)(s.default, {
          style: {
            flex: 1,
            backgroundColor: V.bg,
            paddingTop: B.top + 10,
            paddingBottom: B.bottom + 12,
          },
          children: [
            (0, I.jsxs)(s.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
                paddingHorizontal: 16,
                height: 44,
              },
              children: [
                (0, I.jsx)(s.default, {
                  style: { flex: 1, flexDirection: 'row-reverse', gap: 4 },
                  children: Array.from({ length: ie }, (e, t) =>
                    (0, I.jsx)(
                      s.default,
                      {
                        style: {
                          flex: 1,
                          height: 5,
                          borderRadius: 3,
                          backgroundColor: t < oe ? V.accent : V.soft,
                        },
                      },
                      t,
                    ),
                  ),
                }),
                ('slide' !== P.kind || P.index > 0) &&
                  !('plans' === x && 'plans' === P.kind) &&
                  (0, I.jsx)(l.default, {
                    testID: 'tour-back',
                    accessibilityRole: 'button',
                    accessibilityLabel: (0, w.L)('\u0642\u0628\u0644\u06cc'),
                    onPress: () => {
                      'slide' === P.kind && P.index > 0
                        ? ne({ kind: 'slide', index: P.index - 1 })
                        : 'choice' === P.kind
                          ? ne({ kind: 'slide', index: H.length - 1 })
                          : 'plans' === P.kind
                            ? ne({ kind: 'choice' })
                            : 'offer' === P.kind && ne({ kind: 'plans' });
                    },
                    hitSlop: 10,
                    style: {
                      width: 36,
                      height: 36,
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: (0, I.jsx)(s.default, {
                      style: { transform: [{ scaleX: -1 }] },
                      children: (0, I.jsx)(m.Icon, {
                        name: 'arrow',
                        size: 20,
                        color: V.muted,
                      }),
                    }),
                  }),
                'slide' === P.kind &&
                  ce(
                    (0, w.L)('\u0631\u062f \u06a9\u0631\u062f\u0646'),
                    () => ne({ kind: 'choice' }),
                    'tour-skip',
                  ),
              ],
            }),
            (0, I.jsx)(u.ScrollView, {
              contentContainerStyle: {
                flexGrow: 1,
                justifyContent: 'center',
                paddingHorizontal: T < 380 ? 16 : 22,
                paddingVertical: 12,
              },
              children: (0, I.jsx)(i.default.View, {
                style: { opacity: M },
                children: pe,
              }),
            }),
            (0, I.jsxs)(s.default, {
              style: {
                paddingHorizontal: T < 380 ? 16 : 22,
                gap: 4,
                width: '100%',
                maxWidth: 560,
                alignSelf: 'center',
              },
              children: [
                !!K &&
                  (0, I.jsx)(y.Copy, {
                    accessibilityRole: 'alert',
                    style: {
                      fontSize: 13,
                      lineHeight: 21,
                      color: V.danger,
                      textAlign: 'center',
                      paddingBottom: 6,
                    },
                    children: K,
                  }),
                xe,
              ],
            }),
          ],
        });
      }));
    var t = r(d[0]),
      n = r(d[1]),
      i = e(r(d[2])),
      o = e(r(d[3]));
    r(d[4]);
    var l = e(r(d[5])),
      a = e(r(d[6])),
      s = e(r(d[7])),
      c = e(r(d[8])),
      u = r(d[9]),
      f = r(d[10]),
      h = r(d[11]),
      y = r(d[12]),
      m = r(d[13]),
      p = r(d[14]),
      x = r(d[15]),
      b = r(d[16]),
      j = r(d[17]),
      z = r(d[18]),
      C = r(d[19]),
      L = r(d[20]),
      S = r(d[21]),
      k = r(d[22]),
      w = r(d[23]),
      R = r(d[24]),
      _ = r(d[25]),
      I = r(d[26]);
    const H = (0, w.localized)([
        {
          key: 'stock',
          title:
            '\u0627\u06cc\u0646 \u0645\u0648\u062c\u0648\u062f\u06cc\u200c\u062a\u0647',
          body: '\u0647\u0645\u0647\u0654 \u06a9\u0627\u0644\u0627\u0647\u0627\u062a \u0628\u0627 \u0645\u0648\u062c\u0648\u062f\u06cc \u0648 \u0642\u06cc\u0645\u062a\u060c \u06cc\u06a9\u200c\u062c\u0627. \u0647\u0631 \u0641\u0631\u0648\u0634 \u062e\u0648\u062f\u0634 \u0627\u0632 \u0627\u0646\u0628\u0627\u0631 \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0647 \u0648 \u0642\u0628\u0644 \u0627\u0632 \u062a\u0645\u0648\u0645 \u0634\u062f\u0646 \u062e\u0628\u0631\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645.',
        },
        {
          key: 'add',
          title:
            '\u0627\u0632 \u0627\u06cc\u0646\u062c\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646',
          body: '\u0641\u0631\u0648\u0634 \u06cc\u0627 \u062e\u0631\u06cc\u062f \u0631\u0648 \u0628\u0627 \u062f\u06a9\u0645\u0647\u0654 \u0633\u0628\u0632 \xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \u062b\u0628\u062a \u06a9\u0646: \u0628\u0646\u0648\u06cc\u0633\u060c \u0627\u0632 \xab\u0627\u062e\u06cc\u0631\u0627\u064b\xbb \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u060c \u06cc\u0627 \u0641\u0642\u0637 \u0628\u06af\u0648 \xab\u062f\u0647 \u062a\u0627 \u0634\u06cc\u0631 \u0641\u0631\u0648\u062e\u062a\u0645\xbb.',
        },
        {
          key: 'learn',
          title:
            '\u062f\u0631\u0633\u200c\u0647\u0627\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0627\u06cc\u0646\u062c\u0627\u0633\u062a',
          body: '\u0647\u0631 \u0648\u0642\u062a \u0633\u0624\u0627\u0644\u06cc \u062f\u0627\u0634\u062a\u06cc\u060c \xab\u0622\u0645\u0648\u0632\u0634\xbb \u062a\u0648\u06cc \u062f\u0627\u0634\u0628\u0648\u0631\u062f \u062f\u0631\u0633\u200c\u0647\u0627\u06cc \u06a9\u0648\u062a\u0627\u0647 \u0648\u06cc\u062f\u06cc\u0648\u06cc\u06cc \u062f\u0627\u0631\u0647.',
        },
      ]),
      V = (0, w.localized)([
        {
          icon: 'dashboard',
          label: '\u062f\u0627\u0634\u0628\u0648\u0631\u062f',
        },
        { icon: 'inventory', label: '\u0645\u0648\u062c\u0648\u062f\u06cc' },
        { icon: 'plus', label: '\u0627\u0641\u0632\u0648\u062f\u0646' },
        { icon: 'data', label: '\u062f\u0627\u062f\u0647\u200c\u0647\u0627' },
        {
          icon: 'profile',
          label: '\u067e\u0631\u0648\u0641\u0627\u06cc\u0644',
        },
      ]),
      B = (0, w.localized)([
        { icon: 'user', label: '\u06a9\u0627\u0631\u06a9\u0646\u0627\u0646' },
        { icon: 'ai', label: '\u0622\u0645\u0648\u0632\u0634' },
        {
          icon: 'gift',
          label:
            '\u062f\u0639\u0648\u062a \u062f\u0648\u0633\u062a\u0627\u0646',
        },
      ]);
    function v({ step: e, width: n }) {
      const { colors: o, mode: l } = (0, b.useTheme)(),
        c = (0, x.useReducedMotion)(),
        u = (0, t.useRef)(new i.default.Value(0)).current,
        h = p.howToGreens['dark' === l ? 'dark' : 'light'];
      (0, t.useEffect)(() => {
        if ((u.setValue(0), c)) return;
        const e = i.default.loop(
          i.default.sequence([
            i.default.timing(u, {
              toValue: 1,
              duration: 900,
              useNativeDriver: !1,
            }),
            i.default.timing(u, {
              toValue: 0,
              duration: 900,
              useNativeDriver: !1,
            }),
          ]),
        );
        return (e.start(), () => e.stop());
      }, [e, c]);
      const j = {
          transform: [
            {
              scale: u.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 1.1],
              }),
            },
          ],
          opacity: u.interpolate({ inputRange: [0, 1], outputRange: [1, 0.4] }),
        },
        z = Math.round(Math.min(250, Math.max(190, 0.56 * n))),
        C = Math.min(96, (n - 72) / 3);
      return (0, I.jsxs)(s.default, {
        testID: 'tour-picture-' + e,
        accessibilityElementsHidden: !0,
        importantForAccessibility: 'no-hide-descendants',
        style: {
          width: n,
          height: z,
          borderRadius: 28,
          overflow: 'hidden',
          backgroundColor: h[1],
          justifyContent: 'center',
          alignItems: 'center',
        },
        children: [
          (0, I.jsx)(f.LinearGradient, {
            pointerEvents: 'none',
            colors: [...h],
            start: { x: 1, y: 0 },
            end: { x: 0, y: 1 },
            style: a.default.absoluteFill,
          }),
          (0, I.jsx)(s.default, {
            pointerEvents: 'none',
            style: {
              position: 'absolute',
              width: 220,
              height: 220,
              borderRadius: 110,
              top: -70,
              left: -70,
              backgroundColor: '#99f6e4',
              opacity: 0.26,
            },
          }),
          (0, I.jsx)(s.default, {
            pointerEvents: 'none',
            style: {
              position: 'absolute',
              width: 160,
              height: 160,
              borderRadius: 80,
              bottom: -60,
              right: -40,
              backgroundColor: '#ffffff',
              opacity: 0.1,
            },
          }),
          'learn' === e
            ? (0, I.jsx)(s.default, {
                style: {
                  flexDirection: 'row-reverse',
                  gap: 12,
                  paddingHorizontal: 16,
                },
                children: B.map((e, t) => {
                  const n = 1 === t;
                  return (0, I.jsxs)(
                    s.default,
                    {
                      style: { alignItems: 'center', justifyContent: 'center' },
                      children: [
                        n &&
                          (0, I.jsx)(i.default.View, {
                            style: [
                              {
                                position: 'absolute',
                                top: -7,
                                bottom: -7,
                                left: -7,
                                right: -7,
                                borderRadius: 24,
                                borderWidth: 3,
                                borderColor: '#ffffff',
                              },
                              j,
                            ],
                          }),
                        (0, I.jsxs)(s.default, {
                          style: {
                            width: C,
                            height: 92,
                            borderRadius: 18,
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 6,
                            backgroundColor: n
                              ? o.surface
                              : 'rgba(255,255,255,.16)',
                          },
                          children: [
                            (0, I.jsx)(m.Icon, {
                              name: e.icon,
                              size: 26,
                              color: n ? o.accent : '#ffffff',
                            }),
                            (0, I.jsx)(y.Copy, {
                              numberOfLines: 1,
                              style: {
                                fontSize: 12.5,
                                lineHeight: 19,
                                fontFamily: 'Vazirmatn_700Bold',
                                color: n ? o.text : '#ffffff',
                              },
                              children: e.label,
                            }),
                          ],
                        }),
                      ],
                    },
                    t,
                  );
                }),
              })
            : (0, I.jsx)(s.default, {
                style: {
                  width: Math.min(n - 32, 360),
                  height: 72,
                  marginTop: 24,
                  borderRadius: 24,
                  backgroundColor: o.surface,
                  flexDirection: 'row',
                  direction: 'ltr',
                  alignItems: 'center',
                  paddingHorizontal: 6,
                  shadowColor: '#000',
                  shadowOpacity: 0.18,
                  shadowRadius: 14,
                  shadowOffset: { width: 0, height: 6 },
                  elevation: 5,
                },
                children: V.map((t, n) => {
                  const l = 2 === n,
                    a = 'stock' === e ? 1 === n : l;
                  return (0, I.jsx)(
                    s.default,
                    {
                      style: {
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      children: l
                        ? (0, I.jsxs)(s.default, {
                            style: {
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginTop: -30,
                            },
                            children: [
                              (0, I.jsxs)(s.default, {
                                style: { width: 58, height: 58 },
                                children: [
                                  a &&
                                    (0, I.jsx)(i.default.View, {
                                      style: [
                                        {
                                          position: 'absolute',
                                          top: -7,
                                          left: -7,
                                          width: 72,
                                          height: 72,
                                          borderRadius: 36,
                                          borderWidth: 3,
                                          borderColor: '#ffffff',
                                        },
                                        j,
                                      ],
                                    }),
                                  (0, I.jsx)(s.default, {
                                    style: {
                                      width: 58,
                                      height: 58,
                                      borderRadius: 29,
                                      backgroundColor: o.accent,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      borderWidth: 4,
                                      borderColor: o.surface,
                                    },
                                    children: (0, I.jsx)(m.Icon, {
                                      name: 'plus',
                                      size: 26,
                                      color: o.onAccent,
                                    }),
                                  }),
                                ],
                              }),
                              (0, I.jsx)(y.Copy, {
                                numberOfLines: 1,
                                style: {
                                  fontSize: 10.5,
                                  lineHeight: 16,
                                  marginTop: a ? 10 : 1,
                                  fontFamily: a
                                    ? 'Vazirmatn_700Bold'
                                    : 'Vazirmatn_400Regular',
                                  color: a ? o.accent : o.muted,
                                },
                                children: t.label,
                              }),
                            ],
                          })
                        : (0, I.jsxs)(s.default, {
                            style: {
                              alignItems: 'center',
                              justifyContent: 'center',
                            },
                            children: [
                              a &&
                                (0, I.jsx)(i.default.View, {
                                  style: [
                                    {
                                      position: 'absolute',
                                      top: -6,
                                      bottom: -6,
                                      left: -8,
                                      right: -8,
                                      borderRadius: 18,
                                      borderWidth: 3,
                                      borderColor: o.accent,
                                    },
                                    j,
                                  ],
                                }),
                              (0, I.jsxs)(s.default, {
                                style: {
                                  paddingHorizontal: 8,
                                  paddingVertical: 5,
                                  borderRadius: 14,
                                  alignItems: 'center',
                                  backgroundColor: a ? o.accent : 'transparent',
                                },
                                children: [
                                  (0, I.jsx)(m.Icon, {
                                    name: t.icon,
                                    active: a,
                                    size: 21,
                                    color: a ? o.onAccent : o.muted,
                                  }),
                                  (0, I.jsx)(y.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      fontSize: 10.5,
                                      lineHeight: 16,
                                      fontFamily: a
                                        ? 'Vazirmatn_700Bold'
                                        : 'Vazirmatn_400Regular',
                                      color: a ? o.onAccent : o.muted,
                                    },
                                    children: t.label,
                                  }),
                                ],
                              }),
                            ],
                          }),
                    },
                    n,
                  );
                }),
              }),
        ],
      });
    }
    const A = (0, w.localized)([
      [
        '\u062d\u0633\u0627\u0628 \u0633\u0648\u062f \u0628\u0627 \u0645\u0627\u0634\u06cc\u0646\u200c\u062d\u0633\u0627\u0628\u060c \u0622\u062e\u0631 \u0634\u0628',
        '\u0633\u0648\u062f \u0647\u0631 \u0631\u0648\u0632\u060c \u062e\u0648\u062f\u06a9\u0627\u0631',
      ],
      [
        '\u06a9\u0627\u0644\u0627 \u062a\u0645\u0648\u0645 \u0645\u06cc\u200c\u0634\u0647\u060c \u062f\u06cc\u0631 \u0645\u06cc\u200c\u0641\u0647\u0645\u06cc',
        '\u0642\u0628\u0644 \u0627\u0632 \u062a\u0645\u0648\u0645 \u0634\u062f\u0646 \u062e\u0628\u0631 \u0645\u06cc\u200c\u062f\u0647',
      ],
      [
        '\u0648\u0631\u0642 \u0632\u062f\u0646 \u062f\u0641\u062a\u0631 \u0628\u0631\u0627\u06cc \u06cc\u06a9 \u0646\u0633\u06cc\u0647',
        '\u062c\u0633\u062a\u200c\u0648\u062c\u0648\u06cc \u06cc\u06a9\u200c\u062b\u0627\u0646\u06cc\u0647\u200c\u0627\u06cc',
      ],
      [
        '\u062f\u0641\u062a\u0631 \u06af\u0645 \u0628\u0634\u0647\u060c \u0647\u0645\u0647\u200c\u0686\u06cc\u0632 \u0631\u0641\u062a\u0647',
        '\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0647\u0645\u06cc\u0634\u0647 \u0627\u0645\u0646 \u0648 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u200c\u062f\u0627\u0631',
      ],
    ]);
    const D = a.default.create({
      head: {
        flex: 1,
        fontSize: 14,
        lineHeight: 22,
        fontFamily: 'Vazirmatn_700Bold',
        textAlign: 'center',
        paddingVertical: 10,
      },
      cell: {
        flex: 1,
        fontSize: 13,
        lineHeight: 21,
        textAlign: 'center',
        paddingVertical: 11,
        paddingHorizontal: 8,
      },
    });
  },
  556,
  [
    2, 557, 92, 210, 94, 232, 17, 99, 257, 380, 411, 342, 407, 385, 558, 414,
    382, 415, 488, 446, 560, 447, 435, 311, 442, 561, 338,
  ],
);
