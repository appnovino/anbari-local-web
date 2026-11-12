// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1121; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }));
    var e = t(r(d[0])),
      u = t(r(d[1])),
      o = t(r(d[2])),
      n = t(r(d[3])),
      f = t(r(d[4])),
      l = t(r(d[5])),
      c = t(r(d[6])),
      h = t(r(d[7])),
      w = t(r(d[8])),
      p = (function () {
        function t() {
          this.decoder = new c.default();
        }
        return (
          (t.prototype.getDecoder = function () {
            return this.decoder;
          }),
          (t.prototype.decode = function (u, n) {
            var c, p;
            if (null != n && void 0 !== n.get(o.default.PURE_BARCODE)) {
              var s = t.extractPureBits(u.getBlackMatrix());
              ((c = this.decoder.decodeBitMatrix(s, n)), (p = t.NO_POINTS));
            } else {
              var v = new w.default(u.getBlackMatrix()).detect(n);
              ((c = this.decoder.decodeBitMatrix(v.getBits(), n)),
                (p = v.getPoints()));
            }
            c.getOther() instanceof h.default &&
              c.getOther().applyMirroredCorrection(p);
            var M = new f.default(
                c.getText(),
                c.getRawBytes(),
                void 0,
                p,
                e.default.QR_CODE,
                void 0,
              ),
              E = c.getByteSegments();
            null !== E && M.putMetadata(l.default.BYTE_SEGMENTS, E);
            var _ = c.getECLevel();
            return (
              null !== _ && M.putMetadata(l.default.ERROR_CORRECTION_LEVEL, _),
              c.hasStructuredAppend() &&
                (M.putMetadata(
                  l.default.STRUCTURED_APPEND_SEQUENCE,
                  c.getStructuredAppendSequenceNumber(),
                ),
                M.putMetadata(
                  l.default.STRUCTURED_APPEND_PARITY,
                  c.getStructuredAppendParity(),
                )),
              M
            );
          }),
          (t.prototype.reset = function () {}),
          (t.extractPureBits = function (t) {
            var e = t.getTopLeftOnBit(),
              o = t.getBottomRightOnBit();
            if (null === e || null === o) throw new n.default();
            var f = this.moduleSize(e, t),
              l = e[1],
              c = o[1],
              h = e[0],
              w = o[0];
            if (h >= w || l >= c) throw new n.default();
            if (c - l !== w - h && (w = h + (c - l)) >= t.getWidth())
              throw new n.default();
            var p = Math.round((w - h + 1) / f),
              s = Math.round((c - l + 1) / f);
            if (p <= 0 || s <= 0) throw new n.default();
            if (s !== p) throw new n.default();
            var v = Math.floor(f / 2);
            l += v;
            var M = (h += v) + Math.floor((p - 1) * f) - w;
            if (M > 0) {
              if (M > v) throw new n.default();
              h -= M;
            }
            var E = l + Math.floor((s - 1) * f) - c;
            if (E > 0) {
              if (E > v) throw new n.default();
              l -= E;
            }
            for (var _ = new u.default(p, s), O = 0; O < s; O++)
              for (var R = l + Math.floor(O * f), B = 0; B < p; B++)
                t.get(h + Math.floor(B * f), R) && _.set(B, O);
            return _;
          }),
          (t.moduleSize = function (t, e) {
            for (
              var u = e.getHeight(),
                o = e.getWidth(),
                f = t[0],
                l = t[1],
                c = !0,
                h = 0;
              f < o && l < u;

            ) {
              if (c !== e.get(f, l)) {
                if (5 === ++h) break;
                c = !c;
              }
              (f++, l++);
            }
            if (f === o || l === u) throw new n.default();
            return (f - t[0]) / 7;
          }),
          (t.NO_POINTS = new Array()),
          t
        );
      })();
  },
  1121,
  [1040, 1024, 1027, 1032, 1039, 1041, 1122, 1133, 1134],
);
