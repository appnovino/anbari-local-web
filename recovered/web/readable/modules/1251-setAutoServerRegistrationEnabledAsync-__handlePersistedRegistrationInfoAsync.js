// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1251; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.setAutoServerRegistrationEnabledAsync = async function (e) {
        if ((u?.abort(), !o.default.setRegistrationInfoAsync))
          throw new t.UnavailabilityError(
            'ServerRegistrationModule',
            'setRegistrationInfoAsync',
          );
        if (e) {
          let e = {};
          try {
            const t = await o.default.getRegistrationInfoAsync?.();
            t && (e = JSON.parse(t));
          } catch {}
          ((e.isEnabled = !0),
            await o.default.setRegistrationInfoAsync(JSON.stringify(e)));
        } else await o.default.setRegistrationInfoAsync(null);
      }),
      (_e.__handlePersistedRegistrationInfoAsync = y),
      r(d[0]));
    var e,
      t = r(d[1]),
      n = r(d[2]),
      o = (e = n) && e.__esModule ? e : { default: e },
      s = r(d[3]),
      c = r(d[4]),
      l = r(d[5]);
    let u = null;
    async function f(e) {
      if (await (0, l.hasDeviceTokenChangedAsync)(e))
        return (
          u?.abort(),
          (u = new AbortController()),
          await (0, l.updateDevicePushTokenAsync)(u.signal, e)
        );
    }
    async function y(e) {
      if (!e) return;
      let t = null;
      try {
        t = JSON.parse(e);
      } catch (e) {
        console.warn(
          '[expo-notifications] Error encountered while fetching registration information for auto token updates.',
          e,
        );
      }
      if (t?.isEnabled)
        try {
          const e = await (0, c.getDevicePushTokenAsync)();
          await f(e);
        } catch (e) {
          console.warn(
            '[expo-notifications] Error encountered while updating server registration with latest device push token.',
            e,
          );
        }
    }
    o.default.getRegistrationInfoAsync
      ? ((0, s.addPushTokenListener)(async (e) => {
          try {
            const t = await o.default.getRegistrationInfoAsync();
            if (!t) return;
            const n = JSON.parse(t);
            n?.isEnabled && (await f(e));
          } catch (e) {
            console.warn(
              '[expo-notifications] Error encountered while updating server registration with latest device push token.',
              e,
            );
          }
        }),
        o.default.getRegistrationInfoAsync().then(y, (e) => {
          console.error(
            '[expo-notifications] Error reading persisted server registration info: ',
            e,
          );
        }))
      : console.warn(
          '[expo-notifications] Error encountered while fetching auto-registration state, new tokens will not be automatically registered on server.',
          new t.UnavailabilityError(
            'ServerRegistrationModule',
            'getRegistrationInfoAsync',
          ),
        );
  },
  1251,
  [1252, 266, 1255, 1256, 1244, 1258],
);
