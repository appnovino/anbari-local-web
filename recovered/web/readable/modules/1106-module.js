// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1106; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    var t = (function () {
      function t(t, n, h) {
        ((this.leftChar = t), (this.rightChar = n), (this.finderPattern = h));
      }
      return (
        (t.prototype.getLeftChar = function () {
          return this.leftChar;
        }),
        (t.prototype.getRightChar = function () {
          return this.rightChar;
        }),
        (t.prototype.getFinderPattern = function () {
          return this.finderPattern;
        }),
        (t.prototype.mustBeLast = function () {
          return null === this.rightChar;
        }),
        (t.prototype.toString = function () {
          return (
            '[ ' +
            this.leftChar +
            ', ' +
            this.rightChar +
            ' : ' +
            (null === this.finderPattern
              ? 'null'
              : this.finderPattern.getValue()) +
            ' ]'
          );
        }),
        (t.equals = function (n, h) {
          return null === h
            ? null === n
            : h instanceof t &&
                (null === n.leftChar
                  ? null === h.leftChar
                  : n.leftChar.equals(h.leftChar)) &&
                (null === n.rightChar
                  ? null === h.rightChar
                  : n.rightChar.equals(h.rightChar)) &&
                (null === n.finderPattern
                  ? null === h.finderPattern
                  : n.finderPattern.equals(h.finderPattern));
        }),
        (t.prototype.hashCode = function () {
          return (
            t.hashNotNull(this.leftChar) ^
            t.hashNotNull(this.rightChar) ^
            t.hashNotNull(this.finderPattern)
          );
        }),
        (t.hashNotNull = function (t) {
          return null === t ? 0 : t.hashCode();
        }),
        t
      );
    })();
  },
  1106,
  [],
);
