// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1243; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'BrowserQRCodeSvgWriter', {
        enumerable: !0,
        get: function () {
          return n;
        },
      }));
    var t = r(d[0]),
      o = 'http://www.w3.org/2000/svg',
      n = (function () {
        function n() {}
        return (
          (n.prototype.write = function (o, c, u, l) {
            if (0 === o.length)
              throw new t.IllegalArgumentException('Found empty contents');
            if (c < 0 || u < 0)
              throw new t.IllegalArgumentException(
                'Requested dimensions are too small: ' + c + 'x' + u,
              );
            var f = t.QRCodeDecoderErrorCorrectionLevel.L,
              h = n.QUIET_ZONE_SIZE;
            if (l) {
              if (void 0 !== l.get(t.EncodeHintType.ERROR_CORRECTION)) {
                var s = l.get(t.EncodeHintType.ERROR_CORRECTION).toString();
                f = t.QRCodeDecoderErrorCorrectionLevel.fromString(s);
              }
              void 0 !== l.get(t.EncodeHintType.MARGIN) &&
                (h = Number.parseInt(
                  l.get(t.EncodeHintType.MARGIN).toString(),
                  10,
                ));
            }
            var E = t.QRCodeEncoder.encode(o, f, l);
            return this.renderResult(E, c, u, h);
          }),
          (n.prototype.writeToDom = function (t, o, n, c, u) {
            if ('string' == typeof t) {
              var l = document.querySelector(t);
              if (!l) throw new Error('Could no find the target HTML element.');
              t = l;
            }
            var f = this.write(o, n, c, u);
            t instanceof HTMLElement && t.appendChild(f);
          }),
          (n.prototype.renderResult = function (o, n, c, u) {
            var l = o.getMatrix();
            if (null === l) throw new t.IllegalStateException();
            for (
              var f = l.getWidth(),
                h = l.getHeight(),
                s = f + 2 * u,
                E = h + 2 * u,
                p = Math.max(n, s),
                v = Math.max(c, E),
                R = Math.min(Math.floor(p / s), Math.floor(v / E)),
                S = Math.floor((p - f * R) / 2),
                w = Math.floor((v - h * R) / 2),
                y = this.createSVGElement(p, v),
                C = 0,
                M = w;
              C < h;
              C++, M += R
            )
              for (var b = 0, A = S; b < f; b++, A += R)
                if (1 === l.get(b, C)) {
                  var I = this.createSvgRectElement(A, M, R, R);
                  y.appendChild(I);
                }
            return y;
          }),
          (n.prototype.createSVGElement = function (t, n) {
            var c = document.createElementNS(o, 'svg'),
              u = t.toString(),
              l = n.toString();
            return (
              c.setAttribute('height', l),
              c.setAttribute('width', u),
              c.setAttribute('viewBox', '0 0 ' + u + ' ' + l),
              c
            );
          }),
          (n.prototype.createSvgRectElement = function (t, n, c, u) {
            var l = document.createElementNS(o, 'rect');
            return (
              l.setAttribute('x', t.toString()),
              l.setAttribute('y', n.toString()),
              l.setAttribute('height', c.toString()),
              l.setAttribute('width', u.toString()),
              l.setAttribute('fill', '#000000'),
              l
            );
          }),
          (n.QUIET_ZONE_SIZE = 4),
          n
        );
      })();
  },
  1243,
  [1006],
);
