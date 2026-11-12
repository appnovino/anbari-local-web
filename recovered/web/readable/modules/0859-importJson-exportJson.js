// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 859; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.importJson = function (t) {
        if (t.length > 52428800) throw Error('import_limit');
        let n;
        try {
          n = JSON.parse(new TextDecoder().decode(t).replace(/^\uFEFF/, ''));
        } catch {
          throw Error('json_invalid');
        }
        if (n?.messages || n?.chats) throw Error('telegram_later');
        if (n?.schema && 'anbar.inventory.v1' !== n.schema)
          throw Error('json_invalid');
        const c = Array.isArray(n) ? n : n?.products;
        if (!Array.isArray(c)) throw Error('json_invalid');
        return (0, o.validateImportRows)(
          c.map((o) => {
            if (!o || 'object' != typeof o) throw Error('json_invalid');
            return {
              name: o.name,
              stock: o.stock,
              barcode: o.barcode,
              detail: o.detail,
              category: o.category,
              photo: o.photo,
              brand: o.brand,
              size: o.size,
              color: o.color,
              price: o.price,
              costPrice: o.costPrice,
            };
          }),
        );
      }),
      (e.exportJson = function (o) {
        return new TextEncoder().encode(
          JSON.stringify(
            {
              schema: 'anbar.inventory.v1',
              exportedAt: new Date().toISOString(),
              products: o.products.map(({ id: o, ...t }) => t),
            },
            null,
            2,
          ),
        );
      }));
    var o = r(d[0]);
  },
  859,
  [439],
);
