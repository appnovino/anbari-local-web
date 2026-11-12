// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1276; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    let t = 0;
    var n = {
      addListener: () => {},
      removeListeners: () => {},
      getBadgeCountAsync: async () => t,
      setBadgeCountAsync: async (n, s) => {
        if ('undefined' == typeof window) return !1;
        const u = r(d[0]);
        return (n > 0 ? u.set(n, s) : u.clear(), (t = n), !0);
      },
    };
  },
  1276,
  [1277],
);
