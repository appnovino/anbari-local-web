// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1217; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, d) {
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
      i = e(r(d[2])),
      o = e(r(d[3])),
      s = e(r(d[4])),
      u = e(r(d[5])),
      f = e(r(d[6])),
      l = e(r(d[7])),
      c = e(r(d[8])),
      v =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            i = 0;
          if (n) return n.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && i >= e.length && (e = void 0),
                  { value: e && e[i++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      _ = (function () {
        function e() {}
        return (
          (e.encodeBytes = function (t) {
            return e.encode(t, e.DEFAULT_EC_PERCENT, e.DEFAULT_AZTEC_LAYERS);
          }),
          (e.encode = function (t, u, f) {
            var v,
              _,
              A,
              D,
              E,
              w = new l.default(t).encode(),
              B = c.default.truncDivision(w.getSize() * u, 100) + 11,
              T = w.getSize() + B;
            if (f !== e.DEFAULT_AZTEC_LAYERS) {
              if (
                ((v = f < 0),
                (_ = Math.abs(f)) > (v ? e.MAX_NB_BITS_COMPACT : e.MAX_NB_BITS))
              )
                throw new n.default(
                  i.default.format('Illegal value %s for layers', f),
                );
              var p =
                (A = e.totalBitsInLayer(_, v)) - (A % (D = e.WORD_SIZE[_]));
              if ((E = e.stuffBits(w, D)).getSize() + B > p)
                throw new n.default('Data to large for user specified layer');
              if (v && E.getSize() > 64 * D)
                throw new n.default('Data to large for user specified layer');
            } else {
              ((D = 0), (E = null));
              for (var y = 0; ; y++) {
                if (y > e.MAX_NB_BITS)
                  throw new n.default('Data too large for an Aztec code');
                if (
                  ((_ = (v = y <= 3) ? y + 1 : y),
                  !(T > (A = e.totalBitsInLayer(_, v))))
                ) {
                  (null != E && D === e.WORD_SIZE[_]) ||
                    ((D = e.WORD_SIZE[_]), (E = e.stuffBits(w, D)));
                  p = A - (A % D);
                  if (!(v && E.getSize() > 64 * D) && E.getSize() + B <= p)
                    break;
                }
              }
            }
            var S,
              C = e.generateCheckWords(E, A, D),
              M = E.getSize() / D,
              h = e.generateModeMessage(v, _, M),
              I = (v ? 11 : 14) + 4 * _,
              b = new Int32Array(I);
            if (v) {
              S = I;
              for (y = 0; y < b.length; y++) b[y] = y;
            } else {
              S =
                I +
                1 +
                2 *
                  c.default.truncDivision(
                    c.default.truncDivision(I, 2) - 1,
                    15,
                  );
              var z = c.default.truncDivision(I, 2),
                L = c.default.truncDivision(S, 2);
              for (y = 0; y < z; y++) {
                var Z = y + c.default.truncDivision(y, 15);
                ((b[z - y - 1] = L - Z - 1), (b[z + y] = L + Z + 1));
              }
            }
            for (var W = new o.default(S), R = ((y = 0), 0); y < _; y++) {
              for (var m = 4 * (_ - y) + (v ? 9 : 12), O = 0; O < m; O++)
                for (var F = 2 * O, N = 0; N < 2; N++)
                  (C.get(R + F + N) && W.set(b[2 * y + N], b[2 * y + O]),
                    C.get(R + 2 * m + F + N) &&
                      W.set(b[2 * y + O], b[I - 1 - 2 * y - N]),
                    C.get(R + 4 * m + F + N) &&
                      W.set(b[I - 1 - 2 * y - N], b[I - 1 - 2 * y - O]),
                    C.get(R + 6 * m + F + N) &&
                      W.set(b[I - 1 - 2 * y - O], b[2 * y + N]));
              R += 8 * m;
            }
            if ((e.drawModeMessage(W, v, S, h), v))
              e.drawBullsEye(W, c.default.truncDivision(S, 2), 5);
            else {
              e.drawBullsEye(W, c.default.truncDivision(S, 2), 7);
              for (
                y = 0, O = 0;
                y < c.default.truncDivision(I, 2) - 1;
                y += 15, O += 16
              )
                for (N = 1 & c.default.truncDivision(S, 2); N < S; N += 2)
                  (W.set(c.default.truncDivision(S, 2) - O, N),
                    W.set(c.default.truncDivision(S, 2) + O, N),
                    W.set(N, c.default.truncDivision(S, 2) - O),
                    W.set(N, c.default.truncDivision(S, 2) + O));
            }
            var P = new s.default();
            return (
              P.setCompact(v),
              P.setSize(S),
              P.setLayers(_),
              P.setCodeWords(M),
              P.setMatrix(W),
              P
            );
          }),
          (e.drawBullsEye = function (e, t, n) {
            for (var i = 0; i < n; i += 2)
              for (var o = t - i; o <= t + i; o++)
                (e.set(o, t - i),
                  e.set(o, t + i),
                  e.set(t - i, o),
                  e.set(t + i, o));
            (e.set(t - n, t - n),
              e.set(t - n + 1, t - n),
              e.set(t - n, t - n + 1),
              e.set(t + n, t - n),
              e.set(t + n, t - n + 1),
              e.set(t + n, t + n - 1));
          }),
          (e.generateModeMessage = function (n, i, o) {
            var s = new t.default();
            return (
              n
                ? (s.appendBits(i - 1, 2),
                  s.appendBits(o - 1, 6),
                  (s = e.generateCheckWords(s, 28, 4)))
                : (s.appendBits(i - 1, 5),
                  s.appendBits(o - 1, 11),
                  (s = e.generateCheckWords(s, 40, 4))),
              s
            );
          }),
          (e.drawModeMessage = function (e, t, n, i) {
            var o = c.default.truncDivision(n, 2);
            if (t)
              for (var s = 0; s < 7; s++) {
                var u = o - 3 + s;
                (i.get(s) && e.set(u, o - 5),
                  i.get(s + 7) && e.set(o + 5, u),
                  i.get(20 - s) && e.set(u, o + 5),
                  i.get(27 - s) && e.set(o - 5, u));
              }
            else
              for (s = 0; s < 10; s++) {
                u = o - 5 + s + c.default.truncDivision(s, 5);
                (i.get(s) && e.set(u, o - 7),
                  i.get(s + 10) && e.set(o + 7, u),
                  i.get(29 - s) && e.set(u, o + 7),
                  i.get(39 - s) && e.set(o - 7, u));
              }
          }),
          (e.generateCheckWords = function (n, i, o) {
            var s,
              f,
              l = n.getSize() / o,
              _ = new u.default(e.getGF(o)),
              A = c.default.truncDivision(i, o),
              D = e.bitsToWords(n, o, A);
            _.encode(D, A - l);
            var E = i % o,
              w = new t.default();
            w.appendBits(0, E);
            try {
              for (
                var B = v(Array.from(D)), T = B.next();
                !T.done;
                T = B.next()
              ) {
                var p = T.value;
                w.appendBits(p, o);
              }
            } catch (e) {
              s = { error: e };
            } finally {
              try {
                T && !T.done && (f = B.return) && f.call(B);
              } finally {
                if (s) throw s.error;
              }
            }
            return w;
          }),
          (e.bitsToWords = function (e, t, n) {
            var i,
              o,
              s = new Int32Array(n);
            for (i = 0, o = e.getSize() / t; i < o; i++) {
              for (var u = 0, f = 0; f < t; f++)
                u |= e.get(i * t + f) ? 1 << (t - f - 1) : 0;
              s[i] = u;
            }
            return s;
          }),
          (e.getGF = function (e) {
            switch (e) {
              case 4:
                return f.default.AZTEC_PARAM;
              case 6:
                return f.default.AZTEC_DATA_6;
              case 8:
                return f.default.AZTEC_DATA_8;
              case 10:
                return f.default.AZTEC_DATA_10;
              case 12:
                return f.default.AZTEC_DATA_12;
              default:
                throw new n.default('Unsupported word size ' + e);
            }
          }),
          (e.stuffBits = function (e, n) {
            for (
              var i = new t.default(), o = e.getSize(), s = (1 << n) - 2, u = 0;
              u < o;
              u += n
            ) {
              for (var f = 0, l = 0; l < n; l++)
                (u + l >= o || e.get(u + l)) && (f |= 1 << (n - 1 - l));
              (f & s) === s
                ? (i.appendBits(f & s, n), u--)
                : 0 === (f & s)
                  ? (i.appendBits(1 | f, n), u--)
                  : i.appendBits(f, n);
            }
            return i;
          }),
          (e.totalBitsInLayer = function (e, t) {
            return ((t ? 88 : 112) + 16 * e) * e;
          }),
          (e.DEFAULT_EC_PERCENT = 33),
          (e.DEFAULT_AZTEC_LAYERS = 0),
          (e.MAX_NB_BITS = 32),
          (e.MAX_NB_BITS_COMPACT = 4),
          (e.WORD_SIZE = Int32Array.from([
            4, 6, 6, 8, 8, 8, 8, 8, 8, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
            10, 10, 10, 10, 12, 12, 12, 12, 12, 12, 12, 12, 12, 12,
          ])),
          e
        );
      })();
  },
  1217,
  [1018, 1014, 1026, 1024, 1218, 1184, 1044, 1219, 1023],
);
