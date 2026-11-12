// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 847; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.trendScale = function (n) {
        const e = n.flat().filter(Number.isFinite),
          o = Math.max(0, ...e),
          i = Math.min(0, ...e),
          u = (0, t.niceTop)(o) || 1,
          c = i < 0 ? -(0, t.niceTop)(-i) : 0,
          s = [...(c < 0 ? [c] : []), 0, u / 2, u];
        return { top: u, bottom: c, ticks: s };
      }),
      (_e.trendX = n),
      (_e.trendY = e),
      (_e.linePath = function (t, i, u) {
        return t
          .map(
            (c, s) =>
              (s ? 'L' : 'M') + o(n(s, t.length, u)) + ' ' + o(e(c, i, u)),
          )
          .join(' ');
      }),
      (_e.areaPath = function (t, i, u) {
        if (!t.length) return '';
        const c = o(e(0, i, u)),
          s = t.length;
        return (
          `M${o(n(0, s, u))} ${c} ` +
          t.map((t, c) => 'L' + o(n(c, s, u)) + ' ' + o(e(t, i, u))).join(' ') +
          ` L${o(n(s - 1, s, u))} ${c} Z`
        );
      }),
      (_e.signedSegments = function (t, i, u) {
        const c = t.length,
          s = [];
        if (!c) return s;
        const a = (t, n) => o(t) + ' ' + o(n);
        if (1 === c) {
          const o = n(0, 1, u),
            c = e(t[0], i, u);
          return [
            { positive: t[0] >= 0, d: `M${a(o - 4, c)} L${a(o + 4, c)}` },
          ];
        }
        let h = { positive: t[0] >= 0, d: 'M' + a(n(0, c, u), e(t[0], i, u)) };
        for (let o = 1; o < c; o++) {
          const f = t[o - 1],
            l = t[o],
            p = n(o - 1, c, u),
            M = n(o, c, u),
            b = e(l, i, u),
            v = l >= 0;
          if (v !== h.positive && f !== l) {
            const t = p + (M - p) * (f / (f - l)),
              n = e(0, i, u);
            ((h.d += ' L' + a(t, n)),
              s.push(h),
              (h = { positive: v, d: 'M' + a(t, n) }));
          }
          h.d += ' L' + a(M, b);
        }
        return (s.push(h), s);
      }),
      (_e.trendIndexAt = function (t, n, e) {
        if (n < 2) return 0;
        const o = e.padX ?? 6,
          i = e.width - 2 * o || 1,
          u = Math.round(((t - o) / i) * (n - 1));
        return Math.max(0, Math.min(n - 1, u));
      }),
      (_e.bucketDays = function (t, n, e) {
        const o = [];
        for (let i = t.length; i > 0; i -= n) {
          const u = t.slice(Math.max(0, i - n), i),
            c = { ...u[u.length - 1], from: u[0].date };
          for (const t of e)
            c[t] = u.reduce((n, e) => n + (Number(e[t]) || 0), 0);
          o.unshift(c);
        }
        return o;
      }),
      (_e.tweenValues = function (t, n, e) {
        const o = 1 - (1 - Math.max(0, Math.min(1, e))) ** 3;
        return n.map((e, i) => {
          const u = t.length === n.length ? t[i] : 0;
          return u + (e - u) * o;
        });
      }));
    var t = r(d[0]);
    function n(t, n, e) {
      const o = e.padX ?? 6,
        i = e.width - 2 * o;
      return n < 2 ? e.width / 2 : o + i * (t / (n - 1));
    }
    function e(t, n, e) {
      const o = e.padTop ?? 8,
        i = e.padBottom ?? 4,
        u = e.height - o - i,
        c = n.top - n.bottom || 1;
      return o + u * (1 - (t - n.bottom) / c);
    }
    const o = (t) => t.toFixed(1);
  },
  847,
  [844],
);
