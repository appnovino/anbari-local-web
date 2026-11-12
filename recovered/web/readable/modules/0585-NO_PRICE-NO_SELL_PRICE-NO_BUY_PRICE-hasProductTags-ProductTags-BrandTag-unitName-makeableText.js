// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 585; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'NO_PRICE', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }),
      Object.defineProperty(_e, 'NO_SELL_PRICE', {
        enumerable: !0,
        get: function () {
          return O;
        },
      }),
      Object.defineProperty(_e, 'NO_BUY_PRICE', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (_e.hasProductTags = function (e, t = !0, n = !0) {
        return (
          ('made' !== e.kind &&
            ((0, c.isOutOfStock)(e.stock) ||
              (0, c.isNegativeStock)(e.stock))) ||
          (0, o.priceMissingFor)(e, t, n)
        );
      }),
      (_e.ProductTags = function ({
        product: e,
        style: t,
        canSeeBuyPrice: u = !0,
        canSeeSellPrice: l = !0,
      }) {
        const f = l && (void 0 === e.price || null === e.price),
          S = 'made' !== e.kind && (0, c.isOutOfStock)(e.stock),
          _ = 'made' !== e.kind && (0, c.isNegativeStock)(e.stock),
          v = (0, o.priceMissingFor)(e, u, l);
        if (!S && !_ && !v) return null;
        const P = f
          ? !u ||
            'made' === e.kind ||
            (void 0 !== e.costPrice && null !== e.costPrice) ||
            (void 0 !== e.avgCost && null !== e.avgCost)
            ? O
            : k
          : p;
        return (0, b.jsxs)(n.default, {
          pointerEvents: 'none',
          style: [{ flexDirection: 'row', gap: 4, flexWrap: 'wrap' }, t],
          children: [
            S &&
              (0, b.jsx)(L, {
                testID: 'tag-out-' + e.id,
                label: (0, s.L)(c.OUT_OF_STOCK),
                tone: 'danger',
              }),
            _ &&
              (0, b.jsx)(L, {
                testID: 'tag-negative-' + e.id,
                label: (0, s.L)(c.NEGATIVE_STOCK),
                tone: 'danger',
              }),
            v &&
              (0, b.jsx)(L, {
                testID: 'tag-noprice-' + e.id,
                label: (0, s.L)(P),
                tone: 'warning',
              }),
          ],
        });
      }),
      (_e.BrandTag = function ({ brand: e }) {
        return e?.trim()
          ? (0, b.jsx)(L, { label: e.trim(), tone: 'muted' })
          : null;
      }),
      (_e.unitName = S),
      (_e.makeableText = function (e) {
        return void 0 !== e.stock && e.stock > 0
          ? (0, s.L)('\u0622\u0645\u0627\u062f\u0647: {count} {unit}', {
              count: e.stock.toLocaleString((0, s.numberLocale)()),
              unit: S(e.unit),
            })
          : void 0 === e.makeable
            ? (0, s.L)(
                '\u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a',
              )
            : null === e.makeable
              ? (0, s.L)(
                  '\u0647\u0646\u0648\u0632 \u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a \u0646\u062f\u0627\u0631\u062f',
                )
              : e.makeable > 0
                ? (0, s.L)(
                    '\u0628\u0627 \u0645\u0648\u0627\u062f \u0645\u0648\u062c\u0648\u062f: {count} {unit}',
                    {
                      count: e.makeable.toLocaleString((0, s.numberLocale)()),
                      unit: S(e.unit),
                    },
                  )
                : (0, s.L)(
                    '\u0645\u0648\u0627\u062f \u06a9\u0627\u0641\u06cc \u0628\u0631\u0627\u06cc \u0633\u0627\u062e\u062a \u0646\u06cc\u0633\u062a',
                  );
      }),
      (_e.stockLabel = function (e, t) {
        return (0, c.isOutOfStock)(e)
          ? (0, s.L)(c.OUT_OF_STOCK)
          : (0, c.isNegativeStock)(e)
            ? (0, c.stockNumber)(e) + ' ' + t
            : e.toLocaleString((0, s.numberLocale)()) + ' ' + t;
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      o = r(d[1]),
      c = r(d[2]),
      u = r(d[3]),
      l = r(d[4]),
      s = r(d[5]),
      f = r(d[6]),
      b = r(d[7]);
    const k = '\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a',
      O =
        '\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
      p =
        '\u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f';
    function L({ label: e, tone: t, testID: o }) {
      const { colors: c } = (0, l.useTheme)(),
        s =
          'warning' === t
            ? { bg: c.warningSoft, fg: c.warning }
            : 'danger' === t
              ? { bg: c.danger + '1f', fg: c.danger }
              : { bg: c.soft, fg: c.muted };
      return (0, b.jsx)(n.default, {
        testID: o,
        style: {
          borderRadius: 7,
          backgroundColor: c.surface,
          alignSelf: 'flex-start',
        },
        children: (0, b.jsx)(n.default, {
          style: {
            paddingHorizontal: 7,
            paddingVertical: 1,
            borderRadius: 7,
            backgroundColor: s.bg,
          },
          children: (0, b.jsx)(u.Copy, {
            numberOfLines: 1,
            style: { fontSize: 11, lineHeight: 18, color: s.fg },
            children: e,
          }),
        }),
      });
    }
    function S(e) {
      return f.notebookFa.units[e || 'piece'] || f.notebookFa.units.piece;
    }
  },
  585,
  [99, 452, 433, 407, 382, 311, 580, 338],
);
