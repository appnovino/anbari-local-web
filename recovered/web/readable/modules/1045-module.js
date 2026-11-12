// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1045; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var t = e(r(d[0])),
      i = e(r(d[1])),
      n = e(r(d[2])),
      f = (function () {
        function e(e, t) {
          if (0 === t.length) throw new n.default();
          this.field = e;
          var f = t.length;
          if (f > 1 && 0 === t[0]) {
            for (var o = 1; o < f && 0 === t[o]; ) o++;
            o === f
              ? (this.coefficients = Int32Array.from([0]))
              : ((this.coefficients = new Int32Array(f - o)),
                i.default.arraycopy(
                  t,
                  o,
                  this.coefficients,
                  0,
                  this.coefficients.length,
                ));
          } else this.coefficients = t;
        }
        return (
          (e.prototype.getCoefficients = function () {
            return this.coefficients;
          }),
          (e.prototype.getDegree = function () {
            return this.coefficients.length - 1;
          }),
          (e.prototype.isZero = function () {
            return 0 === this.coefficients[0];
          }),
          (e.prototype.getCoefficient = function (e) {
            return this.coefficients[this.coefficients.length - 1 - e];
          }),
          (e.prototype.evaluateAt = function (e) {
            if (0 === e) return this.getCoefficient(0);
            var i,
              n = this.coefficients;
            if (1 === e) {
              i = 0;
              for (var f = 0, o = n.length; f !== o; f++) {
                var l = n[f];
                i = t.default.addOrSubtract(i, l);
              }
              return i;
            }
            i = n[0];
            var s = n.length,
              a = this.field;
            for (f = 1; f < s; f++)
              i = t.default.addOrSubtract(a.multiply(e, i), n[f]);
            return i;
          }),
          (e.prototype.addOrSubtract = function (f) {
            if (!this.field.equals(f.field))
              throw new n.default(
                'GenericGFPolys do not have same GenericGF field',
              );
            if (this.isZero()) return f;
            if (f.isZero()) return this;
            var o = this.coefficients,
              l = f.coefficients;
            if (o.length > l.length) {
              var s = o;
              ((o = l), (l = s));
            }
            var a = new Int32Array(l.length),
              u = l.length - o.length;
            i.default.arraycopy(l, 0, a, 0, u);
            for (var c = u; c < l.length; c++)
              a[c] = t.default.addOrSubtract(o[c - u], l[c]);
            return new e(this.field, a);
          }),
          (e.prototype.multiply = function (i) {
            if (!this.field.equals(i.field))
              throw new n.default(
                'GenericGFPolys do not have same GenericGF field',
              );
            if (this.isZero() || i.isZero()) return this.field.getZero();
            for (
              var f = this.coefficients,
                o = f.length,
                l = i.coefficients,
                s = l.length,
                a = new Int32Array(o + s - 1),
                u = this.field,
                c = 0;
              c < o;
              c++
            )
              for (var h = f[c], y = 0; y < s; y++)
                a[c + y] = t.default.addOrSubtract(
                  a[c + y],
                  u.multiply(h, l[y]),
                );
            return new e(u, a);
          }),
          (e.prototype.multiplyScalar = function (t) {
            if (0 === t) return this.field.getZero();
            if (1 === t) return this;
            for (
              var i = this.coefficients.length,
                n = this.field,
                f = new Int32Array(i),
                o = this.coefficients,
                l = 0;
              l < i;
              l++
            )
              f[l] = n.multiply(o[l], t);
            return new e(n, f);
          }),
          (e.prototype.multiplyByMonomial = function (t, i) {
            if (t < 0) throw new n.default();
            if (0 === i) return this.field.getZero();
            for (
              var f = this.coefficients,
                o = f.length,
                l = new Int32Array(o + t),
                s = this.field,
                a = 0;
              a < o;
              a++
            )
              l[a] = s.multiply(f[a], i);
            return new e(s, l);
          }),
          (e.prototype.divide = function (e) {
            if (!this.field.equals(e.field))
              throw new n.default(
                'GenericGFPolys do not have same GenericGF field',
              );
            if (e.isZero()) throw new n.default('Divide by 0');
            for (
              var t = this.field,
                i = t.getZero(),
                f = this,
                o = e.getCoefficient(e.getDegree()),
                l = t.inverse(o);
              f.getDegree() >= e.getDegree() && !f.isZero();

            ) {
              var s = f.getDegree() - e.getDegree(),
                a = t.multiply(f.getCoefficient(f.getDegree()), l),
                u = e.multiplyByMonomial(s, a),
                c = t.buildMonomial(s, a);
              ((i = i.addOrSubtract(c)), (f = f.addOrSubtract(u)));
            }
            return [i, f];
          }),
          (e.prototype.toString = function () {
            for (var e = '', t = this.getDegree(); t >= 0; t--) {
              var i = this.getCoefficient(t);
              if (0 !== i) {
                if (
                  (i < 0
                    ? ((e += ' - '), (i = -i))
                    : e.length > 0 && (e += ' + '),
                  0 === t || 1 !== i)
                ) {
                  var n = this.field.log(i);
                  0 === n
                    ? (e += '1')
                    : 1 === n
                      ? (e += 'a')
                      : ((e += 'a^'), (e += n));
                }
                0 !== t && (1 === t ? (e += 'x') : ((e += 'x^'), (e += t)));
              }
            }
            return e;
          }),
          e
        );
      })();
  },
  1045,
  [1046, 1020, 1014],
);
