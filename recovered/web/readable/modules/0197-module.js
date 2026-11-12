// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 197; original bundle: index-4d9dce5f8f280a52ba0b02536c7db777.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var t,
      e,
      u = r(d[0]),
      c = (t = u) && t.__esModule ? t : { default: t };
    class n {
      static step0(t) {
        return t > 0 ? 1 : 0;
      }
      static step1(t) {
        return t >= 1 ? 1 : 0;
      }
      static linear(t) {
        return t;
      }
      static ease(t) {
        return (e || (e = n.bezier(0.42, 0, 1, 1)), e(t));
      }
      static quad(t) {
        return t * t;
      }
      static cubic(t) {
        return t * t * t;
      }
      static poly(t) {
        return (e) => Math.pow(e, t);
      }
      static sin(t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      }
      static circle(t) {
        return 1 - Math.sqrt(1 - t * t);
      }
      static exp(t) {
        return Math.pow(2, 10 * (t - 1));
      }
      static elastic(t) {
        void 0 === t && (t = 1);
        var e = t * Math.PI;
        return (t) =>
          1 - Math.pow(Math.cos((t * Math.PI) / 2), 3) * Math.cos(t * e);
      }
      static back(t) {
        return (
          void 0 === t && (t = 1.70158),
          (e) => e * e * ((t + 1) * e - t)
        );
      }
      static bounce(t) {
        if (t < 0.36363636363636365) return 7.5625 * t * t;
        if (t < 0.7272727272727273) {
          var e = t - 0.5454545454545454;
          return 7.5625 * e * e + 0.75;
        }
        if (t < 0.9090909090909091) {
          var u = t - 0.8181818181818182;
          return 7.5625 * u * u + 0.9375;
        }
        var c = t - 0.9545454545454546;
        return 7.5625 * c * c + 0.984375;
      }
      static bezier(t, e, u, n) {
        return (0, c.default)(t, e, u, n);
      }
      static in(t) {
        return t;
      }
      static out(t) {
        return (e) => 1 - t(1 - e);
      }
      static inOut(t) {
        return (e) => (e < 0.5 ? t(2 * e) / 2 : 1 - t(2 * (1 - e)) / 2);
      }
    }
    var s = n;
  },
  197,
  [198],
);
