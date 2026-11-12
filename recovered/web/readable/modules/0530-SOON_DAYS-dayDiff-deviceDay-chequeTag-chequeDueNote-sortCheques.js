// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 530; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'SOON_DAYS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.dayDiff = l),
      (e.deviceDay = function (t = new Date()) {
        const n = (t) => String(t).padStart(2, '0');
        return `${t.getFullYear()}-${n(t.getMonth() + 1)}-${n(t.getDate())}`;
      }),
      (e.chequeTag = function (a, u) {
        if ('cashed' === a.status)
          return {
            kind: 'cashed',
            label: (0, t.L)('\u067e\u0627\u0633 \u0634\u062f'),
            tone: 'ok',
            days: null,
            settle: !1,
          };
        if ('bounced' === a.status)
          return {
            kind: 'bounced',
            label: (0, t.L)(
              '\u0628\u0631\u06af\u0634\u062a \u062e\u0648\u0631\u062f',
            ),
            tone: 'bad',
            days: null,
            settle: !1,
          };
        if ('cancelled' === a.status)
          return {
            kind: 'cancelled',
            label: (0, t.L)('\u0644\u063a\u0648 \u0634\u062f'),
            tone: 'off',
            days: null,
            settle: !1,
          };
        const o = l(u, a.dueDate);
        return Number.isFinite(o)
          ? o < 0
            ? {
                kind: 'late',
                label: (0, t.L)(
                  '\u0633\u0631\u0631\u0633\u06cc\u062f \u06af\u0630\u0634\u062a\u0647',
                ),
                tone: 'bad',
                days: o,
                settle: !0,
              }
            : 0 === o
              ? {
                  kind: 'today',
                  label: (0, t.L)(
                    '\u0627\u0645\u0631\u0648\u0632 \u0633\u0631\u0631\u0633\u06cc\u062f\u0647',
                  ),
                  tone: 'warn',
                  days: o,
                  settle: !1,
                }
              : 1 === o
                ? {
                    kind: 'tomorrow',
                    label: (0, t.L)('\u0641\u0631\u062f\u0627'),
                    tone: 'warn',
                    days: o,
                    settle: !1,
                  }
                : o <= n
                  ? {
                      kind: 'days',
                      label: (0, t.L)(
                        '{n} \u0631\u0648\u0632 \u0645\u0627\u0646\u062f\u0647',
                        { n: s(o) },
                      ),
                      tone: 'wait',
                      days: o,
                      settle: !1,
                    }
                  : {
                      kind: 'pending',
                      label: (0, t.L)(
                        '\u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631',
                      ),
                      tone: 'calm',
                      days: o,
                      settle: !1,
                    }
          : {
              kind: 'pending',
              label: (0, t.L)(
                '\u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631',
              ),
              tone: 'calm',
              days: null,
              settle: !1,
            };
      }),
      (e.chequeDueNote = function (n) {
        return null === n.days
          ? ''
          : 'late' === n.kind
            ? -1 === n.days
              ? (0, t.L)('\u062f\u06cc\u0631\u0648\u0632')
              : (0, t.L)(
                  '{n} \u0631\u0648\u0632 \u06af\u0630\u0634\u062a\u0647',
                  { n: s(-n.days) },
                )
            : 'pending' === n.kind
              ? (0, t.L)('{n} \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631', {
                  n: s(n.days),
                })
              : '';
      }),
      (e.sortCheques = function (t, n) {
        const a = (t) =>
          'pending' === t.status
            ? l(n, t.dueDate) < 0
              ? 0
              : 1
            : 'bounced' === t.status
              ? 2
              : 3;
        return [...t].sort(
          (t, n) => a(t) - a(n) || t.dueDate.localeCompare(n.dueDate),
        );
      }));
    var t = r(d[0]);
    const n = 7,
      a = /^(\d{4})-(\d{2})-(\d{2})$/;
    function l(t, n) {
      const l = a.exec(t),
        s = a.exec(n);
      return l && s
        ? Math.round(
            (Date.UTC(+s[1], +s[2] - 1, +s[3]) -
              Date.UTC(+l[1], +l[2] - 1, +l[3])) /
              864e5,
          )
        : NaN;
    }
    const s = (n) => n.toLocaleString((0, t.numberLocale)());
  },
  530,
  [311],
);
