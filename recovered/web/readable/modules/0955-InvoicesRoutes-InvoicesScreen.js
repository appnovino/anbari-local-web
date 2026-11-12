// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 955; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.InvoicesRoutes = function ({ shop: e }) {
        const { colors: n } = (0, C.useTheme)(),
          s = (0, p.useSafeInsets)(),
          l = (0, u.useDesktop)(),
          [r, m] = (0, t.useState)(null);
        if (
          ((0, t.useEffect)(() => R.invoicesEntries.subscribe(m), []),
          (0, t.useEffect)(() => {
            e || R.invoicesEntries.close();
          }, [e?.id]),
          !r || !e)
        )
          return null;
        const f = l ? 28 : 14;
        return (0, $.jsx)(c.PageModal, {
          visible: !0,
          animationType: 'slide',
          onRequestClose: () => R.invoicesEntries.close(),
          desk: {
            id: 'invoices',
            title: (0, L.L)('\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627'),
          },
          children: (0, $.jsxs)(i.default, {
            behavior: y.keyboardBehavior,
            style: { flex: 1, backgroundColor: n.bg },
            children: [
              (0, v.demoActive)() &&
                (0, $.jsx)(o.default, {
                  style: { paddingHorizontal: f, paddingTop: s.top + 10 },
                  children: (0, $.jsx)(S.DemoBanner, {}),
                }),
              (0, $.jsxs)(o.default, {
                style: [
                  x.common.between,
                  {
                    paddingHorizontal: f,
                    paddingTop: (0, v.demoActive)()
                      ? 10
                      : s.top + (l ? 24 : 14),
                  },
                  l && {
                    width: '100%',
                    maxWidth: (0, d.pageColumnWidth)(!0),
                    alignSelf: 'center',
                  },
                ],
                children: [
                  (0, $.jsx)(x.Copy, {
                    accessibilityRole: 'header',
                    style: {
                      fontSize: 20,
                      lineHeight: 30,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: (0, L.L)(
                      '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u062b\u0628\u062a\u200c\u0634\u062f\u0647',
                    ),
                  }),
                  (0, $.jsx)(h.PageClose, {
                    testID: 'invoices-close',
                    title: (0, L.L)(
                      '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627',
                    ),
                    onPress: () => R.invoicesEntries.close(),
                  }),
                ],
              }),
              (0, $.jsx)(G, { shop: e, route: r }),
              (0, $.jsx)(j.ToastHost, {}),
            ],
          }),
        });
      }),
      (_e.InvoicesScreen = G));
    var t = _r(_d[0]),
      i = e(_r(_d[1]));
    _r(_d[2]);
    var n = e(_r(_d[3])),
      s = e(_r(_d[4])),
      o = e(_r(_d[5])),
      l = e(_r(_d[6])),
      r = _r(_d[7]),
      c = _r(_d[8]),
      d = _r(_d[9]),
      u = _r(_d[10]),
      h = _r(_d[11]),
      m = _r(_d[12]),
      p = _r(_d[13]),
      y = _r(_d[14]),
      f = _r(_d[15]),
      x = _r(_d[16]),
      b = _r(_d[17]),
      j = _r(_d[18]),
      S = _r(_d[19]),
      v = _r(_d[20]),
      C = _r(_d[21]),
      L = _r(_d[22]),
      z = _r(_d[23]),
      w = _r(_d[24]),
      k = _r(_d[25]),
      I = _r(_d[26]),
      D = _r(_d[27]),
      H = _r(_d[28]),
      T = _r(_d[29]),
      W = _r(_d[30]),
      R = _r(_d[31]),
      V = _r(_d[32]),
      B = _r(_d[33]),
      O = _r(_d[34]),
      P = _r(_d[35]),
      A = _r(_d[36]),
      _ = _r(_d[37]),
      F = _r(_d[38]),
      N = _r(_d[39]),
      M = _r(_d[40]),
      E = _r(_d[41]),
      K = _r(_d[42]),
      $ = _r(_d[43]);
    const q = 50,
      Z = (e, t) =>
        e
          ? t
            ? [...e.filter((e) => !t.some((t) => t.day === e.day)), ...t]
            : e
          : t;
    function G({ shop: e, route: i = {} }) {
      const { colors: r } = (0, C.useTheme)(),
        h = (0, m.useSafeAreaInsets)(),
        p = e.timezone || 'Asia/Tehran',
        S = (0, z.expensesAllowedFor)(e),
        v = (0, u.useDesktop)(),
        [K, G] = (0, t.useState)(i.contactId ? 'sale' : 'all'),
        [J, Q] = (0, t.useState)(''),
        [X, Y] = (0, t.useState)(
          i.contactId ? { id: i.contactId, name: i.contactName || '' } : null,
        ),
        [ee, te] = (0, t.useState)('all'),
        [ie, ne] = (0, t.useState)([]),
        [se, oe] = (0, t.useState)({ text: '', done: !1, error: '' }),
        [le, ae] = (0, t.useState)(null),
        [re, ce] = (0, t.useState)('purchase' !== K),
        [de, ue] = (0, t.useState)(!1),
        [he, me] = (0, t.useState)(''),
        [pe, ye] = (0, t.useState)(null),
        [fe, ge] = (0, t.useState)(''),
        [xe, be] = (0, t.useState)(''),
        je = (0, t.useRef)(0),
        [Se, ve] = (0, t.useState)(null),
        [Ce, Le] = (0, t.useState)('sale' !== K),
        [ze, we] = (0, t.useState)(!1),
        [ke, Ie] = (0, t.useState)(''),
        De = (0, t.useRef)(0),
        [He, Te] = (0, t.useState)(null),
        We = (0, u.useDesktop)(),
        { width: Re } = (0, l.default)(),
        [Ve, Be] = (0, t.useState)(() => new Set()),
        [Oe, Pe] = (0, t.useState)(''),
        [Ae, Fe] = (0, t.useState)(0),
        Ne = (0, t.useRef)(!1),
        Me = { contactId: X?.id, method: (0, H.filterMethod)(ee) },
        Ee = JSON.stringify(Me),
        Ke = !!X && S,
        [$e, qe] = (0, t.useState)(0),
        Ze = 'purchase' !== K,
        Ge = 'sale' !== K;
      async function Ue() {
        const t = ++je.current;
        (ce(!0), me(''));
        try {
          const i = await (0, I.listInvoices)(e, { ...Me, limit: q });
          t === je.current && ae({ ...i, key: Ee });
        } catch (e) {
          t === je.current && (ae(null), me((0, f.message)(e)));
        } finally {
          t === je.current && ce(!1);
        }
      }
      async function Je() {
        if (!le?.next || de || re || le.key !== Ee) return;
        const t = je.current,
          i = le.key;
        (ue(!0), me(''));
        try {
          const n = await (0, I.listInvoices)(e, {
            ...Me,
            limit: q,
            ...le.next,
          });
          t === je.current &&
            ae((e) =>
              e && e.key === i
                ? {
                    ...e,
                    sales: [
                      ...e.sales,
                      ...n.sales.filter(
                        (t) => !e.sales.some((e) => e.id === t.id),
                      ),
                    ],
                    days: Z(e.days, n.days),
                    next: n.next,
                  }
                : e,
            );
        } catch (e) {
          t === je.current && me((0, f.message)(e));
        } finally {
          ue(!1);
        }
      }
      async function Qe() {
        const t = ++De.current;
        (Le(!0), Ie(''));
        try {
          const i = await (0, I.listPurchases)(e, { limit: q });
          t === De.current && ve(i);
        } catch (e) {
          t === De.current && (ve(null), Ie((0, f.message)(e)));
        } finally {
          t === De.current && Le(!1);
        }
      }
      async function Xe() {
        if (!Se?.next || ze || Ce) return;
        const t = De.current;
        (we(!0), Ie(''));
        try {
          const i = await (0, I.listPurchases)(e, { limit: q, ...Se.next });
          t === De.current &&
            ve((e) =>
              e
                ? {
                    purchases: [
                      ...e.purchases,
                      ...i.purchases.filter(
                        (t) => !e.purchases.some((e) => e.id === t.id),
                      ),
                    ],
                    days: Z(e.days, i.days) || [],
                    next: i.next,
                  }
                : e,
            );
        } catch (e) {
          t === De.current && Ie((0, f.message)(e));
        } finally {
          we(!1);
        }
      }
      async function Ye(t) {
        try {
          const i = await (0, I.readContact)(e, t);
          Y((e) =>
            e && e.id === t ? { ...e, balance: i.totals.balanceToman } : e,
          );
        } catch {}
      }
      function et(e) {
        (Y(e), Q(''), ne([]), 'sale' !== K && G('sale'));
      }
      function tt(e) {
        et({ id: e.id, name: e.name, balance: e.balanceToman });
      }
      ((0, t.useEffect)(() => {
        if (Ze) return Ke ? (je.current++, void ce(!1)) : void Ue();
      }, [e.id, X?.id, ee, Ke, Ze]),
        (0, t.useEffect)(() => {
          Ge && Qe();
        }, [e.id, Ge]),
        (0, t.useEffect)(() => {
          X && S && !Ke && Ye(X.id);
        }, [X?.id]),
        (0, t.useEffect)(() => {
          const t = J.trim();
          if (!S || X || !t)
            return (ne([]), void oe({ text: '', done: !1, error: '' }));
          let i = !0;
          oe({ text: t, done: !1, error: '' });
          const n = setTimeout(() => {
            (0, I.listContacts)(e, { q: t })
              .then((e) => {
                i &&
                  (ne(e.contacts.slice(0, 6)),
                  oe({ text: t, done: !0, error: '' }));
              })
              .catch((e) => {
                i &&
                  (ne([]), oe({ text: t, done: !0, error: (0, f.message)(e) }));
              });
          }, 250);
          return () => {
            ((i = !1), clearTimeout(n));
          };
        }, [J, X?.id, e.id, S]));
      const it = (0, D.useSwr)(
        S ? (0, D.scoped)(e.id, 'invoice-people') : null,
        () => (0, I.listTopContacts)(e),
      );
      async function nt(t) {
        if (fe) return;
        (ge(t.id), be(''), We && Pe(t.id));
        const i = pe;
        try {
          (ye(await (0, I.getSale)(e, t.id)),
            We && i && i.id !== t.id && ot(i));
        } catch (e) {
          be(
            (0, L.L)(
              '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0627\u0632 \u0646\u0634\u062f: {reason}',
              { reason: (0, f.message)(e) },
            ),
          );
        } finally {
          ge('');
        }
      }
      async function st() {
        const e = pe;
        (ye(null), Pe(''), e && (await ot(e)));
      }
      async function ot(t) {
        if (Ke) return void qe((e) => e + 1);
        const i = je.current,
          n = Ee;
        X && S && Ye(X.id);
        try {
          const s = await (0, I.listInvoices)(e, {
              ...Me,
              limit: 5,
              before: new Date(Date.parse(t.occurredAt) + 1).toISOString(),
            }),
            o = s.sales.find((e) => e.id === t.id),
            l = X ? await (0, I.listInvoices)(e, { ...Me, limit: 1 }) : null;
          i === je.current &&
            ae((e) =>
              e && e.key === n
                ? {
                    ...e,
                    sales: o
                      ? e.sales.map((e) => (e.id === o.id ? { ...e, ...o } : e))
                      : e.sales,
                    days: Z(e.days, s.days),
                    ...(l?.summary ? { summary: l.summary } : {}),
                  }
                : e,
            );
        } catch {}
      }
      function lt(e) {
        if (!X) return;
        const t = X.id;
        (R.invoicesEntries.close(),
          setTimeout(
            () =>
              P.ledgerEntries.open({
                screen: 'contact',
                contactId: t,
                ...(e ? { statement: !0 } : {}),
              }),
            0,
          ));
      }
      const at = Ke || le?.key !== Ee ? [] : le?.sales || [],
        rt = Ze && le && le.key === Ee ? { rows: at, more: !!le.next } : null,
        ct = Ge && Se ? { rows: Se.purchases, more: !!Se.next } : null,
        dt = (0, t.useMemo)(
          () => (0, T.mergeInOut)(rt, ct),
          [rt?.rows, rt?.more, ct?.rows, ct?.more],
        ),
        ut = (0, t.useMemo)(
          () =>
            'sale' === K
              ? (0, H.groupInvoiceDays)(at, p, Date.now(), !!X, le?.days).map(
                  (e) => ({
                    ...e,
                    rows: e.rows.map((e) => ({
                      kind: 'sale',
                      id: e.id,
                      occurredAt: e.occurredAt,
                      sale: e,
                    })),
                  }),
                )
              : (0, T.groupInOutDays)(dt.rows, p, Date.now(), {
                  sales: le?.days,
                  purchases: Se?.days,
                }),
          [K, at, dt, p, X, le?.days, Se?.days],
        ),
        ht = X ? le?.summary : void 0,
        mt = X?.balance && X.balance > 0 ? X.balance : 0,
        pt = (Ze && (re || le?.key !== Ee)) || (Ge && Ce),
        yt =
          'all' === K
            ? (re && !le) || (Ce && !Se)
            : 'sale' === K
              ? re && !le
              : Ce && !Se,
        ft = 'sale' === K ? (Ke || !le?.next || pt ? [] : ['sale']) : dt.more,
        gt = de || ze,
        xt = { fontSize: 12.5, lineHeight: 19, color: r.muted },
        bt = (0, T.paymentChips)().find((e) => e.value === ee)?.label || '',
        jt = {
          success: { bg: r.success + '1f', fg: r.success },
          warning: { bg: r.warningSoft, fg: r.warning },
          cheque: { bg: r.accentSoft, fg: r.accent },
          muted: { bg: r.soft, fg: r.muted },
        },
        St = !(
          yt ||
          ut.length ||
          pt ||
          ('sale' === K && Ke) ||
          ('purchase' === K ? !Se : 'sale' === K ? !le : !le && !Se)
        ),
        vt =
          'purchase' === K
            ? (0, L.L)(
                '\u0647\u0646\u0648\u0632 \u062e\u0631\u06cc\u062f\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647\u061b \u0647\u0631 \u0628\u0627\u0631 \u06a9\u0627\u0644\u0627\u06cc \u0631\u0633\u06cc\u062f\u0647 \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646\u06cc\u062f\u060c \u0627\u06cc\u0646\u062c\u0627 \u0645\u06cc\u200c\u0622\u06cc\u062f.',
              )
            : 'sale' !== K || (!X && 'all' === ee)
              ? 'sale' === K
                ? (0, L.L)(
                    '\u0647\u0646\u0648\u0632 \u0641\u0631\u0648\u0634\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647',
                  )
                : (0, L.L)(
                    '\u0647\u0646\u0648\u0632 \u0641\u0627\u06a9\u062a\u0648\u0631\u06cc \u0646\u06cc\u0633\u062a',
                  )
              : (0, L.L)(
                  '\u0641\u0627\u06a9\u062a\u0648\u0631\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f',
                ),
        Ct = (0, T.mayAddInvoicePhoto)(e);
      function Lt(e, t) {
        const i = (0, H.invoicePill)(e),
          l = jt[i.tone],
          c = e.issued || I.issuedSales.has(e.id),
          d = X ? (0, H.invoiceTitle)(e) : (0, H.invoiceBuyer)(e),
          u = (0, T.issuedMark)(c, e.corrected);
        return (0, $.jsxs)(
          n.default,
          {
            testID: 'invoice-row',
            accessibilityRole: 'button',
            accessibilityLabel: `${d} ${(0, H.invoiceSub)(e, p, !X)}${u ? ' ' + u.text : ''}`,
            disabled: !!fe,
            onPress: () => {
              nt(e);
            },
            style: ({ pressed: i }) => [
              x.common.row,
              {
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignItems: 'flex-start',
                borderTopWidth: t ? 0 : s.default.hairlineWidth,
                borderColor: r.line,
                backgroundColor: i ? r.soft : 'transparent',
                opacity: fe === e.id ? 0.5 : 1,
              },
            ],
            children: [
              (0, $.jsx)(o.default, {
                style: {
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: r.accentSoft,
                },
                children: (0, $.jsx)(x.Copy, {
                  style: {
                    fontSize: 15,
                    lineHeight: 22,
                    color: r.accent,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, H.invoiceInitial)(
                    X ? X.name : e.contactName || e.buyerName,
                  ),
                }),
              }),
              (0, $.jsxs)(o.default, {
                style: { flex: 1, minWidth: 0 },
                children: [
                  (0, $.jsx)(x.Copy, {
                    numberOfLines: 1,
                    style: {
                      fontSize: 15,
                      lineHeight: 23,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: d,
                  }),
                  (0, $.jsx)(x.Copy, {
                    numberOfLines: 1,
                    style: { fontSize: 12, lineHeight: 19, color: r.muted },
                    children: (0, H.invoiceSub)(e, p, !X),
                  }),
                  u &&
                    (0, $.jsx)(x.Copy, {
                      testID: u.issued
                        ? 'invoice-issued'
                        : 'invoice-not-issued',
                      numberOfLines: 1,
                      style: {
                        fontSize: 11.5,
                        lineHeight: 19,
                        color: u.issued ? r.accent : r.muted,
                        fontFamily: u.issued
                          ? 'Vazirmatn_600SemiBold'
                          : 'Vazirmatn_400Regular',
                      },
                      children: u.text,
                    }),
                ],
              }),
              (0, $.jsxs)(o.default, {
                style: {
                  flexShrink: 0,
                  maxWidth: '46%',
                  alignItems: 'flex-start',
                  gap: 3,
                },
                children: [
                  void 0 !== e.totalToman &&
                    (0, $.jsx)(x.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 14.5,
                        lineHeight: 22,
                        fontFamily: 'Vazirmatn_700Bold',
                        color: e.corrected ? r.muted : r.text,
                        textDecorationLine: e.corrected
                          ? 'line-through'
                          : 'none',
                      },
                      children: (0, H.invoiceToman)(e.totalToman),
                    }),
                  (0, $.jsx)(o.default, {
                    style: {
                      paddingHorizontal: 7,
                      paddingVertical: 1,
                      borderRadius: 7,
                      backgroundColor: l.bg,
                      maxWidth: '100%',
                    },
                    children: (0, $.jsx)(x.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 11,
                        lineHeight: 18,
                        color: l.fg,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: i.text,
                    }),
                  }),
                ],
              }),
            ],
          },
          's' + e.id,
        );
      }
      function zt(e, t) {
        const i = (0, T.purchaseAmount)(e),
          l = (0, T.photoMark)(e),
          c = (0, T.purchaseBy)(e),
          d = (0, T.purchaseName)(e);
        return (0, $.jsxs)(
          n.default,
          {
            testID: 'purchase-row',
            accessibilityRole: 'button',
            accessibilityLabel: [
              d,
              (0, T.purchaseSub)(e, p),
              c,
              l?.attached ? l.text : '',
            ]
              .filter(Boolean)
              .join(' '),
            onPress: () => Te({ row: e, adding: !1 }),
            style: ({ pressed: e }) => [
              x.common.row,
              {
                paddingHorizontal: 12,
                paddingVertical: 11,
                alignItems: 'flex-start',
                borderTopWidth: t ? 0 : s.default.hairlineWidth,
                borderColor: r.line,
                backgroundColor: e ? r.soft : 'transparent',
              },
            ],
            children: [
              (0, $.jsx)(o.default, {
                style: {
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: r.success + '1f',
                },
                children: (0, $.jsx)(b.Icon, {
                  name: 'inventory',
                  size: 19,
                  color: r.success,
                }),
              }),
              (0, $.jsxs)(o.default, {
                style: { flex: 1, minWidth: 0 },
                children: [
                  (0, $.jsx)(x.Copy, {
                    numberOfLines: 1,
                    style: {
                      fontSize: 15,
                      lineHeight: 23,
                      fontFamily: 'Vazirmatn_600SemiBold',
                      color: e.supplierName || e.contactName ? r.text : r.muted,
                    },
                    children: d,
                  }),
                  (0, $.jsx)(x.Copy, {
                    numberOfLines: 1,
                    style: { fontSize: 12, lineHeight: 19, color: r.muted },
                    children: (0, T.purchaseSub)(e, p),
                  }),
                  !!c &&
                    (0, $.jsx)(x.Copy, {
                      testID: 'purchase-row-by',
                      numberOfLines: 1,
                      style: { fontSize: 11.5, lineHeight: 19, color: r.muted },
                      children: c,
                    }),
                ],
              }),
              (0, $.jsxs)(o.default, {
                style: {
                  flexShrink: 0,
                  maxWidth: '46%',
                  alignItems: 'flex-start',
                  gap: 3,
                },
                children: [
                  !!i &&
                    (0, $.jsx)(x.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 14.5,
                        lineHeight: 22,
                        fontFamily: 'Vazirmatn_700Bold',
                        color: e.corrected ? r.muted : r.text,
                        textDecorationLine: e.corrected
                          ? 'line-through'
                          : 'none',
                      },
                      children: i,
                    }),
                  e.corrected
                    ? (0, $.jsx)(o.default, {
                        style: {
                          paddingHorizontal: 7,
                          paddingVertical: 1,
                          borderRadius: 7,
                          backgroundColor: r.soft,
                        },
                        children: (0, $.jsx)(x.Copy, {
                          style: {
                            fontSize: 11,
                            lineHeight: 18,
                            color: r.muted,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: (0, L.L)(
                            '\u0644\u063a\u0648 \u0634\u062f\u0647',
                          ),
                        }),
                      })
                    : l?.attached
                      ? (0, $.jsxs)(o.default, {
                          testID: 'purchase-photo-mark',
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 4,
                            paddingHorizontal: 7,
                            paddingVertical: 1,
                            borderRadius: 7,
                            backgroundColor: r.accentSoft,
                            maxWidth: '100%',
                          },
                          children: [
                            (0, $.jsx)(b.Icon, {
                              name: 'photo',
                              size: 12,
                              color: r.accent,
                            }),
                            (0, $.jsx)(x.Copy, {
                              numberOfLines: 1,
                              style: {
                                flexShrink: 1,
                                fontSize: 11,
                                lineHeight: 18,
                                color: r.accent,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: l.text,
                            }),
                          ],
                        })
                      : l && Ct
                        ? (0, $.jsxs)(n.default, {
                            testID: 'purchase-photo-add-mark',
                            accessibilityRole: 'button',
                            accessibilityLabel: (0, L.L)(
                              '\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                            ),
                            hitSlop: 8,
                            onPress: () => Te({ row: e, adding: !0 }),
                            style: ({ pressed: e }) => ({
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 3,
                              paddingHorizontal: 7,
                              paddingVertical: 1,
                              borderRadius: 7,
                              borderWidth: s.default.hairlineWidth,
                              borderStyle: 'dashed',
                              borderColor: r.muted,
                              backgroundColor: e ? r.soft : 'transparent',
                            }),
                            children: [
                              (0, $.jsx)(b.Icon, {
                                name: 'plus',
                                size: 12,
                                color: r.muted,
                              }),
                              (0, $.jsx)(x.Copy, {
                                numberOfLines: 1,
                                style: {
                                  fontSize: 11,
                                  lineHeight: 18,
                                  color: r.muted,
                                },
                                children: l.text,
                              }),
                            ],
                          })
                        : null,
                ],
              }),
            ],
          },
          'p' + e.id,
        );
      }
      const wt =
          !yt &&
          ft.length > 0 &&
          !pt &&
          (0, $.jsx)(w.SmallKey, {
            testID: 'invoices-more',
            label: gt
              ? (0, L.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                )
              : (0, L.L)('\u0628\u06cc\u0634\u062a\u0631'),
            disabled: gt,
            onPress: () => {
              (ft.includes('sale') && Je(), ft.includes('purchase') && Xe());
            },
          }),
        kt = (0, $.jsxs)($.Fragment, {
          children: [
            (0, $.jsx)(x.Segmented, {
              role: 'tab',
              height: 46,
              style: We
                ? { maxWidth: 420, alignSelf: 'flex-end', width: '100%' }
                : void 0,
              value: K,
              onChange: function (e) {
                e !== K && (G(e), 'sale' !== e && (Y(null), te('all'), Q('')));
              },
              items: (0, T.inOutModes)().map((e) => ({
                ...e,
                testID: 'invoices-mode-' + e.value,
              })),
            }),
            Ze &&
              (X && !(it.data || []).some((e) => e.id === X.id)
                ? (0, $.jsx)(o.default, {
                    style: { flexDirection: 'row-reverse' },
                    children: (0, $.jsxs)(n.default, {
                      testID: 'invoices-person',
                      accessibilityRole: 'button',
                      accessibilityLabel: (0, L.L)(
                        '\u062d\u0630\u0641 \u0641\u06cc\u0644\u062a\u0631 {name}',
                        { name: X.name },
                      ),
                      onPress: () => Y(null),
                      style: ({ pressed: e }) => ({
                        maxWidth: '100%',
                        minHeight: 36,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 6,
                        paddingHorizontal: 12,
                        borderRadius: 10,
                        backgroundColor: r.accent,
                        opacity: e ? 0.8 : 1,
                      }),
                      children: [
                        (0, $.jsx)(x.Copy, {
                          numberOfLines: 1,
                          style: {
                            flexShrink: 1,
                            fontSize: 14,
                            lineHeight: 22,
                            color: r.onAccent,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: X.name,
                        }),
                        (0, $.jsx)(b.Icon, {
                          name: 'close',
                          size: 14,
                          color: r.onAccent,
                        }),
                      ],
                    }),
                  })
                : S &&
                  (0, $.jsxs)(o.default, {
                    style: { gap: 6 },
                    children: [
                      (0, $.jsxs)(o.default, {
                        style: { justifyContent: 'center' },
                        children: [
                          (0, $.jsx)(x.Input, {
                            testID: 'invoices-search',
                            value: J,
                            onChangeText: (e) => {
                              (X && Y(null), Q(e));
                            },
                            placeholder: (0, L.L)(
                              '\u0627\u0633\u0645 \u0645\u0634\u062a\u0631\u06cc \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u2026',
                            ),
                            maxLength: 100,
                            returnKeyType: 'search',
                            style: { paddingRight: 40 },
                          }),
                          (0, $.jsx)(o.default, {
                            pointerEvents: 'none',
                            style: { position: 'absolute', right: 12 },
                            children: (0, $.jsx)(b.Icon, {
                              name: 'search',
                              size: 17,
                              color: r.muted,
                            }),
                          }),
                        ],
                      }),
                      ie.length > 0 &&
                        (0, $.jsx)(x.Card, {
                          testID: 'invoices-matches',
                          style: { padding: 0, gap: 0, overflow: 'hidden' },
                          children: ie.map((e, t) =>
                            (0, $.jsxs)(
                              n.default,
                              {
                                testID: 'invoices-match',
                                accessibilityRole: 'button',
                                accessibilityLabel: e.name,
                                onPress: () => tt(e),
                                style: ({ pressed: e }) => [
                                  x.common.row,
                                  {
                                    minHeight: 46,
                                    paddingHorizontal: 12,
                                    borderTopWidth: t
                                      ? s.default.hairlineWidth
                                      : 0,
                                    borderColor: r.line,
                                    backgroundColor: e ? r.soft : 'transparent',
                                  },
                                ],
                                children: [
                                  (0, $.jsx)(o.default, {
                                    style: {
                                      width: 30,
                                      height: 30,
                                      borderRadius: 10,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      backgroundColor: r.accentSoft,
                                    },
                                    children: (0, $.jsx)(x.Copy, {
                                      style: {
                                        fontSize: 13,
                                        lineHeight: 20,
                                        color: r.accent,
                                        fontFamily: 'Vazirmatn_700Bold',
                                      },
                                      children: (0, H.invoiceInitial)(e.name),
                                    }),
                                  }),
                                  (0, $.jsxs)(o.default, {
                                    style: { flex: 1, minWidth: 0 },
                                    children: [
                                      (0, $.jsx)(x.Copy, {
                                        numberOfLines: 1,
                                        style: {
                                          fontSize: 14,
                                          lineHeight: 22,
                                          fontFamily: 'Vazirmatn_600SemiBold',
                                        },
                                        children: e.name,
                                      }),
                                      (0, $.jsx)(B.PhoneLine, {
                                        phone: e.phone,
                                        shared:
                                          (0, O.sameNameContacts)(
                                            e.name,
                                            ie,
                                            e.id,
                                          ).length > 0,
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id,
                            ),
                          ),
                        }),
                      (0, $.jsx)(B.SameNameNotice, {
                        testID: 'invoices-same-name',
                        contacts: ie,
                        onPick: tt,
                      }),
                      se.done &&
                        se.text === J.trim() &&
                        (se.error
                          ? (0, $.jsx)(x.Copy, {
                              accessibilityRole: 'alert',
                              testID: 'invoices-search-error',
                              style: {
                                fontSize: 12.5,
                                lineHeight: 20,
                                color: r.danger,
                              },
                              children: (0, L.L)(
                                '\u062c\u0633\u062a\u200c\u0648\u062c\u0648 \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f: {reason}',
                                { reason: se.error },
                              ),
                            })
                          : !ie.length &&
                            (0, $.jsx)(x.Copy, {
                              testID: 'invoices-no-match',
                              style: xt,
                              children: (0, L.L)(
                                '\u0645\u0634\u062a\u0631\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u0627\u0633\u0645 \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f',
                              ),
                            })),
                    ],
                  })),
            Ze &&
              S &&
              (0, $.jsx)(U, {
                people: it.data || [],
                selected: X?.id,
                onPick: function (e) {
                  X?.id !== e.id ? et({ id: e.id, name: e.name }) : Y(null);
                },
              }),
            'sale' === K &&
              (0, $.jsx)(o.default, {
                accessibilityRole: 'tablist',
                style: {
                  flexDirection: 'row-reverse',
                  flexWrap: 'wrap',
                  gap: 6,
                },
                children: (0, T.paymentChips)().map((e) => {
                  const t = e.value === ee;
                  return (0, $.jsxs)(
                    n.default,
                    {
                      testID: 'invoices-filter-' + e.value,
                      accessibilityRole: 'tab',
                      accessibilityState: { selected: t },
                      onPress: () => te(t ? 'all' : e.value),
                      style: ({ pressed: e }) => ({
                        minHeight: 36,
                        minWidth: 64,
                        paddingHorizontal: 14,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row-reverse',
                        gap: 5,
                        borderWidth: s.default.hairlineWidth,
                        borderColor: t ? r.accent : r.line,
                        backgroundColor: t ? r.accent : r.surface,
                        opacity: e ? 0.8 : 1,
                      }),
                      children: [
                        t &&
                          (0, $.jsx)(b.Icon, {
                            name: 'check',
                            size: 13,
                            color: r.onAccent,
                          }),
                        (0, $.jsx)(x.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 13.5,
                            lineHeight: 21,
                            textAlign: 'center',
                            color: t ? r.onAccent : r.text,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: e.label,
                        }),
                      ],
                    },
                    e.value,
                  );
                }),
              }),
            'sale' === K &&
              Ke &&
              X &&
              (0, $.jsx)(V.LiveAccount, {
                shop: e,
                person: X,
                filter: ee,
                timeZone: p,
                refresh: $e,
                opening: fe,
                onOpen: (e) => {
                  nt(e);
                },
                onBook: () => lt(!1),
                onStatement: () => lt(!0),
              }),
            'sale' === K &&
              !!X &&
              !Ke &&
              (!!ht || mt > 0) &&
              (0, $.jsxs)(x.Card, {
                testID: 'invoices-summary',
                style: { gap: 2, padding: 16, opacity: pt ? 0.5 : 1 },
                children: [
                  (0, $.jsx)(x.Copy, {
                    style: xt,
                    children:
                      'all' === ee
                        ? (0, L.L)(
                            '\u0647\u0645\u0647\u200c\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc {name}',
                            { name: X.name },
                          )
                        : (0, L.L)(
                            '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc {kind} {name}',
                            { kind: bt, name: X.name },
                          ),
                  }),
                  !!ht &&
                    (0, $.jsx)(x.Copy, {
                      testID: 'invoices-summary-total',
                      style: {
                        fontSize: 22,
                        lineHeight: 34,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children:
                        void 0 === ht.totalToman
                          ? (0, H.invoiceCount)(ht.count)
                          : `${(0, H.invoiceCount)(ht.count)} \xb7 ${(0, H.invoiceTomanLong)(ht.totalToman)}`,
                    }),
                  void 0 !== ht?.paidToman &&
                    (0, $.jsxs)(o.default, {
                      style: [
                        x.common.between,
                        {
                          paddingTop: 6,
                          marginTop: 6,
                          borderTopWidth: s.default.hairlineWidth,
                          borderColor: r.line,
                        },
                      ],
                      children: [
                        (0, $.jsx)(x.Copy, {
                          style: { fontSize: 13, lineHeight: 20 },
                          children: (0, L.L)(
                            '\u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0631\u062f\u0647',
                          ),
                        }),
                        (0, $.jsx)(x.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: (0, H.invoiceTomanLong)(ht.paidToman),
                        }),
                      ],
                    }),
                  mt > 0 &&
                    (0, $.jsxs)(o.default, {
                      style: [
                        x.common.between,
                        {
                          paddingTop: 6,
                          marginTop: 6,
                          borderTopWidth: s.default.hairlineWidth,
                          borderColor: r.line,
                        },
                      ],
                      children: [
                        (0, $.jsx)(x.Copy, {
                          style: { fontSize: 13, lineHeight: 20 },
                          children: (0, L.L)(
                            '\u0645\u0627\u0646\u062f\u0647 (\u0628\u062f\u0647\u06a9\u0627\u0631)',
                          ),
                        }),
                        (0, $.jsx)(x.Copy, {
                          testID: 'invoices-summary-owed',
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            color: r.warning,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: (0, H.invoiceTomanLong)(mt),
                        }),
                      ],
                    }),
                ],
              }),
            !!xe &&
              (0, $.jsx)(x.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, lineHeight: 22, color: r.danger },
                children: xe,
              }),
            Ze &&
              !!he &&
              !Ke &&
              (0, $.jsxs)(o.default, {
                style: { gap: 8 },
                children: [
                  (0, $.jsx)(x.Copy, {
                    accessibilityRole: 'alert',
                    testID: 'invoices-error',
                    style: { fontSize: 13, lineHeight: 22, color: r.danger },
                    children: (0, L.L)(
                      '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u0641\u0631\u0648\u0634 \u0628\u0627\u0632 \u0646\u0634\u062f: {reason}',
                      { reason: he },
                    ),
                  }),
                  (0, $.jsx)(w.SmallKey, {
                    testID: 'invoices-retry',
                    label: (0, L.L)(
                      '\u062a\u0644\u0627\u0634 \u062f\u0648\u0628\u0627\u0631\u0647',
                    ),
                    onPress: () => (le ? Je() : Ue()),
                  }),
                ],
              }),
            Ge &&
              !!ke &&
              (0, $.jsxs)(o.default, {
                style: { gap: 8 },
                children: [
                  (0, $.jsx)(x.Copy, {
                    accessibilityRole: 'alert',
                    testID: 'purchases-error',
                    style: { fontSize: 13, lineHeight: 22, color: r.danger },
                    children: (0, L.L)(
                      '\u062e\u0631\u06cc\u062f\u0647\u0627 \u0628\u0627\u0632 \u0646\u0634\u062f: {reason}',
                      { reason: ke },
                    ),
                  }),
                  (0, $.jsx)(w.SmallKey, {
                    testID: 'purchases-retry',
                    label: (0, L.L)(
                      '\u062a\u0644\u0627\u0634 \u062f\u0648\u0628\u0627\u0631\u0647',
                    ),
                    onPress: () => (Se ? Xe() : Qe()),
                  }),
                ],
              }),
            yt &&
              !('sale' === K && Ke) &&
              (0, $.jsx)(x.Copy, {
                testID: 'invoices-loading',
                style: [xt, { textAlign: 'center', paddingVertical: 16 }],
                children: (0, L.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                ),
              }),
            St &&
              (0, $.jsx)(x.Copy, {
                testID: 'invoices-empty',
                style: {
                  fontSize: 14,
                  lineHeight: 24,
                  textAlign: 'center',
                  color: r.muted,
                  paddingVertical: 16,
                },
                children: vt,
              }),
          ],
        }),
        It = ut.flatMap((e) => e.rows),
        Dt = new Map(
          It.flatMap((e) => ('sale' === e.kind ? [[e.id, e.sale]] : [])),
        ),
        Ht = It.filter((e) => 'sale' === e.kind).map((e) => e.id),
        Tt = It.map((e) => e.kind + ':' + e.id),
        Wt = Tt.filter((e) => Ve.has(e)).length,
        Rt = Oe || pe?.id || '';
      async function Vt() {
        const e = Wt ? It.filter((e) => Ve.has(e.kind + ':' + e.id)) : It,
          t = (e) =>
            new Date(e).toLocaleDateString((0, L.dateLocale)(), {
              timeZone: p,
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }),
          { tableWorkbook: i } = await _r(_d[45])(_d[44], _d.paths);
        await (0, M.saveWorkbook)(
          i(
            (0, L.L)('\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627'),
            [
              (0, L.L)('\u0646\u0648\u0639'),
              (0, L.L)('\u0634\u0645\u0627\u0631\u0647'),
              (0, L.L)('\u0637\u0631\u0641 \u062d\u0633\u0627\u0628'),
              (0, L.L)('\u0627\u0642\u0644\u0627\u0645'),
              (0, L.L)('\u0631\u0648\u0632'),
              (0, L.L)('\u0633\u0627\u0639\u062a'),
              (0, L.L)('\u067e\u0631\u062f\u0627\u062e\u062a'),
              (0, E.shopUnitText)(
                (0, L.L)(
                  '\u0645\u0628\u0644\u063a (\u062a\u0648\u0645\u0627\u0646)',
                ),
              ),
              (0, L.L)('\u0635\u062f\u0648\u0631'),
            ],
            e.map((e) =>
              'sale' === e.kind
                ? [
                    (0, L.L)('\u0641\u0631\u0648\u0634'),
                    e.sale.receiptNo || '',
                    (0, H.invoiceBuyer)(e.sale),
                    e.sale.lineCount ?? '',
                    t(e.sale.occurredAt),
                    (0, H.clockIn)(e.sale.occurredAt, p),
                    (0, H.invoicePill)(e.sale).text,
                    void 0 !== e.sale.totalToman && null !== e.sale.totalToman
                      ? (0, E.localAmount)(e.sale.totalToman)
                      : '',
                    (0, T.issuedMark)(
                      !(!e.sale.issued && !I.issuedSales.has(e.sale.id)),
                      e.sale.corrected,
                    )?.text || '',
                  ]
                : [
                    (0, L.L)('\u062e\u0631\u06cc\u062f'),
                    e.purchase.receiptNo || '',
                    (0, T.purchaseName)(e.purchase),
                    e.purchase.lineCount,
                    t(e.purchase.occurredAt),
                    (0, H.clockIn)(e.purchase.occurredAt, p),
                    e.purchase.corrected
                      ? (0, L.L)('\u0644\u063a\u0648 \u0634\u062f\u0647')
                      : '',
                    void 0 !== e.purchase.totalToman &&
                    null !== e.purchase.totalToman
                      ? (0, E.localAmount)(e.purchase.totalToman)
                      : '',
                    '',
                  ],
            ),
          ),
          'anbari-invoices.xlsx',
        );
      }
      ((0, A.useDeskKeys)(
        {
          ArrowDown: () => {
            const e = (0, F.moveSelection)(Ht, Rt, 1),
              t = e ? Dt.get(e) : void 0;
            t && e !== Rt && nt(t);
          },
          ArrowUp: () => {
            const e = (0, F.moveSelection)(Ht, Rt, -1),
              t = e ? Dt.get(e) : void 0;
            t && e !== Rt && nt(t);
          },
          p: () => {
            pe?.id && (N.printIntent.ask(pe.id), Fe((e) => e + 1));
          },
        },
        We && !He,
      ),
        (0, t.useEffect)(() => {
          if (!We || Ne.current || yt || pe || Oe || fe) return;
          const e = Ht[0] ? Dt.get(Ht[0]) : void 0;
          e && ((Ne.current = !0), nt(e));
        }, [We, yt, Ht[0]]));
      const Bt = {
          no: { width: 62 },
          name: { flex: 1.7 },
          items: { width: 66 },
          time: { width: 58 },
          pay: { width: 168 },
          issue: { flex: 1 },
          amount: { flex: 1.1 },
        },
        Ot = { fontSize: 13, lineHeight: 21, color: r.muted },
        Pt = Math.round(Math.min(620, Math.max(420, 0.34 * Re)));
      function At(e, t) {
        const i = e.kind + ':' + e.id,
          l = Ve.has(i),
          c = 'sale' === e.kind && Rt === e.id,
          d = ({ pressed: i, hovered: n }) => ({
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 12,
            paddingHorizontal: 16,
            minHeight: 46,
            borderTopWidth: t ? 0 : s.default.hairlineWidth,
            borderTopColor: r.line,
            borderRightWidth: 3,
            borderRightColor: c ? r.accent : 'transparent',
            backgroundColor: c ? r.accentSoft : i || n ? r.soft : 'transparent',
            opacity: 'sale' === e.kind && fe === e.id ? 0.6 : 1,
          }),
          u = (0, $.jsx)(_.DeskTick, {
            label:
              'sale' === e.kind
                ? (0, H.invoiceTitle)(e.sale)
                : (0, T.purchaseName)(e.purchase),
            on: l,
            onPress: () => Be((0, F.toggleTick)(Ve, i)),
          }),
          h = (e, t) =>
            (0, $.jsx)(o.default, {
              style: [Bt.pay, { alignItems: 'flex-end' }],
              children: (0, $.jsx)(o.default, {
                style: {
                  paddingHorizontal: 9,
                  paddingVertical: 2,
                  borderRadius: 9,
                  backgroundColor: t.bg,
                  maxWidth: '100%',
                },
                children: (0, $.jsx)(x.Copy, {
                  numberOfLines: 1,
                  style: {
                    fontSize: 11.5,
                    lineHeight: 18,
                    color: t.fg,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: e,
                }),
              }),
            });
        if ('sale' === e.kind) {
          const t = e.sale,
            s = (0, H.invoicePill)(t),
            o = (0, T.issuedMark)(
              !(!t.issued && !I.issuedSales.has(t.id)),
              t.corrected,
            );
          return (0, $.jsxs)(
            n.default,
            {
              testID: 'invoice-row',
              accessibilityRole: 'button',
              accessibilityState: { selected: c },
              accessibilityLabel: `${(0, H.invoiceBuyer)(t)} ${(0, H.invoiceSub)(t, p)}`,
              onPress: () => {
                nt(t);
              },
              style: d,
              children: [
                u,
                (0, $.jsx)(x.Copy, {
                  numberOfLines: 1,
                  style: [
                    Bt.no,
                    {
                      fontSize: 13.5,
                      lineHeight: 21,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                  ],
                  children: t.receiptNo
                    ? (0, L.localDigits)(String(t.receiptNo))
                    : '\u2014',
                }),
                (0, $.jsx)(x.Copy, {
                  numberOfLines: 1,
                  style: [
                    Bt.name,
                    {
                      minWidth: 0,
                      fontSize: 14,
                      lineHeight: 22,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                  ],
                  children: (0, H.invoiceBuyer)(t),
                }),
                (0, $.jsx)(x.Copy, {
                  numberOfLines: 1,
                  style: [Bt.items, Ot],
                  children:
                    void 0 !== t.lineCount
                      ? (0, L.L)('{n} \u0642\u0644\u0645', {
                          n: (0, L.localDigits)(String(t.lineCount)),
                        })
                      : '\u2014',
                }),
                (0, $.jsx)(x.Copy, {
                  numberOfLines: 1,
                  style: [Bt.time, Ot],
                  children: (0, H.clockIn)(t.occurredAt, p),
                }),
                h(s.text, jt[s.tone]),
                (0, $.jsx)(x.Copy, {
                  testID: o
                    ? o.issued
                      ? 'invoice-issued'
                      : 'invoice-not-issued'
                    : void 0,
                  numberOfLines: 1,
                  style: [
                    Bt.issue,
                    {
                      minWidth: 0,
                      fontSize: 12,
                      lineHeight: 19,
                      color: o?.issued ? r.accent : r.muted,
                    },
                  ],
                  children: o?.text || '',
                }),
                (0, $.jsx)(x.Copy, {
                  numberOfLines: 1,
                  style: [
                    Bt.amount,
                    {
                      minWidth: 0,
                      textAlign: 'left',
                      fontSize: 14,
                      lineHeight: 22,
                      fontFamily: 'Vazirmatn_700Bold',
                      color: t.corrected ? r.muted : r.text,
                      textDecorationLine: t.corrected ? 'line-through' : 'none',
                    },
                  ],
                  children:
                    void 0 !== t.totalToman
                      ? (0, H.invoiceToman)(t.totalToman)
                      : '\u2014',
                }),
              ],
            },
            i,
          );
        }
        const m = e.purchase,
          y = (0, T.purchaseAmount)(m),
          f = (0, T.photoMark)(m);
        return (0, $.jsxs)(
          n.default,
          {
            testID: 'purchase-row',
            accessibilityRole: 'button',
            accessibilityLabel: [
              (0, T.purchaseName)(m),
              (0, T.purchaseSub)(m, p),
            ].join(' '),
            onPress: () => Te({ row: m, adding: !1 }),
            style: d,
            children: [
              u,
              (0, $.jsxs)(o.default, {
                style: [
                  Bt.no,
                  {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 4,
                  },
                ],
                children: [
                  (0, $.jsx)(b.Icon, {
                    name: 'inventory',
                    size: 13,
                    color: r.success,
                  }),
                  (0, $.jsx)(x.Copy, {
                    numberOfLines: 1,
                    style: {
                      fontSize: 13.5,
                      lineHeight: 21,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: m.receiptNo
                      ? (0, L.localDigits)(String(m.receiptNo))
                      : '\u2014',
                  }),
                ],
              }),
              (0, $.jsx)(x.Copy, {
                numberOfLines: 1,
                style: [
                  Bt.name,
                  {
                    minWidth: 0,
                    fontSize: 14,
                    lineHeight: 22,
                    fontFamily: 'Vazirmatn_600SemiBold',
                    color: m.supplierName || m.contactName ? r.text : r.muted,
                  },
                ],
                children: (0, T.purchaseName)(m),
              }),
              (0, $.jsx)(x.Copy, {
                numberOfLines: 1,
                style: [Bt.items, Ot],
                children: (0, L.L)('{n} \u0642\u0644\u0645', {
                  n: (0, L.localDigits)(String(m.lineCount)),
                }),
              }),
              (0, $.jsx)(x.Copy, {
                numberOfLines: 1,
                style: [Bt.time, Ot],
                children: (0, H.clockIn)(m.occurredAt, p),
              }),
              h(
                m.corrected
                  ? (0, L.L)('\u0644\u063a\u0648 \u0634\u062f\u0647')
                  : (0, L.L)('\u062e\u0631\u06cc\u062f'),
                m.corrected
                  ? jt.muted
                  : { bg: r.success + '1f', fg: r.success },
              ),
              (0, $.jsx)(x.Copy, {
                numberOfLines: 1,
                style: [
                  Bt.issue,
                  {
                    minWidth: 0,
                    fontSize: 12,
                    lineHeight: 19,
                    color: f?.attached ? r.accent : r.muted,
                  },
                ],
                children: f?.attached ? f.text : '',
              }),
              (0, $.jsx)(x.Copy, {
                numberOfLines: 1,
                style: [
                  Bt.amount,
                  {
                    minWidth: 0,
                    textAlign: 'left',
                    fontSize: 14,
                    lineHeight: 22,
                    fontFamily: 'Vazirmatn_700Bold',
                    color: m.corrected ? r.muted : r.text,
                    textDecorationLine: m.corrected ? 'line-through' : 'none',
                  },
                ],
                children: y || '\u2014',
              }),
            ],
          },
          i,
        );
      }
      return We
        ? (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsxs)(o.default, {
                testID: 'desk-invoices',
                style: {
                  flex: 1,
                  minHeight: 0,
                  width: '100%',
                  maxWidth: 1760,
                  alignSelf: 'center',
                  flexDirection: 'row-reverse',
                  gap: 16,
                  paddingHorizontal: 14,
                  paddingTop: 6,
                },
                children: [
                  (0, $.jsx)(y.KeyboardScrollView, {
                    style: { flex: 1 },
                    keyboardShouldPersistTaps: 'handled',
                    contentContainerStyle: {
                      gap: 12,
                      paddingBottom: h.bottom + 40,
                    },
                    children: (0, $.jsxs)(o.default, {
                      testID: 'invoices-screen',
                      style: { gap: 12 },
                      children: [
                        (0, $.jsxs)(o.default, {
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 8,
                          },
                          children: [
                            (0, $.jsx)(x.Copy, {
                              numberOfLines: 1,
                              style: [
                                xt,
                                { flex: 1, minWidth: 0, fontSize: 13 },
                              ],
                              children: It.length
                                ? (0, L.L)(
                                    '{n} \u0631\u062f\u06cc\u0641 \u062f\u0631 \u0641\u0647\u0631\u0633\u062a',
                                    {
                                      n: (0, L.localDigits)(String(It.length)),
                                    },
                                  )
                                : '',
                            }),
                            (0, $.jsx)(_.DeskKey, {
                              testID: 'invoices-excel',
                              icon: 'download',
                              label: Wt
                                ? (0, L.L)(
                                    '\u0627\u06a9\u0633\u0644 {n} \u0631\u062f\u06cc\u0641',
                                    { n: (0, L.localDigits)(String(Wt)) },
                                  )
                                : (0, L.L)(
                                    '\u062e\u0631\u0648\u062c\u06cc \u0627\u06a9\u0633\u0644',
                                  ),
                              disabled: !It.length,
                              onPress: () => {
                                Vt();
                              },
                            }),
                          ],
                        }),
                        kt,
                        !yt &&
                          It.length > 0 &&
                          (0, $.jsxs)(o.default, {
                            testID: 'desk-invoices-table',
                            style: {
                              borderRadius: 20,
                              borderWidth: s.default.hairlineWidth,
                              borderColor: r.line,
                              backgroundColor: r.surface,
                              overflow: 'hidden',
                              opacity: pt ? 0.6 : 1,
                            },
                            children: [
                              (0, $.jsxs)(_.DeskHeadRow, {
                                children: [
                                  (0, $.jsx)(_.DeskTick, {
                                    testID: 'invoices-tick-all',
                                    label: (0, L.L)(
                                      '\u0627\u0646\u062a\u062e\u0627\u0628 \u0647\u0645\u0647',
                                    ),
                                    on: Wt > 0 && Wt === Tt.length,
                                    mixed: Wt > 0 && Wt < Tt.length,
                                    onPress: () => Be((0, F.toggleAll)(Ve, Tt)),
                                  }),
                                  (0, $.jsx)(_.DeskHead, {
                                    label: (0, L.L)(
                                      '\u0634\u0645\u0627\u0631\u0647',
                                    ),
                                    style: Bt.no,
                                  }),
                                  (0, $.jsx)(_.DeskHead, {
                                    label: (0, L.L)(
                                      '\u0645\u0634\u062a\u0631\u06cc',
                                    ),
                                    style: Bt.name,
                                  }),
                                  (0, $.jsx)(_.DeskHead, {
                                    label: (0, L.L)(
                                      '\u0627\u0642\u0644\u0627\u0645',
                                    ),
                                    style: Bt.items,
                                  }),
                                  (0, $.jsx)(_.DeskHead, {
                                    label: (0, L.L)('\u0633\u0627\u0639\u062a'),
                                    style: Bt.time,
                                  }),
                                  (0, $.jsx)(_.DeskHead, {
                                    label: (0, L.L)(
                                      '\u067e\u0631\u062f\u0627\u062e\u062a',
                                    ),
                                    style: Bt.pay,
                                  }),
                                  (0, $.jsx)(_.DeskHead, {
                                    label: (0, L.L)('\u0635\u062f\u0648\u0631'),
                                    style: Bt.issue,
                                  }),
                                  (0, $.jsx)(_.DeskHead, {
                                    label: (0, L.L)('\u0645\u0628\u0644\u063a'),
                                    end: !0,
                                    style: Bt.amount,
                                  }),
                                ],
                              }),
                              ut.map((e, t) =>
                                (0, $.jsxs)(
                                  o.default,
                                  {
                                    testID: 'invoices-day',
                                    children: [
                                      (0, $.jsxs)(o.default, {
                                        style: {
                                          flexDirection: 'row-reverse',
                                          alignItems: 'baseline',
                                          gap: 10,
                                          paddingHorizontal: 16,
                                          paddingVertical: 7,
                                          backgroundColor: r.soft,
                                          borderTopWidth: t
                                            ? s.default.hairlineWidth
                                            : 0,
                                          borderBottomWidth:
                                            s.default.hairlineWidth,
                                          borderColor: r.line,
                                        },
                                        children: [
                                          (0, $.jsx)(x.Copy, {
                                            numberOfLines: 1,
                                            style: {
                                              fontSize: 13,
                                              lineHeight: 21,
                                              fontFamily: 'Vazirmatn_700Bold',
                                            },
                                            children: e.label,
                                          }),
                                          (0, $.jsx)(x.Copy, {
                                            numberOfLines: 1,
                                            style: [xt, { fontSize: 12 }],
                                            children: e.side,
                                          }),
                                        ],
                                      }),
                                      e.rows.map((e, t) => At(e, 0 === t)),
                                    ],
                                  },
                                  e.day,
                                ),
                              ),
                            ],
                          }),
                        wt,
                      ],
                    }),
                  }),
                  (0, $.jsxs)(o.default, {
                    testID: 'invoice-preview',
                    style: {
                      width: Pt,
                      minHeight: 0,
                      marginBottom: h.bottom + 10,
                      borderRadius: 22,
                      borderWidth: s.default.hairlineWidth,
                      borderColor: r.line,
                      backgroundColor: r.surface,
                      overflow: 'hidden',
                    },
                    children: [
                      pe
                        ? (0, $.jsx)(o.default, {
                            style: { flex: 1, minHeight: 0, padding: 14 },
                            children: (0, $.jsx)(
                              k.Receipt,
                              {
                                document: pe,
                                shopName: e.name || '',
                                onClose: () => {
                                  st();
                                },
                              },
                              pe.id + ':' + Ae,
                            ),
                          })
                        : (0, $.jsxs)(o.default, {
                            style: {
                              flex: 1,
                              alignItems: 'center',
                              justifyContent: 'center',
                              gap: 10,
                              padding: 24,
                            },
                            children: [
                              (0, $.jsx)(b.Icon, {
                                name: 'receipt',
                                size: 30,
                                color: r.muted,
                              }),
                              (0, $.jsx)(x.Copy, {
                                style: { color: r.muted, textAlign: 'center' },
                                children: fe
                                  ? (0, L.L)(
                                      '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                                    )
                                  : (0, L.L)(
                                      '\u0631\u0648\u06cc \u06cc\u06a9 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0632\u0646 \u062a\u0627 \u0627\u06cc\u0646\u200c\u062c\u0627 \u0628\u0628\u06cc\u0646\u06cc.',
                                    ),
                              }),
                            ],
                          }),
                      (0, $.jsx)(o.default, {
                        style: {
                          borderTopWidth: s.default.hairlineWidth,
                          borderColor: r.line,
                        },
                        children: (0, $.jsx)(_.KeyHints, {
                          items: [
                            [
                              ['\u2191', '\u2193'],
                              (0, L.L)(
                                '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0642\u0628\u0644\u06cc / \u0628\u0639\u062f\u06cc',
                              ),
                            ],
                            [['P'], (0, L.L)('\u0686\u0627\u067e')],
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, $.jsx)(c.PageModal, {
                visible: !!He,
                animationType: 'slide',
                onRequestClose: () => Te(null),
                children:
                  He &&
                  (0, $.jsx)(W.PurchaseView, {
                    shop: e,
                    purchaseId: He.row.id,
                    head: He.row,
                    startAdding: He.adding,
                    timeZone: p,
                    onClose: () => Te(null),
                    onChange: (e) =>
                      ve((t) =>
                        t
                          ? {
                              ...t,
                              purchases: t.purchases.map((t) =>
                                t.id === e.id
                                  ? {
                                      ...t,
                                      photoCount: e.photoCount,
                                      ...(e.supplierName
                                        ? { supplierName: e.supplierName }
                                        : {}),
                                    }
                                  : t,
                              ),
                            }
                          : t,
                      ),
                  }),
              }),
            ],
          })
        : (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(y.KeyboardScrollView, {
                keyboardShouldPersistTaps: 'handled',
                contentContainerStyle: {
                  width: '100%',
                  maxWidth: (0, d.pageColumnWidth)(v),
                  alignSelf: 'center',
                  padding: v ? 28 : 14,
                  paddingTop: 14,
                  gap: 12,
                  paddingBottom: h.bottom + 40,
                },
                children: (0, $.jsxs)(o.default, {
                  testID: 'invoices-screen',
                  style: { gap: 12 },
                  children: [
                    kt,
                    !yt &&
                      ut.map((e) =>
                        (0, $.jsxs)(
                          o.default,
                          {
                            testID: 'invoices-day',
                            style: { gap: 8, opacity: pt ? 0.6 : 1 },
                            children: [
                              (0, $.jsxs)(o.default, {
                                style: [
                                  x.common.between,
                                  {
                                    paddingHorizontal: 4,
                                    paddingTop: 6,
                                    alignItems: 'baseline',
                                  },
                                ],
                                children: [
                                  (0, $.jsx)(x.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      flexShrink: 1,
                                      fontSize: 15,
                                      lineHeight: 24,
                                      fontFamily: 'Vazirmatn_700Bold',
                                    },
                                    children: e.label,
                                  }),
                                  (0, $.jsx)(x.Copy, {
                                    numberOfLines: 1,
                                    style: [xt, { flexShrink: 0 }],
                                    children: e.side,
                                  }),
                                ],
                              }),
                              (0, $.jsx)(x.Card, {
                                style: {
                                  padding: 0,
                                  gap: 0,
                                  overflow: 'hidden',
                                },
                                children: e.rows.map((e, t) =>
                                  'sale' === e.kind
                                    ? Lt(e.sale, 0 === t)
                                    : zt(e.purchase, 0 === t),
                                ),
                              }),
                            ],
                          },
                          e.day,
                        ),
                      ),
                    wt,
                  ],
                }),
              }),
              (0, $.jsxs)(c.PageModal, {
                visible: !!pe && !We,
                animationType: 'slide',
                onRequestClose: () => {
                  st();
                },
                children: [
                  (0, $.jsx)(o.default, {
                    style: {
                      flex: 1,
                      backgroundColor: r.bg,
                      padding: 16,
                      paddingTop: Math.max(16, h.top),
                      paddingBottom: Math.max(16, h.bottom),
                      gap: 12,
                    },
                    children:
                      pe &&
                      (0, $.jsx)(k.Receipt, {
                        document: pe,
                        shopName: e.name || '',
                        onClose: () => {
                          st();
                        },
                      }),
                  }),
                  (0, $.jsx)(j.ToastHost, {}),
                ],
              }),
              (0, $.jsx)(c.PageModal, {
                visible: !!He,
                animationType: 'slide',
                onRequestClose: () => Te(null),
                children:
                  He &&
                  (0, $.jsx)(W.PurchaseView, {
                    shop: e,
                    purchaseId: He.row.id,
                    head: He.row,
                    startAdding: He.adding,
                    timeZone: p,
                    onClose: () => Te(null),
                    onChange: (e) =>
                      ve((t) =>
                        t
                          ? {
                              ...t,
                              purchases: t.purchases.map((t) =>
                                t.id === e.id
                                  ? {
                                      ...t,
                                      photoCount: e.photoCount,
                                      ...(e.supplierName
                                        ? { supplierName: e.supplierName }
                                        : {}),
                                    }
                                  : t,
                              ),
                            }
                          : t,
                      ),
                  }),
              }),
            ],
          });
    }
    function U({ people: e, selected: i, onPick: o }) {
      const { colors: l } = (0, C.useTheme)(),
        c = (0, t.useRef)(null);
      return e.length
        ? (0, $.jsx)(r.ScrollView, {
            ref: c,
            testID: 'invoices-people',
            horizontal: !0,
            ...K.noSwipe,
            showsHorizontalScrollIndicator: !1,
            keyboardShouldPersistTaps: 'handled',
            onContentSizeChange: () => {},
            style: { flexGrow: 0, marginHorizontal: -14, direction: 'rtl' },
            contentContainerStyle: {
              flexGrow: 1,
              flexDirection: 'row',
              gap: 6,
              paddingHorizontal: 14,
            },
            children: e.map((t) => {
              const r = t.id === i,
                c = (0, O.sameNameContacts)(t.name, e, t.id).length > 0;
              return (0, $.jsxs)(
                n.default,
                {
                  testID: 'invoices-person-chip',
                  accessibilityRole: 'button',
                  accessibilityState: { selected: r },
                  accessibilityLabel: t.name,
                  onPress: () => o(t),
                  style: ({ pressed: e }) => ({
                    minHeight: 34,
                    maxWidth: 220,
                    paddingHorizontal: 12,
                    paddingVertical: c ? 3 : 0,
                    borderRadius: 10,
                    justifyContent: 'center',
                    borderWidth: s.default.hairlineWidth,
                    borderColor: r ? l.accent : l.line,
                    backgroundColor: r ? l.accent : l.surface,
                    opacity: e ? 0.8 : 1,
                  }),
                  children: [
                    (0, $.jsx)(x.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 13.5,
                        lineHeight: 21,
                        color: r ? l.onAccent : l.text,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: t.name,
                    }),
                    c &&
                      (0, $.jsx)(B.PhoneLine, {
                        phone: t.phone,
                        shared: !0,
                        style: r ? { color: l.onAccent } : void 0,
                      }),
                  ],
                },
                t.id,
              );
            }),
          })
        : null;
    }
  },
  955,
  {
    0: 2,
    1: 224,
    2: 94,
    3: 232,
    4: 17,
    5: 99,
    6: 257,
    7: 380,
    8: 515,
    9: 482,
    10: 481,
    11: 516,
    12: 342,
    13: 540,
    14: 480,
    15: 415,
    16: 407,
    17: 385,
    18: 525,
    19: 863,
    20: 448,
    21: 382,
    22: 311,
    23: 623,
    24: 517,
    25: 801,
    26: 519,
    27: 489,
    28: 956,
    29: 957,
    30: 958,
    31: 528,
    32: 959,
    33: 526,
    34: 438,
    35: 527,
    36: 914,
    37: 659,
    38: 660,
    39: 815,
    40: 661,
    41: 435,
    42: 384,
    43: 338,
    44: 994,
    45: 336,
    paths: {
      994: '/_expo/static/js/web/spreadsheet-d6de51a3fee212c7ad69ef045df3d39a.js',
    },
  },
);
