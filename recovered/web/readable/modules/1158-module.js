// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1158; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a2, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var t = e(_r(d[0])),
      r = e(_r(d[1])),
      i = e(_r(d[2])),
      n =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            i = 0;
          if (r) return r.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && i >= e.length && (e = void 0),
                  { value: e && e[i++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      l = (function () {
        function e() {
          this.field = i.default.PDF417_GF;
        }
        return (
          (e.prototype.decode = function (e, i, l) {
            for (
              var f,
                o,
                a = new r.default(this.field, e),
                u = new Int32Array(i),
                s = !1,
                h = i;
              h > 0;
              h--
            ) {
              var c = a.evaluateAt(this.field.exp(h));
              ((u[i - h] = c), 0 !== c && (s = !0));
            }
            if (!s) return 0;
            var v = this.field.getOne();
            if (null != l)
              try {
                for (var y = n(l), p = y.next(); !p.done; p = y.next()) {
                  var m = p.value,
                    b = this.field.exp(e.length - 1 - m),
                    w = new r.default(
                      this.field,
                      new Int32Array([this.field.subtract(0, b), 1]),
                    );
                  v = v.multiply(w);
                }
              } catch (e) {
                f = { error: e };
              } finally {
                try {
                  p && !p.done && (o = y.return) && o.call(y);
                } finally {
                  if (f) throw f.error;
                }
              }
            var D = new r.default(this.field, u),
              A = this.runEuclideanAlgorithm(
                this.field.buildMonomial(i, 1),
                D,
                i,
              ),
              I = A[0],
              _ = A[1],
              C = this.findErrorLocations(I),
              M = this.findErrorMagnitudes(_, I, C);
            for (h = 0; h < C.length; h++) {
              var E = e.length - 1 - this.field.log(C[h]);
              if (E < 0) throw t.default.getChecksumInstance();
              e[E] = this.field.subtract(e[E], M[h]);
            }
            return C.length;
          }),
          (e.prototype.runEuclideanAlgorithm = function (e, r, i) {
            if (e.getDegree() < r.getDegree()) {
              var n = e;
              ((e = r), (r = n));
            }
            for (
              var l = e,
                f = r,
                o = this.field.getZero(),
                a = this.field.getOne();
              f.getDegree() >= Math.round(i / 2);

            ) {
              var u = l,
                s = o;
              if (((o = a), (l = f).isZero()))
                throw t.default.getChecksumInstance();
              f = u;
              for (
                var h = this.field.getZero(),
                  c = l.getCoefficient(l.getDegree()),
                  v = this.field.inverse(c);
                f.getDegree() >= l.getDegree() && !f.isZero();

              ) {
                var y = f.getDegree() - l.getDegree(),
                  p = this.field.multiply(f.getCoefficient(f.getDegree()), v);
                ((h = h.add(this.field.buildMonomial(y, p))),
                  (f = f.subtract(l.multiplyByMonomial(y, p))));
              }
              a = h.multiply(o).subtract(s).negative();
            }
            var m = a.getCoefficient(0);
            if (0 === m) throw t.default.getChecksumInstance();
            var b = this.field.inverse(m);
            return [a.multiply(b), f.multiply(b)];
          }),
          (e.prototype.findErrorLocations = function (e) {
            for (
              var r = e.getDegree(), i = new Int32Array(r), n = 0, l = 1;
              l < this.field.getSize() && n < r;
              l++
            )
              0 === e.evaluateAt(l) && ((i[n] = this.field.inverse(l)), n++);
            if (n !== r) throw t.default.getChecksumInstance();
            return i;
          }),
          (e.prototype.findErrorMagnitudes = function (e, t, i) {
            for (
              var n = t.getDegree(), l = new Int32Array(n), f = 1;
              f <= n;
              f++
            )
              l[n - f] = this.field.multiply(f, t.getCoefficient(f));
            var o = new r.default(this.field, l),
              a = i.length,
              u = new Int32Array(a);
            for (f = 0; f < a; f++) {
              var s = this.field.inverse(i[f]),
                h = this.field.subtract(0, e.evaluateAt(s)),
                c = this.field.inverse(o.evaluateAt(s));
              u[f] = this.field.multiply(h, c);
            }
            return u;
          }),
          e
        );
      })();
  },
  1158,
  [1015, 1159, 1160],
);
