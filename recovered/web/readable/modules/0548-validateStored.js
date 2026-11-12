// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 548; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.validateStored = function (f) {
        const l = f;
        if (!l || !Array.isArray(l.products) || !Array.isArray(l.movements))
          throw Error('storage_invalid');
        l.products.length &&
          (0, s.validateImportRows)(l.products, Number.MAX_SAFE_INTEGER);
        const c = new Set();
        for (const t of l.products) {
          if (
            'string' != typeof t.id ||
            !t.id ||
            c.has(t.id) ||
            (void 0 !== t.archivedAt && !(0, o.validTimestamp)(t.archivedAt))
          )
            throw Error('storage_invalid');
          c.add(t.id);
        }
        if (
          l.movements.some(
            (t) =>
              !t ||
              'string' != typeof t.id ||
              'string' != typeof t.name ||
              'string' != typeof t.productId ||
              !['received', 'sold', 'used', 'waste'].includes(t.kind) ||
              !(0, a.validQuantity)(t.quantity),
          )
        )
          throw Error('storage_invalid');
        for (const t of l.movements)
          for (const o of ['unitPrice', 'unitCost']) {
            const s = t[o];
            if (
              void 0 !== s &&
              ('number' != typeof s ||
                !Number.isFinite(s) ||
                s < 0 ||
                s > 999999999999)
            )
              throw Error('storage_invalid');
          }
        for (const t of l.movements) {
          for (const o of ['costTotal', 'revenueTotal']) {
            const s = t[o];
            if (void 0 !== s && (!Number.isSafeInteger(s) || s < 0))
              throw Error('storage_invalid');
          }
          if (
            (void 0 !== t.valuationAdjustment &&
              ('number' != typeof t.valuationAdjustment ||
                !Number.isFinite(t.valuationAdjustment))) ||
            (void 0 !== t.expiresAt &&
              !/^\d{4}-\d{2}-\d{2}$/.test(t.expiresAt)) ||
            (void 0 !== t.enteredQuantity &&
              !(0, a.validQuantity)(t.enteredQuantity)) ||
            (void 0 !== t.enteredUnit && !(0, n.isUnit)(t.enteredUnit))
          )
            throw Error('storage_invalid');
        }
        if (
          l.categories &&
          (!Array.isArray(l.categories) ||
            l.categories.some((t) => 'string' != typeof t || t.length > 60))
        )
          throw Error('storage_invalid');
        if (l.alarmRules) {
          if (!Array.isArray(l.alarmRules)) throw Error('storage_invalid');
          const o = new Set();
          for (const s of l.alarmRules) {
            if (((0, t.validateAlarmRule)(s), o.has(s.id)))
              throw Error('storage_invalid');
            o.add(s.id);
          }
        }
        if (
          l.alerts &&
          (!Array.isArray(l.alerts) ||
            l.alerts.some(
              (s) =>
                !s ||
                'string' != typeof s.id ||
                'string' != typeof s.name ||
                'string' != typeof s.productId ||
                'number' != typeof s.stock ||
                (0, a.q3)(s.stock) !== s.stock ||
                'number' != typeof s.previousStock ||
                (0, a.q3)(s.previousStock) !== s.previousStock ||
                'number' != typeof s.threshold ||
                (0, a.q3)(s.threshold) !== s.threshold ||
                !t.alarmKinds.includes(s.kind) ||
                !(0, o.validTimestamp)(s.createdAt) ||
                'boolean' != typeof s.read,
            ))
        )
          throw Error('storage_invalid');
        for (const t of l.movements) {
          if (void 0 !== t.recordedAt && !(0, o.validTimestamp)(t.recordedAt))
            throw Error('storage_invalid');
          if (void 0 !== t.timeZone)
            try {
              new Intl.DateTimeFormat('en', { timeZone: t.timeZone });
            } catch {
              throw Error('storage_invalid');
            }
          for (const o of ['stockBefore', 'stockAfter', 'stockEffect'])
            if (
              void 0 !== t[o] &&
              ('number' != typeof t[o] || (0, a.q3)(t[o]) !== t[o])
            )
              throw Error('storage_invalid');
        }
        return l;
      }));
    var t = r(d[0]),
      o = r(d[1]),
      s = r(d[2]),
      a = r(d[3]),
      n = r(d[4]);
  },
  548,
  [454, 440, 439, 431, 432],
);
