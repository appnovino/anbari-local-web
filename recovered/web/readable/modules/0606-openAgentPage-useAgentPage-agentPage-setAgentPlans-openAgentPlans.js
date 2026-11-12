// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 606; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.openAgentPage = l),
      (e.useAgentPage = function () {
        return (0, n.useSyncExternalStore)(
          (n) => (
            u.add(n),
            () => {
              u.delete(n);
            }
          ),
          () => t,
          () => t,
        );
      }),
      (e.agentPage = function () {
        return t;
      }),
      (e.setAgentPlans = function (n) {
        o = n;
      }),
      (e.openAgentPlans = function () {
        const n = o;
        (l(null), n?.());
      }));
    var n = r(d[0]);
    let t = null;
    const u = new Set();
    function l(n) {
      ((t = n), u.forEach((n) => n()));
    }
    let o = null;
  },
  606,
  [2],
);
