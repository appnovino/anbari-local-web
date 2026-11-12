// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1075; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return c;
        },
      }));
    var t = e(r(d[0])),
      n = e(r(d[1])),
      o = e(r(d[2])),
      i = e(r(d[3])),
      u = e(r(d[4])),
      l = e(r(d[5])),
      f =
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
      c = (function () {
        function e() {
          ((this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])),
            (this.decodeRowStringBuffer = ''));
        }
        return (
          (e.prototype.decodeRow = function (n, u, l) {
            var f = this.decodeRowStringBuffer,
              c = this.decodeMiddle(u, l, f),
              s = f.toString(),
              h = e.parseExtensionString(s),
              S = [new i.default((l[0] + l[1]) / 2, n), new i.default(c, n)],
              p = new o.default(
                s,
                null,
                0,
                S,
                t.default.UPC_EAN_EXTENSION,
                new Date().getTime(),
              );
            return (null != h && p.putAllMetadata(h), p);
          }),
          (e.prototype.decodeMiddle = function (e, t, o) {
            var i,
              u,
              c = this.decodeMiddleCounters;
            ((c[0] = 0), (c[1] = 0), (c[2] = 0), (c[3] = 0));
            for (
              var s = e.getSize(), h = t[1], S = 0, p = 0;
              p < 2 && h < s;
              p++
            ) {
              var w = n.default.decodeDigit(
                e,
                c,
                h,
                n.default.L_AND_G_PATTERNS,
              );
              o += String.fromCharCode('0'.charCodeAt(0) + (w % 10));
              try {
                for (
                  var y = ((i = void 0), f(c)), _ = y.next();
                  !_.done;
                  _ = y.next()
                ) {
                  h += _.value;
                }
              } catch (e) {
                i = { error: e };
              } finally {
                try {
                  _ && !_.done && (u = y.return) && u.call(y);
                } finally {
                  if (i) throw i.error;
                }
              }
              (w >= 10 && (S |= 1 << (1 - p)),
                1 !== p && ((h = e.getNextSet(h)), (h = e.getNextUnset(h))));
            }
            if (2 !== o.length) throw new l.default();
            if (parseInt(o.toString()) % 4 !== S) throw new l.default();
            return h;
          }),
          (e.parseExtensionString = function (e) {
            return 2 !== e.length
              ? null
              : new Map([[u.default.ISSUE_NUMBER, parseInt(e)]]);
          }),
          e
        );
      })();
  },
  1075,
  [1040, 1073, 1039, 1052, 1041, 1032],
);
