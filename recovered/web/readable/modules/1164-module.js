// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1164; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
      function t(t, o, n, u) {
        ((this.columnCount = t),
          (this.errorCorrectionLevel = u),
          (this.rowCountUpperPart = o),
          (this.rowCountLowerPart = n),
          (this.rowCount = o + n));
      }
      return (
        (t.prototype.getColumnCount = function () {
          return this.columnCount;
        }),
        (t.prototype.getErrorCorrectionLevel = function () {
          return this.errorCorrectionLevel;
        }),
        (t.prototype.getRowCount = function () {
          return this.rowCount;
        }),
        (t.prototype.getRowCountUpperPart = function () {
          return this.rowCountUpperPart;
        }),
        (t.prototype.getRowCountLowerPart = function () {
          return this.rowCountLowerPart;
        }),
        t
      );
    })();
  },
  1164,
  [],
);
