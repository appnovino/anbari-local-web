// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 822; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.saveInvoiceHeader = async function (t, n, c) {
        const o =
            ('sale' === n.type ? '/sales/' : '/purchases/') +
            encodeURIComponent(n.id) +
            '/invoice-header',
          u = await (0, s.request)((0, s.shopPath)(t, o), 'PUT', { header: c });
        return 'sale' === n.type ? u.sale : u.purchase;
      }));
    var s = r(d[0]);
  },
  822,
  [415],
);
