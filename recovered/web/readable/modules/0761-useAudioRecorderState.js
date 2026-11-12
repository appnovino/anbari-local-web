// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 761; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useAudioRecorderState = function (n, s = 500) {
        const [o, c] = (0, t.useState)(n.getStatus());
        return (
          (0, t.useEffect)(() => {
            const t = setInterval(() => {
              const t = n.getStatus();
              c((n) => {
                const s =
                  (void 0 === n.metering) != (void 0 === t.metering) ||
                  (void 0 !== n.metering &&
                    void 0 !== t.metering &&
                    Math.abs(n.metering - t.metering) > 0.1);
                return n.canRecord !== t.canRecord ||
                  n.isRecording !== t.isRecording ||
                  n.mediaServicesDidReset !== t.mediaServicesDidReset ||
                  n.url !== t.url ||
                  Math.abs(n.durationMillis - t.durationMillis) > 50 ||
                  s
                  ? t
                  : n;
              });
            }, s);
            return () => clearInterval(t);
          }, [n.id]),
          o
        );
      }));
    var t = r(d[0]);
  },
  761,
  [2],
);
