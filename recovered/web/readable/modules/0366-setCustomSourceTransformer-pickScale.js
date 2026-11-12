// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 366; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (_e.setCustomSourceTransformer = c),
      Object.defineProperty(_e, 'pickScale', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      u = (e = n) && e.__esModule ? e : { default: e };
    let o;
    function c(e) {
      o = e;
    }
    function f(e) {
      if ('object' == typeof e) return e;
      const n = (0, t.getAssetByID)(e);
      if (!n) return null;
      const c = new u.default('https://expo.dev', null, n);
      return o ? o(c) : c.defaultAsset();
    }
    Object.defineProperty(f, 'setCustomSourceTransformer', { get: () => c });
    var s = f;
    const { pickScale: l } = u.default;
  },
  366,
  [169, 360],
);
