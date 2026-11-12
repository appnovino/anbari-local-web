// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1190; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
        ((this.dataBytes = t), (this.errorCorrectionBytes = n));
      }
      return (
        (t.prototype.getDataBytes = function () {
          return this.dataBytes;
        }),
        (t.prototype.getErrorCorrectionBytes = function () {
          return this.errorCorrectionBytes;
        }),
        t
      );
    })();
  },
  1190,
  [],
);
