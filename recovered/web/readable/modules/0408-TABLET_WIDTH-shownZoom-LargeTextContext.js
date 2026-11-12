// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 408; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'TABLET_WIDTH', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.shownZoom = function (t, o) {
        return o >= n ? Math.max(t, 1) : t;
      }),
      Object.defineProperty(e, 'LargeTextContext', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = r(d[0]);
    const n = 768;
    const o = (0, t.createContext)({
      enabled: !1,
      setEnabled: (t) => {},
      scale: 1,
      setScale: (t) => {},
    });
  },
  408,
  [2],
);
