// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1043; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
      function t(t, n, u, o, s, p) {
        (void 0 === s && (s = -1),
          void 0 === p && (p = -1),
          (this.rawBytes = t),
          (this.text = n),
          (this.byteSegments = u),
          (this.ecLevel = o),
          (this.structuredAppendSequenceNumber = s),
          (this.structuredAppendParity = p),
          (this.numBits = null == t ? 0 : 8 * t.length));
      }
      return (
        (t.prototype.getRawBytes = function () {
          return this.rawBytes;
        }),
        (t.prototype.getNumBits = function () {
          return this.numBits;
        }),
        (t.prototype.setNumBits = function (t) {
          this.numBits = t;
        }),
        (t.prototype.getText = function () {
          return this.text;
        }),
        (t.prototype.getByteSegments = function () {
          return this.byteSegments;
        }),
        (t.prototype.getECLevel = function () {
          return this.ecLevel;
        }),
        (t.prototype.getErrorsCorrected = function () {
          return this.errorsCorrected;
        }),
        (t.prototype.setErrorsCorrected = function (t) {
          this.errorsCorrected = t;
        }),
        (t.prototype.getErasures = function () {
          return this.erasures;
        }),
        (t.prototype.setErasures = function (t) {
          this.erasures = t;
        }),
        (t.prototype.getOther = function () {
          return this.other;
        }),
        (t.prototype.setOther = function (t) {
          this.other = t;
        }),
        (t.prototype.hasStructuredAppend = function () {
          return (
            this.structuredAppendParity >= 0 &&
            this.structuredAppendSequenceNumber >= 0
          );
        }),
        (t.prototype.getStructuredAppendParity = function () {
          return this.structuredAppendParity;
        }),
        (t.prototype.getStructuredAppendSequenceNumber = function () {
          return this.structuredAppendSequenceNumber;
        }),
        t
      );
    })();
  },
  1043,
  [],
);
