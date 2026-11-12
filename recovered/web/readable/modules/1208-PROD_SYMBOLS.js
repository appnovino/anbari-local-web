// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1208; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(e, 'PROD_SYMBOLS', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var t,
      n =
        (this && this.__extends) ||
        ((t = function (n, o) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, n) {
                  t.__proto__ = n;
                }) ||
              function (t, n) {
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              }),
            t(n, o)
          );
        }),
        function (n, o) {
          if ('function' != typeof o && null !== o)
            throw new TypeError(
              'Class extends value ' +
                String(o) +
                ' is not a constructor or null',
            );
          function i() {
            this.constructor = n;
          }
          (t(n, o),
            (n.prototype =
              null === o
                ? Object.create(o)
                : ((i.prototype = o.prototype), new i())));
        }),
      o =
        (this && this.__values) ||
        function (t) {
          var n = 'function' == typeof Symbol && Symbol.iterator,
            o = n && t[n],
            i = 0;
          if (o) return o.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && i >= t.length && (t = void 0),
                  { value: t && t[i++], done: !t }
                );
              },
            };
          throw new TypeError(
            n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      i = (function () {
        function t(t, n, o, i, u, s, c, l) {
          (void 0 === c && (c = 0),
            void 0 === l && (l = 0),
            (this.rectangular = t),
            (this.dataCapacity = n),
            (this.errorCodewords = o),
            (this.matrixWidth = i),
            (this.matrixHeight = u),
            (this.dataRegions = s),
            (this.rsBlockData = c),
            (this.rsBlockError = l));
        }
        return (
          (t.lookup = function (t, n, i, u, s) {
            var l, h;
            (void 0 === n && (n = 0),
              void 0 === i && (i = null),
              void 0 === u && (u = null),
              void 0 === s && (s = !0));
            try {
              for (var d = o(c), f = d.next(); !f.done; f = d.next()) {
                var p = f.value;
                if (
                  (1 !== n || !p.rectangular) &&
                  (2 !== n || p.rectangular) &&
                  (null == i ||
                    !(
                      p.getSymbolWidth() < i.getWidth() ||
                      p.getSymbolHeight() < i.getHeight()
                    )) &&
                  (null == u ||
                    !(
                      p.getSymbolWidth() > u.getWidth() ||
                      p.getSymbolHeight() > u.getHeight()
                    )) &&
                  t <= p.dataCapacity
                )
                  return p;
              }
            } catch (t) {
              l = { error: t };
            } finally {
              try {
                f && !f.done && (h = d.return) && h.call(d);
              } finally {
                if (l) throw l.error;
              }
            }
            if (s)
              throw new Error(
                "Can't find a symbol arrangement that matches the message. Data codewords: " +
                  t,
              );
            return null;
          }),
          (t.prototype.getHorizontalDataRegions = function () {
            switch (this.dataRegions) {
              case 1:
                return 1;
              case 2:
              case 4:
                return 2;
              case 16:
                return 4;
              case 36:
                return 6;
              default:
                throw new Error('Cannot handle this number of data regions');
            }
          }),
          (t.prototype.getVerticalDataRegions = function () {
            switch (this.dataRegions) {
              case 1:
              case 2:
                return 1;
              case 4:
                return 2;
              case 16:
                return 4;
              case 36:
                return 6;
              default:
                throw new Error('Cannot handle this number of data regions');
            }
          }),
          (t.prototype.getSymbolDataWidth = function () {
            return this.getHorizontalDataRegions() * this.matrixWidth;
          }),
          (t.prototype.getSymbolDataHeight = function () {
            return this.getVerticalDataRegions() * this.matrixHeight;
          }),
          (t.prototype.getSymbolWidth = function () {
            return (
              this.getSymbolDataWidth() + 2 * this.getHorizontalDataRegions()
            );
          }),
          (t.prototype.getSymbolHeight = function () {
            return (
              this.getSymbolDataHeight() + 2 * this.getVerticalDataRegions()
            );
          }),
          (t.prototype.getCodewordCount = function () {
            return this.dataCapacity + this.errorCodewords;
          }),
          (t.prototype.getInterleavedBlockCount = function () {
            return this.rsBlockData ? this.dataCapacity / this.rsBlockData : 1;
          }),
          (t.prototype.getDataCapacity = function () {
            return this.dataCapacity;
          }),
          (t.prototype.getErrorCodewords = function () {
            return this.errorCodewords;
          }),
          (t.prototype.getDataLengthForInterleavedBlock = function (t) {
            return this.rsBlockData;
          }),
          (t.prototype.getErrorLengthForInterleavedBlock = function (t) {
            return this.rsBlockError;
          }),
          t
        );
      })(),
      u = i,
      s = (function (t) {
        function o() {
          return t.call(this, !1, 1558, 620, 22, 22, 36, -1, 62) || this;
        }
        return (
          n(o, t),
          (o.prototype.getInterleavedBlockCount = function () {
            return 10;
          }),
          (o.prototype.getDataLengthForInterleavedBlock = function (t) {
            return t <= 8 ? 156 : 155;
          }),
          o
        );
      })(i),
      c = [
        new i(!1, 3, 5, 8, 8, 1),
        new i(!1, 5, 7, 10, 10, 1),
        new i(!0, 5, 7, 16, 6, 1),
        new i(!1, 8, 10, 12, 12, 1),
        new i(!0, 10, 11, 14, 6, 2),
        new i(!1, 12, 12, 14, 14, 1),
        new i(!0, 16, 14, 24, 10, 1),
        new i(!1, 18, 14, 16, 16, 1),
        new i(!1, 22, 18, 18, 18, 1),
        new i(!0, 22, 18, 16, 10, 2),
        new i(!1, 30, 20, 20, 20, 1),
        new i(!0, 32, 24, 16, 14, 2),
        new i(!1, 36, 24, 22, 22, 1),
        new i(!1, 44, 28, 24, 24, 1),
        new i(!0, 49, 28, 22, 14, 2),
        new i(!1, 62, 36, 14, 14, 4),
        new i(!1, 86, 42, 16, 16, 4),
        new i(!1, 114, 48, 18, 18, 4),
        new i(!1, 144, 56, 20, 20, 4),
        new i(!1, 174, 68, 22, 22, 4),
        new i(!1, 204, 84, 24, 24, 4, 102, 42),
        new i(!1, 280, 112, 14, 14, 16, 140, 56),
        new i(!1, 368, 144, 16, 16, 16, 92, 36),
        new i(!1, 456, 192, 18, 18, 16, 114, 48),
        new i(!1, 576, 224, 20, 20, 16, 144, 56),
        new i(!1, 696, 272, 22, 22, 16, 174, 68),
        new i(!1, 816, 336, 24, 24, 16, 136, 56),
        new i(!1, 1050, 408, 18, 18, 36, 175, 68),
        new i(!1, 1304, 496, 20, 20, 36, 163, 62),
        new s(),
      ];
  },
  1208,
  [],
);
