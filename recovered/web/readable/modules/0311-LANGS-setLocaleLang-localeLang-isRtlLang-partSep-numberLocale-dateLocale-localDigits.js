// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 311; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'LANGS', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.setLocaleLang = function (n) {
        t = n;
      }),
      (e.localeLang = function () {
        return t;
      }),
      Object.defineProperty(e, 'isRtlLang', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'partSep', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      (e.numberLocale = function (n = t) {
        return 'fa' === n ? 'fa-IR' : 'ar' === n ? 'ar-EG' : 'en-US';
      }),
      (e.dateLocale = function (n = t) {
        return 'fa' === n
          ? 'fa-IR-u-ca-persian'
          : 'ar' === n
            ? 'ar-EG-u-ca-gregory'
            : 'en-US-u-ca-gregory';
      }),
      (e.localDigits = function (n, o = t) {
        return String(n).replace(/[0-9\u06f0-\u06f9\u0660-\u0669]/g, (n) => {
          const t = n.charCodeAt(0),
            c =
              t >= 1776 && t <= 1785
                ? t - 1776
                : t >= 1632 && t <= 1641
                  ? t - 1632
                  : t - 48;
          return u[o][c];
        });
      }),
      (e.setTranslator = function (n) {
        f = n;
      }),
      (e.L = s),
      (e.localized = function (n) {
        const t = new WeakMap(),
          o = (n) =>
            'string' == typeof n
              ? s(n)
              : Array.isArray(n)
                ? n.map(o)
                : n && 'object' == typeof n
                  ? c(n)
                  : n,
          c = (n) => {
            if (t.has(n)) return t.get(n);
            const c = new Proxy(n, {
              get(n, t, c) {
                const u = Reflect.get(n, t, c);
                return 'symbol' == typeof t ? u : o(u);
              },
            });
            return (t.set(n, c), c);
          };
        return c(n);
      }),
      (e.Lc = function (n, t, o) {
        const c = n + '|' + t,
          u = f(c);
        return s(u === c ? t : u, o);
      }));
    const n = ['fa', 'en', 'ar'];
    let t = 'fa';
    const o = (n = t) => 'en' !== n,
      c = (n = t) => ('en' === n ? ' \xb7 ' : '\u060c ');
    const u = {
      fa: '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9',
      ar: '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669',
      en: '0123456789',
    };
    let f = (n) => n;
    function s(n, t) {
      let o = f(n);
      if (t)
        for (const [n, c] of Object.entries(t))
          o = o.split('{' + n + '}').join(String(c));
      return o;
    }
  },
  311,
  [],
);
