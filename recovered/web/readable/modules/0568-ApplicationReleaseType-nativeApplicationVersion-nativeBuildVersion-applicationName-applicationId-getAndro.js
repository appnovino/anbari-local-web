// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 568; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'ApplicationReleaseType', {
        enumerable: !0,
        get: function () {
          return l.ApplicationReleaseType;
        },
      }),
      Object.defineProperty(_e, 'nativeApplicationVersion', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(_e, 'nativeBuildVersion', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(_e, 'applicationName', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(_e, 'applicationId', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (_e.getAndroidId = function () {
        throw new t.UnavailabilityError('expo-application', 'androidId');
      }),
      (_e.getInstallReferrerAsync = async function () {
        if (!o.default.getInstallReferrerAsync)
          throw new t.UnavailabilityError(
            'expo-application',
            'getInstallReferrerAsync',
          );
        return await o.default.getInstallReferrerAsync();
      }),
      (_e.getIosIdForVendorAsync = async function () {
        if (!o.default.getIosIdForVendorAsync)
          throw new t.UnavailabilityError(
            'expo-application',
            'getIosIdForVendorAsync',
          );
        return await o.default.getIosIdForVendorAsync();
      }),
      (_e.getIosApplicationReleaseTypeAsync = async function () {
        if (!o.default.getApplicationReleaseTypeAsync)
          throw new t.UnavailabilityError(
            'expo-application',
            'getApplicationReleaseTypeAsync',
          );
        return await o.default.getApplicationReleaseTypeAsync();
      }),
      (_e.getIosPushNotificationServiceEnvironmentAsync = async function () {
        if (!o.default.getPushNotificationServiceEnvironmentAsync)
          throw new t.UnavailabilityError(
            'expo-application',
            'getPushNotificationServiceEnvironmentAsync',
          );
        return await o.default.getPushNotificationServiceEnvironmentAsync();
      }),
      (_e.getInstallationTimeAsync = async function () {
        if (!o.default.getInstallationTimeAsync)
          throw new t.UnavailabilityError(
            'expo-application',
            'getInstallationTimeAsync',
          );
        const e = await o.default.getInstallationTimeAsync();
        return new Date(e);
      }),
      (_e.getLastUpdateTimeAsync = async function () {
        if (!o.default.getLastUpdateTimeAsync)
          throw new t.UnavailabilityError(
            'expo-application',
            'getLastUpdateTimeAsync',
          );
        const e = await o.default.getLastUpdateTimeAsync();
        return new Date(e);
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      o = (e = n) && e.__esModule ? e : { default: e },
      l = r(d[2]);
    const c = (o.default && o.default.nativeApplicationVersion) || null,
      s = (o.default && o.default.nativeBuildVersion) || null,
      u = (o.default && o.default.applicationName) || null,
      p = (o.default && o.default.applicationId) || null;
  },
  568,
  [266, 569, 570],
);
