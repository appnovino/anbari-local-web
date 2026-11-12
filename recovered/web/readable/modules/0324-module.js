// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 324; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var l = r(d[0]);
    var n = () =>
      'undefined' == typeof window
        ? { bundleLoadedFromServer: !0, fullBundleUrl: '', url: '' }
        : {
            bundleLoadedFromServer: !0,
            get fullBundleUrl() {
              return (0, l.getFullBundlerUrl)();
            },
            url: location.origin + location.pathname,
          };
  },
  324,
  [325],
);
