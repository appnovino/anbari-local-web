// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1080; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
      i = t(_r(_d2[2])),
      o = t(_r(_d2[3])),
      s = t(_r(_d2[4])),
      l = t(_r(_d2[5])),
      u = t(_r(_d2[6])),
      f = t(_r(_d2[7])),
      h = t(_r(_d2[8])),
      _ = t(_r(_d2[9])),
      E = _r(_d2[10]),
      c = t(_r(_d2[11])),
      d = t(_r(_d2[12])),
      A =
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
      R =
        (this && this.__read) ||
        function (t, e) {
          var r = 'function' == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            i,
            o = r.call(t),
            s = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(n = o.next()).done; )
              s.push(n.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              n && !n.done && (r = o.return) && r.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return s;
        },
      N =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || 2 === arguments.length)
            for (var n, i = 0, o = e.length; i < o; i++)
              (!n && i in e) ||
                (n || (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
          return t.concat(n || Array.prototype.slice.call(e));
        },
      P =
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
      v = (function (t) {
        function e() {
          var r = t.apply(this, N([], R(arguments), !1)) || this;
          return (
            (r.pairs = new Array(e.MAX_PAIRS)),
            (r.rows = new Array()),
            (r.startEnd = [0, 0]),
            (r.startFromEven = !1),
            r
          );
        }
        return (
          A(e, t),
          (e.prototype.decodeRow = function (t, r, n) {
            this.startFromEven = !1;
            try {
              return e.constructResult(this.decodeRow2pairs(t, r));
            } catch (t) {
              if (!(t instanceof i.default)) throw t;
            }
            return (
              (this.startFromEven = !0),
              e.constructResult(this.decodeRow2pairs(t, r))
            );
          }),
          (e.prototype.reset = function () {
            ((this.pairs.length = 0), (this.rows.length = 0));
          }),
          (e.prototype.decodeRow2pairs = function (t, r) {
            this.pairs.length = 0;
            for (var n = !1; !n; )
              try {
                this.pairs.push(this.retrieveNextPair(r, this.pairs, t));
              } catch (t) {
                if (!(t instanceof i.default)) throw t;
                if (0 === this.pairs.length) throw t;
                n = !0;
              }
            if (this.checkChecksum() && e.isValidSequence(this.pairs, !0))
              return this.pairs;
            var o = this.rows.length > 0;
            if ((this.storeRow(t), o)) {
              var s = this.checkRowsBoolean(!1);
              if (null !== s) return s;
              if (null !== (s = this.checkRowsBoolean(!0))) return s;
            }
            throw new i.default();
          }),
          (e.prototype.checkRowsBoolean = function (t) {
            if (this.rows.length > 25) return ((this.rows.length = 0), null);
            ((this.pairs.length = 0), t && this.rows.reverse());
            var e = null;
            try {
              e = this.checkRows(new Array(), 0);
            } catch (t) {
              if (!(t instanceof i.default)) throw t;
            }
            return (t && this.rows.reverse(), e);
          }),
          (e.prototype.checkRows = function (t, r) {
            for (var n, o = r; o < this.rows.length; o++) {
              var s = this.rows[o];
              (n = this.pairs).push.apply(n, N([], R(s.getPairs()), !1));
              var l = s.getPairs().length;
              if (e.isValidSequence(this.pairs, !1)) {
                if (this.checkChecksum()) return this.pairs;
                t.push(s);
                try {
                  return this.checkRows(t, o + 1);
                } catch (e) {
                  if (!(e instanceof i.default)) throw e;
                  (t.pop(), this.pairs.splice(this.pairs.length - l, l));
                }
              } else this.pairs.splice(this.pairs.length - l, l);
            }
            throw new i.default();
          }),
          (e.isValidSequence = function (t, r) {
            var n, i;
            try {
              for (
                var o = P(e.FINDER_PATTERN_SEQUENCES), s = o.next();
                !s.done;
                s = o.next()
              ) {
                var l = s.value;
                if (r ? t.length === l.length : t.length <= l.length) {
                  for (var u = !0, f = 0; f < t.length; f++)
                    if (t[f].getFinderPattern().getValue() !== l[f]) {
                      u = !1;
                      break;
                    }
                  if (u) return !0;
                }
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                s && !s.done && (i = o.return) && i.call(o);
              } finally {
                if (n) throw n.error;
              }
            }
            return !1;
          }),
          (e.mayFollow = function (t, e) {
            var r, n;
            if (0 === t.length) return !0;
            try {
              for (
                var i = P(this.FINDER_PATTERN_SEQUENCES), o = i.next();
                !o.done;
                o = i.next()
              ) {
                var s = o.value;
                if (t.length + 1 <= s.length)
                  for (var l = t.length; l < s.length; l++)
                    if (s[l] === e) {
                      for (var u = !0, f = 0; f < t.length; f++) {
                        if (
                          s[l - f - 1] !==
                          t[t.length - f - 1].getFinderPattern().getValue()
                        ) {
                          u = !1;
                          break;
                        }
                      }
                      if (u) return !0;
                    }
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i);
              } finally {
                if (r) throw r.error;
              }
            }
            return !1;
          }),
          (e.prototype.storeRow = function (t) {
            for (var r = 0, n = !1, i = !1; r < this.rows.length; ) {
              var o = this.rows[r];
              if (o.getRowNumber() > t) {
                i = o.isEquivalent(this.pairs);
                break;
              }
              ((n = o.isEquivalent(this.pairs)), r++);
            }
            i ||
              n ||
              e.isPartialRow(this.pairs, this.rows) ||
              (this.rows.splice(r, 0, new d.default(this.pairs, t)),
              this.removePartialRows(this.pairs, this.rows));
          }),
          (e.prototype.removePartialRows = function (t, e) {
            for (var r, n, i = e.length - 1; i >= 0; i--) {
              var o = e[i];
              if (o.getPairs().length !== t.length) {
                var s = !0,
                  l = function (e) {
                    if (
                      !t.some(function (t) {
                        return c.default.equals(e, t);
                      })
                    )
                      return ((s = !1), 'break');
                  };
                try {
                  for (
                    var u = ((r = void 0), P(o.getPairs())), f = u.next();
                    !f.done;
                    f = u.next()
                  ) {
                    if ('break' === l(f.value)) break;
                  }
                } catch (t) {
                  r = { error: t };
                } finally {
                  try {
                    f && !f.done && (n = u.return) && n.call(u);
                  } finally {
                    if (r) throw r.error;
                  }
                }
                s && e.splice(i, 1);
              }
            }
          }),
          (e.isPartialRow = function (t, e) {
            var r, n, i, o, s, l;
            try {
              for (var u = P(e), f = u.next(); !f.done; f = u.next()) {
                var h = f.value,
                  _ = !0;
                try {
                  for (
                    var E = ((i = void 0), P(t)), d = E.next();
                    !d.done;
                    d = E.next()
                  ) {
                    var A = d.value,
                      R = !1;
                    try {
                      for (
                        var N = ((s = void 0), P(h.getPairs())), v = N.next();
                        !v.done;
                        v = N.next()
                      ) {
                        var D = v.value;
                        if (c.default.equals(A, D)) {
                          R = !0;
                          break;
                        }
                      }
                    } catch (t) {
                      s = { error: t };
                    } finally {
                      try {
                        v && !v.done && (l = N.return) && l.call(N);
                      } finally {
                        if (s) throw s.error;
                      }
                    }
                    if (!R) {
                      _ = !1;
                      break;
                    }
                  }
                } catch (t) {
                  i = { error: t };
                } finally {
                  try {
                    d && !d.done && (o = E.return) && o.call(E);
                  } finally {
                    if (i) throw i.error;
                  }
                }
                if (_) return !0;
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                f && !f.done && (n = u.return) && n.call(u);
              } finally {
                if (r) throw r.error;
              }
            }
            return !1;
          }),
          (e.prototype.getRows = function () {
            return this.rows;
          }),
          (e.constructResult = function (t) {
            var e = _.default.buildBitArray(t),
              n = (0, E.createDecoder)(e).parseInformation(),
              i = t[0].getFinderPattern().getResultPoints(),
              s = t[t.length - 1].getFinderPattern().getResultPoints(),
              l = [i[0], i[1], s[0], s[1]];
            return new o.default(
              n,
              null,
              null,
              l,
              r.default.RSS_EXPANDED,
              null,
            );
          }),
          (e.prototype.checkChecksum = function () {
            var t = this.pairs[0],
              e = t.getLeftChar(),
              r = t.getRightChar();
            if (null === r) return !1;
            for (
              var n = r.getChecksumPortion(), i = 2, o = 1;
              o < this.pairs.length;
              ++o
            ) {
              var s = this.pairs[o];
              ((n += s.getLeftChar().getChecksumPortion()), i++);
              var l = s.getRightChar();
              null !== l && ((n += l.getChecksumPortion()), i++);
            }
            return 211 * (i - 4) + (n %= 211) === e.getValue();
          }),
          (e.getNextSecondBar = function (t, e) {
            var r = 0;
            return (
              t.get(e)
                ? ((r = t.getNextUnset(e)), (r = t.getNextSet(r)))
                : ((r = t.getNextSet(e)), (r = t.getNextUnset(r))),
              r
            );
          }),
          (e.prototype.retrieveNextPair = function (t, r, n) {
            var o = r.length % 2 == 0;
            this.startFromEven && (o = !o);
            var s = null,
              l = null,
              u = !0,
              f = -1;
            do {
              if (
                (this.findNextPair(t, r, f),
                null === (s = this.parseFoundFinderPattern(t, n, o, r)))
              )
                f = e.getNextSecondBar(t, this.startEnd[0]);
              else
                try {
                  ((l = this.decodeDataCharacter(t, s, o, !0)), (u = !1));
                } catch (r) {
                  if (!(r instanceof i.default)) throw r;
                  f = e.getNextSecondBar(t, this.startEnd[0]);
                }
            } while (u);
            if (r.length > 0 && r[r.length - 1].mustBeLast())
              throw new i.default();
            var h = null;
            try {
              h = this.decodeDataCharacter(t, s, o, !1);
            } catch (t) {
              if (!(t instanceof i.default)) throw t;
              h = null;
            }
            return new c.default(l, h, s);
          }),
          (e.prototype.findNextPair = function (t, r, n) {
            var o = this.getDecodeFinderCounters();
            ((o[0] = 0), (o[1] = 0), (o[2] = 0), (o[3] = 0));
            var s = t.getSize(),
              l = 0;
            if (n >= 0) l = n;
            else if (0 === r.length) l = 0;
            else {
              l = r[r.length - 1].getFinderPattern().getStartEnd()[1];
            }
            var u = r.length % 2 != 0;
            this.startFromEven && (u = !u);
            for (var f = !1; l < s && (f = !t.get(l)); ) l++;
            for (var h = 0, _ = l, E = l; E < s; E++)
              if (t.get(E) !== f) o[h]++;
              else {
                if (3 === h) {
                  if ((u && e.reverseCounters(o), e.isFinderPattern(o)))
                    return (
                      (this.startEnd[0] = _),
                      void (this.startEnd[1] = E)
                    );
                  (u && e.reverseCounters(o),
                    (_ += o[0] + o[1]),
                    (o[0] = o[2]),
                    (o[1] = o[3]),
                    (o[2] = 0),
                    (o[3] = 0),
                    h--);
                } else h++;
                ((o[h] = 1), (f = !f));
              }
            throw new i.default();
          }),
          (e.reverseCounters = function (t) {
            for (var e = t.length, r = 0; r < Math.trunc(e / 2); ++r) {
              var n = t[r];
              ((t[r] = t[e - r - 1]), (t[e - r - 1] = n));
            }
          }),
          (e.prototype.parseFoundFinderPattern = function (t, r, n, o) {
            var l = 0,
              u = 0,
              h = 0;
            if (n) {
              for (var _ = this.startEnd[0] - 1; _ >= 0 && !t.get(_); ) _--;
              (_++,
                (l = this.startEnd[0] - _),
                (u = _),
                (h = this.startEnd[1]));
            } else
              ((u = this.startEnd[0]),
                (l =
                  (h = t.getNextUnset(this.startEnd[1] + 1)) -
                  this.startEnd[1]));
            var E = this.getDecodeFinderCounters();
            (s.default.arraycopy(E, 0, E, 1, E.length - 1), (E[0] = l));
            var c = 0;
            try {
              c = this.parseFinderValue(E, e.FINDER_PATTERNS);
            } catch (t) {
              if (t instanceof i.default) return null;
              throw t;
            }
            if (!e.mayFollow(o, c)) return null;
            if (o.length > 0) {
              var d = o[o.length - 1],
                A = d.getFinderPattern().getStartEnd()[0],
                R = d.getFinderPattern().getStartEnd()[1],
                N =
                  ((R - A) / e.FINDER_PATTERN_MODULES) *
                  e.DATA_CHARACTER_MODULES,
                P = R + 2 * N * (1 - e.MAX_FINDER_PATTERN_DISTANCE_VARIANCE),
                v = R + 2 * N * (1 + e.MAX_FINDER_PATTERN_DISTANCE_VARIANCE);
              if (u < P || u > v) return null;
            }
            return new f.default(c, [u, h], u, h, r);
          }),
          (e.prototype.decodeDataCharacter = function (t, r, o, s) {
            for (
              var l = this.getDataCharacterCounters(), f = 0;
              f < l.length;
              f++
            )
              l[f] = 0;
            if (s) e.recordPatternInReverse(t, r.getStartEnd()[0], l);
            else {
              e.recordPattern(t, r.getStartEnd()[1], l);
              for (var _ = 0, E = l.length - 1; _ < E; _++, E--) {
                var c = l[_];
                ((l[_] = l[E]), (l[E] = c));
              }
            }
            var d = n.default.sum(new Int32Array(l)) / 17,
              A = (r.getStartEnd()[1] - r.getStartEnd()[0]) / 15;
            if (Math.abs(d - A) / A > 0.3) throw new i.default();
            var R = this.getOddCounts(),
              N = this.getEvenCounts(),
              P = this.getOddRoundingErrors(),
              v = this.getEvenRoundingErrors();
            for (_ = 0; _ < l.length; _++) {
              var D = (1 * l[_]) / d,
                F = Math.trunc(D + 0.5);
              if (F < 1) {
                if (D < 0.3) throw new i.default();
                F = 1;
              } else if (F > 8) {
                if (D > 8.7) throw new i.default();
                F = 8;
              }
              var T = Math.trunc(_ / 2);
              1 & _
                ? ((N[T] = F), (v[T] = D - F))
                : ((R[T] = F), (P[T] = D - F));
            }
            this.adjustOddEvenCounts(17);
            var I = 4 * r.getValue() + (o ? 0 : 2) + (s ? 0 : 1) - 1,
              w = 0,
              p = 0;
            for (_ = R.length - 1; _ >= 0; _--) {
              if (e.isNotA1left(r, o, s)) {
                var y = e.WEIGHTS[I][2 * _];
                p += R[_] * y;
              }
              w += R[_];
            }
            var S = 0;
            for (_ = N.length - 1; _ >= 0; _--)
              if (e.isNotA1left(r, o, s)) {
                y = e.WEIGHTS[I][2 * _ + 1];
                S += N[_] * y;
              }
            var C = p + S;
            if (1 & w || w > 13 || w < 4) throw new i.default();
            var m = Math.trunc((13 - w) / 2),
              x = e.SYMBOL_WIDEST[m],
              B = 9 - x,
              O = h.default.getRSSvalue(R, x, !0),
              b = h.default.getRSSvalue(N, B, !1),
              k = O * e.EVEN_TOTAL_SUBSET[m] + b + e.GSUM[m];
            return new u.default(k, C);
          }),
          (e.isNotA1left = function (t, e, r) {
            return !(0 === t.getValue() && e && r);
          }),
          (e.prototype.adjustOddEvenCounts = function (t) {
            var r = n.default.sum(new Int32Array(this.getOddCounts())),
              o = n.default.sum(new Int32Array(this.getEvenCounts())),
              s = !1,
              l = !1;
            r > 13 ? (l = !0) : r < 4 && (s = !0);
            var u = !1,
              f = !1;
            o > 13 ? (f = !0) : o < 4 && (u = !0);
            var h = r + o - t,
              _ = !(1 & ~r),
              E = !(1 & o);
            if (1 === h)
              if (_) {
                if (E) throw new i.default();
                l = !0;
              } else {
                if (!E) throw new i.default();
                f = !0;
              }
            else if (-1 === h)
              if (_) {
                if (E) throw new i.default();
                s = !0;
              } else {
                if (!E) throw new i.default();
                u = !0;
              }
            else {
              if (0 !== h) throw new i.default();
              if (_) {
                if (!E) throw new i.default();
                r < o ? ((s = !0), (f = !0)) : ((l = !0), (u = !0));
              } else if (E) throw new i.default();
            }
            if (s) {
              if (l) throw new i.default();
              e.increment(this.getOddCounts(), this.getOddRoundingErrors());
            }
            if (
              (l &&
                e.decrement(this.getOddCounts(), this.getOddRoundingErrors()),
              u)
            ) {
              if (f) throw new i.default();
              e.increment(this.getEvenCounts(), this.getOddRoundingErrors());
            }
            f &&
              e.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
          }),
          (e.SYMBOL_WIDEST = [7, 5, 4, 3, 1]),
          (e.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204]),
          (e.GSUM = [0, 348, 1388, 2948, 3988]),
          (e.FINDER_PATTERNS = [
            Int32Array.from([1, 8, 4, 1]),
            Int32Array.from([3, 6, 4, 1]),
            Int32Array.from([3, 4, 6, 1]),
            Int32Array.from([3, 2, 8, 1]),
            Int32Array.from([2, 6, 5, 1]),
            Int32Array.from([2, 2, 9, 1]),
          ]),
          (e.WEIGHTS = [
            [1, 3, 9, 27, 81, 32, 96, 77],
            [20, 60, 180, 118, 143, 7, 21, 63],
            [189, 145, 13, 39, 117, 140, 209, 205],
            [193, 157, 49, 147, 19, 57, 171, 91],
            [62, 186, 136, 197, 169, 85, 44, 132],
            [185, 133, 188, 142, 4, 12, 36, 108],
            [113, 128, 173, 97, 80, 29, 87, 50],
            [150, 28, 84, 41, 123, 158, 52, 156],
            [46, 138, 203, 187, 139, 206, 196, 166],
            [76, 17, 51, 153, 37, 111, 122, 155],
            [43, 129, 176, 106, 107, 110, 119, 146],
            [16, 48, 144, 10, 30, 90, 59, 177],
            [109, 116, 137, 200, 178, 112, 125, 164],
            [70, 210, 208, 202, 184, 130, 179, 115],
            [134, 191, 151, 31, 93, 68, 204, 190],
            [148, 22, 66, 198, 172, 94, 71, 2],
            [6, 18, 54, 162, 64, 192, 154, 40],
            [120, 149, 25, 75, 14, 42, 126, 167],
            [79, 26, 78, 23, 69, 207, 199, 175],
            [103, 98, 83, 38, 114, 131, 182, 124],
            [161, 61, 183, 127, 170, 88, 53, 159],
            [55, 165, 73, 8, 24, 72, 5, 15],
            [45, 135, 194, 160, 58, 174, 100, 89],
          ]),
          (e.FINDER_PAT_A = 0),
          (e.FINDER_PAT_B = 1),
          (e.FINDER_PAT_C = 2),
          (e.FINDER_PAT_D = 3),
          (e.FINDER_PAT_E = 4),
          (e.FINDER_PAT_F = 5),
          (e.FINDER_PATTERN_SEQUENCES = [
            [e.FINDER_PAT_A, e.FINDER_PAT_A],
            [e.FINDER_PAT_A, e.FINDER_PAT_B, e.FINDER_PAT_B],
            [e.FINDER_PAT_A, e.FINDER_PAT_C, e.FINDER_PAT_B, e.FINDER_PAT_D],
            [
              e.FINDER_PAT_A,
              e.FINDER_PAT_E,
              e.FINDER_PAT_B,
              e.FINDER_PAT_D,
              e.FINDER_PAT_C,
            ],
            [
              e.FINDER_PAT_A,
              e.FINDER_PAT_E,
              e.FINDER_PAT_B,
              e.FINDER_PAT_D,
              e.FINDER_PAT_D,
              e.FINDER_PAT_F,
            ],
            [
              e.FINDER_PAT_A,
              e.FINDER_PAT_E,
              e.FINDER_PAT_B,
              e.FINDER_PAT_D,
              e.FINDER_PAT_E,
              e.FINDER_PAT_F,
              e.FINDER_PAT_F,
            ],
            [
              e.FINDER_PAT_A,
              e.FINDER_PAT_A,
              e.FINDER_PAT_B,
              e.FINDER_PAT_B,
              e.FINDER_PAT_C,
              e.FINDER_PAT_C,
              e.FINDER_PAT_D,
              e.FINDER_PAT_D,
            ],
            [
              e.FINDER_PAT_A,
              e.FINDER_PAT_A,
              e.FINDER_PAT_B,
              e.FINDER_PAT_B,
              e.FINDER_PAT_C,
              e.FINDER_PAT_C,
              e.FINDER_PAT_D,
              e.FINDER_PAT_E,
              e.FINDER_PAT_E,
            ],
            [
              e.FINDER_PAT_A,
              e.FINDER_PAT_A,
              e.FINDER_PAT_B,
              e.FINDER_PAT_B,
              e.FINDER_PAT_C,
              e.FINDER_PAT_C,
              e.FINDER_PAT_D,
              e.FINDER_PAT_E,
              e.FINDER_PAT_F,
              e.FINDER_PAT_F,
            ],
            [
              e.FINDER_PAT_A,
              e.FINDER_PAT_A,
              e.FINDER_PAT_B,
              e.FINDER_PAT_B,
              e.FINDER_PAT_C,
              e.FINDER_PAT_D,
              e.FINDER_PAT_D,
              e.FINDER_PAT_E,
              e.FINDER_PAT_E,
              e.FINDER_PAT_F,
              e.FINDER_PAT_F,
            ],
          ]),
          (e.MAX_PAIRS = 11),
          (e.FINDER_PATTERN_MODULES = 15),
          (e.DATA_CHARACTER_MODULES = 17),
          (e.MAX_FINDER_PATTERN_DISTANCE_VARIANCE = 0.1),
          e
        );
      })(l.default),
      D = v;
  },
  1080,
  [
    1040, 1053, 1032, 1039, 1020, 1081, 1082, 1083, 1084, 1085, 1086, 1106,
    1107,
  ],
);
