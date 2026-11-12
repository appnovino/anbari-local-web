// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 458; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'activityTypes', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'activityGroups', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.activityGroup = function (t) {
        return c[t];
      }),
      Object.defineProperty(e, 'systemTypes', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (e.typesInGroup = l),
      Object.defineProperty(e, 'activityUnits', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (e.activityText = w),
      (e.encodeActivityCursor = v),
      (e.decodeActivityCursor = function (t) {
        if ('string' != typeof t || !t) return null;
        const n = t.indexOf('|');
        if (n < 1) return null;
        const r = t.slice(0, n),
          a = t.slice(n + 1),
          u = new Date(r);
        return Number.isNaN(u.getTime()) || !a || a.length > 120
          ? null
          : { at: u.toISOString(), id: a };
      }),
      (e.activityLine = function (t) {
        return t.raw
          ? w({ ...t.raw, id: t.id, type: t.type, at: t.at })
          : t.text;
      }),
      (e.activityActor = function (t) {
        const n = t.actor;
        return n
          ? n.self
            ? (0, r.L)('\u0634\u0645\u0627')
            : !1 === n.named
              ? (0, r.L)('\u0647\u0645\u06a9\u0627\u0631')
              : n.name
          : '';
      }),
      (e.mergeActivity = function (
        t,
        {
          limit: n = 50,
          before: a = null,
          group: u = 'all',
          selfId: o = null,
        } = {},
      ) {
        const c = new Set(l(u)),
          s = new Set(),
          p = t
            .flat()
            .filter(
              (t) =>
                c.has(t.type) &&
                !Number.isNaN(new Date(t.at).getTime()) &&
                !s.has(t.id) &&
                s.add(t.id),
            )
            .map((t) => ({ raw: t, at: q(t.at), id: t.id }))
            .sort(N),
          y = new Map();
        for (const t of p) {
          const n = t.raw,
            r = n.saleId
              ? 'sale:' + n.saleId
              : n.purchaseId
                ? 'purchase:' + n.purchaseId
                : n.groupKey,
            a = r ? n.type + '|' + r : n.id,
            u = y.get(a);
          u ? u.push(t) : y.set(a, [t]);
        }
        const f = [...y.values()]
            .map((t) => {
              const n = t[0];
              if (1 === t.length) return n;
              const a = t.map((t) => _(t.raw)),
                u = [...new Set(t.map((t) => t.raw.name || ''))],
                o = {
                  ...n.raw,
                  count: t.length,
                  names: { values: u.slice(0, 3), total: u.length },
                  amount: a.every((t) => void 0 !== t)
                    ? a.reduce((t, n) => t + n, 0)
                    : null,
                  detail: t.every((t) => 'new' === t.raw.detail)
                    ? 'new'
                    : 'new' === n.raw.detail
                      ? null
                      : n.raw.detail,
                  items: t
                    .slice(0, 60)
                    .map(({ raw: t }) => ({
                      activityId: t.id,
                      name:
                        t.name ||
                        (0, r.L)('\u0628\u06cc\u200c\u0646\u0627\u0645'),
                      ...(t.productId ? { productId: t.productId } : {}),
                      ...(null != t.quantity
                        ? { quantity: Number(t.quantity) }
                        : {}),
                      ...(t.unit ? { unit: t.unit } : {}),
                      ...(void 0 !== _(t) ? { amount: _(t) } : {}),
                    })),
                };
              return { ...n, raw: o };
            })
            .filter((t) => !a || N(t, a) > 0)
            .sort(N),
          h = f.slice(0, n);
        return {
          items: h.map(({ raw: t, at: n }) => {
            const a = _(t);
            return {
              id: t.id,
              type: t.type,
              at: n,
              actor: t.actorId
                ? {
                    id: t.actorId,
                    name:
                      t.actorId === o
                        ? (0, r.L)('\u0634\u0645\u0627')
                        : t.actorName ||
                          (0, r.L)('\u0647\u0645\u06a9\u0627\u0631'),
                    self: t.actorId === o,
                    named: !!t.actorName,
                  }
                : null,
              text: w(t),
              raw: I(t),
              ...(t.items
                ? {
                    items: t.items,
                    count: Number(t.count),
                    name: t.name || void 0,
                  }
                : {}),
              ...(t.saleId ? { saleId: t.saleId } : {}),
              ...(t.purchaseId ? { purchaseId: t.purchaseId } : {}),
              ...(t.returnId ? { returnId: t.returnId } : {}),
              ...(t.productId ? { productId: t.productId } : {}),
              ...(void 0 !== a ? { amount: a } : {}),
            };
          }),
          nextCursor: f.length > n && h.length ? v(h[h.length - 1]) : null,
        };
      }));
    var t = _r(d[0]),
      n = _r(d[1]),
      r = _r(d[2]),
      a = _r(d[3]);
    const u = [
        'product_created',
        'product_edited',
        'product_archived',
        'received',
        'sold',
        'used',
        'waste',
        'count',
        'correction',
        'sale_return',
        'purchase_return',
        'stock_low',
        'stock_out',
        'price_change',
        'ledger_in',
        'ledger_out',
        'cheque_created',
        'cheque_cashed',
        'cheque_bounced',
        'cheque_due',
        'subscription_bought',
        'subscription_renewed',
        'subscription_code',
        'subscription_expired',
        'trial_ending',
        'staff_invited',
        'staff_joined',
        'import',
      ],
      o = ['all', 'sale', 'receive', 'product', 'money', 'system'],
      c = {
        product_created: 'product',
        product_edited: 'product',
        product_archived: 'product',
        received: 'receive',
        sold: 'sale',
        used: 'product',
        waste: 'product',
        count: 'product',
        correction: 'product',
        sale_return: 'sale',
        purchase_return: 'receive',
        stock_low: 'system',
        stock_out: 'system',
        price_change: 'product',
        ledger_in: 'money',
        ledger_out: 'money',
        cheque_created: 'money',
        cheque_cashed: 'money',
        cheque_bounced: 'money',
        cheque_due: 'system',
        subscription_bought: 'system',
        subscription_renewed: 'system',
        subscription_code: 'system',
        subscription_expired: 'system',
        trial_ending: 'system',
        staff_invited: 'system',
        staff_joined: 'system',
        import: 'system',
      };
    const s = new Set([
      'stock_low',
      'stock_out',
      'cheque_due',
      'subscription_expired',
      'trial_ending',
    ]);
    function l(t) {
      return 'all' === t ? [...u] : u.filter((n) => c[n] === t);
    }
    const p = (0, r.localized)({
        piece: '\u0639\u062f\u062f',
        kg: '\u06a9\u06cc\u0644\u0648',
        g: '\u06af\u0631\u0645',
        l: '\u0644\u06cc\u062a\u0631',
        ml: '\u0645\u06cc\u0644\u06cc\u200c\u0644\u06cc\u062a\u0631',
        m: '\u0645\u062a\u0631',
        box: '\u0628\u0627\u06a9\u0633',
        carton: '\u06a9\u0627\u0631\u062a\u0646',
        pack: '\u0628\u0633\u062a\u0647',
        km: '\u06a9\u06cc\u0644\u0648\u0645\u062a\u0631',
        bag: '\u06a9\u06cc\u0633\u0647',
        sack: '\u06af\u0648\u0646\u06cc',
        roll: '\u0631\u0648\u0644',
        bottle: '\u0628\u0637\u0631\u06cc',
        can: '\u0642\u0648\u0637\u06cc',
        dozen: '\u062f\u0648\u062c\u06cc\u0646',
      }),
      y = (t, r) => (0, n.money)(Number(t), { day: r });
    function _(t) {
      if (null === t.amount || void 0 === t.amount || '' === t.amount) return;
      const n = Number(t.amount);
      return Number.isFinite(n) ? n : void 0;
    }
    function f(n) {
      if (!n.names) return '';
      const a = n.names.values.map(
          (t) => t || (0, r.L)('\u0628\u06cc\u200c\u0646\u0627\u0645'),
        ),
        u = n.names.total - a.length;
      return u > 0
        ? (0, r.L)(
            '{names} \u0648 {n} \u06a9\u0627\u0644\u0627\u06cc \u062f\u06cc\u06af\u0631',
            { names: a.join((0, r.L)('\u060c ')), n: (0, t.formatGrouped)(u) },
          )
        : a.length > 1
          ? (0, r.L)('{names} \u0648 {last}', {
              names: a.slice(0, -1).join((0, r.L)('\u060c ')),
              last: a[a.length - 1],
            })
          : a[0] || '';
    }
    const h = (t) =>
        'removed' === t.detail
          ? (0, r.L)(' \xb7 \u062d\u0630\u0641 \u0634\u062f')
          : 'edited' === t.detail
            ? (0, r.L)(' \xb7 \u0627\u0635\u0644\u0627\u062d \u0634\u062f')
            : '',
      L = (t) => 'sale_return' === t || 'purchase_return' === t,
      b = (n) =>
        'sale_return' === n.type
          ? (0, r.L)(
              '\u060c \u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u0641\u0631\u0648\u0634 #{no}',
              { no: (0, t.formatGrouped)(n.receiptNo) },
            )
          : (0, r.L)(
              '\u060c \u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u062e\u0631\u06cc\u062f #{no}',
              { no: (0, t.formatGrouped)(n.receiptNo) },
            );
    function w(n) {
      const u = n.name || (0, r.L)('\u0628\u06cc\u200c\u0646\u0627\u0645'),
        o =
          (0, a.measureOf)(n.unit) &&
          null != n.quantity &&
          Number(n.quantity) > 0
            ? (0, a.measureText)(Number(n.quantity), n.unit)
            : `${(0, t.formatGrouped)(n.quantity)} ${p[n.unit || 'piece'] || (0, r.L)('\u0639\u062f\u062f')}`,
        c = _(n),
        s = n.detail || '',
        l = Number(n.count);
      if (l > 1) {
        const a = (0, t.formatGrouped)(l),
          u = f(n),
          o = u
            ? {
                sale_return:
                  '{names} \u0627\u0632 \u0645\u0634\u062a\u0631\u06cc \u0628\u0631\u06af\u0634\u062a',
                purchase_return:
                  '{names} \u0628\u0647 \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0628\u0631\u06af\u0634\u062a \u062f\u0627\u062f\u0647 \u0634\u062f',
                sold: '{names} \u0641\u0631\u0648\u062e\u062a\u0647 \u0634\u062f',
                count: '{names} \u0634\u0645\u0627\u0631\u0634 \u0634\u062f',
                received:
                  'new' === n.detail
                    ? '\u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0627\u0636\u0627\u0641\u0647 \u0634\u062f: {names}'
                    : '{names} \u0648\u0627\u0631\u062f \u0634\u062f',
                product_created:
                  '\u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0627\u0636\u0627\u0641\u0647 \u0634\u062f: {names}',
                used: '{names} \u0645\u0635\u0631\u0641 \u0634\u062f',
                waste: '{names} \u0636\u0627\u06cc\u0639 \u0634\u062f',
                correction:
                  '\u062b\u0628\u062a {names} \u0627\u0635\u0644\u0627\u062d \u0634\u062f',
                product_archived:
                  '{names} \u0628\u0627\u06cc\u06af\u0627\u0646\u06cc \u0634\u062f',
              }
            : {
                sale_return:
                  '{n} \u0642\u0644\u0645 \u06a9\u0627\u0644\u0627 \u0627\u0632 \u0645\u0634\u062a\u0631\u06cc \u0628\u0631\u06af\u0634\u062a',
                purchase_return:
                  '{n} \u0642\u0644\u0645 \u06a9\u0627\u0644\u0627 \u0628\u0647 \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0628\u0631\u06af\u0634\u062a \u062f\u0627\u062f\u0647 \u0634\u062f',
                sold: '{n} \u0642\u0644\u0645 \u06a9\u0627\u0644\u0627 \u0641\u0631\u0648\u062e\u062a\u0647 \u0634\u062f',
                count:
                  '{n} \u0642\u0644\u0645 \u06a9\u0627\u0644\u0627 \u0634\u0645\u0627\u0631\u0634 \u0634\u062f',
                received:
                  'new' === n.detail
                    ? '{n} \u06a9\u0627\u0644\u0627\u06cc \u062c\u062f\u06cc\u062f \u0627\u0636\u0627\u0641\u0647 \u0634\u062f'
                    : '{n} \u0642\u0644\u0645 \u06a9\u0627\u0644\u0627 \u0648\u0627\u0631\u062f \u0634\u062f',
                product_created:
                  '{n} \u06a9\u0627\u0644\u0627\u06cc \u062c\u062f\u06cc\u062f \u0627\u0636\u0627\u0641\u0647 \u0634\u062f',
                used: '{n} \u0642\u0644\u0645 \u06a9\u0627\u0644\u0627 \u0645\u0635\u0631\u0641 \u0634\u062f',
                waste:
                  '{n} \u0642\u0644\u0645 \u06a9\u0627\u0644\u0627 \u0636\u0627\u06cc\u0639 \u0634\u062f',
                correction:
                  '\u062b\u0628\u062a {n} \u0642\u0644\u0645 \u06a9\u0627\u0644\u0627 \u0627\u0635\u0644\u0627\u062d \u0634\u062f',
              };
        if (o[n.type])
          return (
            (0, r.L)(o[n.type], { n: a, names: u }) +
            ('sold' === n.type && n.buyer
              ? (0, r.L)(' \u0628\u0647 {buyer}', { buyer: n.buyer })
              : '') +
            ('sold' === n.type && n.receiptNo
              ? (0, r.L)('\u060c \u0641\u0627\u06a9\u062a\u0648\u0631 #{no}', {
                  no: (0, t.formatGrouped)(n.receiptNo),
                })
              : '') +
            (L(n.type) && n.receiptNo ? b(n) : '') +
            (void 0 !== c
              ? (0, r.L)('\u060c {amount}', { amount: y(c, n.at) })
              : '')
          );
      }
      switch (n.type) {
        case 'product_created':
          return (0, r.L)(
            '\u06a9\u0627\u0644\u0627\u06cc \xab{name}\xbb \u0627\u0636\u0627\u0641\u0647 \u0634\u062f',
            { name: u },
          );
        case 'product_edited':
          return (0, r.L)(
            '\u06a9\u0627\u0644\u0627\u06cc \xab{name}\xbb \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f',
            { name: u },
          );
        case 'product_archived':
          return (0, r.L)(
            '\u06a9\u0627\u0644\u0627\u06cc \xab{name}\xbb \u0628\u0627\u06cc\u06af\u0627\u0646\u06cc \u0634\u062f',
            { name: u },
          );
        case 'received':
          return 'new' === n.detail
            ? (0, r.L)(
                '\u06a9\u0627\u0644\u0627\u06cc \u062c\u062f\u06cc\u062f \xab{name}\xbb \u0627\u0636\u0627\u0641\u0647 \u0634\u062f: {qty}',
                { name: u, qty: o },
              )
            : (0, r.L)(
                '{qty} \xab{name}\xbb \u0648\u0627\u0631\u062f \u0634\u062f',
                { qty: o, name: u },
              ) + h(n);
        case 'sold':
          return (
            (void 0 !== c
              ? (0, r.L)(
                  '{qty} \xab{name}\xbb \u0641\u0631\u0648\u062e\u062a\u0647 \u0634\u062f ({amount})',
                  { qty: o, name: u, amount: y(c, n.at) },
                )
              : (0, r.L)(
                  '{qty} \xab{name}\xbb \u0641\u0631\u0648\u062e\u062a\u0647 \u0634\u062f',
                  { qty: o, name: u },
                )) + h(n)
          );
        case 'used':
          return (
            (0, r.L)(
              '{qty} \xab{name}\xbb \u0645\u0635\u0631\u0641 \u0634\u062f',
              { qty: o, name: u },
            ) + h(n)
          );
        case 'waste':
          return (
            (0, r.L)(
              '{qty} \xab{name}\xbb \u0636\u0627\u06cc\u0639 \u0634\u062f',
              { qty: o, name: u },
            ) + h(n)
          );
        case 'count': {
          const [a, o] = String(n.detail || '').split('>');
          return void 0 !== a &&
            void 0 !== o &&
            '' !== a &&
            Number.isFinite(Number(a)) &&
            Number.isFinite(Number(o))
            ? (0, r.L)(
                '\u0634\u0645\u0627\u0631\u0634 \xab{name}\xbb: {before} \u2190 {after}',
                {
                  name: u,
                  before: (0, t.formatGrouped)(Number(a)),
                  after: (0, t.formatGrouped)(Number(o)),
                },
              )
            : (0, r.L)(
                '\u0645\u0648\u062c\u0648\u062f\u06cc \xab{name}\xbb \u0634\u0645\u0627\u0631\u0634 \u0634\u062f',
                { name: u },
              );
        }
        case 'correction':
          return 'removed' === n.detail
            ? (0, r.L)(
                '\u062b\u0628\u062a {qty} \xab{name}\xbb \u062d\u0630\u0641 \u0634\u062f',
                { qty: o, name: u },
              )
            : (0, r.L)(
                '\u062b\u0628\u062a {qty} \xab{name}\xbb \u0627\u0635\u0644\u0627\u062d \u0634\u062f',
                { qty: o, name: u },
              );
        case 'sale_return':
          return (
            (void 0 !== c
              ? (0, r.L)(
                  '{qty} \xab{name}\xbb \u0627\u0632 \u0645\u0634\u062a\u0631\u06cc \u0628\u0631\u06af\u0634\u062a ({amount})',
                  { qty: o, name: u, amount: y(c, n.at) },
                )
              : (0, r.L)(
                  '{qty} \xab{name}\xbb \u0627\u0632 \u0645\u0634\u062a\u0631\u06cc \u0628\u0631\u06af\u0634\u062a',
                  { qty: o, name: u },
                )) + (n.receiptNo ? b(n) : '')
          );
        case 'purchase_return':
          return (
            (0, r.L)(
              '{qty} \xab{name}\xbb \u0628\u0647 \u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0628\u0631\u06af\u0634\u062a \u062f\u0627\u062f\u0647 \u0634\u062f',
              { qty: o, name: u },
            ) + (n.receiptNo ? b(n) : '')
          );
        case 'stock_low':
          return (0, r.L)(
            '\u0645\u0648\u062c\u0648\u062f\u06cc \xab{name}\xbb \u06a9\u0645 \u0634\u062f: {qty}',
            { name: u, qty: o },
          );
        case 'stock_out':
          return (0, r.L)(
            '\u0645\u0648\u062c\u0648\u062f\u06cc \xab{name}\xbb \u062a\u0645\u0627\u0645 \u0634\u062f',
            { name: u },
          );
        case 'price_change': {
          const a = (0, t.formatGrouped)(n.count),
            u = Number(n.percent),
            o = (0, t.formatGrouped)(Math.abs(u), 2),
            c =
              null != n.percent && Number.isFinite(u) && 0 !== u
                ? u > 0
                  ? (0, r.L)(
                      '{p}\u066a \u0627\u0641\u0632\u0627\u06cc\u0634 \u06cc\u0627\u0641\u062a',
                      { p: o },
                    )
                  : (0, r.L)(
                      '{p}\u066a \u06a9\u0627\u0647\u0634 \u06cc\u0627\u0641\u062a',
                      { p: o },
                    )
                : n.detail ||
                  (0, r.L)('\u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0631\u062f'),
            s =
              'costPrice' === n.field
                ? (0, r.L)('\u062e\u0631\u06cc\u062f')
                : n.name;
          return s
            ? (0, r.L)(
                '\u0642\u06cc\u0645\u062a {field} {n} \u06a9\u0627\u0644\u0627 {change}',
                { field: s, n: a, change: c },
              )
            : (0, r.L)(
                '\u0642\u06cc\u0645\u062a {n} \u06a9\u0627\u0644\u0627 {change}',
                { n: a, change: c },
              );
        }
        case 'ledger_in':
          return s
            ? (0, r.L)(
                '{amount} \u0627\u0632 \xab{who}\xbb \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u062f',
                { amount: y(c, n.at), who: s },
              )
            : (0, r.L)(
                '{amount} \u0627\u0632 \u0645\u0634\u062a\u0631\u06cc \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u062f',
                { amount: y(c, n.at) },
              );
        case 'ledger_out':
          return s
            ? (0, r.L)(
                '{amount} \u0628\u0647 \xab{who}\xbb \u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f',
                { amount: y(c, n.at), who: s },
              )
            : (0, r.L)(
                '{amount} \u0628\u0647 \u0637\u0631\u0641 \u062d\u0633\u0627\u0628 \u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f',
                { amount: y(c, n.at) },
              );
        case 'cheque_created':
          return s
            ? (0, r.L)(
                '\u0686\u06a9 {amount} \xab{who}\xbb \u062b\u0628\u062a \u0634\u062f',
                { amount: y(c, n.at), who: s },
              )
            : (0, r.L)(
                '\u0686\u06a9 {amount} \u062b\u0628\u062a \u0634\u062f',
                { amount: y(c, n.at) },
              );
        case 'cheque_cashed':
          return s
            ? (0, r.L)(
                '\u0686\u06a9 {amount} \xab{who}\xbb \u0648\u0635\u0648\u0644 \u0634\u062f',
                { amount: y(c, n.at), who: s },
              )
            : (0, r.L)(
                '\u0686\u06a9 {amount} \u0648\u0635\u0648\u0644 \u0634\u062f',
                { amount: y(c, n.at) },
              );
        case 'cheque_bounced':
          return s
            ? (0, r.L)(
                '\u0686\u06a9 {amount} \xab{who}\xbb \u0628\u0631\u06af\u0634\u062a \u062e\u0648\u0631\u062f',
                { amount: y(c, n.at), who: s },
              )
            : (0, r.L)(
                '\u0686\u06a9 {amount} \u0628\u0631\u06af\u0634\u062a \u062e\u0648\u0631\u062f',
                { amount: y(c, n.at) },
              );
        case 'cheque_due':
          return s
            ? (0, r.L)(
                '\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 {amount} \xab{who}\xbb \u0646\u0632\u062f\u06cc\u06a9 \u0627\u0633\u062a',
                { amount: y(c, n.at), who: s },
              )
            : (0, r.L)(
                '\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 {amount} \u0646\u0632\u062f\u06cc\u06a9 \u0627\u0633\u062a',
                { amount: y(c, n.at) },
              );
        case 'subscription_bought':
          return n.detail
            ? (0, r.L)(
                '\u0627\u0634\u062a\u0631\u0627\u06a9 {plan} \u062e\u0631\u06cc\u062f\u0627\u0631\u06cc \u0634\u062f',
                { plan: n.detail },
              )
            : (0, r.L)(
                '\u0627\u0634\u062a\u0631\u0627\u06a9 \u062e\u0631\u06cc\u062f\u0627\u0631\u06cc \u0634\u062f',
              );
        case 'subscription_renewed':
          return n.detail
            ? (0, r.L)(
                '\u0627\u0634\u062a\u0631\u0627\u06a9 {plan} \u062a\u0645\u062f\u06cc\u062f \u0634\u062f',
                { plan: n.detail },
              )
            : (0, r.L)(
                '\u0627\u0634\u062a\u0631\u0627\u06a9 \u062a\u0645\u062f\u06cc\u062f \u0634\u062f',
              );
        case 'subscription_code':
          return (0, r.L)(
            '\u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u0627 \u06a9\u062f \u062a\u062e\u0641\u06cc\u0641 \u0641\u0639\u0627\u0644 \u0634\u062f',
          );
        case 'subscription_expired':
          return (0, r.L)(
            '\u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u0647 \u067e\u0627\u06cc\u0627\u0646 \u0631\u0633\u06cc\u062f',
          );
        case 'trial_ending':
          return (0, r.L)(
            '\u062f\u0648\u0631\u0647\u0654 \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc \u0628\u0647\u200c\u0632\u0648\u062f\u06cc \u062a\u0645\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f',
          );
        case 'staff_invited':
          return (0, r.L)(
            '{who} \u0628\u0647 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u062f\u0639\u0648\u062a \u0634\u062f',
            { who: n.detail || (0, r.L)('\u0647\u0645\u06a9\u0627\u0631') },
          );
        case 'staff_joined':
          return (0, r.L)(
            '{who} \u0628\u0647 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u067e\u06cc\u0648\u0633\u062a',
            { who: n.name || (0, r.L)('\u0647\u0645\u06a9\u0627\u0631') },
          );
        case 'import':
          return (0, r.L)(
            '\u0648\u0631\u0648\u062f \u062f\u0627\u062f\u0647 \u0627\u0632 \u0641\u0627\u06cc\u0644: {n} \u0631\u062f\u06cc\u0641',
            { n: (0, t.formatGrouped)(n.count) },
          );
      }
    }
    function v(t) {
      return `${t.at}|${t.id}`;
    }
    const q = (t) => (t instanceof Date ? t : new Date(t)).toISOString();
    function N(t, n) {
      return t.at === n.at
        ? t.id < n.id
          ? 1
          : t.id > n.id
            ? -1
            : 0
        : t.at < n.at
          ? 1
          : -1;
    }
    const I = (t) =>
      Object.fromEntries(
        [
          'name',
          'names',
          'quantity',
          'unit',
          'amount',
          'count',
          'detail',
          'percent',
          'field',
          'buyer',
          'receiptNo',
        ]
          .filter((n) => null !== t[n] && void 0 !== t[n])
          .map((n) => [n, t[n]]),
      );
  },
  458,
  [434, 435, 311, 459],
);
