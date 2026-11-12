// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1064; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }));
    var n,
      e = t(r(_d[0])),
      o = t(r(_d[1])),
      f = t(r(_d[2])),
      A = t(r(_d[3])),
      C = t(r(_d[4])),
      _ = t(r(_d[5])),
      I = t(r(_d[6])),
      y = t(r(_d[7])),
      O =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, n) {
                  t.__proto__ = n;
                }) ||
              function (t, n) {
                for (var e in n)
                  Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
              }),
            n(t, e)
          );
        }),
        function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Class extends value ' +
                String(e) +
                ' is not a constructor or null',
            );
          function o() {
            this.constructor = t;
          }
          (n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o())));
        }),
      E = (function (t) {
        function n() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          O(n, t),
          (n.findStartPattern = function (t) {
            for (
              var e = t.getSize(),
                o = t.getNextSet(0),
                f = 0,
                A = Int32Array.from([0, 0, 0, 0, 0, 0]),
                _ = o,
                I = !1,
                O = o;
              O < e;
              O++
            )
              if (t.get(O) !== I) A[f]++;
              else {
                if (5 === f) {
                  for (
                    var E = n.MAX_AVG_VARIANCE, D = -1, c = n.CODE_START_A;
                    c <= n.CODE_START_C;
                    c++
                  ) {
                    var i = y.default.patternMatchVariance(
                      A,
                      n.CODE_PATTERNS[c],
                      n.MAX_INDIVIDUAL_VARIANCE,
                    );
                    i < E && ((E = i), (D = c));
                  }
                  if (D >= 0 && t.isRange(Math.max(0, _ - (O - _) / 2), _, !1))
                    return Int32Array.from([_, O, D]);
                  ((_ += A[0] + A[1]),
                    ((A = A.slice(2, A.length))[f - 1] = 0),
                    (A[f] = 0),
                    f--);
                } else f++;
                ((A[f] = 1), (I = !I));
              }
            throw new C.default();
          }),
          (n.decodeCode = function (t, e, o) {
            y.default.recordPattern(t, o, e);
            for (
              var f = n.MAX_AVG_VARIANCE, A = -1, _ = 0;
              _ < n.CODE_PATTERNS.length;
              _++
            ) {
              var I = n.CODE_PATTERNS[_],
                O = this.patternMatchVariance(e, I, n.MAX_INDIVIDUAL_VARIANCE);
              O < f && ((f = O), (A = _));
            }
            if (A >= 0) return A;
            throw new C.default();
          }),
          (n.prototype.decodeRow = function (t, y, O) {
            var E,
              D = O && !0 === O.get(f.default.ASSUME_GS1),
              c = n.findStartPattern(y),
              i = c[2],
              s = 0,
              u = new Uint8Array(20);
            switch (((u[s++] = i), i)) {
              case n.CODE_START_A:
                E = n.CODE_CODE_A;
                break;
              case n.CODE_START_B:
                E = n.CODE_CODE_B;
                break;
              case n.CODE_START_C:
                E = n.CODE_CODE_C;
                break;
              default:
                throw new A.default();
            }
            for (
              var d = !1,
                l = !1,
                h = '',
                S = c[0],
                T = c[1],
                w = Int32Array.from([0, 0, 0, 0, 0, 0]),
                N = 0,
                b = 0,
                R = i,
                p = 0,
                k = !0,
                P = !1,
                F = !1;
              !d;

            ) {
              var v = l;
              switch (
                ((l = !1),
                (N = b),
                (b = n.decodeCode(y, w, T)),
                (u[s++] = b),
                b !== n.CODE_STOP && (k = !0),
                b !== n.CODE_STOP && (R += ++p * b),
                (S = T),
                (T += w.reduce(function (t, n) {
                  return t + n;
                }, 0)),
                b)
              ) {
                case n.CODE_START_A:
                case n.CODE_START_B:
                case n.CODE_START_C:
                  throw new A.default();
              }
              switch (E) {
                case n.CODE_CODE_A:
                  if (b < 64)
                    ((h +=
                      F === P
                        ? String.fromCharCode(' '.charCodeAt(0) + b)
                        : String.fromCharCode(' '.charCodeAt(0) + b + 128)),
                      (F = !1));
                  else if (b < 96)
                    ((h +=
                      F === P
                        ? String.fromCharCode(b - 64)
                        : String.fromCharCode(b + 64)),
                      (F = !1));
                  else
                    switch ((b !== n.CODE_STOP && (k = !1), b)) {
                      case n.CODE_FNC_1:
                        D &&
                          (0 === h.length
                            ? (h += ']C1')
                            : (h += String.fromCharCode(29)));
                        break;
                      case n.CODE_FNC_2:
                      case n.CODE_FNC_3:
                        break;
                      case n.CODE_FNC_4_A:
                        !P && F
                          ? ((P = !0), (F = !1))
                          : P && F
                            ? ((P = !1), (F = !1))
                            : (F = !0);
                        break;
                      case n.CODE_SHIFT:
                        ((l = !0), (E = n.CODE_CODE_B));
                        break;
                      case n.CODE_CODE_B:
                        E = n.CODE_CODE_B;
                        break;
                      case n.CODE_CODE_C:
                        E = n.CODE_CODE_C;
                        break;
                      case n.CODE_STOP:
                        d = !0;
                    }
                  break;
                case n.CODE_CODE_B:
                  if (b < 96)
                    ((h +=
                      F === P
                        ? String.fromCharCode(' '.charCodeAt(0) + b)
                        : String.fromCharCode(' '.charCodeAt(0) + b + 128)),
                      (F = !1));
                  else
                    switch ((b !== n.CODE_STOP && (k = !1), b)) {
                      case n.CODE_FNC_1:
                        D &&
                          (0 === h.length
                            ? (h += ']C1')
                            : (h += String.fromCharCode(29)));
                        break;
                      case n.CODE_FNC_2:
                      case n.CODE_FNC_3:
                        break;
                      case n.CODE_FNC_4_B:
                        !P && F
                          ? ((P = !0), (F = !1))
                          : P && F
                            ? ((P = !1), (F = !1))
                            : (F = !0);
                        break;
                      case n.CODE_SHIFT:
                        ((l = !0), (E = n.CODE_CODE_A));
                        break;
                      case n.CODE_CODE_A:
                        E = n.CODE_CODE_A;
                        break;
                      case n.CODE_CODE_C:
                        E = n.CODE_CODE_C;
                        break;
                      case n.CODE_STOP:
                        d = !0;
                    }
                  break;
                case n.CODE_CODE_C:
                  if (b < 100) (b < 10 && (h += '0'), (h += b));
                  else
                    switch ((b !== n.CODE_STOP && (k = !1), b)) {
                      case n.CODE_FNC_1:
                        D &&
                          (0 === h.length
                            ? (h += ']C1')
                            : (h += String.fromCharCode(29)));
                        break;
                      case n.CODE_CODE_A:
                        E = n.CODE_CODE_A;
                        break;
                      case n.CODE_CODE_B:
                        E = n.CODE_CODE_B;
                        break;
                      case n.CODE_STOP:
                        d = !0;
                    }
              }
              v && (E = E === n.CODE_CODE_A ? n.CODE_CODE_B : n.CODE_CODE_A);
            }
            var B = T - S;
            if (
              ((T = y.getNextUnset(T)),
              !y.isRange(T, Math.min(y.getSize(), T + (T - S) / 2), !1))
            )
              throw new C.default();
            if ((R -= p * N) % 103 !== N) throw new o.default();
            var V = h.length;
            if (0 === V) throw new C.default();
            V > 0 &&
              k &&
              (h =
                E === n.CODE_CODE_C
                  ? h.substring(0, V - 2)
                  : h.substring(0, V - 1));
            for (
              var M = (c[1] + c[0]) / 2,
                U = S + B / 2,
                X = u.length,
                j = new Uint8Array(X),
                x = 0;
              x < X;
              x++
            )
              j[x] = u[x];
            var G = [new I.default(M, t), new I.default(U, t)];
            return new _.default(
              h,
              j,
              0,
              G,
              e.default.CODE_128,
              new Date().getTime(),
            );
          }),
          (n.CODE_PATTERNS = [
            Int32Array.from([2, 1, 2, 2, 2, 2]),
            Int32Array.from([2, 2, 2, 1, 2, 2]),
            Int32Array.from([2, 2, 2, 2, 2, 1]),
            Int32Array.from([1, 2, 1, 2, 2, 3]),
            Int32Array.from([1, 2, 1, 3, 2, 2]),
            Int32Array.from([1, 3, 1, 2, 2, 2]),
            Int32Array.from([1, 2, 2, 2, 1, 3]),
            Int32Array.from([1, 2, 2, 3, 1, 2]),
            Int32Array.from([1, 3, 2, 2, 1, 2]),
            Int32Array.from([2, 2, 1, 2, 1, 3]),
            Int32Array.from([2, 2, 1, 3, 1, 2]),
            Int32Array.from([2, 3, 1, 2, 1, 2]),
            Int32Array.from([1, 1, 2, 2, 3, 2]),
            Int32Array.from([1, 2, 2, 1, 3, 2]),
            Int32Array.from([1, 2, 2, 2, 3, 1]),
            Int32Array.from([1, 1, 3, 2, 2, 2]),
            Int32Array.from([1, 2, 3, 1, 2, 2]),
            Int32Array.from([1, 2, 3, 2, 2, 1]),
            Int32Array.from([2, 2, 3, 2, 1, 1]),
            Int32Array.from([2, 2, 1, 1, 3, 2]),
            Int32Array.from([2, 2, 1, 2, 3, 1]),
            Int32Array.from([2, 1, 3, 2, 1, 2]),
            Int32Array.from([2, 2, 3, 1, 1, 2]),
            Int32Array.from([3, 1, 2, 1, 3, 1]),
            Int32Array.from([3, 1, 1, 2, 2, 2]),
            Int32Array.from([3, 2, 1, 1, 2, 2]),
            Int32Array.from([3, 2, 1, 2, 2, 1]),
            Int32Array.from([3, 1, 2, 2, 1, 2]),
            Int32Array.from([3, 2, 2, 1, 1, 2]),
            Int32Array.from([3, 2, 2, 2, 1, 1]),
            Int32Array.from([2, 1, 2, 1, 2, 3]),
            Int32Array.from([2, 1, 2, 3, 2, 1]),
            Int32Array.from([2, 3, 2, 1, 2, 1]),
            Int32Array.from([1, 1, 1, 3, 2, 3]),
            Int32Array.from([1, 3, 1, 1, 2, 3]),
            Int32Array.from([1, 3, 1, 3, 2, 1]),
            Int32Array.from([1, 1, 2, 3, 1, 3]),
            Int32Array.from([1, 3, 2, 1, 1, 3]),
            Int32Array.from([1, 3, 2, 3, 1, 1]),
            Int32Array.from([2, 1, 1, 3, 1, 3]),
            Int32Array.from([2, 3, 1, 1, 1, 3]),
            Int32Array.from([2, 3, 1, 3, 1, 1]),
            Int32Array.from([1, 1, 2, 1, 3, 3]),
            Int32Array.from([1, 1, 2, 3, 3, 1]),
            Int32Array.from([1, 3, 2, 1, 3, 1]),
            Int32Array.from([1, 1, 3, 1, 2, 3]),
            Int32Array.from([1, 1, 3, 3, 2, 1]),
            Int32Array.from([1, 3, 3, 1, 2, 1]),
            Int32Array.from([3, 1, 3, 1, 2, 1]),
            Int32Array.from([2, 1, 1, 3, 3, 1]),
            Int32Array.from([2, 3, 1, 1, 3, 1]),
            Int32Array.from([2, 1, 3, 1, 1, 3]),
            Int32Array.from([2, 1, 3, 3, 1, 1]),
            Int32Array.from([2, 1, 3, 1, 3, 1]),
            Int32Array.from([3, 1, 1, 1, 2, 3]),
            Int32Array.from([3, 1, 1, 3, 2, 1]),
            Int32Array.from([3, 3, 1, 1, 2, 1]),
            Int32Array.from([3, 1, 2, 1, 1, 3]),
            Int32Array.from([3, 1, 2, 3, 1, 1]),
            Int32Array.from([3, 3, 2, 1, 1, 1]),
            Int32Array.from([3, 1, 4, 1, 1, 1]),
            Int32Array.from([2, 2, 1, 4, 1, 1]),
            Int32Array.from([4, 3, 1, 1, 1, 1]),
            Int32Array.from([1, 1, 1, 2, 2, 4]),
            Int32Array.from([1, 1, 1, 4, 2, 2]),
            Int32Array.from([1, 2, 1, 1, 2, 4]),
            Int32Array.from([1, 2, 1, 4, 2, 1]),
            Int32Array.from([1, 4, 1, 1, 2, 2]),
            Int32Array.from([1, 4, 1, 2, 2, 1]),
            Int32Array.from([1, 1, 2, 2, 1, 4]),
            Int32Array.from([1, 1, 2, 4, 1, 2]),
            Int32Array.from([1, 2, 2, 1, 1, 4]),
            Int32Array.from([1, 2, 2, 4, 1, 1]),
            Int32Array.from([1, 4, 2, 1, 1, 2]),
            Int32Array.from([1, 4, 2, 2, 1, 1]),
            Int32Array.from([2, 4, 1, 2, 1, 1]),
            Int32Array.from([2, 2, 1, 1, 1, 4]),
            Int32Array.from([4, 1, 3, 1, 1, 1]),
            Int32Array.from([2, 4, 1, 1, 1, 2]),
            Int32Array.from([1, 3, 4, 1, 1, 1]),
            Int32Array.from([1, 1, 1, 2, 4, 2]),
            Int32Array.from([1, 2, 1, 1, 4, 2]),
            Int32Array.from([1, 2, 1, 2, 4, 1]),
            Int32Array.from([1, 1, 4, 2, 1, 2]),
            Int32Array.from([1, 2, 4, 1, 1, 2]),
            Int32Array.from([1, 2, 4, 2, 1, 1]),
            Int32Array.from([4, 1, 1, 2, 1, 2]),
            Int32Array.from([4, 2, 1, 1, 1, 2]),
            Int32Array.from([4, 2, 1, 2, 1, 1]),
            Int32Array.from([2, 1, 2, 1, 4, 1]),
            Int32Array.from([2, 1, 4, 1, 2, 1]),
            Int32Array.from([4, 1, 2, 1, 2, 1]),
            Int32Array.from([1, 1, 1, 1, 4, 3]),
            Int32Array.from([1, 1, 1, 3, 4, 1]),
            Int32Array.from([1, 3, 1, 1, 4, 1]),
            Int32Array.from([1, 1, 4, 1, 1, 3]),
            Int32Array.from([1, 1, 4, 3, 1, 1]),
            Int32Array.from([4, 1, 1, 1, 1, 3]),
            Int32Array.from([4, 1, 1, 3, 1, 1]),
            Int32Array.from([1, 1, 3, 1, 4, 1]),
            Int32Array.from([1, 1, 4, 1, 3, 1]),
            Int32Array.from([3, 1, 1, 1, 4, 1]),
            Int32Array.from([4, 1, 1, 1, 3, 1]),
            Int32Array.from([2, 1, 1, 4, 1, 2]),
            Int32Array.from([2, 1, 1, 2, 1, 4]),
            Int32Array.from([2, 1, 1, 2, 3, 2]),
            Int32Array.from([2, 3, 3, 1, 1, 1, 2]),
          ]),
          (n.MAX_AVG_VARIANCE = 0.25),
          (n.MAX_INDIVIDUAL_VARIANCE = 0.7),
          (n.CODE_SHIFT = 98),
          (n.CODE_CODE_C = 99),
          (n.CODE_CODE_B = 100),
          (n.CODE_CODE_A = 101),
          (n.CODE_FNC_1 = 102),
          (n.CODE_FNC_2 = 97),
          (n.CODE_FNC_3 = 96),
          (n.CODE_FNC_4_A = 101),
          (n.CODE_FNC_4_B = 100),
          (n.CODE_START_A = 103),
          (n.CODE_START_B = 104),
          (n.CODE_START_C = 105),
          (n.CODE_STOP = 106),
          n
        );
      })(y.default),
      D = E;
  },
  1064,
  [1040, 1015, 1027, 1029, 1032, 1039, 1052, 1065],
);
