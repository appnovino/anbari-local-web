// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 329; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.fetchAsync = async function (t) {
        const s = await fetch(t, {
          method: 'GET',
          headers: { 'expo-platform': 'web' },
        });
        return { body: await s.text(), status: s.status, headers: s.headers };
      }));
  },
  329,
  [],
);
