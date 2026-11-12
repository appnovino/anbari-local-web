// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 40; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = /-([a-z])/g,
      n = /^Ms/g,
      u = {};
    function c(t) {
      return t[1].toUpperCase();
    }
    function o(o) {
      if (u.hasOwnProperty(o)) return u[o];
      var f = o.replace(t, c).replace(n, 'ms');
      return ((u[o] = f), f);
    }
  },
  40,
  [],
);
