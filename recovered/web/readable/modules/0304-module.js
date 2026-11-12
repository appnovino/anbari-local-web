// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 304; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var n = r(d[0]),
      s = r(d[1]);
    class t extends n.NativeModule {
      isEmergencyLaunch = !1;
      emergencyLaunchReason = null;
      launchDuration = null;
      isEmbeddedLaunch = !1;
      isEnabled = !0;
      isUsingEmbeddedAssets = void 0;
      runtimeVersion = '';
      checkAutomatically = 'ALWAYS';
      channel = '';
      shouldDeferToNativeForAPIMethodAvailabilityInDevelopment = !1;
      initialContext = {
        isStartupProcedureRunning: !1,
        isUpdateAvailable: !1,
        isUpdatePending: !1,
        isChecking: !1,
        isDownloading: !1,
        isRestarting: !1,
        restartCount: 0,
        sequenceNumber: 0,
        downloadProgress: 0,
      };
      async reload() {
        'undefined' != typeof window && window.location.reload(!0);
      }
      async checkForUpdateAsync() {
        return {
          isAvailable: !1,
          manifest: void 0,
          isRollBackToEmbedded: !1,
          reason:
            s.UpdateCheckResultNotAvailableReason.NO_UPDATE_AVAILABLE_ON_SERVER,
        };
      }
      async getExtraParamsAsync() {
        return {};
      }
      async setExtraParamAsync(n, s) {}
      async readLogEntriesAsync(n) {
        return [];
      }
      async clearLogEntriesAsync() {}
      async fetchUpdateAsync() {
        return { isNew: !1, manifest: void 0, isRollBackToEmbedded: !1 };
      }
    }
    var o = (0, n.registerWebModule)(t, 'ExpoUpdates');
  },
  304,
  [266, 305],
);
