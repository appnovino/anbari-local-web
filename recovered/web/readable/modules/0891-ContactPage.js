// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 891; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ContactPage = function ({
        shop: e,
        contactId: Q,
        onBack: X,
        openStatement: Y = !1,
        onNewInvoice: $,
        embedded: ee = !1,
      }) {
        const { colors: te } = (0, b.useTheme)(),
          ne = (0, c.useSafeAreaInsets)(),
          { width: oe } = (0, l.default)(),
          ie = e.timezone || 'Asia/Tehran',
          [ae, se] = (0, t.useState)(null),
          [le, re] = (0, t.useState)(null),
          [ce, de] = (0, t.useState)(!1),
          [ue, he] = (0, t.useState)(null),
          [me, fe] = (0, t.useState)(!1),
          [ye, pe] = (0, t.useState)(Y),
          [be, xe] = (0, t.useState)(!1),
          [ge, je] = (0, t.useState)(!1),
          [Se, Ce] = (0, t.useState)(!1),
          [Le, we] = (0, t.useState)(''),
          [ve, ke] = (0, t.useState)(''),
          [Ie, De] = (0, t.useState)('book'),
          [ze, Te] = (0, t.useState)(!1),
          Fe = (0, O.scoped)(e.id, 'contact-habits:' + Q),
          { data: He, reload: Re } = (0, O.useSwr)(Fe, () =>
            (0, _.readHabits)(e, Q),
          ),
          [Pe, We] = (0, t.useState)('all'),
          [qe, Oe] = (0, t.useState)('all'),
          [Be, Me] = (0, t.useState)(''),
          [Ve, Ne] = (0, t.useState)(!1),
          [Ae, Ee] = (0, t.useState)(!1),
          [Ke, Ue] = (0, t.useState)('');
        (0, t.useEffect)(() => {
          const e = setTimeout(() => Ue(Be), 400);
          return () => clearTimeout(e);
        }, [Be]);
        const [Ze, Ge] = (0, t.useState)(null),
          [Je, Qe] = (0, t.useState)(''),
          [Xe, Ye] = (0, t.useState)(null),
          [$e, et] = (0, q.useConfirm)(),
          tt = (0, V.useLedgerReadOnly)(),
          nt = (0, t.useMemo)(() => {
            const e = (0, B.tabType)(Ie, qe);
            if ('book' !== Ie) return e ? { type: e } : {};
            const t = (0, B.bookPeriodMonths)(Pe),
              n = t ? (0, A.lastMonths)(t, Date.now(), ie) : null,
              o =
                'rial' === (0, F.moneyUnit)()
                  ? (0, F.rialToToman)((0, k.parseToman)(Ke))
                  : (0, k.parseToman)(Ke);
            return {
              ...(n ? { from: n.from, to: n.to } : {}),
              ...(e ? { type: e } : {}),
              ...(o > 0 ? { amount: o } : {}),
            };
          }, [Ie, Pe, qe, Ke, ie]),
          ot = Object.keys(nt).length > 0,
          it = ot ? ':' + JSON.stringify(nt) : '',
          at = (0, O.scoped)(e.id, 'contact:' + Q + it),
          st = (0, t.useRef)(at);
        st.current = at;
        const {
            data: lt,
            error: rt,
            reload: ct,
          } = (0, O.useSwr)(at, () => (0, x.readContact)(e, Q, void 0, nt)),
          dt = (0, t.useMemo)(
            () => (lt ? void 0 : (0, E.seedContact)(e, Q)),
            [lt, e.id, Q, at],
          ),
          ut = lt || dt,
          ht = !lt;
        (0, t.useEffect)(() => {
          const t = setTimeout(() => {
            (0, E.warmPerson)(e, Q).catch(() => {});
          }, 0);
          return () => clearTimeout(t);
        }, [e.id, Q]);
        const [mt, ft] = (0, t.useState)(null),
          yt = mt?.key === at ? mt : at ? U.get(at) : void 0,
          pt = (0, t.useMemo)(() => {
            if (!ut) return [];
            const e = ut.rows || [],
              t = new Set(e.map((e) => e.key));
            return [...e, ...(yt?.rows || []).filter((e) => !t.has(e.key))];
          }, [ut, yt]),
          bt = void 0 === yt?.cursor ? ut?.next : yt.cursor,
          xt = ve || rt,
          gt = () => (ke(''), at && U.delete(at), ft(null), Re(), ct());
        async function jt(t) {
          if (!Je) {
            (Qe(t.key), ke(''));
            try {
              Ge(
                t.saleId
                  ? await (0, x.getSale)(e, t.saleId)
                  : await (0, x.getPurchase)(e, t.purchaseId),
              );
            } catch (e) {
              ke(
                (0, z.L)(
                  '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0627\u0632 \u0646\u0634\u062f: {reason}',
                  { reason: (0, u.message)(e) },
                ),
              );
            } finally {
              Qe('');
            }
          }
        }
        function St() {
          (Ge(null), gt());
        }
        (0, t.useEffect)(() => {
          Ee(!1);
        }, [Q, it]);
        const Ct = ee
          ? null
          : (0, K.jsx)(s.default, {
              style: { flexDirection: 'row-reverse' },
              children: (0, K.jsx)(v.SmallKey, {
                kind: 'text',
                icon: 'arrow',
                label: (0, z.L)('\u0628\u0627\u0632\u06af\u0634\u062a'),
                onPress: X,
              }),
            });
        if (!ut)
          return (0, K.jsxs)(s.default, {
            style: { gap: 10 },
            children: [
              Ct,
              (0, K.jsx)(h.Copy, {
                style: { color: xt ? te.danger : te.muted },
                children:
                  xt ||
                  (0, z.L)(
                    '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u062d\u0633\u0627\u0628\u2026',
                  ),
              }),
            ],
          });
        const { contact: Lt } = ut,
          wt = ut.totals.balanceToman ?? 0,
          vt = ut.stats,
          kt = (0, v.toneColor)(wt, te),
          It = (0, R.openBalance)(wt, ut.openCheques),
          Dt = ot || Ae ? -1 : (0, H.bookFold)(pt, wt),
          zt = Dt >= 0 ? pt.slice(0, Dt + 1) : pt,
          Tt = Dt >= 0 && (Dt < pt.length - 1 || !!bt),
          Ft = [];
        for (const e of zt) {
          const t = Z(e.occurredAt, ie),
            n = Ft[Ft.length - 1];
          n && n.label === t
            ? n.rows.push(e)
            : Ft.push({ label: t, end: e.balanceToman, rows: [e] });
        }
        const Ht = Lt,
          Rt = vt?.firstAt ? G(vt.firstAt, ie) : '',
          Pt = (e) => e.toLocaleString((0, z.numberLocale)()),
          Wt = Rt
            ? 'supplier' === Lt.kind
              ? (0, z.L)(
                  '\u0637\u0631\u0641 \u062d\u0633\u0627\u0628 \u0627\u0632 {day}',
                  { day: Rt },
                )
              : (0, z.L)('\u0645\u0634\u062a\u0631\u06cc \u0627\u0632 {day}', {
                  day: Rt,
                })
            : '',
          qt = !!wt && !It,
          Ot = qt ? 0 : wt,
          _t = (0, B.balanceWords)(Ot),
          Bt = (0, B.chequesOnTheWay)(ut.openCheques),
          Mt = He?.invoices ?? vt?.invoices,
          Vt = Bt.inCount
            ? {
                label: (0, z.L)(
                  '\u0686\u06a9\u200c\u0647\u0627\u06cc \u062f\u0631 \u0631\u0627\u0647 \u0627\u0632 \u0627\u0648',
                ),
                value: (0, z.L)('{n} \u0686\u06a9 \xb7 {amount}', {
                  n: Pt(Bt.inCount),
                  amount: (0, F.shortMoney)(Bt.inToman),
                }),
                more: Bt.outCount
                  ? (0, z.L)(
                      '\u0628\u0647 \u0627\u0648: {n} \u0686\u06a9 \xb7 {amount}',
                      {
                        n: Pt(Bt.outCount),
                        amount: (0, F.shortMoney)(Bt.outToman),
                      },
                    )
                  : '',
              }
            : Bt.outCount
              ? {
                  label: (0, z.L)(
                    '\u0686\u06a9\u200c\u0647\u0627\u06cc \u062f\u0631 \u0631\u0627\u0647 \u0628\u0647 \u0627\u0648',
                  ),
                  value: (0, z.L)('{n} \u0686\u06a9 \xb7 {amount}', {
                    n: Pt(Bt.outCount),
                    amount: (0, F.shortMoney)(Bt.outToman),
                  }),
                  more: '',
                }
              : {
                  label: (0, z.L)(
                    '\u0686\u06a9\u200c\u0647\u0627\u06cc \u062f\u0631 \u0631\u0627\u0647',
                  ),
                  value: (0, z.L)('\u0646\u062f\u0627\u0631\u062f'),
                  more: '',
                },
          Nt = (0, B.habitsLine)(He),
          At = !tt && (!!$ || M.basketEntries.listening());
        function Et(t) {
          we(t);
          for (const t of [
            (0, O.scoped)(e.id, 'contacts:'),
            (0, O.scoped)(e.id, 'contact:' + Lt.id),
          ])
            t && O.swrStore.invalidate(t);
          gt();
        }
        const Kt = (t) =>
          t?.paymentId
            ? () => (0, x.reversePayment)(e, t.paymentId)
            : t?.debtId
              ? () => (0, x.reverseDebt)(e, Lt.id, t.debtId)
              : void 0;
        async function Ut() {
          if (!ze) {
            (Te(!0), ke(''));
            try {
              await (0, _.patchContact)(e, Lt.id, {
                version: (await (0, x.readContact)(e, Lt.id)).contact.version,
                favorite: !Ht.favorite,
              });
              for (const t of [
                (0, O.scoped)(e.id, 'contacts:'),
                (0, O.scoped)(e.id, 'contact:' + Lt.id),
              ])
                t && O.swrStore.invalidate(t);
              await gt();
            } catch (e) {
              ke((0, u.message)(e));
            } finally {
              Te(!1);
            }
          }
        }
        const Zt = [
            [
              'book',
              (0, z.L)('\u062f\u0641\u062a\u0631 \u062d\u0633\u0627\u0628'),
            ],
            [
              'invoices',
              void 0 !== Mt
                ? (0, z.L)(
                    '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627 ({n})',
                    { n: Pt(Mt) },
                  )
                : (0, z.L)('\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627'),
            ],
            ['cheques', (0, z.L)('\u0686\u06a9\u200c\u0647\u0627')],
          ],
          Gt = ht
            ? rt
              ? ''
              : (0, z.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                )
            : 'invoices' === Ie
              ? (0, z.L)(
                  '\u0647\u0646\u0648\u0632 \u0641\u0627\u06a9\u062a\u0648\u0631\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u0634\u062e\u0635 \u062b\u0628\u062a \u0646\u0634\u062f\u0647.',
                )
              : 'cheques' === Ie
                ? (0, z.L)(
                    '\u0647\u0646\u0648\u0632 \u0686\u06a9\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u0634\u062e\u0635 \u062b\u0628\u062a \u0646\u0634\u062f\u0647.',
                  )
                : ot
                  ? (0, z.L)(
                      '\u0631\u062f\u06cc\u0641\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u0641\u06cc\u0644\u062a\u0631 \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f.',
                    )
                  : D.ledgerFa.statementEmpty,
          Jt = (e, t, n, s) =>
            (0, K.jsx)(
              o.default,
              {
                testID: s,
                accessibilityRole: 'button',
                accessibilityState: { selected: e },
                onPress: n,
                style: ({ pressed: t }) => ({
                  height: 34,
                  paddingHorizontal: 12,
                  borderRadius: 10,
                  justifyContent: 'center',
                  borderWidth: i.default.hairlineWidth,
                  borderColor: e ? te.accent : te.line,
                  backgroundColor: e ? te.accent : te.surface,
                  opacity: t ? 0.8 : 1,
                }),
                children: (0, K.jsx)(h.Copy, {
                  numberOfLines: 1,
                  style: {
                    fontSize: 13,
                    lineHeight: 20,
                    color: e ? te.onAccent : te.text,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: t,
                }),
              },
              s,
            ),
          Qt = {
            all: (0, z.L)('\u0647\u0645\u0647'),
            1: (0, z.L)('\u06f1 \u0645\u0627\u0647'),
            6: (0, z.L)('\u06f6 \u0645\u0627\u0647'),
          },
          Xt = [
            ['all', (0, z.L)('\u0647\u0645\u0647')],
            ['sale', (0, z.L)('\u0641\u0627\u06a9\u062a\u0648\u0631')],
            ['payment', (0, z.L)('\u062f\u0631\u06cc\u0627\u0641\u062a')],
            ['cheque', (0, z.L)('\u0686\u06a9')],
          ],
          Yt = ('all' !== qe ? 1 : 0) + ((0, k.parseToman)(Be) > 0 ? 1 : 0),
          $t = (0, H.dayIso)(new Date().toISOString(), ie),
          en = {
            flex: 1,
            minWidth: 0,
            padding: 12,
            gap: 2,
            borderRadius: 16,
            backgroundColor: te.surface,
            borderWidth: i.default.hairlineWidth,
            borderColor: te.line,
          };
        return (0, K.jsxs)(s.default, {
          style: { gap: 12 },
          children: [
            et,
            (0, K.jsx)(W.BookNoteSheet, {
              shop: e,
              contactId: Q,
              row: Xe,
              canWrite: !tt,
              onClose: () => Ye(null),
              onSaved: gt,
            }),
            Ct,
            (0, K.jsx)(v.ReadOnlyNote, {}),
            (0, K.jsxs)(s.default, {
              testID: 'contact-header',
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 12,
              },
              children: [
                (0, K.jsx)(v.Avatar, { name: Lt.name, size: 48 }),
                (0, K.jsxs)(s.default, {
                  style: { flex: 1, minWidth: 0, gap: 2 },
                  children: [
                    (0, K.jsxs)(s.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: 6,
                      },
                      children: [
                        (0, K.jsx)(h.Copy, {
                          numberOfLines: 2,
                          style: {
                            flexShrink: 1,
                            fontSize: 18,
                            lineHeight: 26,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: Lt.name,
                        }),
                        Ht.favorite &&
                          (0, K.jsx)(s.default, {
                            testID: 'contact-favorite-badge',
                            style: {
                              paddingHorizontal: 8,
                              borderRadius: 8,
                              backgroundColor: te.accent,
                            },
                            children: (0, K.jsx)(h.Copy, {
                              style: {
                                fontSize: 11,
                                lineHeight: 19,
                                color: te.onAccent,
                                fontFamily: 'Vazirmatn_700Bold',
                              },
                              children: (0, z.L)(
                                '\u0647\u0645\u06cc\u0634\u06af\u06cc',
                              ),
                            }),
                          }),
                      ],
                    }),
                    (0, K.jsxs)(s.default, {
                      testID: 'contact-stats',
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        columnGap: 6,
                      },
                      children: [
                        Lt.phone
                          ? (0, K.jsxs)(s.default, {
                              testID: 'contact-phone',
                              style: {
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                gap: 6,
                              },
                              children: [
                                (0, K.jsxs)(o.default, {
                                  testID: 'contact-phone-call',
                                  accessibilityRole: 'link',
                                  accessibilityLabel: (0, z.L)(
                                    '\u062a\u0645\u0627\u0633 \u0628\u0627 {phone}',
                                    { phone: (0, z.localDigits)(Lt.phone) },
                                  ),
                                  onPress: () => {
                                    n.default
                                      .openURL(
                                        'tel:' +
                                          Lt.phone.replace(/[^0-9+]/g, ''),
                                      )
                                      .catch(() =>
                                        ke(
                                          (0, z.L)(
                                            '\u062a\u0645\u0627\u0633 \u0628\u0627\u0632 \u0646\u0634\u062f\u061b \u0627\u06cc\u0646 \u062f\u0633\u062a\u06af\u0627\u0647 \u062a\u0645\u0627\u0633 \u062a\u0644\u0641\u0646\u06cc \u0646\u062f\u0627\u0631\u062f.',
                                          ),
                                        ),
                                      );
                                  },
                                  style: ({ pressed: e }) => ({
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 4,
                                    minHeight: 30,
                                    opacity: e ? 0.7 : 1,
                                  }),
                                  children: [
                                    (0, K.jsx)(f.Icon, {
                                      name: 'phone',
                                      size: 13,
                                      color: te.accent,
                                    }),
                                    (0, K.jsx)(h.Copy, {
                                      style: {
                                        fontSize: 12.5,
                                        lineHeight: 20,
                                        color: te.accent,
                                        fontFamily: 'Vazirmatn_600SemiBold',
                                      },
                                      children: (0, z.localDigits)(Lt.phone),
                                    }),
                                  ],
                                }),
                                (0, K.jsx)(o.default, {
                                  testID: 'contact-phone-copy',
                                  accessibilityRole: 'button',
                                  accessibilityLabel: (0, z.L)(
                                    '\u06a9\u067e\u06cc \u0634\u0645\u0627\u0631\u0647',
                                  ),
                                  onPress: () => {
                                    (0, N.copyPlain)(Lt.phone).then(
                                      () =>
                                        we(
                                          (0, z.L)(
                                            '\u0634\u0645\u0627\u0631\u0647 \u06a9\u067e\u06cc \u0634\u062f.',
                                          ),
                                        ),
                                      () =>
                                        ke(
                                          (0, z.L)(
                                            '\u06a9\u067e\u06cc \u0646\u0634\u062f\u061b \u0627\u06cc\u0646 \u0645\u0631\u0648\u0631\u06af\u0631 \u0627\u062c\u0627\u0632\u0647\u0654 \u06a9\u067e\u06cc \u0646\u0645\u06cc\u200c\u062f\u0647\u062f.',
                                          ),
                                        ),
                                    );
                                  },
                                  style: ({ pressed: e }) => ({
                                    minHeight: 28,
                                    paddingHorizontal: 7,
                                    justifyContent: 'center',
                                    borderRadius: 8,
                                    backgroundColor: te.soft,
                                    opacity: e ? 0.7 : 1,
                                  }),
                                  children: (0, K.jsx)(h.Copy, {
                                    style: {
                                      fontSize: 11,
                                      lineHeight: 17,
                                      color: te.text,
                                    },
                                    children: (0, z.L)('\u06a9\u067e\u06cc'),
                                  }),
                                }),
                              ],
                            })
                          : Wt
                            ? null
                            : (0, K.jsx)(h.Copy, {
                                style: {
                                  fontSize: 12,
                                  lineHeight: 19,
                                  color: te.muted,
                                },
                                children: D.ledgerFa.kinds[Lt.kind],
                              }),
                        !!Wt &&
                          (0, K.jsx)(h.Copy, {
                            style: {
                              fontSize: 12,
                              lineHeight: 20,
                              color: te.muted,
                            },
                            children: (Lt.phone ? '\xb7 ' : '') + Wt,
                          }),
                      ],
                    }),
                    !!Nt &&
                      (0, K.jsx)(h.Copy, {
                        testID: 'contact-habit-line',
                        style: {
                          fontSize: 12,
                          lineHeight: 19,
                          color: te.muted,
                        },
                        children: Nt,
                      }),
                  ],
                }),
                !tt &&
                  (0, K.jsx)(o.default, {
                    testID: 'contact-favorite',
                    accessibilityRole: 'switch',
                    accessibilityState: { checked: !!Ht.favorite, busy: ze },
                    accessibilityLabel: Ht.favorite
                      ? (0, z.L)(
                          '\u0628\u0631\u062f\u0627\u0634\u062a\u0646 \u0627\u0632 \u0647\u0645\u06cc\u0634\u06af\u06cc\u200c\u0647\u0627',
                        )
                      : (0, z.L)(
                          '\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 \u0647\u0645\u06cc\u0634\u06af\u06cc\u200c\u0647\u0627',
                        ),
                    disabled: ze,
                    onPress: () => {
                      Ut();
                    },
                    style: ({ pressed: e }) => ({
                      width: 36,
                      height: 36,
                      borderRadius: 12,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: i.default.hairlineWidth,
                      borderColor: Ht.favorite ? te.warning : te.line,
                      backgroundColor: te.soft,
                      opacity: ze ? 0.5 : e ? 0.8 : 1,
                    }),
                    children: (0, K.jsx)(f.Icon, {
                      name: 'star',
                      size: 18,
                      color: Ht.favorite ? te.warning : te.muted,
                      active: !!Ht.favorite,
                    }),
                  }),
                (!tt || !!Lt.phone) &&
                  (0, K.jsx)(h.IconKey, {
                    testID: 'contact-menu',
                    icon: 'more',
                    size: 36,
                    accessibilityLabel: v.kitFa.personMenu,
                    onPress: () => xe(!0),
                  }),
              ],
            }),
            !!(0, B.noteLine)(Ht.note) &&
              (0, K.jsxs)(o.default, {
                testID: 'contact-note-box',
                accessibilityRole: tt ? 'text' : 'button',
                accessibilityLabel: (0, z.L)(
                  '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a: {note}',
                  { note: (0, B.noteLine)(Ht.note) },
                ),
                disabled: tt,
                onPress: () => je('note'),
                style: ({ pressed: e }) => ({
                  flexDirection: 'row-reverse',
                  gap: 6,
                  paddingHorizontal: 12,
                  paddingVertical: 9,
                  borderRadius: 14,
                  backgroundColor: te.warningSoft,
                  opacity: e ? 0.85 : 1,
                }),
                children: [
                  (0, K.jsx)(f.Icon, {
                    name: 'edit',
                    size: 14,
                    color: te.warning,
                  }),
                  (0, K.jsxs)(h.Copy, {
                    style: {
                      flex: 1,
                      minWidth: 0,
                      fontSize: 13,
                      lineHeight: 22,
                      color: te.text,
                    },
                    children: [
                      (0, K.jsx)(h.Copy, {
                        style: {
                          fontSize: 13,
                          lineHeight: 22,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: (0, z.L)(
                          '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a: ',
                        ),
                      }),
                      Ht.note,
                    ],
                  }),
                ],
              }),
            (0, K.jsxs)(s.default, {
              style: { flexDirection: 'row-reverse', gap: 8 },
              children: [
                (0, K.jsxs)(s.default, {
                  testID: 'contact-balance',
                  accessibilityLabel: (0, H.ownerBalance)(wt),
                  style: en,
                  children: [
                    (0, K.jsx)(h.Copy, {
                      numberOfLines: 1,
                      style: { fontSize: 12, lineHeight: 19, color: te.muted },
                      children: _t.label,
                    }),
                    (0, K.jsx)(h.Copy, {
                      testID: 'contact-balance-line',
                      numberOfLines: 1,
                      adjustsFontSizeToFit: !0,
                      minimumFontScale: 0.7,
                      style: {
                        fontSize: 19,
                        lineHeight: 30,
                        color: qt ? (0, v.toneColor)(0, te) : kt,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: Ot
                        ? (0, F.shortMoney)(Math.abs(Ot))
                        : (0, z.L)('\u062a\u0633\u0648\u06cc\u0647 \u2713'),
                    }),
                    !!wt &&
                      (0, K.jsx)(h.Copy, {
                        numberOfLines: 1,
                        style: {
                          fontSize: 11,
                          lineHeight: 17,
                          color: te.muted,
                        },
                        children: qt
                          ? (0, F.shopUnitText)(
                              (0, z.L)(
                                '\u062c\u0632 \u0686\u06a9 \u062f\u0631 \u0631\u0627\u0647: {amount} \u062a\u0648\u0645\u0627\u0646',
                                { amount: (0, F.fullToman)(Math.abs(wt)) },
                              ),
                            )
                          : (0, F.shopUnitText)(
                              (0, z.L)(
                                '{amount} \u062a\u0648\u0645\u0627\u0646',
                                { amount: (0, F.fullToman)(Math.abs(wt)) },
                              ),
                            ),
                      }),
                  ],
                }),
                (0, K.jsxs)(o.default, {
                  testID: 'contact-cheques-tile',
                  accessibilityRole: 'button',
                  onPress: () => De('cheques'),
                  style: ({ pressed: e }) => [en, { opacity: e ? 0.85 : 1 }],
                  children: [
                    (0, K.jsx)(h.Copy, {
                      numberOfLines: 1,
                      style: { fontSize: 12, lineHeight: 19, color: te.muted },
                      children: Vt.label,
                    }),
                    (0, K.jsx)(h.Copy, {
                      numberOfLines: 1,
                      adjustsFontSizeToFit: !0,
                      minimumFontScale: 0.7,
                      style: {
                        fontSize: Bt.inCount || Bt.outCount ? 19 : 15,
                        lineHeight: 30,
                        color:
                          Bt.inCount || Bt.outCount ? te.warning : te.muted,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: Vt.value,
                    }),
                    !!Vt.more &&
                      (0, K.jsx)(h.Copy, {
                        numberOfLines: 1,
                        style: {
                          fontSize: 11,
                          lineHeight: 17,
                          color: te.muted,
                        },
                        children: Vt.more,
                      }),
                  ],
                }),
              ],
            }),
            (0, K.jsx)(s.default, {
              style: { flexDirection: 'row-reverse' },
              children: (0, K.jsx)(s.default, {
                style: {
                  width: oe < 600 ? '100%' : 340,
                  flexDirection: 'row-reverse',
                  gap: 8,
                },
                children: tt
                  ? (0, K.jsx)(v.SmallKey, {
                      grow: !0,
                      testID: 'contact-statement',
                      kind: 'soft',
                      icon: 'download',
                      label: D.ledgerFa.statement,
                      onPress: () => pe(!0),
                    })
                  : (0, K.jsxs)(K.Fragment, {
                      children: [
                        (0, K.jsx)(s.default, {
                          style: { flex: 2 },
                          children: (0, K.jsx)(v.SmallKey, {
                            testID: 'contact-add',
                            kind: 'primary',
                            icon: 'plus',
                            label: (0, z.L)('\u062b\u0628\u062a'),
                            accessibilityLabel: (0, z.L)(
                              '\u062b\u0628\u062a \u0628\u0631\u0627\u06cc {name}',
                              { name: Lt.name },
                            ),
                            onPress: () => {
                              (we(''), de(!0));
                            },
                          }),
                        }),
                        (0, K.jsx)(s.default, {
                          style: { flex: 1 },
                          children: (0, K.jsx)(v.SmallKey, {
                            testID: 'contact-settle',
                            kind: 'tint',
                            icon: 'check',
                            label: (0, z.L)('\u062a\u0633\u0648\u06cc\u0647'),
                            accessibilityLabel: (0, z.L)(
                              '\u062a\u0633\u0648\u06cc\u0647 \u0628\u0627 {name}',
                              { name: Lt.name },
                            ),
                            disabled: !It,
                            onPress: () => {
                              (we(''), Ce(!0));
                            },
                          }),
                        }),
                      ],
                    }),
              }),
            }),
            !!Le &&
              (0, K.jsx)(h.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, color: v.positive },
                children: Le,
              }),
            (0, K.jsx)(L.Statement, {
              shop: e,
              contact: Lt,
              firstAt: vt?.firstAt,
              visible: ye,
              onClose: () => pe(!1),
            }),
            (0, K.jsx)(s.default, {
              testID: 'contact-tabs',
              accessibilityRole: 'tablist',
              style: {
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                gap: 8,
                paddingTop: 4,
              },
              children: Zt.map(([e, t]) => {
                const n = Ie === e;
                return (0, K.jsx)(
                  o.default,
                  {
                    testID: 'contact-tab-' + e,
                    accessibilityRole: 'tab',
                    accessibilityState: { selected: n },
                    onPress: () => De(e),
                    style: ({ pressed: e }) => ({
                      height: 38,
                      paddingHorizontal: 14,
                      borderRadius: 12,
                      justifyContent: 'center',
                      borderWidth: n ? 1.5 : i.default.hairlineWidth,
                      borderColor: n ? te.accent : te.line,
                      backgroundColor: n ? te.accentSoft : te.surface,
                      opacity: e ? 0.85 : 1,
                    }),
                    children: (0, K.jsx)(h.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 13.5,
                        lineHeight: 21,
                        color: n ? te.accent : te.text,
                        fontFamily: n
                          ? 'Vazirmatn_700Bold'
                          : 'Vazirmatn_600SemiBold',
                      },
                      children: t,
                    }),
                  },
                  e,
                );
              }),
            }),
            'book' === Ie &&
              (0, K.jsxs)(K.Fragment, {
                children: [
                  (0, K.jsxs)(s.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: 8,
                    },
                    children: [
                      (0, K.jsx)(v.SmallKey, {
                        testID: 'book-filter-toggle',
                        kind: 'text',
                        icon: 'filter',
                        label: Yt
                          ? (0, z.L)('\u0641\u06cc\u0644\u062a\u0631 ({n})', {
                              n: (0, z.localDigits)(String(Yt)),
                            })
                          : (0, z.L)('\u0641\u06cc\u0644\u062a\u0631'),
                        onPress: () => Ne((e) => !e),
                      }),
                      (0, K.jsx)(s.default, {
                        testID: 'book-periods',
                        accessibilityRole: 'radiogroup',
                        style: {
                          flexDirection: 'row',
                          direction: 'ltr',
                          padding: 3,
                          gap: 3,
                          borderRadius: 12,
                          backgroundColor: te.soft,
                          borderWidth: i.default.hairlineWidth,
                          borderColor: te.line,
                        },
                        children: B.BOOK_PERIODS.map((e) => {
                          const t = Pe === e;
                          return (0, K.jsx)(
                            o.default,
                            {
                              testID: 'book-period-' + e,
                              accessibilityRole: 'radio',
                              accessibilityState: { selected: t, checked: t },
                              onPress: () => We(e),
                              style: ({ pressed: e }) => ({
                                height: 32,
                                minWidth: 58,
                                paddingHorizontal: 12,
                                borderRadius: 9,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: t ? te.accent : 'transparent',
                                opacity: e ? 0.8 : 1,
                              }),
                              children: (0, K.jsx)(h.Copy, {
                                numberOfLines: 1,
                                style: {
                                  fontSize: 13,
                                  lineHeight: 20,
                                  color: t ? te.onAccent : te.text,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: Qt[e],
                              }),
                            },
                            e,
                          );
                        }),
                      }),
                    ],
                  }),
                  Ve &&
                    (0, K.jsxs)(s.default, {
                      testID: 'book-filters',
                      style: {
                        gap: 8,
                        padding: 12,
                        borderRadius: 14,
                        backgroundColor: te.soft,
                      },
                      children: [
                        (0, K.jsx)(s.default, {
                          style: {
                            flexDirection: 'row-reverse',
                            flexWrap: 'wrap',
                            gap: 6,
                          },
                          children: Xt.map(([e, t]) =>
                            Jt(qe === e, t, () => Oe(e), 'book-type-' + e),
                          ),
                        }),
                        (0, K.jsx)(h.Input, {
                          testID: 'book-amount',
                          value: Be,
                          onChangeText: (e) => Me((0, k.groupToman)(e)),
                          placeholder: (0, F.shopUnitText)(
                            (0, z.L)(
                              '\u062c\u0633\u062a\u200c\u0648\u062c\u0648\u06cc \u0645\u0628\u0644\u063a (\u062a\u0648\u0645\u0627\u0646)',
                            ),
                          ),
                          keyboardType: 'number-pad',
                          inputMode: 'numeric',
                          maxLength: 24,
                        }),
                        Yt > 0 &&
                          (0, K.jsx)(v.SmallKey, {
                            testID: 'book-filter-clear',
                            kind: 'text',
                            label: (0, z.L)(
                              '\u067e\u0627\u06a9 \u06a9\u0631\u062f\u0646 \u0641\u06cc\u0644\u062a\u0631',
                            ),
                            onPress: () => {
                              (Oe('all'), Me(''));
                            },
                          }),
                      ],
                    }),
                ],
              }),
            'cheques' === Ie &&
              (0, K.jsxs)(K.Fragment, {
                children: [
                  !tt &&
                    (0, K.jsx)(s.default, {
                      style: { flexDirection: 'row-reverse' },
                      children: (0, K.jsx)(v.SmallKey, {
                        testID: 'contact-cheque',
                        kind: me ? 'primary' : 'tint',
                        icon: 'cheque',
                        label: v.kitFa.addCheque,
                        onPress: () => {
                          (se(null), fe(!0));
                        },
                      }),
                    }),
                  ut.openCheques.length > 0 &&
                    (0, K.jsxs)(K.Fragment, {
                      children: [
                        (0, K.jsx)(h.Copy, {
                          style: {
                            fontSize: 15,
                            lineHeight: 24,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: D.ledgerFa.openCheques,
                        }),
                        (0, K.jsx)(s.default, {
                          style: {
                            borderRadius: 16,
                            borderWidth: i.default.hairlineWidth,
                            borderColor: te.line,
                            backgroundColor: te.surface,
                            overflow: 'hidden',
                          },
                          children: ut.openCheques.map((e, t) => {
                            const n = (0, I.chequeTag)(e, $t),
                              o = 'late' === n.kind,
                              l =
                                'number' in e && e.number
                                  ? (0, z.L)('\u0634 {no}', {
                                      no: (0, z.localDigits)(e.number),
                                    })
                                  : '',
                              r =
                                'payee' in e && e.payee
                                  ? (0, z.L)(
                                      '\u0628\u0647 \u0646\u0627\u0645 {name}',
                                      { name: e.payee },
                                    )
                                  : '';
                            return (0, K.jsxs)(
                              s.default,
                              {
                                testID: 'contact-open-cheque',
                                style: {
                                  minHeight: 52,
                                  paddingHorizontal: 12,
                                  paddingVertical: 8,
                                  flexDirection: 'row-reverse',
                                  alignItems: 'center',
                                  gap: 10,
                                  borderTopWidth: t
                                    ? i.default.hairlineWidth
                                    : 0,
                                  borderColor: te.line,
                                },
                                children: [
                                  (0, K.jsx)(s.default, {
                                    accessibilityLabel:
                                      'receive' === e.direction
                                        ? v.kitFa.received
                                        : v.kitFa.paid,
                                    style: {
                                      width: 32,
                                      height: 32,
                                      borderRadius: 10,
                                      backgroundColor: te.soft,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    },
                                    children: (0, K.jsx)(f.Icon, {
                                      name:
                                        'receive' === e.direction
                                          ? 'down'
                                          : 'up',
                                      size: 16,
                                      color:
                                        'receive' === e.direction
                                          ? v.positive
                                          : te.danger,
                                    }),
                                  }),
                                  (0, K.jsxs)(s.default, {
                                    style: { flex: 1, minWidth: 0 },
                                    children: [
                                      (0, K.jsx)(h.Copy, {
                                        style: {
                                          fontSize: 14,
                                          lineHeight: 22,
                                          fontFamily: 'Vazirmatn_600SemiBold',
                                        },
                                        children: [
                                          void 0 !== e.amountToman
                                            ? (0, F.shopUnitText)(
                                                (0, z.L)(
                                                  '{amount} \u062a\u0648\u0645\u0627\u0646',
                                                  {
                                                    amount: (0, F.fullToman)(
                                                      e.amountToman,
                                                    ),
                                                  },
                                                ),
                                              )
                                            : '\u2014',
                                          l,
                                        ]
                                          .filter(Boolean)
                                          .join(' \xb7 '),
                                      }),
                                      (0, K.jsx)(h.Copy, {
                                        numberOfLines: 1,
                                        style: {
                                          fontSize: 11.5,
                                          lineHeight: 18,
                                          color: o ? te.danger : te.muted,
                                        },
                                        children: [
                                          (0, k.jalaliDay)(e.dueDate),
                                          (0, I.chequeDueNote)(n),
                                          e.bank || '',
                                          r,
                                        ]
                                          .filter(Boolean)
                                          .join(' \xb7 '),
                                      }),
                                    ],
                                  }),
                                  (0, K.jsx)(v.StatusChip, {
                                    testID: 'contact-cheque-tag',
                                    label: n.label,
                                    tone: n.tone,
                                  }),
                                ],
                              },
                              e.id,
                            );
                          }),
                        }),
                      ],
                    }),
                  pt.length > 0 &&
                    (0, K.jsx)(h.Copy, {
                      style: {
                        fontSize: 15,
                        lineHeight: 24,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: (0, z.L)(
                        '\u0633\u0627\u0628\u0642\u0647\u200c\u06cc \u0686\u06a9\u200c\u0647\u0627',
                      ),
                    }),
                ],
              }),
            !pt.length &&
              !('cheques' === Ie && ut.openCheques.length) &&
              (0, K.jsx)(h.Copy, {
                testID: 'book-empty',
                style: { fontSize: 13, lineHeight: 22, color: te.muted },
                children: Gt,
              }),
            Ft.map((e) =>
              (0, K.jsxs)(
                s.default,
                {
                  style: { gap: 6 },
                  children: [
                    (0, K.jsxs)(s.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        gap: 8,
                        paddingHorizontal: 4,
                      },
                      children: [
                        (0, K.jsx)(h.Copy, {
                          style: {
                            fontSize: 14,
                            lineHeight: 22,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: e.label,
                        }),
                        !nt.type &&
                          !nt.amount &&
                          (0, K.jsx)(h.Copy, {
                            numberOfLines: 1,
                            style: {
                              flexShrink: 1,
                              fontSize: 11.5,
                              lineHeight: 18,
                              color: te.muted,
                            },
                            children: (0, H.monthEndLine)(e.end),
                          }),
                      ],
                    }),
                    (0, K.jsx)(s.default, {
                      style: {
                        borderRadius: 16,
                        borderWidth: i.default.hairlineWidth,
                        borderColor: te.line,
                        backgroundColor: te.surface,
                        overflow: 'hidden',
                      },
                      children: e.rows.map((e, t) =>
                        (0, K.jsxs)(
                          s.default,
                          {
                            children: [
                              e.settled &&
                                (0, K.jsx)(s.default, {
                                  testID: 'book-settled',
                                  style: {
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 8,
                                    paddingHorizontal: 12,
                                    paddingVertical: 7,
                                    backgroundColor: te.success + '14',
                                    borderTopWidth: t
                                      ? i.default.hairlineWidth
                                      : 0,
                                    borderColor: te.line,
                                  },
                                  children: (0, K.jsx)(h.Copy, {
                                    style: {
                                      flex: 1,
                                      fontSize: 13,
                                      lineHeight: 21,
                                      color: te.success,
                                      fontFamily: 'Vazirmatn_700Bold',
                                    },
                                    children: (0, z.L)(
                                      '\u062a\u0633\u0648\u06cc\u0647 \u0634\u062f \u2713 ({day})',
                                      { day: (0, H.dayText)(e.occurredAt, ie) },
                                    ),
                                  }),
                                }),
                              (0, K.jsx)(J, {
                                row: e,
                                first: !t && !e.settled,
                                timeZone: ie,
                                busy: Je === e.key,
                                onOpen:
                                  e.saleId || e.purchaseId
                                    ? () => {
                                        jt(e);
                                      }
                                    : !tt && (0, B.rowFix)(e)
                                      ? () => he(e)
                                      : (0, W.userNote)(e)
                                        ? () => Ye(e)
                                        : void 0,
                                onNote: (0, W.userNote)(e)
                                  ? () => Ye(e)
                                  : void 0,
                                onPrint:
                                  'invoices' === Ie &&
                                  (e.saleId || e.purchaseId)
                                    ? () => {
                                        jt(e);
                                      }
                                    : void 0,
                              }),
                            ],
                          },
                          e.key,
                        ),
                      ),
                    }),
                  ],
                },
                e.label,
              ),
            ),
            Tt &&
              (0, K.jsx)(v.SmallKey, {
                testID: 'book-show-older',
                kind: 'text',
                label: (0, z.L)(
                  '\u0646\u0645\u0627\u06cc\u0634 \u062f\u0648\u0631\u0647\u200c\u0647\u0627\u06cc \u0642\u0628\u0644',
                ),
                onPress: () => Ee(!0),
              }),
            !Tt &&
              !!bt &&
              (0, K.jsx)(v.SmallKey, {
                testID: 'book-more',
                kind: 'text',
                label: D.ledgerFa.loadMore,
                onPress: async function () {
                  if (!bt || !at) return;
                  const t = at,
                    n = bt;
                  try {
                    const o = await (0, x.readContact)(e, Q, n, nt);
                    if (st.current !== t) return;
                    const i = new Set((yt?.rows || []).map((e) => e.key)),
                      s = {
                        key: t,
                        rows: [
                          ...(yt?.rows || []),
                          ...(o.rows || []).filter((e) => !i.has(e.key)),
                        ],
                        cursor: o.next,
                      };
                    (U.set(t, s), ft(s), ke(''));
                  } catch (e) {
                    st.current === t && ke((0, u.message)(e));
                  }
                },
              }),
            !!xt &&
              (0, K.jsx)(h.Copy, {
                accessibilityRole: 'alert',
                style: { color: te.danger },
                children: xt,
              }),
            (0, K.jsx)(y.Sheet, {
              visible: be,
              title: Lt.name,
              onClose: () => xe(!1),
              children: (0, K.jsxs)(s.default, {
                style: { gap: 2 },
                children: [
                  !tt &&
                    (0, K.jsx)(v.SheetRow, {
                      testID: 'contact-menu-edit',
                      icon: 'edit',
                      title: v.kitFa.menuEdit,
                      hint: (0, z.L)(
                        '\u0646\u0627\u0645\u060c \u062a\u0644\u0641\u0646\u060c \u0646\u0648\u0639\u060c \u06cc\u0627\u062f\u062f\u0627\u0634\u062a',
                      ),
                      onPress: () => {
                        (xe(!1), je('all'));
                      },
                    }),
                  !!Lt.phone &&
                    (0, K.jsx)(v.SheetRow, {
                      testID: 'contact-menu-call',
                      icon: 'phone',
                      title: v.kitFa.menuCall,
                      hint: (0, T.phoneText)(Lt.phone),
                      onPress: () => {
                        (xe(!1),
                          n.default.openURL(
                            'tel:' + Lt.phone.replace(/[^0-9+]/g, ''),
                          ));
                      },
                    }),
                  !tt &&
                    (0, K.jsx)(v.SheetRow, {
                      testID: 'contact-menu-archive',
                      icon: 'close',
                      danger: !0,
                      title: v.kitFa.menuArchive,
                      hint: (0, z.L)(
                        '\u062f\u0641\u062a\u0631 \u062d\u0633\u0627\u0628\u0634 \u0646\u06af\u0647 \u062f\u0627\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f',
                      ),
                      onPress: function () {
                        if (!ut) return;
                        const t = ut.contact,
                          n = async () => {
                            try {
                              (await (0, x.archiveContact)(e, t), X());
                            } catch (e) {
                              ke((0, u.message)(e));
                            }
                          };
                        (xe(!1),
                          $e({
                            title: D.ledgerFa.archiveContact,
                            text: D.ledgerFa.archiveConfirm,
                            ok: D.ledgerFa.archiveContact,
                            run: () => {
                              n();
                            },
                          }));
                      },
                    }),
                ],
              }),
            }),
            (0, K.jsx)(j.ContactForm, {
              shop: e,
              visible: !!ge,
              editing: Ht,
              focusNote: 'note' === ge,
              onClose: () => je(!1),
              onSaved: () => {
                je(!1);
                for (const t of [
                  (0, O.scoped)(e.id, 'contacts:'),
                  (0, O.scoped)(e.id, 'contact:' + Lt.id),
                ])
                  t && O.swrStore.invalidate(t);
                gt();
              },
            }),
            (0, K.jsx)(P.SettleSheet, {
              shop: e,
              contact: Lt,
              visible: Se,
              balance: wt,
              open: It,
              openCheques: ut.openCheques,
              timeZone: ie,
              onClose: () => Ce(!1),
              onStale: () => {
                gt();
              },
              onDone: (e) => {
                (Ce(!1),
                  De('book'),
                  We('all'),
                  (0, p.showToast)(
                    (0, z.L)(
                      '\u062a\u0633\u0648\u06cc\u0647 \u062b\u0628\u062a \u0634\u062f.',
                    ),
                  ),
                  Et(e));
              },
            }),
            (0, K.jsx)(S.AddMenu, {
              visible: ce,
              name: Lt.name,
              canInvoice: At,
              onClose: () => de(!1),
              onPick: function (e) {
                (we(''),
                  'invoice' === e
                    ? $
                      ? $(Ht)
                      : M.basketEntries.open({
                          contactId: Lt.id,
                          name: Lt.name,
                          mode: 'supplier' === Lt.kind ? 'receive' : 'sale',
                        })
                    : 'statement' === e
                      ? pe(!0)
                      : 'debt' === e
                        ? re({})
                        : se({ direction: e }));
              },
            }),
            (0, K.jsx)(S.PaymentDialog, {
              shop: e,
              contact: Lt,
              direction: ae?.direction ?? null,
              initial: ae?.fix
                ? {
                    method: 'card' === ae.fix.method ? 'card' : 'cash',
                    amountToman: Math.abs(ae.fix.amountToman),
                    note: (0, W.userNote)(ae.fix) || void 0,
                  }
                : void 0,
              afterSave: Kt(ae?.fix),
              onClose: () => se(null),
              onDone: () => {
                const e = !!ae?.fix,
                  t = 'in' === ae?.direction;
                (se(null),
                  Et(
                    e
                      ? (0, z.L)('\u0627\u0635\u0644\u0627\u062d \u0634\u062f.')
                      : t
                        ? D.ledgerFa.receiveSaved
                        : D.ledgerFa.paymentSaved,
                  ));
              },
            }),
            (0, K.jsx)(S.DebtDialog, {
              shop: e,
              contact: Lt,
              visible: !!le,
              initial: le?.fix
                ? {
                    direction: 'debt_owed' === le.fix.kind ? 'owed' : 'owe',
                    amountToman: Math.abs(le.fix.amountToman),
                    note: (0, W.userNote)(le.fix) || void 0,
                  }
                : void 0,
              afterSave: Kt(le?.fix),
              onClose: () => re(null),
              onDone: () => {
                const e = !!le?.fix;
                (re(null),
                  Et(
                    e
                      ? (0, z.L)('\u0627\u0635\u0644\u0627\u062d \u0634\u062f.')
                      : (0, z.L)('\u062b\u0628\u062a \u0634\u062f.'),
                  ));
              },
            }),
            (0, K.jsx)(S.RowFixSheet, {
              row: ue,
              timeZone: ie,
              canWrite: !tt,
              onClose: () => he(null),
              onFix: function (e) {
                const t = (0, B.rowFix)(e);
                'payment' === t
                  ? se({
                      direction: 'payment_in' === e.kind ? 'in' : 'out',
                      fix: e,
                    })
                  : 'debt' === t && re({ fix: e });
              },
              onRemove: function (t) {
                const n = (0, B.rowFix)(t);
                if (!n) return;
                const o = async () => {
                  try {
                    ('payment' === n
                      ? await (0, x.reversePayment)(e, t.paymentId)
                      : await (0, x.reverseDebt)(e, Lt.id, t.debtId),
                      Et(
                        (0, z.L)(
                          '\u0631\u062f\u06cc\u0641 \u062d\u0630\u0641 \u0634\u062f.',
                        ),
                      ));
                  } catch (e) {
                    ke((0, u.message)(e));
                  }
                };
                $e({
                  title: (0, z.L)(
                    '\u062d\u0630\u0641 \u0627\u06cc\u0646 \u0631\u062f\u06cc\u0641\u061f',
                  ),
                  text: (0, F.shopUnitText)(
                    (0, z.L)(
                      '{what}\u060c {amount} \u062a\u0648\u0645\u0627\u0646\u060c \u0627\u0632 \u0645\u0627\u0646\u062f\u0647 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u062f. \u062e\u0648\u062f \u0631\u062f\u06cc\u0641 \u0648 \u0628\u0631\u06af\u0634\u062a\u0634 \u062f\u0631 \u062f\u0641\u062a\u0631 \u0645\u06cc\u200c\u0645\u0627\u0646\u0646\u062f.',
                      {
                        what: (0, H.rowTitle)(t),
                        amount: (0, F.fullToman)(Math.abs(t.amountToman)),
                      },
                    ),
                  ),
                  ok: (0, z.L)('\u062d\u0630\u0641'),
                  run: () => {
                    o();
                  },
                });
              },
              onNote: Ye,
            }),
            (0, K.jsx)(C.ChequeSheet, {
              shop: e,
              visible: me,
              contact: Lt,
              direction: 'supplier' === Lt.kind ? 'out' : 'in',
              onClose: () => fe(!1),
              onDone: () => {
                (fe(!1), we(v.kitFa.chequeSaved), gt());
              },
            }),
            (0, K.jsxs)(r.PageModal, {
              visible: !!Ze,
              animationType: 'slide',
              onRequestClose: St,
              children: [
                (0, K.jsx)(s.default, {
                  style: {
                    flex: 1,
                    backgroundColor: te.bg,
                    padding: 16,
                    paddingTop: Math.max(16, ne.top),
                    paddingBottom: Math.max(16, ne.bottom),
                    gap: 12,
                  },
                  children:
                    Ze &&
                    (0, K.jsx)(w.Receipt, {
                      document: Ze,
                      shopName: e.name || '',
                      onClose: St,
                    }),
                }),
                (0, K.jsx)(p.ToastHost, {}),
              ],
            }),
          ],
        });
      }));
    var t = _r(d[0]),
      n = e(_r(d[1])),
      o = e(_r(d[2])),
      i = e(_r(d[3])),
      s = e(_r(d[4])),
      l = e(_r(d[5])),
      r = _r(d[6]),
      c = _r(d[7]),
      u = _r(d[8]),
      h = _r(d[9]),
      f = _r(d[10]),
      y = _r(d[11]),
      p = _r(d[12]),
      b = _r(d[13]),
      x = _r(d[14]),
      j = _r(d[15]),
      S = _r(d[16]),
      C = _r(d[17]),
      L = _r(d[18]),
      w = _r(d[19]),
      v = _r(d[20]),
      k = _r(d[21]),
      I = _r(d[22]),
      D = _r(d[23]),
      z = _r(d[24]),
      T = _r(d[25]),
      F = _r(d[26]),
      H = _r(d[27]),
      R = _r(d[28]),
      P = _r(d[29]),
      W = _r(d[30]),
      q = _r(d[31]),
      O = _r(d[32]),
      _ = _r(d[33]),
      B = _r(d[34]),
      M = _r(d[35]),
      V = _r(d[36]),
      N = _r(d[37]),
      A = _r(d[38]),
      E = _r(d[39]),
      K = _r(d[40]);
    const U = new Map(),
      Z = (e, t) => {
        try {
          return new Date(e).toLocaleDateString((0, z.dateLocale)(), {
            month: 'long',
            year: 'numeric',
            timeZone: t,
          });
        } catch {
          return e.slice(0, 7);
        }
      },
      G = (e, t) => {
        try {
          const n = new Intl.DateTimeFormat((0, z.dateLocale)(), {
              month: 'long',
              year: 'numeric',
              timeZone: t,
            }).formatToParts(new Date(e)),
            o = n.find((e) => 'month' === e.type)?.value,
            i = n.find((e) => 'year' === e.type)?.value;
          return o && i ? o + ' ' + i : Z(e, t);
        } catch {
          return e.slice(0, 7);
        }
      };
    function J({
      row: e,
      first: t,
      timeZone: n,
      busy: l,
      onOpen: r,
      onNote: c,
      onPrint: u,
    }) {
      const { colors: y } = (0, b.useTheme)(),
        p = !e.posted,
        x = e.amountToman > 0,
        j = p ? y.muted : x ? v.positive : y.accent,
        S =
          'sale' === e.kind || 'purchase' === e.kind || 'adjustment' === e.kind
            ? 'receipt'
            : e.cheque
              ? 'cheque'
              : e.amountToman < 0
                ? 'down'
                : 'up',
        C = e.note === R.SETTLE_NOTE || e.note === R.FORGIVE_NOTE,
        L = C ? '' : (0, W.userNote)(e),
        w = [
          (0, H.dayText)(e.occurredAt, n),
          C
            ? (0, z.L)(e.note)
            : (0, H.rowDetail)(L ? { ...e, note: void 0 } : e),
        ]
          .filter(Boolean)
          .join(' \xb7 '),
        k = (0, K.jsxs)(K.Fragment, {
          children: [
            (0, K.jsx)(s.default, {
              style: {
                width: 36,
                height: 36,
                borderRadius: 11,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: p ? y.soft : y.accentSoft,
              },
              children: (0, K.jsx)(f.Icon, {
                name: S,
                size: 17,
                color: p ? y.muted : y.accent,
              }),
            }),
            (0, K.jsxs)(s.default, {
              style: { flex: 1, minWidth: 0 },
              children: [
                (0, K.jsxs)(s.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 6,
                  },
                  children: [
                    (0, K.jsx)(h.Copy, {
                      numberOfLines: 2,
                      style: {
                        flexShrink: 1,
                        fontSize: 14,
                        lineHeight: 22,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: (0, H.rowTitle)(e),
                    }),
                    C &&
                      (0, K.jsx)(v.StatusChip, {
                        testID: 'book-row-settle-tag',
                        label: (0, z.L)('\u062a\u0633\u0648\u06cc\u0647'),
                        tone: 'wait',
                      }),
                  ],
                }),
                (0, K.jsx)(h.Copy, {
                  numberOfLines: 2,
                  style: { fontSize: 11.5, lineHeight: 18, color: y.muted },
                  children: w,
                }),
                !!L && c && (0, K.jsx)(W.NoteTag, { onPress: c }),
              ],
            }),
            u &&
              (0, K.jsx)(o.default, {
                testID: 'book-row-print',
                accessibilityRole: 'button',
                accessibilityLabel: (0, z.L)(
                  '\u0686\u0627\u067e \u0641\u0627\u06a9\u062a\u0648\u0631',
                ),
                hitSlop: 6,
                onPress: u,
                style: ({ pressed: e }) => ({
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: y.soft,
                  opacity: e ? 0.7 : 1,
                }),
                children: (0, K.jsx)(f.Icon, {
                  name: 'receipt',
                  size: 15,
                  color: y.muted,
                }),
              }),
            (0, K.jsxs)(s.default, {
              style: {
                flexShrink: 0,
                maxWidth: '46%',
                alignItems: 'flex-start',
                gap: 1,
              },
              children: [
                (0, K.jsx)(h.Copy, {
                  numberOfLines: 1,
                  adjustsFontSizeToFit: !0,
                  minimumFontScale: 0.75,
                  style: {
                    fontSize: 14,
                    lineHeight: 22,
                    fontFamily: 'Vazirmatn_700Bold',
                    color: j,
                  },
                  children: p
                    ? e.cheque
                      ? (0, F.fullToman)(e.cheque.amountToman)
                      : ''
                    : (0, H.rowAmountWords)(e),
                }),
                (0, K.jsx)(h.Copy, {
                  numberOfLines: 2,
                  style: { fontSize: 11, lineHeight: 17, color: y.muted },
                  children: p
                    ? 'cheque_received' === e.kind &&
                      'pending' === e.cheque?.status
                      ? (0, z.L)(
                          '\u0628\u062f\u0648\u0646 \u0627\u062b\u0631 \u062a\u0627 \u0648\u0635\u0648\u0644',
                        )
                      : (0, z.L)(
                          '\u0628\u062f\u0648\u0646 \u0627\u062b\u0631 \u062f\u0631 \u0645\u0627\u0646\u062f\u0647',
                        )
                    : (0, H.rowBalance)(e.balanceToman),
                }),
              ],
            }),
          ],
        }),
        I = {
          minHeight: 56,
          paddingHorizontal: 12,
          paddingVertical: 8,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 10,
          borderTopWidth: t ? 0 : i.default.hairlineWidth,
          borderColor: y.line,
          opacity: l ? 0.5 : 1,
        };
      return r
        ? (0, K.jsx)(o.default, {
            testID: 'book-row',
            accessibilityRole: 'button',
            accessibilityLabel: (0, H.rowTitle)(e),
            onPress: r,
            style: ({ pressed: e }) => [
              I,
              { backgroundColor: e ? y.soft : 'transparent' },
            ],
            children: k,
          })
        : (0, K.jsx)(s.default, { testID: 'book-row', style: I, children: k });
    }
  },
  891,
  [
    2, 210, 232, 17, 99, 257, 515, 342, 415, 407, 385, 539, 525, 382, 519, 889,
    892, 656, 895, 801, 517, 529, 530, 580, 311, 438, 435, 475, 444, 899, 900,
    534, 489, 521, 890, 685, 518, 526, 897, 520, 338,
  ],
);
