// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 800; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.voiceChipProduct = function (n, c) {
        return c && Object.hasOwn(c, 'price') ? { ...n, price: c.price } : n;
      }),
      (e.voiceChipPrice = c),
      (e.voicePricePatch = t),
      (e.namedPriceAnswered = function (n, u) {
        const p = c(n, u);
        if (null == p || !u || n.priceChange || !n.priceName) return n;
        const o = (u.salePrices || []).findIndex(
          (c) => c.name === n.priceName && c.price === p,
        );
        return o < 0 || p === u.price
          ? n
          : { ...n, ...t(n, 'extra' + (o + 1), p, u) };
      }));
    var n = r(d[0]);
    function c(c, t, u) {
      return 'sold' !== c.kind ||
        c.ledger ||
        c.expense ||
        !t ||
        (c.unit && c.unit !== (t.unit || 'piece'))
        ? null
        : (0, n.reviewPrices)(c, u || t).price;
    }
    function t(c, t, u, p, o) {
      const s = {
          ...(0, n.editReviewPrice)(c, 'price', u, p),
          namedPrice: 'default' !== t,
        },
        l = { ...c, ...s },
        f = o || p,
        P = (0, n.priceChanges)(l, f);
      return P.length && P.every((n) => 'price' === n.field)
        ? {
            ...s,
            priceChange: 'no',
            priceChangeFor: (0, n.priceSignature)(l, f),
          }
        : s;
    }
  },
  800,
  [692],
);
