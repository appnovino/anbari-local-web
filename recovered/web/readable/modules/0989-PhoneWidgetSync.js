// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 989; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PhoneWidgetSync = function (e) {
        return (0, S.phoneWidgetsAvailable)() ? (0, v.jsx)(A, { ...e }) : null;
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      s = (e = n) && e.__esModule ? e : { default: e },
      o = r(d[2]),
      l = r(d[3]),
      u = r(d[4]),
      c = r(d[5]),
      h = r(d[6]),
      p = r(d[7]),
      w = r(d[8]),
      f = r(d[9]),
      y = r(d[10]),
      S = r(d[11]),
      v = r(d[12]);
    const x = 6e5;
    function A({
      shop: e,
      demo: n,
      chequesAllowed: v,
      salesToday: A,
      lowCount: W,
      lowNames: b,
    }) {
      const E = !!e && !n,
        M = e?.timezone || 'Asia/Tehran',
        O = E && (0, p.expensesAllowedFor)(e),
        T = E && !0 === v,
        [_, q] = (0, t.useState)(() => Date.now()),
        P = (0, f.monthOf)((0, f.todayIn)(M)),
        R = (0, f.monthRange)(P.year, P.month),
        j = (0, o.useSwr)(E ? (0, o.scoped)(e.id, 'to-buy') : null, () =>
          (0, l.listToBuy)(e),
        ),
        C = (0, o.useSwr)(
          E ? (0, o.scoped)(e.id, 'to-buy-routines') : null,
          () => (0, l.listRoutines)(e),
        ),
        D = (0, o.useSwr)(T ? (0, o.scoped)(e.id, 'cheques') : null, () =>
          (0, u.loadAllCheques)(e),
        ),
        B = (0, o.useSwr)(
          O ? (0, o.scoped)(e.id, 'expense-reminders') : null,
          () => (0, h.listExpenseReminders)(e),
        ),
        L = (0, o.useSwr)(
          O ? (0, o.scoped)(e.id, 'expenses:' + R.from) : null,
          () => (0, h.listExpenses)(e, R.from, R.to),
        ),
        N = (0, o.useSwr)(
          T ? (0, o.scoped)(e.id, 'ledger-summary') : null,
          () => (0, c.readLedgerSummary)(e),
        ),
        k = (0, o.useSwr)(E ? (0, o.scoped)(e.id, 'activity:6') : null, () =>
          (0, c.readActivity)(e, { limit: 6 }),
        );
      (0, t.useEffect)(() => {
        const e = s.default.addEventListener('change', (e) => {
          'active' === e && q(Date.now());
        });
        return () => e.remove();
      }, []);
      const z = (0, t.useMemo)(() => {
          if (!E) return null;
          const t = new Date(_),
            n = void 0 !== j.data || void 0 !== C.data;
          return (0, y.buildWidgetSnapshot)({
            shopName: e.name || '',
            now: t,
            salesToday: A,
            expensesMonth:
              O && L.data
                ? {
                    totalToman: L.data.totals.totalToman,
                    count: L.data.totals.count,
                  }
                : null,
            ledger:
              T && N.data
                ? { theyOweMe: N.data.theyOweMe, iOwe: N.data.iOwe }
                : null,
            cheques: T && D.data ? D.data : null,
            reminders: n
              ? (0, w.homeAlarms)(
                  {
                    toBuy: j.data,
                    routines: C.data,
                    cheques: T ? D.data : null,
                    expenses: O ? B.data : null,
                  },
                  M,
                  _,
                )
              : null,
            history: k.data
              ? k.data.items.map((e) => ({ text: e.text, at: e.at }))
              : null,
            lowStock: 'number' == typeof W ? { count: W, names: b } : null,
          });
        }, [
          E,
          _,
          e?.id,
          e?.name,
          A,
          O,
          T,
          L.data,
          N.data,
          D.data,
          j.data,
          C.data,
          B.data,
          k.data,
          W,
          b.join('|'),
          M,
        ]),
        F = (0, t.useRef)(null);
      return (
        (0, t.useEffect)(() => {
          z
            ? (F.current &&
                (0, y.sameWidgetContent)(F.current.snapshot, z) &&
                z.at - F.current.at < x) ||
              ((0, S.writePhoneWidgets)((0, y.snapshotJson)(z)),
              (F.current = { snapshot: z, at: z.at }))
            : E || ((0, S.clearPhoneWidgets)(), (F.current = null));
        }, [z, E]),
        (0, t.useEffect)(
          () => () => {
            (0, S.clearPhoneWidgets)();
          },
          [e?.id],
        ),
        null
      );
    }
  },
  989,
  [2, 203, 489, 613, 626, 519, 522, 623, 683, 443, 990, 991, 338],
);
