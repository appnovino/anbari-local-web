// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 798; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.VoiceSaleCard = function ({
        sale: e,
        count: I,
        total: P,
        contacts: z,
        contactId: T,
        cheque: N,
        busy: k,
        blocked: H = !1,
        error: q,
        onChange: F,
        onPick: R,
        onCheque: _,
        photos: w = {},
        onPhotos: W,
        onInvoice: B,
        when: V,
        onWhen: O,
        children: M,
      }) {
        const { colors: U } = (0, b.useTheme)(),
          [E, K] = (0, o.useState)(!1),
          [A, J] = (0, o.useState)(''),
          [G, Q] = (0, o.useState)(!1),
          X = e ? (0, f.voiceSaleCustomer)(e, z, T) : void 0,
          Y = X?.target,
          Z = !!X?.create,
          $ = X?.phone,
          ee =
            e && z
              ? (0, p.personChoices)(e.customerName || '', e.customerPhone, z)
              : [],
          te = e ? (0, f.saleMethod)(e) : 'cash',
          oe = A ? (0, y.matchContacts)(A, z || []) : z || [],
          ie = (e) => F?.(e);
        return (0, D.jsxs)(j.Card, {
          testID: 'voice-sale-card',
          style: { padding: 0, gap: 0 },
          children: [
            (0, D.jsxs)(n.default, {
              style: { padding: 14, gap: 10 },
              children: [
                (0, D.jsxs)(n.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'flex-start',
                    gap: 10,
                  },
                  children: [
                    (0, D.jsxs)(n.default, {
                      style: { flex: 1, minWidth: 0, gap: 2 },
                      children: [
                        (0, D.jsx)(j.Copy, {
                          testID: 'voice-sale-title',
                          numberOfLines: 2,
                          style: {
                            fontSize: 15,
                            lineHeight: 24,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: (0, f.saleHeading)(e, Y?.name),
                        }),
                        (0, D.jsxs)(j.Copy, {
                          style: {
                            fontSize: 12,
                            lineHeight: 18,
                            color: U.muted,
                          },
                          children: [
                            (0, u.L)('{n} \u0642\u0644\u0645', {
                              n: (0, u.localDigits)(String(I)),
                            }),
                            e
                              ? ''
                              : ' \xb7 ' + (0, u.L)('\u0646\u0642\u062f\u06cc'),
                          ],
                        }),
                      ],
                    }),
                    (0, D.jsxs)(n.default, {
                      style: { alignItems: 'flex-start' },
                      children: [
                        (0, D.jsx)(j.Copy, {
                          style: {
                            fontSize: 11,
                            lineHeight: 16,
                            color: U.muted,
                          },
                          children: (0, u.L)('\u062c\u0645\u0639'),
                        }),
                        (0, D.jsx)(j.Copy, {
                          testID: 'voice-sale-total',
                          style: {
                            fontSize: 16,
                            lineHeight: 24,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children:
                            void 0 !== P
                              ? (0, h.money)(P, { full: !0, hint: !1 })
                              : '\u2014',
                        }),
                      ],
                    }),
                  ],
                }),
                e &&
                  (0, D.jsx)(n.default, {
                    accessibilityRole: 'radiogroup',
                    style: { flexDirection: 'row-reverse', gap: 6 },
                    children: [
                      'cash',
                      'card',
                      'credit',
                      ...('cheque' === te ? ['cheque'] : []),
                    ].map((t) =>
                      (0, D.jsx)(
                        l.default,
                        {
                          testID: 'voice-sale-method-' + t,
                          accessibilityRole: 'radio',
                          accessibilityState: {
                            checked: te === t,
                            disabled: k,
                          },
                          disabled: k,
                          onPress: () =>
                            ie({ ...e, payment: t, paidToman: null }),
                          style: {
                            flex: 1,
                            minHeight: 40,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: te === t ? U.accent : U.soft,
                          },
                          children: (0, D.jsx)(j.Copy, {
                            style: {
                              fontSize: 13,
                              color: te === t ? U.onAccent : U.text,
                            },
                            children:
                              'cash' === t
                                ? (0, u.L)('\u0646\u0642\u062f\u06cc')
                                : 'card' === t
                                  ? (0, u.L)('\u06a9\u0627\u0631\u062a')
                                  : 'credit' === t
                                    ? (0, u.L)('\u0646\u0633\u06cc\u0647')
                                    : (0, u.L)('\u0686\u06a9'),
                          }),
                        },
                        t,
                      ),
                    ),
                  }),
                e &&
                  (0, D.jsxs)(n.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 8,
                    },
                    children: [
                      (0, D.jsxs)(n.default, {
                        style: { flex: 1, minWidth: 0 },
                        children: [
                          Y &&
                            (0, D.jsx)(j.Copy, {
                              testID: 'voice-sale-matched',
                              numberOfLines: 1,
                              style: { fontSize: 12, color: U.muted },
                              children: (0, u.L)(
                                '\u062d\u0633\u0627\u0628: {name}',
                                { name: Y.name },
                              ),
                            }),
                          Z &&
                            $ &&
                            (0, D.jsx)(x.SameNamePrompt, {
                              testKey: 'voice-sale-same-name',
                              text: $.text,
                              people: $.others,
                              phone: e.customerPhone,
                              disabled: k,
                              onPick: (t) => {
                                (R?.(t), ie({ ...e, customerName: t.name }));
                              },
                              onPhone: (t) => ie({ ...e, customerPhone: t }),
                            }),
                          Z &&
                            !$ &&
                            (0, D.jsx)(j.Copy, {
                              testID: 'voice-sale-new-person',
                              style: {
                                fontSize: 12,
                                lineHeight: 18,
                                color: U.success,
                              },
                              children: ee.length
                                ? (0, u.L)(
                                    '\xab{name}\xbb \u0645\u062e\u0627\u0637\u0628 \u062c\u062f\u06cc\u062f \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0627\u06af\u0631 \u0645\u0646\u0638\u0648\u0631\u062a\u0627\u0646 \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u06cc\u0646\u200c\u0647\u0627\u0633\u062a\u060c \u0628\u0632\u0646\u06cc\u062f:',
                                    { name: e.customerName.trim() },
                                  )
                                : (0, u.L)(
                                    '\xab{name}\xbb \u0634\u062e\u0635 \u062c\u062f\u06cc\u062f \u0627\u0633\u062a\u061b \u0647\u0646\u06af\u0627\u0645 \u062a\u0623\u06cc\u06cc\u062f \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                                    { name: e.customerName.trim() },
                                  ),
                            }),
                          Z &&
                            !$ &&
                            ee.length > 0 &&
                            (0, D.jsx)(n.default, {
                              testID: 'voice-sale-near-people',
                              style: {
                                flexDirection: 'row-reverse',
                                flexWrap: 'wrap',
                                gap: 6,
                              },
                              children: ee.slice(0, 4).map((t) =>
                                (0, D.jsx)(
                                  l.default,
                                  {
                                    testID: 'voice-sale-near-' + t.id,
                                    accessibilityRole: 'button',
                                    disabled: k,
                                    onPress: () => {
                                      (R?.(t),
                                        ie({ ...e, customerName: t.name }));
                                    },
                                    style: {
                                      minHeight: 36,
                                      paddingHorizontal: 10,
                                      borderRadius: 10,
                                      justifyContent: 'center',
                                      backgroundColor: U.soft,
                                    },
                                    children: (0, D.jsx)(j.Copy, {
                                      style: { fontSize: 12, color: U.accent },
                                      children: t.name,
                                    }),
                                  },
                                  t.id,
                                ),
                              ),
                            }),
                          void 0 === z &&
                            (0, D.jsx)(j.Copy, {
                              style: { fontSize: 12, color: U.muted },
                              children: p.voiceFa.ledgerLoading,
                            }),
                          null === z &&
                            (0, D.jsx)(j.Copy, {
                              style: { fontSize: 12, color: U.danger },
                              children: p.voiceFa.ledgerOff,
                            }),
                          !!z &&
                            !Y &&
                            !Z &&
                            ee.length > 1 &&
                            (0, D.jsx)(x.PersonChoice, {
                              testKey: 'voice-sale-person',
                              people: ee,
                              disabled: k,
                              reason: (0, u.L)(
                                '\u0686\u0646\u062f \u0634\u062e\u0635 \u0628\u0627 \u0646\u0627\u0645 \xab{name}\xbb \u0647\u0633\u062a\u061b \u0627\u06cc\u0646 \u0641\u0631\u0648\u0634 \u0628\u0631\u0627\u06cc \u06a9\u062f\u0627\u0645 \u0627\u0633\u062a\u061f',
                                { name: e.customerName.trim() },
                              ),
                              onPick: (t) => {
                                (R?.(t), ie({ ...e, customerName: t.name }));
                              },
                            }),
                          !!z &&
                            !Y &&
                            !Z &&
                            ee.length > 0 &&
                            (0, D.jsx)(l.default, {
                              testID: 'voice-sale-new',
                              accessibilityRole: 'button',
                              disabled: k,
                              onPress: () =>
                                R?.({
                                  id: y.NEW_CONTACT,
                                  name: e.customerName.trim(),
                                }),
                              style: {
                                alignSelf: 'flex-end',
                                minHeight: 36,
                                paddingHorizontal: 12,
                                borderRadius: 10,
                                justifyContent: 'center',
                                backgroundColor: U.soft,
                              },
                              children: (0, D.jsx)(j.Copy, {
                                style: {
                                  fontSize: 12,
                                  color: U.success,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: p.voiceFa.makeNew,
                              }),
                            }),
                          !!z &&
                            !Y &&
                            !e.customerName?.trim() &&
                            'cash' !== te &&
                            'card' !== te &&
                            (0, D.jsx)(j.Copy, {
                              style: {
                                fontSize: 12,
                                lineHeight: 18,
                                color: U.danger,
                              },
                              children: (0, u.L)(
                                '\u0628\u0631\u0627\u06cc \u0646\u0633\u06cc\u0647 \u06cc\u0627 \u0686\u06a9\u060c \u0634\u062e\u0635 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
                              ),
                            }),
                        ],
                      }),
                      !!z &&
                        (0, D.jsx)(l.default, {
                          testID: 'voice-sale-pick',
                          accessibilityRole: 'button',
                          disabled: k,
                          onPress: () => K(!0),
                          style: ({ pressed: e }) => ({
                            minHeight: 36,
                            paddingHorizontal: 12,
                            borderRadius: 10,
                            justifyContent: 'center',
                            backgroundColor: e ? U.line : U.soft,
                          }),
                          children: (0, D.jsx)(j.Copy, {
                            style: {
                              fontSize: 12,
                              color: U.accent,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: (0, u.L)(
                              '\u062a\u063a\u06cc\u06cc\u0631 \u0634\u062e\u0635',
                            ),
                          }),
                        }),
                    ],
                  }),
                e &&
                  'credit' === te &&
                  !G &&
                  null === e.paidToman &&
                  (0, D.jsx)(l.default, {
                    testID: 'voice-sale-part-paid',
                    accessibilityRole: 'button',
                    disabled: k,
                    onPress: () => Q(!0),
                    style: { alignSelf: 'flex-end', paddingVertical: 4 },
                    children: (0, D.jsx)(j.Copy, {
                      style: { fontSize: 12, color: U.accent },
                      children: (0, u.L)(
                        '\u0628\u062e\u0634\u06cc \u0631\u0627 \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u062f\u0627\u062f\u061f',
                      ),
                    }),
                  }),
                e &&
                  ('cheque' === te ||
                    ('credit' === te && (G || null !== e.paidToman))) &&
                  (0, D.jsxs)(n.default, {
                    style: { gap: 4 },
                    children: [
                      (0, D.jsx)(j.Copy, {
                        style: { fontSize: 12, color: U.muted },
                        children:
                          'cheque' === te
                            ? (0, h.shopUnitText)(
                                (0, u.L)(
                                  '\u0645\u0628\u0644\u063a \u0686\u06a9 (\u062a\u0648\u0645\u0627\u0646)',
                                ),
                              )
                            : (0, h.shopUnitText)(
                                (0, u.L)(
                                  '\u0645\u0628\u0644\u063a \u067e\u0631\u062f\u0627\u062e\u062a\u200c\u0634\u062f\u0647 (\u062a\u0648\u0645\u0627\u0646)',
                                ),
                              ),
                      }),
                      (0, D.jsx)(t.MoneyInput, {
                        testID: 'voice-sale-paid',
                        accessibilityLabel:
                          'cheque' === te
                            ? (0, h.shopUnitText)(
                                (0, u.L)(
                                  '\u0645\u0628\u0644\u063a \u0686\u06a9 (\u062a\u0648\u0645\u0627\u0646)',
                                ),
                              )
                            : (0, h.shopUnitText)(
                                (0, u.L)(
                                  '\u0645\u0628\u0644\u063a \u067e\u0631\u062f\u0627\u062e\u062a\u200c\u0634\u062f\u0647 (\u062a\u0648\u0645\u0627\u0646)',
                                ),
                              ),
                        editable: !k,
                        placeholder:
                          'cheque' === te
                            ? (0, u.L)(
                                '\u062a\u0645\u0627\u0645 \u0645\u0628\u0644\u063a \u0641\u0627\u06a9\u062a\u0648\u0631',
                              )
                            : (0, u.L)(
                                '\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc',
                              ),
                        value: null === e.paidToman ? '' : String(e.paidToman),
                        onChange: (t) =>
                          ie({ ...e, paidToman: t ? Number(t) : null }),
                      }),
                    ],
                  }),
                e &&
                  'cheque' === te &&
                  (0, D.jsxs)(n.default, {
                    style: { gap: 8 },
                    children: [
                      0 === e.paidToman &&
                        (0, D.jsx)(j.Copy, {
                          style: { color: U.danger },
                          children: (0, u.L)(
                            '\u0645\u0628\u0644\u063a \u0686\u06a9 \u0628\u0627\u06cc\u062f \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0635\u0641\u0631 \u0628\u0627\u0634\u062f.',
                          ),
                        }),
                      (0, D.jsx)(j.Copy, {
                        children: (0, u.L)(
                          '\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 \u0631\u0627 \u0645\u0634\u062e\u0635 \u06a9\u0646\u06cc\u062f.',
                        ),
                      }),
                      N?.dueDate
                        ? (0, D.jsx)(C.JalaliDateField, {
                            dateOnly: !0,
                            id: 'voice-sale-cheque-due',
                            value: (0, y.isoToParts)(N.dueDate),
                            onChange: (e) =>
                              _?.({ ...N, dueDate: (0, y.partsToIso)(e) }),
                          })
                        : (0, D.jsx)(j.Button, {
                            secondary: !0,
                            disabled: k,
                            onPress: () =>
                              _?.({
                                dueDate: (0, y.partsToIso)((0, y.todayParts)()),
                              }),
                            children: (0, u.L)(
                              '\u0627\u0646\u062a\u062e\u0627\u0628 \u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9',
                            ),
                          }),
                      (0, D.jsx)(j.Input, {
                        accessibilityLabel: p.voiceFa.chequeNumber,
                        placeholder: p.voiceFa.chequeNumber,
                        value: N?.number || '',
                        editable: !k,
                        maxLength: 80,
                        onChangeText: (e) =>
                          _?.({
                            dueDate: N?.dueDate || '',
                            number: e,
                            bank: N?.bank,
                          }),
                      }),
                      W &&
                        (0, D.jsxs)(n.default, {
                          style: { gap: 4 },
                          children: [
                            (0, D.jsx)(j.Copy, {
                              style: { fontSize: 12, color: U.muted },
                              children: (0, u.L)(
                                '\u0627\u0641\u0632\u0648\u062f\u0646 \u062a\u0635\u0648\u06cc\u0631 \u0686\u06a9',
                              ),
                            }),
                            (0, D.jsx)(S.ChequePhotosField, {
                              testID: 'voice-sale-cheque-photo',
                              disabled: k,
                              value: {
                                ...(w.front
                                  ? { front: { uri: w.front.uri } }
                                  : {}),
                                ...(w.back
                                  ? { back: { uri: w.back.uri } }
                                  : {}),
                              },
                              onPick: (e, t) => W({ ...w, [e]: t }),
                              onRemove: (e) => {
                                const t = { ...w };
                                (delete t[e], W(t));
                              },
                            }),
                          ],
                        }),
                    ],
                  }),
                e &&
                  (0, D.jsx)(x.NoteLine, {
                    testKey: 'voice-sale-note',
                    note: e.note,
                    disabled: k,
                    onChange: (t) => ie({ ...e, note: t }),
                  }),
                O &&
                  (0, D.jsx)(L.MovementDate, {
                    id: 'voice-sale-date',
                    label: (0, u.L)(
                      '\u062a\u0627\u0631\u06cc\u062e \u0641\u0627\u06a9\u062a\u0648\u0631',
                    ),
                    value: V,
                    onChange: O,
                  }),
                !!q &&
                  (0, D.jsx)(j.Copy, {
                    accessibilityRole: 'alert',
                    style: { fontSize: 12, lineHeight: 20, color: U.danger },
                    children: q,
                  }),
              ],
            }),
            (0, D.jsx)(n.default, {
              style: {
                borderTopWidth: s.default.hairlineWidth,
                borderColor: U.line,
              },
              children: M,
            }),
            B &&
              (0, D.jsx)(n.default, {
                style: {
                  padding: 12,
                  borderTopWidth: s.default.hairlineWidth,
                  borderColor: U.line,
                },
                children: (0, D.jsx)(j.Button, {
                  testID: 'voice-sale-invoice',
                  secondary: !0,
                  disabled: k || H,
                  onPress: B,
                  children: (0, u.L)(
                    '\u062b\u0628\u062a \u0648 \u0635\u062f\u0648\u0631 \u0641\u0627\u06a9\u062a\u0648\u0631',
                  ),
                }),
              }),
            e &&
              (0, D.jsxs)(v.Sheet, {
                visible: E,
                title: p.voiceFa.person,
                onClose: () => K(!1),
                children: [
                  (0, D.jsx)(j.Input, {
                    testID: 'voice-sale-customer',
                    accessibilityLabel: (0, u.L)(
                      '\u0646\u0627\u0645 \u0634\u062e\u0635',
                    ),
                    placeholder: (0, u.L)(
                      '\u0646\u0627\u0645 \u0634\u062e\u0635',
                    ),
                    value: e.customerName || '',
                    maxLength: 100,
                    editable: !k,
                    onChangeText: (t) => {
                      (R?.(void 0), ie({ ...e, customerName: t }), J(t));
                    },
                  }),
                  (0, D.jsx)(c.ScrollView, {
                    nestedScrollEnabled: !0,
                    style: { maxHeight: 320 },
                    keyboardShouldPersistTaps: 'handled',
                    children: oe.map((t) =>
                      (0, D.jsx)(
                        l.default,
                        {
                          accessibilityRole: 'button',
                          disabled: k,
                          style: { padding: 12 },
                          onPress: () => {
                            (R?.(t), ie({ ...e, customerName: t.name }), K(!1));
                          },
                          children: (0, D.jsx)(j.Copy, { children: t.name }),
                        },
                        t.id,
                      ),
                    ),
                  }),
                  (0, D.jsx)(j.Button, {
                    testID: 'voice-sale-pick-done',
                    onPress: () => K(!1),
                    children: p.voiceFa.doneEdit,
                  }),
                ],
              }),
          ],
        });
      }));
    var t = r(d[0]),
      o = r(d[1]),
      l = e(r(d[2])),
      s = e(r(d[3])),
      n = e(r(d[4])),
      c = r(d[5]),
      u = r(d[6]),
      h = r(d[7]),
      y = r(d[8]),
      p = r(d[9]),
      x = r(d[10]),
      f = r(d[11]),
      b = r(d[12]),
      j = r(d[13]),
      v = r(d[14]),
      C = r(d[15]),
      L = r(d[16]),
      S = r(d[17]),
      D = r(d[18]);
  },
  798,
  [
    614, 2, 232, 17, 99, 380, 311, 435, 529, 692, 794, 788, 382, 407, 539, 619,
    691, 627, 338,
  ],
);
