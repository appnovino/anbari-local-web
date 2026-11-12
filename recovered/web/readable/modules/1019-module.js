// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1019; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i2, _a2, _m, _e, d) {
    'use strict';
    function n(n) {
      return n && n.__esModule ? n : { default: n };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return i;
        },
      }));
    var t = n(r(d[0])),
      e = n(r(d[1])),
      f = n(r(d[2])),
      o =
        (this && this.__values) ||
        function (n) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            e = t && n[t],
            f = 0;
          if (e) return e.call(n);
          if (n && 'number' == typeof n.length)
            return {
              next: function () {
                return (
                  n && f >= n.length && (n = void 0),
                  { value: n && n[f++], done: !n }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      u = (function () {
        function n() {}
        return (
          (n.fill = function (n, t) {
            for (var e = 0, f = n.length; e < f; e++) n[e] = t;
          }),
          (n.fillWithin = function (t, e, f, o) {
            n.rangeCheck(t.length, e, f);
            for (var u = e; u < f; u++) t[u] = o;
          }),
          (n.rangeCheck = function (n, t, o) {
            if (t > o)
              throw new e.default('fromIndex(' + t + ') > toIndex(' + o + ')');
            if (t < 0) throw new f.default(t);
            if (o > n) throw new f.default(o);
          }),
          (n.asList = function () {
            for (var n = [], t = 0; t < arguments.length; t++)
              n[t] = arguments[t];
            return n;
          }),
          (n.create = function (n, t, e) {
            return Array.from({ length: n }).map(function (n) {
              return Array.from({ length: t }).fill(e);
            });
          }),
          (n.createInt32Array = function (n, t, e) {
            return Array.from({ length: n }).map(function (n) {
              return Int32Array.from({ length: t }).fill(e);
            });
          }),
          (n.equals = function (n, t) {
            if (!n) return !1;
            if (!t) return !1;
            if (!n.length) return !1;
            if (!t.length) return !1;
            if (n.length !== t.length) return !1;
            for (var e = 0, f = n.length; e < f; e++)
              if (n[e] !== t[e]) return !1;
            return !0;
          }),
          (n.hashCode = function (n) {
            var t, e;
            if (null === n) return 0;
            var f = 1;
            try {
              for (var u = o(n), i = u.next(); !i.done; i = u.next()) {
                f = 31 * f + i.value;
              }
            } catch (n) {
              t = { error: n };
            } finally {
              try {
                i && !i.done && (e = u.return) && e.call(u);
              } finally {
                if (t) throw t.error;
              }
            }
            return f;
          }),
          (n.fillUint8Array = function (n, t) {
            for (var e = 0; e !== n.length; e++) n[e] = t;
          }),
          (n.copyOf = function (n, t) {
            return n.slice(0, t);
          }),
          (n.copyOfUint8Array = function (n, t) {
            if (n.length <= t) {
              var e = new Uint8Array(t);
              return (e.set(n), e);
            }
            return n.slice(0, t);
          }),
          (n.copyOfRange = function (n, e, f) {
            var o = f - e,
              u = new Int32Array(o);
            return (t.default.arraycopy(n, e, u, 0, o), u);
          }),
          (n.binarySearch = function (t, e, f) {
            void 0 === f && (f = n.numberComparator);
            for (var o = 0, u = t.length - 1; o <= u; ) {
              var i = (u + o) >> 1,
                a = f(e, t[i]);
              if (a > 0) o = i + 1;
              else {
                if (!(a < 0)) return i;
                u = i - 1;
              }
            }
            return -o - 1;
          }),
          (n.numberComparator = function (n, t) {
            return n - t;
          }),
          n
        );
      })(),
      i = u;
  },
  1019,
  [1020, 1014, 1021],
);
