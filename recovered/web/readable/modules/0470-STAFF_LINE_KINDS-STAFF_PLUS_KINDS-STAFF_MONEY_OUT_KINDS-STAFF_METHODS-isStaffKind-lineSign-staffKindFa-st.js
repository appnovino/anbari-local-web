// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 470; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'STAFF_LINE_KINDS', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'STAFF_PLUS_KINDS', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      Object.defineProperty(e, 'STAFF_MONEY_OUT_KINDS', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      Object.defineProperty(e, 'STAFF_METHODS', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'isStaffKind', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'lineSign', {
        enumerable: !0,
        get: function () {
          return d;
        },
      }),
      Object.defineProperty(e, 'staffKindFa', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'staffMethodFa', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'STAFF_MAX_TOMAN', {
        enumerable: !0,
        get: function () {
          return m;
        },
      }),
      (e.staffBalance = function (t) {
        let n = 0,
          r = 0,
          o = 0;
        for (const a of t)
          'salary' === a.kind || 'bonus' === a.kind || 'raise' === a.kind
            ? (n += a.amountToman)
            : 'deduction' === a.kind || 'cut' === a.kind
              ? (n -= a.amountToman)
              : 'payment' === a.kind || 'advance' === a.kind
                ? (r += a.amountToman)
                : 'repaid' === a.kind && (o += a.amountToman);
        const a = n - r + o;
        return {
          total: n,
          paid: r,
          balance: a,
          status: a > 0 ? 'owed' : a < 0 ? 'owes' : 'settled',
          paidShare:
            n > 0
              ? Math.max(0, Math.min(100, Math.round((100 * r) / n)))
              : a >= 0
                ? 100
                : 0,
        };
      }),
      Object.defineProperty(e, 'signedAmount', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'isoOf', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      Object.defineProperty(e, 'isPeriod', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      (e.periodOf = b),
      (e.periodParts = v),
      (e.shiftPeriod = L),
      (e.periodRange = function (n) {
        const r = v(n);
        return {
          from: y((0, t.toGregorian)(r.year, r.month, 1)),
          to: y(
            (0, t.toGregorian)(
              r.year,
              r.month,
              (0, t.jalaliMonthLength)(r.year, r.month),
            ),
          ),
        };
      }),
      (e.payDateIn = x),
      Object.defineProperty(e, 'JALALI_MONTHS_FA', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }),
      (e.periodTitle = $),
      (e.jalaliDayTitle = function (r) {
        const [o, a, i] = r.split('-').map(Number),
          c = (0, t.toJalali)(o, a, i);
        return P(c.day) + ' ' + (0, n.L)(T[c.month - 1]) + ' ' + P(c.year);
      }),
      (e.jalaliShortDay = M),
      (e.baseOn = function (t, n) {
        let r = null;
        for (const o of t)
          o.effectiveFrom <= n &&
            (!r ||
              o.effectiveFrom > r.effectiveFrom ||
              (o.effectiveFrom === r.effectiveFrom &&
                (o.createdAt || '') >= (r.createdAt || ''))) &&
            (r = o);
        return r ? r.amountToman : null;
      }),
      (e.changeToman = function (t, n) {
        return Math.max(
          0,
          Math.round('percent' === n.mode ? (t * n.value) / 100 : n.value),
        );
      }),
      (e.dueSalaryPeriods = function ({
        payDay: t,
        from: n,
        today: r,
        endedOn: o,
        existing: a,
        limit: i = 24,
      }) {
        const c = [];
        if (!(t >= 1 && t <= 31) || n > r) return c;
        for (let u = b(n), d = 0; d <= i + 1; d++, u = L(u, 1)) {
          const i = x(u, t);
          if (i > r) break;
          i < n ||
            (o && i > o) ||
            a.has(u) ||
            c.push({ period: u, payDate: i });
        }
        return c.slice(-i);
      }),
      Object.defineProperty(e, 'PAYROLL_1405', {
        enumerable: !0,
        get: function () {
          return j;
        },
      }),
      Object.defineProperty(e, 'RATE_KEYS', {
        enumerable: !0,
        get: function () {
          return O;
        },
      }),
      (e.defaultRates = S),
      (e.cleanRates = function (t, n = j) {
        const r = S(n),
          o = t && 'object' == typeof t ? t : {},
          a = {
            ...r,
            base: k(o.base, 0, m, r.base),
            tax: 'boolean' == typeof o.tax ? o.tax : r.tax,
          };
        for (const t of O) {
          const n = o[t] && 'object' == typeof o[t] ? o[t] : {},
            i =
              'percent' === n.mode || 'amount' === n.mode ? n.mode : r[t].mode;
          a[t] = {
            on: 'boolean' == typeof n.on ? n.on : r[t].on,
            mode: i,
            value: k(n.value, 0, 'percent' === i ? 1e3 : m, r[t].value),
          };
        }
        return a;
      }),
      (e.salaryTax = N),
      (e.computeSalary = function ({
        base: t,
        rates: n,
        year: r,
        children: o = 0,
        married: a = !1,
        seniority: i,
        overtimeHours: c = 0,
      }) {
        const u = (n, r = t) =>
            n.on ? ('percent' === n.mode ? F(r, n.value) : n.value) : 0,
          d = u(n.housing),
          s = u(n.grocery),
          l = a ? u(n.marriage) : 0,
          m = Math.max(0, Math.round(o)),
          p =
            m && n.child.on
              ? m *
                ('percent' === n.child.mode
                  ? F(r.minWage, n.child.value)
                  : n.child.value)
              : 0,
          f = n.seniority.on
            ? (i ??
              ('percent' === n.seniority.mode
                ? F(t, n.seniority.value)
                : n.seniority.value))
            : 0,
          y = Math.max(0, Number(c) || 0),
          h = 'percent' === n.overtime.mode ? n.overtime.value : 0,
          b =
            n.overtime.on && y > 0
              ? 'percent' === n.overtime.mode
                ? Math.round((((y * t) / (r.hoursPerMonth || 220)) * h) / 100)
                : Math.round(y * n.overtime.value)
              : 0,
          v = t + d + s + p + l + f + b,
          L = v - p,
          x = n.insurance.on
            ? 'percent' === n.insurance.mode
              ? F(L, n.insurance.value)
              : n.insurance.value
            : 0,
          T = n.tax ? N(v - x, r.taxSteps) : 0,
          P = n.employer.on
            ? 'percent' === n.employer.mode
              ? F(L, n.employer.value)
              : n.employer.value
            : 0;
        return {
          year: r.year,
          base: t,
          housing: d,
          grocery: s,
          child: p,
          children: m,
          marriage: l,
          seniority: f,
          overtimeHours: y,
          overtime: b,
          overtimePercent: h,
          earnings: v,
          insured: L,
          insurance: x,
          insurancePercent:
            'percent' === n.insurance.mode ? n.insurance.value : 0,
          tax: T,
          employer: P,
          employerPercent: 'percent' === n.employer.mode ? n.employer.value : 0,
          net: v - x - T,
        };
      }),
      (e.payrollYearFor = function (t, n) {
        const r = [...t].sort((t, n) => t.year - n.year);
        return [...r].reverse().find((t) => t.year <= n) || r[0] || j;
      }),
      (e.payslipFor = function (t, r) {
        const o = t
            .filter((t) => t.period === r)
            .sort(
              (t, n) =>
                t.occurredOn.localeCompare(n.occurredOn) ||
                (t.createdAt || '').localeCompare(n.createdAt || ''),
            ),
          a = [],
          i = [],
          c = [];
        let u = 0,
          d = 0,
          s = 0,
          l = !1,
          m = 0,
          p = 0,
          f = 0;
        const y = (t, n, r, o) => {
          o && t.push({ key: n, label: r, amount: o });
        };
        for (const t of o) {
          const r = t.detail;
          'salary' === t.kind && r
            ? ((l = !0),
              y(
                a,
                'base',
                (0, n.L)('\u062d\u0642\u0648\u0642 \u067e\u0627\u06cc\u0647'),
                r.base,
              ),
              y(
                a,
                'housing',
                (0, n.L)('\u062d\u0642 \u0645\u0633\u06a9\u0646'),
                r.housing,
              ),
              y(
                a,
                'grocery',
                (0, n.L)(
                  '\u0628\u0646 \u062e\u0648\u0627\u0631\u0628\u0627\u0631',
                ),
                r.grocery,
              ),
              y(
                a,
                'child',
                r.children
                  ? (0, n.L)(
                      '\u062d\u0642 \u0627\u0648\u0644\u0627\u062f ({n} \u0641\u0631\u0632\u0646\u062f)',
                      { n: A(r.children) },
                    )
                  : (0, n.L)('\u062d\u0642 \u0627\u0648\u0644\u0627\u062f'),
                r.child,
              ),
              y(
                a,
                'marriage',
                (0, n.L)('\u062d\u0642 \u062a\u0623\u0647\u0644'),
                r.marriage,
              ),
              y(
                a,
                'seniority',
                (0, n.L)(
                  '\u067e\u0627\u06cc\u0647 \u0633\u0646\u0648\u0627\u062a',
                ),
                r.seniority,
              ),
              y(
                a,
                'overtime',
                (0, n.L)(
                  '\u0627\u0636\u0627\u0641\u0647\u200c\u06a9\u0627\u0631 ({hours} \u0633\u0627\u0639\u062a \xd7 {percent}\u066a)',
                  { hours: A(r.overtimeHours), percent: A(r.overtimePercent) },
                ),
                r.overtime,
              ),
              (p += r.insurance),
              (m = r.insurancePercent || m),
              (f += r.tax),
              (u += r.employer),
              (d = r.employerPercent || d),
              (s += r.overtimeHours))
            : 'salary' === t.kind
              ? y(
                  a,
                  'salary:' + t.id,
                  t.note
                    ? (0, n.L)('\u062d\u0642\u0648\u0642 ({note})', {
                        note: t.note,
                      })
                    : (0, n.L)('\u062d\u0642\u0648\u0642'),
                  t.amountToman,
                )
              : 'bonus' === t.kind
                ? y(
                    a,
                    'bonus:' + t.id,
                    t.note
                      ? (0, n.L)('\u067e\u0627\u062f\u0627\u0634 ({note})', {
                          note: t.note,
                        })
                      : (0, n.L)('\u067e\u0627\u062f\u0627\u0634'),
                    t.amountToman,
                  )
                : 'raise' === t.kind
                  ? y(
                      a,
                      'raise:' + t.id,
                      t.note
                        ? (0, n.L)(
                            '\u0627\u0641\u0632\u0627\u06cc\u0634 \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647 ({note})',
                            { note: t.note },
                          )
                        : (0, n.L)(
                            '\u0627\u0641\u0632\u0627\u06cc\u0634 \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647',
                          ),
                      t.amountToman,
                    )
                  : 'advance' === t.kind
                    ? y(
                        i,
                        'advance:' + t.id,
                        (0, n.L)(
                          '\u0645\u0633\u0627\u0639\u062f\u0647 ({date})',
                          { date: M(t.occurredOn) },
                        ),
                        t.amountToman,
                      )
                    : 'deduction' === t.kind
                      ? y(
                          i,
                          'deduction:' + t.id,
                          t.note
                            ? (0, n.L)(
                                '\u06a9\u0633\u0648\u0631\u0627\u062a ({note})',
                                { note: t.note },
                              )
                            : (0, n.L)('\u06a9\u0633\u0648\u0631\u0627\u062a'),
                          t.amountToman,
                        )
                      : 'cut' === t.kind
                        ? y(
                            i,
                            'cut:' + t.id,
                            t.note
                              ? (0, n.L)(
                                  '\u06a9\u0627\u0647\u0634 \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647 ({note})',
                                  { note: t.note },
                                )
                              : (0, n.L)(
                                  '\u06a9\u0627\u0647\u0634 \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647',
                                ),
                            t.amountToman,
                          )
                        : 'payment' === t.kind &&
                          c.push({
                            occurredOn: t.occurredOn,
                            amount: t.amountToman,
                          });
        }
        l &&
          (i.unshift({
            key: 'tax',
            label: f
              ? (0, n.L)(
                  '\u0645\u0627\u0644\u06cc\u0627\u062a \u062d\u0642\u0648\u0642',
                )
              : (0, n.L)(
                  '\u0645\u0627\u0644\u06cc\u0627\u062a \u062d\u0642\u0648\u0642 (\u0632\u06cc\u0631 \u0633\u0642\u0641 \u0645\u0639\u0627\u0641\u06cc\u062a)',
                ),
            amount: f,
          }),
          i.unshift({
            key: 'insurance',
            label: (0, n.L)(
              '\u0628\u06cc\u0645\u0647 \u0633\u0647\u0645 \u06a9\u0627\u0631\u0645\u0646\u062f ({percent}\u066a)',
              { percent: A(m) },
            ),
            amount: p,
          }));
        const h = a.reduce((t, n) => t + n.amount, 0),
          b = i.reduce((t, n) => t + n.amount, 0),
          v = h - b,
          L = c.reduce((t, n) => t + n.amount, 0);
        return {
          period: r,
          earnings: a,
          deductions: i,
          earningsTotal: h,
          deductionsTotal: b,
          net: v,
          paid: L,
          left: v - L,
          payments: c,
          employer: u,
          employerPercent: d,
          overtimeHours: s,
          formal: l,
          empty: !o.length,
        };
      }),
      (e.endSettlement = function ({
        balance: n,
        base: r,
        endedOn: o,
        monthSalaryIn: a,
      }) {
        const [i, c, u] = o.split('-').map(Number),
          d = (0, t.toJalali)(i, c, u),
          s = (0, t.jalaliMonthLength)(d.year, d.month),
          l = !a && r && r > 0 ? Math.round((r * d.day) / s) : 0;
        return {
          days: d.day,
          monthDays: s,
          partialSalary: l,
          withPartial: n + l,
          without: n,
        };
      }),
      (e.payslipText = function (t, o) {
        const a = (t) => t.map((t) => `${t.label}: ${_(t.amount)}`);
        return [
          (0, n.L)(
            '\u0641\u06cc\u0634 \u062d\u0642\u0648\u0642\u06cc {month}',
            { month: $(t.period) },
          ),
          o.person +
            (o.jobTitle ? ' \xb7 ' + o.jobTitle : '') +
            (o.shopName ? ' \xb7 ' + o.shopName : ''),
          '',
          (0, n.L)('\u0645\u0632\u0627\u06cc\u0627'),
          ...a(t.earnings),
          (0, n.L)('\u062c\u0645\u0639 \u0645\u0632\u0627\u06cc\u0627: {n}', {
            n: _(t.earningsTotal),
          }),
          '',
          (0, n.L)('\u06a9\u0633\u0648\u0631\u0627\u062a'),
          ...a(t.deductions),
          (0, n.L)(
            '\u062c\u0645\u0639 \u06a9\u0633\u0648\u0631\u0627\u062a: {n}',
            { n: _(t.deductionsTotal) },
          ),
          '',
          (0, r.shopUnitText)(
            (0, n.L)(
              '\u062e\u0627\u0644\u0635 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc: {n} \u062a\u0648\u0645\u0627\u0646',
              { n: _(t.net) },
            ),
          ),
          (0, n.L)(
            '\u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f\u0647 \u062a\u0627 \u0627\u0645\u0631\u0648\u0632: {n}',
            { n: _(t.paid) },
          ),
          (0, n.L)('\u0645\u0627\u0646\u062f\u0647: {n}', { n: _(t.left) }),
        ].join('\n');
      }),
      (e.payslipHtml = function (
        t,
        o,
        { fontFace: a = '', autoPrint: i = !1 } = {},
      ) {
        const c = (t) =>
          t
            .map(
              (t) =>
                `<tr><td>${w(t.label)}</td><td class="n">${_(t.amount)}</td></tr>`,
            )
            .join('');
        return `<!doctype html><html lang="fa" dir="rtl"><head><meta charset="utf-8"><title>${w((0, n.L)('\u0641\u06cc\u0634 \u062d\u0642\u0648\u0642\u06cc {month}', { month: $(t.period) }))}</title><style>${a}\n@page{size:A4 portrait;margin:14mm 12mm}body{font-family:Vazirmatn,Tahoma,sans-serif;color:#111;margin:0;font-size:13px}h1{font-size:20px;margin:0 0 4px}.sub{color:#555;margin:0 0 14px}\ntable{width:100%;border-collapse:collapse;margin:6px 0 10px}td{padding:6px 4px;border-bottom:1px solid #e3e3e3}td.n{text-align:left;direction:ltr;font-weight:600}\n.t td{font-weight:700;border-top:2px solid #111}.sec{font-weight:700;margin-top:12px}.ok{color:#0b7a55}.bad{color:#b3261e}.net{margin:12px 0;padding:12px;border:2px solid #0f766e;border-radius:10px;display:flex;justify-content:space-between;font-size:18px;font-weight:700}\n.info{margin-top:10px;padding:8px;border:1px dashed #999;border-radius:8px;color:#444}*{print-color-adjust:exact;-webkit-print-color-adjust:exact}</style></head><body>\n<h1>${w((0, n.L)('\u0641\u06cc\u0634 \u062d\u0642\u0648\u0642\u06cc'))} \xb7 ${w($(t.period))}</h1><p class="sub">${w(o.person)}${o.jobTitle ? ' \xb7 ' + w(o.jobTitle) : ''}${o.shopName ? ' \xb7 ' + w(o.shopName) : ''}</p>\n<div class="sec ok">${w((0, n.L)('\u0645\u0632\u0627\u06cc\u0627'))}</div><table>${c(t.earnings)}<tr class="t"><td>${w((0, n.L)('\u062c\u0645\u0639 \u0645\u0632\u0627\u06cc\u0627'))}</td><td class="n">${_(t.earningsTotal)}</td></tr></table>\n<div class="sec bad">${w((0, n.L)('\u06a9\u0633\u0648\u0631\u0627\u062a'))}</div><table>${c(t.deductions)}<tr class="t"><td>${w((0, n.L)('\u062c\u0645\u0639 \u06a9\u0633\u0648\u0631\u0627\u062a'))}</td><td class="n">${_(t.deductionsTotal)}</td></tr></table>\n<div class="net"><span>${w((0, n.L)('\u062e\u0627\u0644\u0635 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc'))}</span><span>${_(t.net)} ${w((0, r.shopUnitText)((0, n.L)('\u062a\u0648\u0645\u0627\u0646')))}</span></div>\n<table><tr><td>${w((0, n.L)('\u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f\u0647 \u062a\u0627 \u0627\u0645\u0631\u0648\u0632'))}</td><td class="n">${_(t.paid)}</td></tr><tr><td>${w((0, n.L)('\u0645\u0627\u0646\u062f\u0647'))}</td><td class="n">${_(t.left)}</td></tr></table>\n${t.employer ? `<div class="info">${w((0, n.L)('\u0628\u0631\u0627\u06cc \u0627\u0637\u0644\u0627\u0639: \u0628\u06cc\u0645\u0647 \u0633\u0647\u0645 \u06a9\u0627\u0631\u0641\u0631\u0645\u0627 ({percent}\u066a)', { percent: A(t.employerPercent) }))}: ${_(t.employer)}</div>` : ''}\n${i ? '<script>window.onload=()=>setTimeout(()=>window.print(),300)<\/script>' : ''}</body></html>`;
      }));
    var t = _r(_d[0]),
      n = _r(_d[1]),
      r = _r(_d[2]);
    const o = [
        'salary',
        'bonus',
        'raise',
        'cut',
        'payment',
        'advance',
        'deduction',
        'repaid',
      ],
      a = ['salary', 'bonus', 'raise', 'repaid'],
      i = ['payment', 'advance'],
      c = ['cash', 'card', 'transfer', 'cheque'],
      u = (t) => 'string' == typeof t && o.includes(t),
      d = (t) => (a.includes(t) ? 1 : -1),
      s = (0, n.localized)({
        salary: '\u062d\u0642\u0648\u0642',
        bonus: '\u067e\u0627\u062f\u0627\u0634',
        raise:
          '\u0627\u0641\u0632\u0627\u06cc\u0634 \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647',
        cut: '\u06a9\u0627\u0647\u0634 \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647',
        payment: '\u067e\u0631\u062f\u0627\u062e\u062a',
        advance: '\u0645\u0633\u0627\u0639\u062f\u0647',
        deduction: '\u06a9\u0633\u0631 \u0627\u0632 \u062d\u0642\u0648\u0642',
        repaid:
          '\u0628\u0627\u0632\u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0627\u0631\u0645\u0646\u062f',
      }),
      l = (0, n.localized)({
        cash: '\u0646\u0642\u062f',
        card: '\u06a9\u0627\u0631\u062a',
        transfer:
          '\u06a9\u0627\u0631\u062a\u200c\u0628\u0647\u200c\u06a9\u0627\u0631\u062a',
        cheque: '\u0686\u06a9',
      }),
      m = 9007199254740991;
    const p = (t) => d(t.kind) * t.amountToman,
      f = (t) => String(t).padStart(2, '0'),
      y = (t) => `${t.year}-${f(t.month)}-${f(t.day)}`,
      h = (t) => 'string' == typeof t && /^\d{4}-(0[1-9]|1[0-2])$/.test(t);
    function b(n) {
      const [r, o, a] = n.split('-').map(Number),
        i = (0, t.toJalali)(r, o, a);
      return `${i.year}-${f(i.month)}`;
    }
    function v(t) {
      const [n, r] = t.split('-').map(Number);
      return { year: n, month: r };
    }
    function L(t, n) {
      const r = v(t),
        o = 12 * r.year + (r.month - 1) + n;
      return `${Math.floor(o / 12)}-${f((o % 12) + 1)}`;
    }
    function x(n, r) {
      const o = v(n);
      return y(
        (0, t.toGregorian)(
          o.year,
          o.month,
          Math.min(Math.max(1, r), (0, t.jalaliMonthLength)(o.year, o.month)),
        ),
      );
    }
    const T = [
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
      ],
      P = (t) =>
        String(t).replace(
          /\d/g,
          (t) =>
            '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'[
              Number(t)
            ],
        );
    function $(t) {
      const r = v(t);
      return (0, n.L)(T[r.month - 1]) + ' ' + P(r.year);
    }
    function M(r) {
      const [o, a, i] = r.split('-').map(Number),
        c = (0, t.toJalali)(o, a, i);
      return P(c.day) + ' ' + (0, n.L)(T[c.month - 1]);
    }
    const j = {
        year: 1405,
        minWage: 16625550,
        housing: 3e6,
        grocery: 22e5,
        childPercent: 10,
        marriage: 5e5,
        overtimePercent: 140,
        insuranceEmployee: 7,
        insuranceEmployer: 23,
        hoursPerMonth: 220,
        taxSteps: [
          { from: 0, rate: 0 },
          { from: 4e7, rate: 10 },
          { from: 8e7, rate: 15 },
          { from: 1e8, rate: 20 },
          { from: 12e7, rate: 25 },
          { from: 14e7, rate: 30 },
        ],
      },
      O = [
        'housing',
        'grocery',
        'child',
        'marriage',
        'seniority',
        'overtime',
        'insurance',
        'employer',
      ];
    function S(t = j) {
      return {
        base: t.minWage,
        tax: !0,
        housing: { on: !0, mode: 'amount', value: t.housing },
        grocery: { on: !0, mode: 'amount', value: t.grocery },
        child: { on: !0, mode: 'percent', value: t.childPercent },
        marriage: { on: !0, mode: 'amount', value: t.marriage },
        seniority: { on: !0, mode: 'amount', value: 5e5 },
        overtime: { on: !0, mode: 'percent', value: t.overtimePercent },
        insurance: { on: !0, mode: 'percent', value: t.insuranceEmployee },
        employer: { on: !0, mode: 'percent', value: t.insuranceEmployer },
      };
    }
    const k = (t, n, r, o) => {
      const a = Math.round(Number(t));
      return Number.isFinite(a) ? Math.min(r, Math.max(n, a)) : o;
    };
    const F = (t, n) => Math.round((t * n) / 100);
    function N(t, n) {
      const r = [...n].sort((t, n) => t.from - n.from);
      let o = 0;
      for (let n = 0; n < r.length; n++) {
        const a = r[n + 1]?.from ?? 1 / 0;
        t > r[n].from &&
          (o += ((Math.min(t, a) - r[n].from) * r[n].rate) / 100);
      }
      return Math.round(o);
    }
    const A = (t) => P(t);
    const _ = (t) =>
      P(Math.round((0, r.localAmount)(t)).toLocaleString('en-US'));
    const w = (t) =>
      t.replace(
        /[&<>"']/g,
        (t) =>
          ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
          })[t],
      );
  },
  470,
  [440, 311, 435],
);
