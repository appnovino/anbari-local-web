// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 921; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.GuidePortal = function ({ children: u }) {
        const [l, c] = (0, t.useState)(null);
        return (
          (0, t.useEffect)(() => {
            if ('undefined' == typeof document) return;
            const t = document.createElement('div');
            return (
              t.setAttribute('data-guide-layer', ''),
              (t.style.cssText =
                'position:fixed;top:0;left:0;right:0;bottom:0;z-index:2147483000;pointer-events:none;display:flex;'),
              document.body.appendChild(t),
              c(t),
              () => {
                t.remove();
              }
            );
          }, []),
          l ? (0, n.jsx)(n.Fragment, { children: o(u, l) }) : null
        );
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const { createPortal: o } = r(d[2]);
  },
  921,
  [2, 338, 81],
);
