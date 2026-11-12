// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 820; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'sendLabels', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'whatsappAppUrl', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'normalizeInvoicePhone', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(e, 'validInvoicePhone', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      (e.invoiceSendUrl = function (n, t, o, s) {
        return 'sms' === n
          ? 'sms:' + t + '?body=' + encodeURIComponent(o)
          : 'whatsapp' === n
            ? 'https://wa.me/98' + t.slice(1) + '?text=' + encodeURIComponent(o)
            : s
              ? 'https://t.me/share/url?url=' +
                encodeURIComponent(s) +
                '&text=' +
                encodeURIComponent(o)
              : 'https://t.me/+98' +
                t.slice(1) +
                '?text=' +
                encodeURIComponent(o);
      }),
      (e.invoiceSendText = function (t, p, u, h, L, b, T, f, v) {
        const x = (0, s.invoiceModel)(t, p, u, h, T, v),
          y = x.summary.find((n) => n.strong).value;
        if (((p = x.brand), !L)) {
          const t = f?.invoiceShort?.trim(),
            o = x.totals.discount,
            s = (s) =>
              (t
                ? (0, l.fillMessage)(t, { shop: s, no: x.number, total: y })
                : o
                  ? b
                    ? (0, c.shopUnitText)(
                        (0, n.L)(
                          '{shop}: \u0641\u0627\u06a9\u062a\u0648\u0631 {no} \u0628\u0647 \u0645\u0628\u0644\u063a {total} \u062a\u0648\u0645\u0627\u0646 (\u062a\u062e\u0641\u06cc\u0641 {discount}). \u0645\u0634\u0627\u0647\u062f\u0647: {link}',
                          {
                            shop: s,
                            no: x.number,
                            total: y,
                            discount: o,
                            link: '',
                          },
                        ),
                      )
                    : (0, c.shopUnitText)(
                        (0, n.L)(
                          '{shop}: \u0641\u0627\u06a9\u062a\u0648\u0631 {no} \u0628\u0647 \u0645\u0628\u0644\u063a {total} \u062a\u0648\u0645\u0627\u0646 (\u062a\u062e\u0641\u06cc\u0641 {discount}).',
                          { shop: s, no: x.number, total: y, discount: o },
                        ),
                      )
                  : b
                    ? (0, c.shopUnitText)(
                        (0, n.L)(
                          '{shop}: \u0641\u0627\u06a9\u062a\u0648\u0631 {no} \u0628\u0647 \u0645\u0628\u0644\u063a {total} \u062a\u0648\u0645\u0627\u0646. \u0645\u0634\u0627\u0647\u062f\u0647: {link}',
                          { shop: s, no: x.number, total: y, link: '' },
                        ),
                      )
                    : (0, c.shopUnitText)(
                        (0, n.L)(
                          '{shop}: \u0641\u0627\u06a9\u062a\u0648\u0631 {no} \u0628\u0647 \u0645\u0628\u0644\u063a {total} \u062a\u0648\u0645\u0627\u0646.',
                          { shop: s, no: x.number, total: y },
                        ),
                      )
              ).trim(),
            u = Math.max(1, 70 - s('').length);
          return (
            s(p.length > u ? p.slice(0, Math.max(0, u - 1)) + '\u2026' : p) +
            (b ? ' ' + b : '')
          );
        }
        const U = (0, l.fillMessage)((0, l.messageText)('invoiceLong', f), {
            buyer: h || x.buyer || x.labels.unknownBuyer,
            shop: p,
          }),
          P = t.lines.map((n) => ({
            ...n,
            saleTotal:
              'purchase' === t.type
                ? (n.purchaseTotal ?? n.saleTotal)
                : n.saleTotal,
          })),
          k = (0, o.receiptTotals)({ ...t, lines: P }, u),
          I = (0, s.receiptText)(t, p, u, h, T, v),
          w =
            k && void 0 !== t.paidToman && t.paidToman >= k.total
              ? '\n' +
                x.labels.paid +
                ': ' +
                (0, s.invoiceAmount)(t.paidToman) +
                ' ' +
                x.labels.currency +
                '\n' +
                x.labels.remaining +
                ': ' +
                (0, s.invoiceAmount)(0) +
                ' ' +
                x.labels.currency
              : '';
        return U + '\n' + I + w + (b ? '\n' + b : '');
      }));
    var n = r(d[0]),
      t = r(d[1]),
      o = r(d[2]),
      s = r(d[3]),
      l = r(d[4]),
      c = r(d[5]);
    const p = (t = !1) => ({
        sendTitle: t
          ? (0, n.L)(
              '\u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0631\u0627\u06cc \u0641\u0631\u0648\u0634\u0646\u062f\u0647',
            )
          : (0, n.L)(
              '\u0627\u0631\u0633\u0627\u0644 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0631\u0627\u06cc \u0645\u0634\u062a\u0631\u06cc',
            ),
        phone: t
          ? (0, n.L)(
              '\u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0641\u0631\u0648\u0634\u0646\u062f\u0647',
            )
          : (0, n.L)(
              '\u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644 \u062e\u0631\u06cc\u062f\u0627\u0631',
            ),
        phoneSave: (0, n.L)(
          '\u0627\u06cc\u0646 \u0634\u0645\u0627\u0631\u0647 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0634\u062e\u0635 \u0630\u062e\u06cc\u0631\u0647 \u0634\u0648\u062f',
        ),
        sms: (0, n.L)('\u067e\u06cc\u0627\u0645\u06a9'),
        whatsapp: (0, n.L)('\u0648\u0627\u062a\u0633\u0627\u067e'),
        telegram: (0, n.L)('\u062a\u0644\u06af\u0631\u0627\u0645'),
        copyLink: (0, n.L)('\u06a9\u067e\u06cc \u0644\u06cc\u0646\u06a9'),
        shortText: (0, n.L)(
          '\u0645\u062a\u0646 \u06a9\u0648\u062a\u0627\u0647',
        ),
        longText: (0, n.L)('\u0645\u062a\u0646 \u06a9\u0627\u0645\u0644'),
        linkCopied: (0, n.L)(
          '\u0644\u06cc\u0646\u06a9 \u06a9\u067e\u06cc \u0634\u062f.',
        ),
        needPhone: (0, n.L)(
          '\u0634\u0645\u0627\u0631\u0647\u0654 \u0645\u0648\u0628\u0627\u06cc\u0644 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f (\u0645\u062b\u0644\u0627\u064b \u06f0\u06f9\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9).',
        ),
        badPhone: (0, n.L)(
          '\u0634\u0645\u0627\u0631\u0647 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a\u061b \u06f1\u06f1 \u0631\u0642\u0645 \u0648 \u0628\u0627 \u06f0\u06f9 \u0634\u0631\u0648\u0639 \u0634\u0648\u062f.',
        ),
        walkIn: (0, n.L)(
          '\u0645\u0634\u062a\u0631\u06cc \u062d\u0636\u0648\u0631\u06cc',
        ),
        send: (0, n.L)('\u0627\u0631\u0633\u0627\u0644'),
        more: (0, n.L)('\u0628\u06cc\u0634\u062a\u0631\u2026'),
        copied: (0, n.L)('\u06a9\u067e\u06cc \u0634\u062f'),
        change: (0, n.L)('\u062a\u063a\u06cc\u06cc\u0631'),
        addPhone: (0, n.L)('\u0634\u0645\u0627\u0631\u0647'),
        mobile: (0, n.L)('\u0645\u0648\u0628\u0627\u06cc\u0644'),
        pickTitle: t
          ? (0, n.L)('\u0641\u0631\u0648\u0634\u0646\u062f\u0647')
          : (0, n.L)('\u062e\u0631\u06cc\u062f\u0627\u0631'),
        search: (0, n.L)(
          '\u062c\u0633\u062a\u062c\u0648\u06cc \u0646\u0627\u0645 \u06cc\u0627 \u0634\u0645\u0627\u0631\u0647',
        ),
        newContact: (0, n.L)(
          '\u0645\u062e\u0627\u0637\u0628 \u062a\u0627\u0632\u0647',
        ),
        nameOnly: (0, n.L)(
          '\u0641\u0642\u0637 \u0646\u0627\u0645 \u0631\u0648\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631',
        ),
        saveAndPick: (0, n.L)(
          '\u0630\u062e\u06cc\u0631\u0647 \u0648 \u0627\u0646\u062a\u062e\u0627\u0628',
        ),
        name: (0, n.L)('\u0646\u0627\u0645'),
      }),
      u = (n, t) =>
        'whatsapp://send?phone=98' +
        n.slice(1) +
        '&text=' +
        encodeURIComponent(t),
      h = (n) =>
        (0, t.latinDigits)(n)
          .trim()
          .replace(/^(?:\+98|0098)(?=9\d{9}$)/, '0'),
      L = (n) => /^09\d{9}$/.test(n);
  },
  820,
  [311, 440, 806, 803, 821, 435],
);
