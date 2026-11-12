// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1279; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.getAllScheduledNotificationsAsync = async function () {
        if (!c.default.getAllScheduledNotificationsAsync)
          throw new e.UnavailabilityError(
            'Notifications',
            'getAllScheduledNotificationsAsync',
          );
        return (await c.default.getAllScheduledNotificationsAsync()).map((t) =>
          (0, n.mapNotificationRequest)(t),
        );
      }));
    var t,
      e = r(d[0]),
      l = r(d[1]),
      c = (t = l) && t.__esModule ? t : { default: t },
      n = r(d[2]);
  },
  1279,
  [266, 1280, 1264],
);
