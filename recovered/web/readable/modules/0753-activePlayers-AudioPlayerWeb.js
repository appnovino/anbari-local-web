// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 753; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'activePlayers', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'AudioPlayerWeb', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t = r(d[0]),
      s = r(d[1]),
      n = r(d[2]),
      o = r(d[3]);
    const l = new Set();
    let h = !1;
    class u extends globalThis.expo.SharedObject {
      constructor(t, s = {}) {
        super();
        const { updateInterval: n = 500, crossOrigin: o } = s;
        ((this.src = t),
          (this.interval = Math.max(n, 1)),
          (this.crossOrigin = o),
          (this.media = this._createMediaElement()),
          l.add(this));
      }
      id = (0, n.nextId)();
      isAudioSamplingSupported = !1;
      isBuffering = !1;
      shouldCorrectPitch = !1;
      src = null;
      interval = 500;
      isPlaying = !1;
      loaded = !1;
      analyser = null;
      sourceNode = null;
      samplingFrameId = null;
      samplingEnabled = !1;
      samplingBuffer = null;
      get playing() {
        return this.isPlaying;
      }
      get muted() {
        return this.media.muted;
      }
      set muted(t) {
        this.media.muted = t;
      }
      get loop() {
        return this.media.loop;
      }
      set loop(t) {
        this.media.loop = t;
      }
      get duration() {
        return (0, n.safeDuration)(this.media.duration);
      }
      get currentTime() {
        return this.media.currentTime;
      }
      get paused() {
        return this.media.paused;
      }
      get isLoaded() {
        return this.loaded;
      }
      get playbackRate() {
        return this.media.playbackRate;
      }
      set playbackRate(t) {
        this.media.playbackRate = t;
      }
      get volume() {
        return this.media.volume;
      }
      set volume(t) {
        (!h &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          ((h = !0),
          console.warn(
            'expo-audio: Programmatic volume control is not supported in browsers on iOS. Apple requires volume to be controlled exclusively by the device physical buttons.',
          )),
          (this.media.volume = t));
      }
      get currentStatus() {
        return (0, n.getStatusFromMedia)(this.media, this.id);
      }
      play() {
        s.isAudioActive &&
          (this.media.play(), (this.isPlaying = !0), this.startSampling());
      }
      pause() {
        (this.media.pause(), (this.isPlaying = !1), this.stopSampling());
      }
      replace(t) {
        const s = this.isPlaying,
          n = this.samplingEnabled,
          l = o.mediaSessionController.getActiveState(this);
        (this.remove(),
          (this.src = t),
          (this.isPlaying = !1),
          (this.loaded = !1),
          (this.media = this._createMediaElement()),
          n && this.setAudioSamplingEnabled(!0),
          l &&
            o.mediaSessionController.setActivePlayer(
              this,
              l.metadata ?? void 0,
              l.options ?? void 0,
            ),
          s && this.play());
      }
      async seekTo(t, s, n) {
        this.media.currentTime = t;
      }
      setAudioSamplingEnabled(t) {
        if (t) {
          if (!this.media.crossOrigin && this._isCrossOrigin())
            return void (this.isAudioSamplingSupported = !1);
          if (this.analyser) return;
          const t = (0, n.getAudioContext)();
          ('suspended' === t.state && t.resume(),
            this.sourceNode ||
              (this.sourceNode = t.createMediaElementSource(this.media)),
            (this.analyser = t.createAnalyser()),
            (this.analyser.fftSize = 2048),
            this.sourceNode.disconnect(),
            this.sourceNode.connect(this.analyser),
            this.analyser.connect(t.destination),
            (this.samplingBuffer = new Float32Array(
              this.analyser.frequencyBinCount,
            )),
            (this.samplingEnabled = !0),
            this.isPlaying && this.startSampling(),
            (this.isAudioSamplingSupported = !0));
        } else {
          if (
            (this.stopSampling(),
            this.analyser &&
              (this.analyser.disconnect(), (this.analyser = null)),
            this.sourceNode)
          ) {
            const t = (0, n.getAudioContext)();
            (this.sourceNode.disconnect(),
              this.sourceNode.connect(t.destination));
          }
          ((this.samplingBuffer = null), (this.samplingEnabled = !1));
        }
      }
      startSampling() {
        if (!this.samplingEnabled || !this.analyser || !this.samplingBuffer)
          return;
        const s = () => {
          this.analyser &&
            this.samplingBuffer &&
            (this.analyser.getFloatTimeDomainData(this.samplingBuffer),
            this.emit(t.AUDIO_SAMPLE_UPDATE, {
              channels: [{ frames: Array.from(this.samplingBuffer) }],
              timestamp: this.media.currentTime,
            }),
            (this.samplingFrameId = requestAnimationFrame(s)));
        };
        this.samplingFrameId = requestAnimationFrame(s);
      }
      stopSampling() {
        null != this.samplingFrameId &&
          (cancelAnimationFrame(this.samplingFrameId),
          (this.samplingFrameId = null));
      }
      setPlaybackRate(t, s) {
        ((this.media.playbackRate = t),
          (this.shouldCorrectPitch = 'high' === s),
          (this.media.preservesPitch = this.shouldCorrectPitch),
          o.mediaSessionController.updatePositionState(this));
      }
      remove() {
        (o.mediaSessionController.clear(this),
          this.stopSampling(),
          this.analyser && (this.analyser.disconnect(), (this.analyser = null)),
          this.sourceNode &&
            (this.sourceNode.disconnect(), (this.sourceNode = null)),
          (this.samplingEnabled = !1),
          this.media.pause(),
          (this.media.ontimeupdate = null),
          (this.media.onplay = null),
          (this.media.onpause = null),
          (this.media.onseeked = null),
          (this.media.onended = null),
          (this.media.onloadeddata = null),
          (this.media.onerror = null),
          this.media.removeAttribute('src'),
          this.media.load(),
          l.delete(this));
      }
      release() {
        this.remove();
      }
      setActiveForLockScreen(t, s, n) {
        t
          ? o.mediaSessionController.setActivePlayer(this, s, n)
          : o.mediaSessionController.clear(this);
      }
      updateLockScreenMetadata(t) {
        o.mediaSessionController.updateMetadata(this, t);
      }
      clearLockScreenControls() {
        o.mediaSessionController.clear(this);
      }
      _isCrossOrigin() {
        try {
          return new URL(this.media.src).origin !== window.location.origin;
        } catch {
          return !1;
        }
      }
      _createMediaElement() {
        const s = (0, n.getSourceUri)(this.src),
          l = s && n.preloadCache.has(s) ? n.preloadCache.get(s).blobUrl : s,
          h = new Audio(l);
        void 0 !== this.crossOrigin && (h.crossOrigin = this.crossOrigin);
        let u = 0;
        const c = this.interval / 1e3;
        return (
          (h.ontimeupdate = () => {
            const s = h.currentTime;
            (s < u && (u = s),
              s - u >= c &&
                ((u = s),
                this.emit(
                  t.PLAYBACK_STATUS_UPDATE,
                  (0, n.getStatusFromMedia)(h, this.id),
                ),
                o.mediaSessionController.updatePositionState(this)));
          }),
          (h.onplay = () => {
            ((this.isPlaying = !0),
              (u = h.currentTime),
              this.emit(t.PLAYBACK_STATUS_UPDATE, {
                ...(0, n.getStatusFromMedia)(h, this.id),
                playing: this.isPlaying,
              }),
              o.mediaSessionController.updatePlaybackState(this),
              o.mediaSessionController.updatePositionState(this));
          }),
          (h.onpause = () => {
            ((this.isPlaying = !1),
              (u = h.currentTime),
              this.emit(t.PLAYBACK_STATUS_UPDATE, {
                ...(0, n.getStatusFromMedia)(h, this.id),
                playing: this.isPlaying,
              }),
              o.mediaSessionController.updatePlaybackState(this),
              o.mediaSessionController.updatePositionState(this));
          }),
          (h.onseeked = () => {
            ((u = h.currentTime),
              this.emit(
                t.PLAYBACK_STATUS_UPDATE,
                (0, n.getStatusFromMedia)(h, this.id),
              ),
              o.mediaSessionController.updatePositionState(this));
          }),
          (h.onended = () => {
            ((u = 0), o.mediaSessionController.updatePlaybackState(this));
          }),
          (h.onloadeddata = () => {
            ((this.loaded = !0),
              (u = h.currentTime),
              this.emit(t.PLAYBACK_STATUS_UPDATE, {
                ...(0, n.getStatusFromMedia)(h, this.id),
                isLoaded: this.loaded,
              }),
              o.mediaSessionController.updatePositionState(this));
          }),
          (h.onerror = () => {
            ((this.loaded = !1), (this.isPlaying = !1));
            const s = h.error
              ? `Playback error (code ${h.error.code})`
              : 'Unknown playback error';
            this.emit(t.PLAYBACK_STATUS_UPDATE, {
              ...(0, n.getStatusFromMedia)(h, this.id),
              isLoaded: !1,
              playing: !1,
              error: s,
            });
          }),
          h
        );
      }
    }
  },
  753,
  [751, 752, 754, 755],
);
