// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1125; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a2, _m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }));
    var n = t(r(d[0])),
      o = t(r(d[1])),
      e =
        (this && this.__values) ||
        function (t) {
          var n = 'function' == typeof Symbol && Symbol.iterator,
            o = n && t[n],
            e = 0;
          if (o) return o.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && e >= t.length && (t = void 0),
                  { value: t && t[e++], done: !t }
                );
              },
            };
          throw new TypeError(
            n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      a = (function () {
        function t(t) {
          ((this.errorCorrectionLevel = n.default.forBits((t >> 3) & 3)),
            (this.dataMask = 7 & t));
        }
        return (
          (t.numBitsDiffering = function (t, n) {
            return o.default.bitCount(t ^ n);
          }),
          (t.decodeFormatInformation = function (n, o) {
            var e = t.doDecodeFormatInformation(n, o);
            return null !== e
              ? e
              : t.doDecodeFormatInformation(
                  n ^ t.FORMAT_INFO_MASK_QR,
                  o ^ t.FORMAT_INFO_MASK_QR,
                );
          }),
          (t.doDecodeFormatInformation = function (n, o) {
            var a,
              f,
              i = Number.MAX_SAFE_INTEGER,
              u = 0;
            try {
              for (
                var m = e(t.FORMAT_INFO_DECODE_LOOKUP), y = m.next();
                !y.done;
                y = m.next()
              ) {
                var A = y.value,
                  I = A[0];
                if (I === n || I === o) return new t(A[1]);
                var l = t.numBitsDiffering(n, I);
                (l < i && ((u = A[1]), (i = l)),
                  n !== o &&
                    (l = t.numBitsDiffering(o, I)) < i &&
                    ((u = A[1]), (i = l)));
              }
            } catch (t) {
              a = { error: t };
            } finally {
              try {
                y && !y.done && (f = m.return) && f.call(m);
              } finally {
                if (a) throw a.error;
              }
            }
            return i <= 3 ? new t(u) : null;
          }),
          (t.prototype.getErrorCorrectionLevel = function () {
            return this.errorCorrectionLevel;
          }),
          (t.prototype.getDataMask = function () {
            return this.dataMask;
          }),
          (t.prototype.hashCode = function () {
            return (this.errorCorrectionLevel.getBits() << 3) | this.dataMask;
          }),
          (t.prototype.equals = function (n) {
            if (!(n instanceof t)) return !1;
            var o = n;
            return (
              this.errorCorrectionLevel === o.errorCorrectionLevel &&
              this.dataMask === o.dataMask
            );
          }),
          (t.FORMAT_INFO_MASK_QR = 21522),
          (t.FORMAT_INFO_DECODE_LOOKUP = [
            Int32Array.from([21522, 0]),
            Int32Array.from([20773, 1]),
            Int32Array.from([24188, 2]),
            Int32Array.from([23371, 3]),
            Int32Array.from([17913, 4]),
            Int32Array.from([16590, 5]),
            Int32Array.from([20375, 6]),
            Int32Array.from([19104, 7]),
            Int32Array.from([30660, 8]),
            Int32Array.from([29427, 9]),
            Int32Array.from([32170, 10]),
            Int32Array.from([30877, 11]),
            Int32Array.from([26159, 12]),
            Int32Array.from([25368, 13]),
            Int32Array.from([27713, 14]),
            Int32Array.from([26998, 15]),
            Int32Array.from([5769, 16]),
            Int32Array.from([5054, 17]),
            Int32Array.from([7399, 18]),
            Int32Array.from([6608, 19]),
            Int32Array.from([1890, 20]),
            Int32Array.from([597, 21]),
            Int32Array.from([3340, 22]),
            Int32Array.from([2107, 23]),
            Int32Array.from([13663, 24]),
            Int32Array.from([12392, 25]),
            Int32Array.from([16177, 26]),
            Int32Array.from([14854, 27]),
            Int32Array.from([9396, 28]),
            Int32Array.from([8579, 29]),
            Int32Array.from([11994, 30]),
            Int32Array.from([11245, 31]),
          ]),
          t
        );
      })();
  },
  1125,
  [1126, 1023],
);
