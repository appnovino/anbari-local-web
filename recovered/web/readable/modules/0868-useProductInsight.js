// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 868; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useProductInsight = function (l, h, p = '') {
        const v = l.id ? c(l.id, p) : '',
          [f, S] = (0, t.useState)(() => (v && u.get(v)) || null),
          [_, A] = (0, t.useState)(!1),
          I = (0, t.useRef)({ product: l, movements: h });
        I.current = { product: l, movements: h };
        const P = (0, t.useCallback)(() => {
          if (!v) return () => {};
          let t = !0;
          if ((A(!1), (0, n.demoActive)())) {
            const s = (0, o.demoInsight)(
              I.current.product,
              I.current.movements,
            );
            return (
              u.set(v, s),
              S(s),
              () => {
                t = !1;
              }
            );
          }
          const c = s.activeShop;
          return c
            ? ((0, s.request)(
                (0, s.shopPath)(c, '/products/' + l.id + '/insight'),
              ).then(
                ({ insight: s }) => {
                  (u.set(v, s), t && S(s));
                },
                (n) => {
                  (n instanceof s.ApiError &&
                    (401 === n.status || 403 === n.status) &&
                    (u.delete(v), t && S(null)),
                    t && A(!0));
                },
              ),
              () => {
                t = !1;
              })
            : (A(!0),
              () => {
                t = !1;
              });
        }, [v, l.id]);
        return (
          (0, t.useEffect)(() => (S((v && u.get(v)) || null), P()), [v, P]),
          { insight: f, failed: _, reload: P }
        );
      }));
    var t = r(d[0]),
      s = r(d[1]),
      n = r(d[2]),
      o = r(d[3]);
    const u = new Map(),
      c = (t, o) =>
        (0, n.demoActive)()
          ? 'demo:' + (0, n.demoSession)() + ':' + t
          : (s.activeShop?.id || '-') +
            ':' +
            ((0, s.activeUserId)() || '-') +
            ':' +
            (s.activeShop?.role || '-') +
            ':' +
            o +
            ':' +
            t;
  },
  868,
  [2, 415, 448, 869],
);
