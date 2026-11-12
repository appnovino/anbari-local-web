// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 289; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'UnavailabilityError', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = r(d[0]);
    r(d[1]);
    class o extends t.CodedError {
      constructor(t, o) {
        super(
          'ERR_UNAVAILABLE',
          `The method or property ${t}.${o} is not available on web, are you sure you've linked all the native dependencies properly?`,
        );
      }
    }
  },
  289,
  [290, 286],
);
