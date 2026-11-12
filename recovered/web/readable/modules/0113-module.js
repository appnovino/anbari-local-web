// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 113; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    function n() {
      var n = window.getSelection(),
        o = n.toString(),
        t = n.anchorNode,
        u = n.focusNode,
        c =
          (t && t.nodeType === window.Node.TEXT_NODE) ||
          (u && u.nodeType === window.Node.TEXT_NODE);
      return o.length >= 1 && '\n' !== o && c;
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
  },
  113,
  [],
);
