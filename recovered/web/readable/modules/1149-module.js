// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1149; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      u = e(r(d[2])),
      o = e(r(d[3])),
      l = e(r(d[4])),
      f = e(r(d[5])),
      c = e(r(d[6])),
      T = (function () {
        function e() {
          this.decoder = new c.default();
        }
        return (
          (e.prototype.decode = function (n, u) {
            void 0 === u && (u = null);
            var c = e.extractPureBits(n.getBlackMatrix()),
              T = this.decoder.decode(c, u),
              R = new o.default(
                T.getText(),
                T.getRawBytes(),
                8 * T.getRawBytes().length,
                e.NO_POINTS,
                t.default.MAXICODE,
                f.default.currentTimeMillis(),
              );
            R.putMetadata(l.default.ERRORS_CORRECTED, T.getErrorsCorrected());
            var I = T.getECLevel();
            return (
              null != I && R.putMetadata(l.default.ERROR_CORRECTION_LEVEL, I),
              R
            );
          }),
          (e.prototype.reset = function () {}),
          (e.extractPureBits = function (t) {
            var o = t.getEnclosingRectangle();
            if (null == o) throw new u.default();
            for (
              var l = o[0],
                f = o[1],
                c = o[2],
                T = o[3],
                R = new n.default(e.MATRIX_WIDTH, e.MATRIX_HEIGHT),
                I = 0;
              I < e.MATRIX_HEIGHT;
              I++
            )
              for (
                var M =
                    f +
                    Math.min(
                      Math.floor((I * T + T / 2) / e.MATRIX_HEIGHT),
                      T - 1,
                    ),
                  _ = 0;
                _ < e.MATRIX_WIDTH;
                _++
              ) {
                var s =
                  l +
                  Math.min(
                    Math.floor(
                      (_ * c + c / 2 + (1 & I) * Math.floor(c / 2)) /
                        e.MATRIX_WIDTH,
                    ),
                    c - 1,
                  );
                t.get(s, M) && R.set(_, I);
              }
            return R;
          }),
          (e.NO_POINTS = []),
          (e.MATRIX_WIDTH = 30),
          (e.MATRIX_HEIGHT = 33),
          e
        );
      })();
  },
  1149,
  [1040, 1024, 1032, 1039, 1041, 1020, 1150],
);
