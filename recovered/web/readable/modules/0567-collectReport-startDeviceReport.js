// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 567; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.collectReport = v),
      (_e.startDeviceReport = function (e) {
        if (!e) return () => {};
        ((b = ''), (I = 0), h(!0));
        const t = () => {
          'undefined' != typeof document &&
            'visible' === document.visibilityState &&
            h();
        };
        'undefined' != typeof document &&
          document.addEventListener('visibilitychange', t);
        return () => {
          'undefined' != typeof document &&
            document.removeEventListener('visibilitychange', t);
        };
      }),
      r(d[0]));
    var t = e(r(d[1]));
    (r(d[2]), r(d[3]));
    var n = e(r(d[4])),
      o = e(r(d[5])),
      l = r(d[6]),
      u = r(d[7]),
      c = r(d[8]),
      s = r(d[9]);
    const f = (e) => {
      try {
        const t = e();
        return void 0 === t ? null : t;
      } catch {
        return null;
      }
    };
    function v() {
      f(() => t.default.constants);
      return (0, s.cleanReport)({
        channel: (0, s.channelOf)({
          os: 'web',
          applicationId: null,
          bazaar: c.fromBazaar,
        }),
        appVersion: f(() => n.default.expo.version),
        nativeVersion: null,
        nativeBuild: null,
        updateId: null,
        updateAt: null instanceof Date ? null.toISOString() : null,
        os: 'web',
        model: f(() => (0, u.deviceInfo)(t.default).name),
      });
    }
    const p = 'anbari-device-key';
    let y = null;
    async function w() {
      if (y) return y;
      let e = null;
      if (!e)
        try {
          const n = 'undefined' != typeof window;
          ((e =
            'string' ==
              typeof (t = n
                ? window.localStorage.getItem(p)
                : await o.default.getItem(p)) &&
            /^[A-Za-z0-9-]{8,64}$/.test(t) &&
            !/^0+$/.test(t.replace(/-/g, ''))
              ? t
              : null),
            e ||
              ((e = (0, l.randomUUID)()),
              n
                ? window.localStorage.setItem(p, e)
                : await o.default.setItem(p, e)));
        } catch {
          e = null;
        }
      var t;
      return ((y = e), e);
    }
    let b = '',
      I = 0,
      _ = !1;
    async function h(e = !1) {
      if (_) return;
      const t = v();
      if (!t) return;
      const n = (0, s.reportKey)(t);
      if (e || n !== b || !(Date.now() - I < s.REPORT_EVERY_MS)) {
        _ = !0;
        try {
          const e = await w();
          (await (0, l.request)('/v1/me/device', 'POST', {
            ...t,
            ...(e ? { deviceKey: e } : {}),
          }),
            (b = n),
            (I = Date.now()));
        } catch {
        } finally {
          _ = !1;
        }
      }
    }
  },
  567,
  [203, 94, 568, 264, 426, 258, 415, 477, 446, 571],
);
