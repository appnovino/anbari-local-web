// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1131; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return h;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      l = e(r(d[2])),
      u = e(r(d[3])),
      i = e(r(d[4])),
      f = e(r(d[5])),
      o = e(r(d[6])),
      c = e(r(d[7])),
      h = (function () {
        function e() {}
        return (
          (e.decode = function (u, o, h, w) {
            var s = new t.default(u),
              p = new f.default(),
              A = new Array(),
              C = -1,
              v = -1;
            try {
              var B = null,
                N = !1,
                S = void 0;
              do {
                if (s.available() < 4) S = c.default.TERMINATOR;
                else {
                  var b = s.readBits(4);
                  S = c.default.forBits(b);
                }
                switch (S) {
                  case c.default.TERMINATOR:
                    break;
                  case c.default.FNC1_FIRST_POSITION:
                  case c.default.FNC1_SECOND_POSITION:
                    N = !0;
                    break;
                  case c.default.STRUCTURED_APPEND:
                    if (s.available() < 16) throw new i.default();
                    ((C = s.readBits(8)), (v = s.readBits(8)));
                    break;
                  case c.default.ECI:
                    var I = e.parseECIValue(s);
                    if (null === (B = n.default.getCharacterSetECIByValue(I)))
                      throw new i.default();
                    break;
                  case c.default.HANZI:
                    var E = s.readBits(4),
                      R = s.readBits(S.getCharacterCountBits(o));
                    E === e.GB2312_SUBSET && e.decodeHanziSegment(s, p, R);
                    break;
                  default:
                    var _ = s.readBits(S.getCharacterCountBits(o));
                    switch (S) {
                      case c.default.NUMERIC:
                        e.decodeNumericSegment(s, p, _);
                        break;
                      case c.default.ALPHANUMERIC:
                        e.decodeAlphanumericSegment(s, p, _, N);
                        break;
                      case c.default.BYTE:
                        e.decodeByteSegment(s, p, _, B, A, w);
                        break;
                      case c.default.KANJI:
                        e.decodeKanjiSegment(s, p, _);
                        break;
                      default:
                        throw new i.default();
                    }
                }
              } while (S !== c.default.TERMINATOR);
            } catch (e) {
              throw new i.default();
            }
            return new l.default(
              u,
              p.toString(),
              0 === A.length ? null : A,
              null === h ? null : h.toString(),
              C,
              v,
            );
          }),
          (e.decodeHanziSegment = function (e, t, n) {
            if (13 * n > e.available()) throw new i.default();
            for (var l = new Uint8Array(2 * n), f = 0; n > 0; ) {
              var c = e.readBits(13),
                h = (((c / 96) << 8) & 4294967295) | c % 96;
              ((h += h < 959 ? 41377 : 42657),
                (l[f] = (h >> 8) & 255),
                (l[f + 1] = 255 & h),
                (f += 2),
                n--);
            }
            try {
              t.append(o.default.decode(l, u.default.GB2312));
            } catch (e) {
              throw new i.default(e);
            }
          }),
          (e.decodeKanjiSegment = function (e, t, n) {
            if (13 * n > e.available()) throw new i.default();
            for (var l = new Uint8Array(2 * n), f = 0; n > 0; ) {
              var c = e.readBits(13),
                h = (((c / 192) << 8) & 4294967295) | c % 192;
              ((h += h < 7936 ? 33088 : 49472),
                (l[f] = h >> 8),
                (l[f + 1] = h),
                (f += 2),
                n--);
            }
            try {
              t.append(o.default.decode(l, u.default.SHIFT_JIS));
            } catch (e) {
              throw new i.default(e);
            }
          }),
          (e.decodeByteSegment = function (e, t, n, l, f, c) {
            if (8 * n > e.available()) throw new i.default();
            for (var h, w = new Uint8Array(n), s = 0; s < n; s++)
              w[s] = e.readBits(8);
            h = null === l ? u.default.guessEncoding(w, c) : l.getName();
            try {
              t.append(o.default.decode(w, h));
            } catch (e) {
              throw new i.default(e);
            }
            f.push(w);
          }),
          (e.toAlphaNumericChar = function (t) {
            if (t >= e.ALPHANUMERIC_CHARS.length) throw new i.default();
            return e.ALPHANUMERIC_CHARS[t];
          }),
          (e.decodeAlphanumericSegment = function (t, n, l, u) {
            for (var f = n.length(); l > 1; ) {
              if (t.available() < 11) throw new i.default();
              var o = t.readBits(11);
              (n.append(e.toAlphaNumericChar(Math.floor(o / 45))),
                n.append(e.toAlphaNumericChar(o % 45)),
                (l -= 2));
            }
            if (1 === l) {
              if (t.available() < 6) throw new i.default();
              n.append(e.toAlphaNumericChar(t.readBits(6)));
            }
            if (u)
              for (var c = f; c < n.length(); c++)
                '%' === n.charAt(c) &&
                  (c < n.length() - 1 && '%' === n.charAt(c + 1)
                    ? n.deleteCharAt(c + 1)
                    : n.setCharAt(c, String.fromCharCode(29)));
          }),
          (e.decodeNumericSegment = function (t, n, l) {
            for (; l >= 3; ) {
              if (t.available() < 10) throw new i.default();
              var u = t.readBits(10);
              if (u >= 1e3) throw new i.default();
              (n.append(e.toAlphaNumericChar(Math.floor(u / 100))),
                n.append(e.toAlphaNumericChar(Math.floor(u / 10) % 10)),
                n.append(e.toAlphaNumericChar(u % 10)),
                (l -= 3));
            }
            if (2 === l) {
              if (t.available() < 7) throw new i.default();
              var f = t.readBits(7);
              if (f >= 100) throw new i.default();
              (n.append(e.toAlphaNumericChar(Math.floor(f / 10))),
                n.append(e.toAlphaNumericChar(f % 10)));
            } else if (1 === l) {
              if (t.available() < 4) throw new i.default();
              var o = t.readBits(4);
              if (o >= 10) throw new i.default();
              n.append(e.toAlphaNumericChar(o));
            }
          }),
          (e.parseECIValue = function (e) {
            var t = e.readBits(8);
            if (!(128 & t)) return 127 & t;
            if (128 == (192 & t))
              return (((63 & t) << 8) & 4294967295) | e.readBits(8);
            if (192 == (224 & t))
              return (((31 & t) << 16) & 4294967295) | e.readBits(16);
            throw new i.default();
          }),
          (e.ALPHANUMERIC_CHARS =
            '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'),
          (e.GB2312_SUBSET = 1),
          e
        );
      })();
  },
  1131,
  [1117, 1028, 1043, 1026, 1029, 1025, 1030, 1132],
);
