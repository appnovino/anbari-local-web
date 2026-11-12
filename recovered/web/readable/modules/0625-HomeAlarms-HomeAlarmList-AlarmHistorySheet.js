// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 625; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.HomeAlarms = function ({
        shop: e,
        chequesAllowed: n,
        onOpen: o,
        onHistory: l,
        onCount: s,
        preview: c,
      }) {
        const u = !c && !!e,
          h = (0, y.useSwr)(u ? (0, y.scoped)(e.id, 'to-buy') : null, () =>
            (0, p.listToBuy)(e),
          ),
          f = (0, y.useSwr)(
            u ? (0, y.scoped)(e.id, 'to-buy-routines') : null,
            () => (0, p.listRoutines)(e),
          ),
          z = (0, y.useSwr)(
            u && !0 === n ? (0, y.scoped)(e.id, 'cheques') : null,
            () => (0, b.loadAllCheques)(e),
          ),
          H = (0, y.useSwr)(
            u && (0, S.expensesAllowedFor)(e)
              ? (0, y.scoped)(e.id, 'expense-reminders')
              : null,
            () => (0, x.listExpenseReminders)(e),
          ),
          [L, A] = (0, t.useState)(() => Date.now()),
          I = (0, t.useMemo)(
            () =>
              c ||
              (0, j.homeAlarms)(
                {
                  toBuy: h.data,
                  routines: f.data,
                  cheques: !0 === n ? z.data : null,
                  expenses: H.data,
                },
                e?.timezone || 'Asia/Tehran',
                L,
              ),
            [c, h.data, f.data, z.data, H.data, n, e?.timezone, L],
          );
        return (
          (0, t.useEffect)(() => {
            const e = setTimeout(
              () => A(Date.now()),
              (0, j.nextAlarmChange)(I, L),
            );
            return () => clearTimeout(e);
          }, [I, L]),
          (0, t.useEffect)(() => {
            s?.(I.length);
          }, [I.length, s]),
          (0, t.useEffect)(() => {
            !u ||
              (void 0 === h.data && void 0 === f.data && void 0 === z.data) ||
              (0, w.updateAlarmHistory)(
                e.id,
                {
                  toBuy: h.data,
                  routines: f.data,
                  cheques: !0 === n ? z.data : null,
                  expenses: H.data,
                },
                e.timezone || 'Asia/Tehran',
                L,
              ).catch(() => {});
          }, [u, e?.id, h.data, f.data, z.data, H.data, n, L]),
          I.length
            ? (0, C.jsx)(D, { rows: I, now: L, onOpen: o, onHistory: l })
            : null
        );
      }),
      (_e.HomeAlarmList = D),
      (_e.AlarmHistorySheet = function ({
        visible: e,
        scope: l,
        preview: h,
        onOpen: y,
        onClose: p,
      }) {
        const { colors: b } = (0, f.useTheme)(),
          [x, S] = (0, t.useState)(null),
          [j, H] = (0, t.useState)(() => Date.now());
        return (
          (0, t.useEffect)(() => {
            if (!e) return void S(null);
            const t = Date.now();
            if ((H(t), h)) return void S(h);
            if (!l) return void S([]);
            let n = !0;
            return (
              (0, w.loadAlarmHistory)(l).then((e) => {
                n && S((0, w.historyList)(e, t));
              }),
              () => {
                n = !1;
              }
            );
          }, [e, l, h]),
          (0, C.jsx)(c.Sheet, {
            visible: e,
            title: (0, z.L)(
              '\u062a\u0627\u0631\u06cc\u062e\u0686\u0647\u0654 \u0627\u0639\u0644\u0627\u0646\u200c\u0647\u0627',
            ),
            onClose: p,
            children: (0, C.jsxs)(o.default, {
              testID: 'alarm-history',
              style: { gap: 6 },
              children: [
                x &&
                  !x.length &&
                  (0, C.jsx)(s.Copy, {
                    testID: 'alarm-history-empty',
                    style: {
                      fontSize: 13,
                      lineHeight: 22,
                      color: b.muted,
                      textAlign: 'center',
                      paddingVertical: 18,
                    },
                    children: (0, z.L)(
                      '\u062f\u0631 \u06f3\u06f0 \u0631\u0648\u0632 \u06af\u0630\u0634\u062a\u0647 \u0627\u0639\u0644\u0627\u0646\u06cc \u0646\u06cc\u0627\u0645\u062f\u0647.',
                    ),
                  }),
                x?.map((e) =>
                  (0, C.jsxs)(
                    n.default,
                    {
                      testID: 'alarm-history-' + e.id,
                      accessibilityRole: 'button',
                      accessibilityLabel:
                        e.title + '\u060c ' + (0, w.historyWhen)(e.at, j),
                      onPress: () => y(e),
                      style: ({ pressed: e }) => ({
                        minHeight: 56,
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 10,
                        paddingHorizontal: 8,
                        paddingVertical: 6,
                        borderRadius: 12,
                        backgroundColor: e ? b.soft : b.surface,
                        borderWidth: 1,
                        borderColor: b.line,
                      }),
                      children: [
                        (0, C.jsx)(o.default, {
                          style: {
                            width: 36,
                            height: 36,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: b.accentSoft,
                          },
                          children: (0, C.jsx)(u.Icon, {
                            name: A[e.kind],
                            size: 19,
                            color: b.accent,
                          }),
                        }),
                        (0, C.jsxs)(o.default, {
                          style: { flex: 1, minWidth: 0 },
                          children: [
                            (0, C.jsx)(s.Copy, {
                              numberOfLines: 1,
                              style: {
                                fontSize: 14,
                                lineHeight: 22,
                                fontFamily: 'Vazirmatn_500Medium',
                              },
                              children: e.title,
                            }),
                            (0, C.jsx)(s.Copy, {
                              numberOfLines: 1,
                              style: {
                                fontSize: 11,
                                lineHeight: 18,
                                color: b.muted,
                              },
                              children: e.detail,
                            }),
                          ],
                        }),
                        (0, C.jsx)(s.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 12,
                            lineHeight: 20,
                            color: b.muted,
                          },
                          children: (0, w.historyWhen)(e.at, j),
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              ],
            }),
          })
        );
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
      b = r(d[11]),
      x = r(d[12]),
      S = r(d[13]),
      j = r(d[14]),
      w = r(d[15]),
      z = r(d[16]),
      C = r(d[17]);
    const H = 52,
      L = 6,
      A = {
        'to-buy': 'bell',
        routine: 'refresh',
        cheque: 'cheque',
        expense: 'wallet',
      };
    function D({ rows: e, now: t, onOpen: c, onHistory: y }) {
      const { colors: p } = (0, f.useTheme)(),
        b = (0, j.homeAlarmsScroll)(e.length);
      return (0, C.jsxs)(o.default, {
        testID: 'home-alarms',
        style: {
          marginBottom: 14,
          padding: 10,
          gap: 8,
          borderRadius: 16,
          borderWidth: 1,
          borderColor: p.accent + '55',
          backgroundColor: p.accentSoft,
        },
        children: [
          (0, C.jsxs)(o.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 8,
              paddingHorizontal: 4,
            },
            children: [
              (0, C.jsx)(u.Icon, { name: 'bell', size: 18, color: p.accent }),
              (0, C.jsx)(s.Copy, {
                accessibilityRole: 'header',
                style: {
                  flex: 1,
                  fontSize: 15,
                  lineHeight: 24,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: (0, z.L)(
                  '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627',
                ),
              }),
              (0, C.jsx)(n.default, {
                testID: 'home-alarms-history',
                accessibilityRole: 'button',
                accessibilityLabel: (0, z.L)(
                  '\u062a\u0627\u0631\u06cc\u062e\u0686\u0647\u0654 \u0627\u0639\u0644\u0627\u0646\u200c\u0647\u0627',
                ),
                hitSlop: 10,
                onPress: y,
                style: ({ pressed: e }) => ({
                  paddingHorizontal: 6,
                  opacity: e ? 0.6 : 1,
                }),
                children: (0, C.jsx)(s.Copy, {
                  style: {
                    fontSize: 12.5,
                    lineHeight: 20,
                    color: p.accent,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: (0, z.L)(
                    '\u062a\u0627\u0631\u06cc\u062e\u0686\u0647',
                  ),
                }),
              }),
              (0, C.jsx)(o.default, {
                style: {
                  minWidth: 24,
                  height: 24,
                  borderRadius: 12,
                  paddingHorizontal: 7,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: p.accent,
                },
                children: (0, C.jsx)(s.Copy, {
                  testID: 'home-alarms-count',
                  style: {
                    fontSize: 12,
                    lineHeight: 18,
                    color: p.onAccent,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: e.length.toLocaleString((0, z.numberLocale)()),
                }),
              }),
            ],
          }),
          (0, C.jsx)(l.ScrollView, {
            testID: 'home-alarms-scroll',
            nestedScrollEnabled: !0,
            scrollEnabled: b,
            showsVerticalScrollIndicator: b,
            style: {
              maxHeight: j.HOME_ALARM_ROWS * H + (j.HOME_ALARM_ROWS - 1) * L,
            },
            contentContainerStyle: { gap: L },
            children: e.map((e) =>
              (0, C.jsxs)(
                n.default,
                {
                  testID: 'home-alarm-' + e.key,
                  accessibilityRole: 'button',
                  accessibilityLabel:
                    e.title +
                    '\u060c ' +
                    (e.fired
                      ? (0, z.L)(
                          '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0634\u062f',
                        )
                      : (0, h.whenLabel)(new Date(e.at), new Date(t))),
                  onPress: () => c(e),
                  style: ({ pressed: e }) => ({
                    height: H,
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 10,
                    paddingHorizontal: 8,
                    borderRadius: 12,
                    backgroundColor: p.surface,
                    opacity: e ? 0.85 : 1,
                  }),
                  children: [
                    (0, C.jsx)(o.default, {
                      testID: e.fired
                        ? 'home-alarm-fired'
                        : 'home-alarm-waiting',
                      style: {
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: e.fired ? p.accent : p.accentSoft,
                      },
                      children: (0, C.jsx)(u.Icon, {
                        name: A[e.kind],
                        size: 19,
                        color: e.fired ? p.onAccent : p.accent,
                        active: e.fired,
                      }),
                    }),
                    (0, C.jsxs)(o.default, {
                      style: { flex: 1, minWidth: 0 },
                      children: [
                        (0, C.jsx)(s.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 14,
                            lineHeight: 22,
                            fontFamily: e.fired
                              ? 'Vazirmatn_700Bold'
                              : 'Vazirmatn_500Medium',
                          },
                          children: e.title,
                        }),
                        (0, C.jsx)(s.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 11,
                            lineHeight: 18,
                            color: e.fired ? p.accent : p.muted,
                            fontFamily: e.fired
                              ? 'Vazirmatn_600SemiBold'
                              : 'Vazirmatn_400Regular',
                          },
                          children: e.fired
                            ? (0, z.L)(
                                '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0634\u062f',
                              )
                            : e.detail,
                        }),
                      ],
                    }),
                    (0, C.jsx)(s.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 12,
                        lineHeight: 20,
                        color: e.fired ? p.accent : p.muted,
                      },
                      children: (0, h.whenLabel)(new Date(e.at), new Date(t)),
                    }),
                  ],
                },
                e.key,
              ),
            ),
          }),
        ],
      });
    }
  },
  625,
  [
    2, 232, 99, 380, 407, 539, 385, 618, 382, 489, 613, 626, 522, 623, 683, 684,
    311, 338,
  ],
);
