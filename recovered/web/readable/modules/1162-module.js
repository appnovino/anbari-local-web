// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1162; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return n;
        },
      }));
    var e = t(r(d[0])),
      o = t(r(d[1])),
      n = (function () {
        function t(e, o, n, h, u) {
          e instanceof t
            ? this.constructor_2(e)
            : this.constructor_1(e, o, n, h, u);
        }
        return (
          (t.prototype.constructor_1 = function (t, n, h, u, s) {
            var f = null == n || null == h,
              p = null == u || null == s;
            if (f && p) throw new e.default();
            (f
              ? ((n = new o.default(0, u.getY())),
                (h = new o.default(0, s.getY())))
              : p &&
                ((u = new o.default(t.getWidth() - 1, n.getY())),
                (s = new o.default(t.getWidth() - 1, h.getY()))),
              (this.image = t),
              (this.topLeft = n),
              (this.bottomLeft = h),
              (this.topRight = u),
              (this.bottomRight = s),
              (this.minX = Math.trunc(Math.min(n.getX(), h.getX()))),
              (this.maxX = Math.trunc(Math.max(u.getX(), s.getX()))),
              (this.minY = Math.trunc(Math.min(n.getY(), u.getY()))),
              (this.maxY = Math.trunc(Math.max(h.getY(), s.getY()))));
          }),
          (t.prototype.constructor_2 = function (t) {
            ((this.image = t.image),
              (this.topLeft = t.getTopLeft()),
              (this.bottomLeft = t.getBottomLeft()),
              (this.topRight = t.getTopRight()),
              (this.bottomRight = t.getBottomRight()),
              (this.minX = t.getMinX()),
              (this.maxX = t.getMaxX()),
              (this.minY = t.getMinY()),
              (this.maxY = t.getMaxY()));
          }),
          (t.merge = function (e, o) {
            return null == e
              ? o
              : null == o
                ? e
                : new t(
                    e.image,
                    e.topLeft,
                    e.bottomLeft,
                    o.topRight,
                    o.bottomRight,
                  );
          }),
          (t.prototype.addMissingRows = function (e, n, h) {
            var u = this.topLeft,
              s = this.bottomLeft,
              f = this.topRight,
              p = this.bottomRight;
            if (e > 0) {
              var c = h ? this.topLeft : this.topRight,
                l = Math.trunc(c.getY() - e);
              l < 0 && (l = 0);
              var M = new o.default(c.getX(), l);
              h ? (u = M) : (f = M);
            }
            if (n > 0) {
              var Y = h ? this.bottomLeft : this.bottomRight,
                R = Math.trunc(Y.getY() + n);
              R >= this.image.getHeight() && (R = this.image.getHeight() - 1);
              var L = new o.default(Y.getX(), R);
              h ? (s = L) : (p = L);
            }
            return new t(this.image, u, s, f, p);
          }),
          (t.prototype.getMinX = function () {
            return this.minX;
          }),
          (t.prototype.getMaxX = function () {
            return this.maxX;
          }),
          (t.prototype.getMinY = function () {
            return this.minY;
          }),
          (t.prototype.getMaxY = function () {
            return this.maxY;
          }),
          (t.prototype.getTopLeft = function () {
            return this.topLeft;
          }),
          (t.prototype.getTopRight = function () {
            return this.topRight;
          }),
          (t.prototype.getBottomLeft = function () {
            return this.bottomLeft;
          }),
          (t.prototype.getBottomRight = function () {
            return this.bottomRight;
          }),
          t
        );
      })();
  },
  1162,
  [1032, 1052],
);
