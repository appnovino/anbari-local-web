// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 561; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'ORDER', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'BAZAAR_ORDER', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.currentPlan = function (t, s = Date.now()) {
        const a = t?.subscription,
          l =
            'active' === t?.access &&
            a &&
            n.includes(a.purchased_plan_id || a.plan_id)
              ? a.purchased_plan_id || a.plan_id
              : null,
          u = l
            ? a?.expires_at
            : 'trial' === t?.access
              ? t?.trial?.endsAt
              : null,
          p = u ? Math.max(0, Math.ceil((Date.parse(u) - s) / o)) : null;
        return {
          paid: l,
          trial: 'trial' === t?.access,
          ends: u || null,
          days: p,
        };
      }),
      (e.upgradeOptions = function (
        o,
        s,
        { bazaar: a = !1, scheduled: l = null } = {},
      ) {
        const u = o
            .filter(
              (o) =>
                (!1 !== o.enabled || o.id === s) && (a ? t : n).includes(o.id),
            )
            .sort((t, o) => n.indexOf(t.id) - n.indexOf(o.id)),
          p = (n) => n.periods.filter((n) => !1 !== n.enabled);
        if (!s)
          return u
            .map((n) => ({ plan: n, renew: !1, next: !1, periods: p(n) }))
            .filter((n) => n.periods.length > 0);
        const c = n.indexOf(s);
        return u
          .filter((t) => n.indexOf(t.id) >= c || t.id === l)
          .map((n) => ({
            plan: n,
            renew: n.id === s,
            next: n.id === l && n.id !== s,
            periods: p(n),
          }))
          .filter((n) => n.periods.length > 0);
      }),
      (e.planLadder = function (t, o) {
        const a = o ? n.indexOf(o) : -1;
        return n
          .filter(
            (n) => n === o || t.some((t) => t.id === n && !1 !== t.enabled),
          )
          .map((t) => ({
            id: t,
            current: t === o,
            lower: a > 0 && n.indexOf(t) < a && s.includes(t),
          }));
      }),
      (e.periodPick = function (n, t, o) {
        const s = n.find((n) => n.plan.id === t?.planId);
        if (s?.periods.some((n) => n.months === o))
          return { planId: s.plan.id, months: o, switched: !1 };
        const a = n.find((n) => n.periods.some((n) => n.months === o));
        return a ? { planId: a.plan.id, months: o, switched: !!s } : null;
      }),
      (e.savingsPercent = function (n, t) {
        const o = n?.periods.find((n) => n.months === t);
        if (!n || !o) return 0;
        const s = Number(n.monthly_price_toman) * t,
          a = Number(o.total_toman);
        return s > 0 && a > 0 && a < s ? Math.floor((100 * (s - a)) / s) : 0;
      }),
      (e.perMonth = a),
      (e.roundedPerMonth = function (n, t) {
        const o = a(n, t);
        return t > 1 && o >= 1e5 ? 1e3 * Math.round(o / 1e3) : o;
      }),
      (e.cardsForPeriod = function (n, t) {
        return t ? n.filter((n) => n.periods.some((n) => n.months === t)) : n;
      }),
      (e.periodChoices = function (n) {
        return [
          ...new Set(n.flatMap((n) => n.periods.map((n) => n.months))),
        ].sort((n, t) => n - t);
      }),
      (e.defaultChoice = function (n, { paid: t = null } = {}) {
        if (!t) {
          const t = n.find((n) => 'standard' === n.plan.id) || n[0];
          return t && t.periods.length
            ? {
                planId: t.plan.id,
                months: t.periods.some((n) => 1 === n.months)
                  ? 1
                  : Math.min(...t.periods.map((n) => n.months)),
              }
            : null;
        }
        const o = n.find((n) => 'pro' === n.plan.id) || n[0];
        if (!o || !o.periods.length) return null;
        const s = o.periods.some((n) => 12 === n.months)
          ? 12
          : o.periods[o.periods.length - 1].months;
        return { planId: o.plan.id, months: s };
      }),
      (e.planHighlights = function (n, t) {
        const o = (n, t) => !0 === n?.features?.[t],
          s =
            t && l.every((s) => !o(t, s) || o(n, s))
              ? l.filter((s) => o(n, s) && !o(t, s))
              : [];
        return {
          includesLower: s.length > 0,
          keys: (s.length ? s : l.filter((t) => o(n, t))).slice(0, 4),
        };
      }));
    const n = ['standard', 'pro', 'team'],
      t = ['standard', 'pro'],
      o = 864e5;
    const s = ['standard', 'pro'];
    function a(n, t) {
      return t > 0 ? Math.round(Number(n) / t) : Number(n);
    }
    const l = [
      'ledger',
      'cheques',
      'team',
      'integrations',
      'voice',
      'image',
      'reports',
      'spreadsheet',
      'batch',
      'pdf',
    ];
  },
  561,
  [],
);
