// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1210; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'TextEncoder', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var t,
      n = r(_d[0]),
      o = r(_d[1]),
      p =
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
          function p() {
            this.constructor = n;
          }
          (t(n, o),
            (n.prototype =
              null === o
                ? Object.create(o)
                : ((p.prototype = o.prototype), new p())));
        }),
      c = (function (t) {
        function n() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          p(n, t),
          (n.prototype.getEncodingMode = function () {
            return o.TEXT_ENCODATION;
          }),
          (n.prototype.encodeChar = function (t, n) {
            if (t === ' '.charCodeAt(0)) return (n.append(3), 1);
            if (t >= '0'.charCodeAt(0) && t <= '9'.charCodeAt(0))
              return (n.append(t - 48 + 4), 1);
            if (t >= 'a'.charCodeAt(0) && t <= 'z'.charCodeAt(0))
              return (n.append(t - 97 + 14), 1);
            if (t < ' '.charCodeAt(0)) return (n.append(0), n.append(t), 2);
            if (t <= '/'.charCodeAt(0))
              return (n.append(1), n.append(t - 33), 2);
            if (t <= '@'.charCodeAt(0))
              return (n.append(1), n.append(t - 58 + 15), 2);
            if (t >= '['.charCodeAt(0) && t <= '_'.charCodeAt(0))
              return (n.append(1), n.append(t - 91 + 22), 2);
            if (t === '`'.charCodeAt(0)) return (n.append(2), n.append(0), 2);
            if (t <= 'Z'.charCodeAt(0))
              return (n.append(2), n.append(t - 65 + 1), 2);
            if (t <= 127) return (n.append(2), n.append(t - 123 + 27), 2);
            n.append(''.concat(1, '\x1e'));
            var o = 2;
            return (o += this.encodeChar(t - 128, n));
          }),
          n
        );
      })(n.C40Encoder);
  },
  1210,
  [1205, 1201],
);
