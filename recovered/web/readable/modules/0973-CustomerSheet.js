// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 973; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.CustomerSheet = function ({
        shop: e,
        contacts: x,
        recent: j,
        current: v,
        needSaved: k,
        onContact: z,
        onName: I,
        onWalkIn: T,
        onCanSave: _,
        onClose: w,
        role: D = 'customer',
      }) {
        const { colors: P } = (0, f.useTheme)(),
          [W, R] = (0, t.useState)(''),
          [V, K] = (0, t.useState)(''),
          [M, O] = (0, t.useState)(!1),
          [B, H] = (0, t.useState)(!1),
          [N, $] = (0, t.useState)(''),
          A = 'supplier' === D,
          E = (0, S.partyContacts)(x, D),
          F = W.trim(),
          q = (0, S.customerChoices)(E, j, F),
          G =
            !!F &&
            E.some(
              (e) =>
                !e.archivedAt &&
                (0, b.contactKey)(e.name) === (0, b.contactKey)(F),
            ),
          J = new Set(
            E.filter(
              (e) => (0, l.sameNameContacts)(e.name, E, e.id).length > 0,
            ).map((e) => e.id),
          );
        async function Q() {
          if (F && !B && _()) {
            (H(!0), $(''));
            try {
              const t = V.trim() || void 0,
                n = await (0, L.contactSaveProblem)(e, F, t);
              if (n) return (O(!0), void $(n));
              z(
                (
                  await (0, y.createContact)(e, {
                    name: F,
                    kind: D,
                    ...(t ? { phone: t } : {}),
                  })
                ).contact,
                !0,
              );
            } catch (e) {
              $((0, p.message)(e));
            } finally {
              H(!1);
            }
          }
        }
        const U = (e, t, c, s, i = {}) =>
            (0, C.jsxs)(
              n.default,
              {
                testID: s,
                accessibilityRole: 'button',
                onPress: c,
                style: ({ pressed: e }) => ({
                  minHeight: 48,
                  paddingHorizontal: 12,
                  paddingVertical: 6,
                  justifyContent: 'center',
                  gap: 1,
                  backgroundColor: e ? P.soft : P.surface,
                  borderTopWidth: i.first ? 0 : o.default.hairlineWidth,
                  borderColor: P.line,
                }),
                children: [
                  (0, C.jsx)(h.Copy, {
                    numberOfLines: 1,
                    style: {
                      fontSize: 14,
                      color: i.accent ? P.accent : P.text,
                      fontFamily: i.accent
                        ? 'Vazirmatn_600SemiBold'
                        : 'Vazirmatn_400Regular',
                    },
                    children: t,
                  }),
                  !!i.sub &&
                    (0, C.jsx)(h.Copy, {
                      numberOfLines: 1,
                      style: { fontSize: 11, color: P.muted },
                      children: i.sub,
                    }),
                ],
              },
              e,
            ),
          X = [
            ...(!F && v
              ? [
                  U(
                    'walk-in',
                    A
                      ? (0, i.L)(
                          '\u0628\u062f\u0648\u0646 \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u0646\u062f\u0647',
                        )
                      : (0, i.L)(
                          '\u0645\u0634\u062a\u0631\u06cc \u062d\u0636\u0648\u0631\u06cc (\u0628\u062f\u0648\u0646 \u0646\u0627\u0645)',
                        ),
                    T,
                    'customer-walk-in',
                    { first: !0 },
                  ),
                ]
              : []),
            ...q.map((e, t) =>
              'contact' === e.kind
                ? U(
                    e.contact.id,
                    J.has(e.contact.id)
                      ? `${e.contact.name} \xb7 ${(0, l.maskPhone)(e.contact.phone) || (0, i.L)('\u0628\u062f\u0648\u0646 \u0634\u0645\u0627\u0631\u0647')}`
                      : e.contact.name,
                    () => z(e.contact),
                    'customer-contact-' + e.contact.id,
                    {
                      sub: [
                        e.recent ? (0, i.L)('\u0627\u062e\u06cc\u0631') : '',
                        e.contact.favorite
                          ? (0, i.L)('\u0647\u0645\u06cc\u0634\u06af\u06cc')
                          : '',
                        (e.contact.balanceToman || 0) > 0
                          ? (0, i.L)('\u0628\u062f\u0647\u06a9\u0627\u0631')
                          : '',
                      ]
                        .filter(Boolean)
                        .join(' \xb7 '),
                      first: !(t || (!F && v)),
                    },
                  )
                : U(
                    'n:' + e.name,
                    e.name,
                    () => I(e.name),
                    'customer-recent-' + t,
                    {
                      sub: (0, i.L)(
                        '\u0627\u062e\u06cc\u0631 \xb7 \u0641\u0642\u0637 \u0631\u0648\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631',
                      ),
                      first: !(t || (!F && v)),
                    },
                  ),
            ),
            ...(!F || G || k
              ? []
              : [
                  U(
                    'typed',
                    (0, i.L)(
                      '\xab{name}\xbb \u0641\u0642\u0637 \u0631\u0648\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631',
                      { name: F },
                    ),
                    () => I(F),
                    'customer-name-only',
                    { accent: !0, first: !q.length },
                  ),
                ]),
            ...(F && !G
              ? [
                  U(
                    'save',
                    B
                      ? (0, i.L)(
                          '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0641\u0632\u0648\u062f\u0646\u2026',
                        )
                      : A
                        ? (0, i.L)(
                            '+ \u0627\u0641\u0632\u0648\u062f\u0646 \xab{name}\xbb \u0628\u0647 \u0627\u0634\u062e\u0627\u0635',
                            { name: F },
                          )
                        : (0, i.L)(
                            '+ \u0627\u0641\u0632\u0648\u062f\u0646 \xab{name}\xbb \u0628\u0647 \u0645\u0634\u062a\u0631\u06cc\u200c\u0647\u0627',
                            { name: F },
                          ),
                    () => {
                      Q();
                    },
                    'customer-save',
                    {
                      accent: !0,
                      sub: A
                        ? (0, i.L)(
                            '\u0628\u0631\u0627\u06cc \u0646\u0633\u06cc\u0647 \u0648 \u0686\u06a9\u060c \u062d\u0633\u0627\u0628 \u0627\u06cc\u0646 \u0641\u0631\u0648\u0634\u0646\u062f\u0647',
                          )
                        : (0, i.L)(
                            '\u0628\u0631\u0627\u06cc \u0646\u0633\u06cc\u0647 \u0648 \u0686\u06a9\u060c \u062d\u0633\u0627\u0628 \u0627\u06cc\u0646 \u0634\u062e\u0635',
                          ),
                      first: !q.length && !!k,
                    },
                  ),
                ]
              : []),
          ];
        return (0, C.jsx)(u.Sheet, {
          visible: !0,
          title: A
            ? (0, i.L)('\u0641\u0631\u0648\u0634\u0646\u062f\u0647')
            : (0, i.L)('\u0645\u0634\u062a\u0631\u06cc'),
          onClose: w,
          children: (0, C.jsxs)(c.default, {
            testID: 'customer-sheet',
            style: { gap: 10, flexShrink: 1 },
            children: [
              !!k &&
                (0, C.jsx)(h.Copy, {
                  testID: 'customer-need',
                  style: { fontSize: 13, color: P.warning },
                  children: A
                    ? 'credit' === k
                      ? (0, i.L)(
                          '\u0628\u0631\u0627\u06cc \u0646\u0633\u06cc\u0647\u060c \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646 \u06cc\u0627 \u0627\u0633\u0645\u0634 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u0648 \u0628\u0647 \u0627\u0634\u062e\u0627\u0635 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646.',
                        )
                      : (0, i.L)(
                          '\u0628\u0631\u0627\u06cc \u0686\u06a9\u060c \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646 \u06cc\u0627 \u0627\u0633\u0645\u0634 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u0648 \u0628\u0647 \u0627\u0634\u062e\u0627\u0635 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646.',
                        )
                    : 'credit' === k
                      ? (0, i.L)(
                          '\u0628\u0631\u0627\u06cc \u0646\u0633\u06cc\u0647\u060c \u0645\u0634\u062a\u0631\u06cc \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646 \u06cc\u0627 \u0627\u0633\u0645\u0634 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u0648 \u0628\u0647 \u0645\u0634\u062a\u0631\u06cc\u200c\u0647\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646.',
                        )
                      : (0, i.L)(
                          '\u0628\u0631\u0627\u06cc \u0686\u06a9\u060c \u0645\u0634\u062a\u0631\u06cc \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646 \u06cc\u0627 \u0627\u0633\u0645\u0634 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u0648 \u0628\u0647 \u0645\u0634\u062a\u0631\u06cc\u200c\u0647\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646.',
                        ),
                }),
              (0, C.jsx)(h.Input, {
                testID: 'customer-search',
                value: W,
                maxLength: 60,
                onChangeText: (e) => {
                  (R(e), O(!1), $(''));
                },
                placeholder: A
                  ? (0, i.L)(
                      '\u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u06cc\u0627 \u062c\u0633\u062a\u200c\u0648\u062c\u0648 \u06a9\u0646',
                    )
                  : (0, i.L)(
                      '\u0646\u0627\u0645 \u0645\u0634\u062a\u0631\u06cc \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u06cc\u0627 \u062c\u0633\u062a\u200c\u0648\u062c\u0648 \u06a9\u0646',
                    ),
                returnKeyType: 'done',
                onSubmitEditing: () => {
                  const e = 1 === q.length && q[0];
                  e && 'contact' === e.kind && G
                    ? z(e.contact)
                    : F && !G && (k ? Q() : I(F));
                },
              }),
              M &&
                (0, C.jsx)(h.Input, {
                  testID: 'customer-phone',
                  value: V,
                  onChangeText: K,
                  placeholder: (0, i.L)(
                    '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644\u060c \u0645\u062b\u0644\u0627\u064b \u06f0\u06f9\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9',
                  ),
                  keyboardType: 'phone-pad',
                  inputMode: 'tel',
                  maxLength: 20,
                  ltr: !0,
                }),
              !!N &&
                (0, C.jsx)(h.Copy, {
                  accessibilityRole: 'alert',
                  style: { fontSize: 12, color: P.danger },
                  children: N,
                }),
              X.length > 0
                ? (0, C.jsx)(s.ScrollView, {
                    keyboardShouldPersistTaps: 'handled',
                    style: {
                      flexShrink: 1,
                      borderRadius: 14,
                      borderWidth: o.default.hairlineWidth,
                      borderColor: P.line,
                    },
                    children: X,
                  })
                : (0, C.jsx)(h.Copy, {
                    style: { fontSize: 12, color: P.muted },
                    children: A
                      ? (0, i.L)(
                          '\u0627\u0633\u0645 \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u062e\u0627\u0644\u06cc \u0628\u0645\u0627\u0646\u062f\u060c \u0631\u0633\u06cc\u062f \u0628\u062f\u0648\u0646 \u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0627\u0633\u062a.',
                        )
                      : (0, i.L)(
                          '\u0627\u0633\u0645 \u0645\u0634\u062a\u0631\u06cc \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u061b \u062e\u0627\u0644\u06cc \u0628\u0645\u0627\u0646\u062f\u060c \u0641\u0627\u06a9\u062a\u0648\u0631 \xab\u0645\u0634\u062a\u0631\u06cc \u062d\u0636\u0648\u0631\u06cc\xbb \u0627\u0633\u062a.',
                        ),
                  }),
            ],
          }),
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      c = e(r(d[3])),
      s = r(d[4]),
      i = r(d[5]),
      l = r(d[6]),
      u = r(d[7]),
      h = r(d[8]),
      f = r(d[9]),
      p = r(d[10]),
      y = r(d[11]),
      L = r(d[12]),
      b = r(d[13]),
      S = r(d[14]),
      C = r(d[15]);
  },
  973,
  [2, 232, 17, 99, 380, 311, 438, 539, 407, 382, 415, 519, 526, 529, 464, 338],
);
