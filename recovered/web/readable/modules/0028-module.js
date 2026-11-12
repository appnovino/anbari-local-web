// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 28; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var t = /[A-Z]/g,
      n = /^ms-/,
      u = {};
    function o(t) {
      return '-' + t.toLowerCase();
    }
    var c = function (c) {
      if (c in u) return u[c];
      var f = c.replace(t, o);
      return (u[c] = n.test(f) ? '-' + f : f);
    };
  },
  28,
  [],
);
