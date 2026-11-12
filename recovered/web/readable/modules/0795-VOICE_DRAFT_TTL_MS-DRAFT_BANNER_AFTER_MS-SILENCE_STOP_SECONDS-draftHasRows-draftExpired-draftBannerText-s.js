// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 795; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'VOICE_DRAFT_TTL_MS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'DRAFT_BANNER_AFTER_MS', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'SILENCE_STOP_SECONDS', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'draftHasRows', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.draftExpired = function (t, o = Date.now()) {
        const u = t ? Date.parse(t) : NaN;
        return Number.isFinite(u) && o - u > n;
      }),
      (e.draftBannerText = function (n, u = Date.now(), c) {
        const l = n ? Date.parse(n) : NaN;
        if (!Number.isFinite(l) || u - l < o) return '';
        const s = { timeZone: c || void 0 },
          d = (t) => {
            try {
              return t.toLocaleDateString('en-CA', s);
            } catch {
              return t.toISOString().slice(0, 10);
            }
          },
          f = new Date(l),
          D = d(new Date(u)),
          b = d(new Date(u - 864e5)),
          L = (0, t.localDigits)(
            ((t) => {
              try {
                return t.toLocaleTimeString('en-GB', {
                  ...s,
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: !1,
                });
              } catch {
                return t.toISOString().slice(11, 16);
              }
            })(f),
          );
        return d(f) === D
          ? (0, t.L)(
              '\u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u0646\u0627\u062a\u0645\u0627\u0645 \u0627\u0632 \u0633\u0627\u0639\u062a {time}',
              { time: L },
            )
          : d(f) === b
            ? (0, t.L)(
                '\u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u0646\u0627\u062a\u0645\u0627\u0645 \u0627\u0632 \u062f\u06cc\u0631\u0648\u0632 \u0633\u0627\u0639\u062a {time}',
                { time: L },
              )
            : (0, t.L)(
                '\u067e\u06cc\u0634\u200c\u0646\u0648\u06cc\u0633 \u0646\u0627\u062a\u0645\u0627\u0645 \u0627\u0632 {date} \u0633\u0627\u0639\u062a {time}',
                { date: (0, t.localDigits)(d(f).replace(/-/g, '/')), time: L },
              );
      }),
      (e.stopReasonText = function (n, o = 240) {
        return 'limit' === n
          ? o >= 120
            ? (0, t.L)(
                '\u0636\u0628\u0637 \u062f\u0631 \u06f4 \u062f\u0642\u06cc\u0642\u0647 \u0645\u062a\u0648\u0642\u0641 \u0634\u062f\u061b \u0635\u062f\u0627\u06cc \u0636\u0628\u0637\u200c\u0634\u062f\u0647 \u0646\u06af\u0647 \u062f\u0627\u0634\u062a\u0647 \u0634\u062f.',
              )
            : (0, t.L)(
                '\u0636\u0628\u0637 \u062f\u0631 \u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647 \u0645\u062a\u0648\u0642\u0641 \u0634\u062f\u061b \u0635\u062f\u0627\u06cc \u0636\u0628\u0637\u200c\u0634\u062f\u0647 \u0646\u06af\u0647 \u062f\u0627\u0634\u062a\u0647 \u0634\u062f.',
              )
          : 'silence' === n
            ? (0, t.L)(
                '\u0636\u0628\u0637 \u0645\u062a\u0648\u0642\u0641 \u0634\u062f \u0686\u0648\u0646 \u0635\u062f\u0627\u06cc\u06cc \u0646\u06cc\u0627\u0645\u062f.',
              )
            : 'background' === n
              ? (0, t.L)(
                  '\u0636\u0628\u0637 \u0645\u062a\u0648\u0642\u0641 \u0634\u062f \u0686\u0648\u0646 \u0628\u0631\u0646\u0627\u0645\u0647 \u0628\u0633\u062a\u0647 \u06cc\u0627 \u0635\u0641\u062d\u0647 \u0642\u0641\u0644 \u0634\u062f\u061b \u0635\u062f\u0627\u06cc \u0636\u0628\u0637\u200c\u0634\u062f\u0647 \u0646\u06af\u0647 \u062f\u0627\u0634\u062a\u0647 \u0634\u062f.',
                )
              : 'left' === n
                ? (0, t.L)(
                    '\u0636\u0628\u0637 \u0645\u062a\u0648\u0642\u0641 \u0634\u062f \u0686\u0648\u0646 \u0627\u0632 \u0627\u06cc\u0646 \u0635\u0641\u062d\u0647 \u0631\u0641\u062a\u06cc\u062f\u061b \u0635\u062f\u0627\u06cc \u0636\u0628\u0637\u200c\u0634\u062f\u0647 \u0646\u06af\u0647 \u062f\u0627\u0634\u062a\u0647 \u0634\u062f.',
                  )
                : '';
      }));
    var t = r(_d[0]);
    const n = 6048e5,
      o = 18e4,
      u = 25,
      c = (t) =>
        !!t &&
        (t.actions.length > 0 ||
          !!t.ledger?.length ||
          !!t.expenses?.length ||
          !!t.toBuy?.length);
  },
  795,
  [311],
);
