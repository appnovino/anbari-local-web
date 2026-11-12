// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1114; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      Object.defineProperty(_e, 'ECBlocks', {
        enumerable: !0,
        get: function () {
          return w;
        },
      }),
      Object.defineProperty(_e, 'ECB', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    var e,
      n = r(d[0]),
      t = (e = n) && e.__esModule ? e : { default: e },
      o =
        (this && this.__values) ||
        function (e) {
          var n = 'function' == typeof Symbol && Symbol.iterator,
            t = n && e[n],
            o = 0;
          if (t) return t.call(e);
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
            n ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      w = (function () {
        function e(e, n, t) {
          ((this.ecCodewords = e),
            (this.ecBlocks = [n]),
            t && this.ecBlocks.push(t));
        }
        return (
          (e.prototype.getECCodewords = function () {
            return this.ecCodewords;
          }),
          (e.prototype.getECBlocks = function () {
            return this.ecBlocks;
          }),
          e
        );
      })(),
      i = (function () {
        function e(e, n) {
          ((this.count = e), (this.dataCodewords = n));
        }
        return (
          (e.prototype.getCount = function () {
            return this.count;
          }),
          (e.prototype.getDataCodewords = function () {
            return this.dataCodewords;
          }),
          e
        );
      })(),
      u = (function () {
        function e(e, n, t, w, i, u) {
          var s, l;
          ((this.versionNumber = e),
            (this.symbolSizeRows = n),
            (this.symbolSizeColumns = t),
            (this.dataRegionSizeRows = w),
            (this.dataRegionSizeColumns = i),
            (this.ecBlocks = u));
          var c = 0,
            f = u.getECCodewords(),
            y = u.getECBlocks();
          try {
            for (var h = o(y), p = h.next(); !p.done; p = h.next()) {
              var b = p.value;
              c += b.getCount() * (b.getDataCodewords() + f);
            }
          } catch (e) {
            s = { error: e };
          } finally {
            try {
              p && !p.done && (l = h.return) && l.call(h);
            } finally {
              if (s) throw s.error;
            }
          }
          this.totalCodewords = c;
        }
        return (
          (e.prototype.getVersionNumber = function () {
            return this.versionNumber;
          }),
          (e.prototype.getSymbolSizeRows = function () {
            return this.symbolSizeRows;
          }),
          (e.prototype.getSymbolSizeColumns = function () {
            return this.symbolSizeColumns;
          }),
          (e.prototype.getDataRegionSizeRows = function () {
            return this.dataRegionSizeRows;
          }),
          (e.prototype.getDataRegionSizeColumns = function () {
            return this.dataRegionSizeColumns;
          }),
          (e.prototype.getTotalCodewords = function () {
            return this.totalCodewords;
          }),
          (e.prototype.getECBlocks = function () {
            return this.ecBlocks;
          }),
          (e.getVersionForDimensions = function (n, w) {
            var i, u;
            if (1 & n || 1 & w) throw new t.default();
            try {
              for (var s = o(e.VERSIONS), l = s.next(); !l.done; l = s.next()) {
                var c = l.value;
                if (c.symbolSizeRows === n && c.symbolSizeColumns === w)
                  return c;
              }
            } catch (e) {
              i = { error: e };
            } finally {
              try {
                l && !l.done && (u = s.return) && u.call(s);
              } finally {
                if (i) throw i.error;
              }
            }
            throw new t.default();
          }),
          (e.prototype.toString = function () {
            return '' + this.versionNumber;
          }),
          (e.buildVersions = function () {
            return [
              new e(1, 10, 10, 8, 8, new w(5, new i(1, 3))),
              new e(2, 12, 12, 10, 10, new w(7, new i(1, 5))),
              new e(3, 14, 14, 12, 12, new w(10, new i(1, 8))),
              new e(4, 16, 16, 14, 14, new w(12, new i(1, 12))),
              new e(5, 18, 18, 16, 16, new w(14, new i(1, 18))),
              new e(6, 20, 20, 18, 18, new w(18, new i(1, 22))),
              new e(7, 22, 22, 20, 20, new w(20, new i(1, 30))),
              new e(8, 24, 24, 22, 22, new w(24, new i(1, 36))),
              new e(9, 26, 26, 24, 24, new w(28, new i(1, 44))),
              new e(10, 32, 32, 14, 14, new w(36, new i(1, 62))),
              new e(11, 36, 36, 16, 16, new w(42, new i(1, 86))),
              new e(12, 40, 40, 18, 18, new w(48, new i(1, 114))),
              new e(13, 44, 44, 20, 20, new w(56, new i(1, 144))),
              new e(14, 48, 48, 22, 22, new w(68, new i(1, 174))),
              new e(15, 52, 52, 24, 24, new w(42, new i(2, 102))),
              new e(16, 64, 64, 14, 14, new w(56, new i(2, 140))),
              new e(17, 72, 72, 16, 16, new w(36, new i(4, 92))),
              new e(18, 80, 80, 18, 18, new w(48, new i(4, 114))),
              new e(19, 88, 88, 20, 20, new w(56, new i(4, 144))),
              new e(20, 96, 96, 22, 22, new w(68, new i(4, 174))),
              new e(21, 104, 104, 24, 24, new w(56, new i(6, 136))),
              new e(22, 120, 120, 18, 18, new w(68, new i(6, 175))),
              new e(23, 132, 132, 20, 20, new w(62, new i(8, 163))),
              new e(
                24,
                144,
                144,
                22,
                22,
                new w(62, new i(8, 156), new i(2, 155)),
              ),
              new e(25, 8, 18, 6, 16, new w(7, new i(1, 5))),
              new e(26, 8, 32, 6, 14, new w(11, new i(1, 10))),
              new e(27, 12, 26, 10, 24, new w(14, new i(1, 16))),
              new e(28, 12, 36, 10, 16, new w(18, new i(1, 22))),
              new e(29, 16, 36, 14, 16, new w(24, new i(1, 32))),
              new e(30, 16, 48, 14, 22, new w(28, new i(1, 49))),
            ];
          }),
          (e.VERSIONS = e.buildVersions()),
          e
        );
      })();
  },
  1114,
  [1029],
);
