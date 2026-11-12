// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1069; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return y;
        },
      }));
    var t,
      n = e(r(_d[0])),
      u = e(r(_d[1])),
      l = e(r(_d[2])),
      o = e(r(_d[3])),
      f = e(r(_d[4])),
      i = e(r(_d[5])),
      d = e(r(_d[6])),
      s = e(r(_d[7])),
      c = e(r(_d[8])),
      p =
        (this && this.__extends) ||
        ((t = function (e, n) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }),
            t(e, n)
          );
        }),
        function (e, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function u() {
            this.constructor = e;
          }
          (t(e, n),
            (e.prototype =
              null === n
                ? Object.create(n)
                : ((u.prototype = n.prototype), new u())));
        }),
      h =
        (this && this.__values) ||
        function (e) {
          var t = 'function' == typeof Symbol && Symbol.iterator,
            n = t && e[t],
            u = 0;
          if (n) return n.call(e);
          if (e && 'number' == typeof e.length)
            return {
              next: function () {
                return (
                  e && u >= e.length && (e = void 0),
                  { value: e && e[u++], done: !e }
                );
              },
            };
          throw new TypeError(
            t ? 'Object is not iterable.' : 'Symbol.iterator is not defined.',
          );
        },
      y = (function (e) {
        function t(t) {
          var l = e.call(this) || this,
            o = null == t ? null : t.get(u.default.POSSIBLE_FORMATS),
            s = [];
          return (
            null != o &&
              (o.indexOf(n.default.EAN_13) > -1 && s.push(new f.default()),
              o.indexOf(n.default.UPC_A) > -1 && s.push(new d.default()),
              o.indexOf(n.default.EAN_8) > -1 && s.push(new i.default()),
              o.indexOf(n.default.UPC_E) > -1 && s.push(new c.default())),
            0 === s.length &&
              (s.push(new f.default()),
              s.push(new d.default()),
              s.push(new i.default()),
              s.push(new c.default())),
            (l.readers = s),
            l
          );
        }
        return (
          p(t, e),
          (t.prototype.decodeRow = function (e, t, o) {
            var f, i;
            try {
              for (
                var d = h(this.readers), c = d.next();
                !c.done;
                c = d.next()
              ) {
                var p = c.value;
                try {
                  var y = p.decodeRow(e, t, o),
                    _ =
                      y.getBarcodeFormat() === n.default.EAN_13 &&
                      '0' === y.getText().charAt(0),
                    w = null == o ? null : o.get(u.default.POSSIBLE_FORMATS),
                    v = null == w || w.includes(n.default.UPC_A);
                  if (_ && v) {
                    var O = y.getRawBytes(),
                      b = new l.default(
                        y.getText().substring(1),
                        O,
                        O ? O.length : null,
                        y.getResultPoints(),
                        n.default.UPC_A,
                      );
                    return (b.putAllMetadata(y.getResultMetadata()), b);
                  }
                  return y;
                } catch (e) {}
              }
            } catch (e) {
              f = { error: e };
            } finally {
              try {
                c && !c.done && (i = d.return) && i.call(d);
              } finally {
                if (f) throw f.error;
              }
            }
            throw new s.default();
          }),
          (t.prototype.reset = function () {
            var e, t;
            try {
              for (
                var n = h(this.readers), u = n.next();
                !u.done;
                u = n.next()
              ) {
                u.value.reset();
              }
            } catch (t) {
              e = { error: t };
            } finally {
              try {
                u && !u.done && (t = n.return) && t.call(n);
              } finally {
                if (e) throw e.error;
              }
            }
          }),
          t
        );
      })(o.default);
  },
  1069,
  [1040, 1027, 1039, 1065, 1070, 1076, 1077, 1032, 1078],
);
