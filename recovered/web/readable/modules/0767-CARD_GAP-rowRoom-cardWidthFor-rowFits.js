// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 767; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'CARD_GAP', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.rowRoom = n),
      (e.cardWidthFor = function (o, u, c = t) {
        const f = n(o);
        return !f || u < 1 ? 0 : Math.max(0, Math.floor((f - c * (u - 1)) / u));
      }),
      (e.rowFits = function (n, o, u, c = t) {
        return o * u + c * (o - 1) <= n;
      }));
    const t = 8;
    function n(t) {
      return t > 0 && Number.isFinite(t) ? Math.max(0, Math.floor(t) - 1) : 0;
    }
  },
  767,
  [],
);
