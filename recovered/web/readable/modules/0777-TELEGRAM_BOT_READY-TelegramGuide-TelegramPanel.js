// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 777; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'TELEGRAM_BOT_READY', {
        enumerable: !0,
        get: function () {
          return C;
        },
      }),
      (_e.TelegramGuide = b),
      (_e.TelegramPanel = function ({ onClose: e }) {
        const { colors: j } = (0, h.useTheme)(),
          C = x.activeShop,
          [L, S] = (0, t.useState)(null),
          [P, w] = (0, t.useState)(null),
          [k, T] = (0, t.useState)(!1),
          [_, B] = (0, t.useState)(''),
          [z, D] = (0, t.useState)('');
        async function E() {
          if (C)
            try {
              (S(await (0, x.request)((0, x.shopPath)(C, '/telegram'))), B(''));
            } catch (e) {
              (S({ configured: !1, links: [] }), B((0, x.message)(e)));
            }
          else S({ configured: !1, links: [] });
        }
        async function v(e) {
          (T(!0), B(''), D(''));
          try {
            await e();
          } catch (e) {
            B((0, x.message)(e));
          } finally {
            T(!1);
          }
        }
        (0, t.useEffect)(() => {
          E();
        }, [C?.id]);
        const R = () =>
            v(async () => {
              w(
                await (0, x.request)(
                  (0, x.shopPath)(C, '/telegram/link-code'),
                  'POST',
                  {},
                ),
              );
            }),
          A = (e) =>
            v(async () => {
              (await (0, x.request)(
                (0, x.shopPath)(C, '/telegram/links/' + e.id),
                'DELETE',
              ),
                D(
                  (0, f.L)(
                    '\u0627\u062a\u0635\u0627\u0644 \u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0634\u062f.',
                  ),
                ),
                await E());
            }),
          F = (e, t) =>
            v(async () => {
              (S(
                (l) =>
                  l && {
                    ...l,
                    links: l.links.map((l) =>
                      l.id === e.id ? { ...l, alerts: t } : l,
                    ),
                  },
              ),
                await (0, x.request)(
                  (0, x.shopPath)(C, '/telegram/links/' + e.id),
                  'PATCH',
                  { alerts: t },
                ));
            }).then(E);
        return (0, p.jsxs)(i.ScrollView, {
          contentContainerStyle: u.common.gap,
          keyboardShouldPersistTaps: 'handled',
          children: [
            (0, p.jsx)(u.Copy, {
              style: u.common.title,
              children: (0, f.L)(
                '\u0631\u0628\u0627\u062a \u062a\u0644\u06af\u0631\u0627\u0645',
              ),
            }),
            L
              ? L.configured
                ? (0, p.jsx)(p.Fragment, {
                    children: (0, p.jsxs)(u.Card, {
                      children: [
                        (0, p.jsx)(u.Copy, {
                          children: (0, f.L)(
                            '\u0627\u062a\u0635\u0627\u0644 \u0628\u0647 \u0631\u0628\u0627\u062a',
                          ),
                        }),
                        (0, p.jsx)(u.Copy, {
                          style: [u.common.small, { color: j.muted }],
                          children: (0, f.L)(
                            '\u062f\u0631 \u062a\u0644\u06af\u0631\u0627\u0645 \u0645\u0648\u062c\u0648\u062f\u06cc \u0631\u0627 \u0628\u067e\u0631\u0633\u060c \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0631\u0648 \u0628\u0647 \u0627\u062a\u0645\u0627\u0645 \u0631\u0627 \u0628\u0628\u06cc\u0646 \u0648 \u0631\u0633\u06cc\u062f \u0648 \u0641\u0631\u0648\u0634 \u0631\u0627 \u0628\u0627 \u0645\u062a\u0646 \u06cc\u0627 \u067e\u06cc\u0627\u0645 \u0635\u0648\u062a\u06cc \u0628\u0641\u0631\u0633\u062a. \u0647\u0631 \u067e\u06cc\u0627\u0645 \u0647\u0645\u0627\u0646 \u0644\u062d\u0638\u0647 \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0642\u0627\u0628\u0644 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0627\u0633\u062a. \u0631\u0628\u0627\u062a \u0628\u0627 \u0647\u0645\u0627\u0646 \u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0647\u0627\u06cc \u062d\u0633\u0627\u0628 \u062a\u0648 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f.',
                          ),
                        }),
                        P
                          ? (0, p.jsxs)(p.Fragment, {
                              children: [
                                (0, p.jsx)(u.Button, {
                                  onPress: () => {
                                    o.default
                                      .openURL(P.url)
                                      .catch(() =>
                                        B(
                                          (0, f.L)(
                                            '\u062a\u0644\u06af\u0631\u0627\u0645 \u0628\u0627\u0632 \u0646\u0634\u062f\u061b \u06a9\u062f \u0631\u0627 \u062f\u0631 \u0631\u0628\u0627\u062a \u0628\u0641\u0631\u0633\u062a.',
                                          ),
                                        ),
                                      );
                                  },
                                  children: (0, f.L)(
                                    '\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0631\u0628\u0627\u062a \u062f\u0631 \u062a\u0644\u06af\u0631\u0627\u0645',
                                  ),
                                }),
                                (0, p.jsx)(u.Copy, {
                                  style: u.common.small,
                                  children: (0, f.L)(
                                    '\u06cc\u0627 \u062f\u0631 \u0631\u0628\u0627\u062a @{bot} \u0627\u06cc\u0646 \u0631\u0627 \u0628\u0641\u0631\u0633\u062a:',
                                    { bot: P.botUsername },
                                  ),
                                }),
                                (0, p.jsx)(u.Copy, {
                                  selectable: !0,
                                  style: [
                                    { fontSize: 18, letterSpacing: 1 },
                                    {
                                      textAlign: 'left',
                                      writingDirection: 'ltr',
                                    },
                                  ],
                                  children: '/start ' + P.code,
                                }),
                                (0, p.jsx)(u.Button, {
                                  secondary: !0,
                                  onPress: () => {
                                    return (
                                      (e = '/start ' + P.code),
                                      s.default.setString(e),
                                      void D(
                                        (0, f.L)(
                                          '\u06a9\u067e\u06cc \u0634\u062f.',
                                        ),
                                      )
                                    );
                                    var e;
                                  },
                                  children: (0, f.L)(
                                    '\u06a9\u067e\u06cc \u06a9\u062f',
                                  ),
                                }),
                                (0, p.jsx)(u.Copy, {
                                  style: [u.common.small, { color: j.muted }],
                                  children: (0, f.L)(
                                    '\u0627\u06cc\u0646 \u0644\u06cc\u0646\u06a9 \u06f1\u06f0 \u062f\u0642\u06cc\u0642\u0647 \u0627\u0639\u062a\u0628\u0627\u0631 \u062f\u0627\u0631\u062f \u0648 \u0641\u0642\u0637 \u06cc\u06a9 \u0628\u0627\u0631 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f. \u0622\u0646 \u0631\u0627 \u0628\u0631\u0627\u06cc \u06a9\u0633\u06cc \u0646\u0641\u0631\u0633\u062a.',
                                  ),
                                }),
                                (0, p.jsx)(u.Button, {
                                  ghost: !0,
                                  disabled: k,
                                  onPress: () => {
                                    R();
                                  },
                                  children: (0, f.L)(
                                    '\u0633\u0627\u062e\u062a\u0646 \u0644\u06cc\u0646\u06a9 \u062a\u0627\u0632\u0647',
                                  ),
                                }),
                              ],
                            })
                          : (0, p.jsx)(u.Button, {
                              testID: 'telegram-link',
                              disabled: k,
                              onPress: () => {
                                R();
                              },
                              children: (0, f.L)(
                                '\u0633\u0627\u062e\u062a\u0646 \u0644\u06cc\u0646\u06a9 \u0627\u062a\u0635\u0627\u0644',
                              ),
                            }),
                        (0, p.jsx)(u.Copy, {
                          style: [u.common.small, { color: j.muted }],
                          children: (0, f.L)(
                            '\u0631\u0645\u0632 \u062d\u0633\u0627\u0628 \u0631\u0627 \u0647\u0631\u06af\u0632 \u062f\u0631 \u062a\u0644\u06af\u0631\u0627\u0645 \u0646\u0641\u0631\u0633\u062a\u061b \u0631\u0628\u0627\u062a \u0641\u0642\u0637 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0644\u06cc\u0646\u06a9 \u06cc\u06a9\u200c\u0628\u0627\u0631\u0645\u0635\u0631\u0641 \u0648\u0635\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                          ),
                        }),
                      ],
                    }),
                  })
                : (0, p.jsxs)(u.Card, {
                    children: [
                      (0, p.jsx)(u.Copy, {
                        children: (0, f.L)(
                          '\u0631\u0628\u0627\u062a \u062a\u0644\u06af\u0631\u0627\u0645 \u0647\u0646\u0648\u0632 \u0631\u0648\u06cc \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647\u0654 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0631\u0648\u0634\u0646 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a.',
                        ),
                      }),
                      (0, p.jsx)(u.Copy, {
                        style: [u.common.small, { color: j.muted }],
                        children: (0, f.L)(
                          '\u0648\u0642\u062a\u06cc \u0641\u0639\u0627\u0644 \u0634\u0648\u062f\u060c \u0627\u0632 \u0647\u0645\u06cc\u0646\u200c\u062c\u0627 \u0644\u06cc\u0646\u06a9 \u0627\u062a\u0635\u0627\u0644 \u0645\u06cc\u200c\u0633\u0627\u0632\u06cc\u061b \u0628\u0639\u062f \u062f\u0631 \u062a\u0644\u06af\u0631\u0627\u0645 \u0645\u0648\u062c\u0648\u062f\u06cc \u0631\u0627 \u0645\u06cc\u200c\u067e\u0631\u0633\u06cc\u060c \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0631\u0648 \u0628\u0647 \u0627\u062a\u0645\u0627\u0645 \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u06cc \u0648 \u0631\u0633\u06cc\u062f \u0648 \u0641\u0631\u0648\u0634 \u0631\u0627 \u0628\u0627 \u0645\u062a\u0646 \u06cc\u0627 \u067e\u06cc\u0627\u0645 \u0635\u0648\u062a\u06cc \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u06cc.',
                        ),
                      }),
                    ],
                  })
              : (0, p.jsx)(l.default, { color: j.text }),
            (0, p.jsx)(b, {}),
            !!L?.links.length &&
              (0, p.jsxs)(u.Card, {
                children: [
                  (0, p.jsx)(u.Copy, {
                    children: (0, f.L)(
                      '\u0686\u062a\u200c\u0647\u0627\u06cc \u0648\u0635\u0644\u200c\u0634\u062f\u0647',
                    ),
                  }),
                  L.links.map((e) =>
                    (0, p.jsxs)(
                      c.default,
                      {
                        style: u.common.gap,
                        children: [
                          (0, p.jsxs)(c.default, {
                            style: u.common.between,
                            children: [
                              (0, p.jsx)(u.Copy, {
                                children: e.username
                                  ? '@' + e.username
                                  : (0, f.L)(
                                      '\u0686\u062a \u062a\u0644\u06af\u0631\u0627\u0645',
                                    ),
                              }),
                              (0, p.jsx)(u.Copy, {
                                style: [u.common.small, { color: j.muted }],
                                children: new Date(
                                  e.createdAt,
                                ).toLocaleDateString((0, f.dateLocale)()),
                              }),
                            ],
                          }),
                          !e.mine &&
                            (0, p.jsx)(u.Copy, {
                              style: [u.common.small, { color: j.muted }],
                              children: (0, f.L)('\u0639\u0636\u0648: {name}', {
                                name: e.userName,
                              }),
                            }),
                          (0, p.jsxs)(c.default, {
                            style: u.common.between,
                            children: [
                              (0, p.jsx)(u.Copy, {
                                style: u.common.small,
                                children: (0, f.L)(
                                  '\u0647\u0634\u062f\u0627\u0631 \u06a9\u0645\u0628\u0648\u062f \u0645\u0648\u062c\u0648\u062f\u06cc \u062f\u0631 \u062a\u0644\u06af\u0631\u0627\u0645',
                                ),
                              }),
                              (0, p.jsx)(n.default, {
                                disabled: k,
                                value: e.alerts,
                                onValueChange: (t) => {
                                  F(e, t);
                                },
                                trackColor: { false: j.soft, true: j.accent },
                                thumbColor: j.surface,
                                activeThumbColor: j.surface,
                              }),
                            ],
                          }),
                          (0, p.jsx)(u.Button, {
                            secondary: !0,
                            disabled: k,
                            onPress: () => {
                              A(e);
                            },
                            children: (0, f.L)(
                              '\u062c\u062f\u0627 \u06a9\u0631\u062f\u0646',
                            ),
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                ],
              }),
            !!z &&
              (0, p.jsx)(u.Copy, { accessibilityRole: 'alert', children: z }),
            !!_ &&
              (0, p.jsx)(u.Copy, {
                accessibilityRole: 'alert',
                style: { color: j.danger },
                children: _,
              }),
            (0, p.jsxs)(u.Card, {
              children: [
                (0, p.jsx)(u.Copy, { children: y.fa.telegramHistory }),
                (0, p.jsx)(u.Copy, {
                  style: [u.common.small, { color: j.muted }],
                  children: (0, f.L)(
                    '\u067e\u0633\u062a\u200c\u0647\u0627\u06cc \u0642\u062f\u06cc\u0645\u06cc \u06a9\u0627\u0646\u0627\u0644\u062a \u0631\u0627 \u0627\u0632 \xab\u062f\u0627\u062f\u0647\u200c\u0647\u0627 \u2190 \u0648\u0631\u0648\u062f \u062f\u0627\u062f\u0647 \u2190 \u0627\u0632 \u06a9\u0627\u0646\u0627\u0644 \u062a\u0644\u06af\u0631\u0627\u0645\xbb \u0628\u0647 \u06a9\u0627\u0644\u0627 \u062a\u0628\u062f\u06cc\u0644 \u06a9\u0646. \u067e\u0633\u062a\u200c\u0647\u0627\u06cc \u062a\u0627\u0632\u0647 \u0631\u0627 \u0647\u0645 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc \u0628\u0647 \u0631\u0628\u0627\u062a \u0641\u0648\u0631\u0648\u0627\u0631\u062f \u06a9\u0646\u06cc.',
                  ),
                }),
              ],
            }),
            (0, p.jsx)(u.Button, {
              secondary: !0,
              onPress: e,
              children: y.fa.close,
            }),
          ],
        });
      }));
    var t = r(d[0]),
      l = e(r(d[1])),
      s = e(r(d[2])),
      o = e(r(d[3])),
      n = e(r(d[4])),
      c = e(r(d[5])),
      i = r(d[6]),
      u = r(d[7]),
      h = r(d[8]),
      y = r(d[9]),
      x = r(d[10]),
      f = r(d[11]),
      j = r(d[12]),
      p = r(d[13]);
    const C = j.TELEGRAM_BOT,
      L = [
        [
          '\u0644\u06cc\u0646\u06a9 \u0628\u0633\u0627\u0632',
          '\xab\u0633\u0627\u062e\u062a\u0646 \u0644\u06cc\u0646\u06a9 \u0627\u062a\u0635\u0627\u0644\xbb \u0631\u0627 \u0628\u0632\u0646 (\u0641\u0642\u0637 \u06cc\u06a9 \u0628\u0627\u0631 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a).',
        ],
        [
          '\u0631\u0628\u0627\u062a \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646',
          '\xab\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0631\u0628\u0627\u062a \u062f\u0631 \u062a\u0644\u06af\u0631\u0627\u0645\xbb \u0631\u0627 \u0628\u0632\u0646 \u0648 \u062f\u0631 \u062a\u0644\u06af\u0631\u0627\u0645 \xabStart\xbb \u0631\u0627 \u0628\u0632\u0646\u061b \u0686\u062a \u0628\u0647 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u0648\u0635\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
        ],
        [
          '\u0628\u0641\u0631\u0633\u062a\u060c \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f',
          '\u0628\u0646\u0648\u06cc\u0633 \xab\u06f3 \u062a\u0627 \u0634\u06cc\u0631 \u0641\u0631\u0648\u062e\u062a\u0645\xbb \u06cc\u0627 \xab\u06f1\u06f0 \u0628\u0631\u0646\u062c \u0631\u0633\u06cc\u062f\xbb\u060c \u067e\u06cc\u0627\u0645 \u0635\u0648\u062a\u06cc \u0628\u0641\u0631\u0633\u062a\u060c \u0639\u06a9\u0633 \u06a9\u0627\u0644\u0627 \u0628\u0641\u0631\u0633\u062a \u06cc\u0627 \u067e\u0633\u062a \u06a9\u0627\u0646\u0627\u0644 \u0631\u0627 \u0641\u0648\u0631\u0648\u0627\u0631\u062f \u06a9\u0646\u061b \u0647\u0645\u0627\u0646 \u0644\u062d\u0638\u0647 \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f.',
        ],
        [
          '\u0628\u067e\u0631\u0633',
          '\xab\u0645\u0648\u062c\u0648\u062f\u06cc \u0634\u06cc\u0631\u061f\xbb \u06cc\u0627 /low \u0631\u0627 \u0628\u0641\u0631\u0633\u062a \u062a\u0627 \u0645\u0648\u062c\u0648\u062f\u06cc \u0648 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0631\u0648 \u0628\u0647 \u0627\u062a\u0645\u0627\u0645 \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc.',
        ],
      ];
    function b({ compact: e = !1 }) {
      const { colors: t } = (0, h.useTheme)();
      return (0, p.jsxs)(u.Card, {
        testID: 'telegram-guide',
        style: { gap: 10, borderWidth: 1, borderColor: t.accent },
        children: [
          (0, p.jsx)(u.Copy, {
            style: { fontSize: 16, fontFamily: 'Vazirmatn_700Bold' },
            children: (0, f.L)(
              '\u0622\u0645\u0648\u0632\u0634: \u062a\u0644\u06af\u0631\u0627\u0645 \u062f\u0631 \u06f4 \u0642\u062f\u0645',
            ),
          }),
          L.map(([l, s], o) =>
            (0, p.jsxs)(
              c.default,
              {
                style: {
                  flexDirection: 'row-reverse',
                  gap: 10,
                  alignItems: 'flex-start',
                },
                children: [
                  (0, p.jsx)(c.default, {
                    style: {
                      width: 26,
                      height: 26,
                      borderRadius: 13,
                      backgroundColor: t.accent,
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    children: (0, p.jsx)(u.Copy, {
                      style: {
                        fontSize: 13,
                        color: '#fff',
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: (0, f.localDigits)(o + 1),
                    }),
                  }),
                  (0, p.jsxs)(c.default, {
                    style: { flex: 1, gap: 2 },
                    children: [
                      (0, p.jsx)(u.Copy, {
                        style: {
                          fontSize: 14,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: (0, f.L)(l),
                      }),
                      !e &&
                        (0, p.jsx)(u.Copy, {
                          style: {
                            fontSize: 12,
                            lineHeight: 20,
                            color: t.muted,
                          },
                          children: (0, f.L)(s),
                        }),
                    ],
                  }),
                ],
              },
              o,
            ),
          ),
          !e &&
            (0, p.jsx)(u.Copy, {
              style: { fontSize: 12, lineHeight: 20, color: t.muted },
              children: (0, f.L)(
                '\u06a9\u0627\u0644\u0627\u06cc \u0628\u062f\u0648\u0646 \u062a\u0639\u062f\u0627\u062f (\u0645\u062b\u0644\u0627\u064b \u0641\u0642\u0637 \u0627\u0633\u0645 \u06cc\u0627 \u0639\u06a9\u0633) \u06cc\u06a9 \u0639\u062f\u062f \u0631\u0633\u06cc\u062f \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0627\u06af\u0631 \u0627\u0634\u062a\u0628\u0627\u0647 \u0628\u0648\u062f \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0646.',
              ),
            }),
        ],
      });
    }
  },
  777,
  [2, 217, 205, 210, 240, 99, 380, 407, 382, 492, 415, 311, 494, 338],
);
