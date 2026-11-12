// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1216; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return _;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      u = e(r(d[2])),
      f = e(r(d[3])),
      o = e(r(d[4])),
      l = e(r(d[5])),
      E = e(r(d[6])),
      R = e(r(d[7])),
      c = e(r(d[8])),
      s = e(r(d[9])),
      _ = (function () {
        function e() {}
        return (
          (e.prototype.encode = function (e, t, n, u) {
            return this.encodeWithHints(e, t, n, u, null);
          }),
          (e.prototype.encodeWithHints = function (t, f, R, c, s) {
            var _ = l.default.ISO_8859_1,
              C = u.default.DEFAULT_EC_PERCENT,
              A = u.default.DEFAULT_AZTEC_LAYERS;
            return (
              null != s &&
                (s.has(n.default.CHARACTER_SET) &&
                  (_ = o.default.forName(
                    s.get(n.default.CHARACTER_SET).toString(),
                  )),
                s.has(n.default.ERROR_CORRECTION) &&
                  (C = E.default.parseInt(
                    s.get(n.default.ERROR_CORRECTION).toString(),
                  )),
                s.has(n.default.AZTEC_LAYERS) &&
                  (A = E.default.parseInt(
                    s.get(n.default.AZTEC_LAYERS).toString(),
                  ))),
              e.encodeLayers(t, f, R, c, _, C, A)
            );
          }),
          (e.encodeLayers = function (n, f, o, l, E, R, _) {
            if (f !== t.default.AZTEC)
              throw new c.default('Can only encode AZTEC, but got ' + f);
            var C = u.default.encode(s.default.getBytes(n, E), R, _);
            return e.renderResult(C, o, l);
          }),
          (e.renderResult = function (e, t, n) {
            var u = e.getMatrix();
            if (null == u) throw new R.default();
            for (
              var o = u.getWidth(),
                l = u.getHeight(),
                E = Math.max(t, o),
                c = Math.max(n, l),
                s = Math.min(E / o, c / l),
                _ = (E - o * s) / 2,
                C = (c - l * s) / 2,
                A = new f.default(E, c),
                T = 0,
                h = C;
              T < l;
              T++, h += s
            )
              for (var O = 0, S = _; O < o; O++, S += s)
                u.get(O, T) && A.setRegion(S, h, s, s);
            return A;
          }),
          e
        );
      })();
  },
  1216,
  [1040, 1182, 1217, 1024, 1197, 1198, 1023, 1050, 1014, 1026],
);
