// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1078; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return p;
        },
      }));
    var t,
      n = e(r(_d[0])),
      o = e(r(_d[1])),
      i = e(r(_d[2])),
      u = e(r(_d[3])),
      c =
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
          function o() {
            this.constructor = e;
          }
          (t(e, n),
            (e.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o())));
        }),
      d =
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
        },
      p = (function (e) {
        function t() {
          var t = e.call(this) || this;
          return ((t.decodeMiddleCounters = new Int32Array(4)), t);
        }
        return (
          c(t, e),
          (t.prototype.decodeMiddle = function (e, n, i) {
            var u,
              c,
              p = this.decodeMiddleCounters.map(function (e) {
                return e;
              });
            ((p[0] = 0), (p[1] = 0), (p[2] = 0), (p[3] = 0));
            for (
              var f = e.getSize(), s = n[1], l = 0, h = 0;
              h < 6 && s < f;
              h++
            ) {
              var _ = t.decodeDigit(e, p, s, t.L_AND_G_PATTERNS);
              i += String.fromCharCode('0'.charCodeAt(0) + (_ % 10));
              try {
                for (
                  var y = ((u = void 0), d(p)), C = y.next();
                  !C.done;
                  C = y.next()
                ) {
                  s += C.value;
                }
              } catch (e) {
                u = { error: e };
              } finally {
                try {
                  C && !C.done && (c = y.return) && c.call(y);
                } finally {
                  if (u) throw u.error;
                }
              }
              _ >= 10 && (l |= 1 << (5 - h));
            }
            return (t.determineNumSysAndCheckDigit(new o.default(i), l), s);
          }),
          (t.prototype.decodeEnd = function (e, n) {
            return t.findGuardPatternWithoutCounters(
              e,
              n,
              !0,
              t.MIDDLE_END_PATTERN,
            );
          }),
          (t.prototype.checkChecksum = function (e) {
            return n.default.checkChecksum(t.convertUPCEtoUPCA(e));
          }),
          (t.determineNumSysAndCheckDigit = function (e, t) {
            for (var n = 0; n <= 1; n++)
              for (var o = 0; o < 10; o++)
                if (t === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[n][o])
                  return (e.insert(0, '0' + n), void e.append('0' + o));
            throw i.default.getNotFoundInstance();
          }),
          (t.prototype.getBarcodeFormat = function () {
            return u.default.UPC_E;
          }),
          (t.convertUPCEtoUPCA = function (e) {
            var t = e
                .slice(1, 7)
                .split('')
                .map(function (e) {
                  return e.charCodeAt(0);
                }),
              n = new o.default();
            n.append(e.charAt(0));
            var i = t[5];
            switch (i) {
              case 0:
              case 1:
              case 2:
                (n.appendChars(t, 0, 2),
                  n.append(i),
                  n.append('0000'),
                  n.appendChars(t, 2, 3));
                break;
              case 3:
                (n.appendChars(t, 0, 3),
                  n.append('00000'),
                  n.appendChars(t, 3, 2));
                break;
              case 4:
                (n.appendChars(t, 0, 4), n.append('00000'), n.append(t[4]));
                break;
              default:
                (n.appendChars(t, 0, 5), n.append('0000'), n.append(i));
            }
            return (e.length >= 8 && n.append(e.charAt(7)), n.toString());
          }),
          (t.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1])),
          (t.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [
            Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]),
            Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1]),
          ]),
          t
        );
      })(n.default);
  },
  1078,
  [1071, 1025, 1032, 1040],
);
