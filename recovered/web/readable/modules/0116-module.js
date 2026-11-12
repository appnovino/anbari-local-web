// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 116; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    var t = function t(n, f, u) {
      if ((void 0 === u && (u = -1), 0 === u)) return !0;
      if (n === f) return !1;
      if ('function' == typeof n && 'function' == typeof f) return !1;
      if ('object' != typeof n || null === n) return n !== f;
      if ('object' != typeof f || null === f) return !0;
      if (n.constructor !== f.constructor) return !0;
      if (Array.isArray(n)) {
        var o = n.length;
        if (f.length !== o) return !0;
        for (var c = 0; c < o; c++) if (t(n[c], f[c], u - 1)) return !0;
      } else {
        for (var l in n) if (t(n[l], f[l], u - 1)) return !0;
        for (var v in f) if (void 0 === n[v] && void 0 !== f[v]) return !0;
      }
      return !1;
    };
  },
  116,
  [],
);
