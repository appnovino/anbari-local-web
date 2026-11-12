// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1202; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return o;
        },
      }));
    var e = r(d[0]),
      A = r(d[1]),
      C = r(d[2]),
      N = r(d[3]),
      O = r(d[4]),
      i = r(d[5]),
      n = r(d[6]),
      I = r(d[7]),
      E = t(r(d[8])),
      T = t(r(d[9])),
      o = (function () {
        function t() {}
        return (
          (t.randomize253State = function (t) {
            var e = ((149 * t) % 253) + 1,
              A = N.PAD + e;
            return A <= 254 ? A : A - 254;
          }),
          (t.encodeHighLevel = function (t, E, T, o, D) {
            (void 0 === E && (E = 0),
              void 0 === T && (T = null),
              void 0 === o && (o = null),
              void 0 === D && (D = !1));
            var _ = new C.C40Encoder(),
              h = [
                new e.ASCIIEncoder(),
                _,
                new I.TextEncoder(),
                new n.X12Encoder(),
                new O.EdifactEncoder(),
                new A.Base256Encoder(),
              ],
              s = new i.EncoderContext(t);
            (s.setSymbolShape(E),
              s.setSizeConstraints(T, o),
              t.startsWith(N.MACRO_05_HEADER) && t.endsWith(N.MACRO_TRAILER)
                ? (s.writeCodeword(N.MACRO_05),
                  s.setSkipAtEnd(2),
                  (s.pos += N.MACRO_05_HEADER.length))
                : t.startsWith(N.MACRO_06_HEADER) &&
                  t.endsWith(N.MACRO_TRAILER) &&
                  (s.writeCodeword(N.MACRO_06),
                  s.setSkipAtEnd(2),
                  (s.pos += N.MACRO_06_HEADER.length)));
            var u = N.ASCII_ENCODATION;
            for (
              D &&
              (_.encodeMaximal(s),
              (u = s.getNewEncoding()),
              s.resetEncoderSignal());
              s.hasMoreCharacters();

            )
              (h[u].encode(s),
                s.getNewEncoding() >= 0 &&
                  ((u = s.getNewEncoding()), s.resetEncoderSignal()));
            var c = s.getCodewordCount();
            s.updateSymbolInfo();
            var f = s.getSymbolInfo().getDataCapacity();
            c < f &&
              u !== N.ASCII_ENCODATION &&
              u !== N.BASE256_ENCODATION &&
              u !== N.EDIFACT_ENCODATION &&
              s.writeCodeword('\xfe');
            var l = s.getCodewords();
            for (l.length() < f && l.append(N.PAD); l.length() < f; )
              l.append(this.randomize253State(l.length() + 1));
            return s.getCodewords().toString();
          }),
          (t.lookAheadTest = function (t, e, A) {
            var C = this.lookAheadTestIntern(t, e, A);
            if (A === N.X12_ENCODATION && C === N.X12_ENCODATION) {
              for (var O = Math.min(e + 3, t.length), i = e; i < O; i++)
                if (!this.isNativeX12(t.charCodeAt(i)))
                  return N.ASCII_ENCODATION;
            } else if (A === N.EDIFACT_ENCODATION && C === N.EDIFACT_ENCODATION)
              for (O = Math.min(e + 4, t.length), i = e; i < O; i++)
                if (!this.isNativeEDIFACT(t.charCodeAt(i)))
                  return N.ASCII_ENCODATION;
            return C;
          }),
          (t.lookAheadTestIntern = function (t, e, A) {
            if (e >= t.length) return A;
            var C;
            A === N.ASCII_ENCODATION
              ? (C = [0, 1, 1, 1, 1, 1.25])
              : ((C = [1, 2, 2, 2, 2, 2.25])[A] = 0);
            for (var O = 0, i = new Uint8Array(6), n = []; ; ) {
              if (e + O === t.length) {
                (E.default.fill(i, 0), E.default.fill(n, 0));
                var I = this.findMinimums(C, n, T.default.MAX_VALUE, i),
                  o = this.getMinimumCount(i);
                if (n[N.ASCII_ENCODATION] === I) return N.ASCII_ENCODATION;
                if (1 === o) {
                  if (i[N.BASE256_ENCODATION] > 0) return N.BASE256_ENCODATION;
                  if (i[N.EDIFACT_ENCODATION] > 0) return N.EDIFACT_ENCODATION;
                  if (i[N.TEXT_ENCODATION] > 0) return N.TEXT_ENCODATION;
                  if (i[N.X12_ENCODATION] > 0) return N.X12_ENCODATION;
                }
                return N.C40_ENCODATION;
              }
              var D = t.charCodeAt(e + O);
              if (
                (O++,
                this.isDigit(D)
                  ? (C[N.ASCII_ENCODATION] += 0.5)
                  : this.isExtendedASCII(D)
                    ? ((C[N.ASCII_ENCODATION] = Math.ceil(
                        C[N.ASCII_ENCODATION],
                      )),
                      (C[N.ASCII_ENCODATION] += 2))
                    : ((C[N.ASCII_ENCODATION] = Math.ceil(
                        C[N.ASCII_ENCODATION],
                      )),
                      C[N.ASCII_ENCODATION]++),
                this.isNativeC40(D)
                  ? (C[N.C40_ENCODATION] += 0.6666666666666666)
                  : this.isExtendedASCII(D)
                    ? (C[N.C40_ENCODATION] += 2.6666666666666665)
                    : (C[N.C40_ENCODATION] += 1.3333333333333333),
                this.isNativeText(D)
                  ? (C[N.TEXT_ENCODATION] += 0.6666666666666666)
                  : this.isExtendedASCII(D)
                    ? (C[N.TEXT_ENCODATION] += 2.6666666666666665)
                    : (C[N.TEXT_ENCODATION] += 1.3333333333333333),
                this.isNativeX12(D)
                  ? (C[N.X12_ENCODATION] += 0.6666666666666666)
                  : this.isExtendedASCII(D)
                    ? (C[N.X12_ENCODATION] += 4.333333333333333)
                    : (C[N.X12_ENCODATION] += 3.3333333333333335),
                this.isNativeEDIFACT(D)
                  ? (C[N.EDIFACT_ENCODATION] += 0.75)
                  : this.isExtendedASCII(D)
                    ? (C[N.EDIFACT_ENCODATION] += 4.25)
                    : (C[N.EDIFACT_ENCODATION] += 3.25),
                this.isSpecialB256(D)
                  ? (C[N.BASE256_ENCODATION] += 4)
                  : C[N.BASE256_ENCODATION]++,
                O >= 4)
              ) {
                if (
                  (E.default.fill(i, 0),
                  E.default.fill(n, 0),
                  this.findMinimums(C, n, T.default.MAX_VALUE, i),
                  n[N.ASCII_ENCODATION] <
                    this.min(
                      n[N.BASE256_ENCODATION],
                      n[N.C40_ENCODATION],
                      n[N.TEXT_ENCODATION],
                      n[N.X12_ENCODATION],
                      n[N.EDIFACT_ENCODATION],
                    ))
                )
                  return N.ASCII_ENCODATION;
                if (
                  n[N.BASE256_ENCODATION] < n[N.ASCII_ENCODATION] ||
                  n[N.BASE256_ENCODATION] + 1 <
                    this.min(
                      n[N.C40_ENCODATION],
                      n[N.TEXT_ENCODATION],
                      n[N.X12_ENCODATION],
                      n[N.EDIFACT_ENCODATION],
                    )
                )
                  return N.BASE256_ENCODATION;
                if (
                  n[N.EDIFACT_ENCODATION] + 1 <
                  this.min(
                    n[N.BASE256_ENCODATION],
                    n[N.C40_ENCODATION],
                    n[N.TEXT_ENCODATION],
                    n[N.X12_ENCODATION],
                    n[N.ASCII_ENCODATION],
                  )
                )
                  return N.EDIFACT_ENCODATION;
                if (
                  n[N.TEXT_ENCODATION] + 1 <
                  this.min(
                    n[N.BASE256_ENCODATION],
                    n[N.C40_ENCODATION],
                    n[N.EDIFACT_ENCODATION],
                    n[N.X12_ENCODATION],
                    n[N.ASCII_ENCODATION],
                  )
                )
                  return N.TEXT_ENCODATION;
                if (
                  n[N.X12_ENCODATION] + 1 <
                  this.min(
                    n[N.BASE256_ENCODATION],
                    n[N.C40_ENCODATION],
                    n[N.EDIFACT_ENCODATION],
                    n[N.TEXT_ENCODATION],
                    n[N.ASCII_ENCODATION],
                  )
                )
                  return N.X12_ENCODATION;
                if (
                  n[N.C40_ENCODATION] + 1 <
                  this.min(
                    n[N.ASCII_ENCODATION],
                    n[N.BASE256_ENCODATION],
                    n[N.EDIFACT_ENCODATION],
                    n[N.TEXT_ENCODATION],
                  )
                ) {
                  if (n[N.C40_ENCODATION] < n[N.X12_ENCODATION])
                    return N.C40_ENCODATION;
                  if (n[N.C40_ENCODATION] === n[N.X12_ENCODATION]) {
                    for (var _ = e + O + 1; _ < t.length; ) {
                      var h = t.charCodeAt(_);
                      if (this.isX12TermSep(h)) return N.X12_ENCODATION;
                      if (!this.isNativeX12(h)) break;
                      _++;
                    }
                    return N.C40_ENCODATION;
                  }
                }
              }
            }
          }),
          (t.min = function (t, e, A, C, N) {
            var O = Math.min(t, Math.min(e, Math.min(A, C)));
            return void 0 === N ? O : Math.min(O, N);
          }),
          (t.findMinimums = function (t, e, A, C) {
            for (var N = 0; N < 6; N++) {
              var O = (e[N] = Math.ceil(t[N]));
              (A > O && ((A = O), E.default.fill(C, 0)),
                A === O && (C[N] = C[N] + 1));
            }
            return A;
          }),
          (t.getMinimumCount = function (t) {
            for (var e = 0, A = 0; A < 6; A++) e += t[A];
            return e || 0;
          }),
          (t.isDigit = function (t) {
            return t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0);
          }),
          (t.isExtendedASCII = function (t) {
            return t >= 128 && t <= 255;
          }),
          (t.isNativeC40 = function (t) {
            return (
              t === ' '.charCodeAt(0) ||
              (t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0)) ||
              (t >= 'A'.charCodeAt(0) && t <= 'Z'.charCodeAt(0))
            );
          }),
          (t.isNativeText = function (t) {
            return (
              t === ' '.charCodeAt(0) ||
              (t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0)) ||
              (t >= 'a'.charCodeAt(0) && t <= 'z'.charCodeAt(0))
            );
          }),
          (t.isNativeX12 = function (t) {
            return (
              this.isX12TermSep(t) ||
              t === ' '.charCodeAt(0) ||
              (t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0)) ||
              (t >= 'A'.charCodeAt(0) && t <= 'Z'.charCodeAt(0))
            );
          }),
          (t.isX12TermSep = function (t) {
            return (
              13 === t || t === '*'.charCodeAt(0) || t === '>'.charCodeAt(0)
            );
          }),
          (t.isNativeEDIFACT = function (t) {
            return t >= ' '.charCodeAt(0) && t <= '^'.charCodeAt(0);
          }),
          (t.isSpecialB256 = function (t) {
            return !1;
          }),
          (t.determineConsecutiveDigitCount = function (t, e) {
            void 0 === e && (e = 0);
            for (
              var A = t.length, C = e;
              C < A && this.isDigit(t.charCodeAt(C));

            )
              C++;
            return C - e;
          }),
          (t.illegalCharacter = function (t) {
            var e = T.default.toHexString(t.charCodeAt(0));
            throw (
              (e = '0000'.substring(0, 4 - e.length) + e),
              new Error('Illegal character: ' + t + ' (0x' + e + ')')
            );
          }),
          t
        );
      })();
  },
  1202,
  [1203, 1204, 1205, 1201, 1206, 1207, 1209, 1210, 1019, 1023],
);
