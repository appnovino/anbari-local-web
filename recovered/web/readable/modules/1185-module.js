// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1185; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      i = (function () {
        function e() {}
        return (
          (e.applyMaskPenaltyRule1 = function (t) {
            return (
              e.applyMaskPenaltyRule1Internal(t, !0) +
              e.applyMaskPenaltyRule1Internal(t, !1)
            );
          }),
          (e.applyMaskPenaltyRule2 = function (t) {
            for (
              var n = 0,
                i = t.getArray(),
                l = t.getWidth(),
                u = t.getHeight(),
                o = 0;
              o < u - 1;
              o++
            )
              for (var f = i[o], h = 0; h < l - 1; h++) {
                var s = f[h];
                s === f[h + 1] &&
                  s === i[o + 1][h] &&
                  s === i[o + 1][h + 1] &&
                  n++;
              }
            return e.N2 * n;
          }),
          (e.applyMaskPenaltyRule3 = function (t) {
            for (
              var n = 0,
                i = t.getArray(),
                l = t.getWidth(),
                u = t.getHeight(),
                o = 0;
              o < u;
              o++
            )
              for (var f = 0; f < l; f++) {
                var h = i[o];
                (f + 6 < l &&
                  1 === h[f] &&
                  0 === h[f + 1] &&
                  1 === h[f + 2] &&
                  1 === h[f + 3] &&
                  1 === h[f + 4] &&
                  0 === h[f + 5] &&
                  1 === h[f + 6] &&
                  (e.isWhiteHorizontal(h, f - 4, f) ||
                    e.isWhiteHorizontal(h, f + 7, f + 11)) &&
                  n++,
                  o + 6 < u &&
                    1 === i[o][f] &&
                    0 === i[o + 1][f] &&
                    1 === i[o + 2][f] &&
                    1 === i[o + 3][f] &&
                    1 === i[o + 4][f] &&
                    0 === i[o + 5][f] &&
                    1 === i[o + 6][f] &&
                    (e.isWhiteVertical(i, f, o - 4, o) ||
                      e.isWhiteVertical(i, f, o + 7, o + 11)) &&
                    n++);
              }
            return n * e.N3;
          }),
          (e.isWhiteHorizontal = function (e, t, n) {
            ((t = Math.max(t, 0)), (n = Math.min(n, e.length)));
            for (var i = t; i < n; i++) if (1 === e[i]) return !1;
            return !0;
          }),
          (e.isWhiteVertical = function (e, t, n, i) {
            ((n = Math.max(n, 0)), (i = Math.min(i, e.length)));
            for (var l = n; l < i; l++) if (1 === e[l][t]) return !1;
            return !0;
          }),
          (e.applyMaskPenaltyRule4 = function (t) {
            for (
              var n = 0,
                i = t.getArray(),
                l = t.getWidth(),
                u = t.getHeight(),
                o = 0;
              o < u;
              o++
            )
              for (var f = i[o], h = 0; h < l; h++) 1 === f[h] && n++;
            var s = t.getHeight() * t.getWidth();
            return Math.floor((10 * Math.abs(2 * n - s)) / s) * e.N4;
          }),
          (e.getDataMaskBit = function (e, t, i) {
            var l, u;
            switch (e) {
              case 0:
                l = (i + t) & 1;
                break;
              case 1:
                l = 1 & i;
                break;
              case 2:
                l = t % 3;
                break;
              case 3:
                l = (i + t) % 3;
                break;
              case 4:
                l = (Math.floor(i / 2) + Math.floor(t / 3)) & 1;
                break;
              case 5:
                l = (1 & (u = i * t)) + (u % 3);
                break;
              case 6:
                l = ((1 & (u = i * t)) + (u % 3)) & 1;
                break;
              case 7:
                l = (((u = i * t) % 3) + ((i + t) & 1)) & 1;
                break;
              default:
                throw new n.default('Invalid mask pattern: ' + e);
            }
            return 0 === l;
          }),
          (e.applyMaskPenaltyRule1Internal = function (t, n) {
            for (
              var i = 0,
                l = n ? t.getHeight() : t.getWidth(),
                u = n ? t.getWidth() : t.getHeight(),
                o = t.getArray(),
                f = 0;
              f < l;
              f++
            ) {
              for (var h = 0, s = -1, c = 0; c < u; c++) {
                var y = n ? o[f][c] : o[c][f];
                y === s
                  ? h++
                  : (h >= 5 && (i += e.N1 + (h - 5)), (h = 1), (s = y));
              }
              h >= 5 && (i += e.N1 + (h - 5));
            }
            return i;
          }),
          (e.N1 = 3),
          (e.N2 = 3),
          (e.N3 = 40),
          (e.N4 = 10),
          e
        );
      })();
  },
  1185,
  [1014],
);
