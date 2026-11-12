// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 890; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'latinDigits', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.balanceWords = function (t) {
        return { label: (0, n.balanceWord)(t), tone: (0, n.balanceState)(t) };
      }),
      Object.defineProperty(e, 'NOTE_MAX', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'noteLine', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'noteCount', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (e.contactMatches = function (t, n, o = (t) => t.toLowerCase()) {
        const u = o(n.trim());
        return (
          !u ||
          o(t.name).includes(u) ||
          (t.phone || '').includes(n.trim()) ||
          o(t.note || '').includes(u)
        );
      }),
      (e.chequesOnTheWay = function (t) {
        const n = (t || []).filter((t) => !t.status || 'pending' === t.status),
          o = (t) =>
            t.reduce(
              (t, n) =>
                t + (Number.isFinite(n.amountToman) ? n.amountToman : 0),
              0,
            ),
          u = n.filter((t) => 'receive' === t.direction),
          c = n.filter((t) => 'pay' === t.direction);
        return {
          inCount: u.length,
          inToman: o(u),
          outCount: c.length,
          outToman: o(c),
        };
      }),
      (e.rhythmText = function (n) {
        return !n || n < 1
          ? ''
          : 1 === n
            ? (0, t.L)(
                '\u062a\u0642\u0631\u06cc\u0628\u0627\u064b \u0647\u0631 \u0631\u0648\u0632',
              )
            : (0, t.L)(
                '\u0647\u0631 {n} \u0631\u0648\u0632 \u06cc\u06a9 \u0628\u0627\u0631',
                { n: (0, t.localDigits)(String(Math.round(n))) },
              );
      }),
      (e.tabType = function (t, n) {
        return 'invoices' === t
          ? 'sale'
          : 'cheques' === t
            ? 'cheque'
            : 'all' === n
              ? void 0
              : n;
      }),
      (e.habitsLine = function (n, o = 3) {
        if (!n || !n.top.length) return '';
        const u = n.top
            .slice(0, o)
            .map((t) => t.name)
            .join('\u060c '),
          c = n.everyDays && n.everyDays >= 1 ? Math.round(n.everyDays) : 0,
          l = c
            ? 1 === c
              ? (0, t.L)(
                  '\u062a\u0642\u0631\u06cc\u0628\u0627\u064b \u0647\u0631 \u0631\u0648\u0632',
                )
              : (0, t.L)('\u0647\u0631 {n} \u0631\u0648\u0632', {
                  n: (0, t.localDigits)(String(c)),
                })
            : '';
        return [
          'purchase' === n.kind
            ? (0, t.L)(
                '\u0645\u0639\u0645\u0648\u0644\u0627\u064b \u0645\u06cc\u200c\u062e\u0631\u06cc\u062f: {items}',
                { items: u },
              )
            : (0, t.L)(
                '\u0645\u0639\u0645\u0648\u0644\u0627\u064b \u0645\u06cc\u200c\u0641\u0631\u0648\u0634\u06cc\u062f: {items}',
                { items: u },
              ),
          l,
        ]
          .filter(Boolean)
          .join(' \xb7 ');
      }),
      Object.defineProperty(e, 'BOOK_PERIODS', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'bookPeriodMonths', {
        enumerable: !0,
        get: function () {
          return d;
        },
      }),
      (e.rowFix = function (t) {
        return !t.posted || t.reversed
          ? null
          : ('payment_in' !== t.kind && 'payment_out' !== t.kind) ||
              !t.paymentId ||
              t.cheque ||
              'cheque' === t.method ||
              t.forDocument
            ? ('debt_owed' !== t.kind && 'debt_owe' !== t.kind) || !t.debtId
              ? null
              : 'debt'
            : 'payment';
      }),
      (e.dayToOccurredAt = function (t, n) {
        if (!/^\d{4}-\d{2}-\d{2}$/.test(t) || t === n) return;
        const [o, u, c] = t.split('-').map(Number);
        return new Date(o, u - 1, c, 12).toISOString();
      }));
    var t = r(_d[0]),
      n = r(_d[1]);
    const o = (t) =>
      t
        .replace(/[\u06f0-\u06f9]/g, (t) => String(t.charCodeAt(0) - 1776))
        .replace(/[\u0660-\u0669]/g, (t) => String(t.charCodeAt(0) - 1632));
    const u = 500,
      c = (t) => (t || '').replace(/\s+/g, ' ').trim(),
      l = (n) =>
        (0, t.L)('{n} / {max}', {
          n: (0, t.localDigits)(String(n.length)),
          max: (0, t.localDigits)(String(u)),
        });
    const s = ['all', '1', '6'],
      d = (t) => ('all' === t ? null : Number(t));
  },
  890,
  [311, 475],
);
