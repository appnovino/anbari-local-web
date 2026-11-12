// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 700; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.movementDrafts = o),
      (e.overlayPending = function (n, l) {
        let s = n;
        for (const c of l) {
          const l = o(c);
          if (l)
            try {
              s = {
                ...n,
                ...(0, t.applyDraftBatch)(
                  s,
                  l.drafts,
                  'pending-' + c.idempotencyKey,
                  l.source,
                  { allowNegative: l.allowNegative },
                ),
              };
            } catch {}
        }
        return s;
      }));
    var t = r(d[0]);
    function o(t) {
      const o = t.body;
      return 'POST' === t.method &&
        '/movements' === t.path &&
        Array.isArray(o?.drafts)
        ? {
            drafts: o.drafts,
            source: o.source || 'manual',
            allowNegative: !0 === o.allowNegative,
          }
        : null;
    }
  },
  700,
  [439],
);
