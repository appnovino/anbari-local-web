// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 500; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'BACKDROP_TAP_SLOP', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.backdropCloses = t),
      (e.pressPoint = o),
      (e.backdropHandlers = function (n, u) {
        let s = null;
        return {
          onPressIn(n) {
            s = o(n);
          },
          onPress(c) {
            const l = s;
            ((s = null), t({ locked: u(), start: l, end: o(c) }) && n());
          },
        };
      }));
    const n = 10;
    function t({ locked: t = !1, start: o, end: u }) {
      return !t && (!o || !u || Math.hypot(u.x - o.x, u.y - o.y) <= n);
    }
    function o(n) {
      const t = n?.nativeEvent;
      if (!t) return null;
      const o = t.changedTouches || t.touches,
        u = o && o.length ? o[0] : t;
      return 'number' == typeof u.pageX && 'number' == typeof u.pageY
        ? { x: u.pageX, y: u.pageY }
        : null;
    }
  },
  500,
  [],
);
