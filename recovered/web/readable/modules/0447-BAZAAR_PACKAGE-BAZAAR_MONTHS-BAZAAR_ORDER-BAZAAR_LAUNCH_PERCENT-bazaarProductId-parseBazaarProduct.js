// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 447; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'BAZAAR_PACKAGE', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'BAZAAR_MONTHS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'BAZAAR_ORDER', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'BAZAAR_LAUNCH_PERCENT', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.bazaarProductId = function (n, t, u = !1) {
        return `anbari_${n}_${t}m${u ? '_launch30' : ''}`;
      }),
      (e.parseBazaarProduct = function (n) {
        const t =
          'string' == typeof n
            ? /^anbari_([a-z]+)_(1|3|12)m(_launch30)?$/.exec(n)
            : null;
        return !t || (t[3] && '1' !== t[2])
          ? null
          : {
              planId: t[1],
              months: Number(t[2]),
              ...(t[3] ? { launchPercent: c } : {}),
            };
      }));
    const n = 'com.anbar.inventory',
      t = [1, 3, 12],
      u = ['standard', 'pro'],
      c = 30;
  },
  447,
  [],
);
