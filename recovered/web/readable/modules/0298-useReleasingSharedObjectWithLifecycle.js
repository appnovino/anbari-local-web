// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 298; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useReleasingSharedObjectWithLifecycle = function (u, c) {
        const s = (0, n.useRef)(null),
          l = (0, n.useRef)(null),
          o = (0, n.useRef)(null),
          f = (0, n.useRef)(null),
          R = (0, n.useRef)(!1),
          h = (0, n.useRef)(c),
          p = (0, n.useRef)(u);
        ((p.current = u),
          null == s.current && (s.current = p.current.factory()));
        const y = (0, n.useMemo)(() => {
          let n = s.current;
          const u = { previousDependencies: h.current, dependencies: c };
          return (
            (n && t(h.current, c)) ||
              (!n || (p.current.shouldRecreate?.(n, u) ?? !0)
                ? ((l.current = s.current),
                  (n = p.current.factory()),
                  (s.current = n))
                : p.current.update && (o.current = { object: n, context: u }),
              (h.current = c)),
            n
          );
        }, c);
        function b(n) {
          (p.current.release ?? ((n) => n.release()))(n);
        }
        return (
          (0, n.useEffect)(() => {
            if (l.current) {
              const n = l.current;
              l.current = null;
              const t = () => b(n);
              f.current ? f.current.then(t, t) : t();
            }
            if (o.current) {
              const n = o.current;
              o.current = null;
              const t = p.current.update?.(n.object, n.context);
              t instanceof Promise &&
                ((f.current = t),
                t.then(
                  () => {
                    f.current = null;
                  },
                  (n) => {
                    ((f.current = null), console.error(n));
                  },
                ));
            }
          }, c),
          (0, n.useMemo)(() => {
            R.current = !0;
          }, []),
          (0, n.useEffect)(
            () => (
              (R.current = !1),
              () => {
                if (!R.current && s.current) {
                  const n = s.current,
                    t = () => b(n);
                  f.current ? f.current.then(t, t) : t();
                }
              }
            ),
            [],
          ),
          y
        );
      }));
    var n = r(d[0]);
    function t(n, t) {
      return n.length === t.length && t.every((t, u) => t === n[u]);
    }
  },
  298,
  [2],
);
