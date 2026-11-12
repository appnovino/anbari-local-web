// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 963; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.basketError = function (s) {
        if (s instanceof e.ApiError) {
          if (403 === s.status && 'feature_not_in_plan' === s.message)
            return { text: t.notebookW5Fa.proGate, retry: !1, proGate: !0 };
          if (
            (s.status >= 500 && s.status < 600) ||
            408 === s.status ||
            429 === s.status ||
            'backend_missing' === s.message
          )
            return {
              text: Object.prototype.hasOwnProperty.call(e.messages, s.message)
                ? (0, e.message)(s)
                : t.notebookW5Fa.networkRetry,
              retry: !0,
              proGate: !1,
            };
          if (s.message)
            return { text: (0, e.message)(s), retry: !1, proGate: !1 };
        }
        return { text: t.notebookW5Fa.networkRetry, retry: !0, proGate: !1 };
      }));
    var e = r(d[0]),
      t = r(d[1]);
  },
  963,
  [415, 580],
);
