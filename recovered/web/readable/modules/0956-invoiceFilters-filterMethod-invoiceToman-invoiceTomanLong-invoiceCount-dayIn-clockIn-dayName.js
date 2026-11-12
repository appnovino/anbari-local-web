// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 956; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, _a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'invoiceFilters', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'filterMethod', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'invoiceToman', {
        enumerable: !0,
        get: function () {
          return d;
        },
      }),
      Object.defineProperty(e, 'invoiceTomanLong', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'invoiceCount', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      Object.defineProperty(e, 'dayIn', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      Object.defineProperty(e, 'clockIn', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      (e.dayName = v),
      (e.dayLabel = w),
      (e.groupInvoiceDays = function (t, n, o = Date.now(), a = !1, r) {
        const u = h(new Date(o).toISOString(), n),
          c = [],
          l = new Map();
        for (const o of t) {
          const t = h(o.occurredAt, n);
          let a = l.get(t);
          (a ||
            ((a = { day: t, label: w(t, u), rows: [], side: '' }),
            l.set(t, a),
            c.push(a)),
            a.rows.push(o));
        }
        for (const t of c) {
          const n = r?.find((n) => n.day === t.day),
            o = y(n ? n.count : t.rows.length),
            u = n
              ? n.totalToman
              : t.rows.every((t) => void 0 !== t.totalToman)
                ? t.rows.reduce(
                    (t, n) => t + (n.corrected ? 0 : n.totalToman),
                    0,
                  )
                : void 0;
          t.side = a || void 0 === u ? o : `${o} \xb7 ${d(u)}`;
        }
        return c.sort((t, n) => n.day.localeCompare(t.day));
      }),
      (e.invoiceInitial = function (t) {
        const n = (t || '').trim().split(/\s+/).filter(Boolean),
          a = n.find((t) => !P.test(t)) || n[0];
        return a ? Array.from(a)[0].toUpperCase() : (0, o.L)('\u0645');
      }),
      Object.defineProperty(e, 'invoiceBuyer', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }),
      Object.defineProperty(e, 'invoiceTitle', {
        enumerable: !0,
        get: function () {
          return O;
        },
      }),
      (e.invoiceSub = function (t, n, r = !0) {
        return [
          r ? O(t) : '',
          void 0 !== t.lineCount
            ? (0, o.L)('{n} \u0642\u0644\u0645', { n: m(t.lineCount) })
            : '',
          (0, a.originBadge)(t) || '',
          L(t.occurredAt, n),
        ]
          .filter(Boolean)
          .join((0, o.partSep)());
      }),
      (e.invoicePill = j),
      (e.livePill = function (n) {
        const a = n.paidLaterToman || 0;
        if (
          n.corrected ||
          !a ||
          'cheque' === n.paymentMethod ||
          void 0 === n.paidToman ||
          void 0 === n.totalToman
        )
          return j(n);
        const r = n.paidToman + a;
        return r >= n.totalToman
          ? {
              text: (0, o.L)(
                '\u0646\u0633\u06cc\u0647 \xb7 \u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f',
              ),
              tone: 'success',
            }
          : {
              text: (0, o.L)(
                '\u0646\u0633\u06cc\u0647 \xb7 {amount} \u062f\u0627\u062f',
                { amount: (0, t.fullToman)(r) },
              ),
              tone: 'warning',
            };
      }),
      Object.defineProperty(e, 'matchesFilter', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }),
      Object.defineProperty(e, 'debtReminder', {
        enumerable: !0,
        get: function () {
          return C;
        },
      }));
    var t = _r(_d[0]),
      n = _r(_d[1]),
      o = _r(_d[2]),
      a = _r(_d[3]),
      r = _r(_d[4]),
      u = _r(_d[5]);
    const c = () => [
        { value: 'all', label: (0, o.L)('\u0647\u0645\u0647') },
        { value: 'sale', label: (0, o.L)('\u0641\u0631\u0648\u0634') },
        { value: 'credit', label: (0, o.L)('\u0646\u0633\u06cc\u0647') },
        { value: 'cheque', label: (0, o.L)('\u0686\u06a9') },
      ],
      l = (t) => ('all' === t ? void 0 : t),
      m = (t) => t.toLocaleString((0, o.numberLocale)()),
      d = (n) =>
        'rial' === (0, t.moneyUnit)()
          ? (0, o.L)('{amount} \u0631\u06cc\u0627\u0644', {
              amount: (0, t.fullToman)(n),
            })
          : (0, o.L)('{amount} \u062a', { amount: (0, t.fullToman)(n) }),
      s = (n) =>
        (0, t.shopUnitText)(
          (0, o.L)('{amount} \u062a\u0648\u0645\u0627\u0646', {
            amount: (0, t.fullToman)(n),
          }),
        ),
      y = (t) =>
        (0, o.L)('{n} \u0641\u0627\u06a9\u062a\u0648\u0631', { n: m(t) }),
      f = new Map();
    function p(t, n) {
      let o = f.get(n);
      if (!o) {
        try {
          o = new Intl.DateTimeFormat('en-US', {
            timeZone: n,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23',
          });
        } catch {
          o = new Intl.DateTimeFormat('en-US', {
            timeZone: 'Asia/Tehran',
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23',
          });
        }
        f.set(n, o);
      }
      const a = o.formatToParts(new Date(t)),
        r = (t) => a.find((n) => n.type === t)?.value || '00';
      return {
        day: `${r('year')}-${r('month')}-${r('day')}`,
        time: `${'24' === r('hour') ? '00' : r('hour')}:${r('minute')}`,
      };
    }
    const h = (t, n) => p(t, n).day,
      L = (t, n) => (0, o.localDigits)(p(t, n).time),
      b = (t, n) =>
        new Date(Date.parse(t + 'T12:00:00Z') + 864e5 * n)
          .toISOString()
          .slice(0, 10),
      T = () => [
        (0, o.L)('\u06cc\u06a9\u0634\u0646\u0628\u0647'),
        (0, o.L)('\u062f\u0648\u0634\u0646\u0628\u0647'),
        (0, o.L)('\u0633\u0647\u200c\u0634\u0646\u0628\u0647'),
        (0, o.L)('\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647'),
        (0, o.L)('\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647'),
        (0, o.L)('\u062c\u0645\u0639\u0647'),
        (0, o.L)('\u0634\u0646\u0628\u0647'),
      ];
    function v(t) {
      const [a, r, u] = t.split('-').map(Number),
        c = (0, n.calFromGregorian)(a, r, u);
      return `${T()[new Date(Date.UTC(a, r - 1, u)).getUTCDay()]} ${(0, o.localDigits)(String(c.day))} ${(0, n.calMonthNames)()[c.month - 1]}`;
    }
    function w(t, n) {
      const a = v(t);
      return t === n
        ? (0, o.L)('\u0627\u0645\u0631\u0648\u0632 \xb7 {day}', { day: a })
        : t === b(n, -1)
          ? (0, o.L)('\u062f\u06cc\u0631\u0648\u0632 \xb7 {day}', { day: a })
          : a;
    }
    const P =
      /^(?:\u0622\u0642\u0627\u06cc|\u0622\u0642\u0627|\u062e\u0627\u0646\u0645|\u062f\u06a9\u062a\u0631|\u0645\u0647\u0646\u062f\u0633|\u062d\u0627\u062c|\u062d\u0627\u062c\u06cc|\u0641\u0631\u0648\u0634\u06af\u0627\u0647|\u0645\u063a\u0627\u0632\u0647|\u0634\u0631\u06a9\u062a|mrs?\.?|ms\.?|dr\.?)$/i;
    const D = (t) =>
        t.contactName ||
        (t.contactId
          ? (0, o.L)('\u0645\u0634\u062a\u0631\u06cc')
          : t.buyerName || (0, r.invoiceLabels)().unknownBuyer),
      O = (t) =>
        (0, o.L)('\u0641\u0627\u06a9\u062a\u0648\u0631 {no}', {
          no: (0, o.localDigits)(String(t.receiptNo)),
        });
    function j(n) {
      if (n.corrected)
        return {
          text: (0, o.L)('\u0644\u063a\u0648 \u0634\u062f\u0647'),
          tone: 'muted',
        };
      const a = (0, r.invoiceLabels)(),
        u = (0, r.invoicePayment)(n.paymentMethod, n.paidToman, n.totalToman);
      return 'statusCheque' === u.key
        ? { text: a.statusCheque, tone: 'cheque' }
        : 'statusUnknown' === u.key
          ? {
              text: {
                cash: (0, o.L)('\u0646\u0642\u062f\u06cc'),
                card: (0, o.L)('\u06a9\u0627\u0631\u062a'),
                credit: (0, o.L)('\u0646\u0633\u06cc\u0647'),
                cheque: (0, o.L)('\u0686\u06a9'),
              }[n.paymentMethod],
              tone: 'muted',
            }
          : 'statusPartial' === u.key
            ? {
                text: (0, o.L)(
                  '\u0646\u0633\u06cc\u0647 \xb7 {amount} \u062f\u0627\u062f',
                  { amount: (0, t.fullToman)(n.paidToman) },
                ),
                tone: 'warning',
              }
            : { text: a[u.key], tone: u.tone };
    }
    const M = (t, n) =>
        'all' === n ||
        ('sale' === n
          ? 'cash' === t.paymentMethod || 'card' === t.paymentMethod
          : t.paymentMethod === n),
      C = (n, a, r, c) =>
        c?.trim()
          ? (0, u.fillMessage)(c.trim(), {
              name: n,
              shop: a,
              amount: (0, t.fullToman)(r),
            })
          : (0, t.shopUnitText)(
              (0, o.L)(
                '\u0633\u0644\u0627\u0645 {name} \u0639\u0632\u06cc\u0632\u060c \u0648\u0642\u062a \u0628\u062e\u06cc\u0631. \u0627\u0632 {shop} \u067e\u06cc\u0627\u0645 \u0645\u06cc\u200c\u062f\u0647\u06cc\u0645: \u0645\u0627\u0646\u062f\u0647\u200c\u06cc \u062d\u0633\u0627\u0628 \u0634\u0645\u0627 {amount} \u062a\u0648\u0645\u0627\u0646 \u0627\u0633\u062a. \u0647\u0631 \u0648\u0642\u062a \u0641\u0631\u0635\u062a \u06a9\u0631\u062f\u06cc\u062f \u0644\u0637\u0641\u0627\u064b \u062a\u0633\u0648\u06cc\u0647 \u0628\u0641\u0631\u0645\u0627\u06cc\u06cc\u062f. \u0645\u0645\u0646\u0648\u0646 \u0627\u0632 \u0634\u0645\u0627.',
                { name: n, shop: a, amount: (0, t.fullToman)(r) },
              ),
            );
  },
  956,
  [435, 440, 311, 854, 803, 821],
);
