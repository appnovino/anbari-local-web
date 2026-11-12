// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 622; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, _i, _a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'TASK_NOTE', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      Object.defineProperty(e, 'isTask', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      (e.splitOneTime = function (t, n = Date.now()) {
        const a = [],
          i = [],
          o = [],
          u = [];
        for (const c of t) {
          if ('open' !== c.status) {
            u.push(c);
            continue;
          }
          const t = c.remindAt ? Date.parse(c.remindAt) : NaN;
          Number.isFinite(t) ? (t > n ? a.push(c) : i.push(c)) : o.push(c);
        }
        const c = (t) => {
          const n = t ? Date.parse(t) : NaN;
          return Number.isFinite(n) ? n : 0;
        };
        return (
          a.sort(
            (t, n) => c(t.remindAt) - c(n.remindAt) || t.id.localeCompare(n.id),
          ),
          i.sort(
            (t, n) => c(n.remindAt) - c(t.remindAt) || t.id.localeCompare(n.id),
          ),
          o.sort(
            (t, n) =>
              c(n.createdAt) - c(t.createdAt) || t.id.localeCompare(n.id),
          ),
          u.sort(
            (t, n) => c(n.doneAt) - c(t.doneAt) || t.id.localeCompare(n.id),
          ),
          { upcoming: a, sent: i, list: o, done: u }
        );
      }),
      Object.defineProperty(e, 'MINUTE_STEP', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'hourValues', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.minuteValues = function (t) {
        const n = Array.from({ length: 12 }, (t, n) => n * o);
        void 0 !== t &&
          Number.isInteger(t) &&
          t >= 0 &&
          t < 60 &&
          !n.includes(t) &&
          n.push(t);
        return n.sort((t, n) => t - n);
      }),
      (e.wheelIndex = function (t, n, a) {
        if (a <= 0 || !(n > 0)) return 0;
        const i = Math.round((Number.isFinite(t) ? t : 0) / n);
        return Math.min(a - 1, Math.max(0, i));
      }),
      Object.defineProperty(e, 'toMinuteOfDay', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.fromMinuteOfDay = s),
      (e.onStep = m),
      Object.defineProperty(e, 'clockText', {
        enumerable: !0,
        get: function () {
          return g;
        },
      }),
      (e.partOfDay = function (n) {
        return n < 4
          ? (0, t.L)('\u0646\u06cc\u0645\u0647\u200c\u0634\u0628')
          : n < 12
            ? (0, t.L)('\u0635\u0628\u062d')
            : n < 15
              ? (0, t.L)('\u0638\u0647\u0631')
              : n < 19
                ? (0, t.L)('\u0639\u0635\u0631')
                : (0, t.L)('\u0634\u0628');
      }),
      (e.atDay = function (t, n, a = new Date()) {
        return new Date(
          a.getFullYear(),
          a.getMonth(),
          a.getDate() + t,
          n.hour,
          n.minute,
          0,
          0,
        );
      }),
      (e.atDate = function (t, a) {
        let i;
        try {
          i = (0, n.calToGregorian)(t.year, t.month, t.day);
        } catch {
          return new Date(NaN);
        }
        return new Date(i.year, i.month - 1, i.day, a.hour, a.minute, 0, 0);
      }),
      (e.dayOffset = f),
      (e.againStart = function (t) {
        const n = t ? new Date(t) : null;
        return {
          day: 1,
          clock:
            n && Number.isFinite(n.getTime())
              ? m({ hour: n.getHours(), minute: n.getMinutes() })
              : { hour: 10, minute: 0 },
        };
      }),
      (e.whenText = h),
      Object.defineProperty(e, 'sayAgain', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'sayNew', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      (e.pastReason = function (n, a = new Date()) {
        return Number.isFinite(n.getTime())
          ? n.getTime() <= a.getTime() + 3e4
            ? (0, t.L)(
                '\u0627\u06cc\u0646 \u0633\u0627\u0639\u062a \u06af\u0630\u0634\u062a\u0647 \u0627\u0633\u062a\u061b \u0633\u0627\u0639\u062a \u062f\u06cc\u0631\u062a\u0631 \u06cc\u0627 \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631\u06cc \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
              )
            : ''
          : (0, t.L)(
              '\u0632\u0645\u0627\u0646 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a.',
            );
      }),
      (e.productMatches = function (t, n, a = 6) {
        const i = D(n),
          o = t.filter(
            (t) => !t.archivedAt && 'made' !== t.kind && t.name.trim(),
          );
        return i
          ? o
              .filter((t) => D(t.name).includes(i))
              .sort(
                (t, n) =>
                  Number(!D(t.name).startsWith(i)) -
                    Number(!D(n.name).startsWith(i)) ||
                  t.name.length - n.name.length ||
                  t.name.localeCompare(n.name),
              )
              .slice(0, a)
          : [...o]
              .sort((t, n) => t.stock - n.stock || t.name.localeCompare(n.name))
              .slice(0, a);
      }),
      Object.defineProperty(e, 'dayText', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      (e.pastText = function (a, i = new Date()) {
        const o = f(a, i),
          u = (0, t.L)('\u0633\u0627\u0639\u062a {time}', {
            time: g({ hour: a.getHours(), minute: a.getMinutes() }),
          });
        if (0 === o)
          return (0, t.L)('\u0627\u0645\u0631\u0648\u0632') + ' ' + u;
        if (-1 === o)
          return (0, t.L)('\u062f\u06cc\u0631\u0648\u0632') + ' ' + u;
        const c = (0, n.calParts)(a),
          s = (0, n.calParts)(i);
        return (
          (0, t.localDigits)(String(c.day)) +
          ' ' +
          (0, n.calMonthNames)()[c.month - 1] +
          (c.year !== s.year ? ' ' + (0, t.localDigits)(String(c.year)) : '') +
          '\u060c ' +
          u
        );
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const a = 'task',
      i = (t) => t.note === a;
    const o = 5,
      u = () => Array.from({ length: 24 }, (t, n) => n);
    const c = (t) => 60 * t.hour + t.minute;
    function s(t) {
      const n = Math.min(
        1439,
        Math.max(0, Math.round(Number.isFinite(t) ? t : 0)),
      );
      return { hour: Math.floor(n / 60), minute: n % 60 };
    }
    function m(t) {
      const n = Math.ceil(c(t) / o) * o;
      return s(Math.min(n, 1435));
    }
    const l = (t) => String(t).padStart(2, '0'),
      g = (n) => (0, t.localDigits)(l(n.hour) + ':' + l(n.minute));
    function f(t, n = new Date()) {
      const a = new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime(),
        i = new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime();
      return Math.round((a - i) / 864e5);
    }
    function h(a, i = new Date()) {
      const o = f(a, i),
        u = (0, t.L)('\u0633\u0627\u0639\u062a {time}', {
          time: g({ hour: a.getHours(), minute: a.getMinutes() }),
        });
      if (0 === o) return (0, t.L)('\u0627\u0645\u0631\u0648\u0632') + ' ' + u;
      if (1 === o) return (0, t.L)('\u0641\u0631\u062f\u0627') + ' ' + u;
      if (2 === o)
        return (0, t.L)('\u067e\u0633\u200c\u0641\u0631\u062f\u0627') + ' ' + u;
      const c = (0, n.calParts)(a),
        s =
          (0, t.localDigits)(String(c.day)) +
          ' ' +
          (0, n.calMonthNames)()[c.month - 1],
        m = [
          (0, t.L)('\u06cc\u06a9\u0634\u0646\u0628\u0647'),
          (0, t.L)('\u062f\u0648\u0634\u0646\u0628\u0647'),
          (0, t.L)('\u0633\u0647\u200c\u0634\u0646\u0628\u0647'),
          (0, t.L)('\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647'),
          (0, t.L)('\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647'),
          (0, t.L)('\u062c\u0645\u0639\u0647'),
          (0, t.L)('\u0634\u0646\u0628\u0647'),
        ];
      return (o > 0 && o < 7 ? m[a.getDay()] + ' ' : '') + s + ' ' + u;
    }
    const p = (n, a = new Date()) =>
        (0, t.L)(
          '{when} \u062f\u0648\u0628\u0627\u0631\u0647 \u06cc\u0627\u062f\u062a \u0645\u06cc\u200c\u0627\u0646\u062f\u0627\u0632\u0645.',
          { when: h(n, a) },
        ),
      y = (n, a = new Date()) =>
        (0, t.L)(
          '{when} \u06cc\u0627\u062f\u062a \u0645\u06cc\u200c\u0627\u0646\u062f\u0627\u0632\u0645.',
          { when: h(n, a) },
        );
    const D = (t) =>
      t
        .trim()
        .replace(/\s+/g, ' ')
        .replace(/\u064a/g, '\u06cc')
        .replace(/\u0643/g, '\u06a9')
        .toLowerCase();
    const b = (t) =>
      `${t.getFullYear()}-${String(t.getMonth() + 1).padStart(2, '0')}-${String(t.getDate()).padStart(2, '0')}`;
  },
  622,
  [311, 440],
);
