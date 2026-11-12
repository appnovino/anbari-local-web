// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 420; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const o = () =>
      void 0 !== globalThis.crypto
        ? globalThis.crypto
        : 'undefined' != typeof window
          ? (window.crypto ?? window.msCrypto)
          : crypto;
    var s = {
      async digestStringAsync(s, u, y) {
        const l = o();
        if (!l.subtle)
          throw new t.CodedError(
            'ERR_CRYPTO_UNAVAILABLE',
            'Access to the WebCrypto API is restricted to secure origins (localhost/https).',
          );
        const p = new TextEncoder().encode(u),
          w = await l.subtle.digest(s, p);
        if (y.encoding === n.CryptoEncoding.HEX) return c(w);
        if (y.encoding === n.CryptoEncoding.BASE64)
          return btoa(String.fromCharCode(...new Uint8Array(w)));
        throw new t.CodedError(
          'ERR_CRYPTO_DIGEST',
          'Invalid encoding type provided.',
        );
      },
      getRandomBytes(t) {
        const n = new Uint8Array(t);
        return o().getRandomValues(n);
      },
      async getRandomBytesAsync(t) {
        const n = new Uint8Array(t);
        return o().getRandomValues(n);
      },
      getRandomValues: (t) => o().getRandomValues(t),
      randomUUID: () => o().randomUUID(),
      digestAsync: (t, n) => o().subtle.digest(t, n),
    };
    function c(t) {
      return [...new Uint8Array(t)]
        .map((t) => t.toString(16).padStart(2, '0'))
        .join('');
    }
  },
  420,
  [266, 419],
);
