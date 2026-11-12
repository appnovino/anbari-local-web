// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 146; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i2, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var t =
      Number.isNaN ||
      function (t) {
        return 'number' == typeof t && t != t;
      };
    function n(n, u) {
      return n === u || !(!t(n) || !t(u));
    }
    function u(t, u) {
      if (t.length !== u.length) return !1;
      for (var l = 0; l < t.length; l++) if (!n(t[l], u[l])) return !1;
      return !0;
    }
    function l(t, n) {
      void 0 === n && (n = u);
      var l = null;
      function i() {
        for (var u = [], i = 0; i < arguments.length; i++) u[i] = arguments[i];
        if (l && l.lastThis === this && n(u, l.lastArgs)) return l.lastResult;
        var s = t.apply(this, u);
        return ((l = { lastResult: s, lastArgs: u, lastThis: this }), s);
      }
      return (
        (i.clear = function () {
          l = null;
        }),
        i
      );
    }
  },
  146,
  [],
);
