// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 478; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'SESSION_KINDS', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'isGenericDeviceName', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (e.cleanDeviceName = o),
      (e.webDeviceName = u),
      (e.nativeDeviceName = function ({
        os: t,
        brand: n,
        manufacturer: s,
        model: u,
      }) {
        const f = (t) => ('string' == typeof t ? t.trim() : '');
        if ('ios' === t) {
          const t = f(u);
          return o(
            t && /^(iPhone|iPad)/i.test(t)
              ? t
              : '\u0622\u06cc\u0641\u0648\u0646',
          );
        }
        const m = c(f(n) || f(s)),
          p = f(u);
        return p
          ? o(
              !m || p.toLowerCase().startsWith(m.toLowerCase())
                ? p
                : m + ' ' + p,
            )
          : m ||
              '\u06af\u0648\u0634\u06cc \u0627\u0646\u062f\u0631\u0648\u06cc\u062f';
      }),
      (e.pickDeviceName = function ({
        body: t,
        header: n,
        userAgent: c,
        kind: f,
      }) {
        if (!s(t)) {
          const n = o(t);
          if (n) return n;
        }
        const m = o(n);
        return m && !s(m) ? m : 'web' === f ? u(c) : '\u06af\u0648\u0634\u06cc';
      }),
      (e.shownDeviceName = function (t, n) {
        return s(t)
          ? 'web' === n
            ? '\u0645\u0631\u0648\u0631\u06af\u0631'
            : 'phone' === n
              ? '\u06af\u0648\u0634\u06cc'
              : '\u062f\u0633\u062a\u06af\u0627\u0647 \u0642\u0628\u0644\u06cc'
          : o(t);
      }));
    const t = ['phone', 'web'],
      n = new Set(['myanbari', 'anbari', '']),
      s = (t) => 'string' != typeof t || n.has(t.trim().toLowerCase());
    function o(t) {
      return 'string' != typeof t
        ? ''
        : t
            .replace(
              /[\u0000-\u001f\u007f\u200e\u200f\u202a-\u202e\u2066-\u2069]/g,
              ' ',
            )
            .replace(/\s+/g, ' ')
            .trim()
            .slice(0, 80)
            .trim();
    }
    const c = (t) => (t ? t[0].toUpperCase() + t.slice(1) : t);
    function u(t) {
      const n = 'string' == typeof t ? t : '',
        s = /Edg(?:e|A|iOS)?\//.test(n)
          ? 'Edge'
          : /OPR\/|Opera/.test(n)
            ? 'Opera'
            : /SamsungBrowser\//.test(n)
              ? 'Samsung Internet'
              : /Firefox\/|FxiOS\//.test(n)
                ? 'Firefox'
                : /Chrome\/|CriOS\//.test(n)
                  ? 'Chrome'
                  : /Safari\//.test(n) && /Version\//.test(n)
                    ? 'Safari'
                    : '',
        o = /iPhone/.test(n)
          ? '\u0622\u06cc\u0641\u0648\u0646'
          : /iPad/.test(n)
            ? '\u0622\u06cc\u200c\u067e\u062f'
            : /Android/.test(n)
              ? '\u0627\u0646\u062f\u0631\u0648\u06cc\u062f'
              : /Windows/.test(n)
                ? '\u0648\u06cc\u0646\u062f\u0648\u0632'
                : /CrOS/.test(n)
                  ? '\u06a9\u0631\u0648\u0645\u200c\u0628\u0648\u06a9'
                  : /Mac OS X|Macintosh/.test(n)
                    ? '\u0645\u06a9'
                    : /Linux/.test(n)
                      ? '\u0644\u06cc\u0646\u0648\u06a9\u0633'
                      : '';
      return s && o
        ? s + ' \u0631\u0648\u06cc ' + o
        : s ||
            (o
              ? '\u0645\u0631\u0648\u0631\u06af\u0631 \u0631\u0648\u06cc ' + o
              : '\u0645\u0631\u0648\u0631\u06af\u0631');
    }
  },
  478,
  [],
);
