// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 990; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, _a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'WIDGET_SNAPSHOT_VERSION', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      Object.defineProperty(e, 'WIDGET_KINDS', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
      Object.defineProperty(e, 'WIDGET_SCHEME', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'widgetLink', {
        enumerable: !0,
        get: function () {
          return a;
        },
      }),
      (e.parseWidgetLink = function (t) {
        const n = /^myanbari:\/\/+w\/([a-z]+)\/?(?:[?#].*)?$/i.exec(
          String(t || '').trim(),
        );
        if (!n) return null;
        const s = n[1].toLowerCase();
        return r.includes(s) || 'home' === s ? s : 'home';
      }),
      Object.defineProperty(e, 'WIDGET_VIEWS', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'nextMidnight', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      (e.dueLabel = y),
      Object.defineProperty(e, 'WIDGET_TITLES', {
        enumerable: !0,
        get: function () {
          return x;
        },
      }),
      (e.chequesThisWeek = T),
      (e.buildWidgetSnapshot = function (r) {
        const o = r.now || new Date(),
          a = (n) => (0, t.L)(x[n]),
          u = {},
          m = null == r.salesToday ? NaN : Number(r.salesToday);
        u.sales = Number.isFinite(m)
          ? L('sales', a('sales'), m, [])
          : k('sales', a('sales'));
        const h = r.expensesMonth;
        u.expenses = h
          ? L('expenses', a('expenses'), h.totalToman || 0, [
              (0, t.L)('{n} \u0647\u0632\u06cc\u0646\u0647', {
                n: f(h.count || 0),
              }),
            ])
          : k('expenses', a('expenses'));
        const D = r.ledger;
        D
          ? ((u.payments = L('payments', a('payments'), D.theyOweMe || 0, [
              (0, t.L)('\u0628\u062f\u0647\u06cc \u0645\u0646: {amount}', {
                amount: (0, n.moneyShort)(D.iOwe || 0),
              }),
            ])),
            (u.payments.short = `${(0, t.L)('\u0637\u0644\u0628 \u0645\u0646')}: ${u.payments.value} ${u.payments.unit}`))
          : (u.payments = k('payments', a('payments')));
        if (r.cheques) {
          const s = new Map(r.cheques.people),
            m = T(r.cheques.list, o),
            d = m.map((r) => {
              const a =
                s.get(r.contactId) ||
                r.payee ||
                ('receive' === r.direction
                  ? (0, t.L)(
                      '\u0686\u06a9 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc',
                    )
                  : (0, t.L)(
                      '\u0686\u06a9 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc',
                    ));
              return `${l(a, 16)} \xb7 ${(0, n.moneyShort)(r.amountToman || 0)} \xb7 ${y(r.dueDate, o)}`;
            });
          ((u.cheques = b(
            'cheques',
            a('cheques'),
            m.length,
            (0, t.L)('\u0686\u06a9'),
            d,
          )),
            (u.cheques.lines = d.slice(0, c).map((t) => l(t, 44))));
        } else u.cheques = k('cheques', a('cheques'));
        if (r.reminders) {
          const n = [...r.reminders].sort((t, n) => t.at - n.at);
          u.reminders = b(
            'reminders',
            a('reminders'),
            n.length,
            (0, t.L)('\u06cc\u0627\u062f\u0622\u0648\u0631'),
            n.map((t) => t.title),
          );
        } else u.reminders = k('reminders', a('reminders'));
        if (r.history) {
          const n = r.history.filter((t) => t && t.text);
          ((u.history = b(
            'history',
            a('history'),
            n.length,
            '',
            n.map((t) => t.text),
          )),
            (u.history.value = ''),
            (u.history.short = n[0]
              ? l(n[0].text, 40)
              : `${a('history')}: ${(0, t.L)('\u0686\u06cc\u0632\u06cc \u0646\u06cc\u0633\u062a')}`));
        } else u.history = k('history', a('history'));
        return (
          (u.stock = r.lowStock
            ? b(
                'stock',
                a('stock'),
                r.lowStock.count,
                (0, t.L)('\u06a9\u0627\u0644\u0627'),
                r.lowStock.names,
              )
            : k('stock', a('stock'))),
          {
            v: s,
            at: o.getTime(),
            validUntil: p(o),
            updated: (0, t.L)('\u0628\u0647\u200c\u0631\u0648\u0632: {time}', {
              time: d(o),
            }),
            shop: l(r.shopName || '', 28),
            rtl: (0, t.isRtlLang)((0, t.localeLang)()),
            lockedText: (0, t.L)(
              '\u0628\u0631\u0627\u06cc \u062f\u06cc\u062f\u0646\u060c \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646\u06cc\u062f',
            ),
            emptyText: (0, t.L)(
              '\u0686\u06cc\u0632\u06cc \u0646\u06cc\u0633\u062a',
            ),
            staleText: (0, t.L)(
              '\u0628\u0631\u0627\u06cc \u0639\u062f\u062f \u062a\u0627\u0632\u0647\u060c \u0628\u0631\u0646\u0627\u0645\u0647 \u0631\u0627 \u0628\u0627\u0632 \u06a9\u0646\u06cc\u062f',
            ),
            tiles: u,
          }
        );
      }),
      Object.defineProperty(e, 'snapshotJson', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }),
      (e.sameWidgetContent = function (t, n) {
        if (!t || !n) return t === n;
        const s = (t) =>
          JSON.stringify({ ...t, at: 0, updated: '', validUntil: 0 });
        return s(t) === s(n) && t.validUntil === n.validUntil;
      }));
    var t = _r(_d[0]),
      n = _r(_d[1]);
    const s = 1,
      r = [
        'sales',
        'expenses',
        'payments',
        'cheques',
        'reminders',
        'history',
        'stock',
      ],
      o = 'myanbari',
      a = (t) => `${o}://w/${t}`;
    const u = {
        sales: 'sales',
        expenses: 'expenses',
        payments: 'payments',
        cheques: 'cheques',
        reminders: 'to-buy',
        history: 'history',
        stock: 'alarms',
        home: 'home',
      },
      c = 3,
      l = (t, n = 34) => {
        const s = String(t || '')
          .replace(/\s+/g, ' ')
          .trim();
        return s.length > n ? s.slice(0, n - 1).trimEnd() + '\u2026' : s;
      },
      m = (t) => String(t).padStart(2, '0'),
      d = (n) => (0, t.localDigits)(`${m(n.getHours())}:${m(n.getMinutes())}`),
      h = (t) => new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime(),
      p = (t) =>
        new Date(t.getFullYear(), t.getMonth(), t.getDate() + 1).getTime();
    function y(n, s) {
      const r = /^(\d{4})-(\d{2})-(\d{2})/.exec(n);
      if (!r) return '';
      const o = Math.round(
        (new Date(+r[1], +r[2] - 1, +r[3]).getTime() - h(s)) / 864e5,
      );
      return o < 0
        ? (0, t.L)('\u06af\u0630\u0634\u062a\u0647')
        : 0 === o
          ? (0, t.L)('\u0627\u0645\u0631\u0648\u0632')
          : 1 === o
            ? (0, t.L)('\u0641\u0631\u062f\u0627')
            : (0, t.L)('{n} \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631', {
                n: (0, t.localDigits)(o),
              });
    }
    const f = (n) => (0, t.localDigits)(Math.max(0, Math.round(n)));
    function L(t, s, r, o) {
      const u = (0, n.shortParts)(r);
      return {
        kind: t,
        title: s,
        value: u.value,
        unit: u.unit,
        lines: o.slice(0, c),
        short: `${s}: ${u.value} ${u.unit}`,
        link: a(t),
        locked: !1,
        empty: !1,
        money: !0,
      };
    }
    function b(n, s, r, o, u) {
      const m = f(r);
      return {
        kind: n,
        title: s,
        value: m,
        unit: o,
        lines: u.slice(0, c).map((t) => l(t)),
        short:
          r > 0
            ? `${s}: ${m}`
            : `${s}: ${(0, t.L)('\u0686\u06cc\u0632\u06cc \u0646\u06cc\u0633\u062a')}`,
        link: a(n),
        locked: !1,
        empty: r <= 0,
        money: !1,
      };
    }
    function k(t, n) {
      return {
        kind: t,
        title: n,
        value: '\u2014',
        unit: '',
        lines: [],
        short: n,
        link: a(t),
        locked: !0,
        empty: !1,
        money: !1,
      };
    }
    const x = {
      sales: '\u0641\u0631\u0648\u0634 \u0627\u0645\u0631\u0648\u0632',
      expenses:
        '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0645\u0627\u0647',
      payments: '\u0637\u0644\u0628 \u0648 \u0628\u062f\u0647\u06cc',
      cheques:
        '\u0686\u06a9\u200c\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647',
      reminders: '\u06cc\u0627\u062f\u0622\u0648\u0631\u0647\u0627',
      history: '\u0622\u062e\u0631\u06cc\u0646 \u06a9\u0627\u0631\u0647\u0627',
      stock: '\u06a9\u0645\u200c\u0645\u0648\u062c\u0648\u062f\u06cc',
    };
    function T(t, n) {
      const s = h(n),
        r = s + 6048e5;
      return t
        .filter((t) => {
          if ('pending' !== t.status) return !1;
          const n = /^(\d{4})-(\d{2})-(\d{2})/.exec(t.dueDate);
          if (!n) return !1;
          const o = new Date(+n[1], +n[2] - 1, +n[3]).getTime();
          return o >= s && o < r;
        })
        .sort((t, n) => t.dueDate.localeCompare(n.dueDate));
    }
    const D = (t) => JSON.stringify(t);
  },
  990,
  [311, 435],
);
