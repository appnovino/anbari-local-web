// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 807; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'rewardWhat', {
        enumerable: !0,
        get: function () {
          return r;
        },
      }),
      Object.defineProperty(e, 'rewardTitle', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.rewardSentence = function (u) {
        return [
          (0, n.L)(
            '\u0628\u0627 {points} \u0627\u0645\u062a\u06cc\u0627\u0632\u060c {what}',
            { points: o(u.points), what: r(u) },
          ),
          'percent' === u.kind && u.capToman
            ? (0, n.L)('\u062a\u0627 \u0633\u0642\u0641 {toman}', {
                toman: (0, t.money)(u.capToman, { full: !0, hint: !1 }),
              })
            : '',
          u.minToman
            ? (0, n.L)(
                '\u0628\u0631\u0627\u06cc \u0641\u0627\u06a9\u062a\u0648\u0631 \u0627\u0632 {toman} \u0628\u0647 \u0628\u0627\u0644\u0627',
                { toman: (0, t.money)(u.minToman, { full: !0, hint: !1 }) },
              )
            : '',
        ]
          .filter(Boolean)
          .join('\u060c ');
      }),
      (e.clubDiscountLabel = function (r, u, c) {
        return r && u > 0
          ? 'percent' === r.kind &&
            r.capToman &&
            void 0 !== c &&
            c >= r.capToman
            ? (0, n.L)(
                '\u062a\u062e\u0641\u06cc\u0641 \u0628\u0627\u0634\u06af\u0627\u0647: \u062a\u0627 \u0633\u0642\u0641 {toman} ({n} \u0627\u0645\u062a\u06cc\u0627\u0632)',
                {
                  toman: (0, t.money)(r.capToman, { full: !0, hint: !1 }),
                  n: o(u),
                },
              )
            : 'percent' === r.kind
              ? (0, n.L)(
                  '\u062a\u062e\u0641\u06cc\u0641 \u0628\u0627\u0634\u06af\u0627\u0647: {p}\u066a ({n} \u0627\u0645\u062a\u06cc\u0627\u0632)',
                  { p: (0, n.localDigits)(String(r.value)), n: o(u) },
                )
              : (0, n.L)(
                  '\u062a\u062e\u0641\u06cc\u0641 \u0628\u0627\u0634\u06af\u0627\u0647 ({n} \u0627\u0645\u062a\u06cc\u0627\u0632)',
                  { n: o(u) },
                )
          : (0, n.L)(
              '\u062a\u062e\u0641\u06cc\u0641 \u0628\u0627\u0634\u06af\u0627\u0647',
            );
      }),
      Object.defineProperty(e, 'canGetLine', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.rewardChip = function (r, c) {
        const l = (0, n.L)('{n} \u0627\u0645\u062a\u06cc\u0627\u0632', {
          n: o(r.points),
        });
        return 'amount' === r.kind && c > 0 && c < r.value
          ? (0, n.L)(
              '\u0641\u0642\u0637 {toman} \u062a\u062e\u0641\u06cc\u0641',
              { toman: (0, t.money)(c, { full: !0, hint: !1 }) },
            ) +
              ' \xb7 ' +
              l
          : u(r) + ' \xb7 ' + l;
      }),
      Object.defineProperty(e, 'minimumLine', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'missingLine', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var n = _r(d[0]),
      t = _r(d[1]);
    const o = (t) => Math.round(t).toLocaleString((0, n.numberLocale)()),
      r = (o) =>
        'percent' === o.kind
          ? (0, n.L)('{n}\u066a \u062a\u062e\u0641\u06cc\u0641', {
              n: (0, n.localDigits)(String(o.value)),
            })
          : (0, n.L)('{toman} \u062a\u062e\u0641\u06cc\u0641', {
              toman: (0, t.money)(o.value, { full: !0, hint: !1 }),
            }),
      u = (n) => n.name || r(n);
    const c = (t) =>
      t
        ? (0, n.L)(
            '\u0645\u06cc\u200c\u062a\u0648\u0627\u0646\u062f {what} \u0628\u06af\u06cc\u0631\u062f',
            { what: u(t) },
          )
        : '';
    const l = (o) =>
        (0, n.L)(
          '\u0628\u0631\u0627\u06cc {what}\u060c \u0641\u0627\u06a9\u062a\u0648\u0631 \u0628\u0627\u06cc\u062f \u0627\u0632 {toman} \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627\u0634\u062f',
          {
            what: u(o),
            toman: (0, t.money)(o.minToman || 0, { full: !0, hint: !1 }),
          },
        ),
      f = (t, r) =>
        (0, n.L)(
          '{n} \u0627\u0645\u062a\u06cc\u0627\u0632 \u062a\u0627 {what}',
          { n: o(t), what: u(r) },
        );
  },
  807,
  [311, 435],
);
