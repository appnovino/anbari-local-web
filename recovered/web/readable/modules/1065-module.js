// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1065; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return i;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      u = e(r(d[2])),
      o = e(r(d[3])),
      f = e(r(d[4])),
      i = (function () {
        function e() {}
        return (
          (e.prototype.decode = function (e, t) {
            try {
              return this.doDecode(e, t);
            } catch (R) {
              if (
                t &&
                !0 === t.get(n.default.TRY_HARDER) &&
                e.isRotateSupported()
              ) {
                var i = e.rotateCounterClockwise(),
                  l = this.doDecode(i, t),
                  c = l.getResultMetadata(),
                  v = 270;
                (null !== c &&
                  !0 === c.get(u.default.ORIENTATION) &&
                  (v += c.get(u.default.ORIENTATION) % 360),
                  l.putMetadata(u.default.ORIENTATION, v));
                var h = l.getResultPoints();
                if (null !== h)
                  for (var I = i.getHeight(), s = 0; s < h.length; s++)
                    h[s] = new o.default(I - h[s].getY() - 1, h[s].getX());
                return l;
              }
              throw new f.default();
            }
          }),
          (e.prototype.reset = function () {}),
          (e.prototype.doDecode = function (e, i) {
            var l,
              c = e.getWidth(),
              v = e.getHeight(),
              h = new t.default(c),
              I = i && !0 === i.get(n.default.TRY_HARDER),
              s = Math.max(1, v >> (I ? 8 : 5));
            l = I ? v : 25;
            for (var R = Math.trunc(v / 2), w = 0; w < l; w++) {
              var N = Math.trunc((w + 1) / 2),
                T = R + s * (!(1 & w) ? N : -N);
              if (T < 0 || T >= v) break;
              try {
                h = e.getBlackRow(T, h);
              } catch (e) {
                continue;
              }
              for (
                var _ = function (e) {
                    if (
                      1 === e &&
                      (h.reverse(),
                      i && !0 === i.get(n.default.NEED_RESULT_POINT_CALLBACK))
                    ) {
                      var t = new Map();
                      (i.forEach(function (e, n) {
                        return t.set(n, e);
                      }),
                        t.delete(n.default.NEED_RESULT_POINT_CALLBACK),
                        (i = t));
                    }
                    try {
                      var f = p.decodeRow(T, h, i);
                      if (1 === e) {
                        f.putMetadata(u.default.ORIENTATION, 180);
                        var l = f.getResultPoints();
                        null !== l &&
                          ((l[0] = new o.default(
                            c - l[0].getX() - 1,
                            l[0].getY(),
                          )),
                          (l[1] = new o.default(
                            c - l[1].getX() - 1,
                            l[1].getY(),
                          )));
                      }
                      return { value: f };
                    } catch (e) {}
                  },
                  p = this,
                  E = 0;
                E < 2;
                E++
              ) {
                var O = _(E);
                if ('object' == typeof O) return O.value;
              }
            }
            throw new f.default();
          }),
          (e.recordPattern = function (e, t, n) {
            for (var u = n.length, o = 0; o < u; o++) n[o] = 0;
            var i = e.getSize();
            if (t >= i) throw new f.default();
            for (var l = !e.get(t), c = 0, v = t; v < i; ) {
              if (e.get(v) !== l) n[c]++;
              else {
                if (++c === u) break;
                ((n[c] = 1), (l = !l));
              }
              v++;
            }
            if (c !== u && (c !== u - 1 || v !== i)) throw new f.default();
          }),
          (e.recordPatternInReverse = function (t, n, u) {
            for (var o = u.length, i = t.get(n); n > 0 && o >= 0; )
              t.get(--n) !== i && (o--, (i = !i));
            if (o >= 0) throw new f.default();
            e.recordPattern(t, n + 1, u);
          }),
          (e.patternMatchVariance = function (e, t, n) {
            for (var u = e.length, o = 0, f = 0, i = 0; i < u; i++)
              ((o += e[i]), (f += t[i]));
            if (o < f) return Number.POSITIVE_INFINITY;
            var l = o / f;
            n *= l;
            for (var c = 0, v = 0; v < u; v++) {
              var h = e[v],
                I = t[v] * l,
                s = h > I ? h - I : I - h;
              if (s > n) return Number.POSITIVE_INFINITY;
              c += s;
            }
            return c / o;
          }),
          e
        );
      })();
  },
  1065,
  [1018, 1027, 1041, 1052, 1032],
);
