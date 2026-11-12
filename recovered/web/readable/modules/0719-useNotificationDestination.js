// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 719; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.useNotificationDestination = function (e, t, u, s) {
        const [f, v] = (0, n.useState)(null),
          w = (0, n.useRef)(0),
          p = (0, n.useRef)(s?.online);
        (0, n.useEffect)(() => {
          w.current = 0;
        }, [f, e]);
        const E = !(
          !f ||
          (f.scope && f.scope !== e) ||
          'cheques' !== f.view ||
          null !== t
        );
        ((0, n.useEffect)(() => {
          const e = !1 === p.current && !0 === s?.online;
          ((p.current = s?.online), E && s?.error && e && s.reload());
        }, [E, s?.online, s?.error, s?.reload]),
          (0, n.useEffect)(() => {
            if (!E || !s?.error) return;
            let e = !1;
            const n = () => {
                e ||
                  ((e = !0),
                  s.reload().finally(() => {
                    e = !1;
                  }));
              },
              t = o.default.addEventListener('change', (e) => {
                'active' === e && n();
              }),
              c = setInterval(() => {
                w.current >= 4 || e || (w.current++, n());
              }, 15e3);
            return () => {
              (t.remove(), clearInterval(c));
            };
          }, [E, f, e, s?.error, s?.reload]),
          (0, n.useEffect)(
            () =>
              (0, c.listenNotificationTap)((e, n, t, o) =>
                v({
                  view: e,
                  scope: n,
                  acknowledge: t,
                  ...(o ? { ref: o } : {}),
                }),
              ),
            [e],
          ),
          (0, n.useEffect)(
            () =>
              (0, l.listenWidgetLinks)((e) =>
                v({ view: e, acknowledge: () => {} }),
              ),
            [],
          ),
          (0, n.useEffect)(() => {
            if (f)
              return f.scope && f.scope !== e
                ? (f.acknowledge(), void v(null))
                : void (
                    ('cheques' === f.view && null === t) ||
                    (u(f.view, f.ref), f.acknowledge(), v(null))
                  );
          }, [f, e, t, u]));
      }));
    var e,
      n = r(d[0]),
      t = r(d[1]),
      o = (e = t) && e.__esModule ? e : { default: e },
      c = r(d[2]),
      l = r(d[3]);
  },
  719,
  [2, 203, 523, 720],
);
