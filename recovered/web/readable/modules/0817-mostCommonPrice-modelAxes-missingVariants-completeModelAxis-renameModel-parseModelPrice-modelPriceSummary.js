// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 817; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.mostCommonPrice = function (t, n = 'price') {
        const o = new Map();
        for (const c of t) {
          const t = c[n];
          'number' == typeof t &&
            Number.isFinite(t) &&
            t >= 0 &&
            o.set(t, (o.get(t) || 0) + 1);
        }
        let c,
          a = 0;
        for (const [t, n] of o) n > a && ((c = t), (a = n));
        return c;
      }),
      (e.modelAxes = function (n) {
        const o = n.variants.map((n) => (0, t.cleanVariantValue)(n.size)),
          c = n.variants.map((n) => (0, t.cleanVariantValue)(n.color));
        return {
          sizes: [
            ...(0, t.sortSizes)(o.filter(Boolean)),
            ...(o.includes('') ? [''] : []),
          ],
          colors: [
            ...new Set(c.filter(Boolean)),
            ...(c.includes('') ? [''] : []),
          ],
        };
      }),
      (e.missingVariants = c),
      (e.completeModelAxis = function (n, o, a) {
        const s = (0, t.cleanVariantValue)(a);
        if (!s) throw Error('missing_variant_value');
        const l = c(n, o).map((c) => ({
            product: c,
            patch: {
              [o]: s,
              name: (0, t.variantName)(
                c.model || n.model,
                'size' === o ? s : c.size,
                'color' === o ? s : c.color,
              ),
            },
          })),
          m = n.variants.map((t) => ({
            ...t,
            ...l.find((n) => n.product.id === t.id)?.patch,
          }));
        for (const { product: n } of l) {
          const o = m.find((t) => t.id === n.id);
          if (
            m.some(
              (n) =>
                n.id !== o.id &&
                (0, t.sameValue)(n.size, o.size) &&
                (0, t.sameValue)(n.color, o.color),
            )
          )
            throw Error('duplicate_model_variant');
        }
        return l;
      }),
      (e.renameModel = function (n, o) {
        const c = o.replace(/\s+/g, ' ').trim().slice(0, 100);
        if (!c) throw Error('missing_model_name');
        const a = n.model.trim();
        return c === a
          ? []
          : n.variants.map((n) => {
              const o = n.name.trim(),
                s = o.startsWith(a)
                  ? (c + o.slice(a.length)).slice(0, 100)
                  : (0, t.variantName)(c, n.size, n.color);
              return { product: n, patch: { model: c, name: s } };
            });
      }),
      (e.parseModelPrice = a),
      (e.modelPriceSummary = function (t, n) {
        const o = t
            .map((t) => t[n])
            .filter((t) => void 0 !== t)
            .sort((t, n) => t - n),
          c = t.length - o.length;
        return {
          missing: c,
          min: o[0],
          max: o[o.length - 1],
          value: o.length && !c && o[0] === o[o.length - 1] ? o[0] : void 0,
        };
      }),
      (e.modelBulkPriceChanges = function (t, n, o) {
        return ['price', 'costPrice']
          .filter((t) => o[t] && n[t]?.trim())
          .map((t) => ({ field: t, value: a(n[t]) }))
          .filter(({ field: n, value: o }) => t.some((t) => t[n] !== o));
      }),
      (e.modelPriceChanges = function (t, n, o) {
        const c = [];
        for (const s of t) {
          const t = {};
          for (const c of ['price', 'costPrice']) {
            const l = n[s.id]?.[c];
            if (!o[c] || void 0 === l) continue;
            const m = a(l);
            m !== s[c] && (t[c] = m);
          }
          Object.keys(t).length && c.push({ product: s, patch: t });
        }
        return c;
      }),
      (e.modelUpdateBody = function (t, n, o) {
        const {
            name: c,
            detail: a,
            barcode: s,
            category: l,
            brand: m,
            size: u,
            color: p,
            model: f,
            unit: v,
            packSize: h,
            packUnit: z,
            contentSize: _,
            contentUnit: V,
            kind: P,
            price: b,
            costPrice: w,
          } = t,
          k = {
            name: c,
            detail: a || '',
            barcode: s,
            category: l,
            brand: m,
            size: u,
            color: p,
            model: f,
            unit: v,
            packSize: h,
            packUnit: z,
            contentSize: _,
            contentUnit: V,
            kind: P,
            price: b,
            costPrice: w,
            ...n,
          };
        o.price || delete k.price;
        o.costPrice || delete k.costPrice;
        return { details: k, version: t.version || 0 };
      }),
      (e.saveModelChanges = async function (t, n, o) {
        for (const c of t) o(await n(c.product, c.patch));
      }),
      (e.recentModelMovements = function (t, n) {
        const o = new Set(t.map((t) => t.id));
        return n
          .filter((t) => o.has(t.productId))
          .map((t, n) => ({ m: t, index: n }))
          .sort(
            (t, n) =>
              (Date.parse(n.m.timestamp || n.m.recordedAt || '') || 0) -
                (Date.parse(t.m.timestamp || t.m.recordedAt || '') || 0) ||
              n.index - t.index,
          )
          .slice(0, 8)
          .map(({ m: t }) => t);
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]);
    function c(n, o) {
      return n.variants.some((n) =>
        (0, t.cleanVariantValue)(n['size' === o ? 'color' : 'size']),
      )
        ? n.variants.filter((n) => !(0, t.cleanVariantValue)(n[o]))
        : [];
    }
    function a(t) {
      const c = (0, n.latinDigits)(t)
        .replace(/[,\u066c\s]/g, '')
        .replace(/\u066b/g, '.');
      if (!/^\d+(\.\d+)?$/.test(c)) throw Error('invalid_model_price');
      const a = (0, o.inputToToman)(Number(c));
      if (!Number.isFinite(a) || a < 0 || a > 999999999999)
        throw Error('invalid_model_price');
      return a;
    }
  },
  817,
  [453, 440, 435],
);
