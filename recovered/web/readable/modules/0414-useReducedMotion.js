// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 414; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useReducedMotion = function () {
        const [e, n] = (0, t.useState)(!0);
        return (
          (0, t.useEffect)(() => {
            let e = !0;
            u.default
              .isReduceMotionEnabled()
              .then((t) => {
                e && n(t);
              })
              .catch(() => {});
            const t = u.default.addEventListener('reduceMotionChanged', n);
            return () => {
              ((e = !1), t.remove());
            };
          }, []),
          e
        );
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      u = (e = n) && e.__esModule ? e : { default: e };
  },
  414,
  [2, 90],
);
