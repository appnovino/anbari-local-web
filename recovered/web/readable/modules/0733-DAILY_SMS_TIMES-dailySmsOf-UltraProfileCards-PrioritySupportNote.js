// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 733; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'DAILY_SMS_TIMES', {
        enumerable: !0,
        get: function () {
          return j;
        },
      }),
      (_e.dailySmsOf = S),
      (_e.UltraProfileCards = function ({ shop: e, demo: s = !1 }) {
        const [n, l] = (0, t.useState)(null),
          o = (0, f.useShopSwitch)();
        if (
          ((0, t.useEffect)(() => {
            if ((l(null), !e || s)) return;
            let t = !0;
            return (
              (0, h.request)((0, h.shopPath)(e, '/billing'))
                .then((e) => {
                  t && l(e.subscription?.features || {});
                })
                .catch(() => {}),
              () => {
                t = !1;
              }
            );
          }, [e?.id, s]),
          !e || s || !n)
        )
          return null;
        const r = !!o && (!0 === n.multi_shop || o.shops.length > 1),
          c = !0 === n.daily_sms && 'owner' === e.role;
        return (0, x.jsxs)(x.Fragment, {
          children: [r && (0, x.jsx)(C, {}), c && (0, x.jsx)(z, { shop: e })],
        });
      }),
      (_e.PrioritySupportNote = function ({ days: e = 1, compact: t = !1 }) {
        const { colors: s } = (0, u.useTheme)();
        return (0, x.jsxs)(o.default, {
          testID: 'support-priority',
          style: {
            flexDirection: 'row-reverse',
            alignItems: 'center',
            gap: 8,
            paddingHorizontal: t ? 0 : 12,
            paddingVertical: t ? 0 : 10,
            borderRadius: 14,
            backgroundColor: t ? 'transparent' : s.accentSoft,
          },
          children: [
            (0, x.jsx)(c.Icon, {
              name: 'bolt',
              size: t ? 14 : 18,
              color: s.accent,
            }),
            (0, x.jsxs)(r.Copy, {
              style: {
                flexShrink: 1,
                fontSize: t ? 12 : 13,
                lineHeight: t ? 18 : 22,
                color: s.accent,
                fontFamily: 'Vazirmatn_600SemiBold',
              },
              children: [
                (0, p.L)(
                  '\u0627\u0648\u0644\u0648\u06cc\u062a\u200c\u062f\u0627\u0631',
                ),
                ' \xb7 ',
                (0, p.L)(
                  '\u067e\u0627\u0633\u062e \u062a\u0627 {n} \u0631\u0648\u0632 \u06a9\u0627\u0631\u06cc',
                  { n: (0, p.localDigits)(e) },
                ),
              ],
            }),
          ],
        });
      }));
    var t = _r(d[0]),
      s = e(_r(d[1])),
      n = e(_r(d[2])),
      l = e(_r(d[3])),
      o = e(_r(d[4])),
      r = _r(d[5]),
      c = _r(d[6]),
      u = _r(d[7]),
      h = _r(d[8]),
      f = _r(d[9]),
      y = _r(d[10]),
      p = _r(d[11]),
      x = _r(d[12]);
    const j = ['19:00', '20:00', '21:00', '22:00', '23:00'];
    function S(e) {
      const t = e?.settings?.dailySms;
      return {
        on: !1 !== t?.on,
        at: 'string' == typeof t?.at ? t.at : '21:00',
      };
    }
    function b() {
      const { colors: e } = (0, u.useTheme)();
      return (0, x.jsx)(o.default, {
        style: {
          paddingHorizontal: 8,
          paddingVertical: 2,
          borderRadius: 999,
          backgroundColor: e.accentSoft,
        },
        children: (0, x.jsx)(r.Copy, {
          style: {
            fontSize: 11,
            lineHeight: 18,
            fontFamily: 'Vazirmatn_600SemiBold',
            color: e.accent,
          },
          children: (0, p.L)('\u0627\u0648\u0644\u062a\u0631\u0627'),
        }),
      });
    }
    function C() {
      const { colors: e } = (0, u.useTheme)(),
        l = (0, f.useShopSwitch)(),
        [j, S] = (0, t.useState)(!1),
        [C, z] = (0, t.useState)(!1),
        [L, I] = (0, t.useState)(''),
        [H, D] = (0, t.useState)(!1),
        [w, _] = (0, t.useState)('');
      if (!l) return null;
      const {
          shops: P,
          current: v,
          shopLimit: V,
          canAddShop: B,
          switchTo: k,
          addShop: R,
        } = l,
        T = (0, y.shopListModel)(P, v.id, V, B);
      async function F() {
        const e = L.trim();
        if (e) {
          (D(!0), _(''));
          try {
            const t = await R(e);
            (z(!1), I(''), k({ ...t, role: 'owner' }));
          } catch (e) {
            _((0, h.message)(e));
          } finally {
            D(!1);
          }
        } else
          _(
            (0, p.L)(
              '\u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f.',
            ),
          );
      }
      const A = (e) => {
          const t = (0, y.shopKind)(e);
          return 'staff' === t
            ? (0, p.L)(
                '\u0647\u0645\u06a9\u0627\u0631 \u0627\u06cc\u0646 \u0641\u0631\u0648\u0634\u06af\u0627\u0647',
              )
            : 'extra' === t
              ? (0, p.L)(
                  '\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u062f\u06cc\u06af\u0631',
                )
              : (0, p.L)(
                  '\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0627\u0635\u0644\u06cc',
                );
        },
        M = (t, l) =>
          (0, x.jsxs)(
            s.default,
            {
              testID: 'ultra-shop-' + t.id,
              accessibilityRole: 'button',
              accessibilityState: { selected: l },
              disabled: l,
              onPress: () => k(t),
              style: ({ pressed: t }) => ({
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
                minHeight: 56,
                paddingHorizontal: 12,
                paddingVertical: 8,
                borderRadius: 14,
                borderWidth: l ? 1.5 : n.default.hairlineWidth,
                borderColor: l ? e.accent : e.line,
                backgroundColor: l ? e.accentSoft : e.surface,
                opacity: t ? 0.7 : 1,
              }),
              children: [
                (0, x.jsx)(o.default, {
                  style: {
                    width: 36,
                    height: 36,
                    borderRadius: 10,
                    backgroundColor: l ? e.accent : e.soft,
                    alignItems: 'center',
                    justifyContent: 'center',
                  },
                  children: (0, x.jsx)(c.Icon, {
                    name: 'store',
                    size: 20,
                    color: l ? e.onAccent : e.text,
                  }),
                }),
                (0, x.jsxs)(o.default, {
                  style: { flex: 1, minWidth: 0 },
                  children: [
                    (0, x.jsx)(r.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 15,
                        lineHeight: 24,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: t.name,
                    }),
                    (0, x.jsx)(r.Copy, {
                      style: { fontSize: 12, lineHeight: 18, color: e.muted },
                      children: A(t),
                    }),
                  ],
                }),
                l
                  ? (0, x.jsxs)(o.default, {
                      style: {
                        flexDirection: 'row-reverse',
                        alignItems: 'center',
                        gap: 4,
                      },
                      children: [
                        (0, x.jsx)(c.Icon, {
                          name: 'check',
                          size: 16,
                          color: e.accent,
                        }),
                        (0, x.jsx)(r.Copy, {
                          style: {
                            fontSize: 12,
                            lineHeight: 18,
                            color: e.accent,
                            fontFamily: 'Vazirmatn_600SemiBold',
                          },
                          children: (0, p.L)(
                            '\u0628\u0627\u0632 \u0627\u0633\u062a',
                          ),
                        }),
                      ],
                    })
                  : (0, x.jsx)(r.Copy, {
                      style: { fontSize: 12, lineHeight: 18, color: e.text },
                      children: (0, p.L)(
                        '\u0631\u0641\u062a\u0646 \u0628\u0647 \u0627\u06cc\u0646 \u0641\u0631\u0648\u0634\u06af\u0627\u0647',
                      ),
                    }),
              ],
            },
            t.id,
          );
      return (0, x.jsxs)(r.Card, {
        testID: 'ultra-shops',
        style: { gap: 10 },
        children: [
          (0, x.jsxs)(o.default, {
            style: [r.common.between, { gap: 8 }],
            children: [
              (0, x.jsx)(r.Copy, {
                style: {
                  fontSize: 16,
                  lineHeight: 26,
                  fontFamily: 'Vazirmatn_700Bold',
                },
                children: (0, p.L)(
                  '\u0641\u0631\u0648\u0634\u06af\u0627\u0647\u200c\u0647\u0627\u06cc \u0645\u0646',
                ),
              }),
              (0, x.jsx)(b, {}),
            ],
          }),
          M(v, !0),
          (0, x.jsxs)(s.default, {
            testID: 'ultra-switch-shop',
            accessibilityRole: 'button',
            accessibilityState: { expanded: j },
            onPress: () => {
              (S(!j), z(!1), _(''));
            },
            style: ({ pressed: t }) => ({
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 8,
              minHeight: 44,
              paddingHorizontal: 12,
              borderRadius: 12,
              backgroundColor: e.soft,
              opacity: t ? 0.7 : 1,
            }),
            children: [
              (0, x.jsx)(c.Icon, { name: 'store', size: 18, color: e.text }),
              (0, x.jsx)(r.Copy, {
                style: {
                  flex: 1,
                  fontSize: 14,
                  lineHeight: 22,
                  fontFamily: 'Vazirmatn_600SemiBold',
                },
                children: (0, p.L)(
                  '\u062a\u063a\u06cc\u06cc\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647',
                ),
              }),
              (0, x.jsx)(r.Copy, {
                style: { fontSize: 12, lineHeight: 18, color: e.muted },
                children: (0, p.L)(
                  '{n} \u0627\u0632 {limit} \u0641\u0631\u0648\u0634\u06af\u0627\u0647',
                  {
                    n: (0, p.localDigits)(T.owned),
                    limit: (0, p.localDigits)(T.limit),
                  },
                ),
              }),
              (0, x.jsx)(r.Copy, {
                style: { fontSize: 14, lineHeight: 22, color: e.muted },
                children: j ? '\u25b4' : '\u25be',
              }),
            ],
          }),
          j &&
            (0, x.jsxs)(o.default, {
              testID: 'ultra-shop-list',
              style: { gap: 8 },
              children: [
                T.others.map((e) => M(e, !1)),
                !T.others.length &&
                  !T.canAdd &&
                  (0, x.jsx)(r.Copy, {
                    style: { fontSize: 12, lineHeight: 20, color: e.muted },
                    children: (0, p.L)(
                      '\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u062f\u06cc\u06af\u0631\u06cc \u0646\u062f\u0627\u0631\u06cc.',
                    ),
                  }),
                T.canAdd &&
                  !C &&
                  (0, x.jsx)(r.Button, {
                    testID: 'ultra-add-shop',
                    secondary: !0,
                    onPress: () => {
                      (z(!0), _(''));
                    },
                    children: (0, p.L)(
                      '\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u062c\u062f\u06cc\u062f',
                    ),
                  }),
                C &&
                  (0, x.jsxs)(o.default, {
                    style: { gap: 8 },
                    children: [
                      (0, x.jsx)(r.Input, {
                        testID: 'ultra-shop-name',
                        value: L,
                        onChangeText: I,
                        placeholder: (0, p.L)(
                          '\u0646\u0627\u0645 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u062c\u062f\u06cc\u062f',
                        ),
                        maxLength: 100,
                      }),
                      (0, x.jsxs)(o.default, {
                        style: { flexDirection: 'row-reverse', gap: 8 },
                        children: [
                          (0, x.jsx)(o.default, {
                            style: { flex: 1 },
                            children: (0, x.jsx)(r.Button, {
                              testID: 'ultra-add-shop-save',
                              disabled: H,
                              onPress: () => {
                                F();
                              },
                              children: (0, p.L)(
                                '\u0633\u0627\u062e\u062a \u0648 \u0631\u0641\u062a\u0646 \u0628\u0647 \u0622\u0646',
                              ),
                            }),
                          }),
                          (0, x.jsx)(o.default, {
                            style: { flex: 1 },
                            children: (0, x.jsx)(r.Button, {
                              secondary: !0,
                              onPress: () => {
                                (z(!1), _(''));
                              },
                              children: (0, p.L)(
                                '\u0627\u0646\u0635\u0631\u0627\u0641',
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, x.jsx)(r.Copy, {
                  style: { fontSize: 12, lineHeight: 20, color: e.muted },
                  children: (0, p.L)(
                    '\u0647\u0631 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u062c\u062f\u0627\u0633\u062a: \u06a9\u0627\u0644\u0627\u060c \u0641\u0631\u0648\u0634\u060c \u0647\u0645\u06a9\u0627\u0631\u0627\u0646\u060c \u06a9\u0644\u06cc\u062f API \u0648 \u0627\u062a\u0635\u0627\u0644 ChatGPT \u0648 Claude \u062e\u0648\u062f\u0634 \u0631\u0627 \u062f\u0627\u0631\u062f. \u0627\u0634\u062a\u0631\u0627\u06a9 \u0631\u0648\u06cc \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0627\u0635\u0644\u06cc \u0627\u0633\u062a.',
                  ),
                }),
              ],
            }),
          !!w &&
            (0, x.jsx)(r.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 12, lineHeight: 20, color: e.danger },
              children: w,
            }),
        ],
      });
    }
    function z({ shop: e }) {
      const { colors: s } = (0, u.useTheme)(),
        [n, c] = (0, t.useState)(() => S(e)),
        [f, y] = (0, t.useState)(!1),
        [C, z] = (0, t.useState)('');
      async function L(t) {
        const s = n;
        (c({ ...n, ...t }), y(!0), z(''));
        try {
          const s = await (0, h.request)(
              (0, h.shopPath)(e, '/settings'),
              'PATCH',
              { dailySms: t },
            ),
            n = S({ ...e, settings: s.settings });
          (c(n), (e.settings = { ...e.settings, dailySms: n }));
        } catch (e) {
          (c(s), z((0, h.message)(e)));
        } finally {
          y(!1);
        }
      }
      return (0, x.jsxs)(r.Card, {
        testID: 'ultra-daily-sms',
        style: { gap: 10 },
        children: [
          (0, x.jsxs)(o.default, {
            style: [r.common.between, { gap: 8 }],
            children: [
              (0, x.jsxs)(o.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 8,
                  flexShrink: 1,
                },
                children: [
                  (0, x.jsx)(r.Copy, {
                    style: {
                      fontSize: 16,
                      lineHeight: 26,
                      fontFamily: 'Vazirmatn_700Bold',
                    },
                    children: (0, p.L)(
                      '\u067e\u06cc\u0627\u0645\u06a9 \u062e\u0644\u0627\u0635\u0647\u0654 \u0631\u0648\u0632',
                    ),
                  }),
                  (0, x.jsx)(b, {}),
                ],
              }),
              (0, x.jsx)(l.default, {
                testID: 'ultra-daily-sms-on',
                accessibilityLabel: (0, p.L)(
                  '\u067e\u06cc\u0627\u0645\u06a9 \u062e\u0644\u0627\u0635\u0647\u0654 \u0631\u0648\u0632',
                ),
                value: n.on,
                disabled: f,
                onValueChange: (e) => {
                  L({ on: e });
                },
                trackColor: { false: s.soft, true: s.accent },
              }),
            ],
          }),
          (0, x.jsx)(r.Copy, {
            style: { fontSize: 12, lineHeight: 20, color: s.muted },
            children: (0, p.L)(
              '\u0647\u0631 \u0631\u0648\u0632 \u0633\u0631 \u0633\u0627\u0639\u062a \u0628\u0633\u062a\u0646 \u0645\u063a\u0627\u0632\u0647 \u06cc\u06a9 \u067e\u06cc\u0627\u0645\u06a9 \u0628\u0647 \u0634\u0645\u0627\u0631\u0647\u0654 \u0634\u0645\u0627: \u0641\u0631\u0648\u0634 \u0648 \u0633\u0648\u062f \u0627\u0645\u0631\u0648\u0632\u060c \u067e\u0648\u0644 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc \u0648 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc\u060c \u0686\u06a9\u200c\u0647\u0627\u06cc \u0641\u0631\u062f\u0627 \u0648 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0631\u0648 \u0628\u0647 \u0627\u062a\u0645\u0627\u0645.',
            ),
          }),
          n.on &&
            (0, x.jsxs)(o.default, {
              style: { gap: 6 },
              children: [
                (0, x.jsx)(r.Copy, {
                  style: r.common.label,
                  children: (0, p.L)(
                    '\u0633\u0627\u0639\u062a \u0628\u0633\u062a\u0646 \u0645\u063a\u0627\u0632\u0647',
                  ),
                }),
                (0, x.jsx)(r.Segmented, {
                  numberLine: !0,
                  compact: !0,
                  height: 36,
                  value: n.at,
                  onChange: (e) => {
                    L({ at: e });
                  },
                  items: (j.includes(n.at) ? [...j] : [...j, n.at]).map(
                    (e) => ({
                      value: e,
                      label: (0, p.localDigits)(e),
                      testID: 'ultra-sms-at-' + e.replace(':', ''),
                    }),
                  ),
                }),
              ],
            }),
          !!C &&
            (0, x.jsx)(r.Copy, {
              accessibilityRole: 'alert',
              style: { fontSize: 12, lineHeight: 20, color: s.danger },
              children: C,
            }),
        ],
      });
    }
  },
  733,
  [2, 232, 17, 240, 99, 407, 385, 382, 415, 484, 734, 311, 338],
);
