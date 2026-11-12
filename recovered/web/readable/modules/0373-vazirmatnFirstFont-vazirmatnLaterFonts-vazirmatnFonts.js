// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 373; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'vazirmatnFirstFont', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'vazirmatnLaterFonts', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'vazirmatnFonts', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var t = r(d[0]);
    const n = (n) => ({ uri: n, display: t.FontDisplay.SWAP }),
      o = { Vazirmatn_400Regular: n(r(d[1])) },
      u = {
        Vazirmatn_500Medium: n(r(d[2])),
        Vazirmatn_600SemiBold: n(r(d[3])),
        Vazirmatn_700Bold: n(r(d[4])),
        Vazirmatn_900Black: n(r(d[5])),
      },
      c = { ...o, ...u };
  },
  373,
  [348, 374, 375, 376, 377, 378],
);
