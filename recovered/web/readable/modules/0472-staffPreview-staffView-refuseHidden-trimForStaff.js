// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 472; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.staffPreview = function () {
        try {
          const o = globalThis.window,
            n = o?.location?.hostname || '';
          if (!o?.location || ('localhost' !== n && '127.0.0.1' !== n))
            return null;
          const s = new URLSearchParams(o.location.search).get('dev-staff');
          return s && t.ROLE_PRESETS.some((t) => t.id === s)
            ? { role: 'staff', access: (0, t.presetAccess)(s) }
            : null;
        } catch {
          return null;
        }
      }),
      (e.staffView = function (o) {
        return (0, t.seeRules)('staff', o);
      }),
      (e.refuseHidden = function (t, n) {
        if (u.has(t) && !n.ledger) throw new o.ApiError('hidden_by_owner', 403);
        if (l.has(t) && !(n.reports && n.buyPrice && n.sellPrice && n.profit))
          throw new o.ApiError('hidden_by_owner', 403);
      }),
      (e.trimForStaff = function (t, o, n) {
        const s = f(o, n);
        if ('dashboard' === t && !n.reports && s?.today)
          for (const t of [
            'revenue',
            'costTotal',
            'grossProfit',
            'valuationAdjustment',
            'unpricedSoldUnits',
            'uncostedSoldUnits',
            'unpricedReceivedUnits',
            'unpricedSoldProducts',
            'uncostedSoldProducts',
            'unpricedReceivedProducts',
          ])
            delete s.today[t];
        return s;
      }));
    var t = r(d[0]),
      o = r(d[1]);
    const n = new Set([
        'uncostedSoldUnits',
        'unpricedReceivedUnits',
        'costPrice',
        'avgCost',
        'extraCosts',
        'unitCost',
        'costTotal',
        'purchaseTotal',
        'purchaseTotals',
        'stockValue',
        'valuation',
        'valuationAdjustment',
      ]),
      s = new Set([
        'unpricedSoldUnits',
        'price',
        'unitPrice',
        'revenueTotal',
        'revenue',
        'salesTotal',
        'saleTotal',
        'totalToman',
        'paidToman',
        'remainingToman',
        'grossTotal',
        'lineDiscount',
        'invoiceShare',
        'grossToman',
        'discountToman',
        'invoiceDiscount',
      ]),
      c = new Set(['profit', 'grossProfit', 'margin', 'grossMargin']),
      u = new Set([
        'contacts',
        'ledger',
        'cheques',
        'payments',
        'expenses',
        'statement',
      ]),
      l = new Set(['summary', 'insight', 'reports']);
    function f(t, o) {
      if (Array.isArray(t)) return t.map((t) => f(t, o));
      if (!t || 'object' != typeof t) return t;
      const u = {};
      for (const [l, p] of Object.entries(t))
        (!o.buyPrice && n.has(l)) ||
          (!o.sellPrice && s.has(l)) ||
          (!o.profit && c.has(l)) ||
          (u[l] = f(p, o));
      return u;
    }
  },
  472,
  [473, 429],
);
