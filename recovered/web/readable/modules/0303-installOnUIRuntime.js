// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 303; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.installOnUIRuntime = function (t) {
        const o = globalThis?.expo?.installOnUIRuntime;
        if (!o)
          throw Error(
            "Native method to install Expo Modules on the worklets UI runtime wasn't found in `expo-modules-core`.",
          );
        o(t);
      }));
  },
  303,
  [],
);
