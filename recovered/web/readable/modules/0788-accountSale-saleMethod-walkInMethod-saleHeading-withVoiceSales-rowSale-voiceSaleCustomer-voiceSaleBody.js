// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 788; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.accountSale = c),
      Object.defineProperty(e, 'saleMethod', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.walkInMethod = function (t) {
        const n = t?.sale;
        return n && !c(n) && 'card' === n.payment ? 'card' : 'cash';
      }),
      (e.saleHeading = function (t, n) {
        if (!t)
          return (0, a.L)(
            '\u0645\u0634\u062a\u0631\u06cc \u062d\u0636\u0648\u0631\u06cc',
          );
        const o = n || t.customerName?.trim() || '';
        return o
          ? 'credit' === u(t)
            ? (0, a.L)('\u0646\u0633\u06cc\u0647 \u0628\u0647 {name}', {
                name: o,
              })
            : (0, a.L)('\u0641\u0631\u0648\u0634 \u0628\u0647 {name}', {
                name: o,
              })
          : (0, a.L)('\u0641\u0631\u0648\u0634');
      }),
      (e.withVoiceSales = function (t) {
        return t.sales?.length
          ? t
          : c(t.sale)
            ? {
                ...t,
                sales: [t.sale],
                actions: t.actions.map((t) =>
                  'sold' === t.kind ? { ...t, saleIndex: 0 } : t,
                ),
              }
            : t;
      }),
      (e.rowSale = function (t, n) {
        return !t.ledger &&
          'sold' === t.kind &&
          void 0 !== t.saleIndex &&
          n?.[t.saleIndex]
          ? t.saleIndex
          : null;
      }),
      (e.voiceSaleCustomer = function (o, a, c) {
        const s = o.customerName?.trim() || '',
          l = a
            ? (0, n.resolvedContact)(
                { contactName: s, contactId: c, contactPhone: o.customerPhone },
                a,
              )
            : void 0,
          m =
            !!a &&
            !l &&
            !!s &&
            (c === t.NEW_CONTACT || (0, t.exactContacts)(s, a).length < 2),
          p = !s && !c && ['cash', 'card'].includes(u(o)),
          h = m ? (0, n.newPersonCheck)(s, o.customerPhone, a) : void 0;
        return {
          target: l,
          create: m,
          ...(h ? { phone: h } : {}),
          ready: !!l || (m && !h) || p,
        };
      }),
      (e.voiceSaleBody = function (t, n, a, c, l) {
        const m = n.filter((t) => !t.ledger && 'sold' === t.kind);
        if (
          !m.length ||
          (!c && (t.customerName || ['credit', 'cheque'].includes(u(t))))
        )
          throw Error('invalid');
        const p = u(t);
        if ('cheque' === p && (!l?.dueDate || 0 === t.paidToman))
          throw Error('invalid');
        const h = s(m, a),
          v = [...new Set(m.map((t) => t.timestamp).filter((t) => !!t))];
        if (v.length > 1) throw Error('invalid');
        return {
          lines: h,
          ...(c ? { contactId: c } : {}),
          payment: {
            method: p,
            ...(('credit' !== p && 'cheque' !== p) || null === t.paidToman
              ? {}
              : { paidToman: t.paidToman }),
            ...('cheque' === p ? { cheque: l } : {}),
          },
          ...(v[0] ? { occurredAt: v[0] } : {}),
          note:
            (0, o.cleanVoiceNote)(t.note) ||
            h
              .map((t) => `${t.name} \xd7 ${t.quantity}`)
              .join('\u060c ')
              .slice(0, 500),
        };
      }),
      (e.saleLines = s),
      (e.saleTotal = function (t, n) {
        try {
          const o = s(
            t.filter((t) => !t.ledger && 'sold' === t.kind),
            n,
          );
          return o.length && o.every((t) => void 0 !== t.unitPrice)
            ? o.reduce((t, n) => t + Math.round(n.unitPrice * n.quantity), 0)
            : void 0;
        } catch {
          return;
        }
      }),
      (e.movementsReceipt = function (t, n, o = 'cash') {
        const a = t.filter((t) => 'sold' === t.kind && !t.parentMovementId);
        return a.length
          ? {
              id: 'movements-' + a[0].id,
              type: 'sale',
              receiptNo: 0,
              paymentMethod: o,
              occurredAt: a[0].timestamp || new Date().toISOString(),
              lines: a.map((t) => ({
                id: t.id,
                movementId: t.id,
                productId: t.productId,
                name: t.name,
                unit: n.find((n) => n.id === t.productId)?.unit || 'piece',
                quantity: t.quantity,
                ...(void 0 !== t.unitPrice ? { unitPrice: t.unitPrice } : {}),
                ...(void 0 !== t.revenueTotal
                  ? { saleTotal: t.revenueTotal }
                  : void 0 !== t.unitPrice
                    ? { saleTotal: Math.round(t.unitPrice * t.quantity) }
                    : {}),
              })),
            }
          : void 0;
      }),
      (e.voiceSaleRequest = function (t, n, o) {
        return t ?? { body: n, key: o() };
      }),
      (e.voiceSaleRejected = function (t) {
        return (
          !!t &&
          t.status >= 400 &&
          t.status < 500 &&
          ![408, 429].includes(t.status) &&
          'idempotency_conflict' !== t.message
        );
      }),
      (e.saveVoiceSale = async function (t, n) {
        return (await n(t.body, t.key)).sale;
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]),
      a = r(d[3]);
    function c(t) {
      return !(
        !t ||
        (!t.customerName &&
          'credit' !== t.payment &&
          'cheque' !== t.payment &&
          !t.sendInvoice)
      );
    }
    const u = (t) => t.payment || 'cash';
    function s(t, o) {
      const a = (0, n.priceBases)(t, o);
      return t.map((t, c) => {
        const u = (0, n.resolvedProduct)(t, o),
          s = (0, n.packedProduct)(t, u),
          l = (0, n.itemDraft)(t, u),
          m = s ? (0, n.stockQuantity)(l.quantity, l.unit, s) : l.quantity;
        if (void 0 === m) throw Error('invalid_unit');
        const p = l.unitPrice ?? t.newPrice ?? a[c]?.price ?? s?.price;
        return {
          ...(s ? { productId: s.id } : {}),
          name: s?.name || l.name,
          quantity: m,
          ...(!s && l.unit ? { unit: l.unit } : {}),
          ...(void 0 !== p ? { unitPrice: p } : {}),
        };
      });
    }
  },
  788,
  [529, 692, 465, 311],
);
