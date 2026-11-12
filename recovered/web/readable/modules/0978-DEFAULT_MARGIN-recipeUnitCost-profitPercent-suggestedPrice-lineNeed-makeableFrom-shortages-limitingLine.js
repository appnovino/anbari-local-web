// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 978; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'DEFAULT_MARGIN', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.recipeUnitCost = function (n) {
        const t = n.yield > 0 ? n.yield : 1,
          o = n.lines
            .filter(
              (n) =>
                void 0 === n.avgCost ||
                null === n.avgCost ||
                null === n.perBatch,
            )
            .map((n) => n.name),
          l =
            n.lines.reduce(
              (n, t) =>
                n +
                (null !== t.perBatch && null != t.avgCost
                  ? t.perBatch * t.avgCost
                  : 0),
              0,
            ) / t,
          s = (n.extraCosts || []).reduce(
            (n, t) => n + (Number(t.amount) || 0),
            0,
          );
        return { materials: l, other: s, total: l + s, missing: o };
      }),
      (e.profitPercent = function (n, t) {
        return null != n && t > 0 ? Math.round(((n - t) / t) * 100) : void 0;
      }),
      (e.suggestedPrice = function (t, o = n) {
        if (!(t > 0) || !Number.isFinite(o) || o < 0 || o > 1e3) return;
        const l = t * (1 + o / 100),
          s = l >= 1e6 ? 1e3 : l >= 1e5 ? 100 : 10;
        return Math.round(l / s) * s;
      }),
      (e.lineNeed = o),
      (e.makeableFrom = function (n) {
        if (!n.lines.length) return null;
        let l = 1 / 0;
        for (const s of n.lines) {
          const u = o(s, 1, n.yield);
          u > 0 &&
            (l = Math.min(
              l,
              Math.max(0, Math.floor(Math.max(s.stock, 0) / u + t)),
            ));
        }
        return l === 1 / 0 ? null : l;
      }),
      (e.shortages = function (n, l) {
        return n.lines
          .map((t) => ({
            line: t,
            need: o(t, l, n.yield),
            short: o(t, l, n.yield) - Math.max(t.stock, 0),
          }))
          .filter((n) => n.short > t)
          .sort((n, t) => t.short / (t.need || 1) - n.short / (n.need || 1))
          .map((n) => ({
            ingredientId: n.line.ingredientId,
            name: n.line.name,
            unit: n.line.unit,
            short: Math.ceil(1e3 * n.short - t) / 1e3,
            need: n.need,
          }));
      }),
      (e.limitingLine = function (n) {
        let t;
        for (const l of n.lines) {
          const s = o(l, 1, n.yield);
          if (!(s > 0)) continue;
          const u = Math.max(l.stock, 0) / s;
          (!t || u < t.units) && (t = { line: l, units: u });
        }
        return t?.line;
      }));
    const n = 40,
      t = 1e-9;
    function o(n, t, o) {
      return null === n.perBatch ? 0 : (n.perBatch * t) / (o > 0 ? o : 1);
    }
  },
  978,
  [],
);
