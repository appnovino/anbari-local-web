// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1060; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var e,
      t = r(d[0]),
      o = (e = t) && e.__esModule ? e : { default: e },
      n = (function () {
        function e() {}
        return (
          (e.checkAndNudgePoints = function (e, t) {
            for (
              var n = e.getWidth(), f = e.getHeight(), u = !0, l = 0;
              l < t.length && u;
              l += 2
            ) {
              var h = Math.floor(t[l]),
                c = Math.floor(t[l + 1]);
              if (h < -1 || h > n || c < -1 || c > f) throw new o.default();
              ((u = !1),
                -1 === h
                  ? ((t[l] = 0), (u = !0))
                  : h === n && ((t[l] = n - 1), (u = !0)),
                -1 === c
                  ? ((t[l + 1] = 0), (u = !0))
                  : c === f && ((t[l + 1] = f - 1), (u = !0)));
            }
            u = !0;
            for (l = t.length - 2; l >= 0 && u; l -= 2) {
              ((h = Math.floor(t[l])), (c = Math.floor(t[l + 1])));
              if (h < -1 || h > n || c < -1 || c > f) throw new o.default();
              ((u = !1),
                -1 === h
                  ? ((t[l] = 0), (u = !0))
                  : h === n && ((t[l] = n - 1), (u = !0)),
                -1 === c
                  ? ((t[l + 1] = 0), (u = !0))
                  : c === f && ((t[l + 1] = f - 1), (u = !0)));
            }
          }),
          e
        );
      })();
  },
  1060,
  [1032],
);
