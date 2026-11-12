// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1249; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
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
      }),
      r(d[0]));
    let t = !1;
    var n = {
      addListener: () => (
        t ||
          (console.warn(
            '[expo-notifications] Listening to push token changes is not yet fully supported on web. Adding a listener will have no effect.',
          ),
          (t = !0)),
        { remove: () => {} }
      ),
      removeListener: () => {},
      removeAllListeners: () => {},
      emit: () => {},
      listenerCount: () => 0,
    };
  },
  1249,
  [266],
);
