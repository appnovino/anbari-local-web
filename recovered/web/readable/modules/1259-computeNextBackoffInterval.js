// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1259; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.computeNextBackoffInterval = function (
        t,
        n,
        {
          multiplier: o = 1.5,
          randomizationFactor: c = 0.25,
          minBackoff: f = t,
          maxBackoff: u = 1 / 0,
        } = {},
      ) {
        t <= 0 && (t = 1);
        n < 0 && (n = 0);
        o < 1 && (o = 1);
        (c < 0 || c > 1) && (c = 0);
        const l = t * o ** n,
          s = 1 - c + 2 * c * Math.random();
        return Math.min(Math.max(l * s, f), u);
      }));
  },
  1259,
  [],
);
