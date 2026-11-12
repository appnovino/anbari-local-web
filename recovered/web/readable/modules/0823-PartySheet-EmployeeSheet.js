// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 823; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PartySheet = function ({
        title: e,
        initial: l,
        defaults: n,
        shopSide: o,
        canDefault: c,
        contactName: p,
        nameOnly: C = !1,
        addresses: I = [],
        canEditAddresses: D = !1,
        onAddresses: L,
        onSave: P,
        onReset: k,
        onClose: E,
      }) {
        const { colors: T } = (0, b.useTheme)(),
          R = (0, f.invoiceDesignLabels)(),
          [w, z] = (0, t.useState)(l),
          [B, _] = (0, t.useState)(!1),
          [A, H] = (0, t.useState)(!1),
          [O, M] = (0, t.useState)(!1),
          [N, V] = (0, t.useState)(''),
          [F, W] = (0, t.useState)(null),
          [Y, q] = (0, t.useState)(I),
          K = (e) => (t) => {
            (z((s) => ({ ...s, [e]: t })), V(''));
          },
          $ = Object.keys(w).some((e) => w[e].trim() !== n[e].trim());
        async function G(e) {
          if (!O) {
            (M(!0), V(''));
            try {
              (await e(), E());
            } catch (e) {
              V(
                e instanceof Error && 'invalid' === e.message
                  ? R.idsDigits
                  : e instanceof Error && 'postal' === e.message
                    ? R.postalLength
                    : e instanceof Error
                      ? e.message
                      : String(e),
              );
            } finally {
              M(!1);
            }
          }
        }
        async function J(e) {
          if (O || !L) return;
          let t;
          V('');
          try {
            t = e();
          } catch (e) {
            return void V(
              e instanceof Error && 'address_book_full' === e.message
                ? R.addressFull
                : e instanceof Error && 'address_empty' === e.message
                  ? (0, u.L)(
                      '\u0646\u0634\u0627\u0646\u06cc \u062e\u0627\u0644\u06cc \u0627\u0633\u062a.',
                    )
                  : e instanceof Error
                    ? e.message
                    : String(e),
            );
          }
          M(!0);
          try {
            (await L(t), q(t), W(null));
          } catch (e) {
            V(e instanceof Error ? e.message : String(e));
          } finally {
            M(!1);
          }
        }
        const Q = (e, t, s = {}) =>
          (0, j.jsxs)(i.default, {
            style: { gap: 4 },
            children: [
              (0, j.jsx)(x.Copy, { style: { fontSize: 13 }, children: t }),
              (0, j.jsx)(x.Input, {
                testID: 'invoice-head-' + e,
                accessibilityLabel: t,
                value: w[e],
                maxLength: h.PARTY_LIMITS[e],
                editable: !O,
                onChangeText: K(e),
                ...s,
              }),
            ],
          });
        return (0, j.jsxs)(v, {
          testID: 'invoice-head-sheet',
          title: e,
          onClose: () => {
            O || E();
          },
          children: [
            Q('name', (0, u.L)('\u0646\u0627\u0645')),
            !C &&
              (0, j.jsxs)(j.Fragment, {
                children: [
                  Q('phone', (0, u.L)('\u062a\u0644\u0641\u0646'), {
                    keyboardType: 'phone-pad',
                    ltr: !0,
                  }),
                  Q('address', (0, u.L)('\u0646\u0634\u0627\u0646\u06cc'), {
                    multiline: !0,
                  }),
                  (Y.length > 0 || D) &&
                    (0, j.jsxs)(i.default, {
                      style: { gap: 6 },
                      children: [
                        Y.length > 0 &&
                          (0, j.jsx)(x.Copy, {
                            style: {
                              fontSize: 12,
                              lineHeight: 20,
                              color: T.muted,
                            },
                            children: R.addressBook,
                          }),
                        Y.map((e, t) =>
                          F?.index === t
                            ? (0, j.jsxs)(
                                i.default,
                                {
                                  style: { gap: 6 },
                                  children: [
                                    (0, j.jsx)(x.Input, {
                                      testID: 'invoice-address-edit-input',
                                      accessibilityLabel: R.editAddress,
                                      value: F.text,
                                      maxLength: h.ADDRESS_BOOK.length,
                                      multiline: !0,
                                      editable: !O,
                                      onChangeText: (e) => {
                                        (W({ index: t, text: e }), V(''));
                                      },
                                    }),
                                    (0, j.jsxs)(i.default, {
                                      style: {
                                        flexDirection: 'row-reverse',
                                        gap: 14,
                                        alignItems: 'center',
                                      },
                                      children: [
                                        (0, j.jsx)(s.default, {
                                          testID: 'invoice-address-edit-save',
                                          accessibilityRole: 'button',
                                          disabled: O,
                                          onPress: () => {
                                            J(() => {
                                              if (
                                                Y.some(
                                                  (e, s) =>
                                                    s !== t &&
                                                    e === F.text.trim(),
                                                )
                                              )
                                                throw Error(R.addressExists);
                                              return (0, h.addressBookEdit)(
                                                Y,
                                                t,
                                                F.text,
                                              );
                                            });
                                          },
                                          style: { padding: 4 },
                                          children: (0, j.jsx)(x.Copy, {
                                            style: {
                                              fontSize: 13,
                                              color: T.accent,
                                            },
                                            children: (0, u.L)(
                                              '\u0630\u062e\u06cc\u0631\u0647',
                                            ),
                                          }),
                                        }),
                                        (0, j.jsx)(s.default, {
                                          testID: 'invoice-address-edit-delete',
                                          accessibilityRole: 'button',
                                          disabled: O,
                                          onPress: () => {
                                            J(() =>
                                              (0, h.addressBookEdit)(
                                                Y,
                                                t,
                                                null,
                                              ),
                                            );
                                          },
                                          style: { padding: 4 },
                                          children: (0, j.jsx)(x.Copy, {
                                            style: {
                                              fontSize: 13,
                                              color: T.danger,
                                            },
                                            children: R.deleteAddress,
                                          }),
                                        }),
                                        (0, j.jsx)(s.default, {
                                          testID: 'invoice-address-edit-cancel',
                                          accessibilityRole: 'button',
                                          disabled: O,
                                          onPress: () => {
                                            (W(null), V(''));
                                          },
                                          style: { padding: 4 },
                                          children: (0, j.jsx)(x.Copy, {
                                            style: {
                                              fontSize: 13,
                                              color: T.muted,
                                            },
                                            children: R.cancel,
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t,
                              )
                            : (0, j.jsxs)(
                                i.default,
                                {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 8,
                                  },
                                  children: [
                                    (0, j.jsx)(s.default, {
                                      testID: 'invoice-address-pick-' + t,
                                      accessibilityRole: 'button',
                                      accessibilityLabel: e,
                                      disabled: O,
                                      onPress: () => K('address')(e),
                                      style: ({ pressed: e }) => ({
                                        flex: 1,
                                        backgroundColor: T.soft,
                                        borderRadius: 10,
                                        paddingVertical: 8,
                                        paddingHorizontal: 10,
                                        opacity: e ? 0.6 : 1,
                                      }),
                                      children: (0, j.jsx)(x.Copy, {
                                        numberOfLines: 2,
                                        style: { fontSize: 13, lineHeight: 20 },
                                        children: e,
                                      }),
                                    }),
                                    D &&
                                      (0, j.jsx)(s.default, {
                                        testID: 'invoice-address-edit-' + t,
                                        accessibilityRole: 'button',
                                        accessibilityLabel:
                                          R.editAddress + ' ' + e,
                                        disabled: O,
                                        onPress: () => {
                                          (W({ index: t, text: e }), V(''));
                                        },
                                        style: { padding: 4 },
                                        children: (0, j.jsx)(x.Copy, {
                                          style: {
                                            fontSize: 12.5,
                                            color: T.accent,
                                          },
                                          children: R.editAddress,
                                        }),
                                      }),
                                  ],
                                },
                                t,
                              ),
                        ),
                        D &&
                          !!w.address.trim() &&
                          !Y.includes(w.address.trim()) &&
                          (0, j.jsx)(s.default, {
                            testID: 'invoice-address-save',
                            accessibilityRole: 'button',
                            disabled: O,
                            onPress: () => {
                              J(() => (0, h.addressBookWith)(Y, w.address));
                            },
                            style: { alignSelf: 'flex-start', padding: 4 },
                            children: (0, j.jsx)(x.Copy, {
                              style: { fontSize: 12.5, color: T.accent },
                              children: '+ ' + R.saveAddress,
                            }),
                          }),
                      ],
                    }),
                  (0, j.jsxs)(i.default, {
                    style: { flexDirection: 'row-reverse', gap: 10 },
                    children: [
                      (0, j.jsx)(i.default, {
                        style: { flex: 1 },
                        children: Q(
                          'economicId',
                          (0, u.L)(
                            '\u06a9\u062f \u0627\u0642\u062a\u0635\u0627\u062f\u06cc',
                          ),
                          { keyboardType: 'number-pad', ltr: !0 },
                        ),
                      }),
                      (0, j.jsx)(i.default, {
                        style: { flex: 1 },
                        children: Q('nationalId', R.nationalId, {
                          keyboardType: 'number-pad',
                          ltr: !0,
                        }),
                      }),
                    ],
                  }),
                  (0, j.jsxs)(i.default, {
                    style: { flexDirection: 'row-reverse', gap: 10 },
                    children: [
                      (0, j.jsx)(i.default, {
                        style: { flex: 1 },
                        children: Q('postalCode', R.postalCode, {
                          keyboardType: 'number-pad',
                          ltr: !0,
                        }),
                      }),
                      (0, j.jsx)(i.default, {
                        style: { flex: 1 },
                        children: Q('registrationNo', R.registrationNo, {
                          keyboardType: 'number-pad',
                          ltr: !0,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            (0, j.jsx)(x.Copy, {
              style: { fontSize: 12, lineHeight: 20, color: T.muted },
              children: (0, u.L)(
                '\u062e\u0627\u0646\u0647\u0654 \u062e\u0627\u0644\u06cc \u0631\u0648\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631 \u0686\u0627\u067e \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
              ),
            }),
            o &&
              c &&
              (0, j.jsx)(S, {
                testID: 'invoice-head-default',
                on: B,
                onPress: () => _((e) => !e),
                label: (0, u.L)(
                  '\u062a\u0644\u0641\u0646\u060c \u0646\u0634\u0627\u0646\u06cc \u0648 \u06a9\u062f\u0647\u0627 \u0628\u0631\u0627\u06cc \u0647\u0645\u0647\u0654 \u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u0628\u0639\u062f\u06cc \u0647\u0645 \u0630\u062e\u06cc\u0631\u0647 \u0634\u0648\u062f',
                ),
              }),
            !o &&
              !!p &&
              (0, j.jsx)(S, {
                testID: 'invoice-head-contact',
                on: A,
                onPress: () => H((e) => !e),
                label: (0, u.L)(
                  '\u062a\u0644\u0641\u0646\u060c \u0646\u0634\u0627\u0646\u06cc \u0648 \u06a9\u062f \u0627\u0642\u062a\u0635\u0627\u062f\u06cc \u062f\u0631 \u0627\u0637\u0644\u0627\u0639\u0627\u062a \xab{name}\xbb \u0647\u0645 \u0630\u062e\u06cc\u0631\u0647 \u0634\u0648\u062f',
                  { name: p },
                ),
              }),
            !!N &&
              (0, j.jsx)(x.Copy, {
                accessibilityRole: 'alert',
                style: { color: T.danger },
                children: N,
              }),
            (0, j.jsxs)(i.default, {
              style: { flexDirection: 'row-reverse', gap: 8 },
              children: [
                (0, j.jsx)(i.default, {
                  style: { flex: 1 },
                  children: (0, j.jsx)(x.Button, {
                    testID: 'invoice-head-save',
                    disabled: O,
                    onPress: function () {
                      return G(async () => {
                        for (const e of [
                          'economicId',
                          'nationalId',
                          'postalCode',
                          'registrationNo',
                        ])
                          if (!/^[0-9]*$/.test((0, y.latinDigits)(w[e]).trim()))
                            throw Error('invalid');
                        const e = (0, y.latinDigits)(w.postalCode).trim();
                        if (e && 10 !== e.length) throw Error('postal');
                        await P({
                          values: w,
                          asDefault: o && c && B,
                          toContact: !o && !!p && A,
                        });
                      });
                    },
                    children: (0, u.L)('\u0630\u062e\u06cc\u0631\u0647'),
                  }),
                }),
                (0, j.jsx)(i.default, {
                  style: { flex: 1 },
                  children: (0, j.jsx)(x.Button, {
                    secondary: !0,
                    disabled: O,
                    onPress: E,
                    children: (0, u.L)('\u0644\u063a\u0648'),
                  }),
                }),
              ],
            }),
            $ &&
              (0, j.jsx)(x.Button, {
                testID: 'invoice-head-reset',
                ghost: !0,
                disabled: O,
                onPress: () => G(k),
                children: (0, u.L)(
                  '\u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0646 \u0628\u0647 \u067e\u06cc\u0634\u200c\u0641\u0631\u0636',
                ),
              }),
          ],
        });
      }),
      (_e.EmployeeSheet = function ({ initial: e, onSave: s, onClose: l }) {
        const { colors: n } = (0, b.useTheme)(),
          [o, c] = (0, t.useState)(e),
          [y, f] = (0, t.useState)(!1),
          [p, S] = (0, t.useState)('');
        return (0, j.jsxs)(v, {
          testID: 'invoice-employee-sheet',
          title: (0, u.L)(
            '\u06a9\u0627\u0631\u0645\u0646\u062f \u0627\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631',
          ),
          onClose: () => {
            y || l();
          },
          children: [
            (0, j.jsxs)(i.default, {
              style: { gap: 4 },
              children: [
                (0, j.jsx)(x.Copy, {
                  style: { fontSize: 13 },
                  children: (0, u.L)('\u0646\u0627\u0645'),
                }),
                (0, j.jsx)(x.Input, {
                  testID: 'invoice-employee-name',
                  accessibilityLabel: (0, u.L)('\u0646\u0627\u0645'),
                  value: o,
                  maxLength: h.EMPLOYEE_LIMIT,
                  editable: !y,
                  onChangeText: c,
                }),
              ],
            }),
            (0, j.jsx)(x.Copy, {
              style: { fontSize: 12, lineHeight: 20, color: n.muted },
              children: (0, u.L)(
                '\u062e\u0627\u0644\u06cc \u0628\u06af\u0630\u0627\u0631\u06cc\u062f \u062a\u0627 \u0646\u0627\u0645\u06cc \u0686\u0627\u067e \u0646\u0634\u0648\u062f.',
              ),
            }),
            !!p &&
              (0, j.jsx)(x.Copy, {
                accessibilityRole: 'alert',
                style: { color: n.danger },
                children: p,
              }),
            (0, j.jsxs)(i.default, {
              style: { flexDirection: 'row-reverse', gap: 8 },
              children: [
                (0, j.jsx)(i.default, {
                  style: { flex: 1 },
                  children: (0, j.jsx)(x.Button, {
                    testID: 'invoice-employee-save',
                    disabled: y,
                    onPress: async function () {
                      if (!y) {
                        (f(!0), S(''));
                        try {
                          (await s(o), l());
                        } catch (e) {
                          S(e instanceof Error ? e.message : String(e));
                        } finally {
                          f(!1);
                        }
                      }
                    },
                    children: (0, u.L)('\u0630\u062e\u06cc\u0631\u0647'),
                  }),
                }),
                (0, j.jsx)(i.default, {
                  style: { flex: 1 },
                  children: (0, j.jsx)(x.Button, {
                    secondary: !0,
                    disabled: y,
                    onPress: l,
                    children: (0, u.L)('\u0644\u063a\u0648'),
                  }),
                }),
              ],
            }),
          ],
        });
      }));
    var t = r(d[0]),
      s = e(r(d[1])),
      i = e(r(d[2])),
      l = r(d[3]),
      n = r(d[4]),
      o = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      y = r(d[8]),
      h = r(d[9]),
      f = r(d[10]),
      x = r(d[11]),
      p = r(d[12]),
      b = r(d[13]),
      j = r(d[14]);
    const S = ({ on: e, label: t, onPress: l, testID: n }) => {
      const { colors: o } = (0, b.useTheme)();
      return (0, j.jsxs)(s.default, {
        testID: n,
        accessibilityRole: 'checkbox',
        accessibilityState: { checked: e },
        onPress: l,
        style: {
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 10,
          paddingVertical: 6,
        },
        children: [
          (0, j.jsx)(i.default, {
            style: {
              width: 22,
              height: 22,
              borderRadius: 6,
              borderWidth: 2,
              borderColor: e ? o.accent : o.line,
              backgroundColor: e ? o.accent : 'transparent',
              alignItems: 'center',
              justifyContent: 'center',
            },
            children:
              e &&
              (0, j.jsx)(x.Copy, {
                style: { color: o.onAccent, fontSize: 13, lineHeight: 18 },
                children: '\u2713',
              }),
          }),
          (0, j.jsx)(x.Copy, {
            style: { flex: 1, fontSize: 13, lineHeight: 21 },
            children: t,
          }),
        ],
      });
    };
    function v({ testID: e, title: t, children: s, onClose: u }) {
      const { colors: y } = (0, b.useTheme)(),
        h = (0, c.useSafeAreaInsets)();
      return (0, j.jsx)(l.Modal, {
        visible: !0,
        transparent: !0,
        animationType: 'slide',
        onRequestClose: u,
        children: (0, j.jsxs)(i.default, {
          style: {
            flex: 1,
            backgroundColor: '#0008',
            justifyContent: 'flex-end',
            paddingTop: h.top + 20,
          },
          children: [
            (0, j.jsx)(p.Backdrop, { testID: e + '-backdrop', onClose: u }),
            (0, j.jsx)(n.PullCard, {
              testID: e,
              onClose: u,
              style: {
                maxHeight: '92%',
                width: '100%',
                maxWidth: 650,
                alignSelf: 'center',
                backgroundColor: y.bg,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                padding: 16,
                paddingBottom: h.bottom + 16,
              },
              children: (0, j.jsxs)(o.ScrollView, {
                keyboardShouldPersistTaps: 'handled',
                contentContainerStyle: { gap: 12 },
                children: [
                  (0, j.jsx)(p.PopupHeader, {
                    testID: e + '-close',
                    title: t,
                    titleStyle: {
                      fontSize: 18,
                      lineHeight: 28,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    onClose: u,
                  }),
                  s,
                ],
              }),
            }),
          ],
        }),
      });
    }
  },
  823,
  [2, 232, 99, 381, 515, 380, 342, 311, 440, 474, 804, 407, 533, 382, 338],
);
