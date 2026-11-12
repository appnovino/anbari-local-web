// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1209; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'X12Encoder', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var t,
      n = e(r(_d[0])),
      o = e(r(_d[1])),
      c = r(_d[2]),
      d = e(r(_d[3])),
      p = r(_d[4]),
      u =
        (this && this.__extends) ||
        ((t = function (e, n) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            t(e, n)
          );
        }),
        function (e, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function o() {
            this.constructor = e;
          }
          (t(e, n),
            (e.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o())));
        }),
      s = (function (e) {
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        return (
          u(t, e),
          (t.prototype.getEncodingMode = function () {
            return p.X12_ENCODATION;
          }),
          (t.prototype.encode = function (e) {
            for (var t = new o.default(); e.hasMoreCharacters(); ) {
              var n = e.getCurrentChar();
              if ((e.pos++, this.encodeChar(n, t), t.length() % 3 == 0))
                if (
                  (this.writeNextTriplet(e, t),
                  d.default.lookAheadTest(
                    e.getMessage(),
                    e.pos,
                    this.getEncodingMode(),
                  ) !== this.getEncodingMode())
                ) {
                  e.signalEncoderChange(p.ASCII_ENCODATION);
                  break;
                }
            }
            this.handleEOD(e, t);
          }),
          (t.prototype.encodeChar = function (e, t) {
            switch (e) {
              case 13:
                t.append(0);
                break;
              case '*'.charCodeAt(0):
                t.append(1);
                break;
              case '>'.charCodeAt(0):
                t.append(2);
                break;
              case ' '.charCodeAt(0):
                t.append(3);
                break;
              default:
                e >= '0'.charCodeAt(0) && e <= '9'.charCodeAt(0)
                  ? t.append(e - 48 + 4)
                  : e >= 'A'.charCodeAt(0) && e <= 'Z'.charCodeAt(0)
                    ? t.append(e - 65 + 14)
                    : d.default.illegalCharacter(n.default.getCharAt(e));
            }
            return 1;
          }),
          (t.prototype.handleEOD = function (e, t) {
            e.updateSymbolInfo();
            var n = e.getSymbolInfo().getDataCapacity() - e.getCodewordCount(),
              o = t.length();
            ((e.pos -= o),
              (e.getRemainingCharacters() > 1 ||
                n > 1 ||
                e.getRemainingCharacters() !== n) &&
                e.writeCodeword(p.X12_UNLATCH),
              e.getNewEncoding() < 0 &&
                e.signalEncoderChange(p.ASCII_ENCODATION));
          }),
          t
        );
      })(c.C40Encoder);
  },
  1209,
  [1026, 1025, 1205, 1202, 1201],
);
