// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 512; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'nationalMobile', {
        enumerable: !0,
        get: function () {
          return o.nationalMobile;
        },
      }),
      (e.otpCall = c),
      (e.otpDetail = function (t, n) {
        const o = t?.data?.error;
        return o?.details?.[n] ?? o?.[n];
      }),
      Object.defineProperty(e, 'latinDigits', {
        enumerable: !0,
        get: function () {
          return o.latinDigits;
        },
      }),
      (e.persianDigits = l),
      (e.isMobile = function (t) {
        return '' !== (0, o.nationalMobile)(t);
      }),
      (e.toE164 = function (t) {
        const n = (0, o.nationalMobile)(t);
        return n ? '+98' + n : '';
      }),
      (e.countdown = function (t) {
        const n = Math.max(0, Math.ceil(t));
        return l(Math.floor(n / 60)) + ':' + l(String(n % 60).padStart(2, '0'));
      }),
      (e.maskEmail = function (t) {
        const [n = '', o = ''] = t.split('@');
        return n.slice(0, 2) + '***' + (o ? '@' + o : '');
      }),
      (e.maskPhone = function (t) {
        const n = (0, o.nationalMobile)(t);
        return n ? l('0' + n.slice(0, 3)) + '***' + l(n.slice(-4)) : t;
      }),
      (e.requestVoiceCall = function (t) {
        return c('/v1/auth/otp/call', { phone: t });
      }));
    var t = r(d[0]),
      n = r(d[1]),
      o = r(d[2]);
    async function c(n, o) {
      const c = await fetch((0, t.baseUrl)() + n, {
          method: 'POST',
          credentials: 'include',
          headers: {
            ...(0, t.authHeaders)(),
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(o),
          signal: AbortSignal.timeout(15e3),
        }),
        l = await c.json().catch(() => null);
      return (
        !c.ok &&
          l?.error?.code &&
          (0, t.emitDeviceNotice)(l.error.code, l.error, n),
        {
          ok: c.ok,
          status: c.status,
          code: l?.error?.code || (c.ok ? '' : 'backend_missing'),
          data: l,
        }
      );
    }
    function l(t) {
      return (0, n.localDigits)(t);
    }
  },
  512,
  [415, 311, 511],
);
