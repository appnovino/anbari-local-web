// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 856; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.demoReportState = u),
      (e.Analytics = function ({ state: o, onEditProduct: n, onSavePrice: s }) {
        const l = (0, t.useMemo)(() => u(), []);
        return (0, m.jsx)(c.SalesReport, {
          variant: 'report',
          state: o,
          demoState: l,
          testID: 'analytics',
          onEditProduct: n,
          onSavePrice: s,
        });
      }));
    var t = r(d[0]),
      o = r(d[1]),
      n = r(d[2]),
      c = r(d[3]),
      s = r(d[4]),
      m = r(d[5]);
    function u(t = new Date()) {
      const c = (0, n.demoIncome)(t, [s.fa.milk, s.fa.rice, s.fa.oil]);
      return {
        products: c.products,
        movements: [
          ...c.movements,
          ...(0, o.demoAnalytics)(t).movements.filter(
            (t) => 'received' === t.kind,
          ),
        ],
      };
    }
  },
  856,
  [2, 857, 858, 839, 492, 338],
);
