// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 906; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, _r, i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.StaffPayslip = function ({
        shop: e,
        personId: l,
        period: x,
        onBack: C,
      }) {
        const { colors: D } = (0, y.useTheme)(),
          [T, v] = (0, t.useState)(x || ''),
          [I, V] = (0, t.useState)(!1),
          [k, B] = (0, t.useState)(''),
          P = (0, p.useSwr)((0, p.scoped)(e.id, 'staff-account:' + l), () =>
            (0, j.readStaffAccount)(e, l),
          ),
          _ = (0, p.useSwr)(
            (0, p.scoped)(e.id, 'staff-payslip:' + l + ':' + T),
            () => (0, j.readPayslip)(e, l, T),
          ),
          F = _.data,
          H = F?.slip,
          R = F?.person,
          W = F
            ? {
                shopName: F.shopName,
                person: F.person.name,
                jobTitle: F.person.jobTitle,
              }
            : null;
        async function U(e, t) {
          if (!k && H && W) {
            B(e);
            try {
              await t();
            } catch (e) {
              (0, f.showToast)((0, L.staffError)(e));
            } finally {
              B('');
            }
          }
        }
        const E = () =>
          (0, u.payslipHtml)(H, W, { fontFace: g.WEB_INVOICE_FONTS });
        async function M() {
          const e = await (0, g.htmlPdf)(E());
          if (e) {
            const t = await _r(d[22])(d[21], d.paths);
            return void (await t.shareAsync(e, {
              mimeType: 'application/pdf',
              dialogTitle: (0, h.L)(
                '\u0641\u06cc\u0634 \u062d\u0642\u0648\u0642\u06cc',
              ),
            }));
          }
          await (0, m.shareText)(
            (0, u.payslipText)(H, W),
            (0, h.L)('\u0641\u06cc\u0634 \u062d\u0642\u0648\u0642\u06cc'),
          );
        }
        const A = async () => {
            (await (0, g.printHtml)(E())) ||
              (0, f.showToast)(
                (0, h.L)(
                  '\u0627\u06cc\u0646 \u06af\u0648\u0634\u06cc \u0647\u0646\u0648\u0632 \u0686\u0627\u067e \u0646\u062f\u0627\u0631\u062f\u061b \xab\u0627\u0634\u062a\u0631\u0627\u06a9\xbb \u0631\u0627 \u0628\u0632\u0646.',
                ),
              );
          },
          N = async () => {
            const e = await (0, g.htmlPdf)(E());
            if (e) {
              const t = await _r(d[22])(d[21], d.paths);
              return void (await t.shareAsync(e, {
                mimeType: 'application/pdf',
                dialogTitle: (0, h.L)(
                  '\u0641\u06cc\u0634 \u062d\u0642\u0648\u0642\u06cc',
                ),
              }));
            }
            (await (0, g.printHtml)(E()),
              (0, f.showToast)(
                (0, h.L)(
                  '\u062f\u0631 \u067e\u0646\u062c\u0631\u0647\u0654 \u0686\u0627\u067e \xab\u0630\u062e\u06cc\u0631\u0647 \u0628\u0647\u200c\u0635\u0648\u0631\u062a PDF\xbb \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                ),
              ));
          },
          O = (P.data?.periods || []).slice(0, 12);
        return (0, S.jsxs)(s.default, {
          testID: 'staff-payslip',
          style: { gap: 12 },
          children: [
            (0, S.jsx)(L.BackLink, {
              label: R
                ? R.name
                : (0, h.L)('\u0628\u0627\u0632\u06af\u0634\u062a'),
              onPress: C,
            }),
            !!_.error &&
              !F &&
              (0, S.jsx)(c.Copy, {
                accessibilityRole: 'alert',
                style: { color: D.danger },
                children: (0, L.staffError)(Error(_.error)),
              }),
            H &&
              R &&
              (0, S.jsxs)(c.Card, {
                style: { gap: 10, padding: 18 },
                children: [
                  (0, S.jsxs)(s.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'flex-start',
                      gap: 10,
                    },
                    children: [
                      (0, S.jsxs)(s.default, {
                        style: { flex: 1, minWidth: 0, gap: 2 },
                        children: [
                          (0, S.jsx)(c.Copy, {
                            testID: 'payslip-name',
                            numberOfLines: 1,
                            style: {
                              fontSize: 20,
                              lineHeight: 30,
                              fontFamily: 'Vazirmatn_700Bold',
                            },
                            children: R.name,
                          }),
                          (0, S.jsx)(c.Copy, {
                            numberOfLines: 1,
                            style: { fontSize: 13, color: D.muted },
                            children: [R.jobTitle, F.shopName]
                              .filter(Boolean)
                              .join(' \xb7 '),
                          }),
                          !!H.overtimeHours &&
                            (0, S.jsx)(c.Copy, {
                              style: { fontSize: 13, color: D.muted },
                              children: (0, h.L)(
                                '\u0627\u0636\u0627\u0641\u0647\u200c\u06a9\u0627\u0631: {n} \u0633\u0627\u0639\u062a',
                                { n: (0, h.localDigits)(H.overtimeHours) },
                              ),
                            }),
                        ],
                      }),
                      (0, S.jsxs)(n.default, {
                        testID: 'payslip-month',
                        accessibilityRole: 'button',
                        onPress: () => V((e) => !e),
                        style: ({ pressed: e }) => ({
                          paddingHorizontal: 14,
                          paddingVertical: 8,
                          borderRadius: 16,
                          backgroundColor: D.accentSoft,
                          alignItems: 'center',
                          opacity: e ? 0.8 : 1,
                        }),
                        children: [
                          (0, S.jsx)(c.Copy, {
                            style: {
                              fontSize: 16,
                              color: D.accent,
                              fontFamily: 'Vazirmatn_700Bold',
                            },
                            children: (0, u.periodTitle)(H.period),
                          }),
                          (0, S.jsx)(c.Copy, {
                            style: { fontSize: 12, color: D.muted },
                            children: (0, h.L)(
                              '\u062a\u063a\u06cc\u06cc\u0631 \u0645\u0627\u0647 \u25be',
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  I &&
                    (0, S.jsx)(s.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        flexWrap: 'wrap',
                        gap: 6,
                      },
                      children: O.map((e) =>
                        (0, S.jsx)(
                          n.default,
                          {
                            testID: 'payslip-period-' + e,
                            onPress: () => {
                              (v(e), V(!1));
                            },
                            style: {
                              paddingHorizontal: 10,
                              paddingVertical: 6,
                              borderRadius: 12,
                              borderWidth:
                                e === H.period ? 2 : o.default.hairlineWidth,
                              borderColor: e === H.period ? D.accent : D.line,
                            },
                            children: (0, S.jsx)(c.Copy, {
                              style: { fontSize: 12.5 },
                              children: (0, u.periodTitle)(e),
                            }),
                          },
                          e,
                        ),
                      ),
                    }),
                  (0, S.jsx)(s.default, {
                    style: {
                      borderTopWidth: 1,
                      borderStyle: 'dashed',
                      borderColor: D.line,
                      marginVertical: 4,
                    },
                  }),
                  H.empty &&
                    (0, S.jsx)(c.Copy, {
                      style: {
                        fontSize: 13,
                        color: D.muted,
                        textAlign: 'center',
                        paddingVertical: 10,
                      },
                      children: (0, h.L)(
                        '\u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0645\u0627\u0647 \u0686\u06cc\u0632\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647.',
                      ),
                    }),
                  (0, S.jsxs)(s.default, {
                    style: c.common.between,
                    children: [
                      (0, S.jsx)(c.Copy, {
                        style: {
                          fontSize: 15,
                          color: D.success,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: (0, h.L)('\u0645\u0632\u0627\u06cc\u0627'),
                      }),
                      (0, S.jsx)(c.Copy, {
                        style: {
                          fontSize: 15,
                          color: D.success,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: (0, b.shopUnitText)(
                          (0, h.L)('\u062a\u0648\u0645\u0627\u0646'),
                        ),
                      }),
                    ],
                  }),
                  (0, S.jsx)(z, { rows: H.earnings }),
                  (0, S.jsx)(w, {
                    testID: 'payslip-earnings',
                    label: (0, h.L)(
                      '\u062c\u0645\u0639 \u0645\u0632\u0627\u06cc\u0627',
                    ),
                    value: H.earningsTotal,
                  }),
                  (0, S.jsx)(c.Copy, {
                    style: {
                      fontSize: 15,
                      color: D.danger,
                      fontFamily: 'Vazirmatn_700Bold',
                      marginTop: 6,
                    },
                    children: (0, h.L)('\u06a9\u0633\u0648\u0631\u0627\u062a'),
                  }),
                  (0, S.jsx)(z, { rows: H.deductions }),
                  (0, S.jsx)(w, {
                    testID: 'payslip-deductions',
                    label: (0, h.L)(
                      '\u062c\u0645\u0639 \u06a9\u0633\u0648\u0631\u0627\u062a',
                    ),
                    value: H.deductionsTotal,
                  }),
                  (0, S.jsxs)(r.LinearGradient, {
                    colors: ['#0f5f58', '#0b7c80'],
                    start: { x: 1, y: 0 },
                    end: { x: 0, y: 1 },
                    style: {
                      marginTop: 6,
                      borderRadius: 20,
                      paddingHorizontal: 18,
                      paddingVertical: 14,
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                    children: [
                      (0, S.jsx)(c.Copy, {
                        style: { fontSize: 15, color: '#e6f4f2' },
                        children: (0, h.L)(
                          '\u062e\u0627\u0644\u0635 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc',
                        ),
                      }),
                      (0, S.jsxs)(c.Copy, {
                        testID: 'payslip-net',
                        style: {
                          fontSize: 28,
                          lineHeight: 42,
                          color: '#ffffff',
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: [
                          (0, L.toman)(H.net),
                          ' ',
                          (0, S.jsx)(c.Copy, {
                            style: { fontSize: 14, color: '#e6f4f2' },
                            children: (0, b.shopUnitText)(
                              (0, h.L)('\u062a\u0648\u0645\u0627\u0646'),
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            H &&
              (0, S.jsxs)(c.Card, {
                testID: 'payslip-paid',
                style: { gap: 8, padding: 16 },
                children: [
                  (0, S.jsxs)(s.default, {
                    style: c.common.between,
                    children: [
                      (0, S.jsx)(c.Copy, {
                        style: { fontSize: 14, color: D.muted },
                        children: (0, h.L)(
                          '\u067e\u0631\u062f\u0627\u062e\u062a \u0634\u062f\u0647 \u062a\u0627 \u0627\u0645\u0631\u0648\u0632',
                        ),
                      }),
                      (0, S.jsx)(c.Copy, {
                        style: { fontSize: 14, color: D.muted },
                        children: (0, h.L)('\u0645\u0627\u0646\u062f\u0647'),
                      }),
                    ],
                  }),
                  (0, S.jsxs)(s.default, {
                    style: c.common.between,
                    children: [
                      (0, S.jsx)(c.Copy, {
                        style: {
                          fontSize: 18,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: (0, L.toman)(H.paid),
                      }),
                      (0, S.jsx)(c.Copy, {
                        testID: 'payslip-left',
                        style: {
                          fontSize: 18,
                          color: D.warning,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children:
                          H.left < 0
                            ? '\u2066\u2212' + (0, L.toman)(-H.left) + '\u2069'
                            : (0, L.toman)(H.left),
                      }),
                    ],
                  }),
                  (0, S.jsx)(s.default, {
                    style: {
                      height: 10,
                      borderRadius: 5,
                      backgroundColor: D.soft,
                      overflow: 'hidden',
                      flexDirection: 'row-reverse',
                    },
                    children: (0, S.jsx)(s.default, {
                      style: {
                        width: `${H.net > 0 ? Math.max(0, Math.min(100, Math.round((100 * H.paid) / H.net))) : 0}%`,
                        backgroundColor: D.accent,
                        borderRadius: 5,
                      },
                    }),
                  }),
                  !!H.payments.length &&
                    (0, S.jsx)(c.Copy, {
                      style: { fontSize: 12.5, color: D.muted },
                      children:
                        (0, h.L)('{n} \u0642\u0633\u0637', {
                          n: (0, h.localDigits)(H.payments.length),
                        }) +
                        ': ' +
                        H.payments
                          .map(
                            (e) =>
                              (0, u.jalaliDayTitle)(e.occurredOn)
                                .split(' ')
                                .slice(0, 2)
                                .join(' ') +
                              ' \xb7 ' +
                              (0, L.toman)(e.amount),
                          )
                          .join('\u060c '),
                    }),
                ],
              }),
            !!H?.employer &&
              (0, S.jsxs)(s.default, {
                testID: 'payslip-employer',
                style: {
                  flexDirection: 'row-reverse',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: 14,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: D.line,
                },
                children: [
                  (0, S.jsx)(c.Copy, {
                    style: { fontSize: 13, color: D.muted },
                    children: (0, h.L)(
                      '\u0628\u0631\u0627\u06cc \u0627\u0637\u0644\u0627\u0639: \u0628\u06cc\u0645\u0647 \u0633\u0647\u0645 \u06a9\u0627\u0631\u0641\u0631\u0645\u0627 ({percent}\u066a)',
                      { percent: (0, h.localDigits)(H.employerPercent) },
                    ),
                  }),
                  (0, S.jsx)(c.Copy, {
                    style: { fontSize: 13, color: D.muted },
                    children: (0, L.toman)(H.employer),
                  }),
                ],
              }),
            H &&
              (0, S.jsxs)(s.default, {
                style: { flexDirection: 'row-reverse', gap: 8 },
                children: [
                  (0, S.jsx)(s.default, {
                    style: { flex: 1.2 },
                    children: (0, S.jsx)(c.Button, {
                      testID: 'payslip-share',
                      disabled: !!k,
                      onPress: () => {
                        U('share', M);
                      },
                      children: (0, h.L)(
                        '\u0627\u0634\u062a\u0631\u0627\u06a9',
                      ),
                    }),
                  }),
                  (0, S.jsx)(s.default, {
                    style: { flex: 1 },
                    children: (0, S.jsx)(c.Button, {
                      testID: 'payslip-print',
                      secondary: !0,
                      wide: !0,
                      disabled: !!k,
                      onPress: () => {
                        U('print', A);
                      },
                      children: (0, h.L)('\u0686\u0627\u067e'),
                    }),
                  }),
                  (0, S.jsx)(s.default, {
                    style: { flex: 1 },
                    children: (0, S.jsx)(c.Button, {
                      testID: 'payslip-pdf',
                      secondary: !0,
                      wide: !0,
                      disabled: !!k,
                      onPress: () => {
                        U('pdf', N);
                      },
                      children: 'PDF',
                    }),
                  }),
                ],
              }),
            H &&
              !H.formal &&
              !H.empty &&
              (0, S.jsx)(c.Copy, {
                style: { fontSize: 11.5, color: D.muted, textAlign: 'center' },
                children: (0, h.L)(
                  '\u0628\u0631\u0627\u06cc \u0641\u06cc\u0634 \u0628\u0627 \u0628\u06cc\u0645\u0647 \u0648 \u0645\u0632\u0627\u06cc\u0627\u060c \xab\u0641\u06cc\u0634 \u0631\u0633\u0645\u06cc\xbb \u0631\u0627 \u062f\u0631 \xab\u062d\u0642\u0648\u0642 \u0645\u0627\u0647\u0627\u0646\u0647\xbb \u0631\u0648\u0634\u0646 \u06a9\u0646.',
                ),
              }),
          ],
        });
      }),
      (_e.StaffRates = function ({ shop: e, onBack: l }) {
        const { colors: r } = (0, y.useTheme)(),
          m = (0, p.useSwr)((0, p.scoped)(e.id, 'staff-rates'), () =>
            (0, j.readStaffRates)(e),
          ),
          [x, g] = (0, t.useState)(null),
          [C, z] = (0, t.useState)(!1),
          [w, V] = (0, t.useState)(0);
        (0, t.useEffect)(() => {
          m.data && !x && g(m.data.rates);
        }, [m.data]);
        const k = m.data?.year,
          B = k ? (0, h.localDigits)(k.year) : '',
          P = (e, t) => g((n) => (n ? { ...n, [e]: { ...n[e], ...t } } : n));
        const _ = [
            {
              key: 'housing',
              title: (0, h.L)('\u062d\u0642 \u0645\u0633\u06a9\u0646'),
              tag: B,
              hint: (0, b.shopUnitText)(
                (0, h.L)(
                  '\u062a\u0648\u0645\u0627\u0646 \u062f\u0631 \u0645\u0627\u0647',
                ),
              ),
              hintPercent: (0, h.L)(
                '\u066a \u062d\u0642\u0648\u0642 \u067e\u0627\u06cc\u0647',
              ),
            },
            {
              key: 'grocery',
              title: (0, h.L)(
                '\u0628\u0646 \u062e\u0648\u0627\u0631\u0628\u0627\u0631',
              ),
              tag: B,
              hint: (0, b.shopUnitText)(
                (0, h.L)(
                  '\u062a\u0648\u0645\u0627\u0646 \u062f\u0631 \u0645\u0627\u0647',
                ),
              ),
              hintPercent: (0, h.L)(
                '\u066a \u062d\u0642\u0648\u0642 \u067e\u0627\u06cc\u0647',
              ),
            },
            {
              key: 'child',
              title: (0, h.L)('\u062d\u0642 \u0627\u0648\u0644\u0627\u062f'),
              tag: B,
              hint: (0, b.shopUnitText)(
                (0, h.L)(
                  '\u062a\u0648\u0645\u0627\u0646\u060c \u0647\u0631 \u0641\u0631\u0632\u0646\u062f',
                ),
              ),
              hintPercent: (0, h.L)(
                '\u066a \u062d\u062f\u0627\u0642\u0644 \u0645\u0632\u062f\u060c \u0647\u0631 \u0641\u0631\u0632\u0646\u062f',
              ),
            },
            {
              key: 'marriage',
              title: (0, h.L)('\u062d\u0642 \u062a\u0623\u0647\u0644'),
              tag: B,
              hint: (0, b.shopUnitText)(
                (0, h.L)(
                  '\u062a\u0648\u0645\u0627\u0646 \u062f\u0631 \u0645\u0627\u0647',
                ),
              ),
              hintPercent: (0, h.L)(
                '\u066a \u062d\u0642\u0648\u0642 \u067e\u0627\u06cc\u0647',
              ),
            },
            {
              key: 'seniority',
              title: (0, h.L)(
                '\u067e\u0627\u06cc\u0647 \u0633\u0646\u0648\u0627\u062a',
              ),
              hint: (0, h.L)(
                '\u0628\u0631\u0627\u06cc \u0647\u0631 \u0646\u0641\u0631 \u062c\u062f\u0627',
              ),
              hintPercent: (0, h.L)(
                '\u066a \u062d\u0642\u0648\u0642 \u067e\u0627\u06cc\u0647',
              ),
            },
            {
              key: 'overtime',
              title: (0, h.L)(
                '\u0627\u0636\u0627\u0641\u0647\u200c\u06a9\u0627\u0631',
              ),
              tag: (0, h.L)(
                '\u0642\u0627\u0646\u0648\u0646 \u06a9\u0627\u0631',
              ),
              hint: (0, b.shopUnitText)(
                (0, h.L)(
                  '\u062a\u0648\u0645\u0627\u0646 \u0647\u0631 \u0633\u0627\u0639\u062a',
                ),
              ),
              hintPercent: (0, h.L)(
                '\u066a \u0645\u0632\u062f \u0647\u0631 \u0633\u0627\u0639\u062a',
              ),
            },
          ],
          F = [
            {
              key: 'insurance',
              title: (0, h.L)(
                '\u0628\u06cc\u0645\u0647 \u0633\u0647\u0645 \u06a9\u0627\u0631\u0645\u0646\u062f',
              ),
              tag: (0, h.L)(
                '\u062a\u0623\u0645\u06cc\u0646 \u0627\u062c\u062a\u0645\u0627\u0639\u06cc',
              ),
              hint: (0, b.shopUnitText)(
                (0, h.L)(
                  '\u062a\u0648\u0645\u0627\u0646 \u062f\u0631 \u0645\u0627\u0647',
                ),
              ),
              hintPercent: (0, h.L)(
                '\u066a \u062d\u0642\u0648\u0642 \u0648 \u0645\u0632\u0627\u06cc\u0627\u06cc \u0645\u0634\u0645\u0648\u0644',
              ),
            },
          ],
          H = k?.taxSteps.filter((e) => e.rate > 0) || [],
          R = H[0]?.from || 0;
        return (0, S.jsxs)(s.default, {
          testID: 'staff-rates-page',
          style: { gap: 12 },
          children: [
            (0, S.jsx)(L.BackLink, {
              label: (0, h.L)(
                '\u0647\u0645\u0647\u0654 \u06a9\u0627\u0631\u0645\u0646\u062f\u0627\u0646',
              ),
              onPress: l,
            }),
            (0, S.jsxs)(s.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
                padding: 14,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: r.accent,
                backgroundColor: (0, L.tint)(r.accent, '1a'),
              },
              children: [
                (0, S.jsx)(c.Copy, {
                  style: { flex: 1, fontSize: 14, lineHeight: 24 },
                  children: (0, h.L)(
                    '\u0627\u0639\u062f\u0627\u062f\u060c \u067e\u06cc\u0634\u200c\u0641\u0631\u0636 \u0631\u0633\u0645\u06cc {year} \u0627\u0633\u062a\u061b \u0647\u0631 \u06a9\u062f\u0627\u0645 \u0631\u0627 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc\u062f \u0639\u0648\u0636 \u06a9\u0646\u06cc\u062f.',
                    { year: B },
                  ),
                }),
                (0, S.jsx)(n.default, {
                  testID: 'staff-rates-default',
                  accessibilityRole: 'button',
                  onPress: () => {
                    k && (g((0, u.defaultRates)(k)), V((e) => e + 1));
                  },
                  hitSlop: 8,
                  children: (0, S.jsx)(c.Copy, {
                    style: {
                      fontSize: 15,
                      color: r.accent,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: (0, h.L)(
                      '\u067e\u06cc\u0634\u200c\u0641\u0631\u0636',
                    ),
                  }),
                }),
              ],
            }),
            !!m.error &&
              !x &&
              (0, S.jsx)(c.Copy, {
                accessibilityRole: 'alert',
                style: { color: r.danger },
                children: (0, L.staffError)(Error(m.error)),
              }),
            x &&
              (0, S.jsxs)(
                s.default,
                {
                  style: { gap: 12 },
                  children: [
                    (0, S.jsx)(c.Copy, {
                      style: {
                        fontSize: 14,
                        color: r.muted,
                        paddingHorizontal: 4,
                      },
                      children: (0, h.L)(
                        '\u0645\u0632\u0627\u06cc\u0627 (\u0628\u0647 \u062d\u0642\u0648\u0642 \u0627\u0636\u0627\u0641\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f)',
                      ),
                    }),
                    (0, S.jsxs)(c.Card, {
                      style: { paddingVertical: 4, paddingHorizontal: 14 },
                      children: [
                        (0, S.jsxs)(s.default, {
                          style: { gap: 8, paddingVertical: 12 },
                          children: [
                            (0, S.jsxs)(s.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                gap: 8,
                              },
                              children: [
                                (0, S.jsx)(c.Copy, {
                                  style: {
                                    fontSize: 16,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                  children: (0, h.L)(
                                    '\u062d\u0642\u0648\u0642 \u067e\u0627\u06cc\u0647',
                                  ),
                                }),
                                (0, S.jsx)(D, {
                                  text: (0, h.L)(
                                    '\u062d\u062f\u0627\u0642\u0644 {year}',
                                    { year: B },
                                  ),
                                }),
                                (0, S.jsx)(c.Copy, {
                                  style: {
                                    flex: 1,
                                    fontSize: 12,
                                    color: r.muted,
                                    textAlign: 'left',
                                  },
                                  children: (0, h.L)(
                                    '\u0647\u0631 \u0646\u0641\u0631 \u062c\u062f\u0627 \u0639\u0648\u0636 \u0645\u06cc\u200c\u0634\u0648\u062f',
                                  ),
                                }),
                              ],
                            }),
                            (0, S.jsx)(I, {
                              mode: 'amount',
                              fixed: !0,
                              value: x.base,
                              hint: (0, b.shopUnitText)(
                                (0, h.L)(
                                  '\u062a\u0648\u0645\u0627\u0646 \u062f\u0631 \u0645\u0627\u0647',
                                ),
                              ),
                              onValue: (e) =>
                                g((t) => (t ? { ...t, base: e } : t)),
                              onMode: () => {},
                              testID: 'staff-rate-base',
                            }),
                          ],
                        }),
                        _.map((e) =>
                          (0, S.jsx)(
                            v,
                            {
                              spec: e,
                              item: x[e.key],
                              onChange: (t) => P(e.key, t),
                            },
                            e.key,
                          ),
                        ),
                      ],
                    }),
                    (0, S.jsx)(c.Copy, {
                      style: {
                        fontSize: 14,
                        color: r.muted,
                        paddingHorizontal: 4,
                      },
                      children: (0, h.L)(
                        '\u06a9\u0633\u0648\u0631\u0627\u062a (\u0627\u0632 \u062d\u0642\u0648\u0642 \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f)',
                      ),
                    }),
                    (0, S.jsxs)(c.Card, {
                      style: { paddingVertical: 4, paddingHorizontal: 14 },
                      children: [
                        F.map((e) =>
                          (0, S.jsx)(
                            v,
                            {
                              first: !0,
                              spec: e,
                              item: x[e.key],
                              onChange: (t) => P(e.key, t),
                            },
                            e.key,
                          ),
                        ),
                        (0, S.jsxs)(s.default, {
                          style: {
                            gap: 6,
                            paddingVertical: 12,
                            borderTopWidth: o.default.hairlineWidth,
                            borderColor: r.line,
                          },
                          children: [
                            (0, S.jsxs)(s.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                gap: 8,
                              },
                              children: [
                                (0, S.jsx)(c.Copy, {
                                  style: {
                                    fontSize: 16,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                  children: (0, h.L)(
                                    '\u0645\u0627\u0644\u06cc\u0627\u062a \u062d\u0642\u0648\u0642',
                                  ),
                                }),
                                (0, S.jsx)(D, {
                                  text: (0, h.L)(
                                    '\u062c\u062f\u0648\u0644 \u0642\u0627\u0646\u0648\u0646\u06cc {year}',
                                    { year: B },
                                  ),
                                }),
                                (0, S.jsx)(s.default, { style: { flex: 1 } }),
                                (0, S.jsx)(T, {
                                  testID: 'staff-rate-tax',
                                  value: x.tax,
                                  onChange: (e) =>
                                    g((t) => (t ? { ...t, tax: e } : t)),
                                }),
                              ],
                            }),
                            (0, S.jsx)(c.Copy, {
                              style: {
                                fontSize: 13,
                                lineHeight: 21,
                                color: r.muted,
                              },
                              children: (0, b.shopUnitText)(
                                (0, h.L)(
                                  '\u062e\u0648\u062f\u06a9\u0627\u0631\u061b \u062a\u0627 {amount} \u062a\u0648\u0645\u0627\u0646 \u062f\u0631 \u0645\u0627\u0647 \u0645\u0639\u0627\u0641\u060c \u0628\u0627\u0644\u0627\u062a\u0631 \u067e\u0644\u0647\u200c\u0627\u06cc {from} \u062a\u0627 {to}\u066a',
                                  {
                                    amount: (0, L.toman)(R),
                                    from: (0, h.localDigits)(H[0]?.rate || 0),
                                    to: (0, h.localDigits)(
                                      H[H.length - 1]?.rate || 0,
                                    ),
                                  },
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, S.jsx)(v, {
                          spec: {
                            key: 'employer',
                            title: (0, h.L)(
                              '\u0628\u06cc\u0645\u0647 \u0633\u0647\u0645 \u06a9\u0627\u0631\u0641\u0631\u0645\u0627 (\u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0627\u0637\u0644\u0627\u0639)',
                            ),
                            hint: (0, b.shopUnitText)(
                              (0, h.L)(
                                '\u062a\u0648\u0645\u0627\u0646 \u062f\u0631 \u0645\u0627\u0647',
                              ),
                            ),
                            hintPercent: (0, h.L)(
                              '\u066a \u0627\u0632 \u062c\u06cc\u0628 \u0645\u063a\u0627\u0632\u0647\u060c \u0646\u0647 \u06a9\u0627\u0631\u0645\u0646\u062f',
                            ),
                            info: !0,
                          },
                          item: x.employer,
                          onChange: (e) => P('employer', e),
                        }),
                      ],
                    }),
                    (0, S.jsx)(c.Copy, {
                      style: {
                        fontSize: 11.5,
                        lineHeight: 18,
                        color: r.muted,
                        paddingHorizontal: 4,
                      },
                      children: (0, h.L)(
                        '\u0642\u0627\u0646\u0648\u0646 \u0647\u0631 \u0633\u0627\u0644 \u0639\u0648\u0636 \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u062c\u062f\u0648\u0644 \u0633\u0627\u0644 \u062a\u0627\u0632\u0647 \u0631\u0627 \u0647\u0631 \u0641\u0631\u0648\u0631\u062f\u06cc\u0646 \u0631\u0648\u06cc \u0633\u0631\u0648\u0631 \u0628\u0647\u200c\u0631\u0648\u0632 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645. \u0627\u06cc\u0646 \u0646\u0633\u062e\u0647\u0654 \u0633\u0627\u062f\u0647 \u0627\u0633\u062a \u0648 \u0641\u0627\u06cc\u0644 \u0644\u06cc\u0633\u062a \u0628\u06cc\u0645\u0647 \u06cc\u0627 \u0627\u0638\u0647\u0627\u0631\u0646\u0627\u0645\u0647\u0654 \u0645\u0627\u0644\u06cc\u0627\u062a\u06cc \u0646\u0645\u06cc\u200c\u0633\u0627\u0632\u062f.',
                      ),
                    }),
                    (0, S.jsx)(c.Button, {
                      testID: 'staff-rates-save',
                      disabled: C,
                      onPress: async function () {
                        if (x) {
                          z(!0);
                          try {
                            const t = await (0, j.saveStaffRates)(
                              e,
                              (0, u.cleanRates)(x, k),
                            );
                            (g(t.rates),
                              (0, f.showToast)(
                                (0, h.L)(
                                  '\u0630\u062e\u06cc\u0631\u0647 \u0634\u062f',
                                ),
                              ));
                          } catch (e) {
                            (0, f.showToast)((0, L.staffError)(e));
                          } finally {
                            z(!1);
                          }
                        }
                      },
                      children: C
                        ? (0, h.L)(
                            '\u062f\u0631 \u062d\u0627\u0644 \u062b\u0628\u062a\u2026',
                          )
                        : (0, h.L)('\u0630\u062e\u06cc\u0631\u0647'),
                    }),
                  ],
                },
                w,
              ),
          ],
        });
      }));
    var t = _r(d[0]);
    _r(d[1]);
    var n = e(_r(d[2])),
      o = e(_r(d[3])),
      l = e(_r(d[4])),
      s = e(_r(d[5])),
      r = _r(d[6]),
      c = _r(d[7]),
      f = _r(d[8]),
      y = _r(d[9]),
      p = _r(d[10]),
      h = _r(d[11]),
      u = _r(d[12]),
      m = _r(d[13]),
      x = _r(d[14]),
      g = _r(d[15]),
      j = _r(d[16]),
      L = _r(d[17]),
      C = _r(d[18]),
      b = _r(d[19]),
      S = _r(d[20]);
    function z({ rows: e }) {
      return (0, S.jsx)(s.default, {
        style: { gap: 2 },
        children: e.map((e) =>
          (0, S.jsxs)(
            s.default,
            {
              style: [c.common.between, { paddingVertical: 7 }],
              children: [
                (0, S.jsx)(c.Copy, {
                  style: { flex: 1, fontSize: 15 },
                  children: e.label,
                }),
                (0, S.jsx)(c.Copy, {
                  style: { fontSize: 15, fontFamily: 'Vazirmatn_700Bold' },
                  children: (0, L.toman)(e.amount),
                }),
              ],
            },
            e.key,
          ),
        ),
      });
    }
    function w({ label: e, value: t, testID: n }) {
      const { colors: l } = (0, y.useTheme)();
      return (0, S.jsxs)(s.default, {
        style: [
          c.common.between,
          {
            paddingTop: 10,
            borderTopWidth: o.default.hairlineWidth,
            borderColor: l.line,
          },
        ],
        children: [
          (0, S.jsx)(c.Copy, {
            style: { fontSize: 16, fontFamily: 'Vazirmatn_700Bold' },
            children: e,
          }),
          (0, S.jsx)(c.Copy, {
            testID: n,
            style: { fontSize: 17, fontFamily: 'Vazirmatn_700Bold' },
            children: (0, L.toman)(t),
          }),
        ],
      });
    }
    function D({ text: e }) {
      const { colors: t } = (0, y.useTheme)();
      return (0, S.jsx)(s.default, {
        style: {
          paddingHorizontal: 8,
          paddingVertical: 1,
          borderRadius: 8,
          backgroundColor: t.accentSoft,
        },
        children: (0, S.jsx)(c.Copy, {
          style: {
            fontSize: 11.5,
            color: t.accent,
            fontFamily: 'Vazirmatn_600SemiBold',
          },
          children: e,
        }),
      });
    }
    function T({ value: e, onChange: t, testID: n }) {
      const { colors: o } = (0, y.useTheme)();
      return (0, S.jsx)(l.default, {
        testID: n,
        value: e,
        onValueChange: t,
        trackColor: { false: o.soft, true: o.accent },
        thumbColor: '#ffffff',
        activeThumbColor: '#ffffff',
      });
    }
    function v({ spec: e, item: t, onChange: n, first: l = !1 }) {
      const { colors: r } = (0, y.useTheme)();
      return (0, S.jsxs)(s.default, {
        testID: 'staff-rate-' + e.key,
        style: {
          gap: 8,
          paddingVertical: 12,
          borderTopWidth: l ? 0 : o.default.hairlineWidth,
          borderColor: r.line,
          opacity: t.on ? 1 : 0.55,
        },
        children: [
          (0, S.jsxs)(s.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 8,
            },
            children: [
              (0, S.jsx)(c.Copy, {
                style: {
                  flexShrink: 1,
                  fontSize: 16,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: e.title,
              }),
              !!e.tag && (0, S.jsx)(D, { text: e.tag }),
              (0, S.jsx)(s.default, { style: { flex: 1 } }),
              (0, S.jsx)(T, {
                testID: 'staff-rate-' + e.key + '-on',
                value: t.on,
                onChange: (e) => n({ on: e }),
              }),
            ],
          }),
          (0, S.jsx)(I, {
            mode: t.mode,
            value: t.value,
            hint: 'percent' === t.mode ? e.hintPercent || '\u066a' : e.hint,
            onValue: (e) => n({ value: e }),
            onMode: (e) => n({ mode: e, value: e === t.mode ? t.value : 0 }),
            testID: 'staff-rate-' + e.key + '-value',
          }),
        ],
      });
    }
    function I({
      mode: e,
      value: n,
      hint: o,
      onValue: l,
      onMode: r,
      fixed: f = !1,
      testID: y,
    }) {
      const [p, u] = (0, t.useState)(n ? String(n) : '');
      return (
        (0, t.useEffect)(() => {
          u(n ? String(n) : '');
        }, [e]),
        (0, S.jsxs)(s.default, {
          style: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 10,
          },
          children: [
            (0, S.jsx)(s.default, {
              style: { width: 118 },
              children: (0, S.jsx)(c.Segmented, {
                compact: !0,
                value: e,
                onChange: (e) => {
                  f || r(e);
                },
                items: [
                  {
                    value: 'amount',
                    label: (0, h.L)('\u0645\u0628\u0644\u063a'),
                  },
                  { value: 'percent', label: '\u066a' },
                ],
              }),
            }),
            (0, S.jsx)(s.default, {
              style: { flex: 1 },
              children: (0, S.jsx)(x.MoneyInput, {
                testID: y,
                value: p,
                onChange: (e) => {
                  u(e);
                  const t = (0, C.parseToman)(e);
                  l(Number.isFinite(t) ? t : 0);
                },
                money: 'amount' === e,
                suffix: o,
              }),
            }),
          ],
        })
      );
    }
  },
  906,
  {
    0: 2,
    1: 94,
    2: 232,
    3: 17,
    4: 240,
    5: 99,
    6: 411,
    7: 407,
    8: 525,
    9: 382,
    10: 489,
    11: 311,
    12: 470,
    13: 661,
    14: 614,
    15: 812,
    16: 907,
    17: 902,
    18: 529,
    19: 435,
    20: 338,
    21: 995,
    22: 336,
    paths: {},
  },
);
