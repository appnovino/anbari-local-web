// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 987; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, _m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ExpiringList = function ({
        shop: e,
        state: o,
        days: f = 7,
        onClose: b,
      }) {
        const { colors: h } = (0, a.useTheme)(),
          [j, C] = (0, t.useState)(o.movements),
          [F, k] = (0, t.useState)('');
        (0, t.useEffect)(() => {
          if (!e) return;
          let t = !0;
          return (
            (async () => {
              let o = '?limit=200',
                n = [];
              for (let t = 0; t < 5; t++) {
                const t = await (0, c.listMovements)(e, o);
                if (((n = [...n, ...t.movements]), !t.next)) break;
                o = `?limit=200&before=${encodeURIComponent(t.next.before)}&beforeId=${encodeURIComponent(t.next.beforeId)}`;
              }
              t && C(n);
            })().catch(() => k(u.notebookW5Fa.networkRetry)),
            () => {
              t = !1;
            }
          );
        }, [e?.id]);
        const S = new Date();
        S.setHours(0, 0, 0, 0);
        const T = S.getTime() + 864e5 * f,
          _ = (0, x.expiryRows)(j, o.products)
            .map((e) => ({ ...e, due: y(e.expiresAt) }))
            .filter((e) => !e.due || e.due.getTime() <= T)
            .sort(
              (e, t) =>
                (e.due?.getTime() ?? Number.MAX_SAFE_INTEGER) -
                (t.due?.getTime() ?? Number.MAX_SAFE_INTEGER),
            );
        return (0, p.jsxs)(l.ScrollView, {
          contentContainerStyle: { gap: 12, paddingBottom: 20 },
          children: [
            (0, p.jsxs)(n.default, {
              style: s.common.between,
              children: [
                (0, p.jsxs)(n.default, {
                  children: [
                    (0, p.jsx)(s.Copy, {
                      style: s.common.title,
                      children: u.notebookW5Fa.expiring,
                    }),
                    (0, p.jsx)(s.Copy, {
                      style: { fontSize: 11, color: h.muted },
                      children: u.notebookW5Fa.expiryLimit(f),
                    }),
                  ],
                }),
                (0, p.jsx)(s.Button, {
                  secondary: !0,
                  onPress: b,
                  children: u.notebookW5Fa.close,
                }),
              ],
            }),
            !_.length &&
              !F &&
              (0, p.jsx)(s.Card, {
                children: (0, p.jsx)(s.Copy, {
                  children: u.notebookW5Fa.noExpiring,
                }),
              }),
            _.map((e) => {
              const t = e.due
                ? Math.ceil((e.due.getTime() - S.getTime()) / 864e5)
                : null;
              return (0, p.jsxs)(
                s.Card,
                {
                  style: s.common.between,
                  children: [
                    (0, p.jsxs)(n.default, {
                      style: { flex: 1 },
                      children: [
                        (0, p.jsx)(s.Copy, { children: e.name }),
                        (0, p.jsxs)(s.Copy, {
                          style: {
                            fontSize: 11,
                            color: e.due ? h.muted : h.danger,
                          },
                          children: [
                            e.quantity.toLocaleString((0, m.numberLocale)()),
                            '\u060c ',
                            e.due
                              ? new Intl.DateTimeFormat(
                                  (0, m.dateLocale)(),
                                ).format(e.due)
                              : u.notebookW5Fa.invalidDate,
                          ],
                        }),
                      ],
                    }),
                    (0, p.jsx)(s.Copy, {
                      style: { color: null === t || t < 0 ? h.danger : h.text },
                      children:
                        null === t
                          ? u.notebookW5Fa.invalidDate
                          : t < 0
                            ? u.notebookW5Fa.expired
                            : (0, m.L)(
                                '{n} \u0631\u0648\u0632 \u0645\u0627\u0646\u062f\u0647',
                                { n: t.toLocaleString((0, m.numberLocale)()) },
                              ),
                    }),
                  ],
                },
                e.id,
              );
            }),
            !!F &&
              (0, p.jsx)(s.Copy, { style: { color: h.danger }, children: F }),
          ],
        });
      }));
    var e,
      t = r(d[0]),
      o = r(d[1]),
      n = (e = o) && e.__esModule ? e : { default: e },
      l = r(d[2]),
      s = r(d[3]),
      a = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      m = r(d[7]),
      x = r(d[8]),
      p = r(d[9]);
    function y(e) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(e)) return null;
      const [t, o, n] = e.split('-').map(Number),
        l = new Date(t, o - 1, n);
      return l.getFullYear() === t &&
        l.getMonth() === o - 1 &&
        l.getDate() === n
        ? l
        : null;
    }
  },
  987,
  [2, 99, 380, 407, 382, 519, 580, 311, 705, 338],
);
