// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1055; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
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
      n = r(_d[0]),
      o = (t = n) && t.__esModule ? t : { default: t },
      c =
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
      u = (function (t) {
        function e(e, n, o, c, u) {
          var s = t.call(this, e, n) || this;
          return ((s.compact = o), (s.nbDatablocks = c), (s.nbLayers = u), s);
        }
        return (
          c(e, t),
          (e.prototype.getNbLayers = function () {
            return this.nbLayers;
          }),
          (e.prototype.getNbDatablocks = function () {
            return this.nbDatablocks;
          }),
          (e.prototype.isCompact = function () {
            return this.compact;
          }),
          e
        );
      })(o.default);
  },
  1055,
  [1056],
);
