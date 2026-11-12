// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 729; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.AccountPanel = function ({
        shop: e,
        user: t,
        onLogout: j,
        startPassword: C = !1,
      }) {
        const { colors: P } = (0, r.useTheme)(),
          [I, T] = (0, x.useConfirm)(),
          [D, S] = (0, s.useState)(''),
          [v, _] = (0, s.useState)(''),
          [b, E] = (0, s.useState)(!1),
          [k, q] = (0, s.useState)(t),
          [B, F] = (0, s.useState)(''),
          [M, O] = (0, s.useState)(C ? 'password' : ''),
          [R, W] = (0, s.useState)(''),
          [z, A] = (0, s.useState)(''),
          [G, H] = (0, s.useState)(''),
          [J, K] = (0, s.useState)('');
        async function N(e) {
          if (!b) {
            (E(!0), S(''), _(''));
            try {
              await e();
            } catch (e) {
              S(L(e));
            } finally {
              E(!1);
            }
          }
        }
        function Q() {
          (O(''), W(''), A(''), H(''), K(''));
        }
        (0, s.useEffect)(() => {
          let e = !0;
          return (
            (0, c.request)('/v1/auth/session')
              .then((s) => {
                e && q((e) => ({ ...e, ...s.user }));
              })
              .catch(() => {}),
            () => {
              e = !1;
            }
          );
        }, []);
        return (0, f.jsxs)(o.default, {
          style: n.common.gap,
          children: [
            (0, f.jsxs)(n.Card, {
              testID: 'account-card',
              children: [
                (0, f.jsx)(n.Copy, { style: n.common.title, children: k.name }),
                !!k.phone &&
                  (0, f.jsx)(n.Copy, {
                    testID: 'account-phone',
                    children: (0, h.L)(
                      '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644: {phone}',
                      { phone: y(k.phone) },
                    ),
                  }),
                !!k.username &&
                  (0, f.jsx)(n.Copy, {
                    testID: 'account-username',
                    children: (0, h.L)(
                      '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc: {name}',
                      { name: '\u2066' + k.username + '\u2069' },
                    ),
                  }),
                !!k.email &&
                  (0, f.jsx)(n.Copy, {
                    testID: 'account-email',
                    children: (0, h.L)(
                      '\u0627\u06cc\u0645\u06cc\u0644: {email}',
                      { email: '\u2066' + k.email + '\u2069' },
                    ),
                  }),
                'password' === M &&
                  (0, f.jsx)(n.Copy, {
                    testID: 'account-password-hint',
                    style: { fontSize: 13, lineHeight: 22, color: P.muted },
                    children: (0, h.L)(
                      '\u0628\u0627 \u0627\u06cc\u0646 \u0631\u0645\u0632\u060c \u0628\u062f\u0648\u0646 \u067e\u06cc\u0627\u0645\u06a9 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u06cc: \u0635\u0641\u062d\u0647\u0654 \u0648\u0631\u0648\u062f \u2190 \xab\u0648\u0631\u0648\u062f \u0628\u0627 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631\xbb. \u062d\u062f\u0627\u0642\u0644 \u06f1\u06f0 \u062d\u0631\u0641 \u06cc\u0627 \u0639\u062f\u062f.',
                    ),
                  }),
                'password' === M
                  ? (0, f.jsxs)(f.Fragment, {
                      children: [
                        k.hasPassword &&
                          (0, f.jsx)(n.Input, {
                            testID: 'account-password-current',
                            secureTextEntry: !0,
                            placeholder: (0, h.L)(
                              '\u0631\u0645\u0632 \u0641\u0639\u0644\u06cc',
                            ),
                            value: z,
                            onChangeText: A,
                            autoComplete: 'current-password',
                            textContentType: 'password',
                          }),
                        (0, f.jsx)(n.Input, {
                          testID: 'account-password-new',
                          secureTextEntry: !0,
                          placeholder: (0, h.L)(
                            '\u0631\u0645\u0632 \u062c\u062f\u06cc\u062f (\u062d\u062f\u0627\u0642\u0644 \u06f1\u06f0 \u062d\u0631\u0641 \u06cc\u0627 \u0639\u062f\u062f)',
                          ),
                          value: G,
                          onChangeText: H,
                          autoComplete: 'new-password',
                          textContentType: 'newPassword',
                        }),
                        (0, f.jsx)(n.Input, {
                          testID: 'account-password-repeat',
                          secureTextEntry: !0,
                          placeholder: u.platformFa.confirmPassword,
                          value: J,
                          onChangeText: K,
                          autoComplete: 'new-password',
                          textContentType: 'newPassword',
                        }),
                        (0, f.jsx)(n.Button, {
                          testID: 'account-password-save',
                          disabled: b || !G || (!!k.hasPassword && !z),
                          onPress: () => {
                            N(async () => {
                              if (G.length < 10)
                                return void S(u.platformFa.passwordMin);
                              if (G !== J)
                                return void S(u.platformFa.passwordMismatch);
                              const e = await (0, c.request)(
                                '/v1/me/password',
                                'POST',
                                {
                                  password: G,
                                  ...(k.hasPassword
                                    ? { currentPassword: z }
                                    : {}),
                                },
                              );
                              (q((s) => ({ ...s, ...e.user })),
                                Q(),
                                _(
                                  (0, h.L)(
                                    '\u0631\u0645\u0632 \u0639\u0628\u0648\u0631 \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f',
                                  ),
                                ));
                            });
                          },
                          children: (0, h.L)(
                            '\u0630\u062e\u06cc\u0631\u0647 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631',
                          ),
                        }),
                        (0, f.jsx)(n.Button, {
                          ghost: !0,
                          onPress: Q,
                          children: (0, h.L)(
                            '\u0627\u0646\u0635\u0631\u0627\u0641',
                          ),
                        }),
                      ],
                    })
                  : '' === M &&
                    (0, f.jsx)(n.Button, {
                      secondary: !0,
                      testID: 'account-password-edit',
                      onPress: () => {
                        (O('password'), S(''), _(''));
                      },
                      children: k.hasPassword
                        ? (0, h.L)(
                            '\u062a\u063a\u06cc\u06cc\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631',
                          )
                        : (0, h.L)(
                            '\u0627\u0641\u0632\u0648\u062f\u0646 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631',
                          ),
                    }),
              ],
            }),
            (0, f.jsx)(p.GmailLinkCard, { staff: !!k.staff }),
            (0, f.jsx)(l.DevicesCard, { shop: e }),
            !!v &&
              (0, f.jsx)(n.Copy, { accessibilityRole: 'alert', children: v }),
            !!D &&
              (0, f.jsx)(n.Copy, {
                accessibilityRole: 'alert',
                style: { color: P.danger },
                children: D,
              }),
            (0, f.jsx)(n.Button, {
              testID: 'account-logout',
              secondary: !0,
              disabled: b,
              onPress: () =>
                I({
                  title: (0, h.L)(
                    '\u062e\u0631\u0648\u062c \u0627\u0632 \u062d\u0633\u0627\u0628',
                  ),
                  text: (0, h.L)(
                    '\u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f\u061f',
                  ),
                  ok: (0, h.L)('\u062e\u0631\u0648\u062c'),
                  run: () => {
                    N(async () => {
                      (await Promise.race([
                        (0, w.disableWebPush)(),
                        new Promise((e) => setTimeout(e, 4e3)),
                      ]),
                        await (0, c.request)('/v1/auth/logout', 'POST', {}),
                        await (0, c.storeToken)(null),
                        j());
                    });
                  },
                }),
              children: (0, h.L)(
                '\u062e\u0631\u0648\u062c \u0627\u0632 \u062d\u0633\u0627\u0628',
              ),
            }),
            T,
          ],
        });
      }));
    var e,
      s = _r(d[0]),
      t = _r(d[1]),
      o = (e = t) && e.__esModule ? e : { default: e },
      n = _r(d[2]),
      r = _r(d[3]),
      c = _r(d[4]),
      u = _r(d[5]),
      l = _r(d[6]),
      p = _r(d[7]),
      h = _r(d[8]),
      w = _r(d[9]),
      x = _r(d[10]),
      f = _r(d[11]);
    const y = (e) =>
      '\u2066' +
      (0, h.localDigits)(e.startsWith('+98') ? '0' + e.slice(3) : e) +
      '\u2069';
    function L(e) {
      const s = e instanceof Error ? e.message : '';
      return (
        {
          email_taken: (0, h.L)(
            '\u0627\u06cc\u0646 \u0627\u06cc\u0645\u06cc\u0644 \u0628\u0631\u0627\u06cc \u062d\u0633\u0627\u0628 \u062f\u06cc\u06af\u0631\u06cc \u062b\u0628\u062a \u0634\u062f\u0647 \u0627\u0633\u062a',
          ),
          wrong_password: (0, h.L)(
            '\u0631\u0645\u0632 \u0641\u0639\u0644\u06cc \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a',
          ),
          current_password_required: (0, h.L)(
            '\u0631\u0645\u0632 \u0641\u0639\u0644\u06cc \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f',
          ),
          staff_account: (0, h.L)(
            '\u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0645\u0646\u062f \u0646\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0627\u06cc\u0645\u06cc\u0644 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634\u062f',
          ),
        }[s] || (0, c.message)(e)
      );
    }
  },
  729,
  [2, 99, 407, 382, 415, 502, 603, 514, 311, 545, 534, 338],
);
