// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 535; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, e, d) {
    'use strict';
    function n(n, t, o) {
      if (t.parentNode !== n || !t.firstChild || n.lastChild === t) return !1;
      const r = o && t.contains?.(o) ? o : null;
      n.appendChild(t);
      try {
        r?.focus?.({ preventScroll: !0 });
      } catch {}
      return !0;
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.raiseOpenedModal = n),
      Object.defineProperty(e, 'isModalHolder', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.installModalStacking = r),
      (e.ensureModalStacking = function () {
        if (o) return;
        ((o = !0), r());
      }));
    const t = (n) => {
      const t = n;
      return (
        !!t &&
        1 === t.nodeType &&
        'DIV' === t.nodeName &&
        0 === t.attributes?.length
      );
    };
    let o = !1;
    function r(
      o = 'undefined' == typeof document ? void 0 : document,
      r = 'undefined' == typeof MutationObserver ? void 0 : MutationObserver,
    ) {
      if (!o?.body || !r) return () => {};
      const c = o.body,
        s = new Map(),
        f = (f) => {
          const l = f;
          if (s.has(f) || !t(f)) return;
          const u = new r((t) => {
            for (const r of t)
              if (r.addedNodes.length) {
                n(c, l, o.activeElement);
                break;
              }
          });
          (u.observe(f, { childList: !0 }), s.set(f, u));
        };
      for (const n of Array.from(c.childNodes)) f(n);
      const l = new r((n) => {
        for (const t of n) {
          for (const n of Array.from(t.addedNodes)) f(n);
          for (const n of Array.from(t.removedNodes))
            n.parentNode !== c && (s.get(n)?.disconnect(), s.delete(n));
        }
      });
      return (
        l.observe(c, { childList: !0 }),
        () => {
          (l.disconnect(), s.forEach((n) => n.disconnect()), s.clear());
        }
      );
    }
  },
  535,
  [],
);
