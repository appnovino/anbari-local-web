// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 999; original bundle: BarcodeReader-1a75eafb6c8f8ce840d19cf37b33c03a.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, e, d) {
    'use strict';
    (Object.defineProperty(e, '__esModule', { value: !0 }),
      Object.defineProperty(e, 'DecodeHintType', {
        enumerable: !0,
        get: function () {
          return n.DecodeHintType;
        },
      }),
      Object.defineProperty(e, 'BarcodeReader', {
        enumerable: !0,
        get: function () {
          return s;
        },
      }));
    var t = r(d[0]),
      n = r(d[1]);
    class s extends t.BrowserMultiFormatReader {
      missedFrames = 0;
      decodeFromCanvas(t) {
        try {
          const n = super.decodeFromCanvas(t);
          return ((this.missedFrames = 0), n);
        } catch (s) {
          if (
            !(s instanceof n.NotFoundException) ||
            ++this.missedFrames % 3 != 0
          )
            throw s;
          const o = (this.rotatedCanvas ??=
            t.ownerDocument.createElement('canvas'));
          ((o.width = t.height), (o.height = t.width));
          const c = o.getContext('2d');
          if (!c) throw s;
          (c.translate(o.width, 0),
            c.rotate(Math.PI / 2),
            c.drawImage(t, 0, 0));
          const u = super.decodeFromCanvas(o);
          return ((this.missedFrames = 0), u);
        }
      }
    }
  },
  999,
  [1005, 1006],
);
