// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1052; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
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
      n = t(r(d[1])),
      o = (function () {
        function t(t, e) {
          ((this.x = t), (this.y = e));
        }
        return (
          (t.prototype.getX = function () {
            return this.x;
          }),
          (t.prototype.getY = function () {
            return this.y;
          }),
          (t.prototype.equals = function (e) {
            if (e instanceof t) {
              var n = e;
              return this.x === n.x && this.y === n.y;
            }
            return !1;
          }),
          (t.prototype.hashCode = function () {
            return (
              31 * n.default.floatToIntBits(this.x) +
              n.default.floatToIntBits(this.y)
            );
          }),
          (t.prototype.toString = function () {
            return '(' + this.x + ',' + this.y + ')';
          }),
          (t.orderBestPatterns = function (t) {
            var e,
              n,
              o,
              u = this.distance(t[0], t[1]),
              s = this.distance(t[1], t[2]),
              c = this.distance(t[0], t[2]);
            if (
              (s >= u && s >= c
                ? ((n = t[0]), (e = t[1]), (o = t[2]))
                : c >= s && c >= u
                  ? ((n = t[1]), (e = t[0]), (o = t[2]))
                  : ((n = t[2]), (e = t[0]), (o = t[1])),
              this.crossProductZ(e, n, o) < 0)
            ) {
              var f = e;
              ((e = o), (o = f));
            }
            ((t[0] = e), (t[1] = n), (t[2] = o));
          }),
          (t.distance = function (t, n) {
            return e.default.distance(t.x, t.y, n.x, n.y);
          }),
          (t.crossProductZ = function (t, e, n) {
            var o = e.x,
              u = e.y;
            return (n.x - o) * (t.y - u) - (n.y - u) * (t.x - o);
          }),
          t
        );
      })();
  },
  1052,
  [1053, 1054],
);
