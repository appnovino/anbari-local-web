// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1145; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
      function n(n, t) {
        ((this.maskIndex = n), (this.isMasked = t));
      }
      return (
        (n.forIndex = function (t) {
          if (t < 0 || t >= n.MASKS.length)
            throw new Error('Invalid Micro QR mask index: ' + t);
          return n.MASKS[t];
        }),
        (n.prototype.unmaskBitMatrix = function (n, t) {
          for (var i = 0; i < t; i++)
            for (var o = 0; o < t; o++) this.isMasked(i, o) && n.flip(o, i);
        }),
        (n.MASKS = [
          new n(0, function (n, t) {
            return !(1 & n);
          }),
          new n(1, function (n, t) {
            return (Math.floor(n / 2) + Math.floor(t / 3)) % 2 == 0;
          }),
          new n(2, function (n, t) {
            var i = n * t;
            return ((1 & i) + (i % 3)) % 2 == 0;
          }),
          new n(3, function (n, t) {
            return (((n + t) & 1) + ((n * t) % 3)) % 2 == 0;
          }),
        ]),
        n
      );
    })();
  },
  1145,
  [],
);
