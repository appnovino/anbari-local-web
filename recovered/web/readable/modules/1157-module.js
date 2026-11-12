// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1157; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e2, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e2, '__esModule', { value: !0 }),
      Object.defineProperty(_e2, 'default', {
        enumerable: !0,
        get: function () {
          return M;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      u = e(r(d[3])),
      l = e(r(d[4])),
      i = e(r(d[5])),
      f = e(r(d[6])),
      c = e(r(d[7])),
      C = e(r(d[8])),
      s = e(r(d[9])),
      h = e(r(d[10])),
      w = e(r(d[11])),
      v = e(r(d[12])),
      m = e(r(d[13])),
      B = e(r(d[14])),
      y =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            o = 0;
          if (n) return n.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && o >= e.length && (e = void 0),
                  { value: e && e[o++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      M = (function () {
        function e() {}
        return (
          (e.decode = function (t, n, u, l, i, C, h) {
            for (
              var w,
                v = new f.default(t, n, u, l, i),
                m = null,
                B = null,
                y = !0;
              ;
              y = !1
            ) {
              if (
                (null != n && (m = e.getRowIndicatorColumn(t, v, n, !0, C, h)),
                null != l && (B = e.getRowIndicatorColumn(t, v, l, !1, C, h)),
                null == (w = e.merge(m, B)))
              )
                throw o.default.getNotFoundInstance();
              var M = w.getBoundingBox();
              if (
                !y ||
                null == M ||
                !(M.getMinY() < v.getMinY() || M.getMaxY() > v.getMaxY())
              )
                break;
              v = M;
            }
            w.setBoundingBox(v);
            var R = w.getBarcodeColumnCount() + 1;
            (w.setDetectionResultColumn(0, m),
              w.setDetectionResultColumn(R, B));
            for (var E = null != m, x = 1; x <= R; x++) {
              var S = E ? x : R - x;
              if (void 0 === w.getDetectionResultColumn(S)) {
                var b = void 0;
                ((b =
                  0 === S || S === R
                    ? new c.default(v, 0 === S)
                    : new s.default(v)),
                  w.setDetectionResultColumn(S, b));
                for (
                  var D = -1, _ = D, I = v.getMinY();
                  I <= v.getMaxY();
                  I++
                ) {
                  if (
                    (D = e.getStartColumn(w, S, I, E)) < 0 ||
                    D > v.getMaxX()
                  ) {
                    if (-1 === _) continue;
                    D = _;
                  }
                  var X = e.detectCodeword(
                    t,
                    v.getMinX(),
                    v.getMaxX(),
                    E,
                    D,
                    I,
                    C,
                    h,
                  );
                  null != X &&
                    (b.setCodeword(I, X),
                    (_ = D),
                    (C = Math.min(C, X.getWidth())),
                    (h = Math.max(h, X.getWidth())));
                }
              }
            }
            return e.createDecoderResult(w);
          }),
          (e.merge = function (t, n) {
            if (null == t && null == n) return null;
            var o = e.getBarcodeMetadata(t, n);
            if (null == o) return null;
            var u = f.default.merge(
              e.adjustBoundingBox(t),
              e.adjustBoundingBox(n),
            );
            return new C.default(o, u);
          }),
          (e.adjustBoundingBox = function (t) {
            var n, o;
            if (null == t) return null;
            var u = t.getRowHeights();
            if (null == u) return null;
            var l = e.getMax(u),
              i = 0;
            try {
              for (var f = y(u), c = f.next(); !c.done; c = f.next()) {
                var C = c.value;
                if (((i += l - C), C > 0)) break;
              }
            } catch (e) {
              n = { error: e };
            } finally {
              try {
                c && !c.done && (o = f.return) && o.call(f);
              } finally {
                if (n) throw n.error;
              }
            }
            for (var s = t.getCodewords(), h = 0; i > 0 && null == s[h]; h++)
              i--;
            var w = 0;
            for (
              h = u.length - 1;
              h >= 0 && ((w += l - u[h]), !(u[h] > 0));
              h--
            );
            for (h = s.length - 1; w > 0 && null == s[h]; h--) w--;
            return t.getBoundingBox().addMissingRows(i, w, t.isLeft());
          }),
          (e.getMax = function (e) {
            var t,
              n,
              o = -1;
            try {
              for (var u = y(e), l = u.next(); !l.done; l = u.next()) {
                var i = l.value;
                o = Math.max(o, i);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                l && !l.done && (n = u.return) && n.call(u);
              } finally {
                if (t) throw t.error;
              }
            }
            return o;
          }),
          (e.getBarcodeMetadata = function (e, t) {
            var n, o;
            return null == e || null == (n = e.getBarcodeMetadata())
              ? null == t
                ? null
                : t.getBarcodeMetadata()
              : null == t || null == (o = t.getBarcodeMetadata())
                ? n
                : n.getColumnCount() !== o.getColumnCount() &&
                    n.getErrorCorrectionLevel() !==
                      o.getErrorCorrectionLevel() &&
                    n.getRowCount() !== o.getRowCount()
                  ? null
                  : n;
          }),
          (e.getRowIndicatorColumn = function (t, n, o, u, l, i) {
            for (var f = new c.default(n, u), C = 0; C < 2; C++)
              for (
                var s = 0 === C ? 1 : -1,
                  h = Math.trunc(Math.trunc(o.getX())),
                  w = Math.trunc(Math.trunc(o.getY()));
                w <= n.getMaxY() && w >= n.getMinY();
                w += s
              ) {
                var v = e.detectCodeword(t, 0, t.getWidth(), u, h, w, l, i);
                null != v &&
                  (f.setCodeword(w, v), (h = u ? v.getStartX() : v.getEndX()));
              }
            return f;
          }),
          (e.adjustCodewordCount = function (t, n) {
            var u = n[0][1],
              i = u.getValue(),
              f =
                t.getBarcodeColumnCount() * t.getBarcodeRowCount() -
                e.getNumberOfECCodeWords(t.getBarcodeECLevel());
            if (0 === i.length) {
              if (f < 1 || f > l.default.MAX_CODEWORDS_IN_BARCODE)
                throw o.default.getNotFoundInstance();
              u.setValue(f);
            } else i[0] !== f && u.setValue(f);
          }),
          (e.createDecoderResult = function (t) {
            var n = e.createBarcodeMatrix(t);
            e.adjustCodewordCount(t, n);
            for (
              var o = new Array(),
                u = new Int32Array(
                  t.getBarcodeRowCount() * t.getBarcodeColumnCount(),
                ),
                i = [],
                f = new Array(),
                c = 0;
              c < t.getBarcodeRowCount();
              c++
            )
              for (var C = 0; C < t.getBarcodeColumnCount(); C++) {
                var s = n[c][C + 1].getValue(),
                  h = c * t.getBarcodeColumnCount() + C;
                0 === s.length
                  ? o.push(h)
                  : 1 === s.length
                    ? (u[h] = s[0])
                    : (f.push(h), i.push(s));
              }
            for (var w = new Array(i.length), v = 0; v < w.length; v++)
              w[v] = i[v];
            return e.createDecoderResultFromAmbiguousValues(
              t.getBarcodeECLevel(),
              u,
              l.default.toIntArray(o),
              l.default.toIntArray(f),
              w,
            );
          }),
          (e.createDecoderResultFromAmbiguousValues = function (n, o, u, l, i) {
            for (var f = new Int32Array(l.length), c = 100; c-- > 0; ) {
              for (var C = 0; C < f.length; C++) o[l[C]] = i[C][f[C]];
              try {
                return e.decodeCodewords(o, n, u);
              } catch (e) {
                if (!(e instanceof t.default)) throw e;
              }
              if (0 === f.length) throw t.default.getChecksumInstance();
              for (C = 0; C < f.length; C++) {
                if (f[C] < i[C].length - 1) {
                  f[C]++;
                  break;
                }
                if (((f[C] = 0), C === f.length - 1))
                  throw t.default.getChecksumInstance();
              }
            }
            throw t.default.getChecksumInstance();
          }),
          (e.createBarcodeMatrix = function (e) {
            for (
              var t,
                n,
                o,
                u,
                l = Array.from({ length: e.getBarcodeRowCount() }, function () {
                  return new Array(e.getBarcodeColumnCount() + 2);
                }),
                i = 0;
              i < l.length;
              i++
            )
              for (var f = 0; f < l[i].length; f++) l[i][f] = new w.default();
            var c = 0;
            try {
              for (
                var C = y(e.getDetectionResultColumns()), s = C.next();
                !s.done;
                s = C.next()
              ) {
                var h = s.value;
                if (null != h)
                  try {
                    for (
                      var v = ((o = void 0), y(h.getCodewords())), m = v.next();
                      !m.done;
                      m = v.next()
                    ) {
                      var B = m.value;
                      if (null != B) {
                        var M = B.getRowNumber();
                        if (M >= 0) {
                          if (M >= l.length) continue;
                          l[M][c].setValue(B.getValue());
                        }
                      }
                    }
                  } catch (e) {
                    o = { error: e };
                  } finally {
                    try {
                      m && !m.done && (u = v.return) && u.call(v);
                    } finally {
                      if (o) throw o.error;
                    }
                  }
                c++;
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                s && !s.done && (n = C.return) && n.call(C);
              } finally {
                if (t) throw t.error;
              }
            }
            return l;
          }),
          (e.isValidBarcodeColumn = function (e, t) {
            return t >= 0 && t <= e.getBarcodeColumnCount() + 1;
          }),
          (e.getStartColumn = function (t, n, o, u) {
            var l,
              i,
              f = u ? 1 : -1,
              c = null;
            if (
              (e.isValidBarcodeColumn(t, n - f) &&
                (c = t.getDetectionResultColumn(n - f).getCodeword(o)),
              null != c)
            )
              return u ? c.getEndX() : c.getStartX();
            if (
              null != (c = t.getDetectionResultColumn(n).getCodewordNearby(o))
            )
              return u ? c.getStartX() : c.getEndX();
            if (
              (e.isValidBarcodeColumn(t, n - f) &&
                (c = t.getDetectionResultColumn(n - f).getCodewordNearby(o)),
              null != c)
            )
              return u ? c.getEndX() : c.getStartX();
            for (var C = 0; e.isValidBarcodeColumn(t, n - f); ) {
              n -= f;
              try {
                for (
                  var s =
                      ((l = void 0),
                      y(t.getDetectionResultColumn(n).getCodewords())),
                    h = s.next();
                  !h.done;
                  h = s.next()
                ) {
                  var w = h.value;
                  if (null != w)
                    return (
                      (u ? w.getEndX() : w.getStartX()) +
                      f * C * (w.getEndX() - w.getStartX())
                    );
                }
              } catch (e) {
                l = { error: e };
              } finally {
                try {
                  h && !h.done && (i = s.return) && i.call(s);
                } finally {
                  if (l) throw l.error;
                }
              }
              C++;
            }
            return u
              ? t.getBoundingBox().getMinX()
              : t.getBoundingBox().getMaxX();
          }),
          (e.detectCodeword = function (t, n, o, i, f, c, C, s) {
            f = e.adjustCodewordStartColumn(t, n, o, i, f, c);
            var w,
              m = e.getModuleBitCount(t, n, o, i, f, c);
            if (null == m) return null;
            var B = u.default.sum(m);
            if (i) w = f + B;
            else {
              for (var y = 0; y < m.length / 2; y++) {
                var M = m[y];
                ((m[y] = m[m.length - 1 - y]), (m[m.length - 1 - y] = M));
              }
              f = (w = f) - B;
            }
            if (!e.checkCodewordSkew(B, C, s)) return null;
            var R = v.default.getDecodedValue(m),
              E = l.default.getCodeword(R);
            return -1 === E
              ? null
              : new h.default(f, w, e.getCodewordBucketNumber(R), E);
          }),
          (e.getModuleBitCount = function (e, t, n, o, u, l) {
            for (
              var i = u, f = new Int32Array(8), c = 0, C = o ? 1 : -1, s = o;
              (o ? i < n : i >= t) && c < f.length;

            )
              e.get(i, l) === s ? (f[c]++, (i += C)) : (c++, (s = !s));
            return c === f.length || (i === (o ? n : t) && c === f.length - 1)
              ? f
              : null;
          }),
          (e.getNumberOfECCodeWords = function (e) {
            return 2 << e;
          }),
          (e.adjustCodewordStartColumn = function (t, n, o, u, l, i) {
            for (var f = l, c = u ? -1 : 1, C = 0; C < 2; C++) {
              for (; (u ? f >= n : f < o) && u === t.get(f, i); ) {
                if (Math.abs(l - f) > e.CODEWORD_SKEW_SIZE) return l;
                f += c;
              }
              ((c = -c), (u = !u));
            }
            return f;
          }),
          (e.checkCodewordSkew = function (t, n, o) {
            return (
              n - e.CODEWORD_SKEW_SIZE <= t && t <= o + e.CODEWORD_SKEW_SIZE
            );
          }),
          (e.decodeCodewords = function (t, o, u) {
            if (0 === t.length) throw n.default.getFormatInstance();
            var l = 1 << (o + 1),
              i = e.correctErrors(t, u, l);
            e.verifyCodewordCount(t, l);
            var f = m.default.decode(t, '' + o);
            return (f.setErrorsCorrected(i), f.setErasures(u.length), f);
          }),
          (e.correctErrors = function (n, o, u) {
            if (
              (null != o && o.length > u / 2 + e.MAX_ERRORS) ||
              u < 0 ||
              u > e.MAX_EC_CODEWORDS
            )
              throw t.default.getChecksumInstance();
            return e.errorCorrection.decode(n, u, o);
          }),
          (e.verifyCodewordCount = function (e, t) {
            if (e.length < 4) throw n.default.getFormatInstance();
            var o = e[0];
            if (o > e.length) throw n.default.getFormatInstance();
            if (0 === o) {
              if (!(t < e.length)) throw n.default.getFormatInstance();
              e[0] = e.length - t;
            }
          }),
          (e.getBitCountForCodeword = function (e) {
            for (
              var t = new Int32Array(8), n = 0, o = t.length - 1;
              !((1 & e) !== n && ((n = 1 & e), --o < 0));

            )
              (t[o]++, (e >>= 1));
            return t;
          }),
          (e.getCodewordBucketNumber = function (e) {
            return e instanceof Int32Array
              ? this.getCodewordBucketNumber_Int32Array(e)
              : this.getCodewordBucketNumber_number(e);
          }),
          (e.getCodewordBucketNumber_number = function (t) {
            return e.getCodewordBucketNumber(e.getBitCountForCodeword(t));
          }),
          (e.getCodewordBucketNumber_Int32Array = function (e) {
            return (e[0] - e[2] + e[4] - e[6] + 9) % 9;
          }),
          (e.toString = function (e) {
            for (var t = new B.default(), n = 0; n < e.length; n++) {
              t.format('Row %2d: ', n);
              for (var o = 0; o < e[n].length; o++) {
                var u = e[n][o];
                0 === u.getValue().length
                  ? t.format('        ', null)
                  : t.format(
                      '%4d(%2d)',
                      u.getValue()[0],
                      u.getConfidence(u.getValue()[0]),
                    );
              }
              t.format('%n');
            }
            return t.toString();
          }),
          (e.CODEWORD_SKEW_SIZE = 2),
          (e.MAX_ERRORS = 3),
          (e.MAX_EC_CODEWORDS = 512),
          (e.errorCorrection = new i.default()),
          e
        );
      })();
  },
  1157,
  [
    1015, 1029, 1032, 1053, 1154, 1158, 1162, 1163, 1168, 1165, 1169, 1167,
    1170, 1171, 1166,
  ],
);
