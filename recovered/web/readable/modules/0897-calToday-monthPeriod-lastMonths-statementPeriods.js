// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 897; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, _i, a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.calToday = m),
      (e.monthPeriod = c),
      (e.lastMonths = s),
      (e.statementPeriods = function (t, l, h) {
        const y = m(t, l),
          g = i(y.year, y.month, -1),
          u = { ...c(y.year, y.month), to: y.gregorian },
          d = { ...c(g.year, g.month), label: c(g.year, g.month, !1).label },
          f = Array.from({ length: 24 }, (t, n) => {
            const o = i(y.year, y.month, -n);
            return 0 === n ? u : c(o.year, o.month);
          }),
          $ = h ? (0, o.dayIso)(h, l) : null;
        return {
          thisMonth: u,
          lastMonth: d,
          months: f,
          recent: [s(3, t, l), s(6, t, l), s(12, t, l)],
          all: $
            ? {
                key: 'all',
                label: (0, n.L)(
                  '\u0647\u0645\u0647\u060c \u0627\u0632 \u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f ({day})',
                  { day: (0, o.dateText)($, !0) },
                ),
                from: $,
                to: y.gregorian,
              }
            : null,
        };
      }));
    var t = r(_d[0]),
      n = r(_d[1]),
      o = r(_d[2]);
    const l = (t) => String(t).padStart(2, '0'),
      h = (n, o, h) => {
        const i = (0, t.calToGregorian)(n, o, h);
        return `${i.year}-${l(i.month)}-${l(i.day)}`;
      },
      i = (t, n, o) => {
        const l = 12 * t + (n - 1) + o;
        return { year: Math.floor(l / 12), month: (l % 12) + 1 };
      };
    function m(n, h) {
      const [i, m, c] = (0, o.dayIso)(new Date(n).toISOString(), h)
        .split('-')
        .map(Number);
      return {
        ...(0, t.calFromGregorian)(i, m, c),
        gregorian: `${i}-${l(m)}-${l(c)}`,
      };
    }
    function c(o, l, i = !0) {
      return {
        key: `m:${o}-${l}`,
        label: i
          ? `${(0, t.calMonthNames)()[l - 1]} ${(0, n.localDigits)(String(o))}`
          : (0, t.calMonthNames)()[l - 1],
        from: h(o, l, 1),
        to: h(o, l, (0, t.calMonthLength)(o, l)),
      };
    }
    function s(o, l, c) {
      const s = m(l, c),
        y = i(s.year, s.month, -o),
        g = Math.min(s.day, (0, t.calMonthLength)(y.year, y.month));
      return {
        key: `l:${o}`,
        label:
          12 === o
            ? (0, n.L)('\u06f1 \u0633\u0627\u0644 \u0627\u062e\u06cc\u0631')
            : (0, n.L)('{n} \u0645\u0627\u0647 \u0627\u062e\u06cc\u0631', {
                n: (0, n.localDigits)(String(o)),
              }),
        from: h(y.year, y.month, g),
        to: s.gregorian,
      };
    }
  },
  897,
  [440, 311, 475],
);
