// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 291; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    function o(o) {
      return 'object' == typeof globalThis.ExpoDomWebView &&
        null != globalThis?.expo?.modules
        ? (globalThis.expo?.modules?.[o] ?? null)
        : null;
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.requireNativeModule = function (n) {
        const l = o(n);
        if (null != l) return l;
        if ('undefined' == typeof window) return {};
        throw new Error(`Cannot find native module '${n}'`);
      }),
      (e.requireOptionalNativeModule = o));
  },
  291,
  [],
);
