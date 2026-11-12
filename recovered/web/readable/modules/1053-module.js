// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1053; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var n = (function () {
      function n() {}
      return (
        (n.round = function (n) {
          return isNaN(n)
            ? 0
            : n <= Number.MIN_SAFE_INTEGER
              ? Number.MIN_SAFE_INTEGER
              : n >= Number.MAX_SAFE_INTEGER
                ? Number.MAX_SAFE_INTEGER
                : (n + (n < 0 ? -0.5 : 0.5)) | 0;
        }),
        (n.distance = function (n, t, u, i) {
          var o = n - u,
            E = t - i;
          return Math.sqrt(o * o + E * E);
        }),
        (n.sum = function (n) {
          for (var t = 0, u = 0, i = n.length; u !== i; u++) {
            t += n[u];
          }
          return t;
        }),
        n
      );
    })();
  },
  1053,
  [],
);
