// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1018; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var i = t(r(d[0])),
      e = t(r(d[1])),
      o = t(r(d[2])),
      s = t(r(d[3])),
      n = (function () {
        function t(i, e) {
          void 0 === i
            ? ((this.size = 0), (this.bits = new Int32Array(1)))
            : ((this.size = i), (this.bits = null == e ? t.makeArray(i) : e));
        }
        return (
          (t.prototype.getSize = function () {
            return this.size;
          }),
          (t.prototype.getSizeInBytes = function () {
            return Math.floor((this.size + 7) / 8);
          }),
          (t.prototype.ensureCapacity = function (i) {
            if (i > 32 * this.bits.length) {
              var e = t.makeArray(i);
              (s.default.arraycopy(this.bits, 0, e, 0, this.bits.length),
                (this.bits = e));
            }
          }),
          (t.prototype.get = function (t) {
            return !!(this.bits[Math.floor(t / 32)] & (1 << (31 & t)));
          }),
          (t.prototype.set = function (t) {
            this.bits[Math.floor(t / 32)] |= 1 << (31 & t);
          }),
          (t.prototype.flip = function (t) {
            this.bits[Math.floor(t / 32)] ^= 1 << (31 & t);
          }),
          (t.prototype.getNextSet = function (t) {
            var i = this.size;
            if (t >= i) return i;
            var e = this.bits,
              s = Math.floor(t / 32),
              n = e[s];
            n &= ~((1 << (31 & t)) - 1);
            for (var f = e.length; 0 === n; ) {
              if (++s === f) return i;
              n = e[s];
            }
            var h = 32 * s + o.default.numberOfTrailingZeros(n);
            return h > i ? i : h;
          }),
          (t.prototype.getNextUnset = function (t) {
            var i = this.size;
            if (t >= i) return i;
            var e = this.bits,
              s = Math.floor(t / 32),
              n = ~e[s];
            n &= ~((1 << (31 & t)) - 1);
            for (var f = e.length; 0 === n; ) {
              if (++s === f) return i;
              n = ~e[s];
            }
            var h = 32 * s + o.default.numberOfTrailingZeros(n);
            return h > i ? i : h;
          }),
          (t.prototype.setBulk = function (t, i) {
            this.bits[Math.floor(t / 32)] = i;
          }),
          (t.prototype.setRange = function (t, e) {
            if (e < t || t < 0 || e > this.size) throw new i.default();
            if (e !== t) {
              e--;
              for (
                var o = Math.floor(t / 32),
                  s = Math.floor(e / 32),
                  n = this.bits,
                  f = o;
                f <= s;
                f++
              ) {
                var h =
                  (2 << (f < s ? 31 : 31 & e)) - (1 << (f > o ? 0 : 31 & t));
                n[f] |= h;
              }
            }
          }),
          (t.prototype.clear = function () {
            for (var t = this.bits.length, i = this.bits, e = 0; e < t; e++)
              i[e] = 0;
          }),
          (t.prototype.isRange = function (t, e, o) {
            if (e < t || t < 0 || e > this.size) throw new i.default();
            if (e === t) return !0;
            e--;
            for (
              var s = Math.floor(t / 32),
                n = Math.floor(e / 32),
                f = this.bits,
                h = s;
              h <= n;
              h++
            ) {
              var u =
                ((2 << (h < n ? 31 : 31 & e)) - (1 << (h > s ? 0 : 31 & t))) &
                4294967295;
              if ((f[h] & u) !== (o ? u : 0)) return !1;
            }
            return !0;
          }),
          (t.prototype.appendBit = function (t) {
            (this.ensureCapacity(this.size + 1),
              t &&
                (this.bits[Math.floor(this.size / 32)] |=
                  1 << (31 & this.size)),
              this.size++);
          }),
          (t.prototype.appendBits = function (t, e) {
            if (e < 0 || e > 32)
              throw new i.default('Num bits must be between 0 and 32');
            this.ensureCapacity(this.size + e);
            for (var o = e; o > 0; o--)
              this.appendBit(1 == ((t >> (o - 1)) & 1));
          }),
          (t.prototype.appendBitArray = function (t) {
            var i = t.size;
            this.ensureCapacity(this.size + i);
            for (var e = 0; e < i; e++) this.appendBit(t.get(e));
          }),
          (t.prototype.xor = function (t) {
            if (this.size !== t.size) throw new i.default("Sizes don't match");
            for (var e = this.bits, o = 0, s = e.length; o < s; o++)
              e[o] ^= t.bits[o];
          }),
          (t.prototype.toBytes = function (t, i, e, o) {
            for (var s = 0; s < o; s++) {
              for (var n = 0, f = 0; f < 8; f++)
                (this.get(t) && (n |= 1 << (7 - f)), t++);
              i[e + s] = n;
            }
          }),
          (t.prototype.getBitArray = function () {
            return this.bits;
          }),
          (t.prototype.reverse = function () {
            for (
              var t = new Int32Array(this.bits.length),
                i = Math.floor((this.size - 1) / 32),
                e = i + 1,
                o = this.bits,
                s = 0;
              s < e;
              s++
            ) {
              var n = o[s];
              ((n =
                (((n =
                  (((n =
                    (((n =
                      (((n =
                        ((n >> 1) & 1431655765) | ((1431655765 & n) << 1)) >>
                        2) &
                        858993459) |
                      ((858993459 & n) << 2)) >>
                      4) &
                      252645135) |
                    ((252645135 & n) << 4)) >>
                    8) &
                    16711935) |
                  ((16711935 & n) << 8)) >>
                  16) &
                  65535) |
                ((65535 & n) << 16)),
                (t[i - s] = n));
            }
            if (this.size !== 32 * e) {
              var f = 32 * e - this.size,
                h = t[0] >>> f;
              for (s = 1; s < e; s++) {
                var u = t[s];
                ((h |= u << (32 - f)), (t[s - 1] = h), (h = u >>> f));
              }
              t[e - 1] = h;
            }
            this.bits = t;
          }),
          (t.makeArray = function (t) {
            return new Int32Array(Math.floor((t + 31) / 32));
          }),
          (t.prototype.equals = function (i) {
            if (!(i instanceof t)) return !1;
            var o = i;
            return this.size === o.size && e.default.equals(this.bits, o.bits);
          }),
          (t.prototype.hashCode = function () {
            return 31 * this.size + e.default.hashCode(this.bits);
          }),
          (t.prototype.toString = function () {
            for (var t = '', i = 0, e = this.size; i < e; i++)
              (7 & i || (t += ' '), (t += this.get(i) ? 'X' : '.'));
            return t;
          }),
          (t.prototype.clone = function () {
            return new t(this.size, this.bits.slice());
          }),
          (t.prototype.toArray = function () {
            for (var t = [], i = 0, e = this.size; i < e; i++)
              t.push(this.get(i));
            return t;
          }),
          t
        );
      })();
  },
  1018,
  [1014, 1019, 1023, 1020],
);
