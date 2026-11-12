// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 430; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.recipeUnits = function (t) {
        const n = t.unit || 'piece';
        return (0, o.isCountUnit)(n)
          ? [
              n,
              ...o.CONTENT_UNITS.filter(
                (n) =>
                  !t.contentUnit ||
                  n === t.contentUnit ||
                  !!(0, o.fixedFactor)(n, t.contentUnit),
              ),
            ]
          : [n, ...o.CONTENT_UNITS.filter((t) => !!(0, o.fixedFactor)(t, n))];
      }),
      (e.recipeStockQuantity = function (t, l, d = 1, y = 1) {
        if (
          !(0, n.validQuantity)(t.quantity) ||
          !(0, n.validQuantity)(d) ||
          !(0, n.validQuantity)(y)
        )
          throw Error('invalid');
        const s = l.unit || 'piece',
          f = t.unit || s;
        if (f === s && 1 === y) return c(d, t.quantity);
        let _ =
            BigInt((0, n.quantityScaled)(t.quantity)) *
            BigInt((0, n.quantityScaled)(d)),
          p = 1000n;
        const v = (t, o) =>
          1 === y ? [t, o] : [1000n * t, o * BigInt((0, n.quantityScaled)(y))];
        if (f === s) return u(...v(_, p), 'quantity_too_small');
        let S;
        if ((0, o.isCountUnit)(s) && o.CONTENT_UNITS.includes(f)) {
          if (!l.contentSize || !l.contentUnit)
            throw Error('recipe_content_missing');
          if (!(0, n.validQuantity)(l.contentSize)) throw Error('invalid');
          ((S =
            f === l.contentUnit
              ? { multiply: 1 }
              : (0, o.fixedFactor)(f, l.contentUnit)),
            (p = BigInt((0, n.quantityScaled)(l.contentSize))));
        } else S = (0, o.fixedFactor)(f, s);
        if (!S) throw Error('invalid_unit');
        'multiply' in S ? (_ *= BigInt(S.multiply)) : (p *= BigInt(S.divide));
        return u(...v(_, p), 'recipe_quantity_too_small');
      }),
      (e.recipeQuantity = c),
      (e.validateRecipe = function (t) {
        if (!Array.isArray(t) || t.length > 30) throw Error('invalid');
        const u = new Set();
        return t.map((t) => {
          if (
            !t ||
            'string' != typeof t.ingredientId ||
            u.has(t.ingredientId) ||
            !(0, n.validQuantity)(t.quantity) ||
            (void 0 !== t.unit && !(0, o.isUnit)(t.unit))
          )
            throw Error('invalid');
          return (u.add(t.ingredientId), t);
        });
      }),
      (e.recipeErrorText = function (n, o = {}) {
        const u = {
          piece: '\u0639\u062f\u062f',
          pack: '\u0628\u0633\u062a\u0647',
          box: '\u0628\u0627\u06a9\u0633',
          carton: '\u06a9\u0627\u0631\u062a\u0646',
          bag: '\u06a9\u06cc\u0633\u0647',
          sack: '\u06af\u0648\u0646\u06cc',
          roll: '\u0631\u0648\u0644',
          bottle: '\u0628\u0637\u0631\u06cc',
          can: '\u0642\u0648\u0637\u06cc',
          dozen: '\u062f\u0648\u062c\u06cc\u0646',
          kg: '\u06a9\u06cc\u0644\u0648',
          g: '\u06af\u0631\u0645',
          l: '\u0644\u06cc\u062a\u0631',
          ml: '\u0645\u06cc\u0644\u06cc\u200c\u0644\u06cc\u062a\u0631',
          m: '\u0645\u062a\u0631',
          km: '\u06a9\u06cc\u0644\u0648\u0645\u062a\u0631',
        };
        return 'recipe_content_missing' === n
          ? (0, t.L)(
              '\u0628\u0631\u0627\u06cc {name} \u0645\u0634\u062e\u0635 \u0646\u0634\u062f\u0647 \u0647\u0631 {unit} \u0686\u0646\u062f {contentUnit} \u0627\u0633\u062a\u061b \u0645\u0642\u062f\u0627\u0631 \u0647\u0631 \u0648\u0627\u062d\u062f \u0631\u0627 \u062f\u0631 \u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646\u06cc\u062f.',
              {
                name: String(o.name || ''),
                unit: (0, t.L)(
                  u[String(o.stockUnit || 'piece')] || '\u0639\u062f\u062f',
                ),
                contentUnit: (0, t.L)(
                  u[String(o.unit || 'l')] || '\u0644\u06cc\u062a\u0631',
                ),
              },
            )
          : 'recipe_quantity_too_small' === n
            ? (0, t.L)(
                '\u0645\u0642\u062f\u0627\u0631 \u0645\u0635\u0631\u0641 \u067e\u0633 \u0627\u0632 \u062a\u0628\u062f\u06cc\u0644 \u06a9\u0645\u062a\u0631 \u0627\u0632 {minimum} \u0648\u0627\u062d\u062f \u0645\u0648\u062c\u0648\u062f\u06cc \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0645\u0642\u062f\u0627\u0631 \u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a \u0631\u0627 \u0628\u06cc\u0634\u062a\u0631 \u06a9\u0646\u06cc\u062f.',
                { minimum: (0, t.localDigits)('0.001') },
              )
            : '';
      }));
    var t = r(_d[0]),
      n = r(_d[1]),
      o = r(_d[2]);
    function u(t, o, u) {
      const c = (2n * t + o) / (2n * o);
      if (c < 1n) throw Error(u);
      if (c > BigInt((0, n.quantityScaled)(n.QUANTITY_MAX)))
        throw Error('invalid');
      return Number(c) / 1e3;
    }
    function c(t, o) {
      if (!(0, n.validQuantity)(t) || !(0, n.validQuantity)(o))
        throw Error('invalid');
      return u(
        BigInt((0, n.quantityScaled)(t)) * BigInt((0, n.quantityScaled)(o)),
        1000n,
        'quantity_too_small',
      );
    }
  },
  430,
  [311, 431, 432],
);
