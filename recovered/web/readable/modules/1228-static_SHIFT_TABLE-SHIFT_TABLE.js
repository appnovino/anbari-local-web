// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1228; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      (_e.static_SHIFT_TABLE = i),
      Object.defineProperty(_e, 'SHIFT_TABLE', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var e,
      t = r(_d[0]),
      n = (e = t) && e.__esModule ? e : { default: e },
      o = (function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        return (
          e &&
            Object.keys(e).forEach(function (n) {
              var o = Object.getOwnPropertyDescriptor(e, n);
              Object.defineProperty(
                t,
                n,
                o.get
                  ? o
                  : {
                      enumerable: !0,
                      get: function () {
                        return e[n];
                      },
                    },
              );
            }),
          (t.default = e),
          t
        );
      })(r(_d[1])),
      u =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            o = 0;
          if (n) return n.call(e);
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
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        };
    function i(e) {
      var t, i;
      try {
        for (var l = u(e), f = l.next(); !f.done; f = l.next()) {
          var _ = f.value;
          n.default.fill(_, -1);
        }
      } catch (e) {
        t = { error: e };
      } finally {
        try {
          f && !f.done && (i = l.return) && i.call(l);
        } finally {
          if (t) throw t.error;
        }
      }
      return (
        (e[o.MODE_UPPER][o.MODE_PUNCT] = 0),
        (e[o.MODE_LOWER][o.MODE_PUNCT] = 0),
        (e[o.MODE_LOWER][o.MODE_UPPER] = 28),
        (e[o.MODE_MIXED][o.MODE_PUNCT] = 0),
        (e[o.MODE_DIGIT][o.MODE_PUNCT] = 0),
        (e[o.MODE_DIGIT][o.MODE_UPPER] = 15),
        e
      );
    }
    var l = i(n.default.createInt32Array(6, 6));
  },
  1228,
  [1019, 1226],
);
