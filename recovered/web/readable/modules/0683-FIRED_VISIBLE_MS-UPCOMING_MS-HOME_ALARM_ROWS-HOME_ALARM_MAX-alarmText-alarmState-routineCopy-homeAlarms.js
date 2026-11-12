// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 683; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'FIRED_VISIBLE_MS', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'UPCOMING_MS', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'HOME_ALARM_ROWS', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'HOME_ALARM_MAX', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'alarmText', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (e.alarmState = y),
      Object.defineProperty(e, 'routineCopy', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      (e.homeAlarms = function (t, n, a = Date.now()) {
        const s = [];
        for (const n of t.toBuy || []) {
          if ('open' !== n.status || !n.remindAt || b(n)) continue;
          const t = y([Date.parse(n.remindAt)], a);
          t &&
            s.push({
              key: 'to-buy:' + n.id,
              kind: 'to-buy',
              refId: n.id,
              ...t,
              ...p.buy(n),
            });
        }
        for (const o of t.routines || []) {
          if (!(0, r.validRoutine)(o)) continue;
          const { prev: t, next: u } = (0, r.routineSlots)(o, n, a),
            c = y([t, u], a);
          c &&
            s.push({
              key: 'routine:' + o.id,
              kind: 'routine',
              refId: o.id,
              ...c,
              ...p.routine(o),
            });
        }
        const f = new Map(t.cheques?.people || []);
        for (const n of t.cheques?.list || []) {
          if ('pending' !== n.status) continue;
          const t = (0, r.chequeAlarmTimes)(n.dueDate),
            o = t && y(t, a);
          o &&
            s.push({
              key: 'cheque:' + n.id,
              kind: 'cheque',
              refId: n.id,
              ...o,
              ...p.cheque(n, f),
            });
        }
        for (const r of t.expenses || []) {
          const t = y(
            (0, o.reminderTimes)(r, n, a - u - 864e5, a + c + 864e5),
            a,
          );
          t &&
            s.push({
              key: 'expense:' + r.id,
              kind: 'expense',
              refId: r.id,
              ...t,
              ...p.expense(r),
            });
        }
        return s
          .sort((t, n) =>
            t.fired !== n.fired
              ? t.fired
                ? -1
                : 1
              : t.fired
                ? n.at - t.at || t.key.localeCompare(n.key)
                : t.at - n.at || t.key.localeCompare(n.key),
          )
          .slice(0, l);
      }),
      Object.defineProperty(e, 'homeAlarmsScroll', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      (e.nextAlarmChange = function (t, n = Date.now()) {
        const r = t
          .map((t) => (t.fired ? t.at + u : t.at))
          .filter((t) => t > n);
        return Math.max(5e3, Math.min(6e4, ...r.map((t) => t - n + 500)));
      }));
    var t = _r(d[0]),
      n = _r(d[1]),
      r = _r(d[2]),
      o = _r(d[3]),
      a = _r(d[4]);
    const u = 108e5,
      c = 2592e5,
      s = 3,
      l = 60,
      f = (r) =>
        r.quantity
          ? ' ' +
            r.quantity.toLocaleString((0, t.numberLocale)()) +
            ' ' +
            n.notebookFa.units[r.unit || 'piece']
          : '',
      p = {
        buy: (n) => ({
          title: n.name + f(n),
          detail:
            'task' === n.note
              ? (0, t.L)('\u06a9\u0627\u0631')
              : (0, t.L)('\u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f'),
        }),
        routine: (n) => ({
          title: n.name + f(n),
          detail: (0, t.L)('\u0647\u0631 {day}', {
            day: [
              (0, t.L)('\u06cc\u06a9\u0634\u0646\u0628\u0647'),
              (0, t.L)('\u062f\u0648\u0634\u0646\u0628\u0647'),
              (0, t.L)('\u0633\u0647\u200c\u0634\u0646\u0628\u0647'),
              (0, t.L)('\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647'),
              (0, t.L)('\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647'),
              (0, t.L)('\u062c\u0645\u0639\u0647'),
              (0, t.L)('\u0634\u0646\u0628\u0647'),
            ][n.weekday],
          }),
        }),
        expense: (n) => ({
          title:
            (n.label.trim() || o.expenseCategoryFa[n.category]) +
            (n.amountToman
              ? '\u060c ' +
                (0, a.localAmount)(n.amountToman).toLocaleString(
                  (0, t.numberLocale)(),
                )
              : ''),
          detail: (0, t.L)('\u0647\u0632\u06cc\u0646\u0647'),
        }),
        cheque: (n, r) => ({
          title: (0, t.L)(
            'receive' === n.direction
              ? '\u0686\u06a9 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc: {name}'
              : '\u0686\u06a9 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc: {name}',
            {
              name: r.get(n.contactId) || n.number || (0, t.L)('\u0686\u06a9'),
            },
          ),
          detail: (0, t.L)('\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9'),
        }),
      };
    function y(t, n) {
      const r = t.filter(Number.isFinite).sort((t, n) => t - n),
        o = r.filter((t) => t <= n).at(-1),
        a = r.find((t) => t > n);
      return void 0 !== o && n - o < u
        ? { at: o, fired: !0 }
        : void 0 !== a && a - n <= c
          ? { at: a, fired: !1 }
          : null;
    }
    const b = (t) =>
      'routine' === t.note &&
      !!t.remindAt &&
      Date.parse(t.remindAt) <= Date.parse(t.createdAt);
    const L = (t) => t > s;
  },
  683,
  [311, 580, 624, 443, 435],
);
