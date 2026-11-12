// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1084; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    var r =
        (this && this.__values) ||
        function (r) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && r[t],
            o = 0;
          if (n) return n.call(r);
          if (r && 'number' == typeof r.length)
            return {
              next: function () {
                return (
                  r && o >= r.length && (r = void 0),
                  { value: r && r[o++], done: !r }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      t = (function () {
        function t() {}
        return (
          (t.getRSSvalue = function (n, o, i) {
            var u,
              f,
              l = 0;
            try {
              for (var c = r(n), v = c.next(); !v.done; v = c.next()) {
                l += v.value;
              }
            } catch (r) {
              u = { error: r };
            } finally {
              try {
                v && !v.done && (f = c.return) && f.call(c);
              } finally {
                if (u) throw u.error;
              }
            }
            for (var b = 0, s = 0, y = n.length, h = 0; h < y - 1; h++) {
              var m = void 0;
              for (m = 1, s |= 1 << h; m < n[h]; m++, s &= ~(1 << h)) {
                var _ = t.combins(l - m - 1, y - h - 2);
                if (
                  (i &&
                    0 === s &&
                    l - m - (y - h - 1) >= y - h - 1 &&
                    (_ -= t.combins(l - m - (y - h), y - h - 2)),
                  y - h - 1 > 1)
                ) {
                  for (var p = 0, S = l - m - (y - h - 2); S > o; S--)
                    p += t.combins(l - m - S - 1, y - h - 3);
                  _ -= p * (y - 1 - h);
                } else l - m > o && _--;
                b += _;
              }
              l -= m;
            }
            return b;
          }),
          (t.combins = function (r, t) {
            var n = 0,
              o = 0;
            r - t > t ? ((o = t), (n = r - t)) : ((o = r - t), (n = t));
            for (var i = 1, u = 1, f = r; f > n; f--)
              ((i *= f), u <= o && ((i = Math.trunc(i / u)), u++));
            for (; u <= o; ) ((i = Math.trunc(i / u)), u++);
            return i;
          }),
          t
        );
      })();
  },
  1084,
  [],
);
