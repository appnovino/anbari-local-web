// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 484; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'ShopSwitchContext', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(_e, 'useShopSwitch', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (_e.rememberShop = async function (e, t) {
        if (!e) return;
        try {
          await u.default.setItem(l(e), t);
        } catch {}
      }),
      (_e.rememberedShop = async function (e, t) {
        if (!e) return null;
        try {
          const n = await u.default.getItem(l(e));
          return t.find((e) => e.id === n) || null;
        } catch {
          return null;
        }
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      u = (e = n) && e.__esModule ? e : { default: e };
    const c = (0, t.createContext)(null),
      o = () => (0, t.useContext)(c),
      l = (e) => 'anbari.activeShop.' + e;
  },
  484,
  [2, 258],
);
