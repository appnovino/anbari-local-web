// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1152; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return T;
        },
      }));
    var t = e(r(d[0])),
      S = e(r(d[1])),
      n =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            S = t && e[t],
            n = 0;
          if (S) return S.call(e);
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
      T = (function () {
        function e() {}
        return (
          (e.decode = function (n, T) {
            var o = [];
            switch (T) {
              case 2:
              case 3:
                var s = void 0;
                if (2 === T) {
                  var u = e.getPostCode2(n),
                    i = e.getPostCode2Length(n);
                  if (i > 10) throw S.default.getFormatInstance();
                  s = String(u).padStart(i, '0');
                } else s = e.getPostCode3(n);
                var C = String(e.getCountry(n)).padStart(3, '0'),
                  c = String(e.getServiceClass(n)).padStart(3, '0'),
                  H = e.getMessage(n, 10, 84);
                (o.push(H),
                  o.join('').startsWith('[)>' + e.RS + '01' + e.GS)
                    ? (o.splice(0, o.length),
                      o.push(H.substring(0, 9)),
                      o.push(s + e.GS + C + e.GS + c + e.GS),
                      o.push(H.substring(9)))
                    : (o.splice(0, o.length),
                      o.push(s + e.GS + C + e.GS + c + e.GS),
                      o.push(H)));
                break;
              case 4:
                o.push(e.getMessage(n, 1, 93));
                break;
              case 5:
                o.push(e.getMessage(n, 1, 77));
            }
            return new t.default(n, o.join(''), null, String(T));
          }),
          (e.getBit = function (e, t) {
            return (e--, t[Math.floor(e / 6)] & (1 << (5 - (e % 6))) ? 1 : 0);
          }),
          (e.getInt = function (t, S) {
            for (var n = 0, T = 0; T < S.length; T++)
              n += e.getBit(S[T], t) << (S.length - T - 1);
            return n;
          }),
          (e.getCountry = function (t) {
            return e.getInt(t, e.COUNTRY_BYTES);
          }),
          (e.getServiceClass = function (t) {
            return e.getInt(t, e.SERVICE_CLASS_BYTES);
          }),
          (e.getPostCode2Length = function (t) {
            return e.getInt(t, e.POSTCODE_2_LENGTH_BYTES);
          }),
          (e.getPostCode2 = function (t) {
            return e.getInt(t, e.POSTCODE_2_BYTES);
          }),
          (e.getPostCode3 = function (t) {
            var S,
              T,
              o = [];
            try {
              for (
                var s = n(e.POSTCODE_3_BYTES), u = s.next();
                !u.done;
                u = s.next()
              ) {
                var i = u.value;
                o.push(e.SETS[0].charAt(e.getInt(t, i)));
              }
            } catch (e) {
              S = { error: e };
            } finally {
              try {
                u && !u.done && (T = s.return) && T.call(s);
              } finally {
                if (S) throw S.error;
              }
            }
            return o.join('');
          }),
          (e.getMessage = function (t, S, n) {
            for (var T = [], o = -1, s = 0, u = 0, i = S; i < S + n; i++) {
              var C = e.SETS[s].charAt(t[i]);
              switch (C) {
                case e.LATCHA:
                  ((s = 0), (o = -1));
                  break;
                case e.LATCHB:
                  ((s = 1), (o = -1));
                  break;
                case e.SHIFTA:
                case e.SHIFTB:
                case e.SHIFTC:
                case e.SHIFTD:
                case e.SHIFTE:
                  ((u = s),
                    (s = C.charCodeAt(0) - e.SHIFTA.charCodeAt(0)),
                    (o = 1));
                  break;
                case e.TWOSHIFTA:
                  ((u = s), (s = 0), (o = 2));
                  break;
                case e.THREESHIFTA:
                  ((u = s), (s = 0), (o = 3));
                  break;
                case e.NS:
                  var c =
                    (t[++i] << 24) +
                    (t[++i] << 18) +
                    (t[++i] << 12) +
                    (t[++i] << 6) +
                    t[++i];
                  T.push(String(c).padStart(9, '0'));
                  break;
                case e.LOCK:
                  o = -1;
                  break;
                default:
                  T.push(C);
              }
              0 === o-- && (s = u);
            }
            for (; T.length > 0 && T[T.length - 1] === e.PAD; ) T.pop();
            return T.join('');
          }),
          (e.SHIFTA = '\ufff0'),
          (e.SHIFTB = '\ufff1'),
          (e.SHIFTC = '\ufff2'),
          (e.SHIFTD = '\ufff3'),
          (e.SHIFTE = '\ufff4'),
          (e.TWOSHIFTA = '\ufff5'),
          (e.THREESHIFTA = '\ufff6'),
          (e.LATCHA = '\ufff7'),
          (e.LATCHB = '\ufff8'),
          (e.LOCK = '\ufff9'),
          (e.ECI = '\ufffa'),
          (e.NS = '\ufffb'),
          (e.PAD = '\ufffc'),
          (e.FS = '\x1c'),
          (e.GS = '\x1d'),
          (e.RS = '\x1e'),
          (e.COUNTRY_BYTES = [53, 54, 43, 44, 45, 46, 47, 48, 37, 38]),
          (e.SERVICE_CLASS_BYTES = [55, 56, 57, 58, 59, 60, 49, 50, 51, 52]),
          (e.POSTCODE_2_LENGTH_BYTES = [39, 40, 41, 42, 31, 32]),
          (e.POSTCODE_2_BYTES = [
            33, 34, 35, 36, 25, 26, 27, 28, 29, 30, 19, 20, 21, 22, 23, 24, 13,
            14, 15, 16, 17, 18, 7, 8, 9, 10, 11, 12, 1, 2,
          ]),
          (e.POSTCODE_3_BYTES = [
            [39, 40, 41, 42, 31, 32],
            [33, 34, 35, 36, 25, 26],
            [27, 28, 29, 30, 19, 20],
            [21, 22, 23, 24, 13, 14],
            [15, 16, 17, 18, 7, 8],
            [9, 10, 11, 12, 1, 2],
          ]),
          (e.SETS = [
            '\rABCDEFGHIJKLMNOPQRSTUVWXYZ' +
              e.ECI +
              e.FS +
              e.GS +
              e.RS +
              e.NS +
              ' ' +
              e.PAD +
              '"#$%&\'()*+,-./0123456789:' +
              e.SHIFTB +
              e.SHIFTC +
              e.SHIFTD +
              e.SHIFTE +
              e.LATCHB,
            '`abcdefghijklmnopqrstuvwxyz' +
              e.ECI +
              e.FS +
              e.GS +
              e.RS +
              e.NS +
              '{' +
              e.PAD +
              '}~\x7f;<=>?[\\]^_ ,./:@!|' +
              e.PAD +
              e.TWOSHIFTA +
              e.THREESHIFTA +
              e.PAD +
              e.SHIFTA +
              e.SHIFTC +
              e.SHIFTD +
              e.SHIFTE +
              e.LATCHA,
            '\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda' +
              e.ECI +
              e.FS +
              e.GS +
              e.RS +
              e.NS +
              '\xdb\xdc\xdd\xde\xdf\xaa\xac\xb1\xb2\xb3\xb5\xb9\xba\xbc\xbd\xbe\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89' +
              e.LATCHA +
              ' ' +
              e.LOCK +
              e.SHIFTD +
              e.SHIFTE +
              e.LATCHB,
            '\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa' +
              e.ECI +
              e.FS +
              e.GS +
              e.RS +
              e.NS +
              '\xfb\xfc\xfd\xfe\xff\xa1\xa8\xab\xaf\xb0\xb4\xb7\xb8\xbb\xbf\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94' +
              e.LATCHA +
              ' ' +
              e.SHIFTC +
              e.LOCK +
              e.SHIFTE +
              e.LATCHB,
            '\0\x01\x02\x03\x04\x05\x06\x07\b\t\n\v\f\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a' +
              e.ECI +
              e.PAD +
              e.PAD +
              '\x1b' +
              e.NS +
              e.FS +
              e.GS +
              e.RS +
              '\x1f\x9f\xa0\xa2\xa3\xa4\xa5\xa6\xa7\xa9\xad\xae\xb6\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e' +
              e.LATCHA +
              ' ' +
              e.SHIFTC +
              e.SHIFTD +
              e.LOCK +
              e.LATCHB,
          ]),
          e
        );
      })();
  },
  1152,
  [1043, 1029],
);
