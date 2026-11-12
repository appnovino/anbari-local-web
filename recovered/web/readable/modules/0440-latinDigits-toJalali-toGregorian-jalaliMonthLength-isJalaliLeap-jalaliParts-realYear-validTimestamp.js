// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 440; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'latinDigits', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.toJalali = h),
      (e.toGregorian = b),
      (e.jalaliMonthLength = y),
      (e.isJalaliLeap = N),
      (e.jalaliParts = p),
      Object.defineProperty(e, 'realYear', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }),
      (e.validTimestamp = w),
      (e.deviceTimeZone = v),
      (e.localParts = I),
      (e.parseLocalDateTime = M),
      (e.parseJalaliDateTime = _),
      (e.clientClock = function () {
        const t = new Date();
        return {
          now: t.toISOString(),
          timeZone: v(),
          local: I(t.toISOString()),
          offsetMinutes: -t.getTimezoneOffset(),
        };
      }),
      (e.formatMoment = function (n, i) {
        if (!n || !w(n)) return '';
        try {
          return new Date(n).toLocaleString((0, t.dateLocale)(), {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            ...(i ? { timeZone: i } : {}),
          });
        } catch {
          return new Date(n).toLocaleString((0, t.dateLocale)());
        }
      }),
      (e.calendarKind = S),
      (e.calParts = function (t) {
        if (T()) return p(t);
        if (!(t instanceof Date && Number.isFinite(t.getTime())))
          throw Error('invalid_date');
        return {
          year: t.getFullYear(),
          month: t.getMonth() + 1,
          day: t.getDate(),
        };
      }),
      (e.calToGregorian = E),
      (e.calFromGregorian = function (t, n, i) {
        return T() ? h(t, n, i) : E(t, n, i);
      }),
      (e.calMonthLength = function (t, n) {
        if (T()) return y(t, n);
        if (!Number.isInteger(t) || !Number.isInteger(n) || n < 1 || n > 12)
          throw Error('invalid_date');
        return c(t, n);
      }),
      (e.parseCalDateTime = function (t, n) {
        return T() ? _(t, n) : M(t, n);
      }),
      (e.calMonthNames = function () {
        if (T()) return F;
        try {
          const n = new Intl.DateTimeFormat((0, t.dateLocale)(), {
            month: 'long',
          });
          return Array.from({ length: 12 }, (t, i) =>
            n.format(new Date(2026, i, 15)),
          );
        } catch {
          return [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ];
        }
      }));
    var t = r(_d[0]);
    const n = (t) =>
        t
          .replace(/[\u06f0-\u06f9]/g, (t) =>
            String(
              '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                t,
              ),
            ),
          )
          .replace(/[\u0660-\u0669]/g, (t) =>
            String(
              '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
                t,
              ),
            ),
          ),
      i = [
        -61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097,
        2192, 2262, 2347, 2380, 2394, 2456, 3178,
      ],
      a = (t, n) => Math.trunc(t / n),
      o = (t, n) => t - a(t, n) * n;
    function u(t) {
      if (!Number.isInteger(t) || t < i[0] || t >= i[i.length - 1])
        throw Error('invalid_date');
      let n = -14,
        u = i[0],
        l = 1,
        c = 0;
      for (; l < i.length && t >= i[l]; l++) {
        const t = i[l];
        ((c = t - u), (n += 8 * a(c, 33) + a(o(c, 33), 4)), (u = t));
      }
      const d = t - u;
      ((n += 8 * a(d, 33) + a(o(d, 33) + 3, 4)),
        4 === o(c, 33) && c - d === 4 && n++);
      const s = t + 621,
        m = 20 + n - (a(s, 4) - a(3 * (a(s, 100) + 1), 4) - 150);
      let f = o(o(d + 1, 33) - 1, 4);
      return (-1 === f && (f = 4), { gy: s, march: m, leap: f });
    }
    function l(t) {
      return t % 4 == 0 && (t % 100 != 0 || t % 400 == 0);
    }
    function c(t, n) {
      return n < 1 || n > 12
        ? 0
        : 2 === n
          ? l(t)
            ? 29
            : 28
          : [4, 6, 9, 11].includes(n)
            ? 30
            : 31;
    }
    function d(t, n, i) {
      let u =
        a(1461 * (t + a(n - 8, 6) + 100100), 4) +
        a(153 * o(n + 9, 12) + 2, 5) +
        i -
        34840408;
      return ((u = u - a(3 * a(t + 100100 + a(n - 8, 6), 100), 4) + 752), u);
    }
    function s(t) {
      let n = 4 * t + 139361631;
      n += 4 * a(3 * a(4 * t + 183187720, 146097), 4) - 3908;
      const i = 5 * a(o(n, 1461), 4) + 308,
        u = o(a(i, 153), 12) + 1;
      return {
        year: a(n, 1461) - 100100 + a(8 - u, 6),
        month: u,
        day: a(o(i, 153), 5) + 1,
      };
    }
    function m(t, n, i) {
      const o = u(t);
      return d(o.gy, 3, o.march) + 31 * (n - 1) - a(n, 7) * (n - 7) + i - 1;
    }
    function f(t) {
      const n = s(t);
      let i = n.year - 621,
        l = u(i),
        c = t - d(n.year, 3, l.march);
      if (c >= 0) {
        if (c <= 185)
          return { year: i, month: 1 + a(c, 31), day: o(c, 31) + 1 };
        c -= 186;
      } else (i--, (c += 179), 1 === l.leap && c++);
      return { year: i, month: 7 + a(c, 30), day: o(c, 30) + 1 };
    }
    function h(t, n, i) {
      if (
        !Number.isInteger(t) ||
        !Number.isInteger(n) ||
        !Number.isInteger(i) ||
        c(t, n) < i ||
        i < 1
      )
        throw Error('invalid_date');
      return f(d(t, n, i));
    }
    function b(t, n, i) {
      const a = y(t, n);
      if (i < 1 || !Number.isInteger(i) || i > a) throw Error('invalid_date');
      return s(m(t, n, i));
    }
    function y(t, n) {
      if (!Number.isInteger(t) || !Number.isInteger(n) || n < 1 || n > 12)
        throw Error('invalid_date');
      return n <= 6 ? 31 : n <= 11 || N(t) ? 30 : 29;
    }
    function N(t) {
      return 0 === u(t).leap;
    }
    function p(t) {
      if (!(t instanceof Date && Number.isFinite(t.getTime())))
        throw Error('invalid_date');
      return h(t.getFullYear(), t.getMonth() + 1, t.getDate());
    }
    const D = (t) => Number(t.slice(0, 4)) >= 2e3;
    function w(t) {
      if (
        'string' != typeof t ||
        !/^\d{4}-\d\d-\d\dT\d\d:\d\d(?::\d\d(?:\.\d{1,3})?)?(?:Z|[+-]\d\d:\d\d)$/.test(
          t,
        ) ||
        !Number.isFinite(Date.parse(t))
      )
        return !1;
      const n = Number(t.slice(0, 4)),
        i = Number(t.slice(5, 7)),
        a = Number(t.slice(8, 10)),
        o = Number(t.slice(11, 13)),
        u = Number(t.slice(14, 16)),
        l = ':' === t[16] ? Number(t.slice(17, 19)) : 0,
        c = new Date(Date.UTC(n, i, 0)).getUTCDate();
      return (
        n >= 2e3 &&
        i >= 1 &&
        i <= 12 &&
        a >= 1 &&
        a <= c &&
        o < 24 &&
        u < 60 &&
        (Number.isNaN(l) || void 0 === l || l < 60)
      );
    }
    function v() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
    }
    function I(t) {
      const n = t && w(t) ? new Date(t) : new Date(),
        i = (t) => String(t).padStart(2, '0');
      return {
        date: [n.getFullYear(), i(n.getMonth() + 1), i(n.getDate())].join('-'),
        time: i(n.getHours()) + ':' + i(n.getMinutes()),
      };
    }
    function M(t, i) {
      const a = n(t),
        o = n(i);
      if (!/^\d{4}-\d\d-\d\d$/.test(a) || !/^\d\d:\d\d$/.test(o))
        throw Error('invalid_date');
      const [u, l, c] = a.split('-').map(Number),
        [d, s] = o.split(':').map(Number),
        m = new Date(u, l - 1, c, d, s, 0, 0);
      if (
        m.getFullYear() !== u ||
        m.getMonth() !== l - 1 ||
        m.getDate() !== c ||
        m.getHours() !== d ||
        m.getMinutes() !== s
      )
        throw Error('invalid_date');
      return m.toISOString();
    }
    function _(t, i) {
      const a = n(t),
        o = n(i);
      if (!/^\d{4}-\d\d-\d\d$/.test(a) || !/^\d\d:\d\d$/.test(o))
        throw Error('invalid_date');
      const [u, l, c] = a.split('-').map(Number),
        [d, s] = o.split(':').map(Number),
        m = b(u, l, c),
        f = new Date(m.year, m.month - 1, m.day, d, s, 0, 0);
      if (
        f.getFullYear() !== m.year ||
        f.getMonth() !== m.month - 1 ||
        f.getDate() !== m.day ||
        f.getHours() !== d ||
        f.getMinutes() !== s
      )
        throw Error('invalid_date');
      return f.toISOString();
    }
    function S() {
      return 'fa' === (0, t.localeLang)() ? 'jalali' : 'gregorian';
    }
    const T = () => 'jalali' === S();
    function E(t, n, i) {
      if (T()) return b(t, n, i);
      if (
        !Number.isInteger(t) ||
        !Number.isInteger(n) ||
        !Number.isInteger(i) ||
        i < 1 ||
        c(t, n) < i
      )
        throw Error('invalid_date');
      return { year: t, month: n, day: i };
    }
    const F = [
      '\u0641\u0631\u0648\u0631\u062f\u06cc\u0646',
      '\u0627\u0631\u062f\u06cc\u0628\u0647\u0634\u062a',
      '\u062e\u0631\u062f\u0627\u062f',
      '\u062a\u06cc\u0631',
      '\u0645\u0631\u062f\u0627\u062f',
      '\u0634\u0647\u0631\u06cc\u0648\u0631',
      '\u0645\u0647\u0631',
      '\u0622\u0628\u0627\u0646',
      '\u0622\u0630\u0631',
      '\u062f\u06cc',
      '\u0628\u0647\u0645\u0646',
      '\u0627\u0633\u0641\u0646\u062f',
    ];
  },
  440,
  [311],
);
