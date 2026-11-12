// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1159; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a2, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = e(r(d[0])),
      i = e(r(d[1])),
      n = e(r(d[2])),
      f =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            i = t && e[t],
            n = 0;
          if (i) return i.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      o = (function () {
        function e(e, n) {
          if (0 === n.length) throw new t.default();
          this.field = e;
          var f = n.length;
          if (f > 1 && 0 === n[0]) {
            for (var o = 1; o < f && 0 === n[o]; ) o++;
            o === f
              ? (this.coefficients = new Int32Array([0]))
              : ((this.coefficients = new Int32Array(f - o)),
                i.default.arraycopy(
                  n,
                  o,
                  this.coefficients,
                  0,
                  this.coefficients.length,
                ));
          } else this.coefficients = n;
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
            var t, i;
            if (0 === e) return this.getCoefficient(0);
            if (1 === e) {
              var n = 0;
              try {
                for (
                  var o = f(this.coefficients), l = o.next();
                  !l.done;
                  l = o.next()
                ) {
                  var s = l.value;
                  n = this.field.add(n, s);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  l && !l.done && (i = o.return) && i.call(o);
                } finally {
                  if (t) throw t.error;
                }
              }
              return n;
            }
            for (
              var u = this.coefficients[0], a = this.coefficients.length, h = 1;
              h < a;
              h++
            )
              u = this.field.add(
                this.field.multiply(e, u),
                this.coefficients[h],
              );
            return u;
          }),
          (e.prototype.add = function (n) {
            if (!this.field.equals(n.field))
              throw new t.default(
                'ModulusPolys do not have same ModulusGF field',
              );
            if (this.isZero()) return n;
            if (n.isZero()) return this;
            var f = this.coefficients,
              o = n.coefficients;
            if (f.length > o.length) {
              var l = f;
              ((f = o), (o = l));
            }
            var s = new Int32Array(o.length),
              u = o.length - f.length;
            i.default.arraycopy(o, 0, s, 0, u);
            for (var a = u; a < o.length; a++)
              s[a] = this.field.add(f[a - u], o[a]);
            return new e(this.field, s);
          }),
          (e.prototype.subtract = function (e) {
            if (!this.field.equals(e.field))
              throw new t.default(
                'ModulusPolys do not have same ModulusGF field',
              );
            return e.isZero() ? this : this.add(e.negative());
          }),
          (e.prototype.multiply = function (t) {
            return t instanceof e
              ? this.multiplyOther(t)
              : this.multiplyScalar(t);
          }),
          (e.prototype.multiplyOther = function (i) {
            if (!this.field.equals(i.field))
              throw new t.default(
                'ModulusPolys do not have same ModulusGF field',
              );
            if (this.isZero() || i.isZero())
              return new e(this.field, new Int32Array([0]));
            for (
              var n = this.coefficients,
                f = n.length,
                o = i.coefficients,
                l = o.length,
                s = new Int32Array(f + l - 1),
                u = 0;
              u < f;
              u++
            )
              for (var a = n[u], h = 0; h < l; h++)
                s[u + h] = this.field.add(
                  s[u + h],
                  this.field.multiply(a, o[h]),
                );
            return new e(this.field, s);
          }),
          (e.prototype.negative = function () {
            for (
              var t = this.coefficients.length, i = new Int32Array(t), n = 0;
              n < t;
              n++
            )
              i[n] = this.field.subtract(0, this.coefficients[n]);
            return new e(this.field, i);
          }),
          (e.prototype.multiplyScalar = function (t) {
            if (0 === t) return new e(this.field, new Int32Array([0]));
            if (1 === t) return this;
            for (
              var i = this.coefficients.length, n = new Int32Array(i), f = 0;
              f < i;
              f++
            )
              n[f] = this.field.multiply(this.coefficients[f], t);
            return new e(this.field, n);
          }),
          (e.prototype.multiplyByMonomial = function (i, n) {
            if (i < 0) throw new t.default();
            if (0 === n) return new e(this.field, new Int32Array([0]));
            for (
              var f = this.coefficients.length,
                o = new Int32Array(f + i),
                l = 0;
              l < f;
              l++
            )
              o[l] = this.field.multiply(this.coefficients[l], n);
            return new e(this.field, o);
          }),
          (e.prototype.toString = function () {
            for (var e = new n.default(), t = this.getDegree(); t >= 0; t--) {
              var i = this.getCoefficient(t);
              0 !== i &&
                (i < 0
                  ? (e.append(' - '), (i = -i))
                  : e.length() > 0 && e.append(' + '),
                (0 !== t && 1 === i) || e.append(i),
                0 !== t &&
                  (1 === t ? e.append('x') : (e.append('x^'), e.append(t))));
            }
            return e.toString();
          }),
          e
        );
      })();
  },
  1159,
  [1014, 1020, 1025],
);
