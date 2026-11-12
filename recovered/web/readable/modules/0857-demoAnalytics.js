// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 857; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.demoAnalytics = function (t = new Date()) {
        const o = [24, 36, 12, 48, 18, 30, 12, 42, 24, 36],
          n = [15, 22, 18, 31, 27, 23, 16, 35, 28, 32],
          s = [];
        for (let c = 0; c < 10; c++) {
          const i = new Date(t);
          (i.setDate(i.getDate() - 9 + c), i.setSeconds(0, 0));
          for (const t of ['received', 'sold'])
            s.push({
              id: 'demo-' + c + '-' + t,
              productId: 'sample-milk',
              name: 'sample',
              kind: t,
              quantity: ('received' === t ? o : n)[c],
              timestamp: i.toISOString(),
              source: 'demo',
            });
        }
        return { products: [], movements: s };
      }));
  },
  857,
  [],
);
