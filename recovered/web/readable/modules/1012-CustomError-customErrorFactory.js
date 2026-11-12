// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1012; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i2, a, m, e, _d) {
    'use strict';
    function t(t, o) {
      void 0 === o && (o = t.constructor);
      var n = Error.captureStackTrace;
      n && n(t, o);
    }
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'CustomError', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }),
      Object.defineProperty(e, 'customErrorFactory', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var o,
      n =
        ((o = function (t, n) {
          return (
            (o =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, o) {
                  t.__proto__ = o;
                }) ||
              function (t, o) {
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
              }),
            o(t, n)
          );
        }),
        function (t, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function c() {
            this.constructor = t;
          }
          (o(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((c.prototype = n.prototype), new c())));
        }),
      c = (function (o) {
        function c(n, c) {
          var i,
            u,
            p,
            l = this.constructor,
            f = o.call(this, n, c) || this;
          return (
            Object.defineProperty(f, 'name', {
              value: l.name,
              enumerable: !1,
              configurable: !0,
            }),
            (i = f),
            (u = l.prototype),
            (p = Object.setPrototypeOf) ? p(i, u) : (i.__proto__ = u),
            t(f),
            f
          );
        }
        return (n(c, o), c);
      })(Error),
      i = function (t, o, n) {
        if (n || 2 === arguments.length)
          for (var c, i = 0, u = o.length; i < u; i++)
            (!c && i in o) ||
              (c || (c = Array.prototype.slice.call(o, 0, i)), (c[i] = o[i]));
        return t.concat(c || Array.prototype.slice.call(o));
      };
    function u(o, n) {
      function c() {
        for (var u = [], p = 0; p < arguments.length; p++) u[p] = arguments[p];
        if (!(this instanceof c))
          return new (c.bind.apply(c, i([void 0], u, !1)))();
        (n.apply(this, u),
          Object.defineProperty(this, 'name', {
            value: o.name || n.name,
            enumerable: !1,
            configurable: !0,
          }),
          o.apply(this, u),
          t(this, c));
      }
      return (
        void 0 === n && (n = Error),
        Object.defineProperties(c, {
          prototype: {
            value: Object.create(n.prototype, {
              constructor: { value: c, writable: !0, configurable: !0 },
            }),
          },
        })
      );
    }
  },
  1012,
  [],
);
