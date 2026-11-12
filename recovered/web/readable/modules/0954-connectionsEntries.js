// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 954; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'connectionsEntries', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    const n = new Set();
    let t = null;
    const c = {
      open(c) {
        ((t = c), n.forEach((n) => n(c)));
      },
      close() {
        ((t = null), n.forEach((n) => n(null)));
      },
      current: () => t,
      subscribe: (c) => (
        n.add(c),
        c(t),
        () => {
          n.delete(c);
        }
      ),
    };
  },
  954,
  [],
);
