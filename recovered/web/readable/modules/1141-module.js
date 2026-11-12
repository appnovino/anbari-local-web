// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1141; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      n = e(r(d[2])),
      u = e(r(d[3])),
      c = e(r(d[4])),
      i = e(r(d[5])),
      f = (function () {
        function e() {
          this.rsDecoder = new n.default(o.default.QR_CODE_FIELD_256);
        }
        return (
          (e.prototype.decodeBitMatrix = function (e, t) {
            var o = new u.default(e),
              n = o.readFormatInformation(),
              f = i.default.getVersionForIndicator(n.getVersionIndicator()),
              s = o.readCodewords(),
              l = f.getNumDataCodewords();
            f.getNumECCodewords();
            return (
              1 === f.getVersionNumber() || this.correctErrors(s, l),
              c.default.decode(s.subarray(0, l), f, null != t ? t : null)
            );
          }),
          (e.prototype.correctErrors = function (e, o) {
            var n = new Int32Array(e);
            try {
              this.rsDecoder.decode(n, e.length - o);
            } catch (e) {
              throw new t.default();
            }
            for (var u = 0; u < o; u++) e[u] = 255 & n[u];
          }),
          e
        );
      })();
  },
  1141,
  [1015, 1044, 1048, 1142, 1146, 1144],
);
