// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 799; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.PriceSheet = b),
      (_e.PriceChoice = function ({
        product: e,
        price: n,
        onPick: s,
        disabled: p = !1,
        testID: x = 'price-choice',
        side: C = 'flex-end',
      }) {
        const { colors: S } = (0, h.useTheme)(),
          [j, k] = (0, t.useState)(!1),
          z = (0, l.priceChoiceOf)(e, n);
        if (!z) return null;
        const _ = z.typed
          ? (0, c.L)('\u0642\u06cc\u0645\u062a \u062f\u0633\u062a\u06cc')
          : z.options.find((e) => e.key === z.current)?.name ||
            (0, c.L)('\u06a9\u062f\u0627\u0645 \u0642\u06cc\u0645\u062a\u061f');
        return (0, y.jsxs)(y.Fragment, {
          children: [
            (0, y.jsxs)(o.default, {
              testID: x,
              accessibilityRole: 'button',
              accessibilityLabel:
                (0, c.L)(
                  '\u06a9\u062f\u0627\u0645 \u0642\u06cc\u0645\u062a\u061f',
                ) +
                '\u060c ' +
                _,
              disabled: p,
              hitSlop: { top: 6, bottom: 6, left: 4, right: 4 },
              onPress: () => k(!0),
              style: ({ pressed: e }) => ({
                alignSelf: C,
                maxWidth: '100%',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                gap: 4,
                minHeight: 32,
                paddingHorizontal: 12,
                borderRadius: 16,
                borderWidth: 1,
                borderColor: S.line,
                backgroundColor: e ? S.accentSoft : S.surface,
                opacity: p ? 0.5 : 1,
              }),
              children: [
                (0, y.jsx)(f.Copy, {
                  testID: x + '-name',
                  numberOfLines: 1,
                  style: {
                    flexShrink: 1,
                    fontSize: 12,
                    lineHeight: 20,
                    color: S.accent,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: _,
                }),
                (0, y.jsx)(u.Icon, { name: 'down', size: 11, color: S.accent }),
              ],
            }),
            j &&
              (0, y.jsx)(b, {
                product: e,
                options: z.options,
                current: z.current,
                onClose: () => k(!1),
                onPick: (e) => {
                  const t = z.options.find((t) => t.key === e);
                  (k(!1), t && 'number' == typeof t.price && s(e, t.price));
                },
              }),
          ],
        });
      }));
    var t = r(d[0]),
      o = e(r(d[1])),
      n = e(r(d[2])),
      c = r(d[3]),
      s = r(d[4]),
      l = r(d[5]),
      u = r(d[6]),
      p = r(d[7]),
      f = r(d[8]),
      h = r(d[9]),
      y = r(d[10]);
    function b({
      product: e,
      options: t,
      current: l,
      question: u,
      onPick: b,
      onClose: x,
    }) {
      const { colors: C } = (0, h.useTheme)();
      return (0, y.jsx)(p.Sheet, {
        visible: !0,
        title: (0, c.L)(
          '\u06a9\u062f\u0627\u0645 \u0642\u06cc\u0645\u062a\u061f',
        ),
        onClose: x,
        children: (0, y.jsxs)(n.default, {
          testID: 'tier-sheet',
          accessibilityRole: 'radiogroup',
          style: { gap: 8 },
          children: [
            (0, y.jsx)(f.Copy, {
              style: { fontSize: 13, lineHeight: 22, color: C.muted },
              children:
                u ??
                (0, c.L)(
                  '{name} {n} \u0642\u06cc\u0645\u062a \u062f\u0627\u0631\u062f\u061b \u06a9\u062f\u0627\u0645 \u0631\u0627 \u0628\u0632\u0646\u0645\u061f',
                  { name: e.name, n: (0, c.localDigits)(t.length) },
                ),
            }),
            t.map((e) => {
              const t = e.key === l;
              return (0, y.jsx)(
                o.default,
                {
                  testID: 'tier-option-' + e.key,
                  accessibilityRole: 'radio',
                  accessibilityState: { selected: t },
                  onPress: () => b(e.key),
                  style: ({ pressed: e }) => ({
                    minHeight: 48,
                    paddingHorizontal: 14,
                    paddingVertical: 8,
                    justifyContent: 'center',
                    borderRadius: 14,
                    borderWidth: t ? 1.5 : 1,
                    borderColor: t ? C.accent : C.line,
                    backgroundColor: t ? C.accentSoft : C.surface,
                    opacity: e ? 0.75 : 1,
                  }),
                  children: (0, y.jsx)(f.Copy, {
                    style: {
                      fontSize: 15,
                      lineHeight: 24,
                      color: t ? C.accent : C.text,
                      fontFamily: t
                        ? 'Vazirmatn_700Bold'
                        : 'Vazirmatn_400Regular',
                    },
                    children:
                      e.name +
                      ' ' +
                      (0, s.money)(e.price, { full: !0, hint: !1 }),
                  }),
                },
                e.key,
              );
            }),
          ],
        }),
      });
    }
  },
  799,
  [2, 232, 99, 311, 435, 464, 385, 539, 407, 382, 338],
);
