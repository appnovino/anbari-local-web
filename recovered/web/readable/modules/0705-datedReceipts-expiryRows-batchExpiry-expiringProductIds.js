// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 705; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, d) {
    'use strict';
    function t(t) {
      const n = new Set(t.map((t) => t.correctsMovementId).filter((t) => !!t));
      return t.filter(
        (t) =>
          'received' === t.kind &&
          !!t.expiresAt &&
          !t.correctsMovementId &&
          !n.has(t.id),
      );
    }
    function n(n, c) {
      const o = new Map(c.filter((t) => !t.archivedAt).map((t) => [t.id, t])),
        s = new Set(
          c.filter((t) => t.expiresAt && !t.archivedAt).map((t) => t.id),
        );
      return [
        ...t(n).filter(
          (t) => !s.has(t.productId) && (o.get(t.productId)?.stock || 0) > 0,
        ),
        ...c
          .filter((t) => t.expiresAt && !t.archivedAt && t.stock > 0)
          .map((t) => ({
            id: 'product-' + t.id,
            productId: t.id,
            name: t.name,
            kind: 'received',
            quantity: t.stock,
            expiresAt: t.expiresAt,
          })),
      ];
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.datedReceipts = t),
      (e.expiryRows = n),
      (e.batchExpiry = function (n, c, o, s) {
        const u = t(n)
          .filter((t) => t.productId === c)
          .map((t) => t.expiresAt)
          .sort();
        return u.find((t) => s(t) >= 0) ?? (o > 0 ? u[u.length - 1] : void 0);
      }),
      (e.expiringProductIds = function (t, c, o = 7, s = new Date()) {
        const u = new Date(s);
        u.setHours(0, 0, 0, 0);
        const p = u.getTime() + 864e5 * o,
          f = new Set();
        for (const o of n(t, c)) {
          const t = /^(\d{4})-(\d{2})-(\d{2})$/.exec(o.expiresAt || '');
          if (!t) continue;
          const n = new Date(Number(t[1]), Number(t[2]) - 1, Number(t[3]));
          n.getMonth() === Number(t[2]) - 1 &&
            n.getTime() <= p &&
            f.add(o.productId);
        }
        return f;
      }));
  },
  705,
  [],
);
