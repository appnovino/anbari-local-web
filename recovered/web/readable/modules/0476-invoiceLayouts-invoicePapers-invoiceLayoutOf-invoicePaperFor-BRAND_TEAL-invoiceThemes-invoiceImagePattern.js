// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 476; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'invoiceLayouts', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }),
      Object.defineProperty(e, 'invoicePapers', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'invoiceLayoutOf', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'invoicePaperFor', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'BRAND_TEAL', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }),
      Object.defineProperty(e, 'invoiceThemes', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      Object.defineProperty(e, 'invoiceImagePattern', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(e, 'isInvoiceImage', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.invoiceAccentInk = b),
      (e.resolveInvoiceTheme = function (f) {
        if ('custom' === f?.theme) {
          const n = /^#[0-9a-f]{6}$/i.test(f.accent || '')
              ? f.accent
              : '#087f73',
            t = b(n);
          return {
            ...l.classic,
            accent: n,
            line: n,
            headerBg: n,
            headerInk: t,
            payableBg: n,
            payableInk: t,
          };
        }
        return l[f?.theme] || l.classic;
      }));
    const f = ['casual', 'normal', 'formal'],
      n = ['80mm', 'a5', 'a4'],
      t = (n) => (f.includes(n?.layout) ? n.layout : 'normal'),
      c = (f) => ('casual' === f ? '80mm' : 'normal' === f ? 'a5' : 'a4'),
      i = '#0f766e',
      l = {
        classic: {
          paper: '#ffffff',
          ink: '#172b35',
          muted: '#52616b',
          line: '#d6dfe3',
          headerBg: '#ffffff',
          headerInk: '#172b35',
          tableHeadBg: '#f2f4f5',
          payableBg: i,
          payableInk: '#ffffff',
          accent: '#52616b',
        },
        teal: {
          paper: '#ffffff',
          ink: '#173d39',
          muted: '#526b67',
          line: '#a4ccc5',
          headerBg: '#087f73',
          headerInk: '#ffffff',
          tableHeadBg: '#e4f3ef',
          payableBg: i,
          payableInk: '#ffffff',
          accent: '#087f73',
        },
        navy: {
          paper: '#ffffff',
          ink: '#182c49',
          muted: '#53627a',
          line: '#879bb8',
          headerBg: '#182c49',
          headerInk: '#ffffff',
          tableHeadBg: '#e8edf5',
          payableBg: '#182c49',
          payableInk: '#ffffff',
          accent: '#294d7b',
        },
        warm: {
          paper: '#fff9ee',
          ink: '#553c2c',
          muted: '#78604c',
          line: '#d3bda0',
          headerBg: '#6d4932',
          headerInk: '#ffffff',
          tableHeadBg: '#f1e3cc',
          payableBg: '#996238',
          payableInk: '#ffffff',
          accent: '#996238',
        },
        mono: {
          paper: '#ffffff',
          ink: '#111111',
          muted: '#555555',
          line: '#111111',
          headerBg: '#111111',
          headerInk: '#ffffff',
          tableHeadBg: '#eeeeee',
          payableBg: '#111111',
          payableInk: '#ffffff',
          accent: '#111111',
        },
      },
      o =
        /^data:image\/(?:jpeg|png);base64,(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/,
      u = (f) =>
        'string' == typeof f && f.length <= 12e4 && f.length > 24 && o.test(f);
    function b(f) {
      const n = [1, 3, 5]
        .map((n) => parseInt(f.slice(n, n + 2), 16) / 255)
        .map((f) => (f <= 0.04045 ? f / 12.92 : ((f + 0.055) / 1.055) ** 2.4));
      return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2] > 0.179
        ? '#111111'
        : '#ffffff';
    }
  },
  476,
  [],
);
