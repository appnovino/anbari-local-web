// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 312; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'dictionaries', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.loadDictionary = async function (n) {
        if (t[n]) return;
        const c =
          'en' === n
            ? await r(d[2])(d[1], d.paths)
            : await r(d[2])(d[3], d.paths);
        t[n] = c.default ?? c;
      }),
      r(d[0]));
    const t = {};
  },
  312,
  {
    0: 313,
    1: 607,
    2: 336,
    3: 608,
    paths: {
      607: '/_expo/static/js/web/en-4085628343b36656aa8d0a8d709499fd.js',
      608: '/_expo/static/js/web/ar-d895f4bf099ed5aec24dcdac7e0f586b.js',
    },
  },
);
