// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1068; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, _d) {
    'use strict';
    function r(r) {
      return r && r.__esModule ? r : { default: r };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return _;
        },
      }));
    var t,
      e = r(_r(_d[0])),
      n = r(_r(_d[1])),
      o = r(_r(_d[2])),
      i = r(_r(_d[3])),
      f = r(_r(_d[4])),
      l = r(_r(_d[5])),
      u = r(_r(_d[6])),
      d = r(_r(_d[7])),
      c = r(_r(_d[8])),
      y =
        (this && this.__extends) ||
        ((t = function (r, e) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, t) {
                  r.__proto__ = t;
                }) ||
              function (r, t) {
                for (var e in t)
                  Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
              }),
            t(r, e)
          );
        }),
        function (r, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Class extends value ' +
                String(e) +
                ' is not a constructor or null',
            );
          function n() {
            this.constructor = r;
          }
          (t(r, e),
            (r.prototype =
              null === e
                ? Object.create(e)
                : ((n.prototype = e.prototype), new n())));
        }),
      A =
        (this && this.__read) ||
        function (r, t) {
          var e = 'function' == typeof Symbol && r[Symbol.iterator];
          if (!e) return r;
          var n,
            o,
            i = e.call(r),
            f = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(n = i.next()).done; )
              f.push(n.value);
          } catch (r) {
            o = { error: r };
          } finally {
            try {
              n && !n.done && (e = i.return) && e.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return f;
        },
      p =
        (this && this.__spreadArray) ||
        function (r, t, e) {
          if (e || 2 === arguments.length)
            for (var n, o = 0, i = t.length; o < i; o++)
              (!n && o in t) ||
                (n || (n = Array.prototype.slice.call(t, 0, o)), (n[o] = t[o]));
          return r.concat(n || Array.prototype.slice.call(t));
        },
      h =
        (this && this.__values) ||
        function (r) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            e = t && r[t],
            n = 0;
          if (e) return e.call(r);
          if (r && 'number' == typeof r.length)
            return {
              next: function () {
                return (
                  r && n >= r.length && (r = void 0),
                  { value: r && r[n++], done: !r }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      s = (function (r) {
        function t() {
          var t = r.apply(this, p([], A(arguments), !1)) || this;
          return ((t.narrowLineWidth = -1), t);
        }
        return (
          y(t, r),
          (t.prototype.decodeRow = function (r, i, d) {
            var c,
              y,
              A = this.decodeStart(i),
              p = this.decodeEnd(i),
              s = new u.default();
            t.decodeMiddle(i, A[1], p[0], s);
            var _ = s.toString(),
              I = null;
            (null != d && (I = d.get(n.default.ALLOWED_LENGTHS)),
              null == I && (I = t.DEFAULT_ALLOWED_LENGTHS));
            var v = _.length,
              E = !1,
              m = 0;
            try {
              for (var w = h(I), S = w.next(); !S.done; S = w.next()) {
                var T = S.value;
                if (v === T) {
                  E = !0;
                  break;
                }
                T > m && (m = T);
              }
            } catch (r) {
              c = { error: r };
            } finally {
              try {
                S && !S.done && (y = w.return) && y.call(w);
              } finally {
                if (c) throw c.error;
              }
            }
            if ((!E && v > m && (E = !0), !E)) throw new o.default();
            var N = [new l.default(A[1], r), new l.default(p[0], r)];
            return new f.default(
              _,
              null,
              0,
              N,
              e.default.ITF,
              new Date().getTime(),
            );
          }),
          (t.decodeMiddle = function (r, e, n, o) {
            var i = new Int32Array(10),
              f = new Int32Array(5),
              l = new Int32Array(5);
            for (i.fill(0), f.fill(0), l.fill(0); e < n; ) {
              c.default.recordPattern(r, e, i);
              for (var u = 0; u < 5; u++) {
                var d = 2 * u;
                ((f[u] = i[d]), (l[u] = i[d + 1]));
              }
              var y = t.decodeDigit(f);
              (o.append(y.toString()),
                (y = this.decodeDigit(l)),
                o.append(y.toString()),
                i.forEach(function (r) {
                  e += r;
                }));
            }
          }),
          (t.prototype.decodeStart = function (r) {
            var e = t.skipWhiteSpace(r),
              n = t.findGuardPattern(r, e, t.START_PATTERN);
            return (
              (this.narrowLineWidth = (n[1] - n[0]) / 4),
              this.validateQuietZone(r, n[0]),
              n
            );
          }),
          (t.prototype.validateQuietZone = function (r, t) {
            var e = 10 * this.narrowLineWidth;
            e = e < t ? e : t;
            for (var n = t - 1; e > 0 && n >= 0 && !r.get(n); n--) e--;
            if (0 !== e) throw new i.default();
          }),
          (t.skipWhiteSpace = function (r) {
            var t = r.getSize(),
              e = r.getNextSet(0);
            if (e === t) throw new i.default();
            return e;
          }),
          (t.prototype.decodeEnd = function (r) {
            r.reverse();
            try {
              var e = t.skipWhiteSpace(r),
                n = void 0;
              try {
                n = t.findGuardPattern(r, e, t.END_PATTERN_REVERSED[0]);
              } catch (o) {
                o instanceof i.default &&
                  (n = t.findGuardPattern(r, e, t.END_PATTERN_REVERSED[1]));
              }
              this.validateQuietZone(r, n[0]);
              var o = n[0];
              return ((n[0] = r.getSize() - n[1]), (n[1] = r.getSize() - o), n);
            } finally {
              r.reverse();
            }
          }),
          (t.findGuardPattern = function (r, e, n) {
            var o = n.length,
              f = new Int32Array(o),
              l = r.getSize(),
              u = !1,
              y = 0,
              A = e;
            f.fill(0);
            for (var p = e; p < l; p++)
              if (r.get(p) !== u) f[y]++;
              else {
                if (y === o - 1) {
                  if (
                    c.default.patternMatchVariance(
                      f,
                      n,
                      t.MAX_INDIVIDUAL_VARIANCE,
                    ) < t.MAX_AVG_VARIANCE
                  )
                    return [A, p];
                  ((A += f[0] + f[1]),
                    d.default.arraycopy(f, 2, f, 0, y - 1),
                    (f[y - 1] = 0),
                    (f[y] = 0),
                    y--);
                } else y++;
                ((f[y] = 1), (u = !u));
              }
            throw new i.default();
          }),
          (t.decodeDigit = function (r) {
            for (
              var e = t.MAX_AVG_VARIANCE, n = -1, o = t.PATTERNS.length, f = 0;
              f < o;
              f++
            ) {
              var l = t.PATTERNS[f],
                u = c.default.patternMatchVariance(
                  r,
                  l,
                  t.MAX_INDIVIDUAL_VARIANCE,
                );
              u < e ? ((e = u), (n = f)) : u === e && (n = -1);
            }
            if (n >= 0) return n % 10;
            throw new i.default();
          }),
          (t.PATTERNS = [
            Int32Array.from([1, 1, 2, 2, 1]),
            Int32Array.from([2, 1, 1, 1, 2]),
            Int32Array.from([1, 2, 1, 1, 2]),
            Int32Array.from([2, 2, 1, 1, 1]),
            Int32Array.from([1, 1, 2, 1, 2]),
            Int32Array.from([2, 1, 2, 1, 1]),
            Int32Array.from([1, 2, 2, 1, 1]),
            Int32Array.from([1, 1, 1, 2, 2]),
            Int32Array.from([2, 1, 1, 2, 1]),
            Int32Array.from([1, 2, 1, 2, 1]),
            Int32Array.from([1, 1, 3, 3, 1]),
            Int32Array.from([3, 1, 1, 1, 3]),
            Int32Array.from([1, 3, 1, 1, 3]),
            Int32Array.from([3, 3, 1, 1, 1]),
            Int32Array.from([1, 1, 3, 1, 3]),
            Int32Array.from([3, 1, 3, 1, 1]),
            Int32Array.from([1, 3, 3, 1, 1]),
            Int32Array.from([1, 1, 1, 3, 3]),
            Int32Array.from([3, 1, 1, 3, 1]),
            Int32Array.from([1, 3, 1, 3, 1]),
          ]),
          (t.MAX_AVG_VARIANCE = 0.38),
          (t.MAX_INDIVIDUAL_VARIANCE = 0.5),
          (t.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14]),
          (t.START_PATTERN = Int32Array.from([1, 1, 1, 1])),
          (t.END_PATTERN_REVERSED = [
            Int32Array.from([1, 1, 2]),
            Int32Array.from([1, 1, 3]),
          ]),
          t
        );
      })(c.default),
      _ = s;
  },
  1068,
  [1040, 1027, 1029, 1032, 1039, 1052, 1025, 1020, 1065],
);
