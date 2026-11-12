// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 854; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.originChannel = t),
      (e.originMethod = c),
      (e.originLabel = function (s) {
        const o = t(s);
        if ('website' === o)
          return s.apiKeyName
            ? (0, n.L)('\u0633\u0627\u06cc\u062a (API): {name}', {
                name: s.apiKeyName,
              })
            : (0, n.L)('\u0633\u0627\u06cc\u062a (API)');
        if ('connector' === o) return (0, n.L)('ChatGPT / Claude');
        if ('assistant' === o)
          return (0, n.L)('\u062f\u0633\u062a\u06cc\u0627\u0631');
        const u = c(s.source);
        return 'staff' === o
          ? [
              s.actorName
                ? (0, n.L)('\u06a9\u0627\u0631\u0645\u0646\u062f: {name}', {
                    name: s.actorName,
                  })
                : (0, n.L)('\u06a9\u0627\u0631\u0645\u0646\u062f'),
              u,
            ]
              .filter(Boolean)
              .join(' \xb7 ')
          : u || (0, n.L)('\u062f\u0633\u062a\u06cc');
      }),
      (e.originBadge = function (o) {
        const u = t(o);
        return 'website' === u
          ? (0, n.L)('\u0633\u0627\u06cc\u062a')
          : 'connector' === u
            ? (0, n.L)('ChatGPT / Claude')
            : 'assistant' === u
              ? (0, n.L)('\u062f\u0633\u062a\u06cc\u0627\u0631')
              : 'staff' === u
                ? o.actorName
                  ? (0, n.L)('\u06a9\u0627\u0631\u0645\u0646\u062f: {name}', {
                      name: o.actorName,
                    })
                  : (0, n.L)('\u06a9\u0627\u0631\u0645\u0646\u062f')
                : o.source && s.has(o.source)
                  ? c(o.source)
                  : null;
      }),
      (e.originFacts = function (n) {
        const c = t(n);
        return {
          channel: c,
          method: n.source || null,
          by: ('staff' === c && n.actorName) || null,
          apiKey: n.apiKeyId
            ? { id: n.apiKeyId, name: n.apiKeyName || null }
            : null,
        };
      }));
    var n = r(d[0]);
    function t(n) {
      return n.apiKeyId || 'api' === n.source
        ? 'website'
        : n.viaConnector
          ? 'connector'
          : n.viaAssistant
            ? 'assistant'
            : n.actorStaff
              ? 'staff'
              : 'app';
    }
    function c(t) {
      switch (t) {
        case 'manual':
          return (0, n.L)('\u062f\u0633\u062a\u06cc');
        case 'voice':
          return (0, n.L)('\u0628\u0627 \u0635\u062f\u0627');
        case 'scan':
          return (0, n.L)(
            '\u0628\u0627 \u0627\u0633\u06a9\u0646 \u0628\u0627\u0631\u06a9\u062f',
          );
        case 'image':
          return (0, n.L)('\u0627\u0632 \u0639\u06a9\u0633');
        case 'batch':
          return (0, n.L)('\u062b\u0628\u062a \u06af\u0631\u0648\u0647\u06cc');
        case 'pdf':
          return (0, n.L)('\u0627\u0632 PDF');
        case 'excel':
        case 'csv':
        case 'json':
          return (0, n.L)('\u0627\u0632 \u0641\u0627\u06cc\u0644');
        case 'production':
          return (0, n.L)('\u062a\u0648\u0644\u06cc\u062f');
        case 'correction':
          return (0, n.L)('\u0627\u0635\u0644\u0627\u062d');
        default:
          return '';
      }
    }
    const s = new Set(['voice', 'scan', 'image']);
  },
  854,
  [311],
);
