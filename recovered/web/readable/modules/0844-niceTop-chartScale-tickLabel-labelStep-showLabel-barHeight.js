// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 844; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.niceTop = c),
      (e.chartScale = function (t) {
        const o = Math.max(0, ...t.filter(Number.isFinite)),
          f = c(o),
          [s, l] =
            f >= 1e9
              ? [1e9, (0, n.L)('\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f')]
              : f >= 1e6
                ? [1e6, (0, n.L)('\u0645\u06cc\u0644\u06cc\u0648\u0646')]
                : f >= 1e4
                  ? [1e3, (0, n.L)('\u0647\u0632\u0627\u0631')]
                  : [1, ''];
        return { max: o, top: f, ticks: [0, u(f / 2), f], divisor: s, unit: l };
      }),
      (e.tickLabel = function (n, o) {
        return (0, t.formatGrouped)(u(n / o.divisor), 1);
      }),
      (e.labelStep = f),
      (e.showLabel = function (t, n) {
        return (n - 1 - t) % f(n) == 0;
      }),
      (e.barHeight = function (t, n, o) {
        return t > 0 && n > 0 ? Math.max(4, Math.min(1, t / n) * o) : 2;
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const o = [1, 2, 3, 4, 5, 6, 8, 10],
      u = (t) => Number(t.toPrecision(12));
    function c(t) {
      if (!Number.isFinite(t) || t <= 0) return 0;
      const n = 10 ** Math.floor(Math.log10(t));
      for (const c of o) {
        const o = u(c * n);
        if (o >= t - 1e-9) return o;
      }
      return u(10 * n);
    }
    function f(t) {
      return t <= 12 ? 1 : Math.ceil(t / 6);
    }
  },
  844,
  [434, 311],
);
