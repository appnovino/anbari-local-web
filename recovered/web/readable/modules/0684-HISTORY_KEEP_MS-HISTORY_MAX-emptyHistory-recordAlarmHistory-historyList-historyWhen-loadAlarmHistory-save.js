// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 684; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'HISTORY_KEEP_MS', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      Object.defineProperty(_e, 'HISTORY_MAX', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(_e, 'emptyHistory', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (_e.recordAlarmHistory = l),
      (_e.historyList = function (e, t = Date.now()) {
        return e.entries
          .filter((e) => e.at <= t - o.FIRED_VISIBLE_MS && e.at > t - a)
          .sort((e, t) => t.at - e.at || e.id.localeCompare(t.id));
      }),
      (_e.historyWhen = function (e, t = Date.now()) {
        const n = new Date(e),
          o = new Date(t),
          i = Math.round(
            (new Date(o.getFullYear(), o.getMonth(), o.getDate()).getTime() -
              new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime()) /
              864e5,
          ),
          s = (0, r.localDigits)(
            String(n.getHours()).padStart(2, '0') +
              ':' +
              String(n.getMinutes()).padStart(2, '0'),
          );
        return `${0 === i ? (0, r.L)('\u0627\u0645\u0631\u0648\u0632') : 1 === i ? (0, r.L)('\u062f\u06cc\u0631\u0648\u0632') : n.toLocaleDateString((0, r.dateLocale)(), { weekday: 'long', day: 'numeric', month: 'long' })} ${s}`;
      }),
      (_e.loadAlarmHistory = h),
      (_e.saveAlarmHistory = b),
      (_e.updateAlarmHistory = async function (e, t, n, r = Date.now()) {
        const o = await h(e),
          i = l(o, t, n, r);
        JSON.stringify(i) !== JSON.stringify(o) && (await b(e, i));
        return i;
      }));
    var e,
      t = _r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      r = _r(d[1]),
      o = _r(d[2]),
      i = _r(d[3]),
      s = _r(d[4]);
    const a = 2592e6,
      u = 400,
      c = () => ({ entries: [], seen: {} });
    function l(e, t, n, c = Date.now()) {
      const l = c - a,
        f = {},
        y = [],
        p = (t) => {
          const n = e.seen[t] ?? c - o.FIRED_VISIBLE_MS;
          return ((f[t] = n), Math.max(n, l));
        },
        h = (e, t, n, r, o) =>
          y.push({ id: e + '@' + r, key: e, kind: t, refId: n, at: r, ...o });
      for (const e of t.toBuy || []) {
        if ('open' !== e.status || !e.remindAt || (0, o.routineCopy)(e))
          continue;
        const t = Date.parse(e.remindAt),
          n = 'to-buy:' + e.id,
          r = p(n + '|' + e.remindAt);
        Number.isFinite(t) &&
          t >= r &&
          t <= c &&
          h(n, 'to-buy', e.id, t, o.alarmText.buy(e));
      }
      for (const e of t.routines || []) {
        if (!(0, i.validRoutine)(e)) continue;
        const t = 'routine:' + e.id,
          r = p(t + '|' + e.weekday + ':' + e.minute);
        let s = (0, i.routineSlots)(e, n, c).prev;
        for (let a = 0; a < 6 && s >= r; a++)
          (h(t, 'routine', e.id, s, o.alarmText.routine(e)),
            (s = (0, i.routineSlots)(e, n, s - 1).prev));
      }
      const b = new Map(t.cheques?.people || []);
      for (const e of t.cheques?.list || []) {
        if ('pending' !== e.status) continue;
        const t = (0, i.chequeAlarmTimes)(e.dueDate);
        if (!t) continue;
        const n = 'cheque:' + e.id,
          s = p(n + '|' + e.dueDate),
          { title: a } = o.alarmText.cheque(e, b);
        i.CHEQUE_DAYS.forEach((o, i) => {
          const u = t[i];
          u >= s &&
            u <= c &&
            h(n, 'cheque', e.id, u, {
              title: a,
              detail: o
                ? (0, r.L)(
                    '{n} \u0631\u0648\u0632 \u062a\u0627 \u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9',
                    { n: o.toLocaleString((0, r.numberLocale)()) },
                  )
                : (0, r.L)(
                    '\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 \u0631\u0633\u06cc\u062f\u0647',
                  ),
            });
        });
      }
      for (const e of t.expenses || []) {
        const t = 'expense:' + e.id,
          r = p(
            t +
              '|' +
              e.repeat +
              ':' +
              (e.monthDay ?? e.weekday ?? e.onceOn) +
              ':' +
              e.minute,
          );
        for (const i of (0, s.reminderTimes)(e, n, r, c))
          h(t, 'expense', e.id, i, o.alarmText.expense(e));
      }
      const S = {
        'to-buy': !!t.toBuy,
        routine: !!t.routines,
        cheque: !!t.cheques,
        expense: !!t.expenses,
      };
      for (const [t, n] of Object.entries(e.seen))
        t in f || S[t.split(':')[0]] || (f[t] = n);
      const D = new Map(
        e.entries.filter((e) => e.at > l).map((e) => [e.id, e]),
      );
      for (const e of y) {
        const t = D.get(e.id);
        D.set(e.id, t ? { ...e, at: t.at } : e);
      }
      return {
        entries: [...D.values()]
          .sort((e, t) => t.at - e.at || e.id.localeCompare(t.id))
          .slice(0, u),
        seen: f,
      };
    }
    function f(e) {
      try {
        const t = e ? JSON.parse(e) : null;
        if (
          !t ||
          !Array.isArray(t.entries) ||
          'object' != typeof t.seen ||
          !t.seen
        )
          return c();
        const n = t.entries.filter(
            (e) =>
              e &&
              'string' == typeof e.id &&
              'number' == typeof e.at &&
              'string' == typeof e.title &&
              ['to-buy', 'routine', 'cheque', 'expense'].includes(e.kind),
          ),
          r = {};
        for (const [e, n] of Object.entries(t.seen))
          'number' == typeof n && (r[e] = n);
        return { entries: n, seen: r };
      } catch {
        return c();
      }
    }
    const y = (e) => 'anbari.alarm-history.v1:' + e,
      p = new Map();
    async function h(e) {
      const t = p.get(e);
      if (t) return t;
      let r = c();
      try {
        r = f(await n.default.getItem(y(e)));
      } catch {}
      return (p.has(e) || p.set(e, r), p.get(e));
    }
    async function b(e, t) {
      p.set(e, t);
      try {
        await n.default.setItem(y(e), JSON.stringify(t));
      } catch {}
    }
  },
  684,
  [258, 311, 683, 624, 443],
);
