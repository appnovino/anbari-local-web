// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1025; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    var t,
      e = r(d[0]),
      n = (t = e) && t.__esModule ? t : { default: t },
      i = (function () {
        function t(t) {
          (void 0 === t && (t = ''), (this.value = t));
        }
        return (
          (t.prototype.enableDecoding = function (t) {
            return ((this.encoding = t), this);
          }),
          (t.prototype.append = function (t) {
            return (
              'string' == typeof t
                ? (this.value += t.toString())
                : this.encoding
                  ? (this.value += n.default.castAsNonUtf8Char(
                      t,
                      this.encoding,
                    ))
                  : (this.value += String.fromCharCode(t)),
              this
            );
          }),
          (t.prototype.appendChars = function (t, e, n) {
            for (var i = e; e < e + n; i++) this.append(t[i]);
            return this;
          }),
          (t.prototype.length = function () {
            return this.value.length;
          }),
          (t.prototype.charAt = function (t) {
            return this.value.charAt(t);
          }),
          (t.prototype.deleteCharAt = function (t) {
            this.value = this.value.substr(0, t) + this.value.substring(t + 1);
          }),
          (t.prototype.setCharAt = function (t, e) {
            this.value = this.value.substr(0, t) + e + this.value.substr(t + 1);
          }),
          (t.prototype.substring = function (t, e) {
            return this.value.substring(t, e);
          }),
          (t.prototype.setLengthToZero = function () {
            this.value = '';
          }),
          (t.prototype.toString = function () {
            return this.value;
          }),
          (t.prototype.insert = function (t, e) {
            this.value =
              this.value.substring(0, t) + e + this.value.substring(t);
          }),
          t
        );
      })();
  },
  1025,
  [1026],
);
