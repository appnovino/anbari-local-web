// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 903; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, _a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'makePassword', {
        enumerable: !0,
        get: function () {
          return w;
        },
      }),
      Object.defineProperty(_e, 'makeUsername', {
        enumerable: !0,
        get: function () {
          return v;
        },
      }),
      (_e.accessSummary = function (e) {
        const t = [
          ...p
            .filter((t) =>
              'invoice' === t.key ? (e.do.invoice ?? e.do.sell) : e.do[t.key],
            )
            .map((e) => e.label),
          ...h.filter((t) => e.see[t.key]).map((e) => e.label),
        ];
        return t.length
          ? t.map((e) => (0, d.L)(e)).join(' \xb7 ')
          : (0, d.L)(
              '\u0641\u0642\u0637 \u062f\u06cc\u062f\u0646 \u0645\u0648\u062c\u0648\u062f\u06cc',
            );
      }),
      (_e.StaffManager = function ({ shop: e, onUpgrade: i }) {
        const { colors: c } = (0, a.useTheme)(),
          [h, p] = (0, t.useState)(null),
          [x, b] = (0, t.useState)(''),
          [j, C] = (0, t.useState)(null),
          [L, S] = (0, t.useState)(() => (k?.shopId === e.id ? k.value : null)),
          [z, I] = (0, t.useState)(!1);
        function w(t) {
          ((k = t ? { shopId: e.id, value: t } : null), S(t));
        }
        async function v() {
          try {
            (b(''), p(await (0, s.request)((0, s.shopPath)(e, '/staff'))));
          } catch (e) {
            b((0, s.message)(e));
          }
        }
        if (
          ((0, t.useEffect)(() => {
            v();
          }, [e.id]),
          'owner' !== e.role)
        )
          return (0, y.jsx)(l.Card, {
            children: (0, y.jsx)(l.Copy, {
              children: (0, d.L)(
                '\u0641\u0642\u0637 \u0635\u0627\u062d\u0628 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u06a9\u0627\u0631\u06a9\u0646\u0627\u0646 \u0631\u0627 \u0645\u062f\u06cc\u0631\u06cc\u062a \u0645\u06cc\u200c\u06a9\u0646\u062f.',
              ),
            }),
          });
        if (x && !h)
          return (0, y.jsxs)(l.Card, {
            style: { gap: 10 },
            children: [
              (0, y.jsx)(l.Copy, { style: { color: c.danger }, children: x }),
              (0, y.jsx)(l.Button, {
                secondary: !0,
                onPress: v,
                children: (0, d.L)('\u062f\u0648\u0628\u0627\u0631\u0647'),
              }),
            ],
          });
        if (!h)
          return (0, y.jsx)(l.Card, {
            children: (0, y.jsx)(l.Copy, {
              style: { color: c.muted },
              children: (0, d.L)(
                '\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc\u2026',
              ),
            }),
          });
        if (!h.team)
          return (0, y.jsxs)(l.Card, {
            testID: 'staff-pro-only',
            style: { alignItems: 'center', gap: 12, paddingVertical: 28 },
            children: [
              (0, y.jsx)(o.default, {
                style: {
                  width: 56,
                  height: 56,
                  borderRadius: 18,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: c.accentSoft,
                },
                children: (0, y.jsx)(r.Icon, {
                  name: 'user',
                  size: 28,
                  color: c.accent,
                }),
              }),
              (0, y.jsx)(l.Copy, {
                style: {
                  fontSize: 18,
                  fontFamily: 'Vazirmatn_700Bold',
                  textAlign: 'center',
                },
                children: (0, d.L)(
                  '\u06a9\u0627\u0631\u06a9\u0646\u0627\u0646 \u0641\u0642\u0637 \u062f\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633',
                ),
              }),
              (0, y.jsx)(l.Copy, {
                style: {
                  fontSize: 13,
                  lineHeight: 22,
                  color: c.muted,
                  textAlign: 'center',
                  maxWidth: 420,
                },
                children: (0, d.L)(
                  '\u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633 \u0628\u0631\u0627\u06cc \u0635\u0627\u062d\u0628 \u0645\u063a\u0627\u0632\u0647 + \u06f3 \u0647\u0645\u06a9\u0627\u0631 \u0627\u0633\u062a: \u0647\u0645\u06a9\u0627\u0631\u0647\u0627 \u0628\u0627 \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0648 \u0631\u0645\u0632 \u062e\u0648\u062f\u0634\u0627\u0646 \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0648 \u0641\u0642\u0637 \u0647\u0645\u0627\u0646 \u0686\u06cc\u0632\u0647\u0627\u06cc\u06cc \u0631\u0627 \u0645\u06cc\u200c\u0628\u06cc\u0646\u0646\u062f \u06a9\u0647 \u062a\u0648 \u0627\u062c\u0627\u0632\u0647 \u0628\u062f\u0647\u06cc.',
                ),
              }),
              (0, y.jsx)(l.Button, {
                testID: 'staff-upgrade',
                onPress: () =>
                  i(
                    (0, d.L)(
                      '\u06a9\u0627\u0631\u06a9\u0646\u0627\u0646 \u062f\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633 \u062f\u0631 \u062f\u0633\u062a\u0631\u0633 \u0627\u0633\u062a.',
                    ),
                  ),
                children: (0, d.L)(
                  '\u062f\u06cc\u062f\u0646 \u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633',
                ),
              }),
            ],
          });
        const P = h.used >= h.limit,
          R = !!h.paused;
        async function A() {
          if (z) return;
          const t = !R;
          (I(!0), b(''), p((e) => e && { ...e, paused: t }));
          try {
            await (0, s.request)((0, s.shopPath)(e, '/staff/pause'), 'PUT', {
              paused: t,
            });
          } catch (e) {
            (p((e) => e && { ...e, paused: !t }), b((0, s.message)(e)));
          } finally {
            I(!1);
          }
        }
        async function F(t) {
          try {
            (await (0, s.request)(
              (0, s.shopPath)(e, '/staff/' + t.userId),
              'DELETE',
            ),
              C(null),
              await v());
          } catch (e) {
            b((0, s.message)(e));
          }
        }
        const W = async (e) => {
          (C(null), e && w(e), await v());
        };
        return (0, y.jsxs)(o.default, {
          style: { gap: 10, width: '100%', maxWidth: 720, alignSelf: 'center' },
          children: [
            (0, y.jsx)(l.Copy, {
              style: { fontSize: 12, color: c.muted, paddingHorizontal: 4 },
              children: (0, d.L)(
                '\u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633 \xb7 {used} \u0627\u0632 {limit} \u0647\u0645\u06a9\u0627\u0631',
                {
                  used: (0, d.localDigits)(h.used),
                  limit: (0, d.localDigits)(h.limit),
                },
              ),
            }),
            (0, y.jsx)(n.default, {
              testID: 'staff-pause',
              accessibilityRole: 'switch',
              accessibilityState: { checked: R, disabled: z },
              disabled: z,
              onPress: () => {
                A();
              },
              children: (0, y.jsxs)(l.Card, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 12,
                  borderWidth: 1,
                  borderColor: R ? c.warningBorder : c.line,
                  backgroundColor: R ? c.warningSoft : void 0,
                },
                children: [
                  (0, y.jsxs)(o.default, {
                    style: { flex: 1, gap: 2 },
                    children: [
                      (0, y.jsx)(l.Copy, {
                        style: {
                          fontSize: 15,
                          fontFamily: 'Vazirmatn_700Bold',
                        },
                        children: (0, d.L)(
                          '\u0642\u0641\u0644 \u0647\u0645\u0647',
                        ),
                      }),
                      (0, y.jsx)(l.Copy, {
                        style: { fontSize: 12, color: R ? c.warning : c.muted },
                        children: R
                          ? (0, d.L)(
                              '\u0647\u0645\u06a9\u0627\u0631\u0627\u0646 \u0627\u0644\u0627\u0646 \u0646\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u0646\u062f \u06a9\u0627\u0631\u06cc \u0628\u06a9\u0646\u0646\u062f\u061b \u06a9\u0633\u06cc \u067e\u0627\u06a9 \u0646\u0634\u062f\u0647 \u0648 \u062a\u06cc\u06a9\u200c\u0647\u0627 \u0633\u0631 \u062c\u0627\u06cc\u0634\u0627\u0646 \u0627\u0633\u062a.',
                            )
                          : (0, d.L)(
                              '\u06cc\u06a9 \u062f\u06a9\u0645\u0647: \u062f\u0633\u062a\u0631\u0633\u06cc \u0647\u0645\u0647 \u0647\u0645\u06a9\u0627\u0631\u0627\u0646 \u0628\u0633\u062a\u0647 \u0634\u0648\u062f',
                            ),
                      }),
                    ],
                  }),
                  (0, y.jsx)(H, { on: R }),
                ],
              }),
            }),
            (0, y.jsx)(u.StaffActivityCard, { shop: e }),
            L && (0, y.jsx)(V, { value: L, onDone: () => w(null) }),
            h.staff.length
              ? (0, y.jsx)(o.default, {
                  testID: 'staff-table',
                  style: { gap: 10 },
                  children: h.staff.map((t, n) => {
                    const s = j === t.userId;
                    return (0, y.jsxs)(
                      l.Card,
                      {
                        testID: 'staff-row-' + n,
                        style: {
                          gap: 10,
                          borderWidth: 1,
                          borderColor: s ? c.accent : c.line,
                        },
                        children: [
                          (0, y.jsxs)(o.default, {
                            style: {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 10,
                            },
                            children: [
                              (0, y.jsx)(T, { name: t.name }),
                              (0, y.jsxs)(o.default, {
                                style: { flex: 1, gap: 1 },
                                children: [
                                  (0, y.jsx)(l.Copy, {
                                    style: {
                                      fontSize: 15,
                                      fontFamily: 'Vazirmatn_700Bold',
                                    },
                                    children: t.name,
                                  }),
                                  (0, y.jsx)(l.Copy, {
                                    testID: 'staff-role-' + n,
                                    style: { fontSize: 12, color: c.muted },
                                    children: s
                                      ? D(t)
                                      : D(t) +
                                        ' \xb7 ' +
                                        (0, f.lastSeenText)(t.lastSeenAt),
                                  }),
                                ],
                              }),
                              (0, y.jsx)(_, {
                                testID: 'staff-edit-' + n,
                                label: s
                                  ? (0, d.L)('\u0628\u0633\u062a\u0646')
                                  : (0, d.L)(
                                      '\u0648\u06cc\u0631\u0627\u06cc\u0634',
                                    ),
                                onPress: () => {
                                  (w(null), C(s ? null : t.userId));
                                },
                              }),
                            ],
                          }),
                          s &&
                            (0, y.jsx)(
                              B,
                              {
                                shop: e,
                                mode: 'edit',
                                member: t,
                                index: n,
                                limit: h.limit,
                                onUpgrade: i,
                                onCancel: () => C(null),
                                onSaved: W,
                                onRemove: () => F(t),
                              },
                              t.userId,
                            ),
                        ],
                      },
                      t.userId,
                    );
                  }),
                })
              : (0, y.jsxs)(l.Card, {
                  style: { alignItems: 'center', gap: 6, paddingVertical: 18 },
                  children: [
                    (0, y.jsx)(r.Icon, {
                      name: 'user',
                      size: 30,
                      color: c.muted,
                    }),
                    (0, y.jsx)(l.Copy, {
                      style: {
                        fontSize: 13,
                        color: c.muted,
                        textAlign: 'center',
                      },
                      children: (0, d.L)(
                        '\u0647\u0646\u0648\u0632 \u0647\u0645\u06a9\u0627\u0631\u06cc \u0646\u062f\u0627\u0631\u06cc. \xab\u0627\u0641\u0632\u0648\u062f\u0646 \u0647\u0645\u06a9\u0627\u0631\xbb \u0631\u0627 \u0628\u0632\u0646\u061b \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0648 \u0631\u0645\u0632 \u0631\u0627 \u062e\u0648\u062f\u0645\u0627\u0646 \u0645\u06cc\u200c\u0633\u0627\u0632\u06cc\u0645.',
                      ),
                    }),
                  ],
                }),
            !!x &&
              (0, y.jsx)(l.Copy, {
                style: { color: c.danger, paddingHorizontal: 4 },
                children: x,
              }),
            'add' === j
              ? (0, y.jsxs)(l.Card, {
                  testID: 'staff-add-card',
                  style: { gap: 10, borderWidth: 1, borderColor: c.accent },
                  children: [
                    (0, y.jsx)(l.Copy, {
                      style: { fontSize: 16, fontFamily: 'Vazirmatn_700Bold' },
                      children: (0, d.L)(
                        '\u0647\u0645\u06a9\u0627\u0631 \u062a\u0627\u0632\u0647',
                      ),
                    }),
                    (0, y.jsx)(B, {
                      shop: e,
                      mode: 'add',
                      limit: h.limit,
                      onUpgrade: i,
                      onCancel: () => C(null),
                      onSaved: W,
                    }),
                  ],
                })
              : (0, y.jsxs)(n.default, {
                  testID: 'staff-add',
                  accessibilityRole: 'button',
                  disabled: P,
                  onPress: () => {
                    (w(null), C('add'));
                  },
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    height: 50,
                    borderRadius: 16,
                    backgroundColor: P ? c.soft : c.accent,
                    opacity: P ? 0.6 : 1,
                  },
                  children: [
                    (0, y.jsx)(r.Icon, {
                      name: 'plus',
                      size: 18,
                      color: P ? c.muted : c.onAccent,
                    }),
                    (0, y.jsx)(l.Copy, {
                      style: {
                        fontSize: 15,
                        fontFamily: 'Vazirmatn_700Bold',
                        color: P ? c.muted : c.onAccent,
                      },
                      children: (0, d.L)(
                        '\u0627\u0641\u0632\u0648\u062f\u0646 \u0647\u0645\u06a9\u0627\u0631',
                      ),
                    }),
                  ],
                }),
            P &&
              'add' !== j &&
              (0, y.jsx)(l.Copy, {
                style: { fontSize: 12, color: c.muted, paddingHorizontal: 4 },
                children: (0, d.L)(
                  '\u0628\u0647 \u0633\u0642\u0641 \u06a9\u0627\u0631\u06a9\u0646\u0627\u0646 \u0631\u0633\u06cc\u062f\u06cc. \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631\u0645\u0646\u062f \u062a\u0627\u0632\u0647\u060c \u06cc\u06a9\u06cc \u0631\u0627 \u062d\u0630\u0641 \u06a9\u0646.',
                ),
              }),
            (0, y.jsx)(l.Copy, {
              style: {
                fontSize: 12,
                lineHeight: 20,
                color: c.muted,
                paddingHorizontal: 4,
              },
              children: (0, d.L)(
                '\u06a9\u0627\u0631\u0645\u0646\u062f \u0627\u0634\u062a\u0631\u0627\u06a9 \u062c\u062f\u0627 \u0646\u0645\u06cc\u200c\u062e\u0648\u0627\u0647\u062f. \u062f\u0631 \u0635\u0641\u062d\u0647\u0654 \u0648\u0631\u0648\u062f \xab\u0648\u0631\u0648\u062f \u06a9\u0627\u0631\u0645\u0646\u062f\xbb \u0631\u0627 \u0645\u06cc\u200c\u0632\u0646\u062f \u0648 \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0648 \u0631\u0645\u0632\u06cc \u0631\u0627 \u06a9\u0647 \u062a\u0648 \u062f\u0627\u062f\u06cc \u0648\u0627\u0631\u062f \u0645\u06cc\u200c\u06a9\u0646\u062f.',
              ),
            }),
          ],
        });
      }));
    var t = _r(_d[0]);
    _r(_d[1]);
    var n = e(_r(_d[2])),
      o = e(_r(_d[3])),
      s = _r(_d[4]),
      l = _r(_d[5]),
      r = _r(_d[6]),
      a = _r(_d[7]),
      i = _r(_d[8]),
      d = _r(_d[9]),
      c = _r(_d[10]),
      u = _r(_d[11]),
      f = _r(_d[12]),
      y = _r(_d[13]);
    const h = [
        {
          key: 'sellPrice',
          label: '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
        },
        {
          key: 'buyPrice',
          label: '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
        },
        {
          key: 'profit',
          label: '\u0633\u0648\u062f',
          hint: '\u0647\u0631 \u062f\u0648 \u0642\u06cc\u0645\u062a \u0631\u0627 \u0647\u0645 \u0631\u0648\u0634\u0646 \u0645\u06cc\u200c\u06a9\u0646\u062f',
        },
        {
          key: 'reports',
          label:
            '\u06af\u0632\u0627\u0631\u0634 \u0641\u0631\u0648\u0634 \u0648 \u0646\u0645\u0648\u062f\u0627\u0631\u0647\u0627',
        },
        {
          key: 'ledger',
          label:
            '\u062d\u0633\u0627\u0628\u200c\u0647\u0627\u060c \u0628\u062f\u0647\u06cc\u200c\u0647\u0627 \u0648 \u0686\u06a9\u200c\u0647\u0627',
          hint: '\u0647\u0631 \u062f\u0648 \u0642\u06cc\u0645\u062a \u0631\u0627 \u0647\u0645 \u0631\u0648\u0634\u0646 \u0645\u06cc\u200c\u06a9\u0646\u062f',
        },
      ],
      p = [
        { key: 'sell', label: '\u062b\u0628\u062a \u0641\u0631\u0648\u0634' },
        {
          key: 'price',
          label:
            '\u062a\u063a\u06cc\u06cc\u0631 \u0642\u06cc\u0645\u062a \u0647\u0646\u06af\u0627\u0645 \u0641\u0631\u0648\u0634',
        },
        {
          key: 'receive',
          label:
            '\u062b\u0628\u062a \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
        },
        {
          key: 'catalog',
          label:
            '\u0633\u0627\u062e\u062a \u0648 \u0648\u06cc\u0631\u0627\u06cc\u0634 \u06a9\u0627\u0644\u0627 \u0648 \u0642\u06cc\u0645\u062a',
        },
        {
          key: 'count',
          label:
            '\u0634\u0645\u0627\u0631\u0634 \u0645\u0648\u062c\u0648\u062f\u06cc',
        },
        {
          key: 'invoice',
          label:
            '\u0635\u062f\u0648\u0631 \u0648 \u0686\u0627\u067e \u0641\u0627\u06a9\u062a\u0648\u0631',
        },
        {
          key: 'discount',
          label: '\u062a\u062e\u0641\u06cc\u0641 \u062f\u0627\u062f\u0646',
        },
        {
          key: 'editHistory',
          label:
            '\u0627\u0635\u0644\u0627\u062d \u062a\u0627\u0631\u06cc\u062e\u0686\u0647',
        },
      ],
      x = [
        {
          key: 'sellPrice',
          label: '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
        },
        {
          key: 'buyPrice',
          label: '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
        },
        { key: 'profit', label: '\u0633\u0648\u062f' },
        {
          key: 'reports',
          label: '\u06af\u0632\u0627\u0631\u0634\u200c\u0647\u0627',
        },
        {
          key: 'ledger',
          label:
            '\u062d\u0633\u0627\u0628\u200c\u0647\u0627 \u0648 \u0686\u06a9\u200c\u0647\u0627',
        },
      ],
      b = [
        { key: 'sell', label: '\u0641\u0631\u0648\u0634' },
        {
          key: 'price',
          label:
            '\u062a\u063a\u06cc\u06cc\u0631 \u0642\u06cc\u0645\u062a \u062f\u0631 \u0641\u0631\u0648\u0634',
        },
        {
          key: 'receive',
          label: '\u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627',
        },
        {
          key: 'catalog',
          label: '\u06a9\u0627\u0644\u0627 \u0648 \u0642\u06cc\u0645\u062a',
        },
        { key: 'count', label: '\u0634\u0645\u0627\u0631\u0634' },
        { key: 'invoice', label: '\u0641\u0627\u06a9\u062a\u0648\u0631' },
        { key: 'discount', label: '\u062a\u062e\u0641\u06cc\u0641' },
        {
          key: 'editHistory',
          label:
            '\u0627\u0635\u0644\u0627\u062d \u062a\u0627\u0631\u06cc\u062e\u0686\u0647',
        },
      ],
      j = ['home', 'inventory', 'add', 'data', 'profile'],
      C = {
        home: '\u062f\u0627\u0634\u0628\u0648\u0631\u062f',
        inventory: '\u0645\u0648\u062c\u0648\u062f\u06cc',
        add: '\u0627\u0641\u0632\u0648\u062f\u0646',
        data: '\u062f\u0627\u062f\u0647\u200c\u0647\u0627',
        profile: '\u067e\u0631\u0648\u0641\u0627\u06cc\u0644',
      },
      L = (0, f.presetAccess)('seller');
    function S(e) {
      return e.access
        ? {
            ...e.access,
            see: { ...e.access.see },
            do: {
              ...e.access.do,
              invoice: e.access.do.invoice ?? e.access.do.sell,
              price:
                e.access.do.price ??
                !(!e.access.do.sell || !e.access.see.sellPrice),
            },
          }
        : 'manager' === e.role
          ? (0, f.presetAccess)('manager')
          : {
              see: {
                sellPrice: !0,
                buyPrice: !1,
                profit: !1,
                reports: !1,
                ledger: !1,
              },
              do: {
                sell: 'sell' === e.role,
                receive: 'receive' === e.role,
                catalog: !1,
                invoice: 'sell' === e.role,
                discount: !1,
                editHistory: !1,
              },
            };
    }
    function z(e, t, n, o) {
      const s = { ...e, see: { ...e.see }, do: { ...e.do } };
      return (
        (s[t][n] = o),
        'see' !== t ||
          ('profit' !== n && 'ledger' !== n) ||
          !o ||
          ((s.see.buyPrice = !0), (s.see.sellPrice = !0)),
        'see' !== t ||
          ('buyPrice' !== n && 'sellPrice' !== n) ||
          o ||
          ((s.see.profit = !1), (s.see.ledger = !1)),
        'do' === t &&
          'discount' === n &&
          o &&
          !s.do.discountMax &&
          (s.do.discountMax = f.DEFAULT_DISCOUNT_MAX),
        (s.see.sellPrice && s.do.sell) || (s.do.price = !1),
        o || delete s.full,
        s
      );
    }
    function I(e, t = 'abcdefghjkmnpqrstuvwxyz23456789') {
      const n = new Uint32Array(e);
      return (
        globalThis.crypto?.getRandomValues?.(n),
        Array.from(
          n,
          (e, n) => t[(e || Math.floor(1e9 * Math.random()) + n) % t.length],
        ).join('')
      );
    }
    const w = () => I(5) + '-' + I(5),
      v = (e) => {
        const t = e
          .toLowerCase()
          .replace(/[^a-z0-9]/g, '')
          .slice(0, 10);
        return (t.length >= 3 ? t : 'staff') + '-' + I(3, '23456789');
      };
    const D = (e) =>
      e.access ? (0, f.roleTitle)(e.access) : (0, c.roleLabel)(e.role);
    let k = null;
    function P() {
      return 'undefined' != typeof window
        ? window.location.origin
        : 'https://myanbari.ir';
    }
    function T({ name: e }) {
      const { colors: t } = (0, a.useTheme)();
      return (0, y.jsx)(o.default, {
        style: {
          width: 36,
          height: 36,
          borderRadius: 11,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: t.accentSoft,
        },
        children: (0, y.jsx)(l.Copy, {
          style: {
            fontSize: 15,
            fontFamily: 'Vazirmatn_700Bold',
            color: t.accent,
          },
          children: Array.from(e.trim())[0] || '?',
        }),
      });
    }
    function _({ label: e, on: t, onPress: o, testID: s, tone: r }) {
      const { colors: i } = (0, a.useTheme)(),
        d = 'warn' === r;
      return (0, y.jsx)(n.default, {
        testID: s,
        disabled: !o,
        accessibilityRole: o ? 'button' : void 0,
        accessibilityState: o ? { selected: !!t } : void 0,
        onPress: o,
        style: {
          paddingHorizontal: 12,
          minHeight: 32,
          justifyContent: 'center',
          borderRadius: 999,
          borderWidth: 1,
          borderColor: d ? i.warningBorder : t ? i.accent : i.line,
          backgroundColor: d ? i.warningSoft : t ? i.accent : i.soft,
        },
        children: (0, y.jsx)(l.Copy, {
          style: {
            fontSize: 12,
            fontFamily: t ? 'Vazirmatn_700Bold' : void 0,
            color: d ? i.warning : t ? i.onAccent : i.text,
          },
          children: e,
        }),
      });
    }
    function R({
      id: e,
      name: t,
      line: s,
      on: r,
      onPress: i,
      tag: d,
      summary: c,
    }) {
      const { colors: u } = (0, a.useTheme)();
      return (0, y.jsxs)(n.default, {
        testID: 'staff-role-' + e,
        accessibilityRole: 'radio',
        accessibilityState: { checked: r },
        accessibilityLabel: t,
        onPress: i,
        style: ({ pressed: e }) => ({
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 12,
          minHeight: 64,
          paddingHorizontal: 14,
          paddingVertical: 10,
          borderRadius: 16,
          borderWidth: r ? 2 : 1,
          borderColor: r ? u.accent : u.line,
          backgroundColor: r ? u.accentSoft : u.surface,
          opacity: e ? 0.85 : 1,
        }),
        children: [
          (0, y.jsx)(o.default, {
            style: {
              width: 22,
              height: 22,
              borderRadius: 11,
              borderWidth: 2,
              borderColor: r ? u.accent : u.muted,
              alignItems: 'center',
              justifyContent: 'center',
            },
            children:
              r &&
              (0, y.jsx)(o.default, {
                style: {
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: u.accent,
                },
              }),
          }),
          (0, y.jsxs)(o.default, {
            style: { flex: 1, gap: 2 },
            children: [
              (0, y.jsxs)(o.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: 6,
                },
                children: [
                  (0, y.jsx)(l.Copy, {
                    style: { fontSize: 15, fontFamily: 'Vazirmatn_700Bold' },
                    children: t,
                  }),
                  !!d &&
                    (0, y.jsx)(o.default, {
                      testID: 'staff-role-changed-' + e,
                      style: {
                        paddingHorizontal: 8,
                        borderRadius: 999,
                        borderWidth: 1,
                        borderColor: u.warningBorder,
                        backgroundColor: u.warningSoft,
                      },
                      children: (0, y.jsx)(l.Copy, {
                        style: {
                          fontSize: 11,
                          lineHeight: 18,
                          color: u.warning,
                        },
                        children: d,
                      }),
                    }),
                ],
              }),
              (0, y.jsx)(l.Copy, {
                style: { fontSize: 12, lineHeight: 19, color: u.muted },
                children: s,
              }),
              !!c?.length &&
                (0, y.jsx)(o.default, {
                  testID: 'staff-role-summary-' + e,
                  style: {
                    gap: 2,
                    marginTop: 6,
                    paddingTop: 6,
                    borderTopWidth: 1,
                    borderColor: u.accent + '55',
                  },
                  children: c.map((e) =>
                    (0, y.jsxs)(
                      l.Copy,
                      {
                        style: { fontSize: 12, lineHeight: 20 },
                        children: [
                          (0, y.jsx)(l.Copy, {
                            style: {
                              fontSize: 12,
                              lineHeight: 20,
                              fontFamily: 'Vazirmatn_700Bold',
                              color:
                                'yes' === e.tone
                                  ? u.accent
                                  : 'no' === e.tone
                                    ? u.danger
                                    : u.text,
                            },
                            children: e.head,
                          }),
                          ' ' + e.text,
                        ],
                      },
                      e.head,
                    ),
                  ),
                }),
            ],
          }),
        ],
      });
    }
    function H({ on: e }) {
      const { colors: t } = (0, a.useTheme)();
      return (0, y.jsx)(o.default, {
        style: {
          width: 40,
          height: 24,
          borderRadius: 12,
          padding: 3,
          backgroundColor: e ? t.accent : t.soft,
          borderWidth: 1,
          borderColor: e ? t.accent : t.line,
          alignItems: e ? 'flex-start' : 'flex-end',
        },
        children: (0, y.jsx)(o.default, {
          style: {
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: e ? '#fff' : t.muted,
          },
        }),
      });
    }
    function A({
      on: e,
      label: t,
      hint: s,
      onPress: r,
      testID: i,
      side: c,
      changed: u,
      disabled: f,
    }) {
      const { colors: h } = (0, a.useTheme)();
      return (0, y.jsxs)(o.default, {
        style: {
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: 8,
          paddingVertical: 8,
          borderTopWidth: 1,
          borderColor: h.line,
          ...(u
            ? {
                backgroundColor: h.warningSoft,
                marginHorizontal: -6,
                paddingHorizontal: 6,
                borderRadius: 8,
              }
            : {}),
        },
        children: [
          (0, y.jsxs)(n.default, {
            testID: i,
            accessibilityRole: 'switch',
            accessibilityState: { checked: e, disabled: !!f },
            disabled: f,
            onPress: r,
            style: {
              flex: 1,
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 8,
              opacity: f ? 0.45 : 1,
            },
            children: [
              (0, y.jsxs)(o.default, {
                style: { flex: 1 },
                children: [
                  (0, y.jsx)(l.Copy, {
                    style: { fontSize: 14 },
                    children: (0, d.L)(t),
                  }),
                  !!s &&
                    (0, y.jsx)(l.Copy, {
                      style: { fontSize: 11, color: h.muted },
                      children: (0, d.L)(s),
                    }),
                  !!u &&
                    (0, y.jsx)(l.Copy, {
                      testID: i ? i + '-changed' : void 0,
                      style: { fontSize: 11, color: h.warning },
                      children: u,
                    }),
                ],
              }),
              c ? null : (0, y.jsx)(H, { on: e }),
            ],
          }),
          c,
          c
            ? (0, y.jsx)(n.default, {
                accessibilityElementsHidden: !0,
                importantForAccessibility: 'no',
                onPress: r,
                children: (0, y.jsx)(H, { on: e }),
              })
            : null,
        ],
      });
    }
    function B({
      shop: e,
      mode: i,
      member: c,
      index: u = 0,
      limit: I = 3,
      onUpgrade: D,
      onCancel: k,
      onSaved: P,
      onRemove: T,
    }) {
      const { colors: H } = (0, a.useTheme)(),
        B = 'add' === i || !!c?.staffAccount,
        [V, F] = (0, t.useState)(c?.name || ''),
        [W, E] = (0, t.useState)(c?.username || v(e.name)),
        [M, U] = (0, t.useState)('add' === i ? w() : ''),
        [N, O] = (0, t.useState)(c ? S(c) : L),
        [q, X] = (0, t.useState)(''),
        [$, G] = (0, t.useState)(null),
        [J, K] = (0, t.useState)(() => (0, f.nearPreset)(N)?.id ?? null),
        [Q, Y] = (0, t.useState)(() => null === (0, f.nearPreset)(N)),
        [Z, ee] = (0, t.useState)(
          (0, d.localDigits)(N.do.discountMax ?? f.DEFAULT_DISCOUNT_MAX),
        ),
        [te, ne] = (0, t.useState)(!1),
        [oe, se] = (0, t.useState)(!1);
      (0, t.useEffect)(() => {
        if ('add' !== i) return;
        const t = W.trim().toLowerCase();
        if (t.length < 3) return void G(null);
        const n = setTimeout(() => {
          (0, s.request)(
            (0, s.shopPath)(
              e,
              '/staff-username?username=' + encodeURIComponent(t),
            ),
          )
            .then((e) => G(e.valid && e.available))
            .catch(() => G(null));
        }, 350);
        return () => clearTimeout(n);
      }, [W, i]);
      const le = J ? (0, d.L)(f.ROLE_PRESETS.find((e) => e.id === J).name) : '',
        re = (0, f.parsePercent)(Z),
        ae = {
          ...N,
          do: {
            ...N.do,
            ...(N.do.discount && null !== re ? { discountMax: re } : {}),
          },
        },
        ie = J ? (0, f.tickDiff)(ae, J) : [],
        de =
          !!J &&
          (ie.length > 0 ||
            (!0 === N.full) != (!0 === (0, f.presetAccess)(J).full));
      function ce(e) {
        const t = (0, f.presetAccess)(e);
        (K(e),
          O(t),
          ee((0, d.localDigits)(t.do.discountMax ?? f.DEFAULT_DISCOUNT_MAX)));
      }
      function ue(e, t) {
        O((n) => {
          const o = z(n, e, t, !n[e][t]);
          return (
            'full' !== J || (0, f.tickDiff)(o, 'full').length || (o.full = !0),
            o
          );
        });
      }
      const fe = (0, f.staffTabs)('staff', N) ?? [
          'home',
          'inventory',
          'add',
          'data',
          'profile',
        ],
        ye = x.filter((e) => N.see[e.key]).map((e) => (0, d.L)(e.label)),
        he = b
          .filter((e) =>
            'invoice' === e.key
              ? (N.do.invoice ?? N.do.sell)
              : 'count' === e.key
                ? N.do.count || N.do.catalog
                : N.do[e.key],
          )
          .map((e) => (0, d.L)(e.label)),
        me = [
          ye.length
            ? {
                head: (0, d.L)('\u0645\u06cc\u200c\u0628\u06cc\u0646\u062f:'),
                text: ye.join((0, d.L)('\u060c ')),
                tone: 'yes',
              }
            : {
                head: (0, d.L)(
                  '\u0646\u0645\u06cc\u200c\u0628\u06cc\u0646\u062f:',
                ),
                text: (0, d.L)(
                  '\u0647\u06cc\u0686 \u0642\u06cc\u0645\u062a\u060c \u0633\u0648\u062f \u06cc\u0627 \u06af\u0632\u0627\u0631\u0634\u06cc',
                ),
                tone: 'no',
              },
          he.length
            ? {
                head: (0, d.L)(
                  '\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f:',
                ),
                text: he.join((0, d.L)('\u060c ')),
                tone: 'yes',
              }
            : {
                head: (0, d.L)(
                  '\u0646\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f:',
                ),
                text: (0, d.L)(
                  '\u0641\u0631\u0648\u0634\u060c \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627\u060c \u062a\u063a\u06cc\u06cc\u0631 \u06a9\u0627\u0644\u0627 \u0648 \u0642\u06cc\u0645\u062a',
                ),
                tone: 'no',
              },
          {
            head: (0, d.L)('\u0635\u0641\u062d\u0647\u200c\u0647\u0627:'),
            text: fe.map((e) => (0, d.L)(C[e])).join(' \xb7 '),
          },
        ];
      const pe = (e, t, n, o, s, l) => {
          const r = !!N[e][t],
            a = ie.includes(e + '.' + t)
              ? 'discount' === t && r && (0, f.presetAccess)(J).do.discount
                ? (0, d.L)(
                    '\u062a\u063a\u06cc\u06cc\u0631 \u062a\u0648\u061b \u0633\u0642\u0641 \u062a\u062e\u0641\u06cc\u0641 \u0642\u0627\u0644\u0628 {role} \u0641\u0631\u0642 \u062f\u0627\u0631\u062f',
                    { role: le },
                  )
                : r
                  ? (0, d.L)(
                      '\u062a\u063a\u06cc\u06cc\u0631 \u062a\u0648\u061b \u062f\u0631 \u0642\u0627\u0644\u0628 {role} \u062e\u0627\u0645\u0648\u0634 \u0627\u0633\u062a',
                      { role: le },
                    )
                  : (0, d.L)(
                      '\u062a\u063a\u06cc\u06cc\u0631 \u062a\u0648\u061b \u062f\u0631 \u0642\u0627\u0644\u0628 {role} \u0631\u0648\u0634\u0646 \u0627\u0633\u062a',
                      { role: le },
                    )
              : void 0;
          return (0, y.jsx)(
            A,
            {
              testID: `staff-${e}-${t}`,
              on: r,
              label: n,
              hint: o,
              side: s,
              changed: a,
              disabled: l,
              onPress: () => ue(e, t),
            },
            t,
          );
        },
        ge = (e, t) =>
          (0, y.jsxs)(o.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 6,
              marginTop: 6,
              marginBottom: 2,
            },
            children: [
              (0, y.jsx)(r.Icon, { name: t, size: 16, color: H.accent }),
              (0, y.jsx)(l.Copy, {
                style: { fontSize: 13, fontFamily: 'Vazirmatn_600SemiBold' },
                children: (0, d.L)(e),
              }),
            ],
          });
      return (0, y.jsxs)(o.default, {
        testID: 'staff-form',
        style: { gap: 10 },
        children: [
          (0, y.jsxs)(o.default, {
            style: { gap: 6 },
            children: [
              (0, y.jsx)(l.Copy, {
                style: { fontSize: 12, color: H.muted },
                children: (0, d.L)(
                  '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0645\u0646\u062f',
                ),
              }),
              (0, y.jsx)(l.Input, {
                testID: 'staff-name',
                editable: B,
                value: V,
                onChangeText: F,
                placeholder: (0, d.L)(
                  '\u0645\u062b\u0644\u0627\u064b \u0631\u0636\u0627',
                ),
                maxLength: 80,
              }),
            ],
          }),
          'add' === i &&
            (0, y.jsxs)(o.default, {
              style: { gap: 6 },
              children: [
                (0, y.jsx)(l.Copy, {
                  style: { fontSize: 12, color: H.muted },
                  children: (0, d.L)(
                    '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0628\u0631\u0627\u06cc \u0648\u0631\u0648\u062f',
                  ),
                }),
                (0, y.jsx)(l.Input, {
                  testID: 'staff-username',
                  ltr: !0,
                  autoCapitalize: 'none',
                  autoCorrect: !1,
                  value: W,
                  onChangeText: (e) => E(e.toLowerCase()),
                  maxLength: 32,
                }),
                null !== $ &&
                  (0, y.jsx)(l.Copy, {
                    style: { fontSize: 11, color: $ ? H.accent : H.danger },
                    children: $
                      ? (0, d.L)(
                          '\u0627\u06cc\u0646 \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0622\u0632\u0627\u062f \u0627\u0633\u062a \u2713',
                        )
                      : (0, d.L)(
                          '\u0627\u06cc\u0646 \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06af\u0631\u0641\u062a\u0647 \u0634\u062f\u0647 \u06cc\u0627 \u062f\u0631\u0633\u062a \u0646\u06cc\u0633\u062a',
                        ),
                  }),
              ],
            }),
          B &&
            (0, y.jsxs)(o.default, {
              style: { gap: 6 },
              children: [
                (0, y.jsx)(l.Copy, {
                  style: { fontSize: 12, color: H.muted },
                  children:
                    'add' === i
                      ? (0, d.L)('\u0631\u0645\u0632 \u0639\u0628\u0648\u0631')
                      : (0, d.L)(
                          '\u0631\u0645\u0632 \u062a\u0627\u0632\u0647 (\u0627\u06af\u0631 \u0631\u0645\u0632 \u0631\u0627 \u0641\u0631\u0627\u0645\u0648\u0634 \u06a9\u0631\u062f\u0647)',
                        ),
                }),
                (0, y.jsxs)(o.default, {
                  style: { flexDirection: 'row-reverse', gap: 8 },
                  children: [
                    (0, y.jsx)(o.default, {
                      style: { flex: 1 },
                      children: (0, y.jsx)(l.Input, {
                        testID: 'staff-password',
                        ltr: !0,
                        autoCapitalize: 'none',
                        autoCorrect: !1,
                        value: M,
                        onChangeText: U,
                        placeholder:
                          'edit' === i
                            ? (0, d.L)(
                                '\u062e\u0627\u0644\u06cc \u0628\u0645\u0627\u0646\u062f = \u0647\u0645\u0627\u0646 \u0631\u0645\u0632 \u0642\u0628\u0644\u06cc',
                              )
                            : void 0,
                        maxLength: 64,
                      }),
                    }),
                    (0, y.jsx)(n.default, {
                      testID: 'staff-password-new',
                      accessibilityRole: 'button',
                      onPress: () => U(w()),
                      style: {
                        paddingHorizontal: 12,
                        height: 48,
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: H.soft,
                      },
                      children: (0, y.jsx)(l.Copy, {
                        style: { fontSize: 12 },
                        children: (0, d.L)(
                          '\u0631\u0645\u0632 \u062a\u0627\u0632\u0647 \u0628\u0633\u0627\u0632',
                        ),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          (0, y.jsxs)(o.default, {
            style: { gap: 8 },
            children: [
              (0, y.jsx)(l.Copy, {
                style: { fontSize: 12, color: H.muted },
                children: (0, d.L)(
                  '\u06a9\u0627\u0631\u0634 \u0686\u06cc\u0633\u062a\u061f',
                ),
              }),
              f.ROLE_PRESETS.filter((e) => e.card).map((e) => {
                const t = J === e.id;
                return (0, y.jsx)(
                  R,
                  {
                    id: e.id,
                    name: (0, d.L)(e.name),
                    line:
                      t && de
                        ? (0, d.L)(
                            '\u0642\u0627\u0644\u0628 {role}\u060c \u0628\u0627 \u062a\u063a\u06cc\u06cc\u0631 \u062e\u0648\u062f\u062a',
                            { role: (0, d.L)(e.name) },
                          )
                        : (0, d.L)(e.line),
                    on: t,
                    tag:
                      t && de
                        ? (0, d.L)(
                            '\u062a\u063a\u06cc\u06cc\u0631 \u062f\u0627\u062f\u0647\u200c\u0634\u062f\u0647',
                          )
                        : void 0,
                    summary: t && !0 !== N.full ? me : void 0,
                    onPress: () => ce(e.id),
                  },
                  e.id,
                );
              }),
              !0 === N.full &&
                (0, y.jsx)(l.Copy, {
                  testID: 'staff-full-hint',
                  style: { fontSize: 11, lineHeight: 19, color: H.muted },
                  children: (0, d.L)(f.FULL_ACCESS_HINT),
                }),
            ],
          }),
          !Q &&
            (0, y.jsxs)(n.default, {
              testID: 'staff-customize',
              accessibilityRole: 'button',
              onPress: () => Y(!0),
              style: ({ pressed: e }) => ({
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 10,
                minHeight: 60,
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 16,
                borderWidth: 1.5,
                borderColor: H.accent,
                backgroundColor: H.surface,
                opacity: e ? 0.85 : 1,
              }),
              children: [
                (0, y.jsx)(o.default, {
                  style: {
                    width: 34,
                    height: 34,
                    borderRadius: 11,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: H.accentSoft,
                  },
                  children: (0, y.jsx)(r.Icon, {
                    name: 'filter',
                    size: 18,
                    color: H.accent,
                  }),
                }),
                (0, y.jsxs)(o.default, {
                  style: { flex: 1, gap: 1 },
                  children: [
                    (0, y.jsx)(l.Copy, {
                      style: {
                        fontSize: 14,
                        fontFamily: 'Vazirmatn_700Bold',
                        color: H.accent,
                      },
                      children: J
                        ? (0, d.L)(
                            '\u0634\u062e\u0635\u06cc\u200c\u0633\u0627\u0632\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0647\u0627\u06cc {role}',
                            { role: le },
                          )
                        : (0, d.L)(
                            '\u0634\u062e\u0635\u06cc\u200c\u0633\u0627\u0632\u06cc \u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0647\u0627',
                          ),
                    }),
                    (0, y.jsx)(l.Copy, {
                      style: { fontSize: 12, lineHeight: 19, color: H.muted },
                      children: (0, d.L)(
                        '\u062f\u0642\u06cc\u0642 \u0628\u0628\u06cc\u0646 \u0686\u0647 \u0645\u06cc\u200c\u0628\u06cc\u0646\u062f \u0648 \u0647\u0631 \u062a\u06cc\u06a9 \u0631\u0627 \u0639\u0648\u0636 \u06a9\u0646',
                      ),
                    }),
                  ],
                }),
                (0, y.jsx)(r.Icon, {
                  name: 'chevron',
                  size: 18,
                  color: H.accent,
                }),
              ],
            }),
          Q &&
            (0, y.jsxs)(o.default, {
              testID: 'staff-ticks',
              style: {
                paddingHorizontal: 14,
                paddingVertical: 10,
                borderRadius: 16,
                borderWidth: 1.5,
                borderColor: H.accent,
                backgroundColor: H.surface,
              },
              children: [
                (0, y.jsxs)(o.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    gap: 8,
                  },
                  children: [
                    (0, y.jsx)(l.Copy, {
                      style: {
                        flex: 1,
                        fontSize: 14,
                        fontFamily: 'Vazirmatn_700Bold',
                        color: H.accent,
                      },
                      children:
                        'edit' === i && V.trim()
                          ? (0, d.L)(
                              '\u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0647\u0627\u06cc {name}',
                              { name: V.trim() },
                            )
                          : J
                            ? (0, d.L)(
                                '\u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0647\u0627\u06cc {name}',
                                { name: le },
                              )
                            : (0, d.L)(
                                '\u062f\u0633\u062a\u0631\u0633\u06cc\u200c\u0647\u0627',
                              ),
                    }),
                    (0, y.jsx)(n.default, {
                      testID: 'staff-customize-close',
                      accessibilityRole: 'button',
                      hitSlop: 8,
                      onPress: () => Y(!1),
                      children: (0, y.jsx)(l.Copy, {
                        style: { fontSize: 12, color: H.muted },
                        children: (0, d.L)('\u0628\u0633\u062a\u0646'),
                      }),
                    }),
                  ],
                }),
                ge(
                  '\u0635\u0641\u062d\u0647\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0631 \u0628\u0631\u0646\u0627\u0645\u0647 \u0645\u06cc\u200c\u0628\u06cc\u0646\u062f',
                  'data',
                ),
                (0, y.jsx)(o.default, {
                  testID: 'staff-pages',
                  style: {
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginBottom: 4,
                  },
                  children: j.map((e) => {
                    const t = fe.includes(e);
                    return (0, y.jsx)(
                      o.default,
                      {
                        testID: 'staff-page-' + e,
                        accessibilityState: { selected: t },
                        style: {
                          paddingHorizontal: 10,
                          borderRadius: 999,
                          borderWidth: 1,
                          borderColor: t ? H.accent : H.line,
                          backgroundColor: t ? H.accentSoft : H.soft,
                        },
                        children: (0, y.jsx)(l.Copy, {
                          style: {
                            fontSize: 12,
                            lineHeight: 22,
                            fontFamily: t ? 'Vazirmatn_600SemiBold' : void 0,
                            color: t ? H.accent : H.muted,
                            textDecorationLine: t ? 'none' : 'line-through',
                          },
                          children: (0, d.L)(C[e]),
                        }),
                      },
                      e,
                    );
                  }),
                }),
                ge(
                  '\u0686\u0647 \u0686\u06cc\u0632\u0647\u0627\u06cc\u06cc \u0631\u0627 \u0628\u0628\u06cc\u0646\u062f',
                  'data',
                ),
                h.map((e) => pe('see', e.key, e.label, e.hint)),
                ge(
                  '\u0686\u0647 \u06a9\u0627\u0631\u0647\u0627\u06cc\u06cc \u0628\u06a9\u0646\u062f',
                  'bolt',
                ),
                p.map((e) =>
                  'price' === e.key
                    ? N.see.sellPrice && N.do.sell
                      ? pe(
                          'do',
                          'price',
                          e.label,
                          '\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f \u0642\u06cc\u0645\u062a \u0647\u0645\u06a9\u0627\u0631\u060c \u0639\u0645\u062f\u0647 \u0648 \u2026 \u0631\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u06a9\u0646\u062f \u06cc\u0627 \u0642\u06cc\u0645\u062a \u0628\u0646\u0648\u06cc\u0633\u062f',
                        )
                      : pe(
                          'do',
                          'price',
                          e.label,
                          '\u0627\u0648\u0644 \xab\u062b\u0628\u062a \u0641\u0631\u0648\u0634\xbb \u0648 \u062f\u06cc\u062f\u0646 \xab\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634\xbb \u0631\u0627 \u0631\u0648\u0634\u0646 \u06a9\u0646',
                          void 0,
                          !0,
                        )
                    : 'invoice' === e.key
                      ? pe(
                          'do',
                          'invoice',
                          e.label,
                          void 0,
                          N.do.invoice
                            ? void 0
                            : (0, y.jsx)(_, {
                                tone: 'warn',
                                label: (0, d.L)(
                                  '\u0641\u0642\u0637 \u0635\u0627\u062d\u0628 \u0645\u063a\u0627\u0632\u0647',
                                ),
                              }),
                        )
                      : 'discount' === e.key
                        ? pe(
                            'do',
                            'discount',
                            e.label,
                            void 0,
                            (0, y.jsxs)(o.default, {
                              style: {
                                flexDirection: 'row-reverse',
                                alignItems: 'center',
                                gap: 4,
                                opacity: N.do.discount ? 1 : 0.5,
                              },
                              children: [
                                (0, y.jsx)(l.Copy, {
                                  style: { fontSize: 12, color: H.muted },
                                  children: (0, d.L)('\u062a\u0627'),
                                }),
                                (0, y.jsx)(l.Input, {
                                  testID: 'staff-discount-max',
                                  ltr: !0,
                                  editable: !!N.do.discount,
                                  value: Z,
                                  onChangeText: ee,
                                  keyboardType: 'number-pad',
                                  maxLength: 3,
                                  style: {
                                    width: 52,
                                    height: 36,
                                    paddingVertical: 0,
                                    textAlign: 'center',
                                  },
                                }),
                                (0, y.jsx)(l.Copy, {
                                  style: { fontSize: 12, color: H.muted },
                                  children: '\u066a',
                                }),
                              ],
                            }),
                          )
                        : pe('do', e.key, e.label),
                ),
                (0, y.jsx)(o.default, {
                  style: { marginTop: 8 },
                  children: (0, y.jsx)(l.Input, {
                    testID: 'staff-role-name',
                    value: N.roleName || '',
                    onChangeText: (e) => O((t) => ({ ...t, roleName: e })),
                    placeholder: (0, d.L)(
                      '\u0646\u0627\u0645 \u0646\u0642\u0634 (\u062f\u0644\u062e\u0648\u0627\u0647)\u060c \u0645\u062b\u0644\u0627\u064b \u0635\u0646\u062f\u0648\u0642\u200c\u062f\u0627\u0631',
                    ),
                    maxLength: f.ROLE_NAME_MAX,
                  }),
                }),
                de &&
                  (0, y.jsx)(n.default, {
                    testID: 'staff-reset-template',
                    accessibilityRole: 'button',
                    onPress: () => ce(J),
                    style: {
                      alignItems: 'center',
                      paddingTop: 10,
                      paddingBottom: 2,
                    },
                    children: (0, y.jsx)(l.Copy, {
                      style: {
                        fontSize: 12,
                        fontFamily: 'Vazirmatn_600SemiBold',
                        color: H.accent,
                        textDecorationLine: 'underline',
                      },
                      children: (0, d.L)(
                        '\u0628\u0631\u06af\u0631\u062f\u0627\u0646\u062f\u0646 \u0628\u0647 \u0642\u0627\u0644\u0628 {role}',
                        { role: le },
                      ),
                    }),
                  }),
              ],
            }),
          !!q &&
            (0, y.jsx)(l.Copy, { style: { color: H.danger }, children: q }),
          (0, y.jsxs)(o.default, {
            style: { flexDirection: 'row-reverse', gap: 10 },
            children: [
              (0, y.jsx)(o.default, {
                style: { flex: 2 },
                children: (0, y.jsx)(l.Button, {
                  testID: 'staff-save',
                  disabled: oe,
                  onPress: async function () {
                    X('');
                    const t = V.trim(),
                      n = W.trim().toLowerCase(),
                      o = N.roleName?.trim() || '';
                    if (!t)
                      return X(
                        (0, d.L)(
                          '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0645\u0646\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
                        ),
                      );
                    if ('add' === i && !/^[a-z0-9][a-z0-9._-]{2,31}$/.test(n))
                      return X(
                        (0, d.L)(
                          '\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u0641\u0642\u0637 \u062d\u0631\u0648\u0641 \u0627\u0646\u06af\u0644\u06cc\u0633\u06cc \u06a9\u0648\u0686\u06a9\u060c \u0639\u062f\u062f \u0648 - \u0628\u0627\u0634\u062f (\u06f3 \u062a\u0627 \u06f3\u06f2 \u062d\u0631\u0641).',
                        ),
                      );
                    if (M && M.length < 10)
                      return X(
                        (0, d.L)(
                          '\u0631\u0645\u0632 \u062f\u0633\u062a\u200c\u06a9\u0645 \u06f1\u06f0 \u062d\u0631\u0641 \u0628\u0627\u0634\u062f.',
                        ),
                      );
                    const l = (0, f.parsePercent)(Z);
                    if (N.do.discount && null === l)
                      return X(
                        (0, d.L)(
                          '\u0633\u0642\u0641 \u062a\u062e\u0641\u06cc\u0641 \u0639\u062f\u062f\u06cc \u0627\u0632 \u06f1 \u062a\u0627 \u06f1\u06f0\u06f0 \u0628\u0627\u0634\u062f.',
                        ),
                      );
                    const { roleName: r, ...a } = N,
                      u = {
                        ...a,
                        do: {
                          ...N.do,
                          ...(null !== l ? { discountMax: l } : {}),
                        },
                        ...(o ? { roleName: o } : {}),
                      };
                    (null === l && delete u.do.discountMax, se(!0));
                    try {
                      'add' === i
                        ? (await (0, s.request)(
                            (0, s.shopPath)(e, '/staff'),
                            'POST',
                            { name: t, username: n, password: M, access: u },
                          ),
                          await P({ name: t, username: n, password: M }))
                        : c &&
                          (await (0, s.request)(
                            (0, s.shopPath)(e, '/staff/' + c.userId),
                            'PATCH',
                            {
                              ...(B ? { name: t } : {}),
                              access: u,
                              ...(B && M ? { password: M } : {}),
                            },
                          ),
                          await P(
                            B && M && c.username
                              ? { name: t, username: c.username, password: M }
                              : void 0,
                          ));
                    } catch (e) {
                      const t = e instanceof Error ? e.message : '';
                      if ('feature_not_in_plan' === t) {
                        const e = (0, d.L)(
                          '\u0647\u0645\u06a9\u0627\u0631 \u0641\u0642\u0637 \u062f\u0631 \u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633 \u0627\u0633\u062a\u061b \u0628\u0631\u0627\u06cc \u0627\u0641\u0632\u0648\u062f\u0646 \u0647\u0645\u06a9\u0627\u0631\u060c \u0627\u0634\u062a\u0631\u0627\u06a9 \u0631\u0627 \u067e\u0644\u0627\u0633 \u06a9\u0646.',
                        );
                        return (X(e), void D?.(e));
                      }
                      X(
                        'username_taken' === t
                          ? (0, d.L)(
                              '\u0627\u06cc\u0646 \u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc \u06af\u0631\u0641\u062a\u0647 \u0634\u062f\u0647\u061b \u06cc\u06a9\u06cc \u062f\u06cc\u06af\u0631 \u0628\u0646\u0648\u06cc\u0633.',
                            )
                          : 'member_limit' === t
                            ? (0, d.L)(
                                '\u0627\u0634\u062a\u0631\u0627\u06a9 \u067e\u0644\u0627\u0633 \u062a\u0627 {n} \u0647\u0645\u06a9\u0627\u0631 \u062f\u0627\u0631\u062f \u0648 \u0627\u0644\u0627\u0646 \u067e\u0631 \u0627\u0633\u062a\u061b \u0628\u0631\u0627\u06cc \u0647\u0645\u06a9\u0627\u0631 \u062a\u0627\u0632\u0647\u060c \u0627\u0648\u0644 \u06cc\u06a9\u06cc \u0631\u0627 \u062d\u0630\u0641 \u06a9\u0646.',
                                { n: (0, d.localDigits)(I) },
                              )
                            : (0, s.message)(e),
                      );
                    } finally {
                      se(!1);
                    }
                  },
                  children:
                    'add' === i
                      ? (0, d.L)(
                          '\u0633\u0627\u062e\u062a \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0645\u0646\u062f',
                        )
                      : (0, d.L)('\u0630\u062e\u06cc\u0631\u0647'),
                }),
              }),
              (0, y.jsx)(o.default, {
                style: { flex: 1 },
                children: (0, y.jsx)(l.Button, {
                  secondary: !0,
                  onPress: k,
                  children: (0, d.L)('\u0627\u0646\u0635\u0631\u0627\u0641'),
                }),
              }),
            ],
          }),
          'edit' === i &&
            T &&
            (te
              ? (0, y.jsxs)(o.default, {
                  style: { flexDirection: 'row-reverse', gap: 8 },
                  children: [
                    (0, y.jsx)(n.default, {
                      testID: 'staff-remove-yes-' + u,
                      accessibilityRole: 'button',
                      onPress: () => {
                        T();
                      },
                      style: {
                        flex: 1,
                        height: 40,
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: H.danger,
                      },
                      children: (0, y.jsx)(l.Copy, {
                        style: {
                          fontSize: 13,
                          color: '#fff',
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: (0, d.L)(
                          '\u0628\u0644\u0647\u060c \u062d\u0630\u0641',
                        ),
                      }),
                    }),
                    (0, y.jsx)(n.default, {
                      accessibilityRole: 'button',
                      onPress: () => ne(!1),
                      style: {
                        flex: 1,
                        height: 40,
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: H.soft,
                      },
                      children: (0, y.jsx)(l.Copy, {
                        style: { fontSize: 13 },
                        children: (0, d.L)('\u0646\u0647'),
                      }),
                    }),
                  ],
                })
              : (0, y.jsxs)(n.default, {
                  testID: 'staff-remove-' + u,
                  accessibilityRole: 'button',
                  onPress: () => ne(!0),
                  style: {
                    flexDirection: 'row-reverse',
                    gap: 4,
                    height: 40,
                    borderRadius: 12,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 1,
                    borderColor: H.danger,
                  },
                  children: [
                    (0, y.jsx)(r.Icon, {
                      name: 'close',
                      size: 16,
                      color: H.danger,
                    }),
                    (0, y.jsx)(l.Copy, {
                      style: { fontSize: 13, color: H.danger },
                      children: (0, d.L)(
                        '\u062d\u0630\u0641 \u0647\u0645\u06a9\u0627\u0631',
                      ),
                    }),
                  ],
                })),
        ],
      });
    }
    function V({ value: e, onDone: n }) {
      const { colors: s } = (0, a.useTheme)(),
        [c, u] = (0, t.useState)(!1),
        f = (0, d.L)(
          '\u0648\u0631\u0648\u062f \u0628\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0628\u0631\u0627\u06cc {name}\n\u0633\u0627\u06cc\u062a: {site}\n\u0631\u0648\u06cc \xab\u0648\u0631\u0648\u062f \u06a9\u0627\u0631\u0645\u0646\u062f\xbb \u0628\u0632\u0646.\n\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc: {username}\n\u0631\u0645\u0632: {password}',
          {
            name: e.name,
            site: P(),
            username: e.username,
            password: e.password,
          },
        ),
        h = (e, t, n) =>
          (0, y.jsxs)(o.default, {
            style: [
              l.common.between,
              { paddingVertical: 8, borderTopWidth: 1, borderColor: s.line },
            ],
            children: [
              (0, y.jsx)(l.Copy, {
                style: { fontSize: 13, color: s.muted },
                children: e,
              }),
              (0, y.jsx)(l.Copy, {
                testID: n,
                selectable: !0,
                style: {
                  fontSize: 16,
                  fontFamily: 'Vazirmatn_700Bold',
                  writingDirection: 'ltr',
                },
                children: t,
              }),
            ],
          });
      return (0, y.jsxs)(l.Card, {
        testID: 'staff-credentials',
        style: { gap: 8, borderWidth: 2, borderColor: s.accent },
        children: [
          (0, y.jsxs)(o.default, {
            style: {
              flexDirection: 'row-reverse',
              alignItems: 'center',
              gap: 8,
            },
            children: [
              (0, y.jsx)(r.Icon, { name: 'check', size: 20, color: s.accent }),
              (0, y.jsx)(l.Copy, {
                style: { fontSize: 16, fontFamily: 'Vazirmatn_700Bold' },
                children: (0, d.L)(
                  '\u062d\u0633\u0627\u0628 {name} \u0622\u0645\u0627\u062f\u0647 \u0627\u0633\u062a',
                  { name: e.name },
                ),
              }),
            ],
          }),
          (0, y.jsx)(l.Copy, {
            style: { fontSize: 12, lineHeight: 20, color: s.muted },
            children: (0, d.L)(
              '\u0627\u06cc\u0646 \u0631\u0627 \u0628\u0647 \u06a9\u0627\u0631\u0645\u0646\u062f\u062a \u0628\u062f\u0647. \u0631\u0645\u0632 \u0641\u0642\u0637 \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u062f\u06cc\u062f\u0647 \u0645\u06cc\u200c\u0634\u0648\u062f\u061b \u0627\u06af\u0631 \u06af\u0645 \u0634\u062f \u0627\u0632 \xab\u0648\u06cc\u0631\u0627\u06cc\u0634\xbb \u0631\u0645\u0632 \u062a\u0627\u0632\u0647 \u0628\u0633\u0627\u0632.',
            ),
          }),
          h(
            (0, d.L)('\u0633\u0627\u06cc\u062a'),
            P().replace(/^https?:\/\//, ''),
            'staff-cred-site',
          ),
          h(
            (0, d.L)('\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc'),
            e.username,
            'staff-cred-username',
          ),
          h((0, d.L)('\u0631\u0645\u0632'), e.password, 'staff-cred-password'),
          (0, y.jsxs)(o.default, {
            style: { flexDirection: 'row-reverse', gap: 10, marginTop: 4 },
            children: [
              (0, y.jsx)(o.default, {
                style: { flex: 1 },
                children: (0, y.jsx)(l.Button, {
                  testID: 'staff-cred-share',
                  onPress: async () => {
                    (await (0, i.shareText)(
                      f,
                      (0, d.L)(
                        '\u0648\u0631\u0648\u062f \u0628\u0647 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc',
                      ),
                    ),
                      u(!0));
                  },
                  children: c
                    ? (0, d.L)(
                        '\u0641\u0631\u0633\u062a\u0627\u062f\u0647 \u0634\u062f \u2713',
                      )
                    : (0, d.L)(
                        '\u0641\u0631\u0633\u062a\u0627\u062f\u0646 / \u06a9\u067e\u06cc',
                      ),
                }),
              }),
              (0, y.jsx)(o.default, {
                style: { flex: 1 },
                children: (0, y.jsx)(l.Button, {
                  secondary: !0,
                  onPress: n,
                  children: (0, d.L)('\u062a\u0645\u0627\u0645'),
                }),
              }),
            ],
          }),
        ],
      });
    }
  },
  903,
  [2, 94, 232, 99, 415, 407, 385, 382, 661, 311, 502, 904, 473, 338],
);
