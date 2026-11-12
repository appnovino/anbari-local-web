// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 787; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.itemEntry = function (e, n, o) {
        const i = e.id.split('-')[0];
        if ('debt' === e.ledger?.type)
          return {
            id: e.id,
            list: i,
            kind: 'debt',
            group: 'debt-' + e.id,
            words: e.ledger.contactName,
            done: o,
          };
        if (e.ledger) {
          const t =
            'cheque' === e.ledger.type
              ? 'in' === e.ledger.direction
                ? 'chequeIn'
                : 'chequeOut'
              : 'money';
          return {
            id: e.id,
            list: i,
            kind: t,
            group: t,
            words: e.ledger.contactName,
            done: o,
          };
        }
        if (e.expense)
          return {
            id: e.id,
            list: i,
            kind: 'expense',
            group: 'expense',
            words: e.expense.label,
            done: o,
          };
        if ('sold' === e.kind) {
          const s = (0, t.rowSale)(e, n);
          return {
            id: e.id,
            list: i,
            kind: 'sale',
            group: null === s ? 'walk-in' : 'sale-' + s,
            saleIndex: s,
            words: e.matchedFrom || e.name,
            done: o,
          };
        }
        const s =
          'received' === e.kind
            ? 'received'
            : 'used' === e.kind || 'waste' === e.kind
              ? 'used'
              : 'unknown';
        return {
          id: e.id,
          list: i,
          kind: s,
          group: s,
          words: e.matchedFrom || e.name,
          done: o,
        };
      }),
      Object.defineProperty(_e, 'reminderEntries', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      Object.defineProperty(_e, 'contactEntries', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (_e.spokenPositions = p),
      (_e.voiceCards = function (e, t) {
        const n = p(e, t),
          o = new Map(t.map((e, t) => [e.id, t])),
          i = [...t].sort(
            (e, t) => n.get(e.id) - n.get(t.id) || o.get(e.id) - o.get(t.id),
          ),
          s = [];
        for (const e of i) {
          if (!e.done) continue;
          const t = s[s.length - 1];
          t && t.group === e.group
            ? t.ids.push(e.id)
            : s.push({
                key: e.group + '@' + s.length,
                kind: e.kind,
                group: e.group,
                ...('sale' === e.kind
                  ? { saleIndex: e.saleIndex ?? null }
                  : {}),
                ids: [e.id],
              });
        }
        return {
          incomplete: i.filter((e) => !e.done).map((e) => e.id),
          cards: s,
        };
      }),
      (_e.cardCounts = function (e) {
        const t = e.filter((e) => e.done).length;
        return { total: e.length, done: t, missing: e.length - t };
      }),
      (_e.reminderTime = function (e, t = new Date()) {
        if (!e) return '';
        const i = new Date(e);
        if (!Number.isFinite(i.getTime())) return '';
        const s = (0, o.dayOffset)(i, t),
          l = (0, o.clockText)({ hour: i.getHours(), minute: i.getMinutes() });
        return 0 === s
          ? (i.getHours() >= 18
              ? (0, n.L)('\u0627\u0645\u0634\u0628')
              : (0, n.L)('\u0627\u0645\u0631\u0648\u0632')) +
              ' ' +
              l
          : 1 === s
            ? (0, n.L)('\u0641\u0631\u062f\u0627') + ' ' + l
            : 2 === s
              ? (0, n.L)('\u067e\u0633\u200c\u0641\u0631\u062f\u0627') + ' ' + l
              : (0, o.whenText)(i, t);
      }),
      Object.defineProperty(_e, 'paymentReminder', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(_e, 'TOP_UP_LEAD_MS', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(_e, 'emptyUndo', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }),
      (_e.undoScope = function (e) {
        return {
          undo:
            e.moves.length +
            e.sales.length +
            e.expenses.length +
            e.cheques.length +
            (e.debts?.length || 0) +
            (e.payments?.length || 0) +
            (e.topUps?.length || 0) +
            e.toBuy.length +
            e.contacts.length +
            e.expenseReminders.length,
          kept: e.ledger,
        };
      }),
      (_e.stockShortfalls = function (e) {
        const t = new Map();
        for (const n of e) {
          const e = n.product;
          e &&
            'made' !== e.kind &&
            e.stock < 0 &&
            !t.has(e.id) &&
            t.set(e.id, e);
        }
        return [...t.values()];
      }));
    var e = r(d[0]),
      t = r(d[1]),
      n = r(d[2]),
      o = r(d[3]);
    const i = (e, t = !0) =>
        (e || []).map((e, n) => ({
          id: 'remind-' + n,
          list: 'remind',
          kind: 'reminder',
          group: 'reminder',
          words: e.name,
          done: t,
        })),
      s = (e, t = !0) =>
        (e || []).map((e, n) => ({
          id: 'contact-' + n,
          list: 'contact',
          kind: 'contact',
          group: 'contact',
          words: e.name,
          done: t,
        })),
      l = new Set([
        '\u0622\u0642\u0627\u06cc',
        '\u0622\u0642\u0627',
        '\u0627\u0642\u0627\u06cc',
        '\u0627\u0642\u0627',
        '\u062e\u0627\u0646\u0645',
        '\u062e\u0627\u0646\u0648\u0645',
        '\u062d\u0627\u062c',
        '\u062d\u0627\u062c\u06cc',
        '\u062f\u06a9\u062a\u0631',
        '\u0645\u0647\u0646\u062f\u0633',
        '\u067e\u0631\u062f\u0627\u062e\u062a',
        '\u062f\u0631\u06cc\u0627\u0641\u062a',
        '\u067e\u0648\u0644',
        '\u0627\u0632',
        '\u0628\u0647',
        '\u0628\u0627',
        '\u0628\u0631\u0627\u06cc',
        '\u0648',
        '\u062a\u0627',
        '\u06cc\u0647',
        '\u06cc\u06a9',
      ]),
      c = (e) => {
        const t = e.replace(
          /(?:\u0631\u0648|\u0631\u0627|\u0648|\u0647\u0627|\u0647\u0627\u06cc)$/,
          '',
        );
        return t.length >= 2 ? t : e;
      },
      u =
        /^(?:\u06cc\u0627\u062f\u0645|\u06cc\u0627\u062f\u0627\u0648\u0631\u06cc|\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc|\u06cc\u0627\u062f\u0622\u0648\u0631|\u06cc\u0627\u062f\u0627\u0648\u0631)/,
      a = 8;
    function p(t, n) {
      const o = (0, e.foldText)(t).split(' ').filter(Boolean).map(c),
        i = new Map(),
        s = new Map(),
        p = (e, t) => e === t || (e.startsWith(t) && e.length - t.length <= 3),
        f = (e, t) => o.flatMap((n, o) => (o >= t && p(n, e) ? [o] : [])),
        h = (e, t) => o.some((n, o) => Math.abs(o - e) <= a && t(n)),
        k = (e, t, n) => {
          const o = [...new Set(e.flatMap((e) => f(e, t)))].sort(
            (e, t) => e - t,
          );
          if (!o.length) return -1;
          return (
            o.find(
              (t) =>
                e.every((e) => h(t, (t) => p(t, e))) &&
                (!n || h(t, (e) => u.test(e))),
            ) ??
            o.find((t) => e.every((e) => h(t, (t) => p(t, e)))) ??
            o[0]
          );
        };
      for (const t of n) {
        const n = (0, e.foldText)(t.words)
            .split(' ')
            .filter((e) => e.length >= 2 && !l.has(e) && !/^\d+$/.test(e))
            .map(c),
          o = 'reminder' === t.kind,
          u = s.get(t.list) ?? 0;
        let a = n.length ? k(n, u, o) : -1;
        a < 0 && n.length && (a = k(n, 0, o));
        const p = a >= 0 ? a : (s.get(t.list) ?? 0) - 0.5 + 1e-6 * i.size;
        (i.set(t.id, p), a >= 0 && s.set(t.list, a + 1));
      }
      return i;
    }
    const f = (e) =>
        /(\u0642\u0633\u0637|\u0627\u062c\u0627\u0631\u0647|\u06a9\u0631\u0627\u06cc\u0647|\u0642\u0628\u0636|\u0634\u0627\u0631\u0698|\u0648\u0627\u0645|\u0628\u06cc\u0645\u0647)/.test(
          e,
        ),
      h = 6e4,
      k = () => ({
        moves: [],
        sales: [],
        expenses: [],
        ledger: 0,
        cheques: [],
        debts: [],
        payments: [],
        topUps: [],
        prices: [],
        toBuy: [],
        contacts: [],
        expenseReminders: [],
      });
  },
  787,
  [593, 788, 311, 622],
);
