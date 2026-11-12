// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 704; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.AttentionCard = function ({
        shop: e,
        state: z,
        chequesAllowed: k,
        onCheques: w,
        onExpiring: S,
        onLow: D,
      }) {
        const { colors: I } = (0, y.useTheme)(),
          v = (0, x.useShopDay)(e?.timezone),
          _ = (0, p.useSwr)(
            e && !0 === k ? (0, p.scoped)(e.id, 'cheques') : null,
            () => (0, j.loadAllCheques)(e),
          ),
          q = (0, t.useMemo)(() => new Map(_.data?.people || []), [_.data]),
          H = (0, t.useMemo)(
            () =>
              (0, L.attentionRows)({
                cheques: _.data?.list,
                today: v,
                expiring: (0, C.expiringProductIds)(z.movements, z.products, 7)
                  .size,
                low: (0, l.lowStockList)(z.products, z.alarmRules || [], 2),
              }),
            [_.data, v, z.movements, z.products, z.alarmRules],
          );
        return (0, b.jsxs)(h.Card, {
          testID: 'desk-attention',
          style: { gap: 0 },
          children: [
            (0, b.jsxs)(o.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingBottom: 10,
              },
              children: [
                (0, b.jsx)(h.Copy, {
                  style: {
                    fontSize: 16,
                    lineHeight: 24,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, u.L)(
                    '\u0646\u06cc\u0627\u0632 \u0628\u0647 \u062a\u0648\u062c\u0647',
                  ),
                }),
                H.length > 0 &&
                  (0, b.jsx)(o.default, {
                    style: {
                      paddingHorizontal: 9,
                      borderRadius: 10,
                      backgroundColor: I.danger + '1a',
                    },
                    children: (0, b.jsx)(h.Copy, {
                      style: {
                        fontSize: 11.5,
                        lineHeight: 20,
                        color: I.danger,
                      },
                      children: (0, u.L)('{n} \u0645\u0648\u0631\u062f', {
                        n: (0, u.localDigits)(H.length),
                      }),
                    }),
                  }),
              ],
            }),
            H.map((e) => {
              let t, l, y, p, x, j, C;
              if ('cheque' === e.kind) {
                const n = e.cheque,
                  o = q.get(n.contactId) || '';
                ((t = 'cheque'),
                  (l = I.danger),
                  (y = I.danger + '1f'),
                  (p =
                    ('receive' === n.direction
                      ? (0, u.L)(
                          '\u0686\u06a9 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc {amount}',
                          {
                            amount: (0, c.money)(n.amountToman ?? 0, {
                              hint: !1,
                            }),
                          },
                        )
                      : (0, u.L)(
                          '\u0686\u06a9 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc {amount}',
                          {
                            amount: (0, c.money)(n.amountToman ?? 0, {
                              hint: !1,
                            }),
                          },
                        )) + (o ? ' \xab' + o + '\xbb' : '')),
                  (x = (0, u.L)(
                    '\u0633\u0631\u0631\u0633\u06cc\u062f {n} \u0631\u0648\u0632 \u06af\u0630\u0634\u062a\u0647',
                    { n: (0, u.localDigits)(e.daysLate) },
                  )),
                  (j = (0, u.L)('\u067e\u0627\u0633 \u0634\u062f\u061f')),
                  (C = w));
              } else if ('expiry' === e.kind)
                ((t = 'clock'),
                  (l = I.warning),
                  (y = I.warningSoft),
                  (p = (0, u.L)(
                    '{n} \u06a9\u0627\u0644\u0627 \u062a\u0627 {d} \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631 \u0645\u0646\u0642\u0636\u06cc \u0645\u06cc\u200c\u0634\u0648\u0646\u062f',
                    {
                      n: (0, u.localDigits)(e.count),
                      d: (0, u.localDigits)(e.days),
                    },
                  )),
                  (x = (0, u.L)(
                    '\u0632\u0648\u062f\u062a\u0631 \u0628\u0641\u0631\u0648\u0634 \u06cc\u0627 \u062a\u062e\u0641\u06cc\u0641 \u0628\u0632\u0646',
                  )),
                  (j = (0, u.L)('\u062f\u06cc\u062f\u0646')),
                  (C = S));
              else {
                const n = e.item;
                ((t = 'cart'),
                  (l = I.accent),
                  (y = I.accentSoft),
                  (p =
                    n.stock <= 0
                      ? (0, u.L)(
                          '\xab{name}\xbb \u062a\u0645\u0627\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a',
                          { name: n.name },
                        )
                      : (0, u.L)(
                          '\xab{name}\xbb \u0631\u0648 \u0628\u0647 \u0627\u062a\u0645\u0627\u0645 \u0627\u0633\u062a',
                          { name: n.name },
                        )),
                  (x = (0, u.L)('\u0645\u0648\u062c\u0648\u062f\u06cc {n}', {
                    n: (0, s.formatGrouped)(n.stock),
                  })),
                  (j = (0, u.L)('\u0633\u0641\u0627\u0631\u0634')),
                  (C = () => D(n.id)));
              }
              return (0, b.jsxs)(
                o.default,
                {
                  testID: 'attention-' + e.key,
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 12,
                    paddingVertical: 12,
                    borderTopWidth: 1,
                    borderColor: I.line,
                  },
                  children: [
                    (0, b.jsx)(o.default, {
                      style: {
                        width: 36,
                        height: 36,
                        borderRadius: 18,
                        backgroundColor: y,
                        alignItems: 'center',
                        justifyContent: 'center',
                      },
                      children: (0, b.jsx)(f.Icon, {
                        name: t,
                        size: 18,
                        color: l,
                      }),
                    }),
                    (0, b.jsxs)(o.default, {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        (0, b.jsx)(h.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 14,
                            lineHeight: 22,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: p,
                        }),
                        (0, b.jsx)(h.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 12,
                            lineHeight: 18,
                            color: I.muted,
                          },
                          children: x,
                        }),
                      ],
                    }),
                    !!C &&
                      (0, b.jsx)(n.default, {
                        testID: 'attention-act-' + e.key,
                        accessibilityRole: 'button',
                        onPress: C,
                        style: ({ pressed: e, hovered: t }) => ({
                          height: 32,
                          paddingHorizontal: 12,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor: I.line,
                          justifyContent: 'center',
                          backgroundColor: e || t ? I.soft : I.surface,
                        }),
                        children: (0, b.jsx)(h.Copy, {
                          style: {
                            fontSize: 12.5,
                            lineHeight: 20,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: j,
                        }),
                      }),
                  ],
                },
                e.key,
              );
            }),
            !H.length &&
              (0, b.jsxs)(o.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 10,
                  paddingVertical: 14,
                  borderTopWidth: 1,
                  borderColor: I.line,
                },
                children: [
                  (0, b.jsx)(f.Icon, {
                    name: 'check',
                    size: 18,
                    color: I.accent,
                  }),
                  (0, b.jsx)(h.Copy, {
                    style: { fontSize: 13, lineHeight: 22, color: I.muted },
                    children: (0, u.L)(
                      '\u0647\u0645\u0647\u200c\u0686\u06cc\u0632 \u0645\u0631\u062a\u0628 \u0627\u0633\u062a\u061b \u0686\u06cc\u0632\u06cc \u0645\u0646\u062a\u0638\u0631 \u062a\u0648 \u0646\u06cc\u0633\u062a.',
                    ),
                  }),
                ],
              }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      o = e(r(d[2])),
      l = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      h = r(d[7]),
      f = r(d[8]),
      y = r(d[9]),
      p = r(d[10]),
      x = r(d[11]),
      j = r(d[12]),
      C = r(d[13]),
      L = r(d[14]),
      b = r(d[15]);
  },
  704,
  [2, 232, 99, 455, 434, 435, 311, 407, 385, 382, 489, 611, 626, 705, 686, 338],
);
