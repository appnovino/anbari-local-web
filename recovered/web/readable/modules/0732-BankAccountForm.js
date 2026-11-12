// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 732; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.BankAccountForm = function ({ shop: e, onSaved: f, hint: x }) {
        const { colors: b } = (0, s.useTheme)(),
          [p, j] = (0, t.useState)(void 0),
          [L, S] = (0, t.useState)(!1),
          [v, C] = (0, t.useState)(''),
          [k, I] = (0, t.useState)(''),
          [z, D] = (0, t.useState)(''),
          [N, _] = (0, t.useState)(''),
          [B, w] = (0, t.useState)('');
        return (
          (0, t.useEffect)(() => {
            let t = !0;
            return (
              (0, o.readBankAccount)(e)
                .then((e) => {
                  t && (j(e.account), e.account || S(!0));
                })
                .catch(() => {
                  t && (j(null), S(!0));
                }),
              () => {
                t = !1;
              }
            );
          }, [e.id]),
          void 0 === p
            ? (0, y.jsx)(r.Copy, {
                style: { fontSize: 13, color: b.muted },
                children: (0, h.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                ),
              })
            : (0, y.jsxs)(l.default, {
                testID: 'bank-account',
                style: { gap: 8 },
                children: [
                  (0, y.jsx)(r.Copy, {
                    style: {
                      fontSize: 14,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: (0, h.L)(
                      '\u062d\u0633\u0627\u0628 \u0628\u0627\u0646\u06a9\u06cc \u0628\u0631\u0627\u06cc \u0648\u0627\u0631\u06cc\u0632',
                    ),
                  }),
                  !!x &&
                    (0, y.jsx)(r.Copy, {
                      style: { fontSize: 12, lineHeight: 20, color: b.muted },
                      children: x,
                    }),
                  !L &&
                    p &&
                    (0, y.jsxs)(l.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 10,
                      },
                      children: [
                        (0, y.jsxs)(l.default, {
                          style: { flex: 1, gap: 2 },
                          children: [
                            (0, y.jsx)(r.Copy, {
                              style: { fontSize: 13 },
                              children: p.holderName,
                            }),
                            !!p.cardNumber &&
                              (0, y.jsx)(r.Copy, {
                                style: {
                                  fontSize: 13,
                                  writingDirection: 'ltr',
                                  textAlign: 'right',
                                  color: b.muted,
                                },
                                children: (0, u.maskCard)(p.cardNumber),
                              }),
                            !!p.sheba &&
                              (0, y.jsx)(r.Copy, {
                                style: {
                                  fontSize: 13,
                                  writingDirection: 'ltr',
                                  textAlign: 'right',
                                  color: b.muted,
                                },
                                children: (0, u.maskSheba)(p.sheba),
                              }),
                          ],
                        }),
                        (0, y.jsx)(n.default, {
                          testID: 'bank-account-edit',
                          accessibilityRole: 'button',
                          onPress: function () {
                            (C(p?.holderName || ''),
                              I(p?.cardNumber || ''),
                              D(p?.sheba || ''),
                              _(''),
                              w(''),
                              S(!0));
                          },
                          children: (0, y.jsx)(r.Copy, {
                            style: {
                              fontSize: 13,
                              color: b.accent,
                              textDecorationLine: 'underline',
                            },
                            children: (0, h.L)(
                              '\u0648\u06cc\u0631\u0627\u06cc\u0634',
                            ),
                          }),
                        }),
                      ],
                    }),
                  L &&
                    (0, y.jsxs)(y.Fragment, {
                      children: [
                        (0, y.jsx)(r.Input, {
                          testID: 'bank-holder',
                          accessibilityLabel: (0, h.L)(
                            '\u0646\u0627\u0645 \u0635\u0627\u062d\u0628 \u062d\u0633\u0627\u0628',
                          ),
                          value: v,
                          onChangeText: C,
                          placeholder: (0, h.L)(
                            '\u0646\u0627\u0645 \u0635\u0627\u062d\u0628 \u062d\u0633\u0627\u0628',
                          ),
                        }),
                        (0, y.jsx)(r.Input, {
                          ltr: !0,
                          testID: 'bank-card',
                          accessibilityLabel: (0, h.L)(
                            '\u0634\u0645\u0627\u0631\u0647\u0654 \u06a9\u0627\u0631\u062a',
                          ),
                          keyboardType: 'number-pad',
                          value: k,
                          onChangeText: I,
                          placeholder: (0, h.L)(
                            '\u0634\u0645\u0627\u0631\u0647\u0654 \u06a9\u0627\u0631\u062a \u06f1\u06f6 \u0631\u0642\u0645\u06cc',
                          ),
                        }),
                        (0, y.jsx)(r.Input, {
                          ltr: !0,
                          testID: 'bank-sheba',
                          accessibilityLabel: (0, h.L)(
                            '\u0634\u0645\u0627\u0631\u0647\u0654 \u0634\u0628\u0627',
                          ),
                          autoCapitalize: 'characters',
                          value: z,
                          onChangeText: D,
                          placeholder: (0, h.L)(
                            '\u0634\u0628\u0627 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc) IR\u2026',
                          ),
                        }),
                        (0, y.jsxs)(l.default, {
                          style: { flexDirection: 'row-reverse', gap: 10 },
                          children: [
                            (0, y.jsx)(l.default, {
                              style: { flex: 1 },
                              children: (0, y.jsx)(r.Button, {
                                testID: 'bank-save',
                                onPress: async function () {
                                  (_(''), w(''));
                                  const t = k.trim()
                                      ? (0, u.cleanCard)(k)
                                      : null,
                                    n = z.trim() ? (0, u.cleanSheba)(z) : null;
                                  if (v.trim().length < 2)
                                    return void _(
                                      (0, h.L)(
                                        '\u0646\u0627\u0645 \u0635\u0627\u062d\u0628 \u062d\u0633\u0627\u0628 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
                                      ),
                                    );
                                  if (k.trim() && !t)
                                    return void _(
                                      (0, h.L)(
                                        '\u0634\u0645\u0627\u0631\u0647\u0654 \u06a9\u0627\u0631\u062a \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b \u06f1\u06f6 \u0631\u0642\u0645 \u0631\u0648\u06cc \u06a9\u0627\u0631\u062a \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0646\u06af\u0627\u0647 \u06a9\u0646.',
                                      ),
                                    );
                                  if (z.trim() && !n)
                                    return void _(
                                      (0, h.L)(
                                        '\u0634\u0645\u0627\u0631\u0647\u0654 \u0634\u0628\u0627 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b IR \u0648 \u06f2\u06f4 \u0631\u0642\u0645 \u0628\u0639\u062f\u0634 \u0631\u0627 \u062f\u0648\u0628\u0627\u0631\u0647 \u0646\u06af\u0627\u0647 \u06a9\u0646.',
                                      ),
                                    );
                                  if (!t && !n)
                                    return void _(
                                      (0, h.L)(
                                        '\u0634\u0645\u0627\u0631\u0647\u0654 \u06a9\u0627\u0631\u062a \u06cc\u0627 \u0634\u0628\u0627 \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646.',
                                      ),
                                    );
                                  try {
                                    const l = await (0, o.saveBankAccount)(e, {
                                      holderName: v.trim(),
                                      cardNumber: t,
                                      sheba: n,
                                    });
                                    (j(l.account),
                                      S(!1),
                                      w(
                                        (0, h.L)(
                                          '\u062d\u0633\u0627\u0628 \u0628\u0627\u0646\u06a9\u06cc \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.',
                                        ),
                                      ),
                                      f?.(l.account));
                                  } catch (e) {
                                    _((0, c.message)(e));
                                  }
                                },
                                children: (0, h.L)(
                                  '\u0630\u062e\u06cc\u0631\u0647\u0654 \u062d\u0633\u0627\u0628',
                                ),
                              }),
                            }),
                            !!p &&
                              (0, y.jsx)(l.default, {
                                style: { flex: 1 },
                                children: (0, y.jsx)(r.Button, {
                                  secondary: !0,
                                  onPress: () => S(!1),
                                  children: (0, h.L)(
                                    '\u0627\u0646\u0635\u0631\u0627\u0641',
                                  ),
                                }),
                              }),
                          ],
                        }),
                      ],
                    }),
                  !!N &&
                    (0, y.jsx)(r.Copy, {
                      accessibilityRole: 'alert',
                      style: { fontSize: 13, color: b.danger },
                      children: N,
                    }),
                  !!B &&
                    (0, y.jsx)(r.Copy, {
                      accessibilityRole: 'alert',
                      style: { fontSize: 13, color: b.success },
                      children: B,
                    }),
                ],
              })
        );
      }));
    var t = _r(d[0]),
      n = e(_r(d[1])),
      l = e(_r(d[2])),
      r = _r(d[3]),
      s = _r(d[4]),
      c = _r(d[5]),
      o = _r(d[6]),
      u = _r(d[7]),
      h = _r(d[8]),
      y = _r(d[9]);
  },
  732,
  [2, 232, 99, 407, 382, 415, 488, 726, 311, 338],
);
