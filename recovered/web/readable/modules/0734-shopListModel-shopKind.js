// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 734; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.shopListModel = function (n, t, o, l) {
        const u = n.find((n) => n.id === t) || null,
          f = n.filter((n) => n.id !== t),
          s = n.filter((n) => 'owner' === n.role).length;
        return {
          current: u,
          others: f,
          owned: s,
          limit: Math.max(1, o),
          canAdd: l && s < o,
        };
      }),
      (e.shopKind = function (n) {
        return 'owner' !== n.role
          ? 'staff'
          : n.billingShopId
            ? 'extra'
            : 'main';
      }));
  },
  734,
  [],
);
