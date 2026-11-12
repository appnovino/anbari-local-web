// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1116; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return S;
        },
      }));
    var t,
      n = e(r(d[0])),
      i = e(r(d[1])),
      o = e(r(d[2])),
      C = e(r(d[3])),
      s = e(r(d[4])),
      f = e(r(d[5])),
      E = e(r(d[6]));
    !(function (e) {
      ((e[(e.PAD_ENCODE = 0)] = 'PAD_ENCODE'),
        (e[(e.ASCII_ENCODE = 1)] = 'ASCII_ENCODE'),
        (e[(e.C40_ENCODE = 2)] = 'C40_ENCODE'),
        (e[(e.TEXT_ENCODE = 3)] = 'TEXT_ENCODE'),
        (e[(e.ANSIX12_ENCODE = 4)] = 'ANSIX12_ENCODE'),
        (e[(e.EDIFACT_ENCODE = 5)] = 'EDIFACT_ENCODE'),
        (e[(e.BASE256_ENCODE = 6)] = 'BASE256_ENCODE'));
    })(t || (t = {}));
    var S = (function () {
      function e() {}
      return (
        (e.decode = function (e) {
          var C = new i.default(e),
            s = new o.default(),
            E = new o.default(),
            S = new Array(),
            l = t.ASCII_ENCODE;
          do {
            if (l === t.ASCII_ENCODE) l = this.decodeAsciiSegment(C, s, E);
            else {
              switch (l) {
                case t.C40_ENCODE:
                  this.decodeC40Segment(C, s);
                  break;
                case t.TEXT_ENCODE:
                  this.decodeTextSegment(C, s);
                  break;
                case t.ANSIX12_ENCODE:
                  this.decodeAnsiX12Segment(C, s);
                  break;
                case t.EDIFACT_ENCODE:
                  this.decodeEdifactSegment(C, s);
                  break;
                case t.BASE256_ENCODE:
                  this.decodeBase256Segment(C, s, S);
                  break;
                default:
                  throw new f.default();
              }
              l = t.ASCII_ENCODE;
            }
          } while (l !== t.PAD_ENCODE && C.available() > 0);
          return (
            E.length() > 0 && s.append(E.toString()),
            new n.default(e, s.toString(), 0 === S.length ? null : S, null)
          );
        }),
        (e.decodeAsciiSegment = function (e, n, i) {
          var o = !1;
          do {
            var C = e.readBits(8);
            if (0 === C) throw new f.default();
            if (C <= 128)
              return (
                o && (C += 128),
                n.append(String.fromCharCode(C - 1)),
                t.ASCII_ENCODE
              );
            if (129 === C) return t.PAD_ENCODE;
            if (C <= 229) {
              var s = C - 130;
              (s < 10 && n.append('0'), n.append('' + s));
            } else
              switch (C) {
                case 230:
                  return t.C40_ENCODE;
                case 231:
                  return t.BASE256_ENCODE;
                case 232:
                  n.append(String.fromCharCode(29));
                  break;
                case 233:
                case 234:
                case 241:
                  break;
                case 235:
                  o = !0;
                  break;
                case 236:
                  (n.append('[)>\x1e05\x1d'), i.insert(0, '\x1e\x04'));
                  break;
                case 237:
                  (n.append('[)>\x1e06\x1d'), i.insert(0, '\x1e\x04'));
                  break;
                case 238:
                  return t.ANSIX12_ENCODE;
                case 239:
                  return t.TEXT_ENCODE;
                case 240:
                  return t.EDIFACT_ENCODE;
                default:
                  if (254 !== C || 0 !== e.available()) throw new f.default();
              }
          } while (e.available() > 0);
          return t.ASCII_ENCODE;
        }),
        (e.decodeC40Segment = function (e, t) {
          var n = !1,
            i = [],
            o = 0;
          do {
            if (8 === e.available()) return;
            var C = e.readBits(8);
            if (254 === C) return;
            this.parseTwoBytes(C, e.readBits(8), i);
            for (var s = 0; s < 3; s++) {
              var E = i[s];
              switch (o) {
                case 0:
                  if (E < 3) o = E + 1;
                  else {
                    if (!(E < this.C40_BASIC_SET_CHARS.length))
                      throw new f.default();
                    var S = this.C40_BASIC_SET_CHARS[E];
                    n
                      ? (t.append(String.fromCharCode(S.charCodeAt(0) + 128)),
                        (n = !1))
                      : t.append(S);
                  }
                  break;
                case 1:
                  (n
                    ? (t.append(String.fromCharCode(E + 128)), (n = !1))
                    : t.append(String.fromCharCode(E)),
                    (o = 0));
                  break;
                case 2:
                  if (E < this.C40_SHIFT2_SET_CHARS.length) {
                    S = this.C40_SHIFT2_SET_CHARS[E];
                    n
                      ? (t.append(String.fromCharCode(S.charCodeAt(0) + 128)),
                        (n = !1))
                      : t.append(S);
                  } else
                    switch (E) {
                      case 27:
                        t.append(String.fromCharCode(29));
                        break;
                      case 30:
                        n = !0;
                        break;
                      default:
                        throw new f.default();
                    }
                  o = 0;
                  break;
                case 3:
                  (n
                    ? (t.append(String.fromCharCode(E + 224)), (n = !1))
                    : t.append(String.fromCharCode(E + 96)),
                    (o = 0));
                  break;
                default:
                  throw new f.default();
              }
            }
          } while (e.available() > 0);
        }),
        (e.decodeTextSegment = function (e, t) {
          var n = !1,
            i = [],
            o = 0;
          do {
            if (8 === e.available()) return;
            var C = e.readBits(8);
            if (254 === C) return;
            this.parseTwoBytes(C, e.readBits(8), i);
            for (var s = 0; s < 3; s++) {
              var E = i[s];
              switch (o) {
                case 0:
                  if (E < 3) o = E + 1;
                  else {
                    if (!(E < this.TEXT_BASIC_SET_CHARS.length))
                      throw new f.default();
                    var S = this.TEXT_BASIC_SET_CHARS[E];
                    n
                      ? (t.append(String.fromCharCode(S.charCodeAt(0) + 128)),
                        (n = !1))
                      : t.append(S);
                  }
                  break;
                case 1:
                  (n
                    ? (t.append(String.fromCharCode(E + 128)), (n = !1))
                    : t.append(String.fromCharCode(E)),
                    (o = 0));
                  break;
                case 2:
                  if (E < this.TEXT_SHIFT2_SET_CHARS.length) {
                    S = this.TEXT_SHIFT2_SET_CHARS[E];
                    n
                      ? (t.append(String.fromCharCode(S.charCodeAt(0) + 128)),
                        (n = !1))
                      : t.append(S);
                  } else
                    switch (E) {
                      case 27:
                        t.append(String.fromCharCode(29));
                        break;
                      case 30:
                        n = !0;
                        break;
                      default:
                        throw new f.default();
                    }
                  o = 0;
                  break;
                case 3:
                  if (!(E < this.TEXT_SHIFT3_SET_CHARS.length))
                    throw new f.default();
                  S = this.TEXT_SHIFT3_SET_CHARS[E];
                  (n
                    ? (t.append(String.fromCharCode(S.charCodeAt(0) + 128)),
                      (n = !1))
                    : t.append(S),
                    (o = 0));
                  break;
                default:
                  throw new f.default();
              }
            }
          } while (e.available() > 0);
        }),
        (e.decodeAnsiX12Segment = function (e, t) {
          var n = [];
          do {
            if (8 === e.available()) return;
            var i = e.readBits(8);
            if (254 === i) return;
            this.parseTwoBytes(i, e.readBits(8), n);
            for (var o = 0; o < 3; o++) {
              var C = n[o];
              switch (C) {
                case 0:
                  t.append('\r');
                  break;
                case 1:
                  t.append('*');
                  break;
                case 2:
                  t.append('>');
                  break;
                case 3:
                  t.append(' ');
                  break;
                default:
                  if (C < 14) t.append(String.fromCharCode(C + 44));
                  else {
                    if (!(C < 40)) throw new f.default();
                    t.append(String.fromCharCode(C + 51));
                  }
              }
            }
          } while (e.available() > 0);
        }),
        (e.parseTwoBytes = function (e, t, n) {
          var i = (e << 8) + t - 1,
            o = Math.floor(i / 1600);
          ((n[0] = o),
            (i -= 1600 * o),
            (o = Math.floor(i / 40)),
            (n[1] = o),
            (n[2] = i - 40 * o));
        }),
        (e.decodeEdifactSegment = function (e, t) {
          do {
            if (e.available() <= 16) return;
            for (var n = 0; n < 4; n++) {
              var i = e.readBits(6);
              if (31 === i) {
                var o = 8 - e.getBitOffset();
                return void (8 !== o && e.readBits(o));
              }
              (32 & i || (i |= 64), t.append(String.fromCharCode(i)));
            }
          } while (e.available() > 0);
        }),
        (e.decodeBase256Segment = function (e, t, n) {
          var i,
            o = 1 + e.getByteOffset(),
            S = this.unrandomize255State(e.readBits(8), o++);
          if (
            (i =
              0 === S
                ? (e.available() / 8) | 0
                : S < 250
                  ? S
                  : 250 * (S - 249) +
                    this.unrandomize255State(e.readBits(8), o++)) < 0
          )
            throw new f.default();
          for (var l = new Uint8Array(i), _ = 0; _ < i; _++) {
            if (e.available() < 8) throw new f.default();
            l[_] = this.unrandomize255State(e.readBits(8), o++);
          }
          n.push(l);
          try {
            t.append(C.default.decode(l, s.default.ISO88591));
          } catch (e) {
            throw new E.default(
              'Platform does not support required encoding: ' + e.message,
            );
          }
        }),
        (e.unrandomize255State = function (e, t) {
          var n = e - (((149 * t) % 255) + 1);
          return n >= 0 ? n : n + 256;
        }),
        (e.C40_BASIC_SET_CHARS = [
          '*',
          '*',
          '*',
          ' ',
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
        ]),
        (e.C40_SHIFT2_SET_CHARS = [
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
        ]),
        (e.TEXT_BASIC_SET_CHARS = [
          '*',
          '*',
          '*',
          ' ',
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          'a',
          'b',
          'c',
          'd',
          'e',
          'f',
          'g',
          'h',
          'i',
          'j',
          'k',
          'l',
          'm',
          'n',
          'o',
          'p',
          'q',
          'r',
          's',
          't',
          'u',
          'v',
          'w',
          'x',
          'y',
          'z',
        ]),
        (e.TEXT_SHIFT2_SET_CHARS = e.C40_SHIFT2_SET_CHARS),
        (e.TEXT_SHIFT3_SET_CHARS = [
          '`',
          'A',
          'B',
          'C',
          'D',
          'E',
          'F',
          'G',
          'H',
          'I',
          'J',
          'K',
          'L',
          'M',
          'N',
          'O',
          'P',
          'Q',
          'R',
          'S',
          'T',
          'U',
          'V',
          'W',
          'X',
          'Y',
          'Z',
          '{',
          '|',
          '}',
          '~',
          String.fromCharCode(127),
        ]),
        e
      );
    })();
  },
  1116,
  [1043, 1117, 1025, 1030, 1026, 1029, 1050],
);
