// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1204; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'Base256Encoder', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      n = e(r(d[2])),
      i = r(d[3]),
      u = (function () {
        function e() {}
        return (
          (e.prototype.getEncodingMode = function () {
            return i.BASE256_ENCODATION;
          }),
          (e.prototype.encode = function (e) {
            var u = new o.default();
            for (u.append(0); e.hasMoreCharacters(); ) {
              var f = e.getCurrentChar();
              if (
                (u.append(f),
                e.pos++,
                n.default.lookAheadTest(
                  e.getMessage(),
                  e.pos,
                  this.getEncodingMode(),
                ) !== this.getEncodingMode())
              ) {
                e.signalEncoderChange(i.ASCII_ENCODATION);
                break;
              }
            }
            var s = u.length() - 1,
              c = e.getCodewordCount() + s + 1;
            e.updateSymbolInfo(c);
            var h = e.getSymbolInfo().getDataCapacity() - c > 0;
            if (e.hasMoreCharacters() || h)
              if (s <= 249) u.setCharAt(0, t.default.getCharAt(s));
              else {
                if (!(s <= 1555))
                  throw new Error('Message length not in valid ranges: ' + s);
                (u.setCharAt(0, t.default.getCharAt(Math.floor(s / 250) + 249)),
                  u.insert(1, t.default.getCharAt(s % 250)));
              }
            var l = 0;
            for (f = u.length(); l < f; l++)
              e.writeCodeword(
                this.randomize255State(
                  u.charAt(l).charCodeAt(0),
                  e.getCodewordCount() + 1,
                ),
              );
          }),
          (e.prototype.randomize255State = function (e, t) {
            var o = e + (((149 * t) % 255) + 1);
            return o <= 255 ? o : o - 256;
          }),
          e
        );
      })();
  },
  1204,
  [1026, 1025, 1202, 1201],
);
