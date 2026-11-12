// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 961; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'designsEntries', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'openDesigns', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    const n = new Set();
    let t = !1;
    const o = {
        open() {
          ((t = !0), n.forEach((n) => n(!0)));
        },
        close() {
          ((t = !1), n.forEach((n) => n(!1)));
        },
        subscribe: (o) => (
          n.add(o),
          o(t),
          () => {
            n.delete(o);
          }
        ),
      },
      c = () => o.open();
  },
  961,
  [],
);
