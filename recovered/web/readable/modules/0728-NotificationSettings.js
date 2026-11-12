// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 728; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.NotificationSettings = function () {
        const u = (0, t.useDesktop)() && !0,
          { colors: y } = (0, c.useTheme)(),
          [h, b] = (0, e.useState)(!1),
          [p, j] = (0, e.useState)(!1),
          [x, S] = (0, e.useState)('');
        async function N(t = !1) {
          (j(!0), S(''));
          try {
            (t
              ? await (0, n.testNotification)()
              : await (0, n.enableNotifications)(),
              b(!0),
              S(t ? s.fa.notificationSent : s.fa.notificationEnabled));
          } catch (t) {
            S((0, f.errorText)(t));
          } finally {
            j(!1);
          }
        }
        return (
          (0, e.useEffect)(() => {
            (0, n.notificationStatus)()
              .then(b)
              .catch(() => {});
          }, []),
          (0, l.jsxs)(o.Card, {
            children: [
              (0, l.jsx)(o.Copy, {
                children: u ? s.fa.desktopNotifications : s.fa.notifications,
              }),
              (0, l.jsx)(o.Copy, {
                style: [o.common.small, { color: y.muted }],
                children: u
                  ? s.fa.desktopNotificationHint
                  : s.fa.notificationEnableHint,
              }),
              !h &&
                (0, l.jsx)(o.Button, {
                  testID: 'enable-notifications',
                  disabled: p,
                  onPress: () => {
                    N();
                  },
                  children: s.fa.enableNotifications,
                }),
              (0, l.jsx)(o.Button, {
                testID: 'test-notification',
                disabled: p,
                secondary: !0,
                onPress: () => {
                  N(!0);
                },
                children: s.fa.testNotification,
              }),
              !!x &&
                (0, l.jsx)(o.Copy, {
                  testID: 'notification-status',
                  accessibilityRole: 'alert',
                  style: o.common.small,
                  children: x,
                }),
              (0, l.jsx)(o.Copy, {
                style: { fontSize: 10, color: y.muted, lineHeight: 20 },
                children: s.fa.notificationScope,
              }),
            ],
          })
        );
      }));
    var t = r(d[0]),
      e = r(d[1]);
    r(d[2]);
    var o = r(d[3]),
      n = r(d[4]),
      s = r(d[5]),
      c = r(d[6]),
      f = r(d[7]),
      l = r(d[8]);
  },
  728,
  [481, 2, 94, 407, 523, 492, 382, 690, 338],
);
