// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1076; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, _m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return l;
        },
      }));
    var e,
      o = t(r(_d[0])),
      n = t(r(_d[1])),
      i =
        (this && this.__extends) ||
        ((e = function (t, o) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var o in e)
                  Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
              }),
            e(t, o)
          );
        }),
        function (t, o) {
          if ('function' != typeof o && null !== o)
            throw new TypeError(
              'Class extends value ' +
                String(o) +
                ' is not a constructor or null',
            );
          function n() {
            this.constructor = t;
          }
          (e(t, o),
            (t.prototype =
              null === o
                ? Object.create(o)
                : ((n.prototype = o.prototype), new n())));
        }),
      u =
        (this && this.__values) ||
        function (t) {
          var e = 'function' == typeof Symbol && Symbol.iterator,
            o = e && t[e],
            n = 0;
          if (o) return o.call(t);
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
      l = (function (t) {
        function e() {
          var e = t.call(this) || this;
          return ((e.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0])), e);
        }
        return (
          i(e, t),
          (e.prototype.decodeMiddle = function (t, e, o) {
            var i,
              l,
              f,
              d,
              c = this.decodeMiddleCounters;
            ((c[0] = 0), (c[1] = 0), (c[2] = 0), (c[3] = 0));
            for (var s = t.getSize(), y = e[1], p = 0; p < 4 && y < s; p++) {
              var _ = n.default.decodeDigit(t, c, y, n.default.L_PATTERNS);
              o += String.fromCharCode('0'.charCodeAt(0) + _);
              try {
                for (
                  var h = ((i = void 0), u(c)), v = h.next();
                  !v.done;
                  v = h.next()
                ) {
                  y += v.value;
                }
              } catch (t) {
                i = { error: t };
              } finally {
                try {
                  v && !v.done && (l = h.return) && l.call(h);
                } finally {
                  if (i) throw i.error;
                }
              }
            }
            y = n.default.findGuardPattern(
              t,
              y,
              !0,
              n.default.MIDDLE_PATTERN,
              new Int32Array(n.default.MIDDLE_PATTERN.length).fill(0),
            )[1];
            for (p = 0; p < 4 && y < s; p++) {
              _ = n.default.decodeDigit(t, c, y, n.default.L_PATTERNS);
              o += String.fromCharCode('0'.charCodeAt(0) + _);
              try {
                for (
                  var b = ((f = void 0), u(c)), w = b.next();
                  !w.done;
                  w = b.next()
                ) {
                  y += w.value;
                }
              } catch (t) {
                f = { error: t };
              } finally {
                try {
                  w && !w.done && (d = b.return) && d.call(b);
                } finally {
                  if (f) throw f.error;
                }
              }
            }
            return { rowOffset: y, resultString: o };
          }),
          (e.prototype.getBarcodeFormat = function () {
            return o.default.EAN_8;
          }),
          e
        );
      })(n.default);
  },
  1076,
  [1040, 1071],
);
