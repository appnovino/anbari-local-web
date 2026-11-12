// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1258; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.hasDeviceTokenChangedAsync = async function (t) {
        try {
          const n = await w(),
            o = await f();
          if (null == o) return !0;
          const c = Date.now() - (o.registeredAt ?? 0);
          return (
            c < 0 ||
            c >= l ||
            t.data !== o.deviceToken ||
            e.applicationId !== o.appId ||
            n !== o.development ||
            h(t) !== o.type
          );
        } catch {
          return !0;
        }
      }),
      (_e.updateDevicePushTokenAsync = async function (t, n) {
        const c = async (o) => {
          const [c, s] = await Promise.all([w(), y()]),
            d = {
              deviceId: s.toLowerCase(),
              development: c,
              deviceToken: n.data,
              appId: e.applicationId,
              type: h(n),
            };
          try {
            const s = await fetch(u, {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(d),
              signal: t,
            });
            (s.ok ||
              console.debug(
                '[expo-notifications] Error encountered while updating the device push token with the server:',
                await s.text(),
              ),
              s.ok &&
                (await p({
                  deviceToken: n.data,
                  appId: e.applicationId,
                  development: c,
                  type: h(n),
                  registeredAt: Date.now(),
                })),
              s.ok || o());
          } catch (e) {
            if (t.aborted || ('object' == typeof e && 'AbortError' === e?.name))
              return;
            (console.warn(
              '[expo-notifications] Error thrown while updating the device push token with the server:',
              e,
            ),
              o());
          }
        };
        let s = !0;
        const d = () => {
          s = !0;
        };
        let l = 0;
        const f = { maxBackoff: 12e4 };
        let I = (0, o.computeNextBackoffInterval)(500, l, f);
        for (; s && !t.aborted; )
          ((s = !1),
            await c(d),
            s &&
              !t.aborted &&
              ((I = (0, o.computeNextBackoffInterval)(500, l, f)),
              (l += 1),
              await new Promise((t) => setTimeout(t, I))));
      }));
    var t,
      e = (function (t) {
        if (t && t.__esModule) return t;
        var e = {};
        return (
          t &&
            Object.keys(t).forEach(function (n) {
              var o = Object.getOwnPropertyDescriptor(t, n);
              Object.defineProperty(
                e,
                n,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function () {
                        return t[n];
                      },
                    },
              );
            }),
          (e.default = t),
          e
        );
      })(r(_d[0])),
      n = r(_d[1]),
      o = r(_d[2]),
      c = r(_d[3]),
      s = (t = c) && t.__esModule ? t : { default: t };
    const u = 'https://exp.host/--/api/v2/push/updateDeviceToken',
      d = 'lastRegisteredDeviceToken',
      l = 6048e5;
    async function f() {
      try {
        if (!s.default.getRegistrationInfoAsync) return null;
        const t = await s.default.getRegistrationInfoAsync();
        if (!t) return null;
        const e = JSON.parse(t);
        return e?.[d] ?? null;
      } catch {
        return null;
      }
    }
    async function p(t) {
      try {
        if (
          !s.default.getRegistrationInfoAsync ||
          !s.default.setRegistrationInfoAsync
        )
          return;
        const e = await s.default.getRegistrationInfoAsync(),
          n = e ? JSON.parse(e) : {};
        ((n[d] = t),
          await s.default.setRegistrationInfoAsync(JSON.stringify(n)));
      } catch {}
    }
    async function y() {
      try {
        if (!s.default.getInstallationIdAsync)
          throw new n.UnavailabilityError(
            'ExpoServerRegistrationModule',
            'getInstallationIdAsync',
          );
        return await s.default.getInstallationIdAsync();
      } catch (t) {
        throw new n.CodedError(
          'ERR_NOTIFICATIONS_DEVICE_ID',
          `Could not fetch the installation ID of the application: ${t}.`,
        );
      }
    }
    function h(t) {
      switch (t.type) {
        case 'ios':
          return 'apns';
        case 'android':
          return 'fcm';
        default:
          return t.type;
      }
    }
    async function w() {
      return !1;
    }
  },
  1258,
  [568, 266, 1259, 1255],
);
