// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1011; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t,
      n = r(_d[0]),
      o =
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
          function u() {
            this.constructor = n;
          }
          (t(n, o),
            (n.prototype =
              null === o
                ? Object.create(o)
                : ((u.prototype = o.prototype), new u())));
        }),
      u = (function (t) {
        function n(n) {
          void 0 === n && (n = void 0);
          var o = t.call(this, n) || this;
          return ((o.message = n), o);
        }
        return (
          o(n, t),
          (n.prototype.getKind = function () {
            return this.constructor.kind;
          }),
          (n.kind = 'Exception'),
          n
        );
      })(n.CustomError);
  },
  1011,
  [1012],
);
