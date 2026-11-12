// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1171; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return N;
        },
      }));
    var _,
      O,
      C = e(r(d[0])),
      E = e(r(d[1])),
      T = e(r(d[2])),
      t = e(r(d[3])),
      A = e(r(d[4])),
      I = e(r(d[5])),
      M = e(r(d[6])),
      n = e(r(d[7])),
      c = e(r(d[8])),
      s = e(r(d[9]));
    function P() {
      if ('undefined' != typeof window) return window.BigInt || null;
      if ('undefined' != typeof globalThis) return globalThis.BigInt || null;
      if ('undefined' != typeof self) return self.BigInt || null;
      throw new Error("Can't search globals for BigInt!");
    }
    function D(e) {
      if ((void 0 === O && (O = P()), null === O))
        throw new Error('BigInt is not supported!');
      return O(e);
    }
    function L() {
      var e = [];
      e[0] = D(1);
      var _ = D(900);
      e[1] = _;
      for (var O = 2; O < 16; O++) e[O] = e[O - 1] * _;
      return e;
    }
    !(function (e) {
      ((e[(e.ALPHA = 0)] = 'ALPHA'),
        (e[(e.LOWER = 1)] = 'LOWER'),
        (e[(e.MIXED = 2)] = 'MIXED'),
        (e[(e.PUNCT = 3)] = 'PUNCT'),
        (e[(e.ALPHA_SHIFT = 4)] = 'ALPHA_SHIFT'),
        (e[(e.PUNCT_SHIFT = 5)] = 'PUNCT_SHIFT'));
    })(_ || (_ = {}));
    var N = (function () {
      function e() {}
      return (
        (e.decode = function (_, O) {
          var A = new I.default(''),
            M = E.default.ISO8859_1;
          A.enableDecoding(M);
          for (var n = 1, c = _[n++], s = new t.default(); n < _[0]; ) {
            switch (c) {
              case e.TEXT_COMPACTION_MODE_LATCH:
                n = e.textCompaction(_, n, A);
                break;
              case e.BYTE_COMPACTION_MODE_LATCH:
              case e.BYTE_COMPACTION_MODE_LATCH_6:
                n = e.byteCompaction(c, _, M, n, A);
                break;
              case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                A.append(_[n++]);
                break;
              case e.NUMERIC_COMPACTION_MODE_LATCH:
                n = e.numericCompaction(_, n, A);
                break;
              case e.ECI_CHARSET:
                E.default.getCharacterSetECIByValue(_[n++]);
                break;
              case e.ECI_GENERAL_PURPOSE:
                n += 2;
                break;
              case e.ECI_USER_DEFINED:
                n++;
                break;
              case e.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                n = e.decodeMacroBlock(_, n, s);
                break;
              case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case e.MACRO_PDF417_TERMINATOR:
                throw new C.default();
              default:
                (n--, (n = e.textCompaction(_, n, A)));
            }
            if (!(n < _.length)) throw C.default.getFormatInstance();
            c = _[n++];
          }
          if (0 === A.length()) throw C.default.getFormatInstance();
          var P = new T.default(null, A.toString(), null, O);
          return (P.setOther(s), P);
        }),
        (e.decodeMacroBlock = function (_, O, E) {
          if (O + e.NUMBER_OF_SEQUENCE_CODEWORDS > _[0])
            throw C.default.getFormatInstance();
          for (
            var T = new Int32Array(e.NUMBER_OF_SEQUENCE_CODEWORDS), t = 0;
            t < e.NUMBER_OF_SEQUENCE_CODEWORDS;
            t++, O++
          )
            T[t] = _[O];
          E.setSegmentIndex(
            M.default.parseInt(
              e.decodeBase900toBase10(T, e.NUMBER_OF_SEQUENCE_CODEWORDS),
            ),
          );
          var c = new I.default();
          ((O = e.textCompaction(_, O, c)), E.setFileId(c.toString()));
          var s = -1;
          for (
            _[O] === e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (s = O + 1);
            O < _[0];

          )
            switch (_[O]) {
              case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                switch (_[++O]) {
                  case e.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                    var P = new I.default();
                    ((O = e.textCompaction(_, O + 1, P)),
                      E.setFileName(P.toString()));
                    break;
                  case e.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                    var D = new I.default();
                    ((O = e.textCompaction(_, O + 1, D)),
                      E.setSender(D.toString()));
                    break;
                  case e.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                    var L = new I.default();
                    ((O = e.textCompaction(_, O + 1, L)),
                      E.setAddressee(L.toString()));
                    break;
                  case e.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                    var N = new I.default();
                    ((O = e.numericCompaction(_, O + 1, N)),
                      E.setSegmentCount(M.default.parseInt(N.toString())));
                    break;
                  case e.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                    var o = new I.default();
                    ((O = e.numericCompaction(_, O + 1, o)),
                      E.setTimestamp(n.default.parseLong(o.toString())));
                    break;
                  case e.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                    var i = new I.default();
                    ((O = e.numericCompaction(_, O + 1, i)),
                      E.setChecksum(M.default.parseInt(i.toString())));
                    break;
                  case e.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                    var R = new I.default();
                    ((O = e.numericCompaction(_, O + 1, R)),
                      E.setFileSize(n.default.parseLong(R.toString())));
                    break;
                  default:
                    throw C.default.getFormatInstance();
                }
                break;
              case e.MACRO_PDF417_TERMINATOR:
                (O++, E.setLastSegment(!0));
                break;
              default:
                throw C.default.getFormatInstance();
            }
          if (-1 !== s) {
            var f = O - s;
            (E.isLastSegment() && f--,
              E.setOptionalData(A.default.copyOfRange(_, s, s + f)));
          }
          return O;
        }),
        (e.textCompaction = function (_, O, C) {
          for (
            var E = new Int32Array(2 * (_[0] - O)),
              T = new Int32Array(2 * (_[0] - O)),
              t = 0,
              A = !1;
            O < _[0] && !A;

          ) {
            var I = _[O++];
            if (I < e.TEXT_COMPACTION_MODE_LATCH)
              ((E[t] = I / 30), (E[t + 1] = I % 30), (t += 2));
            else
              switch (I) {
                case e.TEXT_COMPACTION_MODE_LATCH:
                  E[t++] = e.TEXT_COMPACTION_MODE_LATCH;
                  break;
                case e.BYTE_COMPACTION_MODE_LATCH:
                case e.BYTE_COMPACTION_MODE_LATCH_6:
                case e.NUMERIC_COMPACTION_MODE_LATCH:
                case e.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case e.MACRO_PDF417_TERMINATOR:
                  (O--, (A = !0));
                  break;
                case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  ((E[t] = e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE),
                    (I = _[O++]),
                    (T[t] = I),
                    t++);
              }
          }
          return (e.decodeTextCompaction(E, T, t, C), O);
        }),
        (e.decodeTextCompaction = function (O, C, E, T) {
          for (var t = _.ALPHA, A = _.ALPHA, I = 0; I < E; ) {
            var M = O[I],
              n = '';
            switch (t) {
              case _.ALPHA:
                if (M < 26) n = String.fromCharCode(65 + M);
                else
                  switch (M) {
                    case 26:
                      n = ' ';
                      break;
                    case e.LL:
                      t = _.LOWER;
                      break;
                    case e.ML:
                      t = _.MIXED;
                      break;
                    case e.PS:
                      ((A = t), (t = _.PUNCT_SHIFT));
                      break;
                    case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      T.append(C[I]);
                      break;
                    case e.TEXT_COMPACTION_MODE_LATCH:
                      t = _.ALPHA;
                  }
                break;
              case _.LOWER:
                if (M < 26) n = String.fromCharCode(97 + M);
                else
                  switch (M) {
                    case 26:
                      n = ' ';
                      break;
                    case e.AS:
                      ((A = t), (t = _.ALPHA_SHIFT));
                      break;
                    case e.ML:
                      t = _.MIXED;
                      break;
                    case e.PS:
                      ((A = t), (t = _.PUNCT_SHIFT));
                      break;
                    case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      T.append(C[I]);
                      break;
                    case e.TEXT_COMPACTION_MODE_LATCH:
                      t = _.ALPHA;
                  }
                break;
              case _.MIXED:
                if (M < e.PL) n = e.MIXED_CHARS[M];
                else
                  switch (M) {
                    case e.PL:
                      t = _.PUNCT;
                      break;
                    case 26:
                      n = ' ';
                      break;
                    case e.LL:
                      t = _.LOWER;
                      break;
                    case e.AL:
                      t = _.ALPHA;
                      break;
                    case e.PS:
                      ((A = t), (t = _.PUNCT_SHIFT));
                      break;
                    case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      T.append(C[I]);
                      break;
                    case e.TEXT_COMPACTION_MODE_LATCH:
                      t = _.ALPHA;
                  }
                break;
              case _.PUNCT:
                if (M < e.PAL) n = e.PUNCT_CHARS[M];
                else
                  switch (M) {
                    case e.PAL:
                      t = _.ALPHA;
                      break;
                    case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      T.append(C[I]);
                      break;
                    case e.TEXT_COMPACTION_MODE_LATCH:
                      t = _.ALPHA;
                  }
                break;
              case _.ALPHA_SHIFT:
                if (((t = A), M < 26)) n = String.fromCharCode(65 + M);
                else
                  switch (M) {
                    case 26:
                      n = ' ';
                      break;
                    case e.TEXT_COMPACTION_MODE_LATCH:
                      t = _.ALPHA;
                  }
                break;
              case _.PUNCT_SHIFT:
                if (((t = A), M < e.PAL)) n = e.PUNCT_CHARS[M];
                else
                  switch (M) {
                    case e.PAL:
                      t = _.ALPHA;
                      break;
                    case e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                      T.append(C[I]);
                      break;
                    case e.TEXT_COMPACTION_MODE_LATCH:
                      t = _.ALPHA;
                  }
            }
            ('' !== n && T.append(n), I++);
          }
        }),
        (e.byteCompaction = function (_, O, C, E, T) {
          var t = new c.default(),
            A = 0,
            I = 0,
            M = !1;
          switch (_) {
            case e.BYTE_COMPACTION_MODE_LATCH:
              for (var n = new Int32Array(6), P = O[E++]; E < O[0] && !M; )
                switch (((n[A++] = P), (I = 900 * I + P), (P = O[E++]))) {
                  case e.TEXT_COMPACTION_MODE_LATCH:
                  case e.BYTE_COMPACTION_MODE_LATCH:
                  case e.NUMERIC_COMPACTION_MODE_LATCH:
                  case e.BYTE_COMPACTION_MODE_LATCH_6:
                  case e.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                  case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                  case e.MACRO_PDF417_TERMINATOR:
                    (E--, (M = !0));
                    break;
                  default:
                    if (A % 5 == 0 && A > 0) {
                      for (var L = 0; L < 6; ++L)
                        t.write(Number(D(I) >> D(8 * (5 - L))));
                      ((I = 0), (A = 0));
                    }
                }
              E === O[0] && P < e.TEXT_COMPACTION_MODE_LATCH && (n[A++] = P);
              for (var N = 0; N < A; N++) t.write(n[N]);
              break;
            case e.BYTE_COMPACTION_MODE_LATCH_6:
              for (; E < O[0] && !M; ) {
                var o = O[E++];
                if (o < e.TEXT_COMPACTION_MODE_LATCH) (A++, (I = 900 * I + o));
                else
                  switch (o) {
                    case e.TEXT_COMPACTION_MODE_LATCH:
                    case e.BYTE_COMPACTION_MODE_LATCH:
                    case e.NUMERIC_COMPACTION_MODE_LATCH:
                    case e.BYTE_COMPACTION_MODE_LATCH_6:
                    case e.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                    case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                    case e.MACRO_PDF417_TERMINATOR:
                      (E--, (M = !0));
                  }
                if (A % 5 == 0 && A > 0) {
                  for (L = 0; L < 6; ++L)
                    t.write(Number(D(I) >> D(8 * (5 - L))));
                  ((I = 0), (A = 0));
                }
              }
          }
          return (T.append(s.default.decode(t.toByteArray(), C)), E);
        }),
        (e.numericCompaction = function (_, O, C) {
          for (
            var E = 0, T = !1, t = new Int32Array(e.MAX_NUMERIC_CODEWORDS);
            O < _[0] && !T;

          ) {
            var A = _[O++];
            if ((O === _[0] && (T = !0), A < e.TEXT_COMPACTION_MODE_LATCH))
              ((t[E] = A), E++);
            else
              switch (A) {
                case e.TEXT_COMPACTION_MODE_LATCH:
                case e.BYTE_COMPACTION_MODE_LATCH:
                case e.BYTE_COMPACTION_MODE_LATCH_6:
                case e.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                case e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case e.MACRO_PDF417_TERMINATOR:
                  (O--, (T = !0));
              }
            (E % e.MAX_NUMERIC_CODEWORDS === 0 ||
              A === e.NUMERIC_COMPACTION_MODE_LATCH ||
              T) &&
              E > 0 &&
              (C.append(e.decodeBase900toBase10(t, E)), (E = 0));
          }
          return O;
        }),
        (e.decodeBase900toBase10 = function (_, O) {
          for (var E = D(0), T = 0; T < O; T++)
            E += e.EXP900[O - T - 1] * D(_[T]);
          var t = E.toString();
          if ('1' !== t.charAt(0)) throw new C.default();
          return t.substring(1);
        }),
        (e.TEXT_COMPACTION_MODE_LATCH = 900),
        (e.BYTE_COMPACTION_MODE_LATCH = 901),
        (e.NUMERIC_COMPACTION_MODE_LATCH = 902),
        (e.BYTE_COMPACTION_MODE_LATCH_6 = 924),
        (e.ECI_USER_DEFINED = 925),
        (e.ECI_GENERAL_PURPOSE = 926),
        (e.ECI_CHARSET = 927),
        (e.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928),
        (e.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923),
        (e.MACRO_PDF417_TERMINATOR = 922),
        (e.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913),
        (e.MAX_NUMERIC_CODEWORDS = 15),
        (e.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0),
        (e.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1),
        (e.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2),
        (e.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3),
        (e.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4),
        (e.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5),
        (e.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6),
        (e.PL = 25),
        (e.LL = 27),
        (e.AS = 27),
        (e.ML = 28),
        (e.AL = 28),
        (e.PS = 29),
        (e.PAL = 29),
        (e.PUNCT_CHARS = ';<>@[\\]_`~!\r\t,:\n-.$/"|*()?{}\''),
        (e.MIXED_CHARS = '0123456789&\r\t,:#-.$/+%*=^'),
        (e.EXP900 = P() ? L() : []),
        (e.NUMBER_OF_SEQUENCE_CODEWORDS = 2),
        e
      );
    })();
  },
  1171,
  [1029, 1028, 1043, 1172, 1019, 1025, 1023, 1173, 1174, 1030],
);
