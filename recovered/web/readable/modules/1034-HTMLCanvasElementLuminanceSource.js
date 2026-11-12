// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1034; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'HTMLCanvasElementLuminanceSource', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var e,
      n = t(r(_d[0])),
      o = t(r(_d[1])),
      i = t(r(_d[2])),
      s =
        (this && this.__extends) ||
        ((e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              }),
            e(t, n)
          );
        }),
        function (t, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function o() {
            this.constructor = t;
          }
          (e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o())));
        }),
      u = (function (t) {
        function e(n, o, i) {
          void 0 === o && (o = !1);
          var s = t.call(this, n.width, n.height) || this;
          return (
            (s.canvas = n),
            (s.tempCanvasElement = null),
            (s.buffer = e.makeBufferFromCanvasImageData(n, o, i)),
            s
          );
        }
        return (
          s(e, t),
          (e.makeBufferFromCanvasImageData = function (t, n, o) {
            void 0 === n && (n = !1);
            var i = t.getContext('2d').getImageData(0, 0, t.width, t.height);
            return e.toGrayscaleBuffer(i.data, t.width, t.height, n, o);
          }),
          (e.toGrayscaleBuffer = function (t, n, o, i, s) {
            void 0 === i && (i = !1);
            var u = n * o,
              h = s && s.length >= u ? s : new Uint8ClampedArray(u);
            e.FRAME_INDEX = !e.FRAME_INDEX;
            for (
              var c = !e.FRAME_INDEX && i ? 255 : 0, f = 0, p = 0, l = t.length;
              f < l;
              f += 4, p++
            ) {
              var v = void 0;
              if (0 === t[f + 3]) v = 255;
              else
                v = (306 * t[f] + 601 * t[f + 1] + 117 * t[f + 2] + 512) >> 10;
              h[p] = v ^ c;
            }
            return h;
          }),
          (e.prototype.getRow = function (t, e) {
            if (t < 0 || t >= this.getHeight())
              throw new i.default('Requested row is outside the image: ' + t);
            var n = this.getWidth(),
              o = t * n;
            return (
              null === e
                ? (e = this.buffer.slice(o, o + n))
                : (e.length < n && (e = new Uint8ClampedArray(n)),
                  e.set(this.buffer.subarray(o, o + n))),
              e
            );
          }),
          (e.prototype.getMatrix = function () {
            return this.buffer;
          }),
          (e.prototype.isCropSupported = function () {
            return !0;
          }),
          (e.prototype.crop = function (e, n, o, i) {
            return (t.prototype.crop.call(this, e, n, o, i), this);
          }),
          (e.prototype.isRotateSupported = function () {
            return !0;
          }),
          (e.prototype.rotateCounterClockwise = function () {
            return (this.rotate(-90), this);
          }),
          (e.prototype.rotateCounterClockwise45 = function () {
            return (this.rotate(-45), this);
          }),
          (e.prototype.getTempCanvasElement = function () {
            if (null === this.tempCanvasElement) {
              var t = this.canvas.ownerDocument.createElement('canvas');
              ((t.width = this.canvas.width),
                (t.height = this.canvas.height),
                (this.tempCanvasElement = t));
            }
            return this.tempCanvasElement;
          }),
          (e.prototype.rotate = function (t) {
            var n = this.getTempCanvasElement(),
              o = n.getContext('2d'),
              i = t * e.DEGREE_TO_RADIANS,
              s = this.canvas.width,
              u = this.canvas.height,
              h = Math.ceil(
                Math.abs(Math.cos(i)) * s + Math.abs(Math.sin(i)) * u,
              ),
              c = Math.ceil(
                Math.abs(Math.sin(i)) * s + Math.abs(Math.cos(i)) * u,
              );
            return (
              (n.width = h),
              (n.height = c),
              o.translate(h / 2, c / 2),
              o.rotate(i),
              o.drawImage(this.canvas, s / -2, u / -2),
              (this.buffer = e.makeBufferFromCanvasImageData(n)),
              this
            );
          }),
          (e.prototype.invert = function () {
            return new n.default(this);
          }),
          (e.DEGREE_TO_RADIANS = Math.PI / 180),
          (e.FRAME_INDEX = !0),
          e
        );
      })(o.default);
  },
  1034,
  [1035, 1036, 1014],
);
