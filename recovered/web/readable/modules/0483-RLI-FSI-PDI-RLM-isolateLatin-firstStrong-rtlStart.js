// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 483; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'RLI', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'FSI', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(e, 'PDI', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'RLM', {
        enumerable: !0,
        get: function () {
          return F;
        },
      }),
      (e.isolateLatin = function (F) {
        return F && t.test(F) && /[A-Za-z]/.test(F) && !n.test(F)
          ? o + F.replace(u, (t) => f + t + c) + c
          : F;
      }),
      (e.firstStrong = s),
      (e.rtlStart = function (u) {
        return u && 'ltr' === s(u) && t.test(u) && !n.test(u) ? F + u : u;
      }));
    const t =
        /[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]/,
      u = /[A-Za-z][A-Za-z0-9 .+_\-]*[A-Za-z0-9]|[A-Za-z]/g,
      n = /[\u200E\u200F\u202A-\u202E\u2066-\u2069]/,
      o = '\u2067',
      f = '\u2068',
      c = '\u2069',
      F = '\u200f';
    function s(u) {
      for (const n of u) {
        if (t.test(n)) return 'rtl';
        if (/[A-Za-z]/.test(n)) return 'ltr';
      }
      return '';
    }
  },
  483,
  [],
);
