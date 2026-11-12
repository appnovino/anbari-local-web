// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 985; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'HOME_FIX_DAYS', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }),
      (e.HomePriceFix = function ({
        shop: S,
        state: f,
        kind: y,
        onClose: _,
        onSave: b,
        onEditor: F,
      }) {
        const h = 'sale' === y || 'cost' === y || 'received' === y,
          x = S && h ? (0, t.scoped)(S.id, 'summary:7') : null,
          M = (0, t.useSwr)(x, () => (0, s.readSummary)(S, v)),
          P = (0, o.useMemo)(
            () =>
              !S && h
                ? (0, c.summarizeLocal)(f.movements, v, new Date(), f.products)
                : null,
            [S?.id, h, f.movements, f.products],
          ),
          j = S ? (M.data ?? null) : P,
          k = y
            ? (0, l.priceFixItems)(y, {
                missing: j?.missing || [],
                products: f.products,
              })
            : [],
          w = h && !!S && !j;
        return (0, p.jsx)(u.MissingPriceSheet, {
          visible: !!y,
          kind: y,
          items: k,
          total: y && h ? (0, l.summaryFixTotal)(y, j?.totals) : void 0,
          products: f.products,
          testID: 'home',
          loading: w && !M.error ? n.notebookFa.summaryLoading : '',
          error: w ? M.error : '',
          onClose: _,
          onSave: b,
          onEditor: F,
          onRefresh: x ? () => (t.swrStore.invalidate(x), M.reload()) : void 0,
        });
      }));
    var o = r(d[0]),
      t = r(d[1]),
      s = r(d[2]),
      n = r(d[3]),
      u = r(d[4]),
      c = r(d[5]),
      l = r(d[6]),
      p = r(d[7]);
    const v = 7;
  },
  985,
  [2, 489, 519, 580, 848, 455, 849, 338],
);
