// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1074; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return f;
        },
      }));
    var t = e(r(_d[0])),
      n = e(r(_d[1])),
      o = e(r(_d[2])),
      i = e(r(_d[3])),
      u = e(r(_d[4])),
      d = e(r(_d[5])),
      l =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            o = 0;
          if (n) return n.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && o >= e.length && (e = void 0),
                  { value: e && e[o++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      f = (function () {
        function e() {
          ((this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5]),
            (this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])),
            (this.decodeRowStringBuffer = ''));
        }
        return (
          (e.prototype.decodeRow = function (n, u, d) {
            var l = this.decodeRowStringBuffer,
              f = this.decodeMiddle(u, d, l),
              c = l.toString(),
              s = e.parseExtensionString(c),
              h = [new i.default((d[0] + d[1]) / 2, n), new i.default(f, n)],
              S = new o.default(
                c,
                null,
                0,
                h,
                t.default.UPC_EAN_EXTENSION,
                new Date().getTime(),
              );
            return (null != s && S.putAllMetadata(s), S);
          }),
          (e.prototype.decodeMiddle = function (t, o, i) {
            var u,
              f,
              c = this.decodeMiddleCounters;
            ((c[0] = 0), (c[1] = 0), (c[2] = 0), (c[3] = 0));
            for (
              var s = t.getSize(), h = o[1], S = 0, C = 0;
              C < 5 && h < s;
              C++
            ) {
              var v = n.default.decodeDigit(
                t,
                c,
                h,
                n.default.L_AND_G_PATTERNS,
              );
              i += String.fromCharCode('0'.charCodeAt(0) + (v % 10));
              try {
                for (
                  var w = ((u = void 0), l(c)), p = w.next();
                  !p.done;
                  p = w.next()
                ) {
                  h += p.value;
                }
              } catch (e) {
                u = { error: e };
              } finally {
                try {
                  p && !p.done && (f = w.return) && f.call(w);
                } finally {
                  if (u) throw u.error;
                }
              }
              (v >= 10 && (S |= 1 << (4 - C)),
                4 !== C && ((h = t.getNextSet(h)), (h = t.getNextUnset(h))));
            }
            if (5 !== i.length) throw new d.default();
            var _ = this.determineCheckDigit(S);
            if (e.extensionChecksum(i.toString()) !== _) throw new d.default();
            return h;
          }),
          (e.extensionChecksum = function (e) {
            for (var t = e.length, n = 0, o = t - 2; o >= 0; o -= 2)
              n += e.charAt(o).charCodeAt(0) - '0'.charCodeAt(0);
            n *= 3;
            for (o = t - 1; o >= 0; o -= 2)
              n += e.charAt(o).charCodeAt(0) - '0'.charCodeAt(0);
            return (n *= 3) % 10;
          }),
          (e.prototype.determineCheckDigit = function (e) {
            for (var t = 0; t < 10; t++)
              if (e === this.CHECK_DIGIT_ENCODINGS[t]) return t;
            throw new d.default();
          }),
          (e.parseExtensionString = function (t) {
            if (5 !== t.length) return null;
            var n = e.parseExtension5String(t);
            return null == n ? null : new Map([[u.default.SUGGESTED_PRICE, n]]);
          }),
          (e.parseExtension5String = function (e) {
            var t;
            switch (e.charAt(0)) {
              case '0':
                t = '\xa3';
                break;
              case '5':
                t = '$';
                break;
              case '9':
                switch (e) {
                  case '90000':
                    return null;
                  case '99991':
                    return '0.00';
                  case '99990':
                    return 'Used';
                }
                t = '';
                break;
              default:
                t = '';
            }
            var n = parseInt(e.substring(1)),
              o = n % 100;
            return (
              t + (n / 100).toString() + '.' + (o < 10 ? '0' + o : o.toString())
            );
          }),
          e
        );
      })();
  },
  1074,
  [1040, 1073, 1039, 1052, 1041, 1032],
);
