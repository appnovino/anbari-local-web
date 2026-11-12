// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 624; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'validRoutine', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (e.routineSlots = function (t, n, o = Date.now()) {
        const i = p(t, n, o),
          r = 6048e5,
          u = f(i, n);
        return u > o
          ? { prev: f(i - r, n), next: u }
          : { prev: u, next: f(i + r, n) };
      }),
      Object.defineProperty(e, 'PAST_SLOT_MS', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      Object.defineProperty(e, 'CHEQUE_DAYS', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      (e.chequeAlarmTimes = L),
      (e.expenseReminderText = T),
      (e.reminderItems = function (n, i, u, c, s = Date.now(), h = []) {
        const w = n.map((n) => ({
          id: n.id,
          kind: 'to-buy',
          at: Date.parse(n.remindAt || ''),
          open: 'open' === n.status && !!n.remindAt,
          title:
            'task' === n.note
              ? (0, t.L)('\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc: {name}', {
                  name: n.name,
                })
              : (0, t.L)(
                  '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062e\u0631\u06cc\u062f: {name}',
                  { name: n.name },
                ),
          body:
            'task' === n.note
              ? (0, t.L)(
                  '\u0648\u0642\u062a \u0627\u0646\u062c\u0627\u0645 \u0627\u06cc\u0646 \u06a9\u0627\u0631 \u0627\u0633\u062a.',
                )
              : r(n),
          view: 'to-buy',
        }));
        for (const n of i) {
          if (!l(n)) continue;
          const o = p(n, c, s);
          for (let i = -1; i <= 50; i++) {
            const u = f(o + 7 * i * 864e5, c);
            u <= s - y ||
              w.push({
                id: n.id + ':' + u,
                kind: 'routine',
                at: u,
                open: !0,
                title: (0, t.L)(
                  '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0647\u0641\u062a\u06af\u06cc: {name}',
                  { name: n.name },
                ),
                body: r(n),
                view: 'to-buy',
              });
          }
        }
        const v = new Map(u.people);
        for (const n of u.list) {
          const o = L(n.dueDate);
          if (o)
            for (const [i, r] of b.entries())
              w.push({
                id: n.id + ':' + r,
                kind: 'cheque',
                at: o[i],
                open: 'pending' === n.status,
                view: 'cheques',
                title: r
                  ? (0, t.L)(
                      '{n} \u0631\u0648\u0632 \u062a\u0627 \u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9',
                      { n: r.toLocaleString((0, t.numberLocale)()) },
                    )
                  : (0, t.L)(
                      '\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 \u0631\u0633\u06cc\u062f\u0647',
                    ),
                body: (0, t.L)(
                  'receive' === n.direction
                    ? '\u0686\u06a9 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc: {name}'
                    : '\u0686\u06a9 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc: {name}',
                  {
                    name:
                      v.get(n.contactId) ||
                      n.number ||
                      (0, t.L)('\u0686\u06a9'),
                  },
                ),
              });
        }
        for (const t of h) {
          const n = T(t);
          for (const i of (0, o.reminderTimes)(t, c, s - y, s + 3456e7))
            w.push({
              id: t.id + ':' + i,
              kind: 'expense',
              at: i,
              open: !0,
              ...n,
              view: 'expenses',
              ref: t.id,
            });
        }
        return w;
      }));
    var t = _r(d[0]),
      n = _r(d[1]),
      o = _r(d[2]),
      i = _r(d[3]);
    const r = (o) =>
      o.quantity
        ? (0, t.L)('{quantity} {unit} \u0628\u062e\u0631', {
            quantity: o.quantity.toLocaleString((0, t.numberLocale)()),
            unit: n.notebookFa.units[o.unit || 'piece'],
          })
        : (0, t.L)(
            '\u0648\u0642\u062a \u062e\u0631\u06cc\u062f \u0627\u06cc\u0646 \u0642\u0644\u0645 \u0627\u0633\u062a.',
          );
    let u,
      c = '';
    function s(t, n) {
      (u && c === n) ||
        ((u = new Intl.DateTimeFormat('en-US', {
          timeZone: n,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hourCycle: 'h23',
        })),
        (c = n));
      const o = u.formatToParts(t),
        i = (t) => Number(o.find((n) => n.type === t).value);
      return Date.UTC(
        i('year'),
        i('month') - 1,
        i('day'),
        i('hour'),
        i('minute'),
        i('second'),
      );
    }
    function f(t, n) {
      let o = t;
      for (let i = 0; i < 4; i++) {
        const i = o + t - s(o, n);
        if (i === o) return o;
        o = i;
      }
      return Math.max(o, o + t - s(o, n));
    }
    const l = (t) =>
      t.active &&
      Number.isInteger(t.minute) &&
      t.minute >= 0 &&
      t.minute <= 1439 &&
      Number.isInteger(t.weekday) &&
      t.weekday >= 0 &&
      t.weekday <= 6;
    function p(t, n, o) {
      const i = new Date(s(o, n));
      return Date.UTC(
        i.getUTCFullYear(),
        i.getUTCMonth(),
        i.getUTCDate() + ((t.weekday - i.getUTCDay() + 7) % 7),
        0,
        t.minute,
      );
    }
    const y = 216e5,
      b = [3, 2, 1, 0];
    function L(t) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(t)) return null;
      const [n, o, i] = t.split('-').map(Number);
      return b.map((t) => new Date(n, o - 1, i - t, 9, 0, 0, 0).getTime());
    }
    function T(n) {
      const o = n.label.trim() || n.categoryName;
      return {
        title: (0, t.L)(
          '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0647\u0632\u06cc\u0646\u0647: {name}',
          { name: o },
        ),
        body: n.amountToman
          ? (0, t.L)(
              '{amount}\u061b \u0628\u0632\u0646 \u062a\u0627 \u062b\u0628\u062a\u0634 \u06a9\u0646\u06cc',
              { amount: (0, i.money)(n.amountToman, { full: !0, hint: !1 }) },
            )
          : (0, t.L)(
              '\u0628\u0632\u0646 \u062a\u0627 \u062b\u0628\u062a\u0634 \u06a9\u0646\u06cc',
            ),
      };
    }
  },
  624,
  [311, 580, 443, 435],
);
