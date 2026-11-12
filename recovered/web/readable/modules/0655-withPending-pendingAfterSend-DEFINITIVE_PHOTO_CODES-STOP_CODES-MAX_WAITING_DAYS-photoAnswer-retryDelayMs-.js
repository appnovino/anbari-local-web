// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 655; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.withPending = function (t, n) {
        return [
          ...t.filter((t) => !(t.chequeId === n.chequeId && t.side === n.side)),
          n,
        ];
      }),
      (e.pendingAfterSend = function (t, n) {
        return t.filter((t) => t.key !== n.key);
      }),
      Object.defineProperty(e, 'DEFINITIVE_PHOTO_CODES', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'STOP_CODES', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'MAX_WAITING_DAYS', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.photoAnswer = function (o) {
        if ('network' === o) return 'stop';
        const { status: u, code: c } = o;
        return t.includes(c)
          ? 'drop'
          : 408 === u ||
              429 === u ||
              u >= 500 ||
              [401, 402, 403, 419].includes(u) ||
              n.includes(c)
            ? 'stop'
            : 'later';
      }),
      (e.retryDelayMs = u),
      Object.defineProperty(e, 'isDue', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'tooOld', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (e.postponed = function (t, n) {
        const o = (t.tries || 0) + 1;
        return { ...t, tries: o, retryAt: new Date(n + u(o)).toISOString() };
      }));
    const t = [
        'invalid_image',
        'photo_too_large',
        'cheque_photo_too_large',
        'hidden_by_owner',
        'cheque_not_found',
      ],
      n = [
        'unauthorized',
        'session_expired',
        'csrf_failed',
        'forbidden',
        'subscription_required',
        'feature_not_in_plan',
      ],
      o = 7;
    function u(t) {
      return Math.min(864e5, 3e5 * 2 ** Math.max(0, t - 1));
    }
    const c = (t, n) => !t.retryAt || Date.parse(t.retryAt) <= n,
      s = (t, n) => n - Date.parse(t.savedAt) > 6048e5;
  },
  655,
  [],
);
