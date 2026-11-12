// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 594; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.debtWord = d),
      (_e.readAmount = O),
      (_e.spokenAmount = function (e) {
        return O(e).amount;
      }),
      (_e.readSettle = W),
      (_e.readDebt = k),
      (_e.applyDebtRule = function (l) {
        if (!l || 'string' != typeof l.transcript || !l.transcript.trim())
          return l;
        const o = (0, n.splitClauses)(l.transcript);
        let r,
          a,
          u = [...(l.ledger || [])],
          i = l.expenses ? [...l.expenses] : void 0,
          c = !1;
        if (
          (o.forEach((p, h) => {
            if ('ledger' !== (0, n.clauseTopics)(p.words)[0]) return;
            const N = W(p);
            if (N) {
              if (u.some((e) => 'cheque' === e.type && M(p, e.contactName)))
                return;
              const t = u.findIndex((e) => M(p, e.contactName)),
                n = t >= 0 ? u[t] : null,
                l = (0, e.cleanVoiceNote)(n?.note),
                o = {
                  type: 'in' === N.direction ? 'payment_in' : 'payment_out',
                  contactName: n?.contactName || N.contactName,
                  amount: N.amountSaid ? N.amount : (n?.amount ?? null),
                  direction: N.direction,
                  ...(l ? { note: l } : {}),
                };
              return (t >= 0 ? (u[t] = o) : u.push(o), void (c = !0));
            }
            let v = o[h + 1] || null,
              x = k(p, v),
              w = '';
            if (!x && v && d(p.words)) {
              const e = (0, t.transcriptForDisplay)(v.text)
                  .split(' ')
                  .filter(Boolean),
                l = e.map((e) => (0, n.foldText)(e).replace(/ /g, ''));
              if ('\u0628\u0627' === l[0] || '\u0628\u0647' === l[0]) {
                let n = 1;
                for (
                  ;
                  n < l.length &&
                  n < 5 &&
                  !f(S(l[n])) &&
                  !t.SPOKEN_NUMBER_WORDS.has(l[n]) &&
                  !s.has(l[n]);

                )
                  n++;
                n > 1 &&
                  n < l.length &&
                  ((w = e.slice(0, n).join(' ')),
                  (x = k({ text: p.text + ' ' + w }, null)),
                  (v = null));
              }
            }
            if (!x) return;
            if (w && l.sales?.length) {
              const e = { text: w, words: (0, n.foldText)(w).split(' ') },
                t = l.sales
                  .map((t, n) =>
                    t.customerName && M(e, t.customerName) ? n : -1,
                  )
                  .filter((e) => e >= 0);
              if (t.length) {
                const e = l.sales
                    .map((e, t) => t)
                    .filter((e) => !t.includes(e)),
                  n = new Map(e.map((e, t) => [e, t]));
                ((r = e.map((e) => l.sales[e])),
                  (a = (a || l.actions).map((e) => {
                    if (void 0 === e.saleIndex || null === e.saleIndex)
                      return e;
                    const { saleIndex: t, ...l } = e;
                    return n.has(t) ? { ...l, saleIndex: n.get(t) } : l;
                  })));
              }
            }
            const b = u.findIndex(
              (e) =>
                'cheque' !== e.type && 'debt' !== e.type && M(p, e.contactName),
            );
            if (
              b < 0 &&
              u.some((e) => 'debt' === e.type && M(p, e.contactName))
            )
              return;
            const y = b >= 0 ? u[b] : null,
              O = (0, e.cleanVoiceNote)(y?.note) || x.note,
              _ = {
                type: 'debt',
                contactName: y?.contactName || x.contactName,
                amount: x.amountSaid ? x.amount : (y?.amount ?? null),
                direction: x.direction,
                ...(O ? { note: O } : {}),
              };
            if ((b >= 0 ? (u[b] = _) : u.push(_), i && O)) {
              const e = B(O);
              i = i.filter((t) => {
                const n = B(t.label);
                return !(
                  n.length &&
                  n.every((t) => e.some((e) => e === t || e.startsWith(t))) &&
                  (null === t.amount || t.amount === _.amount)
                );
              });
            }
            c = !0;
          }),
          !c)
        )
          return l;
        const p = { ...l, ledger: u, ...(a ? { actions: a } : {}) };
        r && (r.length ? (p.sales = r) : delete p.sales, delete p.sale);
        i?.length ? (p.expenses = i) : delete p.expenses;
        return p;
      }));
    var e = _r(_d[0]),
      t = _r(_d[1]),
      n = _r(_d[2]);
    const l = new Set([
        '\u0628\u062f\u0647\u06a9\u0627\u0631\u0645',
        '\u0628\u062f\u0647\u06a9\u0627\u0631\u06cc\u0645',
        '\u0637\u0644\u0628\u06a9\u0627\u0631\u0647',
        '\u0637\u0644\u0628\u06a9\u0627\u0631\u0646',
        '\u0637\u0644\u0628\u06a9\u0627\u0631\u0646\u062f',
        '\u0628\u0633\u062a\u0627\u0646\u06a9\u0627\u0631\u0647',
      ]),
      o = new Set([
        '\u0628\u062f\u0647\u06a9\u0627\u0631\u0647',
        '\u0628\u062f\u0647\u06a9\u0627\u0631\u0646',
        '\u0628\u062f\u0647\u06a9\u0627\u0631\u0646\u062f',
        '\u0637\u0644\u0628\u06a9\u0627\u0631\u0645',
        '\u0637\u0644\u0628\u06a9\u0627\u0631\u06cc\u0645',
        '\u0628\u0633\u062a\u0627\u0646\u06a9\u0627\u0631\u0645',
        '\u0628\u0633\u062a\u0627\u0646\u06a9\u0627\u0631\u06cc\u0645',
      ]),
      r = [
        [
          '\u0637\u0644\u0628',
          ['\u062f\u0627\u0631\u0645', '\u062f\u0627\u0631\u06cc\u0645'],
          'in',
        ],
        [
          '\u0637\u0644\u0628',
          [
            '\u062f\u0627\u0631\u0647',
            '\u062f\u0627\u0631\u0646',
            '\u062f\u0627\u0631\u0646\u062f',
            '\u062f\u0627\u0634\u062a',
          ],
          'out',
        ],
        [
          '\u0628\u062f\u0647\u06cc',
          [
            '\u062f\u0627\u0631\u0647',
            '\u062f\u0627\u0631\u0646',
            '\u062f\u0627\u0631\u0646\u062f',
          ],
          'in',
        ],
        [
          '\u0628\u062f\u0647\u06cc',
          ['\u062f\u0627\u0631\u0645', '\u062f\u0627\u0631\u06cc\u0645'],
          'out',
        ],
      ],
      a = new Set([
        '\u062f\u0627\u062f\u0645',
        '\u062f\u0627\u062f\u06cc\u0645',
        '\u062f\u0627\u062f\u0645\u0634',
        '\u062f\u0627\u062f',
        '\u062f\u0627\u062f\u0646',
        '\u06af\u0631\u0641\u062a\u0645',
        '\u06af\u0631\u0641\u062a\u06cc\u0645',
        '\u06af\u0631\u0641\u062a',
        '\u06af\u0631\u0641\u062a\u0646',
        '\u0631\u06cc\u062e\u062a\u0645',
        '\u0631\u06cc\u062e\u062a\u06cc\u0645',
        '\u0631\u06cc\u062e\u062a',
        '\u0648\u0627\u0631\u06cc\u0632',
        '\u067e\u0631\u062f\u0627\u062e\u062a',
        '\u067e\u0631\u062f\u0627\u062e\u062a\u0645',
        '\u06a9\u0627\u0631\u062a',
        '\u062a\u0633\u0648\u06cc\u0647',
        '\u0635\u0627\u0641',
      ]),
      s = new Set([
        '\u062a\u0648\u0645\u0646',
        '\u062a\u0648\u0645\u0627\u0646',
        '\u062a\u0648\u0645\u0646\u06cc',
        '\u0645\u06cc\u0644\u06cc\u0648\u0646',
        '\u0645\u0644\u06cc\u0648\u0646',
        '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f',
        '\u0647\u0632\u0627\u0631',
        '\u0631\u06cc\u0627\u0644',
        '\u062a\u0648\u0645\u0646\u0647',
        '\u062a\u0648\u0645\u0627\u0646\u0647',
        '\u0645\u06cc\u0644\u06cc\u0648\u0646\u0647',
        '\u0645\u0644\u06cc\u0648\u0646\u0647',
        '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f\u0647',
        '\u0647\u0632\u0627\u0631\u0647',
        '\u0631\u06cc\u0627\u0644\u0647',
      ]),
      u = {
        '\u062a\u0648\u0645\u0646\u0647': '\u062a\u0648\u0645\u0646',
        '\u062a\u0648\u0645\u0627\u0646\u0647':
          '\u062a\u0648\u0645\u0627\u0646',
        '\u0645\u06cc\u0644\u06cc\u0648\u0646\u0647':
          '\u0645\u06cc\u0644\u06cc\u0648\u0646',
        '\u0645\u0644\u06cc\u0648\u0646\u0647':
          '\u0645\u0644\u06cc\u0648\u0646',
        '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f\u0647':
          '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f',
        '\u0647\u0632\u0627\u0631\u0647': '\u0647\u0632\u0627\u0631',
        '\u0631\u06cc\u0627\u0644\u0647': '\u0631\u06cc\u0627\u0644',
      },
      i = new Set([
        '\u0628\u0647',
        '\u0627\u0632',
        '\u0628\u0627',
        '\u062a\u0627',
        '\u0628\u0647\u0634',
        '\u0627\u0632\u0634',
        '\u0628\u0647\u0645',
        '\u0627\u0632\u0645',
        '\u0645\u0627',
        '\u0645\u0646',
        '\u06a9\u0647',
        '\u0647\u0645',
        '\u0631\u0648',
        '\u0631\u0627',
        '\u0648',
        '\u06cc\u0647',
        '\u062d\u062f\u0648\u062f',
        '\u062a\u0642\u0631\u06cc\u0628\u0627',
        '\u062f\u0642\u06cc\u0642\u0627',
      ]),
      c = new Set([
        '\u0628\u0627\u0628\u062a',
        '\u0633\u0631',
        '\u0628\u0631\u0627\u06cc',
        '\u0648\u0627\u0633\u0647',
        '\u0628\u062e\u0627\u0637\u0631',
        '\u0639\u0648\u0636',
      ]);
    function d(e) {
      const t = e[e.length - 1] || '';
      if (u[t]) {
        const t = e.findIndex(
          (e) =>
            '\u0628\u062f\u0647\u06cc' === e ||
            '\u0628\u062f\u0647\u06cc\u0645' === e,
        );
        if (t >= 0)
          return {
            at: t,
            length: 1,
            direction: '\u0628\u062f\u0647\u06cc\u0645' === e[t] ? 'out' : 'in',
          };
      }
      for (let t = 0; t < e.length; t++) {
        const n = e[t];
        if (l.has(n)) return { at: t, length: 1, direction: 'out' };
        if (o.has(n)) return { at: t, length: 1, direction: 'in' };
        for (const [l, o, a] of r)
          if (n === l && o.includes(e[t + 1] || ''))
            return { at: t, length: 2, direction: a };
      }
      return null;
    }
    const f = (e) => /^\d[\d\u066c,]*$/.test(e),
      p = {
        '\u0647\u0632\u0627\u0631': 1e3,
        '\u0645\u06cc\u0644\u06cc\u0648\u0646': 1e6,
        '\u0645\u0644\u06cc\u0648\u0646': 1e6,
        '\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f': 1e9,
      },
      h = new Set([
        '\u062a\u0648\u0645\u0646',
        '\u062a\u0648\u0645\u0627\u0646',
        '\u062a\u0648\u0645\u0646\u06cc',
      ]),
      N = new Set([
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
      S = (e) =>
        e
          .replace(/[\u06f0-\u06f9]/g, (e) =>
            String(
              '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                e,
              ),
            ),
          )
          .replace(/[\u0660-\u0669]/g, (e) =>
            String(
              '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
                e,
              ),
            ),
          );
    function v(e) {
      const t =
          S(
            String(e || '')
              .normalize('NFKC')
              .replace(/[\u064a\u0649]/g, '\u06cc')
              .replace(/\u0643/g, '\u06a9')
              .replace(/[\u200c\xa0]/g, ' '),
          ).match(/\d+(?:[\u066c,.\/\u066b]\d+)*|[\p{L}\p{M}]+/gu) || [],
        n = [];
      for (let e = 0; e < t.length; e++) {
        let l = t[e];
        if (/^\d{1,3}$/.test(l))
          for (; /^\d{3}$/.test(t[e + 1] || ''); ) ((l += ',' + t[e + 1]), e++);
        n.push(u[l] ?? l);
      }
      return n;
    }
    function x(e, n) {
      const l = e[n] || '';
      if (/^\d+$/.test(l)) return { value: Number(l), end: n + 1, grouped: !1 };
      if (/^\d{1,3}(?:[\u066c,]\d{3})+$/.test(l))
        return {
          value: Number(l.replace(/[\u066c,]/g, '')),
          end: n + 1,
          grouped: !0,
        };
      if (/^\d+[.\/\u066b]\d+$/.test(l))
        return void 0 !== p[e[n + 1] || '']
          ? {
              value: Number(l.replace(/[\/\u066b]/, '.')),
              end: n + 1,
              grouped: !1,
            }
          : /^\d{1,3}(?:\.\d{3})+$/.test(l)
            ? { value: Number(l.replace(/\./g, '')), end: n + 1, grouped: !0 }
            : { value: NaN, end: n + 1, grouped: !1, unsure: !0 };
      if (/^\d{1,3}(?:\.\d{3})+$/.test(l))
        return { value: Number(l.replace(/\./g, '')), end: n + 1, grouped: !0 };
      const o = t.SPOKEN_NUMBER_WORDS.get(l);
      if (
        void 0 === o ||
        (('\u06cc\u0647' === l || '\u0646\u0647' === l) &&
          void 0 === p[e[n + 1] || ''])
      )
        return null;
      let r = o,
        a = o,
        s = n + 1;
      for (; '\u0648' === e[s]; ) {
        const n = t.SPOKEN_NUMBER_WORDS.get(e[s + 1] || '');
        if (
          void 0 === n ||
          !(
            (a >= 100 && n > 0 && n < 100) ||
            (a >= 20 && a < 100 && n > 0 && n < 10)
          )
        )
          break;
        ((r += n), (a = n), (s += 2));
      }
      return (
        '\u0648' === e[s] &&
          '\u0646\u06cc\u0645' === e[s + 1] &&
          void 0 !== p[e[s + 2] || ''] &&
          ((r += 0.5), (s += 2)),
        { value: r, end: s, grouped: !1 }
      );
    }
    const w = (e) => e[0]?.value ?? 0,
      b = (e, t) => n.COUNT_WORDS.includes(e[t] || '') || N.has(e[t] || '');
    function y(e, t) {
      const n = [];
      let l = t,
        o = !1,
        r = !1;
      for (;;) {
        const t = x(e, l);
        if (!t) break;
        if (b(e, t.end)) {
          if (!n.length)
            return { amount: null, end: t.end + 1, strong: !1, skip: !0 };
          break;
        }
        ((o ||= t.grouped), (r ||= !!t.unsure));
        const a = p[e[t.end] || ''] ?? 0;
        let s = t.end + (a ? 1 : 0),
          u = t.value;
        if (
          (a &&
            '\u0648' === e[s] &&
            '\u0646\u06cc\u0645' === e[s + 1] &&
            ((u += 0.5), (s += 2)),
          n.push({ value: u, scale: a }),
          (l = s),
          '\u0648' !== e[l])
        )
          break;
        const i = x(e, l + 1);
        if (!i || b(e, i.end)) break;
        l++;
      }
      if (!n.length) return null;
      const a = e[l] || '',
        s = l + (h.has(a) || '\u0631\u06cc\u0627\u0644' === a ? 1 : 0);
      if (r) return { amount: null, end: s, strong: !0 };
      const u = n.some((e) => e.scale) || s > l || o;
      let i = 0,
        c = 1 / 0;
      for (const [e, t] of n.entries())
        if (t.scale) {
          if (t.scale >= c) return { amount: null, end: s, strong: !0 };
          ((i += t.value * t.scale), (c = t.scale));
        } else {
          if (e !== n.length - 1 || !Number.isInteger(t.value))
            return { amount: null, end: s, strong: !0 };
          if (e)
            if (1e3 === c && t.value < 1e3) i += t.value;
            else if (c >= 1e6 && t.value > 0 && t.value < 1e3)
              i += (t.value * c) / 1e3;
            else {
              if (
                !(
                  c >= 1e6 &&
                  t.value >= 1e3 &&
                  t.value < c &&
                  t.value % 1e3 == 0
                )
              )
                return { amount: null, end: s, strong: !0 };
              i += t.value;
            }
          else i = t.value;
        }
      const d = 1 === n.length && !n[0].scale;
      return (
        '\u0631\u06cc\u0627\u0644' === a
          ? (i = i % 10 == 0 ? i / 10 : NaN)
          : d && !o && i < 1e3
            ? (i = h.has(a) ? 1e3 * i : NaN)
            : d &&
              !o &&
              [1e6, 1e9].some((e) => i > e && i % e > 0 && i % e < 1e3) &&
              (i = NaN),
        {
          amount: Number.isSafeInteger(i) && i > 0 ? i : null,
          end: s,
          strong: u || !(d && !o && w(n) < 1e3),
        }
      );
    }
    function O(e) {
      const t = v('string' == typeof e ? e : e.join(' ')),
        n = [];
      let l = !1;
      for (let e = 0; e < t.length; ) {
        const o = y(t, e);
        o
          ? (o.strong ? n.push(o) : o.skip || (l = !0),
            (e = Math.max(o.end, e + 1)))
          : e++;
      }
      if (!n.length) return { amount: null, said: l };
      const o = new Set(n.map((e) => e.amount));
      return 1 !== o.size || o.has(null)
        ? { amount: null, said: !0 }
        : { amount: n[0].amount, said: !0 };
    }
    function _(e, t, n) {
      t.forEach((e, t) => {
        (f(e) || s.has(e) || i.has(e)) && n.add(t);
      });
      const l = [];
      let o = [];
      (t.forEach((e, t) => {
        n.has(t) ? (o.length && l.push(o), (o = [])) : o.push(t);
      }),
        o.length && l.push(o));
      const r =
          l.find((e) =>
            ['\u0628\u0647', '\u0627\u0632', '\u0628\u0627'].includes(
              t[e[0] - 1] || '',
            ),
          ) || l[0],
        a = r
          ? e
              .slice(r[0], r[r.length - 1] + 1)
              .join(' ')
              .trim()
          : '';
      return !a || /^(?:\u0622\u0642\u0627|\u0627\u0642\u0627)$/.test(a)
        ? ''
        : a.slice(0, 100);
    }
    const D = new Set([
        '\u0628\u062f\u0647\u06cc\u0634\u0648',
        '\u0628\u062f\u0647\u06cc\u0634',
        '\u0628\u062f\u0647\u06cc\u0634\u0645',
        '\u062d\u0633\u0627\u0628\u0634\u0648',
        '\u062d\u0633\u0627\u0628\u0634',
      ]),
      I = new Set([
        '\u0628\u062f\u0647\u06cc\u0645\u0648',
        '\u0628\u062f\u0647\u06cc\u0645',
        '\u062d\u0633\u0627\u0628\u0645\u0648',
      ]),
      E = new Set(['\u0635\u0627\u0641', '\u062a\u0633\u0648\u06cc\u0647']),
      R = new Set([
        '\u06a9\u0631\u062f',
        '\u06a9\u0631\u062f\u0646',
        '\u06a9\u0631\u062f\u0646\u062f',
      ]),
      T = new Set([
        '\u06a9\u0631\u062f\u0645',
        '\u06a9\u0631\u062f\u06cc\u0645',
      ]),
      $ = new Set([
        ...D,
        ...I,
        ...E,
        ...R,
        ...T,
        '\u0628\u0627',
        '\u0646\u0642\u062f',
        '\u0646\u0642\u062f\u06cc',
        '\u06a9\u0627\u0631\u062a',
        '\u06a9\u0627\u0645\u0644',
        '\u0647\u0645\u0647',
        '\u0647\u0645\u0634\u0648',
        '\u0631\u0648',
        '\u0631\u0627',
      ]);
    function W(e) {
      const l = (0, t.transcriptForDisplay)(e.text).split(' ').filter(Boolean),
        o = l.map((e) => (0, n.foldText)(e).replace(/ /g, '')),
        r = o.findIndex((e) => E.has(e)),
        a = o.findIndex((e) => D.has(e) || I.has(e));
      if (r < 0 || a < 0 || a > r) return null;
      const s = o[r + 1] || '',
        u =
          D.has(o[a]) && R.has(s)
            ? 'in'
            : I.has(o[a]) && T.has(s)
              ? 'out'
              : null;
      if (!u) return null;
      if (o.some((e, t) => f(e) && n.COUNT_WORDS.includes(o[t + 1] || '')))
        return null;
      const i = new Set();
      o.forEach((e, t) => {
        $.has(e) && i.add(t);
      });
      const c = _(l, o, i);
      if (!c) return null;
      const d = O(e.text);
      return {
        contactName: c,
        amount: d.amount,
        amountSaid: d.said,
        direction: u,
      };
    }
    function k(l, o) {
      const r = (0, t.transcriptForDisplay)(l.text).split(' ').filter(Boolean),
        u = r.map((e) => (0, n.foldText)(e).replace(/ /g, '')),
        i = d(u);
      if (!i) return null;
      if (u.some((e) => a.has(e))) return null;
      if (
        u.some(
          (e, t) =>
            f(e) &&
            Number(S(e).replace(/[\u066c,]/g, '')) < 1e4 &&
            n.COUNT_WORDS.includes(u[t + 1] || ''),
        )
      )
        return null;
      const p = new Set();
      for (let e = 0; e < i.length; e++) p.add(i.at + e);
      let h = '';
      const N = u.findIndex((e) => c.has(e));
      if (N >= 0) {
        let e = N + 1;
        for (; e < u.length && !p.has(e) && !f(u[e]) && !s.has(u[e]); ) e++;
        h = r.slice(N, e).join(' ');
        for (let t = N; t < e; t++) p.add(t);
      } else if (o) {
        const e = (0, t.transcriptForDisplay)(o.text)
            .split(' ')
            .filter(Boolean),
          l = e.map((e) => (0, n.foldText)(e).replace(/ /g, ''));
        if (c.has(l[0] || '')) {
          let t = 1;
          for (; t < l.length && !f(l[t]) && !s.has(l[t]); ) t++;
          h = e.slice(0, t).join(' ');
        }
      }
      const v = _(r, u, p);
      if (!v) return null;
      const x = O(l.text);
      return {
        contactName: v,
        amount: x.amount,
        amountSaid: x.said,
        direction: i.direction,
        note: (0, e.cleanVoiceNote)(h),
      };
    }
    const B = (e) =>
      (0, n.foldText)(e)
        .split(' ')
        .filter((e) => e.length >= 2 && !i.has(e) && !/^\d+$/.test(e));
    function M(e, t) {
      const n = B(t);
      return (
        !!n.length &&
        n.every((t) =>
          e.words.some(
            (e) => e === t || (e.startsWith(t) && e.length - t.length <= 3),
          ),
        )
      );
    }
  },
  594,
  [465, 586, 593],
);
