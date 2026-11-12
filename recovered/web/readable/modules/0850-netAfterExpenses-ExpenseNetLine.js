// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 850; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.netAfterExpenses = x),
      (_e.ExpenseNetLine = function ({
        shop: e,
        from: h,
        to: j,
        profit: b,
        incomplete: _,
        testID: z,
        preview: v,
      }) {
        const { colors: w } = (0, s.useTheme)(),
          C = (0, l.useSwr)(
            void 0 === v
              ? (0, l.scoped)(e.id, 'expenses:' + h + ':' + j)
              : null,
            () => (0, f.listExpenses)(e, h, j),
          ),
          D = v ?? C.data?.totals.totalToman;
        if (void 0 === D) return null;
        const S = x(b, D),
          H = { fontSize: 12, lineHeight: 18, color: w.muted };
        return (0, y.jsxs)(t.default, {
          testID: z + '-net',
          accessibilityRole: 'button',
          accessibilityLabel: (0, c.L)(
            '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627',
          ),
          onPress: () => (0, p.openExpenses)(),
          style: ({ pressed: e }) => ({
            gap: 4,
            paddingVertical: 10,
            paddingHorizontal: 12,
            borderRadius: 12,
            backgroundColor: w.soft,
            opacity: e ? 0.85 : 1,
          }),
          children: [
            (0, y.jsxs)(n.default, {
              style: {
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                gap: 8,
              },
              children: [
                (0, y.jsx)(o.Copy, {
                  style: H,
                  children: (0, c.L)(
                    '\u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627\u06cc \u0647\u0645\u06cc\u0646 \u0628\u0627\u0632\u0647 (\u06a9\u0631\u0627\u06cc\u0647\u060c \u0642\u0628\u0636\u060c \u0642\u0633\u0637\u2026)',
                  ),
                }),
                (0, y.jsx)(o.Copy, {
                  testID: z + '-expenses',
                  style: {
                    fontSize: 13,
                    lineHeight: 20,
                    fontFamily: 'Vazirmatn_600SemiBold',
                  },
                  children: (0, u.money)(D, { full: !0, hint: !1 }),
                }),
              ],
            }),
            (0, y.jsxs)(n.default, {
              style: {
                flexDirection: 'row-reverse',
                justifyContent: 'space-between',
                gap: 8,
              },
              children: [
                (0, y.jsx)(o.Copy, {
                  style: {
                    fontSize: 14,
                    lineHeight: 22,
                    fontFamily: 'Vazirmatn_700Bold',
                  },
                  children: (0, c.L)(
                    '\u0633\u0648\u062f \u067e\u0633 \u0627\u0632 \u0647\u0632\u06cc\u0646\u0647\u200c\u0647\u0627',
                  ),
                }),
                (0, y.jsx)(o.Copy, {
                  testID: z + '-net-amount',
                  style: {
                    fontSize: 15,
                    lineHeight: 22,
                    fontFamily: 'Vazirmatn_700Bold',
                    color: _ ? w.warning : S < 0 ? w.danger : w.text,
                  },
                  children: _
                    ? '\u2014'
                    : (0, u.money)(S, { full: !0, hint: !1 }),
                }),
              ],
            }),
          ],
        });
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = r(d[2]),
      s = r(d[3]),
      l = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      f = r(d[7]),
      p = r(d[8]),
      y = r(d[9]);
    function x(e, t) {
      return e - t;
    }
  },
  850,
  [232, 99, 407, 382, 489, 311, 435, 522, 623, 338],
);
