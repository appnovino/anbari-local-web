// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 367; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useAssets = function (u) {
        const [c, n] = (0, t.useState)(),
          [o, f] = (0, t.useState)();
        return (
          (0, t.useEffect)(() => {
            s.Asset.loadAsync(u).then(n).catch(f);
          }, []),
          [c, o]
        );
      }));
    var t = r(d[0]),
      s = r(d[1]);
  },
  367,
  [2, 358],
);
