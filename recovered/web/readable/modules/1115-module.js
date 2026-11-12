// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1115; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var e,
      t = r(d[0]),
      o = (e = t) && e.__esModule ? e : { default: e },
      n =
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
      u = (function () {
        function e(e, t) {
          ((this.numDataCodewords = e), (this.codewords = t));
        }
        return (
          (e.getDataBlocks = function (t, u) {
            var i,
              l,
              f,
              c,
              s = u.getECBlocks(),
              w = 0,
              y = s.getECBlocks();
            try {
              for (var v = n(y), h = v.next(); !h.done; h = v.next()) {
                w += (_ = h.value).getCount();
              }
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                h && !h.done && (l = v.return) && l.call(v);
              } finally {
                if (i) throw i.error;
              }
            }
            var C = new Array(w),
              b = 0;
            try {
              for (var m = n(y), p = m.next(); !p.done; p = m.next())
                for (var _ = p.value, x = 0; x < _.getCount(); x++) {
                  var D = _.getDataCodewords(),
                    E = s.getECCodewords() + D;
                  C[b++] = new e(D, new Uint8Array(E));
                }
            } catch (e) {
              f = { error: e };
            } finally {
              try {
                p && !p.done && (c = m.return) && c.call(m);
              } finally {
                if (f) throw f.error;
              }
            }
            var j = C[0].codewords.length - s.getECCodewords(),
              k = j - 1,
              B = 0;
            for (x = 0; x < k; x++)
              for (var O = 0; O < b; O++) C[O].codewords[x] = t[B++];
            var S = 24 === u.getVersionNumber(),
              A = S ? 8 : b;
            for (O = 0; O < A; O++) C[O].codewords[j - 1] = t[B++];
            var M = C[0].codewords.length;
            for (x = j; x < M; x++)
              for (O = 0; O < b; O++) {
                var N = S ? (O + 8) % b : O,
                  P = S && N > 7 ? x - 1 : x;
                C[N].codewords[P] = t[B++];
              }
            if (B !== t.length) throw new o.default();
            return C;
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
  1115,
  [1014],
);
