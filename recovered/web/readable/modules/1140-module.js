// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1140; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return s;
        },
      }));
    var t = e(r(d[0])),
      u = e(r(d[1])),
      n = e(r(d[2])),
      l = e(r(d[3])),
      o = e(r(d[4])),
      c = e(r(d[5])),
      f = e(r(d[6])),
      s = (function () {
        function e() {
          this.decoder = new c.default();
        }
        return (
          (e.prototype.decode = function (e, c) {
            var s, v;
            if (null != c && void 0 !== c.get(n.default.PURE_BARCODE)) {
              var _ = e.getBlackMatrix();
              ((s = this.decoder.decodeBitMatrix(_, null != c ? c : void 0)),
                (v = []));
            } else {
              var E = new f.default(e.getBlackMatrix()).detect(
                null != c ? c : void 0,
              );
              ((v = E.getPoints()),
                (s = this.decoder.decodeBitMatrix(
                  E.getBits(),
                  null != c ? c : void 0,
                )));
            }
            var M = new t.default(
                s.getText(),
                s.getRawBytes(),
                s.getNumBits(),
                v,
                u.default.MICRO_QR_CODE,
                o.default.currentTimeMillis(),
              ),
              B = s.getByteSegments();
            null !== B && M.putMetadata(l.default.BYTE_SEGMENTS, B);
            var R = s.getECLevel();
            return (
              null !== R && M.putMetadata(l.default.ERROR_CORRECTION_LEVEL, R),
              M
            );
          }),
          (e.prototype.reset = function () {}),
          e
        );
      })();
  },
  1140,
  [1039, 1040, 1027, 1041, 1020, 1141, 1147],
);
