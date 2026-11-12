// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 583; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.silentWav = function () {
        const t = new Uint8Array(8044),
          n = new DataView(t.buffer),
          i = (n, i) => {
            for (let s = 0; s < i.length; s++) t[n + s] = i.charCodeAt(s);
          };
        (i(0, 'RIFF'),
          n.setUint32(4, 8036, !0),
          i(8, 'WAVE'),
          i(12, 'fmt '),
          n.setUint32(16, 16, !0),
          n.setUint16(20, 1, !0),
          n.setUint16(22, 1, !0),
          n.setUint32(24, 8e3, !0),
          n.setUint32(28, 8e3, !0),
          n.setUint16(32, 1, !0),
          n.setUint16(34, 8, !0),
          i(36, 'data'),
          n.setUint32(40, 8e3, !0),
          t.fill(128, 44));
        let s = '';
        for (let n = 0; n < t.length; n += 4096)
          s += String.fromCharCode(...t.subarray(n, n + 4096));
        return { audio: btoa(s), mimeType: 'audio/wav', duration: 1 };
      }));
  },
  583,
  [],
);
