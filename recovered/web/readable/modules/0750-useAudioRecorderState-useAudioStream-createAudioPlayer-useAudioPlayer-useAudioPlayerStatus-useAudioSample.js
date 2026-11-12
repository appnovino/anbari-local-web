// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 750; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'useAudioRecorderState', {
        enumerable: !0,
        get: function () {
          return l.useAudioRecorderState;
        },
      }),
      Object.defineProperty(_e, 'useAudioStream', {
        enumerable: !0,
        get: function () {
          return d.useAudioStream;
        },
      }),
      (_e.createAudioPlayer = function (e = null, n = {}) {
        const { downloadFirst: t = !1 } = n,
          o = t ? null : (0, c.resolveSource)(e),
          s = new u.AudioPlayerWeb(o, n);
        if (t && e) {
          const n = (0, c.resolveSource)(e);
          n &&
            u.preloadAsync(n).finally(() => {
              s.replace(n);
            });
        }
        return s;
      }),
      (_e.useAudioPlayer = function (e = null, o = {}) {
        const { downloadFirst: s = !1 } = o,
          l = (0, t.useMemo)(
            () => (s ? null : (0, c.resolveSource)(e)),
            [JSON.stringify(e), s],
          ),
          d = (0, n.useReleasingSharedObject)(
            () => new u.AudioPlayerWeb(l, o),
            [JSON.stringify(l), JSON.stringify(o)],
          );
        return (
          (0, t.useEffect)(() => {
            if (!s || null === e) return;
            let n = !1;
            const t = (0, c.resolveSource)(e);
            return (
              t &&
                u.preloadAsync(t).finally(() => {
                  n || d.replace(t);
                }),
              () => {
                n = !0;
              }
            );
          }, [d, JSON.stringify(e), s]),
          d
        );
      }),
      (_e.useAudioPlayerStatus = function (n) {
        const u = (0, t.useMemo)(() => n.currentStatus, [n.id]);
        return (0, e.useEvent)(n, o.PLAYBACK_STATUS_UPDATE, u);
      }),
      (_e.useAudioSampleListener = function (e, n) {
        (e.setAudioSamplingEnabled(!0),
          (0, t.useEffect)(() => {
            const t = e.addListener(o.AUDIO_SAMPLE_UPDATE, n);
            return () => {
              (e.setAudioSamplingEnabled(!1), t.remove());
            };
          }, [e.id]));
      }),
      (_e.useAudioRecorder = function (e, n) {
        const c = (0, s.createRecordingOptions)(e),
          l = (0, t.useMemo)(
            () => new u.AudioRecorderWeb(c),
            [JSON.stringify(c)],
          );
        return (
          (0, t.useEffect)(() => {
            const e = l.addListener(o.RECORDING_STATUS_UPDATE, (e) => {
              n?.(e);
            });
            return () => {
              (l.clearTimeouts(), e.remove());
            };
          }, [l.id]),
          l
        );
      }),
      (_e.setIsAudioActiveAsync = async function (e) {
        return await u.setIsAudioActiveAsync(e);
      }),
      (_e.setAudioModeAsync = async function (e) {
        return await u.setAudioModeAsync(e);
      }),
      (_e.requestRecordingPermissionsAsync = async function () {
        return await u.requestRecordingPermissionsAsync();
      }),
      (_e.getRecordingPermissionsAsync = async function () {
        return await u.getRecordingPermissionsAsync();
      }),
      (_e.useAudioPlaylist = function (e = {}) {
        const {
            sources: n = [],
            updateInterval: o = 500,
            loop: s = 'none',
            crossOrigin: l,
          } = e,
          d = (0, t.useMemo)(
            () => (0, c.resolveSources)(n),
            [JSON.stringify(n)],
          ),
          f = (0, t.useMemo)(
            () => new u.AudioPlaylistWeb(d, o, s, l),
            [JSON.stringify(d), o, s, l],
          );
        return ((0, t.useEffect)(() => () => f.destroy(), [f]), f);
      }),
      (_e.useAudioPlaylistStatus = function (n) {
        const u = (0, t.useMemo)(() => n.currentStatus, [n.id]);
        return (0, e.useEvent)(n, o.PLAYLIST_STATUS_UPDATE, u);
      }),
      (_e.createAudioPlaylist = function (e = {}) {
        const {
            sources: n = [],
            updateInterval: t = 500,
            loop: o = 'none',
            crossOrigin: s,
          } = e,
          l = (0, c.resolveSources)(n);
        return new u.AudioPlaylistWeb(l, t, o, s);
      }),
      (_e.preload = function (e, n = {}) {
        const t = (0, c.resolveSource)(e);
        if (!t) return;
        u.preload(t);
      }),
      (_e.clearPreloadedSource = function (e) {
        const n = (0, c.resolveSource)(e);
        if (!n) return;
        u.clearPreloadedSource(n);
      }),
      (_e.clearAllPreloadedSources = function () {
        u.clearAllPreloadedSources();
      }),
      (_e.getPreloadedSources = function () {
        return u.getPreloadedSources();
      }),
      Object.defineProperty(_e, 'AudioModule', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var e = r(_d[0]),
      n = r(_d[1]),
      t = r(_d[2]),
      o = r(_d[3]),
      u = (function (e) {
        if (e && e.__esModule) return e;
        var n = {};
        return (
          e &&
            Object.keys(e).forEach(function (t) {
              var o = Object.getOwnPropertyDescriptor(e, t);
              Object.defineProperty(
                n,
                t,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[t];
                      },
                    },
              );
            }),
          (n.default = e),
          n
        );
      })(r(_d[4])),
      s = r(_d[5]),
      c = r(_d[6]),
      l = r(_d[7]),
      d = r(_d[8]);
  },
  750,
  [313, 266, 2, 751, 752, 760, 757, 761, 762],
);
