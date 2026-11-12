// Extracted verbatim from the PUBLIC WEB bundle; formatting only.
// Metro module 1001; original bundle: index-9276617a829a3984ed22a1c59bc256bb.js
// This is a bundled module factory, not an original TSX source file.
__d(
  function (g, r, i, a, m, _e, d) {
    'use strict';
    (Object.defineProperty(_e, '__esModule', { value: !0 }),
      Object.defineProperty(_e, 'default', {
        enumerable: !0,
        get: function () {
          return u;
        },
      }));
    var e,
      t = r(d[0]),
      n = (e = t) && e.__esModule ? e : { default: e };
    async function o(e, t) {
      'tmpfile' === t.result &&
        console.warn(
          'Tmpfile is not implemented for web. Try base64 or file.\nFor compatibility, it currently returns the same result as data-uri',
        );
      let o = await (0, n.default)(e, { useCORS: !0 });
      if (t.width && t.height) {
        const e = document.createElement('canvas'),
          n = e.getContext('2d');
        if (!n) throw new Error('Failed to get 2d context from canvas');
        ((e.height = t.height),
          (e.width = t.width),
          n.drawImage(o, 0, 0, e.width, e.height),
          (o = e));
      }
      const u = 'image/' + ('jpg' === t.format ? 'jpeg' : t.format),
        l = o.toDataURL(u, t.quality);
      return 'data-uri' === t.result || 'tmpfile' === t.result
        ? l
        : l.replace(/data:image\/(\w+);base64,/, '');
    }
    var u = {
      captureRef: o,
      captureScreen: function (e) {
        return o(window.document.body, e);
      },
      releaseCapture: function (e) {},
    };
  },
  1001,
  [1002],
);
