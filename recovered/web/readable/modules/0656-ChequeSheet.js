// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 656; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ChequeSheet = function ({
        shop: e,
        visible: l,
        contact: D,
        direction: L = 'in',
        onClose: P,
        onDone: T,
      }) {
        const { colors: w } = (0, f.useTheme)(),
          [N, H] = (0, o.useState)(L),
          [V, _] = (0, o.useState)(D ? { contact: D } : {}),
          [O, U] = (0, o.useState)(''),
          [z, A] = (0, o.useState)(() => (0, S.todayParts)()),
          [M, R] = (0, o.useState)(''),
          [K, B] = (0, o.useState)(''),
          [E, J] = (0, o.useState)(''),
          [G, Q] = (0, o.useState)(''),
          [W, X] = (0, o.useState)(''),
          [Y, Z] = (0, o.useState)({}),
          [$, ee] = (0, o.useState)(!1),
          [te, ae] = (0, o.useState)('');
        (0, o.useEffect)(() => {
          l &&
            (H(L),
            _(D ? { contact: D } : {}),
            U(''),
            A((0, S.todayParts)()),
            R(''),
            B(''),
            J(''),
            Q(''),
            X(''),
            Z({}),
            ee(!1),
            ae(''));
        }, [l]);
        const ne = (0, S.parseToman)(O),
          ie =
            Number.isSafeInteger(ne) &&
            ne > 0 &&
            !(!V.contact && !V.newName) &&
            !$;
        async function oe(e) {
          if (n.AI_PHOTOS) {
            (ae(''), ee(!0));
            try {
              const t = (0, C.validateVoiceResult)(
                  await (0, u.job)(
                    'image',
                    {
                      image: e.dataUrl.slice(e.dataUrl.indexOf(',') + 1),
                      mimeType: 'image/jpeg',
                      purpose: 'cheque',
                      caption:
                        'in' === N
                          ? '\u0686\u06a9 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc'
                          : '\u0686\u06a9 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc',
                      products: [],
                    },
                    AbortSignal.timeout(12e4),
                  ),
                ),
                n = t.ledger?.find((e) => 'cheque' === e.type);
              if (n) {
                if ((n.amount && U(String(n.amount)), n.dueDate))
                  try {
                    A((0, S.isoToParts)(n.dueDate));
                  } catch {}
                (n.chequeNumber && R(n.chequeNumber.slice(0, 80)),
                  n.bank && B(n.bank.slice(0, 100)),
                  !D &&
                    n.contactName &&
                    '\u0646\u0627\u0645\u0634\u062e\u0635' !== n.contactName &&
                    _({ newName: n.contactName.slice(0, 100) }),
                  ae(
                    (0, F.L)(
                      '\u0627\u0632 \u0631\u0648\u06cc \u0639\u06a9\u0633 \u062e\u0648\u0627\u0646\u062f\u0647 \u0634\u062f\u061b \u0647\u0631 \u062e\u0627\u0646\u0647 \u0631\u0627 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646 \u0648 \u0627\u06af\u0631 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a \u062f\u0631\u0633\u062a \u06a9\u0646.',
                    ),
                  ));
              } else
                ae(
                  (0, F.L)(
                    '\u0686\u06a9 \u0627\u0632 \u0631\u0648\u06cc \u0639\u06a9\u0633 \u062e\u0648\u0627\u0646\u062f\u0647 \u0646\u0634\u062f\u061b \u062e\u0627\u0646\u0647\u200c\u0647\u0627 \u0631\u0627 \u062e\u0648\u062f\u062a \u067e\u0631 \u06a9\u0646. \u0639\u06a9\u0633 \u06a9\u0646\u0627\u0631 \u0686\u06a9 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
                  ),
                );
            } catch (e) {
              ae(
                (0, F.L)(
                  '\u062e\u0648\u0627\u0646\u062f\u0646 \u0639\u06a9\u0633 \u0645\u0645\u06a9\u0646 \u0646\u0634\u062f ({reason})\u061b \u062e\u0627\u0646\u0647\u200c\u0647\u0627 \u0631\u0627 \u062e\u0648\u062f\u062a \u067e\u0631 \u06a9\u0646. \u0639\u06a9\u0633 \u06a9\u0646\u0627\u0631 \u0686\u06a9 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
                  { reason: (0, u.message)(e) },
                ),
              );
            } finally {
              ee(!1);
            }
          }
        }
        async function le() {
          if (V.contact || V.newName)
            if (!Number.isSafeInteger(ne) || ne <= 0)
              X(k.ledgerFa.invalidAmount);
            else {
              X('');
              try {
                const t = await (0, j.resolvePick)(
                  e,
                  V,
                  'in' === N ? 'customer' : 'supplier',
                );
                _({ contact: t });
                const n = await (0, y.recordPayment)(e, {
                  contactId: t.id,
                  direction: N,
                  method: 'cheque',
                  amountToman: ne,
                  cheque: {
                    dueDate: (0, S.partsToIso)(z),
                    number: M.trim() || void 0,
                    bank: K.trim() || void 0,
                    payee: E.trim() || void 0,
                  },
                  ...(G.trim() ? { note: G.trim() } : {}),
                });
                if (n.cheque && (Y.front || Y.back)) {
                  const t = await (0, v.attachChequePhotos)(e, n.cheque.id, {
                      front: Y.front?.dataUrl,
                      back: Y.back?.dataUrl,
                    }),
                    o = (0, v.photoSaveNote)(t);
                  o && (0, p.showToast)(o);
                }
                T();
              } catch (e) {
                X(
                  e instanceof j.ContactProblem ? e.message : (0, u.message)(e),
                );
              }
            }
          else X(j.kitFa.chooseContact);
        }
        return (0, I.jsx)(h.Sheet, {
          visible: l,
          title: j.kitFa.newCheque,
          onClose: P,
          onSubmit: () => {
            ie && le();
          },
          footer: (0, I.jsx)(j.SmallKey, {
            testID: 'cheque-save',
            kind: 'primary',
            icon: 'check',
            label: j.kitFa.newCheque,
            disabled: !ie,
            onPress: le,
          }),
          children: (0, I.jsxs)(c.KeyboardScrollView, {
            testID: 'cheque-sheet',
            keyboardShouldPersistTaps: 'handled',
            contentContainerStyle: { gap: 12, paddingBottom: 8 },
            children: [
              (0, I.jsx)(b.Segmented, {
                value: N,
                onChange: H,
                items: [
                  {
                    value: 'in',
                    label: j.kitFa.received,
                    testID: 'cheque-direction-in',
                  },
                  {
                    value: 'out',
                    label: j.kitFa.paid,
                    testID: 'cheque-direction-out',
                  },
                ],
              }),
              (0, I.jsx)(j.Field, {
                label: (0, F.L)(
                  '\u0627\u0641\u0632\u0648\u062f\u0646 \u062a\u0635\u0648\u06cc\u0631 \u0686\u06a9',
                ),
                children: (0, I.jsx)(q.ChequePhotosField, {
                  testID: 'cheque-photo',
                  value: {
                    ...(Y.front ? { front: { uri: Y.front.uri } } : {}),
                    ...(Y.back ? { back: { uri: Y.back.uri } } : {}),
                  },
                  onPick: (e, t) => {
                    (Z((n) => ({ ...n, [e]: t })), 'front' === e && oe(t));
                  },
                  onRemove: (e) =>
                    Z((t) => {
                      const n = { ...t };
                      return (delete n[e], n);
                    }),
                }),
              }),
              $ &&
                (0, I.jsx)(b.Copy, {
                  testID: 'cheque-reading',
                  style: { fontSize: 12.5, color: w.muted },
                  children: (0, F.L)(
                    '\u062f\u0631 \u062d\u0627\u0644 \u062e\u0648\u0627\u0646\u062f\u0646 \u0686\u06a9\u2026',
                  ),
                }),
              !!te &&
                (0, I.jsx)(b.Copy, {
                  testID: 'cheque-read-note',
                  style: { fontSize: 12.5, lineHeight: 21, color: w.muted },
                  children: te,
                }),
              (0, I.jsx)(j.Field, {
                label: j.kitFa.contactLabel,
                children: (0, I.jsx)(j.ContactPicker, {
                  testID: 'cheque-contact',
                  shop: e,
                  value: V,
                  onChange: _,
                }),
              }),
              (0, I.jsx)(j.Field, {
                label: j.kitFa.amountLabel,
                children: (0, I.jsx)(t.MoneyInput, {
                  testID: 'cheque-amount',
                  value: O,
                  onChange: U,
                  style: { minHeight: 44, paddingVertical: 8 },
                }),
              }),
              (0, I.jsx)(j.Field, {
                label: j.kitFa.dueLabel,
                children: (0, I.jsx)(x.JalaliDateField, {
                  id: 'cheque-due',
                  dateOnly: !0,
                  value: z,
                  onChange: (e) => A(e),
                }),
              }),
              (0, I.jsxs)(s.default, {
                style: { flexDirection: 'row-reverse', gap: 8 },
                children: [
                  (0, I.jsx)(s.default, {
                    style: { flex: 1 },
                    children: (0, I.jsx)(j.Field, {
                      label: j.kitFa.numberLabel,
                      children: (0, I.jsx)(b.Input, {
                        testID: 'cheque-number',
                        value: M,
                        onChangeText: R,
                        maxLength: 80,
                        style: { minHeight: 44, paddingVertical: 8 },
                      }),
                    }),
                  }),
                  (0, I.jsx)(s.default, {
                    style: { flex: 1 },
                    children: (0, I.jsx)(j.Field, {
                      label: j.kitFa.bankLabel,
                      children: (0, I.jsx)(b.Input, {
                        testID: 'cheque-bank',
                        value: K,
                        onChangeText: B,
                        maxLength: 100,
                        style: { minHeight: 44, paddingVertical: 8 },
                      }),
                    }),
                  }),
                ],
              }),
              (0, I.jsx)(j.Field, {
                label: (0, F.L)(
                  '\u0628\u0647 \u0646\u0627\u0645 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                ),
                children: (0, I.jsx)(b.Input, {
                  testID: 'cheque-payee',
                  value: E,
                  onChangeText: J,
                  maxLength: 100,
                  placeholder: (0, F.L)(
                    '\u0645\u062b\u0644\u0627\u064b \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u06cc\u0627 \u0627\u0633\u0645 \u0634\u0645\u0627',
                  ),
                  style: { minHeight: 44, paddingVertical: 8 },
                }),
              }),
              (0, I.jsx)(j.Field, {
                label: j.kitFa.noteLabel,
                children: (0, I.jsx)(b.Input, {
                  value: G,
                  onChangeText: Q,
                  maxLength: 500,
                  style: { minHeight: 44, paddingVertical: 8 },
                }),
              }),
              !!W &&
                (0, I.jsx)(b.Copy, {
                  accessibilityRole: 'alert',
                  style: { fontSize: 13, color: w.danger },
                  children: W,
                }),
            ],
          }),
        });
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]),
      l = r(d[3]),
      s = (e = l) && e.__esModule ? e : { default: e },
      c = r(d[4]),
      u = r(d[5]),
      h = r(d[6]),
      b = r(d[7]),
      p = r(d[8]),
      x = r(d[9]),
      f = r(d[10]),
      y = r(d[11]),
      j = r(d[12]),
      S = r(d[13]),
      k = r(d[14]),
      q = r(d[15]),
      v = r(d[16]),
      C = r(d[17]),
      F = r(d[18]),
      I = r(d[19]);
  },
  656,
  [
    614, 494, 2, 99, 480, 415, 539, 407, 525, 619, 382, 519, 517, 529, 580, 627,
    654, 465, 311, 338,
  ],
);
