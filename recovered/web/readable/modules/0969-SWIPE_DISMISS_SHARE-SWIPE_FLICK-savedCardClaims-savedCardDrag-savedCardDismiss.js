// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 969; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'SWIPE_DISMISS_SHARE', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'SWIPE_FLICK', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.savedCardClaims = function (t, n) {
        return n > 6 && n > 1.2 * Math.abs(t);
      }),
      (e.savedCardDrag = function (t) {
        return t >= 0 ? t : Math.max(-12, 0.2 * t);
      }),
      (e.savedCardDismiss = function (u, s, c) {
        return u > 0 && (u >= Math.max(1, c) * t || (s >= n && u > 12));
      }));
    const t = 0.4,
      n = 0.8;
  },
  969,
  [],
);
