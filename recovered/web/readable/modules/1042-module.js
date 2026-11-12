// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1042; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return T;
        },
      }));
    var e,
      n = t(r(d[0])),
      o = t(r(d[1])),
      u = t(r(d[2])),
      i = t(r(d[3])),
      f = t(r(d[4])),
      c = t(r(d[5])),
      L = t(r(d[6]));
    !(function (t) {
      ((t[(t.UPPER = 0)] = 'UPPER'),
        (t[(t.LOWER = 1)] = 'LOWER'),
        (t[(t.MIXED = 2)] = 'MIXED'),
        (t[(t.DIGIT = 3)] = 'DIGIT'),
        (t[(t.PUNCT = 4)] = 'PUNCT'),
        (t[(t.BINARY = 5)] = 'BINARY'));
    })(e || (e = {}));
    var T = (function () {
      function t() {}
      return (
        (t.prototype.decode = function (e) {
          this.ddata = e;
          var o = e.getBits(),
            u = this.extractBits(o),
            i = this.correctBits(u),
            f = t.convertBoolArrayToByteArray(i),
            c = t.getEncodedData(i),
            L = new n.default(f, c, null, null);
          return (L.setNumBits(i.length), L);
        }),
        (t.highLevelDecode = function (t) {
          return this.getEncodedData(t);
        }),
        (t.getEncodedData = function (n) {
          for (
            var o = n.length, u = e.UPPER, i = e.UPPER, f = '', L = 0;
            L < o;

          )
            if (i === e.BINARY) {
              if (o - L < 5) break;
              var T = t.readCode(n, L, 5);
              if (((L += 5), 0 === T)) {
                if (o - L < 11) break;
                ((T = t.readCode(n, L, 11) + 31), (L += 11));
              }
              for (var s = 0; s < T; s++) {
                if (o - L < 8) {
                  L = o;
                  break;
                }
                var l = t.readCode(n, L, 8);
                ((f += c.default.castAsNonUtf8Char(l)), (L += 8));
              }
              i = u;
            } else {
              var _ = i === e.DIGIT ? 4 : 5;
              if (o - L < _) break;
              l = t.readCode(n, L, _);
              L += _;
              var C = t.getCharacter(i, l);
              C.startsWith('CTRL_')
                ? ((u = i),
                  (i = t.getTable(C.charAt(5))),
                  'L' === C.charAt(6) && (u = i))
                : ((f += C), (i = u));
            }
          return f;
        }),
        (t.getTable = function (t) {
          switch (t) {
            case 'L':
              return e.LOWER;
            case 'P':
              return e.PUNCT;
            case 'M':
              return e.MIXED;
            case 'D':
              return e.DIGIT;
            case 'B':
              return e.BINARY;
            default:
              return e.UPPER;
          }
        }),
        (t.getCharacter = function (n, o) {
          switch (n) {
            case e.UPPER:
              return t.UPPER_TABLE[o];
            case e.LOWER:
              return t.LOWER_TABLE[o];
            case e.MIXED:
              return t.MIXED_TABLE[o];
            case e.PUNCT:
              return t.PUNCT_TABLE[o];
            case e.DIGIT:
              return t.DIGIT_TABLE[o];
            default:
              throw new i.default('Bad table');
          }
        }),
        (t.prototype.correctBits = function (e) {
          var n, i;
          this.ddata.getNbLayers() <= 2
            ? ((i = 6), (n = o.default.AZTEC_DATA_6))
            : this.ddata.getNbLayers() <= 8
              ? ((i = 8), (n = o.default.AZTEC_DATA_8))
              : this.ddata.getNbLayers() <= 22
                ? ((i = 10), (n = o.default.AZTEC_DATA_10))
                : ((i = 12), (n = o.default.AZTEC_DATA_12));
          var c = this.ddata.getNbDatablocks(),
            L = e.length / i;
          if (L < c) throw new f.default();
          for (
            var T = e.length % i, s = new Int32Array(L), l = 0;
            l < L;
            l++, T += i
          )
            s[l] = t.readCode(e, T, i);
          try {
            new u.default(n).decode(s, L - c);
          } catch (t) {
            throw new f.default(t);
          }
          var _ = (1 << i) - 1,
            C = 0;
          for (l = 0; l < c; l++) {
            if (0 === (E = s[l]) || E === _) throw new f.default();
            (1 !== E && E !== _ - 1) || C++;
          }
          var A = new Array(c * i - C),
            R = 0;
          for (l = 0; l < c; l++) {
            var E;
            if (1 === (E = s[l]) || E === _ - 1)
              (A.fill(E > 1, R, R + i - 1), (R += i - 1));
            else for (var v = i - 1; v >= 0; --v) A[R++] = !!(E & (1 << v));
          }
          return A;
        }),
        (t.prototype.extractBits = function (t) {
          var e = this.ddata.isCompact(),
            n = this.ddata.getNbLayers(),
            o = (e ? 11 : 14) + 4 * n,
            u = new Int32Array(o),
            i = new Array(this.totalBitsInLayer(n, e));
          if (e) for (var f = 0; f < u.length; f++) u[f] = f;
          else {
            var c =
                o +
                1 +
                2 *
                  L.default.truncDivision(
                    L.default.truncDivision(o, 2) - 1,
                    15,
                  ),
              T = o / 2,
              s = L.default.truncDivision(c, 2);
            for (f = 0; f < T; f++) {
              var l = f + L.default.truncDivision(f, 15);
              ((u[T - f - 1] = s - l - 1), (u[T + f] = s + l + 1));
            }
          }
          f = 0;
          for (var _ = 0; f < n; f++) {
            for (
              var C = 4 * (n - f) + (e ? 9 : 12),
                A = 2 * f,
                R = o - 1 - A,
                E = 0;
              E < C;
              E++
            )
              for (var v = 2 * E, h = 0; h < 2; h++)
                ((i[_ + v + h] = t.get(u[A + h], u[A + E])),
                  (i[_ + 2 * C + v + h] = t.get(u[A + E], u[R - h])),
                  (i[_ + 4 * C + v + h] = t.get(u[R - h], u[R - E])),
                  (i[_ + 6 * C + v + h] = t.get(u[R - E], u[A + h])));
            _ += 8 * C;
          }
          return i;
        }),
        (t.readCode = function (t, e, n) {
          for (var o = 0, u = e; u < e + n; u++) ((o <<= 1), t[u] && (o |= 1));
          return o;
        }),
        (t.readByte = function (e, n) {
          var o = e.length - n;
          return o >= 8 ? t.readCode(e, n, 8) : t.readCode(e, n, o) << (8 - o);
        }),
        (t.convertBoolArrayToByteArray = function (e) {
          for (
            var n = new Uint8Array((e.length + 7) / 8), o = 0;
            o < n.length;
            o++
          )
            n[o] = t.readByte(e, 8 * o);
          return n;
        }),
        (t.prototype.totalBitsInLayer = function (t, e) {
          return ((e ? 88 : 112) + 16 * t) * t;
        }),
        (t.UPPER_TABLE = [
          'CTRL_PS',
          ' ',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
          'CTRL_LL',
          'CTRL_ML',
          'CTRL_DL',
          'CTRL_BS',
        ]),
        (t.LOWER_TABLE = [
          'CTRL_PS',
          ' ',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'u',
          'v',
          'w',
          'x',
          'y',
          'z',
          'CTRL_US',
          'CTRL_ML',
          'CTRL_DL',
          'CTRL_BS',
        ]),
        (t.MIXED_TABLE = [
          'CTRL_PS',
          ' ',
          '\x01',
          '\x02',
          '\x03',
          '\x04',
          '\x05',
          '\x06',
          '\x07',
          '\b',
          '\t',
          '\n',
          '\v',
          '\f',
          '\r',
          '\x1b',
          '\x1c',
          '\x1d',
          '\x1e',
          '\x1f',
          '@',
          '\\',
          '^',
          '_',
          '`',
          '|',
          '~',
          '\x7f',
          'CTRL_LL',
          'CTRL_UL',
          'CTRL_PL',
          'CTRL_BS',
        ]),
        (t.PUNCT_TABLE = [
          '',
          '\r',
          '\r\n',
          '. ',
          ', ',
          ': ',
          '!',
          '"',
          '#',
          '$',
          '%',
          '&',
          "'",
          '(',
          ')',
          '*',
          '+',
          ',',
          '-',
          '.',
          '/',
          ':',
          ';',
          '<',
          '=',
          '>',
          '?',
          '[',
          ']',
          '{',
          '}',
          'CTRL_UL',
        ]),
        (t.DIGIT_TABLE = [
          'CTRL_PS',
          ' ',
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          ',',
          '.',
          'CTRL_UL',
          'CTRL_US',
        ]),
        t
      );
    })();
  },
  1042,
  [1043, 1044, 1048, 1050, 1029, 1026, 1023],
);
