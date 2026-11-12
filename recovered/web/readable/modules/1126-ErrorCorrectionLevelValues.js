// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1126; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function e(e) {
      return e && e.__esModule ? e : { default: e };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }),
      Object.defineProperty(_e, 'ErrorCorrectionLevelValues', {
        enumerable: !0,
        get: function () {
          return t;
        },
      }));
    var t,
      n = e(r(d[0])),
      u = e(r(d[1]));
    !(function (e) {
      ((e[(e.L = 0)] = 'L'),
        (e[(e.M = 1)] = 'M'),
        (e[(e.Q = 2)] = 'Q'),
        (e[(e.H = 3)] = 'H'));
    })(t || (t = {}));
    var o = (function () {
      function e(t, n, u) {
        ((this.value = t),
          (this.stringValue = n),
          (this.bits = u),
          e.FOR_BITS.set(u, this),
          e.FOR_VALUE.set(t, this));
      }
      return (
        (e.prototype.getValue = function () {
          return this.value;
        }),
        (e.prototype.getBits = function () {
          return this.bits;
        }),
        (e.fromString = function (t) {
          switch (t) {
            case 'L':
              return e.L;
            case 'M':
              return e.M;
            case 'Q':
              return e.Q;
            case 'H':
              return e.H;
            default:
              throw new n.default(t + 'not available');
          }
        }),
        (e.prototype.toString = function () {
          return this.stringValue;
        }),
        (e.prototype.equals = function (t) {
          if (!(t instanceof e)) return !1;
          var n = t;
          return this.value === n.value;
        }),
        (e.forBits = function (t) {
          if (t < 0 || t >= e.FOR_BITS.size) throw new u.default();
          return e.FOR_BITS.get(t);
        }),
        (e.FOR_BITS = new Map()),
        (e.FOR_VALUE = new Map()),
        (e.L = new e(t.L, 'L', 1)),
        (e.M = new e(t.M, 'M', 0)),
        (e.Q = new e(t.Q, 'Q', 3)),
        (e.H = new e(t.H, 'H', 2)),
        e
      );
    })();
  },
  1126,
  [1010, 1014],
);
