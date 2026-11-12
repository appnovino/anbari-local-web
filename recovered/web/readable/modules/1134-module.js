// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1134; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }));
    var e = t(r(d[0])),
      i = t(r(d[1])),
      n = t(r(d[2])),
      o = t(r(d[3])),
      l = t(r(d[4])),
      u = t(r(d[5])),
      s = t(r(d[6])),
      f = t(r(d[7])),
      h = t(r(d[8])),
      c = t(r(d[9])),
      p = (function () {
        function t(t) {
          this.image = t;
        }
        return (
          (t.prototype.getImage = function () {
            return this.image;
          }),
          (t.prototype.getResultPointCallback = function () {
            return this.resultPointCallback;
          }),
          (t.prototype.detect = function (t) {
            this.resultPointCallback =
              null == t ? null : t.get(l.default.NEED_RESULT_POINT_CALLBACK);
            var e = new c.default(this.image, this.resultPointCallback).find(t);
            return this.processFinderPatternInfo(e);
          }),
          (t.prototype.processFinderPatternInfo = function (e) {
            var n = e.getTopLeft(),
              o = e.getTopRight(),
              l = e.getBottomLeft(),
              s = this.calculateModuleSize(n, o, l);
            if (s < 1)
              throw new u.default('No pattern found in proccess finder.');
            var h = t.computeDimension(n, o, l, s),
              c = f.default.getProvisionalVersionForDimension(h),
              p = c.getDimensionForVersion() - 7,
              M = null;
            if (c.getAlignmentPatternCenters().length > 0)
              for (
                var k = o.getX() - n.getX() + l.getX(),
                  v = o.getY() - n.getY() + l.getY(),
                  b = 1 - 3 / p,
                  y = Math.floor(n.getX() + b * (k - n.getX())),
                  B = Math.floor(n.getY() + b * (v - n.getY())),
                  W = 4;
                W <= 16;
                W <<= 1
              )
                try {
                  M = this.findAlignmentInRegion(s, y, B, W);
                  break;
                } catch (t) {
                  if (!(t instanceof u.default)) throw t;
                }
            var X,
              Y = t.createTransform(n, o, l, M, h),
              w = t.sampleGrid(this.image, Y, h);
            return (
              (X = null === M ? [l, n, o] : [l, n, o, M]),
              new i.default(w, X)
            );
          }),
          (t.createTransform = function (t, e, i, n, l) {
            var u,
              s,
              f,
              h,
              c = l - 3.5;
            return (
              null !== n
                ? ((u = n.getX()), (s = n.getY()), (h = f = c - 3))
                : ((u = e.getX() - t.getX() + i.getX()),
                  (s = e.getY() - t.getY() + i.getY()),
                  (f = c),
                  (h = c)),
              o.default.quadrilateralToQuadrilateral(
                3.5,
                3.5,
                c,
                3.5,
                f,
                h,
                3.5,
                c,
                t.getX(),
                t.getY(),
                e.getX(),
                e.getY(),
                u,
                s,
                i.getX(),
                i.getY(),
              )
            );
          }),
          (t.sampleGrid = function (t, e, i) {
            return n.default.getInstance().sampleGridWithTransform(t, i, i, e);
          }),
          (t.computeDimension = function (t, i, n, o) {
            var l = e.default.round(s.default.distance(t, i) / o),
              f = e.default.round(s.default.distance(t, n) / o),
              h = Math.floor((l + f) / 2) + 7;
            switch (3 & h) {
              case 0:
                h++;
                break;
              case 2:
                h--;
                break;
              case 3:
                throw new u.default('Dimensions could be not found.');
            }
            return h;
          }),
          (t.prototype.calculateModuleSize = function (t, e, i) {
            return (
              (this.calculateModuleSizeOneWay(t, e) +
                this.calculateModuleSizeOneWay(t, i)) /
              2
            );
          }),
          (t.prototype.calculateModuleSizeOneWay = function (t, e) {
            var i = this.sizeOfBlackWhiteBlackRunBothWays(
                Math.floor(t.getX()),
                Math.floor(t.getY()),
                Math.floor(e.getX()),
                Math.floor(e.getY()),
              ),
              n = this.sizeOfBlackWhiteBlackRunBothWays(
                Math.floor(e.getX()),
                Math.floor(e.getY()),
                Math.floor(t.getX()),
                Math.floor(t.getY()),
              );
            return isNaN(i) ? n / 7 : isNaN(n) ? i / 7 : (i + n) / 14;
          }),
          (t.prototype.sizeOfBlackWhiteBlackRunBothWays = function (
            t,
            e,
            i,
            n,
          ) {
            var o = this.sizeOfBlackWhiteBlackRun(t, e, i, n),
              l = 1,
              u = t - (i - t);
            u < 0
              ? ((l = t / (t - u)), (u = 0))
              : u >= this.image.getWidth() &&
                ((l = (this.image.getWidth() - 1 - t) / (u - t)),
                (u = this.image.getWidth() - 1));
            var s = Math.floor(e - (n - e) * l);
            return (
              (l = 1),
              s < 0
                ? ((l = e / (e - s)), (s = 0))
                : s >= this.image.getHeight() &&
                  ((l = (this.image.getHeight() - 1 - e) / (s - e)),
                  (s = this.image.getHeight() - 1)),
              (u = Math.floor(t + (u - t) * l)),
              (o += this.sizeOfBlackWhiteBlackRun(t, e, u, s)) - 1
            );
          }),
          (t.prototype.sizeOfBlackWhiteBlackRun = function (t, i, n, o) {
            var l = Math.abs(o - i) > Math.abs(n - t);
            if (l) {
              var u = t;
              ((t = i), (i = u), (u = n), (n = o), (o = u));
            }
            for (
              var s = Math.abs(n - t),
                f = Math.abs(o - i),
                h = -s / 2,
                c = t < n ? 1 : -1,
                p = i < o ? 1 : -1,
                M = 0,
                k = n + c,
                v = t,
                b = i;
              v !== k;
              v += c
            ) {
              var y = l ? b : v,
                B = l ? v : b;
              if ((1 === M) === this.image.get(y, B)) {
                if (2 === M) return e.default.distance(v, b, t, i);
                M++;
              }
              if ((h += f) > 0) {
                if (b === o) break;
                ((b += p), (h -= s));
              }
            }
            return 2 === M ? e.default.distance(n + c, o, t, i) : NaN;
          }),
          (t.prototype.findAlignmentInRegion = function (t, e, i, n) {
            var o = Math.floor(n * t),
              l = Math.max(0, e - o),
              s = Math.min(this.image.getWidth() - 1, e + o);
            if (s - l < 3 * t)
              throw new u.default(
                'Alignment top exceeds estimated module size.',
              );
            var f = Math.max(0, i - o),
              c = Math.min(this.image.getHeight() - 1, i + o);
            if (c - f < 3 * t)
              throw new u.default(
                'Alignment bottom exceeds estimated module size.',
              );
            return new h.default(
              this.image,
              l,
              f,
              s - l,
              c - f,
              t,
              this.resultPointCallback,
            ).find();
          }),
          t
        );
      })();
  },
  1134,
  [1053, 1056, 1058, 1061, 1027, 1032, 1052, 1124, 1135, 1137],
);
