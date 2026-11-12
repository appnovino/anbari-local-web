// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 687; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useShopMoneyUnit = function (c) {
        const { setShopUnit: f } = (0, s.useCurrency)(),
          { data: l } = (0, u.useSwr)(
            c ? (0, u.scoped)(c.id, 'notebook-shop') : null,
            () => (0, n.readNotebookShop)(c),
          ),
          p = l?.settings ?? c?.settings,
          h = c ? (0, o.moneyUnitOf)(p) : null;
        (0, t.useEffect)(() => {
          h && f(h);
        }, [h]);
      }));
    var t = r(d[0]),
      o = r(d[1]),
      n = r(d[2]),
      s = r(d[3]),
      u = r(d[4]);
  },
  687,
  [2, 435, 519, 578, 489],
);
