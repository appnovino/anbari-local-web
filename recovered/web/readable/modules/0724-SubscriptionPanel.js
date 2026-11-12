// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 724; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.SubscriptionPanel = function ({ shop: e }) {
        const { colors: B } = (0, p.useTheme)(),
          {
            data: _,
            error: P,
            reload: F,
          } = (0, m.useBilling)(e ? (0, h.shopPath)(e, '/billing') : void 0),
          [A, W] = (0, t.useState)(null),
          [E, N] = (0, t.useState)(''),
          [T, V] = (0, t.useState)(''),
          [M, O] = (0, t.useState)(null),
          [U, q] = (0, t.useState)(!1),
          [K, Q] = (0, t.useState)(''),
          [Z, G] = (0, t.useState)(''),
          [X, Y] = (0, t.useState)(''),
          [J, $] = (0, t.useState)(!1),
          [ee, te] = (0, t.useState)(!1),
          [ne, le] = (0, t.useState)(!1),
          [ie, re] = (0, t.useState)(0),
          [oe, ae] = (0, t.useState)(0),
          se = (0, t.useRef)(null),
          [de, ce] = (0, t.useState)(null),
          [ue, fe] = (0, t.useState)(!1),
          pe = (0, t.useRef)(() => {}),
          he = 'owner' === e?.role,
          me = 'staff' === e?.role,
          ye = oe >= 620,
          ge = oe >= 860,
          xe = (he && _?.scheduled) || null,
          be = (0, x.currentPlan)(_),
          Le = (0, t.useMemo)(
            () =>
              (0, x.upgradeOptions)(_?.plans || [], be.paid, {
                bazaar: C.fromBazaar,
                scheduled: xe?.planId || null,
              }),
            [_, be.paid, xe?.planId],
          ),
          je = (0, t.useMemo)(() => (0, x.periodChoices)(Le), [Le]);
        ((0, t.useEffect)(() => {
          if (!ge || 'undefined' == typeof document) return;
          const e = (e) => {
            if (
              'Enter' !== e.key ||
              e.defaultPrevented ||
              e.isComposing ||
              e.repeat
            )
              return;
            const t = e.target;
            (t &&
              (['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON', 'A'].includes(
                t.tagName,
              ) ||
                t.isContentEditable ||
                ['button', 'radio', 'link'].includes(
                  t.getAttribute('role') || '',
                ))) ||
              (e.preventDefault(), pe.current());
          };
          return (
            document.addEventListener('keydown', e),
            () => document.removeEventListener('keydown', e)
          );
        }, [ge]),
          (0, t.useEffect)(() => {
            Le.length
              ? (A &&
                  Le.some(
                    (e) =>
                      e.plan.id === A.planId &&
                      e.periods.some((e) => e.months === A.months),
                  )) ||
                W((0, x.defaultChoice)(Le, { paid: be.paid }))
              : W(null);
          }, [Le, A]));
        const Ce = Le.find((e) => e.plan.id === A?.planId)?.plan,
          ze = Ce?.periods.find((e) => e.months === A?.months);
        async function Se() {
          if (e && Ce && ze && !se.current) {
            ((se.current = 'bazaar'), te(!0), V(''), N(''));
            try {
              const t = await (0, S.buyWithBazaar)(
                e,
                Ce.id,
                ze.months,
                (0, S.bazaarLaunchQuote)(M),
                (0, S.bazaarDynamicQuote)(M),
              );
              if ('cancelled' === t) return;
              if ('unsupported' === t || 'expired' === t)
                return (
                  V((0, S.bazaarRetryText)(t)),
                  re((e) => e + 1),
                  void F()
                );
              (N(
                (0, j.L)(
                  '\u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0641\u0639\u0627\u0644 \u0634\u062f.',
                ),
              ),
                await F(),
                (0, m.notifyBillingChanged)());
            } catch (e) {
              V(e instanceof Error ? e.message : (0, h.message)(e));
            } finally {
              ((se.current = null), te(!1));
            }
          }
        }
        async function Ie() {
          if (ke) await Se();
          else if (e && Ce && ze && M && !se.current) {
            ((se.current = (0, h.randomUUID)()), te(!0), V(''), N(''));
            try {
              const t = await (0, h.request)(
                (0, h.shopPath)(e, '/billing/checkout'),
                'POST',
                {
                  planId: Ce.id,
                  months: ze.months,
                  ...(Z ? { code: Z } : {}),
                  ...(C.fromBazaar ? { freeOnly: !0 } : {}),
                },
                { key: se.current },
              );
              if (t.activated)
                return (
                  N(
                    (0, j.L)(
                      '\u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u0627 \u0645\u0648\u0641\u0642\u06cc\u062a \u0641\u0639\u0627\u0644 \u0634\u062f.',
                    ),
                  ),
                  G(''),
                  Q(''),
                  await F(),
                  void (0, m.notifyBillingChanged)()
                );
              if (
                t.redirectUrl &&
                !C.fromBazaar &&
                'number' == typeof t.amountToman &&
                t.amountToman !== Ae
              )
                return (
                  V(
                    (0, j.L)(
                      '\u0642\u06cc\u0645\u062a \u0639\u0648\u0636 \u0634\u062f (\u0645\u0647\u0644\u062a \u062a\u062e\u0641\u06cc\u0641 \u062a\u0645\u0627\u0645 \u0634\u062f). \u0645\u0628\u0644\u063a \u062a\u0627\u0632\u0647 \u0631\u0627 \u0628\u0628\u06cc\u0646 \u0648 \u062f\u0648\u0628\u0627\u0631\u0647 \xab\u067e\u0631\u062f\u0627\u062e\u062a\xbb \u0631\u0627 \u0628\u0632\u0646.',
                    ),
                  ),
                  re((e) => e + 1),
                  void F()
                );
              t.redirectUrl &&
                !C.fromBazaar &&
                ('undefined' != typeof window
                  ? window.location.assign(t.redirectUrl)
                  : await l.default.openURL(t.redirectUrl));
            } catch (e) {
              (V((0, h.message)(e)),
                e instanceof Error &&
                  'offer_expired' === e.message &&
                  (re((e) => e + 1), F()));
            } finally {
              ((se.current = null), te(!1));
            }
          }
        }
        function we(e) {
          const t = Le.find((t) => t.plan.id === e);
          if (!t) return;
          const n = t.periods.some((e) => e.months === A?.months);
          (W({
            planId: e,
            months:
              n && A
                ? A.months
                : be.paid && t.periods.some((e) => 12 === e.months)
                  ? 12
                  : be.paid
                    ? t.periods[t.periods.length - 1].months
                    : Math.min(...t.periods.map((e) => e.months)),
          }),
            N(''));
        }
        function De(e) {
          const t = (0, x.periodPick)(Le, A, e);
          t &&
            (W({ planId: t.planId, months: e }),
            N(
              t.switched
                ? (0, j.L)(
                    '\u0627\u06cc\u0646 \u0645\u062f\u062a \u0628\u0631\u0627\u06cc \xab{plan}\xbb \u0627\u0633\u062a\u061b \u0637\u0631\u062d \u0647\u0645 \u0639\u0648\u0636 \u0634\u062f.',
                    { plan: (0, b.planLabel)(t.planId) },
                  )
                : '',
            ));
        }
        async function Re(t) {
          if (e) {
            (ce({ planId: t, preview: null, busy: !0, error: '' }), N(''));
            try {
              const n = await (0, h.request)(
                (0, h.shopPath)(
                  e,
                  '/billing/downgrade?planId=' + encodeURIComponent(t),
                ),
              );
              ce({ planId: t, preview: n, busy: !1, error: '' });
            } catch (e) {
              ce({
                planId: t,
                preview: null,
                busy: !1,
                error: (0, h.message)(e),
              });
            }
          }
        }
        async function ve() {
          if (e && !ue) {
            (fe(!0), V(''));
            try {
              (await (0, h.request)(
                (0, h.shopPath)(e, '/billing/downgrade'),
                'DELETE',
              ),
                N(
                  (0, j.L)(
                    '\u062a\u063a\u06cc\u06cc\u0631 \u0637\u0631\u062d \u0644\u063a\u0648 \u0634\u062f\u061b \u0637\u0631\u062d \u0641\u0639\u0644\u06cc\u200c\u0627\u062a \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
                  ),
                ),
                await F(),
                (0, m.notifyBillingChanged)());
            } catch (e) {
              V((0, h.message)(e));
            } finally {
              fe(!1);
            }
          }
        }
        ((0, t.useEffect)(() => {
          let t = !0;
          if (e && he && Ce && ze)
            return (
              $(!0),
              le(!1),
              V(''),
              (0, h.request)((0, h.shopPath)(e, '/billing/quote'), 'POST', {
                planId: Ce.id,
                months: ze.months,
                ...(Z ? { code: Z } : {}),
              })
                .then((e) => {
                  t && (O(e), Z && Y(''));
                })
                .catch((e) => {
                  t &&
                    (O(null),
                    Z &&
                    e instanceof Error &&
                    ['code_invalid', 'rate_limited'].includes(e.message)
                      ? (Y(v(e)), G(''))
                      : (V(k(e)), le(!0)));
                })
                .finally(() => {
                  t && $(!1);
                }),
              () => {
                t = !1;
              }
            );
          O(null);
        }, [e?.id, he, Ce?.id, ze?.months, Z, ie]),
          (0, t.useEffect)(() => {
            if (!C.fromBazaar || !e || !he) return;
            let t = !0;
            return (
              (async () => {
                (await (0, S.recoverBazaarPurchases)(e)) &&
                  t &&
                  (N(
                    (0, j.L)(
                      '\u062e\u0631\u06cc\u062f \u0642\u0628\u0644\u06cc\u200c\u0627\u062a \u0627\u0632 \u0628\u0627\u0632\u0627\u0631 \u062b\u0628\u062a \u0634\u062f \u0648 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0641\u0639\u0627\u0644 \u0627\u0633\u062a.',
                    ),
                  ),
                  await F(),
                  (0, m.notifyBillingChanged)());
              })(),
              () => {
                t = !1;
              }
            );
          }, [e?.id, he]));
        const ke = C.fromBazaar && !!M && 100 !== M.discountPercent,
          He = ke && (0, S.bazaarDiscountQuote)(M),
          Be =
            !M || (ke && !(0, S.bazaarCreditQuote)(M))
              ? 0
              : Number(M.creditToman || 0),
          Pe =
            !!M &&
            (100 === M.discountPercent ||
              (ke
                ? !!_?.bazaarCheckout
                : !!_?.checkoutAvailable && M.checkoutAvailable)),
          Fe = !!M && M.discountPercent > 0 && (!ke || He),
          Ae = M ? (ke && !He ? M.originalAmountToman : M.finalAmountToman) : 0;
        pe.current = () => {
          he && Ce && ze && Pe && !ee && !J && Ie();
        };
        const We =
            'free' === _?.access
              ? (0, y.recordsLeft)(_.records, e?.timezone)
              : null,
          Ee =
            'free' !== _?.access
              ? ''
              : _.records && null !== We
                ? We <= 0
                  ? (0, j.L)(
                      '\u0637\u0631\u062d \u0631\u0627\u06cc\u06af\u0627\u0646: \u06a9\u0627\u0631\u0647\u0627\u06cc \u0627\u0645\u062a\u062d\u0627\u0646\u06cc \u062a\u0645\u0627\u0645 \u0634\u062f',
                    )
                  : (0, j.L)(
                      '\u0637\u0631\u062d \u0631\u0627\u06cc\u06af\u0627\u0646: {left} \u0627\u0632 {limit} \u06a9\u0627\u0631 \u0627\u0645\u062a\u062d\u0627\u0646\u06cc \u0645\u0627\u0646\u062f\u0647',
                      {
                        left: (0, b.faNumber)(We),
                        limit: (0, b.faNumber)(_.records.limit),
                      },
                    )
                : (0, j.L)(
                    '\u0637\u0631\u062d \u0631\u0627\u06cc\u06af\u0627\u0646',
                  ),
          Ne = be.ends
            ? new Date(be.ends).toLocaleDateString((0, j.dateLocale)(), {
                month: 'long',
                day: 'numeric',
              })
            : '',
          Te = be.paid
            ? (0, b.planLabel)(be.paid) +
              (Ne
                ? '\u060c ' + (0, j.L)('\u062a\u0627 {date}', { date: Ne })
                : '')
            : be.trial
              ? (0, j.L)(
                  '\u062f\u0648\u0631\u0647\u0654 \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc',
                ) +
                (null !== be.days
                  ? '\u060c ' +
                    (0, j.L)(
                      '{n} \u0631\u0648\u0632 \u0645\u0627\u0646\u062f\u0647',
                      { n: (0, b.faNumber)(be.days) },
                    )
                  : '')
              : Ee ||
                (0, j.L)(
                  '\u0628\u062f\u0648\u0646 \u0627\u0634\u062a\u0631\u0627\u06a9',
                ),
          Ve = (e) =>
            Ce?.periods.some((t) => t.months === e)
              ? Ce
              : Le.find((t) => t.periods.some((t) => t.months === e))?.plan,
          Me = (e) => {
            const t = x.ORDER.indexOf(e.id);
            return (
              (t > 0 &&
                (_?.plans || []).find((e) => e.id === x.ORDER[t - 1])) ||
              null
            );
          },
          Oe = (e) => {
            const t = _?.features.find((t) => t.key === e)?.label;
            return t ? (0, j.L)(t) : e;
          },
          Ue = (0, D.jsx)(s.default, {
            style: u.common.row,
            children: (0, D.jsxs)(s.default, {
              testID: 'subscription-current',
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 6,
                paddingHorizontal: 12,
                paddingVertical: 5,
                borderRadius: 999,
                backgroundColor: be.paid || be.trial ? B.accentSoft : B.soft,
              },
              children: [
                (0, D.jsx)(s.default, {
                  style: {
                    width: 7,
                    height: 7,
                    borderRadius: 4,
                    backgroundColor: be.paid
                      ? B.success
                      : be.trial
                        ? B.accent
                        : B.muted,
                  },
                }),
                (0, D.jsx)(u.Copy, {
                  style: {
                    fontSize: 12,
                    lineHeight: 20,
                    fontFamily: 'Vazirmatn_600SemiBold',
                    color: be.paid || be.trial ? B.accent : B.muted,
                  },
                  children: Te,
                }),
              ],
            }),
          }),
          qe = (e, t, n) =>
            (0, D.jsxs)(s.default, {
              testID: n,
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
                padding: 14,
                borderRadius: 16,
                backgroundColor: B.soft,
                borderWidth: o.default.hairlineWidth,
                borderColor: B.line,
              },
              children: [
                (0, D.jsx)(f.Icon, { name: e, size: 20, color: B.muted }),
                (0, D.jsx)(u.Copy, {
                  style: {
                    flex: 1,
                    fontSize: 13,
                    lineHeight: 22,
                    color: B.muted,
                  },
                  children: t,
                }),
              ],
            });
        if (me)
          return (0, D.jsxs)(s.default, {
            style: { gap: 12 },
            children: [
              _ && Ue,
              qe(
                'user',
                (0, j.L)(m.OWNER_ONLY_NOTE),
                'subscription-owner-only',
              ),
            ],
          });
        const Ke = (e) =>
            e.renew
              ? (0, j.L)('\u062a\u0645\u062f\u06cc\u062f {plan}', {
                  plan: (0, b.planLabel)(e.plan.id),
                })
              : e.next
                ? (0, j.L)(
                    '{plan} \u0628\u0639\u062f \u0627\u0632 \u0637\u0631\u062d \u0641\u0639\u0644\u06cc',
                    { plan: (0, b.planLabel)(e.plan.id) },
                  )
                : be.paid
                  ? (0, j.L)(
                      '\u0627\u0631\u062a\u0642\u0627 \u0628\u0647 {plan}',
                      { plan: (0, b.planLabel)(e.plan.id) },
                    )
                  : (0, b.planLabel)(e.plan.id),
          Qe = (e) =>
            e
              ? new Date(e).toLocaleDateString((0, j.dateLocale)(), {
                  month: 'long',
                  day: 'numeric',
                })
              : '',
          Ze = 'Vazirmatn_700Bold',
          Ge = 'Vazirmatn_600SemiBold',
          Xe = (0, x.planLadder)(_?.plans || [], be.paid),
          Ye = he && !!be.paid && !!be.ends && !xe && !de,
          Je =
            he && be.paid && Xe.length > 1
              ? (0, D.jsx)(s.default, {
                  testID: 'plan-ladder',
                  accessibilityRole: 'summary',
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 6,
                  },
                  children: Xe.map((e, n) =>
                    (0, D.jsxs)(
                      t.Fragment,
                      {
                        children: [
                          n > 0 &&
                            (0, D.jsx)(u.Copy, {
                              accessibilityElementsHidden: !0,
                              style: {
                                fontSize: 18,
                                lineHeight: 24,
                                color: B.muted,
                              },
                              children: '\u2039',
                            }),
                          (0, D.jsxs)(s.default, {
                            testID: 'ladder-' + e.id,
                            style: {
                              flex: 1,
                              minWidth: 0,
                              paddingVertical: 10,
                              paddingHorizontal: 8,
                              borderRadius: 14,
                              alignItems: 'center',
                              gap: 2,
                              borderWidth: e.current
                                ? 1.5
                                : o.default.hairlineWidth,
                              borderColor: e.current ? B.accent : B.line,
                              backgroundColor: e.current
                                ? B.accentSoft
                                : B.soft,
                            },
                            children: [
                              (0, D.jsx)(u.Copy, {
                                style: {
                                  fontSize: 15,
                                  lineHeight: 24,
                                  fontFamily: Ze,
                                  color: e.current ? B.accent : B.text,
                                },
                                children: (0, b.planLabel)(e.id),
                              }),
                              e.current
                                ? (0, D.jsx)(u.Copy, {
                                    style: {
                                      fontSize: 11,
                                      lineHeight: 18,
                                      fontFamily: Ge,
                                      color: B.accent,
                                    },
                                    children: (0, j.L)(
                                      '\u0637\u0631\u062d \u0641\u0639\u0644\u06cc',
                                    ),
                                  })
                                : xe?.planId === e.id
                                  ? (0, D.jsx)(u.Copy, {
                                      style: {
                                        fontSize: 11,
                                        lineHeight: 18,
                                        color: B.muted,
                                      },
                                      children: (0, j.L)(
                                        '\u0627\u0632 {date}',
                                        { date: Qe(xe.at) },
                                      ),
                                    })
                                  : e.lower && Ye
                                    ? (0, D.jsx)(i.default, {
                                        testID: 'downgrade-' + e.id,
                                        accessibilityRole: 'button',
                                        onPress: () => {
                                          Re(e.id);
                                        },
                                        hitSlop: 8,
                                        children: (0, D.jsx)(u.Copy, {
                                          style: {
                                            fontSize: 12,
                                            lineHeight: 18,
                                            color: B.accent,
                                            textDecorationLine: 'underline',
                                          },
                                          children: (0, j.L)(
                                            '\u062a\u063a\u06cc\u06cc\u0631 \u0628\u0647 {plan}',
                                            { plan: (0, b.planLabel)(e.id) },
                                          ),
                                        }),
                                      })
                                    : (0, D.jsx)(u.Copy, {
                                        style: {
                                          fontSize: 11,
                                          lineHeight: 18,
                                          color: B.muted,
                                        },
                                        children:
                                          x.ORDER.indexOf(e.id) >
                                          x.ORDER.indexOf(be.paid || '')
                                            ? (0, j.L)(
                                                '\u0628\u0627\u0644\u0627\u062a\u0631',
                                              )
                                            : (0, j.L)(
                                                '\u067e\u0627\u06cc\u06cc\u0646\u200c\u062a\u0631',
                                              ),
                                      }),
                            ],
                          }),
                        ],
                      },
                      e.id,
                    ),
                  ),
                })
              : null,
          $e =
            xe && be.paid
              ? (0, D.jsxs)(s.default, {
                  testID: 'downgrade-scheduled',
                  style: {
                    gap: 8,
                    padding: 14,
                    borderRadius: 16,
                    backgroundColor: B.soft,
                    borderWidth: 1,
                    borderColor: B.line,
                  },
                  children: [
                    (0, D.jsxs)(s.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 10,
                      },
                      children: [
                        (0, D.jsx)(f.Icon, {
                          name: 'clock',
                          size: 20,
                          color: B.accent,
                        }),
                        (0, D.jsx)(u.Copy, {
                          style: {
                            flex: 1,
                            fontSize: 14,
                            lineHeight: 24,
                            fontFamily: Ge,
                          },
                          children: (0, j.L)(
                            '\u0627\u0632 {date} \u0637\u0631\u062d\u062a \xab{plan}\xbb \u0645\u06cc\u200c\u0634\u0648\u062f.',
                            {
                              date: Qe(xe.at),
                              plan: (0, b.planLabel)(xe.planId),
                            },
                          ),
                        }),
                      ],
                    }),
                    (0, D.jsx)(u.Copy, {
                      style: { fontSize: 12, lineHeight: 20, color: B.muted },
                      children: xe.paidUntil
                        ? (0, j.L)(
                            '\u067e\u0648\u0644\u0634 \u0631\u0627 \u062f\u0627\u062f\u0647\u200c\u0627\u06cc\u061b \xab{plan}\xbb \u062a\u0627 {date} \u0641\u0639\u0627\u0644 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f.',
                            {
                              plan: (0, b.planLabel)(xe.planId),
                              date: Qe(xe.paidUntil),
                            },
                          )
                        : (0, j.L)(
                            '\u062a\u0627 \u0622\u0646 \u0631\u0648\u0632 \xab{plan}\xbb \u0628\u0627 \u0647\u0645\u0647\u0654 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a\u0634 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f. \u0628\u0639\u062f \u0627\u0632 \u0622\u0646\u060c \u062a\u0645\u062f\u06cc\u062f \u0628\u0627 \xab{next}\xbb \u0627\u0633\u062a.',
                            {
                              plan: (0, b.planLabel)(be.paid),
                              next: (0, b.planLabel)(xe.planId),
                            },
                          ),
                    }),
                    (0, D.jsx)(i.default, {
                      testID: 'downgrade-cancel',
                      accessibilityRole: 'button',
                      disabled: ue,
                      onPress: () => {
                        ve();
                      },
                      style: { alignSelf: 'flex-end' },
                      children: (0, D.jsx)(u.Copy, {
                        style: {
                          fontSize: 13,
                          color: B.accent,
                          textDecorationLine: 'underline',
                          fontFamily: Ge,
                        },
                        children: ue
                          ? (0, j.L)(
                              '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645\u2026',
                            )
                          : (0, j.L)(
                              '\u0644\u063a\u0648 \u062a\u063a\u06cc\u06cc\u0631 \u0637\u0631\u062d',
                            ),
                      }),
                    }),
                  ],
                })
              : null,
          et = de?.preview,
          tt = (e, t, n = B.text) =>
            (0, D.jsxs)(
              s.default,
              {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'flex-start',
                  gap: 8,
                },
                children: [
                  (0, D.jsx)(u.Copy, {
                    style: { fontSize: 13, lineHeight: 22, color: B.muted },
                    children: '\u2022',
                  }),
                  (0, D.jsx)(u.Copy, {
                    style: { flex: 1, fontSize: 13, lineHeight: 22, color: n },
                    children: e,
                  }),
                ],
              },
              t,
            ),
          nt = de
            ? (0, D.jsxs)(s.default, {
                testID: 'downgrade-confirm',
                style: {
                  gap: 10,
                  padding: 16,
                  borderRadius: 18,
                  borderWidth: 1.5,
                  borderColor: B.danger,
                  backgroundColor: B.surface,
                },
                children: [
                  (0, D.jsx)(u.Copy, {
                    style: { fontSize: 16, lineHeight: 26, fontFamily: Ze },
                    children: (0, j.L)(
                      '\u062a\u063a\u06cc\u06cc\u0631 \u0628\u0647 \xab{plan}\xbb',
                      { plan: (0, b.planLabel)(de.planId) },
                    ),
                  }),
                  et
                    ? (0, D.jsxs)(D.Fragment, {
                        children: [
                          (0, D.jsx)(u.Copy, {
                            style: {
                              fontSize: 13,
                              lineHeight: 22,
                              fontFamily: Ge,
                            },
                            children: (0, j.L)(
                              '\u0627\u0632 {date}\u060c \u0648\u0642\u062a\u06cc \xab{plan}\xbb \u0641\u0639\u0644\u06cc\u200c\u0627\u062a \u062a\u0645\u0627\u0645 \u0634\u0648\u062f\u060c \u0627\u06cc\u0646\u200c\u0647\u0627 \u0639\u0648\u0636 \u0645\u06cc\u200c\u0634\u0648\u062f:',
                              {
                                date: Qe(et.at),
                                plan: (0, b.planLabel)(et.fromPlanId),
                              },
                            ),
                          }),
                          (0, D.jsxs)(s.default, {
                            testID: 'downgrade-changes',
                            style: { gap: 6 },
                            children: [
                              et.staffLosing.length
                                ? tt(
                                    0 === et.staffKept
                                      ? (0, j.L)(
                                          '\u0647\u0645\u0647\u0654 \u06a9\u0627\u0631\u0645\u0646\u062f\u0647\u0627 \u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0634\u0627\u0646 \u0631\u0627 \u0627\u0632 \u062f\u0633\u062a \u0645\u06cc\u200c\u062f\u0647\u0646\u062f: {names}',
                                          {
                                            names: et.staffLosing
                                              .map(
                                                (e) =>
                                                  e.name ||
                                                  (0, j.L)(
                                                    '\u0628\u06cc\u200c\u0646\u0627\u0645',
                                                  ),
                                              )
                                              .join('\u060c '),
                                          },
                                        )
                                      : (0, j.L)(
                                          '\u0627\u06cc\u0646 \u06a9\u0627\u0631\u0645\u0646\u062f\u0647\u0627 \u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0634\u0627\u0646 \u0631\u0627 \u0627\u0632 \u062f\u0633\u062a \u0645\u06cc\u200c\u062f\u0647\u0646\u062f: {names}',
                                          {
                                            names: et.staffLosing
                                              .map(
                                                (e) =>
                                                  e.name ||
                                                  (0, j.L)(
                                                    '\u0628\u06cc\u200c\u0646\u0627\u0645',
                                                  ),
                                              )
                                              .join('\u060c '),
                                          },
                                        ),
                                    'staff',
                                    B.danger,
                                  )
                                : tt(
                                    0 === et.seatsAfter
                                      ? (0, j.L)(
                                          '\u062f\u0631 \xab{plan}\xbb \u06a9\u0627\u0631\u0645\u0646\u062f \u0646\u0645\u06cc\u200c\u0634\u0648\u062f \u0627\u0636\u0627\u0641\u0647 \u06a9\u0631\u062f.',
                                          { plan: (0, b.planLabel)(et.planId) },
                                        )
                                      : (0, j.L)(
                                          '\u06a9\u0627\u0631\u0645\u0646\u062f\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0627\u0634 \u0631\u0627 \u0627\u0632 \u062f\u0633\u062a \u0646\u0645\u06cc\u200c\u062f\u0647\u062f.',
                                        ),
                                    'staff',
                                  ),
                              et.devicesAfter < et.devicesNow &&
                                tt(
                                  1 === et.devicesAfter
                                    ? (0, j.L)(
                                        '\u0647\u0631 \u0646\u0641\u0631 \u0641\u0642\u0637 \u06cc\u06a9 \u062f\u0633\u062a\u06af\u0627\u0647 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 (\u0627\u0644\u0627\u0646 {n}).',
                                        { n: (0, b.faNumber)(et.devicesNow) },
                                      )
                                    : (0, j.L)(
                                        '\u0647\u0631 \u0646\u0641\u0631 {n} \u062f\u0633\u062a\u06af\u0627\u0647 \u0647\u0645\u200c\u0632\u0645\u0627\u0646 (\u0627\u0644\u0627\u0646 {m}).',
                                        {
                                          n: (0, b.faNumber)(et.devicesAfter),
                                          m: (0, b.faNumber)(et.devicesNow),
                                        },
                                      ),
                                  'devices',
                                ),
                              et.featuresLost.length > 0 &&
                                tt(
                                  (0, j.L)(
                                    '\u0627\u06cc\u0646 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a \u0628\u0633\u062a\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f: {list}',
                                    {
                                      list: et.featuresLost
                                        .map(Oe)
                                        .join('\u060c '),
                                    },
                                  ),
                                  'features',
                                ),
                              tt(
                                (0, j.L)(
                                  '\u062a\u0627 \u0622\u0646 \u0631\u0648\u0632 \xab{plan}\xbb \u0628\u0627 \u0647\u0645\u0647\u0654 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a\u0634 \u0645\u06cc\u200c\u0645\u0627\u0646\u062f\u061b \u067e\u0648\u0644\u06cc \u0628\u0631\u0646\u0645\u06cc\u200c\u06af\u0631\u062f\u062f \u0648 \u0627\u0639\u062a\u0628\u0627\u0631\u06cc \u0647\u0645 \u0633\u0627\u062e\u062a\u0647 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                                  { plan: (0, b.planLabel)(et.fromPlanId) },
                                ),
                                'keep',
                              ),
                              tt(
                                (0, j.L)(
                                  '\u0647\u0631 \u0648\u0642\u062a \u062a\u0627 \u0622\u0646 \u0631\u0648\u0632 \u062e\u0648\u0627\u0633\u062a\u06cc\u060c \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u06cc \u0627\u06cc\u0646 \u062a\u063a\u06cc\u06cc\u0631 \u0631\u0627 \u0644\u063a\u0648 \u06a9\u0646\u06cc.',
                                ),
                                'cancel',
                              ),
                            ],
                          }),
                        ],
                      })
                    : (0, D.jsx)(u.Copy, {
                        style: { fontSize: 13, color: B.muted },
                        children: de.busy
                          ? (0, j.L)(
                              '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                            )
                          : '',
                      }),
                  !!de.error &&
                    (0, D.jsx)(u.Copy, {
                      accessibilityRole: 'alert',
                      style: { fontSize: 13, color: B.danger },
                      children: de.error,
                    }),
                  (0, D.jsxs)(s.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      gap: 10,
                      flexWrap: 'wrap',
                    },
                    children: [
                      (0, D.jsx)(s.default, {
                        style: { flex: 1, minWidth: 150 },
                        children: (0, D.jsx)(u.Button, {
                          testID: 'downgrade-confirm-ok',
                          danger: !0,
                          disabled: !et || de.busy,
                          onPress: async function () {
                            if (!e || !de?.preview) return;
                            const t = de;
                            ce({ ...t, busy: !0, error: '' });
                            try {
                              (await (0, h.request)(
                                (0, h.shopPath)(e, '/billing/downgrade'),
                                'POST',
                                { planId: t.planId },
                              ),
                                ce(null),
                                N(
                                  (0, j.L)(
                                    '\u062a\u063a\u06cc\u06cc\u0631 \u0637\u0631\u062d \u062b\u0628\u062a \u0634\u062f\u061b \u062a\u0627 \u067e\u0627\u06cc\u0627\u0646 \u0637\u0631\u062d \u0641\u0639\u0644\u06cc \u0686\u06cc\u0632\u06cc \u0639\u0648\u0636 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f.',
                                  ),
                                ),
                                await F(),
                                (0, m.notifyBillingChanged)());
                            } catch (e) {
                              ce({ ...t, busy: !1, error: (0, h.message)(e) });
                            }
                          },
                          children:
                            de.busy && et
                              ? (0, j.L)(
                                  '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645\u2026',
                                )
                              : (0, j.L)(
                                  '\u062a\u0623\u06cc\u06cc\u062f \u062a\u063a\u06cc\u06cc\u0631',
                                ),
                        }),
                      }),
                      (0, D.jsx)(s.default, {
                        style: { flex: 1, minWidth: 110 },
                        children: (0, D.jsx)(u.Button, {
                          testID: 'downgrade-confirm-back',
                          secondary: !0,
                          onPress: () => ce(null),
                          children: (0, j.L)(
                            '\u0627\u0646\u0635\u0631\u0627\u0641',
                          ),
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null,
          lt = (e, t, n = !1, l = B.text) =>
            (0, D.jsxs)(s.default, {
              style: u.common.between,
              children: [
                (0, D.jsx)(u.Copy, {
                  style: {
                    fontSize: n ? 15 : 13,
                    color: n ? B.text : B.muted,
                    fontFamily: n
                      ? 'Vazirmatn_700Bold'
                      : 'Vazirmatn_400Regular',
                  },
                  children: e,
                }),
                (0, D.jsx)(u.Copy, {
                  style: {
                    fontSize: n ? 20 : 13,
                    lineHeight: n ? 32 : 22,
                    color: l,
                    fontFamily: n ? 'Vazirmatn_700Bold' : 'Vazirmatn_500Medium',
                  },
                  children: t,
                }),
              ],
            }),
          it = (he && _?.refund) || null,
          rt =
            C.fromBazaar && 'offer' === M?.codeKind
              ? 'offer' === M.discountSource && M.discountPercent > 0
                ? (0, j.L)(
                    '\u062a\u062e\u0641\u06cc\u0641 \u0647\u0645\u06cc\u0646 \u06a9\u062f \u062f\u0631 \u0628\u0627\u0632\u0627\u0631 \u062e\u0648\u062f\u06a9\u0627\u0631 \u0631\u0648\u06cc \u0642\u06cc\u0645\u062a \u0622\u0645\u062f\u0647\u061b \u0644\u0627\u0632\u0645 \u0646\u06cc\u0633\u062a \u06a9\u0627\u0631\u06cc \u0628\u06a9\u0646\u06cc.',
                  )
                : (0, j.L)(
                    '\u0627\u06cc\u0646 \u06a9\u062f \u062f\u0631 \u0646\u0633\u062e\u0647\u0654 \u0628\u0627\u0632\u0627\u0631 \u06a9\u0627\u0631 \u0646\u0645\u06cc\u200c\u06a9\u0646\u062f (\u0628\u0627\u0632\u0627\u0631 \u0641\u0642\u0637 \u0642\u06cc\u0645\u062a \u062e\u0648\u062f\u0634 \u0631\u0627 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f)\u061b \u0628\u0631\u0627\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0627\u0632 \u06a9\u062f \u0627\u0632 \u0633\u0627\u06cc\u062a myanbari.ir \u067e\u0631\u062f\u0627\u062e\u062a \u06a9\u0646.',
                  )
              : ke && M?.codeKind
                ? (0, j.L)(
                    '\u062f\u0631 \u0646\u0633\u062e\u0647\u0654 \u0628\u0627\u0632\u0627\u0631 \u0641\u0642\u0637 \u06a9\u062f\u0647\u0627\u06cc \u0631\u0627\u06cc\u06af\u0627\u0646 (\u06f1\u06f0\u06f0\u066a) \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f\u061b \u0642\u06cc\u0645\u062a \u0647\u0645\u0627\u0646 \u0642\u06cc\u0645\u062a \u0628\u0627\u0632\u0627\u0631 \u0627\u0633\u062a.',
                  )
                : 'referral' === M?.codeKind
                  ? M.referralEligible
                    ? (0, j.L)(
                        '\u06a9\u062f \u0645\u0639\u0631\u0641 \u067e\u0630\u06cc\u0631\u0641\u062a\u0647 \u0634\u062f\u061b \u062a\u062e\u0641\u06cc\u0641 \u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f \u0627\u0639\u0645\u0627\u0644 \u0634\u062f.',
                      )
                    : (0, j.L)(
                        '\u06a9\u062f \u0645\u0639\u0631\u0641 \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f \u062a\u062e\u0641\u06cc\u0641 \u062f\u0627\u0631\u062f.',
                      )
                  : 'discount' === M?.codeKind
                    ? (0, j.L)(
                        '\u06a9\u062f \u062a\u062e\u0641\u06cc\u0641 \u0627\u0639\u0645\u0627\u0644 \u0634\u062f.',
                      )
                    : '',
          ot = (0, D.jsx)(s.default, {
            testID: 'period-choices',
            accessibilityRole: 'radiogroup',
            style: {
              flexDirection: 'row',
              direction: 'ltr',
              padding: 4,
              gap: 4,
              borderRadius: 16,
              backgroundColor: B.soft,
              borderWidth: o.default.hairlineWidth,
              borderColor: B.line,
            },
            children: je.map((e) => {
              const t = A?.months === e,
                n = (0, x.savingsPercent)(Ve(e), e);
              return (0, D.jsxs)(
                i.default,
                {
                  testID: 'period-' + e,
                  accessibilityRole: 'radio',
                  accessibilityState: { selected: t },
                  onPress: () => De(e),
                  style: ({ pressed: e }) => ({
                    flex: 1,
                    flexBasis: 0,
                    minHeight: 54,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 6,
                    paddingHorizontal: 4,
                    backgroundColor: t ? B.surface : 'transparent',
                    borderWidth: t ? 1.5 : 0,
                    borderColor: B.accent,
                    opacity: e ? 0.8 : 1,
                  }),
                  children: [
                    (0, D.jsx)(u.Copy, {
                      style: {
                        fontSize: 14,
                        lineHeight: 22,
                        textAlign: 'center',
                        fontFamily: t
                          ? 'Vazirmatn_700Bold'
                          : 'Vazirmatn_500Medium',
                      },
                      children: m.periodLabels[e],
                    }),
                    n > 0
                      ? (0, D.jsx)(s.default, {
                          style: {
                            marginTop: 2,
                            paddingHorizontal: 8,
                            borderRadius: 999,
                            backgroundColor: B.success,
                          },
                          children: (0, D.jsx)(u.Copy, {
                            numberOfLines: 1,
                            style: {
                              fontSize: 10,
                              lineHeight: 17,
                              color: B.onSuccess,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: (0, j.L)(
                              '{n}\u066a \u0635\u0631\u0641\u0647\u200c\u062c\u0648\u06cc\u06cc',
                              { n: (0, b.faNumber)(n) },
                            ),
                          }),
                        })
                      : (0, D.jsx)(u.Copy, {
                          numberOfLines: 1,
                          style: {
                            marginTop: 2,
                            fontSize: 10,
                            lineHeight: 17,
                            color: B.muted,
                          },
                          children:
                            1 === e
                              ? (0, j.L)(
                                  '\u0628\u062f\u0648\u0646 \u062a\u0639\u0647\u062f',
                                )
                              : ' ',
                        }),
                  ],
                },
                e,
              );
            }),
          }),
          at = qe(
            'lock',
            (0, j.L)(
              '\u0641\u0642\u0637 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u062e\u0631\u062f.',
            ),
            'subscription-owner-only',
          ),
          st = (0, D.jsxs)(s.default, {
            style: { gap: 10 },
            children: [
              (0, D.jsxs)(i.default, {
                testID: 'subscription-code-toggle',
                accessibilityRole: 'button',
                accessibilityState: { expanded: U },
                onPress: () => q((e) => !e),
                style: ({ pressed: e }) => ({
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 10,
                  padding: 14,
                  borderRadius: 16,
                  borderWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: Z ? B.success : B.accent,
                  backgroundColor: Z ? B.soft : B.accentSoft,
                  opacity: e ? 0.85 : 1,
                }),
                children: [
                  (0, D.jsx)(f.Icon, {
                    name: 'gift',
                    size: 20,
                    color: Z ? B.success : B.accent,
                  }),
                  (0, D.jsx)(u.Copy, {
                    style: {
                      flex: 1,
                      fontSize: 14,
                      fontFamily: 'Vazirmatn_600SemiBold',
                      color: Z ? B.success : B.accent,
                    },
                    children:
                      Z ||
                      (0, j.L)(
                        '\u06a9\u062f \u062a\u062e\u0641\u06cc\u0641 \u06cc\u0627 \u06a9\u062f \u0645\u0639\u0631\u0641 \u062f\u0627\u0631\u06cc\u061f',
                      ),
                  }),
                  (0, D.jsx)(f.Icon, {
                    name: U ? 'up' : 'down',
                    size: 18,
                    color: B.muted,
                  }),
                ],
              }),
              U &&
                (0, D.jsxs)(s.default, {
                  style: { gap: 8 },
                  children: [
                    (0, D.jsxs)(s.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        gap: 8,
                        alignItems: 'center',
                      },
                      children: [
                        (0, D.jsx)(s.default, {
                          style: { flex: 1 },
                          children: (0, D.jsx)(u.Input, {
                            ltr: !0,
                            testID: 'subscription-code',
                            accessibilityLabel: (0, j.L)(
                              '\u06a9\u062f \u062a\u062e\u0641\u06cc\u0641 \u06cc\u0627 \u06a9\u062f \u0645\u0639\u0631\u0641',
                            ),
                            autoCapitalize: 'characters',
                            autoCorrect: !1,
                            value: K,
                            onChangeText: (e) => {
                              (Q(
                                R(e)
                                  .toUpperCase()
                                  .replace(/[^A-Z0-9-]/g, ''),
                              ),
                                Y(''));
                            },
                            onSubmitEditing: () => {
                              const e = K.trim();
                              e && G(e);
                            },
                            placeholder: 'CODE',
                          }),
                        }),
                        (0, D.jsx)(s.default, {
                          style: { minWidth: 92 },
                          children: (0, D.jsx)(u.Button, {
                            testID: 'subscription-code-apply',
                            disabled: !K.trim() || J || K.trim() === Z,
                            onPress: () => {
                              (G(K.trim()), N(''));
                            },
                            children: (0, j.L)(
                              '\u0627\u0639\u0645\u0627\u0644',
                            ),
                          }),
                        }),
                      ],
                    }),
                    !!X &&
                      (0, D.jsx)(u.Copy, {
                        accessibilityRole: 'alert',
                        style: { fontSize: 13, color: B.danger },
                        children: X,
                      }),
                    !!Z &&
                      !!rt &&
                      (0, D.jsx)(u.Copy, {
                        style: {
                          fontSize: 13,
                          color:
                            ke ||
                            ('referral' === M?.codeKind && !M.referralEligible)
                              ? B.muted
                              : B.success,
                        },
                        children: rt,
                      }),
                    !!Z &&
                      (0, D.jsx)(i.default, {
                        accessibilityRole: 'button',
                        onPress: () => {
                          (G(''), Q(''), Y(''));
                        },
                        children: (0, D.jsx)(u.Copy, {
                          style: {
                            fontSize: 13,
                            color: B.muted,
                            textDecorationLine: 'underline',
                          },
                          children: (0, j.L)('\u062d\u0630\u0641 \u06a9\u062f'),
                        }),
                      }),
                  ],
                }),
            ],
          }),
          dt =
            Ce && ze
              ? (0, D.jsxs)(D.Fragment, {
                  children: [
                    (0, D.jsxs)(u.Copy, {
                      style: { fontSize: 13, color: B.muted },
                      children: [
                        (0, b.planLabel)(Ce.id),
                        '\u060c ',
                        m.periodLabels[ze.months],
                      ],
                    }),
                    J && !M
                      ? (0, D.jsx)(u.Copy, {
                          style: { color: B.muted },
                          children: (0, j.L)(
                            '\u062f\u0631 \u062d\u0627\u0644 \u0645\u062d\u0627\u0633\u0628\u0647\u2026',
                          ),
                        })
                      : M
                        ? (0, D.jsxs)(D.Fragment, {
                            children: [
                              lt(
                                (0, j.L)('\u0642\u06cc\u0645\u062a'),
                                (0, L.planMoney)(M.originalAmountToman, {
                                  full: !0,
                                  hint: !1,
                                }),
                              ),
                              Fe &&
                                lt(
                                  (0, j.L)(
                                    '\u062a\u062e\u0641\u06cc\u0641 ({label}\u060c {n}\u066a)',
                                    {
                                      label: (0, b.discountLabel)(
                                        M.discountSource,
                                      ),
                                      n: (0, b.faNumber)(M.discountPercent),
                                    },
                                  ),
                                  '\u2212 ' +
                                    (0, L.planMoney)(
                                      M.originalAmountToman -
                                        (M.discountedAmountToman ??
                                          M.finalAmountToman + Be),
                                      { full: !0, hint: !1 },
                                    ),
                                  !1,
                                  B.success,
                                ),
                              Be > 0 &&
                                (0, D.jsx)(s.default, {
                                  testID: 'subscription-credit',
                                  children: lt(
                                    (0, j.L)(
                                      '\u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647\u200c\u0627\u062a',
                                    ),
                                    '\u2212 ' +
                                      (0, L.planMoney)(Be, {
                                        full: !0,
                                        hint: !1,
                                      }),
                                    !1,
                                    B.success,
                                  ),
                                }),
                              (0, D.jsx)(s.default, {
                                style: {
                                  height: o.default.hairlineWidth,
                                  backgroundColor: B.line,
                                },
                              }),
                              (0, D.jsx)(s.default, {
                                testID: 'subscription-total',
                                children: lt(
                                  (0, j.L)(
                                    '\u0645\u0628\u0644\u063a \u0642\u0627\u0628\u0644 \u067e\u0631\u062f\u0627\u062e\u062a',
                                  ),
                                  (0, L.planMoney)(Ae, { full: !0, hint: !1 }),
                                  !0,
                                ),
                              }),
                              !!(0, L.usdHint)(Ae) &&
                                (0, D.jsx)(u.Copy, {
                                  style: { fontSize: 11, color: B.muted },
                                  children: (0, L.usdHint)(Ae),
                                }),
                              'IRT' !== (0, L.planCurrency)() &&
                                (0, D.jsx)(u.Copy, {
                                  style: { fontSize: 12, color: B.muted },
                                  children: (0, j.L)(
                                    '\u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0647 \u062a\u0648\u0645\u0627\u0646: {amount}',
                                    { amount: (0, b.toman)(Ae) },
                                  ),
                                }),
                              Be > 0 &&
                                (0, D.jsx)(u.Copy, {
                                  testID: 'subscription-credit-note',
                                  style: {
                                    fontSize: 13,
                                    lineHeight: 22,
                                    color: B.success,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: (0, j.L)(
                                    '{amount} \u06a9\u0647 \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u06a9\u0645 \u0634\u062f\u061b \u062f\u0648\u0631\u0647\u0654 {plan} \u0641\u0639\u0644\u06cc\u200c\u0627\u062a \u0628\u0627 \u0647\u0645\u06cc\u0646 \u062e\u0631\u06cc\u062f \u0639\u0648\u0636 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                                    {
                                      amount: (0, L.planMoney)(Be, {
                                        full: !0,
                                        hint: !1,
                                      }),
                                      plan: (0, b.planLabel)(
                                        M.credit?.planId ||
                                          be.paid ||
                                          'standard',
                                      ),
                                    },
                                  ),
                                }),
                            ],
                          })
                        : ne
                          ? (0, D.jsx)(i.default, {
                              testID: 'subscription-quote-retry',
                              accessibilityRole: 'button',
                              onPress: () => re((e) => e + 1),
                              children: (0, D.jsx)(u.Copy, {
                                style: {
                                  fontSize: 13,
                                  color: B.accent,
                                  textDecorationLine: 'underline',
                                },
                                children: (0, j.L)(
                                  '\u062f\u0648\u0628\u0627\u0631\u0647 \u062d\u0633\u0627\u0628 \u06a9\u0646',
                                ),
                              }),
                            })
                          : null,
                  ],
                })
              : null,
          ct = (0, D.jsxs)(s.default, {
            style: {
              gap: 10,
              paddingTop: 12,
              borderTopWidth: o.default.hairlineWidth,
              borderTopColor: B.line,
            },
            children: [
              !Pe &&
                !!M &&
                qe(
                  'wallet',
                  ke
                    ? (0, j.L)(
                        '\u062e\u0631\u06cc\u062f \u0628\u0627 \u06a9\u0627\u0641\u0647\u200c\u0628\u0627\u0632\u0627\u0631 \u0627\u0644\u0627\u0646 \u0631\u0648\u06cc \u0633\u0631\u0648\u0631 \u0645\u0627 \u0641\u0639\u0627\u0644 \u0646\u06cc\u0633\u062a\u061b \u067e\u0648\u0644\u06cc \u06a9\u0645 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f\u060c \u06a9\u0645\u06cc \u0628\u0639\u062f \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646.',
                      )
                    : 'test_site' === _?.checkoutOff
                      ? (0, j.L)(
                          '\u0627\u06cc\u0646 \u0646\u0633\u062e\u0647\u0654 \u0622\u0632\u0645\u0627\u06cc\u0634\u06cc \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0627\u0633\u062a \u0648 \u067e\u0631\u062f\u0627\u062e\u062a \u0622\u0646\u0644\u0627\u06cc\u0646 \u062f\u0631 \u0622\u0646 \u0639\u0645\u062f\u0627\u064b \u062e\u0627\u0645\u0648\u0634 \u0627\u0633\u062a\u061b \u0627\u06cc\u0646\u062c\u0627 \u067e\u0648\u0644\u06cc \u06af\u0631\u0641\u062a\u0647 \u0646\u0645\u06cc\u200c\u0634\u0648\u062f. \u0628\u0631\u0627\u06cc \u062e\u0631\u06cc\u062f \u0648\u0627\u0642\u0639\u06cc \u0627\u0632 \u0633\u0627\u06cc\u062a myanbari.ir \u06cc\u0627 \u0628\u0631\u0646\u0627\u0645\u0647\u0654 \u0627\u0646\u062f\u0631\u0648\u06cc\u062f \u0648\u0627\u0631\u062f \u0634\u0648.',
                        )
                      : (0, j.L)(
                          '\u067e\u0631\u062f\u0627\u062e\u062a \u0622\u0646\u0644\u0627\u06cc\u0646 \u0628\u0647\u200c\u0632\u0648\u062f\u06cc \u0641\u0639\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                        ),
                  'subscription-payment-soon',
                ),
              Pe &&
                !ke &&
                100 !== M?.discountPercent &&
                (0, D.jsx)(n.VpnNote, {}),
              (0, D.jsx)(u.Button, {
                testID: 'subscription-checkout',
                disabled: !Pe || ee || J,
                onPress: Ie,
                children: ee
                  ? (0, j.L)(
                      '\u062f\u0631 \u062d\u0627\u0644 \u0627\u0646\u062c\u0627\u0645\u2026',
                    )
                  : 100 === M?.discountPercent
                    ? (0, j.L)(
                        '\u0641\u0639\u0627\u0644\u200c\u0633\u0627\u0632\u06cc \u0631\u0627\u06cc\u06af\u0627\u0646',
                      )
                    : M && Ae > 0
                      ? ke
                        ? (0, j.L)(
                            '\u067e\u0631\u062f\u0627\u062e\u062a {amount} \u0628\u0627 \u0628\u0627\u0632\u0627\u0631',
                            {
                              amount: (0, L.planMoney)(Ae, {
                                full: !0,
                                hint: !1,
                              }),
                            },
                          )
                        : (0, j.L)(
                            '\u067e\u0631\u062f\u0627\u062e\u062a {amount}',
                            {
                              amount: (0, L.planMoney)(Ae, {
                                full: !0,
                                hint: !1,
                              }),
                            },
                          )
                      : ke
                        ? (0, j.L)(
                            '\u067e\u0631\u062f\u0627\u062e\u062a \u0628\u0627 \u0628\u0627\u0632\u0627\u0631',
                          )
                        : (0, j.L)(
                            '\u067e\u0631\u062f\u0627\u062e\u062a \u0622\u0646\u0644\u0627\u06cc\u0646',
                          ),
              }),
              !!it?.enabled &&
                !!_?.firstPurchase &&
                !C.fromBazaar &&
                100 !== M?.discountPercent &&
                (0, D.jsx)(u.Copy, {
                  testID: 'refund-promise',
                  style: {
                    fontSize: 12,
                    lineHeight: 20,
                    color: B.success,
                    textAlign: 'center',
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: (0, j.L)(
                    '\u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f\u062a\u0647: \u0627\u06af\u0647 \u0631\u0627\u0636\u06cc \u0646\u0628\u0648\u062f\u06cc\u060c \u062a\u0627 {n} \u0631\u0648\u0632 \u0645\u06cc\u200c\u062a\u0648\u0646\u06cc \u067e\u0648\u0644\u062a \u0631\u0648 \u067e\u0633 \u0628\u06af\u06cc\u0631\u06cc (\u0645\u0646\u0647\u0627\u06cc {fee}\u066a \u06a9\u0627\u0631\u0645\u0632\u062f \u0648 \u0645\u0627\u0644\u06cc\u0627\u062a).',
                    {
                      n: (0, b.faNumber)(it.days),
                      fee: (0, b.faNumber)(it.feePercent),
                    },
                  ),
                }),
              Pe &&
                100 !== M?.discountPercent &&
                (0, D.jsxs)(s.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                  },
                  children: [
                    (0, D.jsx)(f.Icon, {
                      name: 'lock',
                      size: 14,
                      color: B.muted,
                    }),
                    (0, D.jsx)(u.Copy, {
                      style: {
                        fontSize: 11,
                        lineHeight: 18,
                        color: B.muted,
                        textAlign: 'center',
                      },
                      children: ke
                        ? (0, j.L)(
                            '\u067e\u0631\u062f\u0627\u062e\u062a \u0627\u0645\u0646 \u0628\u0627 \u06a9\u0627\u0641\u0647\u200c\u0628\u0627\u0632\u0627\u0631\u061b \u0628\u0639\u062f \u0627\u0632 \u067e\u0631\u062f\u0627\u062e\u062a\u060c \u0627\u0634\u062a\u0631\u0627\u06a9 \u0647\u0645\u0627\u0646 \u0644\u062d\u0638\u0647 \u0641\u0639\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                          )
                        : (0, j.L)(
                            '\u067e\u0631\u062f\u0627\u062e\u062a \u0627\u0645\u0646 \u062f\u0631 \u062f\u0631\u06af\u0627\u0647 \u0628\u0627\u0646\u06a9\u06cc\u061b \u0628\u0639\u062f \u0627\u0632 \u067e\u0631\u062f\u0627\u062e\u062a\u060c \u0627\u0634\u062a\u0631\u0627\u06a9 \u0647\u0645\u0627\u0646 \u0644\u062d\u0638\u0647 \u0641\u0639\u0627\u0644 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                          ),
                    }),
                  ],
                }),
            ],
          }),
          ut = Le.find((e) => e.plan.id === A?.planId) || Le[0],
          ft = (0, D.jsxs)(s.default, {
            testID: 'subscription-desktop',
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'flex-start',
              gap: 20,
            },
            children: [
              (0, D.jsxs)(s.default, {
                style: { flex: 1, minWidth: 0, gap: 14 },
                children: [
                  (0, D.jsx)(u.Copy, {
                    style: { fontSize: 13, color: B.muted, fontFamily: Ge },
                    children: (0, j.L)('\u0645\u062f\u062a'),
                  }),
                  (0, D.jsx)(s.default, {
                    testID: 'period-cards',
                    accessibilityRole: 'radiogroup',
                    style: { flexDirection: 'row-reverse', gap: 12 },
                    children: je.map((e) => {
                      const t = ut?.periods.find((t) => t.months === e),
                        n = A?.months === e,
                        l = t && ut ? (0, x.savingsPercent)(ut.plan, e) : 0,
                        o = t ? (0, x.roundedPerMonth)(t.total_toman, e) : 0;
                      return (0, D.jsxs)(
                        i.default,
                        {
                          testID: 'period-card-' + e,
                          accessibilityRole: 'radio',
                          accessibilityState: { selected: n, disabled: !t },
                          disabled: !t,
                          onPress: () => De(e),
                          style: ({ pressed: e }) => ({
                            flex: 1,
                            flexBasis: 0,
                            minWidth: 0,
                            padding: 14,
                            gap: 6,
                            borderRadius: 18,
                            borderWidth: n ? 2 : 1,
                            borderColor: n ? B.accent : B.line,
                            backgroundColor: n ? B.accentSoft : B.surface,
                            opacity: t ? (e ? 0.9 : 1) : 0.5,
                          }),
                          children: [
                            (0, D.jsxs)(s.default, {
                              style: u.common.between,
                              children: [
                                (0, D.jsxs)(s.default, {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 8,
                                    flexShrink: 1,
                                  },
                                  children: [
                                    (0, D.jsx)(u.Copy, {
                                      style: {
                                        fontSize: 16,
                                        lineHeight: 26,
                                        fontFamily: Ze,
                                      },
                                      children: m.periodLabels[e],
                                    }),
                                    l > 0 &&
                                      (0, D.jsx)(s.default, {
                                        style: {
                                          paddingHorizontal: 8,
                                          borderRadius: 999,
                                          backgroundColor: B.success,
                                        },
                                        children: (0, D.jsx)(u.Copy, {
                                          numberOfLines: 1,
                                          style: {
                                            fontSize: 10,
                                            lineHeight: 18,
                                            color: B.onSuccess,
                                            fontFamily: Ge,
                                          },
                                          children: (0, j.L)(
                                            '{n}\u066a \u0635\u0631\u0641\u0647\u200c\u062c\u0648\u06cc\u06cc',
                                            { n: (0, b.faNumber)(l) },
                                          ),
                                        }),
                                      }),
                                  ],
                                }),
                                (0, D.jsx)(s.default, {
                                  style: {
                                    width: 22,
                                    height: 22,
                                    borderRadius: 11,
                                    borderWidth: 2,
                                    borderColor: n ? B.accent : B.line,
                                    backgroundColor: n
                                      ? B.accent
                                      : 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  },
                                  children:
                                    n &&
                                    (0, D.jsx)(f.Icon, {
                                      name: 'check',
                                      size: 13,
                                      color: B.onAccent,
                                    }),
                                }),
                              ],
                            }),
                            ut &&
                              (0, D.jsxs)(u.Copy, {
                                numberOfLines: 1,
                                style: {
                                  fontSize: 12,
                                  lineHeight: 20,
                                  color: B.muted,
                                },
                                children: [
                                  Ke(ut),
                                  1 === e
                                    ? ' \xb7 ' +
                                      (0, j.L)(
                                        '\u0628\u062f\u0648\u0646 \u062a\u0639\u0647\u062f',
                                      )
                                    : '',
                                ],
                              }),
                            t
                              ? (0, D.jsxs)(D.Fragment, {
                                  children: [
                                    (0, D.jsxs)(s.default, {
                                      style: {
                                        flexDirection: 'row-reverse',
                                        alignItems: 'baseline',
                                        flexWrap: 'wrap',
                                        gap: 6,
                                      },
                                      children: [
                                        (0, D.jsx)(u.Copy, {
                                          style: {
                                            fontSize: 20,
                                            lineHeight: 32,
                                            fontFamily: Ze,
                                          },
                                          children: (0, L.planMoney)(o, {
                                            full: !0,
                                            hint: !1,
                                          }),
                                        }),
                                        (0, D.jsx)(u.Copy, {
                                          style: {
                                            fontSize: 12,
                                            color: B.muted,
                                          },
                                          children: (0, j.L)(
                                            '\u062f\u0631 \u0645\u0627\u0647',
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, D.jsx)(u.Copy, {
                                      style: {
                                        fontSize: 12,
                                        lineHeight: 20,
                                        color: B.muted,
                                      },
                                      children:
                                        e > 1
                                          ? (0, j.L)(
                                              '\u0645\u062c\u0645\u0648\u0639 {amount}',
                                              {
                                                amount: (0, L.planMoney)(
                                                  t.total_toman,
                                                  { full: !0, hint: !1 },
                                                ),
                                              },
                                            )
                                          : (0, j.L)(
                                              '\u0647\u0631 \u0645\u0627\u0647 \u062c\u062f\u0627',
                                            ),
                                    }),
                                  ],
                                })
                              : (0, D.jsx)(u.Copy, {
                                  style: { fontSize: 12, color: B.muted },
                                  children: (0, j.L)(
                                    '\u0627\u06cc\u0646 \u062f\u0648\u0631\u0647 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0637\u0631\u062d \u0646\u06cc\u0633\u062a.',
                                  ),
                                }),
                          ],
                        },
                        e,
                      );
                    }),
                  }),
                  (0, D.jsx)(u.Copy, {
                    style: { fontSize: 13, color: B.muted, fontFamily: Ge },
                    children: (0, j.L)('\u0637\u0631\u062d'),
                  }),
                  (0, D.jsx)(s.default, {
                    accessibilityRole: 'radiogroup',
                    style: {
                      flexDirection: 'row-reverse',
                      gap: 12,
                      alignItems: 'stretch',
                    },
                    children: Le.map((e) => {
                      const t = A?.planId === e.plan.id,
                        n = Me(e.plan),
                        { includesLower: l, keys: d } = (0, x.planHighlights)(
                          e.plan,
                          n,
                        ),
                        c = [
                          (0, j.L)(
                            '\u0631\u0648\u0632\u06cc {n} \u062b\u0628\u062a \u0628\u0627 \u0635\u062f\u0627',
                            { n: (0, b.faNumber)(e.plan.ai_daily_limit) },
                          ),
                          e.plan.member_limit > 1
                            ? (0, j.L)(
                                '\u0635\u0627\u062d\u0628 \u0645\u063a\u0627\u0632\u0647 + {n} \u0647\u0645\u06a9\u0627\u0631',
                                { n: (0, b.faNumber)(e.plan.member_limit - 1) },
                              )
                            : (0, j.L)(
                                '\u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u062e\u0648\u062f\u062a',
                              ),
                          ...d.map(Oe),
                        ];
                      return (0, D.jsxs)(
                        i.default,
                        {
                          testID: 'plan-' + e.plan.id,
                          accessibilityRole: 'radio',
                          accessibilityState: { selected: t },
                          onPress: () => we(e.plan.id),
                          style: ({ pressed: e }) => ({
                            flex: 1,
                            flexBasis: 0,
                            minWidth: 0,
                            padding: 14,
                            gap: 8,
                            borderRadius: 18,
                            borderWidth: t ? 2 : o.default.hairlineWidth,
                            borderColor: t ? B.accent : B.line,
                            backgroundColor: B.surface,
                            opacity: e ? 0.9 : 1,
                          }),
                          children: [
                            (0, D.jsxs)(s.default, {
                              style: u.common.between,
                              children: [
                                (0, D.jsx)(u.Copy, {
                                  style: {
                                    fontSize: 15,
                                    lineHeight: 24,
                                    fontFamily: Ze,
                                    flexShrink: 1,
                                  },
                                  children:
                                    l && n
                                      ? (0, j.L)(
                                          '{plan}: \u0647\u0645\u0647\u0654 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a {lower}\u060c \u0628\u0647\u200c\u0639\u0644\u0627\u0648\u0647',
                                          {
                                            plan: (0, b.planLabel)(e.plan.id),
                                            lower: (0, b.planLabel)(n.id),
                                          },
                                        )
                                      : Ke(e),
                                }),
                                (0, D.jsx)(s.default, {
                                  style: {
                                    width: 22,
                                    height: 22,
                                    borderRadius: 11,
                                    borderWidth: 2,
                                    borderColor: t ? B.accent : B.line,
                                    backgroundColor: t
                                      ? B.accent
                                      : 'transparent',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                  },
                                  children:
                                    t &&
                                    (0, D.jsx)(f.Icon, {
                                      name: 'check',
                                      size: 13,
                                      color: B.onAccent,
                                    }),
                                }),
                              ],
                            }),
                            c.map((e) =>
                              (0, D.jsxs)(
                                s.default,
                                {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    alignItems: 'center',
                                    gap: 8,
                                  },
                                  children: [
                                    (0, D.jsx)(f.Icon, {
                                      name: 'check',
                                      size: 14,
                                      color: B.accent,
                                    }),
                                    (0, D.jsx)(u.Copy, {
                                      style: {
                                        flex: 1,
                                        fontSize: 13,
                                        lineHeight: 22,
                                      },
                                      children: e,
                                    }),
                                  ],
                                },
                                e,
                              ),
                            ),
                          ],
                        },
                        e.plan.id,
                      );
                    }),
                  }),
                  e && !he && at,
                ],
              }),
              he &&
                Ce &&
                ze &&
                (0, D.jsxs)(s.default, {
                  testID: 'subscription-summary',
                  style: {
                    width: 320,
                    gap: 12,
                    padding: 16,
                    borderRadius: 20,
                    backgroundColor: B.soft,
                    borderWidth: o.default.hairlineWidth,
                    borderColor: B.line,
                  },
                  children: [
                    (0, D.jsx)(u.Copy, {
                      style: { fontSize: 16, lineHeight: 26, fontFamily: Ze },
                      children: (0, j.L)(
                        '\u062e\u0644\u0627\u0635\u0647\u0654 \u062e\u0631\u06cc\u062f',
                      ),
                    }),
                    dt,
                    st,
                    ct,
                    Pe &&
                      (0, D.jsx)(u.Copy, {
                        style: {
                          fontSize: 11,
                          lineHeight: 18,
                          color: B.muted,
                          textAlign: 'center',
                        },
                        children: (0, j.L)(
                          '\u06a9\u0644\u06cc\u062f Enter \u0647\u0645 \u067e\u0631\u062f\u0627\u062e\u062a \u0631\u0627 \u0645\u06cc\u200c\u0632\u0646\u062f.',
                        ),
                      }),
                  ],
                }),
            ],
          });
        return (0, D.jsxs)(s.default, {
          style: { gap: 16 },
          onLayout: (e) => ae(e.nativeEvent.layout.width),
          children: [
            !!P &&
              (0, D.jsx)(u.Copy, { accessibilityRole: 'alert', children: P }),
            !_ &&
              !P &&
              (0, D.jsx)(u.Copy, {
                style: { color: B.muted },
                children: (0, j.L)(
                  '\u062f\u0631 \u062d\u0627\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u2026',
                ),
              }),
            _ && Ue,
            _ &&
              (0, D.jsxs)(s.default, {
                style: { gap: 4 },
                children: [
                  (0, D.jsx)(u.Copy, {
                    style: {
                      fontSize: 22,
                      lineHeight: 34,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: be.paid
                      ? (0, j.L)(
                          '\u0627\u0631\u062a\u0642\u0627 \u0648 \u062a\u0645\u062f\u06cc\u062f',
                        )
                      : (0, j.L)(
                          '\u062e\u0631\u06cc\u062f \u0627\u0634\u062a\u0631\u0627\u06a9',
                        ),
                  }),
                  (0, D.jsx)(u.Copy, {
                    style: { fontSize: 13, lineHeight: 22, color: B.muted },
                    children: (0, j.L)(
                      '\u0637\u0631\u062d\u062a \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u061b \u0647\u0631 \u0648\u0642\u062a \u062e\u0648\u0627\u0633\u062a\u06cc \u0627\u0631\u062a\u0642\u0627 \u0628\u062f\u0647 \u06cc\u0627 \u062a\u0645\u062f\u06cc\u062f \u06a9\u0646.',
                    ),
                  }),
                ],
              }),
            _ &&
              !!_.launch &&
              he &&
              (!C.fromBazaar || _.launch.percent === z.BAZAAR_LAUNCH_PERCENT) &&
              (0, D.jsxs)(s.default, {
                testID: 'launch-offer',
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 10,
                  padding: 14,
                  borderRadius: 16,
                  backgroundColor: B.accentSoft,
                  borderWidth: 1,
                  borderColor: B.accent,
                },
                children: [
                  (0, D.jsx)(f.Icon, {
                    name: 'gift',
                    size: 22,
                    color: B.accent,
                  }),
                  (0, D.jsxs)(s.default, {
                    style: { flex: 1, gap: 2 },
                    children: [
                      (0, D.jsx)(u.Copy, {
                        style: {
                          fontSize: 15,
                          lineHeight: 24,
                          fontFamily: 'Vazirmatn_700Bold',
                          color: B.accent,
                        },
                        children: (0, j.L)(
                          '\u062a\u062e\u0641\u06cc\u0641 \u0627\u0641\u062a\u062a\u0627\u062d\u06cc\u0647: {n}\u066a',
                          { n: (0, b.faNumber)(_.launch.percent) },
                        ),
                      }),
                      (0, D.jsx)(u.Copy, {
                        style: { fontSize: 12, lineHeight: 20, color: B.muted },
                        children:
                          _.launch.months &&
                          1 === _.launch.months.length &&
                          1 === _.launch.months[0]
                            ? (0, j.L)(
                                '\u0631\u0648\u06cc \u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f \u06cc\u06a9\u200c\u0645\u0627\u0647\u0647\u060c \u062e\u0648\u062f\u06a9\u0627\u0631 \u0648 \u0628\u062f\u0648\u0646 \u06a9\u062f.',
                              )
                            : (0, j.L)(
                                '\u0631\u0648\u06cc \u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f\u060c \u062e\u0648\u062f\u06a9\u0627\u0631 \u0648 \u0628\u062f\u0648\u0646 \u06a9\u062f.',
                              ),
                      }),
                    ],
                  }),
                ],
              }),
            _ &&
              !!_.offer &&
              'free' === _.access &&
              he &&
              (!C.fromBazaar ||
                ((0, C.bazaarDynamicPrice)() && 'offer' === _.offer.source)) &&
              Date.parse(_.offer.endsAt) > Date.now() &&
              (0, D.jsxs)(s.default, {
                testID: 'free-offer',
                style: {
                  gap: 6,
                  padding: 14,
                  borderRadius: 16,
                  backgroundColor: B.accentSoft,
                  borderWidth: 1.5,
                  borderColor: B.accent,
                },
                children: [
                  (0, D.jsxs)(s.default, {
                    style: {
                      flexDirection: 'row-reverse',
                      alignItems: 'center',
                      gap: 10,
                    },
                    children: [
                      (0, D.jsx)(f.Icon, {
                        name: 'gift',
                        size: 22,
                        color: B.accent,
                      }),
                      (0, D.jsx)(u.Copy, {
                        style: {
                          flex: 1,
                          fontSize: 16,
                          lineHeight: 26,
                          fontFamily: 'Vazirmatn_700Bold',
                          color: B.accent,
                        },
                        children:
                          'winback' === _.offer.source
                            ? (0, j.L)(
                                '\u067e\u06cc\u0634\u0646\u0647\u0627\u062f \u0628\u0627\u0632\u06af\u0634\u062a: {n}\u066a \u062a\u062e\u0641\u06cc\u0641',
                                { n: (0, b.faNumber)(_.offer.percent) },
                              )
                            : (0, j.L)(
                                '\u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u062a\u0648: {n}\u066a \u062a\u062e\u0641\u06cc\u0641 \u0645\u0627\u0647 \u0627\u0648\u0644',
                                { n: (0, b.faNumber)(_.offer.percent) },
                              ),
                      }),
                    ],
                  }),
                  (0, D.jsx)(u.Copy, {
                    style: { fontSize: 12, lineHeight: 20, color: B.muted },
                    children:
                      'winback' === _.offer.source
                        ? (0, j.L)(
                            '\u0645\u0648\u0642\u0639 \u067e\u0631\u062f\u0627\u062e\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                          )
                        : (0, j.L)(
                            '\u0631\u0648\u06cc \u06cc\u06a9 \u0645\u0627\u0647 \u0637\u0631\u062d \u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f \u06cc\u0627 \u067e\u0644\u0627\u0633\u061b \u0645\u0648\u0642\u0639 \u067e\u0631\u062f\u0627\u062e\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                          ),
                  }),
                  (0, D.jsx)(w.Countdown, { endsAt: _.offer.endsAt }),
                ],
              }),
            _ &&
              0 === Le.length &&
              be.paid &&
              qe(
                'wallet',
                (0, j.L)(
                  '\u0628\u0627\u0644\u0627\u062a\u0631\u06cc\u0646 \u0637\u0631\u062d \u0631\u0627 \u062f\u0627\u0631\u06cc.',
                ),
              ),
            Je,
            $e,
            nt,
            ge && Le.length > 0
              ? ft
              : (0, D.jsxs)(D.Fragment, {
                  children: [
                    je.length > 1 && ot,
                    Le.length > 0 &&
                      (0, D.jsx)(s.default, {
                        style: {
                          flexDirection: ye ? 'row-reverse' : 'column',
                          gap: ye ? 12 : 14,
                          alignItems: ye ? 'stretch' : void 0,
                        },
                        children: (0, x.cardsForPeriod)(Le, A?.months).map(
                          (e) => {
                            const t = e.plan.periods.find(
                                (e) => e.months === A?.months,
                              ),
                              n =
                                e.periods.some((e) => e.months === A?.months) &&
                                !!t,
                              l = A?.planId === e.plan.id,
                              p = 'pro' === e.plan.id,
                              h = Me(e.plan),
                              { includesLower: m, keys: y } = (0,
                              x.planHighlights)(e.plan, h),
                              C = t
                                ? (0, x.savingsPercent)(e.plan, t.months)
                                : 0,
                              z = t
                                ? (0, x.roundedPerMonth)(
                                    t.total_toman,
                                    t.months,
                                  )
                                : 0,
                              S = (0, L.usdHint)(z),
                              I = [
                                (0, j.L)(
                                  '\u0631\u0648\u0632\u06cc {n} \u062b\u0628\u062a \u0628\u0627 \u0635\u062f\u0627',
                                  { n: (0, b.faNumber)(e.plan.ai_daily_limit) },
                                ),
                                e.plan.member_limit > 1
                                  ? (0, j.L)(
                                      '\u0635\u0627\u062d\u0628 \u0645\u063a\u0627\u0632\u0647 + {n} \u0647\u0645\u06a9\u0627\u0631',
                                      {
                                        n: (0, b.faNumber)(
                                          e.plan.member_limit - 1,
                                        ),
                                      },
                                    )
                                  : (0, j.L)(
                                      '\u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u062e\u0648\u062f\u062a',
                                    ),
                                ...y.map(Oe),
                              ],
                              w = Ke(e),
                              R = ye ? { flex: 1, flexBasis: 0 } : {},
                              v = (0, D.jsxs)(
                                i.default,
                                {
                                  testID: 'plan-' + e.plan.id,
                                  accessibilityRole: 'radio',
                                  accessibilityState: {
                                    selected: l,
                                    disabled: !n,
                                  },
                                  disabled: !n,
                                  onPress: () => we(e.plan.id),
                                  style: ({ pressed: e }) => ({
                                    ...(p ? (ye ? { flex: 1 } : {}) : R),
                                    borderRadius: 22,
                                    borderWidth: l ? 2 : 1,
                                    borderColor: l || p ? B.accent : B.line,
                                    backgroundColor: B.surface,
                                    opacity: n ? (e ? 0.9 : 1) : 0.5,
                                  }),
                                  children: [
                                    p &&
                                      (0, D.jsx)(d.LinearGradient, {
                                        pointerEvents: 'none',
                                        colors: [B.accentSoft, B.surface],
                                        start: { x: 0.5, y: 0 },
                                        end: { x: 0.5, y: 1 },
                                        style: [
                                          o.default.absoluteFill,
                                          { borderRadius: 20 },
                                        ],
                                      }),
                                    p &&
                                      (0, D.jsx)(s.default, {
                                        style: {
                                          position: 'absolute',
                                          top: -12,
                                          left: 0,
                                          right: 0,
                                          alignItems: 'center',
                                        },
                                        children: (0, D.jsxs)(s.default, {
                                          style: {
                                            flexDirection: 'row-reverse',
                                            alignItems: 'center',
                                            gap: 4,
                                            paddingHorizontal: 12,
                                            paddingVertical: 3,
                                            borderRadius: 999,
                                            overflow: 'hidden',
                                            backgroundColor: B.brand[1],
                                          },
                                          children: [
                                            (0, D.jsx)(c.BrandFill, {
                                              radius: 999,
                                            }),
                                            (0, D.jsx)(s.default, {
                                              children: (0, D.jsx)(f.Icon, {
                                                name: 'bolt',
                                                size: 13,
                                                color: B.onBrand,
                                              }),
                                            }),
                                            (0, D.jsx)(u.Copy, {
                                              style: {
                                                fontSize: 12,
                                                lineHeight: 20,
                                                color: B.onBrand,
                                                fontFamily: 'Vazirmatn_700Bold',
                                              },
                                              children: (0, j.L)(
                                                '\u0645\u062d\u0628\u0648\u0628\u200c\u062a\u0631\u06cc\u0646',
                                              ),
                                            }),
                                          ],
                                        }),
                                      }),
                                    (0, D.jsxs)(s.default, {
                                      style: {
                                        padding: 16,
                                        paddingTop: p ? 22 : 16,
                                        gap: 12,
                                      },
                                      children: [
                                        (0, D.jsxs)(s.default, {
                                          style: u.common.between,
                                          children: [
                                            (0, D.jsxs)(s.default, {
                                              style: u.common.row,
                                              children: [
                                                (0, D.jsxs)(s.default, {
                                                  style: {
                                                    width: 36,
                                                    height: 36,
                                                    borderRadius: 12,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    overflow: 'hidden',
                                                    backgroundColor: p
                                                      ? B.brand[1]
                                                      : B.soft,
                                                  },
                                                  children: [
                                                    p &&
                                                      (0, D.jsx)(c.BrandFill, {
                                                        radius: 12,
                                                      }),
                                                    (0, D.jsx)(s.default, {
                                                      children: (0, D.jsx)(
                                                        f.Icon,
                                                        {
                                                          name: p
                                                            ? 'bolt'
                                                            : 'store',
                                                          size: 19,
                                                          color: p
                                                            ? B.onBrand
                                                            : B.text,
                                                        },
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                (0, D.jsx)(u.Copy, {
                                                  style: {
                                                    fontSize: 18,
                                                    lineHeight: 28,
                                                    fontFamily:
                                                      'Vazirmatn_700Bold',
                                                  },
                                                  children: w,
                                                }),
                                              ],
                                            }),
                                            (0, D.jsx)(s.default, {
                                              style: {
                                                width: 24,
                                                height: 24,
                                                borderRadius: 12,
                                                borderWidth: 2,
                                                borderColor: l
                                                  ? B.accent
                                                  : B.line,
                                                backgroundColor: l
                                                  ? B.accent
                                                  : 'transparent',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                              },
                                              children:
                                                l &&
                                                (0, D.jsx)(f.Icon, {
                                                  name: 'check',
                                                  size: 14,
                                                  color: B.onAccent,
                                                }),
                                            }),
                                          ],
                                        }),
                                        n && t
                                          ? (0, D.jsxs)(s.default, {
                                              style: { gap: 2 },
                                              children: [
                                                (0, D.jsxs)(s.default, {
                                                  style: {
                                                    flexDirection:
                                                      'row-reverse',
                                                    alignItems: 'baseline',
                                                    flexWrap: 'wrap',
                                                    gap: 6,
                                                  },
                                                  children: [
                                                    (0, D.jsx)(u.Copy, {
                                                      style: {
                                                        fontSize: 26,
                                                        lineHeight: 40,
                                                        fontFamily:
                                                          'Vazirmatn_700Bold',
                                                      },
                                                      children: (0,
                                                      L.planMoney)(z, {
                                                        full: !0,
                                                        hint: !1,
                                                      }),
                                                    }),
                                                    (0, D.jsx)(u.Copy, {
                                                      style: {
                                                        fontSize: 13,
                                                        color: B.muted,
                                                      },
                                                      children: (0, j.L)(
                                                        '\u062f\u0631 \u0645\u0627\u0647',
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                                !!S &&
                                                  (0, D.jsx)(u.Copy, {
                                                    style: {
                                                      fontSize: 11,
                                                      lineHeight: 18,
                                                      color: B.muted,
                                                    },
                                                    children: S,
                                                  }),
                                                t.months > 1 &&
                                                  (0, D.jsxs)(u.Copy, {
                                                    style: {
                                                      fontSize: 12,
                                                      lineHeight: 20,
                                                      color: B.muted,
                                                    },
                                                    children: [
                                                      (0, j.L)(
                                                        '\u0645\u062c\u0645\u0648\u0639 {amount}',
                                                        {
                                                          amount: (0,
                                                          L.planMoney)(
                                                            t.total_toman,
                                                            {
                                                              full: !0,
                                                              hint: !1,
                                                            },
                                                          ),
                                                        },
                                                      ),
                                                      C > 0 ? '\u060c ' : '',
                                                      C > 0 &&
                                                        (0, D.jsx)(u.Copy, {
                                                          style: {
                                                            fontSize: 12,
                                                            color: B.success,
                                                            fontFamily:
                                                              'Vazirmatn_600SemiBold',
                                                          },
                                                          children: (0, j.L)(
                                                            '{n}\u066a \u0635\u0631\u0641\u0647\u200c\u062c\u0648\u06cc\u06cc',
                                                            {
                                                              n: (0,
                                                              b.faNumber)(C),
                                                            },
                                                          ),
                                                        }),
                                                    ],
                                                  }),
                                              ],
                                            })
                                          : (0, D.jsx)(u.Copy, {
                                              style: {
                                                fontSize: 13,
                                                color: B.muted,
                                              },
                                              children: (0, j.L)(
                                                '\u0627\u06cc\u0646 \u062f\u0648\u0631\u0647 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0637\u0631\u062d \u0646\u06cc\u0633\u062a.',
                                              ),
                                            }),
                                        (0, D.jsx)(s.default, {
                                          style: {
                                            height: o.default.hairlineWidth,
                                            backgroundColor: B.line,
                                          },
                                        }),
                                        m &&
                                          h &&
                                          (0, D.jsx)(u.Copy, {
                                            style: {
                                              fontSize: 13,
                                              fontFamily:
                                                'Vazirmatn_600SemiBold',
                                            },
                                            children: (0, j.L)(
                                              '\u0647\u0645\u0647\u0654 \u0627\u0645\u06a9\u0627\u0646\u0627\u062a {plan}\u060c \u0628\u0647\u200c\u0639\u0644\u0627\u0648\u0647:',
                                              { plan: (0, b.planLabel)(h.id) },
                                            ),
                                          }),
                                        (0, D.jsx)(s.default, {
                                          style: { gap: 8 },
                                          children: I.map((e) =>
                                            (0, D.jsxs)(
                                              s.default,
                                              {
                                                style: u.common.row,
                                                children: [
                                                  (0, D.jsx)(s.default, {
                                                    style: {
                                                      width: 20,
                                                      height: 20,
                                                      borderRadius: 10,
                                                      alignItems: 'center',
                                                      justifyContent: 'center',
                                                      backgroundColor: p
                                                        ? B.accent
                                                        : B.accentSoft,
                                                    },
                                                    children: (0, D.jsx)(
                                                      f.Icon,
                                                      {
                                                        name: 'check',
                                                        size: 12,
                                                        color: p
                                                          ? B.onAccent
                                                          : B.accent,
                                                      },
                                                    ),
                                                  }),
                                                  (0, D.jsx)(u.Copy, {
                                                    style: {
                                                      flex: 1,
                                                      fontSize: 13,
                                                      lineHeight: 22,
                                                    },
                                                    children: e,
                                                  }),
                                                ],
                                              },
                                              e,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.plan.id,
                              );
                            return p
                              ? (0, D.jsx)(
                                  c.Spark,
                                  {
                                    radius: 22,
                                    width: 2,
                                    style: { ...R, marginTop: 12 },
                                    children: v,
                                  },
                                  e.plan.id,
                                )
                              : v;
                          },
                        ),
                      }),
                    e && !he && Le.length > 0 && at,
                    he &&
                      Ce &&
                      ze &&
                      (0, D.jsxs)(D.Fragment, {
                        children: [
                          st,
                          (0, D.jsx)(u.Card, {
                            style: { gap: 10, padding: 16 },
                            children: dt,
                          }),
                          ct,
                        ],
                      }),
                  ],
                }),
            he &&
              !!_?.retention &&
              !C.fromBazaar &&
              (0, D.jsx)(s.default, {
                testID: 'retention-saved',
                style: {
                  padding: 12,
                  borderRadius: 14,
                  backgroundColor: B.accentSoft,
                },
                children: (0, D.jsx)(u.Copy, {
                  style: {
                    fontSize: 13,
                    lineHeight: 22,
                    color: B.accent,
                    textAlign: 'center',
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: (0, j.L)(
                    '\ud83c\udf81 {p}\u066a \u062a\u062e\u0641\u06cc\u0641 \u062e\u0631\u06cc\u062f \u06cc\u06a9\u200c\u0645\u0627\u0647\u0647\u0654 \u0628\u0639\u062f\u06cc\u062a \u0630\u062e\u06cc\u0631\u0647 \u0634\u062f\u0647\u061b \u0645\u0648\u0642\u0639 \u067e\u0631\u062f\u0627\u062e\u062a \u062e\u0648\u062f\u06a9\u0627\u0631 \u0627\u0639\u0645\u0627\u0644 \u0645\u06cc\u200c\u0634\u0647.',
                    { p: (0, b.faNumber)(_.retention.percent) },
                  ),
                }),
              }),
            it?.request && (0, D.jsx)(H, { request: it.request }),
            e &&
              he &&
              be.paid &&
              'pending' !== it?.request?.status &&
              (0, D.jsx)(I.CancelFlow, {
                shop: e,
                allowRetention: !C.fromBazaar,
                onDone: async () => {
                  (await F(), (0, m.notifyBillingChanged)());
                },
              }),
            !!T &&
              (0, D.jsx)(u.Copy, {
                accessibilityRole: 'alert',
                style: { color: B.danger },
                children: T,
              }),
            !!E &&
              (0, D.jsx)(u.Copy, {
                accessibilityRole: 'alert',
                style: { color: B.success },
                children: E,
              }),
          ],
        });
      }));
    var t = r(_d[0]),
      n = r(_d[1]),
      l = e(r(_d[2]));
    r(_d[3]);
    var i = e(r(_d[4])),
      o = e(r(_d[5])),
      s = e(r(_d[6])),
      d = r(_d[7]),
      c = r(_d[8]),
      u = r(_d[9]),
      f = r(_d[10]),
      p = r(_d[11]),
      h = r(_d[12]),
      m = r(_d[13]),
      y = r(_d[14]),
      x = r(_d[15]),
      b = r(_d[16]),
      L = r(_d[17]),
      j = r(_d[18]),
      C = r(_d[19]),
      z = r(_d[20]),
      S = r(_d[21]),
      I = r(_d[22]),
      w = r(_d[23]),
      D = r(_d[24]);
    const R = (e) =>
      e
        .replace(/[\u06f0-\u06f9]/g, (e) => String(e.charCodeAt(0) - 1776))
        .replace(/[\u0660-\u0669]/g, (e) => String(e.charCodeAt(0) - 1632));
    function v(e) {
      const t = e.details || {};
      if (e instanceof Error && 'rate_limited' === e.message)
        return (0, j.L)(
          '\u0686\u0646\u062f \u0628\u0627\u0631 \u067e\u0634\u062a \u0633\u0631 \u0647\u0645 \u06a9\u062f \u0627\u0634\u062a\u0628\u0627\u0647 \u0648\u0627\u0631\u062f \u0634\u062f\u061b {m} \u062f\u0642\u06cc\u0642\u0647\u0654 \u062f\u06cc\u06af\u0631 \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646.',
          {
            m: (0, b.faNumber)(
              Math.max(1, Math.ceil((t.retryAfter || 600) / 60)),
            ),
          },
        );
      switch (t.reason) {
        case 'months':
          return (0, j.L)(
            '\u0627\u06cc\u0646 \u06a9\u062f \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0627\u0634\u062a\u0631\u0627\u06a9 {period} \u0627\u0633\u062a\u061b \u0647\u0645\u0627\u0646 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
            {
              period: (t.months || [])
                .map((e) => m.periodLabels[e] || String(e))
                .join((0, j.L)(' \u06cc\u0627 ')),
            },
          );
        case 'plan':
          return t.planIds?.length
            ? (0, j.L)(
                '\u0627\u06cc\u0646 \u06a9\u062f \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0627\u0634\u062a\u0631\u0627\u06a9 {plans} \u0627\u0633\u062a\u061b \u0647\u0645\u0627\u0646 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
                {
                  plans: t.planIds
                    .map(b.planLabel)
                    .join((0, j.L)(' \u06cc\u0627 ')),
                },
              )
            : (0, j.L)(
                '\u0627\u06cc\u0646 \u06a9\u062f \u0628\u0631\u0627\u06cc \u0627\u06cc\u0646 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0646\u06cc\u0633\u062a\u061b \u0627\u0634\u062a\u0631\u0627\u06a9 \u062f\u06cc\u06af\u0631\u06cc \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646.',
              );
        case 'expired':
          return (0, j.L)(
            '\u0645\u0647\u0644\u062a \u0627\u06cc\u0646 \u06a9\u062f \u062a\u0645\u0627\u0645 \u0634\u062f\u0647.',
          );
        case 'not_started':
          return (0, j.L)(
            '\u0627\u06cc\u0646 \u06a9\u062f \u0647\u0646\u0648\u0632 \u0641\u0639\u0627\u0644 \u0646\u0634\u062f\u0647.',
          );
        case 'used':
          return (0, j.L)(
            '\u0627\u06cc\u0646 \u06a9\u062f \u0631\u0627 \u0642\u0628\u0644\u0627\u064b \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc.',
          );
        case 'used_up':
          return (0, j.L)(
            '\u0638\u0631\u0641\u06cc\u062a \u0627\u06cc\u0646 \u06a9\u062f \u067e\u0631 \u0634\u062f\u0647.',
          );
        case 'not_yours':
          return (0, j.L)(
            '\u0627\u06cc\u0646 \u06a9\u062f \u0634\u062e\u0635\u06cc \u0627\u0633\u062a \u0648 \u0641\u0642\u0637 \u062f\u0631 \u062d\u0633\u0627\u0628 \u0647\u0645\u0627\u0646 \u06a9\u0633\u06cc \u06a9\u0627\u0631 \u0645\u06cc\u200c\u06a9\u0646\u062f \u06a9\u0647 \u067e\u06cc\u0627\u0645\u06a9\u0634 \u0631\u0627 \u06af\u0631\u0641\u062a\u0647.',
          );
        case 'paid_before':
          return (0, j.L)(
            '\u0627\u06cc\u0646 \u06a9\u062f \u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u0627\u0648\u0644\u06cc\u0646 \u062e\u0631\u06cc\u062f \u0627\u0633\u062a \u0648 \u0627\u06cc\u0646 \u062d\u0633\u0627\u0628 \u0642\u0628\u0644\u0627\u064b \u062e\u0631\u06cc\u062f \u06a9\u0631\u062f\u0647.',
          );
        default:
          return (0, j.L)(
            '\u0627\u06cc\u0646 \u06a9\u062f \u0645\u0639\u062a\u0628\u0631 \u0646\u06cc\u0633\u062a.',
          );
      }
    }
    function k(e) {
      const { category: t } = (0, h.describeError)(e);
      return 'offline' === t || 'timeout' === t
        ? (0, j.L)(
            '\u0642\u06cc\u0645\u062a \u0646\u0647\u0627\u06cc\u06cc \u0627\u0632 \u0633\u0631\u0648\u0631 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0646\u0631\u0633\u06cc\u062f\u060c \u0686\u0648\u0646 \u0627\u062a\u0635\u0627\u0644 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a (\u06cc\u0627 \u0641\u06cc\u0644\u062a\u0631\u0634\u06a9\u0646) \u0686\u0646\u062f \u0644\u062d\u0638\u0647 \u0642\u0637\u0639 \u06cc\u0627 \u062e\u06cc\u0644\u06cc \u06a9\u0646\u062f \u0634\u062f. \u0647\u0646\u0648\u0632 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc \u0634\u0631\u0648\u0639 \u0646\u0634\u062f\u0647 \u0648 \u067e\u0648\u0644\u06cc \u06a9\u0645 \u0646\u0634\u062f\u0647\u061b \xab\u062f\u0648\u0628\u0627\u0631\u0647 \u062d\u0633\u0627\u0628 \u06a9\u0646\xbb \u0631\u0627 \u0628\u0632\u0646.',
          )
        : (0, h.message)(e);
    }
    function H({ request: e }) {
      const { colors: t } = (0, p.useTheme)(),
        n = e.dueAt
          ? new Date(e.dueAt).toLocaleDateString((0, j.dateLocale)(), {
              month: 'long',
              day: 'numeric',
            })
          : '',
        l =
          'pending' === e.status
            ? (0, j.L)(
                '\u0627\u0634\u062a\u0631\u0627\u06a9\u062a \u0644\u063a\u0648 \u0634\u062f \u0648 \u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627\u0632\u06af\u0634\u062a \u0648\u062c\u0647 \u062b\u0628\u062a \u0634\u062f\u0647. \u0645\u0628\u0644\u063a {amount} \u062d\u062f\u0627\u06a9\u062b\u0631 \u062a\u0627 {date} \u0628\u0647 \u06a9\u0627\u0631\u062a\u062a \u0648\u0627\u0631\u06cc\u0632 \u0645\u06cc\u200c\u0634\u0647.',
                {
                  date: n,
                  amount: (0, L.planMoney)(e.amountToman, {
                    full: !0,
                    hint: !1,
                  }),
                },
              )
            : 'refunded' === e.status
              ? (0, j.L)(
                  '\u067e\u0648\u0644 \u067e\u0631\u062f\u0627\u062e\u062a \u0642\u0628\u0644\u06cc\u200c\u0627\u062a \u0628\u0631\u06af\u0634\u062a \u062f\u0627\u062f\u0647 \u0634\u062f.',
                )
              : (0, j.L)(
                  '\u062f\u0631\u062e\u0648\u0627\u0633\u062a \u0628\u0627\u0632\u06af\u0634\u062a \u0648\u062c\u0647 \u067e\u0630\u06cc\u0631\u0641\u062a\u0647 \u0646\u0634\u062f\u061b \u0628\u0631\u0627\u06cc \u062a\u0648\u0636\u06cc\u062d \u0628\u0647 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u067e\u06cc\u0627\u0645 \u0628\u062f\u0647.',
                );
      return (0, D.jsx)(u.Copy, {
        testID: 'refund-status',
        style: {
          fontSize: 13,
          lineHeight: 22,
          textAlign: 'center',
          color: 'rejected' === e.status ? t.muted : t.success,
        },
        children: l,
      });
    }
  },
  724,
  [
    2, 557, 210, 94, 232, 17, 99, 411, 410, 407, 385, 382, 415, 488, 442, 561,
    502, 435, 311, 446, 447, 560, 725, 727, 338,
  ],
);
