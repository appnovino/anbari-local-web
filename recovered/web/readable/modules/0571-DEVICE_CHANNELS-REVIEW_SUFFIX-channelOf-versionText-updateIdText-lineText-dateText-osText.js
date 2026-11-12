// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 571; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'DEVICE_CHANNELS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'REVIEW_SUFFIX', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.channelOf = function ({ os: n, applicationId: t, bazaar: o }) {
        return 'web' === n
          ? 'web'
          : 'string' == typeof t && t.endsWith(u)
            ? 'review'
            : 'android' === n
              ? o
                ? 'bazaar'
                : 'site_apk'
              : 'ios';
      }),
      (e.versionText = s),
      (e.updateIdText = c),
      (e.lineText = p),
      (e.dateText = f),
      (e.osText = function (n, t) {
        const u = p(n, 12);
        if (!u) return null;
        const o = null == t || '' === t ? null : p(t, 24);
        return p(o ? u + ' ' + o : u, 40);
      }),
      (e.cleanReport = function (u, o = Date.now()) {
        const l = t.includes(u?.channel) ? u.channel : null;
        return l
          ? {
              channel: l,
              appVersion: s(u.appVersion),
              nativeVersion: s(u.nativeVersion),
              nativeBuild: s(u.nativeBuild),
              updateId: c(u.updateId),
              updateAt: f(u.updateAt, o),
              os: p(u.os, 40),
              model: (0, n.cleanDeviceName)(u.model) || null,
            }
          : null;
      }),
      Object.defineProperty(e, 'reportKey', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      Object.defineProperty(e, 'REPORT_EVERY_MS', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }));
    var n = r(d[0]);
    const t = ['bazaar', 'site_apk', 'ios', 'web', 'review'],
      u = '.review';
    const o = /^[0-9A-Za-z._+-]{1,32}$/,
      l = /^[0-9A-Za-z-]{1,64}$/;
    function s(n) {
      const t =
        'number' == typeof n && Number.isFinite(n)
          ? String(n)
          : 'string' == typeof n
            ? n.trim()
            : '';
      return o.test(t) ? t : null;
    }
    function c(n) {
      return 'string' == typeof n && l.test(n.trim()) ? n.trim() : null;
    }
    function p(n, t) {
      if ('string' != typeof n && 'number' != typeof n) return null;
      return (
        String(n)
          .replace(/[\u0000-\u001f\u007f]+/g, ' ')
          .replace(/\s+/g, ' ')
          .trim()
          .slice(0, t)
          .trim() || null
      );
    }
    function f(n, t = Date.now()) {
      const u =
        n instanceof Date
          ? n.getTime()
          : 'string' == typeof n || 'number' == typeof n
            ? new Date(n).getTime()
            : NaN;
      return Number.isFinite(u) && u >= Date.UTC(2020, 0, 1) && u <= t + 864e5
        ? new Date(u).toISOString()
        : null;
    }
    const b = (n) =>
        [
          n.channel,
          n.appVersion,
          n.nativeVersion,
          n.nativeBuild,
          n.updateId,
          n.updateAt,
          n.os,
          n.model,
        ].join('|'),
      y = 18e5;
  },
  571,
  [478],
);
