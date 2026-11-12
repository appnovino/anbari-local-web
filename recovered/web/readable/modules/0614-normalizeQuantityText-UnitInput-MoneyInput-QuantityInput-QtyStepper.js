// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 614; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.normalizeQuantityText = v),
      (_e.UnitInput = function ({
        value: e,
        onChange: t,
        unit: n = 'piece',
        baseUnit: l,
        onUnitChange: p,
        packSize: v,
        packUnit: j,
        allowedUnits: C,
        testID: S,
        compact: L = !1,
        selectorOnly: k = !1,
      }) {
        const { colors: z } = (0, h.useTheme)(),
          [T, D] = (0, o.useState)(!1),
          U = l || n,
          w = T && v && j ? j : n,
          F = (0, o.useMemo)(() => {
            try {
              const t = (0, f.parseQuantity)(e);
              return T && v ? (0, f.convertPack)(t, v) : t;
            } catch {
              return;
            }
          }, [e, T, v]);
        return (0, x.jsxs)(c.default, {
          style: { gap: 8 },
          children: [
            (0, x.jsxs)(c.default, {
              style: u.common.row,
              children: [
                !k &&
                  (0, x.jsx)(c.default, {
                    style: { flex: L ? 1 : 1.4 },
                    children: (0, x.jsx)(I, {
                      testID: S ?? 'unit-quantity',
                      accessibilityLabel: (0, b.L)(
                        '\u062a\u0639\u062f\u0627\u062f',
                      ),
                      placeholder: L
                        ? void 0
                        : (0, b.L)('\u062a\u0639\u062f\u0627\u062f'),
                      value: e,
                      selectTextOnFocus: L,
                      onChange: t,
                    }),
                  }),
                (0, x.jsx)(c.default, {
                  style: { flex: 1 },
                  children: (0, x.jsx)(d.UnitPicker, {
                    testID: S ? `${S}-unit` : 'unit-picker',
                    value: w,
                    onChange: (e) => {
                      (D(!1), p?.(e));
                    },
                    allowedUnits: C,
                    productUnit: l,
                    packSize: v,
                    packUnit: j,
                  }),
                }),
              ],
            }),
            !!v &&
              !!j &&
              (0, x.jsxs)(c.default, {
                style: u.common.between,
                children: [
                  (0, x.jsxs)(c.default, {
                    children: [
                      (0, x.jsxs)(u.Copy, {
                        style: { fontSize: 12 },
                        children: [
                          y.notebookFa.packToggle,
                          ' \xb7 ',
                          y.notebookFa.units[j],
                          ' \xd7 ',
                          v.toLocaleString((0, b.numberLocale)()),
                        ],
                      }),
                      void 0 !== F &&
                        T &&
                        (0, x.jsxs)(u.Copy, {
                          style: { fontSize: 11, color: z.muted },
                          children: [
                            F.toLocaleString((0, b.numberLocale)()),
                            ' ',
                            y.notebookFa.units[U],
                          ],
                        }),
                    ],
                  }),
                  (0, x.jsx)(s.default, {
                    value: T,
                    onValueChange: (e) => {
                      (D(e), p?.(e ? j : U));
                    },
                    trackColor: { false: z.soft, true: z.accent },
                    thumbColor: z.surface,
                    activeThumbColor: z.surface,
                  }),
                ],
              }),
          ],
        });
      }),
      (_e.MoneyInput = S),
      (_e.QuantityInput = I),
      (_e.QtyStepper = function ({
        value: e,
        onChange: t,
        unitLabel: n,
        onEditing: o,
        testID: s,
        by: c = 1,
      }) {
        const { colors: d } = (0, h.useTheme)(),
          f = Number(v(e) || 0),
          y = (e) => {
            const n = Math.round(1e3 * (f + e * c)) / 1e3;
            n >= 0.001 && t(String(n));
          },
          j = (e) =>
            (0, x.jsx)(l.default, {
              testID: s ? `${s}-${e > 0 ? 'plus' : 'minus'}` : void 0,
              accessibilityRole: 'button',
              accessibilityLabel:
                e > 0
                  ? (0, b.L)(
                      '\u06cc\u06a9\u06cc \u0628\u06cc\u0634\u062a\u0631',
                    )
                  : (0, b.L)('\u06cc\u06a9\u06cc \u06a9\u0645\u062a\u0631'),
              disabled: e < 0 && !(f > c),
              onPress: () => y(e),
              hitSlop: 4,
              style: ({ pressed: t }) => ({
                width: 30,
                height: 36,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: e < 0 && !(f > c) ? 0.35 : t ? 0.6 : 1,
              }),
              children: (0, x.jsx)(u.Copy, {
                style: { fontSize: 18, lineHeight: 24, color: d.accent },
                children: e > 0 ? '+' : '\u2212',
              }),
            });
        return (0, x.jsxs)(p.StepperRow, {
          testID: s ? s + '-stepper' : void 0,
          minus: j(-1),
          plus: j(1),
          style: {
            height: 38,
            borderRadius: 12,
            borderWidth: 1,
            borderColor: d.line,
            paddingHorizontal: 2,
          },
          children: [
            !!n &&
              (0, x.jsx)(u.Copy, {
                numberOfLines: 1,
                style: { fontSize: 12, maxWidth: 46 },
                children: n,
              }),
            (0, x.jsx)(I, {
              testID: s,
              accessibilityLabel: (0, b.L)('\u0645\u0642\u062f\u0627\u0631'),
              value: e,
              onChange: t,
              selectTextOnFocus: !0,
              onFocus: () => o?.(!0),
              onBlur: () => o?.(!1),
              style: {
                minHeight: 34,
                height: 34,
                width: n ? 40 : 48,
                paddingHorizontal: 2,
                paddingVertical: 0,
                borderWidth: 0,
                backgroundColor: 'transparent',
                textAlign: 'center',
                fontSize: 15,
                fontFamily: 'Vazirmatn_600SemiBold',
              },
            }),
          ],
        });
      }));
    var t = r(_d[0]),
      n = r(_d[1]),
      o = r(_d[2]),
      l = e(r(_d[3])),
      s = e(r(_d[4])),
      c = e(r(_d[5])),
      u = r(_d[6]),
      d = r(_d[7]),
      p = r(_d[8]),
      h = r(_d[9]),
      f = r(_d[10]),
      y = r(_d[11]),
      b = r(_d[12]),
      x = r(_d[13]);
    function v(e) {
      return e
        .replace(/[\u06f0-\u06f9]/g, (e) =>
          String(
            '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9'.indexOf(
              e,
            ),
          ),
        )
        .replace(/[\u0660-\u0669]/g, (e) =>
          String(
            '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669'.indexOf(
              e,
            ),
          ),
        )
        .replace(/[\u066b/]/g, '.')
        .replace(/[^\d.]/g, '')
        .replace(/(\..*)\./g, '$1')
        .slice(0, 14);
    }
    const j = (e) => {
        if (!e.trim()) return e;
        const t = Number(v(e));
        return Number.isFinite(t) ? String((0, n.tomanToRial)(t)) : e;
      },
      C = (e) => {
        if (!e.trim()) return e;
        const t = Number(v(e));
        return Number.isFinite(t) ? String((0, n.rialToToman)(t)) : e;
      };
    function S({
      value: e,
      onChange: l,
      decimals: s = !1,
      compact: d = !1,
      style: p,
      placeholder: f = '',
      onSelectionChange: y,
      suffix: b,
      shown: v = !1,
      money: S,
      ...I
    }) {
      const L =
          'rial' === (0, n.moneyUnit)() &&
          !v &&
          !1 === s &&
          (S ?? void 0 === b),
        k = (0, o.useRef)(null),
        z = L
          ? k.current && k.current.toman === e
            ? k.current.rial
            : j(e)
          : e,
        { colors: T } = (0, h.useTheme)(),
        D = (0, t.formatMoneyInput)(z, s),
        U = (0, o.useRef)(void 0),
        [w, F] = (0, o.useState)(void 0),
        M =
          d || null === b
            ? ''
            : (b ?? (L ? (0, n.tomanWord)() : (0, n.currencyUnit)())),
        H = '0' === f || '\u06f0' === f || '\u0660' === f,
        O = (e) => {
          if (!L) return void l(e);
          const t = C(e);
          ((k.current = { rial: e, toman: t }), l(t));
        },
        _ = (0, x.jsx)(u.Input, {
          ...I,
          style: [
            { writingDirection: 'ltr', textAlign: 'right' },
            d && {
              minHeight: 44,
              paddingHorizontal: 4,
              paddingVertical: 6,
              fontSize: 13,
            },
            !!M && { paddingLeft: M.length > 3 ? 62 : 48 },
            p,
          ],
          value: D,
          keyboardType: s ? 'decimal-pad' : 'number-pad',
          inputMode: s ? 'decimal' : 'numeric',
          placeholder: H ? '' : f,
          selection: w,
          onSelectionChange: (e) => {
            ((U.current = e.nativeEvent.selection), F(void 0), y?.(e));
          },
          onChangeText: (e) => {
            const n = (0, t.editMoneyInput)(D, e, s, U.current);
            ((U.current = n.selection), F(n.selection), O(n.value));
          },
        });
      return M
        ? (0, x.jsxs)(c.default, {
            style: { justifyContent: 'center' },
            children: [
              _,
              (0, x.jsx)(c.default, {
                pointerEvents: 'none',
                style: {
                  position: 'absolute',
                  left: 14,
                  top: 0,
                  bottom: 0,
                  justifyContent: 'center',
                },
                children: (0, x.jsx)(u.Copy, {
                  testID: I.testID ? I.testID + '-unit' : void 0,
                  style: { fontSize: 13, lineHeight: 20, color: T.muted },
                  children: M,
                }),
              }),
            ],
          })
        : _;
    }
    function I(e) {
      return (0, x.jsx)(S, { ...e, decimals: 3, suffix: null });
    }
  },
  614,
  [615, 435, 2, 232, 240, 99, 407, 616, 617, 382, 431, 580, 311, 338],
);
