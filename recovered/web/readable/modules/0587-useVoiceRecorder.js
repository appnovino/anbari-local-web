// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 587; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useVoiceRecorder = function () {
        const [c, s] = (0, t.useState)(0),
          [u, l] = (0, t.useState)(''),
          v = (0, t.useRef)(null);
        function f() {
          (v.current &&
            (clearInterval(v.current.timer),
            v.current.context.close().catch(() => {}),
            (v.current = null)),
            s(0));
        }
        const w = (0, t.useRef)({ chunks: [], started: 0, generation: 0 });
        function h() {
          f();
          const t = w.current;
          (t.generation++,
            t.live?.cancel(),
            (t.live = void 0),
            l(''),
            t.unfeed?.(),
            (t.unfeed = void 0),
            t.server?.cancel(),
            (t.server = void 0),
            t.recorder && 'inactive' !== t.recorder.state && t.recorder.stop(),
            t.stream?.getTracks().forEach((t) => t.stop()),
            (t.stream = void 0),
            (t.recorder = void 0),
            (t.chunks = []));
        }
        return (
          (0, t.useEffect)(() => h, []),
          {
            start: async function () {
              if ((h(), !globalThis.isSecureContext))
                throw new Error('https_required');
              if (
                !navigator.mediaDevices?.getUserMedia ||
                'undefined' == typeof MediaRecorder
              )
                throw new Error('unsupported');
              const t = w.current.generation,
                n = await navigator.mediaDevices.getUserMedia({
                  audio: { echoCancellation: !0, noiseSuppression: !0 },
                  video: !1,
                });
              if (t !== w.current.generation)
                throw (
                  n.getTracks().forEach((t) => t.stop()),
                  new Error('cancelled')
                );
              const c = [
                'audio/mp4',
                'audio/webm;codecs=opus',
                'audio/webm',
              ].find((t) => MediaRecorder.isTypeSupported(t));
              try {
                const u = new MediaRecorder(n, c ? { mimeType: c } : void 0);
                ((w.current = {
                  stream: n,
                  recorder: u,
                  chunks: [],
                  started: Date.now(),
                  generation: t,
                }),
                  (u.ondataavailable = (n) => {
                    t === w.current.generation &&
                      n.data.size &&
                      w.current.chunks.push(n.data);
                  }),
                  u.start(250));
                const f = (0, o.listenOnServer)((n) => {
                  t === w.current.generation && n && l(n);
                });
                if (
                  (f &&
                    ((w.current.server = f),
                    (w.current.unfeed = (0, o.feedFromMedia)(n, f))),
                  t !== w.current.generation)
                )
                  throw new Error('cancelled');
                try {
                  const t = new AudioContext();
                  t.resume();
                  const o = t.createAnalyser();
                  ((o.fftSize = 256), t.createMediaStreamSource(n).connect(o));
                  const c = new Float32Array(o.fftSize),
                    u = setInterval(() => {
                      o.getFloatTimeDomainData(c);
                      const t = Math.sqrt(
                        c.reduce((t, n) => t + n * n, 0) / c.length,
                      );
                      s(Math.min(1, 8 * t));
                    }, 80);
                  v.current = { context: t, timer: u };
                } catch {}
              } catch (t) {
                throw (n.getTracks().forEach((t) => t.stop()), t);
              }
            },
            stop: async function () {
              const t = w.current;
              if (
                (t.live?.finish(),
                (t.live = void 0),
                f(),
                !t.recorder || 'inactive' === t.recorder.state)
              )
                throw (
                  t.unfeed?.(),
                  (t.unfeed = void 0),
                  t.server?.cancel(),
                  (t.server = void 0),
                  t.stream?.getTracks().forEach((t) => t.stop()),
                  (t.stream = void 0),
                  (t.recorder = void 0),
                  (t.chunks = []),
                  l(''),
                  new Error('invalid_audio')
                );
              const n = t.recorder,
                o = (Date.now() - t.started) / 1e3;
              (t.unfeed?.(), (t.unfeed = void 0));
              const c = t.server,
                s = t.server
                  ? t.server.finish().catch(() => '')
                  : Promise.resolve('');
              ((t.server = void 0),
                await new Promise((t, o) => {
                  ((n.onstop = () => t()),
                    (n.onerror = () => o(new Error('recording_failed'))),
                    n.stop());
                }).finally(() =>
                  t.stream?.getTracks().forEach((t) => t.stop()),
                ));
              const u = new Blob(t.chunks, { type: n.mimeType });
              if (u.size > 6291456) throw new Error('too_large');
              if (o < 0.5 || !u.size) throw new Error('invalid_audio');
              const v = await new Promise((t, n) => {
                const o = new FileReader();
                ((o.onload = () => t(String(o.result).split(',')[1])),
                  (o.onerror = () => n(new Error('recording_failed'))),
                  o.readAsDataURL(u));
              });
              ((t.chunks = []), (t.stream = void 0), (t.recorder = void 0));
              const h = await s,
                p = !h && !!c && !c.answered?.(),
                E = !h && !!c?.answered?.();
              return {
                audio: v,
                mimeType: u.type.split(';')[0],
                duration: o,
                ...(h ? { transcript: h } : {}),
                ...(p ? { serverMissed: !0 } : {}),
                ...(E ? { serverAnswered: !0 } : {}),
              };
            },
            cancel: h,
            level: c,
            live: u,
            maxSeconds: n.MAX_VOICE_SECONDS,
            keepsInBackground: !0,
          }
        );
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]);
  },
  587,
  [2, 465, 588],
);
