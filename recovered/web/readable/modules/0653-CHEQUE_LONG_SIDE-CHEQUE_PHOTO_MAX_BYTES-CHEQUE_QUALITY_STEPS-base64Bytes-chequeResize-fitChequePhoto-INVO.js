// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 653; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'CHEQUE_LONG_SIDE', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'CHEQUE_PHOTO_MAX_BYTES', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'CHEQUE_QUALITY_STEPS', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      (e.base64Bytes = u),
      (e.chequeResize = function (n, o) {
        return !(n > 0 && o > 0) || Math.max(n, o) <= t
          ? null
          : n >= o
            ? { width: t }
            : { height: t };
      }),
      (e.fitChequePhoto = async function (t) {
        for (const c of o) {
          const o = await t(c);
          if (o.base64 && u(o.base64) <= n)
            return {
              dataUrl: 'data:image/jpeg;base64,' + o.base64,
              uri: o.uri,
              bytes: u(o.base64),
              quality: c,
            };
        }
        throw Error('cheque_photo_too_large');
      }),
      Object.defineProperty(e, 'INVOICE_LONG_SIDE', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'INVOICE_PHOTO_MAX_BYTES', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }),
      (e.invoiceResize = function (t, n) {
        return !(t > 0 && n > 0) || Math.max(t, n) <= c
          ? null
          : t >= n
            ? { width: c }
            : { height: c };
      }),
      (e.fitInvoicePhoto = async function (t) {
        for (const n of o) {
          const o = await t(n);
          if (o.base64 && u(o.base64) <= s)
            return {
              dataUrl: 'data:image/jpeg;base64,' + o.base64,
              uri: o.uri,
              bytes: u(o.base64),
              quality: n,
            };
        }
        throw Error('photo_too_large');
      }));
    const t = 1280,
      n = 18e4,
      o = [0.72, 0.62, 0.52, 0.44, 0.36];
    function u(t) {
      const n = t.endsWith('==') ? 2 : t.endsWith('=') ? 1 : 0;
      return Math.floor((3 * t.length) / 4) - n;
    }
    const c = 1600,
      s = 3e5;
  },
  653,
  [],
);
