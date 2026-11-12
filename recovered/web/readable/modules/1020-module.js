// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1020; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
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
        (n.arraycopy = function (n, t, u, o, f) {
          if (n === u && t < o)
            for (o += f - 1, t += f - 1; f--; ) u[o--] = n[t--];
          else for (; f--; ) u[o++] = n[t++];
        }),
        (n.currentTimeMillis = function () {
          return Date.now();
        }),
        n
      );
    })();
  },
  1020,
  [],
);
