// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1297; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'NotificationTimeoutError', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (_e.setNotificationHandler = function (t) {
        h && (h.remove(), (h = null));
        N && (N.remove(), (N = null));
        t &&
          ((h = s.addListener(f, async ({ id: o, notification: c }) => {
            if (e.default.handleNotificationAsync)
              try {
                const n = (0, l.mapNotification)(c),
                  s = await t.handleNotification(n);
                (s.shouldShowAlert &&
                  console.warn(
                    '[expo-notifications]: `shouldShowAlert` is deprecated. Specify `shouldShowBanner` and / or `shouldShowList` instead.',
                  ),
                  await e.default.handleNotificationAsync(o, s),
                  t.handleSuccess?.(o));
              } catch (n) {
                t.handleError?.(o, n);
              }
            else
              t.handleError?.(
                o,
                new n.UnavailabilityError(
                  'Notifications',
                  'handleNotificationAsync',
                ),
              );
          })),
          (N = s.addListener(u, ({ id: n, notification: o }) =>
            t.handleError?.(n, new c(n, (0, l.mapNotification)(o))),
          )));
      }));
    var t,
      n = r(d[0]),
      o = r(d[1]),
      e = (t = o) && t.__esModule ? t : { default: t },
      l = r(d[2]);
    class c extends n.CodedError {
      constructor(t, n) {
        (super(
          'ERR_NOTIFICATION_TIMEOUT',
          `Notification handling timed out for ID ${t}.`,
        ),
          (this.info = { id: t, notification: n }));
      }
    }
    const s = new n.LegacyEventEmitter(e.default),
      f = 'onHandleNotification',
      u = 'onHandleNotificationTimeout';
    let h = null,
      N = null;
  },
  1297,
  [266, 1298, 1264],
);
