// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1077; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, _r, _i, a, _m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var e,
      r = t(_r(_d[0])),
      n = t(_r(_d[1])),
      o = t(_r(_d[2])),
      u = t(_r(_d[3])),
      i = t(_r(_d[4])),
      l =
        (this && this.__extends) ||
        ((e = function (t, r) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var r in e)
                  Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
              }),
            e(t, r)
          );
        }),
        function (t, r) {
          if ('function' != typeof r && null !== r)
            throw new TypeError(
              'Class extends value ' +
                String(r) +
                ' is not a constructor or null',
            );
          function n() {
            this.constructor = t;
          }
          (e(t, r),
            (t.prototype =
              null === r
                ? Object.create(r)
                : ((n.prototype = r.prototype), new n())));
        }),
      c =
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
      d =
        (this && this.__spreadArray) ||
        function (t, e, r) {
          if (r || 2 === arguments.length)
            for (var n, o = 0, u = e.length; o < u; o++)
              (!n && o in e) ||
                (n || (n = Array.prototype.slice.call(e, 0, o)), (n[o] = e[o]));
          return t.concat(n || Array.prototype.slice.call(e));
        },
      f = (function (t) {
        function e() {
          var e = t.apply(this, d([], c(arguments), !1)) || this;
          return ((e.ean13Reader = new u.default()), e);
        }
        return (
          l(e, t),
          (e.prototype.getBarcodeFormat = function () {
            return r.default.UPC_A;
          }),
          (e.prototype.decode = function (t, e) {
            return this.maybeReturnResult(this.ean13Reader.decode(t));
          }),
          (e.prototype.decodeRow = function (t, e, r) {
            return this.maybeReturnResult(this.ean13Reader.decodeRow(t, e, r));
          }),
          (e.prototype.decodeMiddle = function (t, e, r) {
            return this.ean13Reader.decodeMiddle(t, e, r);
          }),
          (e.prototype.maybeReturnResult = function (t) {
            var e = t.getText();
            if ('0' === e.charAt(0)) {
              var u = new n.default(
                e.substring(1),
                null,
                null,
                t.getResultPoints(),
                r.default.UPC_A,
              );
              return (
                null != t.getResultMetadata() &&
                  u.putAllMetadata(t.getResultMetadata()),
                u
              );
            }
            throw new o.default();
          }),
          (e.prototype.reset = function () {
            this.ean13Reader.reset();
          }),
          e
        );
      })(i.default),
      s = f;
  },
  1077,
  [1040, 1039, 1032, 1070, 1071],
);
