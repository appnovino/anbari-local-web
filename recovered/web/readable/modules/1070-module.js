// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1070; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
      i = t(r(_d[2])),
      u =
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
      f =
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
          u(e, t),
          (e.prototype.decodeMiddle = function (t, o, i) {
            var u,
              l,
              d,
              c,
              s = this.decodeMiddleCounters;
            ((s[0] = 0), (s[1] = 0), (s[2] = 0), (s[3] = 0));
            for (
              var y = t.getSize(), _ = o[1], h = 0, p = 0;
              p < 6 && _ < y;
              p++
            ) {
              var v = n.default.decodeDigit(
                t,
                s,
                _,
                n.default.L_AND_G_PATTERNS,
              );
              i += String.fromCharCode('0'.charCodeAt(0) + (v % 10));
              try {
                for (
                  var S = ((u = void 0), f(s)), C = S.next();
                  !C.done;
                  C = S.next()
                ) {
                  _ += C.value;
                }
              } catch (t) {
                u = { error: t };
              } finally {
                try {
                  C && !C.done && (l = S.return) && l.call(S);
                } finally {
                  if (u) throw u.error;
                }
              }
              v >= 10 && (h |= 1 << (5 - p));
            }
            ((i = e.determineFirstDigit(i, h)),
              (_ = n.default.findGuardPattern(
                t,
                _,
                !0,
                n.default.MIDDLE_PATTERN,
                new Int32Array(n.default.MIDDLE_PATTERN.length).fill(0),
              )[1]));
            for (p = 0; p < 6 && _ < y; p++) {
              v = n.default.decodeDigit(t, s, _, n.default.L_PATTERNS);
              i += String.fromCharCode('0'.charCodeAt(0) + v);
              try {
                for (
                  var T = ((d = void 0), f(s)), D = T.next();
                  !D.done;
                  D = T.next()
                ) {
                  _ += D.value;
                }
              } catch (t) {
                d = { error: t };
              } finally {
                try {
                  D && !D.done && (c = T.return) && c.call(T);
                } finally {
                  if (d) throw d.error;
                }
              }
            }
            return { rowOffset: _, resultString: i };
          }),
          (e.prototype.getBarcodeFormat = function () {
            return o.default.EAN_13;
          }),
          (e.determineFirstDigit = function (t, e) {
            for (var o = 0; o < 10; o++)
              if (e === this.FIRST_DIGIT_ENCODINGS[o])
                return (t = String.fromCharCode('0'.charCodeAt(0) + o) + t);
            throw new i.default();
          }),
          (e.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26]),
          e
        );
      })(n.default);
  },
  1070,
  [1040, 1071, 1032],
);
