// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1051; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(_e, 'Point', {
        enumerable: !0,
        get: function () {
          return d;
        },
      }));
    var e = t(r(_d[0])),
      i = t(r(_d[1])),
      n = t(r(_d[2])),
      s = t(r(_d[3])),
      a = t(r(_d[4])),
      o = t(r(_d[5])),
      u = t(r(_d[6])),
      h = t(r(_d[7])),
      f = t(r(_d[8])),
      d = (function () {
        function t(t, e) {
          ((this.x = t), (this.y = e));
        }
        return (
          (t.prototype.toResultPoint = function () {
            return new e.default(this.getX(), this.getY());
          }),
          (t.prototype.getX = function () {
            return this.x;
          }),
          (t.prototype.getY = function () {
            return this.y;
          }),
          t
        );
      })(),
      l = (function () {
        function t(t) {
          ((this.EXPECTED_CORNER_BITS = new Int32Array([
            3808, 476, 2107, 1799,
          ])),
            (this.image = t));
        }
        return (
          (t.prototype.detect = function () {
            return this.detectMirror(!1);
          }),
          (t.prototype.detectMirror = function (t) {
            var e = this.getMatrixCenter(),
              n = this.getBullsEyeCorners(e);
            if (t) {
              var s = n[0];
              ((n[0] = n[2]), (n[2] = s));
            }
            this.extractParameters(n);
            var a = this.sampleGrid(
                this.image,
                n[this.shift % 4],
                n[(this.shift + 1) % 4],
                n[(this.shift + 2) % 4],
                n[(this.shift + 3) % 4],
              ),
              o = this.getMatrixCornerPoints(n);
            return new i.default(
              a,
              o,
              this.compact,
              this.nbDataBlocks,
              this.nbLayers,
            );
          }),
          (t.prototype.extractParameters = function (t) {
            if (
              !(
                this.isValidPoint(t[0]) &&
                this.isValidPoint(t[1]) &&
                this.isValidPoint(t[2]) &&
                this.isValidPoint(t[3])
              )
            )
              throw new u.default();
            var e = 2 * this.nbCenterLayers,
              i = new Int32Array([
                this.sampleLine(t[0], t[1], e),
                this.sampleLine(t[1], t[2], e),
                this.sampleLine(t[2], t[3], e),
                this.sampleLine(t[3], t[0], e),
              ]);
            this.shift = this.getRotation(i, e);
            for (var n = 0, s = 0; s < 4; s++) {
              var a = i[(this.shift + s) % 4];
              this.compact
                ? ((n <<= 7), (n += (a >> 1) & 127))
                : ((n <<= 10), (n += ((a >> 2) & 992) + ((a >> 1) & 31)));
            }
            var o = this.getCorrectedParameterData(n, this.compact);
            this.compact
              ? ((this.nbLayers = 1 + (o >> 6)),
                (this.nbDataBlocks = 1 + (63 & o)))
              : ((this.nbLayers = 1 + (o >> 11)),
                (this.nbDataBlocks = 1 + (2047 & o)));
          }),
          (t.prototype.getRotation = function (t, e) {
            var i = 0;
            (t.forEach(function (t, n, s) {
              i = (i << 3) + (((t >> (e - 2)) << 1) + (1 & t));
            }),
              (i = ((1 & i) << 11) + (i >> 1)));
            for (var n = 0; n < 4; n++)
              if (f.default.bitCount(i ^ this.EXPECTED_CORNER_BITS[n]) <= 2)
                return n;
            throw new u.default();
          }),
          (t.prototype.getCorrectedParameterData = function (t, e) {
            var i, n;
            e ? ((i = 7), (n = 2)) : ((i = 10), (n = 4));
            for (var s = i - n, h = new Int32Array(i), f = i - 1; f >= 0; --f)
              ((h[f] = 15 & t), (t >>= 4));
            try {
              new o.default(a.default.AZTEC_PARAM).decode(h, s);
            } catch (t) {
              throw new u.default();
            }
            var d = 0;
            for (f = 0; f < n; f++) d = (d << 4) + h[f];
            return d;
          }),
          (t.prototype.getBullsEyeCorners = function (t) {
            var i = t,
              n = t,
              s = t,
              a = t,
              o = !0;
            for (
              this.nbCenterLayers = 1;
              this.nbCenterLayers < 9;
              this.nbCenterLayers++
            ) {
              var h = this.getFirstDifferent(i, o, 1, -1),
                f = this.getFirstDifferent(n, o, 1, 1),
                d = this.getFirstDifferent(s, o, -1, 1),
                l = this.getFirstDifferent(a, o, -1, -1);
              if (this.nbCenterLayers > 2) {
                var c =
                  (this.distancePoint(l, h) * this.nbCenterLayers) /
                  (this.distancePoint(a, i) * (this.nbCenterLayers + 2));
                if (
                  c < 0.75 ||
                  c > 1.25 ||
                  !this.isWhiteOrBlackRectangle(h, f, d, l)
                )
                  break;
              }
              ((i = h), (n = f), (s = d), (a = l), (o = !o));
            }
            if (5 !== this.nbCenterLayers && 7 !== this.nbCenterLayers)
              throw new u.default();
            this.compact = 5 === this.nbCenterLayers;
            var p = new e.default(i.getX() + 0.5, i.getY() - 0.5),
              y = new e.default(n.getX() + 0.5, n.getY() + 0.5),
              X = new e.default(s.getX() - 0.5, s.getY() + 0.5),
              Y = new e.default(a.getX() - 0.5, a.getY() - 0.5);
            return this.expandSquare(
              [p, y, X, Y],
              2 * this.nbCenterLayers - 3,
              2 * this.nbCenterLayers,
            );
          }),
          (t.prototype.getMatrixCenter = function () {
            var t, e, i, a;
            try {
              ((t = (l = new s.default(this.image).detect())[0]),
                (e = l[1]),
                (i = l[2]),
                (a = l[3]));
            } catch (n) {
              var o = this.image.getWidth() / 2,
                u = this.image.getHeight() / 2;
              ((t = this.getFirstDifferent(
                new d(o + 7, u - 7),
                !1,
                1,
                -1,
              ).toResultPoint()),
                (e = this.getFirstDifferent(
                  new d(o + 7, u + 7),
                  !1,
                  1,
                  1,
                ).toResultPoint()),
                (i = this.getFirstDifferent(
                  new d(o - 7, u + 7),
                  !1,
                  -1,
                  1,
                ).toResultPoint()),
                (a = this.getFirstDifferent(
                  new d(o - 7, u - 7),
                  !1,
                  -1,
                  -1,
                ).toResultPoint()));
            }
            var h = n.default.round(
                (t.getX() + a.getX() + e.getX() + i.getX()) / 4,
              ),
              f = n.default.round(
                (t.getY() + a.getY() + e.getY() + i.getY()) / 4,
              );
            try {
              var l;
              ((t = (l = new s.default(this.image, 15, h, f).detect())[0]),
                (e = l[1]),
                (i = l[2]),
                (a = l[3]));
            } catch (n) {
              ((t = this.getFirstDifferent(
                new d(h + 7, f - 7),
                !1,
                1,
                -1,
              ).toResultPoint()),
                (e = this.getFirstDifferent(
                  new d(h + 7, f + 7),
                  !1,
                  1,
                  1,
                ).toResultPoint()),
                (i = this.getFirstDifferent(
                  new d(h - 7, f + 7),
                  !1,
                  -1,
                  1,
                ).toResultPoint()),
                (a = this.getFirstDifferent(
                  new d(h - 7, f - 7),
                  !1,
                  -1,
                  -1,
                ).toResultPoint()));
            }
            return (
              (h = n.default.round(
                (t.getX() + a.getX() + e.getX() + i.getX()) / 4,
              )),
              (f = n.default.round(
                (t.getY() + a.getY() + e.getY() + i.getY()) / 4,
              )),
              new d(h, f)
            );
          }),
          (t.prototype.getMatrixCornerPoints = function (t) {
            return this.expandSquare(
              t,
              2 * this.nbCenterLayers,
              this.getDimension(),
            );
          }),
          (t.prototype.sampleGrid = function (t, e, i, n, s) {
            var a = h.default.getInstance(),
              o = this.getDimension(),
              u = o / 2 - this.nbCenterLayers,
              f = o / 2 + this.nbCenterLayers;
            return a.sampleGrid(
              t,
              o,
              o,
              u,
              u,
              f,
              u,
              f,
              f,
              u,
              f,
              e.getX(),
              e.getY(),
              i.getX(),
              i.getY(),
              n.getX(),
              n.getY(),
              s.getX(),
              s.getY(),
            );
          }),
          (t.prototype.sampleLine = function (t, e, i) {
            for (
              var s = 0,
                a = this.distanceResultPoint(t, e),
                o = a / i,
                u = t.getX(),
                h = t.getY(),
                f = (o * (e.getX() - t.getX())) / a,
                d = (o * (e.getY() - t.getY())) / a,
                l = 0;
              l < i;
              l++
            )
              this.image.get(
                n.default.round(u + l * f),
                n.default.round(h + l * d),
              ) && (s |= 1 << (i - l - 1));
            return s;
          }),
          (t.prototype.isWhiteOrBlackRectangle = function (t, e, i, n) {
            ((t = new d(t.getX() - 3, t.getY() + 3)),
              (e = new d(e.getX() - 3, e.getY() - 3)),
              (i = new d(i.getX() + 3, i.getY() - 3)),
              (n = new d(n.getX() + 3, n.getY() + 3)));
            var s = this.getColor(n, t);
            if (0 === s) return !1;
            var a = this.getColor(t, e);
            return (
              a === s &&
              (a = this.getColor(e, i)) === s &&
              (a = this.getColor(i, n)) === s
            );
          }),
          (t.prototype.getColor = function (t, e) {
            for (
              var i = this.distancePoint(t, e),
                s = (e.getX() - t.getX()) / i,
                a = (e.getY() - t.getY()) / i,
                o = 0,
                u = t.getX(),
                h = t.getY(),
                f = this.image.get(t.getX(), t.getY()),
                d = Math.ceil(i),
                l = 0;
              l < d;
              l++
            )
              ((u += s),
                (h += a),
                this.image.get(n.default.round(u), n.default.round(h)) !== f &&
                  o++);
            var c = o / i;
            return c > 0.1 && c < 0.9 ? 0 : c <= 0.1 === f ? 1 : -1;
          }),
          (t.prototype.getFirstDifferent = function (t, e, i, n) {
            for (
              var s = t.getX() + i, a = t.getY() + n;
              this.isValid(s, a) && this.image.get(s, a) === e;

            )
              ((s += i), (a += n));
            for (
              s -= i, a -= n;
              this.isValid(s, a) && this.image.get(s, a) === e;

            )
              s += i;
            for (s -= i; this.isValid(s, a) && this.image.get(s, a) === e; )
              a += n;
            return new d(s, (a -= n));
          }),
          (t.prototype.expandSquare = function (t, i, n) {
            var s = n / (2 * i),
              a = t[0].getX() - t[2].getX(),
              o = t[0].getY() - t[2].getY(),
              u = (t[0].getX() + t[2].getX()) / 2,
              h = (t[0].getY() + t[2].getY()) / 2,
              f = new e.default(u + s * a, h + s * o),
              d = new e.default(u - s * a, h - s * o);
            return (
              (a = t[1].getX() - t[3].getX()),
              (o = t[1].getY() - t[3].getY()),
              (u = (t[1].getX() + t[3].getX()) / 2),
              (h = (t[1].getY() + t[3].getY()) / 2),
              [
                f,
                new e.default(u + s * a, h + s * o),
                d,
                new e.default(u - s * a, h - s * o),
              ]
            );
          }),
          (t.prototype.isValid = function (t, e) {
            return (
              t >= 0 &&
              t < this.image.getWidth() &&
              e > 0 &&
              e < this.image.getHeight()
            );
          }),
          (t.prototype.isValidPoint = function (t) {
            var e = n.default.round(t.getX()),
              i = n.default.round(t.getY());
            return this.isValid(e, i);
          }),
          (t.prototype.distancePoint = function (t, e) {
            return n.default.distance(t.getX(), t.getY(), e.getX(), e.getY());
          }),
          (t.prototype.distanceResultPoint = function (t, e) {
            return n.default.distance(t.getX(), t.getY(), e.getX(), e.getY());
          }),
          (t.prototype.getDimension = function () {
            return this.compact
              ? 4 * this.nbLayers + 11
              : this.nbLayers <= 4
                ? 4 * this.nbLayers + 15
                : 4 * this.nbLayers +
                  2 * (f.default.truncDivision(this.nbLayers - 4, 8) + 1) +
                  15;
          }),
          t
        );
      })();
  },
  1051,
  [1052, 1055, 1053, 1057, 1044, 1048, 1032, 1058, 1023],
);
