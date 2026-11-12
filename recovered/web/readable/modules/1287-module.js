// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1287; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
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
    var t = r(d[0]);
    var n = {
      getNotificationCategoriesAsync: async () => [],
      async setNotificationCategoryAsync() {
        throw new t.UnavailabilityError(
          'Notifications',
          'setNotificationCategoryAsync',
        );
      },
      deleteNotificationCategoryAsync: async () => !1,
      addListener() {},
      removeListeners() {},
    };
  },
  1287,
  [266],
);
