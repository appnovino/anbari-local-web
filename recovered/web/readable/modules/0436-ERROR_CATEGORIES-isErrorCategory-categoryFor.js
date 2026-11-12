// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 436; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'ERROR_CATEGORIES', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'isErrorCategory', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.categoryFor = function (t, c = '') {
        const u = Object.hasOwn(n, c) ? n[c] : void 0;
        return t
          ? t >= 500
            ? t >= 502 &&
              t <= 504 &&
              ('backend_missing' === c || 'maintenance' === c)
              ? 'maintenance'
              : 'server'
            : t >= 400
              ? u && 'server' !== u && 'maintenance' !== u
                ? u
                : o[t] || (c.startsWith('invalid_') ? 'validation' : 'client')
              : 'unknown'
          : u || (c.startsWith('invalid_') ? 'validation' : 'unknown');
      }));
    const t = [
        'offline',
        'timeout',
        'server',
        'maintenance',
        'auth',
        'forbidden',
        'not_found',
        'validation',
        'conflict',
        'rate_limit',
        'subscription',
        'client',
        'unknown',
      ],
      n = {
        unauthorized: 'auth',
        csrf_failed: 'auth',
        admin_reauth_required: 'auth',
        subscription_required: 'subscription',
        free_limit_reached: 'subscription',
        import_paid_only: 'subscription',
        connector_paid_only: 'subscription',
        api_plus_only: 'subscription',
        feature_not_in_plan: 'subscription',
        member_limit: 'subscription',
        quota: 'subscription',
        device_limit: 'subscription',
        device_limit_plan: 'subscription',
        session_ended: 'auth',
        takeover_expired: 'auth',
        rate_limited: 'rate_limit',
        queue_full: 'rate_limit',
        voice_busy: 'rate_limit',
        server_busy: 'server',
        server_error: 'server',
        provider_error: 'server',
        maintenance: 'maintenance',
        conflict: 'conflict',
        version_conflict: 'conflict',
        stock_changed: 'conflict',
        insufficient_stock: 'conflict',
        revision_too_old: 'conflict',
        not_found: 'not_found',
        forbidden: 'forbidden',
        invalid_request: 'validation',
        too_large: 'validation',
        timeout: 'timeout',
        aborted: 'timeout',
        offline: 'offline',
      },
      o = {
        400: 'validation',
        401: 'auth',
        402: 'subscription',
        403: 'forbidden',
        404: 'not_found',
        408: 'timeout',
        409: 'conflict',
        410: 'not_found',
        412: 'conflict',
        413: 'validation',
        419: 'auth',
        422: 'validation',
        429: 'rate_limit',
      },
      c = (n) => t.includes(n);
  },
  436,
  [],
);
