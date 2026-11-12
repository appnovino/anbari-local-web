// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1299; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.getPermissionsAsync = async function () {
        if (!t.default.getPermissionsAsync)
          throw new e.UnavailabilityError(
            'Notifications',
            'getPermissionsAsync',
          );
        return await t.default.getPermissionsAsync();
      }),
      (_e.requestPermissionsAsync = async function (s) {
        if (!t.default.requestPermissionsAsync)
          throw new e.UnavailabilityError(
            'Notifications',
            'requestPermissionsAsync',
          );
        const n = (
          s ?? { ios: { allowAlert: !0, allowBadge: !0, allowSound: !0 } }
        ).web;
        return await t.default.requestPermissionsAsync(n);
      }));
    var s,
      e = r(d[0]),
      n = r(d[1]),
      t = (s = n) && s.__esModule ? s : { default: s };
  },
  1299,
  [266, 1300],
);
