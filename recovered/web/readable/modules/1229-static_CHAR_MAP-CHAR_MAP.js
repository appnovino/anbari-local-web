// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1229; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.static_CHAR_MAP = f),
      Object.defineProperty(_e, 'CHAR_MAP', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (u) {
              var d = Object.getOwnPropertyDescriptor(e, u);
              Object.defineProperty(
                t,
                u,
                d.get
                  ? d
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[u];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[0])),
      u = e(r(_d[1])),
      d = e(r(_d[2]));
    function f(e) {
      var u = d.default.getCharCode(' '),
        f = d.default.getCharCode('.'),
        o = d.default.getCharCode(',');
      e[t.MODE_UPPER][u] = 1;
      for (
        var n = d.default.getCharCode('Z'),
          C = d.default.getCharCode('A'),
          l = C;
        l <= n;
        l++
      )
        e[t.MODE_UPPER][l] = l - C + 2;
      e[t.MODE_LOWER][u] = 1;
      var _ = d.default.getCharCode('z'),
        O = d.default.getCharCode('a');
      for (l = O; l <= _; l++) e[t.MODE_LOWER][l] = l - O + 2;
      e[t.MODE_DIGIT][u] = 1;
      var c = d.default.getCharCode('9'),
        D = d.default.getCharCode('0');
      for (l = D; l <= c; l++) e[t.MODE_DIGIT][l] = l - D + 2;
      ((e[t.MODE_DIGIT][o] = 12), (e[t.MODE_DIGIT][f] = 13));
      for (
        var E = [
            '\0',
            ' ',
            '\x01',
            '\x02',
            '\x03',
            '\x04',
            '\x05',
            '\x06',
            '\x07',
            '\b',
            '\t',
            '\n',
            '\v',
            '\f',
            '\r',
            '\x1b',
            '\x1c',
            '\x1d',
            '\x1e',
            '\x1f',
            '@',
            '\\',
            '^',
            '_',
            '`',
            '|',
            '~',
            '\x7f',
          ],
          M = 0;
        M < E.length;
        M++
      )
        e[t.MODE_MIXED][d.default.getCharCode(E[M])] = M;
      var h = [
        '\0',
        '\r',
        '\0',
        '\0',
        '\0',
        '\0',
        '!',
        "'",
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
        '[',
        ']',
        '{',
        '}',
      ];
      for (M = 0; M < h.length; M++)
        d.default.getCharCode(h[M]) > 0 &&
          (e[t.MODE_PUNCT][d.default.getCharCode(h[M])] = M);
      return e;
    }
    var o = f(u.default.createInt32Array(5, 256));
  },
  1229,
  [1226, 1019, 1026],
);
