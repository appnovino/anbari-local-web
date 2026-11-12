// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1017; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
      function t(t) {
        this.source = t;
      }
      return (
        (t.prototype.getLuminanceSource = function () {
          return this.source;
        }),
        (t.prototype.getWidth = function () {
          return this.source.getWidth();
        }),
        (t.prototype.getHeight = function () {
          return this.source.getHeight();
        }),
        t
      );
    })();
  },
  1017,
  [],
);
