// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 726; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.cleanCard = function (n) {
        if ('string' != typeof n) return null;
        const l = t(n).replace(/[\s-]/g, '');
        if (!/^\d{16}$/.test(l)) return null;
        let u = 0;
        for (let t = 0; t < 16; t++) {
          let n = Number(l[15 - t]);
          (t % 2 == 1 && ((n *= 2), n > 9 && (n -= 9)), (u += n));
        }
        return u % 10 == 0 ? l : null;
      }),
      (e.cleanSheba = function (n) {
        if ('string' != typeof n) return null;
        let l = t(n).replace(/[\s-]/g, '').toUpperCase();
        /^\d{24}$/.test(l) && (l = 'IR' + l);
        if (!/^IR\d{24}$/.test(l)) return null;
        const u = l.slice(4) + '1827' + l.slice(2, 4);
        let c = 0;
        for (const t of u) c = (10 * c + Number(t)) % 97;
        return 1 === c ? l : null;
      }),
      (e.maskCard = function (t) {
        return t
          ? t.slice(0, 4) +
              ' \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ' +
              t.slice(-4)
          : '';
      }),
      (e.maskSheba = function (t) {
        return t
          ? 'IR\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 ' +
              t.slice(-4)
          : '';
      }));
    const t = (t) =>
      t
        .replace(/[\u06f0-\u06f9]/g, (t) =>
          String(
            '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
              t,
            ),
          ),
        )
        .replace(/[\u0660-\u0669]/g, (t) =>
          String(
            '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
              t,
            ),
          ),
        );
  },
  726,
  [],
);
