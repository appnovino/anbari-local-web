// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1136; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var t,
      e,
      o = r(_d[0]),
      n = (t = o) && t.__esModule ? t : { default: t },
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
      u = (function (t) {
        function e(e, o, n) {
          var i = t.call(this, e, o) || this;
          return ((i.estimatedModuleSize = n), i);
        }
        return (
          i(e, t),
          (e.prototype.aboutEquals = function (t, e, o) {
            if (
              Math.abs(e - this.getY()) <= t &&
              Math.abs(o - this.getX()) <= t
            ) {
              var n = Math.abs(t - this.estimatedModuleSize);
              return n <= 1 || n <= this.estimatedModuleSize;
            }
            return !1;
          }),
          (e.prototype.combineEstimate = function (t, o, n) {
            return new e(
              (this.getX() + o) / 2,
              (this.getY() + t) / 2,
              (this.estimatedModuleSize + n) / 2,
            );
          }),
          e
        );
      })(n.default);
  },
  1136,
  [1052],
);
