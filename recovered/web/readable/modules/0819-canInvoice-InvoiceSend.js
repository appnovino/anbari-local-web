// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 819; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'canInvoice', {
        enumerable: !0,
        get: function () {
          return H;
        },
      }),
      (_e.InvoiceSend = function ({
        document: e,
        shop: p,
        shopName: x,
        extras: I,
        design: k,
        messages: R,
        contact: T,
        unpriced: W = 0,
        more: V,
        picture: _,
        onDocument: F,
        onContactSaved: B,
      }) {
        const { colors: E } = (0, f.useTheme)(),
          O = (0, w.sendLabels)('purchase' === e.type),
          A = (0, C.invoiceLabels)(),
          K = !!p && 'sale' === e.type && e.receiptNo > 0 && !!e.id && H(p),
          [M, N] = (0, t.useState)(null),
          [q, U] = (0, t.useState)(!1),
          [G, $] = (0, t.useState)(!1),
          [J, Q] = (0, t.useState)(''),
          [X, Y] = (0, t.useState)(K),
          [Z, ee] = (0, t.useState)(''),
          [te, ne] = (0, t.useState)(''),
          [ie, oe] = (0, t.useState)(!1),
          [le, se] = (0, t.useState)(!1),
          ae = (0, t.useRef)(!1),
          re = (0, t.useRef)(null),
          ce = M ?? (0, w.normalizeInvoicePhone)(T?.phone || ''),
          de = 'sale' === e.type && !e.contactId,
          [he, ue] = (0, t.useState)(('sale' === e.type && e.buyerName) || ''),
          [ye, me] = (0, t.useState)(null),
          pe = de ? he.trim() : '';
        async function fe(t) {
          if (!de || !p || 'sale' !== e.type) return;
          const n = t.trim();
          if ((ue(n), me(null), n !== (e.buyerName || '')))
            if (K)
              try {
                const t = await (0, v.setSaleBuyer)(p, e.id, n);
                (F?.(t),
                  me({
                    text: n
                      ? (0, P.L)(
                          '\u0646\u0627\u0645 \u062e\u0631\u06cc\u062f\u0627\u0631 \u0631\u0648\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631 \u0622\u0645\u062f.',
                        )
                      : (0, P.L)(
                          '\u062e\u0631\u06cc\u062f\u0627\u0631 \u062f\u0648\u0628\u0627\u0631\u0647 \xab\u0645\u0634\u062a\u0631\u06cc \u062d\u0636\u0648\u0631\u06cc\xbb \u0634\u062f.',
                        ),
                    ok: !0,
                  }));
              } catch (e) {
                me({
                  text: (0, P.L)(
                    '\u0646\u0627\u0645 \u062e\u0631\u06cc\u062f\u0627\u0631 \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f: {reason}',
                    { reason: (0, b.message)(e) },
                  ),
                  ok: !1,
                });
              }
            else
              me({
                text: (0, P.L)(
                  '\u0646\u0627\u0645 \u062e\u0631\u06cc\u062f\u0627\u0631 \u0641\u0642\u0637 \u0631\u0648\u06cc \u0647\u0645\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0645\u06cc\u200c\u0622\u06cc\u062f.',
                ),
                ok: !0,
              });
        }
        function be(e, t) {
          if ((se(!1), ne(''), e))
            return (
              N((0, w.normalizeInvoicePhone)(e.phone || '')),
              U(!1),
              void fe(e.name)
            );
          (N(null), U(!1), fe(t || ''));
        }
        const ge =
          !!e.contactId &&
          !!T &&
          (0, w.validInvoicePhone)((0, w.normalizeInvoicePhone)(ce)) &&
          (0, w.normalizeInvoicePhone)(T.phone || '') !==
            (0, w.normalizeInvoicePhone)(ce);
        async function xe(t) {
          if (
            !p ||
            !e.contactId ||
            (0, w.normalizeInvoicePhone)(T?.phone || '') === t
          )
            return;
          const n = await (0, v.readContact)(p, e.contactId);
          ((0, w.normalizeInvoicePhone)(n.contact.phone || '') !== t &&
            (await (0, v.updateContact)(p, e.contactId, {
              version: n.contact.version,
              phone: t,
            })),
            B());
        }
        (0, t.useEffect)(() => {
          if (!K || !p) return;
          let t = !0;
          return (
            (re.current ??= (0, v.shareSale)(p, e.id)),
            re.current
              .then(
                (e) => {
                  t && Q(e.url);
                },
                (e) => {
                  t && ee((0, b.message)(e));
                },
              )
              .finally(() => {
                t && Y(!1);
              }),
            () => {
              t = !1;
            }
          );
        }, [K, p, e.id]);
        async function ve(t) {
          if (ae.current || X) return;
          if ((ne(''), 'whatsapp' === t && _)) {
            ((ae.current = !0), oe(!0));
            try {
              if (await _(je())) return;
            } catch (e) {
              return void ne((0, b.message)(e));
            } finally {
              ((ae.current = !1), oe(!1));
            }
          }
          const n = (0, w.normalizeInvoicePhone)(ce);
          if (!(0, w.validInvoicePhone)(n))
            return (U(!0), void ne(n ? O.badPhone : O.needPhone));
          ((ae.current = !0), oe(!0));
          try {
            const l = Se(),
              s = (0, w.invoiceSendUrl)(t, n, l, J),
              c = o.default.openURL(s),
              h = await Promise.allSettled([c, xe(n)]);
            'fulfilled' === h[0].status &&
              K &&
              p &&
              (0, v.markSaleIssued)(p, e.id);
            const u = h.find((e) => 'rejected' === e.status);
            if ('rejected' === u?.status) throw u.reason;
          } catch (e) {
            ne((0, b.message)(e));
          } finally {
            ((ae.current = !1), oe(!1));
          }
        }
        function Se(t = !0) {
          return (0, w.invoiceSendText)(
            'sale' === e.type && de ? { ...e, buyerName: pe || void 0 } : e,
            x,
            I,
            T?.name || pe || void 0,
            G,
            t ? J : '',
            k,
            R,
            b.activeShop?.timezone,
          );
        }
        const je = () => Se(!1),
          Ie = (e, t, o, c, { disabled: h = !1, tint: p } = {}) =>
            (0, L.jsxs)(
              l.default,
              {
                testID: e,
                accessibilityRole: 'button',
                accessibilityLabel: t,
                accessibilityState: { disabled: h, busy: X || ie },
                disabled: h,
                onPress: c,
                style: ({ pressed: e }) => ({
                  flex: 1,
                  minWidth: 0,
                  height: 58,
                  borderRadius: 14,
                  borderWidth: s.default.hairlineWidth,
                  borderColor: E.line,
                  backgroundColor: E.soft,
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 3,
                  paddingHorizontal: 4,
                  opacity: h ? 0.45 : e ? 0.8 : 1,
                }),
                children: [
                  (X || ie) && 'receipt-share' !== e
                    ? (0, L.jsx)(n.default, { size: 'small', color: E.accent })
                    : (0, L.jsx)(y.Icon, {
                        name: o,
                        size: 21,
                        color: p || E.text,
                      }),
                  (0, L.jsx)(u.Copy, {
                    numberOfLines: 1,
                    adjustsFontSizeToFit: !0,
                    minimumFontScale: 0.75,
                    style: {
                      fontSize: 12,
                      lineHeight: 18,
                      color: E.text,
                      textAlign: 'center',
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: t,
                  }),
                ],
              },
              e,
            ),
          ze = (t, n, o, l) =>
            Ie(
              'invoice-send-' + t,
              n,
              o,
              () => {
                ve(t);
              },
              { disabled: X || ie || (!!e.contactId && !T), tint: l },
            ),
          Ce =
            T?.name ||
            (e.contactId
              ? (0, P.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                )
              : pe || O.walkIn),
          we = de && !!p,
          Pe = (0, w.validInvoicePhone)((0, w.normalizeInvoicePhone)(ce)),
          Le = q && (te === O.needPhone || te === O.badPhone),
          He = {
            height: 36,
            borderRadius: 18,
            paddingHorizontal: 12,
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 6,
            backgroundColor: E.soft,
            borderWidth: s.default.hairlineWidth,
            borderColor: E.line,
          };
        return (0, L.jsxs)(c.default, {
          testID: 'invoice-send',
          style: {
            gap: 10,
            padding: 12,
            borderRadius: 18,
            borderWidth: s.default.hairlineWidth,
            borderColor: E.line,
            backgroundColor: E.surface,
          },
          children: [
            (0, L.jsx)(u.Copy, {
              accessibilityRole: 'header',
              style: {
                fontSize: 14,
                lineHeight: 22,
                fontFamily: 'Vazirmatn_700Bold',
              },
              children: O.sendTitle,
            }),
            W > 0 &&
              (0, L.jsx)(u.Copy, {
                testID: 'invoice-send-unpriced',
                style: {
                  fontSize: 12,
                  lineHeight: 20,
                  color: E.warning,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: (0, P.L)(
                  '\u0642\u06cc\u0645\u062a {n} \u06a9\u0627\u0644\u0627 \u0645\u0634\u062e\u0635 \u0646\u06cc\u0633\u062a\u061b \u0627\u0648\u0644 \u0642\u06cc\u0645\u062a \u0631\u0627 \u0628\u06af\u0630\u0627\u0631\u060c \u0628\u0639\u062f \u0641\u0627\u06a9\u062a\u0648\u0631 \u0631\u0627 \u0628\u0641\u0631\u0633\u062a.',
                  { n: W.toLocaleString((0, P.numberLocale)()) },
                ),
              }),
            (0, L.jsxs)(c.default, {
              style: {
                flexDirection: 'row-reverse',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 8,
              },
              children: [
                (0, L.jsxs)(l.default, {
                  testID: 'invoice-send-buyer',
                  accessibilityRole: we ? 'button' : void 0,
                  accessibilityLabel:
                    ('purchase' === e.type ? A.seller : A.buyer) + ': ' + Ce,
                  disabled: !we,
                  onPress: () => se(!0),
                  style: ({ pressed: e }) => ({
                    ...He,
                    maxWidth: '100%',
                    opacity: e ? 0.8 : 1,
                  }),
                  children: [
                    (0, L.jsx)(y.Icon, {
                      name: 'user',
                      size: 15,
                      color: E.muted,
                    }),
                    (0, L.jsxs)(u.Copy, {
                      numberOfLines: 1,
                      style: { flexShrink: 1, fontSize: 13, lineHeight: 20 },
                      children: [
                        (0, L.jsxs)(u.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            color: E.muted,
                          },
                          children: [
                            'purchase' === e.type ? A.seller : A.buyer,
                            ': ',
                          ],
                        }),
                        (0, L.jsx)(u.Copy, {
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: Ce,
                        }),
                      ],
                    }),
                    we &&
                      (0, L.jsx)(u.Copy, {
                        style: {
                          fontSize: 12.5,
                          lineHeight: 20,
                          color: E.accent,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: O.change,
                      }),
                  ],
                }),
                !q &&
                  (0, L.jsxs)(l.default, {
                    testID: 'invoice-send-phone-chip',
                    accessibilityRole: 'button',
                    accessibilityLabel: O.phone,
                    onPress: () => U(!0),
                    style: ({ pressed: e }) => ({
                      ...He,
                      opacity: e ? 0.8 : 1,
                    }),
                    children: [
                      (0, L.jsx)(y.Icon, {
                        name: Pe ? 'edit' : 'plus',
                        size: 13,
                        color: Pe ? E.muted : E.accent,
                      }),
                      (0, L.jsx)(u.Copy, {
                        numberOfLines: 1,
                        style: {
                          fontSize: 13,
                          lineHeight: 20,
                          color: Pe ? E.text : E.accent,
                          ...(Pe
                            ? { writingDirection: 'ltr' }
                            : { fontFamily: 'Vazirmatn_600SemiBold' }),
                        },
                        children: Pe
                          ? (0, w.normalizeInvoicePhone)(ce)
                          : O.addPhone,
                      }),
                    ],
                  }),
              ],
            }),
            q &&
              (0, L.jsxs)(c.default, {
                style: { gap: 4 },
                children: [
                  (0, L.jsxs)(c.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 8,
                    },
                    children: [
                      (0, L.jsx)(u.Copy, {
                        style: { fontSize: 12, lineHeight: 20, color: E.muted },
                        children: O.mobile,
                      }),
                      (0, L.jsx)(c.default, {
                        style: { flex: 1, minWidth: 0, maxWidth: 220 },
                        children: (0, L.jsx)(u.Input, {
                          testID: 'invoice-send-phone',
                          accessibilityLabel: O.phone,
                          value: ce,
                          onChangeText: (e) => {
                            (N((0, w.normalizeInvoicePhone)(e)), ne(''));
                          },
                          keyboardType: 'phone-pad',
                          inputMode: 'tel',
                          autoComplete: 'tel',
                          ltr: !0,
                          placeholder: '09123456789',
                          style: {
                            minHeight: 38,
                            paddingVertical: 6,
                            paddingHorizontal: 12,
                            fontSize: 14,
                            borderRadius: 12,
                          },
                        }),
                      }),
                      ge &&
                        (0, L.jsx)(j.SmallKey, {
                          testID: 'invoice-send-save-phone',
                          kind: 'text',
                          label: (0, P.L)(
                            '\u0630\u062e\u06cc\u0631\u0647 \u0634\u0645\u0627\u0631\u0647',
                          ),
                          onPress: async () => {
                            (await xe((0, w.normalizeInvoicePhone)(ce)),
                              ne(
                                (0, P.L)(
                                  '\u0634\u0645\u0627\u0631\u0647 \u062f\u0631 \u0645\u062e\u0627\u0637\u0628 \xab{name}\xbb \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f.',
                                  { name: T?.name || '' },
                                ),
                              ));
                          },
                        }),
                    ],
                  }),
                  Le &&
                    (0, L.jsx)(u.Copy, {
                      accessibilityRole: 'alert',
                      style: {
                        fontSize: 12.5,
                        lineHeight: 20,
                        color: E.danger,
                      },
                      children: te,
                    }),
                  !!e.contactId &&
                    (0, L.jsx)(u.Copy, {
                      style: { fontSize: 11, lineHeight: 18, color: E.muted },
                      children: O.phoneSave,
                    }),
                ],
              }),
            (0, L.jsxs)(c.default, {
              style: { flexDirection: 'row-reverse', gap: 8 },
              children: [
                ze('whatsapp', O.whatsapp, 'whatsapp', E.whatsapp),
                ze('sms', O.sms, 'sms'),
                z.TELEGRAM_BOT && ze('telegram', O.telegram, 'send'),
                !!V &&
                  Ie('receipt-share', O.more, 'share', V.onPress, {
                    disabled: V.disabled,
                  }),
              ],
            }),
            (0, L.jsxs)(c.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
              },
              children: [
                (0, L.jsx)(u.Copy, {
                  style: { fontSize: 12, lineHeight: 20, color: E.muted },
                  children: (0, P.L)(
                    '\u0645\u062a\u0646 \u067e\u06cc\u0627\u0645',
                  ),
                }),
                (0, L.jsx)(u.Segmented, {
                  compact: !0,
                  height: 30,
                  style: { width: 170 },
                  items: [
                    {
                      value: !1,
                      label: O.shortText,
                      testID: 'invoice-send-short',
                    },
                    {
                      value: !0,
                      label: O.longText,
                      testID: 'invoice-send-long',
                    },
                  ],
                  value: G,
                  onChange: $,
                }),
              ],
            }),
            (0, L.jsx)(c.default, {
              testID: 'invoice-send-preview',
              accessibilityLabel: (0, P.L)(
                '\u067e\u06cc\u0634\u200c\u0646\u0645\u0627\u06cc\u0634 \u067e\u06cc\u0627\u0645',
              ),
              style: {
                borderRadius: 12,
                borderWidth: s.default.hairlineWidth,
                borderColor: E.line,
                backgroundColor: E.soft,
              },
              children: (0, L.jsx)(h.ScrollView, {
                nestedScrollEnabled: !0,
                style: { maxHeight: G ? 170 : 96 },
                contentContainerStyle: {
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                },
                children: (0, L.jsx)(u.Copy, {
                  testID: 'invoice-send-preview-text',
                  selectable: !0,
                  style: {
                    fontSize: 12,
                    lineHeight: 20,
                    color: E.text,
                    textAlign: 'right',
                    writingDirection: 'rtl',
                  },
                  children: Se(),
                }),
              }),
            }),
            !K &&
              (0, L.jsx)(u.Copy, {
                style: { fontSize: 11, lineHeight: 18, color: E.muted },
                children: (0, P.L)(
                  '\u0627\u06cc\u0646 \u0631\u0633\u06cc\u062f \u0641\u0642\u0637 \u0628\u0647\u200c\u0635\u0648\u0631\u062a \u0645\u062a\u0646 \u0627\u0631\u0633\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                ),
              }),
            !!ye &&
              (0, L.jsx)(u.Copy, {
                testID: 'invoice-send-buyer-note',
                style: {
                  fontSize: 12,
                  lineHeight: 19,
                  color: ye.ok ? E.success : E.danger,
                },
                children: ye.text,
              }),
            !!Z &&
              (0, L.jsx)(u.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 12.5, color: E.danger },
                children: Z,
              }),
            !!te &&
              !Le &&
              (0, L.jsx)(u.Copy, {
                accessibilityRole: 'alert',
                style: {
                  fontSize: 12.5,
                  color: te.startsWith(
                    (0, P.L)(
                      '\u0634\u0645\u0627\u0631\u0647 \u062f\u0631 \u0645\u062e\u0627\u0637\u0628',
                    ),
                  )
                    ? E.success
                    : E.danger,
                },
                children: te,
              }),
            we &&
              p &&
              (0, L.jsx)(D, {
                shop: p,
                visible: le,
                title: O.pickTitle,
                current: pe,
                labels: O,
                onClose: () => se(!1),
                onPick: be,
                onCreate: async function (e, t) {
                  if (!p) return;
                  const n = e.trim(),
                    o = (0, w.normalizeInvoicePhone)(t),
                    l = (0, w.validInvoicePhone)(o) ? o : void 0;
                  if (!n)
                    throw Error(
                      (0, P.L)(
                        '\u0646\u0627\u0645 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f.',
                      ),
                    );
                  if (o && !l) throw Error(O.badPhone);
                  const s = await (0, S.contactSaveProblem)(p, n, l);
                  if (s) throw Error(s);
                  (be(
                    (
                      await (0, v.createContact)(p, {
                        name: n,
                        kind: 'customer',
                        ...(l ? { phone: l } : {}),
                      })
                    ).contact,
                  ),
                    me({
                      text: (0, P.L)(
                        '\xab{name}\xbb \u0628\u0647 \u0645\u062e\u0627\u0637\u0628\u06cc\u0646 \u0627\u0636\u0627\u0641\u0647 \u0634\u062f.',
                        { name: n },
                      ),
                      ok: !0,
                    }));
                },
              }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2]));
    r(d[3]);
    var l = e(r(d[4])),
      s = e(r(d[5])),
      c = e(r(d[6])),
      h = r(d[7]),
      u = r(d[8]),
      y = r(d[9]),
      p = r(d[10]),
      f = r(d[11]),
      b = r(d[12]),
      x = r(d[13]),
      v = r(d[14]),
      S = r(d[15]),
      j = r(d[16]),
      I = r(d[17]),
      z = r(d[18]),
      C = r(d[19]),
      w = r(d[20]),
      P = r(d[21]),
      L = r(d[22]);
    const H = (e) =>
      'owner' === e.role ||
      'manager' === e.role ||
      'sell' === e.role ||
      ('staff' === e.role && !!(e.access?.do.invoice ?? e.access?.do.sell));
    function D({
      shop: e,
      visible: n,
      title: o,
      current: s,
      labels: h,
      onClose: z,
      onPick: C,
      onCreate: w,
    }) {
      const { colors: H } = (0, f.useTheme)(),
        [D, k] = (0, t.useState)(''),
        [R, T] = (0, t.useState)(''),
        [W, V] = (0, t.useState)(null),
        [_, F] = (0, t.useState)(''),
        [B, E] = (0, t.useState)(!1);
      ((0, t.useEffect)(() => {
        const e = setTimeout(() => T(D.trim()), 200);
        return () => clearTimeout(e);
      }, [D]),
        (0, t.useEffect)(() => {
          n || (k(''), T(''), V(null), F(''));
        }, [n]));
      const { data: O, error: A } = (0, x.useSwr)(
          n
            ? (0, x.scoped)(e.id, R ? 'contacts:q:' + R : 'contacts:all:')
            : null,
          () => (0, v.listContacts)(e, { q: R || void 0 }),
        ),
        K = D.trim(),
        M = (O?.contacts ?? []).slice(0, 8),
        N = M.some((e) => (0, I.contactKey)(e.name) === (0, I.contactKey)(K)),
        q = (e, t, n, o, s, h = !1) =>
          (0, L.jsxs)(
            l.default,
            {
              testID: e,
              accessibilityRole: 'button',
              onPress: t,
              style: ({ pressed: e }) => ({
                minHeight: 48,
                paddingVertical: 4,
                paddingHorizontal: 10,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
                borderRadius: 12,
                backgroundColor: e ? H.soft : 'transparent',
              }),
              children: [
                n,
                (0, L.jsxs)(c.default, {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    (0, L.jsx)(u.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 14,
                        lineHeight: 21,
                        color: h ? H.accent : H.text,
                      },
                      children: o,
                    }),
                    s,
                  ],
                }),
              ],
            },
            e,
          ),
        U = (e, t) =>
          (0, L.jsx)(c.default, {
            style: {
              width: 28,
              height: 28,
              borderRadius: 14,
              backgroundColor: H.soft,
              alignItems: 'center',
              justifyContent: 'center',
            },
            children: (0, L.jsx)(y.Icon, {
              name: e,
              size: 15,
              color: t || H.muted,
            }),
          });
      return (0, L.jsx)(p.Sheet, {
        visible: n,
        title: o,
        onClose: z,
        children: W
          ? (0, L.jsxs)(c.default, {
              testID: 'invoice-buyer-new',
              style: { gap: 10 },
              children: [
                (0, L.jsx)(u.Copy, {
                  style: {
                    fontSize: 14,
                    lineHeight: 22,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: h.newContact,
                }),
                (0, L.jsx)(u.Input, {
                  testID: 'invoice-buyer-new-name',
                  accessibilityLabel: h.name,
                  value: W.name,
                  maxLength: 60,
                  onChangeText: (e) => V({ ...W, name: e }),
                  placeholder: (0, P.L)(
                    '\u0645\u062b\u0644\u0627\u064b \u0622\u0642\u0627\u06cc \u06a9\u0631\u06cc\u0645\u06cc',
                  ),
                  style: { minHeight: 44, paddingVertical: 8 },
                }),
                (0, L.jsx)(u.Input, {
                  testID: 'invoice-buyer-new-phone',
                  accessibilityLabel: h.mobile,
                  value: W.phone,
                  maxLength: 20,
                  onChangeText: (e) => V({ ...W, phone: e }),
                  keyboardType: 'phone-pad',
                  inputMode: 'tel',
                  autoComplete: 'tel',
                  ltr: !0,
                  placeholder: '09123456789',
                  style: { minHeight: 44, paddingVertical: 8 },
                }),
                !!_ &&
                  (0, L.jsx)(u.Copy, {
                    accessibilityRole: 'alert',
                    style: { fontSize: 12.5, lineHeight: 20, color: H.danger },
                    children: _,
                  }),
                (0, L.jsxs)(c.default, {
                  style: { flexDirection: 'row-reverse', gap: 8 },
                  children: [
                    (0, L.jsx)(j.SmallKey, {
                      testID: 'invoice-send-add-contact',
                      kind: 'primary',
                      icon: 'check',
                      label: h.saveAndPick,
                      disabled: B || !W.name.trim(),
                      onPress: async function () {
                        if (W && !B) {
                          (E(!0), F(''));
                          try {
                            await w(W.name, W.phone);
                          } catch (e) {
                            F((0, b.message)(e));
                          } finally {
                            E(!1);
                          }
                        }
                      },
                    }),
                    (0, L.jsx)(j.SmallKey, {
                      kind: 'text',
                      label: (0, P.L)('\u0628\u0631\u06af\u0634\u062a'),
                      onPress: () => {
                        (V(null), F(''));
                      },
                    }),
                  ],
                }),
              ],
            })
          : (0, L.jsxs)(c.default, {
              style: { gap: 8 },
              children: [
                (0, L.jsx)(u.Input, {
                  testID: 'invoice-buyer-search',
                  accessibilityLabel: h.search,
                  value: D,
                  onChangeText: k,
                  placeholder: h.search,
                  maxLength: 100,
                  style: { minHeight: 44, paddingVertical: 8 },
                }),
                (0, L.jsxs)(c.default, {
                  children: [
                    !!s &&
                      !K &&
                      q(
                        'invoice-buyer-walk-in',
                        () => C(null),
                        U('store'),
                        h.walkIn,
                      ),
                    M.map((e) =>
                      q(
                        'invoice-buyer-' + e.id,
                        () => C(e),
                        (0, L.jsx)(j.Avatar, { name: e.name, size: 28 }),
                        e.name,
                        (0, L.jsx)(S.PhoneLine, { phone: e.phone }),
                      ),
                    ),
                    !!K &&
                      !N &&
                      q(
                        'invoice-buyer-name-only',
                        () => C(null, K),
                        U('receipt'),
                        h.nameOnly + ': \xab' + K + '\xbb',
                      ),
                    q(
                      'invoice-buyer-new-open',
                      () => {
                        (V(
                          /^[\d\u06f0-\u06f9+ ]+$/.test(K)
                            ? { name: '', phone: K }
                            : { name: K, phone: '' },
                        ),
                          F(''));
                      },
                      U('plus', H.accent),
                      '+ ' + h.newContact,
                      void 0,
                      !0,
                    ),
                  ],
                }),
                !!A &&
                  (0, L.jsx)(u.Copy, {
                    style: { fontSize: 12, color: H.danger },
                    children: A,
                  }),
              ],
            }),
      });
    }
  },
  819,
  [
    2, 217, 210, 94, 232, 17, 99, 380, 407, 385, 539, 382, 415, 489, 519, 526,
    517, 529, 494, 803, 820, 311, 338,
  ],
);
