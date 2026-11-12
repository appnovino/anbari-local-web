// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1291; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useLastNotificationResponse = function () {
        const [s, c] = (0, t.useState)(void 0);
        return (
          (0, t.useLayoutEffect)(() => {
            const t = (0, n.getLastNotificationResponse)();
            c((n) => o(n, t));
            const s = (0, n.addNotificationResponseReceivedListener)((t) =>
                c((n) => o(n, t)),
              ),
              u = (0, n.addNotificationResponseClearedListener)(() => {
                c(null);
              });
            return () => {
              (s.remove(), u.remove());
            };
          }, []),
          s
        );
      }),
      Object.defineProperty(e, 'determineNextResponse', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const o = (t, n) =>
      n
        ? t
          ? t.notification.request.identifier !==
            n.notification.request.identifier
            ? n
            : t
          : n
        : null;
  },
  1291,
  [2, 1292],
);
