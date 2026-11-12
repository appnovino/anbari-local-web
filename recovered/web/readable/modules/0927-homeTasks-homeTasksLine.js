// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 927; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.homeTasks = function ({
        products: u,
        coverage: c,
        sell: s = !0,
        buy: p = !0,
      }) {
        const l = u.filter((n) => !n.archivedAt),
          f = s ? l.filter((n) => o(n.price)).length : 0,
          h = p
            ? l.filter(
                (n) => 'made' !== n.kind && o(n.costPrice) && o(n.avgCost),
              ).length
            : 0,
          k = (s && c?.unpricedSoldUnits) || 0,
          L = (p && c?.uncostedSoldUnits) || 0,
          v = (p && c?.unpricedReceivedUnits) || 0,
          G = [];
        f > 0 &&
          G.push({
            kind: 'noSellPrice',
            count: f,
            text: (0, t.L)(
              '{n} \u06a9\u0627\u0644\u0627 \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
              { n: (0, n.formatGrouped)(f) },
            ),
          });
        h > 0 &&
          G.push({
            kind: 'noBuyPrice',
            count: h,
            text: (0, t.L)(
              '{n} \u06a9\u0627\u0644\u0627 \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
              { n: (0, n.formatGrouped)(h) },
            ),
          });
        k > 0 &&
          G.push({
            kind: 'unpricedSold',
            count: k,
            text: (0, t.L)(
              '{n} \u0648\u0627\u062d\u062f \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
              { n: (0, n.formatGrouped)(k) },
            ),
          });
        L > 0 &&
          G.push({
            kind: 'uncostedSold',
            count: L,
            text: (0, t.L)(
              '{n} \u0648\u0627\u062d\u062f \u0641\u0631\u0648\u0634 \u0628\u062f\u0648\u0646 \u0628\u0647\u0627\u06cc \u062e\u0631\u06cc\u062f',
              { n: (0, n.formatGrouped)(L) },
            ),
          });
        v > 0 &&
          G.push({
            kind: 'unpricedReceived',
            count: v,
            text: (0, t.L)(
              '{n} \u0648\u0627\u062d\u062f \u0648\u0631\u0648\u062f \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
              { n: (0, n.formatGrouped)(v) },
            ),
          });
        return G;
      }),
      (e.homeTasksLine = function (o) {
        return 1 === o
          ? (0, t.L)(
              '\u0628\u0631\u0627\u06cc \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u062c\u0632\u0626\u06cc\u0627\u062a \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u062a \u06f1 \u06a9\u0627\u0631 \u0645\u0627\u0646\u062f\u0647',
            )
          : (0, t.L)(
              '\u0628\u0631\u0627\u06cc \u06a9\u0627\u0645\u0644 \u06a9\u0631\u062f\u0646 \u062c\u0632\u0626\u06cc\u0627\u062a \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u062a {n} \u06a9\u0627\u0631 \u0645\u0627\u0646\u062f\u0647',
              { n: (0, n.formatGrouped)(o) },
            );
      }));
    var n = r(d[0]),
      t = r(d[1]);
    const o = (n) => null == n;
  },
  927,
  [434, 311],
);
