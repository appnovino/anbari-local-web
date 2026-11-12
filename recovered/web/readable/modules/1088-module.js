// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1088; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
      function t(t, n) {
        ((this.decodedInformation = t || null), (this.finished = !!n));
      }
      return (
        (t.prototype.getDecodedInformation = function () {
          return this.decodedInformation;
        }),
        (t.prototype.isFinished = function () {
          return this.finished;
        }),
        t
      );
    })();
  },
  1088,
  [],
);
