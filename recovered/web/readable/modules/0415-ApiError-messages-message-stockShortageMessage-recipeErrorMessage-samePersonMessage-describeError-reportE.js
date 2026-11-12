// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 415; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'ApiError', {
        enumerable: !0,
        get: function () {
          return p.ApiError;
        },
      }),
      Object.defineProperty(_e, 'messages', {
        enumerable: !0,
        get: function () {
          return p.messages;
        },
      }),
      Object.defineProperty(_e, 'message', {
        enumerable: !0,
        get: function () {
          return p.message;
        },
      }),
      Object.defineProperty(_e, 'stockShortageMessage', {
        enumerable: !0,
        get: function () {
          return p.stockShortageMessage;
        },
      }),
      Object.defineProperty(_e, 'recipeErrorMessage', {
        enumerable: !0,
        get: function () {
          return p.recipeErrorMessage;
        },
      }),
      Object.defineProperty(_e, 'samePersonMessage', {
        enumerable: !0,
        get: function () {
          return p.samePersonMessage;
        },
      }),
      Object.defineProperty(_e, 'describeError', {
        enumerable: !0,
        get: function () {
          return p.describeError;
        },
      }),
      Object.defineProperty(_e, 'reportError', {
        enumerable: !0,
        get: function () {
          return p.reportError;
        },
      }),
      Object.defineProperty(_e, 'recentErrors', {
        enumerable: !0,
        get: function () {
          return p.recentErrors;
        },
      }),
      (_e.randomUUID = h),
      (_e.setInvalidator = function (e) {
        E = e;
      }),
      (_e.onSubscriptionRequired = function (e) {
        return (
          y.add(e),
          () => {
            y.delete(e);
          }
        );
      }),
      (_e.onAdminReauthRequired = function (e) {
        return (
          v.add(e),
          () => {
            v.delete(e);
          }
        );
      }),
      (_e.onFreeLimit = function (e) {
        return (
          _.add(e),
          () => {
            _.delete(e);
          }
        );
      }),
      (_e.onShopWrite = function (e) {
        return (
          O.add(e),
          () => {
            O.delete(e);
          }
        );
      }),
      (_e.onUpgradeNeeded = function (e) {
        return (
          P.add(e),
          () => {
            P.delete(e);
          }
        );
      }),
      (_e.onDeviceNotice = function (e) {
        return (
          w.add(e),
          () => {
            w.delete(e);
          }
        );
      }),
      (_e.emitDeviceNotice = j),
      Object.defineProperty(_e, 'activeShop', {
        enumerable: !0,
        get: function () {
          return T;
        },
      }),
      Object.defineProperty(_e, 'activeUser', {
        enumerable: !0,
        get: function () {
          return k;
        },
      }),
      (_e.selectShop = function (e) {
        T = e;
      }),
      (_e.selectUser = function (e) {
        k = e;
      }),
      (_e.activeUserId = function () {
        return k?.id || k?.userId || null;
      }),
      (_e.baseUrl = function () {
        return U.active();
      }),
      (_e.primaryBaseUrl = function () {
        return U.primary();
      }),
      Object.defineProperty(_e, 'fetchApi', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }),
      (_e.restoreToken = async function () {}),
      (_e.storeToken = async function (e) {
        S = e;
      }),
      (_e.authHeaders = D),
      (_e.request = L),
      (_e.shopPath = q),
      Object.defineProperty(_e, 'JOB_POLL_MS', {
        enumerable: !0,
        get: function () {
          return R;
        },
      }),
      (_e.job = async function (e, t, n, o, { wait: s = !1 } = {}) {
        const c = T;
        if (!c) throw Error('unauthorized');
        const { job: u } = await L(
          q(c, '/jobs' + (s ? '?wait=1' : '')),
          'POST',
          { kind: e, payload: t },
          { key: h(), signal: n },
        );
        if ((o?.(u.id), 'succeeded' === u.state)) return u.result;
        if (['failed', 'cancelled'].includes(u.state))
          throw Error(u.error || 'provider_error');
        const l = () => {
          L(q(c, '/jobs/' + u.id + '/cancel'), 'POST', {}).catch(() => {});
        };
        n.addEventListener('abort', l, { once: !0 });
        try {
          for (let e = 0; !n.aborted; e++) {
            const t = R[Math.min(e, R.length - 1)];
            await new Promise((e, o) => {
              const s = () => {
                  (clearTimeout(c), o(Error('timeout')));
                },
                c = setTimeout(() => {
                  (n.removeEventListener('abort', s), e());
                }, t);
              (n.addEventListener('abort', s, { once: !0 }), n.aborted && s());
            });
            const { job: o } = await L(q(c, '/jobs/' + u.id), 'GET', void 0, {
              signal: n,
            });
            if ('succeeded' === o.state) return o.result;
            if (['failed', 'cancelled'].includes(o.state))
              throw Error(o.error || 'provider_error');
          }
          throw Error('timeout');
        } finally {
          n.removeEventListener('abort', l);
        }
      }),
      r(d[0]),
      r(d[1]));
    var e,
      t = r(d[2]),
      n = r(d[3]),
      o = r(d[4]),
      s = (e = o) && e.__esModule ? e : { default: e },
      c = r(d[5]),
      u = r(d[6]);
    r(d[7]);
    var l = r(d[8]),
      f = r(d[9]),
      p = r(d[10]);
    r(d[11]);
    var b = r(d[12]);
    function h() {
      return (0, n.uuidFrom)(globalThis.crypto, t.randomUUID);
    }
    const y = new Set(),
      v = new Set();
    let E = null;
    const _ = new Set(),
      O = new Set();
    const P = new Set();
    const w = new Set();
    function j(e, t, n = '') {
      ('device_limit' !== e &&
        'device_limit_plan' !== e &&
        'session_ended' !== e) ||
        n.startsWith('/v1/auth/logout') ||
        w.forEach((n) => n({ code: e, details: t || {} }));
    }
    let S = null,
      T = null,
      k = null;
    const U = (0, u.apiBases)({ api: void 0, fallback: void 0, web: !0 });
    const M = U.fetchApi;
    function D() {
      const e =
        'undefined' == typeof document
          ? ''
          : document.cookie
              .split('; ')
              .find((e) => e.startsWith('anbari_csrf='))
              ?.split('=')[1];
      return e ? { 'x-csrf-token': decodeURIComponent(e) } : {};
    }
    const A = new Map();
    function I(e) {
      if (!e) return void A.clear();
      const t = '/v1/shops/' + e;
      for (const e of [...A.keys()])
        (e === t || e.startsWith(t + '/') || e.startsWith(t + '?')) &&
          A.delete(e);
    }
    async function L(e, t = 'GET', n, o = {}) {
      if (
        'GET' === t.toUpperCase() &&
        void 0 === n &&
        !o.signal &&
        !o.key &&
        !(0, l.demoActive)()
      ) {
        const s = A.get(e);
        if (s) return s;
        const c = C(e, t, n, o);
        A.set(e, c);
        const u = () => {
          A.get(e) === c && A.delete(e);
        };
        return (c.then(u, u), c);
      }
      return C(e, t, n, o);
    }
    async function C(e, t, n, o) {
      if ((0, l.demoActive)()) {
        const o = await (0, f.demoRequest)(e, t, n);
        return (
          ['POST', 'PUT', 'PATCH', 'DELETE'].includes(t.toUpperCase()) &&
            E?.(l.DEMO_SHOP_ID),
          o
        );
      }
      if (e.startsWith('/v1/shops/' + l.DEMO_SHOP_ID))
        throw new p.ApiError('demo_only', 409, void 0, e);
      const s = {
        method: t,
        credentials: 'include',
        headers: {
          ...D(),
          ...(void 0 === n ? {} : { 'Content-Type': 'application/json' }),
          ...(o.key ? { 'idempotency-key': o.key } : {}),
        },
        body: void 0 === n ? void 0 : JSON.stringify(n),
        signal: o.signal,
      };
      let h;
      const w = Date.now(),
        S = !(0, c.isOnline)();
      try {
        h = await M(e, s);
      } catch (t) {
        const n = (0, u.transportFailed)(o.signal);
        throw (
          (0, p.markTransport)(t, {
            path: e,
            ms: Date.now() - w,
            aborted: !n,
            knownOffline: S,
          }),
          n && (0, c.markOffline)(),
          t
        );
      }
      (0, c.markOnline)();
      const T = await h.json().catch(() => null);
      if (!h.ok) {
        const t = T?.error?.code || 'backend_missing';
        throw (
          (0, b.isServerBusy)({ status: h.status, message: t }) &&
            (0, b.busyToastPath)(e) &&
            (0, b.noteServerBusy)(),
          402 === h.status &&
            'subscription_required' === t &&
            y.forEach((t) => t(e)),
          402 !== h.status ||
            ('import_paid_only' !== t &&
              'connector_paid_only' !== t &&
              'api_plus_only' !== t) ||
            P.forEach((e) =>
              e(t, T?.error && 'object' == typeof T.error ? T.error : {}),
            ),
          402 === h.status &&
            'free_limit_reached' === t &&
            _.forEach((e) =>
              e(T?.error && 'object' == typeof T.error ? T.error : {}),
            ),
          'admin_reauth_required' === t && v.forEach((e) => e()),
          j(t, T?.error && 'object' == typeof T.error ? T.error : void 0, e),
          new p.ApiError(
            t,
            h.status,
            T?.error && 'object' == typeof T.error ? T.error : void 0,
            e,
          )
        );
      }
      const k = ['POST', 'PUT', 'PATCH', 'DELETE'].includes(t.toUpperCase()),
        U = e.match(/^\/v1\/shops\/([^/?#]+)\//),
        A = [
          '/realtime',
          '/ticket',
          '/search',
          '/export',
          '/jobs/',
          '/billing/quote',
          '/presence',
        ].some((t) => e.includes(t));
      if (k && U && !A) {
        const e = decodeURIComponent(U[1]);
        (I(U[1]), E?.(e), O.forEach((t) => t(e)));
      }
      return T;
    }
    function q(e, t) {
      return '/v1/shops/' + e.id + t;
    }
    const R = [300, 500, 800, 1500];
    ((0, p.setErrorEnvironment)({
      appVersion: s.default.expo.version,
      platform: 'web',
    }),
      (0, p.setErrorSender)(
        (e) =>
          L('/v1/client-errors', 'POST', {
            records: e,
            ...(T ? { shopId: T.id } : {}),
          }),
        c.isOnline,
      ));
  },
  415,
  [94, 416, 418, 425, 426, 427, 445, 446, 448, 449, 429, 477, 479],
);
