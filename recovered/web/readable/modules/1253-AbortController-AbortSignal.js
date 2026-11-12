// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1253; original bundle: __common-9cdd8d1b62d3893a7e9d868fab7ed9b5.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return p;
        },
      }),
      Object.defineProperty(e, 'AbortController', {
        enumerable: !0,
        get: function () {
          return b;
        },
      }),
      Object.defineProperty(e, 'AbortSignal', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = r(d[0]);
    class o extends t.EventTarget {
      constructor() {
        throw (
          super(),
          new TypeError('AbortSignal cannot be constructed directly')
        );
      }
      get aborted() {
        const t = l.get(this);
        if ('boolean' != typeof t)
          throw new TypeError(
            "Expected 'this' to be an 'AbortSignal' object, but got " +
              (null === this ? 'null' : typeof this),
          );
        return t;
      }
    }
    function n() {
      const n = Object.create(o.prototype);
      return (t.EventTarget.call(n), l.set(n, !1), n);
    }
    (0, t.defineEventAttribute)(o.prototype, 'abort');
    const l = new WeakMap();
    (Object.defineProperties(o.prototype, { aborted: { enumerable: !0 } }),
      'function' == typeof Symbol &&
        'symbol' == typeof Symbol.toStringTag &&
        Object.defineProperty(o.prototype, Symbol.toStringTag, {
          configurable: !0,
          value: 'AbortSignal',
        }));
    class b {
      constructor() {
        c.set(this, n());
      }
      get signal() {
        return u(this);
      }
      abort() {
        var t;
        ((t = u(this)),
          !1 === l.get(t) &&
            (l.set(t, !0), t.dispatchEvent({ type: 'abort' })));
      }
    }
    const c = new WeakMap();
    function u(t) {
      const o = c.get(t);
      if (null == o)
        throw new TypeError(
          "Expected 'this' to be an 'AbortController' object, but got " +
            (null === t ? 'null' : typeof t),
        );
      return o;
    }
    (Object.defineProperties(b.prototype, {
      signal: { enumerable: !0 },
      abort: { enumerable: !0 },
    }),
      'function' == typeof Symbol &&
        'symbol' == typeof Symbol.toStringTag &&
        Object.defineProperty(b.prototype, Symbol.toStringTag, {
          configurable: !0,
          value: 'AbortController',
        }));
    var p = b;
  },
  1253,
  [1254],
);
