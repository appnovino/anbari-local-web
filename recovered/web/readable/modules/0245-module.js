// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 245; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }),
      r(d[0]));
    var o = function (o, n) {
        var t = this;
        if (t.instancePool.length) {
          var l = t.instancePool.pop();
          return (t.call(l, o, n), l);
        }
        return new t(o, n);
      },
      n = function (o) {
        var n = this;
        (o.destructor(),
          n.instancePool.length < n.poolSize && n.instancePool.push(o));
      },
      t = o,
      l = {
        addPoolingTo: function (o, l) {
          var u = o;
          return (
            (u.instancePool = []),
            (u.getPooled = l || t),
            u.poolSize || (u.poolSize = 10),
            (u.release = n),
            u
          );
        },
        twoArgumentPooler: o,
      };
  },
  245,
  [117],
);
