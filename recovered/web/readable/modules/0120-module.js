// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 120; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, i, _a, m, _e, d) {
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
      if (e) {
        if ('string' == typeof e) return (0, r.default)(e, t);
        var n = {}.toString.call(e).slice(8, -1);
        return (
          'Object' === n && e.constructor && (n = e.constructor.name),
          'Map' === n || 'Set' === n
            ? Array.from(e)
            : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? (0, r.default)(e, t)
              : void 0
        );
      }
    }
  },
  120,
  [121],
);
