// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1036; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var e = t(r(d[0])),
      o = t(r(d[1])),
      n = (function () {
        function t(t, e) {
          ((this.width = t), (this.height = e));
        }
        return (
          (t.prototype.getWidth = function () {
            return this.width;
          }),
          (t.prototype.getHeight = function () {
            return this.height;
          }),
          (t.prototype.isCropSupported = function () {
            return !1;
          }),
          (t.prototype.crop = function (t, e, n, u) {
            throw new o.default(
              'This luminance source does not support cropping.',
            );
          }),
          (t.prototype.isRotateSupported = function () {
            return !1;
          }),
          (t.prototype.rotateCounterClockwise = function () {
            throw new o.default(
              'This luminance source does not support rotation by 90 degrees.',
            );
          }),
          (t.prototype.rotateCounterClockwise45 = function () {
            throw new o.default(
              'This luminance source does not support rotation by 45 degrees.',
            );
          }),
          (t.prototype.toString = function () {
            for (
              var t = new Uint8ClampedArray(this.width),
                o = new e.default(),
                n = 0;
              n < this.height;
              n++
            ) {
              for (var u = this.getRow(n, t), p = 0; p < this.width; p++) {
                var s = 255 & u[p],
                  c = void 0;
                ((c = s < 64 ? '#' : s < 128 ? '+' : s < 192 ? '.' : ' '),
                  o.append(c));
              }
              o.append('\n');
            }
            return o.toString();
          }),
          t
        );
      })();
  },
  1036,
  [1025, 1031],
);
