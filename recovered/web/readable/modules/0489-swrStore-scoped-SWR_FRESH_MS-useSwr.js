// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 489; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'swrStore', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (_e.scoped = function (e, t) {
        return l.scoped(e, t);
      }),
      Object.defineProperty(_e, 'SWR_FRESH_MS', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }),
      (_e.useSwr = function (e, t) {
        const c = (0, n.useRef)(t);
        c.current = t;
        const f = (0, n.useRef)(e);
        f.current = e;
        const [y, k] = (0, n.useState)(() => ({
            key: e,
            data: e ? l.peek(e) : void 0,
          })),
          [w, S] = (0, n.useState)(''),
          [p, b] = (0, n.useState)(''),
          [E, h] = (0, n.useState)(!1),
          [_, L] = (0, n.useState)(null),
          R = (0, n.useRef)(0),
          j = (0, n.useRef)(void 0),
          C = y.key === e ? y.data : e ? l.peek(e) : void 0,
          M = (0, n.useCallback)(async (e) => {
            f.current === e && (h(!0), S(''), b(''));
            const t = c.current;
            try {
              (await l.revalidate(e, t),
                f.current === e &&
                  l.stale(e) &&
                  void 0 !== l.peek(e) &&
                  (await l.revalidate(e, t)),
                f.current === e && k({ key: e, data: l.peek(e) }),
                f.current === e && L(e),
                (R.current = 0));
            } catch (t) {
              if (f.current === e) {
                const n = l.peek(e);
                (k({ key: e, data: n }),
                  (0, o.isServerBusy)(t) &&
                    (clearTimeout(j.current),
                    (j.current = setTimeout(
                      () => {
                        f.current === e && M(e);
                      },
                      (0, o.busyRetryDelay)(R.current++),
                    ))),
                  ((0, o.isServerBusy)(t) && void 0 !== n) ||
                    (S((0, s.message)(t)),
                    b(t instanceof Error ? t.message : '')));
              }
            } finally {
              f.current === e && h(!1);
            }
          }, []),
          O = (0, n.useCallback)(async () => {
            e && (await M(e));
          }, [e, M]);
        return (
          (0, n.useEffect)(() => {
            if (
              (k({ key: e, data: e ? l.peek(e) : void 0 }),
              S(''),
              b(''),
              h(!1),
              L(null),
              !e)
            )
              return;
            let t = !0;
            const n = l.subscribe(e, () => {
              t &&
                f.current === e &&
                (k({ key: e, data: l.peek(e) }),
                l.stale(e) && void 0 !== l.peek(e) && M(e));
            });
            return (
              (async () => {
                (await l.hydrate(e),
                  t && f.current === e && k({ key: e, data: l.peek(e) }),
                  l.fresh(e, v) ? t && f.current === e && L(e) : await M(e));
              })(),
              () => {
                ((t = !1), n(), clearTimeout(j.current), (R.current = 0));
              }
            );
          }, [e, M]),
          (0, n.useEffect)(() => {
            if (!e) return;
            if (
              'undefined' != typeof window &&
              'undefined' != typeof document
            ) {
              const t = () => {
                  'visible' !== document.visibilityState ||
                    l.fresh(e, v) ||
                    M(e);
                },
                n = () => {
                  l.fresh(e, v) || M(e);
                },
                u = () => {
                  M(e);
                };
              return (
                document.addEventListener('visibilitychange', t),
                window.addEventListener('focus', n),
                window.addEventListener('online', u),
                () => {
                  (document.removeEventListener('visibilitychange', t),
                    window.removeEventListener('focus', n),
                    window.removeEventListener('online', u));
                }
              );
            }
            const t = u.default.addEventListener('change', (t) => {
              'active' !== t || l.fresh(e, v) || M(e);
            });
            return () => t.remove();
          }, [e, M]),
          {
            data: C,
            error: w,
            errorCode: p,
            refreshing: E,
            reload: O,
            loaded: !(!e || _ !== e || E || w || l.stale(e)),
          }
        );
      }));
    var t = e(r(d[0])),
      n = r(d[1]),
      u = e(r(d[2]));
    r(d[3]);
    var s = r(d[4]),
      c = r(d[5]),
      o = r(d[6]),
      f = r(d[7]);
    const l = (0, c.createSwrStore)({
      storage: (0, f.demoSafeStorage)(t.default),
      maxEntries: 200,
    });
    const v = 3e4;
  },
  489,
  [258, 2, 203, 94, 415, 490, 479, 491],
);
