// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 165; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t = r(d[0]);
    function u(u) {
      var n = (0, t.useRef)(void 0);
      return (0, t.useCallback)(
        (t) => {
          (n.current && (n.current(), (n.current = void 0)),
            null != t && (n.current = u(t)));
        },
        [u],
      );
    }
  },
  165,
  [2],
);
