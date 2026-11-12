// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 456; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'priceFields', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }),
      Object.defineProperty(e, 'completePrices', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }),
      (e.revenueIncomplete = c),
      (e.profitIncomplete = function (n) {
        return c(n) || (n?.uncostedSoldUnits || 0) > 0;
      }));
    const n = [
        'unpricedSoldUnits',
        'uncostedSoldUnits',
        'unpricedReceivedUnits',
      ],
      t = () => ({
        unpricedSoldUnits: 0,
        uncostedSoldUnits: 0,
        unpricedReceivedUnits: 0,
      });
    function c(n) {
      return (n?.unpricedSoldUnits || 0) > 0;
    }
  },
  456,
  [],
);
