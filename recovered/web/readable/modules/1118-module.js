// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1118; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return u;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      s = t(r(d[2])),
      o = t(r(d[3])),
      h = t(r(d[4])),
      u = (function () {
        function t(t) {
          ((this.image = t),
            (this.rectangleDetector = new e.default(this.image)));
        }
        return (
          (t.prototype.detect = function () {
            var e = this.rectangleDetector.detect(),
              s = this.detectSolid1(e);
            if (
              (((s = this.detectSolid2(s))[3] = this.correctTopRight(s)), !s[3])
            )
              throw new o.default();
            var h = (s = this.shiftToModuleCenter(s))[0],
              u = s[1],
              f = s[2],
              c = s[3],
              w = this.transitionsBetween(h, c) + 1,
              l = this.transitionsBetween(f, c) + 1;
            (1 & ~w || (w += 1),
              1 & ~l || (l += 1),
              4 * w < 7 * l && 4 * l < 7 * w && (w = l = Math.max(w, l)));
            var v = t.sampleGrid(this.image, h, u, f, c, w, l);
            return new n.default(v, [h, u, f, c]);
          }),
          (t.shiftPoint = function (t, e, n) {
            var s = (e.getX() - t.getX()) / (n + 1),
              o = (e.getY() - t.getY()) / (n + 1);
            return new h.default(t.getX() + s, t.getY() + o);
          }),
          (t.moveAway = function (t, e, n) {
            var s = t.getX(),
              o = t.getY();
            return (
              s < e ? (s -= 1) : (s += 1),
              o < n ? (o -= 1) : (o += 1),
              new h.default(s, o)
            );
          }),
          (t.prototype.detectSolid1 = function (t) {
            var e = t[0],
              n = t[1],
              s = t[3],
              o = t[2],
              h = this.transitionsBetween(e, n),
              u = this.transitionsBetween(n, s),
              f = this.transitionsBetween(s, o),
              c = this.transitionsBetween(o, e),
              w = h,
              l = [o, e, n, s];
            return (
              w > u &&
                ((w = u), (l[0] = e), (l[1] = n), (l[2] = s), (l[3] = o)),
              w > f &&
                ((w = f), (l[0] = n), (l[1] = s), (l[2] = o), (l[3] = e)),
              w > c && ((l[0] = s), (l[1] = o), (l[2] = e), (l[3] = n)),
              l
            );
          }),
          (t.prototype.detectSolid2 = function (e) {
            var n = e[0],
              s = e[1],
              o = e[2],
              h = e[3],
              u = this.transitionsBetween(n, h),
              f = t.shiftPoint(s, o, 4 * (u + 1)),
              c = t.shiftPoint(o, s, 4 * (u + 1));
            return (
              this.transitionsBetween(f, n) < this.transitionsBetween(c, h)
                ? ((e[0] = n), (e[1] = s), (e[2] = o), (e[3] = h))
                : ((e[0] = s), (e[1] = o), (e[2] = h), (e[3] = n)),
              e
            );
          }),
          (t.prototype.correctTopRight = function (e) {
            var n = e[0],
              s = e[1],
              o = e[2],
              u = e[3],
              f = this.transitionsBetween(n, u),
              c = this.transitionsBetween(s, u),
              w = t.shiftPoint(n, s, 4 * (c + 1)),
              l = t.shiftPoint(o, s, 4 * (f + 1));
            ((f = this.transitionsBetween(w, u)),
              (c = this.transitionsBetween(l, u)));
            var v = new h.default(
                u.getX() + (o.getX() - s.getX()) / (f + 1),
                u.getY() + (o.getY() - s.getY()) / (f + 1),
              ),
              B = new h.default(
                u.getX() + (n.getX() - s.getX()) / (c + 1),
                u.getY() + (n.getY() - s.getY()) / (c + 1),
              );
            return this.isValid(v)
              ? this.isValid(B)
                ? this.transitionsBetween(w, v) +
                    this.transitionsBetween(l, v) >
                  this.transitionsBetween(w, B) + this.transitionsBetween(l, B)
                  ? v
                  : B
                : v
              : this.isValid(B)
                ? B
                : null;
          }),
          (t.prototype.shiftToModuleCenter = function (e) {
            var n = e[0],
              s = e[1],
              o = e[2],
              h = e[3],
              u = this.transitionsBetween(n, h) + 1,
              f = this.transitionsBetween(o, h) + 1,
              c = t.shiftPoint(n, s, 4 * f),
              w = t.shiftPoint(o, s, 4 * u);
            (1 & ~(u = this.transitionsBetween(c, h) + 1) || (u += 1),
              1 & ~(f = this.transitionsBetween(w, h) + 1) || (f += 1));
            var l,
              v,
              B = (n.getX() + s.getX() + o.getX() + h.getX()) / 4,
              X = (n.getY() + s.getY() + o.getY() + h.getY()) / 4;
            return (
              (n = t.moveAway(n, B, X)),
              (s = t.moveAway(s, B, X)),
              (o = t.moveAway(o, B, X)),
              (h = t.moveAway(h, B, X)),
              (c = t.shiftPoint(n, s, 4 * f)),
              (c = t.shiftPoint(c, h, 4 * u)),
              (l = t.shiftPoint(s, n, 4 * f)),
              (l = t.shiftPoint(l, o, 4 * u)),
              (w = t.shiftPoint(o, h, 4 * f)),
              (w = t.shiftPoint(w, s, 4 * u)),
              (v = t.shiftPoint(h, o, 4 * f)),
              [c, l, w, (v = t.shiftPoint(v, n, 4 * u))]
            );
          }),
          (t.prototype.isValid = function (t) {
            return (
              t.getX() >= 0 &&
              t.getX() < this.image.getWidth() &&
              t.getY() > 0 &&
              t.getY() < this.image.getHeight()
            );
          }),
          (t.sampleGrid = function (t, e, n, o, h, u, f) {
            return s.default
              .getInstance()
              .sampleGrid(
                t,
                u,
                f,
                0.5,
                0.5,
                u - 0.5,
                0.5,
                u - 0.5,
                f - 0.5,
                0.5,
                f - 0.5,
                e.getX(),
                e.getY(),
                h.getX(),
                h.getY(),
                o.getX(),
                o.getY(),
                n.getX(),
                n.getY(),
              );
          }),
          (t.prototype.transitionsBetween = function (t, e) {
            var n = Math.trunc(t.getX()),
              s = Math.trunc(t.getY()),
              o = Math.trunc(e.getX()),
              h = Math.trunc(e.getY()),
              u = Math.abs(h - s) > Math.abs(o - n);
            if (u) {
              var f = n;
              ((n = s), (s = f), (f = o), (o = h), (h = f));
            }
            for (
              var c = Math.abs(o - n),
                w = Math.abs(h - s),
                l = -c / 2,
                v = s < h ? 1 : -1,
                B = n < o ? 1 : -1,
                X = 0,
                Y = this.image.get(u ? s : n, u ? n : s),
                p = n,
                P = s;
              p !== o;
              p += B
            ) {
              var y = this.image.get(u ? P : p, u ? p : P);
              if ((y !== Y && (X++, (Y = y)), (l += w) > 0)) {
                if (P === h) break;
                ((P += v), (l -= c));
              }
            }
            return X;
          }),
          t
        );
      })();
  },
  1118,
  [1057, 1056, 1058, 1032, 1052],
);
