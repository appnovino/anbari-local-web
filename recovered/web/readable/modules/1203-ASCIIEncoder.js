// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1203; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'ASCIIEncoder', {
        enumerable: !0,
        get: function () {
          return C;
        },
      }));
    var e,
      o = r(d[0]),
      t = r(d[1]),
      n = (e = t) && e.__esModule ? e : { default: e },
      C = (function () {
        function e() {}
        return (
          (e.prototype.getEncodingMode = function () {
            return o.ASCII_ENCODATION;
          }),
          (e.prototype.encode = function (e) {
            if (
              n.default.determineConsecutiveDigitCount(e.getMessage(), e.pos) >=
              2
            )
              (e.writeCodeword(
                this.encodeASCIIDigits(
                  e.getMessage().charCodeAt(e.pos),
                  e.getMessage().charCodeAt(e.pos + 1),
                ),
              ),
                (e.pos += 2));
            else {
              var t = e.getCurrentChar(),
                C = n.default.lookAheadTest(
                  e.getMessage(),
                  e.pos,
                  this.getEncodingMode(),
                );
              if (C !== this.getEncodingMode())
                switch (C) {
                  case o.BASE256_ENCODATION:
                    return (
                      e.writeCodeword(o.LATCH_TO_BASE256),
                      void e.signalEncoderChange(o.BASE256_ENCODATION)
                    );
                  case o.C40_ENCODATION:
                    return (
                      e.writeCodeword(o.LATCH_TO_C40),
                      void e.signalEncoderChange(o.C40_ENCODATION)
                    );
                  case o.X12_ENCODATION:
                    (e.writeCodeword(o.LATCH_TO_ANSIX12),
                      e.signalEncoderChange(o.X12_ENCODATION));
                    break;
                  case o.TEXT_ENCODATION:
                    (e.writeCodeword(o.LATCH_TO_TEXT),
                      e.signalEncoderChange(o.TEXT_ENCODATION));
                    break;
                  case o.EDIFACT_ENCODATION:
                    (e.writeCodeword(o.LATCH_TO_EDIFACT),
                      e.signalEncoderChange(o.EDIFACT_ENCODATION));
                    break;
                  default:
                    throw new Error('Illegal mode: ' + C);
                }
              else
                n.default.isExtendedASCII(t)
                  ? (e.writeCodeword(o.UPPER_SHIFT),
                    e.writeCodeword(t - 128 + 1),
                    e.pos++)
                  : (e.writeCodeword(t + 1), e.pos++);
            }
          }),
          (e.prototype.encodeASCIIDigits = function (e, o) {
            if (n.default.isDigit(e) && n.default.isDigit(o))
              return 10 * (e - 48) + (o - 48) + 130;
            throw new Error('not digits: ' + e + o);
          }),
          e
        );
      })();
  },
  1203,
  [1201, 1202],
);
