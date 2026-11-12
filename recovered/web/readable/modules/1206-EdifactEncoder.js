// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1206; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'EdifactEncoder', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      n = r(d[2]),
      C = e(r(d[3])),
      c = (function () {
        function e() {}
        return (
          (e.prototype.getEncodingMode = function () {
            return n.EDIFACT_ENCODATION;
          }),
          (e.prototype.encode = function (e) {
            for (var c = new o.default(); e.hasMoreCharacters(); ) {
              var u = e.getCurrentChar();
              if ((this.encodeChar(u, c), e.pos++, c.length() >= 4)) {
                e.writeCodewords(this.encodeToCodewords(c.toString()));
                var h = c.toString().substring(4);
                if (
                  (c.setLengthToZero(),
                  c.append(h),
                  C.default.lookAheadTest(
                    e.getMessage(),
                    e.pos,
                    this.getEncodingMode(),
                  ) !== this.getEncodingMode())
                ) {
                  e.signalEncoderChange(n.ASCII_ENCODATION);
                  break;
                }
              }
            }
            (c.append(t.default.getCharAt(31)), this.handleEOD(e, c));
          }),
          (e.prototype.handleEOD = function (e, t) {
            try {
              var o = t.length();
              if (0 === o) return;
              if (1 === o) {
                e.updateSymbolInfo();
                var C =
                    e.getSymbolInfo().getDataCapacity() - e.getCodewordCount(),
                  c = e.getRemainingCharacters();
                if (
                  (c > C &&
                    (e.updateSymbolInfo(e.getCodewordCount() + 1),
                    (C =
                      e.getSymbolInfo().getDataCapacity() -
                      e.getCodewordCount())),
                  c <= C && C <= 2)
                )
                  return;
              }
              if (o > 4) throw new Error('Count must not exceed 4');
              var u = o - 1,
                h = this.encodeToCodewords(t.toString()),
                f = !e.hasMoreCharacters() && u <= 2;
              if (u <= 2)
                (e.updateSymbolInfo(e.getCodewordCount() + u),
                  (C =
                    e.getSymbolInfo().getDataCapacity() -
                    e.getCodewordCount()) >= 3 &&
                    ((f = !1),
                    e.updateSymbolInfo(e.getCodewordCount() + h.length)));
              f ? (e.resetSymbolInfo(), (e.pos -= u)) : e.writeCodewords(h);
            } finally {
              e.signalEncoderChange(n.ASCII_ENCODATION);
            }
          }),
          (e.prototype.encodeChar = function (e, o) {
            e >= ' '.charCodeAt(0) && e <= '?'.charCodeAt(0)
              ? o.append(e)
              : e >= '@'.charCodeAt(0) && e <= '^'.charCodeAt(0)
                ? o.append(t.default.getCharAt(e - 64))
                : C.default.illegalCharacter(t.default.getCharAt(e));
          }),
          (e.prototype.encodeToCodewords = function (e) {
            var t = e.length;
            if (0 === t) throw new Error('StringBuilder must not be empty');
            var n =
                (e.charAt(0).charCodeAt(0) << 18) +
                ((t >= 2 ? e.charAt(1).charCodeAt(0) : 0) << 12) +
                ((t >= 3 ? e.charAt(2).charCodeAt(0) : 0) << 6) +
                (t >= 4 ? e.charAt(3).charCodeAt(0) : 0),
              C = (n >> 16) & 255,
              c = (n >> 8) & 255,
              u = 255 & n,
              h = new o.default();
            return (
              h.append(C),
              t >= 2 && h.append(c),
              t >= 3 && h.append(u),
              h.toString()
            );
          }),
          e
        );
      })();
  },
  1206,
  [1026, 1025, 1201, 1202],
);
