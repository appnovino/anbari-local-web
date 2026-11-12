// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 756; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'AudioPlaylistWeb', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }));
    var t = r(d[0]),
      s = r(d[1]),
      n = r(d[2]);
    function u(t) {
      const u = (0, n.resolveSource)(t);
      return u && 'object' == typeof u
        ? { uri: u.uri, name: u.name }
        : { uri: (0, s.getSourceUri)(t) };
    }
    class h extends globalThis.expo.SharedObject {
      constructor(t = [], s = 500, n = 'none', h) {
        (super(),
          (this._updateInterval = Math.max(s, 1)),
          (this._loopMode = n),
          (this._crossOrigin = h));
        for (const s of t)
          (this._sources.push(s), this._sourceInfos.push(u(s)));
        if (this._sources.length > 0) {
          const t = this._sources[0];
          (t && (this._currentMedia = this._createMediaElement(t)),
            this._preloadNext());
        }
      }
      id = (0, s.nextId)();
      _sources = [];
      _sourceInfos = [];
      _currentIndex = 0;
      _currentMedia = null;
      _nextMedia = null;
      _updateInterval = 500;
      _loopMode = 'none';
      _isPlaying = !1;
      _isLoaded = !1;
      _isBuffering = !1;
      _volume = 1;
      _muted = !1;
      _playbackRate = 1;
      _knownDuration = 0;
      get currentIndex() {
        return this._currentIndex;
      }
      get trackCount() {
        return this._sources.length;
      }
      get sources() {
        return [...this._sourceInfos];
      }
      get playing() {
        return this._isPlaying;
      }
      get muted() {
        return this._muted;
      }
      set muted(t) {
        ((this._muted = t),
          this._currentMedia && (this._currentMedia.muted = t));
      }
      get isLoaded() {
        return this._isLoaded;
      }
      get isBuffering() {
        return this._isBuffering;
      }
      get currentTime() {
        return this._currentMedia?.currentTime ?? 0;
      }
      get duration() {
        return this._knownDuration;
      }
      get volume() {
        return this._volume;
      }
      set volume(t) {
        ((this._volume = t),
          this._currentMedia && (this._currentMedia.volume = t));
      }
      get playbackRate() {
        return this._playbackRate;
      }
      set playbackRate(t) {
        ((this._playbackRate = t),
          this._currentMedia && (this._currentMedia.playbackRate = t));
      }
      get loop() {
        return this._loopMode;
      }
      set loop(t) {
        ((this._loopMode = t), this._emitStatus());
      }
      get currentStatus() {
        return this._getStatus();
      }
      play() {
        this._currentMedia &&
          0 !== this._sources.length &&
          (this._currentMedia.play(), (this._isPlaying = !0));
      }
      pause() {
        this._currentMedia &&
          (this._currentMedia.pause(), (this._isPlaying = !1));
      }
      next() {
        if (0 === this._sources.length) return;
        const t = this._currentIndex;
        let s = this._currentIndex + 1;
        if (s >= this._sources.length) {
          if ('all' !== this._loopMode) return;
          s = 0;
        }
        this._transitionToTrack(s, t);
      }
      previous() {
        if (0 === this._sources.length) return;
        const t = this._currentIndex;
        let s = this._currentIndex - 1;
        if (s < 0) {
          if ('all' !== this._loopMode) return;
          s = this._sources.length - 1;
        }
        this._transitionToTrack(s, t);
      }
      skipTo(t) {
        if (t < 0 || t >= this._sources.length) return;
        if (t === this._currentIndex) return;
        const s = this._currentIndex;
        this._transitionToTrack(t, s);
      }
      async seekTo(t) {
        this._currentMedia && (this._currentMedia.currentTime = t);
      }
      add(t) {
        (this._sources.push(t),
          this._sourceInfos.push(u(t)),
          1 === this._sources.length
            ? (this._currentMedia = this._createMediaElement(t))
            : this._preloadNext(),
          this._emitStatus());
      }
      insert(t, s) {
        (s < 0 && (s = 0),
          s > this._sources.length && (s = this._sources.length),
          this._sources.splice(s, 0, t),
          this._sourceInfos.splice(s, 0, u(t)),
          s <= this._currentIndex &&
            this._sources.length > 1 &&
            this._currentIndex++,
          1 === this._sources.length
            ? (this._currentMedia = this._createMediaElement(t))
            : this._preloadNext(),
          this._emitStatus());
      }
      remove(t) {
        if (t < 0 || t >= this._sources.length) return;
        const s = t === this._currentIndex,
          n = this._isPlaying;
        if (
          (this._sources.splice(t, 1),
          this._sourceInfos.splice(t, 1),
          0 === this._sources.length)
        )
          (this._cleanupMedia(this._currentMedia),
            (this._currentMedia = null),
            this._cleanupMedia(this._nextMedia),
            (this._nextMedia = null),
            (this._currentIndex = 0),
            (this._isPlaying = !1),
            (this._isLoaded = !1),
            (this._knownDuration = 0));
        else if (s) {
          (this._cleanupMedia(this._currentMedia),
            this._currentIndex >= this._sources.length &&
              (this._currentIndex = this._sources.length - 1),
            (this._knownDuration = 0));
          const t = this._sources[this._currentIndex];
          (t &&
            ((this._currentMedia = this._createMediaElement(t)),
            n && this._currentMedia.play()),
            this._preloadNext());
        } else
          t < this._currentIndex
            ? (this._currentIndex--, this._preloadNext())
            : this._preloadNext();
        this._emitStatus();
      }
      clear() {
        (this._cleanupMedia(this._currentMedia),
          (this._currentMedia = null),
          this._cleanupMedia(this._nextMedia),
          (this._nextMedia = null),
          (this._sources = []),
          (this._sourceInfos = []),
          (this._currentIndex = 0),
          (this._isPlaying = !1),
          (this._isLoaded = !1),
          (this._knownDuration = 0),
          this._emitStatus());
      }
      destroy() {
        this.clear();
      }
      _transitionToTrack(s, n) {
        const u = this._isPlaying;
        (this._currentMedia &&
          (this._currentMedia.pause(), this._cleanupMedia(this._currentMedia)),
          (this._currentIndex = s),
          (this._isLoaded = !1),
          (this._isBuffering = !0),
          (this._knownDuration = 0));
        const h = s === (n + 1) % this._sources.length;
        if (this._nextMedia && h)
          ((this._currentMedia = this._nextMedia),
            this._attachMediaHandlers(this._currentMedia),
            (this._nextMedia = null));
        else {
          (this._cleanupMedia(this._nextMedia), (this._nextMedia = null));
          const t = this._sources[s];
          t && (this._currentMedia = this._createMediaElement(t));
        }
        (this._currentMedia &&
          u &&
          (this._currentMedia.play(), (this._isPlaying = !0)),
          this._preloadNext(),
          this.emit(t.TRACK_CHANGED, { previousIndex: n, currentIndex: s }),
          this._emitStatus());
      }
      _preloadNext() {
        if (
          (this._nextMedia &&
            (this._cleanupMedia(this._nextMedia), (this._nextMedia = null)),
          this._sources.length <= 1 || 'single' === this._loopMode)
        )
          return;
        let t = this._currentIndex + 1;
        if (t >= this._sources.length) {
          if ('all' !== this._loopMode) return;
          t = 0;
        }
        const n = this._sources[t];
        if (n) {
          const t = (0, s.getSourceUri)(n);
          t &&
            ((this._nextMedia = new Audio(t)),
            void 0 !== this._crossOrigin &&
              (this._nextMedia.crossOrigin = this._crossOrigin),
            (this._nextMedia.preload = 'auto'),
            (this._nextMedia.volume = this._volume),
            (this._nextMedia.muted = this._muted),
            (this._nextMedia.playbackRate = this._playbackRate));
        }
      }
      _cleanupMedia(t) {
        t &&
          (t.pause(),
          (t.ontimeupdate = null),
          (t.onplay = null),
          (t.onpause = null),
          (t.onseeked = null),
          (t.onended = null),
          (t.onloadedmetadata = null),
          (t.onloadeddata = null),
          (t.onwaiting = null),
          (t.oncanplaythrough = null),
          (t.onerror = null),
          t.removeAttribute('src'),
          t.load());
      }
      _attachMediaHandlers(t) {
        let s = 0;
        const n = this._updateInterval / 1e3;
        if (t.readyState >= 1) {
          const s = t.duration;
          !isNaN(s) && isFinite(s) && (this._knownDuration = s);
        }
        ((t.ontimeupdate = () => {
          const u = t.currentTime;
          (u < s && (s = u), u - s >= n && ((s = u), this._emitStatus()));
        }),
          (t.onplay = () => {
            ((this._isPlaying = !0), (s = t.currentTime), this._emitStatus());
          }),
          (t.onpause = () => {
            (t.ended || (this._isPlaying = !1),
              (s = t.currentTime),
              this._emitStatus());
          }),
          (t.onseeked = () => {
            ((s = t.currentTime), this._emitStatus());
          }),
          (t.onended = () => {
            ((s = 0), this._handleTrackEnded());
          }),
          (t.onloadedmetadata = () => {
            const s = t.duration;
            !isNaN(s) &&
              isFinite(s) &&
              ((this._knownDuration = s), this._emitStatus());
          }),
          (t.onloadeddata = () => {
            ((this._isLoaded = !0),
              (this._isBuffering = !1),
              (s = t.currentTime),
              this._emitStatus());
          }),
          (t.onwaiting = () => {
            ((this._isBuffering = !0), this._emitStatus());
          }),
          (t.oncanplaythrough = () => {
            ((this._isBuffering = !1), this._emitStatus());
          }),
          (t.onerror = () => {
            ((this._isLoaded = !1),
              (this._isBuffering = !1),
              (this._isPlaying = !1),
              this._emitStatus());
          }));
      }
      _createMediaElement(t) {
        const n = (0, s.getSourceUri)(t),
          u = new Audio(n);
        return (
          void 0 !== this._crossOrigin && (u.crossOrigin = this._crossOrigin),
          (u.volume = this._volume),
          (u.muted = this._muted),
          (u.playbackRate = this._playbackRate),
          this._attachMediaHandlers(u),
          u
        );
      }
      _handleTrackEnded() {
        if ('single' === this._loopMode)
          return void (
            this._currentMedia &&
            ((this._currentMedia.currentTime = 0), this._currentMedia.play())
          );
        this._currentIndex >= this._sources.length - 1
          ? 'all' === this._loopMode
            ? this._transitionToTrack(0, this._currentIndex)
            : ((this._isPlaying = !1),
              this.emit(t.PLAYLIST_STATUS_UPDATE, {
                ...this._getStatus(),
                didJustFinish: !0,
              }))
          : this._transitionToTrack(this._currentIndex + 1, this._currentIndex);
      }
      _getStatus() {
        return {
          id: this.id,
          currentIndex: this._currentIndex,
          trackCount: this._sources.length,
          currentTime: this._currentMedia?.currentTime ?? 0,
          duration: this._knownDuration,
          playing: this._isPlaying,
          isBuffering: this._isBuffering,
          isLoaded: this._isLoaded,
          playbackRate: this._playbackRate,
          muted: this._muted,
          volume: this._volume,
          loop: this._loopMode,
          didJustFinish: !1,
        };
      }
      _emitStatus() {
        this.emit(t.PLAYLIST_STATUS_UPDATE, this._getStatus());
      }
    }
  },
  756,
  [751, 754, 757],
);
