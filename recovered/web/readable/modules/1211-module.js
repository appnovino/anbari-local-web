// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1211; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return h;
        },
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      n = e(r(d[2])),
      l = e(r(d[3])),
      u = e(r(d[4])),
      f = r(d[5]),
      h = (function () {
        function e() {}
        return (
          (e.prototype.encode = function (e, o, l, h, c) {
            if ((void 0 === c && (c = null), '' === e.trim()))
              throw new Error('Found empty contents');
            if (o !== t.default.DATA_MATRIX)
              throw new Error('Can only encode DATA_MATRIX, but got ' + o);
            if (l < 0 || h < 0)
              throw new Error(
                "Requested dimensions can't be negative: " + l + 'x' + h,
              );
            var v,
              A = 0,
              _ = null,
              s = null;
            if (null != c) {
              var M = c.get(n.default.DATA_MATRIX_SHAPE);
              null != M && (A = M);
              var S = c.get(n.default.MIN_SIZE);
              null != S && (_ = S);
              var T = c.get(n.default.MAX_SIZE);
              null != T && (s = T);
            }
            if (
              null != c &&
              c.has(n.default.DATA_MATRIX_COMPACT) &&
              Boolean(c.get(n.default.DATA_MATRIX_COMPACT).toString())
            ) {
              var y =
                  c.has(n.default.GS1_FORMAT) &&
                  Boolean(c.get(n.default.GS1_FORMAT).toString()),
                C = null;
              (c.has(n.default.CHARACTER_SET) &&
                (C = u.default.forName(
                  c.get(n.default.CHARACTER_SET).toString(),
                )),
                (v = f.MinimalEncoder.encodeHighLevel(e, C, y ? 29 : -1, A)));
            } else {
              var E =
                null != c &&
                c.has(n.default.FORCE_C40) &&
                Boolean(c.get(n.default.FORCE_C40).toString());
              v = f.HighLevelEncoder.encodeHighLevel(e, A, _, s, E);
            }
            var R = f.SymbolInfo.lookup(v.length, A, _, s, !0),
              b = f.ErrorCorrection.encodeECC200(v, R),
              x = new f.DefaultPlacement(
                b,
                R.getSymbolDataWidth(),
                R.getSymbolDataHeight(),
              );
            return (x.place(), this.encodeLowLevel(x, R, l, h));
          }),
          (e.prototype.encodeLowLevel = function (e, t, o, n) {
            for (
              var u = t.getSymbolDataWidth(),
                f = t.getSymbolDataHeight(),
                h = new l.default(t.getSymbolWidth(), t.getSymbolHeight()),
                c = 0,
                v = 0;
              v < f;
              v++
            ) {
              var A = void 0;
              if (v % t.matrixHeight === 0) {
                A = 0;
                for (var _ = 0; _ < t.getSymbolWidth(); _++)
                  (h.setBoolean(A, c, _ % 2 == 0), A++);
                c++;
              }
              A = 0;
              for (_ = 0; _ < u; _++)
                (_ % t.matrixWidth === 0 && (h.setBoolean(A, c, !0), A++),
                  h.setBoolean(A, c, e.getBit(_, v)),
                  A++,
                  _ % t.matrixWidth === t.matrixWidth - 1 &&
                    (h.setBoolean(A, c, v % 2 == 0), A++));
              if ((c++, v % t.matrixHeight === t.matrixHeight - 1)) {
                A = 0;
                for (_ = 0; _ < t.getSymbolWidth(); _++)
                  (h.setBoolean(A, c, !0), A++);
                c++;
              }
            }
            return this.convertByteMatrixToBitMatrix(h, o, n);
          }),
          (e.prototype.convertByteMatrixToBitMatrix = function (e, t, n) {
            var l,
              u = e.getWidth(),
              f = e.getHeight(),
              h = Math.max(t, u),
              c = Math.max(n, f),
              v = Math.min(h / u, c / f),
              A = (h - u * v) / 2,
              _ = (c - f * v) / 2;
            (n < f || t < u
              ? ((A = 0), (_ = 0), (l = new o.default(u, f)))
              : (l = new o.default(t, n)),
              l.clear());
            for (var s = 0, M = _; s < f; s++, M += v)
              for (var S = 0, T = A; S < u; S++, T += v)
                1 === e.get(S, s) && l.setRegion(T, M, v, v);
            return l;
          }),
          e
        );
      })();
  },
  1211,
  [1040, 1024, 1182, 1186, 1197, 1212],
);
