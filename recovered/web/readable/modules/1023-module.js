// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1023; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var n = (function () {
      function n() {}
      return (
        (n.numberOfTrailingZeros = function (n) {
          var t;
          if (0 === n) return 32;
          var u = 31;
          return (
            0 !== (t = n << 16) && ((u -= 16), (n = t)),
            0 !== (t = n << 8) && ((u -= 8), (n = t)),
            0 !== (t = n << 4) && ((u -= 4), (n = t)),
            0 !== (t = n << 2) && ((u -= 2), (n = t)),
            u - ((n << 1) >>> 31)
          );
        }),
        (n.numberOfLeadingZeros = function (n) {
          if (0 === n) return 32;
          var t = 1;
          return (
            n >>> 16 == 0 && ((t += 16), (n <<= 16)),
            n >>> 24 == 0 && ((t += 8), (n <<= 8)),
            n >>> 28 == 0 && ((t += 4), (n <<= 4)),
            n >>> 30 == 0 && ((t += 2), (n <<= 2)),
            (t -= n >>> 31)
          );
        }),
        (n.toHexString = function (n) {
          return n.toString(16);
        }),
        (n.toBinaryString = function (n) {
          return String(parseInt(String(n), 2));
        }),
        (n.bitCount = function (n) {
          return (
            (n =
              ((n =
                (858993459 & (n -= (n >>> 1) & 1431655765)) +
                ((n >>> 2) & 858993459)) +
                (n >>> 4)) &
              252645135),
            (n += n >>> 8),
            63 & (n += n >>> 16)
          );
        }),
        (n.truncDivision = function (n, t) {
          return Math.trunc(n / t);
        }),
        (n.parseInt = function (n, t) {
          return (void 0 === t && (t = void 0), parseInt(n, t));
        }),
        (n.MIN_VALUE_32_BITS = -2147483648),
        (n.MAX_VALUE = Number.MAX_SAFE_INTEGER),
        n
      );
    })();
  },
  1023,
  [],
);
