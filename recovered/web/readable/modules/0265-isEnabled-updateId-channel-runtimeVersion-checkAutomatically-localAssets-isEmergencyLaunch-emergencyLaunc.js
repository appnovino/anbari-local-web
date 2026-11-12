// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 265; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'isEnabled', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(_e, 'updateId', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(_e, 'channel', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(_e, 'runtimeVersion', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(_e, 'checkAutomatically', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(_e, 'localAssets', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      Object.defineProperty(_e, 'isEmergencyLaunch', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(_e, 'emergencyLaunchReason', {
        enumerable: !0,
        get: function () {
          return A;
        },
      }),
      Object.defineProperty(_e, 'launchDuration', {
        enumerable: !0,
        get: function () {
          return E;
        },
      }),
      Object.defineProperty(_e, 'isEmbeddedLaunch', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      Object.defineProperty(_e, 'isUsingEmbeddedAssets', {
        enumerable: !0,
        get: function () {
          return O;
        },
      }),
      Object.defineProperty(_e, 'manifest', {
        enumerable: !0,
        get: function () {
          return R;
        },
      }),
      Object.defineProperty(_e, 'createdAt', {
        enumerable: !0,
        get: function () {
          return S;
        },
      }),
      (_e.reloadAsync = async function (e) {
        if (w && !P)
          throw new t.CodedError(
            'ERR_UPDATES_DISABLED',
            `You cannot use the Updates module in development mode in a production app. ${L}`,
          );
        if (e?.reloadScreenOptions) {
          const t = _(e.reloadScreenOptions);
          return await u.default.reload(t);
        }
        await u.default.reload(null);
      }),
      (_e.checkForUpdateAsync = async function () {
        if (w && !P)
          throw new t.CodedError(
            'ERR_UPDATES_DISABLED',
            `You cannot check for updates in development mode. ${L}`,
          );
        const e = await u.default.checkForUpdateAsync();
        if ('manifestString' in e) {
          const { manifestString: t, ...n } = e;
          return { ...n, manifest: JSON.parse(t) };
        }
        return e;
      }),
      (_e.getExtraParamsAsync = async function () {
        return await u.default.getExtraParamsAsync();
      }),
      (_e.setExtraParamAsync = async function (e, t) {
        return await u.default.setExtraParamAsync(e, t ?? null);
      }),
      (_e.readLogEntriesAsync = async function (e = 36e5) {
        return await u.default.readLogEntriesAsync(e);
      }),
      (_e.clearLogEntriesAsync = async function () {
        await u.default.clearLogEntriesAsync();
      }),
      (_e.fetchUpdateAsync = async function () {
        if (w && !P)
          throw new t.CodedError(
            'ERR_UPDATES_DISABLED',
            `You cannot fetch updates in development mode. ${L}`,
          );
        const e = await u.default.fetchUpdateAsync();
        if ('manifestString' in e) {
          const { manifestString: t, ...n } = e;
          return { ...n, manifest: JSON.parse(t) };
        }
        return e;
      }),
      (_e.setUpdateURLAndRequestHeadersOverride = function (e) {
        u.default.setUpdateURLAndRequestHeadersOverride(e);
      }),
      (_e.setUpdateRequestHeadersOverride = function (e) {
        u.default.setUpdateRequestHeadersOverride(e);
      }),
      (_e.showReloadScreen = async function (e) {
        if (e?.reloadScreenOptions) {
          const t = _(e.reloadScreenOptions);
          return u.default.showReloadScreen(t);
        }
        return u.default.showReloadScreen();
      }),
      (_e.hideReloadScreen = async function () {
        return u.default.hideReloadScreen();
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      u = e(r(d[2])),
      o = r(d[3]);
    const c = !!u.default.isEnabled,
      l =
        u.default.updateId && 'string' == typeof u.default.updateId
          ? u.default.updateId.toLowerCase()
          : null,
      s = u.default.channel ?? null,
      f = u.default.runtimeVersion ?? null,
      p =
        {
          ALWAYS: o.UpdatesCheckAutomaticallyValue.ON_LOAD,
          ERROR_RECOVERY_ONLY:
            o.UpdatesCheckAutomaticallyValue.ON_ERROR_RECOVERY,
          NEVER: o.UpdatesCheckAutomaticallyValue.NEVER,
          WIFI_ONLY: o.UpdatesCheckAutomaticallyValue.WIFI_ONLY,
        }[u.default.checkAutomatically] ?? null,
      y = u.default.localAssets ?? {},
      h = u.default.isEmergencyLaunch,
      A = u.default.emergencyLaunchReason,
      E = u.default.launchDuration,
      b = u.default.isEmbeddedLaunch || !1,
      O = u.default.isUsingEmbeddedAssets || !1,
      R =
        (u.default.manifestString
          ? JSON.parse(u.default.manifestString)
          : u.default.manifest) ?? {},
      S = u.default.commitTime ? new Date(u.default.commitTime) : null,
      P = !!u.default.shouldDeferToNativeForAPIMethodAvailabilityInDevelopment,
      w = 'extra' in R && !!R.extra?.expoGo?.developer?.tool,
      L =
        'To test usage of the expo-updates JS API in your app, make a release build with `npx expo run:ios --configuration Release` or `npx expo run:android --variant Release`.';
    function U(e) {
      if ('string' == typeof e) return { url: e };
      if ('number' == typeof e) {
        const t = n.default.resolveAssetSource(e);
        return t
          ? { url: t.uri, width: t.width, height: t.height, scale: t.scale }
          : null;
      }
      return 'object' == typeof e && null !== e ? e : null;
    }
    function _(e) {
      if (!e.image) return e;
      const t = U(e.image);
      return { ...e, image: t || void 0 };
    }
  },
  265,
  [266, 168, 304, 305],
);
