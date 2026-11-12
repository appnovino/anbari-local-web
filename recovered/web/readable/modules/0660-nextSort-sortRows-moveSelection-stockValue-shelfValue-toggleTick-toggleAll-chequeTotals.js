// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 660; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, d) {
    'use strict';
    function n(n, t = !0) {
      if (
        t &&
        'made' !== n.kind &&
        n.stock > 0 &&
        void 0 !== n.price &&
        null !== n.price &&
        Number.isFinite(n.price)
      )
        return Math.round(n.stock * n.price);
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.nextSort = function (n, t) {
        return n && n.key === t
          ? 'asc' === n.dir
            ? { key: t, dir: 'desc' }
            : null
          : { key: t, dir: 'asc' };
      }),
      (e.sortRows = function (n, t, o) {
        if (!t) return [...n];
        const u = 'asc' === t.dir ? 1 : -1;
        return n
          .map((n, u) => ({ row: n, index: u, v: o(n, t.key) }))
          .sort((n, t) => {
            const o =
                void 0 === n.v ||
                null === n.v ||
                ('number' == typeof n.v && !Number.isFinite(n.v)),
              c =
                void 0 === t.v ||
                null === t.v ||
                ('number' == typeof t.v && !Number.isFinite(t.v));
            if (o || c) return o === c ? n.index - t.index : o ? 1 : -1;
            const a =
              'number' == typeof n.v && 'number' == typeof t.v
                ? n.v - t.v
                : String(n.v).localeCompare(String(t.v), 'fa');
            return a ? a * u : n.index - t.index;
          })
          .map((n) => n.row);
      }),
      (e.moveSelection = function (n, t, o) {
        if (!n.length) return null;
        const u = t ? n.indexOf(t) : -1;
        return u < 0
          ? o > 0
            ? n[0]
            : n[n.length - 1]
          : n[Math.min(n.length - 1, Math.max(0, u + o))];
      }),
      (e.stockValue = n),
      (e.shelfValue = function (t, o = !0) {
        return t.reduce((t, u) => (u.archivedAt ? t : t + (n(u, o) ?? 0)), 0);
      }),
      (e.toggleTick = function (n, t) {
        const o = new Set(n);
        o.has(t) ? o.delete(t) : o.add(t);
        return o;
      }),
      (e.toggleAll = function (n, t) {
        const o = t.length > 0 && t.every((t) => n.has(t)),
          u = new Set(n);
        for (const n of t) o ? u.delete(n) : u.add(n);
        return u;
      }),
      (e.chequeTotals = function (n, t) {
        const u = { open: 0, late: 0, lateToman: 0, inToman: 0, outToman: 0 };
        for (const c of n) {
          if ('pending' !== c.status) continue;
          const n = c.amountToman ?? 0;
          (u.open++,
            'receive' === c.direction ? (u.inToman += n) : (u.outToman += n),
            o(t, c.dueDate) < 0 && (u.late++, (u.lateToman += n)));
        }
        return u;
      }),
      Object.defineProperty(e, 'chequeDays', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    const t = /^(\d{4})-(\d{2})-(\d{2})$/;
    function o(n, o) {
      const u = t.exec(n),
        c = t.exec(o);
      return u && c
        ? Math.round(
            (Date.UTC(+c[1], +c[2] - 1, +c[3]) -
              Date.UTC(+u[1], +u[2] - 1, +u[3])) /
              864e5,
          )
        : NaN;
    }
    const u = (n, t) => o(t, n.dueDate);
  },
  660,
  [],
);
