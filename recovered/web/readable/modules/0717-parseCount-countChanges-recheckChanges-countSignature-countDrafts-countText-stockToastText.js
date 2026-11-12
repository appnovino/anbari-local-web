// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 717; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.parseCount = i),
      (e.countChanges = function (n, o, c = {}) {
        const u = [];
        for (const s of n) {
          const n = o[s.id]?.trim();
          if (!n) continue;
          const f = i(n),
            l = s.stock,
            m = (0, t.subQuantity)(f, l);
          m &&
            u.push({
              id: s.id,
              name: s.name,
              label: s.label,
              before: l,
              after: f,
              quantity: Math.abs(m),
              kind: m > 0 ? 'received' : c[s.id] ? 'waste' : 'sold',
            });
        }
        return u;
      }),
      (e.recheckChanges = function (n, o) {
        let i = !1;
        const c = [];
        for (const u of n) {
          const n = o[u.id];
          if (void 0 === n) {
            i = !0;
            continue;
          }
          if (n === u.before) {
            c.push(u);
            continue;
          }
          i = !0;
          const s = (0, t.subQuantity)(u.after, n);
          s &&
            c.push({
              ...u,
              before: n,
              quantity: Math.abs(s),
              kind: s > 0 ? 'received' : 'waste' === u.kind ? 'waste' : 'sold',
            });
        }
        return { changes: c, stale: i };
      }),
      (e.countSignature = function (t, n = (t) => t.stock) {
        return t
          .map(
            (t) =>
              t.id +
              ':' +
              n(t) +
              ':' +
              (t.kind || 'simple') +
              (t.archivedAt ? ':archived' : ''),
          )
          .join('|');
      }),
      (e.countDrafts = function (t, n = {}) {
        return t.map((t) =>
          'received' !== t.kind && (n[t.id] ?? 'waste' === t.kind)
            ? {
                name: t.name,
                productId: t.id,
                quantity: t.quantity,
                expectedStock: t.before,
                kind: 'waste',
              }
            : {
                name: t.name,
                productId: t.id,
                quantity: t.quantity,
                expectedStock: t.before,
                countedStock: t.after,
                kind: 'count',
              },
        );
      }),
      (e.countText = function (t) {
        if ('oversell' === t.source) return (0, o.oversellFillText)(t.quantity);
        const i = (t) =>
          t.toLocaleString((0, n.numberLocale)(), { maximumFractionDigits: 3 });
        return void 0 === t.stockBefore || void 0 === t.stockAfter
          ? (0, n.L)('\u0634\u0645\u0627\u0631\u0634: {sign}{n}', {
              sign: (t.stockEffect ?? 0) < 0 ? '\u2212' : '+',
              n: i(t.quantity),
            })
          : (0, n.L)(
              '\u0634\u0645\u0627\u0631\u0634: {before} \u2190 {after}',
              { before: i(t.stockBefore), after: i(t.stockAfter) },
            );
      }),
      (e.stockToastText = function (t, o, i, c, u) {
        if ('waste' !== t && void 0 !== u)
          return (0, n.L)(
            '\u0645\u0648\u062c\u0648\u062f\u06cc \xab{name}\xbb \u0628\u0627 \u0634\u0645\u0627\u0631\u0634 {n} {unit} \u0634\u062f',
            { n: u.toLocaleString((0, n.numberLocale)()), unit: i, name: c },
          );
        const s =
          'received' === t
            ? '{n} {unit} \xab{name}\xbb \u0628\u0647 \u0627\u0646\u0628\u0627\u0631 \u0627\u0636\u0627\u0641\u0647 \u0634\u062f'
            : 'waste' === t
              ? '{n} {unit} \xab{name}\xbb \u062f\u0648\u0631\u0631\u06cc\u0632 \u062b\u0628\u062a \u0634\u062f'
              : '{n} {unit} \xab{name}\xbb \u0641\u0631\u0648\u0634 \u062b\u0628\u062a \u0634\u062f';
        return (0, n.L)(s, {
          n: o.toLocaleString((0, n.numberLocale)()),
          unit: i,
          name: c,
        });
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]);
    function i(n) {
      const o = n.trim();
      return /^[0\u06f0\u0660]+(?:[.\u066b/][0\u06f0\u0660]*)?$/.test(o)
        ? 0
        : (0, t.parseQuantity)(o);
    }
  },
  717,
  [431, 311, 433],
);
