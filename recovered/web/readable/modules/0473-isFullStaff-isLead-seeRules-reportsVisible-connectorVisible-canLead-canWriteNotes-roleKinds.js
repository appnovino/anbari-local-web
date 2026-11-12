// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 473; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'isFullStaff', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.isLead = function (n) {
        return (
          !!n &&
          ('owner' === n.role || 'manager' === n.role || t(n.role, n.access))
        );
      }),
      (e.seeRules = o),
      Object.defineProperty(e, 'reportsVisible', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'connectorVisible', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'canLead', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.canWriteNotes = function (n, t) {
        return 'staff' === n
          ? !!(t?.do?.receive || t?.do?.sell || t?.do?.catalog)
          : !!n && 'read' !== n;
      }),
      (e.roleKinds = d),
      (e.canInvoice = a),
      (e.discountMax = function (n, t) {
        if (c(n, t)) return 100;
        if ('staff' !== n || !t?.do?.discount) return 0;
        const o = Number(t.do.discountMax);
        return Number.isFinite(o) && o > 0 ? Math.min(100, o) : 0;
      }),
      (e.canEditSalePrice = function (n, t) {
        return (
          !!c(n, t) ||
          ('staff' === n &&
            !!((t?.do?.price ?? !0) && t?.do?.sell && t?.see?.sellPrice))
        );
      }),
      (e.canCount = f),
      (e.canEditHistory = function (n, t) {
        return !!c(n, t) || ('staff' === n && !!t?.do?.editHistory);
      }),
      Object.defineProperty(e, 'ROLE_PRESETS', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      Object.defineProperty(e, 'FULL_ACCESS_HINT', {
        enumerable: !0,
        get: function () {
          return m;
        },
      }),
      Object.defineProperty(e, 'DEFAULT_DISCOUNT_MAX', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      Object.defineProperty(e, 'ROLE_NAME_MAX', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }),
      (e.presetAccess = function (n) {
        const t = b.find((t) => t.id === n).access;
        return {
          see: { ...t.see },
          do: { ...t.do },
          ...(t.full ? { full: !0 } : {}),
        };
      }),
      (e.matchPreset = h),
      Object.defineProperty(e, 'CHANGED_MAX', {
        enumerable: !0,
        get: function () {
          return x;
        },
      }),
      (e.tickDiff = N),
      (e.nearPreset = _),
      (e.roleTitle = function (t) {
        const c = t?.roleName?.trim();
        if (c) return c;
        const o = h(t);
        if (o) return (0, n.L)(b.find((n) => n.id === o).name);
        const s = _(t);
        return s
          ? (0, n.L)(
              '{role} \xb7 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0627\u062f\u0647\u200c\u0634\u062f\u0647',
              { role: (0, n.L)(b.find((n) => n.id === s.id).name) },
            )
          : (0, n.L)(
              '\u062f\u0633\u062a\u0631\u0633\u06cc \u062f\u0644\u062e\u0648\u0627\u0647',
            );
      }),
      (e.parsePercent = function (n) {
        const t = n
          .trim()
          .replace(/[\u06f0-\u06f9]/g, (n) =>
            String(
              '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                n,
              ),
            ),
          )
          .replace(/[\u0660-\u0669]/g, (n) =>
            String(
              '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
                n,
              ),
            ),
          );
        if (!/^\d{1,3}$/.test(t)) return null;
        const c = Number(t);
        return c >= 1 && c <= 100 ? c : null;
      }),
      (e.lastSeenText = function (t, c = new Date()) {
        if (!t)
          return (0, n.L)(
            '\u0647\u0646\u0648\u0632 \u0648\u0627\u0631\u062f \u0646\u0634\u062f\u0647',
          );
        const o = new Date(t);
        if (Number.isNaN(o.getTime()))
          return (0, n.L)(
            '\u0647\u0646\u0648\u0632 \u0648\u0627\u0631\u062f \u0646\u0634\u062f\u0647',
          );
        const s = (n) =>
            new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime(),
          l = Math.max(0, Math.round((s(c) - s(o)) / 864e5));
        return 0 === l
          ? (0, n.L)(
              '\u0622\u062e\u0631\u06cc\u0646 \u0648\u0631\u0648\u062f \u0627\u0645\u0631\u0648\u0632',
            )
          : 1 === l
            ? (0, n.L)(
                '\u0622\u062e\u0631\u06cc\u0646 \u0648\u0631\u0648\u062f \u062f\u06cc\u0631\u0648\u0632',
              )
            : (0, n.L)(
                '\u0622\u062e\u0631\u06cc\u0646 \u0648\u0631\u0648\u062f {n} \u0631\u0648\u0632 \u067e\u06cc\u0634',
                { n: (0, n.localDigits)(l) },
              );
      }),
      (e.staffPausedText = function () {
        return (0, n.L)(
          '\u0635\u0627\u062d\u0628 \u0645\u063a\u0627\u0632\u0647 \u0641\u0639\u0644\u0627\u064b \u062f\u0633\u062a\u0631\u0633\u06cc \u0647\u0645\u06a9\u0627\u0631\u0627\u0646 \u0631\u0627 \u0628\u0633\u062a\u0647 \u0627\u0633\u062a. \u0648\u0642\u062a\u06cc \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u0632 \u06a9\u0646\u062f\u060c \u0647\u0645\u0647\u200c\u0686\u06cc\u0632 \u0647\u0645\u0627\u0646\u200c\u0637\u0648\u0631 \u06a9\u0647 \u0628\u0648\u062f \u0633\u0631 \u062c\u0627\u06cc\u0634 \u0627\u0633\u062a.',
        );
      }),
      (e.staffTabs = function (n, c) {
        if ('staff' !== n || t(n, c)) return null;
        const l = d(n, c).length > 0 || a(n, c) || f(n, c),
          u = s(o(n, c)) || !!o(n, c)?.ledger;
        return l && u
          ? null
          : [
              'inventory',
              ...(l ? ['add'] : []),
              ...(u ? ['data'] : []),
              'profile',
            ];
      }));
    var n = r(_d[0]);
    const t = (n, t) => 'staff' === n && !0 === t?.full;
    const c = (n, c) => !n || 'owner' === n || 'manager' === n || t(n, c);
    function o(n, t) {
      if (c(n, t))
        return {
          buyPrice: !0,
          sellPrice: !0,
          profit: !0,
          ledger: !0,
          reports: !0,
        };
      if ('staff' !== n) return null;
      const o = !!t?.see?.buyPrice,
        s = !!t?.see?.sellPrice;
      return {
        buyPrice: o,
        sellPrice: s,
        profit: o && s && !!t?.see?.profit,
        ledger: o && s && !!t?.see?.ledger,
        reports: !!t?.see?.reports,
      };
    }
    const s = (n) => !n || (n.reports && n.buyPrice && n.sellPrice && n.profit),
      l = (n) => !n || 'owner' === n,
      u = (n, t) => !!n && c(n, t);
    function d(n, t) {
      return c(n, t)
        ? ['received', 'sold']
        : 'staff' === n
          ? [
              ...(t?.do?.receive ? ['received'] : []),
              ...(t?.do?.sell ? ['sold'] : []),
            ]
          : 'receive' === n
            ? ['received']
            : 'sell' === n
              ? ['sold']
              : [];
    }
    function a(n, t) {
      return (
        !!c(n, t) ||
        ('staff' === n ? !!(t?.do?.invoice ?? t?.do?.sell) : 'sell' === n)
      );
    }
    function f(n, t) {
      return (
        !!c(n, t) || ('staff' === n && !(!t?.do?.catalog && !t?.do?.count))
      );
    }
    const p = (n) => ({
        buyPrice: !1,
        sellPrice: !1,
        profit: !1,
        reports: !1,
        ledger: !1,
        ...n,
      }),
      P = (n) => ({
        receive: !1,
        sell: !1,
        catalog: !1,
        invoice: !1,
        discount: !1,
        editHistory: !1,
        count: !1,
        price: !1,
        ...n,
      }),
      b = [
        {
          id: 'seller',
          name: '\u0641\u0631\u0648\u0634\u0646\u062f\u0647',
          line: '\u0645\u06cc\u200c\u0641\u0631\u0648\u0634\u062f \u0648 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0645\u06cc\u200c\u062f\u0647\u062f\u061b \u0641\u0642\u0637 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634 \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u062f',
          card: !0,
          access: {
            see: p({ sellPrice: !0 }),
            do: P({ sell: !0, invoice: !0 }),
          },
        },
        {
          id: 'storekeeper',
          name: '\u0627\u0646\u0628\u0627\u0631\u062f\u0627\u0631',
          line: '\u06a9\u0627\u0644\u0627 \u062a\u062d\u0648\u06cc\u0644 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f \u0648 \u0645\u06cc\u200c\u0634\u0645\u0627\u0631\u062f\u061b \u0647\u06cc\u0686 \u0642\u06cc\u0645\u062a\u06cc \u0646\u0645\u06cc\u200c\u0628\u06cc\u0646\u062f',
          card: !0,
          access: { see: p({}), do: P({ receive: !0, count: !0 }) },
        },
        {
          id: 'sellerKeeper',
          name: '\u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0648 \u0627\u0646\u0628\u0627\u0631\u062f\u0627\u0631',
          line: '\u0647\u0645 \u0645\u06cc\u200c\u0641\u0631\u0648\u0634\u062f \u0647\u0645 \u06a9\u0627\u0644\u0627 \u062a\u062d\u0648\u06cc\u0644 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f\u061b \u0641\u0642\u0637 \u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
          card: !0,
          access: {
            see: p({ sellPrice: !0 }),
            do: P({ sell: !0, invoice: !0, receive: !0, count: !0 }),
          },
        },
        {
          id: 'accountant',
          name: '\u062d\u0633\u0627\u0628\u062f\u0627\u0631',
          line: '\u06af\u0632\u0627\u0631\u0634 \u0648 \u062d\u0633\u0627\u0628\u200c\u0647\u0627 \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u062f\u061b \u0645\u0648\u062c\u0648\u062f\u06cc \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u0646\u0645\u06cc\u200c\u062f\u0647\u062f',
          card: !0,
          access: {
            see: p({
              sellPrice: !0,
              buyPrice: !0,
              profit: !0,
              reports: !0,
              ledger: !0,
            }),
            do: P({}),
          },
        },
        {
          id: 'manager',
          name: '\u0645\u062f\u06cc\u0631',
          line: '',
          card: !1,
          access: {
            see: p({
              sellPrice: !0,
              buyPrice: !0,
              profit: !0,
              reports: !0,
              ledger: !0,
            }),
            do: P({
              receive: !0,
              sell: !0,
              catalog: !0,
              invoice: !0,
              discount: !0,
              discountMax: 100,
              editHistory: !0,
              count: !0,
            }),
          },
        },
        {
          id: 'full',
          name: '\u062f\u0633\u062a\u0631\u0633\u06cc \u06a9\u0627\u0645\u0644',
          line: '\u0647\u0645\u0647 \u06a9\u0627\u0631\u0647\u0627\u06cc \u0631\u0648\u0632\u0627\u0646\u0647 \u0645\u062b\u0644 \u062e\u0648\u062f\u062a',
          card: !0,
          access: {
            see: p({
              sellPrice: !0,
              buyPrice: !0,
              profit: !0,
              reports: !0,
              ledger: !0,
            }),
            do: P({
              receive: !0,
              sell: !0,
              catalog: !0,
              invoice: !0,
              discount: !0,
              discountMax: 100,
              editHistory: !0,
              count: !0,
              price: !0,
            }),
            full: !0,
          },
        },
      ],
      m =
        '\u0647\u0645\u0647 \u06a9\u0627\u0631\u0647\u0627\u06cc \u0631\u0648\u0632\u0627\u0646\u0647 \u0645\u062b\u0644 \u062e\u0648\u062f\u062a: \u0641\u0631\u0648\u0634\u060c \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627\u060c \u06a9\u0627\u0644\u0627 \u0648 \u0642\u06cc\u0645\u062a\u060c \u062d\u0633\u0627\u0628\u200c\u0647\u0627\u060c \u0641\u0627\u06a9\u062a\u0648\u0631\u060c \u06af\u0632\u0627\u0631\u0634\u060c \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u0648 \u0633\u0648\u062f. \u0627\u0634\u062a\u0631\u0627\u06a9 \u0648 \u067e\u0631\u062f\u0627\u062e\u062a\u060c \u062d\u0630\u0641 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u060c \u0647\u0645\u06a9\u0627\u0631\u0627\u0646 \u0648 \u06a9\u0644\u06cc\u062f \u0627\u062a\u0635\u0627\u0644 \u0641\u0642\u0637 \u062f\u0633\u062a \u062e\u0648\u062f\u062a \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
      y = 10,
      v = 30;
    const L = ['buyPrice', 'sellPrice', 'profit', 'reports', 'ledger'],
      M = [
        'receive',
        'sell',
        'catalog',
        'invoice',
        'discount',
        'editHistory',
        'count',
        'price',
      ],
      O = (n, t) =>
        'invoice' === t
          ? !!(n.do.invoice ?? n.do.sell)
          : 'count' === t
            ? !(!n.do.count && !n.do.catalog)
            : 'price' === t
              ? !(
                  !0 !== n.full &&
                  !(n.do.price ?? (n.do.sell && n.see.sellPrice))
                )
              : !!n.do[t];
    function h(n) {
      if (!n) return null;
      for (const t of b)
        if (
          (!0 === n.full) == (!0 === t.access.full) &&
          L.every((c) => !!n.see[c] === t.access.see[c]) &&
          M.every((c) => O(n, c) === O(t.access, c)) &&
          (!n.do.discount ||
            (n.do.discountMax ?? y) === t.access.do.discountMax)
        )
          return t.id;
      return null;
    }
    const x = 3;
    function N(n, t) {
      const c = b.find((n) => n.id === t).access,
        o = [];
      for (const t of L) !!n.see[t] !== c.see[t] && o.push(`see.${t}`);
      for (const t of M)
        (O(n, t) !== O(c, t) ||
          ('discount' === t &&
            n.do.discount &&
            !0 === c.do.discount &&
            (n.do.discountMax ?? y) !== c.do.discountMax)) &&
          o.push(`do.${t}`);
      return o;
    }
    function _(n) {
      if (!n) return null;
      const t = h(n);
      if (t)
        return b.find((n) => n.id === t).card ? { id: t, changed: 0 } : null;
      let c = null;
      for (const t of b) {
        if (!t.card) continue;
        const o =
          N(n, t.id).length +
          ((!0 === n.full) != (!0 === t.access.full) ? 1 : 0);
        (!c || o < c.changed) && (c = { id: t.id, changed: o });
      }
      return c && c.changed <= x ? c : null;
    }
  },
  473,
  [311],
);
