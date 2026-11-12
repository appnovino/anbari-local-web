// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 966; original bundle: App-659666a99f2f01630312af1cf82147aa.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, _m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'isWeighLine', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }),
      (e.weighStep = function (n) {
        const c = u(n) ? (0, t.measureOf)(n.product.unit) : void 0;
        return c ? c.step / c.factor : 1;
      }),
      (e.weighFact = function (c) {
        if (!u(c)) return '';
        try {
          const u = (0, n.normalizedLine)(c, !0);
          return void 0 === u.price
            ? ''
            : (0, t.measureTimes)(u.quantity, c.product.unit, u.price);
        } catch {
          return '';
        }
      }));
    var t = r(d[0]),
      n = r(d[1]);
    const u = (n) =>
      !!(0, t.measureOf)(n.product.unit) &&
      n.unit === (n.product.unit || 'piece');
  },
  966,
  [459, 464],
);
