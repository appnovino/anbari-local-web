// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 901; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'userNote', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    const t = (t) => {
      const n = t.note?.trim() || '';
      return !n ||
        (('sale' === t.kind || 'purchase' === t.kind) && /\s\xd7\s/.test(n))
        ? ''
        : n;
    };
  },
  901,
  [],
);
