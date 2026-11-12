// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1239; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'BrowserPDF417Reader', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t,
      n = r(_d[0]),
      o = r(_d[1]),
      c =
        (this && this.__extends) ||
        ((t = function (n, o) {
          return (
            (t =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, n) {
                  t.__proto__ = n;
                }) ||
              function (t, n) {
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
              }),
            t(n, o)
          );
        }),
        function (n, o) {
          if ('function' != typeof o && null !== o)
            throw new TypeError(
              'Class extends value ' +
                String(o) +
                ' is not a constructor or null',
            );
          function c() {
            this.constructor = n;
          }
          (t(n, o),
            (n.prototype =
              null === o
                ? Object.create(o)
                : ((c.prototype = o.prototype), new c())));
        }),
      u = (function (t) {
        function o(o, c) {
          return t.call(this, new n.PDF417Reader(), o, c) || this;
        }
        return (c(o, t), o);
      })(o.BrowserCodeReader);
  },
  1239,
  [1006, 1234],
);
