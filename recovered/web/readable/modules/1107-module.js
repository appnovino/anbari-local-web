// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1107; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t,
      r = _r(d[0]),
      e = (t = r) && t.__esModule ? t : { default: t },
      n =
        (this && this.__read) ||
        function (t, r) {
          var e = 'function' == typeof Symbol && t[Symbol.iterator];
          if (!e) return t;
          var n,
            i,
            o = e.call(t),
            u = [];
          try {
            for (; (void 0 === r || r-- > 0) && !(n = o.next()).done; )
              u.push(n.value);
          } catch (t) {
            i = { error: t };
          } finally {
            try {
              n && !n.done && (e = o.return) && e.call(o);
            } finally {
              if (i) throw i.error;
            }
          }
          return u;
        },
      i =
        (this && this.__spreadArray) ||
        function (t, r, e) {
          if (e || 2 === arguments.length)
            for (var n, i = 0, o = r.length; i < o; i++)
              (!n && i in r) ||
                (n || (n = Array.prototype.slice.call(r, 0, i)), (n[i] = r[i]));
          return t.concat(n || Array.prototype.slice.call(r));
        },
      o = (function () {
        function t(t, r) {
          ((this.pairs = i([], n(t), !1)), (this.rowNumber = r));
        }
        return (
          (t.prototype.getPairs = function () {
            return this.pairs;
          }),
          (t.prototype.getRowNumber = function () {
            return this.rowNumber;
          }),
          (t.prototype.isEquivalent = function (r) {
            return t.listEquals(this.getPairs(), r);
          }),
          (t.prototype.toString = function () {
            return '{ ' + this.pairs + ' }';
          }),
          (t.equals = function (r, e) {
            return null === r
              ? null === e
              : e instanceof t && t.listEquals(r.pairs, e.getPairs());
          }),
          (t.listEquals = function (t, r) {
            return (
              t.length === r.length &&
              t.every(function (t, n) {
                var i = r[n];
                return e.default.equals(t, i);
              })
            );
          }),
          t
        );
      })();
  },
  1107,
  [1106],
);
