// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 715; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, _m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useColorBlocks = function (e, l) {
        const [o, i] = (0, t.useState)(0),
          c = o ? Math.max(1, Math.floor((o - 56) / (l + 6))) : 3;
        return [
          (0, n.colorBlocks)(e, c),
          (t) => {
            const n = Math.round(t.nativeEvent.layout.width);
            i((t) => (t === n ? t : n));
          },
        ];
      }),
      (_e.blockLabel = function (t, n) {
        if (t.length < 2 || !t[n]) return '';
        const l = t.slice(0, n).reduce((t, n) => t + n.length, 0) + 1,
          o = l + t[n].length - 1,
          i = (0, e.localDigits)(String(t.reduce((t, n) => t + n.length, 0)));
        return l === o
          ? (0, e.L)('\u0631\u0646\u06af {a} \u0627\u0632 {n}', {
              a: (0, e.localDigits)(String(l)),
              n: i,
            })
          : (0, e.L)(
              '\u0631\u0646\u06af {a} \u062a\u0627 {b} \u0627\u0632 {n}',
              {
                a: (0, e.localDigits)(String(l)),
                b: (0, e.localDigits)(String(o)),
                n: i,
              },
            );
      }));
    var t = r(d[0]),
      n = r(d[1]),
      e = r(d[2]);
  },
  715,
  [2, 453, 311],
);
