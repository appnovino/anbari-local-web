// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 581; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.installAuthFake = u),
      r(d[0]));
    var t = r(d[1]);
    const o = (t, o) =>
        new Response(JSON.stringify(o), {
          status: t,
          headers: { 'Content-Type': 'application/json' },
        }),
      n = { masked: '0912***6789', resendAfter: 90, codeLength: 4 };
    function s(t, s, u, c) {
      return t.startsWith('/v1/auth/methods')
        ? o(200, {
            google: !0,
            ...(c
              ? { clientId: '000000000000-preview.apps.googleusercontent.com' }
              : {}),
            otp: { sms: !0, email: !1 },
          })
        : t.startsWith('/v1/auth/session')
          ? o(401, { error: { code: 'unauthorized' } })
          : 'POST' === s && t.startsWith('/v1/auth/otp/request')
            ? o(200, n)
            : 'POST' === s && t.startsWith('/v1/auth/phone/start')
              ? o(200, { ...n, purpose: 'verify' })
              : 'POST' === s && t.startsWith('/v1/auth/email/start')
                ? o(200, { ...n, purpose: 'verify', channel: 'email' })
                : 'POST' === s && t.startsWith('/v1/auth/otp/verify')
                  ? o(
                      400,
                      u
                        ? {
                            error: {
                              code: 'otp_invalid',
                              details: { attemptsLeft: 2 },
                            },
                          }
                        : { error: { code: 'otp_expired' } },
                    )
                  : o(404, { error: { code: 'not_found' } });
    }
    function u() {
      if ('undefined' == typeof window) return !1;
      const o = new URLSearchParams(window.location.search).get('fake-auth');
      if (null === o || !(0, t.localHost)()) return !1;
      const n = window.fetch.bind(window),
        u = 'wrong' === o,
        c = 'google' === o;
      return (
        (window.fetch = async (t, o) => {
          const h =
              'string' == typeof t ? t : t instanceof URL ? t.href : t.url,
            p = h.indexOf('/v1/');
          return p < 0
            ? n(t, o)
            : (await new Promise((t) => setTimeout(t, 120)),
              s(h.slice(p), (o?.method || 'GET').toUpperCase(), u, c));
        }),
        !0
      );
    }
    u();
  },
  581,
  [94, 582],
);
