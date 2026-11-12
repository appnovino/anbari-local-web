// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 383; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    function t() {
      const t = new Map();
      let o = 0;
      const n = (o) => {
          let n = o;
          for (let o = 0; o < 20 && n; o++) {
            const o = t.get(n);
            if (!o || !o.host) break;
            n = o.host;
          }
          return n;
        },
        s = () => {
          let o = 0,
            n = -1;
          for (const [s, c] of t) {
            if (c.host) continue;
            let u = !1;
            for (const o of t.values())
              if (!o.host && o.from === s) {
                u = !0;
                break;
              }
            !u && c.order > n && ((o = s), (n = c.order));
          }
          return o;
        };
      return {
        add(s, c, u) {
          t.set(s, { from: n(c), host: u, order: ++o });
        },
        remove(o) {
          t.delete(o);
        },
        has: (o) => t.has(o),
        top: s,
        hostFor(o) {
          const c = s();
          return c ? ((o && !t.has(o)) || n(o) === c ? 0 : c) : 0;
        },
        size: () => t.size,
      };
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.createPopupStack = t),
      Object.defineProperty(e, 'popupStack', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    const o = t();
  },
  383,
  [],
);
