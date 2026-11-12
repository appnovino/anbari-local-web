// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 469; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.resetDemoStaff = function () {
        t = null;
      }),
      (e.demoStaffRoute = function (t, d, h, T, O, S) {
        const [_, v, I, b] = t;
        if ('staff-money' !== _) return null;
        const w = s(O),
          D = (0, n.todayIn)('Asia/Tehran', O),
          k = (n) => {
            const a = w.people.find((a) => a.id === n);
            if (!a) throw S('staff_not_found', 404);
            return a;
          };
        if (!v && 'GET' === d) {
          const n = '1' === h.get('ended');
          n || c(w, D, O);
          const a = w.people
              .filter((a) => !!a.endedOn === n)
              .map((n) => u(w, n, D)),
            o = a.filter((n) => n.balance > 0);
          return {
            people: a,
            today: D,
            owedToman: o.reduce((n, a) => n + a.balance, 0),
            owedCount: o.length,
            formerCount: w.people.filter((n) => n.endedOn).length,
            members: [],
          };
        }
        if ('rates' === v)
          return (
            'PUT' === d &&
              (w.rates = (0, a.cleanRates)(T.rates, a.PAYROLL_1405)),
            { rates: w.rates, year: a.PAYROLL_1405 }
          );
        if ('people' === v && !I && 'POST' === d) {
          const n = String(T.name || '').trim();
          if (!n) throw S('invalid_request', 400);
          const a = {
            id: 'demo-staff-' + w.next++,
            name: n.slice(0, 80),
            ...(T.phone ? { phone: String(T.phone) } : {}),
            jobTitle: String(T.jobTitle || ''),
            autoSalary: !1,
            remind: !1,
            formal: !1,
            children: 0,
            married: !1,
            endNote: '',
            version: 1,
            salary: [],
          };
          return (w.people.push(a), { person: u(w, a, D) });
        }
        if ('lines' === v && I && 'delete' === b) {
          const n = w.lines.find((n) => n.id === I);
          if (!n) throw S('staff_line_not_found', 404);
          return (
            (w.lines = w.lines.filter((a) => a !== n)),
            n.expenseId && (0, o.demoDropExpense)(n.expenseId),
            { deleted: I, person: u(w, k(n.personId), D) }
          );
        }
        if ('people' === v && I) {
          const n = k(I);
          if (!b && 'GET' === d) {
            n.endedOn || c(w, D, O);
            const o = y(l(w, n.id)),
              t = f(w, n, D),
              d = (0, a.periodOf)(D);
            return {
              person: u(w, n, D),
              today: D,
              salary: {
                history: n.salary,
                ...(t ? { monthToman: t.amountToman } : {}),
                monthSalaryIn: o.some(
                  (n) => 'salary' === n.kind && n.period === d,
                ),
              },
              lines: o,
              periods: [...new Set([d, ...o.map((n) => n.period)])]
                .sort()
                .reverse(),
            };
          }
          if (!b && 'PATCH' === d) {
            if (n.endedOn) throw S('staff_ended', 409);
            if (T.version !== n.version) throw S('version_conflict', 409);
            for (const a of [
              'name',
              'phone',
              'jobTitle',
              'payDay',
              'autoSalary',
              'remind',
              'formal',
              'children',
              'married',
              'seniorityToman',
            ])
              a in T && (n[a] = null === T[a] ? void 0 : T[a]);
            if (n.autoSalary && !n.payDay) throw S('pay_day_required', 400);
            return (
              n.autoSalary && !n.autoFrom && (n.autoFrom = D),
              n.version++,
              { person: u(w, n, D) }
            );
          }
          if ('lines' === b && 'POST' === d) {
            if (n.endedOn) throw S('staff_ended', 409);
            if (String(T.occurredOn) > D) throw S('date_in_future', 400);
            let a = Number(T.amountToman),
              o = null;
            if ('salary' === T.kind && T.useRules) {
              const t = f(w, n, T.occurredOn, Number(T.overtimeHours) || 0);
              if (!t) throw S('salary_not_set', 409);
              ((a = t.amountToman), (o = t.detail));
            }
            if (!(a > 0)) throw S('invalid_request', 400);
            return {
              line: p(w, n, O, {
                kind: T.kind,
                amountToman: a,
                occurredOn: T.occurredOn,
                note: T.note,
                method: T.method,
                detail: o,
                source: T.source,
              }),
              person: u(w, n, D),
            };
          }
          if ('salary' === b && 'POST' === d) {
            if (n.endedOn) throw S('staff_ended', 409);
            const o = (0, a.baseOn)(n.salary, D);
            let t, d, s;
            if (void 0 !== T.amountToman)
              ((t = Number(T.amountToman)), (d = t - (o ?? 0)));
            else {
              if (null === o) throw S('salary_not_set', 409);
              const n = (0, a.changeToman)(o, T.change);
              ((d = 'up' === T.change.direction ? n : -n), (t = o + d));
            }
            if (t < 0) throw S('salary_below_zero', 409);
            const c = 'percent' === T.change?.mode ? ` ${T.change.value}%` : '',
              y = l(w, n.id).some(
                (n) => 'salary' === n.kind && n.period === (0, a.periodOf)(D),
              );
            if (null === o)
              n.salary.push({
                amountToman: t,
                effectiveFrom: D,
                createdAt: new Date(O).toISOString(),
              });
            else if (0 !== d) {
              if (!T.scope) throw S('salary_scope_required', 400);
              'always' === T.scope
                ? (n.salary.push({
                    amountToman: t,
                    effectiveFrom: D,
                    createdAt: new Date(O).toISOString(),
                  }),
                  y &&
                    (s = p(w, n, O, {
                      kind: d > 0 ? 'raise' : 'cut',
                      amountToman: Math.abs(d),
                      occurredOn: D,
                      note:
                        T.note ||
                        '\u062a\u063a\u06cc\u06cc\u0631 \u062d\u0642\u0648\u0642 \u0627\u0632 \u0627\u06cc\u0646 \u0645\u0627\u0647' +
                          c,
                      source: 'change',
                    })))
                : (s = p(w, n, O, {
                    kind: d > 0 ? 'raise' : 'cut',
                    amountToman: Math.abs(d),
                    occurredOn: D,
                    note:
                      T.note ||
                      '\u0641\u0642\u0637 \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647' +
                        c,
                    source: 'change',
                  }));
            }
            n.version++;
            const h = f(w, n, D);
            return {
              person: u(w, n, D),
              salary: {
                history: n.salary,
                ...(h ? { monthToman: h.amountToman } : {}),
              },
              ...(s ? { line: s } : {}),
            };
          }
          if ('payslip' === b) {
            const o = (0, a.isPeriod)(h.get('period'))
              ? h.get('period')
              : (0, a.periodOf)(D);
            return {
              person: u(w, n, D),
              shopName:
                '\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647',
              period: o,
              slip: (0, a.payslipFor)(
                l(w, n.id).filter((n) => n.period === o),
                o,
              ),
            };
          }
          if ('end' === b && 'POST' === d) {
            if (n.endedOn) throw S('staff_ended', 409);
            const a = String(T.endedOn);
            (T.finalSalary &&
              p(w, n, O, {
                kind: 'salary',
                amountToman: T.finalSalary.amountToman,
                occurredOn: a,
                note: T.finalSalary.note,
                source: 'end',
              }),
              T.payment &&
                p(w, n, O, {
                  kind: 'payment',
                  amountToman: T.payment.amountToman,
                  occurredOn: a,
                  method: T.payment.method,
                  note: '\u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628',
                  source: 'end',
                }),
              T.repaid &&
                p(w, n, O, {
                  kind: 'repaid',
                  amountToman: T.repaid.amountToman,
                  occurredOn: a,
                  note: '\u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628',
                  source: 'end',
                }));
            const o = !!n.userId;
            return (
              (n.endedOn = a),
              (n.endNote = String(T.note || '')),
              (n.autoSalary = !1),
              (n.remind = !1),
              n.version++,
              { person: u(w, n, D), accessRemoved: o }
            );
          }
        }
        throw S('invalid_request', 400);
      }));
    var n = r(_d[0]),
      a = r(_d[1]),
      o = r(_d[2]);
    let t = null;
    function d(o) {
      const t = (0, n.todayIn)('Asia/Tehran', o),
        d = (0, a.periodOf)(t),
        s = (0, a.shiftPeriod)(d, -1),
        l = new Date(o).toISOString(),
        u = (0, a.defaultRates)(a.PAYROLL_1405),
        f = (n, o = d) => {
          const s = (0, a.payDateIn)(o, n);
          return s > t ? t : s;
        },
        c = (0, a.payDateIn)((0, a.shiftPeriod)(d, -6), 1);
      let p = 0;
      const y = (n, o, t, d, s = '', u = {}) => ({
          id: 'demo-staff-line-' + ++p,
          personId: n,
          kind: o,
          amountToman: t,
          occurredOn: d,
          period: (0, a.periodOf)(d),
          note: s,
          source: 'manual',
          createdAt: l,
          ...u,
        }),
        h = (n) =>
          (0, a.computeSalary)({
            base: 16625550,
            rates: u,
            year: a.PAYROLL_1405,
            children: 1,
            married: !1,
            seniority: 5e5,
            overtimeHours: n,
          }),
        T = (n, a, o) => y(o, 'salary', n.net, a, '', { detail: n }),
        O = [
          {
            id: 'demo-staff-ali',
            name: '\u0639\u0644\u06cc \u0631\u0636\u0627\u06cc\u06cc',
            phone: '09121234567',
            jobTitle: '\u0641\u0631\u0648\u0634\u0646\u062f\u0647',
            userId: 'demo-user-ali',
            payDay: 1,
            autoSalary: !1,
            remind: !0,
            formal: !0,
            children: 1,
            married: !1,
            seniorityToman: 5e5,
            endNote: '',
            version: 1,
            salary: [{ amountToman: 16625550, effectiveFrom: c }],
          },
          {
            id: 'demo-staff-maryam',
            name: '\u0645\u0631\u06cc\u0645 \u0627\u062d\u0645\u062f\u06cc',
            jobTitle: '\u0627\u0646\u0628\u0627\u0631\u062f\u0627\u0631',
            userId: 'demo-user-maryam',
            payDay: 5,
            autoSalary: !0,
            autoFrom: (0, a.payDateIn)(d, 1),
            remind: !1,
            formal: !1,
            children: 0,
            married: !1,
            endNote: '',
            version: 1,
            salary: [{ amountToman: 75e5, effectiveFrom: c }],
          },
          {
            id: 'demo-staff-hassan',
            name: '\u062d\u0633\u0646 \u06a9\u0631\u06cc\u0645\u06cc',
            phone: '09351112233',
            jobTitle: '',
            autoSalary: !1,
            remind: !1,
            formal: !1,
            children: 0,
            married: !1,
            endNote: '',
            version: 1,
            salary: [],
          },
          {
            id: 'demo-staff-reza',
            name: '\u0631\u0636\u0627 \u0645\u062d\u0645\u062f\u06cc',
            jobTitle:
              '\u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u0648 \u0627\u0646\u0628\u0627\u0631\u062f\u0627\u0631',
            userId: 'demo-user-reza',
            autoSalary: !1,
            remind: !1,
            formal: !1,
            children: 0,
            married: !1,
            endNote: '',
            version: 1,
            salary: [],
          },
        ],
        S = h(0);
      return {
        people: O,
        lines: [
          T(S, (0, a.payDateIn)(s, 1), 'demo-staff-ali'),
          y('demo-staff-ali', 'payment', S.net, (0, a.payDateIn)(s, 20), '', {
            method: 'transfer',
          }),
          T(h(10), f(1), 'demo-staff-ali'),
          y(
            'demo-staff-ali',
            'bonus',
            2e6,
            f(1),
            '\u0641\u0631\u0648\u0634 \u062e\u0648\u0628 \u0645\u0647\u0631',
          ),
          y('demo-staff-ali', 'advance', 1e6, f(5), '', { method: 'cash' }),
          y(
            'demo-staff-ali',
            'deduction',
            15e4,
            f(8),
            '\u0644\u06cc\u0648\u0627\u0646 \u0634\u06a9\u0633\u062a',
          ),
          y(
            'demo-staff-ali',
            'payment',
            4e6,
            f(10),
            '\u0646\u0642\u062f \u0627\u0632 \u0635\u0646\u062f\u0648\u0642',
            { method: 'cash' },
          ),
          y(
            'demo-staff-ali',
            'payment',
            6e6,
            f(18),
            '\u06a9\u0627\u0631\u062a \u0628\u0647 \u06a9\u0627\u0631\u062a',
            { method: 'transfer' },
          ),
          y(
            'demo-staff-hassan',
            'advance',
            5e5,
            f(3),
            '\u0645\u0633\u0627\u0639\u062f\u0647',
            { method: 'cash' },
          ),
          y(
            'demo-staff-reza',
            'bonus',
            1e6,
            f(2),
            '\u067e\u0627\u062f\u0627\u0634',
          ),
          y('demo-staff-reza', 'payment', 1e6, f(4), '', { method: 'card' }),
        ],
        rates: u,
        next: 100,
      };
    }
    const s = (n) => (t ??= d(n)),
      l = (n, a) => n.lines.filter((n) => n.personId === a);
    function u(n, o, t) {
      const d = (0, a.staffBalance)(l(n, o.id)),
        s = (0, a.baseOn)(o.salary, t);
      return {
        id: o.id,
        name: o.name,
        ...(o.phone ? { phone: o.phone } : {}),
        jobTitle: o.jobTitle,
        ...(o.userId ? { userId: o.userId } : {}),
        ...(o.payDay ? { payDay: o.payDay } : {}),
        autoSalary: o.autoSalary,
        remind: o.remind,
        formal: o.formal,
        children: o.children,
        married: o.married,
        ...(void 0 !== o.seniorityToman
          ? { seniorityToman: o.seniorityToman }
          : {}),
        ...(null !== s ? { salaryToman: s } : {}),
        ...(o.endedOn ? { endedOn: o.endedOn } : {}),
        endNote: o.endNote,
        version: o.version,
        appAccess: !!o.userId && !o.endedOn,
        ...d,
        lines: l(n, o.id).length,
      };
    }
    function f(n, o, t, d = 0) {
      const s = (0, a.baseOn)(o.salary, t);
      if (null === s) return null;
      if (!o.formal) return { amountToman: s, detail: null };
      const l = (0, a.computeSalary)({
        base: s,
        rates: n.rates,
        year: a.PAYROLL_1405,
        children: o.children,
        married: o.married,
        seniority: o.seniorityToman ?? null,
        overtimeHours: d,
      });
      return { amountToman: l.net, detail: l };
    }
    function c(n, o, t) {
      for (const d of n.people) {
        if (!d.autoSalary || !d.payDay || !d.autoFrom || d.endedOn) continue;
        const s = new Set(
          l(n, d.id)
            .filter((n) => 'salary' === n.kind)
            .map((n) => n.period),
        );
        for (const l of (0, a.dueSalaryPeriods)({
          payDay: d.payDay,
          from: d.autoFrom,
          today: o,
          existing: s,
        })) {
          const a = f(n, d, l.payDate);
          a &&
            a.amountToman > 0 &&
            n.lines.push({
              id: 'demo-staff-line-' + n.next++,
              personId: d.id,
              kind: 'salary',
              amountToman: a.amountToman,
              occurredOn: l.payDate,
              period: l.period,
              note: '',
              source: 'auto',
              createdAt: new Date(t).toISOString(),
              ...(a.detail ? { detail: a.detail } : {}),
            });
        }
      }
    }
    function p(n, t, d, s) {
      const l = 'demo-staff-line-' + n.next++,
        u = a.STAFF_MONEY_OUT_KINDS.includes(s.kind),
        f = u ? 'demo-exp-staff-' + l : void 0;
      f &&
        (0, o.demoStaffExpense)(d, {
          id: f,
          label:
            ('advance' === s.kind
              ? '\u0645\u0633\u0627\u0639\u062f\u0647 '
              : '\u062d\u0642\u0648\u0642 ') + t.name,
          amountToman: s.amountToman,
          spentOn: s.occurredOn,
          method: s.method || 'cash',
          note: s.note || '',
        });
      const c = {
        id: l,
        personId: t.id,
        kind: s.kind,
        amountToman: s.amountToman,
        occurredOn: s.occurredOn,
        period: (0, a.periodOf)(s.occurredOn),
        note: s.note || '',
        ...(u ? { method: s.method || 'cash' } : {}),
        ...(s.detail ? { detail: s.detail } : {}),
        source: s.source || 'manual',
        createdAt: new Date(d).toISOString(),
        ...(f ? { expenseId: f } : {}),
      };
      return (n.lines.push(c), c);
    }
    const y = (n) =>
      [...n].sort(
        (n, a) =>
          a.occurredOn.localeCompare(n.occurredOn) ||
          (a.createdAt || '').localeCompare(n.createdAt || '') ||
          a.id.localeCompare(n.id),
      );
  },
  469,
  [443, 470, 468],
);
