// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1221; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    function n(t) {
      if (t && t.__esModule) return t;
      var n = {};
      return (
        t &&
          Object.keys(t).forEach(function (e) {
            var i = Object.getOwnPropertyDescriptor(t, e);
            Object.defineProperty(
              n,
              e,
              i.get
                ? i
                : {
                    enumerable: !0,
                    get: function () {
                      return t[e];
                    },
                  },
            );
          }),
        (n.default = t),
        n
      );
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var e = t(r(_d[0])),
      i = n(r(_d[1])),
      o = n(r(_d[2])),
      u = n(r(_d[3])),
      h = n(r(_d[4])),
      f = t(r(_d[5])),
      y =
        (this && this.__values) ||
        function (t) {
          var n = 'function' == typeof Symbol && Symbol.iterator,
            e = n && t[n],
            i = 0;
          if (e) return e.call(t);
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
      s = (function () {
        function t(t, n, e, i) {
          ((this.token = t),
            (this.mode = n),
            (this.binaryShiftByteCount = e),
            (this.bitCount = i));
        }
        return (
          (t.prototype.getMode = function () {
            return this.mode;
          }),
          (t.prototype.getToken = function () {
            return this.token;
          }),
          (t.prototype.getBinaryShiftByteCount = function () {
            return this.binaryShiftByteCount;
          }),
          (t.prototype.getBitCount = function () {
            return this.bitCount;
          }),
          (t.prototype.latchAndAppend = function (n, e) {
            var h = this.bitCount,
              f = this.token;
            if (n !== this.mode) {
              var y = u.LATCH_TABLE[this.mode][n];
              ((f = i.add(f, 65535 & y, y >> 16)), (h += y >> 16));
            }
            var s = n === o.MODE_DIGIT ? 4 : 5;
            return new t((f = i.add(f, e, s)), n, 0, h + s);
          }),
          (t.prototype.shiftAndAppend = function (n, e) {
            var u = this.token,
              f = this.mode === o.MODE_DIGIT ? 4 : 5;
            return (
              (u = i.add(u, h.SHIFT_TABLE[this.mode][n], f)),
              new t((u = i.add(u, e, 5)), this.mode, 0, this.bitCount + f + 5)
            );
          }),
          (t.prototype.addBinaryShiftChar = function (n) {
            var e = this.token,
              h = this.mode,
              f = this.bitCount;
            if (this.mode === o.MODE_PUNCT || this.mode === o.MODE_DIGIT) {
              var y = u.LATCH_TABLE[h][o.MODE_UPPER];
              ((e = i.add(e, 65535 & y, y >> 16)),
                (f += y >> 16),
                (h = o.MODE_UPPER));
            }
            var s =
                0 === this.binaryShiftByteCount ||
                31 === this.binaryShiftByteCount
                  ? 18
                  : 62 === this.binaryShiftByteCount
                    ? 9
                    : 8,
              d = new t(e, h, this.binaryShiftByteCount + 1, f + s);
            return (
              2078 === d.binaryShiftByteCount && (d = d.endBinaryShift(n + 1)),
              d
            );
          }),
          (t.prototype.endBinaryShift = function (n) {
            if (0 === this.binaryShiftByteCount) return this;
            var e = this.token;
            return new t(
              (e = i.addBinaryShift(
                e,
                n - this.binaryShiftByteCount,
                this.binaryShiftByteCount,
              )),
              this.mode,
              0,
              this.bitCount,
            );
          }),
          (t.prototype.isBetterThanOrEqualTo = function (n) {
            var e = this.bitCount + (u.LATCH_TABLE[this.mode][n.mode] >> 16);
            return (
              this.binaryShiftByteCount < n.binaryShiftByteCount
                ? (e +=
                    t.calculateBinaryShiftCost(n) -
                    t.calculateBinaryShiftCost(this))
                : this.binaryShiftByteCount > n.binaryShiftByteCount &&
                  n.binaryShiftByteCount > 0 &&
                  (e += 10),
              e <= n.bitCount
            );
          }),
          (t.prototype.toBitArray = function (t) {
            for (
              var n, i, o = [], u = this.endBinaryShift(t.length).token;
              null !== u;
              u = u.getPrevious()
            )
              o.unshift(u);
            var h = new e.default();
            try {
              for (var f = y(o), s = f.next(); !s.done; s = f.next()) {
                s.value.appendTo(h, t);
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                s && !s.done && (i = f.return) && i.call(f);
              } finally {
                if (n) throw n.error;
              }
            }
            return h;
          }),
          (t.prototype.toString = function () {
            return f.default.format(
              '%s bits=%d bytes=%d',
              o.MODE_NAMES[this.mode],
              this.bitCount,
              this.binaryShiftByteCount,
            );
          }),
          (t.calculateBinaryShiftCost = function (t) {
            return t.binaryShiftByteCount > 62
              ? 21
              : t.binaryShiftByteCount > 31
                ? 20
                : t.binaryShiftByteCount > 0
                  ? 10
                  : 0;
          }),
          (t.INITIAL_STATE = new t(o.EMPTY_TOKEN, o.MODE_UPPER, 0, 0)),
          t
        );
      })();
  },
  1221,
  [1018, 1222, 1226, 1227, 1228, 1026],
);
