// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1093; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var e,
      n = t(r(_d[0])),
      o = t(r(_d[1])),
      u =
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
      s = (function (t) {
        function e(e, o, u) {
          var s = t.call(this, e) || this;
          if (o < 0 || o > 10 || u < 0 || u > 10) throw new n.default();
          return ((s.firstDigit = o), (s.secondDigit = u), s);
        }
        return (
          u(e, t),
          (e.prototype.getFirstDigit = function () {
            return this.firstDigit;
          }),
          (e.prototype.getSecondDigit = function () {
            return this.secondDigit;
          }),
          (e.prototype.getValue = function () {
            return 10 * this.firstDigit + this.secondDigit;
          }),
          (e.prototype.isFirstDigitFNC1 = function () {
            return this.firstDigit === e.FNC1;
          }),
          (e.prototype.isSecondDigitFNC1 = function () {
            return this.secondDigit === e.FNC1;
          }),
          (e.FNC1 = 10),
          e
        );
      })(o.default);
  },
  1093,
  [1029, 1091],
);
