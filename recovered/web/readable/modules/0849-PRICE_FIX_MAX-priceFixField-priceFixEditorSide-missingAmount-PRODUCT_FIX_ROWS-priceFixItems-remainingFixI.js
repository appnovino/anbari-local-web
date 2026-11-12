// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 849; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'PRICE_FIX_MAX', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.priceFixField = u),
      (e.priceFixEditorSide = function (n) {
        return 'price' === u(n) ? 'price' : 'cost';
      }),
      (e.missingAmount = c),
      Object.defineProperty(e, 'PRODUCT_FIX_ROWS', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (e.priceFixItems = function (n, { missing: t = [], products: o = [] }) {
        return s(n)
          ? t
              .map((t) => ({
                productId: t.productId,
                name: t.name,
                ...(t.unit ? { unit: t.unit } : {}),
                amount: c(t, n),
              }))
              .filter((n) => n.amount > 0)
          : o
              .filter(
                (t) =>
                  !t.archivedAt &&
                  ('noSell' === n
                    ? p(t.price)
                    : 'made' !== t.kind && p(t.costPrice) && p(t.avgCost)),
              )
              .slice(0, l)
              .map((n) => ({
                productId: n.id,
                name: n.name,
                ...(n.unit ? { unit: n.unit } : {}),
              }));
      }),
      (e.remainingFixItems = function (n, t) {
        return n.filter((n) => !t.has(n.productId));
      }),
      (e.remainingFixCount = function (n, t, o) {
        const u = t.filter((n) => o.has(n.productId)).length;
        return Math.max(0, Math.max(n ?? 0, t.length) - u);
      }),
      (e.nextFixItem = function (n, t, o) {
        const u = n.findIndex((n) => n.productId === t),
          c = n
            .slice(u + 1)
            .find((n) => n.productId !== t && !o.has(n.productId));
        if (c) return c.productId;
        const s = [...n.slice(0, Math.max(0, u))]
          .reverse()
          .find((n) => n.productId !== t && !o.has(n.productId));
        return s?.productId ?? null;
      }),
      (e.priceFixStart = function (n, o) {
        const u = n?.[o];
        return null != u && u > 0 ? String((0, t.tomanToInput)(u)) : '';
      }),
      (e.parsePriceFix = function (u, c) {
        const s = 'IRT' !== (0, t.shownCurrency)(),
          l = (0, n.normalizeMoneyInput)(u || '', (0, t.moneyDecimals)());
        if (
          void 0 !== c &&
          c > 0 &&
          '' !== l &&
          l ===
            (0, n.normalizeMoneyInput)(
              String((0, t.tomanToInput)(c)),
              (0, t.moneyDecimals)(),
            )
        )
          return { value: c };
        const p = Number(l);
        if (!(l && Number.isFinite(p) && p > 0)) return { error: 'empty' };
        const f = s ? (0, t.inputToToman)(p) : p;
        return f > 0
          ? f > o
            ? { error: 'too_large' }
            : { value: f }
          : { error: 'empty' };
      }),
      (e.homeTaskFixKind = function (n) {
        return 'noSellPrice' === n
          ? 'noSell'
          : 'noBuyPrice' === n
            ? 'noBuy'
            : 'unpricedSold' === n
              ? 'sale'
              : 'uncostedSold' === n
                ? 'cost'
                : 'received';
      }),
      (e.summaryFixTotal = function (n, t) {
        return 'sale' === n
          ? t?.unpricedSoldProducts
          : 'cost' === n
            ? t?.uncostedSoldProducts
            : 'received' === n
              ? t?.unpricedReceivedProducts
              : void 0;
      }));
    var n = r(d[0]),
      t = r(d[1]);
    const o = 999999999999;
    function u(n) {
      return 'sale' === n || 'noSell' === n ? 'price' : 'costPrice';
    }
    function c(n, t) {
      return 'sale' === t
        ? n.unpricedSold
        : 'cost' === t
          ? n.uncostedSold
          : n.unpricedReceived;
    }
    const s = (n) => 'sale' === n || 'cost' === n || 'received' === n,
      l = 60,
      p = (n) => null == n;
  },
  849,
  [615, 435],
);
