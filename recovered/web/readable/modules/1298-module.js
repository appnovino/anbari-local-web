// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1298; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      r(d[0]));
    let n = !1;
    var t = {
      addListener: () => {
        n ||
          (console.warn(
            '[expo-notifications] Notifications handling is not yet fully supported on web. Handling notifications will have no effect.',
          ),
          (n = !0));
      },
      removeListeners: () => {},
    };
  },
  1298,
  [266],
);
