// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1024; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return s;
        },
      }));
    var e = t(r(d[0])),
      i = t(r(d[1])),
      o = t(r(d[2])),
      n = t(r(d[3])),
      h = t(r(d[4])),
      s = (function () {
        function t(t, e, i, o) {
          if (
            ((this.width = t),
            (this.height = e),
            (this.rowSize = i),
            (this.bits = o),
            null == e && (e = t),
            (this.height = e),
            t < 1 || e < 1)
          )
            throw new h.default('Both dimensions must be greater than 0');
          (null == i && (i = (t + 31) >> 5),
            (this.rowSize = i),
            null == o &&
              (this.bits = new Int32Array(this.rowSize * this.height)));
        }
        return (
          (t.parseFromBooleanArray = function (e) {
            for (
              var i = e.length, o = e[0].length, n = new t(o, i), h = 0;
              h < i;
              h++
            )
              for (var s = e[h], f = 0; f < o; f++) s[f] && n.set(f, h);
            return n;
          }),
          (t.parseFromString = function (e, i, o) {
            if (null === e)
              throw new h.default('stringRepresentation cannot be null');
            for (
              var n = new Array(e.length), s = 0, f = 0, u = -1, l = 0, w = 0;
              w < e.length;

            )
              if ('\n' === e.charAt(w) || '\r' === e.charAt(w)) {
                if (s > f) {
                  if (-1 === u) u = s - f;
                  else if (s - f !== u)
                    throw new h.default('row lengths do not match');
                  ((f = s), l++);
                }
                w++;
              } else if (e.substring(w, w + i.length) === i)
                ((w += i.length), (n[s] = !0), s++);
              else {
                if (e.substring(w, w + o.length) !== o)
                  throw new h.default(
                    'illegal character encountered: ' + e.substring(w),
                  );
                ((w += o.length), (n[s] = !1), s++);
              }
            if (s > f) {
              if (-1 === u) u = s - f;
              else if (s - f !== u)
                throw new h.default('row lengths do not match');
              l++;
            }
            for (var p = new t(u, l), c = 0; c < s; c++)
              n[c] && p.set(Math.floor(c % u), Math.floor(c / u));
            return p;
          }),
          (t.prototype.get = function (t, e) {
            var i = e * this.rowSize + (t >> 5);
            return !!((this.bits[i] >>> (31 & t)) & 1);
          }),
          (t.prototype.set = function (t, e) {
            var i = e * this.rowSize + (t >> 5);
            this.bits[i] |= (1 << (31 & t)) & 4294967295;
          }),
          (t.prototype.unset = function (t, e) {
            var i = e * this.rowSize + (t >> 5);
            this.bits[i] &= ~((1 << (31 & t)) & 4294967295);
          }),
          (t.prototype.flip = function (t, e) {
            var i = e * this.rowSize + (t >> 5);
            this.bits[i] ^= (1 << (31 & t)) & 4294967295;
          }),
          (t.prototype.xor = function (t) {
            if (
              this.width !== t.getWidth() ||
              this.height !== t.getHeight() ||
              this.rowSize !== t.getRowSize()
            )
              throw new h.default('input matrix dimensions do not match');
            for (
              var i = new e.default(1 + (this.width >> 5)),
                o = this.rowSize,
                n = this.bits,
                s = 0,
                f = this.height;
              s < f;
              s++
            )
              for (
                var u = s * o, l = t.getRow(s, i).getBitArray(), w = 0;
                w < o;
                w++
              )
                n[u + w] ^= l[w];
          }),
          (t.prototype.clear = function () {
            this.bits.fill(0);
          }),
          (t.prototype.setRegion = function (t, e, i, o) {
            if (e < 0 || t < 0)
              throw new h.default('Left and top must be nonnegative');
            if (o < 1 || i < 1)
              throw new h.default('Height and width must be at least 1');
            var n = t + i,
              s = e + o;
            if (s > this.height || n > this.width)
              throw new h.default('The region must fit inside the matrix');
            for (var f = this.rowSize, u = this.bits, l = e; l < s; l++)
              for (var w = l * f, p = t; p < n; p++)
                u[w + (p >> 5)] |= (1 << (31 & p)) & 4294967295;
          }),
          (t.prototype.getRow = function (t, i) {
            null == i || i.getSize() < this.width
              ? (i = new e.default(this.width))
              : i.clear();
            for (
              var o = this.rowSize, n = this.bits, h = t * o, s = 0;
              s < o;
              s++
            )
              i.setBulk(32 * s, n[h + s]);
            return i;
          }),
          (t.prototype.setRow = function (t, e) {
            i.default.arraycopy(
              e.getBitArray(),
              0,
              this.bits,
              t * this.rowSize,
              this.rowSize,
            );
          }),
          (t.prototype.rotate180 = function () {
            for (
              var t = this.getWidth(),
                i = this.getHeight(),
                o = new e.default(t),
                n = new e.default(t),
                h = 0,
                s = Math.floor((i + 1) / 2);
              h < s;
              h++
            )
              ((o = this.getRow(h, o)),
                (n = this.getRow(i - 1 - h, n)),
                o.reverse(),
                n.reverse(),
                this.setRow(h, n),
                this.setRow(i - 1 - h, o));
          }),
          (t.prototype.getEnclosingRectangle = function () {
            for (
              var t = this.width,
                e = this.height,
                i = this.rowSize,
                o = this.bits,
                n = t,
                h = e,
                s = -1,
                f = -1,
                u = 0;
              u < e;
              u++
            )
              for (var l = 0; l < i; l++) {
                var w = o[u * i + l];
                if (0 !== w) {
                  if ((u < h && (h = u), u > f && (f = u), 32 * l < n)) {
                    for (var p = 0; !((w << (31 - p)) & 4294967295); ) p++;
                    32 * l + p < n && (n = 32 * l + p);
                  }
                  if (32 * l + 31 > s) {
                    for (p = 31; w >>> p === 0; ) p--;
                    32 * l + p > s && (s = 32 * l + p);
                  }
                }
              }
            return s < n || f < h
              ? null
              : Int32Array.from([n, h, s - n + 1, f - h + 1]);
          }),
          (t.prototype.getTopLeftOnBit = function () {
            for (
              var t = this.rowSize, e = this.bits, i = 0;
              i < e.length && 0 === e[i];

            )
              i++;
            if (i === e.length) return null;
            for (
              var o = i / t, n = (i % t) * 32, h = e[i], s = 0;
              !((h << (31 - s)) & 4294967295);

            )
              s++;
            return ((n += s), Int32Array.from([n, o]));
          }),
          (t.prototype.getBottomRightOnBit = function () {
            for (
              var t = this.rowSize, e = this.bits, i = e.length - 1;
              i >= 0 && 0 === e[i];

            )
              i--;
            if (i < 0) return null;
            for (
              var o = Math.floor(i / t),
                n = 32 * Math.floor(i % t),
                h = e[i],
                s = 31;
              h >>> s === 0;

            )
              s--;
            return ((n += s), Int32Array.from([n, o]));
          }),
          (t.prototype.getWidth = function () {
            return this.width;
          }),
          (t.prototype.getHeight = function () {
            return this.height;
          }),
          (t.prototype.getRowSize = function () {
            return this.rowSize;
          }),
          (t.prototype.equals = function (e) {
            if (!(e instanceof t)) return !1;
            var i = e;
            return (
              this.width === i.width &&
              this.height === i.height &&
              this.rowSize === i.rowSize &&
              o.default.equals(this.bits, i.bits)
            );
          }),
          (t.prototype.hashCode = function () {
            var t = this.width;
            return (t =
              31 *
                (t =
                  31 * (t = 31 * (t = 31 * t + this.width) + this.height) +
                  this.rowSize) +
              o.default.hashCode(this.bits));
          }),
          (t.prototype.toString = function (t, e, i) {
            return (
              void 0 === t && (t = 'X '),
              void 0 === e && (e = '  '),
              void 0 === i && (i = '\n'),
              this.buildToString(t, e, i)
            );
          }),
          (t.prototype.buildToString = function (t, e, i) {
            for (var o = new n.default(), h = 0, s = this.height; h < s; h++) {
              for (var f = 0, u = this.width; f < u; f++)
                o.append(this.get(f, h) ? t : e);
              o.append(i);
            }
            return o.toString();
          }),
          (t.prototype.clone = function () {
            return new t(
              this.width,
              this.height,
              this.rowSize,
              this.bits.slice(),
            );
          }),
          t
        );
      })();
  },
  1024,
  [1018, 1020, 1019, 1025, 1014],
);
