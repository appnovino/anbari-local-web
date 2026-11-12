// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 908; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'ruleText', {
        enumerable: !0,
        get: function () {
          return P;
        },
      }),
      (_e.CustomerClub = function ({
        shop: e,
        locked: u = !1,
        onPlans: b,
        memberId: w,
        onMember: z,
      }) {
        const { colors: T } = (0, c.useTheme)(),
          B = 'owner' === e.role || 'manager' === e.role,
          [k, E] = (0, t.useState)(null),
          [V, R] = (0, t.useState)(null),
          [A, F] = (0, t.useState)('points'),
          [O, W] = (0, t.useState)(''),
          [H, N] = (0, t.useState)(!1),
          [G, J] = (0, t.useState)(!1),
          [K, q] = (0, t.useState)(null),
          [Q, X] = (0, t.useState)(!1),
          Y = u || Q,
          [Z, $] = (0, t.useState)(!1),
          [ee, te] = (0, t.useState)(''),
          ne = (0, C.useLedgerReadOnly)(),
          le = (0, L.canAddClubMember)(e) && !ne,
          se = z ? w || null : K,
          oe = (e) => {
            z ? z(e) : q(e);
          };
        async function re(t = A) {
          W('');
          try {
            const n = await (0, p.readClub)(e, t);
            (E(n.club), R(n.members));
          } catch (e) {
            (0, I.isClubLockError)(e) ? X(!0) : W(_(e));
          }
        }
        (0, t.useEffect)(() => {
          Y || re();
        }, [e.id, Y]);
        const ie = (0, t.useRef)(se);
        async function ae(t) {
          (N(!0), W(''));
          try {
            (E(await (0, p.saveClub)(e, t)), J(!1));
          } catch (e) {
            W(_(e));
          } finally {
            N(!1);
          }
        }
        if (
          ((0, t.useEffect)(() => {
            (!ie.current || se || Y || re(), (ie.current = se));
          }, [se]),
          Y)
        )
          return (0, D.jsxs)(r.Card, {
            testID: 'club-paid-only',
            style: { gap: 8 },
            children: [
              (0, D.jsxs)(o.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 8,
                },
                children: [
                  (0, D.jsx)(i.Icon, {
                    name: 'lock',
                    size: 18,
                    color: T.accent,
                  }),
                  (0, D.jsx)(r.Copy, {
                    style: { flex: 1, fontFamily: 'Vazirmatn_600SemiBold' },
                    children: (0, m.L)(h.CLUB_PLUS_MESSAGE),
                  }),
                ],
              }),
              (0, D.jsx)(r.Copy, {
                style: [r.common.small, { color: T.muted }],
                children: (0, m.L)(
                  '\u0628\u0627 \u0637\u0631\u062d \xab\u067e\u0644\u0627\u0633\xbb\u060c \u0645\u0634\u062a\u0631\u06cc\u200c\u0647\u0627 \u0628\u0627 \u0647\u0631 \u062e\u0631\u06cc\u062f \u0627\u0645\u062a\u06cc\u0627\u0632 \u0645\u06cc\u200c\u06af\u06cc\u0631\u0646\u062f \u0648 \u062f\u0631 \u062e\u0631\u06cc\u062f \u0628\u0639\u062f\u06cc \u0622\u0646 \u0631\u0627 \u062a\u062e\u0641\u06cc\u0641 \u0645\u06cc\u200c\u06af\u06cc\u0631\u0646\u062f.',
                ),
              }),
              (0, D.jsx)(r.Copy, {
                style: [r.common.small, { color: T.muted }],
                children: (0, m.L)(
                  '\u0627\u06af\u0631 \u0642\u0628\u0644\u0627\u064b \u0639\u0636\u0648 \u0648 \u0627\u0645\u062a\u06cc\u0627\u0632 \u062b\u0628\u062a \u06a9\u0631\u062f\u0647\u200c\u0627\u06cc\u060c \u067e\u0627\u06a9 \u0646\u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0648 \u0628\u0627 \xab\u067e\u0644\u0627\u0633\xbb \u0628\u0631\u0645\u06cc\u200c\u06af\u0631\u062f\u0646\u062f.',
                ),
              }),
              (0, D.jsx)(r.Button, {
                testID: 'club-plans',
                onPress: () => b?.(),
                children: (0, m.L)(
                  '\u062f\u06cc\u062f\u0646 \u0637\u0631\u062d\u200c\u0647\u0627',
                ),
              }),
            ],
          });
        if (se)
          return (0, D.jsx)(M, {
            shop: e,
            contactId: se,
            onBack: () => oe(null),
          });
        const ce = k ? P(k) : null;
        return (0, D.jsxs)(o.default, {
          testID: 'club-screen',
          style: { gap: 12 },
          children: [
            (0, D.jsxs)(r.Card, {
              style: { gap: 10 },
              children: [
                (0, D.jsxs)(o.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 10,
                  },
                  children: [
                    (0, D.jsxs)(o.default, {
                      style: { flex: 1, minWidth: 0, gap: 2 },
                      children: [
                        (0, D.jsx)(r.Copy, {
                          style: {
                            fontSize: 16,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: (0, m.L)(
                            '\u0628\u0627\u0634\u06af\u0627\u0647 \u0645\u0634\u062a\u0631\u06cc\u0627\u0646',
                          ),
                        }),
                        (0, D.jsx)(r.Copy, {
                          style: [
                            r.common.small,
                            { color: k?.enabled ? T.success : T.muted },
                          ],
                          children: k?.enabled
                            ? (0, m.L)(
                                '\u0631\u0648\u0634\u0646\u061b \u0645\u0634\u062a\u0631\u06cc\u200c\u0647\u0627 \u0628\u0627 \u0647\u0631 \u062e\u0631\u06cc\u062f \u0627\u0645\u062a\u06cc\u0627\u0632 \u0645\u06cc\u200c\u06af\u06cc\u0631\u0646\u062f',
                              )
                            : (0, m.L)('\u062e\u0627\u0645\u0648\u0634'),
                        }),
                      ],
                    }),
                    (0, D.jsx)(s.default, {
                      testID: 'club-switch',
                      accessibilityLabel: (0, m.L)(
                        '\u0631\u0648\u0634\u0646 \u06cc\u0627 \u062e\u0627\u0645\u0648\u0634 \u06a9\u0631\u062f\u0646 \u0628\u0627\u0634\u06af\u0627\u0647',
                      ),
                      disabled: !k || !B || H,
                      value: !!k?.enabled,
                      onValueChange: (e) => {
                        k && ae({ ...k, enabled: e });
                      },
                    }),
                  ],
                }),
                ce &&
                  !G &&
                  (0, D.jsxs)(o.default, {
                    style: { gap: 4 },
                    children: [
                      (0, D.jsx)(r.Copy, {
                        testID: 'club-rule-earn',
                        style: r.common.small,
                        children: ce.earn,
                      }),
                      !k?.rewards?.length &&
                        (0, D.jsx)(r.Copy, {
                          testID: 'club-rule-value',
                          style: r.common.small,
                          children: ce.value,
                        }),
                      B &&
                        (0, D.jsx)(o.default, {
                          style: { flexDirection: 'row-reverse' },
                          children: (0, D.jsx)(n.default, {
                            testID: 'club-rule-edit',
                            accessibilityRole: 'button',
                            onPress: () => J(!0),
                            hitSlop: 6,
                            style: ({ pressed: e }) => ({
                              minHeight: 36,
                              justifyContent: 'center',
                              opacity: e ? 0.6 : 1,
                            }),
                            children: (0, D.jsx)(r.Copy, {
                              style: { fontSize: 13, color: T.accent },
                              children: (0, m.L)(
                                '\u062a\u063a\u06cc\u06cc\u0631 \u0642\u0627\u0646\u0648\u0646 \u0627\u0645\u062a\u06cc\u0627\u0632',
                              ),
                            }),
                          }),
                        }),
                    ],
                  }),
                k &&
                  G &&
                  (0, D.jsx)(U, {
                    rule: k,
                    busy: H,
                    onSave: (e) => {
                      ae(e);
                    },
                    onCancel: () => J(!1),
                  }),
              ],
            }),
            k &&
              (0, D.jsx)(x.ClubRewards, {
                rule: k,
                canEdit: B && !ne,
                busy: H,
                error: O,
                onSave: async function (t) {
                  (N(!0), W(''));
                  try {
                    return (E(await (0, p.saveClub)(e, t)), !0);
                  } catch (e) {
                    return (W(_(e)), !1);
                  } finally {
                    N(!1);
                  }
                },
              }),
            !!O &&
              (0, D.jsx)(r.Copy, {
                accessibilityRole: 'alert',
                style: { color: T.danger },
                children: O,
              }),
            le &&
              (0, D.jsx)(o.default, {
                style: { flexDirection: 'row-reverse' },
                children: (0, D.jsx)(S.SmallKey, {
                  testID: 'club-add',
                  kind: 'primary',
                  icon: 'plus',
                  label: (0, m.L)(
                    '\u0639\u0636\u0648 \u062c\u062f\u06cc\u062f',
                  ),
                  accessibilityLabel: (0, m.L)(
                    '\u0627\u0641\u0632\u0648\u062f\u0646 \u0639\u0636\u0648 \u062c\u062f\u06cc\u062f \u0628\u0647 \u0628\u0627\u0634\u06af\u0627\u0647',
                  ),
                  onPress: () => {
                    (te(''), $(!0));
                  },
                }),
              }),
            !!ee &&
              (0, D.jsx)(r.Copy, {
                testID: 'club-join-notice',
                accessibilityRole: 'alert',
                style: { fontSize: 13, color: T.success },
                children: ee,
              }),
            Z &&
              (0, D.jsx)(L.ClubJoinSheet, {
                shop: e,
                visible: !0,
                onClose: () => $(!1),
                onJoined: function (e) {
                  ($(!1), te((0, L.joinLine)(e)), re());
                },
              }),
            (0, D.jsx)(r.Segmented, {
              value: A,
              onChange: (e) => {
                (F(e), re(e));
              },
              items: [
                {
                  value: 'points',
                  label: (0, m.L)(
                    '\u0628\u06cc\u0634\u062a\u0631\u06cc\u0646 \u0627\u0645\u062a\u06cc\u0627\u0632',
                  ),
                  testID: 'club-sort-points',
                },
                {
                  value: 'bought',
                  label: (0, m.L)(
                    '\u0628\u06cc\u0634\u062a\u0631\u06cc\u0646 \u062e\u0631\u06cc\u062f',
                  ),
                  testID: 'club-sort-bought',
                },
              ],
            }),
            V &&
              !V.length &&
              (0, D.jsx)(r.Copy, {
                testID: 'club-empty',
                style: {
                  fontSize: 13,
                  color: T.muted,
                  textAlign: 'center',
                  paddingVertical: 10,
                },
                children: le
                  ? (0, m.L)(
                      '\u0647\u0646\u0648\u0632 \u0639\u0636\u0648\u06cc \u0646\u06cc\u0633\u062a\u061b \u0628\u0627 \xab\u0639\u0636\u0648 \u062c\u062f\u06cc\u062f\xbb \u0628\u0627\u0644\u0627 \u0645\u0634\u062a\u0631\u06cc \u0631\u0627 \u0627\u0636\u0627\u0641\u0647 \u06a9\u0646\u060c \u06cc\u0627 \u0628\u0627 \u0647\u0631 \u0641\u0631\u0648\u0634 \u0628\u0647 \u0646\u0627\u0645 \u0645\u0634\u062a\u0631\u06cc \u0627\u0645\u062a\u06cc\u0627\u0632\u0634 \u0627\u06cc\u0646\u062c\u0627 \u0645\u06cc\u200c\u0622\u06cc\u062f.',
                    )
                  : (0, m.L)(
                      '\u0647\u0646\u0648\u0632 \u0639\u0636\u0648\u06cc \u0646\u06cc\u0633\u062a\u061b \u0628\u0627 \u0647\u0631 \u0641\u0631\u0648\u0634 \u0628\u0647 \u0646\u0627\u0645 \u0645\u0634\u062a\u0631\u06cc\u060c \u0627\u0645\u062a\u06cc\u0627\u0632\u0634 \u0627\u06cc\u0646\u062c\u0627 \u0645\u06cc\u200c\u0622\u06cc\u062f.',
                    ),
              }),
            !!V?.length &&
              (0, D.jsx)(r.Card, {
                style: { paddingVertical: 0, paddingHorizontal: 12 },
                children: V.map((e, t) =>
                  (0, D.jsxs)(
                    n.default,
                    {
                      testID: 'club-member-' + e.contactId,
                      accessibilityRole: 'button',
                      accessibilityLabel: e.name,
                      onPress: () => oe(e.contactId),
                      style: ({ pressed: e }) => ({
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 10,
                        minHeight: 56,
                        paddingVertical: 8,
                        borderTopWidth: t ? l.default.hairlineWidth : 0,
                        borderColor: T.line,
                        opacity: e ? 0.75 : 1,
                      }),
                      children: [
                        (0, D.jsx)(r.Copy, {
                          style: {
                            width: 22,
                            fontSize: 12,
                            color: T.muted,
                            textAlign: 'center',
                          },
                          children: (0, m.localDigits)(String(t + 1)),
                        }),
                        (0, D.jsxs)(o.default, {
                          style: { flex: 1, minWidth: 0 },
                          children: [
                            (0, D.jsx)(r.Copy, {
                              numberOfLines: 1,
                              style: {
                                fontSize: 15,
                                fontFamily: 'Vazirmatn_600SemiBold',
                              },
                              children: e.name,
                            }),
                            (0, D.jsx)(r.Copy, {
                              numberOfLines: 1,
                              style: { fontSize: 11, color: T.muted },
                              children: (0, m.L)(
                                '\u062e\u0631\u06cc\u062f: {toman}',
                                { toman: (0, y.money)(e.boughtToman) },
                              ),
                            }),
                            !!(0, f.bestReward)(k?.rewards || [], e.points) &&
                              (0, D.jsx)(r.Copy, {
                                testID: 'club-member-can-' + e.contactId,
                                numberOfLines: 1,
                                style: { fontSize: 11, color: T.accent },
                                children: (0, j.canGetLine)(
                                  (0, f.bestReward)(k?.rewards || [], e.points),
                                ),
                              }),
                          ],
                        }),
                        (0, D.jsxs)(o.default, {
                          style: { alignItems: 'flex-start' },
                          children: [
                            (0, D.jsx)(r.Copy, {
                              style: {
                                fontSize: 16,
                                fontFamily: 'Vazirmatn_700Bold',
                                color: e.points < 0 ? T.danger : T.accent,
                              },
                              children: v(e.points),
                            }),
                            (0, D.jsx)(r.Copy, {
                              style: { fontSize: 10, color: T.muted },
                              children: (0, m.L)(
                                '\u0627\u0645\u062a\u06cc\u0627\u0632',
                              ),
                            }),
                          ],
                        }),
                      ],
                    },
                    e.contactId,
                  ),
                ),
              }),
          ],
        });
      }));
    var t = _r(d[0]),
      n = e(_r(d[1])),
      l = e(_r(d[2])),
      s = e(_r(d[3])),
      o = e(_r(d[4])),
      r = _r(d[5]),
      i = _r(d[6]),
      c = _r(d[7]),
      u = _r(d[8]),
      m = _r(d[9]),
      y = _r(d[10]),
      h = _r(d[11]),
      b = _r(d[12]),
      p = _r(d[13]),
      f = _r(d[14]),
      x = _r(d[15]),
      j = _r(d[16]),
      L = _r(d[17]),
      C = _r(d[18]),
      S = _r(d[19]),
      I = _r(d[20]),
      D = _r(d[21]);
    const w = {
        club_plus_only: h.CLUB_PLUS_MESSAGE,
        club_paid_only: h.CLUB_PLUS_MESSAGE,
        forbidden:
          '\u0641\u0642\u0637 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0648 \u0645\u062f\u06cc\u0631 \u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u0642\u0627\u0646\u0648\u0646 \u0628\u0627\u0634\u06af\u0627\u0647 \u0631\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062f\u0647\u0646\u062f.',
        hidden_by_owner:
          '\u062f\u06cc\u062f\u0646 \u062d\u0633\u0627\u0628\u200c\u0647\u0627 \u0628\u0631\u0627\u06cc \u062a\u0648 \u0628\u0633\u062a\u0647 \u0627\u0633\u062a.',
      },
      _ = (e) => {
        const t = e instanceof Error ? e.message : '';
        return w[t] ? (0, m.L)(w[t]) : (0, u.message)(e);
      },
      v = (e) => Math.round(e).toLocaleString((0, m.numberLocale)()),
      z = (e) =>
        e ? new Date(e).toLocaleDateString((0, m.dateLocale)()) : '\u2014',
      T = (e, t) =>
        'taken_back' !== e || t
          ? {
              earned: (0, m.L)(
                '\u0627\u0645\u062a\u06cc\u0627\u0632 \u062e\u0631\u06cc\u062f',
              ),
              used: (0, m.L)(
                '\u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u062f\u0631 \u0641\u0627\u06a9\u062a\u0648\u0631',
              ),
              taken_back: (0, m.L)(
                '\u0628\u0631\u06af\u0634\u062a \u06a9\u0627\u0644\u0627',
              ),
              given_back: (0, m.L)(
                '\u0644\u063a\u0648 \u0641\u0627\u06a9\u062a\u0648\u0631\u060c \u0627\u0645\u062a\u06cc\u0627\u0632 \u0628\u0631\u06af\u0634\u062a',
              ),
            }[e]
          : (0, m.L)(
              '\u0644\u063a\u0648 \u0641\u0627\u06a9\u062a\u0648\u0631\u060c \u0627\u0645\u062a\u06cc\u0627\u0632 \u062e\u0631\u06cc\u062f \u06a9\u0645 \u0634\u062f',
            ),
      B = (e) =>
        '\u2066' + (e < 0 ? '\u2212' : '+') + v(Math.abs(e)) + '\u2069',
      P = (e) => ({
        earn: (0, m.L)(
          '\u06f1 \u0627\u0645\u062a\u06cc\u0627\u0632 \u0628\u0631\u0627\u06cc \u0647\u0631 {toman} \u062e\u0631\u06cc\u062f',
          { toman: (0, y.money)(e.earnToman, { full: !0 }) },
        ),
        value: (0, m.L)(
          '{points} \u0627\u0645\u062a\u06cc\u0627\u0632 = {toman} \u062a\u062e\u0641\u06cc\u0641',
          {
            points: v(e.redeemPoints),
            toman: (0, y.money)(e.redeemToman, { full: !0 }),
          },
        ),
      });
    function U({ rule: e, busy: n, onSave: l, onCancel: s }) {
      const { colors: i } = (0, c.useTheme)(),
        [u, p] = (0, t.useState)(String(e.earnToman)),
        [f, x] = (0, t.useState)(String(e.redeemPoints)),
        [j, L] = (0, t.useState)(String(e.redeemToman)),
        C = {
          earnToman: Number(u),
          redeemPoints: Number(f),
          redeemToman: Number(j),
        },
        S = Object.keys(C).every(
          (e) => C[e] >= h.CLUB_LIMITS[e][0] && C[e] <= h.CLUB_LIMITS[e][1],
        ),
        I = S ? P({ ...e, ...C }) : null;
      return (0, D.jsxs)(o.default, {
        testID: 'club-rule-editor',
        style: { gap: 8 },
        children: [
          (0, D.jsx)(r.Copy, {
            style: r.common.small,
            children: (0, y.shopUnitText)(
              (0, m.L)(
                '\u0628\u0631\u0627\u06cc \u0647\u0631 \u0686\u0646\u062f \u062a\u0648\u0645\u0627\u0646 \u062e\u0631\u06cc\u062f \u06f1 \u0627\u0645\u062a\u06cc\u0627\u0632\u061f',
              ),
            ),
          }),
          (0, D.jsx)(b.MoneyInput, {
            testID: 'club-earn',
            value: u,
            onChange: p,
            placeholder: (0, m.localDigits)(
              String((0, y.localAmount)(h.CLUB_DEFAULT.earnToman)),
            ),
          }),
          (0, D.jsx)(r.Copy, {
            style: r.common.small,
            children: (0, m.L)(
              '\u0686\u0646\u062f \u0627\u0645\u062a\u06cc\u0627\u0632\u061f',
            ),
          }),
          (0, D.jsx)(b.MoneyInput, {
            testID: 'club-redeem-points',
            value: f,
            onChange: x,
            suffix: (0, m.L)('\u0627\u0645\u062a\u06cc\u0627\u0632'),
            placeholder: (0, m.localDigits)(
              String(h.CLUB_DEFAULT.redeemPoints),
            ),
          }),
          (0, D.jsx)(r.Copy, {
            style: r.common.small,
            children: (0, y.shopUnitText)(
              (0, m.L)(
                '\u0628\u0631\u0627\u0628\u0631 \u0628\u0627 \u0686\u0646\u062f \u062a\u0648\u0645\u0627\u0646 \u062a\u062e\u0641\u06cc\u0641\u061f',
              ),
            ),
          }),
          (0, D.jsx)(b.MoneyInput, {
            testID: 'club-redeem-toman',
            value: j,
            onChange: L,
            placeholder: (0, m.localDigits)(
              String((0, y.localAmount)(h.CLUB_DEFAULT.redeemToman)),
            ),
          }),
          I
            ? (0, D.jsx)(r.Copy, {
                style: [r.common.small, { color: i.muted }],
                children: I.earn + ' \xb7 ' + I.value,
              })
            : (0, D.jsx)(r.Copy, {
                style: [r.common.small, { color: i.danger }],
                children:
                  'rial' === (0, y.moneyUnit)()
                    ? (0, m.L)(
                        '\u0639\u062f\u062f\u0647\u0627 \u0631\u0627 \u062f\u0631\u0633\u062a \u0648\u0627\u0631\u062f \u06a9\u0646 (\u06a9\u0645\u062a\u0631\u06cc\u0646 \u0645\u0628\u0644\u063a \u06f1\u06f0\u066c\u06f0\u06f0\u06f0 \u0631\u06cc\u0627\u0644).',
                      )
                    : (0, m.L)(
                        '\u0639\u062f\u062f\u0647\u0627 \u0631\u0627 \u062f\u0631\u0633\u062a \u0648\u0627\u0631\u062f \u06a9\u0646 (\u06a9\u0645\u062a\u0631\u06cc\u0646 \u0645\u0628\u0644\u063a \u06f1\u066c\u06f0\u06f0\u06f0 \u062a\u0648\u0645\u0627\u0646).',
                      ),
              }),
          (0, D.jsxs)(o.default, {
            style: [r.common.row, { flexWrap: 'wrap' }],
            children: [
              (0, D.jsx)(r.Button, {
                testID: 'club-rule-save',
                disabled: n || !S,
                onPress: () => l((0, h.cleanClubRule)({ ...e, ...C })),
                children: (0, m.L)('\u0630\u062e\u06cc\u0631\u0647'),
              }),
              (0, D.jsx)(r.Button, {
                secondary: !0,
                onPress: s,
                children: (0, m.L)('\u0627\u0646\u0635\u0631\u0627\u0641'),
              }),
            ],
          }),
        ],
      });
    }
    function k(e, t) {
      const n = (0, f.bestReward)(t, e),
        l = n ? null : (0, f.rewardChoices)(t, e, 1 / 0).next;
      return [
        (0, m.L)('{n} \u0627\u0645\u062a\u06cc\u0627\u0632', { n: v(e) }),
        n
          ? (0, j.canGetLine)(n)
          : l
            ? (0, j.missingLine)(l.missing, l.reward)
            : '',
      ]
        .filter(Boolean)
        .join(' \xb7 ');
    }
    function M({ shop: e, contactId: s, onBack: u }) {
      const { colors: h } = (0, c.useTheme)(),
        [b, f] = (0, t.useState)(null),
        [x, L] = (0, t.useState)('');
      (0, t.useEffect)(() => {
        let t = !0;
        return (
          (0, p.readClubMember)(e, s)
            .then((e) => {
              t && f(e);
            })
            .catch((e) => {
              t && L(_(e));
            }),
          () => {
            t = !1;
          }
        );
      }, [e.id, s]);
      const C = b?.member,
        S = (e, t, n) =>
          (0, D.jsxs)(o.default, {
            style: {
              flex: 1,
              minWidth: 0,
              padding: 10,
              borderRadius: 12,
              backgroundColor: h.soft,
              gap: 2,
            },
            children: [
              (0, D.jsx)(r.Copy, {
                style: { fontSize: 11, color: h.muted },
                children: e,
              }),
              (0, D.jsx)(r.Copy, {
                testID: n,
                numberOfLines: 2,
                style: {
                  fontSize: 14,
                  lineHeight: 22,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: t,
              }),
            ],
          });
      return (0, D.jsxs)(o.default, {
        testID: 'club-member-page',
        style: { gap: 12 },
        children: [
          (0, D.jsx)(o.default, {
            style: { flexDirection: 'row-reverse' },
            children: (0, D.jsxs)(n.default, {
              testID: 'club-member-back',
              accessibilityRole: 'button',
              onPress: u,
              hitSlop: 8,
              style: ({ pressed: e }) => ({
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 4,
                minHeight: 36,
                opacity: e ? 0.6 : 1,
              }),
              children: [
                (0, D.jsx)(i.Icon, {
                  name: 'arrow',
                  size: 16,
                  color: h.accent,
                }),
                (0, D.jsx)(r.Copy, {
                  style: { fontSize: 13, color: h.accent },
                  children: (0, m.L)(
                    '\u0647\u0645\u0647\u0654 \u0627\u0639\u0636\u0627',
                  ),
                }),
              ],
            }),
          }),
          !!x &&
            (0, D.jsx)(r.Copy, {
              accessibilityRole: 'alert',
              style: { color: h.danger },
              children: x,
            }),
          C &&
            (0, D.jsxs)(r.Card, {
              style: { gap: 10 },
              children: [
                (0, D.jsx)(r.Copy, {
                  style: { fontSize: 18, fontFamily: 'Vazirmatn_700Bold' },
                  children: C.name,
                }),
                (0, D.jsxs)(o.default, {
                  style: { flexDirection: 'row-reverse', gap: 8 },
                  children: [
                    S(
                      (0, m.L)('\u0627\u0645\u062a\u06cc\u0627\u0632'),
                      v(C.points),
                      'club-member-points',
                    ),
                    S(
                      (0, m.L)('\u062c\u0645\u0639 \u062e\u0631\u06cc\u062f'),
                      (0, y.money)(C.boughtToman),
                      'club-member-bought',
                    ),
                    S(
                      (0, m.L)(
                        '\u0622\u062e\u0631\u06cc\u0646 \u062e\u0631\u06cc\u062f',
                      ),
                      z(C.lastVisit),
                      'club-member-last',
                    ),
                  ],
                }),
                !!b?.club.rewards?.length &&
                  (0, D.jsx)(r.Copy, {
                    testID: 'club-member-reward',
                    style: [r.common.small, { color: h.accent }],
                    children: k(C.points, b.club.rewards),
                  }),
                b &&
                  !b.club.rewards?.length &&
                  C.points > 0 &&
                  (0, D.jsx)(r.Copy, {
                    style: [r.common.small, { color: h.muted }],
                    children: (0, m.L)(
                      '\u0627\u0631\u0632\u0634 \u0627\u0645\u062a\u06cc\u0627\u0632\u0647\u0627: {toman}',
                      {
                        toman: (0, y.money)(
                          Math.floor(
                            (C.points * b.club.redeemToman) /
                              b.club.redeemPoints,
                          ),
                          { full: !0 },
                        ),
                      },
                    ),
                  }),
              ],
            }),
          b &&
            (0, D.jsxs)(r.Card, {
              style: { paddingVertical: 0, paddingHorizontal: 12 },
              children: [
                !b.history.length &&
                  (0, D.jsx)(r.Copy, {
                    style: {
                      fontSize: 13,
                      color: h.muted,
                      paddingVertical: 14,
                      textAlign: 'center',
                    },
                    children: (0, m.L)(
                      '\u0647\u0646\u0648\u0632 \u0627\u0645\u062a\u06cc\u0627\u0632\u06cc \u062b\u0628\u062a \u0646\u0634\u062f\u0647.',
                    ),
                  }),
                b.history.map((e, t) =>
                  (0, D.jsxs)(
                    o.default,
                    {
                      testID: 'club-history-' + e.kind,
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 10,
                        minHeight: 48,
                        paddingVertical: 6,
                        borderTopWidth: t ? l.default.hairlineWidth : 0,
                        borderColor: h.line,
                      },
                      children: [
                        (0, D.jsxs)(o.default, {
                          style: { flex: 1, minWidth: 0 },
                          children: [
                            (0, D.jsx)(r.Copy, {
                              numberOfLines: 1,
                              style: { fontSize: 14 },
                              children:
                                T(e.kind, e.returnId) +
                                (e.reward
                                  ? ' \xb7 ' + (0, j.rewardTitle)(e.reward)
                                  : ''),
                            }),
                            (0, D.jsx)(r.Copy, {
                              numberOfLines: 1,
                              style: { fontSize: 11, color: h.muted },
                              children: [
                                z(e.occurredAt),
                                e.receiptNo
                                  ? (0, m.L)(
                                      '\u0641\u0627\u06a9\u062a\u0648\u0631 {no}',
                                      {
                                        no: (0, m.localDigits)(
                                          String(e.receiptNo),
                                        ),
                                      },
                                    )
                                  : '',
                                e.returnNo
                                  ? (0, m.L)(
                                      '\u0628\u0631\u06af\u0634\u062a {no}',
                                      {
                                        no: (0, m.localDigits)(
                                          String(e.returnNo),
                                        ),
                                      },
                                    )
                                  : '',
                              ]
                                .filter(Boolean)
                                .join(' \xb7 '),
                            }),
                          ],
                        }),
                        (0, D.jsx)(r.Copy, {
                          style: {
                            fontSize: 15,
                            fontFamily: 'Vazirmatn_700Bold',
                            color: e.points < 0 ? h.danger : h.success,
                          },
                          children: B(e.points),
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              ],
            }),
        ],
      });
    }
  },
  908,
  [
    2, 232, 17, 240, 99, 407, 385, 382, 415, 311, 435, 461, 614, 909, 462, 910,
    807, 911, 518, 517, 913, 338,
  ],
);
