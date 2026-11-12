// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 119; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var e,
      t = _r(d[0]),
      r = (e = t) && e.__esModule ? e : { default: e };
    function n(e, t) {
      var n =
        ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator'];
      if (n) return (n = n.call(e)).next.bind(n);
      if (
        Array.isArray(e) ||
        (n = (0, r.default)(e)) ||
        (t && e && 'number' == typeof e.length)
      ) {
        n && (e = n);
        var o = 0;
        return function () {
          return o >= e.length ? { done: !0 } : { done: !1, value: e[o++] };
        };
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      );
    }
  },
  119,
  [120],
);
