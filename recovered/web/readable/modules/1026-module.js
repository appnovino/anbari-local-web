// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1026; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i2, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      u = (function () {
        function e() {}
        return (
          (e.castAsNonUtf8Char = function (e, t) {
            void 0 === t && (t = null);
            var n = t ? t.getName() : this.ISO88591;
            return o.default.decode(new Uint8Array([e]), n);
          }),
          (e.guessEncoding = function (n, o) {
            if (null != o && void 0 !== o.get(t.default.CHARACTER_SET))
              return o.get(t.default.CHARACTER_SET).toString();
            for (
              var u = n.length,
                i = !0,
                f = !0,
                s = !0,
                c = 0,
                S = 0,
                l = 0,
                I = 0,
                _ = 0,
                F = 0,
                T = 0,
                p = 0,
                v = 0,
                C = 0,
                A = 0,
                E =
                  n.length > 3 && 239 === n[0] && 187 === n[1] && 191 === n[2],
                U = 0;
              U < u && (i || f || s);
              U++
            ) {
              var b = 255 & n[U];
              (s &&
                (c > 0
                  ? 128 & b
                    ? c--
                    : (s = !1)
                  : 128 & b &&
                    (64 & b
                      ? (c++,
                        32 & b
                          ? (c++, 16 & b ? (c++, 8 & b ? (s = !1) : I++) : l++)
                          : S++)
                      : (s = !1))),
                i &&
                  (b > 127 && b < 160
                    ? (i = !1)
                    : b > 159 && (b < 192 || 215 === b || 247 === b) && A++),
                f &&
                  (_ > 0
                    ? b < 64 || 127 === b || b > 252
                      ? (f = !1)
                      : _--
                    : 128 === b || 160 === b || b > 239
                      ? (f = !1)
                      : b > 160 && b < 224
                        ? (F++, (p = 0), ++T > v && (v = T))
                        : b > 127
                          ? (_++, (T = 0), ++p > C && (C = p))
                          : ((T = 0), (p = 0))));
            }
            return (
              s && c > 0 && (s = !1),
              f && _ > 0 && (f = !1),
              s && (E || S + l + I > 0)
                ? e.UTF8
                : f && (e.ASSUME_SHIFT_JIS || v >= 3 || C >= 3)
                  ? e.SHIFT_JIS
                  : i && f
                    ? (2 === v && 2 === F) || 10 * A >= u
                      ? e.SHIFT_JIS
                      : e.ISO88591
                    : i
                      ? e.ISO88591
                      : f
                        ? e.SHIFT_JIS
                        : s
                          ? e.UTF8
                          : e.PLATFORM_DEFAULT_ENCODING
            );
          }),
          (e.format = function (e) {
            for (var t = [], n = 1; n < arguments.length; n++)
              t[n - 1] = arguments[n];
            var o = -1;
            return e.replace(
              /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g,
              function (e, n, u, i, f, s) {
                if ('%%' === e) return '%';
                if (void 0 !== t[++o]) {
                  e = i ? parseInt(i.substr(1)) : void 0;
                  var c,
                    S = f ? parseInt(f.substr(1)) : void 0;
                  switch (s) {
                    case 's':
                      c = t[o];
                      break;
                    case 'c':
                      c = t[o][0];
                      break;
                    case 'f':
                      c = parseFloat(t[o]).toFixed(e);
                      break;
                    case 'p':
                      c = parseFloat(t[o]).toPrecision(e);
                      break;
                    case 'e':
                      c = parseFloat(t[o]).toExponential(e);
                      break;
                    case 'x':
                      c = parseInt(t[o]).toString(S || 16);
                      break;
                    case 'd':
                      c = parseFloat(
                        parseInt(t[o], S || 10).toPrecision(e),
                      ).toFixed(0);
                  }
                  c =
                    'object' == typeof c ? JSON.stringify(c) : (+c).toString(S);
                  for (
                    var l = parseInt(u), I = u && u[0] + '' == '0' ? '0' : ' ';
                    c.length < l;

                  )
                    c = void 0 !== n ? c + I : I + c;
                  return c;
                }
              },
            );
          }),
          (e.getBytes = function (e, t) {
            return o.default.encode(e, t);
          }),
          (e.getCharCode = function (e, t) {
            return (void 0 === t && (t = 0), e.charCodeAt(t));
          }),
          (e.getCharAt = function (e) {
            return String.fromCharCode(e);
          }),
          (e.SHIFT_JIS = n.default.SJIS.getName()),
          (e.GB2312 = 'GB2312'),
          (e.ISO88591 = n.default.ISO8859_1.getName()),
          (e.EUC_JP = 'EUC_JP'),
          (e.UTF8 = n.default.UTF8.getName()),
          (e.PLATFORM_DEFAULT_ENCODING = e.UTF8),
          (e.ASSUME_SHIFT_JIS = !1),
          e
        );
      })(),
      i = u;
  },
  1026,
  [1027, 1028, 1030],
);
