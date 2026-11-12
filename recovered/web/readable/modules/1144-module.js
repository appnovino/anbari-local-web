// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1144; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t = e(_r(d[0])),
      o = e(_r(d[1])),
      r = e(_r(d[2])),
      n = e(_r(d[3])),
      i =
        (this && this.__read) ||
        function (e, t) {
          var o = 'function' == typeof Symbol && e[Symbol.iterator];
          if (!o) return e;
          var r,
            n,
            i = o.call(e),
            u = [];
          try {
            for (; (void 0 === t || t-- > 0) && !(r = i.next()).done; )
              u.push(r.value);
          } catch (e) {
            n = { error: e };
          } finally {
            try {
              r && !r.done && (o = i.return) && o.call(i);
            } finally {
              if (n) throw n.error;
            }
          }
          return u;
        },
      u = (function () {
        function e(e, t, o) {
          ((this.versionNumber = e),
            (this.versionIndicator = t),
            (this.ecBlocks = o));
          var r = o,
            n = r.getECBlocks()[0];
          this.totalCodewords =
            n.getCount() * (n.getDataCodewords() + r.getECCodewordsPerBlock());
        }
        return (
          (e.prototype.getVersionNumber = function () {
            return this.versionNumber;
          }),
          (e.prototype.getVersionIndicator = function () {
            return this.versionIndicator;
          }),
          (e.prototype.getDimensionForVersion = function () {
            return 9 + 2 * this.versionNumber;
          }),
          (e.prototype.getTotalCodewords = function () {
            return this.totalCodewords;
          }),
          (e.prototype.getNumDataCodewords = function () {
            return this.ecBlocks.getECBlocks()[0].getDataCodewords();
          }),
          (e.prototype.getNumECCodewords = function () {
            return this.totalCodewords - this.getNumDataCodewords();
          }),
          (e.prototype.getECBlocks = function () {
            return this.ecBlocks;
          }),
          (e.prototype.getECLevelLabel = function () {
            return e.VERSION_INFO[this.versionIndicator][1];
          }),
          (e.prototype.getModeIndicatorBits = function () {
            return e.MODE_INDICATOR_BITS[this.versionNumber - 1];
          }),
          (e.prototype.buildFunctionPattern = function () {
            var e = this.getDimensionForVersion(),
              o = new t.default(e);
            return (
              o.setRegion(0, 0, 9, 9),
              e > 9 &&
                (o.setRegion(9, 0, e - 9, 1), o.setRegion(0, 9, 1, e - 9)),
              o
            );
          }),
          (e.getVersionForIndicator = function (t) {
            if (t < 0 || t > 7) throw new n.default();
            return new e(i(e.VERSION_INFO[t], 1)[0], t, e.EC_BLOCKS[t]);
          }),
          (e.getVersionForDimension = function (t) {
            switch (t) {
              case 11:
                return e.getVersionForIndicator(0);
              case 13:
                return e.getVersionForIndicator(1);
              case 15:
                return e.getVersionForIndicator(3);
              case 17:
                return e.getVersionForIndicator(5);
              default:
                throw new n.default();
            }
          }),
          (e.prototype.toString = function () {
            return 'M' + this.versionNumber;
          }),
          (e.VERSION_INFO = [
            [1, null],
            [2, 'L'],
            [2, 'M'],
            [3, 'L'],
            [3, 'M'],
            [4, 'L'],
            [4, 'M'],
            [4, 'Q'],
          ]),
          (e.EC_BLOCKS = [
            new o.default(2, new r.default(1, 3)),
            new o.default(5, new r.default(1, 5)),
            new o.default(6, new r.default(1, 4)),
            new o.default(6, new r.default(1, 11)),
            new o.default(8, new r.default(1, 9)),
            new o.default(8, new r.default(1, 16)),
            new o.default(10, new r.default(1, 14)),
            new o.default(14, new r.default(1, 10)),
          ]),
          (e.MODE_INDICATOR_BITS = [0, 1, 2, 3]),
          e
        );
      })();
  },
  1144,
  [1024, 1127, 1128, 1029],
);
