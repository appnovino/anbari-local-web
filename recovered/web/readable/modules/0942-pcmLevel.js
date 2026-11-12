// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 942; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.pcmLevel = function (n) {
        try {
          const o = (0, t.base64ToBytes)(n),
            c = Math.floor(o.length / 2);
          if (!c) return 0;
          let l = 0,
            u = 0;
          for (let t = 0; t < c; t += 8) {
            let n = o[2 * t] | (o[2 * t + 1] << 8);
            (n >= 32768 && (n -= 65536), (l += (n / 32768) ** 2), u++);
          }
          return Math.min(1, 6 * Math.sqrt(l / Math.max(1, u)));
        } catch {
          return 0;
        }
      }));
    var t = r(d[0]);
  },
  942,
  [589],
);
