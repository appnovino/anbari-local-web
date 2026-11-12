// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 796; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (_g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'VOICE_FIXTURE_TRANSCRIPT', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.nextMehr15 = u),
      (e.voiceFixture = function (n = [], t = new Date()) {
        return {
          transcript: o,
          clarification: '',
          actions: [
            {
              name: '\u062a\u0646 \u0645\u0627\u0647\u06cc',
              quantity: 5,
              kind: 'received',
              unit: 'piece',
            },
            {
              name: c(
                n,
                '\u0634\u06cc\u0631 \u067e\u0627\u0633\u062a\u0648\u0631\u06cc\u0632\u0647 \u0645\u06cc\u0647\u0646 \u06f1 \u0644\u06cc\u062a\u0631\u06cc',
                ['\u0634\u06cc\u0631', '\u0645\u06cc\u0647\u0646'],
              ),
              quantity: 3,
              kind: 'sold',
              unit: 'piece',
              unitPrice: 45e3,
            },
            {
              name: '\u0628\u0631\u0646\u062c \u0647\u0627\u0634\u0645\u06cc',
              quantity: 2,
              kind: 'received',
              unit: 'bag',
            },
            {
              name: '\u0646\u0648\u0634\u0627\u0628\u0647 \u0645\u0627\u0647\u0627\u0646',
              quantity: 1,
              kind: 'sold',
              unit: 'carton',
            },
            {
              name: c(
                n,
                '\u0633\u06cc\u0645\u0627\u0646 \u067e\u0631\u062a\u0644\u0646\u062f \u06af\u0648\u0646\u06cc \u06f5\u06f0 \u06a9\u06cc\u0644\u0648\u06cc\u06cc',
                ['\u0633\u06cc\u0645\u0627\u0646'],
              ),
              quantity: 1,
              kind: 'waste',
              unit: 'sack',
            },
          ],
          ledger: [
            {
              type: 'cheque',
              contactName:
                '\u0622\u0642\u0627\u06cc \u0631\u0636\u0627\u06cc\u06cc',
              amount: 5e6,
              direction: 'in',
              dueDate: u(t),
            },
          ],
          expenses: [
            {
              label:
                '\u06a9\u0631\u0627\u06cc\u0647 \u0645\u063a\u0627\u0632\u0647',
              amount: 15e6,
              category: 'rent',
            },
          ],
        };
      }));
    var n = r(d[0]),
      t = r(d[1]);
    const o =
      '\u0627\u0645\u0631\u0648\u0632 \u067e\u0646\u062c \u062a\u0627 \u062a\u0646 \u0645\u0627\u0647\u06cc \u0631\u0633\u06cc\u062f\u060c \u0633\u0647 \u062a\u0627 \u0634\u06cc\u0631 \u0645\u06cc\u0647\u0646 \u0641\u0631\u0648\u062e\u062a\u0645 \u062f\u0648\u0646\u0647\u200c\u0627\u06cc \u0686\u0647\u0644 \u0648 \u067e\u0646\u062c \u0647\u0632\u0627\u0631\u060c \u062f\u0648 \u06a9\u06cc\u0633\u0647 \u0628\u0631\u0646\u062c \u0647\u0627\u0634\u0645\u06cc \u0631\u0633\u06cc\u062f\u060c \u06cc\u0647 \u06a9\u0627\u0631\u062a\u0646 \u0646\u0648\u0634\u0627\u0628\u0647 \u0645\u0627\u0647\u0627\u0646 \u0641\u0631\u0648\u062e\u062a\u0645 \u0648 \u06cc\u06a9\u06cc \u0627\u0632 \u0633\u06cc\u0645\u0627\u0646\u200c\u0647\u0627 \u062e\u0631\u0627\u0628 \u0634\u062f\u060c \u06cc\u0647 \u0686\u06a9 \u067e\u0646\u062c \u0645\u06cc\u0644\u06cc\u0648\u0646\u06cc \u0627\u0632 \u0622\u0642\u0627\u06cc \u0631\u0636\u0627\u06cc\u06cc \u06af\u0631\u0641\u062a\u0645 \u0628\u0631\u0627\u06cc \u067e\u0627\u0646\u0632\u062f\u0647 \u0645\u0647\u0631\u060c \u06a9\u0631\u0627\u06cc\u0647 \u0645\u063a\u0627\u0632\u0647 \u0631\u0648 \u0647\u0645 \u062f\u0627\u062f\u0645 \u067e\u0627\u0646\u0632\u062f\u0647 \u0645\u06cc\u0644\u06cc\u0648\u0646';
    function u(n = new Date()) {
      const o = (0, t.jalaliParts)(n),
        u = o.month < 7 || (7 === o.month && o.day <= 15) ? o.year : o.year + 1,
        c = (0, t.toGregorian)(u, 7, 15),
        s = (n) => String(n).padStart(2, '0');
      return `${c.year}-${s(c.month)}-${s(c.day)}`;
    }
    function c(t, o, u) {
      if (t.some((t) => (0, n.normalizeName)(t) === (0, n.normalizeName)(o)))
        return o;
      const c = u.map(n.normalizeName);
      return (
        t.find((t) => c.every((o) => (0, n.normalizeName)(t).includes(o))) || o
      );
    }
  },
  796,
  [439, 440],
);
