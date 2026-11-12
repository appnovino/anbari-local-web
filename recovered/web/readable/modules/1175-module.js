// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1175; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      o = (function () {
        function t() {}
        return (
          (t.prototype.writeBytes = function (t) {
            this.writeBytesOffset(t, 0, t.length);
          }),
          (t.prototype.writeBytesOffset = function (t, o, f) {
            if (null == t) throw new n.default();
            if (o < 0 || o > t.length || f < 0 || o + f > t.length || o + f < 0)
              throw new e.default();
            if (0 !== f) for (var u = 0; u < f; u++) this.write(t[o + u]);
          }),
          (t.prototype.flush = function () {}),
          (t.prototype.close = function () {}),
          t
        );
      })();
  },
  1175,
  [1022, 1176],
);
