// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1081; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var n,
      e = t(r(_d[0])),
      o = t(r(_d[1])),
      u = t(r(_d[2])),
      i =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, n) {
                  t.__proto__ = n;
                }) ||
              function (t, n) {
                for (var e in n)
                  Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
              }),
            n(t, e)
          );
        }),
        function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Class extends value ' +
                String(e) +
                ' is not a constructor or null',
            );
          function o() {
            this.constructor = t;
          }
          (n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o())));
        }),
      c =
        (this && this.__values) ||
        function (t) {
          var n = 'function' == typeof Symbol && Symbol.iterator,
            e = n && t[n],
            o = 0;
          if (e) return e.call(t);
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
            n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      s = (function (t) {
        function n() {
          var n = t.call(this) || this;
          return (
            (n.decodeFinderCounters = new Int32Array(4)),
            (n.dataCharacterCounters = new Int32Array(8)),
            (n.oddRoundingErrors = new Array(4)),
            (n.evenRoundingErrors = new Array(4)),
            (n.oddCounts = new Array(
              Math.trunc(n.dataCharacterCounters.length / 2),
            )),
            (n.evenCounts = new Array(
              Math.trunc(n.dataCharacterCounters.length / 2),
            )),
            n
          );
        }
        return (
          i(n, t),
          (n.prototype.getDecodeFinderCounters = function () {
            return this.decodeFinderCounters;
          }),
          (n.prototype.getDataCharacterCounters = function () {
            return this.dataCharacterCounters;
          }),
          (n.prototype.getOddRoundingErrors = function () {
            return this.oddRoundingErrors;
          }),
          (n.prototype.getEvenRoundingErrors = function () {
            return this.evenRoundingErrors;
          }),
          (n.prototype.getOddCounts = function () {
            return this.oddCounts;
          }),
          (n.prototype.getEvenCounts = function () {
            return this.evenCounts;
          }),
          (n.prototype.parseFinderValue = function (t, e) {
            for (var i = 0; i < e.length; i++)
              if (
                u.default.patternMatchVariance(
                  t,
                  e[i],
                  n.MAX_INDIVIDUAL_VARIANCE,
                ) < n.MAX_AVG_VARIANCE
              )
                return i;
            throw new o.default();
          }),
          (n.count = function (t) {
            return e.default.sum(new Int32Array(t));
          }),
          (n.increment = function (t, n) {
            for (var e = 0, o = n[0], u = 1; u < t.length; u++)
              n[u] > o && ((o = n[u]), (e = u));
            t[e]++;
          }),
          (n.decrement = function (t, n) {
            for (var e = 0, o = n[0], u = 1; u < t.length; u++)
              n[u] < o && ((o = n[u]), (e = u));
            t[e]--;
          }),
          (n.isFinderPattern = function (t) {
            var e,
              o,
              u = t[0] + t[1],
              i = u / (u + t[2] + t[3]);
            if (
              i >= n.MIN_FINDER_PATTERN_RATIO &&
              i <= n.MAX_FINDER_PATTERN_RATIO
            ) {
              var s = Number.MAX_SAFE_INTEGER,
                d = Number.MIN_SAFE_INTEGER;
              try {
                for (var f = c(t), l = f.next(); !l.done; l = f.next()) {
                  var _ = l.value;
                  (_ > d && (d = _), _ < s && (s = _));
                }
              } catch (t) {
                e = { error: t };
              } finally {
                try {
                  l && !l.done && (o = f.return) && o.call(f);
                } finally {
                  if (e) throw e.error;
                }
              }
              return d < 10 * s;
            }
            return !1;
          }),
          (n.MAX_AVG_VARIANCE = 0.2),
          (n.MAX_INDIVIDUAL_VARIANCE = 0.45),
          (n.MIN_FINDER_PATTERN_RATIO = 0.7916666666666666),
          (n.MAX_FINDER_PATTERN_RATIO = 0.8928571428571429),
          n
        );
      })(u.default);
  },
  1081,
  [1053, 1032, 1065],
);
