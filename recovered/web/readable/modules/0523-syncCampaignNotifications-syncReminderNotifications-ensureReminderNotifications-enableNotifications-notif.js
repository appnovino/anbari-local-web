// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 523; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.syncCampaignNotifications = async function (t, n) {}),
      (e.syncReminderNotifications = async function (t, n) {}),
      (e.ensureReminderNotifications = async function () {
        c ||
          ((c = !0),
          (0, o.showToast)(
            (0, s.L)(
              '\u0631\u0648\u06cc \u0633\u0627\u06cc\u062a\u060c \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0633\u0631 \u0648\u0642\u062a\u0634 \u0627\u0639\u0644\u0627\u0646 \u0646\u0645\u06cc\u200c\u062f\u0647\u062f\u061b \u0641\u0642\u0637 \u062f\u0627\u062e\u0644 \u0628\u0631\u0646\u0627\u0645\u0647 \u062f\u06cc\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0628\u0631\u0627\u06cc \u0627\u0639\u0644\u0627\u0646 \u0633\u0631 \u0648\u0642\u062a\u060c \u0628\u0631\u0646\u0627\u0645\u0647\u0654 \u06af\u0648\u0634\u06cc \u0631\u0627 \u0646\u0635\u0628 \u06a9\u0646.',
            ),
          ));
        return !1;
      }),
      (e.enableNotifications = u),
      (e.notificationStatus = y),
      (e.testNotification = async function () {
        (await u(),
          await l({
            title: n.fa.notificationTestTitle,
            body: n.fa.notificationTestBody,
            tag: 'test-' + Date.now(),
          }));
      }),
      (e.notifyStockAlerts = async function (n) {
        if (n.length && (await y())) {
          const o = (0, t.stockNotification)(n);
          await l({ title: o.title, body: o.body, tag: 'stock' });
        }
      }),
      (e.listenNotificationTap = function (t) {
        const n = (n) => {
          'OPEN_STOCK_ALARMS' === n.data?.type
            ? t('alarms', void 0, () => {})
            : 'OPEN_TICKET' === n.data?.type &&
              v.test(String(n.data.ticketId)) &&
              t('support', void 0, () => {}, String(n.data.ticketId));
        };
        navigator.serviceWorker?.addEventListener('message', n);
        const o = new URLSearchParams(window.location.search),
          s = o.get('ticket');
        if (s && v.test(s)) {
          o.delete('ticket');
          const n = o.toString();
          try {
            window.history.replaceState(
              window.history.state,
              '',
              window.location.pathname +
                (n ? '?' + n : '') +
                window.location.hash,
            );
          } catch {}
          t('support', void 0, () => {}, s);
        } else 'alarms' === o.get('view') && t('alarms', void 0, () => {});
        return () => navigator.serviceWorker?.removeEventListener('message', n);
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]),
      s = r(d[3]);
    let c = !1;
    function f() {
      return (
        'undefined' != typeof window &&
        window.isSecureContext &&
        'Notification' in window &&
        'serviceWorker' in navigator
      );
    }
    async function w() {
      return (
        (await navigator.serviceWorker.getRegistration('/')) ||
        navigator.serviceWorker.register('/notifications-sw.js', { scope: '/' })
      );
    }
    async function u() {
      if (!f()) throw Error('notification_unavailable');
      if ('granted' !== (await Notification.requestPermission()))
        throw Error('notification_denied');
      return (await w(), await navigator.serviceWorker.ready, !0);
    }
    async function y() {
      return f() && 'granted' === Notification.permission;
    }
    async function l(t) {
      if (!(await y())) throw Error('notification_enable_first');
      await (
        await navigator.serviceWorker.ready
      ).showNotification(t.title, {
        body: t.body,
        tag: t.tag,
        icon: '/anbari-touch-icon.png',
        data: { url: '/?view=alarms' },
      });
    }
    const v = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
  },
  523,
  [524, 492, 525, 311],
);
