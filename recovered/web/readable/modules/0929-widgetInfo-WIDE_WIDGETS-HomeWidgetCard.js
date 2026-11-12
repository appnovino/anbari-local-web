// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 929; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'widgetInfo', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }),
      Object.defineProperty(_e, 'WIDE_WIDGETS', {
        enumerable: !0,
        get: function () {
          return C;
        },
      }),
      (_e.HomeWidgetCard = function (e) {
        switch (e.kind) {
          case 'w:expenses':
            return e.shop ? (0, z.jsx)(q, { ...e, shop: e.shop }) : null;
          case 'w:payments':
            return e.shop ? (0, z.jsx)(G, { ...e, shop: e.shop }) : null;
          case 'w:activity':
            return e.shop ? (0, z.jsx)(I, { ...e, shop: e.shop }) : null;
          case 'w:cheques':
            return e.shop ? (0, z.jsx)(T, { ...e, shop: e.shop }) : null;
          case 'w:reminders':
            return e.shop ? (0, z.jsx)(_, { ...e, shop: e.shop }) : null;
          case 'w:sales':
            return (0, z.jsx)(H, { ...e });
          case 'w:low':
            return (0, z.jsx)(R, { ...e });
        }
      }));
    var n = r(d[0]),
      t = e(r(d[1])),
      o = e(r(d[2])),
      s = e(r(d[3])),
      u = r(d[4]),
      l = r(d[5]),
      c = r(d[6]),
      p = r(d[7]),
      h = r(d[8]),
      y = r(d[9]),
      f = r(d[10]),
      w = r(d[11]),
      x = r(d[12]),
      L = r(d[13]),
      v = r(d[14]),
      j = r(d[15]),
      S = r(d[16]),
      k = r(d[17]),
      b = r(d[18]),
      O = r(d[19]),
      z = r(d[20]);
    const D = () => ({
        'w:expenses': {
          name: (0, y.L)('\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627'),
          icon: 'wallet',
        },
        'w:payments': {
          name: (0, y.L)(
            '\u067e\u0631\u062f\u0627\u062e\u062a\u200c\u0647\u0627',
          ),
          icon: 'refresh',
        },
        'w:activity': {
          name: (0, y.L)(
            '\u0641\u0639\u0627\u0644\u06cc\u062a\u200c\u0647\u0627',
          ),
          icon: 'clock',
        },
        'w:cheques': {
          name: (0, y.L)('\u0686\u06a9\u200c\u0647\u0627'),
          icon: 'cheque',
        },
        'w:reminders': {
          name: (0, y.L)(
            '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627',
          ),
          icon: 'bell',
        },
        'w:sales': {
          name: (0, y.L)(
            '\u0641\u0631\u0648\u0634 \u0627\u0645\u0631\u0648\u0632',
          ),
          icon: 'chart',
        },
        'w:low': {
          name: (0, y.L)(
            '\u06a9\u0645\u200c\u0645\u0648\u062c\u0648\u062f\u06cc',
          ),
          icon: 'cart',
        },
      }),
      C = ['w:activity'];
    function W({
      kind: e,
      period: n,
      value: p,
      lines: h,
      empty: f,
      loading: w,
      onOpen: x,
    }) {
      const { colors: L } = (0, c.useTheme)(),
        v = D()[e],
        j = e.slice(2);
      return (0, z.jsxs)(t.default, {
        testID: 'home-widget-' + j,
        accessibilityRole: x ? 'button' : 'summary',
        accessibilityLabel: [v.name, n, p].filter(Boolean).join('\u060c '),
        disabled: !x,
        onPress: x,
        style: ({ pressed: e }) => ({
          flexGrow: 1,
          minHeight: 132,
          padding: 12,
          gap: 6,
          borderRadius: 16,
          borderWidth: o.default.hairlineWidth,
          borderColor: L.line,
          backgroundColor: L.surface,
          opacity: e ? 0.8 : 1,
        }),
        children: [
          (0, z.jsxs)(s.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 8,
            },
            children: [
              (0, z.jsx)(s.default, {
                style: {
                  width: 28,
                  height: 28,
                  borderRadius: 9,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: L.accentSoft,
                },
                children: (0, z.jsx)(l.Icon, {
                  name: v.icon,
                  size: 15,
                  color: L.accent,
                }),
              }),
              (0, z.jsx)(u.Copy, {
                numberOfLines: 1,
                style: {
                  flex: 1,
                  minWidth: 0,
                  fontSize: 13,
                  lineHeight: 20,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: v.name,
              }),
              !!n &&
                (0, z.jsx)(u.Copy, {
                  numberOfLines: 1,
                  style: { fontSize: 11, lineHeight: 18, color: L.muted },
                  children: n,
                }),
            ],
          }),
          w
            ? (0, z.jsx)(u.Copy, {
                style: { fontSize: 12, lineHeight: 20, color: L.muted },
                children: (0, y.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                ),
              })
            : (0, z.jsxs)(z.Fragment, {
                children: [
                  !!p &&
                    (0, z.jsx)(u.Copy, {
                      testID: 'home-widget-' + j + '-value',
                      numberOfLines: 1,
                      style: {
                        fontSize: 19,
                        lineHeight: 30,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: p,
                    }),
                  h.map((e) =>
                    (0, z.jsx)(
                      u.Copy,
                      {
                        numberOfLines: 1,
                        style: {
                          fontSize: 12,
                          lineHeight: 19,
                          color:
                            'in' === e.tone
                              ? L.success
                              : 'out' === e.tone
                                ? L.danger
                                : L.muted,
                        },
                        children: e.text,
                      },
                      e.key,
                    ),
                  ),
                  !h.length &&
                    !p &&
                    (0, z.jsx)(u.Copy, {
                      style: { fontSize: 12, lineHeight: 19, color: L.muted },
                      children: f,
                    }),
                ],
              }),
        ],
      });
    }
    const M = (e, n) => {
      const t = Math.round((Date.parse(e) - Date.parse(n)) / 864e5);
      return t <= 0
        ? (0, y.L)('\u0627\u0645\u0631\u0648\u0632')
        : 1 === t
          ? (0, y.L)('\u0641\u0631\u062f\u0627')
          : (0, y.L)('{n} \u0631\u0648\u0632 \u062f\u06cc\u06af\u0631', {
              n: (0, y.localDigits)(t),
            });
    };
    function q({ shop: e, onOpen: t }) {
      const o = (0, h.useShopDay)(e.timezone),
        s = (0, L.monthOf)(o),
        u = (0, L.monthRange)(s.year, s.month),
        l = (0, p.useSwr)((0, p.scoped)(e.id, 'expenses:' + u.from), () =>
          r(d[22])(d[21], d.paths).then((n) => n.listExpenses(e, u.from, u.to)),
        ),
        c = (0, n.useMemo)(() => (0, v.expensesWidget)(l.data), [l.data]);
      return (0, z.jsx)(W, {
        kind: 'w:expenses',
        period: (0, y.L)('\u0627\u06cc\u0646 \u0645\u0627\u0647'),
        loading: !l.data && !l.error,
        value: c.count ? (0, f.moneyShort)(c.totalToman) : void 0,
        lines: c.last.map((e) => ({
          key: e.id,
          text: (0, y.L)('{label}: {amount}', {
            label: e.label,
            amount: (0, f.moneyShort)(e.amountToman),
          }),
        })),
        empty: l.error
          ? (0, y.L)('\u062f\u0631\u06cc\u0627\u0641\u062a \u0646\u0634\u062f')
          : (0, y.L)(
              '\u0627\u06cc\u0646 \u0645\u0627\u0647 \u0647\u0632\u06cc\u0646\u0647\u200c\u0627\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647',
            ),
        onOpen: t,
      });
    }
    function G({ shop: e, onOpen: t }) {
      const o = (0, h.useShopDay)(e.timezone),
        s = (0, p.useSwr)((0, p.scoped)(e.id, 'activity:money:40'), () =>
          (0, j.readActivity)(e, { limit: 40, group: 'money' }),
        ),
        u = (0, n.useMemo)(
          () => (0, v.paymentsWidget)(s.data?.items, o, e.timezone),
          [s.data, o, e.timezone],
        );
      return (0, z.jsx)(W, {
        kind: 'w:payments',
        period: (0, y.L)('\u0627\u0645\u0631\u0648\u0632'),
        loading: !s.data && !s.error,
        lines: u.count
          ? [
              {
                key: 'in',
                text: (0, y.L)(
                  '\u062f\u0631\u06cc\u0627\u0641\u062a\u06cc: {amount}',
                  { amount: (0, f.moneyShort)(u.inToman) },
                ),
                tone: 'in',
              },
              {
                key: 'out',
                text: (0, y.L)(
                  '\u067e\u0631\u062f\u0627\u062e\u062a\u06cc: {amount}',
                  { amount: (0, f.moneyShort)(u.outToman) },
                ),
                tone: 'out',
              },
              {
                key: 'n',
                text: (0, y.L)('{n} \u067e\u0631\u062f\u0627\u062e\u062a', {
                  n: (0, w.formatGrouped)(u.count),
                }),
              },
            ]
          : [],
        empty: s.error
          ? (0, y.L)('\u062f\u0631\u06cc\u0627\u0641\u062a \u0646\u0634\u062f')
          : (0, y.L)(
              '\u0627\u0645\u0631\u0648\u0632 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647',
            ),
        onOpen: t,
      });
    }
    function I({ shop: e, onOpen: t }) {
      const o = (0, p.useSwr)((0, p.scoped)(e.id, 'activity:6'), () =>
          (0, j.readActivity)(e, { limit: 6 }),
        ),
        s = (0, n.useMemo)(
          () => (0, v.activityWidget)(o.data?.items),
          [o.data],
        );
      return (0, z.jsx)(W, {
        kind: 'w:activity',
        loading: !o.data && !o.error,
        lines: s.map((e) => ({ key: e.id, text: (0, x.activityLine)(e) })),
        empty: o.error
          ? (0, y.L)('\u062f\u0631\u06cc\u0627\u0641\u062a \u0646\u0634\u062f')
          : (0, y.L)(
              '\u0647\u0646\u0648\u0632 \u0641\u0639\u0627\u0644\u06cc\u062a\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647.',
            ),
        onOpen: t,
      });
    }
    function T({ shop: e, onOpen: t }) {
      const o = (0, h.useShopDay)(e.timezone),
        s = (0, p.useSwr)((0, p.scoped)(e.id, 'cheques'), () =>
          (0, S.loadAllCheques)(e),
        ),
        u = (0, n.useMemo)(() => new Map(s.data?.people || []), [s.data]),
        l = (0, n.useMemo)(
          () => (0, v.chequesWidget)(s.data?.list, o, 7),
          [s.data, o],
        );
      return (0, z.jsx)(W, {
        kind: 'w:cheques',
        period: (0, y.L)(
          '\u06f7 \u0631\u0648\u0632 \u0622\u06cc\u0646\u062f\u0647',
        ),
        loading: !s.data && !s.error,
        value: l.count
          ? (0, y.L)('{n} \u0686\u06a9', { n: (0, w.formatGrouped)(l.count) })
          : void 0,
        lines: l.rows.map((e) => ({
          key: e.id,
          tone: 'receive' === e.direction ? 'in' : 'out',
          text: (0, y.L)('{who}{amount}\u060c {due}', {
            who: u.get(e.contactId) ? u.get(e.contactId) + ': ' : '',
            amount: (0, f.moneyShort)(e.amountToman ?? 0),
            due: M(e.dueDate, o),
          }),
        })),
        empty: s.error
          ? (0, y.L)('\u062f\u0631\u06cc\u0627\u0641\u062a \u0646\u0634\u062f')
          : (0, y.L)(
              '\u062a\u0627 \u06f7 \u0631\u0648\u0632 \u0622\u06cc\u0646\u062f\u0647 \u0686\u06a9\u06cc \u0633\u0631\u0631\u0633\u06cc\u062f \u0646\u0645\u06cc\u200c\u0634\u0648\u062f',
            ),
        onOpen: t,
      });
    }
    function _({ shop: e, chequesOn: t, onOpen: o }) {
      const s = (0, h.useShopDay)(e.timezone),
        u = e.timezone || 'Asia/Tehran',
        l = (0, p.useSwr)((0, p.scoped)(e.id, 'to-buy'), () =>
          (0, k.listToBuy)(e),
        ),
        c = (0, p.useSwr)((0, p.scoped)(e.id, 'to-buy-routines'), () =>
          (0, k.listRoutines)(e),
        ),
        f = (0, p.useSwr)(t ? (0, p.scoped)(e.id, 'cheques') : null, () =>
          (0, S.loadAllCheques)(e),
        ),
        x = (0, p.useSwr)(
          t ? (0, p.scoped)(e.id, 'expense-reminders') : null,
          () => (0, b.listExpenseReminders)(e),
        ),
        L = (0, n.useMemo)(
          () =>
            (0, v.remindersWidget)(
              (0, O.homeAlarms)(
                {
                  toBuy: l.data,
                  routines: c.data,
                  cheques: t ? f.data : null,
                  expenses: x.data,
                },
                u,
                Date.now(),
              ),
              s,
              u,
            ),
          [l.data, c.data, f.data, x.data, t, u, s],
        );
      return (0, z.jsx)(W, {
        kind: 'w:reminders',
        period: (0, y.L)('\u0627\u0645\u0631\u0648\u0632'),
        loading: !l.data && !l.error,
        value: L.count
          ? (0, y.L)('{n} \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc', {
              n: (0, w.formatGrouped)(L.count),
            })
          : void 0,
        lines: L.rows.map((e) => ({ key: e.key, text: e.title })),
        empty: (0, y.L)(
          '\u0627\u0645\u0631\u0648\u0632 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0646\u062f\u0627\u0631\u06cc',
        ),
        onOpen: o,
      });
    }
    function H({ shop: e, summary: t, revenueUnknown: o, onOpen: s }) {
      const u = (0, h.useShopDay)(e?.timezone),
        l = (0, p.useSwr)(
          e ? (0, p.scoped)(e.id, 'activity:sale:40') : null,
          () => (0, j.readActivity)(e, { limit: 40, group: 'sale' }),
        ),
        c = (0, n.useMemo)(
          () =>
            (0, v.salesWidget)(
              { revenue: t.revenue, sold: t.sold, incomplete: o },
              l.data?.items,
              u,
              e?.timezone,
            ),
          [t.revenue, t.sold, o, l.data, u, e?.timezone],
        ),
        x = e
          ? (0, y.L)(
              '{n} \u0641\u0631\u0648\u0634\u060c {u} \u0639\u062f\u062f',
              {
                n: (0, w.formatGrouped)(c.sales),
                u: (0, w.formatGrouped)(c.units),
              },
            )
          : (0, y.L)(
              '{u} \u0639\u062f\u062f \u0641\u0631\u0648\u062e\u062a\u0647 \u0634\u062f',
              { u: (0, w.formatGrouped)(c.units) },
            );
      return (0, z.jsx)(W, {
        kind: 'w:sales',
        value: null === c.revenue ? '\u2014' : (0, f.moneyShort)(c.revenue),
        lines: [{ key: 'n', text: x }],
        empty: '',
        onOpen: s,
      });
    }
    function R({ state: e, onOpen: t }) {
      const o = (0, n.useMemo)(
        () => (0, v.lowWidget)(e.products, e.alarmRules || []),
        [e.products, e.alarmRules],
      );
      return (0, z.jsx)(W, {
        kind: 'w:low',
        value: o.count
          ? (0, y.L)('{n} \u06a9\u0627\u0644\u0627', {
              n: (0, w.formatGrouped)(o.count),
            })
          : void 0,
        lines: o.rows.map((e) => ({
          key: e.id,
          tone: e.stock <= 0 ? 'out' : void 0,
          text:
            e.stock <= 0
              ? (0, y.L)(
                  '{name}: \u062a\u0645\u0627\u0645 \u0634\u062f\u0647',
                  { name: e.name },
                )
              : (0, y.L)('{name}: {n} \u0645\u0627\u0646\u062f\u0647', {
                  name: e.name,
                  n: (0, w.formatGrouped)(e.stock),
                }),
        })),
        empty: (0, y.L)(
          '\u0647\u0645\u0647\u0654 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0645\u0648\u062c\u0648\u062f\u06cc \u06a9\u0627\u0641\u06cc \u062f\u0627\u0631\u0646\u062f',
        ),
        onOpen: t,
      });
    }
  },
  929,
  {
    0: 2,
    1: 232,
    2: 17,
    3: 99,
    4: 407,
    5: 385,
    6: 382,
    7: 489,
    8: 611,
    9: 311,
    10: 435,
    11: 434,
    12: 458,
    13: 443,
    14: 930,
    15: 519,
    16: 626,
    17: 613,
    18: 522,
    19: 683,
    20: 338,
    21: 522,
    22: 336,
    paths: {},
  },
);
