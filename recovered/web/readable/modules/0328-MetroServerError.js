// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 328; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'MetroServerError', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    class t extends Error {
      code = 'METRO_SERVER_ERROR';
      constructor(t, o) {
        (super(t.message), (this.name = 'MetroServerError'), (this.url = o));
        for (const o in t) this[o] = t[o];
      }
    }
  },
  328,
  [],
);
