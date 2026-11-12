// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1307; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var n = r(d[0]),
      o = {
        isAvailableAsync: async () =>
          'undefined' != typeof navigator && !!navigator.share,
        async shareAsync(o, s = {}) {
          if (!navigator.share)
            throw new n.UnavailabilityError('navigator', 'share');
          await navigator.share({ ...s, url: o });
        },
        getSharedPayloads() {
          throw new Error('Receiving share payloads is not supported on web.');
        },
        async getResolvedSharedPayloadsAsync() {
          throw new Error('Receiving share payloads is not supported on web.');
        },
        clearSharedPayloads() {
          throw new Error('Receiving share payloads is not supported on web.');
        },
      };
  },
  1307,
  [266],
);
