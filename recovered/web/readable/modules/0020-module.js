// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 20; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function o(o) {
      return o && o.__esModule ? o : { default: o };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var e = o(r(d[0])),
      t = o(r(d[1])),
      l = {
        backgroundColor: !0,
        borderColor: !0,
        borderTopColor: !0,
        borderRightColor: !0,
        borderBottomColor: !0,
        borderLeftColor: !0,
        color: !0,
        shadowColor: !0,
        textDecorationColor: !0,
        textShadowColor: !0,
      };
    function u(o, u) {
      var n = o;
      return (
        (null != u && e.default[u]) || 'number' != typeof o
          ? null != u && l[u] && (n = (0, t.default)(o))
          : (n = o + 'px'),
        n
      );
    }
  },
  20,
  [21, 22],
);
