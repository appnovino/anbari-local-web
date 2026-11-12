// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1067; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return s;
        },
      }));
    var t,
      o = e(r(_d[0])),
      n = e(r(_d[1])),
      i = e(r(_d[2])),
      f = e(r(_d[3])),
      l = e(r(_d[4])),
      c = e(r(_d[5])),
      u = e(r(_d[6])),
      h =
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
      d =
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
      s = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return (
            (t.decodeRowResult = ''),
            (t.counters = new Int32Array(6)),
            t
          );
        }
        return (
          h(t, e),
          (t.prototype.decodeRow = function (e, n, i) {
            var l,
              h,
              s,
              w,
              C,
              A,
              R = this.findAsteriskPattern(n),
              y = n.getNextSet(R[1]),
              p = n.getSize(),
              v = this.counters;
            (v.fill(0), (this.decodeRowResult = ''));
            do {
              t.recordPattern(n, y, v);
              var S = this.toPattern(v);
              if (S < 0) throw new f.default();
              ((C = this.patternToChar(S)),
                (this.decodeRowResult += C),
                (A = y));
              try {
                for (
                  var _ = ((l = void 0), d(v)), E = _.next();
                  !E.done;
                  E = _.next()
                ) {
                  y += E.value;
                }
              } catch (e) {
                l = { error: e };
              } finally {
                try {
                  E && !E.done && (h = _.return) && h.call(_);
                } finally {
                  if (l) throw l.error;
                }
              }
              y = n.getNextSet(y);
            } while ('*' !== C);
            this.decodeRowResult = this.decodeRowResult.substring(
              0,
              this.decodeRowResult.length - 1,
            );
            var O = 0;
            try {
              for (var T = d(v), N = T.next(); !N.done; N = T.next()) {
                O += N.value;
              }
            } catch (e) {
              s = { error: e };
            } finally {
              try {
                N && !N.done && (w = T.return) && w.call(T);
              } finally {
                if (s) throw s.error;
              }
            }
            if (y === p || !n.get(y)) throw new f.default();
            if (this.decodeRowResult.length < 2) throw new f.default();
            (this.checkChecksums(this.decodeRowResult),
              (this.decodeRowResult = this.decodeRowResult.substring(
                0,
                this.decodeRowResult.length - 2,
              )));
            var b = this.decodeExtended(this.decodeRowResult),
              m = (R[1] + R[0]) / 2,
              P = A + O / 2;
            return new c.default(
              b,
              null,
              0,
              [new u.default(m, e), new u.default(P, e)],
              o.default.CODE_93,
              new Date().getTime(),
            );
          }),
          (t.prototype.findAsteriskPattern = function (e) {
            var o = e.getSize(),
              n = e.getNextSet(0);
            this.counters.fill(0);
            for (
              var i = this.counters, l = n, c = !1, u = i.length, h = 0, d = n;
              d < o;
              d++
            )
              if (e.get(d) !== c) i[h]++;
              else {
                if (h === u - 1) {
                  if (this.toPattern(i) === t.ASTERISK_ENCODING)
                    return new Int32Array([l, d]);
                  ((l += i[0] + i[1]),
                    i.copyWithin(0, 2, 2 + h - 1),
                    (i[h - 1] = 0),
                    (i[h] = 0),
                    h--);
                } else h++;
                ((i[h] = 1), (c = !c));
              }
            throw new f.default();
          }),
          (t.prototype.toPattern = function (e) {
            var t,
              o,
              n = 0;
            try {
              for (var i = d(e), f = i.next(); !f.done; f = i.next()) {
                n += f.value;
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                f && !f.done && (o = i.return) && o.call(i);
              } finally {
                if (t) throw t.error;
              }
            }
            for (var l = 0, c = e.length, u = 0; u < c; u++) {
              var h = Math.round((9 * e[u]) / n);
              if (h < 1 || h > 4) return -1;
              if (1 & u) l <<= h;
              else for (var s = 0; s < h; s++) l = (l << 1) | 1;
            }
            return l;
          }),
          (t.prototype.patternToChar = function (e) {
            for (var o = 0; o < t.CHARACTER_ENCODINGS.length; o++)
              if (t.CHARACTER_ENCODINGS[o] === e)
                return t.ALPHABET_STRING.charAt(o);
            throw new f.default();
          }),
          (t.prototype.decodeExtended = function (e) {
            for (var t = e.length, o = '', n = 0; n < t; n++) {
              var f = e.charAt(n);
              if (f >= 'a' && f <= 'd') {
                if (n >= t - 1) throw new i.default();
                var l = e.charAt(n + 1),
                  c = '\0';
                switch (f) {
                  case 'd':
                    if (!(l >= 'A' && l <= 'Z')) throw new i.default();
                    c = String.fromCharCode(l.charCodeAt(0) + 32);
                    break;
                  case 'a':
                    if (!(l >= 'A' && l <= 'Z')) throw new i.default();
                    c = String.fromCharCode(l.charCodeAt(0) - 64);
                    break;
                  case 'b':
                    if (l >= 'A' && l <= 'E')
                      c = String.fromCharCode(l.charCodeAt(0) - 38);
                    else if (l >= 'F' && l <= 'J')
                      c = String.fromCharCode(l.charCodeAt(0) - 11);
                    else if (l >= 'K' && l <= 'O')
                      c = String.fromCharCode(l.charCodeAt(0) + 16);
                    else if (l >= 'P' && l <= 'T')
                      c = String.fromCharCode(l.charCodeAt(0) + 43);
                    else if ('U' === l) c = '\0';
                    else if ('V' === l) c = '@';
                    else if ('W' === l) c = '`';
                    else {
                      if (!(l >= 'X' && l <= 'Z')) throw new i.default();
                      c = String.fromCharCode(127);
                    }
                    break;
                  case 'c':
                    if (l >= 'A' && l <= 'O')
                      c = String.fromCharCode(l.charCodeAt(0) - 32);
                    else {
                      if ('Z' !== l) throw new i.default();
                      c = ':';
                    }
                }
                ((o += c), n++);
              } else o += f;
            }
            return o;
          }),
          (t.prototype.checkChecksums = function (e) {
            var t = e.length;
            (this.checkOneChecksum(e, t - 2, 20),
              this.checkOneChecksum(e, t - 1, 15));
          }),
          (t.prototype.checkOneChecksum = function (e, o, i) {
            for (var f = 1, l = 0, c = o - 1; c >= 0; c--)
              ((l += f * t.ALPHABET_STRING.indexOf(e.charAt(c))),
                ++f > i && (f = 1));
            if (e.charAt(o) !== t.ALPHABET_STRING[l % 47])
              throw new n.default();
          }),
          (t.ALPHABET_STRING =
            '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*'),
          (t.CHARACTER_ENCODINGS = [
            276, 328, 324, 322, 296, 292, 290, 336, 274, 266, 424, 420, 418,
            404, 402, 394, 360, 356, 354, 308, 282, 344, 332, 326, 300, 278,
            436, 434, 428, 422, 406, 410, 364, 358, 310, 314, 302, 468, 466,
            458, 366, 374, 430, 294, 474, 470, 306, 350,
          ]),
          (t.ASTERISK_ENCODING = t.CHARACTER_ENCODINGS[47]),
          t
        );
      })(l.default);
  },
  1067,
  [1040, 1015, 1029, 1032, 1065, 1039, 1052],
);
