// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1174; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }));
    var n,
      o = t(r(_d[0])),
      e = t(r(_d[1])),
      u = t(r(_d[2])),
      f = t(r(_d[3])),
      s = t(r(_d[4])),
      c = t(r(_d[5])),
      p = t(r(_d[6])),
      h =
        (this && this.__extends) ||
        ((n = function (t, o) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, n) {
                  t.__proto__ = n;
                }) ||
              function (t, n) {
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              }),
            n(t, o)
          );
        }),
        function (t, o) {
          if ('function' != typeof o && null !== o)
            throw new TypeError(
              'Class extends value ' +
                String(o) +
                ' is not a constructor or null',
            );
          function e() {
            this.constructor = t;
          }
          (n(t, o),
            (t.prototype =
              null === o
                ? Object.create(o)
                : ((e.prototype = o.prototype), new e())));
        }),
      y = (function (t) {
        function n(n) {
          void 0 === n && (n = 32);
          var o = t.call(this) || this;
          if (((o.count = 0), n < 0))
            throw new f.default('Negative initial size: ' + n);
          return ((o.buf = new Uint8Array(n)), o);
        }
        return (
          h(n, t),
          (n.prototype.ensureCapacity = function (t) {
            t - this.buf.length > 0 && this.grow(t);
          }),
          (n.prototype.grow = function (t) {
            var n = this.buf.length << 1;
            if ((n - t < 0 && (n = t), n < 0)) {
              if (t < 0) throw new s.default();
              n = u.default.MAX_VALUE;
            }
            this.buf = o.default.copyOfUint8Array(this.buf, n);
          }),
          (n.prototype.write = function (t) {
            (this.ensureCapacity(this.count + 1),
              (this.buf[this.count] = t),
              (this.count += 1));
          }),
          (n.prototype.writeBytesOffset = function (t, n, o) {
            if (n < 0 || n > t.length || o < 0 || n + o - t.length > 0)
              throw new p.default();
            (this.ensureCapacity(this.count + o),
              c.default.arraycopy(t, n, this.buf, this.count, o),
              (this.count += o));
          }),
          (n.prototype.writeTo = function (t) {
            t.writeBytesOffset(this.buf, 0, this.count);
          }),
          (n.prototype.reset = function () {
            this.count = 0;
          }),
          (n.prototype.toByteArray = function () {
            return o.default.copyOfUint8Array(this.buf, this.count);
          }),
          (n.prototype.size = function () {
            return this.count;
          }),
          (n.prototype.toString = function (t) {
            return t
              ? 'string' == typeof t
                ? this.toString_string(t)
                : this.toString_number(t)
              : this.toString_void();
          }),
          (n.prototype.toString_void = function () {
            return new String(this.buf).toString();
          }),
          (n.prototype.toString_string = function (t) {
            return new String(this.buf).toString();
          }),
          (n.prototype.toString_number = function (t) {
            return new String(this.buf).toString();
          }),
          (n.prototype.close = function () {}),
          n
        );
      })(e.default);
  },
  1174,
  [1019, 1175, 1023, 1014, 1177, 1020, 1022],
);
