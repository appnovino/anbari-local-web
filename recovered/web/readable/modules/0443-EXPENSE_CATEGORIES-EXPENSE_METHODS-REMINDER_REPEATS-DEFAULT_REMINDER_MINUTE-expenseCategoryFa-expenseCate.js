// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 443; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'EXPENSE_CATEGORIES', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(_e, 'EXPENSE_METHODS', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
      Object.defineProperty(_e, 'REMINDER_REPEATS', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(_e, 'DEFAULT_REMINDER_MINUTE', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      Object.defineProperty(_e, 'expenseCategoryFa', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      Object.defineProperty(_e, 'expenseCategoryHint', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(_e, 'expenseMethodFa', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (_e.expenseCategoryFor = s),
      Object.defineProperty(_e, 'isExpenseCategory', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      (_e.voiceExpenseCategory = function (e, t) {
        const n = s(e);
        return !y(t) || ('other' !== n && t !== n) ? n : t;
      }),
      Object.defineProperty(_e, 'isoDate', {
        enumerable: !0,
        get: function () {
          return d;
        },
      }),
      (_e.monthOf = p),
      (_e.monthRange = function (t, n) {
        return {
          from: d((0, e.calToGregorian)(t, n, 1)),
          to: d((0, e.calToGregorian)(t, n, (0, e.calMonthLength)(t, n))),
        };
      }),
      (_e.shiftMonth = h),
      (_e.todayIn = b),
      (_e.expenseTotals = function (e) {
        const t = new Map();
        let r = 0;
        for (const n of e) {
          r += n.amountToman;
          const e = t.get(n.category) || {
            category: n.category,
            totalToman: 0,
            count: 0,
          };
          ((e.totalToman += n.amountToman), e.count++, t.set(n.category, e));
        }
        return {
          totalToman: r,
          count: e.length,
          byCategory: [...t.values()].sort(
            (e, t) =>
              t.totalToman - e.totalToman ||
              n.indexOf(e.category) - n.indexOf(t.category),
          ),
        };
      }),
      (_e.validReminder = x),
      (_e.reminderTimes = P),
      (_e.nextReminderTime = function (e, t, n = Date.now()) {
        return P(e, t, n + 1, n + 3456e7)[0];
      }));
    var e = _r(_d[0]),
      t = _r(_d[1]);
    const n = [
        'rent',
        'loan',
        'bill',
        'tax',
        'wages',
        'delivery',
        'repair',
        'supplies',
        'other',
      ],
      r = ['cash', 'card', 'transfer', 'cheque'],
      o = ['monthly', 'weekly', 'once'],
      a = 540,
      i = (0, t.localized)({
        rent: '\u06a9\u0631\u0627\u06cc\u0647 / \u0627\u062c\u0627\u0631\u0647',
        loan: '\u0642\u0633\u0637 / \u0648\u0627\u0645',
        bill: '\u0642\u0628\u0636',
        tax: '\u0645\u0627\u0644\u06cc\u0627\u062a \u0648 \u0639\u0648\u0627\u0631\u0636',
        wages:
          '\u062d\u0642\u0648\u0642 \u0648 \u062f\u0633\u062a\u0645\u0632\u062f',
        delivery: '\u062d\u0645\u0644 \u0648 \u067e\u06cc\u06a9',
        repair: '\u062a\u0639\u0645\u06cc\u0631\u0627\u062a',
        supplies:
          '\u0644\u0648\u0627\u0632\u0645 \u0645\u063a\u0627\u0632\u0647',
        other: '\u0633\u0627\u06cc\u0631',
      }),
      u = (0, t.localized)({
        rent: '\u06a9\u0631\u0627\u06cc\u0647 \u0645\u063a\u0627\u0632\u0647',
        loan: '\u0642\u0633\u0637 \u0648\u0627\u0645',
        bill: '\u0628\u0631\u0642\u060c \u0622\u0628\u060c \u06af\u0627\u0632\u060c \u062a\u0644\u0641\u0646\u060c \u0627\u06cc\u0646\u062a\u0631\u0646\u062a',
        tax: '\u0645\u0627\u0644\u06cc\u0627\u062a\u060c \u0639\u0648\u0627\u0631\u0636 \u0634\u0647\u0631\u062f\u0627\u0631\u06cc',
        wages: '\u062d\u0642\u0648\u0642 \u0634\u0627\u06af\u0631\u062f',
        delivery:
          '\u067e\u06cc\u06a9\u060c \u0628\u0627\u0631\u0628\u0631\u06cc\u060c \u062a\u0627\u06a9\u0633\u06cc',
        repair: '\u062a\u0639\u0645\u06cc\u0631 \u06cc\u062e\u0686\u0627\u0644',
        supplies:
          '\u06a9\u06cc\u0633\u0647\u060c \u0646\u0627\u06cc\u0644\u0648\u0646\u060c \u0644\u0627\u0645\u067e',
        other:
          '\u0647\u0631 \u0647\u0632\u06cc\u0646\u0647\u0654 \u062f\u06cc\u06af\u0631',
      }),
      c = (0, t.localized)({
        cash: '\u0646\u0642\u062f',
        card: '\u06a9\u0627\u0631\u062a',
        transfer:
          '\u06a9\u0627\u0631\u062a\u200c\u0628\u0647\u200c\u06a9\u0627\u0631\u062a',
        cheque: '\u0686\u06a9',
      }),
      l = (e) =>
        ' ' +
        e
          .replace(/[\u064a\u0649]/g, '\u06cc')
          .replace(/\u0643/g, '\u06a9')
          .replace(/[\u200c\u200f\u200e]/g, ' ')
          .replace(/\s+/g, ' ')
          .trim() +
        ' ',
      m = [
        [
          'loan',
          [
            '\u0642\u0633\u0637',
            '\u0627\u0642\u0633\u0627\u0637',
            '\u0648\u0627\u0645',
            '\u0644\u06cc\u0632\u06cc\u0646\u06af',
            '\u0642\u0631\u0636 \u0627\u0644\u062d\u0633\u0646\u0647',
            '\u0642\u0631\u0636\u200c\u0627\u0644\u062d\u0633\u0646\u0647',
          ],
        ],
        [
          'tax',
          [
            '\u0645\u0627\u0644\u06cc\u0627\u062a',
            '\u0639\u0648\u0627\u0631\u0636',
            '\u0634\u0647\u0631\u062f\u0627\u0631\u06cc',
            '\u062f\u0627\u0631\u0627\u06cc\u06cc',
          ],
        ],
        [
          'delivery',
          [
            '\u067e\u06cc\u06a9',
            '\u0628\u0627\u0631\u0628\u0631\u06cc',
            '\u062d\u0645\u0644',
            '\u062a\u0627\u06a9\u0633\u06cc',
            '\u0627\u0633\u0646\u067e',
            '\u0622\u0698\u0627\u0646\u0633',
            '\u06a9\u0631\u0627\u06cc\u0647 \u0628\u0627\u0631',
            '\u06a9\u0631\u0627\u06cc\u0647 \u0645\u0627\u0634\u06cc\u0646',
            '\u06a9\u0631\u0627\u06cc\u0647 \u0648\u0627\u0646\u062a',
            '\u06a9\u0631\u0627\u06cc\u0647 \u062a\u0627\u06a9\u0633\u06cc',
            '\u067e\u0633\u062a ',
            '\u067e\u0633\u062a\u06cc',
            '\u0648\u0627\u0646\u062a',
            '\u0646\u06cc\u0633\u0627\u0646',
          ],
        ],
        [
          'repair',
          [
            '\u062a\u0639\u0645\u06cc\u0631',
            '\u062a\u0639\u0645\u06cc\u0631\u0627\u062a',
            '\u0633\u0631\u0648\u06cc\u0633',
            '\u0644\u0648\u0644\u0647 \u06a9\u0634',
            '\u0644\u0648\u0644\u0647\u200c\u06a9\u0634',
            '\u0628\u0631\u0642 \u06a9\u0627\u0631',
            '\u0628\u0631\u0642\u200c\u06a9\u0627\u0631',
            '\u0646\u0642\u0627\u0634\u06cc',
            '\u062c\u0648\u0634\u06a9\u0627\u0631\u06cc',
            '\u0628\u0646\u0627\u06cc\u06cc',
          ],
        ],
        [
          'rent',
          [
            '\u06a9\u0631\u0627\u06cc\u0647',
            '\u0627\u062c\u0627\u0631\u0647',
            '\u0631\u0647\u0646',
          ],
        ],
        [
          'bill',
          [
            '\u0642\u0628\u0636',
            '\u0628\u0631\u0642',
            '\u0622\u0628 ',
            '\u06af\u0627\u0632',
            '\u062a\u0644\u0641\u0646',
            '\u0627\u06cc\u0646\u062a\u0631\u0646\u062a',
            '\u0645\u0648\u0628\u0627\u06cc\u0644',
            '\u0634\u0627\u0631\u0698',
            '\u0622\u0628\u0648\u0646\u0645\u0627\u0646',
          ],
        ],
        [
          'wages',
          [
            '\u062d\u0642\u0648\u0642',
            '\u062f\u0633\u062a\u0645\u0632\u062f',
            '\u06a9\u0627\u0631\u06af\u0631',
            '\u0634\u0627\u06af\u0631\u062f',
            '\u067e\u0627\u062f\u0648',
            '\u0639\u06cc\u062f\u06cc',
            '\u067e\u0627\u062f\u0627\u0634',
            '\u0646\u0627\u0647\u0627\u0631',
            '\u0646\u0647\u0627\u0631',
            '\u0628\u06cc\u0645\u0647 \u06a9\u0627\u0631\u06af\u0631',
          ],
        ],
        [
          'supplies',
          [
            '\u0644\u0648\u0627\u0632\u0645',
            '\u06a9\u06cc\u0633\u0647',
            '\u0646\u0627\u06cc\u0644\u0648\u0646',
            '\u067e\u0644\u0627\u0633\u062a\u06cc\u06a9',
            '\u0644\u0627\u0645\u067e',
            '\u062c\u0627\u0631\u0648',
            '\u0634\u0648\u06cc\u0646\u062f\u0647',
            '\u062f\u0633\u062a\u0645\u0627\u0644',
            '\u06a9\u0627\u063a\u0630',
            '\u0631\u0648\u0644',
            '\u062e\u0648\u062f\u06a9\u0627\u0631',
            '\u062f\u0641\u062a\u0631',
            '\u0686\u0633\u0628',
            '\u06a9\u0627\u0631\u062a\u0646',
            '\u0686\u0627\u06cc',
            '\u0642\u0646\u062f',
          ],
        ],
      ];
    function s(e) {
      const t = l(e);
      for (const [e, n] of m)
        if (n.some((e) => t.includes(e.endsWith(' ') ? ' ' + e : e))) return e;
      return 'other';
    }
    const y = (e) => 'string' == typeof e && n.includes(e);
    const f = (e) => String(e).padStart(2, '0'),
      d = (e) => `${e.year}-${f(e.month)}-${f(e.day)}`;
    function p(t) {
      const [n, r, o] = t.split('-').map(Number),
        a = (0, e.calFromGregorian)(n, r, o);
      return { year: a.year, month: a.month };
    }
    function h(e, t) {
      const n = 12 * e.year + (e.month - 1) + t;
      return { year: Math.floor(n / 12), month: (n % 12) + 1 };
    }
    function b(e, t = Date.now()) {
      try {
        const n = new Intl.DateTimeFormat('en-CA', {
            timeZone: e,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).formatToParts(t),
          r = (e) => n.find((t) => t.type === e).value;
        return `${r('year')}-${r('month')}-${r('day')}`;
      } catch {
        const e = new Date(t);
        return d({
          year: e.getFullYear(),
          month: e.getMonth() + 1,
          day: e.getDate(),
        });
      }
    }
    let T,
      D = '';
    function E(e, t) {
      (T && D === t) ||
        ((T = new Intl.DateTimeFormat('en-US', {
          timeZone: t,
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hourCycle: 'h23',
        })),
        (D = t));
      const n = T.formatToParts(e),
        r = (e) => Number(n.find((t) => t.type === e).value);
      return Date.UTC(
        r('year'),
        r('month') - 1,
        r('day'),
        r('hour'),
        r('minute'),
        r('second'),
      );
    }
    function w(e, t) {
      let n = e;
      for (let r = 0; r < 4; r++) {
        const r = n + e - E(n, t);
        if (r === n) return n;
        n = r;
      }
      return Math.max(n, n + e - E(n, t));
    }
    const O = (e, t) => {
      const [n, r, o] = e.split('-').map(Number);
      return Date.UTC(n, r - 1, o, 0, t);
    };
    function x(e) {
      return (
        !(!Number.isInteger(e.minute) || e.minute < 0 || e.minute > 1439) &&
        ('monthly' === e.repeat
          ? Number.isInteger(e.monthDay) && e.monthDay >= 1 && e.monthDay <= 31
          : 'weekly' === e.repeat
            ? Number.isInteger(e.weekday) && e.weekday >= 0 && e.weekday <= 6
            : 'once' === e.repeat &&
              'string' == typeof e.onceOn &&
              /^\d{4}-\d{2}-\d{2}$/.test(e.onceOn))
      );
    }
    function P(t, n, r, o) {
      if (!x(t)) return [];
      const a = [],
        i = (e) => {
          e >= r && e <= o && a.push(e);
        };
      if ('once' === t.repeat) return (i(w(O(t.onceOn, t.minute), n)), a);
      const u = b(n, r);
      if ('weekly' === t.repeat) {
        const [e, r, c] = u.split('-').map(Number),
          l = new Date(Date.UTC(e, r - 1, c)).getUTCDay(),
          m = Date.UTC(
            e,
            r - 1,
            c + ((t.weekday - l + 7) % 7) - 7,
            0,
            t.minute,
          );
        for (let e = 0; e <= 60; e++) {
          const t = w(m + 7 * e * 864e5, n);
          if (t > o) break;
          i(t);
        }
        return a;
      }
      let c = h(p(u), -1);
      for (let r = 0; r <= 24; r++, c = h(c, 1)) {
        const r = Math.min(t.monthDay, (0, e.calMonthLength)(c.year, c.month)),
          a = w(O(d((0, e.calToGregorian)(c.year, c.month, r)), t.minute), n);
        if (a > o) break;
        i(a);
      }
      return a;
    }
  },
  443,
  [440, 311],
);
