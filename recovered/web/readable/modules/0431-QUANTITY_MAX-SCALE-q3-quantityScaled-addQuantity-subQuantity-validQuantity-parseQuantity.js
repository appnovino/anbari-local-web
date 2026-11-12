// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 431; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, _a, m, e, _d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'QUANTITY_MAX', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      Object.defineProperty(e, 'SCALE', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      (e.q3 = o),
      (e.quantityScaled = u),
      (e.addQuantity = function (t, a) {
        return o((u(t) + u(a)) / n);
      }),
      (e.subQuantity = function (t, a) {
        return o((u(t) - u(a)) / n);
      }),
      (e.validQuantity = a),
      (e.parseQuantity = function (t) {
        const n = t
          .trim()
          .replace(/[\u06f0-\u06f9]/g, (t) => String(c.indexOf(t)))
          .replace(/[\u0660-\u0669]/g, (t) => String(d.indexOf(t)))
          .replace(/[\u066b/]/g, '.');
        if (!/^\d+(?:\.\d{1,3})?$/.test(n)) throw Error('invalid');
        const u = o(Number(n));
        if (!a(u)) throw Error(u > 0 ? 'quantity_too_small' : 'invalid');
        return u;
      }),
      (e.convertPack = function (t, o) {
        if (!a(t) || !a(o)) throw Error('invalid');
        const c = Math.round((u(t) * u(o)) / n);
        if (c < 1) throw Error('quantity_too_small');
        if (c > 999999999999) throw Error('invalid');
        return c / n;
      }));
    const t = 999999999.999,
      n = 1e3;
    function o(t) {
      if (!Number.isFinite(t)) throw Error('invalid');
      const o = Math.round((t + Number.EPSILON) * n);
      if (Math.abs(o) > 999999999999) throw Error('invalid');
      return o / n;
    }
    function u(t) {
      const u = o(t);
      if (Math.abs(u - t) > 1e-9) throw Error('invalid');
      return Math.round(u * n);
    }
    function a(o) {
      return (
        'number' == typeof o &&
        Number.isFinite(o) &&
        o >= 0.001 &&
        o <= t &&
        Math.abs(o * n - Math.round(o * n)) < 1e-7
      );
    }
    const c = '\u06f0\u06f1\u06f2\u06f3\u06f4\u06f5\u06f6\u06f7\u06f8\u06f9',
      d = '\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669';
  },
  431,
  [],
);
