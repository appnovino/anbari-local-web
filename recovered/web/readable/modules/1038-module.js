// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1038; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return s;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      u = t(r(d[2])),
      l = t(r(d[3])),
      o = t(r(d[4])),
      f = t(r(d[5])),
      c = t(r(d[6])),
      s = (function () {
        function t() {}
        return (
          (t.prototype.decode = function (t, u) {
            void 0 === u && (u = null);
            var s = null,
              p = new c.default(t.getBlackMatrix()),
              E = null,
              _ = null;
            try {
              ((E = (R = p.detectMirror(!1)).getPoints()),
                this.reportFoundResultPoints(u, E),
                (_ = new f.default().decode(R)));
            } catch (t) {
              s = t;
            }
            if (null == _)
              try {
                var R;
                ((E = (R = p.detectMirror(!0)).getPoints()),
                  this.reportFoundResultPoints(u, E),
                  (_ = new f.default().decode(R)));
              } catch (t) {
                if (null != s) throw s;
                throw t;
              }
            var P = new e.default(
                _.getText(),
                _.getRawBytes(),
                _.getNumBits(),
                E,
                n.default.AZTEC,
                o.default.currentTimeMillis(),
              ),
              v = _.getByteSegments();
            null != v && P.putMetadata(l.default.BYTE_SEGMENTS, v);
            var y = _.getECLevel();
            return (
              null != y && P.putMetadata(l.default.ERROR_CORRECTION_LEVEL, y),
              P
            );
          }),
          (t.prototype.reportFoundResultPoints = function (t, e) {
            if (null != t) {
              var n = t.get(u.default.NEED_RESULT_POINT_CALLBACK);
              null != n &&
                e.forEach(function (t, e, u) {
                  n.foundPossibleResultPoint(t);
                });
            }
          }),
          (t.prototype.reset = function () {}),
          t
        );
      })();
  },
  1038,
  [1039, 1040, 1027, 1041, 1020, 1042, 1051],
);
