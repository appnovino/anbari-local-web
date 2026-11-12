// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 833; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.needsBuyPriceHint = function (t) {
        return (
          !(t && !(0, n.isNewProduct)(t)) ||
          !(Number(t.costPrice) > 0 || Number(t.avgCost) > 0)
        );
      }),
      Object.defineProperty(e, 'buyPriceHint', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const u = (n) =>
      (0, t.L)(
        '\u0642\u06cc\u0645\u062a \u06cc\u06a9 {unit} \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f\u061b \u0627\u06af\u0631 \u0645\u0628\u0644\u063a \u06a9\u0644 \u0631\u0627 \u0628\u0632\u0646\u06cc\u062f\u060c \u0628\u0631\u0627\u06cc \u0647\u0631 {unit} \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f.',
        { unit: n },
      );
  },
  833,
  [311, 464],
);
