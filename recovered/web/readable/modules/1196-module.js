// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1196; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }));
    var e,
      r = t(_r(_d[0])),
      n = t(_r(_d[1])),
      o = t(_r(_d[2])),
      u = t(_r(_d[3])),
      s =
        (this && this.__extends) ||
        ((e = function (t, r) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              }),
            e(t, r)
          );
        }),
        function (t, r) {
          if ('function' != typeof r && null !== r)
            throw new TypeError(
              'Class extends value ' +
                String(r) +
                ' is not a constructor or null',
            );
          function n() {
            this.constructor = t;
          }
          (e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n())));
        }),
      h = (function (t) {
        function e(e, r, n, o, s, h, d) {
          var f = t.call(this, r, n) || this;
          if (
            ((f.dataWidth = o),
            (f.dataHeight = s),
            (f.left = h),
            (f.top = d),
            4 === e.BYTES_PER_ELEMENT)
          ) {
            for (
              var l = r * n, p = new Uint8ClampedArray(l), c = 0;
              c < l;
              c++
            ) {
              var y = e[c],
                v = (y >> 16) & 255,
                _ = (y >> 7) & 510,
                w = 255 & y;
              p[c] = ((v + _ + w) / 4) & 255;
            }
            f.luminances = p;
          } else f.luminances = e;
          if (
            (void 0 === o && (f.dataWidth = r),
            void 0 === s && (f.dataHeight = n),
            void 0 === h && (f.left = 0),
            void 0 === d && (f.top = 0),
            f.left + r > f.dataWidth || f.top + n > f.dataHeight)
          )
            throw new u.default(
              'Crop rectangle does not fit within image data.',
            );
          return f;
        }
        return (
          s(e, t),
          (e.prototype.getRow = function (t, e) {
            if (t < 0 || t >= this.getHeight())
              throw new u.default('Requested row is outside the image: ' + t);
            var r = this.getWidth();
            (null == e || e.length < r) && (e = new Uint8ClampedArray(r));
            var n = (t + this.top) * this.dataWidth + this.left;
            return (o.default.arraycopy(this.luminances, n, e, 0, r), e);
          }),
          (e.prototype.getMatrix = function () {
            var t = this.getWidth(),
              e = this.getHeight();
            if (t === this.dataWidth && e === this.dataHeight)
              return this.luminances;
            var r = t * e,
              n = new Uint8ClampedArray(r),
              u = this.top * this.dataWidth + this.left;
            if (t === this.dataWidth)
              return (o.default.arraycopy(this.luminances, u, n, 0, r), n);
            for (var s = 0; s < e; s++) {
              var h = s * t;
              (o.default.arraycopy(this.luminances, u, n, h, t),
                (u += this.dataWidth));
            }
            return n;
          }),
          (e.prototype.isCropSupported = function () {
            return !0;
          }),
          (e.prototype.crop = function (t, r, n, o) {
            return new e(
              this.luminances,
              n,
              o,
              this.dataWidth,
              this.dataHeight,
              this.left + t,
              this.top + r,
            );
          }),
          (e.prototype.invert = function () {
            return new r.default(this);
          }),
          e
        );
      })(n.default);
  },
  1196,
  [1035, 1036, 1020, 1014],
);
