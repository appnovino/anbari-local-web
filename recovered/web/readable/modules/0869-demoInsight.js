// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 869; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, _i, a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.demoInsight = function (l, u, d = new Date()) {
        const y = c(l.id || 'x'),
          m = l.price && l.price > 0 ? l.price : i(9e4 + 20 * y),
          p = l.avgCost || l.costPrice || i(0.82 * m),
          f = d.getTime() - 2592e6;
        let h = u
          .filter(
            (t) =>
              t.productId === l.id &&
              'sold' === t.kind &&
              t.timestamp &&
              Date.parse(t.timestamp) >= f,
          )
          .reduce((t, n) => t + n.quantity, 0);
        h || (h = 18 + (y % 60));
        const g = (0, t.jalaliParts)(d),
          P = Array.from({ length: 6 }, (n, s) => {
            let c = g.year,
              l = g.month - 5 + s;
            for (; l < 1; ) ((l += 12), c--);
            const u = (0, t.toGregorian)(c, l, 1);
            return {
              key: c + '-' + o(l),
              year: c,
              month: l,
              from: u.year + '-' + o(u.month) + '-' + o(u.day),
              buy: i(p * (0.8 + 0.04 * s)),
              sell: i(m * (0.84 + 0.032 * s)),
            };
          }),
          D = (t) => s(new Date(d.getTime() - 864e5 * t)),
          v = i(0.95 * p);
        return {
          today: s(d),
          see: { buyPrice: !0, sellPrice: !0, profit: !0 },
          sales: { days: 30, sold: h, revenue: h * m, profit: h * (m - p) },
          months: P,
          usualBuy: v,
          lastBuy: { price: p, day: D(4) },
          suppliers: [
            {
              name: (0, n.L)(
                '\u0628\u0646\u06a9\u062f\u0627\u0631 \u0646\u0645\u0648\u0646\u0647',
              ),
              count: 2,
              lastDay: D(4),
              lastPrice: p,
            },
            {
              name: (0, n.L)(
                '\u067e\u062e\u0634 \u0646\u0645\u0648\u0646\u0647',
              ),
              count: 5,
              lastDay: D(13),
              lastPrice: i(0.96 * p),
              cheapest: !0,
            },
          ],
        };
      }));
    var t = r(_d[0]),
      n = r(_d[1]);
    const o = (t) => String(t).padStart(2, '0'),
      s = (t) =>
        t.getFullYear() + '-' + o(t.getMonth() + 1) + '-' + o(t.getDate()),
      i = (t) => {
        const n = t >= 2e4 ? 1e3 : 100;
        return Math.max(100, Math.round(t / n) * n);
      };
    function c(t) {
      let n = 7;
      for (const o of t) n = (31 * n + o.charCodeAt(0)) % 9973;
      return n;
    }
  },
  869,
  [440, 311],
);
