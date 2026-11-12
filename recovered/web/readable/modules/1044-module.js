// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1044; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, _a, m, _e, _d) {
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
      i = t(r(_d[2])),
      u = t(r(_d[3])),
      a = t(r(_d[4])),
      s =
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
        function e(e, o, i) {
          var u = t.call(this) || this;
          ((u.primitive = e), (u.size = o), (u.generatorBase = i));
          for (var a = new Int32Array(o), s = 1, f = 0; f < o; f++)
            ((a[f] = s), (s *= 2) >= o && ((s ^= e), (s &= o - 1)));
          u.expTable = a;
          var l = new Int32Array(o);
          for (f = 0; f < o - 1; f++) l[a[f]] = f;
          return (
            (u.logTable = l),
            (u.zero = new n.default(u, Int32Array.from([0]))),
            (u.one = new n.default(u, Int32Array.from([1]))),
            u
          );
        }
        return (
          s(e, t),
          (e.prototype.getZero = function () {
            return this.zero;
          }),
          (e.prototype.getOne = function () {
            return this.one;
          }),
          (e.prototype.buildMonomial = function (t, e) {
            if (t < 0) throw new u.default();
            if (0 === e) return this.zero;
            var o = new Int32Array(t + 1);
            return ((o[0] = e), new n.default(this, o));
          }),
          (e.prototype.inverse = function (t) {
            if (0 === t) throw new a.default();
            return this.expTable[this.size - this.logTable[t] - 1];
          }),
          (e.prototype.multiply = function (t, e) {
            return 0 === t || 0 === e
              ? 0
              : this.expTable[
                  (this.logTable[t] + this.logTable[e]) % (this.size - 1)
                ];
          }),
          (e.prototype.getSize = function () {
            return this.size;
          }),
          (e.prototype.getGeneratorBase = function () {
            return this.generatorBase;
          }),
          (e.prototype.toString = function () {
            return (
              'GF(0x' +
              i.default.toHexString(this.primitive) +
              ',' +
              this.size +
              ')'
            );
          }),
          (e.prototype.equals = function (t) {
            return t === this;
          }),
          (e.AZTEC_DATA_12 = new e(4201, 4096, 1)),
          (e.AZTEC_DATA_10 = new e(1033, 1024, 1)),
          (e.AZTEC_DATA_6 = new e(67, 64, 1)),
          (e.AZTEC_PARAM = new e(19, 16, 1)),
          (e.QR_CODE_FIELD_256 = new e(285, 256, 0)),
          (e.DATA_MATRIX_FIELD_256 = new e(301, 256, 1)),
          (e.AZTEC_DATA_8 = e.DATA_MATRIX_FIELD_256),
          (e.MAXICODE_FIELD_64 = e.AZTEC_DATA_6),
          e
        );
      })(o.default);
  },
  1044,
  [1045, 1046, 1023, 1014, 1047],
);
