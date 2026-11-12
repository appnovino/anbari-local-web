// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 894; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.DayLine = function ({ id: e, value: x, onChange: b }) {
        const { colors: j } = (0, u.useTheme)(),
          [C, D] = (0, t.useState)(!1),
          S =
            (0, y.partsToIso)(x) === (0, y.partsToIso)((0, y.todayParts)())
              ? (0, c.L)('\u0627\u0645\u0631\u0648\u0632')
              : `${(0, c.localDigits)(String(x.day))} ${(0, h.calMonthNames)()[x.month - 1]} ${(0, c.localDigits)(String(x.year))}`;
        return (0, p.jsxs)(l.default, {
          style: { gap: 8 },
          children: [
            (0, p.jsxs)(l.default, {
              testID: e + '-line',
              style: {
                minHeight: 44,
                paddingHorizontal: 12,
                borderRadius: 12,
                flexDirection: 'row-reverse',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 8,
                backgroundColor: j.soft,
                borderWidth: n.default.hairlineWidth,
                borderColor: j.line,
              },
              children: [
                (0, p.jsxs)(s.Copy, {
                  numberOfLines: 1,
                  style: { flexShrink: 1, fontSize: 13.5, lineHeight: 22 },
                  children: [
                    (0, p.jsxs)(s.Copy, {
                      style: { color: j.muted, fontSize: 13.5 },
                      children: [
                        (0, c.L)('\u062a\u0627\u0631\u06cc\u062e'),
                        ': ',
                      ],
                    }),
                    S,
                  ],
                }),
                (0, p.jsx)(f.SmallKey, {
                  testID: e + '-change',
                  kind: 'text',
                  label: C
                    ? (0, c.L)('\u0628\u0633\u062a\u0646')
                    : (0, c.L)('\u062a\u063a\u06cc\u06cc\u0631'),
                  onPress: () => D((e) => !e),
                }),
              ],
            }),
            C &&
              (0, p.jsx)(o.JalaliDateField, {
                id: e,
                dateOnly: !0,
                quick: 'past',
                value: x,
                onChange: (e) => b(e),
              }),
          ],
        });
      }));
    var t = r(d[0]),
      n = e(r(d[1])),
      l = e(r(d[2])),
      s = r(d[3]),
      o = r(d[4]),
      u = r(d[5]),
      c = r(d[6]),
      h = r(d[7]),
      f = r(d[8]),
      y = r(d[9]),
      p = r(d[10]);
  },
  894,
  [2, 17, 99, 407, 619, 382, 311, 440, 517, 529, 338],
);
