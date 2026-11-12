// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 301; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, _d) {
    'use strict';
    m.exports = function (e, n, o, t, a, f, s, d) {
      if (!e) {
        var u;
        if (void 0 === n)
          u = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
          );
        else {
          var c = [o, t, a, f, s, d],
            l = 0;
          (u = new Error(
            n.replace(/%s/g, function () {
              return c[l++];
            }),
          )).name = 'Invariant Violation';
        }
        throw ((u.framesToPop = 1), u);
      }
    };
  },
  301,
  [],
);
