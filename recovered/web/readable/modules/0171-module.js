// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 171; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var e,
      t = r(d[0]),
      u = (e = t) && e.__esModule ? e : { default: e };
    class n {
      static get() {
        return u.default.get('window').scale;
      }
      static getFontScale() {
        return u.default.get('window').fontScale || n.get();
      }
      static getPixelSizeForLayoutSize(e) {
        return Math.round(e * n.get());
      }
      static roundToNearestPixel(e) {
        var t = n.get();
        return Math.round(e * t) / t;
      }
    }
  },
  171,
  [124],
);
