// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 520; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'PEOPLE_FILTERS', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (e.peopleQuery = l),
      (e.fitsPeople = u),
      Object.defineProperty(e, 'peopleName', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(e, 'personName', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'PERSON_TABS', {
        enumerable: !0,
        get: function () {
          return w;
        },
      }),
      Object.defineProperty(e, 'WARM_PEOPLE', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      Object.defineProperty(e, 'ledgerWaits', {
        enumerable: !0,
        get: function () {
          return S;
        },
      }),
      (e.noteOpen = function (o) {
        o && void 0 === t.swrStore.peek(o) && (v += 1);
      }),
      (e.warmLedger = function (s, u) {
        const y = (0, t.scoped)(s.id, 'ledger-summary');
        return y
          ? ((P && k === y) ||
              ((k = y),
              (P = (async () => {
                if (!(await h(y, () => (0, o.readLedgerSummary)(s)))) return;
                const v = await Promise.all(
                    c.map((n) =>
                      h((0, t.scoped)(s.id, f(n)), () =>
                        (0, o.listContacts)(s, l(n)),
                      ),
                    ),
                  ),
                  S = await h((0, t.scoped)(s.id, 'contacts:favorites'), () =>
                    (0, n.listFavorites)(s),
                  );
                u && (await h((0, t.scoped)(s.id, 'cheques'), () => u(s)));
                const P = (0, i.monthOf)(
                    (0, i.todayIn)(s.timezone || 'Asia/Tehran'),
                  ),
                  k = (0, i.monthRange)(P.year, P.month);
                (await h((0, t.scoped)(s.id, 'expenses:' + k.from), () =>
                  (0, a.listExpenses)(s, k.from, k.to),
                ),
                  await h((0, t.scoped)(s.id, 'expense-reminders'), () =>
                    (0, a.listExpenseReminders)(s),
                  ));
                const T = [...(S || []), ...(v[0]?.contacts || [])]
                  .map((t) => t.id)
                  .filter((t, o, n) => n.indexOf(t) === o)
                  .slice(0, b);
                for (const n of T) {
                  const a = (0, t.scoped)(s.id, p(n, w[0]));
                  if (!a) return;
                  (await t.swrStore.hydrate(a),
                    void 0 === t.swrStore.peek(a) &&
                      (await h(a, () => (0, o.readContact)(s, n, void 0, w[0])),
                      await O(150)));
                }
              })().finally(() => {
                P = null;
              }))),
            P)
          : Promise.resolve();
      }),
      (e.warmPerson = async function (n, a) {
        await Promise.all(
          w.map(async (i) => {
            const s = (0, t.scoped)(n.id, p(a, i));
            s &&
              (await t.swrStore.hydrate(s),
              void 0 === t.swrStore.peek(s) &&
                (await h(s, () => (0, o.readContact)(n, a, void 0, i))));
          }),
        );
      }),
      (e.knownContact = T),
      (e.seedContact = function (o, n) {
        for (const a of w) {
          const i = (0, t.scoped)(o.id, p(n, a)),
            s = i ? t.swrStore.peek(i) : void 0;
          if (s?.contact) return { ...s, rows: [], entries: [], next: null };
        }
        const a = T(o, n);
        if (!a) return;
        const i = a.balanceToman ?? 0;
        return {
          contact: a,
          entries: [],
          rows: [],
          totals: { balanceToman: i },
          openCheques: [],
          next: null,
          policyRevision: 0,
        };
      }),
      (e.rememberContact = x),
      (e.moveBalance = async function (t, o, n) {
        if (!n) return;
        const a = T(t, o);
        if (!a || void 0 === a.balanceToman) return;
        await x(t, { ...a, balanceToman: a.balanceToman + n });
      }));
    var t = r(d[0]),
      o = r(d[1]),
      n = r(d[2]),
      a = r(d[3]),
      i = r(d[4]);
    const s = ['all', 'owes-me', 'i-owe', 'settled', 'customer', 'supplier'],
      c = ['all', 'owes-me', 'i-owe', 'settled'];
    function l(t) {
      return 'all' === t
        ? {}
        : 'customer' === t || 'supplier' === t
          ? { kind: t }
          : { balance: t };
    }
    function u(t, o) {
      const n = o.balanceToman ?? 0;
      return (
        'all' === t ||
        ('owes-me' === t
          ? n > 0
          : 'i-owe' === t
            ? n < 0
            : 'settled' === t
              ? 0 === n
              : o.kind === t || 'both' === o.kind)
      );
    }
    const f = (t, o = '') => 'contacts:' + t + ':' + o,
      p = (t, o = {}) =>
        'contact:' + t + (Object.keys(o).length ? ':' + JSON.stringify(o) : ''),
      w = [{ type: 'sale' }, {}, { type: 'cheque' }],
      y = (t, o) => u(t, o),
      b = 12;
    let v = 0;
    const S = {
      count: () => v,
      reset() {
        v = 0;
      },
    };
    async function h(o, n) {
      if (o) {
        if ((await t.swrStore.hydrate(o), t.swrStore.fresh(o, t.SWR_FRESH_MS)))
          return t.swrStore.peek(o);
        try {
          return await t.swrStore.revalidate(o, n);
        } catch {
          return;
        }
      }
    }
    const O = (t) => new Promise((o) => setTimeout(o, t));
    let P = null,
      k = '';
    function T(o, n) {
      for (const a of w) {
        const i = (0, t.scoped)(o.id, p(n, a)),
          s = i ? t.swrStore.peek(i) : void 0;
        if (s?.contact) return s.contact;
      }
      for (const a of s) {
        const i = (0, t.scoped)(o.id, f(a)),
          s = i ? t.swrStore.peek(i) : void 0,
          c = s?.contacts?.find((t) => t.id === n);
        if (c) return c;
      }
      const a = (0, t.scoped)(o.id, 'contacts:favorites'),
        i = a ? t.swrStore.peek(a) : void 0;
      return Array.isArray(i) ? i.find((t) => t.id === n) : void 0;
    }
    async function x(o, n, { added: a = !1 } = {}) {
      const i = T(o, n.id),
        c = [];
      for (const l of s) {
        const s = (0, t.scoped)(o.id, f(l)),
          u = s ? t.swrStore.peek(s) : void 0;
        if (!s || !u?.contacts) continue;
        const p = u.contacts.some((t) => t.id === n.id),
          w = y(l, n);
        let b = u.contacts;
        if (p)
          b = w
            ? b.map((t) => (t.id === n.id ? { ...t, ...n } : t))
            : b.filter((t) => t.id !== n.id);
        else if (w && (a || i)) {
          const t = b[b.length - 1];
          (!u.next || !t || n.id < t.id) &&
            (b = [...b, n].sort((t, o) =>
              t.id < o.id ? -1 : t.id > o.id ? 1 : 0,
            ));
        }
        b !== u.contacts && c.push(t.swrStore.set(s, { ...u, contacts: b }));
      }
      for (const a of w) {
        const i = (0, t.scoped)(o.id, p(n.id, a)),
          s = i ? t.swrStore.peek(i) : void 0;
        i &&
          s &&
          c.push(
            t.swrStore.set(i, {
              ...s,
              contact: { ...s.contact, ...n },
              totals: {
                ...s.totals,
                balanceToman: n.balanceToman ?? s.totals.balanceToman,
              },
            }),
          );
      }
      const l = (0, t.scoped)(o.id, 'ledger-summary'),
        u = l ? t.swrStore.peek(l) : void 0,
        b = a ? 0 : i?.balanceToman,
        v = n.balanceToman;
      (l &&
        u &&
        void 0 !== b &&
        void 0 !== v &&
        void 0 !== u.theyOweMe &&
        void 0 !== u.iOwe &&
        c.push(
          t.swrStore.set(l, {
            ...u,
            theyOweMe: u.theyOweMe + Math.max(v, 0) - Math.max(b, 0),
            iOwe: u.iOwe + Math.max(-v, 0) - Math.max(-b, 0),
          }),
        ),
        await Promise.all(c));
    }
  },
  520,
  [489, 519, 521, 522, 443],
);
