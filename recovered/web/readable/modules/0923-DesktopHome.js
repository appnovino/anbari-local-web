// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 923; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.DesktopHome = function ({ cards: e, graph: t, secondary: o = [] }) {
        return (0, l.jsxs)(s.default, {
          testID: 'desktop-home',
          style: { gap: 20 },
          children: [
            (0, l.jsx)(n, { testID: 'desktop-home-columns', children: e }),
            t
              ? (0, l.jsx)(s.default, {
                  style: { width: '100%', minHeight: 280 },
                  children: t,
                })
              : null,
            o.length
              ? (0, l.jsx)(n, { testID: 'desktop-home-secondary', children: o })
              : null,
          ],
        });
      }));
    var e,
      t = r(d[0]),
      s = (e = t) && e.__esModule ? e : { default: e },
      l = r(d[1]);
    function n({ children: e, testID: t }) {
      return (0, l.jsx)(s.default, {
        testID: t,
        style: { flexDirection: 'row-reverse', gap: 16, alignItems: 'stretch' },
        children: e.map((e, t) =>
          (0, l.jsx)(
            s.default,
            { style: { flex: 1, minWidth: 0 }, children: e },
            t,
          ),
        ),
      });
    }
  },
  923,
  [99, 338],
);
