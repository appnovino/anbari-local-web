// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 452; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, _r, _i, _a, _m2, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'suggestProducts', {
        enumerable: !0,
        get: function () {
          return t.suggestProducts;
        },
      }),
      (e.cleanDetails = o),
      (e.saveProduct = function (n, r, i) {
        const l = i,
          c =
            Object.hasOwn(l, 'packSize') &&
            null == l.packSize &&
            null == l.packUnit,
          s = o(c ? { ...i, packSize: void 0, packUnit: void 0 } : i),
          u = n.products.find((t) => t.id === r);
        if (
          u &&
          s.unit &&
          s.unit !== (u.unit || 'piece') &&
          (0 !== u.stock || n.movements.some((t) => t.productId === r))
        )
          throw Error('unit_change_blocked');
        if (
          n.products.some(
            (n) =>
              n.id !== r &&
              ((0, t.normalizeName)(n.name) === (0, t.normalizeName)(s.name) ||
                (s.barcode && n.barcode === s.barcode)),
          )
        )
          throw Error('barcode_conflict');
        const m = { ...(u || { id: r, stock: 0 }), ...s };
        c && (delete m.packSize, delete m.packUnit);
        m.salePrices && !m.salePrices.length && delete m.salePrices;
        const d = [
            ...new Set([
              ...(n.categories || []),
              ...(s.category ? [s.category] : []),
            ]),
          ],
          f = {
            ...n,
            categories: d,
            products: u
              ? n.products.map((t) => (t.id === r ? m : t))
              : [...n.products, m],
          };
        return !u || (null == i.price && null == i.costPrice) ? f : a(f, r);
      }),
      (e.fillMissingPrices = a),
      (e.editCategory = function (n, r, i) {
        const o = i.trim();
        if (!o || o.length > 60) throw Error('invalid');
        const a = n.categories || [];
        if (
          a.some(
            (n) =>
              n !== r && (0, t.normalizeName)(n) === (0, t.normalizeName)(o),
          )
        )
          throw Error('category_duplicate');
        return {
          ...n,
          categories: r ? a.map((t) => (t === r ? o : t)) : [...a, o],
          products: n.products.map((t) =>
            r && t.category === r ? { ...t, category: o } : t,
          ),
        };
      }),
      (e.removeCategory = function (t, n) {
        return {
          ...t,
          categories: (t.categories || []).filter((t) => t !== n),
          products: t.products.map((t) =>
            t.category === n ? { ...t, category: '' } : t,
          ),
        };
      }),
      (e.isLowStock = l),
      (e.deleteProducts = function (t, n) {
        const r = new Set(n.filter((n) => t.products.some((t) => t.id === n)));
        return r.size
          ? {
              ...t,
              products: t.products.filter((t) => !r.has(t.id)),
              ...(t.alarmRules
                ? {
                    alarmRules: t.alarmRules.filter(
                      (t) => !('product' === t.scope && r.has(t.target || '')),
                    ),
                  }
                : {}),
              ...(t.alerts
                ? { alerts: t.alerts.filter((t) => !r.has(t.productId)) }
                : {}),
            }
          : t;
      }),
      (e.archiveProduct = function (t, n) {
        return {
          ...t,
          products: t.products.map((t) =>
            t.id === n ? { ...t, archivedAt: new Date().toISOString() } : t,
          ),
        };
      }),
      (e.restoreProduct = function (t, n) {
        return {
          ...t,
          products: t.products.map((t) => {
            if (t.id !== n) return t;
            const { archivedAt: r, ...i } = t;
            return i;
          }),
        };
      }),
      (e.clearSampleData = function (t, n) {
        const r = new Set(n),
          i = new Set(
            t.products
              .filter(
                (n) =>
                  r.has(n.id) &&
                  t.movements.filter((t) => t.productId === n.id).every(c),
              )
              .map((t) => t.id),
          );
        return {
          ...t,
          products: t.products.filter((t) => !i.has(t.id)),
          movements: t.movements.filter((t) => !i.has(t.productId)),
        };
      }),
      (e.missingPrice = s),
      (e.priceMissingFor = function (t, n = !0, r = !0) {
        if (n && r) return s(t);
        const i = void 0 === t.price || null === t.price,
          o = !(
            'made' === t.kind ||
            (void 0 !== t.costPrice && null !== t.costPrice) ||
            (void 0 !== t.avgCost && null !== t.avgCost)
          );
        return (r && i) || (n && o);
      }),
      (e.missingPriceParts = function (t, n = !0, r = !0) {
        const i = r && (void 0 === t.price || null === t.price),
          o =
            n &&
            'made' !== t.kind &&
            (void 0 === t.costPrice || null === t.costPrice) &&
            (void 0 === t.avgCost || null === t.avgCost);
        return o && i ? 'both' : o ? 'buy' : i ? 'sell' : null;
      }),
      (e.catalogBrands = function (t) {
        const n = new Map();
        for (const r of t) {
          const t = r.brand?.trim();
          !r.archivedAt && t && n.set(t, (n.get(t) || 0) + 1);
        }
        return [...n]
          .map(([t, n]) => ({ brand: t, count: n }))
          .sort(
            (t, n) => n.count - t.count || t.brand.localeCompare(n.brand, 'fa'),
          );
      }),
      (e.shelfRank = u),
      (e.filterCatalog = function (n, r, i, o, a, c = !1, m = '', d) {
        const f = (0, t.normalizeName)(r),
          g = (0, t.normalizeName)(m);
        return n
          .filter(
            (n) =>
              (0, t.normalizeName)(
                [
                  n.name,
                  n.barcode,
                  n.detail,
                  n.brand,
                  n.size,
                  n.color,
                  n.category,
                ].join(' '),
              ).includes(f) &&
              (c || !n.archivedAt) &&
              (!o ||
                ('__uncategorized' === o ? !n.category : n.category === o)) &&
              (!g || (0, t.normalizeName)(n.brand || '') === g) &&
              ('all' === i ||
                ('out' === i && 'made' !== n.kind && !(n.stock > 0)) ||
                ('noPrice' === i && s(n)) ||
                ('available' === i && n.stock > 0) ||
                ('low' === i && l(n)) ||
                ('finished' === i && 0 === n.stock) ||
                ('negative' === i && n.stock < 0) ||
                ('expiring' === i && !!d?.has(n.id))),
          )
          .sort((t, n) =>
            'stockUp' === a
              ? t.stock - n.stock
              : 'stockDown' === a
                ? n.stock - t.stock
                : u(t) - u(n) || t.name.localeCompare(n.name, 'fa'),
          );
      }),
      (e.productFamily = g),
      (e.toProductChoice = p),
      (e.productChoiceRequired = function (t, n, r = 8) {
        const i = g(t, n);
        return !i.exact && i.candidates.length > 1
          ? i.candidates.slice(0, r).map(p)
          : [];
      }),
      (e.preferUnit = h),
      (e.nameSimilarity = v),
      Object.defineProperty(e, 'CLOSE_MATCH', {
        enumerable: !0,
        get: function () {
          return z;
        },
      }),
      Object.defineProperty(e, 'sameName', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }),
      (e.closestProduct = y),
      (e.linkActions = function (t, r) {
        const i = (0, n.groupModels)(r);
        return t.map(
          ({
            productId: t,
            needsChoice: n,
            candidates: o,
            matchedFrom: a,
            ...l
          }) => {
            const c = C(X(P(S(l, r)), r, i), i),
              s = M(c, r, i);
            if (s) return s;
            const { model: u, ...m } = c,
              d = m,
              f = h(
                r.filter((t) => !t.archivedAt && k(t.name, d.name)),
                d.unit,
              );
            if (f.length)
              return 1 === f.length
                ? { ...d, name: f[0].name, productId: f[0].id }
                : { ...d, needsChoice: !0, candidates: f.slice(0, 8).map(p) };
            const v = g(r, d.name);
            if (v.exact && !ie(d.name, v.exact))
              return { ...d, name: v.exact.name, productId: v.exact.id };
            const z = v.exact
              ? []
              : h(
                  v.candidates.length
                    ? v.candidates
                    : r.filter((t) => !t.archivedAt && k(t.name, d.name)),
                  d.unit,
                );
            if (1 === z.length && !ie(d.name, z[0]))
              return { ...d, name: z[0].name, productId: z[0].id };
            if (z.length > 1)
              return {
                ...d,
                needsChoice: !0,
                candidates: z.slice(0, 8).map(p),
              };
            const N = Y(d.name, r);
            return N === d.name ? d : { ...d, name: N };
          },
        );
      }),
      (e.latinNameMatch = J),
      (e.latinWordsSaid = function (n, r) {
        const i = ((0, t.normalizeName)(n).match(/[a-z]{2,}/g) || []).map((t) =>
          L(t),
        );
        if (!i.length) return 0;
        const o = L(r, !0);
        return i.filter((t) =>
          o.some((n, r) =>
            [1, 2, 3, 4].some(
              (n) => r + n <= o.length && 0 === K(t, o.slice(r, r + n), !1),
            ),
          ),
        ).length;
      }),
      (e.latinNewName = Y),
      Object.defineProperty(e, 'detailWord', {
        enumerable: !0,
        get: function () {
          return re;
        },
      }),
      (e.nearMissProduct = ce),
      (e.spellingKey = ge),
      (e.similarNames = ve),
      (e.differentProducts = Ne),
      (e.closeSuggestion = function (r, i) {
        if (r.productId) return;
        const o = i.filter((t) => !t.archivedAt);
        r = C(P(S(r, i)), (0, n.groupModels)(o));
        const a = V(r.model?.trim() || r.name, r.size),
          l = o.filter((t) => !Ne(a, t.model?.trim() || t.name));
        if (
          o.some((t) => k(t.name, r.name)) ||
          (0, t.normalizeName)(r.name).replace(/ /g, '').length < 4
        )
          return;
        const c = (0, n.cleanVariantValue)(r.size || ''),
          s = (0, n.cleanVariantValue)(r.color || '');
        if (Q(a)) {
          const t = (0, n.groupModels)(o),
            i = [...t.values()]
              .map((t) => t.model)
              .filter((t) => /[a-z]/i.test(t));
          if (c || s) {
            const r = J(a, i, { slip: !0 }),
              o = r && !r.rest ? w(t, r.name) : void 0;
            if (o) {
              const t = (0, n.findVariant)(o, c, s);
              return t
                ? { name: t.name, productId: t.id }
                : {
                    name: (0, n.variantName)(o.model, c, s),
                    model: o.model,
                    ...(c ? { size: c } : {}),
                    ...(s ? { color: s } : {}),
                  };
            }
          } else {
            const t = J(
                r.name,
                o.map((t) => t.name),
                { slip: !0 },
              ),
              n = t && !t.rest ? o.find((n) => n.name === t.name) : void 0;
            if (n) return { name: n.name, productId: n.id };
          }
        }
        if (c || s) {
          const r = a,
            i = w((0, n.groupModels)(o), r),
            u = (0, n.groupModels)(l);
          if (i && !(0, n.findVariant)(i, c, s)) {
            const t = i.variants.filter(
              (t) =>
                (!c || (0, n.sameValue)(t.size, c)) &&
                (!s || (0, n.sameValue)(t.color, s)),
            );
            if (1 === t.length) return { name: t[0].name, productId: t[0].id };
          }
          if (i) return;
          if ((0, t.normalizeName)(r).replace(/ /g, '').length < 4) return;
          const m = [...u.values()]
            .filter((t) => !k(t.model, r))
            .map((t) => {
              const n = v(t.model, r),
                i = se(r, t.model, 1);
              return {
                g: t,
                score: Math.max(
                  n >= z ? n : 0,
                  i >= 0.5 ? i : 0,
                  ve(r, t.model),
                ),
              };
            })
            .filter((t) => t.score > 0)
            .sort((t, n) => n.score - t.score);
          if (m.length > 1 && m[0].score - m[1].score < 0.05) return;
          if (!m.length) {
            const t = ze(
              l.filter((t) => !t.model?.trim()),
              r,
            );
            return t ? { name: t.name, productId: t.id } : void 0;
          }
          const d = m[0].g,
            f = (0, n.findVariant)(d, c, s);
          return f
            ? { name: f.name, productId: f.id }
            : {
                name: (0, n.variantName)(d.model, c, s),
                model: d.model,
                ...(c ? { size: c } : {}),
                ...(s ? { color: s } : {}),
              };
        }
        const u = y(l, r.name) || be(l, r.name) || ce(l, r.name);
        if (u) return { name: u.name, productId: u.id };
        const m = l
          .map((t) => ({ p: t, score: se(r.name, t.name) }))
          .filter((t) => t.score >= 0.5)
          .sort((t, n) => n.score - t.score);
        if (m.length) return { name: m[0].p.name, productId: m[0].p.id };
        const d = ze(l, r.name);
        return d ? { name: d.name, productId: d.id } : void 0;
      }),
      (e.applySpokenSizes = function (n, i) {
        const o = i.filter((t) => !t.archivedAt);
        return n.map((n) => {
          if (
            o.some(
              (t) => k(t.name, n.name) || (!!t.model && k(t.model, n.name)),
            )
          )
            return n;
          const a = S(n, i);
          if (!a.quantity || !Se.includes(a.unit)) return n;
          if (
            o.some(
              (n) =>
                (0, t.normalizeName)(n.name) === (0, t.normalizeName)(a.name),
            )
          )
            return n;
          const l = we.exec(a.name) || Pe.exec(a.name);
          if (!l) return n;
          const c = void 0 === l[2],
            s = c ? 1 : Me(l[1]),
            u =
              ((m = c ? l[1] : l[2]),
              /^\u0645\u06cc\u0644\u06cc|^\u0633\u06cc/.test(m)
                ? 'ml'
                : /^\u0644\u06cc\u062a\u0631/.test(m)
                  ? 'l'
                  : /^\u06a9\u06cc\u0644\u0648/.test(m)
                    ? 'kg'
                    : /^\u06af\u0631\u0645/.test(m)
                      ? 'g'
                      : null);
          var m;
          if (!u || !Number.isFinite(s) || s <= 0) return n;
          const d = a.name.replace(l[0], ' ').replace(/\s+/g, ' ').trim();
          if (!d) return n;
          return o.find(
            (n) =>
              (0, t.normalizeName)(n.name) === (0, t.normalizeName)(d) &&
              xe.includes(n.unit || 'piece') &&
              (n.unit === u || !!(0, r.fixedFactor)(u, n.unit || 'piece')),
          )
            ? {
                ...a,
                name: d,
                quantity: Math.round(a.quantity * s * 1e3) / 1e3,
                unit: u,
              }
            : n;
        });
      }),
      (e.countAsPack = function (t, n) {
        return t.map((t) => {
          if (!t.productId || 'piece' !== t.unit) return t;
          const i = n.find((n) => n.id === t.productId);
          if (!i) return t;
          if (i.packUnit && i.packSize && xe.includes(i.unit || 'piece'))
            return { ...t, unit: i.packUnit };
          const o = i.unit || 'piece';
          return 'piece' !== o &&
            r.COUNT_UNITS.includes(o) &&
            !(0, r.unitCompatible)('piece', i)
            ? { ...t, unit: o }
            : t;
        });
      }));
    var t = _r(_d[0]),
      n = _r(_d[1]),
      r = _r(_d[2]),
      i = _r(_d[3]);
    function o(t) {
      const n = { name: t.name?.trim(), detail: t.detail?.trim() || '' };
      if (!n.name || n.name.length > 100 || n.detail.length > 200)
        throw Error('invalid');
      for (const r of [
        'barcode',
        'category',
        'brand',
        'size',
        'color',
        'model',
      ]) {
        const i = t[r];
        if (
          void 0 !== i &&
          ('string' != typeof i ||
            i.length > ('barcode' === r ? 128 : 'model' === r ? 100 : 60) ||
            /[\x00-\x1f]/.test(i))
        )
          throw Error('invalid');
        n[r] = i?.trim() || '';
      }
      for (const r of ['price', 'costPrice']) {
        const i = t[r];
        if (void 0 !== i && (!Number.isFinite(i) || i < 0 || i > 999999999999))
          throw Error('invalid');
        n[r] = i;
      }
      if (void 0 !== t.unit && !(0, r.isUnit)(t.unit)) throw Error('invalid');
      if (
        (void 0 !== t.unit && (n.unit = t.unit),
        void 0 !== t.kind && !['simple', 'made'].includes(t.kind))
      )
        throw Error('invalid');
      if (
        (void 0 !== t.kind && (n.kind = t.kind),
        (void 0 === t.packSize) != (void 0 === t.packUnit) ||
          (void 0 !== t.packSize &&
            (!Number.isFinite(t.packSize) ||
              t.packSize < 0.001 ||
              t.packSize > 999999999.999)) ||
          (void 0 !== t.packUnit && !(0, r.isUnit)(t.packUnit)))
      )
        throw Error('invalid');
      if (!(0, r.validContent)(t)) throw Error('invalid');
      if (
        ((n.contentSize = t.contentSize),
        (n.contentUnit = t.contentUnit),
        void 0 !== t.packSize &&
          ((n.packSize = t.packSize), (n.packUnit = t.packUnit)),
        t.photo &&
          !/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/]+=*$/.test(
            t.photo,
          ))
      )
        throw Error('invalid_image');
      if (t.photo && t.photo.length > 7e5) throw Error('too_large');
      return (
        (n.photo = t.photo || ''),
        void 0 !== t.salePrices &&
          (n.salePrices = (0, i.cleanSalePrices)(t.salePrices)),
        n
      );
    }
    function a(t, n) {
      const r = t.products.find((t) => t.id === n);
      if (!r) return t;
      const i = void 0 !== r.price && r.price > 0 ? r.price : void 0,
        o = void 0 !== r.costPrice && r.costPrice > 0 ? r.costPrice : void 0;
      if (void 0 === i && void 0 === o) return t;
      let a = !1;
      const l = t.movements.map((t) => {
        if (
          t.productId !== n ||
          t.correctsMovementId ||
          t.parentMovementId ||
          ['json', 'excel', 'csv'].includes(t.source || '')
        )
          return t;
        let r = t;
        return (
          'sold' === t.kind &&
            void 0 === t.unitPrice &&
            void 0 !== i &&
            (r = { ...r, unitPrice: i, revenueTotal: i * t.quantity }),
          ('sold' !== t.kind && 'received' !== t.kind) ||
            void 0 !== t.unitCost ||
            void 0 === o ||
            (r = { ...r, unitCost: o, costTotal: o * t.quantity }),
          r !== t && (a = !0),
          r
        );
      });
      return a ? { ...t, movements: l } : t;
    }
    function l(t, n = 5) {
      return t.stock > 0 && t.stock <= n;
    }
    function c(t) {
      return t.id.startsWith('sample-') || 'sample' === t.source;
    }
    function s(t) {
      return 'made' === t.kind
        ? void 0 === t.price || null === t.price
        : void 0 === t.price ||
            null === t.price ||
            ((void 0 === t.costPrice || null === t.costPrice) &&
              (void 0 === t.avgCost || null === t.avgCost));
    }
    function u(t) {
      return 'made' === t.kind || t.stock > 0 ? (s(t) ? 0 : 1) : 2;
    }
    const m = (n) =>
      n ? (0, t.normalizeName)(n).split(' ').filter(Boolean) : [];
    function d(t, n) {
      return (
        t === n ||
        (t.length >= 3 &&
          n.length >= 3 &&
          Math.abs(t.length - n.length) <= 2 &&
          (t.startsWith(n) || n.startsWith(t)))
      );
    }
    function f(t, n) {
      const r = m(n);
      return r.length > 0 && r.every((n) => t.some((t) => d(t, n)));
    }
    function g(n, r, i = '') {
      const o = (0, t.normalizeName)(r || ''),
        a = m(o);
      if (!a.length) return { candidates: [] };
      const l = n.filter((t) => !t.archivedAt),
        c = l.filter((n) => (0, t.normalizeName)(n.name) === o);
      if (1 === c.length) return { exact: c[0], candidates: c };
      let s = l.filter(
        (n) =>
          (0, t.normalizeName)(n.name) === o ||
          a.every((t) =>
            [...m(n.name), ...m(n.brand), ...m(n.size)].some((n) => d(t, n)),
          ),
      );
      const u = [...a, ...m(i)],
        g = s.filter((t) => f(u, t.brand) || f(u, t.size));
      return (
        g.length && (s = g),
        1 === s.length ? { exact: s[0], candidates: s } : { candidates: s }
      );
    }
    function p(t) {
      return {
        id: t.id,
        name: t.name,
        ...(t.brand ? { brand: t.brand } : {}),
        ...(t.size ? { size: t.size } : {}),
        ...(t.unit ? { unit: t.unit } : {}),
        stock: t.stock,
      };
    }
    function h(t, n) {
      if (!n || !r.COUNT_UNITS.includes(n)) return t;
      const i = t.filter((t) => (t.unit || 'piece') === n || t.packUnit === n);
      return i.length ? i : t;
    }
    function v(n, r) {
      const i = (0, t.normalizeName)(n).replace(/ /g, ''),
        o = (0, t.normalizeName)(r).replace(/ /g, '');
      if (!i || !o) return 0;
      if (i === o) return 1;
      if (Math.abs(i.length - o.length) > 0.4 * Math.max(i.length, o.length))
        return 0;
      let a = Array.from({ length: o.length + 1 }, (t, n) => n);
      for (let t = 1; t <= i.length; t++) {
        const n = [t];
        for (let r = 1; r <= o.length; r++)
          n[r] = Math.min(
            a[r] + 1,
            n[r - 1] + 1,
            a[r - 1] + (i[t - 1] === o[r - 1] ? 0 : 1),
          );
        a = n;
      }
      return 1 - a[o.length] / Math.max(i.length, o.length);
    }
    const z = 0.8,
      k = (n, r) =>
        (0, t.normalizeName)(n).replace(/ /g, '') ===
        (0, t.normalizeName)(r).replace(/ /g, ''),
      N = {
        '\u06a9\u06cc\u0644\u0648': 'kg',
        '\u06a9\u06cc\u0644\u0648\u06af\u0631\u0645': 'kg',
        '\u06af\u0631\u0645': 'g',
        '\u0644\u06cc\u062a\u0631': 'l',
        '\u0645\u06cc\u0644\u06cc\u200c\u0644\u06cc\u062a\u0631': 'ml',
        '\u0645\u06cc\u0644\u06cc\u0644\u06cc\u062a\u0631': 'ml',
        '\u0645\u06cc\u0644\u06cc \u0644\u06cc\u062a\u0631': 'ml',
        '\u0645\u062a\u0631': 'm',
        '\u0639\u062f\u062f': 'piece',
        '\u062a\u0627': 'piece',
        '\u062f\u0648\u0646\u0647': 'piece',
        '\u062f\u0627\u0646\u0647': 'piece',
        '\u0628\u0633\u062a\u0647': 'pack',
        '\u06a9\u0627\u0631\u062a\u0646': 'carton',
        '\u06a9\u0627\u0631\u062a\u0648\u0646': 'carton',
        '\u062c\u0639\u0628\u0647': 'box',
        '\u0628\u0627\u06a9\u0633': 'box',
        '\u0634\u06cc\u0634\u0647': 'bottle',
        '\u0628\u0637\u0631\u06cc': 'bottle',
        '\u067e\u0627\u06a9\u062a': 'pack',
        '\u0642\u0648\u0637\u06cc': 'can',
        '\u06a9\u06cc\u0633\u0647': 'bag',
        '\u062c\u0641\u062a': null,
        '\u062f\u0633\u062a': null,
        '\u0631\u0648\u0644': 'roll',
      },
      b = new Set([
        '\u0634\u06cc\u0634\u0647',
        '\u062f\u0633\u062a',
        '\u062c\u0639\u0628\u0647',
        '\u0628\u0627\u06a9\u0633',
        '\u06a9\u06cc\u0633\u0647',
        '\u0631\u0648\u0644',
        '\u067e\u0627\u06a9\u062a',
        '\u0642\u0648\u0637\u06cc',
        '\u0628\u0637\u0631\u06cc',
        '\u062c\u0641\u062a',
      ]),
      x = new RegExp(
        '^((?:[0-9\u06f0-\u06f9\u0660-\u0669]+(?:[.\u066b/][0-9\u06f0-\u06f9\u0660-\u0669]+)?|\u0635\u0641\u0631|\u06cc\u06a9|\u06cc\u06a9\u06cc|\u06cc\u0647|\u062f\u0648|\u0633\u0647|\u0686\u0647\u0627\u0631|\u0686\u0627\u0631|\u067e\u0646\u062c|\u0634\u0634|\u0634\u06cc\u0634|\u0647\u0641\u062a|\u0647\u0634\u062a|\u0646\u0647|\u062f\u0647|\u06cc\u0627\u0632\u062f\u0647|\u062f\u0648\u0627\u0632\u062f\u0647|\u0633\u06cc\u0632\u062f\u0647|\u0686\u0647\u0627\u0631\u062f\u0647|\u0686\u0627\u0631\u062f\u0647|\u067e\u0627\u0646\u0632\u062f\u0647|\u067e\u0648\u0646\u0632\u062f\u0647|\u0634\u0627\u0646\u0632\u062f\u0647|\u0634\u0648\u0646\u0632\u062f\u0647|\u0647\u0641\u062f\u0647|\u0647\u06cc\u0641\u062f\u0647|\u0647\u062c\u062f\u0647|\u0647\u06cc\u062c\u062f\u0647|\u0646\u0648\u0632\u062f\u0647|\u0628\u06cc\u0633\u062a|\u0633\u06cc|\u0686\u0647\u0644|\u0686\u0644|\u067e\u0646\u062c\u0627\u0647|\u0634\u0635\u062a|\u0647\u0641\u062a\u0627\u062f|\u0647\u0634\u062a\u0627\u062f|\u0646\u0648\u062f|\u0635\u062f|\u06cc\u06a9\u0635\u062f|\u062f\u0648\u06cc\u0633\u062a|\u0633\u06cc\u0635\u062f|\u0686\u0647\u0627\u0631\u0635\u062f|\u0686\u0627\u0631\u0635\u062f|\u067e\u0627\u0646\u0635\u062f|\u067e\u0648\u0646\u0635\u062f|\u0634\u0634\u0635\u062f|\u0634\u06cc\u0634\u0635\u062f|\u0647\u0641\u062a\u0635\u062f|\u0647\u0634\u062a\u0635\u062f|\u0646\u0647\u0635\u062f|\u0647\u0632\u0627\u0631|\u0645\u06cc\u0644\u06cc\u0648\u0646|\u0645\u0644\u06cc\u0648\u0646|\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f|\u0646\u06cc\u0645|\u0646\u0635\u0641|\u0631\u0628\u0639)(?:\\s+(?:\u0648\\s+)?(?:[0-9\u06f0-\u06f9\u0660-\u0669]+(?:[.\u066b/][0-9\u06f0-\u06f9\u0660-\u0669]+)?|\u0635\u0641\u0631|\u06cc\u06a9|\u06cc\u06a9\u06cc|\u06cc\u0647|\u062f\u0648|\u0633\u0647|\u0686\u0647\u0627\u0631|\u0686\u0627\u0631|\u067e\u0646\u062c|\u0634\u0634|\u0634\u06cc\u0634|\u0647\u0641\u062a|\u0647\u0634\u062a|\u0646\u0647|\u062f\u0647|\u06cc\u0627\u0632\u062f\u0647|\u062f\u0648\u0627\u0632\u062f\u0647|\u0633\u06cc\u0632\u062f\u0647|\u0686\u0647\u0627\u0631\u062f\u0647|\u0686\u0627\u0631\u062f\u0647|\u067e\u0627\u0646\u0632\u062f\u0647|\u067e\u0648\u0646\u0632\u062f\u0647|\u0634\u0627\u0646\u0632\u062f\u0647|\u0634\u0648\u0646\u0632\u062f\u0647|\u0647\u0641\u062f\u0647|\u0647\u06cc\u0641\u062f\u0647|\u0647\u062c\u062f\u0647|\u0647\u06cc\u062c\u062f\u0647|\u0646\u0648\u0632\u062f\u0647|\u0628\u06cc\u0633\u062a|\u0633\u06cc|\u0686\u0647\u0644|\u0686\u0644|\u067e\u0646\u062c\u0627\u0647|\u0634\u0635\u062a|\u0647\u0641\u062a\u0627\u062f|\u0647\u0634\u062a\u0627\u062f|\u0646\u0648\u062f|\u0635\u062f|\u06cc\u06a9\u0635\u062f|\u062f\u0648\u06cc\u0633\u062a|\u0633\u06cc\u0635\u062f|\u0686\u0647\u0627\u0631\u0635\u062f|\u0686\u0627\u0631\u0635\u062f|\u067e\u0627\u0646\u0635\u062f|\u067e\u0648\u0646\u0635\u062f|\u0634\u0634\u0635\u062f|\u0634\u06cc\u0634\u0635\u062f|\u0647\u0641\u062a\u0635\u062f|\u0647\u0634\u062a\u0635\u062f|\u0646\u0647\u0635\u062f|\u0647\u0632\u0627\u0631|\u0645\u06cc\u0644\u06cc\u0648\u0646|\u0645\u0644\u06cc\u0648\u0646|\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f|\u0646\u06cc\u0645|\u0646\u0635\u0641|\u0631\u0628\u0639))*\\s+)?(' +
          Object.keys(N).join('|') +
          ')\\s+(\\S[\\s\\S]*)$',
      );
    function S(t, n) {
      const r = (t) => {
          if (
            n.some(
              (n) =>
                !n.archivedAt && (k(n.name, t) || (!!n.model && k(n.model, t))),
            )
          )
            return null;
          const r = t.trim(),
            i = x.exec(
              r.replace(/\u064a/g, '\u06cc').replace(/\u0643/g, '\u06a9'),
            );
          return !i || (!i[1] && b.has(i[2]))
            ? null
            : { name: r.slice(r.length - i[3].length), unit: N[i[2]] };
        },
        i = r(t.name),
        o = t.model ? r(t.model) : null,
        a = i?.unit || o?.unit;
      return i || o
        ? {
            ...t,
            ...(i ? { name: i.name } : {}),
            ...(o ? { model: o.name } : {}),
            ...(null == t.unit && a ? { unit: a } : {}),
          }
        : t;
    }
    function y(n, r) {
      if ((0, t.normalizeName)(r).replace(/ /g, '').length < 4) return;
      const i = n
        .filter((t) => !t.archivedAt)
        .map((t) => ({ p: t, score: v(t.name, r) }))
        .filter((t) => t.score >= z)
        .sort((t, n) => n.score - t.score);
      return i.length && (1 === i.length || i[0].score - i[1].score >= 0.05)
        ? i[0].p
        : void 0;
    }
    function w(n, r) {
      const i = n.get((0, t.normalizeName)(r));
      return i || [...n.values()].find((t) => k(t.model, r));
    }
    function P(t) {
      const r = (0, n.cleanVariantValue)(t.size || ''),
        i = (0, n.cleanVariantValue)(t.color || '');
      if (!r && !i) return t;
      const o = t.model?.trim() || t.name,
        a = (0, n.variantModel)(o, r, i);
      if (a === o.trim()) return t;
      if (!a) {
        const { size: n, color: r, model: i, ...o } = t;
        return o;
      }
      return { ...t, model: a };
    }
    function M(t, r, i) {
      const o = (0, n.cleanVariantValue)(t.size || ''),
        a = (0, n.cleanVariantValue)(t.color || '');
      if (!o && !a) return;
      const { size: l, color: c, model: s, ...u } = t,
        m = t.model?.trim() || t.name,
        d = w(i, m);
      if (d) {
        const t = (0, n.findVariant)(d, o, a);
        if (t) return { ...u, name: t.name, productId: t.id };
        const r = d.variants.filter(
          (t) =>
            (!o || (0, n.sameValue)(t.size, o)) &&
            (!a || (0, n.sameValue)(t.color, a)),
        );
        return r.length > 1
          ? {
              ...u,
              name: d.model,
              needsChoice: !0,
              candidates: r.slice(0, 8).map(p),
            }
          : {
              ...u,
              name: (0, n.variantName)(d.model, o, a),
              model: d.model,
              ...(o ? { size: o } : {}),
              ...(a ? { color: a } : {}),
            };
      }
      const f = (0, n.variantName)(m, o, a),
        g = r.find((t) => !t.archivedAt && k(t.name, f));
      return g
        ? { ...u, name: g.name, productId: g.id }
        : {
            ...u,
            name: f,
            model: m.trim().slice(0, 100),
            ...(o ? { size: o } : {}),
            ...(a ? { color: a } : {}),
          };
    }
    const j = (t) =>
      t
        .replace(/[\u06f0-\u06f9]/g, (t) => String(t.charCodeAt(0) - 1776))
        .replace(/[\u0660-\u0669]/g, (t) => String(t.charCodeAt(0) - 1632));
    function V(t, r) {
      const i = (0, n.cleanVariantValue)(r || ''),
        o = t.trim().split(/\s+/);
      if (!i || !/\d/.test(i) || o.length < 2) return t.trim();
      const a = o.findLastIndex((t) => (0, n.sameValue)(t, i));
      return a > 0 ? o.filter((t, n) => n !== a).join(' ') : t.trim();
    }
    function C(r, i) {
      const o = (0, n.cleanVariantValue)(r.size || ''),
        a = (r.model?.trim() || r.name).trim().split(/\s+/);
      if (w(i, a.join(' '))) return r;
      for (let l = a.length - 1; l >= 1; l--) {
        const c = w(i, a.slice(0, l).join(' '));
        if (!c || !c.sizes.length) continue;
        let s = '',
          u = (0, n.cleanVariantValue)(r.color || '');
        for (const i of a.slice(l)) {
          const a = j(i);
          if (o && (0, n.sameValue)(o, i) && !s) s = o;
          else if (!/^\d+(?:[.,]\d+)?$/.test(a) || s || o) {
            if (
              [
                '\u0633\u0627\u06cc\u0632',
                '\u0634\u0645\u0627\u0631\u0647',
                '\u0631\u0646\u06af',
                'size',
              ].includes((0, t.normalizeName)(i))
            )
              continue;
            if (!u && [...c.colors, ...A].some((t) => (0, n.sameValue)(t, i)))
              u = (0, n.cleanVariantValue)(i);
            else if (!u || !(0, n.sameValue)(u, i)) return r;
          } else s = a;
        }
        return s || o
          ? { ...r, model: c.model, size: s || o, ...(u ? { color: u } : {}) }
          : r;
      }
      return r;
    }
    const A = [
      '\u0645\u0634\u06a9\u06cc',
      '\u0633\u0641\u06cc\u062f',
      '\u0637\u0648\u0633\u06cc',
      '\u0633\u0631\u0645\u0647\u200c\u0627\u06cc',
      '\u0622\u0628\u06cc',
      '\u0642\u0631\u0645\u0632',
      '\u0633\u0628\u0632',
      '\u06a9\u0631\u0645',
      '\u0642\u0647\u0648\u0647\u200c\u0627\u06cc',
      '\u0635\u0648\u0631\u062a\u06cc',
      '\u0632\u0631\u062f',
      '\u0646\u0627\u0631\u0646\u062c\u06cc',
      '\u0628\u0646\u0641\u0634',
      '\u0648\u0627\u06cc\u062a',
      '\u0628\u0644\u06a9',
    ];
    const I = (t, n) => Object.prototype.hasOwnProperty.call(t, n),
      U = {
        a: ['\u0627\u06cc'],
        b: ['\u0628\u06cc'],
        c: ['\u0633\u06cc'],
        d: ['\u062f\u06cc'],
        e: ['\u0627\u06cc'],
        f: ['\u0627\u0641'],
        g: ['\u062c\u06cc'],
        h: ['\u0627\u0686'],
        i: ['\u0622\u06cc'],
        j: ['\u062c\u06cc'],
        k: ['\u06a9\u06cc', '\u06a9\u0627'],
        l: ['\u0627\u0644'],
        m: ['\u0627\u0645'],
        n: ['\u0627\u0646'],
        o: ['\u0627\u0648'],
        p: ['\u067e\u06cc'],
        q: ['\u06a9\u06cc\u0648'],
        r: ['\u0622\u0631'],
        s: ['\u0627\u0633'],
        t: ['\u062a\u06cc'],
        u: ['\u06cc\u0648'],
        v: ['\u0648\u06cc'],
        w: ['\u062f\u0628\u0644\u06cc\u0648'],
        x: ['\u0627\u06cc\u06a9\u0633'],
        y: ['\u0648\u0627\u06cc'],
        z: ['\u0632\u062f', '\u0632\u06cc'],
      },
      O = {
        '\u06cc\u06a9': 1,
        '\u06cc\u0647': 1,
        '\u062f\u0648': 2,
        '\u0633\u0647': 3,
        '\u0686\u0647\u0627\u0631': 4,
        '\u0686\u0627\u0631': 4,
        '\u067e\u0646\u062c': 5,
        '\u0634\u0634': 6,
        '\u0634\u06cc\u0634': 6,
        '\u0647\u0641\u062a': 7,
        '\u0647\u0634\u062a': 8,
        '\u0646\u0647': 9,
        '\u062f\u0647': 10,
        '\u06cc\u0627\u0632\u062f\u0647': 11,
        '\u062f\u0648\u0627\u0632\u062f\u0647': 12,
        '\u0633\u06cc\u0632\u062f\u0647': 13,
        '\u0686\u0647\u0627\u0631\u062f\u0647': 14,
        '\u067e\u0627\u0646\u0632\u062f\u0647': 15,
        '\u067e\u0648\u0646\u0632\u062f\u0647': 15,
        '\u0634\u0627\u0646\u0632\u062f\u0647': 16,
        '\u0647\u0641\u062f\u0647': 17,
        '\u0647\u062c\u062f\u0647': 18,
        '\u0647\u06cc\u062c\u062f\u0647': 18,
        '\u0646\u0648\u0632\u062f\u0647': 19,
        '\u0628\u06cc\u0633\u062a': 20,
        '\u0633\u06cc': 30,
        '\u0686\u0647\u0644': 40,
        '\u067e\u0646\u062c\u0627\u0647': 50,
        '\u0634\u0635\u062a': 60,
        '\u0647\u0641\u062a\u0627\u062f': 70,
        '\u0647\u0634\u062a\u0627\u062f': 80,
        '\u0646\u0648\u062f': 90,
        '\u0635\u062f': 100,
        '\u062f\u0648\u06cc\u0633\u062a': 200,
        '\u0633\u06cc\u0635\u062f': 300,
        '\u0686\u0647\u0627\u0631\u0635\u062f': 400,
        '\u067e\u0627\u0646\u0635\u062f': 500,
        '\u0634\u0634\u0635\u062f': 600,
        '\u0647\u0641\u062a\u0635\u062f': 700,
        '\u0647\u0634\u062a\u0635\u062f': 800,
        '\u0646\u0647\u0635\u062f': 900,
      },
      E = {
        '\u0632\u06cc\u0631\u0648': 0,
        '\u0648\u0627\u0646': 1,
        '\u062a\u0648': 2,
        '\u062a\u0631\u06cc': 3,
        '\u062a\u06cc\u0631\u06cc': 3,
        '\u062b\u0631\u06cc': 3,
        '\u0641\u0648\u0631': 4,
        '\u0641\u0627\u06cc\u0648': 5,
        '\u0633\u06cc\u06a9\u0633': 6,
        '\u0633\u0648\u0646': 7,
        '\u0627\u06cc\u062a': 8,
        '\u0646\u0627\u06cc\u0646': 9,
        '\u062a\u0646': 10,
      },
      _ = new Set([
        '\u0645\u062f\u0644',
        '\u0633\u0627\u06cc\u0632',
        '\u0631\u0646\u06af',
        '\u0628\u0631\u0646\u062f',
        '\u0645\u0627\u0631\u06a9',
        'model',
        'size',
        '\u0639\u062f\u062f',
        '\u062a\u0627',
        '\u062f\u0648\u0646\u0647',
        '\u062f\u0627\u0646\u0647',
        '\u0627\u0635\u0644',
        '\u0627\u0648\u0631\u062c\u06cc\u0646\u0627\u0644',
        'original',
      ]),
      q = new Set([..._, '\u06a9\u0647']),
      W = new Set([
        'xs',
        's',
        'm',
        'l',
        'xl',
        'xxl',
        'xxxl',
        'small',
        'medium',
        'large',
        'xlarge',
        'xxlarge',
        '\u0627\u0633\u0645\u0627\u0644',
        '\u0645\u062f\u06cc\u0648\u0645',
        '\u0644\u0627\u0631\u062c',
      ]),
      $ = new Set([
        '\u067e\u0631\u0648',
        '\u0645\u06a9\u0633',
        '\u067e\u0644\u0627\u0633',
        '\u0627\u0644\u062a\u0631\u0627',
        '\u0627\u0648\u0644\u062a\u0631\u0627',
        '\u0644\u0627\u06cc\u062a',
        '\u0645\u06cc\u0646\u06cc',
        '\u0646\u0648',
        '\u0646\u0648\u062a',
        '\u0627\u0633',
        '\u0627\u06cc',
        '\u0627\u0641',
        '\u0627\u06cc\u06a9\u0633',
        '\u0627\u0644',
        '\u067e\u0631\u0648\u0645\u06a9\u0633',
        'pro',
        'max',
        'plus',
        'ultra',
        'lite',
        'mini',
        'note',
      ]),
      F = (t) => A.some((r) => (0, n.sameValue)(r, t));
    function T(t, n, r = !1) {
      const i = t[n];
      if (void 0 === i) return null;
      if (/^\d+(?:\.\d+)?$/.test(i)) return { value: Number(i), end: n + 1 };
      if (r && I(E, i)) return { value: E[i], end: n + 1 };
      if (!I(O, i)) return null;
      let o = O[i],
        a = o,
        l = n + 1;
      const c = (t) => (t >= 100 ? 100 : t >= 10 ? 10 : 1);
      for (; '\u0648' === t[l] && I(O, t[l + 1] || '') && O[t[l + 1]] < c(a); )
        ((a = O[t[l + 1]]), (o += a), (l += 2));
      return { value: o, end: l };
    }
    const R = (n) =>
      (0, t.normalizeName)(n)
        .replace(/\u0622/g, '\u0627')
        .replace(/\u0626/g, '\u06cc')
        .replace(/\s/g, '');
    function B(t) {
      let n = [''];
      for (const r of t) {
        const t = U[r];
        if (!t) return [];
        n = n.flatMap((n) => t.map((t) => n + R(t))).slice(0, 16);
      }
      return n;
    }
    function D(t) {
      return {
        k:
          t.length >= 3 && /[aeiouy]/.test(t)
            ? [...new Set([ge(t), ge(t.replace(/g(?=[eiy])/g, 'j'))])].filter(
                Boolean,
              )
            : [],
        t: t.length <= 5 ? B(t) : [],
      };
    }
    function L(n, r = !1) {
      const i = [];
      for (const o of (0, t.normalizeName)(n)
        .replace(/[()\u060c,\-/]|(?<!\d)\.|\.(?!\d)/g, ' ')
        .split(' ')
        .filter(Boolean))
        for (const t of o.match(/[a-z]+|\d+(?:\.\d+)?|[^a-z\d]+/g) || []) {
          const n = /[a-z]/.test(t),
            o = /^\d/.test(t),
            a = F(t),
            l = W.has(t),
            c = o
              ? Number(t)
              : !n && I(O, t)
                ? O[t]
                : r && !n && i.length && I(E, t)
                  ? E[t]
                  : null,
            s = n || o ? '' : ge(t),
            { k: u, t: m } = n ? D(t) : { k: s ? [s] : [], t: o ? [] : [R(t)] };
          i.push({
            text: t,
            k: u,
            t: m,
            n: c,
            latin: n,
            free: (r ? q : _).has(t),
            exact: n || null !== c || a || l || $.has(t),
            textOnly: null !== c || a || l || (n && !u.length),
          });
        }
      return i;
    }
    const Z = (t) => {
      let n = [''];
      for (const r of t) {
        if (!r.length) return [];
        n = n.flatMap((t) => r.map((n) => t + n)).slice(0, 32);
      }
      return n;
    };
    function H(t, n) {
      if (t === n) return !0;
      if (Math.abs(t.length - n.length) > 1) return !1;
      let r = 0;
      for (; r < t.length && r < n.length && t[r] === n[r]; ) r++;
      return t.length === n.length
        ? t.slice(r + 1) === n.slice(r + 1)
        : t.length < n.length
          ? t.slice(r) === n.slice(r + 1)
          : t.slice(r + 1) === n.slice(r);
    }
    function K(t, n, r) {
      const i = t.filter((t) => null !== t.n);
      if (i.length || n.some((t) => null !== t.n)) {
        const r = T(
          n.map((t) => t.text),
          0,
          null !== n[0].n && !I(O, n[0].text),
        );
        return 1 === t.length &&
          1 === i.length &&
          r &&
          r.end === n.length &&
          r.value === i[0].n
          ? 0
          : 1 / 0;
      }
      if (Z(t.map((t) => t.t)).some((t) => Z(n.map((t) => t.t)).includes(t)))
        return 0;
      if (t.some((t) => t.textOnly) || n.some((t) => t.textOnly)) return 1 / 0;
      const o = Z(t.map((t) => t.k)),
        a = Z(n.map((t) => t.k));
      return o.some((t) => a.includes(t))
        ? 0
        : r &&
            !n.some((t) => t.exact) &&
            o.some((t) =>
              a.some(
                (n) =>
                  Math.min(t.length, n.length) >= 2 &&
                  Math.max(t.length, n.length) >= 3 &&
                  H(t, n),
              ),
            )
          ? 1
          : 1 / 0;
    }
    function G(t, n, r) {
      const i = t.length,
        o = n.length,
        a = Array.from({ length: i + 1 }, () => Array(o + 1).fill(1 / 0));
      a[0][0] = 0;
      const l = (t, n, r) => {
        r < a[t][n] && (a[t][n] = r);
      };
      for (let c = 0; c <= i; c++)
        for (let s = 0; s <= o; s++) {
          const u = a[c][s];
          if (u <= 1.5) {
            (c < i && t[c].free && l(c + 1, s, u),
              c < i &&
                0 === s &&
                !t[c].latin &&
                !t[c].exact &&
                l(c + 1, 0, u + 0.5),
              s < o && n[s].free && l(c, s + 1, u));
            for (let a = 1; a <= 3 && c + a <= i; a++)
              for (let i = 1; i <= 4 && s + i <= o; i++) {
                const o = K(t.slice(c, c + a), n.slice(s, s + i), r);
                o < 1 / 0 && l(c + a, s + i, u + o);
              }
          }
        }
      return a[i];
    }
    function J(n, r, { prefix: i = !1, slip: o = !1 } = {}) {
      if ((0, t.normalizeName)(n).replace(/\s/g, '').length < 3) return;
      const a = L(n, !0),
        l = [];
      for (const t of new Set(r)) {
        if (!/[a-z]/i.test(t) || k(t, n)) continue;
        const r = G(L(t), a, o);
        let c = r[a.length],
          s = a.length;
        if (i)
          for (
            let t = a.length - 1;
            t > 0 &&
            a
              .slice(t)
              .every(
                (t) =>
                  t.free ||
                  null !== t.n ||
                  F(t.text) ||
                  W.has(t.text) ||
                  '\u0648' === t.text,
              );
            t--
          )
            r[t] < c && ((c = r[t]), (s = t));
        c <= (o ? 1.5 : 0.5) &&
          l.push({
            name: t,
            rest: a
              .slice(s)
              .map((t) => t.text)
              .join(' '),
            cost: c,
          });
      }
      const c = [
          ...new Map(l.map((n) => [(0, t.normalizeName)(n.name), n])).values(),
        ],
        s = c.filter((t) => 0 === t.cost),
        u = 1 === c.length ? c[0] : 1 === s.length ? s[0] : void 0;
      return u ? { name: u.name, rest: u.rest } : void 0;
    }
    const Q = (t) => /[\u0600-\u06ff]/.test(t);
    function X(t, n, r) {
      const i = [...r.values()]
        .map((t) => t.model)
        .filter((t) => /[a-z]/i.test(t));
      if (t.model?.trim()) {
        if (w(r, t.model) || !Q(t.model)) return t;
        const n = J(t.model, i, { prefix: !0 });
        return n && !n.rest ? { ...t, model: n.name } : t;
      }
      const o = n.filter((t) => !t.archivedAt);
      if (
        !Q(t.name) ||
        !o.some((t) => /[a-z]/i.test(t.name)) ||
        o.some((n) => k(n.name, t.name)) ||
        w(r, t.name)
      )
        return t;
      const a =
        J(
          t.name,
          o.map((t) => t.name),
        ) || J(t.name, i, { prefix: !0 });
      return a ? { ...t, name: [a.name, a.rest].filter(Boolean).join(' ') } : t;
    }
    function Y(n, r) {
      if ('string' != typeof n || !n.trim()) return n;
      const i = n.trim().split(/\s+/),
        o = i.map((n) => (0, t.normalizeName)(n)),
        a = [];
      for (let t = 0; t < i.length; ) {
        const n = /[a-z]/i.test(a[a.length - 1] || '') ? T(o, t, !0) : null;
        !n ||
        /^(?:\u062a\u0627|\u0639\u062f\u062f|\u062f\u0648\u0646\u0647|\u062f\u0627\u0646\u0647|\u062c\u0641\u062a)$/.test(
          o[n.end] || '',
        )
          ? (a.push(i[t]), t++)
          : (a.push(String(n.value)), (t = n.end));
      }
      const l = te(r);
      if (!l.size) return a.join(' ');
      const c = a.join(' ').split(' '),
        s = [];
      for (let n = 0; n < c.length; ) {
        let r = !1;
        for (let i = Math.min(4, c.length - n); i >= 1 && !r; i--) {
          const o = c.slice(n, n + i);
          if (o.some((t) => /[a-z\d]/i.test(t))) continue;
          const a = L(o.join(' '), !0);
          if (
            a.length !== i ||
            a.some((t) => null !== t.n || F(t.text) || t.free)
          )
            continue;
          const u = (0, t.normalizeName)(o.join(''));
          if (u.length < 3) continue;
          const m = [...l.entries()].filter(
            ([, t]) =>
              !t.persian.has(u) &&
              ((t.t.length > 0 &&
                Z(a.map((t) => t.t)).some((n) => t.t.includes(n))) ||
                (t.k.length > 0 &&
                  a.every((t) => t.k.length) &&
                  Z(a.map((t) => t.k)).some((n) => t.k.includes(n)))),
          );
          1 === m.length && (s.push(m[0][0]), (n += i), (r = !0));
        }
        r || (s.push(c[n]), n++);
      }
      return s.join(' ');
    }
    const ee = new WeakMap();
    function te(n) {
      let r = ee.get(n);
      if (r) return r;
      r = new Map();
      const i = n.filter((t) => !t.archivedAt),
        o = new Set(
          i.flatMap((n) =>
            (0, t.normalizeName)(n.name)
              .split(' ')
              .filter((t) => !/[a-z\d]/.test(t)),
          ),
        ),
        a = new Map();
      for (const t of i) {
        const n = /(?:^|\s)([A-Za-z]{3,})(?=\s|$)/.exec(t.name)?.[1];
        if (!n) continue;
        const r = n.toLowerCase(),
          i = a.get(r);
        i ? i.n++ : a.set(r, { text: n, n: 1 });
      }
      for (const [t, { text: n, n: i }] of a) {
        const { k: a, t: l } = D(t),
          c = i >= 2 || a.some((t) => t.length >= 3) ? a : [];
        (c.length || l.length) && r.set(n, { k: c, t: l, persian: o });
      }
      return (ee.set(n, r), r);
    }
    const ne = new Set([
        '\u0633\u0627\u06cc\u0632',
        '\u0631\u0646\u06af',
        '\u06af\u0631\u0645',
        '\u06af\u0631\u0645\u06cc',
        '\u06a9\u06cc\u0644\u0648',
        '\u06a9\u06cc\u0644\u0648\u06cc\u06cc',
        '\u06a9\u06cc\u0644\u0648\u06af\u0631\u0645',
        '\u06a9\u06cc\u0644\u0648\u06af\u0631\u0645\u06cc',
        '\u0644\u06cc\u062a\u0631',
        '\u0644\u06cc\u062a\u0631\u06cc',
        '\u0633\u06cc\u0633\u06cc',
        '\u0645\u06cc\u0644\u06cc',
        '\u0645\u06cc\u0644\u06cc\u0644\u06cc\u062a\u0631',
        '\u0645\u06cc\u0644\u06cc\u0644\u06cc\u062a\u0631\u06cc',
        '\u0645\u062a\u0631',
        '\u0645\u062a\u0631\u06cc',
        '\u0633\u0627\u0646\u062a',
        '\u0633\u0627\u0646\u062a\u06cc',
        '\u0627\u06cc\u0646\u0686',
        '\u0627\u06cc\u0646\u0686\u06cc',
        '\u0648\u0627\u062a',
        '\u0648\u0644\u062a',
        '\u0622\u0645\u067e\u0631',
        '\u0639\u062f\u062f',
        '\u0639\u062f\u062f\u06cc',
        '\u062a\u0627',
        '\u062a\u0627\u06cc\u06cc',
        '\u0645\u062b\u0642\u0627\u0644',
        '\u0645\u062b\u0642\u0627\u0644\u06cc',
        '\u0628\u0633\u062a\u0647',
        '\u067e\u0627\u06a9\u062a',
        '\u06a9\u0627\u0631\u062a\u0646',
        '\u062c\u0639\u0628\u0647',
        '\u0628\u0627\u06a9\u0633',
        '\u0642\u0648\u0637\u06cc',
        '\u0628\u0637\u0631\u06cc',
        '\u0634\u06cc\u0634\u0647',
        '\u06a9\u06cc\u0633\u0647',
        '\u0646\u06cc\u0645',
        '\u0631\u0628\u0639',
        '\u0627\u0633\u0645\u0627\u0644',
        '\u0645\u062f\u06cc\u0648\u0645',
        '\u0644\u0627\u0631\u062c',
      ]),
      re = (t) =>
        /\d/.test(t) ||
        /[a-z]/i.test(t) ||
        ne.has(t) ||
        I(O, t) ||
        F(t) ||
        W.has(t);
    function ie(t, n) {
      const r = m(t),
        i = new Set([...m(n.brand), ...m(n.size), ...m(n.color)]);
      return m(n.name).some(
        (t) => !r.some((n) => d(n, t)) && !i.has(t) && !re(t),
      );
    }
    const oe = {
        '\u062b': '\u0633',
        '\u0635': '\u0633',
        '\u0630': '\u0632',
        '\u0636': '\u0632',
        '\u0638': '\u0632',
        '\u0637': '\u062a',
        '\u062d': '\u0647',
        '\u063a': '\u0642',
        '\u0626': '\u06cc',
        '\u0621': '',
        '\u0623': '\u0627',
        '\u0625': '\u0627',
        '\u0622': '\u0627',
      },
      ae = (t) => [...t].map((t) => oe[t] ?? t).join('');
    function le(t, n) {
      if (/\d/.test(t + n) || re(t) || re(n)) return !1;
      const r = ae(t),
        i = ae(n);
      return r === i
        ? Math.min(t.length, n.length) >= 3
        : Math.min(r.length, i.length) >= 4 && H(r, i);
    }
    function ce(n, r) {
      const i = (0, t.normalizeName)(r || '').split(' ');
      if (!i[0] || n.some((t) => !t.archivedAt && k(t.name, r))) return;
      const o = n.filter((n) => {
        if (n.archivedAt) return !1;
        const r = (0, t.normalizeName)(n.name).split(' ');
        if (r.length !== i.length) return !1;
        let o = 0;
        for (let t = 0; t < r.length; t++)
          if (r[t] !== i[t]) {
            if (!le(i[t], r[t])) return !1;
            o++;
          }
        return 1 === o;
      });
      return 1 === o.length ? o[0] : void 0;
    }
    function se(n, r, i = 2) {
      const o = (0, t.normalizeName)(n)
          .split(' ')
          .filter((t) => t.length >= i),
        a = new Set((0, t.normalizeName)(r).split(' '));
      return o.length ? o.filter((t) => a.has(t)).length / o.length : 0;
    }
    const ue = new Set([
        '\u06a9\u0641\u0634',
        '\u06a9\u06cc\u0641',
        '\u0644\u0628\u0627\u0633',
        '\u0639\u062f\u062f',
        '\u062a\u0627',
        '\u062f\u0648\u0646\u0647',
        '\u062f\u0627\u0646\u0647',
        '\u0633\u0627\u06cc\u0632',
        '\u0631\u0646\u06af',
        '\u0645\u062f\u0644',
        '\u062c\u0641\u062a',
        '\u06a9\u0627\u0644\u0627',
        '\u0645\u062d\u0635\u0648\u0644',
        '\u062c\u0646\u0633',
        '\u0628\u0631\u0646\u062f',
        '\u0645\u0627\u0631\u06a9',
        '\u0627\u0635\u0644',
        '\u0627\u0648\u0631\u062c\u06cc\u0646\u0627\u0644',
        '\u0627\u0648\u0631\u062c\u06cc\u0646\u0627\u0644\u0650',
        'original',
        'size',
        'model',
      ]),
      me = [
        [/sh/g, '\u0634'],
        [/ch/g, '\u0686'],
        [/kh/g, '\u062e'],
        [/ph/g, '\u0641'],
        [/th/g, '\u062a'],
        [/gh/g, '\u0642'],
        [/ck/g, '\u06a9'],
        [/x/g, '\u06a9\u0633'],
        [/c(?=[eiy])/g, '\u0633'],
      ],
      de = {
        b: '\u0628',
        p: '\u067e',
        t: '\u062a',
        d: '\u062f',
        s: '\u0633',
        c: '\u06a9',
        k: '\u06a9',
        q: '\u06a9',
        g: '\u06af',
        f: '\u0641',
        j: '\u062c',
        z: '\u0632',
        l: '\u0644',
        m: '\u0645',
        n: '\u0646',
        r: '\u0631',
        h: '\u0647',
      },
      fe = {
        '\u062b': '\u0633',
        '\u0635': '\u0633',
        '\u0630': '\u0632',
        '\u0636': '\u0632',
        '\u0638': '\u0632',
        '\u0637': '\u062a',
        '\u062d': '\u0647',
        '\u0642': '\u06a9',
        '\u063a': '\u06a9',
        '\u0629': '\u0647',
      };
    function ge(n) {
      let r = (0, t.normalizeName)(n).replace(/ /g, '');
      if (/\d/.test(r)) return r;
      for (const [t, n] of me) r = r.replace(t, n);
      return [...r]
        .map((t) => de[t] ?? fe[t] ?? t)
        .filter(
          (t) =>
            !/[aeiouyvw\u0627\u0622\u0623\u0625\u06cc\u064a\u0648\u0624\u0626\u0621\u0639\u0647\u200c]/.test(
              t,
            ),
        )
        .join('');
    }
    const pe = (n) =>
        (0, t.normalizeName)(n)
          .split(' ')
          .filter((t) => t && !ue.has(t)),
      he = (t, n) =>
        t === n ||
        (!/\d/.test(t + n) &&
          t.length >= 3 &&
          n.length >= 3 &&
          ge(t).length >= 2 &&
          ge(t) === ge(n));
    function ve(t, n) {
      const r = pe(t),
        i = pe(n);
      if (!r.length || !i.length) return 0;
      const o = (t) => t.filter((t) => /\d/.test(t));
      if (o(r).length && o(i).length && !o(i).every((t) => o(r).includes(t)))
        return 0;
      const a = r.filter((t) => i.some((n) => he(t, n))).length,
        l = i.filter((t) => r.some((n) => he(n, t))).length;
      if (
        !a ||
        !r
          .concat(i)
          .some(
            (t) =>
              t.length >= 3 &&
              r.some((n) => he(n, t)) &&
              i.some((n) => he(n, t)),
          )
      )
        return 0;
      if (l === i.length && a / r.length >= 0.5) return a / r.length;
      if (a === r.length && l / i.length >= 0.5) return l / i.length;
      const c = a / Math.max(r.length, i.length);
      return c >= 0.6 ? c : 0;
    }
    function ze(t, n) {
      const r = t
        .map((t) => ({ p: t, score: ve(n, t.name) }))
        .filter((t) => t.score > 0)
        .sort((t, n) => n.score - t.score);
      return r.length && (1 === r.length || r[0].score - r[1].score >= 0.05)
        ? r[0].p
        : void 0;
    }
    const ke = {
      '\u0648\u0627\u0646': '1',
      '\u062a\u0648': '2',
      '\u062a\u0631\u06cc': '3',
      '\u0641\u0648\u0631': '4',
      '\u0641\u0627\u06cc\u0648': '5',
      '\u0633\u06cc\u06a9\u0633': '6',
      '\u0633\u0648\u0646': '7',
      '\u0646\u0627\u06cc\u0646': '9',
      '\u062a\u0646': '10',
    };
    function Ne(t, n) {
      const r = (t) => pe(j(t)).map((t) => ke[t] || t),
        i = r(t),
        o = r(n),
        a = (t) =>
          t
            .filter((t) => /\d/.test(t))
            .sort()
            .join(' ');
      if (a(i) && a(o) && a(i) !== a(o)) return !0;
      if (
        v(i.join(' '), o.join(' ')) >= z ||
        (i.join('').length >= 4 && o.join('').startsWith(i.join('')))
      )
        return !1;
      const l = (t, n) =>
        he(t, n) ||
        (!/\d/.test(t + n) && t.length >= 3 && n.length >= 3 && v(t, n) >= 0.6);
      return i.some((t) => !o.some((n) => l(t, n)));
    }
    function be(t, n) {
      const r = pe(n).join('');
      if (r.length < 4 || /\d/.test(r)) return;
      const i = t.filter((t) => {
        const n = pe(t.name).join('');
        return (
          n.length > r.length && n.startsWith(r) && r.length / n.length >= 0.4
        );
      });
      return 1 === i.length ? i[0] : void 0;
    }
    const xe = ['kg', 'g', 'l', 'ml', 'm'],
      Se = [
        null,
        void 0,
        'piece',
        'bottle',
        'pack',
        'box',
        'can',
        'bag',
        'sack',
        'carton',
      ],
      ye = {
        '\u06cc\u06a9 \u0648 \u0646\u06cc\u0645': 1.5,
        '\u062f\u0648 \u0648 \u0646\u06cc\u0645': 2.5,
        '\u0646\u06cc\u0645': 0.5,
        '\u06cc\u06a9': 1,
        '\u06cc\u0647': 1,
        '\u062f\u0648': 2,
        '\u0633\u0647': 3,
        '\u0686\u0647\u0627\u0631': 4,
        '\u067e\u0646\u062c': 5,
        '\u0634\u0634': 6,
        '\u062f\u0647': 10,
      },
      we =
        /(?:^|\s)([0-9\u06f0-\u06f9\u0660-\u0669]+(?:[.\u066b/][0-9\u06f0-\u06f9\u0660-\u0669]+)?|\u06cc\u06a9 \u0648 \u0646\u06cc\u0645|\u062f\u0648 \u0648 \u0646\u06cc\u0645|\u0646\u06cc\u0645|\u06cc\u06a9|\u06cc\u0647|\u062f\u0648|\u0633\u0647|\u0686\u0647\u0627\u0631|\u067e\u0646\u062c|\u0634\u0634|\u062f\u0647)\s*(\u0645\u06cc\u0644\u06cc[\u200c ]?\u0644\u06cc\u062a\u0631\u06cc?|\u0633\u06cc[\u200c ]?\u0633\u06cc|\u0644\u06cc\u062a\u0631\u06cc?|\u06a9\u06cc\u0644\u0648(?:\u06af\u0631\u0645\u06cc?|\u06cc\u06cc|\u06cc)?|\u06af\u0631\u0645\u06cc?)(?=$|\s)/,
      Pe =
        /(?:^|\s)(\u06a9\u06cc\u0644\u0648\u06cc\u06cc|\u0644\u06cc\u062a\u0631\u06cc)(?=$|\s)/;
    function Me(t) {
      if (void 0 !== ye[t]) return ye[t];
      const n = t
        .replace(/[\u06f0-\u06f9]/g, (t) => String(t.charCodeAt(0) - 1776))
        .replace(/[\u0660-\u0669]/g, (t) => String(t.charCodeAt(0) - 1632))
        .replace('\u066b', '.');
      if (n.includes('/')) {
        const [t, r] = n.split('/').map(Number);
        return r ? t / r : NaN;
      }
      return Number(n);
    }
  },
  452,
  [439, 453, 432, 441],
);
