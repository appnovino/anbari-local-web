// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 845; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.unknownCostText = f),
      (_e.UnknownCostNote = function ({ summary: e, onPress: h, onChip: y }) {
        const { colors: w } = (0, l.useTheme)(),
          x = e?.totals || e,
          b = Number(e?.unknownCostCount) || 0,
          j = x?.unpricedSoldUnits || 0,
          L = x?.uncostedSoldUnits || 0,
          S = x?.unpricedReceivedUnits || 0,
          v = (e) => (e ? (0, c.formatGrouped)(e) : ''),
          C = [
            [
              'sale',
              j > 0
                ? v(x?.unpricedSoldProducts)
                  ? (0, u.L)(
                      '{n} \u06a9\u0627\u0644\u0627: \u0641\u0631\u0648\u0634 \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a',
                      { n: v(x?.unpricedSoldProducts) },
                    )
                  : (0, u.L)(
                      '\u0641\u0631\u0648\u0634 \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a',
                    )
                : null,
            ],
            [
              'cost',
              L > 0
                ? v(x?.uncostedSoldProducts)
                  ? (0, u.L)(
                      '{n} \u06a9\u0627\u0644\u0627: \u0641\u0631\u0648\u0634 \u0628\u062f\u0648\u0646 \u0628\u0647\u0627\u06cc \u062e\u0631\u06cc\u062f',
                      { n: v(x?.uncostedSoldProducts) },
                    )
                  : (0, u.L)(
                      '\u0641\u0631\u0648\u0634 \u0628\u062f\u0648\u0646 \u0628\u0647\u0627\u06cc \u062e\u0631\u06cc\u062f',
                    )
                : void 0 === x?.uncostedSoldUnits && b > 0
                  ? f(b)
                  : null,
            ],
            [
              'received',
              S > 0
                ? v(x?.unpricedReceivedProducts)
                  ? (0, u.L)(
                      '{n} \u06a9\u0627\u0644\u0627: \u0648\u0631\u0648\u062f \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                      { n: v(x?.unpricedReceivedProducts) },
                    )
                  : (0, u.L)(
                      '\u0648\u0631\u0648\u062f \u0628\u062f\u0648\u0646 \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f',
                    )
                : null,
            ],
          ].filter((e) => !!e[1]);
        if (!C.length) return null;
        const P =
            j > 0
              ? (0, u.L)(
                  '\u062a\u0639\u062f\u0627\u062f \u062b\u0628\u062a \u0634\u062f\u0647\u061b \u0645\u0628\u0644\u063a \u06a9\u0644 \u0641\u0631\u0648\u0634 \u0648 \u0633\u0648\u062f \u062a\u0627 \u062a\u06a9\u0645\u06cc\u0644 \u0642\u06cc\u0645\u062a \u0627\u06cc\u0646 \u0641\u0631\u0648\u0634\u200c\u0647\u0627 \u0645\u0634\u062e\u0635 \u0646\u06cc\u0633\u062a.',
                )
              : L > 0 || b > 0
                ? (0, u.L)(
                    '\u062a\u0639\u062f\u0627\u062f \u062b\u0628\u062a \u0634\u062f\u0647\u061b \u0633\u0648\u062f \u06a9\u0644 \u062a\u0627 \u062a\u06a9\u0645\u06cc\u0644 \u0628\u0647\u0627\u06cc \u062e\u0631\u06cc\u062f \u0627\u06cc\u0646 \u0641\u0631\u0648\u0634\u200c\u0647\u0627 \u0645\u0634\u062e\u0635 \u0646\u06cc\u0633\u062a.',
                  )
                : (0, u.L)(
                    '\u062a\u0639\u062f\u0627\u062f \u062b\u0628\u062a \u0634\u062f\u0647\u061b \u0645\u0628\u0644\u063a \u062e\u0631\u06cc\u062f \u062a\u0627 \u062a\u06a9\u0645\u06cc\u0644 \u0642\u06cc\u0645\u062a \u0627\u06cc\u0646 \u0648\u0631\u0648\u062f\u0647\u0627 \u0645\u0634\u062e\u0635 \u0646\u06cc\u0633\u062a.',
                  ),
          k = {
            borderWidth: 1,
            borderColor: w.warningBorder,
            backgroundColor: w.warningSoft,
            borderRadius: 8,
            paddingHorizontal: 8,
            paddingVertical: 4,
          },
          R = { fontSize: 11, lineHeight: 18, color: w.warning },
          _ = (0, p.jsxs)(o.default, {
            style: { gap: 6 },
            children: [
              (0, p.jsx)(o.default, {
                style: {
                  flexDirection: 'row-reverse',
                  flexWrap: 'wrap',
                  gap: 6,
                },
                children: C.map(([e, l]) =>
                  y
                    ? (0, p.jsxs)(
                        n.default,
                        {
                          testID: 'unknown-cost-chip-' + e,
                          accessibilityRole: 'button',
                          accessibilityLabel: l,
                          hitSlop: 4,
                          onPress: () => y(e),
                          style: ({ pressed: e }) => [
                            k,
                            {
                              flexDirection: 'row-reverse',
                              alignItems: 'center',
                              gap: 4,
                              opacity: e ? 0.8 : 1,
                            },
                          ],
                          children: [
                            (0, p.jsx)(t.Copy, { style: R, children: l }),
                            (0, p.jsx)(s.Icon, {
                              name: 'chevron',
                              size: 12,
                              color: w.warning,
                            }),
                          ],
                        },
                        e,
                      )
                    : (0, p.jsx)(
                        o.default,
                        {
                          style: k,
                          children: (0, p.jsx)(t.Copy, {
                            style: R,
                            children: l,
                          }),
                        },
                        e,
                      ),
                ),
              }),
              (0, p.jsx)(t.Copy, {
                style: { fontSize: 12, lineHeight: 20, color: w.warning },
                children: P,
              }),
            ],
          });
        return h
          ? (0, p.jsx)(n.default, {
              testID: 'unknown-cost-note',
              accessibilityRole: 'button',
              onPress: h,
              children: _,
            })
          : (0, p.jsx)(o.default, { testID: 'unknown-cost-note', children: _ });
      }));
    var n = e(r(d[0])),
      o = e(r(d[1])),
      t = r(d[2]),
      s = r(d[3]),
      l = r(d[4]),
      c = r(d[5]),
      u = r(d[6]),
      p = r(d[7]);
    function f(e) {
      return (0, u.L)(
        '\u0633\u0648\u062f {count} \u06a9\u0627\u0644\u0627 \u0645\u0639\u0644\u0648\u0645 \u0646\u06cc\u0633\u062a\u061b \u0642\u06cc\u0645\u062a \u062e\u0631\u06cc\u062f\u0634\u0627\u0646 \u0631\u0627 \u062b\u0628\u062a \u06a9\u0646',
        { count: (0, c.formatGrouped)(e) },
      );
    }
  },
  845,
  [232, 99, 407, 385, 382, 434, 311, 338],
);
