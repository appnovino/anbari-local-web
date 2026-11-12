// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 895; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Statement = function ({
        shop: e,
        contact: o,
        firstAt: i,
        visible: h,
        onClose: x,
      }) {
        const { colors: z } = (0, y.useTheme)(),
          { width: w } = (0, c.default)(),
          L = e.timezone || 'Asia/Tehran',
          D = (0, t.useMemo)(
            () => (0, H.statementPeriods)(Date.now(), L, i),
            [L, i, h],
          ),
          [F, V] = (0, t.useState)(D.thisMonth),
          [A, M] = (0, t.useState)(!1),
          [O, $] = (0, t.useState)(null),
          [q, E] = (0, t.useState)(!1),
          [G, U] = (0, t.useState)(''),
          [N, Z] = (0, t.useState)(''),
          [J, K] = (0, t.useState)(''),
          [Q, X] = (0, t.useState)(!1),
          [Y, ee] = (0, t.useState)(!1),
          te = (0, t.useRef)(0);
        (0, t.useRef)(null);
        async function ne(t) {
          const n = ++te.current;
          (V(t), E(!0), U(''), K(''));
          try {
            const i = await (0, C.readStatement)(e, o.id, t.from, t.to);
            n === te.current && $(i);
          } catch (e) {
            n === te.current &&
              ($(null),
              U(
                (0, b.L)(
                  '\u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u0646\u0634\u062f: {reason}',
                  { reason: (0, m.message)(e) },
                ),
              ));
          } finally {
            n === te.current && E(!1);
          }
        }
        (0, t.useEffect)(() => {
          h && (M(!1), X(!1), ne(D.thisMonth));
        }, [h, o.id]);
        const oe = (0, t.useMemo)(
            () => (O ? P(O, e.name || '') : null),
            [O, e.name],
          ),
          ie = (0, t.useMemo)(
            () => (O ? P(O, e.name || '', j.IMAGE_ROWS) : null),
            [O, e.name],
          );
        async function le(e, t) {
          if (!N && oe && O) {
            (Z(e), K(''));
            try {
              await t();
            } catch (e) {
              K((0, m.message)(e));
            } finally {
              Z('');
            }
          }
        }
        async function se() {
          const e = (0, j.statementText)(oe);
          await (0, k.sharePngDataUrl)(
            await (0, v.drawStatement)(ie, { logo: I }),
            R(O),
            e,
          );
        }
        const re =
            F.key.startsWith('m:') &&
            F.key !== D.thisMonth.key &&
            F.key !== D.lastMonth.key,
          ae = (e, t, n) => ({
            flexGrow: 1,
            flexBasis: t ? '100%' : '30%',
            minWidth: 0,
            height: 38,
            paddingHorizontal: 8,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: s.default.hairlineWidth,
            borderColor: e ? z.accent : z.line,
            backgroundColor: e ? z.accent : z.surface,
            opacity: n ? 0.8 : 1,
          }),
          de = (e, t, n = !1) => {
            const o = e.from === F.from && e.to === F.to;
            return (0, W.jsx)(
              l.default,
              {
                testID: t,
                accessibilityRole: 'button',
                accessibilityState: { selected: o },
                onPress: () => {
                  (M(!1), ne(e));
                },
                style: ({ pressed: e }) => ae(o, n, e),
                children: (0, W.jsx)(u.Copy, {
                  numberOfLines: 1,
                  adjustsFontSizeToFit: !0,
                  minimumFontScale: 0.75,
                  style: {
                    fontSize: 13.5,
                    lineHeight: 21,
                    color: o ? z.onAccent : z.text,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: e.label,
                }),
              },
              e.key,
            );
          },
          ce = (e, t, o, i, r = !1, c = 1) => {
            const h = !oe || !!N || q;
            return (0, W.jsxs)(l.default, {
              testID: e,
              accessibilityRole: 'button',
              accessibilityLabel: t,
              accessibilityState: { disabled: h, busy: N === e },
              disabled: h,
              onPress: () => {
                le(e, i);
              },
              style: ({ pressed: e }) => ({
                flex: c,
                minWidth: 0,
                height: 46,
                borderRadius: 12,
                borderWidth: s.default.hairlineWidth,
                borderColor: r ? z.accent : z.line,
                backgroundColor: r ? z.accent : z.soft,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                paddingHorizontal: 5,
                opacity: h ? 0.5 : e ? 0.8 : 1,
              }),
              children: [
                N === e
                  ? (0, W.jsx)(n.default, {
                      size: 'small',
                      color: r ? z.onAccent : z.accent,
                    })
                  : (0, W.jsx)(f.Icon, {
                      name: o,
                      size: 16,
                      color: r ? z.onAccent : z.text,
                    }),
                (0, W.jsx)(u.Copy, {
                  numberOfLines: 1,
                  adjustsFontSizeToFit: !0,
                  minimumFontScale: 0.7,
                  style: {
                    fontSize: 12.5,
                    lineHeight: 20,
                    flexShrink: 1,
                    fontFamily: 'Vazirmatn_600SemiBold',
                    color: r ? z.onAccent : z.text,
                  },
                  children: t,
                }),
              ],
            });
          },
          he = (e) =>
            'owes' === e ? z.warning : 'credit' === e ? z.accent : z.success,
          me = w >= 760;
        return (0, W.jsx)(p.StatementFrame, {
          visible: h,
          title: (0, b.L)(
            '\u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 {name}',
            { name: o.name },
          ),
          subtitle: (0, b.L)('\u0628\u0627\u0632\u0647: {period}', {
            period: F.label,
          }),
          onClose: x,
          children: (0, W.jsxs)(r.default, {
            testID: 'statement',
            style: { gap: 12 },
            children: [
              (0, W.jsx)(u.Copy, {
                style: { fontSize: 12.5, lineHeight: 20, color: z.muted },
                children: (0, b.L)(
                  '\u0628\u0627\u0632\u0647 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
                ),
              }),
              (0, W.jsxs)(r.default, {
                testID: 'statement-periods',
                style: {
                  flexDirection: 'row-reverse',
                  flexWrap: 'wrap',
                  gap: 6,
                },
                children: [
                  de(D.thisMonth, 'statement-period-this'),
                  de(D.lastMonth, 'statement-period-last'),
                  (0, W.jsx)(l.default, {
                    testID: 'statement-period-pick',
                    accessibilityRole: 'button',
                    accessibilityState: { expanded: A, selected: re },
                    onPress: () => M((e) => !e),
                    style: ({ pressed: e }) => ae(re, !1, e),
                    children: (0, W.jsx)(u.Copy, {
                      numberOfLines: 1,
                      adjustsFontSizeToFit: !0,
                      minimumFontScale: 0.75,
                      style: {
                        fontSize: 13.5,
                        lineHeight: 21,
                        color: re ? z.onAccent : z.text,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: re
                        ? F.label
                        : (0, b.L)(
                            '\u0645\u0627\u0647 \u062f\u06cc\u06af\u0631\u2026',
                          ),
                    }),
                  }),
                  D.recent.map((e, t) =>
                    de(e, 'statement-period-recent-' + [3, 6, 12][t]),
                  ),
                  D.all && de(D.all, 'statement-period-all', !0),
                ],
              }),
              A &&
                (0, W.jsx)(r.default, {
                  testID: 'statement-months',
                  style: {
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap',
                    gap: 6,
                    padding: 8,
                    borderRadius: 12,
                    backgroundColor: z.soft,
                  },
                  children: D.months
                    .slice(2)
                    .map((e) => de(e, 'statement-month')),
                }),
              (0, W.jsxs)(r.default, {
                testID: 'statement-summary',
                style: { gap: 8, opacity: q ? 0.5 : 1 },
                children: [
                  oe
                    ? (0, W.jsx)(r.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          flexWrap: 'wrap',
                          gap: 8,
                        },
                        children: oe.summary.map((e, t) =>
                          (0, W.jsxs)(
                            r.default,
                            {
                              style: {
                                flexGrow: 1,
                                flexBasis: me ? '22%' : '46%',
                                minWidth: 0,
                                padding: 12,
                                gap: 2,
                                borderRadius: 14,
                                backgroundColor: z.surface,
                                borderWidth: e.strong
                                  ? 1.5
                                  : s.default.hairlineWidth,
                                borderColor: e.strong ? he(e.side) : z.line,
                              },
                              children: [
                                (0, W.jsx)(u.Copy, {
                                  numberOfLines: 1,
                                  style: {
                                    fontSize: 12,
                                    lineHeight: 19,
                                    color: z.muted,
                                  },
                                  children: [
                                    (0, b.L)(
                                      '\u0645\u0627\u0646\u062f\u0647 \u0627\u0648\u0644 \u062f\u0648\u0631\u0647',
                                    ),
                                    (0, j.statementWords)(O?.contact.kind)
                                      .debitPeriod,
                                    (0, j.statementWords)(O?.contact.kind)
                                      .creditPeriod,
                                    (0, b.L)(
                                      '\u0645\u0627\u0646\u062f\u0647 \u067e\u0627\u06cc\u0627\u0646 \u062f\u0648\u0631\u0647',
                                    ),
                                  ][t],
                                }),
                                (0, W.jsx)(u.Copy, {
                                  testID: 'statement-summary-' + t,
                                  numberOfLines: 1,
                                  adjustsFontSizeToFit: !0,
                                  minimumFontScale: 0.7,
                                  style: {
                                    fontSize: 15,
                                    lineHeight: 24,
                                    fontFamily: 'Vazirmatn_700Bold',
                                    color: e.strong ? he(e.side) : z.text,
                                  },
                                  children:
                                    0 === t
                                      ? (0, j.ownerShort)(oe.openingToman)
                                      : 3 === t
                                        ? (0, j.ownerShort)(oe.closingToman)
                                        : (0, S.fullToman)(
                                            1 === t
                                              ? oe.debitToman
                                              : oe.creditToman,
                                          ),
                                }),
                              ],
                            },
                            e.label,
                          ),
                        ),
                      })
                    : (0, W.jsx)(u.Copy, {
                        style: {
                          fontSize: 13,
                          lineHeight: 22,
                          color: G ? z.danger : z.muted,
                        },
                        children:
                          G ||
                          (0, b.L)(
                            '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                          ),
                      }),
                  !!oe &&
                    !O?.rows?.length &&
                    (0, W.jsx)(u.Copy, {
                      style: { fontSize: 12, lineHeight: 20, color: z.muted },
                      children: (0, b.L)(
                        '\u062f\u0631 \u0627\u06cc\u0646 \u0628\u0627\u0632\u0647 \u06af\u0631\u062f\u0634\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647 \u0627\u0633\u062a.',
                      ),
                    }),
                  !!O?.truncated &&
                    (0, W.jsx)(u.Copy, {
                      style: { fontSize: 12, lineHeight: 20, color: z.warning },
                      children: (0, b.L)(
                        '\u0627\u06cc\u0646 \u0628\u0627\u0632\u0647 \u062e\u06cc\u0644\u06cc \u0628\u0644\u0646\u062f \u0627\u0633\u062a\u061b \u0628\u0627\u0632\u0647\u0654 \u06a9\u0648\u062a\u0627\u0647\u200c\u062a\u0631\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
                      ),
                    }),
                ],
              }),
              (0, W.jsxs)(r.default, {
                style: { flexDirection: 'row-reverse', gap: 8 },
                children: [
                  ce(
                    'statement-print',
                    (0, b.L)('\u0686\u0627\u067e'),
                    'receipt',
                    async function () {
                      const e = window.open(
                        '',
                        '_blank',
                        'width=900,height=900',
                      );
                      if (!e)
                        throw Error(
                          (0, b.L)(
                            '\u067e\u0646\u062c\u0631\u0647\u0654 \u0686\u0627\u067e \u0628\u0627\u0632 \u0646\u0634\u062f\u061b \u0627\u062c\u0627\u0632\u0647\u0654 \u0628\u0627\u0632 \u0634\u062f\u0646 \u067e\u0646\u062c\u0631\u0647 \u0631\u0627 \u062f\u0631 \u0645\u0631\u0648\u0631\u06af\u0631 \u0628\u062f\u0647.',
                          ),
                        );
                      (e.document.write(
                        (0, j.statementHtml)(oe, {
                          logo: I,
                          fontFace: T,
                          autoPrint: !0,
                          lang: (0, b.localeLang)(),
                        }),
                      ),
                        e.document.close());
                    },
                    !0,
                  ),
                  ce(
                    'statement-save',
                    (0, b.L)(
                      '\u0630\u062e\u06cc\u0631\u0647 \u0639\u06a9\u0633 / PDF',
                    ),
                    'download',
                    async function () {
                      return (
                        (0, k.savePngDataUrl)(
                          await (0, v.drawStatement)(ie, { logo: I }),
                          R(O),
                        ),
                        void K(
                          (0, b.L)(
                            '\u0639\u06a9\u0633 \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f. \u0628\u0631\u0627\u06cc PDF \xab\u0686\u0627\u067e\xbb \u0631\u0627 \u0628\u0632\u0646\u06cc\u062f \u0648 \xab\u0630\u062e\u06cc\u0631\u0647 \u0628\u0647\u200c\u0635\u0648\u0631\u062a PDF\xbb \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u06cc\u062f.',
                          ),
                        )
                      );
                    },
                    !1,
                    1.45,
                  ),
                  ce(
                    'statement-send',
                    (0, b.L)('\u0627\u0631\u0633\u0627\u0644'),
                    'send',
                    async () => X((e) => !e),
                  ),
                ],
              }),
              Q &&
                oe &&
                O &&
                (0, W.jsx)(_, {
                  shop: e,
                  contact: o,
                  model: oe,
                  data: O,
                  onImage: () => {
                    le('statement-send-image', se);
                  },
                  busy: 'statement-send-image' === N,
                }),
              !!J &&
                (0, W.jsx)(u.Copy, {
                  accessibilityRole: 'alert',
                  style: { fontSize: 12.5, lineHeight: 21, color: z.muted },
                  children: J,
                }),
              Y && oe && !1,
              oe && (0, W.jsx)(B, { model: oe, dim: q }),
            ],
          }),
        });
      }),
      (_e.StatementPaper = V));
    var t = _r(d[0]),
      n = e(_r(d[1]));
    _r(d[2]);
    var o = e(_r(d[3])),
      i = e(_r(d[4]));
    _r(d[5]);
    var l = e(_r(d[6])),
      s = e(_r(d[7])),
      r = e(_r(d[8])),
      c = e(_r(d[9])),
      h = _r(d[10]),
      m = _r(d[11]),
      u = _r(d[12]),
      f = _r(d[13]),
      p = _r(d[14]),
      y = _r(d[15]),
      x = _r(d[16]),
      b = _r(d[17]),
      j = _r(d[18]),
      S = _r(d[19]),
      C = _r(d[20]),
      z = _r(d[21]),
      w = _r(d[22]),
      k = _r(d[23]),
      H = _r(d[24]),
      v = _r(d[25]),
      L = _r(d[26]),
      D = _r(d[27]),
      W = _r(d[28]);
    const F = _r(d[29]),
      I = '/anbari-mark.png',
      T = [400, 700]
        .map(
          (e) =>
            `@font-face{font-family:Vazirmatn;font-weight:${e};src:url('/fonts/Vazirmatn-${e}.woff2') format('woff2');font-display:swap}`,
        )
        .join('');
    function P(e, t, n) {
      return (0, j.statementModel)(
        {
          shop: { name: e.shop?.name || t, design: e.shop?.design },
          contact: {
            name: e.contact.name,
            phone: e.contact.phone,
            kind: e.contact.kind,
          },
          from: e.from,
          to: e.to,
          timeZone: e.timezone || 'Asia/Tehran',
          issuedAt: new Date().toISOString(),
          openingToman: e.totals.openingBalanceToman ?? 0,
          rows: e.rows || [],
          openCheques: e.openCheques || [],
        },
        { maxRows: n },
      );
    }
    const R = (e) => `statement-${e.from}-${e.to}.png`;
    function B({ model: e, dim: n }) {
      const { colors: o } = (0, y.useTheme)(),
        i = (0, t.useRef)(null),
        { width: l } = (0, c.default)(),
        m = l >= 820,
        f = (0, W.jsx)(r.default, {
          testID: 'statement-paper',
          style: {
            borderRadius: 14,
            overflow: 'hidden',
            borderWidth: s.default.hairlineWidth,
            borderColor: o.line,
            opacity: n ? 0.5 : 1,
          },
          children: (0, W.jsx)(V, { model: e }),
        });
      return (0, W.jsxs)(r.default, {
        style: { gap: 6 },
        children: [
          (0, W.jsx)(u.Copy, {
            style: {
              fontSize: 15,
              lineHeight: 24,
              fontFamily: 'Vazirmatn_700Bold',
            },
            children: (0, b.L)(
              '\u0631\u06cc\u0632 \u06af\u0631\u062f\u0634 \u062d\u0633\u0627\u0628',
            ),
          }),
          m
            ? (0, W.jsx)(r.default, {
                style: { alignItems: 'center' },
                children: f,
              })
            : (0, W.jsxs)(W.Fragment, {
                children: [
                  (0, W.jsx)(h.ScrollView, {
                    ref: i,
                    horizontal: !0,
                    ...D.noSwipe,
                    showsHorizontalScrollIndicator: !0,
                    onContentSizeChange: () =>
                      i.current?.scrollToEnd({ animated: !1 }),
                    children: f,
                  }),
                  (0, W.jsx)(u.Copy, {
                    style: { fontSize: 11.5, lineHeight: 18, color: o.muted },
                    children: (0, b.L)(
                      '\u0628\u0631\u0627\u06cc \u062f\u06cc\u062f\u0646 \u0647\u0645\u0647\u200c\u06cc \u0633\u062a\u0648\u0646\u200c\u0647\u0627 \u062c\u062f\u0648\u0644 \u0631\u0627 \u0628\u0647 \u0686\u067e \u0648 \u0631\u0627\u0633\u062a \u0628\u06a9\u0634\u06cc\u062f.',
                    ),
                  }),
                ],
              }),
        ],
      });
    }
    function _({
      shop: e,
      contact: o,
      model: c,
      data: h,
      onImage: p,
      busy: S,
    }) {
      const { colors: k } = (0, y.useTheme)(),
        H = (0, L.sendLabels)(),
        [v, D] = (0, t.useState)((0, L.normalizeInvoicePhone)(o.phone || '')),
        [F, I] = (0, t.useState)(''),
        [T, P] = (0, t.useState)(''),
        R = (0, t.useRef)(null),
        { data: B } = (0, z.useSwr)((0, z.scoped)(e.id, 'notebook-shop'), () =>
          (0, C.readNotebookShop)(e),
        ),
        _ = B?.settings?.messages;
      async function V() {
        const t = h.from + '|' + h.to;
        return (
          R.current?.key !== t &&
            (R.current = {
              key: t,
              url: (await (0, C.shareStatement)(e, o.id, h.from, h.to)).url,
            }),
          R.current.url
        );
      }
      async function A(t) {
        if (T) return;
        I('');
        const n = (0, L.normalizeInvoicePhone)(v);
        if ('copyLink' === t || (0, L.validInvoicePhone)(n)) {
          P(t);
          try {
            const l = await V();
            if ('copyLink' === t)
              return (
                await navigator.clipboard.writeText(l),
                void I(H.linkCopied)
              );
            (await i.default.openURL(
              (0, L.invoiceSendUrl)(
                t,
                n,
                (0, w.withStatementHead)((0, j.statementText)(c, l), _, {
                  shop: c.shop,
                  name: o.name,
                }),
                l,
              ),
            ),
              n !== (0, L.normalizeInvoicePhone)(o.phone || '') &&
                (0, C.readContact)(e, o.id)
                  .then((t) =>
                    (0, C.updateContact)(e, o.id, {
                      version: t.contact.version,
                      phone: n,
                    }),
                  )
                  .catch(() => {}));
          } catch (e) {
            I((0, m.message)(e));
          } finally {
            P('');
          }
        } else I(n ? H.badPhone : H.needPhone);
      }
      const M = (e, t, o) =>
        (0, W.jsxs)(
          l.default,
          {
            testID: 'statement-send-' + e,
            accessibilityRole: 'button',
            accessibilityLabel: t,
            disabled: !!T,
            onPress: () => {
              A(e);
            },
            style: ({ pressed: t }) => ({
              flex: 1,
              minWidth: 0,
              height: 46,
              borderRadius: 12,
              borderWidth: s.default.hairlineWidth,
              borderColor: k.line,
              backgroundColor: k.soft,
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              paddingHorizontal: 4,
              opacity: T && T !== e ? 0.5 : t ? 0.8 : 1,
            }),
            children: [
              T === e
                ? (0, W.jsx)(n.default, { size: 'small', color: k.accent })
                : (0, W.jsx)(f.Icon, { name: o, size: 16, color: k.text }),
              (0, W.jsx)(u.Copy, {
                numberOfLines: 1,
                adjustsFontSizeToFit: !0,
                minimumFontScale: 0.7,
                style: {
                  fontSize: 12,
                  lineHeight: 20,
                  flexShrink: 1,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: t,
              }),
            ],
          },
          e,
        );
      return (0, W.jsxs)(r.default, {
        testID: 'statement-send-panel',
        style: {
          gap: 10,
          padding: 12,
          borderRadius: 14,
          borderWidth: s.default.hairlineWidth,
          borderColor: k.line,
          backgroundColor: k.surface,
        },
        children: [
          (0, W.jsxs)(r.default, {
            style: { gap: 5 },
            children: [
              (0, W.jsx)(u.Copy, {
                style: { fontSize: 12, lineHeight: 19, color: k.muted },
                children: H.phone,
              }),
              (0, W.jsx)(u.Input, {
                testID: 'statement-send-phone',
                accessibilityLabel: H.phone,
                value: v,
                onChangeText: (e) => D((0, L.normalizeInvoicePhone)(e)),
                keyboardType: 'phone-pad',
                inputMode: 'tel',
                autoComplete: 'tel',
                ltr: !0,
                placeholder: '09123456789',
              }),
            ],
          }),
          (0, W.jsxs)(r.default, {
            style: { flexDirection: 'row-reverse', gap: 6 },
            children: [
              M('sms', H.sms, 'phone'),
              M('whatsapp', H.whatsapp, 'chat'),
              x.TELEGRAM_BOT && M('telegram', H.telegram, 'send'),
              M('copyLink', H.copyLink, 'link'),
            ],
          }),
          (0, W.jsxs)(l.default, {
            testID: 'statement-send-image',
            accessibilityRole: 'button',
            disabled: S,
            onPress: p,
            style: ({ pressed: e }) => ({
              height: 44,
              borderRadius: 12,
              borderWidth: s.default.hairlineWidth,
              borderColor: k.line,
              backgroundColor: k.soft,
              flexDirection: 'row-reverse',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              opacity: S ? 0.5 : e ? 0.8 : 1,
            }),
            children: [
              S
                ? (0, W.jsx)(n.default, { size: 'small', color: k.accent })
                : (0, W.jsx)(f.Icon, {
                    name: 'download',
                    size: 16,
                    color: k.text,
                  }),
              (0, W.jsx)(u.Copy, {
                style: {
                  fontSize: 13,
                  lineHeight: 21,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: (0, b.L)(
                  '\u0627\u0631\u0633\u0627\u0644 \u0639\u06a9\u0633 \u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628',
                ),
              }),
            ],
          }),
          (0, W.jsx)(u.Copy, {
            style: { fontSize: 11.5, lineHeight: 19, color: k.muted },
            children: (0, b.L)(
              '\u0644\u06cc\u0646\u06a9 \u0641\u0642\u0637 \u0647\u0645\u06cc\u0646 \u0628\u0627\u0632\u0647 \u0631\u0627 \u0646\u0634\u0627\u0646 \u0645\u06cc\u200c\u062f\u0647\u062f \u0648 \u06f7 \u0631\u0648\u0632 \u0628\u0627\u0632 \u0645\u06cc\u200c\u0634\u0648\u062f.',
            ),
          }),
          !!F &&
            (0, W.jsx)(u.Copy, {
              accessibilityRole: 'alert',
              style: {
                fontSize: 12.5,
                lineHeight: 20,
                color: F === H.linkCopied ? k.success : k.danger,
              },
              children: F,
            }),
        ],
      });
    }
    function V({ model: e }) {
      const t = e.theme,
        n = ['6%', '12%', '34%', '13%', '13%', '14%', '8%'],
        i = (e, o, i = !1, l = !1, c = '') =>
          (0, W.jsxs)(
            r.default,
            {
              style: {
                width: n[o],
                paddingHorizontal: 4,
                paddingVertical: 6,
                borderLeftWidth: o < 6 ? s.default.hairlineWidth : 0,
                borderColor: t.line,
                justifyContent: 'center',
              },
              children: [
                (0, W.jsx)(u.Copy, {
                  style: {
                    fontSize: 11,
                    lineHeight: 17,
                    color: l ? t.muted : t.ink,
                    textAlign: 2 === o ? 'right' : 'center',
                    fontFamily: i
                      ? 'Vazirmatn_700Bold'
                      : 'Vazirmatn_400Regular',
                  },
                  children: e,
                }),
                !!c &&
                  (0, W.jsx)(u.Copy, {
                    style: {
                      fontSize: 9.5,
                      lineHeight: 15,
                      color: t.muted,
                      textAlign: 'right',
                    },
                    children: c,
                  }),
              ],
            },
            o,
          );
      return (0, W.jsxs)(r.default, {
        style: { width: 760, backgroundColor: t.paper, padding: 24, gap: 12 },
        children: [
          (0, W.jsxs)(r.default, {
            style: {
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              borderBottomWidth: 2,
              borderColor: t.accent,
              paddingBottom: 12,
              gap: 12,
            },
            children: [
              (0, W.jsxs)(r.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 10,
                  flexShrink: 1,
                },
                children: [
                  (0, W.jsx)(o.default, {
                    source: e.logo ? { uri: e.logo } : F,
                    style: { width: 48, height: 48, borderRadius: 12 },
                    resizeMode: 'contain',
                  }),
                  (0, W.jsxs)(r.default, {
                    style: { flexShrink: 1 },
                    children: [
                      (0, W.jsx)(u.Copy, {
                        style: {
                          fontSize: 17,
                          lineHeight: 27,
                          color: t.ink,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: e.shop,
                      }),
                      !(!e.shopPhone && !e.shopAddress) &&
                        (0, W.jsx)(u.Copy, {
                          style: {
                            fontSize: 11,
                            lineHeight: 17,
                            color: t.muted,
                          },
                          children: [e.shopPhone, e.shopAddress]
                            .filter(Boolean)
                            .join(' \xb7 '),
                        }),
                    ],
                  }),
                ],
              }),
              (0, W.jsxs)(r.default, {
                children: [
                  (0, W.jsx)(u.Copy, {
                    style: {
                      fontSize: 19,
                      lineHeight: 29,
                      color: t.accent,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: e.title,
                  }),
                  (0, W.jsxs)(u.Copy, {
                    style: { fontSize: 11, lineHeight: 17, color: t.muted },
                    children: [e.labels.issued, ': ', e.issued],
                  }),
                ],
              }),
            ],
          }),
          (0, W.jsx)(r.default, {
            style: {
              flexDirection: 'row-reverse',
              flexWrap: 'wrap',
              rowGap: 4,
            },
            children: [
              `${e.labels.customer}: ${e.customer}`,
              `${e.labels.period}: ${e.period}`,
              e.customerPhone ? `${e.labels.phone}: ${e.customerPhone}` : '',
              e.labels.unit,
            ].map((e, n) =>
              (0, W.jsx)(
                u.Copy,
                {
                  style: {
                    width: '50%',
                    fontSize: 12,
                    lineHeight: 19,
                    color: t.ink,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: e,
                },
                n,
              ),
            ),
          }),
          (0, W.jsx)(r.default, {
            style: { flexDirection: 'row-reverse', gap: 8 },
            children: e.summary.map((e) =>
              (0, W.jsxs)(
                r.default,
                {
                  style: {
                    flex: 1,
                    borderWidth: 1,
                    borderColor: e.strong ? t.accent : t.line,
                    borderRadius: 10,
                    padding: 8,
                  },
                  children: [
                    (0, W.jsx)(u.Copy, {
                      style: { fontSize: 10.5, lineHeight: 16, color: t.muted },
                      children: e.label,
                    }),
                    (0, W.jsx)(u.Copy, {
                      style: {
                        fontSize: 13,
                        lineHeight: 20,
                        color: t.ink,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: e.value,
                    }),
                  ],
                },
                e.label,
              ),
            ),
          }),
          (0, W.jsxs)(r.default, {
            style: {
              borderWidth: s.default.hairlineWidth,
              borderColor: t.line,
            },
            children: [
              (0, W.jsx)(r.default, {
                style: {
                  flexDirection: 'row-reverse',
                  backgroundColor: t.tableHeadBg,
                },
                children: e.labels.columns.map((e, t) => i(e, t, !0)),
              }),
              e.lines.map((e, n) =>
                (0, W.jsx)(
                  r.default,
                  {
                    style: {
                      flexDirection: 'row-reverse',
                      borderTopWidth: s.default.hairlineWidth,
                      borderColor: t.line,
                      backgroundColor:
                        'row' === e.kind || 'pending' === e.kind
                          ? t.paper
                          : t.tableHeadBg,
                    },
                    children: [
                      e.no,
                      e.date,
                      e.head,
                      e.debit,
                      e.credit,
                      e.balance,
                      e.tag,
                    ].map((t, n) =>
                      i(
                        t,
                        n,
                        'row' !== e.kind && 'pending' !== e.kind,
                        'pending' === e.kind,
                        2 === n
                          ? [e.items, e.sub].filter(Boolean).join('\n')
                          : '',
                      ),
                    ),
                  },
                  n,
                ),
              ),
            ],
          }),
          !!e.more &&
            (0, W.jsx)(u.Copy, {
              style: { fontSize: 11, lineHeight: 18, color: t.muted },
              children: e.more,
            }),
          e.legacyCheques.length > 0 &&
            (0, W.jsxs)(r.default, {
              style: { gap: 4 },
              children: [
                (0, W.jsxs)(u.Copy, {
                  style: {
                    fontSize: 12,
                    lineHeight: 19,
                    color: t.ink,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: [
                    e.labels.legacyCheques,
                    ' (',
                    e.labels.legacyNote,
                    ')',
                  ],
                }),
                e.legacyCheques.map((e, n) =>
                  (0, W.jsx)(
                    u.Copy,
                    {
                      style: { fontSize: 11, lineHeight: 18, color: t.ink },
                      children: [
                        e.number,
                        e.bank,
                        e.payee,
                        e.due,
                        e.amount,
                      ].join(' \xb7 '),
                    },
                    n,
                  ),
                ),
              ],
            }),
          e.openCheques.length > 0 &&
            (0, W.jsxs)(r.default, {
              style: { gap: 4 },
              children: [
                (0, W.jsxs)(u.Copy, {
                  style: {
                    fontSize: 12,
                    lineHeight: 19,
                    color: t.ink,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: [
                    e.labels.openCheques,
                    ' (',
                    e.labels.openNote,
                    ')',
                  ],
                }),
                e.openCheques.map((e, n) =>
                  (0, W.jsx)(
                    u.Copy,
                    {
                      style: { fontSize: 11, lineHeight: 18, color: t.ink },
                      children: [
                        e.number,
                        e.bank,
                        e.payee,
                        e.due,
                        e.amount,
                      ].join(' \xb7 '),
                    },
                    n,
                  ),
                ),
              ],
            }),
          (0, W.jsx)(r.default, {
            style: { flexDirection: 'row-reverse', gap: 24, marginTop: 24 },
            children: [e.labels.sellerSign, e.labels.buyerSign].map((e) =>
              (0, W.jsx)(
                r.default,
                {
                  style: {
                    flex: 1,
                    borderTopWidth: 1,
                    borderColor: t.ink,
                    paddingTop: 4,
                  },
                  children: (0, W.jsx)(u.Copy, {
                    style: {
                      fontSize: 11,
                      lineHeight: 17,
                      color: t.ink,
                      textAlign: 'center',
                    },
                    children: e,
                  }),
                },
                e,
              ),
            ),
          }),
          (0, W.jsxs)(r.default, {
            style: {
              flexDirection: 'row-reverse',
              justifyContent: 'space-between',
              gap: 10,
            },
            children: [
              (0, W.jsx)(u.Copy, {
                style: {
                  flex: 1,
                  fontSize: 10,
                  lineHeight: 16,
                  color: t.muted,
                },
                children: e.labels.legend,
              }),
              (0, W.jsx)(u.Copy, {
                style: { fontSize: 10, lineHeight: 16, color: t.muted },
                children: e.labels.madeWith,
              }),
            ],
          }),
        ],
      });
    }
  },
  895,
  {
    0: 2,
    1: 217,
    2: 205,
    3: 168,
    4: 210,
    5: 94,
    6: 232,
    7: 17,
    8: 99,
    9: 257,
    10: 380,
    11: 415,
    12: 407,
    13: 385,
    14: 896,
    15: 382,
    16: 494,
    17: 311,
    18: 475,
    19: 435,
    20: 519,
    21: 489,
    22: 821,
    23: 661,
    24: 897,
    25: 898,
    26: 820,
    27: 384,
    28: 338,
    29: 487,
    30: 997,
    31: 336,
    32: 998,
    33: 995,
    paths: {
      997: '/_expo/static/js/web/index-9276617a829a3984ed22a1c59bc256bb.js',
      998: '/_expo/static/js/web/index-78b7861318299fb76514da275e2e8dad.js',
    },
  },
);
