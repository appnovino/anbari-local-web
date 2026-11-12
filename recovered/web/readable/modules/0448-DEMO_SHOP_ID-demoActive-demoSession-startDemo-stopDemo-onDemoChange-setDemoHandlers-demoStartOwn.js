// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 448; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'DEMO_SHOP_ID', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.demoActive = function () {
        return t;
      }),
      (e.demoSession = function () {
        return o;
      }),
      (e.startDemo = function () {
        ((t = !0), o++, c.forEach((n) => n(!0)));
      }),
      (e.stopDemo = function () {
        if (!t) return;
        ((t = !1), c.forEach((n) => n(!1)));
      }),
      (e.onDemoChange = function (n) {
        return (
          c.add(n),
          () => {
            c.delete(n);
          }
        );
      }),
      (e.setDemoHandlers = function (n) {
        u = n;
      }),
      (e.demoStartOwn = function () {
        u.startOwn?.();
      }),
      (e.demoLeave = function () {
        u.leave?.();
      }),
      (e.isDemoKey = function (n) {
        return n.includes(':demo-shop:') || n.endsWith(':demo-shop');
      }),
      Object.defineProperty(e, 'demoUserId', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    const n = 'demo-shop';
    let t = !1,
      o = 0,
      u = {};
    const c = new Set();
    const s = () => 'demo-user-' + o;
  },
  448,
  [],
);
