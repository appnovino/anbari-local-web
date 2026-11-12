// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1187; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
        function t() {
          this.maskPattern = -1;
        }
        return (
          (t.prototype.getMode = function () {
            return this.mode;
          }),
          (t.prototype.getECLevel = function () {
            return this.ecLevel;
          }),
          (t.prototype.getVersion = function () {
            return this.version;
          }),
          (t.prototype.getMaskPattern = function () {
            return this.maskPattern;
          }),
          (t.prototype.getMatrix = function () {
            return this.matrix;
          }),
          (t.prototype.toString = function () {
            var t = new n.default();
            return (
              t.append('<<\n'),
              t.append(' mode: '),
              t.append(this.mode ? this.mode.toString() : 'null'),
              t.append('\n ecLevel: '),
              t.append(this.ecLevel ? this.ecLevel.toString() : 'null'),
              t.append('\n version: '),
              t.append(this.version ? this.version.toString() : 'null'),
              t.append('\n maskPattern: '),
              t.append(this.maskPattern.toString()),
              this.matrix
                ? (t.append('\n matrix:\n'), t.append(this.matrix.toString()))
                : t.append('\n matrix: null\n'),
              t.append('>>\n'),
              t.toString()
            );
          }),
          (t.prototype.setMode = function (t) {
            this.mode = t;
          }),
          (t.prototype.setECLevel = function (t) {
            this.ecLevel = t;
          }),
          (t.prototype.setVersion = function (t) {
            this.version = t;
          }),
          (t.prototype.setMaskPattern = function (t) {
            this.maskPattern = t;
          }),
          (t.prototype.setMatrix = function (t) {
            this.matrix = t;
          }),
          (t.isValidMaskPattern = function (e) {
            return e >= 0 && e < t.NUM_MASK_PATTERNS;
          }),
          (t.NUM_MASK_PATTERNS = 8),
          t
        );
      })();
  },
  1187,
  [1025],
);
