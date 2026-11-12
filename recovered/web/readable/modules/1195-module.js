// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1195; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
    var e,
      o = t(r(_d[0])),
      n = t(r(_d[1])),
      h = t(r(_d[2])),
      u = t(r(_d[3])),
      s =
        (this && this.__extends) ||
        ((e = function (t, o) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var o in e)
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              }),
            e(t, o)
          );
        }),
        function (t, o) {
          if ('function' != typeof o && null !== o)
            throw new TypeError(
              'Class extends value ' +
                String(o) +
                ' is not a constructor or null',
            );
          function n() {
            this.constructor = t;
          }
          (e(t, o),
            (t.prototype =
              null === o
                ? Object.create(o)
                : ((n.prototype = o.prototype), new n())));
        }),
      d = (function (t) {
        function e(e, o, n, h, s, d, f, p) {
          var l = t.call(this, d, f) || this;
          if (
            ((l.yuvData = e),
            (l.dataWidth = o),
            (l.dataHeight = n),
            (l.left = h),
            (l.top = s),
            h + d > o || s + f > n)
          )
            throw new u.default(
              'Crop rectangle does not fit within image data.',
            );
          return (p && l.reverseHorizontal(d, f), l);
        }
        return (
          s(e, t),
          (e.prototype.getRow = function (t, e) {
            if (t < 0 || t >= this.getHeight())
              throw new u.default('Requested row is outside the image: ' + t);
            var n = this.getWidth();
            (null == e || e.length < n) && (e = new Uint8ClampedArray(n));
            var h = (t + this.top) * this.dataWidth + this.left;
            return (o.default.arraycopy(this.yuvData, h, e, 0, n), e);
          }),
          (e.prototype.getMatrix = function () {
            var t = this.getWidth(),
              e = this.getHeight();
            if (t === this.dataWidth && e === this.dataHeight)
              return this.yuvData;
            var n = t * e,
              h = new Uint8ClampedArray(n),
              u = this.top * this.dataWidth + this.left;
            if (t === this.dataWidth)
              return (o.default.arraycopy(this.yuvData, u, h, 0, n), h);
            for (var s = 0; s < e; s++) {
              var d = s * t;
              (o.default.arraycopy(this.yuvData, u, h, d, t),
                (u += this.dataWidth));
            }
            return h;
          }),
          (e.prototype.isCropSupported = function () {
            return !0;
          }),
          (e.prototype.crop = function (t, o, n, h) {
            return new e(
              this.yuvData,
              this.dataWidth,
              this.dataHeight,
              this.left + t,
              this.top + o,
              n,
              h,
              !1,
            );
          }),
          (e.prototype.renderThumbnail = function () {
            for (
              var t = this.getWidth() / e.THUMBNAIL_SCALE_FACTOR,
                o = this.getHeight() / e.THUMBNAIL_SCALE_FACTOR,
                n = new Int32Array(t * o),
                h = this.yuvData,
                u = this.top * this.dataWidth + this.left,
                s = 0;
              s < o;
              s++
            ) {
              for (var d = s * t, f = 0; f < t; f++) {
                var p = 255 & h[u + f * e.THUMBNAIL_SCALE_FACTOR];
                n[d + f] = 4278190080 | (65793 * p);
              }
              u += this.dataWidth * e.THUMBNAIL_SCALE_FACTOR;
            }
            return n;
          }),
          (e.prototype.getThumbnailWidth = function () {
            return this.getWidth() / e.THUMBNAIL_SCALE_FACTOR;
          }),
          (e.prototype.getThumbnailHeight = function () {
            return this.getHeight() / e.THUMBNAIL_SCALE_FACTOR;
          }),
          (e.prototype.reverseHorizontal = function (t, e) {
            for (
              var o = this.yuvData,
                n = 0,
                h = this.top * this.dataWidth + this.left;
              n < e;
              n++, h += this.dataWidth
            )
              for (var u = h + t / 2, s = h, d = h + t - 1; s < u; s++, d--) {
                var f = o[s];
                ((o[s] = o[d]), (o[d] = f));
              }
          }),
          (e.prototype.invert = function () {
            return new h.default(this);
          }),
          (e.THUMBNAIL_SCALE_FACTOR = 2),
          e
        );
      })(n.default);
  },
  1195,
  [1020, 1036, 1035, 1014],
);
