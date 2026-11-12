// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 464; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, _a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'isPacked', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.normalizedLine = d),
      (e.saidLine = a),
      (e.saidAlive = s),
      (e.grossOf = f),
      (e.lineDiscount = m),
      (e.previewCart = function (n, r, c, u) {
        const o = n.map((t) => {
          const n = f(t, c);
          return { gross: n, discount: c && u ? m(t, n) : null };
        });
        return (0, t.priceSale)(o, c && u ? (0, t.cleanDiscount)(r) : null);
      }),
      (e.bodyLines = function (n, r, c) {
        return n.map((n) => {
          const u = d(n, r),
            o = {
              productId: x(n.product),
              name: n.product.name,
              quantity: u.quantity,
            };
          if (!r)
            return {
              ...o,
              ...(void 0 === u.price || l(n) ? {} : { unitCost: u.price }),
              ...(n.expiresAt ? { expiresAt: n.expiresAt } : {}),
            };
          const a =
            c && void 0 !== u.price
              ? m(n, (0, t.lineGross)(u.quantity, u.price))
              : null;
          return {
            ...o,
            ...(void 0 !== u.price ? { unitPrice: u.price } : {}),
            ...(a ? { discount: a } : {}),
          };
        });
      }),
      Object.defineProperty(e, 'missingCostLines', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      (e.discountLimit = function (t) {
        if (!t) return 0;
        if ('owner' === t.role || 'manager' === t.role) return 100;
        if ('staff' !== t.role || !t.access?.do?.discount) return 0;
        const n = Number(t.access.do.discountMax);
        return Number.isFinite(n) && n > 0 ? Math.min(100, n) : 0;
      }),
      Object.defineProperty(e, 'overLimit', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      (e.withUnit = v),
      (e.addProduct = P),
      (e.splitLine = function (t, r, c, u) {
        try {
          const o = (0, n.parseQuantity)(t.quantity),
            d = (0, n.parseQuantity)(r);
          return d < o
            ? [
                { ...t, quantity: String((0, n.q3)(o - d)), discount: void 0 },
                { ...t, id: u, quantity: String(d), discount: c },
              ]
            : null;
        } catch {
          return null;
        }
      }),
      (e.canAutoFocusWedge = function (t) {
        return !(
          'web' !== t.os ||
          !t.finePointer ||
          t.coarse ||
          (t.touchPoints && t.touchPoints > 0)
        );
      }),
      (e.addToPicks = function (t, r, c) {
        let u = { ...t },
          o = 0;
        for (const t of r) {
          const r = c.find((n) => n.id === t.productId && !n.archivedAt),
            d = Number(t.qty);
          if (!(r && d > 0)) continue;
          const a = t.unit || void 0,
            s = r.unit || 'piece',
            p = (u[r.id]?.unit || s) === (a || s);
          let f;
          try {
            f = (0, n.q3)(d);
          } catch {
            continue;
          }
          ((u = {
            ...u,
            [r.id]:
              p && u[r.id]
                ? { ...u[r.id], quantity: (0, n.q3)(u[r.id].quantity + f) }
                : { quantity: f, ...(a && a !== s ? { unit: a } : {}) },
          }),
            o++);
        }
        return { picks: u, added: o };
      }),
      Object.defineProperty(e, 'MEASURED_UNITS', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(e, 'isMeasured', {
        enumerable: !0,
        get: function () {
          return q;
        },
      }),
      Object.defineProperty(e, 'smallUnit', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }),
      (e.addPicked = O),
      (e.stepPick = function (t, r, c) {
        const u = t[r]?.quantity || 0,
          o = Math.max(0, (0, n.q3)(u + c)),
          d = { ...t };
        return (
          delete d[r],
          o > 0 ? { ...d, [r]: { ...t[r], quantity: o } } : d
        );
      }),
      (e.pickedSummary = function (t, n, r, c) {
        let u = 0,
          o = 0;
        for (const d of n) {
          const n = t[d.id];
          if (!n) continue;
          o++;
          const [a] = O([], d, n, 'x', r, c?.(d.id));
          a && (u += f(a, r));
        }
        return { count: o, total: u };
      }),
      Object.defineProperty(e, 'customerName', {
        enumerable: !0,
        get: function () {
          return N;
        },
      }),
      Object.defineProperty(e, 'needsCustomer', {
        enumerable: !0,
        get: function () {
          return C;
        },
      }),
      (e.customerBody = function (t) {
        const { contactId: n, method: r } = t,
          c = (t.buyerName || '').trim().slice(0, 60);
        if (C(r) && !n) throw Error('customer_required');
        if (!n)
          return { ...(c ? { buyerName: c } : {}), payment: { method: r } };
        const u =
          t.paidToman && t.paidToman > 0
            ? { paidToman: Math.round(t.paidToman) }
            : {};
        return {
          contactId: n,
          payment: {
            method: r,
            ...('credit' === r || 'cheque' === r ? u : {}),
            ...('cheque' === r && t.cheque ? { cheque: t.cheque } : {}),
          },
        };
      }),
      (e.rememberCustomer = function (t, n, r = 8) {
        const c = n.name.trim().slice(0, 100);
        if (!c) return t;
        const u = (t) => (t.id ? 'id:' + t.id : 'name:' + t.name.trim()),
          o = { ...(n.id ? { id: n.id } : {}), name: c };
        return [
          o,
          ...t.filter((t) => t && 'string' == typeof t.name && u(t) !== u(o)),
        ].slice(0, r);
      }),
      (e.customerChoices = function (t, n, r, c = 40) {
        const u = r.trim(),
          o = (t) =>
            t
              .replace(/\u064a/g, '\u06cc')
              .replace(/\u0643/g, '\u06a9')
              .replace(/\s+/g, ' ')
              .trim()
              .toLowerCase(),
          d = (t) =>
            !u ||
            o(t.name).includes(o(u)) ||
            (!!t.phone && t.phone.includes(u)),
          a = t.filter((t) => !t.archivedAt),
          s = new Set(),
          p = [];
        for (const t of n) {
          const n = t.id ? a.find((n) => n.id === t.id) : void 0;
          n
            ? !s.has(n.id) &&
              d(n) &&
              (s.add(n.id), p.push({ kind: 'contact', contact: n, recent: !0 }))
            : t.id ||
              s.has('n:' + t.name) ||
              !d({ name: t.name }) ||
              (s.add('n:' + t.name), p.push({ kind: 'name', name: t.name }));
        }
        const f = a
          .filter((t) => !s.has(t.id) && d(t))
          .sort(
            (t, n) =>
              Number(!!n.favorite) - Number(!!t.favorite) ||
              t.name.localeCompare(n.name, 'fa'),
          );
        for (const t of f) p.push({ kind: 'contact', contact: t, recent: !1 });
        return p.slice(0, c);
      }),
      (e.cartShortages = function (t, n = (t) => Number(t.stock) || 0) {
        const r = new Map();
        for (const n of t) {
          if ('made' === n.product.kind) continue;
          let t;
          try {
            t = d(n, !0).quantity;
          } catch {
            continue;
          }
          if (!(t > 0)) continue;
          const c = r.get(n.product.id);
          c
            ? (c.milli += j(t))
            : r.set(n.product.id, { product: n.product, milli: j(t) });
        }
        const c = [];
        for (const { product: t, milli: u } of r.values()) {
          const r = Number(n(t)) || 0;
          u <= j(r) ||
            c.push({
              product: t,
              need: u / 1e3,
              stock: r,
              missing: (u - j(r)) / 1e3,
              unit: t.unit || 'piece',
            });
        }
        return c;
      }),
      (e.partyContacts = function (t, n) {
        return t.filter((t) => !t.kind || 'both' === t.kind || t.kind === n);
      }),
      Object.defineProperty(e, 'NEW_PRODUCT_PREFIX', {
        enumerable: !0,
        get: function () {
          return w;
        },
      }),
      Object.defineProperty(e, 'isNewProduct', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }),
      Object.defineProperty(e, 'realId', {
        enumerable: !0,
        get: function () {
          return x;
        },
      }),
      (e.newProductOf = T),
      Object.defineProperty(e, 'newProductData', {
        enumerable: !0,
        get: function () {
          return I;
        },
      }),
      (e.newProductLine = function (t, n, r = n) {
        const c = T(t, n);
        return {
          id: r,
          product: c,
          quantity: String(t.quantity),
          unit: c.unit || 'piece',
          ...(void 0 !== t.costPrice ? { unitCost: String(t.costPrice) } : {}),
        };
      }),
      (e.newProductBody = function (t) {
        const n = I(t.product);
        let r = n.costPrice;
        try {
          const n = d(t, !1);
          void 0 === n.price || l(t) || (r = n.price);
        } catch {}
        return {
          name: n.name,
          kind: 'simple',
          unit: n.unit,
          ...(void 0 !== n.price ? { price: n.price } : {}),
          ...(void 0 !== r && r > 0 ? { costPrice: r } : {}),
        };
      }),
      Object.defineProperty(e, 'nameTaken', {
        enumerable: !0,
        get: function () {
          return F;
        },
      }),
      (e.lastBoughtMap = function (t) {
        const n = new Map();
        for (const r of t) {
          if (
            'received' !== r.kind ||
            !(Number(r.unitCost) > 0) ||
            r.correctsMovementId
          )
            continue;
          const t = r.timestamp || '',
            c = n.get(r.productId);
          (!c || t > c.at) &&
            n.set(r.productId, { at: t, price: Number(r.unitCost) });
        }
        return n;
      }),
      Object.defineProperty(e, 'lastBuyPrice', {
        enumerable: !0,
        get: function () {
          return A;
        },
      }),
      (e.buyPriceChange = function (t, n, r) {
        if (M(n.product) || void 0 === r || !(r > 0)) return null;
        const c = String(n.unitCost ?? '').trim(),
          u = Number(c);
        if (!(c && u > 0)) return null;
        const o = (t) => {
            if (!l(t))
              try {
                return d(t, !1).price;
              } catch {
                return;
              }
          },
          a = o(n),
          s = o(t);
        if (
          !(void 0 !== a && a > 0) ||
          (void 0 !== s && Math.abs(s - a) < 1e-6) ||
          Math.abs(a - r) < 1e-6
        )
          return null;
        const p = E((r * u) / a);
        return { old: p, typed: u, revert: String(p) };
      }),
      Object.defineProperty(e, 'TIER_KEYS', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      Object.defineProperty(e, 'tierOptions', {
        enumerable: !0,
        get: function () {
          return _;
        },
      }),
      Object.defineProperty(e, 'rememberedTier', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }),
      Object.defineProperty(e, 'needsTierChoice', {
        enumerable: !0,
        get: function () {
          return U;
        },
      }),
      Object.defineProperty(e, 'tierPrice', {
        enumerable: !0,
        get: function () {
          return z;
        },
      }),
      Object.defineProperty(e, 'addPriceOf', {
        enumerable: !0,
        get: function () {
          return B;
        },
      }),
      (e.applyTier = function (t, n, r) {
        return void 0 !== r && Number.isFinite(r)
          ? t.map((t) => {
              if (t.product.id !== n || void 0 !== t.discount?.newPrice)
                return t;
              const c = t.product.unit || 'piece';
              if (s(t)) {
                const n = a(t.said, r, t.product);
                if (n)
                  return {
                    ...t,
                    unitPrice: String(r),
                    quantity: String(n.quantity),
                  };
              }
              return t.unit === c
                ? {
                    ...t,
                    unitPrice: String(r),
                    ...(void 0 !== t.said ? { said: void 0 } : {}),
                  }
                : v({ ...t, unit: c, unitPrice: String(r) }, t.unit, !0);
            })
          : t;
      }),
      Object.defineProperty(e, 'shortTierName', {
        enumerable: !0,
        get: function () {
          return Q;
        },
      }),
      (e.lineTierName = function (t, n = t.product) {
        let r;
        try {
          r = d(t, !0).price;
        } catch {
          return '';
        }
        if (void 0 === r || !Number.isFinite(r)) return '';
        const c = _(n);
        if (c.length < 2) return '';
        if (c.some((t) => 'default' === t.key && Math.abs(t.price - r) < 1e-6))
          return '';
        const u = c.find(
          (t) => 'default' !== t.key && Math.abs(t.price - r) < 1e-6,
        );
        return u ? Q(u.name) : '';
      }),
      (e.priceChoiceOf = function (t, n) {
        const r = _(t);
        if (r.length < 2) return null;
        if (void 0 === n || !Number.isFinite(n))
          return {
            options: r,
            current: r.some((t) => 'default' === t.key) ? 'default' : void 0,
            typed: !1,
          };
        const c = (t) => Math.abs(t.price - n) < 1e-6,
          u = r.find((t) => 'default' === t.key && c(t)) || r.find(c);
        return u
          ? { options: r, current: u.key, typed: !1 }
          : { options: r, typed: !0 };
      }),
      (e.boxPrice = function (t) {
        const n = String(t ?? '')
          .replace(/[\u06f0-\u06f9]/g, (t) =>
            String(
              '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                t,
              ),
            ),
          )
          .replace(/[\u0660-\u0669]/g, (t) =>
            String(
              '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
                t,
              ),
            ),
          )
          .replace(/[\u066b/]/g, '.')
          .replace(/[\u066c,\s]/g, '');
        return /^\d+(?:\.\d+)?$/.test(n) ? Number(n) : void 0;
      }),
      Object.defineProperty(e, 'manualPricePick', {
        enumerable: !0,
        get: function () {
          return R;
        },
      }),
      Object.defineProperty(e, 'manualPriceTyped', {
        enumerable: !0,
        get: function () {
          return K;
        },
      }),
      (e.manualDefaultPrice = function ({
        canManage: t,
        kind: n,
        price: r,
        priceKey: c,
      }) {
        return t && r ? (c && 'default' !== c ? void 0 : Number(r)) : void 0;
      }));
    var t = _r(_d[0]),
      n = _r(_d[1]),
      r = _r(_d[2]),
      c = _r(_d[3]),
      u = _r(_d[4]);
    const o = (t) =>
      t.product.packUnit === t.unit && t.unit !== (t.product.unit || 'piece');
    function d(t, c) {
      const u = (0, n.parseQuantity)(t.quantity),
        d = c ? t.unitPrice : t.unitCost,
        s = void 0 === d ? void 0 : Number(d || 0),
        p = t.product.unit || 'piece',
        f =
          c && void 0 !== t.said && t.unit === p
            ? a(t.said, s, t.product)
            : void 0;
      if (f && f.quantity === u) return { quantity: u, price: f.unitPrice };
      if (!o(t) && t.unit !== p) {
        const n = (0, r.fixedFactor)(t.unit, p);
        if (!n) throw Error('invalid');
        return {
          quantity: (0, r.convertFixed)(u, t.unit, p),
          price:
            void 0 === s
              ? void 0
              : 'multiply' in n
                ? s / n.multiply
                : s * n.divide,
        };
      }
      if (!o(t)) return { quantity: u, price: s };
      if (!t.product.packSize) throw Error('invalid');
      return {
        quantity: (0, n.convertPack)(u, t.product.packSize),
        price: void 0 === s ? void 0 : s / t.product.packSize,
      };
    }
    function a(t, n, r) {
      const c = (0, u.measureOf)(r.unit);
      return c ? (0, u.fromMoney)(t, n, c) : void 0;
    }
    function s(t) {
      if (
        void 0 === t.said ||
        t.unit !== (t.product.unit || 'piece') ||
        void 0 === t.unitPrice
      )
        return !1;
      const n = a(t.said, Number(t.unitPrice), t.product);
      return !!n && n.quantity === S(t.quantity);
    }
    function p(t, n) {
      const c = t.unit || 'piece';
      if (n === c) return [1, 1];
      if (t.packUnit === n && t.packSize) return [t.packSize, 1];
      const u = (0, r.fixedFactor)(n, c);
      return u ? ('multiply' in u ? [u.multiply, 1] : [1, u.divide]) : [1, 1];
    }
    function f(n, r) {
      try {
        const c = d(n, r);
        return void 0 === c.price ? 0 : (0, t.lineGross)(c.quantity, c.price);
      } catch {
        return 0;
      }
    }
    function m(n, r = f(n, !0)) {
      const c = n.discount;
      if (!(c && r > 0)) return null;
      if (void 0 !== c.newPrice) {
        const u = f({ ...n, unitPrice: c.newPrice, discount: void 0 }, !0);
        return (0, t.cleanDiscount)({
          kind: 'amount',
          value: Math.max(0, r - u),
          ...(c.reason ? { reason: c.reason } : {}),
        });
      }
      return (0, t.cleanDiscount)({
        kind: c.kind,
        value: c.value,
        ...(c.reason ? { reason: c.reason } : {}),
      });
    }
    const l = (t) => void 0 === t.unitCost || '' === String(t.unitCost).trim(),
      y = (t) => t.filter(l);
    const b = (t, n) =>
      n < 100 && t.discount > 0 && 100 * t.discount > t.gross * n;
    function v(t, n, r) {
      const [c, u] = p(t.product, n),
        [o, d] = p(t.product, t.unit),
        a = c * d,
        s = u * o,
        f = (t) =>
          void 0 !== t && '' !== t && a !== s ? String((Number(t) * a) / s) : t;
      return {
        ...t,
        unit: n,
        ...(r ? { unitPrice: f(t.unitPrice) } : { unitCost: f(t.unitCost) }),
        ...(void 0 !== t.discount?.newPrice
          ? { discount: { ...t.discount, newPrice: f(t.discount.newPrice) } }
          : {}),
      };
    }
    function P(t, r, c, u, o) {
      const d = t.find((t) => t.product.id === r.id && !t.discount);
      if (d)
        return t.map((t) =>
          t === d
            ? { ...t, quantity: String((0, n.q3)(Number(t.quantity || 0) + 1)) }
            : t,
        );
      const a = r.avgCost ?? r.costPrice,
        s = o ?? r.price;
      return [
        ...t,
        {
          id: c,
          product: r,
          quantity: '1',
          unit: r.unit || 'piece',
          unitPrice:
            void 0 !== s ? String(s) : void 0 !== u ? String(u) : void 0,
          unitCost: void 0 === a ? void 0 : String(a),
        },
      ];
    }
    const h = ['kg', 'g', 'l', 'ml', 'm', 'km'],
      q = (t) => h.includes(t.unit || 'piece'),
      k = (t) =>
        'kg' === t ? 'g' : 'l' === t ? 'ml' : 'km' === t ? 'm' : null,
      S = (t) => {
        try {
          return (0, n.parseQuantity)(t);
        } catch {
          return 0;
        }
      };
    function O(t, r, c, u, o, d, s) {
      const p = r.unit || 'piece',
        f = c.unit || p;
      let m;
      try {
        m = (0, n.q3)(c.quantity);
      } catch {
        return t;
      }
      if (!(m > 0)) return t;
      const l =
        void 0 === c.said
          ? t.find(
              (t) =>
                t.product.id === r.id &&
                !t.discount &&
                t.unit === f &&
                void 0 === t.said,
            )
          : void 0;
      if (l)
        return t.map((t) =>
          t === l
            ? { ...t, quantity: String((0, n.q3)(S(t.quantity) + m)) }
            : t,
        );
      const y = {
        ...P([], r, u, d, s)[0],
        quantity: String(m),
        ...(o && void 0 !== c.said && f === p ? { said: c.said } : {}),
      };
      if (void 0 !== y.said) {
        const t = a(
          y.said,
          void 0 === y.unitPrice ? void 0 : Number(y.unitPrice),
          r,
        );
        t ? (y.quantity = String(t.quantity)) : delete y.said;
      }
      return [...t, f === p ? y : v(y, f, o)];
    }
    const N = (t, n) => (t || '').trim() || (n || '').trim(),
      C = (t) => 'credit' === t || 'cheque' === t;
    const j = (t) => Math.round(1e3 * t);
    const w = 'new:',
      M = (t) => t.id.startsWith(w),
      x = (t) => (M(t) ? t.id.slice(w.length) : t.id);
    function T(t, n) {
      return {
        id: w + n,
        name: t.name.trim(),
        detail: '',
        stock: 0,
        unit: t.unit,
        kind: 'simple',
        ...(void 0 !== t.costPrice ? { costPrice: t.costPrice } : {}),
        ...(void 0 !== t.price ? { price: t.price } : {}),
      };
    }
    const I = (t) => ({
      name: t.name,
      unit: t.unit || 'piece',
      ...(void 0 !== t.costPrice ? { costPrice: t.costPrice } : {}),
      ...(void 0 !== t.price ? { price: t.price } : {}),
    });
    const F = (t, n, r) => {
      const c = r(t.trim());
      return !!c && n.some((t) => !t.archivedAt && r(t.name) === c);
    };
    const A = (t, n) => n.get(t.id)?.price ?? t.avgCost ?? t.costPrice,
      E = (t) => Math.round(1e4 * t) / 1e4;
    const L = ['default', 'extra1', 'extra2', 'extra3', 'extra4'],
      _ = (t) =>
        (0, c.salePriceOptions)(t).filter(
          (t) => 'number' == typeof t.price && Number.isFinite(t.price),
        ),
      D = (t, n) => {
        const r = n[t.id];
        return r && _(t).some((t) => t.key === r) ? r : void 0;
      },
      U = (t, n) => _(t).length > 1 && !D(t, n),
      z = (t, n) => _(t).find((t) => t.key === n)?.price,
      B = (t, n) => {
        const r = D(t, n);
        return r && 'default' !== r ? z(t, r) : void 0;
      };
    const Q = (t) =>
      t.replace(/^\s*\u0642\u06cc\u0645\u062a\s+/, '').trim() || t.trim();
    const R = (t, n) =>
        'default' === t ? { price: '' } : { price: String(n), priceKey: t },
      K = (t) => ({ price: t });
  },
  464,
  [460, 431, 432, 441, 459],
);
