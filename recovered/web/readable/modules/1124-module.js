// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1124; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i2, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return m;
        },
      }));
    var n = e(r(d[0])),
      t = e(r(d[1])),
      f = e(r(d[2])),
      u = e(r(d[3])),
      w = e(r(d[4])),
      l = e(r(d[5])),
      o =
        (this && this.__values) ||
        function (e) {
          var n = 'function' == typeof Symbol && Symbol.iterator,
            t = n && e[n],
            f = 0;
          if (t) return t.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && f >= e.length && (e = void 0),
                  { value: e && e[f++], done: !e }
                );
              },
            };
          throw new TypeError(
            n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      i = (function () {
        function e(e, n) {
          for (var t, f, u = [], w = 2; w < arguments.length; w++)
            u[w - 2] = arguments[w];
          ((this.versionNumber = e),
            (this.alignmentPatternCenters = n),
            (this.ecBlocks = u));
          var l = 0,
            i = u[0].getECCodewordsPerBlock(),
            m = u[0].getECBlocks();
          try {
            for (var s = o(m), y = s.next(); !y.done; y = s.next()) {
              var I = y.value;
              l += I.getCount() * (I.getDataCodewords() + i);
            }
          } catch (e) {
            t = { error: e };
          } finally {
            try {
              y && !y.done && (f = s.return) && f.call(s);
            } finally {
              if (t) throw t.error;
            }
          }
          this.totalCodewords = l;
        }
        return (
          (e.prototype.getVersionNumber = function () {
            return this.versionNumber;
          }),
          (e.prototype.getAlignmentPatternCenters = function () {
            return this.alignmentPatternCenters;
          }),
          (e.prototype.getTotalCodewords = function () {
            return this.totalCodewords;
          }),
          (e.prototype.getDimensionForVersion = function () {
            return 17 + 4 * this.versionNumber;
          }),
          (e.prototype.getECBlocksForLevel = function (e) {
            return this.ecBlocks[e.getValue()];
          }),
          (e.getProvisionalVersionForDimension = function (e) {
            if (e % 4 != 1) throw new w.default();
            try {
              return this.getVersionForNumber((e - 17) / 4);
            } catch (e) {
              throw new w.default();
            }
          }),
          (e.getVersionForNumber = function (n) {
            if (n < 1 || n > 40) throw new l.default();
            return e.VERSIONS[n - 1];
          }),
          (e.decodeVersionInformation = function (n) {
            for (
              var f = Number.MAX_SAFE_INTEGER, u = 0, w = 0;
              w < e.VERSION_DECODE_INFO.length;
              w++
            ) {
              var l = e.VERSION_DECODE_INFO[w];
              if (l === n) return e.getVersionForNumber(w + 7);
              var o = t.default.numBitsDiffering(n, l);
              o < f && ((u = w + 7), (f = o));
            }
            return f <= 3 ? e.getVersionForNumber(u) : null;
          }),
          (e.prototype.buildFunctionPattern = function () {
            var e = this.getDimensionForVersion(),
              t = new n.default(e);
            (t.setRegion(0, 0, 9, 9),
              t.setRegion(e - 8, 0, 8, 9),
              t.setRegion(0, e - 8, 9, 8));
            for (var f = this.alignmentPatternCenters.length, u = 0; u < f; u++)
              for (
                var w = this.alignmentPatternCenters[u] - 2, l = 0;
                l < f;
                l++
              )
                (0 === u && (0 === l || l === f - 1)) ||
                  (u === f - 1 && 0 === l) ||
                  t.setRegion(this.alignmentPatternCenters[l] - 2, w, 5, 5);
            return (
              t.setRegion(6, 9, 1, e - 17),
              t.setRegion(9, 6, e - 17, 1),
              this.versionNumber > 6 &&
                (t.setRegion(e - 11, 0, 3, 6), t.setRegion(0, e - 11, 6, 3)),
              t
            );
          }),
          (e.prototype.toString = function () {
            return '' + this.versionNumber;
          }),
          (e.VERSION_DECODE_INFO = Int32Array.from([
            31892, 34236, 39577, 42195, 48118, 51042, 55367, 58893, 63784,
            68472, 70749, 76311, 79154, 84390, 87683, 92361, 96236, 102084,
            102881, 110507, 110734, 117786, 119615, 126325, 127568, 133589,
            136944, 141498, 145311, 150283, 152622, 158308, 161089, 167017,
          ])),
          (e.VERSIONS = [
            new e(
              1,
              new Int32Array(0),
              new f.default(7, new u.default(1, 19)),
              new f.default(10, new u.default(1, 16)),
              new f.default(13, new u.default(1, 13)),
              new f.default(17, new u.default(1, 9)),
            ),
            new e(
              2,
              Int32Array.from([6, 18]),
              new f.default(10, new u.default(1, 34)),
              new f.default(16, new u.default(1, 28)),
              new f.default(22, new u.default(1, 22)),
              new f.default(28, new u.default(1, 16)),
            ),
            new e(
              3,
              Int32Array.from([6, 22]),
              new f.default(15, new u.default(1, 55)),
              new f.default(26, new u.default(1, 44)),
              new f.default(18, new u.default(2, 17)),
              new f.default(22, new u.default(2, 13)),
            ),
            new e(
              4,
              Int32Array.from([6, 26]),
              new f.default(20, new u.default(1, 80)),
              new f.default(18, new u.default(2, 32)),
              new f.default(26, new u.default(2, 24)),
              new f.default(16, new u.default(4, 9)),
            ),
            new e(
              5,
              Int32Array.from([6, 30]),
              new f.default(26, new u.default(1, 108)),
              new f.default(24, new u.default(2, 43)),
              new f.default(18, new u.default(2, 15), new u.default(2, 16)),
              new f.default(22, new u.default(2, 11), new u.default(2, 12)),
            ),
            new e(
              6,
              Int32Array.from([6, 34]),
              new f.default(18, new u.default(2, 68)),
              new f.default(16, new u.default(4, 27)),
              new f.default(24, new u.default(4, 19)),
              new f.default(28, new u.default(4, 15)),
            ),
            new e(
              7,
              Int32Array.from([6, 22, 38]),
              new f.default(20, new u.default(2, 78)),
              new f.default(18, new u.default(4, 31)),
              new f.default(18, new u.default(2, 14), new u.default(4, 15)),
              new f.default(26, new u.default(4, 13), new u.default(1, 14)),
            ),
            new e(
              8,
              Int32Array.from([6, 24, 42]),
              new f.default(24, new u.default(2, 97)),
              new f.default(22, new u.default(2, 38), new u.default(2, 39)),
              new f.default(22, new u.default(4, 18), new u.default(2, 19)),
              new f.default(26, new u.default(4, 14), new u.default(2, 15)),
            ),
            new e(
              9,
              Int32Array.from([6, 26, 46]),
              new f.default(30, new u.default(2, 116)),
              new f.default(22, new u.default(3, 36), new u.default(2, 37)),
              new f.default(20, new u.default(4, 16), new u.default(4, 17)),
              new f.default(24, new u.default(4, 12), new u.default(4, 13)),
            ),
            new e(
              10,
              Int32Array.from([6, 28, 50]),
              new f.default(18, new u.default(2, 68), new u.default(2, 69)),
              new f.default(26, new u.default(4, 43), new u.default(1, 44)),
              new f.default(24, new u.default(6, 19), new u.default(2, 20)),
              new f.default(28, new u.default(6, 15), new u.default(2, 16)),
            ),
            new e(
              11,
              Int32Array.from([6, 30, 54]),
              new f.default(20, new u.default(4, 81)),
              new f.default(30, new u.default(1, 50), new u.default(4, 51)),
              new f.default(28, new u.default(4, 22), new u.default(4, 23)),
              new f.default(24, new u.default(3, 12), new u.default(8, 13)),
            ),
            new e(
              12,
              Int32Array.from([6, 32, 58]),
              new f.default(24, new u.default(2, 92), new u.default(2, 93)),
              new f.default(22, new u.default(6, 36), new u.default(2, 37)),
              new f.default(26, new u.default(4, 20), new u.default(6, 21)),
              new f.default(28, new u.default(7, 14), new u.default(4, 15)),
            ),
            new e(
              13,
              Int32Array.from([6, 34, 62]),
              new f.default(26, new u.default(4, 107)),
              new f.default(22, new u.default(8, 37), new u.default(1, 38)),
              new f.default(24, new u.default(8, 20), new u.default(4, 21)),
              new f.default(22, new u.default(12, 11), new u.default(4, 12)),
            ),
            new e(
              14,
              Int32Array.from([6, 26, 46, 66]),
              new f.default(30, new u.default(3, 115), new u.default(1, 116)),
              new f.default(24, new u.default(4, 40), new u.default(5, 41)),
              new f.default(20, new u.default(11, 16), new u.default(5, 17)),
              new f.default(24, new u.default(11, 12), new u.default(5, 13)),
            ),
            new e(
              15,
              Int32Array.from([6, 26, 48, 70]),
              new f.default(22, new u.default(5, 87), new u.default(1, 88)),
              new f.default(24, new u.default(5, 41), new u.default(5, 42)),
              new f.default(30, new u.default(5, 24), new u.default(7, 25)),
              new f.default(24, new u.default(11, 12), new u.default(7, 13)),
            ),
            new e(
              16,
              Int32Array.from([6, 26, 50, 74]),
              new f.default(24, new u.default(5, 98), new u.default(1, 99)),
              new f.default(28, new u.default(7, 45), new u.default(3, 46)),
              new f.default(24, new u.default(15, 19), new u.default(2, 20)),
              new f.default(30, new u.default(3, 15), new u.default(13, 16)),
            ),
            new e(
              17,
              Int32Array.from([6, 30, 54, 78]),
              new f.default(28, new u.default(1, 107), new u.default(5, 108)),
              new f.default(28, new u.default(10, 46), new u.default(1, 47)),
              new f.default(28, new u.default(1, 22), new u.default(15, 23)),
              new f.default(28, new u.default(2, 14), new u.default(17, 15)),
            ),
            new e(
              18,
              Int32Array.from([6, 30, 56, 82]),
              new f.default(30, new u.default(5, 120), new u.default(1, 121)),
              new f.default(26, new u.default(9, 43), new u.default(4, 44)),
              new f.default(28, new u.default(17, 22), new u.default(1, 23)),
              new f.default(28, new u.default(2, 14), new u.default(19, 15)),
            ),
            new e(
              19,
              Int32Array.from([6, 30, 58, 86]),
              new f.default(28, new u.default(3, 113), new u.default(4, 114)),
              new f.default(26, new u.default(3, 44), new u.default(11, 45)),
              new f.default(26, new u.default(17, 21), new u.default(4, 22)),
              new f.default(26, new u.default(9, 13), new u.default(16, 14)),
            ),
            new e(
              20,
              Int32Array.from([6, 34, 62, 90]),
              new f.default(28, new u.default(3, 107), new u.default(5, 108)),
              new f.default(26, new u.default(3, 41), new u.default(13, 42)),
              new f.default(30, new u.default(15, 24), new u.default(5, 25)),
              new f.default(28, new u.default(15, 15), new u.default(10, 16)),
            ),
            new e(
              21,
              Int32Array.from([6, 28, 50, 72, 94]),
              new f.default(28, new u.default(4, 116), new u.default(4, 117)),
              new f.default(26, new u.default(17, 42)),
              new f.default(28, new u.default(17, 22), new u.default(6, 23)),
              new f.default(30, new u.default(19, 16), new u.default(6, 17)),
            ),
            new e(
              22,
              Int32Array.from([6, 26, 50, 74, 98]),
              new f.default(28, new u.default(2, 111), new u.default(7, 112)),
              new f.default(28, new u.default(17, 46)),
              new f.default(30, new u.default(7, 24), new u.default(16, 25)),
              new f.default(24, new u.default(34, 13)),
            ),
            new e(
              23,
              Int32Array.from([6, 30, 54, 78, 102]),
              new f.default(30, new u.default(4, 121), new u.default(5, 122)),
              new f.default(28, new u.default(4, 47), new u.default(14, 48)),
              new f.default(30, new u.default(11, 24), new u.default(14, 25)),
              new f.default(30, new u.default(16, 15), new u.default(14, 16)),
            ),
            new e(
              24,
              Int32Array.from([6, 28, 54, 80, 106]),
              new f.default(30, new u.default(6, 117), new u.default(4, 118)),
              new f.default(28, new u.default(6, 45), new u.default(14, 46)),
              new f.default(30, new u.default(11, 24), new u.default(16, 25)),
              new f.default(30, new u.default(30, 16), new u.default(2, 17)),
            ),
            new e(
              25,
              Int32Array.from([6, 32, 58, 84, 110]),
              new f.default(26, new u.default(8, 106), new u.default(4, 107)),
              new f.default(28, new u.default(8, 47), new u.default(13, 48)),
              new f.default(30, new u.default(7, 24), new u.default(22, 25)),
              new f.default(30, new u.default(22, 15), new u.default(13, 16)),
            ),
            new e(
              26,
              Int32Array.from([6, 30, 58, 86, 114]),
              new f.default(28, new u.default(10, 114), new u.default(2, 115)),
              new f.default(28, new u.default(19, 46), new u.default(4, 47)),
              new f.default(28, new u.default(28, 22), new u.default(6, 23)),
              new f.default(30, new u.default(33, 16), new u.default(4, 17)),
            ),
            new e(
              27,
              Int32Array.from([6, 34, 62, 90, 118]),
              new f.default(30, new u.default(8, 122), new u.default(4, 123)),
              new f.default(28, new u.default(22, 45), new u.default(3, 46)),
              new f.default(30, new u.default(8, 23), new u.default(26, 24)),
              new f.default(30, new u.default(12, 15), new u.default(28, 16)),
            ),
            new e(
              28,
              Int32Array.from([6, 26, 50, 74, 98, 122]),
              new f.default(30, new u.default(3, 117), new u.default(10, 118)),
              new f.default(28, new u.default(3, 45), new u.default(23, 46)),
              new f.default(30, new u.default(4, 24), new u.default(31, 25)),
              new f.default(30, new u.default(11, 15), new u.default(31, 16)),
            ),
            new e(
              29,
              Int32Array.from([6, 30, 54, 78, 102, 126]),
              new f.default(30, new u.default(7, 116), new u.default(7, 117)),
              new f.default(28, new u.default(21, 45), new u.default(7, 46)),
              new f.default(30, new u.default(1, 23), new u.default(37, 24)),
              new f.default(30, new u.default(19, 15), new u.default(26, 16)),
            ),
            new e(
              30,
              Int32Array.from([6, 26, 52, 78, 104, 130]),
              new f.default(30, new u.default(5, 115), new u.default(10, 116)),
              new f.default(28, new u.default(19, 47), new u.default(10, 48)),
              new f.default(30, new u.default(15, 24), new u.default(25, 25)),
              new f.default(30, new u.default(23, 15), new u.default(25, 16)),
            ),
            new e(
              31,
              Int32Array.from([6, 30, 56, 82, 108, 134]),
              new f.default(30, new u.default(13, 115), new u.default(3, 116)),
              new f.default(28, new u.default(2, 46), new u.default(29, 47)),
              new f.default(30, new u.default(42, 24), new u.default(1, 25)),
              new f.default(30, new u.default(23, 15), new u.default(28, 16)),
            ),
            new e(
              32,
              Int32Array.from([6, 34, 60, 86, 112, 138]),
              new f.default(30, new u.default(17, 115)),
              new f.default(28, new u.default(10, 46), new u.default(23, 47)),
              new f.default(30, new u.default(10, 24), new u.default(35, 25)),
              new f.default(30, new u.default(19, 15), new u.default(35, 16)),
            ),
            new e(
              33,
              Int32Array.from([6, 30, 58, 86, 114, 142]),
              new f.default(30, new u.default(17, 115), new u.default(1, 116)),
              new f.default(28, new u.default(14, 46), new u.default(21, 47)),
              new f.default(30, new u.default(29, 24), new u.default(19, 25)),
              new f.default(30, new u.default(11, 15), new u.default(46, 16)),
            ),
            new e(
              34,
              Int32Array.from([6, 34, 62, 90, 118, 146]),
              new f.default(30, new u.default(13, 115), new u.default(6, 116)),
              new f.default(28, new u.default(14, 46), new u.default(23, 47)),
              new f.default(30, new u.default(44, 24), new u.default(7, 25)),
              new f.default(30, new u.default(59, 16), new u.default(1, 17)),
            ),
            new e(
              35,
              Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
              new f.default(30, new u.default(12, 121), new u.default(7, 122)),
              new f.default(28, new u.default(12, 47), new u.default(26, 48)),
              new f.default(30, new u.default(39, 24), new u.default(14, 25)),
              new f.default(30, new u.default(22, 15), new u.default(41, 16)),
            ),
            new e(
              36,
              Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
              new f.default(30, new u.default(6, 121), new u.default(14, 122)),
              new f.default(28, new u.default(6, 47), new u.default(34, 48)),
              new f.default(30, new u.default(46, 24), new u.default(10, 25)),
              new f.default(30, new u.default(2, 15), new u.default(64, 16)),
            ),
            new e(
              37,
              Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
              new f.default(30, new u.default(17, 122), new u.default(4, 123)),
              new f.default(28, new u.default(29, 46), new u.default(14, 47)),
              new f.default(30, new u.default(49, 24), new u.default(10, 25)),
              new f.default(30, new u.default(24, 15), new u.default(46, 16)),
            ),
            new e(
              38,
              Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
              new f.default(30, new u.default(4, 122), new u.default(18, 123)),
              new f.default(28, new u.default(13, 46), new u.default(32, 47)),
              new f.default(30, new u.default(48, 24), new u.default(14, 25)),
              new f.default(30, new u.default(42, 15), new u.default(32, 16)),
            ),
            new e(
              39,
              Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
              new f.default(30, new u.default(20, 117), new u.default(4, 118)),
              new f.default(28, new u.default(40, 47), new u.default(7, 48)),
              new f.default(30, new u.default(43, 24), new u.default(22, 25)),
              new f.default(30, new u.default(10, 15), new u.default(67, 16)),
            ),
            new e(
              40,
              Int32Array.from([6, 30, 58, 86, 114, 142, 170]),
              new f.default(30, new u.default(19, 118), new u.default(6, 119)),
              new f.default(28, new u.default(18, 47), new u.default(31, 48)),
              new f.default(30, new u.default(34, 24), new u.default(34, 25)),
              new f.default(30, new u.default(20, 15), new u.default(61, 16)),
            ),
          ]),
          e
        );
      })(),
      m = i;
  },
  1124,
  [1024, 1125, 1127, 1128, 1029, 1014],
);
