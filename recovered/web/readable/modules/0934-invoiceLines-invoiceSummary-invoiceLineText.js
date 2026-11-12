// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 934; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.invoiceLines = c),
      (e.invoiceSummary = function (t, n) {
        const o = c(t, n),
          u = o.length > 0 && o.every((t) => void 0 !== t.amount),
          y =
            'purchase' === n?.type &&
            n.lines.some(
              (t) => void 0 === v(t.unitCost) || void 0 === v(t.purchaseTotal),
            ),
          s = (t.count ?? o.length) <= o.length,
          p = y
            ? v(t.amount)
            : n
              ? v(n.totalToman)
              : (v(t.amount) ??
                (u && s ? o.reduce((t, n) => t + n.amount, 0) : void 0)),
          l = y ? void 0 : v(n?.paidToman);
        return {
          total: p,
          paid: l,
          remaining: void 0 !== p && void 0 !== l ? p - l : void 0,
          paymentMethod: 'sale' === n?.type ? n.paymentMethod : void 0,
          buyer: t.raw?.buyer || void 0,
        };
      }),
      (e.invoiceLineText = function (v, c) {
        if (void 0 === v.quantity) return '';
        const y = `${(0, n.formatGrouped)(v.quantity)} ${t.activityUnits[v.unit || 'piece'] || v.unit}`;
        return void 0 !== v.unitPrice && void 0 !== v.amount
          ? `${y} \xd7 ${(0, o.money)((0, u.shownUnitPrice)(v.unitPrice), { day: c, hint: !1 })} = ${(0, o.money)(v.amount, { day: c, hint: !1 })}`
          : y;
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]),
      u = r(d[3]);
    const v = (t) =>
      null != t && '' !== t && Number.isFinite(Number(t)) ? Number(t) : void 0;
    function c(t, n) {
      if (n)
        return n.lines.map((o) => {
          const u = 'mv:' + o.movementId,
            c = t.items?.find((t) => t.activityId === u)?.note,
            y = v(o.quantity),
            s = v('sale' === n.type ? o.unitPrice : o.unitCost),
            p =
              v('sale' === n.type ? o.saleTotal : o.purchaseTotal) ??
              (void 0 !== s && void 0 !== y ? s * y : void 0);
          return {
            activityId: u,
            productId: o.productId,
            name: o.name,
            unit: o.unit,
            quantity: y,
            amount: p,
            note: c,
            unitPrice:
              void 0 !== s
                ? s
                : void 0 !== p && void 0 !== y && y > 0
                  ? p / y
                  : void 0,
          };
        });
      return (
        t.items ?? [
          {
            activityId: t.id,
            productId: t.productId,
            name: t.name || t.raw?.name || '',
            quantity: v(t.raw?.quantity),
            unit: t.raw?.unit ?? void 0,
            amount: t.amount,
          },
        ]
      ).map((t) => {
        const n = v(t.quantity),
          o = v(t.amount);
        return {
          ...t,
          quantity: n,
          amount: o,
          unitPrice: void 0 !== o && void 0 !== n && n > 0 ? o / n : void 0,
        };
      });
    }
  },
  934,
  [458, 434, 435, 459],
);
