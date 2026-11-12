// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 858; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.incomeAnalytics = function (s, c = 10, a = new Date()) {
        if (!Number.isInteger(c) || c < 1 || c > 366) throw Error('invalid');
        const u = Array.from({ length: c }, (t, n) => {
            const i = new Date(a);
            return (
              i.setHours(0, 0, 0, 0),
              i.setDate(i.getDate() - c + 1 + n),
              {
                key: o(i),
                date: i,
                sold: 0,
                revenue: 0,
                profit: 0,
                cost: 0,
                pricedUnits: 0,
                profitUnits: 0,
                estimatedUnits: 0,
              }
            );
          }),
          m = new Map(u.map((t) => [t.key, t])),
          p = new Map(s.products.map((t) => [t.id, t])),
          l = new Map(s.movements.map((t) => [t.id, t])),
          f = new Map();
        for (const n of s.movements) {
          const s =
              (n.correctsMovementId ? l.get(n.correctsMovementId) : void 0) ||
              n,
            c = n.correctsMovementId ? -1 : 1;
          if (
            'sold' !== s.kind ||
            ['excel', 'json', 'csv'].includes(s.source || '') ||
            !n.timestamp ||
            !s.timestamp
          )
            continue;
          const u = new Date(s.timestamp);
          if (
            !Number.isFinite(u.getTime()) ||
            u > a ||
            new Date(n.timestamp) > a ||
            !(0, t.validQuantity)(n.quantity)
          )
            continue;
          const v = m.get(o(u));
          if (!v) continue;
          v.sold = (0, t.addQuantity)(v.sold, c * n.quantity);
          const y = p.get(s.productId),
            M = i(s.unitPrice) ? s.unitPrice : y?.price,
            U = i(s.unitCost) ? s.unitCost : y?.costPrice;
          if (!i(M)) continue;
          const k = c * (s.revenueTotal ?? Math.round(M * n.quantity));
          if (
            ((v.revenue += k),
            (v.pricedUnits = (0, t.addQuantity)(v.pricedUnits, c * n.quantity)),
            (!i(s.unitPrice) || (i(U) && !i(s.unitCost))) &&
              (v.estimatedUnits = (0, t.addQuantity)(
                v.estimatedUnits,
                c * n.quantity,
              )),
            i(U))
          ) {
            const i = c * (s.costTotal ?? Math.round(U * n.quantity));
            ((v.cost += i),
              (v.profit += k - i),
              (v.profitUnits = (0, t.addQuantity)(
                v.profitUnits,
                c * n.quantity,
              )));
          }
          const w = f.get(s.productId) || {
            id: s.productId,
            name: y?.name || s.name,
            revenue: 0,
            sold: 0,
          };
          ((w.revenue += k),
            (w.sold = (0, t.addQuantity)(w.sold, c * n.quantity)),
            f.set(s.productId, w));
        }
        const v = {
          sold: 0,
          revenue: 0,
          profit: 0,
          cost: 0,
          pricedUnits: 0,
          profitUnits: 0,
          estimatedUnits: 0,
        };
        for (const t of u) for (const n of Object.keys(v)) v[n] += t[n];
        for (const t of [...u, v])
          ((t.revenue = n(t.revenue)),
            (t.cost = n(t.cost)),
            (t.profit = n(t.profit)));
        return {
          ...v,
          buckets: u,
          top: [...f.values()]
            .map((t) => ({ ...t, revenue: n(t.revenue) }))
            .sort((t, n) => n.revenue - t.revenue)
            .slice(0, 3),
        };
      }),
      (e.demoIncome = function (
        t = new Date(),
        n = ['demo-milk', 'demo-rice', 'demo-oil'],
      ) {
        const i = [
            {
              id: 'demo-milk',
              name: n[0],
              detail: '',
              stock: 0,
              price: 45e3,
              costPrice: 35e3,
            },
            {
              id: 'demo-rice',
              name: n[1],
              detail: '',
              stock: 0,
              price: 89e4,
              costPrice: 7e5,
            },
            {
              id: 'demo-oil',
              name: n[2],
              detail: '',
              stock: 0,
              price: 11e4,
              costPrice: 85e3,
            },
          ],
          o = [5, 8, 4, 11, 7, 9, 6, 13, 10, 15].flatMap((n, o) => {
            const s = new Date(t);
            return (
              s.setDate(s.getDate() - 9 + o),
              s.setSeconds(0, 0),
              i.map((t, i) => ({
                id: 'income-' + o + '-' + i,
                productId: t.id,
                name: t.name,
                kind: 'sold',
                quantity: n + i,
                timestamp: s.toISOString(),
                source: 'demo',
                unitPrice: t.price,
                unitCost: t.costPrice,
              }))
            );
          });
        return { products: i, movements: o };
      }));
    var t = r(d[0]);
    const n = (t) => Math.round(100 * t) / 100,
      i = (t) =>
        'number' == typeof t &&
        Number.isFinite(t) &&
        t >= 0 &&
        t <= 999999999999,
      o = (t) => [t.getFullYear(), t.getMonth(), t.getDate()].join('-');
  },
  858,
  [431],
);
