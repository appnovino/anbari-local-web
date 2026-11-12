// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1186; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      i =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            n = e && t[e],
            i = 0;
          if (n) return n.call(t);
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
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      o = (function () {
        function t(t, e) {
          ((this.width = t), (this.height = e));
          for (var n = new Array(e), i = 0; i !== e; i++)
            n[i] = new Uint8Array(t);
          this.bytes = n;
        }
        return (
          (t.prototype.getHeight = function () {
            return this.height;
          }),
          (t.prototype.getWidth = function () {
            return this.width;
          }),
          (t.prototype.get = function (t, e) {
            return this.bytes[e][t];
          }),
          (t.prototype.getArray = function () {
            return this.bytes;
          }),
          (t.prototype.setNumber = function (t, e, n) {
            this.bytes[e][t] = n;
          }),
          (t.prototype.setBoolean = function (t, e, n) {
            this.bytes[e][t] = n ? 1 : 0;
          }),
          (t.prototype.clear = function (t) {
            var n, o;
            try {
              for (var u = i(this.bytes), h = u.next(); !h.done; h = u.next()) {
                var f = h.value;
                e.default.fill(f, t);
              }
            } catch (t) {
              n = { error: t };
            } finally {
              try {
                h && !h.done && (o = u.return) && o.call(u);
              } finally {
                if (n) throw n.error;
              }
            }
          }),
          (t.prototype.equals = function (e) {
            if (!(e instanceof t)) return !1;
            var n = e;
            if (this.width !== n.width) return !1;
            if (this.height !== n.height) return !1;
            for (var i = 0, o = this.height; i < o; ++i)
              for (
                var u = this.bytes[i], h = n.bytes[i], f = 0, s = this.width;
                f < s;
                ++f
              )
                if (u[f] !== h[f]) return !1;
            return !0;
          }),
          (t.prototype.toString = function () {
            for (var t = new n.default(), e = 0, i = this.height; e < i; ++e) {
              for (var o = this.bytes[e], u = 0, h = this.width; u < h; ++u)
                switch (o[u]) {
                  case 0:
                    t.append(' 0');
                    break;
                  case 1:
                    t.append(' 1');
                    break;
                  default:
                    t.append('  ');
                }
              t.append('\n');
            }
            return t.toString();
          }),
          t
        );
      })();
  },
  1186,
  [1019, 1025],
);
