// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 481; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'DESKTOP_MIN_WIDTH', {
        enumerable: !0,
        get: function () {
          return n.DESKTOP_MIN_WIDTH;
        },
      }),
      Object.defineProperty(_e, 'TABLET_MIN_WIDTH', {
        enumerable: !0,
        get: function () {
          return n.TABLET_MIN_WIDTH;
        },
      }),
      Object.defineProperty(_e, 'layoutMode', {
        enumerable: !0,
        get: function () {
          return n.layoutMode;
        },
      }),
      (_e.useLayoutMode = o),
      (_e.useDesktop = function () {
        return 'desktop' === o();
      }));
    var e,
      t = r(d[0]),
      u = (e = t) && e.__esModule ? e : { default: e },
      n = r(d[1]);
    function o() {
      return (0, n.layoutMode)((0, u.default)().width);
    }
  },
  481,
  [257, 482],
);
