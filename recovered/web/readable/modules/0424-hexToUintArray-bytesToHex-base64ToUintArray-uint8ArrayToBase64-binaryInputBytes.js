// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 424; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    function t(t) {
      const n = atob(t),
        o = n.length,
        i = new Uint8Array(o);
      for (let t = 0; t < o; t++) i[t] = n.charCodeAt(t);
      return i;
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.hexToUintArray = function (t) {
        const n = t.length / 2,
          o = new Uint8Array(n);
        for (let n = 0; n < t.length; n += 2)
          o[n >>> 1] = parseInt(t.substring(n, n + 2), 16);
        return o;
      }),
      (e.bytesToHex = function (t) {
        const n = [];
        for (const o of t) {
          const t = o < 0 ? o + 256 : o;
          (n.push((t >>> 4).toString(16)), n.push((15 & t).toString(16)));
        }
        return n.join('');
      }),
      (e.base64ToUintArray = t),
      (e.uint8ArrayToBase64 = function (t) {
        let n = '';
        for (const o of t) n += String.fromCharCode(o);
        return btoa(n);
      }),
      (e.binaryInputBytes = function (n) {
        if (n instanceof Uint8Array) return n;
        if (n instanceof ArrayBuffer) return new Uint8Array(n);
        if (ArrayBuffer.isView(n))
          return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
        if ('string' == typeof n) return t(n);
        throw new Error('Cannot parse serializable input as ArrayBuffer');
      }));
  },
  424,
  [],
);
