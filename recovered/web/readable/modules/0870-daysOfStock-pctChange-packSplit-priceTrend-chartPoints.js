// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 870; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, _m, e, d) {
    'use strict';
    function n(n, t) {
      if (!(null != n && null != t && n > 0 && Number.isFinite(t))) return null;
      const l = Math.round(((t - n) / n) * 100);
      return Object.is(l, -0) ? 0 : l;
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.daysOfStock = function (n, t, l = 30) {
        return t > 0 && l > 0 ? (n > 0 ? Math.floor(n / (t / l)) : 0) : null;
      }),
      (e.pctChange = n),
      (e.packSplit = function (n, t) {
        if (!(t && t > 0 && n > 0 && !(n < t))) return null;
        const l = Math.floor(n / t + 1e-9),
          u = Math.round(1e3 * (n - l * t)) / 1e3;
        return { packs: l, rest: u > 0 ? u : 0 };
      }),
      (e.priceTrend = function (t) {
        const l = (n) => t.find((t) => 'number' == typeof t[n]),
          u = (n) => [...t].reverse().find((t) => 'number' == typeof t[n]),
          o = l('buy'),
          s = u('buy'),
          f = l('sell'),
          c = u('sell'),
          a = o && s && o !== s ? n(o.buy, s.buy) : null,
          y = f && c && f !== c ? n(f.sell, c.sell) : null;
        if (null === a && null === y) return null;
        return {
          since: [o, f]
            .filter((n) => !!n)
            .sort((n, t) => (n.key < t.key ? -1 : 1))[0],
          buy: a,
          sell: y,
        };
      }),
      (e.chartPoints = function (n) {
        const t = n
          .flatMap((n) => [n.buy, n.sell])
          .filter((n) => 'number' == typeof n);
        if (!t.length) return null;
        let l = Math.min(...t),
          u = Math.max(...t);
        const o = Math.max(0.15 * (u - l), 0.02 * u, 1);
        ((l = Math.max(0, l - o)), (u += o));
        const s = (n) => ('number' == typeof n ? (n - l) / (u - l) : null);
        return { buy: n.map((n) => s(n.buy)), sell: n.map((n) => s(n.sell)) };
      }));
  },
  870,
  [],
);
