// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 946; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'onDeviceVoiceProgress', {
        enumerable: !0,
        get: function () {
          return t.onDeviceVoiceProgress;
        },
      }),
      Object.defineProperty(e, 'deviceVoiceProgress', {
        enumerable: !0,
        get: function () {
          return t.deviceVoiceProgress;
        },
      }),
      (e.voiceListenAvailable = function () {
        return !1;
      }),
      Object.defineProperty(e, 'prepareVoiceListen', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.hearOnce = async function (o) {
        if (!globalThis.isSecureContext) throw Error('https_required');
        if (!(await (0, t.prepareDeviceVoice)()))
          throw Error('device_voice_download');
        let c;
        try {
          c = await navigator.mediaDevices.getUserMedia({
            audio: { echoCancellation: !0, noiseSuppression: !0 },
            video: !1,
          });
        } catch (t) {
          throw Error(
            t instanceof Error &&
              ('NotAllowedError' === t.name || 'SecurityError' === t.name)
              ? 'permission'
              : 'recording_failed',
          );
        }
        const s = () => c.getTracks().forEach((t) => t.stop());
        let l = (0, n.endpointer)({}, Date.now());
        const u = (0, t.listenOnDevice)(c, (t) => {
          (l.text(t, Date.now()), o(t));
        });
        if (!u) throw (s(), Error('device_voice_download'));
        (await u.started, (l = (0, n.endpointer)({}, Date.now())));
        let f = () => {},
          h = !1;
        const p = new Promise((t) => {
            f = t;
          }),
          v = setInterval(() => {
            l.done(Date.now()) && w();
          }, 150);
        async function w() {
          if (h) return;
          ((h = !0), clearInterval(v));
          let t = '';
          try {
            t = await u.finish();
          } catch {}
          (s(), f((t || l.heard()).trim()));
        }
        return {
          done: p,
          cancel() {
            h || ((h = !0), clearInterval(v), u.cancel(), s(), f(''));
          },
        };
      }),
      (e.speakAvailable = async function () {
        const t = c();
        return (
          !!t &&
          (!!s() ||
            (await new Promise((n) => {
              const o = setTimeout(n, 800);
              try {
                t.addEventListener(
                  'voiceschanged',
                  () => {
                    (clearTimeout(o), n());
                  },
                  { once: !0 },
                );
              } catch {}
            }),
            !!s()))
        );
      }),
      (e.primeSpeech = function () {
        try {
          const t = c();
          if (!t) return;
          const n = new SpeechSynthesisUtterance(' ');
          ((n.volume = 0), t.speak(n));
        } catch {}
      }),
      (e.speak = function (t) {
        const n = c(),
          o = s();
        return n && o && t.trim()
          ? new Promise((c) => {
              let s,
                l = !1;
              const u = () => {
                l || ((l = !0), clearTimeout(s), c());
              };
              try {
                n.cancel();
                const c = new SpeechSynthesisUtterance(t);
                ((c.voice = o),
                  (c.lang = o.lang || 'fa-IR'),
                  (c.rate = 1),
                  (c.onend = u),
                  (c.onerror = u),
                  (s = setTimeout(u, 5e3 + 160 * t.length)),
                  n.speak(c));
              } catch {
                u();
              }
            })
          : Promise.resolve();
      }),
      (e.stopSpeaking = function () {
        try {
          c()?.cancel();
        } catch {}
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const o = () => (0, t.prepareDeviceVoice)();
    const c = () => {
      try {
        return 'undefined' != typeof window && 'speechSynthesis' in window
          ? window.speechSynthesis
          : null;
      } catch {
        return null;
      }
    };
    function s() {
      try {
        const t = (c()?.getVoices() || []).filter(
          (t) => /^fa([-_]|$)/i.test(t.lang) || /persian|farsi/i.test(t.name),
        );
        return t.find((t) => t.localService) || t[0] || null;
      } catch {
        return null;
      }
    }
    try {
      c()?.getVoices();
    } catch {}
  },
  946,
  [549, 945],
);
