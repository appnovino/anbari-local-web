// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1113; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var t = e(r(d[0])),
      i = e(r(d[1])),
      o = e(r(d[2])),
      s = e(r(d[3])),
      n = (function () {
        function e(i) {
          var s = i.getHeight();
          if (s < 8 || s > 144 || 1 & s) throw new o.default();
          ((this.version = e.readVersion(i)),
            (this.mappingBitMatrix = this.extractDataRegion(i)),
            (this.readMappingMatrix = new t.default(
              this.mappingBitMatrix.getWidth(),
              this.mappingBitMatrix.getHeight(),
            )));
        }
        return (
          (e.prototype.getVersion = function () {
            return this.version;
          }),
          (e.readVersion = function (e) {
            var t = e.getHeight(),
              o = e.getWidth();
            return i.default.getVersionForDimensions(t, o);
          }),
          (e.prototype.readCodewords = function () {
            var e = new Int8Array(this.version.getTotalCodewords()),
              t = 0,
              i = 4,
              s = 0,
              n = this.mappingBitMatrix.getHeight(),
              u = this.mappingBitMatrix.getWidth(),
              h = !1,
              l = !1,
              M = !1,
              p = !1;
            do {
              if (i !== n || 0 !== s || h)
                if (i === n - 2 && 0 === s && 3 & u && !l)
                  ((e[t++] = 255 & this.readCorner2(n, u)),
                    (i -= 2),
                    (s += 2),
                    (l = !0));
                else if (i !== n + 4 || 2 !== s || 7 & u || M)
                  if (i !== n - 2 || 0 !== s || 4 != (7 & u) || p) {
                    do {
                      (i < n &&
                        s >= 0 &&
                        !this.readMappingMatrix.get(s, i) &&
                        (e[t++] = 255 & this.readUtah(i, s, n, u)),
                        (i -= 2),
                        (s += 2));
                    } while (i >= 0 && s < u);
                    ((i += 1), (s += 3));
                    do {
                      (i >= 0 &&
                        s < u &&
                        !this.readMappingMatrix.get(s, i) &&
                        (e[t++] = 255 & this.readUtah(i, s, n, u)),
                        (i += 2),
                        (s -= 2));
                    } while (i < n && s >= 0);
                    ((i += 3), (s += 1));
                  } else
                    ((e[t++] = 255 & this.readCorner4(n, u)),
                      (i -= 2),
                      (s += 2),
                      (p = !0));
                else
                  ((e[t++] = 255 & this.readCorner3(n, u)),
                    (i -= 2),
                    (s += 2),
                    (M = !0));
              else
                ((e[t++] = 255 & this.readCorner1(n, u)),
                  (i -= 2),
                  (s += 2),
                  (h = !0));
            } while (i < n || s < u);
            if (t !== this.version.getTotalCodewords()) throw new o.default();
            return e;
          }),
          (e.prototype.readModule = function (e, t, i, o) {
            return (
              e < 0 && ((e += i), (t += 4 - ((i + 4) & 7))),
              t < 0 && ((t += o), (e += 4 - ((o + 4) & 7))),
              this.readMappingMatrix.set(t, e),
              this.mappingBitMatrix.get(t, e)
            );
          }),
          (e.prototype.readUtah = function (e, t, i, o) {
            var s = 0;
            return (
              this.readModule(e - 2, t - 2, i, o) && (s |= 1),
              (s <<= 1),
              this.readModule(e - 2, t - 1, i, o) && (s |= 1),
              (s <<= 1),
              this.readModule(e - 1, t - 2, i, o) && (s |= 1),
              (s <<= 1),
              this.readModule(e - 1, t - 1, i, o) && (s |= 1),
              (s <<= 1),
              this.readModule(e - 1, t, i, o) && (s |= 1),
              (s <<= 1),
              this.readModule(e, t - 2, i, o) && (s |= 1),
              (s <<= 1),
              this.readModule(e, t - 1, i, o) && (s |= 1),
              (s <<= 1),
              this.readModule(e, t, i, o) && (s |= 1),
              s
            );
          }),
          (e.prototype.readCorner1 = function (e, t) {
            var i = 0;
            return (
              this.readModule(e - 1, 0, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(e - 1, 1, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(e - 1, 2, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(0, t - 2, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(0, t - 1, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(1, t - 1, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(2, t - 1, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(3, t - 1, e, t) && (i |= 1),
              i
            );
          }),
          (e.prototype.readCorner2 = function (e, t) {
            var i = 0;
            return (
              this.readModule(e - 3, 0, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(e - 2, 0, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(e - 1, 0, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(0, t - 4, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(0, t - 3, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(0, t - 2, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(0, t - 1, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(1, t - 1, e, t) && (i |= 1),
              i
            );
          }),
          (e.prototype.readCorner3 = function (e, t) {
            var i = 0;
            return (
              this.readModule(e - 1, 0, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(e - 1, t - 1, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(0, t - 3, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(0, t - 2, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(0, t - 1, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(1, t - 3, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(1, t - 2, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(1, t - 1, e, t) && (i |= 1),
              i
            );
          }),
          (e.prototype.readCorner4 = function (e, t) {
            var i = 0;
            return (
              this.readModule(e - 3, 0, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(e - 2, 0, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(e - 1, 0, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(0, t - 2, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(0, t - 1, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(1, t - 1, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(2, t - 1, e, t) && (i |= 1),
              (i <<= 1),
              this.readModule(3, t - 1, e, t) && (i |= 1),
              i
            );
          }),
          (e.prototype.extractDataRegion = function (e) {
            var i = this.version.getSymbolSizeRows(),
              o = this.version.getSymbolSizeColumns();
            if (e.getHeight() !== i)
              throw new s.default(
                'Dimension of bitMatrix must match the version size',
              );
            for (
              var n = this.version.getDataRegionSizeRows(),
                u = this.version.getDataRegionSizeColumns(),
                h = (i / n) | 0,
                l = (o / u) | 0,
                M = h * n,
                p = l * u,
                f = new t.default(p, M),
                v = 0;
              v < h;
              ++v
            )
              for (var c = v * n, w = 0; w < l; ++w)
                for (var y = w * u, x = 0; x < n; ++x)
                  for (
                    var C = v * (n + 2) + 1 + x, b = c + x, B = 0;
                    B < u;
                    ++B
                  ) {
                    var D = w * (u + 2) + 1 + B;
                    if (e.get(D, C)) {
                      var R = y + B;
                      f.set(R, b);
                    }
                  }
            return f;
          }),
          e
        );
      })();
  },
  1113,
  [1024, 1114, 1029, 1014],
);
