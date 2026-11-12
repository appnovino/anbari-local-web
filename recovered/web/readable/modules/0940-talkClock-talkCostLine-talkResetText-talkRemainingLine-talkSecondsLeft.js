// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 940; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.talkClock = n),
      (e.talkCostLine = function (o, c, s) {
        const l = Math.max(0, Number.isFinite(c) ? c : 0),
          u = (0, t.localDigits)(l.toFixed(l < 1 ? 3 : 2)),
          h = (t) =>
            /[\u06f0-\u06f9\u0660-\u0669]/.test(t)
              ? t.replace('.', '\u066b')
              : t,
          k =
            null != s && Number.isFinite(s) && s >= 0
              ? ` \xb7 ${(0, t.L)('\u067e\u0627\u0633\u062e {seconds} \u062b', { seconds: h((0, t.localDigits)((s / 1e3).toFixed(1))) })}`
              : '';
        return `${n(o)} \xb7 ${h(u)} ${(0, t.L)('\u062f\u0644\u0627\u0631')}${k}`;
      }),
      (e.talkResetText = c),
      (e.talkRemainingLine = function (s, l = 0) {
        const u = { day: s.day - l, week: s.week - l, month: s.month - l },
          h = Math.min(u.day, u.week, u.month);
        if (h <= 0) {
          const n = u.day <= 0 ? 'day' : u.week <= 0 ? 'week' : 'month';
          return [
            'day' === n
              ? (0, t.L)(
                  '\u0633\u0647\u0645 \u0627\u0645\u0631\u0648\u0632 \u062a\u0645\u0627\u0645 \u0634\u062f',
                )
              : 'week' === n
                ? (0, t.L)(
                    '\u0633\u0647\u0645 \u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 \u062a\u0645\u0627\u0645 \u0634\u062f',
                  )
                : (0, t.L)(
                    '\u0633\u0647\u0645 \u0627\u06cc\u0646 \u0645\u0627\u0647 \u062a\u0645\u0627\u0645 \u0634\u062f',
                  ),
            c(n),
          ].join((0, t.partSep)());
        }
        const k = (0, t.L)(
            '\u0627\u0645\u0631\u0648\u0632 {time} \u062f\u0642\u06cc\u0642\u0647 \u0645\u0627\u0646\u062f\u0647',
            { time: n(Math.min(u.day, h)) },
          ),
          L =
            u.month < u.week
              ? (0, t.L)(
                  '\u0627\u06cc\u0646 \u0645\u0627\u0647 {n} \u062f\u0642\u06cc\u0642\u0647',
                  { n: o(u.month) },
                )
              : (0, t.L)(
                  '\u0627\u06cc\u0646 \u0647\u0641\u062a\u0647 {n} \u062f\u0642\u06cc\u0642\u0647',
                  { n: o(u.week) },
                );
        return [k, L].join((0, t.partSep)());
      }),
      (e.talkSecondsLeft = function (t, n = 0) {
        return Math.max(0, Math.min(t.day, t.week, t.month) - n);
      }));
    var t = r(d[0]);
    function n(n) {
      const o = Math.max(0, Math.floor(n));
      return (0, t.localDigits)(
        `${Math.floor(o / 60)}:${String(o % 60).padStart(2, '0')}`,
      );
    }
    const o = (n) =>
      (0, t.localDigits)(String(Math.max(0, Math.floor(n / 60))));
    function c(n) {
      return 'day' === n
        ? (0, t.L)(
            '\u0627\u0632 \u0641\u0631\u062f\u0627 \u062f\u0648\u0628\u0627\u0631\u0647',
          )
        : 'week' === n
          ? (0, t.L)(
              '\u0627\u0632 \u0634\u0646\u0628\u0647 \u062f\u0648\u0628\u0627\u0631\u0647',
            )
          : (0, t.L)(
              '\u0627\u0632 \u0627\u0648\u0644 \u0645\u0627\u0647 \u0628\u0639\u062f \u062f\u0648\u0628\u0627\u0631\u0647',
            );
    }
  },
  940,
  [311],
);
