// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 532; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    function t() {
      let t = [],
        n = '';
      const l = new Set(),
        o = () => l.forEach((t) => t());
      return {
        open(n) {
          const l = t.findIndex((t) => t.key === n.key);
          return (
            (t = l >= 0 ? t.map((t, o) => (o === l ? n : t)) : [...t, n]),
            o(),
            () => {
              const l = t.length;
              ((t = t.filter((t) => t.key !== n.key)), t.length !== l && o());
            }
          );
        },
        pages: () => t,
        top: () => t[t.length - 1] ?? null,
        current: () => t[t.length - 1]?.id ?? null,
        closeTop() {
          const n = t[t.length - 1];
          return !!n && (n.close(), !0);
        },
        closeAll() {
          for (const n of [...t].reverse()) n.close();
        },
        setTabLabel(t) {
          t !== n && ((n = t), o());
        },
        tabLabel: () => n,
        subscribe: (t) => (
          l.add(t),
          () => {
            l.delete(t);
          }
        ),
      };
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.createDeskStore = t),
      Object.defineProperty(e, 'deskPages', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.breadcrumb = function (t, n, l) {
        return [t, n, l].filter((t) => !!t && !!t.trim());
      }));
    const n = t();
  },
  532,
  [],
);
