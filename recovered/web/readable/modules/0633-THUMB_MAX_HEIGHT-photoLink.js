// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 633; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'THUMB_MAX_HEIGHT', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.photoLink = function (o, u) {
        return u > t || !n.test(o) || /[?&]thumb=1(?:&|$)/.test(o)
          ? o
          : o + '&thumb=1';
      }));
    const t = 80,
      n =
        /^\/v1\/shops\/[0-9a-f-]{36}\/products\/[0-9a-f-]{36}\/photo\?(?:.*&)?v=[a-f0-9]{16}(?:&|$)/;
  },
  633,
  [],
);
