// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 573; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'BUNDLE', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'CHECK_TIMEOUT_MS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.latestBundle = async function (o = fetch, c = n) {
        const s = new AbortController(),
          u = setTimeout(() => s.abort(), c);
        try {
          const n = await o('/?update-check=' + Date.now(), {
            cache: 'no-store',
            credentials: 'omit',
            signal: s.signal,
          });
          return (n.ok && t.exec(await n.text())?.[0]) || '';
        } finally {
          clearTimeout(u);
        }
      }));
    const t = /\/_expo\/static\/js\/web\/index-[^"'\s>]+\.js/,
      n = 15e3;
  },
  573,
  [],
);
