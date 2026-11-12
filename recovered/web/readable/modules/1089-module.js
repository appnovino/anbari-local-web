// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1089; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    var t;
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (function (t) {
        ((t[(t.NUMERIC = 0)] = 'NUMERIC'),
          (t[(t.ALPHA = 1)] = 'ALPHA'),
          (t[(t.ISO_IEC_646 = 2)] = 'ISO_IEC_646'));
      })(t || (t = {})));
    var n = (function () {
      function n() {
        ((this.position = 0), (this.encoding = t.NUMERIC));
      }
      return (
        (n.prototype.getPosition = function () {
          return this.position;
        }),
        (n.prototype.setPosition = function (t) {
          this.position = t;
        }),
        (n.prototype.incrementPosition = function (t) {
          this.position += t;
        }),
        (n.prototype.isAlpha = function () {
          return this.encoding === t.ALPHA;
        }),
        (n.prototype.isNumeric = function () {
          return this.encoding === t.NUMERIC;
        }),
        (n.prototype.isIsoIec646 = function () {
          return this.encoding === t.ISO_IEC_646;
        }),
        (n.prototype.setNumeric = function () {
          this.encoding = t.NUMERIC;
        }),
        (n.prototype.setAlpha = function () {
          this.encoding = t.ALPHA;
        }),
        (n.prototype.setIsoIec646 = function () {
          this.encoding = t.ISO_IEC_646;
        }),
        n
      );
    })();
  },
  1089,
  [],
);
