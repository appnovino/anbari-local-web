// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 727; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.Countdown = function ({ endsAt: u, onExpire: f }) {
        const { colors: h } = (0, n.useTheme)(),
          [L, v] = (0, t.useState)(() => s(u));
        if (
          ((0, t.useEffect)(() => {
            v(s(u));
            const t = setInterval(() => {
              const o = s(u);
              (v(o), o || (clearInterval(t), f?.()));
            }, 3e4);
            return () => clearInterval(t);
          }, [u, f]),
          !L)
        )
          return null;
        const y = Math.floor(L / 864e5),
          b = Math.floor((L % 864e5) / 36e5),
          M = Math.floor((L % 36e5) / 6e4);
        return (0, c.jsx)(o.Copy, {
          accessibilityLiveRegion: 'polite',
          style: { fontSize: 12, color: h.muted },
          children: (0, l.L)(
            '\u0632\u0645\u0627\u0646 \u0628\u0627\u0642\u06cc\u200c\u0645\u0627\u0646\u062f\u0647: {days} \u0631\u0648\u0632\u060c {hours} \u0633\u0627\u0639\u062a \u0648 {minutes} \u062f\u0642\u06cc\u0642\u0647',
            {
              days: y.toLocaleString((0, l.numberLocale)()),
              hours: b.toLocaleString((0, l.numberLocale)()),
              minutes: M.toLocaleString((0, l.numberLocale)()),
            },
          ),
        });
      }));
    var t = r(d[0]),
      o = r(d[1]),
      n = r(d[2]),
      l = r(d[3]),
      c = r(d[4]);
    function s(t) {
      return Math.max(0, new Date(t).getTime() - Date.now());
    }
  },
  727,
  [2, 407, 382, 311, 338],
);
