// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1250; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.getExpoPushTokenAsync = async function (e = {}) {
        const s = e.devicePushToken || (await (0, d.getDevicePushTokenAsync)()),
          y = e.deviceId || (await h()),
          R =
            e.projectId ||
            o.default.easConfig?.projectId ||
            o.default.expoConfig?.extra?.eas?.projectId;
        if (!R)
          throw new n.CodedError(
            'ERR_NOTIFICATIONS_NO_EXPERIENCE_ID',
            'No "projectId" found. If "projectId" can\'t be inferred from the manifest (for instance, in bare workflow), you have to pass it in yourself.',
          );
        const w = e.applicationId || t.applicationId;
        if (!w)
          throw new n.CodedError(
            'ERR_NOTIFICATIONS_NO_APPLICATION_ID',
            'No "applicationId" found. If it can\'t be inferred from native configuration by expo-application, you have to pass it in yourself.',
          );
        const O = e.type || I(s),
          _ = e.development || (await E()),
          v = e.baseUrl ?? p,
          N = e.url ?? `${v}push/getExpoPushToken`,
          T = {
            type: O,
            deviceId: y.toLowerCase(),
            development: _,
            appId: w,
            deviceToken: l(s),
            projectId: R,
          },
          x = await fetch(N, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(T),
          }).catch((e) => {
            throw new n.CodedError(
              'ERR_NOTIFICATIONS_NETWORK_ERROR',
              `Error encountered while fetching Expo token: ${e}.`,
            );
          });
        if (!x.ok) {
          const e = x.statusText || x.status;
          let t;
          try {
            t = await x.text();
          } catch {}
          throw new n.CodedError(
            'ERR_NOTIFICATIONS_SERVER_ERROR',
            `Error encountered while fetching Expo token, expected an OK response, received: ${e} (body: "${t}").`,
          );
        }
        const C = f(await u(x));
        try {
          e.url || e.baseUrl
            ? console.debug(
                "[expo-notifications] Since the URL endpoint to register in has been customized in the options, expo-notifications won't try to auto-update the device push token on the server.",
              )
            : await (0, c.setAutoServerRegistrationEnabledAsync)(!0);
        } catch (e) {
          console.warn(
            '[expo-notifications] Could not enable automatically registering new device tokens with the Expo notification service',
            e,
          );
        }
        return { type: 'expo', data: C };
      }));
    var t = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (o) {
              var n = Object.getOwnPropertyDescriptor(e, o);
              Object.defineProperty(
                t,
                o,
                n.get
                  ? n
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[o];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[0])),
      o = e(r(_d[1])),
      n = r(_d[2]),
      c = r(_d[3]),
      s = e(r(_d[4])),
      d = r(_d[5]);
    const p = 'https://exp.host/--/api/v2/';
    async function u(e) {
      try {
        return await e.json();
      } catch {
        try {
          throw new n.CodedError(
            'ERR_NOTIFICATIONS_SERVER_ERROR',
            `Expected a JSON response from server when fetching Expo token, received body: ${JSON.stringify(await e.text())}.`,
          );
        } catch {
          throw new n.CodedError(
            'ERR_NOTIFICATIONS_SERVER_ERROR',
            `Expected a JSON response from server when fetching Expo token, received response: ${JSON.stringify(e)}.`,
          );
        }
      }
    }
    function f(e) {
      if (
        !e ||
        'object' != typeof e ||
        !e.data ||
        'object' != typeof e.data ||
        !e.data.expoPushToken ||
        'string' != typeof e.data.expoPushToken
      )
        throw new n.CodedError(
          'ERR_NOTIFICATIONS_SERVER_ERROR',
          `Malformed response from server, expected "{ data: { expoPushToken: string } }", received: ${JSON.stringify(e, null, 2)}.`,
        );
      return e.data.expoPushToken;
    }
    async function h() {
      try {
        if (!s.default.getInstallationIdAsync)
          throw new n.UnavailabilityError(
            'ExpoServerRegistrationModule',
            'getInstallationIdAsync',
          );
        return await s.default.getInstallationIdAsync();
      } catch (e) {
        throw new n.CodedError(
          'ERR_NOTIF_DEVICE_ID',
          `Could not have fetched installation ID of the application: ${e}.`,
        );
      }
    }
    function l(e) {
      return 'string' == typeof e.data ? e.data : JSON.stringify(e.data);
    }
    async function E() {
      return !1;
    }
    function I(e) {
      switch (e.type) {
        case 'ios':
          return 'apns';
        case 'android':
          return 'fcm';
        default:
          return e.type;
      }
    }
  },
  1250,
  [568, 1245, 266, 1251, 1255, 1244],
);
