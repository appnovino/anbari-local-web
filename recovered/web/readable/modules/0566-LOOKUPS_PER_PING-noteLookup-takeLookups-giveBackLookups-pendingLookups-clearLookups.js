// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 566; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'LOOKUPS_PER_PING', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.noteLookup = function () {
        t < 1e5 && (t += 1);
      }),
      (e.takeLookups = function () {
        const o = Math.min(t, n);
        return ((t -= o), o);
      }),
      (e.giveBackLookups = function (n) {
        n > 0 && (t = Math.min(1e5, t + n));
      }),
      (e.pendingLookups = function () {
        return t;
      }),
      (e.clearLookups = function () {
        t = 0;
      }));
    const n = 500;
    let t = 0;
  },
  566,
  [],
);
