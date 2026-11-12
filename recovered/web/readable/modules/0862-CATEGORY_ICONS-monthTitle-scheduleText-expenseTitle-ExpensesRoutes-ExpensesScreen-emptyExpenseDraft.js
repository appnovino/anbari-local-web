// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 862; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'CATEGORY_ICONS', {
        enumerable: !0,
        get: function () {
          return V;
        },
      }),
      Object.defineProperty(_e, 'monthTitle', {
        enumerable: !0,
        get: function () {
          return A;
        },
      }),
      (_e.scheduleText = K),
      Object.defineProperty(_e, 'expenseTitle', {
        enumerable: !0,
        get: function () {
          return q;
        },
      }),
      (_e.ExpensesRoutes = function ({ shop: e }) {
        const { colors: o } = (0, E.useTheme)(),
          s = (0, u.useSafeInsets)(),
          i = (0, m.useDesktop)(),
          [f, b] = (0, t.useState)(null),
          [L, C] = (0, t.useState)(!1);
        if (
          ((0, t.useEffect)(() => F.expensesEntries.subscribe(b), []),
          (0, t.useEffect)(() => {
            e || F.expensesEntries.close();
          }, [e?.id]),
          (0, t.useEffect)(() => {
            if ('undefined' == typeof window || !(0, p.localHost)()) return;
            const e = window;
            return (
              (e.__expensesPreview = (e) => {
                'voice' === e &&
                  (window.history.replaceState(
                    window.history.state,
                    '',
                    '#voice-demo',
                  ),
                  C(!0));
              }),
              () => {
                delete e.__expensesPreview;
              }
            );
          }, []),
          L)
        )
          return (0, M.jsx)(d.PageModal, {
            visible: !0,
            animationType: 'fade',
            onRequestClose: () => C(!1),
            children: (0, M.jsx)(r.ScrollView, {
              style: { flex: 1, backgroundColor: o.bg },
              contentContainerStyle: {
                width: '100%',
                maxWidth: 720,
                alignSelf: 'center',
                padding: 14,
                paddingTop: s.top + 14,
              },
              children: (0, M.jsx)(y.VoicePanel, {
                products: [],
                draftKey: 'expenses-preview',
                onClose: () => C(!1),
                onConfirm: () => {},
              }),
            }),
          });
        if (!f || !e) return null;
        const w = i ? 28 : 14;
        return (0, M.jsx)(d.PageModal, {
          visible: !0,
          animationType: 'slide',
          onRequestClose: () => F.expensesEntries.close(),
          desk: {
            id: 'expenses',
            title: (0, R.L)('\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627'),
          },
          children: (0, M.jsxs)(n.default, {
            behavior: x.keyboardBehavior,
            style: { flex: 1, backgroundColor: o.bg },
            children: [
              (0, z.demoActive)() &&
                (0, M.jsx)(l.default, {
                  style: { paddingHorizontal: w, paddingTop: s.top + 10 },
                  children: (0, M.jsx)(v.DemoBanner, {}),
                }),
              (0, M.jsxs)(l.default, {
                style: [
                  j.common.between,
                  {
                    paddingHorizontal: w,
                    paddingTop: (0, z.demoActive)()
                      ? 10
                      : s.top + (i ? 24 : 14),
                  },
                  i && {
                    width: '100%',
                    maxWidth: (0, c.pageColumnWidth)(!0),
                    alignSelf: 'center',
                  },
                ],
                children: [
                  (0, M.jsx)(j.Copy, {
                    accessibilityRole: 'header',
                    style: {
                      fontSize: 20,
                      lineHeight: 30,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: (0, R.L)(
                      '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627',
                    ),
                  }),
                  (0, M.jsx)(h.PageClose, {
                    testID: 'expenses-close',
                    title: (0, R.L)(
                      '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627',
                    ),
                    onPress: () => F.expensesEntries.close(),
                  }),
                ],
              }),
              (0, M.jsx)(x.KeyboardScrollView, {
                contentContainerStyle: {
                  width: '100%',
                  maxWidth: (0, c.pageColumnWidth)(i),
                  alignSelf: 'center',
                  padding: w,
                  paddingBottom: s.bottom + 40,
                },
                children: (0, M.jsx)(Z, { shop: e, route: f }),
              }),
              (0, M.jsx)(S.ToastHost, {}),
            ],
          }),
        });
      }),
      (_e.ExpensesScreen = Z),
      Object.defineProperty(_e, 'emptyExpenseDraft', {
        enumerable: !0,
        get: function () {
          return J;
        },
      }));
    var t = _r(_d[0]),
      n = e(_r(_d[1]));
    _r(_d[2]);
    var o = e(_r(_d[3])),
      s = e(_r(_d[4])),
      i = e(_r(_d[5])),
      l = e(_r(_d[6])),
      r = _r(_d[7]),
      d = _r(_d[8]),
      c = _r(_d[9]),
      m = _r(_d[10]),
      h = _r(_d[11]),
      y = _r(_d[12]),
      p = _r(_d[13]),
      u = _r(_d[14]),
      x = _r(_d[15]),
      f = _r(_d[16]),
      j = _r(_d[17]),
      b = _r(_d[18]),
      L = _r(_d[19]),
      C = _r(_d[20]),
      S = _r(_d[21]),
      w = _r(_d[22]),
      I = _r(_d[23]),
      D = _r(_d[24]),
      T = _r(_d[25]),
      v = _r(_d[26]),
      z = _r(_d[27]),
      E = _r(_d[28]),
      O = _r(_d[29]),
      R = _r(_d[30]),
      _ = _r(_d[31]),
      k = _r(_d[32]),
      H = _r(_d[33]),
      P = _r(_d[34]),
      F = _r(_d[35]),
      M = _r(_d[36]);
    const V = {
        rent: 'store',
        loan: 'wallet',
        bill: 'bolt',
        tax: 'receipt',
        wages: 'user',
        delivery: 'send',
        repair: 'tool',
        supplies: 'cart',
        other: 'more',
      },
      B = (e) => (0, R.localDigits)(String(e)),
      W = () => [
        (0, R.L)('\u06cc\u06a9\u0634\u0646\u0628\u0647'),
        (0, R.L)('\u062f\u0648\u0634\u0646\u0628\u0647'),
        (0, R.L)('\u0633\u0647\u200c\u0634\u0646\u0628\u0647'),
        (0, R.L)('\u0686\u0647\u0627\u0631\u0634\u0646\u0628\u0647'),
        (0, R.L)('\u067e\u0646\u062c\u200c\u0634\u0646\u0628\u0647'),
        (0, R.L)('\u062c\u0645\u0639\u0647'),
        (0, R.L)('\u0634\u0646\u0628\u0647'),
      ],
      A = (e) =>
        (0, _.calMonthNames)()[e.month - 1] +
        ' ' +
        (0, R.localDigits)(String(e.year)),
      N = (e) =>
        new Date(e + 'T12:00:00').toLocaleDateString((0, R.dateLocale)(), {
          day: 'numeric',
          month: 'long',
        }),
      U = (e) =>
        (0, R.localDigits)(
          String(Math.floor(e / 60)).padStart(2, '0') +
            ':' +
            String(e % 60).padStart(2, '0'),
        );
    function K(e) {
      const t = (0, R.L)('\u0633\u0627\u0639\u062a {time}', {
        time: U(e.minute),
      });
      return 'monthly' === e.repeat
        ? (0, R.L)(
            '\u0647\u0631 \u0645\u0627\u0647 \u0631\u0648\u0632 {day}\u060c {at}',
            { day: B(e.monthDay || 1), at: t },
          )
        : 'weekly' === e.repeat
          ? (0, R.L)('\u0647\u0631 {day}\u060c {at}', {
              day: W()[e.weekday || 0],
              at: t,
            })
          : (0, R.L)(
              '\u06cc\u06a9 \u0628\u0627\u0631\u060c {date}\u060c {at}',
              { date: e.onceOn ? N(e.onceOn) : '\u2014', at: t },
            );
    }
    const q = (e) => e.label.trim() || H.expenseCategoryFa[e.category];
    const G = (e) => (e ? e.toLocaleString('en-US') : '');
    function J(e) {
      const t = (0, T.isoToParts)(e);
      return {
        category: null,
        label: '',
        amount: '',
        date: t,
        method: 'cash',
        note: '',
        remind: !1,
        repeat: 'monthly',
        monthDay: String(t.day),
        weekday: new Date(e + 'T12:00:00').getDay(),
        onceOn: t,
      };
    }
    function X(e, t) {
      return {
        ...J(e),
        category: t.category,
        label: t.label,
        amount: G(t.amountToman),
        method: t.method || 'cash',
        reminderId: t.id,
      };
    }
    function Y(e, t, n) {
      const o = J(n);
      return {
        ...o,
        id: e.id,
        version: e.version,
        category: e.category,
        label: e.label,
        amount: G(e.amountToman),
        date: (0, T.isoToParts)(e.spentOn),
        method: e.method,
        note: e.note,
        reminderId: e.reminderId,
        hadReminder: !!t,
        remind: !!t,
        ...(t
          ? {
              repeat: t.repeat,
              monthDay: String(t.monthDay || o.date.day),
              weekday: t.weekday ?? o.weekday,
              onceOn: t.onceOn ? (0, T.isoToParts)(t.onceOn) : o.onceOn,
            }
          : {}),
      };
    }
    function Z({ shop: e, route: n = {}, preview: i }) {
      const { colors: r } = (0, E.useTheme)(),
        d = i?.today || (0, H.todayIn)(e.timezone || 'Asia/Tehran'),
        [c, m] = (0, t.useState)(() => (0, H.monthOf)(d)),
        h = (0, H.monthRange)(c.year, c.month),
        y = (0, H.monthOf)(d),
        p = c.year === y.year && c.month === y.month,
        u = (0, O.useSwr)(
          i ? null : (0, O.scoped)(e.id, 'expenses:' + h.from),
          () => (0, P.listExpenses)(e, h.from, h.to),
        ),
        x = (0, O.useSwr)(
          i ? null : (0, O.scoped)(e.id, 'expense-reminders'),
          () => (0, P.listExpenseReminders)(e),
        ),
        L = i?.month || u.data,
        w = i?.reminders || x.data || [],
        [I, T] = (0, t.useState)(i?.sheet || null),
        [v, z] = (0, C.useConfirm)();
      (0, t.useEffect)(() => {
        if (!i)
          if (n.fresh) T(J(d));
          else if (n.newFrom) {
            const e = w.find((e) => e.id === n.newFrom);
            e ? T(X(d, e)) : x.data && T(J(d));
          }
      }, [n.newFrom, n.fresh, x.data]);
      const _ = () => {
          i || (u.reload(), x.reload());
        },
        F = { fontSize: 12, lineHeight: 18, color: r.muted },
        B = (0, t.useMemo)(() => new Map(w.map((e) => [e.id, e])), [w]);
      function W(t) {
        v({
          title: (0, R.L)(
            '\u062d\u0630\u0641 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
          ),
          text: (0, R.L)(
            '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \xab{name}\xbb \u062d\u0630\u0641 \u0634\u0648\u062f\u061f \u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u062b\u0628\u062a\u200c\u0634\u062f\u0647 \u0645\u06cc\u200c\u0645\u0627\u0646\u0646\u062f.',
            { name: q(t) },
          ),
          ok: (0, R.L)(
            '\u062d\u0630\u0641 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc',
          ),
          run: async () => {
            try {
              (await (0, P.deleteExpenseReminder)(e, t.id),
                (0, S.showToast)(
                  (0, R.L)(
                    '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062d\u0630\u0641 \u0634\u062f',
                  ),
                ),
                _());
            } catch (e) {
              (0, S.showToast)(
                (0, R.L)(
                  '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062d\u0630\u0641 \u0646\u0634\u062f: {reason}',
                  { reason: (0, f.message)(e) },
                ),
              );
            }
          },
        });
      }
      return (0, M.jsxs)(l.default, {
        style: { gap: 14 },
        testID: 'expenses-screen',
        children: [
          (0, M.jsxs)(l.default, {
            testID: 'expenses-months',
            style: {
              flexDirection: 'row',
              direction: 'ltr',
              gap: 10,
              alignItems: 'center',
            },
            children: [
              (0, M.jsx)(D.SmallKey, {
                testID: 'expenses-prev',
                label: (0, R.L)('\u0645\u0627\u0647 \u0642\u0628\u0644'),
                onPress: () => m((e) => (0, H.shiftMonth)(e, -1)),
              }),
              (0, M.jsx)(j.Copy, {
                testID: 'expenses-month',
                style: {
                  flex: 1,
                  textAlign: 'center',
                  fontSize: 16,
                  lineHeight: 26,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: A(c),
              }),
              (0, M.jsx)(D.SmallKey, {
                testID: 'expenses-next',
                label: (0, R.L)('\u0645\u0627\u0647 \u0628\u0639\u062f'),
                disabled: p,
                onPress: () => m((e) => (0, H.shiftMonth)(e, 1)),
              }),
            ],
          }),
          (0, M.jsxs)(j.Card, {
            testID: 'expenses-total',
            style: { gap: 4, padding: 16 },
            children: [
              (0, M.jsx)(j.Copy, {
                style: F,
                children: (0, R.L)(
                  '\u062c\u0645\u0639 \u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc {month}',
                  { month: A(c) },
                ),
              }),
              (0, M.jsx)(j.Copy, {
                testID: 'expenses-total-amount',
                style: {
                  fontSize: 28,
                  lineHeight: 42,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: L
                  ? (0, k.money)(L.totals.totalToman, { full: !0, hint: !1 })
                  : '\u2026',
              }),
              !!L?.totals.byCategory.length &&
                (0, M.jsx)(l.default, {
                  testID: 'expenses-categories',
                  style: { gap: 2, marginTop: 6 },
                  children: L.totals.byCategory.map((e) =>
                    (0, M.jsxs)(
                      l.default,
                      {
                        style: [
                          j.common.between,
                          {
                            paddingVertical: 5,
                            borderTopWidth: s.default.hairlineWidth,
                            borderColor: r.line,
                          },
                        ],
                        children: [
                          (0, M.jsxs)(l.default, {
                            style: [j.common.row, { gap: 8 }],
                            children: [
                              (0, M.jsx)(b.Icon, {
                                name: V[e.category],
                                size: 16,
                                color: r.muted,
                              }),
                              (0, M.jsx)(j.Copy, {
                                style: { fontSize: 13, lineHeight: 20 },
                                children: H.expenseCategoryFa[e.category],
                              }),
                            ],
                          }),
                          (0, M.jsx)(j.Copy, {
                            style: {
                              fontSize: 13,
                              lineHeight: 20,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: (0, k.money)(e.totalToman, {
                              full: !0,
                              hint: !1,
                            }),
                          }),
                        ],
                      },
                      e.category,
                    ),
                  ),
                }),
            ],
          }),
          (0, M.jsx)(j.Button, {
            testID: 'expenses-new',
            onPress: () => T(J(p ? d : h.to)),
            children: (0, R.L)(
              '+ \u0647\u0632\u06cc\u0646\u0647\u0654 \u062c\u062f\u06cc\u062f',
            ),
          }),
          !!u.error &&
            !L &&
            (0, M.jsx)(j.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 13, lineHeight: 22, color: r.danger },
              children: (0, R.L)(
                '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627 \u0628\u0627\u0632 \u0646\u0634\u062f: {reason}',
                { reason: u.error },
              ),
            }),
          L &&
            !L.expenses.length &&
            (0, M.jsxs)(j.Card, {
              testID: 'expenses-empty',
              style: { gap: 6, padding: 16, alignItems: 'center' },
              children: [
                (0, M.jsx)(b.Icon, {
                  name: 'wallet',
                  size: 28,
                  color: r.muted,
                }),
                (0, M.jsx)(j.Copy, {
                  style: {
                    fontSize: 14,
                    lineHeight: 24,
                    textAlign: 'center',
                    color: r.muted,
                  },
                  children: (0, R.L)(
                    '\u06a9\u0631\u0627\u06cc\u0647\u060c \u0642\u0628\u0636\u060c \u0642\u0633\u0637 \u0648 \u0647\u0631 \u062e\u0631\u062c \u0645\u063a\u0627\u0632\u0647 \u0631\u0627 \u0627\u06cc\u0646\u062c\u0627 \u0628\u0646\u0648\u06cc\u0633 \u062a\u0627 \u0633\u0648\u062f \u0648\u0627\u0642\u0639\u06cc \u0631\u0627 \u0628\u0628\u06cc\u0646\u06cc.',
                  ),
                }),
              ],
            }),
          !!L?.expenses.length &&
            (0, M.jsx)(j.Card, {
              testID: 'expenses-list',
              style: { padding: 0, gap: 0, overflow: 'hidden' },
              children: L.expenses.map((e, t) =>
                (0, M.jsxs)(
                  o.default,
                  {
                    testID: 'expense-row',
                    accessibilityRole: 'button',
                    accessibilityLabel: (0, R.L)(
                      '\u0648\u06cc\u0631\u0627\u06cc\u0634 {name}',
                      { name: q(e) },
                    ),
                    onPress: () =>
                      T(Y(e, e.reminderId ? B.get(e.reminderId) : void 0, d)),
                    style: ({ pressed: e }) => [
                      j.common.row,
                      {
                        paddingHorizontal: 14,
                        paddingVertical: 12,
                        gap: 12,
                        borderTopWidth: t ? s.default.hairlineWidth : 0,
                        borderColor: r.line,
                        backgroundColor: e ? r.soft : 'transparent',
                      },
                    ],
                    children: [
                      (0, M.jsx)(l.default, {
                        style: {
                          width: 38,
                          height: 38,
                          borderRadius: 12,
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: r.accentSoft,
                        },
                        children: (0, M.jsx)(b.Icon, {
                          name: V[e.category],
                          size: 19,
                          color: r.accent,
                        }),
                      }),
                      (0, M.jsxs)(l.default, {
                        style: { flex: 1, minWidth: 0 },
                        children: [
                          (0, M.jsx)(j.Copy, {
                            numberOfLines: 1,
                            style: {
                              fontSize: 15,
                              lineHeight: 23,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: q(e),
                          }),
                          (0, M.jsxs)(j.Copy, {
                            numberOfLines: 1,
                            style: F,
                            children: [
                              N(e.spentOn),
                              ' \xb7 ',
                              H.expenseMethodFa[e.method],
                              e.reminderId && B.has(e.reminderId)
                                ? ' \xb7 ' +
                                  (0, R.L)(
                                    '\u062a\u06a9\u0631\u0627\u0631\u06cc',
                                  )
                                : '',
                            ],
                          }),
                        ],
                      }),
                      (0, M.jsx)(j.Copy, {
                        style: {
                          fontSize: 15,
                          lineHeight: 23,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: (0, k.money)(e.amountToman, {
                          full: !0,
                          hint: !1,
                        }),
                      }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
          w.length > 0 &&
            (0, M.jsxs)(l.default, {
              style: { gap: 8 },
              testID: 'expense-reminders',
              children: [
                (0, M.jsx)(j.Copy, {
                  accessibilityRole: 'header',
                  style: {
                    fontSize: 15,
                    lineHeight: 24,
                    fontFamily: 'Vazirmatn_700Bold',
                    paddingHorizontal: 4,
                  },
                  children: (0, R.L)(
                    '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627\u06cc \u062a\u06a9\u0631\u0627\u0631\u06cc',
                  ),
                }),
                (0, M.jsx)(j.Card, {
                  style: { padding: 0, gap: 0, overflow: 'hidden' },
                  children: w.map((t, n) => {
                    const c = (0, H.nextReminderTime)(
                      t,
                      e.timezone || 'Asia/Tehran',
                      i ? Date.parse(d + 'T08:00:00Z') : Date.now(),
                    );
                    return (0, M.jsxs)(
                      l.default,
                      {
                        testID: 'expense-reminder-row',
                        style: [
                          j.common.row,
                          {
                            paddingHorizontal: 14,
                            paddingVertical: 10,
                            gap: 10,
                            borderTopWidth: n ? s.default.hairlineWidth : 0,
                            borderColor: r.line,
                          },
                        ],
                        children: [
                          (0, M.jsx)(b.Icon, {
                            name: 'bell',
                            size: 18,
                            color: r.accent,
                          }),
                          (0, M.jsxs)(o.default, {
                            accessibilityRole: 'button',
                            accessibilityLabel: (0, R.L)(
                              '\u062b\u0628\u062a {name}',
                              { name: q(t) },
                            ),
                            onPress: () => T(X(d, t)),
                            style: { flex: 1, minWidth: 0 },
                            children: [
                              (0, M.jsxs)(j.Copy, {
                                numberOfLines: 1,
                                style: {
                                  fontSize: 14,
                                  lineHeight: 22,
                                  fontFamily: 'Vazirmatn_600SemiBold',
                                },
                                children: [
                                  q(t),
                                  t.amountToman
                                    ? '\u060c ' +
                                      (0, k.money)(t.amountToman, {
                                        full: !0,
                                        hint: !1,
                                      })
                                    : '',
                                ],
                              }),
                              (0, M.jsxs)(j.Copy, {
                                numberOfLines: 1,
                                style: F,
                                children: [
                                  K(t),
                                  c
                                    ? ' \xb7 ' +
                                      (0, R.L)(
                                        '\u0628\u0639\u062f\u06cc: {date}',
                                        {
                                          date: N(
                                            (0, H.todayIn)(
                                              e.timezone || 'Asia/Tehran',
                                              c,
                                            ),
                                          ),
                                        },
                                      )
                                    : '',
                                ],
                              }),
                            ],
                          }),
                          (0, M.jsx)(D.SmallKey, {
                            testID: 'expense-reminder-delete',
                            icon: 'close',
                            label: (0, R.L)('\u062d\u0630\u0641'),
                            accessibilityLabel: (0, R.L)(
                              '\u062d\u0630\u0641 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc {name}',
                              { name: q(t) },
                            ),
                            onPress: () => W(t),
                          }),
                        ],
                      },
                      t.id,
                    );
                  }),
                }),
              ],
            }),
          (0, M.jsx)(Q, {
            shop: e,
            draft: I,
            today: d,
            preview: !!i,
            onClose: () => T(null),
            onSaved: () => {
              (T(null), _());
            },
            confirm: v,
          }),
          z,
        ],
      });
    }
    function Q({
      shop: e,
      draft: n,
      today: r,
      preview: d,
      onClose: c,
      onSaved: m,
      confirm: h,
    }) {
      const { colors: y } = (0, E.useTheme)(),
        [p, u] = (0, t.useState)(n),
        [x, C] = (0, t.useState)(!1),
        [D, v] = (0, t.useState)(''),
        [z, O] = (0, t.useState)('');
      if (
        ((0, t.useEffect)(() => {
          (u(n), v(''), O(''));
        }, [n]),
        !p)
      )
        return (0, M.jsx)(L.Sheet, {
          visible: !1,
          title: '',
          onClose: c,
          children: null,
        });
      const _ = (e) => {
          (u((t) => (t ? { ...t, ...e } : t)), O(''));
        },
        F = (0, T.parseToman)(p.amount),
        B = Number(
          (0, R.localDigits)(p.monthDay).replace(/[\u06f0-\u06f9]/g, (e) =>
            String(
              '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
                e,
              ),
            ),
          ),
        ),
        A = p.category
          ? !Number.isSafeInteger(F) || F <= 0
            ? (0, R.L)(
                '\u0645\u0628\u0644\u063a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
              )
            : !p.remind || 'monthly' !== p.repeat || (B >= 1 && B <= 31)
              ? ''
              : (0, R.L)(
                  '\u0631\u0648\u0632 \u0645\u0627\u0647 \u0628\u0631\u0627\u06cc \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0628\u0627\u06cc\u062f \u0628\u06cc\u0646 \u06f1 \u062a\u0627 \u06f3\u06f1 \u0628\u0627\u0634\u062f.',
                )
          : (0, R.L)(
              '\u0646\u0648\u0639 \u0647\u0632\u06cc\u0646\u0647 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
            ),
        U = () =>
          'monthly' === p.repeat
            ? {
                repeat: 'monthly',
                monthDay: B,
                minute: H.DEFAULT_REMINDER_MINUTE,
              }
            : 'weekly' === p.repeat
              ? {
                  repeat: 'weekly',
                  weekday: p.weekday,
                  minute: H.DEFAULT_REMINDER_MINUTE,
                }
              : {
                  repeat: 'once',
                  onceOn: (0, T.partsToIso)(p.onceOn),
                  minute: H.DEFAULT_REMINDER_MINUTE,
                };
      async function K() {
        if (A || !p || d) return void v(A);
        (C(!0), v(''));
        const t =
          z ||
          Math.random().toString(36).slice(2) +
            Date.now().toString(36) +
            Math.random().toString(36).slice(2);
        O(t);
        const n = {
          category: p.category,
          label: p.label.trim(),
          amountToman: F,
          spentOn: (0, T.partsToIso)(p.date),
          method: p.method,
          note: p.note.trim(),
        };
        try {
          (p.id
            ? await (0, P.updateExpense)(
                e,
                p.id,
                {
                  ...n,
                  version: p.version,
                  ...(p.remind
                    ? { reminder: U() }
                    : p.hadReminder
                      ? { reminder: null }
                      : {}),
                },
                t,
              )
            : await (0, P.createExpense)(
                e,
                {
                  ...n,
                  ...(p.remind
                    ? { reminder: U() }
                    : p.reminderId
                      ? { reminderId: p.reminderId, source: 'reminder' }
                      : {}),
                },
                t,
              ),
            (0, S.showToast)(
              p.id
                ? (0, R.L)(
                    '\u0647\u0632\u06cc\u0646\u0647 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u0634\u062f',
                  )
                : (0, R.L)(
                    '\u0647\u0632\u06cc\u0646\u0647 \u062b\u0628\u062a \u0634\u062f',
                  ),
            ),
            m());
        } catch (e) {
          v(
            (0, R.L)('\u062b\u0628\u062a \u0646\u0634\u062f: {reason}', {
              reason: (0, f.message)(e),
            }),
          );
        } finally {
          C(!1);
        }
      }
      const q = {
        fontSize: 13,
        lineHeight: 20,
        fontFamily: 'Vazirmatn_600SemiBold',
      };
      return (0, M.jsx)(L.Sheet, {
        visible: !0,
        wide: !0,
        onSubmit: () => {
          x || K();
        },
        busy: x,
        title: p.id
          ? (0, R.L)(
              '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u0647\u0632\u06cc\u0646\u0647',
            )
          : (0, R.L)(
              '\u0647\u0632\u06cc\u0646\u0647\u0654 \u062c\u062f\u06cc\u062f',
            ),
        onClose: c,
        children: (0, M.jsxs)(l.default, {
          testID: 'expense-sheet',
          style: { gap: 14 },
          children: [
            (0, M.jsx)(L.SheetColumns, {
              items: [
                [
                  (0, M.jsxs)(l.default, {
                    style: { gap: 8 },
                    children: [
                      (0, M.jsx)(j.Copy, {
                        style: q,
                        children: (0, R.L)(
                          '\u0646\u0648\u0639 \u0647\u0632\u06cc\u0646\u0647',
                        ),
                      }),
                      (0, M.jsx)(l.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          flexWrap: 'wrap',
                          gap: 8,
                        },
                        children: H.EXPENSE_CATEGORIES.map((e) => {
                          const t = p.category === e;
                          return (0, M.jsxs)(
                            o.default,
                            {
                              testID: 'expense-category-' + e,
                              accessibilityRole: 'radio',
                              accessibilityState: { selected: t },
                              onPress: () => _({ category: e }),
                              style: ({ pressed: e }) => ({
                                flexBasis: '31%',
                                flexGrow: 1,
                                minHeight: 64,
                                borderRadius: 12,
                                borderWidth: t ? 2 : s.default.hairlineWidth,
                                borderColor: t ? y.accent : y.line,
                                backgroundColor: t ? y.accentSoft : y.surface,
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 4,
                                padding: 6,
                                opacity: e ? 0.85 : 1,
                              }),
                              children: [
                                (0, M.jsx)(b.Icon, {
                                  name: V[e],
                                  size: 20,
                                  color: t ? y.accent : y.muted,
                                }),
                                (0, M.jsx)(j.Copy, {
                                  numberOfLines: 1,
                                  style: {
                                    fontSize: 12,
                                    lineHeight: 18,
                                    textAlign: 'center',
                                    fontFamily: t
                                      ? 'Vazirmatn_700Bold'
                                      : 'Vazirmatn_400Regular',
                                    color: t ? y.accent : y.text,
                                  },
                                  children: H.expenseCategoryFa[e],
                                }),
                              ],
                            },
                            e,
                          );
                        }),
                      }),
                    ],
                  }),
                  'start',
                ],
                [
                  (0, M.jsxs)(l.default, {
                    style: { gap: 6 },
                    children: [
                      (0, M.jsx)(j.Copy, {
                        style: q,
                        children: (0, R.L)('\u0645\u0628\u0644\u063a'),
                      }),
                      (0, M.jsx)(I.MoneyInput, {
                        testID: 'expense-amount',
                        value: p.amount,
                        onChange: (e) => _({ amount: e }),
                        placeholder: (0, R.L)(
                          '\u0645\u062b\u0644\u0627\u064b \u06f1\u06f5\u066c\u06f0\u06f0\u06f0\u066c\u06f0\u06f0\u06f0',
                        ),
                      }),
                    ],
                  }),
                  'end',
                ],
                [
                  (0, M.jsxs)(l.default, {
                    style: { gap: 6 },
                    children: [
                      (0, M.jsx)(j.Copy, {
                        style: q,
                        children: (0, R.L)(
                          '\u0628\u0631\u0627\u06cc \u0686\u0647\u061f (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                        ),
                      }),
                      (0, M.jsx)(j.Input, {
                        testID: 'expense-label',
                        value: p.label,
                        onChangeText: (e) => _({ label: e }),
                        maxLength: 100,
                        placeholder: p.category
                          ? H.expenseCategoryHint[p.category]
                          : (0, R.L)(
                              '\u0645\u062b\u0644\u0627\u064b \u06a9\u0631\u0627\u06cc\u0647 \u0645\u063a\u0627\u0632\u0647',
                            ),
                      }),
                    ],
                  }),
                  'end',
                ],
                [
                  (0, M.jsxs)(l.default, {
                    style: { gap: 6 },
                    children: [
                      (0, M.jsx)(j.Copy, {
                        style: q,
                        children: (0, R.L)('\u062a\u0627\u0631\u06cc\u062e'),
                      }),
                      (0, M.jsx)(w.JalaliDateField, {
                        id: 'expense-date',
                        dateOnly: !0,
                        quick: 'past',
                        value: p.date,
                        onChange: (e) => _({ date: e }),
                      }),
                    ],
                  }),
                  'start',
                ],
                [
                  (0, M.jsxs)(l.default, {
                    style: { gap: 6 },
                    children: [
                      (0, M.jsx)(j.Copy, {
                        style: q,
                        children: (0, R.L)(
                          '\u0631\u0648\u0634 \u067e\u0631\u062f\u0627\u062e\u062a',
                        ),
                      }),
                      (0, M.jsx)(j.Segmented, {
                        value: p.method,
                        onChange: (e) => _({ method: e }),
                        items: H.EXPENSE_METHODS.map((e) => ({
                          value: e,
                          label: H.expenseMethodFa[e],
                          testID: 'expense-method-' + e,
                        })),
                      }),
                    ],
                  }),
                  'end',
                ],
                [
                  (0, M.jsxs)(l.default, {
                    style: { gap: 6 },
                    children: [
                      (0, M.jsx)(j.Copy, {
                        style: q,
                        children: (0, R.L)(
                          '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                        ),
                      }),
                      (0, M.jsx)(j.Input, {
                        testID: 'expense-note',
                        value: p.note,
                        onChangeText: (e) => _({ note: e }),
                        maxLength: 500,
                      }),
                    ],
                  }),
                  'end',
                ],
                [
                  (0, M.jsxs)(j.Card, {
                    style: { gap: 10, padding: 12 },
                    children: [
                      (0, M.jsxs)(l.default, {
                        style: j.common.between,
                        children: [
                          (0, M.jsxs)(l.default, {
                            style: { flexShrink: 1 },
                            children: [
                              (0, M.jsx)(j.Copy, {
                                style: q,
                                children: (0, R.L)(
                                  '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062a\u06a9\u0631\u0627\u0631\u06cc',
                                ),
                              }),
                              (0, M.jsx)(j.Copy, {
                                style: {
                                  fontSize: 11,
                                  lineHeight: 17,
                                  color: y.muted,
                                },
                                children: (0, R.L)(
                                  '\u0633\u0627\u0639\u062a \u06f9 \u0635\u0628\u062d \u06cc\u0627\u062f\u062a \u0645\u06cc\u200c\u0627\u0646\u062f\u0627\u0632\u0645\u061b \u0628\u0627 \u0632\u062f\u0646 \u0627\u0639\u0644\u0627\u0646 \u0647\u0645\u06cc\u0646 \u0647\u0632\u06cc\u0646\u0647 \u0622\u0645\u0627\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                                ),
                              }),
                            ],
                          }),
                          (0, M.jsx)(i.default, {
                            testID: 'expense-remind',
                            value: p.remind,
                            onValueChange: (e) => _({ remind: e }),
                            trackColor: { false: y.soft, true: y.accent },
                            thumbColor: y.surface,
                            activeThumbColor: y.surface,
                          }),
                        ],
                      }),
                      p.remind &&
                        (0, M.jsxs)(l.default, {
                          style: { gap: 10 },
                          children: [
                            (0, M.jsx)(j.Segmented, {
                              value: p.repeat,
                              onChange: (e) => _({ repeat: e }),
                              items: ['monthly', 'weekly', 'once'].map((e) => ({
                                value: e,
                                label:
                                  'monthly' === e
                                    ? (0, R.L)(
                                        '\u0647\u0631 \u0645\u0627\u0647',
                                      )
                                    : 'weekly' === e
                                      ? (0, R.L)(
                                          '\u0647\u0631 \u0647\u0641\u062a\u0647',
                                        )
                                      : (0, R.L)(
                                          '\u06cc\u06a9 \u0628\u0627\u0631',
                                        ),
                                testID: 'expense-repeat-' + e,
                              })),
                            }),
                            'monthly' === p.repeat &&
                              (0, M.jsxs)(l.default, {
                                style: j.common.row,
                                children: [
                                  (0, M.jsx)(j.Copy, {
                                    style: { fontSize: 13 },
                                    children: (0, R.L)('\u0631\u0648\u0632'),
                                  }),
                                  (0, M.jsx)(l.default, {
                                    style: { width: 84 },
                                    children: (0, M.jsx)(j.Input, {
                                      testID: 'expense-month-day',
                                      value: (0, R.localDigits)(p.monthDay),
                                      onChangeText: (e) =>
                                        _({
                                          monthDay: e
                                            .replace(/[^0-9\u06f0-\u06f9]/g, '')
                                            .slice(0, 2),
                                        }),
                                      keyboardType: 'number-pad',
                                      inputMode: 'numeric',
                                      style: { textAlign: 'center' },
                                    }),
                                  }),
                                  (0, M.jsx)(j.Copy, {
                                    style: { fontSize: 13, flex: 1 },
                                    children: (0, R.L)(
                                      '\u0647\u0631 \u0645\u0627\u0647',
                                    ),
                                  }),
                                ],
                              }),
                            'weekly' === p.repeat &&
                              (0, M.jsx)(j.Segmented, {
                                compact: !0,
                                scroll: !0,
                                value: p.weekday,
                                onChange: (e) => _({ weekday: e }),
                                items: [6, 0, 1, 2, 3, 4, 5].map((e) => ({
                                  value: e,
                                  label: W()[e],
                                })),
                              }),
                            'once' === p.repeat &&
                              (0, M.jsx)(w.JalaliDateField, {
                                id: 'expense-once',
                                dateOnly: !0,
                                value: p.onceOn,
                                onChange: (e) => _({ onceOn: e }),
                              }),
                          ],
                        }),
                    ],
                  }),
                  'end',
                ],
              ],
            }),
            !!D &&
              (0, M.jsx)(j.Copy, {
                accessibilityRole: 'alert',
                testID: 'expense-error',
                style: { fontSize: 13, lineHeight: 22, color: y.danger },
                children: D,
              }),
            (0, M.jsx)(j.Button, {
              testID: 'expense-save',
              disabled: x,
              onPress: K,
              children: x
                ? (0, R.L)(
                    '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
                  )
                : p.id
                  ? (0, R.L)(
                      '\u062b\u0628\u062a \u062a\u063a\u06cc\u06cc\u0631',
                    )
                  : (0, R.L)(
                      '\u062b\u0628\u062a \u0647\u0632\u06cc\u0646\u0647',
                    ),
            }),
            !!p.id &&
              (0, M.jsx)(j.Button, {
                testID: 'expense-delete',
                danger: !0,
                disabled: x,
                onPress: function () {
                  if (!p?.id) return;
                  const t = p;
                  h({
                    title: (0, R.L)(
                      '\u062d\u0630\u0641 \u0647\u0632\u06cc\u0646\u0647',
                    ),
                    text:
                      (0, R.L)(
                        '\xab{name}\xbb\u060c {amount} \u062d\u0630\u0641 \u0634\u0648\u062f\u061f',
                        {
                          name:
                            t.label.trim() || H.expenseCategoryFa[t.category],
                          amount: (0, k.money)(F, { full: !0, hint: !1 }),
                        },
                      ) +
                      (t.hadReminder
                        ? ' ' +
                          (0, R.L)(
                            '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062a\u06a9\u0631\u0627\u0631\u06cc \u0622\u0646 \u0647\u0645 \u062d\u0630\u0641 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                          )
                        : ''),
                    ok: (0, R.L)('\u062d\u0630\u0641'),
                    run: async () => {
                      try {
                        (await (0, P.deleteExpense)(e, t.id, {
                          version: t.version,
                          removeReminder: !!t.hadReminder,
                        }),
                          (0, S.showToast)(
                            (0, R.L)(
                              '\u0647\u0632\u06cc\u0646\u0647 \u062d\u0630\u0641 \u0634\u062f',
                            ),
                          ),
                          m());
                      } catch (e) {
                        v(
                          (0, R.L)(
                            '\u062d\u0630\u0641 \u0646\u0634\u062f: {reason}',
                            { reason: (0, f.message)(e) },
                          ),
                        );
                      }
                    },
                  });
                },
                children: (0, R.L)(
                  '\u062d\u0630\u0641 \u0647\u0632\u06cc\u0646\u0647',
                ),
              }),
            !p.id &&
              (0, M.jsx)(j.Copy, {
                style: {
                  fontSize: 11,
                  lineHeight: 17,
                  color: y.muted,
                  textAlign: 'center',
                },
                children: (0, R.L)('\u0627\u0645\u0631\u0648\u0632: {date}', {
                  date: N(r),
                }),
              }),
          ],
        }),
      });
    }
  },
  862,
  [
    2, 224, 94, 232, 17, 240, 99, 380, 515, 482, 481, 516, 786, 582, 540, 480,
    415, 407, 385, 539, 534, 525, 619, 614, 517, 529, 863, 448, 382, 489, 311,
    440, 435, 443, 522, 623, 338,
  ],
);
