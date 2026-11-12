// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 830; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.scanBeepOpen = function () {
        (c(),
          t ||
            'undefined' == typeof document ||
            ((t = !0),
            document.addEventListener('pointerdown', c, {
              capture: !0,
              passive: !0,
            })));
        return () => {};
      }),
      (e.scanBeep = function () {
        const t = n;
        if (!t || 'running' !== t.state) return;
        try {
          const n = t.createOscillator(),
            c = t.createGain(),
            o = t.currentTime;
          ((n.type = 'sine'),
            (n.frequency.value = 1760),
            c.gain.setValueAtTime(0, o),
            c.gain.linearRampToValueAtTime(0.18, o + 0.008),
            c.gain.setValueAtTime(0.18, o + 0.075),
            c.gain.linearRampToValueAtTime(0, o + 0.09),
            n.connect(c),
            c.connect(t.destination),
            n.start(o),
            n.stop(o + 0.1));
        } catch {}
      }));
    let n = null,
      t = !1;
    function c() {
      try {
        if ('undefined' == typeof window) return;
        const t = window.AudioContext || window.webkitAudioContext;
        if (!t) return;
        ((n ??= new t()),
          'suspended' === n.state && n.resume().catch(() => {}));
      } catch {}
    }
  },
  830,
  [],
);
