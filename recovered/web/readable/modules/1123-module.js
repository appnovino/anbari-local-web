// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1123; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
    var i = t(r(d[0])),
      e = t(r(d[1])),
      o = t(r(d[2])),
      n = t(r(d[3])),
      s = (function () {
        function t(t) {
          var i = t.getHeight();
          if (i < 21 || 1 != (3 & i)) throw new n.default();
          this.bitMatrix = t;
        }
        return (
          (t.prototype.readFormatInformation = function () {
            if (
              null !== this.parsedFormatInfo &&
              void 0 !== this.parsedFormatInfo
            )
              return this.parsedFormatInfo;
            for (var t = 0, i = 0; i < 6; i++) t = this.copyBit(i, 8, t);
            ((t = this.copyBit(7, 8, t)),
              (t = this.copyBit(8, 8, t)),
              (t = this.copyBit(8, 7, t)));
            for (var o = 5; o >= 0; o--) t = this.copyBit(8, o, t);
            var s = this.bitMatrix.getHeight(),
              f = 0,
              u = s - 7;
            for (o = s - 1; o >= u; o--) f = this.copyBit(8, o, f);
            for (i = s - 8; i < s; i++) f = this.copyBit(i, 8, f);
            if (
              ((this.parsedFormatInfo = e.default.decodeFormatInformation(
                t,
                f,
              )),
              null !== this.parsedFormatInfo)
            )
              return this.parsedFormatInfo;
            throw new n.default();
          }),
          (t.prototype.readVersion = function () {
            if (null !== this.parsedVersion && void 0 !== this.parsedVersion)
              return this.parsedVersion;
            var t = this.bitMatrix.getHeight(),
              e = Math.floor((t - 17) / 4);
            if (e <= 6) return i.default.getVersionForNumber(e);
            for (var o = 0, s = t - 11, f = 5; f >= 0; f--)
              for (var u = t - 9; u >= s; u--) o = this.copyBit(u, f, o);
            var h = i.default.decodeVersionInformation(o);
            if (null !== h && h.getDimensionForVersion() === t)
              return ((this.parsedVersion = h), h);
            o = 0;
            for (u = 5; u >= 0; u--)
              for (f = t - 9; f >= s; f--) o = this.copyBit(u, f, o);
            if (
              null !== (h = i.default.decodeVersionInformation(o)) &&
              h.getDimensionForVersion() === t
            )
              return ((this.parsedVersion = h), h);
            throw new n.default();
          }),
          (t.prototype.copyBit = function (t, i, e) {
            return (
              this.isMirror
                ? this.bitMatrix.get(i, t)
                : this.bitMatrix.get(t, i)
            )
              ? (e << 1) | 1
              : e << 1;
          }),
          (t.prototype.readCodewords = function () {
            var t = this.readFormatInformation(),
              i = this.readVersion(),
              e = o.default.values.get(t.getDataMask()),
              s = this.bitMatrix.getHeight();
            e.unmaskBitMatrix(this.bitMatrix, s);
            for (
              var f = i.buildFunctionPattern(),
                u = !0,
                h = new Uint8Array(i.getTotalCodewords()),
                p = 0,
                l = 0,
                c = 0,
                v = s - 1;
              v > 0;
              v -= 2
            ) {
              6 === v && v--;
              for (var M = 0; M < s; M++)
                for (var y = u ? s - 1 - M : M, b = 0; b < 2; b++)
                  f.get(v - b, y) ||
                    (c++,
                    (l <<= 1),
                    this.bitMatrix.get(v - b, y) && (l |= 1),
                    8 === c && ((h[p++] = l), (c = 0), (l = 0)));
              u = !u;
            }
            if (p !== i.getTotalCodewords()) throw new n.default();
            return h;
          }),
          (t.prototype.remask = function () {
            if (null !== this.parsedFormatInfo) {
              var t = o.default.values.get(this.parsedFormatInfo.getDataMask()),
                i = this.bitMatrix.getHeight();
              t.unmaskBitMatrix(this.bitMatrix, i);
            }
          }),
          (t.prototype.setMirror = function (t) {
            ((this.parsedVersion = null),
              (this.parsedFormatInfo = null),
              (this.isMirror = t));
          }),
          (t.prototype.mirror = function () {
            for (var t = this.bitMatrix, i = 0, e = t.getWidth(); i < e; i++)
              for (var o = i + 1, n = t.getHeight(); o < n; o++)
                t.get(i, o) !== t.get(o, i) && (t.flip(o, i), t.flip(i, o));
          }),
          t
        );
      })();
  },
  1123,
  [1124, 1125, 1129, 1029],
);
