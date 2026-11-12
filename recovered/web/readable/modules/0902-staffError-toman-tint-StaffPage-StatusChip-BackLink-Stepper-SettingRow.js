// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 902; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'staffError', {
        enumerable: !0,
        get: function () {
          return _;
        },
      }),
      Object.defineProperty(_e, 'toman', {
        enumerable: !0,
        get: function () {
          return V;
        },
      }),
      Object.defineProperty(_e, 'tint', {
        enumerable: !0,
        get: function () {
          return B;
        },
      }),
      (_e.StaffPage = function ({ shop: e, route: t, onUpgrade: n }) {
        const s = !1 === W(e),
          a = s ? 'money' : t.staffPart || 'money';
        return 'money' === a && 'rates' === t.staffView
          ? (0, v.jsx)(w.StaffRates, {
              shop: e,
              onBack: () => F({ staffPart: 'money' }),
            })
          : 'money' === a && t.personId && 'payslip' === t.staffView
            ? (0, v.jsx)(w.StaffPayslip, {
                shop: e,
                personId: t.personId,
                period: t.period,
                onBack: () => F({ staffPart: 'money', personId: t.personId }),
              })
            : 'money' === a && t.personId
              ? (0, v.jsx)(
                  Q,
                  {
                    shop: e,
                    id: t.personId,
                    onBack: () =>
                      F({
                        staffPart: 'money',
                        ...('people' === t.from ? { staffView: 'former' } : {}),
                      }),
                  },
                  t.personId,
                )
              : (0, v.jsxs)(o.default, {
                  testID: 'staff-money-screen',
                  style: { gap: 12 },
                  children: [
                    (0, v.jsxs)(o.default, {
                      style: { flexDirection: 'row-reverse', gap: 10 },
                      children: [
                        (0, v.jsx)(O, {
                          testID: 'staff-part-money',
                          on: 'money' === a,
                          icon: 'wallet',
                          title: (0, j.L)(
                            '\u0645\u062f\u06cc\u0631\u06cc\u062a \u062d\u0633\u0627\u0628\u200c\u0647\u0627',
                          ),
                          sub: (0, j.L)(
                            '\u062d\u0642\u0648\u0642\u060c \u067e\u0631\u062f\u0627\u062e\u062a\u060c \u0645\u0633\u0627\u0639\u062f\u0647',
                          ),
                          onPress: () => F({ staffPart: 'money' }),
                        }),
                        (0, v.jsx)(O, {
                          testID: 'staff-part-access',
                          on: 'access' === a,
                          icon: 'user',
                          title: (0, j.L)(
                            '\u0627\u0641\u0632\u0648\u062f\u0646 \u0628\u0647 {brand}',
                            { brand: m.fa.brand },
                          ),
                          sub: (0, j.L)(
                            '\u0628\u0647 \u06a9\u0627\u0631\u0645\u0646\u062f\u062a \u0648\u0631\u0648\u062f \u062c\u062f\u0627 \u0628\u062f\u0647 \u062a\u0627 \u062e\u0648\u062f\u0634 \u0641\u0631\u0648\u0634 \u0648 \u06a9\u0627\u0644\u0627 \u062b\u0628\u062a \u06a9\u0646\u062f',
                          ),
                          badge: s
                            ? (0, j.L)('\u067e\u0644\u0627\u0633')
                            : void 0,
                          onPress: () =>
                            s
                              ? n(
                                  (0, j.L)(
                                    '\u0648\u0631\u0648\u062f \u0647\u0645\u06a9\u0627\u0631 \u0628\u0647 \u0627\u067e \u062f\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9 \xab\u067e\u0644\u0627\u0633\xbb \u0627\u0633\u062a. \u062d\u0633\u0627\u0628\u060c \u062d\u0642\u0648\u0642 \u0648 \u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646 \u062f\u0631 \u0637\u0631\u062d \u062e\u0648\u062f\u062a \u0647\u0645 \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f.',
                                  ),
                                )
                              : F({ staffPart: 'access' }),
                        }),
                      ],
                    }),
                    'access' === a
                      ? (0, v.jsx)(D.StaffManager, { shop: e, onUpgrade: n })
                      : 'former' === t.staffView
                        ? (0, v.jsx)(K, { shop: e })
                        : (0, v.jsx)(N, { shop: e }),
                  ],
                });
      }),
      (_e.StatusChip = U),
      (_e.BackLink = G),
      (_e.Stepper = ae),
      (_e.SettingRow = le));
    var t = _r(d[0]),
      n = e(_r(d[1])),
      s = e(_r(d[2])),
      a = e(_r(d[3])),
      o = e(_r(d[4])),
      l = _r(d[5]),
      r = _r(d[6]),
      i = _r(d[7]),
      c = _r(d[8]),
      f = _r(d[9]),
      u = _r(d[10]),
      y = _r(d[11]),
      h = _r(d[12]),
      m = _r(d[13]),
      p = _r(d[14]),
      x = _r(d[15]),
      j = _r(d[16]),
      b = _r(d[17]),
      S = _r(d[18]),
      L = _r(d[19]),
      C = _r(d[20]),
      I = _r(d[21]),
      D = _r(d[22]),
      z = _r(d[23]),
      w = _r(d[24]),
      T = _r(d[25]),
      v = _r(d[26]);
    const P = {
        forbidden:
          '\u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646 \u0631\u0627 \u0641\u0642\u0637 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0648 \u0645\u062f\u06cc\u0631 \u0645\u06cc\u200c\u0628\u06cc\u0646\u0646\u062f.',
        salary_scope_required:
          '\u0628\u06af\u0648 \u0627\u06cc\u0646 \u062a\u063a\u06cc\u06cc\u0631 \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647 \u0627\u0633\u062a \u06cc\u0627 \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0647\u0631 \u0645\u0627\u0647.',
        salary_not_set:
          '\u0627\u0648\u0644 \u062d\u0642\u0648\u0642 \u0645\u0627\u0647\u0627\u0646\u0647 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
        staff_ended:
          '\u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 \u0627\u06cc\u0646 \u0646\u0641\u0631 \u062a\u0645\u0627\u0645 \u0634\u062f\u0647 \u0627\u0633\u062a.',
        end_needs_owner:
          '\u0627\u06cc\u0646 \u0646\u0641\u0631 \u0648\u0627\u0631\u062f \u0627\u067e \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u067e\u0627\u06cc\u0627\u0646 \u0647\u0645\u06a9\u0627\u0631\u06cc\u200c\u0627\u0634 \u0631\u0627 \u0641\u0642\u0637 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f.',
        staff_member_linked:
          '\u0627\u06cc\u0646 \u0646\u0641\u0631 \u0627\u0632 \u0642\u0628\u0644 \u062f\u0631 \u0641\u0647\u0631\u0633\u062a \u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646 \u0647\u0633\u062a.',
        date_in_future:
          '\u062a\u0627\u0631\u06cc\u062e \u0646\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0628\u0639\u062f \u0627\u0632 \u0627\u0645\u0631\u0648\u0632 \u0628\u0627\u0634\u062f.',
        pay_day_required:
          '\u0628\u0631\u0627\u06cc \u0627\u0636\u0627\u0641\u0647 \u0634\u062f\u0646 \u062e\u0648\u062f\u06a9\u0627\u0631\u060c \u0631\u0648\u0632 \u062d\u0642\u0648\u0642 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
        salary_below_zero:
          '\u062d\u0642\u0648\u0642 \u06a9\u0645\u062a\u0631 \u0627\u0632 \u0635\u0641\u0631 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
      },
      _ = (e) => {
        const t = e instanceof Error ? e.message : '';
        return P[t] ? (0, j.L)(P[t]) : (0, p.message)(e);
      },
      V = (e) => (0, b.fullToman)(Math.round(e)),
      k = (e) =>
        '\u2066' + (e < 0 ? '\u2212' : '+') + V(Math.abs(e)) + '\u2069',
      B = (e, t) => (/^#[0-9a-f]{6}$/i.test(e) ? e + t : e),
      F = (e) => z.ledgerEntries.open({ screen: 'staff', ...e }),
      H = (e) => e.trim().charAt(0) || '\u061f',
      R = (e) => 'owner' === e.role || 'manager' === e.role;
    function W(e) {
      const [n, s] = (0, t.useState)(null);
      return (
        (0, t.useEffect)(() => {
          let t = !0;
          if ((s(null), 'owner' === e.role))
            return (
              (0, p.request)((0, p.shopPath)(e, '/staff'))
                .then((e) => {
                  t && s(!0 === e?.team);
                })
                .catch(() => {}),
              () => {
                t = !1;
              }
            );
        }, [e.id, e.role]),
        n
      );
    }
    function O({
      on: e,
      icon: t,
      title: a,
      sub: l,
      onPress: c,
      testID: f,
      badge: u,
    }) {
      const { colors: y } = (0, h.useTheme)();
      return (0, v.jsxs)(n.default, {
        testID: f,
        accessibilityRole: 'tab',
        accessibilityState: { selected: e },
        onPress: c,
        style: ({ pressed: t }) => ({
          flex: 1,
          minWidth: 0,
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 10,
          padding: 12,
          minHeight: 84,
          borderRadius: 20,
          borderWidth: e ? 2 : s.default.hairlineWidth,
          borderColor: e ? y.accent : y.line,
          backgroundColor: e ? B(y.accent, '1f') : y.surface,
          opacity: t ? 0.85 : 1,
        }),
        children: [
          (0, v.jsx)(o.default, {
            style: {
              width: 44,
              height: 44,
              borderRadius: 14,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: y.accentSoft,
            },
            children: (0, v.jsx)(i.Icon, {
              name: t,
              size: 22,
              color: y.accent,
            }),
          }),
          (0, v.jsxs)(o.default, {
            style: { flex: 1, minWidth: 0 },
            children: [
              (0, v.jsx)(r.Copy, {
                numberOfLines: 2,
                style: {
                  fontSize: 15,
                  lineHeight: 22,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: a,
              }),
              (0, v.jsx)(r.Copy, {
                numberOfLines: 4,
                style: { fontSize: 11.5, lineHeight: 17, color: y.muted },
                children: l,
              }),
              !!u &&
                (0, v.jsxs)(o.default, {
                  testID: f + '-lock',
                  style: {
                    alignSelf: 'flex-end',
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 4,
                    marginTop: 4,
                    paddingHorizontal: 8,
                    borderRadius: 999,
                    borderWidth: 1,
                    borderColor: y.warningBorder,
                    backgroundColor: y.warningSoft,
                  },
                  children: [
                    (0, v.jsx)(i.Icon, {
                      name: 'lock',
                      size: 11,
                      color: y.warning,
                    }),
                    (0, v.jsx)(r.Copy, {
                      style: {
                        fontSize: 11,
                        lineHeight: 18,
                        fontFamily: 'Vazirmatn_600SemiBold',
                        color: y.warning,
                      },
                      children: u,
                    }),
                  ],
                }),
            ],
          }),
        ],
      });
    }
    function M({ text: e, tone: t, testID: n }) {
      const { colors: s } = (0, h.useTheme)(),
        a = {
          accent: [s.accent, s.accentSoft, 'transparent'],
          muted: [s.muted, s.soft, 'transparent'],
          warning: [s.warning, s.warningSoft, s.warningBorder],
          danger: [s.danger, B(s.danger, '22'), B(s.danger, '66')],
          success: [s.success, B(s.success, '22'), 'transparent'],
        }[t];
      return (0, v.jsx)(o.default, {
        testID: n,
        style: {
          alignSelf: 'flex-start',
          paddingHorizontal: 10,
          paddingVertical: 3,
          borderRadius: 12,
          backgroundColor: a[1],
          borderWidth: 'transparent' === a[2] ? 0 : 1,
          borderColor: a[2],
        },
        children: (0, v.jsx)(r.Copy, {
          numberOfLines: 1,
          style: {
            fontSize: 12,
            lineHeight: 19,
            color: a[0],
            fontFamily: 'Vazirmatn_600SemiBold',
          },
          children: e,
        }),
      });
    }
    function U({ person: e, testID: t }) {
      return 'owed' === e.status
        ? (0, v.jsx)(M, {
            testID: t,
            tone: 'warning',
            text: (0, j.L)(
              '{amount} \u0637\u0644\u0628 \u062f\u0627\u0631\u062f',
              { amount: V(e.balance) },
            ),
          })
        : 'owes' === e.status
          ? (0, v.jsx)(M, {
              testID: t,
              tone: 'danger',
              text: (0, j.L)(
                '{amount} \u0628\u062f\u0647\u06a9\u0627\u0631 \u0627\u0633\u062a',
                { amount: V(-e.balance) },
              ),
            })
          : (0, v.jsx)(M, {
              testID: t,
              tone: 'success',
              text: (0, j.L)('\u062a\u0633\u0648\u06cc\u0647 \u2713'),
            });
    }
    function A({ name: e, size: t = 48 }) {
      const { colors: n } = (0, h.useTheme)();
      return (0, v.jsx)(o.default, {
        style: {
          width: t,
          height: t,
          borderRadius: t / 2,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: n.soft,
        },
        children: (0, v.jsx)(r.Copy, {
          style: {
            fontSize: 0.42 * t,
            lineHeight: 0.62 * t,
            color: n.accent,
            fontFamily: 'Vazirmatn_700Bold',
          },
          children: H(e),
        }),
      });
    }
    function N({ shop: e }) {
      const { colors: s } = (0, h.useTheme)(),
        a = (0, x.useSwr)(
          R(e) ? (0, x.scoped)(e.id, 'staff-money') : null,
          () => (0, T.readStaff)(e),
        ),
        [l, c] = (0, t.useState)(!1);
      if (!R(e))
        return (0, v.jsx)(r.Card, {
          children: (0, v.jsx)(r.Copy, {
            children: (0, j.L)(
              '\u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646 \u0631\u0627 \u0641\u0642\u0637 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0648 \u0645\u062f\u06cc\u0631 \u0645\u06cc\u200c\u0628\u06cc\u0646\u0646\u062f.',
            ),
          }),
        });
      const f = a.data;
      return (0, v.jsxs)(o.default, {
        style: { gap: 12 },
        children: [
          !!a.error &&
            !f &&
            (0, v.jsx)(r.Copy, {
              accessibilityRole: 'alert',
              style: { color: s.danger },
              children: (0, j.L)(
                '\u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646 \u0628\u0627\u0632 \u0646\u0634\u062f: {reason}',
                { reason: a.error },
              ),
            }),
          (0, v.jsxs)(r.Card, {
            testID: 'staff-owed-total',
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 10,
              padding: 16,
            },
            children: [
              (0, v.jsxs)(o.default, {
                style: { flex: 1, minWidth: 0, gap: 2 },
                children: [
                  (0, v.jsx)(r.Copy, {
                    style: { fontSize: 13, color: s.muted },
                    children: (0, j.L)(
                      '\u062c\u0645\u0639 \u0637\u0644\u0628 \u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646 \u0627\u0632 \u0645\u063a\u0627\u0632\u0647',
                    ),
                  }),
                  (0, v.jsxs)(r.Copy, {
                    testID: 'staff-owed-amount',
                    style: {
                      fontSize: 24,
                      lineHeight: 38,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: [
                      f ? V(f.owedToman) : '\u2026',
                      ' ',
                      (0, v.jsx)(r.Copy, {
                        style: { fontSize: 14, color: s.muted },
                        children: (0, b.shopUnitText)(
                          (0, j.L)('\u062a\u0648\u0645\u0627\u0646'),
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              !!f?.owedCount &&
                (0, v.jsx)(M, {
                  tone: 'warning',
                  text: (0, j.L)(
                    '{n} \u0646\u0641\u0631 \u0637\u0644\u0628 \u062f\u0627\u0631\u0646\u062f',
                    { n: (0, j.localDigits)(f.owedCount) },
                  ),
                }),
            ],
          }),
          f &&
            !f.people.length &&
            (0, v.jsxs)(r.Card, {
              testID: 'staff-empty',
              style: { alignItems: 'center', gap: 6, padding: 16 },
              children: [
                (0, v.jsx)(i.Icon, { name: 'user', size: 28, color: s.muted }),
                (0, v.jsx)(r.Copy, {
                  style: {
                    fontSize: 14,
                    lineHeight: 24,
                    textAlign: 'center',
                    color: s.muted,
                  },
                  children: (0, j.L)(
                    '\u0647\u0646\u0648\u0632 \u06a9\u0633\u06cc \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u0646\u06a9\u0631\u062f\u0647\u200c\u0627\u06cc. \u062d\u0642\u0648\u0642\u060c \u067e\u0631\u062f\u0627\u062e\u062a \u0648 \u0645\u0633\u0627\u0639\u062f\u0647\u0654 \u0647\u0631 \u0646\u0641\u0631 \u0627\u06cc\u0646\u062c\u0627 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                  ),
                }),
              ],
            }),
          !!f?.people.length &&
            (0, v.jsx)(r.Card, {
              testID: 'staff-people',
              style: { paddingVertical: 0, paddingHorizontal: 14 },
              children: f.people.map((e, t) =>
                (0, v.jsx)(
                  E,
                  {
                    person: e,
                    first: 0 === t,
                    onPress: () => F({ staffPart: 'money', personId: e.id }),
                  },
                  e.id,
                ),
              ),
            }),
          (0, v.jsxs)(n.default, {
            testID: 'staff-add',
            accessibilityRole: 'button',
            onPress: () => c(!0),
            style: ({ pressed: e }) => ({
              alignItems: 'center',
              gap: 4,
              paddingVertical: 18,
              borderRadius: 22,
              borderWidth: 1.5,
              borderStyle: 'dashed',
              borderColor: s.accent,
              opacity: e ? 0.8 : 1,
            }),
            children: [
              (0, v.jsx)(r.Copy, {
                style: {
                  fontSize: 17,
                  lineHeight: 26,
                  color: s.accent,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: (0, j.L)(
                  '+ \u06a9\u0627\u0631\u0645\u0646\u062f \u062a\u0627\u0632\u0647',
                ),
              }),
              (0, v.jsx)(r.Copy, {
                style: { fontSize: 12.5, color: s.muted },
                children: (0, j.L)(
                  '\u0641\u0642\u0637 \u0646\u0627\u0645 \u0648 \u0634\u0645\u0627\u0631\u0647\u061b \u0644\u0627\u0632\u0645 \u0646\u06cc\u0633\u062a \u0648\u0627\u0631\u062f \u0627\u067e \u0634\u0648\u062f',
                ),
              }),
            ],
          }),
          (0, v.jsx)(q, {
            testID: 'staff-rates',
            icon: '%',
            title: (0, j.L)(
              '\u062a\u0646\u0638\u06cc\u0645 \u062f\u0631\u0635\u062f\u0647\u0627 \u0648 \u0645\u0632\u0627\u06cc\u0627',
            ),
            sub: (0, j.L)(
              '\u0628\u06cc\u0645\u0647\u060c \u0645\u0627\u0644\u06cc\u0627\u062a\u060c \u062d\u0642 \u0645\u0633\u06a9\u0646\u060c \u0628\u0646\u060c \u0627\u0648\u0644\u0627\u062f\u061b \u0628\u0631\u0627\u06cc \u0641\u06cc\u0634 \u062d\u0642\u0648\u0642\u06cc',
            ),
            onPress: () => F({ staffPart: 'money', staffView: 'rates' }),
          }),
          !!f?.formerCount &&
            (0, v.jsx)(n.default, {
              testID: 'staff-former',
              accessibilityRole: 'button',
              onPress: () => F({ staffPart: 'money', staffView: 'former' }),
              style: {
                alignSelf: 'center',
                minHeight: 40,
                justifyContent: 'center',
              },
              children: (0, v.jsx)(r.Copy, {
                style: { fontSize: 13, color: s.accent },
                children: (0, j.L)(
                  '\u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646 \u0642\u0628\u0644\u06cc ({n})',
                  { n: (0, j.localDigits)(f.formerCount) },
                ),
              }),
            }),
          (0, v.jsx)($, {
            shop: e,
            visible: l,
            members: f?.members || [],
            onClose: () => c(!1),
            onMade: (e) => {
              (c(!1), a.reload(), F({ staffPart: 'money', personId: e }));
            },
          }),
        ],
      });
    }
    function E({ person: e, first: t, onPress: a }) {
      const { colors: l } = (0, h.useTheme)();
      return (0, v.jsxs)(n.default, {
        testID: 'staff-person-' + e.id,
        accessibilityRole: 'button',
        accessibilityLabel: e.name,
        onPress: a,
        style: ({ pressed: e }) => ({
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 12,
          paddingVertical: 14,
          borderTopWidth: t ? 0 : s.default.hairlineWidth,
          borderColor: l.line,
          opacity: e ? 0.75 : 1,
        }),
        children: [
          (0, v.jsx)(A, { name: e.name }),
          (0, v.jsxs)(o.default, {
            style: { flex: 1, minWidth: 0, gap: 4 },
            children: [
              (0, v.jsx)(r.Copy, {
                numberOfLines: 1,
                style: {
                  fontSize: 16,
                  lineHeight: 25,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: e.name,
              }),
              (0, v.jsxs)(o.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 6,
                },
                children: [
                  e.userId
                    ? (0, v.jsx)(M, {
                        tone: 'accent',
                        text:
                          e.jobTitle ||
                          (0, j.L)(
                            '\u0648\u0627\u0631\u062f \u0627\u067e \u0645\u06cc\u200c\u0634\u0648\u062f',
                          ),
                      })
                    : (0, v.jsx)(M, {
                        tone: 'muted',
                        text: e.jobTitle
                          ? e.jobTitle +
                            ' \xb7 ' +
                            (0, j.L)('\u0628\u062f\u0648\u0646 \u0627\u067e')
                          : (0, j.L)(
                              '\u0641\u0642\u0637 \u062d\u0633\u0627\u0628\u060c \u0628\u062f\u0648\u0646 \u0627\u067e',
                            ),
                      }),
                  !!e.payDay &&
                    (0, v.jsx)(r.Copy, {
                      style: { fontSize: 12, color: l.muted },
                      children: (0, j.L)(
                        '\u0631\u0648\u0632 \u062d\u0642\u0648\u0642: {day}',
                        { day: (0, j.localDigits)(e.payDay) },
                      ),
                    }),
                  !!e.endedOn &&
                    (0, v.jsx)(r.Copy, {
                      style: { fontSize: 12, color: l.muted },
                      children: (0, j.L)('\u062a\u0627 {date}', {
                        date: (0, L.jalaliDayTitle)(e.endedOn),
                      }),
                    }),
                ],
              }),
            ],
          }),
          (0, v.jsx)(U, { person: e, testID: 'staff-status-' + e.id }),
          (0, v.jsx)(i.Icon, { name: 'chevron', size: 16, color: l.muted }),
        ],
      });
    }
    function q({
      icon: e,
      title: t,
      sub: s,
      onPress: a,
      testID: l,
      danger: c = !1,
    }) {
      const { colors: f } = (0, h.useTheme)(),
        u = c ? f.danger : f.accent;
      return (0, v.jsx)(n.default, {
        testID: l,
        accessibilityRole: 'button',
        onPress: a,
        style: ({ pressed: e }) => ({ opacity: e ? 0.8 : 1 }),
        children: (0, v.jsxs)(r.Card, {
          style: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 12,
            padding: 14,
          },
          children: [
            (0, v.jsx)(o.default, {
              style: {
                width: 44,
                height: 44,
                borderRadius: 14,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: c ? B(f.danger, '22') : f.accentSoft,
              },
              children:
                '%' === e
                  ? (0, v.jsx)(r.Copy, {
                      style: {
                        fontSize: 20,
                        color: u,
                        fontFamily: 'Vazirmatn_700Bold',
                      },
                      children: '\u066a',
                    })
                  : (0, v.jsx)(i.Icon, { name: e, size: 21, color: u }),
            }),
            (0, v.jsxs)(o.default, {
              style: { flex: 1, minWidth: 0 },
              children: [
                (0, v.jsx)(r.Copy, {
                  numberOfLines: 1,
                  style: {
                    fontSize: 15.5,
                    lineHeight: 24,
                    fontFamily: 'Vazirmatn_700Bold',
                    color: c ? f.danger : f.text,
                  },
                  children: t,
                }),
                !!s &&
                  (0, v.jsx)(r.Copy, {
                    numberOfLines: 2,
                    style: { fontSize: 12, lineHeight: 18, color: f.muted },
                    children: s,
                  }),
              ],
            }),
            (0, v.jsx)(i.Icon, { name: 'chevron', size: 16, color: f.muted }),
          ],
        }),
      });
    }
    function K({ shop: e }) {
      const { colors: t } = (0, h.useTheme)(),
        n = (0, x.useSwr)((0, x.scoped)(e.id, 'staff-money:former'), () =>
          (0, T.readStaff)(e, !0),
        );
      return (0, v.jsxs)(o.default, {
        testID: 'staff-former-list',
        style: { gap: 10 },
        children: [
          (0, v.jsx)(G, {
            label: (0, j.L)(
              '\u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646 \u0641\u0639\u0644\u06cc',
            ),
            onPress: () => F({ staffPart: 'money' }),
          }),
          (0, v.jsx)(r.Copy, {
            style: { fontSize: 13, color: t.muted },
            children: (0, j.L)(
              '\u0647\u0645\u06a9\u0627\u0631\u06cc \u0627\u06cc\u0646\u200c\u0647\u0627 \u062a\u0645\u0627\u0645 \u0634\u062f\u0647\u061b \u062d\u0633\u0627\u0628\u0634\u0627\u0646 \u0628\u0631\u0627\u06cc \u0633\u0627\u0628\u0642\u0647 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
            ),
          }),
          !!n.data?.people.length &&
            (0, v.jsx)(r.Card, {
              style: { paddingVertical: 0, paddingHorizontal: 14 },
              children: n.data.people.map((e, t) =>
                (0, v.jsx)(
                  E,
                  {
                    person: e,
                    first: 0 === t,
                    onPress: () =>
                      F({ staffPart: 'money', personId: e.id, from: 'people' }),
                  },
                  e.id,
                ),
              ),
            }),
        ],
      });
    }
    function G({ label: e, onPress: t }) {
      const { colors: s } = (0, h.useTheme)();
      return (0, v.jsx)(o.default, {
        style: { flexDirection: 'row-reverse' },
        children: (0, v.jsxs)(n.default, {
          testID: 'staff-back',
          accessibilityRole: 'button',
          onPress: t,
          hitSlop: 8,
          style: ({ pressed: e }) => ({
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 4,
            minHeight: 36,
            opacity: e ? 0.6 : 1,
          }),
          children: [
            (0, v.jsx)(i.Icon, { name: 'arrow', size: 16, color: s.accent }),
            (0, v.jsx)(r.Copy, {
              style: { fontSize: 13, color: s.accent },
              children: e,
            }),
          ],
        }),
      });
    }
    const J = [
      '\u0641\u0631\u0648\u0634\u0646\u062f\u0647',
      '\u0627\u0646\u0628\u0627\u0631\u062f\u0627\u0631',
      '\u062d\u0633\u0627\u0628\u062f\u0627\u0631',
      '\u0635\u0646\u062f\u0648\u0642\u062f\u0627\u0631',
      '\u067e\u06cc\u06a9',
    ];
    function $({ shop: e, visible: a, members: l, onClose: i, onMade: f }) {
      const { colors: y } = (0, h.useTheme)(),
        [m, p] = (0, t.useState)(''),
        [x, b] = (0, t.useState)(''),
        [S, L] = (0, t.useState)(''),
        [C, I] = (0, t.useState)(null),
        [D, z] = (0, t.useState)(!1),
        [w, P] = (0, t.useState)('');
      async function V() {
        if (m.trim()) {
          (z(!0), P(''));
          try {
            const t = await (0, T.createStaffPerson)(e, {
              name: m.trim(),
              ...(x.trim() ? { phone: x.trim() } : {}),
              ...(S.trim() ? { jobTitle: S.trim() } : {}),
              ...(C ? { userId: C } : {}),
            });
            ((0, u.showToast)(
              (0, j.L)('{name} \u0627\u0636\u0627\u0641\u0647 \u0634\u062f', {
                name: t.person.name,
              }),
            ),
              f(t.person.id));
          } catch (e) {
            P(_(e));
          } finally {
            z(!1);
          }
        } else
          P(
            (0, j.L)(
              '\u0646\u0627\u0645 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            ),
          );
      }
      (0, t.useEffect)(() => {
        a && (p(''), b(''), L(''), I(null), P(''));
      }, [a]);
      const k = {
        fontSize: 13,
        lineHeight: 20,
        fontFamily: 'Vazirmatn_600SemiBold',
      };
      return (0, v.jsx)(c.Sheet, {
        visible: a,
        title: (0, j.L)(
          '\u06a9\u0627\u0631\u0645\u0646\u062f \u062a\u0627\u0632\u0647',
        ),
        onClose: i,
        onSubmit: () => {
          D || V();
        },
        busy: D,
        footer: (0, v.jsx)(r.Button, {
          testID: 'staff-new-save',
          disabled: D,
          onPress: V,
          children: D
            ? (0, j.L)(
                '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
              )
            : (0, j.L)('\u0627\u0641\u0632\u0648\u062f\u0646'),
        }),
        children: (0, v.jsxs)(o.default, {
          testID: 'staff-new-sheet',
          style: { gap: 12 },
          children: [
            !!l.length &&
              (0, v.jsxs)(o.default, {
                style: { gap: 6 },
                children: [
                  (0, v.jsx)(r.Copy, {
                    style: k,
                    children: (0, j.L)(
                      '\u0627\u0632 \u06a9\u0633\u0627\u0646\u06cc \u06a9\u0647 \u0648\u0627\u0631\u062f \u0627\u067e \u0645\u06cc\u200c\u0634\u0648\u0646\u062f',
                    ),
                  }),
                  (0, v.jsx)(o.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      flexWrap: 'wrap',
                      gap: 8,
                    },
                    children: l.map((e) => {
                      const t = C === e.userId;
                      return (0, v.jsx)(
                        n.default,
                        {
                          testID: 'staff-new-member-' + e.userId,
                          accessibilityRole: 'radio',
                          accessibilityState: { selected: t },
                          onPress: () => {
                            t
                              ? I(null)
                              : (I(e.userId),
                                p(e.name),
                                e.roleName && L(e.roleName));
                          },
                          style: {
                            paddingHorizontal: 12,
                            paddingVertical: 8,
                            borderRadius: 14,
                            borderWidth: t ? 2 : s.default.hairlineWidth,
                            borderColor: t ? y.accent : y.line,
                            backgroundColor: t ? y.accentSoft : y.surface,
                          },
                          children: (0, v.jsx)(r.Copy, {
                            style: { fontSize: 13 },
                            children:
                              e.name ||
                              (0, j.L)('\u0628\u06cc\u200c\u0646\u0627\u0645'),
                          }),
                        },
                        e.userId,
                      );
                    }),
                  }),
                ],
              }),
            (0, v.jsxs)(o.default, {
              style: { gap: 6 },
              children: [
                (0, v.jsx)(r.Copy, {
                  style: k,
                  children: (0, j.L)('\u0646\u0627\u0645'),
                }),
                (0, v.jsx)(r.Input, {
                  testID: 'staff-new-name',
                  value: m,
                  onChangeText: p,
                  maxLength: 80,
                  placeholder: (0, j.L)(
                    '\u0645\u062b\u0644\u0627\u064b \u0639\u0644\u06cc \u0631\u0636\u0627\u06cc\u06cc',
                  ),
                }),
              ],
            }),
            (0, v.jsxs)(o.default, {
              style: { gap: 6 },
              children: [
                (0, v.jsx)(r.Copy, {
                  style: k,
                  children: (0, j.L)(
                    '\u0634\u0645\u0627\u0631\u0647 \u0645\u0648\u0628\u0627\u06cc\u0644 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                  ),
                }),
                (0, v.jsx)(r.Input, {
                  testID: 'staff-new-phone',
                  value: x,
                  onChangeText: b,
                  keyboardType: 'phone-pad',
                  inputMode: 'tel',
                  maxLength: 20,
                  ltr: !0,
                  placeholder: '0912\u2026',
                }),
              ],
            }),
            (0, v.jsxs)(o.default, {
              style: { gap: 6 },
              children: [
                (0, v.jsx)(r.Copy, {
                  style: k,
                  children: (0, j.L)(
                    '\u06a9\u0627\u0631 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                  ),
                }),
                (0, v.jsx)(r.Input, {
                  testID: 'staff-new-job',
                  value: S,
                  onChangeText: L,
                  maxLength: 30,
                  placeholder: (0, j.L)(
                    '\u0645\u062b\u0644\u0627\u064b \u0641\u0631\u0648\u0634\u0646\u062f\u0647',
                  ),
                }),
                (0, v.jsx)(o.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap',
                    gap: 6,
                  },
                  children: J.map((e) =>
                    (0, v.jsx)(
                      n.default,
                      {
                        onPress: () => L((0, j.L)(e)),
                        style: {
                          paddingHorizontal: 10,
                          paddingVertical: 5,
                          borderRadius: 12,
                          backgroundColor: y.soft,
                        },
                        children: (0, v.jsx)(r.Copy, {
                          style: { fontSize: 12 },
                          children: (0, j.L)(e),
                        }),
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            !!w &&
              (0, v.jsx)(r.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, color: y.danger },
                children: w,
              }),
          ],
        }),
      });
    }
    function Q({ shop: e, id: s, onBack: a }) {
      const { colors: i } = (0, h.useTheme)(),
        c = (0, x.useSwr)((0, x.scoped)(e.id, 'staff-account:' + s), () =>
          (0, T.readStaffAccount)(e, s),
        ),
        [y, m] = (0, t.useState)(null),
        [p, S] = (0, t.useState)(!1),
        [C, I] = (0, f.useConfirm)(),
        D = c.data,
        z = D?.person,
        w = () => {
          c.reload();
        },
        P = () => {
          (m(null), w());
        };
      if (!D || !z)
        return (0, v.jsxs)(o.default, {
          style: { gap: 10 },
          children: [
            (0, v.jsx)(G, {
              label: (0, j.L)(
                '\u0647\u0645\u0647\u0654 \u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646',
              ),
              onPress: a,
            }),
            c.error
              ? (0, v.jsx)(r.Copy, {
                  accessibilityRole: 'alert',
                  style: { color: i.danger },
                  children: _(Error(c.error)),
                })
              : (0, v.jsx)(r.Copy, {
                  style: { color: i.muted },
                  children: (0, j.L)(
                    '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc\u2026',
                  ),
                }),
          ],
        });
      const k = !!z.endedOn,
        B = p ? D.lines : D.lines.slice(0, 6),
        H = (0, L.periodOf)(D.today),
        R =
          'owes' === z.status
            ? (0, j.L)(
                '\u0645\u0627\u0646\u062f\u0647\u061b {name} \u0628\u0647 \u0645\u063a\u0627\u0632\u0647 \u0628\u062f\u0647\u06a9\u0627\u0631 \u0627\u0633\u062a',
                { name: X(z.name) },
              )
            : 'settled' === z.status
              ? (0, j.L)(
                  '\u062d\u0633\u0627\u0628 {name} \u062a\u0633\u0648\u06cc\u0647 \u0627\u0633\u062a',
                  { name: X(z.name) },
                )
              : (0, j.L)(
                  '\u0645\u0627\u0646\u062f\u0647\u061b \u0645\u063a\u0627\u0632\u0647 \u0628\u0647 {name} \u0628\u062f\u0647\u06a9\u0627\u0631 \u0627\u0633\u062a',
                  { name: X(z.name) },
                );
      function W(t) {
        C({
          title: (0, j.L)(
            '\u062d\u0630\u0641 \u0627\u06cc\u0646 \u0631\u062f\u06cc\u0641',
          ),
          text:
            (0, b.shopUnitText)(
              (0, j.L)(
                '\xab{kind}\xbb\u060c {amount} \u062a\u0648\u0645\u0627\u0646 \u0627\u0632 \u062d\u0633\u0627\u0628 \u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0634\u0648\u062f\u061f',
                { kind: L.staffKindFa[t.kind], amount: V(t.amountToman) },
              ),
            ) +
            ('payment' === t.kind || 'advance' === t.kind
              ? ' ' +
                (0, j.L)(
                  '\u0647\u0632\u06cc\u0646\u0647\u0654 \u0622\u0646 \u0647\u0645 \u0627\u0632 \xab\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\xbb \u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                )
              : ''),
          ok: (0, j.L)('\u062d\u0630\u0641'),
          tone: 'danger',
          run: async () => {
            try {
              (await (0, T.deleteStaffLine)(e, t.id),
                (0, u.showToast)(
                  (0, j.L)(
                    '\u0631\u062f\u06cc\u0641 \u062d\u0630\u0641 \u0634\u062f',
                  ),
                ),
                w());
            } catch (e) {
              (0, u.showToast)(_(e));
            }
          },
        });
      }
      return (0, v.jsxs)(o.default, {
        testID: 'staff-account',
        style: { gap: 14 },
        children: [
          (0, v.jsx)(G, {
            label: k
              ? (0, j.L)(
                  '\u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646 \u0642\u0628\u0644\u06cc',
                )
              : (0, j.L)(
                  '\u0647\u0645\u0647\u0654 \u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646',
                ),
            onPress: a,
          }),
          (0, v.jsxs)(o.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 12,
            },
            children: [
              (0, v.jsx)(A, { name: z.name, size: 56 }),
              (0, v.jsxs)(o.default, {
                style: { flex: 1, minWidth: 0 },
                children: [
                  (0, v.jsx)(r.Copy, {
                    testID: 'staff-account-name',
                    numberOfLines: 1,
                    style: {
                      fontSize: 22,
                      lineHeight: 34,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: z.name,
                  }),
                  (0, v.jsx)(r.Copy, {
                    numberOfLines: 1,
                    style: { fontSize: 13, color: i.muted },
                    children:
                      [
                        z.jobTitle,
                        z.salaryToman
                          ? (0, j.L)(
                              '\u062d\u0642\u0648\u0642 {amount} \u0645\u0627\u0647\u0627\u0646\u0647',
                              { amount: V(z.salaryToman) },
                            )
                          : '',
                        k
                          ? (0, j.L)(
                              '\u0647\u0645\u06a9\u0627\u0631\u06cc \u062a\u0645\u0627\u0645 \u0634\u062f: {date}',
                              { date: (0, L.jalaliDayTitle)(z.endedOn) },
                            )
                          : '',
                      ]
                        .filter(Boolean)
                        .join(' \xb7 ') ||
                      (0, j.L)(
                        '\u0628\u062f\u0648\u0646 \u062d\u0642\u0648\u0642 \u0645\u0627\u0647\u0627\u0646\u0647',
                      ),
                  }),
                ],
              }),
            ],
          }),
          (0, v.jsxs)(l.LinearGradient, {
            testID: 'staff-balance-card',
            colors: ['#0f5f58', '#0b7c80'],
            start: { x: 1, y: 0 },
            end: { x: 0, y: 1 },
            style: {
              borderRadius: 26,
              padding: 18,
              gap: 12,
              borderWidth: 1,
              borderColor: '#2a8f88',
            },
            children: [
              (0, v.jsx)(r.Copy, {
                style: { fontSize: 14, color: '#e6f4f2' },
                children: R,
              }),
              (0, v.jsxs)(r.Copy, {
                testID: 'staff-balance',
                style: {
                  fontSize: 36,
                  lineHeight: 52,
                  color: '#ffffff',
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: [
                  V(Math.abs(z.balance)),
                  ' ',
                  (0, v.jsx)(r.Copy, {
                    style: { fontSize: 16, color: '#e6f4f2' },
                    children: (0, b.shopUnitText)(
                      (0, j.L)('\u062a\u0648\u0645\u0627\u0646'),
                    ),
                  }),
                ],
              }),
              (0, v.jsx)(o.default, {
                style: {
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: '#ffffff33',
                  overflow: 'hidden',
                  flexDirection: 'row',
                },
                children: (0, v.jsx)(o.default, {
                  style: {
                    width: `${z.paidShare}%`,
                    backgroundColor: '#ffffff',
                    borderRadius: 6,
                  },
                }),
              }),
              (0, v.jsxs)(o.default, {
                style: {
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                },
                children: [
                  (0, v.jsx)(Y, {
                    label: (0, j.L)('\u06a9\u0644 \u0637\u0644\u0628'),
                    value: V(z.total),
                  }),
                  (0, v.jsx)(Y, {
                    label: (0, j.L)(
                      '\u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f\u0647',
                    ),
                    value: V(z.paid),
                    center: !0,
                  }),
                  (0, v.jsx)(Y, {
                    label: (0, j.localDigits)(z.paidShare) + '\u066a',
                    value: (0, j.L)(
                      '\u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f',
                    ),
                    end: !0,
                  }),
                ],
              }),
            ],
          }),
          !k &&
            (0, v.jsxs)(o.default, {
              style: { flexDirection: 'row-reverse', gap: 8 },
              children: [
                (0, v.jsx)(Z, {
                  testID: 'staff-key-plus',
                  sign: '+',
                  title: (0, j.L)(
                    '\u0637\u0644\u0628 \u062a\u0627\u0632\u0647',
                  ),
                  sub: (0, j.L)(
                    '\u062d\u0642\u0648\u0642\u060c \u067e\u0627\u062f\u0627\u0634',
                  ),
                  tone: 'accent',
                  onPress: () => m('line-plus'),
                }),
                (0, v.jsx)(Z, {
                  testID: 'staff-key-pay',
                  sign: '\u2212',
                  title: (0, j.L)('\u067e\u0631\u062f\u0627\u062e\u062a'),
                  sub: (0, j.L)(
                    '\u067e\u0631\u062f\u0627\u062e\u062a\u060c \u0645\u0633\u0627\u0639\u062f\u0647',
                  ),
                  tone: 'danger',
                  onPress: () => m('line-pay'),
                }),
                (0, v.jsx)(Z, {
                  testID: 'staff-key-cut',
                  sign: '\u2212',
                  title: (0, j.L)('\u06a9\u0633\u0631'),
                  sub: (0, j.L)(
                    '\u06a9\u0633\u0631 \u0627\u0632 \u062d\u0642\u0648\u0642',
                  ),
                  tone: 'dangerOutline',
                  onPress: () => m('line-cut'),
                }),
              ],
            }),
          (0, v.jsxs)(o.default, {
            style: [r.common.between, { paddingHorizontal: 2 }],
            children: [
              (0, v.jsx)(r.Copy, {
                style: {
                  fontSize: 18,
                  lineHeight: 28,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: (0, j.L)(
                  '\u0631\u06cc\u0632 \u062d\u0633\u0627\u0628',
                ),
              }),
              D.lines.length > 6 &&
                (0, v.jsx)(n.default, {
                  testID: 'staff-lines-all',
                  onPress: () => S((e) => !e),
                  hitSlop: 8,
                  children: (0, v.jsx)(r.Copy, {
                    style: { fontSize: 13, color: i.accent },
                    children: p
                      ? (0, j.L)('\u06a9\u0645\u062a\u0631')
                      : (0, j.L)('\u0647\u0645\u0647 \u203a'),
                  }),
                }),
            ],
          }),
          !D.lines.length &&
            (0, v.jsx)(r.Copy, {
              style: {
                fontSize: 13,
                color: i.muted,
                textAlign: 'center',
                paddingVertical: 8,
              },
              children: (0, j.L)(
                '\u0647\u0646\u0648\u0632 \u0631\u062f\u06cc\u0641\u06cc \u0646\u06cc\u0633\u062a. \u062d\u0642\u0648\u0642\u060c \u067e\u0627\u062f\u0627\u0634 \u06cc\u0627 \u067e\u0631\u062f\u0627\u062e\u062a \u0631\u0627 \u0628\u0627 \u062f\u06a9\u0645\u0647\u200c\u0647\u0627\u06cc \u0628\u0627\u0644\u0627 \u062b\u0628\u062a \u06a9\u0646.',
              ),
            }),
          !!B.length &&
            (0, v.jsx)(r.Card, {
              testID: 'staff-lines',
              style: { paddingVertical: 0, paddingHorizontal: 14 },
              children: B.map((e, t) =>
                (0, v.jsx)(
                  ee,
                  { line: e, first: 0 === t, onLong: k ? void 0 : () => W(e) },
                  e.id,
                ),
              ),
            }),
          !!D.lines.length &&
            !k &&
            (0, v.jsx)(r.Copy, {
              style: { fontSize: 11, color: i.muted, textAlign: 'center' },
              children: (0, j.L)(
                '\u0628\u0631\u0627\u06cc \u062d\u0630\u0641 \u06cc\u06a9 \u0631\u062f\u06cc\u0641 \u0627\u0634\u062a\u0628\u0627\u0647\u060c \u0622\u0646 \u0631\u0627 \u0644\u0645\u0633 \u06a9\u0646.',
              ),
            }),
          (0, v.jsx)(q, {
            testID: 'staff-payslip',
            icon: 'receipt',
            title: (0, j.L)(
              '\u0641\u06cc\u0634 \u062d\u0642\u0648\u0642\u06cc {month}',
              { month: (0, L.periodTitle)(H) },
            ),
            sub: (0, j.L)(
              '\u0645\u0632\u0627\u06cc\u0627\u060c \u06a9\u0633\u0648\u0631\u0627\u062a\u060c \u062e\u0627\u0644\u0635 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc',
            ),
            onPress: () =>
              F({
                staffPart: 'money',
                personId: z.id,
                staffView: 'payslip',
                period: H,
              }),
          }),
          !k &&
            (0, v.jsx)(q, {
              testID: 'staff-salary',
              icon: 'clock',
              title: (0, j.L)(
                '\u062d\u0642\u0648\u0642 \u0645\u0627\u0647\u0627\u0646\u0647 \u0648 \u0631\u0648\u0632 \u062d\u0642\u0648\u0642',
              ),
              sub: z.salaryToman
                ? [
                    V(z.salaryToman) +
                      ' ' +
                      (0, b.shopUnitText)(
                        (0, j.L)('\u062a\u0648\u0645\u0627\u0646'),
                      ),
                    z.payDay
                      ? (0, j.L)(
                          '\u0631\u0648\u0632 {day} \u0647\u0631 \u0645\u0627\u0647',
                          { day: (0, j.localDigits)(z.payDay) },
                        )
                      : '',
                    z.autoSalary
                      ? (0, j.L)('\u062e\u0648\u062f\u06a9\u0627\u0631')
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' \xb7 ')
                : (0, j.L)(
                    '\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc\u061b \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0645\u0646\u062f \u0631\u0648\u0632\u0645\u0632\u062f \u062e\u0627\u0645\u0648\u0634 \u0628\u0645\u0627\u0646\u062f',
                  ),
              onPress: () => m('salary'),
            }),
          !k &&
            !!z.salaryToman &&
            (0, v.jsx)(q, {
              testID: 'staff-change',
              icon: 'chart',
              title: (0, j.L)(
                '\u0627\u0641\u0632\u0627\u06cc\u0634 \u06cc\u0627 \u06a9\u0627\u0647\u0634 \u062d\u0642\u0648\u0642',
              ),
              sub: (0, j.L)(
                '\u0628\u0627 \u062f\u0631\u0635\u062f \u06cc\u0627 \u0645\u0628\u0644\u063a\u061b \u0641\u0642\u0637 \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647 \u06cc\u0627 \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f',
              ),
              onPress: () => m('change'),
            }),
          !k &&
            (0, v.jsx)(q, {
              testID: 'staff-end',
              icon: 'close',
              danger: !0,
              title: (0, j.L)(
                '\u067e\u0627\u06cc\u0627\u0646 \u0647\u0645\u06a9\u0627\u0631\u06cc',
              ),
              sub: (0, j.L)(
                '\u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628 \u0648 \u0628\u0631\u062f\u0627\u0634\u062a\u0646 \u0627\u0632 \u0641\u0647\u0631\u0633\u062a',
              ),
              onPress: () => m('end'),
            }),
          (0, v.jsx)(r.Copy, {
            style: { fontSize: 12, color: i.muted, textAlign: 'center' },
            children: (0, j.L)(
              '\u0647\u0631 \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0647 \u06a9\u0627\u0631\u0645\u0646\u062f\u060c \u062f\u0631 \xab\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\xbb \u0648 \u0633\u0648\u062f \u0647\u0645 \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u062f.',
            ),
          }),
          ('line-plus' === y || 'line-pay' === y || 'line-cut' === y) &&
            (0, v.jsx)(ne, {
              shop: e,
              account: D,
              group: y,
              onClose: () => m(null),
              onSaved: P,
            }),
          'salary' === y &&
            (0, v.jsx)(ie, {
              shop: e,
              account: D,
              onClose: () => m(null),
              onSaved: P,
            }),
          'change' === y &&
            (0, v.jsx)(de, {
              shop: e,
              account: D,
              onClose: () => m(null),
              onSaved: P,
            }),
          'end' === y &&
            (0, v.jsx)(ce, {
              shop: e,
              account: D,
              onClose: () => m(null),
              onSaved: () => {
                (m(null), a());
              },
            }),
          I,
        ],
      });
    }
    const X = (e) => e.trim().split(/\s+/)[0] || e;
    function Y({ label: e, value: t, center: n = !1, end: s = !1 }) {
      return (0, v.jsxs)(o.default, {
        style: {
          alignItems: s ? 'flex-end' : n ? 'center' : 'flex-start',
          gap: 2,
        },
        children: [
          (0, v.jsx)(r.Copy, {
            style: { fontSize: 13, color: '#d5ecea' },
            children: e,
          }),
          (0, v.jsx)(r.Copy, {
            style: {
              fontSize: 17,
              lineHeight: 26,
              color: '#ffffff',
              fontFamily: 'Vazirmatn_700Bold',
            },
            children: t,
          }),
        ],
      });
    }
    function Z({ sign: e, title: t, sub: s, tone: a, onPress: o, testID: l }) {
      const { colors: i } = (0, h.useTheme)(),
        c = 'accent' === a ? i.accent : i.danger,
        f =
          'accent' === a
            ? B(i.accent, '1f')
            : 'danger' === a
              ? B(i.danger, '26')
              : 'transparent';
      return (0, v.jsxs)(n.default, {
        testID: l,
        accessibilityRole: 'button',
        accessibilityLabel: t,
        onPress: o,
        style: ({ pressed: e }) => ({
          flex: 1,
          minWidth: 0,
          minHeight: 78,
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          paddingHorizontal: 6,
          paddingVertical: 10,
          borderRadius: 22,
          borderWidth: 1.5,
          borderColor: 'accent' === a ? i.accent : B(i.danger, 'aa'),
          backgroundColor: f,
          opacity: e ? 0.8 : 1,
        }),
        children: [
          (0, v.jsx)(r.Copy, {
            numberOfLines: 1,
            style: {
              fontSize: 18,
              lineHeight: 28,
              color: c,
              fontFamily: 'Vazirmatn_700Bold',
            },
            children: e + ' ' + t,
          }),
          (0, v.jsx)(r.Copy, {
            numberOfLines: 1,
            style: { fontSize: 11.5, lineHeight: 17, color: c },
            children: s,
          }),
        ],
      });
    }
    function ee({ line: e, first: t, onLong: a }) {
      const { colors: l } = (0, h.useTheme)(),
        i = (0, L.lineSign)(e.kind) > 0,
        c = i ? l.success : l.danger,
        f = [
          (0, L.jalaliDayTitle)(e.occurredOn),
          e.note || (e.method ? L.staffMethodFa[e.method] : ''),
          'auto' === e.source
            ? (0, j.L)('\u062e\u0648\u062f\u06a9\u0627\u0631')
            : '',
        ]
          .filter(Boolean)
          .join(' \xb7 ');
      return (0, v.jsxs)(n.default, {
        testID: 'staff-line-' + e.kind,
        accessibilityRole: a ? 'button' : 'text',
        disabled: !a,
        onPress: a,
        style: ({ pressed: e }) => ({
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 12,
          paddingVertical: 13,
          borderTopWidth: t ? 0 : s.default.hairlineWidth,
          borderColor: l.line,
          opacity: e ? 0.75 : 1,
        }),
        children: [
          (0, v.jsx)(o.default, {
            style: {
              width: 44,
              height: 44,
              borderRadius: 22,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: B(c, '26'),
            },
            children: (0, v.jsx)(r.Copy, {
              style: {
                fontSize: 20,
                lineHeight: 26,
                color: c,
                fontFamily: 'Vazirmatn_700Bold',
              },
              children: i ? '+' : '\u2212',
            }),
          }),
          (0, v.jsxs)(o.default, {
            style: { flex: 1, minWidth: 0 },
            children: [
              (0, v.jsx)(r.Copy, {
                numberOfLines: 1,
                style: {
                  fontSize: 15.5,
                  lineHeight: 24,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children:
                  'salary' === e.kind && e.detail
                    ? (0, j.L)(
                        '\u062d\u0642\u0648\u0642 (\u0641\u06cc\u0634 \u0631\u0633\u0645\u06cc)',
                      )
                    : L.staffKindFa[e.kind],
              }),
              (0, v.jsx)(r.Copy, {
                numberOfLines: 1,
                style: { fontSize: 12.5, lineHeight: 19, color: l.muted },
                children: f,
              }),
            ],
          }),
          (0, v.jsx)(r.Copy, {
            style: {
              fontSize: 16,
              lineHeight: 24,
              color: c,
              fontFamily: 'Vazirmatn_700Bold',
            },
            children: k((0, L.lineSign)(e.kind) * e.amountToman),
          }),
        ],
      });
    }
    const te = {
      'line-plus': ['salary', 'bonus'],
      'line-pay': ['payment', 'advance'],
      'line-cut': ['deduction'],
    };
    function ne({ shop: e, account: a, group: l, onClose: i, onSaved: f }) {
      const { colors: m } = (0, h.useTheme)(),
        p = a.person,
        x = a.today,
        D = [
          'salary',
          'bonus',
          'payment',
          'advance',
          'deduction',
          ...(p.balance < 0 ? ['repaid'] : []),
        ],
        [z, w] = (0, t.useState)(te[l][0]),
        [P, k] = (0, t.useState)(''),
        [F, H] = (0, t.useState)((0, I.isoToParts)(x)),
        [R, W] = (0, t.useState)(''),
        [O, M] = (0, t.useState)('cash'),
        [U, A] = (0, t.useState)(''),
        [N, E] = (0, t.useState)(!1),
        [q, K] = (0, t.useState)(''),
        [G] = (0, t.useState)(
          () =>
            Math.random().toString(36).slice(2) +
            Date.now().toString(36) +
            Math.random().toString(36).slice(2),
        ),
        J = 'salary' === z && p.formal && !!a.salary.monthToman;
      (0, t.useEffect)(() => {
        'salary' === z &&
          a.salary.monthToman &&
          !P &&
          k(String(a.salary.monthToman));
      }, [z]);
      const $ = J ? a.salary.monthToman : (0, I.parseToman)(P),
        Q = Number.isSafeInteger($) && $ > 0,
        X = p.balance + (Q ? (0, L.lineSign)(z) * $ : 0),
        Y = 'payment' === z || 'advance' === z || 'repaid' === z;
      async function Z() {
        if (Q) {
          (E(!0), K(''));
          try {
            (await (0, T.addStaffLine)(
              e,
              p.id,
              {
                kind: z,
                occurredOn: (0, I.partsToIso)(F),
                note: R.trim(),
                ...(Y ? { method: O } : {}),
                ...(J
                  ? {
                      useRules: !0,
                      overtimeHours: Number((0, j.localDigits)(U, 'en')) || 0,
                    }
                  : { amountToman: $ }),
              },
              G,
            ),
              (0, u.showToast)((0, j.L)('\u062b\u0628\u062a \u0634\u062f')),
              f());
          } catch (e) {
            K(_(e));
          } finally {
            E(!1);
          }
        } else
          K(
            (0, j.L)(
              '\u0645\u0628\u0644\u063a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            ),
          );
      }
      const ee = { fontSize: 14, lineHeight: 22, color: m.muted };
      return (0, v.jsx)(c.Sheet, {
        visible: !0,
        title: (0, j.L)('\u062b\u0628\u062a \u0628\u0631\u0627\u06cc {name}', {
          name: p.name,
        }),
        onClose: i,
        onSubmit: () => {
          N || Z();
        },
        busy: N,
        footer: (0, v.jsxs)(o.default, {
          style: { flexDirection: 'row-reverse', gap: 10 },
          children: [
            (0, v.jsx)(o.default, {
              style: { flex: 2 },
              children: (0, v.jsx)(r.Button, {
                testID: 'staff-line-save',
                disabled: N,
                onPress: Z,
                children: N
                  ? (0, j.L)(
                      '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
                    )
                  : (0, j.L)('\u062b\u0628\u062a'),
              }),
            }),
            (0, v.jsx)(o.default, {
              style: { flex: 1 },
              children: (0, v.jsx)(r.Button, {
                secondary: !0,
                wide: !0,
                onPress: i,
                children: (0, j.L)('\u0627\u0646\u0635\u0631\u0627\u0641'),
              }),
            }),
          ],
        }),
        children: (0, v.jsxs)(o.default, {
          testID: 'staff-line-sheet',
          style: { gap: 12 },
          children: [
            (0, v.jsx)(r.Copy, {
              style: { fontSize: 13, color: m.muted },
              children: (0, j.L)('\u0645\u0627\u0646\u062f\u0647: {amount}', {
                amount: V(p.balance),
              }),
            }),
            (0, v.jsx)(r.Copy, {
              style: ee,
              children: (0, j.L)('\u0686\u0647 \u0646\u0648\u0639\u06cc\u061f'),
            }),
            (0, v.jsx)(o.default, {
              style: { flexDirection: 'row-reverse', flexWrap: 'wrap', gap: 8 },
              children: D.map((e) => {
                const t = e === z,
                  a = (0, L.lineSign)(e) > 0,
                  o = a ? m.success : m.danger;
                return (0, v.jsxs)(
                  n.default,
                  {
                    testID: 'staff-kind-' + e,
                    accessibilityRole: 'radio',
                    accessibilityState: { selected: t },
                    onPress: () => {
                      (w(e),
                        'salary' !== e && k((e) => ('salary' === z ? '' : e)));
                    },
                    style: ({ pressed: e }) => ({
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 6,
                      paddingHorizontal: 16,
                      paddingVertical: 10,
                      borderRadius: 22,
                      borderWidth: t ? 2 : s.default.hairlineWidth,
                      borderColor: t ? o : m.line,
                      backgroundColor: t ? B(o, '22') : m.soft,
                      opacity: e ? 0.85 : 1,
                    }),
                    children: [
                      (0, v.jsx)(r.Copy, {
                        style: {
                          fontSize: 16,
                          color: o,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: a ? '+' : '\u2212',
                      }),
                      (0, v.jsx)(r.Copy, {
                        style: {
                          fontSize: 15,
                          fontFamily: 'Vazirmatn_700Bold',
                          color: t ? o : m.text,
                        },
                        children: L.staffKindFa[e],
                      }),
                    ],
                  },
                  e,
                );
              }),
            }),
            J
              ? (0, v.jsxs)(r.Card, {
                  style: { gap: 6, padding: 12 },
                  children: [
                    (0, v.jsx)(r.Copy, {
                      style: { fontSize: 13 },
                      children: (0, b.shopUnitText)(
                        (0, j.L)(
                          '\u062d\u0642\u0648\u0642 \u0627\u06cc\u0646 \u0645\u0627\u0647 \u0637\u0628\u0642 \u0641\u06cc\u0634 \u0631\u0633\u0645\u06cc: {amount} \u062a\u0648\u0645\u0627\u0646 (\u0628\u0639\u062f \u0627\u0632 \u0628\u06cc\u0645\u0647 \u0648 \u0645\u0627\u0644\u06cc\u0627\u062a)',
                          { amount: V(a.salary.monthToman) },
                        ),
                      ),
                    }),
                    (0, v.jsx)(r.Copy, {
                      style: ee,
                      children: (0, j.L)(
                        '\u0627\u0636\u0627\u0641\u0647\u200c\u06a9\u0627\u0631 \u0627\u06cc\u0646 \u0645\u0627\u0647 (\u0633\u0627\u0639\u062a\u060c \u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                      ),
                    }),
                    (0, v.jsx)(r.Input, {
                      testID: 'staff-line-hours',
                      value: (0, j.localDigits)(U),
                      onChangeText: (e) =>
                        A(e.replace(/[^0-9\u06f0-\u06f9.]/g, '').slice(0, 5)),
                      keyboardType: 'decimal-pad',
                      inputMode: 'decimal',
                      placeholder: (0, j.localDigits)('0'),
                    }),
                  ],
                })
              : (0, v.jsxs)(o.default, {
                  style: { gap: 6 },
                  children: [
                    (0, v.jsx)(r.Copy, {
                      style: ee,
                      children: (0, j.L)('\u0645\u0628\u0644\u063a'),
                    }),
                    (0, v.jsx)(C.MoneyInput, {
                      testID: 'staff-line-amount',
                      value: P,
                      onChange: k,
                      money: !0,
                      suffix: (0, b.shopUnitText)(
                        (0, j.L)('\u062a\u0648\u0645\u0627\u0646'),
                      ),
                      placeholder: (0, j.L)(
                        '\u0645\u062b\u0644\u0627\u064b \u06f2\u066c\u06f0\u06f0\u06f0\u066c\u06f0\u06f0\u06f0',
                      ),
                    }),
                    Q &&
                      'fa' === (0, j.localeLang)() &&
                      (0, v.jsx)(r.Copy, {
                        style: { fontSize: 13, color: m.muted },
                        children:
                          (0, S.numberWords)((0, b.localAmount)($)) +
                          ' ' +
                          (0, b.tomanWord)(),
                      }),
                  ],
                }),
            Y &&
              (0, v.jsxs)(o.default, {
                style: { gap: 6 },
                children: [
                  (0, v.jsx)(r.Copy, {
                    style: ee,
                    children: (0, j.L)('\u0686\u0637\u0648\u0631\u061f'),
                  }),
                  (0, v.jsx)(r.Segmented, {
                    value: O,
                    onChange: M,
                    items: L.STAFF_METHODS.map((e) => ({
                      value: e,
                      label: L.staffMethodFa[e],
                      testID: 'staff-method-' + e,
                    })),
                  }),
                ],
              }),
            (0, v.jsxs)(o.default, {
              style: { gap: 6 },
              children: [
                (0, v.jsx)(r.Copy, {
                  style: ee,
                  children: (0, j.L)('\u062a\u0627\u0631\u06cc\u062e'),
                }),
                (0, v.jsx)(y.JalaliDateField, {
                  id: 'staff-line-date',
                  dateOnly: !0,
                  quick: 'past',
                  value: F,
                  onChange: H,
                }),
              ],
            }),
            (0, v.jsxs)(o.default, {
              style: { gap: 6 },
              children: [
                (0, v.jsx)(r.Copy, {
                  style: ee,
                  children: (0, j.L)(
                    '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a',
                  ),
                }),
                (0, v.jsx)(r.Input, {
                  testID: 'staff-line-note',
                  value: R,
                  onChangeText: W,
                  maxLength: 200,
                  placeholder: (0, j.L)(
                    '\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc',
                  ),
                }),
              ],
            }),
            (0, v.jsxs)(o.default, {
              style: {
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: 14,
                borderRadius: 18,
                borderWidth: 1,
                borderColor: m.warningBorder,
                backgroundColor: m.warningSoft,
              },
              children: [
                (0, v.jsx)(r.Copy, {
                  style: { fontSize: 14, color: m.warning },
                  children: (0, j.L)(
                    '\u0645\u0627\u0646\u062f\u0647 \u0628\u0639\u062f \u0627\u0632 \u062b\u0628\u062a',
                  ),
                }),
                (0, v.jsx)(r.Copy, {
                  testID: 'staff-line-after',
                  style: {
                    fontSize: 16,
                    color: m.warning,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children:
                    se(X) +
                    ' ' +
                    (0, b.shopUnitText)(
                      (0, j.L)('\u062a\u0648\u0645\u0627\u0646'),
                    ),
                }),
              ],
            }),
            !!q &&
              (0, v.jsx)(r.Copy, {
                accessibilityRole: 'alert',
                testID: 'staff-line-error',
                style: { fontSize: 13, color: m.danger },
                children: q,
              }),
          ],
        }),
      });
    }
    const se = (e) => (e < 0 ? '\u2066\u2212' + V(-e) + '\u2069' : V(e));
    function ae({
      value: e,
      onChange: t,
      min: s,
      max: a,
      label: l,
      testID: i,
    }) {
      const { colors: c } = (0, h.useTheme)(),
        f = (e, o, l) =>
          (0, v.jsx)(n.default, {
            testID: i + '-' + l,
            accessibilityRole: 'button',
            accessibilityLabel:
              'minus' === l
                ? (0, j.L)('\u06a9\u0645 \u06a9\u0631\u062f\u0646')
                : (0, j.L)('\u0632\u06cc\u0627\u062f \u06a9\u0631\u062f\u0646'),
            disabled: o < s || o > a,
            onPress: () => t(o),
            style: ({ pressed: e }) => ({
              width: 56,
              height: 56,
              borderRadius: 16,
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: c.line,
              backgroundColor: c.soft,
              opacity: o < s || o > a ? 0.4 : e ? 0.7 : 1,
            }),
            children: (0, v.jsx)(r.Copy, {
              style: { fontSize: 22, fontFamily: 'Vazirmatn_700Bold' },
              children: e,
            }),
          });
      return (0, v.jsxs)(o.default, {
        testID: i,
        style: {
          flexDirection: 'row',
          direction: 'ltr',
          alignItems: 'center',
          gap: 10,
        },
        children: [
          f('\u2212', e - 1, 'minus'),
          (0, v.jsx)(r.Copy, {
            testID: i + '-value',
            style: {
              minWidth: 56,
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Vazirmatn_700Bold',
            },
            children: l,
          }),
          f('+', e + 1, 'plus'),
        ],
      });
    }
    function oe({ value: e, onChange: t, testID: n }) {
      const { colors: s } = (0, h.useTheme)();
      return (0, v.jsx)(a.default, {
        testID: n,
        value: e,
        onValueChange: t,
        trackColor: { false: s.soft, true: s.accent },
        thumbColor: '#ffffff',
        activeThumbColor: '#ffffff',
      });
    }
    function le({ title: e, sub: t, children: n, first: a = !1 }) {
      const { colors: l } = (0, h.useTheme)();
      return (0, v.jsxs)(o.default, {
        style: {
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 12,
          paddingVertical: 14,
          borderTopWidth: a ? 0 : s.default.hairlineWidth,
          borderColor: l.line,
        },
        children: [
          (0, v.jsxs)(o.default, {
            style: { flex: 1, minWidth: 0 },
            children: [
              (0, v.jsx)(r.Copy, {
                style: {
                  fontSize: 16,
                  lineHeight: 25,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: e,
              }),
              !!t &&
                (0, v.jsx)(r.Copy, {
                  style: { fontSize: 12.5, lineHeight: 19, color: l.muted },
                  children: t,
                }),
            ],
          }),
          n,
        ],
      });
    }
    function re({ value: e, onChange: t }) {
      const { colors: s } = (0, h.useTheme)(),
        a = (a, o, l) => {
          const i = e === a;
          return (0, v.jsxs)(
            n.default,
            {
              testID: 'staff-scope-' + a,
              accessibilityRole: 'radio',
              accessibilityState: { selected: i },
              onPress: () => t(a),
              style: ({ pressed: e }) => ({
                flex: 1,
                minWidth: 0,
                padding: 12,
                gap: 2,
                borderRadius: 16,
                borderWidth: i ? 2 : 1,
                borderColor: i ? s.accent : s.line,
                backgroundColor: i ? s.accentSoft : s.surface,
                opacity: e ? 0.85 : 1,
              }),
              children: [
                (0, v.jsx)(r.Copy, {
                  style: {
                    fontSize: 14.5,
                    fontFamily: 'Vazirmatn_700Bold',
                    color: i ? s.accent : s.text,
                  },
                  children: o,
                }),
                (0, v.jsx)(r.Copy, {
                  style: { fontSize: 11.5, lineHeight: 17, color: s.muted },
                  children: l,
                }),
              ],
            },
            a,
          );
        };
      return (0, v.jsxs)(o.default, {
        testID: 'staff-scope',
        style: { gap: 6 },
        children: [
          (0, v.jsx)(r.Copy, {
            style: { fontSize: 13, fontFamily: 'Vazirmatn_600SemiBold' },
            children: (0, j.L)(
              '\u0627\u06cc\u0646 \u062a\u063a\u06cc\u06cc\u0631 \u0628\u0631\u0627\u06cc \u06a9\u06cc \u0627\u0633\u062a\u061f',
            ),
          }),
          (0, v.jsxs)(o.default, {
            style: { flexDirection: 'row-reverse', gap: 8 },
            children: [
              a(
                'month',
                (0, j.L)(
                  '\u0641\u0642\u0637 \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647',
                ),
                (0, j.L)(
                  '\u0645\u0627\u0647 \u0628\u0639\u062f \u062d\u0642\u0648\u0642 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u062f',
                ),
              ),
              a(
                'always',
                (0, j.L)(
                  '\u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0647\u0631 \u0645\u0627\u0647',
                ),
                (0, j.L)(
                  '\u062d\u0642\u0648\u0642 \u067e\u0627\u06cc\u0647 \u0639\u0648\u0636 \u0645\u06cc\u200c\u0634\u0648\u062f',
                ),
              ),
            ],
          }),
        ],
      });
    }
    function ie({ shop: e, account: n, onClose: s, onSaved: a }) {
      const { colors: i } = (0, h.useTheme)(),
        f = n.person,
        y = !!f.salaryToman,
        [m, p] = (0, t.useState)(y || !n.salary.history.length),
        [x, S] = (0, t.useState)(f.salaryToman ? String(f.salaryToman) : ''),
        [D, z] = (0, t.useState)(f.payDay || 1),
        [w, P] = (0, t.useState)(!y || f.autoSalary),
        [k, B] = (0, t.useState)(!y || f.remind),
        [F, H] = (0, t.useState)(f.formal),
        [R, W] = (0, t.useState)(f.children),
        [O, M] = (0, t.useState)(f.married),
        [U, A] = (0, t.useState)(
          void 0 !== f.seniorityToman ? String(f.seniorityToman) : '',
        ),
        [N, E] = (0, t.useState)(null),
        [q, K] = (0, t.useState)(!1),
        [G, J] = (0, t.useState)(''),
        $ = (0, I.parseToman)(x),
        Q = y && m && $ !== f.salaryToman,
        Y = (0, L.periodTitle)((0, L.periodOf)(n.today));
      async function Z() {
        if (!m || (Number.isSafeInteger($) && $ > 0))
          if (!Q || N) {
            (K(!0), J(''));
            try {
              let t = f.version;
              if (m && (!y || Q)) {
                t = (
                  await (0, T.changeStaffSalary)(e, f.id, {
                    amountToman: $,
                    ...(Q && N ? { scope: N } : {}),
                  })
                ).person.version;
              }
              if (!m && y) {
                t = (
                  await (0, T.changeStaffSalary)(e, f.id, {
                    amountToman: 0,
                    scope: 'always',
                  })
                ).person.version;
              }
              const n = (0, I.parseToman)(U);
              (await (0, T.updateStaffPerson)(e, f.id, t, {
                payDay: m ? D : (f.payDay ?? null),
                autoSalary: m && w,
                remind: m && k,
                formal: F,
                children: R,
                married: O,
                seniorityToman: F && Number.isSafeInteger(n) ? n : null,
              }),
                (0, u.showToast)(
                  (0, j.L)('\u0630\u062e\u06cc\u0631\u0647 \u0634\u062f'),
                ),
                a());
            } catch (e) {
              J(_(e));
            } finally {
              K(!1);
            }
          } else
            J(
              (0, j.L)(
                '\u0628\u06af\u0648 \u0627\u06cc\u0646 \u062a\u063a\u06cc\u06cc\u0631 \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647 \u0627\u0633\u062a \u06cc\u0627 \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0647\u0631 \u0645\u0627\u0647.',
              ),
            );
        else
          J(
            (0, j.L)(
              '\u0645\u0628\u0644\u063a \u062d\u0642\u0648\u0642 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            ),
          );
      }
      return (0, v.jsx)(c.Sheet, {
        visible: !0,
        title: (0, j.L)(
          '\u062d\u0642\u0648\u0642 \u0645\u0627\u0647\u0627\u0646\u0647\u0654 {name}',
          { name: X(f.name) },
        ),
        onClose: s,
        onSubmit: () => {
          q || Z();
        },
        busy: q,
        footer: (0, v.jsx)(r.Button, {
          testID: 'staff-salary-save',
          disabled: q,
          onPress: Z,
          children: q
            ? (0, j.L)(
                '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
              )
            : (0, j.L)('\u0630\u062e\u06cc\u0631\u0647'),
        }),
        children: (0, v.jsxs)(o.default, {
          testID: 'staff-salary-sheet',
          style: { gap: 12 },
          children: [
            (0, v.jsxs)(r.Card, {
              style: { paddingVertical: 0, paddingHorizontal: 14 },
              children: [
                (0, v.jsx)(le, {
                  first: !0,
                  title: (0, j.L)(
                    '\u062d\u0642\u0648\u0642 \u0645\u0627\u0647\u0627\u0646\u0647 \u062f\u0627\u0631\u062f',
                  ),
                  sub: (0, j.L)(
                    '\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc\u061b \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0645\u0646\u062f \u0631\u0648\u0632\u0645\u0632\u062f \u062e\u0627\u0645\u0648\u0634 \u0628\u0645\u0627\u0646\u062f',
                  ),
                  children: (0, v.jsx)(oe, {
                    testID: 'staff-salary-has',
                    value: m,
                    onChange: p,
                  }),
                }),
                m &&
                  (0, v.jsxs)(v.Fragment, {
                    children: [
                      (0, v.jsx)(le, {
                        title: (0, j.L)('\u0645\u0628\u0644\u063a'),
                        children: (0, v.jsx)(o.default, {
                          style: { width: 190 },
                          children: (0, v.jsx)(C.MoneyInput, {
                            testID: 'staff-salary-amount',
                            value: x,
                            onChange: (e) => {
                              (S(e), E(null));
                            },
                            money: !0,
                            suffix: (0, b.shopUnitText)(
                              (0, j.L)('\u062a\u0648\u0645\u0627\u0646'),
                            ),
                          }),
                        }),
                      }),
                      (0, v.jsx)(le, {
                        title: (0, j.L)(
                          '\u0631\u0648\u0632 \u062d\u0642\u0648\u0642',
                        ),
                        sub: (0, j.L)('\u0647\u0631 \u0645\u0627\u0647'),
                        children: (0, v.jsx)(ae, {
                          testID: 'staff-payday',
                          value: D,
                          min: 1,
                          max: 31,
                          onChange: z,
                          label: (0, j.L)('{day} \u0627\u0645', {
                            day: (0, j.localDigits)(D),
                          }),
                        }),
                      }),
                      (0, v.jsx)(le, {
                        title: (0, j.L)(
                          '\u062e\u0648\u062f\u06a9\u0627\u0631 \u0628\u0647 \u0637\u0644\u0628\u0634 \u0627\u0636\u0627\u0641\u0647 \u0634\u0648\u062f',
                        ),
                        sub: (0, j.L)(
                          '\u0631\u0648\u0632 \u062d\u0642\u0648\u0642\u060c \xab\u062d\u0642\u0648\u0642\xbb \u062f\u0631 \u062d\u0633\u0627\u0628\u0634 \u062b\u0628\u062a \u0645\u06cc\u200c\u0634\u0648\u062f',
                        ),
                        children: (0, v.jsx)(oe, {
                          testID: 'staff-salary-auto',
                          value: w,
                          onChange: P,
                        }),
                      }),
                      (0, v.jsx)(le, {
                        title: (0, j.L)(
                          '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0631\u0648\u0632 \u062d\u0642\u0648\u0642',
                        ),
                        sub: (0, j.L)(
                          '\u0633\u0627\u0639\u062a \u06f1\u06f0 \u0635\u0628\u062d\u060c \u0631\u0648\u06cc \u06af\u0648\u0634\u06cc \u0634\u0645\u0627',
                        ),
                        children: (0, v.jsx)(oe, {
                          testID: 'staff-salary-remind',
                          value: k,
                          onChange: B,
                        }),
                      }),
                      (0, v.jsx)(le, {
                        title: (0, j.L)(
                          '\u0641\u06cc\u0634 \u0631\u0633\u0645\u06cc (\u0628\u06cc\u0645\u0647 \u0648 \u0645\u0632\u0627\u06cc\u0627)',
                        ),
                        sub: (0, j.L)(
                          '\u062d\u0642 \u0645\u0633\u06a9\u0646\u060c \u0628\u0646\u060c \u0628\u06cc\u0645\u0647 \u0648 \u0645\u0627\u0644\u06cc\u0627\u062a \u0637\u0628\u0642 \xab\u062a\u0646\u0638\u06cc\u0645 \u062f\u0631\u0635\u062f\u0647\u0627\xbb',
                        ),
                        children: (0, v.jsx)(oe, {
                          testID: 'staff-salary-formal',
                          value: F,
                          onChange: H,
                        }),
                      }),
                      F &&
                        (0, v.jsxs)(v.Fragment, {
                          children: [
                            (0, v.jsx)(le, {
                              title: (0, j.L)(
                                '\u062a\u0639\u062f\u0627\u062f \u0641\u0631\u0632\u0646\u062f',
                              ),
                              children: (0, v.jsx)(ae, {
                                testID: 'staff-children',
                                value: R,
                                min: 0,
                                max: 20,
                                onChange: W,
                                label: (0, j.localDigits)(R),
                              }),
                            }),
                            (0, v.jsx)(le, {
                              title: (0, j.L)('\u0645\u062a\u0623\u0647\u0644'),
                              children: (0, v.jsx)(oe, {
                                testID: 'staff-married',
                                value: O,
                                onChange: M,
                              }),
                            }),
                            (0, v.jsx)(le, {
                              title: (0, j.L)(
                                '\u067e\u0627\u06cc\u0647 \u0633\u0646\u0648\u0627\u062a',
                              ),
                              sub: (0, j.L)(
                                '\u062e\u0627\u0644\u06cc = \u0639\u062f\u062f \xab\u062a\u0646\u0638\u06cc\u0645 \u062f\u0631\u0635\u062f\u0647\u0627\xbb',
                              ),
                              children: (0, v.jsx)(o.default, {
                                style: { width: 170 },
                                children: (0, v.jsx)(C.MoneyInput, {
                                  testID: 'staff-seniority',
                                  value: U,
                                  onChange: A,
                                  money: !0,
                                  suffix: (0, b.shopUnitText)(
                                    (0, j.L)('\u062a\u0648\u0645\u0627\u0646'),
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                    ],
                  }),
              ],
            }),
            Q && (0, v.jsx)(re, { value: N, onChange: E }),
            m &&
              k &&
              (0, v.jsxs)(o.default, {
                style: { gap: 8 },
                children: [
                  (0, v.jsx)(r.Copy, {
                    style: { fontSize: 14, color: i.muted },
                    children: (0, j.L)(
                      '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0627\u06cc\u0646\u200c\u0637\u0648\u0631 \u0645\u06cc\u200c\u0622\u06cc\u062f',
                    ),
                  }),
                  (0, v.jsxs)(r.Card, {
                    testID: 'staff-reminder-preview',
                    style: { gap: 8, padding: 14 },
                    children: [
                      (0, v.jsxs)(o.default, {
                        style: {
                          flexDirection: 'row-reverse',
                          alignItems: 'center',
                          gap: 8,
                        },
                        children: [
                          (0, v.jsx)(l.LinearGradient, {
                            colors: ['#14b8a6', '#0f5f58'],
                            style: { width: 26, height: 26, borderRadius: 8 },
                          }),
                          (0, v.jsx)(r.Copy, {
                            style: { fontSize: 13, color: i.muted },
                            children: (0, j.L)(
                              '\u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \xb7 \u0627\u0644\u0627\u0646',
                            ),
                          }),
                        ],
                      }),
                      (0, v.jsx)(r.Copy, {
                        style: {
                          fontSize: 16,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: (0, j.L)(
                          '\u0627\u0645\u0631\u0648\u0632 \u0631\u0648\u0632 \u062d\u0642\u0648\u0642 {name} \u0627\u0633\u062a',
                          { name: X(f.name) },
                        ),
                      }),
                      (0, v.jsx)(r.Copy, {
                        style: { fontSize: 13.5, color: i.muted },
                        children: w
                          ? (0, b.shopUnitText)(
                              (0, j.L)(
                                '\u062d\u0642\u0648\u0642 {month}\u060c {amount} \u062a\u0648\u0645\u0627\u0646\u060c \u0628\u0647 \u0637\u0644\u0628\u0634 \u0627\u0636\u0627\u0641\u0647 \u0634\u062f.',
                                {
                                  month: Y,
                                  amount:
                                    Number.isSafeInteger($) && $ > 0
                                      ? V($)
                                      : '\u2014',
                                },
                              ),
                            )
                          : (0, b.shopUnitText)(
                              (0, j.L)(
                                '\u062d\u0642\u0648\u0642 {month}: {amount} \u062a\u0648\u0645\u0627\u0646.',
                                {
                                  month: Y,
                                  amount:
                                    Number.isSafeInteger($) && $ > 0
                                      ? V($)
                                      : '\u2014',
                                },
                              ),
                            ),
                      }),
                      (0, v.jsxs)(o.default, {
                        style: { flexDirection: 'row-reverse', gap: 8 },
                        children: [
                          (0, v.jsx)(o.default, {
                            style: {
                              flex: 1,
                              padding: 10,
                              borderRadius: 12,
                              alignItems: 'center',
                              backgroundColor: i.accent,
                            },
                            children: (0, v.jsx)(r.Copy, {
                              style: {
                                color: i.onAccent,
                                fontFamily: 'Vazirmatn_700Bold',
                              },
                              children: (0, j.L)(
                                '\u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0631\u062f\u0645',
                              ),
                            }),
                          }),
                          (0, v.jsx)(o.default, {
                            style: {
                              flex: 1,
                              padding: 10,
                              borderRadius: 12,
                              alignItems: 'center',
                              backgroundColor: i.soft,
                            },
                            children: (0, v.jsx)(r.Copy, {
                              style: { fontFamily: 'Vazirmatn_700Bold' },
                              children: (0, j.L)(
                                '\u0628\u0639\u062f\u0627\u064b',
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, v.jsx)(r.Copy, {
                    style: { fontSize: 11.5, color: i.muted },
                    children: (0, j.L)(
                      '\u0647\u0632\u06cc\u0646\u0647\u200c\u0627\u06cc \u06a9\u0647 \u0627\u0632 \u0627\u06cc\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u062b\u0628\u062a \u06a9\u0646\u06cc\u060c \u0647\u0645\u0627\u0646 \u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0647 \u0627\u06cc\u0646 \u0646\u0641\u0631 \u0627\u0633\u062a\u061b \u062f\u0648\u0628\u0627\u0631 \u062d\u0633\u0627\u0628 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                    ),
                  }),
                ],
              }),
            !!G &&
              (0, v.jsx)(r.Copy, {
                accessibilityRole: 'alert',
                testID: 'staff-salary-error',
                style: { fontSize: 13, color: i.danger },
                children: G,
              }),
          ],
        }),
      });
    }
    function de({ shop: e, account: n, onClose: s, onSaved: a }) {
      const { colors: l } = (0, h.useTheme)(),
        i = n.person,
        f = i.salaryToman || 0,
        [y, m] = (0, t.useState)('up'),
        [p, x] = (0, t.useState)('percent'),
        [S, D] = (0, t.useState)(''),
        [z, w] = (0, t.useState)(null),
        [P, k] = (0, t.useState)(!1),
        [B, F] = (0, t.useState)(''),
        H =
          'percent' === p
            ? Number((0, j.localDigits)(S, 'en').replace(/[^0-9.]/g, ''))
            : (0, I.parseToman)(S),
        R = Number.isFinite(H) && H > 0 ? H : 0,
        W =
          f +
          (R
            ? (0, L.changeToman)(f, { mode: p, value: R }) *
              ('up' === y ? 1 : -1)
            : 0),
        O = 'always' === z ? W : f;
      async function M() {
        if (R)
          if (z)
            if (W < 0)
              F(
                (0, j.L)(
                  '\u062d\u0642\u0648\u0642 \u06a9\u0645\u062a\u0631 \u0627\u0632 \u0635\u0641\u0631 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                ),
              );
            else {
              (k(!0), F(''));
              try {
                (await (0, T.changeStaffSalary)(e, i.id, {
                  change: { direction: y, mode: p, value: R },
                  scope: z,
                }),
                  (0, u.showToast)(
                    (0, j.L)('\u0630\u062e\u06cc\u0631\u0647 \u0634\u062f'),
                  ),
                  a());
              } catch (e) {
                F(_(e));
              } finally {
                k(!1);
              }
            }
          else
            F(
              (0, j.L)(
                '\u0628\u06af\u0648 \u0627\u06cc\u0646 \u062a\u063a\u06cc\u06cc\u0631 \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0645\u0627\u0647 \u0627\u0633\u062a \u06cc\u0627 \u0627\u0632 \u0627\u06cc\u0646 \u0628\u0647 \u0628\u0639\u062f \u0647\u0631 \u0645\u0627\u0647.',
              ),
            );
        else
          F(
            (0, j.L)(
              '\u062f\u0631\u0635\u062f \u06cc\u0627 \u0645\u0628\u0644\u063a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
            ),
          );
      }
      return (0, v.jsx)(c.Sheet, {
        visible: !0,
        title: (0, j.L)(
          '\u0627\u0641\u0632\u0627\u06cc\u0634 \u06cc\u0627 \u06a9\u0627\u0647\u0634 \u062d\u0642\u0648\u0642',
        ),
        onClose: s,
        onSubmit: () => {
          P || M();
        },
        busy: P,
        footer: (0, v.jsx)(r.Button, {
          testID: 'staff-change-save',
          disabled: P,
          onPress: M,
          children: P
            ? (0, j.L)(
                '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
              )
            : (0, j.L)('\u062b\u0628\u062a \u062a\u063a\u06cc\u06cc\u0631'),
        }),
        children: (0, v.jsxs)(o.default, {
          testID: 'staff-change-sheet',
          style: { gap: 12 },
          children: [
            (0, v.jsx)(r.Copy, {
              style: { fontSize: 13, color: l.muted },
              children: (0, b.shopUnitText)(
                (0, j.L)(
                  '\u062d\u0642\u0648\u0642 \u0641\u0639\u0644\u06cc: {amount} \u062a\u0648\u0645\u0627\u0646',
                  { amount: V(f) },
                ),
              ),
            }),
            (0, v.jsx)(r.Segmented, {
              value: y,
              onChange: m,
              items: [
                {
                  value: 'up',
                  label: (0, j.L)('\u0627\u0641\u0632\u0627\u06cc\u0634'),
                  testID: 'staff-change-up',
                },
                {
                  value: 'down',
                  label: (0, j.L)('\u06a9\u0627\u0647\u0634'),
                  testID: 'staff-change-down',
                },
              ],
            }),
            (0, v.jsx)(r.Segmented, {
              value: p,
              onChange: (e) => {
                (x(e), D(''));
              },
              items: [
                {
                  value: 'percent',
                  label: (0, j.L)('\u062f\u0631\u0635\u062f'),
                  testID: 'staff-change-percent',
                },
                {
                  value: 'amount',
                  label: (0, j.L)('\u0645\u0628\u0644\u063a'),
                  testID: 'staff-change-amount',
                },
              ],
            }),
            'percent' === p
              ? (0, v.jsx)(r.Input, {
                  testID: 'staff-change-value',
                  value: (0, j.localDigits)(S),
                  onChangeText: (e) =>
                    D(e.replace(/[^0-9\u06f0-\u06f9.]/g, '').slice(0, 6)),
                  keyboardType: 'decimal-pad',
                  inputMode: 'decimal',
                  placeholder: (0, j.L)(
                    '\u0645\u062b\u0644\u0627\u064b \u06f1\u06f0',
                  ),
                })
              : (0, v.jsx)(C.MoneyInput, {
                  testID: 'staff-change-value',
                  value: S,
                  onChange: D,
                  money: !0,
                  suffix: (0, b.shopUnitText)(
                    (0, j.L)('\u062a\u0648\u0645\u0627\u0646'),
                  ),
                  placeholder: (0, j.L)(
                    '\u0645\u062b\u0644\u0627\u064b \u06f2\u066c\u06f0\u06f0\u06f0\u066c\u06f0\u06f0\u06f0',
                  ),
                }),
            (0, v.jsx)(re, { value: z, onChange: w }),
            !!R &&
              (0, v.jsxs)(r.Card, {
                testID: 'staff-change-preview',
                style: { gap: 4, padding: 12 },
                children: [
                  (0, v.jsx)(r.Copy, {
                    style: { fontSize: 14 },
                    children: (0, b.shopUnitText)(
                      (0, j.L)(
                        '\u0627\u06cc\u0646 \u0645\u0627\u0647: {amount} \u062a\u0648\u0645\u0627\u0646',
                        { amount: V(W) },
                      ),
                    ),
                  }),
                  !!z &&
                    (0, v.jsx)(r.Copy, {
                      style: { fontSize: 14, color: l.muted },
                      children: (0, b.shopUnitText)(
                        (0, j.L)(
                          '\u0645\u0627\u0647 \u0628\u0639\u062f: {amount} \u062a\u0648\u0645\u0627\u0646',
                          { amount: V(O) },
                        ),
                      ),
                    }),
                ],
              }),
            !!B &&
              (0, v.jsx)(r.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, color: l.danger },
                children: B,
              }),
          ],
        }),
      });
    }
    function ce({ shop: e, account: n, onClose: a, onSaved: l }) {
      const { colors: i } = (0, h.useTheme)(),
        m = n.person,
        [p, x] = (0, t.useState)((0, I.isoToParts)(n.today)),
        [S, D] = (0, t.useState)(''),
        [z, w] = (0, t.useState)('cash'),
        [P, k] = (0, t.useState)(!0),
        [B, F] = (0, t.useState)(!0),
        [H, R] = (0, t.useState)(''),
        [W, O] = (0, t.useState)(!1),
        [M, U] = (0, t.useState)(''),
        [A, N] = (0, f.useConfirm)(),
        E = (0, I.partsToIso)(p),
        q = (0, L.endSettlement)({
          balance: m.balance,
          base: m.salaryToman ?? null,
          endedOn: E,
          monthSalaryIn: n.salary.monthSalaryIn,
        }),
        K = P ? q.withPartial : q.without;
      (0, t.useEffect)(() => {
        R(K > 0 ? String(K) : '');
      }, [K]);
      const G = !!m.appAccess && 'owner' !== e.role;
      async function J() {
        (O(!0), U(''));
        try {
          const t = (0, I.parseToman)(H);
          (await (0, T.endStaffPerson)(e, m.id, {
            endedOn: E,
            note: S.trim(),
            ...(P && q.partialSalary
              ? {
                  finalSalary: {
                    amountToman: q.partialSalary,
                    note: (0, j.L)(
                      '\u062d\u0642\u0648\u0642 {n} \u0631\u0648\u0632 \u0622\u062e\u0631',
                      { n: (0, j.localDigits)(q.days) },
                    ),
                  },
                }
              : {}),
            ...(B && K > 0 && Number.isSafeInteger(t) && t > 0
              ? { payment: { amountToman: t, method: z } }
              : {}),
            ...(B && K < 0 ? { repaid: { amountToman: -K, method: z } } : {}),
          }),
            (0, u.showToast)(
              (0, j.L)(
                '\u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 {name} \u062a\u0645\u0627\u0645 \u0634\u062f',
                { name: m.name },
              ),
            ),
            l());
        } catch (e) {
          U(_(e));
        } finally {
          O(!1);
        }
      }
      return (0, v.jsxs)(c.Sheet, {
        visible: !0,
        title: (0, j.L)(
          '\u067e\u0627\u06cc\u0627\u0646 \u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 {name}',
          { name: X(m.name) },
        ),
        onClose: a,
        busy: W,
        footer: (0, v.jsx)(r.Button, {
          testID: 'staff-end-save',
          danger: !0,
          disabled: W || G,
          onPress: function () {
            A({
              title: (0, j.L)(
                '\u067e\u0627\u06cc\u0627\u0646 \u0647\u0645\u06a9\u0627\u0631\u06cc',
              ),
              text: (0, j.L)(
                '\u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 {name} \u0627\u0632 {date} \u062a\u0645\u0627\u0645 \u0634\u0648\u062f\u061f \u062d\u0633\u0627\u0628\u0634 \u0628\u0631\u0627\u06cc \u0633\u0627\u0628\u0642\u0647 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
                { name: m.name, date: (0, L.jalaliDayTitle)(E) },
              ),
              ok: (0, j.L)(
                '\u067e\u0627\u06cc\u0627\u0646 \u0647\u0645\u06a9\u0627\u0631\u06cc',
              ),
              tone: 'danger',
              run: () => {
                J();
              },
            });
          },
          children: W
            ? (0, j.L)(
                '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
              )
            : (0, j.L)(
                '\u067e\u0627\u06cc\u0627\u0646 \u0647\u0645\u06a9\u0627\u0631\u06cc \u0648 \u062a\u0633\u0648\u06cc\u0647',
              ),
        }),
        children: [
          (0, v.jsxs)(o.default, {
            testID: 'staff-end-sheet',
            style: { gap: 12 },
            children: [
              (0, v.jsxs)(o.default, {
                style: { gap: 6 },
                children: [
                  (0, v.jsx)(r.Copy, {
                    style: { fontSize: 14, color: i.muted },
                    children: (0, j.L)(
                      '\u0622\u062e\u0631\u06cc\u0646 \u0631\u0648\u0632 \u06a9\u0627\u0631',
                    ),
                  }),
                  (0, v.jsx)(y.JalaliDateField, {
                    id: 'staff-end-date',
                    dateOnly: !0,
                    quick: 'past',
                    value: p,
                    onChange: x,
                  }),
                ],
              }),
              (0, v.jsxs)(r.Card, {
                testID: 'staff-settlement',
                style: { gap: 8, padding: 14 },
                children: [
                  (0, v.jsx)(r.Copy, {
                    style: { fontSize: 16, fontFamily: 'Vazirmatn_700Bold' },
                    children: (0, j.L)(
                      '\u062a\u0633\u0648\u06cc\u0647 \u062d\u0633\u0627\u0628',
                    ),
                  }),
                  (0, v.jsxs)(o.default, {
                    style: r.common.between,
                    children: [
                      (0, v.jsx)(r.Copy, {
                        style: { fontSize: 14 },
                        children: (0, j.L)(
                          '\u0645\u0627\u0646\u062f\u0647 \u062d\u0633\u0627\u0628 \u062a\u0627 \u0627\u0645\u0631\u0648\u0632',
                        ),
                      }),
                      (0, v.jsx)(r.Copy, {
                        style: {
                          fontSize: 14,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: se(q.without),
                      }),
                    ],
                  }),
                  !!q.partialSalary &&
                    (0, v.jsxs)(o.default, {
                      style: r.common.between,
                      children: [
                        (0, v.jsxs)(o.default, {
                          style: { flex: 1 },
                          children: [
                            (0, v.jsx)(r.Copy, {
                              style: { fontSize: 14 },
                              children: (0, j.L)(
                                '\u062d\u0642\u0648\u0642 {n} \u0631\u0648\u0632 \u0627\u06cc\u0646 \u0645\u0627\u0647',
                                { n: (0, j.localDigits)(q.days) },
                              ),
                            }),
                            (0, v.jsx)(r.Copy, {
                              style: { fontSize: 12, color: i.muted },
                              children: (0, j.L)(
                                '{n} \u0627\u0632 {m} \u0631\u0648\u0632 \u0645\u0627\u0647',
                                {
                                  n: (0, j.localDigits)(q.days),
                                  m: (0, j.localDigits)(q.monthDays),
                                },
                              ),
                            }),
                          ],
                        }),
                        (0, v.jsx)(oe, {
                          testID: 'staff-end-partial',
                          value: P,
                          onChange: k,
                        }),
                      ],
                    }),
                  (0, v.jsxs)(o.default, {
                    style: [
                      r.common.between,
                      {
                        paddingTop: 8,
                        borderTopWidth: s.default.hairlineWidth,
                        borderColor: i.line,
                      },
                    ],
                    children: [
                      (0, v.jsx)(r.Copy, {
                        style: {
                          fontSize: 15,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children:
                          K > 0
                            ? (0, j.L)(
                                '\u0645\u063a\u0627\u0632\u0647 \u0628\u0627\u06cc\u062f \u0628\u067e\u0631\u062f\u0627\u0632\u062f',
                              )
                            : K < 0
                              ? (0, j.L)(
                                  '{name} \u0628\u0627\u06cc\u062f \u067e\u0633 \u0628\u062f\u0647\u062f',
                                  { name: X(m.name) },
                                )
                              : (0, j.L)(
                                  '\u062d\u0633\u0627\u0628 \u0635\u0627\u0641 \u0627\u0633\u062a',
                                ),
                      }),
                      (0, v.jsx)(r.Copy, {
                        testID: 'staff-end-total',
                        style: {
                          fontSize: 17,
                          fontFamily: 'Vazirmatn_700Bold',
                          color:
                            K > 0 ? i.warning : K < 0 ? i.danger : i.success,
                        },
                        children: V(Math.abs(K)),
                      }),
                    ],
                  }),
                ],
              }),
              0 !== K &&
                (0, v.jsxs)(r.Card, {
                  style: { gap: 10, padding: 14 },
                  children: [
                    (0, v.jsxs)(o.default, {
                      style: r.common.between,
                      children: [
                        (0, v.jsx)(r.Copy, {
                          style: {
                            fontSize: 14.5,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children:
                            K > 0
                              ? (0, j.L)(
                                  '\u067e\u0631\u062f\u0627\u062e\u062a \u0646\u0647\u0627\u06cc\u06cc \u0631\u0627 \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u062b\u0628\u062a \u06a9\u0646',
                                )
                              : (0, j.L)(
                                  '\u0627\u06cc\u0646 \u067e\u0648\u0644 \u0631\u0627 \u067e\u0633 \u062f\u0627\u062f',
                                ),
                        }),
                        (0, v.jsx)(oe, {
                          testID: 'staff-end-settle',
                          value: B,
                          onChange: F,
                        }),
                      ],
                    }),
                    B &&
                      (0, v.jsxs)(v.Fragment, {
                        children: [
                          K > 0 &&
                            (0, v.jsx)(C.MoneyInput, {
                              testID: 'staff-end-amount',
                              value: H,
                              onChange: R,
                              money: !0,
                              suffix: (0, b.shopUnitText)(
                                (0, j.L)('\u062a\u0648\u0645\u0627\u0646'),
                              ),
                            }),
                          (0, v.jsx)(r.Segmented, {
                            value: z,
                            onChange: w,
                            items: L.STAFF_METHODS.map((e) => ({
                              value: e,
                              label: L.staffMethodFa[e],
                            })),
                          }),
                        ],
                      }),
                  ],
                }),
              (0, v.jsx)(r.Input, {
                testID: 'staff-end-note',
                value: S,
                onChangeText: D,
                maxLength: 200,
                placeholder: (0, j.L)(
                  '\u06cc\u0627\u062f\u062f\u0627\u0634\u062a (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                ),
              }),
              !!m.appAccess &&
                (0, v.jsx)(r.Copy, {
                  style: { fontSize: 12.5, color: G ? i.danger : i.muted },
                  children: G
                    ? (0, j.L)(
                        '\u0627\u06cc\u0646 \u0646\u0641\u0631 \u0648\u0627\u0631\u062f \u0627\u067e \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u067e\u0627\u06cc\u0627\u0646 \u0647\u0645\u06a9\u0627\u0631\u06cc\u200c\u0627\u0634 \u0631\u0627 \u0641\u0642\u0637 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u062b\u0628\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f.',
                      )
                    : (0, j.L)(
                        '\u062f\u0633\u062a\u0631\u0633\u06cc {name} \u0628\u0647 \u0627\u067e \u0647\u0645 \u0628\u0631\u062f\u0627\u0634\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                        { name: X(m.name) },
                      ),
                }),
              !!M &&
                (0, v.jsx)(r.Copy, {
                  accessibilityRole: 'alert',
                  style: { fontSize: 13, color: i.danger },
                  children: M,
                }),
            ],
          }),
          N,
        ],
      });
    }
  },
  902,
  [
    2, 232, 17, 240, 99, 411, 407, 385, 539, 534, 525, 619, 382, 492, 415, 489,
    311, 435, 805, 470, 614, 529, 903, 527, 906, 907, 338,
  ],
);
