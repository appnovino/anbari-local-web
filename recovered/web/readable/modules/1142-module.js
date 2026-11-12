// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1142; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
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
    var e = t(r(d[0])),
      o = t(r(d[1])),
      i = t(r(d[2])),
      n = t(r(d[3])),
      s = (function () {
        function t(t) {
          ((this.bitMatrix = t),
            (this.parsedFormatInfo = null),
            (this.parsedVersion = null));
          var o = t.getHeight();
          if (o < 11 || o > 17 || o % 2 != 1) throw new e.default();
        }
        return (
          (t.prototype.readFormatInformation = function () {
            if (null !== this.parsedFormatInfo) return this.parsedFormatInfo;
            for (var t = 0, n = 1; n <= 8; n++) t = this.copyBit(n, 8, t);
            for (var s = 7; s >= 1; s--) t = this.copyBit(8, s, t);
            var u = o.default.decodeFormatInformation(t);
            if (null !== u)
              return (
                (this.parsedFormatInfo = u),
                (this.parsedVersion = i.default.getVersionForIndicator(
                  u.getVersionIndicator(),
                )),
                u
              );
            throw new e.default();
          }),
          (t.prototype.copyBit = function (t, e, o) {
            return this.bitMatrix.get(t, e) ? (o << 1) | 1 : o << 1;
          }),
          (t.prototype.readCodewords = function () {
            var t = this.readFormatInformation(),
              o = this.parsedVersion,
              i = n.default.forIndex(t.getDataMask()),
              s = this.bitMatrix.getHeight();
            i.unmaskBitMatrix(this.bitMatrix, s);
            for (
              var u = o.buildFunctionPattern(),
                f = o.getNumDataCodewords(),
                l = 1 === o.getVersionNumber() || 3 === o.getVersionNumber(),
                h = !0,
                c = new Uint8Array(o.getTotalCodewords()),
                p = 0,
                v = 0,
                b = 0,
                w = s - 1;
              w > 0;
              w -= 2
            ) {
              for (var I = 0; I < s; I++)
                for (var y = h ? s - 1 - I : I, F = 0; F < 2; F++) {
                  var M = w - F;
                  if (!u.get(M, y)) {
                    (b++, (v <<= 1), this.bitMatrix.get(M, y) && (v |= 1));
                    var x = l && p === f - 1;
                    b === (x ? 4 : 8) &&
                      ((c[p++] = x ? (v << 4) & 255 : 255 & v),
                      (b = 0),
                      (v = 0));
                  }
                }
              h = !h;
            }
            if (p !== o.getTotalCodewords()) throw new e.default();
            return c;
          }),
          t
        );
      })();
  },
  1142,
  [1029, 1143, 1144, 1145],
);
