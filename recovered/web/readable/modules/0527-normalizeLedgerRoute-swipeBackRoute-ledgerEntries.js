// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 527; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    function c(c) {
      const { part: t, from: n, ...s } = c,
        o = 'people' === n || 'customers' === n,
        l = o ? s : { ...s, ...(n ? { from: n } : {}) };
      return 'people' === c.screen
        ? { ...l, screen: 'contacts' }
        : 'customers' === c.screen
          ? 'club' === c.part
            ? { screen: 'club' }
            : { ...l, screen: 'contacts', filter: c.filter || 'customer' }
          : 'contact' === c.screen && o
            ? {
                ...l,
                ...('customers' !== n || c.filter
                  ? {}
                  : { filter: 'customer' }),
              }
            : c;
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.normalizeLedgerRoute = c),
      (e.swipeBackRoute = function (c, t = !1) {
        return 'contact' !== c.screen || t
          ? 'club' === c.screen && c.contactId
            ? { screen: 'club' }
            : null
          : 'cheques' === c.from
            ? { screen: 'cheques' }
            : 'club' === c.from
              ? { screen: 'club' }
              : {
                  screen: 'contacts',
                  ...(c.filter && 'all' !== c.filter
                    ? { filter: c.filter }
                    : {}),
                };
      }),
      Object.defineProperty(e, 'ledgerEntries', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    const t = new Set();
    let n = null;
    const s = {
      open(s) {
        const o = c(s);
        ((n = o), t.forEach((c) => c(o)));
      },
      close() {
        ((n = null), t.forEach((c) => c(null)));
      },
      subscribe: (c) => (
        t.add(c),
        c(n),
        () => {
          t.delete(c);
        }
      ),
    };
  },
  527,
  [],
);
