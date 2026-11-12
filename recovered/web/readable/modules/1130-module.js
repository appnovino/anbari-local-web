// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1130; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var e,
      o = r(d[0]),
      t = (e = o) && e.__esModule ? e : { default: e },
      n =
        (this && this.__values) ||
        function (e) {
          var o = 'function' == typeof Symbol && Symbol.iterator,
            t = o && e[o],
            n = 0;
          if (t) return t.call(e);
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
            o ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      l = (function () {
        function e(e, o) {
          ((this.numDataCodewords = e), (this.codewords = o));
        }
        return (
          (e.getDataBlocks = function (o, l, u) {
            var f, i, c, s;
            if (o.length !== l.getTotalCodewords()) throw new t.default();
            var w = l.getECBlocksForLevel(u),
              v = 0,
              y = w.getECBlocks();
            try {
              for (var h = n(y), C = h.next(); !C.done; C = h.next()) {
                v += (k = C.value).getCount();
              }
            } catch (e) {
              f = { error: e };
            } finally {
              try {
                C && !C.done && (i = h.return) && i.call(h);
              } finally {
                if (f) throw f.error;
              }
            }
            var b = new Array(v),
              p = 0;
            try {
              for (var m = n(y), _ = m.next(); !_.done; _ = m.next())
                for (var k = _.value, x = 0; x < k.getCount(); x++) {
                  var B = k.getDataCodewords(),
                    D = w.getECCodewordsPerBlock() + B;
                  b[p++] = new e(B, new Uint8Array(D));
                }
            } catch (e) {
              c = { error: e };
            } finally {
              try {
                _ && !_.done && (s = m.return) && s.call(m);
              } finally {
                if (c) throw c.error;
              }
            }
            for (var E = b[0].codewords.length, P = b.length - 1; P >= 0; ) {
              if (b[P].codewords.length === E) break;
              P--;
            }
            P++;
            var j = E - w.getECCodewordsPerBlock(),
              O = 0;
            for (x = 0; x < j; x++)
              for (var S = 0; S < p; S++) b[S].codewords[x] = o[O++];
            for (S = P; S < p; S++) b[S].codewords[j] = o[O++];
            var A = b[0].codewords.length;
            for (x = j; x < A; x++)
              for (S = 0; S < p; S++) {
                var M = S < P ? x : x + 1;
                b[S].codewords[M] = o[O++];
              }
            return b;
          }),
          (e.prototype.getNumDataCodewords = function () {
            return this.numDataCodewords;
          }),
          (e.prototype.getCodewords = function () {
            return this.codewords;
          }),
          e
        );
      })();
  },
  1130,
  [1014],
);
