// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 295; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.createPermissionHook = function (t) {
        return (n) => u(t, n);
      }));
    var t = r(d[0]);
    function u(u, n) {
      const c = (0, t.useRef)(!0),
        [s, o] = (0, t.useState)(null),
        { get: l = !0, request: f = !1, ...h } = n || {},
        M = (0, t.useCallback)(async () => {
          let t;
          return (
            (t =
              Object.keys(h).length > 0
                ? await u.getMethod(h)
                : await u.getMethod()),
            c.current && o(t),
            t
          );
        }, [u.getMethod]),
        b = (0, t.useCallback)(async () => {
          let t;
          return (
            (t =
              Object.keys(h).length > 0
                ? await u.requestMethod(h)
                : await u.requestMethod()),
            c.current && o(t),
            t
          );
        }, [u.requestMethod]);
      return (
        (0, t.useEffect)(
          function () {
            (f && b(), !f && l && M());
          },
          [l, f, b, M],
        ),
        (0, t.useEffect)(function () {
          return (
            (c.current = !0),
            () => {
              c.current = !1;
            }
          );
        }, []),
        [s, b, M]
      );
    }
  },
  295,
  [2],
);
