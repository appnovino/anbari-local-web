// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 287; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'isDOMAvailable', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'canUseEventListeners', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'canUseViewport', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'isAsyncDebugging', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    const n = 'undefined' != typeof window && !!window.document?.createElement,
      t = n && !(!window.addEventListener && !window.attachEvent),
      o = n && !!window.screen,
      c = !1;
  },
  287,
  [],
);
