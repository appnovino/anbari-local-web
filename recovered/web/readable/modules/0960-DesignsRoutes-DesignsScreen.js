// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 960; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.DesignsRoutes = function ({ shop: e }) {
        const { colors: n } = (0, j.useTheme)(),
          l = (0, y.useSafeInsets)(),
          [u, f] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => z.designsEntries.subscribe(f), []),
          (0, s.useEffect)(() => {
            e || z.designsEntries.close();
          }, [e?.id]),
          u && e
            ? (0, k.jsx)(c.PageModal, {
                visible: !0,
                animationType: 'slide',
                onRequestClose: () => z.designsEntries.close(),
                desk: {
                  id: 'designs',
                  title: (0, C.L)(
                    '\u0637\u0631\u062d \u0648 \u0642\u0627\u0644\u0628',
                  ),
                },
                children: (0, k.jsxs)(t.default, {
                  behavior: p.keyboardBehavior,
                  style: { flex: 1, backgroundColor: n.bg },
                  children: [
                    (0, k.jsxs)(o.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingHorizontal: 14,
                        paddingTop: l.top + 14,
                      },
                      children: [
                        (0, k.jsx)(S.Copy, {
                          accessibilityRole: 'header',
                          style: {
                            fontSize: 20,
                            lineHeight: 30,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: (0, C.L)(
                            '\u0637\u0631\u062d \u0648 \u0642\u0627\u0644\u0628',
                          ),
                        }),
                        (0, k.jsx)(h.PageClose, {
                          testID: 'designs-close',
                          title: (0, C.L)(
                            '\u0637\u0631\u062d \u0648 \u0642\u0627\u0644\u0628',
                          ),
                          onPress: () => z.designsEntries.close(),
                        }),
                      ],
                    }),
                    (0, k.jsx)(P, { shop: e }),
                    (0, k.jsx)(b.ToastHost, {}),
                  ],
                }),
              })
            : null
        );
      }),
      (_e.DesignsScreen = P));
    var s = r(d[0]),
      t = e(r(d[1])),
      n = e(r(d[2])),
      l = e(r(d[3])),
      o = e(r(d[4])),
      c = r(d[5]),
      h = r(d[6]),
      u = r(d[7]),
      y = r(d[8]),
      p = r(d[9]),
      f = r(d[10]),
      x = r(d[11]),
      S = r(d[12]),
      b = r(d[13]),
      j = r(d[14]),
      L = r(d[15]),
      C = r(d[16]),
      v = r(d[17]),
      E = r(d[18]),
      D = r(d[19]),
      I = r(d[20]),
      w = r(d[21]),
      T = r(d[22]),
      _ = r(d[23]),
      z = r(d[24]),
      k = r(d[25]);
    const M = '\u200f',
      H = () => ({
        id: 'sample',
        type: 'sale',
        receiptNo: 1024,
        paymentMethod: 'cash',
        occurredAt: new Date().toISOString(),
        lines: [
          {
            id: 'a',
            movementId: 'a',
            name: (0, C.L)(
              '\u0686\u0627\u06cc \u06a9\u06cc\u0633\u0647\u200c\u0627\u06cc',
            ),
            unit: 'piece',
            quantity: 2,
            unitPrice: 85e3,
            saleTotal: 17e4,
          },
          {
            id: 'b',
            movementId: 'b',
            name: (0, C.L)('\u0634\u06a9\u0631'),
            unit: 'kg',
            quantity: 1,
            unitPrice: 62e3,
            saleTotal: 62e3,
          },
        ],
        totalToman: 232e3,
        paidToman: 232e3,
      });
    function P({ shop: e }) {
      const { colors: t } = (0, j.useTheme)(),
        c = (0, u.useSafeAreaInsets)(),
        h = (0, v.scoped)(e.id, 'notebook-shop'),
        { data: y, reload: z } = (0, v.useSwr)(h, () =>
          (0, T.readNotebookShop)(e),
        ),
        P = (0, x.isLead)(e),
        [A, B] = (0, s.useState)(!1),
        [K, R] = (0, s.useState)(null),
        O = K || y?.settings?.invoice,
        W = (0, I.invoiceDesignLabels)(),
        G = (0, s.useMemo)(
          () =>
            (0, w.invoiceModel)(
              H(),
              e.name || '',
              y?.settings?.receiptExtras || [],
              (0, C.L)(
                '\u0622\u0642\u0627\u06cc \u0646\u0645\u0648\u0646\u0647',
              ),
              O,
            ),
          [e.name, y, O],
        ),
        V = y?.settings?.messages,
        [Y, F] = (0, s.useState)(null),
        [N, q] = (0, s.useState)(''),
        [J, Q] = (0, s.useState)(!1),
        U =
          Y ||
          Object.fromEntries(
            _.MESSAGE_KEYS.map((e) => [e, (0, _.messageText)(e, V)]),
          ),
        X =
          !!Y &&
          _.MESSAGE_KEYS.some(
            (e) => (Y[e] || '').trim() !== (0, _.messageText)(e, V),
          );
      const Z = {
          gap: 10,
          padding: 14,
          borderRadius: 16,
          borderWidth: l.default.hairlineWidth,
          borderColor: t.line,
          backgroundColor: t.surface,
        },
        $ = { fontSize: 16, lineHeight: 25, fontFamily: 'Vazirmatn_700Bold' },
        ee = { fontSize: 12.5, lineHeight: 21, color: t.muted },
        se = {
          invoiceShort: {
            shop: e.name || '',
            no: '\u06f1\u06f0\u06f2\u06f4',
            total: '\u06f2\u06f3\u06f2\u066c\u06f0\u06f0\u06f0',
          },
          invoiceLong: {
            buyer: (0, C.L)(
              '\u0622\u0642\u0627\u06cc \u0646\u0645\u0648\u0646\u0647',
            ),
            shop: e.name || '',
          },
          statement: {
            shop: e.name || '',
            name: (0, C.L)(
              '\u0622\u0642\u0627\u06cc \u0646\u0645\u0648\u0646\u0647',
            ),
          },
          reminder: {
            name: (0, C.L)(
              '\u0622\u0642\u0627\u06cc \u0646\u0645\u0648\u0646\u0647',
            ),
            shop: e.name || '',
            amount: '\u06f1\u066c\u06f2\u06f5\u06f0\u066c\u06f0\u06f0\u06f0',
          },
        };
      return (0, k.jsxs)(p.KeyboardScrollView, {
        keyboardShouldPersistTaps: 'handled',
        contentContainerStyle: {
          width: '100%',
          maxWidth: 720,
          alignSelf: 'center',
          padding: 14,
          gap: 14,
          paddingBottom: c.bottom + 40,
        },
        children: [
          (0, k.jsxs)(o.default, {
            testID: 'designs-screen',
            style: { gap: 14 },
            children: [
              (0, k.jsx)(S.Copy, {
                style: ee,
                children: (0, C.L)(
                  '\u0647\u0645\u0647 \u0686\u06cc\u0632 \u0627\u0632 \u0627\u0648\u0644 \u0622\u0645\u0627\u062f\u0647 \u0627\u0633\u062a\u061b \u0641\u0642\u0637 \u0627\u06af\u0631 \u062e\u0648\u0627\u0633\u062a\u06cc \u0686\u06cc\u0632\u06cc \u0631\u0627 \u0639\u0648\u0636 \u06a9\u0646.',
                ),
              }),
              (0, k.jsxs)(o.default, {
                testID: 'designs-invoice',
                style: Z,
                children: [
                  (0, k.jsx)(S.Copy, { style: $, children: W.design }),
                  (0, k.jsx)(S.Copy, {
                    style: ee,
                    children: (0, C.L)(
                      '\u0631\u0646\u06af\u060c \u0644\u0648\u06af\u0648\u060c \u0627\u0645\u0636\u0627\u060c \u0646\u0634\u0627\u0646\u06cc\u060c \u062a\u0644\u0641\u0646 \u0648 \u0645\u062a\u0646 \u067e\u0627\u06cc\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631. \u0647\u0645\u06cc\u0646 \u0637\u0631\u062d \u0631\u0648\u06cc \u0686\u0627\u067e\u060c \u0639\u06a9\u0633 \u0648 \u0644\u06cc\u0646\u06a9 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0645\u06cc\u200c\u0622\u06cc\u062f.',
                    ),
                  }),
                  (0, k.jsxs)(o.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 10,
                    },
                    children: [
                      (0, k.jsx)(o.default, {
                        style: {
                          width: 44,
                          height: 44,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: G.theme.line,
                          backgroundColor: G.theme.headerBg,
                          alignItems: 'center',
                          justifyContent: 'center',
                        },
                        children: (0, k.jsx)(o.default, {
                          style: {
                            width: 26,
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: G.theme.payableBg,
                          },
                        }),
                      }),
                      (0, k.jsxs)(o.default, {
                        style: { flex: 1, minWidth: 0 },
                        children: [
                          (0, k.jsx)(S.Copy, {
                            style: {
                              fontSize: 14,
                              lineHeight: 22,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children:
                              W.themes[O?.theme || 'classic'] ||
                              W.themes.classic,
                          }),
                          (0, k.jsx)(S.Copy, {
                            numberOfLines: 1,
                            style: ee,
                            children: G.brand,
                          }),
                        ],
                      }),
                      P &&
                        (0, k.jsx)(E.SmallKey, {
                          testID: 'designs-invoice-edit',
                          icon: 'edit',
                          label: (0, C.L)(
                            '\u062a\u063a\u06cc\u06cc\u0631 \u0637\u0631\u062d',
                          ),
                          disabled: !y,
                          onPress: () => B(!0),
                        }),
                    ],
                  }),
                ],
              }),
              (0, k.jsxs)(o.default, {
                testID: 'designs-messages',
                style: Z,
                children: [
                  (0, k.jsx)(S.Copy, {
                    style: $,
                    children: (0, C.L)(
                      '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645\u200c\u0647\u0627',
                    ),
                  }),
                  (0, k.jsx)(S.Copy, {
                    style: ee,
                    children: L.TELEGRAM_BOT
                      ? (0, C.L)(
                          '\u0645\u062a\u0646\u06cc \u06a9\u0647 \u0628\u0627 \u067e\u06cc\u0627\u0645\u06a9\u060c \u0648\u0627\u062a\u0633\u0627\u067e \u06cc\u0627 \u062a\u0644\u06af\u0631\u0627\u0645 \u0628\u0631\u0627\u06cc \u0645\u0634\u062a\u0631\u06cc \u0645\u06cc\u200c\u0631\u0648\u062f. \u0644\u06cc\u0646\u06a9 \u0641\u0627\u06a9\u062a\u0648\u0631 \u06cc\u0627 \u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 \u062e\u0648\u062f\u0634 \u0622\u062e\u0631 \u067e\u06cc\u0627\u0645 \u0645\u06cc\u200c\u0622\u06cc\u062f.',
                        )
                      : (0, C.L)(
                          '\u0645\u062a\u0646\u06cc \u06a9\u0647 \u0628\u0627 \u067e\u06cc\u0627\u0645\u06a9 \u06cc\u0627 \u0648\u0627\u062a\u0633\u0627\u067e \u0628\u0631\u0627\u06cc \u0645\u0634\u062a\u0631\u06cc \u0645\u06cc\u200c\u0631\u0648\u062f. \u0644\u06cc\u0646\u06a9 \u0641\u0627\u06a9\u062a\u0648\u0631 \u06cc\u0627 \u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 \u062e\u0648\u062f\u0634 \u0622\u062e\u0631 \u067e\u06cc\u0627\u0645 \u0645\u06cc\u200c\u0622\u06cc\u062f.',
                        ),
                  }),
                  _.MESSAGE_KEYS.map((e) => {
                    const s = (0, _.messageLabels)()[e],
                      c = !!V?.[e]?.trim();
                    return (0, k.jsxs)(
                      o.default,
                      {
                        testID: 'designs-message-' + e,
                        style: {
                          gap: 5,
                          paddingTop: 8,
                          borderTopWidth: l.default.hairlineWidth,
                          borderColor: t.line,
                        },
                        children: [
                          (0, k.jsxs)(o.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              gap: 8,
                            },
                            children: [
                              (0, k.jsx)(S.Copy, {
                                style: {
                                  fontSize: 14,
                                  lineHeight: 22,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: s.title,
                              }),
                              P &&
                                (c ||
                                  (void 0 !== Y?.[e] &&
                                    Y[e] !== (0, _.messageDefaults)()[e])) &&
                                (0, k.jsx)(n.default, {
                                  testID: 'designs-message-reset-' + e,
                                  accessibilityRole: 'button',
                                  onPress: () =>
                                    F((s) => ({
                                      ...(s || U),
                                      [e]: (0, _.messageDefaults)()[e],
                                    })),
                                  style: { padding: 4 },
                                  children: (0, k.jsx)(S.Copy, {
                                    style: { fontSize: 12, color: t.accent },
                                    children: (0, C.L)(
                                      '\u0645\u062a\u0646 \u067e\u06cc\u0634\u200c\u0641\u0631\u0636',
                                    ),
                                  }),
                                }),
                            ],
                          }),
                          P
                            ? (0, k.jsx)(S.Input, {
                                testID: 'designs-message-input-' + e,
                                value: M + (U[e] || ''),
                                multiline: !0,
                                maxLength: 301,
                                onChangeText: (s) =>
                                  F((t) => ({
                                    ...(t || U),
                                    [e]: s
                                      .split(M)
                                      .join('')
                                      .replace(/\n/g, ' '),
                                  })),
                                style: {
                                  minHeight: 64,
                                  textAlignVertical: 'top',
                                  textAlign: 'right',
                                },
                              })
                            : (0, k.jsx)(S.Copy, {
                                style: { fontSize: 13, lineHeight: 22 },
                                children: U[e],
                              }),
                          (0, k.jsx)(S.Copy, {
                            style: {
                              fontSize: 11.5,
                              lineHeight: 19,
                              color: t.muted,
                            },
                            children: s.hint,
                          }),
                          (0, k.jsx)(S.Copy, {
                            numberOfLines: 2,
                            style: {
                              fontSize: 11.5,
                              lineHeight: 19,
                              color: t.muted,
                            },
                            children: (0, C.L)(
                              '\u0646\u0645\u0648\u0646\u0647: {text}',
                              { text: (0, _.fillMessage)(U[e] || '', se[e]) },
                            ),
                          }),
                        ],
                      },
                      e,
                    );
                  }),
                  !!N &&
                    (0, k.jsx)(S.Copy, {
                      accessibilityRole: 'alert',
                      style: { fontSize: 13, lineHeight: 21, color: t.danger },
                      children: N,
                    }),
                  P &&
                    X &&
                    (0, k.jsxs)(o.default, {
                      style: { flexDirection: 'row-reverse', gap: 8 },
                      children: [
                        (0, k.jsx)(E.SmallKey, {
                          grow: !0,
                          testID: 'designs-messages-save',
                          kind: 'primary',
                          label: (0, C.L)(
                            '\u0630\u062e\u06cc\u0631\u0647 \u0645\u062a\u0646\u200c\u0647\u0627',
                          ),
                          disabled: J,
                          onPress: async function () {
                            if (!Y) return;
                            q('');
                            for (const e of _.MESSAGE_KEYS) {
                              const s = (0, _.unknownPlaceholders)(
                                e,
                                Y[e] || '',
                              );
                              if (s.length)
                                return void q(
                                  (0, C.L)(
                                    '\u062f\u0631 \xab{title}\xbb \u0627\u06cc\u0646 \u062c\u0627\u06cc\u200c\u062e\u0627\u0644\u06cc\u200c\u0647\u0627 \u0634\u0646\u0627\u062e\u062a\u0647 \u0646\u0645\u06cc\u200c\u0634\u0648\u0646\u062f: {list}. \u0641\u0642\u0637 \u0647\u0645\u0627\u0646\u200c\u0647\u0627\u06cc\u06cc \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u06a9\u0647 \u0632\u06cc\u0631\u0634 \u0622\u0645\u062f\u0647.',
                                    {
                                      title: (0, _.messageLabels)()[e].title,
                                      list: s
                                        .map((e) => '{' + e + '}')
                                        .join('\u060c '),
                                    },
                                  ),
                                );
                            }
                            const s = (0, _.messageDefaults)(),
                              t = Object.fromEntries(
                                _.MESSAGE_KEYS.map((e) => [
                                  e,
                                  (Y[e] || '').trim() === s[e]
                                    ? ''
                                    : (Y[e] || '').trim(),
                                ]),
                              );
                            Q(!0);
                            try {
                              (await (0, T.patchNotebookSettings)(e, {
                                messages: t,
                              }),
                                F(null),
                                await z(),
                                (0, b.showToast)(
                                  (0, C.L)(
                                    '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645\u200c\u0647\u0627 \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.',
                                  ),
                                ));
                            } catch (e) {
                              q(
                                (0, C.L)(
                                  '\u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f: {reason}',
                                  { reason: (0, f.message)(e) },
                                ),
                              );
                            } finally {
                              Q(!1);
                            }
                          },
                        }),
                        (0, k.jsx)(E.SmallKey, {
                          grow: !0,
                          label: (0, C.L)(
                            '\u0627\u0646\u0635\u0631\u0627\u0641',
                          ),
                          onPress: () => {
                            (F(null), q(''));
                          },
                        }),
                      ],
                    }),
                ],
              }),
              (0, k.jsxs)(o.default, {
                testID: 'designs-statement',
                style: Z,
                children: [
                  (0, k.jsx)(S.Copy, {
                    style: $,
                    children: (0, C.L)(
                      '\u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 \u0648 \u0646\u0633\u06cc\u0647',
                    ),
                  }),
                  (0, k.jsx)(S.Copy, {
                    style: ee,
                    children: (0, C.L)(
                      '\u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 \u0647\u0631 \u0634\u062e\u0635 \u0648 \u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u0646\u0633\u06cc\u0647 \u0647\u0645\u06cc\u0646 \u0637\u0631\u062d \u0641\u0627\u06a9\u062a\u0648\u0631 \u0631\u0627 \u0645\u06cc\u200c\u06af\u06cc\u0631\u0646\u062f (\u0631\u0646\u06af\u060c \u0644\u0648\u06af\u0648 \u0648 \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u06af\u0627\u0647). \u0645\u062a\u0646 \u067e\u06cc\u0627\u0645 \u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 \u0648 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0628\u062f\u0647\u06cc \u0631\u0627 \u0628\u0627\u0644\u0627 \u062f\u0631 \xab\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645\u200c\u0647\u0627\xbb \u0639\u0648\u0636 \u06a9\u0646.',
                    ),
                  }),
                ],
              }),
              !P &&
                (0, k.jsx)(S.Copy, {
                  style: ee,
                  children: (0, C.L)(
                    '\u0641\u0642\u0637 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u06cc\u0627 \u0645\u062f\u06cc\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0627\u06cc\u0646\u200c\u0647\u0627 \u0631\u0627 \u0639\u0648\u0636 \u06a9\u0646\u062f.',
                  ),
                }),
            ],
          }),
          P &&
            A &&
            (0, k.jsx)(
              D.InvoiceDesignSheet,
              {
                shop: e,
                shopName: e.name || '',
                preview: G,
                value: O,
                onSaved: (e) => {
                  (R(e), z());
                },
                onClose: () => B(!1),
              },
              e.id,
            ),
        ],
      });
    }
  },
  960,
  [
    2, 224, 232, 17, 99, 515, 516, 342, 540, 480, 415, 473, 407, 525, 382, 494,
    311, 489, 517, 802, 804, 803, 519, 821, 961, 338,
  ],
);
