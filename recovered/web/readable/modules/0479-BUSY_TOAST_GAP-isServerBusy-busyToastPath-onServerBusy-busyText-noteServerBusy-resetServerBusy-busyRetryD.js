// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 479; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'BUSY_TOAST_GAP', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.isServerBusy = function (t) {
        if (!t || 'object' != typeof t) return !1;
        const { status: u, message: o } = t,
          s = 'string' == typeof o ? o : '';
        return 503 === u || (429 === u && !n.includes(s));
      }),
      (e.busyToastPath = function (t) {
        return !t.startsWith('/v1/auth/') && !t.startsWith('/v1/client-errors');
      }),
      (e.onServerBusy = function (t) {
        o = t;
      }),
      (e.busyText = _),
      (e.noteServerBusy = function (t = Date.now()) {
        return !(s && t - s < u) && ((s = t), o?.(_()), !0);
      }),
      (e.resetServerBusy = function () {
        s = 0;
      }),
      (e.busyRetryDelay = function (t) {
        return Math.min(6e4, 4e3 * 2 ** Math.max(0, Math.min(t, 4)));
      }));
    var t = r(d[0]);
    const n = [
        'quota',
        'ai_limit',
        'daily_limit',
        'free_limit_reached',
        'queue_full',
        'otp_day_limit',
        'otp_too_soon',
        'otp_call_limit',
        'totp_rate_limited',
        'code_in_use',
      ],
      u = 2e4;
    let o = null,
      s = 0;
    function _() {
      return (0, t.L)(
        '\u0633\u0631\u0648\u0631 \u0634\u0644\u0648\u063a \u0627\u0633\u062a\u060c \u062f\u0648\u0628\u0627\u0631\u0647 \u0627\u0645\u062a\u062d\u0627\u0646 \u0645\u06cc\u200c\u06a9\u0646\u06cc\u0645',
      );
    }
  },
  479,
  [311],
);
