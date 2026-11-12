// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1035; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
        function e(e) {
          var o = t.call(this, e.getWidth(), e.getHeight()) || this;
          return ((o.delegate = e), o);
        }
        return (
          i(e, t),
          (e.prototype.getRow = function (t, e) {
            for (
              var o = this.delegate.getRow(t, e), n = this.getWidth(), i = 0;
              i < n;
              i++
            )
              o[i] = 255 - (255 & o[i]);
            return o;
          }),
          (e.prototype.getMatrix = function () {
            for (
              var t = this.delegate.getMatrix(),
                e = this.getWidth() * this.getHeight(),
                o = new Uint8ClampedArray(e),
                n = 0;
              n < e;
              n++
            )
              o[n] = 255 - (255 & t[n]);
            return o;
          }),
          (e.prototype.isCropSupported = function () {
            return this.delegate.isCropSupported();
          }),
          (e.prototype.crop = function (t, o, n, i) {
            return new e(this.delegate.crop(t, o, n, i));
          }),
          (e.prototype.isRotateSupported = function () {
            return this.delegate.isRotateSupported();
          }),
          (e.prototype.invert = function () {
            return this.delegate;
          }),
          (e.prototype.rotateCounterClockwise = function () {
            return new e(this.delegate.rotateCounterClockwise());
          }),
          (e.prototype.rotateCounterClockwise45 = function () {
            return new e(this.delegate.rotateCounterClockwise45());
          }),
          e
        );
      })(n.default);
  },
  1035,
  [1036],
);
