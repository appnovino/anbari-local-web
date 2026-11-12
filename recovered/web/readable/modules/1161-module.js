// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1161; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var e = t(r(d[0])),
      u = t(r(d[1])),
      o = (function () {
        function t() {}
        return (
          (t.prototype.add = function (t, e) {
            return (t + e) % this.modulus;
          }),
          (t.prototype.subtract = function (t, e) {
            return (this.modulus + t - e) % this.modulus;
          }),
          (t.prototype.exp = function (t) {
            return this.expTable[t];
          }),
          (t.prototype.log = function (t) {
            if (0 === t) throw new e.default();
            return this.logTable[t];
          }),
          (t.prototype.inverse = function (t) {
            if (0 === t) throw new u.default();
            return this.expTable[this.modulus - this.logTable[t] - 1];
          }),
          (t.prototype.multiply = function (t, e) {
            return 0 === t || 0 === e
              ? 0
              : this.expTable[
                  (this.logTable[t] + this.logTable[e]) % (this.modulus - 1)
                ];
          }),
          (t.prototype.getSize = function () {
            return this.modulus;
          }),
          (t.prototype.equals = function (t) {
            return t === this;
          }),
          t
        );
      })();
  },
  1161,
  [1014, 1047],
);
