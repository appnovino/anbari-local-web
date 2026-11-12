// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 389; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.fetchText = async function (n) {
        if (!n) return null;
        return (
          n.startsWith('data:image/svg+xml;utf8'),
          n.startsWith('data:image/svg+xml;base64') ? t(n) : s(n)
        );
      }),
      r(d[0]));
    const t = (t) => {
      const s = decodeURIComponent(t)
        .split(';')[1]
        .split(',')
        .slice(1)
        .join(',');
      return atob(s);
    };
    async function s(t) {
      const s = await fetch(t);
      if (s.ok || (0 === s.status && t.startsWith('file://')))
        return await s.text();
      throw new Error(`Fetching ${t} failed with status ${s.status}`);
    }
  },
  389,
  [94],
);
