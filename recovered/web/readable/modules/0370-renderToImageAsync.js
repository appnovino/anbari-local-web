// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 370; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.renderToImageAsync = async function (e, l) {
        if (!t.default)
          throw new o.UnavailabilityError(
            'expo-font',
            'ExpoFontUtils.renderToImageAsync',
          );
        return await t.default.renderToImageAsync(e, {
          ...l,
          color: l?.color ? (0, n.default)(l.color) : void 0,
        });
      }));
    var o = r(d[0]),
      n = e(r(d[1])),
      t = e(r(d[2]));
  },
  370,
  [266, 24, 371],
);
