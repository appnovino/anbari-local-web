// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1129; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, _i, a, m, e, d) {
    'use strict';
    var A;
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'default', {
        enumerable: !0,
        get: function () {
          return _;
        },
      }),
      Object.defineProperty(e, 'DataMaskValues', {
        enumerable: !0,
        get: function () {
          return A;
        },
      }),
      (function (A) {
        ((A[(A.DATA_MASK_000 = 0)] = 'DATA_MASK_000'),
          (A[(A.DATA_MASK_001 = 1)] = 'DATA_MASK_001'),
          (A[(A.DATA_MASK_010 = 2)] = 'DATA_MASK_010'),
          (A[(A.DATA_MASK_011 = 3)] = 'DATA_MASK_011'),
          (A[(A.DATA_MASK_100 = 4)] = 'DATA_MASK_100'),
          (A[(A.DATA_MASK_101 = 5)] = 'DATA_MASK_101'),
          (A[(A.DATA_MASK_110 = 6)] = 'DATA_MASK_110'),
          (A[(A.DATA_MASK_111 = 7)] = 'DATA_MASK_111'));
      })(A || (A = {})));
    var _ = (function () {
      function _(A, _) {
        ((this.value = A), (this.isMasked = _));
      }
      return (
        (_.prototype.unmaskBitMatrix = function (A, _) {
          for (var n = 0; n < _; n++)
            for (var t = 0; t < _; t++) this.isMasked(n, t) && A.flip(t, n);
        }),
        (_.values = new Map([
          [
            A.DATA_MASK_000,
            new _(A.DATA_MASK_000, function (A, _) {
              return !((A + _) & 1);
            }),
          ],
          [
            A.DATA_MASK_001,
            new _(A.DATA_MASK_001, function (A, _) {
              return !(1 & A);
            }),
          ],
          [
            A.DATA_MASK_010,
            new _(A.DATA_MASK_010, function (A, _) {
              return _ % 3 == 0;
            }),
          ],
          [
            A.DATA_MASK_011,
            new _(A.DATA_MASK_011, function (A, _) {
              return (A + _) % 3 == 0;
            }),
          ],
          [
            A.DATA_MASK_100,
            new _(A.DATA_MASK_100, function (A, _) {
              return !((Math.floor(A / 2) + Math.floor(_ / 3)) & 1);
            }),
          ],
          [
            A.DATA_MASK_101,
            new _(A.DATA_MASK_101, function (A, _) {
              return (A * _) % 6 == 0;
            }),
          ],
          [
            A.DATA_MASK_110,
            new _(A.DATA_MASK_110, function (A, _) {
              return (A * _) % 6 < 3;
            }),
          ],
          [
            A.DATA_MASK_111,
            new _(A.DATA_MASK_111, function (A, _) {
              return !((A + _ + ((A * _) % 3)) & 1);
            }),
          ],
        ])),
        _
      );
    })();
  },
  1129,
  [],
);
