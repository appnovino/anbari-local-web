// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 860; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'IMPORT_WAIT_MS', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.importStop = u),
      (e.importStopText = function (o, n = '') {
        const c = u(o);
        return 'queue_full' === c
          ? (0, t.L)(
              '\u0686\u0646\u062f \u06a9\u0627\u0631 \u062f\u06cc\u06af\u0631 \u0627\u06cc\u0646 \u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0647\u0646\u0648\u0632 \u062f\u0631 \u0635\u0641 \u0633\u0631\u0648\u0631 \u0627\u0633\u062a\u061b \u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647 \u0635\u0628\u0631 \u06a9\u0646 \u0648 \xab\u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\xbb \u0631\u0627 \u0628\u0632\u0646.',
            )
          : 'timeout' === c
            ? (0, t.L)(
                '\u062e\u0648\u0627\u0646\u062f\u0646 \u0641\u0627\u06cc\u0644 \u0628\u06cc\u0634\u062a\u0631 \u0627\u0632 \u06cc\u06a9 \u062f\u0642\u06cc\u0642\u0647 \u0637\u0648\u0644 \u06a9\u0634\u06cc\u062f \u0648 \u0645\u062a\u0648\u0642\u0641 \u0634\u062f\u061b \xab\u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u06a9\u0646\xbb \u0631\u0627 \u0628\u0632\u0646.',
              )
            : (0, t.L)(
                '\u0641\u0627\u06cc\u0644 \u0627\u06a9\u0633\u0644 \u062e\u0648\u0627\u0646\u062f\u0647 \u0646\u0634\u062f.',
              ) + (n ? ' ' + n : '');
      }));
    var t = r(d[0]);
    const o = 6e4;
    function u(t) {
      const o = t instanceof Error ? t.name : '',
        u = t instanceof Error ? t.message : '';
      return 'queue_full' === u
        ? 'queue_full'
        : 'timeout' === u || 'TimeoutError' === o || 'AbortError' === o
          ? 'timeout'
          : 'failed';
    }
  },
  860,
  [311],
);
