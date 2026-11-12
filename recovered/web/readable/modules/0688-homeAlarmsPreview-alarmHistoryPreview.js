// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 688; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.homeAlarmsPreview = function (n, u = Date.now()) {
        const o = /[?&]dev-home-reminders=(\d+)/.exec(n);
        if (!o) return null;
        const l = [
          {
            key: 'cheque:1',
            kind: 'cheque',
            refId: '1',
            at: u - 24e5,
            fired: !0,
            title: (0, t.L)(
              '\u0686\u06a9 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc: {name}',
              {
                name: '\u0622\u0642\u0627\u06cc \u0631\u0636\u0627\u06cc\u06cc',
              },
            ),
            detail: (0, t.L)(
              '\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9',
            ),
          },
          {
            key: 'to-buy:1',
            kind: 'to-buy',
            refId: '1',
            at: u + 72e5,
            fired: !1,
            title: '\u0634\u06cc\u0631 \u06f1\u06f5 \u0639\u062f\u062f',
            detail: (0, t.L)(
              '\u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
            ),
          },
          {
            key: 'routine:1',
            kind: 'routine',
            refId: '1',
            at: u + 864e5,
            fired: !1,
            title: '\u0646\u0627\u0646 \u06f2\u06f0 \u0639\u062f\u062f',
            detail: (0, t.L)('\u0647\u0631 {day}', {
              day: (0, t.L)('\u062c\u0645\u0639\u0647'),
            }),
          },
          {
            key: 'cheque:2',
            kind: 'cheque',
            refId: '2',
            at: u + 1728e5,
            fired: !1,
            title: (0, t.L)(
              '\u0686\u06a9 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc: {name}',
              { name: '\u067e\u062e\u0634 \u0627\u0644\u0628\u0631\u0632' },
            ),
            detail: (0, t.L)(
              '\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9',
            ),
          },
          {
            key: 'to-buy:2',
            kind: 'to-buy',
            refId: '2',
            at: u + 1728e5 + 18e6,
            fired: !1,
            title: '\u0631\u0648\u063a\u0646 \u06f1\u06f0 \u0639\u062f\u062f',
            detail: (0, t.L)(
              '\u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f',
            ),
          },
          {
            key: 'routine:2',
            kind: 'routine',
            refId: '2',
            at: u + 2592e5 - 36e5,
            fired: !1,
            title: '\u0645\u0631\u063a \u06f8 \u06a9\u06cc\u0644\u0648',
            detail: (0, t.L)('\u0647\u0631 {day}', {
              day: (0, t.L)('\u0634\u0646\u0628\u0647'),
            }),
          },
        ];
        return l.slice(0, Math.max(0, Math.min(l.length, Number(o[1]))));
      }),
      (e.alarmHistoryPreview = function (n = Date.now()) {
        const u = (t, n, u, o, l) => ({
          id: t + '@' + u,
          key: t,
          kind: n,
          refId: t.split(':')[1],
          at: u,
          title: o,
          detail: l,
        });
        return [
          u(
            'to-buy:7',
            'to-buy',
            n - 18e6,
            '\u067e\u0646\u06cc\u0631 \u06f6 \u0639\u062f\u062f',
            (0, t.L)('\u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f'),
          ),
          u(
            'cheque:3',
            'cheque',
            n - 864e5,
            (0, t.L)(
              '\u0686\u06a9 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc: {name}',
              { name: '\u062d\u0633\u0646 \u0622\u0642\u0627' },
            ),
            (0, t.L)(
              '\u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9 \u0631\u0633\u06cc\u062f\u0647',
            ),
          ),
          u(
            'cheque:3',
            'cheque',
            n - 1728e5,
            (0, t.L)(
              '\u0686\u06a9 \u067e\u0631\u062f\u0627\u062e\u062a\u06cc: {name}',
              { name: '\u062d\u0633\u0646 \u0622\u0642\u0627' },
            ),
            (0, t.L)(
              '{n} \u0631\u0648\u0632 \u062a\u0627 \u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9',
              { n: '\u06f1' },
            ),
          ),
          u(
            'routine:1',
            'routine',
            n - 5184e5,
            '\u0646\u0627\u0646 \u06f2\u06f0 \u0639\u062f\u062f',
            (0, t.L)('\u0647\u0631 {day}', {
              day: (0, t.L)('\u062c\u0645\u0639\u0647'),
            }),
          ),
          u(
            'cheque:4',
            'cheque',
            n - 10368e5,
            (0, t.L)(
              '\u0686\u06a9 \u062f\u0631\u06cc\u0627\u0641\u062a\u06cc: {name}',
              {
                name: '\u0622\u0642\u0627\u06cc \u0627\u062d\u0645\u062f\u06cc',
              },
            ),
            (0, t.L)(
              '{n} \u0631\u0648\u0632 \u062a\u0627 \u0633\u0631\u0631\u0633\u06cc\u062f \u0686\u06a9',
              { n: '\u06f3' },
            ),
          ),
          u(
            'to-buy:8',
            'to-buy',
            n - 216e7,
            '\u0634\u06a9\u0631 \u06f2 \u06a9\u06cc\u0633\u0647',
            (0, t.L)('\u0644\u06cc\u0633\u062a \u062e\u0631\u06cc\u062f'),
          ),
        ];
      }));
    var t = r(d[0]);
  },
  688,
  [311],
);
