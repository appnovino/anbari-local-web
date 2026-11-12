// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 521; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.listFavorites = async function (n) {
        return (
          await (0, t.request)(
            (0, t.shopPath)(n, '/contacts?favorite=true&limit=20'),
          )
        ).contacts;
      }),
      (e.readHabits = async function (n, c) {
        return (
          await (0, t.request)(
            (0, t.shopPath)(n, `/contacts/${encodeURIComponent(c)}/habits`),
          )
        ).habits;
      }),
      (e.patchContact = async function (o, s, u) {
        const h = await (0, t.request)(
          (0, t.shopPath)(o, `/contacts/${encodeURIComponent(s)}`),
          'PATCH',
          u,
          { key: (0, n.idempotencyKey)() },
        );
        return (await (0, c.rememberContact)(o, h.contact), h);
      }),
      (e.createContactPlus = async function (o, s) {
        const u = await (0, t.request)(
          (0, t.shopPath)(o, '/contacts'),
          'POST',
          s,
          { key: (0, n.idempotencyKey)() },
        );
        return (await (0, c.rememberContact)(o, u.contact, { added: !0 }), u);
      }));
    var t = r(d[0]),
      n = r(d[1]),
      c = r(d[2]);
  },
  521,
  [415, 519, 520],
);
