// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 604; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.tourPreviewRoute = function () {
        if ('undefined' == typeof window) return null;
        try {
          const [t, o] = window.location.hash.slice(1).split(':');
          return 'tour-preview' === t && (0, n.localHost)()
            ? 'plans' === o
              ? { start: 'plans' }
              : {}
            : null;
        } catch {
          return null;
        }
      }),
      (e.TourPreview = function ({ route: n }) {
        return (0, o.jsx)(t.StartTour, {
          shop: u,
          name: '\u0645\u0647\u0645\u0627\u0646',
          start: n.start,
          onEnter: () => {
            try {
              window.location.hash = '';
            } catch {}
          },
        });
      }),
      r(d[0]));
    var t = r(d[1]),
      n = r(d[2]),
      o = r(d[3]);
    const u = {
      id: '00000000-0000-4000-8000-00000000f7ee',
      name: '\u0641\u0631\u0648\u0634\u06af\u0627\u0647 \u0646\u0645\u0648\u0646\u0647',
      role: 'owner',
      timezone: 'Asia/Tehran',
    };
  },
  604,
  [94, 556, 582, 338],
);
