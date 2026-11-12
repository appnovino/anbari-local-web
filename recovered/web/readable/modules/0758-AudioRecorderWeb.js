// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 758; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'AudioRecorderWeb', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var e = r(d[0]),
      t = r(d[1]),
      s = r(d[2]);
    class n extends globalThis.expo.SharedObject {
      constructor(e) {
        (super(), (this.options = e));
      }
      async setup() {
        this.mediaRecorder = await this.createMediaRecorder(this.options);
      }
      id = (0, t.nextId)();
      currentTime = 0;
      uri = null;
      mediaRecorder = null;
      mediaRecorderUptimeOfLastStartResume = 0;
      mediaRecorderIsRecording = !1;
      timeoutIds = [];
      cachedInputs = [];
      selectedDeviceId = null;
      stream = null;
      handleDeviceChange = null;
      analyser = null;
      analyserBuffer = null;
      analyserSource = null;
      meteringEnabled = !1;
      get isRecording() {
        return 'recording' === this.mediaRecorder?.state;
      }
      record(e) {
        if (null === this.mediaRecorder)
          throw new Error(
            'Cannot start an audio recording without initializing a MediaRecorder. Run prepareToRecordAsync() before attempting to start an audio recording.',
          );
        this.clearTimeouts();
        const { forDuration: t } = e || {};
        (this.startActualRecording(),
          void 0 !== t &&
            this.timeoutIds.push(
              setTimeout(() => {
                this.stop();
              }, 1e3 * t),
            ));
      }
      startActualRecording() {
        'paused' === this.mediaRecorder?.state
          ? this.mediaRecorder.resume()
          : this.mediaRecorder?.start();
      }
      getAvailableInputs() {
        return this.cachedInputs;
      }
      getCurrentInput() {
        const e =
            this.selectedDeviceId ??
            this.stream?.getAudioTracks()[0]?.getSettings().deviceId,
          t = this.cachedInputs.find((t) => t.uid === e);
        return t
          ? Promise.resolve(t)
          : Promise.resolve(
              this.cachedInputs[0] ?? {
                type: 'Default',
                name: 'Default',
                uid: 'Default',
              },
            );
      }
      async prepareToRecordAsync() {
        return this.setup();
      }
      getStatus() {
        const e = {
          canRecord:
            'recording' === this.mediaRecorder?.state ||
            'inactive' === this.mediaRecorder?.state,
          isRecording: 'recording' === this.mediaRecorder?.state,
          durationMillis: this.getAudioRecorderDurationMillis(),
          mediaServicesDidReset: !1,
          url: this.uri,
        };
        return (
          this.meteringEnabled &&
            this.mediaRecorderIsRecording &&
            (e.metering = this.getMeteringLevel()),
          e
        );
      }
      pause() {
        if (null === this.mediaRecorder)
          throw new Error(
            'Cannot start an audio recording without initializing a MediaRecorder. Run prepareToRecordAsync() before attempting to start an audio recording.',
          );
        this.mediaRecorder?.pause();
      }
      recordForDuration(e) {
        this.record({ forDuration: e });
      }
      setInput(e) {
        if (!this.cachedInputs.some((t) => t.uid === e))
          throw new Error(`No audio input device found for uid: ${e}`);
        this.selectedDeviceId = e;
      }
      startRecordingAtTime(e) {
        this.record({ atTime: e });
      }
      async stop() {
        if (null === this.mediaRecorder)
          throw new Error(
            'Cannot start an audio recording without initializing a MediaRecorder. Run prepareToRecordAsync() before attempting to start an audio recording.',
          );
        const t = new Promise((e) =>
          this.mediaRecorder?.addEventListener('dataavailable', (t) =>
            e(t.data),
          ),
        );
        (this.mediaRecorder?.stop(), (this.mediaRecorder = null));
        const s = await t,
          n = URL.createObjectURL(s);
        ((this.uri = n),
          this.emit(e.RECORDING_STATUS_UPDATE, {
            id: this.id,
            isFinished: !0,
            hasError: !1,
            error: null,
            url: n,
          }));
      }
      clearTimeouts() {
        this.timeoutIds.forEach((e) => clearTimeout(e));
      }
      async createMediaRecorder(e) {
        if ('undefined' != typeof navigator && !navigator.mediaDevices)
          throw new Error('No media devices available');
        ((this.mediaRecorderUptimeOfLastStartResume = 0),
          (this.currentTime = 0));
        const n = !this.selectedDeviceId || {
            deviceId: { exact: this.selectedDeviceId },
          },
          o = await (0, t.getUserMedia)({ audio: n });
        if (
          ((this.stream = o),
          await this.updateCachedInputs(),
          (this.handleDeviceChange = () => {
            this.updateCachedInputs();
          }),
          navigator.mediaDevices.addEventListener(
            'devicechange',
            this.handleDeviceChange,
          ),
          e.isMeteringEnabled)
        ) {
          const e = (0, t.getAudioContext)();
          ('suspended' === e.state && e.resume(),
            (this.analyserSource = e.createMediaStreamSource(o)),
            (this.analyser = e.createAnalyser()),
            (this.analyser.fftSize = 2048),
            this.analyserSource.connect(this.analyser),
            (this.analyserBuffer = new Float32Array(
              this.analyser.frequencyBinCount,
            )),
            (this.meteringEnabled = !0));
        }
        const c = s.RecordingPresets.HIGH_QUALITY.web,
          u = {},
          h = e.mimeType ?? c.mimeType;
        (h && MediaRecorder.isTypeSupported(h) && (u.mimeType = h),
          e.bitsPerSecond
            ? (u.bitsPerSecond = e.bitsPerSecond)
            : e.bitRate
              ? (u.audioBitsPerSecond = e.bitRate)
              : (u.bitsPerSecond = c.bitsPerSecond));
        const l = new MediaRecorder(o, u);
        return (
          l.addEventListener('pause', () => {
            ((this.currentTime = this.getAudioRecorderDurationMillis()),
              (this.mediaRecorderIsRecording = !1));
          }),
          l.addEventListener('resume', () => {
            ((this.mediaRecorderUptimeOfLastStartResume = Date.now()),
              (this.mediaRecorderIsRecording = !0));
          }),
          l.addEventListener('start', () => {
            ((this.mediaRecorderUptimeOfLastStartResume = Date.now()),
              (this.currentTime = 0),
              (this.mediaRecorderIsRecording = !0));
          }),
          l?.addEventListener('stop', () => {
            ((this.currentTime = 0),
              (this.mediaRecorderIsRecording = !1),
              (this.stream = null),
              this.analyserSource &&
                (this.analyserSource.disconnect(),
                (this.analyserSource = null)),
              this.analyser &&
                (this.analyser.disconnect(),
                (this.analyser = null),
                (this.analyserBuffer = null)),
              this.handleDeviceChange &&
                (navigator.mediaDevices?.removeEventListener(
                  'devicechange',
                  this.handleDeviceChange,
                ),
                (this.handleDeviceChange = null)),
              o.getTracks().forEach((e) => e.stop()));
          }),
          l
        );
      }
      async updateCachedInputs() {
        const e = await navigator.mediaDevices.enumerateDevices();
        this.cachedInputs = e
          .filter((e) => 'audioinput' === e.kind)
          .map((e) => ({
            uid: e.deviceId,
            name: e.label || 'Unknown Device',
            type: 'default' === e.deviceId ? 'Default' : 'Unknown',
          }));
      }
      getMeteringLevel() {
        if (!this.analyser || !this.analyserBuffer) return -160;
        this.analyser.getFloatTimeDomainData(this.analyserBuffer);
        let e = 0;
        for (const t of this.analyserBuffer) e += t * t;
        const t = Math.sqrt(e / this.analyserBuffer.length);
        return 0 === t ? -160 : 20 * Math.log10(t);
      }
      getAudioRecorderDurationMillis() {
        let e = this.currentTime;
        return (
          this.mediaRecorderIsRecording &&
            this.mediaRecorderUptimeOfLastStartResume > 0 &&
            (e += Date.now() - this.mediaRecorderUptimeOfLastStartResume),
          e
        );
      }
    }
  },
  758,
  [751, 754, 759],
);
