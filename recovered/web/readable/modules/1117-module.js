// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1117; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var t,
      e = r(d[0]),
      f = (t = e) && t.__esModule ? t : { default: t },
      s = (function () {
        function t(t) {
          ((this.bytes = t), (this.byteOffset = 0), (this.bitOffset = 0));
        }
        return (
          (t.prototype.getBitOffset = function () {
            return this.bitOffset;
          }),
          (t.prototype.getByteOffset = function () {
            return this.byteOffset;
          }),
          (t.prototype.readBits = function (t) {
            if (t < 1 || t > 32 || t > this.available())
              throw new f.default('' + t);
            var e = 0,
              s = this.bitOffset,
              n = this.byteOffset,
              o = this.bytes;
            if (s > 0) {
              var u = 8 - s,
                b = t < u ? t : u,
                h = (255 >> (8 - b)) << (y = u - b);
              ((e = (o[n] & h) >> y),
                (t -= b),
                8 === (s += b) && ((s = 0), n++));
            }
            if (t > 0) {
              for (; t >= 8; ) ((e = (e << 8) | (255 & o[n])), n++, (t -= 8));
              if (t > 0) {
                var y;
                h = (255 >> (y = 8 - t)) << y;
                ((e = (e << t) | ((o[n] & h) >> y)), (s += t));
              }
            }
            return ((this.bitOffset = s), (this.byteOffset = n), e);
          }),
          (t.prototype.available = function () {
            return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
          }),
          t
        );
      })();
  },
  1117,
  [1014],
);
