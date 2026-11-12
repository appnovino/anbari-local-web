// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 893; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PaymentSheet = function ({
        shop: e,
        contact: l,
        direction: k,
        onDone: D,
        onCancel: T,
        bare: q = !1,
        details: P = !1,
        initial: w,
        afterSave: L,
        frame: _,
      }) {
        const { colors: V } = (0, h.useTheme)(),
          [H, M] = (0, n.useState)(k),
          [N, z] = (0, n.useState)(l ? { contact: l } : {}),
          [A, O] = (0, n.useState)(w?.method || 'cash'),
          [K, R] = (0, n.useState)(w?.amountToman ? String(w.amountToman) : ''),
          [U, B] = (0, n.useState)(() => (0, x.todayParts)()),
          [J, W] = (0, n.useState)(''),
          [E, G] = (0, n.useState)(''),
          [Q, X] = (0, n.useState)(''),
          [Y, Z] = (0, n.useState)(''),
          [$, ee] = (0, n.useState)({}),
          te = (0, x.parseToman)(K),
          [ae, ne] = (0, n.useState)(() => (0, x.todayParts)()),
          [le, oe] = (0, n.useState)(w?.note || '');
        const se = (0, I.jsxs)(o.default, {
            style: { flexDirection: 'row-reverse', gap: 8 },
            children: [
              (0, I.jsx)(p.SmallKey, {
                grow: !0,
                testID: 'payment-save',
                kind: 'primary',
                label: f.ledgerFa.save,
                onPress: async function () {
                  if (!Number.isSafeInteger(te) || te <= 0)
                    Z(f.ledgerFa.invalidAmount);
                  else if (N.contact || N.newName) {
                    Z('');
                    try {
                      const t = await (0, p.resolvePick)(
                        e,
                        N,
                        'in' === H ? 'customer' : 'supplier',
                      );
                      z({ contact: t });
                      const n =
                          P && 'cheque' !== A
                            ? (0, F.dayToOccurredAt)(
                                (0, x.partsToIso)(ae),
                                (0, x.partsToIso)((0, x.todayParts)()),
                              )
                            : void 0,
                        l = await (0, y.recordPayment)(e, {
                          contactId: t.id,
                          direction: H,
                          method: A,
                          amountToman: te,
                          ...('cheque' === A
                            ? {
                                cheque: {
                                  dueDate: (0, x.partsToIso)(U),
                                  number: J.trim() || void 0,
                                  bank: E.trim() || void 0,
                                  payee: Q.trim() || void 0,
                                },
                              }
                            : {}),
                          ...(P && le.trim() ? { note: le.trim() } : {}),
                          ...(n ? { occurredAt: n } : {}),
                        });
                      if ('cheque' === A && l.cheque && ($.front || $.back)) {
                        const t = (0, S.photoSaveNote)(
                          await (0, S.attachChequePhotos)(e, l.cheque.id, {
                            front: $.front?.dataUrl,
                            back: $.back?.dataUrl,
                          }),
                        );
                        t && (0, j.showToast)(t);
                      }
                      if (L)
                        try {
                          await L();
                        } catch (e) {
                          (0, j.showToast)(
                            (0, v.L)(
                              '\u062b\u0628\u062a \u0634\u062f\u060c \u0648\u0644\u06cc \u0631\u062f\u06cc\u0641 \u0642\u0628\u0644\u06cc \u062d\u0630\u0641 \u0646\u0634\u062f: {reason}',
                              { reason: (0, s.message)(e) },
                            ),
                          );
                        }
                      D();
                    } catch (e) {
                      Z(
                        e instanceof p.ContactProblem
                          ? e.message
                          : (0, s.message)(e),
                      );
                    }
                  } else Z(p.kitFa.chooseContact);
                },
              }),
              (0, I.jsx)(p.SmallKey, {
                grow: !0,
                label: f.ledgerFa.cancel,
                onPress: T,
              }),
            ],
          }),
          ie = (0, I.jsxs)(o.default, {
            testID: 'payment-sheet',
            style: { gap: 12 },
            children: [
              !q &&
                (0, I.jsxs)(u.Copy, {
                  style: { fontSize: 16, fontFamily: 'Vazirmatn_600SemiBold' },
                  children: [
                    'in' === H ? f.ledgerFa.receiveMoney : f.ledgerFa.payMoney,
                    '\u060c ',
                    l?.name,
                  ],
                }),
              !l &&
                (0, I.jsxs)(I.Fragment, {
                  children: [
                    (0, I.jsx)(u.Segmented, {
                      value: H,
                      onChange: M,
                      items: [
                        {
                          value: 'in',
                          label: p.kitFa.receiveShort,
                          testID: 'payment-direction-in',
                        },
                        {
                          value: 'out',
                          label: p.kitFa.payShort,
                          testID: 'payment-direction-out',
                        },
                      ],
                    }),
                    (0, I.jsx)(p.Field, {
                      label: p.kitFa.contactLabel,
                      children: (0, I.jsx)(p.ContactPicker, {
                        testID: 'payment-contact',
                        shop: e,
                        value: N,
                        onChange: z,
                      }),
                    }),
                  ],
                }),
              (0, I.jsx)(u.Segmented, {
                value: A,
                onChange: O,
                items: ['cash', 'card', 'cheque'].map((e) => ({
                  value: e,
                  label: f.ledgerFa.methods[e],
                })),
              }),
              (0, I.jsx)(o.default, {
                style: P
                  ? { width: '100%', maxWidth: 360, alignSelf: 'flex-end' }
                  : void 0,
                children: (0, I.jsx)(p.Field, {
                  label: p.kitFa.amountLabel,
                  children: (0, I.jsx)(t.MoneyInput, {
                    testID: 'payment-amount',
                    value: K,
                    onChange: R,
                    style: { minHeight: 44, paddingVertical: 8 },
                  }),
                }),
              }),
              P &&
                'cheque' !== A &&
                (0, I.jsx)(C.DayLine, {
                  id: 'payment-day',
                  value: ae,
                  onChange: ne,
                }),
              P &&
                (0, I.jsx)(u.Input, {
                  testID: 'payment-note',
                  value: le,
                  onChangeText: oe,
                  placeholder: p.kitFa.noteLabel,
                  maxLength: 500,
                  style: { minHeight: 44, paddingVertical: 8 },
                }),
              'cheque' === A &&
                (0, I.jsxs)(I.Fragment, {
                  children: [
                    (0, I.jsx)(p.Field, {
                      label: f.ledgerFa.chequeDue,
                      children: (0, I.jsx)(c.JalaliDateField, {
                        id: 'payment-due',
                        dateOnly: !0,
                        value: U,
                        onChange: (e) => B(e),
                      }),
                    }),
                    (0, I.jsxs)(o.default, {
                      style: { flexDirection: 'row-reverse', gap: 8 },
                      children: [
                        (0, I.jsx)(o.default, {
                          style: { flex: 1 },
                          children: (0, I.jsx)(u.Input, {
                            value: J,
                            onChangeText: W,
                            placeholder: f.ledgerFa.chequeNumber,
                            maxLength: 80,
                            style: { minHeight: 44, paddingVertical: 8 },
                          }),
                        }),
                        (0, I.jsx)(o.default, {
                          style: { flex: 1 },
                          children: (0, I.jsx)(u.Input, {
                            value: E,
                            onChangeText: G,
                            placeholder: f.ledgerFa.bank,
                            maxLength: 100,
                            style: { minHeight: 44, paddingVertical: 8 },
                          }),
                        }),
                      ],
                    }),
                    (0, I.jsx)(u.Input, {
                      testID: 'payment-payee',
                      value: Q,
                      onChangeText: X,
                      placeholder: (0, v.L)(
                        '\u0628\u0647 \u0646\u0627\u0645 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                      ),
                      maxLength: 100,
                      style: { minHeight: 44, paddingVertical: 8 },
                    }),
                    (0, I.jsx)(p.Field, {
                      label: (0, v.L)(
                        '\u0627\u0641\u0632\u0648\u062f\u0646 \u062a\u0635\u0648\u06cc\u0631 \u0686\u06a9',
                      ),
                      children: (0, I.jsx)(b.ChequePhotosField, {
                        testID: 'payment-cheque-photo',
                        value: {
                          ...($.front ? { front: { uri: $.front.uri } } : {}),
                          ...($.back ? { back: { uri: $.back.uri } } : {}),
                        },
                        onPick: (e, t) => ee((n) => ({ ...n, [e]: t })),
                        onRemove: (e) =>
                          ee((t) => {
                            const n = { ...t };
                            return (delete n[e], n);
                          }),
                      }),
                    }),
                  ],
                }),
              !!Y &&
                (0, I.jsx)(u.Copy, {
                  accessibilityRole: 'alert',
                  style: { fontSize: 13, color: V.danger },
                  children: Y,
                }),
              !_ && se,
            ],
          });
        return _
          ? _(ie, se)
          : q
            ? ie
            : (0, I.jsx)(u.Card, { style: { padding: 14 }, children: ie });
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      l = r(d[2]),
      o = (e = l) && e.__esModule ? e : { default: e },
      s = r(d[3]),
      c = r(d[4]),
      u = r(d[5]),
      h = r(d[6]),
      y = r(d[7]),
      p = r(d[8]),
      x = r(d[9]),
      f = r(d[10]),
      v = r(d[11]),
      j = r(d[12]),
      b = r(d[13]),
      S = r(d[14]),
      F = r(d[15]),
      C = r(d[16]),
      I = r(d[17]);
  },
  893,
  [
    614, 2, 99, 415, 619, 407, 382, 519, 517, 529, 580, 311, 525, 627, 654, 890,
    894, 338,
  ],
);
