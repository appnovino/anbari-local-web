// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1105; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return u;
        },
      }));
    var t,
      n = e(r(_d[0])),
      o = e(r(_d[1])),
      p = e(r(_d[2])),
      d =
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
      u = (function (e) {
        function t(t, n, o) {
          var p = e.call(this, t) || this;
          return ((p.dateCode = o), (p.firstAIdigits = n), p);
        }
        return (
          d(t, e),
          (t.prototype.parseInformation = function () {
            if (
              this.getInformation().getSize() !==
              t.HEADER_SIZE + t.GTIN_SIZE + t.WEIGHT_SIZE + t.DATE_SIZE
            )
              throw new o.default();
            var e = new p.default();
            return (
              this.encodeCompressedGtin(e, t.HEADER_SIZE),
              this.encodeCompressedWeight(
                e,
                t.HEADER_SIZE + t.GTIN_SIZE,
                t.WEIGHT_SIZE,
              ),
              this.encodeCompressedDate(
                e,
                t.HEADER_SIZE + t.GTIN_SIZE + t.WEIGHT_SIZE,
              ),
              e.toString()
            );
          }),
          (t.prototype.encodeCompressedDate = function (e, n) {
            var o = this.getGeneralDecoder().extractNumericValueFromBitArray(
              n,
              t.DATE_SIZE,
            );
            if (38400 !== o) {
              (e.append('('), e.append(this.dateCode), e.append(')'));
              var p = o % 32,
                d = ((o = Math.trunc(o / 32)) % 12) + 1,
                u = (o = Math.trunc(o / 12));
              (u < 10 && e.append('0'),
                e.append('' + u),
                d < 10 && e.append('0'),
                e.append('' + d),
                p < 10 && e.append('0'),
                e.append('' + p));
            }
          }),
          (t.prototype.addWeightCode = function (e, t) {
            (e.append('('),
              e.append(this.firstAIdigits),
              e.append('' + Math.trunc(t / 1e5)),
              e.append(')'));
          }),
          (t.prototype.checkWeight = function (e) {
            return e % 1e5;
          }),
          (t.HEADER_SIZE = 8),
          (t.WEIGHT_SIZE = 20),
          (t.DATE_SIZE = 16),
          t
        );
      })(n.default);
  },
  1105,
  [1101, 1032, 1025],
);
