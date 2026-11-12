// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 460; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'DISCOUNT_REASON_MAX', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'DISCOUNT_REASONS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.roundToman = r),
      (e.lineGross = function (n, t) {
        if (!(n > 0 && t > 0)) return 0;
        return r((Math.round(1e3 * n) * t) / 1e3);
      }),
      (e.cleanDiscount = i),
      (e.discountOn = u),
      (e.shareOut = o),
      (e.priceSale = function (n, t) {
        const r = n.map((n) => {
            const t = Math.max(0, Math.round(n.gross)),
              r = u(t, n.discount);
            return { gross: t, lineDiscount: r, left: t - r };
          }),
          i = u(
            r.reduce((n, t) => n + t.left, 0),
            t,
          ),
          a = o(
            i,
            r.map((n) => n.left),
          ),
          c = r.map((n, t) => ({
            gross: n.gross,
            lineDiscount: n.lineDiscount,
            invoiceShare: a[t],
            net: n.left - a[t],
          })),
          s = c.reduce((n, t) => n + t.gross, 0),
          l = c.reduce((n, t) => n + t.lineDiscount, 0);
        return {
          lines: c,
          gross: s,
          lineDiscounts: l,
          invoiceDiscount: i,
          discount: l + i,
          total: s - l - i,
        };
      }),
      (e.discountLabel = function (n) {
        const t = i(n);
        return t
          ? 'percent' === t.kind
            ? { percent: t.value }
            : { amount: t.value }
          : null;
      }));
    const n = 60,
      t = [
        '\u0622\u0633\u06cc\u0628\u200c\u062f\u06cc\u062f\u0647 \u062f\u0631 \u0631\u0627\u0647',
        '\u0645\u0634\u062a\u0631\u06cc \u0647\u0645\u06cc\u0634\u06af\u06cc',
        '\u062a\u0627\u0631\u06cc\u062e \u0646\u0632\u062f\u06cc\u06a9',
      ];
    function r(n) {
      if (!Number.isFinite(n)) return 0;
      const t = n < 0 ? -1 : 1,
        r = Math.abs(n),
        i = Math.floor(r);
      return t * (r - i >= 0.4999999 ? i + 1 : i);
    }
    function i(t) {
      if (
        !t ||
        ('percent' !== t.kind && 'amount' !== t.kind) ||
        !Number.isFinite(t.value)
      )
        return null;
      const r =
        'percent' === t.kind
          ? Math.round(100 * Math.min(100, Math.max(0, t.value))) / 100
          : Math.max(0, Math.round(t.value));
      if (!(r > 0)) return null;
      const i = (t.reason || '').trim().slice(0, n);
      return { kind: t.kind, value: r, ...(i ? { reason: i } : {}) };
    }
    function u(n, t) {
      const u = i(t);
      if (!(u && n > 0)) return 0;
      const o = 'percent' === u.kind ? r((n * u.value) / 100) : u.value;
      return Math.min(n, Math.max(0, o));
    }
    function o(n, t) {
      const r = t.reduce((n, t) => n + Math.max(0, t), 0);
      if (!(n > 0 && r > 0)) return t.map(() => 0);
      const i = t.map((t) => (Math.max(0, t) * n) / r),
        u = i.map((n) => Math.floor(n + 1e-9));
      let o = n - u.reduce((n, t) => n + t, 0);
      const a = i
        .map((n, t) => ({ i: t, rem: n - Math.floor(n + 1e-9) }))
        .filter((n) => t[n.i] > 0)
        .sort((n, t) => t.rem - n.rem || n.i - t.i);
      for (let n = 0; o > 0 && a.length; n = (n + 1) % a.length) {
        const r = a[n].i;
        if (u[r] < Math.max(0, t[r])) ((u[r] += 1), (o -= 1));
        else if (a.every((n) => u[n.i] >= t[n.i])) break;
      }
      return u;
    }
  },
  460,
  [],
);
