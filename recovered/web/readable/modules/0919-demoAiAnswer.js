// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 919; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.demoAiAnswer = function (t, s) {
        const p = new Set();
        if ('image' === t && a.AI_PHOTOS) {
          const t = c(
              s,
              [
                (0, n.L)('\u062c\u0648\u0631\u0627\u0628'),
                (0, n.L)('\u0634\u0627\u0644'),
              ],
              0,
              p,
            ),
            a = c(
              s,
              [
                (0, n.L)('\u0634\u0627\u0644'),
                (0, n.L)('\u06a9\u0645\u0631\u0628\u0646\u062f'),
              ],
              0,
              p,
            ),
            u = [t && { p: t, n: 12 }, a && { p: a, n: 5 }].filter(Boolean);
          return {
            said: (0, n.L)(
              '\u0639\u06a9\u0633 \u0646\u0645\u0648\u0646\u0647\u0654 \u0641\u0627\u06a9\u062a\u0648\u0631 \u062e\u0631\u06cc\u062f \u0627\u0632 \u067e\u062e\u0634 \u067e\u0648\u0634\u0627\u06a9',
            ),
            drafts: u.map(({ p: n, n: t }) => ({
              name: n.name,
              productId: n.id,
              kind: 'received',
              quantity: t,
              ...(void 0 !== n.costPrice ? { unitCost: n.costPrice } : {}),
            })),
            lines: u.map(({ p: t, n: a }) =>
              (0, n.L)(
                '{n} \u0639\u062f\u062f \xab{name}\xbb\u060c \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
                { n: o(a), name: t.name },
              ),
            ),
          };
        }
        const u = c(
            s,
            [
              (0, n.L)(
                '\u062a\u06cc\u200c\u0634\u0631\u062a \u0646\u062e\u06cc L',
              ),
              (0, n.L)('\u062a\u06cc\u200c\u0634\u0631\u062a'),
            ],
            2,
            p,
          ),
          L = c(
            s,
            [
              (0, n.L)('\u062c\u0648\u0631\u0627\u0628'),
              (0, n.L)('\u0634\u0627\u0644'),
            ],
            'batch' === t ? 3 : 1,
            p,
          ),
          f =
            'batch' === t
              ? c(
                  s,
                  [
                    (0, n.L)('\u06a9\u0645\u0631\u0628\u0646\u062f'),
                    (0, n.L)('\u06a9\u0648\u0644\u0647'),
                  ],
                  1,
                  p,
                )
              : void 0,
          l = [
            u && { p: u, n: 2 },
            L && { p: L, n: 'batch' === t ? 3 : 1 },
            f && { p: f, n: 1 },
          ].filter(Boolean),
          v =
            l
              .map(({ p: t, n: a }) =>
                (0, n.L)('{n} \u062a\u0627 {name}', { n: o(a), name: t.name }),
              )
              .join((0, n.L)('\u060c ')) +
            (0, n.L)(' \u0641\u0631\u0648\u062e\u062a\u0645');
        return {
          said: 'voice' === t ? (0, n.L)('\xab{text}\xbb', { text: v }) : v,
          drafts: l.map(({ p: n, n: t }) => ({
            name: n.name,
            productId: n.id,
            kind: 'sold',
            quantity: t,
            ...(void 0 !== n.price ? { unitPrice: n.price } : {}),
          })),
          lines: l.map(({ p: t, n: a }) =>
            (0, n.L)(
              '{n} \u0639\u062f\u062f \xab{name}\xbb\u060c \u0641\u0631\u0648\u0634',
              { n: o(a), name: t.name },
            ),
          ),
        };
      }));
    var n = r(d[0]),
      t = r(d[1]),
      a = r(d[2]);
    const o = (n) => (0, t.formatGrouped)(n);
    function c(n, t, a, o) {
      const c = n.filter(
        (n) => !n.archivedAt && 'made' !== n.kind && !o.has(n.id),
      );
      for (const n of t) {
        const t = c.find(
          (t) => t.name.includes(n) && t.stock >= a && void 0 !== t.price,
        );
        if (t) return (o.add(t.id), t);
      }
      const s = c.find((n) => n.stock >= a && void 0 !== n.price);
      return (s && o.add(s.id), s);
    }
  },
  919,
  [311, 434, 494],
);
