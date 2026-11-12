// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 872; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PackChip = function ({ product: e, onPress: t }) {
        const { colors: c } = (0, y.useTheme)(),
          o = !!e.packUnit && !!e.packSize;
        if (!o && !t) return null;
        const u = o
          ? '\ud83d\udce6 ' +
            (0, s.L)('\u0647\u0631 {pack} {size} {unit}', {
              pack: (0, f.unitName)(e.packUnit),
              size: (0, s.localDigits)(e.packSize),
              unit: (0, f.unitName)(e.unit),
            })
          : '+ ' + (0, s.L)('\u0628\u0627\u06a9\u0633');
        return (0, k.jsx)(n.default, {
          testID: 'product-pack-chip',
          accessibilityRole: 'button',
          disabled: !t,
          onPress: t,
          style: ({ pressed: e }) => ({
            alignSelf: 'flex-end',
            paddingHorizontal: 10,
            minHeight: 28,
            borderRadius: 999,
            justifyContent: 'center',
            borderWidth: 1,
            borderStyle: o ? 'solid' : 'dashed',
            borderColor: o ? c.line : c.accent,
            backgroundColor: e ? c.accentSoft : o ? c.soft : 'transparent',
          }),
          children: (0, k.jsx)(l.Copy, {
            style: {
              fontSize: 12,
              lineHeight: 18,
              color: o ? c.text : c.accent,
              fontFamily: 'Vazirmatn_600SemiBold',
            },
            children: u,
          }),
        });
      }),
      (_e.PackSheet = function ({
        visible: e,
        product: x,
        onClose: b,
        onSave: j,
      }) {
        const { colors: z } = (0, y.useTheme)(),
          C = S.filter((e) => e !== x.unit),
          [v, D] = (0, t.useState)('carton'),
          [I, P] = (0, t.useState)(''),
          [_, U] = (0, t.useState)(!1),
          [L, N] = (0, t.useState)('');
        (0, t.useEffect)(() => {
          e &&
            (D(
              x.packUnit && C.includes(x.packUnit)
                ? x.packUnit
                : C.includes('carton')
                  ? 'carton'
                  : C[0],
            ),
            P(x.packSize ? String(x.packSize) : ''),
            N(''));
        }, [e, x.packUnit, x.packSize]);
        const R = (() => {
          try {
            const e = (0, o.parseQuantity)(I);
            return e > 1 || (x.unit && 'piece' !== x.unit) ? e : null;
          } catch {
            return null;
          }
        })();
        async function B(e) {
          if (!_) {
            (U(!0), N(''));
            try {
              (await j(e), b());
            } catch (e) {
              N((0, h.errorText)(e));
            } finally {
              U(!1);
            }
          }
        }
        return (0, k.jsx)(u.Sheet, {
          visible: e,
          title: (0, s.L)(
            '\u0647\u0631 \u0628\u0627\u06a9\u0633/\u06a9\u0627\u0631\u062a\u0646/\u0634\u0644 \u0686\u0646\u062f \u062a\u0627\u0633\u062a\u061f',
          ),
          onClose: b,
          children: (0, k.jsxs)(c.default, {
            style: { gap: 12 },
            children: [
              (0, k.jsx)(c.default, {
                style: { flexDirection: 'row-reverse', gap: 8 },
                children: C.map((e) =>
                  (0, k.jsx)(
                    n.default,
                    {
                      testID: 'product-pack-unit-' + e,
                      accessibilityRole: 'button',
                      accessibilityState: { selected: e === v },
                      onPress: () => D(e),
                      style: {
                        flex: 1,
                        minHeight: 40,
                        borderRadius: 12,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: e === v ? z.accent : z.line,
                        backgroundColor: e === v ? z.accentSoft : z.soft,
                      },
                      children: (0, k.jsx)(l.Copy, {
                        style: {
                          fontSize: 14,
                          color: e === v ? z.accent : z.text,
                          fontFamily: 'Vazirmatn_600SemiBold',
                        },
                        children: (0, f.unitName)(e),
                      }),
                    },
                    e,
                  ),
                ),
              }),
              (0, k.jsxs)(c.default, {
                style: {
                  flexDirection: 'row-reverse',
                  alignItems: 'center',
                  gap: 8,
                },
                children: [
                  (0, k.jsx)(l.Copy, {
                    style: { fontSize: 14 },
                    children: (0, s.L)('\u0647\u0631 {pack} =', {
                      pack: (0, f.unitName)(v),
                    }),
                  }),
                  (0, k.jsx)(p.QuantityInput, {
                    testID: 'product-pack-size',
                    autoFocus: !0,
                    value: I,
                    onChange: P,
                    placeholder: '24',
                    style: { flex: 1, minWidth: 0, textAlign: 'center' },
                  }),
                  (0, k.jsx)(l.Copy, {
                    style: { fontSize: 14 },
                    children: (0, f.unitName)(x.unit),
                  }),
                ],
              }),
              !!L &&
                (0, k.jsx)(l.Copy, {
                  accessibilityRole: 'alert',
                  style: { color: z.danger },
                  children: L,
                }),
              (0, k.jsx)(l.Button, {
                testID: 'product-pack-save',
                disabled: _ || null === R,
                onPress: () => {
                  B({ packUnit: v, packSize: R });
                },
                children: (0, s.L)('\u0630\u062e\u06cc\u0631\u0647'),
              }),
              !!x.packSize &&
                (0, k.jsx)(l.Button, {
                  testID: 'product-pack-remove',
                  ghost: !0,
                  disabled: _,
                  onPress: () => {
                    B(null);
                  },
                  children: (0, s.L)(
                    '\u062d\u0630\u0641 \u0628\u0627\u06a9\u0633',
                  ),
                }),
            ],
          }),
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      c = e(r(d[2])),
      o = r(d[3]),
      s = r(d[4]),
      l = r(d[5]),
      u = r(d[6]),
      p = r(d[7]),
      f = r(d[8]),
      y = r(d[9]),
      h = r(d[10]),
      k = r(d[11]);
    const S = ['box', 'carton', 'pack'];
  },
  872,
  [2, 232, 99, 431, 311, 407, 539, 614, 585, 382, 690, 338],
);
