// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1213; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e2, _d2) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e2, '__esModule', { value: !0 }),
      Object.defineProperty(_e2, 'MinimalEncoder', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var e,
      r,
      i = _r(_d2[0]),
      n = t(_r(_d2[1])),
      s = _r(_d2[2]),
      o = t(_r(_d2[3])),
      h =
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
          function i() {
            this.constructor = t;
          }
          (e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((i.prototype = r.prototype), new i())));
        }),
      u =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            i = 0;
          if (r) return r.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && i >= t.length && (t = void 0),
                  { value: t && t[i++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      c =
        (this && this.__read) ||
        function (t, e) {
          var r = 'function' == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var i,
            n,
            s = r.call(t),
            o = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(i = s.next()).done; )
              o.push(i.value);
          } catch (t) {
            n = { error: t };
          } finally {
            try {
              i && !i.done && (r = s.return) && r.call(s);
            } finally {
              if (n) throw n.error;
            }
          }
          return o;
        },
      d =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || 2 === arguments.length)
            for (var i, n = 0, s = e.length; n < s; n++)
              (!i && n in e) ||
                (i || (i = Array.prototype.slice.call(e, 0, n)), (i[n] = e[n]));
          return t.concat(i || Array.prototype.slice.call(e));
        };
    !(function (t) {
      ((t[(t.ASCII = 0)] = 'ASCII'),
        (t[(t.C40 = 1)] = 'C40'),
        (t[(t.TEXT = 2)] = 'TEXT'),
        (t[(t.X12 = 3)] = 'X12'),
        (t[(t.EDF = 4)] = 'EDF'),
        (t[(t.B256 = 5)] = 'B256'));
    })(r || (r = {}));
    var l = [
        '!',
        '"',
        '#',
        '$',
        '%',
        '&',
        "'",
        '(',
        ')',
        '*',
        '+',
        ',',
        '-',
        '.',
        '/',
        ':',
        ';',
        '<',
        '=',
        '>',
        '?',
        '@',
        '[',
        '\\',
        ']',
        '^',
        '_',
      ],
      f = (function () {
        function t() {}
        return (
          (t.isExtendedASCII = function (t, e) {
            return t !== e && t >= 128 && t <= 255;
          }),
          (t.isInC40Shift1Set = function (t) {
            return t <= 31;
          }),
          (t.isInC40Shift2Set = function (t, e) {
            var r, i;
            try {
              for (var n = u(l), s = n.next(); !s.done; s = n.next()) {
                if (s.value.charCodeAt(0) === t) return !0;
              }
            } catch (t) {
              r = { error: t };
            } finally {
              try {
                s && !s.done && (i = n.return) && i.call(n);
              } finally {
                if (r) throw r.error;
              }
            }
            return t === e;
          }),
          (t.isInTextShift1Set = function (t) {
            return this.isInC40Shift1Set(t);
          }),
          (t.isInTextShift2Set = function (t, e) {
            return this.isInC40Shift2Set(t, e);
          }),
          (t.encodeHighLevel = function (t, e, r, n) {
            (void 0 === e && (e = null),
              void 0 === r && (r = -1),
              void 0 === n && (n = 0));
            var s = 0;
            return (
              t.startsWith(i.MACRO_05_HEADER) && t.endsWith(i.MACRO_TRAILER)
                ? ((s = 5),
                  (t = t.substring(i.MACRO_05_HEADER.length, t.length - 2)))
                : t.startsWith(i.MACRO_06_HEADER) &&
                  t.endsWith(i.MACRO_TRAILER) &&
                  ((s = 6),
                  (t = t.substring(i.MACRO_06_HEADER.length, t.length - 2))),
              decodeURIComponent(
                escape(
                  String.fromCharCode.apply(
                    String,
                    d([], c(this.encode(t, e, r, n, s)), !1),
                  ),
                ),
              )
            );
          }),
          (t.encode = function (t, e, r, i, n) {
            return this.encodeMinimally(new y(t, e, r, i, n)).getBytes();
          }),
          (t.addEdge = function (t, e) {
            var r = e.fromPosition + e.characterLength;
            (null === t[r][e.getEndMode()] ||
              t[r][e.getEndMode()].cachedTotalSize > e.cachedTotalSize) &&
              (t[r][e.getEndMode()] = e);
          }),
          (t.getNumberOfC40Words = function (e, r, i, s) {
            for (var o = 0, h = r; h < e.length(); h++) {
              if (e.isECI(h)) return ((s[0] = 0), 0);
              var u = e.charAt(h);
              if (
                (i && n.default.isNativeC40(u)) ||
                (!i && n.default.isNativeText(u))
              )
                o++;
              else if (t.isExtendedASCII(u, e.getFNC1Character())) {
                var c = 255 & u;
                c >= 128 &&
                ((i && n.default.isNativeC40(c - 128)) ||
                  (!i && n.default.isNativeText(c - 128)))
                  ? (o += 3)
                  : (o += 4);
              } else o += 2;
              if (o % 3 == 0 || ((o - 2) % 3 == 0 && h + 1 === e.length()))
                return ((s[0] = h - r + 1), Math.ceil(o / 3));
            }
            return ((s[0] = 0), 0);
          }),
          (t.addEdges = function (e, i, s, o) {
            var h, c;
            if (e.isECI(s)) this.addEdge(i, new C(e, r.ASCII, s, 1, o));
            else {
              var d,
                l = e.charAt(s);
              if (null === o || o.getEndMode() !== r.EDF) {
                n.default.isDigit(l) &&
                e.haveNCharacters(s, 2) &&
                n.default.isDigit(e.charAt(s + 1))
                  ? this.addEdge(i, new C(e, r.ASCII, s, 2, o))
                  : this.addEdge(i, new C(e, r.ASCII, s, 1, o));
                var f = [r.C40, r.TEXT];
                try {
                  for (var p = u(f), y = p.next(); !y.done; y = p.next()) {
                    var v = y.value,
                      A = [];
                    t.getNumberOfC40Words(e, s, v === r.C40, A) > 0 &&
                      this.addEdge(i, new C(e, v, s, A[0], o));
                  }
                } catch (t) {
                  h = { error: t };
                } finally {
                  try {
                    y && !y.done && (c = p.return) && c.call(p);
                  } finally {
                    if (h) throw h.error;
                  }
                }
                (e.haveNCharacters(s, 3) &&
                  n.default.isNativeX12(e.charAt(s)) &&
                  n.default.isNativeX12(e.charAt(s + 1)) &&
                  n.default.isNativeX12(e.charAt(s + 2)) &&
                  this.addEdge(i, new C(e, r.X12, s, 3, o)),
                  this.addEdge(i, new C(e, r.B256, s, 1, o)));
              }
              for (d = 0; d < 3; d++) {
                var I = s + d;
                if (
                  !e.haveNCharacters(I, 1) ||
                  !n.default.isNativeEDIFACT(e.charAt(I))
                )
                  break;
                this.addEdge(i, new C(e, r.EDF, s, d + 1, o));
              }
              3 === d &&
                e.haveNCharacters(s, 4) &&
                n.default.isNativeEDIFACT(e.charAt(s + 3)) &&
                this.addEdge(i, new C(e, r.EDF, s, 4, o));
            }
          }),
          (t.encodeMinimally = function (t) {
            var e = t.length(),
              r = Array(e + 1)
                .fill(null)
                .map(function () {
                  return Array(6).fill(0);
                });
            this.addEdges(t, r, 0, null);
            for (var i = 1; i <= e; i++) {
              for (var n = 0; n < 6; n++)
                null !== r[i][n] && i < e && this.addEdges(t, r, i, r[i][n]);
              for (n = 0; n < 6; n++) r[i - 1][n] = null;
            }
            var s = -1,
              h = o.default.MAX_VALUE;
            for (n = 0; n < 6; n++)
              if (null !== r[e][n]) {
                var u = r[e][n],
                  c =
                    n >= 1 && n <= 3
                      ? u.cachedTotalSize + 1
                      : u.cachedTotalSize;
                c < h && ((h = c), (s = n));
              }
            if (s < 0) throw new Error('Failed to encode "' + t + '"');
            return new p(r[e][s]);
          }),
          t
        );
      })(),
      p = (function () {
        function t(t) {
          var e = t.input,
            i = 0,
            n = [],
            s = [],
            o = [];
          (t.mode !== r.C40 && t.mode !== r.TEXT && t.mode !== r.X12) ||
            t.getEndMode() === r.ASCII ||
            (i += this.prepend(C.getBytes(254), n));
          for (var h = t; null !== h; )
            ((i += this.prepend(h.getDataBytes(), n)),
              (null !== h.previous &&
                h.getPreviousStartMode() === h.getMode()) ||
                (h.getMode() === r.B256 &&
                  (i <= 249
                    ? (n.unshift(i), i++)
                    : (n.unshift(i % 250), n.unshift(i / 250 + 249), (i += 2)),
                  s.push(n.length),
                  o.push(i)),
                this.prepend(h.getLatchBytes(), n),
                (i = 0)),
              (h = h.previous));
          (5 === e.getMacroId()
            ? (i += this.prepend(C.getBytes(236), n))
            : 6 === e.getMacroId() && (i += this.prepend(C.getBytes(237), n)),
            e.getFNC1Character() > 0 &&
              (i += this.prepend(C.getBytes(232), n)));
          for (var u = 0; u < s.length; u++)
            this.applyRandomPattern(n, n.length - s[u], o[u]);
          var c = t.getMinSymbolSize(n.length);
          for (n.length < c && n.push(129); n.length < c; )
            n.push(this.randomize253State(n.length + 1));
          this.bytes = new Uint8Array(n.length);
          for (u = 0; u < this.bytes.length; u++) this.bytes[u] = n[u];
        }
        return (
          (t.prototype.prepend = function (t, e) {
            for (var r = t.length - 1; r >= 0; r--) e.unshift(t[r]);
            return t.length;
          }),
          (t.prototype.randomize253State = function (t) {
            var e = 129 + (((149 * t) % 253) + 1);
            return e <= 254 ? e : e - 254;
          }),
          (t.prototype.applyRandomPattern = function (t, e, r) {
            for (var i = 0; i < r; i++) {
              var n = e + i,
                s = (255 & t[n]) + (((149 * (n + 1)) % 255) + 1);
              t[n] = s <= 255 ? s : s - 256;
            }
          }),
          (t.prototype.getBytes = function () {
            return this.bytes;
          }),
          t
        );
      })(),
      C = (function () {
        function t(t, e, i, n, s) {
          if (
            ((this.input = t),
            (this.mode = e),
            (this.fromPosition = i),
            (this.characterLength = n),
            (this.previous = s),
            (this.allCodewordCapacities = [
              3, 5, 8, 10, 12, 16, 18, 22, 30, 32, 36, 44, 49, 62, 86, 114, 144,
              174, 204, 280, 368, 456, 576, 696, 816, 1050, 1304, 1558,
            ]),
            (this.squareCodewordCapacities = [
              3, 5, 8, 12, 18, 22, 30, 36, 44, 62, 86, 114, 144, 174, 204, 280,
              368, 456, 576, 696, 816, 1050, 1304, 1558,
            ]),
            (this.rectangularCodewordCapacities = [5, 10, 16, 33, 32, 49]),
            !(i + n <= t.length()))
          )
            throw new Error('Invalid edge');
          var o = null !== s ? s.cachedTotalSize : 0,
            h = this.getPreviousMode();
          switch (e) {
            case r.ASCII:
              (o++,
                (t.isECI(i) ||
                  f.isExtendedASCII(t.charAt(i), t.getFNC1Character())) &&
                  o++,
                (h !== r.C40 && h !== r.TEXT && h !== r.X12) || o++);
              break;
            case r.B256:
              (o++,
                (h !== r.B256 || 250 === this.getB256Size()) && o++,
                h === r.ASCII
                  ? o++
                  : (h !== r.C40 && h !== r.TEXT && h !== r.X12) || (o += 2));
              break;
            case r.C40:
            case r.TEXT:
            case r.X12:
              if (e === r.X12) o += 2;
              else {
                o += 2 * f.getNumberOfC40Words(t, i, e === r.C40, []);
              }
              h === r.ASCII || h === r.B256
                ? o++
                : h === e ||
                  (h !== r.C40 && h !== r.TEXT && h !== r.X12) ||
                  (o += 2);
              break;
            case r.EDF:
              ((o += 3),
                h === r.ASCII || h === r.B256
                  ? o++
                  : (h !== r.C40 && h !== r.TEXT && h !== r.X12) || (o += 2));
          }
          this.cachedTotalSize = o;
        }
        return (
          (t.prototype.getB256Size = function () {
            for (
              var t = 0, e = this;
              null !== e && e.mode === r.B256 && t <= 250;

            )
              (t++, (e = e.previous));
            return t;
          }),
          (t.prototype.getPreviousStartMode = function () {
            return null === this.previous ? r.ASCII : this.previous.mode;
          }),
          (t.prototype.getPreviousMode = function () {
            return null === this.previous
              ? r.ASCII
              : this.previous.getEndMode();
          }),
          (t.prototype.getEndMode = function () {
            if (this.mode === r.EDF) {
              if (this.characterLength < 4) return r.ASCII;
              if (
                (t = this.getLastASCII()) > 0 &&
                this.getCodewordsRemaining(this.cachedTotalSize + t) <= 2 - t
              )
                return r.ASCII;
            }
            if (
              this.mode === r.C40 ||
              this.mode === r.TEXT ||
              this.mode === r.X12
            ) {
              if (
                this.fromPosition + this.characterLength >=
                  this.input.length() &&
                0 === this.getCodewordsRemaining(this.cachedTotalSize)
              )
                return r.ASCII;
              var t;
              if (
                1 === (t = this.getLastASCII()) &&
                0 === this.getCodewordsRemaining(this.cachedTotalSize + 1)
              )
                return r.ASCII;
            }
            return this.mode;
          }),
          (t.prototype.getMode = function () {
            return this.mode;
          }),
          (t.prototype.getLastASCII = function () {
            var t = this.input.length(),
              e = this.fromPosition + this.characterLength;
            return t - e > 4 || e >= t
              ? 0
              : t - e === 1
                ? f.isExtendedASCII(
                    this.input.charAt(e),
                    this.input.getFNC1Character(),
                  )
                  ? 0
                  : 1
                : t - e === 2
                  ? f.isExtendedASCII(
                      this.input.charAt(e),
                      this.input.getFNC1Character(),
                    ) ||
                    f.isExtendedASCII(
                      this.input.charAt(e + 1),
                      this.input.getFNC1Character(),
                    )
                    ? 0
                    : n.default.isDigit(this.input.charAt(e)) &&
                        n.default.isDigit(this.input.charAt(e + 1))
                      ? 1
                      : 2
                  : t - e === 3
                    ? (n.default.isDigit(this.input.charAt(e)) &&
                        n.default.isDigit(this.input.charAt(e + 1)) &&
                        !f.isExtendedASCII(
                          this.input.charAt(e + 2),
                          this.input.getFNC1Character(),
                        )) ||
                      (n.default.isDigit(this.input.charAt(e + 1)) &&
                        n.default.isDigit(this.input.charAt(e + 2)) &&
                        !f.isExtendedASCII(
                          this.input.charAt(e),
                          this.input.getFNC1Character(),
                        ))
                      ? 2
                      : 0
                    : n.default.isDigit(this.input.charAt(e)) &&
                        n.default.isDigit(this.input.charAt(e + 1)) &&
                        n.default.isDigit(this.input.charAt(e + 2)) &&
                        n.default.isDigit(this.input.charAt(e + 3))
                      ? 2
                      : 0;
          }),
          (t.prototype.getMinSymbolSize = function (t) {
            var e, r, i, n, s, o;
            switch (this.input.getShapeHint()) {
              case 1:
                try {
                  for (
                    var h = u(this.squareCodewordCapacities), c = h.next();
                    !c.done;
                    c = h.next()
                  ) {
                    if ((C = c.value) >= t) return C;
                  }
                } catch (t) {
                  e = { error: t };
                } finally {
                  try {
                    c && !c.done && (r = h.return) && r.call(h);
                  } finally {
                    if (e) throw e.error;
                  }
                }
                break;
              case 2:
                try {
                  for (
                    var d = u(this.rectangularCodewordCapacities), l = d.next();
                    !l.done;
                    l = d.next()
                  ) {
                    if ((C = l.value) >= t) return C;
                  }
                } catch (t) {
                  i = { error: t };
                } finally {
                  try {
                    l && !l.done && (n = d.return) && n.call(d);
                  } finally {
                    if (i) throw i.error;
                  }
                }
            }
            try {
              for (
                var f = u(this.allCodewordCapacities), p = f.next();
                !p.done;
                p = f.next()
              ) {
                var C;
                if ((C = p.value) >= t) return C;
              }
            } catch (t) {
              s = { error: t };
            } finally {
              try {
                p && !p.done && (o = f.return) && o.call(f);
              } finally {
                if (s) throw s.error;
              }
            }
            return this.allCodewordCapacities[
              this.allCodewordCapacities.length - 1
            ];
          }),
          (t.prototype.getCodewordsRemaining = function (t) {
            return this.getMinSymbolSize(t) - t;
          }),
          (t.getBytes = function (t, e) {
            var r = new Uint8Array(e ? 2 : 1);
            return ((r[0] = t), e && (r[1] = e), r);
          }),
          (t.prototype.setC40Word = function (t, e, r, i, n) {
            var s = 1600 * (255 & r) + 40 * (255 & i) + (255 & n) + 1;
            ((t[e] = s / 256), (t[e + 1] = s % 256));
          }),
          (t.prototype.getX12Value = function (t) {
            return 13 === t
              ? 0
              : 42 === t
                ? 1
                : 62 === t
                  ? 2
                  : 32 === t
                    ? 3
                    : t >= 48 && t <= 57
                      ? t - 44
                      : t >= 65 && t <= 90
                        ? t - 51
                        : t;
          }),
          (t.prototype.getX12Words = function () {
            if (this.characterLength % 3 != 0)
              throw new Error('X12 words must be a multiple of 3');
            for (
              var t = new Uint8Array((this.characterLength / 3) * 2), e = 0;
              e < t.length;
              e += 2
            )
              this.setC40Word(
                t,
                e,
                this.getX12Value(
                  this.input.charAt(this.fromPosition + (e / 2) * 3),
                ),
                this.getX12Value(
                  this.input.charAt(this.fromPosition + (e / 2) * 3 + 1),
                ),
                this.getX12Value(
                  this.input.charAt(this.fromPosition + (e / 2) * 3 + 2),
                ),
              );
            return t;
          }),
          (t.prototype.getShiftValue = function (t, e, r) {
            return (e && f.isInC40Shift1Set(t)) ||
              (!e && f.isInTextShift1Set(t))
              ? 0
              : (e && f.isInC40Shift2Set(t, r)) ||
                  (!e && f.isInTextShift2Set(t, r))
                ? 1
                : 2;
          }),
          (t.prototype.getC40Value = function (t, e, r, i) {
            if (r === i) {
              if (2 !== e)
                throw new Error('FNC1 cannot be used in C40 shift 2');
              return 27;
            }
            return t
              ? r <= 31
                ? r
                : 32 === r
                  ? 3
                  : r <= 47
                    ? r - 33
                    : r <= 57
                      ? r - 44
                      : r <= 64
                        ? r - 43
                        : r <= 90
                          ? r - 51
                          : r <= 95
                            ? r - 69
                            : r <= 127
                              ? r - 96
                              : r
              : 0 === r
                ? 0
                : 0 === e && r <= 3
                  ? r - 1
                  : 1 === e && r <= 31
                    ? r
                    : 32 === r
                      ? 3
                      : r >= 33 && r <= 47
                        ? r - 33
                        : r >= 48 && r <= 57
                          ? r - 44
                          : r >= 58 && r <= 64
                            ? r - 43
                            : r >= 65 && r <= 90
                              ? r - 64
                              : r >= 91 && r <= 95
                                ? r - 69
                                : 96 === r
                                  ? 0
                                  : r >= 97 && r <= 122
                                    ? r - 83
                                    : r >= 123 && r <= 127
                                      ? r - 96
                                      : r;
          }),
          (t.prototype.getC40Words = function (t, e) {
            for (var r = [], i = 0; i < this.characterLength; i++) {
              var s = this.input.charAt(this.fromPosition + i);
              if (
                (t && n.default.isNativeC40(s)) ||
                (!t && n.default.isNativeText(s))
              )
                r.push(this.getC40Value(t, 0, s, e));
              else if (f.isExtendedASCII(s, e)) {
                var o = (255 & s) - 128;
                if (
                  (t && n.default.isNativeC40(o)) ||
                  (!t && n.default.isNativeText(o))
                )
                  (r.push(1), r.push(30), r.push(this.getC40Value(t, 0, o, e)));
                else {
                  (r.push(1), r.push(30));
                  h = this.getShiftValue(o, t, e);
                  (r.push(h), r.push(this.getC40Value(t, h, o, e)));
                }
              } else {
                var h = this.getShiftValue(s, t, e);
                (r.push(h), r.push(this.getC40Value(t, h, s, e)));
              }
            }
            if (r.length % 3 != 0) {
              if (
                (r.length - 2) % 3 != 0 ||
                this.fromPosition + this.characterLength !== this.input.length()
              )
                throw new Error('C40 words must be a multiple of 3');
              r.push(0);
            }
            var u = new Uint8Array((r.length / 3) * 2),
              c = 0;
            for (i = 0; i < r.length; i += 3)
              (this.setC40Word(
                u,
                c,
                255 & r[i],
                255 & r[i + 1],
                255 & r[i + 2],
              ),
                (c += 2));
            return u;
          }),
          (t.prototype.getEDFBytes = function () {
            for (
              var t = Math.ceil(this.characterLength / 4),
                e = new Uint8Array(3 * t),
                r = this.fromPosition,
                i = Math.min(
                  this.fromPosition + this.characterLength - 1,
                  this.input.length() - 1,
                ),
                n = 0;
              n < t;
              n += 3
            ) {
              for (var s = [], o = 0; o < 4; o++)
                s[o] =
                  r <= i ? 63 & this.input.charAt(r++) : r === i + 1 ? 31 : 0;
              var h = s[0] << 18;
              ((h |= s[1] << 12),
                (h |= s[2] << 6),
                (h |= s[3]),
                (e[n] = (h >> 16) & 255),
                (e[n + 1] = (h >> 8) & 255),
                (e[n + 2] = 255 & h));
            }
            return e;
          }),
          (t.prototype.getLatchBytes = function () {
            switch (this.getPreviousMode()) {
              case r.ASCII:
              case r.B256:
                switch (this.mode) {
                  case r.B256:
                    return t.getBytes(231);
                  case r.C40:
                    return t.getBytes(230);
                  case r.TEXT:
                    return t.getBytes(239);
                  case r.X12:
                    return t.getBytes(238);
                  case r.EDF:
                    return t.getBytes(240);
                }
                break;
              case r.C40:
              case r.TEXT:
              case r.X12:
                if (this.mode !== this.getPreviousMode())
                  switch (this.mode) {
                    case r.ASCII:
                      return t.getBytes(254);
                    case r.B256:
                      return t.getBytes(254, 231);
                    case r.C40:
                      return t.getBytes(254, 230);
                    case r.TEXT:
                      return t.getBytes(254, 239);
                    case r.X12:
                      return t.getBytes(254, 238);
                    case r.EDF:
                      return t.getBytes(254, 240);
                  }
                break;
              case r.EDF:
                if (this.mode !== r.EDF)
                  throw new Error('Cannot switch from EDF to ' + this.mode);
            }
            return new Uint8Array(0);
          }),
          (t.prototype.getDataBytes = function () {
            switch (this.mode) {
              case r.ASCII:
                return this.input.isECI(this.fromPosition)
                  ? t.getBytes(
                      241,
                      this.input.getECIValue(this.fromPosition) + 1,
                    )
                  : f.isExtendedASCII(
                        this.input.charAt(this.fromPosition),
                        this.input.getFNC1Character(),
                      )
                    ? t.getBytes(
                        235,
                        this.input.charAt(this.fromPosition) - 127,
                      )
                    : 2 === this.characterLength
                      ? t.getBytes(
                          10 * this.input.charAt(this.fromPosition) +
                            this.input.charAt(this.fromPosition + 1) +
                            130,
                        )
                      : this.input.isFNC1(this.fromPosition)
                        ? t.getBytes(232)
                        : t.getBytes(this.input.charAt(this.fromPosition) + 1);
              case r.B256:
                return t.getBytes(this.input.charAt(this.fromPosition));
              case r.C40:
                return this.getC40Words(!0, this.input.getFNC1Character());
              case r.TEXT:
                return this.getC40Words(!1, this.input.getFNC1Character());
              case r.X12:
                return this.getX12Words();
              case r.EDF:
                return this.getEDFBytes();
            }
          }),
          t
        );
      })(),
      y = (function (t) {
        function e(e, r, i, n, s) {
          var o = t.call(this, e, r, i) || this;
          return ((o.shape = n), (o.macroId = s), o);
        }
        return (
          h(e, t),
          (e.prototype.getMacroId = function () {
            return this.macroId;
          }),
          (e.prototype.getShapeHint = function () {
            return this.shape;
          }),
          e
        );
      })(s.MinimalECIInput);
  },
  1213,
  [1201, 1202, 1214, 1023],
);
