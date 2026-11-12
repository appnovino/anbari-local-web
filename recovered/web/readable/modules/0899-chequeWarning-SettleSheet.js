// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 899; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.chequeWarning = v),
      (_e.SettleSheet = function ({
        shop: e,
        contact: _,
        visible: w,
        balance: I,
        open: U,
        openCheques: k,
        timeZone: z,
        onClose: H,
        onDone: W,
        onStale: B,
      }) {
        const { colors: R } = (0, f.useTheme)(),
          [q, K] = (0, t.useState)('all'),
          [M, P] = (0, t.useState)(''),
          [F, O] = (0, t.useState)('cash'),
          [V, E] = (0, t.useState)(''),
          [A, N] = (0, t.useState)(!1),
          [Z, G] = (0, t.useState)(T.idempotencyKey),
          [J, Q] = (0, h.useConfirm)();
        (0, t.useEffect)(() => {
          w && (K('all'), P(''), O('cash'), E(''), G((0, T.idempotencyKey)()));
        }, [w]);
        const X = (0, b.settleChoices)(U),
          Y = Math.abs(U),
          $ = v(k),
          ee = !U && !!I,
          te =
            'forgive' === q
              ? { expectedBalance: I, expectedOpen: U, kind: 'forgive' }
              : {
                  expectedBalance: I,
                  expectedOpen: U,
                  kind: 'money',
                  method: F,
                  ...('other' === q ? { amount: (0, S.parseToman)(M) } : {}),
                },
          ne = (0, b.settlementPlan)({ balance: I, open: U }, te);
        function oe() {
          if (A) return;
          if (!ne.ok) return void E(D(ne.code));
          E('');
          const e = _.name,
            t = (0, p.fullToman)(
              ne.payment?.amountToman ?? ne.debt.amountToman,
            ),
            n =
              'card' === ne.payment?.method
                ? (0, y.L)('\u06a9\u0627\u0631\u062a\u06cc')
                : (0, y.L)('\u0646\u0642\u062f\u06cc'),
            o = (0, x.dayText)(new Date().toISOString(), z, !0),
            l = ne.payment
              ? 'in' === ne.payment.direction
                ? (0, p.shopUnitText)(
                    (0, y.L)(
                      '{amount} \u062a\u0648\u0645\u0627\u0646 {how} \u0627\u0632 {name} \u06af\u0631\u0641\u062a\u06cc\u062f.',
                      { amount: t, how: n, name: e },
                    ),
                  )
                : (0, p.shopUnitText)(
                    (0, y.L)(
                      '{amount} \u062a\u0648\u0645\u0627\u0646 {how} \u0628\u0647 {name} \u062f\u0627\u062f\u06cc\u062f.',
                      { amount: t, how: n, name: e },
                    ),
                  )
              : 'owe' === ne.debt.direction
                ? (0, p.shopUnitText)(
                    (0, y.L)(
                      '{amount} \u062a\u0648\u0645\u0627\u0646 \u0627\u0632 \u0628\u062f\u0647\u06cc {name} \u0631\u0627 \u0628\u062e\u0634\u06cc\u062f\u06cc\u062f.',
                      { amount: t, name: e },
                    ),
                  )
                : (0, p.shopUnitText)(
                    (0, y.L)(
                      '{name} {amount} \u062a\u0648\u0645\u0627\u0646 \u0627\u0632 \u0637\u0644\u0628\u0634 \u0631\u0627 \u0628\u062e\u0634\u06cc\u062f.',
                      { amount: t, name: e },
                    ),
                  ),
            s =
              ne.leftToman > 0
                ? (0, p.shopUnitText)(
                    (0, y.L)(
                      '\u0628\u0639\u062f \u0627\u0632 \u0627\u06cc\u0646\u060c {amount} \u062a\u0648\u0645\u0627\u0646 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
                      { amount: (0, p.fullToman)(ne.leftToman) },
                    ),
                  )
                : $
                  ? (0, y.L)(
                      '\u0628\u0639\u062f \u0627\u0632 \u0627\u06cc\u0646\u060c \u0641\u0642\u0637 \u0686\u06a9 \u062f\u0631 \u0631\u0627\u0647 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
                    )
                  : '';
          J({
            title: (0, y.L)(
              '\u062a\u0633\u0648\u06cc\u0647 \u0628\u0627 {name}\u061f',
              { name: e },
            ),
            text: [
              l,
              (0, y.L)(
                '\u062a\u0627\u0631\u06cc\u062e: \u0627\u0645\u0631\u0648\u0632\u060c {day}.',
                { day: o },
              ),
              s,
            ]
              .filter(Boolean)
              .join('\n'),
            ok: (0, y.L)(
              '\u0628\u0644\u0647\u060c \u062a\u0633\u0648\u06cc\u0647 \u0634\u062f',
            ),
            cancel: (0, y.L)('\u0628\u0631\u06af\u0631\u062f'),
            tone: 'accent',
            run: () => {
              ae();
            },
          });
        }
        async function ae() {
          (N(!0), E(''));
          try {
            const t = await (0, T.settleContact)(e, _.id, te, Z);
            W(
              t.leftToman > 0
                ? (0, p.shopUnitText)(
                    (0, y.L)(
                      '\u062b\u0628\u062a \u0634\u062f\u061b {amount} \u062a\u0648\u0645\u0627\u0646 \u0647\u0646\u0648\u0632 \u0628\u0627\u0632 \u0627\u0633\u062a.',
                      { amount: (0, p.fullToman)(t.leftToman) },
                    ),
                  )
                : (0, y.L)(
                    '\u062a\u0633\u0648\u06cc\u0647 \u062b\u0628\u062a \u0634\u062f. \u0627\u06af\u0631 \u0627\u0634\u062a\u0628\u0627\u0647 \u0628\u0648\u062f\u060c \u0631\u0648\u06cc \u0631\u062f\u06cc\u0641 \u062a\u0627\u0632\u0647 \u0628\u0632\u0646\u06cc\u062f \u0648 \xab\u062d\u0630\u0641\xbb \u0631\u0627 \u0628\u0632\u0646\u06cc\u062f.',
                  ),
            );
          } catch (e) {
            (E((0, s.message)(e)),
              e instanceof s.ApiError &&
                'settle_balance_changed' === e.message &&
                B?.(),
              G((0, T.idempotencyKey)()));
          } finally {
            N(!1);
          }
        }
        const le = (0, j.jsxs)(l.default, {
            style: { flexDirection: 'row-reverse', gap: 8 },
            children: [
              (0, j.jsx)(C.SmallKey, {
                grow: !0,
                testID: 'settle-save',
                kind: 'primary',
                label: (0, y.L)('\u062a\u0633\u0648\u06cc\u0647 \u06a9\u0646'),
                disabled: A || !U,
                onPress: oe,
              }),
              (0, j.jsx)(C.SmallKey, {
                grow: !0,
                label: (0, y.L)('\u0627\u0646\u0635\u0631\u0627\u0641'),
                onPress: H,
              }),
            ],
          }),
          ie = (e, t, s) => {
            const u = q === e;
            return (0, j.jsxs)(
              n.default,
              {
                testID: 'settle-choice-' + e,
                accessibilityRole: 'radio',
                accessibilityState: { checked: u, selected: u },
                onPress: () => {
                  (K(e), E(''));
                },
                style: ({ pressed: e }) => ({
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 12,
                  padding: 12,
                  borderRadius: 16,
                  borderWidth: u ? 1.5 : o.default.hairlineWidth,
                  borderColor: u ? R.accent : R.line,
                  backgroundColor: u ? R.accentSoft : R.surface,
                  opacity: e ? 0.85 : 1,
                }),
                children: [
                  (0, j.jsxs)(l.default, {
                    style: { flex: 1, minWidth: 0, gap: 2 },
                    children: [
                      (0, j.jsx)(c.Copy, {
                        style: {
                          fontSize: 15,
                          lineHeight: 24,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: t,
                      }),
                      (0, j.jsx)(c.Copy, {
                        style: { fontSize: 12, lineHeight: 19, color: R.muted },
                        children: s,
                      }),
                    ],
                  }),
                  (0, j.jsx)(l.default, {
                    style: {
                      width: 22,
                      height: 22,
                      borderRadius: 11,
                      borderWidth: 2,
                      borderColor: u ? R.accent : R.muted,
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children:
                      u &&
                      (0, j.jsx)(l.default, {
                        style: {
                          width: 10,
                          height: 10,
                          borderRadius: 5,
                          backgroundColor: R.accent,
                        },
                      }),
                  }),
                ],
              },
              e,
            );
          };
        return (0, j.jsxs)(u.Sheet, {
          visible: w,
          title: (0, y.L)(
            '\u062a\u0633\u0648\u06cc\u0647 \u0628\u0627 {name}',
            { name: _.name },
          ),
          onClose: H,
          onSubmit: oe,
          busy: A,
          footer: le,
          children: [
            Q,
            (0, j.jsxs)(l.default, {
              testID: 'settle-sheet',
              style: { gap: 12 },
              children: [
                (0, j.jsxs)(l.default, {
                  testID: 'settle-balance',
                  style: {
                    alignItems: 'center',
                    gap: 2,
                    padding: 14,
                    borderRadius: 16,
                    backgroundColor: R.surface,
                    borderWidth: o.default.hairlineWidth,
                    borderColor: R.line,
                  },
                  children: [
                    (0, j.jsx)(c.Copy, {
                      style: { fontSize: 12.5, lineHeight: 20, color: R.muted },
                      children: (0, y.L)(
                        '\u0645\u0627\u0646\u062f\u0647\u0654 \u062d\u0633\u0627\u0628',
                      ),
                    }),
                    (0, j.jsx)(c.Copy, {
                      style: {
                        fontSize: 22,
                        lineHeight: 34,
                        fontFamily: 'Vazirmatn_700Bold',
                        color: (0, C.toneColor)(I, R),
                      },
                      children: (0, p.shopUnitText)(
                        (0, y.L)('{amount} \u062a\u0648\u0645\u0627\u0646', {
                          amount: (0, p.fullToman)(Math.abs(I)),
                        }),
                      ),
                    }),
                    (0, j.jsx)(c.Copy, {
                      style: { fontSize: 13, lineHeight: 21 },
                      children: (0, x.balanceWord)(I),
                    }),
                  ],
                }),
                !!$ &&
                  (0, j.jsx)(l.default, {
                    testID: 'settle-cheques',
                    style: {
                      padding: 12,
                      borderRadius: 14,
                      backgroundColor: R.warningSoft,
                    },
                    children: (0, j.jsx)(c.Copy, {
                      style: { fontSize: 12.5, lineHeight: 21, color: R.text },
                      children: $,
                    }),
                  }),
                ee
                  ? (0, j.jsx)(c.Copy, {
                      testID: 'settle-only-cheques',
                      style: { fontSize: 13, lineHeight: 22, color: R.muted },
                      children: (0, y.L)(
                        '\u0647\u0645\u0647\u200c\u06cc \u0627\u06cc\u0646 \u0645\u0627\u0646\u062f\u0647 \u0628\u0627 \u0686\u06a9\u200c\u0647\u0627\u06cc \u062f\u0631 \u0631\u0627\u0647 \u067e\u0648\u0634\u06cc\u062f\u0647 \u0634\u062f\u0647\u061b \u0648\u0642\u062a\u06cc \u067e\u0627\u0633 \u0634\u0648\u0646\u062f\u060c \u062d\u0633\u0627\u0628 \u062e\u0648\u062f\u0634 \u062a\u0633\u0648\u06cc\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                      ),
                    })
                  : !!U &&
                    (0, j.jsxs)(j.Fragment, {
                      children: [
                        ie(
                          'all',
                          X.all,
                          $
                            ? (0, p.shopUnitText)(
                                (0, y.L)(
                                  '{amount} \u062a\u0648\u0645\u0627\u0646 (\u0645\u0627\u0646\u062f\u0647\u060c \u0628\u062f\u0648\u0646 \u0686\u06a9 \u062f\u0631 \u0631\u0627\u0647)',
                                  { amount: (0, p.fullToman)(Y) },
                                ),
                              )
                            : (0, p.shopUnitText)(
                                (0, y.L)(
                                  '{amount} \u062a\u0648\u0645\u0627\u0646',
                                  { amount: (0, p.fullToman)(Y) },
                                ),
                              ),
                        ),
                        ie('other', X.other, X.otherHint),
                        'other' === q &&
                          (0, j.jsx)(l.default, {
                            style: {
                              width: '100%',
                              maxWidth: 360,
                              alignSelf: 'flex-end',
                            },
                            children: (0, j.jsx)(C.Field, {
                              label: (0, p.shopUnitText)(
                                (0, y.L)(
                                  '\u0645\u0628\u0644\u063a (\u062a\u0648\u0645\u0627\u0646)',
                                ),
                              ),
                              children: (0, j.jsx)(L.MoneyInput, {
                                testID: 'settle-amount',
                                value: M,
                                onChange: (e) => {
                                  (P(e), E(''));
                                },
                                style: { minHeight: 44, paddingVertical: 8 },
                              }),
                            }),
                          }),
                        ie('forgive', X.forgive, X.forgiveHint),
                        'forgive' !== q &&
                          (0, j.jsx)(c.Segmented, {
                            value: F,
                            onChange: O,
                            items: [
                              {
                                value: 'cash',
                                label: (0, y.L)('\u0646\u0642\u062f\u06cc'),
                                testID: 'settle-cash',
                              },
                              {
                                value: 'card',
                                label: (0, y.L)('\u06a9\u0627\u0631\u062a'),
                                testID: 'settle-card',
                              },
                            ],
                          }),
                      ],
                    }),
                !!V &&
                  (0, j.jsx)(c.Copy, {
                    accessibilityRole: 'alert',
                    style: { fontSize: 13, color: R.danger },
                    children: V,
                  }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      l = e(r(d[3])),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      h = r(d[7]),
      f = r(d[8]),
      y = r(d[9]),
      p = r(d[10]),
      x = r(d[11]),
      b = r(d[12]),
      T = r(d[13]),
      L = r(d[14]),
      C = r(d[15]),
      S = r(d[16]),
      j = r(d[17]);
    function v(e) {
      const t = (0, b.chequesNotInBalance)(e),
        n = e.filter(
          (e) => !((e.status && 'pending' !== e.status) || e.legacy),
        );
      if (!n.length) return '';
      const o =
        1 === n.length && n[0].dueDate
          ? (0, y.L)('\u060c \u0633\u0631\u0631\u0633\u06cc\u062f {day}', {
              day: (0, x.dateText)(n[0].dueDate),
            })
          : '';
      return (
        [
          t.inCount
            ? 1 === t.inCount
              ? (0, p.shopUnitText)(
                  (0, y.L)(
                    '\u06cc\u06a9 \u0686\u06a9 \u0627\u0632 \u0627\u0648 \u062f\u0631 \u0631\u0627\u0647 \u0627\u0633\u062a: {amount} \u062a\u0648\u0645\u0627\u0646',
                    { amount: (0, p.fullToman)(t.inToman) },
                  ),
                )
              : (0, p.shopUnitText)(
                  (0, y.L)(
                    '{n} \u0686\u06a9 \u0627\u0632 \u0627\u0648 \u062f\u0631 \u0631\u0627\u0647 \u0627\u0633\u062a: {amount} \u062a\u0648\u0645\u0627\u0646',
                    {
                      n: (0, y.localDigits)(String(t.inCount)),
                      amount: (0, p.fullToman)(t.inToman),
                    },
                  ),
                )
            : '',
          t.outCount
            ? 1 === t.outCount
              ? (0, p.shopUnitText)(
                  (0, y.L)(
                    '\u06cc\u06a9 \u0686\u06a9 \u0628\u0647 \u0627\u0648 \u062f\u0631 \u0631\u0627\u0647 \u0627\u0633\u062a: {amount} \u062a\u0648\u0645\u0627\u0646',
                    { amount: (0, p.fullToman)(t.outToman) },
                  ),
                )
              : (0, p.shopUnitText)(
                  (0, y.L)(
                    '{n} \u0686\u06a9 \u0628\u0647 \u0627\u0648 \u062f\u0631 \u0631\u0627\u0647 \u0627\u0633\u062a: {amount} \u062a\u0648\u0645\u0627\u0646',
                    {
                      n: (0, y.localDigits)(String(t.outCount)),
                      amount: (0, p.fullToman)(t.outToman),
                    },
                  ),
                )
            : '',
        ]
          .filter(Boolean)
          .join('\u061b ') +
        o +
        '. ' +
        (0, y.L)(
          '\u0686\u06a9 \u062f\u0631 \u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0648\u0642\u062a\u06cc \u067e\u0627\u0633 \u0634\u062f\u060c \u062e\u0648\u062f\u0634 \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f.',
        )
      );
    }
    const D = (e) =>
      'settle_balance_changed' === e
        ? (0, y.L)(
            '\u062d\u0633\u0627\u0628 \u0627\u06cc\u0646 \u0634\u062e\u0635 \u0639\u0648\u0636 \u0634\u062f\u0647\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0646\u06af\u0627\u0647 \u06a9\u0646.',
          )
        : 'settle_nothing_open' === e
          ? (0, y.L)(
              '\u0686\u06cc\u0632\u06cc \u0628\u0631\u0627\u06cc \u062a\u0633\u0648\u06cc\u0647 \u0646\u0645\u0627\u0646\u062f\u0647 \u0627\u0633\u062a.',
            )
          : 'settle_amount_too_large' === e
            ? (0, y.L)(
                '\u0645\u0628\u0644\u063a \u0627\u0632 \u0645\u0627\u0646\u062f\u0647\u0654 \u062d\u0633\u0627\u0628 \u0628\u06cc\u0634\u062a\u0631 \u0627\u0633\u062a.',
              )
            : (0, y.L)(
                '\u0645\u0628\u0644\u063a \u0645\u0639\u062a\u0628\u0631 \u0648 \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0635\u0641\u0631 \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f.',
              );
  },
  899,
  [
    2, 232, 17, 99, 415, 407, 539, 534, 382, 311, 435, 475, 444, 519, 614, 517,
    529, 338,
  ],
);
