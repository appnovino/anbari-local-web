// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1235; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    function n() {
      return 'undefined' != typeof navigator;
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.hasNavigator = n),
      (e.canEnumerateDevices = function () {
        return !!(
          n() &&
          navigator.mediaDevices &&
          navigator.mediaDevices.enumerateDevices
        );
      }));
  },
  1235,
  [],
);
