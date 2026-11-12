// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1083; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t,
      e = r(d[0]),
      n = (t = e) && t.__esModule ? t : { default: t },
      u = (function () {
        function t(t, e, u, s, o) {
          ((this.value = t),
            (this.startEnd = e),
            (this.resultPoints = new Array()),
            this.resultPoints.push(new n.default(u, o)),
            this.resultPoints.push(new n.default(s, o)));
        }
        return (
          (t.prototype.getValue = function () {
            return this.value;
          }),
          (t.prototype.getStartEnd = function () {
            return this.startEnd;
          }),
          (t.prototype.getResultPoints = function () {
            return this.resultPoints;
          }),
          (t.prototype.equals = function (e) {
            if (!(e instanceof t)) return !1;
            var n = e;
            return this.value === n.value;
          }),
          (t.prototype.hashCode = function () {
            return this.value;
          }),
          t
        );
      })();
  },
  1083,
  [1052],
);
