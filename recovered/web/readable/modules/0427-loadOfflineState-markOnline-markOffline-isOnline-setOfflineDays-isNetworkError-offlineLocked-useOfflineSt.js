// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 427; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.loadOfflineState = h),
      (_e.markOnline = function () {
        const e = Date.now(),
          t = !l;
        ((l = !0),
          (d = e),
          e - w > 6e4 &&
            ((w = e), o.default.setItem(u, String(e)).catch(() => {})));
        t && S();
      }),
      (_e.markOffline = function () {
        l && ((l = !1), S());
      }),
      (_e.isOnline = function () {
        return l;
      }),
      (_e.setOfflineDays = function (e) {
        const t = Number(e);
        if (null == e || !Number.isInteger(t) || t < 0 || t > 30 || t === y)
          return;
        ((y = t), o.default.setItem(c, String(t)).catch(() => {}), S());
      }),
      (_e.isNetworkError = function (e) {
        if (!e || 'object' != typeof e) return !1;
        if ('number' == typeof e.status) return !1;
        const t = e.name;
        return (
          'TypeError' === t ||
          'TimeoutError' === t ||
          'AbortError' === t ||
          'timeout' === e.message ||
          (0, f.isTransportError)(e)
        );
      }),
      (_e.offlineLocked = v),
      (_e.useOfflineStatus = function () {
        const [, e] = (0, t.useState)(0);
        return (
          (0, t.useEffect)(() => {
            const t = () => e((e) => e + 1);
            (b.add(t), h());
            const n = setInterval(t, 6e4);
            return () => {
              (b.delete(t), clearInterval(n));
            };
          }, []),
          { online: l, locked: v(), days: y, lastOnline: d }
        );
      }),
      (_e.saveSession = async function (e, t) {
        await (0, s.writeOffline)('session', {
          user: e,
          shops: t,
          savedAt: new Date().toISOString(),
        });
      }),
      (_e.cachedSession = async function () {
        return (0, s.readOffline)('session');
      }),
      (_e.forgetOffline = async function () {
        ((d = 0), (l = !0));
        try {
          await o.default.multiRemove([u]);
        } catch {}
        (await (0, s.clearOffline)((e) => e.startsWith('queue:')), S());
      }),
      (_e.registerOfflineShell = function () {
        try {
          if (
            'undefined' == typeof window ||
            !('serviceWorker' in navigator) ||
            !window.isSecureContext
          )
            return;
          navigator.serviceWorker
            .register('/notifications-sw.js', { scope: '/' })
            .catch(() => {});
        } catch {}
      }));
    var e,
      t = r(_d[0]),
      n = r(_d[1]),
      o = (e = n) && e.__esModule ? e : { default: e },
      s = r(_d[2]),
      f = r(_d[3]);
    const u = 'anbari.offline.lastOnline',
      c = 'anbari.offline.days';
    let l = !0,
      d = 0,
      w = 0,
      y = 3,
      O = null;
    const b = new Set(),
      S = () => b.forEach((e) => e());
    function h() {
      return (
        (O ??= (async () => {
          try {
            const [e, t] = await Promise.all([
                o.default.getItem(u),
                o.default.getItem(c),
              ]),
              n = Number(e);
            Number.isFinite(n) && n > d && (d = n);
            const s = Number(t);
            null !== t && Number.isInteger(s) && s >= 0 && s <= 30 && (y = s);
          } catch {}
          S();
        })()),
        O
      );
    }
    function v(e = Date.now()) {
      return y > 0 && !l && d > 0 && e - d > 864e5 * y;
    }
  },
  427,
  [2, 258, 428, 429],
);
