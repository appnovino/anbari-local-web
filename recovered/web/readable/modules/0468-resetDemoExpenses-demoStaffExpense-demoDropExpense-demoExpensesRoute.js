// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 468; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, _a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.resetDemoExpenses = function () {
        r = null;
      }),
      (_e.demoStaffExpense = function (e, n) {
        (r ??= t(e)).expenses.push({
          ...n,
          category: 'wages',
          source: 'staff',
          version: 1,
          createdAt: new Date(e).toISOString(),
        });
      }),
      (_e.demoDropExpense = function (e) {
        r && (r.expenses = r.expenses.filter((n) => n.id !== e));
      }),
      (_e.demoExpensesRoute = function (n, s, d, m, a, l = o) {
        const [c, u, p] = n;
        if ('expenses' !== c && 'expense-reminders' !== c) return null;
        const f = (r ??= t(a)),
          h = new Date(a).toISOString();
        if ('expense-reminders' === c) {
          if (!u && 'GET' === s) return { reminders: f.reminders };
          if (u && 'delete' === p) {
            const e = f.reminders.find((e) => e.id === u);
            if (!e) throw l('reminder_not_found', 404);
            return (
              (f.reminders = f.reminders.filter((n) => n !== e)),
              { deleted: u }
            );
          }
          throw l('invalid_request');
        }
        if (!u && 'GET' === s) {
          const n =
              d.get('from') ||
              (0, e.monthRange)(
                (0, e.monthOf)((0, e.todayIn)('Asia/Tehran', a)).year,
                (0, e.monthOf)((0, e.todayIn)('Asia/Tehran', a)).month,
              ).from,
            r = d.get('to') || n,
            t = f.expenses
              .filter((e) => e.spentOn >= n && e.spentOn <= r)
              .sort(
                (e, n) =>
                  n.spentOn.localeCompare(e.spentOn) ||
                  n.createdAt.localeCompare(e.createdAt),
              );
          return {
            from: n,
            to: r,
            expenses: t,
            totals: (0, e.expenseTotals)(t),
          };
        }
        const x = (e, n, r = 'demo-rem-' + f.next++) => ({
          id: r,
          category: e.category,
          label: e.label,
          amountToman: e.amountToman,
          method: e.method,
          repeat: n.repeat,
          minute: n.minute ?? 540,
          version: 1,
          ...('monthly' === n.repeat
            ? { monthDay: n.monthDay }
            : 'weekly' === n.repeat
              ? { weekday: n.weekday }
              : { onceOn: n.onceOn }),
        });
        if (!u && 'POST' === s) {
          const e = 'demo-exp-' + f.next++;
          let n,
            r = m.reminderId;
          m.reminder &&
            ((n = x(m, m.reminder)), f.reminders.push(n), (r = n.id));
          const t = {
            id: e,
            category: m.category,
            label: String(m.label || ''),
            amountToman: Number(m.amountToman),
            spentOn: String(m.spentOn),
            method: m.method || 'cash',
            note: String(m.note || ''),
            source: m.source || 'manual',
            version: 1,
            createdAt: h,
            ...(r ? { reminderId: r } : {}),
          };
          return (
            f.expenses.push(t),
            { expense: t, ...(n ? { reminder: n } : {}) }
          );
        }
        const y = f.expenses.find((e) => e.id === u);
        if (!y) throw l('expense_not_found', 404);
        if ('delete' === p)
          return (
            (f.expenses = f.expenses.filter((e) => e !== y)),
            m.removeReminder &&
              y.reminderId &&
              (f.reminders = f.reminders.filter((e) => e.id !== y.reminderId)),
            { deleted: u, reminderRemoved: !!m.removeReminder }
          );
        if ('PATCH' === s) {
          Object.assign(y, {
            ...Object.fromEntries(
              ['category', 'label', 'amountToman', 'spentOn', 'method', 'note']
                .filter((e) => e in m)
                .map((e) => [e, m[e]]),
            ),
            version: y.version + 1,
          });
          let e = y.reminderId
            ? f.reminders.find((e) => e.id === y.reminderId)
            : void 0;
          if (null === m.reminder)
            (e && (f.reminders = f.reminders.filter((n) => n !== e)),
              delete y.reminderId,
              (e = void 0));
          else if (m.reminder) {
            const n = x(y, m.reminder, e?.id);
            ((f.reminders = [...f.reminders.filter((e) => e.id !== n.id), n]),
              (y.reminderId = n.id),
              (e = n));
          }
          return { expense: y, reminder: e || null };
        }
        throw l('invalid_request');
      }));
    var e = _r(_d[0]),
      n = _r(_d[1]);
    let r = null;
    function t(r) {
      const t = (0, e.todayIn)('Asia/Tehran', r),
        o = (0, e.monthOf)(t),
        s = (r) => {
          const s = (0, e.isoDate)((0, n.calToGregorian)(o.year, o.month, r));
          return s > t ? t : s;
        },
        d = new Date(r).toISOString(),
        m = (e, n, r, t, o, s, m) => ({
          id: e,
          category: n,
          label: r,
          amountToman: t,
          spentOn: o,
          method: s,
          note: '',
          source: 'manual',
          version: 1,
          createdAt: d,
          ...(m ? { reminderId: m } : {}),
        });
      return {
        next: 10,
        reminders: [
          {
            id: 'demo-rem-rent',
            category: 'rent',
            label:
              '\u06a9\u0631\u0627\u06cc\u0647 \u0645\u063a\u0627\u0632\u0647',
            amountToman: 15e6,
            method: 'transfer',
            repeat: 'monthly',
            monthDay: 1,
            minute: 540,
            version: 1,
          },
        ],
        expenses: [
          m(
            'demo-exp-1',
            'rent',
            '\u06a9\u0631\u0627\u06cc\u0647 \u0645\u063a\u0627\u0632\u0647',
            15e6,
            s(1),
            'transfer',
            'demo-rem-rent',
          ),
          m(
            'demo-exp-2',
            'bill',
            '\u0642\u0628\u0636 \u0628\u0631\u0642',
            85e4,
            s(3),
            'card',
          ),
          m(
            'demo-exp-3',
            'loan',
            '\u0642\u0633\u0637 \u0648\u0627\u0645',
            42e5,
            s(5),
            'transfer',
          ),
          m(
            'demo-exp-4',
            'wages',
            '\u0646\u0627\u0647\u0627\u0631 \u06a9\u0627\u0631\u06af\u0631',
            35e4,
            s(6),
            'cash',
          ),
          m('demo-exp-5', 'delivery', '\u067e\u06cc\u06a9', 12e4, s(7), 'cash'),
        ],
      };
    }
    const o = (e, n = 400) =>
      Object.assign(new Error(e), { code: e, status: n });
  },
  468,
  [443, 440],
);
