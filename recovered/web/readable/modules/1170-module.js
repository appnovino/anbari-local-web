// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1170; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
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
      u = e(r(d[1])),
      n = e(r(d[2])),
      f = (function () {
        function e() {}
        return (
          (e.initialize = function () {
            for (var t = 0; t < u.default.SYMBOL_TABLE.length; t++)
              for (
                var n = u.default.SYMBOL_TABLE[t], f = 1 & n, l = 0;
                l < u.default.BARS_IN_MODULE;
                l++
              ) {
                for (var o = 0; (1 & n) === f; ) ((o += 1), (n >>= 1));
                ((f = 1 & n),
                  e.RATIOS_TABLE[t] ||
                    (e.RATIOS_TABLE[t] = new Array(u.default.BARS_IN_MODULE)),
                  (e.RATIOS_TABLE[t][u.default.BARS_IN_MODULE - l - 1] =
                    Math.fround(o / u.default.MODULES_IN_CODEWORD)));
              }
            this.bSymbolTableReady = !0;
          }),
          (e.getDecodedValue = function (t) {
            var u = e.getDecodedCodewordValue(e.sampleBitCounts(t));
            return -1 !== u ? u : e.getClosestDecodedValue(t);
          }),
          (e.sampleBitCounts = function (e) {
            for (
              var n = t.default.sum(e),
                f = new Int32Array(u.default.BARS_IN_MODULE),
                l = 0,
                o = 0,
                _ = 0;
              _ < u.default.MODULES_IN_CODEWORD;
              _++
            ) {
              var i =
                n / (2 * u.default.MODULES_IN_CODEWORD) +
                (_ * n) / u.default.MODULES_IN_CODEWORD;
              (o + e[l] <= i && ((o += e[l]), l++), f[l]++);
            }
            return f;
          }),
          (e.getDecodedCodewordValue = function (t) {
            var n = e.getBitValue(t);
            return -1 === u.default.getCodeword(n) ? -1 : n;
          }),
          (e.getBitValue = function (e) {
            for (var t = 0, u = 0; u < e.length; u++)
              for (var n = 0; n < e[u]; n++)
                t = (t << 1) | (u % 2 == 0 ? 1 : 0);
            return Math.trunc(t);
          }),
          (e.getClosestDecodedValue = function (f) {
            var l = t.default.sum(f),
              o = new Array(u.default.BARS_IN_MODULE);
            if (l > 1)
              for (var _ = 0; _ < o.length; _++) o[_] = Math.fround(f[_] / l);
            var i = n.default.MAX_VALUE,
              O = -1;
            this.bSymbolTableReady || e.initialize();
            for (var A = 0; A < e.RATIOS_TABLE.length; A++) {
              for (
                var E = 0, L = e.RATIOS_TABLE[A], B = 0;
                B < u.default.BARS_IN_MODULE;
                B++
              ) {
                var D = Math.fround(L[B] - o[B]);
                if ((E += Math.fround(D * D)) >= i) break;
              }
              E < i && ((i = E), (O = u.default.SYMBOL_TABLE[A]));
            }
            return O;
          }),
          (e.bSymbolTableReady = !1),
          (e.RATIOS_TABLE = new Array(u.default.SYMBOL_TABLE.length).map(
            function (e) {
              return new Array(u.default.BARS_IN_MODULE);
            },
          )),
          e
        );
      })();
  },
  1170,
  [1053, 1154, 1054],
);
