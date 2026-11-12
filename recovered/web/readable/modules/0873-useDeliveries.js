// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 873; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useDeliveries = function (n, s, c = 0) {
        const [o, l] = (0, t.useState)(null),
          [f, v] = (0, t.useState)(),
          [p, y] = (0, t.useState)(!1),
          [S, b] = (0, t.useState)(!1),
          [h, _] = (0, t.useState)(!1),
          C = (0, t.useRef)(0),
          P = (0, t.useCallback)(
            (t) => {
              const s = u.activeShop;
              if (!n || !s) return;
              const c = ++C.current;
              (b(!0),
                _(!1),
                (0, u.request)(
                  (0, u.shopPath)(
                    s,
                    '/products/' +
                      encodeURIComponent(n) +
                      '/deliveries' +
                      (t ? '?before=' + encodeURIComponent(t) : ''),
                  ),
                )
                  .then(
                    (u) => {
                      c === C.current &&
                        (y(!!u.see?.buyPrice),
                        v(u.next),
                        l((n) =>
                          t && n ? [...n, ...u.deliveries] : u.deliveries,
                        ));
                    },
                    () => {
                      c === C.current && _(!0);
                    },
                  )
                  .finally(() => {
                    c === C.current && b(!1);
                  }));
            },
            [n],
          );
        return (
          (0, t.useEffect)(() => {
            (C.current++, l(null), v(void 0), _(!1), b(!1));
          }, [n, c]),
          (0, t.useEffect)(() => {
            !s || null !== o || S || h || P();
          }, [s, o, S, h, P]),
          {
            list: o,
            next: f,
            seeBuy: p,
            busy: S,
            failed: h,
            more: () => {
              f && !S && P(f);
            },
            retry: () => P(),
          }
        );
      }));
    var t = r(d[0]),
      u = r(d[1]);
  },
  873,
  [2, 415],
);
