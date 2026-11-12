// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 797; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'GONE_CODES', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (_e.rowKey = function (e, t, n, s) {
        const i = e.get(t),
          o = i && i.body === n ? i.key : s();
        return (e.set(t, { body: n, key: o }), o);
      }),
      (_e.runUndoAll = async function (e, t) {
        const n = [],
          s = [],
          i = async (e, s, i, o) => {
            for (const c of e) {
              try {
                await s(c);
              } catch (e) {
                if (o?.(t.code(e), c)) {
                  i(c);
                  continue;
                }
                if (!t.gone(e)) {
                  n.push(t.reason(e));
                  continue;
                }
              }
              i(c);
            }
          };
        if (
          (await i([...e.sales].reverse(), t.cancelSale, (t) => {
            e.sales = e.sales.filter((e) => e !== t);
          }),
          await i([...e.moves].reverse(), t.undoMove, (t) => {
            e.moves = e.moves.filter((e) => e !== t);
          }),
          e.sales.length || e.moves.length)
        ) {
          const t = e.sales.length ? 'topUp' : 'topUpMove';
          s.push(
            ...e.topUps.map((e) => ({ kind: t, id: e })),
            ...e.prices.map((e) => ({ kind: 'priceTopUp', id: e.productId })),
          );
        } else
          (await i([...e.topUps].reverse(), t.undoMove, (t) => {
            e.topUps = e.topUps.filter((e) => e !== t);
          }),
            e.topUps.length
              ? s.push(
                  ...e.prices.map((e) => ({
                    kind: 'priceTopUp',
                    id: e.productId,
                  })),
                )
              : await i(
                  [...e.prices].reverse(),
                  async (e) => {
                    const n = t.currentPrices(e.productId),
                      s = {};
                    for (const t of ['price', 'costPrice'])
                      if (void 0 !== e.set[t]) {
                        if (n && n[t] !== e.set[t])
                          throw Error('price_changed_since');
                        s[t] = e.previous[t];
                      }
                    Object.keys(s).length && (await t.restorePrices(e, s));
                  },
                  (t) => {
                    e.prices = e.prices.filter((e) => e !== t);
                  },
                  (e, t) =>
                    'price_changed_since' === e &&
                    (s.push({ kind: 'price', id: t.productId }), !0),
                ));
        (await i([...e.expenses], t.deleteExpense, (t) => {
          e.expenses = e.expenses.filter((e) => e !== t);
        }),
          await i(
            [...e.cheques],
            t.cancelCheque,
            (t) => {
              e.cheques = e.cheques.filter((e) => e !== t);
            },
            (e, t) =>
              'cheque_final' === e && (s.push({ kind: 'cheque', id: t }), !0),
          ),
          await i([...e.debts].reverse(), t.reverseDebt, (t) => {
            e.debts = e.debts.filter((e) => e !== t);
          }),
          await i(
            [...e.payments].reverse(),
            t.reversePayment,
            (t) => {
              e.payments = e.payments.filter((e) => e !== t);
            },
            (e, t) =>
              ('payment_not_reversible' === e || 'payment_of_document' === e) &&
              (s.push({ kind: 'payment', id: t.id }), !0),
          ),
          await i([...e.toBuy], t.cancelToBuy, (t) => {
            e.toBuy = e.toBuy.filter((e) => e !== t);
          }),
          await i([...e.expenseReminders], t.deleteExpenseReminder, (t) => {
            e.expenseReminders = e.expenseReminders.filter((e) => e !== t);
          }));
        const o = new Set(
          [
            ...e.sales.map((e) => e.contactId),
            ...e.debts.map((e) => e.contactId),
            ...e.payments.map((e) => e.contactId),
          ].filter(Boolean),
        );
        e.cheques.length ||
          (await i(
            [...e.contacts].filter((e) => !o.has(e.id)),
            t.archiveContact,
            (t) => {
              e.contacts = e.contacts.filter((e) => e !== t);
            },
          ));
        for (let t = 0; t < e.ledger; t++)
          s.push({ kind: 'payment', id: 'ledger-' + t });
        return { failed: n, kept: s };
      }),
      (_e.retryStep = function (t, n) {
        return n || t.ledger > 0
          ? 'refuse'
          : (0, e.undoScope)(t).undo > 0
            ? 'takeBack'
            : 'read';
      }),
      (_e.takeBackRow = async function (e, t, n, s, i) {
        const o = async (e) => {
          try {
            await e();
          } catch (e) {
            if (!i.gone(e)) throw e;
          }
        };
        for (const e of t.moves || [])
          (await o(() => i.undoMove(e)),
            (n.moves = n.moves.filter((t) => t !== e)));
        if (t.expense) {
          const e = t.expense;
          (await o(() => i.deleteExpense(e)),
            (n.expenses = n.expenses.filter((t) => t.id !== e.id)));
        }
        if (t.debt) {
          const e = t.debt;
          (await o(() => i.reverseDebt(e)),
            (n.debts = n.debts.filter((t) => t.id !== e.id)));
        }
        if (t.payment) {
          const e = t.payment;
          (await o(() => i.reversePayment(e)),
            (n.payments = n.payments.filter((t) => t.id !== e.id)));
        }
        if (t.cheque) {
          const e = t.cheque;
          (await o(() => i.cancelCheque(e)),
            (n.cheques = n.cheques.filter((t) => t !== e)));
        }
        s.delete(e);
      }),
      (_e.keptText = function (e) {
        const s = new Map();
        for (const t of e) s.set(t.kind, (s.get(t.kind) || 0) + 1);
        const i = [
          'payment',
          'cheque',
          'topUp',
          'topUpMove',
          'priceTopUp',
          'price',
        ]
          .filter((e) => s.get(e))
          .map((e) =>
            t.voiceFa.undoKeptItems[e].replace(
              '{n}',
              (0, n.localDigits)(s.get(e)),
            ),
          );
        return i.length
          ? t.voiceFa.undoKept.replace('{items}', i.join('\u060c '))
          : '';
      }));
    var e = r(_d[0]),
      t = r(_d[1]),
      n = r(_d[2]);
    const s = [
      'movement_already_corrected',
      'not_found',
      'cheque_final',
      'debt_already_reversed',
      'payment_already_reversed',
    ];
  },
  797,
  [787, 692, 311],
);
