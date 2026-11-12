// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 241; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var t = /^[+-]?\d*(?:\.\d+)?(?:[Ee][+-]?\d+)?(%|\w*)/,
      n = (n, o) => {
        var u;
        return 'string' == typeof n
          ? '' + parseFloat(n) * o + n.match(t)[1]
          : ((u = n), !isNaN(parseFloat(u)) && isFinite(u) ? n * o : void 0);
      };
  },
  241,
  [],
);
