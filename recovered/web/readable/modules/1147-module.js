// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1147; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a2, _m, _e, d) {
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
    var e = t(_r(d[0])),
      r = t(_r(d[1])),
      n = t(_r(d[2])),
      i = t(_r(d[3])),
      a = t(_r(d[4])),
      o = t(_r(d[5])),
      u = t(_r(d[6])),
      l =
        (this && this.__read) ||
        function (t, e) {
          var r = 'function' == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            i,
            a = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(n = a.next()).done; )
              o.push(n.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              n && !n.done && (r = a.return) && r.call(a);
            } finally {
              if (i) throw i.error;
            }
          }
          return o;
        },
      f = (function () {
        function t(t) {
          this.image = t;
        }
        return (
          (t.prototype.detect = function (t) {
            var e;
            this.resultPointCallback =
              null != t &&
              null !== (e = t.get(i.default.NEED_RESULT_POINT_CALLBACK)) &&
              void 0 !== e
                ? e
                : null;
            var r = this.findFinderPattern(t);
            return this.processFinderPattern(r);
          }),
          (t.prototype.findFinderPattern = function (t) {
            for (
              var e = this.image,
                r = e.getHeight(),
                n = e.getWidth(),
                o =
                  null != t && void 0 !== t.get(i.default.TRY_HARDER)
                    ? 1
                    : Math.max(1, Math.floor(r / 64)),
                u = new Int32Array(5),
                l = [],
                f = o - 1;
              f < r;
              f += o
            ) {
              u.fill(0);
              for (var s = 0, h = 0; h < n; h++)
                if (e.get(h, f)) (1 & ~s || s++, u[s]++);
                else if (1 & s) u[s]++;
                else {
                  if (4 === s) {
                    if (this.foundPatternCross(u))
                      if (this.handlePossibleCenter(u, f, h, l)) {
                        (u.fill(0), (s = 0));
                        continue;
                      }
                    ((u[0] = u[2]),
                      (u[1] = u[3]),
                      (u[2] = u[4]),
                      (u[3] = 1),
                      (u[4] = 0),
                      (s = 3));
                    continue;
                  }
                  u[++s]++;
                }
              this.foundPatternCross(u) &&
                this.handlePossibleCenter(u, f, n, l);
            }
            if (0 === l.length)
              throw new a.default('No Micro QR finder pattern found.');
            return (
              l.sort(function (t, e) {
                return e.getCount() - t.getCount();
              }),
              l[0]
            );
          }),
          (t.prototype.foundPatternCross = function (t) {
            for (var e = 0, r = 0; r < 5; r++) {
              var n = t[r];
              if (0 === n) return !1;
              e += n;
            }
            if (e < 7) return !1;
            var i = e / 7,
              a = i / 2;
            return (
              Math.abs(i - t[0]) < a &&
              Math.abs(i - t[1]) < a &&
              Math.abs(3 * i - t[2]) < 3 * a &&
              Math.abs(i - t[3]) < a &&
              Math.abs(i - t[4]) < a
            );
          }),
          (t.prototype.handlePossibleCenter = function (t, e, r, n) {
            var i = t[0] + t[1] + t[2] + t[3] + t[4],
              a = this.centerFromEnd(t, r),
              o = this.crossCheckVertical(e, Math.floor(a), t[2], i);
            if (isNaN(o)) return !1;
            for (
              var l = (t[0] + t[1] + t[2] + t[3] + t[4]) / 7, f = 0;
              f < n.length;
              f++
            ) {
              var s = n[f];
              if (s.aboutEquals(l, o, a))
                return ((n[f] = s.combineEstimate(o, a, l)), !0);
            }
            return (
              n.push(new u.default(a, o, l)),
              null !== this.resultPointCallback &&
                this.resultPointCallback.foundPossibleResultPoint(
                  n[n.length - 1],
                ),
              !1
            );
          }),
          (t.prototype.centerFromEnd = function (t, e) {
            return e - t[4] - t[3] - t[2] / 2;
          }),
          (t.prototype.crossCheckVertical = function (t, e, r, n) {
            for (
              var i = this.image,
                a = i.getHeight(),
                o = new Int32Array(5),
                u = t;
              u >= 0 && i.get(e, u);

            )
              (o[2]++, u--);
            if (u < 0) return NaN;
            for (; u >= 0 && !i.get(e, u) && o[1] <= n; ) (o[1]++, u--);
            if (u < 0 || o[1] > n) return NaN;
            for (; u >= 0 && i.get(e, u) && o[0] <= n; ) (o[0]++, u--);
            if (o[0] > n) return NaN;
            for (u = t + 1; u < a && i.get(e, u); ) (o[2]++, u++);
            if (u === a) return NaN;
            for (; u < a && !i.get(e, u) && o[3] < n; ) (o[3]++, u++);
            if (u === a || o[3] >= n) return NaN;
            for (; u < a && i.get(e, u) && o[4] < n; ) (o[4]++, u++);
            if (o[4] >= n) return NaN;
            var l = o[0] + o[1] + o[2] + o[3] + o[4];
            return 5 * Math.abs(l - n) >= 2 * n
              ? NaN
              : this.foundPatternCross(o)
                ? this.centerFromEnd(o, u)
                : NaN;
          }),
          (t.prototype.processFinderPattern = function (r) {
            var n = r.getX(),
              i = r.getY(),
              u = r.getEstimatedModuleSize();
            if (u < 1) throw new a.default('Module size too small.');
            var l = this.determineDimension(n, i, u);
            if (null === l)
              throw new a.default(
                'Cannot determine Micro QR symbol dimension.',
              );
            var f = l.dim,
              s = l.orientation,
              h = (f - 7) * u,
              c = n + [h, 0, -h, 0][s],
              m = i + [0, h, 0, -h][s],
              p = n + [0, -h, 0, h][s],
              v = i + [h, 0, -h, 0][s],
              b = t.createTransform(n, i, c, m, p, v, f),
              M = t.sampleGrid(this.image, b, f),
              y = [
                new o.default(n, i),
                new o.default(c, m),
                new o.default(p, v),
              ];
            return new e.default(M, y);
          }),
          (t.prototype.determineDimension = function (t, e, r) {
            for (
              var n = [
                  [5, -3, 1, 0, -3, 5, 0, 1],
                  [3, 5, 0, 1, -5, -3, -1, 0],
                  [-5, 3, -1, 0, 3, -5, 0, -1],
                  [-3, -5, 0, -1, 5, 3, 1, 0],
                ],
                i = null,
                a = 0;
              a < 4;
              a++
            ) {
              var o = l(n[a], 8),
                u = o[0],
                f = o[1],
                s = o[2],
                h = o[3],
                c = o[4],
                m = o[5],
                p = o[6],
                v = o[7],
                b = this.probeTimingLine(t + u * r, e + f * r, s, h, r),
                M = this.probeTimingLine(t + c * r, e + m * r, p, v, r);
              if (null !== b && null !== M) {
                if (null !== (y = this.snapDimension(b, M)))
                  return { dim: y, orientation: a };
              } else if (null === i && (null !== b || null !== M)) {
                var y;
                null !== (y = this.snapDimension(b, M)) &&
                  (i = { dim: y, orientation: a });
              }
            }
            return i;
          }),
          (t.prototype.snapDimension = function (t, e) {
            if (null === t) return e;
            if (null === e) return t;
            if (t === e) return t;
            var r = Math.round((t + e) / 2);
            return [11, 13, 15, 17].reduce(function (t, e) {
              return Math.abs(e - r) < Math.abs(t - r) ? e : t;
            });
          }),
          (t.prototype.probeTimingLine = function (t, e, r, n, i) {
            for (var a = 0, o = 0; o < 10; o++) {
              var u = 8 + o,
                l = Math.round(t + r * o * i),
                f = Math.round(e + n * o * i);
              if (
                l < 0 ||
                l >= this.image.getWidth() ||
                f < 0 ||
                f >= this.image.getHeight()
              )
                break;
              var s = u % 2 == 0;
              if (this.image.get(l, f) !== s) break;
              s && a++;
            }
            if (a < 2) return null;
            var h = 8 + 2 * a - 1;
            if (11 === h || 13 === h || 15 === h || 17 === h) return h;
            var c = [11, 13, 15, 17].reduce(function (t, e) {
              return Math.abs(e - h) < Math.abs(t - h) ? e : t;
            });
            return Math.abs(c - h) <= 2 ? c : null;
          }),
          (t.createTransform = function (t, e, r, i, a, o, u) {
            var l = u - 3.5;
            return n.default.quadrilateralToQuadrilateral(
              3.5,
              3.5,
              l,
              3.5,
              3.5,
              l,
              l,
              l,
              t,
              e,
              r,
              i,
              a,
              o,
              r + (a - t),
              i + (o - e),
            );
          }),
          (t.sampleGrid = function (t, e, n) {
            return r.default.getInstance().sampleGridWithTransform(t, n, n, e);
          }),
          t
        );
      })();
  },
  1147,
  [1056, 1058, 1061, 1027, 1032, 1052, 1148],
);
