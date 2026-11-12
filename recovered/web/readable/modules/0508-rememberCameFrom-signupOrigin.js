// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 508; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.rememberCameFrom = function () {
        try {
          const t =
            new URLSearchParams(window.location.search)
              .get('utm_source')
              ?.slice(0, 80) || void 0;
          let c = document.referrer || void 0;
          try {
            c && new URL(c).host === window.location.host && (c = void 0);
          } catch {
            c = void 0;
          }
          if (!t && !c && n()) return;
          localStorage.setItem(
            o,
            JSON.stringify({
              ...(t ? { utm: t } : {}),
              ...(c ? { ref: c.slice(0, 500) } : {}),
              at: Date.now(),
            }),
          );
        } catch {}
      }),
      (e.signupOrigin = function () {
        const o = t.fromBazaar ? 'bazaar' : 'web',
          c = n();
        return {
          app: o,
          ...(c
            ? {
                cameFrom: {
                  ...(c.utm ? { utm: c.utm } : {}),
                  ...(c.ref ? { ref: c.ref } : {}),
                },
              }
            : {}),
        };
      }),
      r(d[0]));
    var t = r(d[1]);
    const o = 'anbari.came_from',
      n = () => {
        try {
          const t = JSON.parse(localStorage.getItem(o) || 'null');
          return t && Date.now() - t.at < 2592e6 ? t : null;
        } catch {
          return null;
        }
      };
  },
  508,
  [94, 446],
);
