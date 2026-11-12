// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1194; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return R;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      u = e(r(d[3])),
      f = e(r(d[4])),
      l = e(r(d[5])),
      c = e(r(d[6])),
      R = (function () {
        function e() {}
        return (
          (e.prototype.encode = function (o, c, R, h, _) {
            if (0 === o.length) throw new l.default('Found empty contents');
            if (c !== t.default.QR_CODE)
              throw new l.default('Can only encode QR_CODE, but got ' + c);
            if (R < 0 || h < 0)
              throw new l.default(
                'Requested dimensions are too small: '.concat(R, 'x').concat(h),
              );
            var s = u.default.L,
              E = e.QUIET_ZONE_SIZE;
            null !== _ &&
              (void 0 !== _.get(n.default.ERROR_CORRECTION) &&
                (s = u.default.fromString(
                  _.get(n.default.ERROR_CORRECTION).toString(),
                )),
              void 0 !== _.get(n.default.MARGIN) &&
                (E = Number.parseInt(_.get(n.default.MARGIN).toString(), 10)));
            var M = f.default.encode(o, s, _);
            return e.renderResult(M, R, h, E);
          }),
          (e.renderResult = function (e, t, n, u) {
            var f = e.getMatrix();
            if (null === f) throw new c.default();
            for (
              var l = f.getWidth(),
                R = f.getHeight(),
                h = l + 2 * u,
                _ = R + 2 * u,
                s = Math.max(t, h),
                E = Math.max(n, _),
                M = Math.min(Math.floor(s / h), Math.floor(E / _)),
                O = Math.floor((s - l * M) / 2),
                v = Math.floor((E - R * M) / 2),
                w = new o.default(s, E),
                I = 0,
                C = v;
              I < R;
              I++, C += M
            )
              for (var N = 0, p = O; N < l; N++, p += M)
                1 === f.get(N, I) && w.setRegion(p, C, M, M);
            return w;
          }),
          (e.QUIET_ZONE_SIZE = 4),
          e
        );
      })();
  },
  1194,
  [1040, 1182, 1024, 1126, 1183, 1014, 1050],
);
