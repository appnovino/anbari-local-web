// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 809; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'ReceiptPaper', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(_e, 'CASUAL_SLIP', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }));
    var t = _r(d[0]),
      l = e(_r(d[1])),
      i = e(_r(d[2])),
      o = e(_r(d[3])),
      r = e(_r(d[4])),
      n = _r(d[5]),
      s = _r(d[6]),
      u = _r(d[7]);
    const c = (0, t.forwardRef)(function (
        {
          model: e,
          pending: c,
          pendingText: f = '',
          onEdit: p,
          locked: m = [],
          hints: x = !0,
          editHint: y = '',
          employeeHint: w = '',
        },
        j,
      ) {
        const v = e.theme,
          S = e.labels,
          $ = h(v),
          [z, C] = (0, t.useState)(0),
          H = (e, t, l) =>
            (0, u.jsx)(n.Copy, {
              numberOfLines: l,
              style: [$.text, ...(Array.isArray(t) ? t : t ? [t] : [])],
              children: e,
            }),
          k = (e, t, l = !1, i) =>
            (0, u.jsxs)(
              r.default,
              {
                style: [$.between, l && $.pay],
                children: [
                  H(e, [$.flex, l ? $.payText : {}]),
                  H(t, [{ flexShrink: 0 }, l ? $.payText : {}]),
                ],
              },
              i,
            ),
          B = (0, u.jsxs)(r.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 6,
              flexShrink: 1,
            },
            children: [
              !!e.logo &&
                (0, u.jsx)(l.default, {
                  source: { uri: e.logo },
                  resizeMode: 'contain',
                  style: { width: 40, height: 40 },
                }),
              H(e.brand, $.bold, 2),
            ],
          }),
          W = c?.buyer ? f : e.buyer,
          A = c?.seller ? f : e.seller,
          T = e.totals.tax
            ? e.totals.extras.filter(
                (e) =>
                  !/\u0645\u0627\u0644\u06cc\u0627\u062a|\u0639\u0648\u0627\u0631\u0636|tax|vat/i.test(
                    e.label,
                  ),
              )
            : e.totals.extras,
          I = (e, t, l, o, n) =>
            p && !m.includes(e)
              ? (0, u.jsx)(
                  i.default,
                  {
                    testID: 'invoice-edit-' + e,
                    accessibilityRole: 'button',
                    accessibilityLabel: t,
                    accessibilityHint: y,
                    onPress: () => p(e),
                    style: ({ pressed: e }) => [l, e && { opacity: 0.6 }],
                    children: o,
                  },
                  n,
                )
              : (0, u.jsx)(r.default, { style: l, children: o }, n),
          P = (t) =>
            (0, u.jsxs)(r.default, {
              style: { gap: 2 },
              children: [
                (t || !!e.totals.discount || !!e.totals.club) &&
                  k(
                    e.totals.discount || e.totals.club ? S.grossTotal : S.total,
                    e.totals.gross,
                  ),
                !!e.totals.discount && k(S.discount, e.totals.discount),
                !!e.totals.club &&
                  k(
                    e.totals.clubLabel || S.clubDiscount,
                    e.totals.club,
                    !1,
                    'club',
                  ),
                T.map((e, t) => k(e.label, e.value, !1, 'x' + t)),
                !!e.totals.tax && k(e.totals.tax.label, e.totals.tax.value),
                k(S.payable, e.totals.payable + ' ' + S.currency, !0),
                !!e.totals.paid &&
                  (0, u.jsxs)(u.Fragment, {
                    children: [
                      k(S.paid, e.totals.paid),
                      k(S.remaining, e.totals.remaining),
                    ],
                  }),
                !!e.head?.partial &&
                  H(e.head.partial, [$.muted, { color: v.accent }]),
              ],
            }),
          D = (e, t, l = !1, i = l ? 9.5 : 10.5) => {
            if (!z || !e) return null;
            const o = (z * t) / 100 - (i > 11 ? 7 : 5),
              r =
                [...e].reduce(
                  (e, t) =>
                    e +
                    (/[0-9\u06f0-\u06f9\u066c\u066b,.\u066a%\u2212-]/.test(t)
                      ? 0.58
                      : 0.52),
                  0,
                ) * (l ? 1.06 : 1);
            return r * i > o
              ? { fontSize: Math.max(7.5, Math.floor(((o - 3) / r) * 2) / 2) }
              : null;
          },
          V = (t, l = !1) =>
            (0, u.jsxs)(r.default, {
              style: $.frame,
              onLayout: (e) => C(e.nativeEvent.layout.width),
              children: [
                (0, u.jsx)(r.default, {
                  style: [$.tr, { backgroundColor: v.tableHeadBg }],
                  children: t.map((e, t) =>
                    (0, u.jsx)(
                      r.default,
                      {
                        style: [
                          $.cell,
                          l && $.tightCell,
                          { width: e.width + '%' },
                        ],
                        children: H(
                          e.label,
                          [
                            $.cellText,
                            l ? $.tightHead : {},
                            $.bold,
                            (l
                              ? D(e.label, e.width, !0)
                              : D(e.label, e.width, !0, 11.5)) || {},
                          ],
                          1,
                        ),
                      },
                      t,
                    ),
                  ),
                }),
                e.lines.map((e, i) =>
                  (0, u.jsx)(
                    r.default,
                    {
                      style: [
                        $.tr,
                        {
                          borderTopWidth: o.default.hairlineWidth,
                          borderColor: v.line,
                        },
                      ],
                      children: t.map((t, i) =>
                        (0, u.jsxs)(
                          r.default,
                          {
                            style: [
                              $.cell,
                              l && $.tightCell,
                              { width: t.width + '%' },
                            ],
                            children: [
                              (0, u.jsx)(n.Copy, {
                                numberOfLines: t.name ? 3 : t.wrap ? 2 : 1,
                                adjustsFontSizeToFit: !t.name && !t.wrap,
                                minimumFontScale: 0.6,
                                style: [
                                  $.text,
                                  $.cellText,
                                  l && $.tightText,
                                  t.name && { textAlign: 'right' },
                                  t.ltr && { writingDirection: 'ltr' },
                                  !t.name &&
                                    (l
                                      ? D(t.value(e), t.width)
                                      : !t.wrap &&
                                        D(t.value(e), t.width, !1, 11.5)),
                                ],
                                children: t.value(e),
                              }),
                              !!t.sub?.(e) &&
                                (0, u.jsx)(n.Copy, {
                                  numberOfLines: 1,
                                  adjustsFontSizeToFit: !0,
                                  minimumFontScale: 0.6,
                                  style: [
                                    $.text,
                                    $.cellText,
                                    {
                                      fontSize: 10,
                                      lineHeight: 15,
                                      color: v.muted,
                                    },
                                    t.name && { textAlign: 'right' },
                                    !t.name && D(t.sub(e), t.width, !1, 10),
                                  ],
                                  children: t.sub(e),
                                }),
                            ],
                          },
                          i,
                        ),
                      ),
                    },
                    e.id || i,
                  ),
                ),
              ],
            });
        let F;
        return (
          (F =
            'casual' === e.layout
              ? (0, u.jsxs)(r.default, {
                  style: { gap: b.gap },
                  children: [
                    (0, u.jsxs)(r.default, {
                      style: { alignItems: 'center', gap: 5, paddingBottom: 2 },
                      children: [
                        !!e.logo &&
                          (0, u.jsx)(l.default, {
                            source: { uri: e.logo },
                            resizeMode: 'contain',
                            style: { width: 44, height: 44 },
                          }),
                        H(e.brand, [
                          $.bold,
                          { fontSize: 16, lineHeight: 26, textAlign: 'center' },
                        ]),
                        H(`${e.date} \xb7 ${S.number} ${e.number}`, [
                          $.muted,
                          { textAlign: 'center' },
                        ]),
                        !e.purchase &&
                          W !== S.unknownBuyer &&
                          H(`${S.buyer}: ${W}`, { textAlign: 'center' }),
                      ],
                    }),
                    (0, u.jsx)(r.default, { style: [$.dash, $.slipDash] }),
                    e.lines.map((e, t) =>
                      (0, u.jsxs)(
                        r.default,
                        {
                          style: [$.between, $.slipRow],
                          children: [
                            H(
                              `${e.name} \xd7${e.qty}${e.discount ? ` (${e.discount})` : ''}`,
                              $.flex,
                            ),
                            H(e.total, { flexShrink: 0 }),
                          ],
                        },
                        e.id || t,
                      ),
                    ),
                    (0, u.jsx)(r.default, { style: [$.dash, $.slipDash] }),
                    !!e.totals.discount && k(S.discount, e.totals.discount),
                    !!e.totals.club &&
                      k(
                        e.totals.clubLabel || S.clubDiscount,
                        e.totals.club,
                        !1,
                        'club',
                      ),
                    e.totals.extras.map((e, t) =>
                      k(e.label, e.value, !1, 'x' + t),
                    ),
                    (0, u.jsxs)(r.default, {
                      style: $.between,
                      children: [
                        H(S.total, [$.bold, { fontSize: 16, lineHeight: 26 }]),
                        H(e.totals.payable, [
                          $.bold,
                          { fontSize: 16, lineHeight: 26 },
                        ]),
                      ],
                    }),
                    H(e.status, [$.muted, { textAlign: 'center' }]),
                    !!e.footer &&
                      H(e.footer, [
                        $.muted,
                        { textAlign: 'center', marginTop: 6 },
                      ]),
                  ],
                })
              : 'formal' === e.layout
                ? (0, u.jsxs)(r.default, {
                    style: { gap: 10 },
                    children: [
                      (0, u.jsxs)(r.default, {
                        style: [
                          $.between,
                          {
                            borderBottomWidth: 2,
                            borderColor: v.accent,
                            paddingBottom: 8,
                          },
                        ],
                        children: [
                          (0, u.jsxs)(r.default, {
                            style: $.flex,
                            children: [
                              H(
                                e.purchase ? S.formalPurchase : S.formalTitle,
                                $.title,
                              ),
                              H(`${S.number} ${e.number} \xb7 ${e.date}`),
                              e.recordedBy
                                ? I(
                                    'employee',
                                    S.recordedBy,
                                    {},
                                    H(
                                      `${S.recordedBy}: ${e.recordedBy}`,
                                      $.muted,
                                    ),
                                  )
                                : p &&
                                  x &&
                                  !m.includes('employee') &&
                                  I(
                                    'employee',
                                    w,
                                    {},
                                    H('+ ' + w, [$.muted, { color: v.accent }]),
                                  ),
                            ],
                          }),
                          B,
                        ],
                      }),
                      (0, u.jsx)(r.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          flexWrap: 'wrap',
                          gap: 8,
                        },
                        children: [
                          ['seller', S.seller, e.sellerParty, c?.seller],
                          ['buyer', S.buyer, e.buyerParty, c?.buyer],
                        ].map(([e, t, l, i]) =>
                          I(
                            e,
                            t,
                            [$.box, { flexGrow: 1, flexBasis: 150 }],
                            (0, u.jsxs)(u.Fragment, {
                              children: [
                                H(t, $.bold),
                                H(i ? f : l.name),
                                !!l.phone && H(`${S.phone} ${l.phone}`),
                                !!l.ids && H(l.ids),
                                !!l.address && H(`${S.address}: ${l.address}`),
                                !!l.postalCode &&
                                  H(`${S.postalCode}: ${l.postalCode}`),
                              ],
                            }),
                            e,
                          ),
                        ),
                      }),
                      V(
                        e.showCodes
                          ? [
                              {
                                label: S.colRow,
                                width: 7,
                                value: (e) => e.row,
                              },
                              {
                                label: S.colItem,
                                width: 19,
                                value: (e) => e.name,
                                sub: (e) => e.reason,
                                name: !0,
                              },
                              {
                                label: S.colCode,
                                width: 12,
                                value: (e) => e.code,
                                ltr: !0,
                              },
                              {
                                label: S.colUnit,
                                width: 9,
                                value: (e) => e.unit,
                              },
                              {
                                label: S.colQty,
                                width: 9,
                                value: (e) => e.quantity,
                              },
                              {
                                label: S.colPrice,
                                width: 15,
                                value: (e) => e.price,
                              },
                              {
                                label: S.colDiscount,
                                width: 9,
                                value: (e) =>
                                  '\u2014' === e.discountCell
                                    ? ''
                                    : e.discountCell,
                              },
                              {
                                label: S.colAmount,
                                width: 20,
                                value: (e) => e.total,
                              },
                            ]
                          : [
                              {
                                label: S.colRow,
                                width: 8,
                                value: (e) => e.row,
                              },
                              {
                                label: S.colItem,
                                width: 24,
                                value: (e) => e.name,
                                sub: (e) => e.reason,
                                name: !0,
                              },
                              {
                                label: S.colUnit,
                                width: 9,
                                value: (e) => e.unit,
                              },
                              {
                                label: S.colQty,
                                width: 9,
                                value: (e) => e.quantity,
                              },
                              {
                                label: S.colPrice,
                                width: 18,
                                value: (e) => e.price,
                              },
                              {
                                label: S.colDiscount,
                                width: 10,
                                value: (e) =>
                                  '\u2014' === e.discountCell
                                    ? ''
                                    : e.discountCell,
                              },
                              {
                                label: S.colAmount,
                                width: 22,
                                value: (e) => e.total,
                              },
                            ],
                        !0,
                      ),
                      P(!0),
                      !![e.totals.words, e.totals.balance].some(Boolean) &&
                        H(
                          [
                            e.totals.words && `${S.inWords}: ${e.totals.words}`,
                            e.status,
                            e.totals.balance &&
                              `${e.totals.balance.label}: ${e.totals.balance.value}`,
                          ]
                            .filter(Boolean)
                            .join(' \xb7 '),
                        ),
                      (0, u.jsx)(r.default, {
                        style: { flexDirection: 'row-reverse', gap: 8 },
                        children: ['seller', 'buyer'].map((t) => {
                          const i = 'seller' === t ? S.sellerSign : S.buyerSign,
                            o = e.head
                              ? e.head.stamps[t]
                              : 'seller' === t
                                ? e.signature
                                : void 0;
                          return I(
                            'seller' === t ? 'signSeller' : 'signBuyer',
                            i,
                            [$.box, { flex: 1, minHeight: 64 }],
                            (0, u.jsxs)(u.Fragment, {
                              children: [
                                H(i, $.muted),
                                !!o &&
                                  (0, u.jsx)(l.default, {
                                    source: { uri: o },
                                    resizeMode: 'contain',
                                    style: { width: '100%', height: 44 },
                                  }),
                                (0, u.jsx)(s.SignatureView, {
                                  sign: e.head?.signs[t],
                                  ink: v.ink,
                                  height: 52,
                                }),
                              ],
                            }),
                            t,
                          );
                        }),
                      }),
                      e.custom &&
                        !!e.footer &&
                        H(e.footer, [$.muted, { textAlign: 'center' }]),
                    ],
                  })
                : (0, u.jsxs)(r.default, {
                    style: { gap: 10 },
                    children: [
                      (0, u.jsxs)(r.default, {
                        style: [
                          $.between,
                          {
                            backgroundColor: v.headerBg,
                            borderRadius: 8,
                            padding: 10,
                            borderWidth: o.default.hairlineWidth,
                            borderColor: v.line,
                          },
                        ],
                        children: [
                          (0, u.jsxs)(r.default, {
                            style: $.flex,
                            children: [
                              H(e.title, [$.title, { color: v.headerInk }]),
                              H(`${S.number} ${e.number} \xb7 ${e.date}`, [
                                { color: v.headerInk, fontSize: 12 },
                              ]),
                              H(
                                `${e.purchase ? S.seller : S.buyer}: ${e.purchase ? A : W}`,
                                [{ color: v.headerInk, fontSize: 12 }],
                              ),
                              !!e.recordedBy &&
                                H(`${S.recordedBy}: ${e.recordedBy}`, [
                                  { color: v.headerInk, fontSize: 12 },
                                ]),
                            ],
                          }),
                          (0, u.jsxs)(r.default, {
                            style: { flexShrink: 1, maxWidth: '45%', gap: 2 },
                            children: [
                              (0, u.jsxs)(r.default, {
                                style: {
                                  flexDirection: 'row-reverse',
                                  alignItems: 'center',
                                  gap: 6,
                                },
                                children: [
                                  !!e.logo &&
                                    (0, u.jsx)(l.default, {
                                      source: { uri: e.logo },
                                      resizeMode: 'contain',
                                      style: { width: 40, height: 40 },
                                    }),
                                  H(
                                    e.brand,
                                    [
                                      $.bold,
                                      { color: v.headerInk, flexShrink: 1 },
                                    ],
                                    2,
                                  ),
                                ],
                              }),
                              e.custom &&
                                !!e.address &&
                                H(e.address, [
                                  {
                                    color: v.headerInk,
                                    fontSize: 11,
                                    lineHeight: 18,
                                  },
                                ]),
                              e.custom &&
                                !!e.phone &&
                                H(e.phone, [
                                  {
                                    color: v.headerInk,
                                    fontSize: 11,
                                    lineHeight: 18,
                                  },
                                ]),
                            ],
                          }),
                        ],
                      }),
                      V([
                        {
                          label: S.colGoods,
                          width: 34,
                          value: (e) =>
                            e.name + (e.discount ? ` (${e.discount})` : ''),
                          name: !0,
                        },
                        {
                          label: S.colQty,
                          width: 18,
                          value: (e) => e.qty,
                          wrap: !0,
                        },
                        {
                          label: S.colPrice,
                          width: 22,
                          value: (e) => e.netPrice || e.price,
                          sub: (e) => (e.netPrice ? e.price : e.per),
                        },
                        {
                          label: S.colAmount,
                          width: 26,
                          value: (e) => e.total,
                        },
                      ]),
                      P(!1),
                      H(e.status, $.muted),
                      e.custom
                        ? (0, u.jsxs)(r.default, {
                            style: [
                              $.box,
                              {
                                alignSelf: 'flex-start',
                                width: 180,
                                minHeight: 80,
                              },
                            ],
                            children: [
                              H(e.signHere, [$.muted, { textAlign: 'center' }]),
                              !!e.signature &&
                                (0, u.jsx)(l.default, {
                                  source: { uri: e.signature },
                                  resizeMode: 'contain',
                                  style: { width: '100%', height: 50 },
                                }),
                            ],
                          })
                        : !!e.shopPhone &&
                          H(`${S.shopPhone} ${e.shopPhone}`, {
                            textAlign: 'center',
                          }),
                      !!e.footer &&
                        H(e.footer, [$.muted, { textAlign: 'center' }]),
                    ],
                  })),
          (0, u.jsx)(r.default, {
            ref: j,
            collapsable: !1,
            testID: 'receipt-paper-' + e.layout,
            style: [
              $.paper,
              'casual' === e.layout && {
                maxWidth: b.maxWidth,
                alignSelf: 'center',
                width: '100%',
                paddingHorizontal: 16,
                paddingVertical: b.paddingVertical,
              },
            ],
            children: F,
          })
        );
      }),
      h = (e) =>
        o.default.create({
          paper: {
            backgroundColor: e.paper,
            padding: 14,
            borderRadius: 14,
            borderWidth: o.default.hairlineWidth,
            borderColor: e.line,
          },
          text: {
            color: e.ink,
            fontSize: 12.5,
            lineHeight: 21,
            fontFamily: 'Vazirmatn_400Regular',
            fontVariant: ['tabular-nums'],
          },
          bold: { fontFamily: 'Vazirmatn_700Bold' },
          muted: { color: e.muted, fontSize: 12 },
          title: {
            fontSize: 17,
            lineHeight: 27,
            fontFamily: 'Vazirmatn_700Bold',
          },
          flex: { flex: 1, minWidth: 0 },
          between: {
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 8,
          },
          pay: {
            backgroundColor: e.payableBg,
            borderRadius: 6,
            paddingHorizontal: 8,
            paddingVertical: 5,
            marginTop: 3,
          },
          payText: {
            color: e.payableInk,
            fontFamily: 'Vazirmatn_700Bold',
            fontSize: 14,
            lineHeight: 23,
          },
          dash: {
            borderTopWidth: 1,
            borderStyle: 'dashed',
            borderColor: e.muted,
            marginVertical: 4,
          },
          frame: {
            borderWidth: o.default.hairlineWidth,
            borderColor: e.line,
            borderRadius: 4,
            overflow: 'hidden',
          },
          tr: { flexDirection: 'row-reverse' },
          cell: {
            paddingHorizontal: 3,
            paddingVertical: 6,
            justifyContent: 'center',
            borderLeftWidth: o.default.hairlineWidth,
            borderColor: e.line,
            minWidth: 0,
          },
          cellText: { fontSize: 11.5, lineHeight: 18, textAlign: 'center' },
          tightCell: { paddingHorizontal: 2, paddingVertical: 5 },
          tightText: { fontSize: 10.5, lineHeight: 16 },
          tightHead: { fontSize: 9.5, lineHeight: 15 },
          box: {
            borderWidth: 1,
            borderColor: e.line,
            borderRadius: 6,
            paddingHorizontal: 9,
            paddingVertical: 6,
          },
          slipDash: { marginVertical: 8 },
          slipRow: { paddingVertical: 3 },
        }),
      b = { maxWidth: 290, paddingVertical: 24, gap: 7 };
  },
  809,
  [2, 168, 232, 17, 99, 407, 810, 338],
);
