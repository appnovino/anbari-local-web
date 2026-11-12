// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1166; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i2, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = (function () {
        function t() {
          this.buffer = '';
        }
        return (
          (t.form = function (t, o) {
            var n = -1;
            return t.replace(
              /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g,
              function (t, i, s, f, c, u) {
                if ('%%' === t) return '%';
                if (void 0 !== o[++n]) {
                  t = f ? parseInt(f.substr(1)) : void 0;
                  var p,
                    b = c ? parseInt(c.substr(1)) : void 0;
                  switch (u) {
                    case 's':
                      p = o[n];
                      break;
                    case 'c':
                      p = o[n][0];
                      break;
                    case 'f':
                      p = parseFloat(o[n]).toFixed(t);
                      break;
                    case 'p':
                      p = parseFloat(o[n]).toPrecision(t);
                      break;
                    case 'e':
                      p = parseFloat(o[n]).toExponential(t);
                      break;
                    case 'x':
                      p = parseInt(o[n]).toString(b || 16);
                      break;
                    case 'd':
                      p = parseFloat(
                        parseInt(o[n], b || 10).toPrecision(t),
                      ).toFixed(0);
                  }
                  p =
                    'object' == typeof p ? JSON.stringify(p) : (+p).toString(b);
                  for (
                    var l = parseInt(s), v = s && s[0] + '' == '0' ? '0' : ' ';
                    p.length < l;

                  )
                    p = void 0 !== i ? p + v : v + p;
                  return p;
                }
              },
            );
          }),
          (t.prototype.format = function (o) {
            for (var n = [], i = 1; i < arguments.length; i++)
              n[i - 1] = arguments[i];
            this.buffer += t.form(o, n);
          }),
          (t.prototype.toString = function () {
            return this.buffer;
          }),
          t
        );
      })(),
      o = t;
  },
  1166,
  [],
);
