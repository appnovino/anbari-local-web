// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1057; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      i = t(r(d[2])),
      l = (function () {
        function t(e, n, l, u) {
          ((this.image = e),
            (this.height = e.getHeight()),
            (this.width = e.getWidth()),
            null == n && (n = t.INIT_SIZE),
            null == l && (l = (e.getWidth() / 2) | 0),
            null == u && (u = (e.getHeight() / 2) | 0));
          var a = (n / 2) | 0;
          if (
            ((this.leftInit = l - a),
            (this.rightInit = l + a),
            (this.upInit = u - a),
            (this.downInit = u + a),
            this.upInit < 0 ||
              this.leftInit < 0 ||
              this.downInit >= this.height ||
              this.rightInit >= this.width)
          )
            throw new i.default();
        }
        return (
          (t.prototype.detect = function () {
            for (
              var t = this.leftInit,
                e = this.rightInit,
                n = this.upInit,
                l = this.downInit,
                u = !1,
                a = !0,
                f = !1,
                o = !1,
                h = !1,
                s = !1,
                c = !1,
                w = this.width,
                v = this.height;
              a;

            ) {
              a = !1;
              for (var I = !0; (I || !o) && e < w; )
                (I = this.containsBlackPoint(n, l, e, !1))
                  ? (e++, (a = !0), (o = !0))
                  : o || e++;
              if (e >= w) {
                u = !0;
                break;
              }
              for (var k = !0; (k || !h) && l < v; )
                (k = this.containsBlackPoint(t, e, l, !0))
                  ? (l++, (a = !0), (h = !0))
                  : h || l++;
              if (l >= v) {
                u = !0;
                break;
              }
              for (var p = !0; (p || !s) && t >= 0; )
                (p = this.containsBlackPoint(n, l, t, !1))
                  ? (t--, (a = !0), (s = !0))
                  : s || t--;
              if (t < 0) {
                u = !0;
                break;
              }
              for (var P = !0; (P || !c) && n >= 0; )
                (P = this.containsBlackPoint(t, e, n, !0))
                  ? (n--, (a = !0), (c = !0))
                  : c || n--;
              if (n < 0) {
                u = !0;
                break;
              }
              a && (f = !0);
            }
            if (!u && f) {
              for (var B = e - t, O = null, _ = 1; null === O && _ < B; _++)
                O = this.getBlackPointOnSegment(t, l - _, t + _, l);
              if (null == O) throw new i.default();
              var b = null;
              for (_ = 1; null === b && _ < B; _++)
                b = this.getBlackPointOnSegment(t, n + _, t + _, n);
              if (null == b) throw new i.default();
              var S = null;
              for (_ = 1; null === S && _ < B; _++)
                S = this.getBlackPointOnSegment(e, n + _, e - _, n);
              if (null == S) throw new i.default();
              var y = null;
              for (_ = 1; null === y && _ < B; _++)
                y = this.getBlackPointOnSegment(e, l - _, e - _, l);
              if (null == y) throw new i.default();
              return this.centerEdges(y, O, S, b);
            }
            throw new i.default();
          }),
          (t.prototype.getBlackPointOnSegment = function (t, i, l, u) {
            for (
              var a = n.default.round(n.default.distance(t, i, l, u)),
                f = (l - t) / a,
                o = (u - i) / a,
                h = this.image,
                s = 0;
              s < a;
              s++
            ) {
              var c = n.default.round(t + s * f),
                w = n.default.round(i + s * o);
              if (h.get(c, w)) return new e.default(c, w);
            }
            return null;
          }),
          (t.prototype.centerEdges = function (n, i, l, u) {
            var a = n.getX(),
              f = n.getY(),
              o = i.getX(),
              h = i.getY(),
              s = l.getX(),
              c = l.getY(),
              w = u.getX(),
              v = u.getY(),
              I = t.CORR;
            return a < this.width / 2
              ? [
                  new e.default(w - I, v + I),
                  new e.default(o + I, h + I),
                  new e.default(s - I, c - I),
                  new e.default(a + I, f - I),
                ]
              : [
                  new e.default(w + I, v + I),
                  new e.default(o + I, h - I),
                  new e.default(s - I, c + I),
                  new e.default(a - I, f - I),
                ];
          }),
          (t.prototype.containsBlackPoint = function (t, e, n, i) {
            var l = this.image;
            if (i) {
              for (var u = t; u <= e; u++) if (l.get(u, n)) return !0;
            } else for (var a = t; a <= e; a++) if (l.get(n, a)) return !0;
            return !1;
          }),
          (t.INIT_SIZE = 10),
          (t.CORR = 1),
          t
        );
      })();
  },
  1057,
  [1052, 1053, 1032],
);
