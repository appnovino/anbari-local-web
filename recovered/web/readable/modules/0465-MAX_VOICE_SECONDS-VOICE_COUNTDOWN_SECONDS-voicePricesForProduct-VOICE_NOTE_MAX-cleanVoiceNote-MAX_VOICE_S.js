// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 465; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'MAX_VOICE_SECONDS', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      Object.defineProperty(_e, 'VOICE_COUNTDOWN_SECONDS', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (_e.voicePricesForProduct = function (e, t) {
        if (null == e.unitCost && null == e.unitPrice)
          return { unitCost: void 0, unitPrice: void 0 };
        let o = 1;
        if (
          e.pricesInEnteredUnit &&
          e.unit &&
          t &&
          e.unit !== (t.unit || 'piece')
        ) {
          const a = (0, n.fixedFactor)(e.unit, t.unit || 'piece');
          if (t.packUnit === e.unit && t.packSize) o = t.packSize;
          else {
            if (!a) throw Error('invalid_unit');
            o = 'multiply' in a ? a.multiply : 1 / a.divide;
          }
        }
        const a = (t, n) => {
          if (null == t) return;
          if (!e.pricesInEnteredUnit || 1 === o) return t;
          const a = 10 ** n;
          return Math.round((t / o) * a) / a;
        };
        return { unitCost: a(e.unitCost, 4), unitPrice: a(e.unitPrice, 2) };
      }),
      Object.defineProperty(_e, 'VOICE_NOTE_MAX', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (_e.cleanVoiceNote = l),
      Object.defineProperty(_e, 'MAX_VOICE_SALES', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (_e.validateVoiceSale = p),
      (_e.validateVoiceSales = y),
      (_e.roundedWhen = h),
      (_e.validateToBuy = v),
      (_e.validateLedgerActions = _),
      (_e.validateVoiceResult = function (e, t = 20, n = !0) {
        const o = E(e, t, n),
          a = x(e?.expenses),
          u = A(e?.contacts);
        return {
          ...o,
          ...(a.length ? { expenses: a } : {}),
          ...(u.length ? { contacts: u } : {}),
        };
      }),
      (_e.validExpenses = x),
      (_e.validContacts = A),
      Object.defineProperty(_e, 'EMPTY_NOTE', {
        enumerable: !0,
        get: function () {
          return C;
        },
      }),
      (_e.emptyNoteReason = function (e) {
        const t = String(e || ''),
          n = t
            .replace(/[^\p{L}\p{N}\s]/gu, ' ')
            .trim()
            .split(/\s+/)
            .filter(Boolean);
        return !n.length || (1 === n.length && n[0].length <= 2)
          ? 'silent'
          : /\u0645\u0648\u062c\u0648\u062f\u06cc|(?:\u0686\u06cc|\u0686\u06cc\u0627|\u0686\u0647)\s+(?:\u062a\u0648|\u062a\u0648\u06cc|\u062f\u0631)\s+\u0627\u0646\u0628\u0627\u0631|\u0644\u06cc\u0633\u062a\s+(?:\u06a9\u0646|\u0628\u062f\u0647)|(?:\u0646\u0634\u0648\u0646|\u0646\u0634\u0627\u0646)\s+(?:\u0628\u062f\u0647|\u0628\u062f\u06cc\u0646)|\u0686\u0646\u062f\s+\u062a\u0627\s+\S+(?:\s+\S+)?\s+(?:\u062f\u0627\u0631\u06cc\u0645|\u062f\u0627\u0631\u0645|\u0645\u0648\u0646\u062f\u0647|\u0645\u0627\u0646\u062f\u0647)/.test(
                t,
              )
            ? 'stock'
            : 'nothing';
      }));
    var e = r(d[0]),
      t = r(d[1]),
      n = r(d[2]),
      o = r(d[3]);
    const a = 240,
      u = 30;
    const s = 200;
    function l(e) {
      return 'string' == typeof e
        ? e
            .replace(/[\x00-\x1f]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, s)
        : '';
    }
    const c = 10;
    function p(e) {
      if (!e || 'object' != typeof e || Array.isArray(e)) return;
      const t = e,
        n =
          ('string' == typeof t.customerName &&
            t.customerName.trim().slice(0, 100)) ||
          null,
        o =
          'string' == typeof t.payment &&
          ['cash', 'card', 'credit', 'cheque'].includes(t.payment)
            ? t.payment
            : null,
        a =
          'number' == typeof t.paidToman &&
          Number.isSafeInteger(t.paidToman) &&
          t.paidToman >= 0
            ? t.paidToman
            : null,
        u = 'boolean' == typeof t.sendInvoice ? t.sendInvoice : void 0,
        s = l(t.note),
        c =
          'string' == typeof t.customerPhone &&
          /^\d{4,15}$/.test(t.customerPhone)
            ? t.customerPhone
            : '';
      return n || o || null !== a || u
        ? {
            customerName: n,
            payment: o,
            paidToman: a,
            ...(void 0 !== u ? { sendInvoice: u } : {}),
            ...(s ? { note: s } : {}),
            ...(c ? { customerPhone: c } : {}),
          }
        : void 0;
    }
    function y(e) {
      return Array.isArray(e)
        ? e
            .slice(0, c)
            .map(
              (e) =>
                p(e) ?? { customerName: null, payment: null, paidToman: null },
            )
        : [];
    }
    const f = 3e5;
    function h(e) {
      const t = Date.parse(e);
      return Number.isFinite(t) && t % f !== 0
        ? new Date(Math.round(t / f) * f).toISOString()
        : e;
    }
    function v(o) {
      if (null == o) return [];
      if (!Array.isArray(o) || o.length > 20) throw Error('invalid_response');
      return o.map((o) => {
        const a = o;
        if (
          !a ||
          'string' != typeof a.name ||
          !a.name.trim() ||
          a.name.length > 100 ||
          (void 0 !== a.quantity &&
            null !== a.quantity &&
            !(0, t.validQuantity)(a.quantity)) ||
          (void 0 !== a.unit && null !== a.unit && !(0, n.isUnit)(a.unit)) ||
          (void 0 !== a.when &&
            null !== a.when &&
            !(0, e.validTimestamp)(a.when))
        )
          throw Error('invalid_response');
        return {
          name: a.name.trim(),
          ...(void 0 !== a.quantity && null !== a.quantity
            ? { quantity: a.quantity }
            : {}),
          ...(a.unit ? { unit: a.unit } : {}),
          ...(a.when ? { when: h(a.when) } : {}),
          ...(!0 === a.task ? { task: !0 } : {}),
        };
      });
    }
    const b = (e) =>
        'string' == typeof e &&
        /^\d{4}-\d{2}-\d{2}$/.test(e) &&
        Number.isFinite(Date.parse(e + 'T00:00:00Z')) &&
        new Date(e + 'T00:00:00Z').toISOString().slice(0, 10) === e,
      I = (e, t) => null == e || ('string' == typeof e && e.length <= t);
    function N(e, n) {
      if (!e) return e;
      const o = e,
        a = { ...e };
      for (const [e, u] of [
        ['totalCost', 'unitCost'],
        ['totalPrice', 'unitPrice'],
      ]) {
        const s = o[e];
        if (null != s && (void 0 === o[u] || null === o[u])) {
          if (
            'number' != typeof s ||
            !Number.isFinite(s) ||
            s < 0 ||
            s > 999999999999 ||
            !(0, t.validQuantity)(o.quantity)
          )
            throw Error('invalid_response');
          a[u] = n ? Math.round(s / o.quantity) : s / o.quantity;
        }
      }
      return a;
    }
    function _(e) {
      if (null == e) return [];
      if (!Array.isArray(e) || e.length > 20) throw Error('invalid_response');
      return e.map((e) => {
        const t = e;
        if (
          !t ||
          !['cheque', 'payment_in', 'payment_out', 'debt'].includes(t.type) ||
          'string' != typeof t.contactName ||
          !t.contactName.trim() ||
          t.contactName.length > 100 ||
          (null !== t.amount &&
            ('number' != typeof t.amount ||
              !Number.isSafeInteger(t.amount) ||
              t.amount <= 0)) ||
          !['in', 'out'].includes(t.direction) ||
          (void 0 !== t.dueDate && null !== t.dueDate && !b(t.dueDate)) ||
          !I(t.chequeNumber, 80) ||
          !I(t.bank, 100)
        )
          throw Error('invalid_response');
        const n =
          'payment_in' === t.type
            ? 'in'
            : 'payment_out' === t.type
              ? 'out'
              : t.direction;
        return {
          type: t.type,
          contactName: t.contactName.trim(),
          amount: t.amount,
          direction: n,
          ...('cheque' === t.type && t.dueDate ? { dueDate: t.dueDate } : {}),
          ...('cheque' === t.type && t.chequeNumber?.trim()
            ? { chequeNumber: t.chequeNumber.trim() }
            : {}),
          ...('cheque' === t.type && t.bank?.trim()
            ? { bank: t.bank.trim() }
            : {}),
          ...(l(t.note) ? { note: l(t.note) } : {}),
        };
      });
    }
    function E(o, a, u) {
      const s = o;
      if (
        !s ||
        'string' != typeof s.transcript ||
        s.transcript.length > 12e3 ||
        'string' != typeof s.clarification ||
        s.clarification.length > 2e3 ||
        !Array.isArray(s.actions) ||
        s.actions.length > Math.min(60, a)
      )
        throw new Error('invalid_response');
      const l = _(s.ledger),
        c = v(s.toBuy),
        f = p(s.sale),
        h = y(s.sales);
      if (!s.transcript.trim() && l.length) throw Error('invalid_response');
      const b = s.actions.map((e) => N(e, u));
      for (const o of b) {
        if (
          void 0 !== o?.imageIndex &&
          null !== o.imageIndex &&
          (!Number.isInteger(o.imageIndex) ||
            o.imageIndex < 0 ||
            o.imageIndex > 9)
        )
          throw Error('invalid_response');
        if (
          void 0 !== o?.timestamp &&
          null !== o.timestamp &&
          !(0, e.validTimestamp)(o.timestamp)
        )
          throw Error('invalid_response');
        if (
          !o ||
          'string' != typeof o.name ||
          o.name.length > 100 ||
          (null !== o.quantity && !(0, t.validQuantity)(o.quantity)) ||
          ![null, 'received', 'sold', 'used', 'waste'].includes(o.kind) ||
          (void 0 !== o.unit && null !== o.unit && !(0, n.isUnit)(o.unit)) ||
          [o.unitCost, o.unitPrice].some(
            (e) =>
              null != e &&
              ('number' != typeof e ||
                !Number.isFinite(e) ||
                e < 0 ||
                e > 999999999999),
          ) ||
          (void 0 !== o.expiresAt &&
            null !== o.expiresAt &&
            (!/^\d{4}-\d{2}-\d{2}$/.test(o.expiresAt) || 'received' !== o.kind))
        )
          throw new Error('invalid_response');
        if (
          (void 0 !== o.productId &&
            ('string' != typeof o.productId ||
              !o.productId ||
              o.productId.length > 100)) ||
          (void 0 !== o.needsChoice && 'boolean' != typeof o.needsChoice) ||
          (void 0 !== o.candidates && !w(o.candidates)) ||
          !I(o.matchedFrom, 100) ||
          !I(o.size, 20) ||
          !I(o.color, 20) ||
          !I(o.model, 100)
        )
          throw Error('invalid_response');
      }
      if (!s.transcript.trim() && (s.actions.length || c.length))
        throw new Error('invalid_response');
      return {
        transcript: s.transcript,
        clarification: s.clarification,
        actions: b.map((e) => ({
          name: e.name,
          quantity: e.quantity,
          kind: e.kind,
          ...(e.unit ? { unit: e.unit } : {}),
          ...(!0 === e.pricesInEnteredUnit ? { pricesInEnteredUnit: !0 } : {}),
          ...(void 0 !== e.unitCost && null !== e.unitCost
            ? { unitCost: e.unitCost }
            : {}),
          ...(void 0 !== e.unitPrice && null !== e.unitPrice
            ? { unitPrice: e.unitPrice }
            : {}),
          ...(e.expiresAt ? { expiresAt: e.expiresAt } : {}),
          ...(e.timestamp ? { timestamp: e.timestamp } : {}),
          ...(void 0 !== e.imageIndex && null !== e.imageIndex
            ? { imageIndex: e.imageIndex }
            : {}),
          ...(e.productId ? { productId: e.productId } : {}),
          ...(e.productId && e.matchedFrom
            ? { matchedFrom: e.matchedFrom }
            : {}),
          ...(e.size?.trim() ? { size: e.size.trim() } : {}),
          ...(e.color?.trim() ? { color: e.color.trim() } : {}),
          ...(e.model?.trim() ? { model: e.model.trim() } : {}),
          ...(e.needsChoice ? { needsChoice: !0 } : {}),
          ...(e.candidates?.length
            ? {
                candidates: e.candidates.map((e) => ({
                  id: e.id,
                  name: e.name,
                  ...(e.brand ? { brand: e.brand } : {}),
                  ...(e.size ? { size: e.size } : {}),
                  ...(e.unit ? { unit: e.unit } : {}),
                  stock: e.stock,
                })),
              }
            : {}),
          ...('sold' === e.kind &&
          Number.isInteger(e.saleIndex) &&
          e.saleIndex >= 0 &&
          e.saleIndex < h.length
            ? { saleIndex: e.saleIndex }
            : {}),
        })),
        ...(l.length ? { ledger: l } : {}),
        ...(c.length ? { toBuy: c } : {}),
        ...(f ? { sale: f } : {}),
        ...(h.length ? { sales: h } : {}),
      };
    }
    function x(e) {
      return Array.isArray(e)
        ? e
            .filter(
              (e) =>
                !!e &&
                'object' == typeof e &&
                'string' == typeof e.label &&
                !!e.label.trim() &&
                e.label.length <= 100 &&
                (null === e.amount ||
                  void 0 === e.amount ||
                  ('number' == typeof e.amount &&
                    Number.isSafeInteger(e.amount) &&
                    e.amount > 0)),
            )
            .slice(0, 20)
            .map((e) => {
              const t = l(e.note);
              return {
                label: e.label.trim(),
                amount: 'number' == typeof e.amount ? e.amount : null,
                category: (0, o.voiceExpenseCategory)(e.label, e.category),
                ...(t ? { note: t } : {}),
                ...(!0 === e.monthly ? { monthly: !0 } : {}),
              };
            })
        : [];
    }
    function A(e) {
      return Array.isArray(e)
        ? e
            .filter(
              (e) =>
                !!e &&
                'object' == typeof e &&
                'string' == typeof e.name &&
                !!e.name.trim() &&
                e.name.length <= 100,
            )
            .slice(0, 10)
            .map((e) => {
              const t =
                'string' == typeof e.phone && /^\d{10,15}$/.test(e.phone)
                  ? e.phone
                  : '';
              return { name: e.name.trim(), ...(t ? { phone: t } : {}) };
            })
        : [];
    }
    function w(e) {
      const t = (e, t) =>
        void 0 === e || ('string' == typeof e && e.length <= t);
      return (
        Array.isArray(e) &&
        e.length <= 8 &&
        e.every(
          (e) =>
            !!e &&
            'object' == typeof e &&
            'string' == typeof e.id &&
            !!e.id &&
            e.id.length <= 100 &&
            'string' == typeof e.name &&
            !!e.name &&
            e.name.length <= 100 &&
            t(e.brand, 60) &&
            t(e.size, 60) &&
            (void 0 === e.unit || (0, n.isUnit)(e.unit)) &&
            'number' == typeof e.stock &&
            Number.isFinite(e.stock),
        )
      );
    }
    const C = {
      silent:
        '\u0686\u06cc\u0632\u06cc \u0646\u0634\u0646\u06cc\u062f\u0645\u061b \u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631 \u0628\u0647 \u06af\u0648\u0634\u06cc \u0648 \u0634\u0645\u0631\u062f\u0647 \u0628\u06af\u0648\u060c \u0645\u062b\u0644\u0627\u064b: \u0633\u0647 \u062a\u0627 \u0645\u062f\u0627\u062f \u0631\u0633\u06cc\u062f',
      stock:
        '\u0627\u06cc\u0646\u200c\u062c\u0627 \u0631\u0633\u06cc\u062f \u0648 \u0641\u0631\u0648\u0634 \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0628\u0631\u0627\u06cc \u062f\u06cc\u062f\u0646 \u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u0647 \u0635\u0641\u062d\u0647\u0654 \u0645\u0648\u062c\u0648\u062f\u06cc \u0628\u0631\u0648.',
      nothing:
        '\u062f\u0631 \u0627\u06cc\u0646 \u06cc\u0627\u062f\u062f\u0627\u0634\u062a \u06a9\u0627\u0644\u0627 \u06cc\u0627 \u0645\u0628\u0644\u063a\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f\u061b \u0645\u062b\u0644\u0627\u064b \u0628\u06af\u0648: \u0633\u0647 \u062a\u0627 \u0645\u062f\u0627\u062f \u0631\u0633\u06cc\u062f',
    };
  },
  465,
  [440, 431, 432, 443],
);
