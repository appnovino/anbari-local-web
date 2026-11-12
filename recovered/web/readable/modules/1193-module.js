// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1193; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      u = e(r(d[2])),
      o = (function () {
        function e() {}
        return (
          (e.prototype.encode = function (e, o, f, c, l) {
            if (o !== n.default.QR_CODE)
              throw new u.default('No encoder available for format ' + o);
            return new t.default().encode(e, o, f, c, l);
          }),
          e
        );
      })();
  },
  1193,
  [1194, 1040, 1014],
);
