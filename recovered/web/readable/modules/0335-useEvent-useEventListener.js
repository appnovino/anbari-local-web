// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 335; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useEvent = function (u, s, c = null) {
        const [o, f] = (0, t.useState)(c);
        return (n(u, s, (t) => f(t)), o);
      }),
      (e.useEventListener = n));
    var t = r(d[0]);
    function n(n, u, s) {
      const c = (0, t.useRef)(s);
      ((c.current = s),
        (0, t.useEffect)(() => {
          const t = n.addListener(u, (...t) => c.current(...t));
          return () => t.remove();
        }, [n, u, c]));
    }
  },
  335,
  [2],
);
