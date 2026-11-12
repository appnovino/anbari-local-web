// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 910; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.ClubRewards = function ({
        rule: e,
        canEdit: s,
        busy: h,
        error: x = '',
        onSave: j,
      }) {
        const { colors: S } = (0, c.useTheme)(),
          I = e.rewards || [],
          [C, D] = (0, l.useState)(null);
        if (!s && !I.length) return null;
        const v = (l) => j({ ...(0, b.cleanClubRule)(e), rewards: l });
        function T(e) {
          if (e < 1 || h) return;
          const l = [...I];
          (([l[e - 1], l[e]] = [l[e], l[e - 1]]), v(l));
        }
        return (0, w.jsxs)(i.Card, {
          testID: 'club-rewards',
          style: { gap: 8 },
          children: [
            (0, w.jsxs)(r.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
              },
              children: [
                (0, w.jsx)(o.Icon, { name: 'gift', size: 18, color: S.accent }),
                (0, w.jsx)(i.Copy, {
                  style: {
                    flex: 1,
                    fontSize: 15,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, u.L)(
                    '\u062c\u0627\u06cc\u0632\u0647\u200c\u0647\u0627',
                  ),
                }),
                s &&
                  I.length < p.CLUB_REWARD_MAX &&
                  (0, w.jsx)(y.SmallKey, {
                    testID: 'club-reward-add',
                    kind: 'tint',
                    icon: 'plus',
                    label: (0, u.L)(
                      '\u062c\u0627\u06cc\u0632\u0647\u0654 \u062a\u0627\u0632\u0647',
                    ),
                    disabled: h,
                    onPress: () => D('new'),
                  }),
              ],
            }),
            I.length
              ? (0, w.jsxs)(r.default, {
                  children: [
                    I.map((e, l) =>
                      (0, w.jsxs)(
                        r.default,
                        {
                          style: {
                            flexDirection: 'row-reverse',
                            alignItems: 'center',
                            gap: 6,
                            minHeight: 48,
                            borderTopWidth: l ? n.default.hairlineWidth : 0,
                            borderColor: S.line,
                          },
                          children: [
                            (0, w.jsxs)(t.default, {
                              testID: 'club-reward-' + l,
                              accessibilityRole: 'button',
                              accessibilityLabel: (0, f.rewardSentence)(e),
                              disabled: !s,
                              onPress: () => D(e),
                              style: ({ pressed: e }) => ({
                                flex: 1,
                                minWidth: 0,
                                paddingVertical: 6,
                                opacity: e ? 0.7 : 1,
                              }),
                              children: [
                                (0, w.jsx)(i.Copy, {
                                  numberOfLines: 1,
                                  style: {
                                    fontSize: 14,
                                    fontFamily: 'Vazirmatn_600SemiBold',
                                  },
                                  children: (0, f.rewardTitle)(e),
                                }),
                                (0, w.jsx)(i.Copy, {
                                  numberOfLines: 2,
                                  style: { fontSize: 12, color: S.muted },
                                  children: (0, f.rewardSentence)(e),
                                }),
                              ],
                            }),
                            s &&
                              l > 0 &&
                              (0, w.jsx)(t.default, {
                                testID: 'club-reward-up-' + l,
                                accessibilityRole: 'button',
                                accessibilityLabel: (0, u.L)(
                                  '\u0628\u0627\u0644\u0627\u062a\u0631 \u0628\u0628\u0631',
                                ),
                                disabled: h,
                                onPress: () => T(l),
                                hitSlop: 6,
                                style: ({ pressed: e }) => ({
                                  width: 36,
                                  height: 36,
                                  borderRadius: 18,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  backgroundColor: S.soft,
                                  opacity: e || h ? 0.6 : 1,
                                }),
                                children: (0, w.jsx)(i.Copy, {
                                  style: {
                                    fontSize: 13,
                                    lineHeight: 20,
                                    color: S.text,
                                  },
                                  children: '\u25b2',
                                }),
                              }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                    (0, w.jsx)(i.Copy, {
                      style: { fontSize: 11, color: S.muted, paddingTop: 4 },
                      children: (0, u.L)(
                        '\u062f\u0631 \u0641\u0627\u06a9\u062a\u0648\u0631 \u0641\u0631\u0648\u0634\u060c \u0639\u0636\u0648 \u06cc\u06a9\u06cc \u0627\u0632 \u0627\u06cc\u0646 \u062c\u0627\u06cc\u0632\u0647\u200c\u0647\u0627 \u0631\u0627 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f \u0648 \u0627\u0645\u062a\u06cc\u0627\u0632\u0634 \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f.',
                      ),
                    }),
                  ],
                })
              : (0, w.jsx)(i.Copy, {
                  testID: 'club-rewards-empty',
                  style: [i.common.small, { color: S.muted }],
                  children: (0, u.L)(
                    '\u0647\u0646\u0648\u0632 \u062c\u0627\u06cc\u0632\u0647\u200c\u0627\u06cc \u0646\u06cc\u0633\u062a\u061b \u0627\u0645\u062a\u06cc\u0627\u0632 \u0645\u062b\u0644 \u067e\u0648\u0644 \u0627\u0632 \u0641\u0627\u06a9\u062a\u0648\u0631 \u06a9\u0645 \u0645\u06cc\u200c\u0634\u0648\u062f. \u0628\u0627 \u062c\u0627\u06cc\u0632\u0647\u060c \u062e\u0648\u062f\u062a \u0645\u06cc\u200c\u06af\u0648\u06cc\u06cc \u0686\u0646\u062f \u0627\u0645\u062a\u06cc\u0627\u0632 \u0686\u0647 \u062a\u062e\u0641\u06cc\u0641\u06cc \u0628\u062f\u0647\u062f.',
                  ),
                }),
            C &&
              (0, w.jsx)(L, {
                reward: 'new' === C ? null : C,
                busy: h,
                error: x,
                onClose: () => D(null),
                onSave: async (e) => {
                  const l =
                    'new' === C
                      ? [...I, e]
                      : I.map((l) => (l.id === e.id ? e : l));
                  (await v(l)) && D(null);
                },
                onDelete:
                  'new' === C
                    ? void 0
                    : async () => {
                        (await v(I.filter((e) => e.id !== C.id))) && D(null);
                      },
              }),
          ],
        });
      }),
      (_e.RewardSheet = L));
    var l = _r(d[0]),
      t = e(_r(d[1])),
      n = e(_r(d[2])),
      r = e(_r(d[3])),
      s = _r(d[4]),
      i = _r(d[5]),
      o = _r(d[6]),
      c = _r(d[7]),
      u = _r(d[8]),
      b = _r(d[9]),
      p = _r(d[10]),
      h = _r(d[11]),
      y = _r(d[12]),
      f = _r(d[13]),
      x = _r(d[14]),
      w = _r(d[15]);
    const j = (e) => (e ? String(e) : '');
    function L({
      reward: e,
      busy: n,
      error: o = '',
      onSave: b,
      onDelete: L,
      onClose: S,
    }) {
      const { colors: I } = (0, c.useTheme)(),
        [C, D] = (0, l.useState)(j(e?.points)),
        [v, T] = (0, l.useState)(e?.kind || 'percent'),
        [R, _] = (0, l.useState)(j(e?.value)),
        [z, F] = (0, l.useState)(j(e?.capToman)),
        [M, P] = (0, l.useState)(j(e?.minToman)),
        [k, H] = (0, l.useState)(e?.name || ''),
        [U, W] = (0, l.useState)(!!(e?.capToman || e?.minToman || e?.name)),
        [A, B] = (0, l.useState)(!1),
        N = (0, p.cleanClubReward)({
          id: e?.id || 'new',
          points: Number(C),
          kind: v,
          value: Number(R),
          capToman: z ? Number(z) : null,
          minToman: M ? Number(M) : null,
          name: k,
        }),
        V = (!!z && 'percent' === v && !N?.capToman) || (!!M && !N?.minToman),
        E = !!N && !V && !n;
      function K() {
        if (!E || !N) return;
        const { id: l, ...t } = N;
        b(e?.id ? { ...t, id: e.id } : t);
      }
      const O = (0, w.jsxs)(r.default, {
        style: { gap: 8 },
        children: [
          !!o &&
            (0, w.jsx)(i.Copy, {
              testID: 'club-reward-error',
              accessibilityRole: 'alert',
              style: { fontSize: 12.5, lineHeight: 20, color: I.danger },
              children: o,
            }),
          (0, w.jsxs)(r.default, {
            style: { flexDirection: 'row-reverse', gap: 8 },
            children: [
              (0, w.jsx)(y.SmallKey, {
                grow: !0,
                testID: 'club-reward-save',
                kind: 'primary',
                label: n
                  ? (0, u.L)(
                      '\u062f\u0631 \u062d\u0627\u0644 \u0630\u062e\u06cc\u0631\u0647\u2026',
                    )
                  : (0, u.L)('\u0630\u062e\u06cc\u0631\u0647'),
                disabled: !E,
                onPress: K,
              }),
              L &&
                (0, w.jsx)(y.SmallKey, {
                  testID: 'club-reward-delete',
                  kind: 'soft',
                  icon: 'close',
                  label: A
                    ? (0, u.L)('\u062d\u0630\u0641 \u0634\u0648\u062f\u061f')
                    : (0, u.L)('\u062d\u0630\u0641'),
                  disabled: n,
                  onPress: () => {
                    A ? L() : B(!0);
                  },
                }),
            ],
          }),
        ],
      });
      return (0, w.jsx)(s.Sheet, {
        visible: !0,
        title: e
          ? (0, u.L)(
              '\u0648\u06cc\u0631\u0627\u06cc\u0634 \u062c\u0627\u06cc\u0632\u0647',
            )
          : (0, u.L)(
              '\u062c\u0627\u06cc\u0632\u0647\u0654 \u062a\u0627\u0632\u0647',
            ),
        onClose: S,
        onSubmit: K,
        busy: n,
        footer: O,
        children: (0, w.jsxs)(r.default, {
          testID: 'club-reward-sheet',
          style: { gap: 12 },
          children: [
            (0, w.jsx)(y.Field, {
              label: (0, u.L)(
                '\u0686\u0646\u062f \u0627\u0645\u062a\u06cc\u0627\u0632 \u0644\u0627\u0632\u0645 \u0627\u0633\u062a\u061f',
              ),
              children: (0, w.jsx)(h.MoneyInput, {
                testID: 'club-reward-points',
                value: C,
                onChange: D,
                suffix: (0, u.L)('\u0627\u0645\u062a\u06cc\u0627\u0632'),
                placeholder: (0, u.localDigits)('100'),
              }),
            }),
            (0, w.jsx)(y.Field, {
              label: (0, u.L)(
                '\u0645\u0634\u062a\u0631\u06cc \u0686\u0647 \u0645\u06cc\u200c\u06af\u06cc\u0631\u062f\u061f',
              ),
              children: (0, w.jsx)(i.Segmented, {
                value: v,
                onChange: T,
                items: [
                  {
                    value: 'percent',
                    label: (0, u.L)(
                      '\u062f\u0631\u0635\u062f \u062a\u062e\u0641\u06cc\u0641',
                    ),
                    testID: 'club-reward-percent',
                  },
                  {
                    value: 'amount',
                    label: (0, u.L)(
                      '\u0645\u0628\u0644\u063a \u062b\u0627\u0628\u062a \u062a\u062e\u0641\u06cc\u0641',
                    ),
                    testID: 'club-reward-amount',
                  },
                ],
              }),
            }),
            (0, w.jsx)(y.Field, {
              label:
                'percent' === v
                  ? (0, u.L)(
                      '\u0686\u0646\u062f \u062f\u0631\u0635\u062f \u0627\u0632 \u0641\u0627\u06a9\u062a\u0648\u0631\u061f',
                    )
                  : (0, x.shopUnitText)(
                      (0, u.L)(
                        '\u0686\u0646\u062f \u062a\u0648\u0645\u0627\u0646 \u0627\u0632 \u0641\u0627\u06a9\u062a\u0648\u0631\u061f',
                      ),
                    ),
              children: (0, w.jsx)(h.MoneyInput, {
                testID: 'club-reward-value',
                value: R,
                onChange: _,
                suffix: 'percent' === v ? '\u066a' : void 0,
                placeholder:
                  'percent' === v
                    ? (0, u.localDigits)('10')
                    : (0, u.localDigits)(String((0, x.localAmount)(1e6))),
              }),
            }),
            U
              ? (0, w.jsxs)(r.default, {
                  style: { gap: 12 },
                  children: [
                    'percent' === v &&
                      (0, w.jsx)(y.Field, {
                        label: (0, u.L)(
                          '\u0633\u0642\u0641 \u062a\u062e\u0641\u06cc\u0641 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                        ),
                        children: (0, w.jsx)(h.MoneyInput, {
                          testID: 'club-reward-cap',
                          value: z,
                          onChange: F,
                          placeholder: (0, u.L)(
                            '\u0628\u062f\u0648\u0646 \u0633\u0642\u0641',
                          ),
                        }),
                      }),
                    (0, w.jsx)(y.Field, {
                      label: (0, u.L)(
                        '\u06a9\u0645\u062a\u0631\u06cc\u0646 \u0645\u0628\u0644\u063a \u0641\u0627\u06a9\u062a\u0648\u0631 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                      ),
                      children: (0, w.jsx)(h.MoneyInput, {
                        testID: 'club-reward-min',
                        value: M,
                        onChange: P,
                        placeholder: (0, u.L)(
                          '\u0647\u0631 \u0645\u0628\u0644\u063a\u06cc',
                        ),
                      }),
                    }),
                    (0, w.jsx)(y.Field, {
                      label: (0, u.L)(
                        '\u0646\u0627\u0645 \u06a9\u0648\u062a\u0627\u0647 (\u0627\u062e\u062a\u06cc\u0627\u0631\u06cc)',
                      ),
                      children: (0, w.jsx)(i.Input, {
                        testID: 'club-reward-name',
                        value: k,
                        onChangeText: H,
                        maxLength: p.CLUB_REWARD_LIMITS.name,
                        placeholder: (0, u.L)(
                          '\u0645\u062b\u0644\u0627\u064b \u06cc\u06a9 \u0645\u06cc\u0644\u06cc\u0648\u0646 \u062a\u062e\u0641\u06cc\u0641',
                        ),
                        style: { minHeight: 44, paddingVertical: 8 },
                      }),
                    }),
                  ],
                })
              : (0, w.jsx)(t.default, {
                  testID: 'club-reward-more',
                  accessibilityRole: 'button',
                  onPress: () => W(!0),
                  hitSlop: 6,
                  style: ({ pressed: e }) => ({
                    minHeight: 36,
                    justifyContent: 'center',
                    opacity: e ? 0.6 : 1,
                  }),
                  children: (0, w.jsx)(i.Copy, {
                    style: { fontSize: 13, color: I.accent },
                    children: (0, u.L)(
                      '+ \u0633\u0642\u0641\u060c \u06a9\u0645\u062a\u0631\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u06cc\u0627 \u0646\u0627\u0645',
                    ),
                  }),
                }),
            N && !V
              ? (0, w.jsx)(i.Copy, {
                  testID: 'club-reward-preview',
                  style: { fontSize: 13, color: I.success },
                  children: (0, f.rewardSentence)(N),
                })
              : (0, w.jsx)(i.Copy, {
                  testID: 'club-reward-invalid',
                  style: [i.common.small, { color: I.muted }],
                  children:
                    'percent' === v
                      ? 'rial' === (0, x.moneyUnit)()
                        ? (0, u.L)(
                            '\u0627\u0645\u062a\u06cc\u0627\u0632 \u0648 \u062f\u0631\u0635\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 (\u062f\u0631\u0635\u062f \u0627\u0632 \u06f1 \u062a\u0627 \u06f1\u06f0\u06f0\u061b \u0633\u0642\u0641 \u0648 \u06a9\u0645\u062a\u0631\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u062f\u0633\u062a\u200c\u06a9\u0645 \u06f1\u06f0\u066c\u06f0\u06f0\u06f0 \u0631\u06cc\u0627\u0644).',
                          )
                        : (0, u.L)(
                            '\u0627\u0645\u062a\u06cc\u0627\u0632 \u0648 \u062f\u0631\u0635\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 (\u062f\u0631\u0635\u062f \u0627\u0632 \u06f1 \u062a\u0627 \u06f1\u06f0\u06f0\u061b \u0633\u0642\u0641 \u0648 \u06a9\u0645\u062a\u0631\u06cc\u0646 \u0641\u0627\u06a9\u062a\u0648\u0631 \u062f\u0633\u062a\u200c\u06a9\u0645 \u06f1\u066c\u06f0\u06f0\u06f0 \u062a\u0648\u0645\u0627\u0646).',
                          )
                      : 'rial' === (0, x.moneyUnit)()
                        ? (0, u.L)(
                            '\u0627\u0645\u062a\u06cc\u0627\u0632 \u0648 \u0645\u0628\u0644\u063a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 (\u062f\u0633\u062a\u200c\u06a9\u0645 \u06f1\u06f0\u066c\u06f0\u06f0\u06f0 \u0631\u06cc\u0627\u0644).',
                          )
                        : (0, u.L)(
                            '\u0627\u0645\u062a\u06cc\u0627\u0632 \u0648 \u0645\u0628\u0644\u063a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633 (\u062f\u0633\u062a\u200c\u06a9\u0645 \u06f1\u066c\u06f0\u06f0\u06f0 \u062a\u0648\u0645\u0627\u0646).',
                          ),
                }),
          ],
        }),
      });
    }
  },
  910,
  [2, 232, 17, 99, 539, 407, 385, 382, 311, 461, 462, 614, 517, 807, 435, 338],
);
