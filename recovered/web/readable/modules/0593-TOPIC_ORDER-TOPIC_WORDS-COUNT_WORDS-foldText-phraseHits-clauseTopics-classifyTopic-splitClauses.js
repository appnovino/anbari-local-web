// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 593; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'TOPIC_ORDER', {
        enumerable: !0,
        get: function () {
          return e;
        },
      }),
      Object.defineProperty(_e, 'TOPIC_WORDS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(_e, 'COUNT_WORDS', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      (_e.foldText = o),
      (_e.phraseHits = f),
      (_e.clauseTopics = N),
      (_e.classifyTopic = O),
      (_e.splitClauses = k),
      (_e.spokenWhen = P),
      (_e.readReminder = Y),
      (_e.applyTopicRule = function (e, n) {
        if (!e || 'string' != typeof e.transcript || !e.transcript.trim())
          return e;
        const t = k(e.transcript);
        if (!t.some((e) => e.topic)) return e;
        let s = e.expenses ? [...e.expenses] : void 0,
          r = e.ledger ? [...e.ledger] : void 0,
          l = [...e.actions];
        const o = e.actions,
          i = [...(e.toBuy || [])],
          c = e.sales ? e.sales.map((e) => ({ ...e })) : void 0;
        let u = !1;
        const a = (e, t) => {
          const s = Y(e, n) ?? {
              name: t.slice(0, 100),
              task: !0,
              ...(P(e.words, n) ? { when: P(e.words, n) } : {}),
            },
            r = i.findIndex(
              (n) => A(n.name, s.name) || (e.words.length > 0 && I(e, n.name)),
            );
          if (r >= 0) {
            const e = i[r];
            !e.when && s.when && (i[r] = { ...e, when: s.when });
          } else i.push(s);
          u = !0;
        };
        for (const e of t.filter((e) => 'reminder' === e.topic)) {
          const n = (s || []).filter(
              (n) => B(t, n.label, 'reminder', !1) === e,
            ),
            i = (r || []).filter(
              (n) =>
                'cheque' !== n.type &&
                B(t, n.contactName, 'reminder', !1) === e,
            ),
            c = l.filter((n) => void 0 === n.saleIndex && L(t, n, o) === e);
          (n.length || i.length || c.length) &&
            ((s = s?.filter((e) => !n.includes(e))),
            (r = r?.filter((e) => !i.includes(e))),
            (l = l.filter((e) => !c.includes(e))),
            a(e, n[0]?.label || i[0]?.contactName || c[0]?.name || ''));
        }
        r &&
          (r = r.map((e) =>
            'cheque' !== e.type && B(t, e.contactName, 'cheque', !1)
              ? ((u = !0),
                {
                  ...e,
                  type: 'cheque',
                  direction: 'payment_in' === e.type ? 'in' : 'out',
                })
              : e,
          ));
        if (
          (c?.forEach((e, n) => {
            e.customerName &&
              'credit' !== e.payment &&
              'cheque' !== e.payment &&
              B(t, e.customerName, 'credit', !1) &&
              ((c[n] = { ...e, payment: 'credit' }), (u = !0));
          }),
          (l = l.map((e) => {
            if ('sold' !== e.kind && 'received' !== e.kind) return e;
            const n = L(t, e, o)?.topic;
            if ('received' === e.kind && 'sale' === n)
              return ((u = !0), { ...e, kind: 'sold' });
            if ('sold' === e.kind && 'receipt' === n) {
              u = !0;
              const { saleIndex: n, ...t } = e;
              return { ...t, kind: 'received' };
            }
            return e;
          })),
          !u)
        )
          return e;
        const h = { ...e, actions: l };
        r?.length ? (h.ledger = r) : delete h.ledger;
        s?.length ? (h.expenses = s) : delete h.expenses;
        i.length ? (h.toBuy = i) : delete h.toBuy;
        c && (h.sales = c);
        h.sale &&
          c &&
          1 === c.length &&
          h.sale.customerName === c[0].customerName &&
          (h.sale = { ...h.sale, payment: c[0].payment });
        return h;
      }));
    const e = [
        'reminder',
        'cheque',
        'credit',
        'contact',
        'expense',
        'ledger',
        'sale',
        'receipt',
      ],
      n = {
        reminder: [
          '\u06cc\u0627\u062f\u0645 \u0628\u0646\u062f\u0627\u0632*',
          '\u06cc\u0627\u062f\u0645 \u0628\u0646\u062f\u0627\u0632\u06cc*',
          '\u06cc\u0627\u062f\u0645\u0648\u0646 \u0628\u0646\u062f\u0627\u0632*',
          '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc*',
          '\u06cc\u0627\u062f \u0622\u0648\u0631\u06cc*',
          '\u06cc\u0627\u062f\u0622\u0648\u0631*',
          '\u06cc\u0627\u062f\u0645 \u0628\u0627\u0634\u0647',
          '\u06cc\u0627\u062f\u062a \u0628\u0627\u0634\u0647',
          '\u06cc\u0627\u062f\u0645 \u0646\u0631\u0647',
          '\u06cc\u0627\u062f\u062a \u0646\u0631\u0647',
          '\u0628\u0628\u0631 \u062a\u0648 \u0644\u06cc\u0633\u062a \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
          '\u0628\u0630\u0627\u0631 \u062a\u0648 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc*',
          '\u0641\u0631\u0627\u0645\u0648\u0634 \u0646\u06a9\u0646\u0645',
          '\u0641\u0631\u0627\u0645\u0648\u0634\u0645 \u0646\u0634\u0647',
        ],
        cheque: [
          '\u0686\u06a9',
          '\u0686\u06a9\u06cc',
          '\u0686\u06a9\u0634',
          '\u0686\u06a9\u0634\u0648',
          '\u0686\u06a9\u0634\u0645',
          '\u0686\u06a9\u0648',
          '\u0686\u06a9\u0645',
          '\u0686\u06a9\u0645\u0648',
          '\u0686\u06a9\u0627',
          '\u0686\u06a9\u0627\u0631\u0648',
          '\u0686\u06a9 \u0647\u0627',
          '\u0686\u06a9\u0647\u0627\u06cc',
          '\u0686\u06a9 \u0647\u0627\u06cc',
          '\u0686\u06a9\u0627\u06cc',
        ],
        credit: [
          '\u0646\u0633\u06cc\u0647*',
          '\u0646\u0633\u06cc\u062d*',
          '\u0646\u0635\u06cc\u0647*',
          '\u0642\u0631\u0627\u0631 \u0634\u062f \u0641\u0631\u062f\u0627 \u067e\u0648\u0644\u0634\u0648 \u0628\u062f\u0647',
          '\u067e\u0648\u0644\u0634\u0648 \u0628\u062f\u0647',
          '\u067e\u0648\u0644\u0634\u0648 \u0645\u06cc\u062f\u0647',
          '\u067e\u0648\u0644\u0634 \u0631\u0648 \u0628\u062f\u0647',
          '\u067e\u0648\u0644\u0634\u0648 \u0628\u0639\u062f\u0627 \u0645\u06cc\u062f\u0647',
          '\u067e\u0648\u0644\u0634\u0648 \u0628\u0639\u062f\u0627 \u0628\u062f\u0647',
          '\u067e\u0648\u0644\u0634\u0648 \u0646\u062f\u0627\u062f',
          '\u067e\u0648\u0644\u0634\u0648 \u0646\u062f\u0627\u062f\u0647',
          '\u0628\u0646\u0648\u06cc\u0633 \u0628\u0647 \u062d\u0633\u0627\u0628*',
          '\u0628\u0647 \u062d\u0633\u0627\u0628\u0634 \u0628\u0646\u0648\u06cc\u0633',
          '\u0631\u0648 \u062d\u0633\u0627\u0628\u0634 \u0628\u0646\u0648\u06cc\u0633',
          '\u0628\u0628\u0631 \u0628\u0647 \u062d\u0633\u0627\u0628*',
          '\u0628\u0628\u0631\u0634 \u0628\u0647 \u062d\u0633\u0627\u0628*',
        ],
        contact: [
          '\u0627\u06cc\u0646 \u0645\u062e\u0627\u0637\u0628 \u062c\u062f\u06cc\u062f\u0647',
          '\u0645\u062e\u0627\u0637\u0628 \u062c\u062f\u06cc\u062f*',
          '\u0645\u062e\u0627\u0637\u0628\u0627\u0645*',
          '\u0645\u062e\u0627\u0637\u0628\u0627\u0645\u0647',
          '\u0645\u062e\u0627\u0637\u0628\u06cc\u0646\u0645',
          '\u0645\u062e\u0627\u0637\u0628\u06cc\u0646',
          '\u062a\u0648 \u0645\u062e\u0627\u0637\u0628\u0627\u0645 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646',
          '\u062a\u0648 \u0645\u062e\u0627\u0637\u0628\u0627\u0645 \u0633\u06cc\u0648 \u06a9\u0646',
          '\u0628\u0631\u0627\u0634 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646',
          '\u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646',
          '\u06cc\u0647 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646',
          '\u0628\u0631\u0627\u0634 \u06cc\u0647 \u062d\u0633\u0627\u0628 \u0628\u0627\u0632 \u06a9\u0646',
          '\u062d\u0633\u0627\u0628 \u0628\u0631\u0627\u0634 \u0628\u0627\u0632 \u06a9\u0646',
          '\u0634\u0645\u0627\u0631\u0634\u0648 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646',
          '\u0634\u0645\u0627\u0631\u0634\u0648 \u0633\u06cc\u0648 \u06a9\u0646',
          '\u0634\u0645\u0627\u0631\u0647 \u0631\u0648 \u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646',
          '\u0634\u0645\u0627\u0631\u0634\u0648 \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634',
          '\u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646 \u0628\u0647 \u0627\u0633\u0645',
          '\u0633\u06cc\u0648 \u06a9\u0646 \u0628\u0647 \u0627\u0633\u0645',
          '\u0645\u0634\u062a\u0631\u06cc \u062c\u062f\u06cc\u062f\u0647',
          '\u0645\u0634\u062a\u0631\u06cc \u062c\u062f\u06cc\u062f',
          '\u0647\u0645\u06a9\u0627\u0631 \u062c\u062f\u06cc\u062f*',
          '\u062a\u0627\u0645\u06cc\u0646 \u06a9\u0646\u0646\u062f\u0647 \u062c\u062f\u06cc\u062f*',
          '\u0641\u0631\u0648\u0634\u0646\u062f\u0647 \u062c\u062f\u06cc\u062f*',
          '\u067e\u062e\u0634 \u062c\u062f\u06cc\u062f*',
          '\u0630\u062e\u06cc\u0631\u0647 \u06a9\u0646',
          '\u0633\u06cc\u0648 \u06a9\u0646',
          '\u0634\u0645\u0627\u0631\u0647 \u0627\u0634',
          '\u0634\u0645\u0627\u0631\u0634\u0648',
          '\u0634\u0645\u0627\u0631\u0647 \u0634',
        ],
        expense: [
          '\u0647\u0632\u06cc\u0646\u0647*',
          '\u0627\u06cc\u0646 \u0647\u0632\u06cc\u0646\u0647 \u0645\u0647',
          '\u062e\u0631\u062c*',
          '\u0628\u0627\u0628\u062a \u0634\u0627\u0631\u0698 \u0633\u0627\u062e\u062a\u0645\u0648\u0646',
          '\u0628\u0627\u0628\u062a \u0634\u0627\u0631\u0698 \u0633\u0627\u062e\u062a\u0645\u0627\u0646',
          '\u0634\u0627\u0631\u0698 \u0633\u0627\u062e\u062a\u0645\u0648\u0646*',
          '\u0634\u0627\u0631\u0698 \u0633\u0627\u062e\u062a\u0645\u0627\u0646*',
          '\u0642\u0633\u0637\u0645\u0647',
          '\u0648\u0627\u0645\u0645\u0647',
          '\u0642\u0633\u0637',
          '\u0642\u0633\u0637\u0645',
          '\u0642\u0633\u0637\u0645\u0648',
          '\u0642\u0633\u0637\u0634\u0648',
          '\u0642\u0633\u0637\u0634',
          '\u0627\u0642\u0633\u0627\u0637',
          '\u0642\u0633\u0637\u0627',
          '\u0642\u0633\u0637\u0627\u06cc',
          '\u0642\u0633\u0637 \u0648\u0627\u0645*',
          '\u0627\u062c\u0627\u0631\u0647*',
          '\u06a9\u0631\u0627\u06cc\u0647 \u0645\u063a\u0627\u0632\u0647*',
          '\u06a9\u0631\u0627\u06cc\u0647*',
          '\u0642\u0628\u0636*',
          '\u0645\u0627\u0644\u06cc\u0627\u062a*',
          '\u0639\u0648\u0627\u0631\u0636*',
          '\u0647\u0631 \u0645\u0627\u0647 \u0628\u0627\u06cc\u062f \u0628\u062f\u0645',
          '\u0647\u0631 \u0645\u0627\u0647 \u067e\u0631\u062f\u0627\u062e\u062a \u0645\u06cc\u06a9\u0646\u0645',
          '\u0647\u0631 \u0645\u0627\u0647 \u0645\u06cc\u062f\u0645',
          '\u0645\u0627\u0647\u06cc \u0628\u0627\u06cc\u062f \u0628\u062f\u0645',
          '\u062d\u0642\u0648\u0642*',
          '\u0646\u06af\u0647\u0628\u0627\u0646\u06cc',
          '\u06a9\u0627\u0631\u0645\u0632\u062f*',
          '\u062a\u0628\u0644\u06cc\u063a\u0627\u062a',
          '\u0628\u06cc\u0645\u0647',
          '\u0628\u0627\u0631\u0628\u0631\u06cc',
          '\u0634\u0627\u0631\u0698 \u06a9\u0627\u0631\u062a\u062e\u0648\u0627\u0646',
          '\u0634\u0627\u0631\u0698 \u067e\u0627\u0633\u0627\u0698',
          '\u062a\u0639\u0645\u06cc\u0631 \u06a9\u0648\u0644\u0631',
          '\u062a\u0639\u0645\u06cc\u0631 \u06cc\u062e\u0686\u0627\u0644',
        ],
        ledger: [
          '\u0628\u062f\u0647\u06a9\u0627\u0631*',
          '\u0637\u0644\u0628 \u062f\u0627\u0631\u0645',
          '\u0637\u0644\u0628 \u062f\u0627\u0631\u0647',
          '\u0637\u0644\u0628\u06a9\u0627\u0631*',
          '\u0628\u0633\u062a\u0627\u0646\u06a9\u0627\u0631*',
          '\u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0631\u062f\u0645 \u0628\u0647\u0634',
          '\u0628\u0647\u0634 \u067e\u0648\u0644 \u062f\u0627\u062f\u0645',
          '\u0627\u0632\u0634 \u067e\u0648\u0644 \u06af\u0631\u0641\u062a\u0645',
          '\u067e\u0648\u0644 \u062f\u0627\u062f\u0645 \u0628\u0647',
          '\u067e\u0648\u0644 \u06af\u0631\u0641\u062a\u0645 \u0627\u0632',
          '\u06a9\u0627\u0631\u062a \u0628\u0647 \u06a9\u0627\u0631\u062a*',
          '\u0648\u0627\u0631\u06cc\u0632 \u06a9\u0631\u062f\u0645',
          '\u0648\u0627\u0631\u06cc\u0632 \u06a9\u0631\u062f',
          '\u0631\u06cc\u062e\u062a\u0645 \u0628\u0647 \u062d\u0633\u0627\u0628*',
          '\u0628\u062f\u0647\u06cc\u0634\u0648*',
          '\u0628\u062f\u0647\u06cc\u0634*',
          '\u0628\u062f\u0647\u06cc*',
          '\u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0631\u062f\u0645',
          '\u0637\u0644\u0628\u0645',
          '\u0637\u0644\u0628\u0645\u0648',
          '\u0637\u0644\u0628\u0634\u0648',
          '\u062d\u0633\u0627\u0628\u0634\u0648 \u0635\u0627\u0641 \u06a9\u0631\u062f*',
          '\u062d\u0633\u0627\u0628\u0645\u0648 \u0635\u0627\u0641 \u06a9\u0631\u062f\u0645',
          '\u062d\u0633\u0627\u0628\u0634\u0648 \u0635\u0627\u0641 \u06a9\u0631\u062f\u0645',
          '\u062a\u0633\u0648\u06cc\u0647 \u06a9\u0631\u062f*',
          '\u062a\u0633\u0648\u06cc\u0647 \u06a9\u0631\u062f\u0645',
        ],
        sale: [
          '\u0641\u0631\u0648\u062e\u062a\u0645*',
          '\u0641\u0631\u0648\u062e\u062a\u06cc\u0645*',
          '\u0641\u0631\u0648\u062e\u062a',
          '\u0641\u0631\u0648\u062e\u062a\u0646',
          '\u0641\u0631\u0648\u0634 \u0631\u0641\u062a*',
          '\u0641\u0631\u0648\u062e\u062a\u0647 \u0634\u062f',
          '\u062a\u062d\u0648\u06cc\u0644 \u062f\u0627\u062f\u0645 \u0628\u0647\u0634',
          '\u062a\u062d\u0648\u06cc\u0644\u0634 \u062f\u0627\u062f\u0645',
          '\u06a9\u0645 \u06a9\u0646 \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc',
          '\u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0645 \u06a9\u0646',
          '\u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc*',
          '\u062e\u0631\u06cc\u062f',
          '\u062e\u0631\u06cc\u062f\u0646',
          '\u0628\u0631\u062f',
          '\u0628\u0631\u062f\u0646',
          '\u062f\u0627\u062f\u0645 \u0628\u0647',
          '\u062f\u0627\u062f\u0645 \u0628\u0647\u0634',
          '\u0628\u0647\u0634 \u062f\u0627\u062f\u0645',
          '\u06a9\u0645 \u06a9\u0646',
          '\u0641\u0631\u0648\u0634 \u0646\u0642\u062f\u06cc',
          '\u0641\u0631\u0648\u0634',
          '\u06a9\u0627\u0631\u062a\u062e\u0648\u0627\u0646 \u06a9\u0634\u06cc\u062f',
        ],
        receipt: [
          '\u0631\u0633\u06cc\u062f',
          '\u0631\u0633\u06cc\u062f\u0646',
          '\u0645\u062d\u0635\u0648\u0644 \u0627\u0648\u0645\u062f',
          '\u0627\u0648\u0645\u062f',
          '\u0627\u0648\u0645\u062f\u0646',
          '\u062a\u062d\u0648\u06cc\u0644 \u06af\u0631\u0641\u062a\u0645',
          '\u062a\u062d\u0648\u06cc\u0644 \u06af\u0631\u0641\u062a\u06cc\u0645',
          '\u062e\u0631\u06cc\u062f\u0645',
          '\u062e\u0631\u06cc\u062f\u06cc\u0645',
          '\u0622\u0648\u0631\u062f\u0645',
          '\u0622\u0648\u0631\u062f\u06cc\u0645',
          '\u0622\u0648\u0631\u062f\u0646',
          '\u0622\u0648\u0631\u062f',
          '\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0645',
          '\u0627\u0636\u0627\u0641\u0647 \u06a9\u0646 \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc',
          '\u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646*',
          '\u06af\u0631\u0641\u062a\u0645',
          '\u06af\u0631\u0641\u062a\u06cc\u0645',
          '\u0628\u0627\u0631 \u0627\u0648\u0645\u062f',
          '\u0628\u0627\u0631 \u0631\u0633\u06cc\u062f',
          '\u0627\u0648\u0645\u062f\u0647',
          '\u0622\u0645\u062f',
          '\u0622\u0645\u062f\u0646',
          '\u0622\u0645\u062f\u0647',
          '\u0631\u0633\u06cc\u062f\u0647',
          '\u0627\u0636\u0627\u0641\u0647 \u06a9\u0646',
          '\u0628\u0632\u0646 \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc',
          '\u0648\u0627\u0631\u062f \u0627\u0646\u0628\u0627\u0631*',
          '\u06af\u0630\u0627\u0634\u062a\u0645 \u062a\u0648 \u0627\u0646\u0628\u0627\u0631',
          '\u06af\u0630\u0627\u0634\u062a\u06cc\u0645 \u062a\u0648 \u0627\u0646\u0628\u0627\u0631',
          '\u062a\u062d\u0648\u06cc\u0644\u0645 \u062f\u0627\u062f\u0646',
          '\u062a\u062d\u0648\u06cc\u0644\u0645 \u062f\u0627\u062f',
          '\u0648\u0631\u0648\u062f\u06cc',
        ],
      },
      t = new Set([
        '\u062a\u0648\u0645\u0646',
        '\u062a\u0648\u0645\u0627\u0646',
        '\u062a\u0648\u0645\u0646\u0634\u0648',
        '\u062a\u0648\u0645\u0646\u06cc',
        '\u0645\u06cc\u0644\u06cc\u0648\u0646',
        '\u0645\u06cc\u0644\u06cc\u0648\u0646\u06cc',
        '\u0645\u0644\u06cc\u0648\u0646',
        '\u0647\u0632\u0627\u0631',
        '\u0631\u06cc\u0627\u0644',
        '\u067e\u0648\u0644',
        '\u067e\u0648\u0644\u0634\u0648',
        '\u067e\u0648\u0644\u0634',
      ]),
      s = new Set([
        '\u062f\u0627\u062f\u0645',
        '\u062f\u0627\u062f\u06cc\u0645',
        '\u06af\u0631\u0641\u062a\u0645',
        '\u06af\u0631\u0641\u062a\u06cc\u0645',
        '\u062f\u0627\u062f',
        '\u062f\u0627\u062f\u0646',
        '\u0631\u06cc\u062e\u062a\u0645',
        '\u062f\u0627\u062f\u0645\u0634',
      ]),
      r = new Set([
        '\u0628\u0647',
        '\u0627\u0632',
        '\u0628\u0647\u0634',
        '\u0627\u0632\u0634',
        '\u0628\u0647\u0645',
        '\u0622\u0642\u0627\u06cc',
        '\u0627\u0642\u0627\u06cc',
        '\u0622\u0642\u0627',
        '\u0627\u0642\u0627',
        '\u062e\u0627\u0646\u0645',
        '\u062e\u0627\u0646\u0648\u0645',
        '\u062d\u0627\u062c',
        '\u062d\u0627\u062c\u06cc',
        '\u0645\u0634',
      ]),
      l = [
        '\u062a\u0627',
        '\u062f\u0648\u0646\u0647',
        '\u062f\u0627\u0646\u0647',
        '\u0639\u062f\u062f',
        '\u06a9\u06cc\u0644\u0648',
        '\u0628\u0633\u062a\u0647',
        '\u06a9\u0627\u0631\u062a\u0646',
        '\u06a9\u0627\u0631\u062a\u0648\u0646',
        '\u062c\u0639\u0628\u0647',
        '\u0628\u0627\u06a9\u0633',
        '\u0628\u0637\u0631\u06cc',
        '\u0634\u06cc\u0634\u0647',
        '\u0645\u062a\u0631',
        '\u0644\u06cc\u062a\u0631',
        '\u062c\u0641\u062a',
        '\u06a9\u06cc\u0633\u0647',
        '\u06af\u0648\u0646\u06cc',
        '\u0634\u0648\u0646\u0647',
        '\u0628\u0627\u0631',
      ];
    function o(e, n = !1) {
      let t = String(e || '')
        .normalize('NFKC')
        .replace(/[\u064a\u0649]/g, '\u06cc')
        .replace(/\u0643/g, '\u06a9')
        .replace(/[\u06c0\u0629]/g, '\u0647')
        .replace(n ? /[\u0623\u0625]/g : /[\u0623\u0625\u0622]/g, '\u0627')
        .replace(/\u0624/g, '\u0648')
        .replace(/[\u064B-\u0652\u0670\u0640]/g, '')
        .replace(/[\u200c\u200d\u00a0]/g, ' ')
        .replace(/[\u06f0-\u06f9]/g, (e) =>
          n
            ? e
            : String(
                '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                  e,
                ),
              ),
        )
        .replace(/[\u0660-\u0669]/g, (e) =>
          n
            ? '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'[
                '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
                  e,
                )
              ]
            : String(
                '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
                  e,
                ),
              ),
        )
        .replace(
          /[!?\u061f\xab\xbb"'()\[\]\-\u2013\u2014:\u061b;.,\u060c\n\r\t]/g,
          ' ',
        )
        .replace(/\s+/g, ' ')
        .trim();
      return (
        (t = t.replace(
          /(^| )(\u0646?\u0645\u06cc) (?=\S)/g,
          n ? '$1$2\u200c' : '$1$2',
        )),
        t
      );
    }
    const i = (e) => o(e).split(' ').filter(Boolean),
      c = (e) =>
        e
          .map((e) => {
            const n = e.endsWith('*');
            return { words: i(n ? e.slice(0, -1) : e), star: n };
          })
          .filter((e) => e.words.length > 0),
      u = Object.fromEntries(e.map((e) => [e, c(n[e])])),
      a = c([
        '\u0686\u06a9 \u06a9\u0646',
        '\u0686\u06a9 \u06a9\u0646\u0645',
        '\u0686\u06a9 \u06a9\u0631\u062f\u0645',
        '\u0686\u06a9 \u0628\u06a9\u0646',
        '\u0686\u06a9\u0634 \u06a9\u0646',
        '\u0627\u0636\u0627\u0641\u0647 \u06a9\u0646 \u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
        '\u0628\u0647 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646',
        '\u0628\u0630\u0627\u0631 \u062a\u0648 \u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
        '\u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
        '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a \u06a9\u0646 \u0628\u0631\u0627\u06cc \u062e\u0631\u06cc\u062f',
        '\u0628\u0631\u0627\u06cc \u062e\u0631\u06cc\u062f',
        '\u06cc\u0627\u062f\u0645 \u0627\u0648\u0645\u062f',
        '\u06cc\u0627\u062f\u0645 \u0631\u0641\u062a',
        '\u067e\u0633 \u062f\u0627\u062f\u0645',
        '\u067e\u0633 \u062f\u0627\u062f\u06cc\u0645',
        '\u06a9\u0645 \u06a9\u0646\u0645',
        '\u062e\u0631\u062c \u06a9\u0627\u0631 \u0634\u062f',
        '\u062e\u0631\u062c \u06a9\u0627\u0631',
      ]),
      h = [
        [
          '\u062e\u0631\u06cc\u062f \u06a9\u0631\u062f\u0645',
          '\u062e\u0631\u06cc\u062f\u0645',
        ],
        [
          '\u062e\u0631\u06cc\u062f \u06a9\u0631\u062f\u06cc\u0645',
          '\u062e\u0631\u06cc\u062f\u06cc\u0645',
        ],
      ].map(([e, n]) => [i(e), i(n)]),
      d = (e, n, t) =>
        t.words.every((s, r) => {
          const l = e[n + r];
          return (
            void 0 !== l &&
            (l === s || (t.star && r === t.words.length - 1 && l.startsWith(s)))
          );
        });
    function f(e, n) {
      const t = 'string' == typeof n[0] ? c(n) : n,
        s = [];
      for (let n = 0; n < e.length; n++) t.some((t) => d(e, n, t)) && s.push(n);
      return s;
    }
    function m(e) {
      const n = [];
      for (let t = 0; t < e.length; ) {
        const s = a.find((n) => d(e, t, { ...n, star: !1 }));
        if (s) {
          t += s.words.length;
          continue;
        }
        const r = h.find(([n]) => n.every((n, s) => e[t + s] === n));
        r ? (n.push(...r[1]), (t += r[0].length)) : (n.push(e[t]), t++);
      }
      return n;
    }
    const p = new Set([
        '\u0686\u06a9\u0634',
        '\u0686\u06a9\u0634\u0648',
        '\u0686\u06a9\u0634\u0645',
        '\u0686\u06a9\u0634\u0627',
        '\u0686\u06a9\u0634\u0647\u0627',
        '\u0686\u06a9\u0634\u0627\u06cc',
      ]),
      w = new Set([
        '\u067e\u0627\u0633',
        '\u0633\u0631\u0631\u0633\u06cc\u062f',
        '\u0633\u0631\u0631\u0633\u06cc\u062f\u0634',
        '\u0628\u0631\u06af\u0634\u062a',
        '\u0628\u0631\u06af\u0634\u062a\u06cc',
        '\u0628\u0627\u0646\u06a9',
        '\u0635\u06cc\u0627\u062f\u06cc',
        '\u0635\u06cc\u0627\u062f',
        '\u0648\u0635\u0648\u0644',
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
      ]),
      y = new Set([...w, '\u0646\u0642\u062f', '\u067e\u0648\u0644']),
      v = new Set(
        [
          '\u0641\u0631\u0648\u062e\u062a\u0645',
          '\u0641\u0631\u0648\u062e\u062a\u06cc\u0645',
          '\u0641\u0631\u0648\u062e\u062a',
          '\u0641\u0631\u0648\u062e\u062a\u0646',
          '\u0641\u0631\u0648\u062e\u062a\u0645\u0634',
          '\u0641\u0631\u0648\u0634',
          '\u062e\u0631\u06cc\u062f\u0645',
          '\u062e\u0631\u06cc\u062f\u06cc\u0645',
          '\u062e\u0631\u06cc\u062f',
          '\u062e\u0631\u06cc\u062f\u0646',
          '\u062e\u0631\u06cc\u062f\u0645\u0634',
          '\u0622\u0648\u0631\u062f\u0645',
          '\u0622\u0648\u0631\u062f\u06cc\u0645',
          '\u0622\u0648\u0631\u062f\u0646',
          '\u0622\u0648\u0631\u062f',
          '\u0627\u0648\u0645\u062f',
          '\u0627\u0648\u0645\u062f\u0646',
        ].map((e) => o(e)),
      ),
      S = (e) =>
        e.some(
          (e) => y.has(e) || t.has(e) || (/^\d+$/.test(e) && Number(e) >= 1e3),
        ),
      b = (e) =>
        void 0 !== e &&
        (/^\d+$/.test(e) || (void 0 !== D[e] && '\u0646\u0647' !== e)),
      x = (e) =>
        e.some(
          (n, t) =>
            (/^\d+$/.test(n) || void 0 !== D[n]) && l.includes(e[t + 1] || ''),
        );
    function j(e, n) {
      return (
        !!x(e) ||
        (!e.some((e) => w.has(e)) &&
          (!!n.some((n) => b(e[n - 1])) ||
            !!e.some((e) => v.has(e)) ||
            !(S(e) || (e.some((e) => s.has(e)) && e.some((e) => r.has(e))))))
      );
    }
    function N(n) {
      const l = m('string' == typeof n ? i(n) : n.flatMap((e) => i(e)));
      let o = e.filter((e) => f(l, u[e]).length > 0);
      const c = o.includes('cheque') ? f(l, u.cheque) : [];
      return (
        c.length &&
          c.every((e) => p.has(l[e])) &&
          j(l, c) &&
          (o = o.filter((e) => 'cheque' !== e)),
        !o.includes('ledger') &&
        l.some((e) => t.has(e)) &&
        l.some((e) => s.has(e)) &&
        l.some((e) => r.has(e)) &&
        !x(l)
          ? e.filter((e) => 'ledger' === e || o.includes(e))
          : o
      );
    }
    function O(e) {
      return N(e)[0] ?? null;
    }
    const $ = new Set(
        [
          '\u0641\u0631\u0648\u062e\u062a\u0645',
          '\u0641\u0631\u0648\u062e\u062a\u06cc\u0645',
          '\u0641\u0631\u0648\u062e\u062a\u0645\u0634',
          '\u0631\u0633\u06cc\u062f',
          '\u0631\u0633\u06cc\u062f\u0646',
          '\u0627\u0648\u0645\u062f',
          '\u0627\u0648\u0645\u062f\u0646',
          '\u0622\u0648\u0631\u062f\u0645',
          '\u0622\u0648\u0631\u062f\u0646',
          '\u0622\u0648\u0631\u062f',
          '\u062e\u0631\u06cc\u062f\u0645',
          '\u062e\u0631\u06cc\u062f\u06cc\u0645',
          '\u062e\u0631\u06cc\u062f',
          '\u06af\u0631\u0641\u062a\u0645',
          '\u06af\u0631\u0641\u062a\u06cc\u0645',
          '\u062f\u0627\u062f\u0645',
          '\u062f\u0627\u062f\u06cc\u0645',
          '\u0628\u0631\u062f\u0645',
          '\u0628\u0631\u062f',
          '\u0628\u0631\u062f\u0646',
          '\u06a9\u0646\u0645',
          '\u0628\u06a9\u0646\u0645',
          '\u0628\u062e\u0631\u0645',
          '\u0628\u06af\u06cc\u0631\u0645',
          '\u0628\u062f\u0645',
          '\u0628\u0632\u0646\u0645',
          '\u0628\u067e\u0631\u062f\u0627\u0632\u0645',
          '\u06a9\u0631\u062f\u0645',
          '\u06a9\u0646',
          '\u0628\u062f\u0647',
          '\u0645\u06cc\u062f\u0647',
          '\u0628\u0646\u0648\u06cc\u0633',
          '\u0628\u062f\u0647\u06a9\u0627\u0631\u0645',
          '\u0628\u062f\u0647\u06a9\u0627\u0631\u0647',
          '\u0631\u0641\u062a',
          '\u0634\u062f',
          '\u06a9\u0631\u062f\u06cc\u0645',
          '\u0634\u06a9\u0633\u062a',
          '\u06af\u0646\u062f\u06cc\u062f',
          '\u0633\u0648\u062e\u062a',
          '\u0636\u0627\u06cc\u0639\u0627\u062a',
          '\u06af\u0630\u0634\u062a',
          '\u062e\u0648\u0631\u062f',
          '\u0628\u0631\u062f\u0627\u0634\u062a\u0645',
          '\u06af\u0630\u0627\u0634\u062a\u0645',
        ].map((e) => o(e)),
      ),
      T = new Set(
        [
          '\u0631\u0627\u0633\u062a\u06cc',
          '\u0636\u0645\u0646\u0627',
          '\u0636\u0645\u0646\u0627\u064b',
          '\u0628\u0639\u062f\u0645',
          '\u0647\u0645\u0686\u0646\u06cc\u0646',
        ].map((e) => o(e)),
      ),
      q = new Set([
        '\u0633\u0627\u0639\u062a',
        '\u0627\u0645\u0634\u0628',
        '\u0627\u0645\u0631\u0648\u0632',
        '\u0641\u0631\u062f\u0627',
        '\u0641\u0631\u062f\u0627\u0634\u0628',
        '\u067e\u0633\u0641\u0631\u062f\u0627',
        '\u067e\u0633',
        '\u0634\u0646\u0628\u0647',
        '\u06cc\u06a9\u0634\u0646\u0628\u0647',
        '\u062f\u0648\u0634\u0646\u0628\u0647',
        '\u0633\u0647',
        '\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647',
        '\u067e\u0646\u062c\u0634\u0646\u0628\u0647',
        '\u062c\u0645\u0639\u0647',
      ]),
      D = {
        '\u06cc\u06a9': 1,
        '\u06cc\u0647': 1,
        '\u062f\u0648': 2,
        '\u0633\u0647': 3,
        '\u0686\u0647\u0627\u0631': 4,
        '\u067e\u0646\u062c': 5,
        '\u0634\u0634': 6,
        '\u0634\u06cc\u0634': 6,
        '\u0647\u0641\u062a': 7,
        '\u0647\u0634\u062a': 8,
        '\u0646\u0647': 9,
        '\u062f\u0647': 10,
        '\u06cc\u0627\u0632\u062f\u0647': 11,
        '\u062f\u0648\u0627\u0632\u062f\u0647': 12,
      };
    function k(e) {
      const n = String(e || '').split(/[\u060c,.\u061b;!?\u061f\n]+/),
        t = [];
      for (const e of n) {
        const n = i(e),
          s = o(e, !0).split(' ').filter(Boolean),
          r = s.length === n.length ? s : n;
        let c = 0;
        const a = (e, s) => {
          e > c &&
            (t.push({ words: n.slice(c, e), shown: r.slice(c, e), closed: s }),
            (c = e));
        };
        (n.forEach((e, t) => {
          const s = n[t + 1];
          ((t > c &&
            (/^\d+$/.test(e) || (void 0 !== D[e] && '\u0646\u0647' !== e)) &&
            l.includes(s || '') &&
            !/^\d+$/.test(n[t - 1] || '') &&
            !q.has(n[t - 1] || '') &&
            '\u0648' !== n[t - 1]) ||
          (t > c &&
            q.has(e) &&
            !q.has(n[t - 1] || '') &&
            f(n.slice(t, t + 7), u.reminder).length)
            ? a(t, !1)
            : t > c &&
              (T.has(e) ||
                ('\u06cc\u0647' === e &&
                  '\u0686\u06cc\u0632' === s &&
                  '\u062f\u06cc\u06af\u0647' === n[t + 2])) &&
              a(t, !0),
            !$.has(e) ||
              '\u0628\u0647' === s ||
              '\u0628\u0647\u0634' === s ||
              '\u0627\u0632' === s ||
              '\u0627\u0632\u0634' === s ||
              '\u06a9\u0631\u062f\u0645' === s ||
              '\u0634\u062f' === s ||
              ('\u0634\u062f' === e &&
                '\u0642\u0631\u0627\u0631' === n[t - 1]) ||
              a(t + 1, !0));
        }),
          c < n.length &&
            t.push({ words: n.slice(c), shown: r.slice(c), closed: !0 }),
          t.length && (t[t.length - 1].closed = !0));
      }
      const s = [];
      let r = { words: [], shown: [] };
      const c = (e, n) => {
        ((e.words = [...e.words, ...n.words]),
          (e.shown = [...e.shown, ...n.shown]),
          (e.text = e.shown.join(' ')));
      };
      return (
        t.forEach((e, n) => {
          const l = {
              words: [...r.words, ...e.words],
              shown: [...r.shown, ...e.shown],
            },
            o = O(l.words.join(' '));
          if (
            ((r = { words: [], shown: [] }),
            o || (!s.length && n === t.length - 1))
          )
            return void s.push({ text: l.shown.join(' '), ...l, topic: o });
          const i = s[s.length - 1],
            u = n > 0 && t[n - 1].closed;
          !i || (u && n !== t.length - 1) ? (r = l) : c(i, l);
        }),
        r.words.length &&
          (s.length
            ? c(s[s.length - 1], r)
            : s.push({ text: r.shown.join(' '), ...r, topic: null })),
        s
      );
    }
    const C = new Set([
        '\u062a\u0627',
        '\u062f\u0648\u0646\u0647',
        '\u062f\u0627\u0646\u0647',
        '\u0639\u062f\u062f',
        '\u06cc\u0647',
        '\u06cc\u06a9',
        '\u0627\u0632',
        '\u0628\u0647',
        '\u0628\u0627',
        '\u0628\u0631\u0627\u06cc',
        '\u06a9\u0647',
        '\u0648',
        '\u0631\u0648',
        '\u0631\u0627',
        '\u0647\u0645',
        '\u0627\u06cc\u0646',
        '\u0627\u0648\u0646',
        '\u0627\u0642\u0627\u06cc',
        '\u0622\u0642\u0627\u06cc',
        '\u0627\u0642\u0627',
        '\u0622\u0642\u0627',
        '\u062e\u0627\u0646\u0645',
        '\u062e\u0627\u0646\u0648\u0645',
        '\u062d\u0627\u062c',
        '\u0628\u0627\u0628\u062a',
        '\u0648\u0627\u0633\u0647',
        '\u067e\u0631\u062f\u0627\u062e\u062a',
        '\u06a9\u0646\u0645',
        '\u0628\u062f\u0645',
        '\u0645\u063a\u0627\u0632\u0647',
        '\u0645\u0627\u0647',
        '\u0647\u0631',
      ]),
      W = (e) => {
        const n = e.replace(
          /(?:\u0647\u0627\u0645\u0648|\u0647\u0627\u0634\u0648|\u0647\u0627\u0631\u0648|\u0647\u0627\u06cc|\u0647\u0627|\u0631\u0648|\u0631\u0627|\u0634\u0648|\u0645\u0648|\u0648|\u0634|\u0645)$/,
          '',
        );
        return n.length >= 2 ? n : e;
      },
      _ = (e) =>
        i(e)
          .filter((e) => !C.has(e) && !/^\d+$/.test(e) && e.length >= 2)
          .map(W);
    function I(e, n, t = !0) {
      const s = _(n);
      if (!s.length) return !1;
      const r = e.words.map(W),
        l = (e) =>
          r.some(
            (n) => n === e || (n.startsWith(e) && n.length - e.length <= 3),
          );
      return t ? s.every(l) : s.some(l);
    }
    function B(e, n, t, s = !0) {
      const r = e.filter((e) => I(e, n, s));
      return r.length > 0 && r.every((e) => e.topic === t) ? r[0] : null;
    }
    const M = (e) =>
      void 0 === e ? void 0 : /^\d+$/.test(e) ? Number(e) : D[e];
    function P(e, n) {
      let t = null,
        s = null,
        r = 0,
        l = null;
      for (let n = 0; n < e.length; n++) {
        const o = e[n];
        '\u0627\u0645\u0634\u0628' === o
          ? ((t = t ?? 0), (l = 'night'))
          : '\u0627\u0645\u0631\u0648\u0632' === o
            ? (t = t ?? 0)
            : '\u0641\u0631\u062f\u0627\u0634\u0628' === o
              ? ((t = 1), (l = 'night'))
              : '\u067e\u0633\u0641\u0631\u062f\u0627' === o ||
                  ('\u067e\u0633' === o &&
                    '\u0641\u0631\u062f\u0627' === e[n + 1])
                ? ((t = 2), '\u067e\u0633' === o && n++)
                : '\u0641\u0631\u062f\u0627' === o
                  ? (t = 1)
                  : '\u0635\u0628\u062d' === o
                    ? (l = l ?? 'morning')
                    : '\u0638\u0647\u0631' === o
                      ? (l = 'noon')
                      : '\u0639\u0635\u0631' === o ||
                          '\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631' ===
                            o
                        ? (l = 'evening')
                        : '\u0634\u0628' === o
                          ? (l = 'night')
                          : '\u0633\u0627\u0639\u062a' === o &&
                            void 0 !== M(e[n + 1]) &&
                            ((s = M(e[n + 1])),
                            n++,
                            /^\d+$/.test(e[n + 1] || '') &&
                            Number(e[n + 1]) < 60
                              ? ((r = Number(e[n + 1])), n++)
                              : '\u0648' === e[n + 1] &&
                                  '\u0646\u06cc\u0645' === e[n + 2]
                                ? ((r = 30), (n += 2))
                                : '\u0648' === e[n + 1] &&
                                  '\u0631\u0628\u0639' === e[n + 2] &&
                                  ((r = 15), (n += 2)));
      }
      if (null === t && null === s && null === l) return null;
      const o = Number.isFinite(n?.offsetMinutes)
          ? Number(n.offsetMinutes)
          : 210,
        i =
          n?.now && Number.isFinite(Date.parse(n.now))
            ? new Date(n.now)
            : new Date(),
        c = new Date(i.getTime() + 6e4 * o),
        u = (e, n, t) =>
          Date.UTC(
            c.getUTCFullYear(),
            c.getUTCMonth(),
            c.getUTCDate() + e,
            n,
            t,
          ) -
          6e4 * o;
      if (
        (null === s
          ? (s =
              'morning' === l
                ? 8
                : 'noon' === l
                  ? 12
                  : 'evening' === l
                    ? 17
                    : 'night' === l
                      ? 20
                      : 10)
          : ((('night' === l || 'evening' === l) && s < 12) ||
              ('noon' === l && s < 5) ||
              (null === l &&
                null === t &&
                s < 12 &&
                u(0, s, r) <= i.getTime())) &&
            (s += 12),
        s > 23 || r > 59)
      )
        return null;
      let a = u(t ?? 0, s, r);
      return (
        null === t && a <= i.getTime() && (a = u(1, s, r)),
        new Date(a).toISOString()
      );
    }
    const R = new Set([
        '\u0633\u0627\u0639\u062a',
        '\u0627\u0645\u0634\u0628',
        '\u0627\u0645\u0631\u0648\u0632',
        '\u0641\u0631\u062f\u0627',
        '\u0641\u0631\u062f\u0627\u0634\u0628',
        '\u067e\u0633\u0641\u0631\u062f\u0627',
        '\u067e\u0633',
        '\u0635\u0628\u062d',
        '\u0638\u0647\u0631',
        '\u0639\u0635\u0631',
        '\u0628\u0639\u062f\u0627\u0632\u0638\u0647\u0631',
        '\u0634\u0628',
        '\u0646\u06cc\u0645',
        '\u0631\u0628\u0639',
      ]),
      E = new Set([
        '\u06a9\u0647',
        '\u062d\u062a\u0645\u0627',
        '\u062d\u062a\u0645\u0646',
        '\u0628\u0627\u06cc\u062f',
        '\u0644\u0637\u0641\u0627',
        '\u0628\u0647\u0645',
        '\u0647\u0645',
        '\u0627\u06cc\u0646\u0648',
        '\u0627\u06cc\u0646\u0645',
        '\u0628\u0631\u0627\u0645',
      ]),
      U = (e) =>
        /^(?:\u06cc\u0627\u062f\u0645|\u06cc\u0627\u062f\u0645\u0648\u0646|\u06cc\u0627\u062f\u062a|\u06cc\u0627\u062f|\u0628\u0646\u062f\u0627\u0632\S*|\u0628\u0627\u0634\u0647|\u0646\u0631\u0647|\u06cc\u0627\u062f\u0627\u0648\u0631\u06cc\S*|\u0627\u0648\u0631\u06cc\S*|\u06cc\u0627\u062f\u0627\u0648\u0631\S*|\u06a9\u0646|\u0628\u06a9\u0646|\u0628\u0630\u0627\u0631|\u0628\u0628\u0631|\u062a\u0648|\u0644\u06cc\u0633\u062a|\u0641\u0631\u0627\u0645\u0648\u0634|\u0646\u06a9\u0646\u0645|\u0641\u0631\u0627\u0645\u0648\u0634\u0645|\u0646\u0634\u0647)$/.test(
          e,
        ),
      F = new Set([
        '\u0628\u062e\u0631\u0645',
        '\u0628\u062e\u0631\u06cc\u0645',
        '\u0628\u06af\u06cc\u0631\u0645',
        '\u0628\u06af\u06cc\u0631\u06cc\u0645',
        '\u0628\u062e\u0631',
        '\u0628\u06af\u06cc\u0631',
      ]),
      z = new Set([
        '\u0628\u062f\u0645',
        '\u0628\u062f\u06cc\u0645',
        '\u0628\u067e\u0631\u062f\u0627\u0632\u0645',
        '\u0628\u0631\u06cc\u0632\u0645',
      ]),
      H = new Set([
        '\u0642\u0633\u0637',
        '\u0627\u062c\u0627\u0631\u0647',
        '\u06a9\u0631\u0627\u06cc\u0647',
        '\u0642\u0628\u0636',
        '\u0686\u06a9',
        '\u0628\u062f\u0647\u06cc',
        '\u0637\u0644\u0628',
        '\u062d\u0642\u0648\u0642',
        '\u0648\u0627\u0645',
      ]),
      K = (e) => {
        const n = e.replace(/(?:\u0631\u0648|\u0631\u0627|\u0648)$/, ''),
          t = n.length >= 2 ? n : e;
        return t.endsWith('\u0645') && H.has(t.slice(0, -1))
          ? t.slice(0, -1)
          : t;
      };
    function Y(e, n) {
      const t = e.words,
        s = e.shown.length === t.length ? e.shown : t,
        r = f(t, u.reminder)[0] ?? 0;
      let o = r;
      for (; o < t.length && U(t[o]); ) o++;
      const i = (e, n) => {
        const s = [];
        for (let r = e; r < n; r++) {
          const e = t[r];
          E.has(e) ||
            R.has(e) ||
            (('\u0648' !== e ||
              ('\u0646\u06cc\u0645' !== t[r + 1] &&
                '\u0631\u0628\u0639' !== t[r + 1])) &&
              ((void 0 !== M(e) && '\u0633\u0627\u0639\u062a' === t[r - 1]) ||
                (/^\d+$/.test(e) &&
                  '\u0633\u0627\u0639\u062a' === t[r - 2] &&
                  !l.includes(t[r + 1] || '')) ||
                (U(e) && '\u062a\u0648' !== e) ||
                s.push(r)));
        }
        return s;
      };
      let c = i(o, t.length);
      const a = !c.length;
      if ((a && (c = i(0, r)), !c.length)) return null;
      const h = (e) => t[e],
        d = (e) => s[e],
        m = P(t, n),
        p = h(c[c.length - 1]),
        w = h(c[c.length - 2] ?? -1);
      if (
        F.has(p) ||
        ('\u0628\u062f\u0645' === p && '\u0633\u0641\u0627\u0631\u0634' === w)
      ) {
        let e,
          n = c.slice(0, '\u0628\u062f\u0645' === p ? -2 : -1);
        const t = n.findIndex(
          (e, t) => void 0 !== M(h(e)) && l.includes(h(n[t + 1] ?? -1) || ''),
        );
        t >= 0 &&
          ((e = M(h(n[t]))), (n = [...n.slice(0, t), ...n.slice(t + 2)]));
        const s = n
          .map((e, t) => (t === n.length - 1 ? K(d(e)) : d(e)))
          .join(' ')
          .trim();
        return s
          ? {
              name: s.slice(0, 100),
              ...(e ? { quantity: e } : {}),
              ...(m ? { when: m } : {}),
            }
          : null;
      }
      let y;
      if (
        ((c = c.filter(
          (e, n) =>
            0 === n || ('\u0631\u0648' !== h(e) && '\u0631\u0627' !== h(e)),
        )),
        '\u0628\u0632\u0646\u0645' === p &&
          c.some((e) => '\u0632\u0646\u06af' === h(e)))
      )
        y =
          '\u0632\u0646\u06af \u0628\u0647 ' +
          c
            .filter(
              (e) =>
                ![
                  '\u0632\u0646\u06af',
                  '\u0628\u0632\u0646\u0645',
                  '\u0628\u0647',
                ].includes(h(e)),
            )
            .map(d)
            .join(' ');
      else if (
        ('\u06a9\u0646\u0645' === p &&
          [
            '\u067e\u0631\u062f\u0627\u062e\u062a',
            '\u0648\u0627\u0631\u06cc\u0632',
          ].includes(w)) ||
        z.has(p)
      ) {
        const e = c
          .slice(0, '\u06a9\u0646\u0645' === p ? -2 : -1)
          .map((e) => K(d(e)));
        y = e.length
          ? '\u067e\u0631\u062f\u0627\u062e\u062a ' + e.join(' ')
          : c.map(d).join(' ');
      } else
        y = c
          .map((e, n) => (a && n === c.length - 1 ? K(d(e)) : d(e)))
          .join(' ');
      return {
        name: y.trim().slice(0, 100),
        task: !0,
        ...(m ? { when: m } : {}),
      };
    }
    const A = (e, n) => {
        const t = _(e),
          s = _(n);
        return (
          t.length > 0 &&
          s.length > 0 &&
          t.some((e) =>
            s.some((n) => n === e || n.startsWith(e) || e.startsWith(n)),
          )
        );
      },
      G = (e) =>
        e.words.flatMap((n, t) => {
          const s = M(n),
            r = e.words[t + 1] || '';
          return void 0 !== s && (l.includes(r) || l.includes(W(r))) ? [s] : [];
        }),
      J = (e, n) => _(e).join(' ') === _(n).join(' ');
    function L(e, n, t) {
      const s = [];
      let r = null;
      for (const l of e)
        t.some((e) => I(l, e.name))
          ? ((r = l), I(l, n.name) && s.push(l))
          : r && I(r, n.name) && G(l).length && s.push(l);
      if (!s.length) return null;
      const l = n.quantity,
        o = t.filter((e) => J(e.name, n.name));
      if (
        'number' == typeof l &&
        1 === o.filter((e) => e.quantity === l).length
      ) {
        const e = s.filter((e) => G(e).includes(l));
        if (1 === e.length) return e[0];
      }
      return o.length > 1
        ? s.length === o.length
          ? (s[o.indexOf(n)] ?? null)
          : null
        : s.every((e) => e.topic === s[0].topic)
          ? s[0]
          : null;
    }
  },
  593,
  [],
);
