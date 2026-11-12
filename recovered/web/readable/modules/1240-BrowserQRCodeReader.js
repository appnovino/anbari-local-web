// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1240; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'BrowserQRCodeReader', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t,
      o = r(_d[0]),
      n = r(_d[1]),
      c =
        (this && this.__extends) ||
        ((t = function (o, n) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, o) {
                  t.__proto__ = o;
                }) ||
              function (t, o) {
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
              }),
            t(o, n)
          );
        }),
        function (o, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function c() {
            this.constructor = o;
          }
          (t(o, n),
            (o.prototype =
              null === n
                ? Object.create(n)
                : ((c.prototype = n.prototype), new c())));
        }),
      u = (function (t) {
        function n(n, c) {
          return t.call(this, new o.QRCodeReader(), n, c) || this;
        }
        return (c(n, t), n);
      })(n.BrowserCodeReader);
  },
  1240,
  [1006, 1234],
);
