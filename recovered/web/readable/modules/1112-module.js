// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1112; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      n = e(r(d[2])),
      u = e(r(d[3])),
      f = e(r(d[4])),
      i = e(r(d[5])),
      l =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            o = t && e[t],
            n = 0;
          if (o) return o.call(e);
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
      c = (function () {
        function e() {
          this.rsDecoder = new n.default(o.default.DATA_MATRIX_FIELD_256);
        }
        return (
          (e.prototype.decode = function (e) {
            var t,
              o,
              n = new u.default(e),
              c = n.getVersion(),
              s = n.readCodewords(),
              y = f.default.getDataBlocks(s, c),
              h = 0;
            try {
              for (var v = l(y), w = v.next(); !w.done; w = v.next()) {
                h += w.value.getNumDataCodewords();
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                w && !w.done && (o = v.return) && o.call(v);
              } finally {
                if (t) throw t.error;
              }
            }
            for (var _ = new Uint8Array(h), b = y.length, p = 0; p < b; p++) {
              var m = y[p],
                D = m.getCodewords(),
                A = m.getNumDataCodewords();
              this.correctErrors(D, A);
              for (var C = 0; C < A; C++) _[C * b + p] = D[C];
            }
            return i.default.decode(_);
          }),
          (e.prototype.correctErrors = function (e, o) {
            var n = new Int32Array(e);
            try {
              this.rsDecoder.decode(n, e.length - o);
            } catch (e) {
              throw new t.default();
            }
            for (var u = 0; u < o; u++) e[u] = n[u];
          }),
          e
        );
      })();
  },
  1112,
  [1015, 1044, 1048, 1113, 1115, 1116],
);
