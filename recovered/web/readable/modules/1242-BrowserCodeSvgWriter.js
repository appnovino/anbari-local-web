// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1242; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'BrowserCodeSvgWriter', {
        enumerable: !0,
        get: function () {
          return o;
        },
      }));
    var t = r(d[0]),
      n = 'http://www.w3.org/2000/svg',
      o = (function () {
        function o(t) {
          if ('string' == typeof t) {
            var n = document.getElementById(t);
            if (!n)
              throw new Error(
                "Could not find a Container element with '".concat(t, "'."),
              );
            this.containerElement = n;
          } else this.containerElement = t;
        }
        return (
          (o.prototype.write = function (n, c, l, u) {
            if (0 === n.length)
              throw new t.IllegalArgumentException('Found empty contents');
            if (c < 0 || l < 0)
              throw new t.IllegalArgumentException(
                'Requested dimensions are too small: ' + c + 'x' + l,
              );
            var h =
                u && void 0 !== u.get(t.EncodeHintType.MARGIN)
                  ? Number.parseInt(
                      u.get(t.EncodeHintType.MARGIN).toString(),
                      10,
                    )
                  : o.QUIET_ZONE_SIZE,
              S = this.encode(u, n);
            return this.renderResult(S, c, l, h);
          }),
          (o.prototype.createSVGElement = function (t, c) {
            var l = document.createElementNS(o.SVG_NS, 'svg');
            return (
              l.setAttributeNS(n, 'width', c.toString()),
              l.setAttributeNS(n, 'height', t.toString()),
              l
            );
          }),
          (o.prototype.createSvgPathPlaceholderElement = function (t, c) {
            var l = document.createElementNS(o.SVG_NS, 'path');
            return (
              l.setAttributeNS(n, 'd', 'M0 0h'.concat(t, 'v').concat(c, 'H0z')),
              l.setAttributeNS(n, 'fill', 'none'),
              l
            );
          }),
          (o.prototype.createSvgRectElement = function (t, c, l, u) {
            var h = document.createElementNS(o.SVG_NS, 'rect');
            return (
              h.setAttributeNS(n, 'x', t.toString()),
              h.setAttributeNS(n, 'y', c.toString()),
              h.setAttributeNS(n, 'height', l.toString()),
              h.setAttributeNS(n, 'width', u.toString()),
              h.setAttributeNS(n, 'fill', '#000000'),
              h
            );
          }),
          (o.prototype.encode = function (n, o) {
            var c = t.QRCodeDecoderErrorCorrectionLevel.L;
            if (n && void 0 !== n.get(t.EncodeHintType.ERROR_CORRECTION)) {
              var l = n.get(t.EncodeHintType.ERROR_CORRECTION).toString();
              c = t.QRCodeDecoderErrorCorrectionLevel.fromString(l);
            }
            return t.QRCodeEncoder.encode(o, c, n);
          }),
          (o.prototype.renderResult = function (n, o, c, l) {
            var u = n.getMatrix();
            if (null === u) throw new t.IllegalStateException();
            var h = u.getWidth(),
              S = u.getHeight(),
              s = h + 2 * l,
              E = S + 2 * l,
              p = Math.max(o, s),
              f = Math.max(c, E),
              v = Math.min(Math.floor(p / s), Math.floor(f / E)),
              N = Math.floor((p - h * v) / 2),
              w = Math.floor((f - S * v) / 2),
              R = this.createSVGElement(p, f),
              y = this.createSvgPathPlaceholderElement(o, c);
            (R.appendChild(y), this.containerElement.appendChild(R));
            for (var C = 0, _ = w; C < S; C++, _ += v)
              for (var b = 0, A = N; b < h; b++, A += v)
                if (1 === u.get(b, C)) {
                  var I = this.createSvgRectElement(A, _, v, v);
                  R.appendChild(I);
                }
            return R;
          }),
          (o.QUIET_ZONE_SIZE = 4),
          (o.SVG_NS = 'http://www.w3.org/2000/svg'),
          o
        );
      })();
  },
  1242,
  [1006],
);
