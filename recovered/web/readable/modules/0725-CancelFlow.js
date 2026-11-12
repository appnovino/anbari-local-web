// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 725; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.CancelFlow = function ({
        shop: e,
        onDone: b,
        allowRetention: C = !0,
      }) {
        const { colors: S } = (0, s.useTheme)(),
          [z, I] = (0, t.useState)(!1),
          [D, P] = (0, t.useState)('reason'),
          [F, w] = (0, t.useState)(null),
          [v, B] = (0, t.useState)(null),
          [T, _] = (0, t.useState)(''),
          [R, V] = (0, t.useState)(''),
          [H, k] = (0, t.useState)(''),
          [A, M] = (0, t.useState)(!1),
          [q, O] = (0, t.useState)(''),
          [U, W] = (0, t.useState)({}),
          [N, E] = (0, t.useState)(0);
        function $() {
          (I(!1), P('reason'), B(null), _(''), V(''), k(''), M(!1), O(''));
        }
        async function G(t) {
          O('');
          try {
            const n = await (0, c.request)(
              (0, c.shopPath)(e, '/billing/cancel'),
              'POST',
              {
                reason: v,
                note: T.trim() || void 0,
                choice: 'cancel',
                offerShown: t,
              },
            );
            (W({ accessUntil: n.accessUntil }), P('doneCancel'));
          } catch (e) {
            O((0, c.message)(e));
          }
        }
        async function J() {
          O('');
          try {
            const t = await (0, c.request)(
              (0, c.shopPath)(e, '/billing/cancel'),
              'POST',
              { reason: v, note: T.trim() || void 0, choice: 'offer' },
            );
            (W({ percent: t.offer?.percent }), P('doneOffer'));
          } catch (e) {
            O((0, c.message)(e));
          }
        }
        function K() {
          F?.refund ? P('refundChoice') : G(!!F?.offer);
        }
        async function Q() {
          if (F?.refund && v) {
            O('');
            try {
              const t = await (0, c.request)(
                (0, c.shopPath)(e, '/billing/refund'),
                'POST',
                {
                  paymentId: F.refund.paymentId,
                  reason: v,
                  note: T.trim() || void 0,
                  holderName: R.trim(),
                  cardNumber: (0, u.cleanCard)(H),
                  confirmed: !0,
                },
              );
              (W({
                dueAt: t.refund.request?.dueAt,
                amount: t.refund.request?.amountToman,
              }),
                P('doneRefund'));
            } catch (e) {
              O((0, c.message)(e));
            }
          }
        }
        if (
          ((0, t.useEffect)(() => {
            if (!z) return;
            let t = !0;
            return (
              w(null),
              O(''),
              (0, c.request)((0, c.shopPath)(e, '/billing/cancel'))
                .then((e) => {
                  t && w(C ? e : { ...e, offer: null });
                })
                .catch((e) => {
                  t && O((0, c.message)(e));
                }),
              () => {
                t = !1;
              }
            );
          }, [z, e.id, N]),
          !z)
        )
          return (0, y.jsx)(n.default, {
            testID: 'cancel-open',
            accessibilityRole: 'button',
            onPress: () => I(!0),
            style: { alignItems: 'center', paddingVertical: 10 },
            children: (0, y.jsx)(o.Copy, {
              style: {
                fontSize: 13,
                color: S.muted,
                textDecorationLine: 'underline',
              },
              children: (0, h.L)(
                '\u0644\u063a\u0648 \u0627\u0634\u062a\u0631\u0627\u06a9',
              ),
            }),
          });
        const X = (e) =>
            (0, y.jsx)(o.Copy, {
              accessibilityRole: 'header',
              style: {
                fontSize: 18,
                lineHeight: 28,
                fontFamily: 'Vazirmatn_700Bold',
                textAlign: 'center',
              },
              children: e,
            }),
          Y = (e) =>
            (0, y.jsx)(o.Copy, {
              style: {
                fontSize: 13,
                lineHeight: 22,
                color: S.muted,
                textAlign: 'center',
              },
              children: e,
            }),
          Z = (e, t, r) =>
            (0, y.jsx)(n.default, {
              testID: r,
              accessibilityRole: 'button',
              onPress: t,
              hitSlop: 8,
              style: { alignItems: 'center', paddingVertical: 8 },
              children: (0, y.jsx)(o.Copy, {
                style: { fontSize: 13, color: S.muted },
                children: e,
              }),
            }),
          ee = !!(0, u.cleanCard)(H),
          te = R.trim().length >= 2,
          ne = (() => {
            if (!F)
              return q
                ? (0, y.jsxs)(y.Fragment, {
                    children: [
                      (0, y.jsx)(o.Button, {
                        testID: 'cancel-retry',
                        secondary: !0,
                        onPress: () => E((e) => e + 1),
                        children: (0, h.L)(
                          '\u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646',
                        ),
                      }),
                      Z(
                        (0, h.L)('\u0628\u0633\u062a\u0646'),
                        $,
                        'cancel-load-close',
                      ),
                    ],
                  })
                : Y(
                    (0, h.L)(
                      '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                    ),
                  );
            switch (D) {
              case 'reason':
                return (0, y.jsxs)(y.Fragment, {
                  children: [
                    X(
                      (0, h.L)(
                        '\u0686\u0631\u0627 \u0645\u06cc\u200c\u062e\u0648\u0627\u06cc \u0628\u0631\u06cc\u061f',
                      ),
                    ),
                    Y(
                      (0, h.L)(
                        '\u06a9\u0645\u06a9 \u0645\u06cc\u200c\u06a9\u0646\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0631\u0648 \u0628\u0647\u062a\u0631 \u06a9\u0646\u06cc\u0645.',
                      ),
                    ),
                    (0, y.jsx)(l.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        flexWrap: 'wrap',
                        gap: 8,
                        justifyContent: 'center',
                      },
                      children: p.map((e) => {
                        const t = v === e.id;
                        return (0, y.jsx)(
                          n.default,
                          {
                            testID: 'cancel-reason-' + e.id,
                            accessibilityRole: 'radio',
                            accessibilityState: { selected: t },
                            onPress: () => B(e.id),
                            style: {
                              paddingHorizontal: 14,
                              paddingVertical: 9,
                              borderRadius: 999,
                              borderWidth: t ? 2 : 1,
                              borderColor: t ? S.accent : S.line,
                              backgroundColor: t ? S.accentSoft : S.surface,
                            },
                            children: (0, y.jsx)(o.Copy, {
                              style: {
                                fontSize: 13,
                                fontFamily: t ? 'Vazirmatn_700Bold' : void 0,
                                color: t ? S.accent : S.text,
                              },
                              children: e.label,
                            }),
                          },
                          e.id,
                        );
                      }),
                    }),
                    'other' === v &&
                      (0, y.jsx)(o.Input, {
                        testID: 'cancel-note',
                        value: T,
                        onChangeText: _,
                        maxLength: 300,
                        placeholder: (0, h.L)(
                          '\u0628\u0646\u0648\u06cc\u0633 \u0686\u06cc \u0634\u062f\u2026',
                        ),
                      }),
                    (0, y.jsx)(o.Button, {
                      testID: 'cancel-next',
                      disabled: !v,
                      onPress: () => {
                        F.offer ? P('offer') : K();
                      },
                      children: (0, h.L)('\u0627\u062f\u0627\u0645\u0647'),
                    }),
                    Z(
                      (0, h.L)(
                        '\u0645\u0646\u0635\u0631\u0641 \u0634\u062f\u0645',
                      ),
                      $,
                      'cancel-close',
                    ),
                  ],
                });
              case 'offer':
                return (0, y.jsxs)(y.Fragment, {
                  children: [
                    (0, y.jsx)(l.default, {
                      style: {
                        alignSelf: 'center',
                        width: 96,
                        height: 96,
                        borderRadius: 32,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: S.accentSoft,
                      },
                      children: (0, y.jsx)(o.Copy, {
                        style: { fontSize: 48, lineHeight: 62 },
                        children: '\ud83c\udf81',
                      }),
                    }),
                    X(
                      (0, h.L)(
                        '\u0635\u0628\u0631 \u06a9\u0646! \u0645\u0627\u0647 \u0628\u0639\u062f\u062a \u0631\u0648 \u0628\u0627 {p}\u066a \u062a\u062e\u0641\u06cc\u0641 \u0628\u06af\u06cc\u0631',
                        {
                          p: F.offer.percent.toLocaleString(
                            (0, h.numberLocale)(),
                          ),
                        },
                      ),
                    ),
                    Y(
                      (0, h.L)(
                        '\u0628\u0645\u0648\u0646 \u0648 \u062e\u0631\u06cc\u062f \u06cc\u06a9\u200c\u0645\u0627\u0647\u0647\u0654 \u0628\u0639\u062f\u06cc\u062a {p}\u066a \u0627\u0631\u0632\u0648\u0646\u200c\u062a\u0631 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0647\u061b \u062e\u0648\u062f\u06a9\u0627\u0631\u060c \u0628\u062f\u0648\u0646 \u06a9\u062f.',
                        {
                          p: F.offer.percent.toLocaleString(
                            (0, h.numberLocale)(),
                          ),
                        },
                      ),
                    ),
                    (0, y.jsx)(n.default, {
                      testID: 'cancel-accept',
                      accessibilityRole: 'button',
                      onPress: () => {
                        J();
                      },
                      style: ({ pressed: e }) => ({
                        height: 56,
                        borderRadius: 16,
                        backgroundColor: S.accent,
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: [{ scale: e ? 0.98 : 1 }],
                      }),
                      children: (0, y.jsx)(o.Copy, {
                        style: {
                          fontSize: 17,
                          lineHeight: 24,
                          fontFamily: 'Vazirmatn_700Bold',
                          color: S.onAccent,
                        },
                        children: (0, h.L)(
                          '\u0642\u0628\u0648\u0644\u060c \u0645\u06cc\u200c\u0645\u0648\u0646\u0645',
                        ),
                      }),
                    }),
                    Z(
                      (0, h.L)(
                        '\u0646\u0647\u060c \u0644\u063a\u0648 \u0645\u06cc\u200c\u06a9\u0646\u0645',
                      ),
                      K,
                      'cancel-decline',
                    ),
                  ],
                });
              case 'refundChoice': {
                const e = F.refund;
                return (0, y.jsxs)(y.Fragment, {
                  children: [
                    X(
                      (0, h.L)(
                        '\u062a\u0648 \u06a9\u0627\u0631\u0628\u0631 \u062c\u062f\u06cc\u062f\u06cc\u061b \u0645\u06cc\u200c\u062a\u0648\u0646\u06cc \u067e\u0648\u0644\u062a \u0631\u0648 \u067e\u0633 \u0628\u06af\u06cc\u0631\u06cc',
                      ),
                    ),
                    (0, y.jsxs)(o.Card, {
                      style: { gap: 6, padding: 14 },
                      children: [
                        (0, y.jsx)(j, {
                          label: (0, h.L)(
                            '\u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u062a\u0648',
                          ),
                          value: (0, f.planMoney)(e.paidToman, {
                            full: !0,
                            hint: !1,
                          }),
                        }),
                        (0, y.jsx)(j, {
                          label: (0, h.L)(
                            '\u06a9\u0627\u0631\u0645\u0632\u062f \u0648 \u0645\u0627\u0644\u06cc\u0627\u062a ({n}\u066a)',
                            {
                              n: e.feePercent.toLocaleString(
                                (0, h.numberLocale)(),
                              ),
                            },
                          ),
                          value:
                            '\u2212 ' +
                            (0, f.planMoney)(e.paidToman - e.amountToman, {
                              full: !0,
                              hint: !1,
                            }),
                        }),
                        (0, y.jsx)(l.default, {
                          style: {
                            height: r.default.hairlineWidth,
                            backgroundColor: S.line,
                          },
                        }),
                        (0, y.jsx)(j, {
                          label: (0, h.L)(
                            '\u0628\u0647 \u06a9\u0627\u0631\u062a\u062a \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0647',
                          ),
                          value: (0, f.planMoney)(e.amountToman, {
                            full: !0,
                            hint: !1,
                          }),
                          strong: !0,
                        }),
                      ],
                    }),
                    Y(
                      (0, h.L)(
                        '\u0628\u0627 \u062b\u0628\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a\u060c \u0627\u0634\u062a\u0631\u0627\u06a9\u062a \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0644\u063a\u0648 \u0645\u06cc\u200c\u0634\u0647 \u0648 \u0628\u0627\u0632\u06af\u0634\u062a \u0648\u062c\u0647 \u062d\u062f\u0627\u06a9\u062b\u0631 \u062a\u0627 {n} \u0631\u0648\u0632 \u0627\u0646\u062c\u0627\u0645 \u0645\u06cc\u200c\u0634\u0647.',
                        {
                          n: e.payoutDays.toLocaleString((0, h.numberLocale)()),
                        },
                      ),
                    ),
                    (0, y.jsx)(o.Button, {
                      testID: 'refund-start',
                      onPress: () => P('refundForm'),
                      children: (0, h.L)(
                        '\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627\u0632\u06af\u0634\u062a \u0648\u062c\u0647',
                      ),
                    }),
                    Z(
                      (0, h.L)(
                        '\u0641\u0642\u0637 \u0644\u063a\u0648\u061b \u062a\u0627 {date} \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0631\u0645',
                        { date: x(F.accessUntil) },
                      ),
                      () => {
                        G(!!F.offer);
                      },
                      'cancel-only',
                    ),
                  ],
                });
              }
              case 'refundForm':
                return (0, y.jsxs)(y.Fragment, {
                  children: [
                    X(
                      (0, h.L)(
                        '\u067e\u0648\u0644 \u0628\u0647 \u06a9\u062f\u0648\u0645 \u06a9\u0627\u0631\u062a \u0628\u0631\u06af\u0631\u062f\u0647\u061f',
                      ),
                    ),
                    (0, y.jsx)(o.Input, {
                      testID: 'refund-holder',
                      accessibilityLabel: (0, h.L)(
                        '\u0646\u0627\u0645 \u0635\u0627\u062d\u0628 \u06a9\u0627\u0631\u062a',
                      ),
                      value: R,
                      onChangeText: V,
                      placeholder: (0, h.L)(
                        '\u0646\u0627\u0645 \u0635\u0627\u062d\u0628 \u06a9\u0627\u0631\u062a',
                      ),
                    }),
                    (0, y.jsx)(o.Input, {
                      ltr: !0,
                      testID: 'refund-card',
                      accessibilityLabel: (0, h.L)(
                        '\u0634\u0645\u0627\u0631\u0647\u0654 \u06a9\u0627\u0631\u062a \u06f1\u06f6 \u0631\u0642\u0645\u06cc',
                      ),
                      keyboardType: 'number-pad',
                      value: H,
                      onChangeText: k,
                      placeholder: (0, h.L)(
                        '\u0634\u0645\u0627\u0631\u0647\u0654 \u06a9\u0627\u0631\u062a \u06f1\u06f6 \u0631\u0642\u0645\u06cc',
                      ),
                    }),
                    !!H &&
                      !ee &&
                      H.replace(/\D/g, '').length >= 16 &&
                      (0, y.jsx)(o.Copy, {
                        style: { fontSize: 12, color: S.danger },
                        children: (0, h.L)(
                          '\u0634\u0645\u0627\u0631\u0647\u0654 \u06a9\u0627\u0631\u062a \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b \u06f1\u06f6 \u0631\u0642\u0645 \u0631\u0648\u06cc \u06a9\u0627\u0631\u062a \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0646\u06af\u0627\u0647 \u06a9\u0646.',
                        ),
                      }),
                    (0, y.jsx)(o.Button, {
                      testID: 'refund-next',
                      disabled: !ee || !te,
                      onPress: () => {
                        (M(!1), P('refundConfirm'));
                      },
                      children: (0, h.L)('\u0627\u062f\u0627\u0645\u0647'),
                    }),
                    Z(
                      (0, h.L)('\u0642\u0628\u0644\u06cc'),
                      () => P('refundChoice'),
                      'refund-back',
                    ),
                  ],
                });
              case 'refundConfirm': {
                const e = F.refund,
                  t = (0, u.cleanCard)(H) || '';
                return (0, y.jsxs)(y.Fragment, {
                  children: [
                    X((0, h.L)('\u062f\u0631\u0633\u062a\u0647\u061f')),
                    (0, y.jsxs)(o.Card, {
                      style: { gap: 8, padding: 16, alignItems: 'center' },
                      children: [
                        (0, y.jsx)(o.Copy, {
                          style: { fontSize: 13, color: S.muted },
                          children: (0, h.L)(
                            '\u0634\u0645\u0627\u0631\u0647\u0654 \u06a9\u0627\u0631\u062a',
                          ),
                        }),
                        (0, y.jsx)(o.Copy, {
                          testID: 'refund-confirm-card',
                          style: {
                            fontSize: 22,
                            lineHeight: 32,
                            letterSpacing: 1,
                            writingDirection: 'ltr',
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: L(t),
                        }),
                        (0, y.jsx)(o.Copy, {
                          style: { fontSize: 13, color: S.muted },
                          children: (0, h.L)('\u0628\u0647 \u0646\u0627\u0645'),
                        }),
                        (0, y.jsx)(o.Copy, {
                          style: {
                            fontSize: 17,
                            lineHeight: 26,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: R.trim(),
                        }),
                        (0, y.jsxs)(o.Copy, {
                          style: { fontSize: 13, color: S.muted },
                          children: [
                            (0, h.L)('\u0645\u0628\u0644\u063a'),
                            ': ',
                            (0, f.planMoney)(e.amountToman, {
                              full: !0,
                              hint: !1,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, y.jsxs)(n.default, {
                      testID: 'refund-sure',
                      accessibilityRole: 'checkbox',
                      accessibilityState: { checked: A },
                      onPress: () => M((e) => !e),
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 10,
                        padding: 6,
                      },
                      children: [
                        (0, y.jsx)(l.default, {
                          style: {
                            width: 24,
                            height: 24,
                            borderRadius: 7,
                            borderWidth: 2,
                            borderColor: A ? S.accent : S.line,
                            backgroundColor: A ? S.accent : 'transparent',
                            alignItems: 'center',
                            justifyContent: 'center',
                          },
                          children:
                            A &&
                            (0, y.jsx)(o.Copy, {
                              style: {
                                color: S.onAccent,
                                fontSize: 14,
                                lineHeight: 18,
                              },
                              children: '\u2713',
                            }),
                        }),
                        (0, y.jsx)(o.Copy, {
                          style: { flex: 1, fontSize: 14, lineHeight: 22 },
                          children: (0, h.L)(
                            '\u0645\u0637\u0645\u0626\u0646\u0645 \u0634\u0645\u0627\u0631\u0647 \u06a9\u0627\u0631\u062a \u0648 \u0646\u0627\u0645 \u062f\u0631\u0633\u062a\u0647.',
                          ),
                        }),
                      ],
                    }),
                    (0, y.jsx)(o.Copy, {
                      style: {
                        fontSize: 12,
                        lineHeight: 20,
                        color: S.danger,
                        textAlign: 'center',
                      },
                      children: (0, h.L)(
                        '\u062f\u0633\u062a\u0631\u0633\u06cc \u0628\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0628\u0633\u062a\u0647 \u0645\u06cc\u200c\u0634\u0647.',
                      ),
                    }),
                    (0, y.jsx)(o.Button, {
                      testID: 'refund-send',
                      danger: !0,
                      disabled: !A,
                      onPress: Q,
                      children: (0, h.L)(
                        '\u062b\u0628\u062a \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627\u0632\u06af\u0634\u062a \u0648\u062c\u0647',
                      ),
                    }),
                    Z(
                      (0, h.L)(
                        '\u0627\u0635\u0644\u0627\u062d \u06a9\u0627\u0631\u062a',
                      ),
                      () => P('refundForm'),
                      'refund-edit',
                    ),
                  ],
                });
              }
              case 'doneCancel':
                return (0, y.jsxs)(y.Fragment, {
                  children: [
                    X(
                      (0, h.L)(
                        '\u0627\u0634\u062a\u0631\u0627\u06a9\u062a \u0644\u063a\u0648 \u0634\u062f',
                      ),
                    ),
                    Y(
                      U.accessUntil
                        ? (0, h.L)(
                            '\u062a\u0627 {date} \u0647\u0646\u0648\u0632 \u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0627\u0631\u06cc\u061b \u062a\u0645\u062f\u06cc\u062f \u062e\u0648\u062f\u06a9\u0627\u0631 \u0646\u062f\u0627\u0631\u06cc\u0645. \u0647\u0631 \u0648\u0642\u062a \u062e\u0648\u0627\u0633\u062a\u06cc \u0628\u0631\u06af\u0631\u062f.',
                            { date: x(U.accessUntil) },
                          )
                        : (0, h.L)(
                            '\u062a\u0645\u062f\u06cc\u062f \u062e\u0648\u062f\u06a9\u0627\u0631 \u0646\u062f\u0627\u0631\u06cc\u0645. \u0647\u0631 \u0648\u0642\u062a \u062e\u0648\u0627\u0633\u062a\u06cc \u0628\u0631\u06af\u0631\u062f.',
                          ),
                    ),
                    (0, y.jsx)(o.Button, {
                      secondary: !0,
                      onPress: $,
                      children: (0, h.L)('\u0628\u0633\u062a\u0646'),
                    }),
                  ],
                });
              case 'doneOffer':
                return (0, y.jsxs)(y.Fragment, {
                  children: [
                    X(
                      (0, h.L)(
                        '\u0639\u0627\u0644\u06cc\u0647\u060c \u062e\u0648\u0634\u062d\u0627\u0644\u06cc\u0645 \u06a9\u0647 \u0645\u0648\u0646\u062f\u06cc! \ud83c\udf89',
                      ),
                    ),
                    Y(
                      (0, h.L)(
                        '{p}\u066a \u062a\u062e\u0641\u06cc\u0641 \u062e\u0631\u06cc\u062f \u06cc\u06a9\u200c\u0645\u0627\u0647\u0647\u0654 \u0628\u0639\u062f\u06cc\u062a \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f\u061b \u0645\u0648\u0642\u0639 \u062a\u0645\u062f\u06cc\u062f \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0639\u0645\u0627\u0644 \u0645\u06cc\u200c\u0634\u0647.',
                        {
                          p: (U.percent || 50).toLocaleString(
                            (0, h.numberLocale)(),
                          ),
                        },
                      ),
                    ),
                    (0, y.jsx)(o.Button, {
                      onPress: async () => {
                        ($(), await b());
                      },
                      children: (0, h.L)('\u0628\u0627\u0634\u0647'),
                    }),
                  ],
                });
              case 'doneRefund':
                return (0, y.jsxs)(y.Fragment, {
                  children: [
                    X(
                      (0, h.L)(
                        '\u062f\u0631\u062e\u0648\u0627\u0633\u062a\u062a \u062b\u0628\u062a \u0634\u062f',
                      ),
                    ),
                    Y(
                      (0, h.L)(
                        '\u0627\u0634\u062a\u0631\u0627\u06a9\u062a \u0644\u063a\u0648 \u0634\u062f. \u0648\u0627\u0631\u06cc\u0632 \u0645\u0628\u0644\u063a {amount} \u0628\u0647 \u06a9\u0627\u0631\u062a\u062a \u0645\u0645\u06a9\u0646\u0647 \u062a\u0627 {n} \u0631\u0648\u0632 \u0637\u0648\u0644 \u0628\u06a9\u0634\u0647 (\u062d\u062f\u0627\u06a9\u062b\u0631 \u062a\u0627 {date}). \u0644\u0627\u0632\u0645 \u0646\u06cc\u0633\u062a \u06a9\u0627\u0631\u06cc \u0628\u06a9\u0646\u06cc\u061b \u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u067e\u0627\u06a9 \u0646\u0645\u06cc\u200c\u0634\u0647.',
                        {
                          n: (F.refund?.payoutDays ?? 7).toLocaleString(
                            (0, h.numberLocale)(),
                          ),
                          date: x(U.dueAt),
                          amount: (0, f.planMoney)(U.amount || 0, {
                            full: !0,
                            hint: !1,
                          }),
                        },
                      ),
                    ),
                    (0, y.jsx)(o.Button, {
                      secondary: !0,
                      onPress: async () => {
                        ($(), await b());
                      },
                      children: (0, h.L)('\u0628\u0633\u062a\u0646'),
                    }),
                  ],
                });
            }
          })();
        return (0, y.jsxs)(o.Card, {
          testID: 'cancel-flow',
          style: { gap: 12, padding: 16 },
          children: [
            ne,
            !!q &&
              (0, y.jsx)(o.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, color: S.danger, textAlign: 'center' },
                children: q,
              }),
          ],
        });
      }));
    var t = _r(d[0]),
      n = e(_r(d[1])),
      r = e(_r(d[2])),
      l = e(_r(d[3])),
      o = _r(d[4]),
      s = _r(d[5]),
      c = _r(d[6]),
      u = _r(d[7]),
      f = _r(d[8]),
      h = _r(d[9]),
      y = _r(d[10]);
    const p = (0, h.localized)([
        { id: 'expensive', label: '\u06af\u0631\u0648\u0646\u0647' },
        {
          id: 'unused',
          label:
            '\u06a9\u0645 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc\u200c\u06a9\u0646\u0645',
        },
        {
          id: 'hard',
          label:
            '\u06a9\u0627\u0631 \u0628\u0627\u0647\u0627\u0634 \u0633\u062e\u062a\u0647',
        },
        {
          id: 'other_app',
          label:
            '\u06cc\u0647 \u0628\u0631\u0646\u0627\u0645\u0647\u0654 \u062f\u06cc\u06af\u0647',
        },
        {
          id: 'technical',
          label:
            '\u0645\u0634\u06a9\u0644 \u0641\u0646\u06cc \u062f\u0627\u0634\u062a\u0645',
        },
        {
          id: 'other',
          label: '\u062f\u0644\u06cc\u0644 \u062f\u06cc\u06af\u0647',
        },
      ]),
      x = (e) =>
        e
          ? new Date(e).toLocaleDateString((0, h.dateLocale)(), {
              month: 'long',
              day: 'numeric',
            })
          : '',
      L = (e) => e.replace(/(\d{4})(?=\d)/g, '$1 ');
    function j({ label: e, value: t, strong: n = !1 }) {
      const { colors: r } = (0, s.useTheme)();
      return (0, y.jsxs)(l.default, {
        style: {
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        children: [
          (0, y.jsx)(o.Copy, {
            style: {
              fontSize: 13,
              color: n ? r.text : r.muted,
              fontFamily: n ? 'Vazirmatn_700Bold' : void 0,
            },
            children: e,
          }),
          (0, y.jsx)(o.Copy, {
            style: {
              fontSize: n ? 17 : 13,
              fontFamily: n ? 'Vazirmatn_700Bold' : 'Vazirmatn_500Medium',
              color: n ? r.success : r.text,
            },
            children: t,
          }),
        ],
      });
    }
  },
  725,
  [2, 232, 17, 99, 407, 382, 415, 726, 435, 311, 338],
);
