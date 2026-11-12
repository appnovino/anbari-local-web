// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 829; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.cameraFailure = function (o) {
        const t =
            'object' == typeof o && o && 'name' in o ? String(o.name) : '',
          n = o instanceof Error ? o.message : 'string' == typeof o ? o : '';
        return /^(NotAllowedError|SecurityError|PermissionDeniedError)$/.test(
          t,
        ) || /permission/i.test(n)
          ? 'denied'
          : /^(NotFoundError|DevicesNotFoundError|OverconstrainedError)$/.test(
                t,
              )
            ? 'nocamera'
            : /^(NotReadableError|TrackStartError|AbortError)$/.test(t)
              ? 'busy'
              : 'other';
      }));
  },
  829,
  [],
);
