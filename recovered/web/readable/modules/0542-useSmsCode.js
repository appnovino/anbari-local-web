// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 542; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.useSmsCode = function ({
        enabled: o,
        length: s,
        attempt: c = 0,
        onCode: u,
      }) {
        const f = (0, t.useRef)(u);
        ((f.current = u),
          (0, t.useEffect)(() => {
            if (!o) return;
            let t = !0;
            const c = (o) => {
              if (!t || 'string' != typeof o) return;
              const c = (0, n.extractCode)(o, s);
              c && f.current(c);
            };
            {
              if (
                'undefined' == typeof window ||
                !('OTPCredential' in window) ||
                !navigator.credentials?.get
              )
                return;
              const n = new AbortController();
              try {
                navigator.credentials
                  .get({ otp: { transport: ['sms'] }, signal: n.signal })
                  .then(
                    (t) => c(t?.code),
                    () => {},
                  );
              } catch {}
              return () => {
                ((t = !1), n.abort());
              };
            }
          }, [o, s, c]));
      }));
    var t = r(d[0]);
    (r(d[1]), r(d[2]));
    var n = r(d[3]);
  },
  542,
  [2, 94, 313, 511],
);
