// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1061; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    var t = (function () {
      function t(t, i, s, h, n, u, o, l, f) {
        ((this.a11 = t),
          (this.a21 = i),
          (this.a31 = s),
          (this.a12 = h),
          (this.a22 = n),
          (this.a32 = u),
          (this.a13 = o),
          (this.a23 = l),
          (this.a33 = f));
      }
      return (
        (t.quadrilateralToQuadrilateral = function (
          i,
          s,
          h,
          n,
          u,
          o,
          l,
          f,
          c,
          p,
          v,
          q,
          y,
          T,
          b,
          j,
        ) {
          var w = t.quadrilateralToSquare(i, s, h, n, u, o, l, f);
          return t.squareToQuadrilateral(c, p, v, q, y, T, b, j).times(w);
        }),
        (t.prototype.transformPoints = function (t) {
          for (
            var i = t.length,
              s = this.a11,
              h = this.a12,
              n = this.a13,
              u = this.a21,
              o = this.a22,
              l = this.a23,
              f = this.a31,
              c = this.a32,
              p = this.a33,
              v = 0;
            v < i;
            v += 2
          ) {
            var q = t[v],
              y = t[v + 1],
              T = n * q + l * y + p;
            ((t[v] = (s * q + u * y + f) / T),
              (t[v + 1] = (h * q + o * y + c) / T));
          }
        }),
        (t.prototype.transformPointsWithValues = function (t, i) {
          for (
            var s = this.a11,
              h = this.a12,
              n = this.a13,
              u = this.a21,
              o = this.a22,
              l = this.a23,
              f = this.a31,
              c = this.a32,
              p = this.a33,
              v = t.length,
              q = 0;
            q < v;
            q++
          ) {
            var y = t[q],
              T = i[q],
              b = n * y + l * T + p;
            ((t[q] = (s * y + u * T + f) / b),
              (i[q] = (h * y + o * T + c) / b));
          }
        }),
        (t.squareToQuadrilateral = function (i, s, h, n, u, o, l, f) {
          var c = i - h + u - l,
            p = s - n + o - f;
          if (0 === c && 0 === p)
            return new t(h - i, u - h, i, n - s, o - n, s, 0, 0, 1);
          var v = h - u,
            q = l - u,
            y = n - o,
            T = f - o,
            b = v * T - q * y,
            j = (c * T - q * p) / b,
            w = (v * p - c * y) / b;
          return new t(
            h - i + j * h,
            l - i + w * l,
            i,
            n - s + j * n,
            f - s + w * f,
            s,
            j,
            w,
            1,
          );
        }),
        (t.quadrilateralToSquare = function (i, s, h, n, u, o, l, f) {
          return t.squareToQuadrilateral(i, s, h, n, u, o, l, f).buildAdjoint();
        }),
        (t.prototype.buildAdjoint = function () {
          return new t(
            this.a22 * this.a33 - this.a23 * this.a32,
            this.a23 * this.a31 - this.a21 * this.a33,
            this.a21 * this.a32 - this.a22 * this.a31,
            this.a13 * this.a32 - this.a12 * this.a33,
            this.a11 * this.a33 - this.a13 * this.a31,
            this.a12 * this.a31 - this.a11 * this.a32,
            this.a12 * this.a23 - this.a13 * this.a22,
            this.a13 * this.a21 - this.a11 * this.a23,
            this.a11 * this.a22 - this.a12 * this.a21,
          );
        }),
        (t.prototype.times = function (i) {
          return new t(
            this.a11 * i.a11 + this.a21 * i.a12 + this.a31 * i.a13,
            this.a11 * i.a21 + this.a21 * i.a22 + this.a31 * i.a23,
            this.a11 * i.a31 + this.a21 * i.a32 + this.a31 * i.a33,
            this.a12 * i.a11 + this.a22 * i.a12 + this.a32 * i.a13,
            this.a12 * i.a21 + this.a22 * i.a22 + this.a32 * i.a23,
            this.a12 * i.a31 + this.a22 * i.a32 + this.a32 * i.a33,
            this.a13 * i.a11 + this.a23 * i.a12 + this.a33 * i.a13,
            this.a13 * i.a21 + this.a23 * i.a22 + this.a33 * i.a23,
            this.a13 * i.a31 + this.a23 * i.a32 + this.a33 * i.a33,
          );
        }),
        t
      );
    })();
  },
  1061,
  [],
);
