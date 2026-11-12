// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1223; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
    var n,
      e = t(r(_d[0])),
      o = t(r(_d[1])),
      u =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, n) {
                  t.__proto__ = n;
                }) ||
              function (t, n) {
                for (var e in n)
                  Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
              }),
            n(t, e)
          );
        }),
        function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Class extends value ' +
                String(e) +
                ' is not a constructor or null',
            );
          function o() {
            this.constructor = t;
          }
          (n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o())));
        }),
      s = (function (t) {
        function n(n, e, o) {
          var u = t.call(this, n) || this;
          return ((u.value = e), (u.bitCount = o), u);
        }
        return (
          u(n, t),
          (n.prototype.appendTo = function (t, n) {
            t.appendBits(this.value, this.bitCount);
          }),
          (n.prototype.add = function (t, e) {
            return new n(this, t, e);
          }),
          (n.prototype.addBinaryShift = function (t, e) {
            return (
              console.warn(
                'addBinaryShift on SimpleToken, this simply returns a copy of this token',
              ),
              new n(this, t, e)
            );
          }),
          (n.prototype.toString = function () {
            var t = this.value & ((1 << this.bitCount) - 1);
            return (
              (t |= 1 << this.bitCount),
              '<' +
                o.default
                  .toBinaryString(t | (1 << this.bitCount))
                  .substring(1) +
                '>'
            );
          }),
          n
        );
      })(e.default);
  },
  1223,
  [1224, 1023],
);
