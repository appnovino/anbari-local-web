// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 811; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.padOrigin = function (t) {
        return { x: t.pageX - t.locationX, y: t.pageY - t.locationY };
      }),
      (_e.padPoint = function (t, e, n, o, p = { x: 0, y: 0 }) {
        const c = o ? t.pageX - (o.left + p.x) : t.pageX - e.x,
          u = o ? t.pageY - (o.top + p.y) : t.pageY - e.y;
        return {
          x: Math.max(0, Math.min(n.w, c)),
          y: Math.max(0, Math.min(n.h, u)),
        };
      }));
  },
  811,
  [],
);
