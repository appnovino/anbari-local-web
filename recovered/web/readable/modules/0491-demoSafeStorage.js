// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 491; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.demoSafeStorage = function (s) {
        const o = new Map();
        return {
          getItem: (l) =>
            (0, t.isDemoKey)(l)
              ? Promise.resolve(o.get(l) ?? null)
              : s.getItem(l),
          setItem: (l, n) =>
            (0, t.isDemoKey)(l)
              ? (o.set(l, n), Promise.resolve())
              : s.setItem(l, n),
          removeItem: (l) =>
            (0, t.isDemoKey)(l)
              ? (o.delete(l), Promise.resolve())
              : s.removeItem(l),
          getAllKeys: async () => [...(await s.getAllKeys()), ...o.keys()],
          multiRemove: async (l) => {
            const n = l.filter(
              (s) => !(0, t.isDemoKey)(s) || (o.delete(s), !1),
            );
            n.length && (await s.multiRemove(n));
          },
        };
      }));
    var t = r(d[0]);
  },
  491,
  [448],
);
