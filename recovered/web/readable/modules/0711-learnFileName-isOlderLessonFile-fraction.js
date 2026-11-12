// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 711; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.learnFileName = function (t) {
        const n =
          /(?:^|\/)learn\/([A-Za-z][\w-]*\.[a-f0-9]{10}\.mp4)(?:[?#].*)?$/.exec(
            t,
          );
        return n ? n[1] : null;
      }),
      (e.isOlderLessonFile = function (t, n) {
        const c = t.slice(0, t.indexOf('.') + 1);
        return !!c && n !== t && n.startsWith(c) && /\.mp4(?:\.part)?$/.test(n);
      }),
      Object.defineProperty(e, 'fraction', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    const t = (t, n) => (n > 0 ? Math.max(0, Math.min(1, t / n)) : null);
  },
  711,
  [],
);
