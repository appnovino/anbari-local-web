// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1133; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    var t = (function () {
      function t(t) {
        this.mirrored = t;
      }
      return (
        (t.prototype.isMirrored = function () {
          return this.mirrored;
        }),
        (t.prototype.applyMirroredCorrection = function (t) {
          if (this.mirrored && null !== t && !(t.length < 3)) {
            var n = t[0];
            ((t[0] = t[2]), (t[2] = n));
          }
        }),
        t
      );
    })();
  },
  1133,
  [],
);
