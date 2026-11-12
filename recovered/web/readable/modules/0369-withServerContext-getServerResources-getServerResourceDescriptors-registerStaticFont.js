// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 369; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'withServerContext', {
        enumerable: !0,
        get: function () {
          return u.withServerContext;
        },
      }),
      (_e.getServerResources = function () {
        if (!n.default.getServerResources)
          throw new t.UnavailabilityError('expo-font', 'getServerResources');
        return n.default.getServerResources();
      }),
      (_e.getServerResourceDescriptors = function () {
        if (!n.default.getServerResourceDescriptors)
          throw new t.UnavailabilityError(
            'expo-font',
            'getServerResourceDescriptors',
          );
        return n.default.getServerResourceDescriptors();
      }),
      (_e.registerStaticFont = function (e, o) {
        if (!o)
          throw new t.CodedError(
            'ERR_FONT_SOURCE',
            `Cannot load null or undefined font source: { "${e}": ${o} }. Expected asset of type \`FontSource\` for fontFamily of name: "${e}"`,
          );
        const n = (0, s.getAssetForSource)(o);
        (0, s.loadSingleFontAsync)(e, n);
      }));
    var e,
      t = r(d[0]),
      o = r(d[1]),
      n = (e = o) && e.__esModule ? e : { default: e },
      s = r(d[2]),
      u = r(d[3]);
  },
  369,
  [266, 350, 355, 353],
);
