// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 134; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(_e, 'cancelIdleCallback', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var e,
      t = r(d[0]),
      n =
        ((e = t) && e.__esModule ? e : { default: e }).default &&
        void 0 !== window.requestIdleCallback,
      l = n
        ? window.requestIdleCallback
        : function (e, t) {
            return setTimeout(() => {
              var t = Date.now();
              e({
                didTimeout: !1,
                timeRemaining: () => Math.max(0, 50 - (Date.now() - t)),
              });
            }, 1);
          },
      u = n
        ? window.cancelIdleCallback
        : function (e) {
            clearTimeout(e);
          },
      o = l;
  },
  134,
  [26],
);
