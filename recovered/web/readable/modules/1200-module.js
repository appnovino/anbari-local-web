// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1200; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var e,
      t = r(_d[0]),
      o = (e = t) && e.__esModule ? e : { default: e },
      n = r(_d[1]),
      c = (function () {
        function e() {}
        return (
          (e.encodeECC200 = function (e, t) {
            if (e.length !== t.getDataCapacity())
              throw new Error(
                'The number of codewords does not match the selected symbol',
              );
            var n = new o.default();
            n.append(e);
            var c = t.getInterleavedBlockCount();
            if (1 === c) {
              var f = this.createECCBlock(e, t.getErrorCodewords());
              n.append(f);
            } else {
              for (var d = [], i = [], l = 0; l < c; l++)
                ((d[l] = t.getDataLengthForInterleavedBlock(l + 1)),
                  (i[l] = t.getErrorLengthForInterleavedBlock(l + 1)));
              for (var u = 0; u < c; u++) {
                for (
                  var C = new o.default(), h = u;
                  h < t.getDataCapacity();
                  h += c
                )
                  C.append(e.charAt(h));
                f = this.createECCBlock(C.toString(), i[u]);
                for (var v = 0, s = u; s < i[u] * c; s += c)
                  n.setCharAt(t.getDataCapacity() + s, f.charAt(v++));
              }
            }
            return n.toString();
          }),
          (e.createECCBlock = function (e, t) {
            for (var o = -1, c = 0; c < n.FACTOR_SETS.length; c++)
              if (n.FACTOR_SETS[c] === t) {
                o = c;
                break;
              }
            if (o < 0)
              throw new Error(
                'Illegal number of error correction codewords specified: ' + t,
              );
            var f = n.FACTORS[o],
              d = [];
            for (c = 0; c < t; c++) d[c] = 0;
            for (c = 0; c < e.length; c++) {
              for (
                var i = d[t - 1] ^ e.charAt(c).charCodeAt(0), l = t - 1;
                l > 0;
                l--
              )
                0 !== i && 0 !== f[l]
                  ? (d[l] = d[l - 1] ^ n.ALOG[(n.LOG[i] + n.LOG[f[l]]) % 255])
                  : (d[l] = d[l - 1]);
              0 !== i && 0 !== f[0]
                ? (d[0] = n.ALOG[(n.LOG[i] + n.LOG[f[0]]) % 255])
                : (d[0] = 0);
            }
            var u = [];
            for (c = 0; c < t; c++) u[c] = d[t - c - 1];
            return u
              .map(function (e) {
                return String.fromCharCode(e);
              })
              .join('');
          }),
          e
        );
      })(),
      f = c;
  },
  1200,
  [1025, 1201],
);
