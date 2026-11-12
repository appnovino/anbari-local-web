// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 455; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, _a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'SUMMARY_PERIODS', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
      Object.defineProperty(e, 'isSummaryPeriod', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'SUMMARY_TOP', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'SUMMARY_MISSING', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.shiftDate = l),
      (e.localDate = p),
      (e.measuredUnit = m),
      (e.anyUnits = function (t, n) {
        return (
          !!t &&
          (t['received' === n ? 'receivedUnits' : 'soldUnits'] > 0 ||
            Object.values(
              t['received' === n ? 'receivedMeasured' : 'soldMeasured'] || {},
            ).some((t) => t > 0))
        );
      }),
      (e.summarizeSales = k),
      (e.summarizeLocal = function (n, o, r = new Date(), s = []) {
        const u = p(r),
          d = l(u, -(2 * o - 1)),
          a = [],
          m = new Map(),
          v = new Map(),
          f = new Set(
            n
              .filter(
                (t) => t.correctsMovementId && new Date(t.timestamp || '') <= r,
              )
              .map((t) => t.correctsMovementId),
          ),
          y = [new Set(), new Set()],
          S = [0, 0],
          I = new Map(n.filter((t) => t.id).map((t) => [t.id, t])),
          M = new Map(s.map((t) => [t.id, t.unit || 'piece'])),
          w = new Map(s.map((t) => [t.id, t.model?.trim() || ''])),
          h = new Map(),
          U = new Map();
        for (const s of n) {
          const n = s.correctsMovementId ? I.get(s.correctsMovementId) : void 0,
            c = n ? { ...n, quantity: -s.quantity } : s;
          if (n && !(new Date(s.timestamp || '') <= r)) continue;
          if (
            !c.timestamp ||
            c.parentMovementId ||
            ['json', 'excel', 'csv', 'sample'].includes(c.source || '')
          )
            continue;
          const k = new Date(c.timestamp);
          if (Number.isNaN(k.getTime()) || k > r) continue;
          const b = p(k);
          if (b < d) continue;
          const q = b > l(u, -o) ? 0 : 1;
          ('received' === c.kind &&
            null != c.unitCost &&
            'production' !== c.source &&
            (S[q] += c.unitCost * c.quantity),
            n ||
              'sold' !== c.kind ||
              f.has(c.id) ||
              y[q].add(c.saleId || c.id || String(y[q].size)));
          const C = 'sold' === c.kind && null != c.unitPrice,
            P = C && null != c.unitCost,
            R = C ? c.unitPrice * c.quantity : 0,
            O = P ? c.unitCost * c.quantity : 0,
            D = P ? (c.unitPrice - c.unitCost) * c.quantity : 0,
            N = 'sold' === c.kind && null == c.unitPrice ? c.quantity : 0,
            j = 'sold' === c.kind && null == c.unitCost ? c.quantity : 0,
            A = 'received' === c.kind && null == c.unitCost ? c.quantity : 0;
          if (
            (a.push({
              day: b,
              unit: M.get(c.productId || ''),
              revenue: R,
              cost: O,
              profit: D,
              received: 'received' === c.kind ? c.quantity : 0,
              sold: 'sold' === c.kind ? c.quantity : 0,
              unpricedSoldUnits: N,
              uncostedSoldUnits: j,
              unpricedReceivedUnits: A,
            }),
            b <= l(u, -o))
          )
            continue;
          const z = c.productId || c.name || '';
          if (R) {
            const n = w.get(z) || '',
              o = n ? 'm:' + (0, t.normalizeName)(n) : z,
              r = m.get(o) || {
                productId: z,
                name: n || c.name || '',
                revenue: 0,
              };
            (z < r.productId && ((r.productId = z), (r.name = n)),
              (r.revenue += R),
              m.set(o, r),
              P || v.set(z, (v.get(z) || 0) + R));
          }
          if ('sold' === c.kind) {
            const t = h.get(z) || { quantity: 0, revenue: 0 };
            ((t.quantity += c.quantity), (t.revenue += R), h.set(z, t));
          }
          if (N || j || A) {
            const t = U.get(z) || {
              productId: z,
              name: c.name || '',
              unpricedSold: 0,
              uncostedSold: 0,
              unpricedReceived: 0,
            };
            ((t.unpricedSold += N),
              (t.uncostedSold += j),
              (t.unpricedReceived += A),
              U.set(z, t));
          }
        }
        const b = [...v.values()].filter((t) => t > 0),
          q = new Map();
        for (const n of s) {
          if (n.archivedAt || 'made' === n.kind) continue;
          const o = n.model?.trim(),
            r = o ? 'm:' + (0, t.normalizeName)(o) : 'p:' + n.id,
            s = q.get(r) || {
              productId: n.id,
              name: o || n.name,
              unit: n.unit || 'piece',
              quantity: 0,
              revenue: 0,
              stocked: !1,
            };
          (n.id < s.productId &&
            ((s.productId = n.id),
            (s.name = o || n.name),
            (s.unit = n.unit || 'piece')),
            (s.quantity += h.get(n.id)?.quantity || 0),
            (s.revenue += h.get(n.id)?.revenue || 0),
            (s.stocked ||= n.stock > 0),
            q.set(r, s));
        }
        const C = [...q.values()]
            .filter((t) => t.stocked)
            .map(({ stocked: t, ...n }) => n),
          P = new Set(s.filter((t) => t.archivedAt).map((t) => t.id)),
          R = [...U.values()]
            .filter((t) => !P.has(t.productId))
            .map((t) => ({ ...t, unit: M.get(t.productId) })),
          O = (t) =>
            R.filter((n) => n[t] > 0).sort(
              (n, o) => o[t] - n[t] || n.name.localeCompare(o.name),
            ),
          D = new Set(
            ['unpricedSold', 'uncostedSold', 'unpricedReceived'].flatMap((t) =>
              O(t)
                .slice(0, c)
                .map((t) => t.productId),
            ),
          );
        return k({
          today: u,
          days: o,
          rows: a,
          top: [...m.values()],
          low: C,
          missing: R.filter((t) => D.has(t.productId)).sort((t, n) =>
            t.name.localeCompare(n.name),
          ),
          missingProducts: {
            sale: O('unpricedSold').length,
            cost: O('uncostedSold').length,
            received: O('unpricedReceived').length,
          },
          unknownCost: {
            revenue: b.reduce((t, n) => t + n, 0),
            count: b.length,
          },
          business: {
            invoices: y[0].size,
            previousInvoices: y[1].size,
            purchases: S[0],
            previousPurchases: S[1],
          },
        });
      }),
      (e.lowStockList = function (t, n = [], o = 5) {
        const r = n.filter(
            (t) => t.enabled && ('atOrBelow' === t.kind || 'below' === t.kind),
          ),
          s = (t) =>
            r.find((n) => 'product' === n.scope && n.target === t.id) ||
            r.find(
              (n) =>
                'category' === n.scope &&
                !!t.category &&
                n.target === t.category,
            ) ||
            r.find((t) => 'all' === t.scope);
        return t
          .filter((t) => !t.archivedAt && 'made' !== t.kind)
          .map((t) => ({ p: t, rule: s(t) }))
          .filter(
            ({ p: t, rule: n }) =>
              !!n &&
              ('below' === n.kind
                ? t.stock < n.threshold
                : t.stock <= n.threshold),
          )
          .sort(
            (t, n) => t.p.stock - n.p.stock || t.p.name.localeCompare(n.p.name),
          )
          .slice(0, o)
          .map(({ p: t, rule: n }) => I(t, n.threshold));
      }),
      (e.outOfStockList = function (t, n = 5) {
        return t
          .filter((t) => !t.archivedAt && 'made' !== t.kind && t.stock <= 0)
          .sort((t, n) => t.name.localeCompare(n.name))
          .slice(0, n)
          .map((t) => I(t, 0));
      }));
    var t = _r(_d[0]),
      n = _r(_d[1]),
      o = _r(_d[2]);
    const r = [1, 7, 30, 90, 365],
      s = (t) => r.includes(Number(t)),
      u = 5,
      c = 60,
      d = (t) => {
        const n = Number(t);
        return Number.isFinite(n) ? n : 0;
      },
      a = (t) => Math.round(1e3 * t) / 1e3;
    function l(t, n) {
      const [o, r, s] = t.split('-').map(Number);
      return new Date(Date.UTC(o, r - 1, s + n)).toISOString().slice(0, 10);
    }
    function p(t) {
      return `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
    }
    function m(t) {
      return (0, o.isUnit)(t) && !(0, o.isCountUnit)(t) ? t : null;
    }
    function v(t, n, o) {
      if (!o) return;
      const r = { ...t[n] };
      for (const [t, n] of Object.entries(o)) {
        const o = a((r[t] || 0) + n);
        o ? (r[t] = o) : delete r[t];
      }
      Object.keys(r).length ? (t[n] = r) : delete t[n];
    }
    function f(t, o) {
      ((t.revenue += o.revenue),
        (t.cost += o.cost),
        (t.profit += o.profit),
        (t.receivedUnits = a(t.receivedUnits + o.receivedUnits)),
        (t.soldUnits = a(t.soldUnits + o.soldUnits)),
        v(t, 'receivedMeasured', o.receivedMeasured),
        v(t, 'soldMeasured', o.soldMeasured));
      for (const r of n.priceFields) t[r] = a(d(t[r]) + d(o[r]));
      return t;
    }
    const y = () => ({
        revenue: 0,
        cost: 0,
        profit: 0,
        receivedUnits: 0,
        soldUnits: 0,
        ...(0, n.completePrices)(),
      }),
      S = (t) => ({ date: t, ...y() });
    function k({
      today: t,
      days: r,
      rows: s,
      top: c = [],
      low: p = [],
      missing: k = [],
      missingProducts: I,
      unknownCost: M,
      business: w,
    }) {
      const h = new Map();
      for (const t of s) {
        const o = String(t.day).slice(0, 10),
          r = h.get(o) || S(o),
          s = m(t.unit);
        ((r.revenue += d(t.revenue)),
          (r.cost += d(t.cost)),
          (r.profit += d(t.profit)),
          s
            ? (v(r, 'receivedMeasured', { [s]: d(t.received) }),
              v(r, 'soldMeasured', { [s]: d(t.sold) }))
            : ((r.receivedUnits = a(r.receivedUnits + d(t.received))),
              (r.soldUnits = a(r.soldUnits + d(t.sold)))));
        for (const o of n.priceFields) r[o] = a(d(r[o]) + d(t[o]));
        h.set(o, r);
      }
      const U = (t) => ((0, o.isUnit)(t) ? { unit: t } : {}),
        b = (t) => h.get(t) || S(t),
        q = Array.from({ length: r }, (n, o) => b(l(t, o - (r - 1)))),
        C = Array.from({ length: r }, (n, o) => b(l(t, o - (2 * r - 1)))),
        P = q.reduce(f, y());
      return (
        I &&
          ((P.unpricedSoldProducts = d(I.sale)),
          (P.uncostedSoldProducts = d(I.cost)),
          (P.unpricedReceivedProducts = d(I.received))),
        {
          days: q,
          totals: P,
          previous: C.reduce(f, y()),
          top: c
            .map((t) => ({
              productId: t.productId,
              name: t.name,
              revenue: d(t.revenue),
            }))
            .filter((t) => t.revenue > 0)
            .sort(
              (t, n) => n.revenue - t.revenue || t.name.localeCompare(n.name),
            )
            .slice(0, u),
          low: p
            .map((t) => ({
              productId: t.productId,
              name: t.name,
              ...U(t.unit),
              quantity: a(d(t.quantity)),
              revenue: d(t.revenue),
            }))
            .sort(
              (t, n) =>
                t.quantity - n.quantity ||
                t.revenue - n.revenue ||
                t.name.localeCompare(n.name),
            )
            .slice(0, u),
          missing: k
            .map((t) => ({
              productId: t.productId,
              name: t.name,
              ...U(t.unit),
              unpricedSold: a(d(t.unpricedSold)),
              uncostedSold: a(d(t.uncostedSold)),
              unpricedReceived: a(d(t.unpricedReceived)),
            }))
            .filter(
              (t) =>
                t.unpricedSold > 0 ||
                t.uncostedSold > 0 ||
                t.unpricedReceived > 0,
            ),
          unknownCostRevenue: d(M?.revenue),
          unknownCostCount: d(M?.count),
          ...(w
            ? {
                business: {
                  invoices: d(w.invoices),
                  previousInvoices: d(w.previousInvoices),
                  purchases: d(w.purchases),
                  previousPurchases: d(w.previousPurchases),
                  ...(w.customers
                    ? {
                        customers: w.customers
                          .map((t) => ({
                            contactId: t.contactId,
                            name: t.name,
                            revenue: d(t.revenue),
                            count: d(t.count),
                          }))
                          .filter((t) => t.revenue > 0)
                          .sort(
                            (t, n) =>
                              n.revenue - t.revenue ||
                              n.count - t.count ||
                              t.name.localeCompare(n.name),
                          )
                          .slice(0, u),
                      }
                    : {}),
                },
              }
            : {}),
        }
      );
    }
    const I = (t, n) => ({
      id: t.id,
      name: t.name,
      stock: t.stock,
      ...(t.unit ? { unit: t.unit } : {}),
      level: n,
    });
  },
  455,
  [439, 456, 432],
);
