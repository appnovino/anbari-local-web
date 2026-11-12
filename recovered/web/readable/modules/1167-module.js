// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1167; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t,
      e = _r(d[0]),
      r = (t = e) && t.__esModule ? t : { default: t },
      n =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
          if (r) return r.call(t);
          if (t && 'number' == typeof t.length)
            return {
              next: function () {
                return (
                  t && n >= t.length && (t = void 0),
                  { value: t && t[n++], done: !t }
                );
              },
            };
          throw new TypeError(
            e ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      o =
        (this && this.__read) ||
        function (t, e) {
          var r = 'function' == typeof Symbol && t[Symbol.iterator];
          if (!r) return t;
          var n,
            o,
            u = r.call(t),
            i = [];
          try {
            for (; (void 0 === e || e-- > 0) && !(n = u.next()).done; )
              i.push(n.value);
          } catch (t) {
            o = { error: t };
          } finally {
            try {
              n && !n.done && (r = u.return) && r.call(u);
            } finally {
              if (o) throw o.error;
            }
          }
          return i;
        },
      u = (function () {
        function t() {
          this.values = new Map();
        }
        return (
          (t.prototype.setValue = function (t) {
            t = Math.trunc(t);
            var e = this.values.get(t);
            (null == e && (e = 0), e++, this.values.set(t, e));
          }),
          (t.prototype.getValue = function () {
            var t,
              e,
              u = -1,
              i = new Array(),
              l = function (t, e) {
                var r = function () {
                    return t;
                  },
                  n = function () {
                    return e;
                  };
                n() > u
                  ? ((u = n()), (i = []).push(r()))
                  : n() === u && i.push(r());
              };
            try {
              for (
                var f = n(this.values.entries()), c = f.next();
                !c.done;
                c = f.next()
              ) {
                var s = o(c.value, 2);
                l(s[0], s[1]);
              }
            } catch (e) {
              t = { error: e };
            } finally {
              try {
                c && !c.done && (e = f.return) && e.call(f);
              } finally {
                if (t) throw t.error;
              }
            }
            return r.default.toIntArray(i);
          }),
          (t.prototype.getConfidence = function (t) {
            return this.values.get(t);
          }),
          t
        );
      })();
  },
  1167,
  [1154],
);
