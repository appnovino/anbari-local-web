// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1048; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var t = e(_r(d[0])),
      r = e(_r(d[1])),
      i = e(_r(d[2])),
      o = e(_r(d[3])),
      n = (function () {
        function e(e) {
          this.field = e;
        }
        return (
          (e.prototype.decode = function (e, t) {
            this.decodeWithECCount(e, t);
          }),
          (e.prototype.decodeWithECCount = function (e, o) {
            for (
              var n = this.field,
                a = new r.default(n, e),
                l = new Int32Array(o),
                u = !0,
                f = 0;
              f < o;
              f++
            ) {
              var c = a.evaluateAt(n.exp(f + n.getGeneratorBase()));
              ((l[l.length - 1 - f] = c), 0 !== c && (u = !1));
            }
            if (u) return 0;
            var s = new r.default(n, l),
              v = this.runEuclideanAlgorithm(n.buildMonomial(o, 1), s, o),
              h = v[0],
              p = v[1],
              y = this.findErrorLocations(h),
              w = this.findErrorMagnitudes(p, y);
            for (f = 0; f < y.length; f++) {
              var D = e.length - 1 - n.log(y[f]);
              if (D < 0) throw new i.default('Bad error location');
              e[D] = t.default.addOrSubtract(e[D], w[f]);
            }
            return y.length;
          }),
          (e.prototype.runEuclideanAlgorithm = function (e, t, r) {
            if (e.getDegree() < t.getDegree()) {
              var n = e;
              ((e = t), (t = n));
            }
            for (
              var a = this.field, l = e, u = t, f = a.getZero(), c = a.getOne();
              u.getDegree() >= ((r / 2) | 0);

            ) {
              var s = l,
                v = f;
              if (((f = c), (l = u).isZero()))
                throw new i.default('r_{i-1} was zero');
              u = s;
              for (
                var h = a.getZero(),
                  p = l.getCoefficient(l.getDegree()),
                  y = a.inverse(p);
                u.getDegree() >= l.getDegree() && !u.isZero();

              ) {
                var w = u.getDegree() - l.getDegree(),
                  D = a.multiply(u.getCoefficient(u.getDegree()), y);
                ((h = h.addOrSubtract(a.buildMonomial(w, D))),
                  (u = u.addOrSubtract(l.multiplyByMonomial(w, D))));
              }
              if (
                ((c = h.multiply(f).addOrSubtract(v)),
                u.getDegree() >= l.getDegree())
              )
                throw new o.default(
                  'Division algorithm failed to reduce polynomial?',
                );
            }
            var b = c.getCoefficient(0);
            if (0 === b) throw new i.default('sigmaTilde(0) was zero');
            var A = a.inverse(b);
            return [c.multiplyScalar(A), u.multiplyScalar(A)];
          }),
          (e.prototype.findErrorLocations = function (e) {
            var t = e.getDegree();
            if (1 === t) return Int32Array.from([e.getCoefficient(1)]);
            for (
              var r = new Int32Array(t), o = 0, n = this.field, a = 1;
              a < n.getSize() && o < t;
              a++
            )
              0 === e.evaluateAt(a) && ((r[o] = n.inverse(a)), o++);
            if (o !== t)
              throw new i.default(
                'Error locator degree does not match number of roots',
              );
            return r;
          }),
          (e.prototype.findErrorMagnitudes = function (e, t) {
            for (
              var r = t.length, i = new Int32Array(r), o = this.field, n = 0;
              n < r;
              n++
            ) {
              for (var a = o.inverse(t[n]), l = 1, u = 0; u < r; u++)
                if (n !== u) {
                  var f = o.multiply(t[u], a),
                    c = 1 & f ? -2 & f : 1 | f;
                  l = o.multiply(l, c);
                }
              ((i[n] = o.multiply(e.evaluateAt(a), o.inverse(l))),
                0 !== o.getGeneratorBase() && (i[n] = o.multiply(i[n], a)));
            }
            return i;
          }),
          e
        );
      })();
  },
  1048,
  [1044, 1045, 1049, 1050],
);
