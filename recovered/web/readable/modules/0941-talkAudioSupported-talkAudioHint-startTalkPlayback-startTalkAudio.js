// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 941; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function t() {
      return (
        'undefined' != typeof window &&
        !!window.isSecureContext &&
        !!navigator.mediaDevices?.getUserMedia &&
        'undefined' != typeof AudioWorkletNode
      );
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.talkAudioSupported = t),
      Object.defineProperty(_e, 'talkAudioHint', {
        enumerable: !0,
        get: function () {
          return e;
        },
      }),
      (_e.startTalkPlayback = async function () {
        const t = new (window.AudioContext || window.webkitAudioContext)();
        try {
          await t.resume();
        } catch {}
        let e = !1,
          n = 0;
        const o = new Set(),
          c = () => {
            for (const t of o)
              try {
                t.stop();
              } catch {}
            (o.clear(), (n = 0));
          };
        return {
          play(c, i) {
            if (e) return 0;
            const s = atob(c),
              u = Math.floor(s.length / 2);
            if (!u) return 0;
            const l = t.createBuffer(1, u, i),
              f = l.getChannelData(0);
            for (let t = 0; t < u; t++) {
              let e = s.charCodeAt(2 * t) | (s.charCodeAt(2 * t + 1) << 8);
              (e >= 32768 && (e -= 65536), (f[t] = e / 32768));
            }
            const h = t.createBufferSource();
            ((h.buffer = l), h.connect(t.destination));
            const w = Math.max(t.currentTime + 0.03, n);
            return (
              h.start(w),
              (n = w + l.duration),
              o.add(h),
              (h.onended = () => o.delete(h)),
              l.duration
            );
          },
          flush: c,
          stop() {
            e || ((e = !0), c(), t.close().catch(() => {}));
          },
        };
      }),
      (_e.startTalkAudio = async function ({
        onPcm: e,
        onLevel: n,
        onError: o,
      }) {
        if (!t()) throw Error('unsupported');
        const c = await navigator.mediaDevices.getUserMedia({
            audio: {
              echoCancellation: !0,
              noiseSuppression: !0,
              autoGainControl: !0,
              channelCount: 1,
            },
          }),
          i = new (window.AudioContext || window.webkitAudioContext)();
        let s = !1,
          u = 0;
        const l = new Set();
        try {
          (await i.resume(), await i.audioWorklet.addModule('/pcm-worklet.js'));
        } catch (t) {
          throw (
            c.getTracks().forEach((t) => t.stop()),
            i.close().catch(() => {}),
            t
          );
        }
        const f = i.createMediaStreamSource(c),
          h = new AudioWorkletNode(i, 'anbar-pcm', {
            numberOfInputs: 1,
            numberOfOutputs: 1,
            outputChannelCount: [1],
          }),
          w = i.createGain();
        ((w.gain.value = 0),
          (h.port.onmessage = (t) => {
            if (s) return;
            const o = t.data;
            if ((e(o), n)) {
              const t = new Int16Array(o);
              let e = 0;
              for (let n = 0; n < t.length; n += 4) e += (t[n] / 32768) ** 2;
              n(Math.min(1, 8 * Math.sqrt(e / Math.max(1, t.length / 4))));
            }
          }),
          f.connect(h),
          h.connect(w),
          w.connect(i.destination),
          c.getTracks().forEach((t) =>
            t.addEventListener('ended', () => {
              s || o();
            }),
          ));
        const p = () => {
          for (const t of l)
            try {
              t.stop();
            } catch {}
          (l.clear(), (u = 0));
        };
        return {
          play(t, e) {
            if (s) return 0;
            const n = atob(t),
              o = Math.floor(n.length / 2);
            if (!o) return 0;
            const c = i.createBuffer(1, o, e),
              f = c.getChannelData(0);
            for (let t = 0; t < o; t++) {
              let e = n.charCodeAt(2 * t) | (n.charCodeAt(2 * t + 1) << 8);
              (e >= 32768 && (e -= 65536), (f[t] = e / 32768));
            }
            const h = i.createBufferSource();
            ((h.buffer = c), h.connect(i.destination));
            const w = Math.max(i.currentTime + 0.03, u);
            return (
              h.start(w),
              (u = w + c.duration),
              l.add(h),
              (h.onended = () => l.delete(h)),
              c.duration
            );
          },
          flush: p,
          stop() {
            if (!s) {
              ((s = !0), p(), (h.port.onmessage = null));
              try {
                (f.disconnect(), h.disconnect(), w.disconnect());
              } catch {}
              (c.getTracks().forEach((t) => t.stop()),
                i.close().catch(() => {}));
            }
          },
        };
      }));
    const e = (0, r(d[0]).L)(
      '\u062f\u0631 \u0645\u0631\u0648\u0631\u06af\u0631\u060c \u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0641\u0642\u0637 \u0631\u0648\u06cc https \u06cc\u0627 localhost \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f.',
    );
  },
  941,
  [311],
);
