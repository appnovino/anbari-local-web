// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 597; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, _i, _a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.parseShopNote = function (
        e,
        n = [],
        { requireKnown: t = !1, units: s = {} } = {},
      ) {
        if (
          /[\u061f?]|[-\u2212]\s*[\d\u06f0-\u06f9\u0660-\u0669]/.test(String(e))
        )
          return { status: 'fallback', reason: 'question_or_sign' };
        const i = n.map(w);
        let c = h(w(e), i);
        if (!c) return { status: 'fallback', reason: 'empty' };
        const u = i
          .filter((e) => e.includes(' '))
          .reduce(
            (e, n) =>
              (' ' + e + ' ')
                .split(' ' + n + ' ')
                .join(' _ ')
                .trim(),
            c,
          );
        if (b.test(u)) return { status: 'fallback', reason: 'needs_judgement' };
        const d = new Set(n.map((e) => w(e).replace(/ /g, ''))),
          f = new Set(i.flatMap((e) => e.split(' ').slice(1))),
          g = new Set(
            i.flatMap((e) => {
              const n = e.split(' '),
                t = n.findIndex((e, n) => n > 0 && /^\d/.test(e));
              return t > 0 ? [n.slice(0, t).join('')] : [];
            }),
          ),
          p = i.filter((e) => / (?:\u0648|\u0628\u0627) /.test(e));
        for (const e of p)
          c = (' ' + c + ' ')
            .split(' ' + e + ' ')
            .join(' ' + e.replace(/ (\u0648|\u0628\u0627) /g, '_$1_') + ' ')
            .trim();
        for (const { name: e, glued: t, unclear: s } of A(n, i, p))
          if ((' ' + c + ' ').includes(' ' + e + ' ')) {
            if (s) return { status: 'fallback', reason: 'ambiguous_name' };
            c = (' ' + c + ' ')
              .split(' ' + e + ' ')
              .join(' ' + t + ' ')
              .trim();
          }
        const y = S(c.split(' '), i);
        if (y.length > 80) return { status: 'fallback', reason: 'too_long' };
        const W = [];
        let M = [[]];
        const z = () => M[M.length - 1],
          O = (e) => {
            const n = z(),
              t = n[n.length - 1];
            t && 'n' in t ? t.n.push(e) : n.push({ n: [e] });
          },
          K = (e) => {
            for (const n of M) {
              if (!n.length) continue;
              if ('q' in n[0] === 'q' in n[n.length - 1])
                return 'ambiguous_order';
              for (let e = 0; e + 1 < n.length; e++) {
                const t = n[e];
                if (
                  'n' in t &&
                  'q' in n[e + 1] &&
                  n[e + 1].q.bare &&
                  g.has(t.n.join('').replace(/_/g, ''))
                )
                  return 'number_in_name';
              }
              for (let e = 1; e < n.length; e++)
                if ('q' in n[e] == 'q' in n[e - 1]) return 'ambiguous_order';
              for (let e = 0; e + 1 < n.length; e++) {
                const t = n[e],
                  s = n[e + 1];
                if (!('n' in t) || !('q' in s)) continue;
                const i = t.n
                    .filter((e) => !e.startsWith('\x01'))
                    .join('')
                    .replace(/_/g, ''),
                  l = [i + String(s.q.value)];
                for (
                  let e = s.q.start + 1;
                  e <= Math.min(y.length, s.q.start + 6);
                  e++
                )
                  l.push(i + y.slice(s.q.start, e).join('').replace(/_/g, ''));
                if (l.some((e) => e !== i && d.has(e))) return 'number_in_name';
              }
              for (let i = 0; i < n.length; i += 2) {
                const l = n[i],
                  o = n[i + 1],
                  a = 'q' in l ? l : o,
                  c = 'n' in l ? l : o,
                  u = (e) => d.has(w(e).replace(/ /g, '')),
                  g = c.n
                    .map((e, n) => (e.startsWith('\x01') ? n : -1))
                    .filter((e) => e >= 0);
                if (g.length > 3) return 'too_many_fillers';
                const p = new Set();
                for (let e = 0; e < 1 << g.length; e++)
                  p.add(
                    c.n
                      .filter(
                        (n, t) =>
                          !n.startsWith('\x01') || (e >> g.indexOf(t)) & 1,
                      )
                      .map((e) => e.replace('\x01', ''))
                      .join(' ')
                      .replace(/_\u0648_/g, ' \u0648 ')
                      .replace(/_/g, ' ')
                      .trim(),
                  );
                const h = [...p].filter(u),
                  v = c.n
                    .filter((e) => !e.startsWith('\x01'))
                    .join(' ')
                    .replace(/_\u0648_/g, ' \u0648 ')
                    .replace(/_/g, ' ')
                    .trim();
                if (h.length > 1) return 'ambiguous_name';
                if (
                  1 === h.length &&
                  c.n.some(
                    (e) =>
                      e.startsWith('\x01') &&
                      f.has(e.slice(1)) &&
                      !h[0].split(' ').includes(e.slice(1)),
                  )
                )
                  return 'ambiguous_name';
                const _ = h[0] || v;
                if (!_ || /^\d/.test(_) || _.split(' ').length > 6)
                  return 'bad_name';
                if (d.size && !d.has(_.replace(/ /g, '')) && I(_.split(' '), d))
                  return 'two_products_one_number';
                if (t && !d.has(w(_).replace(/ /g, '')))
                  return 'unknown_product';
                const b = s[w(_).replace(/ /g, '')];
                if (
                  b &&
                  a.q.unit !== b &&
                  ('piece' !== a.q.unit || !q.has(b)) &&
                  !j.has(a.q.unit + '>' + b)
                )
                  return 'unit_mismatch';
                const k =
                  'piece' === a.q.unit && b && 'dozen' !== b && q.has(b)
                    ? b
                    : a.q.unit;
                W.push({ name: _, quantity: a.q.value, unit: k, kind: e });
              }
            }
            return ((M = [[]]), null);
          };
        for (let e = 0; e < y.length; ) {
          const n = y[e],
            t = N(y, e);
          if (t) {
            if (M.every((e) => !e.length))
              return { status: 'fallback', reason: 'verb_without_item' };
            const n = K(t.kind);
            if (n) return { status: 'fallback', reason: n };
            e = t.end;
            continue;
          }
          const s =
            o.has(y[e - 1] || '') && z().length && 'n' in z()[z().length - 1]
              ? $(y, e)
              : null;
          if (s && !l.test(y[s.end] || '') && '\u0648' !== y[s.end]) {
            (O(String(s.value)), (e = s.end));
            continue;
          }
          const i = x(y, e);
          if (i) {
            const n = z(),
              t = n[n.length - 1];
            if (t && 'q' in t)
              return { status: 'fallback', reason: 'two_numbers' };
            if (void 0 !== i.unitAt)
              for (let e = 1; e <= 4 && i.unitAt + e < y.length; e++)
                if (
                  d.has(
                    y
                      .slice(i.unitAt, i.unitAt + e + 1)
                      .join('')
                      .replace(/_/g, ''),
                  )
                )
                  return { status: 'fallback', reason: 'unit_or_name' };
            (n.push({ q: i }), (e = i.end));
            continue;
          }
          if ('\u060c' === n || '\u0648' === n) {
            (z().length && M.push([]), e++);
            continue;
          }
          if ('\u0628\u0627' === n && z().length && x(y, e + 1)) {
            (M.push([]), e++);
            continue;
          }
          if (_.test(n)) return { status: 'fallback', reason: 'not_a_name' };
          if (v.has(n)) {
            const t = z(),
              s = t[t.length - 1];
            (s && 'n' in s && s.n.push('\x01' + n), e++);
            continue;
          }
          if (/^\d/.test(n) && !$(y, e))
            return { status: 'fallback', reason: 'odd_number' };
          const c = $(y, e);
          if (c && a.has(k(y[c.end] || ''))) {
            for (const n of y.slice(e, c.end + 1)) O(n);
            e = c.end + 1;
          } else {
            if (c) return { status: 'fallback', reason: 'loose_number' };
            (O(n), e++);
          }
        }
        return M.some((e) => e.length)
          ? { status: 'fallback', reason: 'no_verb' }
          : W.length
            ? W.length > 20
              ? { status: 'fallback', reason: 'too_many' }
              : t && !d.size
                ? { status: 'fallback', reason: 'no_catalog' }
                : { status: 'complete', actions: W }
            : { status: 'fallback', reason: 'nothing' };
      }),
      Object.defineProperty(_e, 'noteKey', {
        enumerable: !0,
        get: function () {
          return K;
        },
      }),
      (_e.sameStockLines = function (e, n) {
        if (e.length !== n.length) return !1;
        const t = (e) => w(e).replace(/\s/g, '');
        return e.every((e, s) => {
          const i = n[s];
          return (
            !!i &&
            t(e.name) === t(String(i.name || '')) &&
            Math.abs(e.quantity - Number(i.quantity)) < 5e-4 &&
            e.unit === (i.unit || 'piece') &&
            e.kind === i.kind
          );
        });
      }));
    const e = {
        '\u0635\u0641\u0631': 0,
        '\u06cc\u06a9': 1,
        '\u06cc\u0647': 1,
        '\u06cc\u06a9\u06cc': 1,
        '\u062f\u0648': 2,
        '\u0633\u0647': 3,
        '\u0686\u0647\u0627\u0631': 4,
        '\u0686\u0627\u0631': 4,
        '\u067e\u0646\u062c': 5,
        '\u0634\u0634': 6,
        '\u0634\u06cc\u0634': 6,
        '\u0647\u0641\u062a': 7,
        '\u0647\u0634\u062a': 8,
        '\u0646\u0647': 9,
        '\u062f\u0647': 10,
        '\u06cc\u0627\u0632\u062f\u0647': 11,
        '\u062f\u0648\u0627\u0632\u062f\u0647': 12,
        '\u0633\u06cc\u0632\u062f\u0647': 13,
        '\u0686\u0647\u0627\u0631\u062f\u0647': 14,
        '\u0686\u0627\u0631\u062f\u0647': 14,
        '\u067e\u0627\u0646\u0632\u062f\u0647': 15,
        '\u067e\u0648\u0646\u0632\u062f\u0647': 15,
        '\u0634\u0627\u0646\u0632\u062f\u0647': 16,
        '\u0634\u0648\u0646\u0632\u062f\u0647': 16,
        '\u0647\u0641\u062f\u0647': 17,
        '\u0647\u06cc\u0641\u062f\u0647': 17,
        '\u0647\u062c\u062f\u0647': 18,
        '\u0647\u06cc\u062c\u062f\u0647': 18,
        '\u0646\u0648\u0632\u062f\u0647': 19,
        '\u0628\u06cc\u0633\u062a': 20,
        '\u0633\u06cc': 30,
        '\u0686\u0647\u0644': 40,
        '\u0686\u0644': 40,
        '\u067e\u0646\u062c\u0627\u0647': 50,
        '\u0634\u0635\u062a': 60,
        '\u0647\u0641\u062a\u0627\u062f': 70,
        '\u0647\u0634\u062a\u0627\u062f': 80,
        '\u0646\u0648\u062f': 90,
        '\u0635\u062f': 100,
        '\u06cc\u06a9\u0635\u062f': 100,
        '\u062f\u0648\u06cc\u0633\u062a': 200,
        '\u0633\u06cc\u0635\u062f': 300,
        '\u0686\u0647\u0627\u0631\u0635\u062f': 400,
        '\u067e\u0627\u0646\u0635\u062f': 500,
        '\u067e\u0648\u0646\u0635\u062f': 500,
        '\u0634\u0634\u0635\u062f': 600,
        '\u0634\u06cc\u0634\u0635\u062f': 600,
        '\u0647\u0641\u062a\u0635\u062f': 700,
        '\u0647\u0634\u062a\u0635\u062f': 800,
        '\u0646\u0647\u0635\u062f': 900,
      },
      n = { '\u0647\u0632\u0627\u0631': 1e3 },
      t = { '\u0646\u06cc\u0645': 0.5, '\u0631\u0628\u0639': 0.25 },
      s = new Set([
        '\u062a\u0627',
        '\u0639\u062f\u062f',
        '\u062f\u0648\u0646\u0647',
        '\u062f\u0627\u0646\u0647',
        '\u062c\u0641\u062a',
      ]),
      i = {
        '\u06a9\u0627\u0631\u062a\u0646': 'carton',
        '\u06a9\u0627\u0631\u062a\u0648\u0646': 'carton',
        '\u0628\u0633\u062a\u0647': 'pack',
        '\u067e\u0627\u06a9\u062a': 'pack',
        '\u062c\u0639\u0628\u0647': 'box',
        '\u0628\u0627\u06a9\u0633': 'box',
        '\u06a9\u06cc\u0633\u0647': 'bag',
        '\u06af\u0648\u0646\u06cc': 'sack',
        '\u0631\u0648\u0644': 'roll',
        '\u0628\u0637\u0631\u06cc': 'bottle',
        '\u0634\u06cc\u0634\u0647': 'bottle',
        '\u0642\u0648\u0637\u06cc': 'can',
        '\u062f\u0648\u062c\u06cc\u0646': 'dozen',
        '\u06a9\u06cc\u0644\u0648': 'kg',
        '\u06a9\u06cc\u0644\u0648\u06af\u0631\u0645': 'kg',
        '\u06a9\u06cc\u0644\u0648\u06af\u0631\u0627\u0645': 'kg',
        '\u06af\u0631\u0645': 'g',
        '\u0644\u06cc\u062a\u0631': 'l',
        '\u0645\u06cc\u0644\u06cc': 'ml',
        '\u0645\u06cc\u0644\u06cc\u0644\u06cc\u062a\u0631': 'ml',
        '\u0633\u06cc\u0633\u06cc': 'ml',
        '\u0645\u062a\u0631': 'm',
      },
      l = new RegExp('^(?:' + [...s, ...Object.keys(i)].join('|') + ')(?: |$)'),
      o = new Set([
        '\u0633\u0627\u06cc\u0632',
        '\u0634\u0645\u0627\u0631\u0647',
        '\u0633\u0631\u06cc',
        '\u0645\u062f\u0644',
        '\u0646\u0645\u0631\u0647',
      ]),
      a = new Set([
        '\u06a9\u06cc\u0644\u0648\u06cc\u06cc',
        '\u06a9\u06cc\u0644\u0648\u06af\u0631\u0645\u06cc',
        '\u0644\u06cc\u062a\u0631\u06cc',
        '\u06af\u0631\u0645\u06cc',
        '\u0645\u06cc\u0644\u06cc\u0644\u06cc\u062a\u0631\u06cc',
        '\u0645\u062a\u0631\u06cc',
        '\u0633\u0627\u0646\u062a\u06cc',
        '\u0627\u06cc\u0646\u0686\u06cc',
        '\u0627\u06cc\u0646\u0686',
        '\u0648\u0627\u062a',
        '\u0648\u0644\u062a',
        '\u062a\u0627\u06cc\u06cc',
        '\u0639\u062f\u062f\u06cc',
        '\u0646\u0641\u0631\u0647',
        '\u06a9\u06cc\u0644\u0648\u0626\u06cc',
      ]),
      c = [
        [['\u0641\u0631\u0648\u0634', '\u0631\u0641\u062a'], 'sold'],
        [['\u0641\u0631\u0648\u0634', '\u0631\u0641\u062a\u0646'], 'sold'],
        [
          ['\u062a\u062d\u0648\u06cc\u0644', '\u06af\u0631\u0641\u062a\u0645'],
          'received',
        ],
        [['\u0648\u0627\u0631\u062f', '\u0634\u062f'], 'received'],
        [['\u0627\u0636\u0627\u0641\u0647', '\u0634\u062f'], 'received'],
        [['\u0627\u0636\u0627\u0641\u0647', '\u06a9\u0646'], 'received'],
        [['\u0645\u0635\u0631\u0641', '\u0634\u062f'], 'used'],
        [['\u0645\u0635\u0631\u0641', '\u06a9\u0631\u062f\u0645'], 'used'],
        [
          ['\u0645\u0635\u0631\u0641', '\u06a9\u0631\u062f\u06cc\u0645'],
          'used',
        ],
        [
          [
            '\u0627\u0633\u062a\u0641\u0627\u062f\u0647',
            '\u06a9\u0631\u062f\u0645',
          ],
          'used',
        ],
        [['\u062f\u0648\u0631', '\u0631\u06cc\u062e\u062a\u0645'], 'waste'],
        [
          ['\u062f\u0648\u0631', '\u0631\u06cc\u062e\u062a\u06cc\u0645'],
          'waste',
        ],
        [['\u062e\u0631\u0627\u0628', '\u0634\u062f'], 'waste'],
        [['\u062e\u0631\u0627\u0628', '\u0634\u062f\u0646'], 'waste'],
        [['\u0641\u0627\u0633\u062f', '\u0634\u062f'], 'waste'],
        [
          ['\u062a\u0627\u0631\u06cc\u062e', '\u06af\u0630\u0634\u062a'],
          'waste',
        ],
      ],
      u = {
        '\u0641\u0631\u0648\u062e\u062a\u0645': 'sold',
        '\u0641\u0631\u0648\u062e\u062a\u06cc\u0645': 'sold',
        '\u0641\u0631\u0648\u062e\u062a': 'sold',
        '\u0641\u0631\u0648\u062e\u062a\u0646': 'sold',
        '\u0641\u0631\u0648\u062e\u062a\u0646\u062f': 'sold',
        '\u0641\u0631\u0648\u062e\u062a\u0647': 'sold',
        '\u0631\u0641\u062a': 'sold',
        '\u0631\u0641\u062a\u0646': 'sold',
        '\u0634\u062f': 'sold',
        '\u0628\u0631\u062f': 'sold',
        '\u0628\u0631\u062f\u0646': 'sold',
        '\u0628\u0631\u062f\u0646\u062f': 'sold',
        '\u06af\u0631\u0641\u062a\u0645': 'received',
        '\u06af\u0631\u0641\u062a\u06cc\u0645': 'received',
        '\u0627\u0648\u0645\u062f': 'received',
        '\u0622\u0645\u062f': 'received',
        '\u0627\u0648\u0645\u062f\u0646': 'received',
        '\u0622\u0645\u062f\u0646\u062f': 'received',
        '\u0631\u0633\u06cc\u062f': 'received',
        '\u0631\u0633\u06cc\u062f\u0646': 'received',
        '\u062e\u0631\u06cc\u062f\u0645': 'received',
        '\u062e\u0631\u06cc\u062f\u06cc\u0645': 'received',
        '\u0622\u0648\u0631\u062f\u0646': 'received',
        '\u0622\u0648\u0631\u062f': 'received',
        '\u0622\u0648\u0631\u062f\u0645': 'received',
        '\u0622\u0648\u0631\u062f\u0646\u062f': 'received',
        '\u062f\u0648\u0631\u0631\u06cc\u0632': 'waste',
        '\u0636\u0627\u06cc\u0639': 'waste',
        '\u0627\u0648\u0645\u062f\u0647': 'received',
        '\u0622\u0645\u062f\u0647': 'received',
        '\u0631\u0633\u06cc\u062f\u0647': 'received',
        _sold_: 'sold',
        _received_: 'received',
        _used_: 'used',
        _waste_: 'waste',
      },
      d = [
        [
          '\u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0645 \u06a9\u0646',
          'sold',
        ],
        [
          '\u06a9\u0645 \u06a9\u0646 \u0627\u0632 \u0645\u0648\u062c\u0648\u062f\u06cc',
          'sold',
        ],
        ['\u06a9\u0645 \u06a9\u0646', 'sold'],
        [
          '\u062f\u0627\u062f\u0645 \u0628\u0647 \u0645\u0634\u062a\u0631\u06cc',
          'sold',
        ],
        [
          '\u062f\u0627\u062f\u06cc\u0645 \u0628\u0647 \u0645\u0634\u062a\u0631\u06cc',
          'sold',
        ],
        [
          '\u06af\u0630\u0627\u0634\u062a\u0645 \u062a\u0648 \u0627\u0646\u0628\u0627\u0631',
          'received',
        ],
        [
          '\u06af\u0630\u0627\u0634\u062a\u06cc\u0645 \u062a\u0648 \u0627\u0646\u0628\u0627\u0631',
          'received',
        ],
        [
          '\u06af\u0630\u0627\u0634\u062a\u0645 \u062a\u0648\u06cc \u0627\u0646\u0628\u0627\u0631',
          'received',
        ],
        [
          '\u0628\u0632\u0646 \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc',
          'received',
        ],
        [
          '\u0627\u0636\u0627\u0641\u0647 \u06a9\u0646 \u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc',
          'received',
        ],
        [
          '\u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646',
          'received',
        ],
        [
          '\u0628\u0647 \u0645\u0648\u062c\u0648\u062f\u06cc \u0627\u0636\u0627\u0641\u0647 \u0634\u062f',
          'received',
        ],
        [
          '\u0648\u0627\u0631\u062f \u0627\u0646\u0628\u0627\u0631 \u06a9\u0646',
          'received',
        ],
        [
          '\u0648\u0627\u0631\u062f \u0627\u0646\u0628\u0627\u0631 \u06a9\u0631\u062f\u0645',
          'received',
        ],
        [
          '\u0648\u0627\u0631\u062f \u0627\u0646\u0628\u0627\u0631 \u0634\u062f',
          'received',
        ],
        ['\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u0645', 'received'],
        [
          '\u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f\u06cc\u0645',
          'received',
        ],
        ['\u062e\u0631\u062c \u06a9\u0627\u0631 \u0634\u062f', 'used'],
        [
          '\u0645\u0635\u0631\u0641 \u062e\u0648\u062f\u0645\u0648\u0646 \u0634\u062f',
          'used',
        ],
        [
          '\u0645\u0635\u0631\u0641 \u062e\u0648\u062f\u0645\u0648\u0646',
          'used',
        ],
        [
          '\u0645\u0635\u0631\u0641 \u062f\u0627\u062e\u0644\u06cc \u0634\u062f',
          'used',
        ],
        ['\u0645\u0635\u0631\u0641 \u062f\u0627\u062e\u0644\u06cc', 'used'],
        [
          '\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u06cc\u0645',
          'used',
        ],
        [
          '\u0641\u0631\u0648\u0634 \u062f\u0627\u0634\u062a\u06cc\u0645',
          'sold',
        ],
        ['\u0641\u0631\u0648\u0634 \u062f\u0627\u0634\u062a\u0645', 'sold'],
        [
          '\u0628\u0631\u0627\u06cc \u062e\u0648\u062f\u0645 \u0628\u0631\u062f\u0627\u0634\u062a\u0645',
          'used',
        ],
        [
          '\u0628\u0631\u062f\u0627\u0634\u062a\u0645 \u0628\u0631\u0627\u06cc \u062e\u0648\u062f\u0645',
          'used',
        ],
        [
          '\u0628\u0631\u062f\u0627\u0634\u062a\u0645 \u0628\u0631\u0627\u06cc \u0645\u063a\u0627\u0632\u0647',
          'used',
        ],
        [
          '\u0628\u0631\u0627\u06cc \u0645\u063a\u0627\u0632\u0647 \u0628\u0631\u062f\u0627\u0634\u062a\u0645',
          'used',
        ],
        ['\u0628\u0631\u062f\u0645 \u062e\u0648\u0646\u0647', 'used'],
        [
          '\u062a\u062d\u0648\u06cc\u0644\u0645 \u062f\u0627\u062f\u0646',
          'received',
        ],
        ['\u062a\u062d\u0648\u06cc\u0644\u0645 \u062f\u0627\u062f', 'received'],
        ['\u0627\u0632 \u0628\u06cc\u0646 \u0631\u0641\u062a', 'waste'],
        ['\u0627\u0632 \u0628\u06cc\u0646 \u0631\u0641\u062a\u0646', 'waste'],
        [
          '\u0645\u0639\u06cc\u0648\u0628 \u0628\u0648\u062f \u06a9\u0646\u0627\u0631 \u06af\u0630\u0627\u0634\u062a\u0645',
          'waste',
        ],
        [
          '\u062e\u0631\u0627\u0628 \u0628\u0648\u062f \u06a9\u0646\u0627\u0631 \u06af\u0630\u0627\u0634\u062a\u0645',
          'waste',
        ],
        [
          '\u0622\u0628 \u062f\u06cc\u062f \u062e\u0631\u0627\u0628 \u0634\u062f',
          'waste',
        ],
        ['\u0645\u0648\u0634 \u062e\u0648\u0631\u062f', 'waste'],
        ['\u0636\u0627\u06cc\u0639 \u0634\u062f', 'waste'],
        ['\u067e\u0627\u0631\u0647 \u0634\u062f', 'waste'],
        [
          '\u062a\u0627\u0631\u06cc\u062e\u0634 \u06af\u0630\u0634\u062a',
          'waste',
        ],
        ['\u06af\u0646\u062f\u06cc\u062f', 'waste'],
        ['\u0633\u0648\u062e\u062a', 'waste'],
        ['\u0634\u06a9\u0633\u062a', 'waste'],
        ['\u0636\u0627\u06cc\u0639\u0627\u062a', 'waste'],
      ].sort((e, n) => n[0].split(' ').length - e[0].split(' ').length),
      f = [
        ['\u0631\u0633\u06cc\u062f \u0628\u0632\u0646', 'received'],
        ['\u0628\u0627\u0631 \u0627\u0648\u0645\u062f', 'received'],
        ['\u0628\u0627\u0631 \u0622\u0645\u062f', 'received'],
        ['\u0628\u0627\u0631 \u0631\u0633\u06cc\u062f', 'received'],
        ['\u0648\u0631\u0648\u062f\u06cc', 'received'],
        ['\u0631\u0633\u06cc\u062f', 'received'],
        ['\u0641\u0631\u0648\u0634', 'sold'],
      ],
      g = (e) => e.some((n, t) => !!N(e, t)),
      p =
        /^(?:(?:\u0647\u0645\u06cc\u0646 \u0627\u0644\u0627\u0646|\u062e\u0628|\u0622\u0642\u0627|\u0628\u0628\u06cc\u0646|\u0633\u0644\u0627\u0645|\u0627\u0645\u0631\u0648\u0632) )+(?=(?:\d|\u06cc\u06a9 |\u06cc\u0647 |\u06cc\u06a9\u06cc |\u062f\u0648 |\u0633\u0647 |\u0686\u0647\u0627\u0631 |\u0686\u0627\u0631 |\u067e\u0646\u062c |\u0634\u0634 |\u0634\u06cc\u0634 |\u0647\u0641\u062a |\u0647\u0634\u062a |\u062f\u0647 |\u06cc\u0627\u0632\u062f\u0647 |\u062f\u0648\u0627\u0632\u062f\u0647 |\u0633\u06cc\u0632\u062f\u0647 |\u0686\u0647\u0627\u0631\u062f\u0647 |\u067e\u0627\u0646\u0632\u062f\u0647 |\u067e\u0648\u0646\u0632\u062f\u0647 |\u0634\u0627\u0646\u0632\u062f\u0647 |\u0647\u0641\u062f\u0647 |\u0647\u062c\u062f\u0647 |\u0646\u0648\u0632\u062f\u0647 |\u0628\u06cc\u0633\u062a |\u0633\u06cc |\u0686\u0647\u0644 |\u067e\u0646\u062c\u0627\u0647 |\u0634\u0635\u062a |\u0647\u0641\u062a\u0627\u062f |\u0647\u0634\u062a\u0627\u062f |\u0646\u0648\u062f |\u0635\u062f |\u062f\u0648\u06cc\u0633\u062a |\u0633\u06cc\u0635\u062f |\u0686\u0647\u0627\u0631\u0635\u062f |\u067e\u0627\u0646\u0635\u062f |\u067e\u0648\u0646\u0635\u062f |\u0634\u0634\u0635\u062f |\u0647\u0641\u062a\u0635\u062f |\u0647\u0634\u062a\u0635\u062f |\u0646\u0647\u0635\u062f |\u0646\u06cc\u0645 ))/;
    function h(e, n) {
      n.some((e) => p.test(e + ' 1')) || (e = e.replace(p, ''));
      let t = ' ' + e + ' ';
      for (const [e, s] of d)
        t.includes(' ' + e + ' ') &&
          !n.some((n) => (' ' + n + ' ').includes(' ' + e + ' ')) &&
          (t = t.split(' ' + e + ' ').join(' _' + s + '_ '));
      t = t.trim();
      const s =
        /^(?:\u06cc\u0647|\u06cc\u06a9) \u0645\u0634\u062a\u0631\u06cc (.+?) (?:\u062e\u0631\u06cc\u062f|\u062e\u0631\u06cc\u062f\u0646|\u0628\u0631\u062f|\u0628\u0631\u062f\u0646)$/.exec(
          t,
        );
      if (s && !g(s[1].split(' '))) return s[1] + ' _sold_';
      for (const [e, s] of f)
        if (t.startsWith(e + ' ')) {
          const i = t.slice(e.length + 1);
          if (!n.some((n) => n.startsWith(e + ' ')) && !g(i.split(' ')))
            return i + ' _' + s + '_';
          break;
        }
      return (
        / \u0641\u0631\u0648\u0634$/.test(t) &&
          !n.some((e) => e.endsWith(' \u0641\u0631\u0648\u0634')) &&
          (t = t.slice(0, -5) + ' _sold_'),
        t
      );
    }
    const v = new Set([
        '\u0647\u0645',
        '\u062f\u06cc\u06af\u0647',
        '\u062f\u06cc\u06af\u0631',
        '\u0627\u0645\u0631\u0648\u0632',
        '\u0627\u0644\u0627\u0646',
        '\u0627\u0648\u0645',
        '\u062e\u0628',
        '\u062e\u0648\u0628',
        '\u0628\u0628\u06cc\u0646',
        '\u0628\u0639\u062f',
        '\u0628\u0639\u062f\u0634',
        '\u0647\u0645\u0686\u0646\u06cc\u0646',
        '\u0631\u0627',
        '\u0631\u0648',
        '\u0622\u0631\u0647',
        '\u0628\u0627\u0634\u0647',
        '\u0645\u0645\u0646\u0648\u0646',
        '\u0644\u0637\u0641\u0627',
        '\u0644\u0637\u0641\u0627\u064b',
        '\u0627\u0645',
        '\u0627\u0650\u0645',
        '\u0628\u0631\u0627\u0645\u0648\u0646',
      ]),
      _ =
        /^(?:\u0646\u0647|\u06cc\u0639\u0646\u06cc|\u0645\u0645\u06cc\u0632|\u0627\u0639\u0634\u0627\u0631|\u062f\u0631\u0635\u062f|\u06af\u0645|\u0642\u0631\u0636|\u0642\u0631\u0636\u06cc|\u0627\u0645\u0627\u0646\u062a|\u0641\u06a9\u0631|\u06a9\u0646\u0645|\u06a9\u0631\u062f\u0645|\u0634\u0627\u06cc\u062f|\u062d\u062f\u0648\u062f|\u062d\u062f\u0648\u062f\u0627|\u062d\u062f\u0648\u062f\u0627\u064b|\u062a\u0642\u0631\u06cc\u0628\u0627|\u062a\u0642\u0631\u06cc\u0628\u0627\u064b|\u0627\u0648\u0644|\u062f\u0648\u0645|\u0633\u0648\u0645|\u0686\u0647\u0627\u0631\u0645|\u0622\u062e\u0631|\u0622\u062e\u0631\u06cc|\u0686\u0646\u062f|\u0686\u0646\u062f\u062a\u0627|\u0647\u0645\u0647|\u0647\u0645\u0634|\u0646\u0635\u0641|\u0628\u0642\u06cc\u0647|\u062f\u0648\u062a\u0627\u0634|\u0633\u0647\u200c\u062a\u0627\u0634|\u06a9\u0644|\u06a9\u0644\u0634|\u0645\u062b\u0644\u0627|\u0645\u062b\u0644\u0627\u064b|\u0627\u06cc\u0646\u06a9\u0647|\u0648\u0644\u06cc|\u0627\u0645\u0627|\u06cc\u0627|\u0646\u0645\u06cc|\u0645\u06cc|\u0645\u06cc\u062e\u0648\u0627\u0645|\u0646\u06cc\u0648\u0645\u062f|\u0646\u0631\u0633\u06cc\u062f|\u0646\u0628\u0631\u062f|\u0646\u062e\u0631\u06cc\u062f\u0645|\u0646\u0641\u0631\u0648\u062e\u062a\u0645|\u0646\u06af\u0631\u0641\u062a\u0645|\u0646\u06cc\u0627\u0648\u0631\u062f\u0646|\u0646\u062e\u0631\u06cc\u062f|\u0646\u0641\u0631\u0648\u062e\u062a|\u06a9\u062c\u0627|\u0686\u0631\u0627|\u0686\u06cc|\u06a9\u06cc)$|^(?:\u0646\u0645?\u06cc?)(?:\u062e\u0631\u06cc\u062f|\u0641\u0631\u0648\u062e\u062a|\u06af\u0631\u0641\u062a|\u0627\u0648\u0645\u062f|\u0622\u0645\u062f|\u0631\u0633\u06cc\u062f|\u0628\u0631\u062f|\u0622\u0648\u0631\u062f)/,
      b =
        /(?:^|\s)(?:\u062a\u0648\u0645\u0646|\u062a\u0648\u0645\u0627\u0646|\u0631\u06cc\u0627\u0644|\u0645\u06cc\u0644\u06cc\u0648\u0646|\u0645\u06cc\u0644\u06cc\u0627\u0631\u062f|\u0642\u06cc\u0645\u062a|\u067e\u0648\u0644|\u0646\u0642\u062f|\u0646\u0642\u062f\u06cc|\u06a9\u0627\u0631\u062a|\u0686\u06a9|\u0637\u0644\u0628|\u0628\u062f\u0647\u06cc|\u0628\u062f\u0647\u06a9\u0627\u0631|\u0646\u0633\u06cc\u0647|\u062d\u0633\u0627\u0628|\u0642\u0633\u0637|\u067e\u0631\u062f\u0627\u062e\u062a|\u062f\u0627\u062f\u0645|\u062f\u0627\u062f|\u062f\u0627\u062f\u0646|\u0628\u0627\u06cc\u062f|\u0628\u062e\u0631\u0645|\u0628\u062e\u0631\u06cc\u0645|\u0628\u06af\u06cc\u0631\u0645|\u0628\u06af\u06cc\u0631\u06cc\u0645|\u0633\u0641\u0627\u0631\u0634|\u06a9\u0645\s+(?:\u062f\u0627\u0631\u06cc\u0645|\u0634\u062f\u0647|\u0627\u0648\u0645\u062f\u0647|\u0622\u0645\u062f\u0647)|\u062a\u0645\u0648\u0645|\u062a\u0645\u0627\u0645|\u062f\u0627\u0631\u06cc\u0645|\u062f\u0627\u0634\u062a\u06cc\u0645|\u062f\u0627\u0631\u0645|\u0645\u0648\u062c\u0648\u062f\u06cc|\u0641\u0631\u062f\u0627|\u062f\u06cc\u0631\u0648\u0632|\u067e\u0631\u06cc\u0631\u0648\u0632|\u067e\u0633\u200c\u0641\u0631\u062f\u0627|\u0633\u0627\u0639\u062a|\u0634\u0646\u0628\u0647|\u06cc\u06a9\u0634\u0646\u0628\u0647|\u062f\u0648\u0634\u0646\u0628\u0647|\u0633\u0647\u200c\u0634\u0646\u0628\u0647|\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647|\u067e\u0646\u062c\u0634\u0646\u0628\u0647|\u062c\u0645\u0639\u0647|\u0635\u0628\u062d|\u0638\u0647\u0631|\u0639\u0635\u0631|\u0634\u0628|\u0622\u0642\u0627\u06cc|\u0622\u0642\u0627|\u062e\u0627\u0646\u0645|\u0627\u0642\u0627\u06cc|\u0646\u0641\u0631\u0648\u062e\u062a\u0645|\u0646\u06cc\u0633\u062a|\u0646\u0628\u0648\u062f|\u0646\u0647\s+(?:\u0646\u0647|\u0628\u0628\u062e\u0634\u06cc\u062f)|\u0628\u0628\u062e\u0634\u06cc\u062f|\u0627\u0634\u062a\u0628\u0627\u0647|\u06a9\u0646\u0633\u0644|\u0628\u0631\u06af\u0634\u062a|\u0645\u0631\u062c\u0648\u0639|\u067e\u0633|\u0627\u06cc\u0646\u0627|\u0647\u0645\u0648\u0646|\u0627\u0648\u0646|\u0627\u06cc\u0646|\u0634\u0648\u0646\u0647|\u0634\u0627\u0646\u0647|\u0628\u0647|\u0628\u0631\u0627\u06cc|\u0648\u0627\u0633\u0647|\u0645\u0627\u0644|\u0647\u0631|\u062f\u0648\u0646\u0647\u200c\u0627\u06cc|\u062f\u0648\u0646\u0647\s*\u0627\u06cc|(?:\u06a9\u06cc\u0644\u0648\u06cc\u06cc|\u0644\u06cc\u062a\u0631\u06cc|\u0639\u062f\u062f\u06cc|\u062a\u0627\u06cc\u06cc)\s+\d+\s*(?:\u0647\u0632\u0627\u0631|\u062a\u0648\u0645\u0646|\u062a\u0648\u0645\u0627\u0646)|\u062a\u062e\u0641\u06cc\u0641|\u0627\u0632)(?=\s|$)/;
    function w(e) {
      return String(e)
        .normalize('NFKC')
        .replace(/[\u064a]/g, '\u06cc')
        .replace(/[\u0643]/g, '\u06a9')
        .replace(/[\u06c0\u0629]/g, '\u0647')
        .replace(/[\u0623\u0625]/g, '\u0627')
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
        )
        .replace(/(\d)[\u066b/](\d)/g, '$1.$2')
        .replace(/(\d),(\d{3})(?!\d)/g, '$1$2')
        .replace(
          /(^|\s)(\u06cc\u06a9|\u062f\u0648|\u0633\u0647|\u0686\u0647\u0627\u0631|\u0686\u0627\u0631|\u067e\u0646\u062c|\u0634\u0634|\u0634\u06cc\u0634|\u0647\u0641\u062a|\u0647\u0634\u062a|\u062f\u0647|\u0635\u062f|\u0646\u06cc\u0645|\u0631\u0628\u0639)\u200c(?!(?:\u062a\u0627|\u0639\u062f\u062f|\u062f\u0648\u0646\u0647|\u062f\u0627\u0646\u0647|\u062c\u0641\u062a|\u06a9\u06cc\u0644\u0648\S*|\u06af\u0631\u0645\S*|\u0644\u06cc\u062a\u0631\S*|\u0645\u062a\u0631\S*|\u0645\u06cc\u0644\u06cc\S*|\u0633\u06cc|\u0628\u0633\u062a\u0647|\u06a9\u0627\u0631\u062a\u0646|\u06a9\u0627\u0631\u062a\u0648\u0646|\u062c\u0639\u0628\u0647|\u0628\u0627\u06a9\u0633|\u06a9\u06cc\u0633\u0647|\u0631\u0648\u0644|\u0634\u06cc\u0634\u0647|\u0628\u0637\u0631\u06cc|\u0642\u0648\u0637\u06cc|\u067e\u0627\u06a9\u062a|\u06af\u0648\u0646\u06cc|\u062f\u0648\u062c\u06cc\u0646|\u0634\u0646\u0628\u0647|\u0633\u0627\u0639\u062a|\u0631\u0648\u0632|\u0631\u0648\u0632\u0647|\u0647\u0641\u062a\u0647|\u0645\u0627\u0647|\u0645\u0627\u0647\u0647|\u0633\u0627\u0644|\u0633\u0627\u0644\u0647|\u0647\u0632\u0627\u0631|\u0645\u06cc\u0644\u06cc\u0648\u0646|\u062a\u0648\u0645\u0646|\u062a\u0648\u0645\u0627\u0646)(?=[\s\u200c]|$))/g,
          '$1$2',
        )
        .replace(/[\u200c\u200d\xa0]/g, ' ')
        .replace(/[\u060c,\u061b;]/g, ' \u060c ')
        .replace(
          /(?<!\d)\.|\.(?!\d)|[!?\u061f\xab\xbb"()\-\u2013\u2014:]/g,
          ' ',
        )
        .replace(/\s+/g, ' ')
        .trim()
        .toLowerCase()
        .replace(
          /(^|\s)(\d+|\u06cc\u06a9|\u06cc\u0647|\u062f\u0648|\u0633\u0647|\u0686\u0647\u0627\u0631|\u0686\u0627\u0631|\u067e\u0646\u062c|\u0634\u0634|\u0634\u06cc\u0634|\u0647\u0641\u062a|\u0647\u0634\u062a|\u0646\u0647|\u062f\u0647|\u06cc\u0627\u0632\u062f\u0647|\u062f\u0648\u0627\u0632\u062f\u0647|\u0628\u06cc\u0633\u062a|\u0633\u06cc|\u0686\u0647\u0644|\u067e\u0646\u062c\u0627\u0647|\u0635\u062f)(\u062a\u0627|\u0639\u062f\u062f|\u06a9\u06cc\u0644\u0648|\u0644\u06cc\u062a\u0631|\u0628\u0633\u062a\u0647|\u06a9\u0627\u0631\u062a\u0646)(?=\s|$)/g,
          '$1$2 $3',
        )
        .replace(
          /(^|\s)\u06cc\u062f\u0648\u0646\u0647(?=\s|$)/g,
          '$1\u06cc\u0647 \u062f\u0648\u0646\u0647',
        )
        .replace(
          /(^|\s)\u0633\u06cc \u0633\u06cc(?=\s|$)/g,
          '$1\u0633\u06cc\u0633\u06cc',
        )
        .replace(
          /(^|\s)\u0645\u06cc\u0644\u06cc \u0644\u06cc\u062a\u0631(\u06cc?)(?=\s|$)/g,
          '$1\u0645\u06cc\u0644\u06cc\u0644\u06cc\u062a\u0631$2',
        )
        .replace(
          /(^|\s)\u06a9\u06cc\u0644\u0648 \u06af\u0631\u0645(\u06cc?)(?=\s|$)/g,
          '$1\u06a9\u06cc\u0644\u0648\u06af\u0631\u0645$2',
        );
    }
    const k = (e) => e.replace(/\s/g, '');
    function $(l, o) {
      const a = (n) => {
          const t = l[n];
          return void 0 === t
            ? null
            : /^\d+(?:\.\d+)?$/.test(t)
              ? Number(t)
              : t in e
                ? e[t]
                : null;
        },
        c = l[o];
      if (void 0 !== c && c in t) return { value: t[c], end: o + 1 };
      let u = a(o);
      if (null === u || 0 === u) return null;
      if ('\u0646\u0647' === c && !s.has(l[o + 1]) && !(k(l[o + 1] || '') in i))
        return null;
      let d = 0,
        f = u,
        g = u,
        p = o + 1;
      for (;;) {
        const e = l[p];
        if (void 0 === e || !(e in n)) {
          if ('\u0648' === e) {
            const e = l[p + 1];
            if (void 0 !== e && e in t && !l.slice(o, p).some((e) => e in i)) {
              ((f += t[e]), (p += 2));
              break;
            }
            const n = a(p + 1);
            if (0 === n) return null;
            if (
              null !== n &&
              n < y(g) &&
              ('\u0646\u0647' !== l[p + 1] ||
                s.has(l[p + 2]) ||
                (l[p + 2] || '') in i)
            ) {
              ((f += n), (g = n), (p += 2));
              continue;
            }
            break;
          }
          if (void 0 !== e && /^\d+$/.test(e) && /^\d+$/.test(l[p - 1]))
            return null;
          break;
        }
        if (l[p - 1] in n) return null;
        ((f = (f || 1) * n[e]), (d += f), (f = 0), (g = n[e]), p++);
      }
      return { value: d + f, end: p };
    }
    function S(e, n) {
      const t = new Map();
      for (const e of n) {
        const n = e.split(' ');
        if (
          n.length < 2 ||
          !n.some((e, n) => n > 0 && /^\d+(?:\.\d+)?$/.test(e))
        )
          continue;
        const s = t.get(n[0]);
        s ? s.push(n) : t.set(n[0], [n]);
      }
      if (!t.size) return e;
      const s = new Set(n.map((e) => e.replace(/ /g, ''))),
        i = (n, t) => {
          let s = n;
          for (const n of t) {
            if (/^\d+(?:\.\d+)?$/.test(n)) {
              if (e[s] === n) {
                s++;
                continue;
              }
              const t = $(e, s);
              if (t && t.value === Number(n)) {
                s = t.end;
                continue;
              }
              return -1;
            }
            if (e[s] !== n) return -1;
            s++;
          }
          return s;
        },
        o = [];
      for (let n = 0; n < e.length; ) {
        let a = null;
        for (const s of t.get(e[n]) || []) {
          const t = i(n, s);
          !(t > n && (!a || t > a.end)) ||
            (/^\d/.test(s[s.length - 1]) &&
              l.test(e.slice(t, t + 1).join(''))) ||
            (a = { end: t, w: s });
        }
        !a || s.has(e.slice(n, a.end).join(''))
          ? (o.push(e[n]), n++)
          : (o.push(a.w.join('_')), (n = a.end));
      }
      return o;
    }
    const q = new Set([
        'piece',
        'bottle',
        'can',
        'pack',
        'box',
        'carton',
        'bag',
        'sack',
        'roll',
        'dozen',
      ]),
      j = new Set(['g>kg', 'kg>g', 'ml>l', 'l>ml']),
      y = (e) => (e >= 1e3 ? 1e3 : e >= 100 ? 100 : e >= 10 ? 10 : 1);
    function x(e, l) {
      const o = $(e, l);
      if (!o) return null;
      let c = o.end,
        u = 'piece',
        d = o.value;
      if (a.has(k(e[c] || ''))) return null;
      (s.has(e[c]) && c++,
        ('\u062f\u0648\u0646\u0647' !== e[c] &&
          '\u062f\u0627\u0646\u0647' !== e[c]) ||
          ('\u062a\u0627' !== e[c - 1] && '\u0639\u062f\u062f' !== e[c - 1]) ||
          c++,
        '\u062c\u0641\u062a' === e[c] && c++);
      const f = k(e[c] || '');
      let g;
      if (f in i) ((u = i[f]), (g = c), c++, s.has(e[c]) && c++);
      else if (c === o.end)
        return o.value > 0 &&
          o.value < 1e3 &&
          !e.slice(l, o.end).some((e) => e in n) &&
          (M(e[l]) || z(e, l))
          ? { value: d, unit: u, start: l, end: c, bare: !0 }
          : null;
      if (
        '\u0648' === e[c] &&
        void 0 !== e[c + 1] &&
        e[c + 1] in t &&
        'piece' !== u
      )
        ((d += t[e[c + 1]]), (c += 2));
      else if ('\u0648' === e[c] && ('kg' === u || 'l' === u)) {
        const n = W(e, c + 1, u);
        n && ((d += n.value / 1e3), (c = n.end));
      }
      return d > 0
        ? {
            value: Math.round(1e3 * d) / 1e3,
            unit: u,
            start: l,
            end: c,
            ...(void 0 !== g ? { unitAt: g } : {}),
          }
        : null;
    }
    function W(n, t, l) {
      const o = $(n, t);
      if (!o || !(o.value >= 1 && o.value < 1e3) || !Number.isInteger(o.value))
        return null;
      const c = k(n[o.end] || '');
      if (
        ('kg' === l
          ? ['\u06af\u0631\u0645']
          : [
              '\u0645\u06cc\u0644\u06cc',
              '\u0645\u06cc\u0644\u06cc\u0644\u06cc\u062a\u0631',
              '\u0633\u06cc\u0633\u06cc',
            ]
        ).includes(c)
      )
        return { value: o.value, end: o.end + 1 };
      return !(
        '' === c ||
        c in i ||
        s.has(c) ||
        c in e ||
        /^\d/.test(c) ||
        '\u0648' === c ||
        '\u060c' === c ||
        N(n, o.end) ||
        a.has(c)
      ) &&
        o.value >= 50 &&
        o.value % 50 == 0
        ? { value: o.value, end: o.end }
        : null;
    }
    const M = (n) =>
        n in e && '\u0646\u0647' !== n && '\u06cc\u06a9\u06cc' !== n,
      z = (n, t) =>
        '\u06cc\u06a9\u06cc' === n[t] &&
        void 0 !== n[t + 1] &&
        !(n[t + 1] in e) &&
        !/^\d/.test(n[t + 1]) &&
        ![
          '\u0627\u0632',
          '\u062f\u06cc\u06af\u0647',
          '\u062f\u06cc\u06af\u0631',
          '\u0631\u0648',
          '\u0631\u0627',
          '\u0647\u0645',
          '\u0648',
          '\u060c',
        ].includes(n[t + 1]);
    function N(e, n) {
      for (const [t, s] of c)
        if (t.every((t, s) => e[n + s] === t))
          return { kind: s, end: n + t.length };
      const t = e[n];
      return void 0 !== t && t in u ? { kind: u[t], end: n + 1 } : null;
    }
    const O = new WeakMap();
    function A(e, n, t) {
      let i = O.get(e);
      if (i) return i;
      const l = new Set(n.map((e) => e.replace(/ /g, '')));
      i = [];
      for (const e of n) {
        const n = e.split(' ');
        if (n.length < 2 || t.includes(e)) continue;
        const o = n.findIndex((e, t) => t > 0 && !!N(n, t)),
          a = s.has(n[0]);
        (o < 0 && !a) ||
          i.push({
            name: e,
            glued: n.join('_'),
            unclear:
              (o > 0 && l.has(n.slice(0, o).join(''))) ||
              (a && l.has(n.slice(1).join(''))),
          });
      }
      return (O.set(e, i), i);
    }
    function I(e, n) {
      const t = (s, i) => {
        if (s === e.length) return i >= 2;
        for (let l = s + 1; l <= e.length; l++)
          if (n.has(e.slice(s, l).join('')) && t(l, i + 1)) return !0;
        return !1;
      };
      return t(0, 0);
    }
    const K = (e) => w(e).replace(/ /g, '');
  },
  597,
  [],
);
