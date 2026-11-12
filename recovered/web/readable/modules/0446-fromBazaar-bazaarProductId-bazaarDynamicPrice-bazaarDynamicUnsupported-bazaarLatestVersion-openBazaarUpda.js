// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 446; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'fromBazaar', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(_e, 'bazaarProductId', {
        enumerable: !0,
        get: function () {
          return c.bazaarProductId;
        },
      }),
      Object.defineProperty(_e, 'bazaarDynamicPrice', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      (_e.bazaarDynamicUnsupported = function () {
        ((b = Date.now()), t.default.setItem(f, String(b)).catch(() => {}));
      }),
      (_e.bazaarLatestVersion = async function () {
        return null;
      }),
      (_e.openBazaarUpdate = function () {
        try {
          o?.openUpdate();
        } catch {}
      }),
      (_e.bazaarPurchase = function (e, n, t) {
        throw Error('bazaar_unavailable');
      }),
      (_e.bazaarConsume = async function (e) {
        try {
          return (await o?.consume(e), !0);
        } catch {
          return !1;
        }
      }),
      (_e.bazaarOwned = async function () {
        return [];
      }),
      Object.defineProperty(_e, 'BAZAAR_PACKAGE', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (_e.openBazaarReview = async function () {
        try {
          if (o?.openReview && (await o.openReview())) return !0;
        } catch {}
        try {
          return (
            await n.default.openURL('bazaar://details?id=com.anbar.inventory'),
            !0
          );
        } catch {}
        try {
          await n.default.openURL(
            'https://cafebazaar.ir/app/com.anbar.inventory',
          );
        } catch {}
        return !1;
      }));
    var n = e(r(d[0]));
    (r(d[1]), r(d[2]));
    var t = e(r(d[3])),
      c = r(d[4]);
    const o = null,
      u = !1,
      f = 'anbari.bazaar.dynamicOff';
    let b = 0;
    !0 === o?.dynamicPrice &&
      t.default
        .getItem(f)
        .then((e) => {
          const n = Number(e);
          n > b && (b = n);
        })
        .catch(() => {});
    const y = () => !0 === o?.dynamicPrice && Date.now() - b > 2592e5;
    const s = 'com.anbar.inventory';
  },
  446,
  [210, 94, 313, 258, 447],
);
