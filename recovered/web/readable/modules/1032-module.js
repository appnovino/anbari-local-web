// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1032; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var t,
      n,
      e = r(_d[0]),
      o = (t = e) && t.__esModule ? t : { default: t },
      u =
        (this && this.__extends) ||
        ((n = function (t, e) {
          return (
            (n =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, n) {
                  t.__proto__ = n;
                }) ||
              function (t, n) {
                for (var e in n)
                  Object.prototype.hasOwnProperty.call(n, e) && (t[e] = n[e]);
              }),
            n(t, e)
          );
        }),
        function (t, e) {
          if ('function' != typeof e && null !== e)
            throw new TypeError(
              'Class extends value ' +
                String(e) +
                ' is not a constructor or null',
            );
          function o() {
            this.constructor = t;
          }
          (n(t, e),
            (t.prototype =
              null === e
                ? Object.create(e)
                : ((o.prototype = e.prototype), new o())));
        }),
      c = (function (t) {
        function n() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          u(n, t),
          (n.getNotFoundInstance = function () {
            return new n();
          }),
          (n.kind = 'NotFoundException'),
          n
        );
      })(o.default),
      f = c;
  },
  1032,
  [1011],
);
