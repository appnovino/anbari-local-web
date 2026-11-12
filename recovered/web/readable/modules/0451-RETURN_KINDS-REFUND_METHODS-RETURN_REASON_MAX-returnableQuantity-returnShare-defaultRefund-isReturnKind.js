// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 451; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'RETURN_KINDS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'REFUND_METHODS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'RETURN_REASON_MAX', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.returnableQuantity = c),
      (e.returnShare = function (t, n, u) {
        const o = c(t.quantity, n.quantity);
        return t.quantity > 0 && u > 0
          ? Math.abs(u - o) < 1e-9
            ? Math.max(0, Math.round(t.total - n.total))
            : Math.max(
                0,
                Math.min(
                  Math.round(t.total - n.total),
                  Math.round((t.total * u) / t.quantity),
                ),
              )
          : 0;
      }),
      (e.defaultRefund = function (t) {
        return t.contactId &&
          ('credit' === t.paymentMethod ||
            'cheque' === t.paymentMethod ||
            (void 0 !== t.paidToman &&
              void 0 !== t.totalToman &&
              t.paidToman < t.totalToman))
          ? 'credit'
          : 'card' === t.paymentMethod
            ? 'card'
            : 'cash';
      }),
      Object.defineProperty(e, 'isReturnKind', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }));
    const t = ['sale_return', 'purchase_return'],
      n = ['cash', 'card', 'credit'],
      u = 200,
      o = (t) => Math.round(1e3 * t) / 1e3;
    function c(t, n = 0) {
      return Math.max(0, o(t - n));
    }
    const h = (t) => 'sale_return' === t || 'purchase_return' === t;
  },
  451,
  [],
);
