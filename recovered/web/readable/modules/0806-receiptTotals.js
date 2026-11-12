// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 806; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.receiptTotals = function (t, l = []) {
        const n = t.lines.filter((t) => void 0 !== t.saleTotal),
          o =
            t.totalToman ??
            (n.length ? n.reduce((t, l) => t + (l.saleTotal || 0), 0) : void 0);
        if (void 0 === o) return null;
        const u = l
          .map((t) => ({
            label: t.label,
            kind: t.kind,
            value: t.value,
            amount: Math.round(
              'percent' === t.kind ? (o * t.value) / 100 : t.value,
            ),
          }))
          .filter((t) => t.amount > 0);
        return {
          subtotal: o,
          extras: u,
          total: o + u.reduce((t, l) => t + l.amount, 0),
        };
      }));
  },
  806,
  [],
);
