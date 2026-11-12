// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 886; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, e, _d2) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'BASKET_DRAFT_TTL_MS', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
      Object.defineProperty(e, 'MAX_OPEN_CARTS', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      Object.defineProperty(e, 'basketDraftKey', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.storedBasket = function (t, n = Date.now(), r = '') {
        return t.length
          ? JSON.stringify({
              at: new Date(n).toISOString(),
              ...(r ? { buyerName: r } : {}),
              lines: t.map(o),
            })
          : '';
      }),
      (e.restoreBasket = function (t, n, r = Date.now()) {
        if (!t) return [];
        try {
          const i = JSON.parse(t);
          return a(i.at, r)
            ? s(i.lines, n).map(({ id: t, discount: n, ...r }) => r)
            : [];
        } catch {
          return [];
        }
      }),
      (e.restoreBuyerName = d),
      Object.defineProperty(e, 'emptyCart', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      (e.storeCarts = function (n, r, c = Date.now()) {
        const a = n.filter((t) => t.lines.length).slice(0, i);
        if (!a.length) return '';
        const u = new Date(c).toISOString();
        return JSON.stringify({
          v: 2,
          active: a.some((t) => t.id === r) ? r : a[0].id,
          carts: a.map((n) => ({
            id: n.id,
            at: n.id !== r && n.at ? n.at : u,
            lines: n.lines.map(o),
            ...(n.buyerName ? { buyerName: n.buyerName } : {}),
            ...(n.contactName ? { contactName: n.contactName } : {}),
            ...(n.account ? { account: n.account } : {}),
            ...(n.payment ? { payment: n.payment } : {}),
            ...(n.when ? { when: n.when } : {}),
            ...(n.chequeDate ? { chequeDate: n.chequeDate } : {}),
            ...((0, t.cleanDiscount)(n.invoiceDiscount)
              ? { invoiceDiscount: (0, t.cleanDiscount)(n.invoiceDiscount) }
              : {}),
            ...(n.retry ? { retry: n.retry } : {}),
            ...(n.tiers && Object.keys(n.tiers).length
              ? { tiers: n.tiers }
              : {}),
          })),
        });
      }),
      (e.restoreCarts = h),
      (e.openCartCount = N),
      (e.openCartTotal = function (t, n, r, i = Date.now()) {
        return N(t, r, i) + N(n, r, i);
      }),
      (e.cartName = v),
      (e.cartLabel = function (t, n, r, i, c = String) {
        const o = v(t, n, r, i, c);
        return t.lines.length
          ? i('{name}\u060c {n} \u0642\u0644\u0645', {
              name: o,
              n: c(t.lines.length),
            })
          : o;
      }));
    var t = _r(_d2[0]),
      n = _r(_d2[1]);
    const r = 6048e5,
      i = 8,
      c = (t, n) => `basket:${n}:${t}`;
    function o(t) {
      return {
        ...(t.id ? { id: t.id } : {}),
        productId: t.product.id,
        quantity: t.quantity,
        unit: t.unit,
        ...(void 0 !== t.unitPrice ? { unitPrice: t.unitPrice } : {}),
        ...(void 0 !== t.unitCost ? { unitCost: t.unitCost } : {}),
        ...(t.expiresAt ? { expiresAt: t.expiresAt } : {}),
        ...(t.discount ? { discount: t.discount } : {}),
        ...((0, n.isNewProduct)(t.product)
          ? { newProduct: (0, n.newProductData)(t.product) }
          : {}),
        ...(void 0 !== t.said ? { said: t.said } : {}),
      };
    }
    function a(t, n) {
      const i = Date.parse(t || '');
      return Number.isFinite(i) && n - i <= r;
    }
    function u(t) {
      const r = t?.newProduct,
        i =
          'string' == typeof t?.productId &&
          (0, n.isNewProduct)({ id: t.productId })
            ? t.productId.slice(4)
            : '';
      if (!r || !i || 'string' != typeof r.name || !r.name.trim()) return;
      const c = (t) =>
          'number' == typeof t && Number.isFinite(t) && t >= 0 ? t : void 0,
        o = c(r.costPrice),
        a = c(r.price);
      return (0, n.newProductOf)(
        {
          name: r.name.slice(0, 200),
          unit: 'string' == typeof r.unit && r.unit ? r.unit : 'piece',
          ...(void 0 !== o ? { costPrice: o } : {}),
          ...(void 0 !== a ? { price: a } : {}),
        },
        i,
      );
    }
    function s(n, r) {
      if (!Array.isArray(n)) return [];
      const i = new Set();
      return n.flatMap((n, c) => {
        const o = u(n) || r.find((t) => t.id === n?.productId && !t.archivedAt);
        if (!o || 'string' != typeof n.quantity) return [];
        let a = 'string' == typeof n.id && n.id ? n.id : n.productId;
        (i.has(a) && (a = `${n.productId}-${c}`), i.add(a));
        const s = n.discount,
          d =
            'string' == typeof s?.reason && s.reason.trim()
              ? { reason: s.reason.trim().slice(0, 60) }
              : {},
          y = s && (0, t.cleanDiscount)(s),
          p =
            'string' == typeof s?.newPrice && s.newPrice
              ? { kind: 'amount', value: 0, newPrice: s.newPrice, ...d }
              : y || void 0;
        return [
          {
            id: a,
            product: o,
            quantity: n.quantity,
            unit: n.unit || o.unit || 'piece',
            ...(void 0 !== n.unitPrice ? { unitPrice: n.unitPrice } : {}),
            ...(void 0 !== n.unitCost ? { unitCost: n.unitCost } : {}),
            ...(n.expiresAt ? { expiresAt: n.expiresAt } : {}),
            ...(p ? { discount: p } : {}),
            ...('number' == typeof n.said &&
            Number.isFinite(n.said) &&
            n.said > 0
              ? { said: n.said }
              : {}),
          },
        ];
      });
    }
    function d(t, n = Date.now()) {
      if (!t) return '';
      try {
        const r = JSON.parse(t);
        return a(r.at, n) && 'string' == typeof r.buyerName
          ? r.buyerName.slice(0, 60)
          : '';
      } catch {
        return '';
      }
    }
    const y = (t) => ({ id: t, lines: [] });
    const p = (t) => {
        const n = t;
        return (
          !!n &&
          'string' == typeof n.contactId &&
          !!n.contactId &&
          ['cash', 'card', 'credit', 'cheque'].includes(n.payment?.method)
        );
      },
      f = (t) => {
        const n = t;
        return (
          !!n &&
          'string' == typeof n.key &&
          !!n.key &&
          !!n.body &&
          'object' == typeof n.body
        );
      };
    function l(t, r) {
      if (!t || 'object' != typeof t || Array.isArray(t)) return;
      const i = {};
      for (const [c, o] of Object.entries(t))
        n.TIER_KEYS.includes(o) &&
          r.some((t) => t.id === c && !t.archivedAt) &&
          (i[c] = o);
      return Object.keys(i).length ? i : void 0;
    }
    const b = (t) => {
      const n = t;
      return (
        !!n &&
        ['year', 'month', 'day', 'hour', 'minute'].every((t) =>
          Number.isFinite(n[t]),
        )
      );
    };
    function h(n, r, c, o = Date.now()) {
      const u = { carts: [], active: '', migrated: !1 };
      if (!n) return u;
      let y;
      try {
        y = JSON.parse(n);
      } catch {
        return u;
      }
      if (2 === y?.v && Array.isArray(y.carts)) {
        const n = y.carts
          .flatMap((n) => {
            if (!n || 'string' != typeof n.id || !a(n.at, o)) return [];
            const r = s(n.lines, c);
            return r.length
              ? [
                  {
                    id: n.id,
                    at: n.at,
                    lines: r,
                    ...('string' == typeof n.buyerName
                      ? { buyerName: n.buyerName.slice(0, 60) }
                      : {}),
                    ...('string' == typeof n.contactName
                      ? { contactName: n.contactName.slice(0, 100) }
                      : {}),
                    ...(p(n.account) ? { account: n.account } : {}),
                    ...('cash' === n.payment || 'card' === n.payment
                      ? { payment: n.payment }
                      : {}),
                    ...('string' == typeof n.when ? { when: n.when } : {}),
                    ...(b(n.chequeDate) ? { chequeDate: n.chequeDate } : {}),
                    ...((0, t.cleanDiscount)(n.invoiceDiscount)
                      ? {
                          invoiceDiscount: (0, t.cleanDiscount)(
                            n.invoiceDiscount,
                          ),
                        }
                      : {}),
                    ...(f(n.retry) ? { retry: n.retry } : {}),
                    ...(l(n.tiers, c) ? { tiers: l(n.tiers, c) } : {}),
                  },
                ]
              : [];
          })
          .slice(0, i);
        return {
          carts: n,
          active: n.some((t) => t.id === y.active) ? y.active : n[0]?.id || '',
          migrated: !1,
        };
      }
      if (!a(y?.at, o)) return u;
      const h = s(y.lines, c);
      if (!h.length) return u;
      let N = null;
      try {
        const t = r ? JSON.parse(r) : null;
        f(t) && (N = t);
      } catch {}
      const v = N?.body || {},
        D = { contactId: v.contactId, payment: v.payment },
        w = {
          id: 'cart-1',
          lines: h,
          ...('string' == typeof v.buyerName
            ? { buyerName: v.buyerName }
            : d(n, o)
              ? { buyerName: d(n, o) }
              : {}),
          ...('string' == typeof v.occurredAt ? { when: v.occurredAt } : {}),
          ...(v.contactId ||
          ('cash' !== v.payment?.method && 'card' !== v.payment?.method)
            ? {}
            : { payment: v.payment.method }),
          ...(p(D) ? { account: D } : {}),
          ...(N ? { retry: N } : {}),
        };
      return { carts: [w], active: w.id, migrated: !0 };
    }
    function N(t, n, r = Date.now()) {
      return h(t, null, n, r).carts.length;
    }
    function v(t, n, r, i, c = String) {
      return (
        (t.account ? t.contactName : t.buyerName)?.trim() ||
        i(
          r
            ? '\u0641\u0627\u06a9\u062a\u0648\u0631 {n}'
            : '\u0648\u0631\u0648\u062f {n}',
          { n: c(n + 1) },
        )
      );
    }
  },
  886,
  [460, 464],
);
