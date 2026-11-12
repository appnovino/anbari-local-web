// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 117; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    m.exports = function (n, o) {
      for (
        var t = arguments.length, f = new Array(t > 2 ? t - 2 : 0), s = 2;
        s < t;
        s++
      )
        f[s - 2] = arguments[s];
      if (!n) {
        var l;
        if (void 0 === o)
          l = new Error(
            'Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.',
          );
        else {
          var u = 0;
          (l = new Error(
            o.replace(/%s/g, function () {
              return String(f[u++]);
            }),
          )).name = 'Invariant Violation';
        }
        throw ((l.framesToPop = 1), l);
      }
    };
  },
  117,
  [],
);
