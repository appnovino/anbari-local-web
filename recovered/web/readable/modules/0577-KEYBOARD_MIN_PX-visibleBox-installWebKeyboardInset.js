// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 577; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'KEYBOARD_MIN_PX', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.visibleBox = o),
      (e.installWebKeyboardInset = function (
        t = 'undefined' == typeof window ? void 0 : window,
      ) {
        const s = t?.visualViewport,
          u = t?.document;
        if (n || !t || !s || !u?.body) return () => {};
        n = !0;
        let c = '';
        const l = () => {
            const o = [],
              n = u.getElementById('root');
            n && o.push(n);
            for (const n of Array.from(u.body.children)) {
              if (n.id || 'DIV' !== n.tagName) continue;
              const s = n.firstElementChild;
              s && 'fixed' === t.getComputedStyle(s).position && o.push(s);
            }
            return o;
          },
          f = () => {
            const n = o(t.innerHeight, s),
              u = n ? n.top + ':' + n.bottom : '';
            for (const t of l()) {
              const o = n ? n.top + 'px' : '',
                s = n ? n.bottom + 'px' : '';
              (t.style.top !== o && (t.style.top = o),
                t.style.bottom !== s && (t.style.bottom = s));
            }
            c = u;
          },
          b = () => f();
        (s.addEventListener('resize', b), s.addEventListener('scroll', b));
        const p =
          'undefined' == typeof MutationObserver
            ? null
            : new MutationObserver(() => {
                c && f();
              });
        p?.observe(u.body, { childList: !0, subtree: !1 });
        const v = () => {
          t.setTimeout(f, 60);
        };
        return (
          u.addEventListener('focusin', v),
          () => {
            (s.removeEventListener('resize', b),
              s.removeEventListener('scroll', b),
              u.removeEventListener('focusin', v),
              p?.disconnect(),
              (n = !1));
          }
        );
      }));
    const t = 80;
    function o(o, n) {
      if (
        !(
          n &&
          Number.isFinite(o) &&
          Number.isFinite(n.height) &&
          Number.isFinite(n.offsetTop)
        )
      )
        return null;
      const s = Math.max(0, Math.round(n.offsetTop)),
        u = Math.max(0, Math.round(o - n.offsetTop - n.height));
      return u >= t ? { top: s, bottom: u } : null;
    }
    let n = !1;
  },
  577,
  [],
);
