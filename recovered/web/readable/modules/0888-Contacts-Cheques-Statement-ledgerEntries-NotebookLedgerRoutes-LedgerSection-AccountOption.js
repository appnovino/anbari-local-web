// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 888; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'Contacts', {
        enumerable: !0,
        get: function () {
          return j.Contacts;
        },
      }),
      Object.defineProperty(_e, 'Cheques', {
        enumerable: !0,
        get: function () {
          return C.Cheques;
        },
      }),
      Object.defineProperty(_e, 'Statement', {
        enumerable: !0,
        get: function () {
          return w.Statement;
        },
      }),
      Object.defineProperty(_e, 'ledgerEntries', {
        enumerable: !0,
        get: function () {
          return z.ledgerEntries;
        },
      }),
      (_e.NotebookLedgerRoutes = function ({
        shop: e,
        planId: t,
        ledger: s = !1,
        onUpgrade: l,
        clubLocked: c = !1,
      }) {
        const { colors: y } = (0, b.useTheme)(),
          j = (0, p.useSafeInsets)(),
          [w, L] = (0, n.useState)(null),
          P = (0, d.useDesktop)();
        ((0, n.useEffect)(() => z.ledgerEntries.subscribe(L), []),
          (0, n.useEffect)(() => {
            e || z.ledgerEntries.close();
          }, [e?.id]));
        const E = 'staff' === w?.screen;
        if (
          ((0, n.useEffect)(() => {
            w &&
              !E &&
              e &&
              !(0, v.ledgerScreensOpen)(t, s) &&
              (z.ledgerEntries.close(),
              l(
                (0, q.L)(
                  '\u062f\u0641\u062a\u0631 \u062d\u0633\u0627\u0628 \u0648 \u0686\u06a9\u200c\u0647\u0627 \u062f\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9 \xab\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f\xbb \u0648 \xab\u067e\u0644\u0627\u0633\xbb \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0627\u0633\u062a.',
                ),
              ));
          }, [w, E, e?.id, t, s, l]),
          !w || !e)
        )
          return null;
        if (!E && !(0, v.ledgerScreensOpen)(t, s)) return null;
        const B =
            'cheques' === w.screen
              ? D.ledgerFa.cheques
              : 'staff' === w.screen
                ? (0, q.L)('\u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646')
                : 'club' === w.screen
                  ? (0, q.L)(
                      '\u0628\u0627\u0634\u06af\u0627\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646',
                    )
                  : k.kitFa.accounts,
          R = P && ('contacts' === w.screen || 'contact' === w.screen),
          W =
            P && (R || 'cheques' === w.screen) ? V : (0, u.pageColumnWidth)(P),
          H = P ? 28 : 14,
          _ = (e) =>
            z.ledgerEntries.open({
              screen: 'contacts',
              ...(e && 'all' !== e ? { filter: e } : {}),
            });
        return (0, M.jsx)(a.PageModal, {
          visible: !0,
          animationType: 'slide',
          onRequestClose: () => {
            const e = (0, z.swipeBackRoute)(w, R);
            e ? z.ledgerEntries.open(e) : z.ledgerEntries.close();
          },
          desk: {
            id:
              'cheques' === w.screen
                ? 'cheques'
                : 'staff' === w.screen
                  ? 'staff'
                  : 'ledger',
            title: B,
          },
          children: (0, M.jsxs)(o.default, {
            behavior: f.keyboardBehavior,
            style: { flex: 1, backgroundColor: y.bg },
            children: [
              (0, O.demoActive)() &&
                (0, M.jsx)(i.default, {
                  style: { paddingHorizontal: H, paddingTop: j.top + 10 },
                  children: (0, M.jsx)(F.DemoBanner, {}),
                }),
              (0, M.jsxs)(i.default, {
                style: [
                  x.common.between,
                  {
                    paddingHorizontal: H,
                    paddingTop: (0, O.demoActive)()
                      ? 10
                      : j.top + (P ? 24 : 14),
                    width: '100%',
                    maxWidth: W,
                    alignSelf: 'center',
                  },
                ],
                children: [
                  (0, M.jsx)(x.Copy, {
                    style: {
                      fontSize: 20,
                      lineHeight: 30,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: B,
                  }),
                  (0, M.jsx)(h.PageClose, {
                    testID: 'ledger-close',
                    title: B,
                    onPress: () => z.ledgerEntries.close(),
                  }),
                ],
              }),
              R
                ? (0, M.jsx)(A, { shop: e, route: w })
                : (0, M.jsxs)(f.KeyboardScrollView, {
                    contentContainerStyle: {
                      width: '100%',
                      maxWidth: W,
                      alignSelf: 'center',
                      padding: H,
                      paddingTop: 14,
                      paddingBottom: j.bottom + 40,
                    },
                    children: [
                      'contacts' === w.screen &&
                        (0, M.jsx)(
                          U,
                          {
                            shop: e,
                            allowed: !0,
                            initialSearch: w.q,
                            initialFilter: w.filter,
                            onContact: (e, t) =>
                              z.ledgerEntries.open({
                                screen: 'contact',
                                contactId: e.id,
                                ...('all' !== t ? { filter: t } : {}),
                              }),
                          },
                          (w.q || '') + ':' + (w.filter || ''),
                        ),
                      ' ',
                      'contact' === w.screen &&
                        w.contactId &&
                        (0, M.jsx)(
                          S.ContactPage,
                          {
                            shop: e,
                            contactId: w.contactId,
                            openStatement: !!w.statement,
                            onBack: () =>
                              'cheques' === w.from
                                ? z.ledgerEntries.open({ screen: 'cheques' })
                                : 'club' === w.from
                                  ? z.ledgerEntries.open({ screen: 'club' })
                                  : _(w.filter),
                          },
                          w.contactId,
                        ),
                      ' ',
                      'club' === w.screen &&
                        (0, M.jsxs)(i.default, {
                          testID: 'club-page',
                          style: { gap: 10 },
                          children: [
                            (0, M.jsx)(i.default, {
                              style: { flexDirection: 'row-reverse' },
                              children: (0, M.jsx)(k.SmallKey, {
                                kind: 'text',
                                icon: 'arrow',
                                label: (0, q.L)(
                                  '\u0628\u0627\u0632\u06af\u0634\u062a',
                                ),
                                onPress: () => _(),
                              }),
                            }),
                            (0, M.jsx)(T.CustomerClub, {
                              shop: e,
                              locked: c,
                              memberId: w.contactId,
                              onMember: (e) =>
                                z.ledgerEntries.open(
                                  e
                                    ? { screen: 'club', contactId: e }
                                    : { screen: 'club' },
                                ),
                              onPlans: () => {
                                (z.ledgerEntries.close(),
                                  l((0, q.L)(K.CLUB_LOCK_LINE)));
                              },
                            }),
                          ],
                        }),
                      ' ',
                      'cheques' === w.screen &&
                        (0, M.jsxs)(i.default, {
                          style: { gap: 10 },
                          children: [
                            (0, M.jsx)(k.ReadOnlyNote, {}),
                            (0, M.jsx)(C.Cheques, {
                              shop: e,
                              onBack: () => _(),
                            }),
                          ],
                        }),
                      ' ',
                      'staff' === w.screen &&
                        (0, M.jsx)(I.StaffPage, {
                          shop: e,
                          route: w,
                          onUpgrade: (e) => {
                            (z.ledgerEntries.close(), l(e));
                          },
                        }),
                    ],
                  }),
            ],
          }),
        });
      }),
      (_e.LedgerSection = U),
      (_e.AccountOption = function ({
        shop: e,
        contacts: t,
        value: o,
        onAccountOption: c,
      }) {
        const [a, d] = (0, n.useState)([]),
          [u, h] = (0, n.useState)(''),
          [p, f] = (0, n.useState)(''),
          [j, S] = (0, n.useState)(!1),
          [C, w] = (0, n.useState)(!1),
          [I, k] = (0, n.useState)(''),
          v = [...t, ...a.filter((e) => !t.some((t) => t.id === e.id))];
        async function P() {
          const t = u.trim();
          if (e && t) {
            (w(!0), k(''));
            try {
              const n = p.trim() || void 0,
                o = await (0, B.contactSaveProblem)(e, t, n);
              if (o) return (S(!0), void k(o));
              const s = (
                await (0, L.createContact)(e, {
                  name: t,
                  kind: 'customer',
                  ...(n ? { phone: n } : {}),
                })
              ).contact;
              (d((e) => [...e, s]), h(''), f(''), S(!1), O(s.id), _(s.id));
            } catch (e) {
              k((0, y.message)(e));
            } finally {
              w(!1);
            }
          }
        }
        const D = new Set(
            v
              .filter(
                (e) => (0, R.sameNameContacts)(e.name, v, e.id).length > 0,
              )
              .map((e) => e.id),
          ),
          { colors: E } = (0, b.useTheme)(),
          [F, O] = (0, n.useState)(o?.contactId || ''),
          [z, T] = (0, n.useState)(o?.payment.method || 'credit'),
          [H, K] = (0, n.useState)(
            o?.payment.paidToman?.toLocaleString((0, q.numberLocale)()) || '',
          );
        function _(e = F, t = z, n = H) {
          if (!e) return void c(null);
          const o = Number(
            n
              .replace(/[\u06f0-\u06f9]/g, (e) =>
                String(
                  '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                    e,
                  ),
                ),
              )
              .replace(/[\u0660-\u0669]/g, (e) =>
                String(
                  '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
                    e,
                  ),
                ),
              )
              .replace(/[,\u066c\s]/g, ''),
          );
          c({
            contactId: e,
            payment: {
              method: t,
              ...(Number.isFinite(o) && o > 0 ? { paidToman: o } : {}),
            },
          });
        }
        const N = u.trim(),
          V = v.find((e) => e.id === F),
          A =
            !!N &&
            v.some((e) => (0, W.contactKey)(e.name) === (0, W.contactKey)(N)),
          U = V
            ? []
            : (N
                ? v.filter(
                    (e) =>
                      (0, W.contactKey)(e.name).includes(
                        (0, W.contactKey)(N),
                      ) ||
                      (!!e.phone && e.phone.includes(N)),
                  )
                : v
              ).slice(0, 6),
          G = (e) => {
            (O(e), h(''), S(!1), k(''), _(e));
          };
        return (0, M.jsxs)(x.Card, {
          children: [
            (0, M.jsx)(x.Copy, {
              style: { fontFamily: 'Vazirmatn_600SemiBold' },
              children: (0, q.L)(
                '\u062b\u0628\u062a \u0631\u0648\u06cc \u062d\u0633\u0627\u0628 \u0634\u062e\u0635',
              ),
            }),
            V
              ? (0, M.jsxs)(i.default, {
                  testID: 'account-picked',
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 10,
                    padding: 10,
                    borderRadius: 14,
                    backgroundColor: E.accentSoft,
                  },
                  children: [
                    (0, M.jsxs)(i.default, {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        (0, M.jsx)(x.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 15,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: V.name,
                        }),
                        D.has(V.id) &&
                          (0, M.jsx)(x.Copy, {
                            style: { fontSize: 11, color: E.muted },
                            children:
                              (0, R.maskPhone)(V.phone) ||
                              (0, q.L)(
                                '\u0628\u062f\u0648\u0646 \u0634\u0645\u0627\u0631\u0647',
                              ),
                          }),
                      ],
                    }),
                    (0, M.jsx)(s.default, {
                      testID: 'account-change',
                      accessibilityRole: 'button',
                      onPress: () => {
                        (O(''), c(null));
                      },
                      style: {
                        minHeight: 40,
                        paddingHorizontal: 12,
                        justifyContent: 'center',
                      },
                      children: (0, M.jsx)(x.Copy, {
                        style: { fontSize: 13, color: E.accent },
                        children: (0, q.L)('\u062a\u063a\u06cc\u06cc\u0631'),
                      }),
                    }),
                  ],
                })
              : (0, M.jsxs)(i.default, {
                  style: { gap: 6 },
                  children: [
                    (0, M.jsx)(x.Input, {
                      testID: 'account-new-name',
                      value: u,
                      onChangeText: (e) => {
                        (h(e), S(!1), k(''));
                      },
                      placeholder: (0, q.L)(
                        '\u062c\u0633\u062a\u200c\u0648\u062c\u0648\u06cc \u0645\u0634\u062a\u0631\u06cc \u06cc\u0627 \u0646\u0627\u0645 \u0645\u0634\u062a\u0631\u06cc \u062c\u062f\u06cc\u062f',
                      ),
                      maxLength: 100,
                      onSubmitEditing: () => {
                        1 === U.length && A ? G(U[0].id) : N && !A && P();
                      },
                    }),
                    (0, M.jsx)(B.SameNameNotice, {
                      contacts: U,
                      onPick: (e) => G(e.id),
                    }),
                    (U.length > 0 || (!!N && !A && !!e)) &&
                      (0, M.jsxs)(i.default, {
                        style: {
                          borderRadius: 14,
                          borderWidth: l.default.hairlineWidth,
                          borderColor: E.line,
                          overflow: 'hidden',
                        },
                        children: [
                          U.map((e, t) =>
                            (0, M.jsx)(
                              s.default,
                              {
                                testID: 'account-person-' + e.id,
                                accessibilityRole: 'button',
                                onPress: () => G(e.id),
                                style: ({ pressed: e }) => ({
                                  minHeight: 46,
                                  paddingHorizontal: 12,
                                  justifyContent: 'center',
                                  backgroundColor: e ? E.soft : E.surface,
                                  borderTopWidth: t
                                    ? l.default.hairlineWidth
                                    : 0,
                                  borderColor: E.line,
                                }),
                                children: (0, M.jsx)(x.Copy, {
                                  numberOfLines: 1,
                                  style: { fontSize: 14 },
                                  children: D.has(e.id)
                                    ? `${e.name} \xb7 ${(0, R.maskPhone)(e.phone) || (0, q.L)('\u0628\u062f\u0648\u0646 \u0634\u0645\u0627\u0631\u0647')}`
                                    : e.name,
                                }),
                              },
                              e.id,
                            ),
                          ),
                          !!N &&
                            !A &&
                            !!e &&
                            (0, M.jsx)(s.default, {
                              testID: 'account-new-add',
                              accessibilityRole: 'button',
                              disabled: C,
                              onPress: () => {
                                P();
                              },
                              style: ({ pressed: e }) => ({
                                minHeight: 46,
                                paddingHorizontal: 12,
                                justifyContent: 'center',
                                backgroundColor: e ? E.soft : E.surface,
                                borderTopWidth: U.length
                                  ? l.default.hairlineWidth
                                  : 0,
                                borderColor: E.line,
                              }),
                              children: (0, M.jsx)(x.Copy, {
                                numberOfLines: 1,
                                style: { fontSize: 14, color: E.accent },
                                children: C
                                  ? (0, q.L)(
                                      '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0641\u0632\u0648\u062f\u0646\u2026',
                                    )
                                  : (0, q.L)(
                                      '+ \u0627\u0641\u0632\u0648\u062f\u0646 \xab{name}\xbb \u0628\u0647 \u0645\u0634\u062a\u0631\u06cc\u200c\u0647\u0627',
                                      { name: N },
                                    ),
                              }),
                            }),
                        ],
                      }),
                    !N &&
                      !v.length &&
                      (0, M.jsx)(x.Copy, {
                        style: { fontSize: 12, color: E.muted },
                        children: (0, q.L)(
                          '\u0647\u0646\u0648\u0632 \u0645\u0634\u062a\u0631\u06cc\u200c\u0627\u06cc \u0646\u062f\u0627\u0631\u06cc\u061b \u0627\u0633\u0645\u0634 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 \u0648 \xab\u0627\u0641\u0632\u0648\u062f\u0646\xbb \u0631\u0627 \u0628\u0632\u0646.',
                        ),
                      }),
                  ],
                }),
            !!e &&
              j &&
              (0, M.jsx)(x.Input, {
                testID: 'account-new-phone',
                value: p,
                onChangeText: f,
                placeholder: (0, q.L)(
                  '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644\u060c \u0645\u062b\u0644\u0627\u064b \u06f0\u06f9\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9',
                ),
                keyboardType: 'phone-pad',
                inputMode: 'tel',
                maxLength: 20,
                ltr: !0,
              }),
            !!I &&
              (0, M.jsx)(x.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 12, color: E.danger },
                children: I,
              }),
            !!F &&
              (0, M.jsxs)(M.Fragment, {
                children: [
                  (0, M.jsxs)(i.default, {
                    style: x.common.row,
                    children: [
                      (0, M.jsx)(x.Button, {
                        secondary: 'credit' !== z,
                        onPress: () => {
                          (T('credit'), _(F, 'credit'));
                        },
                        children: (0, q.L)('\u0646\u0633\u06cc\u0647'),
                      }),
                      (0, M.jsx)(x.Button, {
                        secondary: 'cheque' !== z,
                        onPress: () => {
                          (T('cheque'), _(F, 'cheque'));
                        },
                        children: (0, q.L)('\u0686\u06a9'),
                      }),
                    ],
                  }),
                  (0, M.jsx)(x.Copy, {
                    style: { fontSize: 12, color: E.muted },
                    children: (0, q.L)(
                      '\u0645\u0628\u0644\u063a \u067e\u0631\u062f\u0627\u062e\u062a\u200c\u0634\u062f\u0647\u0654 \u0647\u0645\u06cc\u0646 \u0644\u062d\u0638\u0647 \u0631\u0627 \u062f\u0631 \u0635\u0648\u0631\u062a \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u062e\u0634\u06cc \u0648\u0627\u0631\u062f \u06a9\u0646\u06cc\u062f.',
                    ),
                  }),
                  (0, M.jsx)($, {
                    value: H,
                    onChange: (e) => {
                      (K(e), _(F, z, e));
                    },
                  }),
                ],
              }),
          ],
        });
      }));
    var t = r(_d[0]),
      n = r(_d[1]),
      o = e(r(_d[2])),
      s = e(r(_d[3])),
      l = e(r(_d[4])),
      i = e(r(_d[5])),
      c = r(_d[6]),
      a = r(_d[7]),
      d = r(_d[8]),
      u = r(_d[9]),
      h = r(_d[10]),
      p = r(_d[11]),
      f = r(_d[12]),
      y = r(_d[13]),
      x = r(_d[14]),
      b = r(_d[15]),
      j = r(_d[16]),
      S = r(_d[17]),
      C = r(_d[18]),
      w = r(_d[19]),
      I = r(_d[20]),
      L = r(_d[21]),
      k = r(_d[22]),
      v = r(_d[23]),
      P = r(_d[24]),
      D = r(_d[25]),
      q = r(_d[26]),
      E = r(_d[27]),
      F = r(_d[28]),
      O = r(_d[29]),
      z = r(_d[30]),
      T = r(_d[31]),
      B = r(_d[32]),
      R = r(_d[33]),
      W = r(_d[34]),
      H = r(_d[35]),
      K = r(_d[36]),
      _ = r(_d[37]),
      N = r(_d[38]),
      M = r(_d[39]);
    const V = 1320;
    function A({ shop: e, route: t }) {
      const { colors: o } = (0, b.useTheme)(),
        s = (0, p.useSafeInsets)(),
        [l, a] = (0, n.useState)(null),
        d = (0, n.useRef)([]),
        u = (0, n.useRef)(t.filter || 'all'),
        h = t.contactId || l || void 0,
        f = (e) =>
          z.ledgerEntries.open({
            screen: 'contact',
            contactId: e,
            ...('all' !== u.current ? { filter: u.current } : {}),
          });
      (0, H.useDeskKeys)({
        ArrowDown: () => {
          const e = (0, N.moveSelection)(d.current, h, 1);
          e && e !== h && f(e);
        },
        ArrowUp: () => {
          const e = (0, N.moveSelection)(d.current, h, -1);
          e && e !== h && f(e);
        },
      });
      return (0, M.jsxs)(i.default, {
        testID: 'desk-accounts',
        style: {
          flex: 1,
          minHeight: 0,
          width: '100%',
          maxWidth: V,
          alignSelf: 'center',
          flexDirection: 'row-reverse',
          gap: 18,
          paddingHorizontal: 14,
          paddingTop: 10,
        },
        children: [
          (0, M.jsxs)(i.default, {
            style: { width: 390, minHeight: 0 },
            children: [
              (0, M.jsx)(c.ScrollView, {
                keyboardShouldPersistTaps: 'handled',
                contentContainerStyle: { gap: 10, paddingBottom: 12 },
                children: (0, M.jsx)(
                  U,
                  {
                    shop: e,
                    allowed: !0,
                    initialSearch: t.q,
                    initialFilter: u.current,
                    onFilter: (e) => {
                      u.current = e;
                    },
                    selectedId: h,
                    onList: (e) => {
                      ((d.current = e.map((e) => e.id)),
                        t.contactId ||
                          (l && d.current.includes(l)) ||
                          a(d.current[0] || null));
                    },
                    onContact: (e) => f(e.id),
                  },
                  t.q || '',
                ),
              }),
              (0, M.jsx)(i.default, {
                style: { paddingBottom: s.bottom + 6 },
                children: (0, M.jsx)(_.KeyHints, {
                  items: [
                    [
                      ['\u2191', '\u2193'],
                      (0, q.L)(
                        '\u062c\u0627\u0628\u0647\u200c\u062c\u0627\u06cc\u06cc \u0628\u06cc\u0646 \u0627\u0634\u062e\u0627\u0635',
                      ),
                    ],
                  ],
                }),
              }),
            ],
          }),
          (0, M.jsx)(c.ScrollView, {
            style: { flex: 1 },
            keyboardShouldPersistTaps: 'handled',
            contentContainerStyle: { paddingBottom: s.bottom + 40 },
            children: h
              ? (0, M.jsx)(
                  S.ContactPage,
                  {
                    shop: e,
                    contactId: h,
                    embedded: !0,
                    onBack: () => {
                      (a(null), z.ledgerEntries.open({ screen: 'contacts' }));
                    },
                  },
                  h,
                )
              : (0, M.jsx)(i.default, {
                  testID: 'desk-accounts-empty',
                  style: { paddingTop: 60, alignItems: 'center' },
                  children: (0, M.jsx)(x.Copy, {
                    style: { color: o.muted },
                    children: (0, q.L)(
                      '\u06cc\u06a9 \u0646\u0641\u0631 \u0631\u0627 \u0627\u0632 \u0641\u0647\u0631\u0633\u062a \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                    ),
                  }),
                }),
          }),
        ],
      });
    }
    function U({
      shop: e,
      allowed: t,
      onUpgrade: o,
      onContact: l,
      initialSearch: c,
      initialFilter: a = 'all',
      onFilter: d,
      selectedId: u,
      onList: h,
    }) {
      const { colors: p } = (0, b.useTheme)(),
        [f, y] = (0, n.useState)(a),
        S = (e) => {
          (y(e), d?.(e));
        },
        { data: C } = (0, E.useSwr)(
          t ? (0, E.scoped)(e.id, 'ledger-summary') : null,
          () => (0, L.readLedgerSummary)(e),
        );
      if (null === t)
        return (0, M.jsx)(x.Copy, {
          style: { color: p.muted },
          children: D.ledgerFa.loading,
        });
      if (!t)
        return (0, M.jsxs)(x.Card, {
          children: [
            (0, M.jsx)(x.Copy, {
              style: { fontSize: 16, fontFamily: 'Vazirmatn_600SemiBold' },
              children: D.ledgerFa.ledger,
            }),
            (0, M.jsx)(x.Copy, {
              style: { color: p.muted },
              children: D.ledgerFa.proGate,
            }),
            (0, M.jsx)(i.default, {
              style: { flexDirection: 'row-reverse' },
              children: (0, M.jsx)(k.SmallKey, {
                kind: 'primary',
                label: D.ledgerFa.viewPro,
                onPress: () => o?.(),
              }),
            }),
          ],
        });
      const w = (e, t, n, o, l, i) =>
          (0, M.jsx)(
            s.default,
            {
              testID: e + '-key',
              accessibilityRole: 'button',
              accessibilityState: { selected: l },
              onPress: i,
              style: ({ pressed: e }) => ({
                flex: 1,
                minWidth: 0,
                borderRadius: 15,
                borderWidth: 1.5,
                borderColor: l ? p.accent : 'transparent',
                opacity: e ? 0.85 : 1,
              }),
              children: (0, M.jsx)(k.Tile, {
                testID: e,
                label: t,
                value: n,
                tone: o,
              }),
            },
            e,
          ),
        I = (0, K.useClubLocked)();
      return (0, M.jsxs)(i.default, {
        testID: 'ledger-section',
        style: { gap: 12 },
        children: [
          (0, M.jsx)(k.ReadOnlyNote, {}),
          (0, M.jsx)(P.Reveal, {
            children: (0, M.jsxs)(i.default, {
              style: { flexDirection: 'row-reverse', gap: 8 },
              children: [
                w(
                  'ledger-tile-owed',
                  k.kitFa.theyOweMe,
                  C?.theyOweMe,
                  k.positive,
                  'owes-me' === f,
                  () => S('owes-me' === f ? 'all' : 'owes-me'),
                ),
                w(
                  'ledger-tile-debt',
                  k.kitFa.iOwe,
                  C?.iOwe,
                  p.danger,
                  'i-owe' === f,
                  () => S('i-owe' === f ? 'all' : 'i-owe'),
                ),
                w(
                  'ledger-tile-cheques',
                  k.kitFa.chequesWeek,
                  C?.chequesDue7Days,
                  void 0,
                  !1,
                  () => z.ledgerEntries.open({ screen: 'cheques' }),
                ),
              ],
            }),
          }),
          (0, M.jsxs)(i.default, {
            testID: 'ledger-more-keys',
            style: { flexDirection: 'row-reverse', gap: 8 },
            children: [
              (0, M.jsx)(k.SmallKey, {
                testID: 'ledger-open-cheques',
                kind: 'tint',
                icon: 'cheque',
                label: k.kitFa.cheques,
                onPress: () => z.ledgerEntries.open({ screen: 'cheques' }),
              }),
              (0, M.jsx)(k.SmallKey, {
                testID: 'ledger-open-club',
                kind: 'tint',
                icon: I ? 'lock' : 'star',
                label: I
                  ? (0, q.L)(
                      '\u0628\u0627\u0634\u06af\u0627\u0647 (\u067e\u0644\u0627\u0633)',
                    )
                  : (0, q.L)('\u0628\u0627\u0634\u06af\u0627\u0647'),
                accessibilityLabel: I
                  ? (0, q.L)(
                      '\u0628\u0627\u0634\u06af\u0627\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646\u060c \u062f\u0631 \u0637\u0631\u062d \u067e\u0644\u0627\u0633',
                    )
                  : void 0,
                onPress: () => z.ledgerEntries.open({ screen: 'club' }),
              }),
            ],
          }),
          (0, M.jsx)(j.Contacts, {
            shop: e,
            filter: f,
            onFilter: S,
            initialSearch: c,
            selectedId: u,
            onList: h,
            onContact: (e) =>
              l
                ? l(e, f)
                : z.ledgerEntries.open({ screen: 'contact', contactId: e.id }),
          }),
        ],
      });
    }
    function $({ value: e, onChange: n }) {
      return (0, M.jsx)(t.MoneyInput, {
        value: e,
        onChange: n,
        placeholder: (0, q.L)(
          '\u0645\u0628\u0644\u063a \u067e\u0631\u062f\u0627\u062e\u062a\u200c\u0634\u062f\u0647',
        ),
      });
    }
  },
  888,
  [
    614, 2, 224, 232, 17, 99, 380, 515, 481, 482, 516, 540, 480, 415, 407, 382,
    889, 891, 626, 895, 902, 519, 517, 518, 657, 580, 311, 489, 863, 448, 527,
    908, 526, 438, 529, 914, 913, 659, 660, 338,
  ],
);
