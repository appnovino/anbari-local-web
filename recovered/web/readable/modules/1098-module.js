// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1098; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var e,
      n = t(r(_d[0])),
      o = t(r(_d[1])),
      u =
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
          function o() {
            this.constructor = t;
          }
          (e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o())));
        }),
      c = (function (t) {
        function e(e) {
          return t.call(this, e) || this;
        }
        return (
          u(e, t),
          (e.prototype.parseInformation = function () {
            var t = new n.default();
            return this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE);
          }),
          (e.HEADER_SIZE = 5),
          e
        );
      })(o.default);
  },
  1098,
  [1025, 1097],
);
