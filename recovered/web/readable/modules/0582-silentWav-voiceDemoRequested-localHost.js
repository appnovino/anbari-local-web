// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 582; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'silentWav', {
        enumerable: !0,
        get: function () {
          return t.silentWav;
        },
      }),
      (e.voiceDemoRequested = function () {
        if ('undefined' == typeof window) return !1;
        try {
          return '#voice-demo' === window.location.hash;
        } catch {
          return !1;
        }
      }),
      (e.localHost = function () {
        try {
          const t = window.location.hostname;
          return (
            'localhost' === t ||
            '127.0.0.1' === t ||
            /^192\.168\.\d+\.\d+$/.test(t)
          );
        } catch {
          return !1;
        }
      }),
      r(d[0]));
    var t = r(d[1]);
  },
  582,
  [94, 583],
);
