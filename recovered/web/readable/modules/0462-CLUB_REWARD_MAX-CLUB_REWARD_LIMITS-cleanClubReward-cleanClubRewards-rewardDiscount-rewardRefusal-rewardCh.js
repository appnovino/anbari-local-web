// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 462; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'CLUB_REWARD_MAX', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'CLUB_REWARD_LIMITS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.cleanClubReward = a),
      (e.cleanClubRewards = function (t, r = () => '') {
        if (!Array.isArray(t)) return [];
        const o = [],
          u = new Set();
        for (const l of t) {
          const t = a(l);
          if (!t) continue;
          let s = t.id && !u.has(t.id) ? t.id : r();
          if (
            s &&
            !u.has(s) &&
            (u.add(s), o.push({ ...t, id: s }), o.length >= n)
          )
            break;
        }
        return o;
      }),
      (e.rewardDiscount = u),
      (e.rewardRefusal = l),
      (e.rewardChoices = function (n, t, r) {
        const o = n.filter((n) => null === l(n, t, r)),
          a = n
            .filter((n) => n.points > t)
            .sort((n, t) => n.points - t.points)[0];
        return {
          ready: o,
          next: a
            ? { reward: a, missing: a.points - Math.max(0, Math.floor(t)) }
            : null,
        };
      }),
      (e.bestReward = function (n, t) {
        let r = null;
        for (const o of n)
          o.points <= t && (!r || o.points > r.points) && (r = o);
        return r;
      }),
      (e.rewardsBodyValid = function (a) {
        return (
          !(!Array.isArray(a) || a.length > n) &&
          a.every((n) => {
            if (!n || 'object' != typeof n || Array.isArray(n)) return !1;
            const a = n;
            if (Object.keys(a).some((n) => !s.has(n))) return !1;
            if (
              void 0 !== a.id &&
              '' !== a.id &&
              ('string' != typeof a.id || !r.test(a.id))
            )
              return !1;
            if (
              void 0 !== a.name &&
              ('string' != typeof a.name ||
                a.name.length > 2 * t.name ||
                /\p{Cc}/u.test(a.name))
            )
              return !1;
            const u = (n, [t, r]) => null == n || null !== o(n, [t, r]);
            return (
              !(!u(a.capToman, t.capToman) || !u(a.minToman, t.minToman)) &&
              !!(
                Number.isInteger(a.value) &&
                a.value > 0 &&
                a.value <= t.amount[1]
              ) &&
              null !== o(a.points, t.points) &&
              ('percent' === a.kind || 'amount' === a.kind)
            );
          })
        );
      }));
    const n = 6,
      t = {
        points: [1, 1e6],
        percent: [1, 100],
        amount: [1e3, 1e9],
        capToman: [1e3, 1e9],
        minToman: [1e3, 1e9],
        name: 30,
      },
      r = /^[A-Za-z0-9_-]{1,40}$/,
      o = (n, [t, r]) => {
        const o = Number(n);
        return Number.isInteger(o) && o >= t && o <= r ? o : null;
      };
    function a(n) {
      if (!n || 'object' != typeof n) return null;
      const a = n,
        u = 'percent' === a.kind || 'amount' === a.kind ? a.kind : null,
        l = o(a.points, t.points),
        s = u ? o(a.value, 'percent' === u ? t.percent : t.amount) : null;
      if (!u || null === l || null === s) return null;
      const c = 'string' == typeof a.id && r.test(a.id) ? a.id : '',
        p =
          'percent' === u && null != a.capToman
            ? o(a.capToman, t.capToman)
            : null,
        f = null != a.minToman ? o(a.minToman, t.minToman) : null,
        T =
          'string' == typeof a.name
            ? a.name
                .replace(/\p{Cc}/gu, ' ')
                .replace(/\s+/g, ' ')
                .trim()
                .slice(0, t.name)
            : '';
      return {
        id: c,
        points: l,
        kind: u,
        value: s,
        ...(null !== p ? { capToman: p } : {}),
        ...(null !== f ? { minToman: f } : {}),
        ...(T ? { name: T } : {}),
      };
    }
    function u(n, t) {
      if (!(t > 0)) return 0;
      if (n.minToman && t < n.minToman) return 0;
      const r =
        'percent' === n.kind ? Math.floor((t * n.value) / 100 + 1e-9) : n.value;
      return Math.max(
        0,
        Math.min(
          Math.floor(t),
          n.capToman && 'percent' === n.kind ? Math.min(r, n.capToman) : r,
        ),
      );
    }
    function l(n, t, r) {
      return t >= n.points
        ? u(n, r) > 0
          ? null
          : 'club_reward_min_total'
        : 'club_not_enough_points';
    }
    const s = new Set([
      'id',
      'points',
      'kind',
      'value',
      'capToman',
      'minToman',
      'name',
    ]);
  },
  462,
  [],
);
