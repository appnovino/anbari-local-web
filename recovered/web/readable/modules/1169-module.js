// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1169; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
      function t(u, n, o, s) {
        ((this.rowNumber = t.BARCODE_ROW_UNKNOWN),
          (this.startX = Math.trunc(u)),
          (this.endX = Math.trunc(n)),
          (this.bucket = Math.trunc(o)),
          (this.value = Math.trunc(s)));
      }
      return (
        (t.prototype.hasValidRowNumber = function () {
          return this.isValidRowNumber(this.rowNumber);
        }),
        (t.prototype.isValidRowNumber = function (u) {
          return u !== t.BARCODE_ROW_UNKNOWN && this.bucket === (u % 3) * 3;
        }),
        (t.prototype.setRowNumberAsRowIndicatorColumn = function () {
          this.rowNumber = Math.trunc(
            3 * Math.trunc(this.value / 30) + Math.trunc(this.bucket / 3),
          );
        }),
        (t.prototype.getWidth = function () {
          return this.endX - this.startX;
        }),
        (t.prototype.getStartX = function () {
          return this.startX;
        }),
        (t.prototype.getEndX = function () {
          return this.endX;
        }),
        (t.prototype.getBucket = function () {
          return this.bucket;
        }),
        (t.prototype.getValue = function () {
          return this.value;
        }),
        (t.prototype.getRowNumber = function () {
          return this.rowNumber;
        }),
        (t.prototype.setRowNumber = function (t) {
          this.rowNumber = t;
        }),
        (t.prototype.toString = function () {
          return this.rowNumber + '|' + this.value;
        }),
        (t.BARCODE_ROW_UNKNOWN = -1),
        t
      );
    })();
  },
  1169,
  [],
);
