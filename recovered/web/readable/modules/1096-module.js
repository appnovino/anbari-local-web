// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1096; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }));
    var t,
      e,
      n = r(_d[0]),
      o = (t = n) && t.__esModule ? t : { default: t },
      i =
        (this && this.__extends) ||
        ((e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              }),
            e(t, n)
          );
        }),
        function (t, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function o() {
            this.constructor = t;
          }
          (e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o())));
        }),
      p = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          i(e, t),
          (e.prototype.encodeCompressedGtin = function (t, e) {
            t.append('(01)');
            var n = t.length();
            (t.append('9'), this.encodeCompressedGtinWithoutAI(t, e, n));
          }),
          (e.prototype.encodeCompressedGtinWithoutAI = function (t, n, o) {
            for (var i = 0; i < 4; ++i) {
              var p = this.getGeneralDecoder().extractNumericValueFromBitArray(
                n + 10 * i,
                10,
              );
              (p < 100 && t.append('0'),
                p < 10 && t.append('0'),
                t.append('' + p));
            }
            e.appendCheckDigit(t, o);
          }),
          (e.appendCheckDigit = function (t, e) {
            for (var n = 0, o = 0; o < 13; o++) {
              var i = t.charAt(o + e).charCodeAt(0) - '0'.charCodeAt(0);
              n += 1 & o ? i : 3 * i;
            }
            (10 === (n = 10 - (n % 10)) && (n = 0), t.append('' + n));
          }),
          (e.GTIN_SIZE = 40),
          e
        );
      })(o.default);
  },
  1096,
  [1097],
);
