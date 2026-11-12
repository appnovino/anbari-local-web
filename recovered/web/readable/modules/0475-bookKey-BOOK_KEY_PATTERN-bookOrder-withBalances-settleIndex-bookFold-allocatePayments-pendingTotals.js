// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 475; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'bookKey', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'BOOK_KEY_PATTERN', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      (e.bookOrder = r),
      (e.withBalances = d),
      (e.settleIndex = s),
      (e.bookFold = function (t, n) {
        let a = 0 === n;
        for (let n = 0; n < t.length; n++)
          if (t[n].settled) {
            if (a) {
              a = !1;
              continue;
            }
            return n;
          }
        return -1;
      }),
      (e.allocatePayments = l),
      (e.pendingTotals = c),
      Object.defineProperty(e, 'debtDays', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.liveAccount = function (t, n, a, o = Date.now()) {
        const i = d(t),
          r = s(i),
          m = i.slice(r + 1).filter((t) => t.posted),
          p = r >= 0 ? i[r] : null,
          b = i.length ? i[i.length - 1].balanceToman : 0,
          h = new Map();
        for (const t of m)
          'adjustment' === t.kind &&
            'sale' === t.corrects?.type &&
            h.set(t.corrects.id, (h.get(t.corrects.id) || 0) - t.amountToman);
        const f = m
            .filter((t) => 'sale' === t.kind && t.saleId)
            .map((t) => t.saleId),
          L = n
            .filter((t) => f.includes(t.id))
            .map((t) => ({
              ...t,
              leftToman: t.leftToman ?? t.totalToman - (h.get(t.id) || 0),
            })),
          { paidLater: $, oldestUnpaidAt: y } = l(L, b),
          x = m.reduce(
            (t, n) => t + (n.amountToman > 0 ? n.amountToman : 0),
            0,
          ),
          w = m.reduce(
            (t, n) => t + (n.amountToman < 0 ? -n.amountToman : 0),
            0,
          ),
          T = [...a]
            .filter((t) => 'pending' === t.status)
            .sort(
              (t, n) =>
                t.dueDate.localeCompare(n.dueDate) || t.id.localeCompare(n.id),
            ),
          { pendingInToman: k, pendingOutToman: v } = c(T);
        return {
          since: p?.occurredAt ?? null,
          sinceKey: p?.key ?? null,
          balanceToman: b,
          boughtToman: x,
          paidToman: w,
          openCheques: T,
          pendingInToman: k,
          pendingOutToman: v,
          afterChequesToman: b - k + v,
          oldestDebtDays: u(b, y, o),
          paidLater: $,
          saleIds: [...f].reverse(),
        };
      }),
      Object.defineProperty(e, 'toman', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'balanceState', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      (e.balanceWord = h),
      (e.ownerBalance = function (n) {
        return n
          ? (0, t.L)('{state}: {amount}', {
              state: h(n),
              amount: p(Math.abs(n)),
            })
          : (0, t.L)('\u062a\u0633\u0648\u06cc\u0647 \u2713');
      }),
      (e.rowBalance = function (a) {
        return a
          ? (0, t.L)('\u0645\u0627\u0646\u062f\u0647 {amount} \xb7 {state}', {
              amount: (0, n.fullToman)(Math.abs(a)),
              state: h(a),
            })
          : (0, t.L)(
              '\u0645\u0627\u0646\u062f\u0647: \u062a\u0633\u0648\u06cc\u0647',
            );
      }),
      (e.monthEndLine = function (a) {
        return a
          ? (0, t.L)(
              '\u0622\u062e\u0631 \u0645\u0627\u0647: {amount} \xb7 {state}',
              { amount: (0, n.fullToman)(Math.abs(a)), state: h(a) },
            )
          : (0, t.L)(
              '\u0622\u062e\u0631 \u0645\u0627\u0647: \u062a\u0633\u0648\u06cc\u0647',
            );
      }),
      (e.rowAmountWords = function (a) {
        const o = (0, n.fullToman)(Math.abs(a.amountToman));
        return 'payment_in' === a.kind
          ? (0, t.L)(
              '{amount} \u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u062f',
              { amount: o },
            )
          : 'payment_out' === a.kind
            ? (0, t.L)(
                '{amount} \u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f',
                { amount: o },
              )
            : ('debt_owe' !== a.kind && 'debt_owed' !== a.kind) ||
                '\u0628\u062e\u0634\u06cc\u062f\u0647 \u0634\u062f (\u062a\u0633\u0648\u06cc\u0647)' !==
                  a.note
              ? [
                  'sale',
                  'purchase',
                  'debt_owed',
                  'debt_owe',
                  'cheque_claim',
                  'purchase_pricing',
                ].includes(a.kind)
                ? a.amountToman > 0
                  ? (0, t.L)(
                      '{amount} \u0628\u062f\u0647\u06a9\u0627\u0631 \u0634\u062f',
                      { amount: o },
                    )
                  : (0, t.L)(
                      '{amount} \u0628\u062f\u0647\u06a9\u0627\u0631 \u0634\u062f\u0645',
                      { amount: o },
                    )
                : (0, t.L)('{amount} \u0628\u0631\u06af\u0634\u062a', {
                    amount: o,
                  })
              : (0, t.L)(
                  '{amount} \u0628\u062e\u0634\u06cc\u062f\u0647 \u0634\u062f',
                  { amount: o },
                );
      }),
      (e.ownerShort = function (a) {
        return a > 0
          ? (0, t.L)('\u0637\u0644\u0628 {amount}', {
              amount: (0, n.fullToman)(a),
            })
          : a < 0
            ? (0, t.L)('\u0628\u062f\u0647\u06cc {amount}', {
                amount: (0, n.fullToman)(-a),
              })
            : (0, t.L)('\u062a\u0633\u0648\u06cc\u0647');
      }),
      (e.afterChequesLine = function (n) {
        return (0, t.L)(
          '\u0627\u06af\u0631 \u0686\u06a9\u200c\u0647\u0627 \u0648\u0635\u0648\u0644 \u0634\u0648\u0646\u062f: {state}',
          {
            state: n
              ? (0, t.L)('{amount} \xb7 {state}', {
                  amount: p(Math.abs(n)),
                  state: h(n),
                })
              : (0, t.L)('\u062a\u0633\u0648\u06cc\u0647'),
          },
        );
      }),
      Object.defineProperty(e, 'dayText', {
        enumerable: !0,
        get: function () {
          return L;
        },
      }),
      Object.defineProperty(e, 'dateText', {
        enumerable: !0,
        get: function () {
          return $;
        },
      }),
      Object.defineProperty(e, 'chequeNumber', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }),
      (e.chequeName = x),
      (e.chequeStatusWord = w),
      (e.chequeLine = T),
      Object.defineProperty(e, 'pastDue', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }),
      (e.rowTitle = q),
      (e.rowDetail = function (n) {
        return 'sale' === n.kind ||
          'purchase' === n.kind ||
          'sale_return' === n.kind ||
          'purchase_return' === n.kind
          ? [_(n.items, !1, 4), (n.kind.endsWith('_return') && n.note) || '']
              .filter(Boolean)
              .join((0, t.partSep)())
          : n.cheque
            ? T(n.cheque)
            : n.note || '';
      }),
      Object.defineProperty(e, 'zeroEffect', {
        enumerable: !0,
        get: function () {
          return j;
        },
      }),
      (e.statementWords = D),
      Object.defineProperty(e, 'IMAGE_ROWS', {
        enumerable: !0,
        get: function () {
          return N;
        },
      }),
      (e.statementModel = function (o, { maxRows: i } = {}) {
        const r = !!i && o.rows.length > i,
          d = r ? o.rows.slice(-i) : o.rows,
          s = r
            ? {
                ...o,
                rows: d,
                openingToman:
                  d[0].balanceToman - (d[0].posted ? d[0].amountToman : 0),
              }
            : o,
          l = [],
          c = r ? z(d[0].occurredAt, s.timeZone) : s.from,
          u = s.to;
        let m = 0,
          p = 0,
          b = r ? o.rows.length - d.length : 0;
        l.push({
          no: '',
          date: $(c),
          text: (0, t.L)(
            '\u0645\u0627\u0646\u062f\u0647 \u0627\u0632 \u0642\u0628\u0644',
          ),
          head: (0, t.L)(
            '\u0645\u0627\u0646\u062f\u0647 \u0627\u0632 \u0642\u0628\u0644',
          ),
          items: '',
          sub: '',
          debit: '',
          credit: '',
          balance: (0, n.fullToman)(Math.abs(s.openingToman)),
          tag: P(s.openingToman),
          kind: 'open',
        });
        for (const a of s.rows) {
          const o = a.cheque,
            i = !a.posted;
          a.posted &&
            (a.amountToman > 0 ? (m += a.amountToman) : (p -= a.amountToman));
          let r = q(a),
            d = '',
            c = '',
            u = '';
          if ('sale' === a.kind || 'purchase' === a.kind)
            ((c = a.receiptNo
              ? v({ type: a.kind, id: '', receiptNo: a.receiptNo })
              : q(a)),
              (u = _(a.items, !0, 8)),
              (r = u ? `${c} \xb7 ${u}` : c));
          else if (o) {
            const l = [
              o.bank
                ? (0, t.L)('\u0628\u0627\u0646\u06a9 {bank}', { bank: o.bank })
                : '',
              o.payee
                ? (0, t.L)('\u0628\u0647 \u0646\u0627\u0645 {name}', {
                    name: o.payee,
                  })
                : '',
            ].filter(Boolean);
            'payment_in' === a.kind || 'payment_out' === a.kind
              ? ((r = [q(a), ...l].join(' \xb7 ')),
                (d = (0, t.L)(
                  '\u0686\u06a9 {amount} \u062a\u0627\u0631\u06cc\u062e {day} \u06af\u0631\u0641\u062a\u0647 \u0634\u062f',
                  {
                    amount: (0, n.fullToman)(o.amountToman),
                    day: $(z(o.receivedAt, s.timeZone)),
                  },
                )))
              : ((r = [
                  x(o),
                  ...l,
                  'cheque_received' === a.kind || 'cheque_claim' === a.kind
                    ? (0, t.L)('\u0633\u0631\u0631\u0633\u06cc\u062f {day}', {
                        day: $(o.dueDate),
                      })
                    : '',
                  w(o),
                ]
                  .filter(Boolean)
                  .join(' \xb7 ')),
                'cheque_claim' === a.kind
                  ? (d = (0, t.L)(
                      '\u0628\u062e\u0634\u06cc \u06a9\u0647 \u0628\u062f\u0647\u06cc \u0646\u0628\u0648\u062f\u060c \u062a\u0627 \u0648\u0635\u0648\u0644 \u062f\u0631 \u062d\u0633\u0627\u0628 \u0622\u0645\u062f\u0647 \u0627\u0633\u062a',
                    ))
                  : i &&
                    (d =
                      'pending' === o.status
                        ? (0, t.L)(
                            '\u062f\u0631 \u0627\u0646\u062a\u0638\u0627\u0631 \u0648\u0635\u0648\u0644\u061b \u062a\u0627 \u0648\u0635\u0648\u0644 \u062f\u0631 \u0645\u0627\u0646\u062f\u0647 \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f',
                          )
                        : (0, t.L)(
                            '\u0628\u062f\u0648\u0646 \u0627\u062b\u0631 \u062f\u0631 \u0645\u0627\u0646\u062f\u0647',
                          )));
          }
          const h = i && o ? `(${(0, n.fullToman)(o.amountToman)})` : '',
            f = (t) =>
              i
                ? o &&
                  'cheque_received' === a.kind &&
                  ('receive' === o.direction) == ('credit' === t)
                  ? h
                  : ''
                : 'debit' === t
                  ? a.amountToman > 0
                    ? (0, n.fullToman)(a.amountToman)
                    : ''
                  : a.amountToman < 0
                    ? (0, n.fullToman)(-a.amountToman)
                    : '';
          (b++,
            l.push({
              no: (0, t.localDigits)(String(b)),
              date: $(z(a.occurredAt, s.timeZone)),
              text: r,
              head: c || r,
              items: u,
              sub: d,
              debit: f('debit'),
              credit: f('credit'),
              balance: (0, n.fullToman)(Math.abs(a.balanceToman)),
              tag: P(a.balanceToman),
              kind: i ? 'pending' : 'row',
              settled: !!a.settled,
            }));
        }
        const h = s.openingToman + m - p;
        (l.push({
          no: '',
          date: '',
          text: (0, t.L)(
            '\u062c\u0645\u0639 \u06af\u0631\u062f\u0634 \u062f\u0648\u0631\u0647',
          ),
          head: (0, t.L)(
            '\u062c\u0645\u0639 \u06af\u0631\u062f\u0634 \u062f\u0648\u0631\u0647',
          ),
          items: '',
          sub: '',
          debit: (0, n.fullToman)(m),
          credit: (0, n.fullToman)(p),
          balance: '',
          tag: '',
          kind: 'total',
        }),
          l.push({
            no: '',
            date: $(u),
            text: (0, t.L)(
              '\u0645\u0627\u0646\u062f\u0647 \u067e\u0627\u06cc\u0627\u0646 \u062f\u0648\u0631\u0647',
            ),
            head: (0, t.L)(
              '\u0645\u0627\u0646\u062f\u0647 \u067e\u0627\u06cc\u0627\u0646 \u062f\u0648\u0631\u0647',
            ),
            items: '',
            sub: '',
            debit: '',
            credit: '',
            balance: (0, n.fullToman)(Math.abs(h)),
            tag: P(h),
            kind: 'close',
          }));
        const f = D(s.contact.kind),
          T = (0, a.resolveInvoiceTheme)(s.shop.design),
          k = 'custom' === s.shop.design?.theme ? s.shop.design : void 0;
        return {
          title: f.title,
          shop: k?.brandName?.trim() || s.shop.name,
          shopPhone: (0, t.localDigits)(
            (s.shop.design?.phone || s.shop.phone || '').trim(),
          ),
          shopAddress: (s.shop.design?.address || s.shop.address || '').trim(),
          logo: k?.logo,
          theme: T,
          customer: s.contact.name,
          customerPhone: s.contact.phone
            ? (0, t.localDigits)(s.contact.phone)
            : '',
          period: (0, t.L)('{from} \u062a\u0627 {to}', {
            from: $(c, !0),
            to: $(u, !0),
          }),
          issued: L(s.issuedAt, s.timeZone, !0),
          openingToman: s.openingToman,
          closingToman: h,
          debitToman: m,
          creditToman: p,
          summary: [
            {
              label: (0, t.L)(
                '\u0645\u0627\u0646\u062f\u0647 \u0627\u0648\u0644',
              ),
              value: A(s.openingToman),
            },
            { label: f.debitTotal, value: (0, n.fullToman)(m) },
            { label: f.creditTotal, value: (0, n.fullToman)(p) },
            {
              label: (0, t.L)(
                '\u0645\u0627\u0646\u062f\u0647 \u0622\u062e\u0631',
              ),
              value: A(h),
              strong: !0,
              side: h > 0 ? 'owes' : h < 0 ? 'credit' : 'settled',
            },
          ],
          lines: l,
          more: r
            ? (0, t.L)(
                '\u0641\u0642\u0637 {n} \u0631\u062f\u06cc\u0641 \u0622\u062e\u0631 \u0627\u06cc\u0646 \u0628\u0627\u0632\u0647\u061b \u0627\u062f\u0627\u0645\u0647 \u062f\u0631 \u0646\u0633\u062e\u0647\u0654 \u0686\u0627\u067e\u06cc',
                { n: (0, t.localDigits)(String(d.length)) },
              )
            : '',
          legacyCheques: s.openCheques
            .filter((t) => 'pending' === t.status && t.legacy)
            .map((t) => ({
              number: y(t) || '\u2014',
              bank: t.bank || '\u2014',
              payee: t.payee || '\u2014',
              due: $(t.dueDate, !0),
              amount: (0, n.fullToman)(t.amountToman),
              direction: t.direction,
            })),
          openCheques: s.openCheques
            .filter((t) => 'pending' === t.status && !t.legacy)
            .map((t) => ({
              number: y(t) || '\u2014',
              bank: t.bank || '\u2014',
              payee: t.payee || '\u2014',
              due: $(t.dueDate, !0),
              amount: (0, n.fullToman)(t.amountToman),
              direction: t.direction,
            })),
          labels: {
            customer: f.person,
            phone: (0, t.L)('\u062a\u0644\u0641\u0646'),
            period: (0, t.L)('\u0628\u0627\u0632\u0647'),
            issued: (0, t.L)(
              '\u062a\u0627\u0631\u06cc\u062e \u0635\u062f\u0648\u0631',
            ),
            unit: (0, n.shopUnitText)(
              (0, t.L)(
                '\u0648\u0627\u062d\u062f \u0645\u0628\u0627\u0644\u063a: \u062a\u0648\u0645\u0627\u0646',
              ),
            ),
            columns: [
              (0, t.L)('\u0631\u062f\u06cc\u0641'),
              (0, t.L)('\u062a\u0627\u0631\u06cc\u062e'),
              (0, t.L)('\u0634\u0631\u062d'),
              (0, t.L)('\u0628\u062f\u0647\u06a9\u0627\u0631'),
              (0, t.L)('\u0628\u0633\u062a\u0627\u0646\u06a9\u0627\u0631'),
              (0, t.L)('\u0645\u0627\u0646\u062f\u0647'),
              (0, t.L)('\u062a\u0634\u062e\u06cc\u0635'),
            ],
            openCheques: (0, t.L)(
              '\u0686\u06a9\u200c\u0647\u0627\u06cc \u0648\u0635\u0648\u0644\u200c\u0646\u0634\u062f\u0647',
            ),
            openNote: (0, t.L)(
              '\u062f\u0631 \u0645\u0627\u0646\u062f\u0647 \u0644\u062d\u0627\u0638 \u0646\u0634\u062f\u0647 \u062a\u0627 \u0648\u0635\u0648\u0644',
            ),
            legacyCheques: (0, t.L)(
              '\u0686\u06a9\u200c\u0647\u0627\u06cc \u0642\u062f\u06cc\u0645\u06cc \u0648\u0635\u0648\u0644\u200c\u0646\u0634\u062f\u0647',
            ),
            legacyNote: (0, t.L)(
              '\u0647\u0646\u06af\u0627\u0645 \u062f\u0631\u06cc\u0627\u0641\u062a \u062f\u0631 \u0645\u0627\u0646\u062f\u0647 \u0622\u0645\u062f\u0647\u200c\u0627\u0646\u062f',
            ),
            chequeColumns: [
              (0, t.L)('\u0634\u0645\u0627\u0631\u0647'),
              (0, t.L)('\u0628\u0627\u0646\u06a9'),
              (0, t.L)('\u0628\u0647 \u0646\u0627\u0645'),
              (0, t.L)('\u0633\u0631\u0631\u0633\u06cc\u062f'),
              (0, t.L)('\u0645\u0628\u0644\u063a'),
            ],
            legend: f.legend,
            sellerSign: (0, t.L)(
              '\u0645\u0647\u0631 \u0648 \u0627\u0645\u0636\u0627\u06cc \u0641\u0631\u0648\u0634\u0646\u062f\u0647',
            ),
            buyerSign: f.sign,
            madeWith: (0, t.L)(
              '\u0633\u0627\u062e\u062a\u0647\u200c\u0634\u062f\u0647 \u0628\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
            ),
            page: (0, t.L)('\u0635\u0641\u062d\u0647 {x} \u0627\u0632 {y}'),
            noRows: (0, t.L)(
              '\u062f\u0631 \u0627\u06cc\u0646 \u0628\u0627\u0632\u0647 \u06af\u0631\u062f\u0634\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647 \u0627\u0633\u062a.',
            ),
          },
        };
      }),
      (e.dayIso = z),
      (e.statementText = function (t, n = '') {
        return [
          `${t.shop}: ${t.title} ${t.customer}`,
          `${t.labels.period}: ${t.period}`,
          ...t.summary.map((t) => `${t.label}: ${t.value}`),
          n,
        ]
          .filter(Boolean)
          .join('\n');
      }),
      (e.statementHtml = function (
        t,
        { logo: n, fontFace: a = '', autoPrint: o = !1, lang: i = 'fa' } = {},
      ) {
        const r = t.theme,
          d = t.logo || n,
          s = 'en' !== i,
          [l, c] = t.labels.page.split('{x}'),
          [u, m] = (c ?? '').split('{y}'),
          p = 'fa' === i ? 'persian' : 'ar' === i ? 'arabic-indic' : 'decimal',
          b = (n) => S(t.labels.columns[n]),
          h = t.lines
            .map(
              (t) =>
                `<tr class="${t.kind}${t.settled ? ' settled' : ''}"><td class="c w no">${S(t.no)}</td><td class="d w">${S(t.date)}</td><td class="t"><div class="h">${S(t.head)}</div>${t.items ? `<div class="items" tabindex="0" title="${S(t.items)}">${S(t.items)}</div>` : ''}${t.sub ? `<div class="muted">${S(t.sub)}</div>` : ''}</td><td class="n w" data-label="${b(3)}">${S(t.debit)}</td><td class="n w${'pending' === t.kind ? ' muted' : ''}" data-label="${b(4)}">${S(t.credit)}</td><td class="n w" data-label="${b(5)}">${S(t.balance)}</td><td class="c w tag">${S(t.tag)}</td></tr>`,
            )
            .join(''),
          f = t.openCheques.length
            ? `<section class="cheques"><h3>${S(t.labels.openCheques)} <span class="muted">(${S(t.labels.openNote)})</span></h3><table><thead><tr>${t.labels.chequeColumns.map((t) => `<th>${S(t)}</th>`).join('')}</tr></thead><tbody>${t.openCheques.map((t) => `<tr><td>${S(t.number)}</td><td>${S(t.bank)}</td><td>${S(t.payee)}</td><td>${S(t.due)}</td><td class="n">${S(t.amount)}</td></tr>`).join('')}</tbody></table></section>`
            : '',
          L = t.legacyCheques.length
            ? `<section class="cheques"><h3>${S(t.labels.legacyCheques)} <span class="muted">(${S(t.labels.legacyNote)})</span></h3><table><thead><tr>${t.labels.chequeColumns.map((t) => `<th>${S(t)}</th>`).join('')}</tr></thead><tbody>${t.legacyCheques.map((t) => `<tr><td>${S(t.number)}</td><td>${S(t.bank)}</td><td>${S(t.payee)}</td><td>${S(t.due)}</td><td class="n">${S(t.amount)}</td></tr>`).join('')}</tbody></table></section>`
            : '',
          $ =
            'owes' === t.summary[3].side
              ? '#856000'
              : 'credit' === t.summary[3].side
                ? r.accent
                : '#16a34a';
        return `<!doctype html><html lang="${S(i)}" dir="${s ? 'rtl' : 'ltr'}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${S(t.title)} \xb7 ${S(t.customer)}</title><style>\n${a}\n*{box-sizing:border-box}body{margin:0;background:#eef1f3;color:${r.ink};font-family:Vazirmatn,Tahoma,Arial,sans-serif;font-size:13px;line-height:1.7}\n.paper{max-width:794px;margin:16px auto;background:${r.paper};padding:32px 36px;border:1px solid ${r.line};border-radius:10px}\n.head{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;border-bottom:2px solid ${r.accent};padding-bottom:14px}\n.brand{display:flex;align-items:center;gap:12px;min-width:0}.brand img{width:56px;height:56px;object-fit:contain;border-radius:12px}\n.shop{font-size:19px;font-weight:800;overflow-wrap:anywhere}.muted{color:${r.muted};font-size:11.5px}.title{font-size:21px;font-weight:800;color:${r.accent};text-align:${s ? 'left' : 'right'}}\n.meta{display:grid;grid-template-columns:1fr 1fr;gap:4px 24px;margin:14px 0}.meta b{font-weight:700}\n.sum{display:flex;gap:10px;margin:0 0 14px}.box{flex:1;border:1px solid ${r.line};border-radius:10px;padding:8px 10px;min-width:0}.box div:first-child{font-size:11.5px;color:${r.muted}}.box div:last-child{font-size:15px;font-weight:800;overflow-wrap:anywhere}.box.strong{border-color:${r.accent}}\ntable{width:100%;border-collapse:collapse;font-size:12px}th{background:${r.tableHeadBg};font-weight:700;padding:7px 6px;border:1px solid ${r.line};text-align:${s ? 'right' : 'left'}}td{padding:6px;border:1px solid ${r.line};vertical-align:top;overflow-wrap:break-word;word-break:normal}\ntable.st th.w,table.st td.w{width:1%;white-space:nowrap}table.st td.t{min-width:9em}.items{color:${r.muted};font-size:11.5px;line-height:1.6}\ntd.n{text-align:${s ? 'left' : 'right'};white-space:nowrap;font-weight:600;font-variant-numeric:tabular-nums}td.c{text-align:center;white-space:nowrap}td.d{white-space:nowrap}\ntr.open td,tr.close td,tr.total td{background:${r.tableHeadBg};font-weight:700}tr.settled td{background:#16a34a12}tr.pending td{color:${r.muted}}\nthead{display:table-header-group}tr{break-inside:avoid}\n.cheques{margin-top:16px}.cheques h3{font-size:13px;margin:0 0 6px}\n.signs{display:flex;gap:24px;margin-top:34px}.signs div{flex:1;border-top:1px solid ${r.ink};padding-top:6px;text-align:center;font-size:12px}\n.foot{display:flex;justify-content:space-between;gap:12px;margin-top:20px;font-size:11px;color:${r.muted}}\n.wide{overflow-x:auto}\n@page{size:A4 portrait;margin:12mm 10mm 14mm;@bottom-center{content:${M(l ?? '')} counter(page,${p}) ${M(u ?? '')} counter(pages,${p}) ${M(m ?? '')};font-family:Vazirmatn,Tahoma,sans-serif;font-size:10px;color:#666}}\n@media print{body{background:#fff}.paper{margin:0;max-width:none;border:0;border-radius:0;padding:0}*{print-color-adjust:exact;-webkit-print-color-adjust:exact}.wide{overflow:visible}}\n@media screen{.items{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;cursor:pointer}.items:focus{display:block;overflow:visible;outline:none}}\n@media screen and (max-width:840px){.paper{margin:0;border:0;border-radius:0;padding:20px 16px}}\n@media(max-width:560px){.paper{margin:0;border-radius:0;padding:16px 12px}.sum{flex-wrap:wrap}.box{flex:1 1 40%}.meta{grid-template-columns:1fr}}\n@media screen and (max-width:640px){table.st,table.st tbody,table.st tr,table.st td{display:block}table.st thead{display:none}\ntable.st tr{display:flex;flex-wrap:wrap;align-items:baseline;gap:2px 12px;border:1px solid ${r.line};border-radius:10px;padding:8px 12px;margin:0 0 8px;background:${r.paper}}\ntable.st tr.open,table.st tr.close,table.st tr.total{background:${r.tableHeadBg}}table.st tr.settled{background:#16a34a12}\ntable.st td{border:0;padding:0;width:auto;background:transparent!important}table.st td:empty{display:none}\ntable.st td.no{order:1;color:${r.muted}}table.st td.d{order:2;flex:1 1 auto;color:${r.muted};font-size:12px}table.st td.tag{order:3;font-size:12px}\ntable.st td.t{order:4;flex:1 1 100%;min-width:0;font-size:13.5px}table.st td.n{order:5;flex:1 1 0;min-width:0;text-align:${s ? 'right' : 'left'};font-size:13px}\ntable.st td.n::before{content:attr(data-label);display:block;font-size:11px;font-weight:400;color:${r.muted}}}\n</style></head><body><main class="paper">\n<header class="head"><div class="brand">${d ? `<img alt="" src="${S(d)}">` : ''}<div><div class="shop">${S(t.shop)}</div>${t.shopPhone || t.shopAddress ? `<div class="muted">${S([t.shopPhone, t.shopAddress].filter(Boolean).join(' \xb7 '))}</div>` : ''}</div></div><div><div class="title">${S(t.title)}</div><div class="muted" style="text-align:${s ? 'left' : 'right'}">${S(t.labels.issued)}: ${S(t.issued)}</div></div></header>\n<div class="meta"><div>${S(t.labels.customer)}: <b>${S(t.customer)}</b></div><div>${S(t.labels.period)}: <b>${S(t.period)}</b></div>${t.customerPhone ? `<div>${S(t.labels.phone)}: <b dir="ltr">${S(t.customerPhone)}</b></div>` : '<div></div>'}<div><b>${S(t.labels.unit)}</b></div></div>\n<div class="sum">${t.summary.map((t) => `<div class="box${t.strong ? ' strong' : ''}"><div>${S(t.label)}</div><div${t.strong ? ` style="color:${$}"` : ''}>${S(t.value)}</div></div>`).join('')}</div>\n<div class="wide"><table class="st"><thead><tr>${t.labels.columns.map((t, n) => `<th class="${2 === n ? 't' : 'w'}">${S(t)}</th>`).join('')}</tr></thead><tbody>${h}</tbody></table></div>\n${t.lines.length <= 3 ? `<p class="muted">${S(t.labels.noRows)}</p>` : ''}\n${t.more ? `<p class="muted">${S(t.more)}</p>` : ''}\n${f}${L}\n<div class="signs"><div>${S(t.labels.sellerSign)}</div><div>${S(t.labels.buyerSign)}</div></div>\n<footer class="foot"><span>${S(t.labels.legend)}</span><span>${S(t.labels.madeWith)}</span></footer>\n</main>${o ? '<script>window.addEventListener("load",function(){setTimeout(function(){window.focus();window.print();},300);});<\/script>' : ''}</body></html>`;
      }));
    var t = _r(_d[0]),
      n = _r(_d[1]),
      a = _r(_d[2]);
    const o = (t, n = !1, a) => (n ? '0:' : '1:') + t + (a ? ':' + a : ''),
      i =
        /^[01]:[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(?::[rx])?$/;
    function r(t, n) {
      return (
        Date.parse(t.occurredAt) - Date.parse(n.occurredAt) ||
        (t.key < n.key ? -1 : t.key > n.key ? 1 : 0)
      );
    }
    function d(t) {
      let n = 0;
      return [...t]
        .sort(r)
        .map(
          (t) => (
            (n += t.posted ? t.amountToman : 0),
            {
              ...t,
              balanceToman: n,
              settled: t.posted && 0 !== t.amountToman && 0 === n,
            }
          ),
        );
    }
    function s(t) {
      for (let n = t.length - 1; n >= 0; n--)
        if (t[n].posted && 0 === t[n].balanceToman) return n;
      return -1;
    }
    function l(t, n) {
      let a = Math.max(0, n);
      const o = {};
      let i = null;
      for (const n of [...t].sort(
        (t, n) =>
          Date.parse(n.occurredAt) - Date.parse(t.occurredAt) ||
          (t.id < n.id ? 1 : -1),
      )) {
        const t = Math.max(0, n.leftToman ?? n.totalToman),
          r = n.chequeFailed ? 0 : Math.min(n.paidToman, t),
          d = Math.max(0, t - r),
          s = Math.min(d, a);
        ((a -= s), d - s > 0 && (o[n.id] = d - s), s > 0 && (i = n.occurredAt));
      }
      return { paidLater: o, oldestUnpaidAt: i };
    }
    function c(t) {
      const n = t.filter((t) => 'pending' === t.status && !t.legacy);
      return {
        pendingInToman: n
          .filter((t) => 'receive' === t.direction)
          .reduce((t, n) => t + n.amountToman, 0),
        pendingOutToman: n
          .filter((t) => 'pay' === t.direction)
          .reduce((t, n) => t + n.amountToman, 0),
      };
    }
    const u = (t, n, a) =>
      t > 0 && n ? Math.max(0, Math.floor((a - Date.parse(n)) / 864e5)) : null;
    const m = (n) => n.toLocaleString((0, t.numberLocale)()),
      p = (a) =>
        (0, n.shopUnitText)(
          (0, t.L)('{amount} \u062a\u0648\u0645\u0627\u0646', {
            amount: (0, n.fullToman)(a),
          }),
        ),
      b = (t) => (t > 0 ? 'owed' : t < 0 ? 'owe' : 'settled');
    function h(n) {
      return n > 0
        ? (0, t.L)(
            '\u0628\u0647 \u0645\u0646 \u0628\u062f\u0647\u06a9\u0627\u0631 \u0627\u0633\u062a',
          )
        : n < 0
          ? (0, t.L)('\u0645\u0646 \u0628\u062f\u0647\u06a9\u0627\u0631\u0645')
          : (0, t.L)('\u062a\u0633\u0648\u06cc\u0647');
    }
    const f = (n, a, o) => {
        const i = {
          day: 'numeric',
          month: 'long',
          ...(o ? { year: 'numeric' } : {}),
        };
        try {
          return new Date(n).toLocaleDateString((0, t.dateLocale)(), {
            ...i,
            timeZone: a,
          });
        } catch {
          return new Date(n).toLocaleDateString((0, t.dateLocale)(), i);
        }
      },
      L = (t, n = 'Asia/Tehran', a = !1) => f(t, n, a),
      $ = (t, n = !1) => f(t + 'T12:00:00Z', 'UTC', n),
      y = (n) => (n.number ? (0, t.localDigits)(n.number) : '');
    function x(n) {
      const a = y(n);
      return 'pay' === n.direction
        ? a
          ? (0, t.L)(
              '\u0686\u06a9 \u062f\u0627\u062f\u0647\u200c\u0634\u062f\u0647 {no}',
              { no: a },
            )
          : (0, t.L)(
              '\u0686\u06a9 \u062f\u0627\u062f\u0647\u200c\u0634\u062f\u0647',
            )
        : a
          ? (0, t.L)('\u0686\u06a9 {no}', { no: a })
          : (0, t.L)('\u0686\u06a9');
    }
    function w(n) {
      return 'pending' === n.status
        ? 'pay' === n.direction
          ? (0, t.L)('\u067e\u0627\u0633\u200c\u0646\u0634\u062f\u0647')
          : (0, t.L)('\u0648\u0635\u0648\u0644\u200c\u0646\u0634\u062f\u0647')
        : 'cashed' === n.status
          ? 'pay' === n.direction
            ? (0, t.L)('\u067e\u0627\u0633 \u0634\u062f')
            : (0, t.L)('\u0648\u0635\u0648\u0644 \u0634\u062f')
          : 'bounced' === n.status
            ? (0, t.L)(
                '\u0628\u0631\u06af\u0634\u062a \u062e\u0648\u0631\u062f',
              )
            : (0, t.L)('\u0644\u063a\u0648 \u0634\u062f');
    }
    function T(n) {
      return [
        (0, t.L)('\u0633\u0631\u0631\u0633\u06cc\u062f {day}', {
          day: $(n.dueDate),
        }),
        n.bank || '',
        n.payee
          ? (0, t.L)('\u0628\u0647 \u0646\u0627\u0645 {name}', {
              name: n.payee,
            })
          : '',
      ]
        .filter(Boolean)
        .join(' \xb7 ');
    }
    const k = (t, n) => 'pending' === t.status && t.dueDate < n,
      v = (n) =>
        'sale' === n.type
          ? (0, t.L)('\u0641\u0627\u06a9\u062a\u0648\u0631 {no}', {
              no: (0, t.localDigits)(String(n.receiptNo)),
            })
          : 'sale_return' === n.type
            ? (0, t.L)(
                '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u0641\u0631\u0648\u0634 {no}',
                { no: (0, t.localDigits)(String(n.receiptNo)) },
              )
            : 'purchase_return' === n.type
              ? (0, t.L)(
                  '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u062e\u0631\u06cc\u062f {no}',
                  { no: (0, t.localDigits)(String(n.receiptNo)) },
                )
              : (0, t.L)(
                  '\u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0631\u06cc\u062f {no}',
                  { no: (0, t.localDigits)(String(n.receiptNo)) },
                );
    function q(n) {
      const a = n.cheque;
      if (('sale' === n.kind || 'purchase' === n.kind) && n.receiptNo) {
        const a = v({ type: n.kind, id: '', receiptNo: n.receiptNo });
        return n.lineCount
          ? [a, (0, t.L)('{n} \u0642\u0644\u0645', { n: m(n.lineCount) })].join(
              (0, t.partSep)(),
            )
          : a;
      }
      if ('sale_return' === n.kind || 'purchase_return' === n.kind) {
        if (!n.receiptNo)
          return 'sale_return' === n.kind
            ? (0, t.L)(
                '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u0641\u0631\u0648\u0634',
              )
            : (0, t.L)(
                '\u0628\u0631\u06af\u0634\u062a \u0627\u0632 \u062e\u0631\u06cc\u062f',
              );
        const a = v({ type: n.kind, id: '', receiptNo: n.receiptNo });
        return n.lineCount
          ? [a, (0, t.L)('{n} \u0642\u0644\u0645', { n: m(n.lineCount) })].join(
              (0, t.partSep)(),
            )
          : a;
      }
      if ('sale' === n.kind) return (0, t.L)('\u0641\u0631\u0648\u0634');
      if ('purchase' === n.kind) return (0, t.L)('\u062e\u0631\u06cc\u062f');
      if ('payment_in' === n.kind || 'payment_out' === n.kind) {
        const o = a ? y(a) : '',
          i = !(!a || ('pending' !== a.status && !a.legacy)),
          r =
            'cheque' === n.method && a && i
              ? `${x(a)} \xb7 ${'payment_in' === n.kind ? (0, t.L)('\u062f\u0631\u06cc\u0627\u0641\u062a \u0634\u062f') : (0, t.L)('\u062f\u0627\u062f\u0647 \u0634\u062f')}`
              : 'cheque' === n.method && a
                ? 'payment_in' === n.kind
                  ? o
                    ? (0, t.L)('\u0648\u0635\u0648\u0644 \u0686\u06a9 {no}', {
                        no: o,
                      })
                    : (0, t.L)('\u0648\u0635\u0648\u0644 \u0686\u06a9')
                  : o
                    ? (0, t.L)(
                        '\u067e\u0627\u0633 \u0634\u062f\u0646 \u0686\u06a9 {no}',
                        { no: o },
                      )
                    : (0, t.L)(
                        '\u067e\u0627\u0633 \u0634\u062f\u0646 \u0686\u06a9',
                      )
                : 'payment_in' === n.kind
                  ? 'card' === n.method
                    ? (0, t.L)(
                        '\u062f\u0631\u06cc\u0627\u0641\u062a \u06a9\u0627\u0631\u062a',
                      )
                    : (0, t.L)(
                        '\u062f\u0631\u06cc\u0627\u0641\u062a \u0646\u0642\u062f',
                      )
                  : 'card' === n.method
                    ? (0, t.L)(
                        '\u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0627\u0631\u062a',
                      )
                    : (0, t.L)(
                        '\u067e\u0631\u062f\u0627\u062e\u062a \u0646\u0642\u062f',
                      ),
          d = n.forDocument ? `${r} \xb7 ${v(n.forDocument)}` : r;
        return n.reversed
          ? `${d} \xb7 ${(0, t.L)('\u067e\u0627\u06a9 \u0634\u062f')}`
          : d;
      }
      if ('payment_reversal' === n.kind)
        return n.amountToman > 0
          ? (0, t.L)(
              '\u067e\u0627\u06a9 \u0634\u062f\u0646 \u062f\u0631\u06cc\u0627\u0641\u062a \u067e\u0648\u0644',
            )
          : (0, t.L)(
              '\u067e\u0627\u06a9 \u0634\u062f\u0646 \u067e\u0631\u062f\u0627\u062e\u062a \u067e\u0648\u0644',
            );
      if (('cheque_received' === n.kind || 'cheque_claim' === n.kind) && a)
        return `${x(a)} \xb7 ${w(a)}`;
      if (('cheque_bounced' === n.kind || 'cheque_bounce' === n.kind) && a)
        return (0, t.L)('\u0628\u0631\u06af\u0634\u062a {cheque}', {
          cheque: x(a),
        });
      if (('cheque_cancelled' === n.kind || 'cheque_cancel' === n.kind) && a)
        return (0, t.L)('\u0644\u063a\u0648 {cheque}', { cheque: x(a) });
      if ('adjustment' === n.kind)
        return n.corrects
          ? (0, t.L)('\u0627\u0635\u0644\u0627\u062d {doc}', {
              doc: v(n.corrects),
            })
          : (0, t.L)('\u0627\u0635\u0644\u0627\u062d \u062d\u0633\u0627\u0628');
      if ('debt_owed' === n.kind || 'debt_owe' === n.kind) {
        const a =
          'debt_owed' === n.kind
            ? (0, t.L)(
                '\u0637\u0644\u0628 (\u0628\u062f\u0648\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631)',
              )
            : (0, t.L)(
                '\u0628\u062f\u0647\u06cc (\u0628\u062f\u0648\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631)',
              );
        return n.reversed
          ? `${a} \xb7 ${(0, t.L)('\u067e\u0627\u06a9 \u0634\u062f')}`
          : a;
      }
      return 'debt_reversal' === n.kind
        ? n.amountToman < 0
          ? (0, t.L)('\u067e\u0627\u06a9 \u0634\u062f\u0646 \u0637\u0644\u0628')
          : (0, t.L)(
              '\u067e\u0627\u06a9 \u0634\u062f\u0646 \u0628\u062f\u0647\u06cc',
            )
        : 'purchase_pricing' === n.kind
          ? n.receiptNo
            ? (0, t.L)(
                '\u0642\u06cc\u0645\u062a\u200c\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0631\u06cc\u062f #{no}',
                { no: m(n.receiptNo) },
              )
            : (0, t.L)(
                '\u0642\u06cc\u0645\u062a\u200c\u06af\u0630\u0627\u0631\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0631\u06cc\u062f',
              )
          : (0, t.L)(
              '\u062b\u0628\u062a \u062f\u0631 \u062d\u0633\u0627\u0628',
            );
    }
    const _ = (t, n, a) => {
      if (!t?.length) return '';
      return (
        t
          .slice(0, a)
          .map((t) => (n ? `${t.name} \xd7 ${m(t.quantity)}` : t.name))
          .join('\u060c ') + (t.length > a ? '\u060c \u2026' : '')
      );
    };
    const j = (t) => !t.posted;
    function D(n = 'customer') {
      return 'supplier' === n
        ? {
            title: (0, t.L)(
              '\u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 \u062a\u0623\u0645\u06cc\u0646\u200c\u06a9\u0646\u0646\u062f\u0647',
            ),
            debitTotal: (0, t.L)(
              '\u062c\u0645\u0639 \u067e\u0631\u062f\u0627\u062e\u062a \u0645\u0627',
            ),
            creditTotal: (0, t.L)(
              '\u062c\u0645\u0639 \u062e\u0631\u06cc\u062f \u0645\u0627',
            ),
            debitPeriod: (0, t.L)(
              '\u067e\u0631\u062f\u0627\u062e\u062a \u0645\u0627 \u062f\u0631 \u062f\u0648\u0631\u0647',
            ),
            creditPeriod: (0, t.L)(
              '\u062e\u0631\u06cc\u062f \u0645\u0627 \u062f\u0631 \u062f\u0648\u0631\u0647',
            ),
            person: (0, t.L)(
              '\u0646\u0627\u0645 \u062a\u0623\u0645\u06cc\u0646\u200c\u06a9\u0646\u0646\u062f\u0647',
            ),
            sign: (0, t.L)(
              '\u0627\u0645\u0636\u0627\u06cc \u062a\u0623\u0645\u06cc\u0646\u200c\u06a9\u0646\u0646\u062f\u0647 \u2013 \u062a\u0623\u06cc\u06cc\u062f \u0645\u0627\u0646\u062f\u0647',
            ),
            legend: (0, t.L)(
              '\xab\u0628\u062f\xbb \u06cc\u0639\u0646\u06cc \u062a\u0623\u0645\u06cc\u0646\u200c\u06a9\u0646\u0646\u062f\u0647 \u0628\u0647 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u062f\u0647\u06a9\u0627\u0631 \u0627\u0633\u062a\u061b \xab\u0628\u0633\xbb \u06cc\u0639\u0646\u06cc \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u0647 \u062a\u0623\u0645\u06cc\u0646\u200c\u06a9\u0646\u0646\u062f\u0647 \u0628\u062f\u0647\u06a9\u0627\u0631 \u0627\u0633\u062a.',
            ),
          }
        : 'both' === n
          ? {
              title: (0, t.L)(
                '\u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 \u0637\u0631\u0641 \u062d\u0633\u0627\u0628',
              ),
              debitTotal: (0, t.L)(
                '\u062c\u0645\u0639 \u0628\u062f\u0647\u06a9\u0627\u0631',
              ),
              creditTotal: (0, t.L)(
                '\u062c\u0645\u0639 \u0628\u0633\u062a\u0627\u0646\u06a9\u0627\u0631',
              ),
              debitPeriod: (0, t.L)(
                '\u0628\u062f\u0647\u06a9\u0627\u0631 \u062f\u0631 \u062f\u0648\u0631\u0647',
              ),
              creditPeriod: (0, t.L)(
                '\u0628\u0633\u062a\u0627\u0646\u06a9\u0627\u0631 \u062f\u0631 \u062f\u0648\u0631\u0647',
              ),
              person: (0, t.L)(
                '\u0646\u0627\u0645 \u0637\u0631\u0641 \u062d\u0633\u0627\u0628',
              ),
              sign: (0, t.L)(
                '\u0627\u0645\u0636\u0627\u06cc \u0637\u0631\u0641 \u062d\u0633\u0627\u0628 \u2013 \u062a\u0623\u06cc\u06cc\u062f \u0645\u0627\u0646\u062f\u0647',
              ),
              legend: (0, t.L)(
                '\xab\u0628\u062f\xbb \u06cc\u0639\u0646\u06cc \u0637\u0631\u0641 \u062d\u0633\u0627\u0628 \u0628\u062f\u0647\u06a9\u0627\u0631 \u0627\u0633\u062a\u061b \xab\u0628\u0633\xbb \u06cc\u0639\u0646\u06cc \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u062f\u0647\u06a9\u0627\u0631 \u0627\u0633\u062a.',
              ),
            }
          : {
              title: (0, t.L)(
                '\u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628 \u0645\u0634\u062a\u0631\u06cc',
              ),
              debitTotal: (0, t.L)(
                '\u062c\u0645\u0639 \u062e\u0631\u06cc\u062f',
              ),
              creditTotal: (0, t.L)(
                '\u062c\u0645\u0639 \u067e\u0631\u062f\u0627\u062e\u062a',
              ),
              debitPeriod: (0, t.L)(
                '\u062e\u0631\u06cc\u062f \u062f\u0631 \u062f\u0648\u0631\u0647',
              ),
              creditPeriod: (0, t.L)(
                '\u067e\u0631\u062f\u0627\u062e\u062a \u062f\u0631 \u062f\u0648\u0631\u0647',
              ),
              person: (0, t.L)(
                '\u0646\u0627\u0645 \u0645\u0634\u062a\u0631\u06cc',
              ),
              sign: (0, t.L)(
                '\u0627\u0645\u0636\u0627\u06cc \u0645\u0634\u062a\u0631\u06cc \u2013 \u062a\u0623\u06cc\u06cc\u062f \u0645\u0627\u0646\u062f\u0647',
              ),
              legend: (0, t.L)(
                '\xab\u0628\u062f\xbb \u06cc\u0639\u0646\u06cc \u0645\u0634\u062a\u0631\u06cc \u0628\u062f\u0647\u06a9\u0627\u0631 \u0627\u0633\u062a\u061b \xab\u0628\u0633\xbb \u06cc\u0639\u0646\u06cc \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u062f\u0647\u06a9\u0627\u0631 \u0627\u0633\u062a.',
              ),
            };
    }
    const P = (n) =>
        n < 0
          ? (0, t.L)('\u0628\u0633')
          : n > 0
            ? (0, t.L)('\u0628\u062f')
            : '\u2014',
      C = (n) =>
        n < 0
          ? (0, t.L)('\u0628\u0633\u062a\u0627\u0646\u06a9\u0627\u0631')
          : n > 0
            ? (0, t.L)('\u0628\u062f\u0647\u06a9\u0627\u0631')
            : (0, t.L)('\u062a\u0633\u0648\u06cc\u0647'),
      A = (a) =>
        a
          ? `${(0, n.fullToman)(Math.abs(a))} ${C(a)}`
          : (0, t.L)('\u06f0 (\u062a\u0633\u0648\u06cc\u0647)'),
      N = 100;
    function z(t, n = 'Asia/Tehran') {
      try {
        const a = new Intl.DateTimeFormat('en-CA', {
            timeZone: n,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          }).formatToParts(new Date(t)),
          o = (t) => a.find((n) => n.type === t)?.value || '00';
        return `${o('year')}-${o('month')}-${o('day')}`;
      } catch {
        return t.slice(0, 10);
      }
    }
    const S = (t) =>
        String(t ?? '').replace(
          /[&<>"']/g,
          (t) =>
            ({
              '&': '&amp;',
              '<': '&lt;',
              '>': '&gt;',
              '"': '&quot;',
              "'": '&#39;',
            })[t],
        ),
      M = (t) => '"' + t.replace(/["\\]/g, '\\$&') + '"';
  },
  475,
  [311, 435, 476],
);
