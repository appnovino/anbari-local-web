// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1104; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return I;
        },
      }));
    var t,
      n = e(r(_d[0])),
      o = e(r(_d[1])),
      u = e(r(_d[2])),
      _ =
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
      I = (function (e) {
        function t(t) {
          return e.call(this, t) || this;
        }
        return (
          _(t, e),
          (t.prototype.parseInformation = function () {
            if (
              this.getInformation().getSize() <
              t.HEADER_SIZE + n.default.GTIN_SIZE
            )
              throw new o.default();
            var e = new u.default();
            this.encodeCompressedGtin(e, t.HEADER_SIZE);
            var _ = this.getGeneralDecoder().extractNumericValueFromBitArray(
              t.HEADER_SIZE + n.default.GTIN_SIZE,
              t.LAST_DIGIT_SIZE,
            );
            (e.append('(393'), e.append('' + _), e.append(')'));
            var I = this.getGeneralDecoder().extractNumericValueFromBitArray(
              t.HEADER_SIZE + n.default.GTIN_SIZE + t.LAST_DIGIT_SIZE,
              t.FIRST_THREE_DIGITS_SIZE,
            );
            (I < 100 && e.append('0'),
              I < 10 && e.append('0'),
              e.append('' + I));
            var E = this.getGeneralDecoder().decodeGeneralPurposeField(
              t.HEADER_SIZE +
                n.default.GTIN_SIZE +
                t.LAST_DIGIT_SIZE +
                t.FIRST_THREE_DIGITS_SIZE,
              null,
            );
            return (e.append(E.getNewString()), e.toString());
          }),
          (t.HEADER_SIZE = 8),
          (t.LAST_DIGIT_SIZE = 2),
          (t.FIRST_THREE_DIGITS_SIZE = 10),
          t
        );
      })(n.default);
  },
  1104,
  [1096, 1032, 1025],
);
