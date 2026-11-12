// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 576; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'SCROLL_Y_CLASS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'SCROLL_GUTTER_PX', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'scrollGutterStyleId', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.scrollGutterCss = l),
      (e.injectScrollGutter = function (
        t = 'undefined' == typeof document ? void 0 : document,
      ) {
        if (!t || t.getElementById(o)) return;
        const n = t.createElement('style');
        ((n.id = o), (n.textContent = l()), t.head.appendChild(n));
      }));
    const t = 'r-1rnoaur',
      n = 10,
      o = 'anbari-scroll-gutter';
    function l(o = t, l = n) {
      const c = o.replace(/^r-/, '');
      return `${`.r-${c}.r-${c},.r-overflowY-${c}.r-overflowY-${c}`}{padding-inline:${l}px;scrollbar-width:thin;scrollbar-color:rgba(128,128,128,.45) transparent;scrollbar-gutter:stable}`;
    }
  },
  576,
  [],
);
