// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 904; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.StaffActivityCard = function ({ shop: e }) {
        const { colors: u } = (0, i.useTheme)(),
          [f, x] = (0, t.useState)(7),
          [S, j] = (0, t.useState)(null),
          [z, C] = (0, t.useState)(!1),
          [b, v] = (0, t.useState)(!1),
          [L, I] = (0, t.useState)(null),
          [D, _] = (0, t.useState)('');
        if (
          ((0, t.useEffect)(() => {
            let t = !0;
            return (
              _(''),
              (0, n.request)((0, n.shopPath)(e, '/staff/activity?days=' + f))
                .then((e) => {
                  t && j(e.people);
                })
                .catch((e) => {
                  if (!t) return;
                  const s = e instanceof Error ? e.message : '';
                  'feature_not_in_plan' === s || 'forbidden' === s
                    ? C(!0)
                    : _((0, n.message)(e));
                }),
              () => {
                t = !1;
              }
            );
          }, [e.id, f]),
          z || 'owner' !== e.role)
        )
          return null;
        if (!S && !D) return null;
        const T = (S || []).filter((e) => !e.owner),
          w = T.reduce((e, t) => e + t.salesTotal, 0);
        return (0, p.jsxs)(o.Card, {
          testID: 'staff-activity',
          style: { gap: 10 },
          children: [
            (0, p.jsxs)(s.default, {
              testID: 'staff-activity-open',
              accessibilityRole: 'button',
              accessibilityState: { expanded: b },
              onPress: () => v(!b),
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
              },
              children: [
                (0, p.jsxs)(l.default, {
                  style: { flex: 1, gap: 2 },
                  children: [
                    (0, p.jsxs)(l.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 8,
                      },
                      children: [
                        (0, p.jsx)(o.Copy, {
                          style: {
                            fontSize: 15,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: (0, r.L)(
                            '\u06a9\u0627\u0631\u06a9\u0631\u062f \u0647\u0645\u06a9\u0627\u0631\u0627\u0646',
                          ),
                        }),
                        (0, p.jsx)(l.default, {
                          style: {
                            paddingHorizontal: 8,
                            paddingVertical: 2,
                            borderRadius: 999,
                            backgroundColor: u.accentSoft,
                          },
                          children: (0, p.jsx)(o.Copy, {
                            style: {
                              fontSize: 11,
                              lineHeight: 18,
                              fontFamily: 'Vazirmatn_600SemiBold',
                              color: u.accent,
                            },
                            children: (0, r.L)(
                              '\u0627\u0648\u0644\u062a\u0631\u0627',
                            ),
                          }),
                        }),
                      ],
                    }),
                    (0, p.jsx)(o.Copy, {
                      style: { fontSize: 12, color: u.muted },
                      children:
                        (0, y.daysLabel)(f) +
                        ' \xb7 ' +
                        (0, r.L)(
                          '\u0641\u0631\u0648\u0634 \u0647\u0645\u06a9\u0627\u0631\u0627\u0646 {amount}',
                          { amount: (0, c.money)(w) },
                        ),
                    }),
                  ],
                }),
                (0, p.jsx)(o.Copy, {
                  style: { fontSize: 14, color: u.muted },
                  children: b ? '\u25b4' : '\u25be',
                }),
              ],
            }),
            b &&
              (0, p.jsxs)(l.default, {
                style: { gap: 10 },
                children: [
                  (0, p.jsx)(o.Segmented, {
                    compact: !0,
                    height: 34,
                    value: f,
                    onChange: (e) => {
                      (I(null), x(e));
                    },
                    items: y.ACTIVITY_DAYS.map((e) => ({
                      value: e,
                      label:
                        1 === e
                          ? (0, r.L)('\u0627\u0645\u0631\u0648\u0632')
                          : (0, r.L)('{n} \u0631\u0648\u0632', {
                              n: (0, r.localDigits)(e),
                            }),
                      testID: 'staff-activity-days-' + e,
                    })),
                  }),
                  !!D &&
                    (0, p.jsx)(o.Copy, {
                      style: { fontSize: 12, color: u.danger },
                      children: D,
                    }),
                  S &&
                    !T.length &&
                    (0, p.jsx)(o.Copy, {
                      style: { fontSize: 12, color: u.muted },
                      children: (0, r.L)(
                        '\u0647\u0646\u0648\u0632 \u0647\u0645\u06a9\u0627\u0631\u06cc \u0646\u062f\u0627\u0631\u06cc\u061b \u0648\u0642\u062a\u06cc \u0647\u0645\u06a9\u0627\u0631 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u06cc\u060c \u06a9\u0627\u0631\u06a9\u0631\u062f\u0634 \u0627\u06cc\u0646\u062c\u0627 \u0645\u06cc\u200c\u0622\u06cc\u062f.',
                      ),
                    }),
                  S &&
                    !!T.length &&
                    (0, y.quietPeriod)(T) &&
                    (0, p.jsx)(o.Copy, {
                      style: { fontSize: 12, color: u.muted },
                      children: (0, r.L)(
                        '\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062f\u062a \u0647\u0645\u06a9\u0627\u0631\u0627\u0646 \u06a9\u0627\u0631\u06cc \u062b\u0628\u062a \u0646\u06a9\u0631\u062f\u0647\u200c\u0627\u0646\u062f.',
                      ),
                    }),
                  (S || []).map((t) =>
                    (0, p.jsx)(
                      h,
                      {
                        shop: e,
                        days: f,
                        person: t,
                        open: L === t.userId,
                        onPress: () => I(L === t.userId ? null : t.userId),
                      },
                      t.userId,
                    ),
                  ),
                ],
              }),
          ],
        });
      }));
    var t = _r(d[0]),
      s = e(_r(d[1])),
      l = e(_r(d[2])),
      n = _r(d[3]),
      o = _r(d[4]),
      i = _r(d[5]),
      r = _r(d[6]),
      c = _r(d[7]),
      u = _r(d[8]),
      f = _r(d[9]),
      y = _r(d[10]),
      p = _r(d[11]);
    function h({ shop: e, days: h, person: x, open: S, onPress: j }) {
      const { colors: z } = (0, i.useTheme)(),
        [C, b] = (0, t.useState)(null),
        [v, L] = (0, t.useState)('');
      (0, t.useEffect)(() => {
        if (!S) return;
        let t = !0;
        return (
          b(null),
          L(''),
          (0, n.request)(
            (0, n.shopPath)(e, '/staff/' + x.userId + '/activity?days=' + h),
          )
            .then((e) => {
              t && b(e.recent);
            })
            .catch((e) => {
              t && L((0, n.message)(e));
            }),
          () => {
            t = !1;
          }
        );
      }, [S, h, x.userId]);
      const I = (e, t) =>
        (0, p.jsxs)(l.default, {
          style: { flex: 1, minWidth: 70, gap: 0 },
          children: [
            (0, p.jsx)(o.Copy, {
              style: { fontSize: 14, fontFamily: 'Vazirmatn_700Bold' },
              children: e,
            }),
            (0, p.jsx)(o.Copy, {
              style: { fontSize: 11, color: z.muted },
              children: t,
            }),
          ],
        });
      return (0, p.jsxs)(l.default, {
        style: {
          borderTopWidth: 1,
          borderColor: z.line,
          paddingTop: 10,
          gap: 8,
        },
        children: [
          (0, p.jsxs)(s.default, {
            testID: 'staff-activity-person-' + x.userId,
            accessibilityRole: 'button',
            accessibilityState: { expanded: S },
            onPress: j,
            style: { gap: 6 },
            children: [
              (0, p.jsxs)(l.default, {
                style: [o.common.between, { gap: 8 }],
                children: [
                  (0, p.jsx)(o.Copy, {
                    style: {
                      fontSize: 14,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: x.owner
                      ? (0, r.L)('{name} (\u062e\u0648\u062f\u062a)', {
                          name: x.name,
                        })
                      : x.name,
                  }),
                  (0, p.jsx)(o.Copy, {
                    style: { fontSize: 11, color: z.muted },
                    children: (0, f.lastSeenText)(x.lastSeenAt),
                  }),
                ],
              }),
              (0, p.jsxs)(l.default, {
                style: {
                  flexDirection: 'row-reverse',
                  flexWrap: 'wrap',
                  gap: 8,
                },
                children: [
                  I(
                    (0, r.localDigits)(x.sales),
                    (0, r.L)('\u0641\u0631\u0648\u0634 \xb7 {amount}', {
                      amount: (0, c.money)(x.salesTotal),
                    }),
                  ),
                  I(
                    (0, y.usageText)(x.minutes),
                    (0, r.L)('\u062f\u0631 \u0627\u067e'),
                  ),
                  I(
                    (0, r.localDigits)(x.lookups),
                    (0, r.L)(
                      '\u06a9\u0627\u0644\u0627 \u062f\u06cc\u062f\u0647',
                    ),
                  ),
                  I(
                    (0, r.localDigits)(x.received + x.changes),
                    (0, r.L)(
                      '\u0648\u0631\u0648\u062f \u0648 \u062a\u063a\u06cc\u06cc\u0631',
                    ),
                  ),
                ],
              }),
            ],
          }),
          S &&
            (0, p.jsxs)(l.default, {
              testID: 'staff-activity-recent',
              style: { gap: 4, paddingHorizontal: 4 },
              children: [
                !!v &&
                  (0, p.jsx)(o.Copy, {
                    style: { fontSize: 12, color: z.danger },
                    children: v,
                  }),
                !C &&
                  !v &&
                  (0, p.jsx)(o.Copy, {
                    style: { fontSize: 12, color: z.muted },
                    children: (0, r.L)(
                      '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc\u2026',
                    ),
                  }),
                C &&
                  !C.length &&
                  (0, p.jsx)(o.Copy, {
                    style: { fontSize: 12, color: z.muted },
                    children: (0, r.L)(
                      '\u062f\u0631 \u0627\u06cc\u0646 \u0645\u062f\u062a \u0686\u06cc\u0632\u06cc \u062b\u0628\u062a \u0646\u06a9\u0631\u062f\u0647.',
                    ),
                  }),
                C?.map((e, t) =>
                  (0, p.jsxs)(
                    l.default,
                    {
                      style: [o.common.between, { gap: 8, paddingVertical: 4 }],
                      children: [
                        (0, p.jsx)(o.Copy, {
                          numberOfLines: 1,
                          style: { flex: 1, fontSize: 12 },
                          children:
                            (0, y.entryLabel)(e.kind) +
                            (e.name ? ' \xb7 ' + e.name : '') +
                            (null != e.quantity && 'product' !== e.kind
                              ? ' \xb7 ' + (0, r.localDigits)(e.quantity)
                              : ''),
                        }),
                        (0, p.jsx)(o.Copy, {
                          style: { fontSize: 11, color: z.muted },
                          children:
                            (null != e.amount
                              ? (0, c.money)(e.amount) + ' \xb7 '
                              : '') + (0, u.relativeTimeFa)(e.at),
                        }),
                      ],
                    },
                    e.at + t,
                  ),
                ),
              ],
            }),
        ],
      });
    }
  },
  904,
  [2, 232, 99, 415, 407, 382, 311, 435, 434, 473, 905, 338],
);
