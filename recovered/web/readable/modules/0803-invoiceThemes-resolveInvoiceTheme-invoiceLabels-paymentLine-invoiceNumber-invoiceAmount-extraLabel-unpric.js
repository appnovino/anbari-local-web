// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 803; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'invoiceThemes', {
        enumerable: !0,
        get: function () {
          return n.invoiceThemes;
        },
      }),
      Object.defineProperty(e, 'resolveInvoiceTheme', {
        enumerable: !0,
        get: function () {
          return n.resolveInvoiceTheme;
        },
      }),
      Object.defineProperty(e, 'invoiceLabels', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }),
      (e.paymentLine = y),
      Object.defineProperty(e, 'invoiceNumber', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(e, 'invoiceAmount', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }),
      Object.defineProperty(e, 'extraLabel', {
        enumerable: !0,
        get: function () {
          return P;
        },
      }),
      (e.unpricedLines = function (t) {
        return 'sale' !== t.type
          ? []
          : t.lines.filter(
              (n) =>
                !n.corrected &&
                (n.unpriced ||
                  (0 === t.receiptNo &&
                    void 0 === n.unitPrice &&
                    void 0 === n.saleTotal)),
            );
      }),
      (e.invoicePayment = $),
      (e.lineDiscount = x),
      Object.defineProperty(e, 'nationalIdLabel', {
        enumerable: !0,
        get: function () {
          return C;
        },
      }),
      (e.invoiceModel = k),
      (e.invoiceText = j),
      (e.receiptText = function (t, n, o = [], i, s, c) {
        return j(k(t, n, o, i, s, c));
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]),
      i = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      l = r(d[6]),
      u = r(d[7]),
      p = r(d[8]),
      b = r(d[9]),
      L = r(d[10]);
    const v = () => ({
        invoice: (0, s.L)(
          '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0641\u0631\u0648\u0634',
        ),
        invoiceNo: (0, s.L)(
          '\u0634\u0645\u0627\u0631\u0647 \u0641\u0627\u06a9\u062a\u0648\u0631',
        ),
        date: (0, s.L)('\u062a\u0627\u0631\u06cc\u062e'),
        buyer: (0, s.L)('\u062e\u0631\u06cc\u062f\u0627\u0631'),
        seller: (0, s.L)('\u0641\u0631\u0648\u0634\u0646\u062f\u0647'),
        colRow: (0, s.L)('\u0631\u062f\u06cc\u0641'),
        colItem: (0, s.L)('\u0634\u0631\u062d \u06a9\u0627\u0644\u0627'),
        colQty: (0, s.L)('\u062a\u0639\u062f\u0627\u062f'),
        colUnitPrice: (0, t.shopUnitText)(
          (0, s.L)('\u0641\u06cc (\u062a\u0648\u0645\u0627\u0646)'),
        ),
        colTotal: (0, t.shopUnitText)(
          (0, s.L)('\u0645\u0628\u0644\u063a (\u062a\u0648\u0645\u0627\u0646)'),
        ),
        subtotal: (0, s.L)(
          '\u062c\u0645\u0639 \u06a9\u0627\u0644\u0627\u0647\u0627',
        ),
        payable: (0, s.L)(
          '\u0645\u0628\u0644\u063a \u0642\u0627\u0628\u0644 \u067e\u0631\u062f\u0627\u062e\u062a',
        ),
        paid: (0, s.L)(
          '\u067e\u0631\u062f\u0627\u062e\u062a\u200c\u0634\u062f\u0647',
        ),
        remaining: (0, s.L)('\u0645\u0627\u0646\u062f\u0647'),
        statusCashPaid: (0, s.L)(
          '\u0646\u0642\u062f\u06cc \xb7 \u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f',
        ),
        statusCardPaid: (0, s.L)(
          '\u06a9\u0627\u0631\u062a \xb7 \u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f',
        ),
        statusCredit: (0, s.L)(
          '\u0646\u0633\u06cc\u0647 \xb7 \u067e\u0631\u062f\u0627\u062e\u062a \u0646\u0634\u062f\u0647',
        ),
        statusPartial: (0, s.L)(
          '\u0646\u0633\u06cc\u0647 \xb7 \u0628\u062e\u0634\u06cc \u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f',
        ),
        statusCheque: (0, s.L)('\u0686\u06a9'),
        print: (0, s.L)('\u0686\u0627\u067e'),
        share: (0, s.L)('\u0627\u0631\u0633\u0627\u0644'),
        saveImage: (0, s.L)(
          '\u0630\u062e\u06cc\u0631\u0647 \u0639\u06a9\u0633',
        ),
        unknownBuyer: (0, s.L)(
          '\u0645\u0634\u062a\u0631\u06cc \u062d\u0636\u0648\u0631\u06cc',
        ),
        discount: (0, s.L)('\u062a\u062e\u0641\u06cc\u0641'),
        clubDiscount: (0, s.L)(
          '\u062a\u062e\u0641\u06cc\u0641 \u0628\u0627\u0634\u06af\u0627\u0647',
        ),
        grossTotal: (0, s.L)(
          '\u062c\u0645\u0639 \u067e\u06cc\u0634 \u0627\u0632 \u062a\u062e\u0641\u06cc\u0641',
        ),
        total: (0, s.L)('\u062c\u0645\u0639'),
        tax: (0, s.L)(
          '\u0645\u0627\u0644\u06cc\u0627\u062a \u0648 \u0639\u0648\u0627\u0631\u0636',
        ),
        inWords: (0, s.L)('\u0628\u0647 \u062d\u0631\u0648\u0641'),
        colDiscount: (0, s.L)('\u062a\u062e\u0641\u06cc\u0641'),
        colGoods: (0, s.L)('\u06a9\u0627\u0644\u0627'),
        colPrice: (0, s.L)('\u0641\u06cc'),
        colAmount: (0, s.L)('\u0645\u0628\u0644\u063a'),
        formalTitle: (0, s.L)(
          '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0641\u0631\u0648\u0634 \u06a9\u0627\u0644\u0627',
        ),
        formalPurchase: (0, s.L)(
          '\u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0631\u06cc\u062f \u06a9\u0627\u0644\u0627',
        ),
        phone: (0, s.L)('\u062a\u0644\u0641\u0646'),
        address: (0, s.L)('\u0646\u0634\u0627\u0646\u06cc'),
        economicId: (0, s.L)(
          '\u06a9\u062f \u0627\u0642\u062a\u0635\u0627\u062f\u06cc',
        ),
        nationalId: (0, s.L)(
          '\u0634\u0646\u0627\u0633\u0647\u0654 \u0645\u0644\u06cc',
        ),
        shopPhone: (0, s.L)(
          '\u062a\u0644\u0641\u0646 \u0641\u0631\u0648\u0634\u06af\u0627\u0647',
        ),
        postalCode: (0, s.L)('\u06a9\u062f \u067e\u0633\u062a\u06cc'),
        registrationNo: (0, s.L)(
          '\u0634\u0645\u0627\u0631\u0647\u0654 \u062b\u0628\u062a',
        ),
        nationalCode: (0, s.L)('\u06a9\u062f \u0645\u0644\u06cc'),
        colUnit: (0, s.L)('\u0648\u0627\u062d\u062f'),
        colCode: (0, s.L)(
          '\u0634\u0646\u0627\u0633\u0647\u0654 \u06a9\u0627\u0644\u0627',
        ),
        sellerSign: (0, s.L)(
          '\u0645\u0647\u0631 \u0648 \u0627\u0645\u0636\u0627\u06cc \u0641\u0631\u0648\u0634\u0646\u062f\u0647',
        ),
        buyerSign: (0, s.L)(
          '\u0627\u0645\u0636\u0627\u06cc \u062e\u0631\u06cc\u062f\u0627\u0631',
        ),
        balanceOwes: (0, s.L)(
          '\u0645\u0627\u0646\u062f\u0647 \u062d\u0633\u0627\u0628 \u062e\u0631\u06cc\u062f\u0627\u0631 \u062a\u0627 \u0627\u0645\u0631\u0648\u0632',
        ),
        balanceCredit: (0, s.L)(
          '\u0637\u0644\u0628 \u062e\u0631\u06cc\u062f\u0627\u0631 \u062a\u0627 \u0627\u0645\u0631\u0648\u0632',
        ),
        number: (0, s.L)('\u0634\u0645\u0627\u0631\u0647\u0654'),
        purchaseInvoice: (0, s.L)(
          '\u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0631\u06cc\u062f',
        ),
        recordedBy: (0, s.L)(
          '\u062b\u0628\u062a\u200c\u0634\u062f\u0647 \u062a\u0648\u0633\u0637',
        ),
        noPrice: (0, s.L)('\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a'),
        statusPaid: (0, s.L)(
          '\u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f',
        ),
        statusUnpaid: (0, s.L)(
          '\u067e\u0631\u062f\u0627\u062e\u062a \u0646\u0634\u062f\u0647',
        ),
        statusUnknown: (0, s.L)(
          '\u0648\u0636\u0639\u06cc\u062a \u067e\u0631\u062f\u0627\u062e\u062a \u0646\u0627\u0645\u0634\u062e\u0635',
        ),
        unknownSeller: (0, s.L)(
          '\u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0646\u0627\u0645\u0634\u062e\u0635',
        ),
        currency: (0, t.shopUnitText)(
          (0, s.L)('\u062a\u0648\u0645\u0627\u0646'),
        ),
      }),
      h = {
        cash: () => (0, s.L)('\u0646\u0642\u062f'),
        card: () =>
          (0, s.L)(
            '\u06a9\u0627\u0631\u062a \u0628\u0647 \u06a9\u0627\u0631\u062a',
          ),
        cheque: () => (0, s.L)('\u0686\u06a9'),
        credit: () => (0, s.L)('\u0646\u0633\u06cc\u0647'),
      };
    function y(n, o, i) {
      const c =
        'credit' === n
          ? h.credit()
          : (0, s.L)('\u067e\u0631\u062f\u0627\u062e\u062a: {method}', {
              method: (h[n] || h.cash)(),
            });
      if (void 0 === o || void 0 === i) return c;
      const l = Math.max(0, i - o),
        u =
          l > 0
            ? [
                (0, t.shopUnitText)(
                  (0, s.L)(
                    '\u0645\u0627\u0646\u062f\u0647: {amount} \u062a\u0648\u0645\u0627\u0646',
                    { amount: T(l) },
                  ),
                ),
              ]
            : [];
      return 'cheque' === n
        ? [
            c,
            ...(o > 0
              ? [
                  (0, t.shopUnitText)(
                    (0, s.L)('{amount} \u062a\u0648\u0645\u0627\u0646', {
                      amount: T(o),
                    }),
                  ),
                ]
              : []),
            ...u,
          ].join(' \xb7 ')
        : o >= i
          ? [c, (0, s.L)('\u062a\u0633\u0648\u06cc\u0647 \u0634\u062f')].join(
              ' \xb7 ',
            )
          : o > 0
            ? [
                (0, t.shopUnitText)(
                  (0, s.L)(
                    '\u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f: {amount} \u062a\u0648\u0645\u0627\u0646',
                    { amount: T(o) },
                  ),
                ),
                ...u,
              ].join(' \xb7 ')
            : [c, ...u].join(' \xb7 ');
    }
    const f = (t) =>
        t.toLocaleString((0, s.numberLocale)(), { maximumFractionDigits: 3 }),
      T = (n) => (void 0 === n ? '\u2014' : (0, t.fullToman)(n)),
      P = (t) =>
        'percent' === t.kind ? `${t.label} (${f(t.value)}\u066a)` : t.label;
    function $(t, n, o) {
      return 'cheque' === t
        ? { key: 'statusCheque', tone: 'warning' }
        : void 0 === n || void 0 === o
          ? { key: 'statusUnknown', tone: 'warning' }
          : n >= o
            ? {
                key:
                  'cash' === t
                    ? 'statusCashPaid'
                    : 'card' === t
                      ? 'statusCardPaid'
                      : 'statusPaid',
                tone: 'success',
              }
            : n > 0
              ? { key: 'statusPartial', tone: 'warning' }
              : {
                  key: 'credit' === t ? 'statusCredit' : 'statusUnpaid',
                  tone: 'warning',
                };
    }
    const w = (t) =>
      'number' == typeof t && Number.isFinite(t) ? Math.round(t) : void 0;
    function x(t, n) {
      const o = Math.max(0, w(t.invoiceShare) ?? 0),
        i = w(t.grossTotal),
        s =
          t.discount &&
          'object' == typeof t.discount &&
          void 0 === w(t.lineDiscount)
            ? t.discount
            : null,
        l =
          i ??
          (s && void 0 !== t.unitPrice
            ? (0, c.lineGross)(t.quantity, t.unitPrice)
            : void 0),
        u = Math.max(
          0,
          w(t.lineDiscount) ??
            (s && void 0 !== l ? (0, c.discountOn)(l, s) : 0),
        ),
        p = i ?? (void 0 === n ? void 0 : n + u + o),
        b =
          'percent' === s?.kind
            ? s.value
            : p && u
              ? Math.round((100 * u) / p)
              : 0;
      return {
        gross: p,
        off: u,
        share: o,
        shown: void 0 === p ? n : p - u,
        percent:
          !!u &&
          !!p &&
          b > 0 &&
          (0, c.discountOn)(p, { kind: 'percent', value: b }) === u
            ? b
            : 0,
      };
    }
    const I = (t) => (t ? (0, s.localDigits)(t.trim()) : ''),
      C = (t, n) =>
        /^[0-9]{10}$/.test(n.trim()) ? t.nationalCode : t.nationalId;
    function k(c, h, k = [], j, q, N, U = {}) {
      const M = 'custom' === q?.theme ? q : void 0,
        O = M?.brandName?.trim() || h,
        B = 'purchase' === c.type,
        D = v(),
        S = U.layout || (0, n.invoiceLayoutOf)(q),
        R = !c.corrected && c.lines.some((t) => t.corrected),
        F = R ? c.lines.filter((t) => !t.corrected) : c.lines,
        A = R
          ? {
              ...c,
              totalToman: void 0,
              grossToman: void 0,
              discountToman: void 0,
            }
          : c,
        _ = F.map((t) => ({
          ...t,
          unitPrice: B ? (t.unitCost ?? t.unitPrice) : t.unitPrice,
          saleTotal: B ? (t.purchaseTotal ?? t.saleTotal) : t.saleTotal,
        })),
        G = (0, u.receiptTotals)({ ...A, lines: _ }, k),
        H = $(c.paymentMethod, c.paidToman, G?.total),
        Q = null !== G && void 0 !== c.paidToman && c.paidToman < G.total,
        W = _.map((t) =>
          B || t.unpriced
            ? {
                gross: t.saleTotal,
                off: 0,
                share: 0,
                shown: t.saleTotal,
                percent: 0,
              }
            : x(t, t.saleTotal),
        ),
        z = W.reduce((t, n) => t + n.off, 0),
        E = W.reduce((t, n) => t + n.share, 0),
        J = B ? 0 : Math.max(0, w(A.discountToman) ?? z + E),
        K = G ? (w(A.grossToman) ?? G.subtotal + J) : void 0,
        V = B || R ? 0 : Math.min(J, Math.max(0, w(A.clubDiscountToman) ?? 0)),
        X = J - V,
        Y =
          V && A.clubReward
            ? (0, b.clubDiscountLabel)(
                A.clubReward,
                Number(A.clubPointsUsed) || 0,
                V,
              )
            : D.clubDiscount,
        Z = [
          {
            label: J ? D.grossTotal : D.subtotal,
            value: T(J ? K : G?.subtotal),
            strong: !1,
          },
          ...(X ? [{ label: D.discount, value: T(X), strong: !1 }] : []),
          ...(V ? [{ label: Y, value: T(V), strong: !1 }] : []),
          ...(G?.extras || []).map((t) => ({
            label: P(t),
            value: T(t.amount),
            strong: !1,
          })),
          { label: D.payable, value: T(G?.total), strong: !0 },
          ...(Q
            ? [
                { label: D.paid, value: T(c.paidToman), strong: !1 },
                {
                  label: D.remaining,
                  value: T(G.total - c.paidToman),
                  strong: !1,
                },
              ]
            : []),
        ],
        ee = (G?.extras || []).filter((t) =>
          /\u0645\u0627\u0644\u06cc\u0627\u062a|\u0639\u0648\u0627\u0631\u0636|tax|vat/i.test(
            t.label,
          ),
        ),
        te =
          q?.taxRow && 'formal' === S
            ? {
                label: D.tax,
                value: ee.length
                  ? T(ee.reduce((t, n) => t + n.amount, 0))
                  : '\u2014',
              }
            : null,
        ne = {
          name: O,
          phone: I(q?.phone),
          address: q?.address?.trim() || '',
          ids: [
            q?.nationalId && `${C(D, q.nationalId)}: ${I(q.nationalId)}`,
            q?.economicId && `${D.economicId}: ${I(q.economicId)}`,
            q?.registrationNo && `${D.registrationNo}: ${I(q.registrationNo)}`,
          ]
            .filter(Boolean)
            .join(' \xb7 '),
          postalCode: I(q?.postalCode),
        },
        oe = {
          name: B
            ? j || D.unknownSeller
            : j || ('sale' === c.type && c.buyerName) || D.unknownBuyer,
          phone: I(U.contact?.phone),
          address: U.contact?.address?.trim() || '',
          ids: `${D.economicId}: ${I(U.contact?.economicId) || '\u2014'}`,
          postalCode: '',
        },
        ae =
          !B && c.contactId && U.balance
            ? {
                label: U.balance > 0 ? D.balanceOwes : D.balanceCredit,
                value: T(Math.abs(U.balance)),
              }
            : null;
      return {
        theme: (0, n.resolveInvoiceTheme)(q),
        custom: !!M,
        brand: O,
        logo: (0, n.isInvoiceImage)(M?.logo) ? M.logo : void 0,
        signature: (0, n.isInvoiceImage)(M?.signature) ? M.signature : void 0,
        address: M?.address || '',
        phone: M?.phone || '',
        footer: M?.footer?.trim() || '',
        signHere: (0, o.invoiceDesignLabels)().signHere,
        labels: D,
        title: B ? D.purchaseInvoice : D.invoice,
        number: c.receiptNo ? f(c.receiptNo) : '\u2014',
        date: (0, i.formatMoment)(c.occurredAt, N),
        seller: B ? j || D.unknownSeller : O,
        buyer: B
          ? O
          : j || ('sale' === c.type && c.buyerName) || D.unknownBuyer,
        recordedBy: ('sale' === c.type && c.recordedBy) || '',
        status: y(c.paymentMethod, c.paidToman, G?.total),
        tone: H.tone,
        summary: Z,
        purchase: B,
        layout: S,
        paper: (0, n.invoicePaperFor)(S),
        sellerParty: B ? oe : ne,
        buyerParty: B ? ne : oe,
        shopPhone: M ? I(q?.phone) : '',
        totals: {
          gross: T(K),
          discount: X ? T(X) : '',
          club: V ? T(V) : '',
          clubLabel: Y,
          extras: (G?.extras || []).map((t) => ({
            label: P(t),
            value: T(t.amount),
          })),
          tax: te,
          payable: T(G?.total),
          paid: Q && c.paidToman > 0 ? T(c.paidToman) : '',
          remaining: Q && c.paidToman > 0 ? T(G.total - c.paidToman) : '',
          words:
            G && 'fa' === (0, s.localeLang)()
              ? (0, l.numberWords)((0, t.localAmount)(G.total)) +
                ' ' +
                D.currency
              : '',
          balance: ae,
        },
        columns: [D.colRow, D.colItem, D.colQty, D.colUnitPrice, D.colTotal],
        showCodes: _.some((t) => !!t.barcode?.trim()),
        lines: _.map((t, n) => {
          const o = W[n],
            i =
              L.notebookFa.units[t.unit || 'piece'] ||
              t.unit ||
              L.notebookFa.units.piece,
            s = !!t.unpriced,
            c = !!(0, p.measureOf)(t.unit),
            l =
              c && !s && void 0 !== t.unitPrice
                ? (0, p.perText)(t.unitPrice, t.unit)
                : '';
          return {
            id: t.id,
            row: f(n + 1),
            name: t.name,
            code: t.barcode?.trim() || '',
            quantity: f(t.quantity),
            unit: i,
            qty: c
              ? (0, p.measureText)(t.quantity, t.unit)
              : f(t.quantity) + (t.unit && 'piece' !== t.unit ? ' ' + i : ''),
            per: l ? l.split(' ')[0] : '',
            fact: l
              ? `${(0, p.measureText)(t.quantity, t.unit)} \xd7 ${l}`
              : '',
            price: s
              ? D.noPrice
              : T(
                  void 0 === t.unitPrice
                    ? void 0
                    : (0, p.shownUnitPrice)(t.unitPrice),
                ),
            total: s ? '\u2014' : T(o.shown),
            discount: o.off
              ? o.percent
                ? '\u2212' + f(o.percent) + '\u066a'
                : '\u2212' + T(o.off)
              : '',
            discountCell: o.off
              ? o.percent
                ? f(o.percent) + '\u066a'
                : T(o.off)
              : '\u2014',
            reason: t.discountReason?.trim() || '',
            netPrice:
              o.off &&
              void 0 !== o.shown &&
              t.quantity > 0 &&
              Number.isInteger(o.shown / t.quantity)
                ? T(o.shown / t.quantity)
                : '',
          };
        }),
      };
    }
    function j(t) {
      const { labels: n } = t;
      return [
        t.title,
        `${n.invoiceNo}: ${t.number}`,
        `${n.date}: ${t.date}`,
        `${n.seller}: ${t.seller}`,
        `${n.buyer}: ${t.buyer}`,
        ...(t.recordedBy ? [`${n.recordedBy}: ${t.recordedBy}`] : []),
        t.status,
        ...[t.address, t.phone].filter(Boolean),
        '',
        t.columns.join(' | '),
        ...t.lines.map(
          (t) =>
            `${t.row}) ${t.name} - ${t.fact || `${t.quantity} ${t.unit} \xd7 ${t.price}`}${t.discount ? ` (${n.discount} ${t.discount}${t.reason ? ' ' + t.reason : ''})` : ''} = ${t.total}`,
        ),
        '',
        ...t.summary.map((t) => `${t.label}: ${t.value} ${n.currency}`),
        ...(t.footer ? ['', t.footer] : []),
      ].join('\n');
    }
  },
  803,
  [435, 476, 804, 440, 311, 460, 805, 806, 459, 807, 580],
);
