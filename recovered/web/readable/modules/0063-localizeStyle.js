// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 63; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      (e.localizeStyle = function (l, s) {
        if (null != l[t]) {
          var c = s ? 1 : 0;
          if (n.has(l)) {
            var f = n.get(l),
              o = f[c];
            return (null == o && ((o = u(l, s)), (f[c] = o), n.set(l, f)), o);
          }
          var v = u(l, s),
            y = new Array(2);
          return ((y[c] = v), n.set(l, y), v);
        }
        return l;
      }));
    var n = new WeakMap(),
      t = '$$css$localize';
    function u(n, u) {
      var l = {};
      for (var s in n)
        if (s !== t) {
          var c = n[s];
          Array.isArray(c) ? (l[s] = u ? c[1] : c[0]) : (l[s] = c);
        }
      return l;
    }
  },
  63,
  [],
);
