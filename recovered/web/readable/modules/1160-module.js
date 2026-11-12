// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1160; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var e,
      n = t(r(_d[0])),
      o = t(r(_d[1])),
      u = t(r(_d[2])),
      i = t(r(_d[3])),
      l =
        (this && this.__extends) ||
        ((e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              }),
            e(t, n)
          );
        }),
        function (t, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function o() {
            this.constructor = t;
          }
          (e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o())));
        }),
      f = (function (t) {
        function e(e, n) {
          var u = t.call(this) || this;
          ((u.modulus = e),
            (u.expTable = new Int32Array(e)),
            (u.logTable = new Int32Array(e)));
          for (var i = 1, l = 0; l < e; l++)
            ((u.expTable[l] = i), (i = (i * n) % e));
          for (l = 0; l < e - 1; l++) u.logTable[u.expTable[l]] = l;
          return (
            (u.zero = new o.default(u, new Int32Array([0]))),
            (u.one = new o.default(u, new Int32Array([1]))),
            u
          );
        }
        return (
          l(e, t),
          (e.prototype.getZero = function () {
            return this.zero;
          }),
          (e.prototype.getOne = function () {
            return this.one;
          }),
          (e.prototype.buildMonomial = function (t, e) {
            if (t < 0) throw new u.default();
            if (0 === e) return this.zero;
            var n = new Int32Array(t + 1);
            return ((n[0] = e), new o.default(this, n));
          }),
          (e.PDF417_GF = new e(n.default.NUMBER_OF_CODEWORDS, 3)),
          e
        );
      })(i.default);
  },
  1160,
  [1154, 1159, 1014, 1161],
);
