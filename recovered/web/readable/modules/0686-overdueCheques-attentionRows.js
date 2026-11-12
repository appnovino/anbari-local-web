// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 686; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.overdueCheques = u),
      (e.attentionRows = function ({
        cheques: n,
        today: o,
        expiring: s,
        low: c,
        max: a = 5,
        expiryDays: y = 7,
      }) {
        const f = [],
          h = t(o);
        for (const s of u(n, o).slice(0, 2))
          f.push({
            kind: 'cheque',
            key: 'cheque-' + s.id,
            cheque: s,
            daysLate: Math.round(h - t(s.dueDate)),
          });
        s > 0 && f.push({ kind: 'expiry', key: 'expiry', count: s, days: y });
        for (const t of c.slice(0, 2))
          f.push({ kind: 'low', key: 'low-' + t.id, item: t });
        return f.slice(0, a);
      }));
    const t = (t) => {
      const u = /^(\d{4})-(\d{2})-(\d{2})/.exec(t || '');
      return u
        ? Date.UTC(Number(u[1]), Number(u[2]) - 1, Number(u[3])) / 864e5
        : NaN;
    };
    function u(u, n) {
      const o = t(n);
      return Number.isFinite(o)
        ? (u || [])
            .filter((u) => 'pending' === u.status && t(u.dueDate) < o)
            .sort((u, n) => t(u.dueDate) - t(n.dueDate))
        : [];
    }
  },
  686,
  [],
);
