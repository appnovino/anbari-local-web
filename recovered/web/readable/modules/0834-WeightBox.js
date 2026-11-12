// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 834; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.WeightBox = function ({
        unit: e,
        price: S,
        value: j,
        onChange: C,
        allowMoney: I = !0,
        showPrices: w = !0,
        testID: L = 'weight-box',
      }) {
        const { colors: z } = (0, f.useTheme)(),
          D = (0, c.measureOf)(e),
          H = I && w && void 0 !== S && S > 0,
          [_, M] = (0, t.useState)('weight'),
          [R, q] = (0, t.useState)(() => {
            const e = Number(j);
            return j && e > 0 ? x((0, c.baseToSmall)(e, D)) : '';
          }),
          B = (0, t.useRef)(j),
          P = H ? _ : 'weight',
          T = (0, t.useRef)({ value: j, price: S });
        (0, t.useEffect)(() => {
          const e = T.current;
          if (((T.current = { value: j, price: S }), j !== e.value)) {
            if (j === B.current) return;
            B.current = j;
            const e = Number(j);
            return (
              M('weight'),
              void q(j && e > 0 ? x((0, c.baseToSmall)(e, D)) : '')
            );
          }
          if ('money' === _ && !H)
            return (
              M('weight'),
              q(''),
              (B.current = ''),
              void C({ quantity: '', mode: 'weight' })
            );
          S !== e.price && 'money' === P && R && V('money', R);
        }, [j, S, H]);
        const N = (0, c.weightBoxModel)(e, P, R, S);
        function V(t, n) {
          const l = (0, c.weightBoxModel)(e, t, n, S),
            o = void 0 !== l.quantity ? String(l.quantity) : '';
          ((B.current = o),
            C({
              quantity: o,
              mode: t,
              ...('money' === t && void 0 !== l.unitPrice
                ? { unitPrice: l.unitPrice, money: l.said }
                : {}),
            }));
        }
        function k(e) {
          (q(e), V(P, e));
        }
        const F = 'money' === P ? (0, c.parseSmall)(R) : N.small,
          O = (e) => {
            const t = F || 0,
              n =
                'money' === P
                  ? Math.max(0, t + e * b)
                  : (0, c.stepSmall)(t, e, D);
            k(n > 0 ? String(n) : '');
          },
          W = (e) =>
            (0, p.jsx)(n.default, {
              testID: L + (e > 0 ? '-plus' : '-minus'),
              accessibilityRole: 'button',
              accessibilityLabel:
                e > 0
                  ? (0, o.L)('\u0628\u06cc\u0634\u062a\u0631')
                  : (0, o.L)('\u06a9\u0645\u062a\u0631'),
              disabled: e < 0 && !(F && F > 0),
              onPress: () => O(e),
              hitSlop: 4,
              style: ({ pressed: t }) => ({
                width: 44,
                height: 44,
                borderRadius: 22,
                alignItems: 'center',
                justifyContent: 'center',
                ...(e > 0
                  ? { backgroundColor: t ? z.accentActive : z.accent }
                  : {
                      borderWidth: 1,
                      borderColor: z.line,
                      backgroundColor: t ? z.soft : z.surface,
                      opacity: F && F > 0 ? 1 : 0.4,
                    }),
              }),
              children:
                e > 0
                  ? (0, p.jsx)(y.Icon, {
                      name: 'plus',
                      size: 18,
                      color: z.onAccent,
                    })
                  : (0, p.jsx)(u.Copy, {
                      style: { fontSize: 20, lineHeight: 24, color: z.text },
                      children: '\u2212',
                    }),
            }),
          $ =
            'money' === P
              ? c.MONEY_CHIPS.map((e) => ({
                  v: e,
                  label: (0, c.moneyChipText)(e),
                }))
              : D.chips.map((e) => ({ v: e, label: (0, c.chipText)(e, D) })),
          A = void 0 !== S && w ? (0, c.perText)(S, e) : '',
          E =
            'money' === P
              ? void 0 !== N.quantity
                ? {
                    label: (0, o.L)('\u06cc\u0639\u0646\u06cc'),
                    big: (0, c.measureText)(N.quantity, e),
                    small: `${v(N.said)} \xf7 ${A}`,
                  }
                : null
              : void 0 !== N.quantity && void 0 !== N.total && w
                ? {
                    label: (0, o.L)('\u0645\u06cc\u200c\u0634\u0648\u062f'),
                    big: (0, s.money)(N.total, { full: !0, hint: !1 }),
                    small: `${(0, c.measureText)(N.quantity, e)} \xd7 ${A}`,
                  }
                : null;
        return (0, p.jsxs)(l.default, {
          testID: L,
          style: { gap: 10 },
          children: [
            (0, p.jsxs)(l.default, {
              style: {
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 8,
              },
              children: [
                (0, p.jsx)(u.Copy, {
                  style: {
                    fontSize: 14,
                    lineHeight: 22,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children:
                    'money' === P
                      ? (0, o.L)(
                          '\u0686\u0642\u062f\u0631 \u067e\u0648\u0644\u061f',
                        )
                      : (0, o.L)(
                          '\u0686\u0642\u062f\u0631 \u0648\u0632\u0646\u061f',
                        ),
                }),
                H
                  ? (0, p.jsx)(u.Segmented, {
                      compact: !0,
                      height: 36,
                      style: { width: 150 },
                      value: P,
                      onChange: function (e) {
                        if (e === P) return;
                        const t = x('money' === e ? N.total : N.small);
                        (M(e), q(t), V(e, t));
                      },
                      items: [
                        {
                          value: 'weight',
                          label: (0, o.L)('\u0648\u0632\u0646'),
                          testID: L + '-mode-weight',
                        },
                        {
                          value: 'money',
                          label: (0, o.L)('\u0645\u0628\u0644\u063a'),
                          testID: L + '-mode-money',
                        },
                      ],
                    })
                  : !!A &&
                    (0, p.jsx)(u.Copy, {
                      testID: L + '-per',
                      style: {
                        fontSize: 12.5,
                        lineHeight: 20,
                        color: z.accent,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: A,
                    }),
              ],
            }),
            (0, p.jsx)(m.StepperRow, {
              testID: L + '-stepper',
              style: { gap: 8 },
              minus: W(-1),
              plus: W(1),
              children: (0, p.jsx)(l.default, {
                style: { flex: 1, minWidth: 0 },
                children: (0, p.jsx)(h.MoneyInput, {
                  testID: L + '-input',
                  accessibilityLabel:
                    'money' === P
                      ? (0, o.L)('\u0645\u0628\u0644\u063a')
                      : (0, o.L)('\u0648\u0632\u0646'),
                  value: R,
                  onChange: k,
                  placeholder:
                    'money' === P ? '' : (0, o.localDigits)(D.chips[2]),
                  suffix: 'money' === P ? void 0 : (0, c.smallName)(D),
                  style: {
                    minHeight: 48,
                    height: 48,
                    borderRadius: 14,
                    fontSize: 20,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                }),
              }),
            }),
            (0, p.jsx)(m.NumberLine, {
              testID: L + '-chips',
              style: { gap: 6 },
              children: $.map((e) => {
                const t = F === e.v;
                return (0, p.jsx)(
                  n.default,
                  {
                    testID: L + '-chip-' + e.v,
                    accessibilityRole: 'button',
                    onPress: () => k(String(e.v)),
                    style: ({ pressed: e }) => ({
                      flex: 1,
                      minWidth: 0,
                      height: 38,
                      borderRadius: 19,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderWidth: 1,
                      borderColor: t ? z.accent : z.line,
                      backgroundColor: t ? z.accentSoft : z.surface,
                      opacity: e ? 0.75 : 1,
                    }),
                    children: (0, p.jsx)(u.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 12.5,
                        lineHeight: 20,
                        color: t ? z.accent : z.text,
                        fontFamily: 'Vazirmatn_600SemiBold',
                      },
                      children: e.label,
                    }),
                  },
                  e.v,
                );
              }),
            }),
            E
              ? (0, p.jsxs)(l.default, {
                  testID: L + '-result',
                  style: {
                    flexDirection: 'row-reverse',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 8,
                    paddingHorizontal: 14,
                    paddingVertical: 10,
                    borderRadius: 14,
                    backgroundColor: z.soft,
                  },
                  children: [
                    (0, p.jsx)(u.Copy, {
                      style: { fontSize: 12.5, lineHeight: 20, color: z.muted },
                      children: E.label,
                    }),
                    (0, p.jsxs)(l.default, {
                      style: { alignItems: 'flex-start', flexShrink: 1 },
                      children: [
                        (0, p.jsx)(u.Copy, {
                          testID: L + '-result-big',
                          style: {
                            fontSize: 18,
                            lineHeight: 28,
                            fontFamily: 'Vazirmatn_700Bold',
                          },
                          children: E.big,
                        }),
                        (0, p.jsx)(u.Copy, {
                          numberOfLines: 1,
                          style: {
                            fontSize: 11.5,
                            lineHeight: 18,
                            color: z.muted,
                          },
                          children: E.small,
                        }),
                      ],
                    }),
                  ],
                })
              : 'money' === P && void 0 !== (0, c.parseSmall)(R)
                ? (0, p.jsx)(u.Copy, {
                    testID: L + '-too-small',
                    style: { fontSize: 12, lineHeight: 20, color: z.danger },
                    children: (0, o.L)(
                      '\u0627\u06cc\u0646 \u0645\u0628\u0644\u063a \u0627\u0632 \u06cc\u06a9 {unit} \u0647\u0645 \u06a9\u0645\u062a\u0631 \u0627\u0633\u062a',
                      { unit: (0, c.smallName)(D) },
                    ),
                  })
                : !!A &&
                  H &&
                  (0, p.jsx)(u.Copy, {
                    testID: L + '-per',
                    style: { fontSize: 12, lineHeight: 20, color: z.muted },
                    children: A,
                  }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      l = e(r(d[2])),
      o = r(d[3]),
      s = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      m = r(d[7]),
      y = r(d[8]),
      h = r(d[9]),
      f = r(d[10]),
      p = r(d[11]);
    const b = 1e4,
      x = (e) => (void 0 === e ? '' : String(e));
    const v = (e) =>
      void 0 === e
        ? ''
        : Math.round((0, s.localAmount)(e)).toLocaleString(
            (0, o.numberLocale)(),
          );
  },
  834,
  [2, 232, 99, 311, 435, 459, 407, 617, 385, 614, 382, 338],
);
