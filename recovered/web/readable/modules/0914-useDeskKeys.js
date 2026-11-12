// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 914; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useDeskKeys = function (o, s = !0) {
        const u = (0, t.useRef)(o);
        ((u.current = o),
          (0, t.useEffect)(() => {
            if (!s || 'undefined' == typeof window) return;
            const t = (t) => {
              if (
                t.defaultPrevented ||
                t.ctrlKey ||
                t.metaKey ||
                t.altKey ||
                n(t.target)
              )
                return;
              const o = u.current,
                s = t.code?.startsWith('Key')
                  ? t.code.slice(3).toLowerCase()
                  : '',
                c = o[t.key] || o[t.key.toLowerCase()] || (s ? o[s] : void 0);
              c && (t.preventDefault(), c(t));
            };
            return (
              window.addEventListener('keydown', t),
              () => window.removeEventListener('keydown', t)
            );
          }, [s]));
      }));
    var t = r(d[0]);
    r(d[1]);
    const n = (t) => {
      const n = t;
      if (!n || 'string' != typeof n.tagName) return !1;
      const o = n.tagName.toLowerCase();
      return (
        'input' === o ||
        'textarea' === o ||
        'select' === o ||
        !!n.isContentEditable
      );
    };
  },
  914,
  [2, 94],
);
