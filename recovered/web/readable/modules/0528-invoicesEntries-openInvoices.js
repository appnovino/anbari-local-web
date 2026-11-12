// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 528; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'invoicesEntries', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'openInvoices', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    const n = new Set();
    let t = null;
    const o = {
        open(o = {}) {
          ((t = o), n.forEach((n) => n(o)));
        },
        close() {
          ((t = null), n.forEach((n) => n(null)));
        },
        subscribe: (o) => (
          n.add(o),
          o(t),
          () => {
            n.delete(o);
          }
        ),
      },
      c = (n = {}) => o.open(n);
  },
  528,
  [],
);
