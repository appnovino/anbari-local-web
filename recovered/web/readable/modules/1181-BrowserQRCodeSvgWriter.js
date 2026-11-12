// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1181; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    function t(t) {
      return t && t.__esModule ? t : { default: t };
    }
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'BrowserQRCodeSvgWriter', {
        enumerable: !0,
        get: function () {
          return f;
        },
      }));
    var e = t(r(d[0])),
      n = t(r(d[1])),
      o = t(r(d[2])),
      u = t(r(d[3])),
      l = t(r(d[4])),
      f = (function () {
        function t() {}
        return (
          (t.prototype.write = function (l, f, S, c) {
            if ((void 0 === c && (c = null), 0 === l.length))
              throw new u.default('Found empty contents');
            if (f < 0 || S < 0)
              throw new u.default(
                'Requested dimensions are too small: ' + f + 'x' + S,
              );
            var s = o.default.L,
              h = t.QUIET_ZONE_SIZE;
            null !== c &&
              (void 0 !== c.get(e.default.ERROR_CORRECTION) &&
                (s = o.default.fromString(
                  c.get(e.default.ERROR_CORRECTION).toString(),
                )),
              void 0 !== c.get(e.default.MARGIN) &&
                (h = Number.parseInt(c.get(e.default.MARGIN).toString(), 10)));
            var p = n.default.encode(l, s, c);
            return this.renderResult(p, f, S, h);
          }),
          (t.prototype.writeToDom = function (t, e, n, o, u) {
            (void 0 === u && (u = null),
              'string' == typeof t && (t = document.querySelector(t)));
            var l = this.write(e, n, o, u);
            t && t.appendChild(l);
          }),
          (t.prototype.renderResult = function (t, e, n, o) {
            var u = t.getMatrix();
            if (null === u) throw new l.default();
            for (
              var f = u.getWidth(),
                S = u.getHeight(),
                c = f + 2 * o,
                s = S + 2 * o,
                h = Math.max(e, c),
                p = Math.max(n, s),
                v = Math.min(Math.floor(h / c), Math.floor(p / s)),
                N = Math.floor((h - f * v) / 2),
                R = Math.floor((p - S * v) / 2),
                w = this.createSVGElement(h, p),
                E = 0,
                _ = R;
              E < S;
              E++, _ += v
            )
              for (var M = 0, b = N; M < f; M++, b += v)
                if (1 === u.get(M, E)) {
                  var y = this.createSvgRectElement(b, _, v, v);
                  w.appendChild(y);
                }
            return w;
          }),
          (t.prototype.createSVGElement = function (e, n) {
            var o = document.createElementNS(t.SVG_NS, 'svg');
            return (
              o.setAttributeNS(null, 'height', e.toString()),
              o.setAttributeNS(null, 'width', n.toString()),
              o
            );
          }),
          (t.prototype.createSvgRectElement = function (e, n, o, u) {
            var l = document.createElementNS(t.SVG_NS, 'rect');
            return (
              l.setAttributeNS(null, 'x', e.toString()),
              l.setAttributeNS(null, 'y', n.toString()),
              l.setAttributeNS(null, 'height', o.toString()),
              l.setAttributeNS(null, 'width', u.toString()),
              l.setAttributeNS(null, 'fill', '#000000'),
              l
            );
          }),
          (t.QUIET_ZONE_SIZE = 4),
          (t.SVG_NS = 'http://www.w3.org/2000/svg'),
          t
        );
      })();
  },
  1181,
  [1182, 1183, 1126, 1014, 1050],
);
