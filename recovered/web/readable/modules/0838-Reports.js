// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 838; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Reports = function ({
        shop: e,
        history: t = !1,
        mode: o = 'flow',
        state: s,
        onEditProduct: n,
        onSavePrice: l,
      }) {
        return t
          ? (0, u.jsx)(f, { shop: e })
          : (0, u.jsx)(r.SalesReport, {
              variant: 'income' === o ? 'income' : 'report',
              shop: e,
              state: s || p,
              onEditProduct: n,
              onSavePrice: l,
            });
      }));
    var e,
      t = _r(d[0]),
      o = _r(d[1]),
      s = (e = o) && e.__esModule ? e : { default: e },
      n = _r(d[2]),
      r = _r(d[3]),
      l = _r(d[4]),
      i = _r(d[5]),
      c = _r(d[6]),
      u = _r(d[7]);
    const p = { products: [], movements: [] };
    function f({ shop: e }) {
      const [o, r] = (0, t.useState)([]),
        [p, f] = (0, t.useState)(null),
        [h, x] = (0, t.useState)(''),
        [y, j] = (0, t.useState)(''),
        [v, S] = (0, t.useState)('all');
      async function b(t = !1) {
        try {
          const o =
              t && p
                ? '&before=' +
                  encodeURIComponent(p.before) +
                  '&beforeId=' +
                  p.beforeId
                : '',
            s = await (0, l.request)(
              (0, l.shopPath)(e, '/movements?limit=100' + o),
            );
          (r((e) => (t ? [...e, ...s.movements] : s.movements)),
            f(s.next),
            x(''));
        } catch (e) {
          x((0, l.message)(e));
        }
      }
      (0, t.useEffect)(() => {
        b();
      }, [e.id]);
      const C = (0, t.useMemo)(
          () =>
            o.filter(
              (e) =>
                ('all' === v || e.kind === v) &&
                (!y.trim() ||
                  String(e.name || '').includes(y.trim()) ||
                  String(e.actorName || '').includes(y.trim())),
            ),
          [o, y, v],
        ),
        F = (0, u.jsx)(n.IconKey, {
          size: 36,
          icon: 'refresh',
          accessibilityLabel: (0, c.L)(
            '\u062a\u0627\u0632\u0647\u200c\u0633\u0627\u0632\u06cc \u06af\u0632\u0627\u0631\u0634',
          ),
          onPress: () => b(),
        });
      return (0, u.jsxs)(s.default, {
        style: n.common.gap,
        children: [
          (0, u.jsx)(n.SectionTitle, {
            title: (0, c.L)(
              '\u062a\u0627\u0631\u06cc\u062e\u0686\u0647 \u062b\u0628\u062a\u200c\u0634\u062f\u0647 \u0634\u0631\u06a9\u062a',
            ),
          }),
          (0, u.jsx)(n.Input, {
            placeholder: i.platformFa.searchHistory,
            value: y,
            onChangeText: j,
          }),
          (0, u.jsxs)(s.default, {
            style: n.common.row,
            children: [
              (0, u.jsx)(n.Segmented, {
                style: n.common.flex,
                value: v,
                onChange: S,
                items: ['all', 'received', 'sold'].map((e) => ({
                  value: e,
                  label:
                    'all' === e
                      ? i.platformFa.allKinds
                      : 'received' === e
                        ? i.platformFa.received
                        : i.platformFa.sold,
                })),
              }),
              F,
            ],
          }),
          C.map((e, t) =>
            (0, u.jsxs)(
              n.Card,
              {
                children: [
                  (0, u.jsxs)(n.Copy, {
                    children: [
                      e.name,
                      '\u060c ',
                      'sold' === e.kind
                        ? i.platformFa.sold
                        : i.platformFa.received,
                      ' ',
                      (0, i.faNumber)(e.quantity),
                    ],
                  }),
                  (0, u.jsx)(n.Copy, {
                    children: new Date(e.timestamp).toLocaleString(
                      (0, c.dateLocale)(),
                    ),
                  }),
                  (0, u.jsxs)(n.Copy, {
                    children: [
                      i.platformFa.actor,
                      ': ',
                      e.actorName || '\u2014',
                    ],
                  }),
                  (0, u.jsx)(n.Copy, {
                    children: (0, c.L)(
                      '\u0645\u0648\u062c\u0648\u062f\u06cc \u067e\u0633 \u0627\u0632 \u062b\u0628\u062a: {n}',
                      { n: (0, i.faNumber)(e.stockAfter) },
                    ),
                  }),
                ],
              },
              e.id || t,
            ),
          ),
          !C.length && (0, u.jsx)(n.Copy, { children: i.platformFa.noData }),
          p &&
            (0, u.jsx)(n.Button, {
              onPress: () => b(!0),
              children: i.platformFa.loadOlder,
            }),
          !!h &&
            (0, u.jsx)(n.Copy, { accessibilityRole: 'alert', children: h }),
        ],
      });
    }
  },
  838,
  [2, 99, 407, 839, 415, 502, 311, 338],
);
