// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 716; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'variantKey', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
      (e.renameBatchModel = function (o, r, i, s) {
        const a = i.slice(0, 100),
          c = (0, t.normalizeName)(a);
        return o.map((t) =>
          t.key === r
            ? { ...t, model: a, isNew: !c || !(0, n.groupModels)(s).has(c) }
            : t,
        );
      }),
      (e.missingVariants = l),
      (e.groupBatchVariants = function (o, r, { canCreate: s = !0 } = {}) {
        const a = (0, n.groupModels)(r),
          u = new Map();
        o.forEach((o, n) => {
          const s = i(o, r);
          if (!s) return;
          const a = (0, t.normalizeName)(s.model),
            c = u.get(a) || { rows: [], at: [] };
          (c.rows.push(s), c.at.push(n), u.set(a, c));
        });
        const m = [],
          f = new Set();
        for (const [t, o] of u) {
          if (o.rows.length < 2) continue;
          const n = c(t, o.rows, a.get(t));
          !n || (!s && l(n, r)) || (m.push(n), o.at.forEach((t) => f.add(t)));
        }
        return { models: m, rest: o.filter((t, o) => !f.has(o)) };
      }),
      (e.modelCells = m),
      (e.cellCount = f),
      (e.modelTotal = function (t) {
        return (
          Math.round(
            1e3 *
              m(t).reduce((o, n) => {
                try {
                  return o + f(t, n.key);
                } catch {
                  return o;
                }
              }, 0),
          ) / 1e3
        );
      }),
      (e.variantBody = p),
      (e.modelDrafts = h),
      (e.splitModel = function (t, o) {
        return h(t, o).map(({ draft: t }, o) => ({
          name: t.name,
          quantity: t.quantity,
          kind: 'received',
          ...(t.productId
            ? { productId: t.productId }
            : {
                model: t.model,
                ...(t.size ? { size: t.size } : {}),
                ...(t.color ? { color: t.color } : {}),
              }),
          ...(void 0 !== t.unitCost ? { unitCost: t.unitCost } : {}),
          ...(void 0 !== t.unitPrice ? { unitPrice: t.unitPrice } : {}),
          ...(t.timestamp ? { timestamp: t.timestamp } : {}),
          ...(t.photo && 0 === o ? { photo: t.photo } : {}),
        }));
      }),
      (e.filledBoxes = z),
      (e.afterSaved = function (t, o, { created: n, saved: r }) {
        return t.flatMap((t) => {
          if (t.key !== o) return [t];
          const i = {
            ...t,
            ...(n ? { created: !0 } : {}),
            counts: r
              ? Object.fromEntries(
                  Object.entries(t.counts).filter(([t]) => !r.includes(t)),
                )
              : t.counts,
          };
          return r && 0 === z(i) ? [] : [i];
        });
      }),
      (e.cardCatalog = async function (t, o, n) {
        if (!n || !l(t, o)) return { catalog: o, created: !1 };
        const r = await n(p(t));
        if (!Array.isArray(r)) throw Error('catalog_refresh');
        return { catalog: r, created: !0 };
      }),
      (e.draftChunks = function (t, o = 20, n = 7e5) {
        const r = [];
        let i = [],
          s = 0;
        for (const a of t) {
          const t = a.draft.photo?.length || 0;
          (i.length &&
            (i.length >= o || s + t > n) &&
            (r.push(i), (i = []), (s = 0)),
            i.push(a),
            (s += t));
        }
        i.length && r.push(i);
        return r;
      }));
    var t = _r(d[0]),
      o = _r(d[1]),
      n = _r(d[2]);
    const r = (t, o) =>
      (0, n.cleanVariantValue)(t || '') +
      '|' +
      (0, n.cleanVariantValue)(o || '');
    function i(t, o) {
      if (
        'received' !== t.kind ||
        t.needsChoice ||
        t.expiresAt ||
        (t.unit && 'piece' !== t.unit) ||
        !(Number(t.quantity) > 0)
      )
        return;
      const r = t.productId
        ? o.find((o) => o.id === t.productId && !o.archivedAt)
        : void 0;
      if (t.productId && (!r || 'made' === r.kind)) return;
      const i = r || t,
        s = i.model?.trim(),
        a = (0, n.cleanVariantValue)(i.size || ''),
        c = (0, n.cleanVariantValue)(i.color || '');
      return s && (a || c)
        ? { action: t, model: s, size: a, color: c }
        : void 0;
    }
    const s = (t) =>
        t.filter((o, r) => t.findIndex((t) => (0, n.sameValue)(t, o)) === r),
      a = (t, o) => t.find((t) => (0, n.sameValue)(t, o)) ?? o;
    function c(t, o, i) {
      const c = !!o[0].size,
        u = !!o[0].color;
      if (
        o.some((t) => !!t.size !== c || !!t.color !== u) ||
        (i && (!!i.sizes.length !== c || !!i.colors.length !== u))
      )
        return;
      const l = (t) => [
          ...new Set(
            o.map((o) => o.action[t]).filter((t) => 'number' == typeof t),
          ),
        ],
        m = l('unitCost'),
        f = l('unitPrice');
      if (m.length > 1 || f.length > 1) return;
      if (new Set(o.map((t) => t.action.timestamp || '')).size > 1) return;
      const p = (0, n.sortSizes)(
          s([...(i?.sizes || []), ...o.map((t) => t.size).filter(Boolean)]),
        ),
        h = s([...(i?.colors || []), ...o.map((t) => t.color).filter(Boolean)]);
      if (
        p.length > n.MAX_SIZES ||
        h.length > n.MAX_COLORS ||
        (p.length || 1) * (h.length || 1) > n.MAX_VARIANTS_PER_CALL
      )
        return;
      const z = {};
      for (const t of o) {
        const o = r(a(p, t.size), a(h, t.color));
        z[o] = String(
          Math.round(1e3 * ((Number(z[o]) || 0) + Number(t.action.quantity))) /
            1e3,
        );
      }
      const y = (t) =>
          o.map((o) => t(o.action)).find((t) => null != t && '' !== t),
        v = y((t) => t.photo),
        C = y((t) => t.timestamp || void 0),
        b = y((t) => t.brand);
      return {
        key: t,
        model: i?.model || o[0].model.slice(0, 100),
        isNew: !i,
        sizes: p,
        colors: h,
        counts: z,
        ...(m.length ? { unitCost: m[0] } : {}),
        ...(f.length ? { unitPrice: f[0] } : {}),
        ...(b ? { brand: b } : {}),
        ...(v ? { photo: v } : {}),
        ...(C ? { timestamp: C } : {}),
      };
    }
    const u = (o) => (0, t.normalizeName)(o.model || '') || o.key;
    function l(t, o) {
      const r = (0, n.groupModels)(o).get(u(t));
      return m(t).filter((t) => !r || !(0, n.findVariant)(r, t.size, t.color))
        .length;
    }
    function m(t) {
      return (t.sizes.length ? t.sizes : ['']).flatMap((o) =>
        (t.colors.length ? t.colors : ['']).map((t) => ({
          key: r(o, t),
          size: o,
          color: t,
        })),
      );
    }
    function f(t, n) {
      const r = t.counts[n]?.trim();
      if (!r) return 0;
      try {
        return (0, o.parseCount)(r);
      } catch {
        throw Error('invalid');
      }
    }
    function p(t) {
      return {
        model: t.model.replace(/\s+/g, ' ').trim(),
        sizes: t.sizes,
        colors: t.colors,
        ...(void 0 !== t.unitPrice ? { price: t.unitPrice } : {}),
        ...(void 0 !== t.unitCost ? { costPrice: t.unitCost } : {}),
        ...(t.brand ? { brand: t.brand } : {}),
      };
    }
    function h(t, o) {
      if (!t.model?.trim()) throw Error('invalid');
      const r = (0, n.groupModels)(o).get(u(t)),
        i = r?.model || t.model.replace(/\s+/g, ' ').trim();
      return m(t).flatMap((o) => {
        const s = f(t, o.key);
        if (!s) return [];
        const a = r && (0, n.findVariant)(r, o.size, o.color),
          c = {
            name: a ? a.name : (0, n.variantName)(i, o.size, o.color),
            quantity: s,
            kind: 'received',
            ...(a
              ? { productId: a.id }
              : {
                  model: i,
                  ...(o.size ? { size: o.size } : {}),
                  ...(o.color ? { color: o.color } : {}),
                  ...(t.brand ? { brand: t.brand } : {}),
                }),
            ...(void 0 !== t.unitCost ? { unitCost: t.unitCost } : {}),
            ...(void 0 !== t.unitPrice ? { unitPrice: t.unitPrice } : {}),
            ...(t.timestamp ? { timestamp: t.timestamp } : {}),
            ...(t.photo ? { photo: t.photo } : {}),
          };
        return [{ key: o.key, draft: c }];
      });
    }
    function z(t) {
      let o = 0;
      for (const n of m(t))
        try {
          f(t, n.key) > 0 && o++;
        } catch {
          return -1;
        }
      return o;
    }
  },
  716,
  [439, 717, 453],
);
