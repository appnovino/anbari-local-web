// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 889; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Contacts = function ({
        shop: e,
        onContact: n,
        initialSearch: l,
        selectedId: s,
        onList: u,
        filter: h,
        onFilter: p,
      }) {
        const { colors: y } = (0, f.useTheme)(),
          [j, v] = (0, t.useState)('all'),
          I = h ?? j,
          [w, H] = (0, t.useState)(l || ''),
          [W, A] = (0, t.useState)(l?.trim() || ''),
          [O, M] = (0, t.useState)(!1);
        (0, t.useEffect)(() => {
          const e = setTimeout(() => A(w.trim()), 250);
          return () => clearTimeout(e);
        }, [w]);
        const E = (0, F.scoped)(e.id, 'contacts:' + I + ':' + W),
          {
            data: N,
            error: B,
            reload: K,
          } = (0, F.useSwr)(E, () =>
            (0, x.listContacts)(e, {
              q: W || void 0,
              ...(0, z.peopleQuery)(I),
            }),
          ),
          X = N ?? (W || 'all' === I ? void 0 : V(e, I)),
          q = X?.contacts ?? [],
          G = void 0 !== X,
          Q = (0, T.useLedgerReadOnly)(),
          U = q.map((e) => e.id).join(',');
        return (
          (0, t.useEffect)(() => {
            G && u?.(q);
          }, [U, G]),
          (0, k.jsxs)(i.default, {
            style: { gap: 10 },
            children: [
              (0, k.jsxs)(i.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 8,
                },
                children: [
                  (0, k.jsx)(i.default, {
                    style: { flex: 1 },
                    children: (0, k.jsx)(c.Input, {
                      testID: 'contacts-search',
                      value: w,
                      onChangeText: H,
                      placeholder: S.ledgerFa.searchContacts,
                      style: { minHeight: 40, paddingVertical: 6 },
                    }),
                  }),
                  !Q &&
                    (0, k.jsx)(b.SmallKey, {
                      testID: 'contacts-add',
                      icon: 'plus',
                      label: b.kitFa.addPerson,
                      onPress: () => M(!0),
                    }),
                ],
              }),
              (0, k.jsx)(i.default, {
                testID: 'contacts-filters',
                ...D.noSwipe,
                children: (0, k.jsx)(b.Chips, {
                  value: I,
                  onChange: (e) => {
                    (v(e), p?.(e));
                  },
                  items: [
                    ['all', S.ledgerFa.filters.all],
                    ['owes-me', S.ledgerFa.filters.owesMe],
                    ['i-owe', S.ledgerFa.filters.iOwe],
                    ['settled', S.ledgerFa.filters.settled],
                    ['customer', S.ledgerFa.kinds.customer],
                    ['supplier', S.ledgerFa.kinds.supplier],
                  ],
                }),
              }),
              !W && (0, k.jsx)(P, { shop: e, onContact: n }),
              !!B &&
                (0, k.jsx)(c.Copy, {
                  accessibilityRole: 'alert',
                  style: { color: y.danger },
                  children: B,
                }),
              G &&
                !q.length &&
                !B &&
                (0, k.jsx)(c.Copy, {
                  style: {
                    color: y.muted,
                    textAlign: 'center',
                    paddingVertical: 16,
                  },
                  children: S.ledgerFa.emptyContacts,
                }),
              (0, k.jsx)(L.SameNameNotice, { contacts: q, goTo: (e) => H(e) }),
              !!q.length &&
                (0, k.jsx)(i.default, {
                  style: {
                    borderRadius: 16,
                    borderWidth: o.default.hairlineWidth,
                    borderColor: y.line,
                    backgroundColor: y.surface,
                    overflow: 'hidden',
                  },
                  children: q.map((e, t) =>
                    (0, k.jsx)(
                      C.Reveal,
                      {
                        index: t,
                        children: (0, k.jsx)(_, {
                          contact: e,
                          first: !t,
                          selected: e.id === s,
                          onPress: () => n(e),
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
              (0, k.jsx)(R, {
                shop: e,
                visible: O,
                onClose: () => M(!1),
                onSaved: (e) => {
                  (M(!1), K(), n(e));
                },
              }),
            ],
          })
        );
      }),
      (_e.ContactForm = R),
      (_e.Balance = function ({ amount: e, large: t = !1 }) {
        const { colors: n } = (0, f.useTheme)(),
          o = (0, b.toneColor)(e, n);
        return (0, k.jsxs)(i.default, {
          children: [
            (0, k.jsx)(c.Copy, {
              style: {
                fontSize: t ? 30 : 22,
                fontFamily: 'Vazirmatn_700Bold',
                color: o,
                textAlign: 'left',
              },
              children: Math.abs((0, w.localAmount)(e)).toLocaleString(
                (0, v.numberLocale)(),
              ),
            }),
            (0, k.jsxs)(c.Copy, {
              style: { fontSize: 11, color: o },
              children: [
                (0, H.balanceWord)(e),
                ' \xb7 ',
                (0, w.currencyUnit)(),
              ],
            }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      i = e(r(d[3])),
      l = r(d[4]),
      s = r(d[5]),
      c = r(d[6]),
      u = r(d[7]),
      h = r(d[8]),
      f = r(d[9]),
      p = r(d[10]),
      x = r(d[11]),
      y = r(d[12]),
      j = r(d[13]),
      b = r(d[14]),
      C = r(d[15]),
      S = r(d[16]),
      v = r(d[17]),
      I = r(d[18]),
      w = r(d[19]),
      F = r(d[20]),
      z = r(d[21]),
      T = r(d[22]),
      L = r(d[23]),
      D = r(d[24]),
      H = r(d[25]),
      k = r(d[26]);
    function V(e, t) {
      const n = (0, F.scoped)(e.id, (0, z.peopleName)('all')),
        o = n ? F.swrStore.peek(n) : void 0;
      if (o?.contacts && !o.next)
        return {
          ...o,
          contacts: o.contacts.filter((e) => (0, z.fitsPeople)(t, e)),
        };
    }
    function P({ shop: e, onContact: t }) {
      const { colors: o } = (0, f.useTheme)(),
        { data: s } = (0, F.useSwr)(
          (0, F.scoped)(e.id, 'contacts:favorites'),
          () => (0, y.listFavorites)(e),
        ),
        u = (s || []).filter((e) => e.favorite);
      return u.length
        ? (0, k.jsxs)(i.default, {
            testID: 'contacts-favorites',
            style: { gap: 6 },
            children: [
              (0, k.jsx)(c.Copy, {
                style: {
                  fontSize: 12.5,
                  lineHeight: 20,
                  color: o.muted,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: (0, v.L)(
                  '\u0647\u0645\u06cc\u0634\u06af\u06cc\u200c\u0647\u0627',
                ),
              }),
              (0, k.jsx)(l.ScrollView, {
                horizontal: !0,
                ...D.noSwipe,
                showsHorizontalScrollIndicator: !1,
                style: { flexGrow: 0 },
                contentContainerStyle: {
                  flexDirection: 'row-reverse',
                  gap: 12,
                  paddingHorizontal: 2,
                },
                children: u.map((e) =>
                  (0, k.jsxs)(
                    n.default,
                    {
                      testID: 'contacts-favorite',
                      accessibilityRole: 'button',
                      accessibilityLabel: e.name,
                      onPress: () => t(e),
                      style: ({ pressed: e }) => ({
                        width: 58,
                        alignItems: 'center',
                        gap: 3,
                        opacity: e ? 0.7 : 1,
                      }),
                      children: [
                        (0, k.jsx)(b.Avatar, { name: e.name, size: 42 }),
                        (0, k.jsx)(c.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 11,
                            lineHeight: 17,
                            textAlign: 'center',
                            maxWidth: 58,
                          },
                          children: e.name,
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          })
        : null;
    }
    function _({ contact: e, first: l, selected: s = !1, onPress: h }) {
      const { colors: x } = (0, f.useTheme)(),
        y = e.balanceToman,
        C = (0, t.useRef)(null);
      return (
        (0, t.useEffect)(() => {
          s && C.current?.scrollIntoView?.({ block: 'nearest' });
        }, [s]),
        (0, k.jsxs)(n.default, {
          ref: C,
          testID: 'contact-row',
          accessibilityRole: 'button',
          accessibilityState: s ? { selected: !0 } : void 0,
          onPress: h,
          style: ({ pressed: e }) => ({
            minHeight: 48,
            paddingHorizontal: 12,
            paddingVertical: 6,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 10,
            backgroundColor: s ? x.accentSoft : e ? x.soft : 'transparent',
            borderRightWidth: s ? 3 : 0,
            borderRightColor: x.accent,
            borderTopWidth: l ? 0 : o.default.hairlineWidth,
            borderTopColor: x.line,
          }),
          children: [
            (0, k.jsx)(b.Avatar, { name: e.name, size: 34 }),
            (0, k.jsxs)(i.default, {
              style: { flex: 1, minWidth: 0 },
              children: [
                (0, k.jsxs)(i.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 4,
                  },
                  children: [
                    (0, k.jsx)(c.Copy, {
                      numberOfLines: 1,
                      style: {
                        flexShrink: 1,
                        fontSize: 14,
                        lineHeight: 22,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: e.name,
                    }),
                    e.favorite &&
                      (0, k.jsx)(u.Icon, {
                        name: 'star',
                        size: 13,
                        color: x.warning,
                        active: !0,
                      }),
                  ],
                }),
                (0, k.jsx)(c.Copy, {
                  numberOfLines: 1,
                  style: { fontSize: 11, lineHeight: 17, color: x.muted },
                  children:
                    (0, I.phoneText)(e.phone) || S.ledgerFa.kinds[e.kind],
                }),
                !!(0, j.noteLine)(e.note) &&
                  (0, k.jsx)(c.Copy, {
                    testID: 'contact-row-note',
                    numberOfLines: 1,
                    style: { fontSize: 11, lineHeight: 17, color: x.warning },
                    children: '\u270e ' + (0, j.noteLine)(e.note),
                  }),
              ],
            }),
            void 0 !== y &&
              (0, k.jsxs)(i.default, {
                style: { alignItems: 'flex-start' },
                children: [
                  (0, k.jsx)(c.Copy, {
                    style: {
                      fontSize: 14,
                      lineHeight: 22,
                      fontFamily: 'Vazirmatn_600SemiBold',
                      color: (0, b.toneColor)(y, x),
                    },
                    children: y
                      ? (0, p.formatCompactToman)(Math.abs(y))
                      : (0, H.balanceWord)(0),
                  }),
                  !!y &&
                    (0, k.jsx)(c.Copy, {
                      style: { fontSize: 10, lineHeight: 15, color: x.muted },
                      children: (0, H.balanceWord)(y),
                    }),
                ],
              }),
            (0, k.jsx)(u.Icon, { name: 'chevron', size: 15, color: x.muted }),
          ],
        })
      );
    }
    function R({
      shop: e,
      visible: n,
      editing: o,
      onClose: l,
      onSaved: u,
      focusNote: p = !1,
    }) {
      const { colors: C } = (0, f.useTheme)(),
        [I, w] = (0, t.useState)(''),
        [F, z] = (0, t.useState)(''),
        [T, D] = (0, t.useState)('customer'),
        [H, V] = (0, t.useState)(''),
        [P, _] = (0, t.useState)(''),
        [R, W] = (0, t.useState)(''),
        [A, O] = (0, t.useState)(''),
        [M, E] = (0, t.useState)(!1);
      (0, t.useEffect)(() => {
        n &&
          (w(o?.name || ''),
          z(o?.phone || ''),
          D(o?.kind || 'customer'),
          V(o?.address || ''),
          _(o?.economicId || ''),
          W(o?.note || ''),
          O(''));
      }, [n, o?.id, o?.version]);
      const N = (0, j.latinDigits)(P).trim(),
        B = !/^[0-9]{0,20}$/.test(N);
      async function K() {
        if (I.trim() && !B && !M) {
          (O(''), E(!0));
          try {
            if (
              !o ||
              o.name.trim() !== I.trim() ||
              (o.phone || '') !== F.trim()
            ) {
              const t = await (0, L.contactSaveProblem)(
                e,
                I,
                F.trim() || void 0,
                o?.id,
              );
              if (t) return (O(t), void E(!1));
            }
            const t = o
              ? await (0, y.patchContact)(e, o.id, {
                  version: (await (0, x.readContact)(e, o.id)).contact.version,
                  ...(I.trim() !== o.name.trim() ? { name: I.trim() } : {}),
                  ...(F.trim() !== (o.phone || '') ? { phone: F.trim() } : {}),
                  ...(T !== o.kind ? { kind: T } : {}),
                  ...(H.trim() !== (o.address || '')
                    ? { address: H.trim() }
                    : {}),
                  ...(N !== (o.economicId || '') ? { economicId: N } : {}),
                  ...(R.trim() !== (o.note || '') ? { note: R.trim() } : {}),
                })
              : await (0, y.createContactPlus)(e, {
                  name: I.trim(),
                  phone: F.trim() || void 0,
                  kind: T,
                  ...(H.trim() ? { address: H.trim() } : {}),
                  ...(N ? { economicId: N } : {}),
                  ...(R.trim() ? { note: R.trim() } : {}),
                });
            u(t.contact);
          } catch (e) {
            O((0, s.message)(e));
          } finally {
            E(!1);
          }
        }
      }
      const X = (0, k.jsxs)(i.default, {
        style: { flexDirection: 'row-reverse', gap: 8 },
        children: [
          (0, k.jsx)(b.SmallKey, {
            grow: !0,
            testID: 'contact-save',
            kind: 'primary',
            label: S.ledgerFa.save,
            disabled: !I.trim() || B || M,
            onPress: K,
          }),
          (0, k.jsx)(b.SmallKey, {
            grow: !0,
            label: S.ledgerFa.cancel,
            onPress: l,
          }),
        ],
      });
      return (0, k.jsx)(h.Sheet, {
        visible: n,
        title: o ? S.ledgerFa.editContact : S.ledgerFa.addContact,
        onClose: l,
        onSubmit: () => {
          K();
        },
        busy: M,
        footer: X,
        children: (0, k.jsxs)(i.default, {
          testID: 'contact-form',
          style: { gap: 12 },
          children: [
            (0, k.jsx)(b.Field, {
              label: S.ledgerFa.name,
              children: (0, k.jsx)(c.Input, {
                value: I,
                onChangeText: w,
                maxLength: 100,
                style: { minHeight: 44, paddingVertical: 8 },
              }),
            }),
            (0, k.jsx)(b.Field, {
              label: S.ledgerFa.phone,
              children: (0, k.jsx)(c.Input, {
                value: F,
                onChangeText: z,
                keyboardType: 'phone-pad',
                maxLength: 40,
                ltr: !0,
                style: { minHeight: 44, paddingVertical: 8 },
              }),
            }),
            (0, k.jsx)(c.Segmented, {
              value: T,
              onChange: D,
              items: ['customer', 'supplier', 'both'].map((e) => ({
                value: e,
                label: S.ledgerFa.kinds[e],
              })),
            }),
            (0, k.jsxs)(b.Field, {
              label: (0, v.L)(
                '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
              ),
              children: [
                (0, k.jsx)(c.Input, {
                  testID: 'contact-note',
                  value: R,
                  onChangeText: W,
                  maxLength: j.NOTE_MAX,
                  multiline: !0,
                  autoFocus: p && !!o,
                  style: {
                    minHeight: 84,
                    paddingVertical: 8,
                    textAlignVertical: 'top',
                  },
                }),
                (0, k.jsxs)(i.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    justifyContent: 'space-between',
                    gap: 8,
                  },
                  children: [
                    (0, k.jsx)(c.Copy, {
                      style: {
                        flex: 1,
                        fontSize: 11.5,
                        lineHeight: 18,
                        color: C.muted,
                      },
                      children: (0, v.L)(
                        '\u0647\u0631 \u06a9\u0633 \u0627\u06cc\u0646 \u0634\u062e\u0635 \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u062f\u060c \u06cc\u0627\u062f\u062f\u0627\u0634\u062a \u0631\u0627 \u0647\u0645 \u0645\u06cc\u200c\u0628\u06cc\u0646\u062f.',
                      ),
                    }),
                    (0, k.jsx)(c.Copy, {
                      testID: 'contact-note-count',
                      style: {
                        fontSize: 11.5,
                        lineHeight: 18,
                        color: R.length >= j.NOTE_MAX ? C.danger : C.muted,
                      },
                      children: (0, j.noteCount)(R),
                    }),
                  ],
                }),
              ],
            }),
            (0, k.jsx)(b.Field, {
              label: (0, v.L)(
                '\u0646\u0634\u0627\u0646\u06cc (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
              ),
              children: (0, k.jsx)(c.Input, {
                testID: 'contact-address',
                value: H,
                onChangeText: V,
                maxLength: 160,
                multiline: !0,
                style: { minHeight: 44, paddingVertical: 8 },
              }),
            }),
            (0, k.jsx)(b.Field, {
              label: (0, v.L)(
                '\u06a9\u062f \u0627\u0642\u062a\u0635\u0627\u062f\u06cc (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
              ),
              children: (0, k.jsx)(c.Input, {
                testID: 'contact-economic-id',
                value: P,
                onChangeText: _,
                keyboardType: 'number-pad',
                inputMode: 'numeric',
                maxLength: 20,
                ltr: !0,
                style: { minHeight: 44, paddingVertical: 8 },
              }),
            }),
            B &&
              (0, k.jsx)(c.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 12, color: C.danger },
                children: (0, v.L)(
                  '\u06a9\u062f \u0627\u0642\u062a\u0635\u0627\u062f\u06cc \u0641\u0642\u0637 \u0639\u062f\u062f \u0627\u0633\u062a (\u062d\u062f\u0627\u06a9\u062b\u0631 \u06f2\u06f0 \u0631\u0642\u0645).',
                ),
              }),
            !!A &&
              (0, k.jsx)(c.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, color: C.danger },
                children: A,
              }),
          ],
        }),
      });
    }
  },
  889,
  [
    2, 232, 17, 99, 380, 415, 407, 385, 539, 382, 434, 519, 521, 890, 517, 657,
    580, 311, 438, 435, 489, 520, 518, 526, 384, 475, 338,
  ],
);
