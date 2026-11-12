// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 292; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.registerWebModule = function (s, l) {
        if (((0, o.ensureNativeModulesAreInstalled)(), !(l = l ?? s.name)))
          throw new Error(
            'Web module implementation is missing a name - it is either not a class or has been minified. Pass the name as a second argument to the `registerWebModule` function.',
          );
        globalThis?.expo?.modules || (globalThis.expo.modules = {});
        if (globalThis.expo.modules[l]) return globalThis.expo.modules[l];
        return (
          (globalThis.expo.modules[l] = new s()),
          globalThis.expo.modules[l]
        );
      }));
    var o = r(d[0]);
  },
  292,
  [282],
);
