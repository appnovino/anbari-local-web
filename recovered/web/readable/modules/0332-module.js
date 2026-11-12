// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 332; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
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
      r(d[0]));
    var e,
      t = r(d[1]),
      n = (e = t) && e.__esModule ? e : { default: e };
    function o(e) {
      let t = e;
      if (
        (n.default.registerComponent('main', () => t),
        'undefined' != typeof window)
      ) {
        const e = document.getElementById('root');
        n.default.runApplication('main', {
          rootTag: e,
          hydrate: globalThis.__EXPO_ROUTER_HYDRATE__,
        });
      }
    }
  },
  332,
  [314, 333],
);
