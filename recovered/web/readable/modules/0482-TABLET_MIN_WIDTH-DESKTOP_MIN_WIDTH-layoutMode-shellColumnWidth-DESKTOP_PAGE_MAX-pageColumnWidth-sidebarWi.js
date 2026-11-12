// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 482; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'TABLET_MIN_WIDTH', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'DESKTOP_MIN_WIDTH', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.layoutMode = function (o) {
        return !Number.isFinite(o) || o <= 0
          ? 'phone'
          : o >= n
            ? 'desktop'
            : o >= t
              ? 'tablet'
              : 'phone';
      }),
      (e.shellColumnWidth = function (t) {
        return 'tablet' === t ? 720 : 580;
      }),
      Object.defineProperty(e, 'DESKTOP_PAGE_MAX', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.pageColumnWidth = function (t) {
        return t ? o : 720;
      }),
      (e.sidebarWidth = function (t) {
        return t < 1180 ? 220 : 250;
      }),
      (e.layoutCarry = function (t = 4e3) {
        const n = new Map();
        return {
          put(t, o, u, c = Date.now()) {
            n.set(t, { at: c, mode: o, value: u });
          },
          take(o, u, c = Date.now()) {
            const l = n.get(o);
            return (
              n.delete(o),
              l && ('desktop' === l.mode) != ('desktop' === u) && c - l.at <= t
                ? l.value
                : void 0
            );
          },
        };
      }));
    const t = 700,
      n = 900;
    const o = 1480;
  },
  482,
  [],
);
