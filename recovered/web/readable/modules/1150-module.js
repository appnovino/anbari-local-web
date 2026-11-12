// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1150; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return i;
        },
      }));
    var t = e(r(d[0])),
      o = e(r(d[1])),
      c = e(r(d[2])),
      n = e(r(d[3])),
      s = e(r(d[4])),
      f = e(r(d[5])),
      u = e(r(d[6])),
      i = (function () {
        function e() {
          this.rsDecoder = new o.default(t.default.MAXICODE_FIELD_64);
        }
        return (
          (e.prototype.decode = function (t, o) {
            var c,
              n = new f.default(t).readCodewords(),
              i = this.correctErrors(n, 0, 10, 10, e.ALL),
              h = 15 & n[0];
            switch (h) {
              case 2:
              case 3:
              case 4:
                ((i += this.correctErrors(n, 20, 84, 40, e.EVEN)),
                  (i += this.correctErrors(n, 20, 84, 40, e.ODD)),
                  (c = new Uint8Array(94)));
                break;
              case 5:
                ((i += this.correctErrors(n, 20, 68, 56, e.EVEN)),
                  (i += this.correctErrors(n, 20, 68, 56, e.ODD)),
                  (c = new Uint8Array(78)));
                break;
              default:
                throw s.default.getFormatInstance();
            }
            for (var l = 0; l < 10; l++) c[l] = n[l];
            for (l = 0; l < c.length - 10; l++) c[l + 10] = n[l + 20];
            var E = u.default.decode(c, h);
            return (E.setErrorsCorrected(i), E);
          }),
          (e.prototype.correctErrors = function (t, o, s, f, u) {
            for (
              var i = s + f,
                h = u === e.ALL ? 1 : 2,
                l = new Int32Array(Math.floor(i / h)),
                E = 0;
              E < i;
              E++
            )
              (u !== e.ALL && E % 2 != u - 1) ||
                (l[Math.floor(E / h)] = 255 & t[E + o]);
            var L = 0;
            try {
              L = this.rsDecoder.decodeWithECCount(l, Math.floor(f / h));
            } catch (e) {
              if (e instanceof c.default) throw n.default.getChecksumInstance();
              throw e;
            }
            for (E = 0; E < s; E++)
              (u !== e.ALL && E % 2 != u - 1) ||
                (t[E + o] = l[Math.floor(E / h)]);
            return L;
          }),
          (e.ALL = 0),
          (e.EVEN = 1),
          (e.ODD = 2),
          e
        );
      })();
  },
  1150,
  [1044, 1048, 1049, 1015, 1029, 1151, 1152],
);
