// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1137; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e2, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e2, '__esModule', { value: !0 }),
      Object.defineProperty(_e2, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      o = t(r(d[2])),
      i = t(r(d[3])),
      s = t(r(d[4])),
      l =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            o = 0;
          if (n) return n.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && o >= t.length && (t = void 0),
                  { value: t && t[o++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      f = (function () {
        function t(t, e) {
          ((this.image = t),
            (this.resultPointCallback = e),
            (this.possibleCenters = []),
            (this.crossCheckStateCount = new Int32Array(5)),
            (this.resultPointCallback = e));
        }
        return (
          (t.prototype.getImage = function () {
            return this.image;
          }),
          (t.prototype.getPossibleCenters = function () {
            return this.possibleCenters;
          }),
          (t.prototype.find = function (o) {
            var s = null != o && void 0 !== o.get(e.default.TRY_HARDER),
              l = null != o && void 0 !== o.get(e.default.PURE_BARCODE),
              f = this.image,
              u = f.getHeight(),
              h = f.getWidth(),
              c = Math.floor((3 * u) / (4 * t.MAX_MODULES));
            (c < t.MIN_SKIP || s) && (c = t.MIN_SKIP);
            for (
              var C = !1, v = new Int32Array(5), p = c - 1;
              p < u && !C;
              p += c
            ) {
              v.fill(0);
              for (var b = 0, M = 0; M < h; M++)
                if (f.get(M, p)) (1 & ~b || b++, v[b]++);
                else if (1 & b) v[b]++;
                else if (4 === b)
                  if (t.foundPatternCross(v)) {
                    if (!0 !== this.handlePossibleCenter(v, p, M, l)) {
                      ((v[0] = v[2]),
                        (v[1] = v[3]),
                        (v[2] = v[4]),
                        (v[3] = 1),
                        (v[4] = 0),
                        (b = 3));
                      continue;
                    }
                    if (((c = 2), !0 === this.hasSkipped))
                      C = this.haveMultiplyConfirmedCenters();
                    else {
                      var y = this.findRowSkip();
                      y > v[2] && ((p += y - v[2] - c), (M = h - 1));
                    }
                    ((b = 0), v.fill(0));
                  } else
                    ((v[0] = v[2]),
                      (v[1] = v[3]),
                      (v[2] = v[4]),
                      (v[3] = 1),
                      (v[4] = 0),
                      (b = 3));
                else v[++b]++;
              if (t.foundPatternCross(v))
                !0 === this.handlePossibleCenter(v, p, h, l) &&
                  ((c = v[0]),
                  this.hasSkipped && (C = this.haveMultiplyConfirmedCenters()));
            }
            var N = this.selectBestPatterns();
            return (n.default.orderBestPatterns(N), new i.default(N));
          }),
          (t.centerFromEnd = function (t, e) {
            return e - t[4] - t[3] - t[2] / 2;
          }),
          (t.foundPatternCross = function (t) {
            for (var e = 0, n = 0; n < 5; n++) {
              var o = t[n];
              if (0 === o) return !1;
              e += o;
            }
            if (e < 7) return !1;
            var i = e / 7,
              s = i / 2;
            return (
              Math.abs(i - t[0]) < s &&
              Math.abs(i - t[1]) < s &&
              Math.abs(3 * i - t[2]) < 3 * s &&
              Math.abs(i - t[3]) < s &&
              Math.abs(i - t[4]) < s
            );
          }),
          (t.prototype.getCrossCheckStateCount = function () {
            return (
              this.crossCheckStateCount.fill(0),
              this.crossCheckStateCount
            );
          }),
          (t.prototype.crossCheckDiagonal = function (e, n, o, i) {
            for (
              var s = this.getCrossCheckStateCount(), l = 0, f = this.image;
              e >= l && n >= l && f.get(n - l, e - l);

            )
              (s[2]++, l++);
            if (e < l || n < l) return !1;
            for (; e >= l && n >= l && !f.get(n - l, e - l) && s[1] <= o; )
              (s[1]++, l++);
            if (e < l || n < l || s[1] > o) return !1;
            for (; e >= l && n >= l && f.get(n - l, e - l) && s[0] <= o; )
              (s[0]++, l++);
            if (s[0] > o) return !1;
            var u = f.getHeight(),
              h = f.getWidth();
            for (l = 1; e + l < u && n + l < h && f.get(n + l, e + l); )
              (s[2]++, l++);
            if (e + l >= u || n + l >= h) return !1;
            for (; e + l < u && n + l < h && !f.get(n + l, e + l) && s[3] < o; )
              (s[3]++, l++);
            if (e + l >= u || n + l >= h || s[3] >= o) return !1;
            for (; e + l < u && n + l < h && f.get(n + l, e + l) && s[4] < o; )
              (s[4]++, l++);
            if (s[4] >= o) return !1;
            var c = s[0] + s[1] + s[2] + s[3] + s[4];
            return Math.abs(c - i) < 2 * i && t.foundPatternCross(s);
          }),
          (t.prototype.crossCheckVertical = function (e, n, o, i) {
            for (
              var s = this.image,
                l = s.getHeight(),
                f = this.getCrossCheckStateCount(),
                u = e;
              u >= 0 && s.get(n, u);

            )
              (f[2]++, u--);
            if (u < 0) return NaN;
            for (; u >= 0 && !s.get(n, u) && f[1] <= o; ) (f[1]++, u--);
            if (u < 0 || f[1] > o) return NaN;
            for (; u >= 0 && s.get(n, u) && f[0] <= o; ) (f[0]++, u--);
            if (f[0] > o) return NaN;
            for (u = e + 1; u < l && s.get(n, u); ) (f[2]++, u++);
            if (u === l) return NaN;
            for (; u < l && !s.get(n, u) && f[3] < o; ) (f[3]++, u++);
            if (u === l || f[3] >= o) return NaN;
            for (; u < l && s.get(n, u) && f[4] < o; ) (f[4]++, u++);
            if (f[4] >= o) return NaN;
            var h = f[0] + f[1] + f[2] + f[3] + f[4];
            return 5 * Math.abs(h - i) >= 2 * i
              ? NaN
              : t.foundPatternCross(f)
                ? t.centerFromEnd(f, u)
                : NaN;
          }),
          (t.prototype.crossCheckHorizontal = function (e, n, o, i) {
            for (
              var s = this.image,
                l = s.getWidth(),
                f = this.getCrossCheckStateCount(),
                u = e;
              u >= 0 && s.get(u, n);

            )
              (f[2]++, u--);
            if (u < 0) return NaN;
            for (; u >= 0 && !s.get(u, n) && f[1] <= o; ) (f[1]++, u--);
            if (u < 0 || f[1] > o) return NaN;
            for (; u >= 0 && s.get(u, n) && f[0] <= o; ) (f[0]++, u--);
            if (f[0] > o) return NaN;
            for (u = e + 1; u < l && s.get(u, n); ) (f[2]++, u++);
            if (u === l) return NaN;
            for (; u < l && !s.get(u, n) && f[3] < o; ) (f[3]++, u++);
            if (u === l || f[3] >= o) return NaN;
            for (; u < l && s.get(u, n) && f[4] < o; ) (f[4]++, u++);
            if (f[4] >= o) return NaN;
            var h = f[0] + f[1] + f[2] + f[3] + f[4];
            return 5 * Math.abs(h - i) >= i
              ? NaN
              : t.foundPatternCross(f)
                ? t.centerFromEnd(f, u)
                : NaN;
          }),
          (t.prototype.handlePossibleCenter = function (e, n, i, s) {
            var l = e[0] + e[1] + e[2] + e[3] + e[4],
              f = t.centerFromEnd(e, i),
              u = this.crossCheckVertical(n, Math.floor(f), e[2], l);
            if (
              !isNaN(u) &&
              ((f = this.crossCheckHorizontal(
                Math.floor(f),
                Math.floor(u),
                e[2],
                l,
              )),
              !isNaN(f) &&
                (!s ||
                  this.crossCheckDiagonal(
                    Math.floor(u),
                    Math.floor(f),
                    e[2],
                    l,
                  )))
            ) {
              for (
                var h = l / 7,
                  c = !1,
                  C = this.possibleCenters,
                  v = 0,
                  p = C.length;
                v < p;
                v++
              ) {
                var b = C[v];
                if (b.aboutEquals(h, u, f)) {
                  ((C[v] = b.combineEstimate(u, f, h)), (c = !0));
                  break;
                }
              }
              if (!c) {
                var M = new o.default(f, u, h);
                (C.push(M),
                  null !== this.resultPointCallback &&
                    void 0 !== this.resultPointCallback &&
                    this.resultPointCallback.foundPossibleResultPoint(M));
              }
              return !0;
            }
            return !1;
          }),
          (t.prototype.findRowSkip = function () {
            var e, n;
            if (this.possibleCenters.length <= 1) return 0;
            var o = null;
            try {
              for (
                var i = l(this.possibleCenters), s = i.next();
                !s.done;
                s = i.next()
              ) {
                var f = s.value;
                if (f.getCount() >= t.CENTER_QUORUM) {
                  if (null != o)
                    return (
                      (this.hasSkipped = !0),
                      Math.floor(
                        (Math.abs(o.getX() - f.getX()) -
                          Math.abs(o.getY() - f.getY())) /
                          2,
                      )
                    );
                  o = f;
                }
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                s && !s.done && (n = i.return) && n.call(i);
              } finally {
                if (e) throw e.error;
              }
            }
            return 0;
          }),
          (t.prototype.haveMultiplyConfirmedCenters = function () {
            var e,
              n,
              o,
              i,
              s = 0,
              f = 0,
              u = this.possibleCenters.length;
            try {
              for (
                var h = l(this.possibleCenters), c = h.next();
                !c.done;
                c = h.next()
              ) {
                (M = c.value).getCount() >= t.CENTER_QUORUM &&
                  (s++, (f += M.getEstimatedModuleSize()));
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                c && !c.done && (n = h.return) && n.call(h);
              } finally {
                if (e) throw e.error;
              }
            }
            if (s < 3) return !1;
            var C = f / u,
              v = 0;
            try {
              for (
                var p = l(this.possibleCenters), b = p.next();
                !b.done;
                b = p.next()
              ) {
                var M = b.value;
                v += Math.abs(M.getEstimatedModuleSize() - C);
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                b && !b.done && (i = p.return) && i.call(p);
              } finally {
                if (o) throw o.error;
              }
            }
            return v <= 0.05 * f;
          }),
          (t.prototype.selectBestPatterns = function () {
            var t,
              e,
              n,
              o,
              i = this.possibleCenters.length;
            if (i < 3) throw new s.default();
            var f,
              u = this.possibleCenters;
            if (i > 3) {
              var h = 0,
                c = 0;
              try {
                for (
                  var C = l(this.possibleCenters), v = C.next();
                  !v.done;
                  v = C.next()
                ) {
                  var p = v.value.getEstimatedModuleSize();
                  ((h += p), (c += p * p));
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  v && !v.done && (e = C.return) && e.call(C);
                } finally {
                  if (t) throw t.error;
                }
              }
              f = h / i;
              var b = Math.sqrt(c / i - f * f);
              u.sort(function (t, e) {
                var n = Math.abs(e.getEstimatedModuleSize() - f),
                  o = Math.abs(t.getEstimatedModuleSize() - f);
                return n < o ? -1 : n > o ? 1 : 0;
              });
              for (
                var M = Math.max(0.2 * f, b), y = 0;
                y < u.length && u.length > 3;
                y++
              ) {
                var N = u[y];
                Math.abs(N.getEstimatedModuleSize() - f) > M &&
                  (u.splice(y, 1), y--);
              }
            }
            if (u.length > 3) {
              h = 0;
              try {
                for (var m = l(u), S = m.next(); !S.done; S = m.next()) {
                  h += S.value.getEstimatedModuleSize();
                }
              } catch (t) {
                n = { error: t };
              } finally {
                try {
                  S && !S.done && (o = m.return) && o.call(m);
                } finally {
                  if (n) throw n.error;
                }
              }
              ((f = h / u.length),
                u.sort(function (t, e) {
                  if (e.getCount() === t.getCount()) {
                    var n = Math.abs(e.getEstimatedModuleSize() - f),
                      o = Math.abs(t.getEstimatedModuleSize() - f);
                    return n < o ? 1 : n > o ? -1 : 0;
                  }
                  return e.getCount() - t.getCount();
                }),
                u.splice(3));
            }
            return [u[0], u[1], u[2]];
          }),
          (t.CENTER_QUORUM = 2),
          (t.MIN_SKIP = 3),
          (t.MAX_MODULES = 57),
          t
        );
      })();
  },
  1137,
  [1027, 1052, 1138, 1139, 1032],
);
