// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1097; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      o = (function () {
        function e(e) {
          ((this.information = e), (this.generalDecoder = new n.default(e)));
        }
        return (
          (e.prototype.getInformation = function () {
            return this.information;
          }),
          (e.prototype.getGeneralDecoder = function () {
            return this.generalDecoder;
          }),
          e
        );
      })();
  },
  1097,
  [1087],
);
