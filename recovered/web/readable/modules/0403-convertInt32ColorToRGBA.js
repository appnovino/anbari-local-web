// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 403; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, _r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.convertInt32ColorToRGBA = function (t) {
        const o = (t >> 16) & 255,
          n = (t >> 8) & 255,
          r = 255 & t,
          c = (((t >> 24) & 255) / 255).toFixed(2);
        return `rgba(${o},${n},${r},${c})`;
      }));
  },
  403,
  [],
);
