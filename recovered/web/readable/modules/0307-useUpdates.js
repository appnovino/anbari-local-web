// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 307; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'useUpdates', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]),
      u = r(d[2]);
    const o = () => {
      const [o, s] = (0, t.useState)(
        (0, u.updatesStateFromContext)(n.latestContext),
      );
      return (
        (0, t.useEffect)(() => {
          const t = (0, n.addUpdatesStateChangeListener)((t) => {
            s((0, u.updatesStateFromContext)(t.context));
          });
          return () => t.remove();
        }, []),
        { currentlyRunning: u.currentlyRunning, ...o }
      );
    };
  },
  307,
  [2, 306, 308],
);
