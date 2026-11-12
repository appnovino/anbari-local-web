// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1085; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
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
      n = (e = t) && e.__esModule ? e : { default: e },
      u = (function () {
        function e() {}
        return (
          (e.buildBitArray = function (e) {
            var t = 2 * e.length - 1;
            null === e[e.length - 1].getRightChar() && (t -= 1);
            for (
              var u = 12 * t,
                l = new n.default(u),
                f = 0,
                i = e[0].getRightChar().getValue(),
                o = 11;
              o >= 0;
              --o
            )
              (i & (1 << o) && l.set(f), f++);
            for (o = 1; o < e.length; ++o) {
              for (
                var h = e[o], c = h.getLeftChar().getValue(), s = 11;
                s >= 0;
                --s
              )
                (c & (1 << s) && l.set(f), f++);
              if (null !== h.getRightChar()) {
                var v = h.getRightChar().getValue();
                for (s = 11; s >= 0; --s) (v & (1 << s) && l.set(f), f++);
              }
            }
            return l;
          }),
          e
        );
      })();
  },
  1085,
  [1018],
);
