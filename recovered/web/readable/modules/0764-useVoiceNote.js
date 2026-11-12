// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 764; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useVoiceNote = function () {
        const o = (0, e.useRef)({ chunks: [], started: 0 }),
          [c, n] = (0, e.useState)(!1),
          [s, u] = (0, e.useState)(0),
          p = (0, e.useRef)(0);
        function l() {
          const e = o.current;
          (e.meter &&
            (clearInterval(e.meter.timer),
            e.meter.context.close().catch(() => {}),
            (e.meter = void 0)),
            e.stream?.getTracks().forEach((e) => e.stop()),
            (e.stream = void 0),
            u(0));
        }
        function f() {
          p.current++;
          const e = o.current;
          try {
            e.recorder && 'inactive' !== e.recorder.state && e.recorder.stop();
          } catch {}
          ((e.recorder = void 0), (e.chunks = []), l(), n(!1));
        }
        return (
          (0, e.useEffect)(() => f, []),
          {
            start: async function () {
              if (
                (f(),
                !globalThis.isSecureContext ||
                  !navigator.mediaDevices?.getUserMedia ||
                  'undefined' == typeof MediaRecorder)
              )
                throw Error('support_record_unsupported');
              const e = p.current;
              let t;
              try {
                t = await navigator.mediaDevices.getUserMedia({
                  audio: { echoCancellation: !0, noiseSuppression: !0 },
                  video: !1,
                });
              } catch (e) {
                throw Error(
                  e instanceof DOMException && 'NotAllowedError' === e.name
                    ? 'support_mic_denied'
                    : 'support_record_failed',
                );
              }
              if (e !== p.current)
                throw (
                  t.getTracks().forEach((e) => e.stop()),
                  Error('cancelled')
                );
              const c = [
                'audio/webm;codecs=opus',
                'audio/mp4',
                'audio/webm',
                'audio/ogg;codecs=opus',
              ].find((e) => MediaRecorder.isTypeSupported(e));
              let s;
              try {
                ((s = new MediaRecorder(t, {
                  ...(c ? { mimeType: c } : {}),
                  audioBitsPerSecond: 32e3,
                })),
                  (o.current = {
                    recorder: s,
                    stream: t,
                    chunks: [],
                    started: Date.now(),
                  }),
                  (s.ondataavailable = (e) => {
                    e.data.size && o.current.chunks.push(e.data);
                  }),
                  s.start(250));
              } catch {
                throw (
                  t.getTracks().forEach((e) => e.stop()),
                  (o.current = { chunks: [], started: 0 }),
                  Error('support_record_failed')
                );
              }
              n(!0);
              try {
                const e = new AudioContext(),
                  c = e.createAnalyser();
                ((c.fftSize = 256), e.createMediaStreamSource(t).connect(c));
                const n = new Float32Array(c.fftSize);
                o.current.meter = {
                  context: e,
                  timer: setInterval(() => {
                    (c.getFloatTimeDomainData(n),
                      u(
                        Math.min(
                          1,
                          8 *
                            Math.sqrt(
                              n.reduce((e, t) => e + t * t, 0) / n.length,
                            ),
                        ),
                      ));
                  }, 120),
                };
              } catch {}
            },
            stop: async function () {
              const e = o.current,
                c = e.recorder;
              if (!c || 'inactive' === c.state)
                throw Error('support_voice_short');
              const s = Date.now() - e.started;
              (await new Promise((e, t) => {
                ((c.onstop = () => e()),
                  (c.onerror = () => t(Error('support_record_failed'))),
                  c.stop());
              }).finally(l),
                n(!1));
              const u = new Blob(e.chunks, {
                type: c.mimeType || 'audio/webm',
              });
              if (((e.chunks = []), (e.recorder = void 0), s < 800 || !u.size))
                throw Error('support_voice_short');
              if (u.size > t.FILE_LIMITS.voice)
                throw Error('support_file_too_large');
              const p = await new Promise((e, t) => {
                  const o = new FileReader();
                  ((o.onload = () => e(String(o.result))),
                    (o.onerror = () => t(Error('support_record_failed'))),
                    o.readAsDataURL(u));
                }),
                f = u.type.split(';')[0];
              return {
                dataUrl: p,
                name:
                  'voice.' +
                  ('audio/mp4' === f
                    ? 'm4a'
                    : 'audio/ogg' === f
                      ? 'ogg'
                      : 'webm'),
                kind: 'voice',
                size: u.size,
                durationMs: Math.min(s, t.FILE_LIMITS.voiceMs),
                previewUri: URL.createObjectURL(u),
              };
            },
            cancel: f,
            recording: c,
            level: s,
          }
        );
      }));
    var e = r(d[0]),
      t = r(d[1]);
  },
  764,
  [2, 746],
);
