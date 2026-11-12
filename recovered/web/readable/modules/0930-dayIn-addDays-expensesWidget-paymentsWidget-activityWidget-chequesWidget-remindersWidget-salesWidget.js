// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 930; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.dayIn = t),
      (_e.addDays = n),
      (_e.expensesWidget = function (e) {
        const t = [...(e?.expenses || [])].sort(
          (e, t) =>
            t.spentOn.localeCompare(e.spentOn) ||
            (t.createdAt || '').localeCompare(e.createdAt || ''),
        );
        return {
          totalToman: e?.totals
            ? e.totals.totalToman
            : t.reduce((e, t) => e + (Number(t.amountToman) || 0), 0),
          count: e?.totals ? e.totals.count : t.length,
          last: t
            .slice(0, 3)
            .map((e) => ({
              id: e.id,
              label: e.label,
              amountToman: Number(e.amountToman) || 0,
              spentOn: e.spentOn,
            })),
        };
      }),
      (_e.paymentsWidget = function (e, n, a) {
        let u = 0,
          s = 0,
          c = 0;
        for (const l of e || [])
          ('ledger_in' !== l.type && 'ledger_out' !== l.type) ||
            (t(l.at, a) === n &&
              (c++, 'ledger_in' === l.type ? (u += o(l)) : (s += o(l))));
        return { inToman: u, outToman: s, count: c };
      }),
      (_e.activityWidget = function (e, t = 5) {
        return [...(e || [])]
          .sort((e, t) => t.at.localeCompare(e.at))
          .slice(0, t);
      }),
      (_e.chequesWidget = function (e, t, o = 7) {
        const a = n(t, o),
          u = (e || [])
            .filter(
              (e) => 'pending' === e.status && e.dueDate >= t && e.dueDate <= a,
            )
            .sort(
              (e, t) =>
                e.dueDate.localeCompare(t.dueDate) || e.id.localeCompare(t.id),
            );
        return {
          rows: u.slice(0, 3),
          count: u.length,
          receiveToman: u
            .filter((e) => 'receive' === e.direction)
            .reduce((e, t) => e + (t.amountToman || 0), 0),
          payToman: u
            .filter((e) => 'pay' === e.direction)
            .reduce((e, t) => e + (t.amountToman || 0), 0),
        };
      }),
      (_e.remindersWidget = function (e, n, o) {
        const a = (e || [])
          .filter((e) => t(e.at, o) === n)
          .sort((e, t) => e.at - t.at);
        return { rows: a.slice(0, 3), count: a.length };
      }),
      (_e.salesWidget = function (e, n, o, a) {
        const u =
            void 0 === e.revenue ||
            null === e.revenue ||
            '' === e.revenue ||
            e.incomplete
              ? null
              : Number(e.revenue) || 0,
          s = (n || []).filter(
            (e) => 'sold' === e.type && t(e.at, a) === o,
          ).length;
        return { revenue: u, sales: s, units: Number(e.sold) || 0 };
      }),
      (_e.lowWidget = function (t, n = []) {
        const o = (0, e.lowStockList)(t, n, 1e3);
        if (o.length) return { rows: o.slice(0, 3), count: o.length, out: !1 };
        const a = (0, e.outOfStockList)(t, 1e3);
        return { rows: a.slice(0, 3), count: a.length, out: !0 };
      }));
    var e = r(_d[0]);
    function t(e, t = 'Asia/Tehran') {
      const n = e instanceof Date ? e : new Date(e);
      if (Number.isNaN(n.getTime())) return '';
      try {
        const e = Object.fromEntries(
          new Intl.DateTimeFormat('en-CA', {
            timeZone: t,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })
            .formatToParts(n)
            .map((e) => [e.type, e.value]),
        );
        if (e.year && e.month && e.day) return `${e.year}-${e.month}-${e.day}`;
      } catch {}
      return n.toISOString().slice(0, 10);
    }
    function n(e, t) {
      const [n, o, a] = e.split('-').map(Number);
      return new Date(Date.UTC(n, (o || 1) - 1, a || 1) + 864e5 * t)
        .toISOString()
        .slice(0, 10);
    }
    const o = (e) => {
      const t = e.amount ?? e.raw?.amount,
        n = Number(t);
      return null != t && '' !== t && Number.isFinite(n) ? n : 0;
    };
  },
  930,
  [455],
);
