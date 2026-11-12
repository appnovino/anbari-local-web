// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 852; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    function t(t, n) {
      if (!t) return '';
      const o = new Date(t);
      if (Number.isNaN(o.getTime())) return '';
      try {
        return new Intl.DateTimeFormat('en-CA', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          ...(n ? { timeZone: n } : {}),
        }).format(o);
      } catch {
        return `${o.getFullYear()}-${String(o.getMonth() + 1).padStart(2, '0')}-${String(o.getDate()).padStart(2, '0')}`;
      }
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.dayKey = t),
      (e.groupByDay = function (n) {
        const o = [];
        for (const u of n) {
          const n = t(u.timestamp, u.timeZone),
            s = o[o.length - 1];
          s && s.key === n ? s.rows.push(u) : o.push({ key: n, rows: [u] });
        }
        return o;
      }),
      (e.relativeDay = function (n, o, u) {
        return n
          ? n === t(o.toISOString(), u)
            ? 'today'
            : n === t(new Date(o.getTime() - 864e5).toISOString(), u)
              ? 'yesterday'
              : null
          : null;
      }));
  },
  852,
  [],
);
