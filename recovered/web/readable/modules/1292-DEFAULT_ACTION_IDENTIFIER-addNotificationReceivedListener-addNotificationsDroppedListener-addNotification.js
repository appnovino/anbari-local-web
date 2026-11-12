// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1292; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'DEFAULT_ACTION_IDENTIFIER', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (_e.addNotificationReceivedListener = function (e) {
        return c.addListener(f, (t) => {
          const n = (0, s.mapNotification)(t);
          e(n);
        });
      }),
      (_e.addNotificationsDroppedListener = function (e) {
        return c.addListener(u, e);
      }),
      (_e.addNotificationResponseReceivedListener = function (e) {
        return c.addListener(p, (t) => {
          const n = (0, s.mapNotificationResponse)(t);
          e(n);
        });
      }),
      (_e.getLastNotificationResponseAsync = async function () {
        return L();
      }),
      (_e.getLastNotificationResponse = L),
      (_e.clearLastNotificationResponseAsync = async function () {
        R();
      }),
      (_e.clearLastNotificationResponse = R),
      (_e.addNotificationResponseClearedListener = function (e) {
        return c.addListener(N, e);
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      o = (e = n) && e.__esModule ? e : { default: e },
      s = r(d[2]);
    const c = new t.LegacyEventEmitter(o.default),
      f = 'onDidReceiveNotification',
      u = 'onNotificationsDeleted',
      p = 'onDidReceiveNotificationResponse',
      N = 'onDidClearNotificationResponse',
      l = 'expo.modules.notifications.actions.DEFAULT';
    function L() {
      if (!o.default.getLastNotificationResponse)
        throw new t.UnavailabilityError(
          'ExpoNotifications',
          'getLastNotificationResponse',
        );
      const e = o.default.getLastNotificationResponse();
      return e ? (0, s.mapNotificationResponse)(e) : e;
    }
    function R() {
      if (!o.default.clearLastNotificationResponse)
        throw new t.UnavailabilityError(
          'ExpoNotifications',
          'clearLastNotificationResponse',
        );
      (o.default.clearLastNotificationResponse(), c.emit(N, []));
    }
  },
  1292,
  [266, 1293, 1264],
);
