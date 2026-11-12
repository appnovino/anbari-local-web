// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 471; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.resetDemoRecipes = function () {
        n.clear();
      }),
      (e.demoRecipeRoute = function (i, t, d, a, u) {
        const [p, l, f, v] = i;
        if ('recipes' === p && !l && 'GET' === t) {
          return {
            recipes: a
              .filter((i) => 'made' === i.kind && !i.archivedAt)
              .sort((i, t) => i.name.localeCompare(t.name, 'fa'))
              .map((i) => {
                const t = n.get(i.id),
                  o = (t?.items || [])
                    .map((i) => {
                      const t = a.find((t) => t.id === i.ingredientId);
                      return {
                        ingredientId: t.id,
                        name: t.name,
                        unit: t.unit || 'piece',
                        perBatch: s(i, t),
                        stock: t.stock,
                        ...(void 0 !== (t.avgCost ?? t.costPrice)
                          ? { avgCost: t.avgCost ?? t.costPrice }
                          : {}),
                      };
                    })
                    .filter((i) => !!i.name),
                  d = {
                    productId: i.id,
                    name: i.name,
                    yield: t?.recipeYield || 1,
                    ready: Math.max(0, i.stock),
                    makeable: null,
                    ...(void 0 !== i.price ? { price: i.price } : {}),
                    extraCosts: t?.extraCosts || [],
                    lines: o,
                  };
                return { ...d, makeable: c(d) };
              }),
            policyRevision: 1,
          };
        }
        if ('recipes' === p && 'alerts' === l) {
          if ('GET' === t && !f) return { alerts: [] };
          if ('seen' === v) return { ok: !0 };
        }
        if ('products' === p && l && 'recipe' === f) {
          const i = a.find((i) => i.id === l);
          if (!i) throw o('not_found', 404);
          if ('made' !== i.kind) throw o('recipe_requires_made');
          const s = n.get(l) || {
            items: [],
            extraCosts: [],
            recipeYield: 1,
            version: i.version,
          };
          if ('PUT' === t) {
            const i = Array.isArray(d.items) ? d.items : [];
            if (
              i.some((i) => {
                const t = a.find((t) => t.id === i.ingredientId);
                return !t || 'made' === t.kind || t.id === l;
              })
            )
              throw o('invalid_recipe');
            const t = {
              items: i,
              extraCosts: Array.isArray(d.extraCosts)
                ? d.extraCosts
                : s.extraCosts,
              recipeYield:
                'number' == typeof d.recipeYield
                  ? d.recipeYield
                  : s.recipeYield,
              version: s.version + 1,
            };
            (n.set(l, t), u());
          }
          const c = n.get(l) || s;
          return {
            recipe: {
              productId: l,
              version: c.version,
              recipeYield: c.recipeYield,
              extraCosts: c.extraCosts,
              items: c.items.map((i) => {
                const t = a.find((t) => t.id === i.ingredientId);
                return {
                  ingredientId: i.ingredientId,
                  name: t?.name || '',
                  ...(i.unit ? { unit: i.unit } : {}),
                  stockUnit: t?.unit || 'piece',
                  quantity: i.quantity,
                  ...(void 0 !== (t?.avgCost ?? t?.costPrice)
                    ? { avgCost: t?.avgCost ?? t?.costPrice }
                    : {}),
                };
              }),
            },
            policyRevision: 1,
          };
        }
        return null;
      }),
      (e.demoProductionUse = function (t, s, c, d) {
        const a = n.get(t);
        if (!a?.items.length) throw o('recipe_empty');
        return a.items.map((t) => {
          const n = c.find((i) => i.id === t.ingredientId);
          if (!n) throw o('invalid_recipe');
          const u = (0, i.recipeStockQuantity)(t, n, s, a.recipeYield || 1);
          if (u > n.stock + 1e-9) {
            if (!d)
              throw o('insufficient_stock', 409, {
                productId: n.id,
                name: n.name,
                stock: n.stock,
                unit: n.unit || 'piece',
              });
            d.has(n.id) ||
              d.set(n.id, {
                productId: n.id,
                name: n.name,
                unit: n.unit || 'piece',
              });
          }
          return { product: n, quantity: u };
        });
      }));
    var i = r(_d[0]),
      t = r(_d[1]);
    const n = new Map();
    const o = (i, n = 409, o) => new t.ApiError(i, n, o);
    function s(t, n) {
      try {
        return (0, i.recipeStockQuantity)(t, n, 1, 1);
      } catch {
        return null;
      }
    }
    function c(i) {
      if (!i.lines.length) return null;
      let t = 1 / 0;
      for (const n of i.lines) {
        if (!n.perBatch) return 0;
        t = Math.min(
          t,
          Math.floor((Math.max(0, n.stock) * i.yield) / n.perBatch + 1e-9),
        );
      }
      return t === 1 / 0 ? null : t;
    }
  },
  471,
  [430, 429],
);
