// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 957; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, _a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'inOutModes', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
      Object.defineProperty(_e, 'paymentChips', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      (_e.newestFirst = u),
      (_e.mergeInOut = function (e, t) {
        const n = [
            ...(e?.rows || []).map((e) => ({
              kind: 'sale',
              id: e.id,
              occurredAt: e.occurredAt,
              sale: e,
            })),
            ...(t?.rows || []).map((e) => ({
              kind: 'purchase',
              id: e.id,
              occurredAt: e.occurredAt,
              purchase: e,
            })),
          ].sort(u),
          o = [
            e?.more && e.rows.length
              ? { kind: 'sale', last: e.rows[e.rows.length - 1] }
              : null,
            t?.more && t.rows.length
              ? { kind: 'purchase', last: t.rows[t.rows.length - 1] }
              : null,
          ].filter((e) => !!e);
        if (!o.length) return { rows: n, more: [] };
        const r = o.reduce((e, t) => (u(t.last, e.last) < 0 ? t : e));
        return {
          rows: n.filter((e) => u(e, r.last) <= 0),
          more: o
            .filter((e) => 0 === u(e.last, r.last) || e.kind === r.kind)
            .map((e) => e.kind),
        };
      }),
      (_e.groupInOutDays = function (e, n, r = Date.now(), a = {}) {
        const u = (0, o.dayIn)(new Date(r).toISOString(), n),
          s = [],
          l = new Map();
        for (const t of e) {
          const e = (0, o.dayIn)(t.occurredAt, n);
          let r = l.get(e);
          (r ||
            ((r = { day: e, label: (0, o.dayLabel)(e, u), rows: [], side: '' }),
            l.set(e, r),
            s.push(r)),
            r.rows.push(t));
        }
        for (const e of s) {
          const n = (t) => e.rows.filter((e) => e.kind === t).length,
            o = n('sale')
              ? (a.sales?.find((t) => t.day === e.day)?.count ?? n('sale'))
              : 0,
            r = n('purchase')
              ? (a.purchases?.find((t) => t.day === e.day)?.count ??
                n('purchase'))
              : 0;
          e.side =
            o && r
              ? (0, t.L)(
                  '{sales} \u0641\u0631\u0648\u0634 \u0648 {buys} \u062e\u0631\u06cc\u062f',
                  { sales: c(o), buys: c(r) },
                )
              : o
                ? (0, t.L)('{n} \u0641\u0631\u0648\u0634', { n: c(o) })
                : (0, t.L)('{n} \u062e\u0631\u06cc\u062f', { n: c(r) });
        }
        return s.sort((e, t) => t.day.localeCompare(e.day));
      }),
      (_e.issuedMark = function (e, n) {
        return n
          ? null
          : e
            ? {
                text: (0, t.L)('\u2713 \u0635\u0627\u062f\u0631 \u0634\u062f'),
                issued: !0,
              }
            : {
                text: (0, t.L)(
                  '\u0641\u0627\u06a9\u062a\u0648\u0631 \u0635\u0627\u062f\u0631 \u0646\u0634\u062f\u0647',
                ),
                issued: !1,
              };
      }),
      Object.defineProperty(_e, 'purchaseName', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(_e, 'purchaseTitle', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (_e.purchaseSub = function (e, n) {
        return [
          l(e),
          void 0 !== e.lineCount
            ? (0, t.L)('{n} \u0642\u0644\u0645', { n: c(e.lineCount) })
            : '',
          (0, o.clockIn)(e.occurredAt, n),
        ]
          .filter(Boolean)
          .join((0, t.partSep)());
      }),
      Object.defineProperty(_e, 'purchaseBy', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (_e.purchaseAmount = function (e) {
        return void 0 === e.totalToman || e.unpriced || !e.totalToman
          ? ''
          : (0, o.invoiceToman)(e.totalToman);
      }),
      (_e.photoMark = function (e) {
        const n = e.photoCount || 0;
        return n > 1
          ? {
              text: (0, t.L)(
                '{n} \u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                { n: c(n) },
              ),
              attached: !0,
            }
          : 1 === n
            ? {
                text: (0, t.L)(
                  '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                ),
                attached: !0,
              }
            : e.corrected
              ? null
              : {
                  text: (0, t.L)(
                    '\u0639\u06a9\u0633 \u0641\u0627\u06a9\u062a\u0648\u0631',
                  ),
                  attached: !1,
                };
      }),
      Object.defineProperty(_e, 'MAX_INVOICE_PHOTOS', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      (_e.mayAddInvoicePhoto = function (e) {
        return (
          !!e &&
          ('owner' === e.role ||
            'manager' === e.role ||
            'receive' === e.role ||
            ('staff' === e.role && !!e.access?.do?.receive))
        );
      }),
      Object.defineProperty(_e, 'mayRemoveInvoicePhoto', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(_e, 'purchaseWhen', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      (_e.purchaseLine = function (e) {
        const r = `${e.quantity.toLocaleString((0, t.numberLocale)(), { maximumFractionDigits: 3 })} ${n.notebookFa.units[e.unit || 'piece'] || e.unit}`,
          a = !e.unpriced && void 0 !== e.unitCost;
        return {
          amount: a ? `${r} \xd7 ${(0, o.invoiceToman)(e.unitCost)}` : r,
          total:
            a && void 0 !== e.purchaseTotal
              ? (0, o.invoiceToman)(e.purchaseTotal)
              : (0, t.L)('\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a'),
          priced: a,
        };
      }),
      (_e.purchasePaid = function (n) {
        if (
          n.corrected ||
          n.stockOnly ||
          !n.contactId ||
          void 0 === n.paidToman ||
          void 0 === n.totalToman
        )
          return '';
        const o = {
          cash: (0, t.L)('\u0646\u0642\u062f\u06cc'),
          card: (0, t.L)('\u06a9\u0627\u0631\u062a'),
          credit: (0, t.L)('\u0646\u0633\u06cc\u0647'),
          cheque: (0, t.L)('\u0686\u06a9'),
        }[n.paymentMethod];
        return n.paidToman >= n.totalToman
          ? (0, t.L)(
              '{method} \xb7 \u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f',
              { method: o },
            )
          : n.paidToman > 0
            ? (0, t.L)(
                '{method} \xb7 {amount} \u062f\u0627\u062f\u0647 \u0634\u062f',
                { method: o, amount: (0, e.fullToman)(n.paidToman) },
              )
            : (0, t.L)(
                '{method} \xb7 \u067e\u0631\u062f\u0627\u062e\u062a \u0646\u0634\u062f\u0647',
                { method: o },
              );
      }));
    var e = _r(d[0]),
      t = _r(d[1]),
      n = _r(d[2]),
      o = _r(d[3]);
    const r = () => [
        { value: 'all', label: (0, t.L)('\u0647\u0645\u0647') },
        { value: 'sale', label: (0, t.L)('\u0641\u0631\u0648\u0634') },
        { value: 'purchase', label: (0, t.L)('\u062e\u0631\u06cc\u062f') },
      ],
      a = () => [
        {
          value: 'sale',
          label: (0, t.L)('\u0646\u0642\u062f \u0648 \u06a9\u0627\u0631\u062a'),
        },
        { value: 'credit', label: (0, t.L)('\u0646\u0633\u06cc\u0647') },
        { value: 'cheque', label: (0, t.L)('\u0686\u06a9') },
      ],
      c = (e) => e.toLocaleString((0, t.numberLocale)());
    function u(e, t) {
      const n = Date.parse(e.occurredAt),
        o = Date.parse(t.occurredAt);
      return n !== o ? o - n : e.id === t.id ? 0 : e.id < t.id ? 1 : -1;
    }
    const s = (e) =>
        e.contactName ||
        e.supplierName ||
        (e.contactId
          ? (0, t.L)('\u0641\u0631\u0648\u0634\u0646\u062f\u0647')
          : (0, t.L)(
              '\u06a9\u0627\u0644\u0627\u06cc \u0631\u0633\u06cc\u062f\u0647',
            )),
      l = (e) =>
        (0, t.L)('\u062e\u0631\u06cc\u062f {no}', {
          no: (0, t.localDigits)(String(e.receiptNo)),
        });
    const p = (e) =>
      e.recordedBy
        ? (0, t.L)(
            '\u062b\u0628\u062a\u200c\u0634\u062f\u0647 \u062a\u0648\u0633\u0637 {name}',
            { name: e.recordedBy },
          )
        : '';
    const f = 6;
    const h = (e, t) =>
        !!e &&
        ('owner' === e.role ||
          'manager' === e.role ||
          ('staff' === e.role && !0 === e.access?.full) ||
          !!t.mine),
      y = (e, t) =>
        `${(0, o.dayName)((0, o.dayIn)(e, t))} \xb7 ${(0, o.clockIn)(e, t)}`;
  },
  957,
  [435, 311, 580, 956],
);
