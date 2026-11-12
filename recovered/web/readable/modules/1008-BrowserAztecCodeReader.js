// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1008; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'BrowserAztecCodeReader', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var t,
      e,
      o = r(_d[0]),
      n = r(_d[1]),
      u = (t = n) && t.__esModule ? t : { default: t },
      c =
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
      s = (function (t) {
        function e(e) {
          return (
            void 0 === e && (e = 500),
            t.call(this, new u.default(), e) || this
          );
        }
        return (c(e, t), e);
      })(o.BrowserCodeReader);
  },
  1008,
  [1009, 1038],
);
