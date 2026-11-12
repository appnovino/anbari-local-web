// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 905; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'ACTIVITY_DAYS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.usageText = function (n) {
        const u = Math.max(0, Math.round(n || 0));
        if (u < 1)
          return (0, t.L)(
            '\u06a9\u0645\u062a\u0631 \u0627\u0632 \u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647',
          );
        const c = Math.floor(u / 60),
          o = u % 60;
        return c
          ? o
            ? (0, t.L)(
                '{h} \u0633\u0627\u0639\u062a \u0648 {m} \u062f\u0642\u06cc\u0642\u0647',
                { h: (0, t.localDigits)(c), m: (0, t.localDigits)(o) },
              )
            : (0, t.L)('{h} \u0633\u0627\u0639\u062a', {
                h: (0, t.localDigits)(c),
              })
          : (0, t.L)('{m} \u062f\u0642\u06cc\u0642\u0647', {
              m: (0, t.localDigits)(o),
            });
      }),
      (e.daysLabel = function (n) {
        return 1 === n
          ? (0, t.L)('\u0627\u0645\u0631\u0648\u0632')
          : (0, t.L)('{n} \u0631\u0648\u0632 \u0627\u062e\u06cc\u0631', {
              n: (0, t.localDigits)(n),
            });
      }),
      (e.entryLabel = function (n) {
        switch (n) {
          case 'sold':
            return (0, t.L)('\u0641\u0631\u0648\u0634');
          case 'received':
            return (0, t.L)(
              '\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
            );
          case 'undo':
            return (0, t.L)(
              '\u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0646 \u06cc\u06a9 \u062b\u0628\u062a',
            );
          case 'product':
            return (0, t.L)(
              '\u0633\u0627\u062e\u062a \u06cc\u0627 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0627\u0644\u0627',
            );
          case 'deleted':
            return (0, t.L)('\u062d\u0630\u0641 \u06a9\u0627\u0644\u0627');
          case 'price':
            return (0, t.L)(
              '\u062a\u063a\u06cc\u06cc\u0631 \u0642\u06cc\u0645\u062a\u200c\u0647\u0627',
            );
          default:
            return (0, t.L)(
              '\u062a\u063a\u06cc\u06cc\u0631 \u06af\u0631\u0648\u0647\u06cc \u06a9\u0627\u0644\u0627\u0647\u0627',
            );
        }
      }),
      (e.quietPeriod = function (t) {
        return t.every(
          (t) =>
            !(t.minutes || t.sales || t.received || t.lookups || t.changes),
        );
      }));
    var t = r(d[0]);
    const n = [1, 7, 30];
  },
  905,
  [311],
);
