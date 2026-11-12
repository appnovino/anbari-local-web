// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1016; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return f;
        },
      }));
    var e,
      n = t(r(_d[0])),
      o = t(r(_d[1])),
      u = t(r(_d[2])),
      c = t(r(_d[3])),
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
      f = (function (t) {
        function e(n) {
          var o = t.call(this, n) || this;
          return (
            (o.luminances = e.EMPTY),
            (o.buckets = new Int32Array(e.LUMINANCE_BUCKETS)),
            o
          );
        }
        return (
          s(e, t),
          (e.prototype.getBlackRow = function (t, n) {
            var u = this.getLuminanceSource(),
              c = u.getWidth();
            (null == n || n.getSize() < c ? (n = new o.default(c)) : n.clear(),
              this.initArrays(c));
            for (
              var s = u.getRow(t, this.luminances), f = this.buckets, l = 0;
              l < c;
              l++
            )
              f[(255 & s[l]) >> e.LUMINANCE_SHIFT]++;
            var h = e.estimateBlackPoint(f);
            if (c < 3) for (l = 0; l < c; l++) (255 & s[l]) < h && n.set(l);
            else {
              var p = 255 & s[0],
                _ = 255 & s[1];
              for (l = 1; l < c - 1; l++) {
                var v = 255 & s[l + 1];
                ((4 * _ - p - v) / 2 < h && n.set(l), (p = _), (_ = v));
              }
            }
            return n;
          }),
          (e.prototype.getBlackMatrix = function () {
            var t = this.getLuminanceSource(),
              n = t.getWidth(),
              o = t.getHeight(),
              c = new u.default(n, o);
            this.initArrays(n);
            for (var s = this.buckets, f = 1; f < 5; f++)
              for (
                var l = Math.floor((o * f) / 5),
                  h = t.getRow(l, this.luminances),
                  p = Math.floor((4 * n) / 5),
                  _ = Math.floor(n / 5);
                _ < p;
                _++
              ) {
                s[(255 & h[_]) >> e.LUMINANCE_SHIFT]++;
              }
            var v = e.estimateBlackPoint(s),
              y = t.getMatrix();
            for (f = 0; f < o; f++) {
              var M = f * n;
              for (_ = 0; _ < n; _++) {
                (255 & y[M + _]) < v && c.set(_, f);
              }
            }
            return c;
          }),
          (e.prototype.createBinarizer = function (t) {
            return new e(t);
          }),
          (e.prototype.initArrays = function (t) {
            (this.luminances.length < t &&
              (this.luminances = new Uint8ClampedArray(t)),
              this.buckets.fill(0));
          }),
          (e.estimateBlackPoint = function (t) {
            for (var n = t.length, o = 0, u = 0, s = 0, f = 0; f < n; f++)
              (t[f] > s && ((u = f), (s = t[f])), t[f] > o && (o = t[f]));
            var l = 0,
              h = 0;
            for (f = 0; f < n; f++) {
              var p = f - u;
              (M = t[f] * p * p) > h && ((l = f), (h = M));
            }
            if (u > l) {
              var _ = u;
              ((u = l), (l = _));
            }
            if (l - u <= n / 16) throw new c.default();
            var v = l - 1,
              y = -1;
            for (f = l - 1; f > u; f--) {
              var M,
                N = f - u;
              (M = N * N * (l - f) * (o - t[f])) > y && ((v = f), (y = M));
            }
            return v << e.LUMINANCE_SHIFT;
          }),
          (e.LUMINANCE_BITS = 5),
          (e.LUMINANCE_SHIFT = 8 - e.LUMINANCE_BITS),
          (e.LUMINANCE_BUCKETS = 1 << e.LUMINANCE_BITS),
          (e.EMPTY = Uint8ClampedArray.from([0])),
          e
        );
      })(n.default);
  },
  1016,
  [1017, 1018, 1024, 1032],
);
