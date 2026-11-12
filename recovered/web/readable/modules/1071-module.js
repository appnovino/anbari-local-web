// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1071; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return A;
        },
      }));
    var e,
      n = t(r(_d[0])),
      u = t(r(_d[1])),
      o = t(r(_d[2])),
      l = t(r(_d[3])),
      f = t(r(_d[4])),
      d = t(r(_d[5])),
      i = t(r(_d[6])),
      c = t(r(_d[7])),
      s = t(r(_d[8])),
      h = t(r(_d[9])),
      _ =
        (this && this.__extends) ||
        ((e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              }),
            e(t, n)
          );
        }),
        function (t, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function u() {
            this.constructor = t;
          }
          (e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((u.prototype = n.prototype), new u())));
        }),
      A = (function (t) {
        function e() {
          var n = t.call(this) || this;
          ((n.decodeRowStringBuffer = ''),
            (e.L_AND_G_PATTERNS = e.L_PATTERNS.map(function (t) {
              return Int32Array.from(t);
            })));
          for (var u = 10; u < 20; u++) {
            for (
              var o = e.L_PATTERNS[u - 10], l = new Int32Array(o.length), f = 0;
              f < o.length;
              f++
            )
              l[f] = o[o.length - f - 1];
            e.L_AND_G_PATTERNS[u] = l;
          }
          return n;
        }
        return (
          _(e, t),
          (e.prototype.decodeRow = function (t, i, _) {
            var A = e.findStartGuardPattern(i),
              w =
                null == _ ? null : _.get(u.default.NEED_RESULT_POINT_CALLBACK);
            if (null != w) {
              var P = new f.default((A[0] + A[1]) / 2, t);
              w.foundPossibleResultPoint(P);
            }
            var E = this.decodeMiddle(i, A, this.decodeRowStringBuffer),
              v = E.rowOffset,
              T = E.resultString;
            if (null != w) {
              var N = new f.default(v, t);
              w.foundPossibleResultPoint(N);
            }
            var p = e.decodeEnd(i, v);
            if (null != w) {
              var S = new f.default((p[0] + p[1]) / 2, t);
              w.foundPossibleResultPoint(S);
            }
            var R = p[1],
              C = R + (R - p[0]);
            if (C >= i.getSize() || !i.isRange(R, C, !1)) throw new c.default();
            var y = T.toString();
            if (y.length < 8) throw new s.default();
            if (!e.checkChecksum(y)) throw new h.default();
            var O = (A[1] + A[0]) / 2,
              b = (p[1] + p[0]) / 2,
              k = this.getBarcodeFormat(),
              L = [new f.default(O, t), new f.default(b, t)],
              D = new o.default(y, null, 0, L, k, new Date().getTime()),
              I = 0;
            try {
              var U = d.default.decodeRow(t, i, p[1]);
              (D.putMetadata(l.default.UPC_EAN_EXTENSION, U.getText()),
                D.putAllMetadata(U.getResultMetadata()),
                D.addResultPoints(U.getResultPoints()),
                (I = U.getText().length));
            } catch (t) {}
            var M = null == _ ? null : _.get(u.default.ALLOWED_EAN_EXTENSIONS);
            if (null != M) {
              var j = !1;
              for (var x in M)
                if (I.toString() === x) {
                  j = !0;
                  break;
                }
              if (!j) throw new c.default();
            }
            return (k === n.default.EAN_13 || n.default.UPC_A, D);
          }),
          (e.checkChecksum = function (t) {
            return e.checkStandardUPCEANChecksum(t);
          }),
          (e.checkStandardUPCEANChecksum = function (t) {
            var n = t.length;
            if (0 === n) return !1;
            var u = parseInt(t.charAt(n - 1), 10);
            return e.getStandardUPCEANChecksum(t.substring(0, n - 1)) === u;
          }),
          (e.getStandardUPCEANChecksum = function (t) {
            for (var e = t.length, n = 0, u = e - 1; u >= 0; u -= 2) {
              if (
                (o = t.charAt(u).charCodeAt(0) - '0'.charCodeAt(0)) < 0 ||
                o > 9
              )
                throw new s.default();
              n += o;
            }
            n *= 3;
            for (u = e - 2; u >= 0; u -= 2) {
              var o;
              if (
                (o = t.charAt(u).charCodeAt(0) - '0'.charCodeAt(0)) < 0 ||
                o > 9
              )
                throw new s.default();
              n += o;
            }
            return (1e3 - n) % 10;
          }),
          (e.decodeEnd = function (t, n) {
            return e.findGuardPattern(
              t,
              n,
              !1,
              e.START_END_PATTERN,
              new Int32Array(e.START_END_PATTERN.length).fill(0),
            );
          }),
          e
        );
      })(i.default);
  },
  1071,
  [1040, 1027, 1039, 1041, 1052, 1072, 1073, 1032, 1029, 1015],
);
