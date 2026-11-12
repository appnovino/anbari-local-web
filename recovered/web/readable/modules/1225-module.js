// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1225; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t,
      n,
      i = r(_d[0]),
      e = (t = i) && t.__esModule ? t : { default: t },
      o =
        (this && this.__extends) ||
        ((n = function (t, i) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, n) {
                  t.__proto__ = n;
                }) ||
              function (t, n) {
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
              }),
            n(t, i)
          );
        }),
        function (t, i) {
          if ('function' != typeof i && null !== i)
            throw new TypeError(
              'Class extends value ' +
                String(i) +
                ' is not a constructor or null',
            );
          function e() {
            this.constructor = t;
          }
          (n(t, i),
            (t.prototype =
              null === i
                ? Object.create(i)
                : ((e.prototype = i.prototype), new e())));
        }),
      u = (function (t) {
        function n(n, i, e) {
          var o = t.call(this, n, 0, 0) || this;
          return ((o.binaryShiftStart = i), (o.binaryShiftByteCount = e), o);
        }
        return (
          o(n, t),
          (n.prototype.appendTo = function (t, n) {
            for (var i = 0; i < this.binaryShiftByteCount; i++)
              ((0 === i || (31 === i && this.binaryShiftByteCount <= 62)) &&
                (t.appendBits(31, 5),
                this.binaryShiftByteCount > 62
                  ? t.appendBits(this.binaryShiftByteCount - 31, 16)
                  : 0 === i
                    ? t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5)
                    : t.appendBits(this.binaryShiftByteCount - 31, 5)),
                t.appendBits(n[this.binaryShiftStart + i], 8));
          }),
          (n.prototype.addBinaryShift = function (t, i) {
            return new n(this, t, i);
          }),
          (n.prototype.toString = function () {
            return (
              '<' +
              this.binaryShiftStart +
              '::' +
              (this.binaryShiftStart + this.binaryShiftByteCount - 1) +
              '>'
            );
          }),
          n
        );
      })(e.default);
  },
  1225,
  [1223],
);
