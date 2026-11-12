// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1108; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e2, _d2) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e2, '__esModule', { value: !0 }),
      Object.defineProperty(_e2, 'default', {
        enumerable: !0,
        get: function () {
          return D;
        },
      }));
    var e,
      r = t(_r(_d2[0])),
      n = t(_r(_d2[1])),
      o = t(_r(_d2[2])),
      i = t(_r(_d2[3])),
      u = t(_r(_d2[4])),
      l = t(_r(_d2[5])),
      f = t(_r(_d2[6])),
      s = t(_r(_d2[7])),
      d = t(_r(_d2[8])),
      h = t(_r(_d2[9])),
      c = t(_r(_d2[10])),
      v = t(_r(_d2[11])),
      y = t(_r(_d2[12])),
      p = t(_r(_d2[13])),
      S =
        (this && this.__extends) ||
        ((e = function (t, r) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              }),
            e(t, r)
          );
        }),
        function (t, r) {
          if ('function' != typeof r && null !== r)
            throw new TypeError(
              'Class extends value ' +
                String(r) +
                ' is not a constructor or null',
            );
          function n() {
            this.constructor = t;
          }
          (e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n())));
        }),
      _ =
        (this && this.__read) ||
        function (t, e) {
          var r = 'function' == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            i = r.call(t),
            u = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(n = i.next()).done; )
              u.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = i.return) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return u;
        },
      w =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || 2 === arguments.length)
            for (var n, o = 0, i = e.length; o < i; o++)
              (!n && o in e) ||
                (n || (n = Array.prototype.slice.call(e, 0, o)), (n[o] = e[o]));
          return t.concat(n || Array.prototype.slice.call(e));
        },
      E =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && n >= t.length && (t = void 0),
                  { value: t && t[n++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      I = (function (t) {
        function e() {
          var e = t.apply(this, w([], _(arguments), !1)) || this;
          return ((e.possibleLeftPairs = []), (e.possibleRightPairs = []), e);
        }
        return (
          S(e, t),
          (e.prototype.decodeRow = function (t, r, n) {
            var o,
              i,
              l,
              f,
              s = this.decodePair(r, !1, t, n);
            (e.addOrTally(this.possibleLeftPairs, s), r.reverse());
            var d = this.decodePair(r, !0, t, n);
            (e.addOrTally(this.possibleRightPairs, d), r.reverse());
            try {
              for (
                var h = E(this.possibleLeftPairs), c = h.next();
                !c.done;
                c = h.next()
              ) {
                var v = c.value;
                if (v.getCount() > 1)
                  try {
                    for (
                      var y = ((l = void 0), E(this.possibleRightPairs)),
                        p = y.next();
                      !p.done;
                      p = y.next()
                    ) {
                      var S = p.value;
                      if (S.getCount() > 1 && e.checkChecksum(v, S))
                        return e.constructResult(v, S);
                    }
                  } catch (t) {
                    l = { error: t };
                  } finally {
                    try {
                      p && !p.done && (f = y.return) && f.call(y);
                    } finally {
                      if (l) throw l.error;
                    }
                  }
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                c && !c.done && (i = h.return) && i.call(h);
              } finally {
                if (o) throw o.error;
              }
            }
            throw new u.default();
          }),
          (e.addOrTally = function (t, e) {
            var r, n;
            if (null !== e) {
              var o = !1;
              try {
                for (var i = E(t), u = i.next(); !u.done; u = i.next()) {
                  var l = u.value;
                  if (l.getValue() === e.getValue()) {
                    (l.incrementCount(), (o = !0));
                    break;
                  }
                }
              } catch (t) {
                r = { error: t };
              } finally {
                try {
                  u && !u.done && (n = i.return) && n.call(i);
                } finally {
                  if (r) throw r.error;
                }
              }
              o || t.push(e);
            }
          }),
          (e.prototype.reset = function () {
            ((this.possibleLeftPairs.length = 0),
              (this.possibleRightPairs.length = 0));
          }),
          (e.constructResult = function (t, e) {
            for (
              var r = 4537077 * t.getValue() + e.getValue(),
                n = String(r),
                i = new l.default(),
                u = 13 - n.length;
              u > 0;
              u--
            )
              i.append('0');
            i.append(n);
            var s = 0;
            for (u = 0; u < 13; u++) {
              var d = i.charAt(u).charCodeAt(0) - '0'.charCodeAt(0);
              s += 1 & u ? d : 3 * d;
            }
            (10 === (s = 10 - (s % 10)) && (s = 0), i.append(s.toString()));
            var h = t.getFinderPattern().getResultPoints(),
              c = e.getFinderPattern().getResultPoints();
            return new o.default(
              i.toString(),
              null,
              0,
              [h[0], h[1], c[0], c[1]],
              f.default.RSS_14,
              new Date().getTime(),
            );
          }),
          (e.checkChecksum = function (t, e) {
            var r = (t.getChecksumPortion() + 16 * e.getChecksumPortion()) % 79,
              n =
                9 * t.getFinderPattern().getValue() +
                e.getFinderPattern().getValue();
            return (n > 72 && n--, n > 8 && n--, r === n);
          }),
          (e.prototype.decodePair = function (t, e, r, o) {
            try {
              var l = this.findFinderPattern(t, e),
                f = this.parseFoundFinderPattern(t, r, e, l),
                d =
                  null == o
                    ? null
                    : o.get(i.default.NEED_RESULT_POINT_CALLBACK);
              if (null != d) {
                var h = (l[0] + l[1] - 1) / 2;
                (e && (h = t.getSize() - 1 - h),
                  d.foundPossibleResultPoint(new s.default(h, r)));
              }
              var c = this.decodeDataCharacter(t, f, !0),
                v = this.decodeDataCharacter(t, f, !1);
              return new n.default(
                1597 * c.getValue() + v.getValue(),
                c.getChecksumPortion() + 4 * v.getChecksumPortion(),
                f,
              );
            } catch (t) {
              if (t instanceof u.default) return null;
              throw t;
            }
          }),
          (e.prototype.decodeDataCharacter = function (t, r, n) {
            for (
              var o = this.getDataCharacterCounters(), i = 0;
              i < o.length;
              i++
            )
              o[i] = 0;
            if (n) p.default.recordPatternInReverse(t, r.getStartEnd()[0], o);
            else {
              p.default.recordPattern(t, r.getStartEnd()[1], o);
              for (var l = 0, f = o.length - 1; l < f; l++, f--) {
                var s = o[l];
                ((o[l] = o[f]), (o[f] = s));
              }
            }
            var d = n ? 16 : 15,
              y = c.default.sum(new Int32Array(o)) / d,
              S = this.getOddCounts(),
              _ = this.getEvenCounts(),
              w = this.getOddRoundingErrors(),
              E = this.getEvenRoundingErrors();
            for (l = 0; l < o.length; l++) {
              var I = o[l] / y,
                D = Math.floor(I + 0.5);
              D < 1 ? (D = 1) : D > 8 && (D = 8);
              var O = Math.floor(l / 2);
              1 & l
                ? ((_[O] = D), (E[O] = I - D))
                : ((S[O] = D), (w[O] = I - D));
            }
            this.adjustOddEvenCounts(n, d);
            var P = 0,
              T = 0;
            for (l = S.length - 1; l >= 0; l--)
              ((T *= 9), (T += S[l]), (P += S[l]));
            var m = 0,
              C = 0;
            for (l = _.length - 1; l >= 0; l--)
              ((m *= 9), (m += _[l]), (C += _[l]));
            var A = T + 3 * m;
            if (n) {
              if (1 & P || P > 12 || P < 4) throw new u.default();
              var R = (12 - P) / 2,
                b = 9 - (V = e.OUTSIDE_ODD_WIDEST[R]),
                F = v.default.getRSSvalue(S, V, !1),
                U = v.default.getRSSvalue(_, b, !0),
                N = e.OUTSIDE_EVEN_TOTAL_SUBSET[R],
                L = e.OUTSIDE_GSUM[R];
              return new h.default(F * N + U + L, A);
            }
            if (1 & C || C > 10 || C < 4) throw new u.default();
            ((R = (10 - C) / 2),
              (b = 9 - (V = e.INSIDE_ODD_WIDEST[R])),
              (F = v.default.getRSSvalue(S, V, !0)),
              (U = v.default.getRSSvalue(_, b, !1)));
            var V,
              x = e.INSIDE_ODD_TOTAL_SUBSET[R];
            L = e.INSIDE_GSUM[R];
            return new h.default(U * x + F + L, A);
          }),
          (e.prototype.findFinderPattern = function (t, e) {
            var n = this.getDecodeFinderCounters();
            ((n[0] = 0), (n[1] = 0), (n[2] = 0), (n[3] = 0));
            for (
              var o = t.getSize(), i = !1, l = 0;
              l < o && e !== (i = !t.get(l));

            )
              l++;
            for (var f = 0, s = l, d = l; d < o; d++)
              if (t.get(d) !== i) n[f]++;
              else {
                if (3 === f) {
                  if (r.default.isFinderPattern(n)) return [s, d];
                  ((s += n[0] + n[1]),
                    (n[0] = n[2]),
                    (n[1] = n[3]),
                    (n[2] = 0),
                    (n[3] = 0),
                    f--);
                } else f++;
                ((n[f] = 1), (i = !i));
              }
            throw new u.default();
          }),
          (e.prototype.parseFoundFinderPattern = function (t, r, n, o) {
            for (var i = t.get(o[0]), u = o[0] - 1; u >= 0 && i !== t.get(u); )
              u--;
            u++;
            var l = o[0] - u,
              f = this.getDecodeFinderCounters(),
              s = new Int32Array(f.length);
            (y.default.arraycopy(f, 0, s, 1, f.length - 1), (s[0] = l));
            var h = this.parseFinderValue(s, e.FINDER_PATTERNS),
              c = u,
              v = o[1];
            return (
              n && ((c = t.getSize() - 1 - c), (v = t.getSize() - 1 - v)),
              new d.default(h, [u, o[1]], c, v, r)
            );
          }),
          (e.prototype.adjustOddEvenCounts = function (t, e) {
            var n = c.default.sum(new Int32Array(this.getOddCounts())),
              o = c.default.sum(new Int32Array(this.getEvenCounts())),
              i = !1,
              l = !1,
              f = !1,
              s = !1;
            t
              ? (n > 12 ? (l = !0) : n < 4 && (i = !0),
                o > 12 ? (s = !0) : o < 4 && (f = !0))
              : (n > 11 ? (l = !0) : n < 5 && (i = !0),
                o > 10 ? (s = !0) : o < 4 && (f = !0));
            var d = n + o - e,
              h = (1 & n) == (t ? 1 : 0),
              v = !(1 & ~o);
            if (1 === d)
              if (h) {
                if (v) throw new u.default();
                l = !0;
              } else {
                if (!v) throw new u.default();
                s = !0;
              }
            else if (-1 === d)
              if (h) {
                if (v) throw new u.default();
                i = !0;
              } else {
                if (!v) throw new u.default();
                f = !0;
              }
            else {
              if (0 !== d) throw new u.default();
              if (h) {
                if (!v) throw new u.default();
                n < o ? ((i = !0), (s = !0)) : ((l = !0), (f = !0));
              } else if (v) throw new u.default();
            }
            if (i) {
              if (l) throw new u.default();
              r.default.increment(
                this.getOddCounts(),
                this.getOddRoundingErrors(),
              );
            }
            if (
              (l &&
                r.default.decrement(
                  this.getOddCounts(),
                  this.getOddRoundingErrors(),
                ),
              f)
            ) {
              if (s) throw new u.default();
              r.default.increment(
                this.getEvenCounts(),
                this.getOddRoundingErrors(),
              );
            }
            s &&
              r.default.decrement(
                this.getEvenCounts(),
                this.getEvenRoundingErrors(),
              );
          }),
          (e.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126]),
          (e.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81]),
          (e.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715]),
          (e.INSIDE_GSUM = [0, 336, 1036, 1516]),
          (e.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1]),
          (e.INSIDE_ODD_WIDEST = [2, 4, 6, 8]),
          (e.FINDER_PATTERNS = [
            Int32Array.from([3, 8, 2, 1]),
            Int32Array.from([3, 5, 5, 1]),
            Int32Array.from([3, 3, 7, 1]),
            Int32Array.from([3, 1, 9, 1]),
            Int32Array.from([2, 7, 4, 1]),
            Int32Array.from([2, 5, 6, 1]),
            Int32Array.from([2, 3, 8, 1]),
            Int32Array.from([1, 5, 7, 1]),
            Int32Array.from([1, 3, 9, 1]),
          ]),
          e
        );
      })(r.default),
      D = I;
  },
  1108,
  [
    1081, 1109, 1039, 1027, 1032, 1025, 1040, 1052, 1083, 1082, 1053, 1084,
    1020, 1065,
  ],
);
