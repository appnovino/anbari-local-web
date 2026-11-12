// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1033; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, _d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return c;
        },
      }));
    var e,
      o = t(r(_d[0])),
      n = t(r(_d[1])),
      _ =
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
      c = (function (t) {
        function e(e) {
          var o = t.call(this, e) || this;
          return ((o.matrix = null), o);
        }
        return (
          _(e, t),
          (e.prototype.getBlackMatrix = function () {
            if (null !== this.matrix) return this.matrix;
            var o = this.getLuminanceSource(),
              _ = o.getWidth(),
              c = o.getHeight();
            if (_ >= e.MINIMUM_DIMENSION && c >= e.MINIMUM_DIMENSION) {
              var u = o.getMatrix(),
                l = _ >> e.BLOCK_SIZE_POWER;
              0 !== (_ & e.BLOCK_SIZE_MASK) && l++;
              var I = c >> e.BLOCK_SIZE_POWER;
              0 !== (c & e.BLOCK_SIZE_MASK) && I++;
              var O = e.calculateBlackPoints(u, l, I, _, c),
                f = new n.default(_, c);
              (e.calculateThresholdForBlock(u, l, I, _, c, O, f),
                (this.matrix = f));
            } else this.matrix = t.prototype.getBlackMatrix.call(this);
            return this.matrix;
          }),
          (e.prototype.createBinarizer = function (t) {
            return new e(t);
          }),
          (e.calculateThresholdForBlock = function (t, o, n, _, c, u, l) {
            for (
              var I = c - e.BLOCK_SIZE, O = _ - e.BLOCK_SIZE, f = 0;
              f < n;
              f++
            ) {
              var E = f << e.BLOCK_SIZE_POWER;
              E > I && (E = I);
              for (var s = e.cap(f, 2, n - 3), B = 0; B < o; B++) {
                var S = B << e.BLOCK_SIZE_POWER;
                S > O && (S = O);
                for (var C = e.cap(B, 2, o - 3), K = 0, v = -2; v <= 2; v++) {
                  var L = u[s + v];
                  K += L[C - 2] + L[C - 1] + L[C] + L[C + 1] + L[C + 2];
                }
                var M = K / 25;
                e.thresholdBlock(t, S, E, M, _, l);
              }
            }
          }),
          (e.cap = function (t, e, o) {
            return t < e ? e : t > o ? o : t;
          }),
          (e.thresholdBlock = function (t, o, n, _, c, u) {
            for (var l = 0, I = n * c + o; l < e.BLOCK_SIZE; l++, I += c)
              for (var O = 0; O < e.BLOCK_SIZE; O++)
                (255 & t[I + O]) <= _ && u.set(o + O, n + l);
          }),
          (e.calculateBlackPoints = function (t, o, n, _, c) {
            for (
              var u = c - e.BLOCK_SIZE,
                l = _ - e.BLOCK_SIZE,
                I = new Array(n),
                O = 0;
              O < n;
              O++
            ) {
              I[O] = new Int32Array(o);
              var f = O << e.BLOCK_SIZE_POWER;
              f > u && (f = u);
              for (var E = 0; E < o; E++) {
                var s = E << e.BLOCK_SIZE_POWER;
                s > l && (s = l);
                for (
                  var B = 0, S = 255, C = 0, K = 0, v = f * _ + s;
                  K < e.BLOCK_SIZE;
                  K++, v += _
                ) {
                  for (var L = 0; L < e.BLOCK_SIZE; L++) {
                    var M = 255 & t[v + L];
                    ((B += M), M < S && (S = M), M > C && (C = M));
                  }
                  if (C - S > e.MIN_DYNAMIC_RANGE)
                    for (K++, v += _; K < e.BLOCK_SIZE; K++, v += _)
                      for (L = 0; L < e.BLOCK_SIZE; L++) B += 255 & t[v + L];
                }
                var p = B >> (2 * e.BLOCK_SIZE_POWER);
                if (
                  C - S <= e.MIN_DYNAMIC_RANGE &&
                  ((p = S / 2), O > 0 && E > 0)
                ) {
                  var Z = (I[O - 1][E] + 2 * I[O][E - 1] + I[O - 1][E - 1]) / 4;
                  S < Z && (p = Z);
                }
                I[O][E] = p;
              }
            }
            return I;
          }),
          (e.BLOCK_SIZE_POWER = 3),
          (e.BLOCK_SIZE = 1 << e.BLOCK_SIZE_POWER),
          (e.BLOCK_SIZE_MASK = e.BLOCK_SIZE - 1),
          (e.MINIMUM_DIMENSION = 5 * e.BLOCK_SIZE),
          (e.MIN_DYNAMIC_RANGE = 24),
          e
        );
      })(o.default);
  },
  1033,
  [1016, 1024],
);
