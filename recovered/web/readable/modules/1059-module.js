// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1059; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
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
          return s;
        },
      }));
    var e,
      n = t(r(_d[0])),
      o = t(r(_d[1])),
      u = t(r(_d[2])),
      f = t(r(_d[3])),
      l =
        (this && this.__extends) ||
        ((e = function (t, n) {
          return (
            (e =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (t, e) {
                  t.__proto__ = e;
                }) ||
              function (t, e) {
                for (var n in e)
                  Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
              }),
            e(t, n)
          );
        }),
        function (t, n) {
          if ('function' != typeof n && null !== n)
            throw new TypeError(
              'Class extends value ' +
                String(n) +
                ' is not a constructor or null',
            );
          function o() {
            this.constructor = t;
          }
          (e(t, n),
            (t.prototype =
              null === n
                ? Object.create(n)
                : ((o.prototype = n.prototype), new o())));
        }),
      c = (function (t) {
        function e() {
          return (null !== t && t.apply(this, arguments)) || this;
        }
        return (
          l(e, t),
          (e.prototype.sampleGrid = function (
            t,
            e,
            n,
            o,
            f,
            l,
            c,
            s,
            p,
            d,
            y,
            _,
            h,
            w,
            v,
            O,
            b,
            P,
            j,
          ) {
            var T = u.default.quadrilateralToQuadrilateral(
              o,
              f,
              l,
              c,
              s,
              p,
              d,
              y,
              _,
              h,
              w,
              v,
              O,
              b,
              P,
              j,
            );
            return this.sampleGridWithTransform(t, e, n, T);
          }),
          (e.prototype.sampleGridWithTransform = function (t, e, u, l) {
            if (e <= 0 || u <= 0) throw new f.default();
            for (
              var c = new o.default(e, u), s = new Float32Array(2 * e), p = 0;
              p < u;
              p++
            ) {
              for (var d = s.length, y = p + 0.5, _ = 0; _ < d; _ += 2)
                ((s[_] = _ / 2 + 0.5), (s[_ + 1] = y));
              (l.transformPoints(s), n.default.checkAndNudgePoints(t, s));
              try {
                for (_ = 0; _ < d; _ += 2)
                  t.get(0 | s[_], 0 | s[_ + 1]) && c.set(_ / 2, p);
              } catch (t) {
                throw new f.default();
              }
            }
            return c;
          }),
          e
        );
      })(n.default),
      s = c;
  },
  1059,
  [1060, 1024, 1061, 1032],
);
