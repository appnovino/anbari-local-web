// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1146; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return l;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      u = e(r(d[3])),
      f = e(r(d[4])),
      i = e(r(d[5])),
      l = (function () {
        function e() {}
        return (
          (e.decode = function (o, i, l) {
            var c = new t.default(o),
              h = new f.default(),
              s = [],
              w = i.getVersionNumber(),
              M = i.getModeIndicatorBits();
            try {
              for (;;) {
                var E = void 0;
                if (0 === M) E = e.MODE_NUMERIC;
                else {
                  if (c.available() < M) break;
                  var A = c.readBits(M);
                  E = e.decodeMode(A, w);
                }
                var _ = e.charCountBits(E, w);
                if (c.available() < _) break;
                var p = c.readBits(_);
                if (0 === p) break;
                switch (E) {
                  case e.MODE_NUMERIC:
                    e.decodeNumeric(c, h, p);
                    break;
                  case e.MODE_ALPHA:
                    e.decodeAlphanumeric(c, h, p);
                    break;
                  case e.MODE_BYTE:
                    e.decodeByte(c, h, s, p, l);
                    break;
                  case e.MODE_KANJI:
                    e.decodeKanji(c, h, p);
                    break;
                  default:
                    throw new u.default();
                }
              }
            } catch (e) {
              if (e instanceof u.default) throw e;
              throw new u.default();
            }
            return new n.default(
              o,
              h.toString(),
              0 === s.length ? null : s,
              i.getECLevelLabel(),
              -1,
              -1,
            );
          }),
          (e.decodeMode = function (t, n) {
            switch (n) {
              case 2:
                return 0 === t ? e.MODE_NUMERIC : e.MODE_ALPHA;
              case 3:
                switch (t) {
                  case 0:
                    return e.MODE_NUMERIC;
                  case 1:
                    return e.MODE_ALPHA;
                  case 2:
                    return e.MODE_BYTE;
                  case 3:
                    return e.MODE_KANJI;
                }
                break;
              case 4:
                switch (t) {
                  case 0:
                    return e.MODE_NUMERIC;
                  case 1:
                    return e.MODE_ALPHA;
                  case 2:
                    return e.MODE_BYTE;
                  case 4:
                    return e.MODE_KANJI;
                }
            }
            throw new u.default();
          }),
          (e.charCountBits = function (t, n) {
            switch (t) {
              case e.MODE_NUMERIC:
                return n + 2;
              case e.MODE_ALPHA:
              case e.MODE_BYTE:
                return n + 1;
              case e.MODE_KANJI:
                return n;
              default:
                throw new u.default();
            }
          }),
          (e.decodeNumeric = function (t, n, o) {
            for (var f = o; f >= 3; ) {
              if (t.available() < 10) throw new u.default();
              var i = t.readBits(10);
              if (i >= 1e3) throw new u.default();
              (n.append(e.toChar(Math.floor(i / 100))),
                n.append(e.toChar(Math.floor(i / 10) % 10)),
                n.append(e.toChar(i % 10)),
                (f -= 3));
            }
            if (2 === f) {
              if (t.available() < 7) throw new u.default();
              var l = t.readBits(7);
              if (l >= 100) throw new u.default();
              (n.append(e.toChar(Math.floor(l / 10))),
                n.append(e.toChar(l % 10)));
            } else if (1 === f) {
              if (t.available() < 4) throw new u.default();
              var c = t.readBits(4);
              if (c >= 10) throw new u.default();
              n.append(e.toChar(c));
            }
          }),
          (e.decodeAlphanumeric = function (t, n, o) {
            for (var f = o; f > 1; ) {
              if (t.available() < 11) throw new u.default();
              var i = t.readBits(11);
              (n.append(e.toAlphaNum(Math.floor(i / 45))),
                n.append(e.toAlphaNum(i % 45)),
                (f -= 2));
            }
            if (1 === f) {
              if (t.available() < 6) throw new u.default();
              n.append(e.toAlphaNum(t.readBits(6)));
            }
          }),
          (e.decodeByte = function (e, t, n, f, l) {
            if (8 * f > e.available()) throw new u.default();
            for (var c = new Uint8Array(f), h = 0; h < f; h++)
              c[h] = 255 & e.readBits(8);
            var s = o.default.guessEncoding(c, l);
            try {
              t.append(i.default.decode(c, s));
            } catch (e) {
              throw new u.default();
            }
            n.push(c);
          }),
          (e.decodeKanji = function (e, t, n) {
            if (13 * n > e.available()) throw new u.default();
            for (var f = new Uint8Array(2 * n), l = 0, c = 0; c < n; c++) {
              var h = e.readBits(13),
                s = (Math.floor(h / 192) << 8) | h % 192;
              ((s += s < 7936 ? 33088 : 49472),
                (f[l++] = (s >> 8) & 255),
                (f[l++] = 255 & s));
            }
            try {
              t.append(i.default.decode(f, o.default.SHIFT_JIS));
            } catch (e) {
              throw new u.default();
            }
          }),
          (e.toChar = function (t) {
            if (t >= e.ALPHANUMERIC_CHARS.length) throw new u.default();
            return e.ALPHANUMERIC_CHARS[t];
          }),
          (e.toAlphaNum = function (t) {
            if (t >= e.ALPHANUMERIC_CHARS.length) throw new u.default();
            return e.ALPHANUMERIC_CHARS[t];
          }),
          (e.ALPHANUMERIC_CHARS =
            '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:'),
          (e.MODE_NUMERIC = 0),
          (e.MODE_ALPHA = 1),
          (e.MODE_BYTE = 2),
          (e.MODE_KANJI = 3),
          e
        );
      })();
  },
  1146,
  [1117, 1043, 1026, 1029, 1025, 1030],
);
