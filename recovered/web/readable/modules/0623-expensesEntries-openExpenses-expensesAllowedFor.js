// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 623; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'expensesEntries', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'openExpenses', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (e.expensesAllowedFor = function (n) {
        if (!n) return !1;
        if ('owner' === n.role || 'manager' === n.role) return !0;
        const t = 'staff' === n.role ? n.access?.see : void 0;
        return !!(t && t.buyPrice && t.sellPrice && t.ledger);
      }));
    const n = new Set();
    let t = null;
    const o = {
        open(o = {}) {
          ((t = o), n.forEach((n) => n(o)));
        },
        close() {
          ((t = null), n.forEach((n) => n(null)));
        },
        subscribe: (o) => (
          n.add(o),
          o(t),
          () => {
            n.delete(o);
          }
        ),
      },
      l = (n = {}) => o.open(n);
  },
  623,
  [],
);
