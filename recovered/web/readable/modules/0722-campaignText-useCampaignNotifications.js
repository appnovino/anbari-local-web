// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 722; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.campaignText = o),
      (_e.useCampaignNotifications = function (e, n, c) {
        const u = n ? JSON.stringify(n) : '',
          o = (0, t.useRef)(c);
        ((o.current = c),
          (0, t.useEffect)(() => () => {}, []),
          (0, t.useEffect)(() => {}, [e?.id, u]));
      }));
    var e,
      t = r(d[0]),
      n = r(d[1]);
    (e = n) && e.__esModule;
    r(d[2]);
    var c = r(d[3]);
    (r(d[4]), r(d[5]));
    const u = (e) => (e || 0).toLocaleString((0, c.numberLocale)());
    function o(e) {
      switch (e.key) {
        case 'use':
          return {
            title: (0, c.L)(
              '\u06a9\u0627\u0631\u0647\u0627\u062a \u0645\u0646\u062a\u0638\u0631\u062a\u0647\u061b \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0631\u0648 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646',
            ),
            body: (0, c.L)(
              '\u0628\u06cc\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u0631\u0648 \u0628\u0627\u0632 \u06a9\u0646 \u0648 \u06cc\u0647 \u0641\u0631\u0648\u0634 \u06cc\u0627 \u0648\u0631\u0648\u062f \u06a9\u0627\u0644\u0627 \u0631\u0648 \u0628\u0627 \u0635\u062f\u0627 \u062b\u0628\u062a \u06a9\u0646\u061b \u062f\u0647 \u062b\u0627\u0646\u06cc\u0647 \u0637\u0648\u0644 \u0645\u06cc\u200c\u06a9\u0634\u0647.',
            ),
          };
        case 'gift2':
          return {
            title: (0, c.L)(
              '{n} \u06a9\u0627\u0631 \u062f\u06cc\u06af\u0647 \u06af\u0631\u0641\u062a\u06cc \u062a\u0627 \u0628\u06cc\u0634\u062a\u0631 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\u06cc',
              { n: u(e.amount) },
            ),
            body: (0, c.L)(
              '\u0628\u06cc\u0627 \u0627\u0632\u0634\u0648\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646. \u0628\u0631\u0627\u06cc \u06a9\u0627\u0631 \u0646\u0627\u0645\u062d\u062f\u0648\u062f\u060c \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0627\u0631\u062a\u0642\u0627 \u0628\u062f\u0647.',
            ),
          };
        case 'gift3':
          return {
            title: (0, c.L)(
              '{n} \u06a9\u0627\u0631 \u062f\u06cc\u06af\u0647 \u0628\u0631\u0627\u062a \u06af\u0630\u0627\u0634\u062a\u06cc\u0645\u061b \u0642\u0628\u0644 \u0627\u0632 \u062e\u0631\u06cc\u062f\u060c \u0628\u06cc\u0634\u062a\u0631 \u0628\u0627 \u0645\u0627\u06cc \u0627\u0646\u0628\u0627\u0631\u06cc \u06a9\u0627\u0631 \u06a9\u0646',
              { n: u(e.amount) },
            ),
            body: (0, c.L)(
              '\u0628\u06cc\u0627 \u0627\u0632\u0634\u0648\u0646 \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u06a9\u0646 \u0648 \u06a9\u0627\u0631\u062a \u0631\u0648 \u0627\u062f\u0627\u0645\u0647 \u0628\u062f\u0647.',
            ),
          };
        case 'offer60':
          return {
            title: (0, c.L)(
              '\u0641\u0642\u0637 \u0628\u0631\u0627\u06cc \u062a\u0648: {p}\u066a \u062a\u062e\u0641\u06cc\u0641 \u0645\u0627\u0647 \u0627\u0648\u0644',
              { p: u(e.percent) },
            ),
            body: (0, c.L)(
              '\u0641\u0642\u0637 \u06f4\u06f8 \u0633\u0627\u0639\u062a \u0648 \u0641\u0642\u0637 \u06cc\u06a9 \u0628\u0627\u0631\u061b \u0628\u0639\u062f\u0634 \u062a\u0645\u0648\u0645 \u0645\u06cc\u200c\u0634\u0647.',
            ),
          };
        default:
          return {
            title: (0, c.L)(
              '{p}\u066a \u062a\u062e\u0641\u06cc\u0641 \u0628\u0631\u0627\u062a \u0641\u0639\u0627\u0644 \u0634\u062f',
              { p: u(e.percent) },
            ),
            body: (0, c.L)(
              '\u0641\u0642\u0637 \u06f4\u06f8 \u0633\u0627\u0639\u062a: \u0645\u0627\u0647 \u0627\u0648\u0644 \u0627\u0634\u062a\u0631\u0627\u06a9 \u0628\u0627 {p}\u066a \u062a\u062e\u0641\u06cc\u0641. \u0647\u0645\u06cc\u0646 \u062d\u0627\u0644\u0627 \u0627\u0631\u062a\u0642\u0627 \u0628\u062f\u0647 \u0648 \u06a9\u0627\u0631 \u0646\u0627\u0645\u062d\u062f\u0648\u062f \u062f\u0627\u0634\u062a\u0647 \u0628\u0627\u0634.',
              { p: u(e.percent) },
            ),
          };
      }
    }
  },
  722,
  [2, 203, 94, 311, 443, 523],
);
