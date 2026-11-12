// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 88; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var e,
      t = r(d[0]),
      u = (e = t) && e.__esModule ? e : { default: e };
    var n = function (e, t, n) {
      return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n ||
            'number' != typeof t ||
            0 === t ||
            (u.default.hasOwnProperty(e) && u.default[e])
          ? ('' + t).trim()
          : t + 'px';
    };
  },
  88,
  [89],
);
