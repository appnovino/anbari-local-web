// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1184; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    var t = e(r(_d[0])),
      n = e(r(_d[1])),
      o = e(r(_d[2])),
      i = (function () {
        function e(e) {
          ((this.field = e),
            (this.cachedGenerators = []),
            this.cachedGenerators.push(new t.default(e, Int32Array.from([1]))));
        }
        return (
          (e.prototype.buildGenerator = function (e) {
            var n = this.cachedGenerators;
            if (e >= n.length)
              for (
                var o = n[n.length - 1], i = this.field, u = n.length;
                u <= e;
                u++
              ) {
                var f = o.multiply(
                  new t.default(
                    i,
                    Int32Array.from([1, i.exp(u - 1 + i.getGeneratorBase())]),
                  ),
                );
                (n.push(f), (o = f));
              }
            return n[e];
          }),
          (e.prototype.encode = function (e, i) {
            if (0 === i) throw new o.default('No error correction bytes');
            var u = e.length - i;
            if (u <= 0) throw new o.default('No data bytes provided');
            var f = this.buildGenerator(i),
              l = new Int32Array(u);
            n.default.arraycopy(e, 0, l, 0, u);
            for (
              var d = new t.default(this.field, l),
                c = (d = d.multiplyByMonomial(i, 1))
                  .divide(f)[1]
                  .getCoefficients(),
                h = i - c.length,
                s = 0;
              s < h;
              s++
            )
              e[u + s] = 0;
            n.default.arraycopy(c, 0, e, u + h, c.length);
          }),
          e
        );
      })();
  },
  1184,
  [1045, 1020, 1014],
);
