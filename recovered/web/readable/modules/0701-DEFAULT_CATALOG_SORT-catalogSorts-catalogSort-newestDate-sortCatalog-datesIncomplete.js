// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 701; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'DEFAULT_CATALOG_SORT', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.catalogSorts = o),
      (e.catalogSort = function (n, c = !0) {
        return o(c).find((t) => t === n) ?? t;
      }),
      (e.newestDate = function (t) {
        let n,
          o = -1 / 0;
        for (const s of t) {
          const t = c(s);
          void 0 !== t && t > o && ((o = t), (n = s));
        }
        return n;
      }),
      (e.sortCatalog = function (t, n, o) {
        if ('name' === n) return [...t];
        const a = 'stockUp' === n ? 1 : -1;
        return t
          .map((t, a) => {
            return {
              row: t,
              index: a,
              v:
                ((u = o(t)),
                'newest' === n
                  ? c(u.createdAt)
                  : s(
                      'priceDown' === n
                        ? u.price
                        : 'made' === u.kind
                          ? (u.makeable ?? u.stock)
                          : u.stock,
                    )),
            };
            var u;
          })
          .sort((t, n) =>
            void 0 === t.v || void 0 === n.v
              ? t.v === n.v
                ? t.index - n.index
                : void 0 === t.v
                  ? 1
                  : -1
              : (t.v - n.v) * a || t.index - n.index,
          )
          .map((t) => t.row);
      }),
      (e.datesIncomplete = function (t, n) {
        return n.some((t) => !!t.createdAt) && t.some((t) => !t.createdAt);
      }));
    const t = 'newest',
      n = ['newest', 'priceDown', 'stockDown', 'stockUp', 'name'];
    function o(t = !0) {
      return n.filter((n) => t || 'priceDown' !== n);
    }
    const c = (t) => {
        const n = t ? Date.parse(t) : NaN;
        return Number.isFinite(n) ? n : void 0;
      },
      s = (t) => ('number' == typeof t && Number.isFinite(t) ? t : void 0);
  },
  701,
  [],
);
