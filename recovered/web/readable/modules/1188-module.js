// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1188; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return A;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      o = t(r(d[2])),
      f = t(r(d[3])),
      i = t(r(d[4])),
      I = t(r(d[5])),
      A = (function () {
        function t() {}
        return (
          (t.clearMatrix = function (t) {
            t.clear(255);
          }),
          (t.buildMatrix = function (e, n, o, f, i) {
            (t.clearMatrix(i),
              t.embedBasicPatterns(o, i),
              t.embedTypeInfo(n, f, i),
              t.maybeEmbedVersionInfo(o, i),
              t.embedDataBits(e, f, i));
          }),
          (t.embedBasicPatterns = function (e, n) {
            (t.embedPositionDetectionPatternsAndSeparators(n),
              t.embedDarkDotAtLeftBottomCorner(n),
              t.maybeEmbedPositionAdjustmentPatterns(e, n),
              t.embedTimingPatterns(n));
          }),
          (t.embedTypeInfo = function (n, o, f) {
            var i = new e.default();
            t.makeTypeInfoBits(n, o, i);
            for (var I = 0, A = i.getSize(); I < A; ++I) {
              var y = i.get(i.getSize() - 1 - I),
                s = t.TYPE_INFO_COORDINATES[I],
                u = s[0],
                P = s[1];
              if ((f.setBoolean(u, P, y), I < 8)) {
                var T = f.getWidth() - I - 1,
                  l = 8;
                f.setBoolean(T, l, y);
              } else {
                ((T = 8), (l = f.getHeight() - 7 + (I - 8)));
                f.setBoolean(T, l, y);
              }
            }
          }),
          (t.maybeEmbedVersionInfo = function (n, o) {
            if (!(n.getVersionNumber() < 7)) {
              var f = new e.default();
              t.makeVersionInfoBits(n, f);
              for (var i = 17, I = 0; I < 6; ++I)
                for (var A = 0; A < 3; ++A) {
                  var y = f.get(i);
                  (i--,
                    o.setBoolean(I, o.getHeight() - 11 + A, y),
                    o.setBoolean(o.getHeight() - 11 + A, I, y));
                }
            }
          }),
          (t.embedDataBits = function (e, n, o) {
            for (
              var I = 0, A = -1, y = o.getWidth() - 1, s = o.getHeight() - 1;
              y > 0;

            ) {
              for (6 === y && (y -= 1); s >= 0 && s < o.getHeight(); ) {
                for (var u = 0; u < 2; ++u) {
                  var P = y - u;
                  if (t.isEmpty(o.get(P, s))) {
                    var T = void 0;
                    (I < e.getSize() ? ((T = e.get(I)), ++I) : (T = !1),
                      255 !== n &&
                        f.default.getDataMaskBit(n, P, s) &&
                        (T = !T),
                      o.setBoolean(P, s, T));
                  }
                }
                s += A;
              }
              ((s += A = -A), (y -= 2));
            }
            if (I !== e.getSize())
              throw new i.default(
                'Not all bits consumed: ' + I + '/' + e.getSize(),
              );
          }),
          (t.findMSBSet = function (t) {
            return 32 - n.default.numberOfLeadingZeros(t);
          }),
          (t.calculateBCHCode = function (e, n) {
            if (0 === n) throw new I.default('0 polynomial');
            var o = t.findMSBSet(n);
            for (e <<= o - 1; t.findMSBSet(e) >= o; )
              e ^= n << (t.findMSBSet(e) - o);
            return e;
          }),
          (t.makeTypeInfoBits = function (n, f, I) {
            if (!o.default.isValidMaskPattern(f))
              throw new i.default('Invalid mask pattern');
            var A = (n.getBits() << 3) | f;
            I.appendBits(A, 5);
            var y = t.calculateBCHCode(A, t.TYPE_INFO_POLY);
            I.appendBits(y, 10);
            var s = new e.default();
            if (
              (s.appendBits(t.TYPE_INFO_MASK_PATTERN, 15),
              I.xor(s),
              15 !== I.getSize())
            )
              throw new i.default(
                'should not happen but we got: ' + I.getSize(),
              );
          }),
          (t.makeVersionInfoBits = function (e, n) {
            n.appendBits(e.getVersionNumber(), 6);
            var o = t.calculateBCHCode(
              e.getVersionNumber(),
              t.VERSION_INFO_POLY,
            );
            if ((n.appendBits(o, 12), 18 !== n.getSize()))
              throw new i.default(
                'should not happen but we got: ' + n.getSize(),
              );
          }),
          (t.isEmpty = function (t) {
            return 255 === t;
          }),
          (t.embedTimingPatterns = function (e) {
            for (var n = 8; n < e.getWidth() - 8; ++n) {
              var o = (n + 1) % 2;
              (t.isEmpty(e.get(n, 6)) && e.setNumber(n, 6, o),
                t.isEmpty(e.get(6, n)) && e.setNumber(6, n, o));
            }
          }),
          (t.embedDarkDotAtLeftBottomCorner = function (t) {
            if (0 === t.get(8, t.getHeight() - 8)) throw new i.default();
            t.setNumber(8, t.getHeight() - 8, 1);
          }),
          (t.embedHorizontalSeparationPattern = function (e, n, o) {
            for (var f = 0; f < 8; ++f) {
              if (!t.isEmpty(o.get(e + f, n))) throw new i.default();
              o.setNumber(e + f, n, 0);
            }
          }),
          (t.embedVerticalSeparationPattern = function (e, n, o) {
            for (var f = 0; f < 7; ++f) {
              if (!t.isEmpty(o.get(e, n + f))) throw new i.default();
              o.setNumber(e, n + f, 0);
            }
          }),
          (t.embedPositionAdjustmentPattern = function (e, n, o) {
            for (var f = 0; f < 5; ++f)
              for (var i = t.POSITION_ADJUSTMENT_PATTERN[f], I = 0; I < 5; ++I)
                o.setNumber(e + I, n + f, i[I]);
          }),
          (t.embedPositionDetectionPattern = function (e, n, o) {
            for (var f = 0; f < 7; ++f)
              for (var i = t.POSITION_DETECTION_PATTERN[f], I = 0; I < 7; ++I)
                o.setNumber(e + I, n + f, i[I]);
          }),
          (t.embedPositionDetectionPatternsAndSeparators = function (e) {
            var n = t.POSITION_DETECTION_PATTERN[0].length;
            (t.embedPositionDetectionPattern(0, 0, e),
              t.embedPositionDetectionPattern(e.getWidth() - n, 0, e),
              t.embedPositionDetectionPattern(0, e.getWidth() - n, e));
            (t.embedHorizontalSeparationPattern(0, 7, e),
              t.embedHorizontalSeparationPattern(e.getWidth() - 8, 7, e),
              t.embedHorizontalSeparationPattern(0, e.getWidth() - 8, e));
            (t.embedVerticalSeparationPattern(7, 0, e),
              t.embedVerticalSeparationPattern(e.getHeight() - 7 - 1, 0, e),
              t.embedVerticalSeparationPattern(7, e.getHeight() - 7, e));
          }),
          (t.maybeEmbedPositionAdjustmentPatterns = function (e, n) {
            if (!(e.getVersionNumber() < 2))
              for (
                var o = e.getVersionNumber() - 1,
                  f = t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[o],
                  i = 0,
                  I = f.length;
                i !== I;
                i++
              ) {
                var A = f[i];
                if (A >= 0)
                  for (var y = 0; y !== I; y++) {
                    var s = f[y];
                    s >= 0 &&
                      t.isEmpty(n.get(s, A)) &&
                      t.embedPositionAdjustmentPattern(s - 2, A - 2, n);
                  }
              }
          }),
          (t.POSITION_DETECTION_PATTERN = Array.from([
            Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
            Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
            Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
            Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
            Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
            Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
            Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
          ])),
          (t.POSITION_ADJUSTMENT_PATTERN = Array.from([
            Int32Array.from([1, 1, 1, 1, 1]),
            Int32Array.from([1, 0, 0, 0, 1]),
            Int32Array.from([1, 0, 1, 0, 1]),
            Int32Array.from([1, 0, 0, 0, 1]),
            Int32Array.from([1, 1, 1, 1, 1]),
          ])),
          (t.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
            Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
            Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
            Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
            Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
            Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
            Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
            Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
            Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
            Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
            Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
            Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
            Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
            Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
            Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
            Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
            Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
            Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
            Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
            Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
            Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
            Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
            Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
            Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
            Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
            Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
            Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
            Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
            Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
            Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
            Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
            Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
            Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
            Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
            Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
            Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
            Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
            Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
            Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
            Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
            Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
          ])),
          (t.TYPE_INFO_COORDINATES = Array.from([
            Int32Array.from([8, 0]),
            Int32Array.from([8, 1]),
            Int32Array.from([8, 2]),
            Int32Array.from([8, 3]),
            Int32Array.from([8, 4]),
            Int32Array.from([8, 5]),
            Int32Array.from([8, 7]),
            Int32Array.from([8, 8]),
            Int32Array.from([7, 8]),
            Int32Array.from([5, 8]),
            Int32Array.from([4, 8]),
            Int32Array.from([3, 8]),
            Int32Array.from([2, 8]),
            Int32Array.from([1, 8]),
            Int32Array.from([0, 8]),
          ])),
          (t.VERSION_INFO_POLY = 7973),
          (t.TYPE_INFO_POLY = 1335),
          (t.TYPE_INFO_MASK_PATTERN = 21522),
          t
        );
      })();
  },
  1188,
  [1018, 1023, 1187, 1185, 1189, 1014],
);
