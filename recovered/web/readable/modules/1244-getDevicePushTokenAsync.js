// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1244; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.getDevicePushTokenAsync = async function () {
        const e = await s();
        return (
          i.default.emit('onDevicePushToken', { devicePushToken: e }),
          { type: 'web', data: e }
        );
      }));
    var t = e(r(d[0])),
      o = r(d[1]),
      i = e(r(d[2]));
    function n() {
      if (!('Notification' in window))
        throw new o.CodedError(
          'ERR_UNAVAILABLE',
          'The Web Notifications API is not available on this device.',
        );
      if (!navigator.serviceWorker)
        throw new o.CodedError(
          'ERR_UNAVAILABLE',
          'Notifications cannot be used because the service worker API is not supported on this device. This might also happen because your web page does not support HTTPS.',
        );
      if ('granted' !== Notification.permission)
        throw new o.CodedError(
          'ERR_NOTIFICATIONS_PERMISSION_DENIED',
          'Cannot use web notifications without permissions granted. Request permissions with "expo-permissions".',
        );
    }
    async function s() {
      const e = t.default.expoConfig?.notification?.vapidPublicKey;
      if (!e)
        throw new o.CodedError(
          'ERR_NOTIFICATIONS_PUSH_WEB_MISSING_CONFIG',
          'You must provide `notification.vapidPublicKey` in `app.json` to use push notifications on web. Learn more: https://docs.expo.dev/versions/latest/guides/using-vapid/.',
        );
      const i = t.default.expoConfig?.notification?.serviceWorkerPath;
      if (!i)
        throw new o.CodedError(
          'ERR_NOTIFICATIONS_PUSH_MISSING_CONFIGURATION',
          'You must specify `notification.serviceWorkerPath` in `app.json` to use push notifications on the web. Provide the path to the service worker that will handle notifications.',
        );
      n();
      let s = null;
      try {
        s = await navigator.serviceWorker.register(i);
      } catch (e) {
        throw new o.CodedError(
          'ERR_NOTIFICATIONS_PUSH_REGISTRATION_FAILED',
          `Could not register this device for push notifications because the service worker (${i}) could not be registered: ${e}`,
        );
      }
      if ((await navigator.serviceWorker.ready, !s.active))
        throw new o.CodedError(
          'ERR_NOTIFICATIONS_PUSH_REGISTRATION_FAILED',
          'Could not register this device for push notifications because the service worker is not active.',
        );
      const u = { userVisibleOnly: !0, applicationServerKey: c(e) };
      let h = null;
      try {
        h = await s.pushManager.subscribe(u);
      } catch (e) {
        throw new o.CodedError(
          'ERR_NOTIFICATIONS_PUSH_REGISTRATION_FAILED',
          'The device was unable to register for remote notifications with the browser endpoint. (' +
            e +
            ')',
        );
      }
      const p = h.toJSON(),
        f = {
          endpoint: p.endpoint,
          keys: { p256dh: p.keys.p256dh, auth: p.keys.auth },
        };
      return (
        await s.active.postMessage(JSON.stringify({ fromExpoWebClient: {} })),
        f
      );
    }
    function c(e) {
      const t = (e + '='.repeat((4 - (e.length % 4)) % 4))
          .replace(/-/g, '+')
          .replace(/_/g, '/'),
        o = window.atob(t),
        i = new Uint8Array(o.length);
      for (let e = 0; e < o.length; ++e) i[e] = o.charCodeAt(e);
      return i;
    }
  },
  1244,
  [1245, 266, 254],
);
