// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 434; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.faDigits = u),
      (e.formatGrouped = function (t, n = 3) {
        const u = Number(t);
        return Number.isFinite(u) ? o(u, n) : o(0);
      }),
      (e.formatCompactToman = function (t, o) {
        return (0, n.moneyNumber)(t, o);
      }),
      (e.formatCompactParts = function (t, o) {
        return (0, n.moneyParts)(t, o);
      }),
      (e.percentChange = function (t, n) {
        return Number.isFinite(t) && Number.isFinite(n) && 0 !== n
          ? Math.round(((t - n) / Math.abs(n)) * 100)
          : null;
      }),
      (e.relativeTimeFa = function (n, u = new Date()) {
        const c = n instanceof Date ? n : new Date(n);
        if (Number.isNaN(c.getTime())) return '';
        const l = Math.floor((u.getTime() - c.getTime()) / 6e4),
          D = f(c, u);
        return l >= 0 && l < 1
          ? (0, t.L)('\u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627')
          : l >= 1 && l < 60
            ? (0, t.L)(
                '{n} \u062f\u0642\u06cc\u0642\u0647 \u067e\u06cc\u0634',
                { n: o(l) },
              )
            : 0 === D
              ? (0, t.L)('\u0627\u0645\u0631\u0648\u0632 {time}', {
                  time: s(c),
                })
              : 1 === D
                ? (0, t.L)('\u062f\u06cc\u0631\u0648\u0632 {time}', {
                    time: s(c),
                  })
                : `${c.toLocaleDateString((0, t.dateLocale)(), { day: 'numeric', month: 'long' })} ${s(c)}`;
      }),
      (e.dayLabelFa = function (n, o = new Date()) {
        const u = n instanceof Date ? n : new Date(n),
          c = f(u, o);
        return 0 === c
          ? (0, t.L)('\u0627\u0645\u0631\u0648\u0632')
          : 1 === c
            ? (0, t.L)('\u062f\u06cc\u0631\u0648\u0632')
            : u.toLocaleDateString((0, t.dateLocale)(), {
                weekday: 'long',
                day: 'numeric',
                month: 'long',
              });
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const o = (n, o = 0) =>
      n.toLocaleString((0, t.numberLocale)(), {
        maximumFractionDigits: o,
        minimumFractionDigits: 0,
      });
    function u(n) {
      return (0, t.localDigits)(n);
    }
    const c = (t) => u(String(t).padStart(2, '0')),
      s = (t) => `${c(t.getHours())}:${c(t.getMinutes())}`,
      l = (t) => new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
    function f(t, n) {
      return Math.round((l(n) - l(t)) / 864e5);
    }
  },
  434,
  [311, 435],
);
