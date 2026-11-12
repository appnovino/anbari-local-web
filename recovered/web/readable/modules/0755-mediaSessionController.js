// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 755; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'mediaSessionController', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    const t = new (class {
      activePlayer = null;
      metadata = null;
      options = null;
      setActivePlayer(t, s, n) {
        navigator.mediaSession &&
          (this.activePlayer &&
            this.activePlayer !== t &&
            this.clear(this.activePlayer),
          (this.activePlayer = t),
          (this.metadata = s ?? null),
          (this.options = n ?? null),
          this._applyMetadata(),
          this._applyActionHandlers(),
          this.updatePlaybackState(t),
          this.updatePositionState(t));
      }
      updateMetadata(t, s) {
        navigator.mediaSession &&
          this.activePlayer === t &&
          ((this.metadata = s), this._applyMetadata());
      }
      clear(t) {
        if (!navigator.mediaSession) return;
        if (this.activePlayer !== t) return;
        ((this.activePlayer = null),
          (this.metadata = null),
          (this.options = null),
          (navigator.mediaSession.metadata = null),
          (navigator.mediaSession.playbackState = 'none'));
        const s = [
          'play',
          'pause',
          'seekto',
          'seekforward',
          'seekbackward',
          'previoustrack',
          'nexttrack',
        ];
        for (const t of s) this._setHandler(t, null);
        try {
          navigator.mediaSession.setPositionState();
        } catch {}
      }
      updatePlaybackState(t) {
        navigator.mediaSession &&
          this.activePlayer === t &&
          (navigator.mediaSession.playbackState = t.playing
            ? 'playing'
            : 'paused');
      }
      updatePositionState(t) {
        if (!navigator.mediaSession) return;
        if (this.activePlayer !== t) return;
        const s = t.duration;
        if (!Number.isFinite(s) || s <= 0) return;
        const n = Math.min(Math.max(t.currentTime, 0), s),
          o = t.playbackRate || 1;
        try {
          navigator.mediaSession.setPositionState({
            duration: s,
            playbackRate: o,
            position: n,
          });
        } catch {}
      }
      isActive(t) {
        return this.activePlayer === t;
      }
      getActiveState(t) {
        return this.activePlayer !== t
          ? null
          : { metadata: this.metadata, options: this.options };
      }
      _applyMetadata() {
        if (!this.metadata)
          return void (navigator.mediaSession.metadata = null);
        const {
            title: t,
            artist: s,
            albumTitle: n,
            artworkUrl: o,
          } = this.metadata,
          l = o ? [{ src: o }] : [];
        navigator.mediaSession.metadata = new MediaMetadata({
          title: t ?? '',
          artist: s ?? '',
          album: n ?? '',
          artwork: l,
        });
      }
      _setHandler(t, s) {
        try {
          navigator.mediaSession.setActionHandler(t, s);
        } catch {}
      }
      _applyActionHandlers() {
        const t = this.activePlayer;
        if (!t) return;
        (this._setHandler('play', () => {
          t.play();
        }),
          this._setHandler('pause', () => {
            t.pause();
          }),
          this._setHandler('seekto', (s) => {
            null != s.seekTime &&
              (t.seekTo(s.seekTime), this.updatePositionState(t));
          }));
        const s = (s) => {
            const n = s.seekOffset ?? 10,
              o = Math.min(t.currentTime + n, t.duration || 0);
            (t.seekTo(o), this.updatePositionState(t));
          },
          n = (s) => {
            const n = s.seekOffset ?? 10,
              o = Math.max(t.currentTime - n, 0);
            (t.seekTo(o), this.updatePositionState(t));
          };
        (!0 === this.options?.showSeekForward
          ? (this._setHandler('seekforward', s),
            this._setHandler('nexttrack', s))
          : (this._setHandler('seekforward', null),
            this._setHandler('nexttrack', null)),
          !0 === this.options?.showSeekBackward
            ? (this._setHandler('seekbackward', n),
              this._setHandler('previoustrack', n))
            : (this._setHandler('seekbackward', null),
              this._setHandler('previoustrack', null)));
      }
    })();
  },
  755,
  [],
);
