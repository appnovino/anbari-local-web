// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1305; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useIncomingShare = function () {
        const [e, a] = (0, t.useState)((0, o.getSharedPayloads)()),
          [l, c] = (0, t.useState)([]),
          [u, f] = (0, t.useState)(!1),
          [h, y] = (0, t.useState)(null),
          S = (0, t.useRef)([]),
          v = (0, t.useCallback)(async () => {
            try {
              const e = (0, o.getSharedPayloads)();
              if (s(e, S.current)) return;
              if (((S.current = e), a(e), c([]), y(null), e.length > 0)) {
                f(!0);
                try {
                  const e = await (0, o.getResolvedSharedPayloadsAsync)();
                  c(e);
                } catch (e) {
                  y(
                    e instanceof Error
                      ? e
                      : new Error(
                          'Unknown error during shared payload resolution',
                        ),
                  );
                } finally {
                  f(!1);
                }
              }
            } catch (e) {
              y(e instanceof Error ? e : new Error('Failed to resolve data'));
            }
          }, []);
        return (
          (0, t.useEffect)(() => {
            v();
            const e = n.default.addEventListener('change', (e) => {
              'active' === e && v();
            });
            return () => {
              e.remove();
            };
          }, [v]),
          {
            sharedPayloads: e,
            resolvedSharedPayloads: l,
            clearSharedPayloads: o.clearSharedPayloads,
            isResolving: u,
            error: h,
            refreshSharePayloads: v,
          }
        );
      }));
    var e,
      t = r(d[0]),
      a = r(d[1]),
      n = (e = a) && e.__esModule ? e : { default: e },
      o = r(d[2]);
    function s(e, t) {
      if (e.length !== t.length) return !1;
      const a = new Map(),
        n = (e) => `${e.value}|${e.mimeType}|${e.shareType}`;
      for (const t of e) {
        const e = n(t);
        a.set(e, (a.get(e) || 0) + 1);
      }
      for (const e of t) {
        const t = n(e),
          o = a.get(t);
        if (!o) return !1;
        a.set(t, o - 1);
      }
      return !0;
    }
  },
  1305,
  [2, 203, 1306],
);
