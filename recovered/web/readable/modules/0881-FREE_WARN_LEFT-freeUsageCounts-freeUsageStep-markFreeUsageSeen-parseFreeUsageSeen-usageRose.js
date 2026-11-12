// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 881; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'FREE_WARN_LEFT', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.freeUsageCounts = n),
      (e.freeUsageStep = function (o, u) {
        if (
          !o ||
          !Number.isFinite(o.limit) ||
          o.limit <= 0 ||
          !Number.isFinite(o.used) ||
          !o.month
        )
          return null;
        const { limit: l, used: f, left: h } = n(o),
          s = u?.month === o.month ? u : null;
        return f >= l
          ? s?.out
            ? null
            : 'out'
          : f >= 1 && h <= t
            ? s?.warn || s?.out
              ? null
              : 'warn'
            : f >= Math.ceil(l / 2)
              ? s?.half || s?.warn || s?.out
                ? null
                : 'half'
              : null;
      }),
      (e.markFreeUsageSeen = function (t, n, o) {
        const u = t?.month === n ? t : { month: n };
        return 'out' === o
          ? { ...u, month: n, half: !0, warn: !0, out: !0 }
          : 'warn' === o
            ? { ...u, month: n, half: !0, warn: !0 }
            : { ...u, month: n, half: !0 };
      }),
      (e.parseFreeUsageSeen = function (t) {
        try {
          const n = t ? JSON.parse(t) : null;
          return n && 'object' == typeof n && 'string' == typeof n.month
            ? {
                month: n.month,
                ...(!0 === n.half ? { half: !0 } : {}),
                ...(!0 === n.warn ? { warn: !0 } : {}),
                ...(!0 === n.out ? { out: !0 } : {}),
              }
            : null;
        } catch {
          return null;
        }
      }),
      (e.usageRose = function (t, n, o) {
        return o && (void 0 === t || n > t);
      }));
    const t = 3;
    function n(t) {
      const n = Math.max(0, Math.floor(t.limit)),
        o = Math.max(0, Math.min(n, Math.floor(t.used)));
      return { limit: n, used: o, left: n - o };
    }
  },
  881,
  [],
);
