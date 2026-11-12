// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1230; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'HTMLCanvasElementLuminanceSource', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t,
      e = r(_d[0]),
      n =
        (this && this.__extends) ||
        ((t = function (e, n) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              }),
            t(e, n)
          );
        }),
        function (e, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function o() {
            this.constructor = e;
          }
          (t(e, n),
            (e.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o())));
        }),
      o = (function (t) {
        function o(e) {
          var n = t.call(this, e.width, e.height) || this;
          return (
            (n.canvas = e),
            (n.buffer = o.makeBufferFromCanvasImageData(e)),
            n
          );
        }
        return (
          n(o, t),
          (o.makeBufferFromCanvasImageData = function (t) {
            var e;
            try {
              e = t.getContext('2d', { willReadFrequently: !0 });
            } catch (n) {
              e = t.getContext('2d');
            }
            if (!e) throw new Error("Couldn't get canvas context.");
            var n = e.getImageData(0, 0, t.width, t.height);
            return o.toGrayscaleBuffer(n.data, t.width, t.height);
          }),
          (o.toGrayscaleBuffer = function (t, e, n) {
            for (
              var o = new Uint8ClampedArray(e * n), i = 0, s = 0, u = t.length;
              i < u;
              i += 4, s++
            ) {
              var h = void 0;
              if (0 === t[i + 3]) h = 255;
              else
                h = (306 * t[i] + 601 * t[i + 1] + 117 * t[i + 2] + 512) >> 10;
              o[s] = h;
            }
            return o;
          }),
          (o.prototype.getRow = function (t, n) {
            if (t < 0 || t >= this.getHeight())
              throw new e.IllegalArgumentException(
                'Requested row is outside the image: ' + t,
              );
            var o = this.getWidth(),
              i = t * o;
            return (
              null === n
                ? (n = this.buffer.slice(i, i + o))
                : (n.length < o && (n = new Uint8ClampedArray(o)),
                  n.set(this.buffer.slice(i, i + o))),
              n
            );
          }),
          (o.prototype.getMatrix = function () {
            return this.buffer;
          }),
          (o.prototype.isCropSupported = function () {
            return !0;
          }),
          (o.prototype.crop = function (e, n, o, i) {
            return (t.prototype.crop.call(this, e, n, o, i), this);
          }),
          (o.prototype.isRotateSupported = function () {
            return !0;
          }),
          (o.prototype.rotateCounterClockwise = function () {
            return (this.rotate(-90), this);
          }),
          (o.prototype.rotateCounterClockwise45 = function () {
            return (this.rotate(-45), this);
          }),
          (o.prototype.invert = function () {
            return new e.InvertedLuminanceSource(this);
          }),
          (o.prototype.getTempCanvasElement = function () {
            if (null === this.tempCanvasElement) {
              var t = this.canvas.ownerDocument.createElement('canvas');
              ((t.width = this.canvas.width),
                (t.height = this.canvas.height),
                (this.tempCanvasElement = t));
            }
            return this.tempCanvasElement;
          }),
          (o.prototype.rotate = function (t) {
            var e = this.getTempCanvasElement();
            if (!e) throw new Error('Could not create a Canvas element.');
            var n = t * o.DEGREE_TO_RADIANS,
              i = this.canvas.width,
              s = this.canvas.height,
              u = Math.ceil(
                Math.abs(Math.cos(n)) * i + Math.abs(Math.sin(n)) * s,
              ),
              h = Math.ceil(
                Math.abs(Math.sin(n)) * i + Math.abs(Math.cos(n)) * s,
              );
            ((e.width = u), (e.height = h));
            var c = e.getContext('2d');
            if (!c)
              throw new Error('Could not create a Canvas Context element.');
            return (
              c.translate(u / 2, h / 2),
              c.rotate(n),
              c.drawImage(this.canvas, i / -2, s / -2),
              (this.buffer = o.makeBufferFromCanvasImageData(e)),
              this
            );
          }),
          (o.DEGREE_TO_RADIANS = Math.PI / 180),
          o
        );
      })(e.LuminanceSource);
  },
  1230,
  [1006],
);
