// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 372; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'useFonts', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]);
    function u(t) {
      return 'string' == typeof t
        ? (0, n.isLoaded)(t)
        : Object.keys(t).every((t) => (0, n.isLoaded)(t));
    }
    const o =
      'undefined' == typeof window
        ? function (t) {
            return ((0, n.loadAsync)(t), [!0, null]);
          }
        : function (o) {
            const [c, s] = (0, t.useState)(u(o)),
              [f, l] = (0, t.useState)(null);
            return (
              (0, t.useEffect)(() => {
                let t = !0;
                return (
                  (0, n.loadAsync)(o)
                    .then(() => {
                      t && s(!0);
                    })
                    .catch((n) => {
                      t && l(n);
                    }),
                  () => {
                    t = !1;
                  }
                );
              }, []),
              [c, f]
            );
          };
  },
  372,
  [2, 349],
);
