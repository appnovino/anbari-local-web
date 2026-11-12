// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1183; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return E;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      i = e(r(d[2])),
      o = e(r(d[3])),
      l = e(r(d[4])),
      u = e(r(d[5])),
      f = e(r(d[6])),
      s = e(r(d[7])),
      c = e(r(d[8])),
      h = e(r(d[9])),
      p = e(r(d[10])),
      B = e(r(d[11])),
      v = e(r(d[12])),
      y = e(r(d[13])),
      w =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            i = 0;
          if (n) return n.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && i >= e.length && (e = void 0),
                  { value: e && e[i++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      E = (function () {
        function e() {}
        return (
          (e.calculateMaskPenalty = function (e) {
            return (
              s.default.applyMaskPenaltyRule1(e) +
              s.default.applyMaskPenaltyRule2(e) +
              s.default.applyMaskPenaltyRule3(e) +
              s.default.applyMaskPenaltyRule4(e)
            );
          }),
          (e.encode = function (o, l, s) {
            void 0 === s && (s = null);
            var B = e.DEFAULT_BYTE_MODE_ENCODING,
              v = null !== s && void 0 !== s.get(t.default.CHARACTER_SET);
            v && (B = s.get(t.default.CHARACTER_SET).toString());
            var w = this.chooseMode(o, B),
              E = new n.default();
            if (
              w === u.default.BYTE &&
              (v || e.DEFAULT_BYTE_MODE_ENCODING !== B)
            ) {
              var A = i.default.getCharacterSetECIByName(B);
              void 0 !== A && this.appendECI(A, E);
            }
            this.appendModeInfo(w, E);
            var C,
              m = new n.default();
            if (
              (this.appendBytes(o, w, m, B),
              null !== s && void 0 !== s.get(t.default.QR_VERSION))
            ) {
              var I = Number.parseInt(
                s.get(t.default.QR_VERSION).toString(),
                10,
              );
              C = f.default.getVersionForNumber(I);
              var N = this.calculateBitsNeeded(w, E, m, C);
              if (!this.willFit(N, C, l))
                throw new y.default('Data too big for requested version');
            } else C = this.recommendVersion(l, w, E, m);
            var M = new n.default();
            M.appendBitArray(E);
            var b = w === u.default.BYTE ? m.getSizeInBytes() : o.length;
            (this.appendLengthInfo(b, C, w, M), M.appendBitArray(m));
            var S = C.getECBlocksForLevel(l),
              D = C.getTotalCodewords() - S.getTotalECCodewords();
            this.terminateBits(D, M);
            var _ = this.interleaveWithECBytes(
                M,
                C.getTotalCodewords(),
                D,
                S.getNumBlocks(),
              ),
              T = new h.default();
            (T.setECLevel(l), T.setMode(w), T.setVersion(C));
            var R = C.getDimensionForVersion(),
              k = new c.default(R, R),
              F = this.chooseMaskPattern(_, l, C, k);
            return (
              T.setMaskPattern(F),
              p.default.buildMatrix(_, l, C, F, k),
              T.setMatrix(k),
              T
            );
          }),
          (e.recommendVersion = function (e, t, n, i) {
            var o = this.calculateBitsNeeded(
                t,
                n,
                i,
                f.default.getVersionForNumber(1),
              ),
              l = this.chooseVersion(o, e),
              u = this.calculateBitsNeeded(t, n, i, l);
            return this.chooseVersion(u, e);
          }),
          (e.calculateBitsNeeded = function (e, t, n, i) {
            return t.getSize() + e.getCharacterCountBits(i) + n.getSize();
          }),
          (e.getAlphanumericCode = function (t) {
            return t < e.ALPHANUMERIC_TABLE.length
              ? e.ALPHANUMERIC_TABLE[t]
              : -1;
          }),
          (e.chooseMode = function (t, n) {
            if (
              (void 0 === n && (n = null),
              i.default.SJIS.getName() === n && this.isOnlyDoubleByteKanji(t))
            )
              return u.default.KANJI;
            for (var o = !1, l = !1, f = 0, s = t.length; f < s; ++f) {
              var c = t.charAt(f);
              if (e.isDigit(c)) o = !0;
              else {
                if (-1 === this.getAlphanumericCode(c.charCodeAt(0)))
                  return u.default.BYTE;
                l = !0;
              }
            }
            return l
              ? u.default.ALPHANUMERIC
              : o
                ? u.default.NUMERIC
                : u.default.BYTE;
          }),
          (e.isOnlyDoubleByteKanji = function (e) {
            var t;
            try {
              t = B.default.encode(e, i.default.SJIS);
            } catch (e) {
              return !1;
            }
            var n = t.length;
            if (n % 2 != 0) return !1;
            for (var o = 0; o < n; o += 2) {
              var l = 255 & t[o];
              if ((l < 129 || l > 159) && (l < 224 || l > 235)) return !1;
            }
            return !0;
          }),
          (e.chooseMaskPattern = function (e, t, n, i) {
            for (
              var o = Number.MAX_SAFE_INTEGER, l = -1, u = 0;
              u < h.default.NUM_MASK_PATTERNS;
              u++
            ) {
              p.default.buildMatrix(e, t, n, u, i);
              var f = this.calculateMaskPenalty(i);
              f < o && ((o = f), (l = u));
            }
            return l;
          }),
          (e.chooseVersion = function (t, n) {
            for (var i = 1; i <= 40; i++) {
              var o = f.default.getVersionForNumber(i);
              if (e.willFit(t, o, n)) return o;
            }
            throw new y.default('Data too big');
          }),
          (e.willFit = function (e, t, n) {
            return (
              t.getTotalCodewords() -
                t.getECBlocksForLevel(n).getTotalECCodewords() >=
              (e + 7) / 8
            );
          }),
          (e.terminateBits = function (e, t) {
            var n = 8 * e;
            if (t.getSize() > n)
              throw new y.default(
                'data bits cannot fit in the QR Code' + t.getSize() + ' > ' + n,
              );
            for (var i = 0; i < 4 && t.getSize() < n; ++i) t.appendBit(!1);
            var o = 7 & t.getSize();
            if (o > 0) for (i = o; i < 8; i++) t.appendBit(!1);
            var l = e - t.getSizeInBytes();
            for (i = 0; i < l; ++i) t.appendBits(1 & i ? 17 : 236, 8);
            if (t.getSize() !== n)
              throw new y.default('Bits size does not equal capacity');
          }),
          (e.getNumDataBytesAndNumECBytesForBlockID = function (
            e,
            t,
            n,
            i,
            o,
            l,
          ) {
            if (i >= n) throw new y.default('Block ID too large');
            var u = e % n,
              f = n - u,
              s = Math.floor(e / n),
              c = s + 1,
              h = Math.floor(t / n),
              p = h + 1,
              B = s - h,
              v = c - p;
            if (B !== v) throw new y.default('EC bytes mismatch');
            if (n !== f + u) throw new y.default('RS blocks mismatch');
            if (e !== (h + B) * f + (p + v) * u)
              throw new y.default('Total bytes mismatch');
            i < f ? ((o[0] = h), (l[0] = B)) : ((o[0] = p), (l[0] = v));
          }),
          (e.interleaveWithECBytes = function (t, i, o, l) {
            var u, f, s, c;
            if (t.getSizeInBytes() !== o)
              throw new y.default(
                'Number of bits and data bytes does not match',
              );
            for (var h = 0, p = 0, B = 0, E = new Array(), A = 0; A < l; ++A) {
              var C = new Int32Array(1),
                m = new Int32Array(1);
              e.getNumDataBytesAndNumECBytesForBlockID(i, o, l, A, C, m);
              var I = C[0],
                N = new Uint8Array(I);
              t.toBytes(8 * h, N, 0, I);
              var M = e.generateECBytes(N, m[0]);
              (E.push(new v.default(N, M)),
                (p = Math.max(p, I)),
                (B = Math.max(B, M.length)),
                (h += C[0]));
            }
            if (o !== h)
              throw new y.default('Data bytes does not match offset');
            var b = new n.default();
            for (A = 0; A < p; ++A)
              try {
                for (
                  var S = ((u = void 0), w(E)), D = S.next();
                  !D.done;
                  D = S.next()
                ) {
                  A < (N = D.value.getDataBytes()).length &&
                    b.appendBits(N[A], 8);
                }
              } catch (e) {
                u = { error: e };
              } finally {
                try {
                  D && !D.done && (f = S.return) && f.call(S);
                } finally {
                  if (u) throw u.error;
                }
              }
            for (A = 0; A < B; ++A)
              try {
                for (
                  var _ = ((s = void 0), w(E)), T = _.next();
                  !T.done;
                  T = _.next()
                ) {
                  A < (M = T.value.getErrorCorrectionBytes()).length &&
                    b.appendBits(M[A], 8);
                }
              } catch (e) {
                s = { error: e };
              } finally {
                try {
                  T && !T.done && (c = _.return) && c.call(_);
                } finally {
                  if (s) throw s.error;
                }
              }
            if (i !== b.getSizeInBytes())
              throw new y.default(
                'Interleaving error: ' +
                  i +
                  ' and ' +
                  b.getSizeInBytes() +
                  ' differ.',
              );
            return b;
          }),
          (e.generateECBytes = function (e, t) {
            for (var n = e.length, i = new Int32Array(n + t), u = 0; u < n; u++)
              i[u] = 255 & e[u];
            new l.default(o.default.QR_CODE_FIELD_256).encode(i, t);
            var f = new Uint8Array(t);
            for (u = 0; u < t; u++) f[u] = i[n + u];
            return f;
          }),
          (e.appendModeInfo = function (e, t) {
            t.appendBits(e.getBits(), 4);
          }),
          (e.appendLengthInfo = function (e, t, n, i) {
            var o = n.getCharacterCountBits(t);
            if (e >= 1 << o)
              throw new y.default(e + ' is bigger than ' + ((1 << o) - 1));
            i.appendBits(e, o);
          }),
          (e.appendBytes = function (t, n, i, o) {
            switch (n) {
              case u.default.NUMERIC:
                e.appendNumericBytes(t, i);
                break;
              case u.default.ALPHANUMERIC:
                e.appendAlphanumericBytes(t, i);
                break;
              case u.default.BYTE:
                e.append8BitBytes(t, i, o);
                break;
              case u.default.KANJI:
                e.appendKanjiBytes(t, i);
                break;
              default:
                throw new y.default('Invalid mode: ' + n);
            }
          }),
          (e.getDigit = function (e) {
            return e.charCodeAt(0) - 48;
          }),
          (e.isDigit = function (t) {
            var n = e.getDigit(t);
            return n >= 0 && n <= 9;
          }),
          (e.appendNumericBytes = function (t, n) {
            for (var i = t.length, o = 0; o < i; ) {
              var l = e.getDigit(t.charAt(o));
              if (o + 2 < i) {
                var u = e.getDigit(t.charAt(o + 1)),
                  f = e.getDigit(t.charAt(o + 2));
                (n.appendBits(100 * l + 10 * u + f, 10), (o += 3));
              } else if (o + 1 < i) {
                u = e.getDigit(t.charAt(o + 1));
                (n.appendBits(10 * l + u, 7), (o += 2));
              } else (n.appendBits(l, 4), o++);
            }
          }),
          (e.appendAlphanumericBytes = function (t, n) {
            for (var i = t.length, o = 0; o < i; ) {
              var l = e.getAlphanumericCode(t.charCodeAt(o));
              if (-1 === l) throw new y.default();
              if (o + 1 < i) {
                var u = e.getAlphanumericCode(t.charCodeAt(o + 1));
                if (-1 === u) throw new y.default();
                (n.appendBits(45 * l + u, 11), (o += 2));
              } else (n.appendBits(l, 6), o++);
            }
          }),
          (e.append8BitBytes = function (e, t, n) {
            var i;
            try {
              i = B.default.encode(e, n);
            } catch (e) {
              throw new y.default(e);
            }
            for (var o = 0, l = i.length; o !== l; o++) {
              var u = i[o];
              t.appendBits(u, 8);
            }
          }),
          (e.appendKanjiBytes = function (e, t) {
            var n;
            try {
              n = B.default.encode(e, i.default.SJIS);
            } catch (e) {
              throw new y.default(e);
            }
            for (var o = n.length, l = 0; l < o; l += 2) {
              var u = (((255 & n[l]) << 8) & 4294967295) | (255 & n[l + 1]),
                f = -1;
              if (
                (u >= 33088 && u <= 40956
                  ? (f = u - 33088)
                  : u >= 57408 && u <= 60351 && (f = u - 49472),
                -1 === f)
              )
                throw new y.default('Invalid byte sequence');
              var s = 192 * (f >> 8) + (255 & f);
              t.appendBits(s, 13);
            }
          }),
          (e.appendECI = function (e, t) {
            (t.appendBits(u.default.ECI.getBits(), 4),
              t.appendBits(e.getValue(), 8));
          }),
          (e.ALPHANUMERIC_TABLE = Int32Array.from([
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
            -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 36, -1,
            -1, -1, 37, 38, -1, -1, -1, -1, 39, 40, -1, 41, 42, 43, 0, 1, 2, 3,
            4, 5, 6, 7, 8, 9, 44, -1, -1, -1, -1, -1, -1, 10, 11, 12, 13, 14,
            15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
            32, 33, 34, 35, -1, -1, -1, -1, -1,
          ])),
          (e.DEFAULT_BYTE_MODE_ENCODING = i.default.UTF8.getName()),
          e
        );
      })();
  },
  1183,
  [
    1182, 1018, 1028, 1044, 1184, 1132, 1124, 1185, 1186, 1187, 1188, 1030,
    1190, 1189,
  ],
);
