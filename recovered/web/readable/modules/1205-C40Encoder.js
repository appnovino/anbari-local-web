// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1205; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'C40Encoder', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      n = r(d[2]),
      h = (function () {
        function e() {}
        return (
          (e.prototype.getEncodingMode = function () {
            return n.C40_ENCODATION;
          }),
          (e.prototype.encodeMaximal = function (e) {
            for (
              var o = new t.default(), h = 0, p = e.pos, c = 0;
              e.hasMoreCharacters();

            ) {
              var C = e.getCurrentChar();
              (e.pos++,
                (h = this.encodeChar(C, o)),
                o.length() % 3 == 0 && ((p = e.pos), (c = o.length())));
            }
            if (c !== o.length()) {
              var s = Math.floor((o.length() / 3) * 2),
                f = Math.floor(e.getCodewordCount() + s + 1);
              e.updateSymbolInfo(f);
              var l = e.getSymbolInfo().getDataCapacity() - f,
                u = Math.floor(o.length() % 3);
              ((2 === u && 2 !== l) || (1 === u && (h > 3 || 1 !== l))) &&
                (e.pos = p);
            }
            (o.length() > 0 && e.writeCodeword(n.LATCH_TO_C40),
              this.handleEOD(e, o));
          }),
          (e.prototype.encode = function (e) {
            for (var h = new t.default(); e.hasMoreCharacters(); ) {
              var p = e.getCurrentChar();
              e.pos++;
              var c = this.encodeChar(p, h),
                C = 2 * Math.floor(h.length() / 3),
                s = e.getCodewordCount() + C;
              e.updateSymbolInfo(s);
              var f = e.getSymbolInfo().getDataCapacity() - s;
              if (!e.hasMoreCharacters()) {
                var l = new t.default();
                for (
                  h.length() % 3 == 2 &&
                  2 !== f &&
                  (c = this.backtrackOneCharacter(e, h, l, c));
                  h.length() % 3 == 1 && (c > 3 || 1 !== f);

                )
                  c = this.backtrackOneCharacter(e, h, l, c);
                break;
              }
              if (h.length() % 3 == 0)
                if (
                  o.default.lookAheadTest(
                    e.getMessage(),
                    e.pos,
                    this.getEncodingMode(),
                  ) !== this.getEncodingMode()
                ) {
                  e.signalEncoderChange(n.ASCII_ENCODATION);
                  break;
                }
            }
            this.handleEOD(e, h);
          }),
          (e.prototype.backtrackOneCharacter = function (e, t, o, n) {
            var h = t.length(),
              p = t.toString().substring(0, h - n);
            (t.setLengthToZero(), t.append(p), e.pos--);
            var c = e.getCurrentChar();
            return ((n = this.encodeChar(c, o)), e.resetSymbolInfo(), n);
          }),
          (e.prototype.writeNextTriplet = function (e, t) {
            e.writeCodewords(this.encodeToCodewords(t.toString()));
            var o = t.toString().substring(3);
            (t.setLengthToZero(), t.append(o));
          }),
          (e.prototype.handleEOD = function (e, t) {
            var o = Math.floor((t.length() / 3) * 2),
              h = t.length() % 3,
              p = e.getCodewordCount() + o;
            e.updateSymbolInfo(p);
            var c = e.getSymbolInfo().getDataCapacity() - p;
            if (2 === h) {
              for (t.append('\0'); t.length() >= 3; )
                this.writeNextTriplet(e, t);
              e.hasMoreCharacters() && e.writeCodeword(n.C40_UNLATCH);
            } else if (1 === c && 1 === h) {
              for (; t.length() >= 3; ) this.writeNextTriplet(e, t);
              (e.hasMoreCharacters() && e.writeCodeword(n.C40_UNLATCH),
                e.pos--);
            } else {
              if (0 !== h) throw new Error('Unexpected case. Please report!');
              for (; t.length() >= 3; ) this.writeNextTriplet(e, t);
              (c > 0 || e.hasMoreCharacters()) &&
                e.writeCodeword(n.C40_UNLATCH);
            }
            e.signalEncoderChange(n.ASCII_ENCODATION);
          }),
          (e.prototype.encodeChar = function (e, t) {
            if (e === ' '.charCodeAt(0)) return (t.append(3), 1);
            if (e >= '0'.charCodeAt(0) && e <= '9'.charCodeAt(0))
              return (t.append(e - 48 + 4), 1);
            if (e >= 'A'.charCodeAt(0) && e <= 'Z'.charCodeAt(0))
              return (t.append(e - 65 + 14), 1);
            if (e < ' '.charCodeAt(0)) return (t.append(0), t.append(e), 2);
            if (e <= '/'.charCodeAt(0))
              return (t.append(1), t.append(e - 33), 2);
            if (e <= '@'.charCodeAt(0))
              return (t.append(1), t.append(e - 58 + 15), 2);
            if (e <= '_'.charCodeAt(0))
              return (t.append(1), t.append(e - 91 + 22), 2);
            if (e <= 127) return (t.append(2), t.append(e - 96), 2);
            t.append(''.concat(1, '\x1e'));
            var o = 2;
            return (o += this.encodeChar(e - 128, t));
          }),
          (e.prototype.encodeToCodewords = function (e) {
            var o =
                1600 * e.charCodeAt(0) +
                40 * e.charCodeAt(1) +
                e.charCodeAt(2) +
                1,
              n = o / 256,
              h = o % 256,
              p = new t.default();
            return (p.append(n), p.append(h), p.toString());
          }),
          e
        );
      })();
  },
  1205,
  [1025, 1202, 1201],
);
