// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 442; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'FREE_RECORD_LIMIT', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.freeMonth = function (o, s = Date.now()) {
        const [h, m, u] = (0, n.todayIn)(o || 'Asia/Tehran', s)
            .split('-')
            .map(Number),
          c = (0, t.toJalali)(h, m, u),
          l =
            12 === c.month
              ? { year: c.year + 1, month: 1 }
              : { year: c.year, month: c.month + 1 };
        return {
          from: (0, n.isoDate)((0, t.toGregorian)(c.year, c.month, 1)),
          to: (0, n.isoDate)(
            (0, t.toGregorian)(
              c.year,
              c.month,
              (0, t.jalaliMonthLength)(c.year, c.month),
            ),
          ),
          next: (0, n.isoDate)((0, t.toGregorian)(l.year, l.month, 1)),
          year: c.year,
          month: c.month,
        };
      }),
      (e.recordsNeeded = function ({
        goods: t = 0,
        sales: n = 0,
        expenses: o = 0,
      }) {
        return Math.ceil(Math.max(0, t) / 20) + Math.max(0, n) + Math.max(0, o);
      }),
      (e.recordsLeft = s),
      (e.recordsFit = function (t, n, o, h) {
        const m = s(t, o, h);
        return null === m || n <= m;
      }));
    var t = r(_d[0]),
      n = r(_d[1]);
    const o = 20;
    function s(t, o = 'Asia/Tehran', s = Date.now()) {
      return t
        ? (0, n.todayIn)(o, s) >= t.resetsOn
          ? t.limit
          : Math.max(0, t.left)
        : null;
    }
  },
  442,
  [440, 443],
);
