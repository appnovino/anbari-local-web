// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1155; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      u = t(r(d[2])),
      f = t(r(d[3])),
      l =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            u = 0;
          if (n) return n.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && u >= t.length && (t = void 0),
                  { value: t && t[u++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      i = (function () {
        function t() {}
        return (
          (t.detectMultiple = function (e, n, u) {
            var l = e.getBlackMatrix(),
              i = t.detect(u, l);
            return (
              i.length || ((l = l.clone()).rotate180(), (i = t.detect(u, l))),
              new f.default(l, i)
            );
          }),
          (t.detect = function (e, n) {
            for (
              var u, f, i = new Array(), o = 0, A = 0, _ = !1;
              o < n.getHeight();

            ) {
              var c = t.findVertices(n, o, A);
              if (null != c[0] || null != c[3]) {
                if (((_ = !0), i.push(c), !e)) break;
                null != c[2]
                  ? ((A = Math.trunc(c[2].getX())),
                    (o = Math.trunc(c[2].getY())))
                  : ((A = Math.trunc(c[4].getX())),
                    (o = Math.trunc(c[4].getY())));
              } else {
                if (!_) break;
                ((_ = !1), (A = 0));
                try {
                  for (
                    var T = ((u = void 0), l(i)), I = T.next();
                    !I.done;
                    I = T.next()
                  ) {
                    var R = I.value;
                    (null != R[1] && (o = Math.trunc(Math.max(o, R[1].getY()))),
                      null != R[3] &&
                        (o = Math.max(o, Math.trunc(R[3].getY()))));
                  }
                } catch (t) {
                  u = { error: t };
                } finally {
                  try {
                    I && !I.done && (f = T.return) && f.call(T);
                  } finally {
                    if (u) throw u.error;
                  }
                }
                o += t.ROW_STEP;
              }
            }
            return i;
          }),
          (t.findVertices = function (e, n, u) {
            var f = e.getHeight(),
              l = e.getWidth(),
              i = new Array(8);
            return (
              t.copyToResult(
                i,
                t.findRowsWithPattern(e, f, l, n, u, t.START_PATTERN),
                t.INDEXES_START_PATTERN,
              ),
              null != i[4] &&
                ((u = Math.trunc(i[4].getX())), (n = Math.trunc(i[4].getY()))),
              t.copyToResult(
                i,
                t.findRowsWithPattern(e, f, l, n, u, t.STOP_PATTERN),
                t.INDEXES_STOP_PATTERN,
              ),
              i
            );
          }),
          (t.copyToResult = function (t, e, n) {
            for (var u = 0; u < n.length; u++) t[n[u]] = e[u];
          }),
          (t.findRowsWithPattern = function (n, f, l, i, o, A) {
            for (
              var _ = new Array(4), c = !1, T = new Int32Array(A.length);
              i < f;
              i += t.ROW_STEP
            ) {
              if (null != (E = t.findGuardPattern(n, o, i, l, !1, A, T))) {
                for (; i > 0; ) {
                  if (
                    null == (h = t.findGuardPattern(n, o, --i, l, !1, A, T))
                  ) {
                    i++;
                    break;
                  }
                  E = h;
                }
                ((_[0] = new e.default(E[0], i)),
                  (_[1] = new e.default(E[1], i)),
                  (c = !0));
                break;
              }
            }
            var I = i + 1;
            if (c) {
              for (
                var R = 0,
                  h = Int32Array.from([
                    Math.trunc(_[0].getX()),
                    Math.trunc(_[1].getX()),
                  ]);
                I < f;
                I++
              ) {
                var E;
                if (
                  null != (E = t.findGuardPattern(n, h[0], I, l, !1, A, T)) &&
                  Math.abs(h[0] - E[0]) < t.MAX_PATTERN_DRIFT &&
                  Math.abs(h[1] - E[1]) < t.MAX_PATTERN_DRIFT
                )
                  ((h = E), (R = 0));
                else {
                  if (R > t.SKIPPED_ROW_COUNT_MAX) break;
                  R++;
                }
              }
              ((I -= R + 1),
                (_[2] = new e.default(h[0], I)),
                (_[3] = new e.default(h[1], I)));
            }
            return (I - i < t.BARCODE_MIN_HEIGHT && u.default.fill(_, null), _);
          }),
          (t.findGuardPattern = function (e, f, l, i, o, A, _) {
            u.default.fillWithin(_, 0, _.length, 0);
            for (
              var c = f, T = 0;
              e.get(c, l) && c > 0 && T++ < t.MAX_PIXEL_DRIFT;

            )
              c--;
            for (var I = c, R = 0, h = A.length, E = o; I < i; I++) {
              if (e.get(I, l) !== E) _[R]++;
              else {
                if (R === h - 1) {
                  if (
                    t.patternMatchVariance(_, A, t.MAX_INDIVIDUAL_VARIANCE) <
                    t.MAX_AVG_VARIANCE
                  )
                    return new Int32Array([c, I]);
                  ((c += _[0] + _[1]),
                    n.default.arraycopy(_, 2, _, 0, R - 1),
                    (_[R - 1] = 0),
                    (_[R] = 0),
                    R--);
                } else R++;
                ((_[R] = 1), (E = !E));
              }
            }
            return R === h - 1 &&
              t.patternMatchVariance(_, A, t.MAX_INDIVIDUAL_VARIANCE) <
                t.MAX_AVG_VARIANCE
              ? new Int32Array([c, I - 1])
              : null;
          }),
          (t.patternMatchVariance = function (t, e, n) {
            for (var u = t.length, f = 0, l = 0, i = 0; i < u; i++)
              ((f += t[i]), (l += e[i]));
            if (f < l) return 1 / 0;
            var o = f / l;
            n *= o;
            for (var A = 0, _ = 0; _ < u; _++) {
              var c = t[_],
                T = e[_] * o,
                I = c > T ? c - T : T - c;
              if (I > n) return 1 / 0;
              A += I;
            }
            return A / f;
          }),
          (t.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5])),
          (t.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3])),
          (t.MAX_AVG_VARIANCE = 0.42),
          (t.MAX_INDIVIDUAL_VARIANCE = 0.8),
          (t.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3])),
          (t.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1])),
          (t.MAX_PIXEL_DRIFT = 3),
          (t.MAX_PATTERN_DRIFT = 5),
          (t.SKIPPED_ROW_COUNT_MAX = 25),
          (t.ROW_STEP = 5),
          (t.BARCODE_MIN_HEIGHT = 10),
          t
        );
      })();
  },
  1155,
  [1052, 1020, 1019, 1156],
);
