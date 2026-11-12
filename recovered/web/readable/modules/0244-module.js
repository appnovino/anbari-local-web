// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 244; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var e,
      t = r(d[0]),
      o = (e = t) && e.__esModule ? e : { default: e },
      n = o.default.twoArgumentPooler;
    function u(e, t) {
      ((this.width = e), (this.height = t));
    }
    ((u.prototype.destructor = function () {
      ((this.width = null), (this.height = null));
    }),
      (u.getPooledFromElement = function (e) {
        return u.getPooled(e.offsetWidth, e.offsetHeight);
      }),
      o.default.addPoolingTo(u, n));
    var l = u;
  },
  244,
  [245],
);
