// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 723; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.openSubscriptionPage = function () {
        ((Z = !0), $.forEach((e) => e()));
      }),
      (_e.openSupportPage = function () {
        ((G = !0), $.forEach((e) => e()));
      }),
      (_e.openAccountPage = K),
      (_e.openPasswordPage = function () {
        ((q = !0), K());
      }),
      (_e.openReferralPage = function () {
        ((Q = !0), $.forEach((e) => e()));
      }),
      (_e.FeatureTipsSetting = X),
      (_e.planPill = te),
      (_e.ProfilePanel = function ({
        name: e,
        onName: l,
        onLogout: i,
        onExit: k,
        hasSample: K,
        onClearSamples: Y,
        onLearn: ee,
        onConnector: ne,
        onSupport: le,
        demo: oe = !1,
        onStartOwn: ie,
        shop: ae,
        user: re,
        access: ce,
        planId: de,
        planEndsAt: fe,
      }) {
        const ue = (0, n.useDesktop)(),
          { usdHints: he, setUsdHintsOn: pe } = (0, O.useCurrency)(),
          { colors: me, mode: ye, toggle: ge } = (0, C.useTheme)(),
          { scale: xe, setScale: je } = (0, D.useLargeText)(),
          [be, Se] = (0, r.useState)(null),
          [Ce, Le] = (0, r.useState)(e),
          [we, De] = (0, r.useState)(''),
          [Ie, ze] = (0, M.useConfirm)(),
          Pe = (0, A.useSupportUnread)(!oe && ae && re ? ae : null),
          [ve, ke] = (0, r.useState)(re?.name || ''),
          [He, We] = (0, r.useState)(''),
          [Te, Ve] = (0, r.useState)(!1),
          [Re, Fe] = (0, r.useState)(''),
          [Be, Oe] = (0, r.useState)(null),
          [Ee, Me] = (0, r.useState)({}),
          Ae = 'anbari.profile.look.' + (ae?.id || 'demo'),
          Ne =
            Be?.key === Ae
              ? Be.value
              : {
                  type: 'store',
                  gender: ve.trimStart().startsWith('\u062e\u0627\u0646\u0645')
                    ? 'f'
                    : ve.trimStart().startsWith('\u0622\u0642\u0627')
                      ? 'm'
                      : '',
                },
          Ue = { ...Ne, ...Ee },
          qe = {
            store: (0, N.L)('\u0641\u0631\u0648\u0634\u06af\u0627\u0647'),
            shop: (0, N.L)('\u0645\u063a\u0627\u0632\u0647'),
            warehouse: (0, N.L)('\u0627\u0646\u0628\u0627\u0631'),
          },
          Ze = qe[Ne.type],
          $e = {
            store: (0, N.L)(
              '\u0641\u0631\u0648\u0634\u06af\u0627\u0647: \u0633\u0648\u067e\u0631\u0645\u0627\u0631\u06a9\u062a\u060c \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0628\u0632\u0631\u06af \u06cc\u0627 \u0641\u0631\u0648\u0634 \u0627\u06cc\u0646\u062a\u0631\u0646\u062a\u06cc',
            ),
            shop: (0, N.L)(
              '\u0645\u063a\u0627\u0632\u0647: \u0645\u063a\u0627\u0632\u0647\u0654 \u06a9\u0648\u0686\u06a9 \u0645\u062d\u0644\u0647 \u06cc\u0627 \u06cc\u06a9 \u063a\u0631\u0641\u0647',
            ),
            warehouse: (0, N.L)(
              '\u0627\u0646\u0628\u0627\u0631: \u0627\u0646\u0628\u0627\u0631\u060c \u067e\u062e\u0634 \u06cc\u0627 \u0641\u0631\u0648\u0634 \u0639\u0645\u062f\u0647',
            ),
          },
          Ge = e.trimStart(),
          Je = Ge.slice(Ze.length),
          Ke =
            Ge.startsWith(Ze) && /^(?:[ \u200C]|$)/.test(Je)
              ? Je.replace(/^[ \u200C]+/, '').trimStart()
              : e,
          Qe = !ae || 'owner' === ae.role,
          Xe = !!re && !oe,
          Ye = !oe && 'owner' === ae?.role;
        function et(t) {
          (De(''), Fe(''), Le(e), We(ve), Me({}), Se(t));
        }
        async function tt() {
          const t = Ce.trim(),
            s = He.trim();
          if ((Qe && !t) || (Xe && !s))
            Fe(
              (0, N.L)(
                '\u0646\u0627\u0645 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f.',
              ),
            );
          else {
            (Ve(!0), Fe(''));
            try {
              if ((Qe && t !== e && (await l(t)), Xe && s !== ve)) {
                const e = await (0, w.request)('/v1/me/profile', 'PATCH', {
                  name: s,
                });
                ke(e.user.name);
              }
              (oe || (await x.default.setItem(Ae, JSON.stringify(Ue))),
                Oe({ key: Ae, value: Ue }),
                Se(null));
            } catch (e) {
              Fe((0, w.message)(e));
            } finally {
              Ve(!1);
            }
          }
        }
        ((0, r.useEffect)(() => {
          let e = !0;
          return (
            Oe(null),
            x.default
              .getItem(Ae)
              .then((t) => {
                if (e && t)
                  try {
                    const e = JSON.parse(t);
                    if (
                      !e ||
                      'object' != typeof e ||
                      !('type' in e) ||
                      !('gender' in e)
                    )
                      return;
                    const { type: s, gender: n } = e;
                    ('store' !== s && 'shop' !== s && 'warehouse' !== s) ||
                      ('m' !== n && 'f' !== n && '' !== n) ||
                      Oe((e) =>
                        e?.key === Ae
                          ? e
                          : { key: Ae, value: { type: s, gender: n } },
                      );
                  } catch {}
              })
              .catch(() => {}),
            () => {
              e = !1;
            }
          );
        }, [Ae]),
          (0, r.useEffect)(() => {
            if (oe || !re) return;
            let e = !0;
            return (
              (0, w.request)('/v1/auth/session')
                .then((t) => {
                  e && t?.user?.name && ke(t.user.name);
                })
                .catch(() => {}),
              () => {
                e = !1;
              }
            );
          }, [oe, re]),
          (0, r.useEffect)(() => {
            const e = () => {
              Z && 'staff' !== ae?.role
                ? ((Z = !1), et('subscription'))
                : G && ae && re && !oe
                  ? ((G = !1), le ? le() : et('details'))
                  : J && ae && re && !oe
                    ? ((J = !1), et('details'))
                    : Q && Ye && ((Q = !1), et('referral'));
            };
            return (
              e(),
              $.add(e),
              () => {
                $.delete(e);
              }
            );
          }, [ae?.role]));
        const st = {
            minHeight: 52,
            paddingVertical: 8,
            borderTopWidth: u.default.hairlineWidth,
            borderColor: me.line,
          },
          nt = (0, U.jsx)(S.Icon, {
            name: 'chevron',
            color: me.muted,
            size: 18,
          }),
          lt = !(!oe || !ie || (0, t.plansPreview)()),
          ot =
            'account' === be
              ? L.fa.edit
              : 'subscription' === be
                ? L.fa.subscription
                : 'notifications' === be
                  ? L.fa.notifications
                  : 'details' === be
                    ? (0, N.L)(
                        '\u062d\u0633\u0627\u0628 \u0648 \u062f\u0633\u062a\u06af\u0627\u0647\u200c\u0647\u0627',
                      )
                    : 'news' === be
                      ? (0, N.L)(
                          '\u0627\u062e\u0628\u0627\u0631 \u0648 \u067e\u06cc\u0634\u0646\u0647\u0627\u062f\u0647\u0627',
                        )
                      : 'referral' === be
                        ? (0, N.L)(
                            '\u062f\u0639\u0648\u062a \u062f\u0648\u0633\u062a\u0627\u0646',
                          )
                        : '',
          it =
            oe || !re || re.staff || re.phoneVerified
              ? null
              : (0, U.jsx)(z.PhoneCompleteCard, {
                  user: re,
                  onSupport: ae ? () => (le ? le() : et('details')) : void 0,
                }),
          at = (0, U.jsxs)(U.Fragment, {
            children: [
              (0, U.jsxs)(j.Card, {
                testID: 'profile-card',
                style: { padding: 12, gap: 6 },
                children: [
                  (0, U.jsxs)(p.default, {
                    style: [j.common.between, { minWidth: 0, gap: 8 }],
                    children: [
                      (0, U.jsxs)(j.Copy, {
                        testID: 'profile-shop-name',
                        numberOfLines: 1,
                        ellipsizeMode: 'tail',
                        style: {
                          flex: 1,
                          minWidth: 0,
                          fontSize: 20,
                          lineHeight: 30,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: [
                          (0, U.jsxs)(j.Copy, {
                            style: {
                              fontSize: 20,
                              lineHeight: 30,
                              fontFamily: 'Vazirmatn_600SemiBold',
                              color: me.muted,
                            },
                            children: [Ze, ' '],
                          }),
                          Ke,
                        ],
                      }),
                      (Qe || Xe) &&
                        (0, U.jsxs)(f.default, {
                          testID: 'profile-edit',
                          accessibilityRole: 'button',
                          accessibilityLabel: L.fa.edit,
                          onPress: () => et('account'),
                          hitSlop: 8,
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 4,
                            paddingHorizontal: 10,
                            paddingVertical: 6,
                            borderRadius: 999,
                            backgroundColor: me.soft,
                          },
                          children: [
                            (0, U.jsx)(S.Icon, {
                              name: 'edit',
                              size: 15,
                              color: me.text,
                            }),
                            (0, U.jsx)(j.Copy, {
                              style: { fontSize: 13, lineHeight: 20 },
                              children: L.fa.edit,
                            }),
                          ],
                        }),
                    ],
                  }),
                  !!ve &&
                    (0, U.jsxs)(p.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 6,
                      },
                      children: [
                        !!Ne.gender &&
                          (0, U.jsx)(c.default, {
                            source:
                              _.emojiImages[
                                'm' === Ne.gender ? 'man' : 'woman'
                              ],
                            accessible: !1,
                            accessibilityElementsHidden: !0,
                            resizeMode: 'contain',
                            style: { width: 18, height: 18, flexShrink: 0 },
                          }),
                        (0, U.jsx)(j.Copy, {
                          testID: 'profile-owner-name',
                          numberOfLines: 1,
                          ellipsizeMode: 'tail',
                          style: {
                            flexShrink: 1,
                            minWidth: 0,
                            fontSize: 14,
                            lineHeight: 22,
                            color: me.muted,
                          },
                          children: ve,
                        }),
                      ],
                    }),
                  (0, U.jsxs)(p.default, {
                    style: [j.common.between, { minWidth: 0, gap: 8 }],
                    children: [
                      (0, U.jsx)(p.default, {
                        testID: 'profile-plan',
                        style: {
                          flexShrink: 1,
                          minWidth: 0,
                          paddingHorizontal: 10,
                          paddingVertical: 4,
                          borderRadius: 999,
                          backgroundColor: me.accentSoft,
                        },
                        children: (0, U.jsx)(j.Copy, {
                          numberOfLines: 1,
                          ellipsizeMode: 'tail',
                          style: {
                            fontSize: 13,
                            lineHeight: 20,
                            color: me.accent,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children:
                            ae && !oe
                              ? te(ce, de, fe)
                              : (0, N.L)(
                                  '\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647',
                                ),
                        }),
                      }),
                      'staff' !== ae?.role &&
                        (0, U.jsx)(f.default, {
                          testID: 'manage-subscription',
                          accessibilityRole: 'button',
                          accessibilityLabel: lt
                            ? (0, N.L)(
                                '\u0633\u0627\u062e\u062a \u0645\u063a\u0627\u0632\u0647\u0654 \u062e\u0648\u062f\u0645',
                              )
                            : L.fa.manageSubscription,
                          onPress: () => (lt ? ie() : et('subscription')),
                          hitSlop: 3,
                          style: ({ pressed: e }) => ({
                            minHeight: 38,
                            flexShrink: 1,
                            minWidth: 0,
                            paddingHorizontal: 10,
                            paddingVertical: 6,
                            borderRadius: 12,
                            borderWidth: u.default.hairlineWidth,
                            borderColor: me.line,
                            backgroundColor: me.soft,
                            justifyContent: 'center',
                            opacity: e ? 0.75 : 1,
                          }),
                          children: (0, U.jsx)(j.Copy, {
                            numberOfLines: 1,
                            style: {
                              fontSize: 13,
                              lineHeight: 20,
                              fontFamily: 'Vazirmatn_600SemiBold',
                            },
                            children: lt
                              ? (0, N.L)(
                                  '\u0633\u0627\u062e\u062a \u0645\u063a\u0627\u0632\u0647\u0654 \u062e\u0648\u062f\u0645',
                                )
                              : L.fa.manageSubscription,
                          }),
                        }),
                    ],
                  }),
                  'staff' === ae?.role &&
                    (0, U.jsx)(j.Copy, {
                      style: { fontSize: 12, color: me.muted },
                      children: (0, N.L)(
                        '\u06a9\u0627\u0631\u0645\u0646\u062f \u0627\u06cc\u0646 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \xb7 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u0627 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0627\u0633\u062a',
                      ),
                    }),
                  K &&
                    (0, U.jsx)(j.Button, {
                      secondary: !0,
                      onPress: function () {
                        Ie({
                          title: L.fa.clearSampleData,
                          text: L.fa.clearSampleConfirm,
                          ok: L.fa.clearSampleData,
                          run: () => {
                            (Y(), De(L.fa.sampleDataCleared));
                          },
                        });
                      },
                      children: L.fa.clearSampleData,
                    }),
                ],
              }),
              (0, U.jsx)(R.ProfileBanners, {
                showStaff: !ae || 'owner' === ae.role,
                showConnector: !ae || 'owner' === ae.role,
                onAction: (e) => {
                  'connector' === e.kind ? ne?.() : ee?.(e.lesson);
                },
              }),
              (0, U.jsx)(V.UltraProfileCards, { shop: ae, demo: oe }),
            ],
          }),
          rt = [];
        'staff' !== ae?.role &&
          rt.push(
            lt
              ? {
                  testID: 'shortcut-subscription',
                  label: (0, N.L)(
                    '\u062e\u0631\u06cc\u062f \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
                  ),
                  icon: 'wallet',
                  onPress: ie,
                  spark: !0,
                }
              : {
                  testID: 'shortcut-subscription',
                  label: (0, N.L)('\u0627\u0634\u062a\u0631\u0627\u06a9'),
                  icon: 'wallet',
                  onPress: () => et('subscription'),
                  spark: !0,
                },
          );
        (rt.push({
          testID: 'shortcut-news',
          label: (0, N.L)('\u0627\u062e\u0628\u0627\u0631'),
          icon: 'bell',
          onPress: () => et('news'),
        }),
          ae &&
            re &&
            !oe &&
            !re.staff &&
            rt.push({
              testID: 'shortcut-password',
              label: (0, N.L)('\u0631\u0645\u0632 \u0639\u0628\u0648\u0631'),
              icon: 'lock',
              onPress: () => {
                ((q = !0), et('details'));
              },
            }));
        ae &&
          re &&
          !oe &&
          rt.push({
            testID: 'manage-team',
            label: (0, N.L)('\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc'),
            icon: 'chat',
            onPress: () => (le ? le() : et('details')),
            badge: Pe,
          });
        const ct = 4 === rt.length ? 2 : 3,
          dt = Array.from({ length: Math.ceil(rt.length / ct) }, (e, t) =>
            rt.slice(t * ct, (t + 1) * ct),
          ),
          ft = (0, U.jsx)(p.default, {
            testID: 'profile-shortcuts',
            style: { gap: 10, minWidth: 0 },
            children: dt.map((e, t) =>
              (0, U.jsx)(
                p.default,
                {
                  style: {
                    direction: 'ltr',
                    flexDirection: 'row-reverse',
                    gap: 10,
                  },
                  children: e.map((e) =>
                    (0, U.jsx)(
                      v.Spark,
                      {
                        radius: 16,
                        active: !!e.spark,
                        style: { flex: 1, minWidth: 0 },
                        children: (0, U.jsxs)(f.default, {
                          testID: e.testID,
                          accessibilityRole: 'button',
                          accessibilityLabel: e.label,
                          onPress: e.onPress,
                          style: ({ pressed: e }) => ({
                            flex: 1,
                            minWidth: 0,
                            minHeight: 88,
                            paddingHorizontal: 4,
                            paddingVertical: 10,
                            gap: 6,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 16,
                            borderWidth: u.default.hairlineWidth,
                            borderColor: me.line,
                            backgroundColor: me.surface,
                            opacity: e ? 0.75 : 1,
                          }),
                          children: [
                            (0, U.jsxs)(p.default, {
                              style: {
                                width: 40,
                                height: 40,
                                borderRadius: 12,
                                backgroundColor: me.accentSoft,
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                              children: [
                                (0, U.jsx)(S.Icon, {
                                  name: e.icon,
                                  size: 22,
                                  color: me.accent,
                                }),
                                !!e.badge &&
                                  (0, U.jsx)(p.default, {
                                    testID: e.testID + '-badge',
                                    accessibilityLabel: (0, N.L)(
                                      '{n} \u067e\u06cc\u0627\u0645 \u062a\u0627\u0632\u0647',
                                      { n: (0, N.localDigits)(e.badge) },
                                    ),
                                    style: {
                                      position: 'absolute',
                                      top: -6,
                                      left: -8,
                                      minWidth: 20,
                                      height: 20,
                                      paddingHorizontal: 5,
                                      borderRadius: 10,
                                      backgroundColor: me.danger,
                                      borderWidth: 2,
                                      borderColor: me.surface,
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    },
                                    children: (0, U.jsx)(j.Copy, {
                                      style: {
                                        color: me.bg,
                                        fontSize: 11,
                                        lineHeight: 15,
                                        fontFamily: 'Vazirmatn_700Bold',
                                      },
                                      children: (0, N.localDigits)(
                                        e.badge > 99 ? '99+' : e.badge,
                                      ),
                                    }),
                                  }),
                              ],
                            }),
                            (0, U.jsx)(j.Copy, {
                              style: {
                                fontSize: 13,
                                lineHeight: 20,
                                fontFamily: 'Vazirmatn_600SemiBold',
                                textAlign: 'center',
                              },
                              children: e.label,
                            }),
                          ],
                        }),
                      },
                      e.testID,
                    ),
                  ),
                },
                t,
              ),
            ),
          }),
          ut = (0, U.jsx)(U.Fragment, {
            children: (0, U.jsxs)(j.Card, {
              style: { gap: 0, paddingVertical: 4 },
              children: [
                (0, U.jsxs)(p.default, {
                  style: [j.common.between, st, { borderTopWidth: 0 }],
                  children: [
                    (0, U.jsx)(j.Copy, { children: L.fa.appearance }),
                    (0, U.jsx)(p.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        backgroundColor: me.soft,
                        borderRadius: 999,
                        padding: 3,
                      },
                      children: ['light', 'dark'].map((e) =>
                        (0, U.jsx)(
                          f.default,
                          {
                            testID: 'theme-' + e,
                            accessibilityRole: 'button',
                            accessibilityLabel:
                              'light' === e ? L.fa.lightMode : L.fa.darkMode,
                            accessibilityState: { selected: ye === e },
                            onPress: () => {
                              ye !== e && ge();
                            },
                            style: {
                              paddingHorizontal: 12,
                              paddingVertical: 5,
                              borderRadius: 999,
                              backgroundColor:
                                ye === e ? me.accentSoft : 'transparent',
                            },
                            children: (0, U.jsx)(S.Icon, {
                              name: 'light' === e ? 'sun' : 'moon',
                              size: 17,
                              color: me.text,
                            }),
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, U.jsxs)(p.default, {
                  style: [j.common.between, st],
                  children: [
                    (0, U.jsx)(j.Copy, { children: L.fa.language }),
                    (0, U.jsx)(H.LanguagePicker, {}),
                  ],
                }),
                (0, U.jsxs)(p.default, {
                  testID: 'profile-money-unit',
                  style: [
                    j.common.between,
                    st,
                    { flexWrap: 'wrap', rowGap: 6 },
                  ],
                  children: [
                    (0, U.jsxs)(p.default, {
                      style: { flexShrink: 1, minWidth: 120 },
                      children: [
                        (0, U.jsx)(j.Copy, {
                          children: (0, N.L)(
                            '\u0648\u0627\u062d\u062f \u067e\u0648\u0644',
                          ),
                        }),
                        (0, U.jsx)(j.Copy, {
                          style: {
                            fontSize: 11,
                            lineHeight: 17,
                            color: me.muted,
                          },
                          children: (0, N.L)(
                            '\u0645\u0628\u0644\u063a\u200c\u0647\u0627 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0648\u0627\u062d\u062f \u0646\u0645\u0627\u06cc\u0634 \u062f\u0627\u062f\u0647 \u0648 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u0646',
                          ),
                        }),
                        !!(0, B.fxLatest)() &&
                          (0, U.jsx)(j.Copy, {
                            style: {
                              fontSize: 11,
                              lineHeight: 17,
                              color: me.muted,
                            },
                            children: (0, N.L)(
                              '\u062f\u0644\u0627\u0631 \u0627\u0645\u0631\u0648\u0632: {amount}',
                              {
                                amount: (0, N.L)(
                                  '{n} \u062a\u0648\u0645\u0627\u0646',
                                  {
                                    n: (0, B.fxLatest)().USD.toLocaleString(
                                      (0, N.numberLocale)(),
                                    ),
                                  },
                                ),
                              },
                            ),
                          }),
                      ],
                    }),
                    (0, U.jsx)(W.CurrencyPicker, {
                      shop: ae,
                      canChangeUnit:
                        !ae || 'owner' === ae.role || 'manager' === ae.role,
                    }),
                  ],
                }),
                ('IRT' === (0, B.shownCurrency)() ||
                  'IRR' === (0, B.shownCurrency)()) &&
                  (0, U.jsxs)(p.default, {
                    style: [j.common.between, st],
                    children: [
                      (0, U.jsxs)(p.default, {
                        style: { flexShrink: 1 },
                        children: [
                          (0, U.jsx)(j.Copy, {
                            children: (0, N.L)(
                              '\u0646\u0645\u0627\u06cc\u0634 \u0645\u0639\u0627\u062f\u0644 \u062f\u0644\u0627\u0631\u06cc',
                            ),
                          }),
                          (0, U.jsx)(j.Copy, {
                            style: {
                              fontSize: 11,
                              lineHeight: 17,
                              color: me.muted,
                            },
                            children: (0, B.shopUnitText)(
                              (0, N.L)(
                                '\u06a9\u0646\u0627\u0631 \u0645\u0628\u0644\u063a\u200c\u0647\u0627\u06cc \u062a\u0648\u0645\u0627\u0646\u06cc\u060c \xab\u2248 \u2026 \u062f\u0644\u0627\u0631\xbb \u0647\u0645\u0627\u0646 \u0631\u0648\u0632',
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, U.jsx)(h.default, {
                        testID: 'profile-usd-hint',
                        value: he,
                        onValueChange: pe,
                        trackColor: { false: me.soft, true: me.accent },
                        thumbColor: '#ffffff',
                        activeThumbColor: '#ffffff',
                      }),
                    ],
                  }),
                (0, U.jsxs)(p.default, {
                  testID: 'profile-zoom',
                  style: [st, { gap: 8 }],
                  children: [
                    (0, U.jsx)(j.Copy, {
                      children: (0, N.L)(
                        '\u0627\u0646\u062f\u0627\u0632\u0647\u0654 \u0628\u0631\u0646\u0627\u0645\u0647',
                      ),
                    }),
                    (0, U.jsx)(j.Segmented, {
                      numberLine: !0,
                      compact: !0,
                      height: 36,
                      value: D.ZOOM_STEPS.includes(xe) ? xe : D.DEFAULT_ZOOM,
                      onChange: je,
                      items: D.ZOOM_STEPS.map((e) => ({
                        value: e,
                        label: (0, N.L)('{n}\u066a', {
                          n: (0, N.localDigits)(100 * e),
                        }),
                        testID: 'zoom-' + Math.round(100 * e),
                      })),
                    }),
                  ],
                }),
                !!ae &&
                  ('owner' === ae.role || 'manager' === ae.role) &&
                  (0, U.jsx)(E.OversellSetting, { shop: ae, style: st }),
                !oe &&
                  (0, U.jsx)(p.default, {
                    style: [st, { justifyContent: 'center' }],
                    children: (0, U.jsx)(X, { compact: !0 }),
                  }),
                !oe &&
                  (0, U.jsxs)(f.default, {
                    accessibilityRole: 'button',
                    onPress: () => et('notifications'),
                    style: [j.common.between, st],
                    children: [
                      (0, U.jsx)(j.Copy, { children: L.fa.notifications }),
                      nt,
                    ],
                  }),
                (0, U.jsx)(se, { style: [j.common.between, st] }),
                !!we &&
                  !be &&
                  (0, U.jsx)(j.Copy, {
                    style: [
                      j.common.small,
                      { color: me.muted, paddingVertical: 8 },
                    ],
                    children: we,
                  }),
              ],
            }),
          }),
          ht = (0, U.jsxs)(U.Fragment, {
            children: [
              oe &&
                (0, U.jsx)(j.Card, {
                  testID: 'demo-exit-card',
                  children: (0, U.jsxs)(p.default, {
                    style: j.common.between,
                    children: [
                      (0, U.jsxs)(p.default, {
                        style: j.common.flex,
                        children: [
                          (0, U.jsx)(j.Copy, {
                            style: { fontFamily: 'Vazirmatn_600SemiBold' },
                            children: (0, N.L)(
                              '\u062e\u0631\u0648\u062c \u0627\u0632 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647',
                            ),
                          }),
                          (0, U.jsx)(j.Copy, {
                            style: { fontSize: 12, color: me.muted },
                            children: (0, N.L)(
                              '\u0628\u0647 \u0635\u0641\u062d\u0647\u0654 \u0627\u0648\u0644 \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u06cc\u061b \u0647\u06cc\u0686 \u062d\u0633\u0627\u0628\u06cc \u0633\u0627\u062e\u062a\u0647 \u0646\u0634\u062f\u0647 \u0648 \u0686\u06cc\u0632\u06cc \u0630\u062e\u06cc\u0631\u0647 \u0646\u0634\u062f\u0647 \u0627\u0633\u062a',
                            ),
                          }),
                        ],
                      }),
                      (0, U.jsx)(j.Button, {
                        testID: 'demo-exit',
                        secondary: !0,
                        onPress: k,
                        children: (0, N.L)('\u062e\u0631\u0648\u062c'),
                      }),
                    ],
                  }),
                }),
              !oe &&
                re &&
                i &&
                (0, U.jsx)(j.Card, {
                  children: (0, U.jsxs)(p.default, {
                    style: j.common.between,
                    children: [
                      (0, U.jsxs)(p.default, {
                        style: j.common.flex,
                        children: [
                          (0, U.jsx)(j.Copy, {
                            style: { fontFamily: 'Vazirmatn_600SemiBold' },
                            children: (0, N.L)(
                              '\u062e\u0631\u0648\u062c \u0627\u0632 \u062d\u0633\u0627\u0628',
                            ),
                          }),
                          (0, U.jsx)(j.Copy, {
                            style: { fontSize: 12, color: me.muted },
                            children: (0, N.L)(
                              '\u0628\u0647 \u0635\u0641\u062d\u0647\u0654 \u0627\u0635\u0644\u06cc \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u06cc\u062f',
                            ),
                          }),
                        ],
                      }),
                      (0, U.jsx)(j.DangerLink, {
                        testID: 'profile-logout',
                        onPress: () => {
                          Ie({
                            title: (0, N.L)(
                              '\u062e\u0631\u0648\u062c \u0627\u0632 \u062d\u0633\u0627\u0628',
                            ),
                            text: (0, N.L)(
                              '\u0627\u0632 \u062d\u0633\u0627\u0628 \u062e\u0627\u0631\u062c \u0645\u06cc\u200c\u0634\u0648\u06cc\u062f\u061f',
                            ),
                            ok: (0, N.L)('\u062e\u0631\u0648\u062c'),
                            run: () => i(),
                          });
                        },
                        children: (0, N.L)('\u062e\u0631\u0648\u062c'),
                      }),
                    ],
                  }),
                }),
            ],
          });
        return (0, U.jsxs)(p.default, {
          style: {
            gap: 16,
            width: '100%',
            maxWidth: ue ? 1100 : 680,
            alignSelf: 'center',
          },
          children: [
            ze,
            (0, U.jsxs)(P.RevealEach, {
              children: [
                (0, U.jsx)(j.PageTitle, {
                  title: (0, N.L)('\u067e\u0631\u0648\u0641\u0627\u06cc\u0644'),
                }),
                ue
                  ? (0, U.jsxs)(p.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        gap: 20,
                        alignItems: 'flex-start',
                      },
                      children: [
                        (0, U.jsxs)(p.default, {
                          style: { flex: 1, minWidth: 0, gap: 16 },
                          children: [it, at, ft, ht],
                        }),
                        (0, U.jsx)(p.default, {
                          style: { flex: 1, minWidth: 0, gap: 16 },
                          children: ut,
                        }),
                      ],
                    })
                  : (0, U.jsxs)(U.Fragment, { children: [it, at, ft, ut, ht] }),
              ],
            }),
            (0, U.jsx)(b.Sheet, {
              visible: !!be,
              title: ot,
              wide: 'subscription' === be,
              onClose: () => Se(null),
              children: (0, U.jsxs)(y.ScrollView, {
                keyboardShouldPersistTaps: 'handled',
                contentContainerStyle: { gap: 14, paddingBottom: 4 },
                children: [
                  'account' === be &&
                    (0, U.jsxs)(U.Fragment, {
                      children: [
                        Qe &&
                          (0, U.jsxs)(U.Fragment, {
                            children: [
                              (0, U.jsx)(j.Copy, {
                                style: j.common.label,
                                children: (0, N.L)(
                                  '\u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u06af\u0627\u0647',
                                ),
                              }),
                              (0, U.jsx)(j.Input, {
                                testID: 'profile-shop-input',
                                value: Ce,
                                onChangeText: Le,
                                maxLength: 100,
                              }),
                            ],
                          }),
                        Xe &&
                          (0, U.jsxs)(U.Fragment, {
                            children: [
                              (0, U.jsx)(j.Copy, {
                                style: j.common.label,
                                children: (0, N.L)(
                                  '\u0646\u0627\u0645 \u0634\u0645\u0627',
                                ),
                              }),
                              (0, U.jsx)(j.Input, {
                                testID: 'profile-name',
                                value: He,
                                onChangeText: We,
                                placeholder: (0, N.L)(
                                  '\u0645\u062b\u0644\u0627\u064b \u0622\u0642\u0627\u06cc \u062d\u0633\u06cc\u0646\u06cc',
                                ),
                                maxLength: 80,
                              }),
                            ],
                          }),
                        (0, U.jsxs)(p.default, {
                          style: { gap: 6 },
                          children: [
                            (0, U.jsx)(j.Copy, {
                              style: j.common.label,
                              children: (0, N.L)(
                                '\u0646\u0648\u0639 \u06a9\u0633\u0628\u200c\u0648\u06a9\u0627\u0631',
                              ),
                            }),
                            (0, U.jsx)(j.Segmented, {
                              compact: !0,
                              height: 36,
                              value: Ue.type,
                              onChange: (e) => Me((t) => ({ ...t, type: e })),
                              items: [
                                {
                                  value: 'store',
                                  label: qe.store,
                                  testID: 'shop-type-store',
                                },
                                {
                                  value: 'shop',
                                  label: qe.shop,
                                  testID: 'shop-type-shop',
                                },
                                {
                                  value: 'warehouse',
                                  label: qe.warehouse,
                                  testID: 'shop-type-warehouse',
                                },
                              ],
                            }),
                            (0, U.jsx)(j.Copy, {
                              testID: 'shop-type-hint',
                              style: {
                                fontSize: 12,
                                lineHeight: 20,
                                color: me.muted,
                              },
                              children: $e[Ue.type],
                            }),
                          ],
                        }),
                        (0, U.jsxs)(p.default, {
                          style: { gap: 6 },
                          children: [
                            (0, U.jsx)(j.Copy, {
                              style: j.common.label,
                              children: (0, N.L)(
                                '\u0622\u0642\u0627 \u06cc\u0627 \u062e\u0627\u0646\u0645\u061f',
                              ),
                            }),
                            (0, U.jsx)(j.Segmented, {
                              compact: !0,
                              height: 36,
                              value: Ue.gender,
                              onChange: (e) => Me((t) => ({ ...t, gender: e })),
                              items: [
                                {
                                  value: 'm',
                                  label: (0, N.L)('\u0622\u0642\u0627'),
                                  testID: 'gender-m',
                                },
                                {
                                  value: 'f',
                                  label: (0, N.L)('\u062e\u0627\u0646\u0645'),
                                  testID: 'gender-f',
                                },
                              ],
                            }),
                          ],
                        }),
                        !!Re &&
                          (0, U.jsx)(j.Copy, {
                            accessibilityRole: 'alert',
                            style: [j.common.small, { color: me.danger }],
                            children: Re,
                          }),
                        (0, U.jsx)(j.Button, {
                          testID: 'save-profile-name',
                          disabled: Te,
                          onPress: () => {
                            tt();
                          },
                          children: (0, N.L)('\u0630\u062e\u06cc\u0631\u0647'),
                        }),
                      ],
                    }),
                  'subscription' === be &&
                    (0, U.jsx)(s.SubscriptionPanel, { shop: ae || void 0 }),
                  'notifications' === be &&
                    (0, U.jsx)(o.NotificationSettings, {}),
                  'news' === be &&
                    (0, U.jsx)(p.default, {
                      children: F.profileNews
                        .filter(
                          (e) =>
                            (Ye || 'referral' !== e.action) &&
                            ((!oe && 'staff' !== ae?.role) ||
                              'subscription' !== e.action),
                        )
                        .map((e, t) =>
                          (0, U.jsxs)(
                            p.default,
                            {
                              style: {
                                gap: 6,
                                paddingVertical: 14,
                                borderTopWidth: t ? u.default.hairlineWidth : 0,
                                borderTopColor: me.line,
                              },
                              children: [
                                (0, U.jsx)(p.default, {
                                  style: {
                                    alignSelf: 'flex-end',
                                    paddingHorizontal: 8,
                                    paddingVertical: 2,
                                    borderRadius: 999,
                                    backgroundColor: me.accentSoft,
                                  },
                                  children: (0, U.jsx)(j.Copy, {
                                    style: {
                                      fontSize: 11,
                                      lineHeight: 18,
                                      fontFamily: 'Vazirmatn_600SemiBold',
                                      color: me.accent,
                                    },
                                    children: (0, N.L)(e.tag),
                                  }),
                                }),
                                (0, U.jsx)(j.Copy, {
                                  style: {
                                    fontSize: 16,
                                    lineHeight: 26,
                                    fontFamily: 'Vazirmatn_700Bold',
                                  },
                                  children: (0, N.L)(e.title),
                                }),
                                (0, U.jsx)(j.Copy, {
                                  style: {
                                    fontSize: 13,
                                    lineHeight: 22,
                                    color: me.muted,
                                  },
                                  children: (0, N.L)(e.text),
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                    }),
                  'referral' === be && (0, U.jsx)(T.ReferralCard, { shop: ae }),
                  'details' === be &&
                    ae &&
                    re &&
                    (0, U.jsx)(I.AccountPanel, {
                      shop: ae,
                      user: re,
                      onLogout: k,
                      access: ce,
                      startPassword: (() => {
                        const e = q;
                        return ((q = !1), e);
                      })(),
                    }),
                  !!we &&
                    be &&
                    (0, U.jsx)(j.Copy, {
                      accessibilityRole: 'alert',
                      style: [j.common.small, { color: me.muted }],
                      children: we,
                    }),
                ],
              }),
            }),
          ],
        });
      }));
    var t = _r(d[0]),
      s = _r(d[1]),
      n = _r(d[2]),
      l = e(_r(d[3])),
      o = _r(d[4]),
      i = _r(d[5]),
      r = _r(d[6]),
      c = e(_r(d[7])),
      f = e(_r(d[8])),
      u = e(_r(d[9])),
      h = e(_r(d[10])),
      p = e(_r(d[11])),
      y = _r(d[12]),
      x = e(_r(d[13])),
      j = _r(d[14]),
      b = _r(d[15]),
      S = _r(d[16]),
      C = _r(d[17]),
      L = _r(d[18]),
      w = _r(d[19]),
      D = _r(d[20]),
      I = _r(d[21]),
      z = _r(d[22]),
      P = _r(d[23]),
      v = _r(d[24]),
      k = _r(d[25]),
      H = _r(d[26]),
      W = _r(d[27]),
      T = _r(d[28]),
      V = _r(d[29]),
      R = _r(d[30]),
      F = _r(d[31]),
      _ = _r(d[32]),
      B = _r(d[33]),
      O = _r(d[34]),
      E = _r(d[35]),
      M = _r(d[36]),
      A = _r(d[37]),
      N = _r(d[38]),
      U = _r(d[39]);
    let q = !1,
      Z = !1;
    const $ = new Set();
    let G = !1,
      J = !1;
    function K() {
      ((J = !0), $.forEach((e) => e()));
    }
    let Q = !1;
    function X({ compact: e = !1 }) {
      const { colors: t } = (0, C.useTheme)(),
        [s, n] = (0, r.useState)(!0),
        [l, o] = (0, r.useState)(!1),
        [i, c] = (0, r.useState)('');
      async function f(e) {
        (n(e), o(!0), c(''));
        try {
          await (0, w.request)('/v1/me/preferences', 'PATCH', {
            featureTips: e,
          });
        } catch (t) {
          (n(!e), c((0, w.message)(t)));
        } finally {
          o(!1);
        }
      }
      (0, r.useEffect)(() => {
        (0, w.request)('/v1/me/preferences')
          .then((e) => n(e.featureTips))
          .catch((e) => c((0, w.message)(e)));
      }, []);
      const u = (0, U.jsxs)(U.Fragment, {
        children: [
          (0, U.jsxs)(p.default, {
            style: j.common.between,
            children: [
              (0, U.jsx)(j.Copy, {
                children: (0, N.L)(
                  '\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0627\u0645\u06a9\u0627\u0646\u0627\u062a',
                ),
              }),
              (0, U.jsx)(h.default, {
                disabled: l,
                value: s,
                onValueChange: (e) => {
                  f(e);
                },
                trackColor: { false: t.soft, true: t.accent },
                thumbColor: '#ffffff',
                activeThumbColor: '#ffffff',
              }),
            ],
          }),
          !!i &&
            (0, U.jsx)(j.Copy, {
              style: { fontSize: 12, color: t.danger },
              children: i,
            }),
        ],
      });
      return e
        ? (0, U.jsx)(p.default, { style: { gap: 5 }, children: u })
        : (0, U.jsx)(j.Card, { children: u });
    }
    const Y = (e) => (0, N.localDigits)(e),
      ee = (0, N.localized)({
        free: '\u0631\u0627\u06cc\u06af\u0627\u0646',
        standard: '\u0627\u0633\u062a\u0627\u0646\u062f\u0627\u0631\u062f',
        pro: '\u067e\u0644\u0627\u0633',
        team: '\u0627\u0648\u0644\u062a\u0631\u0627',
        trial: '\u0622\u0632\u0645\u0627\u06cc\u0634\u06cc',
        expired:
          '\u0628\u062f\u0648\u0646 \u0627\u0634\u062a\u0631\u0627\u06a9',
      });
    function te(e, t, s, n = Date.now()) {
      const l =
          'trial' === e
            ? (0, N.L)('\u0622\u0632\u0645\u0627\u06cc\u0634\u06cc')
            : 'free' === e
              ? (0, N.L)('\u0631\u0627\u06cc\u06af\u0627\u0646')
              : 'expired' === e
                ? (0, N.L)(
                    '\u0628\u062f\u0648\u0646 \u0627\u0634\u062a\u0631\u0627\u06a9',
                  )
                : ee[t || ''] || (0, k.planLabel)(t),
        o = s ? Date.parse(s) - n : NaN,
        i =
          'expired' !== e && 'free' !== e && Number.isFinite(o) && o > 0
            ? Math.ceil(o / 864e5)
            : 0;
      return i
        ? `${l}\u060c ${(0, N.L)('{n} \u0631\u0648\u0632', { n: Y(i) })}`
        : l;
    }
    function se({ style: e }) {
      const { colors: t } = (0, C.useTheme)(),
        [s, n] = (0, r.useState)(!1),
        [o, c] = (0, r.useState)(null);
      async function f() {
        (n(!0), c(null));
        try {
          c(await (0, i.forceUpdate)());
        } catch {
          c({
            state: 'failed',
            why: (0, N.L)(
              '\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0627\u0646\u062c\u0627\u0645 \u0646\u0634\u062f\u061b \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0632\u0646.',
            ),
          });
        } finally {
          n(!1);
        }
      }
      const u =
        'latest' === o?.state
          ? (0, N.L)(
              '\u0622\u062e\u0631\u06cc\u0646 \u0646\u0633\u062e\u0647 \u0631\u0627 \u062f\u0627\u0631\u06cc.',
            )
          : 'reloading' === o?.state
            ? (0, N.L)(
                '\u0646\u0633\u062e\u0647\u0654 \u062c\u062f\u06cc\u062f \u06af\u0631\u0641\u062a\u0647 \u0634\u062f\u061b \u0627\u067e \u062f\u0648\u0628\u0627\u0631\u0647 \u0628\u0627\u0632 \u0645\u06cc\u200c\u0634\u0648\u062f\u2026',
              )
            : 'store' === o?.state
              ? (0, N.L)(
                  '\u0646\u0633\u062e\u0647\u0654 \u062a\u0627\u0632\u0647\u0654 \u0622\u06cc\u0641\u0648\u0646 \u0631\u0627 \u0627\u0632 \u0647\u0645\u0627\u0646 \u0641\u0631\u0648\u0634\u06af\u0627\u0647\u06cc \u0628\u06af\u06cc\u0631 \u06a9\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0631\u0627 \u0627\u0632 \u0622\u0646 \u0646\u0635\u0628 \u06a9\u0631\u062f\u06cc (\u0633\u06cc\u0628\u200c\u0627\u067e\u060c \u0633\u06cc\u0628\u0686\u0647 \u06cc\u0627 \u0627\u0646\u0627\u0631\u062f\u0648\u0646\u06cc).',
                )
              : ('failed' === o?.state && o.why) || '';
      return (0, U.jsxs)(p.default, {
        testID: 'profile-version',
        style: [e, { flexWrap: 'wrap', rowGap: 6 }],
        children: [
          (0, U.jsxs)(p.default, {
            style: { flexShrink: 1 },
            children: [
              (0, U.jsx)(j.Copy, { children: L.fa.version }),
              (0, U.jsx)(j.Copy, {
                style: { fontSize: 12, color: t.muted },
                children: (0, N.localDigits)(l.default.expo.version),
              }),
            ],
          }),
          'download' === o?.state || 'bazaar' === o?.state
            ? (0, U.jsx)(j.Button, {
                testID: 'profile-update-download',
                onPress: i.openApkDownload,
                children:
                  'bazaar' === o.state
                    ? (0, N.L)(
                        '\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc \u0627\u0632 \u0628\u0627\u0632\u0627\u0631',
                      )
                    : (0, N.L)(
                        '\u062f\u0627\u0646\u0644\u0648\u062f \u0646\u0633\u062e\u0647\u0654 \u062c\u062f\u06cc\u062f',
                      ),
              })
            : (0, U.jsx)(j.Button, {
                testID: 'profile-update',
                secondary: !0,
                disabled: s,
                onPress: () => {
                  f();
                },
                children: s
                  ? (0, N.L)(
                      '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0631\u0631\u0633\u06cc\u2026',
                    )
                  : (0, N.L)(
                      '\u0628\u0647\u200c\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06cc',
                    ),
              }),
          !!u &&
            (0, U.jsx)(j.Copy, {
              accessibilityRole: 'alert',
              style: {
                width: '100%',
                fontSize: 12,
                lineHeight: 20,
                color: 'failed' === o?.state ? t.danger : t.muted,
              },
              children: u,
            }),
        ],
      });
    }
  },
  723,
  [
    450, 724, 481, 426, 728, 574, 2, 168, 232, 17, 240, 99, 380, 258, 407, 539,
    385, 382, 492, 415, 579, 729, 538, 657, 410, 502, 563, 730, 731, 733, 558,
    559, 735, 435, 578, 744, 534, 745, 311, 338,
  ],
);
