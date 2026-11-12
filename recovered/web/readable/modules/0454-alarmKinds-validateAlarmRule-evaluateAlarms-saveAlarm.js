// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 454; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'alarmKinds', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
      (e.validateAlarmRule = o),
      (e.evaluateAlarms = function (t, r, c = new Date()) {
        const l = [],
          u = new Map(t.products.map((t) => [t.id, t])),
          h = new Map((t.alarmRules || []).map((t) => [t.id, t]));
        for (const t of r.alarmRules || []) {
          const p = o(t);
          if (!p.enabled) continue;
          const f = h.get(p.id),
            k =
              f?.enabled &&
              f.scope === p.scope &&
              f.target === p.target &&
              f.kind === p.kind &&
              f.threshold === p.threshold;
          for (const t of r.products) {
            if (!s(p, t)) continue;
            const o = u.get(t.id),
              h = !!k && !!o && s(p, o) && n(p, o.stock),
              f = 'restocked' === p.kind;
            if (f && (!o || o.stock > 0 || t.stock <= 0 || o.stock === t.stock))
              continue;
            if (!f && (!n(p, t.stock) || h)) continue;
            const b = r.movements.at(-1)?.id || 'settings';
            l.push({
              id: p.id + ':' + t.id + ':' + b + ':' + c.getTime(),
              ruleId: p.id,
              productId: t.id,
              name: t.name,
              stock: t.stock,
              previousStock: o?.stock ?? 0,
              kind: p.kind,
              threshold: p.threshold,
              createdAt: c.toISOString(),
              read: !1,
            });
          }
        }
        return {
          state: l.length ? { ...r, alerts: [...(r.alerts || []), ...l] } : r,
          created: l,
        };
      }),
      (e.saveAlarm = function (t, r) {
        const s = o(r);
        if (
          ('product' === s.scope &&
            !t.products.some((t) => t.id === s.target)) ||
          ('category' === s.scope && !(t.categories || []).includes(s.target))
        )
          throw Error('invalid_alarm');
        const n = (t.alarmRules || []).some((t) => t.id === s.id);
        return {
          ...t,
          alarmRules: n
            ? t.alarmRules.map((t) => (t.id === s.id ? s : t))
            : [...(t.alarmRules || []), s],
        };
      }));
    var t = _r(d[0]);
    const r = [
      'atOrBelow',
      'below',
      'equals',
      'above',
      'empty',
      'negative',
      'restocked',
    ];
    function o(o) {
      if (
        !o ||
        'string' != typeof o.id ||
        !o.id ||
        !['all', 'product', 'category'].includes(o.scope) ||
        !r.includes(o.kind) ||
        'number' != typeof o.threshold ||
        !Number.isFinite(o.threshold) ||
        Math.abs(o.threshold) > 999999999.999 ||
        (0, t.q3)(o.threshold) !== o.threshold ||
        'boolean' != typeof o.enabled ||
        ('all' !== o.scope && ('string' != typeof o.target || !o.target.trim()))
      )
        throw Error('invalid_alarm');
      return {
        id: o.id,
        scope: o.scope,
        ...('all' !== o.scope ? { target: o.target } : {}),
        kind: o.kind,
        threshold: (0, t.q3)(o.threshold),
        enabled: o.enabled,
      };
    }
    function s(t, r) {
      return (
        'all' === t.scope ||
        ('product' === t.scope && t.target === r.id) ||
        ('category' === t.scope && t.target === r.category)
      );
    }
    function n(t, r) {
      switch (t.kind) {
        case 'below':
          return r < t.threshold;
        case 'atOrBelow':
          return r <= t.threshold;
        case 'equals':
          return r === t.threshold;
        case 'above':
          return r > t.threshold;
        case 'empty':
          return r <= 0;
        case 'negative':
          return r < 0;
        case 'restocked':
          return r > 0;
      }
    }
  },
  454,
  [431],
);
