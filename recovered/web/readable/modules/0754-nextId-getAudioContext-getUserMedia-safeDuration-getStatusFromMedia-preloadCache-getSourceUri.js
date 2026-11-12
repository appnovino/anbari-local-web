// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 754; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'nextId', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.getAudioContext = function () {
        o || (o = new AudioContext());
        return o;
      }),
      (e.getUserMedia = function (t) {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia)
          return navigator.mediaDevices.getUserMedia(t);
        const n =
          navigator.getUserMedia ||
          navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia ||
          function () {
            const t = new Error('Permission unimplemented');
            throw ((t.code = 0), (t.name = 'NotAllowedError'), t);
          };
        return new Promise((o, u) => {
          n.call(navigator, t, o, u);
        });
      }),
      (e.safeDuration = u),
      (e.getStatusFromMedia = function (t, n) {
        const o = !!(
          t.currentTime > 0 &&
          !t.paused &&
          !t.ended &&
          t.readyState > 2
        );
        return {
          id: n,
          isLoaded: !0,
          duration: u(t.duration),
          currentTime: t.currentTime,
          playbackState: '',
          timeControlStatus: o ? 'playing' : 'paused',
          reasonForWaitingToPlay: '',
          playing: o,
          didJustFinish: t.ended,
          isBuffering: !1,
          playbackRate: t.playbackRate,
          shouldCorrectPitch: !0,
          mute: t.muted,
          loop: t.loop,
          isLive: t.duration === 1 / 0,
          currentOffsetFromLive: null,
          error: null,
        };
      }),
      Object.defineProperty(e, 'preloadCache', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (e.getSourceUri = function (n) {
        if ('string' == typeof n) return n;
        if ('number' == typeof n) {
          return t.Asset.fromModule(n).uri;
        }
        if ('number' == typeof n?.assetId && !n?.uri) {
          return t.Asset.fromModule(n.assetId).uri;
        }
        return n?.uri ?? void 0;
      }));
    var t = r(d[0]);
    const n = (() => {
      let t = 0;
      return () => String(t++);
    })();
    let o = null;
    function u(t) {
      return isNaN(t) || !isFinite(t) ? 0 : t;
    }
    const s = new Map();
  },
  754,
  [356],
);
