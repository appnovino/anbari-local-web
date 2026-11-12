// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 909; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.readClub = o),
      (e.saveClub = async function (c, o) {
        const r = (
          await (0, t.request)((0, t.shopPath)(c, '/club'), 'PUT', o, {
            key: (0, n.idempotencyKey)(),
          })
        ).club;
        return (u.delete(c.id), r);
      }),
      (e.clubIsOn = function (t, n = Date.now()) {
        const c = u.get(t.id);
        if (c && n - c.at < 6e4) return c.on;
        const r = o(t).then(
          (t) => !!t.club.enabled,
          () => (u.delete(t.id), !1),
        );
        return (u.set(t.id, { at: n, on: r }), r);
      }),
      (e.readClubMember = async function (n, c) {
        return (0, t.request)(
          (0, t.shopPath)(n, '/club/members/' + encodeURIComponent(c)),
        );
      }),
      (e.joinClub = async function (o, u) {
        const r = await (0, t.request)(
          (0, t.shopPath)(o, '/club/members'),
          'POST',
          u,
          { key: (0, n.idempotencyKey)() },
        );
        return (
          await (0, c.rememberContact)(o, r.contact, { added: !r.existing }),
          r
        );
      }));
    var t = _r(d[0]),
      n = _r(d[1]),
      c = _r(d[2]);
    async function o(n, c = 'points') {
      return (0, t.request)((0, t.shopPath)(n, '/club?sort=' + c));
    }
    const u = new Map();
  },
  909,
  [415, 519, 520],
);
