// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1066; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
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
    var t,
      o = e(r(_d[0])),
      n = e(r(_d[1])),
      i = e(r(_d[2])),
      d = e(r(_d[3])),
      f = e(r(_d[4])),
      l = e(r(_d[5])),
      u = e(r(_d[6])),
      c =
        (this && this.__extends) ||
        ((t = function (e, o) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var o in t)
                  Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }),
            t(e, o)
          );
        }),
        function (e, o) {
          if ('function' != typeof o && null !== o)
            throw new TypeError(
              'Class extends value ' +
                String(o) +
                ' is not a constructor or null',
            );
          function n() {
            this.constructor = e;
          }
          (t(e, o),
            (e.prototype =
              null === o
                ? Object.create(o)
                : ((n.prototype = o.prototype), new n())));
        }),
      s =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            o = t && e[t],
            n = 0;
          if (o) return o.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && n >= e.length && (e = void 0),
                  { value: e && e[n++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      h = (function (e) {
        function t(t, o) {
          (void 0 === t && (t = !1), void 0 === o && (o = !1));
          var n = e.call(this) || this;
          return (
            (n.usingCheckDigit = t),
            (n.extendedMode = o),
            (n.decodeRowResult = ''),
            (n.counters = new Int32Array(9)),
            n
          );
        }
        return (
          c(t, e),
          (t.prototype.decodeRow = function (e, i, f) {
            var c,
              h,
              w,
              R,
              C = this.counters;
            (C.fill(0), (this.decodeRowResult = ''));
            var A,
              v,
              y = t.findAsteriskPattern(i, C),
              S = i.getNextSet(y[1]),
              _ = i.getSize();
            do {
              t.recordPattern(i, S, C);
              var p = t.toNarrowWidePattern(C);
              if (p < 0) throw new d.default();
              ((A = t.patternToChar(p)), (this.decodeRowResult += A), (v = S));
              try {
                for (
                  var E = ((c = void 0), s(C)), N = E.next();
                  !N.done;
                  N = E.next()
                ) {
                  S += N.value;
                }
              } catch (e) {
                c = { error: e };
              } finally {
                try {
                  N && !N.done && (h = E.return) && h.call(E);
                } finally {
                  if (c) throw c.error;
                }
              }
              S = i.getNextSet(S);
            } while ('*' !== A);
            this.decodeRowResult = this.decodeRowResult.substring(
              0,
              this.decodeRowResult.length - 1,
            );
            var T,
              O = 0;
            try {
              for (var x = s(C), b = x.next(); !b.done; b = x.next()) {
                O += b.value;
              }
            } catch (e) {
              w = { error: e };
            } finally {
              try {
                b && !b.done && (R = x.return) && R.call(x);
              } finally {
                if (w) throw w.error;
              }
            }
            if (S !== _ && 2 * (S - v - O) < O) throw new d.default();
            if (this.usingCheckDigit) {
              for (
                var P = this.decodeRowResult.length - 1, I = 0, m = 0;
                m < P;
                m++
              )
                I += t.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(m));
              if (
                this.decodeRowResult.charAt(P) !==
                t.ALPHABET_STRING.charAt(I % 43)
              )
                throw new n.default();
              this.decodeRowResult = this.decodeRowResult.substring(0, P);
            }
            if (0 === this.decodeRowResult.length) throw new d.default();
            T = this.extendedMode
              ? t.decodeExtended(this.decodeRowResult)
              : this.decodeRowResult;
            var D = (y[1] + y[0]) / 2,
              G = v + O / 2;
            return new l.default(
              T,
              null,
              0,
              [new u.default(D, e), new u.default(G, e)],
              o.default.CODE_39,
              new Date().getTime(),
            );
          }),
          (t.findAsteriskPattern = function (e, o) {
            for (
              var n = e.getSize(),
                i = e.getNextSet(0),
                f = 0,
                l = i,
                u = !1,
                c = o.length,
                s = i;
              s < n;
              s++
            )
              if (e.get(s) !== u) o[f]++;
              else {
                if (f === c - 1) {
                  if (
                    this.toNarrowWidePattern(o) === t.ASTERISK_ENCODING &&
                    e.isRange(Math.max(0, l - Math.floor((s - l) / 2)), l, !1)
                  )
                    return [l, s];
                  ((l += o[0] + o[1]),
                    o.copyWithin(0, 2, 2 + f - 1),
                    (o[f - 1] = 0),
                    (o[f] = 0),
                    f--);
                } else f++;
                ((o[f] = 1), (u = !u));
              }
            throw new d.default();
          }),
          (t.toNarrowWidePattern = function (e) {
            var t,
              o,
              n,
              i = e.length,
              d = 0;
            do {
              var f = 2147483647;
              try {
                for (
                  var l = ((t = void 0), s(e)), u = l.next();
                  !u.done;
                  u = l.next()
                ) {
                  (R = u.value) < f && R > d && (f = R);
                }
              } catch (e) {
                t = { error: e };
              } finally {
                try {
                  u && !u.done && (o = l.return) && o.call(l);
                } finally {
                  if (t) throw t.error;
                }
              }
              ((d = f), (n = 0));
              for (var c = 0, h = 0, w = 0; w < i; w++) {
                (R = e[w]) > d && ((h |= 1 << (i - 1 - w)), n++, (c += R));
              }
              if (3 === n) {
                for (w = 0; w < i && n > 0; w++) {
                  var R;
                  if ((R = e[w]) > d && (n--, 2 * R >= c)) return -1;
                }
                return h;
              }
            } while (n > 3);
            return -1;
          }),
          (t.patternToChar = function (e) {
            for (var o = 0; o < t.CHARACTER_ENCODINGS.length; o++)
              if (t.CHARACTER_ENCODINGS[o] === e)
                return t.ALPHABET_STRING.charAt(o);
            if (e === t.ASTERISK_ENCODING) return '*';
            throw new d.default();
          }),
          (t.decodeExtended = function (e) {
            for (var t = e.length, o = '', n = 0; n < t; n++) {
              var d = e.charAt(n);
              if ('+' === d || '$' === d || '%' === d || '/' === d) {
                var f = e.charAt(n + 1),
                  l = '\0';
                switch (d) {
                  case '+':
                    if (!(f >= 'A' && f <= 'Z')) throw new i.default();
                    l = String.fromCharCode(f.charCodeAt(0) + 32);
                    break;
                  case '$':
                    if (!(f >= 'A' && f <= 'Z')) throw new i.default();
                    l = String.fromCharCode(f.charCodeAt(0) - 64);
                    break;
                  case '%':
                    if (f >= 'A' && f <= 'E')
                      l = String.fromCharCode(f.charCodeAt(0) - 38);
                    else if (f >= 'F' && f <= 'J')
                      l = String.fromCharCode(f.charCodeAt(0) - 11);
                    else if (f >= 'K' && f <= 'O')
                      l = String.fromCharCode(f.charCodeAt(0) + 16);
                    else if (f >= 'P' && f <= 'T')
                      l = String.fromCharCode(f.charCodeAt(0) + 43);
                    else if ('U' === f) l = '\0';
                    else if ('V' === f) l = '@';
                    else if ('W' === f) l = '`';
                    else {
                      if ('X' !== f && 'Y' !== f && 'Z' !== f)
                        throw new i.default();
                      l = '\x7f';
                    }
                    break;
                  case '/':
                    if (f >= 'A' && f <= 'O')
                      l = String.fromCharCode(f.charCodeAt(0) - 32);
                    else {
                      if ('Z' !== f) throw new i.default();
                      l = ':';
                    }
                }
                ((o += l), n++);
              } else o += d;
            }
            return o;
          }),
          (t.ALPHABET_STRING = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%'),
          (t.CHARACTER_ENCODINGS = [
            52, 289, 97, 352, 49, 304, 112, 37, 292, 100, 265, 73, 328, 25, 280,
            88, 13, 268, 76, 28, 259, 67, 322, 19, 274, 82, 7, 262, 70, 22, 385,
            193, 448, 145, 400, 208, 133, 388, 196, 168, 162, 138, 42,
          ]),
          (t.ASTERISK_ENCODING = 148),
          t
        );
      })(f.default);
  },
  1066,
  [1040, 1015, 1029, 1032, 1065, 1039, 1052],
);
