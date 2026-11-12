// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1082; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
      function t(t, n) {
        ((this.value = t), (this.checksumPortion = n));
      }
      return (
        (t.prototype.getValue = function () {
          return this.value;
        }),
        (t.prototype.getChecksumPortion = function () {
          return this.checksumPortion;
        }),
        (t.prototype.toString = function () {
          return this.value + '(' + this.checksumPortion + ')';
        }),
        (t.prototype.equals = function (n) {
          if (!(n instanceof t)) return !1;
          var o = n;
          return (
            this.value === o.value && this.checksumPortion === o.checksumPortion
          );
        }),
        (t.prototype.hashCode = function () {
          return this.value ^ this.checksumPortion;
        }),
        t
      );
    })();
  },
  1082,
  [],
);
