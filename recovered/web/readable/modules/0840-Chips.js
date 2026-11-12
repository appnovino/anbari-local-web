// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 840; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.Chips = function ({
        items: e,
        value: b,
        onChange: h,
        style: p,
        testID: x,
        label: j,
        numberLine: v = !1,
      }) {
        const { colors: S } = (0, c.useTheme)();
        return (0, y.jsx)(n.ScrollView, {
          horizontal: !0,
          ...f.noSwipe,
          showsHorizontalScrollIndicator: !1,
          testID: x,
          accessibilityLabel: j,
          style: [{ flexGrow: 0 }, p],
          contentContainerStyle: { flexGrow: 1, justifyContent: 'flex-end' },
          children: (0, y.jsx)(l.default, {
            accessibilityRole: 'tablist',
            style: v
              ? { ...o.NUMBER_LINE, gap: 6 }
              : { flexDirection: 'row-reverse', gap: 6 },
            children: e.map((e) => {
              const l = e.value === b;
              return (0, y.jsxs)(
                t.default,
                {
                  testID: e.testID,
                  accessibilityRole: 'tab',
                  accessibilityState: { selected: l },
                  onPress: () => h(e.value),
                  style: ({ pressed: e }) => ({
                    minHeight: 34,
                    paddingHorizontal: 14,
                    borderRadius: 17,
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    backgroundColor: l ? S.brand[1] : S.soft,
                    opacity: e ? 0.8 : 1,
                  }),
                  children: [
                    l && (0, y.jsx)(u.BrandFill, { radius: 17 }),
                    (0, y.jsx)(s.Copy, {
                      numberOfLines: 1,
                      style: {
                        fontSize: 13,
                        lineHeight: 20,
                        ...(l ? { fontFamily: 'Vazirmatn_600SemiBold' } : {}),
                        color: l ? S.onBrand : S.text,
                      },
                      children: e.label,
                    }),
                  ],
                },
                String(e.value),
              );
            }),
          }),
        });
      }));
    var t = e(r(d[0])),
      l = e(r(d[1])),
      n = r(d[2]),
      s = r(d[3]),
      o = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      f = r(d[7]),
      y = r(d[8]);
  },
  840,
  [232, 99, 380, 407, 617, 382, 410, 384, 338],
);
