// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 718; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, _a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Alarms = function ({
        state: e,
        onChange: w,
        onClose: S,
        onRoutines: v,
        canManage: D = !0,
        presetLowStock: P = !1,
      }) {
        const A = (0, r.useDesktop)(),
          { colors: I } = (0, n.useTheme)(),
          [B, k] = (0, a.useState)('rules'),
          [R, L] = (0, a.useState)(null),
          [_, z] = (0, a.useState)(!1),
          [O, F] = (0, a.useState)(30),
          [T, W] = (0, y.useConfirm)(),
          [M, q] = (0, a.useState)('product'),
          [K, N] = (0, a.useState)(''),
          [E, H] = (0, a.useState)(''),
          [V, G] = (0, a.useState)('atOrBelow'),
          [$, J] = (0, a.useState)('5'),
          [Q, U] = (0, a.useState)(''),
          X = e.alarmRules || [],
          Y = [...(e.alerts || [])].reverse(),
          Z = ['below', 'atOrBelow', 'equals', 'above'].includes(V),
          ee = e.products
            .filter((e) =>
              (0, f.normalizeName)(e.name).includes((0, f.normalizeName)(E)),
            )
            .slice(0, 20);
        function re(e) {
          (L(e?.id || null),
            q(e?.scope || 'product'),
            N(e?.target || ''),
            G(e?.kind || 'atOrBelow'),
            J(String(e?.threshold ?? 5)),
            H(''),
            U(''),
            z(!0));
        }
        function ae(r) {
          T({
            title: o.fa.deleteAlarm,
            text: o.fa.deleteAlarmConfirm,
            ok: o.fa.deleteAlarm,
            run: () => {
              Promise.resolve(
                w({ ...e, alarmRules: X.filter((e) => e.id !== r) }),
              ).catch((e) => U((0, h.errorText)(e)));
            },
          });
        }
        function te(e, r, a, t) {
          return (0, C.jsx)(
            l.default,
            {
              testID: t,
              onPress: a,
              accessibilityRole: 'button',
              accessibilityState: { selected: r },
              style: {
                padding: 9,
                borderRadius: 11,
                backgroundColor: r ? I.accentSoft : I.soft,
              },
              children: (0, C.jsx)(s.Copy, {
                style: { fontSize: 12 },
                children: e,
              }),
            },
            t,
          );
        }
        return (
          (0, a.useEffect)(() => {
            P && (q('all'), G('atOrBelow'), J('5'), z(!0));
          }, [P]),
          (0, C.jsxs)(t.default, {
            style: { gap: 12 },
            children: [
              W,
              (0, C.jsxs)(t.default, {
                style: s.common.between,
                children: [
                  (0, C.jsx)(s.Copy, {
                    style: s.common.title,
                    children: o.fa.stockAlarms,
                  }),
                  (0, C.jsx)(s.Button, {
                    secondary: !0,
                    onPress: S,
                    children: o.fa.backInventory,
                  }),
                ],
              }),
              v &&
                (0, C.jsx)(l.default, {
                  testID: 'alarms-routines',
                  accessibilityRole: 'button',
                  onPress: v,
                  style: ({ pressed: e }) => ({
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 10,
                    padding: 12,
                    borderRadius: 14,
                    borderWidth: 1,
                    borderStyle: 'dashed',
                    borderColor: I.accent,
                    opacity: e ? 0.85 : 1,
                  }),
                  children: (0, C.jsx)(s.Copy, {
                    style: {
                      flex: 1,
                      fontSize: 13,
                      color: I.accent,
                      fontFamily: 'Vazirmatn_600SemiBold',
                    },
                    children: (0, x.L)(
                      '\u06cc\u0627\u062f\u0622\u0648\u0631\u06cc\u200c\u0647\u0627\u06cc \u062a\u06a9\u0631\u0627\u0631\u06cc \u062e\u0631\u06cc\u062f\u060c \u0645\u062b\u0644 \xab\u0647\u0631 \u062c\u0645\u0639\u0647 \u0633\u0627\u0639\u062a \u06f8 \u0634\u0628 \u0646\u0627\u0646\xbb',
                    ),
                  }),
                }),
              (0, C.jsx)(s.Copy, {
                style: [s.common.small, { color: I.muted }],
                children: o.fa.alarmIntro,
              }),
              !D &&
                (0, C.jsx)(s.Card, {
                  children: (0, C.jsx)(s.Copy, {
                    children: p.platformFa.subscriptionRequired,
                  }),
                }),
              (0, C.jsxs)(t.default, {
                style: s.common.row,
                children: [
                  te(
                    o.fa.alarmRules,
                    'rules' === B,
                    () => k('rules'),
                    'alarm-rules-tab',
                  ),
                  te(
                    o.fa.alarmHistory,
                    'history' === B,
                    () => k('history'),
                    'alarm-history-tab',
                  ),
                ],
              }),
              'rules' === B &&
                (0, C.jsxs)(C.Fragment, {
                  children: [
                    D &&
                      !_ &&
                      (0, C.jsx)(s.Button, {
                        testID: 'new-alarm',
                        onPress: () => re(),
                        children: o.fa.newAlarm,
                      }),
                    D &&
                      _ &&
                      (0, C.jsxs)(s.Card, {
                        style: A
                          ? {
                              maxWidth: 800,
                              width: '100%',
                              alignSelf: 'flex-end',
                            }
                          : void 0,
                        children: [
                          (0, C.jsx)(t.default, {
                            style: s.common.row,
                            children: ['product', 'all', 'category'].map((e) =>
                              te(
                                o.fa.alarmScopes[e],
                                M === e,
                                () => {
                                  (q(e), N(''));
                                },
                                'alarm-scope-' + e,
                              ),
                            ),
                          }),
                          'product' === M &&
                            (0, C.jsxs)(C.Fragment, {
                              children: [
                                (0, C.jsx)(s.Input, {
                                  testID: 'alarm-search',
                                  value: E,
                                  onChangeText: H,
                                  placeholder: o.fa.searchProduct,
                                }),
                                !!K &&
                                  (0, C.jsxs)(s.Copy, {
                                    testID: 'alarm-selected-product',
                                    children: [
                                      o.fa.selectedItem,
                                      ': ',
                                      e.products.find((e) => e.id === K)?.name,
                                    ],
                                  }),
                                (0, C.jsx)(t.default, {
                                  style: { gap: 5 },
                                  children: ee.map((e) =>
                                    te(
                                      e.name,
                                      K === e.id,
                                      () => N(e.id),
                                      'alarm-product-' + e.id,
                                    ),
                                  ),
                                }),
                                (0, C.jsx)(s.Copy, {
                                  style: { fontSize: 11, color: I.muted },
                                  children: o.fa.alarmSearchHint,
                                }),
                              ],
                            }),
                          'category' === M &&
                            (0, C.jsx)(t.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                flexWrap: 'wrap',
                                gap: 5,
                              },
                              children: (e.categories || []).map((e) =>
                                te(
                                  e,
                                  K === e,
                                  () => N(e),
                                  'alarm-category-' + e,
                                ),
                              ),
                            }),
                          (0, C.jsx)(s.Copy, { children: o.fa.alarmCondition }),
                          (0, C.jsx)(t.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              flexWrap: 'wrap',
                              gap: 6,
                            },
                            children: c.alarmKinds.map((e) =>
                              te(
                                o.fa.alarmKinds[e],
                                V === e,
                                () => G(e),
                                'alarm-kind-' + e,
                              ),
                            ),
                          }),
                          Z &&
                            (0, C.jsxs)(C.Fragment, {
                              children: [
                                (0, C.jsx)(s.Copy, {
                                  children: o.fa.alarmThreshold,
                                }),
                                (0, C.jsx)(b.MoneyInput, {
                                  testID: 'alarm-threshold',
                                  suffix: null,
                                  value: $,
                                  onChange: J,
                                  maxLength: 12,
                                }),
                              ],
                            }),
                          !!Q &&
                            (0, C.jsx)(s.Copy, {
                              style: { color: I.danger },
                              children: Q,
                            }),
                          (0, C.jsx)(s.Button, {
                            testID: 'save-alarm',
                            onPress: async function () {
                              try {
                                const r = (0, u.latinDigits)($).trim();
                                if (Z && !/^-?\d+$/.test(r))
                                  throw Error('invalid_alarm');
                                const a = {
                                  id: R || 'alarm-' + Date.now(),
                                  scope: M,
                                  target: K,
                                  kind: V,
                                  threshold: Z ? Number(r) : 0,
                                  enabled:
                                    !R ||
                                    (X.find((e) => e.id === R)?.enabled ?? !0),
                                };
                                (await w((0, c.saveAlarm)(e, a)),
                                  z(!1),
                                  L(null));
                              } catch (e) {
                                U((0, h.errorText)(e));
                              }
                            },
                            children: o.fa.saveAlarm,
                          }),
                          (0, C.jsx)(s.Button, {
                            secondary: !0,
                            onPress: () => z(!1),
                            children: o.fa.cancelVoice,
                          }),
                        ],
                      }),
                    !X.length &&
                      !_ &&
                      (0, C.jsx)(s.Copy, { children: o.fa.noAlarms }),
                    (0, C.jsx)(t.default, {
                      style: A
                        ? {
                            flexDirection: 'row-reverse',
                            flexWrap: 'wrap',
                            gap: 16,
                          }
                        : { gap: 12 },
                      children: X.map((r) =>
                        (0, C.jsxs)(
                          s.Card,
                          {
                            style: A ? { width: '48%', flexGrow: 1 } : void 0,
                            testID: 'alarm-rule-' + r.id,
                            children: [
                              (0, C.jsx)(s.Copy, {
                                children:
                                  'all' === r.scope
                                    ? o.fa.allProducts
                                    : 'category' === r.scope
                                      ? r.target
                                      : e.products.find(
                                          (e) => e.id === r.target,
                                        )?.name || o.fa.deletedProduct,
                              }),
                              (0, C.jsxs)(s.Copy, {
                                style: s.common.small,
                                children: [
                                  o.fa.alarmKinds[r.kind],
                                  ' ',
                                  [
                                    'below',
                                    'atOrBelow',
                                    'equals',
                                    'above',
                                  ].includes(r.kind)
                                    ? r.threshold.toLocaleString(
                                        (0, x.numberLocale)(),
                                      )
                                    : '',
                                ],
                              }),
                              D &&
                                (0, C.jsxs)(t.default, {
                                  style: {
                                    flexDirection: 'row-reverse',
                                    flexWrap: 'wrap',
                                    gap: 6,
                                  },
                                  children: [
                                    (0, C.jsx)(s.Button, {
                                      secondary: !0,
                                      onPress: () =>
                                        w({
                                          ...e,
                                          alarmRules: X.map((e) =>
                                            e.id === r.id
                                              ? { ...e, enabled: !e.enabled }
                                              : e,
                                          ),
                                        }),
                                      children: r.enabled
                                        ? o.fa.pauseAlarm
                                        : o.fa.enableAlarm,
                                    }),
                                    (0, C.jsx)(s.Button, {
                                      secondary: !0,
                                      onPress: () => re(r),
                                      children: o.fa.edit,
                                    }),
                                    (0, C.jsx)(s.Button, {
                                      secondary: !0,
                                      onPress: () => ae(r.id),
                                      children: o.fa.deleteAlarm,
                                    }),
                                  ],
                                }),
                            ],
                          },
                          r.id,
                        ),
                      ),
                    }),
                  ],
                }),
              'history' === B &&
                (0, C.jsxs)(C.Fragment, {
                  children: [
                    D &&
                      (0, C.jsx)(s.Button, {
                        testID: 'read-all-alerts',
                        secondary: !0,
                        onPress: () =>
                          w({
                            ...e,
                            alerts: (e.alerts || []).map((e) => ({
                              ...e,
                              read: !0,
                            })),
                          }),
                        children: o.fa.readAllAlerts,
                      }),
                    !Y.length &&
                      (0, C.jsx)(s.Copy, { children: o.fa.noAlerts }),
                    Y.slice(0, O).map((r) =>
                      (0, C.jsx)(
                        l.default,
                        {
                          testID: 'stock-alert',
                          disabled: !D,
                          onPress: () => {
                            Promise.resolve()
                              .then(() =>
                                w({
                                  ...e,
                                  alerts: e.alerts.map((e) =>
                                    e.id === r.id ? { ...e, read: !0 } : e,
                                  ),
                                }),
                              )
                              .catch((e) => U((0, h.errorText)(e)));
                          },
                          children: (0, C.jsxs)(s.Card, {
                            style: { borderColor: r.read ? I.line : I.accent },
                            children: [
                              (0, C.jsxs)(t.default, {
                                style: s.common.between,
                                children: [
                                  (0, C.jsx)(s.Copy, { children: r.name }),
                                  (0, C.jsxs)(s.Copy, {
                                    children: [
                                      r.stock.toLocaleString(
                                        (0, x.numberLocale)(),
                                      ),
                                      ' ',
                                      (0, j.unitName)(
                                        e.products.find(
                                          (e) => e.id === r.productId,
                                        )?.unit,
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                              (0, C.jsxs)(s.Copy, {
                                style: s.common.small,
                                children: [
                                  o.fa.alarmKinds[r.kind],
                                  ' ',
                                  [
                                    'below',
                                    'atOrBelow',
                                    'equals',
                                    'above',
                                  ].includes(r.kind)
                                    ? r.threshold.toLocaleString(
                                        (0, x.numberLocale)(),
                                      )
                                    : '',
                                ],
                              }),
                              (0, C.jsx)(s.Copy, {
                                style: { fontSize: 11, color: I.muted },
                                children: (0, u.formatMoment)(r.createdAt),
                              }),
                            ],
                          }),
                        },
                        r.id,
                      ),
                    ),
                    Y.length > O &&
                      (0, C.jsx)(s.Button, {
                        secondary: !0,
                        onPress: () => F((e) => e + 30),
                        children: o.fa.moreAlerts,
                      }),
                  ],
                }),
            ],
          })
        );
      }));
    var r = _r(d[0]),
      a = _r(d[1]),
      t = e(_r(d[2])),
      l = e(_r(d[3])),
      s = _r(d[4]),
      o = _r(d[5]),
      n = _r(d[6]),
      c = _r(d[7]),
      u = _r(d[8]),
      f = _r(d[9]),
      h = _r(d[10]),
      p = _r(d[11]),
      x = _r(d[12]),
      y = _r(d[13]),
      j = _r(d[14]),
      b = _r(d[15]),
      C = _r(d[16]);
  },
  718,
  [
    481, 2, 99, 232, 407, 492, 382, 454, 440, 439, 690, 502, 311, 534, 585, 614,
    338,
  ],
);
