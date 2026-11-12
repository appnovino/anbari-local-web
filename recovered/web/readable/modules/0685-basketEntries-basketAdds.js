// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 685; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'basketEntries', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'basketAdds', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    const t = new Set(),
      n = {
        open(n) {
          t.forEach((t) => t(n));
        },
        listening: () => t.size > 0,
        subscribe: (n) => (
          t.add(n),
          () => {
            t.delete(n);
          }
        ),
      };
    let u = null;
    const s = {
      put(t) {
        u = t;
      },
      take(t) {
        const n = u;
        return n && n.mode === t ? ((u = null), n) : null;
      },
    };
  },
  685,
  [],
);
