// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 461; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'CLUB_PLAN_IDS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'clubPlanOpen', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'CLUB_PLUS_MESSAGE', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'CLUB_DEFAULT', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'CLUB_LIMITS', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (e.cleanClubRule = function (n) {
        const t = (t) => {
          const o = Math.round(Number(n?.[t])),
            [u, f] = l[t];
          return Number.isFinite(o) && o >= u && o <= f ? o : c[t];
        };
        return {
          enabled: !0 === n?.enabled,
          earnToman: t('earnToman'),
          redeemPoints: t('redeemPoints'),
          redeemToman: t('redeemToman'),
        };
      }),
      (e.pointsFor = function (n, t) {
        return n > 0 && t.earnToman > 0
          ? Math.floor(n / t.earnToman + 1e-9)
          : 0;
      }),
      (e.pointsValue = f),
      (e.usablePoints = function (n, t, o) {
        if (!(n > 0 && t > 0 && o.redeemToman > 0)) return 0;
        let u = Math.min(
          Math.floor(n),
          Math.floor((t / o.redeemToman) * o.redeemPoints + 1e-9),
        );
        for (; u > 0 && f(u, o) > t; ) u--;
        return Math.max(0, u);
      }),
      (e.pointsKept = function (n, t, o) {
        return n > 0 && t > 0 && o > 0
          ? Math.min(n, Math.floor((n * Math.min(o, t)) / t + 1e-9))
          : 0;
      }),
      (e.priceWithClub = function (t, o, u) {
        const c = (0, n.priceSale)(t, o),
          l = Math.max(0, Math.min(Math.floor(u || 0), c.total));
        return l
          ? {
              ...(0, n.priceSale)(t, {
                kind: 'amount',
                value: c.invoiceDiscount + l,
              }),
              club: l,
            }
          : { ...c, club: 0 };
      }));
    var n = r(d[0]);
    const t = ['pro', 'team'],
      o = (n) => !!n && t.includes(n),
      u =
        '\u0628\u0627\u0634\u06af\u0627\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646 \u0645\u062e\u0635\u0648\u0635 \u0637\u0631\u062d \u067e\u0644\u0627\u0633 \u0627\u0633\u062a',
      c = { enabled: !1, earnToman: 1e5, redeemPoints: 1e3, redeemToman: 1e5 },
      l = {
        earnToman: [1e3, 1e9],
        redeemPoints: [1, 1e6],
        redeemToman: [1e3, 1e9],
      };
    function f(n, t) {
      return n > 0 && t.redeemPoints > 0
        ? Math.floor((n * t.redeemToman) / t.redeemPoints + 1e-9)
        : 0;
    }
  },
  461,
  [460],
);
