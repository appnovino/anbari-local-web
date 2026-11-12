// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 457; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.greetingText = function (t) {
        const n = (t || '').trim();
        return n
          ? (0, a.L)('\u0633\u0644\u0627\u0645\u060c {name}', { name: n })
          : (0, a.L)('\u0633\u0644\u0627\u0645');
      }),
      (e.runoutSoon = d),
      (e.homeInsight = function ({
        summary: t,
        products: n,
        movements: s = [],
        now: c = new Date(),
      }) {
        const p = n.filter((t) => !t.archivedAt),
          h = p.filter((t) => t.stock <= 0),
          f = (0, a.L)(
            '\u0628\u0631 \u0627\u0633\u0627\u0633 \u0641\u0631\u0648\u0634 \u06f7 \u0631\u0648\u0632 \u0627\u062e\u06cc\u0631',
          );
        if (!p.length)
          return {
            mood: 'new',
            headline: (0, a.L)(
              '\u0628\u06cc\u0627 \u0634\u0631\u0648\u0639 \u06a9\u0646\u06cc\u0645',
            ),
            line: (0, a.L)(
              '\u0627\u0648\u0644\u06cc\u0646 \u06a9\u0627\u0644\u0627\u06cc\u062a \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646 \u062a\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u0631\u0627 \u0628\u0631\u0627\u06cc\u062a \u062a\u062d\u0644\u06cc\u0644 \u06a9\u0646\u062f.',
            ),
            facts: [],
            projection: null,
            basis: f,
          };
        const y = h.length
            ? [
                {
                  kind: 'out',
                  text:
                    1 === h.length
                      ? (0, a.L)(
                          '\xab{name}\xbb \u062a\u0645\u0627\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a.',
                          { name: h[0].name },
                        )
                      : (0, a.L)(
                          '{n} \u06a9\u0627\u0644\u0627 \u062a\u0645\u0627\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a.',
                          { n: (0, o.formatGrouped)(h.length) },
                        ),
                  tone: 'bad',
                },
              ]
            : [],
          v = t?.days || [],
          L = t?.totals.soldUnits || 0,
          b = t?.totals.revenue || 0;
        if (!t || (L <= 0 && b <= 0))
          return {
            mood: 'quiet',
            headline: (0, a.L)(
              '\u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 \u0647\u0646\u0648\u0632 \u0641\u0631\u0648\u0634\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647',
            ),
            line: (0, a.L)(
              '\u0641\u0631\u0648\u0634\u200c\u0647\u0627\u06cc\u062a \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646 \u062a\u0627 \u067e\u06cc\u0634\u200c\u0628\u06cc\u0646\u06cc \u0641\u0631\u0648\u0634 \u0648 \u0633\u0648\u062f \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc.',
            ),
            facts: y,
            projection: null,
            basis: f,
          };
        const M = v[v.length - 1],
          w = v[v.length - 2],
          D = (0, o.percentChange)(b, t.previous.revenue),
          S =
            null !== D && D >= 10
              ? 'up'
              : null !== D && D <= -10
                ? 'down'
                : 'good',
          N =
            'up' === S
              ? (0, a.L)(
                  '\u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u0631\u0648 \u0628\u0647 \u0631\u0634\u062f \u0627\u0633\u062a',
                )
              : 'down' === S
                ? (0, a.L)(
                    '\u0641\u0631\u0648\u0634 \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 \u06a9\u0645\u062a\u0631 \u0628\u0648\u062f\u0647',
                  )
                : (0, a.L)(
                    '\u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u062e\u0648\u0628 \u067e\u06cc\u0634 \u0645\u06cc\u200c\u0631\u0648\u062f',
                  ),
          T = b / Math.max(1, v.length),
          A = t.totals.cost > 0 || 0 !== t.totals.profit,
          I =
            b > 0
              ? {
                  days: u,
                  revenue: Math.round(T * u),
                  profit: A
                    ? Math.round((t.totals.profit / Math.max(1, v.length)) * u)
                    : null,
                }
              : null,
          U = [];
        w && (w.soldUnits > 0 || w.revenue > 0)
          ? U.push({
              kind: 'yesterday',
              text:
                w.revenue > 0
                  ? (0, a.L)(
                      '\u062f\u06cc\u0631\u0648\u0632 {units} \u0641\u0631\u0648\u062e\u062a\u06cc \u0628\u0647 \u0627\u0631\u0632\u0634 {amount}.',
                      { units: m(w.soldUnits), amount: l(w.revenue) },
                    )
                  : (0, a.L)(
                      '\u062f\u06cc\u0631\u0648\u0632 {units} \u0641\u0631\u0648\u062e\u062a\u06cc.',
                      { units: m(w.soldUnits) },
                    ),
              tone: 'plain',
            })
          : M &&
            (M.soldUnits > 0 || M.revenue > 0) &&
            U.push({
              kind: 'today',
              text:
                M.revenue > 0
                  ? (0, a.L)(
                      '\u0627\u0645\u0631\u0648\u0632 \u062a\u0627 \u0627\u06cc\u0646 \u0644\u062d\u0638\u0647 {units} \u0641\u0631\u0648\u062e\u062a\u06cc \u0628\u0647 \u0627\u0631\u0632\u0634 {amount}.',
                      { units: m(M.soldUnits), amount: l(M.revenue) },
                    )
                  : (0, a.L)(
                      '\u0627\u0645\u0631\u0648\u0632 \u062a\u0627 \u0627\u06cc\u0646 \u0644\u062d\u0638\u0647 {units} \u0641\u0631\u0648\u062e\u062a\u06cc.',
                      { units: m(M.soldUnits) },
                    ),
              tone: 'plain',
            });
        null !== D &&
          0 !== D &&
          U.push({
            kind: 'trend',
            text: (0, a.L)(
              D > 0
                ? '\u0641\u0631\u0648\u0634 \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 {percent}\u066a \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644 \u0627\u0633\u062a.'
                : '\u0641\u0631\u0648\u0634 \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 {percent}\u066a \u06a9\u0645\u062a\u0631 \u0627\u0632 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644 \u0627\u0633\u062a.',
              { percent: (0, o.formatGrouped)(Math.abs(D), 0) },
            ),
            tone: D > 0 ? 'good' : 'warn',
          });
        t.top[0] &&
          U.push({
            kind: 'top',
            text: (0, a.L)(
              '\u067e\u0631\u0641\u0631\u0648\u0634\u200c\u062a\u0631\u06cc\u0646 \u06a9\u0627\u0644\u0627: \xab{name}\xbb.',
              { name: t.top[0].name },
            ),
            tone: 'plain',
          });
        for (const t of d(p, s, c))
          U.push({
            kind: 'runout',
            text: (0, a.L)(
              '\u0645\u0648\u062c\u0648\u062f\u06cc \xab{name}\xbb \u0628\u0627 \u0627\u06cc\u0646 \u0633\u0631\u0639\u062a \u062d\u062f\u0648\u062f {days} \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631 \u062a\u0645\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f.',
              { name: t.name, days: (0, o.formatGrouped)(t.days, 0) },
            ),
            tone: 'warn',
          });
        (U.push(...y),
          I &&
            null === I.profit &&
            U.push({
              kind: 'noCost',
              text: (0, a.L)(
                '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u06a9\u0627\u0644\u0627\u0647\u0627 \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646 \u062a\u0627 \u0633\u0648\u062f \u0647\u0645 \u067e\u06cc\u0634\u200c\u0628\u06cc\u0646\u06cc \u0634\u0648\u062f.',
              ),
              tone: 'plain',
            }));
        const k =
            'up' === S
              ? (0, a.L)('\u0631\u0648 \u0628\u0647 \u0631\u0634\u062f\u06cc')
              : 'down' === S
                ? (0, a.L)(
                    '\u06a9\u0645\u06cc \u06a9\u0646\u062f\u062a\u0631 \u0627\u0632 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644',
                  )
                : (0, a.L)(
                    '\u0631\u0648\u0646\u062f\u062a \u062e\u0648\u0628 \u0627\u0633\u062a',
                  ),
          O =
            w && w.revenue > 0
              ? (0, a.L)(
                  '\u062f\u06cc\u0631\u0648\u0632 {amount} \u0641\u0631\u0648\u0634 \u062f\u0627\u0634\u062a\u06cc',
                  { amount: l(w.revenue) },
                )
              : b > 0
                ? (0, a.L)(
                    '\u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 {amount} \u0641\u0631\u0648\u0634 \u062f\u0627\u0634\u062a\u06cc',
                    { amount: l(b) },
                  )
                : (0, a.L)(
                    '\u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 {units} \u0641\u0631\u0648\u062e\u062a\u06cc',
                    { units: m(L) },
                  ),
          x = (0, a.L)('{start}\u061b {pace}.', { start: O, pace: k });
        return {
          mood: S,
          headline: N,
          line: x,
          facts: U.slice(0, 5),
          projection: I,
          basis: f,
        };
      }),
      Object.defineProperty(e, 'INSIGHT_FALLBACK', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'THOUGHT_MAX', {
        enumerable: !0,
        get: function () {
          return h;
        },
      }),
      (e.historyLine = L),
      (e.ruleThought = b),
      (e.insightLines = function (t) {
        const n = (t || '').replace(/\s+/g, ' ').trim(),
          o = n.search(/[.!\u061f?](\s+)(?=\S)/);
        if (o < 0) return [n, ''];
        const s = n.slice(0, o + 1).trim(),
          a = n.slice(o + 1).trim();
        return [s, a];
      }),
      Object.defineProperty(e, 'INSIGHT_REFRESH_HOURS', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }),
      (e.insightSlot = function (t = new Date()) {
        return Math.floor(t.getHours() / M);
      }),
      (e.dailyStats = D),
      Object.defineProperty(e, 'LEARN_DAYS', {
        enumerable: !0,
        get: function () {
          return S;
        },
      }),
      (e.activeDayCount = A),
      (e.learnProgress = function (t) {
        const n = t?.activeDays;
        return 'number' != typeof n || !Number.isFinite(n) || n >= S
          ? null
          : { days: Math.max(0, Math.floor(n)), total: S };
      }),
      (e.buildDailyInsight = I),
      (e.activityFromMovements = U),
      (e.localDailyInsight = function ({
        summary: t,
        products: o,
        movements: s = [],
        now: a = new Date(),
        timezone: u,
      }) {
        const c = o.filter((t) => !t.archivedAt),
          l = c.filter((t) => 'made' !== t.kind),
          m = l.filter((t) => t.stock <= 0),
          p = a.getTime() - 6048e5,
          h = s.filter((t) => {
            const n = t.timestamp ? new Date(t.timestamp).getTime() : NaN;
            return n >= p && n <= a.getTime();
          }).length,
          f = D({
            summary: t,
            products: c.length,
            outOfStock: m.length,
            outName: m[0]?.name,
            runout: d(l, s, a).map(({ name: t, days: n }) => ({
              name: t,
              days: n,
            })),
            movements7: h,
            last: U(s, a),
            activeDays: A(s, u || 'Asia/Tehran', a),
          });
        return I({
          day: (0, n.localDate)(a),
          generatedAt: a.toISOString(),
          stats: f,
        });
      }),
      (e.thoughtNumbers = O),
      (e.cleanThought = function (t, n) {
        if ('string' != typeof t) return null;
        const o = t
          .replace(/\s+/g, ' ')
          .trim()
          .replace(/^["']+|["']+$/g, '')
          .trim();
        if (o.length < 8 || o.length > h) return null;
        if (
          /[A-Za-z<>{}[\]\\|`#*_@$=~^]/.test(o) ||
          /\p{Extended_Pictographic}/u.test(o)
        )
          return null;
        if ((o.match(/[\u0600-\u06ff]/g) || []).length < 6) return null;
        const s = new Set(O(n));
        for (const t of k(o).matchAll(/\d+(?:[.,\u066b\u066c]\d+)*/g)) {
          const n = t[0],
            o = /[.\u066b]\d{1,2}$/.test(n)
              ? n.replace(/[,\u066c]/g, '').replace('\u066b', '.')
              : n.replace(/[.,\u066b\u066c]/g, '');
          if (!s.has(Number(o))) return null;
        }
        return o;
      }),
      (e.cleanTranslatedThought = function (t, n, o) {
        if ('string' != typeof t) return null;
        const s = t
          .replace(/\s+/g, ' ')
          .trim()
          .replace(/^["']+|["']+$/g, '')
          .trim();
        if (s.length < 8 || s.length > 210) return null;
        if (
          /[<>{}[\]\\|`#*_@$=~^]/.test(s) ||
          /\p{Extended_Pictographic}/u.test(s)
        )
          return null;
        if (
          'en' === n
            ? (s.match(/[A-Za-z]/g) || []).length < 6 ||
              /[\u0600-\u06ff]/.test(s)
            : (s.match(/[\u0600-\u06ff]/g) || []).length < 6 ||
              /[A-Za-z]/.test(s)
        )
          return null;
        const a = new Set([...k(o).matchAll(/\d+/g)].map((t) => Number(t[0])));
        for (const t of k(s).matchAll(/\d+/g))
          if (!a.has(Number(t[0]))) return null;
        return s;
      }),
      (e.updatedLabel = function (t, n = new Date()) {
        const s = t ? new Date(t) : null;
        if (!s || Number.isNaN(s.getTime()))
          return (0, a.L)(
            '\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0627\u0644\u0627\u0646',
          );
        const u = `${(0, o.faDigits)(String(s.getHours()).padStart(2, '0'))}:${(0, o.faDigits)(String(s.getMinutes()).padStart(2, '0'))}`,
          c = Math.round(
            (new Date(n.getFullYear(), n.getMonth(), n.getDate()).getTime() -
              new Date(s.getFullYear(), s.getMonth(), s.getDate()).getTime()) /
              864e5,
          );
        return c <= 0
          ? (0, a.L)(
              '\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0627\u0645\u0631\u0648\u0632 {time}',
              { time: u },
            )
          : 1 === c
            ? (0, a.L)(
                '\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u062f\u06cc\u0631\u0648\u0632 {time}',
                { time: u },
              )
            : (0, a.L)(
                '\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc {date} {time}',
                {
                  date: s.toLocaleDateString((0, a.dateLocale)(), {
                    day: 'numeric',
                    month: 'long',
                  }),
                  time: u,
                },
              );
      }));
    var t = r(_d[0]),
      n = r(_d[1]),
      o = r(_d[2]),
      s = r(_d[3]),
      a = r(_d[4]);
    const u = 30,
      c = 7;
    const l = (t) => (0, s.money)(t, { hint: !1 }),
      m = (t) =>
        (0, a.L)('{n} \u0648\u0627\u062d\u062f', {
          n: (0, o.formatGrouped)(t),
        });
    function d(t, n, o = new Date(), s = 2) {
      const a = o.getTime() - 6048e5,
        u = new Map(),
        l = new Map(n.filter((t) => t.id).map((t) => [t.id, t]));
      for (const t of n) {
        const n = t.correctsMovementId ? l.get(t.correctsMovementId) : void 0,
          s = n || t;
        if (t.correctsMovementId && !n) continue;
        if (
          'sold' !== s.kind ||
          t.parentMovementId ||
          !s.timestamp ||
          !t.timestamp ||
          new Date(t.timestamp).getTime() > o.getTime()
        )
          continue;
        const c = new Date(s.timestamp).getTime();
        c >= a &&
          c <= o.getTime() &&
          u.set(
            s.productId,
            (u.get(s.productId) || 0) + (n ? -t.quantity : t.quantity),
          );
      }
      return t
        .filter((t) => !t.archivedAt && t.stock > 0 && (u.get(t.id) || 0) > 0)
        .map((t) => ({
          id: t.id,
          name: t.name,
          days: Math.max(1, Math.round(t.stock / ((u.get(t.id) || 0) / 7))),
        }))
        .filter((t) => t.days <= c)
        .sort((t, n) => t.days - n.days || t.name.localeCompare(n.name))
        .slice(0, s);
    }
    const p = (0, a.localized)({
        thought:
          '\u0627\u0645\u0631\u0648\u0632 \u0647\u0645 \u0628\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u06a9\u0627\u0631\u0647\u0627 \u0645\u0631\u062a\u0628\u0647\u061b \u0647\u0631 \u0641\u0631\u0648\u0634 \u0631\u0648 \u062b\u0628\u062a \u06a9\u0646 \u062a\u0627 \u062a\u062d\u0644\u06cc\u0644 \u062f\u0642\u06cc\u0642\u200c\u062a\u0631 \u0628\u0634\u0647.',
        history:
          '\u0647\u0646\u0648\u0632 \u0641\u0639\u0627\u0644\u06cc\u062a\u06cc \u0628\u0631\u0627\u06cc \u062f\u06cc\u0631\u0648\u0632 \u062b\u0628\u062a \u0646\u0634\u062f\u0647.',
      }),
      h = 170,
      f = (t, n, s) =>
        1 === t ? (0, a.L)(n) : (0, a.L)(s, { n: (0, o.formatGrouped)(t, 0) }),
      y = (t) => {
        const n = t.replace(/\s+/g, ' ').trim();
        return n.length > 28 ? n.slice(0, 27) + '\u2026' : n;
      },
      v = (t) => {
        const n = Number(t);
        return Number.isFinite(n) ? n : 0;
      };
    function L(t) {
      if (!t) return p.history;
      const n = [
          t.received > 0 &&
            f(
              t.received,
              '\u06cc\u06a9 \u0631\u0633\u06cc\u062f',
              '{n} \u0631\u0633\u06cc\u062f',
            ),
          t.sold > 0 &&
            f(
              t.sold,
              '\u06cc\u06a9 \u0641\u0631\u0648\u0634',
              '{n} \u0641\u0631\u0648\u0634',
            ),
          t.other > 0 &&
            f(
              t.other,
              '\u06cc\u06a9 \u0645\u0635\u0631\u0641 \u06cc\u0627 \u062f\u0648\u0631\u0631\u06cc\u0632',
              '{n} \u0645\u0635\u0631\u0641 \u06cc\u0627 \u062f\u0648\u0631\u0631\u06cc\u0632',
            ),
        ].filter((t) => !!t),
        s = [
          t.chequesIn > 0 &&
            f(
              t.chequesIn,
              '\u06cc\u06a9 \u0686\u06a9 \u06af\u0631\u0641\u062a\u06cc',
              '{n} \u0686\u06a9 \u06af\u0631\u0641\u062a\u06cc',
            ),
          t.chequesOut > 0 &&
            f(
              t.chequesOut,
              '\u06cc\u06a9 \u0686\u06a9 \u062f\u0627\u062f\u06cc',
              '{n} \u0686\u06a9 \u062f\u0627\u062f\u06cc',
            ),
        ].filter((t) => !!t);
      if (!n.length && !s.length) return p.history;
      const u =
          t.daysAgo <= 1
            ? (0, a.L)('\u062f\u06cc\u0631\u0648\u0632')
            : 2 === t.daysAgo
              ? (0, a.L)('\u067e\u0631\u06cc\u0631\u0648\u0632')
              : (0, a.L)('{n} \u0631\u0648\u0632 \u067e\u06cc\u0634', {
                  n: (0, o.formatGrouped)(t.daysAgo, 0),
                }),
        c = ' ' + (0, a.L)('\u0648') + ' ';
      return `${u} ${[...(n.length ? [(0, a.L)('{items} \u062b\u0628\u062a \u06a9\u0631\u062f\u06cc', { items: n.join(c) })] : []), ...s].join(c)}.`;
    }
    function b(t) {
      if (!t) return p.thought;
      if (t.products <= 0)
        return (0, a.L)(
          '\u0647\u0646\u0648\u0632 \u06a9\u0627\u0644\u0627\u06cc\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647. \u0627\u0648\u0644\u06cc\u0646 \u06a9\u0627\u0644\u0627 \u0631\u0627 \u06a9\u0647 \u062b\u0628\u062a \u06a9\u0646\u06cc\u060c \u062a\u062d\u0644\u06cc\u0644 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u062a \u0634\u0631\u0648\u0639 \u0645\u06cc\u200c\u0634\u0648\u062f.',
        );
      if (!1 === t.salesKnown) return p.thought;
      if (t.movements7 <= 0)
        return (0, a.L)(
          '\u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 \u0686\u06cc\u0632\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647. \u0641\u0631\u0648\u0634\u200c\u0647\u0627\u06cc \u0627\u0645\u0631\u0648\u0632 \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646\u06cc\u060c \u0641\u0631\u062f\u0627 \u062a\u062d\u0644\u06cc\u0644 \u062f\u0642\u06cc\u0642 \u062f\u0627\u0631\u06cc.',
        );
      const n =
          t.sales7 <= 0 ? null : (0, o.percentChange)(t.sales7, t.salesPrev7),
        s = t.top ? y(t.top) : '',
        u = (t) => (0, o.formatGrouped)(Math.abs(t), 0),
        c =
          null !== n && n >= 1
            ? s
              ? (0, a.L)(
                  '\u0641\u0631\u0648\u0634 \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 {percent}\u066a \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644 \u0628\u0648\u062f \u0648 \xab{name}\xbb \u0627\u0632 \u0647\u0645\u0647 \u0628\u06cc\u0634\u062a\u0631 \u0641\u0631\u0648\u062e\u062a.',
                  { percent: u(n), name: s },
                )
              : (0, a.L)(
                  '\u0641\u0631\u0648\u0634 \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 {percent}\u066a \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644 \u0628\u0648\u062f.',
                  { percent: u(n) },
                )
            : null !== n && n <= -1
              ? s
                ? (0, a.L)(
                    '\u0641\u0631\u0648\u0634 \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 {percent}\u066a \u06a9\u0645\u062a\u0631 \u0627\u0632 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644 \u0628\u0648\u062f\u061b \xab{name}\xbb \u0647\u0646\u0648\u0632 \u067e\u0631\u0641\u0631\u0648\u0634\u200c\u062a\u0631\u06cc\u0646 \u0627\u0633\u062a.',
                    { percent: u(n), name: s },
                  )
                : (0, a.L)(
                    '\u0641\u0631\u0648\u0634 \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 {percent}\u066a \u06a9\u0645\u062a\u0631 \u0627\u0632 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644 \u0628\u0648\u062f.',
                    { percent: u(n) },
                  )
              : null !== n
                ? s
                  ? (0, a.L)(
                      '\u0641\u0631\u0648\u0634 \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 \u0647\u0645\u200c\u0627\u0646\u062f\u0627\u0632\u0647\u0654 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644 \u0628\u0648\u062f \u0648 \xab{name}\xbb \u0627\u0632 \u0647\u0645\u0647 \u0628\u06cc\u0634\u062a\u0631 \u0641\u0631\u0648\u062e\u062a.',
                      { name: s },
                    )
                  : (0, a.L)(
                      '\u0641\u0631\u0648\u0634 \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 \u0647\u0645\u200c\u0627\u0646\u062f\u0627\u0632\u0647\u0654 \u0647\u0641\u062a\u0647\u0654 \u0642\u0628\u0644 \u0628\u0648\u062f.',
                    )
                : s
                  ? (0, a.L)(
                      '\xab{name}\xbb \u067e\u0631\u0641\u0631\u0648\u0634\u200c\u062a\u0631\u06cc\u0646 \u06a9\u0627\u0644\u0627\u06cc \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 \u0627\u0633\u062a.',
                      { name: s },
                    )
                  : (0, a.L)(
                      '\u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 {n} \u062b\u0628\u062a \u062f\u0627\u0634\u062a\u06cc.',
                      { n: (0, o.formatGrouped)(t.movements7, 0) },
                    ),
        l = t.runout[0],
        m = l
          ? l.days <= 1
            ? (0, a.L)(
                '\xab{name}\xbb \u0628\u0627 \u0627\u06cc\u0646 \u0633\u0631\u0639\u062a \u062a\u0627 \u0641\u0631\u062f\u0627 \u062a\u0645\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0647\u0645\u06cc\u0646 \u0627\u0645\u0631\u0648\u0632 \u0633\u0641\u0627\u0631\u0634\u0634 \u0631\u0627 \u0628\u062f\u0647.',
                { name: y(l.name) },
              )
            : (0, a.L)(
                '\xab{name}\xbb \u0628\u0627 \u0627\u06cc\u0646 \u0633\u0631\u0639\u062a \u062d\u062f\u0648\u062f {days} \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631 \u062a\u0645\u0627\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0632\u0648\u062f\u062a\u0631 \u0633\u0641\u0627\u0631\u0634\u0634 \u0631\u0627 \u0628\u062f\u0647.',
                { name: y(l.name), days: (0, o.formatGrouped)(l.days, 0) },
              )
          : t.outOfStock > 0 && t.outName
            ? (0, a.L)(
                '\xab{name}\xbb \u062a\u0645\u0627\u0645 \u0634\u062f\u0647\u061b \u0645\u0648\u062c\u0648\u062f\u0634 \u06a9\u0646\u06cc\u060c \u0641\u0631\u0648\u0634\u0634 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u062f.',
                { name: y(t.outName) },
              )
            : null !== n && n <= -10 && s
              ? (0, a.L)(
                  '\xab{name}\xbb \u0631\u0627 \u062c\u0644\u0648\u06cc \u0686\u0634\u0645 \u0645\u0634\u062a\u0631\u06cc \u0628\u06af\u0630\u0627\u0631 \u062a\u0627 \u0641\u0631\u0648\u0634 \u0647\u0641\u062a\u0647 \u062c\u0628\u0631\u0627\u0646 \u0634\u0648\u062f.',
                  { name: s },
                )
              : t.profitKnown
                ? s
                  ? (0, a.L)(
                      '\xab{name}\xbb \u0631\u0627 \u0647\u0645\u06cc\u0634\u0647 \u0645\u0648\u062c\u0648\u062f \u0646\u06af\u0647 \u062f\u0627\u0631\u061b \u0628\u06cc\u0634\u062a\u0631\u06cc\u0646 \u0641\u0631\u0648\u0634 \u062a\u0648 \u0627\u0632 \u0622\u0646 \u0627\u0633\u062a.',
                      { name: s },
                    )
                  : ''
                : (0, a.L)(
                    '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f \u06a9\u0627\u0644\u0627\u0647\u0627 \u0631\u0627 \u0647\u0645 \u062b\u0628\u062a \u06a9\u0646\u06cc\u060c \u0633\u0648\u062f \u0648\u0627\u0642\u0639\u06cc \u0647\u0631 \u06a9\u0627\u0644\u0627 \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u06cc.',
                  ),
        d = m ? c + ' ' + m : c;
      return d.length <= h ? d : c.slice(0, h);
    }
    const M = 4;
    const w = (t) => Object.values(t || {}).some((t) => !!t);
    function D({
      summary: o,
      products: s,
      outOfStock: a,
      outName: u,
      runout: c = [],
      movements7: l,
      last: m,
      activeDays: d,
    }) {
      const p = o?.days || [],
        h = p[p.length - 2],
        f = o?.totals,
        y = m && 1 === m.daysAgo ? m : null,
        L = o?.top[0]?.name;
      return {
        unpricedSoldUnits: f?.unpricedSoldUnits || 0,
        uncostedSoldUnits: f?.uncostedSoldUnits || 0,
        unpricedReceivedUnits: f?.unpricedReceivedUnits || 0,
        sales7: v(f?.revenue),
        profit7: v(f?.profit),
        profitKnown: !!f && !(0, t.profitIncomplete)(f),
        salesPrev7: v(o?.previous.revenue),
        profitPrev7: v(o?.previous.profit),
        salesYesterday: v(h?.revenue),
        soldUnitsYesterday: v(h?.soldUnits),
        receivedUnitsYesterday: v(h?.receivedUnits),
        ...(w(h?.soldMeasured) || w(h?.receivedMeasured)
          ? { measuredYesterday: !0 }
          : {}),
        movementsYesterday: y ? y.received + y.sold + y.other : 0,
        ...(y && y.chequesIn + y.chequesOut > 0
          ? { chequesYesterday: y.chequesIn + y.chequesOut }
          : {}),
        movements7: Math.max(
          v(l),
          (0, n.anyUnits)(f, 'sold') || (0, n.anyUnits)(f, 'received') ? 1 : 0,
        ),
        products: v(s),
        outOfStock: v(a),
        ...(u ? { outName: u } : {}),
        ...(L ? { top: L } : {}),
        runout: c.slice(0, 2),
        last: m,
        salesKnown: !!o && !(0, t.revenueIncomplete)(f),
        ...(null != d && Number.isFinite(Number(d))
          ? { activeDays: Math.max(0, Math.min(S, Math.floor(Number(d)))) }
          : {}),
      };
    }
    const S = 7,
      N = new Map();
    function T(t, n) {
      try {
        let o = N.get(n);
        o ||
          ((o = new Intl.DateTimeFormat('en-CA', {
            timeZone: n,
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })),
          N.set(n, o));
        const s = Object.fromEntries(
          o.formatToParts(t).map((t) => [t.type, t.value]),
        );
        if (s.year && s.month && s.day) return `${s.year}-${s.month}-${s.day}`;
      } catch {}
      return t.toISOString().slice(0, 10);
    }
    function A(t, n = 'Asia/Tehran', o = new Date(), s = S) {
      const a = new Set(),
        u = o.getTime();
      for (const o of t) {
        if (
          !o.timestamp ||
          o.parentMovementId ||
          o.correctsMovementId ||
          'sample' === o.source
        )
          continue;
        const t = new Date(o.timestamp);
        if (
          !(Number.isNaN(t.getTime()) || t.getTime() > u) &&
          (a.add(T(t, n)), a.size >= s)
        )
          break;
      }
      return a.size;
    }
    function I({
      day: t,
      generatedAt: n,
      stats: o,
      thought: s,
      source: a = 'rules',
    }) {
      const u = (s || '').trim();
      return {
        day: t,
        generatedAt: n,
        stats: o,
        thought: u || b(o),
        history: L(o.last),
        source: u ? a : 'rules',
      };
    }
    function U(t, o = new Date()) {
      const s = (0, n.localDate)(o),
        a = (0, n.shiftDate)(s, -30),
        u = new Map();
      for (const o of t) {
        if (
          !o.timestamp ||
          o.parentMovementId ||
          o.correctsMovementId ||
          'sample' === o.source
        )
          continue;
        const t = new Date(o.timestamp);
        if (Number.isNaN(t.getTime())) continue;
        const c = (0, n.localDate)(t);
        if (c >= s || c < a) continue;
        const l = u.get(c) || {
          daysAgo: 0,
          received: 0,
          sold: 0,
          other: 0,
          chequesIn: 0,
          chequesOut: 0,
        };
        ('received' === o.kind
          ? l.received++
          : 'sold' === o.kind
            ? l.sold++
            : l.other++,
          u.set(c, l));
      }
      const c = [...u.keys()].sort().pop();
      if (!c) return null;
      const [l, m, d] = c.split('-').map(Number),
        [p, h, f] = s.split('-').map(Number);
      return {
        ...u.get(c),
        daysAgo: Math.round(
          (Date.UTC(p, h - 1, f) - Date.UTC(l, m - 1, d)) / 864e5,
        ),
      };
    }
    const k = (t) =>
      t
        .replace(/[\u06f0-\u06f9]/g, (t) => String(t.charCodeAt(0) - 1776))
        .replace(/[\u0660-\u0669]/g, (t) => String(t.charCodeAt(0) - 1632));
    function O(t) {
      const n = [
        7,
        t.movements7,
        t.products,
        t.outOfStock,
        t.movementsYesterday,
        t.soldUnitsYesterday,
        t.receivedUnitsYesterday,
        ...t.runout.map((t) => t.days),
      ];
      t.last &&
        n.push(t.last.daysAgo, t.last.received, t.last.sold, t.last.other);
      for (const s of [
        (0, o.percentChange)(t.sales7, t.salesPrev7),
        (0, o.percentChange)(t.profit7, t.profitPrev7),
      ])
        null !== s && n.push(Math.abs(s));
      return [...new Set(n.filter((t) => Number.isFinite(t) && t >= 0))];
    }
  },
  457,
  [456, 455, 434, 435, 311],
);
