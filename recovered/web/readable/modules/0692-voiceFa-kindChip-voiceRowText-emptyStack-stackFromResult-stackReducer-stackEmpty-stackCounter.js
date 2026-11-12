// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 692; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, _m, _e2, _d) {
    'use strict';
    (Object.defineProperty(_e2, '__esModule', { value: !0 }),
      Object.defineProperty(_e2, 'voiceFa', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(_e2, 'kindChip', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      (_e2.voiceRowText = function (e, t, n) {
        return [e ? h[e] : '', t, n].filter(Boolean).join(' ');
      }),
      Object.defineProperty(_e2, 'emptyStack', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      (_e2.stackFromResult = function (e, t) {
        const n = (e.ledger || []).map((t, n) => {
          const i = t.contactPhone || O(e.transcript, t.contactName),
            o = t.contactId;
          return {
            id: 'ledger-' + n,
            name: t.contactName,
            quantity: '',
            kind: null,
            ledger: {
              type: t.type,
              contactName: t.contactName,
              amount: null === t.amount ? '' : String(t.amount),
              direction: t.direction,
              ...(t.dueDate ? { dueDate: t.dueDate } : {}),
              ...(t.chequeNumber ? { chequeNumber: t.chequeNumber } : {}),
              ...(t.bank ? { bank: t.bank } : {}),
              ...(t.note ? { note: t.note } : {}),
              ...(i ? { contactPhone: i } : {}),
              ...(o ? { contactId: o } : {}),
            },
          };
        });
        return [
          ...e.actions.map((e, n) => {
            const i = e;
            return {
              id: 'voice-' + n,
              name: i.name,
              quantity: null === i.quantity ? '' : String(i.quantity),
              kind: !i.kind || (t && !t.includes(i.kind)) ? null : i.kind,
              ...(i.unit ? { unit: i.unit } : {}),
              ...(i.pricesInEnteredUnit ? { pricesInEnteredUnit: !0 } : {}),
              ...(void 0 !== i.unitCost && null !== i.unitCost
                ? { unitCost: i.unitCost }
                : {}),
              ...(void 0 !== i.unitPrice && null !== i.unitPrice
                ? { unitPrice: i.unitPrice }
                : {}),
              ...(i.expiresAt ? { expiresAt: i.expiresAt } : {}),
              ...(i.timestamp ? { timestamp: i.timestamp } : {}),
              ...(i.photo ? { photo: i.photo } : {}),
              ...(i.productId ? { productId: i.productId } : {}),
              ...(i.productId && i.matchedFrom
                ? { matchedFrom: i.matchedFrom }
                : {}),
              ...(!i.productId && i.model
                ? {
                    model: i.model,
                    ...(i.size ? { size: i.size } : {}),
                    ...(i.color ? { color: i.color } : {}),
                  }
                : {}),
              ...(i.brand ? { brand: i.brand } : {}),
              ...(i.familyName ? { familyName: i.familyName } : {}),
              ...(i.needsChoice ? { needsChoice: !0 } : {}),
              ...(i.candidates?.length ? { candidates: i.candidates } : {}),
              ...('sold' === i.kind && void 0 !== i.saleIndex
                ? { saleIndex: i.saleIndex }
                : {}),
              ...('sold' === i.kind && 'string' == typeof i.priceName
                ? { priceName: i.priceName }
                : {}),
              ...('sold' === i.kind && 'number' == typeof i.fromMoney
                ? { fromMoney: i.fromMoney }
                : {}),
            };
          }),
          ...n,
          ...(e.expenses || []).map((e, t) => ({
            id: 'expense-' + t,
            name: e.label,
            quantity: '',
            kind: null,
            expense: {
              category: e.category || (0, s.expenseCategoryFor)(e.label),
              label: e.label,
              amount: null === e.amount ? '' : String(e.amount),
              ...(e.note ? { note: e.note } : {}),
              ...(e.monthly ? { monthly: !0 } : {}),
            },
          })),
        ];
      }),
      (_e2.stackReducer = function (e, t) {
        switch (t.type) {
          case 'reset':
            return {
              items: t.items,
              done: [],
              removed: 0,
              total: t.items.length,
              leaving: null,
              entering: t.items[0]?.id ?? null,
            };
          case 'confirm':
            return e.leaving || e.entering === t.id || e.items[0]?.id !== t.id
              ? e
              : { ...e, leaving: { id: t.id, reason: 'confirm' } };
          case 'remove':
            return e.leaving?.id === t.id
              ? e
              : e.items[0]?.id === t.id
                ? e.leaving || e.entering === t.id
                  ? e
                  : { ...e, leaving: { id: t.id, reason: 'remove' } }
                : e.items.some((e) => e.id === t.id)
                  ? {
                      ...e,
                      items: e.items.filter((e) => e.id !== t.id),
                      removed: e.removed + 1,
                    }
                  : e;
          case 'edit':
            return e.leaving?.id === t.id
              ? e
              : {
                  ...e,
                  items: e.items.map((e) =>
                    e.id === t.id ? { ...e, ...t.patch } : e,
                  ),
                };
          case 'advance': {
            if (!e.leaving) return e;
            const [t, ...n] = e.items;
            if (!t || t.id !== e.leaving.id) return { ...e, leaving: null };
            const i = n[0]?.id ?? null;
            return 'confirm' === e.leaving.reason
              ? {
                  ...e,
                  items: n,
                  done: [...e.done, t],
                  leaving: null,
                  entering: i,
                }
              : {
                  ...e,
                  items: n,
                  removed: e.removed + 1,
                  leaving: null,
                  entering: i,
                };
          }
          case 'settled':
            return e.entering === t.id ? { ...e, entering: null } : e;
          case 'fail':
            return { ...e, leaving: null };
          case 'commit': {
            const n = e.items.find((e) => e.id === t.id);
            return n
              ? {
                  ...e,
                  items: e.items.filter((e) => e.id !== t.id),
                  done: [...e.done, n],
                  leaving: null,
                  entering: null,
                }
              : e;
          }
          case 'discard':
            return e.items.some((e) => e.id === t.id)
              ? {
                  ...e,
                  items: e.items.filter((e) => e.id !== t.id),
                  removed: e.removed + 1,
                  leaving: null,
                  entering: null,
                }
              : e;
          case 'reopen': {
            const n = new Set(t.items.map((e) => e.id));
            return {
              ...e,
              done: e.done.filter((e) => !n.has(e.id)),
              items: [...e.items.filter((e) => !n.has(e.id)), ...t.items],
              leaving: null,
              entering: null,
            };
          }
          case 'drop':
            return e.done.some((e) => e.id === t.id)
              ? {
                  ...e,
                  done: e.done.filter((e) => e.id !== t.id),
                  removed: e.removed + 1,
                }
              : e;
        }
      }),
      Object.defineProperty(_e2, 'stackEmpty', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }),
      (_e2.stackCounter = k),
      Object.defineProperty(_e2, 'faNumber', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      (_e2.counterText = function (e) {
        const { position: t, total: n } = k(e);
        return f.counter.replace('{n}', y(t)).replace('{total}', y(n));
      }),
      (_e2.itemDraft = function (t, n) {
        if (!t.kind || t.ledger) throw Error('invalid');
        const i = _(t, n),
          c = Q(t, i),
          a = !!i && c !== i,
          { unitCost: u, unitPrice: d } = (0, o.voicePricesForProduct)(
            {
              ...t,
              unitCost: t.newCost ?? t.unitCost,
              unitPrice: t.newPrice ?? t.unitPrice,
            },
            c,
          );
        return {
          name: t.name.trim(),
          quantity: (0, e.parseQuantity)(t.quantity),
          kind: t.kind,
          ...(t.unit ? { unit: t.unit } : {}),
          ...(a ? { packSize: t.packSize } : {}),
          ...(i !== n ? { unitSwitch: !0 } : {}),
          ...(void 0 !== u ? { unitCost: u } : {}),
          ...(void 0 !== d ? { unitPrice: d } : {}),
          ...(t.expiresAt ? { expiresAt: t.expiresAt } : {}),
          ...(t.productId ? { productId: t.productId } : {}),
          ...(t.brand && !t.productId ? { brand: t.brand } : {}),
          ...(t.model && !t.productId
            ? {
                model: t.model,
                ...(t.size ? { size: t.size } : {}),
                ...(t.color ? { color: t.color } : {}),
              }
            : {}),
          ...(t.timestamp ? { timestamp: t.timestamp } : {}),
          ...(t.photo ? { photo: t.photo } : {}),
        };
      }),
      (_e2.remainingResult = function (t, n) {
        const i = n.items.filter((e) => e.id !== n.leaving?.id),
          { ledger: o, expenses: c, ...a } = t,
          u = i.filter((e) => e.ledger).map((e) => P(e.ledger)),
          d = i
            .filter((e) => e.expense)
            .map((e) => ({
              label: e.expense.label,
              amount: N(e.expense) ?? null,
              category: e.expense.category,
              ...(e.expense.note?.trim()
                ? { note: e.expense.note.trim() }
                : {}),
              ...(e.expense.monthly ? { monthly: !0 } : {}),
            }));
        return {
          ...a,
          ...(d.length ? { expenses: d } : {}),
          actions: i
            .filter((e) => !e.ledger && !e.expense)
            .map((t) => {
              let n = null;
              try {
                n = (0, e.parseQuantity)(t.quantity);
              } catch {}
              const {
                id: i,
                expense: o,
                quantity: c,
                ledger: a,
                newCost: u,
                newPrice: d,
                priceChange: s,
                priceChangeFor: l,
                namedPrice: p,
                priceName: m,
                keepNew: f,
                ...h
              } = t;
              return { ...h, quantity: n };
            }),
          ...(u.length ? { ledger: u } : {}),
        };
      }),
      (_e2.ledgerAmount = w),
      Object.defineProperty(_e2, 'expenseAmount', {
        enumerable: !0,
        get: function () {
          return N;
        },
      }),
      (_e2.expenseBody = function (e, t) {
        const n = N(e);
        if (!n) throw Error('invalid');
        return {
          category: e.category,
          label: e.label.trim().slice(0, 100),
          amountToman: n,
          spentOn: t,
          method: 'cash',
          note: (0, o.cleanVoiceNote)(e.note),
          source: 'voice',
        };
      }),
      Object.defineProperty(_e2, 'ledgerLabel', {
        enumerable: !0,
        get: function () {
          return x;
        },
      }),
      (_e2.resolvedContact = C),
      Object.defineProperty(_e2, 'spokenWithPhone', {
        enumerable: !0,
        get: function () {
          return I;
        },
      }),
      (_e2.personChoices = z),
      (_e2.newPersonCheck = S),
      (_e2.newPersonPhone = function (e) {
        return e && (0, m.validMobile)(e) ? (0, m.normalizeMobile)(e) : void 0;
      }),
      (_e2.phoneAfter = O),
      (_e2.ledgerPayment = function (e, t) {
        const n = w(e);
        if (!n || 'debt' === e.type || ('cheque' === e.type && !e.dueDate))
          throw Error('invalid');
        const i = (0, o.cleanVoiceNote)(e.note);
        return {
          contactId: t,
          direction: e.direction,
          method: 'cheque' === e.type ? 'cheque' : 'cash',
          amountToman: n,
          ...(i ? { note: i } : {}),
          ...('cheque' === e.type
            ? {
                cheque: {
                  dueDate: e.dueDate,
                  ...(e.chequeNumber ? { number: e.chequeNumber } : {}),
                  ...(e.bank ? { bank: e.bank } : {}),
                },
              }
            : {}),
        };
      }),
      (_e2.ledgerDebt = function (e) {
        const t = w(e);
        if (!t || 'debt' !== e.type) throw Error('invalid');
        const n = (0, o.cleanVoiceNote)(e.note);
        return {
          direction: 'in' === e.direction ? 'owed' : 'owe',
          amountToman: t,
          ...(n ? { note: n } : {}),
        };
      }),
      (_e2.ledgerWarnings = q),
      (_e2.itemChoice = F),
      (_e2.resolvedProduct = j),
      (_e2.closeMatch = function (e, t) {
        const n = D(e);
        if (!n.length) return;
        let i,
          o = 0;
        for (const e of t) {
          if (e.archivedAt) continue;
          const t = new Set(D(e.name)),
            c = n.filter((e) => t.has(e)).length / n.length;
          c >= 0.5 && c > o && ((i = e), (o = c));
        }
        return i;
      }),
      (_e2.suggestionPatch = function (e, n, i) {
        const o = {
          keepNew: void 0,
          productId: void 0,
          familyName: void 0,
          brand: void 0,
          needsChoice: void 0,
          candidates: void 0,
          matchedFrom: void 0,
          model: void 0,
          size: void 0,
          color: void 0,
          name: e.name,
        };
        if (e.productId) {
          o.productId = e.productId;
          const c = n.find((t) => t.id === e.productId);
          !i?.unit && c?.unit && (o.unit = c.unit);
          const a = i?.unit || 'piece',
            u = (0, t.countAsPack)([{ productId: e.productId, unit: a }], n)[0]
              .unit;
          u !== a && (o.unit = u);
        } else
          e.model &&
            ((o.model = e.model), (o.size = e.size), (o.color = e.color));
        return o;
      }),
      (_e2.cardWarnings = function (i, o, c = [], u, d) {
        if (i.ledger) return q(i, u);
        if (i.expense)
          return N(i.expense)
            ? []
            : [{ type: 'amount', text: f.needAmount, blocking: !0 }];
        const s = [],
          l = F(i, o),
          p = (e) => a.notebookFa.units[e || 'piece'] || '';
        l.pending && s.push({ type: 'brand', text: f.pickBrand, blocking: !0 });
        i.kind || s.push({ type: 'kind', text: f.pickKind, blocking: !0 });
        let m;
        try {
          m = (0, e.parseQuantity)(i.quantity);
        } catch {
          s.push({ type: 'quantity', text: f.badQuantity, blocking: !0 });
        }
        if (l.pending) return s;
        const h = j(i, o);
        if (!h) {
          s.push({ type: 'new', text: f.newProduct, blocking: !1 });
          const e = (0, t.closeSuggestion)(i, o);
          (e &&
            s.push({
              type: 'close',
              text: f.nearHint.replace('{name}', e.name),
              blocking: !1,
              suggestion: e,
              product: e.productId
                ? o.find((t) => t.id === e.productId)
                : void 0,
            }),
            Z(i, d) &&
              s.push({ type: 'price', text: f.noPrice, blocking: !1 }));
          const n = $(i, d, i.name);
          return (n && s.push(n), s);
        }
        const b = _(i, h);
        if (b === h && (0, n.unitSwitchable)(h, i.unit))
          return (
            s.push({
              type: 'unitSwitch',
              text: f.unitSwitchAsk
                .replace('{name}', h.name)
                .replace('{unit}', p(i.unit)),
              blocking: !0,
              product: h,
            }),
            s
          );
        if (b !== h) {
          const e = c.some((e) => e.productId === h.id);
          s.push({
            type: 'unitNote',
            text:
              f.unitSwitchNote
                .replace(/\{name\}/g, h.name)
                .replace(/\{unit\}/g, p(i.unit))
                .replace(/\{stock\}/g, y(h.stock)) +
              (e ? f.unitSwitchHistory.replace('{unit}', p(i.unit)) : ''),
            blocking: !1,
            product: b,
          });
        }
        const v = !(0, n.unitCompatible)(i.unit, b) && K(i.unit, b),
          k = Q(i, b) ?? b;
        if (v && k === b)
          return (
            s.push({ type: 'pack', text: U(i, b), blocking: !0, product: b }),
            s
          );
        if (!v && !(0, n.unitCompatible)(i.unit, b))
          return (
            s.push({
              type: 'unit',
              text: f.unitMismatch
                .replace('{name}', b.name)
                .replace('{unit}', p(i.unit))
                .replace(/\{base\}/g, p(b.unit)),
              blocking: !0,
              product: b,
            }),
            s
          );
        const P = !i.unit || i.unit === (b.unit || 'piece'),
          w = d || b;
        Z(i, w) &&
          s.push({ type: 'price', text: f.noPrice, blocking: !1, product: b });
        const x = $(i, w, b.name);
        x && s.push({ ...x, product: b });
        const C = c
          .filter((e) => e.productId === b.id)
          .map((e) => Math.abs(e.quantity))
          .filter((e) => e > 0);
        if (void 0 !== m && P && C.length >= 3) {
          const e = C.reduce((e, t) => e + t, 0) / C.length;
          m >= 10 * e &&
            s.push({
              type: 'unusual',
              text: f.unusual
                .replace('{name}', b.name)
                .replace('{avg}', y(Math.round(10 * e) / 10))
                .replace('{unit}', p(b.unit)),
              blocking: !1,
              product: b,
            });
        }
        return s;
      }),
      Object.defineProperty(_e2, 'cardBlocked', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }),
      Object.defineProperty(_e2, 'keptNew', {
        enumerable: !0,
        get: function () {
          return E;
        },
      }),
      Object.defineProperty(_e2, 'keepNewPatch', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }),
      (_e2.packQuestionText = U),
      (_e2.switchedProduct = _),
      (_e2.packAskable = K),
      Object.defineProperty(_e2, 'packKey', {
        enumerable: !0,
        get: function () {
          return B;
        },
      }),
      (_e2.packedProduct = Q),
      (_e2.stockQuantity = V),
      (_e2.reviewPrices = function (e, t) {
        const n = !e.unit || !t || e.unit === (t.unit || 'piece');
        return {
          costPrice: Object.hasOwn(e, 'newCost')
            ? e.newCost
            : (H(e.unitCost, e, t) ?? (n ? t?.costPrice : void 0)),
          price: Object.hasOwn(e, 'newPrice')
            ? e.newPrice
            : (H(e.unitPrice, e, t) ?? (n ? t?.price : void 0)),
        };
      }),
      (_e2.editReviewPrice = function (e, t, n, i) {
        return {
          unitCost: H(e.unitCost, e, i),
          unitPrice: H(e.unitPrice, e, i),
          pricesInEnteredUnit: !0,
          ...('costPrice' === t
            ? { newCost: n, unitCost: n }
            : { newPrice: n, unitPrice: n }),
        };
      }),
      (_e2.spokenPrices = L),
      (_e2.priceChanges = W),
      (_e2.priceSignature = Y),
      (_e2.priceChangeText = X),
      (_e2.priceMissing = Z),
      (_e2.itemPrices = ee),
      (_e2.priceRights = function (e) {
        if (!e || 'owner' === e.role || 'manager' === e.role)
          return { price: !0, costPrice: !0 };
        const t = 'staff' === e.role ? e.access : null;
        return t?.do.catalog
          ? { price: t.see.sellPrice, costPrice: t.see.buyPrice }
          : { price: !1, costPrice: !1 };
      }),
      (_e2.saleAtOwnPrice = function (e, t) {
        if (
          'sold' !== e.kind ||
          e.ledger ||
          e.expense ||
          void 0 === j(e, t)?.price
        )
          return e;
        const {
          unitPrice: n,
          newPrice: i,
          namedPrice: o,
          priceName: c,
          priceChange: a,
          priceChangeFor: u,
          pricesInEnteredUnit: d,
          ...s
        } = e;
        return s;
      }),
      Object.defineProperty(_e2, 'priceVisible', {
        enumerable: !0,
        get: function () {
          return te;
        },
      }),
      (_e2.priceBases = function (t, n) {
        const i = new Map(),
          o = [];
        for (const c of t) {
          if (c.ledger || c.expense) {
            o.push(void 0);
            continue;
          }
          const t = j(c, n),
            a = t ? t.id : 'new:' + (0, e.normalizeName)(c.name),
            u =
              i.get(a) ??
              (t
                ? {
                    id: t.id,
                    unit: t.unit || 'piece',
                    packUnit: t.packUnit,
                    packSize: t.packSize,
                    ...(void 0 !== t.price ? { price: t.price } : {}),
                    ...(void 0 !== t.costPrice
                      ? { costPrice: t.costPrice }
                      : {}),
                  }
                : void 0);
          if ((o.push(u), !c.kind)) continue;
          const d = ee(c, u) || {};
          i.set(a, { ...(u ?? { id: a, unit: c.unit || 'piece' }), ...d });
        }
        return o;
      }),
      Object.defineProperty(_e2, 'renameSnapshot', {
        enumerable: !0,
        get: function () {
          return ne;
        },
      }),
      Object.defineProperty(_e2, 'rowNameFields', {
        enumerable: !0,
        get: function () {
          return oe;
        },
      }),
      (_e2.groupRename = function (t, n) {
        const i = t.find((e) => e.id === n.id);
        if (!i || i.productId || i.ledger || i.expense || n.productId)
          return null;
        const o = (0, l.rowVariant)(n),
          c = (0, l.modelKey)(o.model),
          a = (0, l.rowVariant)({ name: i.name, size: i.size, color: i.color }),
          u = { size: a.size || o.size, color: a.color || o.color },
          d = [u.size, u.color].filter(Boolean).join(' ');
        let s = a.model;
        !a.size &&
          !a.color &&
          d &&
          (0, e.normalizeName)(s).endsWith(' ' + (0, e.normalizeName)(d)) &&
          (s = s.slice(0, s.length - d.length).trim());
        if (
          !c ||
          !s ||
          (0, e.normalizeName)(s) === (0, e.normalizeName)(o.model)
        )
          return null;
        const m = t.filter(
          (e) =>
            e.id !== i.id &&
            !e.productId &&
            !e.ledger &&
            !e.expense &&
            (0, l.modelKey)((0, l.rowVariant)(e).model) === c,
        );
        if (!m.length) return null;
        const f = (e, t) =>
            e || t
              ? {
                  name: (0, p.variantName)(s, e, t),
                  model: s,
                  size: e || void 0,
                  color: t || void 0,
                  keepNew: void 0,
                }
              : {
                  name: s,
                  model: void 0,
                  size: void 0,
                  color: void 0,
                  keepNew: void 0,
                },
          h = [
            { id: i.id, patch: f(u.size, u.color) },
            ...m.map((e) => {
              const t = (0, l.rowVariant)(e);
              return { id: e.id, patch: f(t.size, t.color) };
            }),
          ],
          b = [
            { id: i.id, patch: { ...re(i) } },
            ...m.map((e) => ({ id: e.id, patch: re(e) })),
          ];
        return { count: h.length, patches: h, undo: b };
      }));
    var e = r(_d[0]),
      t = r(_d[1]),
      n = r(_d[2]),
      i = r(_d[3]),
      o = r(_d[4]),
      c = r(_d[5]),
      a = r(_d[6]),
      u = r(_d[7]),
      d = r(_d[8]),
      s = r(_d[9]),
      l = r(_d[10]),
      p = r(_d[11]),
      m = r(_d[12]);
    const f = (0, u.localized)({
        hint: '\u0628\u06af\u0648 \u0686\u0647 \u06a9\u0627\u0644\u0627\u06cc\u06cc \u0631\u0633\u06cc\u062f \u06cc\u0627 \u0641\u0631\u0648\u062e\u062a\u06cc',
        finish: '\u0627\u062a\u0645\u0627\u0645',
        listening:
          '\u062f\u0631 \u062d\u0627\u0644 \u0634\u0646\u06cc\u062f\u0646\u2026',
        savedTitle: '\u062b\u0628\u062a \u0634\u062f ({n})',
        notSavedTitle: '\u062b\u0628\u062a \u0646\u0634\u062f ({n})',
        fixBelow:
          '\u0628\u0631\u0627\u06cc \u062f\u0631\u0633\u062a \u06a9\u0631\u062f\u0646\u060c \u0631\u0648\u06cc \u270e \u0647\u0645\u0627\u0646 \u0631\u062f\u06cc\u0641 \u062f\u0631 \u0641\u0647\u0631\u0633\u062a \u067e\u0627\u06cc\u06cc\u0646 \u0628\u0632\u0646.',
        savingNote:
          '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a \u062f\u0631 \u0627\u0646\u0628\u0627\u0631\u2026',
        orbFinish:
          '\u062a\u0645\u0627\u0645 \u0634\u062f\u061f \u0631\u0648\u06cc \u062f\u0627\u06cc\u0631\u0647 \u0628\u0632\u0646 \xb7 \u0628\u0631\u0627\u06cc \u0644\u063a\u0648 \u0646\u06af\u0647 \u062f\u0627\u0631',
        orbSend:
          '\u0628\u0631\u0627\u06cc \u0641\u0631\u0633\u062a\u0627\u062f\u0646 \u0631\u0648\u06cc \u062f\u0627\u06cc\u0631\u0647 \u0628\u0632\u0646 \xb7 \u0628\u0631\u0627\u06cc \u0644\u063a\u0648 \u0646\u06af\u0647 \u062f\u0627\u0631',
        orbAgain:
          '\u0628\u0631\u0627\u06cc \u0636\u0628\u0637 \u062f\u0648\u0628\u0627\u0631\u0647 \u0631\u0648\u06cc \u062f\u0627\u06cc\u0631\u0647 \u0628\u0632\u0646',
        orbHold:
          '\u0628\u0631\u0627\u06cc \u0644\u063a\u0648\u060c \u0646\u06af\u0647 \u062f\u0627\u0631',
        printReceipt: '\u0686\u0627\u067e \u0631\u0633\u06cc\u062f',
        receiptTitle:
          '\u0631\u0633\u06cc\u062f \u062b\u0628\u062a \u0635\u0648\u062a\u06cc',
        autoSavedSome:
          '{n} \u0631\u062f\u06cc\u0641 \u062e\u0648\u062f\u06a9\u0627\u0631 \u062b\u0628\u062a \u0634\u062f\u061b \u0631\u062f\u06cc\u0641\u200c\u0647\u0627\u06cc \u0642\u0631\u0645\u0632 \u067e\u0627\u06cc\u06cc\u0646 \u0631\u0627 \u062f\u0631\u0633\u062a \u06a9\u0646 \u0648 \xab\u062a\u0627\u06cc\u06cc\u062f \u0648 \u062b\u0628\u062a \u0647\u0645\u0647\xbb \u0631\u0627 \u0628\u0632\u0646.',
        undoAll:
          '\u067e\u0627\u06a9 \u06a9\u0631\u062f\u0646 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062b\u0628\u062a',
        undoAllOk: '\u067e\u0627\u06a9 \u06a9\u0646',
        undoAllAsk:
          '\u0645\u0637\u0645\u0626\u0646\u06cc\u061f \u0647\u0645\u0647\u0654 \u0686\u06cc\u0632\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0635\u062f\u0627 \u062b\u0628\u062a \u0634\u062f \u067e\u0627\u06a9 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0627\u0646\u06af\u0627\u0631 \u06af\u0641\u062a\u0647 \u0646\u0634\u062f\u0647.',
        undoDone:
          '\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u062b\u0628\u062a \u067e\u0627\u06a9 \u0634\u062f.',
        fullEdit:
          '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0627\u0645\u0644',
        undoFailed:
          '\u0628\u062e\u0634\u06cc \u0628\u0631\u0646\u06af\u0634\u062a: {reason}',
        undoKept:
          '\u0627\u06cc\u0646\u200c\u0647\u0627 \u0628\u0631\u0646\u06af\u0634\u062a\u0646\u062f: {items}.',
        undoKeptItems: {
          cheque:
            '{n} \u0686\u06a9 \u06a9\u0647 \u062f\u06cc\u06af\u0631 \u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631 \u0646\u06cc\u0633\u062a (\u0627\u0632 \xab\u0686\u06a9\u200c\u0647\u0627\xbb \u0627\u0635\u0644\u0627\u062d\u0634 \u06a9\u0646)',
          topUp:
            '{n} \u0645\u0648\u062c\u0648\u062f\u06cc\u0650 \u0627\u0636\u0627\u0641\u0647\u200c\u0634\u062f\u0647 \u0628\u0631\u0627\u06cc \u0641\u0631\u0648\u0634\u06cc \u06a9\u0647 \u0628\u0631\u0646\u06af\u0634\u062a',
          topUpMove:
            '{n} \u0645\u0648\u062c\u0648\u062f\u06cc\u0650 \u0627\u0636\u0627\u0641\u0647\u200c\u0634\u062f\u0647\u060c \u0686\u0648\u0646 \u06cc\u06a9 \u0631\u062f\u06cc\u0641 \u0627\u0646\u0628\u0627\u0631\u0650 \u0647\u0645\u06cc\u0646 \u06cc\u0627\u062f\u062f\u0627\u0634\u062a \u0628\u0631\u0646\u06af\u0634\u062a',
          priceTopUp:
            '\u0642\u06cc\u0645\u062a {n} \u06a9\u0627\u0644\u0627 \u06a9\u0647 \u0628\u0627 \u0647\u0645\u0627\u0646 \u0645\u0648\u062c\u0648\u062f\u06cc\u0650 \u0627\u0636\u0627\u0641\u0647\u200c\u0634\u062f\u0647 \u0645\u0627\u0646\u062f',
          price:
            '\u0642\u06cc\u0645\u062a {n} \u06a9\u0627\u0644\u0627 \u06a9\u0647 \u0628\u0639\u062f\u0627\u064b \u062f\u0633\u062a\u06cc \u0639\u0648\u0636 \u0634\u062f\u0647',
          payment:
            '{n} \u067e\u0631\u062f\u0627\u062e\u062a (\u0627\u0632 \xab\u062d\u0633\u0627\u0628\u200c\u0647\u0627\xbb \u0627\u0635\u0644\u0627\u062d\u0634 \u06a9\u0646)',
        },
        rerecord: '\u0636\u0628\u0637 \u0645\u062c\u062f\u062f',
        cancel: '\u0627\u0646\u0635\u0631\u0627\u0641',
        processingAudio:
          '\u062f\u0631 \u062d\u0627\u0644 \u067e\u0631\u062f\u0627\u0632\u0634 \u0635\u062f\u0627\u2026',
        processingItems:
          '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0633\u062a\u062e\u0631\u0627\u062c \u06a9\u0627\u0644\u0627\u0647\u0627\u2026',
        youSaid: '\u0634\u0645\u0627 \u06af\u0641\u062a\u06cc\u062f:',
        confirm: '\u062a\u0627\u06cc\u06cc\u062f',
        edit: '\u0648\u06cc\u0631\u0627\u06cc\u0634',
        editDone:
          '\u0628\u0633\u062a\u0646 \u0648\u06cc\u0631\u0627\u06cc\u0634',
        confirmAll:
          '\u062a\u0627\u06cc\u06cc\u062f \u0648 \u062b\u0628\u062a \u0647\u0645\u0647',
        colItem: '\u06a9\u0627\u0644\u0627',
        colKind: '\u0646\u0648\u0639',
        colAmount: '\u062a\u0639\u062f\u0627\u062f',
        fixRows:
          '{n} \u0631\u062f\u06cc\u0641 \u0646\u06cc\u0627\u0632 \u0628\u0647 \u0627\u0635\u0644\u0627\u062d \u062f\u0627\u0631\u062f\u061b \u0631\u0648\u06cc \u270e \u0622\u0646 \u0631\u062f\u06cc\u0641 \u0628\u0632\u0646.',
        newShort: '\u06a9\u0627\u0644\u0627\u06cc \u062c\u062f\u06cc\u062f',
        editRow:
          '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0631\u062f\u06cc\u0641',
        removeRow:
          '\u062d\u0630\u0641 \u0627\u0632 \u0641\u0647\u0631\u0633\u062a',
        doneEdit: '\u062a\u0645\u0627\u0645',
        due_short: '\u0633\u0631\u0631\u0633\u06cc\u062f {date}',
        remove:
          '\u062d\u0630\u0641 \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627',
        counter: '{n} \u0627\u0632 {total}',
        allDone: '\u0647\u0645\u0647 \u062b\u0628\u062a \u0634\u062f',
        nothingSaved:
          '\u0686\u06cc\u0632\u06cc \u062b\u0628\u062a \u0646\u0634\u062f',
        fixLater:
          '\u0628\u0631\u0627\u06cc \u0627\u0635\u0644\u0627\u062d\u060c \u0627\u0632 \u062a\u0627\u0631\u06cc\u062e\u0686\u0647 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0646',
        newVoice:
          '\u062b\u0628\u062a \u0635\u062f\u0627\u06cc \u062c\u062f\u06cc\u062f',
        close: '\u0628\u0633\u062a\u0646',
        newProduct:
          '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u0646\u06cc\u0633\u062a\u061b \u06a9\u0627\u0644\u0627\u06cc \u062c\u062f\u06cc\u062f \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f',
        didYouMean:
          '\u0642\u0628\u0644\u0627\u064b \xab{name}\xbb \u062b\u0628\u062a \u0634\u062f\u0647\u061b \u0645\u0646\u0638\u0648\u0631\u062a \u0647\u0645\u06cc\u0646\u0647\u061f',
        swap: '\u0647\u0645\u06cc\u0646 \u0627\u0633\u062a',
        closeAsk:
          '\u0642\u0628\u0644\u0627\u064b \xab{name}\xbb \u062f\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0647\u0633\u062a. \u0645\u0646\u0638\u0648\u0631\u062a\u0627\u0646 \u0647\u0645\u06cc\u0646 \u0627\u0633\u062a\u061f',
        keepNew:
          '\u0646\u0647\u060c \u06a9\u0627\u0644\u0627\u06cc \u062c\u062f\u06cc\u062f',
        keptNew:
          '\u06a9\u0627\u0644\u0627\u06cc \u062c\u062f\u06cc\u062f \xab{name}\xbb \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f',
        closeRows:
          '{n} \u0631\u062f\u06cc\u0641 \u0633\u0624\u0627\u0644 \u06a9\u0627\u0644\u0627 \u062f\u0627\u0631\u062f\u061b \xab\u0647\u0645\u06cc\u0646 \u0627\u0633\u062a\xbb \u06cc\u0627 \xab\u0646\u0647\u060c \u06a9\u0627\u0644\u0627\u06cc \u062c\u062f\u06cc\u062f\xbb \u0631\u0627 \u0628\u0632\u0646.',
        insufficient:
          '\u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0627\u0641\u06cc \u0646\u06cc\u0633\u062a. \u0627\u0648\u0644 \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627 \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646.',
        priceNotSaved:
          '\u0642\u06cc\u0645\u062a \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f:',
        noPrice:
          '\u0642\u06cc\u0645\u062a \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u062b\u0628\u062a \u0646\u0634\u062f\u0647\u061b \u0633\u0648\u062f\u0634 \u062f\u0631 \u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627 \u0645\u0639\u0644\u0648\u0645 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
        buyPrice: '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
        sellPrice: '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
        unusual:
          '\u0627\u06cc\u0646 \u0645\u0642\u062f\u0627\u0631 \u062e\u06cc\u0644\u06cc \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0645\u0639\u0645\u0648\u0644 \xab{name}\xbb \u0627\u0633\u062a (\u0645\u06cc\u0627\u0646\u06af\u06cc\u0646 {avg} {unit})\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0646\u06af\u0627\u0647 \u06a9\u0646',
        pickBrand:
          '\u0627\u0648\u0644 \u0628\u0631\u0646\u062f \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
        pickKind:
          '\u0646\u0648\u0639 \u062a\u063a\u06cc\u06cc\u0631 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
        badQuantity:
          '\u062a\u0639\u062f\u0627\u062f \u0631\u0627 \u062f\u0631\u0633\u062a \u0648\u0627\u0631\u062f \u06a9\u0646',
        unitMismatch:
          '\xab{name}\xbb \u062f\u0631 \u0627\u0646\u0628\u0627\u0631 \u0628\u0627 \xab{base}\xbb \u0634\u0645\u0631\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u0646\u0647 \xab{unit}\xbb. \u0648\u0627\u062d\u062f \u0627\u06cc\u0646 \u0631\u062f\u06cc\u0641 \u0631\u0627 \xab{base}\xbb \u06a9\u0646 \u06cc\u0627 \u06a9\u0627\u0644\u0627\u06cc \u062f\u06cc\u06af\u0631\u06cc \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
        unitSwitchAsk:
          '\xab{name}\xbb \u062a\u0627 \u062d\u0627\u0644\u0627 \xab\u0639\u062f\u062f\xbb \u0634\u0645\u0631\u062f\u0647 \u0645\u06cc\u200c\u0634\u062f\u060c \u0648\u0644\u06cc \u06af\u0641\u062a\u06cc \xab{unit}\xbb. \u06a9\u062f\u0627\u0645 \u062f\u0631\u0633\u062a \u0627\u0633\u062a\u061f',
        unitSwitchYes:
          '\u0648\u0627\u062d\u062f \xab{name}\xbb \u0631\u0627 {unit} \u06a9\u0646',
        unitSwitchNo:
          '\u0647\u0645\u06cc\u0646 {qty} \u0639\u062f\u062f \u062d\u0633\u0627\u0628 \u0634\u0648\u062f',
        unitSwitchNote:
          '\u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \xab{name}\xbb \u0628\u0627 {unit} \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f\u061b {stock} \u0639\u062f\u062f \u0645\u0648\u062c\u0648\u062f\u06cc\u060c {stock} {unit} \u0645\u06cc\u200c\u0634\u0648\u062f.',
        unitSwitchHistory:
          ' \u0631\u062f\u06cc\u0641\u200c\u0647\u0627\u06cc \u0642\u0628\u0644\u06cc \u0647\u0645 \u0628\u0627 {unit} \u062e\u0648\u0627\u0646\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
        unitSwitchInRecipe:
          '\xab{name}\xbb \u062f\u0631 \xab\u062f\u0633\u062a\u0648\u0631 \u0633\u0627\u062e\u062a\xbb \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0634\u062f\u0647\u061b \u0648\u0627\u062d\u062f\u0634 \u0627\u0632 \u0635\u0641\u062d\u0647\u0654 \u0647\u0645\u0627\u0646 \u06a9\u0627\u0644\u0627 \u0639\u0648\u0636 \u0645\u06cc\u200c\u0634\u0648\u062f.',
        packQuestion:
          '\u0647\u0631 {unit} \xab{name}\xbb \u0686\u0646\u062f {base} \u0627\u0633\u062a\u061f',
        permissionGo:
          '\u0627\u062c\u0627\u0632\u0647 \u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0648 \u0634\u0631\u0648\u0639',
        micDenied:
          '\u0627\u062c\u0627\u0632\u0647 \u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u062f\u0627\u062f\u0647 \u0646\u0634\u062f\u0647. \u0627\u0632 \u062a\u0646\u0638\u06cc\u0645\u0627\u062a \u06af\u0648\u0634\u06cc \u0631\u0648\u0634\u0646\u0634 \u06a9\u0646.',
        micFailed:
          '\u0645\u06cc\u06a9\u0631\u0648\u0641\u0648\u0646 \u0631\u0648\u0634\u0646 \u0646\u0634\u062f. \u062f\u0648\u0628\u0627\u0631\u0647 \u062a\u0644\u0627\u0634 \u06a9\u0646.',
        price: '\u0642\u06cc\u0645\u062a',
        toman: '\u062a\u0648\u0645\u0627\u0646',
        newPerson:
          '\u0634\u062e\u0635 \u062c\u062f\u06cc\u062f \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f',
        pickPerson:
          '\u0686\u0646\u062f \u0634\u062e\u0635 \u0628\u0627 \u0627\u06cc\u0646 \u0646\u0627\u0645 \u0647\u0633\u062a\u061b \u06cc\u06a9\u06cc \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
        pickOrNew:
          '\u0627\u06cc\u0646 \u0646\u0627\u0645 \u062f\u0642\u06cc\u0642\u0627\u064b \u062f\u0631 \u0627\u0634\u062e\u0627\u0635 \u0646\u06cc\u0633\u062a\u061b \u0627\u06af\u0631 \u0647\u0645\u06cc\u0646 \u0634\u062e\u0635 \u0627\u0633\u062a \u0627\u0646\u062a\u062e\u0627\u0628\u0634 \u06a9\u0646\u060c \u0648\u06af\u0631\u0646\u0647 \xab\u0634\u062e\u0635 \u062c\u062f\u06cc\u062f\xbb \u0631\u0627 \u0628\u0632\u0646',
        makeNew: '\u0634\u062e\u0635 \u062c\u062f\u06cc\u062f',
        needDue:
          '\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646',
        needAmount:
          '\u0645\u0628\u0644\u063a \u0631\u0627 \u0648\u0627\u0631\u062f \u06a9\u0646',
        ledgerOff:
          '\u062f\u0641\u062a\u0631 \u062d\u0633\u0627\u0628 \u062f\u0631 \u0637\u0631\u062d \u0634\u0645\u0627 \u0641\u0639\u0627\u0644 \u0646\u06cc\u0633\u062a',
        ledgerLoading:
          '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u0627\u0634\u062e\u0627\u0635\u2026',
        ledgerKinds: {
          cheque_in: '\u0686\u06a9 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc',
          cheque_out: '\u0686\u06a9 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc',
          payment_in: '\u062f\u0631\u06cc\u0627\u0641\u062a \u067e\u0648\u0644',
          payment_out:
            '\u067e\u0631\u062f\u0627\u062e\u062a \u067e\u0648\u0644',
          debt_in: '\u0637\u0644\u0628',
          debt_out: '\u0628\u062f\u0647\u06cc',
        },
        person: '\u0637\u0631\u0641 \u062d\u0633\u0627\u0628',
        amount: '\u0645\u0628\u0644\u063a (\u062a\u0648\u0645\u0627\u0646)',
        due: '\u0633\u0631\u0631\u0633\u06cc\u062f',
        chequeNumber: '\u0634\u0645\u0627\u0631\u0647 \u0686\u06a9',
        bank: '\u0628\u0627\u0646\u06a9',
        priceChangeOne:
          '{field} \xab{name}\xbb {from} \u062b\u0628\u062a \u0634\u062f\u0647\u061b \u0627\u06cc\u0646 \u0628\u0627\u0631 {to} \u06af\u0641\u062a\u06cc. \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f {to} \u0628\u0634\u0647\u061f',
        priceChangeBoth:
          '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627\u06cc \xab{name}\xbb \u0641\u0631\u0642 \u062f\u0627\u0631\u062f: \u062e\u0631\u06cc\u062f {costFrom} \u2190 {costTo}\u060c \u0641\u0631\u0648\u0634 {from} \u2190 {to}. \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0642\u06cc\u0645\u062a\u200c\u0647\u0627\u06cc \u062c\u062f\u06cc\u062f \u0628\u0634\u0647\u061f',
        priceChangeYes:
          '\u0622\u0631\u0647\u060c \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f',
        priceChangeNo:
          '\u0646\u0647\u060c \u0641\u0642\u0637 \u0647\u0645\u06cc\u0646 \u0628\u0627\u0631',
        priceChangeSaved:
          '\u0642\u06cc\u0645\u062a \u062c\u062f\u06cc\u062f \u0631\u0648\u06cc \u06a9\u0627\u0644\u0627 \u0630\u062e\u06cc\u0631\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f',
        priceChangeKept:
          '\u0642\u06cc\u0645\u062a \u06a9\u0627\u0644\u0627 \u0639\u0648\u0636 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0641\u0642\u0637 \u0647\u0645\u06cc\u0646 \u0628\u0627\u0631',
        answerRows:
          '{n} \u0631\u062f\u06cc\u0641 \u0633\u0624\u0627\u0644 \u0642\u06cc\u0645\u062a \u062f\u0627\u0631\u062f\u061b \xab\u0622\u0631\u0647\xbb \u06cc\u0627 \xab\u0646\u0647\xbb \u0631\u0627 \u0628\u0632\u0646.',
        groupRenamed:
          '\u0646\u0627\u0645 {n} \u06a9\u0627\u0644\u0627 \u0639\u0648\u0636 \u0634\u062f',
        undo: '\u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0646',
        nearHint:
          '\u0645\u0646\u0638\u0648\u0631\u062a \xab{name}\xbb \u0627\u0633\u062a\u061f',
        nearUse: '\u0647\u0645\u06cc\u0646 \u0631\u0627 \u0628\u0632\u0646',
        nearUsed:
          '\u0631\u0648\u06cc \xab{name}\xbb \u06af\u0630\u0627\u0634\u062a\u0647 \u0634\u062f',
        editTranscript:
          '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0645\u062a\u0646',
        reread:
          '\u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u062e\u0648\u0627\u0646',
        rereading:
          '\u062f\u0631 \u062d\u0627\u0644 \u062e\u0648\u0627\u0646\u062f\u0646 \u062f\u0648\u0628\u0627\u0631\u0647\u2026',
        rereadHint:
          '\u0641\u0647\u0631\u0633\u062a \u0627\u0632 \u0631\u0648\u06cc \u0647\u0645\u06cc\u0646 \u0645\u062a\u0646 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
        rereadHandEdits:
          '\u062a\u063a\u06cc\u06cc\u0631\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0633\u062a\u06cc \u0631\u0648\u06cc \u0631\u062f\u06cc\u0641\u200c\u0647\u0627 \u062f\u0627\u062f\u0647\u200c\u0627\u06cc\u062f \u0628\u0627 \u062e\u0648\u0627\u0646\u062f\u0646 \u062f\u0648\u0628\u0627\u0631\u0647 \u06a9\u0646\u0627\u0631 \u06af\u0630\u0627\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
        rereadEmpty:
          '\u0645\u062a\u0646 \u062e\u0627\u0644\u06cc \u0627\u0633\u062a\u061b \u0686\u06cc\u0632\u06cc \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f.',
        rereadSaved:
          '\u0628\u062e\u0634\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u06cc\u0627\u062f\u062f\u0627\u0634\u062a \u062b\u0628\u062a \u0634\u062f\u0647\u061b \u0628\u0631\u0627\u06cc \u062e\u0648\u0627\u0646\u062f\u0646 \u062f\u0648\u0628\u0627\u0631\u0647 \u06cc\u06a9 \u06cc\u0627\u062f\u062f\u0627\u0634\u062a \u062a\u0627\u0632\u0647 \u0636\u0628\u0637 \u06a9\u0646\u06cc\u062f.',
        retryText:
          '\u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646',
        retryAsk:
          '\u0647\u0631\u0686\u0647 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0635\u062f\u0627 \u062b\u0628\u062a \u0634\u062f\u0647 \u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f \u0648 \u0641\u0647\u0631\u0633\u062a \u0627\u0632 \u0631\u0648\u06cc \u0645\u062a\u0646 \u062a\u0627\u0632\u0647 \u062f\u0648\u0628\u0627\u0631\u0647 \u0633\u0627\u062e\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
        retryDraft:
          '\u0641\u0647\u0631\u0633\u062a \u062a\u0627\u0632\u0647 \u0647\u0646\u0648\u0632 \u062b\u0628\u062a \u0646\u0634\u062f\u0647\u061b \u0628\u0631\u0631\u0633\u06cc \u06a9\u0646 \u0648 \xab\u062a\u0627\u06cc\u06cc\u062f \u0648 \u062b\u0628\u062a \u0647\u0645\u0647\xbb \u0631\u0627 \u0628\u0632\u0646.',
        noteLabel: '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a',
        notePlaceholder:
          '\u0645\u062b\u0644\u0627\u064b \u0627\u0632 \u06a9\u0627\u0631\u062a \u0631\u0641\u0627\u0647\u060c \u067e\u0648\u0644 \u0648\u0627\u0645 \u0628\u0648\u062f',
      }),
      h = (0, u.localized)({
        received: '\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
        sold: '\u0641\u0631\u0648\u0634',
        used: '\u0645\u0635\u0631\u0641',
        waste: '\u062f\u0648\u0631\u0631\u06cc\u0632',
        count: '\u0634\u0645\u0627\u0631\u0634',
      });
    const b = {
      items: [],
      done: [],
      removed: 0,
      total: 0,
      leaving: null,
      entering: null,
    };
    const v = (e) => e.total > 0 && 0 === e.items.length;
    function k(e) {
      return {
        position: Math.min(e.total, e.total - e.items.length + 1),
        total: e.total,
      };
    }
    const y = (e) =>
      e.toLocaleString((0, u.numberLocale)(), { maximumFractionDigits: 3 });
    function P(e) {
      const t = w(e);
      return {
        type: e.type,
        contactName: e.contactName,
        amount: t ?? null,
        direction: e.direction,
        ...(e.dueDate ? { dueDate: e.dueDate } : {}),
        ...(e.chequeNumber ? { chequeNumber: e.chequeNumber } : {}),
        ...(e.bank ? { bank: e.bank } : {}),
        ...(e.note?.trim() ? { note: e.note.trim() } : {}),
        ...(e.contactPhone ? { contactPhone: e.contactPhone } : {}),
        ...(e.contactId ? { contactId: e.contactId } : {}),
      };
    }
    function w(e) {
      const t = e.amount
          .replace(/[\u06f0-\u06f9]/g, (e) =>
            String(
              '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                e,
              ),
            ),
          )
          .replace(/[\u0660-\u0669]/g, (e) =>
            String(
              '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
                e,
              ),
            ),
          )
          .replace(/[^0-9]/g, ''),
        n = t ? Number(t) : NaN;
      return Number.isSafeInteger(n) && n > 0 ? n : void 0;
    }
    const N = (e) => w({ amount: e.amount });
    const x = (e) =>
      'cheque' === e.type
        ? f.ledgerKinds['in' === e.direction ? 'cheque_in' : 'cheque_out']
        : 'debt' === e.type
          ? f.ledgerKinds['in' === e.direction ? 'debt_in' : 'debt_out']
          : f.ledgerKinds[e.type];
    function C(e, t) {
      if (e.contactId !== c.NEW_CONTACT)
        return e.contactId
          ? t.find((t) => t.id === e.contactId) || {
              id: e.contactId,
              name: e.contactName,
            }
          : (0, c.sureContact)(I(e.contactName, e.contactPhone), t);
    }
    const I = (e, t) => (t ? e + ' ' + t : e);
    function z(e, t, n) {
      const i = (0, c.contactsByPhone)(I(e, t), n);
      return i.length ? i : (0, c.matchContacts)(e, n);
    }
    function S(e, t, n) {
      const i = (0, m.phoneRule)(e, t, n, void 0, !0);
      if (!i.ok)
        return {
          text: (0, m.phoneRuleText)(i.code, i),
          others: n.filter((e) => i.others.some((t) => t.id === e.id)),
        };
    }
    function O(e, t) {
      if (!e || !t.trim()) return '';
      const n = t.trim().split(/\s+/),
        i = n[n.length - 1],
        o = e.lastIndexOf(i);
      if (o < 0) return '';
      const c = e
          .slice(o + i.length, o + i.length + 28)
          .replace(/[\u06f0-\u06f9]/g, (e) =>
            String(
              '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                e,
              ),
            ),
          )
          .replace(/[\u0660-\u0669]/g, (e) =>
            String(
              '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
                e,
              ),
            ),
          ),
        a =
          /^[\s,\u060c:]*(?:\u0628\u0627\s+)?(\u0634\u0645\u0627\u0631\u0647\s*(?:\u06cc|\u200c\u06cc)?\s*)?((?:\d[\s-]?){4,11})(?!\d)/.exec(
            c,
          );
      if (!a) return '';
      const u = a[2].replace(/[^0-9]/g, '');
      return /^0?9\d{9}$/.test(u) || (a[1] && u.length >= 4) ? u : '';
    }
    function q(e, t) {
      const n = e.ledger,
        i = [];
      (null === t
        ? i.push({ type: 'ledger', text: f.ledgerOff, blocking: !0 })
        : void 0 === t &&
          i.push({ type: 'ledger', text: f.ledgerLoading, blocking: !0 }),
        w(n) || i.push({ type: 'amount', text: f.needAmount, blocking: !0 }),
        'cheque' !== n.type ||
          n.dueDate ||
          i.push({ type: 'due', text: f.needDue, blocking: !0 }));
      const o = () => {
        const e = S(n.contactName, n.contactPhone, t);
        i.push(
          e
            ? { type: 'phone', text: e.text, blocking: !0, contacts: e.others }
            : { type: 'person', text: f.newPerson, blocking: !1 },
        );
      };
      if (t && n.contactId === c.NEW_CONTACT) o();
      else if (t && !n.contactId && !C(n, t)) {
        const e = z(n.contactName, n.contactPhone, t);
        e.length
          ? (0, c.sureContact)(n.contactName, t) ||
            i.push({
              type: 'person',
              text: e.length > 1 ? f.pickPerson : f.pickOrNew,
              blocking: !0,
              contacts: e,
            })
          : o();
      }
      return i;
    }
    const A = (e) => ({
      id: e.id,
      name: e.name,
      stock: e.stock,
      ...(e.brand ? { brand: e.brand } : {}),
      ...(e.size ? { size: e.size } : {}),
      ...(e.unit ? { unit: e.unit } : {}),
    });
    function F(e, n) {
      const i = e.familyName || (e.productId || e.brand ? '' : e.name);
      let o = [];
      if (i)
        if (e.candidates?.length) {
          const t = new Map(n.map((e) => [e.id, e])),
            i = e.candidates
              .filter((e) => t.has(e.id))
              .map((e) => A(t.get(e.id)));
          o = i.length ? i : e.candidates.map(A);
        } else {
          const c = (0, t.productFamily)(n, i);
          o =
            !c.exact && c.candidates.length > 1
              ? (0, t.preferUnit)(c.candidates, e.unit)
                  .slice(0, 8)
                  .map(t.toProductChoice)
                  .map(A)
              : [];
        }
      return {
        family: i,
        options: o,
        pending: o.length > 0 && !e.productId && !e.brand,
      };
    }
    function j(t, n) {
      if (t.productId) return n.find((e) => e.id === t.productId);
      const i = n.filter(
        (n) =>
          !n.archivedAt &&
          (0, e.normalizeName)(n.name) === (0, e.normalizeName)(t.name),
      );
      return 1 === i.length ? i[0] : void 0;
    }
    const D = (t) =>
      (0, e.normalizeName)(t)
        .split(' ')
        .filter((e) => e.length >= 2);
    const T = (e) => e.some((e) => e.blocking),
      E = (t) => !!t.keepNew && t.keepNew === (0, e.normalizeName)(t.name),
      M = (t) => ({ keepNew: (0, e.normalizeName)(t.name) });
    function U(e, t) {
      const n = (e) => a.notebookFa.units[e || 'piece'] || '';
      return f.packQuestion
        .replace('{unit}', n(e.unit))
        .replace('{name}', t.name)
        .replace('{base}', n(t.unit));
    }
    const R = ['pack', 'box', 'carton', 'bag', 'sack', 'bottle', 'can', 'roll'];
    function _(e, t) {
      if (
        !(
          t &&
          e.unitSwitch &&
          e.unit &&
          e.unit !== (t.unit || 'piece') &&
          (0, n.unitSwitchable)(t, e.unit)
        )
      )
        return t;
      const { contentSize: i, contentUnit: o, ...c } = t;
      return { ...c, unit: e.unit };
    }
    function K(e, t) {
      return (
        !!e &&
        R.includes(e) &&
        e !== (t.unit || 'piece') &&
        void 0 === t.packSize &&
        'made' !== t.kind &&
        !(0, n.fixedFactor)(e, t.unit || 'piece')
      );
    }
    const B = (e, t) => e.id + '|' + (t || '');
    function Q(e, t) {
      return t &&
        e.packSize &&
        e.packSize > 0 &&
        e.packFor === B(t, e.unit) &&
        K(e.unit, t)
        ? { ...t, packUnit: e.unit, packSize: e.packSize }
        : t;
    }
    function V(e, t, o) {
      const c = o.unit || 'piece';
      try {
        if (!t || t === c) return e;
        if (o.packUnit === t && void 0 !== o.packSize)
          return (0, i.convertPack)(e, o.packSize);
        if ((0, n.fixedFactor)(t, c)) return (0, n.convertFixed)(e, t, c);
      } catch {}
    }
    const H = (e, t, n) =>
      void 0 === e
        ? void 0
        : t.pricesInEnteredUnit || !n
          ? e
          : e * (V(1, t.unit, n) ?? 1);
    function L(e, t) {
      if (e.ledger || ('received' !== e.kind && 'sold' !== e.kind)) return {};
      if (
        e.unit &&
        t &&
        e.unit !== (t.unit || 'piece') &&
        (!e.pricesInEnteredUnit || !(0, n.unitCompatible)(e.unit, t))
      )
        return {};
      const i = (0, o.voicePricesForProduct)(e, t);
      return {
        ...('received' === e.kind && void 0 !== i.unitCost
          ? { costPrice: i.unitCost }
          : {}),
        ...(void 0 !== i.unitPrice ? { price: i.unitPrice } : {}),
      };
    }
    function W(e, t) {
      if (!t) return [];
      const n = L(e, t);
      return ['costPrice', 'price'].flatMap((i) => {
        const o = t[i],
          c = n[i];
        return void 0 === o ||
          void 0 === c ||
          o === c ||
          ('price' === i && void 0 !== e.fromMoney)
          ? []
          : [{ field: i, from: o, to: c }];
      });
    }
    function Y(e, t) {
      const n = W(e, t);
      return n.length
        ? (t?.id || '') +
            '|' +
            n.map((e) => e.field + ':' + e.from + '>' + e.to).join(',')
        : '';
    }
    const G = (e, t) => {
      const n = Y(e, t);
      return !!n && !!e.priceChange && e.priceChangeFor === n;
    };
    function $(e, t, n) {
      const i = W(e, t);
      if (i.length)
        return {
          type: 'priceChange',
          text: X(n, i),
          blocking: !G(e, t),
          signature: Y(e, t),
        };
    }
    const J = (e) => (0, d.money)(e, { full: !0, hint: !1 });
    function X(e, t) {
      const n = t.find((e) => 'costPrice' === e.field),
        i = t.find((e) => 'price' === e.field);
      if (n && i)
        return f.priceChangeBoth
          .replace('{name}', e)
          .replace('{costFrom}', J(n.from))
          .replace('{costTo}', J(n.to))
          .replace('{from}', J(i.from))
          .replace('{to}', J(i.to));
      const o = n || i;
      return f.priceChangeOne
        .replace('{field}', 'costPrice' === o.field ? f.buyPrice : f.sellPrice)
        .replace('{name}', e)
        .replace('{from}', J(o.from))
        .split('{to}')
        .join(J(o.to));
    }
    function Z(e, t) {
      const n = L(e, t);
      return (
        void 0 === (t?.price ?? e.newPrice ?? n.price) ||
        void 0 === (t?.costPrice ?? e.newCost ?? n.costPrice)
      );
    }
    function ee(e, t) {
      if (e.pricesInEnteredUnit && t && !(0, n.unitCompatible)(e.unit, t))
        return;
      const i = L(e, t),
        c = 'yes' === e.priceChange && G(e, t),
        a = (e, n) => {
          const o = t?.[e],
            a = i[e];
          return void 0 === o
            ? (n ?? a)
            : c && void 0 !== a && a !== o
              ? a
              : void 0;
        },
        u = (0, o.voicePricesForProduct)(
          { ...e, unitCost: e.newCost, unitPrice: e.newPrice },
          t,
        ),
        d = e.namedPrice ? void 0 : a('price', u.unitPrice),
        s = a('costPrice', u.unitCost),
        l = {
          ...(void 0 !== d ? { price: d } : {}),
          ...(void 0 !== s ? { costPrice: s } : {}),
        };
      return Object.keys(l).length ? l : void 0;
    }
    const te = (e, t) =>
      t.price && t.costPrice
        ? e
        : {
            ...e,
            unitPrice: t.price ? e.unitPrice : void 0,
            unitCost: t.costPrice ? e.unitCost : void 0,
            ...(t.price ? {} : { newPrice: void 0 }),
            ...(t.costPrice ? {} : { newCost: void 0 }),
          };
    const ne = (e) => ({
        id: e.id,
        name: e.name,
        ...(e.model ? { model: e.model } : {}),
        ...(e.size ? { size: e.size } : {}),
        ...(e.color ? { color: e.color } : {}),
        ...(e.productId ? { productId: e.productId } : {}),
      }),
      ie = [
        'name',
        'model',
        'size',
        'color',
        'keepNew',
        'productId',
        'familyName',
        'brand',
        'needsChoice',
        'candidates',
        'matchedFrom',
      ],
      oe = (e) => re(e),
      re = (e) => Object.fromEntries(ie.map((t) => [t, e[t]]));
  },
  692,
  [439, 452, 432, 431, 465, 529, 580, 311, 435, 443, 693, 453, 438],
);
