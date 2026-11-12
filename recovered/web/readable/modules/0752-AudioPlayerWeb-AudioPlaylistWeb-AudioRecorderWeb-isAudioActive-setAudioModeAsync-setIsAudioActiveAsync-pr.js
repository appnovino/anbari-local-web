// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 752; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'AudioPlayerWeb', {
        enumerable: !0,
        get: function () {
          return n.AudioPlayerWeb;
        },
      }),
      Object.defineProperty(e, 'AudioPlaylistWeb', {
        enumerable: !0,
        get: function () {
          return o.AudioPlaylistWeb;
        },
      }),
      Object.defineProperty(e, 'AudioRecorderWeb', {
        enumerable: !0,
        get: function () {
          return c.AudioRecorderWeb;
        },
      }),
      Object.defineProperty(e, 'isAudioActive', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.setAudioModeAsync = async function (t) {}),
      (e.setIsAudioActiveAsync = async function (t) {
        if (((u = t), !t))
          for (const t of n.activePlayers) t.playing && t.pause();
      }),
      (e.preloadAsync = f),
      (e.preload = function (t) {
        f(t).catch(() => {});
      }),
      (e.clearPreloadedSource = function (t) {
        const n = (0, s.getSourceUri)(t);
        if (!n) return;
        const o = s.preloadCache.get(n);
        o && (URL.revokeObjectURL(o.blobUrl), s.preloadCache.delete(n));
      }),
      (e.clearAllPreloadedSources = function () {
        for (const t of s.preloadCache.values()) URL.revokeObjectURL(t.blobUrl);
        s.preloadCache.clear();
      }),
      (e.getPreloadedSources = function () {
        return Array.from(s.preloadCache.keys());
      }),
      (e.getRecordingPermissionsAsync = async function () {
        switch (await l('microphone')) {
          case t.PermissionStatus.GRANTED:
            return {
              status: t.PermissionStatus.GRANTED,
              expires: 'never',
              canAskAgain: !0,
              granted: !0,
            };
          case t.PermissionStatus.DENIED:
            return {
              status: t.PermissionStatus.DENIED,
              expires: 'never',
              canAskAgain: !0,
              granted: !1,
            };
          default:
            return await A();
        }
      }),
      (e.requestRecordingPermissionsAsync = A));
    var t = r(d[0]),
      n = r(d[1]),
      s = r(d[2]),
      o = r(d[3]),
      c = r(d[4]);
    let u = !0;
    async function l(n) {
      if (!navigator || !navigator.permissions || !navigator.permissions.query)
        return null;
      try {
        const { state: s } = await navigator.permissions.query({ name: n });
        switch (s) {
          case 'granted':
            return t.PermissionStatus.GRANTED;
          case 'denied':
            return t.PermissionStatus.DENIED;
          default:
            return t.PermissionStatus.UNDETERMINED;
        }
      } catch {
        return t.PermissionStatus.UNDETERMINED;
      }
    }
    async function f(t) {
      const n = (0, s.getSourceUri)(t);
      if (!n || s.preloadCache.has(n)) return;
      const o =
          t && 'object' == typeof t && !Array.isArray(t) ? t.headers : void 0,
        c = await fetch(n, o ? { headers: o } : void 0),
        u = await c.blob(),
        l = URL.createObjectURL(u),
        f = new Audio(l);
      ((f.preload = 'auto'), s.preloadCache.set(n, { blobUrl: l, audio: f }));
    }
    async function A() {
      try {
        return (
          (await (0, s.getUserMedia)({ audio: !0 }))
            .getTracks()
            .forEach((t) => t.stop()),
          {
            status: t.PermissionStatus.GRANTED,
            expires: 'never',
            canAskAgain: !0,
            granted: !0,
          }
        );
      } catch {
        return {
          status: t.PermissionStatus.DENIED,
          expires: 'never',
          canAskAgain: !0,
          granted: !1,
        };
      }
    }
  },
  752,
  [313, 753, 754, 756, 758],
);
