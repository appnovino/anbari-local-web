// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 441; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'DEFAULT_TIER_NAMES', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      Object.defineProperty(e, 'SALE_PRICES_MAX', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.cleanSalePrices = function (n) {
        if (void 0 === n) return;
        if (null === n) return [];
        if (!Array.isArray(n) || n.length > c) throw Error('invalid');
        const o = new Set([
          l('\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634'),
          l((0, t.L)('\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634')),
        ]);
        return n.map((t, n) => {
          if (!t || 'object' != typeof t) throw Error('invalid');
          const { name: c, price: s } = t;
          if (
            'number' != typeof s ||
            !Number.isFinite(s) ||
            s < 0 ||
            s > 999999999999
          )
            throw Error('invalid');
          if (null != c && 'string' != typeof c) throw Error('invalid');
          const u =
            String(c ?? '')
              .trim()
              .replace(/\s+/g, ' ') || a[n];
          if (
            u.length > 30 ||
            /[\x00-\x1f\x7f]/.test(String(c ?? '')) ||
            o.has(l(u))
          )
            throw Error('invalid');
          return (o.add(l(u)), { name: u, price: s });
        });
      }),
      (e.salePriceOptions = function (n) {
        return [
          {
            key: 'default',
            name: (0, t.L)('\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634'),
            price: n.price,
          },
          ...(n.salePrices || [])
            .slice(0, c)
            .map((t, n) => ({ key: o[n], name: t.name, price: t.price })),
        ];
      }),
      Object.defineProperty(e, 'SALE_PRICES_OLD_APP', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (e.keepLaterSalePrices = function (t, n, a) {
        if (a || !Array.isArray(n) || n.length <= s || t.length > s) return t;
        const o = new Set(t.map((t) => l(t.name)));
        return [...t, ...n.slice(s).filter((t) => !o.has(l(t.name)))].slice(
          0,
          c,
        );
      }),
      (e.isNamedSalePrice = function (t, n) {
        return (
          'number' == typeof n &&
          Number.isFinite(n) &&
          Array.isArray(t) &&
          t.some(
            (t) => 'number' == typeof t?.price && Math.abs(t.price - n) < 1e-6,
          )
        );
      }),
      (e.salePricesEqual = function (t, n) {
        const a = t || [],
          c = n || [];
        return (
          a.length === c.length &&
          a.every((t, n) => t.name === c[n].name && t.price === c[n].price)
        );
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const a = [
        '\u0642\u06cc\u0645\u062a \u0647\u0645\u06a9\u0627\u0631',
        '\u0642\u06cc\u0645\u062a \u0639\u0645\u062f\u0647',
        '\u0642\u06cc\u0645\u062a \u0648\u06cc\u0698\u0647',
        '\u0642\u06cc\u0645\u062a \u0646\u0642\u062f\u06cc',
      ],
      c = 4,
      o = ['extra1', 'extra2', 'extra3', 'extra4'],
      l = (t) =>
        (0, n.latinDigits)(
          t
            .normalize('NFKC')
            .replace(/[\u200c\u200d\xa0]/g, ' ')
            .replace(/[\u0640\u064b-\u065f\u0670]/g, ''),
        )
          .replace(/\u064a/g, '\u06cc')
          .replace(/\u0643/g, '\u06a9')
          .replace(/\s+/g, ' ')
          .trim()
          .toLowerCase();
    const s = 2;
  },
  441,
  [311, 440],
);
