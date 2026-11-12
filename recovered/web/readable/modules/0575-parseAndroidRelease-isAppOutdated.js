// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 575; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseAndroidRelease = function (n) {
        const o = n;
        return o &&
          'object' == typeof o &&
          !0 === o.available &&
          'string' == typeof o.version &&
          Number.isInteger(o.versionCode) &&
          o.versionCode > 0
          ? { available: !0, version: o.version, versionCode: o.versionCode }
          : null;
      }),
      (e.isAppOutdated = function (n, o) {
        const t =
          'number' == typeof n
            ? n
            : 'string' == typeof n && n.trim()
              ? Number(n)
              : NaN;
        return !!o && Number.isInteger(t) && t > 0 && o.versionCode > t;
      }));
  },
  575,
  [],
);
