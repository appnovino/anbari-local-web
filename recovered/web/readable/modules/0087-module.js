// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 87; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e };
    var f = function (e, t) {
      var f = e.style;
      for (var o in t)
        if (t.hasOwnProperty(o)) {
          var u = 0 === o.indexOf('--'),
            l = (0, n.default)(o, t[o], u);
          ('float' === o && (o = 'cssFloat'),
            u ? f.setProperty(o, l) : (f[o] = l));
        }
    };
  },
  87,
  [88],
);
