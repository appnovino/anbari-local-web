// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 545; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.iosNeedsHomeScreen = i),
      (_e.webPushState = l),
      (_e.enableWebPush = f),
      (_e.disableWebPush = h),
      (_e.forgetWebPushHere = async function () {
        try {
          await (await w())?.unsubscribe();
        } catch {}
      }));
    var e = r(d[0]),
      t = r(d[1]);
    const n = () => ('undefined' != typeof navigator ? navigator : null);
    function i() {
      const e = n();
      if (!e || 'undefined' == typeof window) return !1;
      const t =
          /iPhone|iPad|iPod/.test(e.userAgent) ||
          ('MacIntel' === e.platform && e.maxTouchPoints > 1),
        i =
          window.matchMedia?.('(display-mode: standalone)').matches ||
          !!e.standalone;
      return t && !i;
    }
    const o = () =>
      'undefined' != typeof window &&
      window.isSecureContext &&
      'Notification' in window &&
      'serviceWorker' in navigator &&
      'PushManager' in window;
    async function s() {
      return (
        (await navigator.serviceWorker.getRegistration('/')) ||
        navigator.serviceWorker.register('/notifications-sw.js', { scope: '/' })
      );
    }
    const u = (e) => {
      const t = atob(
        e.replace(/-/g, '+').replace(/_/g, '/') +
          '='.repeat((4 - (e.length % 4)) % 4),
      );
      return Uint8Array.from(t, (e) => e.charCodeAt(0));
    };
    let c = null;
    const p = () =>
      c ||
      (c = (0, e.request)('/v1/push/public-key').catch((e) => {
        throw ((c = null), e);
      }));
    async function l() {
      if (i()) return 'ios-home';
      if (!o()) return 'unsupported';
      if ('denied' === Notification.permission) return 'denied';
      const t = await p().catch(() => null);
      if (t && !t.enabled) return 'server-off';
      if ('granted' !== Notification.permission) return 'off';
      const n = await (
        await navigator.serviceWorker.getRegistration('/')
      )?.pushManager
        .getSubscription()
        .catch(() => null);
      if (!n) return 'off';
      const s = await (0, e.request)('/v1/push/status', 'POST', {
        endpoint: n.endpoint,
      }).catch(() => null);
      return !0 === s?.here ? 'on' : 'off';
    }
    async function f(t) {
      if (i()) return 'ios-home';
      if (!o()) return 'unsupported';
      const n = await p();
      if (!n.enabled || !n.publicKey) return 'server-off';
      const c = await Notification.requestPermission();
      if ('granted' !== c) return 'denied' === c ? 'denied' : 'off';
      const l = await s();
      await navigator.serviceWorker.ready;
      let f = await l.pushManager.getSubscription();
      if (f && f.options?.applicationServerKey) {
        const e = new Uint8Array(f.options.applicationServerKey),
          t = u(n.publicKey);
        (e.length !== t.length || e.some((e, n) => e !== t[n])) &&
          (await f.unsubscribe().catch(() => {}), (f = null));
      }
      return (
        (f =
          f ||
          (await l.pushManager.subscribe({
            userVisibleOnly: !0,
            applicationServerKey: u(n.publicKey),
          }))),
        await (0, e.request)('/v1/push/subscribe', 'POST', {
          subscription: f.toJSON(),
          ...(t ? { shopId: t } : {}),
        }),
        'on'
      );
    }
    const w = async () =>
      o()
        ? ((
            await navigator.serviceWorker.getRegistration('/')
          )?.pushManager.getSubscription() ?? null)
        : null;
    async function h() {
      try {
        const t = await w();
        if (!t) return;
        (await (0, e.request)('/v1/push/subscribe', 'DELETE', {
          endpoint: t.endpoint,
        }).catch(() => {}),
          await t.unsubscribe().catch(() => {}));
      } catch {}
    }
    const b = {
      name: 'webpush',
      available: async () => 'unsupported' !== (await l()),
      register: async () => {
        if ('on' !== (await f())) return null;
        const e = await (
          await navigator.serviceWorker.getRegistration('/')
        )?.pushManager.getSubscription();
        return e ? { provider: 'webpush', token: e.endpoint } : null;
      },
      unregister: h,
    };
    (0, t.registerPushProvider)(b);
  },
  545,
  [415, 546],
);
