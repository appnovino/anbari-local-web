// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 308; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'currentlyRunning', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(_e, 'updateFromManifest', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(_e, 'updateFromRollback', {
        enumerable: !0,
        get: function () {
          return d;
        },
      }),
      Object.defineProperty(_e, 'updatesStateFromContext', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var e = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var o = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[0])),
      t = r(_d[1]);
    const n = {
        updateId: e.updateId ?? void 0,
        channel: e.channel ?? void 0,
        createdAt: e.createdAt ?? void 0,
        launchDuration: e.launchDuration ?? void 0,
        isEmbeddedLaunch: e.isEmbeddedLaunch,
        isEmergencyLaunch: e.isEmergencyLaunch,
        emergencyLaunchReason: e.emergencyLaunchReason,
        manifest: e.manifest ?? void 0,
        runtimeVersion: e.runtimeVersion ?? void 0,
      },
      o = (e) => ({
        type: t.UpdateInfoType.NEW,
        updateId: e.id ?? '',
        createdAt:
          e && 'createdAt' in e && e.createdAt
            ? new Date(e.createdAt)
            : new Date(0),
        manifest: e,
      }),
      d = (e) => ({
        type: t.UpdateInfoType.ROLLBACK,
        createdAt: new Date(e.commitTime),
        manifest: void 0,
        updateId: void 0,
      }),
      c = (e) => {
        const t = e?.latestManifest
            ? o(e?.latestManifest)
            : e.rollback
              ? d(e.rollback)
              : void 0,
          n = e?.downloadedManifest
            ? o(e?.downloadedManifest)
            : e.rollback
              ? d(e.rollback)
              : void 0;
        return {
          isStartupProcedureRunning: e.isStartupProcedureRunning,
          isUpdateAvailable: e.isUpdateAvailable,
          isUpdatePending: e.isUpdatePending,
          isChecking: e.isChecking,
          isDownloading: e.isDownloading,
          isRestarting: e.isRestarting,
          restartCount: e.restartCount,
          availableUpdate: t,
          downloadedUpdate: n,
          checkError: e.checkError,
          downloadError: e.downloadError,
          downloadProgress: e.downloadProgress,
          lastCheckForUpdateTimeSinceRestart: e.lastCheckForUpdateTime,
        };
      };
  },
  308,
  [265, 309],
);
