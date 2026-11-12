// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 499; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'iphoneBadge', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'storeLinks', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }));
    var n = r(d[0]);
    const t = (t) => n.BRAND.iphone.find((n) => n.id === t),
      o = (n) => t(n).badge,
      b = {
        bazaar: 'https://cafebazaar.ir/app/com.anbar.inventory',
        sibche: t('sibche').url,
        anardoni: t('anardoni').url,
        sibapp: t('sibapp').url,
      };
  },
  499,
  [437],
);
