// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 842; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.MoneyLine = function ({ toman: e, style: n, testID: y, danger: b }) {
        const [f, _] = (0, t.useState)(!1),
          h = (0, l.moneyShort)(e),
          j = (0, l.money)(e, { full: !0, hint: !1 });
        return (0, c.jsx)(s.default, {
          testID: y,
          accessibilityRole: 'button',
          accessibilityLabel: j,
          accessibilityHint: (0, o.L)(
            '\u0628\u0631\u0627\u06cc \u062f\u06cc\u062f\u0646 \u0639\u062f\u062f \u06a9\u0627\u0645\u0644 \u0628\u0632\u0646',
          ),
          hitSlop: 6,
          onPress: () => _((e) => !e),
          children: (0, c.jsx)(u.Copy, {
            numberOfLines: 1,
            adjustsFontSizeToFit: !0,
            style: [n, b ? { color: b } : null],
            children: f ? j : h,
          }),
        });
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]),
      s = (e = n) && e.__esModule ? e : { default: e },
      l = r(d[2]),
      o = r(d[3]),
      u = r(d[4]),
      c = r(d[5]);
  },
  842,
  [2, 232, 435, 311, 407, 338],
);
