// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 959; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.LiveAccount = function ({
        shop: e,
        person: j,
        filter: z,
        timeZone: w,
        refresh: T,
        opening: D,
        onOpen: I,
        onBook: H,
        onStatement: k,
      }) {
        const { data: V } = (0, x.useSwr)(
            (0, x.scoped)(e.id, 'notebook-shop'),
            () => (0, p.readNotebookShop)(e),
          ),
          { colors: F } = (0, u.useTheme)(),
          [_, O] = (0, n.useState)(null),
          [B, q] = (0, n.useState)(''),
          [R, W] = (0, n.useState)(!0),
          [A, P] = (0, n.useState)(null),
          E = (0, n.useRef)(0);
        async function K() {
          const n = ++E.current;
          (W(!0), q(''));
          try {
            const t = await (0, p.readCurrentAccount)(e, j.id);
            n === E.current && O(t);
          } catch (e) {
            n === E.current && (O(null), q((0, l.message)(e)));
          } finally {
            n === E.current && W(!1);
          }
        }
        ((0, n.useEffect)(() => {
          (O(null), P(null), K());
        }, [e.id, j.id]),
          (0, n.useEffect)(() => {
            T && K();
          }, [T]));
        const M = { fontSize: 12.5, lineHeight: 20, color: F.muted },
          N = {
            success: { bg: F.success + '1f', fg: F.success },
            warning: { bg: F.warningSoft, fg: F.warning },
            cheque: { bg: F.accentSoft, fg: F.accent },
            muted: { bg: F.soft, fg: F.muted },
          };
        if (!_)
          return (0, v.jsxs)(o.default, {
            style: { gap: 8 },
            children: [
              R &&
                (0, v.jsx)(s.Copy, {
                  testID: 'live-account-loading',
                  style: [M, { textAlign: 'center', paddingVertical: 16 }],
                  children: (0, f.L)(
                    '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a \u062d\u0633\u0627\u0628\u2026',
                  ),
                }),
              !!B &&
                (0, v.jsxs)(v.Fragment, {
                  children: [
                    (0, v.jsx)(s.Copy, {
                      accessibilityRole: 'alert',
                      testID: 'live-account-error',
                      style: { fontSize: 13, lineHeight: 22, color: F.danger },
                      children: (0, f.L)(
                        '\u062d\u0633\u0627\u0628 {name} \u0628\u0627\u0632 \u0646\u0634\u062f: {reason}',
                        { name: j.name, reason: B },
                      ),
                    }),
                    (0, v.jsx)(b.SmallKey, {
                      testID: 'live-account-retry',
                      label: (0, f.L)(
                        '\u062a\u0644\u0627\u0634 \u062f\u0648\u0628\u0627\u0631\u0647',
                      ),
                      onPress: K,
                    }),
                  ],
                }),
            ],
          });
        const $ = _.balanceToman,
          U = _.since ? (0, y.dayText)(_.since, w) : '',
          Z = $ > 0 ? F.warning : $ < 0 ? F.accent : F.success,
          G = _.sales.filter((e) => (0, S.matchesFilter)(e, z)),
          J = (0, S.dayIn)(new Date().toISOString(), w),
          Q = _.openCheques,
          X = Q.reduce((e, n) => e + n.amountToman, 0);
        const Y = (e, n, t, i) =>
          (0, v.jsxs)(o.default, {
            testID: e,
            style: { flex: 1, minWidth: 0, gap: 1 },
            children: [
              (0, v.jsx)(s.Copy, {
                numberOfLines: 1,
                adjustsFontSizeToFit: !0,
                minimumFontScale: 0.75,
                style: { fontSize: 11.5, lineHeight: 18, color: F.muted },
                children: n,
              }),
              (0, v.jsx)(s.Copy, {
                numberOfLines: 1,
                adjustsFontSizeToFit: !0,
                minimumFontScale: 0.7,
                style: {
                  fontSize: 14,
                  lineHeight: 22,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: t,
              }),
              !!i &&
                (0, v.jsx)(s.Copy, {
                  numberOfLines: 1,
                  style: { fontSize: 11, lineHeight: 17, color: F.muted },
                  children: i,
                }),
            ],
          });
        return (0, v.jsxs)(o.default, {
          style: { gap: 12, opacity: R ? 0.6 : 1 },
          children: [
            (0, v.jsxs)(s.Card, {
              testID: 'live-account',
              style: { gap: 4, padding: 16 },
              children: [
                (0, v.jsx)(s.Copy, {
                  style: M,
                  children: U
                    ? (0, f.L)(
                        '\u062d\u0633\u0627\u0628 \u062c\u0627\u0631\u06cc {name} \xb7 \u0627\u0632 \u0622\u062e\u0631\u06cc\u0646 \u062a\u0633\u0648\u06cc\u0647 ({day})',
                        { name: j.name, day: U },
                      )
                    : (0, f.L)(
                        '\u062d\u0633\u0627\u0628 \u062c\u0627\u0631\u06cc {name}',
                        { name: j.name },
                      ),
                }),
                (0, v.jsx)(s.Copy, {
                  testID: 'live-account-balance',
                  style: {
                    fontSize: 22,
                    lineHeight: 34,
                    color: Z,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, y.ownerBalance)($),
                }),
                !$ &&
                  (0, v.jsx)(s.Copy, {
                    style: M,
                    children: U
                      ? (0, f.L)(
                          '\u0627\u0632 \u0622\u062e\u0631\u06cc\u0646 \u062a\u0633\u0648\u06cc\u0647 ({day}) \u062e\u0631\u06cc\u062f \u062a\u0627\u0632\u0647\u200c\u0627\u06cc \u0646\u06cc\u0633\u062a. \u0633\u0627\u0628\u0642\u0647\u200c\u06cc \u0642\u0628\u0644\u06cc \u062f\u0631 \xab\u062f\u0641\u062a\u0631 \u06a9\u0627\u0645\u0644\xbb \u0627\u0633\u062a.',
                          { day: U },
                        )
                      : (0, f.L)(
                          '\u0647\u0646\u0648\u0632 \u062e\u0631\u06cc\u062f\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647 \u0627\u0633\u062a.',
                        ),
                  }),
                null !== _.oldestDebtDays &&
                  _.oldestDebtDays > 0 &&
                  (0, v.jsx)(o.default, {
                    testID: 'live-account-oldest',
                    style: {
                      alignSelf: 'flex-start',
                      paddingHorizontal: 9,
                      paddingVertical: 2,
                      borderRadius: 8,
                      backgroundColor: F.warningSoft,
                    },
                    children: (0, v.jsx)(s.Copy, {
                      style: {
                        fontSize: 12,
                        lineHeight: 19,
                        color: F.warning,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: (0, f.L)(
                        '\u0642\u062f\u06cc\u0645\u06cc\u200c\u062a\u0631\u06cc\u0646 \u0628\u062f\u0647\u06cc: {n} \u0631\u0648\u0632',
                        {
                          n: _.oldestDebtDays.toLocaleString(
                            (0, f.numberLocale)(),
                          ),
                        },
                      ),
                    }),
                  }),
                (!!$ || !!_.boughtToman || !!Q.length) &&
                  (0, v.jsxs)(o.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      gap: 10,
                      paddingTop: 8,
                      marginTop: 6,
                      borderTopWidth: i.default.hairlineWidth,
                      borderColor: F.line,
                    },
                    children: [
                      Y(
                        'live-account-bought',
                        (0, f.L)('\u06a9\u0644 \u062e\u0631\u06cc\u062f'),
                        (0, h.fullToman)(_.boughtToman),
                      ),
                      Y(
                        'live-account-paid',
                        (0, f.L)(
                          '\u06a9\u0644 \u067e\u0631\u062f\u0627\u062e\u062a',
                        ),
                        (0, h.fullToman)(_.paidToman),
                      ),
                      Q.length > 0 &&
                        Y(
                          'live-account-cheques',
                          (0, f.L)(
                            '\u0686\u06a9\u200c\u0647\u0627\u06cc \u0648\u0635\u0648\u0644\u200c\u0646\u0634\u062f\u0647',
                          ),
                          (0, h.fullToman)(X),
                          (0, f.L)('{n} \u0641\u0642\u0631\u0647', {
                            n: Q.length.toLocaleString((0, f.numberLocale)()),
                          }),
                        ),
                    ],
                  }),
                (_.pendingInToman > 0 || _.pendingOutToman > 0) &&
                  (0, v.jsx)(s.Copy, {
                    testID: 'live-account-after-cheques',
                    style: [M, { paddingTop: 4 }],
                    children: (0, y.afterChequesLine)(_.afterChequesToman),
                  }),
                (0, v.jsxs)(o.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    gap: 8,
                    paddingTop: 8,
                  },
                  children: [
                    $ > 0 &&
                      (0, v.jsx)(b.SmallKey, {
                        grow: !0,
                        testID: 'live-account-remind',
                        icon: 'send',
                        label: (0, f.L)(
                          '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0628\u062f\u0647\u06cc',
                        ),
                        onPress: async function () {
                          const n = (0, S.debtReminder)(
                            j.name,
                            e.name || '',
                            $,
                            V?.settings?.messages?.reminder,
                          );
                          P(null);
                          try {
                            if (
                              'undefined' != typeof navigator &&
                              navigator.share
                            )
                              try {
                                return void (await navigator.share({
                                  text: n,
                                }));
                              } catch (e) {
                                if (
                                  e instanceof Error &&
                                  'AbortError' === e.name
                                )
                                  return;
                                if (!navigator.clipboard) throw e;
                              }
                            if (
                              'undefined' != typeof navigator &&
                              navigator.clipboard
                            )
                              return (
                                await navigator.clipboard.writeText(n),
                                void P({
                                  text: (0, f.L)(
                                    '\u0645\u062a\u0646 \u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u06a9\u067e\u06cc \u0634\u062f\u061b \u062f\u0631 \u067e\u06cc\u0627\u0645\u200c\u0631\u0633\u0627\u0646 \u0628\u0686\u0633\u0628\u0627\u0646\u06cc\u062f.',
                                  ),
                                  ok: !0,
                                })
                              );
                            throw Error(
                              (0, f.L)(
                                '\u0627\u06cc\u0646 \u0645\u0631\u0648\u0631\u06af\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9\u200c\u06af\u0630\u0627\u0631\u06cc \u0648 \u06a9\u067e\u06cc \u0631\u0627 \u0627\u062c\u0627\u0632\u0647 \u0646\u0645\u06cc\u200c\u062f\u0647\u062f.',
                              ),
                            );
                          } catch (e) {
                            P({
                              text: (0, f.L)(
                                '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc \u0622\u0645\u0627\u062f\u0647 \u0646\u0634\u062f: {reason}',
                                {
                                  reason:
                                    e instanceof Error && e.message
                                      ? e.message
                                      : (0, l.message)(e),
                                },
                              ),
                              ok: !1,
                            });
                          }
                        },
                      }),
                    (0, v.jsx)(b.SmallKey, {
                      grow: !0,
                      testID: 'live-account-statement',
                      icon: 'receipt',
                      label: (0, f.L)(
                        '\u0635\u0648\u0631\u062a\u200c\u062d\u0633\u0627\u0628',
                      ),
                      onPress: k,
                    }),
                  ],
                }),
                !!A &&
                  (0, v.jsx)(s.Copy, {
                    testID: 'live-account-notice',
                    accessibilityRole: 'alert',
                    style: {
                      fontSize: 12.5,
                      lineHeight: 20,
                      color: A.ok ? F.success : F.danger,
                    },
                    children: A.text,
                  }),
              ],
            }),
            !!B &&
              (0, v.jsx)(s.Copy, {
                accessibilityRole: 'alert',
                style: { fontSize: 13, lineHeight: 22, color: F.danger },
                children: (0, f.L)(
                  '\u062d\u0633\u0627\u0628 {name} \u0628\u0647\u200c\u0631\u0648\u0632 \u0646\u0634\u062f: {reason}',
                  { name: j.name, reason: B },
                ),
              }),
            (G.length > 0 || ('all' !== z && _.sales.length > 0)) &&
              (0, v.jsxs)(o.default, {
                style: { gap: 8 },
                children: [
                  (0, v.jsxs)(o.default, {
                    style: [
                      s.common.between,
                      {
                        paddingHorizontal: 4,
                        paddingTop: 2,
                        alignItems: 'baseline',
                      },
                    ],
                    children: [
                      (0, v.jsx)(s.Copy, {
                        numberOfLines: 2,
                        style: {
                          flexShrink: 1,
                          fontSize: 15,
                          lineHeight: 24,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: U
                          ? (0, f.L)(
                              '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u0628\u0639\u062f \u0627\u0632 \u0622\u062e\u0631\u06cc\u0646 \u062a\u0633\u0648\u06cc\u0647 (\u0627\u0632 {day})',
                              { day: U },
                            )
                          : (0, f.L)(
                              '\u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628',
                            ),
                      }),
                      (0, v.jsx)(s.Copy, {
                        numberOfLines: 1,
                        style: [M, { flexShrink: 0 }],
                        children: (0, S.invoiceCount)(G.length),
                      }),
                    ],
                  }),
                  !G.length &&
                    (0, v.jsx)(s.Copy, {
                      testID: 'live-invoices-empty',
                      style: [M, { textAlign: 'center', paddingVertical: 8 }],
                      children: (0, f.L)(
                        '\u0641\u0627\u06a9\u062a\u0648\u0631\u06cc \u067e\u06cc\u062f\u0627 \u0646\u0634\u062f',
                      ),
                    }),
                  !!G.length &&
                    (0, v.jsx)(s.Card, {
                      testID: 'live-invoices',
                      style: { padding: 0, gap: 0, overflow: 'hidden' },
                      children: G.map((e, n) => {
                        const l = (0, S.livePill)(e),
                          c = N[l.tone],
                          u = e.issued || p.issuedSales.has(e.id);
                        return (0, v.jsxs)(
                          t.default,
                          {
                            testID: 'invoice-row',
                            accessibilityRole: 'button',
                            accessibilityLabel: `${(0, S.invoiceTitle)(e)} ${l.text}`,
                            disabled: !!D,
                            onPress: () => I(e),
                            style: ({ pressed: t }) => [
                              s.common.row,
                              {
                                paddingHorizontal: 12,
                                paddingVertical: 11,
                                borderTopWidth: n ? i.default.hairlineWidth : 0,
                                borderColor: F.line,
                                backgroundColor: t ? F.soft : 'transparent',
                                opacity: D === e.id ? 0.5 : 1,
                              },
                            ],
                            children: [
                              (0, v.jsx)(o.default, {
                                style: {
                                  width: 38,
                                  height: 38,
                                  borderRadius: 12,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: F.accentSoft,
                                },
                                children: (0, v.jsx)(s.Copy, {
                                  style: {
                                    fontSize: 15,
                                    lineHeight: 22,
                                    color: F.accent,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                  children: (0, S.invoiceInitial)(j.name),
                                }),
                              }),
                              (0, v.jsxs)(o.default, {
                                style: { flex: 1, minWidth: 0 },
                                children: [
                                  (0, v.jsxs)(o.default, {
                                    style: {
                                      flexDirection: 'row-reverse',
                                      alignItems: 'center',
                                      gap: 6,
                                    },
                                    children: [
                                      (0, v.jsx)(s.Copy, {
                                        numberOfLines: 1,
                                        style: {
                                          flexShrink: 1,
                                          fontSize: 15,
                                          lineHeight: 23,
                                          fontFamily: 'Vazirmatn_600SemiBold',
                                        },
                                        children: (0, S.invoiceTitle)(e),
                                      }),
                                      (() => {
                                        const n = (0, L.issuedMark)(
                                          u,
                                          e.corrected,
                                        );
                                        return (
                                          n &&
                                          (0, v.jsx)(s.Copy, {
                                            testID: n.issued
                                              ? 'invoice-issued'
                                              : 'invoice-not-issued',
                                            numberOfLines: 1,
                                            style: {
                                              flexShrink: 0,
                                              fontSize: 11.5,
                                              lineHeight: 18,
                                              color: n.issued
                                                ? F.accent
                                                : F.muted,
                                              fontFamily: n.issued
                                                ? 'Vazirmatn_600SemiBold'
                                                : 'Vazirmatn_400Regular',
                                            },
                                            children: n.text,
                                          })
                                        );
                                      })(),
                                    ],
                                  }),
                                  (0, v.jsx)(s.Copy, {
                                    numberOfLines: 1,
                                    style: {
                                      fontSize: 12,
                                      lineHeight: 19,
                                      color: F.muted,
                                    },
                                    children: [
                                      (0, y.dayText)(e.occurredAt, w),
                                      (0, S.invoiceSub)(e, w, !1),
                                    ].join((0, f.partSep)()),
                                  }),
                                ],
                              }),
                              (0, v.jsxs)(o.default, {
                                style: {
                                  flexShrink: 0,
                                  maxWidth: '46%',
                                  alignItems: 'flex-start',
                                  gap: 3,
                                },
                                children: [
                                  void 0 !== e.totalToman &&
                                    (0, v.jsx)(s.Copy, {
                                      numberOfLines: 1,
                                      style: {
                                        fontSize: 14.5,
                                        lineHeight: 22,
                                        fontFamily: 'Vazirmatn_700Bold',
                                        color: e.corrected ? F.muted : F.text,
                                        textDecorationLine: e.corrected
                                          ? 'line-through'
                                          : 'none',
                                      },
                                      children: (0, S.invoiceToman)(
                                        e.totalToman,
                                      ),
                                    }),
                                  (0, v.jsx)(o.default, {
                                    testID: 'live-invoice-pill',
                                    style: {
                                      paddingHorizontal: 7,
                                      paddingVertical: 1,
                                      borderRadius: 7,
                                      backgroundColor: c.bg,
                                      maxWidth: '100%',
                                    },
                                    children: (0, v.jsx)(s.Copy, {
                                      numberOfLines: 1,
                                      style: {
                                        fontSize: 11,
                                        lineHeight: 18,
                                        color: c.fg,
                                        fontFamily: 'Vazirmatn_600SemiBold',
                                      },
                                      children: l.text,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.id,
                        );
                      }),
                    }),
                  _.salesCount > _.sales.length &&
                    (0, v.jsx)(s.Copy, {
                      style: [M, { textAlign: 'center' }],
                      children: (0, f.L)(
                        '{n} \u0641\u0627\u06a9\u062a\u0648\u0631 \u0642\u062f\u06cc\u0645\u06cc\u200c\u062a\u0631 \u062f\u0631 \xab\u062f\u0641\u062a\u0631 \u06a9\u0627\u0645\u0644\xbb \u0627\u0633\u062a.',
                        {
                          n: (_.salesCount - _.sales.length).toLocaleString(
                            (0, f.numberLocale)(),
                          ),
                        },
                      ),
                    }),
                ],
              }),
            Q.length > 0 &&
              (0, v.jsxs)(o.default, {
                style: { gap: 8 },
                children: [
                  (0, v.jsxs)(o.default, {
                    style: [
                      s.common.between,
                      { paddingHorizontal: 4, alignItems: 'baseline' },
                    ],
                    children: [
                      (0, v.jsx)(s.Copy, {
                        style: {
                          fontSize: 15,
                          lineHeight: 24,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: (0, f.L)(
                          '\u0686\u06a9\u200c\u0647\u0627\u06cc \u0628\u0627\u0632',
                        ),
                      }),
                      (0, v.jsx)(s.Copy, {
                        style: M,
                        children: (0, f.L)('{n} \u0641\u0642\u0631\u0647', {
                          n: Q.length.toLocaleString((0, f.numberLocale)()),
                        }),
                      }),
                    ],
                  }),
                  (0, v.jsx)(s.Card, {
                    style: { padding: 0, gap: 0, overflow: 'hidden' },
                    children: Q.map((e, n) =>
                      (0, v.jsx)(
                        C,
                        {
                          cheque: e,
                          first: !n,
                          late: (0, y.pastDue)(e, J),
                          today: J,
                        },
                        e.id,
                      ),
                    ),
                  }),
                ],
              }),
            (0, v.jsxs)(t.default, {
              testID: 'live-account-book',
              accessibilityRole: 'button',
              onPress: H,
              style: ({ pressed: e }) => ({
                minHeight: 48,
                borderRadius: 14,
                borderWidth: i.default.hairlineWidth,
                borderColor: F.line,
                backgroundColor: e ? F.soft : F.surface,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 10,
                paddingHorizontal: 14,
                paddingVertical: 10,
              }),
              children: [
                (0, v.jsx)(s.Copy, {
                  numberOfLines: 2,
                  style: {
                    flex: 1,
                    minWidth: 0,
                    fontSize: 14.5,
                    lineHeight: 23,
                    color: F.accent,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, f.L)(
                    '\u062f\u0641\u062a\u0631 \u06a9\u0627\u0645\u0644 {name}',
                    { name: j.name },
                  ),
                }),
                (0, v.jsx)(c.Icon, {
                  name: 'chevron',
                  size: 16,
                  color: F.accent,
                }),
              ],
            }),
          ],
        });
      }));
    var n = r(d[0]);
    r(d[1]);
    var t = e(r(d[2]));
    r(d[3]);
    var i = e(r(d[4])),
      o = e(r(d[5])),
      l = r(d[6]),
      s = r(d[7]),
      c = r(d[8]),
      u = r(d[9]),
      f = r(d[10]),
      h = r(d[11]),
      y = r(d[12]),
      p = r(d[13]),
      x = r(d[14]),
      b = r(d[15]),
      j = r(d[16]),
      S = r(d[17]),
      L = r(d[18]),
      v = r(d[19]);
    function C({ cheque: e, first: n, late: t, today: l }) {
      const p = (0, j.chequeTag)(e, l),
        x =
          'late' === p.kind ||
          'today' === p.kind ||
          'tomorrow' === p.kind ||
          'days' === p.kind,
        { colors: b } = (0, u.useTheme)(),
        S = [
          e.number
            ? (0, f.L)('\u0634 {no}', { no: (0, f.localDigits)(e.number) })
            : '',
          e.bank || '',
          e.payee
            ? (0, f.L)('\u0628\u0647 \u0646\u0627\u0645 {name}', {
                name: e.payee,
              })
            : '',
          e.legacy
            ? (0, f.L)(
                '\u062b\u0628\u062a \u0642\u062f\u06cc\u0645\u06cc\u061b \u062f\u0631 \u0645\u0627\u0646\u062f\u0647 \u0622\u0645\u062f\u0647',
              )
            : '',
        ]
          .filter(Boolean)
          .join(' \xb7 ');
      return (0, v.jsxs)(o.default, {
        testID: 'live-cheque',
        style: [
          s.common.row,
          {
            paddingHorizontal: 12,
            paddingVertical: 11,
            borderTopWidth: n ? 0 : i.default.hairlineWidth,
            borderColor: b.line,
          },
        ],
        children: [
          (0, v.jsx)(o.default, {
            style: {
              width: 38,
              height: 38,
              borderRadius: 12,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: b.accentSoft,
            },
            children: (0, v.jsx)(c.Icon, {
              name: 'cheque',
              size: 18,
              color: b.accent,
            }),
          }),
          (0, v.jsxs)(o.default, {
            style: { flex: 1, minWidth: 0 },
            children: [
              (0, v.jsx)(s.Copy, {
                numberOfLines: 1,
                style: {
                  fontSize: 15,
                  lineHeight: 23,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: (0, h.shopUnitText)(
                  (0, f.L)('{amount} \u062a\u0648\u0645\u0627\u0646', {
                    amount: (0, h.fullToman)(e.amountToman),
                  }),
                ),
              }),
              (0, v.jsx)(s.Copy, {
                numberOfLines: 1,
                style: { fontSize: 12, lineHeight: 19, color: b.muted },
                children:
                  'pay' === e.direction
                    ? [(0, y.chequeName)(e), S].filter(Boolean).join(' \xb7 ')
                    : S || (0, y.chequeName)(e),
              }),
            ],
          }),
          (0, v.jsxs)(o.default, {
            style: { flexShrink: 0, alignItems: 'flex-start', gap: 3 },
            children: [
              (0, v.jsx)(o.default, {
                style: {
                  paddingHorizontal: 7,
                  paddingVertical: 1,
                  borderRadius: 7,
                  backgroundColor: t ? b.danger + '1f' : b.accentSoft,
                },
                children: (0, v.jsx)(s.Copy, {
                  numberOfLines: 1,
                  style: {
                    fontSize: 11,
                    lineHeight: 18,
                    color: t ? b.danger : b.accent,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: (0, f.L)(
                    '\u0633\u0631\u0631\u0633\u06cc\u062f {day}',
                    { day: (0, y.dateText)(e.dueDate) },
                  ),
                }),
              }),
              x &&
                (0, v.jsx)(o.default, {
                  testID: t ? 'live-cheque-late' : 'live-cheque-soon',
                  style: {
                    paddingHorizontal: 7,
                    paddingVertical: 1,
                    borderRadius: 7,
                    backgroundColor:
                      'bad' === p.tone
                        ? b.danger + '1f'
                        : 'warn' === p.tone
                          ? b.warningSoft
                          : b.accentSoft,
                  },
                  children: (0, v.jsx)(s.Copy, {
                    numberOfLines: 1,
                    style: {
                      fontSize: 11,
                      lineHeight: 18,
                      color:
                        'bad' === p.tone
                          ? b.danger
                          : 'warn' === p.tone
                            ? b.warning
                            : b.accent,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: p.label,
                  }),
                }),
            ],
          }),
        ],
      });
    }
  },
  959,
  [
    2, 94, 232, 215, 17, 99, 415, 407, 385, 382, 311, 435, 475, 519, 489, 517,
    530, 956, 957, 338,
  ],
);
