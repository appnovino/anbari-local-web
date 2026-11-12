// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 770; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.BulkBar = function ({
        count: e,
        total: t,
        onAll: h,
        onNone: p,
        onDone: C,
        onApply: D,
        categories: L,
        canSeeBuyPrice: k = !0,
        compact: S = !1,
        extra: I,
      }) {
        const { colors: v } = (0, u.useTheme)(),
          [z, w] = (0, l.useState)(null),
          [P, R] = (0, l.useState)(''),
          [B, T] = (0, l.useState)(''),
          [H, _] = (0, l.useState)(!1),
          W = (0, l.useRef)(!1),
          F = 0 === e;
        async function A(t) {
          if (!W.current) {
            ((W.current = !0), _(!0), R(''));
            try {
              (await D(t),
                w(null),
                T(
                  'delete' === t.action
                    ? (0, y.L)(
                        '{n} \u06a9\u0627\u0644\u0627 \u062d\u0630\u0641 \u0634\u062f \u2713',
                        { n: (0, y.localDigits)(e) },
                      )
                    : (0, y.L)(
                        '{n} \u06a9\u0627\u0644\u0627 \u0628\u0647\u200c\u0631\u0648\u0632 \u0634\u062f \u2713',
                        { n: (0, y.localDigits)(e) },
                      ),
                ));
            } catch (e) {
              R((0, b.errorText)(e));
            } finally {
              ((W.current = !1), _(!1));
            }
          }
        }
        const V = (e, t, l, s, i = !1) =>
            (0, f.jsxs)(n.default, {
              testID: e,
              accessibilityRole: 'button',
              disabled: F,
              onPress: () => {
                (T(''), R(''), w(s));
              },
              style: ({ pressed: e }) => ({
                flex: 1,
                minWidth: 0,
                height: 44,
                borderRadius: 12,
                flexDirection: 'row-reverse',
                gap: 6,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: i ? 'transparent' : v.soft,
                borderWidth: i ? 1 : 0,
                borderColor: v.danger,
                opacity: F ? 0.45 : e ? 0.8 : 1,
              }),
              children: [
                (0, f.jsx)(c.Icon, {
                  name: t,
                  size: 17,
                  color: i ? v.danger : v.text,
                }),
                (0, f.jsx)(o.Copy, {
                  numberOfLines: 1,
                  style: {
                    fontSize: 13,
                    color: i ? v.danger : v.text,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: l,
                }),
              ],
            }),
          M = (0, f.jsxs)(f.Fragment, {
            children: [
              (0, f.jsx)(i.Sheet, {
                visible: 'category' === z,
                title: (0, y.L)(
                  '\u062f\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc {n} \u06a9\u0627\u0644\u0627',
                  { n: (0, y.localDigits)(e) },
                ),
                onClose: () => w(null),
                children: (0, f.jsx)(x, {
                  busy: H,
                  categories: L,
                  error: P,
                  onApply: (e) => A({ action: 'category', category: e }),
                }),
              }),
              (0, f.jsx)(i.Sheet, {
                visible: 'price' === z,
                title: (0, y.L)(
                  '\u0642\u06cc\u0645\u062a {n} \u06a9\u0627\u0644\u0627',
                  { n: (0, y.localDigits)(e) },
                ),
                onClose: () => w(null),
                children: (0, f.jsx)(j, {
                  busy: H,
                  canSeeBuyPrice: k,
                  error: P,
                  onApply: (e) => A({ action: 'price', ...e }),
                }),
              }),
              (0, f.jsx)(i.Sheet, {
                visible: 'delete' === z,
                title: (0, y.L)(
                  '\u062d\u0630\u0641 {n} \u06a9\u0627\u0644\u0627',
                  { n: (0, y.localDigits)(e) },
                ),
                onClose: () => w(null),
                children: (0, f.jsxs)(s.default, {
                  style: { gap: 12 },
                  children: [
                    (0, f.jsx)(o.Copy, {
                      style: { fontSize: 14, lineHeight: 24 },
                      children: (0, y.L)(
                        '\u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u06a9\u0627\u0645\u0644 \u062d\u0630\u0641 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f \u0648 \u0628\u0631\u0646\u0645\u06cc\u200c\u06af\u0631\u062f\u0646\u062f. \u0641\u0631\u0648\u0634\u200c\u0647\u0627 \u0648 \u0641\u0627\u06a9\u062a\u0648\u0631\u0647\u0627\u06cc \u06af\u0630\u0634\u062a\u0647 \u0628\u0627 \u0647\u0645\u0627\u0646 \u0646\u0627\u0645 \u0645\u06cc\u200c\u0645\u0627\u0646\u0646\u062f.',
                      ),
                    }),
                    !!P &&
                      (0, f.jsx)(o.Copy, {
                        style: { color: v.danger },
                        children: P,
                      }),
                    (0, f.jsxs)(s.default, {
                      style: { flexDirection: 'row-reverse', gap: 10 },
                      children: [
                        (0, f.jsx)(s.default, {
                          style: { flex: 1 },
                          children: (0, f.jsx)(o.Button, {
                            secondary: !0,
                            onPress: () => w(null),
                            children: (0, y.L)(
                              '\u0627\u0646\u0635\u0631\u0627\u0641',
                            ),
                          }),
                        }),
                        (0, f.jsx)(s.default, {
                          style: { flex: 1 },
                          children: (0, f.jsx)(o.Button, {
                            testID: 'bulk-delete-yes',
                            danger: !0,
                            disabled: H,
                            onPress: () => A({ action: 'delete' }),
                            children: (0, y.L)(
                              '\u0628\u0644\u0647\u060c \u062d\u0630\u0641 \u06a9\u0646',
                            ),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        if (S) {
          const l = (e, t, l, s, i = !1) =>
            (0, f.jsxs)(n.default, {
              testID: e,
              accessibilityRole: 'button',
              disabled: F,
              onPress: () => {
                (T(''), R(''), w(s));
              },
              style: ({ pressed: e }) => ({
                height: 34,
                paddingHorizontal: 12,
                borderRadius: 11,
                flexDirection: 'row-reverse',
                gap: 6,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: i ? 'transparent' : v.surface,
                borderWidth: 1,
                borderColor: i ? v.danger + '99' : v.line,
                opacity: F ? 0.45 : e ? 0.8 : 1,
              }),
              children: [
                (0, f.jsx)(c.Icon, {
                  name: t,
                  size: 15,
                  color: i ? v.danger : v.text,
                }),
                (0, f.jsx)(o.Copy, {
                  numberOfLines: 1,
                  style: {
                    fontSize: 13,
                    lineHeight: 20,
                    color: i ? v.danger : v.text,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: l,
                }),
              ],
            });
          return (0, f.jsxs)(s.default, {
            testID: 'bulk-bar',
            style: {
              flexDirection: 'row-reverse',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 8,
              paddingVertical: 8,
              paddingHorizontal: 12,
              borderRadius: 16,
              borderWidth: 1,
              borderColor: v.accent,
              backgroundColor: v.accentSoft,
            },
            children: [
              (0, f.jsx)(c.Icon, { name: 'check', size: 16, color: v.accent }),
              (0, f.jsx)(o.Copy, {
                testID: 'bulk-count',
                style: {
                  fontSize: 13.5,
                  lineHeight: 22,
                  fontFamily: 'Vazirmatn_700Bold',
                  color: v.accent,
                },
                children: (0, y.L)(
                  '{n} \u06a9\u0627\u0644\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f',
                  { n: (0, y.localDigits)(e) },
                ),
              }),
              (0, f.jsx)(n.default, {
                testID: 'bulk-all',
                accessibilityRole: 'button',
                onPress: e === t ? p : h,
                style: {
                  paddingHorizontal: 8,
                  height: 30,
                  justifyContent: 'center',
                },
                children: (0, f.jsx)(o.Copy, {
                  style: { fontSize: 12, color: v.accent },
                  children:
                    e === t && t > 0
                      ? (0, y.L)(
                          '\u0647\u06cc\u0686\u200c\u06a9\u062f\u0627\u0645',
                        )
                      : (0, y.L)('\u0647\u0645\u0647 ({n})', {
                          n: (0, y.localDigits)(t),
                        }),
                }),
              }),
              (0, f.jsx)(s.default, { style: { flex: 1 } }),
              l(
                'bulk-price',
                'wallet',
                (0, y.L)(
                  '\u062a\u063a\u06cc\u06cc\u0631 \u0642\u06cc\u0645\u062a \u06af\u0631\u0648\u0647\u06cc',
                ),
                'price',
              ),
              l(
                'bulk-category',
                'tag',
                (0, y.L)(
                  '\u062f\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc',
                ),
                'category',
              ),
              I,
              l(
                'bulk-delete',
                'close',
                (0, y.L)('\u062d\u0630\u0641'),
                'delete',
                !0,
              ),
              (0, f.jsx)(n.default, {
                testID: 'bulk-done',
                accessibilityRole: 'button',
                accessibilityLabel: (0, y.L)(
                  '\u0644\u063a\u0648 \u0627\u0646\u062a\u062e\u0627\u0628',
                ),
                onPress: C,
                style: {
                  width: 30,
                  height: 30,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                children: (0, f.jsx)(c.Icon, {
                  name: 'close',
                  size: 15,
                  color: v.muted,
                }),
              }),
              !!B &&
                (0, f.jsx)(o.Copy, {
                  testID: 'bulk-notice',
                  style: { width: '100%', fontSize: 12, color: v.accent },
                  children: B,
                }),
              M,
            ],
          });
        }
        return (0, f.jsxs)(s.default, {
          testID: 'bulk-bar',
          style: {
            gap: 10,
            padding: 12,
            borderRadius: 16,
            borderWidth: 1,
            borderColor: v.accent,
            backgroundColor: v.accentSoft,
          },
          children: [
            (0, f.jsxs)(s.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 8,
              },
              children: [
                (0, f.jsx)(o.Copy, {
                  testID: 'bulk-count',
                  style: {
                    flex: 1,
                    fontSize: 14,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, y.L)(
                    '{n} \u06a9\u0627\u0644\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u062f',
                    { n: (0, y.localDigits)(e) },
                  ),
                }),
                (0, f.jsx)(n.default, {
                  testID: 'bulk-all',
                  accessibilityRole: 'button',
                  onPress: e === t ? p : h,
                  style: {
                    paddingHorizontal: 10,
                    height: 34,
                    borderRadius: 10,
                    justifyContent: 'center',
                    backgroundColor: v.surface,
                  },
                  children: (0, f.jsx)(o.Copy, {
                    style: { fontSize: 12 },
                    children:
                      e === t && t > 0
                        ? (0, y.L)(
                            '\u0647\u06cc\u0686\u200c\u06a9\u062f\u0627\u0645',
                          )
                        : (0, y.L)('\u0647\u0645\u0647 ({n})', {
                            n: (0, y.localDigits)(t),
                          }),
                  }),
                }),
                (0, f.jsx)(n.default, {
                  testID: 'bulk-done',
                  accessibilityRole: 'button',
                  onPress: C,
                  style: {
                    paddingHorizontal: 10,
                    height: 34,
                    borderRadius: 10,
                    justifyContent: 'center',
                    backgroundColor: v.surface,
                  },
                  children: (0, f.jsx)(o.Copy, {
                    style: { fontSize: 12 },
                    children: (0, y.L)('\u062a\u0645\u0627\u0645'),
                  }),
                }),
              ],
            }),
            (0, f.jsxs)(s.default, {
              style: { flexDirection: 'row-reverse', gap: 8 },
              children: [
                V(
                  'bulk-category',
                  'tag',
                  (0, y.L)(
                    '\u062f\u0633\u062a\u0647\u200c\u0628\u0646\u062f\u06cc',
                  ),
                  'category',
                ),
                V(
                  'bulk-price',
                  'wallet',
                  (0, y.L)('\u0642\u06cc\u0645\u062a'),
                  'price',
                ),
              ],
            }),
            (0, f.jsx)(s.default, {
              style: { flexDirection: 'row-reverse' },
              children: V(
                'bulk-delete',
                'close',
                (0, y.L)(
                  '\u062d\u0630\u0641 \u0627\u0646\u062a\u062e\u0627\u0628\u200c\u0634\u062f\u0647\u200c\u0647\u0627',
                ),
                'delete',
                !0,
              ),
            }),
            F &&
              (0, f.jsx)(o.Copy, {
                style: { fontSize: 12, color: v.muted },
                children: (0, y.L)(
                  '\u0631\u0648\u06cc \u06a9\u0627\u0644\u0627\u0647\u0627 \u0628\u0632\u0646 \u062a\u0627 \u0627\u0646\u062a\u062e\u0627\u0628 \u0634\u0648\u0646\u062f.',
                ),
              }),
            !!B &&
              (0, f.jsx)(o.Copy, {
                testID: 'bulk-notice',
                style: { fontSize: 12, color: v.accent },
                children: B,
              }),
            M,
          ],
        });
      }));
    var t = r(d[0]),
      l = r(d[1]);
    r(d[2]);
    var n = e(r(d[3])),
      s = e(r(d[4])),
      o = r(d[5]),
      i = r(d[6]),
      c = r(d[7]),
      u = r(d[8]),
      y = r(d[9]),
      b = r(d[10]),
      h = r(d[11]),
      p = r(d[12]),
      f = r(d[13]);
    function x({ busy: e = !1, categories: t, error: i, onApply: c }) {
      const { colors: b } = (0, u.useTheme)(),
        [h, p] = (0, l.useState)(''),
        x = (t, l, s) =>
          (0, f.jsx)(
            n.default,
            {
              testID: s,
              accessibilityRole: 'button',
              disabled: e,
              onPress: () => {
                c(l);
              },
              style: {
                paddingHorizontal: 14,
                height: 38,
                borderRadius: 999,
                justifyContent: 'center',
                backgroundColor: null === l ? 'transparent' : b.soft,
                borderWidth: null === l ? 1 : 0,
                borderColor: b.line,
              },
              children: (0, f.jsx)(o.Copy, {
                style: { fontSize: 13 },
                children: t,
              }),
            },
            s,
          );
      return (0, f.jsxs)(s.default, {
        style: { gap: 12 },
        children: [
          !!t.length &&
            (0, f.jsxs)(f.Fragment, {
              children: [
                (0, f.jsx)(o.Copy, {
                  style: { fontSize: 12, color: b.muted },
                  children: (0, y.L)(
                    '\u06cc\u06a9\u06cc \u0631\u0627 \u0628\u0632\u0646',
                  ),
                }),
                (0, f.jsxs)(s.default, {
                  style: {
                    flexDirection: 'row-reverse',
                    flexWrap: 'wrap',
                    gap: 8,
                  },
                  children: [
                    t.map((e, t) => x(e, e, 'bulk-cat-' + t)),
                    x(
                      (0, y.L)(
                        '\u0628\u062f\u0648\u0646 \u062f\u0633\u062a\u0647',
                      ),
                      null,
                      'bulk-cat-none',
                    ),
                  ],
                }),
              ],
            }),
          (0, f.jsx)(o.Copy, {
            style: { fontSize: 12, color: b.muted },
            children: (0, y.L)(
              '\u06cc\u0627 \u062f\u0633\u062a\u0647\u0654 \u062a\u0627\u0632\u0647 \u0628\u0646\u0648\u06cc\u0633',
            ),
          }),
          (0, f.jsxs)(s.default, {
            style: { flexDirection: 'row-reverse', gap: 8 },
            children: [
              (0, f.jsx)(s.default, {
                style: { flex: 1 },
                children: (0, f.jsx)(o.Input, {
                  testID: 'bulk-cat-new',
                  value: h,
                  onChangeText: p,
                  maxLength: 60,
                  placeholder: (0, y.L)(
                    '\u0645\u062b\u0644\u0627\u064b \u0644\u0628\u0646\u06cc\u0627\u062a',
                  ),
                }),
              }),
              (0, f.jsx)(s.default, {
                style: { width: 110 },
                children: (0, f.jsx)(o.Button, {
                  testID: 'bulk-cat-apply',
                  disabled: e || !h.trim(),
                  onPress: () => c(h.trim()),
                  children: (0, y.L)('\u0627\u0639\u0645\u0627\u0644'),
                }),
              }),
            ],
          }),
          !!i &&
            (0, f.jsx)(o.Copy, { style: { color: b.danger }, children: i }),
        ],
      });
    }
    function j({ busy: e = !1, canSeeBuyPrice: n, error: i, onApply: c }) {
      const { colors: b } = (0, u.useTheme)(),
        [x, j] = (0, l.useState)('price'),
        [C, D] = (0, l.useState)('set'),
        [L, k] = (0, l.useState)(''),
        [S, I] = (0, l.useState)(!0),
        [v, z] = (0, l.useState)(''),
        w = !(0, p.moneyDecimals)(),
        P = Number(
          (0, h.latinDigits)(L)
            .replace(/[\u066b,]/g, '.')
            .replace(/[^0-9.]/g, ''),
        ),
        R =
          '' !== L.trim() &&
          Number.isFinite(P) &&
          ('set' === C ? P >= 0 : P > 0 && (S ? P <= 500 : P <= 90));
      return (0, f.jsxs)(s.default, {
        style: { gap: 12 },
        children: [
          n &&
            (0, f.jsx)(o.Segmented, {
              value: x,
              onChange: j,
              items: [
                {
                  value: 'price',
                  label: (0, y.L)(
                    '\u0642\u06cc\u0645\u062a \u0641\u0631\u0648\u0634',
                  ),
                  testID: 'bulk-field-price',
                },
                {
                  value: 'costPrice',
                  label: (0, y.L)(
                    '\u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                  ),
                  testID: 'bulk-field-cost',
                },
              ],
            }),
          (0, f.jsx)(o.Segmented, {
            value: C,
            onChange: (e) => {
              (D(e), k(''));
            },
            items: [
              {
                value: 'set',
                label: (0, y.L)(
                  '\u0645\u0628\u0644\u063a \u062a\u0627\u0632\u0647',
                ),
                testID: 'bulk-mode-set',
              },
              {
                value: 'percent',
                label: (0, y.L)(
                  '\u062f\u0631\u0635\u062f \u062a\u063a\u06cc\u06cc\u0631',
                ),
                testID: 'bulk-mode-percent',
              },
            ],
          }),
          'percent' === C &&
            (0, f.jsx)(o.Segmented, {
              value: S,
              onChange: I,
              items: [
                {
                  value: !0,
                  label: (0, y.L)('\u0627\u0641\u0632\u0627\u06cc\u0634'),
                  testID: 'bulk-up',
                },
                {
                  value: !1,
                  label: (0, y.L)('\u06a9\u0627\u0647\u0634'),
                  testID: 'bulk-down',
                },
              ],
            }),
          (0, f.jsxs)(s.default, {
            style: { gap: 6 },
            children: [
              (0, f.jsx)(o.Copy, {
                style: { fontSize: 12, color: b.muted },
                children:
                  'set' === C
                    ? (0, y.L)(
                        '\u0642\u06cc\u0645\u062a \u0647\u0645\u0647\u0654 \u06a9\u0627\u0644\u0627\u0647\u0627\u06cc \u0627\u0646\u062a\u062e\u0627\u0628\u200c\u0634\u062f\u0647 ({unit})',
                        { unit: (0, p.currencyUnit)() },
                      )
                    : (0, y.L)(
                        '\u0686\u0646\u062f \u062f\u0631\u0635\u062f\u061f',
                      ),
              }),
              'set' === C
                ? (0, f.jsx)(t.MoneyInput, {
                    shown: !0,
                    testID: 'bulk-price-value',
                    value: L,
                    onChange: k,
                    decimals: !w,
                  })
                : (0, f.jsx)(o.Input, {
                    testID: 'bulk-price-value',
                    value: L,
                    onChangeText: k,
                    keyboardType: 'decimal-pad',
                    inputMode: 'decimal',
                    placeholder: (0, y.localDigits)('10'),
                  }),
            ],
          }),
          'percent' === C &&
            (0, f.jsxs)(o.Copy, {
              style: { fontSize: 12, lineHeight: 20, color: b.muted },
              children: [
                (0, y.L)(
                  '\u06a9\u0627\u0644\u0627\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0647\u0646\u0648\u0632 \u0627\u06cc\u0646 \u0642\u06cc\u0645\u062a \u0631\u0627 \u0646\u062f\u0627\u0631\u0646\u062f \u062a\u063a\u06cc\u06cc\u0631 \u0646\u0645\u06cc\u200c\u06a9\u0646\u0646\u062f.',
                ),
                w
                  ? ' ' +
                    ('rial' === (0, p.moneyUnit)()
                      ? (0, y.L)(
                          '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627 \u0628\u0647 \u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631\u06cc\u0646 \u06f1\u066c\u06f0\u06f0\u06f0 \u0631\u06cc\u0627\u0644 \u06af\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
                        )
                      : (0, y.L)(
                          '\u0642\u06cc\u0645\u062a\u200c\u0647\u0627 \u0628\u0647 \u0646\u0632\u062f\u06cc\u06a9\u200c\u062a\u0631\u06cc\u0646 \u06f1\u06f0\u06f0 \u062a\u0648\u0645\u0627\u0646 \u06af\u0631\u062f \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
                        ))
                  : '',
              ],
            }),
          'set' === C &&
            R &&
            (0, f.jsx)(o.Copy, {
              style: { fontSize: 12, color: b.muted },
              children: (0, y.L)(
                '\u0641\u0631\u0648\u0634\u200c\u0647\u0627\u06cc \u0642\u0628\u0644\u06cc \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a\u0650 \u0627\u06cc\u0646 \u06a9\u0627\u0644\u0627\u0647\u0627 \u0647\u0645 \u0628\u0627 \u0647\u0645\u06cc\u0646 \u0642\u06cc\u0645\u062a \u062d\u0633\u0627\u0628 \u0645\u06cc\u200c\u0634\u0648\u0646\u062f.',
              ),
            }),
          !(!v && !i) &&
            (0, f.jsx)(o.Copy, {
              style: { color: b.danger },
              children: v || i,
            }),
          (0, f.jsx)(o.Button, {
            testID: 'bulk-price-apply',
            disabled: e,
            onPress: async function () {
              R
                ? (z(''),
                  await c(
                    'set' === C
                      ? {
                          field: x,
                          mode: C,
                          value: (0, p.inputToToman)(P),
                          roundTo: 1,
                        }
                      : {
                          field: x,
                          mode: C,
                          value: S ? P : -P,
                          roundTo: w ? 100 : 1,
                        },
                  ))
                : z(
                    'set' === C
                      ? (0, y.L)(
                          '\u0645\u0628\u0644\u063a \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633.',
                        )
                      : (0, y.L)(
                          '\u062f\u0631\u0635\u062f \u0628\u06cc\u0646 \u06f1 \u0648 \u06f9\u06f0 (\u06a9\u0627\u0647\u0634) \u06cc\u0627 \u06f5\u06f0\u06f0 (\u0627\u0641\u0632\u0627\u06cc\u0634) \u0628\u0627\u0634\u062f.',
                        ),
                  );
            },
            children: (0, y.L)('\u0627\u0639\u0645\u0627\u0644'),
          }),
        ],
      });
    }
  },
  770,
  [614, 2, 94, 232, 99, 407, 539, 385, 382, 311, 690, 440, 435, 338],
);
