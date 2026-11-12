// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1073; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return A;
        },
      }));
    var t,
      n = r(_r(_d[0])),
      e = r(_r(_d[1])),
      o = r(_r(_d[2])),
      f =
        (this && this.__extends) ||
        ((t = function (r, n) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (r, t) {
                  r.__proto__ = t;
                }) ||
              function (r, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
              }),
            t(r, n)
          );
        }),
        function (r, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function e() {
            this.constructor = r;
          }
          (t(r, n),
            (r.prototype =
              null === n
                ? Object.create(n)
                : ((e.prototype = n.prototype), new e())));
        }),
      i =
        (this && this.__read) ||
        function (r, t) {
          var n = 'function' == typeof Symbol && r[Symbol.iterator];
          if (!n) return r;
          var e,
            o,
            f = n.call(r),
            i = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(e = f.next()).done; )
              i.push(e.value);
          } catch (r) {
            o = { error: r };
          } finally {
            try {
              e && !e.done && (n = f.return) && n.call(f);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        },
      u =
        (this && this.__spreadArray) ||
        function (r, t, n) {
          if (n || 2 === arguments.length)
            for (var e, o = 0, f = t.length; o < f; o++)
              (!e && o in t) ||
                (e || (e = Array.prototype.slice.call(t, 0, o)), (e[o] = t[o]));
          return r.concat(e || Array.prototype.slice.call(t));
        },
      c = (function (r) {
        function t() {
          var t = r.apply(this, u([], i(arguments), !1)) || this;
          return ((t.decodeRowStringBuffer = ''), t);
        }
        return (
          f(t, r),
          (t.findStartGuardPattern = function (r) {
            for (var n, e = !1, o = 0, f = Int32Array.from([0, 0, 0]); !e; ) {
              f = Int32Array.from([0, 0, 0]);
              var i = (n = t.findGuardPattern(
                  r,
                  o,
                  !1,
                  this.START_END_PATTERN,
                  f,
                ))[0],
                u = i - ((o = n[1]) - i);
              u >= 0 && (e = r.isRange(u, i, !1));
            }
            return n;
          }),
          (t.checkChecksum = function (r) {
            return t.checkStandardUPCEANChecksum(r);
          }),
          (t.checkStandardUPCEANChecksum = function (r) {
            var n = r.length;
            if (0 === n) return !1;
            var e = parseInt(r.charAt(n - 1), 10);
            return t.getStandardUPCEANChecksum(r.substring(0, n - 1)) === e;
          }),
          (t.getStandardUPCEANChecksum = function (r) {
            for (var t = r.length, n = 0, e = t - 1; e >= 0; e -= 2) {
              if (
                (f = r.charAt(e).charCodeAt(0) - '0'.charCodeAt(0)) < 0 ||
                f > 9
              )
                throw new o.default();
              n += f;
            }
            n *= 3;
            for (e = t - 2; e >= 0; e -= 2) {
              var f;
              if (
                (f = r.charAt(e).charCodeAt(0) - '0'.charCodeAt(0)) < 0 ||
                f > 9
              )
                throw new o.default();
              n += f;
            }
            return (1e3 - n) % 10;
          }),
          (t.decodeEnd = function (r, n) {
            return t.findGuardPattern(
              r,
              n,
              !1,
              t.START_END_PATTERN,
              new Int32Array(t.START_END_PATTERN.length).fill(0),
            );
          }),
          (t.findGuardPatternWithoutCounters = function (r, t, n, e) {
            return this.findGuardPattern(r, t, n, e, new Int32Array(e.length));
          }),
          (t.findGuardPattern = function (r, o, f, i, u) {
            for (
              var c = r.getSize(),
                A = 0,
                l = (o = f ? r.getNextUnset(o) : r.getNextSet(o)),
                d = i.length,
                h = f,
                s = o;
              s < c;
              s++
            )
              if (r.get(s) !== h) u[A]++;
              else {
                if (A === d - 1) {
                  if (
                    n.default.patternMatchVariance(
                      u,
                      i,
                      t.MAX_INDIVIDUAL_VARIANCE,
                    ) < t.MAX_AVG_VARIANCE
                  )
                    return Int32Array.from([l, s]);
                  l += u[0] + u[1];
                  for (var _ = u.slice(2, u.length), y = 0; y < A - 1; y++)
                    u[y] = _[y];
                  ((u[A - 1] = 0), (u[A] = 0), A--);
                } else A++;
                ((u[A] = 1), (h = !h));
              }
            throw new e.default();
          }),
          (t.decodeDigit = function (r, o, f, i) {
            this.recordPattern(r, f, o);
            for (
              var u = this.MAX_AVG_VARIANCE, c = -1, A = i.length, l = 0;
              l < A;
              l++
            ) {
              var d = i[l],
                h = n.default.patternMatchVariance(
                  o,
                  d,
                  t.MAX_INDIVIDUAL_VARIANCE,
                );
              h < u && ((u = h), (c = l));
            }
            if (c >= 0) return c;
            throw new e.default();
          }),
          (t.MAX_AVG_VARIANCE = 0.48),
          (t.MAX_INDIVIDUAL_VARIANCE = 0.7),
          (t.START_END_PATTERN = Int32Array.from([1, 1, 1])),
          (t.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1])),
          (t.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1])),
          (t.L_PATTERNS = [
            Int32Array.from([3, 2, 1, 1]),
            Int32Array.from([2, 2, 2, 1]),
            Int32Array.from([2, 1, 2, 2]),
            Int32Array.from([1, 4, 1, 1]),
            Int32Array.from([1, 1, 3, 2]),
            Int32Array.from([1, 2, 3, 1]),
            Int32Array.from([1, 1, 1, 4]),
            Int32Array.from([1, 3, 1, 2]),
            Int32Array.from([1, 2, 1, 3]),
            Int32Array.from([3, 1, 1, 2]),
          ]),
          t
        );
      })(n.default),
      A = c;
  },
  1073,
  [1065, 1032, 1029],
);
