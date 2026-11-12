// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1262; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.getPresentedNotificationsAsync = async function () {
        if (!o.default.getPresentedNotificationsAsync)
          throw new e.UnavailabilityError(
            'Notifications',
            'getPresentedNotificationsAsync',
          );
        return (await o.default.getPresentedNotificationsAsync()).map((t) =>
          (0, s.mapNotification)(t),
        );
      }));
    var t,
      e = r(d[0]),
      n = r(d[1]),
      o = (t = n) && t.__esModule ? t : { default: t },
      s = r(d[2]);
  },
  1262,
  [266, 1263, 1264],
);
