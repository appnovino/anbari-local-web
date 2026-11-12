// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1046; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      u = (function () {
        function e() {}
        return (
          (e.prototype.exp = function (e) {
            return this.expTable[e];
          }),
          (e.prototype.log = function (e) {
            if (0 === e) throw new n.default();
            return this.logTable[e];
          }),
          (e.addOrSubtract = function (e, t) {
            return e ^ t;
          }),
          e
        );
      })();
  },
  1046,
  [1014],
);
