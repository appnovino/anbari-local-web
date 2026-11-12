// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1111; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return w;
        },
      }));
    var t = e(r(d[0])),
      u = e(r(d[1])),
      n = e(r(d[2])),
      l = e(r(d[3])),
      o = e(r(d[4])),
      f = e(r(d[5])),
      c = e(r(d[6])),
      s = e(r(d[7])),
      v = e(r(d[8])),
      w = (function () {
        function e() {
          this.decoder = new s.default();
        }
        return (
          (e.prototype.decode = function (u, l) {
            var s, w;
            if (
              (void 0 === l && (l = null),
              null != l && l.has(n.default.PURE_BARCODE))
            ) {
              var _ = e.extractPureBits(u.getBlackMatrix());
              ((s = this.decoder.decode(_)), (w = e.NO_POINTS));
            } else {
              var h = new v.default(u.getBlackMatrix()).detect();
              ((s = this.decoder.decode(h.getBits())), (w = h.getPoints()));
            }
            var B = s.getRawBytes(),
              O = new o.default(
                s.getText(),
                B,
                8 * B.length,
                w,
                t.default.DATA_MATRIX,
                c.default.currentTimeMillis(),
              ),
              E = s.getByteSegments();
            null != E && O.putMetadata(f.default.BYTE_SEGMENTS, E);
            var R = s.getECLevel();
            return (
              null != R && O.putMetadata(f.default.ERROR_CORRECTION_LEVEL, R),
              O
            );
          }),
          (e.prototype.reset = function () {}),
          (e.extractPureBits = function (e) {
            var t = e.getTopLeftOnBit(),
              n = e.getBottomRightOnBit();
            if (null == t || null == n) throw new l.default();
            var o = this.moduleSize(t, e),
              f = t[1],
              c = n[1],
              s = t[0],
              v = (n[0] - s + 1) / o,
              w = (c - f + 1) / o;
            if (v <= 0 || w <= 0) throw new l.default();
            var _ = o / 2;
            ((f += _), (s += _));
            for (var h = new u.default(v, w), B = 0; B < w; B++)
              for (var O = f + B * o, E = 0; E < v; E++)
                e.get(s + E * o, O) && h.set(E, B);
            return h;
          }),
          (e.moduleSize = function (e, t) {
            for (
              var u = t.getWidth(), n = e[0], o = e[1];
              n < u && t.get(n, o);

            )
              n++;
            if (n === u) throw new l.default();
            var f = n - e[0];
            if (0 === f) throw new l.default();
            return f;
          }),
          (e.NO_POINTS = []),
          e
        );
      })();
  },
  1111,
  [1040, 1024, 1027, 1032, 1039, 1041, 1020, 1112, 1118],
);
