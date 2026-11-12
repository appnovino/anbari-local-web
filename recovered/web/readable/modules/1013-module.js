// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1013; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t,
      e = r(d[0]),
      n = (t = e) && t.__esModule ? t : { default: t },
      o = (function () {
        function t(t) {
          if (((this.binarizer = t), null === t))
            throw new n.default('Binarizer must be non-null.');
        }
        return (
          (t.prototype.getWidth = function () {
            return this.binarizer.getWidth();
          }),
          (t.prototype.getHeight = function () {
            return this.binarizer.getHeight();
          }),
          (t.prototype.getBlackRow = function (t, e) {
            return this.binarizer.getBlackRow(t, e);
          }),
          (t.prototype.getBlackMatrix = function () {
            return (
              (null !== this.matrix && void 0 !== this.matrix) ||
                (this.matrix = this.binarizer.getBlackMatrix()),
              this.matrix
            );
          }),
          (t.prototype.isCropSupported = function () {
            return this.binarizer.getLuminanceSource().isCropSupported();
          }),
          (t.prototype.crop = function (e, n, o, u) {
            var c = this.binarizer.getLuminanceSource().crop(e, n, o, u);
            return new t(this.binarizer.createBinarizer(c));
          }),
          (t.prototype.isRotateSupported = function () {
            return this.binarizer.getLuminanceSource().isRotateSupported();
          }),
          (t.prototype.rotateCounterClockwise = function () {
            var e = this.binarizer
              .getLuminanceSource()
              .rotateCounterClockwise();
            return new t(this.binarizer.createBinarizer(e));
          }),
          (t.prototype.rotateCounterClockwise45 = function () {
            var e = this.binarizer
              .getLuminanceSource()
              .rotateCounterClockwise45();
            return new t(this.binarizer.createBinarizer(e));
          }),
          (t.prototype.toString = function () {
            try {
              return this.getBlackMatrix().toString();
            } catch (t) {
              return '';
            }
          }),
          t
        );
      })();
  },
  1013,
  [1014],
);
