// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 745; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useSupportUnread = function (n) {
        const [o, s] = (0, t.useState)(u.supportUnread);
        return (
          (0, t.useEffect)(() => (0, u.onSupportUnread)(s), []),
          (0, t.useEffect)(() => {
            if (n) return (0, u.startSupportPolling)(n);
          }, [n?.id]),
          n ? o : 0
        );
      }));
    var t = r(d[0]),
      u = r(d[1]);
  },
  745,
  [2, 746],
);
