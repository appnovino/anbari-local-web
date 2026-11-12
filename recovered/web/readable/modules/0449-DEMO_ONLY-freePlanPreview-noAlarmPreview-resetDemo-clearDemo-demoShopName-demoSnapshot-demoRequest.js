// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 449; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'DEMO_ONLY', {
        enumerable: !0,
        get: function () {
          return K;
        },
      }),
      (_e.freePlanPreview = we),
      (_e.noAlarmPreview = Ae),
      (_e.resetDemo = function (e = {}) {
        const t = void 0 !== e.now ? e.now - Date.now() : 0;
        ((F = () => Date.now() + t),
          (B = Re(e)),
          (0, T.resetDemoExpenses)(),
          (0, _.resetDemoRecipes)(),
          (0, k.resetDemoStaff)());
      }),
      (_e.clearDemo = function () {
        ((B = null),
          (0, T.resetDemoExpenses)(),
          (0, _.resetDemoRecipes)(),
          (0, k.resetDemoStaff)());
      }),
      (_e.demoShopName = function () {
        return V().shopName;
      }),
      (_e.demoSnapshot = function () {
        const e = V();
        return {
          products: e.products,
          movements: e.movements,
          contacts: e.contacts.map((t) => Y(e, t)),
          cheques: e.cheques.map(ne),
          docs: e.docs,
          revision: e.revision,
        };
      }),
      (_e.demoRequest = async function (e, t = 'GET', o) {
        const n = (0, q.staffPreview)(),
          i = '/v1/shops/' + v.DEMO_SHOP_ID + '/',
          r = e.startsWith(i)
            ? decodeURIComponent(e.slice(i.length).split(/[/?]/)[0] || '')
            : '';
        if (n && r) {
          const i = (0, q.staffView)(n.access);
          return (
            (0, q.refuseHidden)(r, i),
            (0, q.trimForStaff)(r, Ee(e, t.toUpperCase(), o ?? {}), i)
          );
        }
        return Ee(e, t.toUpperCase(), o ?? {});
      }));
    var e = _r(_d[0]),
      t = _r(_d[1]),
      o = _r(_d[2]),
      n = _r(_d[3]),
      i = _r(_d[4]),
      r = _r(_d[5]),
      c = _r(_d[6]),
      a = _r(_d[7]),
      s = _r(_d[8]),
      d = _r(_d[9]),
      u = _r(_d[10]),
      l = _r(_d[11]),
      m = _r(_d[12]),
      p = _r(_d[13]),
      f = _r(_d[14]),
      h = _r(_d[15]),
      v = _r(_d[16]),
      y = _r(_d[17]),
      I = _r(_d[18]),
      b = _r(_d[19]);
    (_r(_d[20]), _r(_d[21]));
    var w = _r(_d[22]),
      A = _r(_d[23]),
      T = _r(_d[24]),
      k = _r(_d[25]),
      _ = _r(_d[26]),
      q = _r(_d[27]),
      D = _r(_d[28]),
      P = _r(_d[29]),
      M = _r(_d[30]),
      R = _r(_d[31]);
    const N = {
      enabled: !0,
      earnToman: 1e4,
      redeemPoints: 100,
      redeemToman: 1e4,
    };
    function S(e) {
      return e.club || (e.club = { rule: { ...N }, rows: [] });
    }
    const C = (e) => ({ ...e.rule, rewards: e.rewards || [] }),
      O = (e, t) =>
        S(e)
          .rows.filter((e) => e.contactId === t)
          .reduce((e, t) => e + t.points, 0);
    function E(e, t) {
      t.points && S(e).rows.push({ id: Oe(e, 'cp'), ...t });
    }
    function x(e, t, o, n) {
      if ('sale' !== t.type || !t.contactId) return;
      const i = S(e).rows.filter((e) => e.saleId === t.id),
        r = (e) =>
          i.filter((t) => t.kind === e).reduce((e, t) => e + t.points, 0),
        c = r('earned'),
        a = c + r('taken_back'),
        s = -r('used') - r('given_back'),
        d = ue(e, t),
        u = d.corrected
          ? 0
          : Math.max(
              0,
              t.totalToman -
                d.lines
                  .filter((e) => e.corrected)
                  .reduce((e, t) => e + (t.saleTotal ?? 0), 0) -
                (e.returns || [])
                  .filter((e) => e.docId === t.id)
                  .reduce((e, t) => e + t.totalToman, 0),
            ),
        l = a - (0, f.pointsKept)(c, t.totalToman, u);
      (l > 0 &&
        E(e, {
          contactId: t.contactId,
          kind: 'taken_back',
          points: -l,
          saleId: t.id,
          ...(n ? { returnId: n } : {}),
          occurredAt: H(o),
        }),
        d.corrected &&
          s > 0 &&
          E(e, {
            contactId: t.contactId,
            kind: 'given_back',
            points: s,
            saleId: t.id,
            occurredAt: H(o),
          }));
    }
    function z(e, t) {
      const o = e.docs.filter(
          (o) =>
            'sale' === o.type && o.contactId === t.id && !ue(e, o).corrected,
        ),
        n = (e.returns || [])
          .filter((e) => 'sale_return' === e.type && e.contactId === t.id)
          .reduce((e, t) => e + t.totalToman, 0),
        i = o
          .map((e) => e.occurredAt)
          .sort()
          .pop();
      return {
        contactId: t.id,
        name: t.name,
        ...(t.phone ? { phone: t.phone } : {}),
        isMember:
          !!t.clubJoinedAt || S(e).rows.some((e) => e.contactId === t.id),
        points: O(e, t.id),
        boughtToman: Math.max(0, o.reduce((e, t) => e + t.totalToman, 0) - n),
        sales: o.length,
        ...(i ? { lastVisit: i } : {}),
      };
    }
    const L = 1,
      U = 864e5,
      j = 'Asia/Tehran';
    let B = null,
      F = () => Date.now();
    const H = (e) => new Date(e).toISOString();
    function V() {
      return (B || (B = Re({})), B);
    }
    const W = (t, o = 409, n) => new e.ApiError(t, o, n),
      K = 'demo_only';
    function G(e) {
      return {
        products: e.products,
        movements: e.movements,
        categories: e.categories,
        alarmRules: e.alarmRules,
        alerts: e.alerts,
      };
    }
    function J(e, t) {
      ((e.products = t.products),
        (e.movements = t.movements),
        (e.categories = t.categories || []),
        (e.alarmRules = t.alarmRules || []),
        (e.alerts = t.alerts || []));
    }
    function Z(e, t) {
      return t.productId
        ? e.products.find((e) => e.id === t.productId && !e.archivedAt)
        : e.products.find(
            (e) =>
              !e.archivedAt &&
              (0, n.normalizeName)(e.name) === (0, n.normalizeName)(t.name),
          );
    }
    function $(e, t, o, r = {}, a, s = !1, d = !1) {
      if (!Array.isArray(t) || !t.length) throw W('invalid_request', 400);
      const u = d && 'forbid' !== (0, i.oversellMode)(e.settings),
        l = G(e),
        f = Oe(e, 'batch');
      let h = l;
      const v = [],
        y = new Set(),
        I = new Map();
      for (const [i, c] of t.entries()) {
        const t = {
            ...c,
            ...(void 0 === a || c.timestamp ? {} : { timestamp: H(a) }),
          },
          s = Z({ ...e, products: h.products }, t);
        if (!s && t.productId) throw W('product_changed');
        const d =
            'made' === s?.kind && 'received' === t.kind && 'production' === o
              ? (0, _.demoProductionUse)(
                  s.id,
                  t.quantity,
                  h.products,
                  u ? new Map() : I,
                )
              : [],
          b = h.movements.length;
        try {
          h = (0, n.applyDraft)(h, t, f + '-' + i, o, {
            allowNegative: !0,
            fill: u,
          });
        } catch (e) {
          const t = e instanceof Error ? e.message : 'invalid';
          throw W(
            'invalid' === t ? 'invalid_request' : t,
            'invalid' === t ? 400 : 409,
            'stock_changed' === t && s
              ? { productId: s.id, stock: s.stock }
              : void 0,
          );
        }
        const w = h.movements[h.movements.length - 1],
          A = h.products.find((e) => e.id === w.productId);
        !1 !== w.tracksStock &&
          'made' !== A.kind &&
          ['sold', 'used', 'waste'].includes(w.kind) &&
          Math.round(1e3 * w.quantity) >
            Math.round(1e3 * (w.stockBefore ?? 0)) &&
          !I.has(A.id) &&
          I.set(A.id, {
            productId: A.id,
            name: A.name,
            unit: A.unit || 'piece',
          });
        for (const e of h.movements.slice(b, -1))
          (Object.assign(e, {
            recordedAt: e.timestamp || H(F()),
            timeZone: j,
            batchId: f,
            actorName: (0, m.L)('\u0634\u0645\u0627'),
          }),
            v.push(e));
        const T = w.timestamp || H(F());
        ((w.recordedAt = T),
          (w.timeZone = j),
          (w.batchId = f),
          (w.actorName = (0, m.L)('\u0634\u0645\u0627')),
          Object.assign(w, r),
          'sold' === w.kind &&
            void 0 !== w.unitPrice &&
            (w.revenueTotal = (0, p.lineGross)(w.quantity, w.unitPrice)),
          void 0 !== w.unitCost && (w.costTotal = w.unitCost * w.quantity));
        const k = l.products.find((e) => e.id === A.id),
          q = w.stockBefore ?? 0,
          D = { ...A, version: (A.version || 0) + 1 };
        if ('received' === w.kind && void 0 !== w.unitCost) {
          const e = D.avgCost ?? D.costPrice;
          ((D.avgCost =
            void 0 === e || q <= 0
              ? w.unitCost
              : (e * q + w.unitCost * w.quantity) / (q + w.quantity)),
            void 0 === D.costPrice && (D.costPrice = w.unitCost));
        }
        ('sold' === w.kind &&
          void 0 !== w.unitPrice &&
          void 0 === D.price &&
          (D.price = w.unitPrice),
          k ||
            void 0 === t.unitPrice ||
            'received' !== t.kind ||
            (D.price = t.unitPrice),
          (h = {
            ...h,
            products: h.products.map((e) => (e.id === D.id ? D : e)),
          }),
          v.push(w),
          y.add(D.id));
        for (const [e, t] of d.entries()) {
          const o = h.movements.length;
          h = (0, n.applyDraft)(
            h,
            {
              name: t.product.name,
              productId: t.product.id,
              quantity: t.quantity,
              kind: 'used',
            },
            f + '-' + i + '-u' + e,
            'production',
            { allowNegative: !0, fill: u },
          );
          for (const e of h.movements.slice(o, -1))
            (Object.assign(e, {
              recordedAt: w.recordedAt,
              timeZone: j,
              batchId: f,
              actorName: (0, m.L)('\u0634\u0645\u0627'),
            }),
              v.push(e));
          const r = h.movements[h.movements.length - 1];
          (Object.assign(r, {
            recordedAt: w.recordedAt,
            timeZone: j,
            batchId: f,
            actorName: (0, m.L)('\u0634\u0645\u0627'),
            parentMovementId: w.id,
          }),
            v.push(r),
            y.add(t.product.id),
            (h = {
              ...h,
              products: h.products.map((e) =>
                e.id === t.product.id
                  ? { ...e, version: (e.version || 0) + 1 }
                  : e,
              ),
            }));
        }
      }
      if (I.size) {
        const t = (0, i.oversellMode)(e.settings);
        if (!(0, i.oversellPasses)(t, s)) {
          const e = [...I.values()].map((e) => {
            const t = l.products.find((t) => t.id === e.productId)?.stock ?? 0,
              o = h.products.find((t) => t.id === e.productId)?.stock ?? t;
            return {
              ...e,
              stock: t,
              wanted: Math.round(1e3 * (t - o)) / 1e3,
              after: o,
            };
          });
          throw W('insufficient_stock', 409, {
            productId: e[0].productId,
            name: e[0].name,
            stock: e[0].stock,
            unit: e[0].unit,
            lines: e,
            oversell: t,
          });
        }
      }
      const b = (0, c.evaluateAlarms)(l, h, new Date(F()));
      return (
        J(e, b.state),
        e.revision++,
        {
          products: e.products.filter((e) => y.has(e.id)),
          movements: v,
          alerts: b.created,
        }
      );
    }
    function Q(e, t) {
      if ('count' === t.kind) {
        const o = e.products.find((e) => e.id === t.productId)?.stock ?? 0,
          n = t.stockEffect ?? 0;
        return $(
          e,
          [
            {
              name: t.name,
              productId: t.productId,
              quantity: Math.abs(n),
              kind: 'count',
              expectedStock: o,
              countedStock: Math.round(1e3 * (o - n)) / 1e3,
            },
          ],
          'correction',
          { correctsMovementId: t.id },
        );
      }
      const o = 'received' === t.kind ? 'sold' : 'received';
      return $(
        e,
        [
          {
            name: t.name,
            productId: t.productId,
            quantity: t.quantity,
            kind: o,
            ...(void 0 !== t.unitPrice ? { unitPrice: t.unitPrice } : {}),
            ...(void 0 !== t.unitCost ? { unitCost: t.unitCost } : {}),
          },
        ],
        'correction',
        { correctsMovementId: t.id },
      );
    }
    const X = (e, t) =>
      e.entries
        .filter((e) => e.contactId === t)
        .reduce((e, t) => e + t.amountToman, 0);
    function Y(e, t) {
      return { ...t, balanceToman: X(e, t.id) };
    }
    function ee(e, t) {
      const o = { id: Oe(e, 'entry'), note: '', ...t };
      e.entries.push(o);
      const n = e.contacts.find((e) => e.id === t.contactId);
      return (n && (n.version++, (n.updatedAt = o.occurredAt)), o);
    }
    function te(e, t) {
      const o = e.contacts.find((e) => e.id === t);
      if (!o) throw W('not_found', 404);
      return o;
    }
    function oe(e, t, o, n = !1, i) {
      const r = te(e, t.contactId);
      if (r.archivedAt) throw W('contact_archived');
      const c = Number(t.amountToman);
      if (!Number.isInteger(c) || c <= 0) throw W('invalid_request', 400);
      if ('cheque' === t.method) {
        if (!t.cheque?.dueDate) throw W('invalid_request', 400);
        const a = 'in' === t.direction ? 'receive' : 'pay',
          s = 'in' === t.direction ? 1 : -1,
          d = e.cheques
            .filter(
              (e) =>
                e.contactId === r.id &&
                e.direction === a &&
                'pending' === e.status,
            )
            .reduce((e, t) => e + t.amountToman, 0),
          u = c - (n ? c : Math.min(c, Math.max(0, s * X(e, r.id) - d))),
          l = {
            id: Oe(e, 'cheque'),
            contactId: r.id,
            direction: a,
            amountToman: c,
            dueDate: t.cheque.dueDate,
            status: 'pending',
            occurredAt: H(o),
            note: '',
            version: 1,
            claim: u,
            ...(t.cheque.number ? { number: t.cheque.number } : {}),
            ...(t.cheque.bank ? { bank: t.cheque.bank } : {}),
            ...(t.cheque.payee
              ? { payee: String(t.cheque.payee).trim().slice(0, 100) }
              : {}),
            ...(i ? { forDoc: i } : {}),
          };
        if (
          void 0 !== t.cheque.payee &&
          ('string' != typeof t.cheque.payee ||
            t.cheque.payee.trim().length > 100 ||
            !/^\P{Cc}*$/u.test(t.cheque.payee))
        )
          throw W('invalid_request', 400);
        return (
          e.cheques.push(l),
          u > 0 &&
            ee(e, {
              contactId: r.id,
              amountToman: s * u,
              kind: 'cheque_claim',
              occurredAt: H(o),
              chequeId: l.id,
            }),
          e.extra.push({
            id: 'cq:' + l.id,
            type: 'cheque_created',
            at: H(o),
            name: r.name,
            amount: c,
          }),
          { cheque: ne(l) }
        );
      }
      const a = Oe(e, 'payment');
      return (
        ee(e, {
          contactId: r.id,
          amountToman: 'in' === t.direction ? -c : c,
          kind: 'in' === t.direction ? 'payment_in' : 'payment_out',
          occurredAt: H(o),
          paymentId: a,
          method: 'card' === t.method ? 'card' : 'cash',
          ...(i ? { forDoc: i } : {}),
          ...('string' == typeof t.note && t.note.trim()
            ? { note: t.note.trim().slice(0, 500) }
            : {}),
        }),
        e.extra.push({
          id: 'lp:' + a,
          type: 'in' === t.direction ? 'ledger_in' : 'ledger_out',
          at: H(o),
          name: r.name,
          amount: c,
        }),
        {
          payment: {
            id: a,
            contactId: r.id,
            direction: t.direction,
            method: 'credit' === t.method ? 'cash' : t.method,
            amountToman: c,
            occurredAt: H(o),
            note: '',
          },
        }
      );
    }
    function ne(e) {
      const { claim: t, forDoc: o, changedAt: n, ...i } = e;
      return i;
    }
    function ie(e, t, o, n) {
      ((t.status = o), t.version++, (t.changedAt = H(n)));
      const i = e.contacts.find((e) => e.id === t.contactId),
        r = 'receive' === t.direction;
      ('cashed' === o &&
        ee(e, {
          contactId: t.contactId,
          amountToman: r ? -t.amountToman : t.amountToman,
          kind: r ? 'payment_in' : 'payment_out',
          occurredAt: H(n),
          chequeId: t.id,
          method: 'cheque',
        }),
        'cancelled' === o &&
          t.claim > 0 &&
          ee(e, {
            contactId: t.contactId,
            amountToman: r ? -t.claim : t.claim,
            kind: 'cheque_cancel',
            occurredAt: H(n),
            chequeId: t.id,
          }),
        'cancelled' !== o &&
          e.extra.push({
            id: ('cashed' === o ? 'cs:' : 'cd:') + t.id,
            type: 'cashed' === o ? 'cheque_cashed' : 'cheque_bounced',
            at: H(n),
            name: i?.name,
            amount: t.amountToman,
          }));
    }
    function re(e) {
      return {
        id: e.id,
        direction: e.direction,
        amountToman: e.amountToman,
        dueDate: e.dueDate,
        status: e.status,
        receivedAt: e.occurredAt,
        ...(e.number ? { number: e.number } : {}),
        ...(e.bank ? { bank: e.bank } : {}),
        ...(e.payee ? { payee: e.payee } : {}),
      };
    }
    function ce(e, t) {
      const o = (t) =>
          t ? e.docs.find((e) => e.id === t.id && e.type === t.type) : void 0,
        n = (e) =>
          e ? { type: e.type, id: e.id, receiptNo: e.receiptNo } : void 0,
        i = (t) => {
          const o = t ? e.cheques.find((e) => e.id === t) : void 0;
          return o ? re(o) : void 0;
        },
        r = e.entries
          .filter((e) => e.contactId === t)
          .map((t) => {
            const r =
                'sale' === t.kind || 'purchase' === t.kind
                  ? o(
                      t.saleId
                        ? { type: 'sale', id: t.saleId }
                        : t.purchaseId
                          ? { type: 'purchase', id: t.purchaseId }
                          : void 0,
                    )
                  : void 0,
              c =
                'adjustment' === t.kind
                  ? n(
                      o(
                        t.saleId
                          ? { type: 'sale', id: t.saleId }
                          : t.purchaseId
                            ? { type: 'purchase', id: t.purchaseId }
                            : void 0,
                      ),
                    )
                  : void 0,
              a = i(t.chequeId),
              s = t.chequeId
                ? e.cheques.find((e) => e.id === t.chequeId)?.forDoc
                : void 0,
              d = n(o(t.forDoc || (t.kind.startsWith('payment') ? s : void 0)));
            return {
              id: t.id,
              key: (0, M.bookKey)(
                t.id,
                'sale' === t.kind || 'purchase' === t.kind,
              ),
              occurredAt: t.occurredAt,
              kind: t.kind,
              amountToman: t.amountToman,
              posted: !0,
              ...(t.note && !t.note.startsWith('correction ')
                ? { note: t.note }
                : {}),
              ...(r && 'sale' === t.kind ? { saleId: r.id } : {}),
              ...(r && 'purchase' === t.kind ? { purchaseId: r.id } : {}),
              ...((u = r),
              u
                ? {
                    receiptNo: u.receiptNo,
                    lineCount: u.lines.length,
                    items: u.lines
                      .slice(0, 8)
                      .map((e) => ({ name: e.name, quantity: e.quantity })),
                  }
                : {}),
              ...(t.kind.startsWith('payment')
                ? { method: t.method || (t.chequeId ? 'cheque' : 'cash') }
                : {}),
              ...(d ? { forDocument: d } : {}),
              ...(c ? { corrects: c } : {}),
              ...(a ? { cheque: a } : {}),
              ...(t.debtId
                ? {
                    debtId: t.debtId,
                    ...('debt_reversal' !== t.kind &&
                    e.entries.some(
                      (e) =>
                        e.debtId === t.debtId && 'debt_reversal' === e.kind,
                    )
                      ? { reversed: !0 }
                      : {}),
                  }
                : {}),
              ...(t.paymentId &&
              'payment_reversal' !== t.kind &&
              e.entries.some(
                (e) =>
                  e.paymentId === t.paymentId && 'payment_reversal' === e.kind,
              )
                ? { reversed: !0 }
                : {}),
              ...(!t.paymentId ||
              ('payment_in' !== t.kind && 'payment_out' !== t.kind)
                ? {}
                : { paymentId: t.paymentId }),
            };
            var u;
          });
      for (const i of e.cheques.filter((e) => e.contactId === t))
        (0 === i.claim &&
          r.push({
            id: i.id,
            key: (0, M.bookKey)(i.id, !1, 'r'),
            occurredAt: i.occurredAt,
            kind: 'cheque_received',
            amountToman: 0,
            posted: !1,
            cheque: re(i),
            ...(n(o(i.forDoc)) ? { forDocument: n(o(i.forDoc)) } : {}),
          }),
          ('bounced' === i.status ||
            ('cancelled' === i.status && 0 === i.claim)) &&
            r.push({
              id: i.id,
              key: (0, M.bookKey)(i.id, !1, 'x'),
              occurredAt: i.changedAt || i.occurredAt,
              kind:
                'bounced' === i.status ? 'cheque_bounced' : 'cheque_cancelled',
              amountToman: 0,
              posted: !1,
              cheque: re(i),
            }));
      return (0, M.withBalances)(r);
    }
    function ae(e, t) {
      return e.docs
        .filter((e) => 'sale' === e.type && e.contactId === t)
        .map((t) => ({
          doc: t,
          sale: {
            id: t.id,
            occurredAt: t.occurredAt,
            totalToman: t.totalToman,
            paidToman: t.paidToman,
            paymentMethod: t.paymentMethod,
            corrected: ue(e, t).corrected,
            chequeFailed: e.cheques.some(
              (e) =>
                e.forDoc?.id === t.id &&
                ('bounced' === e.status || 'cancelled' === e.status),
            ),
          },
        }));
    }
    function se(e, t, o) {
      const n = new Set(
          e.movements
            .filter((e) => e.correctsMovementId)
            .map((e) => e.correctsMovementId),
        ),
        i = e.movements
          .filter(
            (e) =>
              e.productId === t &&
              'received' === e.kind &&
              !e.correctsMovementId &&
              !e.parentMovementId &&
              !n.has(e.id) &&
              !['json', 'excel', 'csv'].includes(e.source || '') &&
              (e.purchaseId || void 0 !== e.costTotal || e.supplierName),
          )
          .sort(
            (e, t) =>
              (t.timestamp || '').localeCompare(e.timestamp || '') ||
              t.id.localeCompare(e.id),
          ),
        r = o.lastIndexOf('_'),
        c = r > 0 ? o.slice(0, r) : '',
        a = r > 0 ? o.slice(r + 1) : '',
        s = c
          ? i.filter(
              (e) => (e.timestamp || '') < c || (e.timestamp === c && e.id < a),
            )
          : i,
        d = s.slice(0, 20),
        u = d[d.length - 1];
      return {
        see: { buyPrice: !0 },
        deliveries: d.map((t) => {
          const o = t.purchaseId
              ? e.docs.find((e) => e.id === t.purchaseId)
              : void 0,
            n = o?.contactId
              ? e.contacts.find((e) => e.id === o.contactId)
              : void 0,
            i = n?.name || t.supplierName;
          return {
            id: t.id,
            occurredAt: t.timestamp || H(F()),
            quantity: t.quantity,
            ...(void 0 !== t.costTotal && t.quantity > 0
              ? { unitCost: Math.round(t.costTotal / t.quantity) }
              : {}),
            ...(i ? { supplier: i } : {}),
            ...(n ? { contactId: n.id } : {}),
            ...(o ? { receiptNo: o.receiptNo } : {}),
          };
        }),
        ...(s.length > 20 && u
          ? { next: (u.timestamp || '') + '_' + u.id }
          : {}),
      };
    }
    function de(e, t, o, n = F()) {
      const i = Array.isArray(o.lines) ? o.lines : [],
        r = o.payment?.method;
      if (!i.length || i.length > 60 || !r) throw W('invalid_request', 400);
      o.contactId && te(e, o.contactId);
      const c = Oe(e, t),
        a = 'sale' === t ? 'saleId' : 'purchaseId',
        s = i.map((e) => ({
          name: e.name,
          quantity: Number(e.quantity),
          kind: 'sale' === t ? 'sold' : 'received',
          ...(e.productId ? { productId: e.productId } : {}),
          ...('sale' === t && void 0 !== e.unitPrice
            ? { unitPrice: Number(e.unitPrice) }
            : {}),
          ...('purchase' === t && void 0 !== e.unitCost
            ? { unitCost: Number(e.unitCost) }
            : {}),
          ...(e.expiresAt ? { expiresAt: e.expiresAt } : {}),
        })),
        d = (o) => {
          const n = Z(e, o),
            i = 'sale' === t ? (o.unitPrice ?? n?.price) : o.unitCost;
          return 'sale' === t
            ? (0, p.lineGross)(o.quantity, i ?? 0)
            : (i ?? 0) * o.quantity;
        },
        u = ('sale' === t && Number(o.club?.points)) || 0;
      let l,
        m = 0,
        v = 0;
      const y = 'sale' === t ? o.club?.rewardId : void 0;
      if (void 0 !== y) {
        if (null !== we()) throw W('club_plus_only', 402);
        if (!o.contactId) throw W('contact_required', 400);
        if (!S(e).rule.enabled) throw W('club_off');
        if (u) throw W('invalid_request', 400);
        const t = (S(e).rewards || []).find((e) => e.id === y);
        if (!t) throw W('club_reward_gone', 409);
        const n = O(e, o.contactId),
          r = (0, p.priceSale)(
            s.map((e, t) => ({ gross: d(e), discount: i[t]?.discount })),
            o.invoiceDiscount,
          ).total,
          c = (0, h.rewardRefusal)(t, n, r);
        if (c)
          throw W(
            c,
            409,
            'club_not_enough_points' === c
              ? { points: n, needed: t.points }
              : { minToman: t.minToman ?? 0 },
          );
        ((m = t.points), (v = (0, h.rewardDiscount)(t, r)), (l = t));
        const a = o.club?.shownToman;
        if (void 0 !== a && a !== v) throw W('club_reward_gone', 409);
      }
      if (u > 0) {
        if (null !== we()) throw W('club_plus_only', 402);
        if (!o.contactId) throw W('contact_required', 400);
        if (!S(e).rule.enabled) throw W('club_off');
        const t = O(e, o.contactId),
          n = S(e).rule;
        if (
          (u <= t &&
            (m = Math.min(
              u,
              (0, f.usablePoints)(
                t,
                (0, p.priceSale)(
                  s.map((e, t) => ({ gross: d(e), discount: i[t]?.discount })),
                  o.invoiceDiscount,
                ).total,
                n,
              ),
            )),
          !m)
        )
          throw W('club_not_enough_points', 409, { points: t });
        v = (0, f.pointsValue)(m, n);
      }
      const I =
          'sale' === t
            ? (0, f.priceWithClub)(
                s.map((e, t) => ({ gross: d(e), discount: i[t]?.discount })),
                o.invoiceDiscount,
                v,
              ).total
            : s.reduce((e, t) => e + d(t), 0),
        b =
          void 0 !== o.payment?.paidToman
            ? Number(o.payment.paidToman)
            : 'credit' === r
              ? 0
              : I;
      if (!Number.isFinite(b) || b < 0 || b > I)
        throw W('invalid_request', 400);
      if (!o.contactId && ('credit' === r || 'cheque' === r || b !== I))
        throw W('contact_required');
      if (!('cheque' !== r || (b && o.payment?.cheque?.dueDate)))
        throw W('invalid_request', 400);
      let w;
      const A = [];
      for (let e = 0; e < s.length; e += 20) A.push(s.slice(e, e + 20));
      const T = [];
      for (const i of A)
        ((w = $(
          e,
          i,
          'sale' === t ? 'basket' : 'manual',
          { [a]: c },
          n,
          !0 === o.allowNegative,
          !0 === o.fillShortage,
        )),
          T.push(...w.movements));
      const k = T.map((o) => ({
        id: Oe(e, 'line'),
        movementId: o.id,
        productId: o.productId,
        name: o.name,
        unit: e.products.find((e) => e.id === o.productId)?.unit || 'piece',
        quantity: o.quantity,
        corrected: !1,
        ...('sale' === t
          ? {
              ...(void 0 !== o.unitPrice ? { unitPrice: o.unitPrice } : {}),
              saleTotal: o.revenueTotal ?? 0,
            }
          : void 0 !== o.unitCost
            ? { unitCost: o.unitCost, purchaseTotal: o.costTotal ?? 0 }
            : { unpriced: !0 }),
        ...(o.expiresAt ? { expiresAt: o.expiresAt } : {}),
      }));
      let _;
      if ('sale' === t) {
        const e = k.filter((e, t) => !T[t].parentMovementId);
        ((_ = (0, f.priceWithClub)(
          e.map((e, t) => ({
            gross: e.saleTotal ?? 0,
            discount: i[t]?.discount,
          })),
          o.invoiceDiscount,
          v,
        )),
          e.forEach((e, t) => {
            const o = _.lines[t];
            if (!o.lineDiscount && !o.invoiceShare) return;
            const n = (0, p.cleanDiscount)(i[t]?.discount)?.reason;
            Object.assign(e, {
              grossTotal: o.gross,
              lineDiscount: o.lineDiscount,
              invoiceShare: o.invoiceShare,
              saleTotal: o.net,
              ...(n ? { discountReason: n } : {}),
            });
          }));
      }
      const q = k.reduce(
          (e, t) => e + (t.saleTotal ?? t.purchaseTotal ?? 0),
          0,
        ),
        D = {
          id: c,
          type: t,
          receiptNo: 'sale' === t ? ++e.receiptNo : ++e.purchaseNo,
          paymentMethod: r,
          totalToman: q,
          paidToman: Math.min(b, q),
          occurredAt: H(n),
          note: o.note || '',
          corrected: !1,
          ...(o.contactId ? { contactId: o.contactId } : {}),
          ...(_ && _.discount
            ? {
                grossToman: _.gross,
                discountToman: _.discount,
                invoiceDiscount: (0, p.cleanDiscount)(o.invoiceDiscount),
              }
            : {}),
          ...(_ && _.club
            ? {
                clubDiscountToman: _.club,
                clubPointsUsed: m,
                ...(l ? { clubReward: { ...l } } : {}),
              }
            : {}),
          lines: k,
        };
      let P;
      if (
        (e.docs.push(D),
        'sale' === t &&
          o.contactId &&
          (m &&
            E(e, {
              contactId: o.contactId,
              kind: 'used',
              points: -m,
              saleId: c,
              occurredAt: H(n),
            }),
          S(e).rule.enabled &&
            null === we() &&
            E(e, {
              contactId: o.contactId,
              kind: 'earned',
              points: (0, f.pointsFor)(q, S(e).rule),
              saleId: c,
              occurredAt: H(n),
            })),
        o.contactId &&
          (ee(e, {
            contactId: o.contactId,
            amountToman: 'sale' === t ? q : -q,
            kind: t,
            occurredAt: H(n),
            [a]: c,
          }),
          D.paidToman > 0))
      ) {
        const i = oe(
          e,
          {
            contactId: o.contactId,
            direction: 'sale' === t ? 'in' : 'out',
            method: r,
            amountToman: D.paidToman,
            ...('cheque' === r ? { cheque: o.payment.cheque } : {}),
          },
          n,
          !0,
          { type: t, id: c },
        );
        P = i.cheque?.id;
      }
      return { [t]: ue(e, D), ...(P ? { chequeId: P } : {}) };
    }
    function ue(e, { issuedAt: t, ...o }) {
      const n = new Set(
          e.movements
            .filter((e) => e.correctsMovementId)
            .map((e) => e.correctsMovementId),
        ),
        i = (e.returns || []).filter((e) => e.docId === o.id),
        r = o.lines.map((t) => {
          const o = t.productId
              ? e.products.find((e) => e.id === t.productId)?.barcode?.trim()
              : void 0,
            r =
              ((c = t.id),
              i.reduce(
                (e, t) =>
                  e +
                  t.lines
                    .filter((e) => e.lineId === c)
                    .reduce((e, t) => e + t.quantity, 0),
                0,
              ));
          var c;
          return {
            ...t,
            ...(o ? { barcode: o } : {}),
            ...(r > 0 ? { returned: r } : {}),
            corrected: n.has(t.movementId),
          };
        });
      return {
        ...o,
        lines: r,
        corrected: r.every((e) => e.corrected),
        ...(i.length
          ? {
              returns: i.map((e) => ({
                id: e.id,
                returnNo: e.returnNo,
                totalToman: e.totalToman,
                occurredAt: e.occurredAt,
              })),
            }
          : {}),
      };
    }
    function le(e, t, n) {
      const r = 'sale_return' === t.kind,
        c = r ? t.saleId : t.purchaseId;
      if (!c || !Array.isArray(t.lines) || !t.lines.length) throw W(K);
      const a = e.docs.find(
        (e) => e.id === c && e.type === (r ? 'sale' : 'purchase'),
      );
      if (!a) throw W('not_found', 404);
      const s = ue(e, a);
      if (s.corrected) throw W('invoice_corrected');
      const d =
        'card' === t.refund || 'credit' === t.refund ? t.refund : 'cash';
      if ('credit' === d && !a.contactId) throw W('contact_required', 400);
      const u = t.lines.map((n) => {
        const c = s.lines.find((e) => e.id === n.lineId),
          a = Number(n.quantity);
        if (!(c && a > 0)) throw W('return_lines', 400);
        if (c.corrected) throw W('line_cancelled');
        const d = (0, o.returnableQuantity)(c.quantity, c.returned || 0);
        if (a > d + 1e-9)
          throw W('return_too_much', 409, {
            lineId: c.id,
            name: c.name,
            left: d,
          });
        const u = e.products.find((e) => e.id === c.productId),
          l = (0, i.oversellMode)(e.settings);
        if (
          !r &&
          u &&
          u.stock + 1e-9 < a &&
          !(0, i.oversellPasses)(l, !0 === t.allowNegative)
        ) {
          const e = {
            productId: u.id,
            name: u.name,
            unit: u.unit || 'piece',
            stock: u.stock,
            wanted: a,
            after: Math.round(1e3 * (u.stock - a)) / 1e3,
          };
          throw W('insufficient_stock', 409, { ...e, lines: [e], oversell: l });
        }
        const m =
          void 0 === (c.saleTotal ?? c.purchaseTotal)
            ? 0
            : (0, o.returnShare)(
                { quantity: c.quantity, total: c.saleTotal ?? c.purchaseTotal },
                {
                  quantity: c.returned || 0,
                  total: Math.round(
                    ((c.saleTotal ?? c.purchaseTotal) * (c.returned || 0)) /
                      c.quantity,
                  ),
                },
                a,
              );
        return { line: c, q: a, total: m };
      });
      e.returns ||= [];
      const l = r
          ? (e.saleReturnNo = (e.saleReturnNo || 0) + 1)
          : (e.purchaseReturnNo = (e.purchaseReturnNo || 0) + 1),
        m = {
          id: Oe(e, 'return'),
          type: r ? 'sale_return' : 'purchase_return',
          returnNo: l,
          docId: c,
          ...(a.contactId ? { contactId: a.contactId } : {}),
          refundMethod: d,
          totalToman: u.reduce((e, t) => e + t.total, 0),
          occurredAt: H(n),
          lines: u.map((t) => ({
            id: Oe(e, 'line'),
            lineId: t.line.id,
            productId: t.line.productId,
            name: t.line.name,
            unit: t.line.unit,
            quantity: t.q,
            total: t.total,
          })),
        };
      return (
        e.returns.push(m),
        r && x(e, a, n, m.id),
        (e.products = e.products.map((e) => {
          const t = m.lines
            .filter((t) => t.productId === e.id)
            .reduce((e, t) => e + t.quantity, 0);
          return t && 'made' !== e.kind
            ? {
                ...e,
                stock: Math.round(1e3 * (e.stock + (r ? t : -t))) / 1e3,
                version: e.version + 1,
              }
            : e;
        })),
        e.revision++,
        e.extra.push({
          id: 'rt:' + m.id,
          type: m.type,
          at: m.occurredAt,
          name: m.lines[0]?.name,
          amount: m.totalToman,
        }),
        a.contactId &&
          m.totalToman > 0 &&
          (ee(e, {
            contactId: a.contactId,
            amountToman: r ? -m.totalToman : m.totalToman,
            kind: m.type,
            occurredAt: m.occurredAt,
          }),
          'credit' !== d &&
            oe(
              e,
              {
                contactId: a.contactId,
                direction: r ? 'out' : 'in',
                method: d,
                amountToman: m.totalToman,
              },
              n,
            )),
        {
          return: {
            id: m.id,
            type: m.type,
            returnNo: m.returnNo,
            refundMethod: m.refundMethod,
            totalToman: m.totalToman,
            occurredAt: m.occurredAt,
            lineCount: m.lines.length,
            originNo: a.receiptNo,
            ...(r ? { saleId: c } : { purchaseId: c }),
            ...(m.contactId ? { contactId: m.contactId } : {}),
            lines: m.lines.map((e) => ({
              id: e.id,
              name: e.name,
              unit: e.unit,
              quantity: e.quantity,
              ...(r ? { saleTotal: e.total } : { purchaseTotal: e.total }),
            })),
          },
          revision: e.revision,
          policyRevision: L,
        }
      );
    }
    function me(e, t) {
      const { lines: o, ...n } = ue(e, t);
      return n;
    }
    function pe(e, t) {
      const o = t.contactId
        ? e.contacts.find((e) => e.id === t.contactId)?.name
        : void 0;
      return {
        ...me(e, t),
        ...(o ? { contactName: o } : {}),
        lineCount: t.lines.length,
        issued: !!t.issuedAt,
      };
    }
    function fe(e, t) {
      const o = t.contactId
        ? e.contacts.find((e) => e.id === t.contactId)?.name
        : void 0;
      return {
        ...(o ? { contactName: o } : {}),
        stockOnly: !t.contactId,
        photoCount: 0,
        photos: [],
      };
    }
    function he(e, t) {
      const { photos: o, ...n } = fe(e, t);
      return { ...me(e, t), ...n, lineCount: t.lines.length };
    }
    function ve(e, t, o) {
      if ('cheque' === t.method || t.chequeId)
        throw W('payment_not_reversible');
      if (
        e.entries.some(
          (e) => e.paymentId === t.paymentId && 'payment_reversal' === e.kind,
        )
      )
        throw W('payment_already_reversed');
      return (
        (e.extra = e.extra.filter((e) => e.id !== 'lp:' + t.paymentId)),
        ee(e, {
          contactId: t.contactId,
          amountToman: -t.amountToman,
          kind: 'payment_reversal',
          occurredAt: H(o),
          paymentId: t.paymentId,
          method: t.method,
          note: t.note,
        })
      );
    }
    function ye(e, t, o, n = F(), i = !1) {
      const r = e.docs.find((e) => e.id === o && e.type === t);
      if (!r) throw W('not_found', 404);
      const c = new Set(
          e.movements
            .filter((e) => e.correctsMovementId)
            .map((e) => e.correctsMovementId),
        ),
        a = r.lines.filter((e) => !c.has(e.movementId));
      if (!a.length) throw W('movement_already_corrected');
      if (
        (e.returns || []).some(
          (e) =>
            e.docId === r.id &&
            e.lines.some((e) => a.some((t) => t.id === e.lineId)),
        )
      )
        throw W('invoice_has_returns');
      const s = { ...e };
      for (const e of a) {
        const t = s.movements.find((t) => t.id === e.movementId);
        t && Q(s, t);
      }
      const d = [];
      for (const t of a) {
        const o = e.movements.find((e) => e.id === t.movementId);
        o && d.push(...Q(e, o).movements);
      }
      const u = a.reduce(
        (e, t) => e + (t.saleTotal ?? t.purchaseTotal ?? 0),
        0,
      );
      r.contactId &&
        u &&
        ee(e, {
          contactId: r.contactId,
          amountToman: 'sale' === t ? -u : u,
          kind: 'adjustment',
          occurredAt: H(n),
          note: 'correction ' + r.id,
          ['sale' === t ? 'saleId' : 'purchaseId']: r.id,
        });
      const l = i
        ? e.entries.find(
            (e) =>
              e.paymentId &&
              e.forDoc?.type === t &&
              e.forDoc.id === r.id &&
              ('payment_in' === e.kind || 'payment_out' === e.kind) &&
              'cheque' !== e.method &&
              !e.chequeId,
          )
        : void 0;
      return (
        l &&
          !e.entries.some(
            (e) => e.paymentId === l.paymentId && 'payment_reversal' === e.kind,
          ) &&
          ve(e, l, n),
        x(e, r, n),
        {
          document: ue(e, r),
          movements: d,
          ...(i ? { paymentReversed: !!l } : {}),
        }
      );
    }
    function Ie(e) {
      const t = (0, a.localDate)(new Date(F())),
        o = new Map(e.movements.map((e) => [e.id, e])),
        n = e.movements.flatMap((e) => {
          const n = e.correctsMovementId ? o.get(e.correctsMovementId) : void 0;
          if (e.correctsMovementId && !n) return [];
          const i = n
            ? {
                ...n,
                quantity: -e.quantity,
                ...(null != n.revenueTotal
                  ? { revenueTotal: -n.revenueTotal }
                  : {}),
                ...(null != n.costTotal ? { costTotal: -n.costTotal } : {}),
              }
            : e;
          return i.timestamp && (0, a.localDate)(new Date(i.timestamp)) === t
            ? [i]
            : [];
        }),
        i = (t) => e.products.find((e) => e.id === t)?.unit || 'piece',
        r = (e) => e.quantity,
        c = (e) =>
          n
            .filter((t) => t.kind === e && !(0, a.measuredUnit)(i(t.productId)))
            .reduce((e, t) => e + r(t), 0),
        s = (e) => {
          const t = {};
          for (const o of n) {
            const n = (0, a.measuredUnit)(i(o.productId));
            o.kind === e &&
              n &&
              (t[n] = Math.round(1e3 * ((t[n] || 0) + r(o))) / 1e3);
          }
          for (const e of Object.keys(t)) t[e] || delete t[e];
          return Object.keys(t).length ? t : void 0;
        },
        d = s('received'),
        u = s('sold'),
        l = n.filter((e) => 'sold' === e.kind),
        m = l.reduce((e, t) => e + (t.revenueTotal ?? 0), 0),
        p = l.reduce((e, t) => e + (t.costTotal ?? 0), 0),
        f = e.products.filter((e) => !e.archivedAt);
      return {
        timezone: j,
        today: {
          unpricedSoldUnits: l
            .filter((e) => void 0 === e.unitPrice)
            .reduce((e, t) => e + t.quantity, 0),
          uncostedSoldUnits: l
            .filter((e) => void 0 === e.unitCost)
            .reduce((e, t) => e + t.quantity, 0),
          unpricedReceivedUnits: 0,
          unpricedSoldProducts: new Set(
            l.filter((e) => void 0 === e.unitPrice).map((e) => e.productId),
          ).size,
          uncostedSoldProducts: new Set(
            l.filter((e) => void 0 === e.unitCost).map((e) => e.productId),
          ).size,
          unpricedReceivedProducts: 0,
          received: c('received'),
          sold: c('sold'),
          ...(d ? { receivedMeasured: d } : {}),
          ...(u ? { soldMeasured: u } : {}),
          used: c('used'),
          waste: c('waste'),
          revenue: m,
          costTotal: p,
          grossProfit: m - p,
          valuationAdjustment: 0,
        },
        low: (0, a.lowStockList)(e.products, e.alarmRules, 1 / 0).length,
        zero: f.filter((e) => 0 === e.stock).length,
        negative: 0,
        policyRevision: L,
      };
    }
    function ge(e, t) {
      const o = new Date(F()),
        n = (0, a.summarizeLocal)(e.movements, t, o, e.products),
        i = (0, a.localDate)(new Date(o.getTime() - (t - 1) * U)),
        r = new Map();
      for (const t of e.docs)
        if (
          'sale' === t.type &&
          !t.corrected &&
          t.contactId &&
          (0, a.localDate)(new Date(t.occurredAt)) >= i &&
          new Date(t.occurredAt) <= o
        ) {
          const e = r.get(t.contactId) || { revenue: 0, count: 0 };
          ((e.revenue += t.totalToman), e.count++, r.set(t.contactId, e));
        }
      const c = [...r]
        .map(([t, o]) => ({
          contactId: t,
          name: e.contacts.find((e) => e.id === t)?.name || '',
          ...o,
        }))
        .filter((e) => e.revenue > 0)
        .sort((e, t) => t.revenue - e.revenue || t.count - e.count)
        .slice(0, 5);
      return {
        period: t,
        timezone: j,
        ...n,
        ...(n.business ? { business: { ...n.business, customers: c } } : {}),
      };
    }
    function be(e, t) {
      const o = (0, I.fixTrail)(e.movements),
        n = e.movements
          .filter((e) => e.timestamp && !e.parentMovementId)
          .map((t) => {
            return {
              id: 'mv:' + t.id,
              type: t.correctsMovementId ? 'correction' : t.kind,
              at: t.timestamp,
              actorId: 'demo',
              actorName: (0, m.L)('\u0634\u0645\u0627'),
              groupKey: t.batchId,
              saleId: t.saleId,
              purchaseId: t.purchaseId,
              productId: t.productId,
              name: t.name,
              quantity: t.quantity,
              unit:
                ((n = t.productId),
                e.products.find((e) => e.id === n)?.unit || 'piece'),
              amount:
                'sold' !== t.kind ||
                void 0 === t.revenueTotal ||
                t.correctsMovementId
                  ? 'received' !== t.kind ||
                    void 0 === t.costTotal ||
                    t.correctsMovementId
                    ? null
                    : t.costTotal
                  : t.revenueTotal,
              ...('count' !== t.kind || t.correctsMovementId
                ? o.has(t.correctsMovementId || t.id)
                  ? { detail: o.get(t.correctsMovementId || t.id) }
                  : {}
                : { detail: t.stockBefore + '>' + t.stockAfter }),
            };
            var n;
          }),
        i = e.extra.map((e) => ({
          id: e.id,
          type: e.type,
          at: e.at,
          actorId: 'demo',
          actorName: (0, m.L)('\u0634\u0645\u0627'),
          name: e.name,
          ...(e.type.startsWith('ledger') || e.type.startsWith('cheque')
            ? { detail: e.name }
            : {}),
          amount: e.amount ?? null,
          productId: e.productId ?? null,
        })),
        r = Math.min(100, Math.max(1, Number(t.get('limit')) || 50)),
        c = t.get('group') || 'all',
        a = (0, u.mergeActivity)([n, i], {
          limit: r,
          before: (0, u.decodeActivityCursor)(t.get('before')),
          group: c,
          selfId: 'demo',
        });
      return {
        ...a,
        items: a.items.map((t) => {
          const o = e.notes.get(t.id);
          return o ? { ...t, note: o } : t;
        }),
      };
    }
    function we() {
      try {
        const e = globalThis.window,
          t = e?.location?.hostname || '';
        if (!e?.location || ('localhost' !== t && '127.0.0.1' !== t))
          return null;
        const o = new URLSearchParams(e.location.search).get('dev-free-plan');
        if (null === o) return null;
        const n = Number(o);
        return Number.isInteger(n) && n >= 0 && n <= d.FREE_RECORD_LIMIT
          ? n
          : null;
      } catch {
        return null;
      }
    }
    function Ae() {
      try {
        const e = globalThis.window,
          t = e?.location?.hostname || '';
        return (
          !(!e?.location || ('localhost' !== t && '127.0.0.1' !== t)) &&
          '1' === new URLSearchParams(e.location.search).get('dev-no-alarm')
        );
      } catch {
        return !1;
      }
    }
    function Te(e) {
      {
        const e = (0, t.plansPreview)();
        if (e) return (0, t.previewBilling)(e, F());
      }
      const o = we();
      if (null !== o) {
        const t = {
            voice: !0,
            image: !1,
            batch: !0,
            pdf: !0,
            spreadsheet: !0,
            reports: !0,
            team: !1,
            integrations: !1,
            ledger: !0,
            cheques: !0,
          },
          n = (0, d.freeMonth)(j, F());
        return {
          access: 'free',
          fresh: !1,
          offer: null,
          refund: null,
          launch: null,
          retention: null,
          firstPurchase: !1,
          offlineDays: 30,
          trial: null,
          checkoutAvailable: !1,
          bazaarCheckout: !1,
          records: {
            limit: d.FREE_RECORD_LIMIT,
            used: d.FREE_RECORD_LIMIT - o,
            left: o,
            month: n.from,
            resetsOn: n.next,
          },
          free: {
            title: (0, m.L)('\u0631\u0627\u06cc\u06af\u0627\u0646'),
            description: '',
            monthly_record_limit: d.FREE_RECORD_LIMIT,
            ai_daily_limit: 5,
            member_limit: 1,
            features: t,
          },
          subscription: {
            plan_id: 'free',
            purchased_plan_id: 'free',
            title: (0, m.L)('\u0631\u0627\u06cc\u06af\u0627\u0646'),
            status: 'active',
            starts_at: H(F() - 864e6),
            expires_at: null,
            ai_daily_limit: 5,
            member_limit: 1,
            monthly_record_limit: d.FREE_RECORD_LIMIT,
            features: t,
          },
          usage: { used: Math.min(e.aiUsed, 5), limit: 5 },
          plans: [],
          features: [],
        };
      }
      const n = Object.fromEntries(
        [
          'voice',
          'image',
          'batch',
          'pdf',
          'spreadsheet',
          'reports',
          'team',
          'integrations',
          'ledger',
          'cheques',
        ].map((e) => [e, !0]),
      );
      return {
        access: 'active',
        fresh: !1,
        offer: null,
        refund: null,
        launch: null,
        retention: null,
        firstPurchase: !1,
        offlineDays: 30,
        trial: null,
        checkoutAvailable: !1,
        bazaarCheckout: !1,
        subscription: {
          plan_id: 'pro',
          purchased_plan_id: 'pro',
          title: (0, m.L)('\u067e\u0644\u0627\u0633'),
          status: 'active',
          starts_at: H(F() - 864e6),
          expires_at: H(F() + 1728e6),
          ai_daily_limit: 60,
          member_limit: 4,
          features: n,
        },
        usage: { used: e.aiUsed, limit: 60 },
        plans: [],
        features: [],
      };
    }
    const ke = (e) => ({
      id: v.DEMO_SHOP_ID,
      name: e.shopName,
      role: 'owner',
      ...(0, q.staffPreview)(),
      timezone: j,
      businessType: 'reseller',
      businessExample: (0, m.L)(
        '\u067e\u0648\u0634\u0627\u06a9\u060c \u06a9\u06cc\u0641 \u0648 \u06a9\u0641\u0634',
      ),
      settings: e.settings,
      revision: e.shopRevision,
      policyRevision: L,
    });
    function qe(e) {
      return {
        products: [],
        movements: [],
        categories: [],
        alarmRules: [],
        alerts: [],
        revision: 1,
        shopRevision: 1,
        shopName: e,
        settings: {
          homeCards: ['today', 'week', 'recent', 'ledger'],
          staffView: {
            buyPrice: !0,
            sellPrice: !0,
            profit: !0,
            ledger: !0,
            reports: !0,
          },
          expiringDays: 30,
        },
        contacts: [],
        entries: [],
        cheques: [],
        docs: [],
        toBuy: [],
        notes: new Map(),
        extra: [],
        receiptNo: 1040,
        purchaseNo: 210,
        seq: 0,
        aiUsed: 0,
      };
    }
    const De = (e, t, o) => {
        if (0 === t) return e - 9 * Math.max(1, 12 - o) * 6e4;
        const n = new Date(e - t * U);
        return (n.setHours(o, (17 * t + 7 * o) % 60, 0, 0), n.getTime());
      },
      Pe = (e, t) => (0, a.localDate)(new Date(e + t * U));
    function Me(e, t) {
      return (
        e.products.forEach((e, o) => {
          e.createdAt = H(t - 10368e5 + 6e4 * o);
        }),
        e
      );
    }
    function Re(e) {
      const t = e.now ?? F(),
        o =
          e.field || e.custom ? (0, A.demoKind)(e.field, e.custom) : 'clothing';
      if ('clothing' !== o && 'shoes' !== o) return Ne(e, t, o);
      const n = (0, w.clothingSeed)(),
        i = qe(e.shopName || n.shopName);
      for (const e of n.models)
        for (const t of e.sizes.length ? e.sizes : [''])
          for (const o of e.colors.length ? e.colors : ['']) {
            const n = Oe(i, 'p');
            i.products.push({
              id: n,
              name: (0, l.variantName)(e.model, t, o),
              detail: '',
              stock: 0,
              unit: 'piece',
              kind: 'simple',
              category: e.category,
              model: e.model,
              ...(t ? { size: t } : {}),
              ...(o ? { color: o } : {}),
              price: e.price,
              costPrice: e.cost,
              ...(e.salePrices
                ? { salePrices: e.salePrices.map((e) => ({ ...e })) }
                : {}),
              version: 1,
            });
          }
      for (const e of n.items)
        i.products.push({
          id: Oe(i, 'p'),
          name: e.name,
          detail: '',
          stock: 0,
          unit: e.unit || 'piece',
          kind: 'simple',
          category: e.category,
          price: e.price,
          ...(void 0 !== e.cost ? { costPrice: e.cost } : {}),
          ...(e.salePrices
            ? { salePrices: e.salePrices.map((e) => ({ ...e })) }
            : {}),
          version: 1,
        });
      ((i.categories = [
        ...new Set([
          ...n.models.map((e) => e.category),
          ...n.items.map((e) => e.category),
        ]),
      ]),
        (i.alarmRules = Ae()
          ? []
          : [
              {
                id: 'rule-all',
                scope: 'all',
                kind: 'atOrBelow',
                threshold: 2,
                enabled: !0,
              },
            ]));
      const r = new Map(n.contacts.map((e) => [e.key, Oe(i, 'c')]));
      for (const e of n.contacts)
        i.contacts.push({
          id: r.get(e.key),
          name: e.name,
          kind: e.kind,
          ...(e.phone ? { phone: e.phone } : {}),
          ...(e.favorite ? { favorite: !0 } : {}),
          version: 1,
          createdAt: H(t - 10368e5),
          updatedAt: H(t - 10368e5),
        });
      const c = (e) => {
          const [t, o, n] = e.split('|'),
            r =
              void 0 !== o
                ? i.products.find(
                    (e) =>
                      e.model === t &&
                      (0, l.sameValue)(e.size || '', o) &&
                      (0, l.sameValue)(e.color || '', n || ''),
                  )
                : i.products.find((t) => t.name === e);
          if (!r) throw Error('seed ' + e);
          return r;
        },
        a = (e, t) =>
          ('all' === e
            ? [
                ...n.models.flatMap((e) =>
                  i.products
                    .filter((t) => t.model === e.model)
                    .map((t) => [t, e.stock]),
                ),
                ...n.items.map((e) => [
                  i.products.find((t) => t.name === e.name),
                  e.stock,
                ]),
              ]
            : e.map(([e, t]) => [c(e), t])
          ).map(([e, o]) => ({
            productId: e.id,
            name: e.name,
            quantity: o,
            ...(t
              ? void 0 !== e.costPrice
                ? { unitCost: e.costPrice }
                : {}
              : { unitPrice: e.price }),
          })),
        s = [
          ...n.purchases.map((e) => ({
            at: De(t, e.daysAgo, e.hour),
            run: () =>
              de(
                i,
                'purchase',
                {
                  lines: a(e.lines, !0),
                  contactId: e.contact ? r.get(e.contact) : void 0,
                  payment: {
                    method: e.method,
                    ...(void 0 !== e.paid ? { paidToman: e.paid } : {}),
                    ...('cheque' === e.method
                      ? {
                          cheque: {
                            dueDate: Pe(t, e.dueInDays || 10),
                            number: e.number,
                            bank: e.bank,
                          },
                        }
                      : {}),
                  },
                },
                De(t, e.daysAgo, e.hour),
              ),
          })),
          ...n.sales.map((e) => ({
            at: De(t, e.daysAgo, e.hour),
            run: () => {
              (de(
                i,
                'sale',
                {
                  lines: a(e.lines, !1),
                  contactId: e.contact ? r.get(e.contact) : void 0,
                  payment: {
                    method: e.method,
                    ...(void 0 !== e.paid ? { paidToman: e.paid } : {}),
                    ...('cheque' === e.method
                      ? {
                          paidToman: a(e.lines, !1).reduce(
                            (e, t) => e + (t.unitPrice || 0) * t.quantity,
                            0,
                          ),
                          cheque: {
                            dueDate: Pe(t, e.dueInDays || 7),
                            number: e.number,
                            bank: e.bank,
                          },
                        }
                      : {}),
                  },
                },
                De(t, e.daysAgo, e.hour),
              ),
                e.issued && Se(i),
                e.site && Ce(i));
            },
          })),
          ...n.payments.map((e) => ({
            at: De(t, e.daysAgo, e.hour),
            run: () =>
              oe(
                i,
                {
                  contactId: r.get(e.contact),
                  direction: e.direction,
                  method: e.method,
                  amountToman: e.amount,
                },
                De(t, e.daysAgo, e.hour),
              ),
          })),
          ...n.cheques.flatMap((e) => {
            const o = De(t, e.daysAgo, e.hour);
            let n = '';
            return [
              {
                at: o,
                run: () => {
                  n = oe(
                    i,
                    {
                      contactId: r.get(e.contact),
                      direction: e.direction,
                      method: 'cheque',
                      amountToman: e.amount,
                      cheque: {
                        dueDate: Pe(t, e.dueInDays),
                        number: e.number,
                        bank: e.bank,
                        payee: e.payee,
                      },
                    },
                    o,
                  ).cheque.id;
                },
              },
              ...(void 0 !== e.cashedDaysAgo
                ? [
                    {
                      at: De(t, e.cashedDaysAgo, 10),
                      run: () => {
                        const o = i.cheques.find((e) => e.id === n);
                        o && ie(i, o, 'cashed', De(t, e.cashedDaysAgo, 10));
                      },
                    },
                  ]
                : []),
            ];
          }),
        ].sort((e, t) => e.at - t.at);
      for (const e of s) e.run();
      return (
        (i.toBuy = [
          {
            id: Oe(i, 'tb'),
            name: (0, m.L)(
              '\u06a9\u06cc\u0641 \u067e\u0648\u0644 \u0686\u0631\u0645',
            ),
            status: 'open',
            createdAt: H(t - U),
            quantity: 5,
            unit: 'piece',
          },
          {
            id: Oe(i, 'tb'),
            name: (0, m.L)(
              '\u062a\u06cc\u200c\u0634\u0631\u062a \u0646\u062e\u06cc L \u0633\u0641\u06cc\u062f',
            ),
            status: 'open',
            createdAt: H(t - 1728e5),
            quantity: 6,
            unit: 'piece',
          },
        ]),
        (i.alerts = i.alerts.map((e) => ({ ...e, read: !1 }))),
        Me(i, t)
      );
    }
    function Ne(e, t, o) {
      const n = (0, A.sets)()[o],
        i = qe(
          e.shopName ||
            (0, m.L)(
              '\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647',
            ),
        );
      for (const [e, t, o, r, c] of n)
        i.products.push({
          id: Oe(i, 'p'),
          name: e,
          detail: '',
          stock: 0,
          unit: o,
          kind: 'simple',
          category: t,
          costPrice: r,
          ...(c ? { price: c } : {}),
          version: 1,
        });
      ((i.categories = [...new Set(n.map((e) => e[1]))]),
        (i.alarmRules = [
          {
            id: 'rule-all',
            scope: 'all',
            kind: 'atOrBelow',
            threshold: 3,
            enabled: !0,
          },
        ]));
      const r = (0, w.clothingSeed)(),
        c = new Map(r.contacts.map((e) => [e.key, Oe(i, 'c')]));
      for (const e of r.contacts)
        i.contacts.push({
          id: c.get(e.key),
          name:
            'aria' === e.key
              ? (0, m.L)(
                  '\u067e\u062e\u0634 \u0639\u0645\u062f\u0647 \u0646\u0645\u0648\u0646\u0647',
                )
              : e.name,
          kind: e.kind,
          ...(e.phone ? { phone: e.phone } : {}),
          ...(e.favorite ? { favorite: !0 } : {}),
          version: 1,
          createdAt: H(t - 10368e5),
          updatedAt: H(t - 10368e5),
        });
      const a = (e) => i.products.find((t) => t.name === e);
      de(
        i,
        'purchase',
        {
          lines: n.map(([e, , , t, , o, n]) => ({
            productId: a(e).id,
            name: e,
            quantity: o + 7 * n,
            unitCost: t,
          })),
          contactId: c.get('aria'),
          payment: { method: 'credit', paidToman: 0 },
        },
        De(t, 9, 10),
      );
      const s = n.filter((e) => e[4] > 0 && e[6] > 0);
      for (let e = 6; e >= 0; e--) {
        const o = s.map(([t, , , , o, , n]) => ({
            productId: a(t).id,
            name: t,
            quantity: Math.max(1, n - (e % 3)),
            unitPrice: o,
          })),
          n = 5 === e || 2 === e,
          r =
            5 === e
              ? 'rezaei'
              : 2 === e
                ? 'karimi'
                : 4 === e || 1 === e
                  ? 'ahmadi'
                  : 3 === e
                    ? 'zeytoon'
                    : '';
        (de(
          i,
          'sale',
          {
            lines: o,
            ...(r ? { contactId: c.get(r) } : {}),
            payment: { method: n ? 'credit' : e % 2 ? 'card' : 'cash' },
          },
          De(t, e, e % 2 ? 18 : 11),
        ),
          (2 !== e && 0 !== e) || Se(i));
      }
      const d = -X(i, c.get('aria'));
      oe(
        i,
        {
          contactId: c.get('aria'),
          direction: 'out',
          method: 'cheque',
          amountToman: Math.min(d, d > 2e6 ? Math.floor(d / 2) : d),
          cheque: {
            dueDate: Pe(t, 12),
            bank: (0, m.L)('\u0635\u0627\u062f\u0631\u0627\u062a'),
            number: '\u06f7\u06f7\u06f1\u06f0\u06f3\u06f2',
          },
        },
        De(t, 3, 9),
      );
      const u = X(i, c.get('karimi'));
      return (
        u > 0 &&
          oe(
            i,
            {
              contactId: c.get('karimi'),
              direction: 'in',
              method: 'cheque',
              amountToman: u,
              cheque: {
                dueDate: Pe(t, 5),
                bank: (0, m.L)('\u0645\u0644\u062a'),
                number: '\u06f4\u06f5\u06f8\u06f2\u06f1\u06f9',
              },
            },
            De(t, 1, 12),
          ),
        Me(i, t)
      );
    }
    function Se(e) {
      const t = e.docs[e.docs.length - 1];
      t && (t.issuedAt = t.occurredAt);
    }
    function Ce(e) {
      const t = e.docs[e.docs.length - 1];
      if (!t) return;
      const o = {
        apiKeyId: 'demo-site',
        apiKeyName: (0, m.L)(
          '\u0633\u0627\u06cc\u062a \u0641\u0631\u0648\u0634\u06af\u0627\u0647',
        ),
      };
      Object.assign(t, o);
      for (const n of e.movements) n.saleId === t.id && Object.assign(n, o);
    }
    function Oe(e, t) {
      return (e.seq++, `${t}-${e.seq.toString(36)}`);
    }
    function Ee(e, o, i) {
      const d = V(),
        [u, m = ''] = e.split('?'),
        p = new URLSearchParams(m),
        I = '/v1/shops/' + v.DEMO_SHOP_ID;
      if (!u.startsWith(I + '/') && u !== I) {
        if ('/v1/auth/session' === u) throw W('unauthorized', 401);
        if ('/v1/me/preferences' === u)
          return {
            featureTips: !1,
            upgradeSnoozeUntil: null,
            tipsState: {},
            updatedAt: H(F()),
          };
        if ('/v1/client-errors' === u || '/v1/auth/logout' === u)
          return { ok: !0 };
        if ('/v1/billing/catalog' === u) return Te(d);
        if ('/v1/shops' === u && 'GET' === o) return { shops: [ke(d)] };
        throw W(K);
      }
      const w = u.slice(I.length),
        A = w.split('/').filter(Boolean).map(decodeURIComponent),
        [q, N, O, E] = A,
        x = F(),
        U = 'GET' !== o;
      if ('' === w) {
        if (!U) return { shop: ke(d) };
        if ('PATCH' === o) {
          if (void 0 !== i.version && i.version !== d.shopRevision)
            throw W('version_conflict');
          return (
            'string' == typeof i.name &&
              i.name.trim() &&
              (d.shopName = i.name.trim().slice(0, 100)),
            d.shopRevision++,
            { ok: !0, revision: d.shopRevision, policyRevision: L }
          );
        }
      }
      if ('settings' === q && 'PATCH' === o)
        return (
          (d.settings = {
            ...d.settings,
            ...i,
            staffView: { ...d.settings.staffView, ...(i.staffView || {}) },
          }),
          { settings: d.settings, revision: d.revision, policyRevision: L }
        );
      if ('billing' === q && !N && !U) return Te(d);
      if ('billing' === q && (0, t.plansPreview)()) {
        if ('quote' === N) return (0, t.previewQuote)(i);
        if ('downgrade' === N)
          return 'GET' === o
            ? (0, t.previewDowngrade)(p.get('planId') || 'standard', F())
            : { scheduled: null, cancelled: 'DELETE' === o };
      }
      if ('nudges' === q) return { item: null };
      if ('revision' === q) return { revision: d.revision, policyRevision: L };
      if ('telegram' === q && 'drafts' === N && !U) return { drafts: [] };
      if ('staff' === q && !N && !U)
        return { staff: [], team: !0, limit: 3, used: 0, planId: 'pro' };
      {
        const e = (0, T.demoExpensesRoute)(A, o, p, i, x, W);
        if (null !== e) return e;
      }
      {
        const e = (0, k.demoStaffRoute)(A, o, p, i, x, W);
        if (null !== e) return e;
      }
      {
        const e = (0, _.demoRecipeRoute)(A, o, i, d.products, () => {
          d.revision++;
        });
        if (null !== e) return e;
      }
      if ('dashboard' === q) return Ie(d);
      if ('summary' === q) {
        const e = [1, 7, 30, 90, 365].includes(Number(p.get('days')))
          ? Number(p.get('days'))
          : 30;
        return ge(d, e);
      }
      if ('insight' === q)
        return (0, s.localDailyInsight)({
          summary: (0, a.summarizeLocal)(
            d.movements,
            7,
            new Date(x),
            d.products,
          ),
          products: d.products,
          movements: d.movements,
          now: new Date(x),
        });
      if ('activity' === q && !N && !U) return be(d, p);
      if ('activity' === q && 'note' === N) {
        const e = String(i.id || '');
        if (!e) throw W('invalid_request', 400);
        if ('DELETE' === o) return (d.notes.delete(e), { id: e, note: null });
        const t = String(i.text || '')
          .trim()
          .slice(0, 500);
        if (!t) throw W('invalid_request', 400);
        return (d.notes.set(e, t), { id: e, note: t });
      }
      if ('inventory' === q && !U) {
        for (const e of d.products) e.createdAt || (e.createdAt = H(x));
        const e = d.products.filter((e) => !e.archivedAt);
        return p.get('cursor')
          ? {
              products: [],
              nextCursor: null,
              revision: d.revision,
              policyRevision: L,
            }
          : {
              products: e,
              nextCursor: null,
              revision: d.revision,
              policyRevision: L,
              movements: d.movements.slice(-500),
              historyTruncated: !1,
              categories: [...d.categories].sort((e, t) =>
                e.localeCompare(t, 'fa'),
              ),
              alarmRules: d.alarmRules,
              alerts: [...d.alerts].reverse(),
            };
      }
      if ('products' === q && !N && !U)
        return {
          products: [],
          nextCursor: null,
          revision: d.revision,
          policyRevision: L,
          fullResyncRequired: !0,
        };
      if ('products' === q && N && 'deliveries' === O && !U)
        return se(d, N, p.get('before') || '');
      if ('movements' === q && !N) {
        if (!U) {
          const e = [...d.movements].sort(
              (e, t) =>
                (t.timestamp || '').localeCompare(e.timestamp || '') ||
                t.id.localeCompare(e.id),
            ),
            t = p.get('before'),
            o = p.get('beforeId') || '',
            n = t
              ? e.filter(
                  (e) =>
                    (e.timestamp || '') < t || (e.timestamp === t && e.id < o),
                )
              : e,
            i = Math.min(500, Math.max(1, Number(p.get('limit')) || 100)),
            r = n.slice(0, i),
            c = r[r.length - 1];
          return {
            movements: r,
            next:
              n.length > i && c
                ? { before: c.timestamp, beforeId: c.id }
                : null,
            policyRevision: L,
          };
        }
        if (
          !Array.isArray(i.drafts) ||
          i.drafts.length >
            (i.drafts.every((e) => 'count' === e?.kind) ? n.COUNT_MAX : 20)
        )
          throw W('invalid_request', 400);
        const e =
          'string' == typeof i.supplierName
            ? i.supplierName.trim().slice(0, 60)
            : '';
        return {
          ...$(
            d,
            i.drafts,
            String(i.source || 'manual'),
            e && i.drafts.every((e) => 'received' === e.kind)
              ? { supplierName: e }
              : {},
            void 0,
            !0 === i.allowNegative,
            !0 === i.fillShortage,
          ),
          revision: d.revision,
          policyRevision: L,
        };
      }
      if ('movements' === q && N && 'correct' === O) {
        const e = d.movements.find((e) => e.id === N);
        if (!e) throw W('not_found', 404);
        if (e.saleId || e.purchaseId) throw W('correct_document');
        if (e.correctsMovementId) throw W('correction_not_correctable');
        if (d.movements.some((t) => t.correctsMovementId === e.id))
          throw W('movement_already_corrected');
        const t =
            i && 'object' == typeof i.replacement && i.replacement
              ? i.replacement
              : null,
          o = t ? structuredClone(d) : null;
        try {
          const o = Q(d, e),
            n = d.products.find((t) => t.id === e.productId);
          {
            const e = o.movements[0];
            let t = Date.parse(e.recordedAt || H(F()));
            for (
              ;
              d.movements.some(
                (o) => o !== e && o.recordedAt === new Date(t).toISOString(),
              );

            )
              t++;
            e.recordedAt = new Date(t).toISOString();
          }
          const r =
              !t || (void 0 === t.unitPrice && void 0 === t.unitCost)
                ? void 0
                : (0, b.voicePricesForProduct)(
                    {
                      unit: t.unit,
                      unitPrice: t.unitPrice,
                      unitCost: t.unitCost,
                      pricesInEnteredUnit: t.pricesInEnteredUnit,
                    },
                    n,
                  ),
            c = r ? r.unitPrice : e.unitPrice,
            a = r
              ? (r.unitCost ?? (t?.pricesInEnteredUnit ? void 0 : e.unitCost))
              : e.unitCost,
            s = t
              ? $(
                  d,
                  [
                    {
                      name: t.name || e.name,
                      ...(t.name && t.name !== e.name
                        ? {}
                        : { productId: e.productId }),
                      quantity: t.quantity || e.quantity,
                      ...(t.unit && t.unit !== (n.unit || 'piece')
                        ? { unit: t.unit }
                        : {}),
                      kind: e.kind,
                      ...(void 0 !== c ? { unitPrice: c } : {}),
                      ...(void 0 !== a ? { unitCost: a } : {}),
                      ...(e.expiresAt && 'received' === e.kind
                        ? { expiresAt: e.expiresAt }
                        : {}),
                      ...(t.timestamp || e.timestamp
                        ? { timestamp: t.timestamp || e.timestamp }
                        : {}),
                    },
                  ],
                  'correction',
                  {},
                  void 0,
                  !0 === i.allowNegative,
                  !0 === i.fillShortage,
                )
              : void 0;
          if (s)
            for (const e of s.movements)
              e.recordedAt = o.movements[0].recordedAt;
          return {
            product: { id: n.id, stock: n.stock, version: n.version },
            movement: o.movements[0],
            children: [],
            ...(s ? { replacement: s } : {}),
            revision: d.revision,
            policyRevision: L,
          };
        } catch (e) {
          throw (o && Object.assign(d, o), e);
        }
      }
      if ('categories' === q && 'POST' === o) {
        let e = G(d);
        try {
          e =
            null === i.name || void 0 === i.name
              ? (0, r.removeCategory)(e, String(i.previous))
              : (0, r.editCategory)(e, i.previous ?? null, String(i.name));
        } catch (e) {
          throw W(
            e instanceof Error && 'category_duplicate' === e.message
              ? 'conflict'
              : 'invalid_request',
            e instanceof Error && 'category_duplicate' === e.message
              ? 409
              : 400,
          );
        }
        return (
          J(d, e),
          d.revision++,
          { ok: !0, revision: d.revision, policyRevision: L }
        );
      }
      if ('alarms' === q && 'PUT' === o) {
        const e = G(d),
          t = { ...e, alarmRules: Array.isArray(i.rules) ? i.rules : [] },
          o = (0, c.evaluateAlarms)(e, t, new Date(x));
        return (
          J(d, o.state),
          d.revision++,
          { ok: !0, revision: d.revision, policyRevision: L }
        );
      }
      if ('alerts' === q && 'read' === N) {
        const e = new Set(Array.isArray(i.ids) ? i.ids : []);
        return (
          (d.alerts = d.alerts.map((t) =>
            e.has(t.id) ? { ...t, read: !0 } : t,
          )),
          { ok: !0 }
        );
      }
      if ('products' === q && 'variants' === N && 'POST' === o) {
        let e;
        try {
          e = (0, l.variantRequest)(i);
        } catch (e) {
          throw W(
            e instanceof Error && 'too_many_variants' === e.message
              ? 'too_many_variants'
              : 'invalid_request',
            400,
          );
        }
        const t = (0, l.groupModels)(d.products).get(
            (0, n.normalizeName)(e.model),
          ),
          o = t?.model || e.model;
        let r = 0,
          c = 0;
        for (const t of e.pairs) {
          const e = (0, l.variantName)(o, t.size, t.color);
          d.products.some(
            (t) =>
              !t.archivedAt &&
              (0, n.normalizeName)(t.name) === (0, n.normalizeName)(e),
          )
            ? c++
            : (d.products.push({
                id: Oe(d, 'p'),
                name: e,
                detail: '',
                stock: 0,
                unit: 'piece',
                kind: 'simple',
                model: o,
                ...(t.size ? { size: t.size } : {}),
                ...(t.color ? { color: t.color } : {}),
                ...(i.brand ? { brand: String(i.brand) } : {}),
                ...(i.category ? { category: String(i.category) } : {}),
                ...(void 0 !== i.price ? { price: Number(i.price) } : {}),
                ...(void 0 !== i.costPrice
                  ? { costPrice: Number(i.costPrice) }
                  : {}),
                version: 1,
              }),
              r++);
        }
        return (
          d.revision++,
          {
            model: o,
            created: r,
            attached: 0,
            kept: c,
            revision: d.revision,
            policyRevision: L,
          }
        );
      }
      if ('products' === q && 'bulk' === N && 'POST' === o) {
        const e = new Set(Array.isArray(i.ids) ? i.ids : []);
        let t = 0;
        if ('delete' === i.action) {
          const o = d.products.length;
          return (
            J(d, (0, r.deleteProducts)(G(d), [...e])),
            (t = o - d.products.length),
            d.revision++,
            { ok: !0, count: t, revision: d.revision, policyRevision: L }
          );
        }
        return (
          (d.products = d.products.map((o) => {
            if (!e.has(o.id)) return o;
            if ((t++, 'archive' === i.action))
              return { ...o, archivedAt: H(x), version: o.version + 1 };
            if ('category' === i.action)
              return {
                ...o,
                category: i.category || void 0,
                version: o.version + 1,
              };
            const n = 'costPrice' === i.field ? 'costPrice' : 'price',
              r = Number(i.value),
              c = o[n];
            if ('percent' === i.mode) {
              if (void 0 === c) return (t--, o);
              const e = Number(i.roundTo) || 1;
              return {
                ...o,
                [n]: Math.round((c * (1 + r / 100)) / e) * e,
                version: o.version + 1,
              };
            }
            return { ...o, [n]: r, version: o.version + 1 };
          })),
          d.revision++,
          { ok: !0, count: t, revision: d.revision, policyRevision: L }
        );
      }
      if ('products' === q && 'price-adjust' === N && 'POST' === o) {
        const e = 'costPrice' === i.field ? 'costPrice' : 'price',
          t = Number(i.roundTo) || 1,
          o = Number(i.percent),
          n = d.products.filter(
            (t) =>
              !t.archivedAt &&
              void 0 !== t[e] &&
              ('category' !== i.scope || t.category === i.category),
          ),
          r = (e) => Math.round((e * (1 + o / 100)) / t) * t,
          c = n
            .slice(0, 10)
            .map((t) => ({
              id: t.id,
              name: t.name,
              before: { [e]: t[e] },
              afterValues: { [e]: r(t[e]) },
              after: r(t[e]),
            }));
        return (
          i.dryRun ||
            ((d.products = d.products.map((t) =>
              n.includes(t)
                ? { ...t, [e]: r(t[e]), version: t.version + 1 }
                : t,
            )),
            d.revision++),
          {
            count: n.length,
            examples: c,
            revision: d.revision,
            policyRevision: L,
          }
        );
      }
      if ('products' === q && N && !O) {
        const e = d.products.find((e) => e.id === N);
        if (!U) {
          if (!e) throw W('not_found', 404);
          const { archivedAt: t, ...o } = e;
          return { product: o, policyRevision: L };
        }
        if ('DELETE' === o) {
          if (!e) throw W('not_found', 404);
          if (Number(i.version) !== e.version) throw W('version_conflict');
          return (
            J(d, (0, r.deleteProducts)(G(d), [N])),
            d.revision++,
            { ok: !0, deleted: [N], revision: d.revision, policyRevision: L }
          );
        }
        if ('PUT' === o) {
          const t = Number(i.version) || 0;
          if ((e?.version || 0) !== t) throw W('version_conflict');
          const o = i.details || {},
            c = Object.keys(o).filter((e) => null === o[e]),
            a = Object.fromEntries(
              Object.entries(o).filter(([, e]) => null !== e),
            );
          if (
            a.model &&
            d.products.some(
              (e) =>
                e.id !== N &&
                !e.archivedAt &&
                e.model &&
                (0, n.normalizeName)(e.model) ===
                  (0, n.normalizeName)(a.model) &&
                (0, l.sameValue)(e.size || '', a.size || '') &&
                (0, l.sameValue)(e.color || '', a.color || ''),
            )
          )
            throw W('duplicate_model_variant');
          let s;
          try {
            s = (0, r.saveProduct)(G(d), N, a);
          } catch (e) {
            throw W(
              e instanceof Error && 'barcode_conflict' === e.message
                ? 'barcode_conflict'
                : 'invalid_request',
              e instanceof Error && 'barcode_conflict' === e.message
                ? 409
                : 400,
            );
          }
          return (
            J(d, {
              ...s,
              products: s.products.map((e) => {
                if (e.id !== N) return e;
                const o = {
                  ...e,
                  version: t + 1,
                  unit: e.unit || 'piece',
                  kind: e.kind || 'simple',
                };
                for (const e of c) delete o[e];
                return o;
              }),
            }),
            e ||
              d.extra.push({
                id: 'pc:' + N,
                type: 'product_created',
                at: H(x),
                name: a.name,
                productId: N,
              }),
            d.revision++,
            { ok: !0, revision: d.revision, policyRevision: L }
          );
        }
      }
      if (
        'products' === q &&
        N &&
        ('archive' === O || 'restore' === O) &&
        'POST' === o
      ) {
        if (!d.products.find((e) => e.id === N)) throw W('not_found', 404);
        return (
          J(
            d,
            'archive' === O
              ? (0, r.archiveProduct)(G(d), N)
              : (0, r.restoreProduct)(G(d), N),
          ),
          (d.products = d.products.map((e) =>
            e.id === N ? { ...e, version: e.version + 1 } : e,
          )),
          d.revision++,
          {
            product: d.products.find((e) => e.id === N),
            revision: d.revision,
            policyRevision: L,
          }
        );
      }
      if ('products' === q && N && 'content' === O && 'PATCH' === o) {
        const e = d.products.find((e) => e.id === N);
        if (!e) throw W('not_found', 404);
        return (
          (d.products = d.products.map((e) =>
            e.id === N
              ? {
                  ...e,
                  contentSize: Number(i.contentSize),
                  contentUnit: i.contentUnit,
                  version: e.version + 1,
                }
              : e,
          )),
          d.revision++,
          { version: e.version + 1, revision: d.revision, policyRevision: L }
        );
      }
      if ('to-buy' === q && 'routines' === N) {
        if (!U) return { routines: [] };
        throw W(K);
      }
      if ('to-buy' === q && !N) {
        if (!U)
          return {
            items: [
              ...d.toBuy.filter((e) => 'open' === e.status).reverse(),
              ...d.toBuy.filter((e) => 'open' !== e.status),
            ],
          };
        const e = (Array.isArray(i.items) ? i.items : [])
          .slice(0, 20)
          .map((e) => {
            const t = d.products.find(
              (t) =>
                !t.archivedAt &&
                (0, n.normalizeName)(t.name) ===
                  (0, n.normalizeName)(String(e.name || '')),
            );
            return {
              id: Oe(d, 'tb'),
              name: String(e.name || '')
                .trim()
                .slice(0, 100),
              status: 'open',
              createdAt: H(x),
              ...(null != e.quantity ? { quantity: Number(e.quantity) } : {}),
              ...(e.unit ? { unit: e.unit } : {}),
              ...(e.note ? { note: e.note } : {}),
              ...(e.remindAt ? { remindAt: e.remindAt } : {}),
              ...(e.productId || t ? { productId: e.productId || t.id } : {}),
            };
          })
          .filter((e) => e.name);
        return (
          d.toBuy.push(...e),
          { items: e, revision: d.revision, policyRevision: L }
        );
      }
      if ('to-buy' === q && N && 'PATCH' === o) {
        const e = d.toBuy.find((e) => e.id === N);
        if (!e) throw W('not_found', 404);
        return (
          i.status &&
            ((e.status = i.status),
            'open' === i.status ? delete e.doneAt : (e.doneAt = H(x))),
          'remindAt' in i &&
            (i.remindAt ? (e.remindAt = i.remindAt) : delete e.remindAt),
          'quantity' in i &&
            (null == i.quantity
              ? delete e.quantity
              : (e.quantity = Number(i.quantity))),
          { item: e, revision: d.revision, policyRevision: L }
        );
      }
      if ('contacts' === q && !N) {
        if (!U) {
          const e = (0, n.normalizeName)(p.get('q') || ''),
            t = p.get('balance'),
            o = p.get('kind'),
            i = 'true' === p.get('favorite');
          return {
            contacts: d.contacts
              .filter((e) => !e.archivedAt)
              .map((e) => Y(d, e))
              .filter(
                (r) =>
                  (!e ||
                    (0, n.normalizeName)(r.name).includes(e) ||
                    (r.phone || '').includes(e) ||
                    (0, n.normalizeName)(r.note || '').includes(e)) &&
                  ('owes-me' === t
                    ? r.balanceToman > 0
                    : 'i-owe' === t
                      ? r.balanceToman < 0
                      : 'settled' !== t || 0 === r.balanceToman) &&
                  (!o || r.kind === o || 'both' === r.kind) &&
                  (!i || !!r.favorite),
              )
              .sort((e, t) => e.id.localeCompare(t.id)),
            next: null,
            policyRevision: L,
          };
        }
        const e = String(i.name || '').trim();
        if (
          !e ||
          e.length > 100 ||
          !['customer', 'supplier', 'both'].includes(i.kind)
        )
          throw W('invalid_request', 400);
        const t = {
          id: Oe(d, 'c'),
          name: e,
          kind: i.kind,
          ...(i.phone ? { phone: String(i.phone) } : {}),
          ...(i.favorite ? { favorite: !0 } : {}),
          ...(i.address ? { address: String(i.address).slice(0, 160) } : {}),
          ...(i.economicId
            ? { economicId: String(i.economicId).slice(0, 20) }
            : {}),
          ...('string' == typeof i.note && i.note.trim()
            ? { note: i.note.trim().slice(0, 500) }
            : {}),
          version: 1,
          createdAt: H(x),
          updatedAt: H(x),
        };
        return (d.contacts.push(t), { contact: Y(d, t), policyRevision: L });
      }
      if ('contacts' === q && N && !O) {
        const e = te(d, N);
        if (!U) {
          const t = Math.min(100, Number(p.get('limit')) || 30),
            o = p.get('before'),
            n = p.get('beforeId') || '',
            i = p.get('from') || '',
            r = p.get('to') || '',
            c = p.get('type') || '',
            a = Number(p.get('amount')) || 0;
          if (c && !['sale', 'payment', 'cheque'].includes(c))
            throw W('invalid_request', 400);
          if (!!o != !!n) throw W('invalid_request', 400);
          const s = (e) => (0, D.todayIn)(j, Date.parse(e.occurredAt)),
            u = ce(d, N)
              .reverse()
              .filter(
                (e) =>
                  (!o || (0, M.bookOrder)(e, { occurredAt: o, key: n }) < 0) &&
                  (!i || s(e) >= i) &&
                  (!r || s(e) <= r) &&
                  (!c ||
                    ('sale' === c
                      ? ['sale', 'purchase', 'adjustment'].includes(e.kind)
                      : 'payment' === c
                        ? e.kind.startsWith('payment') && !e.cheque
                        : !!e.cheque)) &&
                  (!a ||
                    Math.abs(e.amountToman) === a ||
                    e.cheque?.amountToman === a),
              ),
            l = u.slice(0, t),
            m = l[l.length - 1],
            f = d.entries.filter((e) => e.contactId === N),
            h = d.cheques.filter((e) => e.contactId === N),
            v = d.docs.filter(
              (e) =>
                'sale' === e.type && e.contactId === N && !ue(d, e).corrected,
            );
          return {
            contact: Y(d, e),
            rows: l,
            entries: l
              .filter((e) => e.posted)
              .map((e) => ({
                id: e.id,
                contactId: N,
                amountToman: e.amountToman,
                kind: e.kind,
                occurredAt: e.occurredAt,
                note: e.note || '',
              })),
            next:
              u.length > t && m
                ? { before: m.occurredAt, beforeId: m.key }
                : null,
            totals: {
              theyOweMe: f
                .filter((e) => e.amountToman > 0)
                .reduce((e, t) => e + t.amountToman, 0),
              iOwe: f
                .filter((e) => e.amountToman < 0)
                .reduce((e, t) => e - t.amountToman, 0),
              balanceToman: X(d, N),
            },
            openCheques: h
              .filter((e) => 'pending' === e.status)
              .sort((e, t) => e.dueDate.localeCompare(t.dueDate))
              .map(re),
            stats: {
              ...(f.length
                ? { firstAt: f.map((e) => e.occurredAt).sort()[0] }
                : {}),
              invoices: v.length,
              cheques: h.length,
              cashed: h.filter((e) => 'cashed' === e.status).length,
            },
            policyRevision: L,
          };
        }
        if ('PATCH' === o) {
          if (i.version !== e.version || e.archivedAt)
            throw W('version_conflict');
          ('string' == typeof i.name &&
            i.name.trim() &&
            (e.name = i.name.trim().slice(0, 100)),
            i.kind && (e.kind = i.kind),
            'phone' in i &&
              (i.phone ? (e.phone = String(i.phone)) : delete e.phone),
            'favorite' in i && (e.favorite = !!i.favorite));
          for (const t of ['address', 'economicId'])
            t in i &&
              (i[t]
                ? (e[t] = String(i[t]).slice(0, 'address' === t ? 160 : 20))
                : delete e[t]);
          if ('note' in i) {
            const t =
              'string' == typeof i.note ? i.note.trim().slice(0, 500) : '';
            t ? (e.note = t) : delete e.note;
          }
          return (
            e.version++,
            (e.updatedAt = H(x)),
            { contact: Y(d, e), policyRevision: L }
          );
        }
      }
      if ('contacts' === q && N && 'habits' === O && !U) {
        te(d, N);
        const e = x - 7776e6,
          t = d.docs.filter((e) => e.contactId === N && !ue(d, e).corrected),
          o =
            t.some((e) => 'sale' === e.type) || !t.length ? 'sale' : 'purchase',
          n = t.filter((e) => e.type === o),
          i = n.filter((t) => Date.parse(t.occurredAt) >= e),
          r = new Map();
        for (const e of i)
          for (const t of ue(d, e).lines)
            if (!t.corrected) {
              const e = r.get(t.productId) || {
                productId: t.productId,
                name: t.name,
                count: 0,
              };
              (e.count++, r.set(t.productId, e));
            }
        const c = [
            ...new Set(
              n.map((e) => (0, D.todayIn)(j, Date.parse(e.occurredAt))),
            ),
          ].sort(),
          a = c
            .slice(1)
            .map((e, t) =>
              Math.round((Date.parse(e) - Date.parse(c[t])) / 864e5),
            )
            .sort((e, t) => e - t),
          s = c.length >= 3 ? a[Math.floor(a.length / 2)] : null;
        return {
          habits: {
            days: 90,
            kind: o,
            top: [...r.values()].sort((e, t) => t.count - e.count).slice(0, 3),
            visits: c.length,
            everyDays: s,
            averageToman: n.length
              ? Math.round(n.reduce((e, t) => e + t.totalToman, 0) / n.length)
              : null,
            lastAt: n.length
              ? n
                  .map((e) => e.occurredAt)
                  .sort()
                  .pop()
              : null,
            invoices: n.length,
          },
        };
      }
      if ('contacts' === q && N && 'archive' === O && 'POST' === o) {
        const e = te(d, N);
        if (i.version !== e.version) throw W('version_conflict');
        return (
          (e.archivedAt = H(x)),
          e.version++,
          { contact: Y(d, e), policyRevision: L }
        );
      }
      if ('contacts' === q && N && 'statement' === O) {
        if ('POST' === o || 'share' === E) throw W(K);
        const e = te(d, N),
          t = p.get('from') || '',
          n = p.get('to') || '';
        if (!t || !n || t > n) throw W('invalid_request', 400);
        const i = (e) => (0, D.todayIn)(j, Date.parse(e.occurredAt)),
          r = ce(d, N),
          c = r.filter((e) => i(e) >= t && i(e) <= n),
          a = (e) => e.reduce((e, t) => e + (t.posted ? t.amountToman : 0), 0),
          s = c.filter((e) => e.posted),
          u = a(r.filter((e) => i(e) < t)),
          l = s.reduce((e, t) => e + Math.max(0, t.amountToman), 0),
          m = s.reduce((e, t) => e + Math.max(0, -t.amountToman), 0);
        return {
          contact: Y(d, e),
          from: t,
          to: n,
          timezone: j,
          shop: {
            name: d.shopName,
            ...(d.settings.invoice ? { design: d.settings.invoice } : {}),
          },
          firstAt: r.find((e) => e.posted)?.occurredAt ?? null,
          entries: s.map((e) => ({
            id: e.id,
            contactId: N,
            amountToman: e.amountToman,
            kind: e.kind,
            occurredAt: e.occurredAt,
            note: e.note || '',
          })),
          rows: c,
          truncated: !1,
          openCheques: d.cheques
            .filter(
              (e) => e.contactId === N && 'pending' === e.status && i(e) <= n,
            )
            .sort((e, t) => e.dueDate.localeCompare(t.dueDate))
            .map(re),
          totals: {
            openingBalanceToman: u,
            changeToman: l - m,
            closingBalanceToman: u + l - m,
            debitToman: l,
            creditToman: m,
          },
          policyRevision: L,
        };
      }
      if ('contacts' === q && N && 'current' === O && !U) {
        const e = te(d, N),
          t = ae(d, N),
          o = (0, M.liveAccount)(
            ce(d, N),
            t.map((e) => e.sale),
            d.cheques
              .filter((e) => e.contactId === N && 'pending' === e.status)
              .map(re),
            x,
          ),
          { paidLater: n, saleIds: i, sinceKey: r, ...c } = o,
          a = i.map((e) => t.find((t) => t.doc.id === e).doc);
        return {
          contact: Y(d, e),
          ...c,
          salesCount: a.length,
          sales: a
            .slice(0, 100)
            .map((e) => ({ ...pe(d, e), paidLaterToman: n[e.id] || 0 })),
          policyRevision: L,
        };
      }
      if ('ledger' === q && 'summary' === N) {
        const e = d.contacts
            .filter((e) => !e.archivedAt)
            .map((e) => X(d, e.id)),
          t = (0, a.localDate)(new Date(x)),
          o = (0, a.localDate)(new Date(x + 6048e5));
        return {
          theyOweMe: e.filter((e) => e > 0).reduce((e, t) => e + t, 0),
          iOwe: e.filter((e) => e < 0).reduce((e, t) => e - t, 0),
          chequesDue7Days: d.cheques
            .filter(
              (e) => 'pending' === e.status && e.dueDate >= t && e.dueDate <= o,
            )
            .reduce((e, t) => e + t.amountToman, 0),
          policyRevision: L,
        };
      }
      if ('contacts' === q && N && 'debts' === O && 'POST' === o) {
        const e = te(d, N);
        if (!E) {
          if (e.archivedAt) throw W('contact_archived');
          const t = Number(i.amountToman);
          if (
            !['owe', 'owed'].includes(i.direction) ||
            !Number.isSafeInteger(t) ||
            t <= 0
          )
            throw W('invalid_request', 400);
          const o = Oe(d, 'debt'),
            n = 'string' == typeof i.note ? i.note.trim().slice(0, 500) : '',
            r =
              'string' == typeof i.occurredAt &&
              Number.isFinite(Date.parse(i.occurredAt))
                ? new Date(i.occurredAt).toISOString()
                : H(x),
            c = ee(d, {
              contactId: e.id,
              amountToman: 'owed' === i.direction ? t : -t,
              kind: 'owed' === i.direction ? 'debt_owed' : 'debt_owe',
              occurredAt: r,
              debtId: o,
              note: n,
            });
          return {
            debt: {
              id: o,
              contactId: e.id,
              direction: i.direction,
              amountToman: t,
              note: n,
              occurredAt: r,
              actorId: 'demo',
            },
            entry: {
              id: c.id,
              contactId: e.id,
              amountToman: c.amountToman,
              kind: c.kind,
              occurredAt: r,
              note: n,
              debtId: o,
            },
            policyRevision: L,
          };
        }
        const t = d.entries.find(
          (t) =>
            t.debtId === E &&
            t.contactId === e.id &&
            'debt_reversal' !== t.kind,
        );
        if (!t || 'reverse' !== A[4]) throw W('not_found', 404);
        if (d.entries.some((e) => e.debtId === E && 'debt_reversal' === e.kind))
          throw W('debt_already_reversed');
        const o = ee(d, {
          contactId: e.id,
          amountToman: -t.amountToman,
          kind: 'debt_reversal',
          occurredAt: H(x),
          debtId: E,
          note: t.note,
        });
        return {
          debt: {
            id: E,
            contactId: e.id,
            direction: 'debt_owed' === t.kind ? 'owed' : 'owe',
            amountToman: Math.abs(t.amountToman),
            note: t.note,
            occurredAt: t.occurredAt,
            actorId: 'demo',
            reversedAt: o.occurredAt,
            reversedBy: 'demo',
          },
          entry: {
            id: o.id,
            contactId: e.id,
            amountToman: o.amountToman,
            kind: o.kind,
            occurredAt: o.occurredAt,
            note: o.note,
            debtId: E,
          },
          policyRevision: L,
        };
      }
      if ('contacts' === q && N && 'settle' === O && 'POST' === o) {
        if (te(d, N).archivedAt) throw W('contact_archived');
        const e = X(d, N),
          t = (0, R.openBalance)(
            e,
            d.cheques
              .filter((e) => e.contactId === N && 'pending' === e.status)
              .map(re),
          ),
          o = (0, R.settlementPlan)({ balance: e, open: t }, i);
        if (!o.ok)
          throw W(
            o.code,
            'settle_balance_changed' === o.code ||
              'settle_nothing_open' === o.code
              ? 409
              : 400,
          );
        if (o.payment) {
          const e = oe(d, { contactId: N, ...o.payment }, x),
            t = d.entries[d.entries.length - 1];
          return {
            ...e,
            entry: {
              id: t.id,
              contactId: N,
              amountToman: t.amountToman,
              kind: t.kind,
              occurredAt: t.occurredAt,
              note: t.note,
              paymentId: t.paymentId,
            },
            leftToman: o.leftToman,
            policyRevision: L,
          };
        }
        const n = o.debt,
          r = Oe(d, 'debt'),
          c = H(x),
          a = ee(d, {
            contactId: N,
            amountToman:
              'owed' === n.direction ? n.amountToman : -n.amountToman,
            kind: 'owed' === n.direction ? 'debt_owed' : 'debt_owe',
            occurredAt: c,
            debtId: r,
            note: n.note,
          });
        return {
          debt: {
            id: r,
            contactId: N,
            direction: n.direction,
            amountToman: n.amountToman,
            note: n.note,
            occurredAt: c,
            actorId: 'demo',
          },
          entry: {
            id: a.id,
            contactId: N,
            amountToman: a.amountToman,
            kind: a.kind,
            occurredAt: c,
            note: n.note,
            debtId: r,
          },
          leftToman: o.leftToman,
          policyRevision: L,
        };
      }
      if (
        'ledger' === q &&
        'payments' === N &&
        O &&
        'reverse' === E &&
        'POST' === o
      ) {
        const e = d.entries.find(
          (e) =>
            e.paymentId === O &&
            ('payment_in' === e.kind || 'payment_out' === e.kind),
        );
        if (!e) throw W('not_found', 404);
        if (e.forDoc) throw W('payment_of_document');
        const t = ve(d, e, x);
        return {
          payment: {
            id: O,
            contactId: e.contactId,
            direction: 'payment_in' === e.kind ? 'in' : 'out',
            method: e.method || 'cash',
            amountToman: Math.abs(e.amountToman),
            occurredAt: e.occurredAt,
            note: e.note,
            reversedAt: t.occurredAt,
            reversedBy: 'demo',
          },
          entry: {
            id: t.id,
            contactId: t.contactId,
            amountToman: t.amountToman,
            kind: t.kind,
            occurredAt: t.occurredAt,
            note: t.note,
            paymentId: O,
          },
          policyRevision: L,
        };
      }
      if ('ledger' === q && 'payments' === N && 'POST' === o) {
        if (
          !['in', 'out'].includes(i.direction) ||
          !['cash', 'card', 'cheque'].includes(i.method) ||
          ('cheque' === i.method) != !!i.cheque
        )
          throw W('invalid_request', 400);
        const e =
          'string' == typeof i.occurredAt &&
          Number.isFinite(Date.parse(i.occurredAt))
            ? Date.parse(i.occurredAt)
            : x;
        return { ...oe(d, i, e), policyRevision: L };
      }
      if ('cheques' === q && !N) {
        const e = p.get('direction'),
          t = p.get('status');
        return {
          cheques: d.cheques
            .filter((o) => !((e && o.direction !== e) || (t && o.status !== t)))
            .sort(
              (e, t) =>
                e.dueDate.localeCompare(t.dueDate) || e.id.localeCompare(t.id),
            )
            .map(ne),
          next: null,
          policyRevision: L,
        };
      }
      if ('cheques' === q && N) {
        const e = d.cheques.find((e) => e.id === N);
        if (!e) throw W('cheque_not_found', 404);
        if (!O && !U) return { cheque: ne(e), policyRevision: L };
        if ('transition' === O && 'POST' === o) {
          if ('pending' !== e.status) throw W('cheque_final');
          if (!['cashed', 'bounced', 'cancelled'].includes(i.status))
            throw W('invalid_request', 400);
          return (ie(d, e, i.status, x), { cheque: ne(e), policyRevision: L });
        }
        if ('photos' === O && ('front' === E || 'back' === E)) {
          if ('PUT' === o) {
            const t = String(i.photo || '');
            if (!t.startsWith('data:image/')) throw W('invalid_image', 400);
            return (
              (e.photos = { ...e.photos, [E]: t }),
              'front' === E && (e.photo = t),
              { cheque: ne(e), policyRevision: L }
            );
          }
          if ('DELETE' === o) {
            const t = { ...e.photos };
            return (
              delete t[E],
              (e.photos = t),
              'front' === E && delete e.photo,
              { cheque: ne(e), policyRevision: L }
            );
          }
        }
      }
      if ('sales' === q && 'top-contacts' === N && !O && !U) {
        const e = new Map();
        for (const t of d.docs)
          if (
            'sale' === t.type &&
            t.contactId &&
            Date.parse(t.occurredAt) >= x - 7776e6 &&
            !ue(d, t).corrected
          ) {
            const o = e.get(t.contactId) || { n: 0, latest: '' };
            (o.n++,
              t.occurredAt > o.latest && (o.latest = t.occurredAt),
              e.set(t.contactId, o));
          }
        return {
          contacts: d.contacts
            .filter((t) => !t.archivedAt && e.has(t.id))
            .map((t) => ({
              id: t.id,
              name: t.name,
              count: e.get(t.id).n,
              latest: e.get(t.id).latest,
            }))
            .sort(
              (e, t) =>
                t.count - e.count ||
                t.latest.localeCompare(e.latest) ||
                e.id.localeCompare(t.id),
            )
            .slice(0, 10)
            .map(({ latest: e, ...t }) => t),
        };
      }
      if ('club' === q) {
        if (null !== we()) throw W('club_plus_only', 402);
        const e = S(d);
        if (!N && 'PUT' === o) {
          const t = i.rewards;
          if (void 0 !== t && !(0, h.rewardsBodyValid)(t))
            throw W('invalid_request', 400);
          return (
            (e.rule = (0, f.cleanClubRule)(i)),
            Array.isArray(t) &&
              (e.rewards = (0, h.cleanClubRewards)(i.rewards, () =>
                Oe(d, 'r'),
              )),
            { club: C(e) }
          );
        }
        if ('members' === N && !O && 'POST' === o) {
          let e,
            t = !0;
          if ('string' == typeof i.contactId) {
            if (
              ((e = d.contacts.find(
                (e) => e.id === i.contactId && !e.archivedAt,
              )),
              !e)
            )
              throw W('not_found', 404);
          } else {
            const o = String(i.name || '').trim(),
              n = (0, y.normalizeMobile)(String(i.phone || ''));
            if (!o || o.length > 100 || !String(i.phone || '').trim())
              throw W('invalid_request', 400);
            if (!(0, y.validMobile)(n)) throw W('contact_phone_invalid', 400);
            ((e = d.contacts.find(
              (e) =>
                !e.archivedAt &&
                !!e.phone &&
                (0, y.normalizeMobile)(e.phone) === n,
            )),
              e ||
                ((t = !1),
                (e = {
                  id: Oe(d, 'c'),
                  name: o,
                  kind: 'customer',
                  phone: n,
                  version: 1,
                  createdAt: H(x),
                  updatedAt: H(x),
                }),
                d.contacts.push(e)));
          }
          const o = t && z(d, e).isMember;
          return (
            (e.clubJoinedAt && 'supplier' !== e.kind) ||
              ((e.clubJoinedAt = e.clubJoinedAt || H(x)),
              'supplier' === e.kind && (e.kind = 'both'),
              t && (e.version++, (e.updatedAt = H(x)))),
            {
              member: z(d, e),
              contact: Y(d, e),
              existing: t,
              alreadyMember: o,
              policyRevision: L,
            }
          );
        }
        if (!N && !U) {
          const t = new Set(e.rows.map((e) => e.contactId)),
            o = 'bought' === p.get('sort') ? 'bought' : 'points',
            n = d.contacts
              .filter((e) => !e.archivedAt && (t.has(e.id) || !!e.clubJoinedAt))
              .map((e) => z(d, e))
              .sort((e, t) =>
                'bought' === o
                  ? t.boughtToman - e.boughtToman || t.points - e.points
                  : t.points - e.points || t.boughtToman - e.boughtToman,
              );
          return { club: C(e), members: n };
        }
        if ('members' === N && O && !U) {
          const t = d.contacts.find((e) => e.id === O);
          if (!t) throw W('not_found', 404);
          const o = e.rows
            .filter((e) => e.contactId === O)
            .sort(
              (e, t) =>
                t.occurredAt.localeCompare(e.occurredAt) ||
                t.id.localeCompare(e.id),
            )
            .map((e) => {
              const t = e.saleId
                  ? d.docs.find((t) => t.id === e.saleId)
                  : void 0,
                o = e.returnId
                  ? (d.returns || []).find((t) => t.id === e.returnId)
                  : void 0;
              return {
                id: e.id,
                kind: e.kind,
                points: e.points,
                occurredAt: e.occurredAt,
                ...(t ? { saleId: t.id, receiptNo: t.receiptNo } : {}),
                ...(o ? { returnId: o.id, returnNo: o.returnNo } : {}),
                ...(('used' !== e.kind && 'given_back' !== e.kind) ||
                !t?.clubReward
                  ? {}
                  : { reward: t.clubReward }),
              };
            });
          return { club: C(e), member: z(d, t), history: o };
        }
      }
      if ('returns' === q && !N && 'POST' === o) return le(d, i, x);
      if ('returns' === q && !U) {
        const e = p.get('saleId') || p.get('purchaseId');
        return {
          returns: (d.returns || [])
            .filter((t) => !e || t.docId === e)
            .map((e) => ({
              id: e.id,
              type: e.type,
              returnNo: e.returnNo,
              refundMethod: e.refundMethod,
              totalToman: e.totalToman,
              occurredAt: e.occurredAt,
              lineCount: e.lines.length,
            })),
          next: null,
        };
      }
      if (('sales' === q || 'purchases' === q) && !N) {
        const e = 'sales' === q ? 'sale' : 'purchase';
        if ('POST' === o)
          return {
            ...de(
              d,
              e,
              i,
              'string' == typeof i.occurredAt &&
                Number.isFinite(Date.parse(i.occurredAt))
                ? Date.parse(i.occurredAt)
                : void 0,
            ),
            revision: d.revision,
            policyRevision: L,
          };
        const t = 'sale' === e ? p.get('contactId') : null,
          n = 'sale' === e ? p.get('method') : null,
          r = 'sale' === n ? ['cash', 'card'] : n ? [n] : null;
        if (n && !['sale', 'cash', 'card', 'credit', 'cheque'].includes(n))
          throw W('invalid_request', 400);
        const c = (o) =>
            o.type === e &&
            (!t || o.contactId === t) &&
            (!r || r.includes(o.paymentMethod)),
          a = d.docs
            .filter(c)
            .sort(
              (e, t) =>
                t.occurredAt.localeCompare(e.occurredAt) ||
                t.id.localeCompare(e.id),
            ),
          s = Math.min(100, Number(p.get('limit')) || 30),
          u = p.get('before'),
          l = u
            ? a.filter(
                (e) =>
                  e.occurredAt < u ||
                  (e.occurredAt === u && e.id < (p.get('beforeId') || '')),
              )
            : a,
          m = l.slice(0, s),
          f = m[m.length - 1],
          h = (e) => {
            const t = ue(d, e);
            return t.corrected
              ? 0
              : Math.max(
                  0,
                  e.totalToman -
                    t.lines
                      .filter((e) => e.corrected)
                      .reduce((e, t) => e + (t.saleTotal ?? 0), 0),
                );
          },
          v = (e) => (0, D.todayIn)(j, Date.parse(e.occurredAt)),
          y = [...new Set(m.map(v))],
          I =
            'sale' === e
              ? y.map((e) => {
                  const t = a.filter((t) => v(t) === e);
                  return {
                    day: e,
                    count: t.length,
                    totalToman: t.reduce((e, t) => e + h(t), 0),
                  };
                })
              : void 0,
          b = t
            ? {
                summary: {
                  count: a.length,
                  totalToman: a.reduce((e, t) => e + h(t), 0),
                  paidToman: a.reduce(
                    (e, t) => e + Math.min(t.paidToman, h(t)),
                    0,
                  ),
                },
              }
            : {},
          w =
            'purchase' === e
              ? y.map((e) => ({
                  day: e,
                  count: a.filter((t) => v(t) === e).length,
                }))
              : void 0;
        return {
          [q]: m.map((t) => ('purchase' === e ? he(d, t) : pe(d, t))),
          ...(I ? { days: I } : {}),
          ...(w ? { days: w } : {}),
          next:
            l.length > s && f ? { before: f.occurredAt, beforeId: f.id } : null,
          ...b,
        };
      }
      if (('sales' === q || 'purchases' === q) && N) {
        const e = 'sales' === q ? 'sale' : 'purchase';
        if (!O && !U) {
          const t = d.docs.find((t) => t.id === N && t.type === e);
          if (!t) throw W('not_found', 404);
          return {
            [e]: 'purchase' === e ? { ...ue(d, t), ...fe(d, t) } : ue(d, t),
          };
        }
        if ('correct' === O && 'POST' === o)
          return {
            ...ye(
              d,
              e,
              N,
              x,
              'sale' === e && !0 === i?.reversePayment && 'all' === i?.lines,
            ),
            revision: d.revision,
            policyRevision: L,
          };
        if ('issued' === O && 'POST' === o && 'sale' === e) {
          const e = d.docs.find((e) => e.id === N && 'sale' === e.type);
          if (!e) throw W('not_found', 404);
          return ((e.issuedAt ||= H(x)), { issuedAt: e.issuedAt });
        }
        if ('share' === O) throw W(K);
        if ('invoice-header' === O && 'PUT' === o) {
          const t = d.docs.find((t) => t.id === N && t.type === e);
          if (!t) throw W('not_found', 404);
          if (ue(d, t).corrected)
            throw W(
              'sale' === e ? 'invoice_corrected' : 'receipt_cancelled',
              409,
            );
          const o = (0, P.cleanInvoiceHeader)(i?.header);
          return (
            Object.keys(o).length
              ? (t.invoiceHeader = o)
              : delete t.invoiceHeader,
            { [e]: 'purchase' === e ? { ...ue(d, t), ...fe(d, t) } : ue(d, t) }
          );
        }
      }
      if ('ai' === q && 'status' === N && !U)
        return { ready: !1, paused: !1, mock: !1 };
      throw W(K);
    }
  },
  449,
  [
    429, 450, 451, 439, 433, 452, 454, 455, 457, 442, 458, 453, 311, 460, 461,
    462, 448, 438, 463, 465, 432, 431, 466, 467, 468, 469, 471, 472, 443, 474,
    475, 444,
  ],
);
