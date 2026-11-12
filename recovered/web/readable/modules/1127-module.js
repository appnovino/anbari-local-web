// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1127; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i2, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var t =
        (this && this.__values) ||
        function (t) {
          var o = 'function' == typeof Symbol && Symbol.iterator,
            n = o && t[o],
            c = 0;
          if (n) return n.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && c >= t.length && (t = void 0),
                  { value: t && t[c++], done: !t }
                );
              },
            };
          throw new TypeError(
            o ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      o = (function () {
        function o(t) {
          for (var o = [], n = 1; n < arguments.length; n++)
            o[n - 1] = arguments[n];
          ((this.ecCodewordsPerBlock = t), (this.ecBlocks = o));
        }
        return (
          (o.prototype.getECCodewordsPerBlock = function () {
            return this.ecCodewordsPerBlock;
          }),
          (o.prototype.getNumBlocks = function () {
            var o,
              n,
              c = 0,
              i = this.ecBlocks;
            try {
              for (var l = t(i), u = l.next(); !u.done; u = l.next()) {
                c += u.value.getCount();
              }
            } catch (t) {
              o = { error: t };
            } finally {
              try {
                u && !u.done && (n = l.return) && n.call(l);
              } finally {
                if (o) throw o.error;
              }
            }
            return c;
          }),
          (o.prototype.getTotalECCodewords = function () {
            return this.ecCodewordsPerBlock * this.getNumBlocks();
          }),
          (o.prototype.getECBlocks = function () {
            return this.ecBlocks;
          }),
          o
        );
      })(),
      n = o;
  },
  1127,
  [],
);
