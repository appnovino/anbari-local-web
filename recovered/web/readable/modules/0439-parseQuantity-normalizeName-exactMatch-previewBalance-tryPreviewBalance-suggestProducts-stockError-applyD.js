// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 439; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'parseQuantity', {
        enumerable: !0,
        get: function () {
          return n.parseQuantity;
        },
      }),
      Object.defineProperty(e, 'normalizeName', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (e.exactMatch = u),
      (e.previewBalance = f),
      (e.tryPreviewBalance = function (t, o) {
        if (!o.name?.trim()) return;
        try {
          return f(t, o);
        } catch {
          return;
        }
      }),
      (e.suggestProducts = function (t, o, n = 6) {
        const c = s(o);
        if (!c || n <= 0) return [];
        const d = t.filter((t) => !t.archivedAt),
          u = d.filter((t) => s(t.name).startsWith(c)),
          m = d.filter((t) => !u.includes(t) && s(t.name).includes(c));
        return [...u, ...m].slice(0, n);
      }),
      (e.stockError = k),
      (e.applyDraft = v),
      (e.madeStockAfter = w),
      Object.defineProperty(e, 'COUNT_MAX', {
        enumerable: !0,
        get: function () {
          return E;
        },
      }),
      (e.applyDraftBatch = function (t, o, n, c = 'voice', d = {}) {
        if (
          !o.length ||
          o.length > (o.every((t) => 'count' === t.kind) ? E : 20)
        )
          throw new Error('invalid');
        const s = [],
          u = o.reduce(
            (t, o, u) =>
              v(
                t,
                o,
                n + '-' + u,
                c,
                d.fill
                  ? { allowNegative: !0, fill: !0 }
                  : d.allowNegative
                    ? { allowNegative: !0 }
                    : { short: s },
              ),
            t,
          );
        if (s.length) throw k(s);
        return {
          ...u,
          movements: u.movements.map((o, c) =>
            c < t.movements.length ? o : { ...o, batchId: n },
          ),
        };
      }),
      (e.validateImportRows = _),
      (e.applyImport = function (t, o, c, d = 'excel') {
        const m = _(o);
        let l = {
          ...t,
          products: [...t.products],
          movements: [...t.movements],
        };
        for (const [t, o] of m.entries()) {
          const m = u(l.products, o.name, o.barcode),
            f = m?.id,
            k = (0, n.subQuantity)(o.stock, m?.stock ?? 0);
          (k
            ? (l = v(
                l,
                {
                  name: o.name,
                  quantity: Math.abs(k),
                  kind: k > 0 ? 'received' : 'sold',
                  barcode: o.barcode,
                },
                c + '-' + t,
                d,
              ))
            : m ||
              l.products.push({
                id: 'product-' + c + '-' + t,
                name: o.name,
                detail: o.detail || '',
                stock: 0,
                barcode: o.barcode,
              }),
            (l.products = l.products.map((t) =>
              (f ? t.id === f : s(t.name) === s(o.name))
                ? {
                    ...p(t),
                    ...Object.fromEntries(
                      Object.entries(o).filter(([t]) =>
                        [
                          'category',
                          'photo',
                          'brand',
                          'size',
                          'color',
                          'model',
                          'price',
                          'costPrice',
                          'salePrices',
                        ].includes(t),
                      ),
                    ),
                    ...(o.barcode ? { barcode: o.barcode } : {}),
                    detail: o.detail || t.detail,
                  }
                : t,
            )));
        }
        return (
          (l.categories = [
            ...new Set([
              ...(t.categories || []),
              ...l.products.map((t) => t.category).filter((t) => !!t),
            ]),
          ]),
          l
        );
      }));
    var t = r(_d[0]),
      o = r(_d[1]),
      n = r(_d[2]),
      c = r(_d[3]),
      d = r(_d[4]);
    const s = (t) =>
      (0, o.latinDigits)(
        t
          .normalize('NFKC')
          .replace(/[\u200c\u200d\u00a0]/g, ' ')
          .replace(/[\u0640\u064b-\u065f\u0670]/g, ''),
      )
        .replace(/\u064a/g, '\u06cc')
        .replace(/\u0643/g, '\u06a9')
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase();
    function u(t, o, n) {
      const c = n?.trim() || void 0,
        d = c ? t.find((t) => t.barcode === c) : void 0,
        u = t.find((t) => s(t.name) === s(o));
      if (d && u && d.id !== u.id) throw Error('barcode_conflict');
      if (d && s(d.name) !== s(o)) throw Error('barcode_conflict');
      if (u?.barcode && c && u.barcode !== c) throw Error('barcode_conflict');
      return d ?? u;
    }
    function m(t, o) {
      const n = o.barcode?.trim() || void 0;
      if (void 0 !== o.productId) {
        const c = t.find((t) => t.id === o.productId);
        return c
          ? n && t.some((t) => t.id !== c.id && t.barcode === n)
            ? { error: 'barcode_conflict' }
            : { product: c }
          : { error: 'product_changed' };
      }
      try {
        return { product: u(t, o.name, n) };
      } catch (t) {
        if (t instanceof Error && 'barcode_conflict' === t.message)
          return { error: 'barcode_conflict' };
        throw t;
      }
    }
    function l(c, d, s) {
      if (void 0 !== c.timestamp && !(0, o.validTimestamp)(c.timestamp))
        throw Error('invalid_date');
      const u =
          'string' == typeof c.name ? c.name.trim().replace(/\s+/g, ' ') : '',
        m = c.barcode?.trim();
      if (
        !u ||
        u.length > 100 ||
        !(0, n.validQuantity)(c.quantity) ||
        !['received', 'sold', 'used', 'waste', 'count'].includes(c.kind) ||
        (void 0 !== d && s.movements.some((t) => t.id === d)) ||
        (m && (m.length > 128 || /[\x00-\x1f]/.test(m)))
      )
        throw new Error('invalid');
      if (void 0 !== c.unit && !(0, t.isUnit)(c.unit)) throw Error('invalid');
      if (
        void 0 !== c.brand &&
        ('string' != typeof c.brand ||
          c.brand.length > 60 ||
          /[\x00-\x1f]/.test(c.brand))
      )
        throw Error('invalid');
      for (const t of [c.unitCost, c.unitPrice])
        if (void 0 !== t && (!Number.isFinite(t) || t < 0 || t > 999999999999))
          throw Error('invalid');
      if (
        void 0 !== c.expiresAt &&
        (!/^\d{4}-\d{2}-\d{2}$/.test(c.expiresAt) || 'received' !== c.kind)
      )
        throw Error('invalid');
      return { name: u, barcode: m };
    }
    function p(t) {
      if (!t.archivedAt) return t;
      const { archivedAt: o, ...n } = t;
      return n;
    }
    function f(t, o) {
      const { barcode: c, name: d } = l(o, void 0, t),
        s = m(t.products, { ...o, name: d, barcode: c });
      if (s.error) return { error: s.error };
      if ('count' === o.kind) {
        const t = s.product;
        if (!t) return { error: 'product_changed' };
        const n = h(t, o);
        return { before: t.stock, after: n, isNew: !1 };
      }
      const u = S(s.product, o),
        p = u?.stock ?? 0,
        f = y(u, o),
        k =
          'made' === u?.kind
            ? w(p, o.kind, f, !1)
            : 'received' === o.kind
              ? (0, n.addQuantity)(p, f)
              : (0, n.subQuantity)(p, f);
      return Math.abs(k) > n.QUANTITY_MAX
        ? { error: 'invalid' }
        : { before: p, after: k, isNew: !u };
    }
    function k(t) {
      const o = new Map();
      for (const c of t) {
        const t = o.get(c.productId);
        o.set(
          c.productId,
          t
            ? { ...t, after: c.after, wanted: (0, n.q3)(t.stock - c.after) }
            : c,
        );
      }
      const c = [...o.values()];
      return Object.assign(new Error('insufficient_stock'), {
        details: {
          productId: c[0].productId,
          name: c[0].name,
          stock: c[0].stock,
          unit: c[0].unit,
          lines: c,
          oversell: 'ask',
        },
      });
    }
    function v(t, d, s, u = 'manual', f = {}) {
      const { barcode: h, name: E } = l(d, s, t),
        A = m(t.products, { ...d, name: E, barcode: h });
      if (A.error) throw Error(A.error);
      if ('count' === d.kind) return b(t, d, A.product, s, u);
      const I = A.product,
        P = I
          ? S(p(I), d)
          : {
              id: 'product-' + s,
              name: E,
              detail: '',
              stock: 0,
              unit: d.unit || 'piece',
              kind: 'simple',
              createdAt: new Date().toISOString(),
              ...(d.brand?.trim() ? { brand: d.brand.trim() } : {}),
              ...(d.model?.trim()
                ? {
                    model: d.model.trim().slice(0, 100),
                    ...(d.size?.trim()
                      ? { size: d.size.trim().slice(0, 60) }
                      : {}),
                    ...(d.color?.trim()
                      ? { color: d.color.trim().slice(0, 60) }
                      : {}),
                  }
                : {}),
            },
        x = y(P, d),
        z = 'made' === P.kind,
        q = z && 'received' === d.kind && 'production' === u,
        M = z && 'received' !== d.kind && P.stock > 0,
        Q = !z || q || M,
        N = z
          ? w(P.stock, d.kind, x, q)
          : 'received' === d.kind
            ? (0, n.addQuantity)(P.stock, x)
            : (0, n.subQuantity)(P.stock, x);
      if (Math.abs(N) > n.QUANTITY_MAX) throw new Error('invalid');
      if (
        f.fill &&
        !['json', 'excel', 'csv'].includes(u) &&
        (0, c.stockShortage)({
          kind: d.kind,
          quantity: x,
          stock: P.stock,
          tracksStock: !z,
        })
      ) {
        const c = d.timestamp
            ? new Date(Date.parse(d.timestamp) - 1e3).toISOString()
            : new Date().toISOString(),
          m = (0, n.q3)(x - P.stock),
          l = { ...P, stock: x },
          p = {
            id: s + '-fill',
            productId: P.id,
            name: P.name,
            kind: 'count',
            quantity: m,
            timestamp: c,
            recordedAt: new Date().toISOString(),
            timeZone: (0, o.deviceTimeZone)(),
            stockBefore: P.stock,
            stockAfter: x,
            stockEffect: m,
            tracksStock: !0,
            source: 'oversell',
          };
        return v(
          {
            ...t,
            products: I
              ? t.products.map((t) => (t.id === I.id ? l : t))
              : [...t.products, l],
            movements: [...t.movements, p],
          },
          { ...d, productId: P.id },
          s,
          u,
          { ...f, fill: !1 },
        );
      }
      if (
        !f.allowNegative &&
        !['json', 'excel', 'csv'].includes(u) &&
        (0, c.stockShortage)({
          kind: d.kind,
          quantity: x,
          stock: P.stock,
          tracksStock: !z,
        })
      ) {
        const t = {
          productId: P.id,
          name: P.name,
          unit: P.unit || 'piece',
          stock: P.stock,
          wanted: x,
          after: N,
        };
        if (!f.short) throw k([t]);
        f.short.push(t);
      }
      void 0 !== d.photo && _([{ name: P.name, stock: N, photo: d.photo }]);
      const O = {
        ...P,
        stock: N,
        ...(d.photo ? { photo: d.photo } : {}),
        ...(h ? { barcode: h } : {}),
      };
      return {
        ...t,
        products: I
          ? t.products.map((t) => (t.id === I.id ? O : t))
          : [...t.products, O],
        movements: [
          ...t.movements,
          {
            id: s,
            productId: P.id,
            name: P.name,
            kind: d.kind,
            quantity: x,
            timestamp: d.timestamp
              ? new Date(d.timestamp).toISOString()
              : new Date().toISOString(),
            recordedAt: new Date().toISOString(),
            timeZone: (0, o.deviceTimeZone)(),
            stockBefore: Q ? P.stock : 0,
            stockAfter: Q ? N : 0,
            stockEffect: Q
              ? z
                ? Math.round(1e3 * (N - P.stock)) / 1e3
                : 'received' === d.kind
                  ? x
                  : -x
              : 0,
            tracksStock: Q,
            source: u,
            ...(d.unit
              ? { enteredQuantity: d.quantity, enteredUnit: d.unit }
              : {}),
            ...(d.expiresAt ? { expiresAt: d.expiresAt } : {}),
            ...(void 0 !== d.unitPrice
              ? { unitPrice: d.unitPrice }
              : 'sold' === d.kind && void 0 !== I?.price
                ? { unitPrice: I.price }
                : {}),
            ...(void 0 !== d.unitCost
              ? { unitCost: d.unitCost }
              : 'received' !== d.kind && void 0 !== (I?.avgCost ?? I?.costPrice)
                ? { unitCost: I?.avgCost ?? I?.costPrice }
                : {}),
          },
        ],
      };
    }
    function h(t, o) {
      if (
        void 0 !== o.unit ||
        void 0 !== o.unitCost ||
        void 0 !== o.unitPrice ||
        void 0 !== o.expiresAt ||
        void 0 === o.countedStock ||
        void 0 === o.expectedStock ||
        !Number.isFinite(o.countedStock) ||
        o.countedStock < 0 ||
        o.countedStock > n.QUANTITY_MAX
      )
        throw Error('invalid');
      if (
        t.archivedAt ||
        'made' === t.kind ||
        Math.round(1e3 * t.stock) !== Math.round(1e3 * o.expectedStock)
      )
        throw Error('stock_changed');
      const c = (0, n.q3)(o.countedStock),
        d = (0, n.subQuantity)(c, t.stock);
      if (
        !d ||
        Math.round(1e3 * Math.abs(d)) !==
          Math.round(1e3 * (0, n.q3)(o.quantity))
      )
        throw Error('invalid');
      return c;
    }
    function b(t, c, d, s, u) {
      if (!d || t.movements.some((t) => t.id === s))
        throw Error(d ? 'invalid' : 'product_changed');
      const m = h(d, c),
        l = (0, n.subQuantity)(m, d.stock),
        p = new Date().toISOString();
      return {
        ...t,
        products: t.products.map((t) =>
          t.id === d.id ? { ...t, stock: m } : t,
        ),
        movements: [
          ...t.movements,
          {
            id: s,
            productId: d.id,
            name: d.name,
            kind: 'count',
            quantity: Math.abs(l),
            timestamp: c.timestamp ? new Date(c.timestamp).toISOString() : p,
            recordedAt: p,
            timeZone: (0, o.deviceTimeZone)(),
            stockBefore: d.stock,
            stockAfter: m,
            stockEffect: l,
            tracksStock: !0,
            source: u,
          },
        ],
      };
    }
    function w(t, o, c, d) {
      return 'received' === o
        ? d
          ? (0, n.addQuantity)(t, c)
          : t
        : t > 0
          ? Math.max(0, (0, n.subQuantity)(t, c))
          : t;
    }
    function S(o, n) {
      if (
        !(
          o &&
          n.unitSwitch &&
          n.unit &&
          n.unit !== (o.unit || 'piece') &&
          (0, t.unitSwitchable)(o, n.unit)
        )
      )
        return o;
      const { contentSize: c, contentUnit: d, ...s } = o;
      return { ...s, unit: n.unit };
    }
    function y(o, c) {
      if (!c.unit || !o || c.unit === (o.unit || 'piece'))
        return (0, n.q3)(c.quantity);
      if (o.packUnit === c.unit && void 0 !== o.packSize)
        return (0, n.convertPack)(c.quantity, o.packSize);
      if ((0, t.fixedFactor)(c.unit, o.unit || 'piece'))
        return (0, t.convertFixed)(c.quantity, c.unit, o.unit || 'piece');
      if (c.packSize && void 0 === o.packSize && 'made' !== o.kind)
        return (0, n.convertPack)(c.quantity, c.packSize);
      throw Error('invalid');
    }
    const E = 500;
    function _(o, c = 5e3) {
      if (!o.length || o.length > c) throw new Error('import_limit');
      const u = new Set(),
        m = new Set();
      return o.map((o) => {
        if (!o || 'object' != typeof o) throw new Error('import_invalid');
        const c = 'string' == typeof o.name ? o.name.trim() : '';
        if (
          (void 0 !== o.barcode && 'string' != typeof o.barcode) ||
          (void 0 !== o.detail && 'string' != typeof o.detail)
        )
          throw new Error('import_invalid');
        const l = o.barcode?.trim() || void 0;
        if (
          !c ||
          c.length > 100 ||
          'number' != typeof o.stock ||
          !Number.isFinite(o.stock) ||
          (0, n.q3)(o.stock) !== o.stock ||
          Math.abs(o.stock) > n.QUANTITY_MAX ||
          u.has(s(c)) ||
          (l && (l.length > 128 || m.has(l) || /[\x00-\x1f]/.test(l))) ||
          (o.detail && o.detail.length > 200)
        )
          throw new Error('import_invalid');
        (u.add(s(c)), l && m.add(l));
        const p = {};
        for (const t of ['category', 'brand', 'size', 'color', 'model'])
          if (void 0 !== o[t]) {
            if (
              'string' != typeof o[t] ||
              o[t].length > ('model' === t ? 100 : 60) ||
              /[\x00-\x1f]/.test(o[t])
            )
              throw Error('import_invalid');
            p[t] = o[t].trim();
          }
        for (const t of ['price', 'costPrice']) {
          const n = o[t];
          if (void 0 !== n) {
            if (
              'number' != typeof n ||
              !Number.isFinite(n) ||
              n < 0 ||
              n > 999999999999
            )
              throw Error('import_invalid');
            p[t] = n;
          }
        }
        if (void 0 !== o.unit) {
          if (!(0, t.isUnit)(o.unit)) throw Error('import_invalid');
          p.unit = o.unit;
        }
        if (void 0 !== o.kind) {
          if (!['simple', 'made'].includes(o.kind))
            throw Error('import_invalid');
          p.kind = o.kind;
        }
        if ((void 0 === o.packSize) != (void 0 === o.packUnit))
          throw Error('import_invalid');
        if (void 0 !== o.packSize) {
          if (!(0, n.validQuantity)(o.packSize) || !(0, t.isUnit)(o.packUnit))
            throw Error('import_invalid');
          ((p.packSize = o.packSize), (p.packUnit = o.packUnit));
        }
        if (!(0, t.validContent)(o)) throw Error('import_invalid');
        if (
          (void 0 !== o.contentSize &&
            ((p.contentSize = o.contentSize), (p.contentUnit = o.contentUnit)),
          void 0 !== o.salePrices)
        ) {
          let t;
          try {
            t = (0, d.cleanSalePrices)(o.salePrices);
          } catch {
            throw Error('import_invalid');
          }
          t?.length &&
            ((p.salePrices = t),
            !0 === o.salePricesAll && (p.salePricesAll = !0));
        }
        if (void 0 !== o.photo) {
          if (
            'string' != typeof o.photo ||
            o.photo.length > 7e5 ||
            (o.photo &&
              !/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/]+=*$/.test(
                o.photo,
              ))
          )
            throw Error('import_invalid');
          p.photo = o.photo;
        }
        return {
          name: c,
          stock: (0, n.q3)(o.stock),
          barcode: l,
          detail: o.detail?.trim() || '',
          ...p,
        };
      });
    }
  },
  439,
  [432, 440, 431, 433, 441],
);
