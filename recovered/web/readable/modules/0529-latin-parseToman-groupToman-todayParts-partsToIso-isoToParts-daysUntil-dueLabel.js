// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 529; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, i, _a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'latin', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (e.parseToman = function (t) {
        const n = s(t).replace(/[^0-9]/g, '');
        return n ? Number(n) : NaN;
      }),
      (e.groupToman = function (t) {
        const n = s(t)
          .replace(/[^0-9]/g, '')
          .replace(/^0+(?=\d)/, '')
          .slice(0, 15);
        return n ? Number(n).toLocaleString((0, o.numberLocale)()) : '';
      }),
      Object.defineProperty(e, 'todayParts', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (e.partsToIso = function (t) {
        const o = (0, n.calToGregorian)(t.year, t.month, t.day),
          c = (t) => String(t).padStart(2, '0');
        return `${o.year}-${c(o.month)}-${c(o.day)}`;
      }),
      (e.isoToParts = function (t) {
        const [o, c, a] = t.split('-').map(Number);
        return {
          ...(0, n.calParts)(new Date(o, c - 1, a, 12)),
          hour: 12,
          minute: 0,
        };
      }),
      (e.daysUntil = u),
      (e.dueLabel = function (t, n = new Date()) {
        const c = u(t, n);
        return 0 === c
          ? (0, o.L)('\u0627\u0645\u0631\u0648\u0632')
          : 1 === c
            ? (0, o.L)('\u0641\u0631\u062f\u0627')
            : c > 1
              ? (0, o.L)('{n} \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631', {
                  n: a(c),
                })
              : (0, o.L)(
                  '{n} \u0631\u0648\u0632 \u06af\u0630\u0634\u062a\u0647',
                  { n: a(-c) },
                );
      }),
      (e.jalaliDay = function (t) {
        return new Date(t + 'T12:00:00').toLocaleDateString(
          (0, o.dateLocale)(),
          { day: 'numeric', month: 'long', year: 'numeric' },
        );
      }),
      Object.defineProperty(e, 'chequeFinished', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      (e.filterCheques = function (t, n, o = new Date()) {
        if ('history' === n)
          return t.filter(f).sort((t, n) => n.dueDate.localeCompare(t.dueDate));
        const a = 'string' == typeof o ? o : (0, c.deviceDay)(o);
        return (0, c.sortCheques)(
          t.filter((t) =>
            'bounced' === n
              ? 'bounced' === t.status
              : !f(t) &&
                ('all' === n ||
                  ('receive' === n || 'pay' === n
                    ? t.direction === n
                    : 'pending' === t.status &&
                      (0, c.dayDiff)(a, t.dueDate) <= c.SOON_DAYS)),
          ),
          a,
        );
      }),
      (e.contactKey = m),
      (e.contactTitle = y),
      (e.exactContacts = S),
      (e.matchContacts = P),
      (e.spokenPhone = w),
      Object.defineProperty(e, 'spokenName', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      (e.phoneFits = N),
      (e.contactsByPhone = O),
      (e.sureContact = function (t, n) {
        const o = O(t, n);
        if (1 === o.length) return o[0];
        const c = S(L(t) || t, n);
        return 1 === c.length ? c[0] : void 0;
      }),
      (e.maskedPhone = function (t) {
        const n = s(t || '').replace(/[^0-9]/g, '');
        if (n.length < 8) return (0, o.localDigits)(n);
        const c = n.startsWith('98') && 12 === n.length ? '0' + n.slice(2) : n;
        return (
          '\u2066' +
          (0, o.localDigits)(c.slice(0, 4)) +
          '\u2026' +
          (0, o.localDigits)(c.slice(-4)) +
          '\u2069'
        );
      }),
      Object.defineProperty(e, 'NEW_CONTACT', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }));
    var t = r(_d[0]),
      n = r(_d[1]),
      o = r(_d[2]),
      c = r(_d[3]);
    const a = (t) => t.toLocaleString((0, o.numberLocale)()),
      s = (t) =>
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
          );
    const l = (t = new Date()) => ({
      ...(0, n.calParts)(t),
      hour: 12,
      minute: 0,
    });
    function u(t, n = new Date()) {
      const [o, c, a] = t.split('-').map(Number);
      return Math.round(
        (Date.UTC(o, c - 1, a) -
          Date.UTC(n.getFullYear(), n.getMonth(), n.getDate())) /
          864e5,
      );
    }
    const f = (t) => 'cashed' === t.status || 'cancelled' === t.status;
    const g = new Set([
        '\u0622\u0642\u0627\u06cc',
        '\u0622\u0642\u0627',
        '\u062e\u0627\u0646\u0645',
        '\u062e\u0627\u0646\u0648\u0645',
        '\u062d\u0627\u062c',
        '\u062d\u0627\u062c\u06cc',
        '\u062d\u0627\u062c\u06cc\u0647',
        '\u062c\u0646\u0627\u0628',
        '\u0633\u0631\u06a9\u0627\u0631',
        '\u0627\u0642\u0627\u06cc',
        '\u0627\u0642\u0627',
        '\u062f\u06a9\u062a\u0631',
        '\u0645\u0647\u0646\u062f\u0633',
        '\u0627\u0633\u062a\u0627\u062f',
      ]),
      p = (n) =>
        (0, t.normalizeName)(n)
          .replace(/\u0626/g, '\u06cc')
          .replace(/\u0624/g, '\u0648')
          .replace(/[\u0623\u0625]/g, '\u0627')
          .replace(/\u0629/g, '\u0647')
          .replace(/\u06cc{3,}/g, '\u06cc\u06cc');
    function m(t) {
      return p(t)
        .replace(/[()\-\u2013\u2014\u060c,.]/g, ' ')
        .split(' ')
        .filter((t) => t && !g.has(t))
        .join(' ');
    }
    const h = new Set([
        '\u062e\u0627\u0646\u0645',
        '\u062e\u0627\u0646\u0648\u0645',
        '\u0633\u0631\u06a9\u0627\u0631',
        '\u062d\u0627\u062c\u06cc\u0647',
        '\u0628\u0627\u0646\u0648',
      ]),
      d = new Set([
        '\u0622\u0642\u0627\u06cc',
        '\u0622\u0642\u0627',
        '\u0627\u0642\u0627\u06cc',
        '\u0627\u0642\u0627',
        '\u062c\u0646\u0627\u0628',
        '\u062d\u0627\u062c',
        '\u062d\u0627\u062c\u06cc',
      ]);
    function y(t) {
      const n = p(t).split(' ');
      return n.some((t) => h.has(t))
        ? 'f'
        : n.some((t) => d.has(t))
          ? 'm'
          : null;
    }
    const b = (t, n) => {
        const o = y(t),
          c = y(n);
        return !o || !c || o === c;
      },
      D = (t) =>
        t
          .split(/[()\-\u2013\u2014\u060c,|/]/)
          .map((t) => t.trim())
          .filter(Boolean);
    function S(t, n) {
      const o = m(t);
      if (!o) return [];
      const c = n.filter(
          (n) =>
            b(t, n.name) &&
            (m(n.name) === o || D(n.name).some((t) => m(t) === o)),
        ),
        a = y(t),
        s = a ? c.filter((t) => y(t.name) === a) : [];
      return s.length ? s : c;
    }
    function P(t, n) {
      const o = m((t = L(t) || t));
      if (!o) return [];
      const c = S(t, n);
      if (c.length) return c;
      const a = o.split(' '),
        s = new Set(a),
        l = a[a.length - 1],
        u = (t) => {
          const n = m(t).split(' ').filter(Boolean);
          return (
            n.length > 0 && n[n.length - 1] === l && n.every((t) => s.has(t))
          );
        };
      return n.filter((n) => {
        const o = new Set(m(n.name).split(' '));
        return (
          b(t, n.name) &&
          (a.every((t) => o.has(t)) || u(n.name) || D(n.name).some(u))
        );
      });
    }
    function w(t) {
      const n = s(t).replace(/[^0-9]/g, '');
      return n.length >= 4 ? n.slice(-11) : '';
    }
    const L = (t) =>
      w(t)
        ? t
            .replace(/[0-9\u06f0-\u06f9\u0660-\u0669]+/g, ' ')
            .replace(/[.\u2026]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
        : t.trim();
    function N(t, n) {
      const o = s(t || '')
          .replace(/[^0-9]/g, '')
          .slice(-10),
        c = n.slice(-10);
      return (
        c.length >= 4 &&
        o.length >= 4 &&
        (o.endsWith(c.replace(/^0/, '')) || c.replace(/^0/, '').endsWith(o))
      );
    }
    function O(t, n) {
      const o = w(t);
      if (!o) return [];
      const c = L(t);
      return (c ? P(c, n) : n).filter((t) => N(t.phone, o));
    }
    const T = 'new';
  },
  529,
  [439, 440, 311, 530],
);
