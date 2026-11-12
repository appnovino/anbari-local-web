// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 501; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useLandingMotion = function (n, s) {
        (0, t.useEffect)(() => {
          const t = n.current;
          if (!t) return;
          const o = window.matchMedia('(prefers-reduced-motion: reduce)'),
            l = t.querySelectorAll('.lp-reveal,[data-reveal]'),
            c = () => t.classList.toggle('lp-motion-ready', !s && !o.matches),
            v = () => t.classList.toggle('lp-tab-hidden', document.hidden),
            u =
              'undefined' == typeof IntersectionObserver
                ? null
                : new IntersectionObserver(
                    (t) => {
                      t.forEach((t) => {
                        (t.target.classList.toggle(
                          'lp-in-view',
                          t.isIntersecting,
                        ),
                          t.isIntersecting &&
                            t.target.classList.add('lp-visible'));
                      });
                    },
                    { root: t, threshold: 0, rootMargin: '0px 0px -16px 0px' },
                  );
          l.forEach((t) => {
            u ? u.observe(t) : t.classList.add('lp-visible', 'lp-in-view');
          });
          const p = (n) => {
            if (!(n.target instanceof Element)) return;
            let s = n.target;
            for (; s && s !== t; )
              (s.matches('.lp-reveal,[data-reveal]') &&
                s.classList.add('lp-visible'),
                (s = s.parentElement));
          };
          return (
            u && c(),
            v(),
            o.addEventListener('change', c),
            document.addEventListener('visibilitychange', v),
            t.addEventListener('focusin', p),
            () => {
              (u?.disconnect(),
                o.removeEventListener('change', c),
                document.removeEventListener('visibilitychange', v),
                t.removeEventListener('focusin', p),
                t.classList.remove('lp-motion-ready', 'lp-tab-hidden'));
            }
          );
        }, [n, s]);
      }));
    var t = r(d[0]);
  },
  501,
  [2],
);
